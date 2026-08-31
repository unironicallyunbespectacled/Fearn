// FEARN Curriculum Data — Spanish
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "u1",
        "name": "Unit 1",
        "goal": "By the end of this unit, learners can greet people appropriately and introduce themselves with basic personal details. Grammar/vocabulary focus: Greetings, ser vs. estar introduction, subject pronouns, basic self-introduction.",
        "level": "A1",
        "lessonIds": [
            "es-u1-l1",
            "es-u1-l2",
            "es-u1-l3",
            "es-u1-l4",
            "es-u1-l5"
        ]
    },
    {
        "id": "u2",
        "name": "Unit 2",
        "goal": "By the end of this unit, learners can state numbers, tell time, and talk about dates and days of the week. Grammar/vocabulary focus: Numbers 0–100, telling time, days/months, the existential hay.",
        "level": "A1",
        "lessonIds": [
            "es-u2-l1",
            "es-u2-l2",
            "es-u2-l3",
            "es-u2-l4",
            "es-u2-l5"
        ]
    },
    {
        "id": "u3",
        "name": "Unit 3",
        "goal": "By the end of this unit, learners can describe their immediate family and other people using simple sentences. Grammar/vocabulary focus: Family vocabulary, possessive adjectives, ser de + origin.",
        "level": "A1",
        "lessonIds": [
            "es-u3-l1",
            "es-u3-l2",
            "es-u3-l3",
            "es-u3-l4",
            "es-u3-l5"
        ]
    },
    {
        "id": "u4",
        "name": "Unit 4",
        "goal": "By the end of this unit, learners can form basic present-tense sentences describing states and actions. Grammar/vocabulary focus: Present tense of regular -ar/-er/-ir verbs, gender/number agreement.",
        "level": "A1",
        "lessonIds": [
            "es-u4-l1",
            "es-u4-l2",
            "es-u4-l3",
            "es-u4-l4",
            "es-u4-l5"
        ]
    },
    {
        "id": "u5",
        "name": "Unit 5",
        "goal": "By the end of this unit, learners can describe a typical daily routine using common action verbs. Grammar/vocabulary focus: Daily-routine reflexive verbs, key present-tense irregulars (tener, ir).",
        "level": "A1",
        "lessonIds": [
            "es-u5-l1",
            "es-u5-l2",
            "es-u5-l3",
            "es-u5-l4",
            "es-u5-l5"
        ]
    },
    {
        "id": "u6",
        "name": "Unit 6",
        "goal": "By the end of this unit, learners can order food and drink and talk about likes and dislikes at a basic level. Grammar/vocabulary focus: Food vocabulary, gustar-type verbs, ordering with querer/poder.",
        "level": "A1",
        "lessonIds": [
            "es-u6-l1",
            "es-u6-l2",
            "es-u6-l3",
            "es-u6-l4",
            "es-u6-l5"
        ]
    },
    {
        "id": "u7",
        "name": "Unit 7",
        "goal": "By the end of this unit, learners can narrate simple completed past events. Grammar/vocabulary focus: Preterite tense: regular and key irregular verbs for past narration.",
        "level": "A2",
        "lessonIds": [
            "es-u7-l1",
            "es-u7-l2",
            "es-u7-l3",
            "es-u7-l4",
            "es-u7-l5"
        ]
    },
    {
        "id": "u8",
        "name": "Unit 8",
        "goal": "By the end of this unit, learners can shop for goods, discuss prices, and compare items. Grammar/vocabulary focus: Shopping vocabulary, numbers for money, comparatives más/menos que.",
        "level": "A2",
        "lessonIds": [
            "es-u8-l1",
            "es-u8-l2",
            "es-u8-l3",
            "es-u8-l4",
            "es-u8-l5"
        ]
    },
    {
        "id": "u9",
        "name": "Unit 9",
        "goal": "By the end of this unit, learners can ask for and give directions and describe how to get somewhere. Grammar/vocabulary focus: Prepositions of place, por vs. para, giving directions.",
        "level": "A2",
        "lessonIds": [
            "es-u9-l1",
            "es-u9-l2",
            "es-u9-l3",
            "es-u9-l4",
            "es-u9-l5"
        ]
    },
    {
        "id": "u10",
        "name": "Unit 10",
        "goal": "By the end of this unit, learners can describe their home and daily surroundings in more detail. Grammar/vocabulary focus: Imperfect tense, describing home and past routines.",
        "level": "A2",
        "lessonIds": [
            "es-u10-l1",
            "es-u10-l2",
            "es-u10-l3",
            "es-u10-l4",
            "es-u10-l5"
        ]
    },
    {
        "id": "u11",
        "name": "Unit 11",
        "goal": "By the end of this unit, learners can talk about health, body parts, and give simple medical descriptions. Grammar/vocabulary focus: Body vocabulary, doler + indirect object pronoun, tener que obligation.",
        "level": "A2",
        "lessonIds": [
            "es-u11-l1",
            "es-u11-l2",
            "es-u11-l3",
            "es-u11-l4",
            "es-u11-l5"
        ]
    },
    {
        "id": "u12",
        "name": "Unit 12",
        "goal": "By the end of this unit, learners can discuss future plans and describe the weather. Grammar/vocabulary focus: Future tense (ir a + infinitive and simple future), weather expressions.",
        "level": "A2",
        "lessonIds": [
            "es-u12-l1",
            "es-u12-l2",
            "es-u12-l3",
            "es-u12-l4",
            "es-u12-l5"
        ]
    },
    {
        "id": "u13",
        "name": "Unit 13",
        "goal": "By the end of this unit, learners can talk about their job or studies and ongoing actions. Grammar/vocabulary focus: Present progressive estar + gerund, work/study vocabulary, saber vs. conocer.",
        "level": "B1",
        "lessonIds": [
            "es-u13-l1",
            "es-u13-l2",
            "es-u13-l3",
            "es-u13-l4",
            "es-u13-l5"
        ]
    },
    {
        "id": "u14",
        "name": "Unit 14",
        "goal": "By the end of this unit, learners can express opinions and preferences with simple justification. Grammar/vocabulary focus: Opinion verbs (creer, pensar, opinar), gustar/encantar/interesar expansion.",
        "level": "B1",
        "lessonIds": [
            "es-u14-l1",
            "es-u14-l2",
            "es-u14-l3",
            "es-u14-l4",
            "es-u14-l5"
        ]
    },
    {
        "id": "u15",
        "name": "Unit 15",
        "goal": "By the end of this unit, learners can plan a trip and describe past travel experiences. Grammar/vocabulary focus: Travel vocabulary, present perfect (haber + participle), talking about experiences.",
        "level": "B1",
        "lessonIds": [
            "es-u15-l1",
            "es-u15-l2",
            "es-u15-l3",
            "es-u15-l4",
            "es-u15-l5"
        ]
    },
    {
        "id": "u16",
        "name": "Unit 16",
        "goal": "By the end of this unit, learners can discuss hypothetical situations and simple conditions. Grammar/vocabulary focus: Present subjunctive introduction, hypotheticals with si + present indicative.",
        "level": "B1",
        "lessonIds": [
            "es-u16-l1",
            "es-u16-l2",
            "es-u16-l3",
            "es-u16-l4",
            "es-u16-l5"
        ]
    },
    {
        "id": "u17",
        "name": "Unit 17",
        "goal": "By the end of this unit, learners can understand and discuss media content and report what others said. Grammar/vocabulary focus: Passive se, media vocabulary, reported speech with decir que.",
        "level": "B1",
        "lessonIds": [
            "es-u17-l1",
            "es-u17-l2",
            "es-u17-l3",
            "es-u17-l4",
            "es-u17-l5"
        ]
    },
    {
        "id": "u18",
        "name": "Unit 18",
        "goal": "By the end of this unit, learners can talk about relationships and emotions in more nuanced ways. Grammar/vocabulary focus: Double object pronouns, subjunctive with emotion (alegrarse de que), relationships vocabulary.",
        "level": "B1",
        "lessonIds": [
            "es-u18-l1",
            "es-u18-l2",
            "es-u18-l3",
            "es-u18-l4",
            "es-u18-l5"
        ]
    },
    {
        "id": "u19",
        "name": "Unit 19",
        "goal": "By the end of this unit, learners can debate abstract topics and support opinions with reasons. Grammar/vocabulary focus: Subjunctive for doubt/denial (dudar que, no creer que), debate connectors.",
        "level": "B2",
        "lessonIds": [
            "es-u19-l1",
            "es-u19-l2",
            "es-u19-l3",
            "es-u19-l4",
            "es-u19-l5"
        ]
    },
    {
        "id": "u20",
        "name": "Unit 20",
        "goal": "By the end of this unit, learners can adjust tone and vocabulary between formal and informal contexts. Grammar/vocabulary focus: Formal usted vs. informal tú register, imperative mood.",
        "level": "B2",
        "lessonIds": [
            "es-u20-l1",
            "es-u20-l2",
            "es-u20-l3",
            "es-u20-l4",
            "es-u20-l5"
        ]
    },
    {
        "id": "u21",
        "name": "Unit 21",
        "goal": "By the end of this unit, learners can report what someone else said and narrate complex event sequences. Grammar/vocabulary focus: Reported speech backshift, imperfect subjunctive introduction.",
        "level": "B2",
        "lessonIds": [
            "es-u21-l1",
            "es-u21-l2",
            "es-u21-l3",
            "es-u21-l4",
            "es-u21-l5"
        ]
    },
    {
        "id": "u22",
        "name": "Unit 22",
        "goal": "By the end of this unit, learners can discuss more complex hypothetical and counterfactual situations. Grammar/vocabulary focus: Conditional + imperfect subjunctive (si tuviera... haría), advanced hypotheticals.",
        "level": "B2",
        "lessonIds": [
            "es-u22-l1",
            "es-u22-l2",
            "es-u22-l3",
            "es-u22-l4",
            "es-u22-l5"
        ]
    },
    {
        "id": "u23",
        "name": "Unit 23",
        "goal": "By the end of this unit, learners can discuss environmental and social issues with supporting detail. Grammar/vocabulary focus: Passive voice ser + participle, environment/society vocabulary.",
        "level": "B2",
        "lessonIds": [
            "es-u23-l1",
            "es-u23-l2",
            "es-u23-l3",
            "es-u23-l4",
            "es-u23-l5"
        ]
    },
    {
        "id": "u24",
        "name": "Unit 24",
        "goal": "By the end of this unit, learners can use common idiomatic expressions naturally in conversation. Grammar/vocabulary focus: Idiomatic expressions and common colloquialisms.",
        "level": "B2",
        "lessonIds": [
            "es-u24-l1",
            "es-u24-l2",
            "es-u24-l3",
            "es-u24-l4",
            "es-u24-l5"
        ]
    },
    {
        "id": "u25",
        "name": "Unit 25",
        "goal": "By the end of this unit, learners can construct nuanced arguments with supporting and opposing viewpoints. Grammar/vocabulary focus: Advanced connectors (no obstante, sin embargo, por consiguiente).",
        "level": "C1",
        "lessonIds": [
            "es-u25-l1",
            "es-u25-l2",
            "es-u25-l3",
            "es-u25-l4",
            "es-u25-l5"
        ]
    },
    {
        "id": "u26",
        "name": "Unit 26",
        "goal": "By the end of this unit, learners can use professional and academic language appropriately in writing and speech. Grammar/vocabulary focus: Professional/academic register, formal writing conventions.",
        "level": "C1",
        "lessonIds": [
            "es-u26-l1",
            "es-u26-l2",
            "es-u26-l3",
            "es-u26-l4",
            "es-u26-l5"
        ]
    },
    {
        "id": "u27",
        "name": "Unit 27",
        "goal": "By the end of this unit, learners can analyze literary and cultural texts and discuss their meaning. Grammar/vocabulary focus: Literary analysis vocabulary, close reading of Spanish-language excerpts.",
        "level": "C1",
        "lessonIds": [
            "es-u27-l1",
            "es-u27-l2",
            "es-u27-l3",
            "es-u27-l4",
            "es-u27-l5"
        ]
    },
    {
        "id": "u28",
        "name": "Unit 28",
        "goal": "By the end of this unit, learners can use a wide range of idioms and proverbs accurately. Grammar/vocabulary focus: Advanced idioms and refranes (proverbs).",
        "level": "C1",
        "lessonIds": [
            "es-u28-l1",
            "es-u28-l2",
            "es-u28-l3",
            "es-u28-l4",
            "es-u28-l5"
        ]
    },
    {
        "id": "u29",
        "name": "Unit 29",
        "goal": "By the end of this unit, learners can use discourse markers to structure extended, natural-sounding speech. Grammar/vocabulary focus: Discourse markers (o sea, es decir, ahora bien).",
        "level": "C1",
        "lessonIds": [
            "es-u29-l1",
            "es-u29-l2",
            "es-u29-l3",
            "es-u29-l4",
            "es-u29-l5"
        ]
    },
    {
        "id": "u30",
        "name": "Unit 30",
        "goal": "By the end of this unit, learners can understand native-speed humor, wordplay, and slang. Grammar/vocabulary focus: Native-speed slang, humor, and regional wordplay.",
        "level": "C2",
        "lessonIds": [
            "es-u30-l1",
            "es-u30-l2",
            "es-u30-l3",
            "es-u30-l4",
            "es-u30-l5"
        ]
    },
    {
        "id": "u31",
        "name": "Unit 31",
        "goal": "By the end of this unit, learners can understand and use specialized legal, medical, and technical vocabulary. Grammar/vocabulary focus: Legal, medical, and technical Spanish vocabulary.",
        "level": "C2",
        "lessonIds": [
            "es-u31-l1",
            "es-u31-l2",
            "es-u31-l3",
            "es-u31-l4",
            "es-u31-l5"
        ]
    },
    {
        "id": "u32",
        "name": "Unit 32",
        "goal": "By the end of this unit, learners can construct persuasive, rhetorically effective arguments. Grammar/vocabulary focus: Rhetorical persuasion structures, rhetorical questions.",
        "level": "C2",
        "lessonIds": [
            "es-u32-l1",
            "es-u32-l2",
            "es-u32-l3",
            "es-u32-l4",
            "es-u32-l5"
        ]
    },
    {
        "id": "u33",
        "name": "Unit 33",
        "goal": "By the end of this unit, learners can recognize and adapt to dialectal and sociolinguistic variation. Grammar/vocabulary focus: Dialectal variation across Spain and Latin America.",
        "level": "C2",
        "lessonIds": [
            "es-u33-l1",
            "es-u33-l2",
            "es-u33-l3",
            "es-u33-l4",
            "es-u33-l5"
        ]
    },
    {
        "id": "u34",
        "name": "Unit 34",
        "goal": "By the end of this unit, learners can synthesize all prior skills to communicate with near-native fluency across contexts. Grammar/vocabulary focus: Capstone: mixed-register fluency synthesis project.",
        "level": "C2",
        "lessonIds": [
            "es-u34-l1",
            "es-u34-l2",
            "es-u34-l3",
            "es-u34-l4",
            "es-u34-l5"
        ]
    }
];
  var LESSONS = {
  "es-u1-l1": {
    "id": "es-u1-l1",
    "unit": "es-u1",
    "level": "A1",
    "objective": "Spanish Phonics (Single 'r' vs Trilled 'rr', 'ñ', Silent 'h') & Courtesy Greetings: Master essential daily greetings (Hola, Buenos días) and polite conversation openers.",
    "prerequisites": [],
    "warmup": {
      "srsPull": true,
      "reviewFocus": []
    },
    "presentation": {
      "explanation": "Welcome to Spanish (Español)! Spanish has one of the most phonetic spelling systems in the world, with five pure vowels (a, e, i, o, u) and clear consonant and accent rules: (1) **Single 'r' vs Trilled 'rr'**: A single 'r' between vowels is a quick alveolar tap [ɾ] (*pero* = but), whereas double 'rr' or an initial 'r' is a forceful multi-tap trill [r] (*perro* = dog); (2) **The letter 'ñ'**: Represents the voiced palatal nasal [ɲ] (like 'ny' in canyon, e.g. *año* = year, *español*); (3) **Silent 'h'**: The letter 'h' is always completely silent in Spanish (*hola* is pronounced /o-la/, *hacer* /a-ser/); (4) **Letters 'c' and 'g'**: 'c' is soft (s/th) before e/i and hard (k) before a/o/u; 'g' is soft (h/kh) before e/i and hard (g) before a/o/u; (5) **Written Accents (Tildes: á, é, í, ó, ú)**: A graphic accent indicates stress on that vowel (e.g. *está*, *días*, *adiós*, *estás*) or distinguishes words (*tú* you vs *tu* your). Essential greetings include «¡Hola!» (*Hello*), «Buenos días» (*Good morning*), «Buenas tardes» (*Good afternoon*), and «¿Cómo estás?» (*How are you?*). Note Spanish inverted punctuation marks (¡ ! and ¿ ?) opening all exclamatory and interrogative sentences.",
      "examples": [
        {
          "target": "¡Hola! Buenos días, ¿cómo está usted? — Muy bien, gracias.",
          "reading": "O-la! BWE-nos DEE-as, KO-mo es-TA oos-TED? — Mwee byehn, GRA-syas.",
          "translation": "Hello! Good morning, how are you (formal)? — Very well, thank you."
        },
        {
          "target": "Mucho gusto en conocerte. ¡Hasta luego!",
          "reading": "MOO-cho GOOS-to en ko-no-SER-te. AS-ta LWE-go!",
          "translation": "Pleasure to meet you (informal). See you later!"
        }
      ],
      "mnemonics": [
        "Silent 'h' (¡Hola! = /o-la/), tap 'r' vs trill 'rr' (pero vs perro), ñ = ny. Spanish always begins exclamations with ¡ and questions with ¿."
      ],
      "culturalNotes": [
        "In Spanish-speaking cultures, greeting with a handshake or a light cheek kiss (un beso) is standard social etiquette upon meeting friends and acquaintances."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "It's 9 AM. Which greeting fits?",
          "options": [
            "Adiós (1.1)",
            "Buenas noches (1.2)",
            "Buenas tardes (1.3)",
            "Buenos días (1.4)"
          ],
          "answerIndex": 3,
          "explanation": "Buenos días is used in the morning."
        },
        {
          "prompt": "It's 9 PM. Which greeting fits?",
          "options": [
            "Hola",
            "Buenas noches",
            "Buenos días",
            "Buenas tardes"
          ],
          "answerIndex": 1,
          "explanation": "Buenas noches covers evening and night."
        },
        {
          "prompt": "Which greeting works at any time of day?",
          "options": [
            "Buenas noches",
            "Buenos días",
            "Buenas tardes",
            "Hola"
          ],
          "answerIndex": 3,
          "explanation": "Hola is time-independent."
        },
        {
          "prompt": "How do you informally ask 'How are you?'",
          "options": [
            "¿Qué es esto?",
            "¿Cómo está usted?",
            "¿Cómo se llama?",
            "¿Cómo estás?"
          ],
          "answerIndex": 3,
          "explanation": "¿Cómo estás? is the informal (tú) form."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which farewell most strongly implies 'we will meet again soon'?",
          "options": [
            "Mucho gusto (1.1)",
            "Buenas noches (1.2)",
            "Adiós (1.3)",
            "Hasta pronto (1.4)"
          ],
          "answerIndex": 3,
          "explanation": "Hasta pronto = \"see you soon.\""
        },
        {
          "prompt": "Translate: 'Nice to meet you.'",
          "options": [
            "¿Cómo estás?",
            "Buenas tardes",
            "Hasta luego",
            "Mucho gusto"
          ],
          "answerIndex": 3,
          "explanation": "Mucho gusto is the standard \"nice to meet you.\""
        },
        {
          "prompt": "Which verb is used in ¿Cómo estás? — describing a temporary state?",
          "options": [
            "Tener",
            "Ser",
            "Ir",
            "Estar"
          ],
          "answerIndex": 3,
          "explanation": "Estar is used for states/conditions like how someone is feeling."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Select the correct morning greeting.",
          "options": [
            "Buenos días",
            "Buenas tardes",
            "Buenas noches",
            "Adiós"
          ],
          "answerIndex": 0,
          "explanation": "Buenos días = good morning.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'How are you?' (informal)",
          "options": [
            "¿Cómo se llama?",
            "¿Qué tal usted?",
            "¿Cómo está usted?",
            "¿Cómo estás?"
          ],
          "answerIndex": 3,
          "explanation": "¿Cómo estás? is informal, using tú.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which response means 'so-so'?",
          "options": [
            "Gracias",
            "Bien",
            "Más o menos",
            "Mal"
          ],
          "answerIndex": 2,
          "explanation": "Más o menos = so-so / more or less.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which greeting covers both 'good evening' and 'good night'?",
          "options": [
            "Buenos días",
            "Buenas noches",
            "Hola",
            "Buenas tardes"
          ],
          "answerIndex": 1,
          "explanation": "Buenas noches serves both meanings.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Nice to meet you.'",
          "options": [
            "Mucho gusto",
            "Hasta luego",
            "¿Y tú?",
            "Buenas tardes"
          ],
          "answerIndex": 0,
          "explanation": "Mucho gusto = nice to meet you.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which farewell is a casual, Italian-derived word common across Latin America?",
          "options": [
            "Adiós",
            "Hasta pronto",
            "Buenas noches",
            "Chao"
          ],
          "answerIndex": 3,
          "explanation": "Chao is borrowed from Italian ciao and widely used casually.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 1: Foundational & Structural Mastery (¡Hola! Buenos días, ¿cómo está)"
  },
  "es-u1-l2": {
    "id": "es-u1-l2",
    "unit": "es-u1",
    "level": "A1",
    "objective": "Distinguish ser and estar at a basic level and use each correctly for identity versus temporary states.",
    "prerequisites": [
      "es-u1-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l1"
      ]
    },
    "presentation": {
      "explanation": "Spanish has two verbs that both translate as 'to be' in English, and mixing them up is one of the most persistent traps for beginners — because English gives no clue which one to use. Ser is for things that are essentially permanent or definitional: identity, profession, nationality, physical characteristics, and time/dates (Son las tres — 'It is three o'clock'). Estar is for things that are conditions, locations, or states that can change: emotions, health, location, and temporary physical states. A classic minimal pair makes the difference concrete: El café es caliente describes coffee as a category of drink that is (by nature) served hot — but you'd almost never say this. Instead, El café está frío ('The coffee is cold') describes its current, changeable temperature — this is the natural, correct sentence, because temperature is a state, not an identity. Similarly, Ella es alta ('She is tall') describes an inherent trait with ser, while Ella está cansada ('She is tired') describes a temporary state with estar. As a rule of thumb: if you could imagine the description changing by tomorrow without the thing/person becoming 'different,' lean estar; if the description defines what something fundamentally is, lean ser.",
      "examples": [
        {
          "target": "Yo soy estudiante.",
          "reading": "",
          "translation": "I am a student. (identity/profession — ser)"
        },
        {
          "target": "Yo estoy cansado.",
          "reading": "",
          "translation": "I am tired. (temporary state — estar)"
        },
        {
          "target": "El café está frío.",
          "reading": "",
          "translation": "The coffee is cold. (changeable condition — estar)"
        },
        {
          "target": "Ella es alta.",
          "reading": "",
          "translation": "She is tall. (inherent trait — ser)"
        },
        {
          "target": "Madrid está en España.",
          "reading": "",
          "translation": "Madrid is in Spain. (location — estar)"
        },
        {
          "target": "Hoy es lunes.",
          "reading": "",
          "translation": "Today is Monday. (time/date — ser)"
        }
      ],
      "mnemonics": [
        "ESTAR = states that change (Emotion, State, Temporary condition, Action-in-progress, Result/location — the classic PLACE/mood mnemonic). SER = definitions that stay (identity, origin, time, characteristics, relationship).",
        "'The coffee IS cold' works with estar because a coffee doesn't stop being coffee just because its temperature changes — the temperature is a passing state."
      ],
      "culturalNotes": [
        "Because English collapses both verbs into one \"to be,\" this distinction has no direct shortcut — native intuition here comes from repeated exposure to which contexts each verb \"feels right\" in, not from a rule you can apply 100% mechanically."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "El café ___ frío. (The coffee is cold.)",
          "options": [
            "es (2.1)",
            "está (2.2)",
            "están (2.3)",
            "son (2.4)"
          ],
          "answerIndex": 1,
          "explanation": "Temperature is a changeable condition, so estar is used."
        },
        {
          "prompt": "Ella ___ alta. (She is tall — an inherent trait.)",
          "options": [
            "es",
            "está",
            "estar",
            "ser"
          ],
          "answerIndex": 0,
          "explanation": "Physical characteristics use ser."
        },
        {
          "prompt": "Yo ___ cansado. (I am tired.)",
          "options": [
            "soy",
            "estoy",
            "está",
            "es"
          ],
          "answerIndex": 1,
          "explanation": "Tiredness is a temporary state — estar."
        },
        {
          "prompt": "Madrid ___ en España. (Madrid is in Spain.)",
          "options": [
            "es",
            "está",
            "son",
            "ser"
          ],
          "answerIndex": 1,
          "explanation": "Location always uses estar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Hoy ___ lunes. (Today is Monday.)",
          "options": [
            "está (2.1)",
            "son (2.2)",
            "están (2.3)",
            "es (2.4)"
          ],
          "answerIndex": 3,
          "explanation": "Dates and days of the week use ser."
        },
        {
          "prompt": "Which of these correctly uses ser for a profession?",
          "options": [
            "Yo soy estudiante.",
            "Yo está estudiante.",
            "Yo son estudiante.",
            "Yo estoy estudiante."
          ],
          "answerIndex": 0,
          "explanation": "Profession/identity uses ser: soy estudiante."
        },
        {
          "prompt": "Why is El café está frío correct rather than es frío?",
          "options": [
            "Because temperature is a changeable state, not a defining identity",
            "Because está is more formal",
            "There is no difference; both are equally correct",
            "Because coffee is always cold by definition"
          ],
          "answerIndex": 0,
          "explanation": "Temperature can change without the coffee stopping being coffee, so it takes estar."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "El café ___ frío.",
          "options": [
            "es",
            "son",
            "ser",
            "está"
          ],
          "answerIndex": 3,
          "explanation": "Changeable condition → estar.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Yo ___ estudiante.",
          "options": [
            "está",
            "es",
            "soy",
            "estoy"
          ],
          "answerIndex": 2,
          "explanation": "Profession/identity → ser.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb is used for location?",
          "options": [
            "Ser",
            "Estar",
            "Hacer",
            "Tener"
          ],
          "answerIndex": 1,
          "explanation": "Location always takes estar.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb is used for dates and days of the week?",
          "options": [
            "Ser",
            "Tener",
            "Estar",
            "Ir"
          ],
          "answerIndex": 0,
          "explanation": "Time expressions use ser (Hoy es lunes).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ cansada hoy, pero normalmente ___ muy activa. (She is tired today, but normally she is very active.)",
          "options": [
            "es / está",
            "es / es",
            "está / está",
            "está / es"
          ],
          "answerIndex": 3,
          "explanation": "Temporary tiredness → está; inherent trait (active personality) → es.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which rule of thumb best separates the two verbs?",
          "options": [
            "Ser is for questions, estar is for statements",
            "Estar is only used with people, ser only with objects",
            "Ser defines what something fundamentally is; estar describes a state that could change",
            "They are fully interchangeable"
          ],
          "answerIndex": 2,
          "explanation": "This is the core conceptual distinction between the two verbs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 2: Foundational & Structural Mastery (Yo soy estudiante.)"
  },
  "es-u1-l3": {
    "id": "es-u1-l3",
    "unit": "es-u1",
    "level": "A1",
    "objective": "Introduce yourself by name using subject pronouns and the present tense of ser, and ask others for their name.",
    "prerequisites": [
      "es-u1-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "Spanish subject pronouns (yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes) exist but are frequently dropped, because the verb ending already signals who's doing the action — unlike English, where 'I am,' 'you are,' and 'she is' all use the same word 'are/am/is' and need the pronoun to disambiguate. The verb ser conjugates irregularly in the present tense: soy (I am), eres (you are, informal), es (he/she/it is, you are formal), somos (we are), sois (you all are, Spain informal), son (they/you all are). There are two common ways to give your name: Soy [name] (I am [name], using ser for identity) and Me llamo [name] (literally 'I call myself [name]', using the reflexive verb llamarse) — both are equally natural and interchangeable in everyday speech. To ask someone's name, ¿Cómo te llamas? (informal) or ¿Cómo se llama usted? (formal) are the standard questions.",
      "examples": [
        {
          "target": "Yo soy María.",
          "reading": "",
          "translation": "I am María."
        },
        {
          "target": "Me llamo María.",
          "reading": "",
          "translation": "My name is María. (lit. I call myself María)"
        },
        {
          "target": "¿Cómo te llamas?",
          "reading": "",
          "translation": "What's your name? (informal)"
        },
        {
          "target": "¿Cómo se llama usted?",
          "reading": "",
          "translation": "What's your name? (formal)"
        },
        {
          "target": "Tú eres estudiante.",
          "reading": "",
          "translation": "You are a student."
        },
        {
          "target": "Ellos son de México.",
          "reading": "",
          "translation": "They are from Mexico."
        }
      ],
      "mnemonics": [
        "soy / eres / es / somos / sois / son — practice it like a little song; the pattern doesn't follow the -ar/-er/-ir rules because ser is irregular.",
        "Me llamo literally means 'I call myself' — llamar (to call) + reflexive me — so you're naming yourself, not just stating an identity."
      ],
      "culturalNotes": [
        "Subject pronouns are used for emphasis or contrast (Yo soy María, pero él es Carlos — \"I am María, but HE is Carlos\") more than as a grammatical requirement."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ María. (I am María.)",
          "options": [
            "soy (3.1)",
            "es (3.2)",
            "son (3.3)",
            "eres (3.4)"
          ],
          "answerIndex": 0,
          "explanation": "soy is the yo-form of ser."
        },
        {
          "prompt": "¿Cómo te ___? (What's your name? — informal)",
          "options": [
            "llamas",
            "llamo",
            "llaman",
            "llama"
          ],
          "answerIndex": 0,
          "explanation": "te llamas matches the tú (informal you) form."
        },
        {
          "prompt": "Tú ___ estudiante. (You are a student.)",
          "options": [
            "eres",
            "es",
            "somos",
            "soy"
          ],
          "answerIndex": 0,
          "explanation": "eres is the tú-form of ser."
        },
        {
          "prompt": "Which is an equally natural alternative to Yo soy Carlos?",
          "options": [
            "Te llamas Carlos.",
            "Es Carlos.",
            "Somos Carlos.",
            "Me llamo Carlos."
          ],
          "answerIndex": 3,
          "explanation": "Me llamo Carlos is interchangeable with Soy Carlos."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ellos ___ de México. (They are from Mexico.)",
          "options": [
            "es (3.1)",
            "son (3.2)",
            "somos (3.3)",
            "eres (3.4)"
          ],
          "answerIndex": 1,
          "explanation": "son is the ellos-form of ser."
        },
        {
          "prompt": "Formally ask someone their name.",
          "options": [
            "¿Cómo te llamas?",
            "¿Cómo se llama usted?",
            "¿Cómo soy?",
            "¿Cómo eres?"
          ],
          "answerIndex": 1,
          "explanation": "¿Cómo se llama usted? is the formal version."
        },
        {
          "prompt": "Why can Spanish speakers often drop yo, tú, él, etc.?",
          "options": [
            "Because the verb ending already shows who's doing the action",
            "Because pronouns are optional decoration with no grammatical role",
            "Because Spanish has no subject pronouns",
            "Because it is considered rude to use them"
          ],
          "answerIndex": 0,
          "explanation": "The conjugated verb ending encodes the subject, so the pronoun is often redundant."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ estudiante.",
          "options": [
            "eres",
            "sois",
            "soy",
            "es"
          ],
          "answerIndex": 2,
          "explanation": "soy = yo-form of ser.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nosotros ___ de España.",
          "options": [
            "son",
            "somos",
            "es",
            "eres"
          ],
          "answerIndex": 1,
          "explanation": "somos = nosotros-form of ser.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'What is your name?' (informal)",
          "options": [
            "¿Cómo te llamas?",
            "¿Cómo se llama usted?",
            "¿Cómo soy yo?",
            "¿Cómo eres tú?"
          ],
          "answerIndex": 0,
          "explanation": "¿Cómo te llamas? uses the informal reflexive form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which of these is a fully correct, natural way to give your name?",
          "options": [
            "Yo llama María.",
            "Yo llamo María.",
            "Me llama María.",
            "Me llamo María."
          ],
          "answerIndex": 3,
          "explanation": "Me llamo María correctly uses the reflexive first-person form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ de Argentina.",
          "options": [
            "soy",
            "eres",
            "es",
            "somos"
          ],
          "answerIndex": 2,
          "explanation": "es = él/ella-form of ser.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why are subject pronouns often used even though they can be dropped?",
          "options": [
            "They are grammatically required in every sentence",
            "For emphasis or contrast",
            "To make the sentence shorter",
            "Only in questions"
          ],
          "answerIndex": 1,
          "explanation": "Pronouns add emphasis/contrast even when the verb ending already identifies the subject.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 3: Foundational & Structural Mastery (Yo soy María.)"
  },
  "es-u1-l4": {
    "id": "es-u1-l4",
    "unit": "es-u1",
    "level": "A1",
    "objective": "State your nationality and origin using ser de + country, and form basic negative sentences with no.",
    "prerequisites": [
      "es-u1-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l3"
      ]
    },
    "presentation": {
      "explanation": "To say where you're from, Spanish uses ser + de + [place]: Soy de México (I'm from Mexico), ¿De dónde eres? (Where are you from? — informal). Nationality can also be expressed with an adjective that agrees in gender and number with the person: soy mexicano/mexicana (I am Mexican, masc./fem.), somos mexicanos/mexicanas. Note the pattern that most nationality adjectives ending in a consonant add -a for the feminine (español → española), while those already ending in -a, -e, or accented vowels often stay the same (canadiense stays canadiense for both genders). Negation in Spanish is refreshingly simple compared to many languages: just place no directly before the conjugated verb — No soy de España (I am not from Spain), No soy estudiante (I am not a student). Unlike English, there's no auxiliary verb needed ('don't/doesn't') — no attaches straight onto the main verb.",
      "examples": [
        {
          "target": "Soy de México.",
          "reading": "",
          "translation": "I'm from Mexico."
        },
        {
          "target": "¿De dónde eres?",
          "reading": "",
          "translation": "Where are you from?"
        },
        {
          "target": "Soy mexicano.",
          "reading": "",
          "translation": "I am Mexican. (masculine)"
        },
        {
          "target": "Somos mexicanas.",
          "reading": "",
          "translation": "We are Mexican. (feminine plural)"
        },
        {
          "target": "No soy de España.",
          "reading": "",
          "translation": "I am not from Spain."
        },
        {
          "target": "Ella no es estudiante.",
          "reading": "",
          "translation": "She is not a student."
        }
      ],
      "mnemonics": [
        "de + place = origin, always with ser: think 'ser de' as one glued unit meaning 'to be FROM.'",
        "no simply parks itself right before the verb — no extra word needed, unlike English \"don't/doesn't.\""
      ],
      "culturalNotes": [
        "Nationality adjectives are not capitalized in Spanish (mexicano, not Mexicano), unlike in English."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Soy ___ México. (I'm from Mexico.)",
          "options": [
            "en (4.1)",
            "a (4.2)",
            "por (4.3)",
            "de (4.4)"
          ],
          "answerIndex": 3,
          "explanation": "ser de + place expresses origin."
        },
        {
          "prompt": "Negate: Soy estudiante → ?",
          "options": [
            "No soy estudiante.",
            "Estudiante no soy.",
            "No estudiante soy.",
            "Soy no estudiante."
          ],
          "answerIndex": 0,
          "explanation": "no goes directly before the conjugated verb."
        },
        {
          "prompt": "A woman from Spain would say: Soy ___.",
          "options": [
            "español",
            "españolas",
            "española",
            "españoles"
          ],
          "answerIndex": 2,
          "explanation": "española is the feminine singular form."
        },
        {
          "prompt": "¿De dónde ___? (Where are you from? — informal)",
          "options": [
            "soy",
            "somos",
            "eres",
            "es"
          ],
          "answerIndex": 2,
          "explanation": "eres matches tú (informal you)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "A group of Mexican women would say: Somos ___.",
          "options": [
            "mexicano (4.1)",
            "mexicanos (4.2)",
            "mexicanas (4.3)",
            "mexicana (4.4)"
          ],
          "answerIndex": 2,
          "explanation": "Feminine plural agreement: mexicanas."
        },
        {
          "prompt": "Which nationality adjective stays the same for both masculine and feminine?",
          "options": [
            "español/española",
            "mexicano/mexicana",
            "americano/americana",
            "canadiense (both)"
          ],
          "answerIndex": 3,
          "explanation": "Adjectives ending in -e like canadiense do not change for gender."
        },
        {
          "prompt": "Translate: 'She is not from Spain.'",
          "options": [
            "Ella es de España.",
            "Ella no es de España.",
            "No ella es España.",
            "Ella no de España."
          ],
          "answerIndex": 1,
          "explanation": "no is placed directly before the conjugated verb es."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Soy ___ Argentina.",
          "options": [
            "en",
            "de",
            "a",
            "con"
          ],
          "answerIndex": 1,
          "explanation": "ser de + place = origin.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Negate: Ella es estudiante.",
          "options": [
            "Ella no es estudiante.",
            "Ella es no estudiante.",
            "No ella es estudiante.",
            "Ella es estudiante no."
          ],
          "answerIndex": 0,
          "explanation": "no precedes the conjugated verb.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A man from Mexico says: Soy ___.",
          "options": [
            "mexicana",
            "mexicanas",
            "mexicanos",
            "mexicano"
          ],
          "answerIndex": 3,
          "explanation": "Masculine singular: mexicano.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which question asks 'Where are you from?' informally?",
          "options": [
            "¿Cómo te llamas?",
            "¿Cómo estás?",
            "¿De dónde eres?",
            "¿Qué es esto?"
          ],
          "answerIndex": 2,
          "explanation": "¿De dónde eres? asks about origin.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How is nationality capitalized in Spanish, e.g. 'mexicano'?",
          "options": [
            "Never capitalized",
            "Only at the start of a sentence like any word",
            "Always capitalized",
            "Only for countries in Europe"
          ],
          "answerIndex": 1,
          "explanation": "Nationality adjectives are lowercase unless they start a sentence — like any regular adjective.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sentence is correctly negated?",
          "options": [
            "No soy de España.",
            "De España no soy.",
            "Soy de no España.",
            "Soy no de España."
          ],
          "answerIndex": 0,
          "explanation": "no goes directly before the conjugated verb soy.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 4: Foundational & Structural Mastery (Soy de México.)"
  },
  "es-u1-l5": {
    "id": "es-u1-l5",
    "unit": "es-u1",
    "level": "A1",
    "objective": "Combine greetings, ser/estar, and self-introduction into a short, natural first-meeting conversation.",
    "prerequisites": [
      "es-u1-l1",
      "es-u1-l2",
      "es-u1-l3",
      "es-u1-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l1",
        "es-u1-l2",
        "es-u1-l3",
        "es-u1-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson threads together every piece from Unit 1 into a single realistic exchange — the kind of conversation you'd have meeting someone at a party or a class in a Spanish-speaking country. Watch how the pieces interlock: a time-appropriate greeting opens it, ¿Cómo estás? uses estar for a temporary state (how someone feels right now), Me llamo / Soy uses ser for a name, ¿De dónde eres? and soy de use ser for origin, and a farewell closes it out. The trickiest recurring decision throughout is choosing ser vs. estar correctly in a live exchange rather than in an isolated drill — that fluency only comes from producing full exchanges like this one, not from memorizing the rule in the abstract.",
      "examples": [
        {
          "target": "A: ¡Hola! Buenas tardes.",
          "reading": "",
          "translation": "A: Hi! Good afternoon."
        },
        {
          "target": "B: Buenas tardes. ¿Cómo estás?",
          "reading": "",
          "translation": "B: Good afternoon. How are you?"
        },
        {
          "target": "A: Estoy bien, gracias. Me llamo Ana. ¿Y tú?",
          "reading": "",
          "translation": "A: I'm well, thanks. My name is Ana. And you?"
        },
        {
          "target": "B: Me llamo Luis. Mucho gusto.",
          "reading": "",
          "translation": "B: My name is Luis. Nice to meet you."
        },
        {
          "target": "A: ¿De dónde eres, Luis?",
          "reading": "",
          "translation": "A: Where are you from, Luis?"
        },
        {
          "target": "B: Soy de Colombia. ¿Y tú?",
          "reading": "",
          "translation": "B: I'm from Colombia. And you?"
        },
        {
          "target": "A: Soy de México. ¡Hasta luego, Luis!",
          "reading": "",
          "translation": "A: I'm from Mexico. See you later, Luis!"
        }
      ],
      "mnemonics": [
        "In this dialogue, every está/estás tracks something temporary (mood right now); every es/eres/soy tracks something lasting (name, origin) — a live example of the ser/estar rule in action."
      ],
      "culturalNotes": [
        "Repeating ¿Y tú? to bounce a question back is extremely common in Spanish conversation, exactly as in the earlier Japanese pattern of returning a question — it keeps the exchange balanced without restating the whole question."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo ___ tú? (asking how someone feels right now)",
          "options": [
            "eres (5.1)",
            "estás (5.2)",
            "es (5.3)",
            "soy (5.4)"
          ],
          "answerIndex": 1,
          "explanation": "estás is used for a current, changeable state — how someone feels."
        },
        {
          "prompt": "___ de Colombia. (stating origin)",
          "options": [
            "Estoy",
            "Soy",
            "Está",
            "Es"
          ],
          "answerIndex": 1,
          "explanation": "Origin uses ser: soy de Colombia."
        },
        {
          "prompt": "What is the efficient way to return the question '¿Cómo estás?' after answering it?",
          "options": [
            "¿Eres tú?",
            "¿Y tú?",
            "¿Cómo soy?",
            "¿De dónde?"
          ],
          "answerIndex": 1,
          "explanation": "¿Y tú? bounces the question back naturally."
        },
        {
          "prompt": "Which farewell fits ending a friendly first meeting where you expect to see the person again?",
          "options": [
            "Hasta luego",
            "Buenas noches",
            "Adiós",
            "No"
          ],
          "answerIndex": 0,
          "explanation": "Hasta luego implies meeting again, fitting a friendly close."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Put in order: 1) Me llamo Ana 2) Buenas tardes 3) ¿Cómo estás? — what comes first?",
          "options": [
            "Me llamo Ana (5.1)",
            "Buenas tardes (5.2)",
            "Order does not matter (5.3)",
            "¿Cómo estás? (5.4)"
          ],
          "answerIndex": 1,
          "explanation": "A time-of-day greeting typically opens the exchange."
        },
        {
          "prompt": "Translate: 'I'm well, thanks. Where are you from?'",
          "options": [
            "Estoy bien, gracias. ¿De dónde eres?",
            "Estoy bien, gracias. ¿Cómo te llamas?",
            "Es bien, gracias. ¿De dónde eres?",
            "Soy bien, gracias. ¿De dónde estás?"
          ],
          "answerIndex": 0,
          "explanation": "Estoy bien for a current state; ¿De dónde eres? for origin, both correctly matched to ser/estar."
        },
        {
          "prompt": "Why does ¿Cómo estás? use estar and not ser?",
          "options": [
            "Because it is a question",
            "There is no reason; both would work equally",
            "Because feelings/current states are changeable conditions",
            "Because estar is used for all questions about people"
          ],
          "answerIndex": 2,
          "explanation": "How someone feels right now is a temporary state, which takes estar."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo ___? (How are you? — informal)",
          "options": [
            "estás",
            "es",
            "son",
            "eres"
          ],
          "answerIndex": 0,
          "explanation": "estás fits a current, changeable state.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ de México. (I am from Mexico.)",
          "options": [
            "Estoy",
            "Es",
            "Está",
            "Soy"
          ],
          "answerIndex": 3,
          "explanation": "Origin uses ser: soy de México.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'My name is Luis. Nice to meet you.'",
          "options": [
            "Soy Luis. Buenas noches.",
            "Estoy Luis. Hasta luego.",
            "Me llamo Luis. Mucho gusto.",
            "Me llama Luis. Adiós."
          ],
          "answerIndex": 2,
          "explanation": "Me llamo Luis + Mucho gusto is the natural, correct exchange.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which question efficiently bounces a question back to the other speaker?",
          "options": [
            "¿Cómo?",
            "¿Y tú?",
            "¿De dónde?",
            "¿Qué es esto?"
          ],
          "answerIndex": 1,
          "explanation": "¿Y tú? is the standard, efficient bounce-back.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In this dialogue, which verb form is used for 'temporary state' vs. 'lasting fact' respectively?",
          "options": [
            "estar for temporary, ser for lasting",
            "Both are used interchangeably",
            "Neither verb applies to this distinction",
            "ser for temporary, estar for lasting"
          ],
          "answerIndex": 0,
          "explanation": "estar = temporary (feelings), ser = lasting (name, origin).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which farewell implies you expect to see the person again?",
          "options": [
            "Adiós",
            "No",
            "Es",
            "Hasta luego"
          ],
          "answerIndex": 3,
          "explanation": "Hasta luego = \"see you later,\" implying another meeting.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 5: Foundational & Structural Mastery (A: ¡Hola! Buenas tardes.)"
  },
  "es-u2-l1": {
    "id": "es-u2-l1",
    "unit": "es-u2",
    "level": "A1",
    "objective": "Count from 0 to 100 in Spanish and use numbers in basic everyday contexts.",
    "prerequisites": [
      "es-u1-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l3",
        "es-u1-l4"
      ]
    },
    "presentation": {
      "explanation": "Spanish numbers 0–15 are each their own word: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince. From 16–29, numbers fuse into single words: dieciséis (16, literally 'diez y seis'), diecisiete (17), veintiuno (21), veintidós (22) — note the accent marks that appear to preserve stress (dieciséis, veintidós, veintitrés). From 30 onward, the pattern opens back up into three separate words joined by y ('and'): treinta y uno (31), cuarenta y dos (42), cincuenta y tres (53). The tens themselves are their own words that must be memorized: veinte (20), treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90), cien (100, becomes ciento when followed by more digits: ciento uno = 101). Uno shortens to un before a masculine singular noun (un libro, 'one book') but stays uno when counting on its own.",
      "examples": [
        {
          "target": "cero, uno, dos, tres, cuatro, cinco",
          "reading": "",
          "translation": "0, 1, 2, 3, 4, 5"
        },
        {
          "target": "dieciséis, diecisiete, dieciocho, diecinueve",
          "reading": "",
          "translation": "16, 17, 18, 19"
        },
        {
          "target": "veinte, veintiuno, veintidós",
          "reading": "",
          "translation": "20, 21, 22"
        },
        {
          "target": "treinta y uno, cuarenta y dos",
          "reading": "",
          "translation": "31, 42"
        },
        {
          "target": "cien, ciento uno",
          "reading": "",
          "translation": "100, 101"
        },
        {
          "target": "un libro / una casa",
          "reading": "",
          "translation": "one book / one house (uno shortens before nouns)"
        }
      ],
      "mnemonics": [
        "16–29 fuse into one word (dieciséis, veintidós); 30+ splits back into three words with y (treinta y uno) — think '16–29 glue together, 30+ spread back out.'",
        "cien becomes ciento only when more digits follow: cien (exactly 100) vs. ciento uno (101) — 'cien' alone, 'ciento' when it's not alone."
      ],
      "culturalNotes": [
        "Spain traditionally writes numbers with a period for thousands and a comma for decimals (1.000,50), the reverse of US English conventions — worth knowing if you read prices in different countries."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 17?",
          "options": [
            "diesisiete (6.1)",
            "diez y siete separately as the standard form (6.2)",
            "sietediez (6.3)",
            "diecisiete (6.4)"
          ],
          "answerIndex": 3,
          "explanation": "17 fuses into diecisiete."
        },
        {
          "prompt": "How do you say 21?",
          "options": [
            "veinteuno",
            "ventiuno",
            "veinte y uno",
            "veintiuno"
          ],
          "answerIndex": 3,
          "explanation": "21 fuses into veintiuno (note the accent-preserving spelling)."
        },
        {
          "prompt": "How do you say 42?",
          "options": [
            "cuarentidós",
            "cuarentaydós",
            "quarenta y dos",
            "cuarenta y dos"
          ],
          "answerIndex": 3,
          "explanation": "30+ splits into three separate words joined by y."
        },
        {
          "prompt": "How do you say exactly 100?",
          "options": [
            "cientos",
            "ciento",
            "un cien",
            "cien"
          ],
          "answerIndex": 3,
          "explanation": "cien is used for exactly 100; ciento only when more digits follow."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How do you say 101?",
          "options": [
            "ciento uno (6.1)",
            "cientouno (6.2)",
            "un cien y uno (6.3)",
            "cien uno (6.4)"
          ],
          "answerIndex": 0,
          "explanation": "ciento is used once more digits follow."
        },
        {
          "prompt": "Which form of 'one' is used before a masculine singular noun, e.g. 'one book'?",
          "options": [
            "unos libro",
            "una libro",
            "uno libro",
            "un libro"
          ],
          "answerIndex": 3,
          "explanation": "uno shortens to un before a masculine singular noun."
        },
        {
          "prompt": "Which number range in Spanish fuses into single words with accent marks?",
          "options": [
            "30–99",
            "0–15",
            "100+",
            "16–29"
          ],
          "answerIndex": 3,
          "explanation": "16–29 fuse into single words like dieciséis, veintidós."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "How do you say 16?",
          "options": [
            "diez y seis",
            "diesiseis",
            "seisdiez",
            "dieciséis"
          ],
          "answerIndex": 3,
          "explanation": "16 = dieciséis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 53?",
          "options": [
            "tres y cincuenta",
            "cincuenta tres",
            "cincuenta y tres",
            "cincuentaitrés"
          ],
          "answerIndex": 2,
          "explanation": "30+ numbers use [tens] y [ones].",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'one house' (una casa or un casa)?",
          "options": [
            "uno casa",
            "una casa",
            "unos casa",
            "un casa"
          ],
          "answerIndex": 1,
          "explanation": "una agrees with the feminine noun casa.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which is correct for exactly 100 books?",
          "options": [
            "cien libros",
            "ciento libros",
            "un cien libros",
            "cientos libro"
          ],
          "answerIndex": 0,
          "explanation": "cien is used for exactly 100, even before a noun.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 89?",
          "options": [
            "noventa menos uno",
            "ochentaynueve",
            "ocho y nueve",
            "ochenta y nueve"
          ],
          "answerIndex": 3,
          "explanation": "80+ numbers use [tens] y [ones].",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which decade word means '70'?",
          "options": [
            "sesenta",
            "ochenta",
            "setenta",
            "noventa"
          ],
          "answerIndex": 2,
          "explanation": "setenta = 70.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 1: Foundational & Structural Mastery (cero, uno, dos, tres, cuatro, )"
  },
  "es-u2-l2": {
    "id": "es-u2-l2",
    "unit": "es-u2",
    "level": "A1",
    "objective": "Tell the time in Spanish using ser + hour and express minutes, half-hours, and quarter-hours.",
    "prerequisites": [
      "es-u2-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "Telling time in Spanish uses ser, but with a quirk: son las for anything except one o'clock, which uses es la — because la hora (the hour) is singular for 1:00 but plural (las horas) for every other hour. Es la una (It's 1:00), but Son las dos, Son las tres, and so on. Minutes past the hour are added with y: Son las tres y diez (3:10), and the two most common fractions have their own words — y media (half past, 3:30) and y cuarto (quarter past, 3:15). Past the half hour, Spanish often switches to counting down to the next hour with menos ('minus/to'): Son las cuatro menos cuarto (quarter to four, i.e. 3:45) is more natural than tres y cuarenta y cinco in many dialects, though both are understood. To specify morning/afternoon/evening precisely, de la mañana, de la tarde, and de la noche attach after the time: Son las tres de la tarde (It's 3 PM).",
      "examples": [
        {
          "target": "Es la una.",
          "reading": "",
          "translation": "It's 1:00. (singular — una hora)"
        },
        {
          "target": "Son las dos.",
          "reading": "",
          "translation": "It's 2:00. (plural — dos horas)"
        },
        {
          "target": "Son las tres y diez.",
          "reading": "",
          "translation": "It's 3:10."
        },
        {
          "target": "Son las tres y media.",
          "reading": "",
          "translation": "It's 3:30."
        },
        {
          "target": "Son las cuatro menos cuarto.",
          "reading": "",
          "translation": "It's a quarter to four (3:45)."
        },
        {
          "target": "Son las tres de la tarde.",
          "reading": "",
          "translation": "It's 3 PM."
        }
      ],
      "mnemonics": [
        "Es la una (singular 'the hour') vs. Son las dos/tres/... (plural 'the hours') — only 1:00 gets the singular verb because it's literally 'one hour,' not 'hours.'",
        "menos cuarto counts DOWN to the next hour, like saying \"quarter to\" in English — both languages borrow the same \"count toward the next hour\" logic past the half-hour mark."
      ],
      "culturalNotes": [
        "Many Spanish-speaking countries use the 24-hour clock in written/formal contexts (las quince horas = 3 PM) even while speaking with the 12-hour system day to day."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ la una. (It's 1:00.)",
          "options": [
            "Son (7.1)",
            "Es (7.2)",
            "Estoy (7.3)",
            "Está (7.4)"
          ],
          "answerIndex": 1,
          "explanation": "Es la una uses the singular because \"hour\" is singular at 1:00."
        },
        {
          "prompt": "___ las tres. (It's 3:00.)",
          "options": [
            "Es",
            "Son",
            "Estamos",
            "Está"
          ],
          "answerIndex": 1,
          "explanation": "Son las tres uses the plural for any hour except 1:00."
        },
        {
          "prompt": "How do you say 3:30?",
          "options": [
            "Son las tres y cuarto.",
            "Son las tres y media.",
            "Es las tres y media.",
            "Son las tres menos media."
          ],
          "answerIndex": 1,
          "explanation": "y media = half past."
        },
        {
          "prompt": "How do you say 'quarter to four' (3:45)?",
          "options": [
            "Son las tres y cuarenta y cinco.",
            "Son las cuatro menos cuarto.",
            "Son las cuatro y cuarto.",
            "Es las cuatro menos cuarto."
          ],
          "answerIndex": 1,
          "explanation": "menos cuarto counts down to the next hour; both this and tres y cuarenta y cinco are understood, but menos cuarto is more natural in many dialects."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'It's 3 PM.'",
          "options": [
            "Son las tres de la tarde. (7.1)",
            "Son las tres de la noche. (7.2)",
            "Es las tres de la tarde. (7.3)",
            "Son las tres de la mañana. (7.4)"
          ],
          "answerIndex": 0,
          "explanation": "de la tarde specifies afternoon."
        },
        {
          "prompt": "Why does Es la una use es instead of son?",
          "options": [
            "Because \"la hora\" (the hour) is singular only at 1:00",
            "Because es is more formal",
            "Because una is masculine",
            "Because 1:00 is a special exception with no reason"
          ],
          "answerIndex": 0,
          "explanation": "Only 1:00 is grammatically singular (\"one hour\"); every other hour is plural."
        },
        {
          "prompt": "How do you say 3:10?",
          "options": [
            "Son las diez y tres.",
            "Es la tres y diez.",
            "Son las tres menos diez.",
            "Son las tres y diez."
          ],
          "answerIndex": 3,
          "explanation": "y + minutes adds time past the hour."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ la una de la tarde. (It's 1 PM.)",
          "options": [
            "Son",
            "Está",
            "Es",
            "Estoy"
          ],
          "answerIndex": 2,
          "explanation": "1:00 always takes es la una.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'quarter past three'?",
          "options": [
            "Son las cuatro y cuarto.",
            "Son las tres y cuarto.",
            "Es las tres y cuarto.",
            "Son las tres menos cuarto."
          ],
          "answerIndex": 1,
          "explanation": "y cuarto = quarter past.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'half past five'?",
          "options": [
            "Son las cinco y media.",
            "Son las seis menos media.",
            "Son las cinco y cuarto.",
            "Es la cinco y media."
          ],
          "answerIndex": 0,
          "explanation": "y media = half past.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which phrase specifies 'in the morning' when telling time?",
          "options": [
            "de la tarde",
            "de la hora",
            "de la noche",
            "de la mañana"
          ],
          "answerIndex": 3,
          "explanation": "de la mañana = in the morning.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'quarter to six' (5:45)?",
          "options": [
            "Son las cinco y cuarenta y cinco solamente.",
            "Es las seis menos cuarto.",
            "Son las seis menos cuarto.",
            "Son las cinco menos cuarto."
          ],
          "answerIndex": 2,
          "explanation": "menos cuarto counts down to the NEXT hour (six), matching 5:45.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is son (not es) used for most hours?",
          "options": [
            "Because Spanish always uses plural verbs",
            "Because \"the hours\" (las horas) is plural for every hour except one",
            "There is no reason, it is random",
            "Because son is more polite"
          ],
          "answerIndex": 1,
          "explanation": "Grammatically, \"the hours\" is plural except at exactly 1:00.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 2: Foundational & Structural Mastery (Es la una.)"
  },
  "es-u2-l3": {
    "id": "es-u2-l3",
    "unit": "es-u2",
    "level": "A1",
    "objective": "Name the days of the week and months of the year, and use them in simple date-related sentences.",
    "prerequisites": [
      "es-u2-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u2-l2"
      ]
    },
    "presentation": {
      "explanation": "Days of the week in Spanish are not capitalized (unlike English) and the week is traditionally considered to start on lunes (Monday) in most Spanish-speaking countries: lunes, martes, miércoles, jueves, viernes, sábado, domingo. Days ending in -s (lunes, martes, miércoles, jueves, viernes) don't change form for singular or plural, but sábado and domingo add -s normally (los sábados, 'on Saturdays'). To say 'on' a day, Spanish uses el (singular) or los (plural, meaning a repeated/habitual day): El lunes tengo clase (On Monday I have class) vs. Los lunes tengo clase (On Mondays / every Monday I have class). Months are also lowercase — enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre — and dates are stated day-then-month, the reverse of the common US convention: el 5 de mayo (May 5th, literally 'the 5 of May').",
      "examples": [
        {
          "target": "lunes, martes, miércoles, jueves, viernes",
          "reading": "",
          "translation": "Monday, Tuesday, Wednesday, Thursday, Friday"
        },
        {
          "target": "sábado, domingo",
          "reading": "",
          "translation": "Saturday, Sunday"
        },
        {
          "target": "El lunes tengo clase.",
          "reading": "",
          "translation": "On Monday I have class."
        },
        {
          "target": "Los lunes tengo clase.",
          "reading": "",
          "translation": "On Mondays (every Monday) I have class."
        },
        {
          "target": "el 5 de mayo",
          "reading": "",
          "translation": "May 5th"
        },
        {
          "target": "¿Qué día es hoy?",
          "reading": "",
          "translation": "What day is it today?"
        }
      ],
      "mnemonics": [
        "el = one specific day (El lunes = \"this Monday\"); los = a repeating habit (Los lunes = \"every Monday\") — singular article for a single instance, plural for a pattern.",
        "Dates read day-then-month, like a sentence: 'el 5 DE mayo' = 'the 5th OF May' — the de gives it away as day-first."
      ],
      "culturalNotes": [
        "Unlike English, Spanish never capitalizes days of the week or months, even at the start of a proper date like \"5 de mayo de 2024.\""
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which day is martes?",
          "options": [
            "Tuesday (8.1)",
            "Wednesday (8.2)",
            "Thursday (8.3)",
            "Monday (8.4)"
          ],
          "answerIndex": 0,
          "explanation": "martes = Tuesday."
        },
        {
          "prompt": "Translate: 'On Mondays I have class.' (habitual)",
          "options": [
            "Los lunes tengo clase.",
            "Un lunes tengo clase.",
            "Lunes tengo clase.",
            "El lunes tengo clase."
          ],
          "answerIndex": 0,
          "explanation": "Los (plural article) signals a repeated, habitual day."
        },
        {
          "prompt": "How do you write 'May 5th'?",
          "options": [
            "el 5 de mayo",
            "mayo el 5",
            "el mayo 5",
            "5 mayo de"
          ],
          "answerIndex": 0,
          "explanation": "Spanish dates go day de month."
        },
        {
          "prompt": "Are Spanish days of the week capitalized?",
          "options": [
            "No, never",
            "Only on Mondays",
            "Only in formal writing",
            "Yes, always"
          ],
          "answerIndex": 0,
          "explanation": "Days and months are always lowercase in Spanish."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which day is miércoles?",
          "options": [
            "Tuesday (8.1)",
            "Wednesday (8.2)",
            "Thursday (8.3)",
            "Friday (8.4)"
          ],
          "answerIndex": 1,
          "explanation": "miércoles = Wednesday."
        },
        {
          "prompt": "Translate: 'On Monday I have class.' (this specific Monday)",
          "options": [
            "Los lunes tengo clase.",
            "El lunes tengo clase.",
            "Un lunes tengo clase.",
            "De lunes tengo clase."
          ],
          "answerIndex": 1,
          "explanation": "El (singular article) refers to one specific instance."
        },
        {
          "prompt": "How do sábado and domingo differ from the other weekday names in plural form?",
          "options": [
            "They never have a plural form",
            "They add -s normally (sábados, domingos), unlike lunes–viernes which stay the same",
            "They change completely in the plural",
            "There is no difference"
          ],
          "answerIndex": 1,
          "explanation": "sábado/domingo pluralize regularly; lunes–viernes already end in -s and stay unchanged."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which day is jueves?",
          "options": [
            "Wednesday",
            "Thursday",
            "Saturday",
            "Friday"
          ],
          "answerIndex": 1,
          "explanation": "jueves = Thursday.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which day is domingo?",
          "options": [
            "Sunday",
            "Saturday",
            "Friday",
            "Monday"
          ],
          "answerIndex": 0,
          "explanation": "domingo = Sunday.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'On Saturdays I work.' (habitual)",
          "options": [
            "El sábado trabajo.",
            "Un sábado trabajo.",
            "De sábados trabajo.",
            "Los sábados trabajo."
          ],
          "answerIndex": 3,
          "explanation": "Los sábados = every Saturday.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you write 'October 12th'?",
          "options": [
            "el octubre 12",
            "octubre el 12",
            "el 12 de octubre",
            "12 octubre de"
          ],
          "answerIndex": 2,
          "explanation": "Day de month is the Spanish date order.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which month is marzo?",
          "options": [
            "February",
            "March",
            "April",
            "May"
          ],
          "answerIndex": 1,
          "explanation": "marzo = March.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you ask 'What day is it today?'",
          "options": [
            "¿Qué día es hoy?",
            "¿Qué hora es?",
            "¿Cómo estás?",
            "¿De dónde eres?"
          ],
          "answerIndex": 0,
          "explanation": "¿Qué día es hoy? asks for the day.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 3: Foundational & Structural Mastery (lunes, martes, miércoles, juev)"
  },
  "es-u2-l4": {
    "id": "es-u2-l4",
    "unit": "es-u2",
    "level": "A1",
    "objective": "Use hay to state existence and describe quantities of people or things.",
    "prerequisites": [
      "es-u2-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "Hay is a uniquely useful little word: it means both 'there is' and 'there are' — it never changes form for singular or plural, which makes it much simpler than English in that respect. Hay un libro en la mesa (There is a book on the table); Hay tres libros en la mesa (There are three books on the table) — same hay both times. Hay comes from the verb haber, but functions as its own fixed existential expression here, distinct from the ser/estar contrast covered earlier: hay introduces something into a conversation for the first time (existence), while estar is used once you're talking about the location of something already known (El libro está en la mesa, 'The book is on the table' — using the definite article el because you already know which book). This hay-vs-estar distinction — indefinite/new (hay + un/una/numbers) versus definite/known (estar + el/la) — is a common early trap.",
      "examples": [
        {
          "target": "Hay un libro en la mesa.",
          "reading": "",
          "translation": "There is a book on the table."
        },
        {
          "target": "Hay tres libros en la mesa.",
          "reading": "",
          "translation": "There are three books on the table."
        },
        {
          "target": "¿Hay una farmacia cerca?",
          "reading": "",
          "translation": "Is there a pharmacy nearby?"
        },
        {
          "target": "No hay leche.",
          "reading": "",
          "translation": "There isn't any milk."
        },
        {
          "target": "El libro está en la mesa.",
          "reading": "",
          "translation": "The book is on the table. (a specific, already-known book — estar)"
        }
      ],
      "mnemonics": [
        "hay never conjugates for number — one word covers both 'there is' and 'there are,' unlike English.",
        "New/unknown → hay + un/una/number (Hay un libro). Known/specific → estar + el/la (El libro está...) — 'new' uses hay, 'the one we already know' uses estar."
      ],
      "culturalNotes": [
        "Hay is one of the most frequent words in spoken Spanish — used constantly for introducing anything into a conversation, from directions (\"¿Hay un baño aquí?\") to complaints (\"No hay wifi\")."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ un libro en la mesa. (There is a book on the table.)",
          "options": [
            "Es (9.1)",
            "Hay (9.2)",
            "Son (9.3)",
            "Está (9.4)"
          ],
          "answerIndex": 1,
          "explanation": "hay introduces the existence of something new/unspecified."
        },
        {
          "prompt": "___ tres libros en la mesa. (There are three books.)",
          "options": [
            "Hay",
            "Están",
            "Son",
            "Hays"
          ],
          "answerIndex": 0,
          "explanation": "hay does not change for plural — same word."
        },
        {
          "prompt": "Which sentence correctly uses estar for a specific, already-known book?",
          "options": [
            "El libro hay en la mesa.",
            "El libro es en la mesa.",
            "El libro está en la mesa.",
            "Hay el libro en la mesa."
          ],
          "answerIndex": 2,
          "explanation": "A specific, known item uses estar + definite article."
        },
        {
          "prompt": "Translate: 'There isn't any milk.'",
          "options": [
            "No es leche.",
            "No son leche.",
            "No está leche.",
            "No hay leche."
          ],
          "answerIndex": 3,
          "explanation": "hay negated with no expresses absence."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Is there a pharmacy nearby?'",
          "options": [
            "¿Está una farmacia cerca? (9.1)",
            "¿Hay una farmacia cerca? (9.2)",
            "¿Son una farmacia cerca? (9.3)",
            "¿Es una farmacia cerca? (9.4)"
          ],
          "answerIndex": 1,
          "explanation": "hay asks about the existence of an unspecified pharmacy."
        },
        {
          "prompt": "Why is hay used instead of estar when first introducing something?",
          "options": [
            "hay is only used with numbers",
            "hay introduces new/unspecified things into a conversation, while estar locates something already known",
            "estar cannot be used with objects",
            "They are fully interchangeable"
          ],
          "answerIndex": 1,
          "explanation": "This is the key hay-vs-estar distinction: new/indefinite vs. known/definite."
        },
        {
          "prompt": "Which article pattern typically follows hay?",
          "options": [
            "el/la (definite)",
            "un/una or a number (indefinite)",
            "Only plural nouns",
            "No article is ever used"
          ],
          "answerIndex": 1,
          "explanation": "hay pairs with indefinite articles or numbers, introducing something new."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ dos gatos en la casa. (There are two cats in the house.)",
          "options": [
            "Hay",
            "Están",
            "Son",
            "Es"
          ],
          "answerIndex": 0,
          "explanation": "hay states existence, unchanged for plural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb form of hay is used for the plural 'there are'?",
          "options": [
            "hays",
            "hayan",
            "han",
            "hay (same word)"
          ],
          "answerIndex": 3,
          "explanation": "hay is invariant for singular and plural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'There is a pharmacy on this street.' (first mention)",
          "options": [
            "La farmacia está en esta calle.",
            "La farmacia es en esta calle.",
            "Hay una farmacia en esta calle.",
            "Una farmacia hay esta calle."
          ],
          "answerIndex": 2,
          "explanation": "hay introduces the pharmacy as new information.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Once the pharmacy is already known/specific, which verb takes over to describe its location?",
          "options": [
            "ser",
            "estar",
            "hay",
            "tener"
          ],
          "answerIndex": 1,
          "explanation": "estar locates something already identified.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'There isn't any milk.'",
          "options": [
            "No hay leche.",
            "No es leche.",
            "No está leche.",
            "No tiene leche."
          ],
          "answerIndex": 0,
          "explanation": "no hay = there isn't/aren't any.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What verb does hay come from?",
          "options": [
            "estar",
            "ser",
            "tener",
            "haber"
          ],
          "answerIndex": 3,
          "explanation": "hay is a fixed existential form of haber.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 4: Foundational & Structural Mastery (Hay un libro en la mesa.)"
  },
  "es-u2-l5": {
    "id": "es-u2-l5",
    "unit": "es-u2",
    "level": "A1",
    "objective": "Combine numbers, time, and dates to describe a simple personal schedule or appointment.",
    "prerequisites": [
      "es-u2-l1",
      "es-u2-l2",
      "es-u2-l3",
      "es-u2-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u2-l1",
        "es-u2-l2",
        "es-u2-l3",
        "es-u2-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson pulls numbers, time-telling, days, and hay together into full appointment-style sentences — the kind you'd use to schedule or describe a real plan. A typical schedule sentence combines a day, a time, and an event: El lunes a las nueve, hay una reunión (On Monday at nine, there is a meeting) — el marks the specific day, a las introduces the clock time an event happens at (a is the 'at' preposition for time, distinct from de for dates), and hay introduces the event's existence. Notice how a las nueve parallels a las tres, a la una (using a la for the singular 'one o'clock' just as Es la una used the singular article) — the same singular/plural logic from Lesson 2 carries through into this new construction.",
      "examples": [
        {
          "target": "El lunes a las nueve, hay una reunión.",
          "reading": "",
          "translation": "On Monday at nine, there is a meeting."
        },
        {
          "target": "Tengo una cita el 5 de mayo a las tres de la tarde.",
          "reading": "",
          "translation": "I have an appointment on May 5th at 3 PM."
        },
        {
          "target": "¿A qué hora es la clase?",
          "reading": "",
          "translation": "What time is the class?"
        },
        {
          "target": "La clase es a la una.",
          "reading": "",
          "translation": "The class is at one o'clock."
        },
        {
          "target": "Los viernes no hay clase.",
          "reading": "",
          "translation": "On Fridays there is no class."
        }
      ],
      "mnemonics": [
        "a las = \"at\" for clock time (a las tres); de = \"of\" for dates (el 5 de mayo) — different little prepositions for different jobs, easy to mix up but each has one fixed role.",
        "a la una keeps the singular article, matching Es la una from Lesson 2 — the 1:00 exception carries through every construction that references clock time."
      ],
      "culturalNotes": [
        "Punctuality norms vary widely by country and context in the Spanish-speaking world — always confirm whether a stated time is a strict appointment or a more flexible social gathering."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "El lunes ___ las nueve, hay una reunión. (On Monday at nine...)",
          "options": [
            "de (10.1)",
            "a (10.2)",
            "en (10.3)",
            "por (10.4)"
          ],
          "answerIndex": 1,
          "explanation": "a las + time states the clock time an event occurs."
        },
        {
          "prompt": "Tengo una cita el 5 ___ mayo. (I have an appointment on May 5th.)",
          "options": [
            "a",
            "en",
            "de",
            "por"
          ],
          "answerIndex": 2,
          "explanation": "de links the day number to the month name."
        },
        {
          "prompt": "La clase es ___ la una. (The class is at one o'clock.)",
          "options": [
            "a",
            "a las",
            "de",
            "en"
          ],
          "answerIndex": 0,
          "explanation": "a la (singular) is used for one o'clock, paralleling Es la una."
        },
        {
          "prompt": "How do you ask 'What time is the class?'",
          "options": [
            "¿A qué hora es la clase?",
            "¿Qué día es la clase?",
            "¿Dónde es la clase?",
            "¿Hay clase?"
          ],
          "answerIndex": 0,
          "explanation": "¿A qué hora...? asks for a specific clock time."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'On Fridays there is no class.'",
          "options": [
            "El viernes no hay clase. (10.1)",
            "Los viernes no es clase. (10.2)",
            "Viernes no hay clase. (10.3)",
            "Los viernes no hay clase. (10.4)"
          ],
          "answerIndex": 3,
          "explanation": "Los viernes (habitual plural) + no hay (no existence) = no class every Friday."
        },
        {
          "prompt": "Which preposition introduces a specific clock time an event happens at?",
          "options": [
            "de",
            "a",
            "por",
            "en"
          ],
          "answerIndex": 1,
          "explanation": "a (as in a las tres) marks the time of an event."
        },
        {
          "prompt": "Which preposition links a day-number to a month name in a date?",
          "options": [
            "a",
            "con",
            "de",
            "en"
          ],
          "answerIndex": 2,
          "explanation": "de links day and month: el 5 de mayo."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: 'On Monday at nine, there is a meeting.'",
          "options": [
            "El lunes de las nueve, es una reunión.",
            "Los lunes a las nueve, está una reunión.",
            "El lunes las nueve hay una reunión.",
            "El lunes a las nueve, hay una reunión."
          ],
          "answerIndex": 3,
          "explanation": "El lunes (specific day) a las nueve (at nine) hay (there is) una reunión.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tengo una cita el 5 ___ mayo a las tres ___ la tarde.",
          "options": [
            "a / de",
            "de / a",
            "de / de",
            "a / a"
          ],
          "answerIndex": 2,
          "explanation": "de links day-month, and de la tarde specifies afternoon.",
          "type": "multiple-choice"
        },
        {
          "prompt": "La clase es ___ la una. (at one o'clock)",
          "options": [
            "de la",
            "a la",
            "en la",
            "a las"
          ],
          "answerIndex": 1,
          "explanation": "a la (singular) matches the 1:00 exception.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'What time is the class?'",
          "options": [
            "¿A qué hora es la clase?",
            "¿Qué día es la clase?",
            "¿Dónde está la clase?",
            "¿Qué hora es?"
          ],
          "answerIndex": 0,
          "explanation": "¿A qué hora...? specifically asks for the scheduled clock time.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which article/preposition combination is used for a repeating weekly pattern, e.g. 'on Fridays'?",
          "options": [
            "el viernes",
            "un viernes",
            "de viernes",
            "los viernes"
          ],
          "answerIndex": 3,
          "explanation": "los viernes = every Friday (habitual, plural).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does hay contribute to a schedule sentence like El lunes a las nueve, hay una reunión?",
          "options": [
            "It marks the specific time",
            "It negates the sentence",
            "It introduces the existence of the event",
            "It marks the day"
          ],
          "answerIndex": 2,
          "explanation": "hay introduces that the meeting exists/is happening.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 5: Foundational & Structural Mastery (El lunes a las nueve, hay una )"
  },
  "es-u3-l1": {
    "id": "es-u3-l1",
    "unit": "es-u3",
    "level": "A1",
    "objective": "Name immediate family members and describe basic family relationships using vocabulary and possessive adjectives.",
    "prerequisites": [
      "es-u2-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l3",
        "es-u1-l4"
      ]
    },
    "presentation": {
      "explanation": "Spanish family vocabulary follows a consistent masculine/feminine pairing for most terms: el padre / la madre (father/mother), el hermano / la hermana (brother/sister), el hijo / la hija (son/daughter), el abuelo / la abuela (grandfather/grandmother), el tío / la tía (uncle/aunt), el primo / la prima (cousin, masc./fem.). Unlike Japanese, Spanish does NOT distinguish older vs. younger siblings by default — hermano just means 'brother' regardless of birth order (mayor/menor can be added if needed: mi hermano mayor, 'my older brother'). Possessive adjectives agree with the noun's number, not the owner's gender: mi hermano, mi hermana (both use mi — 'my' doesn't change for gender, only for number: mis hermanos, 'my brothers/siblings'). Padres, when plural, is a special case: it means 'parents,' not literally 'fathers' — the masculine plural covers a mixed-gender group, a pattern that recurs throughout Spanish (hermanos can mean 'siblings' as a group, not just 'brothers').",
      "examples": [
        {
          "target": "el padre / la madre",
          "reading": "",
          "translation": "father / mother"
        },
        {
          "target": "el hermano / la hermana",
          "reading": "",
          "translation": "brother / sister"
        },
        {
          "target": "el hijo / la hija",
          "reading": "",
          "translation": "son / daughter"
        },
        {
          "target": "mi hermano mayor",
          "reading": "",
          "translation": "my older brother"
        },
        {
          "target": "mis hermanos",
          "reading": "",
          "translation": "my siblings (or my brothers)"
        },
        {
          "target": "Mi madre es doctora.",
          "reading": "",
          "translation": "My mother is a doctor."
        }
      ],
      "mnemonics": [
        "The masculine plural covers mixed groups: padres = parents (not just fathers), hermanos = siblings (not just brothers) — 'masculine plural = everyone included' is a recurring Spanish pattern.",
        "mi/mis only change for number (singular/plural), never for the gender of the thing owned — much simpler than the noun's own gender agreement."
      ],
      "culturalNotes": [
        "Because Spanish does not build birth order into the base word (unlike Japanese 兄/弟), if you want to specify \"older\" or \"younger,\" you add mayor or menor after the noun."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'mother'?",
          "options": [
            "la madre (11.1)",
            "la hija (11.2)",
            "el hermano (11.3)",
            "el padre (11.4)"
          ],
          "answerIndex": 0,
          "explanation": "la madre = mother."
        },
        {
          "prompt": "How do you say 'my siblings' (mixed group)?",
          "options": [
            "mi hermana",
            "mi hermano",
            "mis hermanas",
            "mis hermanos"
          ],
          "answerIndex": 3,
          "explanation": "The masculine plural mis hermanos covers a mixed-gender group."
        },
        {
          "prompt": "How do you specify 'my OLDER brother'?",
          "options": [
            "mi hermana mayor",
            "mi hermano menor",
            "mi hermano viejo",
            "mi hermano mayor"
          ],
          "answerIndex": 3,
          "explanation": "mayor added after the noun specifies \"older.\""
        },
        {
          "prompt": "Translate: 'My mother is a doctor.'",
          "options": [
            "Mi madre está doctora.",
            "Mi madre es doctora.",
            "Mis madres son doctora.",
            "Mi padre es doctora."
          ],
          "answerIndex": 1,
          "explanation": "Mi madre (subject) es (ser, identity/profession) doctora."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How do you say 'parents' (both mother and father)?",
          "options": [
            "los padres (11.1)",
            "los hermanos (11.2)",
            "las hijas (11.3)",
            "las madres (11.4)"
          ],
          "answerIndex": 0,
          "explanation": "los padres = parents, a mixed-gender masculine plural."
        },
        {
          "prompt": "Does mi change form based on the gender of the noun that follows?",
          "options": [
            "Only for feminine nouns",
            "Only for masculine nouns",
            "Yes, always",
            "No — only for number (mi vs. mis)"
          ],
          "answerIndex": 3,
          "explanation": "Possessive mi/mis only agree in number, not gender."
        },
        {
          "prompt": "How do you say 'daughter'?",
          "options": [
            "la madre",
            "el hijo",
            "el padre",
            "la hija"
          ],
          "answerIndex": 3,
          "explanation": "la hija = daughter."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "How do you say 'father'?",
          "options": [
            "la hija",
            "el hijo",
            "el padre",
            "la madre"
          ],
          "answerIndex": 2,
          "explanation": "el padre = father.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'grandmother'?",
          "options": [
            "la prima",
            "la abuela",
            "el abuelo",
            "la tía"
          ],
          "answerIndex": 1,
          "explanation": "la abuela = grandmother.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does hermanos mean when referring to a mixed-gender group?",
          "options": [
            "Siblings (brothers and sisters together)",
            "Only sisters",
            "Only brothers",
            "Cousins"
          ],
          "answerIndex": 0,
          "explanation": "The masculine plural covers a mixed-gender sibling group.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you specify 'my younger sister'?",
          "options": [
            "mi hermano menor",
            "mi hermana mayor",
            "mi hermanas menor",
            "mi hermana menor"
          ],
          "answerIndex": 3,
          "explanation": "menor added after the noun specifies \"younger.\"",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'uncle'?",
          "options": [
            "el primo",
            "la prima",
            "el tío",
            "la tía"
          ],
          "answerIndex": 2,
          "explanation": "el tío = uncle.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'My siblings are doctors.'",
          "options": [
            "Mis hermanas es doctoras.",
            "Mis hermanos son doctores.",
            "Mi hermanos son doctor.",
            "Mi hermano es doctor."
          ],
          "answerIndex": 1,
          "explanation": "Mis hermanos (plural subject) son (plural ser) doctores (plural).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 1: Foundational & Structural Mastery (el padre / la madre)"
  },
  "es-u3-l2": {
    "id": "es-u3-l2",
    "unit": "es-u3",
    "level": "A1",
    "objective": "Use tener to talk about family members and possessions, and conjugate it correctly in the present tense.",
    "prerequisites": [
      "es-u3-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u3-l1"
      ]
    },
    "presentation": {
      "explanation": "While hay (Unit 2) states that something exists in general, tener ('to have') is the verb for talking about what belongs to or is possessed by a specific person — including family members, which Spanish treats grammatically as something you 'have': Tengo dos hermanos (I have two siblings), not a construction with hay or ser. Tener is irregular in the present tense: tengo (yo), tienes (tú), tiene (él/ella/usted), tenemos (nosotros), tenéis (vosotros, Spain), tienen (ellos/ustedes) — note the stem change from tener to tien- in most forms except tengo and tenemos/tenéis. Beyond family, tener covers general possession (Tengo un coche, I have a car) and a wide set of fixed expressions where English would use 'to be': tener [X] años (to be X years old), tener hambre/sed (to be hungry/thirsty), tener frío/calor (to be cold/hot) — all use tener, not ser or estar, another place where English 'be' maps onto a different Spanish verb entirely.",
      "examples": [
        {
          "target": "Tengo dos hermanos.",
          "reading": "",
          "translation": "I have two siblings."
        },
        {
          "target": "¿Tienes hermanos?",
          "reading": "",
          "translation": "Do you have siblings?"
        },
        {
          "target": "Ella tiene un hijo.",
          "reading": "",
          "translation": "She has one son."
        },
        {
          "target": "Tengo veinte años.",
          "reading": "",
          "translation": "I am twenty years old. (lit. I have twenty years)"
        },
        {
          "target": "Tenemos hambre.",
          "reading": "",
          "translation": "We are hungry. (lit. we have hunger)"
        }
      ],
      "mnemonics": [
        "tener changes its stem to tien- everywhere except tengo/tenemos/tenéis — like a shoe (tener) that pinches (tien-) in most places but fits comfortably in a couple of spots.",
        "Spanish 'has' age and hunger where English 'is': tener años, tener hambre — swap your instinct for 'be' to 'have' for this whole family of expressions."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ dos hermanos. (I have two siblings.)",
          "options": [
            "tiene (12.1)",
            "tengo (12.2)",
            "tenemos (12.3)",
            "tienes (12.4)"
          ],
          "answerIndex": 1,
          "explanation": "tengo is the yo-form of tener."
        },
        {
          "prompt": "¿___ hermanos? (Do you have siblings? — informal)",
          "options": [
            "Tengo",
            "Tiene",
            "Tenemos",
            "Tienes"
          ],
          "answerIndex": 3,
          "explanation": "tienes matches tú."
        },
        {
          "prompt": "Ella ___ un hijo. (She has one son.)",
          "options": [
            "tengo",
            "tienes",
            "tienen",
            "tiene"
          ],
          "answerIndex": 3,
          "explanation": "tiene is the él/ella-form."
        },
        {
          "prompt": "How do you say 'I am twenty years old'?",
          "options": [
            "Soy veinte años.",
            "Tengo veinte años.",
            "Estoy veinte años.",
            "Hay veinte años."
          ],
          "answerIndex": 1,
          "explanation": "Age uses tener, not ser/estar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nosotros ___ hambre. (We are hungry.)",
          "options": [
            "tienen (12.1)",
            "tengo (12.2)",
            "tiene (12.3)",
            "tenemos (12.4)"
          ],
          "answerIndex": 3,
          "explanation": "tenemos is the nosotros-form."
        },
        {
          "prompt": "Which stem does tener change to in most conjugated forms?",
          "options": [
            "tien-",
            "tuv-",
            "tenn-",
            "ten-"
          ],
          "answerIndex": 0,
          "explanation": "The stem changes to tien- except in tengo/tenemos/tenéis."
        },
        {
          "prompt": "Why does Spanish use tener (not ser/estar) for age and hunger?",
          "options": [
            "Because ser and estar cannot describe people",
            "Because tener is more formal",
            "There is no reason, it is arbitrary and rarely used",
            "Because these are fixed idiomatic expressions using tener, unlike English \"to be\""
          ],
          "answerIndex": 3,
          "explanation": "This is a set of fixed tener expressions that map to English \"to be\" constructions."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ tres hermanas. (I have three sisters.)",
          "options": [
            "tienes",
            "tengo",
            "tienen",
            "tiene"
          ],
          "answerIndex": 1,
          "explanation": "tengo is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ellos ___ un perro. (They have a dog.)",
          "options": [
            "tienen",
            "tenemos",
            "tienes",
            "tiene"
          ],
          "answerIndex": 0,
          "explanation": "tienen is the ellos-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'She is cold'? (lit. she has cold)",
          "options": [
            "Ella es fría.",
            "Ella está fría.",
            "Ella hay frío.",
            "Ella tiene frío."
          ],
          "answerIndex": 3,
          "explanation": "tener frío = to be cold (idiomatic).",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cuántos años ___? (How old are you? — lit. how many years do you have?)",
          "options": [
            "eres",
            "tengo",
            "tienes",
            "estás"
          ],
          "answerIndex": 2,
          "explanation": "tienes matches the tú-form question about age.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which form of tener is used with nosotros?",
          "options": [
            "tiene",
            "tenemos",
            "tienen",
            "tengo"
          ],
          "answerIndex": 1,
          "explanation": "tenemos is the nosotros-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'I have two siblings.'",
          "options": [
            "Tengo dos hermanos.",
            "Estoy dos hermanos.",
            "Soy dos hermanos.",
            "Hay dos hermanos."
          ],
          "answerIndex": 0,
          "explanation": "tener expresses family \"possession.\"",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 2: Foundational & Structural Mastery (Tengo dos hermanos.)"
  },
  "es-u3-l3": {
    "id": "es-u3-l3",
    "unit": "es-u3",
    "level": "A1",
    "objective": "Describe people using ser with adjectives, including correct gender and number agreement.",
    "prerequisites": [
      "es-u3-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u1-l2",
        "es-u3-l1"
      ]
    },
    "presentation": {
      "explanation": "Describing an inherent characteristic of a person combines ser (from Unit 1) with a descriptive adjective, and Spanish adjectives must agree in both gender and number with the noun they describe — unlike English, where adjectives never change form. Adjectives ending in -o have four forms: alto/alta/altos/altas (tall). Adjectives ending in -e or a consonant are usually invariant for gender but still change for number: inteligente/inteligentes (intelligent) stays the same for masculine/feminine but adds -s for plural. Mi hermano es alto (My brother is tall, masculine singular) versus Mi hermana es alta (My sister is tall, feminine singular) versus Mis hermanos son altos (My siblings are tall, masculine/mixed plural). This agreement requirement is one of the most mechanically important habits to build early, since it affects nearly every descriptive sentence in Spanish.",
      "examples": [
        {
          "target": "Mi hermano es alto.",
          "reading": "",
          "translation": "My brother is tall."
        },
        {
          "target": "Mi hermana es alta.",
          "reading": "",
          "translation": "My sister is tall."
        },
        {
          "target": "Mis hermanos son altos.",
          "reading": "",
          "translation": "My siblings are tall. (plural)"
        },
        {
          "target": "Mi padre es inteligente.",
          "reading": "",
          "translation": "My father is intelligent."
        },
        {
          "target": "Mis padres son inteligentes.",
          "reading": "",
          "translation": "My parents are intelligent."
        }
      ],
      "mnemonics": [
        "-o adjectives are the ones with four full forms (alto/alta/altos/altas); -e/consonant adjectives only ever add -s for plural, never change for gender — fewer forms to track.",
        "Agreement chains through the whole sentence: plural subject → plural verb (son) → plural adjective (altos) — everything downstream matches."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mi hermano es ___. (tall, masculine)",
          "options": [
            "alto (13.1)",
            "altas (13.2)",
            "altos (13.3)",
            "alta (13.4)"
          ],
          "answerIndex": 0,
          "explanation": "Masculine singular subject → alto."
        },
        {
          "prompt": "Mi hermana es ___. (tall, feminine)",
          "options": [
            "alta",
            "altos",
            "altas",
            "alto"
          ],
          "answerIndex": 0,
          "explanation": "Feminine singular subject → alta."
        },
        {
          "prompt": "Mis hermanos son ___. (tall, plural)",
          "options": [
            "alta",
            "altos",
            "altas",
            "alto"
          ],
          "answerIndex": 1,
          "explanation": "Masculine/mixed plural subject → altos."
        },
        {
          "prompt": "Which adjective type does NOT change for gender, only for number?",
          "options": [
            "Adjectives ending in -e or a consonant",
            "All adjectives change for gender",
            "No adjectives change at all",
            "Adjectives ending in -o"
          ],
          "answerIndex": 0,
          "explanation": "-e/consonant adjectives like inteligente stay the same across genders."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mis padres son ___. (intelligent, plural)",
          "options": [
            "inteligente (13.1)",
            "inteligentes (13.2)",
            "inteligento (13.3)",
            "inteligentas (13.4)"
          ],
          "answerIndex": 1,
          "explanation": "inteligente adds -s for plural but does not change for gender."
        },
        {
          "prompt": "Why does mis hermanos son altos use altos rather than alto?",
          "options": [
            "Because hermanos is plural, so the adjective must also be plural",
            "Because altos is simply more common",
            "Because ser requires plural adjectives always",
            "There is no reason for the change"
          ],
          "answerIndex": 0,
          "explanation": "Adjectives agree in number with the noun they describe."
        },
        {
          "prompt": "How many distinct forms does an -o adjective like alto have?",
          "options": [
            "One",
            "Two",
            "Three",
            "Four"
          ],
          "answerIndex": 3,
          "explanation": "alto/alta/altos/altas — four forms for gender × number."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Mi madre es ___. (tall, feminine)",
          "options": [
            "alta",
            "altas",
            "alto",
            "altos"
          ],
          "answerIndex": 0,
          "explanation": "Feminine singular → alta.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mis hermanas son ___. (tall, feminine plural)",
          "options": [
            "alto",
            "alta",
            "altos",
            "altas"
          ],
          "answerIndex": 3,
          "explanation": "Feminine plural → altas.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mi padre es ___. (intelligent)",
          "options": [
            "inteligento",
            "inteligenta",
            "inteligente",
            "inteligentes"
          ],
          "answerIndex": 2,
          "explanation": "inteligente does not change for gender in the singular.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sentence correctly agrees in gender AND number?",
          "options": [
            "Mis hermanas son alto.",
            "Mis hermanas son altas.",
            "Mi hermano es alta.",
            "Mi hermana es altos."
          ],
          "answerIndex": 1,
          "explanation": "Feminine plural subject requires the feminine plural adjective altas.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What must a Spanish adjective agree with?",
          "options": [
            "The gender and number of the noun it describes",
            "Only the verb tense",
            "Only the subject pronoun",
            "Nothing — adjectives are invariant"
          ],
          "answerIndex": 0,
          "explanation": "Gender and number agreement is required for descriptive adjectives.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mis padres son ___. (intelligent, plural)",
          "options": [
            "inteligente",
            "inteligenta",
            "inteligento",
            "inteligentes"
          ],
          "answerIndex": 3,
          "explanation": "Plural -e adjectives simply add -s.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 3: Foundational & Structural Mastery (Mi hermano es alto.)"
  },
  "es-u3-l4": {
    "id": "es-u3-l4",
    "unit": "es-u3",
    "level": "A1",
    "objective": "Use possessive adjectives (mi, tu, su, nuestro) correctly across singular and plural family contexts.",
    "prerequisites": [
      "es-u3-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u3-l1",
        "es-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "Beyond mi/mis (my), Spanish has a full set of possessive adjectives that mostly only change for number, not gender — with one important exception. tu/tus (your, informal) and su/sus (his/her/your formal/their) follow the same pattern as mi/mis. However, nuestro (our) is different: it behaves like a regular -o adjective, agreeing in BOTH gender and number with the noun it describes — nuestro padre (our father), nuestra madre (our mother), nuestros hermanos (our siblings/brothers), nuestras hermanas (our sisters). Su/sus is notably ambiguous — it can mean his, her, your (formal), or their, with the specific meaning determined entirely by context, which sometimes forces speakers to clarify with de él/de ella/de ellos (el coche de ella, 'her car') when ambiguity would cause confusion.",
      "examples": [
        {
          "target": "mi padre / mis padres",
          "reading": "",
          "translation": "my father / my parents"
        },
        {
          "target": "tu hermano / tus hermanos",
          "reading": "",
          "translation": "your brother / your siblings (informal)"
        },
        {
          "target": "su madre",
          "reading": "",
          "translation": "his/her/your (formal)/their mother"
        },
        {
          "target": "nuestro padre / nuestra madre",
          "reading": "",
          "translation": "our father / our mother"
        },
        {
          "target": "nuestros hermanos / nuestras hermanas",
          "reading": "",
          "translation": "our brothers / our sisters"
        },
        {
          "target": "el coche de ella",
          "reading": "",
          "translation": "her car (clarifying su with de ella)"
        }
      ],
      "mnemonics": [
        "Only nuestro/a/os/as changes for gender — mi, tu, su only ever change for number (mi/mis, tu/tus, su/sus). One 'special' possessive to remember, the rest are simple.",
        "su is deliberately vague (his/her/your/their) — if it matters, add de él / de ella / de ellos to clarify who exactly."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ padre es doctor. (our father)",
          "options": [
            "Mi (14.1)",
            "Nuestra (14.2)",
            "Su (14.3)",
            "Nuestro (14.4)"
          ],
          "answerIndex": 3,
          "explanation": "nuestro agrees with the masculine noun padre."
        },
        {
          "prompt": "___ madre es doctora. (our mother)",
          "options": [
            "Nuestro",
            "Mi",
            "Tu",
            "Nuestra"
          ],
          "answerIndex": 3,
          "explanation": "nuestra agrees with the feminine noun madre."
        },
        {
          "prompt": "Which possessive can mean 'his,' 'her,' 'your (formal),' OR 'their'?",
          "options": [
            "mi",
            "nuestro",
            "tu",
            "su"
          ],
          "answerIndex": 3,
          "explanation": "su is ambiguous across those four meanings, disambiguated by context."
        },
        {
          "prompt": "How do you clarify 'her car' when su coche would be ambiguous?",
          "options": [
            "el coche de su",
            "coche su ella",
            "el coche de ella",
            "su coche de ella"
          ],
          "answerIndex": 2,
          "explanation": "de ella explicitly clarifies \"her.\""
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "___ hermanas son altas. (our sisters)",
          "options": [
            "Nuestro (14.1)",
            "Nuestras (14.2)",
            "Nuestros (14.3)",
            "Nuestra (14.4)"
          ],
          "answerIndex": 1,
          "explanation": "Feminine plural noun requires nuestras."
        },
        {
          "prompt": "Why is nuestro different from mi, tu, and su?",
          "options": [
            "It only changes for number, like the others",
            "It changes for both gender AND number, unlike mi/tu/su",
            "It is used only with formal address",
            "It never changes at all"
          ],
          "answerIndex": 1,
          "explanation": "nuestro behaves like a regular -o adjective, agreeing in gender and number."
        },
        {
          "prompt": "Translate: 'your siblings' (informal, plural possessor object)",
          "options": [
            "tu hermanos",
            "tus hermanos",
            "sus hermano",
            "su hermanos"
          ],
          "answerIndex": 1,
          "explanation": "tus agrees in number with the plural hermanos."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ padres son inteligentes. (our parents)",
          "options": [
            "Nuestro",
            "Nuestra",
            "Nuestras",
            "Nuestros"
          ],
          "answerIndex": 3,
          "explanation": "padres is masculine plural → nuestros.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ hermano es alto. (your brother, informal)",
          "options": [
            "Mi",
            "Su",
            "Tu",
            "Nuestro"
          ],
          "answerIndex": 2,
          "explanation": "tu = your (informal), unchanged for gender.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which possessive changes for BOTH gender and number?",
          "options": [
            "mi",
            "nuestro",
            "su",
            "tu"
          ],
          "answerIndex": 1,
          "explanation": "nuestro/a/os/as is the only one with full gender+number agreement.",
          "type": "multiple-choice"
        },
        {
          "prompt": "su coche could mean all of the following EXCEPT:",
          "options": [
            "my car",
            "his car",
            "their car",
            "her car"
          ],
          "answerIndex": 0,
          "explanation": "su never means \"my\" — that is always mi.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'our mother' (feminine noun)",
          "options": [
            "nuestras madre",
            "nuestros madre",
            "nuestro madre",
            "nuestra madre"
          ],
          "answerIndex": 3,
          "explanation": "madre is feminine singular → nuestra.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How would you clarify 'his book' if su libro is ambiguous?",
          "options": [
            "libro su él",
            "su libro de él",
            "el libro de él",
            "el libro de su"
          ],
          "answerIndex": 2,
          "explanation": "de él clarifies \"his\" specifically.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 4: Foundational & Structural Mastery (mi padre / mis padres)"
  },
  "es-u3-l5": {
    "id": "es-u3-l5",
    "unit": "es-u3",
    "level": "A1",
    "objective": "Describe your own family in a short connected passage, combining vocabulary, tener, ser + adjectives, and possessives.",
    "prerequisites": [
      "es-u3-l1",
      "es-u3-l2",
      "es-u3-l3",
      "es-u3-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u3-l1",
        "es-u3-l2",
        "es-u3-l3",
        "es-u3-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson threads together every piece of Unit 3 into one connected family description — the kind of short passage you'd write in an introduction or say describing a photo. It moves from stating who's in the family with tener, to naming them and their professions with ser, to describing their traits with ser + agreeing adjectives, and uses possessives (mi, nuestro) throughout to keep the description anchored to 'my/our family.' Notice how naturally these pieces from three separate lessons combine into flowing sentences — this is the actual test of whether the grammar has become usable, not just memorized in isolation.",
      "examples": [
        {
          "target": "Tengo una familia grande.",
          "reading": "",
          "translation": "I have a big family."
        },
        {
          "target": "Somos cinco: mis padres, mis dos hermanos y yo.",
          "reading": "",
          "translation": "We are five: my parents, my two siblings, and me."
        },
        {
          "target": "Mi padre es alto y es ingeniero.",
          "reading": "",
          "translation": "My father is tall and is an engineer."
        },
        {
          "target": "Mi hermana mayor es doctora. Es muy inteligente.",
          "reading": "",
          "translation": "My older sister is a doctor. She is very intelligent."
        },
        {
          "target": "Nuestra madre es profesora.",
          "reading": "",
          "translation": "Our mother is a teacher/professor."
        }
      ],
      "mnemonics": [
        "This lesson is proof that grammar pieces stack: tener (existence/possession) + ser (identity/traits) + possessives (whose) = one fluent description, not three separate drills."
      ],
      "culturalNotes": [
        "Family size and structure vary enormously across the Spanish-speaking world — avoid assuming a \"typical\" family size or structure when describing someone else's family."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ una familia grande. (I have a big family.)",
          "options": [
            "Soy (15.1)",
            "Tengo (15.2)",
            "Hay (15.3)",
            "Es (15.4)"
          ],
          "answerIndex": 1,
          "explanation": "tener expresses having a family (Unit 3 Lesson 2 pattern)."
        },
        {
          "prompt": "Mi padre es alto y ___ ingeniero. (and is an engineer)",
          "options": [
            "está",
            "es",
            "tiene",
            "hay"
          ],
          "answerIndex": 1,
          "explanation": "Profession uses ser: es ingeniero."
        },
        {
          "prompt": "Mi hermana mayor es muy ___. (very intelligent, feminine)",
          "options": [
            "inteligente",
            "inteligenta",
            "inteligentes",
            "inteligento"
          ],
          "answerIndex": 0,
          "explanation": "-e adjectives do not change for gender."
        },
        {
          "prompt": "___ madre es profesora. (our mother)",
          "options": [
            "Nuestra",
            "Mi",
            "Nuestro",
            "Su"
          ],
          "answerIndex": 0,
          "explanation": "madre is feminine → nuestra."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'We are five: my parents, my two siblings, and me.'",
          "options": [
            "Hay cinco: mis padres, mis dos hermanos y yo. (15.1)",
            "Somos cinco: mis padres, mis dos hermanos y yo. (15.2)",
            "Son cinco: mis padres, mis dos hermanos y yo. (15.3)",
            "Tenemos cinco: mi padres, mi dos hermanos y yo. (15.4)"
          ],
          "answerIndex": 1,
          "explanation": "Somos (ser, identity of the group) cinco correctly states \"we are five.\""
        },
        {
          "prompt": "Which verb states the existence/possession of family members, as opposed to describing them?",
          "options": [
            "ser",
            "tener",
            "hay",
            "estar"
          ],
          "answerIndex": 1,
          "explanation": "tener states who you have (family members)."
        },
        {
          "prompt": "Why does this lesson combine tener, ser, and possessives rather than isolating each?",
          "options": [
            "Because a real description naturally uses all of them together",
            "Because only one of them is actually correct",
            "There is no reason",
            "Because they are interchangeable and mean the same thing"
          ],
          "answerIndex": 0,
          "explanation": "Fluent description blends grammar points, which is the point of this capstone."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ una familia grande. (I have a big family.)",
          "options": [
            "Estoy",
            "Soy",
            "Tengo",
            "Hay"
          ],
          "answerIndex": 2,
          "explanation": "tener = to have (a family).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Somos cinco: ___ padres, mis dos hermanos y yo. (my parents)",
          "options": [
            "su",
            "mis",
            "nuestro",
            "mi"
          ],
          "answerIndex": 1,
          "explanation": "padres is plural → mis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mi hermana mayor es doctora. ___ muy inteligente. (She is very intelligent.)",
          "options": [
            "Es",
            "Está",
            "Hay",
            "Tiene"
          ],
          "answerIndex": 0,
          "explanation": "An inherent trait uses ser: es inteligente.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ madre es profesora. (our mother, feminine)",
          "options": [
            "Nuestro",
            "Mi",
            "Su",
            "Nuestra"
          ],
          "answerIndex": 3,
          "explanation": "madre is feminine → nuestra.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mi padre es alto y ___ ingeniero.",
          "options": [
            "hay",
            "está",
            "es",
            "tiene"
          ],
          "answerIndex": 2,
          "explanation": "Profession takes ser.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the overall skill this capstone lesson is testing?",
          "options": [
            "Only conjugating tener correctly",
            "Combining tener, ser + adjectives, and possessives fluently in one description",
            "Only using possessive adjectives",
            "Memorizing isolated vocabulary lists"
          ],
          "answerIndex": 1,
          "explanation": "The lesson tests combining all of Unit 3's grammar into fluent description.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 5: Foundational & Structural Mastery (Tengo una familia grande.)"
  },
  "es-u4-l1": {
    "id": "es-u4-l1",
    "unit": "es-u4",
    "level": "A1",
    "objective": "Conjugate regular -ar verbs in the present tense and use them in simple sentences.",
    "prerequisites": [
      "es-u3-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u3-l2",
        "es-u1-l3"
      ]
    },
    "presentation": {
      "explanation": "Spanish verbs fall into three families based on their infinitive ending: -ar, -er, -ir, and each family conjugates with its own set of endings. -ar verbs are the largest and most regular group. Take hablar (to speak), drop -ar to get the stem habl-, then add: hablo (yo), hablas (tú), habla (él/ella/usted), hablamos (nosotros), habláis (vosotros), hablan (ellos/ustedes). This same pattern applies to any regular -ar verb: trabajar (to work) → trabajo, trabajas, trabaja...; estudiar (to study) → estudio, estudias, estudia... Once you internalize the six endings (-o, -as, -a, -amos, -áis, -an), you can conjugate hundreds of -ar verbs correctly without memorizing each one individually — this is the payoff of learning the pattern rather than individual forms.",
      "examples": [
        {
          "target": "Yo hablo español.",
          "reading": "",
          "translation": "I speak Spanish."
        },
        {
          "target": "Tú trabajas mucho.",
          "reading": "",
          "translation": "You work a lot."
        },
        {
          "target": "Ella estudia inglés.",
          "reading": "",
          "translation": "She studies English."
        },
        {
          "target": "Nosotros hablamos francés.",
          "reading": "",
          "translation": "We speak French."
        },
        {
          "target": "Ellos trabajan en una oficina.",
          "reading": "",
          "translation": "They work in an office."
        }
      ],
      "mnemonics": [
        "-ar endings: -o, -as, -a, -amos, -áis, -an — notice the 'a' sound runs through almost every ending, echoing the infinitive's -ar.",
        "Once you know hablar, you effectively know trabajar, estudiar, and hundreds more — same six endings, different stem."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ español. (hablar)",
          "options": [
            "hablas (16.1)",
            "habla (16.2)",
            "hablamos (16.3)",
            "hablo (16.4)"
          ],
          "answerIndex": 3,
          "explanation": "hablo is the yo-form of hablar."
        },
        {
          "prompt": "Tú ___ mucho. (trabajar)",
          "options": [
            "trabajan",
            "trabaja",
            "trabajo",
            "trabajas"
          ],
          "answerIndex": 3,
          "explanation": "trabajas is the tú-form."
        },
        {
          "prompt": "Ella ___ inglés. (estudiar)",
          "options": [
            "estudia",
            "estudio",
            "estudiamos",
            "estudias"
          ],
          "answerIndex": 0,
          "explanation": "estudia is the él/ella-form."
        },
        {
          "prompt": "Nosotros ___ francés. (hablar)",
          "options": [
            "hablamos",
            "hablo",
            "hablan",
            "habla"
          ],
          "answerIndex": 0,
          "explanation": "hablamos is the nosotros-form."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ellos ___ en una oficina. (trabajar)",
          "options": [
            "trabaja (16.1)",
            "trabajamos (16.2)",
            "trabajan (16.3)",
            "trabajo (16.4)"
          ],
          "answerIndex": 2,
          "explanation": "trabajan is the ellos-form."
        },
        {
          "prompt": "What is the stem of hablar, used before adding any ending?",
          "options": [
            "hab-",
            "hablar-",
            "habl-",
            "habla-"
          ],
          "answerIndex": 2,
          "explanation": "Drop -ar to get habl-."
        },
        {
          "prompt": "Which ending set is correct for -ar verbs (yo, tú, él, nosotros, vosotros, ellos)?",
          "options": [
            "-o, -as, -e, -amos, -éis, -an",
            "-o, -es, -e, -imos, -ís, -en",
            "-o, -es, -e, -emos, -éis, -en",
            "-o, -as, -a, -amos, -áis, -an"
          ],
          "answerIndex": 3,
          "explanation": "This is the full regular -ar ending set."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ mucho. (trabajar)",
          "options": [
            "trabajas",
            "trabajo",
            "trabajamos",
            "trabaja"
          ],
          "answerIndex": 1,
          "explanation": "trabajo is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Vosotros ___ español. (hablar)",
          "options": [
            "habláis",
            "hablan",
            "hablamos",
            "hablas"
          ],
          "answerIndex": 0,
          "explanation": "habláis is the vosotros-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Él ___ inglés. (estudiar)",
          "options": [
            "estudian",
            "estudias",
            "estudio",
            "estudia"
          ],
          "answerIndex": 3,
          "explanation": "estudia is the él-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What infinitive ending does hablar, trabajar, and estudiar all share?",
          "options": [
            "-or",
            "-er",
            "-ar",
            "-ir"
          ],
          "answerIndex": 2,
          "explanation": "All three are regular -ar verbs.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ellas ___ francés. (hablar)",
          "options": [
            "hablamos",
            "hablan",
            "hablas",
            "habla"
          ],
          "answerIndex": 1,
          "explanation": "hablan is the ellas-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which ending is used for nosotros with -ar verbs?",
          "options": [
            "-amos",
            "-imos",
            "-amos and -emos both work",
            "-emos"
          ],
          "answerIndex": 0,
          "explanation": "-amos is specific to -ar verbs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 1: Foundational & Structural Mastery (Yo hablo español.)"
  },
  "es-u4-l2": {
    "id": "es-u4-l2",
    "unit": "es-u4",
    "level": "A1",
    "objective": "Conjugate regular -er verbs in the present tense and use them in simple sentences.",
    "prerequisites": [
      "es-u4-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u4-l1"
      ]
    },
    "presentation": {
      "explanation": "-er verbs follow a related but distinct pattern from -ar verbs. Take comer (to eat), drop -er to get the stem com-, then add: como (yo), comes (tú), come (él/ella/usted), comemos (nosotros), coméis (vosotros), comen (ellos/ustedes). Compare directly with hablar's endings: -o stays the same (como/hablo), but -as becomes -es (comes vs. hablas), -a becomes -e (come vs. habla), -amos becomes -emos (comemos vs. hablamos), and so on — the yo-form -o is the one constant across all three verb families, while everything else swaps its vowel from a to e. Other common -er verbs follow the same pattern: beber (to drink) → bebo, bebes, bebe...; leer (to read) → leo, lees, lee...",
      "examples": [
        {
          "target": "Yo como pan.",
          "reading": "",
          "translation": "I eat bread."
        },
        {
          "target": "Tú bebes agua.",
          "reading": "",
          "translation": "You drink water."
        },
        {
          "target": "Él lee un libro.",
          "reading": "",
          "translation": "He reads a book."
        },
        {
          "target": "Nosotros comemos a las dos.",
          "reading": "",
          "translation": "We eat at two o'clock."
        },
        {
          "target": "Ellos beben café.",
          "reading": "",
          "translation": "They drink coffee."
        }
      ],
      "mnemonics": [
        "-er endings: -o, -es, -e, -emos, -éis, -en — the yo-form -o is identical to -ar verbs; everything else swaps a→e.",
        "como (I eat) vs. hablo (I speak) — same -o ending, different stem, proof the yo-form doesn't care which family the verb belongs to."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ pan. (comer)",
          "options": [
            "come (17.1)",
            "comes (17.2)",
            "comemos (17.3)",
            "como (17.4)"
          ],
          "answerIndex": 3,
          "explanation": "como is the yo-form of comer."
        },
        {
          "prompt": "Tú ___ agua. (beber)",
          "options": [
            "bebo",
            "bebes",
            "beben",
            "bebe"
          ],
          "answerIndex": 1,
          "explanation": "bebes is the tú-form."
        },
        {
          "prompt": "Él ___ un libro. (leer)",
          "options": [
            "leo",
            "lees",
            "leemos",
            "lee"
          ],
          "answerIndex": 3,
          "explanation": "lee is the él-form."
        },
        {
          "prompt": "Which vowel replaces -ar's 'a' in most -er endings?",
          "options": [
            "i",
            "e",
            "o",
            "u"
          ],
          "answerIndex": 1,
          "explanation": "-er endings swap the a for e (except -o, which is shared)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nosotros ___ a las dos. (comer)",
          "options": [
            "come (17.1)",
            "comemos (17.2)",
            "comen (17.3)",
            "como (17.4)"
          ],
          "answerIndex": 1,
          "explanation": "comemos is the nosotros-form."
        },
        {
          "prompt": "Ellos ___ café. (beber)",
          "options": [
            "bebe",
            "bebemos",
            "beben",
            "bebo"
          ],
          "answerIndex": 2,
          "explanation": "beben is the ellos-form."
        },
        {
          "prompt": "Which ending is shared between -ar and -er verbs in the yo-form?",
          "options": [
            "-o",
            "-e",
            "-amos",
            "-as"
          ],
          "answerIndex": 0,
          "explanation": "-o is identical across all three verb families in the yo-form."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ agua. (beber)",
          "options": [
            "bebo",
            "bebe",
            "bebemos",
            "bebes"
          ],
          "answerIndex": 0,
          "explanation": "bebo is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Vosotros ___ pan. (comer)",
          "options": [
            "comes",
            "comen",
            "comemos",
            "coméis"
          ],
          "answerIndex": 3,
          "explanation": "coméis is the vosotros-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ un libro. (leer)",
          "options": [
            "leo",
            "leen",
            "lee",
            "lees"
          ],
          "answerIndex": 2,
          "explanation": "lee is the ella-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the stem of comer?",
          "options": [
            "co-",
            "com-",
            "come-",
            "comer-"
          ],
          "answerIndex": 1,
          "explanation": "Drop -er to get com-.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ellas ___ café. (beber)",
          "options": [
            "beben",
            "bebes",
            "bebe",
            "bebemos"
          ],
          "answerIndex": 0,
          "explanation": "beben is the ellas-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which ending set is correct for -er verbs?",
          "options": [
            "-o, -as, -a, -amos, -áis, -an",
            "-o, -as, -e, -emos, -áis, -en",
            "-o, -es, -e, -imos, -ís, -en",
            "-o, -es, -e, -emos, -éis, -en"
          ],
          "answerIndex": 3,
          "explanation": "This is the full regular -er ending set.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 2: Foundational & Structural Mastery (Yo como pan.)"
  },
  "es-u4-l3": {
    "id": "es-u4-l3",
    "unit": "es-u4",
    "level": "A1",
    "objective": "Conjugate regular -ir verbs in the present tense and use them in simple sentences.",
    "prerequisites": [
      "es-u4-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u4-l2"
      ]
    },
    "presentation": {
      "explanation": "-ir verbs are the smallest of the three families and share almost all their endings with -er verbs — the only differences appear in the nosotros and vosotros forms. Take vivir (to live), drop -ir to get the stem viv-, then add: vivo (yo), vives (tú), vive (él/ella/usted), vivimos (nosotros), vivís (vosotros), viven (ellos/ustedes). Comparing directly to comer: como/vivo, comes/vives, come/vive are identical patterns (o, es, e) — but comemos/vivimos and coméis/vivís swap the e for an i in exactly those two forms. Other common -ir verbs follow suit: escribir (to write) → escribo, escribes, escribe, escribimos, escribís, escriben. With all three families now covered, the complete pattern is: -o is universal; -as/-a (ar) vs. -es/-e (er, ir) split into two camps; and only nosotros/vosotros distinguish -er from -ir.",
      "examples": [
        {
          "target": "Yo vivo en Madrid.",
          "reading": "",
          "translation": "I live in Madrid."
        },
        {
          "target": "Tú escribes una carta.",
          "reading": "",
          "translation": "You write a letter."
        },
        {
          "target": "Ella vive con su familia.",
          "reading": "",
          "translation": "She lives with her family."
        },
        {
          "target": "Nosotros vivimos aquí.",
          "reading": "",
          "translation": "We live here."
        },
        {
          "target": "Ellos escriben libros.",
          "reading": "",
          "translation": "They write books."
        }
      ],
      "mnemonics": [
        "-ir endings: -o, -es, -e, -imos, -ís, -en — identical to -er except nosotros/vosotros swap e→i (vivimos not vivemos, vivís not vivéis).",
        "Only two forms distinguish -er from -ir: nosotros and vosotros. Everywhere else, treat them as the same pattern."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ en Madrid. (vivir)",
          "options": [
            "vives (18.1)",
            "vivo (18.2)",
            "vivimos (18.3)",
            "vive (18.4)"
          ],
          "answerIndex": 1,
          "explanation": "vivo is the yo-form of vivir."
        },
        {
          "prompt": "Tú ___ una carta. (escribir)",
          "options": [
            "escribes",
            "escribe",
            "escriben",
            "escribo"
          ],
          "answerIndex": 0,
          "explanation": "escribes is the tú-form."
        },
        {
          "prompt": "Nosotros ___ aquí. (vivir)",
          "options": [
            "vivimos",
            "vivamos",
            "viven",
            "vivemos"
          ],
          "answerIndex": 0,
          "explanation": "-ir verbs use -imos for nosotros, not -emos."
        },
        {
          "prompt": "Which two forms distinguish -ir verbs from -er verbs?",
          "options": [
            "él and ellos",
            "nosotros and vosotros",
            "All forms are different",
            "yo and tú"
          ],
          "answerIndex": 1,
          "explanation": "Only nosotros/vosotros swap the vowel; the rest match -er exactly."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ellos ___ libros. (escribir)",
          "options": [
            "escribo (18.1)",
            "escribe (18.2)",
            "escribimos (18.3)",
            "escriben (18.4)"
          ],
          "answerIndex": 3,
          "explanation": "escriben is the ellos-form."
        },
        {
          "prompt": "Vosotros ___ en Madrid. (vivir)",
          "options": [
            "vivís",
            "vivéis",
            "vivimos",
            "viven"
          ],
          "answerIndex": 0,
          "explanation": "vivís is the -ir vosotros-form (compare -éis for -er verbs)."
        },
        {
          "prompt": "Why do comemos and vivimos differ despite both being 'we' forms?",
          "options": [
            "They don't differ; this is a trick question",
            "comer is -er (comemos) and vivir is -ir (vivimos) — the only place the two families diverge",
            "vivimos is irregular",
            "comemos is incorrect"
          ],
          "answerIndex": 1,
          "explanation": "nosotros/vosotros are the only forms where -er and -ir differ."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ella ___ con su familia. (vivir)",
          "options": [
            "vivo",
            "viven",
            "vives",
            "vive"
          ],
          "answerIndex": 3,
          "explanation": "vive is the ella-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Yo ___ una carta. (escribir)",
          "options": [
            "escribes",
            "escribimos",
            "escribo",
            "escribe"
          ],
          "answerIndex": 2,
          "explanation": "escribo is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nosotros ___ libros. (escribir)",
          "options": [
            "escribemos",
            "escribimos",
            "escriben",
            "escribamos"
          ],
          "answerIndex": 1,
          "explanation": "-ir verbs use -imos for nosotros.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the stem of vivir?",
          "options": [
            "viv-",
            "vivi-",
            "vi-",
            "vivir-"
          ],
          "answerIndex": 0,
          "explanation": "Drop -ir to get viv-.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which ending is shared by -er and -ir in the tú-form?",
          "options": [
            "-as",
            "-is",
            "-a",
            "-es"
          ],
          "answerIndex": 3,
          "explanation": "Both use -es for tú (comes/vives).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Vosotros ___ libros. (escribir)",
          "options": [
            "escribimos",
            "escribéis",
            "escribís",
            "escriben"
          ],
          "answerIndex": 2,
          "explanation": "-ir vosotros-form ends in -ís.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 3: Foundational & Structural Mastery (Yo vivo en Madrid.)"
  },
  "es-u4-l4": {
    "id": "es-u4-l4",
    "unit": "es-u4",
    "level": "A1",
    "objective": "Apply gender and number agreement correctly across articles, nouns, and adjectives in present-tense sentences.",
    "prerequisites": [
      "es-u4-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "Every Spanish noun has a grammatical gender (masculine or feminine) that isn't always tied to biological sex — el libro (book, masculine), la mesa (table, feminine) — and this gender ripples outward to everything describing that noun: the article (el/la, un/una) and any adjectives (as covered for people in Unit 3, but applying equally to objects). Most nouns ending in -o are masculine and most ending in -a are feminine, but there are common exceptions to memorize as vocabulary (el día, 'the day,' is masculine despite ending in -a; la mano, 'the hand,' is feminine despite ending in -o). Plural forms add -s (or -es after a consonant): el libro → los libros, la mesa → las mesas, el profesor → los profesores. Combined with verb conjugation, a fully agreeing sentence looks like: Los estudiantes inteligentes hablan español — plural article (los), plural+agreeing adjective (inteligentes), plural subject (estudiantes) matched to the plural verb form (hablan).",
      "examples": [
        {
          "target": "el libro / los libros",
          "reading": "",
          "translation": "the book / the books (masculine)"
        },
        {
          "target": "la mesa / las mesas",
          "reading": "",
          "translation": "the table / the tables (feminine)"
        },
        {
          "target": "el día",
          "reading": "",
          "translation": "the day (masculine, despite ending in -a — an exception)"
        },
        {
          "target": "la mano",
          "reading": "",
          "translation": "the hand (feminine, despite ending in -o — an exception)"
        },
        {
          "target": "Los estudiantes inteligentes hablan español.",
          "reading": "",
          "translation": "The intelligent students speak Spanish."
        }
      ],
      "mnemonics": [
        "-o → usually masculine, -a → usually feminine — a strong default, but el día and la mano are worth memorizing as famous exceptions.",
        "Agreement is a chain reaction: change the noun's number, and the article, adjective, AND verb all have to follow along."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ libro es interesante. (the book, masculine)",
          "options": [
            "La (19.1)",
            "Los (19.2)",
            "Las (19.3)",
            "El (19.4)"
          ],
          "answerIndex": 3,
          "explanation": "libro is masculine → el."
        },
        {
          "prompt": "___ mesas son grandes. (the tables, feminine plural)",
          "options": [
            "El",
            "Los",
            "Las",
            "La"
          ],
          "answerIndex": 2,
          "explanation": "mesas is feminine plural → las."
        },
        {
          "prompt": "Which noun is a well-known exception to the -a-is-feminine pattern?",
          "options": [
            "la mesa",
            "el libro",
            "el día",
            "la casa"
          ],
          "answerIndex": 2,
          "explanation": "el día is masculine despite ending in -a."
        },
        {
          "prompt": "Los estudiantes ___ español. (hablar, plural subject)",
          "options": [
            "habla",
            "hablamos",
            "hablas",
            "hablan"
          ],
          "answerIndex": 3,
          "explanation": "Plural subject requires the plural verb form hablan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which noun is a well-known exception to the -o-is-masculine pattern?",
          "options": [
            "el libro (19.1)",
            "la mesa (19.2)",
            "la mano (19.3)",
            "el día (19.4)"
          ],
          "answerIndex": 2,
          "explanation": "la mano is feminine despite ending in -o."
        },
        {
          "prompt": "Translate: 'The intelligent students speak Spanish.'",
          "options": [
            "Los estudiantes inteligentes hablan español.",
            "El estudiante inteligente habla español.",
            "Los estudiante inteligentes habla español.",
            "Las estudiantes inteligente hablamos español."
          ],
          "answerIndex": 0,
          "explanation": "Every element (article, adjective, verb) must agree with the plural subject."
        },
        {
          "prompt": "How do most Spanish nouns form their plural?",
          "options": [
            "Add -s (or -es after a consonant)",
            "Change the last vowel",
            "No change",
            "Add -os only"
          ],
          "answerIndex": 0,
          "explanation": "Regular pluralization adds -s or -es."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ profesor es inteligente. (the professor, masculine)",
          "options": [
            "La",
            "Los",
            "El",
            "Las"
          ],
          "answerIndex": 2,
          "explanation": "profesor is masculine → el.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ casas son grandes. (the houses, feminine plural)",
          "options": [
            "El",
            "Las",
            "La",
            "Los"
          ],
          "answerIndex": 1,
          "explanation": "casas is feminine plural → las.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which is the correct plural of el profesor?",
          "options": [
            "los profesores",
            "los profesors",
            "el profesors",
            "las profesores"
          ],
          "answerIndex": 0,
          "explanation": "Nouns ending in a consonant add -es.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Los libros ___ interesantes. (ser, plural)",
          "options": [
            "es",
            "somos",
            "eres",
            "son"
          ],
          "answerIndex": 3,
          "explanation": "Plural subject requires son.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which article correctly matches la mano (feminine, despite -o ending)?",
          "options": [
            "los",
            "el",
            "la",
            "las"
          ],
          "answerIndex": 2,
          "explanation": "la mano is a known exception to the -o pattern.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What must agree with a plural noun in a fully correct Spanish sentence?",
          "options": [
            "Only the verb",
            "The article, any adjectives, AND the verb",
            "Only the article",
            "Nothing needs to agree"
          ],
          "answerIndex": 1,
          "explanation": "Agreement chains through article, adjective, and verb.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 4: Foundational & Structural Mastery (el libro / los libros)"
  },
  "es-u4-l5": {
    "id": "es-u4-l5",
    "unit": "es-u4",
    "level": "A1",
    "objective": "Combine -ar, -er, and -ir verb conjugation with gender/number agreement in connected present-tense sentences.",
    "prerequisites": [
      "es-u4-l1",
      "es-u4-l2",
      "es-u4-l3",
      "es-u4-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u4-l1",
        "es-u4-l2",
        "es-u4-l3",
        "es-u4-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson mixes all three verb families and full noun-phrase agreement into connected sentences — the actual skill of Unit 4. A short passage naturally uses all three conjugation patterns together, the way real speech does, not one drilled in isolation: Mi hermana vive en Madrid. Ella habla español y estudia inglés. Come pan por la mañana y bebe café. Los estudiantes de su clase escriben mucho. Notice each verb correctly reflects its family (-ir vive, -ar habla/estudia, -er come/bebe, -ir escriben) while every noun phrase (mi hermana, los estudiantes) correctly drives its verb's person/number and any accompanying article or adjective.",
      "examples": [
        {
          "target": "Mi hermana vive en Madrid.",
          "reading": "",
          "translation": "My sister lives in Madrid."
        },
        {
          "target": "Ella habla español y estudia inglés.",
          "reading": "",
          "translation": "She speaks Spanish and studies English."
        },
        {
          "target": "Come pan por la mañana y bebe café.",
          "reading": "",
          "translation": "She eats bread in the morning and drinks coffee."
        },
        {
          "target": "Los estudiantes de su clase escriben mucho.",
          "reading": "",
          "translation": "The students in her class write a lot."
        }
      ],
      "mnemonics": [
        "Run the three-family checklist on any verb: does it end in -ar, -er, or -ir in the infinitive? That alone tells you which of the three endings-sets to reach for."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mi hermana ___ en Madrid. (vivir)",
          "options": [
            "vivo (20.1)",
            "vives (20.2)",
            "vive (20.3)",
            "viven (20.4)"
          ],
          "answerIndex": 2,
          "explanation": "vive is the él/ella-form of vivir."
        },
        {
          "prompt": "Ella ___ español. (hablar)",
          "options": [
            "hablo",
            "hablas",
            "habla",
            "hablan"
          ],
          "answerIndex": 2,
          "explanation": "habla is the él/ella-form of hablar."
        },
        {
          "prompt": "Ella ___ pan por la mañana. (comer)",
          "options": [
            "como",
            "comes",
            "come",
            "comen"
          ],
          "answerIndex": 2,
          "explanation": "come is the él/ella-form of comer."
        },
        {
          "prompt": "Los estudiantes ___ mucho. (escribir)",
          "options": [
            "escribe",
            "escribo",
            "escriben",
            "escribimos"
          ],
          "answerIndex": 2,
          "explanation": "Plural subject requires escriben."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'My sister lives in Madrid. She speaks Spanish.'",
          "options": [
            "Mi hermana vivo en Madrid. Ella habla español. (20.1)",
            "Mi hermana vive en Madrid. Ella habla español. (20.2)",
            "Mi hermana vive en Madrid. Ella hablas español. (20.3)",
            "Mi hermana vives en Madrid. Ella hablo español. (20.4)"
          ],
          "answerIndex": 1,
          "explanation": "Both verbs correctly take the él/ella-form matching \"she/my sister.\""
        },
        {
          "prompt": "Which infinitive family does escribir belong to, and what nosotros ending does that require?",
          "options": [
            "-ar, -amos",
            "-ir, -imos",
            "-ir, -emos",
            "-er, -emos"
          ],
          "answerIndex": 1,
          "explanation": "escribir is -ir, taking -imos for nosotros."
        },
        {
          "prompt": "What is the actual test of this capstone lesson?",
          "options": [
            "Memorizing one single verb",
            "Only using -ar verbs",
            "Only using plural forms",
            "Correctly identifying and conjugating each verb's family while maintaining noun-phrase agreement, all within connected sentences"
          ],
          "answerIndex": 3,
          "explanation": "The lesson tests fluent combination of all three families plus agreement."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Mi hermana ___ en Madrid. (vivir)",
          "options": [
            "vives",
            "vive",
            "vivo",
            "viven"
          ],
          "answerIndex": 1,
          "explanation": "vive matches the él/ella-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ inglés. (estudiar)",
          "options": [
            "estudia",
            "estudias",
            "estudian",
            "estudio"
          ],
          "answerIndex": 0,
          "explanation": "estudia matches the él/ella-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ café por la mañana. (beber)",
          "options": [
            "bebes",
            "bebo",
            "beben",
            "bebe"
          ],
          "answerIndex": 3,
          "explanation": "bebe matches the él/ella-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Los estudiantes de su clase ___ mucho. (escribir)",
          "options": [
            "escribo",
            "escribimos",
            "escriben",
            "escribe"
          ],
          "answerIndex": 2,
          "explanation": "Plural subject requires escriben.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb family does vivir belong to?",
          "options": [
            "-er",
            "-ir",
            "Irregular, no family",
            "-ar"
          ],
          "answerIndex": 1,
          "explanation": "vivir is a regular -ir verb.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which of these three families share the tú-ending -es?",
          "options": [
            "-er and -ir only",
            "-ar and -ir only",
            "All three",
            "-ar and -er only"
          ],
          "answerIndex": 0,
          "explanation": "-er and -ir share -es for tú; -ar uses -as instead.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 5: Foundational & Structural Mastery (Mi hermana vive en Madrid.)"
  },
  "es-u5-l1": {
    "id": "es-u5-l1",
    "unit": "es-u5",
    "level": "A1",
    "objective": "Conjugate and use reflexive verbs to describe daily routine actions like waking up and getting dressed.",
    "prerequisites": [
      "es-u4-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u4-l1",
        "es-u4-l2"
      ]
    },
    "presentation": {
      "explanation": "Many daily-routine verbs in Spanish are reflexive — the action is done TO oneself — marked by a reflexive pronoun that matches the subject: me, te, se, nos, os, se. Levantarse (to get (oneself) up) conjugates as: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan — the verb ending follows the normal -ar pattern, but a reflexive pronoun is added before the conjugated verb. Other essential daily routine reflexives: despertarse (to wake up), ducharse (to shower), vestirse (to get dressed), acostarse (to go to bed). The reflexive pronoun always matches the subject doing the action, and normally comes right before the conjugated verb: Yo me despierto a las siete (I wake up at seven) — me matches yo, not levanto/despierto's ending, which independently marks the subject too; the two pieces of information (pronoun + ending) redundantly confirm the same subject.",
      "examples": [
        {
          "target": "Me levanto a las siete.",
          "reading": "",
          "translation": "I get up at seven."
        },
        {
          "target": "Te despiertas temprano.",
          "reading": "",
          "translation": "You wake up early."
        },
        {
          "target": "Ella se ducha por la mañana.",
          "reading": "",
          "translation": "She showers in the morning."
        },
        {
          "target": "Nos vestimos rápido.",
          "reading": "",
          "translation": "We get dressed quickly."
        },
        {
          "target": "Ellos se acuestan a las once.",
          "reading": "",
          "translation": "They go to bed at eleven."
        }
      ],
      "mnemonics": [
        "Reflexive pronoun + conjugated verb: me levanto, te levantas, se levanta — the pronoun always sits right before the verb, glued to whoever's doing the action to themselves.",
        "-arse verbs still conjugate with normal -ar endings (levanto, levantas...) — only the added pronoun makes them 'reflexive.'"
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ levanto a las siete. (reflexive pronoun for yo)",
          "options": [
            "se (21.1)",
            "me (21.2)",
            "nos (21.3)",
            "te (21.4)"
          ],
          "answerIndex": 1,
          "explanation": "me matches the yo subject."
        },
        {
          "prompt": "Tú te ___ temprano. (despertar, tú-form)",
          "options": [
            "despiertan",
            "despierta",
            "despierto",
            "despiertas"
          ],
          "answerIndex": 3,
          "explanation": "despiertas is the tú-form."
        },
        {
          "prompt": "Ella ___ ducha por la mañana. (reflexive pronoun for ella)",
          "options": [
            "se",
            "me",
            "nos",
            "te"
          ],
          "answerIndex": 0,
          "explanation": "se matches the ella subject."
        },
        {
          "prompt": "Nosotros nos ___ rápido. (vestir, nosotros-form)",
          "options": [
            "viste",
            "visto",
            "vestimos",
            "vistes"
          ],
          "answerIndex": 2,
          "explanation": "vestimos is the nosotros-form."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ellos ___ acuestan a las once. (reflexive pronoun for ellos)",
          "options": [
            "te (21.1)",
            "se (21.2)",
            "nos (21.3)",
            "me (21.4)"
          ],
          "answerIndex": 1,
          "explanation": "se matches the ellos subject."
        },
        {
          "prompt": "Where does the reflexive pronoun normally go relative to the conjugated verb?",
          "options": [
            "Right before the conjugated verb",
            "At the end of the sentence",
            "It is optional and can be omitted",
            "After the verb, always"
          ],
          "answerIndex": 0,
          "explanation": "The reflexive pronoun precedes the conjugated verb in a standard sentence."
        },
        {
          "prompt": "Which verb ending pattern do -arse reflexive verbs like levantarse still follow?",
          "options": [
            "-ir endings",
            "-er endings",
            "Normal -ar endings",
            "A completely unique ending set"
          ],
          "answerIndex": 2,
          "explanation": "Only the added pronoun makes it reflexive; the verb still conjugates as regular -ar."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ despierto temprano. (reflexive pronoun for yo)",
          "options": [
            "me",
            "se",
            "nos",
            "te"
          ],
          "answerIndex": 0,
          "explanation": "me matches yo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tú ___ levantas a las ocho. (reflexive pronoun for tú)",
          "options": [
            "me",
            "se",
            "os",
            "te"
          ],
          "answerIndex": 3,
          "explanation": "te matches tú.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nosotros nos ___ a las once. (acostar, nosotros-form)",
          "options": [
            "acuesto",
            "acuesta",
            "acostamos",
            "acuestas"
          ],
          "answerIndex": 2,
          "explanation": "acostamos is the nosotros-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which pronoun matches both él/ella and ellos/ellas?",
          "options": [
            "nos",
            "se",
            "me",
            "te"
          ],
          "answerIndex": 1,
          "explanation": "se covers third-person singular and plural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'She showers in the morning.'",
          "options": [
            "Ella se ducha por la mañana.",
            "Ella me ducha por la mañana.",
            "Ella ducha se por la mañana.",
            "Ella te ducha por la mañana."
          ],
          "answerIndex": 0,
          "explanation": "se matches ella and precedes the conjugated verb.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'They go to bed at eleven.'",
          "options": [
            "Ellos me acuestan a las once.",
            "Ellos acuestan se a las once.",
            "Ellos se acuesta a las once.",
            "Ellos se acuestan a las once."
          ],
          "answerIndex": 3,
          "explanation": "se + acuestan (plural conjugation) correctly matches ellos.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 1: Foundational & Structural Mastery (Me levanto a las siete.)"
  },
  "es-u5-l2": {
    "id": "es-u5-l2",
    "unit": "es-u5",
    "level": "A1",
    "objective": "Conjugate and use the irregular verbs tener and ir in present-tense routine descriptions.",
    "prerequisites": [
      "es-u5-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u3-l2",
        "es-u5-l1"
      ]
    },
    "presentation": {
      "explanation": "Two of the most frequent Spanish verbs are irregular and essential for routine descriptions: tener (to have, reviewed from Unit 3) and ir (to go), which is irregular in nearly every form: voy (yo), vas (tú), va (él/ella/usted), vamos (nosotros), vais (vosotros), van (ellos/ustedes) — it doesn't resemble a regular -ir verb at all. Ir is most commonly used with a + destination: Voy a la oficina (I go to the office), or with a + infinitive to express near-future plans, a construction so common it often functions like a simple future tense: Voy a trabajar (I am going to work / I'm about to work). Combined with tener's obligation expression tener que + infinitive (to have to do something), these two verbs cover an enormous share of everyday routine speech: Tengo que ir al trabajo (I have to go to work).",
      "examples": [
        {
          "target": "Voy a la oficina.",
          "reading": "",
          "translation": "I go to the office."
        },
        {
          "target": "Vas a trabajar.",
          "reading": "",
          "translation": "You're going to work. (near future)"
        },
        {
          "target": "Tengo que ir al trabajo.",
          "reading": "",
          "translation": "I have to go to work."
        },
        {
          "target": "Vamos al gimnasio los lunes.",
          "reading": "",
          "translation": "We go to the gym on Mondays."
        },
        {
          "target": "Ellos van a la escuela.",
          "reading": "",
          "translation": "They go to school."
        }
      ],
      "mnemonics": [
        "voy, vas, va, vamos, vais, van — ir is so irregular it's essentially its own memorized chant, unrelated to a regular -ir pattern.",
        "ir + a + infinitive = near-future 'going to' — exactly parallel to English 'I am going to work.'"
      ],
      "culturalNotes": [
        "a + el contracts to al (a + el = al) — vamos al gimnasio, not vamos a el gimnasio, exactly parallel to de + el = del."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ a la oficina. (ir)",
          "options": [
            "va (22.1)",
            "van (22.2)",
            "vas (22.3)",
            "voy (22.4)"
          ],
          "answerIndex": 3,
          "explanation": "voy is the yo-form of ir."
        },
        {
          "prompt": "Tú ___ a trabajar. (ir, near future)",
          "options": [
            "voy",
            "vas",
            "vamos",
            "va"
          ],
          "answerIndex": 1,
          "explanation": "vas is the tú-form."
        },
        {
          "prompt": "___ que ir al trabajo. (I have to go to work.)",
          "options": [
            "Voy",
            "Tengo",
            "Estoy",
            "Soy"
          ],
          "answerIndex": 1,
          "explanation": "tener que + infinitive expresses obligation."
        },
        {
          "prompt": "What does a + el contract to?",
          "options": [
            "ael",
            "al",
            "aal",
            "a el (no contraction)"
          ],
          "answerIndex": 1,
          "explanation": "a + el = al, a required contraction."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nosotros ___ al gimnasio los lunes. (ir)",
          "options": [
            "va (22.1)",
            "vamos (22.2)",
            "voy (22.3)",
            "van (22.4)"
          ],
          "answerIndex": 1,
          "explanation": "vamos is the nosotros-form."
        },
        {
          "prompt": "Ellos ___ a la escuela. (ir)",
          "options": [
            "van",
            "vamos",
            "vais",
            "va"
          ],
          "answerIndex": 0,
          "explanation": "van is the ellos-form."
        },
        {
          "prompt": "What does ir + a + infinitive express?",
          "options": [
            "Near-future plans, like \"going to\" in English",
            "A command",
            "A hypothetical",
            "Past completed action"
          ],
          "answerIndex": 0,
          "explanation": "This construction expresses near-future intention."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ a la oficina. (ir)",
          "options": [
            "va",
            "vas",
            "van",
            "voy"
          ],
          "answerIndex": 3,
          "explanation": "voy is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Vosotros ___ a la escuela. (ir)",
          "options": [
            "vamos",
            "vas",
            "vais",
            "van"
          ],
          "answerIndex": 2,
          "explanation": "vais is the vosotros-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'I have to go to work.'",
          "options": [
            "Voy que ir al trabajo.",
            "Tengo que ir al trabajo.",
            "Tengo ir al trabajo.",
            "Soy que ir al trabajo."
          ],
          "answerIndex": 1,
          "explanation": "tener que + infinitive = have to.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ a trabajar mañana. (ir, near future)",
          "options": [
            "va",
            "voy",
            "van",
            "vas"
          ],
          "answerIndex": 0,
          "explanation": "va is the ella-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Vamos ___ gimnasio. (contraction of a + el)",
          "options": [
            "a el",
            "el",
            "a la",
            "al"
          ],
          "answerIndex": 3,
          "explanation": "a + el = al.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb is highly irregular, not resembling a regular -ir verb pattern?",
          "options": [
            "vivir",
            "decir",
            "ir",
            "escribir"
          ],
          "answerIndex": 2,
          "explanation": "ir (voy, vas, va...) is entirely irregular.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 2: Foundational & Structural Mastery (Voy a la oficina.)"
  },
  "es-u5-l3": {
    "id": "es-u5-l3",
    "unit": "es-u5",
    "level": "A1",
    "objective": "Use frequency adverbs (siempre, a menudo, a veces, casi nunca, nunca) to describe how often you do something.",
    "prerequisites": [
      "es-u5-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u5-l1",
        "es-u5-l2"
      ]
    },
    "presentation": {
      "explanation": "Frequency adverbs scale from 'always' to 'never': siempre (always), a menudo (often), a veces (sometimes), casi nunca (almost never), nunca (never). They're flexible in position — often placed right after the conjugated verb, or at the start/end of the sentence for emphasis: Siempre me levanto temprano or Me levanto siempre temprano both work, though starting the sentence with the adverb is slightly more emphatic. Nunca has a special negation rule: when placed BEFORE the verb, no additional no is needed (Nunca como carne, 'I never eat meat'), but when placed AFTER the verb, no becomes required before the verb, creating a double-negative-looking (but grammatically correct) structure: No como nunca carne — both are correct and mean the same thing, unlike English where a double negative would cancel out.",
      "examples": [
        {
          "target": "Siempre me levanto temprano.",
          "reading": "",
          "translation": "I always get up early."
        },
        {
          "target": "A menudo trabajo los sábados.",
          "reading": "",
          "translation": "I often work on Saturdays."
        },
        {
          "target": "A veces como fuera.",
          "reading": "",
          "translation": "I sometimes eat out."
        },
        {
          "target": "Casi nunca veo la tele.",
          "reading": "",
          "translation": "I almost never watch TV."
        },
        {
          "target": "Nunca como carne. / No como nunca carne.",
          "reading": "",
          "translation": "I never eat meat. (both word orders are correct)"
        }
      ],
      "mnemonics": [
        "nunca before the verb = no extra no needed. nunca after the verb = no is required before the verb — Spanish tolerates 'double negatives' that would sound wrong in English but are fully grammatical here."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ me levanto temprano. (I always get up early.)",
          "options": [
            "Siempre (23.1)",
            "Casi nunca (23.2)",
            "A veces (23.3)",
            "Nunca (23.4)"
          ],
          "answerIndex": 0,
          "explanation": "Siempre = always."
        },
        {
          "prompt": "___ trabajo los sábados. (I often work on Saturdays.)",
          "options": [
            "Nunca",
            "Casi nunca",
            "A veces",
            "A menudo"
          ],
          "answerIndex": 3,
          "explanation": "A menudo = often."
        },
        {
          "prompt": "Nunca como carne — does this sentence need an additional no?",
          "options": [
            "No — nunca before the verb is sufficient",
            "Only in questions",
            "Only in the plural",
            "Yes, always"
          ],
          "answerIndex": 0,
          "explanation": "nunca before the verb does not require an additional no."
        },
        {
          "prompt": "How would you say 'I never eat meat' with nunca AFTER the verb?",
          "options": [
            "No como nunca carne.",
            "Nunca no como carne.",
            "No nunca como carne.",
            "Como nunca carne."
          ],
          "answerIndex": 0,
          "explanation": "When nunca follows the verb, no is required before it."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "___ veo la tele. (I almost never watch TV.)",
          "options": [
            "Siempre (23.1)",
            "A menudo (23.2)",
            "Casi nunca (23.3)",
            "A veces (23.4)"
          ],
          "answerIndex": 2,
          "explanation": "Casi nunca = almost never."
        },
        {
          "prompt": "Why is No como nunca carne grammatically correct in Spanish despite looking like a double negative?",
          "options": [
            "It is actually incorrect",
            "Spanish allows this pattern when nunca follows the verb — the no does not cancel the negation",
            "no and nunca cancel out, making it mean \"I always eat meat\"",
            "This structure is only used in questions"
          ],
          "answerIndex": 1,
          "explanation": "Spanish negation rules differ from English; this is fully correct and still negative."
        },
        {
          "prompt": "Which adverb means 'sometimes'?",
          "options": [
            "siempre",
            "a menudo",
            "a veces",
            "nunca"
          ],
          "answerIndex": 2,
          "explanation": "a veces = sometimes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ como fuera. (I sometimes eat out.)",
          "options": [
            "Siempre",
            "Casi nunca",
            "A veces",
            "Nunca"
          ],
          "answerIndex": 2,
          "explanation": "A veces = sometimes.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ veo la tele. (I almost never watch TV.)",
          "options": [
            "Siempre",
            "Casi nunca",
            "A menudo",
            "A veces"
          ],
          "answerIndex": 1,
          "explanation": "Casi nunca = almost never.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which adverb means 'always'?",
          "options": [
            "siempre",
            "a menudo",
            "nunca",
            "a veces"
          ],
          "answerIndex": 0,
          "explanation": "siempre = always.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nunca como carne — is an additional no required here?",
          "options": [
            "Yes",
            "Only in formal speech",
            "Only with plural subjects",
            "No"
          ],
          "answerIndex": 3,
          "explanation": "nunca before the verb needs no additional no.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'I never eat meat' with no explicitly before the verb?",
          "options": [
            "Nunca no como carne.",
            "No nunca como carne.",
            "No como nunca carne.",
            "Como no nunca carne."
          ],
          "answerIndex": 2,
          "explanation": "no + verb + nunca (after) is the correct structure.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which adverb means 'often'?",
          "options": [
            "a veces",
            "a menudo",
            "casi nunca",
            "nunca"
          ],
          "answerIndex": 1,
          "explanation": "a menudo = often.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 3: Foundational & Structural Mastery (Siempre me levanto temprano.)"
  },
  "es-u5-l4": {
    "id": "es-u5-l4",
    "unit": "es-u5",
    "level": "A1",
    "objective": "Ask and answer questions about someone else's daily routine using question words and reflexive verbs.",
    "prerequisites": [
      "es-u5-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u5-l1",
        "es-u5-l2"
      ]
    },
    "presentation": {
      "explanation": "Asking about someone's routine combines question words with the verbs from this unit: ¿A qué hora te levantas? (What time do you get up?), ¿Qué haces normalmente? (What do you normally do?), ¿Adónde vas? (Where are you going?) — adónde specifically asks about a destination with motion verbs, distinct from dónde (where, for location). Notice the reflexive pronoun still changes to match whoever is asked or answering: ¿A qué hora te levantas? (asking tú) naturally gets answered Me levanto a las siete (answering as yo) — the pronoun switches from te to me even though the verb stem and question structure stay parallel, exactly the kind of subject-tracking that reflexive verbs require throughout a conversation.",
      "examples": [
        {
          "target": "¿A qué hora te levantas?",
          "reading": "",
          "translation": "What time do you get up?"
        },
        {
          "target": "Me levanto a las siete.",
          "reading": "",
          "translation": "I get up at seven."
        },
        {
          "target": "¿Qué haces normalmente?",
          "reading": "",
          "translation": "What do you normally do?"
        },
        {
          "target": "¿Adónde vas?",
          "reading": "",
          "translation": "Where are you going?"
        },
        {
          "target": "Voy al trabajo.",
          "reading": "",
          "translation": "I'm going to work."
        }
      ],
      "mnemonics": [
        "adónde = a + dónde, built for motion ('to where'), just like ir + a pairs a destination with the verb 'to go.'",
        "The reflexive pronoun always tracks the CURRENT subject, switching te→me as the conversation turns from question to answer."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿A qué hora te ___? (What time do you get up?)",
          "options": [
            "levanto (24.1)",
            "levanta (24.2)",
            "levantamos (24.3)",
            "levantas (24.4)"
          ],
          "answerIndex": 3,
          "explanation": "levantas matches tú in the question."
        },
        {
          "prompt": "Answering the above as yourself: ___ levanto a las siete.",
          "options": [
            "Me",
            "Se",
            "Nos",
            "Te"
          ],
          "answerIndex": 0,
          "explanation": "The pronoun switches to me for the yo-answer."
        },
        {
          "prompt": "Which question word specifically asks about a destination with motion verbs?",
          "options": [
            "dónde",
            "cómo",
            "adónde",
            "cuándo"
          ],
          "answerIndex": 2,
          "explanation": "adónde = \"to where,\" pairs with motion verbs like ir."
        },
        {
          "prompt": "How do you ask 'What do you normally do?'",
          "options": [
            "¿Qué haces normalmente?",
            "¿Qué hace normalmente yo?",
            "¿Dónde haces normalmente?",
            "¿Cuándo haces normalmente?"
          ],
          "answerIndex": 0,
          "explanation": "¿Qué haces...? asks about routine actions."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Adónde ___? (Where are you going? — tú)",
          "options": [
            "voy (24.1)",
            "van (24.2)",
            "vas (24.3)",
            "va (24.4)"
          ],
          "answerIndex": 2,
          "explanation": "vas matches tú."
        },
        {
          "prompt": "Why does the reflexive pronoun change from te to me between a question and its answer?",
          "options": [
            "It shouldn't change; this is an error",
            "Because the subject changes from \"you\" (question) to \"I\" (answer)",
            "Because questions never use reflexive pronouns",
            "Because all reflexive pronouns are interchangeable"
          ],
          "answerIndex": 1,
          "explanation": "The pronoun always tracks the current subject of the sentence."
        },
        {
          "prompt": "Translate: 'I am going to work.' (near future, in answer to ¿Adónde vas?)",
          "options": [
            "Voy al trabajo.",
            "Voy a el trabajo.",
            "Va al trabajo.",
            "Vas al trabajo."
          ],
          "answerIndex": 0,
          "explanation": "Voy (yo) al (a+el contraction) trabajo."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿A qué hora te ___? (levantar, tú)",
          "options": [
            "levanto",
            "levantas",
            "levanta",
            "levantan"
          ],
          "answerIndex": 1,
          "explanation": "levantas matches tú.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Me ___ a las siete. (levantar, yo — answering the above)",
          "options": [
            "levanto",
            "levantas",
            "levanta",
            "levantamos"
          ],
          "answerIndex": 0,
          "explanation": "levanto matches yo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which question word asks specifically about a destination?",
          "options": [
            "dónde",
            "cómo",
            "qué",
            "adónde"
          ],
          "answerIndex": 3,
          "explanation": "adónde is used with motion verbs for destinations.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Qué ___ normalmente? (hacer, tú)",
          "options": [
            "hago",
            "hace",
            "haces",
            "hacemos"
          ],
          "answerIndex": 2,
          "explanation": "haces matches tú.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Adónde vas? — a natural answer using ir would be:",
          "options": [
            "Tengo al trabajo.",
            "Voy al trabajo.",
            "Soy al trabajo.",
            "Estoy al trabajo."
          ],
          "answerIndex": 1,
          "explanation": "ir answers a destination question naturally.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What must change correctly as the conversation shifts from question to answer?",
          "options": [
            "The reflexive pronoun and verb ending, to match the new subject",
            "Only the verb ending",
            "Nothing changes",
            "Only the reflexive pronoun"
          ],
          "answerIndex": 0,
          "explanation": "Both the pronoun and verb ending track the current subject together.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 4: Foundational & Structural Mastery (¿A qué hora te levantas?)"
  },
  "es-u5-l5": {
    "id": "es-u5-l5",
    "unit": "es-u5",
    "level": "A1",
    "objective": "Describe a full daily routine from morning to night in a connected paragraph, using reflexive verbs, tener/ir, and frequency adverbs.",
    "prerequisites": [
      "es-u5-l1",
      "es-u5-l2",
      "es-u5-l3",
      "es-u5-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u5-l1",
        "es-u5-l2",
        "es-u5-l3",
        "es-u5-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson produces a full daily-routine paragraph, combining every piece of Unit 5: reflexive verbs (Lesson 1), tener/ir (Lesson 2), frequency adverbs (Lesson 3), and question-and-answer patterns (Lesson 4). A natural routine paragraph moves chronologically and mixes sentence types the way real speech does: Siempre me levanto a las siete y me ducho rápido. Voy al trabajo en autobús. A menudo como con mis compañeros. Nunca me acuesto tarde entre semana. Being able to produce several connected, varied sentences like this — rather than isolated single-sentence drills — is the actual marker of A1-level speaking proficiency the CEFR framework targets, and directly parallels the Japanese Unit 5 capstone's goal for the flagship comparison between these two languages.",
      "examples": [
        {
          "target": "Siempre me levanto a las siete y me ducho rápido.",
          "reading": "",
          "translation": "I always get up at seven and shower quickly."
        },
        {
          "target": "Voy al trabajo en autobús.",
          "reading": "",
          "translation": "I go to work by bus."
        },
        {
          "target": "A menudo como con mis compañeros.",
          "reading": "",
          "translation": "I often eat with my coworkers."
        },
        {
          "target": "Nunca me acuesto tarde entre semana.",
          "reading": "",
          "translation": "I never go to bed late during the week."
        }
      ],
      "mnemonics": [
        "Run the Unit 5 checklist for any routine sentence: reflexive verb needed? which frequency adverb? does tener/ir apply? — stacking these answers builds the full paragraph."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Siempre ___ levanto a las siete. (reflexive pronoun for yo)",
          "options": [
            "me (25.1)",
            "te (25.2)",
            "se (25.3)",
            "nos (25.4)"
          ],
          "answerIndex": 0,
          "explanation": "me matches yo throughout the paragraph."
        },
        {
          "prompt": "___ al trabajo en autobús. (ir, yo)",
          "options": [
            "Voy",
            "Vas",
            "Va",
            "Van"
          ],
          "answerIndex": 0,
          "explanation": "Voy is the yo-form of ir."
        },
        {
          "prompt": "___ como con mis compañeros. (often)",
          "options": [
            "Siempre",
            "A menudo",
            "Nunca",
            "Casi nunca"
          ],
          "answerIndex": 1,
          "explanation": "A menudo = often."
        },
        {
          "prompt": "Nunca ___ acuesto tarde entre semana. (reflexive pronoun for yo)",
          "options": [
            "te",
            "me",
            "se",
            "nos"
          ],
          "answerIndex": 1,
          "explanation": "me matches yo; nunca before the verb needs no extra no."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I always get up at seven and shower quickly.'",
          "options": [
            "Nunca me levanto a las siete y me ducho rápido. (25.1)",
            "Siempre me levanto a las siete y me ducho rápido. (25.2)",
            "Siempre me levanto a las siete y ducho rápido. (25.3)",
            "Siempre te levantas a las siete y te duchas rápido. (25.4)"
          ],
          "answerIndex": 1,
          "explanation": "Correct pronoun (me), correct frequency adverb (siempre), and both reflexive verbs correctly conjugated."
        },
        {
          "prompt": "What four Unit 5 elements does this capstone paragraph combine?",
          "options": [
            "Only reflexive verbs",
            "Only ir",
            "Only frequency adverbs",
            "Reflexive verbs, tener/ir, frequency adverbs, and question-answer patterns"
          ],
          "answerIndex": 3,
          "explanation": "This mirrors the explicit combination stated in the lesson explanation."
        },
        {
          "prompt": "Why does this lesson explicitly parallel the Japanese Unit 5 capstone?",
          "options": [
            "It doesn't — they are unrelated",
            "Because Spanish and Japanese share the same grammar",
            "It is a coincidence",
            "Both are designed to test producing a connected, multi-sentence A1-level routine description"
          ],
          "answerIndex": 3,
          "explanation": "Both flagship languages build toward the same CEFR A1 can-do milestone at this point in the roadmap."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Siempre ___ levanto a las siete. (reflexive pronoun for yo)",
          "options": [
            "me",
            "te",
            "se",
            "nos"
          ],
          "answerIndex": 0,
          "explanation": "me matches yo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ al trabajo en autobús. (ir, yo)",
          "options": [
            "Vas",
            "Va",
            "Vamos",
            "Voy"
          ],
          "answerIndex": 3,
          "explanation": "Voy is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ como con mis compañeros. (often)",
          "options": [
            "Casi nunca",
            "Nunca",
            "A menudo",
            "Siempre"
          ],
          "answerIndex": 2,
          "explanation": "A menudo = often.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nunca me ___ tarde entre semana. (acostar, yo)",
          "options": [
            "acuestas",
            "acuesto",
            "acostamos",
            "acuesta"
          ],
          "answerIndex": 1,
          "explanation": "acuesto is the yo-form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which reflexive pronoun is used throughout this yo-centered paragraph?",
          "options": [
            "me",
            "se",
            "nos",
            "te"
          ],
          "answerIndex": 0,
          "explanation": "me consistently matches the yo subject.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the overall skill this capstone paragraph tests?",
          "options": [
            "Isolated vocabulary recall only",
            "Only conjugating ir correctly",
            "Only using nunca correctly",
            "Producing a connected, varied, multi-sentence daily routine description at A1 level"
          ],
          "answerIndex": 3,
          "explanation": "This is the explicit goal stated in the lesson explanation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 5: Foundational & Structural Mastery (Siempre me levanto a las siete)"
  },
  "es-u6-l1": {
    "id": "es-u6-l1",
    "unit": "es-u6",
    "level": "A1",
    "objective": "Name common foods and drinks and use gustar to say what someone likes, correctly matching the verb to the food rather than to the person.",
    "prerequisites": [
      "es-u5-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u5-l3",
        "es-u5-l4",
        "es-u5-l5"
      ]
    },
    "presentation": {
      "explanation": "gustar is the single biggest grammar trap for English speakers ordering food in Spanish, because it does NOT work like the English verb \"to like.\" gustar literally means \"to be pleasing to.\" The food is the grammatical SUBJECT, and the person who likes it is marked with an indirect object pronoun (me, te, le, nos, les) placed BEFORE the verb. So \"I like tacos\" is really \"Tacos are pleasing to me\": (A mí) me gustan los tacos — notice gustan is PLURAL because los tacos is plural, not because \"I\" is one person. Get one thing (singular): me gusta el café. Get several things (plural): me gustan las enchiladas. The verb agrees with what's liked, never with who's doing the liking — that's the trap. Core vocabulary: los tacos, las enchiladas, el mole, la salsa picante, el chile, el café, el agua, la limonada, la horchata, el pan dulce.",
      "examples": [
        {
          "target": "A Marisol le gusta la salsa picante — en TODO.",
          "reading": "",
          "translation": "Marisol likes hot sauce — on EVERYTHING."
        },
        {
          "target": "Me gustan los tacos.",
          "reading": "",
          "translation": "I like tacos. (plural verb because tacos is plural)"
        },
        {
          "target": "¿Te gusta el café?",
          "reading": "",
          "translation": "Do you like coffee? (singular verb, singular coffee)"
        },
        {
          "target": "A Marisol le gustan las enchiladas, pero le gusta más el chile solo.",
          "reading": "",
          "translation": "Marisol likes enchiladas, but she likes chile by itself even more."
        }
      ],
      "mnemonics": [
        "gustar trap, one line: the FOOD drives the verb (gusta/gustan), the PERSON just gets a pronoun tag (me/te/le/nos/les) parked in front. If you conjugate gustar to match \"I,\" you've already lost — it should almost always be gusta or gustan, nothing else, in everyday sentences.",
        "Think of gustar as a doorbell: the food \"rings\" gusta(n), and the pronoun just says whose door it rang — me, te, le..."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ gustan los tacos. (I like tacos.)",
          "options": [
            "Yo (26.1)",
            "Mi (26.2)",
            "Te (26.3)",
            "Me (26.4)"
          ],
          "answerIndex": 3,
          "explanation": "me is the indirect object pronoun for \"to me\"; gustan agrees with los tacos (plural)."
        },
        {
          "prompt": "Me ___ el café. (I like coffee.)",
          "options": [
            "gustas",
            "gusto",
            "gustan",
            "gusta"
          ],
          "answerIndex": 3,
          "explanation": "el café is singular, so gusta (singular) is correct — not gustan."
        },
        {
          "prompt": "A Marisol le ___ las enchiladas. (Marisol likes enchiladas.)",
          "options": [
            "gusto",
            "gusta",
            "gustas",
            "gustan"
          ],
          "answerIndex": 3,
          "explanation": "las enchiladas is plural, so gustan agrees with it, not with Marisol."
        },
        {
          "prompt": "What determines whether you use gusta or gustan?",
          "options": [
            "Whether the sentence is a question",
            "Whether the speaker is male or female",
            "It's always gusta, never gustan",
            "Whether the liked thing (the grammatical subject) is singular or plural"
          ],
          "answerIndex": 3,
          "explanation": "gustar's verb form always agrees with what is liked, not with who is doing the liking."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Do you like coffee?'",
          "options": [
            "¿Tú gustas el café? (26.1)",
            "¿Te gustan el café? (26.2)",
            "¿Gusta tú el café? (26.3)",
            "¿Te gusta el café? (26.4)"
          ],
          "answerIndex": 3,
          "explanation": "te (to you) + gusta (agrees with singular el café)."
        },
        {
          "prompt": "Why is 'Yo gusto los tacos' wrong, even though it looks like a direct word-for-word translation of 'I like tacos'?",
          "options": [
            "gustar needs an indirect object pronoun (me) and must agree with los tacos, not with yo",
            "yo can never appear in a sentence with gustar",
            "tacos should be singular",
            "It's actually correct"
          ],
          "answerIndex": 0,
          "explanation": "This is the exact trap the lesson explanation warns about."
        },
        {
          "prompt": "Translate: 'Marisol likes hot sauce on everything.'",
          "options": [
            "A Marisol gusta le salsa picante en todo.",
            "A Marisol le gustan la salsa picante en todo.",
            "A Marisol le gusta la salsa picante en todo.",
            "Marisol gusta la salsa picante en todo."
          ],
          "answerIndex": 2,
          "explanation": "la salsa picante is singular, so le gusta (not gustan) is correct, with le before the verb."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ gustan los tacos.",
          "options": [
            "Yo",
            "Mi",
            "Te",
            "Me"
          ],
          "answerIndex": 3,
          "explanation": "me is the correct indirect object pronoun.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Me ___ el café.",
          "options": [
            "gustas",
            "gusto",
            "gusta",
            "gustan"
          ],
          "answerIndex": 2,
          "explanation": "el café is singular.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A Marisol le ___ las enchiladas.",
          "options": [
            "gusto",
            "gustan",
            "gustas",
            "gusta"
          ],
          "answerIndex": 1,
          "explanation": "las enchiladas is plural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Te ___ el chile? (Do you like chile?)",
          "options": [
            "gusta",
            "gustas",
            "gustan",
            "gusto"
          ],
          "answerIndex": 0,
          "explanation": "el chile is singular.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the grammatical subject of 'Me gustan los tacos'?",
          "options": [
            "gustan",
            "Me (I)",
            "There is no subject",
            "los tacos"
          ],
          "answerIndex": 3,
          "explanation": "los tacos is what's doing the 'being pleasing,' making it the grammatical subject — the reverse of English intuition.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Marisol likes enchiladas, but she likes chile by itself even more.'",
          "options": [
            "A Marisol le gusta las enchiladas, pero le gustan más el chile solo.",
            "Marisol le gustan las enchiladas, pero le gusta el chile más solo.",
            "A Marisol le gustan las enchiladas, pero le gusta más el chile solo.",
            "A Marisol gustan las enchiladas, pero gusta más el chile solo."
          ],
          "answerIndex": 2,
          "explanation": "gustan agrees with plural enchiladas; gusta agrees with singular chile; le appears before both verbs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 1: Foundational & Structural Mastery (A Marisol le gusta la salsa pi)"
  },
  "es-u6-l2": {
    "id": "es-u6-l2",
    "unit": "es-u6",
    "level": "A1",
    "objective": "Use encantar for stronger preferences and add the a + [person] clarifier to disambiguate or emphasize who likes what.",
    "prerequisites": [
      "es-u6-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u6-l1"
      ]
    },
    "presentation": {
      "explanation": "encantar follows the exact same grammar as gustar — indirect object pronoun in front, verb agreeing with the thing, not the person — but it means \"to be enchanting to / to totally love,\" a stronger flavor than gustar: A Marisol le encanta el picante (\"Marisol absolutely loves spicy food\") lands stronger than le gusta. The tricky part with both verbs is that le can mean \"to him,\" \"to her,\" or \"to you (formal)\" — genuinely ambiguous on its own. Spanish fixes this with a clarifying phrase, a + [name/pronoun], placed at the front of the sentence: A Marisol le encanta el picante removes any doubt about who \"le\" refers to. The same a-phrase is also used purely for CONTRAST, even when there's no ambiguity: A mí me gusta el café, pero a Luis le gusta el té (\"I like coffee, but Luis likes tea\") — without the a mí / a Luis, the sentence would still be grammatical, just flatter, losing the \"as for me... but as for Luis...\" contrast.",
      "examples": [
        {
          "target": "A Marisol le encanta el picante.",
          "reading": "",
          "translation": "Marisol absolutely loves spicy food."
        },
        {
          "target": "A mí me gusta el café, pero a Luis le gusta el té.",
          "reading": "",
          "translation": "I like coffee, but Luis likes tea."
        },
        {
          "target": "¿A ti te encantan los tacos también?",
          "reading": "",
          "translation": "Do you love tacos too?"
        },
        {
          "target": "A Marisol le encanta el picante; a mí, no tanto.",
          "reading": "",
          "translation": "Marisol loves spicy food; me, not so much."
        }
      ],
      "mnemonics": [
        "le is a mystery pronoun wearing a mask — it could be him, her, or formal-you. The a + [name] clarifier is the mask-off moment: A Marisol le... tells you exactly who's under the mask.",
        "encantar = gustar's louder sibling. Same grammar rules, bigger feelings — think 'enchanted by' rather than merely 'pleased by.'"
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "A Marisol ___ encanta el picante. (Marisol loves spicy food.)",
          "options": [
            "le (27.1)",
            "se (27.2)",
            "la (27.3)",
            "lo (27.4)"
          ],
          "answerIndex": 0,
          "explanation": "le is the indirect object pronoun paired with encantar, just like with gustar."
        },
        {
          "prompt": "Why does Spanish add 'A Marisol' before 'le encanta el picante' if le already carries meaning?",
          "options": [
            "It's optional decoration with no function",
            "le is ambiguous (him/her/formal-you) and 'A Marisol' clarifies exactly who is meant",
            "Spanish requires a name in every sentence",
            "It changes encanta to a different tense"
          ],
          "answerIndex": 1,
          "explanation": "This is exactly the disambiguation function explained in the lesson."
        },
        {
          "prompt": "A mí me gusta el café, pero ___ Luis le gusta el té. (...but Luis likes tea.)",
          "options": [
            "a",
            "de",
            "le",
            "en"
          ],
          "answerIndex": 0,
          "explanation": "a Luis is the clarifying/contrasting phrase paired with le gusta."
        },
        {
          "prompt": "What does encantar add in meaning compared to gustar?",
          "options": [
            "Nothing, they're identical in meaning",
            "A stronger degree of liking — closer to 'love' than 'like'",
            "It reverses the meaning to 'dislike'",
            "It's used only for drinks, never food"
          ],
          "answerIndex": 1,
          "explanation": "encantar is gustar's stronger cousin, same grammar, bigger feeling."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I like coffee, but Luis likes tea.'",
          "options": [
            "Yo gusto el café, pero Luis gusta el té. (27.1)",
            "A mí me gustan el café, pero a Luis le gusta el té. (27.2)",
            "A mí me gusta el café, pero a Luis le gusta el té. (27.3)",
            "Me gusta el café, pero Luis le gusta el té. (27.4)"
          ],
          "answerIndex": 2,
          "explanation": "Both clauses need the me/le + gusta pattern, and el café is singular so gusta is correct; a mí / a Luis add the contrast."
        },
        {
          "prompt": "When is the a + [person] clarifier grammatically required rather than just stylistic?",
          "options": [
            "When le/les would otherwise be ambiguous about who is meant",
            "Only in questions",
            "Only with encantar, never with gustar",
            "Never — it's always optional"
          ],
          "answerIndex": 0,
          "explanation": "Ambiguity is the trigger for making the clarifier functionally necessary rather than just emphatic."
        },
        {
          "prompt": "Translate: 'Marisol loves spicy food; me, not so much.'",
          "options": [
            "Marisol encanta el picante; yo, no tanto.",
            "A Marisol la encanta el picante; a mí, no tanto.",
            "A Marisol le encantan el picante; a mí, no tanto.",
            "A Marisol le encanta el picante; a mí, no tanto."
          ],
          "answerIndex": 3,
          "explanation": "le (not la) pairs with encantar; el picante is singular so encanta is correct."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "A Marisol ___ encanta el picante.",
          "options": [
            "lo",
            "se",
            "le",
            "la"
          ],
          "answerIndex": 2,
          "explanation": "le is the correct indirect object pronoun.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A mí me gusta el café, pero ___ Luis le gusta el té.",
          "options": [
            "en",
            "a",
            "le",
            "de"
          ],
          "answerIndex": 1,
          "explanation": "a Luis clarifies/contrasts.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'A Marisol' added before 'le encanta el picante'?",
          "options": [
            "le alone is ambiguous (him/her/formal-you); the a-phrase clarifies who is meant",
            "It changes the verb tense",
            "It's a subject pronoun replacing le",
            "Pure decoration"
          ],
          "answerIndex": 0,
          "explanation": "Disambiguation is the core function taught in this lesson.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿A ti te ___ los tacos también? (Do you love tacos too?)",
          "options": [
            "encanta",
            "encantas",
            "encanto",
            "encantan"
          ],
          "answerIndex": 3,
          "explanation": "los tacos is plural, so encantan agrees with it.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What's the core grammatical similarity between gustar and encantar?",
          "options": [
            "They conjugate completely differently",
            "gustar is only for drinks, encantar only for food",
            "Both use an indirect object pronoun for the person and agree in verb form with the thing being liked/loved",
            "encantar doesn't need a pronoun at all"
          ],
          "answerIndex": 2,
          "explanation": "Same underlying grammar pattern, different intensity of meaning.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Marisol absolutely loves spicy food.'",
          "options": [
            "A Marisol la encanta el picante.",
            "A Marisol le encanta el picante.",
            "Marisol encanta el picante.",
            "A Marisol le encantan el picante."
          ],
          "answerIndex": 1,
          "explanation": "le (indirect object) + encanta (agrees with singular el picante).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 2: Foundational & Structural Mastery (A Marisol le encanta el picant)"
  },
  "es-u6-l3": {
    "id": "es-u6-l3",
    "unit": "es-u6",
    "level": "A1",
    "objective": "Order food and drinks politely using querer (quiero/quisiera) and ask for things with poder (¿puedo?/¿me puede...?).",
    "prerequisites": [
      "es-u6-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u6-l1",
        "es-u6-l2"
      ]
    },
    "presentation": {
      "explanation": "querer (to want) gives you the direct, everyday way to order: Quiero los tacos, por favor (\"I want the tacos, please\") — completely normal and not rude in Spanish, unlike the bluntness \"I want\" can carry in English. For a softer, more formal register — closer to English \"I would like\" — use quisiera, the imperfect subjunctive form of querer used purely as a politeness cushion: Quisiera el mole, por favor sounds noticeably more polished than Quiero el mole in a nicer restaurant. poder (to be able to) covers requests and permission: ¿Puedo pedir algo más? (\"Can/May I order something else?\") and ¿Me puede traer la cuenta? (\"Could you bring me the check?\", literally \"can you bring to-me the check\"). Note that pedir means \"to order/request\" (a waiter pide your order), while querer/pedir together — Quiero pedir el mole — is a very natural way to open an order: \"I'd like to order the mole.\"",
      "examples": [
        {
          "target": "Quiero los tacos, por favor.",
          "reading": "",
          "translation": "I want the tacos, please. (direct, everyday ordering)"
        },
        {
          "target": "Quisiera el mole, por favor.",
          "reading": "",
          "translation": "I would like the mole, please. (softer, more formal)"
        },
        {
          "target": "¿Puedo pedir algo más?",
          "reading": "",
          "translation": "Can I order something else?"
        },
        {
          "target": "¿Me puede traer la cuenta, por favor?",
          "reading": "",
          "translation": "Could you bring me the check, please?"
        }
      ],
      "mnemonics": [
        "quiero vs. quisiera: quiero is a straight order at a taco stand, quisiera is the version you'd use with a white tablecloth and a wine list — same word family, different formality dial.",
        "¿Me puede traer...? literally chains 'to-me / can-you / bring / [thing]' — Spanish word order keeps the pronoun me right up front, unlike English which saves 'me' for the middle."
      ],
      "culturalNotes": [
        "In much of Spain and Latin America, the check doesn't arrive automatically at the end of a meal the way it often does in the US — bringing it unasked can seem like rushing the customer out. You're expected to ask for it explicitly: La cuenta, por favor. Lingering at the table well after finishing (a custom sometimes called sobremesa in Spain and parts of Latin America) is normal and even valued as part of the social meal, not a sign the table needs to turn over."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "___ los tacos, por favor. (I want the tacos, please.)",
          "options": [
            "Quisiera (28.1)",
            "Puedo (28.2)",
            "Quieres (28.3)",
            "Quiero (28.4)"
          ],
          "answerIndex": 3,
          "explanation": "Quiero is the direct, everyday 'I want' for ordering."
        },
        {
          "prompt": "___ el mole, por favor. (More formal: I would like the mole.)",
          "options": [
            "Quisiera",
            "Puedes",
            "Quieren",
            "Quiero"
          ],
          "answerIndex": 0,
          "explanation": "Quisiera is the softer, more polite 'I would like.'"
        },
        {
          "prompt": "¿___ pedir algo más? (Can I order something else?)",
          "options": [
            "Quisiera",
            "Puedo",
            "Puede",
            "Quiero"
          ],
          "answerIndex": 1,
          "explanation": "Puedo (from poder) asks about ability/permission."
        },
        {
          "prompt": "How do you ask for the check in a Spanish-speaking restaurant?",
          "options": [
            "La cuenta, por favor",
            "Quiero la cuenta ahora",
            "Give a hand signal only",
            "Wait silently until it appears"
          ],
          "answerIndex": 0,
          "explanation": "The check is normally requested explicitly, not brought automatically."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Could you bring me the check, please?'",
          "options": [
            "¿Me puede traer la cuenta, por favor? (28.1)",
            "¿Puedo traer la cuenta, por favor? (28.2)",
            "¿Quiero traer la cuenta, por favor? (28.3)",
            "¿Traer me puede la cuenta, por favor? (28.4)"
          ],
          "answerIndex": 0,
          "explanation": "¿Me puede traer...? keeps me right before puede, then the infinitive traer, then the object."
        },
        {
          "prompt": "Why might a server NOT bring the check to your table even after you've clearly finished eating?",
          "options": [
            "It's considered rude to serve dessert",
            "Bringing it unasked can seem like rushing the customer; you're expected to request it explicitly",
            "The restaurant forgot",
            "Checks are only given in the morning"
          ],
          "answerIndex": 1,
          "explanation": "This captures the specific cultural reasoning from the note, not just 'ask for the check.'"
        },
        {
          "prompt": "What's the practical difference between Quiero el mole and Quisiera el mole?",
          "options": [
            "They mean completely different foods",
            "No difference at all",
            "Quiero is direct/everyday; quisiera is softer and more formal, like 'I want' vs. 'I would like'",
            "Quisiera is used only for drinks"
          ],
          "answerIndex": 2,
          "explanation": "This is the formality distinction taught in the explanation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "___ los tacos, por favor.",
          "options": [
            "Quieres",
            "Quiero",
            "Quisiera",
            "Puedo"
          ],
          "answerIndex": 1,
          "explanation": "Quiero for direct ordering.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ el mole, por favor. (more formal)",
          "options": [
            "Quisiera",
            "Quieren",
            "Quiero",
            "Puedes"
          ],
          "answerIndex": 0,
          "explanation": "Quisiera softens the request.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿___ pedir algo más?",
          "options": [
            "Quiero",
            "Puede",
            "Quisiera",
            "Puedo"
          ],
          "answerIndex": 3,
          "explanation": "Puedo asks about permission/ability.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Me ___ traer la cuenta, por favor? (Could you bring me the check?)",
          "options": [
            "puedo",
            "quisiera",
            "puede",
            "quiero"
          ],
          "answerIndex": 2,
          "explanation": "puede (you-formal, can) is correct when addressing a server formally.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you request the check in most Spanish-speaking restaurants?",
          "options": [
            "It's brought automatically once you finish",
            "You ask explicitly: La cuenta, por favor",
            "You must pay at a register before sitting down",
            "You leave money on the table without asking"
          ],
          "answerIndex": 1,
          "explanation": "The check is normally requested, reflecting the sobremesa custom of not rushing diners.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which is more formal: Quiero el mole or Quisiera el mole?",
          "options": [
            "Quisiera",
            "Quiero",
            "Neither is used for ordering",
            "They're equally formal"
          ],
          "answerIndex": 0,
          "explanation": "Quisiera is the softened, more formal register.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 3: Foundational & Structural Mastery (Quiero los tacos, por favor.)"
  },
  "es-u6-l4": {
    "id": "es-u6-l4",
    "unit": "es-u6",
    "level": "A1",
    "objective": "Ask about and express strong likes and dislikes with ¿Qué te gusta?, no gustar nada, and odiar, while correctly switching grammar patterns between the two.",
    "prerequisites": [
      "es-u6-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u6-l1",
        "es-u6-l2",
        "es-u6-l3"
      ]
    },
    "presentation": {
      "explanation": "¿Qué te gusta? (\"What do you like?\") asks generally; ¿Qué te gusta comer? (\"What do you like to eat?\") narrows it to food. To flatly reject something, no gustar nada works within the SAME gustar grammar you already know: No me gusta nada el picante (\"I don't like spicy food AT ALL\") — nada intensifies the negative, and me/gustar still follow the food, not the person. Here's the second big trap of this unit: odiar (to hate) does NOT follow gustar's grammar at all — it's a completely ordinary verb where the PERSON is the subject and the hated thing is a normal direct object: Yo odio el picante (\"I hate spicy food\") conjugates like any -ar verb (odio, odias, odia...), nothing like gustar's me/te/le pattern. So \"I hate spicy food\" and \"I don't like spicy food at all\" use two structurally different sentences — Yo odio el picante vs. No me gusta nada el picante — even though they land close to the same meaning.",
      "examples": [
        {
          "target": "¿Qué te gusta comer?",
          "reading": "",
          "translation": "What do you like to eat?"
        },
        {
          "target": "No me gusta nada el picante.",
          "reading": "",
          "translation": "I don't like spicy food at all."
        },
        {
          "target": "Yo odio el picante.",
          "reading": "",
          "translation": "I hate spicy food. (odiar: person = subject, ordinary verb)"
        },
        {
          "target": "A Marisol nunca le gusta nada suave — ¡todo tiene que picar!",
          "reading": "",
          "translation": "Marisol never likes anything mild — everything has to be spicy!"
        }
      ],
      "mnemonics": [
        "gustar and odiar are grammatical opposites in structure, not just meaning: gustar puts the FOOD in the driver's seat (gusta/gustan) with the person along for the ride (me/te/le); odiar puts the PERSON in the driver's seat (odio/odias/odia) with the food as an ordinary object. Mixing up which verb is 'in charge' is the classic slip — check which pattern you're in before you conjugate."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué te ___ comer? (What do you like to eat?)",
          "options": [
            "gustas (29.1)",
            "gusta (29.2)",
            "gusto (29.3)",
            "gustan (29.4)"
          ],
          "answerIndex": 1,
          "explanation": "comer (the infinitive) acts as a singular concept, so gusta is correct."
        },
        {
          "prompt": "No me ___ nada el picante. (I don't like spicy food at all.)",
          "options": [
            "gusta",
            "gusto",
            "gustas",
            "gustan"
          ],
          "answerIndex": 0,
          "explanation": "el picante is singular, so gusta agrees with it; nada intensifies the negative."
        },
        {
          "prompt": "Yo ___ el picante. (I hate spicy food.)",
          "options": [
            "odio",
            "gusto",
            "me odia",
            "odia"
          ],
          "answerIndex": 0,
          "explanation": "odiar is an ordinary verb where yo is the subject: yo odio, conjugated like any -ar verb."
        },
        {
          "prompt": "What's the key grammatical difference between odiar and gustar?",
          "options": [
            "No difference — they conjugate identically",
            "gustar is more formal than odiar",
            "odiar puts the person as subject (ordinary verb); gustar puts the thing liked as subject, with the person as an indirect object",
            "odiar is only used for drinks"
          ],
          "answerIndex": 2,
          "explanation": "This is the structural trap explicitly taught in the lesson."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I hate spicy food.' using odiar",
          "options": [
            "Yo odio el picante. (29.1)",
            "Me odio el picante. (29.2)",
            "A mí me odia el picante. (29.3)",
            "Yo odia el picante. (29.4)"
          ],
          "answerIndex": 0,
          "explanation": "odiar conjugates for yo (odio) as an ordinary subject-verb-object sentence."
        },
        {
          "prompt": "Translate: 'I don't like spicy food at all.' using gustar",
          "options": [
            "No me gusta nada el picante.",
            "El picante no gusta nada.",
            "Yo no odio nada el picante.",
            "No me gustan nada el picante."
          ],
          "answerIndex": 0,
          "explanation": "gustar keeps its me + gusta(singular) pattern even in the negative, with nada added for emphasis."
        },
        {
          "prompt": "Why do 'Yo odio el picante' and 'No me gusta nada el picante' use completely different sentence structures despite similar meaning?",
          "options": [
            "They don't — they're built the same way",
            "odiar is an ordinary verb (person=subject); gustar always keeps the liked thing as the grammatical subject, even when negated",
            "gustar cannot be negated",
            "odiar can only be used in questions"
          ],
          "answerIndex": 1,
          "explanation": "This is the exact structural contrast explained in the lesson."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué te ___ comer?",
          "options": [
            "gusta",
            "gustan",
            "gusto",
            "gustas"
          ],
          "answerIndex": 0,
          "explanation": "gusta agrees with the infinitive comer.",
          "type": "multiple-choice"
        },
        {
          "prompt": "No me ___ nada el picante.",
          "options": [
            "gustas",
            "gustan",
            "gusto",
            "gusta"
          ],
          "answerIndex": 3,
          "explanation": "el picante is singular.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Yo ___ el picante. (I hate spicy food.)",
          "options": [
            "gusto",
            "odia",
            "odio",
            "me odia"
          ],
          "answerIndex": 2,
          "explanation": "odiar conjugates normally for yo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In 'A Marisol nunca le gusta nada suave,' what is the grammatical subject?",
          "options": [
            "Marisol",
            "nada suave (nothing mild)",
            "le",
            "nunca"
          ],
          "answerIndex": 1,
          "explanation": "gustar's grammar keeps the thing (or, here, the negated 'nothing mild') as the subject; Marisol is marked by le, the indirect object.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb conjugates like an ordinary -ar verb with the person as subject: odiar or gustar?",
          "options": [
            "odiar",
            "gustar",
            "Both work identically",
            "Neither conjugates normally"
          ],
          "answerIndex": 0,
          "explanation": "odiar is the ordinary-grammar verb; gustar is the flipped-grammar one.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Marisol never likes anything mild.'",
          "options": [
            "Marisol nunca odia nada suave.",
            "Marisol nunca gusta nada suave.",
            "A Marisol nunca le gustan nada suave.",
            "A Marisol nunca le gusta nada suave."
          ],
          "answerIndex": 3,
          "explanation": "le gusta (singular, agreeing with 'nada suave' as a singular negated concept) with the a-clarifier Marisol.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 4: Foundational & Structural Mastery (¿Qué te gusta comer?)"
  },
  "es-u6-l5": {
    "id": "es-u6-l5",
    "unit": "es-u6",
    "level": "A1",
    "objective": "Produce a connected restaurant-ordering paragraph combining food vocabulary, gustar/encantar, querer/poder, and the gustar-vs-odiar contrast.",
    "prerequisites": [
      "es-u6-l1",
      "es-u6-l2",
      "es-u6-l3",
      "es-u6-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u6-l1",
        "es-u6-l2",
        "es-u6-l3",
        "es-u6-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone weaves together every piece of Unit 6 — gustar's flipped grammar (Lesson 1), encantar plus the a-clarifier (Lesson 2), querer/poder for ordering (Lesson 3), and the gustar-vs-odiar structural contrast (Lesson 4) — around Marisol, whose one rule at any restaurant is that everything needs more chile. A mí me gustan las enchiladas, pero a Marisol le encanta el picante — ¡todo tiene que picar! Ella no odia la comida suave, pero no le gusta nada tampoco. Quiero pedir el mole, y Marisol quisiera el picante extra, por favor. ¿Nos puede traer también agua, por favor?",
      "examples": [
        {
          "target": "A mí me gustan las enchiladas, pero a Marisol le encanta el picante.",
          "reading": "",
          "translation": "I like enchiladas, but Marisol loves spicy food."
        },
        {
          "target": "Ella no odia la comida suave, pero no le gusta nada tampoco.",
          "reading": "",
          "translation": "She doesn't hate mild food, but she doesn't like it at all either."
        },
        {
          "target": "Quiero pedir el mole, y Marisol quisiera el picante extra, por favor.",
          "reading": "",
          "translation": "I want to order the mole, and Marisol would like the extra spicy, please."
        },
        {
          "target": "¿Nos puede traer también agua, por favor?",
          "reading": "",
          "translation": "Could you also bring us water, please?"
        }
      ],
      "mnemonics": [
        "Run the Unit 6 checklist on any food sentence: is it a gustar-type verb (thing=subject) or an ordinary verb like odiar (person=subject)? Does the thing liked need singular or plural agreement? Is a clarifier (a + person) needed for who's being talked about? Stack those three answers and the sentence builds itself."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "A mí me ___ las enchiladas. (I like enchiladas.)",
          "options": [
            "gusta (30.1)",
            "gustan (30.2)",
            "gusto (30.3)",
            "gustas (30.4)"
          ],
          "answerIndex": 1,
          "explanation": "las enchiladas is plural, so gustan agrees with it."
        },
        {
          "prompt": "a Marisol le ___ el picante. (Marisol loves spicy food.)",
          "options": [
            "encanta",
            "encantan",
            "encantas",
            "encanto"
          ],
          "answerIndex": 0,
          "explanation": "el picante is singular, so encanta is correct."
        },
        {
          "prompt": "Ella no ___ la comida suave, pero no le gusta nada tampoco. (She doesn't hate mild food...)",
          "options": [
            "odia",
            "odio",
            "gusta",
            "le odia"
          ],
          "answerIndex": 0,
          "explanation": "odiar conjugates normally for ella: odia."
        },
        {
          "prompt": "What four Unit 6 elements does this capstone combine?",
          "options": [
            "gustar's flipped grammar, encantar with the a-clarifier, querer/poder for ordering, and the gustar-vs-odiar contrast",
            "Only querer and poder",
            "Only food vocabulary",
            "Only the check-requesting phrase"
          ],
          "answerIndex": 0,
          "explanation": "This is the explicit combination the capstone paragraph is built around."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I want to order the mole, and Marisol would like the extra spicy, please.'",
          "options": [
            "Quiero pedir el mole, y Marisol quiere el picante extra, por favor. (30.1)",
            "Quiero pedir el mole, y Marisol quisiera el picante extra, por favor. (30.2)",
            "Quiero pide el mole, y Marisol quisiera el picante extra, por favor. (30.3)",
            "Quisiera pedir el mole, y Marisol quiero el picante extra, por favor. (30.4)"
          ],
          "answerIndex": 1,
          "explanation": "Quiero (direct, narrator) contrasted with Marisol's quisiera (softer, formal) — matching each speaker's register from Lesson 3."
        },
        {
          "prompt": "Why does the paragraph use quiero for the narrator but quisiera for Marisol's request?",
          "options": [
            "Because Marisol is a formal-you (usted)",
            "Random variation with no meaning",
            "quisiera is a typo for quiere",
            "To show the formality contrast from Lesson 3 — quiero is direct/everyday, quisiera is a softer register for the same action"
          ],
          "answerIndex": 3,
          "explanation": "This reuses the querer/quisiera register distinction taught explicitly in Lesson 3."
        },
        {
          "prompt": "What is the overall skill this capstone paragraph tests?",
          "options": [
            "Isolated vocabulary recall only",
            "Only conjugating odiar",
            "Only asking for the check",
            "Producing a connected, multi-sentence restaurant scene combining gustar-family verbs, querer/poder, and the gustar-vs-odiar grammar contrast"
          ],
          "answerIndex": 3,
          "explanation": "This is the explicit goal stated in the lesson explanation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "A mí me ___ las enchiladas.",
          "options": [
            "gustas",
            "gusta",
            "gusto",
            "gustan"
          ],
          "answerIndex": 3,
          "explanation": "gustan agrees with plural enchiladas.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A Marisol le ___ el picante.",
          "options": [
            "encantan",
            "encantas",
            "encanta",
            "encanto"
          ],
          "answerIndex": 2,
          "explanation": "encanta agrees with singular el picante.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella no ___ la comida suave. (She doesn't hate mild food.)",
          "options": [
            "odio",
            "odia",
            "le odia",
            "gusta"
          ],
          "answerIndex": 1,
          "explanation": "odiar conjugates normally, person as subject.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Quiero pedir el mole, y Marisol ___ el picante extra, por favor. (softer register)",
          "options": [
            "quisiera",
            "quiere",
            "puede",
            "quiero"
          ],
          "answerIndex": 0,
          "explanation": "quisiera is the softer, more formal 'would like,' matching Marisol's polite request.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Nos ___ traer también agua, por favor? (Could you bring us water too?)",
          "options": [
            "puedo",
            "quiero",
            "quisiera",
            "puede"
          ],
          "answerIndex": 3,
          "explanation": "puede (formal you, can) is used when asking a server for something.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the overall skill this capstone paragraph tests?",
          "options": [
            "Only greeting a server",
            "Only conjugating -ar verbs",
            "Producing a connected, multi-sentence restaurant scene combining gustar-family verbs, querer/poder, and the gustar-vs-odiar contrast",
            "Isolated vocabulary recall only"
          ],
          "answerIndex": 2,
          "explanation": "This is the explicit goal stated in the lesson explanation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 5: Foundational & Structural Mastery (A mí me gustan las enchiladas,)"
  },
  "es-u7-l1": {
    "id": "es-u7-l1",
    "unit": "es-u7",
    "level": "A2",
    "objective": "Conjugate regular -AR verbs in the preterite (é, aste, ó, amos, aron) to narrate completed past actions, and recognize the accent mark as a meaning-carrying signal.",
    "prerequisites": [
      "es-u6-l1",
      "es-u6-l2",
      "es-u6-l3",
      "es-u6-l4",
      "es-u6-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u6-l3",
        "es-u6-l4",
        "es-u6-l5"
      ]
    },
    "presentation": {
      "explanation": "The preterite is Spanish's tense for a completed, one-time past action — something that happened and finished, not an ongoing state. For regular -AR verbs, replace the -ar with: yo -é, tú -aste, él/ella/usted -ó, nosotros -amos, ellos/ustedes -aron. The single most dangerous trap here is the accent mark: tomo (I drink, present) and tomó (he/she drank, preterite) are spelled almost identically, but the accent completely changes both the tense AND the subject. Drop the accent by habit and you've silently rewritten your own sentence. One more wrinkle: the nosotros form is a chameleon — compramos means both \"we buy\" (present) and \"we bought\" (preterite), identical spelling, no accent to save you. Context (words like ayer, la semana pasada) is the only way to tell them apart. Today's story: Marisol, never one to back down from spicy food, took on the market's hottest chile.",
      "examples": [
        {
          "target": "Marisol probó el chile más picante del mercado.",
          "reading": "",
          "translation": "Marisol tried the spiciest chile in the market."
        },
        {
          "target": "Yo hablé con ella después.",
          "reading": "",
          "translation": "I talked to her afterward. (accented é marks preterite, 'yo')"
        },
        {
          "target": "Nosotros compramos algo de comer.",
          "reading": "",
          "translation": "We bought something to eat. (identical spelling to 'we buy' — only context tells you it's past)"
        },
        {
          "target": "Ellos gritaron cuando probaron la salsa.",
          "reading": "",
          "translation": "They screamed when they tried the sauce."
        }
      ],
      "mnemonics": [
        "Accent marks talk: tomo (I drink, present) vs. tomó (he/she drank, preterite) are one accent apart and mean completely different things. Read every accented ending like it's shouting the subject and tense at you.",
        "The nosotros -AR preterite form is a shape-shifter — compramos is both 'we buy' and 'we bought,' spelled and stressed identically. You survive this one purely on context clues like ayer (yesterday)."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Marisol ___ el chile más picante. (tried, probar)",
          "options": [
            "probo (31.1)",
            "probaste (31.2)",
            "prueba (31.3)",
            "probó (31.4)"
          ],
          "answerIndex": 3,
          "explanation": "él/ella preterite ending for -AR verbs is -ó (accented)."
        },
        {
          "prompt": "Yo ___ con ella después. (talked, hablar)",
          "options": [
            "hablaste",
            "habla",
            "hablé",
            "hablo"
          ],
          "answerIndex": 2,
          "explanation": "yo preterite ending for -AR verbs is -é (accented) — without the accent, hablo means 'I speak' (present)."
        },
        {
          "prompt": "Ellos ___ cuando probaron la salsa. (screamed, gritar)",
          "options": [
            "gritamos",
            "gritó",
            "gritaron",
            "gritan"
          ],
          "answerIndex": 2,
          "explanation": "ellos preterite ending for -AR verbs is -aron."
        },
        {
          "prompt": "Why is the accent mark on hablé so important?",
          "options": [
            "It changes the verb to a question",
            "It's purely decorative and can be dropped",
            "It marks a different subject entirely",
            "Without it, hablo means 'I speak' (present) — the accent is what signals preterite 'I spoke'"
          ],
          "answerIndex": 3,
          "explanation": "This is the exact trap the explanation warns about — the accent carries real grammatical meaning."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'We bought something to eat.'",
          "options": [
            "Nosotros compró algo de comer. (31.1)",
            "Nosotros compraron algo de comer. (31.2)",
            "Nosotros compra algo de comer. (31.3)",
            "Nosotros compramos algo de comer. (31.4)"
          ],
          "answerIndex": 3,
          "explanation": "nosotros -AR preterite is identical in spelling to the present tense form."
        },
        {
          "prompt": "How can you tell 'compramos' means 'we bought' (past) rather than 'we buy' (present) in a sentence with no other clues?",
          "options": [
            "You often can't from the verb alone — context words like ayer (yesterday) resolve the ambiguity",
            "The verb changes its accent for the past",
            "It's impossible to say 'we buy' in Spanish",
            "You can always tell from the spelling alone"
          ],
          "answerIndex": 0,
          "explanation": "The nosotros -AR preterite form is genuinely identical to the present; context does the disambiguating work."
        },
        {
          "prompt": "Translate: 'They screamed when they tried the sauce.'",
          "options": [
            "Ellos gritaron cuando prueban la salsa.",
            "Ellos gritan cuando prueban la salsa.",
            "Ellos gritaron cuando probaron la salsa.",
            "Ellos gritó cuando probó la salsa."
          ],
          "answerIndex": 2,
          "explanation": "Both verbs need the ellos preterite ending -aron for a consistent past narration."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Marisol ___ el chile más picante.",
          "options": [
            "probo",
            "probaste",
            "probó",
            "prueba"
          ],
          "answerIndex": 2,
          "explanation": "-ó ending for él/ella preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Yo ___ con ella después.",
          "options": [
            "hablo",
            "hablé",
            "hablaste",
            "habla"
          ],
          "answerIndex": 1,
          "explanation": "-é ending for yo preterite, accented.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ellos ___ cuando probaron la salsa.",
          "options": [
            "gritaron",
            "gritó",
            "gritamos",
            "gritan"
          ],
          "answerIndex": 0,
          "explanation": "-aron ending for ellos preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nosotros ___ algo de comer ayer. (bought)",
          "options": [
            "compra",
            "compraron",
            "compró",
            "compramos"
          ],
          "answerIndex": 3,
          "explanation": "nosotros -AR preterite form, identical spelling to present, disambiguated here by 'ayer.'",
          "type": "multiple-choice"
        },
        {
          "prompt": "What's the danger of dropping the accent mark on a preterite yo-form verb like hablé?",
          "options": [
            "It becomes a command form",
            "Nothing changes, accents are optional",
            "It becomes hablo, which means 'I speak' in the present — a completely different tense",
            "It becomes plural"
          ],
          "answerIndex": 2,
          "explanation": "The accent is the sole distinguishing mark between present 'hablo' and preterite 'hablé.'",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which subject pronoun's -AR preterite form is spelled identically to its present-tense form?",
          "options": [
            "él/ella",
            "nosotros",
            "tú",
            "yo"
          ],
          "answerIndex": 1,
          "explanation": "Only nosotros -AR verbs share an identical form between present and preterite.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Foundational & Structural Mastery (Marisol probó el chile más pic)"
  },
  "es-u7-l2": {
    "id": "es-u7-l2",
    "unit": "es-u7",
    "level": "A2",
    "objective": "Conjugate regular -ER and -IR verbs in the preterite using their single shared ending set (í, iste, ió, imos, ieron).",
    "prerequisites": [
      "es-u7-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u7-l1"
      ]
    },
    "presentation": {
      "explanation": "Here's the good news buried in the preterite: -ER and -IR verbs share the exact same set of endings, so once you learn one, you've learned both. Replace the -er/-ir with: yo -í, tú -iste, él/ella/usted -ió, nosotros -imos, ellos/ustedes -ieron. Notice the accent marks live in the same two spots as -AR verbs did (yo and él/ella), still doing the same job of separating tenses — comí (I ate) vs. como (I eat). Marisol, naturally, turned a spicy-food challenge into a full event.",
      "examples": [
        {
          "target": "Marisol comió diez tacos al pastor en el reto.",
          "reading": "",
          "translation": "Marisol ate ten al pastor tacos in the challenge."
        },
        {
          "target": "Yo bebí mucha agua para el fuego en la boca.",
          "reading": "",
          "translation": "I drank a lot of water for the fire in my mouth."
        },
        {
          "target": "Ella no salió de casa sin su botella de salsa.",
          "reading": "",
          "translation": "She didn't leave home without her hot sauce bottle."
        },
        {
          "target": "Nosotros vivimos una experiencia inolvidable.",
          "reading": "",
          "translation": "We had (lived through) an unforgettable experience."
        }
      ],
      "mnemonics": [
        "-ER and -IR verbs are twins in the preterite — their conjugation families that felt so different in the present (como vs. vivo) become identical in the past: comí/viví, comiste/viviste, comió/vivió, comimos/vivimos, comieron/vivieron. Learn one ending set, get both verb families for free."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Marisol ___ diez tacos. (ate, comer)",
          "options": [
            "comió (32.1)",
            "comiste (32.2)",
            "come (32.3)",
            "comí (32.4)"
          ],
          "answerIndex": 0,
          "explanation": "él/ella preterite ending for -ER verbs is -ió."
        },
        {
          "prompt": "Yo ___ mucha agua. (drank, beber)",
          "options": [
            "bebí",
            "bebo",
            "bebiste",
            "bebió"
          ],
          "answerIndex": 0,
          "explanation": "yo preterite ending for -ER verbs is -í (accented)."
        },
        {
          "prompt": "Ella no ___ de casa. (left, salir)",
          "options": [
            "salió",
            "sale",
            "salimos",
            "salí"
          ],
          "answerIndex": 0,
          "explanation": "salir is a regular -IR verb here: él/ella ending is -ió."
        },
        {
          "prompt": "What's true about -ER and -IR preterite endings compared to each other?",
          "options": [
            "They're completely different from one another",
            "They're identical — one ending set covers both verb families",
            "-IR verbs never use accents in the preterite",
            "Only -ER verbs have a preterite"
          ],
          "answerIndex": 1,
          "explanation": "This is the central shortcut of the lesson — one ending set for both families."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'We had an unforgettable experience.'",
          "options": [
            "Nosotros vivió una experiencia inolvidable. (32.1)",
            "Nosotros vivieron una experiencia inolvidable. (32.2)",
            "Nosotros vivimos una experiencia inolvidable. (32.3)",
            "Nosotros vive una experiencia inolvidable. (32.4)"
          ],
          "answerIndex": 2,
          "explanation": "nosotros preterite ending for -IR verbs is -imos."
        },
        {
          "prompt": "Why do comí (I ate) and viví (I lived) end the same way, even though comer and vivir belong to different conjugation families in the present tense?",
          "options": [
            "-ER and -IR verbs share one identical set of preterite endings",
            "comer is secretly an -IR verb",
            "Only irregular verbs can end in í",
            "It's a coincidence with no rule behind it"
          ],
          "answerIndex": 0,
          "explanation": "This is the shared-ending rule this lesson teaches."
        },
        {
          "prompt": "Translate: 'She didn't leave home without her hot sauce bottle.'",
          "options": [
            "Ella no sale de casa sin su botella de salsa.",
            "Ella no salí de casa sin su botella de salsa.",
            "Ella no salieron de casa sin su botella de salsa.",
            "Ella no salió de casa sin su botella de salsa."
          ],
          "answerIndex": 3,
          "explanation": "salió is the correct él/ella preterite form of salir."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Marisol ___ diez tacos.",
          "options": [
            "comí",
            "comió",
            "comiste",
            "come"
          ],
          "answerIndex": 1,
          "explanation": "-ió ending for él/ella preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Yo ___ mucha agua.",
          "options": [
            "bebí",
            "bebió",
            "bebiste",
            "bebo"
          ],
          "answerIndex": 0,
          "explanation": "-í ending for yo preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella no ___ de casa.",
          "options": [
            "salí",
            "sale",
            "salimos",
            "salió"
          ],
          "answerIndex": 3,
          "explanation": "-ió ending for él/ella preterite of salir.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nosotros ___ una experiencia inolvidable.",
          "options": [
            "vive",
            "vivieron",
            "vivimos",
            "vivió"
          ],
          "answerIndex": 2,
          "explanation": "-imos ending for nosotros preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which ending set do -ER and -IR verbs use in the preterite?",
          "options": [
            "Two completely different sets",
            "The same shared set: í, iste, ió, imos, ieron",
            "There is no preterite for -IR verbs",
            "-ER verbs use -AR endings instead"
          ],
          "answerIndex": 1,
          "explanation": "This shared-ending fact is the core lesson takeaway.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ellos ___ mucho durante el reto. (they suffered, sufrir)",
          "options": [
            "sufrieron",
            "sufrimos",
            "sufren",
            "sufrió"
          ],
          "answerIndex": 0,
          "explanation": "ellos preterite ending for -IR verbs is -ieron.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: Foundational & Structural Mastery (Marisol comió diez tacos al pa)"
  },
  "es-u7-l3": {
    "id": "es-u7-l3",
    "unit": "es-u7",
    "level": "A2",
    "objective": "Conjugate the key irregular preterite verbs ir/ser (identical forms), hacer, tener, and estar, none of which use accent marks.",
    "prerequisites": [
      "es-u7-l1",
      "es-u7-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u7-l1",
        "es-u7-l2"
      ]
    },
    "presentation": {
      "explanation": "A handful of very common verbs throw out the regular endings entirely — and the strangest of them is that ir (to go) and ser (to be) share the EXACT same preterite forms: fui, fuiste, fue, fuimos, fueron. That's not a typo or a coincidence to memorize away — Spanish genuinely lets context be the only thing separating 'I went' from 'I was.' hacer (to do/make) conjugates hice, hiciste, hizo, hicimos, hicieron — notice hizo swaps c for z, a spelling fix to keep the /s/ sound before o, not a random irregularity. tener (to have) becomes tuve, tuviste, tuvo, tuvimos, tuvieron, and estar (to be, temporary/location) becomes estuve, estuviste, estuvo, estuvimos, estuvieron — both borrow the same u-inserted pattern. None of these irregular preterite forms carry accent marks, unlike the regular verbs from Lessons 1–2 — that's actually a handy tell that you're looking at an irregular.",
      "examples": [
        {
          "target": "Marisol fue al festival de comida picante.",
          "reading": "",
          "translation": "Marisol went to the spicy food festival. (ir)"
        },
        {
          "target": "Fue una locura.",
          "reading": "",
          "translation": "It was crazy. (ser — identical form to 'fue' meaning 'went' above)"
        },
        {
          "target": "Marisol hizo una salsa nueva con diez chiles.",
          "reading": "",
          "translation": "Marisol made a new sauce with ten chiles."
        },
        {
          "target": "Ella tuvo que beber mucha agua, y todos estuvieron en el festival hasta tarde.",
          "reading": "",
          "translation": "She had to drink a lot of water, and everyone was at the festival until late."
        }
      ],
      "mnemonics": [
        "fui/fue isn't a coincidence you memorize around — ir and ser genuinely share one identical preterite conjugation. When you see fue, ask 'went, or was?' and let context answer.",
        "hizo swaps c for z for one boring reason: Spanish spelling keeps the /s/ sound before o, and 'hico' would look like it should say a hard /k/. It's phonetic housekeeping, not chaos.",
        "tuve and estuve are cousins — both insert a u into the stem and share the same irregular ending pattern (e, iste, o, imos, ieron, no accents). Learn tuve, and estuve is 90% free."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Marisol ___ al festival. (went, ir)",
          "options": [
            "fui (33.1)",
            "va (33.2)",
            "iba (33.3)",
            "fue (33.4)"
          ],
          "answerIndex": 3,
          "explanation": "él/ella preterite of ir is fue — identical in spelling to ser's fue."
        },
        {
          "prompt": "___ una locura. (It was crazy, ser)",
          "options": [
            "Es",
            "Fui",
            "Era",
            "Fue"
          ],
          "answerIndex": 3,
          "explanation": "él/ella preterite of ser is also fue — same form as ir's fue."
        },
        {
          "prompt": "Marisol ___ una salsa nueva. (made, hacer)",
          "options": [
            "hace",
            "hico",
            "hació",
            "hizo"
          ],
          "answerIndex": 3,
          "explanation": "hacer's él/ella preterite is hizo, with c→z spelling change."
        },
        {
          "prompt": "Ella ___ que beber mucha agua. (had to, tener)",
          "options": [
            "tiene",
            "tuve",
            "tenió",
            "tuvo"
          ],
          "answerIndex": 3,
          "explanation": "tener's él/ella preterite is tuvo, no accent mark."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How do you tell whether 'fue' means 'went' or 'was' in a given sentence?",
          "options": [
            "You never can — the sentence is always ambiguous (33.1)",
            "Context — ir and ser share the exact same preterite form fue, so meaning comes entirely from what surrounds it (33.2)",
            "fue always means 'went' (33.3)",
            "A written accent distinguishes them (33.4)"
          ],
          "answerIndex": 1,
          "explanation": "This is the genuinely surprising fact explained in this lesson — ir and ser truly overlap in the preterite."
        },
        {
          "prompt": "Why does hacer's preterite become hizo instead of the expected 'hico'?",
          "options": [
            "It's a totally random exception",
            "Spanish spelling swaps c for z before o to preserve the /s/ sound",
            "hacer isn't actually irregular",
            "hizo is a typo that became standard"
          ],
          "answerIndex": 1,
          "explanation": "The c→z swap is a spelling-preservation rule, not an arbitrary irregularity."
        },
        {
          "prompt": "Translate: 'Everyone was at the festival until late.'",
          "options": [
            "Todos estuvieron en el festival hasta tarde.",
            "Todos estaron en el festival hasta tarde.",
            "Todos fueron en el festival hasta tarde.",
            "Todos estuvo en el festival hasta tarde."
          ],
          "answerIndex": 0,
          "explanation": "estar's ellos preterite is estuvieron, following the tuve/estuve irregular pattern."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Marisol ___ al festival.",
          "options": [
            "fue",
            "iba",
            "fui",
            "va"
          ],
          "answerIndex": 0,
          "explanation": "ir's él/ella preterite is fue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ una locura.",
          "options": [
            "Fui",
            "Era",
            "Es",
            "Fue"
          ],
          "answerIndex": 3,
          "explanation": "ser's él/ella preterite is also fue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Marisol ___ una salsa nueva.",
          "options": [
            "hace",
            "hació",
            "hizo",
            "hico"
          ],
          "answerIndex": 2,
          "explanation": "hacer's él/ella preterite is hizo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ella ___ que beber mucha agua.",
          "options": [
            "tiene",
            "tuvo",
            "tenió",
            "tuve"
          ],
          "answerIndex": 1,
          "explanation": "tener's él/ella preterite is tuvo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Todos ___ en el festival hasta tarde. (were, estar)",
          "options": [
            "estuvieron",
            "estaron",
            "estuvo",
            "fueron"
          ],
          "answerIndex": 0,
          "explanation": "estar's ellos preterite is estuvieron.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What do all these irregular preterite forms (fue, hizo, tuvo, estuvo) have in common that regular preterite forms don't?",
          "options": [
            "They all end in -ar",
            "They're all reflexive",
            "They only exist in the plural",
            "None of them carry an accent mark"
          ],
          "answerIndex": 3,
          "explanation": "Unlike regular -AR/-ER/-IR preterite forms, these irregular stems take unaccented endings.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Foundational & Structural Mastery (Marisol fue al festival de com)"
  },
  "es-u7-l4": {
    "id": "es-u7-l4",
    "unit": "es-u7",
    "level": "A2",
    "objective": "Apply the -car→qué, -gar→gué, -zar→cé spelling changes that regular -AR verbs need in the yo preterite form only, to protect their original consonant sound.",
    "prerequisites": [
      "es-u7-l1",
      "es-u7-l2",
      "es-u7-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u7-l1",
        "es-u7-l3"
      ]
    },
    "presentation": {
      "explanation": "Three small verb families need a spelling patch — but ONLY in the yo form, and only because Spanish spelling protects how a consonant sounds. Verbs ending in -car (buscar, tocar) would become 'busqé' with a soft /s/-ish c before e, so the c becomes qu: busqué. Verbs ending in -gar (llegar, jugar, pagar) would get a soft g before e, so it becomes gu: llegué. Verbs ending in -zar (empezar, comenzar) simply never use z before e in standard Spanish spelling, so z becomes c: empecé. Every other person (tú, él/ella, nosotros, ellos) conjugates completely normally with no spelling change at all — this quirk lives in the yo form alone. Marisol tells the story herself this time.",
      "examples": [
        {
          "target": "Yo busqué la receta secreta de mi abuela.",
          "reading": "",
          "translation": "I looked for my grandmother's secret recipe. (buscar → busqué)"
        },
        {
          "target": "Empecé a cocinar temprano.",
          "reading": "",
          "translation": "I started cooking early. (empezar → empecé)"
        },
        {
          "target": "Jugué con las cantidades de chile — quizás demasiado.",
          "reading": "",
          "translation": "I played around with the chile amounts — maybe too much. (jugar → jugué)"
        },
        {
          "target": "Llegué tarde a la fiesta porque la salsa explotó.",
          "reading": "",
          "translation": "I arrived late to the party because the sauce exploded. (llegar → llegué)"
        }
      ],
      "mnemonics": [
        "car/gar/zar → qué/gué/cé, yo-only: think of it as the verb protecting its own sound before e. buscar's c would go soft before e, so it hides behind a u: busqué. llegar's g would go soft too, same trick: llegué. empezar's z just isn't allowed before e in Spanish spelling at all, so it swaps to c: empecé.",
        "This spelling patch is a one-person quirk — only yo changes. Tú, él/ella, nosotros, and ellos all conjugate these same verbs completely regularly (buscaste, buscó, buscamos, buscaron)."
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Yo ___ la receta secreta. (looked for, buscar)",
          "options": [
            "busco (34.1)",
            "busqué (34.2)",
            "buscó (34.3)",
            "buscé (34.4)"
          ],
          "answerIndex": 1,
          "explanation": "buscar's yo preterite needs c→qu before the -é ending: busqué."
        },
        {
          "prompt": "___ a cocinar temprano. (I started, empezar)",
          "options": [
            "Empecé",
            "Empiezo",
            "Empezó",
            "Empezé"
          ],
          "answerIndex": 0,
          "explanation": "empezar's yo preterite needs z→c before the -é ending: empecé."
        },
        {
          "prompt": "___ tarde a la fiesta. (I arrived, llegar)",
          "options": [
            "Llegué",
            "Llego",
            "Llegó",
            "Legué"
          ],
          "answerIndex": 0,
          "explanation": "llegar's yo preterite needs g→gu before the -é ending: llegué."
        },
        {
          "prompt": "Which person does the -car/-gar/-zar spelling change apply to?",
          "options": [
            "Every person equally",
            "Only the negative forms",
            "Only yo — every other person conjugates completely regularly",
            "Only nosotros"
          ],
          "answerIndex": 2,
          "explanation": "This spelling patch exists solely to protect the yo-form's pronunciation before -é."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why does buscar become busqué instead of the expected 'busqé' or 'buscé' in the yo preterite?",
          "options": [
            "It's a completely random exception with no logic (34.1)",
            "busqué is a typo that became standard (34.2)",
            "Spanish spelling needs qu (not c) before e to keep the hard /k/ sound, so c→qu (34.3)",
            "buscar isn't actually a regular verb (34.4)"
          ],
          "answerIndex": 2,
          "explanation": "This is the phonetic-protection logic explained in the lesson."
        },
        {
          "prompt": "Translate: 'I played around with the chile amounts — maybe too much.'",
          "options": [
            "Jugué con las cantidades de chile — quizás demasiado.",
            "Jugó con las cantidades de chile — quizás demasiado.",
            "Jugé con las cantidades de chile — quizás demasiado.",
            "Juego con las cantidades de chile — quizás demasiado."
          ],
          "answerIndex": 0,
          "explanation": "jugar's yo preterite needs g→gu before -é: jugué."
        },
        {
          "prompt": "If a friend conjugates 'tú buscaste' (you looked for), does the -car spelling change apply to that form too?",
          "options": [
            "Yes, it becomes 'busqaste'",
            "No — the c→qu spelling change only affects the yo form; every other person is fully regular",
            "Yes, but only in writing",
            "Only if the sentence is a question"
          ],
          "answerIndex": 1,
          "explanation": "The spelling change is yo-exclusive; tú, él/ella, nosotros, and ellos forms need no adjustment."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yo ___ la receta secreta.",
          "options": [
            "busco",
            "buscé",
            "buscó",
            "busqué"
          ],
          "answerIndex": 3,
          "explanation": "buscar → busqué in the yo preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ a cocinar temprano.",
          "options": [
            "Empiezo",
            "Empezé",
            "Empecé",
            "Empezó"
          ],
          "answerIndex": 2,
          "explanation": "empezar → empecé in the yo preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ tarde a la fiesta.",
          "options": [
            "Legué",
            "Llegué",
            "Llego",
            "Llegó"
          ],
          "answerIndex": 1,
          "explanation": "llegar → llegué in the yo preterite.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What do -car, -gar, and -zar verbs have in common in the yo preterite?",
          "options": [
            "They all need a yo-only spelling change to protect the consonant's sound before e",
            "They all become irregular in every person",
            "They all skip the preterite entirely",
            "They all add an accent to every person"
          ],
          "answerIndex": 0,
          "explanation": "This is the shared rule across all three verb families.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tú ___ la receta también. (you looked for, buscar — regular conjugation, no yo-only rule applies)",
          "options": [
            "busqué",
            "busqueste",
            "buscó",
            "buscaste"
          ],
          "answerIndex": 3,
          "explanation": "tú preterite of buscar is fully regular: buscaste, no spelling change needed.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ con las cantidades de chile. (I played, jugar)",
          "options": [
            "Jugé",
            "Juego",
            "Jugué",
            "Jugó"
          ],
          "answerIndex": 2,
          "explanation": "jugar → jugué in the yo preterite.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Foundational & Structural Mastery (Yo busqué la receta secreta de)"
  },
  "es-u7-l5": {
    "id": "es-u7-l5",
    "unit": "es-u7",
    "level": "A2",
    "objective": "Produce a connected first-person past narration combining regular -AR/-ER/-IR preterite, irregular verbs (ir/ser, hacer), and -car/-zar spelling changes.",
    "prerequisites": [
      "es-u7-l1",
      "es-u7-l2",
      "es-u7-l3",
      "es-u7-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "es-u7-l1",
        "es-u7-l2",
        "es-u7-l3",
        "es-u7-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone gives Marisol the mic, letting her narrate her own chile-cooking disaster in first person, combining every Unit 7 tool: regular -AR preterite (Lesson 1), regular -ER preterite (Lesson 2), the irregular fue/hizo pair (Lesson 3), and the yo-only spelling changes busqué/empecé (Lesson 4). Full story: Ayer fue un día loco. Busqué la receta secreta de mi abuela y empecé a cocinar temprano. Hice una salsa con diez tipos de chile. Mis amigos llegaron a las seis y probaron la salsa. Todos gritaron — ¡fue demasiado picante, incluso para mí! Bebimos mucha agua toda la noche.",
      "examples": [
        {
          "target": "Ayer fue un día loco. Busqué la receta secreta de mi abuela y empecé a cocinar temprano.",
          "reading": "",
          "translation": "Yesterday was a crazy day. I looked for my grandmother's secret recipe and started cooking early."
        },
        {
          "target": "Hice una salsa con diez tipos de chile.",
          "reading": "",
          "translation": "I made a sauce with ten types of chile."
        },
        {
          "target": "Mis amigos llegaron a las seis y probaron la salsa.",
          "reading": "",
          "translation": "My friends arrived at six and tried the sauce."
        },
        {
          "target": "Todos gritaron — ¡fue demasiado picante, incluso para mí! Bebimos mucha agua toda la noche.",
          "reading": "",
          "translation": "Everyone screamed — it was too spicy, even for me! We drank a lot of water all night."
        }
      ],
      "mnemonics": [
        "One paragraph, four Unit 7 tools: regular -AR (busqué needs its spelling patch, llegaron/probaron/gritaron are plain), regular -ER (bebimos), and the irregulars fue and hice standing out precisely because they carry no accent."
      ],
      "culturalNotes": [
        "Cooking-disaster-that-becomes-a-good-story is a very common shape for casual anecdotes in Spanish-speaking households — the humor usually comes from someone (often the cook) suffering the consequences of their own ambition, exactly like Marisol here."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ayer ___ un día loco. (was, ser)",
          "options": [
            "fue (35.1)",
            "fui (35.2)",
            "es (35.3)",
            "era (35.4)"
          ],
          "answerIndex": 0,
          "explanation": "ser's preterite for 'it' (día) is fue, from Lesson 3."
        },
        {
          "prompt": "Yo ___ la receta secreta. (looked for, buscar)",
          "options": [
            "busqué",
            "busco",
            "buscó",
            "buscé"
          ],
          "answerIndex": 0,
          "explanation": "buscar's yo preterite needs the c→qu spelling change, from Lesson 4."
        },
        {
          "prompt": "Mis amigos ___ a las seis. (arrived, llegar)",
          "options": [
            "llegaron",
            "llegué",
            "llegó",
            "llegamos"
          ],
          "answerIndex": 0,
          "explanation": "ellos preterite of regular -AR llegar is llegaron, from Lesson 1 — no spelling change needed outside yo."
        },
        {
          "prompt": "What four Unit 7 elements does this capstone combine?",
          "options": [
            "Regular -AR preterite, regular -ER preterite, irregular fue/hizo, and yo-only spelling changes",
            "Only irregular verbs",
            "Only the present tense",
            "Only reflexive verbs"
          ],
          "answerIndex": 0,
          "explanation": "This is the explicit combination stated in the lesson explanation."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I made a sauce with ten types of chile.'",
          "options": [
            "Hizo una salsa con diez tipos de chile. (35.1)",
            "Hice una salsa con diez tipos de chile. (35.2)",
            "Hací una salsa con diez tipos de chile. (35.3)",
            "Hago una salsa con diez tipos de chile. (35.4)"
          ],
          "answerIndex": 1,
          "explanation": "hacer's yo preterite is hice (irregular, no accent), matching Marisol speaking about herself."
        },
        {
          "prompt": "Why does 'Todos gritaron' use -aron while 'Bebimos' uses -imos, even though both describe the same past event?",
          "options": [
            "They're actually interchangeable",
            "One of them is a mistake",
            "gritar and beber are the same verb",
            "gritaron is ellos preterite (-AR family), and bebimos is nosotros preterite (-ER family) — different subjects, different verbs"
          ],
          "answerIndex": 3,
          "explanation": "This checks that the reader tracks both subject and conjugation family correctly across the paragraph."
        },
        {
          "prompt": "What actually happened to Marisol's homemade sauce, according to the story?",
          "options": [
            "Nobody wanted to try it",
            "It wasn't spicy enough",
            "She never finished cooking it",
            "Her friends tried it and it turned out too spicy, even for Marisol"
          ],
          "answerIndex": 3,
          "explanation": "This is the specific comic outcome the capstone paragraph builds toward."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ayer ___ un día loco.",
          "options": [
            "es",
            "fui",
            "fue",
            "era"
          ],
          "answerIndex": 2,
          "explanation": "ser's preterite is fue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Yo ___ la receta secreta.",
          "options": [
            "busco",
            "busqué",
            "buscó",
            "buscé"
          ],
          "answerIndex": 1,
          "explanation": "buscar's yo preterite is busqué (c→qu).",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ una salsa con diez tipos de chile. (I made, hacer)",
          "options": [
            "Hice",
            "Hizo",
            "Hago",
            "Hací"
          ],
          "answerIndex": 0,
          "explanation": "hacer's yo preterite is hice.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mis amigos ___ a las seis.",
          "options": [
            "llegué",
            "llegó",
            "llegamos",
            "llegaron"
          ],
          "answerIndex": 3,
          "explanation": "ellos preterite of llegar is llegaron.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ mucha agua toda la noche. (We drank, beber)",
          "options": [
            "Bebió",
            "Bebí",
            "Bebimos",
            "Beben"
          ],
          "answerIndex": 2,
          "explanation": "nosotros preterite of beber is bebimos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the overall skill this capstone paragraph is testing?",
          "options": [
            "Only present-tense conjugation",
            "Producing a connected first-person past narration combining regular preterite conjugations, irregular verbs, and spelling changes",
            "Only greetings",
            "Isolated vocabulary recall only"
          ],
          "answerIndex": 1,
          "explanation": "This is the explicit goal stated in the lesson explanation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: Foundational & Structural Mastery (Ayer fue un día loco. Busqué l)"
  },
  "es-u8-l1": {
    "id": "es-u8-l1",
    "unit": "es-u8",
    "level": "A2",
    "objective": "Identify essential clothing, shoes, and accessories vocabulary and apply four-way gender and number agreement with color adjectives.",
    "presentation": {
      "explanation": "Welcome to A2 Spanish Unit 8: Shopping & Money! To shop for clothes, you need core garments and accurate adjective agreement:\n\n1. Essential Clothing & Accessories (La ropa y los accesorios):\n   - **la camisa** (shirt / button-down)\n   - **la camiseta** (T-shirt)\n   - **los pantalones** (pants / trousers)\n   - **los vaqueros / los jeans** (jeans)\n   - **el vestido** (dress)\n   - **la falda** (skirt)\n   - **la chaqueta** (jacket)\n   - **el abrigo** (coat)\n   - **el jersey / el suéter** (sweater)\n   - **los zapatos** (shoes)\n   - **las zapatillas** (sneakers / trainers)\n   - **el bolso** (handbag / purse)\n   - **las gafas (de sol)** (sunglasses)\n\n2. Color Adjectives & Gender/Number Agreement:\n   - Colors ending in **-o** have 4 forms (*rojo/roja/rojos/rojas*, *blanco/blanca/blancos/blancas*, *negro/negra/negros/negras*, *amarillo/amarilla/amarillos/amarillas*):\n     - *la camisa blanca* (the white shirt)\n     - *los zapatos negros* (the black shoes)\n   - Colors ending in a consonant or **-e** change ONLY for number, not gender (*azul/azules*, *verde/verdes*, *gris/grises*):\n     - *el vestido verde* / *la falda verde* -> *los vestidos verdes* / *las faldas verdes*\n     - *el pantalón azul* / *la chaqueta azul* -> *los pantalones azules*",
      "examples": [
        {
          "target": "Busco una camisa blanca y unos pantalones negros.",
          "reading": "Busco una camisa blanca y unos pantalones negros.",
          "translation": "I am looking for a white shirt and black pants."
        },
        {
          "target": "Esta chaqueta de cuero verde es muy elegante.",
          "reading": "Esta chaqueta de cuero verde es muy elegante.",
          "translation": "This green leather jacket is very elegant."
        },
        {
          "target": "¿Tiene estos zapatos en color marrón?",
          "reading": "¿Tiene estos zapatos en color marrón?",
          "translation": "Do you have these shoes in brown?"
        }
      ],
      "mnemonics": [
        "Noun first, Color second: 'camisa blanca' (NOT 'blanca camisa')!",
        "-o/-a colors have 4 forms (rojo, roja, rojos, rojas); -e/consonant colors have 2 (azul, azules)."
      ],
      "culturalNotes": [
        "Spain is globally renowned for fashion (home of Inditex / Zara, Mango, and high leather craftsmanship in Ubrique and Alicante)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'the blue shirts' in Spanish?",
          "options": [
            "las camisas azul (36.1)",
            "los camisas azules (36.2)",
            "las camisas azulos (36.3)",
            "las camisas azules (camisa is feminine plural -> las camisas; azul becomes azules) (36.4)"
          ],
          "answerIndex": 3,
          "explanation": "Las camisas (fem. pl.) + azules (plural)."
        },
        {
          "prompt": "What is the correct translation for 'sneakers / trainers' in Spain?",
          "options": [
            "los abrigos",
            "los vestidos",
            "las faldas",
            "las zapatillas"
          ],
          "answerIndex": 3,
          "explanation": "Las zapatillas = sneakers."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Mi hermano compró una chaqueta roja y unos vaqueros grises.'",
          "options": [
            "My brother is wearing a green coat and black pants. (36.1)",
            "My brother wants to sell his red jacket. (36.2)",
            "My brother bought white shoes. (36.3)",
            "My brother bought a red jacket and grey jeans. (36.4)"
          ],
          "answerIndex": 3,
          "explanation": "chaqueta roja = red jacket; vaqueros grises = grey jeans."
        },
        {
          "prompt": "Which color adjective DOES NOT change for feminine singular?",
          "options": [
            "rojo (la camisa roja)",
            "blanco (la camisa blanca)",
            "negro (la camisa negra)",
            "verde (la camisa verde, el pantalón verde)"
          ],
          "answerIndex": 3,
          "explanation": "Verde ends in -e, so it stays verde for both masculine and feminine."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the clothing items with their correct plural color agreement: vestido negro, falda azul, zapato rojo, bota verde:",
          "options": [
            "vestidos negro, faldas azul, zapatos rojo, botas verde",
            "vestidos negros, faldas azules, zapatos rojos, botas verdes",
            "All use -os",
            "vestidos negras, faldas azuladas, zapatos rojas, botas verdas"
          ],
          "answerIndex": 1,
          "explanation": "Proper gender and number agreement across all 4 items.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: '¿Dónde están las gafas de sol y el bolso de cuero?'",
          "options": [
            "Where are the sunglasses and the leather handbag?",
            "I lost my glasses and my shoes.",
            "The sunglasses are on the table.",
            "How much do the sunglasses cost?"
          ],
          "answerIndex": 0,
          "explanation": "gafas de sol = sunglasses; bolso de cuero = leather handbag.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'unos pantalones blancos' correct while 'unos pantalones blancas' is incorrect?",
          "options": [
            "Because white is always masculine.",
            "Because pantalones has no gender.",
            "It is a spelling exception.",
            "Because 'pantalones' is a masculine plural noun, requiring the masculine plural adjective 'blancos'."
          ],
          "answerIndex": 3,
          "explanation": "Pantalones (masc. pl.) matches with blancos (masc. pl.).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Ella lleva un _______ (dress) amarillo y unos _______ (shoes) negros.'",
          "options": [
            "camisa / faldas",
            "abrigo / zapatillas",
            "vestido / zapatos",
            "bolso / gafas"
          ],
          "answerIndex": 2,
          "explanation": "un vestido (masculine with amarillo) and unos zapatos (masculine pl. with negros).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: Foundational & Structural Mastery (Busco una camisa blanca y unos)"
  },
  "es-u8-l2": {
    "id": "es-u8-l2",
    "unit": "es-u8",
    "level": "A2",
    "objective": "Inquire about prices, ask for clothing sizes (la talla) and shoe sizes (el número), express fit with 'quedar bien/mal/grande/pequeño', and request to try on garments in fitting rooms (los probadores).",
    "presentation": {
      "explanation": "When shopping in Spain and Latin America, you need precise transactional phrases for sizes, fitting, and pricing:\n\n1. Asking for Prices:\n   - **¿Cuánto cuesta esto?** (How much does this cost? — singular)\n   - **¿Cuánto cuestan estos pantalones?** (How much do these cost? — plural)\n   - **¿Tiene descuento / rebaja?** (Is it discounted / on sale?)\n   - **Está de rebajas / Está en oferta** (It is on sale / on special offer)\n\n2. Asking for Sizes & Shoes:\n   - Clothing size = **la talla** (*¿Qué talla tiene? / ¿Tiene la talla M / L / XL? / ¿Tiene una talla más pequeña / grande?*)\n   - Shoe size = **el número** (*¿Qué número calza? / Calzo el 42* — I wear size 42)\n\n3. Expressing Fit: The Verb **QUEDAR** (Works like *gustar*!):\n   - **Me queda bien** = It fits me well / looks good on me.\n   - **Me queda mal** = It fits me poorly.\n   - **Me queda grande / ancho** = It is too big / loose on me.\n   - **Me queda pequeño / estrecho / apretado** = It is too small / tight on me.\n   - Plural: **Me quedan grandes / pequeños estos zapatos** (These shoes are too big/small on me).\n\n4. Trying Clothes on & Fitting Rooms:\n   - **¿Puedo probármelo / probármela?** = May I try it on? (*probarse* = to try on)\n   - **¿Dónde están los probadores?** = Where are the fitting rooms?",
      "examples": [
        {
          "target": "¿Cuánto cuesta esta chaqueta? ¿Puedo probármela?",
          "reading": "¿Cuánto cuesta esta chaqueta? ¿Puedo probármela?",
          "translation": "How much does this jacket cost? May I try it on?"
        },
        {
          "target": "Este pantalón me queda un poco estrecho. ¿Tiene una talla más?",
          "reading": "Este pantalón me queda un poco estrecho. ¿Tiene una talla más?",
          "translation": "These pants fit me a bit tight. Do you have one size up?"
        },
        {
          "target": "Los probadores están al fondo a la derecha.",
          "reading": "Los probadores están al fondo a la derecha.",
          "translation": "The fitting rooms are in the back to the right."
        }
      ],
      "mnemonics": [
        "Clothes size = TALLA (¿Qué talla?); Shoe size = NÚMERO (Calzo el 42)!",
        "ME QUEDA BIEN = It fits me well (singular); ME QUEDAN BIEN = They fit me well (plural)."
      ],
      "culturalNotes": [
        "In Spain, the biannual sales seasons are called 'Las Rebajas' (winter rebajas start January 7th after Three Kings Day; summer rebajas start July 1st), featuring major discounts across all retail stores."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What do you ask a shop assistant when a shirt is too tight and you need a larger size?",
          "options": [
            "Me queda pequeño. ¿Tiene una talla más grande? (It fits small. Do you have a larger size?) (37.1)",
            "No me gusta comprar ropa. (37.2)",
            "Me queda grande. ¿Tiene una talla más pequeña? (37.3)",
            "¿Cuánto cuesta el probador? (37.4)"
          ],
          "answerIndex": 0,
          "explanation": "Me queda pequeño + ¿Tiene una talla más grande?"
        },
        {
          "prompt": "What is the word for shoe size in Spanish?",
          "options": [
            "el número (e.g. Calzo el número 38)",
            "la talla",
            "el metro",
            "el peso"
          ],
          "answerIndex": 0,
          "explanation": "Shoe size is 'el número' (clothing size is 'la talla')."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: '¿Dónde están los probadores? Quiero probarme este vestido.'",
          "options": [
            "Where is the cash register? I want to buy this dress. (37.1)",
            "Where are the fitting rooms? I want to try on this dress. (37.2)",
            "Do you have this dress in red? (37.3)",
            "The fitting rooms are closed. (37.4)"
          ],
          "answerIndex": 1,
          "explanation": "los probadores = the fitting rooms; probarme este vestido = try on this dress."
        },
        {
          "prompt": "Why does 'estos zapatos' use 'me quedan' instead of 'me queda'?",
          "options": [
            "Because zapatos are expensive.",
            "Because quedar is an irregular preterite.",
            "Because 'estos zapatos' is plural, requiring plural verb agreement 'quedan' (like 'gustan').",
            "It is optional."
          ],
          "answerIndex": 2,
          "explanation": "Quedar agrees with the plural subject 'estos zapatos' -> me quedan grandes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the shopping phrases: ¿Cuánto cuesta?, ¿Tiene descuento?, Me queda estrecho, Los probadores:",
          "options": [
            "¿Cuánto cuesta?: How much is it? | ¿Tiene descuento?: Is it discounted? | Me queda estrecho: It fits tight | Los probadores: The fitting rooms",
            "All mean 'I want to pay'",
            "All mean 'goodbye'",
            "¿Cuánto cuesta?: Where is it? | ¿Tiene descuento?: What size? | Me queda estrecho: It is blue | Los probadores: The shoes"
          ],
          "answerIndex": 0,
          "explanation": "Core transactional shopping phrases in Spanish.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Esta falda te queda fenomenal, resalta mucho tu figura.'",
          "options": [
            "The skirt is the wrong color.",
            "This skirt is too expensive for you.",
            "You should return this skirt.",
            "This skirt looks fantastic on you, it highlights your figure a lot."
          ],
          "answerIndex": 3,
          "explanation": "te queda fenomenal = it looks/fits fantastic on you.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'Estar de rebajas' mean in Spain?",
          "options": [
            "To be closed for holidays",
            "To sell secondhand items",
            "To be on official seasonal sale with discounted prices",
            "To be out of stock"
          ],
          "answerIndex": 2,
          "explanation": "Estar de rebajas = to be on seasonal sale.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Estos vaqueros me _______ (fit) muy largos, necesito una talla menos.'",
          "options": [
            "quedo",
            "quedan",
            "quedamos",
            "queda"
          ],
          "answerIndex": 1,
          "explanation": "Estos vaqueros (plural) -> me quedan muy largos.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Foundational & Structural Mastery (¿Cuánto cuesta esta chaqueta? )"
  },
  "es-u8-l3": {
    "id": "es-u8-l3",
    "unit": "es-u8",
    "level": "A2",
    "objective": "Distinguish and apply the three spatial degrees of demonstrative adjectives and pronouns (este/esta, ese/esa, aquel/aquella) and neuter demonstratives (esto, eso, aquello).",
    "presentation": {
      "explanation": "Spanish has a three-way spatial distinction for demonstratives based on physical or psychological distance from the speaker and listener:\n\n1. The 3 Spatial Zones:\n   - **Zone 1: Near the Speaker (Here / Aquí)**:\n     - Masculine: **este** (sg) / **estos** (pl) (*este jersey* - this sweater, *estos zapatos* - these shoes)\n     - Feminine: **esta** (sg) / **estas** (pl) (*esta camisa* - this shirt, *estas faldas* - these skirts)\n   - **Zone 2: Near the Listener (There / Ahí)**:\n     - Masculine: **ese** (sg) / **esos** (pl) (*ese abrigo* - that coat near you, *esos pantalones*)\n     - Feminine: **esa** (sg) / **esas** (pl) (*esa chaqueta* - that jacket, *esas botas*)\n   - **Zone 3: Far from Both (Over there / Allí / Allá)**:\n     - Masculine: **aquel** (sg) / **aquellos** (pl) (*aquel bolso* - that handbag over there)\n     - Feminine: **aquella** (sg) / **aquellas** (pl) (*aquella tienda* - that shop over there)\n\n2. The Neuter Demonstratives (ESTO, ESO, AQUELLO):\n   - Used for unidentified objects, abstract ideas, or when asking *'What is this/that?'*:\n     - **¿Qué es esto?** (What is this? — object near speaker)\n     - **¿Cuánto cuesta eso?** (How much does that thing cost?)\n     - **Aquello fue increíble** (That event over there/in the past was incredible)\n   - *Note*: Neuter forms never modify a noun (never say *esto libro* — it must be *este libro*!).",
      "examples": [
        {
          "target": "Prefiero esta camisa roja de aquí, no esa azul de ahí.",
          "reading": "Prefiero esta camisa roja de aquí, no esa azul de ahí.",
          "translation": "I prefer this red shirt here, not that blue one there near you."
        },
        {
          "target": "¿Me puede mostrar aquel abrigo negro del escaparate?",
          "reading": "¿Me puede mostrar aquel abrigo negro del escaparate?",
          "translation": "Can you show me that black coat over there in the shop window?"
        },
        {
          "target": "¿Qué es esto? Es una bufanda de lana pura.",
          "reading": "¿Qué es esto? Es una bufanda de lana pura.",
          "translation": "What is this? It's a pure wool scarf."
        }
      ],
      "mnemonics": [
        "'This' and 'These' have Ts (esTe, esTa, esTos, esTas)!",
        "'That' and 'Those' don't (ese, esa, esos, esas)!",
        "'Aquel' is far away (aquí -> este, ahí -> ese, allí -> aquel)."
      ],
      "culturalNotes": [
        "In Spanish shopping culture, pointing with 'este/esta' while holding an item, or pointing across the shop floor with 'aquel/aquella', helps shop assistants immediately identify exact items on displays and mannequins."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which demonstrative adjective refers to an item close to the speaker (here / aquí)?",
          "options": [
            "ese / esa (38.1)",
            "aquel / aquella (38.2)",
            "aquello (38.3)",
            "este / esta (e.g. este vestido aquí) (38.4)"
          ],
          "answerIndex": 3,
          "explanation": "Este/esta corresponds to 'here' (aquí)."
        },
        {
          "prompt": "Why is 'esto camisa' grammatically incorrect?",
          "options": [
            "Because camisa is masculine.",
            "Because esto is plural.",
            "It is a spelling error.",
            "Because 'esto' is a neuter pronoun and cannot modify a noun; the feminine adjective 'esta camisa' must be used."
          ],
          "answerIndex": 3,
          "explanation": "Neuter demonstratives (esto, eso, aquello) cannot accompany nouns."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: '¿Cuánto cuestan aquellos zapatos del escaparate?'",
          "options": [
            "How much do those shoes over there in the shop window cost? (38.1)",
            "How much do these shoes here cost? (38.2)",
            "Are those shoes on sale? (38.3)",
            "I want to buy the shop window. (38.4)"
          ],
          "answerIndex": 0,
          "explanation": "aquellos = those over there; escaparate = shop window."
        },
        {
          "prompt": "What is the plural masculine form of 'aquel'?",
          "options": [
            "aquellos",
            "aquels",
            "aqueles",
            "aquellos libros"
          ],
          "answerIndex": 0,
          "explanation": "Aquel (singular) -> aquellos (plural)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the demonstratives to their spatial distance: este, ese, aquel:",
          "options": [
            "All mean 'here'",
            "All mean 'yesterday'",
            "este: far away | ese: here | aquel: nearby",
            "este: here / near speaker | ese: there / near listener | aquel: over there / far from both"
          ],
          "answerIndex": 3,
          "explanation": "3-degree spatial system: este (aquí), ese (ahí), aquel (allí).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Eso no me gusta, pero esto de aquí me encanta.'",
          "options": [
            "I like everything in the store.",
            "That store is closed.",
            "I don't like that thing (near you), but I love this thing here.",
            "This is very expensive."
          ],
          "answerIndex": 2,
          "explanation": "Eso (that abstract thing) vs. esto de aquí (this thing here).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct demonstrative: 'Quiero probarme _______ (these) pantalones negros de aquí.'",
          "options": [
            "aquellos",
            "estos",
            "estes",
            "esos"
          ],
          "answerIndex": 1,
          "explanation": "Pantalones (masc. pl. near speaker) -> estos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: '¿Me pasas _______ (that) chaqueta que está en tu silla?'",
          "options": [
            "esa",
            "esta",
            "eso",
            "aquella"
          ],
          "answerIndex": 0,
          "explanation": "Chaqueta near listener -> esa.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: Foundational & Structural Mastery (Prefiero esta camisa roja de a)"
  },
  "es-u8-l4": {
    "id": "es-u8-l4",
    "unit": "es-u8",
    "level": "A2",
    "objective": "Form comparisons of superiority (más ... que), inferiority (menos ... que), and equality (tan ... como / tanto ... como), and utilize irregular comparatives (mejor, peor, mayor, menor) and superlatives.",
    "presentation": {
      "explanation": "To compare products, prices, and quality while shopping, Spanish uses structured comparative formulas:\n\n1. Comparisons of Superiority & Inferiority:\n   - **Superiority**: **MÁS + Adjective / Adverb / Noun + QUE**\n     - *Esta chaqueta es **más cara que** esa.* (This jacket is more expensive than that one.)\n     - *Tengo **más dinero que** tú.* (I have more money than you.)\n   - **Inferiority**: **MENOS + Adjective / Adverb / Noun + QUE**\n     - *Este vestido es **menos formal que** aquel.* (This dress is less formal than that one.)\n\n2. Comparisons of Equality:\n   - With Adjectives/Adverbs: **TAN + Adjective + COMO** (as ... as)\n     - *Estos zapatos son **tan cómodos como** las zapatillas.* (These shoes are as comfortable as the sneakers.)\n   - With Nouns: **TANTO / TANTA / TANTOS / TANTAS + Noun + COMO** (as much/many ... as)\n     - *Esta tienda tiene **tanta ropa como** el centro comercial.* (This store has as much clothing as the mall.)\n     - *Tienen **tantos bolsos como** chaquetas.*\n\n3. The 4 Irregular Comparatives (Do NOT use 'más'!):\n   - **bueno** -> **mejor** (better) (*Esta marca es mejor que esa*)\n   - **malo** -> **peor** (worse) (*La calidad es peor*)\n   - **grande / viejo** (age) -> **mayor** (older / greater)\n   - **pequeño / joven** (age) -> **menor** (younger / lesser)\n\n4. Superlatives (The most ...):\n   - Formula: **el / la / los / las + más + Adjective + de...**\n     - *Es el vestido **más elegante de** la tienda.* (It is the most elegant dress in the store.)",
      "examples": [
        {
          "target": "Esta camisa de seda es más cara pero de mejor calidad.",
          "reading": "Esta camisa de seda es más cara pero de mejor calidad.",
          "translation": "This silk shirt is more expensive but of better quality."
        },
        {
          "target": "Este bolso es tan bonito como aquel, y cuesta la mitad.",
          "reading": "Este bolso es tan bonito como aquel, y cuesta la mitad.",
          "translation": "This handbag is as pretty as that one, and costs half as much."
        },
        {
          "target": "Es la tienda de moda más famosa de toda la Gran Vía.",
          "reading": "Es la tienda de moda más famosa de toda la Gran Vía.",
          "translation": "It is the most famous fashion store on the entire Gran Vía."
        }
      ],
      "mnemonics": [
        "TAN + Adjective + COMO (tan elegante como)!",
        "TANTO/A/OS/AS + Noun + COMO (tanta ropa como)!",
        "Never say 'más bueno' — say MEJOR!"
      ],
      "culturalNotes": [
        "In Madrid, shopping streets like Calle de Fuencarral, Gran Vía, and Calle de Serrano represent distinct fashion tiers from trendy streetwear to luxury haute couture."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'This jacket is better than that one'?",
          "options": [
            "Esta chaqueta es tan buena que esa. (39.1)",
            "Esta chaqueta es mejor que esa. (irregular comparative 'mejor') (39.2)",
            "Esta chaqueta es más mejor que esa. (39.3)",
            "Esta chaqueta es más buena que esa. (39.4)"
          ],
          "answerIndex": 1,
          "explanation": "Bueno -> mejor (never 'más bueno' or 'más mejor')."
        },
        {
          "prompt": "Which comparative formula is used for equality with an ADJECTIVE (e.g. comfortable)?",
          "options": [
            "tan + adjetivo + como (tan cómodo como)",
            "más + adjetivo + como",
            "menos + adjetivo + de",
            "tanto + adjetivo + como"
          ],
          "answerIndex": 0,
          "explanation": "Tan + adjective + como = as [adjective] as."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Estos pantalones son menos caros que los de la otra tienda.'",
          "options": [
            "These pants are less expensive than the ones in the other store. (39.1)",
            "The other store has cheaper shirts. (39.2)",
            "These pants are more expensive than all others. (39.3)",
            "These pants are not for sale. (39.4)"
          ],
          "answerIndex": 0,
          "explanation": "menos caros que = less expensive than."
        },
        {
          "prompt": "Complete with equality: 'Esta tienda tiene _______ (as many shirts as) aquella.'",
          "options": [
            "tantas camisas como",
            "más camisas como",
            "tan camisas como",
            "tanto camisas que"
          ],
          "answerIndex": 0,
          "explanation": "Camisas is fem. pl. noun -> tantas camisas como."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the comparative structures: más caro que, tan elegante como, tantas faldas como, la más barata:",
          "options": [
            "All mean 'worse than'",
            "All mean 'cheaper than'",
            "más caro que: more expensive than | tan elegante como: as elegant as | tantas faldas como: as many skirts as | la más barata: the cheapest",
            "All mean 'equal to'"
          ],
          "answerIndex": 2,
          "explanation": "Comparative and superlative paradigms.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'más mejor' grammatically incorrect in Spanish?",
          "options": [
            "Because mejor is feminine.",
            "Because 'mejor' is already an inherently comparative form meaning 'better', making 'más' redundant and ungrammatical.",
            "It is acceptable in standard speech.",
            "Because más is only for numbers."
          ],
          "answerIndex": 1,
          "explanation": "'Más mejor' is an improper double comparative.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'El abrigo de lana es el más cálido de todos.'",
          "options": [
            "The wool coat is the warmest of all.",
            "The wool coat is very cold.",
            "All coats are made of wool.",
            "I want a warm coat."
          ],
          "answerIndex": 0,
          "explanation": "el más cálido de todos = the warmest of all (superlative).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Este jersey es _______ (as soft as) la seda.'",
          "options": [
            "tan suave que",
            "tanto suave como",
            "más suave como",
            "tan suave como"
          ],
          "answerIndex": 3,
          "explanation": "Suave is an adjective -> tan suave como.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Foundational & Structural Mastery (Esta camisa de seda es más car)"
  },
  "es-u8-l5": {
    "id": "es-u8-l5",
    "unit": "es-u8",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multi-turn dialogue purchasing clothing and shoes at a boutique on the Gran Vía in Madrid.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 8, we synthesize clothing vocabulary, demonstratives, sizes, fit verbs (quedar), comparatives, and payment transactions in an authentic shopping interaction:\n\n1. The Setting:\n   - **Carlos** (customer) enters an upscale clothing boutique on Calle de Fuencarral near Gran Vía in Madrid. **Elena** (dependienta / sales assistant) assists him.\n\n2. Authentic Cultural Dialogue:\n   - **Elena**: ¡Hola! ¡Buenas tardes! ¿En qué puedo ayudarle? (*Hello! Good afternoon! How can I help you?*)\n   - **Carlos**: Hola, buenas tardes. Busco una chaqueta para el entretiempo y unos pantalones. (*Hello, good afternoon. I am looking for a mid-season jacket and some pants.*)\n   - **Elena**: Muy bien. Mire, tenemos esta chaqueta de cuero marrón de aquí y aquella azul marino del perchero. Ambas están rebajadas al veinte por ciento. (*Very well. Look, we have this brown leather jacket here and that navy blue one on the rack over there. Both are discounted by twenty percent.*)\n   - **Carlos**: La azul marino me parece más elegante que la marrón. ¿Tiene la talla M? ¿Puedo probármela? (*The navy blue one seems more elegant to me than the brown one. Do you have size M? May I try it on?*)\n   - **Elena**: Sí, por supuesto. Aquí tiene la talla M. Los probadores están al fondo a la derecha. (*Yes, of course. Here is size M. The fitting rooms are in the back to the right.*)\n   - *(Carlos sale del probador / Carlos comes out of the fitting room)*\n   - **Carlos**: La chaqueta me queda perfecta, pero me gustaría probarme también estos vaqueros negros. ¿Tiene el número 40? (*The jacket fits me perfectly, but I would like to try on these black jeans as well. Do you have size 40?*)\n   - **Elena**: Claro, aquí tiene. ¿Qué tal le quedan? (*Sure, here you are. How do they fit you?*)\n   - **Carlos**: ¡Me quedan fenomenal! Me llevo la chaqueta y los vaqueros. ¿Aceptan pago con tarjeta o contactless? (*They fit me fantastic! I'll take the jacket and the jeans. Do you accept payment by card or contactless?*)\n   - **Elena**: Sí, aceptamos tarjeta y móvil. Son ochenta y cinco euros en total. ¿Desea el ticket en papel o por correo electrónico? (*Yes, we accept card and mobile. It's eighty-five euros in total. Would you like the receipt on paper or by email?*)\n   - **Carlos**: Con tarjeta, por favor, y el ticket en papel. ¡Muchas gracias por su ayuda! (*By card, please, and the receipt on paper. Thank you very much for your help!*)",
      "examples": [
        {
          "target": "¿En qué puedo ayudarle? — Busco una chaqueta y unos vaqueros.",
          "reading": "¿En qué puedo ayudarle? — Busco una chaqueta y unos vaqueros.",
          "translation": "How can I help you? — I am looking for a jacket and some jeans."
        },
        {
          "target": "La chaqueta azul es más elegante que la marrón y me queda perfecta.",
          "reading": "La chaqueta azul es más elegante que la marrón y me queda perfecta.",
          "translation": "The blue jacket is more elegant than the brown one and fits me perfectly."
        },
        {
          "target": "¿Aceptan tarjeta? Me llevo la chaqueta y el pantalón.",
          "reading": "¿Aceptan tarjeta? Me llevo la chaqueta y el pantalón.",
          "translation": "Do you accept card? I'll take the jacket and the pants."
        }
      ],
      "mnemonics": [
        "ME LLEVO... = I'll take it! (standard phrase when deciding to buy an item).",
        "EL TICKET = The purchase receipt.",
        "EL ENTRETIEMPO = Mid-season weather (spring/autumn jackets)."
      ],
      "culturalNotes": [
        "Contactless card and mobile phone payments (pago con móvil / contactless) are ubiquitous across Spain, from luxury boutiques on Gran Vía to small street kiosks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What phrase does Carlos use to confirm he wants to purchase the items?",
          "options": [
            "Me llevo la chaqueta y los vaqueros. (I'll take the jacket and the jeans.) (40.1)",
            "No quiero nada. (40.2)",
            "Los probadores están cerrados. (40.3)",
            "Devuelvo la ropa. (40.4)"
          ],
          "answerIndex": 0,
          "explanation": "'Llevarse' (me llevo) is the idiomatic Spanish phrase for 'I will buy/take this item'."
        },
        {
          "prompt": "What discount percentage were the jackets on sale for in the boutique?",
          "options": [
            "20% (rebajadas al veinte por ciento)",
            "50%",
            "10%",
            "No discount"
          ],
          "answerIndex": 0,
          "explanation": "Elena stated: 'Ambas están rebajadas al veinte por ciento' (20%)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How did Carlos pay for his purchase at the checkout counter?",
          "options": [
            "With cash in exact change (40.1)",
            "By credit card with a paper receipt (pago con tarjeta y ticket en papel) (40.2)",
            "He traded an old coat (40.3)",
            "With gold coins (40.4)"
          ],
          "answerIndex": 1,
          "explanation": "Carlos paid with card and asked for a paper receipt."
        },
        {
          "prompt": "Translate: '¿Desea el ticket en papel o por correo electrónico?'",
          "options": [
            "Can I have your email address for spam?",
            "Would you like the receipt on paper or by email?",
            "The ticket costs extra money.",
            "Do you want to write a letter on paper?"
          ],
          "answerIndex": 1,
          "explanation": "ticket en papel o por correo electrónico = paper or digital email receipt."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Esta chaqueta azul marino es más elegante que la marrón, me queda perfecta y está rebajada al veinte por ciento.'",
          "options": [
            "Tomorrow I will buy a brown coat and black shoes.",
            "This navy blue jacket is more elegant than the brown one, fits me perfectly, and is discounted by twenty percent.",
            "The navy blue jacket is too small and has no discount.",
            "The fitting room is occupied."
          ],
          "answerIndex": 1,
          "explanation": "Synthesis of demonstratives, color adjectives, comparatives, fit verbs, and discount terminology.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'ropa de entretiempo' refer to in Spanish fashion?",
          "options": [
            "Mid-season clothing suitable for transitional spring and autumn weather",
            "Winter snow parkas only",
            "Summer swimwear only",
            "Costumes for theater"
          ],
          "answerIndex": 0,
          "explanation": "'Entretiempo' refers to spring/autumn transition weather clothing.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical and communicative competencies were mastered across Unit 8 in Spanish?",
          "options": [
            "Imperfect subjunctive mood only",
            "Future perfect passive only",
            "Spanish alphabet phonetics only",
            "Clothing & accessory vocabulary, color agreement, asking for sizes (la talla / el número) and prices, the fit verb 'quedar', 3-zone demonstratives (este/ese/aquel), comparative & superlative structures, and full retail checkout transactions"
          ],
          "answerIndex": 3,
          "explanation": "Unit 8 comprehensive retail shopping, sizes, demonstratives, and comparative mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What was the total price Carlos paid for both the jacket and the jeans?",
          "options": [
            "100 euros",
            "50 euros",
            "85 euros (ochenta y cinco euros)",
            "120 euros"
          ],
          "answerIndex": 2,
          "explanation": "Elena announced: 'Son ochenta y cinco euros en total' (€85).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Foundational & Structural Mastery (¿En qué puedo ayudarle? — Busc)"
  },
  "es-u9-l1": {
    "id": "es-u9-l1",
    "unit": "es-u9",
    "level": "A2",
    "objective": "Identify modes of urban transportation, transit stations, and ticketing vocabulary in Spanish (el metro, el autobús, el tren, el taxi, la estación, la parada, el andén, el billete, la tarjeta Multi).",
    "presentation": {
      "explanation": "Welcome to A2 Spanish Unit 9: Directions & Transportation (Direcciones y Transporte)! Navigating Spanish-speaking cities requires standard transit terminology:\n\n1. Modes of Transportation (Medios de transporte):\n   - **el metro** = subway / underground railway\n   - **el autobús / el bus** (Spain/LatAm) / **el camión** (Mexico) / **la guagua** (Canary Islands/Caribbean) = bus\n   - **el tren** = train (e.g. *el AVE* = high-speed train in Spain; *Cercanías* = commuter rail)\n   - **el taxi** = taxi / cab\n   - **la bicicleta / la bici** = bicycle / bike\n   - **el coche / el auto / el carro** = car\n   - *Note on Prepositions*: Use **en** for vehicles (*en metro, en autobús, en tren, en coche, en taxi*), but **a** for walking (*a pie*).\n\n2. Public Transit Infrastructure (Infraestructura):\n   - **la estación** = station (*la estación de metro, la estación de tren / de Atocha*)\n   - **la parada** = bus/taxi stop (*la parada de autobús*)\n   - **el andén** = train / metro platform (*¿En qué andén sale el tren?*)\n   - **la línea** = transit line (*la Línea 1 - roja, la Línea 2 - azul*)\n   - **el transbordo / la correspondencia** = transfer / connection between lines\n   - **el billete / el pasaje / el boleto** = ticket (*billete sencillo* = single trip; *billete de ida y vuelta* = round-trip)\n   - **la tarjeta de transporte / tarjeta Multi** = rechargeable transit card.",
      "examples": [
        {
          "target": "¿Dónde está la estación de metro más cercana?",
          "reading": "¿Dónde está la estación de metro más cercana?",
          "translation": "Where is the nearest metro station?"
        },
        {
          "target": "Vamos al centro en metro porque es más rápido que ir a pie.",
          "reading": "Vamos al centro en metro porque es más rápido que ir a pie.",
          "translation": "We go downtown by metro because it's faster than going on foot."
        },
        {
          "target": "Para ir al aeropuerto tienes que hacer transbordo en la estación de Nuevos Ministerios.",
          "reading": "Para ir al aeropuerto tienes que hacer transbordo en la estación de Nuevos Ministerios.",
          "translation": "To go to the airport you have to transfer at Nuevos Ministerios station."
        }
      ],
      "mnemonics": [
        "EN for motorized transport (en metro, en tren); A for feet (a pie)!",
        "EL ANDÉN = The platform where you wait for the train!",
        "TRANSBORDO = Transferring between lines!"
      ],
      "culturalNotes": [
        "The Madrid Metro, opened in 1919 by King Alfonso XIII, is one of the longest and most efficient subway systems in the world, with over 300 stations and 12 color-coded lines."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I prefer to go on foot' in Spanish?",
          "options": [
            "Prefiero ir en pie. (41.1)",
            "Prefiero ir con pie. (41.2)",
            "Prefiero ir por pie. (41.3)",
            "Prefiero ir a pie. (a pie = on foot) (41.4)"
          ],
          "answerIndex": 3,
          "explanation": "'A pie' is the standard prepositional phrase for walking/on foot."
        },
        {
          "prompt": "What is 'el andén' in a railway or subway station?",
          "options": [
            "The ticket machine",
            "The emergency brake",
            "The subway driver",
            "The platform where passengers board and exit trains"
          ],
          "answerIndex": 3,
          "explanation": "El andén = the train/metro platform."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Compré un billete de diez viajes en la máquina automática.'",
          "options": [
            "I lost my ticket on the bus. (41.1)",
            "The ticket machine is broken. (41.2)",
            "I need 10 euros for the train. (41.3)",
            "I bought a 10-trip ticket at the ticket vending machine. (41.4)"
          ],
          "answerIndex": 3,
          "explanation": "billete de diez viajes = 10-trip ticket; máquina automática = automated machine."
        },
        {
          "prompt": "What does 'hacer transbordo' mean in a metro network?",
          "options": [
            "To buy a ticket",
            "To exit the station",
            "To miss the train",
            "To transfer / change from one transit line to another"
          ],
          "answerIndex": 3,
          "explanation": "Hacer transbordo = to make a transfer/connection."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the transit terms: la parada, el andén, el billete sencillo, el transbordo:",
          "options": [
            "la parada: bus stop | el andén: train platform | el billete sencillo: single ticket | el transbordo: line transfer",
            "All mean train tracks",
            "All mean luggage",
            "la parada: airport | el andén: ticket | el billete sencillo: weekly pass"
          ],
          "answerIndex": 0,
          "explanation": "Public transit infrastructure definitions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'El tren de alta velocidad (AVE) para Sevilla sale del andén número cuatro.'",
          "options": [
            "The bus to Seville is arriving at four o'clock.",
            "Seville has four train stations.",
            "The train to Seville is delayed.",
            "The high-speed train (AVE) for Seville departs from platform number four."
          ],
          "answerIndex": 3,
          "explanation": "tren de alta velocidad = high-speed train; andén número cuatro = platform 4.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do you say 'en autobús' but 'a pie'?",
          "options": [
            "Because buses are heavy.",
            "Because pie is an irregular noun.",
            "Spanish uses 'en' for vehicular modes of transport and 'a' for pedestrian locomotion ('a pie' / 'a caballo').",
            "It is a dialect rule only in Madrid."
          ],
          "answerIndex": 2,
          "explanation": "Prepositional rule: 'en' for vehicles, 'a' for foot/horseback.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Tienes que tomar la _______ (Line) 2 en dirección a Cuatro Caminos.'",
          "options": [
            "Estación",
            "Línea",
            "Tarjeta",
            "Parada"
          ],
          "answerIndex": 1,
          "explanation": "Línea 2 = Line 2.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 1: Foundational & Structural Mastery (¿Dónde está la estación de met)"
  },
  "es-u9-l2": {
    "id": "es-u9-l2",
    "unit": "es-u9",
    "level": "A2",
    "objective": "Master Spanish prepositions of place and spatial orientation (al lado de, enfrente de, cerca de, lejos de, entre, detrás de, delante de, encima de, debajo de) with the contraction 'de + el = del'.",
    "presentation": {
      "explanation": "Describing where landmarks, monuments, and services are located requires compound spatial prepositions:\n\n1. Essential Prepositions of Place:\n   - **al lado de** = next to / beside (*al lado del banco*)\n   - **enfrente de / frente a** = in front of / opposite / across from (*enfrente del museo*)\n   - **cerca de** = near / close to (*cerca de la estación*)\n   - **lejos de** = far from (*lejos del centro*)\n   - **entre** = between / among (*entre el hotel y el restaurante* — no 'de'!)\n   - **detrás de** = behind (*detrás de la iglesia*)\n   - **delante de** = in front of (physical position) (*delante de la puerta*)\n   - **encima de / sobre** = on top of / above (*encima de la mesa*)\n   - **debajo de** = under / beneath (*debajo del puente*)\n\n2. Mandatory Contraction Rule: **DE + EL = DEL**:\n   - When any preposition ending in 'de' is followed by a masculine singular noun starting with 'el', it MUST contract to **del**:\n     - *cerca de + el parque* -> **cerca del parque**\n     - *al lado de + el teatro* -> **al lado del teatro**\n     - *enfrente de + la plaza* -> *enfrente de la plaza* (no contraction with 'la'!).",
      "examples": [
        {
          "target": "La farmacia está al lado del banco y enfrente del supermercado.",
          "reading": "La farmacia está al lado del banco y enfrente del supermercado.",
          "translation": "The pharmacy is next to the bank and across from the supermarket."
        },
        {
          "target": "El Museo del Prado está muy cerca del Parque del Retiro.",
          "reading": "El Museo del Prado está muy cerca del Parque del Retiro.",
          "translation": "The Prado Museum is very close to Retiro Park."
        },
        {
          "target": "La parada de taxi está entre el hotel y la estación de tren.",
          "reading": "La parada de taxi está entre el hotel y la estación de tren.",
          "translation": "The taxi stand is between the hotel and the train station."
        }
      ],
      "mnemonics": [
        "DE + EL = DEL (Always contract for masculine singular nouns)!",
        "AL LADO DE = Next to; ENFRENTE DE = Across from!",
        "ENTRE needs no 'de' (entre A y B)!"
      ],
      "culturalNotes": [
        "In Spain, asking '¿Hay una farmacia cerca de aquí?' (Is there a pharmacy near here?) is one of the most common everyday inquiries, easily spotted by the glowing green cross (cruz verde)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you combine 'cerca de' + 'el hotel' correctly in Spanish?",
          "options": [
            "cerca del hotel (mandatory contraction de + el = del) (42.1)",
            "cerca en el hotel (42.2)",
            "cerca de el hotel (42.3)",
            "cerca al hotel (42.4)"
          ],
          "answerIndex": 0,
          "explanation": "De + el contracts to del."
        },
        {
          "prompt": "Which preposition of place means 'between' two landmarks?",
          "options": [
            "entre (e.g. entre la cafetería y el banco)",
            "al lado de",
            "debajo de",
            "detrás de"
          ],
          "answerIndex": 0,
          "explanation": "Entre = between/among."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'El restaurante está detrás de la catedral y enfrente del jardín.'",
          "options": [
            "The restaurant is far from the cathedral. (42.1)",
            "The restaurant is behind the cathedral and in front of the garden. (42.2)",
            "The cathedral is inside the garden. (42.3)",
            "Where is the cathedral restaurant? (42.4)"
          ],
          "answerIndex": 1,
          "explanation": "detrás de la catedral = behind cathedral; enfrente del jardín = in front of garden."
        },
        {
          "prompt": "What is the difference between 'cerca de' and 'lejos de'?",
          "options": [
            "'Cerca de' means inside; 'Lejos de' means outside.",
            "'Cerca de' is for cars only.",
            "'Cerca de' means close/near; 'Lejos de' means far away from.",
            "They are exact synonyms."
          ],
          "answerIndex": 2,
          "explanation": "Cerca (near) vs. Lejos (far)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the prepositions: al lado de, debajo de, encima de, enfrente de:",
          "options": [
            "All mean yesterday",
            "All mean inside",
            "al lado de: far | debajo de: between | encima de: behind",
            "al lado de: next to | debajo de: under | encima de: on top of | enfrente de: across from"
          ],
          "answerIndex": 3,
          "explanation": "Spatial prepositions matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: '¿Está el banco muy lejos de aquí? — No, está a la vuelta, al lado del quiosco.'",
          "options": [
            "I want to change money at the kiosk.",
            "The kiosk is far from the bank.",
            "Is the bank very far from here? — No, it is around the corner, next to the kiosk.",
            "The bank is closed next to the kiosk."
          ],
          "answerIndex": 2,
          "explanation": "lejos de aquí = far from here; a la vuelta = around the corner; al lado del quiosco = next to kiosk.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'detrás de el cine' grammatically incorrect?",
          "options": [
            "Because detrás takes no preposition.",
            "Because Spanish mandates the contraction of 'de' and 'el' into 'del' ('detrás del cine').",
            "It is acceptable in spoken Spanish.",
            "Because cine is feminine."
          ],
          "answerIndex": 1,
          "explanation": "Mandatory contraction de + el = del.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'La oficina de correos está _______ (between) la panadería y la farmacia.'",
          "options": [
            "entre",
            "debajo de",
            "cerca de",
            "al lado de"
          ],
          "answerIndex": 0,
          "explanation": "entre (between A and B).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 2: Foundational & Structural Mastery (La farmacia está al lado del b)"
  },
  "es-u9-l3": {
    "id": "es-u9-l3",
    "unit": "es-u9",
    "level": "A2",
    "objective": "Give and follow walking and transit directions using directional verbs, imperatives, and spatial idioms (seguir todo recto, girar a la derecha/izquierda, cruzar la calle, tomar la primera calle, bajarse en).",
    "presentation": {
      "explanation": "Asking for and giving directions involves a set of standardized action verbs and directional formulas:\n\n1. Asking for Directions (Pedir direcciones):\n   - **¿Cómo se va a / para ir a...?** = How do you get to...?\n   - **¿Por dónde se va a la Plaza Mayor?** = Which way to Plaza Mayor?\n   - **¿Podría decirme dónde está el museo?** = Could you tell me where the museum is?\n   - **¿Está lejos / cerca?** = Is it far / near?\n\n2. Giving Directions (Dar indicaciones):\n   - **Seguir todo recto / derecho** = Go / continue straight ahead (*Sigue todo recto por esta avenida*)\n   - **Girar / doblar a la derecha** = Turn right (*Gira a la derecha en la esquina*)\n   - **Girar / doblar a la izquierda** = Turn left (*Gira a la izquierda en el semáforo*)\n   - **Cruzar la calle / la plaza** = Cross the street / the square\n   - **Tomar la primera / segunda calle** = Take the first / second street (*Toma la segunda calle a la derecha*)\n   - **Hasta el final de la calle** = Until the end of the street\n   - **En la esquina / En el semáforo** = At the corner / At the traffic light\n\n3. Transit Actions:\n   - **Subir(se) a / al** = To get on / board (*Sube al metro en Sol*)\n   - **Bajar(se) de / en** = To get off (*Bájate en la estación de Atocha*).",
      "examples": [
        {
          "target": "Disculpe, ¿para ir al Museo del Prado? — Siga todo recto y gire a la izquierda.",
          "reading": "Disculpe, ¿para ir al Museo del Prado? — Siga todo recto y gire a la izquierda.",
          "translation": "Excuse me, how to get to the Prado Museum? — Go straight ahead and turn left."
        },
        {
          "target": "Cruza la calle en el semáforo y toma la primera a la derecha.",
          "reading": "Cruza la calle en el semáforo y toma la primera a la derecha.",
          "translation": "Cross the street at the traffic light and take the first street on the right."
        },
        {
          "target": "Tienes que bajarte en la tercera parada, justo delante del parque.",
          "reading": "Tienes que bajarte en la tercera parada, justo delante del parque.",
          "translation": "You have to get off at the third stop, right in front of the park."
        }
      ],
      "mnemonics": [
        "TODO RECTO = Straight ahead (NOT 'a la derecha'!)",
        "A LA DERECHA = To the right | A LA IZQUIERDA = To the left!",
        "EL SEMÁFORO = The traffic light; LA ESQUINA = The corner!"
      ],
      "culturalNotes": [
        "In Spain, asking strangers on the street is typically preceded by '¡Perdón!' or '¡Disculpe!' and people will often give very enthusiastic, detailed multi-turn directions accompanied by expressive hand gestures."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you tell someone 'Continue straight ahead and turn right at the traffic light' in Spanish?",
          "options": [
            "Gira a la izquierda y para. (43.1)",
            "Cruza la calle y vuelve. (43.2)",
            "Sigue todo recto y gira a la derecha en el semáforo. (43.3)",
            "Toma el metro hacia atrás. (43.4)"
          ],
          "answerIndex": 2,
          "explanation": "Sigue todo recto (straight) + gira a la derecha (turn right) + en el semáforo (traffic light)."
        },
        {
          "prompt": "What does 'cruzar la calle' mean?",
          "options": [
            "To clean the street",
            "To drive on the street",
            "To block the street",
            "To cross the street"
          ],
          "answerIndex": 3,
          "explanation": "Cruzar la calle = to cross the street."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Toma la segunda calle a la izquierda y verás la catedral al fondo.'",
          "options": [
            "Take the second street on the left and you will see the cathedral at the end. (43.1)",
            "Take the first street on the right to the cathedral. (43.2)",
            "Do not turn on the second street. (43.3)",
            "The cathedral is closed on the left. (43.4)"
          ],
          "answerIndex": 0,
          "explanation": "segunda calle a la izquierda = 2nd street on left; al fondo = at the end/background."
        },
        {
          "prompt": "What verb describes exiting or stepping off a bus or metro train?",
          "options": [
            "Bajarse (e.g. bajarse del autobús / en la estación)",
            "Subirse (getting on)",
            "Caminar",
            "Comprar"
          ],
          "answerIndex": 0,
          "explanation": "Bajarse = to get off / alight."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the directional phrases: seguir todo recto, girar a la izquierda, en la esquina, en el semáforo:",
          "options": [
            "All are food terms",
            "All mean stop",
            "seguir todo recto: go straight ahead | girar a la izquierda: turn left | en la esquina: at the corner | en el semáforo: at the traffic light",
            "All mean turn right"
          ],
          "answerIndex": 2,
          "explanation": "Directional commands and landmark references.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Para llegar a la estación, sube al autobús número diez y bájate en la quinta parada.'",
          "options": [
            "I missed bus number 10 at the fifth stop.",
            "To get to the station, get on bus number 10 and get off at the fifth stop.",
            "Bus number 10 goes to the airport every five minutes.",
            "The train arrives at platform 10 in five minutes."
          ],
          "answerIndex": 1,
          "explanation": "sube al autobús = get on bus; bájate en la quinta parada = get off at 5th stop.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the common phrase used to inquire 'Which way to...?' in Spanish?",
          "options": [
            "¿Por dónde se va a...? (or ¿Cómo se va a...?)",
            "¿Quién es usted?",
            "¿Qué hora es?",
            "¿Cuánto cuesta?"
          ],
          "answerIndex": 0,
          "explanation": "¿Por dónde se va a...? = Which way do you go to get to...?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Gira a la _______ (right) en la próxima esquina.'",
          "options": [
            "fondo",
            "cerca",
            "recto",
            "derecha"
          ],
          "answerIndex": 3,
          "explanation": "Gira a la derecha = turn to the right.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 3: Foundational & Structural Mastery (Disculpe, ¿para ir al Museo de)"
  },
  "es-u9-l4": {
    "id": "es-u9-l4",
    "unit": "es-u9",
    "level": "A2",
    "objective": "Distinguish and accurately apply the foundational differences between 'Por' (motion through, duration, means, cause) and 'Para' (destination, recipient, deadline, purpose) in travel and navigation contexts.",
    "presentation": {
      "explanation": "One of the most famous distinctions in Spanish grammar is **POR vs. PARA**. In transportation, directions, and travel, their rules are crisp and clear:\n\n1. When to use **POR** (Movement Through, Means, Cause, Duration):\n   - **Motion Through / Along / Across Space**: *Caminamos **por** el parque / Paseamos **por** la Gran Vía.* (Walking through/along the park / street).\n   - **Means / Method of Transportation or Communication**: *Viajamos **por** tren / Te envié la dirección **por** WhatsApp.* (By train, via WhatsApp).\n   - **Duration of Time**: *Estuvimos en Madrid **por** tres días.* (For three days).\n   - **Reason / Cause ('Because of')**: *El tren llegó tarde **por** la lluvia.* (Because of the rain).\n\n2. When to use **PARA** (Destination, Purpose, Deadline, Recipient):\n   - **Physical Destination ('Heading towards')**: *Este tren va **para** Barcelona / Salimos **para** el aeropuerto.* (Bound for Barcelona / airport).\n   - **Purpose / Goal ('In order to' + Infinitive)**: *Compré un billete **para** viajar en metro.* (In order to travel).\n   - **Deadline / Specific Future Time**: *El informe es **para** mañana / La reserva es **para** el viernes.* (For tomorrow / Friday).\n   - **Recipient**: *Este billete es **para** ti.* (For you).\n\n3. The Spatial Contrast Test:\n   - *Vamos **por** el túnel* (We go **through** the tunnel — path).\n   - *Vamos **para** el museo* (We go **to / towards** the museum — destination).",
      "examples": [
        {
          "target": "Caminamos por el centro histórico para llegar a la Plaza Mayor.",
          "reading": "Caminamos por el centro histórico para llegar a la Plaza Mayor.",
          "translation": "We walk through the historic center in order to arrive at Plaza Mayor."
        },
        {
          "target": "Este autobús va para el aeropuerto y pasa por la estación de Chamartín.",
          "reading": "Este autobús va para el aeropuerto y pasa por la estación de Chamartín.",
          "translation": "This bus is heading for the airport and passes through Chamartín station."
        },
        {
          "target": "Necesito el billete de tren para el viernes por la mañana.",
          "reading": "Necesito el billete de tren para el viernes por la mañana.",
          "translation": "I need the train ticket for Friday morning."
        }
      ],
      "mnemonics": [
        "POR = Through space, By means, Duration, Cause (The Journey)!",
        "PARA = Destination, Purpose (In order to), Deadline, Recipient (The Goal)!",
        "PARA = Point of Arrival | POR = Path of Travel!"
      ],
      "culturalNotes": [
        "In train station announcements across Spain, you will hear 'Tren con destino a / para...' indicating final destination, and 'tren con paradas por...' indicating the towns passed along the route."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which preposition fills the blank for physical motion through space: 'Caminamos _______ (through/along) la calle Gran Vía'?",
          "options": [
            "en (44.1)",
            "por (motion through or along a spatial path) (44.2)",
            "con (44.3)",
            "para (44.4)"
          ],
          "answerIndex": 1,
          "explanation": "'Por' expresses motion through or along a route."
        },
        {
          "prompt": "Which preposition fills the blank for purpose / in order to: 'Estudio español _______ (in order to) viajar por América Latina'?",
          "options": [
            "para (purpose + infinitive)",
            "de",
            "a",
            "por"
          ],
          "answerIndex": 0,
          "explanation": "'Para + infinitive' expresses purpose / in order to."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'El tren para Valencia pasa por Cuenca.'",
          "options": [
            "The train heading for Valencia passes through Cuenca. (44.1)",
            "Cuenca has no trains to Valencia. (44.2)",
            "The train from Valencia stopped in Cuenca. (44.3)",
            "Valencia is far from Cuenca. (44.4)"
          ],
          "answerIndex": 0,
          "explanation": "para Valencia = destination; pasa por Cuenca = route passing through."
        },
        {
          "prompt": "Complete: 'Necesito comprar un billete _______ (for) mañana _______ (in the) tarde.'",
          "options": [
            "para / por la (para = deadline/time; por la tarde = time of day)",
            "por / por la",
            "por / para la",
            "para / para la"
          ],
          "answerIndex": 0,
          "explanation": "para mañana (deadline) + por la tarde (time of day period)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the sentences with the correct rule: 'Viajar por tren', 'Un billete para ti', 'Pasear por el parque', 'Estudiar para aprender':",
          "options": [
            "All express deadlines",
            "Viajar por tren: Means | Un billete para ti: Recipient | Pasear por el parque: Movement through | Estudiar para aprender: Purpose",
            "All are past tense",
            "All express cost"
          ],
          "answerIndex": 1,
          "explanation": "Fundamental por vs. para use cases.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Salimos para la estación temprano y cruzamos por el puente viejo.'",
          "options": [
            "We left for the station early and crossed via the old bridge.",
            "We arrived at the old bridge late.",
            "We walked away from the station.",
            "The station is under the old bridge."
          ],
          "answerIndex": 0,
          "explanation": "para la estación = destination; por el puente = path crossed through.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the difference between 'ir por el parque' and 'ir para el parque'?",
          "options": [
            "The second one is plural.",
            "There is no difference.",
            "The first one is past tense.",
            "'Ir por el parque' means walking inside/through the park as a path; 'Ir para el parque' means heading toward the park as your destination."
          ],
          "answerIndex": 3,
          "explanation": "Por (path through) vs. Para (destination towards).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'El autobús no pudo pasar _______ (because of) las obras en la calle.'",
          "options": [
            "sin",
            "para",
            "por",
            "hacia"
          ],
          "answerIndex": 2,
          "explanation": "por = because of / cause.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 4: Foundational & Structural Mastery (Caminamos por el centro histór)"
  },
  "es-u9-l5": {
    "id": "es-u9-l5",
    "unit": "es-u9",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multi-turn dialogue purchasing metro tickets at Puerta del Sol, taking the Madrid Metro, transferring lines, and asking for street directions to the Museo del Prado.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 9, we synthesize transportation modes, prepositions of place, directional commands, por vs. para, and public transit navigation in central Madrid:\n\n1. The Setting:\n   - **Mateo** (traveler) is at **Puerta del Sol** in the heart of Madrid. He needs to reach the world-famous **Museo del Prado** on Paseo del Prado. He asks a local commuter (**Lucía**) and station staff for assistance.\n\n2. Authentic Cultural Dialogue:\n   - **Mateo**: ¡Disculpe, buenas tardes! ¿Podría decirme cómo se va al Museo del Prado desde aquí? (*Excuse me, good afternoon! Could you tell me how to get to the Prado Museum from here?*)\n   - **Lucía**: ¡Hola! Tienes dos opciones: puedes ir en metro o a pie. A pie son solo quince minutos paseando por la calle de Alcalá y bajando por el Paseo del Prado. (*Hello! You have two options: you can go by metro or on foot. On foot it's only 15 minutes strolling along Alcalá street and heading down through Paseo del Prado.*)\n   - **Mateo**: Como hace un día tan bonito, prefiero ir a pie para conocer la ciudad, pero primero tengo que comprar una tarjeta de transporte para esta noche. ¿Dónde están las máquinas? (*Since it's such a lovely day, I prefer to go on foot to get to know the city, but first I have to buy a transit card for tonight. Where are the machines?*)\n   - **Lucía**: Las máquinas automáticas están justo debajo de la plaza, en el vestíbulo de la estación de Sol. Bajas por esas escaleras y las verás al lado de las taquillas. (*The automated machines are right beneath the square, in the concourse of Sol station. You go down those stairs and you will see them next to the ticket windows.*)\n   - **Mateo**: ¡Perfecto! ¿Y una vez que compre la tarjeta, cómo llego caminando al museo? (*Perfect! And once I buy the card, how do I walk to the museum?*)\n   - **Lucía**: Muy fácil. Sales de la estación, sigues todo recto por la calle de Alcalá hasta llegar a la Plaza de Cibeles. En la fuente de Cibeles, giras a la derecha por el Paseo del Prado. Cruzas en el semáforo y verás el Museo del Prado enfrente del Real Jardín Botánico, al lado de la estatua de Velázquez. (*Very easy. You exit the station, go straight ahead along Alcalá street until you reach Cibeles Square. At the Cibeles fountain, turn right along Paseo del Prado. Cross at the traffic light and you will see the Prado Museum across from the Royal Botanical Garden, next to the Velázquez statue.*)\n   - **Mateo**: ¡Muchísimas gracias por su ayuda! Ha sido muy amable. (*Thank you so much for your help! You have been very kind.*)\n   - **Lucía**: ¡De nada! Que disfrutes mucho de las pinturas en el Prado. ¡Buen viaje! (*You're welcome! Enjoy the paintings at the Prado very much. Have a great trip!*)",
      "examples": [
        {
          "target": "Sigue todo recto por la calle de Alcalá hasta la Plaza de Cibeles y gira a la derecha.",
          "reading": "Sigue todo recto por la calle de Alcalá hasta la Plaza de Cibeles y gira a la derecha.",
          "translation": "Go straight ahead along Alcalá street until Cibeles Square and turn right."
        },
        {
          "target": "El Museo del Prado está enfrente del Jardín Botánico y al lado de la estatua.",
          "reading": "El Museo del Prado está enfrente del Jardín Botánico y al lado de la estatua.",
          "translation": "The Prado Museum is across from the Botanical Garden and next to the statue."
        },
        {
          "target": "Compré una tarjeta de transporte en la estación para viajar en metro.",
          "reading": "Compré una tarjeta de transporte en la estación para viajar en metro.",
          "translation": "I bought a transit card in the station in order to travel by metro."
        }
      ],
      "mnemonics": [
        "PUERTA DEL SOL = The central kilometer zero point of Madrid and Spain!",
        "SIGUE TODO RECTO -> GIRA A LA DERECHA -> CRUZA EN EL SEMÁFORO!",
        "PASEO DEL PRADO = The tree-lined art boulevard housing the Prado, Thyssen, and Reina Sofía museums."
      ],
      "culturalNotes": [
        "The area in Madrid connecting the Prado Museum, Retiro Park, and Paseo del Prado is an official UNESCO World Heritage Site known as the 'Landscape of Light' (Paisaje de la Luz)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What landmark square did Lucía tell Mateo to walk toward before turning right onto Paseo del Prado?",
          "options": [
            "La Plaza de Cibeles (with the famous Cibeles fountain) (45.1)",
            "La Plaza Mayor (45.2)",
            "La Plaza de Toros (45.3)",
            "El Parque de Atracciones (45.4)"
          ],
          "answerIndex": 0,
          "explanation": "Lucía instructed: 'sigues todo recto... hasta llegar a la Plaza de Cibeles'."
        },
        {
          "prompt": "Where is the Museo del Prado located relative to the Real Jardín Botánico?",
          "options": [
            "Enfrente del Real Jardín Botánico (across from / in front of)",
            "Debajo del jardín",
            "Dentro del jardín",
            "A cien kilómetros del jardín"
          ],
          "answerIndex": 0,
          "explanation": "The Prado Museum sits directly across from the Royal Botanical Garden."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why did Mateo choose to walk instead of taking the metro?",
          "options": [
            "Because he had no money (45.1)",
            "Because the weather was beautiful and it was only a 15-minute walk through historic streets (45.2)",
            "Because walking is forbidden in Madrid (45.3)",
            "Because the metro was on strike (45.4)"
          ],
          "answerIndex": 1,
          "explanation": "Mateo noted: 'Como hace un día tan bonito, prefiero ir a pie para conocer la ciudad'."
        },
        {
          "prompt": "Translate: 'Bajas por esas escaleras y verás las máquinas automáticas al lado de las taquillas.'",
          "options": [
            "The ticket windows are closed on the stairs.",
            "Go down those stairs and you will see the ticket vending machines next to the ticket windows.",
            "The machines are outside the station.",
            "Go up the stairs to find the taxi stand."
          ],
          "answerIndex": 1,
          "explanation": "bajas por las escaleras = go down stairs; al lado de las taquillas = next to ticket windows."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Caminé por el Paseo del Prado, crucé en el semáforo y llegué al Museo del Prado enfrente del jardín botánico.'",
          "options": [
            "I walked along Paseo del Prado, crossed at the traffic light, and arrived at the Prado Museum across from the botanical garden.",
            "Tomorrow I will take a taxi to the airport for 30 euros.",
            "The Prado Museum was closed and there was no traffic light.",
            "The bus for Madrid was delayed by two hours."
          ],
          "answerIndex": 0,
          "explanation": "Synthesis of walking prepositions (por), directional actions (crucé en el semáforo), and spatial prepositions (enfrente del).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the 'Paisaje de la Luz' in Madrid?",
          "options": [
            "An airport terminal",
            "A modern subway line",
            "An electricity company",
            "The UNESCO World Heritage cultural district encompassing the tree-lined Paseo del Prado, the Prado Museum, and El Retiro Park"
          ],
          "answerIndex": 3,
          "explanation": "Paisaje de la Luz is Madrid's UNESCO World Heritage cultural boulevard.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical, lexical, and navigational competencies were mastered across Unit 9 in Spanish?",
          "options": [
            "Subjunctive mood triggers only",
            "Old Castilian phonetics only",
            "Public transit vocabulary & ticketing, prepositions of place with 'del' contraction, directional commands (seguir todo recto, girar, cruzar), the foundational Por vs. Para spatial/purpose distinction, and multi-turn urban street navigation",
            "Spanish alphabet letters only"
          ],
          "answerIndex": 2,
          "explanation": "Unit 9 comprehensive Spanish transit, spatial prepositions, directional commands, and por vs. para mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What statue is famous for standing right beside the main entrance of the Prado Museum?",
          "options": [
            "La estatua de Cristóbal Colón",
            "La estatua de Diego Velázquez",
            "La estatua de Don Quijote",
            "La estatua de Hércules"
          ],
          "answerIndex": 1,
          "explanation": "The iconic seated bronze statue of master painter Diego Velázquez greets visitors at the Prado's main entrance.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 5: Foundational & Structural Mastery (Sigue todo recto por la calle )"
  },
  "es-u10-l1": {
    "id": "es-u10-l1",
    "unit": "es-u10",
    "level": "A2",
    "objective": "Identify and describe rooms of the house and core furniture items in Spanish, using location prepositions and gender-matched adjectives.",
    "presentation": {
      "explanation": "In this lesson, we explore **The House & Furniture (La casa y los muebles)** in Spanish:\n\n1. Rooms of the House (Las habitaciones):\n   - **la sala / el salón**: the living room\n   - **la cocina**: the kitchen\n   - **el dormitorio / la habitación**: the bedroom\n   - **el baño / el cuarto de baño**: the bathroom\n   - **el comedor**: the dining room\n   - **el jardín / el patio**: the garden / courtyard\n   - **el balcón / la terraza**: the balcony / terrace\n\n2. Key Furniture & Household Objects (Los muebles):\n   - **la mesa**: the table\n   - **la silla**: the chair\n   - **el sofá**: the sofa\n   - **la cama**: the bed\n   - **el armario**: the wardrobe / closet\n   - **la estantería**: the bookshelf\n   - **la nevera / el frigorífico**: the refrigerator\n   - **la lámpara**: the lamp\n\n3. Spatial Placement:\n   - *En mi dormitorio hay una cama grande y un armario de madera.* (In my bedroom there is a large bed and a wooden wardrobe.)\n   - *La mesa está en el centro de la cocina.* (The table is in the center of the kitchen.)",
      "examples": [
        {
          "target": "Mi casa tiene tres dormitorios y un jardín hermoso.",
          "reading": "mee KAH-sah TYEH-neh trehs dor-mee-TOR-yohs ee oon har-DEEN er-MOH-soh",
          "translation": "My house has three bedrooms and a beautiful garden."
        },
        {
          "target": "El sofá cómodo está en la sala cerca de la ventana.",
          "reading": "ehl soh-FAH KOH-moh-doh ehs-TAH ehn lah SAH-lah SEHR-kah deh lah vehn-TAH-nah",
          "translation": "The comfortable sofa is in the living room near the window."
        }
      ],
      "mnemonics": [
        "SALA = living room where you socialize; COCINA = kitchen where you cook!",
        "DORMITORIO = from dormir (to sleep) -> bedroom!",
        "MESA = table; CAMA = bed; SOFÁ = sofa (masculine: el sofá)!"
      ],
      "culturalNotes": [
        "In many Spanish and Latin American homes, the 'patio interior' (central interior courtyard) serves as a cool, shaded gathering space and the architectural heart of traditional residences."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se dice 'the bedroom' en español?",
          "options": [
            "La cocina (46.1)",
            "El baño (46.2)",
            "La sala (46.3)",
            "El dormitorio (o la habitación) (46.4)"
          ],
          "answerIndex": 3,
          "explanation": "El dormitorio (or la habitación) means the bedroom."
        },
        {
          "prompt": "¿Qué mueble se encuentra habitualmente en el dormitorio para dormir?",
          "options": [
            "La nevera",
            "El lavavajillas",
            "La estantería",
            "La cama"
          ],
          "answerIndex": 3,
          "explanation": "La cama (the bed) is the primary furniture item for sleeping."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Completa la frase: 'La comida y la leche están frescas en _______.'",
          "options": [
            "el armario (46.1)",
            "el sofá (46.2)",
            "la lámpara (46.3)",
            "la nevera (el frigorífico) (46.4)"
          ],
          "answerIndex": 3,
          "explanation": "La nevera (the refrigerator) keeps food and milk fresh."
        },
        {
          "prompt": "¿Cuál es el artículo correcto para 'sofá'?",
          "options": [
            "La sofá",
            "Las sofá",
            "Una sofá",
            "El sofá (sustantivo masculino a pesar de terminar en -a)"
          ],
          "answerIndex": 3,
          "explanation": "'Sofá' is a masculine noun: el sofá / un sofá."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Empareja las habitaciones: la cocina, el baño, la sala, el jardín:",
          "options": [
            "cocina: bedroom | baño: kitchen | sala: garden | jardín: bathroom",
            "All mean bedroom",
            "All mean garage",
            "cocina: kitchen | baño: bathroom | sala: living room | jardín: garden"
          ],
          "answerIndex": 3,
          "explanation": "Rooms of the house vocabulary matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce al español: 'The table is in the dining room.'",
          "options": [
            "La mesa es en la cocina.",
            "El armario está en el comedor.",
            "La mesa está en el comedor.",
            "La cama está en la sala."
          ],
          "answerIndex": 2,
          "explanation": "'La mesa está en el comedor' uses 'estar' for physical location.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Por qué se usa el verbo 'estar' y no 'ser' para ubicar los muebles en una casa?",
          "options": [
            "Porque los muebles son temporales",
            "Porque la ubicación física y espacial en español siempre requiere el verbo 'estar' (#ScienceOfLearning)",
            "Porque 'estar' es más corto",
            "Porque 'ser' es solo para personas"
          ],
          "answerIndex": 1,
          "explanation": "Physical and geographic location universally takes 'estar'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa: 'En el salón hay una mesa grande y cuatro _______.'",
          "options": [
            "sillas",
            "baños",
            "jardines",
            "camas"
          ],
          "answerIndex": 0,
          "explanation": "Sillas (chairs) surround the dining/living room table.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 1: Foundational & Structural Mastery (Mi casa tiene tres dormitorios)"
  },
  "es-u10-l2": {
    "id": "es-u10-l2",
    "unit": "es-u10",
    "level": "A2",
    "objective": "Describe daily household chores and responsibilities in Spanish using common verb collocations (limpiar, fregar, pasar la aspiradora, sacar la basura).",
    "presentation": {
      "explanation": "In this lesson, we master **Daily Household Chores (Las tareas del hogar)** in Spanish:\n\n1. Essential Chore Verbs & Collocations:\n   - **limpiar la casa**: to clean the house\n   - **lavar los platos / fregar los platos**: to wash/scrub the dishes\n   - **pasar la aspiradora**: to vacuum\n   - **barrer el suelo**: to sweep the floor\n   - **hacer la cama**: to make the bed\n   - **sacar la basura**: to take out the trash\n   - **poner la lavadora / hacer la colada**: to do the laundry\n   - **planchar la ropa**: to iron the clothes\n   - **ordenar la habitación**: to tidy up the room\n   - **cocinar la cena**: to cook dinner\n\n2. Frequency Expressions:\n   - **todos los días / diariamente**: every day\n   - **a menudo**: often\n   - **a veces**: sometimes\n   - **los fines de semana**: on weekends\n   - *Ejemplo*: *Los sábados por la mañana paso la aspiradora y limpio el baño.* (On Saturday mornings I vacuum and clean the bathroom.)",
      "examples": [
        {
          "target": "Tengo que sacar la basura antes de salir de casa.",
          "reading": "TEHN-goh keh sah-KAHR lah bah-SOO-rah ahn-tehs deh sah-LEER deh KAH-sah",
          "translation": "I have to take out the trash before leaving the house."
        },
        {
          "target": "Mi hermano lava los platos después de cenar.",
          "reading": "mee ehr-MAH-noh LAH-bah lohs PLAH-tohs dehs-PWEHS deh seh-NAHR",
          "translation": "My brother washes the dishes after dinner."
        }
      ],
      "mnemonics": [
        "BARRER = sweep with a broom (barre); FREGAR = scrub (fregar los platos)!",
        "HACER LA CAMA = to make the bed (literally: to do the bed)!",
        "SACAR LA BASURA = to take out (sacar) the garbage (basura)!"
      ],
      "culturalNotes": [
        "In modern Hispanic societies, the distribution of 'tareas domésticas' (household chores) is increasingly shared equitably, with families often organizing weekend 'limpieza general' (deep cleaning routines)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué tarea doméstica significa 'to vacuum' en español?",
          "options": [
            "Pasar la aspiradora (47.1)",
            "Barrer el suelo (47.2)",
            "Planchar la ropa (47.3)",
            "Sacar la basura (47.4)"
          ],
          "answerIndex": 0,
          "explanation": "Pasar la aspiradora = to vacuum."
        },
        {
          "prompt": "¿Qué verbo se utiliza comúnmente con 'la cama' para decir 'to make the bed'?",
          "options": [
            "Hacer (Hacer la cama)",
            "Tomar",
            "Abrir",
            "Escribir"
          ],
          "answerIndex": 0,
          "explanation": "'Hacer la cama' is the standard collocation for making the bed."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce: 'I wash the dishes after lunch.'",
          "options": [
            "Limpio el suelo antes de comer. (47.1)",
            "Lavo los platos después del almuerzo (de la comida). (47.2)",
            "Pongo la mesa a las tres. (47.3)",
            "Saco la basura por la noche. (47.4)"
          ],
          "answerIndex": 1,
          "explanation": "Lavar los platos = to wash the dishes."
        },
        {
          "prompt": "¿Qué significa 'barrer el suelo'?",
          "options": [
            "To iron clothes",
            "To water the plants",
            "To sweep the floor",
            "To wash windows"
          ],
          "answerIndex": 2,
          "explanation": "Barrer el suelo = to sweep the floor with a broom."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Empareja las tareas domésticas: planchar, sacar la basura, fregar los platos, ordenar:",
          "options": [
            "All mean shopping",
            "All mean cooking",
            "planchar: iron clothes | sacar la basura: take out trash | fregar: wash dishes | ordenar: tidy up",
            "planchar: cook dinner | sacar la basura: sleep | fregar: read | ordenar: sing"
          ],
          "answerIndex": 2,
          "explanation": "Chore collocations matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cuál es la forma correcta: 'Mi compañero de piso y yo _______ la casa juntos'?",
          "options": [
            "limpian",
            "limpiamos (nosotros)",
            "limpias",
            "limpio"
          ],
          "answerIndex": 1,
          "explanation": "'Mi compañero y yo' = nosotros -> limpiamos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Por qué es importante dominar las expresiones de tareas domésticas al compartir vivienda en el extranjero?",
          "options": [
            "Para establecer acuerdos claros de convivencia y repartir responsabilidades en un piso compartido (#ScienceOfLearning)",
            "Para comprar muebles nuevos",
            "No tiene utilidad práctica",
            "Para trabajar en un hotel exclusivamente"
          ],
          "answerIndex": 0,
          "explanation": "Household chore communication is foundational for roommate agreements and daily life.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa: 'Antes de dormir, siempre saco _______ al contenedor.'",
          "options": [
            "la mesa",
            "la cama",
            "la lavadora",
            "la basura"
          ],
          "answerIndex": 3,
          "explanation": "Sacar la basura (taking out the trash) goes to the contenedor.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 2: Foundational & Structural Mastery (Tengo que sacar la basura ante)"
  },
  "es-u10-l3": {
    "id": "es-u10-l3",
    "unit": "es-u10",
    "level": "A2",
    "objective": "Conjugate and utilize regular -ar verbs in the Imperfect Past Tense (Pretérito Imperfecto) to describe habitual childhood actions and past routines.",
    "presentation": {
      "explanation": "In this lesson, we unlock one of the most expressive tenses in Spanish: **The Imperfect Tense (El Pretérito Imperfecto)** for regular `-ar` verbs:\n\n1. What is the Imperfect Tense Used For?\n   - **Habitual/Repeated Past Actions**: What you *used to do* or *would do regularly* in the past.\n   - **Past Descriptions**: Setting the background scene, describing ongoing states, weather, age, or appearance in the past.\n\n2. Regular `-ar` Imperfect Conjugation Matrix:\n   - **yo**: *-aba* (habl**aba** - I used to speak / was speaking)\n   - **tú**: *-abas* (habl**abas**)\n   - **él / ella / usted**: *-aba* (habl**aba**)\n   - **nosotros / nosotras**: *-ábamos* (habl**ábamos** - *Note the written accent!*)\n   - **vosotros / vosotras**: *-abais* (habl**abais**)\n   - **ellos / ellas / ustedes**: *-aban* (habl**aban**)\n\n3. Notice the Symmetry:\n   - The *yo* form and the *él/ella/usted* form are **identical** (*yo jugaba*, *él jugaba*). Context or subject pronouns clarify the speaker!",
      "examples": [
        {
          "target": "Cuando era niño, jugaba en el parque todos los días.",
          "reading": "KWAHN-doh EH-rah NEE-nyoh, hoo-GAH-bah ehn ehl PAHR-keh TOH-dohs lohs DEE-ahs",
          "translation": "When I was a child, I used to play in the park every day."
        },
        {
          "target": "Mis abuelos caminaban por la playa cada tarde.",
          "reading": "mees ah-BWEH-lohs kah-mee-NAH-bahn por lah PLAH-yah KAH-dah TAHR-deh",
          "translation": "My grandparents used to walk along the beach every afternoon."
        }
      ],
      "mnemonics": [
        "-AR IMPERFECT IS THE 'ABA' TENSE: -aba, -abas, -aba, -ábamos, -abais, -aban!",
        "WATCH THE ACCENT ON NOSOTROS: -ábamos always carries a written tilde on the first 'a'!",
        "IMPERFECT = 'USED TO DO': Think of continuous, unframed past film footage!"
      ],
      "culturalNotes": [
        "Stories, fairy tales, and personal reminiscences in Spanish almost always begin in the imperfect: 'Había una vez...' (Once upon a time there was...)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la terminación del imperfecto para 'yo' en verbos regulares -ar?",
          "options": [
            "-í (48.1)",
            "-é (48.2)",
            "-aba (yo cantaba, yo jugaba) (48.3)",
            "-aron (48.4)"
          ],
          "answerIndex": 2,
          "explanation": "-ar verbs take -aba for the 'yo' and 'él/ella' forms in the imperfect."
        },
        {
          "prompt": "Conjuga 'nosotros' para el verbo 'estudiar' en pretérito imperfecto:",
          "options": [
            "Estudiabamos",
            "Estudiaron",
            "Estudiamos",
            "Estudiábamos (con acento escrito en la 'á')"
          ],
          "answerIndex": 3,
          "explanation": "Nosotros in -ar imperfect always takes a written tilde: estudiábamos."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce: 'We used to visit our cousins in summer.'",
          "options": [
            "Visitábamos a nuestros primos en verano. (48.1)",
            "Visitamos a nuestros primos mañana. (48.2)",
            "Visito a los primos hoy. (48.3)",
            "Visitaron a los primos ayer. (48.4)"
          ],
          "answerIndex": 0,
          "explanation": "Visitábamos (imperfect) expresses a habitual past summer routine."
        },
        {
          "prompt": "¿Qué indica la frase 'De pequeño, siempre cenaba temprano'?",
          "options": [
            "Una rutina habitual y repetida en la infancia (cenar temprano)",
            "Una acción que ocurrió solo una vez",
            "Una acción futura",
            "Una orden imperativa"
          ],
          "answerIndex": 0,
          "explanation": "The imperfect expresses habitual, repeated actions in childhood."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Conjuga 'trabajar' en imperfecto para todas las personas: yo, tú, él, nosotros, ellos:",
          "options": [
            "trabajo, trabajas, trabaja, trabajamos, trabajan",
            "trabajaba, trabajabas, trabajaba, trabajábamos, trabajaban",
            "trabajaré, trabajarás, trabajará, trabajaremos, trabajarán",
            "trabajé, trabajaste, trabajó, trabajamos, trabajaron"
          ],
          "answerIndex": 1,
          "explanation": "Complete regular -ar imperfect conjugation paradigm.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cuál es la diferencia de significado entre 'Ayer caminé en el parque' (Pretérito Indefinido) y 'Caminaba en el parque todos los días' (Pretérito Imperfecto)?",
          "options": [
            "'Caminé' es un evento puntual y terminado en un momento específico; 'caminaba' es un hábito continuo o rutina repetida en el pasado (#ScienceOfLearning)",
            "'Caminaba' es una pregunta",
            "'Caminé' es presente y 'caminaba' es futuro",
            "No hay ninguna diferencia"
          ],
          "answerIndex": 0,
          "explanation": "Pretérito Indefinido marks completed single events; Imperfecto marks ongoing habitual past routines.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa: 'Mis hermanos siempre _______ (jugar) al fútbol después del colegio.'",
          "options": [
            "jugaste",
            "jugó",
            "jugaba",
            "jugaban"
          ],
          "answerIndex": 3,
          "explanation": "'Mis hermanos' = ellos -> jugaban.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Verdadero o falso: En el imperfecto de verbos -ar, las formas de 'yo' y 'él/ella' son exactamente iguales.",
          "options": [
            "Verdadero (ambas terminan en -aba)",
            "Falso"
          ],
          "answerIndex": 0,
          "explanation": "Both 'yo' and 'él/ella' share the identical '-aba' ending.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 3: Foundational & Structural Mastery (Cuando era niño, jugaba en el )"
  },
  "es-u10-l4": {
    "id": "es-u10-l4",
    "unit": "es-u10",
    "level": "A2",
    "objective": "Conjugate regular -er/-ir verbs (-ía, -ías, -ía, -íamos, -íais, -ían) and the three unique irregular verbs (ser, ir, ver) in the Imperfect Past Tense to describe past states and memories.",
    "presentation": {
      "explanation": "In this lesson, we complete the Imperfect Tense with **-er/-ir verbs** and the only **3 irregular verbs in the entire Spanish language** for this tense:\n\n1. Regular `-er` and `-ir` Imperfect Endings:\n   - *ALL endings carry a written accent on the letter 'í'!*:\n     - **yo**: *-ía* (com**ía**, viv**ía**)\n     - **tú**: *-ías* (com**ías**, viv**ías**)\n     - **él / ella / usted**: *-ía* (com**ía**, viv**ía**)\n     - **nosotros / nosotras**: *-íamos* (com**íamos**, viv**íamos**)\n     - **vosotros / vosotras**: *-íais* (com**íais**, viv**íais**)\n     - **ellos / ellas / ustedes**: *-ían* (com**ían**, viv**ían**)\n\n2. The 3 Irregular Verbs (The ONLY 3 in Spanish Imperfect!):\n   - **SER (to be)**: *era, eras, era, éramos, erais, eran* (I was / used to be)\n   - **IR (to go)**: *iba, ibas, iba, íbamos, ibais, iban* (I used to go / was going)\n   - **VER (to see)**: *veía, veías, veía, veíamos, veíais, veían* (I used to see / was watching)\n\n3. High-Value Memory Triggers:\n   - *Antes vivía en Madrid y era muy feliz.* (Before, I lived in Madrid and was very happy.)\n   - *Los domingos íbamos a casa de mis abuelos.* (On Sundays we used to go to my grandparents' house.)",
      "examples": [
        {
          "target": "De niña, mi hermana leía muchos libros de aventuras.",
          "reading": "deh NEE-nyah, mee ehr-MAH-nah leh-EE-ah MOO-chohs LEE-brohs deh ah-behn-TOO-rahs",
          "translation": "As a girl, my sister used to read many adventure books."
        },
        {
          "target": "Éramos muy amigos y siempre íbamos al cine juntos.",
          "reading": "EH-rah-mohs MWEE ah-MEE-gohs ee SYEHM-preh EE-bah-mohs ahl SEE-neh HOON-tohs",
          "translation": "We were close friends and always used to go to the movies together."
        }
      ],
      "mnemonics": [
        "-ER/-IR IMPERFECT IS THE 'ÍA' TENSE: -ía, -ías, -ía, -íamos, -íais, -ían (tilde on every 'í')!",
        "ONLY 3 IRREGULARS EXIST: SER (era), IR (iba), VER (veía)!",
        "ÉRAMOS & ÍBAMOS CARRY TILDES: Written accents on first vowel in nosotros!"
      ],
      "culturalNotes": [
        "Because Spanish has only 3 irregular verbs in the imperfect (compared to dozens in the preterite), the imperfect is celebrated by learners as the most predictable and friendly past tense in Romance languages."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuáles son los tres ÚNICOS verbos irregulares en pretérito imperfecto en español?",
          "options": [
            "ESTAR, PODER y PONER (49.1)",
            "SER, IR y VER (49.2)",
            "DECIR, QUERER y SABER (49.3)",
            "HABER, TENER y HACER (49.4)"
          ],
          "answerIndex": 1,
          "explanation": "Ser (era), Ir (iba), and Ver (veía) are the only 3 irregular imperfect verbs."
        },
        {
          "prompt": "Conjuga 'vivir' para 'nosotros' en imperfecto:",
          "options": [
            "Vivíamos (con tilde en la 'í')",
            "Vivimos",
            "Vivieron",
            "Vivabamos"
          ],
          "answerIndex": 0,
          "explanation": "-er/-ir verbs take -íamos: vivíamos."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce: 'When I was young, I used to go to the mountains every summer.'",
          "options": [
            "Cuando era joven, iba a la montaña cada verano. (49.1)",
            "Cuando sea joven, iré a la montaña. (49.2)",
            "Cuando fui joven, fui a la montaña ayer. (49.3)",
            "Cuando soy joven, voy a la montaña mañana. (49.4)"
          ],
          "answerIndex": 0,
          "explanation": "'Era' (ser) and 'iba' (ir) in imperfect describe past age and repeated summer habit."
        },
        {
          "prompt": "¿Cuál es la forma correcta de 'ver' para 'tú' en imperfecto?",
          "options": [
            "Veías",
            "Ves",
            "Viste",
            "Vías"
          ],
          "answerIndex": 0,
          "explanation": "Ver preserves the 'e': tú veías."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Empareja los verbos irregulares en imperfecto con sus formas de 'yo': SER, IR, VER:",
          "options": [
            "SER: era | IR: iba | VER: veía",
            "SER: fui | IR: fui | VER: vi",
            "SER: seré | IR: iré | VER: veré",
            "SER: soy | IR: voy | VER: veo"
          ],
          "answerIndex": 0,
          "explanation": "Imperfect irregular forms matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Conjuga 'tener' para 'ellos' en imperfecto:",
          "options": [
            "Tienen",
            "Tuvieron",
            "Tenaban",
            "Tenían"
          ],
          "answerIndex": 3,
          "explanation": "Tener is regular in the imperfect: tenían.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Por qué todas las formas regulares de -er e -ir en imperfecto llevan tilde escrita en la 'í'?",
          "options": [
            "Solo se pone tilde en España",
            "Es un adorno decorativo",
            "Para romper el diptongo y mantener el acento prosódico en la vocal cerrada /i/ (-í-a, -í-as, -í-amos) (#ScienceOfLearning)",
            "Para distinguirlas del francés"
          ],
          "answerIndex": 2,
          "explanation": "The tilde creates a hiatus, placing stress squarely on the /i/.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa: 'En aquella época, nosotros _______ (ser) muy jóvenes y _______ (vivir) en el campo.'",
          "options": [
            "fuimos / vivimos",
            "éramos / vivíamos",
            "somos / vivimos",
            "seremos / viviremos"
          ],
          "answerIndex": 1,
          "explanation": "Éramos (ser) and vivíamos (vivir) describe past state and residence.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 4: Foundational & Structural Mastery (De niña, mi hermana leía mucho)"
  },
  "es-u10-l5": {
    "id": "es-u10-l5",
    "unit": "es-u10",
    "level": "A2",
    "objective": "Synthesize household vocabulary, chore collocations, and regular/irregular imperfect verb conjugations to author and present a complete descriptive essay comparing childhood homes and daily routines with modern life.",
    "presentation": {
      "explanation": "In this **A2 Milestone Checkpoint for Unit 10**, you integrate all vocabulary, grammar, and cultural tools to describe **Childhood Homes, Nostalgia, & Daily Past Life (Mi casa de la infancia y mi vida pasada)**:\n\n1. The Grand Integration Narrative:\n   - *\"Cuando era pequeño, vivía con mi familia en una casa antigua en el pueblo. Nuestra casa tenía dos plantas, cuatro dormitorios y una cocina luminosa con una mesa de madera donde comíamos todos juntos. Mi dormitorio estaba en la planta de arriba y tenía un balcón con vistas al jardín. Todos los sábados por la mañana, mi hermano y yo ayudábamos con las tareas del hogar: yo limpiaba mi habitación y sacaba la basura, y él pasaba la aspiradora por el salón. Por las tardes, íbamos al parque a jugar con los amigos del barrio. Ahora vivo en un apartamento moderno en la ciudad, pero siempre recuerdo con cariño cómo era la vida entonces.\"*\n\n2. Key Functional Competencies Verified:\n   - Describing rooms, furniture, and layouts.\n   - Detailing daily chore routines.\n   - Seamlessly deploying -ar (-aba) and -er/-ir (-ía) imperfect verbs alongside *era* and *iba*.",
      "examples": [
        {
          "target": "Integration Essay: Describing childhood house rooms, furniture layout, weekly chore distribution, and nostalgic memories using imperfect tenses.",
          "reading": "A2 Milestone Synthesis",
          "translation": "Complete past routine description."
        },
        {
          "target": "Comparison: 'Antes vivía en una casa grande, pero ahora vivo en un piso céntrico.'",
          "reading": "Past vs Present Contrast",
          "translation": "Temporal lifestyle contrast."
        }
      ],
      "mnemonics": [
        "A2 UNIT 10 COMPLETE: Home, Chores, and Imperfect Tenses mastered!",
        "CONTRAST PAST AND PRESENT: 'Antes jugaba... ahora trabajo...'",
        "IMPERFECT BRINGS MEMORIES TO LIFE: Paints the nostalgic background of your story!"
      ],
      "culturalNotes": [
        "Reminiscing about childhood ('recordar la infancia') and comparing urban apartment living with rural family homes ('la casa del pueblo') is one of the most beloved conversational themes in the Spanish-speaking world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "En el texto de síntesis, ¿dónde estaba ubicado el dormitorio del narrador?",
          "options": [
            "En la planta de arriba, con un balcón con vistas al jardín (50.1)",
            "En el sótano (50.2)",
            "En la cocina (50.3)",
            "En el garaje (50.4)"
          ],
          "answerIndex": 0,
          "explanation": "Text states: 'Mi dormitorio estaba en la planta de arriba y tenía un balcón con vistas al jardín'."
        },
        {
          "prompt": "¿Qué tareas domésticas realizaba el narrador los sábados por la mañana?",
          "options": [
            "Limpiaba su habitación y sacaba la basura",
            "Cocinaba para 20 personas",
            "Pintaba las paredes",
            "Dormía todo el día"
          ],
          "answerIndex": 0,
          "explanation": "Text states: 'yo limpiaba mi habitación y sacaba la basura'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce al español: 'Before, we used to live in a small village and we were very happy.'",
          "options": [
            "Ahora vivimos en un pueblo pequeño hoy. (50.1)",
            "Antes vivíamos en un pueblo pequeño y éramos muy felices. (50.2)",
            "Mañana viviremos en un pueblo feliz. (50.3)",
            "Antes vivimos en una ciudad grande ayer. (50.4)"
          ],
          "answerIndex": 1,
          "explanation": "Vivíamos and éramos correctly translate past habitual living and state."
        },
        {
          "prompt": "¿Qué conector temporal es ideal para contrastar una rutina pasada con el presente?",
          "options": [
            "'Nunca... jamás...'",
            "'Antes... pero ahora...' (e.g. 'Antes jugaba mucho, pero ahora no tengo tiempo')",
            "'Pronto... quizás...'",
            "'Ayer... mañana...'"
          ],
          "answerIndex": 1,
          "explanation": "'Antes... pero ahora...' is the classic contrast structure between past imperfect and present."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué competencias principales se consolidaron a lo largo de la Unidad 10 de Español?",
          "options": [
            "Conjugación del futuro simple solamente",
            "Solo vocabulario de animales",
            "Números del 1 al 10 solamente",
            "Vocabulario completo de habitaciones y muebles, colocaciones de tareas domésticas (limpiar, fregar, pasar la aspiradora), conjugación del pretérito imperfecto regular (-aba, -ía), verbos irregulares (era, iba, veía), y redacción de ensayos descriptivos de la infancia y rutinas pasadas"
          ],
          "answerIndex": 3,
          "explanation": "Comprehensive Unit 10 competencies certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Conjuga en imperfecto: 'Mi abuela siempre me _______ (preparar) chocolate caliente cuando _______ (hacer) frío.'",
          "options": [
            "prepara / hace",
            "preparó / hizo",
            "preparaba / hacía",
            "preparará / hará"
          ],
          "answerIndex": 2,
          "explanation": "Preparaba (-ar) and hacía (-er) describe habitual care and past weather condition.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Por qué el Pretérito Imperfecto es fundamental para alcanzar el nivel intermedio (B1/B2)?",
          "options": [
            "Porque sustituye a todos los demás tiempos verbales",
            "Porque permite construir narrativas complejas entrelazando acciones puntuales (indefinido) con descripciones, hábitos y estados de fondo (imperfecto) (#ScienceOfLearning)",
            "Porque solo se usa en libros antiguos",
            "Porque no tiene reglas gramaticales"
          ],
          "answerIndex": 1,
          "explanation": "The imperfect is the narrative backbone of descriptive background and past routines.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa el refrán hispano: 'Recordar es volver a _______.'",
          "options": [
            "vivir",
            "comer",
            "dormir",
            "llorar"
          ],
          "answerIndex": 0,
          "explanation": "'Recordar es volver a vivir' (To remember is to live again).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 5: Foundational & Structural Mastery (Integration Essay: Describing )"
  },
  "es-u11-l1": {
    "id": "es-u11-l1",
    "unit": "es-u11",
    "level": "A2",
    "objective": "Identificar y nombrar las partes principales del cuerpo humano en español.",
    "presentation": {
      "explanation": "Vocabulario esencial del cuerpo humano (sustantivos masculinos y femeninos):\n- La cabeza (Head)\n- Los ojos (Eyes) / La nariz (Nose) / La boca (Mouth) / Las orejas (Ears)\n- El cuello (Neck) / Los hombros (Shoulders) / El pecho (Chest)\n- Los brazos (Arms) / Las manos (Hands) / Los dedos (Fingers)\n- El estómago / La barriga (Stomach)\n- La espalda (Back)\n- Las piernas (Legs) / Las rodillas (Knees) / Los pies (Feet)",
      "examples": [
        {
          "target": "Tengo dos ojos, dos orejas y una boca.",
          "reading": "TEN-go dos O-khos, dos o-RE-khas ee OO-na BO-ka",
          "translation": "I have two eyes, two ears, and one mouth."
        },
        {
          "target": "Me lavo las manos con agua y jabón.",
          "reading": "me LA-vo las MA-nos kon AH-gwa ee kha-BON",
          "translation": "I wash my hands with water and soap."
        }
      ],
      "mnemonics": [
        "Cabeza (head), hombros (shoulders), rodillas (knees) y pies (feet) - same rhyme as English!",
        "La mano is feminine despite ending in -o!"
      ],
      "culturalNotes": [
        "In Spanish, we generally use definite articles (el/la/los/las) instead of possessive pronouns with body parts when the subject is obvious: \"Me lavo las manos\" (not \"mis manos\")."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la palabra para \"stomach / belly\"?",
          "options": [
            "La pierna (51.1)",
            "El ojo (51.2)",
            "El brazo (51.3)",
            "El estómago (51.4)"
          ],
          "answerIndex": 3,
          "explanation": "El estómago significa stomach."
        },
        {
          "prompt": "Completa: \"Me duele la ______\" (Head).",
          "options": [
            "espalda",
            "mano",
            "rodilla",
            "cabeza"
          ],
          "answerIndex": 3,
          "explanation": "Cabeza = head."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué artículo correcto lleva \"mano\"?",
          "options": [
            "El mano (51.1)",
            "Los mano (51.2)",
            "Un mano (51.3)",
            "La mano (femenino) (51.4)"
          ],
          "answerIndex": 3,
          "explanation": "Mano is a feminine noun taking \"la\"."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Traduce: \"My back hurts\" (Usa la estructura reflexiva con artículo definido).",
          "options": [
            "Duele mi espalda",
            "Tengo dolor mi espalda",
            "Me duele la espalda",
            "La espalda es doler"
          ],
          "answerIndex": 2,
          "explanation": "Me duele la espalda is the natural Spanish formulation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cuáles de estos son parte de la cara?",
          "options": [
            "Piernas, pies, rodillas",
            "Ojos, nariz, boca, orejas",
            "Espalda y estómago",
            "Hombros, codos, brazos"
          ],
          "answerIndex": 1,
          "explanation": "Ojos, nariz, boca, orejas are all facial features.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 1: Foundational & Structural Mastery (Tengo dos ojos, dos orejas y u)"
  },
  "es-u11-l2": {
    "id": "es-u11-l2",
    "unit": "es-u11",
    "level": "A2",
    "objective": "Expresar dolor, malestar físico y síntomas usando el verbo doler y tener.",
    "presentation": {
      "explanation": "Estructura gramatical del verbo DOLER (funciona como gustar):\n- (A mí) me duele + sustantivo singular (\"Me duele la cabeza\")\n- (A mí) me duelen + sustantivo plural (\"Me duelen los pies\")\n- A ti te duele(n) / A él/ella le duele(n) / A nosotros nos duele(n)\n\nExpresiones con TENER para síntomas:\n- Tener fiebre (To have a fever)\n- Tener tos (To have a cough)\n- Tener gripe / resfriado (To have the flu / a cold)\n- Tener mareos / estar mareado (To feel dizzy)",
      "examples": [
        {
          "target": "Me duelen mucho los ojos después de trabajar frente a la pantalla.",
          "reading": "me DWE-len MOO-cho los O-khos des-PWES de tra-ba-KHAR FREN-te a la pan-TA-ya",
          "translation": "My eyes hurt a lot after working in front of the screen."
        },
        {
          "target": "Tengo fiebre alta y mucho dolor de garganta.",
          "reading": "TEN-go FYE-bre AL-ta ee MOO-cho do-LOR de gar-GAN-ta",
          "translation": "I have a high fever and a severe sore throat."
        }
      ],
      "mnemonics": [
        "Singular body part = duele",
        "Plural body parts = duelen"
      ],
      "culturalNotes": [
        "In Spain and Latin America, expressing physical symptoms clearly at the pharmacy (farmacia) often allows pharmacists to recommend effective over-the-counter remedies."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Elige la forma correcta: \"A Juan ______ las rodillas.\"",
          "options": [
            "le duelen (52.1)",
            "duelen (52.2)",
            "le duele (52.3)",
            "se duele (52.4)"
          ],
          "answerIndex": 0,
          "explanation": "Rodillas is plural, so use \"le duelen\"."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se dice \"I have a cough and fever\"?",
          "options": [
            "Tengo tos y fiebre (52.1)",
            "Me duele tos y fiebre (52.2)",
            "Estoy tos y fiebre (52.3)",
            "Hago tos y fiebre (52.4)"
          ],
          "answerIndex": 0,
          "explanation": "Tengo tos y fiebre uses the standard \"tener\" construct."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Completa: \"¿A ti te ______ el estómago?\"",
          "options": [
            "doliendo",
            "duele",
            "duele a ti",
            "duelen"
          ],
          "answerIndex": 1,
          "explanation": "El estómago is singular, so \"duele\" is correct.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"His legs hurt\"",
          "options": [
            "Le duelen las piernas",
            "Duele sus piernas",
            "Tiene piernas dolidas",
            "Se duele las piernas"
          ],
          "answerIndex": 0,
          "explanation": "Le duelen las piernas is grammatically precise.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 2: Foundational & Structural Mastery (Me duelen mucho los ojos despu)"
  },
  "es-u11-l3": {
    "id": "es-u11-l3",
    "unit": "es-u11",
    "level": "A2",
    "objective": "Navegar interacciones en la farmacia y pedir medicamentos en español.",
    "presentation": {
      "explanation": "Vocabulario clave en la farmacia:\n- El medicamento / La medicina (Medicine)\n- Las pastillas / comprimidos (Pills / Tablets)\n- El jarabe para la tos (Cough syrup)\n- La receta médica (Prescription)\n- El analgésico / calmante (Painkiller)\n- Los antibióticos (Antibiotics)\n\nFrases útiles:\n- \"¿Tiene algo para el dolor de garganta?\" (Do you have something for a sore throat?)\n- \"¿Cómo debo tomar este medicamento?\" (How should I take this medication?)\n- \"Tomar una pastilla cada ocho horas con agua.\" (Take one pill every eight hours with water.)",
      "examples": [
        {
          "target": "Buenas tardes, necesito un jarabe para la tos seca.",
          "reading": "BWE-nas TAR-des, ne-se-SEE-to oon kha-RA-be PA-ra la tos SE-ka",
          "translation": "Good afternoon, I need a syrup for dry cough."
        },
        {
          "target": "Debe tomar este antibiótico cada ocho horas durante una semana.",
          "reading": "DE-be to-MAR ES-te an-tee-BYO-tee-ko KA-da O-cho O-ras doo-RAN-te OO-na se-MA-na",
          "translation": "You must take this antibiotic every eight hours for one week."
        }
      ],
      "mnemonics": [
        "Pastilla = Pastille/Pill",
        "Jarabe = Syrup (from Arabic sharāb)"
      ],
      "culturalNotes": [
        "Pharmacies in the Hispanic world are easily identified by a glowing green or red cross sign outside, and many operate 24-hour shifts called \"farmacias de guardia\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué significa \"una pastilla cada 8 horas\"?",
          "options": [
            "8 pills once a day (53.1)",
            "One pill after 8 days (53.2)",
            "One pill every 8 hours (53.3)",
            "8 drops every hour (53.4)"
          ],
          "answerIndex": 2,
          "explanation": "Cada 8 horas means every 8 hours."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo pides algo para el dolor de cabeza?",
          "options": [
            "¿Tiene algo para el dolor de cabeza? (53.1)",
            "Quiero cabeza sin dolor (53.2)",
            "¿Dónde está cabeza dolor? (53.3)",
            "Dame pastilla cabeza ahora (53.4)"
          ],
          "answerIndex": 0,
          "explanation": "Polite and natural phrasing at the pharmacy counter."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué documento oficial emite el médico para comprar medicamentos regulados?",
          "options": [
            "La receta médica",
            "La factura de luz",
            "El menú del día",
            "La tarjeta de embarque"
          ],
          "answerIndex": 0,
          "explanation": "La receta médica is the doctor prescription.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Take this syrup before going to sleep.\"",
          "options": [
            "Coma este pastilla después de dormir.",
            "Beba esta agua por la mañana.",
            "Ponga la crema en la cama.",
            "Tome este jarabe antes de dormir."
          ],
          "answerIndex": 3,
          "explanation": "Tome este jarabe antes de dormir is accurate.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 3: Foundational & Structural Mastery (Buenas tardes, necesito un jar)"
  },
  "es-u11-l4": {
    "id": "es-u11-l4",
    "unit": "es-u11",
    "level": "A2",
    "objective": "Describir hábitos de vida saludable, nutrición equilibrada y actividad física.",
    "presentation": {
      "explanation": "Vocabulario y verbos de bienestar:\n- Mantenerse en forma (To stay in shape)\n- Hacer ejercicio / deporte (To exercise / do sports)\n- Comer una dieta equilibrada (To eat a balanced diet)\n- Beber suficiente agua (To drink enough water)\n- Dormir ocho horas diarias (To sleep 8 hours daily)\n- Evitar el estrés y la comida rápida (To avoid stress and fast food)\n- Estar sano / saludable (To be healthy)",
      "examples": [
        {
          "target": "Para tener buena salud, es importante caminar al menos treinta minutos al día.",
          "reading": "PA-ra te-NER BWE-na sa-LOOD, es eem-por-TAN-te ka-mee-NAR al ME-nos TRAYN-ta mee-NOO-tos al DEE-ah",
          "translation": "To have good health, it is important to walk at least 30 minutes a day."
        },
        {
          "target": "Como muchas frutas y verduras frescas y duermo bien por la noche.",
          "reading": "KO-mo MOO-chas FROO-tas ee ver-DOO-ras FRES-kas ee DWER-mo byen por la NO-che",
          "translation": "I eat many fresh fruits and vegetables and sleep well at night."
        }
      ],
      "mnemonics": [
        "Salud = Health (also said after someone sneezes: ¡Salud!)",
        "Sano / Sana = Sane/Sound/Healthy"
      ],
      "culturalNotes": [
        "The Mediterranean diet (la dieta mediterránea)—rich in olive oil, fresh fish, legumes, and seasonal produce—is celebrated across Spain as a foundation of longevity."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué significa \"mantenerse en forma\"?",
          "options": [
            "To gain weight quickly (54.1)",
            "To stay in shape / keep fit (54.2)",
            "To sleep all day (54.3)",
            "To sit on a chair (54.4)"
          ],
          "answerIndex": 1,
          "explanation": "Mantenerse en forma means staying physically fit."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Completa con el verbo adecuado: \"Es necesario ______ al menos dos litros de agua al día.\"",
          "options": [
            "beber (54.1)",
            "dormir (54.2)",
            "comer (54.3)",
            "correr (54.4)"
          ],
          "answerIndex": 0,
          "explanation": "Beber agua = to drink water."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuáles de estos son hábitos saludables?",
          "options": [
            "Fumar y ver televisión todo el día",
            "Comer comida chatarra y no dormir",
            "No beber agua nunca",
            "Hacer deporte regularmente y comer fruta"
          ],
          "answerIndex": 3,
          "explanation": "Regular sports and fruit consumption are healthy habits.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Good sleep is essential for physical recovery.\"",
          "options": [
            "Caminar en la noche cansa.",
            "El sueño no importa para el cuerpo.",
            "Dormir bien es fundamental para la recuperación física.",
            "Comer mucho es dormir."
          ],
          "answerIndex": 2,
          "explanation": "Dormir bien es fundamental para la recuperación física is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 4: Foundational & Structural Mastery (Para tener buena salud, es imp)"
  },
  "es-u11-l5": {
    "id": "es-u11-l5",
    "unit": "es-u11",
    "level": "A2",
    "objective": "Llevar a cabo una consulta médica completa y comprender diagnósticos y recomendaciones.",
    "presentation": {
      "explanation": "Guión de consulta médica práctica:\n1. Pregunta del médico:\n   - \"¿Qué le pasa?\" / \"¿Cuáles son sus síntomas?\" (What is wrong? / What are your symptoms?)\n   - \"¿Desde cuándo se siente mal?\" (Since when have you been feeling unwell?)\n2. Respuesta del paciente:\n   - \"Me siento muy débil y tengo mareos desde ayer.\" (I feel very weak and have dizziness since yesterday.)\n   - \"Me duele el pecho al respirar hondo.\" (My chest hurts when breathing deeply.)\n3. Diagnóstico y despedida:\n   - \"Tiene una pequeña infección de garganta. Le receto estos antibióticos.\"\n   - \"¡Que se mejore pronto!\" (Get well soon!)",
      "examples": [
        {
          "target": "—Buenos días doctor, me duele mucho la garganta y tengo escalofríos.\n—Vamos a examinarle. Abra la boca, por favor.",
          "reading": "BWE-nos DEE-as dok-TOR, me DWE-le MOO-cho la gar-GAN-ta ee TEN-go es-ka-lo-FREE-os. VA-mos a ek-sa-mee-NAR-le. AH-bra la BO-ka, por fa-VOR.",
          "translation": "—Good morning doctor, my throat hurts a lot and I have chills.\n—Let's examine you. Open your mouth, please."
        }
      ],
      "mnemonics": [
        "¡Que se mejore! = May you get better / Get well soon!"
      ],
      "culturalNotes": [
        "In Spain, the public healthcare system is called \"Seguridad Social\" and consultations begin at the local primary health center (Centro de Salud)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué le dice el médico al paciente al terminar la consulta para desearle pronta recuperación?",
          "options": [
            "¡Que se mejore pronto! (55.1)",
            "¡Hasta nunca! (55.2)",
            "¡Buena suerte con el dinero! (55.3)",
            "¡Coma pasteles! (55.4)"
          ],
          "answerIndex": 0,
          "explanation": "¡Que se mejore pronto! means get well soon."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo respondes a \"¿Desde cuándo le duele?\"",
          "options": [
            "Con una pastilla. (55.1)",
            "Desde hace dos días. (55.2)",
            "Por la ventana. (55.3)",
            "En el hospital. (55.4)"
          ],
          "answerIndex": 1,
          "explanation": "\"Desde hace dos días\" answers a time duration question."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "En una consulta médica, si el doctor dice \"Le voy a auscultar los pulmones\", ¿qué instrumento utiliza?",
          "options": [
            "Una calculadora",
            "Un martillo de carpintero",
            "El estetoscopio",
            "Un reloj de arena"
          ],
          "answerIndex": 2,
          "explanation": "Un estetoscopio is used to listen to the lungs and heart.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ordena la secuencia clínica lógica:",
          "options": [
            "1. Tomar pastillas -> 2. Ir al médico -> 3. Tener dolor",
            "1. Explicar síntomas -> 2. Examen físico -> 3. Diagnóstico y receta médica",
            "1. Salir del hospital -> 2. Entrar al hospital -> 3. Despertar",
            "1. Pagar cuenta -> 2. Comer comida -> 3. Pedir cita"
          ],
          "answerIndex": 1,
          "explanation": "Standard clinical consultation sequence.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 5: Foundational & Structural Mastery (—Buenos días doctor, me duele )"
  },
  "es-u12-l1": {
    "id": "es-u12-l1",
    "unit": "es-u12",
    "level": "A2",
    "objective": "Nombrar diversas profesiones y sectores laborales en español peninsular.",
    "presentation": {
      "explanation": "Vocabulario de profesiones y lugares de trabajo:\n- El ingeniero / la ingeniera (Engineer)\n- El abogado / la abogada (Lawyer)\n- El médico / la médica / enfermero/a (Doctor / Nurse)\n- El profesor / la profesora (Teacher/Professor)\n- El informático / la informática / programador/a (IT specialist / Programmer)\n- El arquitecto / la arquitecta (Architect)\n- El dependiente / la dependienta (Shop clerk)\n\nEstructura:\n- \"Trabajo como [profesión] en una empresa multinacional / en un hospital / en un colegio.\"",
      "examples": [
        {
          "target": "Soy informática y trabajo en una empresa de desarrollo de software en Madrid.",
          "reading": "soy in-for-MA-tee-ka ee tra-BA-kho en OO-na em-PRE-sa de de-sa-RRO-yo de SOFT-wayr en ma-DREED",
          "translation": "I am an IT specialist and work at a software development company in Madrid."
        }
      ],
      "mnemonics": [
        "Notice that in Spanish, we do NOT use an article with SER + profession: \"Soy médico\" (not \"Soy un médico\")."
      ],
      "culturalNotes": [
        "In Spain, the tech ecosystem in Madrid and Barcelona (22@ district) has grown rapidly, with startup hubs and co-working offices."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se dice correctamente \"I am an engineer\" en español?",
          "options": [
            "Soy un ingeniero (56.1)",
            "Tengo ingeniero (56.2)",
            "Estoy ingeniero (56.3)",
            "Soy ingeniero / ingeniera (56.4)"
          ],
          "answerIndex": 3,
          "explanation": "SER + profession without indefinite article is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce: \"She works as a lawyer in a law firm.\"",
          "options": [
            "Es médica en un colegio. (56.1)",
            "Compra casas en la playa. (56.2)",
            "Come pan con queso. (56.3)",
            "Trabaja como abogada en un bufete. (56.4)"
          ],
          "answerIndex": 3,
          "explanation": "Trabaja como abogada en un bufete is exact."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llama el lugar de trabajo de un abogado?",
          "options": [
            "Un quirófano",
            "Un bufete de abogados",
            "Un taller",
            "Una panadería"
          ],
          "answerIndex": 1,
          "explanation": "Bufete is a law firm/office.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa: \"Mi hermano es informático y trabaja en ______.\"",
          "options": [
            "una empresa de tecnología",
            "una montaña",
            "un bosque",
            "un barco pesquero"
          ],
          "answerIndex": 0,
          "explanation": "Tech companies employ informáticos.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 1: Foundational & Structural Mastery (Soy informática y trabajo en u)"
  },
  "es-u12-l2": {
    "id": "es-u12-l2",
    "unit": "es-u12",
    "level": "A2",
    "objective": "Describir la rutina laboral diaria y responsabilidades de oficina.",
    "presentation": {
      "explanation": "Acciones y responsabilidades cotidianas en el trabajo:\n- Enviar correos electrónicos / redactar informes (Send emails / write reports)\n- Tener una reunión con el equipo / con los clientes (Have a meeting)\n- Atender llamadas telefónicas (Answer phone calls)\n- Gestionar proyectos y resolver incidencias (Manage projects & fix issues)\n- Hacer una pausa para el café (Take a coffee break)\n- Trabajar en remoto / teletrabajar (Work remotely / telecommute)",
      "examples": [
        {
          "target": "Todos los lunes a las diez de la mañana tenemos una reunión de equipo para revisar los objetivos.",
          "reading": "TO-dos los LOO-nes a las DYEZ de la man-YA-na te-NE-mos OO-na rew-NYON de e-KEE-po PA-ra re-vee-SAR los ob-khe-TEE-vos",
          "translation": "Every Monday at ten in the morning we have a team meeting to review goals."
        }
      ],
      "mnemonics": [
        "Teletrabajo = Telecommuting / Remote work!"
      ],
      "culturalNotes": [
        "The Spanish \"pausa para el café\" at 11:00 AM is a social workplace ritual for connecting with colleagues over coffee."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué significa \"trabajar en remoto\" o \"teletrabajar\"?",
          "options": [
            "To work from home / remotely using a computer (57.1)",
            "To sleep at the office (57.2)",
            "To travel abroad without work (57.3)",
            "To quit one's job (57.4)"
          ],
          "answerIndex": 0,
          "explanation": "Teletrabajar means remote work."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo dices \"I have to write an urgent report\"?",
          "options": [
            "Tengo que redactar un informe urgente. (57.1)",
            "Quiero comer una ensalada. (57.2)",
            "Voy a ver una película. (57.3)",
            "El informe es azul. (57.4)"
          ],
          "answerIndex": 0,
          "explanation": "Tengo que redactar un informe urgente is exact."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿A qué hora suele hacerse la pausa del café en las oficinas españolas?",
          "options": [
            "A media mañana (hacia las 10:30 - 11:00)",
            "A las seis de la mañana",
            "A las ocho de la tarde",
            "A medianoche"
          ],
          "answerIndex": 0,
          "explanation": "Mid-morning coffee pause.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"We have an important videoconference with clients this afternoon.\"",
          "options": [
            "No tengo ordenador.",
            "El cliente vive en el campo.",
            "Ayer comimos paella.",
            "Esta tarde tenemos una videoconferencia importante con clientes."
          ],
          "answerIndex": 3,
          "explanation": "Accurate business translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 2: Foundational & Structural Mastery (Todos los lunes a las diez de )"
  },
  "es-u12-l3": {
    "id": "es-u12-l3",
    "unit": "es-u12",
    "level": "A2",
    "objective": "Vocabulario informático, dispositivos y herramientas digitales en la oficina.",
    "presentation": {
      "explanation": "Herramientas tecnológicas e informática en España:\n- El ordenador portátil / de sobremesa (Laptop / Desktop PC)\n- La pantalla / el teclado / el ratón (Screen / Keyboard / Mouse)\n- La contraseña / el usuario (Password / Username)\n- El archivo adjunto / la carpeta (Attachment / Folder)\n- Guardar los cambios en la nube (Save changes to the cloud)\n- Descargar un archivo / subir un documento (Download / Upload)\n- La conexión a internet / la red wifi (Internet connection / Wi-Fi)",
      "examples": [
        {
          "target": "Te he enviado el presupuesto en un archivo adjunto en formato PDF.",
          "reading": "te e en-VYA-do el pre-soo-PWES-to en oon ar-CHEE-vo ad-KHOON-to en for-MA-to pe-de-E-fe",
          "translation": "I have sent you the quote in an attached PDF file."
        }
      ],
      "mnemonics": [
        "In Spain: \"el ordenador\" (computer) and \"el ratón\" (mouse)!"
      ],
      "culturalNotes": [
        "In Spain, computer is called \"el ordenador\", whereas in Latin America it is known as \"la computadora\" or \"el computador\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama en España a una computadora portátil?",
          "options": [
            "Una máquina de escribir (58.1)",
            "Un televisor (58.2)",
            "Un ordenador portátil (58.3)",
            "Una radio (58.4)"
          ],
          "answerIndex": 2,
          "explanation": "Ordenador portátil is standard Peninsular Spanish."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué debes hacer para no perder tu trabajo en el ordenador?",
          "options": [
            "Guardar los cambios (58.1)",
            "Apagar la pantalla sin guardar (58.2)",
            "Tirar el ratón (58.3)",
            "Borrar el archivo (58.4)"
          ],
          "answerIndex": 0,
          "explanation": "Guardar los cambios preserves work."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué significa \"subir un archivo a la nube\"?",
          "options": [
            "To throw a piece of paper in the sky",
            "To delete a hard drive",
            "To print on paper",
            "To upload a file to cloud storage"
          ],
          "answerIndex": 3,
          "explanation": "Upload to cloud storage.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Please enter your username and password to log in.\"",
          "options": [
            "La pantalla está sucia.",
            "El ratón no tiene queso.",
            "Por favor, introduce tu usuario y contraseña para iniciar sesión.",
            "Compra un nuevo ordenador."
          ],
          "answerIndex": 2,
          "explanation": "Accurate digital interface instruction.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 3: Foundational & Structural Mastery (Te he enviado el presupuesto e)"
  },
  "es-u12-l4": {
    "id": "es-u12-l4",
    "unit": "es-u12",
    "level": "A2",
    "objective": "Redactar correos electrónicos formales de trabajo y correspondencia profesional.",
    "presentation": {
      "explanation": "Estructura de un email profesional en España:\n1. Saludos formales:\n   - Estimado/a Sr./Sra. [Apellido]: (Dear Mr./Ms. [Last Name])\n   - Estimados compañeros: (Dear colleagues)\n2. Motivo del correo:\n   - Le escribo para informarle sobre... (I am writing to inform you about...)\n   - En relación con nuestra conversación telefónica... (Regarding our call...)\n   - Adjunto le remito el documento solicitado. (Attached please find...)\n3. Despedidas formales:\n   - Quedo a su disposición para cualquier duda. (I remain at your disposal...)\n   - Atentamente, / Un cordial saludo, (Sincerely, / Kind regards,)",
      "examples": [
        {
          "target": "Estimada Sra. Gómez:\nLe adjunto el informe trimestral revisado. Quedo a su disposición para cualquier consulta.\nUn cordial saludo,\nDavid García",
          "reading": "Correo profesional español",
          "translation": "Formal business email format in Spanish."
        }
      ],
      "mnemonics": [
        "Un cordial saludo = The quintessential polite closing in Spanish business correspondence!"
      ],
      "culturalNotes": [
        "Spanish business emails maintain a polite yet concise tone, using the formal pronoun \"usted\" until personal familiarity is explicitly established."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es una fórmula de despedida formal y común en un correo comercial?",
          "options": [
            "Nos vemos luego tío (59.1)",
            "Un cordial saludo, / Atentamente, (59.2)",
            "Hasta nunca (59.3)",
            "¡Chao pescao! (59.4)"
          ],
          "answerIndex": 1,
          "explanation": "Un cordial saludo is formal and professional."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se inicia un email formal dirigido al Sr. Martínez?",
          "options": [
            "Estimado Sr. Martínez: (59.1)",
            "¿Quién eres? (59.2)",
            "¡Hola qué pasa Martínez! (59.3)",
            "Oye tú: (59.4)"
          ],
          "answerIndex": 0,
          "explanation": "Estimado Sr. Martínez is standard formal address."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué frase utilizas para indicar que envías un documento adjunto?",
          "options": [
            "El documento está en mi casa.",
            "Ayer llovió mucho.",
            "Adjunto le remito el documento solicitado.",
            "No tengo ningún papel."
          ],
          "answerIndex": 2,
          "explanation": "Adjunto le remito... indicates attachments.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"I look forward to hearing from you soon.\"",
          "options": [
            "No quiero saber nada.",
            "Quedo a la espera de sus noticias.",
            "El teléfono no funciona.",
            "El tren llega tarde."
          ],
          "answerIndex": 1,
          "explanation": "Quedo a la espera de sus noticias is standard.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 4: Foundational & Structural Mastery (Estimada Sra. Gómez:\nLe adjunt)"
  },
  "es-u12-l5": {
    "id": "es-u12-l5",
    "unit": "es-u12",
    "level": "A2",
    "objective": "Simular una entrevista de trabajo en español y hablar de experiencia profesional y competencias.",
    "presentation": {
      "explanation": "La entrevista de trabajo (Job interview):\n1. Preguntas del entrevistador:\n   - \"¿Podría hablarnos de su experiencia profesional?\"\n   - \"¿Cuáles son sus principales puntos fuertes?\"\n   - \"¿Por qué le interesa este puesto en nuestra empresa?\"\n2. Respuestas del candidato:\n   - \"Tengo cinco años de experiencia en gestión de proyectos y desarrollo web.\"\n   - \"Me considero una persona proactiva, con capacidad para trabajar en equipo y resolver problemas complejos.\"\n   - \"Tengo nivel avanzado de inglés y manejo de herramientas ágiles (Scrum).\"",
      "examples": [
        {
          "target": "Entrevistador: \"¿Por qué decidió postularse a esta oferta?\"\nCandidato: \"Porque comparto los valores de innovación de la empresa y cuento con la experiencia técnica necesaria.\"",
          "reading": "Entrevista laboral española",
          "translation": "Interviewer: \"Why did you decide to apply for this job?\"\nCandidate: \"Because I share the company's values of innovation and have the required technical expertise.\""
        }
      ],
      "mnemonics": [
        "Puntos fuertes = Strengths / Key competencies!"
      ],
      "culturalNotes": [
        "In Spain, candidates typically submit a standardized EU format CV (Europass) or a clean 1-page modern resume highlighting hard skills and measurable impact."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué significa \"trabajar en equipo\"?",
          "options": [
            "To collaborate effectively with colleagues toward shared goals (60.1)",
            "To work alone in isolation (60.2)",
            "To avoid other workers (60.3)",
            "To play football during work (60.4)"
          ],
          "answerIndex": 0,
          "explanation": "Trabajar en equipo means teamwork."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo respondes cuando te preguntan por tu experiencia laboral?",
          "options": [
            "Ayer dormí diez horas. (60.1)",
            "Tengo experiencia en gestión de proyectos y análisis de datos. (60.2)",
            "Mi perro se llama Toby. (60.3)",
            "No me gusta trabajar. (60.4)"
          ],
          "answerIndex": 1,
          "explanation": "Professional description of relevant experience."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué documento resume tu trayectoria profesional y académica al buscar empleo?",
          "options": [
            "El pasaporte turístico",
            "El currículum vítae (CV)",
            "El recibo de la luz",
            "El menú del día"
          ],
          "answerIndex": 1,
          "explanation": "Curriculum Vitae (CV) summarizes career background.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"I am motivated to take on new technical challenges.\"",
          "options": [
            "Estoy motivado/a para asumir nuevos retos técnicos.",
            "No quiero aprender nada nuevo.",
            "La oficina está cerrada.",
            "Prefiero no trabajar."
          ],
          "answerIndex": 0,
          "explanation": "Accurate professional statement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 5: Foundational & Structural Mastery (Entrevistador: \"¿Por qué decid)"
  },
  "es-u13-l1": {
    "id": "es-u13-l1",
    "unit": "es-u13",
    "level": "A2",
    "objective": "Expresar aficiones, pasatiempos e intereses de ocio en español (Hobbies y tiempo libre).",
    "presentation": {
      "explanation": "Aficiones y tiempo libre en España:\n- Tocar un instrumento (la guitarra, el piano, la batería)\n- La fotografía y el cine (Photography & cinema)\n- La pintura y la cerámica (Painting & ceramics)\n- Leer novelas y ensayos (Reading novels and essays)\n- Hacer senderismo y escalada en la montaña (Hiking & climbing)\n- Cocinar y la gastronomía (Cooking & gastronomy)\n\nEstructuras con GUSTAR / ENCANTAR / APASIONAR:\n- \"Me apasiona la fotografía analógica.\"\n- \"En mi tiempo libre me gusta tocar la guitarra flamenca.\"",
      "examples": [
        {
          "target": "En mi tiempo libre me encanta salir a la sierra a hacer senderismo y tomar fotos.",
          "reading": "en mee TYEM-po LEE-bre me en-KAN-ta sa-LEER a la SYE-rra a a-SER sen-de-REES-mo ee to-MAR FO-tos",
          "translation": "In my free time I love going to the mountains to hike and take photos."
        }
      ],
      "mnemonics": [
        "Me apasiona = I am deeply passionate about...!"
      ],
      "culturalNotes": [
        "Hiking in national parks (Picos de Europa, Sierra de Guadarrama, Pirineos) is a beloved weekend pastime in Spain."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo expresas que te gusta mucho la fotografía?",
          "options": [
            "La fotografía es fea (61.1)",
            "No me gusta la cámara (61.2)",
            "Tengo fotografía (61.3)",
            "Me apasiona la fotografía / Me encanta la fotografía (61.4)"
          ],
          "answerIndex": 3,
          "explanation": "Me apasiona / encanta expresses strong enthusiasm."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce: \"In my free time, I like playing the classical guitar.\"",
          "options": [
            "Vendo guitarras rotas. (61.1)",
            "La música es aburrida. (61.2)",
            "No tengo tiempo libre. (61.3)",
            "En mi tiempo libre, me gusta tocar la guitarra clásica. (61.4)"
          ],
          "answerIndex": 3,
          "explanation": "En mi tiempo libre, me gusta tocar la guitarra clásica is exact."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué verbo se utiliza en español para \"to play an instrument\"?",
          "options": [
            "Tocar (la guitarra, el piano)",
            "Correr",
            "Bailar",
            "Jugar"
          ],
          "answerIndex": 0,
          "explanation": "Tocar is used for musical instruments.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completa: \"Los fines de semana voy a la montaña a hacer ______.\"",
          "options": [
            "computación",
            "oficina",
            "pesca de oficina",
            "senderismo"
          ],
          "answerIndex": 3,
          "explanation": "Hacer senderismo means hiking.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 1: Foundational & Structural Mastery (En mi tiempo libre me encanta )"
  },
  "es-u13-l2": {
    "id": "es-u13-l2",
    "unit": "es-u13",
    "level": "A2",
    "objective": "Vocabulario deportivo, partidos, entrenamiento físico y afición futbolística en España.",
    "presentation": {
      "explanation": "El deporte y la cultura deportiva en España:\n- El fútbol (Football/Soccer - LaLiga, el Real Madrid, el FC Barcelona)\n- El baloncesto (Basketball) / El tenis (Tennis - Rafa Nadal, Carlos Alcaraz)\n- El pádel (Padel - enormous amateur participation in Spain)\n- El ciclismo (Cycling - La Vuelta a España)\n- El entrenamiento en el gimnasio (Gym workouts / pesas / cardio)\n\nVocabulario de partidos:\n- El estadio / el campo de fútbol / la pista de pádel\n- Marcar un gol / empatar / ganar el partido / perder\n- El árbitro / los aficionados / la afición",
      "examples": [
        {
          "target": "Quedamos todos los jueves por la tarde para jugar un partido de pádel con los amigos.",
          "reading": "ke-DA-mos TO-dos los KHWE-ves por la TAR-de PA-ra khoo-GAR oon par-TEE-do de PA-del kon los a-MEE-gos.",
          "translation": "We meet every Thursday afternoon to play a padel match with friends."
        }
      ],
      "mnemonics": [
        "El pádel = The fastest-growing racquet sport in Spain and Europe!"
      ],
      "culturalNotes": [
        "Spain has a massive sporting heritage in football (LaLiga, World Cup champions), tennis (Roland Garros champions), and padel."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué deporte de raqueta en parejas es enormemente popular en España?",
          "options": [
            "El pádel (62.1)",
            "El cricket (62.2)",
            "El béisbol (62.3)",
            "El hockey sobre hielo (62.4)"
          ],
          "answerIndex": 0,
          "explanation": "El pádel is wildly popular."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué verbo se usa para indicar anotar en un partido de fútbol?",
          "options": [
            "Marcar un gol / Meter un gol (62.1)",
            "Comer un gol (62.2)",
            "Dormir un gol (62.3)",
            "Correr un gol (62.4)"
          ],
          "answerIndex": 0,
          "explanation": "Marcar un gol means scoring a goal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llama a los seguidores o hinchada de un club deportivo en España?",
          "options": [
            "Los árbitros",
            "Los jueces",
            "Los dependientes",
            "La afición / los aficionados"
          ],
          "answerIndex": 3,
          "explanation": "La afición are the fans/supporters.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Our team won the championship match 2-1.\"",
          "options": [
            "No jugamos al fútbol.",
            "El estadio está vacío.",
            "Nuestro equipo ganó el partido del campeonato dos a uno.",
            "Perdimos el partido ayer."
          ],
          "answerIndex": 2,
          "explanation": "Accurate sports victory translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 2: Foundational & Structural Mastery (Quedamos todos los jueves por )"
  },
  "es-u13-l3": {
    "id": "es-u13-l3",
    "unit": "es-u13",
    "level": "A2",
    "objective": "Géneros musicales, artes visuales, conciertos y festivales culturales en España.",
    "presentation": {
      "explanation": "Música, arte y cultura en España:\n- El flamenco (Cante, toque de guitarra, baile - Patrimonio Cultural Inmaterial UNESCO)\n- La música clásica y la ópera (Teatro Real de Madrid, Gran Teatre del Liceu)\n- La música indie / rock / pop / música urbana\n- Los museos de arte: El Museo del Prado, Museo Reina Sofía, Museo Guggenheim Bilbao\n- Asistir a un concierto en directo / a un festival de música (Primavera Sound, Mad Cool)",
      "examples": [
        {
          "target": "Este fin de semana fuimos al Museo del Prado a contemplar las obras maestras de Velázquez y Goya.",
          "reading": "ES-te FEEN de se-MA-na FWEE-mos al moo-SE-o del PRA-do a kon-tem-PLAR las O-bras ma-ES-tras de ve-LATH-keth ee GO-ya.",
          "translation": "This weekend we went to the Prado Museum to contemplate the masterpieces of Velázquez and Goya."
        }
      ],
      "mnemonics": [
        "El Prado = One of the world's greatest classical art galleries!"
      ],
      "culturalNotes": [
        "Flamenco originated in Andalusia and represents a profound synthesis of Gypsy, Moorish, Jewish, and Andalusian folk artistic expressions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué género musical y dancístico andaluz es Patrimonio Inmaterial de la Humanidad?",
          "options": [
            "El tango (63.1)",
            "La samba (63.2)",
            "El flamenco (63.3)",
            "La polka (63.4)"
          ],
          "answerIndex": 2,
          "explanation": "El flamenco."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué museo madrileño alberga \"Las Meninas\" de Velázquez?",
          "options": [
            "El Museo del Prado (63.1)",
            "El Museo del Louvre (63.2)",
            "El Hermitage (63.3)",
            "La Galería Uffizi (63.4)"
          ],
          "answerIndex": 0,
          "explanation": "El Museo del Prado."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué significa \"música en directo\" o \"en vivo\"?",
          "options": [
            "Music without sound",
            "Radio silence",
            "Live music performed on stage by musicians in real time",
            "Recorded music on vinyl"
          ],
          "answerIndex": 2,
          "explanation": "Live performance.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"We bought tickets for the indie rock festival in Barcelona.\"",
          "options": [
            "El festival fue cancelado.",
            "Compramos entradas para el festival de rock indie en Barcelona.",
            "No nos gusta la música.",
            "Vendimos las entradas."
          ],
          "answerIndex": 1,
          "explanation": "Accurate cultural event translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 3: Foundational & Structural Mastery (Este fin de semana fuimos al M)"
  },
  "es-u13-l4": {
    "id": "es-u13-l4",
    "unit": "es-u13",
    "level": "A2",
    "objective": "Proponer planes de ocio, aceptar, rechazar educadamente y quedar con amigos en España.",
    "presentation": {
      "explanation": "Hacer planes y quedar con gente (Making plans):\n1. Proponer un plan:\n   - \"¿Te apetece ir al cine / salir a tomar unas tapas esta tarde?\"\n   - \"¿Qué te parece si vamos a la exposición de arte el sábado?\"\n2. Aceptar con entusiasmo:\n   - \"¡De acuerdo! ¡Me parece genial / Me apunto!\"\n   - \"¡Por supuesto, a qué hora quedamos?\"\n3. Rechazar educadamente y proponer alternativa:\n   - \"Me encantaría, pero hoy no puedo porque tengo que estudiar. ¿Qué tal el domingo?\"\n4. Fijar lugar y hora:\n   - \"Quedamos en la puerta del metro a las siete.\"",
      "examples": [
        {
          "target": "—¿Te apetece ir a tomar unas cañas y unas tapas por La Latina?\n—¡Me apunto! ¿A qué hora quedamos?",
          "reading": "Quedar con amigos en Madrid",
          "translation": "—Fancy grabbing some beers and tapas in La Latina?\n—I'm in! What time shall we meet?"
        }
      ],
      "mnemonics": [
        "¡Me apunto! = Count me in / I'm in!"
      ],
      "culturalNotes": [
        "In Spain, \"el tapeo\" (going from bar to bar ordering tapas and drinks with friends) is the ultimate casual social weekend leisure activity."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo dices coloquialmente en España \"Count me in / I'm in\" para un plan divertido?",
          "options": [
            "No quiero saber nada (64.1)",
            "¡Me apunto! / ¡Me parece genial! (64.2)",
            "Adiós (64.3)",
            "Me borro (64.4)"
          ],
          "answerIndex": 1,
          "explanation": "¡Me apunto! means count me in."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo propones un plan de salir a tomar algo usando \"apetecer\"?",
          "options": [
            "¿Te apetece tomar algo esta tarde? (64.1)",
            "El bar está cerrado (64.2)",
            "No tengo sed (64.3)",
            "Tienes que tomar agua (64.4)"
          ],
          "answerIndex": 0,
          "explanation": "¿Te apetece...? is standard polite proposing."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué significa \"quedar\" en el contexto social en España?",
          "options": [
            "To win a prize",
            "To agree on a time and place to meet friends",
            "To stay at home alone",
            "To lose something"
          ],
          "answerIndex": 1,
          "explanation": "Quedar means to arrange a meeting.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Let's meet in front of the theater at eight.\"",
          "options": [
            "Quedamos delante del teatro a las ocho.",
            "El teatro cerró ayer.",
            "Las ocho es tarde.",
            "No voy al teatro."
          ],
          "answerIndex": 0,
          "explanation": "Quedamos delante del teatro a las ocho is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 4: Foundational & Structural Mastery (—¿Te apetece ir a tomar unas c)"
  },
  "es-u13-l5": {
    "id": "es-u13-l5",
    "unit": "es-u13",
    "level": "A2",
    "objective": "Escribir una reseña crítica sobre una película, obra de teatro, concierto o libro leído.",
    "presentation": {
      "explanation": "Estructura de una reseña cultural (Review):\n1. Datos básicos: Título, director/autor, género.\n2. Sinopsis argumental: \"La película narra la historia de...\"\n3. Valoración crítica:\n   - La interpretación de los actores es brillante y convincente.\n   - La banda sonora y la fotografía son espectaculares.\n   - El guion es ágil, inteligente y mantiene la intriga hasta el final.\n4. Conclusión y recomendación:\n   - \"Recomiendo totalmente esta obra a los amantes del suspense. Nota: 9/10.\"",
      "examples": [
        {
          "target": "La película destaca por su excelente guion y una dirección magistral. Es una obra imprescindible.",
          "reading": "Crítica cinematográfica",
          "translation": "The film stands out for its excellent screenplay and masterful direction. It is an unmissable work."
        }
      ],
      "mnemonics": [
        "Obra imprescindible = An essential / unmissable masterpiece!"
      ],
      "culturalNotes": [
        "Spain has a rich cinematic tradition celebrated annually at the Goya Awards (Premios Goya) and the San Sebastián International Film Festival."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué significa el término \"la banda sonora\" de una película?",
          "options": [
            "The musical soundtrack and audio score (65.1)",
            "The movie poster (65.2)",
            "The cinema seats (65.3)",
            "The cinema ticket (65.4)"
          ],
          "answerIndex": 0,
          "explanation": "Banda sonora is soundtrack."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo calificas una película altamente recomendada que nadie debería perderse?",
          "options": [
            "El cine no funciona. (65.1)",
            "No tiene historia. (65.2)",
            "Es una película imprescindible y emocionante. (65.3)",
            "Es una película aburrida. (65.4)"
          ],
          "answerIndex": 2,
          "explanation": "Película imprescindible."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llama el galardón más prestigioso del cine español?",
          "options": [
            "Los Premios Goya",
            "Los Premios Grammy",
            "La Palma de Oro",
            "El León de Plata"
          ],
          "answerIndex": 0,
          "explanation": "Los Premios Goya are Spain's premier film awards.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The plot is gripping and full of unexpected twists.\"",
          "options": [
            "No entendí nada.",
            "El libro no tiene páginas.",
            "La película ya terminó.",
            "La trama es apasionante y llena de giros inesperados."
          ],
          "answerIndex": 3,
          "explanation": "Accurate review translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 5: Foundational & Structural Mastery (La película destaca por su exc)"
  },
  "es-u14-l1": {
    "id": "es-u14-l1",
    "unit": "es-u14",
    "level": "A2",
    "objective": "Vocabulario aeroportuario, facturación de equipaje, control de seguridad y embarque en español (En el aeropuerto).",
    "presentation": {
      "explanation": "En el aeropuerto (Aeropuerto Adolfo Suárez Madrid-Barajas / Barcelona-El Prat):\n- La tarjeta de embarque (Boarding pass)\n- El mostrador de facturación (Check-in counter)\n- Facturar el equipaje de mano / la maleta facturada (Check in luggage)\n- El control de seguridad (Security checkpoint: quitarse el cinturón, sacar los líquidos y el portátil)\n- La puerta de embarque (Boarding gate)\n- El despegue y el aterrizaje del vuelo (Takeoff & landing)\n- El reclamo de equipaje y la aduana (Baggage claim & customs)",
      "examples": [
        {
          "target": "Por favor, tenga a mano su pasaporte y la tarjeta de embarque para pasar el control de seguridad.",
          "reading": "por fa-VOR, TEN-ga a MA-no soo pa-sa-POR-te ee la tar-KHE-ta de em-BAR-ke...",
          "translation": "Please have your passport and boarding pass ready to pass through the security checkpoint."
        }
      ],
      "mnemonics": [
        "Tarjeta de embarque = Boarding pass! Facturar = Check luggage!"
      ],
      "culturalNotes": [
        "Madrid-Barajas Terminal 4 (T4) designed by Richard Rogers and Antonio Lamela is celebrated worldwide for its sweeping bamboo wave ceiling."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué documento necesitas para subir al avión después de facturar?",
          "options": [
            "El carnet de conducir (66.1)",
            "La factura del hotel (66.2)",
            "Una postal (66.3)",
            "La tarjeta de embarque (66.4)"
          ],
          "answerIndex": 3,
          "explanation": "Tarjeta de embarque is boarding pass."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduce: \"The flight is delayed by thirty minutes due to weather.\"",
          "options": [
            "El avión despegó puntual. (66.1)",
            "No hay billetes de avión. (66.2)",
            "El aeropuerto está cerrado. (66.3)",
            "El vuelo está retrasado treinta minutos debido al tiempo. (66.4)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate flight delay translation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Dónde se recogen las maletas después del aterrizaje?",
          "options": [
            "En la cabina del piloto",
            "En el mostrador de facturación",
            "En la pista de aterrizaje",
            "En la sala de recogida de equipajes (cintas de equipaje)"
          ],
          "answerIndex": 3,
          "explanation": "Baggage claim area.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Please proceed to gate B24 immediately for boarding.\"",
          "options": [
            "Salgan del aeropuerto.",
            "El avión aterrizó en París.",
            "Por favor, diríjanse a la puerta de embarque B24 inmediatamente para el embarque.",
            "Compre un billete nuevo."
          ],
          "answerIndex": 2,
          "explanation": "Accurate boarding announcement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 1: Foundational & Structural Mastery (Por favor, tenga a mano su pas)"
  },
  "es-u14-l2": {
    "id": "es-u14-l2",
    "unit": "es-u14",
    "level": "A2",
    "objective": "Reservar alojamiento, hacer el check-in en el hotel y gestionar peticiones en recepción.",
    "presentation": {
      "explanation": "El hotel y tipos de alojamiento en España:\n- El hotel / el parador nacional (Historic luxury hotel) / el hostal / el albergue\n- Habitación individual / doble / con vistas al mar / cama de matrimonio\n- Régimen de alojamiento: Solo alojamiento, alojamiento y desayuno (AD), media pensión, pensión completa\n- En recepción (Check-in / Check-out):\n  - \"Tengo una reserva a nombre de...\"\n  - \"¿A qué hora se sirve el desayuno buffet?\"\n  - \"¿Me puede dar la contraseña de la red wifi?\"\n  - \"La llave / tarjeta magnética de la habitación\"",
      "examples": [
        {
          "target": "Buenas tardes, tengo una reserva para tres noches a nombre de Alejandro Gómez.",
          "reading": "bwe-nas TAR-des, TEN-go OO-na re-SER-va PA-ra TRES NO-ches a NOM-bre de a-le-KHAN-dro GO-meth.",
          "translation": "Good afternoon, I have a reservation for three nights under the name of Alejandro Gómez."
        }
      ],
      "mnemonics": [
        "Paradores de España = Network of historic luxury hotels in restored castles, palaces, and monasteries!"
      ],
      "culturalNotes": [
        "Paradores de Turismo de España is a state-owned luxury hotel chain preserving historic monuments (castles, palaces, fortresses) across Spain."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo dices en recepción que tienes una habitación reservada?",
          "options": [
            "Tengo una reserva a nombre de [Mi Nombre] (67.1)",
            "Vengo a vender camas (67.2)",
            "No quiero dormir aquí (67.3)",
            "La habitación es mía gratis (67.4)"
          ],
          "answerIndex": 0,
          "explanation": "Tengo una reserva a nombre de... is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué incluye el régimen de \"media pensión\" en un hotel?",
          "options": [
            "Alojamiento, desayuno y una comida principal (almuerzo o cena) (67.1)",
            "Solo dormir (67.2)",
            "Todas las bebidas gratis todo el día (67.3)",
            "Solo café (67.4)"
          ],
          "answerIndex": 0,
          "explanation": "Media pensión includes breakfast and one main meal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué son los famosos \"Paradores\" en España?",
          "options": [
            "Estaciones de tren abandonadas",
            "Campamentos militares",
            "Hoteles de lujo ubicados en castillos, palacios y monasterios históricos restaurados",
            "Tiendas de comestibles"
          ],
          "answerIndex": 2,
          "explanation": "Paradores.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Could you please give me an extra key card and the wifi password?\"",
          "options": [
            "La habitación está sucia.",
            "¿Podría darme una tarjeta magnética adicional y la contraseña del wifi, por favor?",
            "No tengo reserva.",
            "El desayuno terminó."
          ],
          "answerIndex": 1,
          "explanation": "Accurate reception request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 2: Foundational & Structural Mastery (Buenas tardes, tengo una reser)"
  },
  "es-u14-l3": {
    "id": "es-u14-l3",
    "unit": "es-u14",
    "level": "A2",
    "objective": "Transporte ferroviario en España: El tren de alta velocidad (AVE), cercanías, billetes y horarios.",
    "presentation": {
      "explanation": "El ferrocarril en España (Renfe / Adif):\n- El AVE (Alta Velocidad Española: Madrid - Barcelona en 2h30m, Madrid - Sevilla/Valencia)\n- Cercanías (Commuter rail network)\n- La estación de tren (Estación de Atocha en Madrid, Sants en Barcelona)\n- Billetes: Billete de ida / billete de ida y vuelta (One-way / round-trip)\n- El andén / la vía / el vagón / el asiento en ventana o pasillo\n- Máquinas expendedoras de billetes y abonos de transporte",
      "examples": [
        {
          "target": "El tren AVE con destino a Barcelona-Sants saldrá puntualmente por la vía número cuatro.",
          "reading": "el TREN A-ve kon des-TEE-no a bar-se-LO-na SANTS sal-DRA poon-twal-MEN-te por la VEE-a NOO-me-ro KWA-tro.",
          "translation": "The AVE high-speed train to Barcelona-Sants will depart on time from track number four."
        }
      ],
      "mnemonics": [
        "AVE = Alta Velocidad Española (meaning \"bird\" in Spanish, running at 300+ km/h)!"
      ],
      "culturalNotes": [
        "Spain operates the largest high-speed rail network (AVE) in Europe and second largest globally, connecting nearly all major cities with Madrid in under 3 hours."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama la red de trenes de alta velocidad más extensa de Europa que opera en España?",
          "options": [
            "El tranvía lento (68.1)",
            "El teleférico (68.2)",
            "El AVE (Alta Velocidad Española) (68.3)",
            "El funicular (68.4)"
          ],
          "answerIndex": 2,
          "explanation": "El AVE."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo pides un billete para ir y regresar en la taquilla de la estación?",
          "options": [
            "Un billete de ida y vuelta a Valencia, por favor. (68.1)",
            "Un billete solo de ida (68.2)",
            "No quiero viajar (68.3)",
            "Un mapa del tren (68.4)"
          ],
          "answerIndex": 0,
          "explanation": "Billete de ida y vuelta is round-trip."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llama la gran estación de tren madrileña con un jardín botánico tropical en su interior?",
          "options": [
            "Estación de Sants",
            "La Estación de Atocha",
            "Estación del Norte",
            "La Estación de Chamartín"
          ],
          "answerIndex": 1,
          "explanation": "Estación de Atocha.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Please check your ticket for the coach and seat number.\"",
          "options": [
            "Por favor, consulte en su billete el número de coche y de asiento.",
            "Bájese del andén.",
            "No hay billetes disponibles.",
            "El tren está cancelado."
          ],
          "answerIndex": 0,
          "explanation": "Accurate train announcement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Transporte ferroviario en España"
  },
  "es-u14-l4": {
    "id": "es-u14-l4",
    "unit": "es-u14",
    "level": "A2",
    "objective": "Alquilar un coche, normas de tráfico, gasolineras y autopistas en España.",
    "presentation": {
      "explanation": "Alquiler de vehículos y conducción en España:\n- La empresa de alquiler de coches (Rent-a-car: seguro a todo riesgo con/sin franquicia)\n- El permiso de conducir internacional (International driving permit)\n- Tipos de vías: Autovías (gratuitas, A-X), Autopistas de peaje (AP-X), Carreteras secundarias\n- La gasolinera / estación de servicio: Gasolina sin plomo 95/98, diésel / gasóleo\n- Vocabulario del coche: El maletero, el depósito lleno, el GPS, el cinturón de seguridad obligatorio",
      "examples": [
        {
          "target": "Lleno de gasolina sin plomo noventa y cinco, por favor. ¿Se puede pagar con tarjeta?",
          "reading": "YE-no de ga-so-LEE-na seen PLO-mo no-VEN-ta ee SEEN-ko, por fa-VOR.",
          "translation": "Fill it up with unleaded 95 petrol, please. Can I pay by card?"
        }
      ],
      "mnemonics": [
        "Lleno, por favor = Fill 'er up at the petrol station!"
      ],
      "culturalNotes": [
        "In Spain, roundabouts (glorietas) are ubiquitous; priority always belongs to vehicles already circulating inside the roundabout unless signaled otherwise."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué significa pedir un \"seguro a todo riesgo sin franquicia\" al alquilar un coche?",
          "options": [
            "Only third-party glass insurance (69.1)",
            "Full comprehensive coverage with zero deductible/excess in case of damage (69.2)",
            "A bicycle helmet (69.3)",
            "No insurance at all (69.4)"
          ],
          "answerIndex": 1,
          "explanation": "Seguro a todo riesgo sin franquicia is zero-deductible full coverage."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué combustible debes pedir para un coche estándar de gasolina en España?",
          "options": [
            "Gasolina sin plomo 95 (69.1)",
            "Queroseno de avión (69.2)",
            "Agua con gas (69.3)",
            "Gasóleo agrícola (69.4)"
          ],
          "answerIndex": 0,
          "explanation": "Gasolina sin plomo 95 is standard unleaded."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Quién tiene la prioridad de paso en una rotonda o glorieta estándar en España?",
          "options": [
            "Los vehículos que ya están circulando dentro de la rotonda",
            "Nadie",
            "Los vehículos que quieren entrar a gran velocidad",
            "Los peatones en la autopista"
          ],
          "answerIndex": 0,
          "explanation": "Vehicles already in the roundabout.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"We rented a car at the airport to explore the coastal towns.\"",
          "options": [
            "El coche no tiene ruedas.",
            "Vendimos nuestro coche en el aeropuerto.",
            "No hay carreteras en la costa.",
            "Alquilamos un coche en el aeropuerto para recorrer los pueblos de la costa."
          ],
          "answerIndex": 3,
          "explanation": "Accurate car rental translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 4: Foundational & Structural Mastery (Lleno de gasolina sin plomo no)"
  },
  "es-u14-l5": {
    "id": "es-u14-l5",
    "unit": "es-u14",
    "level": "A2",
    "objective": "Gestionar imprevistos de viaje: equipaje perdido, reclamaciones, cancelaciones y seguro de viaje.",
    "presentation": {
      "explanation": "Resolución de incidencias y reclamaciones de viaje:\n- En la oficina de objetos perdidos / reclamación de equipajes (Lost & Found / Baggage claim):\n  - \"Mi maleta no ha salido en la cinta transportadora.\"\n  - El parte de irregularidad de equipaje (PIR - Property Irregularity Report)\n- Vuelo cancelado o con retraso superior a tres horas (Derechos del pasajero en la UE - Reglamento CE 261/2004)\n- Hoja de reclamaciones oficial (Official consumer complaint sheet)\n- Contactar con el seguro de asistencia en viaje",
      "examples": [
        {
          "target": "Mi vuelo ha sido cancelado sin previo aviso. Deseo solicitar la reubicación en el próximo vuelo y la indemnización correspondiente.",
          "reading": "Reclamación de vuelo UE",
          "translation": "My flight has been cancelled without prior notice. I wish to request rebooking on the next flight and corresponding compensation."
        }
      ],
      "mnemonics": [
        "Reglamento CE 261 = EU passenger rights granting financial compensation (250€-600€) for long delays and cancellations!"
      ],
      "culturalNotes": [
        "Under strict EU law (EC Regulation 261/2004), passengers departing from EU airports enjoy comprehensive statutory protections, including hotel accommodations, meals, and cash compensation for delays over 3 hours."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué formulario oficial debes rellenar en el aeropuerto si tu maleta facturada no aparece?",
          "options": [
            "El Parte de Irregularidad de Equipaje (PIR) (70.1)",
            "Un examen de conducir (70.2)",
            "Una postal para casa (70.3)",
            "La factura de la tienda (70.4)"
          ],
          "answerIndex": 0,
          "explanation": "El PIR (Property Irregularity Report)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo solicitas el libro oficial para poner una queja formal en un establecimiento en España?",
          "options": [
            "Todo está perfecto (70.1)",
            "Me voy sin pagar (70.2)",
            "Por favor, ¿me puede facilitar la hoja oficial de reclamaciones? (70.3)",
            "No quiero hablar con nadie (70.4)"
          ],
          "answerIndex": 2,
          "explanation": "Hoja de reclamaciones is the official legal complaint form."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué normativa europea protege a los pasajeros aéreos con indemnizaciones económicas ante cancelaciones de vuelos?",
          "options": [
            "El Código de Hammurabi",
            "El Tratado de Versalles",
            "La Constitución de 1812",
            "El Reglamento Europeo CE 261/2004"
          ],
          "answerIndex": 3,
          "explanation": "Reglamento CE 261/2004.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"My suitcase is damaged and the handle is broken.\"",
          "options": [
            "No tengo ninguna maleta.",
            "Mi maleta es nueva y hermosa.",
            "Mi maleta está dañada y el asa está rota.",
            "El equipaje llegó puntual."
          ],
          "answerIndex": 2,
          "explanation": "Accurate damage claim translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Gestionar imprevistos de viaje"
  },
  "es-u15-l1": {
    "id": "es-u15-l1",
    "unit": "es-u15",
    "level": "A2",
    "objective": "Vocabulario de tiendas de ropa, prendas de vestir, tallas y tejidos en España (De compras por Madrid/Barcelona).",
    "presentation": {
      "explanation": "Prendas de vestir y tiendas en España (El Corte Inglés, tiendas de la Gran Vía o Passeig de Gràcia):\n- La camisa / la camiseta / los pantalones / los vaqueros (jeans) / el jersey (sweater)\n- La chaqueta / el abrigo / la cazadora / el traje / el vestido / la falda\n- El calzado: Los zapatos / las zapatillas de deporte / las botas / las sandalias\n- Materiales y tejidos: Algodón (cotton), lana (wool), seda (silk), lino (linen), cuero (leather)\n- Las tallas: Talla pequeña (S), mediana (M), grande (L), extragrande (XL)\n- Número de calzado (ej. \"Uso el número 42.\")",
      "examples": [
        {
          "target": "Disculpe, ¿tiene este jersey de lana en una talla más grande o en color azul marino?",
          "reading": "dees-KOOL-pe, TYE-ne ES-te KHER-say de LA-na en OO-na TA-ya MAS GRAN-de...",
          "translation": "Excuse me, do you have this wool sweater in a larger size or in navy blue?"
        }
      ],
      "mnemonics": [
        "Jersey = Jumper / Sweater in Spain! Vaqueros = Jeans!"
      ],
      "culturalNotes": [
        "Spain is a global powerhouse of fashion retail, home to Inditex (Zara, Massimo Dutti) and the iconic department store chain El Corte Inglés."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo preguntas en una tienda de ropa si tienen una talla específica?",
          "options": [
            "¿Dónde está la comida? (71.1)",
            "No quiero comprar nada (71.2)",
            "El pantalón está roto (71.3)",
            "¿Tiene este pantalón en la talla 38 / M? (71.4)"
          ],
          "answerIndex": 3,
          "explanation": "¿Tiene este pantalón en la talla...? is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se le llama a los pantalones tejanos/jeans en España?",
          "options": [
            "Los bañadores (71.1)",
            "Los pijamas (71.2)",
            "Los trajes (71.3)",
            "Los pantalones vaqueros / los vaqueros (71.4)"
          ],
          "answerIndex": 3,
          "explanation": "Los vaqueros."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es la emblemática cadena de grandes almacenes de España presente en casi todas las capitales de provincia?",
          "options": [
            "Harrods",
            "Macy's",
            "El Corte Inglés",
            "Galeries Lafayette"
          ],
          "answerIndex": 2,
          "explanation": "El Corte Inglés.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"This 100% cotton shirt is very comfortable and breathable.\"",
          "options": [
            "La camisa es de plástico feo.",
            "Esta camisa de cien por cien algodón es muy cómoda y transpirable.",
            "La tienda está cerrada.",
            "No me gusta la ropa."
          ],
          "answerIndex": 1,
          "explanation": "Accurate fashion translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 1: Foundational & Structural Mastery (Disculpe, ¿tiene este jersey d)"
  },
  "es-u15-l2": {
    "id": "es-u15-l2",
    "unit": "es-u15",
    "level": "A2",
    "objective": "Probarse ropa en el probador, pedir otra talla y opinar sobre cómo queda una prenda.",
    "presentation": {
      "explanation": "En el probador (Fitting room):\n- \"¿Dónde están los probadores, por favor?\"\n- Expresar cómo queda la prenda:\n  - \"Me queda bien / perfecto.\" (It fits me well / perfectly.)\n  - \"Me queda grande / holgado.\" (It's too big / loose.)\n  - \"Me queda pequeño / estrecho / ajustado.\" (It's too small / tight.)\n  - \"Me queda corto / largo.\" (It's too short / long.)\n- \"Este color te favorece mucho / combina genial con tus zapatos.\"",
      "examples": [
        {
          "target": "Voy a pasar al probador a ver cómo me queda esta chaqueta. ¿Me traes una talla menos?",
          "reading": "VOY a pa-SAR al pro-ba-DOR a VER KO-mo me KE-da ES-ta cha-KE-ta...",
          "translation": "I am going into the fitting room to see how this jacket fits. Could you bring me one size down?"
        }
      ],
      "mnemonics": [
        "Me queda bien = It fits me well! Me favorece = It flatters / suits me!"
      ],
      "culturalNotes": [
        "In Spanish stores, fitting rooms (los probadores) typically limit customers to bringing 4-6 items at a time during busy sales periods."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo dices que una prenda te queda demasiado apretada?",
          "options": [
            "Me queda estrecha / pequeña (72.1)",
            "Me queda perfecta (72.2)",
            "Me queda gigante (72.3)",
            "Es muy ancha (72.4)"
          ],
          "answerIndex": 0,
          "explanation": "Me queda estrecha / pequeña."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Dónde te pruebas la ropa en una tienda?",
          "options": [
            "En los probadores (72.1)",
            "En la caja registradora (72.2)",
            "En el escaparate (72.3)",
            "En la calle (72.4)"
          ],
          "answerIndex": 0,
          "explanation": "En los probadores (Fitting rooms)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué significa la frase \"Ese vestido te favorece mucho\"?",
          "options": [
            "That dress is torn",
            "That dress flatters you and makes you look great",
            "That dress is dirty",
            "That dress is expensive"
          ],
          "answerIndex": 1,
          "explanation": "Te favorece means it flatters you.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The trousers are too long; do you offer tailoring / hemming service?\"",
          "options": [
            "Los pantalones me quedan muy largos; ¿tienen servicio de arreglos?",
            "No compro pantalones.",
            "La tienda no tiene ropa.",
            "Los pantalones son baratos."
          ],
          "answerIndex": 0,
          "explanation": "Accurate tailoring inquiry.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 2: Foundational & Structural Mastery (Voy a pasar al probador a ver )"
  },
  "es-u15-l3": {
    "id": "es-u15-l3",
    "unit": "es-u15",
    "level": "A2",
    "objective": "Las rebajas en España, descuentos, pagar en caja (tarjeta, Bizum, efectivo) y pedir ticket.",
    "presentation": {
      "explanation": "Las rebajas y el proceso de compra (Shopping & Sales):\n- Las rebajas de invierno (enero-febrero) y de verano (julio-agosto)\n- Descuentos: 30% de descuento / a mitad de precio / liquidación total\n- En la caja (Paying at the register):\n  - \"¿Cuánto es en total?\" / \"¿Aceptan tarjeta de crédito / Bizum?\"\n  - El ticket de compra / la factura con IVA (Receipt / Tax invoice)\n  - La bolsa: \"¿Desea una bolsa de papel por diez céntimos?\"\n  - El pago contactless (con móvil o tarjeta)",
      "examples": [
        {
          "target": "Aproveché las rebajas de verano y compré estos zapatos de piel con un cuarenta por ciento de descuento.",
          "reading": "a-pro-ve-CHE las re-BA-khas de ve-RA-no ee kom-PRE ES-tos tha-PA-tos...",
          "translation": "I took advantage of the summer sales and bought these leather shoes with a 40% discount."
        }
      ],
      "mnemonics": [
        "Rebajas = Official sales seasons in Spain! Bizum = Instant mobile banking payment!"
      ],
      "culturalNotes": [
        "Bizum is Spain's universal peer-to-peer and merchant mobile payment network, integrated directly into all Spanish bank accounts for instant phone number payments."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama la temporada oficial de descuentos comerciales en España?",
          "options": [
            "La fiesta mayor (73.1)",
            "Las rebajas (de invierno / de verano) (73.2)",
            "La vendimia (73.3)",
            "El examen (73.4)"
          ],
          "answerIndex": 1,
          "explanation": "Las rebajas."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo pides el comprobante de compra en la caja en España?",
          "options": [
            "¿Me da el ticket de compra, por favor? (73.1)",
            "Deme un periódico (73.2)",
            "Tire el dinero (73.3)",
            "No quiero recibo (73.4)"
          ],
          "answerIndex": 0,
          "explanation": "El ticket de compra."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el sistema de pago móvil instantáneo más popular entre particulares y comercios en España?",
          "options": [
            "Bizum",
            "Transferencia de dos semanas",
            "Criptomoneda anónima",
            "Cheque postal"
          ],
          "answerIndex": 0,
          "explanation": "Bizum.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Can I pay by contactless card or mobile phone?\"",
          "options": [
            "La tarjeta está bloqueada.",
            "No tengo dinero para pagar.",
            "El precio es muy caro.",
            "¿Puedo pagar con tarjeta contactless o con el móvil?"
          ],
          "answerIndex": 3,
          "explanation": "Accurate payment inquiry.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 3: Foundational & Structural Mastery (Aproveché las rebajas de veran)"
  },
  "es-u15-l4": {
    "id": "es-u15-l4",
    "unit": "es-u15",
    "level": "A2",
    "objective": "Mercados tradicionales y de abastos en España (Mercado de San Miguel, La Boqueria, El Rastro).",
    "presentation": {
      "explanation": "Mercados tradicionales en España:\n- El mercado de abastos: Puestos de frutas, verduras, pescadería, carnicería y charcutería (jamón ibérico de bellota, queso manchego)\n- Mercados gourmet gastronómicos: Mercado de San Miguel (Madrid), Mercado de La Boqueria (Barcelona)\n- El Rastro de Madrid (El mítico mercado dominical al aire libre de antigüedades, ropa vintage y libros en La Latina)\n- Regateo: En tiendas y mercados estándar en España NO se regatea; los precios son fijos (salvo en puestos de antigüedades del Rastro)",
      "examples": [
        {
          "target": "El domingo por la mañana fuimos a recorrer los puestos del Rastro y luego tomamos un aperitivo en La Latina.",
          "reading": "el do-MEEN-go por la ma-NYA-na FWEE-mos a re-ko-RRER los PWES-tos del RAS-tro...",
          "translation": "On Sunday morning we went to browse the stalls at El Rastro and then had an aperitif in La Latina."
        }
      ],
      "mnemonics": [
        "El Rastro = Madrid's legendary 400-year-old Sunday flea market in La Latina!"
      ],
      "culturalNotes": [
        "Historic municipal food markets (mercados de abastos) are vibrant culinary centers in Spain, with stalls selling freshly sliced jamón ibérico de bellota and cured artisanal cheeses."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es el famoso mercado al aire libre de antigüedades que se celebra todos los domingos en Madrid?",
          "options": [
            "Camden Market (74.1)",
            "El Rastro de Madrid (74.2)",
            "Portobello Road (74.3)",
            "El Mercado de las Pulgas de París (74.4)"
          ],
          "answerIndex": 1,
          "explanation": "El Rastro de Madrid."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cuál es el jamón curado más prestigioso y exclusivo de la gastronomía española?",
          "options": [
            "El jamón ibérico de bellota (100% ibérico) (74.1)",
            "El jamón de plástico (74.2)",
            "El pavo frío (74.3)",
            "El jamón cocido en lata (74.4)"
          ],
          "answerIndex": 0,
          "explanation": "Jamón ibérico de bellota."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo funciona la fijación de precios en la gran mayoría de tiendas y mercados en España?",
          "options": [
            "El precio cambia cada minuto",
            "No hay precios",
            "Se debe regatear obligatoriamente",
            "Los precios son fijos y están claramente indicados (no se acostumbra regatear)"
          ],
          "answerIndex": 3,
          "explanation": "Fixed pricing culture.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Please slice two hundred grams of cured Manchego cheese.\"",
          "options": [
            "Véndame un kilo de pan duro.",
            "No quiero queso.",
            "Por favor, córteme doscientos gramos de queso manchego curado.",
            "El queso está malo."
          ],
          "answerIndex": 2,
          "explanation": "Accurate market counter purchase.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 4: Foundational & Structural Mastery (El domingo por la mañana fuimo)"
  },
  "es-u15-l5": {
    "id": "es-u15-l5",
    "unit": "es-u15",
    "level": "A2",
    "objective": "Devoluciones, cambios de prendas, compras online y devoluciones libres de impuestos (Tax-Free shopping).",
    "presentation": {
      "explanation": "Cambios, devoluciones y Tax-Free:\n- Cambiar una prenda por otra talla o color (Exchange)\n- Devolver una prenda y solicitar el reembolso (Refund):\n  - \"Vengo a devolver este artículo porque tiene una tara / defecto.\"\n  - Plazo de devolución: \"Tiene 30 días con el ticket de compra y las etiquetas puestas.\"\n- Compras online: Gastos de envío, entrega a domicilio o recogida en tienda\n- El sistema DIVA de devolución del IVA (Tax-Free shopping para turistas no comunitarios en aeropuertos con validación digital)",
      "examples": [
        {
          "target": "Buenos días, quisiera cambiar este vestido por una talla más grande o solicitar la devolución del importe.",
          "reading": "bwe-nos DEE-as, kee-SYE-ra kam-BYAR ES-te ves-TEE-do...",
          "translation": "Good morning, I would like to exchange this dress for a larger size or request a refund."
        }
      ],
      "mnemonics": [
        "DIVA Tax-Free = Digital barcode validation kiosks at Spanish airports for instant VAT refunds!"
      ],
      "culturalNotes": [
        "Non-EU residents shopping in Spain can claim back the 21% VAT (IVA) with no minimum purchase threshold through the automated DIVA digital kiosks at international airports."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué documento y condición son indispensables para devolver una prenda en una tienda?",
          "options": [
            "El ticket de compra original y la prenda con las etiquetas puestas (75.1)",
            "Una foto borrosa (75.2)",
            "La prenda lavada y usada (75.3)",
            "Sin ticket (75.4)"
          ],
          "answerIndex": 0,
          "explanation": "Ticket and original tags."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama el sistema digital español para validar el Tax-Free en los aeropuertos?",
          "options": [
            "El sistema DNI (75.1)",
            "El sistema METRO (75.2)",
            "El sistema DIVA (devolución del IVA) (75.3)",
            "El sistema RENFE (75.4)"
          ],
          "answerIndex": 2,
          "explanation": "El sistema DIVA."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el tipo estándar de Impuesto sobre el Valor Añadido (IVA) en España?",
          "options": [
            "0%",
            "50%",
            "21% de IVA general",
            "2%"
          ],
          "answerIndex": 2,
          "explanation": "21% IVA standard.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Can you stamp and validate my Tax-Free invoice for customs?\"",
          "options": [
            "La factura es falsa.",
            "¿Puede sellar y validar mi factura Tax-Free para la aduana?",
            "No quiero pagar impuestos.",
            "El vuelo salió."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Tax-Free request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 5: Foundational & Structural Mastery (Buenos días, quisiera cambiar )"
  },
  "es-u16-l1": {
    "id": "es-u16-l1",
    "unit": "es-u16",
    "level": "A2",
    "objective": "Hablar sobre el tiempo meteorológico, temperaturas y fenómenos climáticos en España (El pronóstico del tiempo).",
    "presentation": {
      "explanation": "El clima y el tiempo en España:\n- Expresiones impersonales con HACER / ESTAR / HABER:\n  - \"Hace sol / hace calor / hace frío / hace viento / hace buen tiempo / mal tiempo.\"\n  - \"Está nublado / está despejado / está lloviendo / está nevando.\"\n  - \"Hay tormenta / niebla / humedad / chubascos.\"\n- Fenómenos: La lluvia, la nieve, el granizo, los truenos y relámpagos, el arcoíris\n- Temperaturas: Grados centígrados / Celsius (ej. \"Estamos a veinticinco grados.\")",
      "examples": [
        {
          "target": "Hoy hace un día soleado y despejado en Madrid, con una temperatura máxima de veintiocho grados.",
          "reading": "oy A-se oon DEE-a so-le-A-do ee des-pe-KHA-do en ma-DREED...",
          "translation": "Today is a sunny and clear day in Madrid, with a maximum temperature of twenty-eight degrees."
        }
      ],
      "mnemonics": [
        "Hacer sol/frío vs Estar nublado/lloviendo vs Haber tormenta/niebla!"
      ],
      "culturalNotes": [
        "Spain experiences diverse microclimates: the green oceanic north (Galicia, Asturias), the continental central plateau (Madrid), and the dry Mediterranean south (Andalusia)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo dices en español que el cielo no tiene nubes y brilla el sol?",
          "options": [
            "Hay tormenta de nieve (76.1)",
            "Está lloviendo a cántaros (76.2)",
            "Hace un frío polar (76.3)",
            "Hace sol y el cielo está completamente despejado (76.4)"
          ],
          "answerIndex": 3,
          "explanation": "Hace sol y está despejado is exact."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué verbo se usa para indicar la temperatura ambiente (ej. \"It is 22 degrees\")?",
          "options": [
            "Tener grados (76.1)",
            "Hacer grados (76.2)",
            "Comer grados (76.3)",
            "Estar a (Estamos a veintidós grados) (76.4)"
          ],
          "answerIndex": 3,
          "explanation": "Estamos a veintidós grados."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué región española es famosa por su clima atlántico lluvioso y paisajes verdes llamada \"la España Verde\"?",
          "options": [
            "El desierto de Tabernas",
            "El norte (Galicia, Asturias, Cantabria, País Vasco)",
            "Las Islas Canarias",
            "Madrid centro"
          ],
          "answerIndex": 1,
          "explanation": "El norte (España Verde).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"There is a severe thunderstorm forecast for this afternoon with heavy rain.\"",
          "options": [
            "Hay previsión de una fuerte tormenta con lluvias intensas para esta tarde.",
            "No lloverá nunca.",
            "Hace un sol radiante.",
            "El cielo está despejado."
          ],
          "answerIndex": 0,
          "explanation": "Accurate weather forecast translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 1: Foundational & Structural Mastery (Hoy hace un día soleado y desp)"
  },
  "es-u16-l2": {
    "id": "es-u16-l2",
    "unit": "es-u16",
    "level": "A2",
    "objective": "Las cuatro estaciones del año, cambios estacionales y actividades al aire libre en España.",
    "presentation": {
      "explanation": "Las cuatro estaciones del año:\n- La primavera (marzo a junio): Flores en flor, temperaturas suaves, alergias al polen\n- El verano (junio a septiembre): Calor intenso, vacaciones en la playa, noches de verano en terrazas\n- El otoño (septiembre a diciembre): Caída de las hojas, castañas asadas en las calles, vendimia de la uva\n- El invierno (diciembre a marzo): Frío, nieve en los Pirineos y Sierra Nevada, esquí\n- \"En primavera los campos se llenan de flores y los días son más largos.\"",
      "examples": [
        {
          "target": "En otoño me encanta pasear por los parques cuando caen las hojas y disfrutar de unas castañas asadas.",
          "reading": "en o-TO-nyo me en-KAN-ta pa-se-AR por los PAR-kes...",
          "translation": "In autumn I love walking through the parks when the leaves fall and enjoying roasted chestnuts."
        }
      ],
      "mnemonics": [
        "Primavera, Verano, Otoño, Invierno = The four distinct seasons!"
      ],
      "culturalNotes": [
        "In Spanish cities during autumn and winter, street vendors (castañeras) roast hot chestnuts (castañas asadas) over charcoal on the sidewalks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué estación del año es famosa por las castañas asadas en las calles y la caída de las hojas?",
          "options": [
            "El otoño (77.1)",
            "El año bisiesto (77.2)",
            "El verano (77.3)",
            "La primavera (77.4)"
          ],
          "answerIndex": 0,
          "explanation": "El otoño."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿En qué estación del año se celebra la vendimia y recogida de la uva para el vino en España?",
          "options": [
            "En otoño (septiembre-octubre) (77.1)",
            "En pleno invierno con nieve (77.2)",
            "En primavera (77.3)",
            "En enero (77.4)"
          ],
          "answerIndex": 0,
          "explanation": "En otoño."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Dónde se encuentran las principales estaciones de esquí de alta montaña en España?",
          "options": [
            "En los Pirineos y en Sierra Nevada (Granada)",
            "En el Río Guadalquivir",
            "En el metro de Madrid",
            "En las playas de Ibiza"
          ],
          "answerIndex": 0,
          "explanation": "Pirineos y Sierra Nevada.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"In summer the days are long, sunny, and very warm.\"",
          "options": [
            "En verano nieva mucho.",
            "Los días de verano son oscuros y fríos.",
            "No hay sol en verano.",
            "En verano los días son largos, soleados y muy calurosos."
          ],
          "answerIndex": 3,
          "explanation": "Accurate season translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 2: Foundational & Structural Mastery (En otoño me encanta pasear por)"
  },
  "es-u16-l3": {
    "id": "es-u16-l3",
    "unit": "es-u16",
    "level": "A2",
    "objective": "Parques nacionales y paisajes naturales de España (Picos de Europa, Doñana, Teide, Pirineos).",
    "presentation": {
      "explanation": "Geografía y naturaleza en España:\n- Paisajes diversos:\n  - La alta montaña alpina: Parque Nacional de los Picos de Europa, Parque Nacional de Ordesa y Monte Perdido\n  - El volcán y paisajes lunares: El Parque Nacional del Teide en Tenerife (el pico más alto de España, 3.718 m)\n  - Los humedales y aves migratorias: Parque Nacional de Doñana en Andalucía\n  - El bosque mediterráneo y dehesas: Encinas, alcornoques y cerdos ibéricos\n- Accidentes geográficos: La cordillera, el valle, el río, el cañón, la costa, el acantilado",
      "examples": [
        {
          "target": "El Teide es un volcán majestuoso en la isla de Tenerife y es el punto más alto de toda España.",
          "reading": "el TAY-de ES oon vol-KAN ma-khes-TWO-so...",
          "translation": "Mount Teide is a majestic volcano on the island of Tenerife and is the highest peak in all of Spain."
        }
      ],
      "mnemonics": [
        "El Teide = Highest peak in Spain (3,718 meters) located in Tenerife, Canary Islands!"
      ],
      "culturalNotes": [
        "Doñana National Park is Europe's most crucial wetland reserve for migratory birds journeying between Africa and northern Europe, home to the endangered Iberian lynx (lince ibérico)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la montaña más alta de España?",
          "options": [
            "El Mulhacén (78.1)",
            "El volcán Teide en Tenerife (3.718 metros) (78.2)",
            "El Aneto (78.3)",
            "El Mont Blanc (78.4)"
          ],
          "answerIndex": 1,
          "explanation": "El Teide (3.718m)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué animal felino en peligro de extinción habita protegido en el Parque Nacional de Doñana?",
          "options": [
            "El lince ibérico (78.1)",
            "El león africano (78.2)",
            "El oso panda (78.3)",
            "El tigre de bengala (78.4)"
          ],
          "answerIndex": 0,
          "explanation": "El lince ibérico."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llama el ecosistema tradicional de robles y encinas donde se cría el cerdo ibérico en España?",
          "options": [
            "La sabana",
            "La tundra",
            "La selva tropical",
            "La dehesa"
          ],
          "answerIndex": 3,
          "explanation": "La dehesa.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The hiking trail through the canyon offers breathtaking views of the waterfalls.\"",
          "options": [
            "No hay montañas ni agua.",
            "El cañón está cerrado.",
            "El sendero a través del cañón ofrece vistas impresionantes de las cascadas.",
            "El sendero está en el fondo del mar."
          ],
          "answerIndex": 2,
          "explanation": "Accurate nature trail translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 3: Foundational & Structural Mastery (El Teide es un volcán majestuo)"
  },
  "es-u16-l4": {
    "id": "es-u16-l4",
    "unit": "es-u16",
    "level": "A2",
    "objective": "Comprender el parte meteorológico, alertas por calor (ola de calor, DANA/gota fría) y calima.",
    "presentation": {
      "explanation": "El parte meteorológico y alertas climáticas en España (AEMET - Agencia Estatal de Meteorología):\n- La previsión meteorológica: Cielos poco nubosos, rachas de viento moderadas, chubascos dispersos\n- La ola de calor (Heatwave): Alerta amarilla, naranja y roja por temperaturas superiores a 40 °C en verano\n- La DANA / Gota Fría (Depresión Aislada en Niveles Altos): Lluvias torrenciales e inundaciones otoñales en el Levante mediterráneo\n- La Calima: Polvo en suspensión procedente del desierto del Sáhara que tiñe el cielo de naranja\n- Consejos: Hidratarse bien, evitar el sol en las horas centrales, llevar paraguas",
      "examples": [
        {
          "target": "La AEMET ha emitido una alerta naranja por ola de calor en el sur peninsular con máximas de cuarenta y dos grados.",
          "reading": "A-e-met a e-mee-TEE-do OO-na a-LER-ta na-RAN-kha...",
          "translation": "AEMET has issued an orange alert for a heatwave in the south of the peninsula with highs of 42 degrees."
        }
      ],
      "mnemonics": [
        "DANA = Torrential autumn cut-off low rains! Calima = Saharan airborne dust in Canary Islands/Spain!"
      ],
      "culturalNotes": [
        "The Spanish State Meteorological Agency (AEMET) uses a color-coded warning system (Verde, Amarillo, Naranja, Rojo) to broadcast public weather safety alerts."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama el fenómeno meteorológico de polvo sahariano en suspensión que reduce la visibilidad?",
          "options": [
            "El granizo (79.1)",
            "La calima (79.2)",
            "La escarcha (79.3)",
            "La nieve (79.4)"
          ],
          "answerIndex": 1,
          "explanation": "La calima."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué organismo estatal es responsable de la predicción y alertas meteorológicas en España?",
          "options": [
            "AEMET (Agencia Estatal de Meteorología) (79.1)",
            "Renfe (79.2)",
            "Correos (79.3)",
            "DGT (79.4)"
          ],
          "answerIndex": 0,
          "explanation": "AEMET."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué significa la sigla meteorológica DANA en España?",
          "options": [
            "Día Soleado Con Aire",
            "Dispositivo Automático De Nieve",
            "Depresión Aislada en Niveles Altos (gota fría)",
            "Dirección De Nubes Altas"
          ],
          "answerIndex": 2,
          "explanation": "Depresión Aislada en Niveles Altos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Drink plenty of water and avoid intense outdoor exercise during peak heat hours.\"",
          "options": [
            "El calor no existe.",
            "Beba abundante agua y evite el ejercicio físico intenso en las horas centrales de calor.",
            "Corra bajo el sol a mediodía.",
            "No beba agua."
          ],
          "answerIndex": 1,
          "explanation": "Accurate heatwave advisory translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 4: Foundational & Structural Mastery (La AEMET ha emitido una alerta)"
  },
  "es-u16-l5": {
    "id": "es-u16-l5",
    "unit": "es-u16",
    "level": "A2",
    "objective": "Hablar sobre el cambio climático, energías renovables en España (solar, eólica) y ecología.",
    "presentation": {
      "explanation": "Sostenibilidad y medio ambiente en España:\n- El cambio climático y el calentamiento global (Climate change & global warming)\n- La sequía (Drought) y la escasez de agua / los embalses y pantanos\n- Energías renovables en España (Líder europeo en energía eólica y solar fotovoltaica):\n  - Los parques eólicos (Molinos de viento modernos en La Mancha y Castilla y León)\n  - La energía solar fotovoltaica y termosolar\n- Acciones ecológicas: El reciclaje selectivo (contenedor amarillo para envases, azul para papel, verde para vidrio), ahorro energético, transporte público",
      "examples": [
        {
          "target": "España es un referente internacional en la producción de energía eólica y solar para combatir el cambio climático.",
          "reading": "es-PA-nya ES oon re-fe-REN-te een-ter-na-syo-NAL...",
          "translation": "Spain is an international benchmark in the production of wind and solar energy to combat climate change."
        }
      ],
      "mnemonics": [
        "Contenedor Verde = Vidrio (Glass), Amarillo = Envases (Plastics/Cans), Azul = Papel (Paper)!"
      ],
      "culturalNotes": [
        "Over 50% of Spain's total electricity generation is produced by clean renewable energy sources, propelled by vast wind turbine arrays and sunny solar plains."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿En qué contenedor de reciclaje de basura se depositan las botellas y envases de vidrio en España?",
          "options": [
            "En el contenedor verde tipo iglú (80.1)",
            "En el contenedor amarillo (80.2)",
            "En la papelera de oficina (80.3)",
            "En el contenedor azul (80.4)"
          ],
          "answerIndex": 0,
          "explanation": "Contenedor verde (Glass)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿En qué fuentes de energía renovable y limpia destaca España como potencia europea?",
          "options": [
            "Carbón mineral únicamente (80.1)",
            "Petróleo crudo (80.2)",
            "Leña (80.3)",
            "Energía solar y eólica (viento) (80.4)"
          ],
          "answerIndex": 3,
          "explanation": "Energía solar y eólica."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué problema medioambiental prolongado afecta a la agricultura y a los embalses en el sur y este de España?",
          "options": [
            "La congelación de los mares",
            "La sequía y la escasez de precipitaciones",
            "La caída de meteoritos",
            "La oscuridad constante"
          ],
          "answerIndex": 1,
          "explanation": "La sequía.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Protecting natural biodiversity and transitioning to renewable energy is essential for the future.\"",
          "options": [
            "Proteger la biodiversidad natural y transicionar a energías renovables es esencial para el futuro.",
            "No debemos cuidar la naturaleza.",
            "Las energías limpias no sirven.",
            "El futuro no importa."
          ],
          "answerIndex": 0,
          "explanation": "Accurate sustainability statement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 5: Foundational & Structural Mastery (España es un referente interna)"
  },
  "es-u17-l1": {
    "id": "es-u17-l1",
    "unit": "es-u17",
    "level": "A2",
    "objective": "Partes del cuerpo humano, expresar síntomas y dolencias con el verbo DOLER en España (\"Me duele la cabeza / la garganta\").",
    "presentation": {
      "explanation": "El cuerpo humano y la expresión del dolor (Verbo DOLER):\n- Partes del cuerpo: La cabeza, los ojos, los oídos, la garganta, el pecho, la espalda, el estómago / la barriga, los brazos, las piernas, las rodillas, los pies\n- El verbo DOLER (funciona como gustar):\n  - \"Me duele la cabeza.\" (Singular: me duele + sustantivo singular)\n  - \"Me duelen los ojos / las rodillas.\" (Plural: me duelen + sustantivo plural)\n- Síntomas comunes:\n  - \"Tengo fiebre / tengo tos / tengo gripe / tengo náuseas / tengo mareo / estoy resfriado.\"\n  - \"Tengo dolor de muelas / dolor de estómago.\"",
      "examples": [
        {
          "target": "Buenos días, doctor; me duele mucho la garganta al tragar y tengo treinta y ocho de fiebre desde anoche.",
          "reading": "bwe-nos DEE-as dok-TOR, me DWE-le MOO-cho la gar-GAN-ta...",
          "translation": "Good morning, doctor; my throat hurts a lot when swallowing and I have had a 38-degree fever since last night."
        }
      ],
      "mnemonics": [
        "Me duele (singular) vs Me duelen (plural) = Spanish pain agreement with the body part!"
      ],
      "culturalNotes": [
        "Spain's public healthcare system (Sistema Nacional de Salud - SNS) provides comprehensive medical care through primary health centers (Centros de Salud) in every neighborhood."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo dices en español que te duelen los dos pies tras una larga caminata?",
          "options": [
            "Me duele el pie (81.1)",
            "Tengo dolor de cabeza (81.2)",
            "Tengo hambre (81.3)",
            "Me duelen los pies (81.4)"
          ],
          "answerIndex": 3,
          "explanation": "Me duelen los pies (plural)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la forma correcta para \"My throat hurts\"?",
          "options": [
            "Me duelen la garganta (81.1)",
            "Tengo dolor de rodilla (81.2)",
            "Estoy cansado (81.3)",
            "Me duele la garganta (81.4)"
          ],
          "answerIndex": 3,
          "explanation": "Me duele la garganta."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llaman los centros médicos de atención primaria en los barrios de España?",
          "options": [
            "Centros de Salud (o ambulatorios)",
            "Hospitales de campaña",
            "Comisarías",
            "Ayuntamientos"
          ],
          "answerIndex": 0,
          "explanation": "Centros de Salud.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"I have a terrible headache and dizziness; I need to see a doctor.\"",
          "options": [
            "Tengo hambre y quiero comer.",
            "No tengo ninguna molestia.",
            "El hospital está lejos.",
            "Tengo un dolor de cabeza terrible y mareos; necesito ver a un médico."
          ],
          "answerIndex": 3,
          "explanation": "Accurate symptom translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 1: Foundational & Structural Mastery (Buenos días, doctor; me duele )"
  },
  "es-u17-l2": {
    "id": "es-u17-l2",
    "unit": "es-u17",
    "level": "A2",
    "objective": "La farmacia en España, pedir medicamentos, prospectos, posología y la cruz verde luminosa.",
    "presentation": {
      "explanation": "En la farmacia en España (Identificadas por la icónica cruz verde luminosa):\n- Tipos de medicamentos:\n  - Con receta médica (Prescription) / Sin receta (Over-the-counter - OTC)\n  - El analgésico (paracetamol, ibuprofeno), el antibiótico, el jarabe para la tos, las pastillas para chupar, los antihistamínicos, las tiritas (plasters/band-aids)\n- La posología (Dosage instructions):\n  - \"Tomar un comprimido cada ocho horas con las comidas.\"\n  - \"Aplicar la pomada dos veces al día.\"\n- La Farmacia de Guardia (24-hour rotating emergency pharmacy on duty)",
      "examples": [
        {
          "target": "Buenas tardes, ¿me da una caja de paracetamol de un gramo y un jarabe para la tos seca, por favor?",
          "reading": "BWE-nas TAR-des, me DA OO-na KA-kha de pa-ra-se-ta-MOL...",
          "translation": "Good afternoon, could you give me a box of 1g paracetamol and a dry cough syrup, please?"
        }
      ],
      "mnemonics": [
        "Cruz Verde Luminosa = Iconic glowing green cross identifying Spanish pharmacies everywhere!"
      ],
      "culturalNotes": [
        "Pharmacies in Spain are heavily regulated community health pillars; when standard pharmacies close at night, designated \"Farmacias de Guardia\" remain open 24/7."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se le llama en España a los pequeños apósitos adhesivos para cubrir heridas leves?",
          "options": [
            "Las tiritas (82.1)",
            "Las gasas estériles (82.2)",
            "Los vendajes de yeso (82.3)",
            "Las vendas elásticas (82.4)"
          ],
          "answerIndex": 0,
          "explanation": "Las tiritas (band-aids)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama la farmacia que permanece abierta durante la noche para urgencias médicas?",
          "options": [
            "La farmacia de guardia (82.1)",
            "La farmacia cerrada (82.2)",
            "El supermercado (82.3)",
            "El quiosco (82.4)"
          ],
          "answerIndex": 0,
          "explanation": "Farmacia de guardia."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué símbolo luminoso de color verde en la calle identifica a las farmacias en España?",
          "options": [
            "Un semáforo rojo",
            "Una estrella azul",
            "Un triángulo amarillo",
            "Una cruz verde luminosa (o cruz de Malta verde)"
          ],
          "answerIndex": 3,
          "explanation": "Cruz verde luminosa.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Take one tablet every eight hours after meals for five days.\"",
          "options": [
            "Tome todas las pastillas juntas.",
            "No tome ninguna medicina.",
            "Tome un comprimido cada ocho horas después de las comidas durante cinco días.",
            "Beba agua fría."
          ],
          "answerIndex": 2,
          "explanation": "Accurate posology translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 2: Foundational & Structural Mastery (Buenas tardes, ¿me da una caja)"
  },
  "es-u17-l3": {
    "id": "es-u17-l3",
    "unit": "es-u17",
    "level": "A2",
    "objective": "Urgencias médicas en España, llamar al 112 / 061, la tarjeta sanitaria individual (TSI) y la Tarjeta Sanitaria Europea (TSE).",
    "presentation": {
      "explanation": "Servicios de urgencias y asistencia sanitaria en España:\n- El número de emergencias universal: 112 (Policía, Bomberos, Ambulancias) o el 061 (Urgencias Sanitarias)\n- En el servicio de Urgencias del Hospital:\n  - El Triaje médico (Clasificación de prioridad según la gravedad del paciente)\n  - \"Es una emergencia; el paciente tiene dificultad para respirar y dolor en el pecho.\"\n- Documentación sanitaria:\n  - La Tarjeta Sanitaria Individual (TSI de la Seguridad Social española)\n  - La Tarjeta Sanitaria Europea (TSE para ciudadanos de la Unión Europea)",
      "examples": [
        {
          "target": "¡Rápido, llame al uno uno dos! Hay una persona que ha sufrido una caída y necesita una ambulancia urgente.",
          "reading": "RA-pee-do, YA-me al OO-no OO-no DOS...",
          "translation": "Quick, call 112! There is a person who has suffered a fall and needs an urgent ambulance."
        }
      ],
      "mnemonics": [
        "112 = Spain & EU Universal Emergency Number for instant multi-language assistance!"
      ],
      "culturalNotes": [
        "Spain has one of the highest life expectancies in the world (over 83.5 years), anchored by the universal coverage of its public healthcare system and the Mediterranean diet."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es el número telefónico gratuito universal de emergencias en España y toda la Unión Europea?",
          "options": [
            "El 911 (83.1)",
            "El 112 (83.2)",
            "El 999 (83.3)",
            "El 000 (83.4)"
          ],
          "answerIndex": 1,
          "explanation": "El 112."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué tarjeta permite a los ciudadanos europeos recibir atención médica urgente en España como residentes locales?",
          "options": [
            "La Tarjeta Sanitaria Europea (TSE) (83.1)",
            "La tarjeta de crédito (83.2)",
            "El billete de metro (83.3)",
            "El carnet de conducir (83.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Tarjeta Sanitaria Europea (TSE)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se llama el proceso de evaluación médica inicial en urgencias para clasificar la gravedad del paciente?",
          "options": [
            "El examen final",
            "La facturación",
            "El triaje médico",
            "La entrevista de trabajo"
          ],
          "answerIndex": 2,
          "explanation": "El triaje médico.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The patient is allergic to penicillin and requires immediate oxygen assistance.\"",
          "options": [
            "No hay médicos.",
            "El paciente es alérgico a la penicilina y requiere asistencia inmediata de oxígeno.",
            "El hospital está cerrado.",
            "El paciente tiene sueño."
          ],
          "answerIndex": 1,
          "explanation": "Accurate emergency statement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 3: Foundational & Structural Mastery (¡Rápido, llame al uno uno dos!)"
  },
  "es-u17-l4": {
    "id": "es-u17-l4",
    "unit": "es-u17",
    "level": "A2",
    "objective": "La dieta mediterránea, aceite de oliva virgen extra (AOVE), hábitos de vida saludables y bienestar en España.",
    "presentation": {
      "explanation": "Estilo de vida saludable y bienestar en España:\n- La Dieta Mediterránea (Patrimonio Cultural Inmaterial UNESCO):\n  - Aceite de oliva virgen extra (AOVE - el \"oro líquido\" de Jaén y Córdoba)\n  - Abundancia de verduras de la huerta, legumbres (lentejas, garbanzos), pescado azul (sardinas, atún), fruta fresca y frutos secos\n- Hábitos de longevidad:\n  - La siesta breve y reparadora (15-20 minutos)\n  - Pasear al aire libre (el paseo vespertino en comunidad)\n  - Comer en familia y sobremesa tranquila sin estrés",
      "examples": [
        {
          "target": "La dieta mediterránea rica en aceite de oliva virgen extra y pescado azul es clave para la longevidad y la salud cardiovascular.",
          "reading": "la DYE-ta me-dee-te-RRA-ne-a REE-ka en a-THAY-te de o-LEE-va...",
          "translation": "The Mediterranean diet rich in extra virgin olive oil and oily fish is key to longevity and cardiovascular health."
        }
      ],
      "mnemonics": [
        "AOVE = Aceite de Oliva Virgen Extra (Liquid Gold of Mediterranean wellness)!"
      ],
      "culturalNotes": [
        "Spain is the world's largest producer of olive oil, generating nearly half of the global supply from endless olive groves covering Andalusia."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué ingrediente fundamental de la dieta mediterránea es conocido como el \"oro líquido\"?",
          "options": [
            "La margarina (84.1)",
            "El aceite de oliva virgen extra (AOVE) (84.2)",
            "El aceite de palma (84.3)",
            "La mantequilla (84.4)"
          ],
          "answerIndex": 1,
          "explanation": "Aceite de oliva virgen extra."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la duración recomendada para una siesta reparadora y beneficiosa para la salud según los médicos?",
          "options": [
            "De 15 a 20 minutos (84.1)",
            "Todo el día (84.2)",
            "Cero minutos siempre (84.3)",
            "De 4 horas (84.4)"
          ],
          "answerIndex": 0,
          "explanation": "15 a 20 minutos."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué región española es el mayor productor mundial de aceite de oliva virgen extra?",
          "options": [
            "Asturias",
            "Andalucía (Jaén y Córdoba)",
            "Galicia",
            "Canarias"
          ],
          "answerIndex": 1,
          "explanation": "Andalucía (Jaén).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Daily physical activity, social connections, and nutritious food promote lifelong wellbeing.\"",
          "options": [
            "La actividad física diaria, las relaciones sociales y la comida nutritiva promueven el bienestar durante toda la vida.",
            "No debemos hacer ejercicio.",
            "La comida chatarra es saludable.",
            "El sedentarismo es bueno."
          ],
          "answerIndex": 0,
          "explanation": "Accurate wellness translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 4: Foundational & Structural Mastery (La dieta mediterránea rica en )"
  },
  "es-u17-l5": {
    "id": "es-u17-l5",
    "unit": "es-u17",
    "level": "A2",
    "objective": "Donación de órganos en España (Líder mundial de la ONT durante más de 30 años consecutivos) y solidaridad sanitaria.",
    "presentation": {
      "explanation": "España: Potencia mundial en donación y trasplantes (ONT - Organización Nacional de Trasplantes):\n- Récord mundial: España ha sido líder mundial absoluto en donación de órganos durante más de 32 años consecutivos (casi 50 donantes por millón de población)\n- El Modelo Español (The Spanish Model):\n  - Coordinación intrahospitalaria por médicos intensivistas dedicados\n  - Donación altruista, pública y transparente respaldada por la generosidad de la sociedad\n- Vocabulario médico avanzado: Trasplante de corazón, riñón, hígado, pulmón; compatibilidad de tejidos; banco de sangre y donación de médula ósea",
      "examples": [
        {
          "target": "El modelo español de trasplantes de la ONT es un referente ético y médico admirado y replicado en todo el mundo.",
          "reading": "el mo-DE-lo es-pa-NYOL de tras-PLAN-tes...",
          "translation": "The Spanish transplant model of the ONT is an ethical and medical benchmark admired and replicated across the globe."
        }
      ],
      "mnemonics": [
        "ONT (Organización Nacional de Trasplantes) = Spain's world #1 organ transplant system for over 30 years!"
      ],
      "culturalNotes": [
        "Spain's global leadership in organ donation is driven by a deep societal culture of altruism and the highly specialized network of hospital transplant coordinators."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué organismo público español coordina el sistema de trasplantes y donaciones líder en el mundo?",
          "options": [
            "La ONT (Organización Nacional de Trasplantes) (85.1)",
            "El Banco de España (85.2)",
            "El Instituto Cervantes (85.3)",
            "La DGT (85.4)"
          ],
          "answerIndex": 0,
          "explanation": "La ONT."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Durante cuántos años consecutivos ha liderado España el ranking mundial de donación y trasplante de órganos?",
          "options": [
            "Solo 1 año (85.1)",
            "Ningún año (85.2)",
            "5 meses (85.3)",
            "Más de 30 años consecutivos (85.4)"
          ],
          "answerIndex": 3,
          "explanation": "Más de 30 años consecutivos."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el principio ético fundamental que rige la donación de órganos en la sanidad pública española?",
          "options": [
            "La donación altruista, voluntaria, anónima y gratuita",
            "La venta comercial con fines de lucro",
            "El intercambio privado",
            "La subasta pública"
          ],
          "answerIndex": 0,
          "explanation": "Donación altruista y anónima.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The altruistic generosity of organ donors saves thousands of lives each year.\"",
          "options": [
            "La medicina no salva vidas.",
            "Los trasplantes no funcionan.",
            "No hay donantes en España.",
            "La generosidad altruista de los donantes de órganos salva miles de vidas cada año."
          ],
          "answerIndex": 3,
          "explanation": "Accurate transplant statement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 5: Foundational & Structural Mastery (El modelo español de trasplant)"
  },
  "es-u18-l1": {
    "id": "es-u18-l1",
    "unit": "es-u18",
    "level": "B1",
    "objective": "Buscar piso en alquiler en España (Idealista, Fotocasa), contrato de arrendamiento (LAU), fianza y gastos de comunidad.",
    "presentation": {
      "explanation": "El mercado de alquiler de vivienda en España:\n- Portales inmobiliarios principales: Idealista, Fotocasa, Habitaclia\n- Términos contractuales (Ley de Arrendamientos Urbanos - LAU):\n  - El contrato de arrendamiento / alquiler\n  - La fianza legal (Equivalente a un mes de renta depositado en el organismo autonómico, ej. IVIMA en Madrid o Incasòl en Cataluña)\n  - La fianza complementaria / garantía adicional (Máximo dos meses adicionales según la ley)\n  - Gastos de comunidad (Community fees - mantenimiento del edificio, ascensor y limpieza de portal)\n  - Suministros (Luz, agua, gas e internet a cargo del inquilino / arrendatario)\n- Tipos de vivienda: Piso exterior con balcón / terraza, piso interior luminoso, ático con vistas, estudio amueblado\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Buenas tardes, llamo por el piso en alquiler en el barrio de Salamanca; ¿los gastos de comunidad y el IBI están incluidos en la renta mensual?",
          "reading": "BWE-nas TAR-des, YA-mo por el PEE-so en al-kee-LER...",
          "translation": "Good afternoon, I am calling about the flat for rent in the Salamanca neighborhood; are the community fees and property tax included in the monthly rent?"
        }
      ],
      "mnemonics": [
        "Fianza legal de la LAU = Legally protected security deposit held in official regional escrow!"
      ],
      "culturalNotes": [
        "In Spain, \"piso exterior\" means the windows face the open street, typically offering more natural light than a \"piso interior\" facing the inner courtyard (patio de luces)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama en España el importe que entrega el inquilino como garantía al firmar el contrato de alquiler?",
          "options": [
            "La propina (86.1)",
            "La factura de la luz (86.2)",
            "El billete de tren (86.3)",
            "La fianza legal (86.4)"
          ],
          "answerIndex": 3,
          "explanation": "La fianza legal."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué significa que un piso en Madrid o Barcelona sea \"exterior\"?",
          "options": [
            "Que no tiene techo (86.1)",
            "Que está en el campo (86.2)",
            "Que está cerrado (86.3)",
            "Que sus ventanas principales dan a la calle (con más luz natural) (86.4)"
          ],
          "answerIndex": 3,
          "explanation": "Piso exterior (da a la calle)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es la ley española que regula los contratos de alquiler de vivienda habitual?",
          "options": [
            "El Código de Circulación",
            "La Ley de Minas",
            "La Ley de Pesca",
            "La LAU (Ley de Arrendamientos Urbanos)"
          ],
          "answerIndex": 3,
          "explanation": "La LAU.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The tenant must pay one month of legal security deposit and monthly community fees.\"",
          "options": [
            "El piso no tiene agua ni luz.",
            "El contrato de alquiler dura un día.",
            "El inquilino debe abonar un mes de fianza legal y los gastos mensuales de comunidad.",
            "No hay que pagar nada."
          ],
          "answerIndex": 2,
          "explanation": "Accurate lease agreement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 1: Foundational & Structural Mastery (Buenas tardes, llamo por el pi)"
  },
  "es-u18-l2": {
    "id": "es-u18-l2",
    "unit": "es-u18",
    "level": "B1",
    "objective": "Las estancias de la casa, mobiliario moderno, reformas, cédula de habitabilidad y certificado de eficiencia energética.",
    "presentation": {
      "explanation": "Estancias, reformas y certificados oficiales de la vivienda:\n- Estancias de la casa: El recibidor/hall, el salón-comedor, la cocina americana (open-plan kitchen), el dormitorio principal con armario empotrado, el cuarto de baño con plato de ducha, el lavadero/tendedero, la terraza\n- Documentación técnica y legal obligatoria en España:\n  - La Cédula de Habitabilidad (Acredita que la vivienda cumple las condiciones mínimas de salubridad y espacio para ser habitada)\n  - El Certificado de Eficiencia Energética (Etiqueta de la A a la G sobre el consumo de energía y emisiones de CO2)\n- Reformas e instalaciones: Suelo de parquet o tarima flotante, ventanas de doble acristalamiento (Climalit) con rotura de puente térmico para aislamiento acústico y térmico, aire acondicionado por conductos\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La vivienda cuenta con una reforma integral reciente, ventanas Climalit de alto aislamiento y certificado energético de clase A.",
          "reading": "la vee-VYEN-da KWEN-ta kon OO-na re-FOR-ma een-te-GRAL...",
          "translation": "The property features a recent full renovation, high-insulation Climalit windows, and an A-rated energy efficiency certificate."
        }
      ],
      "mnemonics": [
        "Cédula de habitabilidad + Certificado Energético (A-G) = Essential Spanish property compliance docs!"
      ],
      "culturalNotes": [
        "Energy efficiency ratings (Etiqueta Energética) are legally mandatory in Spain for renting or selling any property, heavily impacting valuation and utility bills."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué documento oficial acredita que una vivienda cumple los requisitos mínimos legales de habitabilidad en España?",
          "options": [
            "La cédula de habitabilidad (87.1)",
            "El menú del día (87.2)",
            "El carnet de socio (87.3)",
            "La tarjeta de embarque (87.4)"
          ],
          "answerIndex": 0,
          "explanation": "La cédula de habitabilidad."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué letra representa la máxima eficiencia energética y menor consumo en la escala de certificación de viviendas?",
          "options": [
            "La letra A (en verde) (87.1)",
            "La letra G (en rojo) (87.2)",
            "La letra Z (87.3)",
            "La letra X (87.4)"
          ],
          "answerIndex": 0,
          "explanation": "La letra A."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué tipo de ventanas con cámara de aire son el estándar en las reformas españolas para aislar del frío y del ruido urbano?",
          "options": [
            "Ventanas de cristal simple fino",
            "Persianas rotas",
            "Ventanas de doble acristalamiento (tipo Climalit)",
            "Puertas de tela"
          ],
          "answerIndex": 2,
          "explanation": "Ventanas de doble acristalamiento.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The apartment has a spacious living room, fitted wardrobes, and an open terrace overlooking the park.\"",
          "options": [
            "La casa es muy pequeña y oscura.",
            "El piso tiene un salón espacioso, armarios empotrados y una terraza abierta con vistas al parque.",
            "El edificio no tiene ascensor.",
            "No hay ventanas en el dormitorio."
          ],
          "answerIndex": 1,
          "explanation": "Accurate apartment description translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 2: Foundational & Structural Mastery (La vivienda cuenta con una ref)"
  },
  "es-u18-l3": {
    "id": "es-u18-l3",
    "unit": "es-u18",
    "level": "B1",
    "objective": "La comunidad de propietarios en España (LPH), las juntas de vecinos, el presidente de la comunidad y las derramas.",
    "presentation": {
      "explanation": "La vida en comunidad y la Ley de Propiedad Horizontal (LPH) en España:\n- La comunidad de propietarios (Owners' association):\n  - El Presidente de la comunidad (Elegido por turno rotatorio o votación anual entre los propietarios)\n  - El Administrador de fincas colegiado (Gestiona las cuentas, el presupuesto y los proveedores del edificio)\n- La Junta de propietarios (Reunión anual ordinaria / extraordinaria para aprobar presupuestos y obras)\n- Las Derramas (Extraordinary assessment fees):\n  - Cuota extraordinaria aprobada en junta para costear reparaciones imprevistas de gran envergadura (ej. reparar la fachada, sustituir el ascensor o impermeabilizar el tejado)\n- Normas de convivencia: Respetar las horas de descanso nocturno (sin ruidos de 22:00 a 08:00)\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "En la junta de propietarios de ayer se aprobó por mayoría una derrama para instalar placas solares comunitarias en la azotea.",
          "reading": "en la KHOON-ta de pro-pye-TA-ryos de a-YER se a-pro-BO...",
          "translation": "In yesterday's owners' meeting, an extraordinary assessment was approved by majority to install community solar panels on the roof."
        }
      ],
      "mnemonics": [
        "Derrama = Extraordinary building maintenance fee approved by the owners' community meeting!"
      ],
      "culturalNotes": [
        "Community meetings (juntas de vecinos) are a famous fixture of Spanish urban culture, humorously popularized by iconic television series like \"Aquí no hay quien viva\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama en España el pago extraordinario que deben hacer los propietarios de un edificio para una obra o reparación imprevista?",
          "options": [
            "Una multa de tráfico (88.1)",
            "Una derrama (88.2)",
            "Un billete de lotería (88.3)",
            "Un seguro de viaje (88.4)"
          ],
          "answerIndex": 1,
          "explanation": "Una derrama."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Quién es el profesional encargado de gestionar la contabilidad y el mantenimiento de una comunidad de vecinos?",
          "options": [
            "El administrador de fincas (88.1)",
            "El taxista (88.2)",
            "El conserje solamente (88.3)",
            "El cartero (88.4)"
          ],
          "answerIndex": 0,
          "explanation": "El administrador de fincas."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué ley española regula los derechos y obligaciones en los edificios en régimen de propiedad compartida?",
          "options": [
            "La Ley de Minas",
            "La Ley de Propiedad Horizontal (LPH)",
            "El Estatuto de los Trabajadores",
            "El Código Penal"
          ],
          "answerIndex": 1,
          "explanation": "La Ley de Propiedad Horizontal (LPH).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The owners' association voted in favor of renovating the building facade and modernizing the elevator.\"",
          "options": [
            "La comunidad de propietarios votó a favor de rehabilitar la fachada del edificio y modernizar el ascensor.",
            "No se permite hacer obras en el inmueble.",
            "El ascensor funciona perfectamente.",
            "Los vecinos decidieron demoler el edificio."
          ],
          "answerIndex": 0,
          "explanation": "Accurate community meeting translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 3: Foundational & Structural Mastery (En la junta de propietarios de)"
  },
  "es-u18-l4": {
    "id": "es-u18-l4",
    "unit": "es-u18",
    "level": "B1",
    "objective": "Arquitectura tradicional española: Los patios andaluces de Córdoba (Patrimonio UNESCO), casas encaladas y refrigeración bioclimática natural.",
    "presentation": {
      "explanation": "Arquitectura tradicional y bioclimatismo mediterráneo en España:\n- La Fiesta de los Patios de Córdoba (Patrimonio Cultural Inmaterial de la Humanidad UNESCO):\n  - Casas tradicionales con patio central adornado con cientos de macetas con gitanillas, geranios, claveles y jazmín\n  - El microclima del patio andaluz: Las paredes encaladas de blanco reflejan la radiación solar extrema, mientras que la fuente central de agua y la vegetación exuberante producen enfriamiento evaporativo natural (reduciendo la temperatura hasta 8-10 °C)\n- Arquitectura vernácula:\n  - Los cármenes de Granada con huertos y vistas a la Alhambra\n  - Los hórreos asturianos y gallegos (graneros elevados sobre pilares para proteger el grano de la humedad y los roedores)\n  - Las casas solariegas y masías catalanas de piedra\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Los patios cordobeses son un prodigio de arquitectura bioclimática natural donde el agua y las plantas refrescan el hogar en pleno verano.",
          "reading": "los PA-tyos kor-do-BE-ses son oon pro-DEE-gyo...",
          "translation": "The Cordoban courtyards are a marvel of natural bioclimatic architecture where water and plants cool the home in the height of summer."
        }
      ],
      "mnemonics": [
        "Patios de Córdoba (UNESCO) = Natural evaporative cooling architecture through whitewashed walls, fountains, and vibrant flowers!"
      ],
      "culturalNotes": [
        "Every May, Córdoba celebrates the Festival de los Patios, opening private residential courtyards to the public in a breathtaking display of floral pride and communal hospitality."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué festival de arquitectura floral tradicional en Andalucía está reconocido como Patrimonio Cultural Inmaterial por la UNESCO?",
          "options": [
            "Las Fallas de Valencia (89.1)",
            "La Fiesta de los Patios de Córdoba (89.2)",
            "Los Sanfermines (89.3)",
            "La Tomatina de Buñol (89.4)"
          ],
          "answerIndex": 1,
          "explanation": "La Fiesta de los Patios de Córdoba."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llaman las construcciones tradicionales de piedra y madera sobre pilares de Asturias y Galicia para guardar las cosechas?",
          "options": [
            "Los hórreos (89.1)",
            "Las masías (89.2)",
            "Los molinos de viento (89.3)",
            "Los rascacielos (89.4)"
          ],
          "answerIndex": 0,
          "explanation": "Los hórreos."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el beneficio bioclimático del patio andaluz con paredes encaladas y fuente de agua en los calurosos veranos del sur?",
          "options": [
            "Enfriamiento evaporativo natural y reducción de la temperatura interior",
            "Bloqueo del paso del aire",
            "Atracción de aire caliente",
            "Aumento del consumo de electricidad"
          ],
          "answerIndex": 0,
          "explanation": "Enfriamiento evaporativo natural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Whitewashed stone walls and central fountain courtyards have provided sustainable bioclimatic cooling for centuries.\"",
          "options": [
            "No se deben plantar flores en los patios.",
            "El agua no refresca el ambiente.",
            "Las casas de piedra son muy calurosas.",
            "Las paredes de piedra encaladas y los patios con fuentes centrales han proporcionado refrigeración bioclimática sostenible durante siglos."
          ],
          "answerIndex": 3,
          "explanation": "Accurate bioclimatic architecture translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Arquitectura tradicional española"
  },
  "es-u18-l5": {
    "id": "es-u18-l5",
    "unit": "es-u18",
    "level": "B1",
    "objective": "Hogares inteligentes en España: Domótica, autoconsumo fotovoltaico en tejados, aerotermia y gestión eficiente del agua.",
    "presentation": {
      "explanation": "Sostenibilidad y hogares inteligentes (Smart Homes) en España:\n- Autoconsumo solar fotovoltaico (Boom del autoconsumo en tejados individuales y comunidades energéticas):\n  - Placas solares con inversor híbrido y batería de litio para almacenamiento\n  - Compensación de excedentes en la factura eléctrica (Venta de energía sobrante a la red)\n- Sistemas de climatización de vanguardia:\n  - La aerotermia (Bomba de calor aire-agua de alta eficiencia energética que proporciona calefacción en invierno, refrigeración en verano y agua caliente sanitaria con suelo radiante-refrescante)\n- Domótica y hogar conectado:\n  - Control inteligente de persianas según la incidencia solar, termostatos programables por zonas, sensores de fugas de agua y cargadores de coche eléctrico bidireccionales (V2G)\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Nuestra vivienda combina aerotermia con suelo radiante y paneles solares fotovoltaicos, logrando un consumo energético casi nulo.",
          "reading": "NWES-tra vee-VYEN-da kom-BEE-na a-e-ro-TER-mya...",
          "translation": "Our home combines aerothermal heat pumps with underfloor climate control and solar photovoltaic panels, achieving near-zero energy consumption."
        }
      ],
      "mnemonics": [
        "Aerotermia + Suelo radiante + Placas solares = The state-of-the-art Spanish smart sustainable home standard!"
      ],
      "culturalNotes": [
        "Spain's progressive repeal of the \"sun tax\" in 2018 triggered a rooftop solar revolution, making residential solar and aerothermal heating central to modern home renovation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué tecnología de climatización renovable y eficiente utiliza la energía del aire exterior para calefacción y refrigeración?",
          "options": [
            "La aerotermia (bomba de calor aire-agua) (90.1)",
            "Una estufa de leña (90.2)",
            "Un radiador eléctrico antiguo (90.3)",
            "Un brasero de carbón (90.4)"
          ],
          "answerIndex": 0,
          "explanation": "La aerotermia."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama el sistema que permite verter la energía solar sobrante a la red a cambio de un descuento en el recibo de la luz?",
          "options": [
            "Impuesto al sol (90.1)",
            "Peaje de acceso (90.2)",
            "Corte de suministro (90.3)",
            "Compensación de excedentes (90.4)"
          ],
          "answerIndex": 3,
          "explanation": "Compensación de excedentes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cómo se denomina al conjunto de sistemas automatizados que gestionan la energía, la seguridad y el confort de una vivienda inteligente?",
          "options": [
            "La geología",
            "La botánica",
            "La gastronomía",
            "La domótica (hogar inteligente)"
          ],
          "answerIndex": 3,
          "explanation": "La domótica.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Rooftop photovoltaic solar panels and automated smart climate control significantly reduce household carbon emissions.\"",
          "options": [
            "Las casas no necesitan electricidad.",
            "Las placas solares aumentan la contaminación.",
            "Los paneles solares fotovoltaicos en el tejado y el control climático inteligente reducen notablemente las emisiones de carbono del hogar.",
            "La domótica no ahorra energía."
          ],
          "answerIndex": 2,
          "explanation": "Accurate smart home statement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Hogares inteligentes en España"
  },
  "es-u19-l1": {
    "id": "es-u19-l1",
    "unit": "es-u19",
    "level": "B1",
    "objective": "El mercado laboral en España (InfoJobs, LinkedIn), tipos de contrato (indefinido, fijo-discontinuo), nómina y Estatuto de los Trabajadores.",
    "presentation": {
      "explanation": "El empleo y la contratación laboral en España:\n- Portales de empleo: InfoJobs, LinkedIn, Tecnoempleo\n- Tipos de contratos laborales (Reforma Laboral / Estatuto de los Trabajadores):\n  - Contrato indefinido (La modalidad contractual ordinaria y general para estabilidad laboral)\n  - Contrato fijo-discontinuo (Para trabajos estacionales o de temporada en turismo y agricultura)\n  - Contrato formativo (En alternancia o para la obtención de práctica profesional)\n- Conceptos de la nómina mensual:\n  - Salario bruto (Gross salary) vs Salario neto (Net take-home pay)\n  - Retención del IRPF (Impuesto sobre la Renta de las Personas Físicas)\n  - Cotizaciones a la Seguridad Social (Contingencias comunes, desempleo y formación)\n  - Las 14 pagas anuales (12 pagas ordinarias + 2 pagas extraordinarias en verano y Navidad)\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "He firmado un contrato indefinido a jornada completa con catorce pagas y seguro médico corporativo.",
          "reading": "e feer-MA-do oon kon-TRA-to een-de-fee-NEE-do...",
          "translation": "I have signed a permanent full-time contract with fourteen monthly salaries and corporate health insurance."
        }
      ],
      "mnemonics": [
        "Contrato indefinido (Permanent contract) + 14 pagas anuales (Summer & Christmas extra pay) = Spanish employment stability!"
      ],
      "culturalNotes": [
        "In Spain, it is traditional for annual salaries to be paid across 14 installments (\"14 pagas\"), including extra summer (Paga de Verano) and Christmas (Paga de Navidad) bonuses."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es el contrato laboral estándar y prioritario en España que garantiza estabilidad indefinida?",
          "options": [
            "Un contrato verbal informal (91.1)",
            "Un contrato de un día (91.2)",
            "Un billete de viaje (91.3)",
            "El contrato indefinido (91.4)"
          ],
          "answerIndex": 3,
          "explanation": "El contrato indefinido."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llaman las dos pagas extraordinarias adicionales que suelen cobrar los trabajadores españoles en verano y Navidad?",
          "options": [
            "Las multas (91.1)",
            "Las propinas voluntarias (91.2)",
            "Las dietas (91.3)",
            "Las pagas extraordinarias (las dos extras) (91.4)"
          ],
          "answerIndex": 3,
          "explanation": "Pagas extraordinarias."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es la ley marco fundamental que regula los derechos y deberes de trabajadores y empresarios en España?",
          "options": [
            "El Código de Tráfico",
            "La Ley de Costas",
            "El Estatuto de los Trabajadores",
            "La Ley del Deporte"
          ],
          "answerIndex": 2,
          "explanation": "El Estatuto de los Trabajadores.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The employee receives a gross annual salary distributed in fourteen monthly payments with social security coverage.\"",
          "options": [
            "El trabajador no cobra ningún salario.",
            "El empleado percibe un salario bruto anual distribuido en catorce pagas con cobertura de la Seguridad Social.",
            "No hay Seguridad Social en la empresa.",
            "El contrato dura solo un mes."
          ],
          "answerIndex": 1,
          "explanation": "Accurate employment contract translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 19, Lesson 1: Foundational & Structural Mastery (He firmado un contrato indefin)"
  },
  "es-u19-l2": {
    "id": "es-u19-l2",
    "unit": "es-u19",
    "level": "B1",
    "objective": "Cultura laboral española: Jornada continua de verano, la pausa del café (\"el cafecito de media mañana\"), teletrabajo y desconexión digital.",
    "presentation": {
      "explanation": "Ritmos de trabajo, pausas y conciliación laboral en España:\n- La jornada intensiva / continua de verano (Horario de verano de 08:00 a 15:00 en julio y agosto sin pausa para comer, permitiendo disfrutar de la tarde libre y la playa/piscina)\n- El ritual del \"Café de media mañana\" (A las 10:30 o 11:00, los compañeros de oficina salen juntos al bar cercano a tomar un café con leche con una tostada con tomate o pincho de tortilla para hacer networking y desconectar 15-20 minutos)\n- El Derecho a la Desconexión Digital (Ley española que garantiza no responder emails ni mensajes de trabajo fuera del horario laboral)\n- Teletrabajo y trabajo híbrido (Modelo estándar de 2-3 días en oficina y 2 días en remoto)\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Durante los meses de julio y agosto tenemos jornada intensiva de ocho a tres, lo que facilita enormemente la conciliación familiar.",
          "reading": "doo-RAN-te los ME-ses de KHOO-lyo ee a-GOS-to...",
          "translation": "During July and August we have an intensive summer schedule from 8 to 3, which greatly facilitates work-life balance."
        }
      ],
      "mnemonics": [
        "Jornada intensiva de verano (8:00-15:00) + El cafecito de media mañana + Desconexión digital = Spanish workplace wellbeing!"
      ],
      "culturalNotes": [
        "The mid-morning coffee break (el café de las 11) is an essential institution in Spanish professional life, where cross-department camaraderie and genuine friendships are forged."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama el horario laboral estival en España que permite salir a las 15:00 sin pausa para comer?",
          "options": [
            "La jornada intensiva (o continua) de verano (92.1)",
            "El trabajo nocturno (92.2)",
            "El turno de noche (92.3)",
            "La jornada partida (92.4)"
          ],
          "answerIndex": 0,
          "explanation": "Jornada intensiva de verano."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué derecho legal protege a los trabajadores en España de no atender llamadas ni correos de trabajo en su tiempo libre?",
          "options": [
            "El derecho a la desconexión digital (92.1)",
            "El derecho de admisión (92.2)",
            "El secreto profesional (92.3)",
            "La huelga de brazos caídos (92.4)"
          ],
          "answerIndex": 0,
          "explanation": "Desconexión digital."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué refrigerio clásico suele acompañar al café de media mañana de los trabajadores en los bares españoles?",
          "options": [
            "Una hamburguesa doble",
            "Un pincho de tortilla de patatas o tostada con tomate y aceite",
            "Paella completa",
            "Sopa caliente de marisco"
          ],
          "answerIndex": 1,
          "explanation": "Pincho de tortilla o tostada.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Flexible hybrid working hours and summer intensive schedules significantly improve employee satisfaction and productivity.\"",
          "options": [
            "El horario híbrido flexible y la jornada intensiva de verano mejoran notablemente la satisfacción y productividad de los empleados.",
            "Los empleados deben trabajar los fines de semana.",
            "No se permiten pausas para el café.",
            "El teletrabajo está prohibido."
          ],
          "answerIndex": 0,
          "explanation": "Accurate workplace culture translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Cultura laboral española"
  },
  "es-u19-l3": {
    "id": "es-u19-l3",
    "unit": "es-u19",
    "level": "B1",
    "objective": "Derechos laborales en España: Vacaciones pagadas (30 días naturales / 22 laborables), permisos de paternidad/maternidad iguales (16 semanas) y finiquito.",
    "presentation": {
      "explanation": "Derechos laborales, permisos y desvinculación en España:\n- Vacaciones retribuidas anuales (Mínimo legal de 30 días naturales o 22 días laborables pagados al año por ley)\n- Permisos por nacimiento y cuidado del menor (Permiso de maternidad y paternidad):\n  - España es pionera mundial en igualdad: 16 semanas de permiso 100% retribuidas e intransferibles tanto para la madre como para el padre (las primeras 6 semanas obligatorias e ininterrumpidas tras el parto)\n- La extinción del contrato de trabajo y el Finiquito:\n  - El finiquito (Liquidación económica final que incluye: días trabajados del mes en curso, parte proporcional de pagas extraordinarias devengadas y vacaciones no disfrutadas)\n  - La indemnización por despido y prestación contributiva por desempleo (\"el paro\" del SEPE)\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Ambos progenitores tienen derecho a dieciséis semanas de permiso de nacimiento totalmente retribuidas para cuidar al recién nacido.",
          "reading": "AM-bos pro-khe-nee-TO-res TYE-nen de-RE-cho a dye-see-SAYS...",
          "translation": "Both parents are entitled to sixteen weeks of fully paid parental leave to care for the newborn."
        }
      ],
      "mnemonics": [
        "16 semanas de paternidad/maternidad iguales + 30 días de vacaciones pagadas + Finiquito legal = Progressive Spanish labor standards!"
      ],
      "culturalNotes": [
        "Spain was one of the first countries in the world to fully equalize paid paternity and maternity leave at 16 non-transferable weeks paid at 100% of salary."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuántas semanas de permiso retribuido al 100% tienen derecho ambos progenitores por nacimiento en España?",
          "options": [
            "2 semanas solo (93.1)",
            "16 semanas para cada uno (93.2)",
            "1 semana (93.3)",
            "Cero semanas (93.4)"
          ],
          "answerIndex": 1,
          "explanation": "16 semanas iguales e intransferibles."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama el documento de liquidación económica que recibe el trabajador al finalizar su relación laboral?",
          "options": [
            "El finiquito (93.1)",
            "El carnet de conducir (93.2)",
            "El pasaporte (93.3)",
            "La factura de la luz (93.4)"
          ],
          "answerIndex": 0,
          "explanation": "El finiquito."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuántos días naturales mínimos de vacaciones pagadas garantiza la legislación laboral española al año?",
          "options": [
            "30 días naturales (o 22 días laborables)",
            "10 días",
            "Ningún día",
            "5 días"
          ],
          "answerIndex": 0,
          "explanation": "30 días naturales.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"The worker is entitled to thirty calendar days of paid annual vacation and a comprehensive final settlement upon departure.\"",
          "options": [
            "El finiquito no incluye vacaciones no disfrutadas.",
            "Las vacaciones no son pagadas.",
            "No hay permisos de maternidad.",
            "El trabajador tiene derecho a treinta días naturales de vacaciones pagadas y una liquidación de finiquito completa al cesar."
          ],
          "answerIndex": 3,
          "explanation": "Accurate labor rights translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Derechos laborales en España"
  },
  "es-u19-l4": {
    "id": "es-u19-l4",
    "unit": "es-u19",
    "level": "B1",
    "objective": "El ecosistema de startups y tecnología en España: La Ley de Startups, nómadas digitales, hubs en Madrid y Barcelona (22@), y unicornios españoles.",
    "presentation": {
      "explanation": "Emprendimiento, innovación y tecnología en España:\n- La \"Ley de Startups\" (Ley 28/2022 de fomento del ecosistema de empresas emergentes):\n  - Régimen fiscal ultracompetitivo (Reducción del Impuesto de Sociedades del 25% al 15% durante los 4 primeros años con beneficios)\n  - Visado para Nómadas Digitales (Permite a profesionales internacionales vivir en España mientras trabajan en remoto para empresas extranjeras con ventajas fiscales de la Ley Beckham)\n  - Exención fiscal de stock options hasta 50.000 € anuales para atraer talento global\n- Los grandes hubs tecnológicos:\n  - Barcelona (Distrito de innovación 22@ en Poblenou y el Mobile World Congress - MWC)\n  - Madrid (South Summit y La Nave)\n  - Málaga (Polo tecnológico y ciberseguridad con el centro de ingeniería de Google)\n- Unicornios españoles: Cabify, Glovo, Jobandtalent, TravelPerk, Factorial, Fever\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "España atrae a miles de nómadas digitales y emprendedores gracias a la Ley de Startups y al dinamismo de los hubs de Madrid y Barcelona.",
          "reading": "es-PA-nya a-TRA-e a MEE-les de NO-ma-das dee-khee-TA-les...",
          "translation": "Spain attracts thousands of digital nomads and entrepreneurs thanks to the Startup Law and the dynamism of the Madrid and Barcelona hubs."
        }
      ],
      "mnemonics": [
        "Ley de Startups (15% Impuesto Sociedades) + Visado Nómadas Digitales + Distrito 22@ Barcelona = Spain's European tech hub!"
      ],
      "culturalNotes": [
        "The 22@ district in Barcelona transformed the historic industrial neighbourhood of Poblenou into a world-leading compact innovation cluster blending tech campuses, startups, and green spaces."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué visado especial permite a los profesionales extranjeros trabajar en remoto viviendo legalmente en España con incentivos fiscales?",
          "options": [
            "El visado de tránsito aeroportuario (94.1)",
            "El visado para nómadas digitales (94.2)",
            "El carnet de estudiante (94.3)",
            "El visado de turista de 15 días (94.4)"
          ],
          "answerIndex": 1,
          "explanation": "El visado para nómadas digitales."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama el famoso distrito de innovación tecnológica de Barcelona ubicado en el barrio de Poblenou?",
          "options": [
            "El Barrio Gótico (94.1)",
            "El distrito 22@ (veintidós arroba) (94.2)",
            "Montjuïc (94.3)",
            "La Barceloneta (94.4)"
          ],
          "answerIndex": 1,
          "explanation": "El distrito 22@."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el mayor congreso mundial de la industria móvil y conectividad celebrado anualmente en Barcelona?",
          "options": [
            "El festival de cine de Cannes",
            "La feria del libro",
            "El salón del automóvil clásico",
            "El Mobile World Congress (MWC)"
          ],
          "answerIndex": 3,
          "explanation": "Mobile World Congress (MWC).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Favorable tax incentives under the Startup Law and vibrant tech hubs attract top international software engineers and founders.\"",
          "options": [
            "España prohíbe las empresas tecnológicas.",
            "Los nómadas digitales pagan el doble de impuestos.",
            "Incentivos fiscales favorables bajo la Ley de Startups y vibrantes centros tecnológicos atraen a los mejores ingenieros de software y fundadores internacionales.",
            "No hay startups en Barcelona."
          ],
          "answerIndex": 2,
          "explanation": "Accurate startup ecosystem translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "El ecosistema de startups y tecnología en España"
  },
  "es-u19-l5": {
    "id": "es-u19-l5",
    "unit": "es-u19",
    "level": "B1",
    "objective": "Liderazgo empresarial global de España: Grandes multinacionales (Inditex/Zara, Banco Santander, Iberdrola, Telefónica) y diplomacia corporativa.",
    "presentation": {
      "explanation": "Multinacionales españolas y presencia en la economía mundial:\n- Las grandes corporaciones globales del IBEX 35:\n  - Inditex (Zara, Massimo Dutti, Pull&Bear - Fundada en Arteixo, Galicia, por Amancio Ortega; líder mundial indiscutible en moda rápida y logística integrada de precisión)\n  - Banco Santander y BBVA (Líderes bancarios globales con presencia masiva en Europa y América Latina)\n  - Iberdrola (Gigante mundial en energía eólica marina, redes inteligentes y descarbonización)\n  - Telefónica (Una de las mayores compañías de telecomunicaciones del mundo con marcas como Movistar y O2)\n  - Amadeus IT Group (Líder mundial en sistemas globales de distribución y reservas turísticas y aeronáuticas)\n- Cultura de diplomacia corporativa y liderazgo ético\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El modelo logístico de Inditex y el liderazgo de Iberdrola en energía eólica marina son referentes de excelencia empresarial en todo el mundo.",
          "reading": "el mo-DE-lo lo-KHEES-tee-ko de een-dee-TEKS...",
          "translation": "Inditex's logistics model and Iberdrola's leadership in offshore wind energy are benchmarks of corporate excellence throughout the world."
        }
      ],
      "mnemonics": [
        "Inditex (Zara global fashion logistics) + Iberdrola (World green energy giant) + Santander = Spanish global corporate titans!"
      ],
      "culturalNotes": [
        "Inditex can design, manufacture, and distribute a new fashion garment from its Galicia headquarters to store shelves worldwide in under 15 days, pioneering real-time supply chain logistics."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué gigante multinacional textil gallego es el grupo de moda más grande del mundo, matriz de marcas como Zara?",
          "options": [
            "Inditex (95.1)",
            "Seat (95.2)",
            "Renfe (95.3)",
            "Repsol (95.4)"
          ],
          "answerIndex": 0,
          "explanation": "Inditex."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué compañía energética española es uno de los mayores operadores y desarrolladores de energía eólica del planeta?",
          "options": [
            "Correos (95.1)",
            "Aena (95.2)",
            "El Corte Inglés (95.3)",
            "Iberdrola (95.4)"
          ],
          "answerIndex": 3,
          "explanation": "Iberdrola."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿En qué comunidad autónoma española se encuentra la sede central mundial y centro logístico del grupo Inditex?",
          "options": [
            "Navarra",
            "Canarias",
            "Galicia (Arteixo, A Coruña)",
            "Murcia"
          ],
          "answerIndex": 2,
          "explanation": "Galicia (Arteixo).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduce: \"Global logistics agility and pioneering renewable energy investments drive the international success of leading Spanish corporations.\"",
          "options": [
            "Las empresas españolas no operan en el extranjero.",
            "La agilidad logística global y las inversiones pioneras en energías renovables impulsan el éxito internacional de las principales corporaciones españolas.",
            "Iberdrola genera energía únicamente con carbón.",
            "Zara solo vende ropa en Galicia."
          ],
          "answerIndex": 1,
          "explanation": "Accurate corporate business translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Liderazgo empresarial global de España"
  },
  "es-u20-l1": {
    "id": "es-u20-l1",
    "unit": "es-u20",
    "level": "C1",
    "objective": "Spain's extraordinary biodiversity, UNESCO Biosphere Reserves, and national park protection (Parque Nacional de Doñana, Picos de Europa, lince ibérico, Red Natura 2000).",
    "presentation": {
      "explanation": "Spain is the most biodiverse country in Europe, hosting over 50% of European plant species and premier conservation reserves:\n- Iconic National Parks:\n  - **Parque Nacional de Doñana** (Andalucía - UNESCO): Europe's most important wetland stopover for migratory birds between Africa and Europe, marshland ecosystems (marismas), and dunes.\n  - **Picos de Europa** (Asturias, Cantabria, León): Karst limestone massifs, glacial lakes of Covadonga, and alpine habitats.\n  - **Parque Nacional del Teide** (Tenerife, Canary Islands): Volcanic caldera, Mount Teide (3,715m - Spain's highest peak).\n- Wildlife Conservation:\n  - **El lince ibérico** (Iberian lynx): The world's most endangered feline species, brought back from the brink of extinction through breeding and rewilding in Sierra Morena and Doñana.\n  - **El oso pardo cantábrico** (Cantabrian brown bear) and **el quebrantahuesos** (Bearded vulture in the Pyrenees).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La recuperación del lince ibérico en los ecosistemas de Doñana y Sierra Morena constituye uno de los mayores éxitos de conservación de fauna silvestre en la historia de Europa.",
          "reading": "La re-ku-pe-ra-syon del lin-se i-be-ri-ko...",
          "translation": "The recovery of the Iberian lynx in the ecosystems of Doñana and Sierra Morena constitutes one of the greatest wildlife conservation successes in European history."
        }
      ],
      "mnemonics": [
        "Lince ibérico (World's most endangered feline saved)! Doñana (UNESCO wetland haven)! Picos de Europa (Karst alpine peaks)!"
      ],
      "culturalNotes": [
        "Spain possesses the largest surface area within the European Union's Natura 2000 protected ecological network, covering over 27% of its terrestrial territory."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which critically endangered feline species has been successfully recovered in Spanish conservation reserves like Doñana and Sierra Morena?",
          "options": [
            "El tigre de Bengala (96.1)",
            "El guepardo (96.2)",
            "El jaguar (96.3)",
            "El lince ibérico (Iberian lynx) (96.4)"
          ],
          "answerIndex": 3,
          "explanation": "El lince ibérico."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous Andalusian national park and UNESCO World Heritage site is celebrated as Europe's vital wetland for migratory birds?",
          "options": [
            "Central Park (96.1)",
            "Retiro (96.2)",
            "Hyde Park (96.3)",
            "Parque Nacional de Doñana (96.4)"
          ],
          "answerIndex": 3,
          "explanation": "Parque Nacional de Doñana."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Spain possesses the largest biodiversity in the European Union, protecting unique habitats from high Pyrenean glaciers to Atlantic and Mediterranean wetlands.\"",
          "options": [
            "España no tiene parques naturales protegidos.",
            "España posee la mayor biodiversidad de la Unión Europea, protegiendo hábitats únicos desde los altos glaciares pirenaicos hasta los humedales atlánticos y mediterráneos.",
            "En Europa no hay aves migratorias.",
            "Los humedales han desaparecido."
          ],
          "answerIndex": 1,
          "explanation": "Accurate biodiversity translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is Spain's highest peak located in the Canary Islands?",
          "options": [
            "El Teide en Tenerife (3.715 metros)",
            "Mulhacén",
            "Aneto",
            "Mont Blanc"
          ],
          "answerIndex": 0,
          "explanation": "El Teide en Tenerife.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 1: Foundational & Structural Mastery (La recuperación del lince ibér)"
  },
  "es-u20-l2": {
    "id": "es-u20-l2",
    "unit": "es-u20",
    "level": "C1",
    "objective": "Renewable energy transition, green hydrogen, and solar/wind power leadership in Spain (energías renovables, parques eólicos marinos/terrestres, plantas termosolares, hidrógeno verde).",
    "presentation": {
      "explanation": "Spain's global leadership in the ecological green transition:\n- Renewable Energy Grid:\n  - Over 50% of Spain's national electricity generation comes from renewable sources (wind, solar photovoltaic, and solar thermal).\n  - **Red Eléctrica de España (REE)** manages the synchronized integration of high-penetration wind and solar energy.\n  - The **Planta Solar Gemasolar** (Sevilla): Pioneered molten-salt thermal energy storage generating electricity 24/7 without sunlight.\n- Green Hydrogen and Decarbonization:\n  - The **Plan Nacional Integrado de Energía y Clima (PNIEC)** and European green hydrogen corridor (H2Med connecting Barcelona to Marseille).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "España superó el cincuenta por ciento de generación eléctrica renovable gracias al despliegue masivo de parques eólicos y plantas fotovoltaicas avanzadas.",
          "reading": "Es-pa-nya soo-pe-ro el sin-kwen-ta por syen-to...",
          "translation": "Spain exceeded fifty percent renewable electricity generation thanks to the massive deployment of wind farms and advanced photovoltaic plants."
        }
      ],
      "mnemonics": [
        "Energías renovables (50%+ grid)! Eólica y fotovoltaica (Wind & Solar)! H2Med (Green hydrogen corridor)!"
      ],
      "culturalNotes": [
        "Spain is the second-largest wind power producer in Europe and consistently sets records where renewables power 100% of mainland electricity demand during peak midday hours."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What landmark energy milestone did Spain achieve in its national electricity grid generation?",
          "options": [
            "Over 50% of total national electricity generated from clean renewable sources (97.1)",
            "Elimination of wind turbines (97.2)",
            "Total shutdown of all solar power (97.3)",
            "100% reliance on imported coal (97.4)"
          ],
          "answerIndex": 0,
          "explanation": "Over 50% renewable energy generation."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the transnational green hydrogen energy corridor connecting the Iberian Peninsula to Central Europe called?",
          "options": [
            "H2Med (BarMar) (97.1)",
            "Nord Stream (97.2)",
            "Trans-Siberian (97.3)",
            "Panama Canal (97.4)"
          ],
          "answerIndex": 0,
          "explanation": "H2Med."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The integration of solar thermal storage and smart grids allows continuous electricity supply even during hours of zero sunshine.\"",
          "options": [
            "La integración de almacenamiento termosolar y redes inteligentes permite el suministro eléctrico continuo incluso durante horas de nula radiación solar.",
            "Las redes eléctricas son obsoletas.",
            "No hay almacenamiento de energía.",
            "La energía solar no funciona por la noche."
          ],
          "answerIndex": 0,
          "explanation": "Accurate energy transition translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Spanish entity manages the operation and synchronization of the national electrical transmission grid?",
          "options": [
            "Renfe",
            "Correos",
            "Aena",
            "Red Eléctrica de España (REE)"
          ],
          "answerIndex": 3,
          "explanation": "Red Eléctrica de España.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 2: Foundational & Structural Mastery (España superó el cincuenta por)"
  },
  "es-u20-l3": {
    "id": "es-u20-l3",
    "unit": "es-u20",
    "level": "C1",
    "objective": "Water resource management, drought challenges, desalination, and ancient irrigation heritage (el Tribunal de las Aguas de Valencia - UNESCO, desaladoras, trasvases, estrés hídrico).",
    "presentation": {
      "explanation": "Water management, historical hydrology, and technological innovation in Spain:\n- Ancient Hydrological Institutions:\n  - **El Tribunal de las Aguas de la Vega de Valencia** (UNESCO Intangible Cultural Heritage): The oldest continuous democratic justice institution in Europe (dating back over 1,000 years to the Caliphate of Córdoba), meeting every Thursday outside Valencia Cathedral to settle irrigation disputes peacefully in Valencian.\n  - The **Acequias** (ancestral Arabic canal irrigation networks in Granada and the Alpujarras).\n- Modern Hydrological Engineering:\n  - **Plantas desalinizadoras** (Torrevieja, Alicante - among the largest seawater desalination plants in Europe).\n  - The challenge of **estrés hídrico** (water stress) and agricultural drip irrigation (riego por goteo).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El milenario Tribunal de las Aguas de Valencia continúa reuniéndose cada jueves en la Puerta de los Apóstoles para dirimir litigios de riego de forma oral y vinculante.",
          "reading": "El mi-le-na-ryo Tri-boo-nal de las Ah-gwas...",
          "translation": "The thousand-year-old Water Tribunal of Valencia continues to meet every Thursday at the Apostles' Door to settle irrigation disputes orally and bindingly."
        }
      ],
      "mnemonics": [
        "Tribunal de las Aguas (1,000-year UNESCO justice)! Acequias (Arabic canal legacy)! Desaladoras (Seawater conversion)!"
      ],
      "culturalNotes": [
        "The Tribunal de las Aguas is entirely oral: no clerks write records during sessions; rulings handed down by elected peasant trustees are unappealable and universally respected."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What ancient institution meets every Thursday in Valencia to resolve water disputes and is recognized as UNESCO Intangible Cultural Heritage?",
          "options": [
            "El Tribunal Supremo (98.1)",
            "El Tribunal de las Aguas de Valencia (98.2)",
            "El Senado (98.3)",
            "La Bolsa de Madrid (98.4)"
          ],
          "answerIndex": 1,
          "explanation": "El Tribunal de las Aguas de Valencia."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What ancestral Arabic irrigation canal system continues to supply agricultural terraces in Andalusia?",
          "options": [
            "Las acequias (98.1)",
            "Canales de vapor (98.2)",
            "Los acueductos romanos exclusivamente (98.3)",
            "Tuberías de plástico (98.4)"
          ],
          "answerIndex": 0,
          "explanation": "Las acequias."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Advanced seawater desalination and precision drip irrigation are essential technologies to combat Mediterranean water stress.\"",
          "options": [
            "El riego tradicional no gasta agua.",
            "En el Mediterráneo llueve todo el año sin parar.",
            "El agua de mar no se puede desalinizar.",
            "La desalinización marina avanzada y el riego por goteo de precisión son tecnologías esenciales para combatir el estrés hídrico mediterráneo."
          ],
          "answerIndex": 3,
          "explanation": "Accurate water technology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which Spanish city is one of Europe's largest seawater desalination plants located to supply agricultural and urban water?",
          "options": [
            "Salamanca",
            "Toledo",
            "Torrevieja (Alicante)",
            "Madrid"
          ],
          "answerIndex": 2,
          "explanation": "Torrevieja (Alicante).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 3: Foundational & Structural Mastery (El milenario Tribunal de las A)"
  },
  "es-u20-l4": {
    "id": "es-u20-l4",
    "unit": "es-u20",
    "level": "C2",
    "objective": "The Iberian Dehesa agroforestry ecosystem, sustainable cork harvesting, and Jamón Ibérico de Bellota (la dehesa, alcornoques y encinas, montanera, saca del corcho, sostenibilidad).",
    "presentation": {
      "explanation": "The Dehesa / Montado: Europe's premier exemplar of human-nature harmonious agroforestry:\n- The Dehesa Ecosystem:\n  - A human-managed parkland of ancient holm oaks (**encinas**) and cork oaks (**alcornoques**) spanning Extremadura, Andalucía, and Western Spain.\n  - Supports extraordinary biodiversity while producing world-class gastronomic and forestry products.\n- The Montanera Cycle:\n  - From October to March, purebred Iberian pigs roam free across the dehesa feeding exclusively on fallen acorns (**bellotas**) and wild herbs.\n  - Produces **Jamón 100% Ibérico de Bellota** (Pata Negra) with cardioprotective oleic acids.\n- Sustainable Cork Extraction (**La saca del corcho**):\n  - Bark stripped by hand every 9-12 years by skilled peladores without ever harming the living tree.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La dehesa ibérica representa un equilibrio modélico entre la preservación del bosque mediterráneo, la cría extensiva del cerdo ibérico y la extracción sostenible del corcho.",
          "reading": "La de-e-sa i-be-ri-ka re-pre-sen-ta oon e-kee-lee-bryo...",
          "translation": "The Iberian dehesa represents an exemplary balance between the preservation of the Mediterranean forest, free-range Iberian pig breeding, and sustainable cork extraction."
        }
      ],
      "mnemonics": [
        "La Dehesa (Agroforestry paradise)! Montanera (Acorn-grazing season)! Saca del corcho (Hand-harvested sustainable cork)!"
      ],
      "culturalNotes": [
        "Cork oak forests cannot be clear-cut for cork; stripping the bark every decade actually stimulates the tree's longevity and vitality, allowing cork oaks to live over 200 years."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the unique traditional agroforestry landscape of holm and cork oaks in Western Spain called?",
          "options": [
            "La pampa (99.1)",
            "La dehesa (99.2)",
            "La taiga (99.3)",
            "La tundra (99.4)"
          ],
          "answerIndex": 1,
          "explanation": "La dehesa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the autumn/winter free-range acorn feeding period for Iberian pigs called?",
          "options": [
            "La siesta (99.1)",
            "La montanera (99.2)",
            "La cosecha de trigo (99.3)",
            "La vendimia (99.4)"
          ],
          "answerIndex": 1,
          "explanation": "La montanera."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The manual harvesting of cork every nine years preserves the living oak forest and provides natural biodegradable bottle stoppers for the global wine industry.\"",
          "options": [
            "La dehesa destruye el medio ambiente.",
            "El corcho es un producto plástico artificial.",
            "La saca manual del corcho cada nueve años preserva el alcornocal vivo y proporciona tapones biodegradables naturales para la industria vitivinícola global.",
            "Los alcornoques se talan por completo."
          ],
          "answerIndex": 2,
          "explanation": "Accurate agroforestry translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What type of oaks provide the sweet acorns (bellotas) that give Jamón Ibérico de Bellota its oleic acid rich flavor?",
          "options": [
            "Eucaliptos",
            "Encinas y alcornoques (Holm and cork oaks)",
            "Pinos y abetos",
            "Palmeras"
          ],
          "answerIndex": 1,
          "explanation": "Encinas y alcornoques.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 4: Foundational & Structural Mastery (La dehesa ibérica representa u)"
  },
  "es-u20-l5": {
    "id": "es-u20-l5",
    "unit": "es-u20",
    "level": "C2",
    "objective": "C2 synthesis on ecological restoration, circular economy, and marine sanctuaries (biorreservas marinas, Posidonia oceánica en Baleares, Ley de Cambio Climático).",
    "presentation": {
      "explanation": "Marine conservation, oceanic carbon sinks, and C2 environmental policy synthesis:\n- **Posidonia oceánica** (Balearic Islands - UNESCO):\n  - Submarine seagrass meadows in Ibiza and Formentera that filter seawater to crystal-clear purity and sequester carbon at rates 35x higher than tropical rainforests.\n  - Some clonal Posidonia organisms are over 100,000 years old, representing the oldest living beings on Earth.\n- Legal and Ecological Frameworks:\n  - **Ley de Cambio Climático y Transición Energética**: Codifies legally binding net-zero greenhouse emissions by 2050 and 100% renewable electricity by 2050.\n  - Protection of marine reserves (Cabo de Gata-Níjar, Islas Columbretes, El Hierro).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Las praderas milenarias de Posidonia oceánica en el mar Balear constituyen sumideros de carbono incomparables cuya protección es crucial para la estabilidad climática del Mediterráneo.",
          "reading": "Las pra-de-ras mi-le-na-ryas de Po-see-do-nya...",
          "translation": "The millenary Posidonia oceanica meadows in the Balearic Sea constitute incomparable carbon sinks whose protection is crucial for the climatic stability of the Mediterranean."
        }
      ],
      "mnemonics": [
        "Posidonia oceánica (UNESCO ocean lungs & 35x carbon sink)! Net-zero 2050! Reservas marinas!"
      ],
      "culturalNotes": [
        "A single square meter of healthy Posidonia meadow produces up to 20 liters of oxygen daily while protecting Mediterranean shorelines from coastal erosion."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which underwater seagrass meadow in the Balearic Islands is protected by UNESCO and sequesters carbon faster than tropical rainforests?",
          "options": [
            "Posidonia oceánica (100.1)",
            "Algas rojas invasoras (100.2)",
            "Lenteja de agua (100.3)",
            "Coral blanqueado (100.4)"
          ],
          "answerIndex": 0,
          "explanation": "Posidonia oceánica."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "By which year does Spain's Climate Change Law mandate achieving 100% renewable electricity generation and national climate neutrality?",
          "options": [
            "2025 (100.1)",
            "2100 (100.2)",
            "2030 (100.3)",
            "2050 (100.4)"
          ],
          "answerIndex": 3,
          "explanation": "2050."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The circular economy and strict protection of Mediterranean marine reserves safeguard artisanal fisheries and oceanic biodiversity for future generations.\"",
          "options": [
            "El mar Mediterráneo no tiene protección.",
            "La economía circular y la estricta protección de las reservas marinas mediterráneas salvaguardan la pesca artesanal y la biodiversidad oceánica para las generaciones venideras.",
            "Las reservas marinas prohíben toda actividad científica.",
            "La economía circular aumenta la contaminación."
          ],
          "answerIndex": 1,
          "explanation": "Accurate marine conservation translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is Posidonia oceanica essential for the clarity and ecology of Balearic waters in Ibiza and Formentera?",
          "options": [
            "It naturally filters seawater, oxygenates the marine ecosystem, and prevents coastal beach erosion",
            "It increases ocean salinity by 500%",
            "It turns the water brown",
            "It attracts commercial oil tankers"
          ],
          "answerIndex": 0,
          "explanation": "Filters seawater, oxygenates, and prevents erosion.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 5: Foundational & Structural Mastery (Las praderas milenarias de Pos)"
  },
  "es-u21-l1": {
    "id": "es-u21-l1",
    "unit": "es-u21",
    "level": "C1",
    "objective": "Spain's National Health System, universal coverage, primary care model, and organ transplant leadership (Sistema Nacional de Salud - SNS, Organización Nacional de Trasplantes - ONT, modelo Matesanz).",
    "presentation": {
      "explanation": "Spain's public healthcare architecture and world leadership in organ transplants:\n- **El Sistema Nacional de Salud (SNS)**:\n  - Universal public healthcare founded on the principles of universality, equity, and public funding.\n  - Primary health centers (**Centros de Salud / Atención Primaria**) acting as the community gatekeepers of preventative medicine.\n- **La Organización Nacional de Trasplantes (ONT) & The Spanish Model**:\n  - Spain has been the **#1 country in the world for organ donation and transplants for over 30 consecutive years**.\n  - Created by Dr. Rafael Matesanz, the \"Spanish Model\" relies on proactive in-hospital transplant donor coordinators, presumed consent legislation, and centralized logistics enabling organ transports in hours.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La Organización Nacional de Trasplantes ha mantenido a España como líder mundial indiscutible en donación y trasplante de órganos durante más de tres décadas consecutivas.",
          "reading": "La Or-ga-nee-za-syon Na-syo-nal de Tras-plan-tes...",
          "translation": "The National Transplant Organization has maintained Spain as the undisputed world leader in organ donation and transplantation for over three consecutive decades."
        }
      ],
      "mnemonics": [
        "ONT (World #1 in organ donation for 30+ years)! Modelo Matesanz! Atención Primaria (Universal primary care)!"
      ],
      "culturalNotes": [
        "Spain achieves over 48 donor organ donors per million population (pmp), more than double the European Union average and highest globally."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish medical institution has made Spain the world leader in organ donation and transplantation for over 30 years?",
          "options": [
            "Cruz Roja solamente (101.1)",
            "El Instituto Cervantes (101.2)",
            "La Guardia Civil (101.3)",
            "La Organización Nacional de Trasplantes (ONT) (101.4)"
          ],
          "answerIndex": 3,
          "explanation": "La Organización Nacional de Trasplantes (ONT)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the cornerstone of Spain's public healthcare system serving as the first line of preventative medicine?",
          "options": [
            "Los hospitales privados exclusivamente (101.1)",
            "Las farmacias comerciales (101.2)",
            "La Atención Primaria en Centros de Salud (101.3)",
            "Los seguros privados (101.4)"
          ],
          "answerIndex": 2,
          "explanation": "La Atención Primaria."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Spanish transplant model combines proactive hospital donor coordinators with rapid aeronautical transport logistics to save thousands of lives.\"",
          "options": [
            "El modelo español de trasplantes combina coordinadores hospitalarios proactivos con logística de transporte aeronáutico rápido para salvar miles de vidas.",
            "España no permite la donación de órganos.",
            "El sistema sanitario español es completamente privado.",
            "Los trasplantes no se realizan en hospitales públicos."
          ],
          "answerIndex": 0,
          "explanation": "Accurate healthcare translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who was the pioneering Spanish physician who designed the globally renowned \"Spanish Model\" of organ transplantation?",
          "options": [
            "Pablo Picasso",
            "Santiago Ramón y Cajal únicamente",
            "Severo Ochoa",
            "Dr. Rafael Matesanz"
          ],
          "answerIndex": 3,
          "explanation": "Dr. Rafael Matesanz.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 1: Foundational & Structural Mastery (La Organización Nacional de Tr)"
  },
  "es-u21-l2": {
    "id": "es-u21-l2",
    "unit": "es-u21",
    "level": "C1",
    "objective": "Spanish biomedical research: CNIO cancer institute, CRG genomics, and Severo Ochoa / Ramón y Cajal legacy (CNIO, Centro de Regulación Genómica, neurobiología, oncología molecular).",
    "presentation": {
      "explanation": "Biomedical science, molecular oncology, and Nobel legacy in Spain:\n- Historic Nobel Pioneers in Medicine:\n  - **Santiago Ramón y Cajal** (1906 Nobel Prize): The father of modern neuroscience, discovering the Neuron Doctrine (*Doctrina de la neurona*) and dendritic spines.\n  - **Severo Ochoa** (1959 Nobel Prize): Unraveled the enzymatic synthesis of RNA, paving the way for modern molecular genetics.\n- World-Class Research Institutes:\n  - **CNIO (Centro Nacional de Investigaciones Oncológicas)** in Madrid (led by Maria Blasco): Global breakthroughs in telomerase biology, cellular senescence, and targeted cancer therapies.\n  - **CRG (Centre de Regulació Genòmica)** in Barcelona: Pioneer in non-coding RNA and human epigenome sequencing.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Las investigaciones pioneras de Ramón y Cajal en neurobiología y los avances del CNIO en telómeros sitúan a la biomedicina española en la vanguardia científica internacional.",
          "reading": "Las in-ves-tee-ga-syo-nes pyo-ne-ras...",
          "translation": "Ramón y Cajal's pioneering research in neurobiology and CNIO's advances in telomeres place Spanish biomedicine at the international scientific vanguard."
        }
      ],
      "mnemonics": [
        "Ramón y Cajal (Father of neuroscience & Neuron Doctrine)! CNIO (Telomeres & cancer biology)! Severo Ochoa (RNA synthesis Nobel)!"
      ],
      "culturalNotes": [
        "Santiago Ramón y Cajal's hand-drawn histological sketches of brain neurons and synapses are still celebrated for their artistic beauty and scientific accuracy."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Who is recognized as the father of modern neuroscience for discovering that neurons are individual communicating cells?",
          "options": [
            "Santiago Ramón y Cajal (102.1)",
            "Gregor Mendel (102.2)",
            "Charles Darwin (102.3)",
            "Louis Pasteur (102.4)"
          ],
          "answerIndex": 0,
          "explanation": "Santiago Ramón y Cajal."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which premier Spanish cancer research institute in Madrid leads global discoveries in telomeres and molecular oncology?",
          "options": [
            "CNIO (Centro Nacional de Investigaciones Oncológicas) (102.1)",
            "El Prado (102.2)",
            "La Caixa (102.3)",
            "Aena (102.4)"
          ],
          "answerIndex": 0,
          "explanation": "CNIO."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Investigating telomerase enzyme mechanisms and cellular senescence offers revolutionary therapeutic targets against age-related degenerative diseases.\"",
          "options": [
            "Las células no envejecen nunca.",
            "El ARN no tiene función biológica.",
            "La neurobiología fue refutada en el siglo veinte.",
            "Investigar los mecanismos de la enzima telomerasa y la senescencia celular ofrece dianas terapéuticas revolucionarias contra enfermedades degenerativas asociadas al envejecimiento."
          ],
          "answerIndex": 3,
          "explanation": "Accurate biomedical translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "For which biological discovery was Spanish biochemist Severo Ochoa awarded the Nobel Prize in Physiology or Medicine in 1959?",
          "options": [
            "Discovery of penicillin",
            "Invention of X-rays",
            "Enzymatic synthesis of RNA (Ácido ribonucleico)",
            "Discovery of blood types"
          ],
          "answerIndex": 2,
          "explanation": "Enzymatic synthesis of RNA.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Spanish biomedical research"
  },
  "es-u21-l3": {
    "id": "es-u21-l3",
    "unit": "es-u21",
    "level": "C1",
    "objective": "Epidemiology, public vaccination programs, and the Spanish historic Balmis Expedition (La Real Expedición Filantrópica de la Vacuna - Expedición Balmis, calendarios de vacunación, inmunología comunitaria).",
    "presentation": {
      "explanation": "Global public health history and vaccination achievements in the Spanish-speaking world:\n- **La Real Expedición Filantrópica de la Vacuna (Expedición Balmis - 1803–1806)**:\n  - The world's first international public health humanitarian mission, led by Dr. Francisco Javier Balmis and nurse Isabel Zendal.\n  - Transported the smallpox vaccine across the Atlantic and Pacific to the Americas and Asia (Philippines and China) by vaccinating 22 orphan children sequentially in living human chains (*cadena viva*).\n- Modern Public Vaccination Success:\n  - Spain maintains one of the highest childhood vaccination acceptance rates in the world (>95%), without coercive mandates, driven by deep public trust in the pediatric SNS network.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La histórica Expedición Balmis de 1803 llevó la vacuna de la viruela a tres continentes, marcando el nacimiento de las campañas humanitarias globales de inmunización masiva.",
          "reading": "La ees-to-ree-ka Eks-pe-dee-syon Bal-mis...",
          "translation": "The historic Balmis Expedition of 1803 brought the smallpox vaccine to three continents, marking the birth of global humanitarian mass immunization campaigns."
        }
      ],
      "mnemonics": [
        "Expedición Balmis 1803 (First global vaccination mission)! Isabel Zendal (Pioneer nurse)! 95%+ Cobertura vacunal!"
      ],
      "culturalNotes": [
        "The World Health Organization (WHO) named its global nurse recognition awards after Isabel Zendal, recognized as the first nurse on an international public health mission."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What was the historic 1803 Spanish maritime medical expedition that brought the smallpox vaccine across the globe to the Americas and Asia?",
          "options": [
            "La Expedición Balmis (Real Expedición Filantrópica de la Vacuna) (103.1)",
            "La Armada Invencible (103.2)",
            "La Vuelta al Mundo de Magallanes (103.3)",
            "La Conquista de América (103.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Expedición Balmis."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Who was the directress of the orphan children on the Balmis Expedition, recognized by WHO as the first international public health nurse?",
          "options": [
            "Isabel Zendal (103.1)",
            "Rosalía de Castro (103.2)",
            "Clara Campoamor (103.3)",
            "Santa Teresa de Jesús (103.4)"
          ],
          "answerIndex": 0,
          "explanation": "Isabel Zendal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"High community vaccine coverage generates herd immunity, protecting newborn infants and immunocompromised patients who cannot be vaccinated.\"",
          "options": [
            "La viruela nunca fue erradicada.",
            "La Expedición Balmis fue una misión militar secreta.",
            "La alta cobertura vacunal comunitaria genera inmunidad de rebaño, protegiendo a recién nacidos y pacientes inmunodeprimidos que no pueden vacunarse.",
            "Las vacunas no protegen a la comunidad."
          ],
          "answerIndex": 2,
          "explanation": "Accurate immunology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How was the fragile live smallpox vaccine kept viable across transatlantic ocean voyages in 1803 before refrigeration existed?",
          "options": [
            "Boiled in glass bottles",
            "Passed in a continuous living chain between vaccinated orphan children",
            "Dried in powder form",
            "Frozen in electric freezers"
          ],
          "answerIndex": 1,
          "explanation": "Continuous living chain between orphan children.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 3: Foundational & Structural Mastery (La histórica Expedición Balmis)"
  },
  "es-u21-l4": {
    "id": "es-u21-l4",
    "unit": "es-u21",
    "level": "C2",
    "objective": "Bioethics, patients' rights, and end-of-life legislation (Ley Orgánica de Regulación de la Eutanasia, testamento vital, comités de bioética hospitalaria, consentimiento informado).",
    "presentation": {
      "explanation": "Bioethical jurisprudence, patient autonomy, and end-of-life dignity in Spain:\n- **Ley Orgánica de Regulación de la Eutanasia (LORE - 2021)**:\n  - Spain became the 4th European nation to legalizing euthanasia and medically assisted dying as a public healthcare right under strict statutory safeguards (unbearable suffering from incurable chronic disabling illnesses or terminal pathology).\n- Bioethical Instruments:\n  - **Testamento Vital / Instrucciones Previas (Advance Directives)**: Legally binding document recording personal healthcare decisions regarding life support and palliative care if incapacitated.\n  - **Consentimiento Informado (Informed Consent)**: Fundamental clinical human right.\n  - Hospital Bioethics Committees (*Comités de Ética Asistencial*).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La Ley de Regulación de la Eutanasia y el registro de voluntades anticipadas garantizan el derecho inalienable del paciente a una muerte digna acorde con sus convicciones éticas.",
          "reading": "La Ley de Re-goo-la-syon de la Eh-oo-ta-na-sya...",
          "translation": "The Euthanasia Regulation Law and registry of advance directives guarantee the patient's inalienable right to a dignified death in accordance with their ethical convictions."
        }
      ],
      "mnemonics": [
        "LORE 2021 (Right to dignified end-of-life care)! Testamento Vital (Advance medical directives)! Consentimiento informado!"
      ],
      "culturalNotes": [
        "The public debate in Spain was profoundly shaped by the case of Ramón Sampedro, whose struggle for personal autonomy inspired Alejandro Amenábar's Oscar-winning film *Mar Adentro*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What legal document allows citizens to record in advance their binding preferences regarding medical interventions and end-of-life care?",
          "options": [
            "El contrato de alquiler (104.1)",
            "El testamento vital / Instrucciones previas (Advance directives) (104.2)",
            "El certificado de empadronamiento (104.3)",
            "El carné de conducir (104.4)"
          ],
          "answerIndex": 1,
          "explanation": "El testamento vital."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which year did Spain enact the Organic Law Regulating Euthanasia (LORE), establishing medical aid in dying as a regulated public health service?",
          "options": [
            "1992 (104.1)",
            "2021 (104.2)",
            "2000 (104.3)",
            "1975 (104.4)"
          ],
          "answerIndex": 1,
          "explanation": "2021."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Hospital healthcare ethics committees deliberate on complex clinical dilemmas to balance therapeutic proportionality with patient autonomy.\"",
          "options": [
            "Los pacientes no tienen derecho a rechazar tratamientos.",
            "Los comités de ética asistencial hospitalarios deliberan sobre dilemas clínicos complejos para equilibrar la proporcionalidad terapéutica con la autonomía del paciente.",
            "El consentimiento informado no es obligatorio en cirugía.",
            "Los comités de ética toman decisiones arbitrarias sin médicos."
          ],
          "answerIndex": 1,
          "explanation": "Accurate bioethics translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which fundamental principle of modern clinical bioethics affirms the patient's right to make autonomous decisions about their own medical treatment?",
          "options": [
            "Principio de autonomía del paciente",
            "Imperativo de lucro",
            "Secreto de estado",
            "Paternalismo médico absoluto"
          ],
          "answerIndex": 0,
          "explanation": "Principio de autonomía del paciente.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 4: Foundational & Structural Mastery (La Ley de Regulación de la Eut)"
  },
  "es-u21-l5": {
    "id": "es-u21-l5",
    "unit": "es-u21",
    "level": "C2",
    "objective": "C2 synthesis on digital healthcare, telemedicine, AI diagnostic imaging, and personalized genomics in the Spanish SNS (Salud digital, telemedicina rural, receta electrónica interoperable, IA en radiología).",
    "presentation": {
      "explanation": "Digital health infrastructure, AI medical diagnostics, and precision medicine in Spain:\n- Digital Health Innovations:\n  - **Receta Electrónica Interoperable**: Cloud-synchronized digital prescriptions valid across all 17 autonomous communities and European Union cross-border pharmacies.\n  - Universal electronic health record (**Historia Clínica Digital del SNS**).\n- AI in Clinical Diagnostics:\n  - Deep learning algorithms analyzing CT scans and MRI mammographies in hospital radiodiagnosis networks to detect early oncological lesions.\n- Precision Medicine (**Estrategia Española de Medicina Personalizada y de Precisión**):\n  - Whole-genome sequencing of rare pediatric diseases and targeted immunotherapy regimens.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La interoperabilidad de la receta electrónica y la integración de inteligencia artificial en el radiodiagnóstico sitúan al sistema sanitario español a la vanguardia de la medicina personalizada.",
          "reading": "La in-te-ro-pe-ra-bee-lee-dad de la re-se-ta...",
          "translation": "Electronic prescription interoperability and AI integration in radiodiagnosis place the Spanish healthcare system at the forefront of personalized precision medicine."
        }
      ],
      "mnemonics": [
        "Receta electrónica interoperable (Valid across 17 autonomous regions & EU)! IA en radiodiagnóstico! Medicina personalizada de precisión!"
      ],
      "culturalNotes": [
        "Spain's interoperable digital prescription system was the first in the European Union to allow patients to pick up their prescription medicines in any pharmacy across multiple countries using their national ID."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish digital healthcare system enables patients to dispense prescriptions at any pharmacy across all 17 autonomous communities and EU partner countries?",
          "options": [
            "La Receta Electrónica Interoperable (105.1)",
            "El fax manual (105.2)",
            "Llamadas telefónicas privadas (105.3)",
            "Recetas de papel manuscritas (105.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Receta Electrónica Interoperable."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How does artificial intelligence primarily assist radiologists in modern Spanish public university hospitals?",
          "options": [
            "Replacing all human doctors entirely (105.1)",
            "Writing hospital bills (105.2)",
            "Operating ambulances (105.3)",
            "Detecting early micro-tumors and lesions in CT and MRI scans with deep learning algorithms (105.4)"
          ],
          "answerIndex": 3,
          "explanation": "Detecting early micro-tumors in CT and MRI scans."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Whole genome sequencing and targeted immunotherapy allow oncologists to tailor pharmacological treatments to the patient's specific genetic mutations.\"",
          "options": [
            "La secuenciación genómica completa y la inmunoterapia dirigida permiten a los oncólogos personalizar los tratamientos farmacológicos según las mutaciones genéticas específicas del paciente.",
            "La genética no tiene relación con el cáncer.",
            "La telemedicina está prohibida en Europa.",
            "Todos los pacientes reciben exactamente la misma dosis de quimioterapia."
          ],
          "answerIndex": 0,
          "explanation": "Accurate precision medicine translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What national strategy coordinates genomic research and personalized targeted therapies across Spain's public hospitals?",
          "options": [
            "Estrategia de Minería",
            "Plan de Turismo Nacional",
            "Plan de Transporte Ferroviario",
            "Estrategia Española de Medicina Personalizada y de Precisión"
          ],
          "answerIndex": 3,
          "explanation": "Estrategia Española de Medicina Personalizada y de Precisión.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 5: Foundational & Structural Mastery (La interoperabilidad de la rec)"
  },
  "es-u22-l1": {
    "id": "es-u22-l1",
    "unit": "es-u22",
    "level": "C1",
    "objective": "Spanish philosophical thought: José Ortega y Gasset, ratiovitalism, and the Generation of 98 (José Ortega y Gasset, raciovitalismo, «Yo soy yo y mi circunstancia», Generación del 98, Miguel de Unamuno y el sentimiento trágico de la vida).",
    "presentation": {
      "explanation": "Spanish philosophy, ratiovitalism, and existentialism:\n- **José Ortega y Gasset (1883–1955)**:\n  - The foremost Spanish philosopher of the 20th century, developing **Ratiovitalism (Raciovitalismo)** and Perspectivism in *Meditaciones del Quijote* and *La rebelión de las masas*.\n  - Famous philosophical axiom: **«Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo»** (I am I and my circumstance, and if I do not save it, I do not save myself).\n- **Miguel de Unamuno (1864–1936)** & **La Generación del 98**:\n  - Existential philosophy in *Del sentimiento trágico de la vida*: The agonistic struggle between reason and faith, the hunger for immortality, and the concept of *intrahistoria* (the silent daily life of ordinary people shaping nations).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La máxima orteguiana «Yo soy yo y mi circunstancia» y la angustia existencial de Unamuno definen la profunda originalidad del pensamiento filosófico español del siglo veinte.",
          "reading": "La mak-see-ma or-te-gya-na...",
          "translation": "Ortega's maxim \"I am I and my circumstance\" and Unamuno's existential anguish define the profound originality of twentieth-century Spanish philosophical thought."
        }
      ],
      "mnemonics": [
        "Ortega y Gasset (Yo soy yo y mi circunstancia & Raciovitalismo)! Unamuno (Del sentimiento trágico de la vida)! Generación del 98!"
      ],
      "culturalNotes": [
        "Ortega founded the influential cultural journal *Revista de Occidente* in 1923, introducing major European philosophical movements to the Spanish-speaking world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish philosopher coined the famous axiom «Yo soy yo y mi circunstancia» in his 1914 work Meditaciones del Quijote?",
          "options": [
            "Miguel de Unamuno (106.1)",
            "Seneca (106.2)",
            "Baltasar Gracián (106.3)",
            "José Ortega y Gasset (106.4)"
          ],
          "answerIndex": 3,
          "explanation": "José Ortega y Gasset."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What existential masterpiece was written by Miguel de Unamuno exploring human longing for spiritual immortality?",
          "options": [
            "La rebelión de las masas (106.1)",
            "El Quijote (106.2)",
            "Del sentimiento trágico de la vida (106.3)",
            "Campos de Castilla (106.4)"
          ],
          "answerIndex": 2,
          "explanation": "Del sentimiento trágico de la vida."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ratiovitalism reconciles pure abstract reason with the concrete realities of human biological and historical existence.\"",
          "options": [
            "Unamuno negó la existencia de la filosofía.",
            "La Generación del 98 rechazó la literatura.",
            "Ortega y Gasset fue un pintor renacentista.",
            "El raciovitalismo concilia la razón abstracta pura con las realidades concretas de la existencia biológica e histórica humana."
          ],
          "answerIndex": 3,
          "explanation": "Accurate philosophical translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What intellectual generation in Spain emerged after the 1898 crisis to interrogate Spanish national identity and cultural regeneration?",
          "options": [
            "El Siglo de Oro",
            "La Generación del 27",
            "La Generación del 98",
            "La Ilustración"
          ],
          "answerIndex": 2,
          "explanation": "La Generación del 98.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Spanish philosophical thought"
  },
  "es-u22-l2": {
    "id": "es-u22-l2",
    "unit": "es-u22",
    "level": "C1",
    "objective": "Baroque philosophical depth: Baltasar Gracián, Calderón de la Barca, and life as a dream (Baltasar Gracián - El Criticón y El Discreto, agudeza y arte de ingenio, Calderón de la Barca - La vida es sueño, desengaño barroco).",
    "presentation": {
      "explanation": "Spanish Golden Age Baroque philosophical depth and metaphysics:\n- **Pedro Calderón de la Barca (1600–1681)**:\n  - Masterpiece philosophical drama **«La vida es sueño» (Life is a Dream - 1635)**:\n  - Prince Segismundo's existential soliloquy in the tower, questioning the boundaries between illusion, consciousness, and free will (*libre albedrío*):\n    - *«¿Qué es la vida? Un frenesí. / ¿Qué es la vida? Una ilusión, / una sombra, una ficción... que toda la vida es sueño, / y los sueños, sueños son.»*\n- **Baltasar Gracián (1601–1658)**:\n  - Jesuit philosopher and master of Conceptismo; authored *El Criticón* (philosophical allegory of human life) and *Oráculo manual y arte de prudencia* (admired by Schopenhauer and Nietzsche as the supreme guide to worldly wisdom).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El monólogo de Segismundo en «La vida es sueño» de Calderón y los aforismos de Baltasar Gracián encapsulan la cima del desengaño metafísico del Barroco hispánico.",
          "reading": "El mo-no-lo-go de Se-khees-moon-do...",
          "translation": "Segismundo's soliloquy in Calderón's \"Life is a Dream\" and Baltasar Gracián's aphorisms encapsulate the pinnacle of Hispanic Baroque metaphysical disillusionment."
        }
      ],
      "mnemonics": [
        "Calderón (La vida es sueño & Libre albedrío)! Baltasar Gracián (Oráculo manual & El Criticón)! Desengaño barroco!"
      ],
      "culturalNotes": [
        "German philosopher Arthur Schopenhauer regarded Baltasar Gracián's *El Criticón* as one of the best books ever written and personally translated Gracián's *Oráculo manual* into German."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 17th-century Spanish Golden Age dramatist authored the metaphysical philosophical drama «La vida es sueño»?",
          "options": [
            "Pedro Calderón de la Barca (107.1)",
            "Miguel de Cervantes (107.2)",
            "Lope de Vega (107.3)",
            "Tirso de Molina (107.4)"
          ],
          "answerIndex": 0,
          "explanation": "Pedro Calderón de la Barca."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Baroque thinker wrote the world-renowned philosophical manual *Oráculo manual y arte de prudencia*, celebrated by Schopenhauer and Nietzsche?",
          "options": [
            "Baltasar Gracián (107.1)",
            "Francisco de Quevedo (107.2)",
            "Luis de Góngora (107.3)",
            "San Juan de la Cruz (107.4)"
          ],
          "answerIndex": 0,
          "explanation": "Baltasar Gracián."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Segismundo's philosophical realization establishes that ethical virtue and doing good must be preserved even within an illusory dreamlike world.\"",
          "options": [
            "La vida es sueño es un tratado de botánica.",
            "Baltasar Gracián escribió únicamente novelas de caballería.",
            "La revelación filosófica de Segismundo establece que la virtud ética y el obrar bien deben preservarse incluso en un mundo ilusorio y onírico.",
            "El Barroco español carecía de contenido filosófico."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Baroque literature translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What key metaphysical theme characterizes Spanish Baroque literature, reflecting the realization that worldly pleasures are transient illusions?",
          "options": [
            "El optimismo ciego",
            "El desengaño (Disillusionment with fleeting worldly vanity)",
            "El positivismo",
            "El naturalismo científico"
          ],
          "answerIndex": 1,
          "explanation": "El desengaño.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Baroque philosophical depth"
  },
  "es-u22-l3": {
    "id": "es-u22-l3",
    "unit": "es-u22",
    "level": "C1",
    "objective": "The School of Salamanca: Francisco de Vitoria and the birth of international human rights law (La Escuela de Salamanca, Francisco de Vitoria - De Indis, ius gentium, derecho internacional moderno, Francisco Suárez).",
    "presentation": {
      "explanation": "The 16th-century School of Salamanca and the foundation of universal human rights:\n- **La Escuela de Salamanca (University of Salamanca)**:\n  - Renaissance philosophical and legal movement that modernized Thomistic scholasticism.\n- **Francisco de Vitoria (1483–1546)**:\n  - The **Father of Modern International Law (*Ius Gentium*)**.\n  - In his groundbreaking lectures *De Indis* (1539), Vitoria argued that indigenous peoples in the Americas were free human beings possessing legitimate natural rights to life, liberty, and private property, establishing universal international law binding upon all sovereign states regardless of religion or empire.\n- **Francisco Suárez** and **Bartolomé de las Casas** defending human dignity.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Francisco de Vitoria y la Escuela de Salamanca sentaron las bases del derecho internacional público y los derechos humanos universales al defender la dignidad intrínseca de los pueblos indígenas.",
          "reading": "Fran-sees-ko de Vee-to-rya ee la Es-kwe-la...",
          "translation": "Francisco de Vitoria and the School of Salamanca laid the foundations of public international law and universal human rights by defending the intrinsic dignity of indigenous peoples."
        }
      ],
      "mnemonics": [
        "Francisco de Vitoria (Father of International Law)! Escuela de Salamanca (Birth of universal human rights)! Ius gentium!"
      ],
      "culturalNotes": [
        "The United Nations building in Geneva features the \"Francisco de Vitoria Room\" honoring his foundational role in codifying international law."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 16th-century theologian at the University of Salamanca is recognized as the father of modern public international law and human rights?",
          "options": [
            "Francisco de Vitoria (108.1)",
            "Tomás de Torquemada (108.2)",
            "Felipe II (108.3)",
            "Ignacio de Loyola (108.4)"
          ],
          "answerIndex": 0,
          "explanation": "Francisco de Vitoria."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which famous Salamanca lectures did Francisco de Vitoria defend the natural legal rights and property of indigenous peoples in the Americas?",
          "options": [
            "De Indis (1539) (108.1)",
            "El Príncipe (108.2)",
            "De Monarchia (108.3)",
            "Summa Theologiae (108.4)"
          ],
          "answerIndex": 0,
          "explanation": "De Indis."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The School of Salamanca established that natural law guarantees universal rights to all human beings prior to and independent of state sovereignty.\"",
          "options": [
            "La Escuela de Salamanca justificó la esclavitud absoluta.",
            "La Escuela de Salamanca estableció que el derecho natural garantiza derechos universales a todos los seres humanos con anterioridad e independencia de la soberanía estatal.",
            "El derecho internacional nació en el siglo XIX.",
            "Francisco de Vitoria fue un militar romano."
          ],
          "answerIndex": 1,
          "explanation": "Accurate human rights law translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What Spanish university was the epicenter of the 16th-century legal and philosophical renaissance known as the School of Salamanca?",
          "options": [
            "Universidad de Salamanca (Founded 1218)",
            "Universidad de Barcelona",
            "Universidad de Sevilla",
            "Universidad Complutense"
          ],
          "answerIndex": 0,
          "explanation": "Universidad de Salamanca.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The School of Salamanca"
  },
  "es-u22-l4": {
    "id": "es-u22-l4",
    "unit": "es-u22",
    "level": "C2",
    "objective": "Poetic philosophy of Maria Zambrano: Poetic reason and the dawn of consciousness (María Zambrano, la razón poética, Filosofía y Poesía, Claros del bosque, Premio Cervantes).",
    "presentation": {
      "explanation": "Poetic Reason and philosophical introspection in María Zambrano:\n- **María Zambrano (1904–1991)**:\n  - Disciple of Ortega y Gasset; first woman to be awarded the prestigious **Premio Cervantes (1988)** and Príncipe de Asturias Prize.\n- **La Razón Poética (Poetic Reason)**:\n  - A revolutionary philosophical epistemological method developed in *Filosofía y Poesía* and *Claros del bosque*.\n  - Argues that pure discursive analytical rationalism is insufficient to comprehend the depths of the human soul, suffering, time, and hope; philosophy must unite with poetry, metaphor, and intuition to illuminate the \"clearings in the forest\" (*claros del bosque*) of human consciousness.\n- Philosophical exile (*el exilio filosófico*): Enduring 45 years in exile across Cuba, Mexico, Italy, and Switzerland, turning exile into a universal metaphor for the human condition.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La razón poética de María Zambrano funde el rigor del pensamiento filosófico con la intuición lírica para explorar las dimensiones sagradas e invisibles de la condición humana.",
          "reading": "La ra-zon po-e-tee-ka de Ma-ree-a Zam-bra-no...",
          "translation": "María Zambrano's poetic reason fuses the rigor of philosophical thought with lyrical intuition to explore the sacred and invisible dimensions of the human condition."
        }
      ],
      "mnemonics": [
        "María Zambrano (La razón poética & Claros del bosque)! Premio Cervantes 1988! Fusión de filosofía y poesía!"
      ],
      "culturalNotes": [
        "María Zambrano's tomb in Vélez-Málaga bears the inscription from the Song of Songs: *«Surge, amica mea, et veni»* (Rise up, my love, and come)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What philosophical epistemological method uniting philosophical rigor with poetic intuition was created by María Zambrano?",
          "options": [
            "El materialismo mecanicista (109.1)",
            "La razón poética (Poetic Reason) (109.2)",
            "El escepticismo radical (109.3)",
            "El positivismo lógico (109.4)"
          ],
          "answerIndex": 1,
          "explanation": "La razón poética."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which seminal philosophical poetic work by María Zambrano explores the intuitive moments where human consciousness discovers truth?",
          "options": [
            "Rayuela (109.1)",
            "Claros del bosque (109.2)",
            "Ficciones (109.3)",
            "El laberinto de la soledad (109.4)"
          ],
          "answerIndex": 1,
          "explanation": "Claros del bosque."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Poetic reason accesses primordial layers of memory, dreams, and suffering that exceed the grasp of abstract Cartesian rationality.\"",
          "options": [
            "La razón poética accede a estratos primordiales de la memoria, el sueño y el sufrimiento que desbordan el alcance de la racionalidad cartesiana abstracta.",
            "La razón poética es una fórmula matemática.",
            "Zambrano nunca escribió sobre filosofía.",
            "María Zambrano rechazó toda forma de poesía."
          ],
          "answerIndex": 0,
          "explanation": "Accurate poetic philosophy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who was the first woman to be awarded the prestigious Miguel de Cervantes Prize for Literature in 1988?",
          "options": [
            "Gabriela Mistral",
            "Gloria Fuertes",
            "Carmen Martín Gaite",
            "María Zambrano"
          ],
          "answerIndex": 3,
          "explanation": "María Zambrano.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Poetic philosophy of Maria Zambrano"
  },
  "es-u22-l5": {
    "id": "es-u22-l5",
    "unit": "es-u22",
    "level": "C2",
    "objective": "C2 synthesis on Spanish contemporary ethics: Adela Cortina and the ethics of cordial reason / aporophobia (Adela Cortina, ética de la razón cordial, aporofobia en la RAE, ética del discurso cívico, neuroética).",
    "presentation": {
      "explanation": "Contemporary Spanish moral philosophy and civic ethics:\n- **Prof. Adela Cortina (1947–present)**:\n  - Leading Spanish moral philosopher and professor of ethics at the University of Valencia; student of Jürgen Habermas and Karl-Otto Apel.\n- Coining **«Aporofobia» (Aporophobia)**:\n  - Coined the term *Aporofobia* (from Greek *aporos* = poor + *phobos* = fear) to describe the social rejection, prejudice, and contempt directed specifically toward the poor and destitute.\n  - The term was officially incorporated into the dictionary of the Real Academia Española (RAE) in 2017 and chosen as the Word of the Year.\n- **La Ética de la Razón Cordial (Ethics of Cordial Reason)**:\n  - Synthesizing Kantian deontological justice with emotional empathy, compassion, and civic communicative action to build inclusive democratic institutions.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Adela Cortina acuñó el término «aporofobia» para visibilizar el rechazo a los pobres y desarrolló la ética de la razón cordial como pilar fundamental de la deliberación democrática.",
          "reading": "A-de-la Kor-tee-na a-koon-yo el ter-mee-no a-po-ro-fo-bya...",
          "translation": "Adela Cortina coined the term \"aporophobia\" to illuminate the social rejection of the poor and developed the ethics of cordial reason as a foundational pillar of democratic deliberation."
        }
      ],
      "mnemonics": [
        "Adela Cortina (Aporofobia - rejection of the poor RAE 2017)! Ética de la razón cordial! Ética cívica y deliberación democrática!"
      ],
      "culturalNotes": [
        "Adela Cortina was the first female full member admitted to the Royal Academy of Moral and Political Sciences in Spain."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What term did Spanish philosopher Adela Cortina coin to define the specific social prejudice, contempt, and fear directed toward the poor?",
          "options": [
            "Aporofobia (Aporophobia) (110.1)",
            "Xenofobia solamente (110.2)",
            "Agorafobia (110.3)",
            "Claustrofobia (110.4)"
          ],
          "answerIndex": 0,
          "explanation": "Aporofobia."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What ethical framework developed by Adela Cortina combines moral duty with emotional empathy and compassion in democratic society?",
          "options": [
            "El utilitarismo extremo (110.1)",
            "El nihilismo moral (110.2)",
            "El relativismo absoluto (110.3)",
            "La ética de la razón cordial (110.4)"
          ],
          "answerIndex": 3,
          "explanation": "La ética de la razón cordial."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The ethics of cordial reason affirms that genuine civic justice requires not only rational democratic rules but also cultivated human empathy and compassion.\"",
          "options": [
            "Adela Cortina niega la importancia de la ética.",
            "La aporofobia es el amor a la riqueza.",
            "La razón cordial es un tratado de medicina cardíaca.",
            "La ética de la razón cordial afirma que la auténtica justicia cívica requiere no solo reglas democráticas racionales sino también empatía y compasión humanas cultivadas."
          ],
          "answerIndex": 3,
          "explanation": "Accurate contemporary ethics translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which year was the term \"aporofobia\" officially inducted into the Real Academia Española (RAE) dictionary and named Word of the Year?",
          "options": [
            "2000",
            "1950",
            "2017",
            "1800"
          ],
          "answerIndex": 2,
          "explanation": "2017.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Spanish contemporary ethics"
  },
  "es-u23-l1": {
    "id": "es-u23-l1",
    "unit": "es-u23",
    "level": "C1",
    "objective": "Catalan Modernisme & Organic Architecture: Antoni Gaudí and the Sagrada Família (Antoni Gaudí, modernismo catalán, Sagrada Família, Casa Batlló, Parque Güell, arcos catenarios, trencadís).",
    "presentation": {
      "explanation": "Antoni Gaudí (1852–1926) and the pinnacle of organic modernist architecture:\n- **Antoni Gaudí i Cornet**:\n  - Supreme architect of Catalan Modernisme; integrated nature's organic geometries (catenary curves, hyperboloids, helicoids) into structural engineering.\n- Masterpieces:\n  - **Basílica de la Sagrada Família** (Barcelona - UNESCO World Heritage):\n    - Forest of branched tree-like stone columns, hyper-detailed Nativity and Passion facades, and soaring central Jesus Christ tower nearing completion.\n  - **Casa Batlló** (The house of the dragon and bone-like balconies) and **Casa Milà (La Pedrera)**.\n  - **Parque Güell**: Architectural garden park celebrating the **Trencadís** technique (mosaic composed of fragmented, colorful ceramic and glass tiles).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La arquitectura orgánica de Antoni Gaudí en la Sagrada Família y el trencadís del Parque Güell convirtieron a Barcelona en la capital mundial del Modernismo.",
          "reading": "La ar-kee-tek-too-ra or-ga-nee-ka de An-to-nee Gow-dee...",
          "translation": "Antoni Gaudi's organic architecture in the Sagrada Familia and the trencadis mosaics of Park Guell transformed Barcelona into the world capital of Modernisme."
        }
      ],
      "mnemonics": [
        "Antoni Gaudí (Sagrada Família & Modernismo catalán)! Arcos catenarios (Nature's structural curves)! Trencadís (Mosaic of broken ceramics)!"
      ],
      "culturalNotes": [
        "Gaudí famously stated: \"My client is not in a hurry,\" referring to God when asked about the multi-decade construction timeline of the Sagrada Família."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which visionary Catalan architect designed the Sagrada Família, Casa Batlló, and Park Güell in Barcelona?",
          "options": [
            "Santiago Calatrava (111.1)",
            "Ricardo Bofill (111.2)",
            "Rafael Moneo (111.3)",
            "Antoni Gaudí (111.4)"
          ],
          "answerIndex": 3,
          "explanation": "Antoni Gaudí."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional Catalan mosaic technique using broken fragments of glazed ceramics was popularized by Gaudí and Josep Maria Jujol?",
          "options": [
            "Fresco (111.1)",
            "Grisalla (111.2)",
            "Trencadís (111.3)",
            "Tempera (111.4)"
          ],
          "answerIndex": 2,
          "explanation": "Trencadís."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Gaudí designed interior columns that branch like trunks and canopies in a sacred forest to distribute vault weight organically without external buttresses.\"",
          "options": [
            "Gaudí utilizó únicamente líneas rectas y ángulos rectos.",
            "La Sagrada Família es un edificio de estilo gótico inglés.",
            "Gaudí diseñó columnas interiores que se ramifican como troncos y copas de un bosque sagrado para distribuir el peso de las bóvedas orgánicamente sin contrafuertes externos.",
            "El Parque Güell es un centro comercial cubierto."
          ],
          "answerIndex": 2,
          "explanation": "Accurate architectural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What catenary structural model did Gaudí use with hanging weighted strings and mirrors to calculate self-supporting structural arches?",
          "options": [
            "Túnel de viento",
            "Maqueta funicular / arcos catenarios",
            "Impresora 3D",
            "Gráficos por ordenador"
          ],
          "answerIndex": 1,
          "explanation": "Maqueta funicular / arcos catenarios.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Catalan Modernisme & Organic Architecture"
  },
  "es-u23-l2": {
    "id": "es-u23-l2",
    "unit": "es-u23",
    "level": "C1",
    "objective": "Spanish Painting Golden Age & Court Realism: Diego Velázquez and Las Meninas (Diego Velázquez - Las Meninas, El Prado, pintura de corte de Felipe IV, claroscuro y perspectiva aérea, Los borrachos, La rendición de Breda).",
    "presentation": {
      "explanation": "Diego Velázquez (1599–1660) and the pinnacle of universal pictorial art:\n- **Diego Rodríguez de Silva y Velázquez** (Seville & Madrid):\n  - Court painter to King Philip IV; master of atmospheric aerial perspective (*perspectiva aérea*) and loose, impressionistic brushwork.\n- Supreme Masterpiece: **«Las Meninas» (The Ladies-in-Waiting - 1656 - Museo del Prado)**:\n  - Complex spatial and philosophical painting depicting Infanta Margarita Teresa surrounded by maidens (meninas), dwarfs (Mari Bárbola), the royal chamberlain in the doorway, and Velázquez himself standing before a giant canvas painting the viewer.\n  - The mirror in the background reflects the King and Queen, placing the spectator into the royal viewpoint and challenging the boundaries of illusion and reality (hailed by Luca Giordano as \"the theology of painting\").\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "«Las Meninas» de Diego Velázquez en el Museo del Prado revoluciona la perspectiva aérea y la relación entre el espectador, el artista y la monarquía.",
          "reading": "Las Me-nee-nas de Dye-go Ve-laz-kez...",
          "translation": "\"Las Meninas\" by Diego Velázquez at the Prado Museum revolutionizes aerial perspective and the dynamic relationship between the spectator, the artist, and royalty."
        }
      ],
      "mnemonics": [
        "Diego Velázquez (Las Meninas 1656 at the Museo del Prado)! Perspectiva aérea (Painting the air itself)! El espejo de los reyes!"
      ],
      "culturalNotes": [
        "Pablo Picasso was so fascinated by *Las Meninas* that he locked himself in his studio in 1957 to paint a legendary series of 58 analytical cubist variations."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 17th-century Spanish Golden Age painter created the masterpiece «Las Meninas» displayed in Madrid's Museo del Prado?",
          "options": [
            "Diego Velázquez (112.1)",
            "Bartolomé Esteban Murillo (112.2)",
            "Francisco de Goya (112.3)",
            "El Greco (112.4)"
          ],
          "answerIndex": 0,
          "explanation": "Diego Velázquez."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What reflective object on the rear wall of *Las Meninas* reveals the presence of King Philip IV and Queen Mariana of Austria?",
          "options": [
            "Un espejo (A mirror) (112.1)",
            "Una ventana (112.2)",
            "Un cuadro al óleo (112.3)",
            "Una puerta cerrada (112.4)"
          ],
          "answerIndex": 0,
          "explanation": "Un espejo (A mirror)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Velázquez captured the palpable atmosphere and shimmering light between the figures, giving the impression of painting the very air within the royal chamber.\"",
          "options": [
            "Las Meninas fue pintada por Salvador Dalí.",
            "Velázquez capturó la atmósfera palpable y la luz trémula entre las figuras, dando la impresión de pintar el aire mismo dentro de la cámara real.",
            "Velázquez rechazó trabajar para la corte real.",
            "El Prado es un museo de arte moderno en París."
          ],
          "answerIndex": 1,
          "explanation": "Accurate art history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What famous historical painting by Velázquez depicts the chivalrous surrender of the Dutch city of Breda to Spanish General Spínola?",
          "options": [
            "«La rendición de Breda» (Las lanzas)",
            "«La fragua de Vulcano»",
            "«Las hilanderas»",
            "«Los borrachos»"
          ],
          "answerIndex": 0,
          "explanation": "«La rendición de Breda».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Spanish Painting Golden Age & Court Realism"
  },
  "es-u23-l3": {
    "id": "es-u23-l3",
    "unit": "es-u23",
    "level": "C1",
    "objective": "The Caprichos & Black Paintings: Francisco de Goya as the father of modern art (Francisco de Goya - Los Caprichos, «El sueño de la razón produce monstruos», Pinturas Negras en la Quinta del Sordo, Saturno devorando a su hijo, El tres de mayo de 1808).",
    "presentation": {
      "explanation": "Francisco de Goya (1746–1828) as the visionary bridge from Enlightenment to Modern Expressionism:\n- **Francisco de Goya y Lucientes** (Fuendetodos, Zaragoza & Madrid):\n  - Court painter turned fearless satirist and prophet of modern existential anguish after losing his hearing in 1792.\n- Critical Engravings & Anti-War Masterpieces:\n  - **«Los Caprichos» (1799)**: Satirical aquatints attacking superstition, clerical hypocrisy, and feudal ignorance. Plate 43: **«El sueño de la razón produce monstruos»** (The sleep of reason produces monsters).\n  - **«El tres de mayo de 1808 en Madrid»**: The archetype of anti-war painting, portraying the faceless French firing squad executing illuminated Spanish civilians at Príncipe Pío.\n  - **Las Pinturas Negras (The Black Paintings - 1819–1823)**: Mural masterpieces painted on the walls of his house (*Quinta del Sordo*), including *Saturno devorando a su hijo* and *El aquelarre*.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Goya anticipó el expresionismo y el surrealismo del siglo veinte con sus Pinturas Negras y el grabado «El sueño de la razón produce monstruos».",
          "reading": "Go-ya an-tee-see-po el eks-pre-syo-nees-mo...",
          "translation": "Goya anticipated twentieth-century expressionism and surrealism with his Black Paintings and the engraving \"The sleep of reason produces monsters.\""
        }
      ],
      "mnemonics": [
        "Francisco de Goya (Los Caprichos & Pinturas Negras)! «El sueño de la razón produce monstruos»! El tres de mayo de 1808! Saturno devorando a su hijo!"
      ],
      "culturalNotes": [
        "The Black Paintings were originally executed directly in oil onto the plaster walls of Goya's country home and were later transferred to canvas in 1874 to be preserved in the Prado."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish master painted the haunting Pinturas Negras and the anti-war masterpiece «El tres de mayo de 1808»?",
          "options": [
            "Francisco de Goya (113.1)",
            "Pablo Picasso (113.2)",
            "Joan Miró (113.3)",
            "Ignacio Zuloaga (113.4)"
          ],
          "answerIndex": 0,
          "explanation": "Francisco de Goya."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous caption accompanies Plate 43 of Goya's Los Caprichos depicting a slumbering intellectual surrounded by flying owls and bats?",
          "options": [
            "«El sueño de la razón produce monstruos» (113.1)",
            "«Libertad, igualdad, fraternidad» (113.2)",
            "«Viva la muerte» (113.3)",
            "«El rey ha muerto» (113.4)"
          ],
          "answerIndex": 0,
          "explanation": "«El sueño de la razón produce monstruos»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Goya's Black Paintings reveal the raw psychological terror, mythological fury, and dark existential isolation of the human condition.\"",
          "options": [
            "Las Pinturas Negras de Goya revelan el terror psicológico crudo, el furor mitológico y el oscuro aislamiento existencial de la condición humana.",
            "El tres de mayo de 1808 celebra la victoria de Napoleón.",
            "Los Caprichos son recetas de repostería.",
            "Goya pintaba únicamente paisajes luminosos de flores."
          ],
          "answerIndex": 0,
          "explanation": "Accurate art analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the name of the Madrid country house on the Manzanares River where deaf Goya painted the Black Paintings on his living room walls?",
          "options": [
            "La Granja",
            "El Pardo",
            "El Escorial",
            "La Quinta del Sordo"
          ],
          "answerIndex": 3,
          "explanation": "La Quinta del Sordo.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Caprichos & Black Paintings"
  },
  "es-u23-l4": {
    "id": "es-u23-l4",
    "unit": "es-u23",
    "level": "C2",
    "objective": "The Cubist & Surrealist Vanguard: Pablo Picasso's Guernica and Salvador Dalí's Paranoid-Critical Method (Pablo Picasso - Guernica 1937, cubismo analítico y sintético, Salvador Dalí - método paranoico-crítico, La persistencia de la memoria, Joan Miró).",
    "presentation": {
      "explanation": "Spanish 20th-century avant-garde titans who reshaped modern visual consciousness:\n- **Pablo Picasso (1881–1973 - Málaga & Paris)**:\n  - Co-invented **Cubism** (Analytic and Synthetic) with Georges Braque (*Les Demoiselles d'Avignon* 1907), dismantling single-point Renaissance perspective.\n  - Masterpiece: **«Guernica» (1937 - Museo Reina Sofía)**:\n    - Monumental monochrome mural commissioned by the Spanish Republic for the Paris International Exposition after the Nazi Condor Legion carpet-bombed the Basque town of Guernica; global symbol against the barbarism of war (the screaming horse, the bull, the weeping mother holding her dead infant, the lightbulb).\n- **Salvador Dalí (1904–1989 - Figueres)**:\n  - Supreme surrealist; formulated the **Método Paranoico-Crítico (Paranoid-Critical Method)** to access the subconscious and manifest double-images.\n  - Masterpiece: **«La persistencia de la memoria» (1931)** featuring soft melting pocket watches on a deserted Catalan beach.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "«Guernica» de Picasso se erige como el grito visual universal contra la barbarie bélica, mientras que el método paranoico-crítico de Dalí redefinió el surrealismo.",
          "reading": "Gwer-nee-ka de Pee-kas-so se e-ree-khe...",
          "translation": "Picasso's \"Guernica\" stands as the universal visual cry against the barbarism of war, while Dali's paranoid-critical method redefined surrealism."
        }
      ],
      "mnemonics": [
        "Pablo Picasso (Guernica 1937 at Reina Sofía & Cubism)! Salvador Dalí (Método paranoico-crítico & Melting watches)! Joan Miró!"
      ],
      "culturalNotes": [
        "Picasso explicitly decreed that *Guernica* could only be returned to Spain once democratic liberties and a constitutional republic were fully restored, arriving in Madrid in 1981."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which monumental 1937 anti-war monochrome mural was painted by Pablo Picasso after the aerial bombing of a Basque historic market town?",
          "options": [
            "«El Guitarrero ciego» (114.1)",
            "«Guernica» (114.2)",
            "«La persistencia de la memoria» (114.3)",
            "«Las señoritas de Avignon» (114.4)"
          ],
          "answerIndex": 1,
          "explanation": "«Guernica»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What surrealist creative technique did Salvador Dalí develop to cultivate systematic delirium and double visual illusions?",
          "options": [
            "El collage dadaísta (114.1)",
            "El método paranoico-crítico (Paranoid-critical method) (114.2)",
            "La aerografía comercial (114.3)",
            "El automatismo psíquico puro (114.4)"
          ],
          "answerIndex": 1,
          "explanation": "El método paranoico-crítico."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Guernica's monochrome black-and-white palette evokes the stark urgency of wartime newspaper photographs, stripping war of all romantic glamour.\"",
          "options": [
            "La persistencia de la memoria muestra relojes de piedra dura.",
            "Dalí pintó Guernica en 1980.",
            "El cubismo buscaba imitar fielmente la fotografía clásica.",
            "La paleta monocromática en blanco y negro de Guernica evoca la urgencia cruda de las fotografías de periódicos de guerra, despojando a la contienda de todo glamur romántico."
          ],
          "answerIndex": 3,
          "explanation": "Accurate avant-garde art translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which Madrid national contemporary art museum is Picasso's monumental mural *Guernica* permanently housed today?",
          "options": [
            "Museo de América",
            "Museo Thyssen-Bornemisza",
            "Museo Nacional Centro de Arte Reina Sofía",
            "Museo del Prado"
          ],
          "answerIndex": 2,
          "explanation": "Museo Reina Sofía.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Cubist & Surrealist Vanguard"
  },
  "es-u23-l5": {
    "id": "es-u23-l5",
    "unit": "es-u23",
    "level": "C2",
    "objective": "C2 synthesis on Contemporary Spanish Architecture: Rafael Moneo and Ricardo Bofill (Rafael Moneo - Premio Pritzker, Museo Nacional de Arte Romano de Mérida, Kursaal de San Sebastián, Ricardo Bofill - La Muralla Roja y La Fábrica, arquitectura posmoderna).",
    "presentation": {
      "explanation": "Contemporary Spanish architecture, urban historic contextualism, and sculptural monumentality:\n- **Rafael Moneo (1937–present - Tudela)**:\n  - The first Spanish architect to win the prestigious **Pritzker Architecture Prize (1996)** and Prince of Asturias Award.\n  - Masterpieces:\n    - **Museo Nacional de Arte Romano de Mérida (1986)**: Colossal brick arches evoking Roman antiquity with contemporary spatial light.\n    - **Auditorio Kursaal** in San Sebastián (two giant translucent glass rocks on the Cantabrian coastline) and the Prado Museum expansion in Madrid.\n- **Ricardo Bofill (1939–2022 - Barcelona / Taller de Arquitectura)**:\n  - Pioneer of poetic monumental postmodernism and brutalist conversion.\n  - Masterpieces: **«La Muralla Roja» (Calpe, Alicante)** (interlocking geometric stairways and vivid pink/indigo towers inspired by North African adobe kasbahs) and **«La Fábrica» (Sant Just Desvern)** (transforming an abandoned cement silo factory into a lush architectural headquarters).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La monumentalidad sobria de Rafael Moneo en Mérida y la audacia geométrica de Ricardo Bofill en La Muralla Roja sitúan a la arquitectura española contemporánea en la vanguardia global.",
          "reading": "La mo-noo-men-ta-lee-dad so-bree-a de Ra-fa-el Mo-ne-o...",
          "translation": "Rafael Moneo's sober monumentality in Merida and Ricardo Bofill's geometric audacity in La Muralla Roja place contemporary Spanish architecture at the global vanguard."
        }
      ],
      "mnemonics": [
        "Rafael Moneo (1996 Pritzker Prize & Museo Romano de Mérida)! Kursaal San Sebastián! Ricardo Bofill (La Muralla Roja & La Fábrica)!"
      ],
      "culturalNotes": [
        "Ricardo Bofill's La Muralla Roja in Calpe has become one of the most photographed architectural landmarks in the world, inspiring the aesthetics of the global series *Squid Game*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish architect won the 1996 Pritzker Architecture Prize and designed the National Museum of Roman Art in Mérida?",
          "options": [
            "Rafael Moneo (115.1)",
            "Ricardo Bofill (115.2)",
            "Alberto Campo Baeza (115.3)",
            "Santiago Calatrava (115.4)"
          ],
          "answerIndex": 0,
          "explanation": "Rafael Moneo."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous colorful geometric residential fortress complex in Calpe, Alicante was designed by architect Ricardo Bofill in 1973?",
          "options": [
            "La Pedrera (115.1)",
            "Torre Agbar (115.2)",
            "Ciudad de las Artes (115.3)",
            "La Muralla Roja (115.4)"
          ],
          "answerIndex": 3,
          "explanation": "La Muralla Roja."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Rafael Moneo's brick arches in Merida establish an architectural dialogue with Roman antiquity while maintaining clean contemporary geometric functionality.\"",
          "options": [
            "Ricardo Bofill demolió todas las fábricas de cemento.",
            "Moneo nunca ganó el Premio Pritzker.",
            "Los arcos de ladrillo de Rafael Moneo en Mérida establecen un diálogo arquitectónico con la antigüedad romana mientras mantienen una funcionalidad geométrica contemporánea depurada.",
            "El Kursaal es una iglesia gótica medieval."
          ],
          "answerIndex": 2,
          "explanation": "Accurate contemporary architecture translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What industrial facility in Barcelona did Ricardo Bofill convert into his iconic personal residence and architectural studio headquarters?",
          "options": [
            "Una mina de carbón",
            "Una fábrica de cemento abandonada (La Fábrica)",
            "Un hangar de aviones",
            "Un astillero naval"
          ],
          "answerIndex": 1,
          "explanation": "Una fábrica de cemento abandonada (La Fábrica).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Contemporary Spanish Architecture"
  },
  "es-u24-l1": {
    "id": "es-u24-l1",
    "unit": "es-u24",
    "level": "C1",
    "objective": "Flamenco Cante Jondo & The Metaphysics of Duende: Federico García Lorca and Paco de Lucía (Flamenco cante jondo, Federico García Lorca - Teoría y juego del duende, Paco de Lucía - Entre dos aguas, cajón flamenco, compás de soleá y bulerías).",
    "presentation": {
      "explanation": "Flamenco Cante Jondo, Andalusian modal harmony, and the mysterious power of Duende:\n- **Federico García Lorca (1898–1936)**:\n  - Landmark Lecture: **«Teoría y juego del duende» (Theory and Play of the Duende - 1933)**;\n  - Differentiating *Duende* from the Muse and Angel: The Muse dictates from outside, the Angel illuminates from above, but the **Duende climbs from the soles of the feet through the bloodstream**; it is the dark, agonizing, Dionysian struggle of the artist wrestling with death, mortality, and supreme emotional truth (*\"Para buscar al duende no hay mapa ni ejercicio\"*).\n- **Paco de Lucía (Francisco Sánchez Gómez - 1947–2014 - Algeciras)**:\n  - The supreme flamenco guitar virtuoso in world history;\n  - Modernized flamenco harmony (introducing jazz seventh chords and bossa nova phrasing);\n  - Masterpiece: **«Entre dos aguas» (1973)** and the introduction of the Peruvian wooden box drum (**el cajón afroperuano**) into traditional Spanish flamenco rhythm in 1977, transforming modern flamenco percussion forever.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Lorca definió el «duende» como la fuerza telúrica que quema la sangre del artista en el cante jondo, mientras Paco de Lucía revolucionó la guitarra flamenca mundial.",
          "reading": "Lor-ka de-fee-nyo el dwen-de ko-mo la fwer-sa...",
          "translation": "Lorca defined \"duende\" as the telluric force burning in the artist's blood during deep cante jondo, while Paco de Lucia revolutionized world flamenco guitar."
        }
      ],
      "mnemonics": [
        "Lorca (Teoría y juego del duende 1933)! Cante jondo! Paco de Lucía (Entre dos aguas & El cajón flamenco)! Compás de soleá y bulerías!"
      ],
      "culturalNotes": [
        "In 2010, Flamenco was officially inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish poet and dramatist formulated the seminal philosophical treatise «Teoría y juego del duende» analyzing the dark spirit of flamenco?",
          "options": [
            "Antonio Machado (116.1)",
            "Rafael Alberti (116.2)",
            "Gustavo Adolfo Bécquer (116.3)",
            "Federico García Lorca (116.4)"
          ],
          "answerIndex": 3,
          "explanation": "Federico García Lorca."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which flamenco guitar virtuoso composed «Entre dos aguas» and introduced the Afro-Peruvian cajón into Spanish flamenco rhythm?",
          "options": [
            "Andrés Segovia (116.1)",
            "Paco de Lucía (116.2)",
            "Manuel de Falla (116.3)",
            "Joaquín Rodrigo (116.4)"
          ],
          "answerIndex": 1,
          "explanation": "Paco de Lucía."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The duende is not an intellectual technique but an authentic interior struggle where the performer confronts mortality to channel raw emotional truth.\"",
          "options": [
            "Paco de Lucía tocaba el violín clásico.",
            "El duende no es una técnica intelectual sino una lucha interior auténtica donde el intérprete confronta la mortalidad para canalizar la verdad emocional pura.",
            "El flamenco nació en el norte de Europa.",
            "Lorca afirmaba que el duende se aprende con mapas."
          ],
          "answerIndex": 1,
          "explanation": "Accurate musicological analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional 12-beat rhythmic cycle in flamenco forms the bedrock of solemn deep singing (Cante Jondo)?",
          "options": [
            "El compás de Soleá (12-beat cycle)",
            "El compás de 4/4 de vals",
            "El ritmo binario simple",
            "La polca"
          ],
          "answerIndex": 0,
          "explanation": "El compás de Soleá.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Flamenco Cante Jondo & The Metaphysics of Duende"
  },
  "es-u24-l2": {
    "id": "es-u24-l2",
    "unit": "es-u24",
    "level": "C1",
    "objective": "Classical Spanish Orchestral Nationalism: Manuel de Falla and Isaac Albéniz (Manuel de Falla - El amor brujo, Danza ritual del fuego, Noches en los jardines de España, Isaac Albéniz - Suite Iberia, Enrique Granados - Goyescas).",
    "presentation": {
      "explanation": "Spanish Classical Music Renaissance and symphonic Impressionism:\n- **Manuel de Falla (1876–1946 - Cádiz & Granada)**:\n  - The foremost Spanish composer of the 20th century; fused authentic Andalusian folk modal scales (phrygian mode) with impressionist orchestration alongside Claude Debussy and Maurice Ravel in Paris.\n- Masterpieces:\n  - **«El amor brujo» (Love, the Magician - 1915)**: Featuring the electrifying **«Danza ritual del fuego»** (Ritual Fire Dance) exorcising evil spirits through trills and rhythmic incantations.\n  - **«Noches en los jardines de España» (Nights in the Gardens of Spain - 1916)**: Symphonic impressions for piano and orchestra invoking the nocturnal fountains of the Generalife at the Alhambra.\n- **Isaac Albéniz (1860–1909)**: **«Suite Iberia» (1905–1908)**: 12 monumental piano masterworks capturing the regional rhythms of Triana, Lavapiés, and El Albaicín.\n- **Enrique Granados (1867–1916)**: **«Goyescas»**, transcribing Goya's paintings into lyrical piano romanticism.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "«Noches en los jardines de España» de Manuel de Falla y la «Suite Iberia» de Albéniz consagraron el nacionalismo musical español en las principales salas sinfónicas del mundo.",
          "reading": "No-ches en los khar-dee-nes de Es-pa-nya de Ma-nwel de Fa-lya...",
          "translation": "Manuel de Falla's \"Nights in the Gardens of Spain\" and Albéniz's \"Iberia Suite\" established Spanish musical nationalism in the premier symphonic halls of the world."
        }
      ],
      "mnemonics": [
        "Manuel de Falla (El amor brujo & Danza ritual del fuego)! Noches en los jardines de España! Isaac Albéniz (Suite Iberia)! Enrique Granados (Goyescas)!"
      ],
      "culturalNotes": [
        "Claude Debussy famously remarked that Manuel de Falla's *Noches en los jardines de España* smelled of nocturnal orange blossoms and jasmine floating across Andalusian breezes."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 20th-century Spanish composer wrote the orchestral masterwork «El amor brujo» containing the famous \"Danza ritual del fuego\"?",
          "options": [
            "Manuel de Falla (117.1)",
            "Tomás Luis de Victoria (117.2)",
            "Isaac Albéniz (117.3)",
            "Joaquín Rodrigo (117.4)"
          ],
          "answerIndex": 0,
          "explanation": "Manuel de Falla."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What monumental 12-piece piano suite capturing the regional musical soul of Spain was composed by Isaac Albéniz?",
          "options": [
            "«Suite Iberia» (117.1)",
            "«Goyescas» (117.2)",
            "«El sombrero de tres picos» (117.3)",
            "«Concierto de Aranjuez» (117.4)"
          ],
          "answerIndex": 0,
          "explanation": "«Suite Iberia»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Manuel de Falla combined Andalusian Phrygian modal melodies with luminous impressionist orchestral textures to evoke nocturnal gardens.\"",
          "options": [
            "Manuel de Falla combinó melodías modales frigias andaluzas con luminosas texturas orquestales impresionistas para evocar jardines nocturnos.",
            "El amor brujo es una ópera italiana del siglo XVII.",
            "Goyescas fue compuesta para trompeta solista.",
            "Isaac Albéniz fue un director de cine mudo."
          ],
          "answerIndex": 0,
          "explanation": "Accurate music analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which historic gardens of the Alhambra palace in Granada inspired the opening movement of Falla's *Nights in the Gardens of Spain*?",
          "options": [
            "El Parque del Retiro",
            "El Laberinto de Horta",
            "Los Jardines de Aranjuez",
            "Los jardines del Generalife (At the Alhambra)"
          ],
          "answerIndex": 3,
          "explanation": "Los jardines del Generalife.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Classical Spanish Orchestral Nationalism"
  },
  "es-u24-l3": {
    "id": "es-u24-l3",
    "unit": "es-u24",
    "level": "C1",
    "objective": "Classical Guitar Mastery & Spanish Renaissance Polyphony: Andrés Segovia, Joaquín Rodrigo, and Victoria (Andrés Segovia - emancipación de la guitarra clásica, Joaquín Rodrigo - Concierto de Aranjuez y el Adagio, Tomás Luis de Victoria - polifonía sacra del Renacimiento).",
    "presentation": {
      "explanation": "Classical guitar virtuosity, concerto repertoire, and Renaissance polyphony:\n- **Andrés Segovia (1893–1987 - Linares)**:\n  - The Father of the Modern Classical Guitar; elevated the Spanish guitar from folk tavern instrument into a noble concert hall solo instrument across Carnegie Hall and the world's Philharmonic stages.\n- **Joaquín Rodrigo (1901–1999 - Sagunto)**:\n  - Blind composer who authored the most beloved guitar concerto in world history: **«Concierto de Aranjuez» (1939)**;\n  - The heartbreaking **Adagio (2nd Movement)**: A profound dialogue between English horn and solo guitar, composed in Paris as an elegy for the loss of his first child and a prayer for his wife's survival amidst the trauma of the Spanish Civil War.\n- **Tomás Luis de Victoria (1548–1611 - Ávila)**:\n  - The greatest polyphonic composer of the Spanish Golden Age; authored the supreme funeral requiem **«Officium Defunctorum» (1605)**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El sublime Adagio del «Concierto de Aranjuez» de Joaquín Rodrigo y la maestría de Andrés Segovia consagraron la guitarra clásica como la voz universal del alma española.",
          "reading": "El soob-lee-me A-da-jyo del Kon-syer-to de A-ran-kwez...",
          "translation": "The sublime Adagio of Joaquín Rodrigo's \"Concierto de Aranjuez\" and Andrés Segovia's virtuosity enshrined the classical guitar as the universal voice of the Spanish soul."
        }
      ],
      "mnemonics": [
        "Andrés Segovia (Father of classical concert guitar)! Joaquín Rodrigo (Concierto de Aranjuez & Adagio for English horn and guitar)! Tomás Luis de Victoria (Officium Defunctorum 1605)!"
      ],
      "culturalNotes": [
        "Miles Davis and Gil Evans arranged Rodrigo's *Concierto de Aranjuez Adagio* into the legendary 1960 modal jazz album *Sketches of Spain*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which blind Spanish composer wrote the immortal 1939 guitar and orchestral masterpiece «Concierto de Aranjuez»?",
          "options": [
            "Joaquín Rodrigo (118.1)",
            "Andrés Segovia (118.2)",
            "Manuel de Falla (118.3)",
            "Pablo Casals (118.4)"
          ],
          "answerIndex": 0,
          "explanation": "Joaquín Rodrigo."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Spanish musician is recognized as the Father of the Modern Classical Guitar for elevating it to world concert hall stages?",
          "options": [
            "Andrés Segovia (118.1)",
            "Francisco Tárrega (118.2)",
            "Paco de Lucía (118.3)",
            "Narciso Yepes (118.4)"
          ],
          "answerIndex": 0,
          "explanation": "Andrés Segovia."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Adagio of the Concierto de Aranjuez weaves a poignant dialogue between the melancholy English horn and the delicate arpeggios of the classical guitar.\"",
          "options": [
            "Andrés Segovia tocaba la batería de jazz.",
            "Tomás Luis de Victoria vivió en el siglo XIX.",
            "El Concierto de Aranjuez fue compuesto para piano eléctrico.",
            "El Adagio del Concierto de Aranjuez teje un diálogo conmovedor entre el melancólico corno inglés y los delicados arpegios de la guitarra clásica."
          ],
          "answerIndex": 3,
          "explanation": "Accurate concert music translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What 16th-century polyphonic masterwork by Tomás Luis de Victoria is considered the crowning jewel of Renaissance sacred choral music?",
          "options": [
            "«El Mesías»",
            "«La Pasión según San Mateo»",
            "«Officium Defunctorum» (1605)",
            "«Las Cuatro Estaciones»"
          ],
          "answerIndex": 2,
          "explanation": "«Officium Defunctorum».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Classical Guitar Mastery & Spanish Renaissance Polyphony"
  },
  "es-u24-l4": {
    "id": "es-u24-l4",
    "unit": "es-u24",
    "level": "C2",
    "objective": "Cello Humanism & Peace Advocacy: Pau Casals and El Cant dels Ocells (Pau Casals - Pablo Casals, redescubrimiento de las Suites de Bach, Himno de las Naciones Unidas, El cant dels ocells, discurso ante la ONU en 1971 «I am a Catalan»).",
    "presentation": {
      "explanation": "Pau Casals (1876–1973 - El Vendrell, Catalonia & San Juan, Puerto Rico) and musical humanism:\n- **Pau Casals (Pablo Casals)**:\n  - The supreme cellist of the 20th century; revolutionized cello technique.\n- Historic Breakthroughs:\n  - **Rediscovery of J.S. Bach's 6 Cello Suites (1890)**: Found forgotten sheet music in a second-hand Barcelona music shop at age 13; spent 12 years practicing before performing them publicly, transforming the Suites into the central pillar of cello repertoire.\n  - Anti-Fascist Resistance & Moral Exile: Refused to perform in Franco's Spain or in countries recognizing totalitarian dictatorships, founding the **Prades Festival** in the French Pyrenees.\n  - **«El cant dels ocells» (The Song of the Birds)**: Traditional Catalan Christmas folk carol transformed by Casals into an international hymn of peace, freedom, and exile.\n  - UN Peace Medal (1971): Composed the **United Nations Hymn** (lyrics by W.H. Auden) and delivered his legendary speech at age 94: *«I am a Catalan... Catalonia was the first country to have a parliament, long before England... Peace, peace, peace!»*.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Pau Casals rescató las Suites de Bach del olvido y convirtió «El cant dels ocells» en el himno universal de la paz y la dignidad de los pueblos ante la ONU.",
          "reading": "Pow Ka-sals res-ka-to las Sweets de Bahk...",
          "translation": "Pau Casals rescued Bach's Cello Suites from obscurity and transformed \"El cant dels ocells\" into the universal anthem of peace and human dignity before the United Nations."
        }
      ],
      "mnemonics": [
        "Pau Casals (Discovered Bach's 6 Cello Suites at 13)! El cant dels ocells (Hymn of peace)! 1971 UN Speech \"I am a Catalan\"! Prades Festival!"
      ],
      "culturalNotes": [
        "When Casals played *El cant dels ocells* at the White House for President John F. Kennedy in 1961, it was broadcast globally as a historic cultural summit."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Catalan cello titan rediscovered J.S. Bach's Six Cello Suites and made the Catalan folk song «El cant dels ocells» a global anthem of peace?",
          "options": [
            "Yo-Yo Ma (119.1)",
            "Pau Casals (Pablo Casals) (119.2)",
            "Jacqueline du Pré (119.3)",
            "Mstislav Rostropovich (119.4)"
          ],
          "answerIndex": 1,
          "explanation": "Pau Casals (Pablo Casals)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional Catalan folk carol did Pau Casals perform at the conclusion of every concert as a prayer for peace and longing for his homeland?",
          "options": [
            "«Guantanamera» (119.1)",
            "«El cant dels ocells» (The Song of the Birds) (119.2)",
            "«Cielito Lindo» (119.3)",
            "«La Cucaracha» (119.4)"
          ],
          "answerIndex": 1,
          "explanation": "«El cant dels ocells»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Casals received the United Nations Peace Medal in 1971, affirming that music must serve as an active instrument of human brotherhood and democratic freedom.\"",
          "options": [
            "Las Suites de Bach fueron compuestas por Casals.",
            "Casals se negó a tocar el violonchelo después de 1900.",
            "Casals recibió la Medalla de la Paz de las Naciones Unidas en 1971, afirmando que la música debe servir como un instrumento activo de fraternidad humana y libertad democrática.",
            "Pau Casals apoyó la dictadura de Franco."
          ],
          "answerIndex": 2,
          "explanation": "Accurate musical humanism translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which French Pyrenean border village did Pau Casals live in voluntary exile and found his legendary international chamber music festival in 1950?",
          "options": [
            "Burdeos",
            "Prades (Prada de Conflent)",
            "Marsella",
            "Niza"
          ],
          "answerIndex": 1,
          "explanation": "Prades.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Cello Humanism & Peace Advocacy"
  },
  "es-u24-l5": {
    "id": "es-u24-l5",
    "unit": "es-u24",
    "level": "C2",
    "objective": "C2 synthesis on The Zarzuela Genre & Opera Theater: Teatro Real, Gran Teatre del Liceu, and Amadeo Vives (La Zarzuela, género chico y género grande, La verbena de la Paloma, Doña Francisquita, Teatro Real de Madrid, Gran Teatre del Liceu de Barcelona).",
    "presentation": {
      "explanation": "The lyric theatrical genre of Zarzuela and Spain's grand opera houses:\n- **La Zarzuela (Spanish Lyric Opera Genre)**:\n  - Originated in the 17th century at the Palacio de la Zarzuela under King Philip IV; alternating spoken dialogue with sung arias (*romanzas*), choruses, and popular folk dances (chotis, seguidillas, jotas).\n  - **Género Grande** (3-act full operatic works: *Doña Francisquita* by Amadeo Vives, *Luisa Fernanda* by Federico Moreno Torroba) vs **Género Chico** (1-act comic masterworks: *La verbena de la Paloma* by Tomás Bretón, *La revoltosa* by Ruperto Chapí).\n- Grand Opera Temples:\n  - **Teatro Real de Madrid (Inaugurated 1850)**: Premier national opera house of Spain (awarded Best Opera Company in the World at the International Opera Awards 2021).\n  - **Gran Teatre del Liceu (Barcelona - Inaugurated 1847 on La Rambla)**: Historic acoustic horseshoe theater where Montserrat Caballé and Josep Carreras made world operatic history.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La zarzuela inmortalizó la vida castiza en «La verbena de la Paloma», mientras el Teatro Real y el Gran Teatre del Liceu lideran el panorama operístico internacional.",
          "reading": "La zar-zwe-la in-mor-ta-lee-zo la vee-da kas-tee-sa...",
          "translation": "The zarzuela immortalized authentic popular life in \"La verbena de la Paloma,\" while the Teatro Real and Gran Teatre del Liceu lead the international operatic scene."
        }
      ],
      "mnemonics": [
        "La Zarzuela (Género chico & Género grande)! La verbena de la Paloma & Doña Francisquita! Teatro Real de Madrid (Best Opera Company 2021)! Gran Teatre del Liceu!"
      ],
      "culturalNotes": [
        "Plácido Domingo, Alfredo Kraus, Montserrat Caballé, and Teresa Berganza championed Zarzuela romanzas across the world's grandest opera houses from La Scala to the Met."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What traditional Spanish lyric theatrical genre alternates spoken dramatic dialogue with sung operatic romanzas and popular folk dances?",
          "options": [
            "La Zarzuela (120.1)",
            "El Flamenco puro (120.2)",
            "El Oratorio (120.3)",
            "La Cantata alemana (120.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Zarzuela."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What historic opera house on La Rambla in Barcelona is world-renowned for its legendary horseshoe acoustic hall and Montserrat Caballé's performances?",
          "options": [
            "Palacio de la Zarzuela (120.1)",
            "Palau de la Música Catalana solo concierto (120.2)",
            "Teatro de la Zarzuela (120.3)",
            "Gran Teatre del Liceu (120.4)"
          ],
          "answerIndex": 3,
          "explanation": "Gran Teatre del Liceu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Zarzuela romanzas express passionate love, social class tensions, and the vibrant atmospheric street life of 19th-century Madrid and Andalusia.\"",
          "options": [
            "Doña Francisquita es una novela policíaca.",
            "Las romanzas de zarzuela expresan el amor apasionado, las tensiones de clase social y la vibrante vida callejera del Madrid y la Andalucía del siglo XIX.",
            "La zarzuela prohíbe el uso de orquestas.",
            "El Teatro Real fue demolido en 1900."
          ],
          "answerIndex": 1,
          "explanation": "Accurate opera history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which 1894 one-act zarzuela (género chico) by Tomás Bretón, featuring the characters Julián and Susana on the feast of the Virgin of the Dove, is the most famous in Spanish history?",
          "options": [
            "«La verbena de la Paloma»",
            "«El barberillo de Lavapiés»",
            "«Marina»",
            "«La del manojo de rosas»"
          ],
          "answerIndex": 0,
          "explanation": "«La verbena de la Paloma».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Zarzuela Genre & Opera Theater"
  },
  "es-u25-l1": {
    "id": "es-u25-l1",
    "unit": "es-u25",
    "level": "C1",
    "objective": "Surrealist Cinema & Subversive Vision: Luis Buñuel (Luis Buñuel - Un perro andaluz 1929 con Salvador Dalí, Viridiana - Palma de Oro en Cannes 1961, El discreto encanto de la burguesía, crítica al clero y a la burguesía).",
    "presentation": {
      "explanation": "Luis Buñuel (1900–1983 - Calanda, Teruel & Mexico City) and surrealist world cinema:\n- **Luis Buñuel Portolés**:\n  - The Father of Cinematic Surrealism; collaborated with Salvador Dalí and Federico García Lorca at the Residencia de Estudiantes in Madrid.\n- Masterpieces & Subversive Aesthetics:\n  - **«Un perro andaluz» (Un Chien Andalou - 1929 - with Dalí)**: The iconic surrealist opening slicing an eye with a razor blade across the moon, destroying bourgeois linear narrative logic.\n  - **«Viridiana» (1961)**: The **only Spanish film to win the Palme d'Or at the Cannes Film Festival**; infamous for the beggars' banquet tableau reenacting Leonardo da Vinci's *Last Supper* to Handel's *Messiah*, condemned by the Vatican and banned by Franco's dictatorship.\n  - **«El discreto encanto de la burguesía» (1972)**: Won the Academy Award for Best Foreign Language Film.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Luis Buñuel dinamitó el conformismo burgués con el ojo cortado de «Un perro andaluz» y la transgresión magistral de «Viridiana», Palma de Oro en Cannes.",
          "reading": "Lwees Boo-nwel dee-na-mee-to el kon-for-mees-mo...",
          "translation": "Luis Buñuel detonated bourgeois conformism with the sliced eye of \"Un Chien Andalou\" and the masterly transgression of \"Viridiana,\" Palme d'Or at Cannes."
        }
      ],
      "mnemonics": [
        "Luis Buñuel (Father of Cinematic Surrealism)! Un perro andaluz 1929 (with Dalí)! Viridiana (Palma de Oro en Cannes 1961)! El discreto encanto de la burguesía!"
      ],
      "culturalNotes": [
        "When *Viridiana* won the Palme d'Or in Cannes in 1961, Franco's Director General of Cinema was immediately fired upon returning to Madrid for having allowed the film to represent Spain."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish surrealist filmmaker directed Un Chien Andalou with Dalí and won the Palme d'Or at Cannes for Viridiana in 1961?",
          "options": [
            "Pedro Almodóvar (121.1)",
            "Carlos Saura (121.2)",
            "Alejandro Amenábar (121.3)",
            "Luis Buñuel (121.4)"
          ],
          "answerIndex": 3,
          "explanation": "Luis Buñuel."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Leonardo da Vinci Renaissance masterpiece was famously reenacted by impoverished beggars in Buñuel's banned film *Viridiana*?",
          "options": [
            "La Mona Lisa (121.1)",
            "La Última Cena (The Last Supper) (121.2)",
            "El Hombre de Vitruvio (121.3)",
            "La Anunciación (121.4)"
          ],
          "answerIndex": 1,
          "explanation": "La Última Cena (The Last Supper)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Buñuel utilized dream imagery, provocative satire, and anti-clerical irony to strip society of its hypocritical moral pretenses.\"",
          "options": [
            "Buñuel utilizó la imaginería onírica, la sátira provocadora y la ironía anticlerical para despojar a la sociedad de sus hipócritas pretensiones morales.",
            "Buñuel dirigió únicamente comedias musicales ligeras.",
            "Viridiana fue aprobada con entusiasmo por el Vaticano.",
            "Un perro andaluz es un documental sobre razas caninas."
          ],
          "answerIndex": 0,
          "explanation": "Accurate cinema analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious French film festival awarded Buñuel the Palme d'Or in 1961 for *Viridiana*?",
          "options": [
            "Festival de San Sebastián",
            "Festival de Venecia",
            "Berlinale",
            "Festival de Cannes (Palma de Oro)"
          ],
          "answerIndex": 3,
          "explanation": "Festival de Cannes.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Surrealist Cinema & Subversive Vision"
  },
  "es-u25-l2": {
    "id": "es-u25-l2",
    "unit": "es-u25",
    "level": "C1",
    "objective": "The Colors of Melodrama & Post-Franco Freedom: Pedro Almodóvar (Pedro Almodóvar - La Movida Madrileña, Todo sobre mi madre - Oscar 1999, Hable con ella - Oscar al mejor guion original 2002, Carmen Maura, Penélope Cruz, estética pop y colores saturados).",
    "presentation": {
      "explanation": "Pedro Almodóvar (1949–present - Calzada de Calatrava & Madrid) and modern Spanish auteur cinema:\n- **Pedro Almodóvar Caballero**:\n  - Born in La Mancha; emerged during the hedonistic cultural explosion of **La Movida Madrileña** following Franco's death;\n  - Redefined world melodrama, gender fluidity, motherhood, and passion with intense saturated primary colors (especially Almodóvar red).\n- Academy Award (Oscar) Triumphs:\n  - **«Todo sobre mi madre» (All About My Mother - 1999)**: Won the **Oscar for Best Foreign Language Film**; a moving tribute to actresses, mothers, and transgender solidarity.\n  - **«Hable con ella» (Talk to Her - 2002)**: Won the **Oscar for Best Original Screenplay** and BAFTA, exploring loneliness, dance, and comatose love (featuring Caetano Veloso singing *Cucurrucucú paloma*).\n- Iconic Muses: Carmen Maura, **Penélope Cruz** (*Volver* 2006, *Madres paralelas*), and Antonio Banderas (*Dolor y gloria* 2019).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Pedro Almodóvar revolucionó el cine mundial con el estallido cromático de La Movida y la maestría dramática de «Todo sobre mi madre» y «Hable con ella».",
          "reading": "Pe-dro Al-mo-do-var re-vo-loo-syo-no...",
          "translation": "Pedro Almodóvar revolutionized world cinema with the chromatic explosion of La Movida and the dramatic mastery of \"All About My Mother\" and \"Talk to Her.\""
        }
      ],
      "mnemonics": [
        "Pedro Almodóvar (La Movida Madrileña & Saturated Red Palette)! Todo sobre mi madre (Oscar 1999)! Hable con ella (Oscar Best Screenplay 2002)! Penélope Cruz & Volver!"
      ],
      "culturalNotes": [
        "In 2006, the entire female ensemble of Almodóvar's *Volver* (including Penélope Cruz and Carmen Maura) was collectively awarded the Best Actress Award at the Cannes Film Festival."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish director emerged during La Movida Madrileña and won Academy Awards for \"Todo sobre mi madre\" and \"Hable con ella\"?",
          "options": [
            "Pedro Almodóvar (122.1)",
            "Guillermo del Toro (122.2)",
            "Víctor Erice (122.3)",
            "Alejandro Amenábar (122.4)"
          ],
          "answerIndex": 0,
          "explanation": "Pedro Almodóvar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "For which masterwork film did Pedro Almodóvar win the Academy Award (Oscar) for Best Original Screenplay in 2002?",
          "options": [
            "«Hable con ella» (Talk to Her) (122.1)",
            "«Mujeres al borde de un ataque de nervios» (122.2)",
            "«Átame» (122.3)",
            "«La piel que habito» (122.4)"
          ],
          "answerIndex": 0,
          "explanation": "«Hable con ella»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Almodóvar's vibrant visual style combines saturated primary color palettes, emotional camp aesthetic, and compassionate tributes to resilient women.\"",
          "options": [
            "Almodóvar filma exclusivamente en blanco y negro sin sonido.",
            "Todo sobre mi madre es un documental sobre arquitectura.",
            "Hable con ella fue filmada en inglés en Hollywood.",
            "El vibrante estilo visual de Almodóvar combina paletas de colores primarios saturados, estética camp emocional y homenajes compasivos a mujeres resilientes."
          ],
          "answerIndex": 3,
          "explanation": "Accurate film analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Spanish actress starred in Almodóvar's masterpieces *Volver*, *Madres paralelas*, and *Todo sobre mi madre*?",
          "options": [
            "Victoria Abril",
            "Rossy de Palma",
            "Penélope Cruz",
            "Marisa Paredes"
          ],
          "answerIndex": 2,
          "explanation": "Penélope Cruz.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Colors of Melodrama & Post-Franco Freedom"
  },
  "es-u25-l3": {
    "id": "es-u25-l3",
    "unit": "es-u25",
    "level": "C1",
    "objective": "Poetic Realism & Childhood Memory: Víctor Erice and The Spirit of the Beehive (Víctor Erice - El espíritu de la colmena 1973 - Concha de Oro en San Sebastián, Ana Torrent, Frankenstein y el silencio de la posguerra, El sur, El sol del membrillo).",
    "presentation": {
      "explanation": "Víctor Erice (1940–present - Karrantza, Biscay) and the poetic summit of contemplative cinema:\n- **Víctor Erice**:\n  - The ascetic poet of Spanish cinema; known for rare, pristine cinematic masterworks of light, painting, and childhood perception.\n- Masterpieces:\n  - **«El espíritu de la colmena» (The Spirit of the Beehive - 1973 - Concha de Oro at San Sebastián Film Festival)**:\n    - Regarded by critics as the greatest film in Spanish history;\n    - Set in a remote Castilian village in 1940 after the Civil War; 6-year-old Ana (played by **Ana Torrent**) watches James Whale's 1931 *Frankenstein* in a traveling cinema, embarking on an innocent search for the \"spirit\" of the monster, encountering a wounded Republican soldier hiding in an abandoned sheep barn;\n    - Uses amber honeycomb light and profound silence to express the suffocating trauma of Francoist postwar Spain without overt political dialogue.\n  - **«El sol del membrillo» (Dream of Light - 1992)**: Capturing painter Antonio López painting a quince tree, winning the Jury Prize at Cannes.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "«El espíritu de la colmena» de Víctor Erice capturó el silencio desgarrador de la posguerra española a través de los ojos inocentes de Ana Torrent y la luz ámbar de la colmena.",
          "reading": "El es-pee-ree-too de la kol-me-na de Veek-tor E-ree-se...",
          "translation": "Víctor Erice's \"The Spirit of the Beehive\" captured the heartbreaking silence of postwar Spain through the innocent eyes of Ana Torrent and the amber light of the beehive."
        }
      ],
      "mnemonics": [
        "Víctor Erice (The Spirit of the Beehive 1973 Concha de Oro)! Ana Torrent & Frankenstein! Amber honeycomb light! El sol del membrillo!"
      ],
      "culturalNotes": [
        "Guillermo del Toro has repeatedly cited *The Spirit of the Beehive* as the single most important cinematic influence behind *Pan's Labyrinth* (*El laberinto del fauno*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish master filmmaker directed the 1973 cinematic masterpiece \"El espíritu de la colmena\" (The Spirit of the Beehive)?",
          "options": [
            "Víctor Erice (123.1)",
            "Carlos Saura (123.2)",
            "Luis García Berlanga (123.3)",
            "Fernando Trueba (123.4)"
          ],
          "answerIndex": 0,
          "explanation": "Víctor Erice."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which classic 1931 Hollywood monster film, shown in a village travelling cinema, sparks young Ana's imaginative search in *The Spirit of the Beehive*?",
          "options": [
            "«Frankenstein» (James Whale 1931) (123.1)",
            "«King Kong» (123.2)",
            "«Drácula» (123.3)",
            "«El hombre lobo» (123.4)"
          ],
          "answerIndex": 0,
          "explanation": "«Frankenstein» (James Whale 1931)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Erice's cinematography bathes rural Castilian interiors in warm amber honeyed light, transforming everyday household spaces into realms of mythical wonder.\"",
          "options": [
            "El espíritu de la colmena es una película de ciencia ficción espacial.",
            "Víctor Erice ha dirigido más de cien películas al año.",
            "La cinematografía de Erice baña los interiores rurales castellanos en una cálida luz ámbar de miel, transformando los espacios cotidianos en reinos de asombro mítico.",
            "Ana Torrent era una actriz francesa de noventa años."
          ],
          "answerIndex": 2,
          "explanation": "Accurate cinematography analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious top prize was awarded to *El espíritu de la colmena* at the San Sebastián International Film Festival in 1973?",
          "options": [
            "El León de Oro",
            "La Concha de Oro (Golden Shell)",
            "La Palma de Oro",
            "El Oso de Oro"
          ],
          "answerIndex": 1,
          "explanation": "La Concha de Oro.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Poetic Realism & Childhood Memory"
  },
  "es-u25-l4": {
    "id": "es-u25-l4",
    "unit": "es-u25",
    "level": "C2",
    "objective": "Flamenco Cinematography & Passion: Carlos Saura (Carlos Saura - Cría cuervos 1976 con «Porque te vas», trilogía flamenca con Antonio Gades - Bodas de sangre, Carmen, El amor brujo, Goya en Burdeos, Vittorio Storaro).",
    "presentation": {
      "explanation": "Carlos Saura (1932–2023 - Huesca & Madrid) and the fusion of cinema, flamenco dance, and historical memory:\n- **Carlos Saura Atarés**:\n  - Winner of the Silver Bear at Berlin, Grand Prix at Cannes, and European Film Academy Lifetime Achievement Award.\n- Masterpieces:\n  - **«Cría cuervos...» (1976 - Special Jury Prize at Cannes)**: Filmed during the dying months of Franco's regime; starring Ana Torrent and Geraldine Chaplin; featuring the iconic song **«Porque te vas»** by Jeanette, portraying the psychological isolation and dark fantasies of childhood.\n  - **The Flamenco Dance Triad (with dancer/choreographer Antonio Gades)**:\n    - **«Bodas de sangre» (Blood Wedding - 1981 - Lorca)**, **«Carmen» (1983 - BAFTA Award)**, and **«El amor brujo» (1986)**;\n    - Stripping away elaborate realistic film sets, staging dance in minimalist sunlit rehearsal studios with mirrors, letting the pure physical rhythm of flamenco heels (*taconeo*) and clapping (*palmas*) drive the cinematic narrative;\n  - Collaborated with 3-time Oscar-winning cinematographer **Vittorio Storaro** on *Flamenco* (1995) and *Goya en Burdeos*.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Carlos Saura unió el cine y la danza flamenca con Antonio Gades en «Carmen» y capturó la transición española con la inolvidable mirada de «Cría cuervos».",
          "reading": "Kar-los Sow-ra oo-nyo el see-ne ee la dan-sa...",
          "translation": "Carlos Saura united cinema and flamenco dance with Antonio Gades in \"Carmen\" and captured the Spanish transition with the unforgettable gaze of \"Cria cuervos.\""
        }
      ],
      "mnemonics": [
        "Carlos Saura (Cría cuervos 1976 & \"Porque te vas\")! Flamenco Triad with Antonio Gades (Bodas de sangre & Carmen)! Vittorio Storaro cinematography!"
      ],
      "culturalNotes": [
        "The phrase *«Cría cuervos y te sacarán los ojos»* (Raise ravens and they will peck out your eyes) is an ancient Spanish proverb warning of ingratitude."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish director created the iconic film \"Cría cuervos\" (1976) and the celebrated Flamenco dance trilogy with Antonio Gades?",
          "options": [
            "Álex de la Iglesia (124.1)",
            "Pedro Almodóvar (124.2)",
            "Carlos Saura (124.3)",
            "Luis Buñuel (124.4)"
          ],
          "answerIndex": 2,
          "explanation": "Carlos Saura."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which 1974 pop song by Jeanette became the haunting musical theme of Carlos Saura's film *Cría cuervos*?",
          "options": [
            "«Macarena» (124.1)",
            "«Porque te vas» (124.2)",
            "«Eres tú» (124.3)",
            "«Bésame mucho» (124.4)"
          ],
          "answerIndex": 1,
          "explanation": "«Porque te vas»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Saura's musical trilogy staged flamenco rehearsals in mirrors and clean rehearsal spaces, turning the rhythmic footwork into visceral cinematic drama.\"",
          "options": [
            "Cría cuervos fue filmada en inglés en Tokio.",
            "La trilogía musical de Saura escenificó ensayos de flamenco entre espejos y salas limpias, convirtiendo el zapateado rítmico en drama cinematográfico visceral.",
            "Antonio Gades era un astronauta español.",
            "Carlos Saura dirigía películas de dibujos animados infantiles."
          ],
          "answerIndex": 1,
          "explanation": "Accurate dance cinema analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Federico García Lorca tragedy was adapted by Carlos Saura and Antonio Gades in their 1981 minimalist flamenco film?",
          "options": [
            "«Bodas de sangre» (Blood Wedding)",
            "«Yerma»",
            "«Doña Rosita la soltera»",
            "«La casa de Bernarda Alba»"
          ],
          "answerIndex": 0,
          "explanation": "«Bodas de sangre».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Flamenco Cinematography & Passion"
  },
  "es-u25-l5": {
    "id": "es-u25-l5",
    "unit": "es-u25",
    "level": "C2",
    "objective": "C2 synthesis on Spanish Dark Comedy & Black Humour: Luis García Berlanga (Luis García Berlanga - esperpento cinematográfico, Bienvenido Mister Marshall 1953, El verdugo 1963, plano secuencia coral, Premios Goya).",
    "presentation": {
      "explanation": "Luis García Berlanga (1921–2010 - Valencia & Madrid) and Spanish satirical black comedy (*esperpento cinematográfico*):\n- **Luis García Berlanga (with screenwriter Rafael Azcona)**:\n  - The supreme master of Spanish social satire and dark comedy;\n  - Developed the **Plano Secuencia Coral (Choral Long Take)**: Choreographing dozens of overlapping talking characters within a single continuous roving camera take without cuts.\n- Masterpieces:\n  - **«¡Bienvenido, Mister Marshall!» (1953 - International Prize at Cannes)**: Satirical comedy of a Castilian village disguising itself as stereotypical Andalusia with flamenco costumes to attract American Marshall Plan aid—only for the American motorcade to drive past at full speed without stopping.\n  - **«El verdugo» (The Executioner - 1963 - FIPRESCI Prize at Venice)**: Voted among the greatest Spanish comedies; a young undertaker marries an executioner's daughter and is gradually forced by economic necessity to accept the executioner's post, dragged weeping to execute a prisoner at the garrote vil in a chilling critique of capital punishment.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Berlanga y Rafael Azcona retrataron el absurdo y la picaresca española en planos secuencia corales magistrales como «¡Bienvenido, Mister Marshall!» y «El verdugo».",
          "reading": "Ber-lan-ga ee Ra-fa-el Az-ko-na re-tra-ta-ron...",
          "translation": "Berlanga and Rafael Azcona portrayed Spanish absurdity and picaresque survival in masterful choral long takes like \"Welcome Mr. Marshall!\" and \"The Executioner.\""
        }
      ],
      "mnemonics": [
        "Luis García Berlanga & Rafael Azcona! ¡Bienvenido, Mister Marshall! 1953! El verdugo 1963 (The Executioner)! Plano secuencia coral (Choral long takes)!"
      ],
      "culturalNotes": [
        "In Spain, when a situation descends into farcical bureaucratic absurdity with multiple people shouting over each other, it is colloquially described as *«Una situación berlanguiana»* (A Berlangian situation)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish master of dark satire and choral long takes directed \"¡Bienvenido, Mister Marshall!\" (1953) and \"El verdugo\" (1963)?",
          "options": [
            "Luis García Berlanga (125.1)",
            "Víctor Erice (125.2)",
            "Mario Camus (125.3)",
            "Pedro Almodóvar (125.4)"
          ],
          "answerIndex": 0,
          "explanation": "Luis García Berlanga."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What technical camera signature defines Berlanga's directorial style, capturing dozens of overlapping conversational characters in continuous movement?",
          "options": [
            "El plano detalle estático (125.1)",
            "La animación stop-motion (125.2)",
            "La cámara lenta extrema (125.3)",
            "El plano secuencia coral (Continuous choral long take) (125.4)"
          ],
          "answerIndex": 3,
          "explanation": "El plano secuencia coral."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The closing sequence of The Executioner, where the reluctant protagonist is dragged across the stark white courtyard toward the execution chamber, stands as a devastating critique of capital punishment.\"",
          "options": [
            "La secuencia final de El verdugo, donde el reacio protagonista es arrastrado por el austero patio blanco hacia la sala de ejecuciones, se erige como una demoledora crítica a la pena de muerte.",
            "El verdugo fue filmada en Hollywood.",
            "¡Bienvenido, Mister Marshall! es una película sobre la guerra de Vietnam.",
            "Berlanga rechazaba el uso del humor negro."
          ],
          "answerIndex": 0,
          "explanation": "Accurate satirical cinema translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Spanish screenwriter co-authored Berlanga's greatest films, including *Plácido* and *El verdugo*?",
          "options": [
            "Fernando Fernán Gómez",
            "Eduardo Mendoza",
            "Jorge Semprún",
            "Rafael Azcona"
          ],
          "answerIndex": 3,
          "explanation": "Rafael Azcona.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Spanish Dark Comedy & Black Humour"
  },
  "es-u26-l1": {
    "id": "es-u26-l1",
    "unit": "es-u26",
    "level": "C1",
    "objective": "Siglo de Oro Golden Age Dramaturgy & Free Will: Calderón de la Barca (Pedro Calderón de la Barca - La vida es sueño 1635, soliloquio de Segismundo «¿Qué es la vida? Un frenesí», libre albedrío contra el destino, El gran teatro del mundo, autos sacramentales).",
    "presentation": {
      "explanation": "Pedro Calderón de la Barca (1600–1681 - Madrid) and the pinnacle of Baroque philosophical drama:\n- **Pedro Calderón de la Barca**:\n  - The supreme philosophical dramatist of the Spanish Golden Age (*Siglo de Oro*); Knight of the Order of Santiago.\n- The Masterpiece: **«La vida es sueño» (Life Is a Dream - 1635)**:\n  - Set in mythical Poland; Prince **Segismundo** is locked from birth in a mountain tower in animal skins by King Basilio due to an astrological prophecy predicting he will become a tyrant;\n  - When drugged and brought to court for a test, Segismundo reacts violently, is returned to his tower, and believes his day of royalty was merely an illusion or dream;\n  - The Immortal Soliloquy: **«¿Qué es la vida? Un frenesí. / ¿Qué es la vida? Una ilusión, / una sombra, una ficción, / y el mayor bien es pequeño: / que toda la vida es sueño, / y los sueños, sueños son.»**;\n  - Profound philosophical themes: Free will (*libre albedrío*) triumphing over astrological fatalism; the moral duty to do good even in dreams (*\"Hacer bien nunca se pierde, ni aun en sueños\"*).\n- **«El gran teatro del mundo» (The Great Theater of the World - 1655)**: Masterpiece of the *Auto Sacramental* genre depicting human life as a theatrical stage role assigned by God.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Calderón de la Barca consagró el Siglo de Oro con el monólogo de Segismundo en «La vida es sueño», demostrando que el libre albedrío trasciende la ilusión terrenal.",
          "reading": "Kal-de-ron de la Bar-ka kon-sa-gro el Seeg-lo de O-ro...",
          "translation": "Calderon de la Barca established the Golden Age with Segismundo's monologue in \"Life Is a Dream,\" proving that free will transcends earthly illusion."
        }
      ],
      "mnemonics": [
        "Calderón de la Barca (La vida es sueño 1635 & Segismundo)! «¿Qué es la vida? Un frenesí... y los sueños, sueños son»! Libre albedrío! El gran teatro del mundo!"
      ],
      "culturalNotes": [
        "Calderón's *La vida es sueño* was written during the height of the European Scientific Revolution, mirroring René Descartes' contemporaneous philosophical doubt (*Cogito, ergo sum*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish Golden Age dramatist wrote \"La vida es sueño\" (Life Is a Dream) in 1635 featuring the captive prince Segismundo?",
          "options": [
            "Lope de Vega (126.1)",
            "Tirso de Molina (126.2)",
            "Miguel de Cervantes (126.3)",
            "Pedro Calderón de la Barca (126.4)"
          ],
          "answerIndex": 3,
          "explanation": "Pedro Calderón de la Barca."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What fundamental philosophical battle is resolved in *La vida es sueño*, proving that human reason can overcome predicted celestial fate?",
          "options": [
            "La riqueza material (126.1)",
            "El libre albedrío frente al determinismo (Free will vs. fatalism) (126.2)",
            "La conquista militar (126.3)",
            "La gloria mundana (126.4)"
          ],
          "answerIndex": 1,
          "explanation": "El libre albedrío frente al determinismo."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Segismundo's existential soliloquy questions the boundary between waking reality and dreams, concluding that doing good retains eternal value in all realms.\"",
          "options": [
            "Segismundo era un rey pacífico de Egipto.",
            "La vida es sueño es un manual de astronomía náutica.",
            "Calderón de la Barca era un general francés.",
            "El soliloquio existencial de Segismundo cuestiona la frontera entre la realidad despierta y el sueño, concluyendo que obrar bien retiene un valor eterno en todos los reinos."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Baroque drama translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What dramatic genre of one-act religious allegories was perfected by Calderón in works like *El gran teatro del mundo*?",
          "options": [
            "El sainete",
            "El entremés",
            "El auto sacramental",
            "La zarzuela"
          ],
          "answerIndex": 2,
          "explanation": "El auto sacramental.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Siglo de Oro Golden Age Dramaturgy & Free Will"
  },
  "es-u26-l2": {
    "id": "es-u26-l2",
    "unit": "es-u26",
    "level": "C1",
    "objective": "The Phoenix of Wits & Popular Comedy: Lope de Vega and Fuenteovejuna (Lope de Vega - «Fénix de los Ingenios», Arte nuevo de hacer comedias 1609, ruptura de las tres unidades aristotélicas, Fuenteovejuna - «¿Quién mató al comendador? ¡Fuenteovejuna, señor!», Laurencia y el honor villano).",
    "presentation": {
      "explanation": "Félix Lope de Vega y Carpio (1562–1635 - Madrid) and the invention of Spanish popular theatre:\n- **Lope de Vega (\"El Fénix de los Ingenios\" / The Phoenix of Wits - Miguel de Cervantes called him \"El Monstruo de la Naturaleza\")**:\n  - Prolific genius who authored over 1,500 plays in verse (*comedias*), transforming theatre from aristocratic Latin recitation into mass public entertainment in the open-air courtyards (*Corrales de comedias*).\n- The Theoretical Manifesto: **«Arte nuevo de hacer comedias en este tiempo» (1609)**:\n  - Audaciously rejected Aristotle's classical three unities (Time, Place, Action);\n  - Combined tragic high drama with popular low comedy (*tragicomedia*); introduced the stock comic character of the witty servant (*El Gracioso*); and declared that the taste of the paying public is the ultimate law of the stage (*\"Porque, como las paga el vulgo, es justo / hablarle en necio para darle gusto\"*).\n- Masterpiece: **«Fuenteovejuna» (1619)**:\n  - Based on a 1476 historical revolt in Andalusia; an entire village rebels against the tyrannical Commander Fernán Gómez, executing him after he assaults peasant bride **Laurencia**;\n  - When tortured on the rack by royal investigators, every villager including children replies with unanimous collective solidarity: **«—¿Quién mató al Comendador? / —Fuenteovejuna, señor. / —¿Quién es Fuenteovejuna? / —Todo el pueblo a una.»**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Lope de Vega revolucionó el teatro universal con el «Arte nuevo» y consagró el honor popular colectivo en «Fuenteovejuna»: «¡Todo el pueblo a una!».",
          "reading": "Lo-pe de Ve-ga re-vo-loo-syo-no el te-a-tro...",
          "translation": "Lope de Vega revolutionized world theater with his \"New Art\" and immortalized collective popular honor in \"Fuenteovejuna\": \"All the village as one!\""
        }
      ],
      "mnemonics": [
        "Lope de Vega (Fénix de los Ingenios & Monstruo de la Naturaleza)! Arte nuevo de hacer comedias 1609! Fuenteovejuna 1619 (Laurencia & «¡Todo el pueblo a una!»)! Corrales de comedias!"
      ],
      "culturalNotes": [
        "The Corral de Comedias in Almagro (La Mancha), built in 1628, is the only fully preserved, active Golden Age open-air courtyard theatre in the world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which legendary playwright was called \"El Fénix de los Ingenios\" and authored the revolutionary collective drama \"Fuenteovejuna\"?",
          "options": [
            "Lope de Vega (127.1)",
            "Tirso de Molina (127.2)",
            "Francisco de Quevedo (127.3)",
            "Calderón de la Barca (127.4)"
          ],
          "answerIndex": 0,
          "explanation": "Lope de Vega."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What unanimous collective answer is given by all villagers under torture in Lope de Vega's *Fuenteovejuna* when asked who killed the tyrant?",
          "options": [
            "«—Fuenteovejuna, señor. —Todo el pueblo a una.» (127.1)",
            "«—El alcalde de la villa.» (127.2)",
            "«—Nadie lo sabe.» (127.3)",
            "«—Los soldados reales.» (127.4)"
          ],
          "answerIndex": 0,
          "explanation": "«—Fuenteovejuna, señor. —Todo el pueblo a una.»"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"In his 1609 treatise, Lope de Vega shattered classical Aristotelian unities, pioneering tragicomedy and declaring that audience resonance overrides ancient dogmatic rules.\"",
          "options": [
            "Lope de Vega solo escribió poemas en latín clásico.",
            "Fuenteovejuna es una comedia romántica ambientada en París.",
            "En su tratado de 1609, Lope de Vega rompió las unidades aristotélicas clásicas, siendo pionero de la tragicomedia y declarando que la resonancia del público prevalece sobre las antiguas reglas dogmáticas.",
            "El gracioso era el rey de España."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Lope de Vega dramaturgy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic open-air courtyard architecture served as the public venue for Spanish Golden Age theatrical performances?",
          "options": [
            "Los anfiteatros romanos",
            "Los corrales de comedias",
            "Las plazas de toros",
            "Las catedrales góticas"
          ],
          "answerIndex": 1,
          "explanation": "Los corrales de comedias.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Phoenix of Wits & Popular Comedy"
  },
  "es-u26-l3": {
    "id": "es-u26-l3",
    "unit": "es-u26",
    "level": "C1",
    "objective": "The Myth of the Seducer & Sins of Damnation: Tirso de Molina and Don Juan (Tirso de Molina - El burlador de Sevilla y convidado de piedra 1630, el mito universal de Don Juan Tenorio, «¡Tan largo me lo fiáis!», la estatua de Don Gonzalo de Ulloa, José Zorrilla).",
    "presentation": {
      "explanation": "Fray Gabriel Téllez / Tirso de Molina (1579–1648 - Madrid & Almazán) and the universal archetype of Don Juan:\n- **Tirso de Molina**:\n  - Mercedarian friar, theologian, and master playwright; created the most influential mythical archetype in Western dramatic history.\n- The Foundational Masterpiece: **«El burlador de Sevilla y convidado de piedra» (The Trickster of Seville and the Stone Guest - 1630)**:\n  - Introduced **Don Juan Tenorio**, an aristocratic, hedonistic trickster who seduces and dishonors women across Europe (Doña Isabela, Tisbea, Doña Ana de Ulloa, Aminta), driven not by romantic love but by the thrill of social disruption and vanity;\n  - Don Juan's Tragic Arrogant Refrain: **«¡Tan largo me lo fiáis!»** (What a long credit you give me! / I have plenty of time to repent before judgment!);\n  - The Climax of Supernatural Retribution: Don Juan mocks the tomb of the Commander Don Gonzalo de Ulloa whom he murdered, inviting the stone funeral statue to dinner; the **Stone Guest** (*El Convidado de Piedra*) arrives, grips Don Juan's hand in an icy death grip, and drags him to hell as Don Juan cries for a priest too late (*\"¡Que me quemo! ¡Que me abraso! / ¡Deja que llame a quien me confiese y absuelva!\"* - to which the statue answers: *\"No hay lugar; ya es tarde\"*).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Tirso de Molina inmortalizó el mito universal de Don Juan en «El burlador de Sevilla», donde la soberbia del «¡Tan largo me lo fiáis!» sucumbe ante el convidado de piedra.",
          "reading": "Teer-so de Mo-lee-na een-mor-ta-lee-zo el mee-to...",
          "translation": "Tirso de Molina immortalized the universal myth of Don Juan in \"The Trickster of Seville,\" where the arrogance of \"Plenty of time to repent!\" succumbs before the stone guest."
        }
      ],
      "mnemonics": [
        "Tirso de Molina (El burlador de Sevilla 1630)! Don Juan Tenorio (Universal archetype of the seducer)! «¡Tan largo me lo fiáis!»! El convidado de piedra (Stone Guest drags him to hell)!"
      ],
      "culturalNotes": [
        "Tirso's Spanish Don Juan inspired adaptations across global arts: Molière's *Dom Juan* (1665), Mozart's opera *Don Giovanni* (1787), Lord Byron's *Don Juan* (1819), and José Zorrilla's *Don Juan Tenorio* (1844)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish dramatist created the universal archetype of Don Juan in \"El burlador de Sevilla y convidado de piedra\" (1630)?",
          "options": [
            "Tirso de Molina (128.1)",
            "Lope de Vega (128.2)",
            "Calderón de la Barca (128.3)",
            "José de Espronceda (128.4)"
          ],
          "answerIndex": 0,
          "explanation": "Tirso de Molina."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What arrogant motto does Don Juan repeatedly boast whenever warned of divine judgment and impending death?",
          "options": [
            "«¡Tan largo me lo fiáis!» (What a long credit you give me / I have plenty of time) (128.1)",
            "«Dios perdona siempre» (128.2)",
            "«Carpe diem» (128.3)",
            "«El honor es primero» (128.4)"
          ],
          "answerIndex": 0,
          "explanation": "«¡Tan largo me lo fiáis!»"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Tirso de Molina used the supernatural stone statue to deliver theological judgment against Don Juan's arrogant assumption that repentance can be endlessly delayed.\"",
          "options": [
            "El burlador de Sevilla es un libro de cocina sevillana.",
            "Tirso de Molina utilizó la estatua de piedra sobrenatural para dictar un juicio teológico contra la soberbia presunción de Don Juan de que el arrepentimiento puede retrasarse indefinidamente.",
            "Don Juan Tenorio era un virtuoso monje budista.",
            "Tirso de Molina fue ejecutado por la Inquisición en 1500."
          ],
          "answerIndex": 1,
          "explanation": "Accurate theological drama translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which 19th-century Spanish Romantic playwright wrote the famous 1844 version *Don Juan Tenorio*, traditionally performed every year across Spain on All Saints' Day?",
          "options": [
            "José Zorrilla",
            "Gustavo Adolfo Bécquer",
            "Mariano José de Larra",
            "Duque de Rivas"
          ],
          "answerIndex": 0,
          "explanation": "José Zorrilla.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Myth of the Seducer & Sins of Damnation"
  },
  "es-u26-l4": {
    "id": "es-u26-l4",
    "unit": "es-u26",
    "level": "C2",
    "objective": "Tragic Grotesque & The Bohemian Mirrors: Ramón María del Valle-Inclán and Esperpento (Ramón María del Valle-Inclán - Luces de bohemia 1924, el Callejón del Gato y los espejos cóncavos, Max Estrella y Don Latino de Híspalis, la deformación sistemática de la realidad española).",
    "presentation": {
      "explanation": "Ramón María del Valle-Inclán (1866–1936 - Vilanova de Arousa & Santiago de Compostela) and the invention of the *Esperpento*:\n- **Ramón María del Valle-Inclán**:\n  - The visionary avant-garde master of the Generation of '98 (*Generación del 98*); revolutionized modern theater decades ahead of European Theatre of the Absurd.\n- The Theory & Masterpiece: **«Luces de bohemia» (Bohemian Lights - 1924)**:\n  - Chronicling the final nocturnal pilgrimage through the corrupt, wretched streets, taverns, and prison cells of Madrid by blind modernist poet **Max Estrella** and his parasitic friend Don Latino de Híspalis before Max dies frozen on his own doorstep;\n  - **The Invention of the Esperpento (Scene 12 Monologue)**:\n    - Max Estrella explains in the *Callejón del Gato* (Alley of the Cat in Madrid, famous for concave and convex funhouse mirrors) that classical heroism in tragic Spain has become a grotesque absurdity:\n    - **«El esperpentismo lo ha inventado Goya. Los héroes clásicos han ido a pasearse en el Callejón del Gato. El sentido trágico de la vida española sólo puede darse con una estética sistemáticamente deformada... España es una deformación grotesca de la civilización europea.»**;\n  - Merging high literary verse with vulgar street slang (*cheli*), animalistic descriptions, and puppet-like grotesque distortion.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Valle-Inclán inventó el esperpento en «Luces de bohemia», deformando la tragedia clásica ante los espejos cóncavos del Callejón del Gato para retratar la España grotesca.",
          "reading": "Va-lye Een-klan een-ven-to el es-per-pen-to...",
          "translation": "Valle-Inclán invented the esperpento in \"Bohemian Lights,\" deforming classical tragedy before the concave mirrors of Alley of the Cat to portray a grotesque Spain."
        }
      ],
      "mnemonics": [
        "Valle-Inclán (Luces de bohemia 1924 & Generation of 98)! El Esperpento (Goya's grotesque vision)! Callejón del Gato (Concave mirror deformation)! Max Estrella & Don Latino!"
      ],
      "culturalNotes": [
        "The *Callejón del Gato* (Calle de Álvarez Gato) in central Madrid still has replicas of the famous concave and convex mirrors embedded in the facade where tourists and writers gather today."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which avant-garde Spanish dramatist invented the dramatic genre of \"Esperpento\" in his masterpiece \"Luces de bohemia\" (1924)?",
          "options": [
            "Antonio Buero Vallejo (129.1)",
            "Jacinto Benavente (129.2)",
            "Ramón María del Valle-Inclán (129.3)",
            "Federico García Lorca (129.4)"
          ],
          "answerIndex": 2,
          "explanation": "Ramón María del Valle-Inclán."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous alley in Madrid, featuring distorting concave and convex mirrors, provides the aesthetic metaphor for Valle-Inclán's Esperpento?",
          "options": [
            "La Cava Baja (129.1)",
            "El Callejón del Gato (Calle de Álvarez Gato) (129.2)",
            "La Gran Vía (129.3)",
            "La Puerta del Sol (129.4)"
          ],
          "answerIndex": 1,
          "explanation": "El Callejón del Gato."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The aesthetic of the Esperpento systematically distorts classical tragedy through funhouse mirrors to expose the grotesque political and social decay of contemporary Spain.\"",
          "options": [
            "La estética del esperpento deforma sistemáticamente la tragedia clásica a través de espejos deformantes para exponer la decadencia política y social grotesca de la España contemporánea.",
            "Valle-Inclán rechazaba las obras de Goya.",
            "Max Estrella era un banquero adinerado de Wall Street.",
            "Luces de bohemia es una ópera alegre sobre campesinos suizos."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Esperpento dramatic analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who is the blind, impoverished bohemian poet protagonist who wanders through nighttime Madrid in *Luces de bohemia*?",
          "options": [
            "Zaratustra",
            "Don Latino de Híspalis",
            "Rubén Darío",
            "Max Estrella"
          ],
          "answerIndex": 3,
          "explanation": "Max Estrella.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Tragic Grotesque & The Bohemian Mirrors"
  },
  "es-u26-l5": {
    "id": "es-u26-l5",
    "unit": "es-u26",
    "level": "C2",
    "objective": "C2 synthesis on Post-War Moral Courage & The Possibilism Debate: Antonio Buero Vallejo and Historia de una escalera (Antonio Buero Vallejo - Premio Cervantes, Historia de una escalera 1949, El tragaluz, La fundación - la celda de la prisión y el engaño de la mente, debate del posibilismo frente a Alfonso Sastre).",
    "presentation": {
      "explanation": "Antonio Buero Vallejo (1916–2000 - Guadalajara & Madrid) and moral theatre under Francoism:\n- **Antonio Buero Vallejo**:\n  - Sentenced to death (commuted to 6 years in military prison) for defending the Republic; first playwright to win the **Premio Miguel de Cervantes (1986)**;\n- Landmark Masterpieces:\n  - **«Historia de una escalera» (Story of a Stairway - 1949 - Premio Lope de Vega)**: Spanning 30 years across 3 generations on the decaying communal staircase of a Madrid tenement building; capturing the economic paralysis, shattered youthful dreams, and cyclical resignation of post-Civil War Spain;\n  - **«La fundación» (The Foundation - 1974)**: Protagonist Tomás believes he is residing in an opulent futuristic scientific research foundation with music and fine food, only for the sensory hallucinations to peel away layer-by-layer, revealing that he and his fellow intellectuals are actually condemned political prisoners in a death-row prison cell;\n  - **The Great Theatrical Debate: Posibilismo vs. Imposibilismo**:\n    - Battle with radical playwright Alfonso Sastre; Buero Vallejo defended **Posibilismo** (writing veiled, multi-layered philosophical allegories that could pass state censorship to directly awaken the consciences of the Spanish public in theaters).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Buero Vallejo transformó el teatro español de posguerra con «Historia de una escalera» y «La fundación», defendiendo el posibilismo ético frente a la censura.",
          "reading": "Bwe-ro Va-lye-kho trans-for-mo el te-a-tro...",
          "translation": "Buero Vallejo transformed postwar Spanish theater with \"Story of a Stairway\" and \"The Foundation,\" defending ethical possibilism against censorship."
        }
      ],
      "mnemonics": [
        "Antonio Buero Vallejo (Premio Cervantes 1986)! Historia de una escalera 1949 (The cyclical tenement stairs)! La fundación (Prison cell hallucination)! El debate del Posibilismo!"
      ],
      "culturalNotes": [
        "Buero Vallejo was a talented painter who shared a prison cell with poet Miguel Hernández after the Civil War, drawing the famous pencil portrait of Hernández that became the poet's iconic memorial image."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish playwright won the Premio Cervantes in 1986 and authored \"Historia de una escalera\" (1949) and \"La fundación\" (1974)?",
          "options": [
            "Antonio Buero Vallejo (130.1)",
            "Alfonso Sastre (130.2)",
            "Federico García Lorca (130.3)",
            "Fernando Arrabal (130.4)"
          ],
          "answerIndex": 0,
          "explanation": "Antonio Buero Vallejo."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the true reality behind the luxurious research facility imagined by protagonist Tomás in Buero Vallejo's *La fundación*?",
          "options": [
            "Un palacio real (130.1)",
            "Un hospital psiquiátrico (130.2)",
            "Un barco en altamar (130.3)",
            "Una celda de condenados a muerte en una prisión (A death-row prison cell) (130.4)"
          ],
          "answerIndex": 3,
          "explanation": "Una celda de condenados a muerte en una prisión."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Buero Vallejo's strategy of possibilism utilized psychological allegories and immersive staging effects to critique totalitarian power while evading Francoist censorship.\"",
          "options": [
            "Buero Vallejo nunca estuvo en prisión.",
            "La fundación es una comedia musical sobre compras en Madrid.",
            "Historia de una escalera es una película de ciencia ficción.",
            "La estrategia del posibilismo de Buero Vallejo utilizó alegorías psicológicas y efectos escénicos inmersivos para criticar el poder totalitario eludiendo la censura franquista."
          ],
          "answerIndex": 3,
          "explanation": "Accurate post-war theater translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What architectural element of a Madrid tenement building serves as the permanent, unchanging witness to 30 years of generational disillusionment in Buero Vallejo's 1949 play?",
          "options": [
            "El ascensor",
            "El ático",
            "La escalera vecinal (The tenement stairway)",
            "El jardín"
          ],
          "answerIndex": 2,
          "explanation": "La escalera vecinal.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Post-War Moral Courage & The Possibilism Debate"
  },
  "es-u27-l1": {
    "id": "es-u27-l1",
    "unit": "es-u27",
    "level": "C1",
    "objective": "The Sovereign of Bel Canto & Pianissimo: Montserrat Caballé (Montserrat Caballé - «La Superba», técnica de fiato y pianissimo inaudito, Norma de Bellini «Casta Diva», Barcelona 1988 con Freddie Mercury, Gran Teatre del Liceu).",
    "presentation": {
      "explanation": "Montserrat Caballé (1933–2018 - Barcelona) and the supreme height of Spanish operatic Bel Canto:\n- **Montserrat Caballé («La Superba»)**:\n  - Renowned globally for the most ethereal, breath-supported floating *pianissimo* in operatic history and her mastery of the Italian Bel Canto repertoire (Donizetti, Bellini, Rossini, Verdi, Puccini).\n- Historic Career Milestones:\n  - **The 1965 Carnegie Hall Sensation**: Stepped in as an unknown substitute for Marilyn Horne in Donizetti's *Lucrezia Borgia*, receiving a thunderous 25-minute standing ovation, hailed overnight by *The New York Times* as a miracle;\n  - **Bellini's «Norma»**: Her rendition of **«Casta Diva»** at the Roman Theatre of Orange in 1974 amidst howling Mistral winds, controlling her breath support (*fiato*) with superhuman stillness;\n  - **«Barcelona» (1987–1988 - with Freddie Mercury)**: The historic crossover rock-opera duet composed by Queen's frontman for the 1992 Barcelona Olympic Games;\n  - Lifelong home: **Gran Teatre del Liceu** on Las Ramblas.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Montserrat Caballé, «La Superba», maravilló al mundo con el pianissimo infinito de «Casta Diva» y el himno olímpico «Barcelona» junto a Freddie Mercury.",
          "reading": "Mont-se-rrat Ka-ba-lye La Soo-per-ba...",
          "translation": "Montserrat Caballe, \"La Superba,\" astonished the world with the infinite pianissimo of \"Casta Diva\" and the Olympic anthem \"Barcelona\" alongside Freddie Mercury."
        }
      ],
      "mnemonics": [
        "Montserrat Caballé (La Superba & Queen of Bel Canto)! Casta Diva (Norma 1974 Orange)! Pianissimo & Fiato breath control! «Barcelona» with Freddie Mercury 1988! Gran Teatre del Liceu!"
      ],
      "culturalNotes": [
        "Freddie Mercury worshipped Caballé as his supreme vocal idol, and when they recorded \"Barcelona\" together, he called it the greatest artistic honor of his life."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Catalan soprano was universally known as \"La Superba\" for her legendary pianissimo in Bellini's \"Norma\" and sang \"Barcelona\" with Freddie Mercury?",
          "options": [
            "Victoria de los Ángeles (131.1)",
            "Teresa Berganza (131.2)",
            "Ainhoa Arteta (131.3)",
            "Montserrat Caballé (131.4)"
          ],
          "answerIndex": 3,
          "explanation": "Montserrat Caballé."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What legendary Bellini operatic aria, invoking the chaste moon goddess, was Caballé's signature Bel Canto masterwork?",
          "options": [
            "«Casta Diva» (Norma) (131.1)",
            "«Vissi d'arte» (131.2)",
            "«Un bel dì, vedremo» (131.3)",
            "«Habanera» (131.4)"
          ],
          "answerIndex": 0,
          "explanation": "«Casta Diva»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Caballé's extraordinary diaphragm breath support allowed her to sustain impossibly delicate pianissimo high notes that floated effortlessly across the largest opera houses.\"",
          "options": [
            "El Gran Teatre del Liceu fue construido en 2015 en Madrid.",
            "Montserrat Caballé era una bailarina de tango argentina.",
            "El extraordinario apoyo diafragmático de Caballé le permitía sostener notas agudas en pianísimo increíblemente delicadas que flotaban sin esfuerzo por los mayores teatros de ópera.",
            "Casta Diva es una canción pop en inglés."
          ],
          "answerIndex": 2,
          "explanation": "Accurate operatic vocal analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic opera house on Las Ramblas in Barcelona was Montserrat Caballé's spiritual home throughout her entire career?",
          "options": [
            "Teatro Real de Madrid",
            "Gran Teatre del Liceu",
            "Palau de les Arts",
            "Teatro de la Zarzuela"
          ],
          "answerIndex": 1,
          "explanation": "Gran Teatre del Liceu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sovereign of Bel Canto & Pianissimo"
  },
  "es-u27-l2": {
    "id": "es-u27-l2",
    "unit": "es-u27",
    "level": "C1",
    "objective": "Dramatic Tenor Royalty & The Three Tenors: Plácido Domingo and José Carreras (Los Tres Tenores - Plácido Domingo, José Carreras y Luciano Pavarotti en las Termas de Caracalla 1990, Otello de Verdi, La Bohème, Operalia y la dirección orquestal).",
    "presentation": {
      "explanation": "Plácido Domingo, José Carreras, and the global operatic revolution of The Three Tenors:\n- **Plácido Domingo (1941–present - Madrid)**:\n  - Dramatic tenor and baritone; performed over 150 different operatic roles on stage (Guinness World Record);\n  - The definitive interpreter of Giuseppe Verdi's grueling dramatic masterpiece **«Otello»**;\n  - General Director of the Washington National Opera and Los Angeles Opera; founded the **Operalia World Opera Competition (1993)** discovering international young vocal talent.\n- **José Carreras (1946–present - Barcelona)**:\n  - Lyric tenor celebrated for his romantic vulnerability in Puccini's *La Bohème* (Rodolfo) and Verdi's *Don Carlo*;\n  - Survived life-threatening leukemia in 1987, founding the José Carreras International Leukaemia Foundation.\n- The Historic Global Phenomenon: **The Three Tenors (Los Tres Tenores - July 7, 1990)**:\n  - Conceived to celebrate Carreras's cancer recovery; Domingo, Carreras, and Luciano Pavarotti performed together at the ancient Roman **Baths of Caracalla (Termas de Caracalla)** on the eve of the 1990 FIFA World Cup final under conductor Zubin Mehta;\n  - Watched live by 800 million spectators; the live album became the best-selling classical recording in world history.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Los Tres Tenores con Plácido Domingo y José Carreras llevaron la ópera a audiencias masivas globales desde las Termas de Caracalla en 1990.",
          "reading": "Los Tres Te-no-res kon Pla-see-do Do-meen-go...",
          "translation": "The Three Tenors, featuring Plácido Domingo and José Carreras, brought opera to massive global audiences from the Baths of Caracalla in 1990."
        }
      ],
      "mnemonics": [
        "Los Tres Tenores 1990 (Plácido Domingo, José Carreras, Luciano Pavarotti)! Baths of Caracalla under Zubin Mehta! Domingo's Otello! Carreras & Leukaemia Foundation! Operalia 1993!"
      ],
      "culturalNotes": [
        "The Three Tenors 1990 Rome concert popularized Puccini's aria *«Nessun dorma»* (from *Turandot*) into a global sporting anthem recognized by billions worldwide."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which two Spanish tenor legends united with Luciano Pavarotti to form \"The Three Tenors\" in Rome in 1990?",
          "options": [
            "Plácido Domingo y José Carreras (132.1)",
            "Enrico Caruso y Beniamino Gigli (132.2)",
            "Rolando Villazón y Juan Diego Flórez (132.3)",
            "Alfredo Kraus y Jaume Aragall (132.4)"
          ],
          "answerIndex": 0,
          "explanation": "Plácido Domingo y José Carreras."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What prestigious international young opera singer competition was founded by Plácido Domingo in 1993 to discover new world-class voices?",
          "options": [
            "Operalia (132.1)",
            "Cardiff Singer of the World (132.2)",
            "Chopin Competition (132.3)",
            "Queen Elisabeth Competition (132.4)"
          ],
          "answerIndex": 0,
          "explanation": "Operalia."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The 1990 Baths of Caracalla concert popularized classical Bel Canto and verismo arias to an unprecedented global audience of hundreds of millions.\"",
          "options": [
            "Los Tres Tenores eran un trío de rock pesado.",
            "El concierto de 1990 en las Termas de Caracalla popularizó las arias del bel canto y verismo clásicos ante una audiencia global sin precedentes de cientos de millones.",
            "Plácido Domingo solo cantaba en zarzuelas para niños.",
            "José Carreras era un pianista mudo."
          ],
          "answerIndex": 1,
          "explanation": "Accurate operatic history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What grueling Verdi dramatic tenor role, portraying the Shakespearean Moor of Venice, was performed over 200 times by Plácido Domingo across the world's top opera houses?",
          "options": [
            "Otello",
            "Manrico (Il Trovatore)",
            "Radamès (Aida)",
            "Don José (Carmen)"
          ],
          "answerIndex": 0,
          "explanation": "Otello.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Dramatic Tenor Royalty & The Three Tenors"
  },
  "es-u27-l3": {
    "id": "es-u27-l3",
    "unit": "es-u27",
    "level": "C1",
    "objective": "The Aristocrat of Bel Canto & Tenor Rigor: Alfredo Kraus (Alfredo Kraus - tenor lírico-ligero de Las Palmas, técnica vocal perfecta, Werther de Massenet «Pourquoi me réveiller», Rigoletto «La donna è mobile», magisterio y pureza estilística).",
    "presentation": {
      "explanation": "Alfredo Kraus Trujillo (1927–1999 - Las Palmas de Gran Canaria) and the gold standard of tenor vocal technique:\n- **Alfredo Kraus**:\n  - Revering pure technique, stylistic fidelity, and vocal longevity above commercial vanity; maintained pristine youthful vocal beauty across a 45-year international stage career until age 70.\n- Masterpieces & Vocal Technique:\n  - **The Lyric-Light Bel Canto Repertoire**: Master of Donizetti (*Lucia di Lammermoor*, *La Fille du régiment*, *L'elisir d'amore*), Bellini (*I Puritani* with its stratospheric high F), and Verdi (*Rigoletto* Duke of Mantua);\n  - **Massenet's «Werther»**: Universally acclaimed as the definitive Werther in opera history, breathing tragic French romantic lyricism into **«Pourquoi me réveiller, ô souffle du printemps?»**;\n  - Strict Vocal Ethics: Refused roles that were too heavy (like *Otello* or *Aida*), preserving his vocal cords with flawless breath management, covered vowels, and effortless projection without microphone amplification;\n  - **Auditorio Alfredo Kraus**: The oceanic concert hall built on the beach in Las Palmas de Gran Canaria designed by Óscar Tusquets.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Alfredo Kraus encarnó la pureza técnica y la elegancia del bel canto, convirtiendo su interpretación de «Werther» de Massenet en un modelo universal de canto.",
          "reading": "Al-fre-do Krows en-kar-no la poo-re-za...",
          "translation": "Alfredo Kraus embodied technical purity and the elegance of Bel Canto, turning his interpretation of Massenet's \"Werther\" into a universal model of singing."
        }
      ],
      "mnemonics": [
        "Alfredo Kraus (Aristocrat of Bel Canto from Gran Canaria)! Werther (Massenet «Pourquoi me réveiller»)! Flawless vocal longevity! Auditorio Alfredo Kraus!"
      ],
      "culturalNotes": [
        "Maria Callas personally chose Alfredo Kraus to sing Alfredo Germont opposite her legendary 1958 performance of *La Traviata* at the Teatro Nacional de São Carlos in Lisbon."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which legendary Canarian tenor was admired worldwide for his flawless vocal technique and definitive interpretation of Massenet's \"Werther\"?",
          "options": [
            "Alfredo Kraus (133.1)",
            "Plácido Domingo (133.2)",
            "José Carreras (133.3)",
            "Jaume Aragall (133.4)"
          ],
          "answerIndex": 0,
          "explanation": "Alfredo Kraus."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What French romantic opera by Jules Massenet, based on Goethe's epistolary novel, was Alfredo Kraus's greatest signature role?",
          "options": [
            "«Werther» (133.1)",
            "«Don Quichotte» (133.2)",
            "«Manon» (133.3)",
            "«Thaïs» (133.4)"
          ],
          "answerIndex": 0,
          "explanation": "«Werther»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Kraus's unwavering dedication to technical vocal health allowed him to sing the most demanding Bel Canto tenor high notes with crystalline purity well into his late sixties.\"",
          "options": [
            "La inquebrantable dedicación de Kraus a la salud técnica vocal le permitió cantar los agudos de tenor de bel canto más exigentes con pureza cristalina hasta bien entrados los sesenta años.",
            "Werther es una obra de teatro sin música.",
            "El Auditorio Alfredo Kraus está en los Andes.",
            "Alfredo Kraus era un pintor cubista."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Bel Canto analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which Spanish Atlantic island city is the monumental Auditorio Alfredo Kraus located on the Las Canteras beachfront?",
          "options": [
            "Santa Cruz de Tenerife",
            "Palma de Mallorca",
            "Ibiza",
            "Las Palmas de Gran Canaria"
          ],
          "answerIndex": 3,
          "explanation": "Las Palmas de Gran Canaria.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Aristocrat of Bel Canto & Tenor Rigor"
  },
  "es-u27-l4": {
    "id": "es-u27-l4",
    "unit": "es-u27",
    "level": "C2",
    "objective": "The Grand Mezzo-Soprano of Rossini & Mozart: Teresa Berganza (Teresa Berganza - El barbero de Sevilla «Una voce poco fa», La Cenerentola, Carmen de Bizet en Glyndebourne con Claudio Abbado, Premio Príncipe de Asturias 1991, Real Academia de Bellas Artes de San Fernando).",
    "presentation": {
      "explanation": "Teresa Berganza (1933–2022 - Madrid & El Escorial) and the restoration of Rossini and Mozart vocal authenticity:\n- **Teresa Berganza Vargas**:\n  - Prince of Asturias Award for the Arts (1991); first woman elected to the Real Academia de Bellas Artes de San Fernando;\n- The Revolution in Coloratura Mezzo-Soprano:\n  - Reclaimed Gioachino Rossini's heroines (Rosina in *Il barbiere di Siviglia*, Angelina in *La Cenerentola*, Isabella in *L'italiana in Algeri*) from shrill high sopranos, restoring the warm, dark, agile coloratura mezzo timbre intended by Rossini;\n  - **The Iconic 1977 Glyndebourne «Carmen» (with Claudio Abbado)**: Stripped Georges Bizet's *Carmen* of vulgar gypsy clichés, portraying Carmen as an intelligent, proud, free-willed, aristocratic woman choosing death over subjugation;\n  - Masterclass in Mozart (*Così fan tutte*, *Le nozze di Figaro* as Cherubino) and Spanish Art Song (*Lied* & Canción Española - Manuel de Falla, Enrique Granados, Joaquín Turina).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Teresa Berganza devolvió la autenticidad vocal a las heroínas de Rossini y redefinió a «Carmen» con Claudio Abbado como un símbolo supremo de libertad femenina.",
          "reading": "Te-re-sa Ber-gan-sa de-vol-vyo...",
          "translation": "Teresa Berganza restored vocal authenticity to Rossini's heroines and redefined \"Carmen\" with Claudio Abbado as a supreme symbol of female freedom."
        }
      ],
      "mnemonics": [
        "Teresa Berganza (Queen of Rossini & Mozart Coloratura Mezzo)! Rosina & La Cenerentola! Carmen at Glyndebourne (Claudio Abbado 1977)! Premio Príncipe de Asturias 1991!"
      ],
      "culturalNotes": [
        "Berganza was awarded the Grand Prix du Disque for her recordings and taught masterclasses worldwide, emphasizing text articulation and natural breath support."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish coloratura mezzo-soprano won the Prince of Asturias Award in 1991 and redefined Bizet's \"Carmen\" alongside Claudio Abbado?",
          "options": [
            "Conchita Supervía (134.1)",
            "Montserrat Caballé (134.2)",
            "Teresa Berganza (134.3)",
            "Victoria de los Ángeles (134.4)"
          ],
          "answerIndex": 2,
          "explanation": "Teresa Berganza."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Italian opera composer's heroines (*Rosina* and *Cenerentola*) were historically restored to their authentic mezzo-soprano register by Teresa Berganza?",
          "options": [
            "Giuseppe Verdi (134.1)",
            "Gioachino Rossini (134.2)",
            "Gaetano Donizetti (134.3)",
            "Giacomo Puccini (134.4)"
          ],
          "answerIndex": 1,
          "explanation": "Gioachino Rossini."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Berganza eliminated vulgar theatrical affectations in Carmen, creating a nuanced portrait of an unapologetically free woman who controls her own fate.\"",
          "options": [
            "Carmen es una ópera italiana sobre la pesca de truchas.",
            "Teresa Berganza fue una astronauta española.",
            "La Cenerentola es un libro de matemáticas puras.",
            "Berganza eliminó los amaneramientos teatrales vulgares en Carmen, creando un retrato lleno de matices de una mujer resueltamente libre que gobierna su propio destino."
          ],
          "answerIndex": 3,
          "explanation": "Accurate operatic interpretation translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious Spanish institution elected Teresa Berganza as its very first female full academician in 1995?",
          "options": [
            "Real Academia de la Historia",
            "Instituto Cervantes",
            "Real Academia de Bellas Artes de San Fernando",
            "Real Academia Española (RAE)"
          ],
          "answerIndex": 2,
          "explanation": "Real Academia de Bellas Artes de San Fernando.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Grand Mezzo-Soprano of Rossini & Mozart"
  },
  "es-u27-l5": {
    "id": "es-u27-l5",
    "unit": "es-u27",
    "level": "C2",
    "objective": "C2 synthesis on Spanish Operatic Architecture: The Teatro Real and Palau de les Arts (El Teatro Real de Madrid - historia desde 1850 y reapertura en 1997, Palau de les Arts Reina Sofía en Valencia de Santiago Calatrava, el género lírico en España).",
    "presentation": {
      "explanation": "Spain's world-class operatic temples and institutional renaissance:\n- **El Teatro Real de Madrid (Founded 1850 by Queen Isabella II - Plaza de Oriente)**:\n  - Reopened in 1997 as a technologically supreme opera house (awarded Best Opera Company in the World at the International Opera Awards in 2021);\n  - Features a cutting-edge 1,400 $m^2$ computerized stage machinery tower with 18 mobile hydraulic platforms that allow multiple opera sets to be shifted in minutes;\n- **Palau de les Arts Reina Sofía (Valencia - Completed 2005)**:\n  - Designed by **Santiago Calatrava** within the City of Arts and Sciences (*Ciudad de las Artes y las Ciencias*);\n  - Monumental soaring 75-meter aerodynamic white concrete and steel curved shell resembling a futuristic nautical helmet, housing four acoustic concert halls and the Centre de Perfeccionament Plácido Domingo;\n  - Led by visionary guest conductors (Zubin Mehta, Lorin Maazel, Valery Gergiev, Gustavo Dudamel).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El Teatro Real de Madrid y el Palau de les Arts de Calatrava en Valencia sitúan a España en la cúspide de la producción y escenografía operística internacional.",
          "reading": "El Te-a-tro Re-al de Ma-dreed ee el Pa-low de les Arts...",
          "translation": "The Teatro Real in Madrid and Calatrava's Palau de les Arts in Valencia place Spain at the pinnacle of international operatic staging and production."
        }
      ],
      "mnemonics": [
        "Teatro Real de Madrid (Plaza de Oriente & Best Opera Company 2021)! Palau de les Arts Valencia (Santiago Calatrava soaring helmet architecture)! 18 mobile hydraulic platforms!"
      ],
      "culturalNotes": [
        "The Teatro Real is directly aligned across the Plaza de Oriente with the Royal Palace of Madrid, featuring the historic royal box (*Palco Real*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which grand opera house in Madrid facing the Plaza de Oriente reopened in 1997 and won Best Opera Company in the World in 2021?",
          "options": [
            "El Teatro Real de Madrid (135.1)",
            "El Gran Teatre del Liceu (135.2)",
            "El Teatro Monumental (135.3)",
            "El Teatro de la Zarzuela (135.4)"
          ],
          "answerIndex": 0,
          "explanation": "El Teatro Real de Madrid."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Spanish architect designed the soaring futuristic opera house Palau de les Arts Reina Sofía in Valencia?",
          "options": [
            "Rafael Moneo (135.1)",
            "Ricardo Bofill (135.2)",
            "Antoni Gaudí (135.3)",
            "Santiago Calatrava (135.4)"
          ],
          "answerIndex": 3,
          "explanation": "Santiago Calatrava."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The automated hydraulic stage platforms of the Teatro Real allow complex operatic sets to be transformed between acts with nanometer computerized precision.\"",
          "options": [
            "El Teatro Real es un centro comercial en Barcelona.",
            "El Palau de les Arts es una fábrica de automóviles.",
            "Las plataformas escénicas hidráulicas automatizadas del Teatro Real permiten transformar decorados operísticos complejos entre actos con precisión informática milimétrica.",
            "Santiago Calatrava construyó el Coliseo de Roma."
          ],
          "answerIndex": 2,
          "explanation": "Accurate operatic architecture translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which architectural complex is the Palau de les Arts situated alongside the Hemisfèric and Oceanogràfic in Valencia?",
          "options": [
            "Parque del Retiro",
            "Ciudad de las Artes y las Ciencias (City of Arts and Sciences)",
            "Parc Güell",
            "La Alhambra"
          ],
          "answerIndex": 1,
          "explanation": "Ciudad de las Artes y las Ciencias.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Spanish Operatic Architecture"
  },
  "es-u28-l1": {
    "id": "es-u28-l1",
    "unit": "es-u28",
    "level": "C1",
    "objective": "Modernisme & Organic Structural Geometry: Antoni Gaudí (Antoni Gaudí - Basílica de la Sagrada Família, arcos catenarios y modelos funiculares con saquitos de perdigones, Casa Batlló y Casa Milà «La Pedrera», trencadís de azulejos rotos, naturaleza como maestra).",
    "presentation": {
      "explanation": "Antoni Gaudí i Cornet (1852–1926 - Reus & Barcelona) and the organic revolution of Catalan Modernisme:\n- **Antoni Gaudí**:\n  - The visionary architect who declared: *\"Originality consists in returning to the origin; thus, original is that which returns to the simplicity of early solutions\"* and *\"The straight line belongs to men, the curved line belongs to God\"*\n- Monumental Masterpieces & Structural Inventions:\n  - **Basílica de la Sagrada Família (Begun 1882 - UNESCO World Heritage)**: Structural system of branching stone tree columns supporting hyperboloid vaults, bathed in natural light through polychromatic stained glass windows;\n  - **Catenary Arches & Inverted Funicular Models**: Calculated complex tensile loads by hanging chains weighted with lead shot pellets (*saquitos de perdigones*), viewing the inverted reflection in a floor mirror to generate pure compressive equilibrium without flying buttresses;\n  - **Casa Milà («La Pedrera» - 1906–1912)**: Undulating rough-hewn stone façade and sculptural rooftop chimney sentinels;\n  - **Casa Batlló («La casa dels ossos»)**: Façade inspired by the legend of Saint George slaying the dragon (roof shaped like a dragon's spine with iridescent ceramic scales);\n  - **Trencadís Technique**: Mosaic surfaces crafted from reclaimed broken ceramic tile shards and porcelain cups (Park Güell serpentine bench with Josep Maria Jujol).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Antoni Gaudí revolucionó la arquitectura universal en la Sagrada Família y La Pedrera mediante arcos catenarios, columnas arbóreas y la técnica del trencadís.",
          "reading": "An-to-nee Gow-dee re-vo-loo-syo-no...",
          "translation": "Antoni Gaudi revolutionized world architecture in the Sagrada Familia and La Pedrera through catenary arches, tree-like columns, and the trencadís technique."
        }
      ],
      "mnemonics": [
        "Antoni Gaudí (Catalan Modernisme & Nature as Master)! Sagrada Família (Hyperboloid vaults & tree columns)! Inverted funicular models with chains & lead shot! Trencadís mosaic! Casa Batlló & La Pedrera!"
      ],
      "culturalNotes": [
        "Gaudí devoted the final 12 years of his life exclusively to the Sagrada Família, living as an ascetic hermit inside his workshop at the construction site until his death in 1926."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Catalan architect designed the Sagrada Família and Casa Milà, pioneering catenary structural models and trencadís mosaics?",
          "options": [
            "Lluís Domènech i Montaner (136.1)",
            "Josep Puig i Cadafalch (136.2)",
            "Enric Miralles (136.3)",
            "Antoni Gaudí (136.4)"
          ],
          "answerIndex": 3,
          "explanation": "Antoni Gaudí."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous decorative technique, perfected by Gaudí and Jujol, uses mosaic patterns made from reclaimed broken ceramic shards?",
          "options": [
            "El trencadís (136.1)",
            "El esgrafiado (136.2)",
            "La taracea (136.3)",
            "El mosaico bizantino (136.4)"
          ],
          "answerIndex": 0,
          "explanation": "El trencadís."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Gaudí calculated the compressive load distribution of his vaulted ceilings using inverted catenary string models weighted with lead shot to eliminate exterior flying buttresses.\"",
          "options": [
            "Antoni Gaudí diseñó rascacielos de acero en Nueva York.",
            "Gaudí calculó la distribución de cargas de compresión de sus bóvedas utilizando modelos catenarios invertidos de cuerdas lastradas con perdigones para eliminar los arbotantes exteriores.",
            "El trencadís es una receta de sopa catalana.",
            "La Sagrada Família es un estadio deportivo en Madrid."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Gaudí structural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What organic natural structure inspired the branching, weight-bearing load columns inside the nave of the Sagrada Família?",
          "options": [
            "Un bosque de troncos y ramas de árboles (A forest of tree trunks and branches)",
            "Columnas de templos griegos",
            "Postes de telégrafo",
            "Cintas de fábrica"
          ],
          "answerIndex": 0,
          "explanation": "Un bosque de troncos y ramas de árboles.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Modernisme & Organic Structural Geometry"
  },
  "es-u28-l2": {
    "id": "es-u28-l2",
    "unit": "es-u28",
    "level": "C1",
    "objective": "The Nasrid Paradise & Andalusian Sacred Geometry: The Alhambra and Generalife (La Alhambra y el Generalife de Granada - dinastía nazarí, mocárabes y yeserías caligráficas, patio de los Leones y los 12 surtidores, proporción áurea y acústica hidráulica, patio de los Arrayanes).",
    "presentation": {
      "explanation": "The Alhambra and Generalife in Granada (13th–14th centuries) and the summit of Hispano-Islamic architectural geometry:\n- **La Alhambra (Al-Qal'a al-Hamrā' / The Red Fortress) & Generalife (Jannat al-'Arīf / The Architect's Garden)**:\n  - Built by the Nasrid Sultans of Granada (Muhammad I, Yusuf I, and Muhammad V) on the Sabika hill overlooking the Sierra Nevada;\n- Architectural & Sacred Geometry Principles:\n  - **The Hydraulics of Stillness and Sound**: Water used as an architectural building material; mirrored reflecting pools (**Patio de los Arrayanes / Court of the Myrtles**) reflecting porticoes with glassy perfection, trickling channel fountains providing natural evaporative cooling;\n  - **Patio de los Leones (Court of the Lions - 1377)**: 124 slender white marble columns supporting filigree plaster arches, surrounding a central fountain supported by **12 sculpted marble lions** symbolizing the hours of the day and tribes of Israel/signs of the zodiac;\n  - **Muqarnas Domes (Bóvedas de Mocárabes)**: The Hall of the Abencerrajes and Hall of the Two Sisters; star-shaped domes constructed of thousands of honeycomb stalactite plaster cells refracting incoming sunlight into cosmic constellations;\n  - **Calligraphic Epigraphy**: Walls covered in intricate Kufic and Naskhi inscriptions repeating the Nasrid dynastic motto: **«وَلَا غَالِبَ إِلَّا ٱللَّٰهُ»** (*Wa lā ghāliba illā Allāh* / There is no conqueror but God).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La Alhambra de Granada representa la cima de la arquitectura andalusí mediante la acústica del agua, las bóvedas de mocárabes y la divisa «Wa lā ghāliba illā Allāh».",
          "reading": "La Al-am-bra de Gra-na-da re-pre-sen-ta...",
          "translation": "The Alhambra of Granada represents the pinnacle of Andalusian architecture through the acoustics of water, muqarnas vaults, and the motto \"Wa la ghaliba illa Allah.\""
        }
      ],
      "mnemonics": [
        "La Alhambra & Generalife (Nasrid Dynasty in Granada)! Patio de los Leones (124 marble columns & 12 lions)! Muqarnas honeycomb domes! «Wa lā ghāliba illā Allāh» epigraphy! Water as architectural material!"
      ],
      "culturalNotes": [
        "American author Washington Irving lived inside the vacant rooms of the Alhambra in 1829, writing his famous *Tales of the Alhambra*, which spurred international efforts to restore and preserve the monument."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which grand 14th-century Andalusian palace fortress in Granada features the Court of the Lions and breathtaking muqarnas stalactite domes?",
          "options": [
            "La Alhambra de Granada (137.1)",
            "El Alcázar de Sevilla (137.2)",
            "El Palacio de la Aljafería (137.3)",
            "La Mezquita de Córdoba (137.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Alhambra de Granada."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What Arabic dynastic motto is inscribed thousands of times across the calligraphic plaster walls of the Alhambra?",
          "options": [
            "«وَلَا غَالِبَ إِلَّا ٱللَّٰهُ» (There is no conqueror but God) (137.1)",
            "«الملك لله» (137.2)",
            "«الحمد لله» (137.3)",
            "«العزة لله» (137.4)"
          ],
          "answerIndex": 0,
          "explanation": "«وَلَا غَالِبَ إِلَّا ٱللَّٰهُ»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The central fountain of the Court of the Lions utilizes precise gravity-fed water channels to create continuous hydraulic flow without mechanical pumps.\"",
          "options": [
            "La fuente central del Patio de los Leones utiliza canales de agua precisos alimentados por gravedad para crear un flujo hidráulico continuo sin bombas mecánicas.",
            "La Alhambra fue construida en el siglo XX en Madrid.",
            "El Generalife es una estación de tren subterránea.",
            "Los leones de la Alhambra están hechos de madera de pino."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Alhambra hydraulic analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What architectural honeycomb ceiling feature, resembling dripping stalactites, crowns the Hall of the Two Sisters in the Alhambra?",
          "options": [
            "Cúpula geodésica",
            "Techo de artesonado plano",
            "Bóveda de cañón",
            "Bóveda de mocárabes (Muqarnas dome)"
          ],
          "answerIndex": 3,
          "explanation": "Bóveda de mocárabes.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Nasrid Paradise & Andalusian Sacred Geometry"
  },
  "es-u28-l3": {
    "id": "es-u28-l3",
    "unit": "es-u28",
    "level": "C1",
    "objective": "The Renaissance Monolith & The Grid of San Lorenzo: El Escorial (El Real Monasterio de San Lorenzo de El Escorial 1563-1584, Felipe II, arquitecto Juan de Herrera y el estilo herreriano, la parrilla de San Lorenzo, la gran Biblioteca con frescos de Pellegrino Tibaldi y esferas armilares).",
    "presentation": {
      "explanation": "The Royal Monastery of San Lorenzo de El Escorial (1563–1584) and the austere triumph of the Herrerian style:\n- **Historical Commission (Felipe II)**:\n  - Built at the foot of Mount Abantos in the Guadarrama mountains northwest of Madrid;\n  - Commissioned by King Philip II to commemorate the Spanish victory over France at the Battle of Saint Quentin (1557) on the feast day of Saint Lawrence (San Lorenzo);\n  - Functions as a royal palace, basilica, monastery of the Order of Saint Jerome, school, and royal pantheon (*Panteón de Reyes*);\n- Architectural Geometry & **El Estilo Herreriano**:\n  - Designed initially by Juan Bautista de Toledo and completed by **Juan de Herrera**;\n  - **The Grid Floor Plan (La Parrilla de San Lorenzo)**: Laid out in a monumental rectangle resembling the iron grill on which Saint Lawrence was martyred;\n  - Strict Herrerian Minimalism: Absolute geometric symmetry, unadorned gray Guadarrama granite masonry, pyramid slate roofs with corner towers, rejecting excessive plateresque decoration in favor of mathematical sobriety;\n- **The Royal Library (La Real Biblioteca)**:\n  - 54-meter barrel-vaulted hall painted with Mannerist frescoes by Pellegrino Tibaldi celebrating the Seven Liberal Arts (*Trivium* and *Quadrivium*); books displayed with their gilded page edges facing outwards to prevent leather spine decay.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El Monasterio de El Escorial, concebido por Felipe II y Juan de Herrera, definió la sobriedad del estilo herreriano y la geometría de la parrilla de San Lorenzo.",
          "reading": "El Mo-nas-te-ryo de El Es-ko-ryal...",
          "translation": "The Monastery of El Escorial, conceived by Philip II and Juan de Herrera, defined the sobriety of the Herrerian style and the geometry of Saint Lawrence's grid."
        }
      ],
      "mnemonics": [
        "El Escorial 1563–1584 (Felipe II & Juan de Herrera)! Herrerian style (Gray granite sobriety & mathematical symmetry)! Grid plan of San Lorenzo! Real Biblioteca (Gilded book edges facing out)! Panteón de Reyes!"
      ],
      "culturalNotes": [
        "Philip II watched the construction of El Escorial through a telescope from a natural granite rock seat in the pine forest, known today as the *Silla de Felipe II*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which monumental 16th-century royal monastery near Madrid was designed by Juan de Herrera for King Philip II, defining the Herrerian style?",
          "options": [
            "El Real Monasterio de San Lorenzo de El Escorial (138.1)",
            "El Palacio Real de Aranjuez (138.2)",
            "El Palacio de La Granja (138.3)",
            "El Alcázar de Toledo (138.4)"
          ],
          "answerIndex": 0,
          "explanation": "El Real Monasterio de San Lorenzo de El Escorial."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What martyrdom instrument of Saint Lawrence inspired the rectangular grid layout of El Escorial?",
          "options": [
            "Una parrilla de hierro (An iron grid / grill) (138.1)",
            "Una rueda de tortura (138.2)",
            "Una lanza romana (138.3)",
            "Una cruz de madera (138.4)"
          ],
          "answerIndex": 0,
          "explanation": "Una parrilla de hierro."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Herrerian architectural style established a monumental aesthetic of unadorned granite sobriety, reflecting the austere counter-reformation ideology of Philip II's empire.\"",
          "options": [
            "El Escorial es una pequeña cabaña de madera en la playa.",
            "Juan de Herrera era un escultor francés del siglo XIX.",
            "Felipe II construyó El Escorial para criar caballos de carrera.",
            "El estilo arquitectónico herreriano estableció una estética monumental de sobriedad en granito sin adornos, reflejando la austera ideología contrarreformista del imperio de Felipe II."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Herrerian architectural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What unique historic preservation custom is practiced in the Royal Library of El Escorial regarding how ancient volumes are shelved?",
          "options": [
            "Los libros se guardan en cofres de hierro cerrados",
            "Los libros están colgados del techo con cuerdas",
            "Los libros se colocan con los cortes dorados hacia fuera (Books placed with gilded page edges facing out)",
            "Los libros están apilados horizontalmente en el suelo"
          ],
          "answerIndex": 2,
          "explanation": "Los libros se colocan con los cortes dorados hacia fuera.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Renaissance Monolith & The Grid of San Lorenzo"
  },
  "es-u28-l4": {
    "id": "es-u28-l4",
    "unit": "es-u28",
    "level": "C2",
    "objective": "Pritzker Laureate & The Soul of Roman Brick: Rafael Moneo (Rafael Moneo - Premio Pritzker 1996, Museo Nacional de Arte Romano de Mérida - arcos diafragma de ladrillo romano, ampliación del Museo del Prado en el Claustro de los Jerónimos, Kursaal de San Sebastián).",
    "presentation": {
      "explanation": "Rafael Moneo (José Rafael Moneo Vallés - 1937–present - Tudela, Navarra & Madrid) and the pinnacle of contemporary Spanish architecture:\n- **Rafael Moneo**:\n  - The first Spanish architect to win the prestigious **Pritzker Architecture Prize (1996)**; taught at Harvard Graduate School of Design (GSD) and ETSAM Madrid.\n- Monumental Masterpieces & Architectural Philosophy:\n  - **Museo Nacional de Arte Romano (Mérida - 1986)**:\n    - Masterpiece of archaeological contextualism; built directly over the excavated Roman ruins of *Emerita Augusta*;\n    - Colossal soaring brick diaphragm arches (*arcos diafragma de ladrillo*) echoing ancient Roman brickwork techniques, flooded with vertical sunlight from overhead skylights, creating a timeless dialogue between antiquity and modernism;\n  - **Kursaal Congress Centre (San Sebastián - 1999)**: Two giant translucent glass cubes tilted like \"two beached rocks\" (*dos rocas varadas*) on the mouth of the Urumea River;\n  - **Extension of the Museo del Prado (Madrid - 2007)**: Incorporating the restored 17th-century cloister of the Jerónimos (*Claustro de los Jerónimos*) beneath red brick and bronze louvers;\n  - **Cathedral of Our Lady of the Angels (Los Angeles, USA - 2002)**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Rafael Moneo, Premio Pritzker, unió la memoria arqueológica con la modernidad en el Museo de Arte Romano de Mérida y los cubos del Kursaal en San Sebastián.",
          "reading": "Ra-fa-el Mo-ne-o Pre-myo Pritz-ker...",
          "translation": "Rafael Moneo, Pritzker laureate, united archaeological memory with modernity in the Museum of Roman Art in Merida and the Kursaal cubes in San Sebastian."
        }
      ],
      "mnemonics": [
        "Rafael Moneo (First Spanish Pritzker Laureate 1996)! Museo de Arte Romano de Mérida (Soaring Roman brick diaphragm arches over ruins)! Kursaal San Sebastián (Two beached glass rocks)! Prado Extension!"
      ],
      "culturalNotes": [
        "Moneo was awarded the Royal Gold Medal by the Royal Institute of British Architects (RIBA) and the Prince of Asturias Award for the Arts in 2012."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish architect won the Pritzker Prize in 1996 and designed the National Museum of Roman Art in Mérida?",
          "options": [
            "Enric Miralles (139.1)",
            "Ricardo Bofill (139.2)",
            "Rafael Moneo (139.3)",
            "Santiago Calatrava (139.4)"
          ],
          "answerIndex": 2,
          "explanation": "Rafael Moneo."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What primary building material, referencing ancient Roman masonry, forms the monumental soaring arches of Moneo's museum in Mérida?",
          "options": [
            "Mármol blanco de Carrara (139.1)",
            "Ladrillo cerámico romano (Roman ceramic brick) (139.2)",
            "Planchas de titanio (139.3)",
            "Hormigón armado visto (139.4)"
          ],
          "answerIndex": 1,
          "explanation": "Ladrillo cerámico romano."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Moneo's design for the Roman Art Museum in Merida utilizes monumental brick parallel arches to establish spatial grandeur while honoring the archaeological strata below.\"",
          "options": [
            "El Kursaal de San Sebastián es una mina de carbón subterránea.",
            "El Museo del Prado fue demolido en 2007.",
            "El diseño de Moneo para el Museo de Arte Romano de Mérida utiliza arcos paralelos de ladrillo monumental para establecer una grandeza espacial a la vez que honra los estratos arqueológicos subterráneos.",
            "Rafael Moneo es un escultor de barcos de pesca."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Moneo architectural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What iconic metaphor did Rafael Moneo use to describe the two glowing translucent glass auditorium cubes of the Kursaal on San Sebastián's shoreline?",
          "options": [
            "Dos estrellas caídas",
            "«Dos rocas varadas» en la desembocadura (Two beached rocks at the river mouth)",
            "Dos cajas de zapatos",
            "Dos barcos de vapor"
          ],
          "answerIndex": 1,
          "explanation": "«Dos rocas varadas».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Pritzker Laureate & The Soul of Roman Brick"
  },
  "es-u28-l5": {
    "id": "es-u28-l5",
    "unit": "es-u28",
    "level": "C2",
    "objective": "C2 synthesis on High-Tech Sculptural Urbanism & Monumental Bridges: Santiago Calatrava (Santiago Calatrava - Ciudad de las Artes y las Ciencias de Valencia, Puente del Alamillo en Sevilla 1992, Oculus / World Trade Center Transportation Hub en Nueva York, ingeniería cinética y zoomorfismo estructural).",
    "presentation": {
      "explanation": "Santiago Calatrava (1951–present - Benimàmet, Valencia & Zurich/New York) and kinetic sculptural engineering:\n- **Santiago Calatrava Valls**:\n  - Architect, structural engineer, and sculptor; pioneer of zoomorphic and kinetic architecture inspired by human skeletons, bird wings, and dynamic skeletal motion.\n- Monumental Masterpieces Across the Globe:\n  - **Puente del Alamillo (Seville - 1992 Expo '92)**: The world's first **single-pylon cable-stayed bridge without rear stay cables**, where a single 142-meter 58-degree cantilevered steel pylon counterbalances the entire weight of the bridge deck through pure mathematical geometry;\n  - **Ciudad de las Artes y las Ciencias (Valencia - 1998–2005)**: 2-kilometer futuristic cultural complex in the dry Turia riverbed (L'Hemisfèric eye opening hydraulic eyelids, Museu de les Ciències skeletal dinosaur ribs, L'Umbracle, Palau de les Arts);\n  - **The Oculus / World Trade Center Transportation Hub (New York City - 2016)**: White steel ribs resembling a dove released from a child's hands, featuring a retractable operable skylight that opens every September 11 aligned with the sun;\n  - **Turning Torso (Malmö, Sweden - 2005)**: The first twisting skyscraper in world history, rotating 90 degrees from base to top based on a twisting human spine.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Santiago Calatrava revolucionó la ingeniería estructural mundial con el Puente del Alamillo, la Ciudad de las Artes y las Ciencias y el Oculus de Nueva York.",
          "reading": "San-tya-go Ka-la-tra-va re-vo-loo-syo-no...",
          "translation": "Santiago Calatrava revolutionized world structural engineering with the Alamillo Bridge, the City of Arts and Sciences, and the Oculus in New York."
        }
      ],
      "mnemonics": [
        "Santiago Calatrava (Architect, Structural Engineer & Sculptor)! Puente del Alamillo 1992 (Single cantilevered pylon without rear cables)! Ciudad de las Artes y las Ciencias! The Oculus at Ground Zero NYC! Turning Torso in Malmö!"
      ],
      "culturalNotes": [
        "Calatrava holds degrees in both Architecture (Valencia) and Civil Engineering (ETH Zurich), allowing him to calculate and sign off on all his own complex structural mathematics without external engineers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish architect and structural engineer designed the Puente del Alamillo in Seville, Valencia's City of Arts and Sciences, and New York's Oculus?",
          "options": [
            "Santiago Calatrava (140.1)",
            "Rafael Moneo (140.2)",
            "Alberto Campo Baeza (140.3)",
            "Ricardo Bofill (140.4)"
          ],
          "answerIndex": 0,
          "explanation": "Santiago Calatrava."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What sculptural form inspired Santiago Calatrava's design for the white steel ribs of the Oculus Transportation Hub at Ground Zero in New York?",
          "options": [
            "Un barco de vela (140.1)",
            "Un rascacielos gótico (140.2)",
            "Un caracol marino (140.3)",
            "Una paloma liberada de las manos de un niño (A dove released from a child's hands) (140.4)"
          ],
          "answerIndex": 3,
          "explanation": "Una paloma liberada de las manos de un niño."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Calatrava's zoomorphic architecture transforms bridges and transit hubs into kinetic sculptures that dynamically articulate skeletal tension and compressive equilibrium.\"",
          "options": [
            "La Ciudad de las Artes y las Ciencias está en la Antártida.",
            "La arquitectura zoomórfica de Calatrava transforma puentes y centros de transporte en esculturas cinéticas que articulan dinámicamente la tensión esquelética y el equilibrio de compresión.",
            "Santiago Calatrava diseñó únicamente casas de madera rústica.",
            "El Puente del Alamillo se derrumbó en 1992."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Calatrava structural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What landmark 190-meter residential tower in Malmö, Sweden, designed by Calatrava, was the first twisting skyscraper in world architectural history?",
          "options": [
            "Turning Torso",
            "Burj Khalifa",
            "The Shard",
            "Torre Glòries"
          ],
          "answerIndex": 0,
          "explanation": "Turning Torso.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on High-Tech Sculptural Urbanism & Monumental Bridges"
  },
  "es-u29-l1": {
    "id": "es-u29-l1",
    "unit": "es-u29",
    "level": "C1",
    "objective": "Circumstance & Raciovitalism: José Ortega y Gasset (José Ortega y Gasset - «Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo» 1914, La rebelión de las masas 1930, el raciovitalismo frente al racionalismo puro, la Revista de Occidente, perspectivismo).",
    "presentation": {
      "explanation": "José Ortega y Gasset (1883–1955 - Madrid) and the philosophy of Raciovitalism (El Raciovitalismo):\n- **José Ortega y Gasset**:\n  - The towering Spanish philosopher of the 20th century; founded the *Revista de Occidente* (1923), shaping Hispanic and European intellectual discourse;\n- Core Philosophical Theorems:\n  - **The Foundational Maxim (Meditaciones del Quijote - 1914)**:\n    - **«Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo»** (*\"I am I and my circumstance, and if I do not save it, I do not save myself\"*);\n    - Human existence is not an abstract Cartesian mind detached from reality, but a dynamic dialogue with the concrete historical, biological, and physical world surrounding us;\n  - **Raciovitalism (El Raciovitalismo)**: Replaced dry Cartesian pure reason with **Vital Reason (La razón vital)**—reason is not a detached mechanical tool, but an organ of human life;\n  - **Perspectivism (El Perspectivismo)**: Absolute truth is not a single dogmatic vantage point, but the harmonious integration of multiple individual perspectives, like viewing the multifaceted facets of the Guadarrama mountains;\n  - **La rebelión de las masas (The Revolt of the Masses - 1930)**: Landmark sociological treatise warning against the \"mass-man\" (*el hombre-masa*) who enjoys the fruits of civilization while lacking historical consciousness and moral excellence.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Ortega y Gasset fundamentó el raciovitalismo y el perspectivismo con la célebre máxima: «Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo».",
          "reading": "Or-te-ga ee Ga-set foon-da-men-to...",
          "translation": "Ortega y Gasset founded raciovitalism and perspectivism with the famous maxim: \"I am I and my circumstance, and if I do not save it, I do not save myself.\""
        }
      ],
      "mnemonics": [
        "José Ortega y Gasset («Yo soy yo y mi circunstancia» 1914)! Raciovitalismo (Vital reason over pure reason)! Perspectivismo (Reality seen from multiple vistas)! La rebelión de las masas 1930! Revista de Occidente!"
      ],
      "culturalNotes": [
        "Ortega y Gasset was a master of Spanish prose style, hailed as one of the finest essayists in the Spanish language for making profound metaphysics poetic and accessible."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish philosopher coined the famous maxim \"Yo soy yo y mi circunstancia\" and wrote \"La rebelión de las masas\" (1930)?",
          "options": [
            "Miguel de Unamuno (141.1)",
            "Xavier Zubiri (141.2)",
            "Julián Marías (141.3)",
            "José Ortega y Gasset (141.4)"
          ],
          "answerIndex": 3,
          "explanation": "José Ortega y Gasset."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What philosophical concept, developed by Ortega y Gasset, asserts that reason is an essential function and organ of human life rather than a detached abstract system?",
          "options": [
            "El raciovitalismo / La razón vital (141.1)",
            "El positivismo lógico (141.2)",
            "El idealismo absoluto (141.3)",
            "El materialismo dialéctico (141.4)"
          ],
          "answerIndex": 0,
          "explanation": "El raciovitalismo / La razón vital."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ortega y Gasset established that human life is the radical reality, wherein reason functions as a vital navigational organ within one's historical circumstance.\"",
          "options": [
            "Ortega y Gasset estableció que la vida humana es la realidad radical, en la cual la razón funciona como un órgano vital de navegación dentro de la circunstancia histórica de cada uno.",
            "Ortega y Gasset fue un piloto militar en la Primera Guerra Mundial.",
            "El perspectivismo niega la existencia del universo.",
            "La rebelión de las masas es un libro de cocina tradicional."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Ortega y Gasset philosophical analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What influential intellectual journal was founded by José Ortega y Gasset in Madrid in 1923 to introduce global philosophical thought to the Spanish-speaking world?",
          "options": [
            "El Espectador",
            "Sur",
            "Gaceta Literaria",
            "Revista de Occidente"
          ],
          "answerIndex": 3,
          "explanation": "Revista de Occidente.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Circumstance & Raciovitalism"
  },
  "es-u29-l2": {
    "id": "es-u29-l2",
    "unit": "es-u29",
    "level": "C1",
    "objective": "The Tragic Sense of Life & The Agony of Immortality: Miguel de Unamuno (Miguel de Unamuno - Generación del 98, Del sentimiento trágico de la vida 1912, la agonía entre la razón y el anhelo de inmortalidad, San Manuel Bueno mártir, la invención de la «nivola» en Niebla, la intrahistoria).",
    "presentation": {
      "explanation": "Miguel de Unamuno (1864–1936 - Bilbao & Salamanca) and the existential agony of human longing:\n- **Miguel de Unamuno y Jugo**:\n  - Leading intellectual titan of the **Generación del 98**; Rector of the University of Salamanca; precursor of European Christian Existentialism (alongside Kierkegaard).\n- Landmark Metaphysical Treatises & Concepts:\n  - **Del sentimiento trágico de la vida (The Tragic Sense of Life - 1912)**:\n    - The central dilemma of human existence: The violent clash (**la agonía**) between **Reason** (which demonstrates that bodily death is final) and the **Heart's Hunger for Immortality** (*el hambre de inmortalidad* / longing never to die);\n    - Concluded: *\"Faith is not believing what we do not see, but creating what we do not see\"*;\n  - **La Intrahistoria (Intrahistory)**: The silent, daily, unrecorded spiritual life of ordinary working peasants, which forms the true profound ocean beneath the noisy temporary surface waves of official political history;\n  - **The \"Nivola\" & *Niebla* (1914)**: Invented a new literary-philosophical genre (*la nivola*) where the fictional character Augusto Pérez confronts his author (Unamuno) in his study, challenging the creator's power to kill him;\n  - **San Manuel Bueno, mártir (1930)**: The saintly parish priest who loses his own faith in eternal life but preaches it passionately to preserve the joyful peace of his village.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Miguel de Unamuno expuso la lucha entre la razón y el hambre de inmortalidad en «Del sentimiento trágico de la vida» y su concepto de la intrahistoria.",
          "reading": "Mee-gel de Oo-na-moo-no eks-poo-so...",
          "translation": "Miguel de Unamuno articulated the struggle between reason and the hunger for immortality in \"The Tragic Sense of Life\" and his concept of intrahistory."
        }
      ],
      "mnemonics": [
        "Miguel de Unamuno (Generación del 98 & Rector of Salamanca)! Del sentimiento trágico de la vida 1912 (Agonía between reason & hunger for immortality)! La Intrahistoria! Niebla & the «nivola» (Character confronting author)! San Manuel Bueno mártir!"
      ],
      "culturalNotes": [
        "On October 12, 1936, inside the Paraninfo of the University of Salamanca, Unamuno bravely confronted General Millán-Astray with the historic rebuke: *\"Venceréis, pero no convenceréis\"* (*\"You will conquer, but you will not convince\"*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master philosopher and rector of Salamanca explored the tragic conflict between reason and the longing for immortality in \"Del sentimiento trágico de la vida\"?",
          "options": [
            "Miguel de Unamuno (142.1)",
            "Eugenio d'Ors (142.2)",
            "Julián Besteiro (142.3)",
            "José Ortega y Gasset (142.4)"
          ],
          "answerIndex": 0,
          "explanation": "Miguel de Unamuno."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What concept was coined by Unamuno to describe the silent, continuous everyday life of ordinary people that forms the true bedrock of civilization beneath recorded political history?",
          "options": [
            "La intrahistoria (Intrahistory) (142.1)",
            "La superestructura (142.2)",
            "La sincronía (142.3)",
            "El determinismo (142.4)"
          ],
          "answerIndex": 0,
          "explanation": "La intrahistoria (Intrahistory)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Unamuno conceived human existence as an unresolved agony between intellectual skepticism and the visceral hunger for personal immortality.\"",
          "options": [
            "La intrahistoria es un estudio sobre dinosaurios marinos.",
            "Miguel de Unamuno fue un comerciante de café en el siglo XVII.",
            "La novela Niebla fue escrita por Miguel de Cervantes.",
            "Unamuno concibió la existencia humana como una agonía no resuelta entre el escepticismo intelectual y el hambre visceral de inmortalidad personal."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Unamuno philosophical analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In Unamuno's 1914 existential masterpiece *Niebla*, what revolutionary literary genre label did he invent to describe novels driven by dialogue and interior character agony?",
          "options": [
            "Romance",
            "Sainete",
            "Nivola",
            "Farsa"
          ],
          "answerIndex": 2,
          "explanation": "Nivola.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Tragic Sense of Life & The Agony of Immortality"
  },
  "es-u29-l3": {
    "id": "es-u29-l3",
    "unit": "es-u29",
    "level": "C1",
    "objective": "Poetic Reason & The Logos of the Heart: María Zambrano (María Zambrano - Premio Cervantes 1988 y Premio Príncipe de Asturias 1981, La razón poética frente al totalitarismo de la razón discursiva, Claros del bosque, El hombre y lo divino, exilio filosófico republicano).",
    "presentation": {
      "explanation": "María Zambrano (1904–1991 - Vélez-Málaga & Rome/Geneva/Madrid) and the revolution of Poetic Reason (La Razón Poética):\n- **María Zambrano**:\n  - Disciple of Ortega y Gasset and Xavier Zubiri; the supreme female philosopher of the Hispanic world; first woman awarded the **Premio Cervantes (1988)** and the Prince of Asturias Award for Communications and Humanities (1981); endured 45 years of political exile following the Spanish Civil War.\n- The Monumental Philosophical Discovery: **La Razón Poética (Poetic Reason)**:\n  - Critique of Western Rationalism: Western philosophy fell into tragedy by worshiping a cold, violent, instrumental rationalism that divorced logic from human suffering, dreams, and the sacred;\n  - Proposes *Poetic Reason*: A luminous mode of thinking that integrates poetic metaphor, heart contemplation, and mystical intuition with philosophical rigor, giving voice to that which discursive logic cannot express;\n- Monumental Masterpieces:\n  - **Claros del bosque (Clearings in the Forest - 1977)**: Metaphysical journey through interior awakening, where truth is encountered not through aggressive intellectual conquest, but by waiting quietly in a forest clearing for light to descend into the clearing;\n  - **El hombre y lo divino (Man and the Divine - 1955)** & **Filosofía y poesía (1939)**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "María Zambrano, primera mujer en recibir el Premio Cervantes, creó «La razón poética» en obras maestras como Claros del bosque.",
          "reading": "Ma-ree-a Tham-bra-no pree-me-ra moo-kher...",
          "translation": "Maria Zambrano, the first woman to receive the Cervantes Prize, created \"Poetic Reason\" in masterpieces like Clearings in the Forest."
        }
      ],
      "mnemonics": [
        "María Zambrano (Premio Cervantes 1988 & Hispanic Philosophical Titan)! La razón poética (Integrating heart, metaphor & intellect against cold rationalism)! Claros del bosque 1977 (Light descending into forest clearings)! El hombre y lo divino! 45 years in exile!"
      ],
      "culturalNotes": [
        "María Zambrano returned to Spain from her long exile in November 1984 at age 80, receiving a standing ovation from the entire nation as the living moral conscience of Spanish philosophy."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish philosopher was the first woman to win the Premio Cervantes (1988) and formulated the philosophy of \"La razón poética\"?",
          "options": [
            "María Zambrano (143.1)",
            "Victoria Camps (143.2)",
            "Adela Cortina (143.3)",
            "Celia Amorós (143.4)"
          ],
          "answerIndex": 0,
          "explanation": "María Zambrano."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What metaphysical 1977 masterwork by María Zambrano describes the quiet interior descent of truth as light entering an open forest space?",
          "options": [
            "Claros del bosque (143.1)",
            "Campos de Castilla (143.2)",
            "La soledad sonora (143.3)",
            "El laberinto de la soledad (143.4)"
          ],
          "answerIndex": 0,
          "explanation": "Claros del bosque."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Poetic reason according to Maria Zambrano overcomes the violent abstraction of instrumental logic by listening to the primordial intuitions of human suffering and memory.\"",
          "options": [
            "María Zambrano fue una reina medieval de Castilla.",
            "Claros del bosque es un manual de botánica aplicada.",
            "La razón poética según María Zambrano supera la abstracción violenta de la lógica instrumental escuchando las intuiciones primordiales del sufrimiento y la memoria humana.",
            "El Premio Cervantes se otorga únicamente a matemáticos."
          ],
          "answerIndex": 2,
          "explanation": "Accurate María Zambrano analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "For how many years did María Zambrano live in political exile across Mexico, Cuba, Puerto Rico, France, Italy, and Switzerland before returning to Madrid?",
          "options": [
            "10 años",
            "45 años (45 years)",
            "20 años",
            "5 años"
          ],
          "answerIndex": 1,
          "explanation": "45 años.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Poetic Reason & The Logos of the Heart"
  },
  "es-u29-l4": {
    "id": "es-u29-l4",
    "unit": "es-u29",
    "level": "C2",
    "objective": "The Birth of International Law & Human Dignity: Francisco de Vitoria and the School of Salamanca (Francisco de Vitoria - Escuela de Salamanca, Relectio de Indis 1539, fundamentación del Derecho de Gentes (Ius Gentium), derechos inalienables de los pueblos indígenas, teoría del precio justo y la guerra justa).",
    "presentation": {
      "explanation": "Francisco de Vitoria (c. 1483–1546 - Burgos & Salamanca) and the foundational revolution of International Law (La Escuela de Salamanca):\n- **Francisco de Vitoria (OP)**:\n  - Dominican theologian, jurist, and philosopher; Prime Professor of Theology at the **University of Salamanca**; recognized worldwide as the **Father of Modern International Law (Fundador del Derecho Internacional)**.\n- The Historic Breakthrough: **Relectio de Indis (On the Indians - 1539)**:\n  - Delivered as public lectures in Salamanca challenging imperial justification for the conquest of the Americas;\n  - **Universal Human Dignity & Inalienable Rights**: Declared that indigenous peoples of the Americas (*los indios*) were legitimate sovereign humans endowed with reason and natural free will, possessing true dominion (*dominium*) over their private property and political territories before and after the arrival of Europeans;\n  - Rejected the claim that the Pope or Holy Roman Emperor had universal temporal dominion over the Earth;\n- The Foundations of Global Jurisprudence:\n  - **Ius Gentium (Derecho de Gentes)**: Universal law governing relationships between all sovereign nations based on mutual respect, free trade, and hospitality;\n  - **The Theory of the Just War (Ius ad bellum & Ius in bello)** & **The Just Price (El precio justo)** in early market economics.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Francisco de Vitoria y la Escuela de Salamanca sentaron las bases del Derecho Internacional y los derechos humanos universales en su Relectio de Indis de 1539.",
          "reading": "Fran-thees-ko de Vee-to-rya...",
          "translation": "Francisco de Vitoria and the School of Salamanca laid the foundations of International Law and universal human rights in his 1539 Relectio de Indis."
        }
      ],
      "mnemonics": [
        "Francisco de Vitoria (Father of Modern International Law & School of Salamanca)! Relectio de Indis 1539 (Universal human dignity of indigenous peoples)! Ius Gentium (Law of Nations)! Theory of Just War & Just Price!"
      ],
      "culturalNotes": [
        "A monumental statue of Francisco de Vitoria stands outside the Palais des Nations (United Nations Headquarters) in Geneva, Switzerland, honoring him as the founder of international law."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 16th-century Dominican philosopher at the University of Salamanca founded modern international law with his 1539 lectures \"Relectio de Indis\"?",
          "options": [
            "Domingo de Soto (144.1)",
            "Francisco Suárez (144.2)",
            "Francisco de Vitoria (144.3)",
            "Bartolomé de las Casas (144.4)"
          ],
          "answerIndex": 2,
          "explanation": "Francisco de Vitoria."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What Latin legal concept was redefined by Francisco de Vitoria as a universal law of nations governing reciprocal rights and peaceful relations between all sovereign peoples?",
          "options": [
            "Lex Talionis (144.1)",
            "Ius Canonicum (144.2)",
            "Ius Gentium (Derecho de Gentes) (144.3)",
            "Ius Civile (144.4)"
          ],
          "answerIndex": 2,
          "explanation": "Ius Gentium (Derecho de Gentes)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Francisco de Vitoria affirmed that indigenous peoples possessed natural sovereign rights of property and self-governance that no foreign monarch could arbitrarily revoke.\"",
          "options": [
            "La Escuela de Salamanca promovía la piratería marítima.",
            "Francisco de Vitoria afirmó que los pueblos indígenas poseían derechos naturales soberanos de propiedad y autogobierno que ningún monarca extranjero podía revocar arbitrariamente.",
            "Relectio de Indis es un tratado sobre navegación lunar.",
            "Francisco de Vitoria fue un corsario inglés del siglo XVIII."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Vitoria legal-philosophical analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which grand international city does a memorial honoring Francisco de Vitoria stand at the United Nations headquarters for founding international jurisprudence?",
          "options": [
            "Ginebra (Geneva, Switzerland)",
            "La Haya",
            "Bruselas",
            "Nueva York"
          ],
          "answerIndex": 0,
          "explanation": "Ginebra.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Birth of International Law & Human Dignity"
  },
  "es-u29-l5": {
    "id": "es-u29-l5",
    "unit": "es-u29",
    "level": "C2",
    "objective": "C2 synthesis on Sentient Intelligence & Dynamic Reality: Xavier Zubiri (Xavier Zubiri - Estructura dinámica de la realidad, Inteligencia sentiente 1980: Inteligencia y realidad, aprehensión primordial de realidad, noología frente a epistemología pura, metafísica de la alteridad).",
    "presentation": {
      "explanation": "Xavier Zubiri (1898–1983 - San Sebastián & Madrid) and the pinnacle of rigorous metaphysical noology:\n- **Xavier Zubiri Apalategui**:\n  - Studied under Ortega y Gasset, Edmund Husserl, and Martin Heidegger (Freiburg); master of ancient Greek, Latin, Hebrew, and quantum physics; crafted the most rigorous metaphysical system in modern Hispanic philosophy.\n- The Monumental Masterpiece: **Inteligencia sentiente (Sentient Intelligence - Trilogy 1980–1983)**:\n  - **The Radical Discovery (La Aprehensión Primordial de la Realidad)**:\n    - Overthrew the ancient 2,500-year Western division between \"sensing\" (sensory organs) and \"intellection\" (rational abstract mind);\n    - **Sentient Intellection (Inteligencia Sentiente)**: Humans do not first perceive raw sensory stimuli and then secondarily apply mental thought; rather, human sensing is *already inherently intellectual*, and human thinking is *already inherently sentient*;\n    - We apprehend things directly and primordially as **\"Realities\" (Realidad de suyo)**, possessing autonomous ontological weight (*de suyo* / in their own right), rather than mere mental impressions;\n  - **Estructura dinámica de la realidad (1968)**: Reality is not a static collection of substances, but a dynamic, open-ended structural unfolding of being.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Xavier Zubiri culminó la metafísica hispánica con «Inteligencia sentiente», demostrando que el ser humano aprehende la realidad primordialmente en su carácter «de suyo».",
          "reading": "Ksa-vyeer Thoo-bee-ree kool-mee-no...",
          "translation": "Xavier Zubiri culminated Hispanic metaphysics with \"Sentient Intelligence,\" demonstrating that human beings apprehend reality primordially in its \"de suyo\" character."
        }
      ],
      "mnemonics": [
        "Xavier Zubiri (Pinnacle of Rigorous Hispanic Metaphysics)! Inteligencia sentiente 1980 (Sensing and intellection are a single unified act)! Aprehensión primordial de la realidad! Realidad «de suyo»! Dynamic reality structure!"
      ],
      "culturalNotes": [
        "Zubiri taught independent private public seminar courses in Madrid attended by Spain's greatest doctors, mathematicians, and historians (including Severo Ochoa and Pedro Laín Entralgo)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master philosopher authored the landmark trilogy \"Inteligencia sentiente\" (1980), uniting sensing and intellect into a single primordial act?",
          "options": [
            "Xavier Zubiri (145.1)",
            "José Ortega y Gasset (145.2)",
            "Gustavo Bueno (145.3)",
            "Julián Marías (145.4)"
          ],
          "answerIndex": 0,
          "explanation": "Xavier Zubiri."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What Spanish philosophical term was utilized by Xavier Zubiri to denote the autonomous ontological reality of things \"in their own right\"?",
          "options": [
            "A priori (145.1)",
            "En sí (145.2)",
            "Dasein (145.3)",
            "De suyo (In its own right / Autonomous reality) (145.4)"
          ],
          "answerIndex": 3,
          "explanation": "De suyo."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Zubiri demonstrated that sentient intellection directly grasps physical things not as mere subjective sensations, but as primordial reality in its own ontological structure.\"",
          "options": [
            "Zubiri demostró que la intelección sentiente aprehende directamente las cosas físicas no como meras sensaciones subjetivas, sino como realidad primordial en su propia estructura ontológica.",
            "La inteligencia sentiente es un software de inteligencia artificial.",
            "Zubiri rechazó el estudio de la física y el griego antiguo.",
            "Xavier Zubiri fue un fabricante de muebles rústicos."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Zubiri metaphysical analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Under which German phenomenological titans did Xavier Zubiri study in Freiburg during the late 1920s before developing his own noology?",
          "options": [
            "Arthur Schopenhauer y Friedrich Nietzsche",
            "Karl Marx y Friedrich Engels",
            "Immanuel Kant y G.W.F. Hegel",
            "Edmund Husserl y Martin Heidegger"
          ],
          "answerIndex": 3,
          "explanation": "Edmund Husserl y Martin Heidegger.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Sentient Intelligence & Dynamic Reality"
  },
  "es-u30-l1": {
    "id": "es-u30-l1",
    "unit": "es-u30",
    "level": "C1",
    "objective": "Surrealist Subversion & The Severed Eye: Luis Buñuel (Luis Buñuel - Un Chien Andalou 1929 con Salvador Dalí - el ojo cortado por la navaja, Viridiana 1961 - Palma de Oro de Cannes y la parodia de la Última Cena, El discreto encanto de la burguesía Oscar 1972, Los olvidados 1950 en México).",
    "presentation": {
      "explanation": "Luis Buñuel (1900–1983 - Calanda, Teruel & Mexico City/Paris) and the supreme summit of surrealist and subversive world cinema:\n- **Luis Buñuel Portolés**:\n  - The father of cinematic surrealism; member of the Residencia de Estudiantes (with Federico García Lorca and Salvador Dalí); directed 32 masterpieces challenging bourgeois hypocrisy, religious dogmatism, and moral complacency.\n- Monumental Cinematic Landmarks:\n  - **Un Chien Andalou (An Andalusian Dog - 1929 - with Salvador Dalí)**:\n    - The foundational shock of avant-garde cinema; opens with the iconic image of a razor slicing across a woman's eyeball as a thin cloud cuts across the full moon, declaring war on conventional bourgeois narrative logic;\n  - **Viridiana (1961 - Starring Silvia Pinal & Fernando Rey)**:\n    - The only Spanish film to win the **Palma de Oro (Palme d'Or) at the Cannes Film Festival**;\n    - Caused an international scandal with its subversive scene of beggars recreating Leonardo da Vinci's *The Last Supper* to the triumphant chorus of Handel's *Messiah*, banned by the Franco regime until 1977;\n  - **Los olvidados (The Young and the Damned - Mexico, 1950 - UNESCO Memory of the World)**: Raw social realism depicting juvenile street crime in Mexico City;\n  - **El discreto encanto de la burguesía (The Discreet Charm of the Bourgeoisie - 1972 - Oscar for Best Foreign Language Film)**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Luis Buñuel revolucionó el cine mundial con el ojo cortado de «Un perro andaluz» y la Palma de Oro de «Viridiana», desafiando toda convención burguesa.",
          "reading": "Loo-ees Boon-ywel re-vo-loo-syo-no...",
          "translation": "Luis Bunuel revolutionized world cinema with the sliced eye of \"An Andalusian Dog\" and the Palme d'Or of \"Viridiana,\" defying every bourgeois convention."
        }
      ],
      "mnemonics": [
        "Luis Buñuel (Father of Cinematic Surrealism from Calanda)! Un Chien Andalou 1929 (Razor slicing eyeball with Dalí)! Viridiana 1961 (Cannes Palme d'Or & Last Supper parody)! Los olvidados (UNESCO 1950)! Oscar 1972!"
      ],
      "culturalNotes": [
        "When Un Chien Andalou premiered in Paris in 1929, Buñuel put stones in his pockets to throw at the audience in case of a riot, but the audience applauded ecstatically instead."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish surrealist filmmaker directed \"Un Chien Andalou\" (1929) with Salvador Dalí and won the Cannes Palme d'Or for \"Viridiana\" (1961)?",
          "options": [
            "Pedro Almodóvar (146.1)",
            "Carlos Saura (146.2)",
            "Víctor Erice (146.3)",
            "Luis Buñuel (146.4)"
          ],
          "answerIndex": 3,
          "explanation": "Luis Buñuel."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous classical painting by Leonardo da Vinci was subversively parodied by beggars in Buñuel's 1961 masterpiece \"Viridiana\"?",
          "options": [
            "La Última Cena (The Last Supper) (146.1)",
            "La Gioconda (Mona Lisa) (146.2)",
            "La Anunciación (146.3)",
            "El Hombre de Vitruvio (146.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Última Cena (The Last Supper)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Bunuel deployed surrealist montage and subconscious oneiric logic to expose the moral corruption and repressed desires of bourgeois institutions.\"",
          "options": [
            "Viridiana es un documental sobre submarinos nucleares.",
            "Luis Buñuel era un cantante de ópera italiano del siglo XVIII.",
            "Un perro andaluz fue filmado en Hollywood en 1990.",
            "Buñuel desplegó el montaje surrealista y la lógica onírica subconsciente para exponer la corrupción moral y los deseos reprimidos de las instituciones burguesas."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Buñuel analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What Mexican 1950 neo-realist masterpiece directed by Buñuel is inscribed in UNESCO's Memory of the World Register for its raw portrayal of marginalized street youth?",
          "options": [
            "Simón del desierto",
            "Nazarín",
            "Los olvidados",
            "El ángel exterminador"
          ],
          "answerIndex": 2,
          "explanation": "Los olvidados.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Surrealist Subversion & The Severed Eye"
  },
  "es-u30-l2": {
    "id": "es-u30-l2",
    "unit": "es-u30",
    "level": "C1",
    "objective": "Melodrama, Saturated Primary Colors & Transgression: Pedro Almodóvar (Pedro Almodóvar - La Movida Madrileña, Todo sobre mi madre Oscar 1999, Hable con ella Oscar 2002 al Mejor Guion, Mujeres al borde de un ataque de nervios 1988, la estética camp, colores primarios saturados y la hermandad femenina).",
    "presentation": {
      "explanation": "Pedro Almodóvar (1949–present - Calzada de Calatrava, Ciudad Real & Madrid) and the post-Franco cultural explosion:\n- **Pedro Almodóvar Caballero**:\n  - The defining cinematic auteur of democratic Spain; emerged from the underground rock and counterculture movement **La Movida Madrileña** in the late 1970s; transformed Spanish cinema with his production company El Deseo (with brother Agustín).\n- Stylistic Inventions & Aesthetic Signatures:\n  - **Saturated Visual Palette (Colores Almodóvar)**: Explosive pop primary reds, yellows, and deep blues inspired by Douglas Sirk melodramas and Pop Art;\n  - **The Supremacy of Female Solidarity**: Complex, resilient, eccentric women supporting one another through grief and comedy (his \"Chicas Almodóvar\": Carmen Maura, Penélope Cruz, Rossy de Palma, Marisa Paredes, Chus Lampreave);\n- Landmark Masterpieces:\n  - **Mujeres al borde de un ataque de nervios (Women on the Verge of a Nervous Breakdown - 1988)**: Screwball comedy on a Madrid penthouse terrace with spiked gazpacho;\n  - **Todo sobre mi madre (All About My Mother - 1999 - Oscar for Best Foreign Language Film)**: Tragicomic tribute to maternal devotion, loss, and theatrical performance;\n  - **Hable con ella (Talk to Her - 2002 - Oscar for Best Original Screenplay & BAFTA)**: Sublime meditation on loneliness, coma, dance (Pina Bausch), and silence;\n  - **Volver (2006)** & **Dolor y gloria (Pain and Glory - 2019)**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Pedro Almodóvar conquistó dos premios Óscar con «Todo sobre mi madre» y «Hable con ella», celebrando el melodrama y la hermandad femenina.",
          "reading": "Pe-dro Al-mo-do-var kon-kees-to...",
          "translation": "Pedro Almodovar won two Academy Awards with \"All About My Mother\" and \"Talk to Her,\" celebrating melodrama and female solidarity."
        }
      ],
      "mnemonics": [
        "Pedro Almodóvar (La Movida Madrileña & El Deseo)! Colores primarios saturados (Almodóvar Red)! Todo sobre mi madre 1999 (Oscar)! Hable con ella 2002 (Oscar Best Screenplay)! Las Chicas Almodóvar!"
      ],
      "culturalNotes": [
        "Almodóvar won the Golden Lion for Lifetime Achievement at the Venice Film Festival in 2019, and the Golden Lion for Best Film for *The Room Next Door* in 2024."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish director emerged from La Movida Madrileña and won Academy Awards for \"Todo sobre mi madre\" and \"Hable con ella\"?",
          "options": [
            "Pedro Almodóvar (147.1)",
            "Álex de la Iglesia (147.2)",
            "Bigas Luna (147.3)",
            "Alejandro Amenábar (147.4)"
          ],
          "answerIndex": 0,
          "explanation": "Pedro Almodóvar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What legendary 1988 screwball comedy by Almodóvar, set on a Madrid penthouse terrace with spiked gazpacho, launched his international stardom?",
          "options": [
            "Mujeres al borde de un ataque de nervios (147.1)",
            "Laberinto de pasiones (147.2)",
            "Kika (147.3)",
            "Átame! (147.4)"
          ],
          "answerIndex": 0,
          "explanation": "Mujeres al borde de un ataque de nervios."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Almodovar synthesized Hollywood melodrama with transgressive camp aesthetics, using saturated primary reds and female solidarity to redefine post-dictatorship Spanish identity.\"",
          "options": [
            "Todo sobre mi madre fue filmada en blanco y negro en 1920.",
            "Pedro Almodóvar es un futbolista profesional del Real Madrid.",
            "Almodóvar sintetizó el melodrama de Hollywood con la estética camp transgresora, utilizando rojos primarios saturados y la solidaridad femenina para redefinir la identidad española posdictadura.",
            "Hable con ella es un manual de entrenamiento canino."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Almodóvar analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "For which 2002 philosophical melodrama, featuring dances by Pina Bausch, did Pedro Almodóvar win the Academy Award for Best Original Screenplay?",
          "options": [
            "Carne trémula",
            "Hable con ella (Talk to Her)",
            "La mala educación",
            "Los abrazos rotos"
          ],
          "answerIndex": 1,
          "explanation": "Hable con ella.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Melodrama, Saturated Primary Colors & Transgression"
  },
  "es-u30-l3": {
    "id": "es-u30-l3",
    "unit": "es-u30",
    "level": "C1",
    "objective": "The Poetry of Light & The Child's Gaze: Víctor Erice (Víctor Erice - El espíritu de la colmena 1973 - Concha de Oro de San Sebastián, la mirada de Ana Torrent y el mito de Frankenstein en la posguerra castellana, El sur 1983, El sol del membrillo 1992 con el pintor Antonio López).",
    "presentation": {
      "explanation": "Víctor Erice (1940–present - Karrantza, Biscay & Madrid) and the supreme poetic austerity of Spanish cinema:\n- **Víctor Erice**:\n  - The master of cinematic silence, golden hour natural light, and the interior landscape of memory; directed only four feature films across fifty years, each considered a masterpiece of world cinema.\n- Monumental Masterpieces:\n  - **El espíritu de la colmena (The Spirit of the Beehive - 1973 - Concha de Oro at San Sebastián)**:\n    - The undisputed crowning masterpiece of Spanish cinema;\n    - Set in an isolated, desolate Castilian village in 1940 immediately following the Spanish Civil War;\n    - **The Child's Gaze (La mirada de Ana Torrent)**: Six-year-old Ana watches James Whale's 1931 *Frankenstein* in a traveling cinema van, embarking on a quiet poetic quest to find the \"monster spirit\" across barren wheat fields, befriending a wounded fugitive republican soldier;\n    - Cinematographer Luis Cuadrado bathed the interiors in golden amber honey hues (*color de miel*) through hexagonal amber windowpanes mimicking a beehive;\n  - **El sur (The South - 1983)**: Atmospheric mystery of a daughter deciphering the hidden past of her pendular diviner father;\n  - **El sol del membrillo (Dream of Light - 1992 - Cannes Jury Prize)**: Documentary following realist painter **Antonio López** attempting to paint the fleeting sunlight through quince tree leaves before autumn rain arrives;\n  - **Cerrar los ojos (Close Your Eyes - 2023)**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Víctor Erice creó la cumbre poética del cine español en «El espíritu de la colmena» con la mirada inolvidable de Ana Torrent y la luz dorada de la miel.",
          "reading": "Veek-tor E-ree-the kre-o la koom-bre...",
          "translation": "Victor Erice created the poetic pinnacle of Spanish cinema in \"The Spirit of the Beehive\" with Ana Torrent's unforgettable gaze and golden honey light."
        }
      ],
      "mnemonics": [
        "Víctor Erice (Master of Poetic Silence & Amber Light)! El espíritu de la colmena 1973 (Ana Torrent & Frankenstein in post-Civil War Castile - Concha de Oro)! El sur 1983! El sol del membrillo 1992 with painter Antonio López!"
      ],
      "culturalNotes": [
        "The hexagonal yellow glass windows of the house in *The Spirit of the Beehive* were designed to make the Francoist post-war village feel like an enclosed, suffocating beehive of silent worker bees."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish director created the poetic post-war masterpiece \"The Spirit of the Beehive\" (1973) starring child actress Ana Torrent?",
          "options": [
            "Víctor Erice (148.1)",
            "Carlos Saura (148.2)",
            "Luis García Berlanga (148.3)",
            "Fernando Fernán Gómez (148.4)"
          ],
          "answerIndex": 0,
          "explanation": "Víctor Erice."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What 1992 Cannes award-winning film by Erice documents realist painter Antonio López attempting to capture fleeting sunlight on a quince tree?",
          "options": [
            "El sol del membrillo (Dream of Light) (148.1)",
            "Cerrar los ojos (148.2)",
            "La colmena (148.3)",
            "El sur (148.4)"
          ],
          "answerIndex": 0,
          "explanation": "El sol del membrillo (Dream of Light)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Erice deployed golden amber natural light and prolonged meditative silence to construct an allegorical meditation on childhood innocence and post-war trauma.\"",
          "options": [
            "Víctor Erice es un director de películas de carreras de coches.",
            "Erice desplegó luz natural ámbar dorada y prolongados silencios meditativos para construir una meditación alegórica sobre la inocencia infantil y el trauma de la posguerra.",
            "Antonio López es un músico de rock pesado.",
            "El espíritu de la colmena fue filmada en un estudio de Tokio."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Víctor Erice analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What iconic 1931 classic monster film, projected in a village hall, sparks young Ana's metaphysical quest in *The Spirit of the Beehive*?",
          "options": [
            "Frankenstein (de James Whale)",
            "La momia",
            "El hombre lobo",
            "Drácula"
          ],
          "answerIndex": 0,
          "explanation": "Frankenstein.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Poetry of Light & The Child's Gaze"
  },
  "es-u30-l4": {
    "id": "es-u30-l4",
    "unit": "es-u30",
    "level": "C2",
    "objective": "Flamenco Rhythms & Metaphorical Resistance: Carlos Saura (Carlos Saura - Cría cuervos 1976 - Premio del Jurado en Cannes y la canción «Porque te vas» de Jeanette, la Trilogía Flamenca con Antonio Gades: Bodas de sangre 1981, Carmen 1983 y El amor brujo, La caza 1966 - Oso de Plata de Berlín).",
    "presentation": {
      "explanation": "Carlos Saura (1932–2023 - Huesca & Madrid) and the synthesis of political allegory, flamenco rhythm, and memory:\n- **Carlos Saura Atarés**:\n  - Photographer, writer, and filmmaker; mentored by Luis Buñuel; produced groundbreaking allegorical cinema during the Franco censorship era with producer Elías Querejeta.\n- Landmark Masterpieces & Cycles:\n  - **La caza (The Hunt - 1966 - Silver Bear for Best Director at Berlin)**: A rabbit hunt under the scorching Castilian sun among three Civil War veterans turns into a violent psychological bloodbath, serving as a chilling metaphor for fratricidal Spanish violence;\n  - **Cría cuervos (Raise Ravens - 1976 - Cannes Grand Prix Special du Jury)**:\n    - Starred Ana Torrent and Geraldine Chaplin;\n    - Captured the dying atmosphere of the Franco regime through the eyes of an orphaned girl who believes she possesses a fatal poisonous powder; propelled Jeanette's pop song **«Porque te vas»** into a global anthem of melancholic childhood;\n  - **The Monumental Flamenco Dance Trilogy (with dancer Antonio Gades)**:\n    - **Bodas de sangre (Blood Wedding - 1981)** based on Lorca;\n    - **Carmen (1983 - BAFTA for Best Foreign Film & Cannes Artistic Contribution)**: Rehearsal studio transforming into passionate flamenco drama;\n    - **El amor brujo (1986)**;\n  - **Flamenco (1995)** & **Tango (1998 - Oscar Nominee)** with cinematographer Vittorio Storaro.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Carlos Saura unió la alegoría política y el arte jondo en «Cría cuervos» y su Trilogía Flamenca con Antonio Gades, ganando el Gran Premio de Cannes.",
          "reading": "Kar-los Sow-ra oo-nyo la a-le-go-ree-a...",
          "translation": "Carlos Saura united political allegory and flamenco art in \"Cría cuervos\" and his Flamenco Trilogy with Antonio Gades, winning the Cannes Grand Prix."
        }
      ],
      "mnemonics": [
        "Carlos Saura (Huesca master & Buñuel protégé)! La caza 1966 (Berlin Silver Bear)! Cría cuervos 1976 (Cannes Jury Prize & «Porque te vas»)! Flamenco Trilogy with Antonio Gades (Bodas de sangre, Carmen, El amor brujo)! Vittorio Storaro lighting!"
      ],
      "culturalNotes": [
        "Saura was a world-class photographer before entering film, hand-sketching and photographing every scene storyboard with exact lighting angles."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Spanish director filmed the 1976 Cannes award-winner \"Cría cuervos\" and created the Flamenco film trilogy with Antonio Gades?",
          "options": [
            "Jaime Chávarri (149.1)",
            "Luis Buñuel (149.2)",
            "Carlos Saura (149.3)",
            "Víctor Erice (149.4)"
          ],
          "answerIndex": 2,
          "explanation": "Carlos Saura."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous song performed by Jeanette became the global melancholic musical theme of Carlos Saura's 1976 film \"Cría cuervos\"?",
          "options": [
            "«Alfonsina y el mar» (149.1)",
            "«Volver» (149.2)",
            "«Porque te vas» (149.3)",
            "«Bésame mucho» (149.4)"
          ],
          "answerIndex": 2,
          "explanation": "«Porque te vas»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Saura transformed cinematic flamenco into a dynamic theatrical laboratory, merging Lorca's dramatic poetry with Vittorio Storaro's chromatic lighting choreography.\"",
          "options": [
            "Saura transformó el flamenco cinematográfico en un laboratorio teatral dinámico, fusionando la poesía dramática de Lorca con la coreografía de iluminación cromática de Vittorio Storaro.",
            "La caza es una película de animación sobre osos polares.",
            "Bodas de sangre fue filmada en un submarino en el Ártico.",
            "Carlos Saura era un jugador de béisbol en Cuba."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Carlos Saura analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Spanish flamenco dancer and choreographer collaborated with Carlos Saura on *Bodas de sangre*, *Carmen*, and *El amor brujo*?",
          "options": [
            "Farruquito",
            "Joaquín Cortés",
            "Antonio Canales",
            "Antonio Gades"
          ],
          "answerIndex": 3,
          "explanation": "Antonio Gades.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Flamenco Rhythms & Metaphorical Resistance"
  },
  "es-u30-l5": {
    "id": "es-u30-l5",
    "unit": "es-u30",
    "level": "C2",
    "objective": "C2 synthesis on Genre Reinvention, Psychological Realism & Fantasy: Alejandro Amenábar & Guillermo del Toro (Alejandro Amenábar - Tesis 1996, Abre los ojos 1997, Los otros 2001, Mar adentro Oscar 2004 con Javier Bardem; Guillermo del Toro - El laberinto del fauno 2006 - 3 premios Óscar, la alegoría fantástica de la posguerra española y el monstruo como guardián ético).",
    "presentation": {
      "explanation": "Alejandro Amenábar and Guillermo del Toro: The global reinvention of Spanish genre cinema and historical memory:\n- **Alejandro Amenábar (1972–present - Santiago de Chile & Madrid)**:\n  - Composer, screenwriter, and director; won 9 Goya Awards and the **Academy Award for Best Foreign Language Film (2004)**;\n  - **Tesis (Thesis - 1996)**: Directorial debut at age 23; brilliant thriller exploring snuff films and visual voyeurism in the Faculty of Information Sciences at Complutense University;\n  - **Abre los ojos (Open Your Eyes - 1997)**: Mind-bending existential sci-fi exploring cryonics, virtual reality, and identity (remade as *Vanilla Sky*);\n  - **The Others (Los otros - 2001 - Starring Nicole Kidman)**: Pure psychological gothic horror relying on candlelight and creaking floorboards rather than digital gore;\n  - **Mar adentro (The Sea Inside - 2004)**: Moving ethical drama starring **Javier Bardem** as quadriplegic poet Ramón Sampedro fighting for dignity and euthanasia;\n- **Guillermo del Toro & Pan's Labyrinth (El laberinto del fauno - 2006 - 3 Academy Awards)**:\n  - The crowning masterpiece of dark fantasy; set in 1944 Francoist Spain;\n  - Young Ofelia navigates an ancient mythical labyrinth ruled by the Fauno and the terrifying **Pale Man (El Hombre Pálido)** with eyes in the palms of his hands, using dark fairy tale fantasy as moral resistance against the real fascist cruelty of Captain Vidal.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Amenábar con «Mar adentro» y Del Toro con «El laberinto del fauno» transformaron el cine en lengua española en obras maestras de resonancia universal.",
          "reading": "A-me-na-bar kon Mar a-dyen-tro...",
          "translation": "Amenábar with \"The Sea Inside\" and Del Toro with \"Pan's Labyrinth\" transformed Spanish-language cinema into masterpieces of universal resonance."
        }
      ],
      "mnemonics": [
        "Alejandro Amenábar (Tesis, Abre los ojos, Los otros, Mar adentro Oscar 2004 with Javier Bardem)! Guillermo del Toro (El laberinto del fauno 2006 - 3 Oscars)! Pale Man with eyes in hands! Fantasy as moral resistance!"
      ],
      "culturalNotes": [
        "Amenábar composed the complete orchestral musical scores for all his major films himself, including *Tesis*, *The Others*, and *Mar adentro*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Spanish director won the Academy Award for \"Mar adentro\" (2004) and directed the iconic psychological thriller \"Tesis\" (1996)?",
          "options": [
            "Alejandro Amenábar (150.1)",
            "Juan Antonio Bayona (150.2)",
            "Jaume Balagueró (150.3)",
            "Rodrigo Sorogoyen (150.4)"
          ],
          "answerIndex": 0,
          "explanation": "Alejandro Amenábar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which acclaimed 2006 dark fantasy film, set in 1944 post-Civil War Spain, was directed by Guillermo del Toro and won three Academy Awards?",
          "options": [
            "El espinazo del diablo (150.1)",
            "La forma del agua (150.2)",
            "Cronos (150.3)",
            "El laberinto del fauno (Pan's Labyrinth) (150.4)"
          ],
          "answerIndex": 3,
          "explanation": "El laberinto del fauno (Pan's Labyrinth)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Pan's Labyrinth demonstrates that dark mythological fantasy serves as a profound ethical sanctuary against authoritarian brutality and fascist dehumanization.\"",
          "options": [
            "Alejandro Amenábar es un piloto de carreras de Fórmula 1.",
            "El laberinto del fauno se filmó en el desierto de Australia.",
            "Mar adentro es una comedia de enredos ambientada en Nueva York.",
            "El laberinto del fauno demuestra que la fantasía mitológica oscura sirve como un profundo santuario ético contra la brutalidad autoritaria y la deshumanización fascista."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Del Toro and Amenábar analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What terrifying creature with eyes embedded in the palms of its hands was created by Guillermo del Toro in *Pan's Labyrinth*?",
          "options": [
            "El Minotauro",
            "El Cíclope",
            "El Hombre Pálido (The Pale Man)",
            "El Fauno"
          ],
          "answerIndex": 2,
          "explanation": "El Hombre Pálido (The Pale Man).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Genre Reinvention, Psychological Realism & Fantasy"
  },
  "es-u31-l1": {
    "id": "es-u31-l1",
    "unit": "es-u31",
    "level": "C1",
    "objective": "Molecular Deconstruction & The Culinary Avant-Garde: Ferran Adrià (Ferran Adrià y elBulli en Cala Montjoi, Roses; la esferificación directa e inversa con alginato sódico y cloruro cálcico, las espumas de sifón, la deconstrucción culinaria, las 3 estrellas Michelin y la revolución de elBulli1846).",
    "presentation": {
      "explanation": "Ferran Adrià (1962–present - L'Hospitalet de Llobregat & Cala Montjoi, Roses, Girona) and the global revolution of avant-garde gastronomy:\n- **Ferran Adrià Acosta**:\n  - The most influential chef in modern history; transformed his restaurant **elBulli** in Cala Montjoi (Costa Brava) into the epicenter of global culinary creativity; voted **#1 Best Restaurant in the World** a record 5 times by *The World's 50 Best Restaurants*.\n- Culinary Inventions & Scientific Breakthroughs:\n  - **Culinary Deconstruction (Deconstrucción)**:\n    - Taking a classic traditional dish (e.g., *Tortilla de patatas deconstruida*), isolating its essential ingredients (warm onion purée, egg yolk sabayon, potato foam served in a martini glass), and transforming all textures and temperatures while preserving the authentic memory of the flavor on the palate;\n  - **Spherification (Esferificación direct and inverse)**:\n    - Utilizing sodium alginate (*alginato sódico*) and calcium bath (*gluconolactato cálcico*) to encase liquids (liquid olives, melon caviar) inside an ultra-thin, imperceptible gelatinous membrane that explodes in the mouth;\n  - **Siphon Foams (Espumas con sifón N2O)**: Creating airy, fat-free aromatic emulsions without heavy cream or egg whites;\n  - Closed elBulli at its absolute peak in 2011 to establish the **elBulliFoundation** and the museum-lab **elBulli1846** to catalog the DNA of human creativity (*Sapiens methodology*).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Ferran Adrià transformó la gastronomía mundial en elBulli mediante la esferificación, las espumas y la deconstrucción culinaria.",
          "reading": "Fe-rran A-drya trans-for-mo...",
          "translation": "Ferran Adria transformed world gastronomy at elBulli through spherification, culinary foams, and deconstruction."
        }
      ],
      "mnemonics": [
        "Ferran Adrià (elBulli in Cala Montjoi & 3 Michelin Stars)! Culinary Deconstruction! Spherification (Liquid olives in alginate)! N2O Siphon foams! elBulli1846 & Sapiens methodology!"
      ],
      "culturalNotes": [
        "elBulli operated only six months each year, closing for the remaining six months to dedicate 100% of its staff and budget to pure scientific R&D inside the elBulli workshop in Barcelona."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Catalan chef revolutionized global avant-garde cuisine at elBulli, inventing culinary spherification and siphon foams?",
          "options": [
            "Joan Roca (151.1)",
            "Martín Berasategui (151.2)",
            "Juan Mari Arzak (151.3)",
            "Ferran Adrià (151.4)"
          ],
          "answerIndex": 3,
          "explanation": "Ferran Adrià."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What chemical technique, popularized by Ferran Adrià using sodium alginate and calcium bath, encapsulates liquid into thin bursting spheres?",
          "options": [
            "Esferificación (Spherification) (151.1)",
            "Liofilización (151.2)",
            "Pasteurización (151.3)",
            "Fermentación láctica (151.4)"
          ],
          "answerIndex": 0,
          "explanation": "Esferificación (Spherification)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Adrià's deconstructive philosophy disassembled traditional recipes into contrasting physical states and temperatures while preserving their primordial olfactory essence.\"",
          "options": [
            "La esferificación se inventó en la antigua Roma.",
            "Ferran Adrià era un capitán de barco en Valencia.",
            "La filosofía deconstructiva de Adrià desensambló las recetas tradicionales en estados físicos y temperaturas contrastantes mientras preservaba su esencia olfativa primordial.",
            "elBulli era una fábrica de conservas de pescado."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Ferran Adrià analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which scenic cove on the Costa Brava in Catalonia was the legendary 3-star Michelin restaurant *elBulli* located?",
          "options": [
            "Cala d'Or",
            "Cala Montjoi (Roses, Girona)",
            "Cala Galdana",
            "Cala Fornells"
          ],
          "answerIndex": 1,
          "explanation": "Cala Montjoi (Roses, Girona).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Molecular Deconstruction & The Culinary Avant-Garde"
  },
  "es-u31-l2": {
    "id": "es-u31-l2",
    "unit": "es-u31",
    "level": "C1",
    "objective": "Jamón Ibérico de Bellota & The Dehesa Terroir (Jamón 100% Ibérico de Bellota, el ecosistema de la Dehesa de encinas y alcornoques, la montanera (octubre a febrero), el ácido oleico, las Denominaciones de Origen Protegidas: Jabugo y Dehesa de Extremadura, la curación natural en bodegas de 36 a 48 meses y el corte a cuchillo).",
    "presentation": {
      "explanation": "Jamón Ibérico de Bellota and the unique agro-ecological sanctuary of the Spanish Dehesa:\n- **Jamón 100% Ibérico de Bellota (Etiqueta Negra / Pata Negra)**:\n  - The jewel of Spanish gastronomy; produced exclusively from pure-bred black Iberian pigs (*cerdo ibérico de pura raza*);\n- The Terroir & Lifecycle:\n  - **The Dehesa Ecosystem (La Dehesa)**: Millennia-old human-coexisting Mediterranean oak savannah of southwest Spain (Extremadura, Huelva, Córdoba, Salamanca);\n  - **La Montanera (The Free-Range Acorn Foraging Season)**:\n    - From October to February, free-roaming Iberian pigs walk 10–15 km daily, feeding exclusively on sweet acorns (*bellotas*) from holm oaks (*encinas*) and cork oaks (*alcornoques*) and wild aromatic herbs;\n    - Pigs double their weight, converting acorn nutrients into heart-healthy **monounsaturated oleic acid (ácido oleico)**—the same beneficial lipid found in extra virgin olive oil (*\"olives on four legs\"*);\n  - **Natural Artisanal Curing (Curación natural)**:\n    - Aged slowly in natural microclimate cellars in mountain towns (Jabugo, Guijuelo) for **36 to 48 months**;\n  - **Master Slicing (El corte a cuchillo)**: Translucent, paper-thin bite-sized slices (*lonchas finas*) sweating aromatic room-temperature fat with white tyrosine crystals confirming long natural aging.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El Jamón 100% Ibérico de Bellota madura durante cuatro años en bodegas naturales gracias a la montanera y los robles de la Dehesa.",
          "reading": "El Ha-mon syen por syen-to...",
          "translation": "100% Iberian Bellota ham matures for four years in natural cellars thanks to the montanera acorn season and the Dehesa oaks."
        }
      ],
      "mnemonics": [
        "Jamón 100% Ibérico de Bellota (Etiqueta Negra)! The Dehesa oak savannah! La Montanera (Acorn foraging from Oct to Feb)! Ácido oleico (Heart-healthy fat)! 36-48 months natural curing! Jabugo & Guijuelo! Translucent lonchas!"
      ],
      "culturalNotes": [
        "The highest official quality tier in Spain is marked by the Black Label (*Precinto Negro*), guaranteeing 100% pure Iberian genetics and exclusive acorn-feeding in the wild Dehesa."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What exclusive natural ecosystem of oak savannahs in southwestern Spain provides the acorns (bellotas) for 100% Iberian ham?",
          "options": [
            "La Dehesa (152.1)",
            "La Taiga (152.2)",
            "La Selva (152.3)",
            "La Pampa (152.4)"
          ],
          "answerIndex": 0,
          "explanation": "La Dehesa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the name of the winter free-range foraging period (October to February) when Iberian pigs feed on falling acorns in the Dehesa?",
          "options": [
            "La montanera (152.1)",
            "La vendimia (152.2)",
            "La trilla (152.3)",
            "La siega (152.4)"
          ],
          "answerIndex": 0,
          "explanation": "La montanera."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The exclusive acorn diet during the montanera infuses the Iberian ham with monounsaturated oleic acid, creating silky marbling that melts at ambient room temperature.\"",
          "options": [
            "El jamón ibérico se produce en granjas industriales cerradas en Escocia.",
            "La dieta exclusiva de bellotas durante la montanera infunde al jamón ibérico ácido oleico monoinsaturado, creando un veteado sedoso que se funde a temperatura ambiente.",
            "La montanera es una fiesta de fuegos artificiales en Valencia.",
            "Los cerdos ibéricos se alimentan únicamente de maíz importado."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Jamón Ibérico analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What official colored label (*precinto*) legally guarantees 100% pure Iberian genetics and acorn-fed free-range Dehesa maturation under Spanish law?",
          "options": [
            "Precinto Negro (Black Label)",
            "Precinto Rojo",
            "Precinto Verde",
            "Precinto Blanco"
          ],
          "answerIndex": 0,
          "explanation": "Precinto Negro (Black Label).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 31, Lesson 2: Foundational & Structural Mastery (El Jamón 100% Ibérico de Bello)"
  },
  "es-u31-l3": {
    "id": "es-u31-l3",
    "unit": "es-u31",
    "level": "C1",
    "objective": "The Ritual of Paella & The Rice Terroir of Valencia (La Paella Valenciana tradicional: el arroz Bomba y Senia de la Albufera de Valencia, el azafrán en hebra, el garrofó y la judía ferradura, el sofrito, la leña de naranjo y el arte del socarrat crujiente).",
    "presentation": {
      "explanation": "The ancestral ritual and agricultural terroir of authentic Valencian Paella:\n- **Paella Valenciana Tradicional**:\n  - Declared *Bien de Interés Cultural* (Asset of Cultural Interest);\n  - Born in the 18th century among peasant farmers and fishermen around the freshwater lagoon of **L'Albufera de Valencia**;\n- The Canonical Ingredients & Technical Physics:\n  - **The Rice (Arroz de la Albufera - Arroz Bomba / Senia)**: Short, round grains with extraordinary starch absorption capacity, absorbing up to 3 times its volume in savory broth without bursting;\n  - **The Canonical Recipe**: Olive oil, chicken, rabbit (*conejo*), green flat beans (*ferradura / bajoqueta*), giant white lima beans (**garrofó**), crushed fresh tomato, water/broth, hand-ground toasted saffron threads (*azafrán en hebra*), a sprig of fresh rosemary, and salt (never chorizo, peas, or onion in authentic Valencian tradition!);\n  - **Wood Fire Cooking (Leña de naranjo)**: Cooked over fragrant orange tree wood fire, controlling heat zones from outer rim to center;\n  - **El Socarrat (The Golden Crust)**: The ultimate culinary prize: at the final minute of cooking, the heat caramelizes the bottom layer of starch and savory fats against the steel pan into an ultra-crispy, intensely aromatic golden crust.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La auténtica paella valenciana se cocina con arroz bomba de la Albufera, garrofó, azafrán y el crujiente e inigualable socarrat.",
          "reading": "La ow-ten-tee-ka pa-e-lya va-len-sya-na...",
          "translation": "Authentic Valencian paella is cooked with Bomba rice from the Albufera, garrofo beans, saffron, and the incomparable crispy socarrat."
        }
      ],
      "mnemonics": [
        "Paella Valenciana! Albufera rice (Arroz Bomba)! Garrofó giant lima beans & ferradura! Saffron threads (Azafrán)! Orange wood fire (Leña de naranjo)! El Socarrat (Crispy caramelized bottom crust)!"
      ],
      "culturalNotes": [
        "In Valencia, paella is eaten at Sunday lunch directly from the wide steel pan using personal carved wooden spoons, working strictly inward from one's designated wedge slice."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which scenic freshwater coastal wetland near Valencia produces the world-renowned Bomba rice used for traditional paella?",
          "options": [
            "L'Albufera de Valencia (153.1)",
            "Las Marismas del Guadalquivir (153.2)",
            "El Delta del Ebro (153.3)",
            "Las Tablas de Daimiel (153.4)"
          ],
          "answerIndex": 0,
          "explanation": "L'Albufera de Valencia."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the prized, intensely flavorful caramelized crunchy layer of rice at the bottom of a well-cooked paella called?",
          "options": [
            "El socarrat (153.1)",
            "El caldero (153.2)",
            "La costra (153.3)",
            "El sofrito (153.4)"
          ],
          "answerIndex": 0,
          "explanation": "El socarrat."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Valencian Bomba rice absorbs three times its volume in saffron-infused stock while retaining its structural integrity to produce the prized caramelized socarrat crust.\"",
          "options": [
            "El arroz bomba valenciano absorbe tres veces su volumen en caldo infusionado con azafrán mientras conserva su integridad estructural para producir la preciada costra caramelizada del socarrat.",
            "El socarrat es un tipo de postre helado con fresas.",
            "El garrofó es un tipo de queso curado de oveja.",
            "La paella valenciana se inventó en un restaurante de comida rápida en Londres."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Paella analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which giant white lima bean variety is an indispensable indigenous ingredient of canonical Valencian paella?",
          "options": [
            "El garbanzo",
            "La lenteja pardina",
            "La alubia de Tolosa",
            "El garrofó"
          ],
          "answerIndex": 3,
          "explanation": "El garrofó.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 31, Lesson 3: Foundational & Structural Mastery (La auténtica paella valenciana)"
  },
  "es-u31-l4": {
    "id": "es-u31-l4",
    "unit": "es-u31",
    "level": "C2",
    "objective": "Pintxos, Gastronomic Societies & Basque Culinary Alchemy: Donostia / San Sebastián (Donostia-San Sebastián - la capital mundial de la gastronomía por metro cuadrado; los pintxos de la Parte Vieja, la Gilda de 1946 (guindilla de Ibarra, anchoa del Cantábrico y aceituna manzanilla), las sociedades gastronómicas masculinas (txokos), la sidra natural y el Txakoli con Denominación de Origen Getariako Txakolina).",
    "presentation": {
      "explanation": "Donostia / San Sebastián and the sacred alchemy of Basque culinary culture:\n- **San Sebastián (Donostia, Gipuzkoa)**:\n  - The global culinary capital with more Michelin stars per square meter than any city on Earth; home of the **Basque Culinary Center** (the world's premier gastronomic university);\n- The Icons of Basque Gastronomy:\n  - **The Art of the Pintxo (La Parte Vieja)**: Miniature haute-cuisine masterpieces displayed across bar countertops;\n  - **La Gilda (Invented 1946 at Bar Casa Vallés)**:\n    - The undisputed mother of all pintxos, named after Rita Hayworth's film *Gilda* because it is: **«Verde, salada y un poco picante»** (*\"Green, salty, and a little spicy\"*);\n    - Skewered on a toothpick: a pickled green Ibarra chili pepper (*guindilla de Ibarra*), a salted Cantabrian anchovy fillet (*anchoa del Cantábrico*), and a green Manzanilla olive;\n  - **Las Sociedades Gastronómicas (Txokos)**:\n    - Traditional closed culinary brotherhood clubs where members gather weekly to cook gourmet feasts for one another;\n  - **Oenology of the Coast: Txakoli & Sagardoa**:\n    - **Txakoli (Getariako Txakolina DOP)**: Crisp, slightly sparkling, high-acidity white wine made from *Hondarrabi Zuri* grapes, poured from high above the glass (*escanciado*) to awaken its effervescence;\n    - **Sagardoa (Basque Cider)**: Poured straight from giant wooden barrels (*kupelas*) during the winter *txotx* season.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "San Sebastián celebra la cumbre del pintxo con la Gilda tradicional y el Txakoli escanciado en las tabernas de la Parte Vieja.",
          "reading": "San Se-bas-tyan se-le-bra...",
          "translation": "San Sebastian celebrates the summit of the pintxo with the traditional Gilda and poured Txakoli in the taverns of the Old Town."
        }
      ],
      "mnemonics": [
        "Donostia / San Sebastián (Global Michelin Capital & Basque Culinary Center)! Pintxos in Parte Vieja! La Gilda 1946 (Guindilla, Anchoa, Aceituna - Verde, salada y picante)! Txokos (Gastronomic societies)! Getariako Txakoli poured from height!"
      ],
      "culturalNotes": [
        "The Basque Culinary Center in San Sebastián offers accredited university undergraduate and PhD degrees in Gastronomic Sciences, training the next generation of culinary innovators."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What iconic 1946 Basque pintxo, named after Rita Hayworth's character, combines a guindilla pepper, Cantabrian anchovy, and green olive on a toothpick?",
          "options": [
            "La txistorra (154.1)",
            "El pimiento de Gernika (154.2)",
            "La Gilda (154.3)",
            "El matrimonio (154.4)"
          ],
          "answerIndex": 2,
          "explanation": "La Gilda."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional private Basque cooking clubs, known in Euskara as \"txokos\", form the historical core of communal culinary culture in San Sebastián?",
          "options": [
            "Ateneos literarios (154.1)",
            "Peñas taurinas (154.2)",
            "Sociedades gastronómicas (Txokos) (154.3)",
            "Cofradías marineras (154.4)"
          ],
          "answerIndex": 2,
          "explanation": "Sociedades gastronómicas (Txokos)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Basque pintxo culture elevated tavern bar counters into creative culinary showcases, harmonized with high-altitude poured Txakoli white wine.\"",
          "options": [
            "La Gilda es un tipo de barco de pesca tradicional.",
            "El Txakoli es un licor dulce de café de los Andes.",
            "San Sebastián es una ciudad desértica en el sur de España.",
            "La cultura del pintxo vasco elevó las barras de las tabernas a vitrinas culinarias creativas, armonizadas con vino blanco Txakoli escanciado desde lo alto."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Basque gastronomy analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What crisp, effervescent native white wine grape variety from the coastal Basque Country forms the base of Getariako Txakolina?",
          "options": [
            "Garnacha",
            "Palomino",
            "Hondarrabi Zuri",
            "Tempranillo"
          ],
          "answerIndex": 2,
          "explanation": "Hondarrabi Zuri.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Pintxos, Gastronomic Societies & Basque Culinary Alchemy"
  },
  "es-u31-l5": {
    "id": "es-u31-l5",
    "unit": "es-u31",
    "level": "C2",
    "objective": "C2 synthesis on Spanish Oenology, Terroir & The Solera System: Rioja, Ribera del Duero & Jerez (La uva Tempranillo; clasificaciones de crianza: Roble, Crianza, Reserva y Gran Reserva; el terroir arcillo-calcáreo de Rioja Alta y Alavesa; Vega Sicilia en Ribera del Duero; el sistema dinámico de criaderas y soleras bajo velo de flor en el Marco de Jerez - Fino, Manzanilla, Amontillado y Palo Cortado).",
    "presentation": {
      "explanation": "Spanish Oenology, Terroir and the dynamic aging systems of Rioja, Ribera del Duero, and Jerez:\n- **The Sovereign Red Terroirs: Tempranillo**:\n  - **DOCa Rioja (Rioja Alta, Rioja Alavesa, Rioja Oriental)**:\n    - Atlantic-Mediterranean confluence and calcareous-clay soils (*arcillo-calcáreos*);\n    - Aging Classifications in Oak Barriques (*barricas de roble*):\n      - **Crianza**: Minimum 2 years aging (at least 1 year in oak);\n      - **Reserva**: Minimum 3 years aging (at least 1 year in oak and 6 months in bottle);\n      - **Gran Reserva**: Minimum 5 years aging (at least 2 years in oak and 2 years in bottle) in extraordinary vintage years;\n  - **DO Ribera del Duero**:\n    - High-altitude plateau (750–900 meters) along the Duero River with extreme diurnal temperature swings, producing concentrated, powerful Tempranillo (*Tinta del País*), crowned by legendary estate **Vega Sicilia Único**;\n- **The Fortified Miracles of Jerez (Marco de Jerez DOP)**:\n  - **Albariza Soil**: Dazzling white limestone chalk soil retaining winter rainfall under blazing Andalusian sun;\n  - **Biological Aging under Velo de Flor**: Indigenous flor yeast film protecting wine from oxidation, yielding bone-dry **Fino** and **Manzanilla de Sanlúcar**;\n  - **The Criaderas and Soleras Aging Matrix**: Multi-tiered fractional blending system where young wine moves through stacked oak butts (*botas*), blending across centuries to create **Amontillado**, **Oloroso**, and **Palo Cortado**.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "España atesora la excelencia enológica en el Tempranillo de Rioja y Ribera, y en el sistema único de criaderas y soleras de Jerez.",
          "reading": "Es-pa-nya a-te-so-ra la ek-se-len-sya...",
          "translation": "Spain treasures oenological excellence in the Tempranillo of Rioja and Ribera, and in the unique criaderas and soleras system of Jerez."
        }
      ],
      "mnemonics": [
        "Spanish Oenology! Tempranillo (Tinta del País)! Crianza (2 yrs), Reserva (3 yrs), Gran Reserva (5 yrs)! Ribera del Duero & Vega Sicilia! Jerez Albariza chalk soil! Velo de Flor biological aging! Criaderas & Soleras blending!"
      ],
      "culturalNotes": [
        "The dazzling white albariza soils of Jerez are composed of up to 40% calcium carbonate from prehistoric fossilized marine algae deposited during the Oligocene era."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What indigenous Spanish red grape variety is the undisputed backbone of prestigious DOCa Rioja and DO Ribera del Duero wines?",
          "options": [
            "Tempranillo (Tinta del País) (155.1)",
            "Garnacha (155.2)",
            "Albariño (155.3)",
            "Monastrell (155.4)"
          ],
          "answerIndex": 0,
          "explanation": "Tempranillo (Tinta del País)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What dynamic fractional blending aging system, utilizing stacked wooden barrels across decades, produces the world-renowned fortified wines of Jerez?",
          "options": [
            "Maceración carbónica (155.1)",
            "Fermentación en ánforas (155.2)",
            "Crianza en tinajas (155.3)",
            "Sistema de criaderas y soleras (155.4)"
          ],
          "answerIndex": 3,
          "explanation": "Sistema de criaderas y soleras."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The biological aging under the yeast velo de flor in the solera barrels of Jerez produces bone-dry, saline Finos and Manzanillas with unmatched complexity.\"",
          "options": [
            "La Gran Reserva exige un envejecimiento mínimo de solo dos semanas.",
            "El Tempranillo es una variedad de uva blanca de los Pirineos.",
            "La crianza biológica bajo el velo de flor de levaduras en las botas de solera de Jerez produce Finos y Manzanillas secos y salinos de incomparable complejidad.",
            "Los vinos de Jerez son licores de frutas destilados en Suecia."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Spanish oenology analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What dazzling white, moisture-retaining limestone soil type is essential to the world-famous vineyards of the Marco de Jerez?",
          "options": [
            "Pizarra / Llicorella",
            "Albariza (Tierra albariza)",
            "Granito descompuesto",
            "Terra rossa"
          ],
          "answerIndex": 1,
          "explanation": "Albariza.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Spanish Oenology, Terroir & The Solera System"
  },
  "es-u32-l1": {
    "id": "es-u32-l1",
    "unit": 32,
    "lessonNumber": 1,
    "level": "C1",
    "title": "Federico García Lorca y la Trilogía Rural: Tragedia, Mito y Opresión Social",
    "objective": "Analizar la dramaturgia poética de Federico García Lorca en su trilogía rural (Bodas de sangre, Yerma y La casa de Bernarda Alba), explorando el concepto del duende, los símbolos telúricos y el conflicto entre deseo y norma social.",
    "presentation": {
      "explanation": "La dramaturgia de Federico García Lorca (1898–1936), cumbre del teatro poético universal y de la Generación del 27, alcanza su máxima intensidad trágica en su célebre trilogía rural: *Bodas de sangre* (1933), *Yerma* (1934) y *La casa de Bernarda Alba* (1936). Lorca fusiona el folclore andaluz, la lírica de raíz popular y las técnicas de vanguardia para escenificar el choque telúrico entre el principio del deseo (el amor libre, el instinto vital, el «duende») y el principio de la realidad coercitiva (el honor calderoniano, la honra familiar, la moral represiva y el luto asfixiante). En *La casa de Bernarda Alba*, subtitulada 'Drama de mujeres en los pueblos de España', el espacio escénico clausurado —la casa blanca convertida en convento carcelario bajo el bastón de mando de Bernarda— materializa el silencio impuesto sobre las cinco hijas, culminando en el suicidio catártico de Adela.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El bastón de mando de Bernarda Alba simboliza la tiranía moral y el control asfixiante sobre el destino de sus hijas.",
          "reading": "El bastón de mando de Bernarda Alba simboliza la tiranía moral y el control asfixiante sobre el destino de sus hijas.",
          "translation": "Bernarda Alba's cane of command symbolizes moral tyranny and suffocating control over her daughters' destiny."
        },
        {
          "target": "En «Bodas de sangre», la Luna y la Muerte personificada tejen el destino inexorable de los amantes en el bosque.",
          "reading": "En «Bodas de sangre», la Luna y la Muerte personificada tejen el destino inexorable de los amantes en el bosque.",
          "translation": "In 'Blood Wedding', the Moon and personified Death weave the inexorable destiny of the lovers in the forest."
        },
        {
          "target": "Yerma encarna la tragedia existencial de la esterilidad en una sociedad agraria que reduce a la mujer a la maternidad.",
          "reading": "Yerma encarna la tragedia existencial de la esterilidad en una sociedad agraria que reduce a la mujer a la maternidad.",
          "translation": "Yerma embodies the existential tragedy of barrenness in an agrarian society that reduces women to maternity."
        },
        {
          "target": "El 'duende' lorquiano representa esa fuerza misteriosa y telúrica que desgarra la creación artística desde el dolor.",
          "reading": "El 'duende' lorquiano representa esa fuerza misteriosa y telúrica que desgarra la creación artística desde el dolor.",
          "translation": "Lorca's 'duende' represents that mysterious, telluric force that tears through artistic creation from pain."
        }
      ],
      "mnemonics": [
        "«Navaja, luto y bastón»: los tres ejes trágicos de Lorca que desgarran el honor, la sangre y el silencio en el campo andaluz."
      ],
      "culturalNotes": [
        "Lorca fundó y dirigió «La Barraca», una compañía de teatro universitario ambulante que recorría los pueblos de España representando obras del Siglo de Oro."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué elemento escénico y dramático empuña Bernarda Alba como símbolo supremo de su autoritarismo patriarcal?",
          "options": [
            "El bastón",
            "Una corona de espinas",
            "Una espada toledana",
            "Un abanico de plumas doradas"
          ],
          "answerIndex": 0,
          "explanation": "El bastón de Bernarda es el emblema de su poder represivo y de la vigilancia absoluta en la casa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la última palabra que pronuncia Bernarda Alba al final de la obra tras el suicidio de Adela?",
          "options": [
            "«¡Silencio!»",
            "«¡Justicia!»",
            "«¡Piedad!»",
            "«¡Libertad!»"
          ],
          "answerIndex": 0,
          "explanation": "Bernarda exige silencio («¡Silencio, silencio he dicho! ¡Silencio!») para ocultar la deshonra ante las murmuraciones del pueblo."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué tres obras teatrales componen la célebre «trilogía rural» dramática de Federico García Lorca?",
          "options": [
            "Bodas de sangre, Yerma y La casa de Bernarda Alba",
            "Doña Rosita la soltera, El público y Así que pasen cinco años",
            "Luces de bohemia, Divinas palabras y Martes de Carnaval",
            "Fuenteovejuna, El caballero de Olmedo y Peribáñez"
          ],
          "answerIndex": 0,
          "explanation": "Estas tres piezas configuran el ciclo trágico rural donde la pasión individual choca con las normas tradicionales.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cómo define Lorca la teoría estética del «duende» en el arte y el cante jondo?",
          "options": [
            "Un poder misterioso que todos sienten y ningún filósofo explica, nacido de la sangre y del combate cercano con la muerte.",
            "Una técnica puramente matemática de métrica silábica renacentista.",
            "Un tipo de máscara teatral importada de la comedia del arte veneciana.",
            "Un libreto musical para coro infantil sin acompañamiento de guitarra."
          ],
          "answerIndex": 0,
          "explanation": "El duende lorquiano es la vivencia honda, intuitiva y desgarrada del arte enraizada en la tradición española.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u32-l2": {
    "id": "es-u32-l2",
    "unit": 32,
    "lessonNumber": 2,
    "level": "C1",
    "title": "El Siglo de Oro: Lope de Vega, Calderón de la Barca y los Corrales de Comedias",
    "objective": "Comprender la revolución dramática del Siglo de Oro español: la fórmula innovadora de Lope de Vega (El arte nuevo de hacer comedias, Fuenteovejuna) frente a la hondura filosófica y teológica de Calderón de la Barca (La vida es sueño).",
    "presentation": {
      "explanation": "El teatro barroco del Siglo de Oro español (siglos XVI–XVII) revolucionó la escena europea al democratizar el espectáculo dramático en los corrales de comedias populares. Lope de Vega (1562–1635), el «Fénix de los ingenios», rompió las unidades aristotélicas de tiempo, lugar y acción en su tratado *El arte nuevo de hacer comedias en este tiempo* (1609), mezclando lo trágico y lo cómico, reduciendo la obra a tres jornadas y creando el arquetipo del 'gracioso'. Obras como *Fuenteovejuna* erigen al pueblo colectivo en protagonista de la justicia y la dignidad frente al abuso feudal. Por su parte, Pedro Calderón de la Barca (1600–1681) llevó el drama a su cima filosófica y teológica en *La vida es sueño*, donde Segismundo reflexiona sobre el libre albedrío, la predestinación astrológica y la naturaleza ilusoria de la existencia terrenal, consolidando además el género del auto sacramental.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "En «Fuenteovejuna», todo el pueblo asume solidariamente la autoría de la muerte del comendador tirano.",
          "reading": "En «Fuenteovejuna», todo el pueblo asume solidariamente la autoría de la muerte del comendador tirano.",
          "translation": "In 'Fuenteovejuna', the entire village solidarily assumes authorship of the tyrannical commander's death."
        },
        {
          "target": "El monólogo de Segismundo cuestiona si la vigilia no es sino una ilusión efímera dentro del sueño de la vida.",
          "reading": "El monólogo de Segismundo cuestiona si la vigilia no es sino una ilusión efímera dentro del sueño de la vida.",
          "translation": "Segismundo's monologue questions whether wakefulness is but an ephemeral illusion within the dream of life."
        },
        {
          "target": "Lope de Vega justificó complacer el gusto del vulgo pagano en los corrales de comedias madrileños.",
          "reading": "Lope de Vega justificó complacer el gusto del vulgo pagano en los corrales de comedias madrileños.",
          "translation": "Lope de Vega justified catering to the taste of the paying common folk in Madrid's comedy courtyards."
        },
        {
          "target": "El auto sacramental calderoniano personificaba conceptos teológicos y alegóricos en suntuosas puestas en escena.",
          "reading": "El auto sacramental calderoniano personificaba conceptos teológicos y alegóricos en suntuosas puestas en escena.",
          "translation": "The Calderonian sacramental play personified theological and allegorical concepts in sumptuous staging."
        }
      ],
      "mnemonics": [
        "«Lope da la vida en tres actos, Calderón la sueña en verso»: la vitalidad popular frente a la metafísica del Siglo de Oro."
      ],
      "culturalNotes": [
        "El Corral de Comedias de Almagro (Ciudad Real), conservado intacto desde 1628, es el único corral de comedias barroco que permanece en funcionamiento activo en el mundo."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cuál es la célebre respuesta que dan todos los habitantes del pueblo ante el juez en «Fuenteovejuna»?",
          "options": [
            "«Fuenteovejuna lo hizo, señor» / «¿Quién mató al Comendador? Fuenteovejuna, todos a una»",
            "«Fue el alcalde en defensa propia»",
            "«Nadie vio nada en la plaza mayor»",
            "«El rey ordenó la ejecución»"
          ],
          "answerIndex": 0,
          "explanation": "La respuesta unánime «Fuenteovejuna, todos a una» consagra la solidaridad colectiva como escudo ante la justicia."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué dilema filosófico central debate Segismundo en la torre en «La vida es sueño»?",
          "options": [
            "El conflicto entre la predestinación fatídica de los astros y el libre albedrío moral del ser humano.",
            "La teoría geocéntrica de Ptolomeo frente al copernicanismo.",
            "El valor del dinero fiduciario en las colonias americanas.",
            "La técnica de construcción naval de galeras mediterráneas."
          ],
          "answerIndex": 0,
          "explanation": "Segismundo vence su supuesto destino tiránico ejerciendo la prudencia y el libre albedrío cristiano."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué tratado poético de Lope de Vega fijó las reglas del nuevo teatro comercial barroco español?",
          "options": [
            "El arte nuevo de hacer comedias en este tiempo (1609)",
            "La Poética de Aristóteles anotada",
            "La Galatea y el Viaje del Parnaso",
            "Teatro crítico universal"
          ],
          "answerIndex": 0,
          "explanation": "En esta obra Lope defiende la libertad creativa, la polimetría y la mezcla de comedia y tragedia.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cómo se llamaban los patios interiores al aire libre entre edificios donde se representaban las comedias del Siglo de Oro?",
          "options": [
            "Corrales de comedias",
            "Anfiteatros romanos",
            "Ateneos científicos",
            "Claustros catedralicios"
          ],
          "answerIndex": 0,
          "explanation": "Los corrales de comedias (como el del Príncipe o de la Cruz en Madrid) eran los espacios escénicos urbanos por excelencia.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u32-l3": {
    "id": "es-u32-l3",
    "unit": 32,
    "lessonNumber": 3,
    "level": "C1",
    "title": "Ramón María del Valle-Inclán y el Esperpento: Deformación Grotesca y Luces de Bohemia",
    "objective": "Dominar la teoría y técnica dramatúrgica del esperpento creada por Valle-Inclán, analizando la peregrinación nocturna de Max Estrella en Luces de bohemia y la crítica ácida a la España de la Restauración.",
    "presentation": {
      "explanation": "Ramón María del Valle-Inclán (1866–1936), figura cardinal de la Generación del 98 y del Modernismo hispánico, revolucionó el teatro del siglo XX con la invención del «esperpento», una estética de la deformación grotesca y sistemática de la realidad española. En su obra maestra *Luces de bohemia* (1920/1924), Valle-Inclán formula su famosa teoría a través del poeta ciego y miserable Max Estrella en el Callejón del Gato de Madrid: 'Los héroes clásicos reflejados en los espejos cóncavos dan el Esperpento. El sentido trágico de la vida española sólo puede darse con una estética sistemáticamente deformada'. Mediante la animalización de los personajes, la cosificación humana, el cruce de registros cultos con jergas tabernarias y la ironía mordaz, el dramaturgo destripa la corrupción política, la pedantería académica, la violencia policial y la decadencia moral de la España de la Restauración alfonsina.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Los espejos cóncavos y convexos del Callejón del Gato devuelven una imagen cómica y monstruosa de la tragedia nacional.",
          "reading": "Los espejos cóncavos y convexos del Callejón del Gato devuelven una imagen cómica y monstruosa de la tragedia nacional.",
          "translation": "The concave and convex mirrors of the Alley of the Cat return a comical and monstrous image of the national tragedy."
        },
        {
          "target": "Max Estrella recorre la noche madrileña acompañado por su lazarillo parásito Don Latino de Híspalis.",
          "reading": "Max Estrella recorre la noche madrileña acompañado por su lazarillo parásito Don Latino de Híspalis.",
          "translation": "Max Estrella wanders through the Madrid night accompanied by his parasitic guide Don Latino de Híspalis."
        },
        {
          "target": "El esperpento reduce a los ministros y militares a títeres grotescos y fantoches gesticulantes.",
          "reading": "El esperpento reduce a los ministros y militares a títeres grotescos y fantoches gesticulantes.",
          "translation": "The esperpento reduces ministers and military officers to grotesque puppets and gesticulating figurines."
        },
        {
          "target": "El lenguaje de Valle-Inclán combina arcaísmos hidalgos, culteranismos modernistas y el habla cheli de los bajos fondos.",
          "reading": "El lenguaje de Valle-Inclán combina arcaísmos hidalgos, culteranismos modernistas y el habla cheli de los bajos fondos.",
          "translation": "Valle-Inclán's language blends hidalgo archaisms, modernist cultisms and the slang of the underworld."
        }
      ],
      "mnemonics": [
        "«El espejo cóncavo del Callejón del Gato»: Valle-Inclán deformó al héroe clásico para revelar la farsa grotesca de la realidad española."
      ],
      "culturalNotes": [
        "El personaje de Max Estrella está inspirado en la trágica vida real del escritor bohemio sevillano Alejandro Sawa, quien murió ciego y en la indigencia en Madrid en 1909."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué metáfora física y óptica utiliza Valle-Inclán en «Luces de bohemia» para explicar el nacimiento del esperpento?",
          "options": [
            "Los héroes clásicos reflejados en los espejos cóncavos del Callejón del Gato madrileño.",
            "Un microscopio de laboratorio que agranda las bacterias.",
            "Un telescopio astronómico apuntando a las constelaciones lejanas.",
            "Una cámara oscura veneciana para pintar retratos al óleo."
          ],
          "answerIndex": 0,
          "explanation": "Los espejos deformantes del Callejón del Gato transforman la tragedia en mueca grotesca: el esperpento."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Quién acompaña y traiciona a Max Estrella a lo largo de su última noche de bohemia por las tabernas de Madrid?",
          "options": [
            "Don Latino de Híspalis",
            "El Marqués de Bradomín",
            "Pedro Crespo",
            "Sancho Panza"
          ],
          "answerIndex": 0,
          "explanation": "Don Latino encarna la mezquindad, el cinismo y la degradación moral de la bohemia golfa."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué técnica expresiva caracteriza fundamentalmente a la dramaturgia del esperpento de Valle-Inclán?",
          "options": [
            "La animalización, la cosificación y la muñequización de los personajes para subrayar su deshumanización trágica.",
            "El realismo fotográfico burgués con decorados naturalistas exactos.",
            "La declamación solemne en alejandrinos clásicos sin humor ni sátira.",
            "El uso de coros litúrgicos gregorianos en latín medieval."
          ],
          "answerIndex": 0,
          "explanation": "El esperpento degrada a los personajes a fantoches y animales para denunciar la farsa social.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿En qué obra monumental inauguró Valle-Inclán formalmente la estética del esperpento en 1920?",
          "options": [
            "Luces de bohemia",
            "Sonatas de otoño",
            "Tirano Banderas",
            "Divinas palabras"
          ],
          "answerIndex": 0,
          "explanation": "«Luces de bohemia» es la pieza fundacional donde se teoriza y ejecuta plenamente el esperpento.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u32-l4": {
    "id": "es-u32-l4",
    "unit": 32,
    "lessonNumber": 4,
    "level": "C1",
    "title": "La Zarzuela y el Género Chico Madrileño: Tradición Lírica y Costumbrismo Castizo",
    "objective": "Apreciar la zarzuela española como patrimonio lírico-teatral singular, distinguiendo la zarzuela grande del género chico (La verbena de la Paloma, Doña Francisquita), sus tipos populares castizos y sus formas musicales tradicionales.",
    "presentation": {
      "explanation": "La Zarzuela es el género lírico-dramático por excelencia del patrimonio musical español, caracterizado por la alternancia virtuosa de partes habladas y partes cantadas, danzas populares y coros festivos. Nacida en el siglo XVII en el Real Sitio de la Zarzuela bajo el mecenazgo de Felipe IV y Calderón de la Barca, la zarzuela conoció una segunda edad de oro a finales del siglo XIX con el auge del «género chico» —obras cómicas en un solo acto de ambientación costumbrista y precio popular—. Obras maestras como *La verbena de la Paloma* (1894, libreto de Ricardo de la Vega y música de Tomás Bretón), *La revoltosa* (1897, Ruperto Chapí) y la zarzuela grande *Doña Francisquita* (1923, Amadeo Vives) retratan el Madrid castizo de chulapos, modistillas, taberneros y boticarios, inmortalizando ritmos como el chotis, la habanera, las seguidillas y el pasodoble.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Las coplas de Don Hilarión en «La verbena de la Paloma» retratan con gracia picaresca al viejo boticario seductor.",
          "reading": "Las coplas de Don Hilarión en «La verbena de la Paloma» retratan con gracia picaresca al viejo boticario seductor.",
          "translation": "Don Hilarión's verses in 'La verbena de la Paloma' portray the old seductive apothecary with picaresque grace."
        },
        {
          "target": "El chotis madrileño se baila en una baldosa al son de las notas alegres del organillo callejero.",
          "reading": "El chotis madrileño se baila en una baldosa al son de las notas alegres del organillo callejero.",
          "translation": "The Madrid chotis is danced on a single tile to the merry notes of the street barrel organ."
        },
        {
          "target": "El «género chico» democratizó la lírica teatral al ofrecer funciones breves y accesibles en los teatros por horas.",
          "reading": "El «género chico» democratizó la lírica teatral al ofrecer funciones breves y accesibles en los teatros por horas.",
          "translation": "The 'género chico' democratized theatrical lyricism by offering short, accessible shows in hourly theatres."
        },
        {
          "target": "La romanza de Fernando en «Doña Francisquita» exige un dominio lírico propio de los grandes tenores del bel canto.",
          "reading": "La romanza de Fernando en «Doña Francisquita» exige un dominio lírico propio de los grandes tenores del bel canto.",
          "translation": "Fernando's romance in 'Doña Francisquita' demands a lyric mastery worthy of great bel canto tenors."
        }
      ],
      "mnemonics": [
        "«Zarzuela alterna, el género chico festeja»: canto, diálogo y chotis en el Madrid de la verbena y el mantón de Manila."
      ],
      "culturalNotes": [
        "El Teatro de la Zarzuela en Madrid, fundado en 1856 por Francisco Asenjo Barbieri y otros insignes compositores, fue el primer coliseo edificado expresamente para el repertorio lírico nacional."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué rasgo formal distingue a la zarzuela española de la ópera italiana tradicional?",
          "options": [
            "La alternancia de pasajes hablados en prosa o verso con secciones cantadas y números de danza popular.",
            "El uso obligatorio de máscaras de cuero y ausencia total de orquesta.",
            "El canto exclusivo a capela sin ningún instrumento musical.",
            "La duración ininterrumpida de doce horas continuas."
          ],
          "answerIndex": 0,
          "explanation": "A diferencia de la ópera donde todo es cantado (recitativos), la zarzuela combina diálogo hablado con música lírica."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué inmortal sainete lírico del género chico compuesto por Tomás Bretón transcurre durante la fiesta de la Virgen de la Paloma?",
          "options": [
            "La verbena de la Paloma (1894)",
            "El barberillo de Lavapiés",
            "Agua, azucarillos y aguardiente",
            "La corte de Faraón"
          ],
          "answerIndex": 0,
          "explanation": "«La verbena de la Paloma» es el sainete por excelencia del género chico madrileño."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el baile castizo y popular más emblemático del Madrid de la zarzuela?",
          "options": [
            "El chotis",
            "La tarantela",
            "La polka rusa",
            "El vals vienés"
          ],
          "answerIndex": 0,
          "explanation": "El chotis madrileño es la danza castiza tradicional bailada giro a giro sobre un espacio mínimo.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Qué formato teatral y comercial permitió el gran florecimiento del «género chico» a finales del siglo XIX?",
          "options": [
            "El teatro por horas: representaciones breves de un solo acto a precios muy reducidos para el público popular.",
            "La suscripción nobiliaria exclusiva en palacios privados.",
            "Las giras en carromatos de comediantes ambulantes sin texto escrito.",
            "Los festivales de teatro sacro en monasterios cistercienses."
          ],
          "answerIndex": 0,
          "explanation": "El 'teatro por horas' democratizó la cultura permitiendo a los trabajadores asistir a piezas cortas tras la jornada laboral.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u32-l5": {
    "id": "es-u32-l5",
    "unit": 32,
    "lessonNumber": 5,
    "level": "C1",
    "title": "Vanguardia Escénica Española: La Fura dels Baus, Juan Mayorga y la Escena Contemporánea",
    "objective": "Examinar las corrientes contemporáneas del teatro español, desde la poética física, tecnológica y macroscópica de La Fura dels Baus hasta el teatro filosófico, político y de la memoria histórica de Juan Mayorga (Premio Princesa de Asturias 2022).",
    "presentation": {
      "explanation": "La escena teatral española de las últimas décadas destaca por su vitalidad e internacionalización, articulada en dos vertientes maestras: el teatro físico de impacto sensorial y el teatro de texto filosófico. En el ámbito de la vanguardia física y multidisciplinar, la compañía catalana La Fura dels Baus (fundada en 1979) revolucionó la dramaturgia escénica con el 'lenguaje furero': ruptura de la cuarta pared, eliminación del escenario convencional, interacción visceral con el público, maquinaria industrial e inmersión tecnológica (consagrada globalmente en la ceremonia de apertura de los Juegos Olímpicos de Barcelona 1992). En el polo del teatro de texto y pensamiento, Juan Mayorga (1965, dramaturgo, matemático y filósofo, miembro de la Real Academia Española) ha creado un teatro ético y de la memoria (*Himmelweg*, *El chico de la última fila*, *La tortuga de Darwin*), donde el escenario se transforma en un laboratorio de preguntas morales sobre el Holocausto, la violencia invisible, la seducción del relato y la responsabilidad cívica.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La Fura dels Baus disuelve la frontera entre actor y espectador situando la acción en el centro del espacio multitudinario.",
          "reading": "La Fura dels Baus disuelve la frontera entre actor y espectador situando la acción en el centro del espacio multitudinario.",
          "translation": "La Fura dels Baus dissolves the boundary between actor and spectator by placing the action in the center of the crowd space."
        },
        {
          "target": "En «Himmelweg», Juan Mayorga indaga en el teatro como máquina de engaño propagandístico en un campo de concentración nazi.",
          "reading": "En «Himmelweg», Juan Mayorga indaga en el teatro como máquina de engaño propagandístico en un campo de concentración nazi.",
          "translation": "In 'Himmelweg', Juan Mayorga investigates theatre as a machine of propagandistic deception in a Nazi concentration camp."
        },
        {
          "target": "El teatro contemporáneo español interroga las heridas del pasado para iluminar los dilemas éticos del presente.",
          "reading": "El teatro contemporáneo español interroga las heridas del pasado para iluminar los dilemas éticos del presente.",
          "translation": "Contemporary Spanish theatre interrogates the wounds of the past to illuminate the ethical dilemmas of the present."
        },
        {
          "target": "La escenografía digital y la robótica se integran con la dramaturgia textual en las producciones del Centro Dramático Nacional.",
          "reading": "La escenografía digital y la robótica se integran con la dramaturgia textual en las producciones del Centro Dramático Nacional.",
          "translation": "Digital stage design and robotics integrate with textual dramaturgy in productions of the National Dramatic Center."
        }
      ],
      "mnemonics": [
        "«La Fura impacta los sentidos, Mayorga agudiza el pensamiento»: la vanguardia física y el teatro filosófico de la España contemporánea."
      ],
      "culturalNotes": [
        "Juan Mayorga fue galardonado con el prestigioso Premio Princesa de Asturias de las Letras en 2022 en reconocimiento a su compromiso ético y lucidez teatral."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué concepto define la propuesta escénica radical de La Fura dels Baus nacida en los años 80?",
          "options": [
            "El «lenguaje furero»: interacción física sin cuarta pared, uso de materiales industriales, música tecno-tribal y espacio abierto.",
            "El teatro de cámara dieciochesco con decorados de cartón piedra.",
            "La lectura estática de poemas épicos en atriles medievales.",
            "La pantomima muda en blanco y negro sin sonido ni escenografía."
          ],
          "answerIndex": 0,
          "explanation": "El 'lenguaje furero' sumerge al espectador en una experiencia sensorial total, física y participativa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Sobre qué acontecimiento histórico reflexiona la aclamada obra «Himmelweg (Camino del cielo)» de Juan Mayorga?",
          "options": [
            "La farsa teatral montada por los nazis en el campo de concentración de Theresienstadt para engañar a la Cruz Roja.",
            "La construcción del ferrocarril transiberiano en el siglo XIX.",
            "La llegada de Colón a la isla de Guanahani en 1492.",
            "El primer vuelo comercial transatlántico en dirigible."
          ],
          "answerIndex": 0,
          "explanation": "«Himmelweg» analiza cómo el teatro fue manipulado perversamente por la propaganda nazi para encubrir el exterminio."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué prestigioso dramaturgo, director del Teatro de La Abadía y académico de la RAE recibió el Premio Princesa de Asturias de las Letras en 2022?",
          "options": [
            "Juan Mayorga",
            "Antonio Gala",
            "Fernando Fernán Gómez",
            "Alfonso Sastre"
          ],
          "answerIndex": 0,
          "explanation": "Juan Mayorga es reconocido internacionalmente como uno de los pensadores y dramaturgos esenciales de la lengua española.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿En qué magno evento internacional televisado deslumbró La Fura dels Baus al mundo con la creación de una gigantesca nave humana y mitológica?",
          "options": [
            "La ceremonia de apertura de los Juegos Olímpicos de Barcelona 1992 (Mediterráneo, Mar Olímpico).",
            "La Exposición Universal de Sevilla 1929.",
            "La coronación de Carlos III en Madrid.",
            "El Festival de la Canción de Eurovisión 1968."
          ],
          "answerIndex": 0,
          "explanation": "El espectáculo 'Mediterrani, mar olímpic' en Barcelona 92 proyectó la estética de La Fura dels Baus a escala planetaria.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u33-l1": {
    "id": "es-u33-l1",
    "unit": 33,
    "lessonNumber": 1,
    "level": "C1",
    "title": "Antoni Gaudí y el Modernismo Catalán: Sagrada Família, Arcos Catenarios y Trencadís",
    "objective": "Analizar la genialidad arquitectónica de Antoni Gaudí y el Modernisme catalán, la observación estructural de las formas de la naturaleza, el uso del arco catenario y la técnica del mosaico trencadís.",
    "presentation": {
      "explanation": "Antoni Gaudí i Cornet (1852–1926) encarna la cumbre del Modernismo catalán y una de las figuras más revolucionarias de la arquitectura de todos los tiempos. Rehusando la copia servil de los estilos históricos (neogótico o academicismo neoclásico), Gaudí concibió la arquitectura como una prolongación orgánica de las leyes de la naturaleza y de la creación divina. Mediante el estudio empírico de modelos polifuniculares con saquitos de perdigones suspendidos en cuerdas, calculó con exactitud matemática el uso de arcos catenarios, columnas helicoidales arborescentes que se ramifican como troncos de bosque y bóvedas hiperbólicas autoportantes. Su obra cumbre, la Basílica de la Sagrada Família en Barcelona, es una catedral vegetal en piedra y luz cuya fachada de la Natividad y torres biomórficas fusionan misticismo cristiano con geología natural. En obras civiles como el Park Güell, la Casa Batlló y la Casa Milà (La Pedrera), Gaudí universalizó el *trencadís*, técnica artesanal que recicla fragmentos irregulares de cerámica esmaltada y azulejos para vestir superficies onduladas con vibrantes composiciones policromadas.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Las columnas arborescentes de la Sagrada Família se bifurcan en ramas para sostener el peso de las bóvedas hiperbólicas.",
          "reading": "Las columnas arborescentes de la Sagrada Família se bifurcan en ramas para sostener el peso de las bóvedas hiperbólicas.",
          "translation": "The tree-like columns of the Sagrada Família branch out into boughs to support the weight of the hyperbolic vaults."
        },
        {
          "target": "La técnica del trencadís recubre los bancos ondulados del Park Güell con un tapiz brillante de cerámica reciclada.",
          "reading": "La técnica del trencadís recubre los bancos ondulados del Park Güell con un tapiz brillante de cerámica reciclada.",
          "translation": "The trencadís technique coats the undulating benches of Park Güell with a brilliant tapestry of recycled ceramics."
        },
        {
          "target": "El arco catenario distribuye las cargas exclusivamente a compresión sin requerir pesados contrafuertes góticos.",
          "reading": "El arco catenario distribuye las cargas exclusivamente a compresión sin requerir pesados contrafuertes góticos.",
          "translation": "The catenary arch distributes loads purely in compression without requiring heavy gothic buttresses."
        },
        {
          "target": "La fachada de la Casa Batlló evoca la piel escamosa del dragón vencido por la lanza de San Jorge.",
          "reading": "La fachada de la Casa Batlló evoca la piel escamosa del dragón vencido por la lanza de San Jorge.",
          "translation": "The facade of Casa Batlló evokes the scaly skin of the dragon defeated by Saint George's spear."
        }
      ],
      "mnemonics": [
        "«La catenaria sostiene, el trencadís ilumina»: Gaudí aprendió la geometría sagrada en el gran libro abierto de la naturaleza."
      ],
      "culturalNotes": [
        "Siete obras de Antoni Gaudí en Barcelona y sus alrededores han sido declaradas Patrimonio de la Humanidad por la UNESCO bajo la denominación conjunta «Obras de Antoni Gaudí»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Cómo se llama la emblemática técnica artesanal gaudiniana consistente en crear mosaicos con fragmentos rotos de azulejos y cerámica?",
          "options": [
            "Trencadís",
            "Grisalla",
            "Esgrafiado renacentista",
            "Taracea mudéjar"
          ],
          "answerIndex": 0,
          "explanation": "El 'trencadís' catalán une pedazos partidos de cerámica para adaptarse a superficies curvas orgánicas."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué figura geométrica natural calculada mediante cuerdas suspendidas utilizó Gaudí para eliminar la necesidad de arbotantes exteriores?",
          "options": [
            "El arco catenario (o parábola funicular)",
            "El dintel recto griego",
            "El arco de medio punto romano",
            "La cúpula geodésica de aluminio"
          ],
          "answerIndex": 0,
          "explanation": "El arco catenario adopta la curva natural de una cadena colgante invertida, trabajando puramente a compresión."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es el templo monumental en Barcelona cuya construcción comenzó en 1882 y se convirtió en la obra cumbre de la vida de Antoni Gaudí?",
          "options": [
            "Basílica de la Sagrada Família",
            "Catedral de Santa Eulalia",
            "Basílica de Santa María del Mar",
            "Monasterio de Pedralbes"
          ],
          "answerIndex": 0,
          "explanation": "La Sagrada Família es el símbolo imperecedero del genio místico y arquitectónico de Gaudí.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Quién fue el noble y mecenas barcelonés que financió los proyectos más emblemáticos de Gaudí, incluyendo la cripta de la Colonia y el famoso parque urbano?",
          "options": [
            "Eusebi Güell",
            "Josep Batlló",
            "Pere Milà",
            "Lluís Domènech i Montaner"
          ],
          "answerIndex": 0,
          "explanation": "El conde Eusebi Güell fue el gran protector y mecenas que permitió la materialización de las visiones gaudinianas.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u33-l2": {
    "id": "es-u33-l2",
    "unit": 33,
    "lessonNumber": 2,
    "level": "C1",
    "title": "El Esplendor Andalusí: La Alhambra y el Generalife de Granada",
    "objective": "Comprender la sofisticación arquitectónica, matemática y poética del arte nazarí en la Alhambra y el Generalife de Granada (Patio de los Leones, mocárabes, epigrafía cúfica y la ingeniería hidráulica de los palacios andalusíes).",
    "presentation": {
      "explanation": "La Alhambra de Granada ('al-Qal'a al-Hamra', la Fortaleza Roja), erigida por los sultanes de la dinastía Nazarí (siglos XIII–XV), constituye la cima insuperable de la arquitectura palatina hispanomusulmana y del refinamiento estético de al-Ándalus. Concebida como una ciudadela cortesana inexpugnable por fuera y un paraíso sensorial por dentro, la Alhambra materializa la cosmología coránica donde el agua viva es el eje vertebral del espacio. En el Palacio de los Leones (mandado construir por Muhammad V), una esbelta columnata de mármol de Macael enmarca la fuente central sostenida por doce leones esculpidos, distribuyendo el agua a través de cuatro canales cardinales. Las cúpulas de *mocárabes* (estalactitas prismáticas de yeso como la de la Sala de Dos Hermanas o de los Abencerrajes) descomponen la luz solar en millares de reflejos geométricos caleidoscópicos. En los muros, los alicatados de lacería matemática y los poemas epigráficos labrados en yesería por visires y poetas como Ibn Zamrak proclaman que 'no hay vencedor sino Dios' (*wa-la galiba illa Allah*).\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La cúpula de mocárabes de la Sala de Dos Hermanas simula una bóveda celeste de incontables constelaciones de yeso.",
          "reading": "La cúpula de mocárabes de la Sala de Dos Hermanas simula una bóveda celeste de incontables constelaciones de yeso.",
          "translation": "The muqarnas dome of the Hall of the Two Sisters simulates a celestial vault of countless plaster constellations."
        },
        {
          "target": "El agua del Generalife corre rumorosa por acequias y surtidores refrescando los vergeles y albercas palaciegas.",
          "reading": "El agua del Generalife corre rumorosa por acequias y surtidores refrescando los vergeles y albercas palaciegas.",
          "translation": "The water of the Generalife runs murmuring through irrigation channels and fountains, cooling the orchards and palace pools."
        },
        {
          "target": "Los poemas esculpidos en las yeserías dialogan con el visitante cantando la hermosura inmarcesible de las estancias.",
          "reading": "Los poemas esculpidos en las yeserías dialogan con el visitante cantando la hermosura inmarcesible de las estancias.",
          "translation": "The poems carved in the plasterwork dialogue with the visitor, singing the unfading beauty of the chambers."
        },
        {
          "target": "La alberca del Patio de los Arrayanes refleja simétricamente la imponente mole de la Torre de Comares.",
          "reading": "La alberca del Patio de los Arrayanes refleja simétricamente la imponente mole de la Torre de Comares.",
          "translation": "The pool of the Court of the Myrtles symmetrically reflects the imposing mass of the Comares Tower."
        }
      ],
      "mnemonics": [
        "«Agua, mocárabe y caligrafía»: los tres secretos nazaríes que convirtieron la colina de la Sabika en un palacio celestial en la tierra."
      ],
      "culturalNotes": [
        "La Alhambra, el Generalife y el barrio histórico del Albaicín de Granada fueron declarados conjuntamente Patrimonio de la Humanidad por la UNESCO en 1984."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué elemento arquitectónico y decorativo característico del arte islámico consiste en prismas colgantes de yeso que semejan estalactitas celestes?",
          "options": [
            "Los mocárabes",
            "Los arbotantes",
            "Los atlantes barrocos",
            "Los contrafuertes dóricos"
          ],
          "answerIndex": 0,
          "explanation": "Los mocárabes (*muqarnas*) crean fascinantes geometrías tridimensionales que tamizan la luz en las cúpulas nazaríes."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Cuál es el lema dinástico nazarí que se repite cientos de veces grabado en la yesería y azulejos de la Alhambra?",
          "options": [
            "«Wa-la galiba illa Allah» (No hay vencedor sino Dios)",
            "«Plus Ultra» (Más allá)",
            "«In hoc signo vinces» (Con este signo vencerás)",
            "«Post tenebras lux» (Tras las tinieblas, la luz)"
          ],
          "answerIndex": 0,
          "explanation": "El lema 'No hay vencedor sino Dios' es la divisa oficial grabada en la epigrafía nazarí de todo el recinto palatino."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué palacio y jardín de recreo anexo a la Alhambra servía como finca de descanso y explotación agrícola para los sultanes granadinos?",
          "options": [
            "El Generalife (Yannat al-Arif)",
            "El Escorial",
            "El Palacio de Aranjuez",
            "La Granja de San Ildefonso"
          ],
          "answerIndex": 0,
          "explanation": "El Generalife ('Huerto del Arquitecto') era la residencia de verano y jardín de reposo de los monarcas nazaríes.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Cuántos leones de mármol sostienen la célebre taza de la fuente en el centro del palacio mandado erigir por Muhammad V en el siglo XIV?",
          "options": [
            "Doce leones",
            "Cuatro leones",
            "Siete leones",
            "Veinticuatro leones"
          ],
          "answerIndex": 0,
          "explanation": "Doce leones de mármol representan una alegoría cósmica y cronológica en el corazón del patio.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u33-l3": {
    "id": "es-u33-l3",
    "unit": 33,
    "lessonNumber": 3,
    "level": "C1",
    "title": "La Mezquita-Catedral de Córdoba: El Bosque de Columnas y la Geometría Califal",
    "objective": "Apreciar la trascendencia universal de la Mezquita de Córdoba (fundada por Abd al-Rahman I en 785 y ampliada hasta Almanzor): el bosque hipóstilo de columnas romanas y visigodas, los arcos bicolores de herradura superpuestos, el deslumbrante mihrab bizantino y la inserción de la catedral renacentista.",
    "presentation": {
      "explanation": "La Gran Mezquita de Córdoba, erigida sobre la basílica visigoda de San Vicente tras la llegada del emir omeya Abd al-Rahman I en 785 y sucesivamente ampliada por Abd al-Rahman II, al-Hakam II y Almanzor, es una de las obras cumbres del arte islámico y de la arquitectura universal. Su sala de oración (*haram*) despliega un asombroso bosque hipóstilo de más de 850 columnas de jaspe, ónice, mármol y granito reutilizadas de monumentos romanos y visigodos. Para ganar altura y luminosidad, los arquitectos califales idearon un revolucionario sistema de doble arquería superpuesta: arcos inferiores de herradura que actúan como tirantes y arcos superiores de medio punto que sustentan la techumbre, combinando dovelas alternas de ladrillo rojo y piedra caliza blanca. El *mihrab* de al-Hakam II (siglo X) deslumbra por su cúpula nervada sobre trompas y sus mosaicos de pasta vítrea dorada enviados por el emperador de Bizancio. En el siglo XVI, el cabildo eclesiástico erigió en su centro una suntuosa catedral plateresca y renacentista, originando un diálogo histórico y estilístico irrepetible.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El bosque de columnas de la Mezquita crea una perspectiva visual infinita que invita al recogimiento espiritual.",
          "reading": "El bosque de columnas de la Mezquita crea una perspectiva visual infinita que invita al recogimiento espiritual.",
          "translation": "The forest of columns of the Mosque creates an infinite visual perspective inviting spiritual contemplation."
        },
        {
          "target": "Los arcos de herradura bicolores en rojo y blanco se inspiraron en la técnica constructiva del acueducto romano de Los Milagros.",
          "reading": "Los arcos de herradura bicolores en rojo y blanco se inspiraron en la técnica constructiva del acueducto romano de Los Milagros.",
          "translation": "The two-toned red and white horseshoe arches were inspired by the constructive technique of the Roman aqueduct of Los Milagros."
        },
        {
          "target": "El emperador bizantino envió a Córdoba maestros musivarios y teselas de oro para ornamentar el sagrado mihrab califal.",
          "reading": "El emperador bizantino envió a Córdoba maestros musivarios y teselas de oro para ornamentar el sagrado mihrab califal.",
          "translation": "The Byzantine emperor sent mosaic masters and gold tesserae to Córdoba to ornament the sacred caliphal mihrab."
        },
        {
          "target": "El Patio de los Naranjos conserva el alminar omeya envuelto en la torre campanario barroca de la catedral.",
          "reading": "El Patio de los Naranjos conserva el alminar omeya envuelto en la torre campanario barroca de la catedral.",
          "translation": "The Court of the Orange Trees preserves the Umayyad minaret enclosed within the baroque bell tower of the cathedral."
        }
      ],
      "mnemonics": [
        "«Doble arco bicolor y bosque de jaspe»: la ingeniería califal que elevó la Mezquita de Córdoba a las alturas sagradas."
      ],
      "culturalNotes": [
        "El centro histórico de Córdoba, presidido por la Mezquita-Catedral y su puente romano sobre el Guadalquivir, es Patrimonio de la Humanidad por la UNESCO desde 1984."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué solución arquitectónica ingeniosa permitió a los constructores omeyas elevar la techumbre de la Mezquita de Córdoba?",
          "options": [
            "Un sistema de arquerías dobles superpuestas con arcos de herradura abajo y arcos de medio punto arriba.",
            "Enormes pilares macizos de hormigón armado.",
            "Vigas de acero suspendidas con cables tensores.",
            "Muros ciegos sin columnas ni vanos de luz."
          ],
          "answerIndex": 0,
          "explanation": "La doble arquería superpuesta aportó esbeltez, estabilidad y ligereza al inmenso espacio hipóstilo."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué emir omeya superviviente de la matanza de Damasco fundó el Emirato independiente de Córdoba y comenzó la construcción de la mezquita en 785?",
          "options": [
            "Abd al-Rahman I (el Inmigrado)",
            "Al-Hakam II",
            "Almanzor (al-Mansur)",
            "Boabdil de Granada"
          ],
          "answerIndex": 0,
          "explanation": "Abd al-Rahman I consagró la mezquita aljamal tras consolidar el poder omeya en la península ibérica."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué joya ornamental del siglo X destaca por sus mosaicos de vidrio bizantino y su cúpula de arcos cruzados que no se tocan en el centro?",
          "options": [
            "El Mihrab y la Maqsura de al-Hakam II",
            "La Capilla Real de los Reyes Católicos",
            "El crucero renacentista de Hernán Ruiz",
            "La torre del Alminar de Hisham I"
          ],
          "answerIndex": 0,
          "explanation": "El Mihrab de al-Hakam II representa la cúspide del arte suntuario y califal cordobés.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Qué frase atribuida a Carlos I de España resume su reacción al ver la catedral renacentista construida dentro de la mezquita?",
          "options": [
            "«Habéis construido lo que vosotros u otros podían hacer en cualquier parte; y habéis destruido lo que era único en el mundo.»",
            "«Esta es la obra más gloriosa de todos mis reinos hispánicos.»",
            "«Ordeno derribar inmediatamente todo el bosque de columnas moriscas.»",
            "«Que se pinten todos los arcos bicolores de un solo tono blanco.»"
          ],
          "answerIndex": 0,
          "explanation": "El emperador lamentó el impacto que la nave catedralicia causó sobre la singularidad del monumento omeya.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u33-l4": {
    "id": "es-u33-l4",
    "unit": 33,
    "lessonNumber": 4,
    "level": "C1",
    "title": "El Real Monasterio de San Lorenzo de El Escorial: Juan de Herrera y la Geometría Filipina",
    "objective": "Analizar la arquitectura monumental de El Escorial (1563–1584), el estilo herreriano, la austeridad contrarreformista de Felipe II y la integración simétrica de monasterio, palacio, basílica, panteón real y biblioteca.",
    "presentation": {
      "explanation": "El Real Monasterio de San Lorenzo de El Escorial, concebido por el rey Felipe II y levantado en la sierra de Guadarrama entre 1563 y 1584 por los arquitectos Juan Bautista de Toledo y, fundamentalmente, Juan de Herrera (1530–1597), es el monumento cumbre del Renacimiento español y la manifestación pétrea de la Monarquía Hispánica en el cenit de su poder imperial. Construido en granito gris con planta ortogonal en forma de parrilla en honor al martirio de San Lorenzo, El Escorial materializa los ideales de orden, simetría y severidad ascética de la Contrarreforma católica emanada del Concilio de Trento. Juan de Herrera depuró la ornamentación plateresca para alumbrar el 'estilo herreriano' o desornamentado, caracterizado por la pureza de líneas geométricas, pirámides y bolas de granito en los remates y tejados de pizarra inclinados de influencia flamenca. El complejo integra armónicamente la Basílica de cúpula monumental, el Panteón de Reyes, las celdas del monasterio jerónimo, el Palacio Real y una suntuosa Biblioteca humanista con frescos alegóricos de Pellegrino Tibaldi.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "La imponente fachada de granito de El Escorial refleja el rigor matemático y la austeridad de Juan de Herrera.",
          "reading": "La imponente fachada de granito de El Escorial refleja el rigor matemático y la austeridad de Juan de Herrera.",
          "translation": "The imposing granite facade of El Escorial reflects the mathematical rigor and austerity of Juan de Herrera."
        },
        {
          "target": "Felipe II dirigía los asuntos de su imperio global desde una austera celda con vista directa al altar mayor de la basílica.",
          "reading": "Felipe II dirigía los asuntos de su imperio global desde una austera celda con vista directa al altar mayor de la basílica.",
          "translation": "Philip II directed the affairs of his global empire from an austere cell with a direct view of the high altar of the basilica."
        },
        {
          "target": "La Real Biblioteca de El Escorial conserva códices manuscritos de incalculable valor en árabe, griego, latín y hebreo.",
          "reading": "La Real Biblioteca de El Escorial conserva códices manuscritos de incalculable valor en árabe, griego, latín y hebreo.",
          "translation": "The Royal Library of El Escorial preserves invaluable manuscript codices in Arabic, Greek, Latin and Hebrew."
        },
        {
          "target": "Las cubiertas de pizarra con chapiteles y veletas introdujeron la tradición constructiva flamenca en la meseta castellana.",
          "reading": "Las cubiertas de pizarra con chapiteles y veletas introdujeron la tradición constructiva flamenca en la meseta castellana.",
          "translation": "The slate roofs with spires and weather vanes introduced the Flemish building tradition to the Castilian plateau."
        }
      ],
      "mnemonics": [
        "«Granito, parrilla y pizarra herreriana»: El Escorial de Felipe II condensó el imperio y la fe en un monasterio eterno."
      ],
      "culturalNotes": [
        "El Monasterio y Real Sitio de San Lorenzo de El Escorial fue incluido en la lista del Patrimonio Mundial de la UNESCO en 1984."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué arquitecto español completó y consagró el estilo clasicista y desornamentado en El Escorial?",
          "options": [
            "Juan de Herrera",
            "Antoni Gaudí",
            "Pedro de Ribera",
            "Alonso Berruguete"
          ],
          "answerIndex": 0,
          "explanation": "Juan de Herrera imprimió el sello definitivo de severidad geométrica que dio nombre al estilo herreriano."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿En conmemoración de qué batalla militar y en honor a qué santo mandó erigir Felipe II el monasterio de El Escorial?",
          "options": [
            "La batalla de San Quintín (1557) en honor a San Lorenzo mártir.",
            "La batalla de Lepanto en honor a la Virgen del Rosario.",
            "La batalla de las Navas de Tolosa en honor a Santiago Apóstol.",
            "La batalla de Bailén en honor a San Fernando rey."
          ],
          "answerIndex": 0,
          "explanation": "La victoria española en San Quintín el 10 de agosto de 1557 motivó el voto real de construir el santuario a San Lorenzo."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué elemento ornamental característico remata las esquinas, torres y cornisas de la arquitectura herreriana?",
          "options": [
            "Bolas y pirámides de granito",
            "Gárgolas antropomorfas policromadas",
            "Cariátides de mármol de Carrara",
            "Azulejos de cerámica dorada sevillana"
          ],
          "answerIndex": 0,
          "explanation": "Las bolas y pirámides sobre plintos de granito son el emblema geométrico indiscutible del estilo herreriano.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿En qué estancia sepulcral subterránea de El Escorial descansan los restos de los monarcas españoles desde Carlos I?",
          "options": [
            "El Panteón de Reyes (Cripta Real)",
            "La Cripta de los Infantes",
            "La Sala de Batallas",
            "El Patio de los Evangelistas"
          ],
          "answerIndex": 0,
          "explanation": "El Panteón de Reyes de planta circular en mármol y bronce alberga los sepulcros dinásticos de los reyes y reinas madres.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u33-l5": {
    "id": "es-u33-l5",
    "unit": 33,
    "lessonNumber": 5,
    "level": "C1",
    "title": "Maestros Contemporáneos: Santiago Calatrava, Rafael Moneo y la Vanguardia Arquitectónica",
    "objective": "Examinar el impacto global de la arquitectura española contemporánea a través de las obras maestras de Rafael Moneo (Prêmio Pritzker 1996, Ampliación del Museo del Prado, Kursaal) y Santiago Calatrava (Ciudad de las Artes y las Ciencias, ingeniería escultórica y estructuras zoomórficas cinéticas).",
    "presentation": {
      "explanation": "La arquitectura española de finales del siglo XX y principios del XXI ha conquistado un protagonismo de primer orden en el panorama internacional, simbolizado en dos figuras universales de enfoques complementarios: Rafael Moneo y Santiago Calatrava. Rafael Moneo (1937, primer arquitecto español galardonado con el Premio Pritzker en 1996) encarna la sobriedad conceptual, la sabiduría tectónica y el respeto dialéctico por el contexto urbano e histórico. Obras como el Palacio de Congresos Kursaal en San Sebastián ('dos rocas varadas' de vidrio translúcido frente al mar Cantábrico), el Museo Nacional de Arte Romano de Mérida con sus naves de ladrillo romano y el Claustro de los Jerónimos en la ampliación del Museo del Prado en Madrid demuestran cómo la modernidad puede dialogar con la memoria sin estridencias. En el polo de la ingeniería plástica monumental, Santiago Calatrava (1951, arquitecto, ingeniero de caminos y escultor) ha asombrado al mundo con sus complejas estructuras zoomórficas y cinéticas en hormigón blanco y acero, destacando el complejo futurista de la Ciudad de las Artes y las Ciencias en Valencia y puentes de arpa atirantados que desafían la gravedad en todo el planeta.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Los cubos de vidrio traslúcido del Kursaal de Rafael Moneo resplandecen como faros de luz nocturna frente al mar Cantábrico.",
          "reading": "Los cubos de vidrio traslúcido del Kursaal de Rafael Moneo resplandecen como faros de luz nocturna frente al mar Cantábrico.",
          "translation": "The translucent glass cubes of Rafael Moneo's Kursaal glow like night lighthouses facing the Cantabrian Sea."
        },
        {
          "target": "El Museo Nacional de Arte Romano de Mérida recrea la grandeza de la ingeniería romana mediante arcos diafragma de ladrillo visto.",
          "reading": "El Museo Nacional de Arte Romano de Mérida recrea la grandeza de la ingeniería romana mediante arcos diafragma de ladrillo visto.",
          "translation": "The National Museum of Roman Art in Mérida recreates the grandeur of Roman engineering through exposed brick diaphragm arches."
        },
        {
          "target": "Las estructuras blancas y curvas de Santiago Calatrava en la Ciudad de las Artes y las Ciencias evocan esqueletos de cetáceos marinos.",
          "reading": "Las estructuras blancas y curvas de Santiago Calatrava en la Ciudad de las Artes y las Ciencias evocan esqueletos de cetáceos marinos.",
          "translation": "The white curved structures of Santiago Calatrava in the City of Arts and Sciences evoke marine cetacean skeletons."
        },
        {
          "target": "La ampliación del Museo del Prado integró el claustro restaurado de los Jerónimos en un conjunto subterráneo de granito y ladrillo.",
          "reading": "La ampliación del Museo del Prado integró el claustro restaurado de los Jerónimos en un conjunto subterráneo de granito y ladrillo.",
          "translation": "The expansion of the Prado Museum integrated the restored Jerónimos cloister into an underground ensemble of granite and brick."
        }
      ],
      "mnemonics": [
        "«Moneo respeta la historia, Calatrava esculpe el movimiento»: dos cumbres maestras de la arquitectura española contemporánea."
      ],
      "culturalNotes": [
        "Rafael Moneo fue galardonado con el Premio Pritzker en 1996 y con el Premio Príncipe de Asturias de las Artes en 2012 por su magisterio e integridad arquitectónica."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "¿Qué arquitecto navarro fue el primer español en recibir el prestigioso Premio Pritzker de Arquitectura en 1996?",
          "options": [
            "Rafael Moneo",
            "Santiago Calatrava",
            "Ricardo Bofill",
            "Alberto Campo Baeza"
          ],
          "answerIndex": 0,
          "explanation": "Rafael Moneo obtuvo el Pritzker en 1996 en reconocimiento a su maestría contextual y solidez constructiva."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "¿Qué monumental complejo cultural y científico de formas futuristas diseñó Santiago Calatrava en el antiguo cauce del río Turia en Valencia?",
          "options": [
            "La Ciudad de las Artes y las Ciencias",
            "El Centro Niemeyer de Avilés",
            "El Museo Guggenheim Bilbao",
            "La Torre Agbar de Barcelona"
          ],
          "answerIndex": 0,
          "explanation": "La Ciudad de las Artes y las Ciencias (Hemisfèric, Museu de les Ciències, Palau de les Arts) es la obra más colosal de Calatrava en España."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué edificio emblemático de San Sebastián diseñado por Rafael Moneo evoca dos enormes rocas varadas de vidrio frente a la playa de Zurriola?",
          "options": [
            "Palacio de Congresos y Auditorio Kursaal",
            "Estación de Atocha",
            "Museo de Arte Romano de Mérida",
            "Fundación Pilar y Joan Miró"
          ],
          "answerIndex": 0,
          "explanation": "El Kursaal de San Sebastián es célebre por sus dos prismas inclinados de doble piel de vidrio traslúcido.",
          "type": "multiple-choice"
        },
        {
          "prompt": "¿Qué característica formal y estructural define predominantemente los puentes y edificios diseñados por Santiago Calatrava en todo el mundo?",
          "options": [
            "Estructuras escultóricas de hormigón blanco y acero inspiradas en la anatomía ósea humana y animal con cables en arpa.",
            "Construcciones rústicas de adobe y paja sin cálculo de resistencia de materiales.",
            "Bloques herméticos de ladrillo negro sin aberturas de luz natural.",
            "Réplicas exactas de templos grecorromanos con columnas corintias de yeso."
          ],
          "answerIndex": 0,
          "explanation": "La fusión de ingeniería estructural audaz y escultura biomórfica blanca es la seña de identidad del arquitecto valenciano.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "es-u34-l1": {
    "id": "es-u34-l1",
    "subject": "spanish",
    "unit": 34,
    "lessonNumber": 1,
    "title": "Diplomatic Protocols, Credentials & High-Level Bilateral Negotiations",
    "level": "C2",
    "objective": "Diplomatic Protocols, Credentials & High-Level Bilateral Negotiations (Protocolo Diplomático y Tratados Bilaterales).",
    "presentation": {
      "explanation": "En el ámbito diplomático de nivel C2, el registro lingüístico exige una precisión absoluta, cortesía formalizada y dominio de fórmulas solemnes como las cartas credenciales (*cartas credenciales*), la inmunidad diplomática (*inmunidad diplomática*), y el plácet (*plácet*). La estructura sintáctica recurre frecuentemente a construcciones pasivas con \"se\" y al subjuntivo para atenuar posturas y preservar la cortesía institucional.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El embajador presentó sus cartas credenciales ante el jefe de Estado.",
          "reading": "El embajador presentó sus cartas credenciales ante el jefe de Estado.",
          "translation": "The ambassador presented his credentials before the head of state."
        },
        {
          "target": "Ambas delegaciones convinieron en otorgar el plácet correspondiente.",
          "reading": "Ambas delegaciones convinieron en otorgar el plácet correspondiente.",
          "translation": "Both delegations agreed to grant the corresponding agrément."
        }
      ],
      "mnemonics": [
        "\"Plácet\" proviene del latín \"agrada / es aceptable\", marcando la aprobación oficial de un embajador."
      ],
      "culturalNotes": [
        "Las convenciones diplomáticas hispanas preservan el tratamiento protocolario formal de \"Excelentísimo Señor\" en correspondencia oficial."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Diplomatic Protocols, Credentials & High-Level Bilateral Negotiations (Protocolo Diplomático y Tratados Bilaterales).",
          "targetPhrase": "El embajador presentó sus cartas credenciales ante el jefe de Estado.",
          "expectedKeywords": [
            "El",
            "embajador"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Diplomatic Protocols, Credentials & High-Level Bilateral Negotiations (Protocolo Diplomático y Tratados Bilaterales).",
          "targetPhrase": "El embajador presentó sus cartas credenciales ante el jefe de Estado.",
          "expectedKeywords": [
            "El",
            "embajador"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué término diplomático designa la aceptación oficial de un embajador por parte del Estado receptor?",
          "options": [
            "El laudo",
            "La fe de erratas",
            "El salvoconducto",
            "El plácet"
          ],
          "answerIndex": 3,
          "explanation": "El \"plácet\" es la aprobación oficial previa dada a un diplomático extranjero.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identifique el uso correcto en un contexto diplomático formal:",
          "options": [
            "Pedir asilo en un comunicado de prensa no oficial.",
            "Dar unos papeles al presidente para empezar a hablar.",
            "Presentar las cartas credenciales conforme al protocolo de Estado.",
            "Mandar una nota cualquiera sin sello."
          ],
          "answerIndex": 2,
          "explanation": "Presentar las cartas credenciales es el acto protocolario formal.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Diplomatic Protocols, Credentials & High-Level Bilateral Negotiations (Protocolo Diplomático y Tratados Bilaterales).",
          "targetPhrase": "El embajador presentó sus cartas credenciales ante el jefe de Estado.",
          "expectedKeywords": [
            "El",
            "embajador"
          ]
        }
      ]
    }
  },
  "es-u34-l2": {
    "id": "es-u34-l2",
    "subject": "spanish",
    "unit": 34,
    "lessonNumber": 2,
    "title": "Multilateral Treaties, Ratification & Treaty Reservations",
    "level": "C2",
    "objective": "Multilateral Treaties, Ratification & Treaty Reservations (Tratados Multilaterales y Ratificación).",
    "presentation": {
      "explanation": "El derecho de los tratados (Convención de Viena de 1969) exige dominar distinciones precisas entre la firma *ad referéndum*, la ratificación por el órgano legislativo, el depósito de instrumentos y las reservas formuladas a cláusulas específicas. Se emplean perífrasis modales y verbos jurídicos como *supeditar*, *vincular*, *dirimir* y *adscribirse*.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El instrumento de ratificación fue depositado en la Secretaría General.",
          "reading": "El instrumento de ratificación fue depositado en la Secretaría General.",
          "translation": "The instrument of ratification was deposited with the Secretariat General."
        },
        {
          "target": "El Estado firmante formuló una reserva expresa respecto del artículo noveno.",
          "reading": "El Estado firmante formuló una reserva expresa respecto del artículo noveno.",
          "translation": "The signatory state formulated an express reservation regarding article nine."
        }
      ],
      "mnemonics": [
        "\"Ad referéndum\" indica que la firma queda sujeta a la aprobación posterior del poder legislativo."
      ],
      "culturalNotes": [
        "El depósito de tratados multilaterales en el sistema interamericano se realiza ante la Secretaría General de la OEA o la ONU."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Multilateral Treaties, Ratification & Treaty Reservations (Tratados Multilaterales y Ratificación).",
          "targetPhrase": "El instrumento de ratificación fue depositado en la Secretaría General.",
          "expectedKeywords": [
            "El",
            "instrumento"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Multilateral Treaties, Ratification & Treaty Reservations (Tratados Multilaterales y Ratificación).",
          "targetPhrase": "El instrumento de ratificación fue depositado en la Secretaría General.",
          "expectedKeywords": [
            "El",
            "instrumento"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Cuál es la función jurídica de una \"reserva\" en un tratado internacional?",
          "options": [
            "Acelerar la fecha de entrada en vigor sin debate parlamentario.",
            "Anular la totalidad del tratado para todas las partes.",
            "Excluir o modificar los efectos jurídicos de ciertas disposiciones para el Estado declarante.",
            "Declarar la guerra a los demás firmantes."
          ],
          "answerIndex": 2,
          "explanation": "Una reserva busca excluir o modificar los efectos de disposiciones específicas.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Multilateral Treaties, Ratification & Treaty Reservations (Tratados Multilaterales y Ratificación).",
          "targetPhrase": "El instrumento de ratificación fue depositado en la Secretaría General.",
          "expectedKeywords": [
            "El",
            "instrumento"
          ]
        }
      ]
    }
  },
  "es-u34-l3": {
    "id": "es-u34-l3",
    "subject": "spanish",
    "unit": 34,
    "lessonNumber": 3,
    "title": "Peacekeeping Mandates, Conflict Resolution & Armistice Agreements",
    "level": "C2",
    "objective": "Peacekeeping Mandates, Conflict Resolution & Armistice Agreements (Misiones de Paz y Armisticios).",
    "presentation": {
      "explanation": "El análisis de la resolución de conflictos internacionales requiere terminología especializada: el alto el fuego (*cese al fuego*), la demarcación de zonas desmilitarizadas, el despliegue de cascos azules (*fuerzas de mantenimiento de la paz*) y la mediación neutral vinculante.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "El Consejo de Seguridad renovó por unanimidad el mandato de la misión de paz.",
          "reading": "El Consejo de Seguridad renovó por unanimidad el mandato de la misión de paz.",
          "translation": "The Security Council unanimously renewed the peacekeeping mission mandate."
        },
        {
          "target": "Se acordó un cese al fuego bilateral bajo supervisión internacional.",
          "reading": "Se acordó un cese al fuego bilateral bajo supervisión internacional.",
          "translation": "A bilateral ceasefire was agreed upon under international supervision."
        }
      ],
      "mnemonics": [
        "\"Armisticio\" viene del latín \"arma\" + \"sistere\" (detener las armas)."
      ],
      "culturalNotes": [
        "Los acuerdos de paz en el mundo hispanohablante (como los de Chapultepec o La Habana) establecieron marcos de justicia transicional."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Peacekeeping Mandates, Conflict Resolution & Armistice Agreements (Misiones de Paz y Armisticios).",
          "targetPhrase": "El Consejo de Seguridad renovó por unanimidad el mandato de la misión de paz.",
          "expectedKeywords": [
            "El",
            "Consejo"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Peacekeeping Mandates, Conflict Resolution & Armistice Agreements (Misiones de Paz y Armisticios).",
          "targetPhrase": "El Consejo de Seguridad renovó por unanimidad el mandato de la misión de paz.",
          "expectedKeywords": [
            "El",
            "Consejo"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué órgano internacional tiene la potestad exclusiva de autorizar misiones de paz vinculantes bajo el Capítulo VII?",
          "options": [
            "La Corte Internacional de Arbitraje Deportivo",
            "El Consejo de Seguridad de la ONU",
            "La Comisión Mixta de Turismo",
            "El Banco Mundial"
          ],
          "answerIndex": 1,
          "explanation": "El Consejo de Seguridad de la ONU es el único facultado para emitir resoluciones bajo el Capítulo VII.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: Peacekeeping Mandates, Conflict Resolution & Armistice Agreements (Misiones de Paz y Armisticios).",
          "targetPhrase": "El Consejo de Seguridad renovó por unanimidad el mandato de la misión de paz.",
          "expectedKeywords": [
            "El",
            "Consejo"
          ]
        }
      ]
    }
  },
  "es-u34-l4": {
    "id": "es-u34-l4",
    "subject": "spanish",
    "unit": 34,
    "lessonNumber": 4,
    "title": "International Sanctions, Embargoes & Extraterritorial Jurisdiction",
    "level": "C2",
    "objective": "International Sanctions, Embargoes & Extraterritorial Jurisdiction (Sanciones Internacionales y Jurisdicción Extraterritorial).",
    "presentation": {
      "explanation": "En este nivel se examina el léxico de las medidas coercitivas no armadas: embargos comerciales, congelación de activos soberanos (*congelación de activos*), tribunales *ad hoc*, y la aplicación del principio de jurisdicción universal en crímenes de lesa humanidad.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Las sanciones económicas contemplan la congelación cautelar de activos bancarios.",
          "reading": "Las sanciones económicas contemplan la congelación cautelar de activos bancarios.",
          "translation": "The economic sanctions include the precautionary freezing of bank assets."
        },
        {
          "target": "La Corte Penal Internacional dictó una orden de detención internacional.",
          "reading": "La Corte Penal Internacional dictó una orden de detención internacional.",
          "translation": "The International Criminal Court issued an international arrest warrant."
        }
      ],
      "mnemonics": [
        "\"Cautelar\" denota una medida preventiva para asegurar el cumplimiento de una eventual sentencia."
      ],
      "culturalNotes": [
        "La jurisprudencia española tuvo un papel pionero en la aplicación del principio de justicia universal en la década de 1990."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: International Sanctions, Embargoes & Extraterritorial Jurisdiction (Sanciones Internacionales y Jurisdicción Extraterritorial).",
          "targetPhrase": "Las sanciones económicas contemplan la congelación cautelar de activos bancarios.",
          "expectedKeywords": [
            "Las",
            "sanciones"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: International Sanctions, Embargoes & Extraterritorial Jurisdiction (Sanciones Internacionales y Jurisdicción Extraterritorial).",
          "targetPhrase": "Las sanciones económicas contemplan la congelación cautelar de activos bancarios.",
          "expectedKeywords": [
            "Las",
            "sanciones"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "¿Qué implica el principio de \"jurisdicción universal\"?",
          "options": [
            "La potestad de un tribunal de juzgar crímenes atroces sin importar la nacionalidad o lugar donde se cometieron.",
            "El cobro universal de impuestos en aeropuertos internacionales.",
            "El derecho a navegar por ríos privados sin autorización.",
            "La obligación de registrar todas las empresas en una única bolsa de valores."
          ],
          "answerIndex": 0,
          "explanation": "La jurisdicción universal permite juzgar crímenes internacionales graves como genocidio o crímenes de lesa humanidad.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: International Sanctions, Embargoes & Extraterritorial Jurisdiction (Sanciones Internacionales y Jurisdicción Extraterritorial).",
          "targetPhrase": "Las sanciones económicas contemplan la congelación cautelar de activos bancarios.",
          "expectedKeywords": [
            "Las",
            "sanciones"
          ]
        }
      ]
    }
  },
  "es-u34-l5": {
    "id": "es-u34-l5",
    "subject": "spanish",
    "unit": 34,
    "lessonNumber": 5,
    "title": "C2 Capstone Defense: Multilateral Communiqué Drafting & High-Stakes Diplomacy Simulation",
    "level": "C2",
    "objective": "C2 Capstone Defense: Multilateral Communiqué Drafting & High-Stakes Diplomacy Simulation (Cumbre Diplomática y Comunicado Final).",
    "presentation": {
      "explanation": "El ejercicio de maestría C2 consiste en la redacción y defensa de un Comunicado Conjunto (*Declaración Conjunta*) que sintetice compromisos vinculantes, mecanismos de seguimiento (*mecanismos de seguimiento*) y cláusulas de salvaguardia sin romper el consenso unánime entre delegaciones soberanas.\n\n### Texto de Inmersión y Análisis Estructural (Spanish C1/C2)\nEn esta lección avanzada, profundizamos en las estructuras retóricas, la precisión estilística y el léxico especializado indispensable para la fluidez profesional.\n\n**Puntos clave de dominio:**\n1. Cohesión discursiva y conectores argumentativos.\n2. Registro formal, matices pragmáticos y adecuación contextual.\n3. Vocabulario técnico, diplomático y literario avanzado.",
      "examples": [
        {
          "target": "Los Estados parte reafirman su compromiso irrenunciable con la solución pacífica de controversias.",
          "reading": "Los Estados parte reafirman su compromiso irrenunciable con la solución pacífica de controversias.",
          "translation": "The States Parties reaffirm their unrenounceable commitment to the peaceful settlement of disputes."
        },
        {
          "target": "Queda constituido el comité de seguimiento con reuniones semestrales obligatorias.",
          "reading": "Queda constituido el comité de seguimiento con reuniones semestrales obligatorias.",
          "translation": "The follow-up committee is hereby established with mandatory semi-annual meetings."
        }
      ],
      "mnemonics": [
        "\"Irrenunciable\" expresa la imposibilidad jurídica de desistir voluntariamente de un derecho o deber esencial."
      ],
      "culturalNotes": [
        "La redacción de declaraciones multilaterales requiere un equilibrio estilístico donde cada adjetivo y coma puede alterar compromisos financieros o territoriales."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: C2 Capstone Defense: Multilateral Communiqué Drafting & High-Stakes Diplomacy Simulation (Cumbre Diplomática y Comunicado Final).",
          "targetPhrase": "Los Estados parte reafirman su compromiso irrenunciable con la solución pacífica de controversias.",
          "expectedKeywords": [
            "Los",
            "Estados"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: C2 Capstone Defense: Multilateral Communiqué Drafting & High-Stakes Diplomacy Simulation (Cumbre Diplomática y Comunicado Final).",
          "targetPhrase": "Los Estados parte reafirman su compromiso irrenunciable con la solución pacífica de controversias.",
          "expectedKeywords": [
            "Los",
            "Estados"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "En la redacción de un comunicado multilateral formal, ¿cuál es la fórmula canónica de apertura de compromisos?",
          "options": [
            "\"A ver si los países firmantes quieren hacer algo...\"",
            "\"Oigan todos, decidimos que a partir de mañana...\"",
            "\"Dejamos este comunicado por si alguien le interesa leerlo...\"",
            "\"Los Estados parte convienen por unanimidad en reafirmar...\""
          ],
          "answerIndex": 3,
          "explanation": "\"Los Estados parte convienen por unanimidad en reafirmar...\" es la fórmula protocolaria canónica.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in SPANISH concerning: C2 Capstone Defense: Multilateral Communiqué Drafting & High-Stakes Diplomacy Simulation (Cumbre Diplomática y Comunicado Final).",
          "targetPhrase": "Los Estados parte reafirman su compromiso irrenunciable con la solución pacífica de controversias.",
          "expectedKeywords": [
            "Los",
            "Estados"
          ]
        }
      ]
    }
  }
};
  var CURRICULUM = { id: 'spanish', name: "Spanish", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['spanish'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
