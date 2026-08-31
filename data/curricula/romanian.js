// FEARN Curriculum Data — Romanian
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "u1",
        "name": "Unit 1",
        "goal": "By the end of this unit, learners can greet people appropriately and introduce themselves with basic personal details. Grammar/vocabulary focus: Greetings, a fi (to be), subject pronouns, self-introduction.",
        "level": "A1",
        "lessonIds": [
            "ro-u1-l1",
            "ro-u1-l2",
            "ro-u1-l3",
            "ro-u1-l4",
            "ro-u1-l5"
        ]
    },
    {
        "id": "u2",
        "name": "Unit 2",
        "goal": "By the end of this unit, learners can state numbers, tell time, and talk about dates and days of the week. Grammar/vocabulary focus: Numbers, time, days/months.",
        "level": "A1",
        "lessonIds": [
            "ro-u2-l1",
            "ro-u2-l2",
            "ro-u2-l3",
            "ro-u2-l4",
            "ro-u2-l5"
        ]
    },
    {
        "id": "u3",
        "name": "Unit 3",
        "goal": "By the end of this unit, learners can describe their immediate family and other people using simple sentences. Grammar/vocabulary focus: Family vocabulary, possessive adjectives with case agreement, the definite article suffix.",
        "level": "A1",
        "lessonIds": [
            "ro-u3-l1",
            "ro-u3-l2",
            "ro-u3-l3",
            "ro-u3-l4",
            "ro-u3-l5"
        ]
    },
    {
        "id": "u4",
        "name": "Unit 4",
        "goal": "By the end of this unit, learners can form basic present-tense sentences describing states and actions. Grammar/vocabulary focus: Present-tense conjugation groups (-a, -ea, -e, -i, -î verbs).",
        "level": "A1",
        "lessonIds": [
            "ro-u4-l1",
            "ro-u4-l2",
            "ro-u4-l3",
            "ro-u4-l4",
            "ro-u4-l5"
        ]
    },
    {
        "id": "u5",
        "name": "Unit 5",
        "goal": "By the end of this unit, learners can describe a typical daily routine using common action verbs. Grammar/vocabulary focus: Daily-routine reflexive verbs, present irregulars (a avea, a merge).",
        "level": "A1",
        "lessonIds": [
            "ro-u5-l1",
            "ro-u5-l2",
            "ro-u5-l3",
            "ro-u5-l4",
            "ro-u5-l5"
        ]
    },
    {
        "id": "u6",
        "name": "Unit 6",
        "goal": "By the end of this unit, learners can order food and drink and talk about likes and dislikes at a basic level. Grammar/vocabulary focus: Food vocabulary, the dative-liking construction a-i plăcea, ordering.",
        "level": "A1",
        "lessonIds": [
            "ro-u6-l1",
            "ro-u6-l2",
            "ro-u6-l3",
            "ro-u6-l4",
            "ro-u6-l5"
        ]
    },
    {
        "id": "u7",
        "name": "Unit 7",
        "goal": "By the end of this unit, learners can narrate simple completed past events. Grammar/vocabulary focus: Perfect compus (compound past) narration.",
        "level": "A2",
        "lessonIds": [
            "ro-u7-l1",
            "ro-u7-l2",
            "ro-u7-l3",
            "ro-u7-l4",
            "ro-u7-l5"
        ]
    },
    {
        "id": "u8",
        "name": "Unit 8",
        "goal": "By the end of this unit, learners can shop for goods, discuss prices, and compare items. Grammar/vocabulary focus: Shopping, comparatives mai...decât.",
        "level": "A2",
        "lessonIds": [
            "ro-u8-l1",
            "ro-u8-l2",
            "ro-u8-l3",
            "ro-u8-l4",
            "ro-u8-l5"
        ]
    },
    {
        "id": "u9",
        "name": "Unit 9",
        "goal": "By the end of this unit, learners can ask for and give directions and describe how to get somewhere. Grammar/vocabulary focus: Prepositions of place, directions, case governance.",
        "level": "A2",
        "lessonIds": [
            "ro-u9-l1",
            "ro-u9-l2",
            "ro-u9-l3",
            "ro-u9-l4",
            "ro-u9-l5"
        ]
    },
    {
        "id": "u10",
        "name": "Unit 10",
        "goal": "By the end of this unit, learners can describe their home and daily surroundings in more detail. Grammar/vocabulary focus: Imperfect tense, describing home and past routines.",
        "level": "A2",
        "lessonIds": [
            "ro-u10-l1",
            "ro-u10-l2",
            "ro-u10-l3",
            "ro-u10-l4",
            "ro-u10-l5"
        ]
    },
    {
        "id": "u11",
        "name": "Unit 11",
        "goal": "By the end of this unit, learners can talk about health, body parts, and give simple medical descriptions. Grammar/vocabulary focus: Body vocabulary, dative pain constructions (mă doare), trebuie să obligation.",
        "level": "A2",
        "lessonIds": [
            "ro-u11-l1",
            "ro-u11-l2",
            "ro-u11-l3",
            "ro-u11-l4",
            "ro-u11-l5"
        ]
    },
    {
        "id": "u12",
        "name": "Unit 12",
        "goal": "By the end of this unit, learners can discuss future plans and describe the weather. Grammar/vocabulary focus: Future tense (voi + infinitive / o să), weather.",
        "level": "A2",
        "lessonIds": [
            "ro-u12-l1",
            "ro-u12-l2",
            "ro-u12-l3",
            "ro-u12-l4",
            "ro-u12-l5"
        ]
    },
    {
        "id": "u13",
        "name": "Unit 13",
        "goal": "By the end of this unit, learners can talk about their job or studies and ongoing actions. Grammar/vocabulary focus: Present-continuous nuance, work/study vocabulary, a ști vs. a cunoaște.",
        "level": "B1",
        "lessonIds": [
            "ro-u13-l1",
            "ro-u13-l2",
            "ro-u13-l3",
            "ro-u13-l4",
            "ro-u13-l5"
        ]
    },
    {
        "id": "u14",
        "name": "Unit 14",
        "goal": "By the end of this unit, learners can express opinions and preferences with simple justification. Grammar/vocabulary focus: Opinion verbs, subjunctive (conjunctiv) introduction after a vrea/a trebui.",
        "level": "B1",
        "lessonIds": [
            "ro-u14-l1",
            "ro-u14-l2",
            "ro-u14-l3",
            "ro-u14-l4",
            "ro-u14-l5"
        ]
    },
    {
        "id": "u15",
        "name": "Unit 15",
        "goal": "By the end of this unit, learners can plan a trip and describe past travel experiences. Grammar/vocabulary focus: Travel vocabulary, perfect-tense recap, experiences.",
        "level": "B1",
        "lessonIds": [
            "ro-u15-l1",
            "ro-u15-l2",
            "ro-u15-l3",
            "ro-u15-l4",
            "ro-u15-l5"
        ]
    },
    {
        "id": "u16",
        "name": "Unit 16",
        "goal": "By the end of this unit, learners can discuss hypothetical situations and simple conditions. Grammar/vocabulary focus: Conditional mood (aș, ai, ar), hypotheticals with dacă.",
        "level": "B1",
        "lessonIds": [
            "ro-u16-l1",
            "ro-u16-l2",
            "ro-u16-l3",
            "ro-u16-l4",
            "ro-u16-l5"
        ]
    },
    {
        "id": "u17",
        "name": "Unit 17",
        "goal": "By the end of this unit, learners can understand and discuss media content and report what others said. Grammar/vocabulary focus: Passive voice, media vocabulary, reported speech.",
        "level": "B1",
        "lessonIds": [
            "ro-u17-l1",
            "ro-u17-l2",
            "ro-u17-l3",
            "ro-u17-l4",
            "ro-u17-l5"
        ]
    },
    {
        "id": "u18",
        "name": "Unit 18",
        "goal": "By the end of this unit, learners can talk about relationships and emotions in more nuanced ways. Grammar/vocabulary focus: Clitic pronoun doubling, relationships vocabulary, imperative mood.",
        "level": "B1",
        "lessonIds": [
            "ro-u18-l1",
            "ro-u18-l2",
            "ro-u18-l3",
            "ro-u18-l4",
            "ro-u18-l5"
        ]
    },
    {
        "id": "u19",
        "name": "Unit 19",
        "goal": "By the end of this unit, learners can debate abstract topics and support opinions with reasons. Grammar/vocabulary focus: Subjunctive for doubt/opinion, debate connectors.",
        "level": "B2",
        "lessonIds": [
            "ro-u19-l1",
            "ro-u19-l2",
            "ro-u19-l3",
            "ro-u19-l4",
            "ro-u19-l5"
        ]
    },
    {
        "id": "u20",
        "name": "Unit 20",
        "goal": "By the end of this unit, learners can adjust tone and vocabulary between formal and informal contexts. Grammar/vocabulary focus: Formal dumneavoastră vs. informal tu register.",
        "level": "B2",
        "lessonIds": [
            "ro-u20-l1",
            "ro-u20-l2",
            "ro-u20-l3",
            "ro-u20-l4",
            "ro-u20-l5"
        ]
    },
    {
        "id": "u21",
        "name": "Unit 21",
        "goal": "By the end of this unit, learners can report what someone else said and narrate complex event sequences. Grammar/vocabulary focus: Reported speech backshift, past subjunctive.",
        "level": "B2",
        "lessonIds": [
            "ro-u21-l1",
            "ro-u21-l2",
            "ro-u21-l3",
            "ro-u21-l4",
            "ro-u21-l5"
        ]
    },
    {
        "id": "u22",
        "name": "Unit 22",
        "goal": "By the end of this unit, learners can discuss more complex hypothetical and counterfactual situations. Grammar/vocabulary focus: Conditional perfect (aș fi făcut), advanced hypotheticals.",
        "level": "B2",
        "lessonIds": [
            "ro-u22-l1",
            "ro-u22-l2",
            "ro-u22-l3",
            "ro-u22-l4",
            "ro-u22-l5"
        ]
    },
    {
        "id": "u23",
        "name": "Unit 23",
        "goal": "By the end of this unit, learners can discuss environmental and social issues with supporting detail. Grammar/vocabulary focus: Passive voice for social commentary, environment vocabulary.",
        "level": "B2",
        "lessonIds": [
            "ro-u23-l1",
            "ro-u23-l2",
            "ro-u23-l3",
            "ro-u23-l4",
            "ro-u23-l5"
        ]
    },
    {
        "id": "u24",
        "name": "Unit 24",
        "goal": "By the end of this unit, learners can use common idiomatic expressions naturally in conversation. Grammar/vocabulary focus: Idiomatic expressions.",
        "level": "B2",
        "lessonIds": [
            "ro-u24-l1",
            "ro-u24-l2",
            "ro-u24-l3",
            "ro-u24-l4",
            "ro-u24-l5"
        ]
    },
    {
        "id": "u25",
        "name": "Unit 25",
        "goal": "By the end of this unit, learners can construct nuanced arguments with supporting and opposing viewpoints. Grammar/vocabulary focus: Advanced connectors (totuși, prin urmare).",
        "level": "C1",
        "lessonIds": [
            "ro-u25-l1",
            "ro-u25-l2",
            "ro-u25-l3",
            "ro-u25-l4",
            "ro-u25-l5"
        ]
    },
    {
        "id": "u26",
        "name": "Unit 26",
        "goal": "By the end of this unit, learners can use professional and academic language appropriately in writing and speech. Grammar/vocabulary focus: Professional/academic register.",
        "level": "C1",
        "lessonIds": [
            "ro-u26-l1",
            "ro-u26-l2",
            "ro-u26-l3",
            "ro-u26-l4",
            "ro-u26-l5"
        ]
    },
    {
        "id": "u27",
        "name": "Unit 27",
        "goal": "By the end of this unit, learners can analyze literary and cultural texts and discuss their meaning. Grammar/vocabulary focus: Literary analysis (Eminescu, Creangă excerpts).",
        "level": "C1",
        "lessonIds": [
            "ro-u27-l1",
            "ro-u27-l2",
            "ro-u27-l3",
            "ro-u27-l4",
            "ro-u27-l5"
        ]
    },
    {
        "id": "u28",
        "name": "Unit 28",
        "goal": "By the end of this unit, learners can use a wide range of idioms and proverbs accurately. Grammar/vocabulary focus: Advanced idioms and proverbe.",
        "level": "C1",
        "lessonIds": [
            "ro-u28-l1",
            "ro-u28-l2",
            "ro-u28-l3",
            "ro-u28-l4",
            "ro-u28-l5"
        ]
    },
    {
        "id": "u29",
        "name": "Unit 29",
        "goal": "By the end of this unit, learners can use discourse markers to structure extended, natural-sounding speech. Grammar/vocabulary focus: Discourse markers (adică, deci, oricum).",
        "level": "C1",
        "lessonIds": [
            "ro-u29-l1",
            "ro-u29-l2",
            "ro-u29-l3",
            "ro-u29-l4",
            "ro-u29-l5"
        ]
    },
    {
        "id": "u30",
        "name": "Unit 30",
        "goal": "By the end of this unit, learners can understand native-speed humor, wordplay, and slang. Grammar/vocabulary focus: Native slang, regional humor.",
        "level": "C2",
        "lessonIds": [
            "ro-u30-l1",
            "ro-u30-l2",
            "ro-u30-l3",
            "ro-u30-l4",
            "ro-u30-l5"
        ]
    },
    {
        "id": "u31",
        "name": "Unit 31",
        "goal": "By the end of this unit, learners can understand and use specialized legal, medical, and technical vocabulary. Grammar/vocabulary focus: Legal, medical, and technical vocabulary.",
        "level": "C2",
        "lessonIds": [
            "ro-u31-l1",
            "ro-u31-l2",
            "ro-u31-l3",
            "ro-u31-l4",
            "ro-u31-l5"
        ]
    },
    {
        "id": "u32",
        "name": "Unit 32",
        "goal": "By the end of this unit, learners can construct persuasive, rhetorically effective arguments. Grammar/vocabulary focus: Rhetorical persuasion structures.",
        "level": "C2",
        "lessonIds": [
            "ro-u32-l1",
            "ro-u32-l2",
            "ro-u32-l3",
            "ro-u32-l4",
            "ro-u32-l5"
        ]
    },
    {
        "id": "u33",
        "name": "Unit 33",
        "goal": "By the end of this unit, learners can recognize and adapt to dialectal and sociolinguistic variation. Grammar/vocabulary focus: Dialect variation (Moldovan, Transylvanian, Banat).",
        "level": "C2",
        "lessonIds": [
            "ro-u33-l1",
            "ro-u33-l2",
            "ro-u33-l3",
            "ro-u33-l4",
            "ro-u33-l5"
        ]
    },
    {
        "id": "u34",
        "name": "Unit 34",
        "goal": "By the end of this unit, learners can synthesize all prior skills to communicate with near-native fluency across contexts. Grammar/vocabulary focus: Capstone: mixed-register fluency synthesis project.",
        "level": "C2",
        "lessonIds": [
            "ro-u34-l1",
            "ro-u34-l2",
            "ro-u34-l3",
            "ro-u34-l4",
            "ro-u34-l5"
        ]
    }
];
  var LESSONS = {
  "ro-u1-l1": {
    "id": "ro-u1-l1",
    "subject": "romanian",
    "unit": 1,
    "lessonNumber": 1,
    "title": "Alfabetul Român, Cele 5 Diacritice (ă, â, î, ș, ț) și Articolul Hotărât Enclitic (Romanian Alphabet & Diacritics)",
    "level": "A1",
    "objective": "Master the 31-letter Romanian alphabet, the 5 special diacritics (ă, â, î, ș, ț), enclitic definite article suffixes (-ul, -a, -le), and core greetings.",
    "presentation": {
      "explanation": "Bine ați venit în limba română! Welcome to Romanian (română)! Romanian is the sole Eastern Romance language that directly preserves ancient Latin case declensions and enclitic definite articles, surrounded by Slavic linguistic neighbors.\n\n### 1. Cele 5 Diacritice Românești (The 5 Romanian Diacritic Letters)\n- **Ă ă** [ə] — Mid-central schwa vowel (like \"a\" in \"about\" or \"sofa\" — e.g. **apă** = water, **măr** = apple, **bună** = good)\n- **Â â** and **Î î** [ɨ] — Close central unrounded vowel (make an \"ee\" in the back of your throat with relaxed lips — e.g. **România** = Romania, **câine** = dog, **înțeleg** = I understand). *Spelling rule: «Î» appears at the start and end of words (în, a urî); «Â» appears strictly inside words (român, pâine).*\n- **Ș ș** [ʃ] — Voiceless postalveolar fricative (like \"sh\" in \"shoe\" — e.g. **și** = and, **școală** = school, **mulțumesc** = thank you)\n- **Ț ț** [ts] — Voiceless alveolar affricate (like \"ts\" in \"cats\" — e.g. **țară** = country, **băiat** = boy, **viață** = life)\n*(Note: Romanian diacritics officially use a comma below (ș, ț), NOT a cedilla!)*\n\n### 2. Enclitic Definite Articles (Articolul Hotărât)\nUnlike English (\"the book\") or Spanish (\"el libro\"), Romanian attaches the definite article **to the end of the noun**:\n- Masculine: **băiat** (boy) &rarr; **băiatul** (the boy), **om** (man) &rarr; **omul** (the man)\n- Feminine: **fată** (girl) &rarr; **fata** (the girl), **carte** (book) &rarr; **cartea** (the book)\n- Plural: **băieți** (boys) &rarr; **băieții** (the boys), **fete** (girls) &rarr; **fetele** (the girls)",
      "examples": [
        {
          "target": "apă",
          "reading": "AH-puh",
          "translation": "water (a + p + ă [schwa])"
        },
        {
          "target": "mulțumesc",
          "reading": "mool-tsoo-MESK",
          "translation": "thank you (ț [ts] + u + m + e + s + c)"
        },
        {
          "target": "bună",
          "reading": "BOO-nuh",
          "translation": "good / hello (b + u + n + ă)"
        },
        {
          "target": "România",
          "reading": "roh-mɨ-NEE-ah",
          "translation": "Romania (â [central ɨ])"
        }
      ],
      "mnemonics": [
        "Ș has a comma for Shoe [sh]. Ț has a comma for caTs [ts]. Ă is a relaxed \"uh\" (apă = water)!"
      ],
      "culturalNotes": [
        "Romanian preserves over 70% of core Latin lexicon while incorporating ancient Dacian roots and medieval Slavic vocabulary, creating a unique Romance harmony in Eastern Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What sound does the Romanian diacritic letter «Ț ț» (with comma below) make in words like «țară» (country) and «mulțumesc» (thank you)?",
          "options": [
            "Like \"ts\" in \"cats\"",
            "Like \"sh\" in \"shoe\"",
            "Like \"ch\" in \"chair\"",
            "Like \"th\" in \"this\""
          ],
          "answerIndex": 0,
          "explanation": "«Ț ț» represents the voiceless alveolar affricate [ts]."
        },
        {
          "prompt": "How does Romanian uniquely attach the definite article \"the\" to nouns (e.g. băiat &rarr; băiatul)?",
          "options": [
            "As an enclitic suffix attached directly to the end of the noun",
            "As a separate word placed before the noun",
            "By capitalizing the noun",
            "By changing the vowel"
          ],
          "answerIndex": 0,
          "explanation": "Romanian attaches definite articles as enclitic suffixes to the end of nouns (e.g. *omul*, *fata*)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What sound does the letter «Ă ă» represent in Romanian words like «apă» (water)?",
          "options": [
            "A mid-central schwa vowel",
            "A long \"aa\" sound",
            "A short \"ee\" sound",
            "Silent"
          ],
          "answerIndex": 0,
          "explanation": "«Ă ă» is the mid-central schwa vowel [ə]."
        },
        {
          "prompt": "Select the Romanian word meaning \"thank you\" spelled with the letter «ț» «mulțumesc»:",
          "options": [
            "mulțumesc",
            "apă",
            "bună",
            "țară"
          ],
          "answerIndex": 0,
          "explanation": "«mulțumesc» is the universal Romanian expression of gratitude."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "What does the Romanian word «apă» mean in English?",
          "options": [
            "water",
            "bread",
            "house",
            "street"
          ],
          "answerIndex": 0,
          "explanation": "«apă» means \"water\"."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the Romanian word for \"water\" (a-p-a with schwa):",
          "acceptedAnswers": [
            "apă",
            "apa"
          ],
          "explanation": "«apă» = water.",
          "acceptableAnswers": [
            "apă",
            "apa"
          ]
        }
      ]
    }
  },
  "ro-u1-l2": {
    "id": "ro-u1-l2",
    "unit": "ro-u1",
    "level": "A1",
    "objective": "Conjugate a fi (to be) for all subject pronouns, master the non-syllabic palatalized final 'i' [ʲ] and 'ț' [ts] in verb endings, and build basic identity sentences.",
    "prerequisites": [
      "ro-u1-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u1-l1"
      ]
    },
    "presentation": {
      "explanation": "a fi (to be) is Romanian's most important irregular verb, and like most 'to be' verbs across languages, it doesn't follow a clean pattern — it just has to be memorized: eu sunt (I am), tu ești (you are, informal), el/ea este — often shortened to e in speech — (he/she is), noi suntem (we are), voi sunteți (you are, informal plural), ei/ele sunt (they are). Now the formality piece: dumneavoastră is the formal 'you', used for strangers, elders, and professional contexts — and it conjugates exactly like voi (informal plural you): dumneavoastră sunteți, even when addressing a single person formally. This mirrors a pattern you'll see across many European languages (French vous, German Sie): the formal singular 'borrows' the plural verb form. Subject pronouns themselves (eu, tu, el/ea, noi, voi, ei/ele) are often DROPPED in Romanian once the meaning is clear from the verb ending — Sunt Ana works fine for 'I am Ana' without eu, similar to Spanish or Italian.\n\n### 🔤 Crucial Phonetic Trap: Non-syllabic Final 'i' [ʲ] vs Full Syllable 'i':\nOne of the biggest mistakes English speakers make in Romanian is pronouncing a final letter 'i' as a full vowel syllable 'ee'.\n- In *tu ești* [eʃtʲ] and *București* [bukuˈreʃtʲ], the final **-i** is **non-syllabic / asyllabic (palatalized)**. It does not add an extra beat or syllable; it simply softens/palatalizes the preceding consonant cluster (like a slight 'y' whisper attached to the 't').\n- Contrast with *sunteți* [sunˈtetsʲ] where **ț** is [ts] followed by the subtle palatalized whisper, while *suntem* [sunˈtem] has a fully vocalized 'e'.",
      "examples": [
        {
          "target": "Eu sunt din București. Tu ești de aici?",
          "reading": "[ew sunt din bukuˈreʃtʲ. tu eʃtʲ de aˈitʃʲ?]",
          "translation": "I am from Bucharest. Are you from here? (informal — notice București and ești end in non-syllabic softened 'i' [ʲ], NOT 'ee')"
        },
        {
          "target": "Dumneavoastră sunteți domnul Popescu?",
          "reading": "[dumne̯aˈvo̯astrə sunˈtetsʲ ˈdomnul poˈpesku?]",
          "translation": "Are you Mr. Popescu? (formal — sunteți features ț [ts] + soft final i)"
        },
        {
          "target": "Noi suntem prieteni, iar ei sunt colegii mei.",
          "reading": "[noj sunˈtem priˈyetenʲ, jar ej sunt koˈledʒij mej.]",
          "translation": "We are friends, and they are my colleagues. (prieteni ends in palatalized [nʲ])"
        },
        {
          "target": "Sunt obosită azi.",
          "reading": "[sunt oboˈsitə azʲ.]",
          "translation": "I'm tired today. (eu dropped — the sunt ending already shows it's 'I')"
        }
      ],
      "mnemonics": [
        "dumneavoastră conjugates exactly like voi — sunteți for both — because the formal 'you' historically borrows the plural verb form, the same trick French (vous) and German (Sie) both play.",
        "The 'Ghost i' Rule: Final 'i' after a consonant in ești or București is not a whole step 'ee' — it's a ghost-whisper 'y' [ʲ] that curls the consonant without making a new syllable!",
        "Subject pronouns are optional scaffolding in Romanian: once you know sunt = 'I am' and ești = 'you are', you can drop eu and tu entirely and still be perfectly clear, just like Sunt Ana instead of Eu sunt Ana."
      ],
      "culturalNotes": [
        "Using tu with someone clearly older, a stranger in a professional setting, or anyone in a position of authority (without being invited to) can come across as overly familiar — dumneavoastră is the safer default until you're explicitly told 'poți să-mi spui tu' ('you can use tu with me')."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How is the final '-i' pronounced in Romanian words like 'ești' and 'București'?",
          "options": [
            "As a loud two-syllable 'ee-ee'",
            "As a non-syllabic palatalization",
            "As a silent letter like in French",
            "As an English 'eye' diphthong"
          ],
          "answerIndex": 1,
          "explanation": "Final -i after a consonant is generally non-syllabic [ʲ], softening the preceding consonant."
        },
        {
          "prompt": "Eu ___ din România. (I am from Romania)",
          "options": [
            "sunt",
            "ești",
            "suntem",
            "este"
          ],
          "answerIndex": 0,
          "explanation": "eu pairs with sunt."
        },
        {
          "prompt": "Tu ___ obosit? (Are you tired? — informal)",
          "options": [
            "sunt",
            "ești",
            "sunteți",
            "este"
          ],
          "answerIndex": 1,
          "explanation": "tu pairs with ești."
        },
        {
          "prompt": "Dumneavoastră ___ profesor? (formal 'you')",
          "options": [
            "ești",
            "este",
            "sunt",
            "sunteți"
          ],
          "answerIndex": 3,
          "explanation": "Dumneavoastră conjugates like voi: sunteți."
        },
        {
          "prompt": "What happens when you drop eu from 'Eu sunt Ana'?",
          "options": [
            "The sentence becomes ungrammatical",
            "It's still perfectly clear: 'Sunt Ana' — the verb ending already signals 'I'",
            "It changes the meaning entirely",
            "It's only acceptable in formal writing"
          ],
          "answerIndex": 1,
          "explanation": "Romanian regularly drops subject pronouns when the verb ending is clear."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why does dumneavoastră use sunteți, the same form as voi?",
          "options": [
            "The formal 'you' borrows the plural verb form, a pattern shared with French vous and German Sie",
            "Dumneavoastră is actually plural only, never singular",
            "It's a spelling error that became standard",
            "Random coincidence"
          ],
          "answerIndex": 0,
          "explanation": "This is the cross-linguistic pattern explained in the lesson."
        },
        {
          "prompt": "Noi ___ prieteni. (We are friends.)",
          "options": [
            "sunteți",
            "sunt",
            "este",
            "suntem"
          ],
          "answerIndex": 3,
          "explanation": "noi pairs with suntem."
        },
        {
          "prompt": "What's the social risk of using tu with a stranger in a formal Romanian context?",
          "options": [
            "It can come across as overly familiar — dumneavoastră is the safer default until invited to use tu",
            "It's grammatically wrong, not socially risky",
            "Tu is only used with children",
            "None, tu is always safe"
          ],
          "answerIndex": 0,
          "explanation": "This matches the cultural note about the tu/dumneavoastră social boundary."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Eu ___ Ana.",
          "options": [
            "ești",
            "este",
            "suntem",
            "sunt"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"sunt\". This directly applies the principle of: Conjugate a fi (to be) for all subject pronouns, master the non-syllabic palatalized final 'i' [ʲ] and 'ț' [ts] in verb endings, and build basic identity sentences..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tu ___ din București?",
          "options": [
            "sunt",
            "este",
            "ești",
            "sunteți"
          ],
          "answerIndex": 2,
          "explanation": "Correct answer: \"ești\". This directly applies the principle of: Conjugate a fi (to be) for all subject pronouns, master the non-syllabic palatalized final 'i' [ʲ] and 'ț' [ts] in verb endings, and build basic identity sentences..",
          "type": "multiple-choice"
        },
        {
          "prompt": "El ___ profesor. (shortened form often used in speech)",
          "options": [
            "sunteți",
            "e",
            "ești",
            "sunt"
          ],
          "answerIndex": 1,
          "explanation": "el/ea este is often shortened to e in speech.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Dumneavoastră ___ domnul Ionescu?",
          "options": [
            "sunteți",
            "sunt",
            "este",
            "ești"
          ],
          "answerIndex": 0,
          "explanation": "Formal 'you' conjugates like voi: sunteți.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ei ___ colegii mei. (They are my colleagues.)",
          "options": [
            "suntem",
            "este",
            "sunteți",
            "sunt"
          ],
          "answerIndex": 3,
          "explanation": "ei/ele pairs with sunt.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why can 'Sunt Ana' work without eu?",
          "options": [
            "Because Romanian requires dropping all pronouns",
            "Because Ana is a verb, not a name",
            "Because the verb ending sunt already signals 'I', making the pronoun optional",
            "It's actually incorrect grammar"
          ],
          "answerIndex": 2,
          "explanation": "Restates the pronoun-dropping rule from the lesson.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 2: Conjugate a fi (to be) for all subject pronouns"
  },
  "ro-u1-l3": {
    "id": "ro-u1-l3",
    "unit": "ro-u1",
    "level": "A1",
    "objective": "Introduce yourself and ask someone's name using Cum te cheamă? and Cum te numești?, master the 'â' vs 'î' [ɨ] vowel rule and 'ch' [k] digraph pronunciation, and understand the impersonal grammar behind cheamă.",
    "prerequisites": [
      "ro-u1-l1",
      "ro-u1-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u1-l1",
        "ro-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "Romanian gives you two ways to ask a name, and the more common one in everyday speech has a grammatical twist worth understanding rather than just memorizing. Cum te cheamă? is the everyday, colloquial question — but it doesn't literally mean 'what do you call yourself.' Cheamă is third person, and the sentence literally means 'how does [something/someone] call you?' — an impersonal construction, similar in spirit to Spanish me llamo but built the other way around: the naming 'happens to' you rather than you doing it. The reply matches: Mă cheamă Ana ('[they/it] call me Ana'). The other option, Cum te numești? / Mă numesc Ana, is the more formal-sounding, textbook-correct pair, built on the reflexive verb a se numi ('to name oneself') — grammatically cleaner, but Cum te cheamă? is what you'll actually hear on the street far more often. Both are completely correct; know both, lean on cheamă in casual conversation.\n\n### 🔤 Orthography Traps: 'ch' Digraph & The 'â' vs 'î' Rule:\n1. **The 'ch' Digraph = [k] (Hard K)**: In Italian and Romanian, `c` before `e`/`i` makes a soft 'ch' sound [tʃ] (e.g. *ce* [tʃe] = 'what', *cinci* [tʃintʃ] = 'five'). To preserve a hard [k] sound before `e`/`i`, Romanian inserts an **h** — so **che / chi** is pronounced like a hard [ke] / [ki]! E.g. *cheamă* is pronounced [ˈkjamə] (KEE-ah-muh / KYAH-muh), NOT English 'cheamah'.\n2. **The 'â' vs 'î' [ɨ] Vowel Rule**: Both **â** (A with circumflex) and **î** (I with circumflex) represent the exact same sound: [ɨ] (a close central unrounded vowel, pronounced deep in the center-top of the mouth with relaxed lips, like Russian *ы* or the middle sound in *câine* [ˈkɨjne] 'dog').\n   - **The 1993 Academy Rule**: Use **î** at the beginning of a word (*în*, *început*) and at the end of a root (*a urî*). Use **â** everywhere in the interior of a word (*România*, *mâine*, *câine*, *pâine*).",
      "examples": [
        {
          "target": "Mihai: Cum te cheamă?",
          "reading": "[kum te ˈkjamə?]",
          "translation": "Mihai: What's your name? (notice che is hard [k], ending in schwa -ă [ə])"
        },
        {
          "target": "Ana: Mă cheamă Ana. Dar pe tine?",
          "reading": "[mə ˈkjamə ˈana. dar pe ˈtine?]",
          "translation": "Ana: My name is Ana ('they call me Ana'). And you?"
        },
        {
          "target": "Mihai: Pe mine mă cheamă Mihai. Mă bucur să te cunosc.",
          "reading": "[pe ˈmine mə ˈkjamə miˈhaj. mə ˈbukur sə te kuˈnosk.]",
          "translation": "Mihai: I'm Mihai ('they call me Mihai'). Nice to meet you."
        },
        {
          "target": "Ana: Cum te numești în limba română?",
          "reading": "[kum te nuˈmeʃtʲ ɨn ˈlimba roˈmɨnə?]",
          "translation": "Ana: How do you name yourself in the Romanian language? (notice în starts with î, română has interior â [ɨ])"
        }
      ],
      "mnemonics": [
        "che/chi = Hard K! Like a 'key' unlocking the sound: cheamă starts with [k], never 'ch'.",
        "The â/î Rule: 'î' guards the doors (beginning and end of words: în, a urî); 'â' lives inside the house (România, pâine, mâine)!",
        "Cheamă is a 'someone/something calls you' construction, not a 'you call yourself' one — think of it like a bell that rings your name, rather than you ringing it. Mă cheamă Ana = 'it calls me Ana.'",
        "numesc vs. cheamă: numesc is the tidy, reflexive, textbook option (a se numi, 'to name oneself'); cheamă is the messier, impersonal, but far more common everyday option."
      ],
      "culturalNotes": [
        "The 1993 Orthographic Reform: After the 1989 Romanian Revolution, the Romanian Academy restored 'â' in interior word positions to emphasize the historical Latin roots of the Romanian people (România / român from Latin Romanus). Both â and î sound 100% identical in modern standard Romanian [ɨ].",
        "Pe tine? / Pe mine — tacking pe + a pronoun onto a question or answer ('and you? / as for me') is a common conversational habit for redirecting or emphasizing who you mean, roughly like English 'as for you' or 'what about you.'"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How is the digraph 'ch' pronounced before 'e' or 'i' in Romanian (as in Cum te cheamă)?",
          "options": [
            "As a soft 'ch' like in chair",
            "As a hard 'k' sound",
            "As a silent letter",
            "As 'sh'"
          ],
          "answerIndex": 1,
          "explanation": "che/chi in Romanian is pronounced with a hard [k] sound."
        },
        {
          "prompt": "When is 'î' used instead of 'â' in standard Romanian spelling?",
          "options": [
            "At the beginning and end of root words",
            "Only in loanwords from English",
            "Only on Sundays",
            "They represent completely different sounds and are never related"
          ],
          "answerIndex": 0,
          "explanation": "Standard 1993 orthography uses î at word edges (beginning/end) and â inside words."
        },
        {
          "prompt": "Cum te ___? (everyday, colloquial 'what's your name')",
          "options": [
            "numesc",
            "sunt",
            "ești",
            "cheamă"
          ],
          "answerIndex": 3,
          "explanation": "Cum te cheamă? is the common, everyday phrasing."
        },
        {
          "prompt": "What does Mă cheamă Ana literally construct as?",
          "options": [
            "'",
            "'I am called by nobody'",
            "It has no literal meaning, it's pure idiom",
            "'I name myself Ana'"
          ],
          "answerIndex": 0,
          "explanation": "cheamă is 3rd person, making the whole phrase impersonal."
        },
        {
          "prompt": "Which pair is built on the reflexive verb a se numi?",
          "options": [
            "Cum te numești? / Mă numesc",
            "Ce mai faci? / Bine",
            "Bună ziua / La revedere",
            "Cum te cheamă? / Mă cheamă"
          ],
          "answerIndex": 0,
          "explanation": "a se numi ('to name oneself') underlies numești/numesc."
        },
        {
          "prompt": "Which version is more common in everyday spoken Romanian?",
          "options": [
            "Cum te numești?",
            "They're never both correct",
            "Neither is used in speech",
            "Cum te cheamă?"
          ],
          "answerIndex": 3,
          "explanation": "cheamă is flagged as the more common street version."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'My name is Mihai. Nice to meet you.' (using the everyday version)",
          "options": [
            "Mă cheamă Mihai. Mă bucur să te cunosc.",
            "Mă numesc Mihai. Cum te cheamă?",
            "Eu sunt Mihai, tu ești Mihai.",
            "Cum te cheamă Mihai?"
          ],
          "answerIndex": 0,
          "explanation": "Mă cheamă Mihai is the everyday self-introduction."
        },
        {
          "prompt": "Why is cheamă called an 'impersonal' construction?",
          "options": [
            "Because it's rude",
            "Because it's grammatically third-person — the naming 'happens to' you rather than you performing it",
            "Because it has no subject at all",
            "Because it's only used with strangers"
          ],
          "answerIndex": 1,
          "explanation": "This restates the grammatical mechanism from the explanation."
        },
        {
          "prompt": "What does adding pe tine? to a question do?",
          "options": [
            "Redirects/emphasizes 'and you?' — similar to 'what about you' in English",
            "Nothing, it's meaningless filler",
            "Makes the question rude",
            "Turns it into a formal question"
          ],
          "answerIndex": 0,
          "explanation": "This matches the cultural note on pe tine / pe mine."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum te ___? (everyday version)",
          "options": [
            "sunteți",
            "numesc",
            "cheamă",
            "este"
          ],
          "answerIndex": 2,
          "explanation": "Cum te cheamă? is the everyday question.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mă ___ Ana. (they call me Ana — everyday)",
          "options": [
            "numesc",
            "cheamă",
            "ești",
            "sunt"
          ],
          "answerIndex": 1,
          "explanation": "Mă cheamă Ana matches the impersonal construction.",
          "type": "multiple-choice"
        },
        {
          "prompt": "The more formal, reflexive-verb pair is:",
          "options": [
            "Cum te numești? / Mă numesc",
            "Cum te cheamă? / Mă cheamă",
            "Ce mai faci? / Bine",
            "Bună ziua / Salut"
          ],
          "answerIndex": 0,
          "explanation": "Built on a se numi.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Literally, Cum te cheamă? asks:",
          "options": [
            "'How are you?'",
            "'How do you call yourself?'",
            "'Where are you from?'",
            "'How do they call you?'"
          ],
          "answerIndex": 3,
          "explanation": "cheamă is 3rd person — 'how does [it] call you.'",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which everyday version is far more common in spoken Romanian?",
          "options": [
            "Neither is common",
            "Cum te numești?",
            "Cum te cheamă?",
            "Both are equally rare"
          ],
          "answerIndex": 2,
          "explanation": "cheamă wins in casual speech, per the lesson.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Pe tine? in conversation roughly means:",
          "options": [
            "'Goodbye'",
            "'And you? / What about you?'",
            "'I don't understand'",
            "'Thank you'"
          ],
          "answerIndex": 1,
          "explanation": "It's a redirect/emphasis phrase, per the cultural note.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 3: Mihai: Cum te cheamă?"
  },
  "ro-u1-l4": {
    "id": "ro-u1-l4",
    "unit": "ro-u1",
    "level": "A1",
    "objective": "State your nationality and origin using De unde ești? / Sunt din + place, form negative sentences with nu, and use the gendered nationality adjective (român/română).",
    "prerequisites": [
      "ro-u1-l1",
      "ro-u1-l2",
      "ro-u1-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u1-l2",
        "ro-u1-l3"
      ]
    },
    "presentation": {
      "explanation": "To ask where someone's from: De unde ești? (informal) or De unde sunteți? (formal). To answer where you're from: Sunt din + place — Sunt din București, Sunt din Cluj. To state nationality as an adjective rather than a place, Romanian nationality words agree in gender just like bună did back in lesson 1: a man says Sunt român, a woman says Sunt româncă — same root, different ending. Negation is simple: nu goes directly before the verb, same spot as in most Romance languages — Nu sunt din București, Nu sunt româncă. One extra wrinkle worth flagging early: Sunt din România already IS the definite/proper form — Romanian nouns often carry their definite article built into the word itself (a postposed, attached article) rather than as a separate word like English 'the.' You'll formalize that pattern later in the course; for now, just notice that country and city names don't need an extra article word tacked in front of them.",
      "examples": [
        {
          "target": "Ana: De unde ești, Mihai?",
          "reading": "",
          "translation": "Ana: Where are you from, Mihai?"
        },
        {
          "target": "Mihai: Sunt din Cluj, dar locuiesc în București de doi ani.",
          "reading": "",
          "translation": "Mihai: I'm from Cluj, but I've lived in Bucharest for two years."
        },
        {
          "target": "Ana: Deci ești ardelean! Eu sunt din București, sunt bucureșteancă get-beget.",
          "reading": "",
          "translation": "Ana: So you're a Transylvanian! I'm from Bucharest, a through-and-through Bucharester."
        },
        {
          "target": "Mihai: Tu ești româncă get-beget?",
          "reading": "",
          "translation": "Mihai: Are you a true-blue Romanian? — Nu, mama e din Moldova. (No, my mom's from Moldova [the Romanian region].)"
        }
      ],
      "mnemonics": [
        "român (man) / româncă (woman) — same pattern as bun/bună: masculine stays plain, feminine adds -ă (or here, -că). Any nationality/origin adjective you learn later will echo this same masculine/feminine split.",
        "get-beget is a fun, very Romanian intensifier meaning 'through and through / born and bred' — tack it after a nationality or origin word to say someone is the real, undiluted deal."
      ],
      "culturalNotes": [
        "Ardelean (Transylvanian), moldovean (from the Moldova region of Romania — not to be confused with the separate country Moldova), and bucureștean/bucureșteancă (from Bucharest) are strong regional identities Romanians bring up proudly and often, similar to how Americans might mention being a 'Texan' or 'New Yorker.'"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "De unde ___? (asking a friend, informal)",
          "options": [
            "ești",
            "este",
            "sunt",
            "sunteți"
          ],
          "answerIndex": 0,
          "explanation": "Informal 'you' pairs with ești."
        },
        {
          "prompt": "___ din Cluj. (I am from Cluj)",
          "options": [
            "Sunt",
            "Este",
            "Suntem",
            "Ești"
          ],
          "answerIndex": 0,
          "explanation": "Sunt is the yo/eu form."
        },
        {
          "prompt": "A woman says she's Romanian: Sunt ___.",
          "options": [
            "român",
            "românie",
            "românesc",
            "româncă"
          ],
          "answerIndex": 3,
          "explanation": "Feminine nationality adjective: româncă."
        },
        {
          "prompt": "How do you negate 'Sunt din București'?",
          "options": [
            "Nu sunt din București",
            "Sunt din nu București",
            "Sunt nu din București",
            "Din nu sunt București"
          ],
          "answerIndex": 0,
          "explanation": "nu goes directly before the conjugated verb."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "A man says he's Romanian: Sunt ___.",
          "options": [
            "român",
            "româncă",
            "românesc",
            "românia"
          ],
          "answerIndex": 0,
          "explanation": "Masculine nationality adjective: român."
        },
        {
          "prompt": "What does get-beget add to a sentence like Sunt bucureșteancă get-beget?",
          "options": [
            "Nothing, it's meaningless",
            "'Through and through / born and bred' — emphasizes authenticity",
            "It makes the sentence a question",
            "It negates the sentence"
          ],
          "answerIndex": 1,
          "explanation": "This matches the mnemonic definition given."
        },
        {
          "prompt": "Why doesn't Sunt din România need an extra word for 'the'?",
          "options": [
            "Because Romanian never uses articles",
            "Because Romanian often attaches its definite article directly onto the noun itself, rather than as a separate word",
            "Because România is not a real proper noun",
            "It's simply an exception with no reason"
          ],
          "answerIndex": 1,
          "explanation": "This is the built-in/postposed article preview given in the explanation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "De unde ___, Ana? (informal)",
          "options": [
            "sunteți",
            "ești",
            "sunt",
            "este"
          ],
          "answerIndex": 1,
          "explanation": "tu ești for 'you are' informal.",
          "type": "multiple-choice"
        },
        {
          "prompt": "___ din București. (I am from Bucharest)",
          "options": [
            "Sunt",
            "Ești",
            "Suntem",
            "Sunteți"
          ],
          "answerIndex": 0,
          "explanation": "Sunt = eu form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Feminine form of 'Romanian' (nationality adjective):",
          "options": [
            "român",
            "românie",
            "românesc",
            "româncă"
          ],
          "answerIndex": 3,
          "explanation": "-că feminine ending, echoing the bun/bună pattern.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'I am not from Cluj':",
          "options": [
            "Sunt nu din Cluj",
            "Din Cluj nu sunt",
            "Nu sunt din Cluj",
            "Nu din Cluj sunt"
          ],
          "answerIndex": 2,
          "explanation": "nu precedes the conjugated verb.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ardelean refers to someone from:",
          "options": [
            "Bucharest specifically",
            "Transylvania",
            "Moldova the country",
            "The capital only"
          ],
          "answerIndex": 1,
          "explanation": "Ardelean = Transylvanian regional identity.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'the' often unnecessary before Romanian proper nouns like România?",
          "options": [
            "Romanian frequently attaches its definite article directly onto the noun",
            "It's a random exception",
            "Proper nouns are always indefinite in Romanian",
            "Romanian has no concept of definiteness"
          ],
          "answerIndex": 0,
          "explanation": "Restates the postposed-article preview from the lesson.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 4: Ana: De unde ești, Mihai?"
  },
  "ro-u1-l5": {
    "id": "ro-u1-l5",
    "unit": "ro-u1",
    "level": "A1",
    "objective": "Combine greetings, a fi conjugation, self-introduction, and nationality into a natural full first-meeting conversation in Romanian.",
    "prerequisites": [
      "ro-u1-l1",
      "ro-u1-l2",
      "ro-u1-l3",
      "ro-u1-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u1-l1",
        "ro-u1-l2",
        "ro-u1-l3",
        "ro-u1-l4"
      ]
    },
    "presentation": {
      "explanation": "Let's put the whole unit together at a covrigi stand — the pretzel-like street snack sold on seemingly every corner in Bucharest, and a genuinely common place for a quick, friendly exchange with a stranger. You now have every piece: bună/salut to open, sunt/ești to state being, cum te cheamă to trade names, and de unde ești to trade origins. Two new closing pieces finish your starter kit: Îmi pare bine ('pleased to meet you', literally 'it seems good to me' — another impersonal construction, just like cheamă) and Ne vedem! ('see you!', casual). Notice how much of this unit has quietly built around ONE recurring grammar shape: verbs where the action 'happens to' you rather than you performing it directly (mă cheamă, îmi pare) — a pattern Romanian leans on more than English does, and one you'll keep noticing as you go further.",
      "examples": [
        {
          "target": "Vânzătorul: Bună! Un covrig?",
          "reading": "",
          "translation": "The vendor: Hi! A pretzel?"
        },
        {
          "target": "Ana: Salut! Da, unul, te rog. Cum te cheamă?",
          "reading": "",
          "translation": "Ana: Hey! Yes, one, please. What's your name?"
        },
        {
          "target": "Vânzătorul: Mă cheamă Radu. Da' tu de unde ești?",
          "reading": "",
          "translation": "The vendor: My name's Radu. And where are you from?"
        },
        {
          "target": "Ana: Sunt din Cluj, dar acum locuiesc aici. Îmi pare bine, Radu!",
          "reading": "",
          "translation": "Ana: I'm from Cluj, but I live here now. Nice to meet you, Radu!"
        },
        {
          "target": "Radu: Și mie! Poftim covrigul. Ne vedem!",
          "reading": "",
          "translation": "Radu: You too! Here's your pretzel. See you!"
        }
      ],
      "mnemonics": [
        "Your Romanian starter pack: bună/salut (hi), sunt/ești (to be), cum te cheamă (your name), de unde ești (your origin), îmi pare bine (nice to meet you) — five pieces, chained in that order, cover almost any first meeting.",
        "Îmi pare bine works exactly like Mă cheamă did — the feeling 'seems' to you rather than you actively 'feeling' it. Once you accept Romanian likes this 'it happens to me' shape, several confusing phrases suddenly make sense together instead of looking like unrelated idioms."
      ],
      "culturalNotes": [
        "Covrigi (soft, pretzel-like rings, often sesame- or poppy-seed-topped) are a genuine everyday Romanian street food — small stands are everywhere in cities, and buying one is a completely normal, low-stakes way to practice a first real exchange.",
        "Da' is a very common casual contraction of dar (but) heard constantly in fast, informal speech — recognize it as identical in meaning to dar, just clipped."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What does Îmi pare bine mean, and what's its grammatical shape?",
          "options": [
            "'Nice to meet you' — an impersonal construction, like cheamă",
            "'Goodbye' — a simple direct verb",
            "'I am hungry' — unrelated to meeting someone",
            "It has no real meaning, just filler"
          ],
          "answerIndex": 0,
          "explanation": "It mirrors the 'happens to me' construction seen with cheamă."
        },
        {
          "prompt": "What is a covrig?",
          "options": [
            "A soft, pretzel-like street snack, very common in Romania",
            "A type of formal greeting",
            "A Romanian currency unit",
            "A regional identity like ardelean"
          ],
          "answerIndex": 0,
          "explanation": "Covrigi are the iconic street-food snack referenced in the dialogue."
        },
        {
          "prompt": "Da' is a casual contraction of:",
          "options": [
            "da",
            "dar",
            "de",
            "din"
          ],
          "answerIndex": 1,
          "explanation": "Da' clips dar in fast informal speech."
        },
        {
          "prompt": "What recurring grammar pattern connects mă cheamă and îmi pare bine?",
          "options": [
            "Both are 'it happens to me' impersonal constructions, unlike the more direct English equivalents",
            "Both are negative sentences",
            "Both are formal-only phrases",
            "Both use the reflexive verb a se numi"
          ],
          "answerIndex": 0,
          "explanation": "This is the pattern flagged explicitly in the lesson's closing note."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Put in the natural order: greeting → name → origin → closing.",
          "options": [
            "Bună! Cum te cheamă? De unde ești? Îmi pare bine!",
            "Cum te cheamă? Bună! Îmi pare bine! De unde ești?",
            "Îmi pare bine! De unde ești? Cum te cheamă? Bună!",
            "De unde ești? Îmi pare bine! Bună! Cum te cheamă?"
          ],
          "answerIndex": 0,
          "explanation": "This matches the natural conversational build-up of the unit."
        },
        {
          "prompt": "Translate casually: 'Nice to meet you too!'",
          "options": [
            "Și mie!",
            "Ne vedem!",
            "Bună ziua!",
            "Da' tu?"
          ],
          "answerIndex": 0,
          "explanation": "Și mie ('to me too') is the natural reply to Îmi pare bine."
        },
        {
          "prompt": "How would you casually say 'See you!' when leaving?",
          "options": [
            "Ne vedem!",
            "Cum te cheamă?",
            "Îmi pare bine!",
            "De unde ești?"
          ],
          "answerIndex": 0,
          "explanation": "Ne vedem is the casual parting phrase used in the dialogue."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Îmi pare bine means:",
          "options": [
            "Nice to meet you",
            "I am hungry",
            "Where are you from",
            "Goodbye forever"
          ],
          "answerIndex": 0,
          "explanation": "Standard 'nice to meet you' phrase.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A covrig is:",
          "options": [
            "A formal title",
            "A greeting",
            "A type of currency",
            "A pretzel-like street snack"
          ],
          "answerIndex": 3,
          "explanation": "The iconic Romanian street food from the dialogue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Da' is a casual clipped form of:",
          "options": [
            "da",
            "din",
            "dar",
            "de"
          ],
          "answerIndex": 2,
          "explanation": "Da' = clipped dar.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Casual way to say 'See you!':",
          "options": [
            "Bună ziua!",
            "Ne vedem!",
            "Sunt din România",
            "De unde ești?"
          ],
          "answerIndex": 1,
          "explanation": "The casual parting phrase used in the lesson's dialogue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What grammatical trait do mă cheamă and îmi pare bine share?",
          "options": [
            "Both are impersonal, 'it happens to me' constructions",
            "Both are questions",
            "Both use the future tense",
            "Both are commands"
          ],
          "answerIndex": 0,
          "explanation": "This is the recurring pattern flagged across the unit.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Full natural greeting order for a first meeting:",
          "options": [
            "Îmi pare bine → Bună → De unde ești? → Cum te cheamă?",
            "De unde ești? → Bună → Îmi pare bine → Cum te cheamă?",
            "Cum te cheamă? → De unde ești? → Bună → Îmi pare bine",
            "Bună → Cum te cheamă? → De unde ești? → Îmi pare bine"
          ],
          "answerIndex": 3,
          "explanation": "Matches the sequence built across this unit's lessons.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 5: Combine greetings"
  },
  "ro-u2-l1": {
    "id": "ro-u2-l1",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can count from 0 to 20 in Romanian, apply gender inflection to 1, 2, and 12 (unu/una, doi/două, doisprezece/douăsprezece), and understand the Slavic-influenced 'sprezece' (-teen) structure.",
    "prerequisites": [
      "ro-u1-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u1-l1",
        "ro-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "Romanian numbers 0–20 blend Latin roots with a unique Slavic-influenced compounding structure for the teen numbers.\n\nNumbers 0–10:\n0 = zero\n1 = unu (masculine) / una (feminine) — e.g. un băiat (one boy), o fată (one girl)\n2 = doi (masculine) / două (feminine/neuter) — e.g. doi băieți, două fete\n3 = trei\n4 = patru\n5 = cinci\n6 = șase\n7 = șapte\n8 = opt\n9 = nouă\n10 = zece\n\nNumbers 11–20 (The '-sprezece' pattern):\nIn Romanian, 11 through 19 are built using the formula: **Digit + spre + zece** (literally 'digit towards ten', from Slavic influence):\n11 = unsprezece (colloquially 'unșpe')\n12 = doisprezece (masc.) / douăsprezece (fem./neuter) (colloquially 'doișpe' / 'douășpe')\n13 = treisprezece\n14 = paisprezece (or patrusprezece)\n15 = cincisprezece\n16 = șaisprezece\n17 = șaptesprezece\n18 = optsprezece (or optisprezece)\n19 = nouăsprezece\n20 = douăzeci (literally 'two-tens')",
      "examples": [
        "Avem doi băieți și două fete. (We have two boys [masc. doi] and two girls [fem. două]).",
        "Sunt douăsprezece fete în clasă. (There are twelve girls in the classroom — 'douăsprezece' agrees with feminine fete).",
        "Am cincisprezece minute libere. (I have fifteen minutes free).",
        "Câți ani ai? — Am douăzeci de ani. (How old are you? — I am twenty years old)."
      ],
      "mnemonics": [
        "'Spre' means 'towards' — Romanian teens literally say 'one-towards-ten' (unsprezece), 'two-towards-ten' (doisprezece).",
        "Gender changes on 1, 2, and 12: unu/una (un/o), doi/două, doisprezece/douăsprezece. 3 through 11 and 13 through 20 are gender-blind."
      ],
      "culturalNotes": [
        "In everyday conversational Romanian, speakers shorten the teens with '-șpe': unșpe (11), doișpe (12), treișpe (13), paișpe (14), cinșpe (15), șaișpe (16), șaptișpe (17), optișpe (18), nouășpe (19). While standard written Romanian requires the full form, recognizing '-șpe' is essential for understanding spoken Romanian."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Choose the correct translation: 'Two coffees and two waters, please.' (cafea = fem., apă = fem.)",
          "options": [
            "Doi cafele și doi ape, vă rog. (Can count from 0 to 20 in Romanian)",
            "Doi cafele și două ape, vă rog. (Can count from 0 to 20 in Romanian)",
            "Două cafele și doi ape, vă rog. (Can count from 0 to 20 in Romanian)",
            "Două cafele și două ape, vă rog. (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "Cafea and apă are feminine nouns, so both take the feminine numeral 'două'."
        },
        {
          "prompt": "What does 'unsprezece' literally mean in its historical structure?",
          "options": [
            "First ten (Can count from 0 to 20 in Romanian)",
            "Ten and one (Can count from 0 to 20 in Romanian)",
            "One plus ten (Can count from 0 to 20 in Romanian)",
            "One towards ten (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "Un (one) + spre (towards/onto) + zece (ten) represents the Slavic calque structure unique to Romanian among Romance languages."
        },
        {
          "prompt": "Which form of 12 modifies the feminine noun 'ore' (hours)?",
          "options": [
            "doi ore (Can count from 0 to 20 in Romanian)",
            "douăsprezece ore (Can count from 0 to 20 in Romanian)",
            "zece și două ore (Can count from 0 to 20 in Romanian)",
            "doisprezece ore (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 1,
          "explanation": "Ora / ore is feminine, requiring the feminine agreement 'douăsprezece'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I have two brothers and one sister.' (frate = masc., soră = fem.)",
          "options": [
            "Am două frați și un soră. (Can count from 0 to 20 in Romanian)",
            "Am doi frați și un soră. (Can count from 0 to 20 in Romanian)",
            "Am două frați și două soră. (Can count from 0 to 20 in Romanian)",
            "Am doi frați și o soră. (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "doi frați (masculine) and o soră (feminine singular article/numeral)."
        },
        {
          "prompt": "Which number inflects for grammatical gender?",
          "options": [
            "zece (Can count from 0 to 20 in Romanian)",
            "cinci (Can count from 0 to 20 in Romanian)",
            "patru (Can count from 0 to 20 in Romanian)",
            "doi / două (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "In 0–20, 1 (unu/una), 2 (doi/două), and 12 (doisprezece/douăsprezece) inflect for gender."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Vreau ___ ceai și ___ plăcintă. (ceai = neuter/un, plăcintă = fem/o)",
          "options": [
            "o / un (Can count from 0 to 20 in Romanian)",
            "doi / două (Can count from 0 to 20 in Romanian)",
            "o / o (Can count from 0 to 20 in Romanian)",
            "un / o (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "un ceai (neuter singular uses 'un') and o plăcintă (feminine uses 'o').",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se scrie numărul 14 în română standard?",
          "options": [
            "patruzeci (Can count from 0 to 20 in Romanian)",
            "patruspre (Can count from 0 to 20 in Romanian)",
            "paisprezece (Can count from 0 to 20 in Romanian)",
            "patruzece (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 2,
          "explanation": "14 is written 'paisprezece' (or 'patrusprezece').",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cât fac opt (8) + șapte (7)?",
          "options": [
            "șaisprezece (Can count from 0 to 20 in Romanian)",
            "cincisprezece (Can count from 0 to 20 in Romanian)",
            "treisprezece (Can count from 0 to 20 in Romanian)",
            "paisprezece (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 1,
          "explanation": "8 + 7 = 15 (cincisprezece).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Avem ___ băieți și ___ fete la curs. (12 băieți, 12 fete)",
          "options": [
            "doisprezece / douăsprezece (Can count from 0 to 20 in Romanian)",
            "doisprezece / doisprezece (Can count from 0 to 20 in Romanian)",
            "douăzeci / douăsprezece (Can count from 0 to 20 in Romanian)",
            "douăsprezece / doisprezece (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 0,
          "explanation": "doisprezece (masc. with băieți) and douăsprezece (fem. with fete).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Numărul 20 în limba română este:",
          "options": [
            "doisprezece (Can count from 0 to 20 in Romanian)",
            "treizeci (Can count from 0 to 20 in Romanian)",
            "zecezeci (Can count from 0 to 20 in Romanian)",
            "douăzeci (Can count from 0 to 20 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "20 is 'douăzeci'.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 1: Can count from 0 to 20 in Romanian"
  },
  "ro-u2-l2": {
    "id": "ro-u2-l2",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can count from 21 to 100 in Romanian, master the mandatory preposition 'de' rule for counting nouns with numbers 20+, and ask/state prices in lei and bani.",
    "prerequisites": [
      "ro-u2-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "From 20 to 100, Romanian combines tens with units using **și** ('and'), and enforces one of the most critical grammatical rules in the language: the **Preposition 'DE' Rule**.\n\nThe Tens:\n20 = douăzeci\n30 = treizeci\n40 = patruzeci\n50 = cincizeci\n60 = șaizeci\n70 = șaptezeci\n80 = optzeci\n90 = nouăzeci\n100 = o sută (literally 'one hundred')\n\nCompound Numbers:\n21 = douăzeci și unu (masc.) / douăzeci și una (fem.)\n35 = treizeci și cinci\n48 = patruzeci și opt\n72 = șaptezeci și doi / șaptezeci și două\n99 = nouăzeci și nouă\n\n**The Mandatory 'DE' Counting Rule:**\n- For numbers **1 through 19**: the number connects DIRECTLY to the noun (NO 'de'):\n  * *cinci lei* (5 lei), *optsprezece cărți* (18 books)\n- For numbers **20 through 100** (and whenever the last word is -zeci or sută): you MUST insert **de** between the number and the noun:\n  * *douăzeci de lei* (20 lei), *cincizeci de cărți* (50 books), *o sută de oameni* (100 people)\n- Exception: if the compound number ends in 1–19, 'de' is omitted: *douăzeci și cinci de lei* (ends in 20+ base) vs *o sută cinci lei*.\n\nAsking Prices:\n- *Cât costă?* (How much does it cost?)\n- *Cât este?* (How much is it?)\n- *Costă treizeci și cinci de lei.* (It costs 35 lei.)",
      "examples": [
        "Cât costă cafeaua? — Costă cincisprezece lei. (How much is the coffee? — 15 lei [no 'de' because 15 < 20]).",
        "Biletul costă treizeci de lei. (The ticket costs 30 lei [mandatory 'de' because 30 >= 20]).",
        "Am cumpărat douăzeci și două de mere. (I bought 22 apples — 'două' agrees with fem. mere, plus 'de').",
        "O sută de persoane sunt în sală. (One hundred people are in the room)."
      ],
      "mnemonics": [
        "The 'DE' Rule: Under 20 = Direct (10 lei). 20 and over = Demand 'DE' (20 DE lei).",
        "'Și' connects tens and units: treizeci ȘI cinci (35), optzeci ȘI doi (82)."
      ],
      "culturalNotes": [
        "Romania's currency is the Leu (plural Lei, sign RON). 1 leu = 100 bani (singular ban).",
        "Contactless card payment ('plata cu cardul') is widespread in Romania; vendors often ask 'Cu cardul sau numerar?' (By card or cash?)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which phrase correctly applies the 'de' preposition rule?",
          "options": [
            "douăzeci de lei (Can count from 21 to 100 in Romanian)",
            "douăzeci lei (Can count from 21 to 100 in Romanian)",
            "zece de lei (Can count from 21 to 100 in Romanian)",
            "cinci de lei (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 0,
          "explanation": "Numbers 20 and above require the preposition 'de' before the noun: 'douăzeci de lei'."
        },
        {
          "prompt": "How do you say 67 in Romanian?",
          "options": [
            "șaizeci și șapte (Can count from 21 to 100 in Romanian)",
            "șaptezeci și șase (Can count from 21 to 100 in Romanian)",
            "șaizeci șapte (Can count from 21 to 100 in Romanian)",
            "cincizeci și șapte (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 0,
          "explanation": "60 (șaizeci) + și + 7 (șapte) = șaizeci și șapte."
        },
        {
          "prompt": "Translate: 'How much does the ticket cost?' — 'It costs 50 lei.'",
          "options": [
            "Cât costă biletul? — Costă cincizeci de lei. (Can count from 21 to 100 in Romanian)",
            "Cât este biletul? — Costă cincizeci lei. (Can count from 21 to 100 in Romanian)",
            "Cât este biletul? — Costă cincisprezece de lei. (Can count from 21 to 100 in Romanian)",
            "Cât costă biletul? — Costă cinzeci de lei. (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 0,
          "explanation": "'Cât costă biletul?' followed by 'Costă cincizeci de lei' (with mandatory 'de')."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Select the correct combination for 84:",
          "options": [
            "șaptezeci și patru (Can count from 21 to 100 in Romanian)",
            "optzeci patru (Can count from 21 to 100 in Romanian)",
            "nouăzeci și patru (Can count from 21 to 100 in Romanian)",
            "optzeci și patru (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "80 (optzeci) + și + 4 (patru)."
        },
        {
          "prompt": "Why is it 'zece cărți' but 'treizeci de cărți'?",
          "options": [
            "Numbers 1-19 attach directly, while numbers 20 and above take the preposition 'de' (Can count from 21 to 100 in Romanian)",
            "Treizeci is more formal than zece (Can count from 21 to 100 in Romanian)",
            "Cărți changes gender at 30 (Can count from 21 to 100 in Romanian)",
            "Random spelling difference (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 0,
          "explanation": "This is the foundational Romanian counting syntax rule."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se spune 73 în limba română?",
          "options": [
            "șaptesprezece și trei (Can count from 21 to 100 in Romanian)",
            "optzeci și trei (Can count from 21 to 100 in Romanian)",
            "șaptezeci și trei (Can count from 21 to 100 in Romanian)",
            "șaizeci și trei (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 2,
          "explanation": "șaptezeci (70) + și + trei (3).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează corect: 'Prânzul costă 45 ___.'",
          "options": [
            "din lei (Can count from 21 to 100 in Romanian)",
            "de lei (Can count from 21 to 100 in Romanian)",
            "la lei (Can count from 21 to 100 in Romanian)",
            "lei (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 1,
          "explanation": "45 is >= 20, requiring 'de lei'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează corect: 'Am doar 5 ___.'",
          "options": [
            "lei (Can count from 21 to 100 in Romanian)",
            "la lei (Can count from 21 to 100 in Romanian)",
            "de lei (Can count from 21 to 100 in Romanian)",
            "din lei (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 0,
          "explanation": "5 is < 20, so it takes 'lei' directly without 'de'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Numărul 100 în limba română se numește:",
          "options": [
            "o sut (Can count from 21 to 100 in Romanian)",
            "zecezeci (Can count from 21 to 100 in Romanian)",
            "un sută (Can count from 21 to 100 in Romanian)",
            "o sută (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 3,
          "explanation": "100 is 'o sută' (feminine noun).",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Plătiți cu cardul sau numerar?' înseamnă:",
          "options": [
            "Do you have exact change? (Can count from 21 to 100 in Romanian)",
            "Can you pay tomorrow? (Can count from 21 to 100 in Romanian)",
            "Are you paying by card or cash? (Can count from 21 to 100 in Romanian)",
            "Is the card valid? (Can count from 21 to 100 in Romanian)"
          ],
          "answerIndex": 2,
          "explanation": "Standard payment question in Romanian stores.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 2: Can count from 21 to 100 in Romanian"
  },
  "ro-u2-l3": {
    "id": "ro-u2-l3",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can ask and tell time in Romanian using 'Cât e ceasul?' / 'Cât este ora?', singular vs. plural verbs (este ora unu vs. sunt ora două), half-hours with 'și jumătate', and quarter-to with 'fără un sfert'.",
    "prerequisites": [
      "ro-u2-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u2-l1",
        "ro-u2-l2"
      ]
    },
    "presentation": {
      "explanation": "Telling time in Romanian revolves around clear question patterns and the distinction between 'ora unu' (singular) and plural hours.\n\nAsking the Time:\n- *Cât e ceasul?* (What time is it? — literally 'How much is the clock?')\n- *Cât este ora?* (What is the hour?)\n- *La ce oră...?* (At what time...?)\n\nAnswering — Hours & Fractions:\n- 1:00 -> *Este ora unu.* (It is 1:00 — singular 'este').\n- 2:00 -> *Este ora două.* OR *Sunt orele două.* (Colloquially: *E două*).\n- 3:15 -> *Este trei și un sfert.* (It is three and a quarter).\n- 4:30 -> *Este patru și jumătate.* (It is four and a half).\n- 5:45 -> *Este șase fără un sfert.* (It is a quarter to six — literally 'six without a quarter').\n- 6:50 -> *Este șapte fără zece.* (It is ten to seven).\n- 12:00 PM -> *Este prânz* (noon) / *ora douăsprezece*.\n- 12:00 AM -> *Este miezul nopții* (midnight).\n\nTime of Day Qualifiers:\n- *dimineața* (in the morning — e.g. *la opt dimineața*)\n- *după-amiaza* (in the afternoon — e.g. *la trei după-amiaza*)\n- *seara* (in the evening — e.g. *la opt seara*)\n- *noaptea* (at night / wee hours).",
      "examples": [
        "Cât e ceasul? — Este patru și jumătate după-amiaza. (What time is it? — It is 4:30 PM).",
        "Trenul pleacă la ora opt și un sfert dimineața. (The train leaves at 8:15 AM).",
        "Este miezul nopții, mergem la culcare. (It is midnight, let's go to sleep).",
        "Spectacolul începe la șapte fără un sfert. (The show starts at a quarter to seven / 6:45)."
      ],
      "mnemonics": [
        "'Și jumătate' = and a half (30 min past). 'Fără un sfert' = without a quarter (15 min until next hour).",
        "Asking time: 'Cât e ceasul?' (Literally 'How much is the clock?')."
      ],
      "culturalNotes": [
        "In official schedules (trains, planes, university classes, doctor appointments), 24-hour time is universally used in Romania: 'ora 14:30' (pronounced 'patrusprezece și treizeci'). In casual conversation, 12-hour time with 'dimineața'/'seara' is preferred."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 4:30 in conversational Romanian?",
          "options": [
            "Este patru și sfert.",
            "Este patru fără jumătate.",
            "Sunt patru și treizeci de minute.",
            "Este patru și jumătate."
          ],
          "answerIndex": 3,
          "explanation": "'jumătate' means half (4:30 = patru și jumătate)."
        },
        {
          "prompt": "How do you say 7:45 (quarter to eight)?",
          "options": [
            "Este șapte și un sfert.",
            "Este opt și un sfert.",
            "Este șapte fără un sfert.",
            "Este opt fără un sfert."
          ],
          "answerIndex": 3,
          "explanation": "'opt fără un sfert' = eight without a quarter (7:45)."
        },
        {
          "prompt": "What does 'Cât e ceasul?' mean?",
          "options": [
            "How much does the watch cost?",
            "Where is the clock?",
            "What day is it?",
            "What time is it?"
          ],
          "answerIndex": 3,
          "explanation": "Standard colloquial Romanian for 'What time is it?'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The meeting is at 10:00 in the morning.'",
          "options": [
            "Ședința este la ora zece dimineața.",
            "Ședința este în ora zece dimineața.",
            "Ședința este pe ora zece dimineața.",
            "Ședința este de ora zece dimineața."
          ],
          "answerIndex": 0,
          "explanation": "Clock time uses the preposition 'la' (la ora zece dimineața)."
        },
        {
          "prompt": "How is 12:00 AM (midnight) expressed in Romanian?",
          "options": [
            "miezul nopții",
            "prânz",
            "seara târziu",
            "noaptea mare"
          ],
          "answerIndex": 0,
          "explanation": "Midnight is 'miezul nopții'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cât e ceasul? (1:00 PM)",
          "options": [
            "Sunt ora unu.",
            "Este ora unu.",
            "Sunt orele unu.",
            "Este un ceas."
          ],
          "answerIndex": 1,
          "explanation": "1:00 takes singular 'Este ora unu'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cât e ceasul? (6:15 PM)",
          "options": [
            "Este șase și un sfert seara.",
            "Este șase fără un sfert seara.",
            "Este șase și jumătate seara.",
            "Este șapte și un sfert seara."
          ],
          "answerIndex": 0,
          "explanation": "6:15 = șase și un sfert.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cât e ceasul? (8:45)",
          "options": [
            "Este nouă și un sfert.",
            "Este opt fără un sfert.",
            "Este opt și trei sferturi.",
            "Este nouă fără un sfert."
          ],
          "answerIndex": 3,
          "explanation": "8:45 is 'nouă fără un sfert' (a quarter to nine).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: 'Filmul începe ___ ora opt seara.'",
          "options": [
            "de",
            "în",
            "la",
            "pe"
          ],
          "answerIndex": 2,
          "explanation": "Time of events uses 'la' (la ora opt).",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Este prânz' înseamnă:",
          "options": [
            "It is midnight",
            "It is noon",
            "It is breakfast time",
            "It is late evening"
          ],
          "answerIndex": 1,
          "explanation": "Prânz refers to midday / noon.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 3"
  },
  "ro-u2-l4": {
    "id": "ro-u2-l4",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can name all days of the week and months of the year in Romanian, understand their Latin mythological roots, and use appropriate prepositions (luni, în weekend, în martie, pe 15 mai).",
    "prerequisites": [
      "ro-u2-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u2-l2",
        "ro-u2-l3"
      ]
    },
    "presentation": {
      "explanation": "Unlike Portuguese, Romanian preserves the classic Latin planetary and mythological names for the days of the week.\n\nDays of the Week:\n- *luni* (Monday — Moon's day, from Latin Lunae)\n- *marți* (Tuesday — Mars' day, from Martis)\n- *miercuri* (Wednesday — Mercury's day, from Mercurii)\n- *joi* (Thursday — Jupiter's day, from Jovis)\n- *vineri* (Friday — Venus' day, from Veneris)\n- *sâmbătă* (Saturday — Sabbath, from Sambata)\n- *duminică* (Sunday — Lord's day, from Dominica)\n- *weekend* / *sfârșit de săptămână* (weekend)\n\nPrepositions with Days and Dates:\n- With weekdays (alone): NO preposition needed! Simply state the day:\n  * *Luni merg la birou.* (On Monday I go to the office).\n  * *Ne vedem vineri.* (See you on Friday).\n- To express recurring habit: **lunea, marțea, miercurea, joia, vinerea, sâmbăta, duminica** (*Lunea am cursuri* = On Mondays I have classes).\n- With months: **în** (*în ianuarie*, *în august*).\n- With exact calendar dates: **pe** (*pe cincisprezece mai*, *pe întâi decembrie*).\n\nMonths of the Year:\nianuarie, februarie, martie, aprilie, mai, iunie, iulie, august, septembrie, octombrie, noiembrie, decembrie (always lower-case in Romanian!).",
      "examples": [
        "Avem curs de română marți și joi la ora zece. (We have Romanian class on Tuesday and Thursday at 10:00).",
        "Ce faci în weekend? (What are you doing on the weekend?).",
        "Ziua mea de naștere este pe douăzeci și trei iulie. (My birthday is on July 23rd).",
        "Vinerea ieșim cu prietenii în oraș. (On Fridays we go out to town with friends)."
      ],
      "mnemonics": [
        "No preposition needed for specific weekdays: 'Ne vedem vineri' (See you on Friday) — NOT 'pe vineri' or 'în vineri'.",
        "Recurring days add an article ending: lunea (on Mondays), vinerea (on Fridays)."
      ],
      "culturalNotes": [
        "December 1st (*1 Decembrie — Ziua Marii Uniri*) is Romania's National Holiday, celebrated with military parades and national pride.",
        "Months and days of the week are written with lowercase initial letters in Romanian unless they start a sentence."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'See you on Friday' in natural Romanian?",
          "options": [
            "Ne vedem vineri.",
            "Ne vedem în vineri.",
            "Ne vedem la vineri.",
            "Ne vedem pe vineri."
          ],
          "answerIndex": 0,
          "explanation": "Specific weekdays in Romanian take no preposition: 'Ne vedem vineri'."
        },
        {
          "prompt": "Which preposition is used with calendar months (e.g. in October)?",
          "options": [
            "în",
            "la",
            "de",
            "pe"
          ],
          "answerIndex": 0,
          "explanation": "Months take 'în' (în octombrie, în mai)."
        },
        {
          "prompt": "What does 'Lunea am mult de lucru' mean?",
          "options": [
            "On Mondays (habitually)",
            "I only work on Monday",
            "Next Monday I will work",
            "Last Monday was busy"
          ],
          "answerIndex": 0,
          "explanation": "'Lunea' with the definite article denotes habitual action on Mondays."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The festival takes place on June 15th.'",
          "options": [
            "Festivalul are loc pe cincisprezece iunie.",
            "Festivalul are loc în cincisprezece iunie.",
            "Festivalul are loc de cincisprezece iunie.",
            "Festivalul are loc la cincisprezece iunie."
          ],
          "answerIndex": 0,
          "explanation": "Specific calendar dates use 'pe' (pe 15 iunie)."
        },
        {
          "prompt": "Select the correct sequence of days from Tuesday to Thursday:",
          "options": [
            "marți, miercuri, joi",
            "luni, marți, miercuri",
            "joi, vineri, sâmbătă",
            "miercuri, joi, vineri"
          ],
          "answerIndex": 0,
          "explanation": "Tuesday (marți), Wednesday (miercuri), Thursday (joi)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Astăzi este joi. Mâine este:",
          "options": [
            "vineri",
            "sâmbătă",
            "miercuri",
            "marți"
          ],
          "answerIndex": 0,
          "explanation": "The day after Thursday (joi) is Friday (vineri).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: 'Ne întâlnim ___ sâmbătă dimineața.'",
          "options": [
            "la sâmbătă",
            "în sâmbătă",
            "pe sâmbătă",
            "sâmbătă"
          ],
          "answerIndex": 3,
          "explanation": "No preposition before a specific weekday in Romanian.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: 'Vacanța începe ___ iulie.'",
          "options": [
            "la",
            "pe",
            "în",
            "de"
          ],
          "answerIndex": 2,
          "explanation": "Months take 'în' (în iulie).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: 'Concertul este ___ douăzeci mai.'",
          "options": [
            "în",
            "pe",
            "la",
            "de"
          ],
          "answerIndex": 1,
          "explanation": "Exact dates use 'pe' (pe 20 mai).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce sărbătorește România pe 1 Decembrie?",
          "options": [
            "Ziua Națională",
            "Ziua Muncii",
            "Anul Nou",
            "Paștele"
          ],
          "answerIndex": 0,
          "explanation": "December 1st is the National Day of Romania.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 4"
  },
  "ro-u2-l5": {
    "id": "ro-u2-l5",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can participate in a multi-turn Romanian dialogue scheduling an event, confirming dates, times, ticket prices with the 'de' rule, and phone numbers in a natural conversational register.",
    "prerequisites": [
      "ro-u2-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u2-l1",
        "ro-u2-l2",
        "ro-u2-l3",
        "ro-u2-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone dialogue synthesizes the complete grammatical foundation of Units 1 and 2: greetings, a fi (to be), numbers 0–100, the 'de' counting rule, asking and telling time, days of the week, date prepositions, and phone contact exchange.\n\nScenario: Andrei (Romanian) and Elena (foreign student in Cluj-Napoca) organize attending an indie theatre play together:\n\n- Andrei: *Bună, Elena! Ce faci? Ești liberă vineri seara?*\n- Elena: *Bună, Andrei! Sunt bine, mulțumesc. Da, sunt liberă! La ce oră începe piesa de teatru?*\n- Andrei: *Începe la ora șapte și jumătate seara, în Centru. Biletul costă patruzeci și cinci de lei.*\n- Elena: *Super! Îmi poți trimite numărul tău de telefon pe WhatsApp să stabilim unde ne vedem?*\n- Andrei: *Sigur că da! Este zero-șapte-patru-doi, treizeci și cinci, șaizeci și opt. Iau eu biletele și îmi transferi banii pe Revolut.*\n- Elena: *Perfect! Ne vedem vineri la șapte în fața teatrului!*\n- Andrei: *De acord! Pe vineri!*",
      "examples": [
        "Ești liberă vineri seara? (Are you free on Friday evening?).",
        "Biletul costă treizeci și cinci de lei. (The ticket costs 35 lei — notice 'de').",
        "De acord! (Agreed! / It's a deal! — standard Romanian confirmation phrase).",
        "La ce oră ne întâlnim sâmbătă? — La două și jumătate după-amiaza. (What time do we meet on Saturday? — At 2:30 PM)."
      ],
      "mnemonics": [
        "'De acord!' is the standard Romanian phrase for 'Agreed / It's a deal!'.",
        "Remember the Romanian scheduling structure: Day (vineri) + Time (la șapte și jumătate) + Price (45 DE lei) + Agreement (De acord!)."
      ],
      "culturalNotes": [
        "In Romania, Revolut is universally popular for splitting restaurant bills and paying friends instantly.",
        "Romanian mobile numbers start with 07 (e.g. 0742...) and are dictated in pairs of numbers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How does Andrei state the ticket price (45 lei) correctly?",
          "options": [
            "patruzeci și cinci de lei",
            "patruzeci și cinci lei",
            "patruzeci cinci de lei",
            "cinci și patruzeci de lei"
          ],
          "answerIndex": 0,
          "explanation": "45 is greater than 19, requiring the connective preposition 'de': 'patruzeci și cinci de lei'."
        },
        {
          "prompt": "What does 'De acord!' mean when confirming a social plan?",
          "options": [
            "Agreed! / It's a deal!",
            "I disagree",
            "Maybe another time",
            "I am busy"
          ],
          "answerIndex": 0,
          "explanation": "'De acord!' signifies enthusiastic agreement and confirmation."
        },
        {
          "prompt": "How do you say: 'The film is on Saturday at 8:30 PM and costs 30 lei'?",
          "options": [
            "Filmul este sâmbătă la ora opt și jumătate seara și costă treizeci de lei.",
            "Filmul este pe sâmbătă în ora opt și jumătate și costă treizeci lei.",
            "Filmul este la sâmbătă la ora opt și jumătate și costă treizeci de lei.",
            "Filmul este sâmbătă la opt și sfert și costă treizeci lei."
          ],
          "answerIndex": 0,
          "explanation": "sâmbătă (no prep) + la ora opt și jumătate seara + costă treizeci de lei (with 'de')."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Are you free on Tuesday at 4:00 PM?'",
          "options": [
            "Ești liber / liberă marți la ora patru după-amiaza?",
            "Ești liber la marți la ora patru dimineața?",
            "Ești liber în marți la ora patru seara?",
            "Ești liber pe marți în ora patru după-amiaza?"
          ],
          "answerIndex": 0,
          "explanation": "No preposition before marți + la ora patru după-amiaza."
        },
        {
          "prompt": "Which phrase is standard for confirming an appointment in Romanian?",
          "options": [
            "De acord! / S-a făcut!",
            "Cu plăcere!",
            "Nu știu!",
            "Păcat!"
          ],
          "answerIndex": 0,
          "explanation": "'De acord!' or 'S-a făcut!' confirms an arrangement."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Completează: 'Ești liberă ___ vineri ___ șapte seara?'",
          "options": [
            "pe / la",
            "în / la",
            "la / în",
            "fără prepoziție / la"
          ],
          "answerIndex": 3,
          "explanation": "No preposition before vineri + 'la' before time.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: 'Biletul costă 55 ___.'",
          "options": [
            "lei",
            "din lei",
            "de lei",
            "la lei"
          ],
          "answerIndex": 2,
          "explanation": "55 is >= 20, requiring 'de lei'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Ne vedem vineri la opt!' — Cum confirmi natural?",
          "options": [
            "Îmi pare rău, nu pot.",
            "De acord! Pe vineri!",
            "Nu înțeleg.",
            "Mulțumesc frumos."
          ],
          "answerIndex": 1,
          "explanation": "'De acord! Pe vineri!' is the natural confirmation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se spune numărul de telefon 0742-35-68 în română?",
          "options": [
            "zero-șapte-patru-doi, treizeci și cinci, șaizeci și opt",
            "zero șapte patruzeci și doi treizeci",
            "șaptezeci și patru doi treizeci și cinci",
            "șapte sute patruzeci și doi, treizeci și cinci"
          ],
          "answerIndex": 0,
          "explanation": "Standard phone number dictation groups digits in pairs.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este scopul principal al acestei lecții integrative?",
          "options": [
            "Doar să memoreze numerele de la 1 la 10",
            "Doar să învețe geografie",
            "Doar să conjuge verbe neregulate",
            "Să sintetizeze saluturi, zile, ore, prețuri cu regula 'de' și stabilirea unui plan de întâlnire"
          ],
          "answerIndex": 3,
          "explanation": "Unit capstone synthesizes scheduling, time, dates, prices, and conversational flow.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 5"
  },
  "ro-u3-l1": {
    "id": "ro-u3-l1",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Identify immediate family members in Romanian (tată, mamă, părinți, frate, soră, frați, fiu, fiică, copii) and master the enclitic (suffixed) definite article (tatăl/tata, mama, fratele, sora, părinții, copiii).",
    "prerequisites": [
      "ro-u2-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u1-l1",
        "ro-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "Romanian is unique among Romance languages: its **Definite Article ('the') is an ENCLITIC SUFFIX attached directly to the end of the noun**, not a separate preceding word!\n\n1. **Immediate Family Members (Familia restrânsă):**\n- **tată** [TAH-tuh] -> Articulated: **tatăl** [TAH-tul] or **tata** [TAH-tah] (the father / dad)\n- **mamă** [MAH-muh] -> Articulated: **mama** [MAH-mah] (the mother / mom)\n- **părinți** [puh-REENTS] -> Articulated: **părinții** [puh-REEN-tsee] (the parents — double -ii!)\n- **frate** [FRAH-teh] -> Articulated: **fratele** [FRAH-teh-leh] (the brother)\n- **soră** [SOH-ruh] -> Articulated: **sora** [SOH-rah] (the sister)\n- **frați** -> Articulated: **frații** [FRAH-tsee] (the brothers / siblings)\n- **fiu** [FEW] -> Articulated: **fiul** [FEW-ool] (the son)\n- **fiică** [FEE-kuh] -> Articulated: **fiica** [FEE-kah] (the daughter)\n- **copil** [ko-PEEL] -> Articulated: **copilul** (the child) / Plural: **copiii** [ko-PEE-ee] (the children — triple 'i' in articulated plural!).\n\n2. **How the Enclitic Definite Article Attaches:**\n- **Masculine Singular:** Suffix **-ul** or **-le** (*fiul, fratele, băiatul*)\n- **Feminine Singular:** Final *-ă* transforms into **-a** (*mamă -> mama, soră -> sora, fiică -> fiica*)\n- **Masculine Plural:** Suffix **-i** (*părinți + i = părinții, frați + i = frații*)\n- **Feminine Plural:** Suffix **-le** (*surori + le = surorile*).",
      "examples": [
        "Acesta este tatăl meu și aceasta este mama mea. Ei sunt părinții mei.",
        "Ai frați sau surori? — Da, am un frate și două surori.",
        "Fratele meu se numește Andrei, iar sora mea se numește Elena.",
        "Copiii se joacă în parc. (Copiii = the children, with triple 'i'!)."
      ],
      "mnemonics": [
        "Enclitic Rule: The article is glued to the BACK: Frate -> Frate-LE, Mamă -> Mam-A.",
        "Copil (child) -> copii (children) -> copiii (THE children with triple 'i')."
      ],
      "culturalNotes": [
        "In Romanian culture, family solidarity is paramount. Extended families frequently gather for major celebrations such as Paște (Easter) and Crăciun (Christmas) to share traditional sarmale and cozonac."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How is the definite article 'the' added to 'frate' (brother) in Romanian?",
          "options": [
            "le frate",
            "el frate",
            "frateul",
            "fratele"
          ],
          "answerIndex": 3,
          "explanation": "Romanian attaches the definite article as a suffix: fratele."
        },
        {
          "prompt": "What is the articulated plural form for 'the parents' in Romanian?",
          "options": [
            "părinte",
            "părințile",
            "părinții",
            "părințiul"
          ],
          "answerIndex": 2,
          "explanation": "părinți + i = părinții."
        },
        {
          "prompt": "How does 'mamă' (mother) become 'the mother'?",
          "options": [
            "mamăul",
            "mama",
            "mamei",
            "la mamă"
          ],
          "answerIndex": 1,
          "explanation": "Feminine nouns ending in -ă change to -a for the definite form: mama."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Do you have brothers or sisters?'",
          "options": [
            "Ești frați sau surori?",
            "Ai părinți sau copii?",
            "Unde sunt frații?",
            "Ai frați sau surori?"
          ],
          "answerIndex": 3,
          "explanation": "Ai (a avea) frați sau surori?"
        },
        {
          "prompt": "What is 'fiica' in English?",
          "options": [
            "The sister",
            "The mother",
            "The daughter",
            "The son"
          ],
          "answerIndex": 2,
          "explanation": "fiica = the daughter."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "În limba română, articolul hotărât (definite article) este:",
          "options": [
            "O vorbă separată în fața substantivului",
            "Un prefix",
            "Enclitic",
            "Inexistent"
          ],
          "answerIndex": 2,
          "explanation": "Enclitic article suffix.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se scrie corect 'the children' în limba română?",
          "options": [
            "copiile",
            "copiii",
            "copilul",
            "copii"
          ],
          "answerIndex": 1,
          "explanation": "copiii (root copi- + plural -i + article -i = 3 i's).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cuvântul 'părinții' înseamnă:",
          "options": [
            "The parents",
            "The grandparents",
            "The uncles",
            "The brothers"
          ],
          "answerIndex": 0,
          "explanation": "părinții = the parents.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este forma articulată hotărât pentru 'soră'?",
          "options": [
            "sorăul",
            "sorei",
            "sorile",
            "sora"
          ],
          "answerIndex": 3,
          "explanation": "soră -> sora.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Din ce limbă istorică provin cuvintele 'frate' și 'soră'?",
          "options": [
            "Din turcă",
            "Din greacă",
            "Din latină",
            "Din slavonă"
          ],
          "answerIndex": 2,
          "explanation": "Latin origin (frater, soror).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 1: Identify immediate family members in Romanian (tată"
  },
  "ro-u3-l2": {
    "id": "ro-u3-l2",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Apply Romanian possessive adjectives (meu/mea/mei/mele, tău/ta/tăi/tale, său/sa/săi/sale, nostru/noastră/noștri/noastre, vostru/voastră/voștri/voastre, lui/ei/lor) following articulated nouns in the nominative.",
    "prerequisites": [
      "ro-u3-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u3-l1",
        "ro-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "In Romanian, possessive adjectives follow two strict rules: **1. They stand AFTER the noun**, and **2. The noun MUST have its enclitic definite article attached!**\n\n1. **The 4-Way Agreement Matrix (Possessor = 'My'):**\n- **Masculine Singular:** **meu** [MEH-oo] -> *fratele meu* (my brother), *tatăl meu* (my father)\n- **Feminine Singular:** **mea** [MEH-ah] -> *sora mea* (my sister), *mama mea* (my mother)\n- **Masculine Plural:** **mei** [MAY] -> *frații mei* (my brothers), *părinții mei* (my parents)\n- **Feminine Plural:** **mele** [MEH-leh] -> *surorile mele* (my sisters), *fiicele mele* (my daughters)\n\n2. **The 2nd Person ('Your'):**\n- *fratele tău* (masc sing), *sora ta* (fem sing), *frații tăi* (masc plur), *surorile tale* (fem plur).\n\n3. **The 1st Person Plural ('Our'):**\n- *fratele nostru* (masc sing), *casa noastră* (fem sing), *părinții noștri* (masc plur), *surorile noastre* (fem plur).\n\n4. **The Crystal-Clear 3rd Person Genitives (lui / ei / lor):**\n- Instead of ambiguous possessives, Romanian frequently uses genitive pronouns:\n  * **lui** [LOO-ee] -> **his** (*fratele lui* = his brother)\n  * **ei** [AY] -> **her** (*mama ei* = her mother)\n  * **lor** [LOR] -> **their** (*casa lor* = their house).",
      "examples": [
        "Tatăl meu este inginer, iar mama mea este profesoară.",
        "Unde locuiesc părinții tăi? — Părinții mei locuiesc la Brașov.",
        "Aceasta este mașina lui (his car) și aceasta este casa ei (her house).",
        "Familia noastră este foarte unită."
      ],
      "mnemonics": [
        "Rule 1: Noun wears the article (Fratele, Sora).",
        "Rule 2: Possessive follows behind: Fratele MEU, Sora MEA, Frații MEI, Surorile MELE.",
        "Lui = His. Ei = Her. Lor = Their."
      ],
      "culturalNotes": [
        "In informal spoken Romanian, kinship terms can use contracted forms: 'tată-meu' or 'maică-mea', but 'tatăl meu' and 'mama mea' are the standard literary forms."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Choose the correct possessive for 'my sister': '___ mea'",
          "options": [
            "Sora mea",
            "Soră mea",
            "Sora mei",
            "Sora meu"
          ],
          "answerIndex": 0,
          "explanation": "Sora (articulated) + mea (fem singular)."
        },
        {
          "prompt": "How do you say 'his brother' using unambiguous genitive pronoun syntax?",
          "options": [
            "fratele lui",
            "fratele ei",
            "fratele lor",
            "fratele său"
          ],
          "answerIndex": 0,
          "explanation": "'lui' means 'his'."
        },
        {
          "prompt": "Where does the possessive adjective stand in standard Romanian syntax?",
          "options": [
            "AFTER the articulated noun",
            "BEFORE the noun",
            "Attached as a prefix",
            "Only at the start of the paragraph"
          ],
          "answerIndex": 0,
          "explanation": "Possessives strictly follow the articulated noun."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Our parents live in Cluj.'",
          "options": [
            "Părinții noastră locuiesc la Cluj.",
            "Părinți nostru locuiesc la Cluj.",
            "Părinții mele locuiesc la Cluj.",
            "Părinții noștri locuiesc la Cluj."
          ],
          "answerIndex": 3,
          "explanation": "Părinții noștri (masc plural agreement)."
        },
        {
          "prompt": "What is 'casa lor' in English?",
          "options": [
            "His house",
            "Her house",
            "Our house",
            "Their house"
          ],
          "answerIndex": 3,
          "explanation": "lor = their."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Completați: 'Aceștia sunt frații ___.' (my brothers)",
          "options": [
            "mea",
            "mei",
            "mele",
            "meu"
          ],
          "answerIndex": 1,
          "explanation": "frații mei (masc plural).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completați: 'Aceasta este sora ___.' (his sister)",
          "options": [
            "lui",
            "lor",
            "mea",
            "ei"
          ],
          "answerIndex": 0,
          "explanation": "lui = his.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Mama ei lucrează la spital' înseamnă:",
          "options": [
            "His mother works at the hospital",
            "Their mother works at the hospital",
            "My mother works at the hospital",
            "Her mother works at the hospital"
          ],
          "answerIndex": 3,
          "explanation": "mama ei = her mother.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este forma de feminin plural pentru 'my' în 'surorile ___'?",
          "options": [
            "mei",
            "meu",
            "mele",
            "mea"
          ],
          "answerIndex": 2,
          "explanation": "surorile mele.",
          "type": "multiple-choice"
        },
        {
          "prompt": "De ce este obligatoriu ca substantivul să fie articulat în fața posesivului (ex: 'fratele meu', nu 'frate meu')?",
          "options": [
            "Pentru că sună mai lung",
            "Pentru că în gramatica limbii române, posesivul postpus cere obligatoriu determinare definită enclitică",
            "Este o greșeală gramaticală modernă",
            "Doar pentru cuvintele masculine"
          ],
          "answerIndex": 1,
          "explanation": "Standard Romanian syntactic determination rule.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 2: Apply Romanian possessive adjectives (meu/mea/mei/mele"
  },
  "ro-u3-l3": {
    "id": "ro-u3-l3",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Identify extended family members and in-laws in Romanian (bunici, bunicul/bunica, unchiul, mătușa, verișorii, nepoții, socrii, cumnatul/cumnata) with correct gender and article forms.",
    "prerequisites": [
      "ro-u3-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u3-l1",
        "ro-u3-l2"
      ]
    },
    "presentation": {
      "explanation": "Extended family structures in Romanian reflect close kinship ties and systematic masculine/feminine noun pairs.\n\n1. **Grandparents & Grandchildren:**\n- **bunic** -> Articulated: **bunicul** [boo-NEE-kool] (the grandfather) / informal: *tataie*\n- **bunică** -> Articulated: **bunica** [boo-NEE-kah] (the grandmother) / informal: *mamaie*\n- **bunici** -> Articulated: **bunicii** [boo-NEE-chee] (the grandparents)\n- **nepot** [neh-POT] -> Articulated: **nepotul** (the grandson OR nephew!)\n- **nepoată** [neh-PWAH-tuh] -> Articulated: **nepoata** (the granddaughter OR niece!)\n- **nepoți** -> Articulated: **nepoții** (the grandchildren OR nephews/nieces).\n\n2. **Aunts, Uncles & Cousins:**\n- **unchi** [OONGK] -> Articulated: **unchiul** [OONG-kyool] (the uncle)\n- **mătușă** [muh-TOO-shuh] -> Articulated: **mătușa** [muh-TOO-shah] (the aunt)\n- **verișor** [veh-ree-SHOR] -> Articulated: **verișorul** (male cousin)\n- **verișoară** [veh-ree-SHWAH-ruh] -> Articulated: **verișoara** (female cousin)\n- **verișori** -> Articulated: **verișorii** (cousins).\n\n3. **In-Laws (Familia prin alianță):**\n- **socru** -> Articulated: **socrul** (father-in-law) / **soacră** -> Articulated: **soacra** (mother-in-law)\n- **socri** -> Articulated: **socrii** (parents-in-law)\n- **cumnat** -> Articulated: **cumnatul** (brother-in-law) / **cumnată** -> Articulated: **cumnata** (sister-in-law)\n- **ginere** -> Articulated: **ginerele** (son-in-law) / **noră** -> Articulated: **nora** (daughter-in-law)\n\n4. **Spouses:**\n- **soț** -> Articulated: **soțul** [SOH-tsool] (husband)\n- **soție** -> Articulated: **soția** [so-TSEE-ah] (wife).",
      "examples": [
        "Bunicul meu și bunica mea locuiesc la țară, lângă Sibiu.",
        "Unchiul meu Radu este fratele tatălui meu.",
        "Mătușa mea are doi copii: verișorii mei, Dan și Ana.",
        "Socrii mei vin în vizită duminică la prânz."
      ],
      "mnemonics": [
        "Bunicul (Grandfather) & Bunica (Grandmother) share the root 'bun' (good).",
        "Nepot covers both 'grandson' and 'nephew' in Romanian!",
        "Unchiul (Uncle) & Mătușa (Aunt)."
      ],
      "culturalNotes": [
        "The Romanian countryside (*la țară*) holds a mythical place in family culture: visiting grandparents in the village during summers is an indelible childhood memory for generations of Romanians."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the Romanian word for 'grandparents'?",
          "options": [
            "părinții",
            "socrii",
            "unchii",
            "bunicii"
          ],
          "answerIndex": 3,
          "explanation": "bunicii = the grandparents."
        },
        {
          "prompt": "What dual meaning does the Romanian word 'nepot' possess?",
          "options": [
            "Both 'uncle' and 'cousin'",
            "Both 'father' and 'son'",
            "Both 'brother' and 'friend'",
            "Both 'grandson' AND 'nephew'"
          ],
          "answerIndex": 3,
          "explanation": "'nepot' denotes both a grandson and a nephew."
        },
        {
          "prompt": "What is 'soția mea' in English?",
          "options": [
            "My sister",
            "My mother",
            "My aunt",
            "My wife"
          ],
          "answerIndex": 3,
          "explanation": "soția mea = my wife."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'My uncle Radu is a doctor.'",
          "options": [
            "Unchiul meu Radu este doctor.",
            "Unchi meu Radu este doctor.",
            "Mătușa mea Radu este doctor.",
            "Vărul meu Radu are doctor."
          ],
          "answerIndex": 0,
          "explanation": "Unchiul meu Radu este doctor."
        },
        {
          "prompt": "What is 'soacra' in English?",
          "options": [
            "Mother-in-law",
            "Sister-in-law",
            "Grandmother",
            "Aunt"
          ],
          "answerIndex": 0,
          "explanation": "soacra = mother-in-law."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Fratele mamei mele este:",
          "options": [
            "unchiul meu",
            "cumnatul meu",
            "bunicul meu",
            "vărul meu"
          ],
          "answerIndex": 0,
          "explanation": "Mother's brother is unchiul.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Copiii mătușii mele sunt:",
          "options": [
            "frații mei",
            "nepoții mei",
            "bunicii mei",
            "verișorii mei"
          ],
          "answerIndex": 3,
          "explanation": "Aunt's children are verișorii.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Părinții soțului sau ai soției sunt:",
          "options": [
            "unchii",
            "bunicii",
            "socrii",
            "frații"
          ],
          "answerIndex": 2,
          "explanation": "socrii = parents-in-law.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se numește soțul fiicei?",
          "options": [
            "nora",
            "ginerele",
            "socrul",
            "cumnatul"
          ],
          "answerIndex": 1,
          "explanation": "ginerele = son-in-law.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce semnificație culturală are expresia 'la țară la bunici' în România?",
          "options": [
            "Tradiția caldă a vacanțelor de vară petrecute în satul natal al bunicilor",
            "O călătorie de afaceri",
            "Mersul la școală",
            "O vizită la spital"
          ],
          "answerIndex": 0,
          "explanation": "Warm cultural tradition of summer holidays at grandparents' village home.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 3"
  },
  "ro-u3-l4": {
    "id": "ro-u3-l4",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Form genitive possessive phrases using the particle 'al / a / ai / ale' (casa a bunicului / mașina a tatălui) and describe people using physical and personality adjectives with 4-way gender/number agreement.",
    "prerequisites": [
      "ro-u3-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u3-l2",
        "ro-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "Describing possession with nouns in Romanian requires the **Genitive Case (Cazul Genitiv)** and the **Possessive Article (al, a, ai, ale)**.\n\n1. **The Genitive Possessive Article (al / a / ai / ale):**\nWhen a possessor noun follows, the particle matches the **OBJECT POSSESSED** in gender and number:\n- **al** [AHL] -> Masculine Singular (*băiatul al tatălui* / *un prieten al fratelui meu* = a friend of my brother)\n- **a** [AH] -> Feminine Singular (*casa a bunicilor* = the house of the grandparents)\n- **ai** [EYE] -> Masculine Plural (*prietenii ai verișorului meu* = friends of my cousin)\n- **ale** [AH-leh] -> Feminine Plural (*cărțile ale sorei mele* = the books of my sister).\n\n2. **Describing People (Adjective 4-Way Agreement):**\nUnlike German where predicate adjectives are uninflected, in Romanian **ADJECTIVES ALWAYS AGREE IN GENDER AND NUMBER WITH THE NOUN**:\n- **înalt** [een-AHLT] (tall masc sing) -> *înaltă* (fem sing) -> *înalți* (masc plur) -> *înalte* (fem plur)\n- **scund** [SKOOND] (short masc sing) -> *scundă* -> *scunzi* -> *scunde*\n- **tânăr** [TUH-nur] (young masc sing) -> *tânără* -> *tineri* -> *tinere*\n- **bătrân** [buh-TROON] (old masc sing) -> *bătrână* -> *bătrâni* -> *bătrâne*\n- **căsătorit** (married masc) -> *căsătorită* (fem)\n- **necăsătorit** (single masc) -> *necăsătorită* (fem).",
      "examples": [
        "Fratele meu este înalt (masc), iar sora mea este scundă (fem).",
        "Bunicii mei sunt bătrâni (masc plur), dar foarte activi.",
        "Unchiul meu este căsătorit, dar mătușa Elena este necăsătorită.",
        "Aceasta este mașina tatălui meu. (Genitive ending -lui)."
      ],
      "mnemonics": [
        "Al/A/Ai/Ale agree with what is OWNED: al (masc), a (fem), ai (masc plur), ale (fem plur).",
        "Adjective agreement: Frate înalt, Soră înaltă, Frați înalți, Surori înalte."
      ],
      "culturalNotes": [
        "In Romanian social interactions, calling an elder 'om înțelept' (a wise person) or showing respect for 'bătrânii noștri' (our elders) is a fundamental virtue."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Choose the correct adjective form: 'Sora mea este ___.' (tall / înalt)",
          "options": [
            "înaltă (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "înalți (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "înalte (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "înalt (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 0,
          "explanation": "Sora is feminine singular, requiring 'înaltă'."
        },
        {
          "prompt": "Which possessive article matches a feminine singular possessed noun (e.g. 'casa')?",
          "options": [
            "a (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "ai (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "ale (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "al (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 0,
          "explanation": "'a' matches feminine singular."
        },
        {
          "prompt": "What is the masculine singular form for 'married' in Romanian?",
          "options": [
            "căsătorit (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "căsătorite (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "căsătorită (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "căsătoriți (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 0,
          "explanation": "căsătorit is masculine singular."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'My parents are young.'",
          "options": [
            "Părinții mei sunt tineri. (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Părinții mei sunt tinere. (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Părinții mei sunt tânăr. (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Părinții mei sunt tânără. (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 0,
          "explanation": "Părinții mei is masculine plural -> tineri."
        },
        {
          "prompt": "What does 'necăsătorit' mean?",
          "options": [
            "Single / Unmarried (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Married (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Widowed (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Divorced (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 0,
          "explanation": "necăsătorit = single/unmarried."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Alegeți forma corectă de adjectiv: 'Bunicii mei sunt ___.' (old)",
          "options": [
            "bătrâne (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "bătrân (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "bătrână (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "bătrâni (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 3,
          "explanation": "Bunicii is masculine plural -> bătrâni.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care articol posesiv se folosește pentru un substantiv masculin singular posedat (ex: 'un prieten ___ fratelui meu')?",
          "options": [
            "ai (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "a (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "al (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "ale (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 2,
          "explanation": "al matches masculine singular.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Mătușa mea este o femeie foarte inteligentă' arată:",
          "options": [
            "O greșeală de acord (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Acordul corect la feminin singular (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Forma de plural (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Cazul acuzativ exclusiv (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 1,
          "explanation": "Correct feminine singular agreement.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce înseamnă cuvântul 'scund'?",
          "options": [
            "Short in height (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Tall (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Thin (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Fast (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 0,
          "explanation": "scund = short.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Spre deosebire de germană, cum se comportă adjectivele prădicate în limba română (după 'a fi')?",
          "options": [
            "Rămân neschimbate fără terminație (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Nu se folosesc niciodată (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Devin adverbe (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)",
            "Se acordă întotdeauna în gen și număr cu subiectul (Form genitive possessive phrases using the particle al  a  ai  ale casa a bunicului  maina a tatlui and describe people using physical and personality adjectives with 4way gendernumber agreement)"
          ],
          "answerIndex": 3,
          "explanation": "Always agree in gender and number.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 4"
  },
  "ro-u3-l5": {
    "id": "ro-u3-l5",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Participate in a multi-turn Romanian dialogue during a traditional family gathering (masa în familie) in Bucharest: introduce relatives, describe their professions, residences across Romania, and lineage using enclitic articles, possessives, and adjectives.",
    "prerequisites": [
      "ro-u3-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u3-l1",
        "ro-u3-l2",
        "ro-u3-l3",
        "ro-u3-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson synthesizes all vocabulary, enclitic articles, possessive adjectives (*meu/mea*), genitive pronouns (*lui/ei*), and descriptive adjectives into an authentic Romanian family gathering dialogue.\n\nScenario: Mihai invites his foreign colleague David to a Sunday family lunch (**masa în familie**) at his parents' house in Bucharest:\n\n- David: *Bună ziua, Mihai! Ce casă frumoasă și primitoare au părinții tăi! Şi ce miros minunat de sarmale calde!*\n- Mihai: *Salut, David! Bine ai venit! Intră, simte-te ca acasă! Vino să-ți prezint familia. Tată, mamă, el este David, colegul meu de la universitate.*\n- Tatăl (Domnul Ion): *Bună ziua, David! Încântat de cunoștință, tinere! Poftim, ia loc la masă. Să bem o țuică tradițională pentru bun venit!*\n- David: *Mulțumesc din suflet, domnule Ion! Noroc!*\n- Mihai: *Uite, David: bărbatul înalt de lângă tatăl meu este unchiul meu Radu, fratele lui. Soția lui este mătușa Maria, iar cei doi tineri care râd sunt verișorii mei, Dan și Cristina. Ei locuiesc la Cluj-Napoca.*\n- David: *Ce familie mare și unită! Şi cine este doamna în vârstă care zâmbește cu drag?*\n- Mihai: *Este bunica mea Elena, mama mamei mele. Are 85 de ani și este sufletul familiei noastre!*\n- Bunica Elena: *Bine ai venit, băiatul mamei! Mănâncă o sarma caldă cu mămăliguță și smântână!*\n- David: *Vă mulțumesc foarte mult! Ce oameni calzi și generoși sunteți!*",
      "examples": [
        "Simte-te ca acasă! (Make yourself at home — standard Romanian welcome!).",
        "Bărbatul înalt este unchiul meu Radu. (Articulated noun + adjective + possessive).",
        "Ei locuiesc la Cluj-Napoca. (Residence in Romanian cities).",
        "Bunica Elena este sufletul familiei noastre. (Soul of our family)."
      ],
      "mnemonics": [
        "Romanian Hospitality: 'Simte-te ca acasă' (Feel at home).",
        "Table flow: Welcome drink (Țuică / Noroc!) -> Introduce father/mother -> Introduce uncle/cousins -> Meet Grandma (Bunica) -> Traditional meal (Sarmale)."
      ],
      "culturalNotes": [
        "Traditional Romanian feasts feature *sarmale* (minced meat rolled in fermented cabbage leaves) served with *mămăligă* (polenta) and *smântână* (sour cream), accompanied by a welcoming shot of *țuică* or *pălincă*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What welcoming phrase does Mihai use to say 'make yourself at home'?",
          "options": [
            "Simte-te ca acasă!",
            "Stai afară!",
            "Nu vorbi!",
            "Mergi repede!"
          ],
          "answerIndex": 0,
          "explanation": "'Simte-te ca acasă!' is the classic Romanian hospitality invitation."
        },
        {
          "prompt": "How does Mihai introduce his uncle Radu with full grammatical accuracy?",
          "options": [
            "Bărbatul înalt de lângă tatăl meu este unchiul meu Radu.",
            "Bărbat înalt tată este unchi Radu.",
            "Omul este frate meu Radu.",
            "Unchiul lui Radu este tată."
          ],
          "answerIndex": 0,
          "explanation": "Bărbatul înalt... este unchiul meu Radu."
        },
        {
          "prompt": "What traditional toast is made when drinking a welcome țuică?",
          "options": [
            "Noroc!",
            "La revedere!",
            "Mulțumesc!",
            "Poftim!"
          ],
          "answerIndex": 0,
          "explanation": "'Noroc!' is the traditional Romanian toast."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Grandma Elena is the soul of our family.'",
          "options": [
            "Bunicul Elena este sufletul familiei.",
            "Bunica Elena este sufletul familiei noastre.",
            "Bunica Elena sunt sufletul noastre.",
            "Bunica Elena este suflet familie nostru."
          ],
          "answerIndex": 1,
          "explanation": "Bunica Elena este sufletul familiei noastre."
        },
        {
          "prompt": "What traditional Romanian dish is served in the dialogue?",
          "options": [
            "Sarmale cu mămăliguță și smântână",
            "Sushi",
            "Sandvișuri reci",
            "Pizza și paste"
          ],
          "answerIndex": 0,
          "explanation": "sarmale cu mămăliguță și smântână."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Expresia 'Simte-te ca acasă!' înseamnă:",
          "options": [
            "Pleacă acasă",
            "Cumpără o casă",
            "Make yourself at home / Feel comfortable as if in your own house",
            "Fă curățenie"
          ],
          "answerIndex": 2,
          "explanation": "Traditional hospitality expression.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este toastul tradițional românesc la ciocnirea paharelor?",
          "options": [
            "Salut!",
            "Noroc!",
            "Mersi!",
            "Pa!"
          ],
          "answerIndex": 1,
          "explanation": "Noroc / Sănătate.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce sinteză gramaticală reprezintă Unitatea 3 de Limba Română?",
          "options": [
            "Articolul hotărât enclitic",
            "Doar numerele de la 1 la 10",
            "Doar alfabetul chirilic",
            "Doar verbele la timpul viitor"
          ],
          "answerIndex": 0,
          "explanation": "Unit 3 master grammar synthesis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "În dialog, ce bucate tradiționale pregătește mama lui Mihai?",
          "options": [
            "Croissante",
            "Tacos",
            "Orez prăjit",
            "Sarmale calde cu mămăligă"
          ],
          "answerIndex": 3,
          "explanation": "Sarmale cu mămăligă.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Ce oameni calzi și generoși sunteți!' exprimă:",
          "options": [
            "O nemulțumire",
            "O întrebare legată de preț",
            "Recunoștință și admirație profundă pentru ospitalitatea gazdelor",
            "O simplă formulă de adio"
          ],
          "answerIndex": 2,
          "explanation": "Gratitude and admiration for hospitality.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 5"
  },
  "ro-u4-l1": {
    "id": "ro-u4-l1",
    "unit": "Present-Tense Basics & Sentence Structure",
    "level": "A1",
    "objective": "Conjugate 1st Conjugation (-A) verbs in the Present Indicative (Prezent), mastering both the suffix '-ez' group (a lucra -> eu lucrez, tu lucrezi, el lucrează) and the direct root group (a învăța -> eu învăț, tu înveți, el învață).",
    "prerequisites": [
      "ro-u3-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u3-l1",
        "ro-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "Romanian verbs in the Present Tense (Timpul Prezent) are categorized into 4 historical Latin conjugation classes. **Conjugation 1 consists of verbs ending in '-A'**.\n\n1. **The Subgroup 1: Suffix '-EZ' (Regular & Predictable!):**\nMany 1st-conjugation verbs insert the suffix **-ez** in the singular and 3rd person plural:\n- **a lucra** [ah loo-KRAH] (to work):\n  * **eu lucr-ez** [LOOK-rez] (I work)\n  * **tu lucr-ezi** [look-REZ] (you work)\n  * **el / ea lucr-ează** [look-REH-ah-zuh] (he / she works)\n  * **noi lucr-ăm** [look-RUHM] (we work — suffix drops!)\n  * **voi lucr-ați** [look-RAHTS] (you plural work — suffix drops!)\n  * **ei / ele lucr-ează** [look-REH-ah-zuh] (they work — identical to 3rd singular!).\n- *Other -ez verbs:* **a studia** (*studiez, studiezi, studiază*), **a naviga** (*navighez*), **a parca** (*parchez*).\n\n2. **The Subgroup 2: Direct Roots (Without '-ez'):**\nVerbs that take direct endings with vowel alternation:\n- **a învăța** [ah een-vuh-TSAH] (to learn / teach):\n  * **eu învăț** [een-VUHTS] (I learn)\n  * **tu înveți** [een-VETS] (you learn — consonant shift ț -> ț!)\n  * **el / ea învață** [een-VAH-tsuh] (he / she learns)\n  * **noi învățăm** [een-vuh-TSUHM]\n  * **voi învățați** [een-vuh-TSAHTS]\n  * **ei / ele învață** [een-VAH-tsuh].\n- *Other direct verbs:* **a asculta** (*ascult, asculți, ascultă* = to listen), **a mânca** (*mănânc, mănânci, mănâncă* = to eat).",
      "examples": [
        "Eu lucrez la o companie IT din Cluj. (I work at an IT company in Cluj).",
        "Tu înveți limba română în fiecare zi? (Do you learn Romanian every day?).",
        "Ea studiază medicina la universitate.",
        "Noi lucrăm de acasă vinerea."
      ],
      "mnemonics": [
        "-EZ formula: Eu lucr-EZ, Tu lucr-EZI, El lucr-EAZĂ, Ei lucr-EAZĂ.",
        "3rd person Singular & Plural are twins: El lucrează = Ei lucrează!"
      ],
      "culturalNotes": [
        "In Romanian everyday speech, subject pronouns (*eu, tu, noi*) are almost always omitted because verb endings (*lucrez, lucrezi, lucrăm*) are 100% distinct and unambiguous."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you conjugate 'a lucra' (to work) for 'eu' (I)?",
          "options": [
            "eu lucro",
            "eu lucram",
            "eu lucrează",
            "eu lucrez"
          ],
          "answerIndex": 3,
          "explanation": "eu lucrez."
        },
        {
          "prompt": "What remarkable feature do 3rd person singular (el/ea) and 3rd person plural (ei/ele) share in 1st conjugation -ez verbs?",
          "options": [
            "Plural takes -esc",
            "They are irregular",
            "They have the exact same identical form: 'lucrează'",
            "They use different vowels"
          ],
          "answerIndex": 2,
          "explanation": "Both singular and plural take 'lucrează'."
        },
        {
          "prompt": "How do you say 'We are learning Romanian' (a învăța)?",
          "options": [
            "Noi învățați românește.",
            "Noi învățăm românește.",
            "Noi învăț românește.",
            "Noi înveți românește."
          ],
          "answerIndex": 1,
          "explanation": "noi învățăm."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Where do you work?' (tu + a lucra)",
          "options": [
            "Unde lucrez?",
            "Unde lucrează?",
            "Unde lucrați?",
            "Unde lucrezi?"
          ],
          "answerIndex": 3,
          "explanation": "Unde lucrezi?"
        },
        {
          "prompt": "What does 'Ea studiază arhitectura' mean?",
          "options": [
            "She builds architecture",
            "She works in architecture",
            "She studies architecture",
            "She teaches architecture"
          ],
          "answerIndex": 2,
          "explanation": "a studia -> studiază = studies."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este forma corectă pentru 'ei' (they) a verbului 'a lucra'?",
          "options": [
            "ei lucrez",
            "ei lucrează",
            "ei lucreazău",
            "ei lucrăm"
          ],
          "answerIndex": 1,
          "explanation": "ei lucrează.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Sufixul '-ez' este specific cărei conjugări verbale în limba română?",
          "options": [
            "Conjugării I",
            "Conjugării a II-a",
            "Doar verbelor neregulate",
            "Conjugării a IV-a"
          ],
          "answerIndex": 0,
          "explanation": "1st conjugation in -a.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completați: 'Noi ___ la radio în fiecare dimineață.' (a asculta)",
          "options": [
            "ascultă",
            "asculți",
            "ascult",
            "ascultăm"
          ],
          "answerIndex": 3,
          "explanation": "noi ascultăm.",
          "type": "multiple-choice"
        },
        {
          "prompt": "De ce se pot omite pronumele personale (eu, tu, noi) în fața verbelor în română?",
          "options": [
            "Doar în poezie",
            "Pentru că limba română nu are pronume",
            "Pentru că terminațiile verbale arată clar și fără echivoc persoana gramaticală",
            "Este o greșeală gramaticală"
          ],
          "answerIndex": 2,
          "explanation": "Pro-drop language due to rich verbal inflection.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'El mănâncă o ciorbă caldă' înseamnă:",
          "options": [
            "He is cooking rice",
            "He is eating a hot sour soup",
            "He is buying bread",
            "He is drinking tea"
          ],
          "answerIndex": 1,
          "explanation": "mănâncă = is eating.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 1"
  },
  "ro-u4-l2": {
    "id": "ro-u4-l2",
    "unit": "Present-Tense Basics & Sentence Structure",
    "level": "A1",
    "objective": "Conjugate 2nd (-EA) and 3rd (-E) Conjugation verbs in the Present Indicative, including essential high-frequency verbs: a avea (am, ai, are, avem, aveți, au), a vrea (vreau, vrei, vrea, vrem, vreți, vor), a face (fac, faci, face, facem, faceți, fac), and a merge (merg, mergi, merge, mergem, mergeți, merg).",
    "prerequisites": [
      "ro-u4-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u4-l1",
        "ro-u3-l2"
      ]
    },
    "presentation": {
      "explanation": "**Conjugation 2 (-EA)** and **Conjugation 3 (-E)** contain Romanian's most crucial daily action and modal verbs.\n\n1. **Conjugation 2 (-EA Stems):**\n- **a avea** [ah ah-VEH-ah] (to have — indispensable auxiliary!):\n  * **eu am** [AHM] | **tu ai** [EYE] | **el/ea are** [AH-reh]\n  * **noi avem** [ah-VEM] | **voi aveți** [ah-VETS] | **ei/ele au** [OW].\n- **a vrea** [ah VREH-ah] (to want):\n  * **eu vreau** [VRYOW] | **tu vrei** [VRAY] | **el/ea vrea** [VREH-ah]\n  * **noi vrem** [VREM] | **voi vreți** [VRETS] | **ei/ele vor** [VOR].\n- **a vedea** [ah veh-DEH-ah] (to see):\n  * *văd, vezi, vede, vedem, vedeți, văd*.\n\n2. **Conjugation 3 (-E Stems):**\n- **a face** [ah FAH-cheh] (to do / make):\n  * **eu fac** [FAHK] | **tu faci** [FAHCH] | **el/ea face** [FAH-cheh]\n  * **noi facem** [fah-CHEM] | **voi faceți** [fah-CHETS] | **ei/ele fac** [FAHK — identical to 1st person!].\n- **a merge** [ah MEHR-zheh] (to go / walk):\n  * **eu merg** [MEHRG] | **tu mergi** [MEHRZH] | **el/ea merge** [MEHR-zheh]\n  * **noi mergem** [mehr-ZHEM] | **voi mergeți** [mehr-ZHETS] | **ei/ele merg** [MEHRG].\n- **a înțelege** [ah een-tseh-LEH-zheh] (to understand):\n  * *înțeleg, înțelegi, înțelege, înțelegem, înțelegeți, înțeleg*.",
      "examples": [
        "Ce vrei să faci astăzi? — Vreau să merg în parc. (Vreau să + subjunctive/infinitive).",
        "Noi avem mult de lucru la birou. (We have a lot of work at the office).",
        "Înțelegi ce spun? — Da, înțeleg foarte bine!",
        "Unde merg ei în vacanță? — Merg la mare, la Constanța."
      ],
      "mnemonics": [
        "A AVEA: am, ai, are, avem, aveți, au.",
        "A VREA: vreau, vrei, vrea, vrem, vreți, vor.",
        "Conjugation 3 identity: 'eu fac' = 'ei fac'; 'eu merg' = 'ei merg' (1st sing = 3rd plural!)."
      ],
      "culturalNotes": [
        "To express 'I want to [verb]' in Romanian, you do not use an infinitive — you use **'vreau să + verb'** (*Vreau să merg*, *Vreau să mănânc*). This is a famous feature of the Balkan Sprachbund."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you conjugate 'a vrea' (to want) for 'eu' (I)?",
          "options": [
            "eu vreau",
            "eu vrei",
            "eu vrem",
            "eu vrea"
          ],
          "answerIndex": 0,
          "explanation": "eu vreau = I want."
        },
        {
          "prompt": "What identical form is shared by 'eu' and 'ei' for Conjugation 3 verbs like 'a face' and 'a merg'?",
          "options": [
            "eu fac / ei fac; eu merg / ei merg",
            "They end in -ez",
            "They only match in questions",
            "They are completely different"
          ],
          "answerIndex": 0,
          "explanation": "eu fac = ei fac; eu merg = ei merg."
        },
        {
          "prompt": "How do you say 'We understand' (a înțelege)?",
          "options": [
            "noi înțelegem",
            "noi înțelegeți",
            "noi înțelege",
            "noi înțeleg"
          ],
          "answerIndex": 0,
          "explanation": "noi înțelegem."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'What do you want to do today?' (tu)",
          "options": [
            "Ce vrea să faceți astăzi?",
            "Ce vreau să fac astăzi?",
            "Unde mergi astăzi?",
            "Ce vrei să faci astăzi?"
          ],
          "answerIndex": 3,
          "explanation": "Ce vrei să faci astăzi?"
        },
        {
          "prompt": "What is 'Noi avem o casă frumoasă' in English?",
          "options": [
            "They have a big car",
            "You want a house",
            "I see a house",
            "We have a beautiful house"
          ],
          "answerIndex": 3,
          "explanation": "noi avem = we have."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Completați: 'Ei ___ mulți prieteni în București.' (a avea)",
          "options": [
            "au",
            "avem",
            "ai",
            "are"
          ],
          "answerIndex": 0,
          "explanation": "ei au = they have.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se formează expresia 'I want to go' în limba română (influența ariei lingvistice balcanice)?",
          "options": [
            "Vreau a merge",
            "Vreau de merg",
            "Vreau pe merg",
            "Vreau să merg"
          ],
          "answerIndex": 3,
          "explanation": "Balkan Sprachbund feature: 'vreau să merg'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Ce faci?' este una dintre cele mai frecvente întrebări zilnice și înseamnă:",
          "options": [
            "What do you have?",
            "Who are you?",
            "What are you doing? / How are you doing?",
            "Where are you going?"
          ],
          "answerIndex": 2,
          "explanation": "Ce faci? = What are you doing / How are you doing?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este forma de persoana a II-a plural (voi) pentru verbul 'a merge'?",
          "options": [
            "merg",
            "mergeți",
            "mergem",
            "mergi"
          ],
          "answerIndex": 1,
          "explanation": "voi mergeți.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Eu văd muntele, dar ei nu văd nimic' arată că:",
          "options": [
            "La verbul 'a vedea', formele de 'eu' și 'ei' sunt identice: văd",
            "Este un verb de conjugarea I",
            "Este o greșeală de acord",
            "Verbul este la trecut"
          ],
          "answerIndex": 0,
          "explanation": "eu văd = ei văd.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 2"
  },
  "ro-u4-l3": {
    "id": "ro-u4-l3",
    "unit": "Present-Tense Basics & Sentence Structure",
    "level": "A1",
    "objective": "Conjugate 4th Conjugation (-I / -Î) verbs in the Present Indicative, mastering the productive suffix '-esc / -ăsc' group (a vorbi -> vorbesc, vorbești, vorbește, vorbim, vorbiți, vorbesc; a citi -> citesc) and irregular stem verbs (a veni -> vin, vii, vine, venim, veniți, vin).",
    "prerequisites": [
      "ro-u4-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u4-l1",
        "ro-u4-l2"
      ]
    },
    "presentation": {
      "explanation": "**Conjugation 4 consists of verbs ending in '-I' and '-Î'**. It contains some of the most dynamic communication verbs in Romanian.\n\n1. **The Productive Suffix '-ESC / -ĂSC' Subgroup:**\nJust like 1st conjugation has *-ez*, 4th conjugation verbs insert **-esc** in the singular and 3rd plural:\n- **a vorbi** [ah vor-BEE] (to speak / talk):\n  * **eu vorb-esc** [vor-BESK] (I speak)\n  * **tu vorb-ești** [vor-BESH-tee] (you speak — s changes to ș!)\n  * **el / ea vorb-ește** [vor-BESH-teh] (he / she speaks)\n  * **noi vorb-im** [vor-BEEM] (we speak — suffix drops!)\n  * **voi vorb-iți** [vor-BEETS] (you pl speak — suffix drops!)\n  * **ei / ele vorb-esc** [vor-BESK — identical to 1st person 'eu vorbesc'!].\n- **a citi** [ah chee-TEE] (to read):\n  * *eu citesc, tu citești, el citește, noi citim, voi citiți, ei citesc*.\n- **a dori** [ah doh-REE] (to wish / desire):\n  * *eu doresc, tu dorești, el dorește, noi dorim, voi doriți, ei doresc*.\n- **a hotărî** (to decide - in -î):\n  * *eu hotărăsc, tu hotărăști, el hotărăște, noi hotărâm*.\n\n2. **The Direct Root Subgroup (a veni = to come):**\n- **a veni** [ah veh-NEE] (to come):\n  * **eu vin** [VEEN] (I come)\n  * **tu vii** [VEE] (you come — double 'ii'!)\n  * **el / ea vine** [VEE-neh] (he / she comes)\n  * **noi venim** [veh-NEEM] (we come)\n  * **voi veniți** [veh-NEETS] (you pl come)\n  * **ei / ele vin** [VEEN — identical to 1st person 'eu vin'!].\n- **a ști** [ah SHTEE] (to know):\n  * *știu, știi, știe, știm, știți, știu*.",
      "examples": [
        "Vorbiți limba engleză? — Da, vorbesc engleză și puțină română.",
        "Eu citesc un articol interesant despre tehnologie.",
        "Când vii la București? — Vin duminică seara.",
        "Noi știm răspunsul la această întrebare."
      ],
      "mnemonics": [
        "-ESC pattern: Eu vorb-ESC, Tu vorb-EȘTI, El vorb-EȘTE, Ei vorb-ESC.",
        "1st Sing & 3rd Plural match: Eu citesc = Ei citesc; Eu vin = Ei vin."
      ],
      "culturalNotes": [
        "Polite Romanian inquiries always feature 'a dori': *'Ce doriți?'* (What would you like? / How may I help you?) in restaurants, bakeries, and shops."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you conjugate 'a vorbi' (to speak) for 'tu' (you informal)?",
          "options": [
            "tu vorbesci",
            "tu vorbi",
            "tu vorbește",
            "tu vorbești"
          ],
          "answerIndex": 3,
          "explanation": "tu vorbești."
        },
        {
          "prompt": "How do you conjugate 'a citi' (to read) for 'eu' (I)?",
          "options": [
            "eu cito",
            "eu citești",
            "eu citim",
            "eu citesc"
          ],
          "answerIndex": 3,
          "explanation": "eu citesc."
        },
        {
          "prompt": "What is the 3rd person singular of 'a veni' (to come)?",
          "options": [
            "el vin",
            "el vii",
            "el veni",
            "el / ea vine"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"el / ea vine\". This directly applies the principle of: Conjugate 4th Conjugation (-I / -Î) verbs in the Present Indicative, mastering the productive suffix '-esc / -ăsc' group (a vorbi -> vorbesc, vorbești, vorbește, vorbim, vorbiți, vorbesc; a citi -> citesc) and irregular stem verbs (a veni -> vin, vii, vine, venim, veniți, vin).."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Do you speak Romanian?' (formal address: voi/dumneavoastră)",
          "options": [
            "Vorbiți românește?",
            "Vorbești românește?",
            "Vorbesc românește?",
            "Vorbim românește?"
          ],
          "answerIndex": 0,
          "explanation": "Vorbiți românește?"
        },
        {
          "prompt": "What does 'Eu știu totul' mean?",
          "options": [
            "I know everything",
            "I see everything",
            "I read everything",
            "I write everything"
          ],
          "answerIndex": 0,
          "explanation": "a ști -> știu = I know."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Completați: 'Ei ___ trei limbi străine.' (a vorbi)",
          "options": [
            "vorbim",
            "vorbiți",
            "vorbește",
            "vorbesc"
          ],
          "answerIndex": 3,
          "explanation": "ei vorbesc.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se scrie corect persoana a II-a singular pentru verbul 'a veni' (tu)?",
          "options": [
            "tu vi",
            "tu veni",
            "tu vii",
            "tu vine"
          ],
          "answerIndex": 2,
          "explanation": "tu vii (double 'i').",
          "type": "multiple-choice"
        },
        {
          "prompt": "Formula de politețe 'Ce doriți?' folosită de chelneri provine de la verbul:",
          "options": [
            "a dormi",
            "a dori",
            "a da",
            "a duce"
          ],
          "answerIndex": 1,
          "explanation": "a dori -> Ce doriți?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Sufixul '-esc' este caracteristic pentru ce clasă de verbe?",
          "options": [
            "Conjugarea a IV-a",
            "Conjugarea I",
            "Doar verbele în -e",
            "Conjugarea a III-a"
          ],
          "answerIndex": 0,
          "explanation": "4th conjugation in -i.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Noi citim o carte foarte interesantă' înseamnă:",
          "options": [
            "They are buying an interesting book",
            "We are writing an interesting book",
            "You see an interesting book",
            "We are reading a very interesting book"
          ],
          "answerIndex": 3,
          "explanation": "We are reading a very interesting book.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 3"
  },
  "ro-u4-l4": {
    "id": "ro-u4-l4",
    "unit": "Present-Tense Basics & Sentence Structure",
    "level": "A1",
    "objective": "Master the direct object accusative preposition 'PE' with specific persons, personal names, and stressed pronouns (Îl văd pe Andrei, O caut pe Maria), and understand direct object clitic doubling (îl, o, îi, le).",
    "prerequisites": [
      "ro-u4-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u4-l2",
        "ro-u4-l3"
      ]
    },
    "presentation": {
      "explanation": "One of the most famous, unique rules in Romanian syntax is the **Prepositional Accusative Marker 'PE'** and **Clitic Doubling (Dublarea Clitică)**.\n\n1. **The 'PE' Rule for Specific People:**\n- When the Direct Object of a verb is a **specific human being, a personal name, or a personal pronoun**, it **MUST BE PRECEDED BY THE PREPOSITION 'PE'**:\n  * Inanimate Object: *Citesc o carte.* (I read a book — NO 'pe'!).\n  * Specific Person: *Îl văd **pe Andrei**.* (I see Andrei — mandatory 'pe'!).\n  * *O caut **pe Maria**.* (I am looking for Maria).\n  * *Îi cunosc **pe părinții tăi**.* (I know your parents).\n\n2. **Clitic Pronoun Doubling (Dublarea Clitică):**\n- In Romanian, when a specific person is the direct object with 'pe', the verb **ALMOST ALWAYS TAKES AN UNSTRESSED CLITIC PRONOUN BEFORE IT**:\n  * **îl** [EEL] (him) -> ***Îl** văd pe Dan.* (Literally: 'Him I see Dan').\n  * **o** [OH] (her) -> ***O** cunosc pe Elena.* (Literally: 'Her I know Elena').\n  * **îi** [EE] (them masc) -> ***Îi** ajut pe colegii mei.*\n  * **le** [LEH] (them fem) -> ***Le** văd pe fete.*\n\n3. **Pronouns with 'PE':**\n- *pe mine* (me), *pe tine* (you), *pe el* (him), *pe ea* (her), *pe noi* (us), *pe voi* (you pl), *pe ei/ele* (them):\n  * *Mă iubești **pe mine**?* (Do you love ME?).",
      "examples": [
        "Îl cunoști pe Mihai? — Da, îl cunosc de la facultate.",
        "O aștept pe colega mea în fața clădirii.",
        "Pe cine cauți? — Îl caut pe domnul profesor Ionescu.",
        "Noi îi ajutăm pe prietenii noștri."
      ],
      "mnemonics": [
        "People get PE: Objects take zero (Citesc cartea), People take PE + Clitic (Îl văd PE Dan).",
        "Clitic pairs: Îl (him), O (her), Îi (them masc), Le (them fem)."
      ],
      "culturalNotes": [
        "The prepositional accusative with 'pe' and clitic doubling is shared with Spanish (*'a personal'*) and Balkan languages, reflecting Romania's unique synthesis of Romance heritage and Balkan grammar."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you correctly say 'I see Andrei' in Romanian with the mandatory 'pe' and clitic pronoun?",
          "options": [
            "Îl văd pe Andrei.",
            "Văd la Andrei.",
            "Îl văd Andrei.",
            "Văd Andrei."
          ],
          "answerIndex": 0,
          "explanation": "Specific person requires clitic 'îl' + 'pe Andrei'."
        },
        {
          "prompt": "Why does 'Citesc o carte' NOT take the preposition 'pe'?",
          "options": [
            "Because 'o carte' is an inanimate object, and 'pe' is strictly for specific persons",
            "Because it is singular",
            "It is a spelling exception",
            "Because 'a citi' cannot take objects"
          ],
          "answerIndex": 0,
          "explanation": "'pe' is reserved for specific persons."
        },
        {
          "prompt": "Which clitic pronoun replaces a feminine singular person (e.g. 'pe Maria')?",
          "options": [
            "o",
            "le",
            "îl",
            "îi"
          ],
          "answerIndex": 0,
          "explanation": "'o' is the feminine singular direct object clitic."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Whom are you looking for?'",
          "options": [
            "Pe cine cauți?",
            "Ce cauți pe cine?",
            "Cine cauți?",
            "Unde cauți?"
          ],
          "answerIndex": 0,
          "explanation": "Pe cine cauți? (Pe cine = whom)."
        },
        {
          "prompt": "What does 'Îi ajut pe părinții mei' mean?",
          "options": [
            "I help my parents",
            "I see my parents",
            "I live with my parents",
            "My parents help me"
          ],
          "answerIndex": 0,
          "explanation": "a ajuta -> îi ajut pe = I help [them]."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care propoziție este CORECTĂ conform regulilor de acuzativ prepozițional?",
          "options": [
            "O cunosc la profesoara.",
            "Cunosc foarte bine profesoara de engleză fără pe.",
            "O cunosc foarte bine pe profesoara de engleză.",
            "Cunosc pe cartea de engleză."
          ],
          "answerIndex": 2,
          "explanation": "O cunosc... pe profesoara.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce fenomen sintactic reprezintă utilizarea simultană a pronumelui 'îl' și a substantivului 'pe Radu' (ex: 'Îl văd pe Radu')?",
          "options": [
            "O greșeală de pleonasm",
            "Dublarea clitică (Clitic Doubling)",
            "Un timp trecut",
            "Modul imperativ"
          ],
          "answerIndex": 1,
          "explanation": "Clitic doubling.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Când este OBLIGATORIE prepoziția 'pe' la acuzativ?",
          "options": [
            "Când complementul direct este o persoană determinată, un nume propriu sau un pronume personal",
            "La toate substantivele din dicționar",
            "Doar la obiecte neînsuflețite",
            "Doar la plural"
          ],
          "answerIndex": 0,
          "explanation": "Determined human direct objects.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este pronumele clitic pentru masculin plural în acuzativ (ex: '___ văd pe băieți')?",
          "options": [
            "îl",
            "le",
            "o",
            "îi"
          ],
          "answerIndex": 3,
          "explanation": "îi is masculine plural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Mă auzi pe mine?' exprimă:",
          "options": [
            "O afirmație sigură",
            "O negație",
            "Întrebarea directă 'Do you hear ME?' cu dublare și accentuare pe pronume",
            "Un salut de dimineață"
          ],
          "answerIndex": 2,
          "explanation": "Emphatic direct object inquiry.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 4"
  },
  "ro-u4-l5": {
    "id": "ro-u4-l5",
    "unit": "Present-Tense Basics & Sentence Structure",
    "level": "A1",
    "objective": "Participate in a multi-turn Romanian dialogue at an innovation tech hub in Cluj-Napoca: discuss daily software development, foreign languages spoken (vorbesc), reading documentation (citesc), and meeting colleagues using 'PE' and clitics (îl cunosc pe Radu).",
    "prerequisites": [
      "ro-u4-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "ro-u4-l1",
        "ro-u4-l2",
        "ro-u4-l3",
        "ro-u4-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson synthesizes all 4 Romanian conjugation groups (*lucrez, merg, citesc, vin*), modal *vreau să*, accusative marker *pe*, and clitics into a modern tech co-working conversation in Cluj-Napoca (the 'Silicon Valley of Eastern Europe').\n\nScenario: Alex meets his new colleague Victor on his first day at *Silicon Forest*, a dynamic IT hub in Cluj-Napoca:\n\n- Alex: *Bună dimineața! Numele meu este Alex. Sunt noul programator din echipa de aplicații mobile. Tu lucrezi aici?*\n- Victor: *Bună dimineața, Alex! Bine ai venit la Cluj! Eu sunt Victor. Da, lucrez ca inginer software în aceeași echipă!*\n- Alex: *Mă bucur mult de cunoștință! Ce proiecte dezvoltați în această perioadă?*\n- Victor: *Noi dezvoltăm o platformă nouă de telemedicină. În fiecare zi scriem cod în Python și JavaScript, citim documentație tehnică și facem teste automate.*\n- Alex: *Sună foarte interesant! Ce limbi străine vorbiți în birou?*\n- Victor: *În echipă vorbim română și engleză, dar colegul nostru Andrei vorbește și germană fluent. Îl cunoști pe Andrei?*\n- Alex: *Nu, încă nu îl cunosc pe Andrei. Unde este el acum?*\n- Victor: *El este în bucătărie, bea o cafea caldă. Vrei să mergem să bem un espresso și să facem o scurtă pauză?*\n- Alex: *Da, vreau foarte mult! Am nevoie de o cafea tare de dimineață!*\n- Victor: *Super! Hai să mergem. O chem și pe Maria, colega noastră de la design!*\n- Alex: *Excelent! Mulțumesc mult pentru primirea călduroasă!*",
      "examples": [
        "În fiecare zi scriem cod și citim documentație. (Conjugation 3 scriem + Conjugation 4 citim).",
        "Îl cunoști pe Andrei? — Nu, încă nu îl cunosc. (Clitic îl + pe Andrei).",
        "Vrei să mergem să bem un espresso? (Balkan subjunctive vreau să + mergem să + bem).",
        "O chem și pe Maria. (Clitic o + pe Maria)."
      ],
      "mnemonics": [
        "Tech hub loop: Lucrez (1) -> Facem teste (3) -> Vorbim / Citim (4) -> Vreau să bem cafea (2).",
        "Grammar synthesis: PE with colleagues (pe Andrei, pe Maria) + clitics (îl, o)."
      ],
      "culturalNotes": [
        "Cluj-Napoca is celebrated internationally as Romania's premier IT capital and vibrant academic hub, home to over 100,000 university students and thousands of leading tech innovators."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How does Victor ask Alex if he knows their colleague Andrei with full grammatical precision?",
          "options": [
            "Îl cunoști pe Andrei?",
            "Cunoști Andrei?",
            "Îl cunoști Andrei?",
            "Cunoști la Andrei?"
          ],
          "answerIndex": 0,
          "explanation": "Îl cunoști pe Andrei."
        },
        {
          "prompt": "How does Victor invite Alex for coffee using the Balkan 'vreau să' subjunctive construction?",
          "options": [
            "Vrei să mergem să bem un espresso?",
            "Vrei a merge a bea espresso?",
            "Vrei de mergi de bei?",
            "Vrei mergem bem?"
          ],
          "answerIndex": 0,
          "explanation": "Vrei să mergem să bem un espresso?"
        },
        {
          "prompt": "How does Victor mention inviting Maria (design colleague)?",
          "options": [
            "O chem și pe Maria.",
            "Chem Maria.",
            "Îl chem pe Maria.",
            "Chem la Maria."
          ],
          "answerIndex": 0,
          "explanation": "O chem și pe Maria."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Every day we write code and read technical documentation.'",
          "options": [
            "În fiecare zi scrieți cod și citiți.",
            "În fiecare zi scriem cod și citim documentație tehnică.",
            "Noi scrie cod și citi.",
            "În fiecare zi scriu cod și citesc documentație."
          ],
          "answerIndex": 1,
          "explanation": "scriem (a scrie) and citim (a citi)."
        },
        {
          "prompt": "What major city in Transylvania is the setting for the dialogue?",
          "options": [
            "Cluj-Napoca",
            "Iași",
            "Constanța",
            "Timișoara"
          ],
          "answerIndex": 0,
          "explanation": "Cluj-Napoca."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce sinteză gramaticală completă a fost realizată în această a 4-a Unitate de Limba Română?",
          "options": [
            "Doar timpurile trecute",
            "Cele 4 conjugări ale prezentului (-a/-ez, -ea, -e, -i/-esc)",
            "Doar gradele de comparație",
            "Doar alfabetul"
          ],
          "answerIndex": 1,
          "explanation": "Unit 4 master grammar synthesis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "În propoziția 'O chem și pe Maria', de ce se folosește pronumele 'o'?",
          "options": [
            "Pentru că anticipează clitic complementul direct feminin singular 'pe Maria'",
            "Pentru că Maria este un oraș",
            "Este o greșeală de tipar",
            "Pentru că este un subiect"
          ],
          "answerIndex": 0,
          "explanation": "Anticipatory feminine clitic.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce semnificație are Cluj-Napoca în economia modernă a României?",
          "options": [
            "O zonă exclusiv agricolă",
            "Un port maritim",
            "O stațiune montană izolată",
            "Principalul pol tehnologic IT și universitar inovator din Europa de Est"
          ],
          "answerIndex": 3,
          "explanation": "Major IT and academic powerhouse.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum se traduce expresia 'Mă bucur mult de cunoștință'?",
          "options": [
            "Goodbye",
            "Thank you for the coffee",
            "Pleased to meet you / It's a great pleasure to make your acquaintance",
            "Where is the bathroom"
          ],
          "answerIndex": 2,
          "explanation": "Polite introduction formula.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Verbele 'scriem' (Conjugarea III) și 'citim' (Conjugarea IV) sunt la persoana:",
          "options": [
            "I singular",
            "I plural",
            "a III-a plural",
            "a II-a plural"
          ],
          "answerIndex": 1,
          "explanation": "1st person plural (noi).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 5"
  },
  "ro-u5-l1": {
    "id": "ro-u5-l1",
    "unit": "ro-u5",
    "level": "A1",
    "objective": "Conjugate reflexive daily routine verbs (verbe reflexive) using accusative reflexive pronouns (mă, te, se, ne, vă, se).",
    "presentation": {
      "explanation": "Many essential daily routine verbs in Romanian are **reflexive** (*verbe reflexive*), meaning the subject performs the action upon itself. In Romanian, reflexive verbs require a reflexive pronoun (*pronume reflexiv*) placed directly before the conjugated verb:\n\nReflexive Pronoun Paradigm:\n- Eu (I): **mă** (mă trezesc - I wake up)\n- Tu (you informal): **te** (te trezești - you wake up)\n- El / Ea (he/she): **se** (se trezește - he/she wakes up)\n- Noi (we): **ne** (ne trezim - we wake up)\n- Voi / Dumneavoastră (you pl/formal): **vă** (vă treziți - you wake up)\n- Ei / Ele (they): **se** (se trezesc - they wake up)\n\nCore Daily Reflexive Verbs:\n- a se trezi (to wake up): Mă trezesc la ora șapte.\n- a se spăla (to wash oneself): Te speli pe dinți (You brush your teeth).\n- a se îmbrăca (to get dressed): El se îmbracă repede.\n- a se culca (to go to bed / sleep): Ne culcăm la ora unsprezece.\n- a se odihni (to rest): Vă odihniți în parc.\n- a se numi (to be called/named): Cum te numești?",
      "examples": [
        {
          "target": "Dimineața mă trezesc devreme și mă spăl.",
          "reading": "dee-mee-NYAH-tsah muh treh-ZESK deh-VREH-meh shee muh SPUL",
          "translation": "In the morning I wake up early and wash myself."
        },
        {
          "target": "La ce oră te culci de obicei?",
          "reading": "lah cheh OH-ruh teh koolch deh oh-bee-CHEY?",
          "translation": "At what time do you usually go to bed?"
        },
        {
          "target": "Copiii se îmbracă pentru școală.",
          "reading": "koh-PEE-ee seh eem-BRUH-kuh PEN-troo SHKWAH-luh",
          "translation": "The children are getting dressed for school."
        },
        {
          "target": "Noi ne odihnim în weekend.",
          "reading": "noy neh oh-deeh-NEEM een WEE-kend",
          "translation": "We rest on the weekend."
        }
      ],
      "mnemonics": [
        "Pronoun rhyme: Mă (Me), Te (Thee), Se (Self), Ne (uS), Vă (You all), Se (Self again).",
        "trezi = sounds like 'crazy' (waking up early makes you feel crazy!)."
      ],
      "culturalNotes": [
        "In Romanian, personal pronouns (*Eu, Tu, Noi*) are usually omitted in natural speech because the reflexive pronoun + verb ending makes the subject completely unmistakable (e.g. 'Mă trezesc' rather than 'Eu mă trezesc')."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which reflexive pronoun pairs with 'Eu' (I)?",
          "options": [
            "te",
            "se",
            "ne",
            "mă"
          ],
          "answerIndex": 3,
          "explanation": "Eu takes 'mă'."
        },
        {
          "prompt": "Choose the correct sentence for 'You (informal) get dressed quickly':",
          "options": [
            "Ne îmbraci repede.",
            "Se îmbraci repede.",
            "Te îmbraci repede.",
            "Mă îmbraci repede."
          ],
          "answerIndex": 2,
          "explanation": "Tu te îmbraci."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'They are resting at home.'",
          "options": [
            "Ei ne odihnim acasă.",
            "Ei mă odihnesc acasă.",
            "Ei vă odihniți acasă.",
            "Ei se odihnesc acasă."
          ],
          "answerIndex": 3,
          "explanation": "Ei/Ele take 'se': se odihnesc."
        },
        {
          "prompt": "How do you say 'We go to bed at 10 PM'?",
          "options": [
            "Mă culc la ora 22:00.",
            "Te culci la ora 22:00.",
            "Se culcă la ora 22:00.",
            "Ne culcăm la ora 22:00."
          ],
          "answerIndex": 3,
          "explanation": "Noi ne culcăm."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What are the correct Romanian reflexive pronouns across all grammatical persons?",
          "options": [
            "mă, te, se, ne, vă, se",
            "pe mine, pe tine, pe el",
            "eu, tu, el, noi, voi, ei",
            "mi, ți, îi, ni, vi, le"
          ],
          "answerIndex": 0,
          "explanation": "The accusative reflexive pronouns are mă, te, se, ne, vă, se.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Andrei se trezește la ora șase dimineața.'",
          "options": [
            "Andrei goes to sleep at six.",
            "Andrei eats breakfast at six.",
            "Andrei goes to work at six.",
            "Andrei wakes up at six in the morning."
          ],
          "answerIndex": 3,
          "explanation": "a se trezi = to wake up, la ora șase dimineața = at six in the morning.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Fill in the blank: 'Voi _____ spălați pe mâini înainte de masă.'",
          "options": [
            "te",
            "se",
            "vă",
            "ne"
          ],
          "answerIndex": 2,
          "explanation": "Voi takes 'vă': Voi vă spălați.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb is reflexive in Romanian?",
          "options": [
            "a mânca",
            "a se îmbrăca",
            "a scrie",
            "a citi"
          ],
          "answerIndex": 1,
          "explanation": "a se îmbrăca is a reflexive verb with the particle 'se'.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 1: Dimineața mă trezesc devreme ș"
  },
  "ro-u5-l2": {
    "id": "ro-u5-l2",
    "unit": "ro-u5",
    "level": "A1",
    "objective": "Conjugate high-frequency irregular present verbs (a merge, a veni, a face, a bea) in daily activity contexts.",
    "presentation": {
      "explanation": "Several of the most essential daily action verbs in Romanian are irregular in the present tense:\n\n1. a merge (to go / to walk):\n   - eu merg, tu mergi, el/ea merge, noi mergem, voi mergeți, ei/ele merg\n   - Merg la serviciu pe jos (I walk to work).\n2. a veni (to come):\n   - eu vin, tu vii, el/ea vine, noi venim, voi veniți, ei/ele vin\n   - Când vii acasă? (When are you coming home?)\n3. a face (to do / to make):\n   - eu fac, tu faci, el/ea face, noi facem, voi faceți, ei/ele fac\n   - Ce faci azi? (What are you doing today? / How are you?)\n4. a bea (to drink):\n   - eu beau, tu bei, el/ea bea, noi bem, voi beți, ei/ele beau\n   - Beau o cafea tare dimineața (I drink a strong coffee in the morning).",
      "examples": [
        {
          "target": "Eu merg cu metroul la birou în fiecare zi.",
          "reading": "EH-oo mehrg koo meh-TROH-ool lah bee-ROH een FYEH-kah-reh zee",
          "translation": "I take the subway to the office every day."
        },
        {
          "target": "Ce faci în această seară?",
          "reading": "cheh fahch een ah-CHAH-stuh SYAH-ruh?",
          "translation": "What are you doing this evening?"
        },
        {
          "target": "Noi bem ceai cald cu lămâie.",
          "reading": "noy behm cheye kahld koo luh-MWEE-yeh",
          "translation": "We are drinking hot tea with lemon."
        },
        {
          "target": "Prieteni noștri vin în vizită duminică.",
          "reading": "pree-YEH-tenee NOHSH-tree veen een VEE-zee-tuh doo-MEE-nee-kuh",
          "translation": "Our friends are coming over for a visit on Sunday."
        }
      ],
      "mnemonics": [
        "Ce faci? (What are you doing? / How are you doing?) is the #1 greeting heard across Romania every day!",
        "a bea: 'beau' sounds like 'bow' (take a bow with a cup of coffee!)."
      ],
      "culturalNotes": [
        "'Ce faci?' (literally 'What are you doing?') functions culturally in Romania like 'How are you?' or 'What's up?'. Standard replies include: 'Bine, mulțumesc!' (Fine, thanks!), 'Muncim!' (Working!), or 'Uite, mă relaxez' (Just relaxing)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the 'eu' form of 'a face' (to do/make)?",
          "options": [
            "fac",
            "facem",
            "faci",
            "face"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"fac\". This directly applies the principle of: Conjugate high-frequency irregular present verbs (a merge, a veni, a face, a bea) in daily activity contexts.."
        },
        {
          "prompt": "Choose the correct form of 'a merge' for 'Noi' (We):",
          "options": [
            "mergem",
            "merg",
            "mergeți",
            "mergi"
          ],
          "answerIndex": 0,
          "explanation": "Noi mergem."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Are you (informal) drinking coffee?'",
          "options": [
            "Beau cafea?",
            "Bea cafea?",
            "Bei cafea?",
            "Bem cafea?"
          ],
          "answerIndex": 2,
          "explanation": "Tu bei (Bei cafea?)."
        },
        {
          "prompt": "Translate: 'They are coming from Bucharest.'",
          "options": [
            "Ei vine din București.",
            "Ei venim din București.",
            "Ei veniți din București.",
            "Ei vin din București."
          ],
          "answerIndex": 3,
          "explanation": "Ei/Ele vin."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Conjugate 'a veni' (to come) for 'Tu' (you singular):",
          "options": [
            "vine",
            "vin",
            "venim",
            "vii"
          ],
          "answerIndex": 3,
          "explanation": "Tu vii (spelled with double 'i').",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does the common Romanian greeting 'Ce faci?' mean?",
          "options": [
            "Who are you?",
            "What is your name?",
            "What are you doing? / How are you?",
            "Where are you going?"
          ],
          "answerIndex": 2,
          "explanation": "'Ce faci?' is the everyday friendly greeting.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate into Romanian: 'We are going to the park.'",
          "options": [
            "Merge în parc.",
            "Mergem în parc.",
            "Mergeți în parc.",
            "Merg în parc."
          ],
          "answerIndex": 1,
          "explanation": "Mergem = We go / are going.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which form of 'a bea' corresponds to 'Eu' (I)?",
          "options": [
            "beau",
            "bea",
            "bem",
            "bei"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"beau\". This directly applies the principle of: Conjugate high-frequency irregular present verbs (a merge, a veni, a face, a bea) in daily activity contexts..",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 2: Conjugate high-frequency irregular present verbs (a merge"
  },
  "ro-u5-l3": {
    "id": "ro-u5-l3",
    "unit": "ro-u5",
    "level": "A1",
    "objective": "Sequence daily activities using temporal adverbs (mai întâi, apoi, după aceea) and express exact times with prepositions (la ora..., de la... până la...).",
    "presentation": {
      "explanation": "1. Expressing Time & Duration:\n   - la ora + Cardinal Number: la ora opt (at 8 o'clock), la ora opt și jumătate (at 8:30), la ora nouă fără un sfert (at 8:45 / a quarter to nine).\n   - de la ... până la ...: de la ora nouă până la ora șaptesprezece (from 9:00 to 17:00).\n   - Times of Day: dimineața (in the morning), la prânz (at lunchtime/noon), după-amiaza (in the afternoon), seara (in the evening), noaptea (at night).\n\n2. Sequencing Words for Routine:\n   - mai întâi (first of all / first)\n   - apoi / după aceea (then / after that)\n   - în final / la sfârșit (finally / in the end)\n   - înainte de + Noun (before): înainte de micul dejun (before breakfast)\n   - după + Noun (after): după serviciu / după muncă (after work)",
      "examples": [
        {
          "target": "Programul meu de lucru este de la 9:00 până la 17:30.",
          "reading": "proh-GRAH-mool MEH-oo deh LOO-kroo YES-teh deh lah NOH-oo-uh PUH-nuh lah shahp-teh-SPREH-zeh-cheh shee joo-muh-TAH-teh",
          "translation": "My work schedule is from 9:00 until 17:30."
        },
        {
          "target": "Mai întâi beau o cafea, apoi plec la birou.",
          "reading": "mye een-TUH-ee BYAH-oo oh kah-FEH-uh, ah-POY PLEHK lah bee-ROH",
          "translation": "First I drink a coffee, then I leave for the office."
        },
        {
          "target": "După serviciu merg la cumpărături la piață.",
          "reading": "DOO-puh sehr-VEE-chyoo MEHRG lah koom-puh-ruh-TOORee lah PYAH-tsuh",
          "translation": "After work I go shopping at the fresh market."
        },
        {
          "target": "Seara citesc o carte sau mă uit la televizor.",
          "reading": "SYAH-rah chee-TESK oh KAHR-teh sow muh WEET lah teh-leh-vee-ZOR",
          "translation": "In the evening I read a book or watch television."
        }
      ],
      "mnemonics": [
        "de la ... până la = 'from ... until' (până sounds like 'pana' - panning all the way until the end).",
        "după aceea = 'after that'."
      ],
      "culturalNotes": [
        "In Romania, neighborhood farmers' markets (*piața agroalimentară*, like Piața Obor in Bucharest) are vital centers of daily life where locals buy fresh telemea cheese, tomatoes, and herbs after work."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'at eight o'clock in the morning' in Romanian?",
          "options": [
            "în ora opt dimineața",
            "de ora opt dimineața",
            "pe ora opt dimineața",
            "la ora opt dimineața"
          ],
          "answerIndex": 3,
          "explanation": "'la ora' is used for clock times."
        },
        {
          "prompt": "Which sequence means 'First..., then..., after that...'?",
          "options": [
            "Niciodată..., uneori..., mereu...",
            "Aici..., acolo..., unde...",
            "Astăzi..., ieri..., mâine...",
            "Mai întâi..., apoi..., după aceea..."
          ],
          "answerIndex": 3,
          "explanation": "mai întâi (first), apoi (then), după aceea (after that)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'After work I go to the gym.'",
          "options": [
            "După serviciu merg la sală.",
            "Înainte de serviciu merg la sală.",
            "În timpul serviciului merg la sală.",
            "Fără serviciu merg la sală."
          ],
          "answerIndex": 0,
          "explanation": "după serviciu = after work, la sală = to the gym."
        },
        {
          "prompt": "Translate: 'de la ora 8:00 până la ora 16:00'",
          "options": [
            "from 8:00 until 16:00",
            "at 8:00 and at 16:00",
            "before 8:00 and after 16:00",
            "around 8:00 or 16:00"
          ],
          "answerIndex": 0,
          "explanation": "de la ... până la = from ... until."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which prepositional construction indicates exact clock time in Romanian?",
          "options": [
            "în ora + number",
            "pe ora + number",
            "la ora + number",
            "cu ora + number"
          ],
          "answerIndex": 2,
          "explanation": "'la ora' specifies time of day.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Mai întâi luăm micul dejun, apoi plecăm.'",
          "options": [
            "Finally we arrived for breakfast.",
            "First we have breakfast, then we leave.",
            "We never eat breakfast before leaving.",
            "They are eating breakfast now."
          ],
          "answerIndex": 1,
          "explanation": "mai întâi = first, luăm micul dejun = have breakfast, apoi plecăm = then we leave.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'in the evening' in Romanian?",
          "options": [
            "seara",
            "dimineața",
            "noaptea",
            "la prânz"
          ],
          "answerIndex": 0,
          "explanation": "seara = in the evening.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Cât este ceasul?'",
          "options": [
            "How much does the watch cost?",
            "Where is the clock?",
            "Whose watch is this?",
            "What time is it?"
          ],
          "answerIndex": 3,
          "explanation": "'Cât este ceasul?' is the standard way to ask the time.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 3: Sequence daily activities using temporal adverbs (mai întâi"
  },
  "ro-u5-l4": {
    "id": "ro-u5-l4",
    "unit": "ro-u5",
    "level": "A1",
    "objective": "Express necessity, capability, and desires using modal verbs (a trebui, a putea, a vrea) with subjunctive 'să' clauses.",
    "presentation": {
      "explanation": "In Romanian, unlike English or French, modal verbs are NOT followed by an infinitive! Instead, Romanian uses the **Subjunctive Mood** (*Conjunctivul*), introduced by the conjunction **să** + conjugated verb:\n\n1. a trebui (must / to have to - impersonal necessity):\n   - 'Trebuie' is invariable (it stays 'trebuie' for all persons!):\n   - Trebuie **să plec** (I must leave).\n   - Trebuie **să lucrezi** (You must work).\n   - Trebuie **să mergem** (We must go).\n2. a putea (can / to be able to):\n   - eu pot, tu poți, el/ea poate, noi putem, voi puteți, ei/ele pot\n   - Pot **să te ajut**? (Can I help you?)\n   - Putem **să vorbim** românește (We can speak Romanian).\n3. a vrea (to want):\n   - eu vreau, tu vrei, el/ea vrea, noi vrem, voi vreți, ei/ele vor\n   - Vreau **să beau** o cafea (I want to drink a coffee).\n   - Ce vrei **să faci**? (What do you want to do?)",
      "examples": [
        {
          "target": "Trebuie să mă trezesc devreme mâine dimineață.",
          "reading": "TREH-bwee-yeh suh muh treh-ZESK deh-VREH-meh MWEEY-neh dee-mee-NYAH-tsuh",
          "translation": "I must wake up early tomorrow morning."
        },
        {
          "target": "Poți să vii la birou la ora 10:00?",
          "reading": "poh-ts suh veey lah bee-ROH lah OH-rah ZEH-cheh?",
          "translation": "Can you come to the office at 10:00?"
        },
        {
          "target": "Vrem să cumpărăm legume proaspete din piață.",
          "reading": "vrehm suh koom-puh-RUM leh-GOO-meh PRAWHS-peh-teh deen PYAH-tsuh",
          "translation": "We want to buy fresh vegetables from the market."
        },
        {
          "target": "Nu pot să vin astăzi pentru că sunt ocupat.",
          "reading": "noo poht suh veen AHSH-tuhz PEN-troo kuh soont oh-koo-PAHT",
          "translation": "I cannot come today because I am busy."
        }
      ],
      "mnemonics": [
        "The 'să' bridge: In Romanian, whenever one verb wants to trigger another verb, 'să' is the mandatory bridge between them!",
        "Trebuie is a superhero: it never changes its costume (stays 'trebuie' for I, you, we, they)."
      ],
      "culturalNotes": [
        "When asking for assistance in Romanian shops, saying 'Puteți să mă ajutați, vă rog?' (Can you help me, please?) is the standard polite phrasing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What particle connects modal verbs to the following action verb in Romanian?",
          "options": [
            "să",
            "la",
            "în",
            "de"
          ],
          "answerIndex": 0,
          "explanation": "The subjunctive conjunction 'să' connects modal verbs to the secondary verb."
        },
        {
          "prompt": "How does 'trebuie' conjugate for 'Noi' (We)?",
          "options": [
            "Trebuie să mergem",
            "Trebuieți să mergem",
            "Trebuiești să mergem",
            "Trebuim să mergem"
          ],
          "answerIndex": 0,
          "explanation": "'Trebuie' remains invariable in the present tense."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I want to speak Romanian.'",
          "options": [
            "Vreau să vorbesc românește.",
            "Vrei să vorbim românește.",
            "Vreau vorbi românește.",
            "Vreau de vorbesc românește."
          ],
          "answerIndex": 0,
          "explanation": "Vreau să vorbesc românește."
        },
        {
          "prompt": "Translate: 'Can we pay by card?'",
          "options": [
            "Putem să plătim cu cardul?",
            "Trebuie să plătim cu cardul?",
            "Poți să plătești cu cardul?",
            "Vreți să plătim cu cardul?"
          ],
          "answerIndex": 0,
          "explanation": "Putem să plătim = Can we pay?"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "How do Romanian modal verbs (a vrea, a putea, a trebui) link to a secondary verb?",
          "options": [
            "With a bare Latin infinitive with no particle.",
            "Via the subjunctive particle 'să' followed by a conjugated verb",
            "With the preposition 'de' only.",
            "With a gerund ending in -ând."
          ],
          "answerIndex": 1,
          "explanation": "Romanian uses subjunctive 'să' clauses rather than bare infinitives.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Trebuie să plec acum.'",
          "options": [
            "I must leave now.",
            "I want to leave now.",
            "I can leave now.",
            "I am leaving tomorrow."
          ],
          "answerIndex": 0,
          "explanation": "trebuie să plec = I must leave, acum = now.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct sentence for 'Can you (formal) repeat, please?':",
          "options": [
            "Vreți să repeți, vă rog?",
            "Poți să repeți, vă rog?",
            "Trebuie să repetați, vă rog?",
            "Puteți să repetați, vă rog?"
          ],
          "answerIndex": 3,
          "explanation": "Puteți să repetați, vă rog? (formal 2nd person plural).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Conjugate 'a vrea' for 'Noi' (We):",
          "options": [
            "vrei",
            "vreau",
            "vrem",
            "vor"
          ],
          "answerIndex": 2,
          "explanation": "Correct answer: \"vrem\". This directly applies the principle of: Express necessity, capability, and desires using modal verbs (a trebui, a putea, a vrea) with subjunctive 'să' clauses..",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 4: Express necessity"
  },
  "ro-u5-l5": {
    "id": "ro-u5-l5",
    "unit": "ro-u5",
    "level": "A1",
    "objective": "Integrate daily routine reflexive verbs, irregular verbs, time sequencing, and subjunctive modal clauses in a Bucharest daily life dialogue and narrative.",
    "presentation": {
      "explanation": "In this capstone lesson of Unit 5, we unite all competencies:\n1. Reflexive verbs (mă trezesc, te îmbraci, se odihnește).\n2. High-frequency irregulars (merg, vin, fac, beau).\n3. Time prepositions and sequencing adverbs (dimineața, la ora 8:00, mai întâi, apoi, după aceea).\n4. Subjunctive modal structures (trebuie să..., pot să..., vreau să...).\n\nConversational Dialogue in Bucharest (Between Roommates Radu & Mihai):\n- Radu: *Bună dimineața, Mihai! Ce faci? Te pregătești de plecare?* (Good morning, Mihai! What are you doing? Are you getting ready to leave?)\n- Mihai: *Bună dimineața! Da, mă spăl pe dinți și mă îmbrac. Trebuie să fiu la birou la ora 9:00 fix.*\n- Radu: *Cum mergi azi la muncă? Iei metroul de la Piața Victoriei?*\n- Mihai: *Da, merg cu metroul pentru că este foarte rapid. Tu ce program ai azi?*\n- Radu: *Eu lucrez de acasă până la prânz. După-amiază vreau să merg la Piața Obor să cumpăr brânză proaspătă și legume. Diseară vrei să ieșim la o terasă în Centrul Vechi?*\n- Mihai: *Excelentă idee! Termin la ora 18:00, vin acasă să mă schimb și ne vedem la ora 19:30 în Centrul Vechi!*",
      "examples": [
        {
          "target": "Dimineața mă trezesc la 7:00, beau o cafea și citesc știrile.",
          "reading": "dee-mee-NYAH-tsah muh treh-ZESK lah SHAHPT-eh, BYAH-oo oh kah-FEH-uh shee chee-TESK SHTEE-ree-leh",
          "translation": "In the morning I wake up at 7:00, drink a coffee, and read the news."
        },
        {
          "target": "De la 9:00 până la 17:00 lucrez la proiectul meu.",
          "reading": "deh lah NOH-oo-uh PUH-nuh lah shahp-teh-SPREH-zeh-cheh loo-KREZ lah proh-YEK-tool MEH-oo",
          "translation": "From 9:00 to 17:00 I work on my project."
        },
        {
          "target": "Seara ne întâlnim cu prietenii la un restaurant tradițional.",
          "reading": "SYAH-rah neh een-tuhl-NEEM koo pree-YEH-teh-nee lah oon rehs-tow-RAHNT trah-dee-tsyo-NAHL",
          "translation": "In the evening we meet with friends at a traditional restaurant."
        },
        {
          "target": "Ne vedem diseară!",
          "reading": "neh veh-DEHM dee-SYAH-ruh!",
          "translation": "See you tonight!"
        }
      ],
      "mnemonics": [
        "Centrul Vechi = Bucharest's historic Old Town with its vibrant cobblestone café terraces.",
        "Ne vedem = 'We see each other' (See you!)."
      ],
      "culturalNotes": [
        "Bucharest's *Centrul Vechi* (Lipscani district) is famous for terrace culture (*terase*). Even on weekdays, socializing over dinner and coffee outdoors until late evening is central to Romanian urban lifestyle."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the dialogue, why does Mihai take the subway to work?",
          "options": [
            "Pentru că este foarte rapid",
            "Pentru că nu are mașină",
            "Pentru că este gratis",
            "Pentru că plouă"
          ],
          "answerIndex": 0,
          "explanation": "Mihai states: 'merg cu metroul pentru că este foarte rapid.'"
        },
        {
          "prompt": "Where do the roommates agree to meet at 19:30 tonight?",
          "options": [
            "În Centrul Vechi la o terasă",
            "La aeroport",
            "La birou",
            "La bibliotecă"
          ],
          "answerIndex": 0,
          "explanation": "They agree to meet in Centrul Vechi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'First I shower, then I have breakfast.'",
          "options": [
            "Mănânc micul dejun fără duș.",
            "Mai întâi fac un duș, apoi iau micul dejun.",
            "Niciodată nu fac duș dimineața.",
            "După ce fac un duș, nu mănânc."
          ],
          "answerIndex": 1,
          "explanation": "Mai întâi ... apoi ..."
        },
        {
          "prompt": "Translate: 'Ne vedem diseară!'",
          "options": [
            "See you tonight!",
            "Goodbye forever!",
            "Have a nice weekend!",
            "See you tomorrow morning!"
          ],
          "answerIndex": 0,
          "explanation": "Ne vedem diseară = See you tonight."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sentence combines a reflexive verb with a modal necessity clause accurately?",
          "options": [
            "Trebuie să mă trezesc devreme mâine.",
            "Trebuie mă trezesc devreme mâine.",
            "Trebuim să mă trezesc devreme mâine.",
            "Trebuie să trezesc mă devreme mâine."
          ],
          "answerIndex": 0,
          "explanation": "Trebuie să mă trezesc (impersonal 'trebuie' + 'să' + reflexive verb).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sentence correctly demonstrates irregular verb agreement for 'Noi' (We)?",
          "options": [
            "Noi merg la piață și beau o cafea.",
            "Noi mergeți la piață și beți o cafea.",
            "Noi merge la piață și bea o cafea.",
            "Noi mergem la piață și bem o cafea."
          ],
          "answerIndex": 3,
          "explanation": "Noi mergem ... și bem.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'diseară' mean in Romanian?",
          "options": [
            "Tomorrow morning",
            "Yesterday afternoon",
            "Tonight / this evening",
            "Next week"
          ],
          "answerIndex": 2,
          "explanation": "diseară = this evening / tonight.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core competencies were mastered across Unit 5 in Romanian?",
          "options": [
            "Past participle passive forms only",
            "Reflexive routine verbs, irregular present verbs (merge, veni, face, bea)",
            "Alphabet and numbers only",
            "Genitive-dative articles only"
          ],
          "answerIndex": 1,
          "explanation": "Comprehensive Unit 5 grammar and communicative synthesis.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 5: Integrate daily routine reflexive verbs"
  },
  "ro-u6-l1": {
    "id": "ro-u6-l1",
    "unit": "ro-u6",
    "level": "A1",
    "objective": "Identify and classify traditional Romanian food, staple ingredients, and beverage vocabulary.",
    "presentation": {
      "explanation": "Romanian cuisine is rich in rustic staples, traditional soups (*ciorbe*), and beverages:\n\n1. Food Staples & Traditional Dishes:\n   - pâine (bread): pâine albă / neagră\n   - carne (meat): carne de pui (chicken), carne de porc (pork), carne de vită (beef), pește (fish)\n   - mămăligă (polenta / cornmeal porridge — the iconic national staple)\n   - brânză / telemea (cheese / salted sheep or cow feta)\n   - ciorbă (sour soup with vegetables/meat: ciorbă de burtă, ciorbă rădăuțeană)\n   - sarmale (cabbage rolls stuffed with minced meat and rice)\n   - ouă (eggs)\n\n2. Beverages (Băuturi):\n   - apă (water: apă plată = still water, apă minerală / carbogazoasă = sparkling water)\n   - cafea (coffee)\n   - ceai (tea)\n   - vin (wine: vin roșu = red wine, vin alb = white wine)\n   - bere (beer)\n   - suc (juice / soda)",
      "examples": [
        {
          "target": "Aș dori o porție de sarmale cu mămăligă și smântână.",
          "reading": "ash doh-REE oh POR-tsyeh deh sahr-MAH-leh koo muh-muh-LEE-guh shee smuhn-TUH-nuh.",
          "translation": "I would like a portion of cabbage rolls with polenta and sour cream."
        },
        {
          "target": "Pentru mine, o sticlă de apă plată și o cafea, vă rog.",
          "reading": "PEN-troo MEE-neh, oh STEE-kluh deh AH-puh PLAH-tuh shee oh kah-FEH-uh, vuh rohg.",
          "translation": "For me, a bottle of still water and a coffee, please."
        },
        {
          "target": "Ciorba rădăuțeană este fierbinte și gustoasă.",
          "reading": "CHOR-bah ruh-duh-oo-TSYAH-nuh YES-teh fyer-BEEN-teh shee goos-TWAH-suh.",
          "translation": "The Rădăuți garlic chicken soup is hot and tasty."
        },
        {
          "target": "Pâinea proaspătă miroase foarte bine.",
          "reading": "PUY-nyah PRAWHS-puh-tuh mee-RWAH-seh FWAHR-teh BEE-neh.",
          "translation": "The fresh bread smells very good."
        }
      ],
      "mnemonics": [
        "apă plată = 'flat/still water' (flat like a plate!).",
        "mămăligă = warm yellow polenta, the heart of the Romanian table.",
        "smântână = rich fermented sour cream served with almost every dish."
      ],
      "culturalNotes": [
        "In Romania, soups are divided into two categories: *supă* (clear sweet broth) and *ciorbă* (hearty sour soup acidified with fermented wheat bran / *borș* or lemon juice). Ciorbă is eaten with raw hot peppers (*ardei iute*) and sour cream."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the difference between 'apă plată' and 'apă minerală' in Romania?",
          "options": [
            "apă plată is hot water; apă minerală is cold.",
            "apă plată is tap water; apă minerală is flavored wine.",
            "There is no difference.",
            "apă plată is still water; apă minerală is sparkling (carbonated)"
          ],
          "answerIndex": 3,
          "explanation": "apă plată = still water; apă minerală / carbogazoasă = sparkling water."
        },
        {
          "prompt": "What is 'mămăligă'?",
          "options": [
            "A sparkling wine",
            "A sour soup with garlic",
            "Traditional Romanian yellow cornmeal polenta",
            "A type of chocolate cake"
          ],
          "answerIndex": 2,
          "explanation": "mămăligă is Romanian polenta."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'chicken soup with sour cream'",
          "options": [
            "carne de vită cu pâine",
            "pește cu cartofi",
            "mămăligă cu brânză",
            "ciorbă de pui cu smântână"
          ],
          "answerIndex": 3,
          "explanation": "ciorbă de pui cu smântână = chicken sour soup with sour cream."
        },
        {
          "prompt": "How do you say 'red wine' in Romanian?",
          "options": [
            "vin alb",
            "apă plată",
            "bere blondă",
            "vin roșu"
          ],
          "answerIndex": 3,
          "explanation": "vin roșu = red wine."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Romanian food staples: pâine, carne de vită, brânză, apă:",
          "options": [
            "chicken, fish, pork, wine",
            "soup, polenta, salad, beer",
            "milk, eggs, butter, juice",
            "bread, beef, cheese, water"
          ],
          "answerIndex": 3,
          "explanation": "Fundamental food vocabulary.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Doriți apă plată sau apă minerală?'",
          "options": [
            "Would you like red wine or white wine?",
            "Do you want coffee or tea?",
            "Would you like still water or sparkling water?",
            "Is the water cold or warm?"
          ],
          "answerIndex": 2,
          "explanation": "apă plată (still) vs. apă minerală (sparkling).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional side dish is usually served alongside Romanian 'sarmale'?",
          "options": [
            "Orez prăjit",
            "Mămăligă caldă și smântână",
            "Cartofi prăjiți",
            "Paste făinoase"
          ],
          "answerIndex": 1,
          "explanation": "Sarmale are traditionally served with warm polenta and sour cream.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'ciorbă' signify in Romanian dining?",
          "options": [
            "A traditional sour soup seasoned with herbs, sour cream, and hot pepper",
            "A grilled steak",
            "A cold summer lemonade",
            "A sweet dessert pastry"
          ],
          "answerIndex": 0,
          "explanation": "ciorbă is a sour soup.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 1: Identify and classify traditional Romanian food"
  },
  "ro-u6-l2": {
    "id": "ro-u6-l2",
    "unit": "ro-u6",
    "level": "A1",
    "objective": "Order meals and beverages politely in Romanian restaurants using conditional desire formulas (Aș dori / Vă rog) and request the check.",
    "presentation": {
      "explanation": "Polite restaurant interaction in Romanian uses the conditional desire form **aș dori** (I would like) or the courtesy particle **vă rog** (please):\n\n1. Ordering Formulas:\n   - Aș dori... (I would like...): Aș dori un meniu, vă rog (I would like a menu, please).\n   - Pentru mine... (For me...): Pentru mine, o ciorbă de văcuță.\n   - Ne aduceți, vă rog... (Could you bring us, please...): Ne aduceți încă o sticlă de apă?\n   - Ce ne recomandați? (What do you recommend to us?)\n\n2. Asking for the Check & Paying:\n   - Nota de plată, vă rog! (The bill/check, please!)\n   - Cât costă? (How much does it cost?)\n   - Plătesc cu cardul / plătesc cash (I am paying by card / paying cash).\n   - Păstrați restul! (Keep the change!).",
      "examples": [
        {
          "target": "Bună ziua! Aș dori o masă pentru două persoane pe terasă.",
          "reading": "BOO-nuh ZYOO-uh! ash doh-REE oh MAH-suh PEN-troo DOW-uh pehr-SWAH-neh peh teh-RAH-suh.",
          "translation": "Good day! I would like a table for two people on the terrace."
        },
        {
          "target": "Sunteți gata să comandați? — Da, aș dori păstrăv la grătar.",
          "reading": "SOON-tets GAH-tah suh koh-mahn-DAH-ts? — dah, ash doh-REE PUHS-truhv lah gruh-TAHR.",
          "translation": "Are you ready to order? — Yes, I would like grilled trout."
        },
        {
          "target": "Nota de plată, vă rog! Putem plăti cu cardul?",
          "reading": "NOH-tah deh PLAH-tuh, vuh rohg! poo-TEHM pluh-TEE koo KAHR-dool?",
          "translation": "The bill, please! Can we pay by card?"
        },
        {
          "target": "Totul a fost delicios, mulțumim frumos!",
          "reading": "TOH-tool ah fohst deh-lee-CHOHS, mool-tsoo-MEEM froo-MOHS!",
          "translation": "Everything was delicious, thank you very much!"
        }
      ],
      "mnemonics": [
        "Aș dori = 'I would desire / I would like' (polite conditional, sounds like 'ash doree').",
        "Nota de plată = 'The payment note' (the restaurant bill).",
        "Păstrați restul! = 'Keep the change!' (păstrați = preserve/keep)."
      ],
      "culturalNotes": [
        "Tipping (*bacșiș*) in Romania is standard at 10% in sit-down restaurants. Since 2023, tips can be officially entered and processed directly on credit card POS terminals alongside cash."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you politely ask for the restaurant bill in Romanian?",
          "options": [
            "Nota de plată, vă rog!",
            "Nu am bani!",
            "Unde este ușa?",
            "Vreau să plec!"
          ],
          "answerIndex": 0,
          "explanation": "Nota de plată, vă rog = The bill, please."
        },
        {
          "prompt": "What does 'Aș dori' mean when ordering?",
          "options": [
            "I would like",
            "I have",
            "I don't want",
            "I am cooking"
          ],
          "answerIndex": 0,
          "explanation": "Aș dori = I would like."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Can I pay by credit card?'",
          "options": [
            "Pot să plătesc cash?",
            "Cât este nota?",
            "Pot să plătesc cu cardul?",
            "Unde este banca?"
          ],
          "answerIndex": 2,
          "explanation": "Pot să plătesc cu cardul? = Can I pay by card?"
        },
        {
          "prompt": "Translate: 'Păstrați restul!'",
          "options": [
            "Give me my money back!",
            "The food is cold!",
            "Good evening!",
            "Keep the change!"
          ],
          "answerIndex": 3,
          "explanation": "Păstrați restul! = Keep the change!"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the polite phrase meaning 'The check/bill, please' in Romanian?",
          "options": [
            "Paharul de apă!",
            "Cartea de citit!",
            "Nota de plată, vă rog!",
            "Meniul de mâncare!"
          ],
          "answerIndex": 2,
          "explanation": "Nota de plată, vă rog = The bill, please.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Ce ne recomandați ca desert?'",
          "options": [
            "How much is the cake?",
            "What do you recommend to us for dessert?",
            "We don't want dessert.",
            "Do you have dessert?"
          ],
          "answerIndex": 1,
          "explanation": "Ce ne recomandați = What do you recommend to us, ca desert = for dessert.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct sentence for 'I would like a glass of red wine, please':",
          "options": [
            "Aș dori un pahar de vin roșu, vă rog.",
            "Aș dori apă cu zahăr.",
            "Vinul roșu este pe masă.",
            "Vreau vin roșu acum."
          ],
          "answerIndex": 0,
          "explanation": "Aș dori un pahar de vin roșu, vă rog.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the customary tipping rate (bacșiș) in Romanian restaurants?",
          "options": [
            "Tipping is forbidden",
            "Exactly 50%",
            "Only coins under 1 leu",
            "Approximately 10% for good table service"
          ],
          "answerIndex": 3,
          "explanation": "10% is the standard customary tip in Romanian dining.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 2: Bună ziua! Aș dori o masă pent"
  },
  "ro-u6-l3": {
    "id": "ro-u6-l3",
    "unit": "ro-u6",
    "level": "A1",
    "objective": "Express likes and dislikes using the Dative-pronoun construction with the verb 'a plăcea' (îmi place / îmi plac).",
    "presentation": {
      "explanation": "In Romanian, expressing that you like something uses the impersonal verb **a plăcea** (to please). The structure is inverted compared to English: the thing you like is the SUBJECT, and the person who likes it is in the **Dative Case** (unstressed dative pronoun):\n\nFormula: [Dative Pronoun + place (singular subject / verb) OR plac (plural subject)]\n\nDative Pronoun Paradigm:\n- Eu (to me): **îmi** (îmi place cafeaua = I like coffee; îmi plac sarmalele = I like cabbage rolls)\n- Tu (to you): **îți** (îți place mâncarea românească? = Do you like Romanian food?)\n- El / Ea (to him/her): **îi** (îi place ciocolata = he/she likes chocolate)\n- Noi (to us): **ne** (ne place acest restaurant = we like this restaurant)\n- Voi (to you pl): **vă** (vă place vinul? = do you like the wine?)\n- Ei / Ele (to them): **le** (le plac prăjiturile = they like cakes)\n\nAgreement Rule:\n- Use **place** with singular nouns & verbs (Îmi place să gătesc = I like to cook).\n- Use **plac** with plural nouns (Îmi plac legumele = I like vegetables).",
      "examples": [
        {
          "target": "Îmi place foarte mult mâncarea tradițională românească.",
          "reading": "EEM PLAH-cheh FWAHR-teh moolt muhn-KAH-ryah trah-dee-tsyo-NAH-luh roh-muh-NYAS-kuh.",
          "translation": "I like traditional Romanian food very much."
        },
        {
          "target": "Îți plac micii cu muștar și pâine?",
          "reading": "EETS PLAHK MEE-cheey koo moosh-TAHR shee PUY-neh?",
          "translation": "Do you like 'mici' grilled meat rolls with mustard and bread?"
        },
        {
          "target": "Nouă ne place să luăm cina în oraș.",
          "reading": "NOH-wuh neh PLAH-cheh suh LWUHM CHEE-nah een oh-RAHSH.",
          "translation": "We like to have dinner out in the city."
        },
        {
          "target": "Nu-mi place mâncarea prea sărată.",
          "reading": "NOOM PLAH-cheh muhn-KAH-ryah PREH-uh suh-RAH-tuh.",
          "translation": "I do not like food that is too salty."
        }
      ],
      "mnemonics": [
        "Singular -> place (One plate pleases me!). Plural -> plac (Plates please me!).",
        "Pronoun chart: Îmi (me), Îți (thee), Îi (he/she), Ne (us), Vă (y'all), Le (them)."
      ],
      "culturalNotes": [
        "*Mici* (or *mititei*, literally 'little ones') are grilled minced meat rolls flavored with garlic, thyme, and baking soda, universally loved at summer barbecues, festivals, and beer gardens across Romania."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which form of 'a plăcea' is used with plural nouns (e.g. 'sarmalele' - the cabbage rolls)?",
          "options": [
            "place",
            "plăcem",
            "plăceți",
            "plac"
          ],
          "answerIndex": 3,
          "explanation": "Plural subjects take 'plac': Îmi plac sarmalele."
        },
        {
          "prompt": "Which dative pronoun means 'to you' (informal) in '_____ place cafeaua'?",
          "options": [
            "îmi",
            "îi",
            "ne",
            "îți"
          ],
          "answerIndex": 3,
          "explanation": "îți = to you (singular informal)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'We like Romanian wine.'",
          "options": [
            "Ne place vinul românesc.",
            "Îmi place vinul românesc.",
            "Îți place vinul românesc.",
            "Le place vinul românesc."
          ],
          "answerIndex": 0,
          "explanation": "Ne place = We like (it pleases us)."
        },
        {
          "prompt": "How do you say 'I like to travel' in Romanian?",
          "options": [
            "Îmi place să călătoresc.",
            "Îmi plac să călătoresc.",
            "Eu plac să călătoresc.",
            "Mă place să călătoresc."
          ],
          "answerIndex": 0,
          "explanation": "Verbal actions take singular 'îmi place să...'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why does Romanian use 'îmi place' for singular objects and 'îmi plac' for plural objects?",
          "options": [
            "Because 'plac' is only used for food.",
            "Because the liked object is the grammatical subject of the verb 'a plăcea' (it pleases me / they please me)",
            "Because 'îmi' changes to plural.",
            "Because 'place' is a past tense marker."
          ],
          "answerIndex": 1,
          "explanation": "The noun is the subject: singular triggers 'place', plural triggers 'plac'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Vă place desertul tradițional papanași?'",
          "options": [
            "Do you (formal/pl)",
            "Where are the papanași made?",
            "Can you cook papanași?",
            "How much do papanași cost?"
          ],
          "answerIndex": 0,
          "explanation": "Vă place = Do you like, papanași = traditional dessert.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct sentence for 'He doesn't like cold soup':",
          "options": [
            "Nu-ți place ciorba rece.",
            "Nu-ne place ciorba rece.",
            "Nu-mi place ciorba rece.",
            "Nu-i place ciorba rece."
          ],
          "answerIndex": 3,
          "explanation": "Nu-i place = He/she doesn't like.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Fill in the blank: 'Copiilor _____ (a plăcea) înghețata de ciocolată.'",
          "options": [
            "ne plac",
            "îmi place",
            "le place",
            "îți place"
          ],
          "answerIndex": 2,
          "explanation": "Copiilor (to the children / dative plural) le place.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 3: Îmi place foarte mult mâncarea"
  },
  "ro-u6-l4": {
    "id": "ro-u6-l4",
    "unit": "ro-u6",
    "level": "A1",
    "objective": "Describe taste profiles, temperatures, and food qualities using Romanian descriptive adjectives with gender agreement.",
    "presentation": {
      "explanation": "Romanian food adjectives agree in gender and number with the nouns they modify (Masculine/Neuter singular: -Ø, Feminine singular: -ă; Plural: -i / -e):\n\nTaste & Temperature Descriptors:\n- delicios / delicioasă (delicious): un desert delicios / o ciorbă delicioasă\n- gustos / gustoasă (tasty / flavorful)\n- cald / caldă (warm / hot temperature)\n- fierbinte / fierbinți (piping hot)\n- rece / reci (cold): o bere rece (a cold beer)\n- dulce / dulci (sweet): un vin dulce / prăjituri dulci\n- sărat / sărată (salty): brânză sărată\n- acru / acră (sour): lapte bătut acru\n- picant / picantă (spicy): sos picant / ardei iute picant\n- proaspăt / proaspătă (fresh): pâine proaspătă (fresh bread)",
      "examples": [
        {
          "target": "Ciorba este fierbinte și ardeiul este foarte iute.",
          "reading": "CHOR-bah YES-teh fyer-BEEN-teh shee ahr-DEY-ool YES-teh FWAHR-teh YOO-teh.",
          "translation": "The soup is piping hot and the chili pepper is very spicy."
        },
        {
          "target": "Telemeaua de oaie este destul de sărată și gustoasă.",
          "reading": "teh-leh-MYAH-wah deh WAH-yeh YES-teh deh-STOOL deh suh-RAH-tuh shee goos-TWAH-suh.",
          "translation": "The sheep feta cheese is quite salty and tasty."
        },
        {
          "target": "Vara bem întotdeauna limonadă rece cu mentă.",
          "reading": "VAH-rah behm een-tot-DYAH-oo-nuh lee-moh-NAH-duh REH-cheh koo MEHN-tuh.",
          "translation": "In summer we always drink cold lemonade with mint."
        },
        {
          "target": "Această prăjitură cu mere este foarte dulce.",
          "reading": "ah-CHAH-stuh pruh-zhee-TOO-ruh koo MEH-reh YES-teh FWAHR-teh DOOL-cheh.",
          "translation": "This apple cake is very sweet."
        }
      ],
      "mnemonics": [
        "ardei iute = hot chili pepper (iute = fiery fast and spicy!).",
        "gustos = full of 'gust' (taste/gusto!).",
        "proaspăt / proaspătă = fresh (sounds like crisp spring water)."
      ],
      "culturalNotes": [
        "In Romanian restaurants, a fresh green hot pepper (*ardei iute*) is placed whole in a small bowl next to your ciorbă. You take small bites of the pepper between spoonfuls of hot soup for an invigorating spicy contrast."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What does 'gustos' mean in Romanian?",
          "options": [
            "cold",
            "tasty / delicious",
            "sour",
            "salty"
          ],
          "answerIndex": 1,
          "explanation": "gustos = tasty."
        },
        {
          "prompt": "How do you describe 'fresh bread' (pâine = feminine) in Romanian?",
          "options": [
            "pâine proaspătă",
            "pâine proaspeți",
            "pâine calzi",
            "pâine proaspăt"
          ],
          "answerIndex": 0,
          "explanation": "pâine proaspătă (feminine agreement)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The lemonade is cold and sweet.'",
          "options": [
            "Limonada este rece și dulce.",
            "Limonada este fără zahăr.",
            "Limonada este caldă și sărată.",
            "Limonada este picantă și amară."
          ],
          "answerIndex": 0,
          "explanation": "rece = cold, dulce = sweet."
        },
        {
          "prompt": "Which word means 'spicy / hot' in Romanian?",
          "options": [
            "picant",
            "acru",
            "dulce",
            "sărat"
          ],
          "answerIndex": 0,
          "explanation": "picant / iute = spicy / pungent."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Romanian taste adjectives: dulce, sărat, acru, picant:",
          "options": [
            "sweet, salty, sour, spicy",
            "hot, cold, warm, dry",
            "cheap, expensive, light, heavy",
            "fresh, old, good, bad"
          ],
          "answerIndex": 0,
          "explanation": "Core taste descriptors.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Această ciorbă de burtă este excelentă cu usturoi și smântână.'",
          "options": [
            "We don't like garlic and sour cream.",
            "This salad is cold with olive oil.",
            "This fish is sweet with lemon.",
            "This tripe soup is excellent with garlic and sour cream."
          ],
          "answerIndex": 3,
          "explanation": "ciorbă de burtă = tripe soup, usturoi = garlic, smântână = sour cream.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'ardei iute' served alongside traditional soups in Romania?",
          "options": [
            "For decoration only.",
            "To be used as a spoon.",
            "To be bitten into between spoonfuls for a fresh, spicy flavor contrast.",
            "To cool down the soup."
          ],
          "answerIndex": 2,
          "explanation": "ardei iute is eaten alongside ciorbă.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the feminine form of 'delicios'?",
          "options": [
            "delicioși",
            "delicioasă",
            "delicioase",
            "deliciosă"
          ],
          "answerIndex": 1,
          "explanation": "delicioasă is the feminine singular form.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 4: Describe taste profiles"
  },
  "ro-u6-l5": {
    "id": "ro-u6-l5",
    "unit": "ro-u6",
    "level": "A1",
    "objective": "Synthesize food vocabulary, polite ordering formulas (Aș dori), dative preference constructions (îmi place/plac), and check requests in a full Transylvanian restaurant dialogue.",
    "presentation": {
      "explanation": "In this capstone lesson of Unit 6, we unite all dining skills:\n1. Traditional dishes and beverages (ciorbă rădăuțeană, sarmale cu mămăligă, păstrăv, papanași, vin roșu Fetească Neagră).\n2. Polite request frames (Aș dori, Vă rog, Ce ne recomandați?).\n3. Liking with dative pronouns (Îmi place ciorba, Îmi plac sarmalele).\n4. Paying and tipping (Nota de plată, Plătim cu cardul, Păstrați restul / bacșiș).\n\nConversational Dialogue in Brașov (At a Traditional Transylvanian Restaurant in Piața Sfatului):\n- Ospătar: *Bună seara și bine ați venit! Iată meniul. Doriți ceva de băut pentru început?* (Good evening and welcome! Here is the menu. Would you like something to drink to start?)\n- Elena: *Bună seara! Aș dori un pahar de vin roșu Fetească Neagră, iar pentru prietenul meu, o sticlă de apă minerală carbogazoasă, vă rog.*\n- Ospătar: *Imediat. Ce doriți ca fel principal?*\n- Dan: *Eu aș dori sarmale tradiționale în foi de varză cu mămăliguță caldă, smântână și ardei iute. Am auzit că sunt cele mai bune din Brașov!*\n- Elena: *Iar pentru mine, păstrăv proaspăt la grătar cu mujdei de usturoi și mămăligă.*\n(After finishing the meal / După masă):\n- Ospătar: *V-a plăcut mâncarea? Doriți și un desert?*\n- Elena: *A fost extraordinar de gustos! Ne plac foarte mult sarmalele! Vrem două porții de papanași cu dulceață de afine și smântână, vă rog.*\n- Dan: *Și nota de plată, vă rog. Plătim cu cardul și adăugăm zece la sută bacșiș pentru servirea impecabilă!*\n- Ospătar: *Vă mulțumesc din suflet și vă mai așteptăm! Poftă bună și o seară minunată!*",
      "examples": [
        {
          "target": "Papanașii cu dulceață de afine sunt desertul meu preferat.",
          "reading": "pah-pah-NAH-sheey koo dool-CHAH-tsuh deh ah-FEE-neh soont deh-SEHR-tool MEH-oo preh-feh-RAHT.",
          "translation": "Papanași with blueberry jam are my favorite dessert."
        },
        {
          "target": "Poftă bună! — Mulțumim, la fel!",
          "reading": "POHF-tuh BOO-nuh! — mool-tsoo-MEEM, lah fel!",
          "translation": "Enjoy your meal! — Thank you, the same to you!"
        },
        {
          "target": "Mujdeiul de usturoi dă un gust autentic mâncării.",
          "reading": "moozh-DEH-yool deh oo-stoo-ROY duh oon goost ow-ten-TEEK muhn-KUH-ree.",
          "translation": "Garlic paste (mujdei) gives an authentic taste to the food."
        },
        {
          "target": "Vă mulțumim din suflet pentru ospitalitate!",
          "reading": "vuh mool-tsoo-MEEM deen SOO-flet PEN-troo ohs-pee-tah-lee-TAH-teh!",
          "translation": "We thank you from our hearts for the hospitality!"
        }
      ],
      "mnemonics": [
        "Papanași = cottage cheese fried dough spheres topped with sour cream and blueberry jam (the king of Romanian desserts!).",
        "Poftă bună = 'Good appetite!' (Bon appétit).",
        "Mujdei = garlic paste sauce."
      ],
      "culturalNotes": [
        "*Papanași* (fried or boiled sweet cottage cheese dumplings smothered in sour cream and wild bilberry/blueberry jam / *dulceață de afine*) is Romania's most legendary dessert, celebrated in every traditional restaurant across the country."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the dialogue, what dessert do Elena and Dan order?",
          "options": [
            "Papanași cu dulceață de afine și smântână",
            "Înghețată de vanilie",
            "Plăcintă cu mere",
            "Clătite cu ciocolată"
          ],
          "answerIndex": 0,
          "explanation": "They order papanași with blueberry jam and sour cream."
        },
        {
          "prompt": "How do you reply to 'Poftă bună!' (Enjoy your meal)?",
          "options": [
            "Mulțumesc, la fel!",
            "La revedere!",
            "Nu vreau!",
            "Noapte bună!"
          ],
          "answerIndex": 0,
          "explanation": "'Mulțumesc, la fel!' is the polite response."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The fish was grilled with garlic sauce and polenta.'",
          "options": [
            "Carnea a fost fiartă cu cartofi.",
            "Peștele a fost la grătar cu mujdei de usturoi și mămăligă.",
            "Nu mâncăm pește la grătar.",
            "Peștele a fost prăjit cu orez."
          ],
          "answerIndex": 1,
          "explanation": "la grătar = grilled, mujdei de usturoi = garlic sauce, mămăligă = polenta."
        },
        {
          "prompt": "Translate: 'Nota de plată, vă rog. Adăugăm 10% bacșiș.'",
          "options": [
            "We want a 10% discount.",
            "The bill please. We are adding a 10% tip.",
            "The bill was wrong.",
            "The menu please. We are ordering 10 dishes."
          ],
          "answerIndex": 1,
          "explanation": "bacșiș = tip."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sentence demonstrates accurate polite ordering, dative liking, and courteous restaurant communication in Romanian?",
          "options": [
            "Vreau sarmale fără bani și plec acum.",
            "Ospătar dă meniul repede.",
            "Mâncarea place mie cu apă rece.",
            "Bună seara, aș dori o porție de sarmale cu mămăligă, iar la sfârșit nota de plată, vă rog."
          ],
          "answerIndex": 3,
          "explanation": "Grammatically complete, courteous Romanian dining expression.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What famous Romanian dessert consists of cottage cheese dough served with sour cream and blueberry jam?",
          "options": [
            "Mămăligă",
            "Sarmale",
            "Papanași",
            "Ciorbă"
          ],
          "answerIndex": 2,
          "explanation": "Papanași is the iconic Romanian dessert.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Ne-a plăcut foarte mult servirea și mâncarea a fost delicioasă.'",
          "options": [
            "We disliked the service and the food was cold.",
            "We really liked the service and the food was delicious.",
            "We never eat at this restaurant.",
            "The food was cheap but the waiter was slow."
          ],
          "answerIndex": 1,
          "explanation": "Ne-a plăcut = We liked (it pleased us), delicioasă = delicious.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core competencies were mastered across Unit 6 in Romanian?",
          "options": [
            "Food and beverage vocabulary, polite ordering with 'Aș dori / Vă rog', expressing likes with Dative 'a plăcea'",
            "Clitic doubling in relative clauses only",
            "Alphabet and numbers only",
            "Pluperfect subjunctive conjugations only"
          ],
          "answerIndex": 0,
          "explanation": "Unit 6 comprehensive dining and preference mastery.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 5: Synthesize food vocabulary"
  },
  "ro-u7-l1": {
    "id": "ro-u7-l1",
    "unit": "ro-u7",
    "level": "A2",
    "objective": "Form the conversational compound past tense (Perfectul Compus) using the auxiliary forms of 'a avea' (am, ai, a, am, ați, au) with regular past participles (-at, -it, -ât).",
    "presentation": {
      "explanation": "Welcome to A2 Romanian! The **Perfectul Compus** is the universal past tense in Romanian used in daily conversation to narrate completed past actions:\n\n1. The Formula for Perfectul Compus:\n   - **Auxiliary Verb (special shortened forms of *a avea*) + Past Participle (Participiu)**:\n     - **Eu am** -> *am lucrat* (I worked)\n     - **Tu ai** -> *ai vizitat* (you visited)\n     - **El / Ea a** -> *a mâncat* (he/she ate)\n     - **Noi am** -> *am cumpărat* (we bought)\n     - **Voi ați** -> *ați ascultat* (you all listened)\n     - **Ei / Ele au** -> *au călătorit* (they traveled)\n\n2. Regular Participle Endings by Verb Group:\n   - **Group I (-a verbs)**: Add **-at** -> *a lucra* -> *lucrat*, *a vizita* -> *vizitat*, *a cumpăra* -> *cumpărat*, *a mânca* -> *mâncat*\n   - **Group IV (-i and -î verbs)**: Add **-it** or **-ât** -> *a citi* -> *citit*, *a vorbi* -> *vorbit*, *a auzi* -> *auzit*, *a coborî* -> *coborât*, *a hotărî* -> *hotărât*\n\n3. Note on 'Eu am' vs. 'Noi am':\n   - Notice that both 1st person singular (*eu am*) and 1st person plural (*noi am*) use **am**! The pronoun or context makes the subject clear: *'Eu am mâncat'* (I ate) vs. *'Noi am mâncat'* (We ate).",
      "examples": [
        {
          "target": "Ieri am lucrat toată ziua la birou.",
          "reading": "Ieri am lucrat toată ziua la birou.",
          "translation": "Yesterday I worked all day at the office."
        },
        {
          "target": "Ai vizitat Castelul Bran în weekend?",
          "reading": "Ai vizitat Castelul Bran în weekend?",
          "translation": "Did you visit Bran Castle on the weekend?"
        },
        {
          "target": "Noi am călătorit cu trenul spre munte.",
          "reading": "Noi am călătorit cu trenul spre munte.",
          "translation": "We traveled by train toward the mountains."
        }
      ],
      "mnemonics": [
        "Auxiliary chant: AM, AI, A, AM, AȚI, AU!",
        "Group I (-a) -> -at (lucrat, vizitat). Group IV (-i) -> -it (citit, vorbit)."
      ],
      "culturalNotes": [
        "Unlike in standard French or Italian where some verbs use 'to be' (être/essere), Romanian uses 'a avea' (*am, ai, a...*) for ALL verbs in the active voice, including verbs of movement (*am mers, am venit*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the auxiliary verb for 'tu' in the Perfectul Compus?",
          "options": [
            "am",
            "a",
            "ați",
            "ai"
          ],
          "answerIndex": 3,
          "explanation": "Tu takes 'ai' (tu ai lucrat)."
        },
        {
          "prompt": "What is the past participle of 'a citi' (to read)?",
          "options": [
            "citind",
            "citut",
            "citit",
            "citat"
          ],
          "answerIndex": 2,
          "explanation": "Group IV -i verbs form participles in -it: citit."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Ei au cumpărat suveniruri frumoase din piață.'",
          "options": [
            "We are buying souvenirs at the market.",
            "They want to sell souvenirs.",
            "The market was closed yesterday.",
            "They bought beautiful souvenirs from the market."
          ],
          "answerIndex": 3,
          "explanation": "Au cumpărat = they bought (ei au + cumpărat)."
        },
        {
          "prompt": "Complete the sentence: 'Voi _______ (vorbi) cu ghidul turistic?'",
          "options": [
            "au vorbit",
            "am vorbit",
            "ai vorbit",
            "ați vorbit"
          ],
          "answerIndex": 3,
          "explanation": "Voi takes 'ați' + participle -> ați vorbit."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the subjects to their auxiliary in Perfectul Compus: Eu, Tu, El, Noi, Voi, Ei:",
          "options": [
            "Eu: ai | Tu: am | El: au | Noi: ați | Voi: am | Ei: a",
            "All use 'a'",
            "Eu: am | Tu: ai | El: a | Noi: am | Voi: ați | Ei: au",
            "All use 'sunt'"
          ],
          "answerIndex": 2,
          "explanation": "am, ai, a, am, ați, au.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Aseară am ascultat muzică tradițională românească.'",
          "options": [
            "Tonight I will listen to music.",
            "Last night I listened to traditional Romanian music.",
            "The music was too loud.",
            "We play traditional instruments."
          ],
          "answerIndex": 1,
          "explanation": "Aseară = last night; am ascultat = I listened.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'am' used for both 'Eu' and 'Noi' in Romanian past tense?",
          "options": [
            "Historical phonological evolution converged 1st-person singular",
            "Because it is a printing shorthand.",
            "It is an error.",
            "Because Romanian has no plural."
          ],
          "answerIndex": 0,
          "explanation": "Historical Romance vowel reduction merged both forms to 'am'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the past participle of 'a mânca' (to eat)?",
          "options": [
            "mâncând",
            "mâncut",
            "mâncit",
            "mâncat"
          ],
          "answerIndex": 3,
          "explanation": "a mânca -> mâncat.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Ieri am lucrat toată ziua la b"
  },
  "ro-u7-l2": {
    "id": "ro-u7-l2",
    "unit": "ro-u7",
    "level": "A2",
    "objective": "Conjugate and deploy irregular and strong past participles in -ut (băut, văzut, vrut, știut, putut, avut, fost) and -s (mers, scris, zis, deschis, pus) in the Perfectul Compus.",
    "presentation": {
      "explanation": "Many high-frequency Romanian verbs (especially Group II in *-ea* and Group III in *-e*) form their past participles with irregular stems:\n\n1. The '-ut' Participle Group (Group II & III):\n   - **a bea** (to drink) -> **băut** (*am băut* - I drank)\n   - **a vedea** (to see) -> **văzut** (*am văzut* - I saw)\n   - **a vrea** (to want) -> **vrut** (*am vrut* - I wanted)\n   - **a ști** (to know) -> **știut** (*am știut* - I knew)\n   - **a putea** (can / to be able) -> **putut** (*am putut* - I could)\n   - **a avea** (to have) -> **avut** (*am avut* - I had)\n   - **a fi** (to be) -> **fost** (*am fost* - I was / I have been)\n\n2. The '-s' Participle Group (Group III - Latin sigmatic participles):\n   - **a merge** (to go/walk) -> **mers** (*am mers* - I went/walked)\n   - **a scrie** (to write) -> **scris** (*am scris* - I wrote)\n   - **a zice** (to say) -> **zis** (*am zis* - I said)\n   - **a deschide** (to open) -> **deschis** (*am deschis* - I opened)\n   - **a închide** (to close) -> **închis** (*am închis* - I closed)\n   - **a pune** (to put) -> **pus** (*am pus* - I put)",
      "examples": [
        {
          "target": "În weekend am fost la Brașov și am văzut Biserica Neagră.",
          "reading": "În weekend am fost la Brașov și am văzut Biserica Neagră.",
          "translation": "On the weekend I was in Brașov and saw the Black Church."
        },
        {
          "target": "Noi am mers pe jos până în Piața Sfatului.",
          "reading": "Noi am mers pe jos până în Piața Sfatului.",
          "translation": "We walked on foot all the way to Council Square."
        },
        {
          "target": "Am băut un vin fiert delicios cu scorțișoară.",
          "reading": "Am băut un vin fiert delicios cu scorțișoară.",
          "translation": "I drank a delicious mulled wine with cinnamon."
        }
      ],
      "mnemonics": [
        "A fi -> FOST (am fost = I was)!",
        "A merge -> MERS (am mers = I went)!",
        "A bea -> BĂUT (am băut = I drank)!"
      ],
      "culturalNotes": [
        "In Romanian, 'a merge pe jos' (literally 'to go on foot') is the standard way to express walking around town or hiking in the Carpathian mountains."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the past participle of 'a fi' (to be) in 'Eu am _______ la munte'?",
          "options": [
            "fost",
            "făcut",
            "fit",
            "fiut"
          ],
          "answerIndex": 0,
          "explanation": "A fi forms its participle as 'fost'."
        },
        {
          "prompt": "How do you say 'We went to the restaurant' using 'a merge'?",
          "options": [
            "Am mers la restaurant.",
            "Am mergut la restaurant.",
            "Am merg la restaurant.",
            "Am merge la restaurant."
          ],
          "answerIndex": 0,
          "explanation": "A merge -> mers (am mers)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Ce ai zis? Nu am auzit bine.'",
          "options": [
            "Where are you going? I cannot see.",
            "What did you write? I don't understand.",
            "What did you say? I didn't hear well.",
            "Did you close the door?"
          ],
          "answerIndex": 2,
          "explanation": "Ai zis = you said (a zice -> zis); nu am auzit = I didn't hear."
        },
        {
          "prompt": "Complete: 'Ieri noi _______ (bea) cafea și _______ (vedea) un film bun.'",
          "options": [
            "am beat / am vedet",
            "au băut / au văzut",
            "ai băut / ai văzut",
            "am băut / am văzut"
          ],
          "answerIndex": 3,
          "explanation": "Noi am băut (drank) and am văzut (saw)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the infinitives to their irregular participles: a scrie, a pune, a putea, a avea:",
          "options": [
            "All end in -at",
            "a scrie -> scris | a pune -> pus | a putea -> putut | a avea -> avut",
            "All end in -it",
            "a scrie -> scrit | a pune -> ponat | a putea -> potut | a avea -> avit"
          ],
          "answerIndex": 1,
          "explanation": "scris, pus, putut, avut.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Nu am putut să vin pentru că am avut mult de lucru.'",
          "options": [
            "I couldn't come because I had a lot of work.",
            "I will come to work tomorrow.",
            "I am working on a new project.",
            "I didn't want to come to work."
          ],
          "answerIndex": 0,
          "explanation": "nu am putut = I couldn't; am avut = I had.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the past participle of 'a deschide' (to open)?",
          "options": [
            "deschidat",
            "deschidit",
            "deschidut",
            "deschis"
          ],
          "answerIndex": 3,
          "explanation": "a deschide -> deschis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Ei _______ (fi) foarte fericiți când au primit vestea.'",
          "options": [
            "ați fost",
            "a fost",
            "au fost",
            "am fost"
          ],
          "answerIndex": 2,
          "explanation": "Ei au fost (they were).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: În weekend am fost la Brașov ș"
  },
  "ro-u7-l3": {
    "id": "ro-u7-l3",
    "unit": "ro-u7",
    "level": "A2",
    "objective": "Form the Perfectul Compus of reflexive verbs with contracted clitic pronouns (m-am, te-ai, s-a, ne-am, v-ați, s-au) and construct past negative sentences with 'nu' (nu am fost, nu s-a trezit).",
    "presentation": {
      "explanation": "When reflexive verbs (*a se trezi*, *a se plimba*, *a se întâlni*, *a se distra*) are conjugated in the past tense, the reflexive pronoun blends with the auxiliary verb via a hyphen:\n\n1. Reflexive Clitic Contractions in Perfectul Compus:\n   - **Eu**: *mă + am* -> **m-am** (*m-am trezit* - I woke up, *m-am plimbat* - I strolled)\n   - **Tu**: *te + ai* -> **te-ai** (*te-ai îmbrăcat* - you got dressed, *te-ai distrat* - you had fun)\n   - **El / Ea**: *se + a* -> **s-a** (*s-a trezit* - he/she woke up, *s-a simțit* - he/she felt)\n   - **Noi**: *ne + am* -> **ne-am** (*ne-am întâlnit* - we met up, *ne-am plimbat* - we walked)\n   - **Voi**: *vă + ați* -> **v-ați** (*v-ați distrat* - you all had fun, *v-ați cazat* - you all checked in)\n   - **Ei / Ele**: *se + au* -> **s-au** (*s-au simțit* - they felt, *s-au întors* - they returned)\n\n2. Negation in the Past Tense (Nu + Auxiliary + Participle):\n   - **Regular Verbs**: *'Nu am văzut castelul.'* (I didn't see the castle.) / *'Nu a plouat.'* (It didn't rain.)\n   - **Reflexive Verbs with Negation**: The negative particle 'nu' contracts with 3rd-person 's-':\n     - *'Nu m-am trezit târziu.'* (I didn't wake up late.)\n     - *'El nu s-a simțit bine.'* (He didn't feel well.)",
      "examples": [
        {
          "target": "Ne-am întâlnit cu prietenii în centru și ne-am plimbat prin parc.",
          "reading": "Ne-am întâlnit cu prietenii în centru și ne-am plimbat prin parc.",
          "translation": "We met up with friends downtown and strolled through the park."
        },
        {
          "target": "Te-ai distrat la festivalul medieval de la Sighișoara?",
          "reading": "Te-ai distrat la festivalul medieval de la Sighișoara?",
          "translation": "Did you have fun at the medieval festival in Sighișoara?"
        },
        {
          "target": "Ieri nu am mâncat la restaurant, am gătit acasă.",
          "reading": "Ieri nu am mâncat la restaurant, am gătit acasă.",
          "translation": "Yesterday I didn't eat at a restaurant, I cooked at home."
        }
      ],
      "mnemonics": [
        "Reflexive Past Formula: m-am, te-ai, s-a, ne-am, v-ați, s-au + participle!",
        "Nu + m-am = Nu m-am (negation precedes the hyphenated clitic)."
      ],
      "culturalNotes": [
        "'A se distra' (to have fun / enjoy oneself) is the essential verb for party and travel stories in Romania (*Ne-am distrat de minune!* - We had a wonderful time!)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'We had a lot of fun' in Romanian using 'a se distra'?",
          "options": [
            "Ne distrăm foarte mult.",
            "Am distrat foarte mult.",
            "S-au distrat foarte mult.",
            "Ne-am distrat foarte mult."
          ],
          "answerIndex": 3,
          "explanation": "Noi + a se distra in past = ne-am distrat."
        },
        {
          "prompt": "What is the contracted reflexive past form for 'El' (He) with 'a se trezi' (to wake up)?",
          "options": [
            "se a trezit",
            "m-am trezit",
            "te-ai trezit",
            "s-a trezit"
          ],
          "answerIndex": 3,
          "explanation": "se + a contracts to s-a -> s-a trezit."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Ieri dimineață m-am trezit devreme și m-am dus la gară.'",
          "options": [
            "Yesterday morning I woke up early and went to the train station.",
            "Tomorrow morning I will wake up early.",
            "I arrived at the station late.",
            "The train was delayed yesterday morning."
          ],
          "answerIndex": 0,
          "explanation": "m-am trezit = I woke up; m-am dus = I went."
        },
        {
          "prompt": "Choose the correct negative past form: 'Noi _______ (not go) la muzeu pentru că era închis.'",
          "options": [
            "nu am mers",
            "nu mergem",
            "am nu mers",
            "nu am mergem"
          ],
          "answerIndex": 0,
          "explanation": "nu + am + mers = nu am mers."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the reflexive past clitics: Eu, Tu, Ea, Noi, Voi, Ele:",
          "options": [
            "Eu: m-am | Tu: te-ai | Ea: s-a | Noi: ne-am | Voi: v-ați | Ele: s-au",
            "All use 'mă a'",
            "Eu: te-ai | Tu: m-am | Ea: ne-am | Noi: s-a | Voi: s-au | Ele: v-ați",
            "All use 'se am'"
          ],
          "answerIndex": 0,
          "explanation": "m-am, te-ai, s-a, ne-am, v-ați, s-au.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'V-ați cazat la hotelul din centru?'",
          "options": [
            "The hotel downtown is full.",
            "We checked out of the hotel.",
            "Are you looking for the downtown hotel?",
            "Did you all check in / stay at the hotel downtown?"
          ],
          "answerIndex": 3,
          "explanation": "V-ați cazat = you all checked in / lodged.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'S-au simțit foarte bine în vacanță' mean?",
          "options": [
            "They will go on vacation next week.",
            "They fell sick on vacation.",
            "They felt very good on vacation / had a great time on vacation.",
            "Vacation was too short."
          ],
          "answerIndex": 2,
          "explanation": "S-au simțit = they felt (a se simți).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Mihai _______ (not wake up) la timp și a pierdut trenul.'",
          "options": [
            "nu m-am trezit",
            "nu s-a trezit",
            "s-a nu trezit",
            "nu a trezit"
          ],
          "answerIndex": 1,
          "explanation": "Mihai (3rd person) -> nu s-a trezit.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Ne-am întâlnit cu prietenii în"
  },
  "ro-u7-l4": {
    "id": "ro-u7-l4",
    "unit": "ro-u7",
    "level": "A2",
    "objective": "Use Romanian past time expressions (ieri, alaltăieri, aseară, weekendul trecut, acum două zile) and chronological narrative connectors (mai întâi, apoi, după aceea, deodată, în cele din urmă) to structure fluid stories.",
    "presentation": {
      "explanation": "To recount vivid travel stories in Romanian, we connect past events with time markers and sequential transition bridges:\n\n1. Past Time Expressions:\n   - **Ieri** = Yesterday\n   - **Alaltăieri** = The day before yesterday\n   - **Aseară** = Last night / Yesterday evening\n   - **Weekendul trecut / În weekendul trecut** = Last weekend\n   - **Săptămâna trecută / Luna trecută / Anul trecut** = Last week / Last month / Last year\n   - **Acum două zile / Acum trei ore** = Two days ago / Three hours ago (*acum + duration* = ago!)\n   - **Zilele trecute** = The other day / A few days ago\n\n2. Chronological Narrative Connectors:\n   - **La început / Mai întâi** = In the beginning / First of all\n   - **Apoi / Pe urmă** = Then / Next\n   - **După aceea** = After that / Afterward\n   - **Deodată / Dintr-odată** = Suddenly / All of a sudden\n   - **În cele din urmă / La sfârșit** = Finally / In the end",
      "examples": [
        {
          "target": "Acum două zile am ajuns la Brașov cu trenul de dimineață.",
          "reading": "Acum două zile am ajuns la Brașov cu trenul de dimineață.",
          "translation": "Two days ago we arrived in Brașov on the morning train."
        },
        {
          "target": "Mai întâi am vizitat Biserica Neagră, apoi am urcat pe Tâmpa cu telecabina.",
          "reading": "Mai întâi am vizitat Biserica Neagră, apoi am urcat pe Tâmpa cu telecabina.",
          "translation": "First we visited the Black Church, then we went up Mount Tâmpa by cable car."
        },
        {
          "target": "Deodată a început să ningă și orașul a devenit magic.",
          "reading": "Deodată a început să ningă și orașul a devenit magic.",
          "translation": "Suddenly it began to snow and the city became magical."
        }
      ],
      "mnemonics": [
        "ACUM + DURATION = AGO (acum două zile = 2 days ago)!",
        "ASEARĂ = Last night (ieri seară)!",
        "Mai întâi -> Apoi -> După aceea -> Deodată -> În cele din urmă!"
      ],
      "culturalNotes": [
        "Mount Tâmpa (Muntele Tâmpa) towers 400 meters directly above Brașov's medieval historic center; taking the cable car (*telecabina*) to the summit offers iconic panoramic views of southern Transylvania."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'the day before yesterday' in Romanian?",
          "options": [
            "mâine",
            "alaltăieri",
            "aseară",
            "ieri"
          ],
          "answerIndex": 1,
          "explanation": "Alaltăieri = the day before yesterday."
        },
        {
          "prompt": "What does 'acum trei zile' mean in past narration?",
          "options": [
            "Three days ago",
            "Every three days",
            "Three days from now",
            "In three days"
          ],
          "answerIndex": 0,
          "explanation": "Acum + time phrase = ago (three days ago)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'După aceea am mers la o cafenea drăguță și am băut ciocolată caldă.'",
          "options": [
            "After that we went to a nice café and drank hot chocolate.",
            "We don't drink hot chocolate.",
            "We are going to buy chocolate at the store.",
            "The café was closed after noon."
          ],
          "answerIndex": 0,
          "explanation": "După aceea = after that; am mers = we went; am băut = we drank."
        },
        {
          "prompt": "Which connector means 'suddenly' in Romanian?",
          "options": [
            "deodată",
            "totdeauna",
            "la început",
            "ieri"
          ],
          "answerIndex": 0,
          "explanation": "Deodată / dintr-odată = suddenly."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Arrange the narrative connectors in chronological storytelling order from start to finish:",
          "options": [
            "Apoi -> Apoi -> Apoi -> Ieri",
            "În cele din urmă -> Mai întâi -> Apoi -> După aceea",
            "Mâine -> Ieri -> Azi -> Acum",
            "Mai întâi (first)"
          ],
          "answerIndex": 3,
          "explanation": "Mai întâi -> Apoi -> După aceea -> În cele din urmă.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Weekendul trecut am făcut o drumeție superbă în Munții Bucegi.'",
          "options": [
            "The Bucegi Mountains are closed in winter.",
            "Next weekend we will hike in the mountains.",
            "Last weekend we went on a superb hike in the Bucegi Mountains.",
            "We never hike on weekends."
          ],
          "answerIndex": 2,
          "explanation": "Weekendul trecut = last weekend; drumeție = hike.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'last week' in Romanian?",
          "options": [
            "luna trecută",
            "săptămâna trecută",
            "anul trecut",
            "săptămâna viitoare"
          ],
          "answerIndex": 1,
          "explanation": "Săptămâna trecută = last week.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the sequence: '_______ am căutat un loc de parcare, dar _______ am găsit chiar lângă centru.'",
          "options": [
            "La început / în cele din urmă",
            "Ieri / mâine",
            "Niciodată / mereu",
            "Apoi / după"
          ],
          "answerIndex": 0,
          "explanation": "La început (at first) and în cele din urmă (in the end).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Use Romanian past time expressions (ieri"
  },
  "ro-u7-l5": {
    "id": "ro-u7-l5",
    "unit": "ro-u7",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multi-turn dialogue recounting a picturesque weekend cultural trip to Brașov and Transylvania.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 7, we integrate regular and irregular Perfectul Compus verbs, reflexive past forms, time expressions, and cultural storytelling in an authentic Transylvanian travel narrative:\n\n1. The Setting:\n   - **Andrei** and **Elena** meet at a coffee shop in Bucharest on Monday morning. Andrei asks Elena about her weekend getaway to Brașov.\n\n2. Authentic Cultural Dialogue:\n   - **Andrei**: Bună, Elena! Cum a fost weekendul tău la Brașov? V-ați distrat? (*Hi Elena! How was your weekend in Brașov? Did you all have fun?*)\n   - **Elena**: Bună, Andrei! A fost absolut minunat! Am plecat sâmbătă dimineață cu trenul din Gara de Nord și în două ore și jumătate am ajuns la Brașov. Drumul prin Valea Prahovei a fost spectaculos! (*Hi Andrei! It was absolutely wonderful! We left Saturday morning by train from Gara de Nord and arrived in Brașov in two and a half hours. The route through the Prahova Valley was spectacular!*)\n   - **Andrei**: Ce frumos! Și ce ați vizitat mai întâi? (*How nice! And what did you visit first?*)\n   - **Elena**: Mai întâi ne-am plimbat prin Piața Sfatului și am vizitat Biserica Neagră. Este impresionantă! Apoi am urcat pe Muntele Tâmpa cu telecabina și am văzut toată panorama orașului. A fost o vreme superbă, cu mult soare! (*First we walked through Council Square and visited the Black Church. It's impressive! Then we went up Mount Tâmpa by cable car and saw the whole city panorama. The weather was superb, with lots of sunshine!*)\n   - **Andrei**: Ați mâncat mâncare tradițională românească? (*Did you eat traditional Romanian food?*)\n   - **Elena**: Bineînțeles! Seara am mers la un restaurant tradițional de pe Strada Republicii. Am mâncat mici delicioși cu muștar și cartofi prăjiți, iar la desert am comandat papanași calzi cu smântână și dulceață de afine. A fost o excursie de neuitat! (*Of course! In the evening we went to a traditional restaurant on Republicii Street. We ate delicious mici with mustard and fries, and for dessert we ordered warm papanași with sour cream and blueberry jam. It was an unforgettable trip!*)",
      "examples": [
        {
          "target": "Cum a fost weekendul tău la Brașov? V-ați distrat?",
          "reading": "Cum a fost weekendul tău la Brașov? V-ați distrat?",
          "translation": "How was your weekend in Brașov? Did you all have fun?"
        },
        {
          "target": "Ne-am plimbat prin Piața Sfatului și am vizitat Biserica Neagră.",
          "reading": "Ne-am plimbat prin Piața Sfatului și am vizitat Biserica Neagră.",
          "translation": "We walked through Council Square and visited the Black Church."
        },
        {
          "target": "Am mâncat mici delicioși și am comandat papanași cu dulceață de afine.",
          "reading": "Am mâncat mici delicioși și am comandat papanași cu dulceață de afine.",
          "translation": "We ate delicious mici and ordered papanași with blueberry jam."
        }
      ],
      "mnemonics": [
        "BISERICA NEAGRĂ = The iconic 600-year-old Gothic Black Church in Brașov.",
        "PIAȚA SFATULUI = Council Square, Brașov's picturesque historic central square.",
        "DULCEAȚĂ DE AFINE = Wild mountain blueberry / bilberry jam for papanași."
      ],
      "culturalNotes": [
        "Brașov, nestled at the foot of the Southern Carpathians in Transylvania, is Romania's most beloved historic mountain city, famous for preserved medieval towers, Saxon fortifications, and mountain excursions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What famous Gothic monument did Elena visit in Council Square (Piața Sfatului)?",
          "options": [
            "Biserica Neagră (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "The Palace of Parliament (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Bran Castle (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Constanța Casino (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 0,
          "explanation": "Biserica Neagră is Brașov's landmark Gothic church."
        },
        {
          "prompt": "What dessert did Elena order at the restaurant on Republicii Street?",
          "options": [
            "Papanași calzi cu smântână și dulceață de afine (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Ice cream (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Apple pie (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Baklava (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 0,
          "explanation": "Papanași with sour cream and blueberry jam is the signature Romanian dessert."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How did Elena and her companions travel from Bucharest to Brașov?",
          "options": [
            "By bicycle (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "By train from Gara de Nord through the Prahova Valley (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "By boat (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "By plane (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 1,
          "explanation": "'Am plecat sâmbătă dimineață cu trenul din Gara de Nord.'"
        },
        {
          "prompt": "Translate: 'A fost o excursie de neuitat!'",
          "options": [
            "We will never travel to Brașov. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "It was an unforgettable trip! (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "The train was delayed. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "The trip was very boring. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 1,
          "explanation": "O excursie de neuitat = an unforgettable trip."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Mai întâi ne-am plimbat prin Piața Sfatului, apoi am urcat pe Tâmpa cu telecabina și seara am mâncat papanași.'",
          "options": [
            "We didn't like Council Square or Mount Tâmpa. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Tomorrow we will travel to Brașov to visit the museum and eat dinner. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "First we walked through Council Square, then we went up Mount Tâmpa by cable car, and in the evening we ate papanași. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "The cable car was closed because of bad weather. (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 2,
          "explanation": "Past narration integrating reflexive verbs, regular/irregular participles, and Brașov cultural itinerary.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Gara de Nord' in Bucharest?",
          "options": [
            "A subway line (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Bucharest's main and largest railway station connecting Romania's capital to Transylvania and Europe (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "An international airport (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "A bus terminal (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 1,
          "explanation": "Gara de Nord is Bucharest's central railway terminus.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical and communicative competencies were mastered across Unit 7 in Romanian?",
          "options": [
            "Perfectul Compus auxiliary conjugation (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Vocative case declension only (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Pluperfect subjunctive only (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)",
            "Romanian alphabet phonetics only (Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multiturn dialogue recounting a picturesque weekend cultural trip to Braov and Transylvania)"
          ],
          "answerIndex": 0,
          "explanation": "Unit 7 complete A2 Perfectul Compus narration, irregulars, reflexive clitics, and Transylvanian travel storytelling mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How did Elena describe the weather during her weekend in Brașov?",
          "options": [
            "A plouat toată ziua (it rained all day)",
            "A fost foarte frig și ceață (very cold and foggy)",
            "A nins puternic (it snowed heavily)",
            "A fost o vreme superbă, cu mult soare (superb weather with lots of sunshine)"
          ],
          "answerIndex": 3,
          "explanation": "Elena reported superb sunny weather in Brașov.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: Cum a fost weekendul tău la Br"
  },
  "ro-u8-l1": {
    "id": "ro-u8-l1",
    "unit": "ro-u8",
    "level": "A2",
    "objective": "Identify essential Romanian clothing, footwear, and accessory terms (cămașă, tricou, pantaloni, blugi, rochie, fustă, geacă, palton, adidași, geantă) and apply 4-way gender and number adjective agreement.",
    "presentation": {
      "explanation": "Welcome to A2 Romanian Unit 8: Shopping & Money (La cumpărături și banii)! To shop for apparel in Romania, you need core garment nouns and accurate 4-form adjective agreement:\n\n1. Essential Clothing & Footwear (Hainele și încălțămintea):\n   - **cămașa** (shirt / button-down)\n   - **tricoul** (T-shirt)\n   - **pantalonii** (pants / trousers — pl.)\n   - **blugii** (jeans — pl.)\n   - **rochia** (dress)\n   - **fusta** (skirt)\n   - **geaca / jacheta** (jacket / windbreaker)\n   - **paltonul / pardesiul** (winter overcoat / trench)\n   - **puloverul** (sweater / jumper)\n   - **pantofii** (shoes — pl.)\n   - **adidașii** (sneakers / trainers — genericized from Adidas in Romania!)\n   - **geanta** (handbag / purse)\n   - **ochelarii (de soare)** (sunglasses — pl.)\n   - **ia românească / cămașa cu altiță** (traditional Romanian hand-embroidered blouse!)\n\n2. 4-Way Color Adjective Agreement:\n   - Adjectives in Romanian agree in gender (masc/fem/neuter) and number (sg/pl):\n     - Black: **negru** (m.sg) / **neagră** (f.sg) / **negri** (m.pl) / **negre** (f/n.pl) -> *pantalon negru*, *cămașă neagră*, *pantofi negri*, *rochii negre*\n     - White: **alb** / **albă** / **albi** / **albe**\n     - Red: **roșu** / **roșie** / **roșii** (m.pl) / **roșii** (f.pl)\n     - Blue: **albastru** / **albastră** / **albaștri** / **albastre**\n     - Green: **verde** (sg) / **verzi** (pl) (2 forms only!).",
      "examples": [
        {
          "target": "Caut o cămașă albă de bumbac și o pereche de blugi negri.",
          "reading": "Caut o cămașă albă de bumbac și o pereche de blugi negri.",
          "translation": "I'm looking for a white cotton shirt and a pair of black jeans."
        },
        {
          "target": "Această geacă din piele neagră este foarte elegantă.",
          "reading": "Această geacă din piele neagră este foarte elegantă.",
          "translation": "This black leather jacket is very elegant."
        },
        {
          "target": "Aveți acești pantofi din piele pe mărimea 42?",
          "reading": "Aveți acești pantofi din piele pe mărimea 42?",
          "translation": "Do you have these leather shoes in size 42?"
        }
      ],
      "mnemonics": [
        "ADIDAȘI = Sneakers / trainers (universal Romanian word derived from the brand Adidas)!",
        "IE ROMÂNEASCĂ = Traditional embroidered Romanian blouse (UNESCO heritage)!",
        "Color follows the noun: cămașă albă (NOT albă cămașă)!"
      ],
      "culturalNotes": [
        "The traditional Romanian embroidered blouse ('ia' or 'cămașa cu altiță') is so culturally significant that June 24th is celebrated as International Day of the Romanian Ie (Ziua Universală a Iei)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the common Romanian colloquial term for athletic sneakers?",
          "options": [
            "pantaloni",
            "paltoane",
            "rochii",
            "adidași"
          ],
          "answerIndex": 3,
          "explanation": "Adidași is the standard Romanian term for sneakers."
        },
        {
          "prompt": "How do you say 'black shoes' (masculine plural) in Romanian?",
          "options": [
            "pantofi neagră",
            "pantofi negre",
            "pantofi negru",
            "pantofi negri"
          ],
          "answerIndex": 3,
          "explanation": "Pantofi (m.pl.) + negri (m.pl.)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Mi-am cumpărat o ie tradițională și o geantă din piele maro.'",
          "options": [
            "I sold my traditional blouse.",
            "I am looking for a red coat.",
            "The boutique has no handbags.",
            "I bought myself a traditional embroidered blouse and a brown leather handbag."
          ],
          "answerIndex": 3,
          "explanation": "ie tradițională = traditional blouse; geantă din piele maro = brown leather bag."
        },
        {
          "prompt": "What is the feminine singular form of 'albastru' (blue)?",
          "options": [
            "albastre",
            "albaștri",
            "albastruă",
            "albastră"
          ],
          "answerIndex": 3,
          "explanation": "Albastru (masc.) -> albastră (fem. sg.)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the clothing items: cămașă, fustă, palton, adidași:",
          "options": [
            "cămașă: shoes | fustă: socks | palton: hat | adidași: bag",
            "cămașă: shirt | fustă: skirt | palton: winter overcoat | adidași: sneakers",
            "All mean fabrics",
            "All mean coats"
          ],
          "answerIndex": 1,
          "explanation": "Core Romanian wardrobe terms.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Unde sunt ochelarii de soare și puloverul verde?'",
          "options": [
            "Where are the sunglasses and the green sweater?",
            "I lost my coat and boots.",
            "The sunglasses are broken.",
            "How much is the green sweater?"
          ],
          "answerIndex": 0,
          "explanation": "ochelarii de soare = sunglasses; puloverul verde = green sweater.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'ia' (ia românească)?",
          "options": [
            "A pair of leather boots",
            "A winter scarf",
            "A coin purse",
            "The iconic traditional Romanian handcrafted blouse adorned with geometric and floral cross-stitch embroidery"
          ],
          "answerIndex": 3,
          "explanation": "Ia is Romania's celebrated national cultural garment.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Ea poartă o _______ (dress) roșie și niște _______ (shoes) negri.'",
          "options": [
            "cămașă / fuste",
            "geantă / adidași",
            "rochie / pantofi",
            "palton / ochelari"
          ],
          "answerIndex": 2,
          "explanation": "o rochie (fem. sg. with roșie) and pantofi (masc. pl. with negri).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: Identify essential Romanian clothing"
  },
  "ro-u8-l2": {
    "id": "ro-u8-l2",
    "unit": "ro-u8",
    "level": "A2",
    "objective": "Ask for prices using 'Cât costă?' and 'Cât este?', navigate Romanian currency (leu / lei, bani, mărunt), ask for sizes (mărimea, numărul), and request to try on clothes in the fitting room (cabina de probă).",
    "presentation": {
      "explanation": "In Romania, retail transactions use straightforward pricing phrases and national currency terms:\n\n1. Inquiring About Prices:\n   - **Cât costă acesta / aceasta?** = How much does this cost?\n   - **Cât este tricoul?** = How much is the T-shirt?\n   - **Cât costă în total?** = How much is it in total?\n   - **Este la reducere? / Aveți vreo reducere?** = Is it on sale / on discount? Do you have any discount?\n   - **Redus cu 20%** = Discounted by 20%.\n\n2. Romanian Currency (Moneda Românească):\n   - **leu** (sg) / **lei** (pl) / **RON** (e.g. *o sută de lei* = 100 lei; *cincizeci de lei* = 50 lei)\n   - **bani** (subdivisions: 1 leu = 100 bani; also means 'money' in general: *'N-am bani'* = I have no money)\n   - **mărunt / rest** = small change / change (*'Aveți mărunt?'* = Do you have small change? / *'Păstrați restul'* = Keep the change).\n\n3. Sizing & Trying Clothes On:\n   - Clothing size = **mărimea** (*Ce mărime purtați? / Mărimea S / M / L / Aveți o mărime mai mare / mai mică?*)\n   - Shoe size = **numărul** (*Ce număr purtați la pantofi? / Port 41* — I wear size 41)\n   - **Pot să probez?** = May I try it on? (*a proba* = to try on)\n   - **Cabina de probă** = Fitting room (*'Cabinele de probă sunt în spate'*).\n\n4. Fit Expressions:\n   - **Îmi vine bine** = It fits me well!\n   - **Îmi vine mare / larg** = It fits big / loose.\n   - **Îmi vine mic / strâmt** = It fits small / tight.\n   - **Îl iau / O iau!** = I'll take it!",
      "examples": [
        {
          "target": "Cât costă acest palton? Pot să îl probez în cabina de probă?",
          "reading": "Cât costă acest palton? Pot să îl probez în cabina de probă?",
          "translation": "How much does this coat cost? May I try it on in the fitting room?"
        },
        {
          "target": "Această cămașă îmi vine perfect. O iau!",
          "reading": "Această cămașă îmi vine perfect. O iau!",
          "translation": "This shirt fits me perfectly. I'll take it!"
        },
        {
          "target": "Plătesc cu cardul contactless sau cash?",
          "reading": "Plătesc cu cardul contactless sau cash?",
          "translation": "Do I pay with contactless card or cash?"
        }
      ],
      "mnemonics": [
        "LEU (1 leu) -> LEI (2+ lei)!",
        "CABINA DE PROBĂ = The fitting / trying-on cubicle!",
        "ÎMI VINE BINE = It fits me well; ÎL IAU / O IAU = I'll take it!"
      ],
      "culturalNotes": [
        "Romanian leu banknotes are made of durable polymer plastic (polimer), featuring famous historical figures, artists (like George Enescu and Mihai Eminescu), and cultural landmarks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you ask 'Where is the fitting room?' in Romanian?",
          "options": [
            "Unde este cabina de probă?",
            "Unde este hotelul?",
            "Unde este gara?",
            "Unde este bucătăria?"
          ],
          "answerIndex": 0,
          "explanation": "Cabina de probă = fitting/dressing cubicle."
        },
        {
          "prompt": "What does 'Îmi vine strâmt' mean when trying on a jacket?",
          "options": [
            "It fits me too tight / constricted.",
            "It fits me very loose.",
            "It looks very pretty.",
            "It is too cheap."
          ],
          "answerIndex": 0,
          "explanation": "strâmt = tight."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Ce număr purtați la pantofi? — Port numărul 42.'",
          "options": [
            "How many shoes do you have? — I have 42 shoes.",
            "What shoe size do you wear? — I wear size 42.",
            "Are the shoes on sale? — Yes, by 42%.",
            "I want to return size 42 shoes."
          ],
          "answerIndex": 1,
          "explanation": "numărul la pantofi = shoe size."
        },
        {
          "prompt": "What is the official currency of Romania?",
          "options": [
            "Euro",
            "Dolarul",
            "Leul românesc",
            "Lira"
          ],
          "answerIndex": 2,
          "explanation": "Romania's national currency is the leu (plural: lei)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the transaction terms: mărime, număr, cabină de probă, reducere:",
          "options": [
            "mărime: clothing size | număr: shoe size | cabină de probă: fitting room | reducere: discount",
            "All mean shoes",
            "All mean days of the week",
            "mărime: price | număr: color | cabină de probă: kitchen | reducere: expensive"
          ],
          "answerIndex": 0,
          "explanation": "Core retail fitting and pricing terms.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Costă o sută optzeci de lei în total și aveți o reducere de zece la sută.'",
          "options": [
            "You must pay with 180 coins.",
            "It costs 18 lei with no discount.",
            "The store has no clothes on sale.",
            "It costs 180 lei in total and you have a ten percent discount."
          ],
          "answerIndex": 3,
          "explanation": "o sută optzeci de lei = 180 lei; reducere de 10% = 10% discount.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What phrase indicates that you want to buy the dress ('o rochie' - feminine)?",
          "options": [
            "Nu vreau.",
            "Unde este ieșirea?",
            "O iau!",
            "Îl iau!"
          ],
          "answerIndex": 2,
          "explanation": "Rochie is feminine -> 'O iau!' (I'll take it).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Păstrați _______ (the change), vă rog!'",
          "options": [
            "cămașa",
            "restul",
            "cabina",
            "paltonul"
          ],
          "answerIndex": 1,
          "explanation": "Păstrați restul = Keep the change.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Ask for prices using 'Cât costă?' and 'Cât este?'"
  },
  "ro-u8-l3": {
    "id": "ro-u8-l3",
    "unit": "ro-u8",
    "level": "A2",
    "objective": "Distinguish and apply Romanian demonstrative adjectives (acest/această/acești/aceste & acel/acea/acei/acele) before nouns and demonstrative pronouns (acesta/aceasta & acela/aceea) when standing alone.",
    "presentation": {
      "explanation": "In Romanian, demonstratives have two distinct forms depending on whether they modify a noun (Adjectives) or replace a noun (Pronouns):\n\n1. Demonstrative Adjectives (Placed BEFORE the indefinite noun):\n   - **Near (This / These)**:\n     - Masc. sg: **acest** (*acest tricou* - this T-shirt)\n     - Fem. sg: **această** (*această rochie* - this dress)\n     - Masc. pl: **acești** (*acești pantofi* - these shoes)\n     - Fem/Neut. pl: **aceste** (*aceste haine* - these clothes)\n   - **Far (That / Those)**:\n     - Masc. sg: **acel** (*acel palton* - that coat)\n     - Fem. sg: **acea** (*acea geacă* - that jacket)\n     - Masc. pl: **acei** (*acei blugi* - those jeans)\n     - Fem/Neut. pl: **acele** (*acele magazine* - those shops)\n\n2. Demonstrative Pronouns (Stand ALONE without a noun):\n   - **Near (This one / These ones)**:\n     - Masc. sg: **acesta** (*Îl vreau pe acesta* - I want this one)\n     - Fem. sg: **aceasta** (*Aceasta este mai ieftină* - This one is cheaper)\n     - Masc. pl: **aceștia** (*Aceștia sunt frumoși*)\n     - Fem/Neut. pl: **acestea** (*Acestea sunt reduse*)\n   - **Far (That one / Those ones)**:\n     - Masc. sg: **acela** (*Îmi place acela* - I like that one)\n     - Fem. sg: **aceea** (*Aceea este scumpă*)\n     - Masc. pl: **aceia** (*Aceia de acolo*)\n     - Fem/Neut. pl: **acelea** (*Acelea din vitrină*)",
      "examples": [
        {
          "target": "Îmi place această cămașă albastră, dar aceea din vitrină este mai elegantă.",
          "reading": "Îmi place această cămașă albastră, dar aceea din vitrină este mai elegantă.",
          "translation": "I like this blue shirt, but that one in the shop window is more elegant."
        },
        {
          "target": "Cât costă acești pantofi din piele? — Aceștia costă două sute de lei.",
          "reading": "Cât costă acești pantofi din piele? — Aceștia costă două sute de lei.",
          "translation": "How much do these leather shoes cost? — These ones cost 200 lei."
        },
        {
          "target": "Acel magazin de pe colț are haine tradiționale superbe.",
          "reading": "Acel magazin de pe colț are haine tradiționale superbe.",
          "translation": "That shop on the corner has superb traditional clothing."
        }
      ],
      "mnemonics": [
        "BEFORE NOUN: acest tricou / această rochie (shorter form)!",
        "STANDS ALONE: acesta / aceasta / acela / aceea (longer pronoun with -a)!"
      ],
      "culturalNotes": [
        "In colloquial spoken Romanian, demonstrative pronouns are often shortened in casual speech to 'ăsta' (this one masc.), 'asta' (this one fem.), 'ăla' (that one masc.), and 'aia' (that one fem.)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which demonstrative adjective modifies a feminine singular noun before it (e.g. rochie - dress)?",
          "options": [
            "acest",
            "acești",
            "acestea",
            "această"
          ],
          "answerIndex": 3,
          "explanation": "Această is the feminine singular demonstrative adjective."
        },
        {
          "prompt": "When pointing to a single dress far away without repeating the word 'rochie', which pronoun do you use?",
          "options": [
            "acea",
            "acela",
            "acel",
            "aceea"
          ],
          "answerIndex": 3,
          "explanation": "Aceea is the feminine singular distant demonstrative pronoun."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Vreau să probez această jachetă și acei pantaloni negri.'",
          "options": [
            "I want to try on this jacket and those black pants.",
            "I want to sell my jacket and pants.",
            "Those jackets are too expensive.",
            "Where are the fitting rooms?"
          ],
          "answerIndex": 0,
          "explanation": "această jachetă = this jacket; acei pantaloni = those pants."
        },
        {
          "prompt": "What is the masculine plural demonstrative adjective for 'pantofi' (shoes)?",
          "options": [
            "acești",
            "acest",
            "această",
            "aceștia"
          ],
          "answerIndex": 0,
          "explanation": "Acești modifies masculine plural nouns."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the demonstrative adjectives: acest, această, acești, acele:",
          "options": [
            "All mean 'yesterday'",
            "All mean 'good'",
            "acest: fem | această: masc",
            "acest: masc. sg. | această: fem. sg. | acești: masc. pl. | acele: fem/neut. pl."
          ],
          "answerIndex": 3,
          "explanation": "Demonstrative adjective gender/number paradigm.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Acesta este puloverul meu preferat, dar acela este mai călduros.'",
          "options": [
            "All sweaters are cold.",
            "The sweater is made of silk.",
            "This one is my favorite sweater, but that one is warmer.",
            "I want to buy two sweaters."
          ],
          "answerIndex": 2,
          "explanation": "Acesta (this one) vs. acela (that one).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'acesta tricou' ungrammatical before a noun in standard Romanian?",
          "options": [
            "It is acceptable in poetry only.",
            "Because 'acesta' is a pronoun meant to stand alone; the pre-nominal adjective 'acest tricou' must be used instead.",
            "Because tricou is feminine.",
            "Because acesta is plural."
          ],
          "answerIndex": 1,
          "explanation": "Adjective 'acest' precedes the noun; pronoun 'acesta' stands alone.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: '_______ (these) haine din vitrină sunt la reducere.'",
          "options": [
            "Aceste",
            "Acest",
            "Acesta",
            "Această"
          ],
          "answerIndex": 0,
          "explanation": "Haine (fem. pl.) -> Aceste haine.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: Îmi place această cămașă albas"
  },
  "ro-u8-l4": {
    "id": "ro-u8-l4",
    "unit": "ro-u8",
    "level": "A2",
    "objective": "Form comparisons of superiority (mai ... decât), inferiority (mai puțin ... decât), equality (la fel de ... ca), superlatives (cel mai ...), and apply colloquial price idioms (un chilipir, scump foc, la preț de nimic).",
    "presentation": {
      "explanation": "In Romanian, forming comparisons of quality and price uses simple particle-based formulas along with rich colloquial expressions:\n\n1. Comparative Structures in Romanian:\n   - **Superiority**: **MAI + Adjective + DECÂT** (more ... than / -er than):\n     - *Această geacă este **mai călduroasă decât** aceea.* (This jacket is warmer than that one.)\n     - *Hainele de bumbac sunt **mai ieftine decât** cele din mătase.* (Cotton clothes are cheaper than silk ones.)\n   - **Inferiority**: **MAI PUȚIN + Adjective + DECÂT** (less ... than):\n     - *Pantofii sunt **mai puțin comozi decât** adidașii.* (The shoes are less comfortable than the sneakers.)\n   - **Equality**: **LA FEL DE + Adjective + CA (ȘI)** (as ... as):\n     - *Această rochie este **la fel de frumoasă ca** cealaltă.* (This dress is as pretty as the other.)\n\n2. The Relative Superlative (The most ...):\n   - Formula: **CEL / CEA / CEI / CELE + MAI + Adjective**:\n     - *cel mai bun* (the best masc. sg.) / *cea mai bună* (the best fem. sg.)\n     - *cel mai ieftin* (the cheapest)\n     - *cea mai elegantă cămașă* (the most elegant shirt)\n     - *cei mai frumoși pantofi* (the prettiest shoes)\n\n3. Colloquial Romanian Value & Price Idioms:\n   - **Un chilipir!** = A real bargain / a steal!\n   - **Scump foc! / Costă o avere!** = Blazing expensive / Costs a fortune!\n   - **La preț de nimic! / Pe degeaba!** = Dirt cheap / Given away for nothing!\n   - **De calitate superioară / De nota zece** = Top quality / 10 out of 10!",
      "examples": [
        {
          "target": "Pe Calea Victoriei magazinele sunt mai scumpe decât la mall.",
          "reading": "Pe Calea Victoriei magazinele sunt mai scumpe decât la mall.",
          "translation": "On Calea Victoriei the shops are more expensive than at the mall."
        },
        {
          "target": "La cincizeci de lei, această ie tradițională este un chilipir total!",
          "reading": "La cincizeci de lei, această ie tradițională este un chilipir total!",
          "translation": "At 50 lei, this traditional blouse is a total bargain!"
        },
        {
          "target": "Paltonul din lână este cel mai călduros din tot magazinul.",
          "reading": "Paltonul din lână este cel mai călduros din tot magazinul.",
          "translation": "The wool coat is the warmest in the whole shop."
        }
      ],
      "mnemonics": [
        "MAI ... DECÂT = More ... than!",
        "UN CHILIPIR = A bargain / steal!",
        "SCUMP FOC = Super expensive (literally 'fire expensive')!"
      ],
      "culturalNotes": [
        "Calea Victoriei is Bucharest's historic royal avenue, renowned for luxury boutiques, belle époque palaces, and fashionable open-air weekend promenades."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'This shirt is cheaper than that one' in Romanian?",
          "options": [
            "Această cămașă este cel mai ieftin.",
            "Această cămașă este mai ieftină decât aceea.",
            "Această cămașă este mai puțin scumpă ca.",
            "Această cămașă este ieftină ca aceea."
          ],
          "answerIndex": 1,
          "explanation": "mai ieftină decât = cheaper than."
        },
        {
          "prompt": "What does 'un chilipir' mean in Romanian shopping slang?",
          "options": [
            "A fantastic bargain / a steal",
            "A very expensive luxury watch",
            "A torn piece of fabric",
            "A fake knock-off item"
          ],
          "answerIndex": 0,
          "explanation": "'Un chilipir' = a great bargain."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Acel restaurant din Centrul Vechi este scump foc!'",
          "options": [
            "That restaurant in the Old Town is blazing expensive (extremely pricey)",
            "The restaurant serves spicy food.",
            "That restaurant caught on fire.",
            "The restaurant in the Old Town is very cheap."
          ],
          "answerIndex": 0,
          "explanation": "scump foc = super expensive."
        },
        {
          "prompt": "What is the feminine singular superlative of 'bun' (good)?",
          "options": [
            "cea mai bună",
            "cei mai buni",
            "cel mai bun",
            "cele mai bune"
          ],
          "answerIndex": 0,
          "explanation": "Cea mai bună is feminine singular superlative."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the comparative expressions: mai ieftin decât, la fel de comod ca, cel mai mare, chilipir:",
          "options": [
            "All mean broken",
            "All mean expensive",
            "mai ieftin decât: cheaper than | la fel de comod ca: as comfortable as | cel mai mare: the biggest | chilipir: bargain",
            "All mean free"
          ],
          "answerIndex": 2,
          "explanation": "Comparative and colloquial value idioms.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Adidașii sunt la fel de comozi ca papucii de casă.'",
          "options": [
            "The sneakers are less comfortable than boots.",
            "The sneakers are as comfortable as house slippers.",
            "The sneakers are too small.",
            "I want to buy slippers."
          ],
          "answerIndex": 1,
          "explanation": "la fel de comozi ca = as comfortable as.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'la preț de nimic' mean?",
          "options": [
            "Dirt cheap / for almost nothing",
            "Free with warranty",
            "Extremely expensive",
            "Sold out"
          ],
          "answerIndex": 0,
          "explanation": "'La preț de nimic' = for pennies / next to nothing.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Această rochie de seară este _______ (the most elegant) din colecție.'",
          "options": [
            "mai elegantă ca",
            "cel mai elegant",
            "cele mai elegante",
            "cea mai elegantă"
          ],
          "answerIndex": 3,
          "explanation": "Rochie (fem. sg.) -> cea mai elegantă.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Form comparisons of superiority (mai"
  },
  "ro-u8-l5": {
    "id": "ro-u8-l5",
    "unit": "ro-u8",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multi-turn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 8, we synthesize apparel vocabulary, demonstratives (acest/această/aceea), sizing, fit verbs (îmi vine bine), comparatives, and card checkout transactions in an authentic Bucharest boutique dialogue:\n\n1. The Setting:\n   - **Andrei** visits an artisanal fashion boutique on Calea Victoriei near the Romanian Athenaeum in central Bucharest. **Doamna Popescu** (boutique owner / vânzătoare) assists him.\n\n2. Authentic Cultural Dialogue:\n   - **Doamna Popescu**: Bună ziua! Cu ce vă pot ajuta astăzi? Căutați ceva anume? (*Good day! How can I help you today? Are you looking for something specific?*)\n   - **Andrei**: Bună ziua! Da, caut o ie tradițională cusută manual pentru mama mea și o geacă de piele pentru mine. (*Good day! Yes, I'm looking for a hand-embroidered traditional blouse for my mother and a leather jacket for myself.*)\n   - **Doamna Popescu**: Ați nimerit perfect! Avem această ie brodată din bumbac fin de la Breaza și acea geacă din piele naturală neagră din vitrină. Geaca este redusă cu douăzeci la sută. (*You came to the right place! We have this finely embroidered cotton blouse from Breaza and that genuine black leather jacket in the window. The jacket is discounted by twenty percent.*)\n   - **Andrei**: Geaca neagră arată mult mai bine decât cea maro. Aveți mărimea L? Pot să o probez? (*The black jacket looks much better than the brown one. Do you have size L? May I try it on?*)\n   - **Doamna Popescu**: Desigur! Iată mărimea L. Cabina de probă este chiar acolo în stânga, lângă oglindă. (*Certainly! Here is size L. The fitting room is right there on the left, next to the mirror.*)\n   - *(Andrei probează geaca și iese din cabină / Andrei tries on the jacket and steps out)*\n   - **Andrei**: Îmi vine turnată! Este foarte comodă și călduroasă. Cât costă în total cu ia tradițională? (*It fits me like a glove! It's very comfortable and warm. How much does it cost in total with the traditional blouse?*)\n   - **Doamna Popescu**: Geaca redusă costă trei sute cincizeci de lei, iar ia tradițională este două sute cincizeci de lei. În total face șase sute de lei. (*The discounted jacket is 350 lei, and the traditional blouse is 250 lei. Total comes to 600 lei.*)\n   - **Andrei**: Este un preț excelent pentru lucru manual. Le iau pe amândouă! Pot să plătesc cu cardul contactless? (*That is an excellent price for handmade work. I'll take them both! May I pay with contactless card?*)\n   - **Doamna Popescu**: Sigur că da, acceptăm orice card sau plata cu telefonul. Apropiați cardul de POS... Gata, plata a fost aprobată! Vă pun și bonul fiscal în pungă. (*Certainly, we accept any card or phone payment. Bring your card near the POS... Done, payment approved! I'll put the fiscal receipt in the bag.*)\n   - **Andrei**: Vă mulțumesc frumos pentru ajutor! O zi minunată! (*Thank you very much for your help! Have a wonderful day!*)\n   - **Doamna Popescu**: Cu multă plăcere! Să le purtați sănătos! La revedere! (*With great pleasure! Wear them in good health! Goodbye!*)",
      "examples": [
        {
          "target": "Geaca din piele îmi vine turnată și arată mai bine decât cea maro.",
          "reading": "Geaca din piele îmi vine turnată și arată mai bine decât cea maro.",
          "translation": "The leather jacket fits me like a glove and looks better than the brown one."
        },
        {
          "target": "În total face șase sute de lei. Plătesc cu cardul contactless.",
          "reading": "În total face șase sute de lei. Plătesc cu cardul contactless.",
          "translation": "In total it comes to 600 lei. I'm paying with contactless card."
        },
        {
          "target": "Să le purtați sănătos! — Vă mulțumesc frumos pentru ajutor!",
          "reading": "Să le purtați sănătos! — Vă mulțumesc frumos pentru ajutor!",
          "translation": "Wear them in good health! — Thank you very much for your help!"
        }
      ],
      "mnemonics": [
        "ÎMI VINE TURNATĂ = Fits like a glove / fits flawlessly!",
        "SĂ LE PURTAȚI SĂNĂTOS! = Traditional Romanian blessing when someone buys new clothes ('Wear them in good health!')",
        "BONUL FISCAL = Official fiscal receipt."
      ],
      "culturalNotes": [
        "'Să-l porți sănătos!' (for a masculine item) or 'Să le purtați sănătoși/sănătos!' is a heartwarming Romanian cultural blessing spoken by shopkeepers and friends whenever someone acquires a new garment."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What traditional cultural blessing did Doamna Popescu say to Andrei after the purchase?",
          "options": [
            "Să le purtați sănătos! (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Drum bun! (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Poftă bună! (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Noapte bună! (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 0,
          "explanation": "'Să le purtați sănătos!' is the standard Romanian blessing for new clothes."
        },
        {
          "prompt": "What does 'Îmi vine turnată' mean in Romanian when trying on the jacket?",
          "options": [
            "It fits me like a glove / fits me impeccably! (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "It is soaking wet. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "It is too big. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "It is torn. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 0,
          "explanation": "'A veni turnat/turnată' = to fit like a glove."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What was the total amount Andrei paid for both the jacket (350 lei) and the blouse (250 lei)?",
          "options": [
            "400 lei (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "600 lei (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "500 lei (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "1,000 lei (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 1,
          "explanation": "350 + 250 = 600 lei."
        },
        {
          "prompt": "Translate: 'Apropiați cardul de POS pentru plata contactless.'",
          "options": [
            "Your card is expired. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Bring your card near the POS terminal for contactless payment. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "The POS machine is out of paper. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Insert cash into the machine. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 1,
          "explanation": "Apropiați cardul de POS = Tap your card on the POS reader."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Geaca de piele a fost redusă cu douăzeci la sută, mi-a venit turnată și am plătit șase sute de lei cu cardul pe Calea Victoriei.'",
          "options": [
            "Tomorrow I will buy boots and a hat for 50 lei. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "The leather jacket was discounted by twenty percent, fitted me like a glove, and I paid 600 lei by card on Calea Victoriei. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "The jacket was too small and the boutique on Calea Victoriei was closed. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Cash was required for all purchases. (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 1,
          "explanation": "Synthesis of leather garments, discounts, fit idioms (venit turnată), and card checkout.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Calea Victoriei' in Bucharest celebrated for?",
          "options": [
            "Bucharest's most historic grand boulevard, famed for high-end fashion boutiques, palaces, museums, and weekend pedestrian promenades (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "A subway line (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "A soccer stadium (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "A modern airport terminal (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 0,
          "explanation": "Calea Victoriei is Bucharest's premier historical avenue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical, lexical, and commercial competencies were mastered across Unit 8 in Romanian?",
          "options": [
            "Future conditional mood only (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Dative clitic inversion in poetry only (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Cyrillic historical Romanian orthography only (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Apparel & accessories with 4-way color agreement, Romanian currency (leu/lei/bani)"
          ],
          "answerIndex": 3,
          "explanation": "Unit 8 comprehensive Romanian retail, sizing, demonstratives, comparatives, and commercial mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Where was the hand-embroidered blouse ('ia') originally crafted?",
          "options": [
            "London (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Berlin (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Breaza (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)",
            "Rome (Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multiturn dialogue purchasing clothing and artisan crafts on Calea Victoriei in Bucharest with card payment)"
          ],
          "answerIndex": 2,
          "explanation": "Doamna Popescu noted: 'de la Breaza' (famed town for traditional Romanian needlework).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Geaca din piele îmi vine turna"
  },
  "ro-u9-l1": {
    "id": "ro-u9-l1",
    "unit": "ro-u9",
    "level": "A2",
    "objective": "Identify essential Romanian public transit modes, railway infrastructure, and ticketing terms (metroul, autobuzul, tramvaiul, trenul, taxiul, gara / Gara de Nord, stația, peronul, biletul, cardul contactless, a schimba linia) and apply 'cu + transport' vs. 'pe jos'.",
    "presentation": {
      "explanation": "Welcome to A2 Romanian Unit 9: Directions & Transportation (Direcții și Transport)! Navigating Romanian cities like Bucharest, Cluj-Napoca, and Brașov requires core transit vocabulary:\n\n1. Modes of Transportation (Mijloace de transport):\n   - **metroul** = subway / underground (Bucharest's Metrorex system has 5 lines: M1, M2, M3, M4, M5)\n   - **autobuzul** = city bus (*stația de autobuz = bus stop*)\n   - **tramvaiul** = streetcar / tram (*linia 41, linia 1*)\n   - **trenul** = train (*CFR Călători = Romanian National Railways*)\n   - **taxiul / mașina de ride-sharing** (Bolt, Uber) = taxi / rideshare\n   - **bicicleta** = bicycle\n   - **mașina** = car\n   - *Preposition Syntax*: Romanian uses **cu** for all vehicular modes (*cu metroul, cu autobuzul, cu trenul, cu taxiul, cu mașina*), but **pe jos** for walking on foot.\n\n2. Station Infrastructure & Ticketing:\n   - **gara** = train station (*Gara de Nord din București = Bucharest North Central Station*)\n   - **stația** = bus/tram/metro stop (*stația de metrou Piața Unirii*)\n   - **peronul / linia** = train platform / track (*peronul 1, linia 3*)\n   - **biletul de călătorie** = single trip ticket (*o călătorie = 1 ride; două călătorii = 2 rides*)\n   - **cardul de transport / cardul bancar contactless** = smart card / contactless bank card directly at turnstiles\n   - **turnichetul** = turnstile barrier (*atingeți cardul la turnichet*)\n   - **a schimba linia / magistrala** = to change/transfer subway lines.",
      "examples": [
        {
          "target": "Unde este cea mai apropiată stație de metrou pentru a merge la Palatul Parlamentului?",
          "reading": "Unde este cea mai apropiată stație de metrou pentru a merge la Palatul Parlamentului?",
          "translation": "Where is the nearest subway station to go to the Palace of the Parliament?"
        },
        {
          "target": "Mergem cu metroul pentru că traficul din București este foarte aglomerat.",
          "reading": "Mergem cu metroul pentru că traficul din București este foarte aglomerat.",
          "translation": "We go by subway because Bucharest traffic is very congested."
        },
        {
          "target": "Trebuie să schimbați linia la stația Piața Victoriei pentru a lua Magistrala 2.",
          "reading": "Trebuie să schimbați linia la stația Piața Victoriei pentru a lua Magistrala 2.",
          "translation": "You need to change lines at Piața Victoriei station to take Line 2."
        }
      ],
      "mnemonics": [
        "CU for vehicles (cu metroul, cu autobuzul); PE JOS for walking on foot!",
        "GARA DE NORD = Bucharest's historic central railway station!",
        "A SCHIMBA LINIA = Transferring transit lines!"
      ],
      "culturalNotes": [
        "Bucharest's Metrorex subway, opened in 1979, allows passengers to pay directly at turnstiles using contactless bank cards, Apple Pay, or Google Pay with zero paper tickets required."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I go by bus' in Romanian?",
          "options": [
            "Merg în autobuz.",
            "Merg pe autobuz.",
            "Merg la autobuzul.",
            "Merg cu autobuzul."
          ],
          "answerIndex": 3,
          "explanation": "Preposition 'cu' indicates the mode of transport: cu autobuzul."
        },
        {
          "prompt": "Which phrase expresses walking on foot in Romanian?",
          "options": [
            "cu picioare",
            "în jos",
            "la pas",
            "pe jos"
          ],
          "answerIndex": 3,
          "explanation": "'Pe jos' is the fixed idiom for walking / on foot."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Apropiați cardul bancar contactless de turnichet pentru a deschide poarta.'",
          "options": [
            "Buy a new ticket from the driver.",
            "The turnstile is locked for all passengers.",
            "Show your identity card at the turnstile.",
            "Hold your contactless bank card near the turnstile to open the gate."
          ],
          "answerIndex": 3,
          "explanation": "card bancar contactless = contactless bank card; turnichet = turnstile."
        },
        {
          "prompt": "What does 'a schimba linia de metrou' mean?",
          "options": [
            "To buy a metro ticket",
            "To exit the station",
            "To miss the train",
            "To transfer / change subway lines"
          ],
          "answerIndex": 3,
          "explanation": "A schimba linia = to transfer/change transit lines."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Romanian transit terms: metroul, stația de autobuz, peronul, a schimba linia:",
          "options": [
            "metroul: subway | stația de autobuz: bus stop | peronul: train platform | a schimba linia: to transfer lines",
            "All mean bicycles",
            "All mean streetlights",
            "metroul: car | stația: airport | peronul: ticket"
          ],
          "answerIndex": 0,
          "explanation": "Romanian public transit vocabulary matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Trenul InterRegio spre Brașov pleacă de la peronul 1, linia 2.'",
          "options": [
            "The bus to Brașov is delayed by two hours.",
            "Platform 1 is closed for all trains to Brașov.",
            "Brașov has only two train tracks.",
            "The InterRegio train to Brașov departs from platform 1, track 2."
          ],
          "answerIndex": 3,
          "explanation": "pleacă de la peronul 1 = departs from platform 1; linia 2 = track 2.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do Romanians say 'cu trenul' but 'pe jos'?",
          "options": [
            "Because trains are masculine.",
            "Because feet are feminine.",
            "Romanian uses 'cu'",
            "It is a regional dialect rule."
          ],
          "answerIndex": 2,
          "explanation": "Prepositional syntax: cu + vehicle vs. pe jos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Așteptați trenul în spatele liniei galbene de pe _______ (platform).'",
          "options": [
            "stradă",
            "peron",
            "pod",
            "șosea"
          ],
          "answerIndex": 1,
          "explanation": "de pe peron = from/on the platform.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 1: Identify essential Romanian public transit modes"
  },
  "ro-u9-l2": {
    "id": "ro-u9-l2",
    "unit": "ro-u9",
    "level": "A2",
    "objective": "Master Romanian prepositions of place and distinguish Genitive case prepositions (în fața, în spatele) from Accusative case prepositions (lângă, între, aproape de, departe de).",
    "presentation": {
      "explanation": "Describing locations and landmarks in Romanian requires understanding **Case Governance of Prepositions**:\n\n1. Spatial Prepositions Governing the **GENITIVE CASE (Genitiv)**:\n   - **în fața (+ Genitiv)** = in front of (*în fața muzeului* [masc genitive: -lui], *în fața bisericii* [fem genitive: -ei/-ii])\n   - **în spatele (+ Genitiv)** = behind (*în spatele gării, în spatele hotelului*)\n   - **în jurul (+ Genitiv)** = around (*în jurul parcului*)\n   - **de-a lungul (+ Genitiv)** = along (*de-a lungul bulevardului*).\n\n2. Spatial Prepositions Governing the **ACCUSATIVE CASE (Acuzativ)**:\n   - **lângă (+ Acuzativ)** = next to / beside (*lângă bancă, lângă teatru*)\n   - **între (+ Acuzativ)** = between (*între farmacie și restaurant*)\n   - **aproape de (+ Acuzativ)** = near / close to (*aproape de centru*)\n   - **departe de (+ Acuzativ)** = far from (*departe de gară*)\n   - **la colțul (+ Genitiv)** = at the corner of (*la colțul străzii*)\n   - **pe / sub / peste** = on / under / over (*pe masă, sub pod, peste drum*).",
      "examples": [
        {
          "target": "Palatul Parlamentului se află în fața Pieței Constituției.",
          "reading": "Palatul Parlamentului se află în fața Pieței Constituției.",
          "translation": "The Palace of the Parliament is located in front of Constitution Square."
        },
        {
          "target": "Farmacia este lângă bancă și aproape de stația de metrou.",
          "reading": "Farmacia este lângă bancă și aproape de stația de metrou.",
          "translation": "The pharmacy is next to the bank and near the subway station."
        },
        {
          "target": "Stația de taxi se află între hotel și gară.",
          "reading": "Stația de taxi se află între hotel și gară.",
          "translation": "The taxi stand is situated between the hotel and the railway station."
        }
      ],
      "mnemonics": [
        "ÎN FAȚA + GENITIVE (-lui / -ei) = In front of!",
        "ÎN SPATELE + GENITIVE = Behind!",
        "LÂNGĂ + ACCUSATIVE = Next to / Beside!"
      ],
      "culturalNotes": [
        "Piața Constituției in Bucharest sits directly in front of the monumental Palace of the Parliament (the second-largest administrative building in the world after the Pentagon), frequently hosting major international music concerts and national celebrations."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which case does 'în fața' (in front of) govern in Romanian?",
          "options": [
            "The Genitive case",
            "The Vocative case",
            "The Accusative case",
            "The Nominative case"
          ],
          "answerIndex": 0,
          "explanation": "Compound prepositions ending in -a (în fața, în spatele) govern the Genitive case."
        },
        {
          "prompt": "How do you say 'next to the bank' (banca - fem) in Romanian?",
          "options": [
            "lângă bancă",
            "în fața băncii",
            "departe de bancă",
            "în spatele băncii"
          ],
          "answerIndex": 0,
          "explanation": "Lângă governs the simple Accusative case: lângă bancă."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Cafeneaua se află în spatele teatrului și aproape de parc.'",
          "options": [
            "The café is inside the park.",
            "The café is located behind the theater and near the park.",
            "The theater is far from the park.",
            "Where is the theater café?"
          ],
          "answerIndex": 1,
          "explanation": "în spatele teatrului = behind the theater (genitive); aproape de parc = near the park (accusative)."
        },
        {
          "prompt": "What does 'la colțul străzii' mean?",
          "options": [
            "In the middle of the street",
            "At the dead end",
            "At the corner of the street",
            "Under the bridge"
          ],
          "answerIndex": 2,
          "explanation": "La colțul străzii = at the corner of the street."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Romanian spatial prepositions: în fața, lângă, între, departe de:",
          "options": [
            "All mean yesterday",
            "All mean inside",
            "în fața: far | lângă: under | între: behind",
            "în fața: in front of"
          ],
          "answerIndex": 3,
          "explanation": "Spatial prepositions and case governance matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Există un bancomat aproape de aici? — Da, este peste drum, lângă farmacie.'",
          "options": [
            "The pharmacy has no ATMs.",
            "The bank is far from the road.",
            "Is there an ATM near here? — Yes, it is across the road, next to the pharmacy.",
            "The ATM next to the pharmacy is broken."
          ],
          "answerIndex": 2,
          "explanation": "bancomat = ATM; aproape de aici = near here; peste drum = across the street/road.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'în fața muzeu' grammatically incorrect?",
          "options": [
            "Because în fața takes accusative.",
            "Because 'în fața' mandates the Genitive case with definite article",
            "It is a spelling typo.",
            "Because muzeu is feminine."
          ],
          "answerIndex": 1,
          "explanation": "Genitive governance: în fața muzeului.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Librăria este situată _______ (between) cafenea și bancă.'",
          "options": [
            "între",
            "sub",
            "peste",
            "lângă"
          ],
          "answerIndex": 0,
          "explanation": "între (between A and B).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 2: Palatul Parlamentului se află"
  },
  "ro-u9-l3": {
    "id": "ro-u9-l3",
    "unit": "ro-u9",
    "level": "A2",
    "objective": "Give and follow walking and driving directions in Romanian using directional imperatives and spatial expressions (mergeți drept înainte, virați la dreapta/stânga, traversați strada, luați prima stradă, coborâți la).",
    "presentation": {
      "explanation": "Giving directions in Romanian uses polite 2nd-person plural (*dumneavoastră / voi*) or informal (*tu*) imperative forms:\n\n1. Directional Action Verbs (A da indicații):\n   - **Mergeți drept înainte / Mergeți tot înainte!** = Go straight ahead!\n   - **Virați / Faceți / Luați-o la dreapta!** = Turn right!\n   - **Virați / Faceți / Luați-o la stânga!** = Turn left!\n   - **Traversați strada / bulevardul!** = Cross the street / avenue!\n   - **Luați prima / a doua stradă la dreapta!** = Take the 1st/2nd street on the right!\n   - **Treceți pe lângă biserică!** = Walk past the church!\n   - **Urmați această stradă până la...** = Follow this street until...\n\n2. Key Navigation Landmarks:\n   - **semaforul** = traffic light (*la semafor = at the traffic light*)\n   - **intersecția** = intersection / crossroads (*la intersecție*)\n   - **trecerea de pietoni / zebra** = pedestrian crosswalk (*pe trecerea de pietoni*)\n   - **sensul giratoriu** = roundabout / traffic circle (*în sensul giratoriu*).\n\n3. Transit Actions:\n   - **urcați în autobuz / metrou** = get on / board the bus / subway\n   - **coborâți la stația...** = get off at ... station (*coborâți la a treia stație*)\n   - **schimbați la...** = transfer at...",
      "examples": [
        {
          "target": "Mergeți tot înainte pe Calea Victoriei și virați la dreapta la semafor.",
          "reading": "Mergeți tot înainte pe Calea Victoriei și virați la dreapta la semafor.",
          "translation": "Go straight ahead along Calea Victoriei and turn right at the traffic light."
        },
        {
          "target": "Traversați bulevardul pe trecerea de pietoni și luați a doua stradă la stânga.",
          "reading": "Traversați bulevardul pe trecerea de pietoni și luați a doua stradă la stânga.",
          "translation": "Cross the avenue at the pedestrian crossing and take the second street on the left."
        },
        {
          "target": "Coborâți la a patra stație, chiar în fața teatrului național.",
          "reading": "Coborâți la a patra stație, chiar în fața teatrului național.",
          "translation": "Get off at the fourth stop, right in front of the national theater."
        }
      ],
      "mnemonics": [
        "DREPT ÎNAINTE / TOT ÎNAINTE = Straight ahead!",
        "LA DREAPTA (Right) / LA STÂNGA (Left)!",
        "SEMAFORUL = Traffic light; INTERSECȚIA = Crossroads!"
      ],
      "culturalNotes": [
        "In Romanian towns and cities, people will often give directions using 'pe partea dreaptă' (on the right-hand side) or 'pe partea stângă' (on the left-hand side) to point out visible landmarks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you politely tell someone 'Go straight ahead and turn right at the traffic light' in Romanian?",
          "options": [
            "Virați la stânga și opriți-vă.",
            "Traversați râul imediat.",
            "Mergeți tot înainte și virați la dreapta la semafor.",
            "Mergeți înapoi la gară."
          ],
          "answerIndex": 2,
          "explanation": "Mergeți tot înainte (straight) + virați la dreapta (turn right) + la semafor (at traffic light)."
        },
        {
          "prompt": "What does 'traversați strada' mean?",
          "options": [
            "Clean the street",
            "Drive on the street",
            "Block the street",
            "Cross the street"
          ],
          "answerIndex": 3,
          "explanation": "Traversați strada = cross the street."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Luați a doua stradă la stânga și veți vedea muzeul pe partea dreaptă.'",
          "options": [
            "Take the second street on the left and you will see the museum on the right-hand side.",
            "Take the first street on the right to the museum.",
            "Do not turn on the second street.",
            "The museum is closed on the left."
          ],
          "answerIndex": 0,
          "explanation": "a doua stradă la stânga = 2nd street left; pe partea dreaptă = on right side."
        },
        {
          "prompt": "What verb means 'to get off / alight' from a bus or train in Romanian?",
          "options": [
            "a coborî",
            "a urca",
            "a merge",
            "a cumpăra"
          ],
          "answerIndex": 0,
          "explanation": "A coborî = to get off / descend."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Romanian direction commands: mergeți drept înainte, virați la stânga, traversați strada, coborâți din autobuz:",
          "options": [
            "All are food verbs",
            "All mean stop",
            "mergeți drept înainte: go straight | virați la stânga: turn left | traversați strada: cross street | coborâți din autobuz: get off bus",
            "All mean turn right"
          ],
          "answerIndex": 2,
          "explanation": "Directional imperatives matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'La sensul giratoriu, luați a treia ieșire spre Centrul Vechi.'",
          "options": [
            "The Old Town has no roundabouts.",
            "At the roundabout, take the third exit towards the Old Town.",
            "The roundabout is closed for three hours.",
            "Turn around three times at the roundabout."
          ],
          "answerIndex": 1,
          "explanation": "la sensul giratoriu = at roundabout; luați a treia ieșire = take 3rd exit.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you ask 'How do I get to...?' in Romanian?",
          "options": [
            "Cum se ajunge la...?",
            "Cine sunteți dumneavoastră?",
            "Cât este ceasul?",
            "Cât costă?"
          ],
          "answerIndex": 0,
          "explanation": "'Cum se ajunge la...?' = How do you get to...?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Virați la _______ (right) la următoarea intersecție.'",
          "options": [
            "înainte",
            "jos",
            "stânga",
            "dreapta"
          ],
          "answerIndex": 3,
          "explanation": "la dreapta = to the right.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 3: Mergeți tot înainte pe Calea V"
  },
  "ro-u9-l4": {
    "id": "ro-u9-l4",
    "unit": "ro-u9",
    "level": "A2",
    "objective": "Apply dynamic directional prepositions of traversal and destination (prin, pe, peste, spre / către, până la) in Romanian travel and navigation contexts.",
    "presentation": {
      "explanation": "Describing motion along routes and toward destinations in Romanian utilizes dynamic prepositional phrases:\n\n1. Prepositions of Traversal & Motion:\n   - **prin (+ Acuzativ)** = through (*prin parc, prin pasajul pietonal, prin tunel*)\n   - **pe (+ Acuzativ)** = along / on (*pe bulevard, pe trotuar, pe pod*)\n   - **peste (+ Acuzativ)** = over / across (*peste pod, peste stradă, peste râu*)\n   - **spre / către (+ Acuzativ)** = towards / in the direction of (*spre centru, către gară, spre aeroport*)\n   - **până la (+ Acuzativ)** = up to / as far as / until (*până la Palatul Parlamentului, până la capătul străzii*)\n   - **dinspre (+ Acuzativ)** = coming from the direction of (*dinspre Piața Victoriei*).\n\n2. The Spatial Contrast:\n   - *Mergem **prin** parc* (We walk **through** the park — path).\n   - *Mergem **spre** parc* (We walk **towards** the park — direction).\n   - *Mergem **până la** parc* (We walk **all the way up to** the park — terminus).",
      "examples": [
        {
          "target": "Mergeți prin Parcul Cișmigiu și continuați spre Bulevardul Elisabeta.",
          "reading": "Mergeți prin Parcul Cișmigiu și continuați spre Bulevardul Elisabeta.",
          "translation": "Walk through Cișmigiu Park and continue towards Elisabeta Boulevard."
        },
        {
          "target": "Treceți peste Podul Izvor și mergeți până la intrarea în Parlament.",
          "reading": "Treceți peste Podul Izvor și mergeți până la intrarea în Parlament.",
          "translation": "Cross over Izvor Bridge and walk up to the entrance of the Parliament."
        },
        {
          "target": "Cum ajungem de la Gara de Nord până în Centrul Vechi?",
          "reading": "Cum ajungem de la Gara de Nord până în Centrul Vechi?",
          "translation": "How do we get from Gara de Nord all the way to the Old Town?"
        }
      ],
      "mnemonics": [
        "PRIN = Through (inside space: prin parc)!",
        "PESTE = Over / Across (peste pod)!",
        "SPRE / CĂTRE = Towards destination!",
        "PÂNĂ LA = As far as / all the way to!"
      ],
      "culturalNotes": [
        "Parcul Cișmigiu, inaugurated in 1854, is Bucharest's oldest public central garden, featuring romantic weeping willows, rowboats on the central lake, and historic kiosks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which preposition expresses motion through an enclosed park: 'Mergem _______ parc'?",
          "options": [
            "peste",
            "prin",
            "la",
            "spre"
          ],
          "answerIndex": 1,
          "explanation": "'Prin' expresses motion through space: prin parc."
        },
        {
          "prompt": "Which preposition expresses moving 'towards' a landmark?",
          "options": [
            "spre",
            "sub",
            "fără",
            "din"
          ],
          "answerIndex": 0,
          "explanation": "'Spre' or 'către' means towards / heading in the direction of."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Mergeți pe trotuar până la capătul străzii și treceți peste pod.'",
          "options": [
            "Walk on the sidewalk up to the end of the street and cross over the bridge.",
            "Do not walk to the end of the street.",
            "Cross the bridge before reaching the sidewalk.",
            "The bridge has no sidewalk."
          ],
          "answerIndex": 0,
          "explanation": "pe trotuar = on sidewalk; până la capătul străzii = up to end of street; peste pod = over bridge."
        },
        {
          "prompt": "What does 'până la gară' mean?",
          "options": [
            "All the way up to / as far as the train station",
            "Far from the train station",
            "Inside the train station",
            "Behind the train station"
          ],
          "answerIndex": 0,
          "explanation": "'Până la' expresses the terminus / limit: all the way up to."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the dynamic prepositions: prin, peste, spre, până la:",
          "options": [
            "All mean under",
            "prin: through | peste: over/across | spre: towards | până la: up to / as far as",
            "All are food terms",
            "All mean behind"
          ],
          "answerIndex": 1,
          "explanation": "Dynamic preposition matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Autobuzul merge spre aeroport și trece prin Piața Victoriei.'",
          "options": [
            "The bus goes towards the airport and passes through Piața Victoriei.",
            "The airport is inside Piața Victoriei.",
            "The bus stopped before Piața Victoriei.",
            "Piața Victoriei has no buses to the airport."
          ],
          "answerIndex": 0,
          "explanation": "spre aeroport = towards airport; trece prin = passes through.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the difference between 'spre Centrul Vechi' and 'în Centrul Vechi'?",
          "options": [
            "The second is plural.",
            "There is no difference.",
            "The first is past tense.",
            "'Spre Centrul Vechi' indicates direction of motion towards the Old Town; 'În Centrul Vechi' indicates being located inside the Old Town."
          ],
          "answerIndex": 3,
          "explanation": "Spre (direction towards) vs. În (location inside).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Mergem pe jos _______ (as far as) la muzeu.'",
          "options": [
            "spre",
            "prin",
            "până",
            "peste"
          ],
          "answerIndex": 2,
          "explanation": "până la muzeu = as far as the museum.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 4: Mergeți prin Parcul Cișmigiu ș"
  },
  "ro-u9-l5": {
    "id": "ro-u9-l5",
    "unit": "ro-u9",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multi-turn dialogue navigating the Bucharest Metro (Metrorex) from Gara de Nord to Piața Unirii, tapping contactless cards at the turnstiles, and walking to the Palace of the Parliament and Centrul Vechi.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 9, we synthesize Romanian transit (Metrorex, Gara de Nord, turnichet, card contactless), prepositions of place with Genitive/Accusative cases, directional imperatives, and urban orientation in Bucharest:\n\n1. The Setting:\n   - **Andrei** (traveler) arrives at historic **Gara de Nord** in Bucharest. He wants to visit the colossal **Palatul Parlamentului** (Palace of the Parliament) and stroll through **Centrul Vechi** (the historic Lipscani Old Town). He asks a Metrorex employee (**Domnul Radu**) and a local pedestrian (**Elena**) at Piața Unirii for directions.\n\n2. Authentic Cultural Dialogue:\n   - **Andrei**: Bună ziua! Vă rog, îmi puteți spune cum ajung de la Gara de Nord la Palatul Parlamentului? (*Good day! Please, could you tell me how I get from Gara de Nord to the Palace of the Parliament?*)\n   - **Domnul Radu (Angajat Metrorex)**: Bună ziua! Este foarte simplu cu metroul. Coborâți aici la stația Gara de Nord 1 și luați Magistrala 1 (M1) în direcția Dristor 2. Mergeți direct șase stații și coborâți la **Piața Unirii 1**. Nu trebuie să schimbați trenul. (*Good day! It's very simple by subway. Go down here to Gara de Nord 1 station and take Line 1 (M1) heading towards Dristor 2. Ride directly 6 stops and get off at Piața Unirii 1. You don't need to change trains.*)\n   - **Andrei**: Excelent! Pot plăti direct cu cardul bancar la turnichet? (*Excellent! Can I pay directly with my bank card at the turnstile?*)\n   - **Domnul Radu**: Da, desigur! Apropiați cardul contactless de turnichet și se debitează automat trei lei. Călătorie plăcută! (*Yes, of course! Tap your contactless card on the turnstile and 3 lei is debited automatically. Have a pleasant trip!*)\n   - *(Andrei ia metroul M1 și iese la suprafață în Piața Unirii)*\n   - **Andrei (în Piața Unirii, vorbind cu Elena)**: Scuzați-mă, bună ziua! Încotro este Palatul Parlamentului și cum ajung în Centrul Vechi? (*Excuse me, good day! Which way is the Palace of the Parliament and how do I get to the Old Town?*)\n   - **Elena**: Bună! Uitați: Palatul Parlamentului se vede chiar acolo, este acea clădire uriașă de la capătul Bulevardului Unirii. Mergeți drept înainte de-a lungul fântânilor arteziene până în Piața Constituției. Palatul este chiar în fața dumneavoastră! (*Hello! Look: The Palace of the Parliament is visible right over there, it's that huge building at the end of Unirii Boulevard. Walk straight ahead along the artesian fountains up to Constitution Square. The palace is right in front of you!*)\n   - **Andrei**: Și Centrul Vechi? (*And the Old Town?*)\n   - **Elena**: Pentru Centrul Vechi, vă întoarceți puțin, traversați râul Dâmbovița peste pod și intrați pe strada Lipscani. Veți găsi o mulțime de terase și restaurante tradiționale. Nu aveți cum să ratați! (*For the Old Town, turn back slightly, cross the Dâmbovița River over the bridge, and enter Lipscani Street. You will find lots of terraces and traditional restaurants. You can't miss it!*)\n   - **Andrei**: Vă mulțumesc din suflet pentru ajutor! O zi minunată! (*Thank you from the bottom of my heart for the help! Have a wonderful day!*)\n   - **Elena**: Cu multă plăcere! Vizită plăcută în București! (*With great pleasure! Enjoy your visit in Bucharest!*)",
      "examples": [
        {
          "target": "Luați metroul M1 de la Gara de Nord și coborâți la stația Piața Unirii 1.",
          "reading": "Luați metroul M1 de la Gara de Nord și coborâți la stația Piața Unirii 1.",
          "translation": "Take metro M1 from Gara de Nord and get off at Piața Unirii 1 station."
        },
        {
          "target": "Mergeți de-a lungul fântânilor până în Piața Constituției, în fața Palatului Parlamentului.",
          "reading": "Mergeți de-a lungul fântânilor până în Piața Constituției, în fața Palatului Parlamentului.",
          "translation": "Walk along the fountains up to Constitution Square, in front of the Palace of the Parliament."
        },
        {
          "target": "Traversați râul Dâmbovița peste pod pentru a intra pe strada Lipscani în Centrul Vechi.",
          "reading": "Traversați râul Dâmbovița peste pod pentru a intra pe strada Lipscani în Centrul Vechi.",
          "translation": "Cross the Dâmbovița River over the bridge to enter Lipscani Street in the Old Town."
        }
      ],
      "mnemonics": [
        "PALATUL PARLAMENTULUI = The colossal neoclassical landmark on Piața Constituției!",
        "CENTRUL VECHI / LIPSCANI = Bucharest's historic pedestrian quarter filled with lively cafes!",
        "NU AVEȚI CUM SĂ RATAȚI = You can't miss it!"
      ],
      "culturalNotes": [
        "Bucharest's Bulevardul Unirii features a 1.4-kilometer synchronized water fountain complex with over 44 artesian fountains, celebrating Romanian history and music with illuminated evening shows."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Metrorex line did Domnul Radu instruct Andrei to take from Gara de Nord to Piața Unirii?",
          "options": [
            "Magistrala 1 (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Magistrala 2 (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Magistrala 4 (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Magistrala 5 (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 0,
          "explanation": "Magistrala 1 runs directly between Gara de Nord and Piața Unirii."
        },
        {
          "prompt": "What river runs through central Bucharest that Elena told Andrei to cross over to reach Lipscani?",
          "options": [
            "Râul Dâmbovița (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Dunărea (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Oltul (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Mureșul (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 0,
          "explanation": "The Dâmbovița River flows directly through the heart of Bucharest."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the Romanian idiom meaning 'You can't miss it!'?",
          "options": [
            "Nu știu nimic. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Nu aveți cum să ratați! (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Totul este interzis. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Este pierdut. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 1,
          "explanation": "'Nu aveți cum să ratați' is the Romanian idiom for 'you can't miss it'."
        },
        {
          "prompt": "Translate: 'Apropiați cardul contactless de turnichet și se debitează trei lei.'",
          "options": [
            "The turnstile costs thirty lei. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Tap your contactless card on the turnstile and 3 lei is debited. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Show your card to the guard. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Buy three tickets for the turnstile. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 1,
          "explanation": "apropiați cardul = tap card; turnichet = turnstile; se debitează = is debited."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Am luat metroul de la Gara de Nord, am coborât la Piața Unirii, am mers pe jos de-a lungul fântânilor și am ajuns la Palatul Parlamentului.'",
          "options": [
            "I took the subway from Gara de Nord, got off at Piața Unirii, walked on foot along the fountains, and arrived at the Palace of the Parliament. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Tomorrow I will take a taxi from Bucharest to Brașov for 100 lei. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "The Palace of the Parliament was closed and there were no subways running. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "I lost my card inside Cișmigiu Park. (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 0,
          "explanation": "Synthesis of metro transit (am luat metroul), alighting (am coborât), walking (am mers pe jos), along fountains (de-a lungul fântânilor), and destination.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Centrul Vechi' (Lipscani) in Bucharest famous for?",
          "options": [
            "A mountain ski resort (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "An international airport (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "A modern industrial harbor (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "The historic pedestrian nightlife and dining quarter of Bucharest, featuring 19th-century architecture, cobbled streets, and vibrant terraces (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 3,
          "explanation": "Centrul Vechi (Lipscani) is Bucharest's historic cultural and dining heart.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical, lexical, and navigational competencies were mastered across Unit 9 in Romanian?",
          "options": [
            "Past conditional complex mood only (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Church Slavonic historical orthography only (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Public transit infrastructure & ticketing (metrou, autobuz, peron, card contactless)",
            "Alphabet phonetics only (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 2,
          "explanation": "Unit 9 comprehensive Romanian transit, case governance, directional imperatives, motion prepositions, and metropolitan navigation mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What grand public square sits directly in front of the Palace of the Parliament in Bucharest?",
          "options": [
            "Piața Victoriei (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Piața Constituției (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Piața Romană (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)",
            "Piața Universității (Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multiturn dialogue navigating the Bucharest Metro Metrorex from Gara de Nord to Piaa Unirii)"
          ],
          "answerIndex": 1,
          "explanation": "Piața Constituției directly fronts the Palace of the Parliament.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 5: Luați metroul M1 de la Gara de"
  },
  "ro-u10-l1": {
    "id": "ro-u10-l1",
    "unit": "ro-u10",
    "level": "A2",
    "objective": "Identify and describe rooms of the Romanian home and core furniture items with their proper grammatical genders (apartamentul, sufrageria, bucătăria, dormitorul, baia, holul, balconul, canapeaua, masa, patul, dulapul / șifonierul, frigiderul).",
    "presentation": {
      "explanation": "In this lesson, we explore **The Romanian Home & Furniture (Casa și mobila)**:\n\n1. Rooms of the House (Camerele casei):\n   - **apartamentul / casa**: the apartment / the house\n   - **sufrageria / camera de zi**: the living room (feminine: *sufrageria*)\n   - **bucătăria**: the kitchen (feminine: *bucătăria*)\n   - **dormitorul**: the bedroom (neuter: *un dormitor / două dormitoare*)\n   - **baia**: the bathroom (feminine: *baia*)\n   - **holul**: the hallway / entrance hall (neuter: *holul*)\n   - **balconul**: the balcony (neuter: *balconul*)\n   - **grădina**: the garden (feminine: *grădina*)\n\n2. Key Furniture Items (Mobila):\n   - **canapeaua**: the sofa / couch (feminine!)\n   - **masa**: the table (feminine!)\n   - **scaunul**: the chair (neuter: *un scaun / două scaune*)\n   - **patul**: the bed (neuter: *un pat / două paturi*)\n   - **dulapul / șifonierul**: the wardrobe / closet (neuter!)\n   - **frigiderul**: the refrigerator (neuter!)\n   - **aragazul**: the kitchen stove / cooker (neuter!)\n   - **mașina de spălat**: the washing machine (feminine!)",
      "examples": [
        {
          "target": "Apartamentul meu are două camere, o bucătărie spațioasă și un balcon însorit.",
          "reading": "ah-pahr-tah-MEN-tool MEH-oo AH-reh DOW-uh KAH-meh-reh, oh boo-kuh-tuh-REE-eh spah-TSYOH-suh shee oon bahl-KOHN oon-soh-REET",
          "translation": "My apartment has two rooms, a spacious kitchen, and a sunny balcony."
        },
        {
          "target": "Canapeaua confortabilă se află în sufragerie lângă fereastră.",
          "reading": "kah-nah-PYOW-ah kohn-for-TAH-bee-luh seh AH-fluh oon soo-frah-zheh-REE-eh LOON-guh feh-RYAS-truh",
          "translation": "The comfortable sofa is in the living room next to the window."
        }
      ],
      "mnemonics": [
        "SUFRAGERIE = Living room where you sit and socialize!",
        "BUCĂTĂRIE = Kitchen (from bucătar, cook/chef)!",
        "DORMITOR = Bedroom (from a dormi, to sleep)!"
      ],
      "culturalNotes": [
        "In Romanian cities (like Bucharest, Cluj, and Iași), apartment buildings (*blocuri*) built with reinforced balconies often serve as vibrant urban gardens where families grow herbs and flowers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește 'the bedroom' în limba română?",
          "options": [
            "Bucătăria",
            "Baia",
            "Holul",
            "Dormitorul"
          ],
          "answerIndex": 3,
          "explanation": "Dormitorul (the bedroom) comes from 'a dormi' (to sleep)."
        },
        {
          "prompt": "Cum se spune 'refrigerator' în română cu articol hotărât?",
          "options": [
            "Canapeaua",
            "Dulapul",
            "Aragazul",
            "Frigiderul"
          ],
          "answerIndex": 3,
          "explanation": "Frigiderul is the refrigerator."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Tradu în limba română: 'The table is in the kitchen and the bed is in the bedroom.'",
          "options": [
            "Masa este în baie.",
            "Patul este în grădină.",
            "Dulapul este pe balcon.",
            "Masa este în bucătărie și patul este în dormitor."
          ],
          "answerIndex": 3,
          "explanation": "Masa în bucătărie + patul în dormitor."
        },
        {
          "prompt": "Ce gen gramatical are substantivul 'scaun' (un scaun / două scaune)?",
          "options": [
            "Genul feminin pur",
            "Genul masculin pur",
            "Fără gen",
            "Genul neutru"
          ],
          "answerIndex": 3,
          "explanation": "Romanian neuter nouns behave as masculine in singular and feminine in plural."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Potrivește camerele cu traducerile lor: bucătăria, baia, sufrageria, holul:",
          "options": [
            "bucătăria: bedroom | baia: kitchen | sufrageria: garage | holul: balcony",
            "All mean bedroom",
            "All mean hospital",
            "bucătăria: kitchen | baia: bathroom | sufrageria: living room | holul: hallway"
          ],
          "answerIndex": 3,
          "explanation": "Romanian rooms vocabulary matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează fraza: «În sufragerie avem o _______ confortabilă din piele.»",
          "options": [
            "chiuvetă",
            "cadă",
            "canapea",
            "aragaz"
          ],
          "answerIndex": 2,
          "explanation": "Canapea confortabilă (comfy couch) in the living room.",
          "type": "multiple-choice"
        },
        {
          "prompt": "De ce este importantă cunoașterea genului neutru în limba română pentru descrierea casei?",
          "options": [
            "Pentru că nu există alte genuri",
            "Pentru că majoritatea pieselor de mobilier (pat, dulap, scaun, birou, covor)",
            "Nu are importanță",
            "Doar pentru poezie"
          ],
          "answerIndex": 1,
          "explanation": "The neuter gender encompasses most household furniture objects in Romanian.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: 'The wardrobe is large and placed near the door.'",
          "options": [
            "Dulapul",
            "Masa este rotundă pe tavan.",
            "Patul este pe balcon.",
            "Frigiderul este mic în baie."
          ],
          "answerIndex": 0,
          "explanation": "Dulapul este mare și așezat lângă ușă.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 1: Apartamentul meu are două came"
  },
  "ro-u10-l2": {
    "id": "ro-u10-l2",
    "unit": "ro-u10",
    "level": "A2",
    "objective": "Describe daily household chores and responsibilities in Romanian using natural verb collocations (a face curățenie, a spăla vasele, a da cu aspiratorul, a șterge praful, a duce gunoiul, a face patul).",
    "presentation": {
      "explanation": "In this lesson, we master **Daily Household Chores & Collocations (Treburi casnice)** in Romanian:\n\n1. Essential Romanian Chore Collocations:\n   - **a face curățenie (în casă)**: to clean the house / tidy up\n   - **a spăla vasele**: to wash the dishes\n   - **a da cu aspiratorul**: to vacuum (literally: 'to give with the vacuum cleaner')\n   - **a spăla pe jos / a da cu mopul**: to mop the floor\n   - **a mătura podeaua**: to sweep the floor\n   - **a șterge praful**: to wipe/dust the furniture\n   - **a face patul**: to make the bed\n   - **a duce gunoiul**: to take out the garbage\n   - **a spăla rufele / a pune mașina de spălat**: to do the laundry / run the washing machine\n   - **a călca hainele**: to iron clothes\n\n2. Authentic Everyday Routine Sentences:\n   - *În fiecare sâmbătă dimineață facem curățenie generală în apartament.* (Every Saturday morning we do a general deep-clean of the flat.)\n   - *După cină, eu spăl vasele și tu duci gunoiul.* (After dinner, I wash the dishes and you take out the trash.)",
      "examples": [
        {
          "target": "Trebuie să duc gunoiul înainte să plec la serviciu.",
          "reading": "TREH-boo-yeh suh DOOK goo-NOY-ool oon-NAHYN-teh suh PLEHK lah sehr-VEE-chyoo",
          "translation": "I have to take out the trash before leaving for work."
        },
        {
          "target": "Dau cu aspiratorul în sufragerie și șterg praful de pe mobilă.",
          "reading": "DOW koo ahs-pee-rah-TOH-rool oon soo-frah-zheh-REE-eh shee SHTEHRG PRAH-fool deh peh MOH-bee-luh",
          "translation": "I vacuum the living room and dust the furniture."
        }
      ],
      "mnemonics": [
        "A DA CU ASPIRATORUL = To vacuum (idiomatic: 'to give with the vacuum')!",
        "A ȘTERGE PRAFUL = Wipe the dust (șterge = wipe, praf = dust)!",
        "A FACE CURĂȚENIE = Make cleanliness (curat = clean)!"
      ],
      "culturalNotes": [
        "In Romanian traditions, the grand pre-holiday deep clean (**curățenia de Paște / de Crăciun**) involves washing carpets (*bătutul covoarelor*), scrubbing windows, and airing out every room to invite fresh spring energy and blessings."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se spune expresia idiomatică 'to vacuum' în limba română?",
          "options": [
            "A da cu aspiratorul",
            "A găti mâncare",
            "A picta podeaua",
            "A rupe covorul"
          ],
          "answerIndex": 0,
          "explanation": "'A da cu aspiratorul' is the standard Romanian idiom for vacuuming."
        },
        {
          "prompt": "Ce înseamnă 'a șterge praful'?",
          "options": [
            "To dust / wipe the dust from furniture",
            "To wash clothes",
            "To open windows",
            "To buy food"
          ],
          "answerIndex": 0,
          "explanation": "'A șterge praful' means to dust surfaces."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Tradu în română: 'I wash the dishes after lunch and take out the trash.'",
          "options": [
            "Dorm după prânz.",
            "Spăl vasele după prânz și duc gunoiul.",
            "Cumpăr o mașină nouă.",
            "Merg la plajă imediat."
          ],
          "answerIndex": 1,
          "explanation": "Spăl vasele (wash dishes) + duc gunoiul (take out trash)."
        },
        {
          "prompt": "Completează: «În fiecare dimineață, îmi fac _______ imediat după ce mă trezesc.»",
          "options": [
            "dulapul",
            "frigiderul",
            "patul",
            "aragazul"
          ],
          "answerIndex": 2,
          "explanation": "'A face patul' means to make the bed."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Potrivește treburile casnice: a da cu aspiratorul, a duce gunoiul, a spăla vasele, a călca hainele:",
          "options": [
            "All mean shopping",
            "All mean cooking",
            "a da cu aspiratorul: vacuum | a duce gunoiul: take out trash | a spăla vasele: wash dishes | a călca hainele: iron clothes",
            "a da cu aspiratorul: cook | a duce gunoiul: sleep | a spăla vasele: read | a călca hainele: drive"
          ],
          "answerIndex": 2,
          "explanation": "Romanian chore collocations matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce este 'curățenia generală' în cultura casnică din România?",
          "options": [
            "O vizită la muzeu",
            "O curățenie temeinică și profundă a întregii locuințe în weekend sau înainte de sărbători",
            "O renovare completă a clădirii",
            "O petrecere de seară"
          ],
          "answerIndex": 1,
          "explanation": "Curățenia generală is a thorough deep clean of the entire residence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: 'We are washing the clothes in the washing machine.'",
          "options": [
            "Spălăm rufele în mașina de spălat.",
            "Citim cărți în dormitor.",
            "Pictăm pereții în albastru.",
            "Gătim supa în bucătărie."
          ],
          "answerIndex": 0,
          "explanation": "Spălăm rufele în mașina de spălat.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: «Trebuie să ștergem _______ de pe rafturile bibliotecii.»",
          "options": [
            "apa",
            "pâinea",
            "laptele",
            "praful"
          ],
          "answerIndex": 3,
          "explanation": "A șterge praful (to wipe the dust).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 2: Trebuie să duc gunoiul înainte"
  },
  "ro-u10-l3": {
    "id": "ro-u10-l3",
    "unit": "ro-u10",
    "level": "A2",
    "objective": "Conjugate 1st Conjugation regular verbs (-a verbs) in the Romanian Imperfect Tense (Imperfectul: -am, -ai, -a, -am, -ați, -au) to describe childhood routines and past continuous living situations.",
    "presentation": {
      "explanation": "In this lesson, we unlock the expressive **Romanian Imperfect Tense (Imperfectul)** for 1st Conjugation verbs ending in `-a`:\n\n1. What is the Imperfect Tense Used For in Romanian?\n   - **Past Habitual Actions**: Things you *used to do* or did repeatedly in the past.\n   - **Past Background Descriptions**: Ongoing states, background atmosphere, weather, and childhood memories.\n\n2. 1st Conjugation Imperfect Paradigm (Stem + *-am, -ai, -a, -am, -ați, -au*):\n   - **a locui** (to live/reside) $\\rightarrow$ *eu locui**am**, tu locui**ai**, el/ea locui**a**, noi locui**am**, voi locui**ați**, ei/ele locui**au***\n   - **a lucra** (to work) $\\rightarrow$ *lucram, lucrai, lucra, lucram, lucrați, lucrau*\n   - **a juca** (to play) $\\rightarrow$ *jucam, jucai, juca, jucam, jucați, jucau*\n   - **a asculta** (to listen) $\\rightarrow$ *ascultam, ascultai, asculta, ascultam, ascultați, ascultau*\n\n3. Symmetry to Note:\n   - The *eu* (1st sing.) and *noi* (1st plur.) forms are **identical** (*eu lucram*, *noi lucram*). Pronouns or sentence context make the subject crystal clear!",
      "examples": [
        {
          "target": "Când eram copil, locuiam la țară și mă jucam afară în fiecare zi.",
          "reading": "KOOND EH-rahm KOH-peel, loh-kwee-AHM lah TSAH-ruh shee muh zhoo-KAHM ah-FAH-ruh oon FYEH-kah-reh ZEE",
          "translation": "When I was a child, I used to live in the countryside and play outside every day."
        },
        {
          "target": "Bunicii mei lucrau în grădină de dimineață până seara.",
          "reading": "boo-NEE-chyy MAY loo-KROW oon gruh-DEE-nuh deh dee-mee-NYAH-tsuh POO-nuh SYAH-rah",
          "translation": "My grandparents used to work in the garden from morning till evening."
        }
      ],
      "mnemonics": [
        "IMPERFECTUL IS THE '-AM' TENSE: Eu lucram, tu lucrai, el lucra, noi lucram, voi lucrați, ei lucrau!",
        "EU & NOI SHARE '-AM': Eu jucam / noi jucam!",
        "LA ȚARĂ = In the countryside / village in Romania!"
      ],
      "culturalNotes": [
        "Spending childhood summer vacations at grandparents' village homes (*vacanța de vară la bunici la țară*) is a foundational cultural memory shared across Romania and Moldova."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este terminația imperfectului pentru 'tu' la verbele de conjugarea I (a lucra)?",
          "options": [
            "-am",
            "-a",
            "-ai",
            "-au"
          ],
          "answerIndex": 2,
          "explanation": "2nd person singular 'tu' takes -ai: tu lucrai."
        },
        {
          "prompt": "Ce exprimă timpul Imperfect în limba română?",
          "options": [
            "O acțiune viitoare",
            "O acțiune terminată într-un singur moment precis",
            "Un ordin imperativ",
            "O acțiune trecută continuă, repetată sau o stare de fundal în copilărie"
          ],
          "answerIndex": 3,
          "explanation": "The imperfect expresses continuous, repeated, and background past actions."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Tradu: 'In the past, we used to live in a quiet neighborhood.'",
          "options": [
            "În trecut, locuiam într-un cartier liniștit.",
            "Locuim într-un cartier zgomotos acum.",
            "Am locuit o secundă ieri.",
            "Vom locui la mare mâine."
          ],
          "answerIndex": 0,
          "explanation": "Locuiam expresses past continuous residence."
        },
        {
          "prompt": "Conjugă verbul 'a juca' pentru 'ei/ele' la imperfect:",
          "options": [
            "Ei jucau",
            "Ei au jucat",
            "Ei joacă",
            "Ei vor juca"
          ],
          "answerIndex": 0,
          "explanation": "3rd person plural takes -au: ei jucau."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Conjugă 'a lucra' la imperfect pentru: eu, tu, el, noi, voi, ei:",
          "options": [
            "lucrez, lucrezi, lucrează, lucrăm, lucrați, lucrează",
            "lucram, lucrai, lucra, lucram, lucrați, lucrau",
            "voi lucra, vei lucra, va lucra, vom lucra, veți lucra, vor lucra",
            "lucrai, lucrași, lucră, lucrarăm, lucrarăți, lucrară"
          ],
          "answerIndex": 1,
          "explanation": "Complete 1st conjugation imperfect paradigm.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care este diferența dintre 'Ieri am jucat fotbal' (Perfect Compus) și 'În copilărie jucam fotbal în fiecare zi' (Imperfect)?",
          "options": [
            "'Am jucat' este un eveniment punctual finalizat; 'jucam' descrie o rutină obișnuită, repetată în trecut",
            "'Jucam' este o comandă",
            "'Am jucat' este viitor și 'jucam' este prezent",
            "Nu există nicio diferență"
          ],
          "answerIndex": 0,
          "explanation": "Perfect compus = completed single event; Imperfect = repeated habitual past routine.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: «Când eram mici, noi _______ (asculta) poveștile bunicului.»",
          "options": [
            "ascultați",
            "ascultau",
            "ascultai",
            "ascultam"
          ],
          "answerIndex": 3,
          "explanation": "Noi ascultam (we used to listen).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Adevărat sau fals: În limba română, formele de 'eu' și 'noi' la imperfect sunt identice (eu locuiam / noi locuiam).",
          "options": [
            "Adevărat",
            "Fals"
          ],
          "answerIndex": 0,
          "explanation": "Both eu and noi share the identical '-am' ending in the imperfect.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 3: Când eram copil, locuiam la ța"
  },
  "ro-u10-l4": {
    "id": "ro-u10-l4",
    "unit": "ro-u10",
    "level": "A2",
    "objective": "Conjugate 2nd/3rd/4th conjugation verbs (-eam, -eai, -ea / -eam, -eați, -eau) and irregular verbs (a fi -> eram, a avea -> aveam, a merge -> mergeam, a mânca -> mâncam) in the Romanian Imperfect Tense to express past states and memories.",
    "presentation": {
      "explanation": "In this lesson, we master the Romanian Imperfect for **2nd, 3rd, and 4th Conjugation Verbs & Essential Irregular Verbs**:\n\n1. Endings for 2nd & 3rd Conjugation (*-eam, -eai, -ea, -eam, -eați, -eau*):\n   - **a merge** (to go/walk) $\\rightarrow$ *mergeam, mergeai, mergea, mergeam, mergeați, mergeau*\n   - **a face** (to do/make) $\\rightarrow$ *făceam, făceai, făcea, făceam, făceați, făceau*\n   - **a vedea** (to see) $\\rightarrow$ *vedeam, vedeai, vedea, vedeam, vedeați, vedeau*\n   - **a citi** (to read - 4th conj.) $\\rightarrow$ *citeam, citeai, citea, citeam, citeați, citeau*\n\n2. The Core Auxiliary & Modal Verbs in Imperfect:\n   - **A FI (to be)**: *eu eram, tu erai, el/ea era, noi eram, voi erați, ei/ele erau* (I was / used to be)\n   - **A AVEA (to have)**: *eu aveam, tu aveai, el/ea avea, noi aveam, voi aveați, ei/ele aveau* (I had / used to have)\n   - **A PUTEA (to be able to)**: *puteam, puteai, putea, puteam, puteați, puteau*\n   - **A VREA (to want)**: *vream / voiam, voiai, voia, voiam, voiați, voiau*\n\n3. High-Value Nostalgia Sentences:\n   - *Înainte eram foarte buni prieteni și mergeam la cinematograf în fiecare duminică.* (Before we were very good friends and used to go to the cinema every Sunday.)\n   - *Bunica avea o casă frumoasă cu flori la ferestre.* (Grandma had a beautiful house with flowers at the windows.)",
      "examples": [
        {
          "target": "Când eram la școală, citeam multe romane de aventuri.",
          "reading": "KOOND EH-rahm lah SHKWAH-luh, chee-TYAHM MOOL-teh roh-MAH-neh deh ah-vehn-TOO-ree",
          "translation": "When I was in school, I used to read many adventure novels."
        },
        {
          "target": "În fiecare vară mergeam cu familia la Marea Neagră.",
          "reading": "oon FYEH-kah-reh VAH-ruh mehr-ZYAHM koo fah-MEE-lyah lah MAH-reh-ah NYAH-gruh",
          "translation": "Every summer we used to go with the family to the Black Sea."
        }
      ],
      "mnemonics": [
        "A FI IN IMPERFECT: Eram, erai, era, eram, erați, erau (The anchor of Romanian past storytelling)!",
        "A AVEA IN IMPERFECT: Aveam, aveai, avea, aveam, aveați, aveau!",
        "MAREA NEAGRĂ = The Black Sea (Romania's summer vacation paradise)!"
      ],
      "culturalNotes": [
        "Summertime trips to the Black Sea coast (*la Marea Neagră: Mamaia, Costinești, Vama Veche*) and winter holidays in the Carpathian Mountains (*la munte la Sinaia și Brașov*) are iconic Romanian family vacation traditions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este forma verbului 'a fi' pentru 'el/ea' la timpul imperfect?",
          "options": [
            "Este",
            "Era",
            "Va fi",
            "A fost"
          ],
          "answerIndex": 1,
          "explanation": "A fi in imperfect 3rd person singular is 'era'."
        },
        {
          "prompt": "Conjugă 'a avea' pentru 'noi' la imperfect:",
          "options": [
            "Noi aveam",
            "Noi avem",
            "Noi vom avea",
            "Noi am avut"
          ],
          "answerIndex": 0,
          "explanation": "Noi aveam (we used to have)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Tradu: 'When I was young, I lived in Cluj and I was very happy.'",
          "options": [
            "Când eram tânăr, locuiam în Cluj și eram foarte fericit.",
            "Am fost tânăr ieri.",
            "Când sunt tânăr, locuiesc în Cluj astăzi.",
            "Voi fi fericit mâine la Cluj."
          ],
          "answerIndex": 0,
          "explanation": "'Eram' and 'locuiam' describe past state and continuous residence."
        },
        {
          "prompt": "Care este forma corectă pentru 'ei' a verbului 'a merge' la imperfect?",
          "options": [
            "Ei mergeau",
            "Ei vor merge",
            "Ei au mers",
            "Ei merg"
          ],
          "answerIndex": 0,
          "explanation": "Mergeau (-eau) is the 3rd person plural imperfect form."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Potrivește verbele la imperfect pentru 'tu': a fi, a avea, a merge, a citi:",
          "options": [
            "a fi: erai | a avea: aveai | a merge: mergeai | a citi: citeai",
            "a fi: ai fost | a avea: ai avut | a merge: ai mers | a citi: ai citit",
            "All end in -au",
            "All end in -am"
          ],
          "answerIndex": 0,
          "explanation": "2nd person singular imperfect forms matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Conjugă 'a face' pentru 'voi' la imperfect:",
          "options": [
            "Voi faceți",
            "Voi ați făcut",
            "Voi veți face",
            "Voi făceați"
          ],
          "answerIndex": 3,
          "explanation": "Făceați (-eați) is 2nd person plural.",
          "type": "multiple-choice"
        },
        {
          "prompt": "De ce este verbul 'a fi' la imperfect (eram, erai, era) esențial pentru narațiunile în limba română?",
          "options": [
            "Nu are importanță specială",
            "Pentru că este singurul verb din limba română",
            "Pentru că descrie vârsta, stările emoționale, profesiile și descrierea cadrului în amintirile din trecut",
            "Pentru că înlocuiește viitorul"
          ],
          "answerIndex": 2,
          "explanation": "'A fi' in the imperfect provides the descriptive scaffolding for past memories and narratives.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: «Pe vremuri, noi _______ (avea) mult timp liber și _______ (merge) des în parc.»",
          "options": [
            "aveți / mergeți",
            "aveam / mergeam",
            "am avut / am mers",
            "vom avea / vom merge"
          ],
          "answerIndex": 1,
          "explanation": "Aveam / mergeam.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 4: Conjugate 2nd/3rd/4th conjugation verbs (-eam"
  },
  "ro-u10-l5": {
    "id": "ro-u10-l5",
    "unit": "ro-u10",
    "level": "A2",
    "objective": "Synthesize Romanian housing vocabulary, chore collocations, and Imperfectul regular/irregular verb conjugations to deliver a complete descriptive tour of an apartment and share nostalgic memories of childhood homes and village life.",
    "presentation": {
      "explanation": "In this **A2 Milestone Checkpoint for Unit 10**, you integrate all vocabulary, grammar, and cultural expressions to deliver **A Tour of My Romanian Apartment & Childhood Memories (Apartamentul meu și amintirile din copilărie)**:\n\n1. The Grand Integration Narrative:\n   - *«Bună ziua și bine ați venit în apartamentul meu! Vă rog să intrați și să vă simțiți ca acasă.\n   Locuiesc într-un apartament luminos cu două camere în cartierul Floreasca din București. Sufrageria este spațioasă și primitoare; aici se află o canapea confortabilă, o masă de lemn și o bibliotecă plină de cărți. Din sufragerie ieșim pe balcon, unde îmi place să beau cafeaua dimineața.\n   Bucătăria este modern utilată, cu frigider, aragaz și mașină de spălat vase. În dormitor am un pat mare lângă fereastră și un dulap încăpător pentru haine.\n   Înainte, când eram copil, viața era foarte diferită: locuiam cu părinții și bunicii într-o casă tradițională la țară, în Maramureș. Aveam o curte mare cu pomi fructiferi, flori și animale. În fiecare vară, mă jucam cu copiii din sat până la apusul soarelui, iar bunica ne pregătea plăcinte calde și cozonac. Acum locuiesc la oraș, dar păstrez mereu în suflet căldura acelei case din copilărie.»*\n\n2. Key Functional Competencies Verified:\n   - Welcoming visitors with Romanian warmth (*Bine ați venit! Simțiți-vă ca acasă!*).\n   - Describing apartment layout, furniture, and room features.\n   - Contrasting modern city life with rural childhood memories using the Imperfectul (*locuiam, era, aveam, jucam, pregătea*).",
      "examples": [
        {
          "target": "Integration Monologue: Welcoming guests to Bucharest, giving an apartment tour, and sharing nostalgic memories of a Maramureș village childhood.",
          "reading": "A2 Milestone Monologue",
          "translation": "Complete Romanian home and lifestyle synthesis."
        },
        {
          "target": "Romanian Hospitality: 'Simțiți-vă ca acasă!' (Make yourself at home!).",
          "reading": "Simțiți-vă ca acasă",
          "translation": "Traditional Romanian welcome formula."
        }
      ],
      "mnemonics": [
        "A2 UNIT 10 COMPLETE: Romanian Home, Chores, and Imperfectul mastered!",
        "SIMȚIȚI-VĂ CA ACASĂ: Feel at home — the essence of Romanian hospitality (Ospitalitate)!",
        "DOR = The untranslatable Romanian feeling of deep nostalgia, longing, and warmth for home and childhood!"
      ],
      "culturalNotes": [
        "The profound Romanian concept of **dor** (longing, nostalgia, homesickness, and sweet yearning for childhood and loved ones) is the emotional heart of Romanian literature and folk storytelling."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "În textul integrat, unde locuia familia naratorului în copilărie?",
          "options": [
            "Într-o casă tradițională la țară, în Maramureș, cu curte mare și pomi fructiferi",
            "Într-un bloc la etajul 10",
            "Într-un hotel din Londra",
            "Într-un cort pe munte"
          ],
          "answerIndex": 0,
          "explanation": "Text states: 'locuiam cu părinții și bunicii într-o casă tradițională la țară, în Maramureș. Aveam o curte mare'."
        },
        {
          "prompt": "Ce expresie călduroasă de ospitalitate folosesc românii pentru a invita oaspeții să se simtă confortabil?",
          "options": [
            "Simțiți-vă ca acasă!",
            "Rămâneți afară!",
            "Plătiți biletul!",
            "Plecați repede!"
          ],
          "answerIndex": 0,
          "explanation": "'Simțiți-vă ca acasă' means 'Make yourself at home'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Tradu: 'Before, we used to live in a quiet village and we had a large garden.'",
          "options": [
            "Vom cumpăra un sat mâine.",
            "Înainte, locuiam într-un sat liniștit și aveam o grădină mare.",
            "Am locuit ieri la hotel.",
            "Locuim într-un oraș mare astăzi."
          ],
          "answerIndex": 1,
          "explanation": "Locuiam and aveam in imperfect describe past continuous village living."
        },
        {
          "prompt": "Ce reprezintă cuvântul profund românesc 'dor'?",
          "options": [
            "O mobilă veche",
            "Un sentiment intens de nostalgie, dorință sufletească și atașament față de casă, copilărie sau persoanele dragi",
            "O rețetă de mâncare",
            "O durere fizică de dinți"
          ],
          "answerIndex": 1,
          "explanation": "'Dor' is the iconic Romanian untranslatable word for nostalgic longing and love."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce competențe esențiale au fost consolidate pe parcursul Unității 10 de Limba Română?",
          "options": [
            "Conjugarea viitorului anterior exclusiv",
            "Doar denumirile păsărilor călătoare",
            "Terminologia maritimă exclusiv",
            "Vocabularul locuinței și al mobilei cu genurile corespunzătoare"
          ],
          "answerIndex": 3,
          "explanation": "Comprehensive Romanian Unit 10 competencies certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează proverbul popular românesc: «Fie pâinea cât de rea, tot mai bine-n _______ mea.»",
          "options": [
            "grădina",
            "pădurea",
            "țara",
            "școala"
          ],
          "answerIndex": 2,
          "explanation": "«Fie pâinea cât de rea, tot mai bine-n țara mea» celebrates the warmth of home and homeland.",
          "type": "multiple-choice"
        },
        {
          "prompt": "De ce stăpânirea imperfectului reprezintă saltul calitativ către nivelul intermediar (A2/B1) în limba română?",
          "options": [
            "Deoarece elimină nevoia de substantive",
            "Deoarece permite trecerea de la propoziții simple și rigide la povestiri fluide, bogate în detalii descriptive și nuanțe emoționale despre trecut",
            "Nu are nicio importanță",
            "Doar pentru a citi ziare vechi"
          ],
          "answerIndex": 1,
          "explanation": "The imperfect unlocks fluid narrative storytelling and rich autobiographical reminiscence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Completează: «În fiecare vacanță, noi _______ (merge) la bunici și _______ (mânca) bucate tradiționale.»",
          "options": [
            "mergeam / mâncam",
            "am mers / am mâncat",
            "mergeți / mâncați",
            "vom merge / vom mânca"
          ],
          "answerIndex": 0,
          "explanation": "Mergeam / mâncam in the imperfect.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 5: Synthesize Romanian housing vocabulary"
  },
  "ro-u11-l1": {
    "id": "ro-u11-l1",
    "unit": "ro-u11",
    "level": "A2",
    "objective": "Identificarea și denumirea părților corpului omenesc în limba română.",
    "presentation": {
      "explanation": "Vocabular esențial: Părțile corpului uman:\n- Capul (Head) / Fața (Face)\n- Ochii (Eyes / Ochiul) / Nasul (Nose) / Gura (Mouth) / Urechile (Ears / Urechea)\n- Gâtul (Neck/Throat) / Umerii (Shoulders / Umărul) / Pieptul (Chest)\n- Brațele (Arms) / Mâinile (Hands / Mâna) / Degetele (Fingers)\n- Burta / Stomacul (Belly / Stomach)\n- Spatele (Back)\n- Picioarele (Legs/Feet / Piciorul) / Genunchii (Knees / Genunchiul)",
      "examples": [
        {
          "target": "Mă spăl pe mâini cu apă și săpun înainte de fiecare masă.",
          "reading": "muh SPUL pe MUYN koo AH-puh shee suh-POON in-a-IN-te de FYE-ka-re MA-suh",
          "translation": "I wash my hands with water and soap before every meal."
        },
        {
          "target": "După antrenamentul intens, mă dor mușchii spatelui.",
          "reading": "DOO-puh an-tre-na-MEN-tool in-TENS, muh dor MOOSH-kee SPA-te-looy",
          "translation": "After the intense workout, my back muscles hurt."
        }
      ],
      "mnemonics": [
        "Cap (Head), umeri (Shoulders), genunchi (Knees) și picioare (Feet)!"
      ],
      "culturalNotes": [
        "In Romanian, reflexive verbs are standard for personal hygiene: \"Mă spăl pe mâini\" (literally: I wash myself on the hands)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este cuvântul românesc pentru \"stomach / belly\"?",
          "options": [
            "Piciorul",
            "Brațul",
            "Urechea",
            "Burta / Stomacul"
          ],
          "answerIndex": 3,
          "explanation": "Burta / Stomacul refers to the belly/stomach."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduceți: \"My knees hurt\"",
          "options": [
            "Spăl genunchii",
            "Am genunchi mari",
            "Genunchii aleargă",
            "Mă dor genunchii"
          ],
          "answerIndex": 3,
          "explanation": "Mă dor genunchii means my knees hurt."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce parte a corpului leagă capul de umeri?",
          "options": [
            "Glezna",
            "Cotul",
            "Gâtul",
            "Palma"
          ],
          "answerIndex": 2,
          "explanation": "Gâtul (neck) links head to shoulders.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"He has a headache from fatigue.\"",
          "options": [
            "El mănâncă orez.",
            "Îl doare capul de la oboseală.",
            "Merge la magazin.",
            "A cumpărat pantofi."
          ],
          "answerIndex": 1,
          "explanation": "Îl doare capul de la oboseală is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 1: Mă spăl pe mâini cu apă și săp"
  },
  "ro-u11-l2": {
    "id": "ro-u11-l2",
    "unit": "ro-u11",
    "level": "A2",
    "objective": "Exprimarea durerii și a simptomelor de boală folosind verbul \"a durea\" și \"a avea febră\".",
    "presentation": {
      "explanation": "Forme gramaticale pentru simptome în română:\n1. Mă doare / Mă dor + partea corpului:\n   - Mă doare capul / mă doare gâtul (Singular: doare)\n   - Mă dor picioarele / mă dor ochii (Plural: dor)\n   - Îl/O doare... / Ne dor...\n2. Simptome cu verbul A AVEA:\n   - Am febră mare (I have a high fever)\n   - Am tuse seacă / productivă (I have a dry / productive cough)\n   - Am frisoane și dureri musculare (I have chills and muscle aches)\n   - Am amețeli / Îmi este greață (I feel dizzy / nauseous)\n   - Am răcit / Am gripă (I caught a cold / flu)",
      "examples": [
        {
          "target": "De ieri dimineață am febră 38.5 și mă doare foarte tare gâtul la înghițire.",
          "reading": "de YER de-mee-NYAT-suh am FE-bruh tray-zech-shee-OPT koo CHINCH shee muh DWA-re FOAR-te TA-re GUY-tool la in-gheet-SEE-re.",
          "translation": "Since yesterday morning I have a 38.5 fever and my throat hurts severely when swallowing."
        }
      ],
      "mnemonics": [
        "MĂ DOARE = Singular ache",
        "MĂ DOR = Plural aches!"
      ],
      "culturalNotes": [
        "In Romania, when someone is unwell or sneezes, the traditional wish is \"Sănătate!\" (Health!) or \"Multă sănătate și însănătoșire grabnică!\" (Much health and speedy recovery!)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Alegeți forma corectă: \"Pe Ion îl ______ dinții.\"",
          "options": [
            "dor",
            "are",
            "doare",
            "dureros"
          ],
          "answerIndex": 0,
          "explanation": "Dinții is plural, so \"îl dor\" is required."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce îi urezi unui prieten care este răcit?",
          "options": [
            "Multă sănătate și însănătoșire grabnică!",
            "Poftă bună!",
            "La mulți ani!",
            "Drum bun!"
          ],
          "answerIndex": 0,
          "explanation": "Însănătoșire grabnică means speedy recovery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Completați: \"Dacă ai febră și tuse, înseamnă că ai ______.\"",
          "options": [
            "alergat la maraton",
            "răcit / gripă",
            "câștigat la loto",
            "mâncat prea mult tort"
          ],
          "answerIndex": 1,
          "explanation": "Fever and cough signify a cold or flu.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"I feel dizzy and have chills.\"",
          "options": [
            "Am amețeli și am frisoane.",
            "Merg la cinema.",
            "Beau apă rece.",
            "Sunt foarte bucuros."
          ],
          "answerIndex": 0,
          "explanation": "Am amețeli și am frisoane is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 2: De ieri dimineață am febră 38."
  },
  "ro-u11-l3": {
    "id": "ro-u11-l3",
    "unit": "ro-u11",
    "level": "A2",
    "objective": "Cumpărarea medicamentelor de la farmacie și înțelegerea prospectului medical.",
    "presentation": {
      "explanation": "La farmacie în România:\n- Medicamentele (Medicines / Drugs)\n- Analgezicul / Antitermicul (Painkiller / Fever reducer)\n- Pastilele / Comprimatele (Pills / Tablets)\n- Siropul de tuse (Cough syrup)\n- Rețeta medicală (Doctor's prescription)\n- Prospectul medicamentului (Medical leaflet/instructions)\n- Fără rețetă (OTC) / Cu rețetă compensată (Subsidized prescription)\n\nInstrucțiuni de administrare:\n- \"Luați un comprimat de trei ori pe zi, după mese, cu un pahar mare de apă.\"",
      "examples": [
        {
          "target": "Bună ziua! Aveți ceva eficient pentru durerile de cap și febră?",
          "reading": "BOO-nuh ZYOO-a! a-VETZ CHE-va e-fee-CHENT PEN-troo doo-RE-ree-le de KAP shee FE-bruh?",
          "translation": "Good day! Do you have something effective for headaches and fever?"
        }
      ],
      "mnemonics": [
        "Prospect = Medication instructions leaflet"
      ],
      "culturalNotes": [
        "In Romania, community pharmacies (Farmacia Catena, Dr. Max, Dona) have qualified pharmacists who provide guidance on dosage and herbal remedies."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă \"de trei ori pe zi după masă\"?",
          "options": [
            "Once every three days",
            "Three pills at breakfast",
            "Three times daily after meals",
            "Before dinner only"
          ],
          "answerIndex": 2,
          "explanation": "De trei ori pe zi după masă means three times daily after meals."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce document oficial de la medic este necesar pentru antibiotice?",
          "options": [
            "Rețeta medicală",
            "Biletul de autobuz",
            "Meniul zilei",
            "Bonul de cumpărături"
          ],
          "answerIndex": 0,
          "explanation": "Rețeta medicală is the mandatory medical prescription."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Traduceți: \"Take this syrup before sleeping.\"",
          "options": [
            "Luați acest sirop înainte de culcare.",
            "Beți cafea fierbinte.",
            "Cumpărați pastile mâine.",
            "Mâncați pâine dimineața."
          ],
          "answerIndex": 0,
          "explanation": "Luați acest sirop înainte de culcare is exact.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce este \"prospectul medicamentului\"?",
          "options": [
            "Factura de plată",
            "Cartea de povești",
            "Harta orașului",
            "Foaia informativă cu instrucțiuni și contraindicații"
          ],
          "answerIndex": 3,
          "explanation": "Prospectul is the medication package insert.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 3: Bună ziua! Aveți ceva eficient"
  },
  "ro-u11-l4": {
    "id": "ro-u11-l4",
    "unit": "ro-u11",
    "level": "A2",
    "objective": "Discutarea despre viață sănătoasă, ceaiuri medicinale românești și mișcare în aer liber.",
    "presentation": {
      "explanation": "Sănătate și leacuri tradiționale în România:\n- Mișcare zilnică în aer liber (drumeții în Carpați, plimbări în parc)\n- Ceaiuri medicinale tradiționale: ceai de mușețel (chamomile), tei (linden), mentă, sunătoare, soc\n- Mierea de albine și propolisul pentru imunitate\n- Alimentație echilibrată cu ciorbe calde de legume și salate proaspete\n- Somn odihnitor de opt ore pe noapte\n- Proverbul românesc: \"Sănătatea e mai bună decât toate!\" (Health is better than all wealth!)",
      "examples": [
        {
          "target": "Când sunt răcit, beau ceai cald de tei cu lămâie și miere de albine.",
          "reading": "kuhnd soont ruh-CHEET, BYOW CHAY KALD de TAY koo luh-MUY-ye shee MYE-re de al-BEE-ne.",
          "translation": "When I have a cold, I drink warm linden tea with lemon and bee honey."
        }
      ],
      "mnemonics": [
        "Ceai de tei cu miere = Classic Romanian restorative tea for colds and sleep!"
      ],
      "culturalNotes": [
        "Herbal teas (ceaiuri medicinale) from Plafar pharmacies and natural bee products (apiterapie) are deeply rooted in Romanian family health traditions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce ceai tradițional este celebru în România pentru calmarea răcelii și relaxare?",
          "options": [
            "Cafeaua foarte tare",
            "Ceaiul de tei sau de mușețel",
            "Uleiul de motor",
            "Sucul carbogazos"
          ],
          "answerIndex": 1,
          "explanation": "Ceaiul de tei și mușețel are traditional Romanian soothing remedies."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Completați proverbul: \"Sănătatea e mai bună decât ______.\"",
          "options": [
            "toate",
            "mașina",
            "nimic",
            "somnul"
          ],
          "answerIndex": 0,
          "explanation": "Sănătatea e mai bună decât toate is the classic Romanian proverb."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care dintre acestea este un obicei sănătos dovedit?",
          "options": [
            "Consumul excesiv de zahăr",
            "Fumatul și nopțile pierdute",
            "Sedentarismul prelungit",
            "Mișcare regulată, hidratare și alimentație echilibrată"
          ],
          "answerIndex": 3,
          "explanation": "Exercise, hydration, and balanced diet.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Physical exercise strengthens the immune system.\"",
          "options": [
            "Spitalul s-a închis.",
            "Odihna este interzisă.",
            "Exercițiul fizic întărește sistemul imunitar.",
            "Doctorul a plecat la munte."
          ],
          "answerIndex": 2,
          "explanation": "Exercițiul fizic întărește sistemul imunitar is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 4: Discutarea despre viață sănătoasă"
  },
  "ro-u11-l5": {
    "id": "ro-u11-l5",
    "unit": "ro-u11",
    "level": "A2",
    "objective": "Simularea unei consultații medicale la medicul de familie sau policlinică în România.",
    "presentation": {
      "explanation": "La medicul de familie / Policlinică în România:\n1. Întrebarea medicului:\n   - \"Bună ziua! Ce vă supără? Ce simptome aveți?\"\n   - \"De când au început aceste dureri?\"\n2. Răspunsul pacientului:\n   - \"Domnule doctor, am o tuse puternică, mă doare pieptul și am febră mare de două zile.\"\n3. Examinarea și Diagnosticul:\n   - \"Vă rog să vă așezați pe patul de consultație. Vă ascult plămânii cu stetoscopul. Respirați adânc pe gură... așa, expirați.\"\n   - \"Este o viroză respiratorie. Vă prescriu acest tratament și vă eliberez un concediu medical de 4 zile. Multă sănătate!\"",
      "examples": [
        {
          "target": "Medicul: \"Respirați adânc... perfect. Gâtul este foarte roșu. Vă recomand repaus la pat.\"\nPacientul: \"Mulțumesc, domnule doctor!\"",
          "reading": "Consultație medicală România",
          "translation": "Doctor: \"Breathe deeply... perfect. Your throat is very red. I recommend bed rest.\"\nPatient: \"Thank you, doctor!\""
        }
      ],
      "mnemonics": [
        "Concediu medical = Official Romanian paid medical sick leave certificate"
      ],
      "culturalNotes": [
        "In Romania, primary medical care starts with registering with a \"medic de familie\" (family doctor) through the CNAS health insurance system."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă \"concediu medical\" eliberat de doctor?",
          "options": [
            "Certificat medical oficial pentru motivarea absenței de la serviciu din motive de sănătate",
            "O vacanță la mare",
            "O diplomă de facultate",
            "Un permis de conducere"
          ],
          "answerIndex": 0,
          "explanation": "Concediu medical is official medical sick leave."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce vă cere medicul când spune: \"Respirați adânc pe gură\"?",
          "options": [
            "Close your ears",
            "Breathe deeply through your mouth for lung examination",
            "Stand up and run",
            "Drink cold water"
          ],
          "answerIndex": 1,
          "explanation": "Respirați adânc instructs deep breathing for auscultation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ordonați pașii unei consultații la medicul de familie:",
          "options": [
            "1. Plata facturii -> 2. Spitalul -> 3. Somnul",
            "1. Luarea pastilelor -> 2. Mersul la doctor -> 3. Îmbolnăvirea",
            "1. Prezentarea cardului de sănătate -> 2. Explicarea simptomelor -> 3. Examenul clinic -> 4. Primirea rețetei și a concediului medical",
            "1. Plecarea acasă -> 2. Sosirea -> 3. Programarea"
          ],
          "answerIndex": 2,
          "explanation": "Standard clinical consultation procedure.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"The family doctor advised me to rest at home for four days.\"",
          "options": [
            "Medicul a plecat în vacanță.",
            "Medicul de familie mi-a recomandat să mă odihnesc acasă timp de patru zile.",
            "Am fost la teatru aseară.",
            "Clinica este închisă duminica."
          ],
          "answerIndex": 1,
          "explanation": "Medicul de familie mi-a recomandat să mă odihnesc acasă timp de patru zile is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 5: Medicul: \"Respirați adânc... p"
  },
  "ro-u12-l1": {
    "id": "ro-u12-l1",
    "unit": "ro-u12",
    "level": "A2",
    "objective": "Denumirea profesiilor, domeniilor de activitate și a locurilor de muncă în limba română.",
    "presentation": {
      "explanation": "Profesii și meserii în România:\n- Inginerul / inginera (Engineer)\n- Programatorul / dezvoltatorul software (Software Developer)\n- Avocatul / avocata (Lawyer)\n- Medicul / doctorul / asistenta medicală (Doctor / Nurse)\n- Profesorul / profesoara (Teacher/Professor)\n- Contabilul / contabila (Accountant)\n- Managerul de proiect (Project Manager)\n\nStructură:\n- \"Lucrez ca programator la o companie de tehnologie din București / Cluj-Napoca.\"",
      "examples": [
        {
          "target": "Lucrez ca inginer software la un startup din Cluj-Napoca.",
          "reading": "loo-KREZ ka in-zhee-NER SOFT-wayr la oon STAR-tup din KLOOZH na-PO-ka",
          "translation": "I work as a software engineer at a startup in Cluj-Napoca."
        }
      ],
      "mnemonics": [
        "Cluj-Napoca & București = Major IT & startup tech hubs of Eastern Europe!"
      ],
      "culturalNotes": [
        "Romania is one of Europe's fastest-growing technology and software engineering hubs, with strong programming talent across Bucharest, Cluj, Iași, and Timișoara."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se spune \"I work as a software engineer\" în limba română?",
          "options": [
            "Sunt software",
            "Cumpăr calculatoare",
            "Dorm la birou",
            "Lucrez ca inginer software"
          ],
          "answerIndex": 3,
          "explanation": "Lucrez ca inginer software is exact."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce face un \"contabil\"?",
          "options": [
            "Conduce un autobuz",
            "Pictează pereți",
            "Gătește la restaurant",
            "Gestionează evidența financiară și bilanțul contabil al firmei"
          ],
          "answerIndex": 3,
          "explanation": "Contabilul manages accounting."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care sunt principalele centre IT și universitare din România?",
          "options": [
            "Numai satele izolate",
            "București, Cluj-Napoca, Iași și Timișoara",
            "Vârful Moldoveanu",
            "Peștera Urșilor"
          ],
          "answerIndex": 1,
          "explanation": "Major IT tech hubs.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"She works as a project manager at a multinational corporation.\"",
          "options": [
            "Ea lucrează ca manager de proiect la o corporație multinațională.",
            "Ea merge la piață.",
            "Biroul este gol.",
            "Ea este elevă la școală."
          ],
          "answerIndex": 0,
          "explanation": "Accurate business translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 1: Denumirea profesiilor"
  },
  "ro-u12-l2": {
    "id": "ro-u12-l2",
    "unit": "ro-u12",
    "level": "A2",
    "objective": "Descrierea rutinei de birou, ședințe de echipă și managementul sarcinilor în companii.",
    "presentation": {
      "explanation": "Activități zilnice la birou:\n- Răspunsul la e-mailuri și organizarea inboxului (Answering emails)\n- Participarea la ședința zilnică de echipă (Daily stand-up meeting)\n- Respectarea termenelor limită (Meeting deadlines / termene limită)\n- Pauza de cafea cu colegii (Coffee break)\n- Munca remote / de acasă (Remote work / Work from home / telemuncă)",
      "examples": [
        {
          "target": "Avem o ședință săptămânală în fiecare luni dimineață pentru stabilirea obiectivelor.",
          "reading": "a-VEM o she-DEEN-tsuh sup-tuh-muh-NA-luh in FYE-ka-re LOON de-mee-NYAT-suh PEN-troo sta-bee-LEE-rya o-byek-TEE-ve-lor.",
          "translation": "We have a weekly meeting every Monday morning to establish goals."
        }
      ],
      "mnemonics": [
        "Termen limită = Deadline!"
      ],
      "culturalNotes": [
        "In Romanian companies, the morning coffee discussion (\"la o cafea cu colegii\") is an informal social touchpoint before deep focus work begins."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă \"telemuncă\" sau \"muncă de acasă\"?",
          "options": [
            "Munca la distanță prin intermediul calculatorului și al internetului",
            "Închiderea fabricii",
            "Munca pe câmp",
            "Vacanță fără lucru"
          ],
          "answerIndex": 0,
          "explanation": "Remote work / telemuncă."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă \"a respecta termenul limită\"?",
          "options": [
            "To meet the deadline on time",
            "To miss the deadline",
            "To cancel the project",
            "To lose files"
          ],
          "answerIndex": 0,
          "explanation": "A respecta termenul limită means meeting deadline."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce băutură se consumă în mod tradițional la birou în timpul pauzelor de dimineață?",
          "options": [
            "Cafeaua caldă",
            "Apă cu oțet",
            "Suc de ceapă",
            "Ulei fierbinte"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"Cafeaua caldă\". This directly applies the principle of: Descrierea rutinei de birou, ședințe de echipă și managementul sarcinilor în companii..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"We scheduled a videoconference with our clients this afternoon.\"",
          "options": [
            "Nu am calculator.",
            "Clientul locuiește la munte.",
            "Am mâncat ieri la prânz.",
            "Am programat o videoconferință cu clienții noștri în această după-amiază."
          ],
          "answerIndex": 3,
          "explanation": "Accurate business translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 2: Descrierea rutinei de birou"
  },
  "ro-u12-l3": {
    "id": "ro-u12-l3",
    "unit": "ro-u12",
    "level": "A2",
    "objective": "Vocabular de tehnologie, dispozitive digitale, securitate IT și întâlniri virtuale.",
    "presentation": {
      "explanation": "Dispozitive și noțiuni de informatică:\n- Laptopul / calculatorul desktop (Laptop / Desktop PC)\n- Monitorul / tastatura / mouse-ul (Screen / Keyboard / Mouse)\n- Parola / numele de utilizator (Password / Username)\n- Fișierul atașat / salvarea în cloud (Attached file / Cloud save)\n- Partajarea ecranului (Screen sharing în apeluri video)\n- Microfon oprit („Ești pe mut! Te rog să-ți pornești microfonul!”)\n- Conexiune la internet / rețea VPN securizată",
      "examples": [
        {
          "target": "Ești pe mut! Pornește microfonul pentru a putea vorbi în ședință.",
          "reading": "YESHTS pe MOOT! por-NESH-te mee-kro-FO-nool PEN-troo a poo-TYA vor-BEE in she-DEEN-tsuh.",
          "translation": "You're on mute! Turn on your microphone so you can speak in the meeting."
        }
      ],
      "mnemonics": [
        "Ești pe mut = You're on mute!"
      ],
      "culturalNotes": [
        "Romania consistently ranks among the top countries globally for high-speed fiber-optic internet infrastructure and broadband connectivity."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum avertizezi un coleg pe Teams sau Zoom că are microfonul oprit?",
          "options": [
            "Nu ai ecran.",
            "Închide laptopul.",
            "Ești pe mut! Pornește microfonul.",
            "Stinge lumina."
          ],
          "answerIndex": 2,
          "explanation": "Ești pe mut is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă \"partajarea ecranului\"?",
          "options": [
            "Afișarea ecranului propriu pentru ceilalți participanți la apel",
            "Ștergerea monitorului cu o cârpă",
            "Oprirea internetului",
            "Cumpărarea unui nou mouse"
          ],
          "answerIndex": 0,
          "explanation": "Partajarea ecranului is screen sharing."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se spune \"password\" în limba română?",
          "options": [
            "Fișierul",
            "Tastatura",
            "Cablul",
            "Parola"
          ],
          "answerIndex": 3,
          "explanation": "Parola is password.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Please enter your username and password to log in.\"",
          "options": [
            "Ecranul este murdar.",
            "Mouse-ul este defect.",
            "Vă rugăm să introduceți numele de utilizator și parola pentru a vă conecta.",
            "Cumpărați un nou laptop."
          ],
          "answerIndex": 2,
          "explanation": "Accurate interface instruction.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 3: Vocabular de tehnologie"
  },
  "ro-u12-l4": {
    "id": "ro-u12-l4",
    "unit": "ro-u12",
    "level": "A2",
    "objective": "Redactarea e-mailurilor profesionale și a corespondenței comerciale în limba română.",
    "presentation": {
      "explanation": "Structura unui e-mail profesional în România:\n1. Formula de adresare formală:\n   - Stimate domnule [Nume] / Stimată doamnă [Nume], (Dear Mr./Ms. [Name])\n   - Bună ziua tuturor, / Dragă echipă,\n2. Conținutul mesajului:\n   - Vă scriu pentru a vă transmite raportul de progres...\n   - Vă transmit în atașament oferta comercială actualizată.\n   - Vă stau la dispoziție pentru orice întrebări sau clarificări.\n3. Încheierea formală:\n   - Cu stimă, / Cu respect, / Cu cele mai bune gânduri,\n   - Vă mulțumesc anticipat pentru răspuns,",
      "examples": [
        {
          "target": "Stimate domnule Popescu,\nVă transmit în atașament raportul financiar revizuit. Vă stau la dispoziție pentru detalii suplimentare.\nCu stimă,\nElena Radu",
          "reading": "E-mail corporativ românesc",
          "translation": "Romanian professional business email."
        }
      ],
      "mnemonics": [
        "Cu stimă = The standard formal closing in Romanian professional correspondence!"
      ],
      "culturalNotes": [
        "In Romanian formal correspondence, use polite second-person pronouns \"dumneavoastră\" and capitalize \"Domnule / Doamnă\" in email greetings."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este formula de încheiere formală standard într-un e-mail de afaceri în România?",
          "options": [
            "Ne vedem la club",
            "Cu stimă, / Cu respect,",
            "Pa prietene",
            "Pa pa!"
          ],
          "answerIndex": 1,
          "explanation": "Cu stimă is the standard closing."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum menționați formal că trimiteți un document inclus în mesaj?",
          "options": [
            "Vă transmit în atașament documentul solicitat.",
            "Căutați pe internet.",
            "Nu am niciun fișier.",
            "Fișierul a dispărut."
          ],
          "answerIndex": 0,
          "explanation": "În atașament indicates email attachments."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce înseamnă formula \"Vă stau la dispoziție\"?",
          "options": [
            "Voi pleca în concediu",
            "Firma s-a închis",
            "Sunt disponibil să ofer informații suplimentare sau clarificări",
            "Nu mai răspund la mesaje"
          ],
          "answerIndex": 2,
          "explanation": "Vă stau la dispoziție means at your disposal.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Thank you for your prompt response and collaboration.\"",
          "options": [
            "Ați întârziat prea mult.",
            "Vă mulțumesc pentru răspunsul prompt și colaborare.",
            "Telefonul s-a descărcat.",
            "Nu am primit niciun mesaj."
          ],
          "answerIndex": 1,
          "explanation": "Accurate business gratitude.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 4: Stimate domnule Popescu,\nVă tr"
  },
  "ro-u12-l5": {
    "id": "ro-u12-l5",
    "unit": "ro-u12",
    "level": "A2",
    "objective": "Simularea unui interviu de angajare în România, prezentarea punctelor tari și a așteptărilor salariale.",
    "presentation": {
      "explanation": "Interviul de angajare în România (Procesul de recrutare):\n1. Întrebările recrutorului (HR / Manager tehnic):\n   - „Ne puteți povesti pe scurt despre experiența dumneavoastră profesională?”\n   - „Care sunt principalele dumneavoastră puncte forte?”\n   - „Care sunt așteptările dumneavoastră salariale (salariu net dorit)?”\n2. Răspunsurile candidatului:\n   - „Am peste patru ani de experiență în dezvoltare software și arhitecturi scalabile.”\n   - „Punctele mele forte sunt gândirea analitică, spiritul de echipă și orientarea spre rezultate.”\n   - „Îmi doresc să contribui la proiecte inovatoare alături de o echipă dedicată.”",
      "examples": [
        {
          "target": "Recrutor: „De ce ați ales să aplicați la compania noastră?”\nCandidat: „Sunt foarte atras de cultura inovatoare a echipei și de oportunitățile de dezvoltare tehnică.”",
          "reading": "Interviu de angajare România",
          "translation": "Interviewer: \"Why did you choose to apply to our company?\"\nCandidate: \"I am very attracted by the innovative team culture and technical growth opportunities.\""
        }
      ],
      "mnemonics": [
        "Salariu net = Net take-home salary in Romanian job negotiations!"
      ],
      "culturalNotes": [
        "In Romanian job interviews, salary negotiations are typically discussed in net monthly Euro or RON amounts (salariu net lunar)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă \"așteptări salariale\" la un interviu de angajare?",
          "options": [
            "Salariul pe care candidatul dorește să îl primească pentru postul respectiv",
            "Prețul biletului de tren",
            "Costul chiriei",
            "Impozitele firmei"
          ],
          "answerIndex": 0,
          "explanation": "Așteptări salariale is desired compensation."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum evidențiați abilitatea de a colabora eficient cu colegii?",
          "options": [
            "Lucrez doar dacă sunt forțat.",
            "Am spirit de echipă și abilități excelente de comunicare.",
            "Nu mă interesează proiectul.",
            "Nu vorbesc niciodată cu colegii."
          ],
          "answerIndex": 1,
          "explanation": "Teamwork competency highlight."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce document conține istoricul educațional și profesional necesar pentru angajare?",
          "options": [
            "Permisul de pescuit",
            "Curriculum Vitae",
            "Factura de gaze",
            "Chitanța de la magazin"
          ],
          "answerIndex": 1,
          "explanation": "Curriculum Vitae / CV.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"I have strong problem-solving and analytical skills.\"",
          "options": [
            "Am abilități analitice solide și capacitate de a rezolva probleme complexe.",
            "Nu știu să folosesc calculatorul.",
            "Nu vreau să am responsabilități.",
            "Compania s-a închis."
          ],
          "answerIndex": 0,
          "explanation": "Accurate competency statement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 5: Simularea unui interviu de angajare în România"
  },
  "ro-u13-l1": {
    "id": "ro-u13-l1",
    "unit": "ro-u13",
    "level": "A2",
    "objective": "Exprimarea hobby-urilor, a pasiunilor și a activităților în aer liber în limba română (Timp liber și drumeții).",
    "presentation": {
      "explanation": "Timpul liber și pasiunile în România:\n- Drumeții montane în Munții Carpați (Bucegi, Făgăraș, Retezat, Piatra Craiului)\n- Cântatul la un instrument (chitară, pian, vioară, nai - instrument tradițional românesc)\n- Fotografia de natură și peisaj (Photography)\n- Lectura cărților de ficțiune și filosofie (Reading)\n- Ciclismul și alergarea în parcurile urbane (Parcul Herăstrău/Regele Mihai I în București)\n\nStructuri cu A PLĂCEA / A ADORA / A FI PASIONAT DE:\n- „Sunt pasionat de drumețiile pe munte și fotografia de peisaj.”\n- „În timpul liber îmi place să cânt la chitară clasică.”",
      "examples": [
        {
          "target": "În timpul liber ador să fac drumeții în Munții Bucegi și să fac fotografii la apus.",
          "reading": "in TEEM-pool LEE-ber a-DOR suh fak droo-METS in MOON-tsee boo-CHEDZH.",
          "translation": "In my free time I adore hiking in the Bucegi Mountains and taking photos at sunset."
        }
      ],
      "mnemonics": [
        "Naiul = The Romanian pan flute, popularized globally by Gheorghe Zamfir!"
      ],
      "culturalNotes": [
        "The Carpathian Mountains offer some of Europe's most spectacular wilderness trails, welcoming hikers with traditional mountain refuges (cabane montane)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum spui în română că ești foarte pasionat de natură și munte?",
          "options": [
            "Nu-mi place muntele",
            "Stau doar în casă",
            "Am pierdut rucsacul",
            "Sunt pasionat de drumețiile montane și natură"
          ],
          "answerIndex": 3,
          "explanation": "Sunt pasionat de drumeții is exact."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este cel mai celebru instrument muzical tradițional românesc de suflat din trestie?",
          "options": [
            "Trompeta",
            "Toba mare",
            "Harpa",
            "Naiul românesc"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"Naiul românesc\". This directly applies the principle of: Exprimarea hobby-urilor, a pasiunilor și a activităților în aer liber în limba română (Timp liber și drumeții).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Unde se cazează drumeții pe traseele montane din Carpați?",
          "options": [
            "La cabane montane sau refugii",
            "Pe fundul lacului",
            "În peșteri fără ieșire",
            "În gări de tren"
          ],
          "answerIndex": 0,
          "explanation": "Cabane montane.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"In my spare time, I love playing the acoustic guitar.\"",
          "options": [
            "Vând chitare vechi.",
            "Muzica mă plictisește.",
            "Nu am timp liber.",
            "În timpul liber, îmi place să cânt la chitară acustică."
          ],
          "answerIndex": 3,
          "explanation": "Accurate hobby translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 1: Exprimarea hobby-urilor"
  },
  "ro-u13-l2": {
    "id": "ro-u13-l2",
    "unit": "ro-u13",
    "level": "A2",
    "objective": "Cultura sportivă românească, fotbalul, tenisul (Simona Halep), gimnastica (Nadia Comăneci) și fitness.",
    "presentation": {
      "explanation": "Sportul și marii campioni ai României:\n- Fotbalul (SuperLiga României, Arena Națională, Generația de Aur cu Gheorghe Hagi - \"Regele\")\n- Gimnastica artistică (Nadia Comăneci - prima notă de 10.00 perfect din istoria Jocurilor Olimpice la Montreal 1976)\n- Tenisul (Ilie Năstase, Simona Halep - campioană la Roland Garros și Wimbledon)\n- Canotajul și înotul (David Popovici - campion olimpic și recordmen mondial la 100m/200m liber)\n\nVocabular de meci:\n- A marca un gol / a egala / a câștiga campionatul / suporterii / tribuna",
      "examples": [
        {
          "target": "Am fost pe Arena Națională la derby și galeria a cântat neîncetat toate cele nouăzeci de minute.",
          "reading": "am FOST pe a-RE-na na-tsyo-NA-luh la DER-bee shee ga-le-REE-a a kuhn-TAT ne-in-che-TAT.",
          "translation": "We were at the National Arena for the derby and the fan section sang non-stop all ninety minutes."
        }
      ],
      "mnemonics": [
        "Nadia Comăneci = Perfect 10 at Montreal 1976! Gheorghe Hagi = \"Regele\" of Romanian football!"
      ],
      "culturalNotes": [
        "Romania possesses a legendary Olympic heritage in gymnastics, rowing, canoeing, and swimming."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cine a fost prima gimnastă din istoria Jocurilor Olimpice care a obținut nota 10.00 perfect?",
          "options": [
            "Nadia Comăneci",
            "Gabriela Szabo",
            "Simona Halep",
            "Elisabeta Lipă"
          ],
          "answerIndex": 0,
          "explanation": "Nadia Comăneci."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum este supranumit legendarul fotbalist român Gheorghe Hagi?",
          "options": [
            "„Regele” fotbalului românesc",
            "Profesorul",
            "Căpitanul",
            "Cavalerul"
          ],
          "answerIndex": 0,
          "explanation": "Gheorghe Hagi este „Regele”."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce tânăr înotător român a devenit campion olimpic și recordmen mondial la 100m și 200m liber?",
          "options": [
            "Ilie Năstase",
            "Ion Țiriac",
            "Gheorghe Popescu",
            "David Popovici"
          ],
          "answerIndex": 3,
          "explanation": "David Popovici.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Our team scored a goal in the 90th minute and won the championship.\"",
          "options": [
            "Meciul s-a anulat.",
            "Stadionul era gol.",
            "Echipa noastră a marcat un gol în minutul 90 și a câștigat campionatul.",
            "Am pierdut meciul ieri."
          ],
          "answerIndex": 2,
          "explanation": "Accurate sports championship translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 2: Cultura sportivă românească"
  },
  "ro-u13-l3": {
    "id": "ro-u13-l3",
    "unit": "ro-u13",
    "level": "A2",
    "objective": "Muzica, festivalurile culturale internaționale (George Enescu, Untold, Electric Castle) și muzee.",
    "presentation": {
      "explanation": "Arta, muzica și festivalurile din România:\n- Muzica clasică: Festivalul Internațional „George Enescu” (Ateneul Român din București)\n- Mari festivaluri de muzică contemporană: UNTOLD (Cluj-Napoca), Electric Castle (Castelul Bánffy), Neversea (Constanța)\n- Muzee celebre: Muzeul Național de Artă al României, Muzeul Satului „Dimitrie Gusti”, Castelul Peleș\n- Sculptura modernă: Constantin Brâncuși (Coloana Infinitului, Poarta Sărutului, Masa Tăcerii la Târgu Jiu)",
      "examples": [
        {
          "target": "Am participat la un concert extraordinar la Ateneul Român în cadrul Festivalului George Enescu.",
          "reading": "am par-tee-chee-PAT la oon kon-CHERT eks-tra-or-dee-NAR la a-te-NE-ool ro-MUYN.",
          "translation": "We attended an extraordinary concert at the Romanian Athenaeum during the George Enescu Festival."
        }
      ],
      "mnemonics": [
        "Constantin Brâncuși = Pioneer of modern abstract sculpture with \"The Endless Column\"!"
      ],
      "culturalNotes": [
        "The Romanian Athenaeum (Ateneul Român) in Bucharest is one of the most acoustically and architecturally magnificent concert halls in Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este cel mai mare festival de muzică electronică din România, desfășurat anual la Cluj-Napoca?",
          "options": [
            "Festivalul Enescu (Muzica)",
            "Oktoberfest (Muzica)",
            "UNTOLD Festival (Muzica)",
            "Carnavalul de la Rio (Muzica)"
          ],
          "answerIndex": 2,
          "explanation": "UNTOLD Festival."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cine a creat capodopera sculpturală „Coloana Infinitului” la Târgu Jiu?",
          "options": [
            "Constantin Brâncuși (Muzica)",
            "Nicolae Grigorescu (Muzica)",
            "Mihai Eminescu (Muzica)",
            "George Enescu (Muzica)"
          ],
          "answerIndex": 0,
          "explanation": "Constantin Brâncuși."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "În ce clădire istorică emblematică din București au loc concertele Festivalului George Enescu?",
          "options": [
            "Aeroportul Otopeni (Muzica)",
            "Arcul de Triumf (Muzica)",
            "Ateneul Român (Muzica)",
            "Gara de Nord (Muzica)"
          ],
          "answerIndex": 2,
          "explanation": "Ateneul Român.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"We bought tickets for the live music festival at the castle.\"",
          "options": [
            "Festivalul a fost anulat. (Muzica)",
            "Am cumpărat bilete pentru festivalul de muzică de la castel. (Muzica)",
            "Nu ascultăm muzică. (Muzica)",
            "Am pierdut biletele. (Muzica)"
          ],
          "answerIndex": 1,
          "explanation": "Accurate festival ticket translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 3: Muzica"
  },
  "ro-u13-l4": {
    "id": "ro-u13-l4",
    "unit": "ro-u13",
    "level": "A2",
    "objective": "Propunerea planurilor de ieșire, acceptarea cu entuziasm, refuzul politicos și stabilirea întâlnirilor („Ieșim?”, „Mă bag!”).",
    "presentation": {
      "explanation": "Planuri de ieșire și întâlniri între prieteni în România:\n1. Propunerea unei ieșiri:\n   - „Ai chef să ieșim la o cafea / la o bere în Centrul Vechi diseară?” (Ai chef? = Fancy going out?)\n   - „Ce zici dacă mergem la cinema sâmbătă?”\n2. Acceptarea cu entuziasm:\n   - „Super idee! Mă bag! / Vin cu mare drag!” (Count me in!)\n   - „Clar! La ce oră ne vedem?”\n3. Refuzul politicos și amânarea:\n   - „Aș veni cu mare plăcere, dar sunt prins cu serviciul diseară. Ce zici de duminică?”\n4. Stabilirea orei și locului:\n   - „Ne vedem în fața stației de metrou Piața Unirii la ora opt.”",
      "examples": [
        {
          "target": "—Ai chef să mergem la un film diseară?\n—Mă bag! Sună foarte bine, ne vedem la șapte și jumătate!",
          "reading": "Ieșire cu prietenii",
          "translation": "—Fancy going to a movie tonight?\n—I'm in! Sounds great, see you at 7:30!"
        }
      ],
      "mnemonics": [
        "AI CHEF? = Do you feel like / Fancy doing...? MĂ BAG! = I'm in / Count me in!"
      ],
      "culturalNotes": [
        "The Old Town (Centrul Vechi / Lipscani) in Bucharest is a vibrant pedestrian district packed with bustling cafés, restaurants, and lively music terraces."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă expresia colocvială românească „Mă bag!” când ești invitat la un eveniment?",
          "options": [
            "Nu vin deloc",
            "Sunt de acord! / Mă alătur cu drag! / I'm in!",
            "Sunt supărat",
            "Vreau să dorm"
          ],
          "answerIndex": 1,
          "explanation": "Mă bag! means I'm in."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum întrebi colocvial un prieten dacă are dispoziție să iasă în oraș?",
          "options": [
            "Ai chef să ieșim diseară în oraș?",
            "Ești obligat să vii",
            "Nu ieși niciodată",
            "Trebuie să pleci imediat"
          ],
          "answerIndex": 0,
          "explanation": "Ai chef să...? is standard."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este cartierul istoric pietonal din București renumit pentru cafenele și terase?",
          "options": [
            "Militari",
            "Centrul Vechi",
            "Berceni",
            "Pipera"
          ],
          "answerIndex": 1,
          "explanation": "Centrul Vechi (Lipscani).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Let's meet in front of the theater at eight PM.\"",
          "options": [
            "Ne vedem în fața teatrului la ora opt seara.",
            "Teatrul s-a închis ieri.",
            "Ora opt este prea târziu.",
            "Nu merg la teatru."
          ],
          "answerIndex": 0,
          "explanation": "Accurate meeting appointment translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 4: Propunerea planurilor de ieșire"
  },
  "ro-u13-l5": {
    "id": "ro-u13-l5",
    "unit": "ro-u13",
    "level": "A2",
    "objective": "Scrierea unei cronici și recenzii critice despre filme, piese de teatru, concerte sau cărți (Noul Val Românesc).",
    "presentation": {
      "explanation": "Recenzia culturală și cinematografia românească:\n- Noul Val Românesc în cinematografie (Romanian New Wave): Palme d'Or la Cannes („4 luni, 3 săptămâni și 2 zile” de Cristian Mungiu, filme de Cristi Puiu, Radu Jude)\n- Structura recenziei:\n  1. Detalii despre operă: Titlu, regizor/autor, actori principali, gen.\n  2. Sinopsis: „Filmul urmărește destinul captivant al...”\n  3. Analiză critică: Jocul actoricesc realist, regia meticuloasă, tensiunea psihologică și imaginea cinematografică.\n  4. Recomandare: „O capodoperă cinematografică de neratat. Notă: 10/10.”",
      "examples": [
        {
          "target": "Filmul „4 luni, 3 săptămâni și 2 zile” este o capodoperă a Noului Val Românesc, distins cu marele premiu Palme d'Or la Festivalul de la Cannes.",
          "reading": "Cronică de film românesc",
          "translation": "The film \"4 Months, 3 Weeks and 2 Days\" is a masterpiece of the Romanian New Wave, awarded the Palme d'Or at the Cannes Film Festival."
        }
      ],
      "mnemonics": [
        "O capodoperă de neratat = An unmissable masterpiece!"
      ],
      "culturalNotes": [
        "The Romanian New Wave is celebrated worldwide for its gritty realism, continuous long takes, dark humor, and acute moral scrutiny of society."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce film românesc regizat de Cristian Mungiu a câștigat prestigiosul trofeu Palme d'Or la Cannes în 2007?",
          "options": [
            "4 luni, 3 săptămâni și 2 zile",
            "Moartea domnului Lăzărescu",
            "Aferim!",
            "Poziția copilului"
          ],
          "answerIndex": 0,
          "explanation": "4 luni, 3 săptămâni și 2 zile."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă sintagma „o capodoperă de neratat” într-o recenzie?",
          "options": [
            "O piesă anulată",
            "O carte fără text",
            "O lucrare artistică de excepție pe care nimeni nu ar trebui să o rateze",
            "Un film foarte plictisitor"
          ],
          "answerIndex": 2,
          "explanation": "Capodoperă de neratat means unmissable masterpiece."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Prin ce se remarcă stilistic filmele din „Noul Val Românesc”?",
          "options": [
            "Realism autentic, cadre lungi și profunzime psihologică",
            "Efecte speciale SF exagerate",
            "Desene animate fără dialog",
            "Muzică disco continuă"
          ],
          "answerIndex": 0,
          "explanation": "Realism, long takes, psychological depth.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"The narrative is gripping, intense, and deeply moving.\"",
          "options": [
            "Nu am înțeles nimic.",
            "Povestea nu are sens.",
            "Filmul s-a terminat brusc.",
            "Narațiunea este captivantă, intensă și profund emoționantă."
          ],
          "answerIndex": 3,
          "explanation": "Accurate review translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 5: Scrierea unei cronici și recenzii critice despre filme"
  },
  "ro-u14-l1": {
    "id": "ro-u14-l1",
    "unit": "ro-u14",
    "level": "A2",
    "objective": "Vocabular de aeroport în România (Aeroportul Henri Coandă Otopeni / Cluj-Napoca), formalități de îmbarcare și securitate.",
    "presentation": {
      "explanation": "La aeroport în România (Aeroportul Internațional Henri Coandă - OTP):\n- Permisul de îmbarcare / cartea de îmbarcare (Boarding pass pe telefon)\n- Biroul de check-in și predarea bagajelor de cală (Baggage drop-off)\n- Bagajul de mână (Carry-on)\n- Controlul de securitate (Security check: scoaterea laptopului și a lichidelor)\n- Poarta de îmbarcare (Gate) / Decolarea și aterizarea zborului\n- Sala de preluare a bagajelor (Banda de bagaje) și vama",
      "examples": [
        {
          "target": "Vă rugăm să pregătiți cartea de îmbarcare și pașaportul pentru controlul de securitate.",
          "reading": "vuh roo-GUHM suh pre-guh-TEETS KAR-tya de ym-bar-KA-re...",
          "translation": "Please prepare your boarding pass and passport for the security check."
        }
      ],
      "mnemonics": [
        "Cartea de îmbarcare = Boarding pass! Poarta de îmbarcare = Boarding gate!"
      ],
      "culturalNotes": [
        "Henri Coandă International Airport is named after the legendary Romanian aviation pioneer Henri Coandă, discoverer of the fluid dynamics \"Coandă effect\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește documentul care vă permite să urcați la bordul avionului?",
          "options": [
            "Permisul de pescuit",
            "Factura de gaz",
            "Biletul de tramvai",
            "Cartea / permisul de îmbarcare"
          ],
          "answerIndex": 3,
          "explanation": "Cartea de îmbarcare is boarding pass."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Traduceți: \"The flight to London is delayed by 30 minutes.\"",
          "options": [
            "Avionul a decolat la timp.",
            "Nu există zboruri spre Londra.",
            "Aeroportul este închis.",
            "Zborul spre Londra are o întârziere de treizeci de minute."
          ],
          "answerIndex": 3,
          "explanation": "Accurate flight delay translation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Unde ridică pasagerii bagajele de cală după aterizare?",
          "options": [
            "În cabina pilotului",
            "La biroul de check-in",
            "Pe pista de aterizare",
            "În sala de preluare a bagajelor"
          ],
          "answerIndex": 3,
          "explanation": "Baggage claim.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Please proceed to gate 14 immediately for boarding.\"",
          "options": [
            "Părăsiți aeroportul.",
            "Cumpărați un bilet nou.",
            "Vă rugăm să vă îndreptați imediat spre poarta 14 pentru îmbarcare.",
            "Zborul a aterizat."
          ],
          "answerIndex": 2,
          "explanation": "Accurate boarding call translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 1: Vă rugăm să pregătiți cartea d"
  },
  "ro-u14-l2": {
    "id": "ro-u14-l2",
    "unit": "ro-u14",
    "level": "A2",
    "objective": "Rezervarea cazării în România: Pensiuni tradiționale în Maramureș/Bucovina, cabane și hoteluri.",
    "presentation": {
      "explanation": "Tipuri de cazare în România:\n- Pensiunea agroturistică tradițională (în Maramureș, Bucovina, Transilvania)\n- Cabane montane în Carpați\n- Hoteluri de oraș și boutique hoteluri\n- La recepție (Check-in / Check-out):\n  - „Bună ziua, am o rezervare pe numele...”\n  - „Micul dejun este inclus în prețul camerei?”\n  - „Care este parola pentru rețeaua wi-fi?”\n  - „Cartela magnetică / cheia camerei”",
      "examples": [
        {
          "target": "Bună ziua! Avem o rezervare pentru trei nopți la o pensiune tradițională din Maramureș.",
          "reading": "BOO-nuh ZYOO-a! a-VEM o re-zer-VA-re PEN-troo TREY NOPTS...",
          "translation": "Good day! We have a reservation for three nights at a traditional guesthouse in Maramureș."
        }
      ],
      "mnemonics": [
        "Pensiune agroturistică = Traditional countryside guesthouse with authentic home cooking!"
      ],
      "culturalNotes": [
        "Romanian countryside pensions in Maramureș and Bucovina are world-famous for their wooden architecture, folkloric hospitality, and organic home-cooked feasts."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum întrebați la recepție dacă micul dejun este inclus?",
          "options": [
            "Micul dejun este inclus în prețul camerei?",
            "Cât costă patul?",
            "Nu vreau să mănânc",
            "Restaurantul e închis"
          ],
          "answerIndex": 0,
          "explanation": "Micul dejun este inclus... is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce tip de cazare rurală autentică este renumit în Maramureș și Transilvania?",
          "options": [
            "Pensiunea agroturistică tradițională",
            "Un zgârie-nori de sticlă",
            "O cazarmă militară",
            "O fabrică"
          ],
          "answerIndex": 0,
          "explanation": "Pensiune agroturistică."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum spuneți la recepție că aveți o cameră rezervată?",
          "options": [
            "Vreau să cumpăr hotelul",
            "Nu știu unde mă aflu",
            "Am o rezervare pe numele",
            "Camera este gratuită"
          ],
          "answerIndex": 2,
          "explanation": "Am o rezervare pe numele...",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Could you please give me an extra keycard and the wifi password?\"",
          "options": [
            "Camera este murdară.",
            "Ați putea să-mi dați o cartelă suplimentară și parola de wi-fi, vă rog?",
            "Micul dejun s-a terminat.",
            "Nu am rezervare."
          ],
          "answerIndex": 1,
          "explanation": "Accurate reception request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Rezervarea cazării în România"
  },
  "ro-u14-l3": {
    "id": "ro-u14-l3",
    "unit": "ro-u14",
    "level": "A2",
    "objective": "Călătoria cu trenul în România: CFR Călători, Gara de Nord, InterRegio, bilete și locuri rezervate.",
    "presentation": {
      "explanation": "Transportul feroviar în România (CFR Călători):\n- Gara de Nord din București (Cea mai mare gară feroviară din România)\n- Tipuri de trenuri: Regio (trenuri locale), InterRegio (IR - trenuri rapide de lungă distanță), InterCity (IC)\n- Bilete: Bilet doar dus / Bilet dus-întors (One-way / Round-trip)\n- Vagon de clasa 1 / clasa a 2-a / vagon de dormit (sleeper car) / cușetă\n- Pe peron: Linia (peronul), numărul vagonului și numărul locului rezervat",
      "examples": [
        {
          "target": "Trenul InterRegio spre Brașov va pleca de la linia numărul trei peste cincisprezece minute.",
          "reading": "TRE-nool in-ter-RE-jyo spre bra-SHOV va ple-KA de la LEE-nya NOO-muh-rool TREY...",
          "translation": "The InterRegio train to Brașov will depart from platform track number three in fifteen minutes."
        }
      ],
      "mnemonics": [
        "CFR = Căile Ferate Române! Gara de Nord = Bucharest central rail terminal!"
      ],
      "culturalNotes": [
        "The scenic train journey from Bucharest to Brașov winds through the dramatic Prahova Valley (Sinaia, Bușteni) offering breathtaking views of the Bucegi Mountains."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este cea mai mare și importantă gară feroviară din București?",
          "options": [
            "Gara Obor",
            "Gara Basarab",
            "Gara de Nord",
            "Gara de Est"
          ],
          "answerIndex": 2,
          "explanation": "Gara de Nord."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum cereți la casa de bilete un bilet dus-întors?",
          "options": [
            "Aș dori un bilet dus-întors pentru Brașov, vă rog.",
            "Vreau un bilet doar dus",
            "Gara este închisă",
            "Nu vreau să merg cu trenul"
          ],
          "answerIndex": 0,
          "explanation": "Bilet dus-întors is round-trip."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce categorie de tren CFR este utilizată pentru călătorii rapide pe distanțe lungi între marile orașe?",
          "options": [
            "Metrou subteran",
            "InterRegio",
            "Drezină manuală",
            "Tren marfar"
          ],
          "answerIndex": 1,
          "explanation": "InterRegio / InterCity.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Please check your train ticket for the coach and seat number.\"",
          "options": [
            "Vă rugăm să verificați pe bilet numărul vagonului și al locului.",
            "Coborâți de pe peron.",
            "Nu mai sunt bilete.",
            "Trenul s-a anulat."
          ],
          "answerIndex": 0,
          "explanation": "Accurate train boarding instruction.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Călătoria cu trenul în România"
  },
  "ro-u14-l4": {
    "id": "ro-u14-l4",
    "unit": "ro-u14",
    "level": "A2",
    "objective": "Închirierea de mașini în România, condusul pe Transfăgărășan / Transalpina, benzinării și rovinieta.",
    "presentation": {
      "explanation": "Condusul și închirierea de mașini în România:\n- Compania de închirieri auto (Rent-a-car: asigurare completă fără franșiză CASCO)\n- Rovinieta (Rovinieta = Taxa obligatorie de drum pentru utilizarea rețelei de drumuri naționale și autostrăzi)\n- Șosele alpine legendare: Transfăgărășanul (DN7C) și Transalpina (DN67C - cea mai înaltă șosea din România, 2.145m)\n- La benzinărie (OMV, Petrom, Rompetrol, Mol):\n  - Benzină fără plumb 95 / 98\n  - Motorină (Diesel)\n  - „Plinul cu benzină 95, vă rog!”",
      "examples": [
        {
          "target": "Faceți plinul cu benzină nouăzeci și cinci, vă rog. Plătesc cu cardul bancar la casă.",
          "reading": "FA-chets PLEE-nool koo ben-ZEE-nuh... puh-TESK koo KAR-dool.",
          "translation": "Fill it up with 95 petrol, please. I'll pay by bank card at the register."
        }
      ],
      "mnemonics": [
        "Transfăgărășan = Dubbed by Top Gear \"the best driving road in the world\"!"
      ],
      "culturalNotes": [
        "The Transfăgărășan highway winds through the highest peaks of the Făgăraș Mountains, crossing glacial Lake Bâlea with hairpin turns and dramatic viaducts."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește taxa obligatorie de drum pentru circulația pe rețeaua rutieră din România?",
          "options": [
            "Bonul fiscal (nchirierea de maini n Romnia)",
            "Rovinieta (nchirierea de maini n Romnia)",
            "Tichetul de parcare (nchirierea de maini n Romnia)",
            "Biletul de autobuz (nchirierea de maini n Romnia)"
          ],
          "answerIndex": 1,
          "explanation": "Rovinieta."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este spectaculoasa șosea montană din România considerată una dintre cele mai frumoase din lume?",
          "options": [
            "Transfăgărășanul (nchirierea de maini n Romnia)",
            "Calea Victoriei (nchirierea de maini n Romnia)",
            "Bulevardul Unirii (nchirierea de maini n Romnia)",
            "Autostrada A1 (nchirierea de maini n Romnia)"
          ],
          "answerIndex": 0,
          "explanation": "Transfăgărășanul."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum cereți la benzinărie să vă umple complet rezervorul mașinii?",
          "options": [
            "Plinul cu benzină 95, vă rog! (nchirierea de maini n Romnia)",
            "Nu puneți combustibil (nchirierea de maini n Romnia)",
            "Goliți rezervorul (nchirierea de maini n Romnia)",
            "Spălați motorul cu apă (nchirierea de maini n Romnia)"
          ],
          "answerIndex": 0,
          "explanation": "Plinul, vă rog!",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"We rented a car to drive across the spectacular Transfăgărășan alpine highway.\"",
          "options": [
            "Nu există drumuri la munte. (nchirierea de maini n Romnia)",
            "Am vândut mașina. (nchirierea de maini n Romnia)",
            "Mașina este defectă. (nchirierea de maini n Romnia)",
            "Am închiriat o mașină pentru a conduce pe spectaculosul drum alpin Transfăgărășan. (nchirierea de maini n Romnia)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate road trip translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 4: Închirierea de mașini în România"
  },
  "ro-u14-l5": {
    "id": "ro-u14-l5",
    "unit": "ro-u14",
    "level": "A2",
    "objective": "Rezolvarea problemelor de călătorie: bagaje pierdute, anulări de zboruri (Drepturile pasagerilor UE), asigurare de călătorie.",
    "presentation": {
      "explanation": "Gestionarea problemelor de călătorie în România:\n- La biroul de bagaje pierdute (Lost & Found) de la Otopeni:\n  - „Valiza mea nu a apărut pe banda de bagaje.”\n  - Completarea raportului PIR (Property Irregularity Report)\n- Drepturile pasagerilor europeni (Regulamentul CE 261/2004: compensații între 250 € și 600 € pentru anulări sau întârzieri de peste 3 ore)\n- Asigurarea medicală de călătorie și Cardul European de Asigurări Sociale de Sănătate (CEASS)\n- Reclamații la ANPC (Autoritatea Națională pentru Protecția Consumatorilor)",
      "examples": [
        {
          "target": "Zborul meu a fost anulat. În conformitate cu Regulamentul European, solicit reprogramarea imediată și despăgubirile legale.",
          "reading": "Reclamație drepturi pasageri UE",
          "translation": "My flight was cancelled. In accordance with European Regulation, I request immediate rebooking and statutory compensation."
        }
      ],
      "mnemonics": [
        "Regulamentul CE 261/2004 = Guaranteed compensation for flight cancellations across the EU!"
      ],
      "culturalNotes": [
        "As an EU member state, air travel in Romania is fully governed by strict EU passenger rights regulations guaranteeing meal vouchers, hotels, and statutory compensation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce formular trebuie completat la aeroport dacă bagajul de cală nu sosește la destinație?",
          "options": [
            "Raportul de neregularitate a bagajului",
            "Un contract de muncă",
            "Un bilet de loterie",
            "O diplomă de absolvire"
          ],
          "answerIndex": 0,
          "explanation": "PIR (Property Irregularity Report)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce drepturi au pasagerii în caz de întârziere majoră a zborului în Uniunea Europeană?",
          "options": [
            "Să plătească o taxă",
            "Doar un pahar cu apă",
            "Dreptul la asistență gratuită",
            "Niciun drept"
          ],
          "answerIndex": 2,
          "explanation": "EU passenger rights CE 261/2004."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este instituția din România care protejează consumatorii și turiștii în caz de abuzuri?",
          "options": [
            "Inspectoratul Școlar",
            "Ministerul Agriculturii",
            "Banca Națională",
            "ANPC"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"ANPC\". This directly applies the principle of: Rezolvarea problemelor de călătorie: bagaje pierdute, anulări de zboruri (Drepturile pasagerilor UE), asigurare de călătorie..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"My suitcase is damaged and the handle is completely broken.\"",
          "options": [
            "Nu am nicio valiză.",
            "Valiza mea este nouă și frumoasă.",
            "Valiza mea este deteriorată și mânerul este complet rupt.",
            "Bagajele au sosit la timp."
          ],
          "answerIndex": 2,
          "explanation": "Accurate damage claim translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Rezolvarea problemelor de călătorie"
  },
  "ro-u15-l1": {
    "id": "ro-u15-l1",
    "unit": "ro-u15",
    "level": "A2",
    "objective": "Vocabular de îmbrăcăminte, magazine de modă, mărimi și materiale textile în România (Cumpărături la mall).",
    "presentation": {
      "explanation": "Haine și modă în România (Mall-uri din București, Cluj, Timișoara, Iași):\n- Articole vestimentare: Cămașa / tricoul / pantalonii / blugii (jeans) / puloverul / jacheta / paltonul / costumul / rochia / fusta\n- Încălțăminte: Pantofii de piele / adidașii / pantofii sport / ghetele / cizmele / sandalele\n- Materiale: Bumbac 100% (cotton), lână (wool), mătase (silk), in (linen), piele naturală (leather)\n- Mărimi: Mărimea S (mică), M (medie), L (mare), XL (foarte mare) / Număr la încălțăminte (ex. „Port mărimea 42 la pantofi.”)",
      "examples": [
        {
          "target": "Mă scuzați, aveți această cămașă din in natural în mărimea M sau pe culoarea albastră?",
          "reading": "muh skoo-ZATS, a-VETS a-CHYAS-tuh kuh-MA-shuh...",
          "translation": "Excuse me, do you have this natural linen shirt in size M or in blue?"
        }
      ],
      "mnemonics": [
        "Adidași = Colloquial Romanian term for athletic sneakers (originating from Adidas)!"
      ],
      "culturalNotes": [
        "Modern shopping malls in Romania (AFI Palace Cotroceni, Băneasa Shopping City, Iulius Mall) are buzzing social and retail destinations."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numesc colocvial pantofii sport / sneakers în limba română?",
          "options": [
            "Cravate",
            "Pălării",
            "Mănuși",
            "Adidași"
          ],
          "answerIndex": 3,
          "explanation": "Adidași is colloquial for sneakers."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum întrebați politicos dacă există o mărime mai mare?",
          "options": [
            "Haina este urâtă",
            "Nu vreau haine",
            "Magazinul s-a închis",
            "Aveți această haină într-o mărime mai mare?"
          ],
          "answerIndex": 3,
          "explanation": "Aveți această haină într-o mărime mai mare? is standard."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este cel mai căutat material natural vegetal pentru hainele de vară răcoroase?",
          "options": [
            "Nailonul gros",
            "Plasticul",
            "Inul și bumbacul natural",
            "Cauciucul"
          ],
          "answerIndex": 2,
          "explanation": "Inul și bumbacul.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"This pure wool coat is very warm and elegant.\"",
          "options": [
            "Paltonul este din hârtie.",
            "Acest palton din lână pură este foarte călduros și elegant.",
            "Magazinul nu are haine.",
            "Nu port palton."
          ],
          "answerIndex": 1,
          "explanation": "Accurate coat description translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 1: Vocabular de îmbrăcăminte"
  },
  "ro-u15-l2": {
    "id": "ro-u15-l2",
    "unit": "ro-u15",
    "level": "A2",
    "objective": "Cabina de probă, probarea hainelor, solicitarea altei mărimi și aprecierea ținutei („Îmi vine perfect!”, „Îmi este strâmt”).",
    "presentation": {
      "explanation": "În cabina de probă (Fitting room):\n- „Unde sunt cabinele de probă, vă rog?”\n- Exprimarea potrivirii mărimii:\n  - „Îmi vine perfect / turnat!” (It fits like a glove!)\n  - „Îmi este prea larg / mare.” (Too loose/big.)\n  - „Îmi este prea strâmt / mic în talie.” (Too tight/small in the waist.)\n  - „Mâneca este prea lungă / scurtă.” (Sleeve too long/short.)\n- „Culoarea aceasta te prinde de minune!” (That color looks wonderful on you!)\n- „Puteți să-mi aduceți o mărime mai mică la cabină?”",
      "examples": [
        {
          "target": "Merg la cabina de probă să probez acest sacou. Privește, îmi vine turnat!",
          "reading": "MERG la ka-BEE-na de PRO-buh...",
          "translation": "I am going to the fitting room to try on this blazer. Look, it fits me like a glove!"
        }
      ],
      "mnemonics": [
        "Îmi vine turnat = Romanian idiom for \"It fits like a glove / perfectly tailored!\""
      ],
      "culturalNotes": [
        "In Romanian fashion boutiques, sales consultants readily assist at fitting rooms (cabine de probă), fetching alternative color palettes and sizes."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă expresia românească „Rochia îți vine turnată”?",
          "options": [
            "Rochia are o croială impecabilă și se potrivește perfect pe corp (Cabina de prob)",
            "Rochia este prea scumpă (Cabina de prob)",
            "Rochia este pătată (Cabina de prob)",
            "Rochia este ruptă (Cabina de prob)"
          ],
          "answerIndex": 0,
          "explanation": "Îți vine turnată means fits like a glove."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unde probează clienții hainele înainte de cumpărare?",
          "options": [
            "În cabina de probă (Cabina de prob)",
            "La casa de marcat (Cabina de prob)",
            "În vitrină (Cabina de prob)",
            "Pe stradă (Cabina de prob)"
          ],
          "answerIndex": 0,
          "explanation": "În cabina de probă."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce înseamnă când o persoană spune: „Această culoare te prinde de minune”?",
          "options": [
            "Culoarea este urâtă (Cabina de prob)",
            "Această culoare se potrivește deosebit de bine cu înfățișarea ta (Cabina de prob)",
            "Nu-mi place haina (Cabina de prob)",
            "Haina este murdară (Cabina de prob)"
          ],
          "answerIndex": 1,
          "explanation": "Te prinde de minune means suits you wonderfully.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"The trousers are too tight; could you bring me size 40?\"",
          "options": [
            "Pantalonii sunt prea strâmți; ați putea să-mi aduceți mărimea 40? (Cabina de prob)",
            "Nu cumpăr pantaloni. (Cabina de prob)",
            "Magazinul nu are cabine. (Cabina de prob)",
            "Pantalonii sunt ieftini. (Cabina de prob)"
          ],
          "answerIndex": 0,
          "explanation": "Accurate sizing request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 2: Cabina de probă"
  },
  "ro-u15-l3": {
    "id": "ro-u15-l3",
    "unit": "ro-u15",
    "level": "A2",
    "objective": "Sezoanele de reduceri, promoții, plata la casă (card contactless, plata cu telefonul, numerar) și bonul fiscal.",
    "presentation": {
      "explanation": "Reduceri și plata cumpărăturilor în România:\n- Sezoanele de soldare și reduceri: Reducerile de iarnă / vară, Black Friday (foarte popular în noiembrie)\n- Oferte: 40% reducere / lichidare de stoc / promoție specială\n- La casa de marcat (Plată):\n  - „Cât costă în total?”\n  - „Plătiți cu cardul sau numerar (cash)?”\n  - Plata contactless cu cardul, telefonul (Apple Pay/Google Pay) sau ceasul inteligent\n  - Bonul fiscal și factura cu cod TVA\n  - „Doriți o pungă de hârtie la 50 de bani?”",
      "examples": [
        {
          "target": "Voi plăti cu cardul contactless. Vă rog să-mi dați și bonul fiscal pentru garanție.",
          "reading": "VOY pluh-TEE koo KAR-dool kon-TAKT-les...",
          "translation": "I will pay with contactless card. Please give me the fiscal receipt for warranty purposes."
        }
      ],
      "mnemonics": [
        "Bonul fiscal = The official fiscal receipt with tax code!"
      ],
      "culturalNotes": [
        "Contactless card and mobile payments (Apple Pay, Google Pay) have virtually 100% penetration across supermarkets, cafes, and shops throughout Romania."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește documentul fiscal pe care îl primiți la casă după achitarea cumpărăturilor?",
          "options": [
            "Permisul auto",
            "Bonul fiscal",
            "Biletul de tren",
            "Cartea de identitate"
          ],
          "answerIndex": 1,
          "explanation": "Bonul fiscal."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum întreabă casierul despre modalitatea de plată?",
          "options": [
            "„Plătiți cu cardul sau numerar?”",
            "„Unde mergeți?”",
            "„Aveți mașină?”",
            "„Cine sunteți?”"
          ],
          "answerIndex": 0,
          "explanation": "„Plătiți cu cardul sau numerar?”"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este cel mai popular eveniment anual de reduceri masive de prețuri în România în luna noiembrie?",
          "options": [
            "Black Friday",
            "Ziua Muncii",
            "Festivalul Zăpezii",
            "Sărbătoarea Paștelui"
          ],
          "answerIndex": 0,
          "explanation": "Black Friday.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Can I pay contactless with my credit card or phone?\"",
          "options": [
            "Cardul este blocat.",
            "Nu am bani de plată.",
            "Nu vreau să plătesc.",
            "Pot plăti contactless cu cardul de credit sau cu telefonul?"
          ],
          "answerIndex": 3,
          "explanation": "Accurate contactless payment inquiry.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 3: Sezoanele de reduceri"
  },
  "ro-u15-l4": {
    "id": "ro-u15-l4",
    "unit": "ro-u15",
    "level": "A2",
    "objective": "Piețe tradiționale agroalimentare (Piața Obor în București, Piața Cibin în Sibiu), brânzeturi tradiționale și micii de la Obor.",
    "presentation": {
      "explanation": "Piețe agroalimentare și tradiții culinare în România:\n- Piața Obor din București (Cea mai mare și veche piață agroalimentară din România, cu tarabe de legume, fructe, flori și meșteșugari)\n- Faimoșii mici de la Obor (Mici suculenți la grătar cu muștar și pâine proaspătă - un ritual de weekend)\n- Brânzeturi tradiționale românești: Telemea de Sibiu (DOP / IGP), brânză de burduf în coajă de brad, cașcaval afumat, urdă\n- Târguri de antichități și meșteșuguri: Muzeul Țăranului Român (târguri meșteșugărești cu ceramică de Horezu și ii tradiționale)",
      "examples": [
        {
          "target": "Sâmbătă dimineață am fost la Piața Obor să cumpărăm telemea de Sibiu proaspătă și să mâncăm mici calzi cu muștar.",
          "reading": "SUHM-buh-tuh dee-mee-NYAT-suh am FOST la PYA-tsa o-BOR...",
          "translation": "On Saturday morning we went to Obor Market to buy fresh Sibiu telemea cheese and eat warm mici with mustard."
        }
      ],
      "mnemonics": [
        "Micii de la Obor + Telemea de Sibiu = The iconic Bucharest marketplace culinary tradition!"
      ],
      "culturalNotes": [
        "Piața Obor in Bucharest dates back over three centuries, famous for its lively producer stalls and the historic terrace selling sizzling Romanian grilled minced meat rolls (mici)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este cea mai mare și emblematică piață agroalimentară tradițională din București?",
          "options": [
            "Piața Romană",
            "Piața Obor",
            "Piața Universității",
            "Piața Victoriei"
          ],
          "answerIndex": 1,
          "explanation": "Piața Obor."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce fel de mâncare tradițională românească la grătar este celebră la terasele din Piața Obor?",
          "options": [
            "Micii românești cu muștar și pâine",
            "Pizza congelată",
            "Tacos mexicani",
            "Sushi cu somon"
          ],
          "answerIndex": 0,
          "explanation": "Micii românești cu muștar."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este brânza sărată de oaie cu Indicație Geografică Protejată renumită în România?",
          "options": [
            "Gouda",
            "Gorgonzola",
            "Cheddar",
            "Telemeaua de Sibiu"
          ],
          "answerIndex": 3,
          "explanation": "Telemeaua de Sibiu.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Please give me half a kilogram of smoked cheese and two kilos of fresh apples.\"",
          "options": [
            "Vindeți-mi ziare vechi.",
            "Piața este închisă.",
            "Vă rog să-mi dați o jumătate de kilogram de cașcaval afumat și două kilograme de mere proaspete.",
            "Nu-mi place brânza."
          ],
          "answerIndex": 2,
          "explanation": "Accurate market counter purchase.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 4: Piețe tradiționale agroalimentare (Piața Obor în București"
  },
  "ro-u15-l5": {
    "id": "ro-u15-l5",
    "unit": "ro-u15",
    "level": "A2",
    "objective": "Politica de retur, dreptul de retragere la cumpărături online (eMAG / ANPC), garanția de 2 ani și cumpărături Tax-Free.",
    "presentation": {
      "explanation": "Drepturile consumatorilor și returul în România:\n- Cumpărături online și e-commerce: eMAG (cea mai mare platformă de e-commerce din România), Fashion Days, Sameday Easybox (lockere automate de livrare 24/7)\n- Dreptul legal de retragere: 14 zile calendaristice garantate prin lege pentru retur necondiționat la cumpărături online (OUG 34/2014)\n- Schimbul de produse în magazine fizice: 14-30 de zile cu bonul fiscal și produsul în stare intactă cu etichete\n- Garanția legală de conformitate: 2 ani de zile pentru produse de folosință îndelungată\n- Tax-Free Shopping pentru turiștii non-UE la aeroportul Otopeni",
      "examples": [
        {
          "target": "Doresc să returnez acest produs comandat online în termenul legal de paisprezece zile și să primesc banii înapoi.",
          "reading": "Retur comandă online",
          "translation": "I wish to return this product ordered online within the statutory 14-day period and receive a refund."
        }
      ],
      "mnemonics": [
        "Easybox = Automated 24/7 delivery & return locker lockers ubiquitous across Romania!"
      ],
      "culturalNotes": [
        "The automated delivery locker system (Easybox) pioneered by Sameday/eMAG revolutionized package pickup and frictionless returns across all Romanian cities."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este termenul legal minim garantat de lege în România pentru returnarea cumpărăturilor online fără penalități?",
          "options": [
            "14 zile calendaristice",
            "Doar 1 oră",
            "5 ani",
            "Nu există drept de retur"
          ],
          "answerIndex": 0,
          "explanation": "14 zile calendaristice."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum se numesc dulapurile electronice securizate stradale de unde poți ridica sau returna coletele non-stop?",
          "options": [
            "Dulapuri de haine",
            "Cabine telefonice",
            "Easybox",
            "Cutii poștale clasice"
          ],
          "answerIndex": 2,
          "explanation": "Correct answer: \"Easybox\". This directly applies the principle of: Politica de retur, dreptul de retragere la cumpărături online (eMAG / ANPC), garanția de 2 ani și cumpărături Tax-Free.."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este perioada legală de garanție de conformitate pentru produsele electronice în România conform normelor UE?",
          "options": [
            "10 zile",
            "1 lună",
            "2 ani de zile",
            "Nicio garanție"
          ],
          "answerIndex": 2,
          "explanation": "2 ani de garanție legală.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"I received a damaged item and I request an immediate replacement or full refund.\"",
          "options": [
            "Produsul este perfect.",
            "Am primit un produs deteriorat și solicit înlocuirea imediată sau rambursarea integrală.",
            "Nu am comandat nimic.",
            "Livrarea a fost anulată."
          ],
          "answerIndex": 1,
          "explanation": "Accurate e-commerce return translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 5: Politica de retur"
  },
  "ro-u16-l1": {
    "id": "ro-u16-l1",
    "unit": "ro-u16",
    "level": "A2",
    "objective": "Prognoza meteo, fenomene meteorologice, temperaturi și vânturi specifice (Crivățul) în România.",
    "presentation": {
      "explanation": "Vremea și fenomenele meteo în România:\n- Starea vremii:\n  - „Este însorit / senin / înnorat / ceață / plouă / ninge / bate vântul.”\n  - „Plouă cu găleata / torențial!” (It's pouring cats and dogs!)\n- Fenomene: Tunete, fulgere, grindină, polei pe șosele, curcubeu\n- Temperaturi: Grade Celsius (°C: „Temperatura maximă va atinge 26 de grade Celsius.”)\n- Vântul legendar al iernii: Crivățul (Vânt rece și violent dinspre est care aduce viscole și ger năpraznic în Moldova și Muntenia)",
      "examples": [
        {
          "target": "Astăzi vremea va fi frumoasă și însorită în toată țara, cu temperaturi maxime de până la douăzeci și șapte de grade.",
          "reading": "as-TUHZI VRE-mya va FI froo-MOA-suh...",
          "translation": "Today the weather will be pleasant and sunny throughout the country, with highs up to 27 degrees."
        }
      ],
      "mnemonics": [
        "Crivățul = The fierce biting eastern winter blizzard wind of Romania!",
        "Plouă cu găleata = Pouring with buckets!"
      ],
      "culturalNotes": [
        "In Romanian winter folklore, the fierce Crivăț wind brings heavy blizzards and sub-zero frosts across the eastern plains, celebrated in the classic poetry of Vasile Alecsandri."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă expresia românească „Plouă cu găleata”?",
          "options": [
            "Ninge mărunt (Prognoza meteo)",
            "Este soare puternic (Prognoza meteo)",
            "Cade rouă (Prognoza meteo)",
            "Plouă torențial, foarte puternic și abundent (Prognoza meteo)"
          ],
          "answerIndex": 3,
          "explanation": "Plouă cu găleata means heavy pouring rain."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum se numește vântul rece și aspru din est care aduce viscol și ger cumplit în timpul iernii în România?",
          "options": [
            "Breeze-ul (Prognoza meteo)",
            "Monsoonul (Prognoza meteo)",
            "Sirocco (Prognoza meteo)",
            "Crivățul (Prognoza meteo)"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"Crivățul (Prognoza meteo)\". This directly applies the principle of: Prognoza meteo, fenomene meteorologice, temperaturi și vânturi specifice (Crivățul) în România.."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se numește stratul subțire și periculos de gheață transparentă formată pe carosabil iarna?",
          "options": [
            "Bruma (Prognoza meteo)",
            "Poleiul (Prognoza meteo)",
            "Roua (Prognoza meteo)",
            "Chiciura (Prognoza meteo)"
          ],
          "answerIndex": 1,
          "explanation": "Poleiul (polei).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"The weather forecast warns of heavy torrential rain and hail this afternoon.\"",
          "options": [
            "Prognoza meteo avertizează asupra unor ploi torențiale abundente și căderi de grindină în această după-amiază. (Prognoza meteo)",
            "Nu va ploua niciodată. (Prognoza meteo)",
            "Vremea este complet uscată. (Prognoza meteo)",
            "Soarele strălucește fără nori. (Prognoza meteo)"
          ],
          "answerIndex": 0,
          "explanation": "Accurate storm warning translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 1: Prognoza meteo"
  },
  "ro-u16-l2": {
    "id": "ro-u16-l2",
    "unit": "ro-u16",
    "level": "A2",
    "objective": "Cele patru anotimpuri, Mărțișorul primăverii, concediile pe litoral și iarna la munte.",
    "presentation": {
      "explanation": "Cele patru anotimpuri în România:\n- Primăvara (martie - mai): Mărțișorul (1 Martie - șnurul împletit alb-roșu, simbol al primăverii și renașterii naturii, patrimoniu UNESCO), ghioceii\n- Vara (iunie - august): Vacanțe pe litoralul Mării Negre (Mamaia, Vama Veche), festivaluri de muzică, cireșe de mai\n- Toamna (septembrie - noiembrie): Culesul viilor și mustul proaspăt, frunze arămii în pădurile carpatice\n- Iarna (decembrie - februarie): Sărbătorile de iarnă (colinde, datini cu capra și ursul), schi în Poiana Brașov și Sinaia",
      "examples": [
        {
          "target": "Pe 1 Martie sărbătorim Mărțișorul dăruind un șnur alb-roșu împletit ca simbol al sosirii primăverii.",
          "reading": "pe UNU MAR-tsye suhr-buh-TO-reem muhr-tsee-SHO-rool...",
          "translation": "On March 1st we celebrate Mărțișor by giving a braided red-and-white cord as a symbol of the arrival of spring."
        }
      ],
      "mnemonics": [
        "Mărțișorul (1 Martie) = UNESCO-recognized Romanian spring renewal tradition with red and white silk tassels!"
      ],
      "culturalNotes": [
        "Mărțișor on March 1st is one of Romania's most cherished traditions, where men gift women delicate lucky charms tied with red-and-white braided silk threads to celebrate spring's triumph over winter."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce simbol tradițional românesc cu șnur alb-roșu împletit se dăruiește la 1 Martie?",
          "options": [
            "Mărțișorul",
            "Coliva",
            "Bradul de Crăciun",
            "Ouăle roșii"
          ],
          "answerIndex": 0,
          "explanation": "Mărțișorul (1 Martie)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este cea mai renumită stațiune montană din România pentru sporturile de iarnă și schi?",
          "options": [
            "Poiana Brașov",
            "Mamaia",
            "Costinești",
            "Vama Veche"
          ],
          "answerIndex": 0,
          "explanation": "Poiana Brașov."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce băutură dulce tradițională din struguri proaspăt zdrobiți se bea toamna în timpul culesului viilor?",
          "options": [
            "Mustul proaspăt",
            "Limonada",
            "Apa minerală",
            "Ceaiul verde"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"Mustul proaspăt\". This directly applies the principle of: Cele patru anotimpuri, Mărțișorul primăverii, concediile pe litoral și iarna la munte..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"In autumn, the Carpathian mountain forests turn into breathtaking shades of gold and amber.\"",
          "options": [
            "Munții Carpați nu au păduri.",
            "Toamna e doar întuneric.",
            "Vara este cald la mare.",
            "Toamna, pădurile din Munții Carpați se transformă în nuanțe uluitoare de auriu și arămiu."
          ],
          "answerIndex": 3,
          "explanation": "Accurate autumn landscape translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 2: Cele patru anotimpuri"
  },
  "ro-u16-l3": {
    "id": "ro-u16-l3",
    "unit": "ro-u16",
    "level": "A2",
    "objective": "Parcuri naționale și minuni ale naturii: Delta Dunării (UNESCO), Munții Retezat, Peștera Scărișoara, Vulcanii Noroioși.",
    "presentation": {
      "explanation": "Minuni naturale și parcuri naționale din România:\n- Delta Dunării (Patrimoniu Mondial UNESCO - a doua ca mărime și cea mai bine conservată deltă din Europa, paradisul pelicanilor și nufărilor albi)\n- Parcul Național Retezat (Munții Retezat - zeci de lacuri glaciare cristaline precum Lacul Bucura și Zănoaga)\n- Peștera Scărișoara (Munții Apuseni - adăpostește al doilea cel mai mare ghețar subteran din Europa)\n- Vulcanii Noroioși de la Berca (Buzău - peisaj selenar spectaculos cu conuri de nămol rece și gaze naturale)\n- Lacul Roșu și Cheile Bicazului",
      "examples": [
        {
          "target": "Delta Dunării este un paradis natural unic în Europa, adăpostind cele mai mari colonii de pelicani comuni.",
          "reading": "DEL-ta DOO-nuh-ree YES-te oon pa-ra-DEES na-too-RAL...",
          "translation": "The Danube Delta is a unique natural paradise in Europe, sheltering the largest colonies of great white pelicans."
        }
      ],
      "mnemonics": [
        "Delta Dunării (UNESCO Pelicane), Ghețarul Scărișoara (Apuseni), Vulcanii Noroioși (Buzău)!"
      ],
      "culturalNotes": [
        "The Danube Delta Biosphere Reserve encompasses over 5,000 square kilometers of floating reed islands (plauri), waterways, and over 300 bird species, culminating where the Danube enters the Black Sea."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este delta fluviului Dunărea recunoscută ca Rezervație a Biosferei UNESCO în România?",
          "options": [
            "Delta Nilului",
            "Delta Dunării",
            "Delta Amazonului",
            "Delta Rinului"
          ],
          "answerIndex": 1,
          "explanation": "Delta Dunării."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce peșteră din Munții Apuseni adăpostește unul dintre cei mai mari ghețari subterani din lume?",
          "options": [
            "Peștera Scărișoara",
            "Peștera Muierilor",
            "Peștera Dâmbovicioara",
            "Peștera Urșilor"
          ],
          "answerIndex": 0,
          "explanation": "Peștera Scărișoara."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce fenomen geologic spectaculos cu peisaj selenar poate fi vizitat în județul Buzău?",
          "options": [
            "Ghețarul Perito Moreno",
            "Muntele Etna",
            "Marele Canion",
            "Vulcanii Noroioși de la Berca"
          ],
          "answerIndex": 3,
          "explanation": "Vulcanii Noroioși.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"The glacial lakes in Retezat National Park are among the purest and most scenic in the Carpathians.\"",
          "options": [
            "Apa este murdară.",
            "Parcul este închis permanent.",
            "Lacurile glaciare din Parcul Național Retezat sunt printre cele mai curate și pitorești din Carpați.",
            "În Retezat nu există lacuri."
          ],
          "answerIndex": 2,
          "explanation": "Accurate glacial lake description translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Parcuri naționale și minuni ale naturii"
  },
  "ro-u16-l4": {
    "id": "ro-u16-l4",
    "unit": "ro-u16",
    "level": "A2",
    "objective": "Avertizările Administrației Naționale de Meteorologie (ANM), coduri de culori și sistemul RO-ALERT.",
    "presentation": {
      "explanation": "Sistemul de avertizare meteo și RO-ALERT în România:\n- ANM (Administrația Națională de Meteorologie):\n  - Cod Galben (Fenomene temporar periculoase)\n  - Cod Portocaliu (Fenomene periculoase de intensitate mare)\n  - Cod Roșu (Fenomene meteorologice extreme, pericol iminent pentru vieți și bunuri)\n- Sistemul RO-ALERT (Mesaje de urgență transmise de DSU / IGSU pe telefoanele mobile cu semnal sonor distinct):\n  - Alerte de inundații rapide, viituri, tornade, furtuni extreme sau prezența urșilor în zone locuite",
      "examples": [
        {
          "target": "Sistemul RO-ALERT a emis o alertă de cod roșu de furtună violentă cu vânt puternic și căderi masive de grindină.",
          "reading": "SIS-te-mool RO-ALERT a e-MEES o a-LER-tuh...",
          "translation": "The RO-ALERT system issued a red code alert for a violent storm with strong winds and heavy hail."
        }
      ],
      "mnemonics": [
        "RO-ALERT = Emergency cell broadcast notifications on mobile phones across Romania!"
      ],
      "culturalNotes": [
        "RO-ALERT, operated by the Department for Emergency Situations (DSU), broadcasts real-time geolocated warnings for severe flash floods, tornadoes, and wildlife encounters directly to mobile devices."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este sistemul național de avertizare a populației prin mesaje pe telefonul mobil în caz de urgență în România?",
          "options": [
            "Email-ul",
            "Sistemul RO-ALERT",
            "Telegram",
            "WhatsApp"
          ],
          "answerIndex": 1,
          "explanation": "Sistemul RO-ALERT."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este codul meteo de culoare care indică fenomene de intensitate maximă și pericol extrem?",
          "options": [
            "Codul Roșu",
            "Codul Verde",
            "Codul Albastru",
            "Codul Galben"
          ],
          "answerIndex": 0,
          "explanation": "Codul Roșu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este instituția publică oficială care emite prognozele și avertizările meteo în România?",
          "options": [
            "CFR",
            "ANAF",
            "ANM",
            "Poșta Română"
          ],
          "answerIndex": 2,
          "explanation": "Correct answer: \"ANM\". This directly applies the principle of: Avertizările Administrației Naționale de Meteorologie (ANM), coduri de culori și sistemul RO-ALERT..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Seek shelter inside sturdy buildings and stay away from windows during severe code red storms.\"",
          "options": [
            "Furtuna nu este periculoasă.",
            "Adăpostiți-vă în interiorul unor clădiri solide și stați departe de ferestre în timpul furtunilor de cod roșu.",
            "Ieșiți afară în timpul furtunii.",
            "Urcați pe acoperiș."
          ],
          "answerIndex": 1,
          "explanation": "Accurate storm safety advisory.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 4: Avertizările Administrației Naționale de Meteorologie (ANM)"
  },
  "ro-u16-l5": {
    "id": "ro-u16-l5",
    "unit": "ro-u16",
    "level": "A2",
    "objective": "Energia verde în România (Parcul Eolian Fântânele-Cogealac, hidroenergie la Porțile de Fier), Sistemul Garanție-Returnare (SGR RetuRO).",
    "presentation": {
      "explanation": "Tranziția ecologică și reciclarea în România:\n- Energia regenerabilă în România (Mix energetic echilibrat):\n  - Parcul Eolian Fântânele-Cogealac din Dobrogea (unul dintre cele mai mari parcuri eoliene pe uscat din Europa, 600 MW)\n  - Hidrocentrala Porțile de Fier I și II de pe Dunăre (gigant hidroenergetic)\n  - Energia nucleară curată de la Cernavodă\n- Sistemul SGR RetuRO (Sistemul de Garanție-Returnare lansat la nivel național):\n  - Garanție de 50 de bani pentru ambalaje primare nereutilizabile din sticlă, plastic sau metal cu simbolul „Ambalaj cu garanție” returnate la automatele RVM.",
      "examples": [
        {
          "target": "Sistemul de Garanție-Returnare (RetuRO) a revoluționat reciclarea ambalajelor de băuturi în toată România.",
          "reading": "SIS-te-mool de ga-RAN-tsye re-toor-NA-re...",
          "translation": "The Deposit-Return System (RetuRO) has revolutionized beverage container recycling across all of Romania."
        }
      ],
      "mnemonics": [
        "SGR RetuRO = 50 bani deposit refund per bottle at automated reverse vending machines across Romania!"
      ],
      "culturalNotes": [
        "Romania's nationwide RetuRO Deposit-Return System launched in late 2023 represents the second-largest circular economy packaging recovery system in all of Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cât este garanția returnabilă în bani pentru fiecare sticlă sau doză de băutură cu logo SGR în România?",
          "options": [
            "50 de bani pe ambalaj",
            "10 lei",
            "Nu se returnează bani",
            "1 ban"
          ],
          "answerIndex": 0,
          "explanation": "50 de bani (SGR RetuRO)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este uriașa hidrocentrală de pe fluviul Dunărea la granița cu Serbia care produce energie curată?",
          "options": [
            "Vidraru",
            "Bicaz",
            "Lotru",
            "Hidrocentrala Porțile de Fier"
          ],
          "answerIndex": 3,
          "explanation": "Porțile de Fier."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "În ce regiune din sud-estul României este amplasat cel mai mare parc eolian pe uscat din Europa (Fântânele-Cogealac)?",
          "options": [
            "În Maramureș",
            "În Dobrogea",
            "În Bucovina",
            "În Banat"
          ],
          "answerIndex": 1,
          "explanation": "Dobrogea (Fântânele-Cogealac).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Traduceți: \"Returning bottles to automated recycling machines reduces pollution and supports the circular economy.\"",
          "options": [
            "Returnarea sticlelor la automatele de reciclare reduce poluarea și susține economia circulară.",
            "Reciclarea este inutilă.",
            "Aruncați gunoiul în pădure.",
            "Economia circulară nu există."
          ],
          "answerIndex": 0,
          "explanation": "Accurate circular economy statement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 5: Energia verde în România (Parcul Eolian Fântânele-Cogealac"
  },
  "ro-u17-l1": {
    "id": "ro-u17-l1",
    "unit": "ro-u17",
    "level": "A2",
    "objective": "Părțile corpului uman, exprimarea durerii și a simptomelor în limba română („Mă doare capul / gâtul”, „Am febră”).",
    "presentation": {
      "explanation": "Părțile corpului și exprimarea simptomelor în limba română:\n- Părțile corpului (Părțile corpului): Capul, ochii, urechile, gâtul, pieptul, spatele, burta (stomacul), brațele, picioarele, genunchii, tălpile\n- Exprimarea durerii cu verbul „A DUREA”:\n  - „Mă doare capul / mă doare gâtul / mă doare burta.” (Singular: mă doare)\n  - „Mă dor picioarele / mă dor ochii / mă dor măselele.” (Plural: mă dor)\n- Simptome medicale frecvente:\n  - „Am febră mare (treizeci și opt cu cinci) și frisoane.”\n  - „Tușesc sec / am nasul înfundat / sunt răcit cobză / am gripă.”\n  - „Am stări de greață, amețeli și slăbiciune generală.”\n- La medicul de familie: „Bună ziua, domnule doctor; nu mă simt deloc bine de două zile.”",
      "examples": [
        {
          "target": "Bună ziua, domnule doctor; mă doare cumplit în gât la înghițire și am febră mare de ieri seară.",
          "reading": "BOO-nuh ZEE-wa, dom-NOO-le dok-TOR, muh DWA-re koom-PLEET...",
          "translation": "Good day, doctor; my throat hurts terribly when swallowing and I have had a high fever since yesterday evening."
        }
      ],
      "mnemonics": [
        "Mă doare (singular) vs Mă dor (plural) = Romanian pain agreement with the body part!"
      ],
      "culturalNotes": [
        "In Romania, patients register with a family doctor (medic de familie) who coordinates primary care, issues medical certificates (concediu medical), and gives specialist referrals (trimitere)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum spui corect în română că ai dureri la ambele picioare după o alergare lungă?",
          "options": [
            "Mă doare piciorul",
            "Mă doare capul",
            "Mi-e foame",
            "Mă dor picioarele"
          ],
          "answerIndex": 3,
          "explanation": "Mă dor picioarele (plural)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce înseamnă expresia colocvială românească „Sunt răcit cobză”?",
          "options": [
            "Știu să cânt la un instrument muzical",
            "Nu am nimic",
            "Merg la mare",
            "Sunt foarte răcit și am o răceală puternică"
          ],
          "answerIndex": 3,
          "explanation": "Răcit cobză = Badly cold."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se numește medicul de asistență primară la care este înscris fiecare asigurat în România?",
          "options": [
            "Medicul de familie",
            "Medicul de gardă doar",
            "Chirurgul șef",
            "Farmacistul"
          ],
          "answerIndex": 0,
          "explanation": "Medicul de familie.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"I have a severe headache, nausea, and dizziness; I need to consult a doctor.\"",
          "options": [
            "Sunt perfect sănătos și mă plimb.",
            "Spitalul este închis.",
            "Nu am nevoie de tratament.",
            "Am o durere de cap severă, greață și amețeli; trebuie să consult un medic."
          ],
          "answerIndex": 3,
          "explanation": "Accurate symptom translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 1: Părțile corpului uman"
  },
  "ro-u17-l2": {
    "id": "ro-u17-l2",
    "unit": "ro-u17",
    "level": "A2",
    "objective": "Farmacia în România (Catena, Dr. Max), rețete compensate CNAS, medicamente fără rețetă (OTC), plasturi și prospectul.",
    "presentation": {
      "explanation": "La farmacie în România (Marile rețele: Catena, Dr. Max, Farmacia Tei):\n- Tipuri de medicamente:\n  - Medicamente cu rețetă (Pe bază de prescripție medicală / rețetă compensată sau gratuită prin Casa Națională de Asigurări de Sănătate - CNAS)\n  - Medicamente OTC (Fără rețetă): Analgezice și antipiretice (paracetamol, ibuprofen), sirop de tuse, dropsuri de gât cu propolis, spray nazal cu apă de mare, plasturi (leucoplast), comprese sterile, spirt medicinal (alcool sanitar Mona)\n- Prospectul medicamentului (Mod de administrare și posologie):\n  - „A se administra câte un comprimat la fiecare opt ore după masă cu o cantitate suficientă de apă.”\n- Farmacia de noapte / de gardă (Deschisă non-stop pentru urgențe nocturne)",
      "examples": [
        {
          "target": "Vă rog frumos, aveți o cutie de paracetamol de cinci sute de miligrame și un sirop expectorant pentru tuse?",
          "reading": "vuh ROG froo-MOS, a-VETZ o KOO-tye de pa-ra-tse-ta-MOL...",
          "translation": "Please, do you have a box of 500mg paracetamol and an expectorant cough syrup?"
        }
      ],
      "mnemonics": [
        "Rețetă compensată CNAS = State-subsidized prescription in Romania! Farmacie de gardă = 24/7 night pharmacy!"
      ],
      "culturalNotes": [
        "In Romania, natural bee products (apitherapy: propolis, raw honey, royal jelly) are widely trusted and integrated into modern pharmacy wellness offerings."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește folia cu instrucțiuni de utilizare, contraindicații și reacții adverse din cutia medicamentului?",
          "options": [
            "Prospectul medicamentului",
            "Biletul de tren",
            "Ziarul local",
            "Chitanța fiscală"
          ],
          "answerIndex": 0,
          "explanation": "Prospectul medicamentului."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum se numește farmacia care asigură permanența pe timpul nopții și în weekend?",
          "options": [
            "Farmacia de gardă",
            "Farmacia închisă",
            "Magazinul alimentar",
            "Chioșcul de ziare"
          ],
          "answerIndex": 0,
          "explanation": "Farmacia de gardă."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este instituția publică din România responsabilă cu decontarea rețetelor compensate pentru asigurați?",
          "options": [
            "CFR",
            "Poșta Română",
            "ANAF",
            "CNAS"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"CNAS\". This directly applies the principle of: Farmacia în România (Catena, Dr. Max), rețete compensate CNAS, medicamente fără rețetă (OTC), plasturi și prospectul..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Take one tablet three times a day after meals with plenty of water for seven days.\"",
          "options": [
            "Luați toate pastilele deodată.",
            "Nu beți apă cu medicamentul.",
            "Luați câte un comprimat de trei ori pe zi după mese cu multă apă timp de șapte zile.",
            "Aruncați cutia la gunoi."
          ],
          "answerIndex": 2,
          "explanation": "Accurate posology translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 2: Farmacia în România (Catena"
  },
  "ro-u17-l3": {
    "id": "ro-u17-l3",
    "unit": "ro-u17",
    "level": "A2",
    "objective": "Numărul de urgență 112, serviciul SMURD (Dr. Raed Arafat), UPU (Unitatea de Primiri Urgențe) și cardul național de sănătate.",
    "presentation": {
      "explanation": "Servicii de urgență și salvare medicală în România:\n- Numărul unic european de urgență: 112 (Poliție, Pompieri, Ambulanță, SMURD)\n- Serviciul SMURD (Serviciul Mobil de Urgență, Reanimare și Descarcerare):\n  - Fondat în 1990 la Târgu Mureș de medicul Raed Arafat, SMURD este un serviciu integrat de elită echipat cu ambulanțe de terapie intensivă, autospeciale de descarcerare și elicoptere medicale Black Hawk / EC135\n- La spital: UPU (Unitatea de Primiri Urgențe) și triajul medical computerizat\n- Cardul Național de Asigurări Sociale de Sănătate (cu cip electronic și cod PIN)",
      "examples": [
        {
          "target": "Sunați urgent la unu unu doi! O persoană și-a pierdut cunoștința și este nevoie de un echipaj SMURD de terapie intensivă.",
          "reading": "soo-NATZ oor-ZHENT la OO-noo OO-noo DOY...",
          "translation": "Call 112 urgently! A person has lost consciousness and an intensive care SMURD crew is needed."
        }
      ],
      "mnemonics": [
        "SMURD 112 (Dr. Raed Arafat) = Romania's world-class emergency mobile resuscitation & helicopter rescue service!"
      ],
      "culturalNotes": [
        "SMURD is widely regarded as one of Romania's most trusted and respected national institutions, having revolutionized emergency pre-hospital rescue across Southeastern Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este numărul unic gratuit pentru apelarea ambulanței și a echipajelor SMURD în România?",
          "options": [
            "911 (Numrul de urgen 112)",
            "112 (Numrul de urgen 112)",
            "999 (Numrul de urgen 112)",
            "000 (Numrul de urgen 112)"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"112 (Numrul de urgen 112)\". This directly applies the principle of: Numărul de urgență 112, serviciul SMURD (Dr. Raed Arafat), UPU (Unitatea de Primiri Urgențe) și cardul național de sănătate.."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce reprezintă acronimul SMURD în sistemul românesc de salvare medicală?",
          "options": [
            "Serviciul Mobil de Urgență, Reanimare și Descarcerare (Numrul de urgen 112)",
            "Sindicatul Medicilor Români (Numrul de urgen 112)",
            "Stația de Mașini Urbane (Numrul de urgen 112)",
            "Societatea Medicală Urbană (Numrul de urgen 112)"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"Serviciul Mobil de Urgență, Reanimare și Descarcerare (Numrul de urgen 112)\". This directly applies the principle of: Numărul de urgență 112, serviciul SMURD (Dr. Raed Arafat), UPU (Unitatea de Primiri Urgențe) și cardul național de sănătate.."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se numește departamentul din spitalele de urgență destinat primirii și stabilizării cazurilor critice 24/7?",
          "options": [
            "Arhiva medicală (Numrul de urgen 112)",
            "Ghișeul de bilete (Numrul de urgen 112)",
            "UPU (Numrul de urgen 112)",
            "Casieria spitalului (Numrul de urgen 112)"
          ],
          "answerIndex": 2,
          "explanation": "UPU (Unitatea de Primiri Urgențe).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"The patient is in acute respiratory distress; dispatch an advanced SMURD ambulance with an emergency doctor immediately.\"",
          "options": [
            "Nu trimiteți niciun echipaj. (Numrul de urgen 112)",
            "Pacientul este în insuficiență respiratorie acută; trimiteți imediat o ambulanță SMURD cu medic de urgență. (Numrul de urgen 112)",
            "Nu este nicio urgență. (Numrul de urgen 112)",
            "Pacientul doarme liniștit în cameră. (Numrul de urgen 112)"
          ],
          "answerIndex": 1,
          "explanation": "Accurate emergency dispatch translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 3: Numărul de urgență 112"
  },
  "ro-u17-l4": {
    "id": "ro-u17-l4",
    "unit": "ro-u17",
    "level": "A2",
    "objective": "Stațiuni balneoclimaterice românești (Băile Felix, Băile Herculane), ape termale minerale, apiterapie și ceaiuri medicinale.",
    "presentation": {
      "explanation": "Tradiția balneară, apele termale și sănătatea naturală în România:\n- Stațiunile balneoclimaterice istorice:\n  - Băile Herculane (Una dintre cele mai vechi stațiuni balneare din lume, atestată documentar din anul 153 d.Hr. de romani sub numele „Aquae Herculis”)\n  - Băile Felix (Renumite pentru apele termale bicarbonate și nufărul termal Nymphaea lotus thermalis)\n  - Sovata (Lacul Ursu - cel mai mare lac helioterm din lume)\n  - Călimănești-Căciulata și Vatra Dornei (Izvoare minerale pentru afecțiuni digestive și cardiovasculare)\n- Apiterapia și fitoterapia tradițională: Ceai de mușețel, tei, sunătoare, mentă și propolis brut",
      "examples": [
        {
          "target": "Apele termale sulfuroase de la Băile Herculane și tratamentele balneare atrag mii de oameni pentru recuperare fizică și relaxare.",
          "reading": "A-pe-le ter-MA-le sool-foo-ROA-se de la BUH-ee-le her-koo-LA-ne...",
          "translation": "The sulfurous thermal waters of Băile Herculane and spa treatments attract thousands of people for physical rehabilitation and relaxation."
        }
      ],
      "mnemonics": [
        "Băile Herculane (153 AD) & Sovata (Lacul Ursu Helioterm) = Romania's world-renowned thermal healing heritage!"
      ],
      "culturalNotes": [
        "Romania possesses over one-third of all mineral and thermal water springs in Europe, utilized since Roman antiquity for health rejuvenation and curative spa retreats."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este una dintre cele mai vechi stațiuni balneare din lume situată pe Valea Cernei în România, fondată de romani?",
          "options": [
            "Sinaia doar pentru schi",
            "Băile Herculane",
            "București",
            "Costinești"
          ],
          "answerIndex": 1,
          "explanation": "Băile Herculane."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce plantă medicinală este folosită tradițional în România sub formă de ceai pentru calmarea durerilor de stomac?",
          "options": [
            "Mușețelul și menta",
            "Cafeaua neagră",
            "Sarea",
            "Ardeiul iute"
          ],
          "answerIndex": 0,
          "explanation": "Mușețelul și menta."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce lac celebru din stațiunea Sovata este recunoscut ca fiind cel mai mare lac helioterm din lume?",
          "options": [
            "Lacul Vidraru",
            "Lacul Ursu",
            "Lacul Roșu",
            "Lacul Bâlea"
          ],
          "answerIndex": 1,
          "explanation": "Lacul Ursu.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Thermal mineral spring baths, natural apitherapy, and forest walks promote restorative wellness and vitality.\"",
          "options": [
            "Băile în izvoare minerale termale, apiterapia naturală și plimbările prin pădure promovează starea de bine și vitalitatea.",
            "Sedentarismul este sănătos.",
            "Apele termale sunt toxice.",
            "Mierea și propolisul nu au proprietăți benefice."
          ],
          "answerIndex": 0,
          "explanation": "Accurate balneology statement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 4: Stațiuni balneoclimaterice românești (Băile Felix"
  },
  "ro-u17-l5": {
    "id": "ro-u17-l5",
    "unit": "ro-u17",
    "level": "A2",
    "objective": "Pionieri români ai medicinei mondiale: George Emil Palade (Nobel 1974), Nicolae Paulescu (pancreina/insulina), Ana Aslan (Gerovital H3).",
    "presentation": {
      "explanation": "Savanți români care au transformat medicina și știința mondială:\n- Prof. Dr. George Emil Palade (Laureat al Premiului Nobel pentru Fiziologie sau Medicină în 1974 pentru descoperirea ultrastructurii celulare și a ribozomilor — numiți inițial „granulele lui Palade”)\n- Prof. Dr. Nicolae Paulescu (Fiziolog eminent care a descoperit și brevetat în 1921 „pancreina” — hormonul pancreatic numit ulterior insulină, care a salvat viața a sute de milioane de diabetici)\n- Prof. Dr. Ana Aslan (Medic geriatru renumit la nivel mondial, fondatoarea primului institut de geriatrie din lume în 1952 și creatitoarea formulei Gerovital H3 / Aslavital împotriva îmbătrânirii celulare)\n- Prof. Dr. Victor Babeș (Pionier al microbiologiei și seroterapiei, autorul primului tratat de bacteriologie din lume)",
      "examples": [
        {
          "target": "Descoperirile fundamentale ale lui George Emil Palade și Nicolae Paulescu au marcat pentru totdeauna istoria medicinei moderne.",
          "reading": "des-ko-pe-REER-ee-le foon-da-men-TA-le a-le loo-ee ZHOR-zhe e-MEEL pa-LA-de...",
          "translation": "The fundamental discoveries of George Emil Palade and Nicolae Paulescu forever marked the history of modern medicine."
        }
      ],
      "mnemonics": [
        "George Emil Palade (Nobel 1974 Ribosomes), Nicolae Paulescu (Insulin/Pancreine), Ana Aslan (Gerovital H3) = Romanian scientific titans!"
      ],
      "culturalNotes": [
        "The National Institute of Gerontology and Geriatrics \"Ana Aslan\" in Bucharest was the first of its kind in the world, treating presidents, artists, and world leaders with Gerovital H3."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care savant de origine română a primit Premiul Nobel în 1974 pentru descoperirea ribozomilor și a structurii celulare?",
          "options": [
            "George Emil Palade",
            "Henri Coandă",
            "Nicolae Iorga",
            "Traian Vuia"
          ],
          "answerIndex": 0,
          "explanation": "George Emil Palade."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care medic român a brevetat în 1921 „pancreina” (insulina), hormonul esențial pentru tratarea diabetului zaharat?",
          "options": [
            "Victor Babeș",
            "Ion Cantacuzino",
            "Spiru Haret",
            "Nicolae Paulescu"
          ],
          "answerIndex": 3,
          "explanation": "Nicolae Paulescu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce medic român a fondat primul institut de geriatrie din lume și a creat tratamentul anti-îmbătrânire Gerovital H3?",
          "options": [
            "Ana Aslan",
            "Mina Minovici",
            "Carol Davila",
            "Gheorghe Marinescu"
          ],
          "answerIndex": 0,
          "explanation": "Ana Aslan.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Pioneering biomedical discoveries such as ribosome biology and insulin have revolutionized modern global healthcare.\"",
          "options": [
            "Insulina este dăunătoare diabeticilor.",
            "Medicina modernă nu a înregistrat progrese.",
            "Ribozomii nu există în celule.",
            "Descoperirile biomedicale de pionierat precum biologia ribozomilor și insulina au revoluționat asistența medicală modernă globală."
          ],
          "answerIndex": 3,
          "explanation": "Accurate scientific translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Pionieri români ai medicinei mondiale"
  },
  "ro-u18-l1": {
    "id": "ro-u18-l1",
    "unit": "ro-u18",
    "level": "B1",
    "objective": "Închirierea de locuințe în România (Storia, Imobiliare.ro), contract de locațiune, garanție (1-2 luni) și cheltuieli de întreținere.",
    "presentation": {
      "explanation": "Piața imobiliară și închirierea de locuințe în România:\n- Portaluri imobiliare principale: Imobiliare.ro, Storia.ro, OLX Imobiliare\n- Tipuri de locuințe:\n  - Garsonieră (Studio de 1 cameră cu baie și bucătărie)\n  - Apartament cu 2 camere (Living + 1 dormitor)\n  - Apartament cu 3 sau 4 camere / Penthouse în ansamblu rezidențial nou\n- Termeni contractuali și costuri:\n  - Contractul de locațiune / închiriere (Înregistrat fiscal la ANAF)\n  - Garanția (Echivalentul a 1 sau 2 luni de chirie, returnabilă la predarea apartamentului în stare bună)\n  - Întreținerea lunară (Cheltuielile comune ale blocului afișate la avizier: încălzire centralizată/termoficare, apă caldă/rece, curățenie scară, gunoi, lift)\n  - Utilități individuale: Curent electric, gaze naturale, internet fibră optică",
      "examples": [
        {
          "target": "Bună ziua, vă sun în legătură cu apartamentul de două camere din Floreasca; cât este întreținerea pe timp de iarnă și când putem programa o vizionare?",
          "reading": "BOO-nuh ZEE-wa, vuh soon een le-guh-TOO-ruh...",
          "translation": "Good day, I am calling regarding the two-room flat in Floreasca; how much are winter maintenance costs and when can we schedule a viewing?"
        }
      ],
      "mnemonics": [
        "Întreținerea la avizier + Garanție returnabilă + Contract ANAF = Romanian tenancy essentials!"
      ],
      "culturalNotes": [
        "In Romanian apartment blocks, monthly maintenance expenses (întreținerea) calculated by the building administrator are traditionally posted on the entrance noticeboard (avizier)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește în România apartamentul compact compus dintr-o singură cameră, baie și bucătărie?",
          "options": [
            "O vilă cu trei etaje (nchirierea de locuine n Romnia Storia)",
            "Un conac (nchirierea de locuine n Romnia Storia)",
            "Un castel (nchirierea de locuine n Romnia Storia)",
            "O garsonieră (nchirierea de locuine n Romnia Storia)"
          ],
          "answerIndex": 3,
          "explanation": "O garsonieră."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unde se afișează în mod tradițional lista lunară de plată a întreținerii la intrarea în bloc?",
          "options": [
            "Pe ușa liftului (nchirierea de locuine n Romnia Storia)",
            "Pe gardul exterior (nchirierea de locuine n Romnia Storia)",
            "În ziarul de dimineață (nchirierea de locuine n Romnia Storia)",
            "La avizierul de la intrarea în scară (nchirierea de locuine n Romnia Storia)"
          ],
          "answerIndex": 3,
          "explanation": "La avizier."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "La ce instituție publică din România se înregistrează oficial contractele de închiriere pentru conformitate fiscală?",
          "options": [
            "La Poliția Rutieră (nchirierea de locuine n Romnia Storia)",
            "La CFR (nchirierea de locuine n Romnia Storia)",
            "La Ministerul Culturii (nchirierea de locuine n Romnia Storia)",
            "La ANAF (nchirierea de locuine n Romnia Storia)"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"La ANAF (nchirierea de locuine n Romnia Storia)\". This directly applies the principle of: Închirierea de locuințe în România (Storia, Imobiliare.ro), contract de locațiune, garanție (1-2 luni) și cheltuieli de întreținere..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"The tenant paid a one-month deposit and signed a one-year lease agreement for a fully furnished two-room flat.\"",
          "options": [
            "Apartamentul nu are nicio mobilă. (nchirierea de locuine n Romnia Storia)",
            "Proprietarul refuză semnarea contractului. (nchirierea de locuine n Romnia Storia)",
            "Chiriașul a plătit o lună de garanție și a semnat un contract de închiriere pe un an pentru un apartament mobilat cu două camere. (nchirierea de locuine n Romnia Storia)",
            "Chiria este gratuită. (nchirierea de locuine n Romnia Storia)"
          ],
          "answerIndex": 2,
          "explanation": "Accurate apartment lease translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 1: Închirierea de locuințe în România (Storia"
  },
  "ro-u18-l2": {
    "id": "ro-u18-l2",
    "unit": "ro-u18",
    "level": "B1",
    "objective": "Asociația de proprietari în blocurile din România, președintele de bloc, administratorul și reabilitarea termică a fațadelor.",
    "presentation": {
      "explanation": "Viața la bloc și administrarea asociației de proprietari:\n- Asociația de proprietari (Reglementată prin Legea nr. 196/2018):\n  - Președintele asociației de proprietari (Ales prin vot de către vecini în adunarea generală)\n  - Administratorul de bloc atestat (Întocmește listele de întreținere și gestionează fondul de reparații și fondul de rulment)\n  - Cenzorul (Verifică legalitatea gestiunii financiare)\n- Reabilitarea termică a blocurilor de locuințe:\n  - Anveloparea exterioară a fațadelor cu polistiren expandat sau vată minerală bazaltică și montarea ferestrelor termopan (reduce facturile de încălzire cu 40-50%)\n- Reguli de conviețuire: Orele de liniște (13:00 - 14:00 și 22:00 - 08:00)",
      "examples": [
        {
          "target": "Blocul nostru a fost anvelopat termic recent, iar adunarea generală a proprietarilor a aprobat modernizarea liftului.",
          "reading": "BLO-kool NOS-troo a fost an-ve-lo-PAT ter-MEEK re-CHENT...",
          "translation": "Our apartment block was recently thermally insulated, and the general assembly of owners approved the elevator modernization."
        }
      ],
      "mnemonics": [
        "Anvelopare termică (Thermal facade insulation) + Asociația de proprietari + Ore de liniște = Romanian apartment block community!"
      ],
      "culturalNotes": [
        "Over 65% of urban Romanians live in apartment blocks, where thermal retrofitting (reabilitare termică) has dramatically modernized cityscapes and slashed heating emissions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numește procesul de izolare exterioară a fațadei blocurilor pentru a reduce pierderile de căldură iarna?",
          "options": [
            "Reabilitare termică",
            "Tăierea copacilor",
            "Demolare parțială",
            "Vopsire simplă"
          ],
          "answerIndex": 0,
          "explanation": "Reabilitare termică (anvelopare)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care sunt intervalele orare standard de liniște stabilite prin lege în blocurile de locuințe din România?",
          "options": [
            "13:00 - 14:00 și 22:00 - 08:00",
            "10:00 - 11:00 doar",
            "Toată ziua fără pauză",
            "Nu există ore de liniște"
          ],
          "answerIndex": 0,
          "explanation": "13:00-14:00 și 22:00-08:00."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se numește fondul financiar constituit de asociația de bloc pentru reparații majore ale acoperișului sau instalațiilor?",
          "options": [
            "Banii de vacanță",
            "Contul de economii privat",
            "Fondul de reparații",
            "Impozitul pe venit"
          ],
          "answerIndex": 2,
          "explanation": "Fondul de reparații.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"The building administrator calculates monthly maintenance fees and oversees communal heating and plumbing repairs.\"",
          "options": [
            "Vecinii nu plătesc nicio întreținere.",
            "Administratorul de bloc calculează cotele lunare de întreținere și supraveghează reparațiile la instalațiile comune.",
            "Liftul este oprit permanent.",
            "Blocul nu are administrator."
          ],
          "answerIndex": 1,
          "explanation": "Accurate building management translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 2: Asociația de proprietari în blocurile din România"
  },
  "ro-u18-l3": {
    "id": "ro-u18-l3",
    "unit": "ro-u18",
    "level": "B1",
    "objective": "Arhitectura tradițională românească: Porțile sculptate din lemn din Maramureș (Patrimoniu UNESCO), culele oltenești și casele țărănești cu prispă.",
    "presentation": {
      "explanation": "Capodopere ale arhitecturii tradiționale vernaculare românești:\n- Porțile monumentale de lemn din Maramureș (Capodopere ale meșterilor lemnari, sculptate din stejar masiv cu motive solare: soarele, funia răsucită/arborele vieții, dintele de lup, crucea)\n- Bisericile de lemn din Maramureș (Patrimoniu Mondial UNESCO - Bârsana, Ieud, Șurdești cu turle zvelte din șindrilă ce ating peste 50-70 metri înălțime)\n- Culele boierești din Oltenia și Muntenia:\n  - Clădiri fortificate semimărețe construite în secolele XVIII-XIX ca locuințe de refugiu și apărare împotriva incursiunilor haiducilor și atacurilor otomane (ex. Cula Duca, Cula Greceanu de la Măldărești)\n- Casa tradițională cu prispă și foișor din lemn sculptat",
      "examples": [
        {
          "target": "Porțile maramureșene de lemn sculptate cu simbolul soarelui și funia vieții sunt veritabile arcuri de triumf ale culturii rurale.",
          "reading": "POR-tsee-le ma-ra-moo-re-SHE-ne de lemn skoolp-TA-te...",
          "translation": "Maramureș carved wooden gates decorated with the sun symbol and rope of life are true triumphal arches of rural culture."
        }
      ],
      "mnemonics": [
        "Porți de lemn maramureșene (Stejar & Simboluri solare) + Cule fortificate oltenești + Case cu prispă = Romanian architectural soul!"
      ],
      "culturalNotes": [
        "In traditional Maramureș culture, crossing through the monumental wooden gate was considered passing from the outer secular world into the sacred, protected realm of the family home."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Din ce regiune istorică a României provin celebrele porți monumentale sculptate în lemn de stejar cu motive solare?",
          "options": [
            "Dobrogea",
            "Maramureș",
            "Banat",
            "Muntenia de câmpie"
          ],
          "answerIndex": 1,
          "explanation": "Maramureș."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum se numesc locuințele boierești fortificate din Oltenia, construite pentru apărare împotriva atacurilor otomane?",
          "options": [
            "Cule",
            "Zgârie-nori",
            "Igloo-uri",
            "Corturi nomadice"
          ],
          "answerIndex": 0,
          "explanation": "Culele oltenești."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este elementul arhitectural tradițional deschis, susținut pe stâlpi de lemn sculptat, aflat în fața casei țărănești românești?",
          "options": [
            "Buncărul",
            "Prispa",
            "Acoperișul plat",
            "Garajul subteran"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"Prispa\". This directly applies the principle of: Arhitectura tradițională românească: Porțile sculptate din lemn din Maramureș (Patrimoniu UNESCO), culele oltenești și casele țărănești cu prispă..",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Monumental carved oak gates and UNESCO-protected timber churches represent the pinnacle of Romanian traditional woodworking.\"",
          "options": [
            "Porțile monumentale sculptate din stejar și bisericile din lemn protejate de UNESCO reprezintă culmea măiestriei tradiționale românești în lemn.",
            "Porțile de lemn sunt recente și simple.",
            "Arhitectura tradițională nu folosea lemn.",
            "România nu are biserici de lemn."
          ],
          "answerIndex": 0,
          "explanation": "Accurate architectural history translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Arhitectura tradițională românească"
  },
  "ro-u18-l4": {
    "id": "ro-u18-l4",
    "unit": "ro-u18",
    "level": "B1",
    "objective": "Stilul arhitectural Neoromânesc (Ion Mincu): Arcul trilobat, foișorul brâncovenesc, mozaicurile ceramice și Casa Doina.",
    "presentation": {
      "explanation": "Stilul Neoromânesc (Stilul Național Român fondat de arhitectul Ion Mincu la sfârșitul secolului XIX):\n- Caracteristici distinctive ale stilului Neoromânesc:\n  - Fuziunea armonioasă între arhitectura medievală bisericească, stilul Brâncovenesc (Palatul Mogoșoaia) și motivele etnografice populare\n  - Arcuri trilobate frânte sprijinite pe coloane scurte de piatră cu capiteluri vegetale\n  - Foișoare ornamentale din lemn sculptat asemănătoare prispelor țărănești\n  - Frize decorative din ceramică smălțuită policromă și streșini late din lemn\n- Clădiri emblematice în București:\n  - Bufetul de la Șosea (Restaurantul Casa Doina - capodopera lui Ion Mincu din 1892)\n  - Școala Centrală de Fete, Palatul Primăriei Capitalei, Muzeul Țăranului Român",
      "examples": [
        {
          "target": "Stilul arhitectural Neoromânesc creat de Ion Mincu a definit eleganța Bucureștiului prin arcuri trilobate și foișoare brâncovenești.",
          "reading": "STEE-lool ar-khee-tek-too-RAL ne-o-ro-muh-NESK kre-AT de ee-ON MEEN-koo...",
          "translation": "The Neo-Romanian architectural style created by Ion Mincu defined Bucharest's elegance through trilobe arches and Brâncovenesc loggias."
        }
      ],
      "mnemonics": [
        "Ion Mincu (Stilul Neoromânesc 1890) + Arcul trilobat + Palatul Mogoșoaia (Brâncovenesc) = Romania's national architectural identity!"
      ],
      "culturalNotes": [
        "The Neo-Romanian architectural movement was created to express Romania's distinct cultural identity after national independence, synthesizing Byzantine, Renaissance, and folk elements."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cine este considerat părintele și promotorul principal al stilului arhitectural Neoromânesc în România?",
          "options": [
            "George Enescu",
            "Arhitectul Ion Mincu",
            "Constantin Brâncuși",
            "Mihai Eminescu"
          ],
          "answerIndex": 1,
          "explanation": "Ion Mincu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce formă specifică de arc cu trei lobi sprijinit pe coloane este elementul distinctiv al stilului Neoromânesc?",
          "options": [
            "Arcul trilobat",
            "Arcul ascuțit gotic pur",
            "Grinda dreaptă fără ornamente",
            "Arcul dreptunghiular simplu"
          ],
          "answerIndex": 0,
          "explanation": "Arcul trilobat."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este capodopera arhitecturală realizată de Ion Mincu pe Șoseaua Kiseleff din București, cunoscută astăzi ca restaurantul Casa Doina?",
          "options": [
            "Bufetul de la Șosea",
            "Palatul Parlamentului",
            "Arcul de Triumf",
            "Ateneul Român"
          ],
          "answerIndex": 0,
          "explanation": "Bufetul de la Șosea (Casa Doina).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"The Neo-Romanian architectural movement harmonized historic Brâncovenesc stone carvings with traditional vernacular wooden loggias.\"",
          "options": [
            "Nu există clădiri neoromânești în București.",
            "Ion Mincu a fost doar pictor.",
            "Stilul Neoromânesc a copiat exclusiv arhitectura americană.",
            "Mișcarea arhitecturală Neoromânească a armonizat sculpturile în piatră brâncovenești cu foișoarele tradiționale din lemn."
          ],
          "answerIndex": 3,
          "explanation": "Accurate architectural theory translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Stilul arhitectural Neoromânesc (Ion Mincu)"
  },
  "ro-u18-l5": {
    "id": "ro-u18-l5",
    "unit": "ro-u18",
    "level": "B1",
    "objective": "Case pasive și locuințe inteligente în România: Prosumatori și panouri solare (Programul Casa Verde Fotovoltaice), pompe de căldură și case din lut/cob.",
    "presentation": {
      "explanation": "Sustenabilitate, energie regenerabilă și case inteligente în România:\n- Fenomenul „Prosumatorilor” și Programul Național „Casa Verde Fotovoltaice”:\n  - România a depășit 150.000 de prosumatori rezidențiali (Cetățeni care își montează panouri solare fotovoltaice pe acoperiș și livrează energia excedentară în rețeaua națională cu compensare cantitativă 1:1)\n- Tehnologii moderne de încălzire:\n  - Pompe de căldură aer-apă sau sol-apă combinate cu încălzire în pardoseală și case pasive certificate\n- Arhitectură ecologică tradițională renăscută:\n  - Case din baloți de paie și lut / căsuțe ecologice din cob și lemn (proiecte celebre în Valea Zânelor, Sibiu și Buzău)\n- Tehnologii Smart Home: Sisteme de automatizare pentru controlul termostatelor prin aplicație, senzori de inundație și panouri solare monitorizate prin WiFi",
      "examples": [
        {
          "target": "Prin programul Casa Verde Fotovoltaice, mii de gospodării din România devin prosumatori independenți energetic, utilizând pompe de căldură.",
          "reading": "preen pro-GRA-mool KA-sa VER-de fo-to-vol-ta-EE-che...",
          "translation": "Through the Casa Verde Photovoltaics program, thousands of households in Romania become energy-independent prosumers using heat pumps."
        }
      ],
      "mnemonics": [
        "Casa Verde Fotovoltaice (Prosumatori 1:1) + Pompe de căldură + Încălzire în pardoseală = Modern sustainable Romanian living!"
      ],
      "culturalNotes": [
        "The Casa Verde government green subsidy initiative has triggered a massive solar rooftop transformation across Romanian villages and suburbs, turning thousands of homeowners into green energy producers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Cum se numesc persoanele care generează energie electrică din panouri solare proprii și livrează surplusul în rețeaua națională?",
          "options": [
            "Prosumatori",
            "Consumatori pasivi",
            "Inspectori fiscali",
            "Distribuitori industriali"
          ],
          "answerIndex": 0,
          "explanation": "Prosumatori."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este programul național de stat din România care subvenționează instalarea panourilor fotovoltaice pe casele cetățenilor?",
          "options": [
            "Programul Rabla doar pentru mașini",
            "Programul Prima Casă",
            "Programul Litoralul pentru toți",
            "Programul Casa Verde Fotovoltaice"
          ],
          "answerIndex": 3,
          "explanation": "Programul Casa Verde Fotovoltaice."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce material natural ecologic tradițional este refolosit astăzi în România pentru construcția de case ecologice cu izolație termică excepțională?",
          "options": [
            "Fierul vechi",
            "Plasticul topit",
            "Cauciucul sintetic",
            "Lutul și baloții de paie"
          ],
          "answerIndex": 3,
          "explanation": "Lutul și baloții de paie (cob).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Rooftop photovoltaic solar installations and geothermal heat pumps drastically cut residential carbon emissions and utility bills.\"",
          "options": [
            "Energia verde este interzisă în România.",
            "Panourile solare cresc poluarea casnică.",
            "Instalațiile solare fotovoltaice de pe acoperiș și pompele de căldură geotermale reduc drastic emisiile rezidențiale de carbon și facturile de utilități.",
            "Pompele de căldură nu pot încălzi o casă."
          ],
          "answerIndex": 2,
          "explanation": "Accurate green energy statement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Case pasive și locuințe inteligente în România"
  },
  "ro-u19-l1": {
    "id": "ro-u19-l1",
    "unit": "ro-u19",
    "level": "B1",
    "objective": "Piața muncii în România (eJobs, BestJobs, LinkedIn), Codul Muncii (CIM pe durată nedeterminată), salariul brut vs net, tichete de masă și ITM.",
    "presentation": {
      "explanation": "Piața muncii și dreptul muncii în România:\n- Portaluri principale de recrutare: eJobs, BestJobs, LinkedIn România\n- Contractul Individual de Muncă (CIM - conform Codului Muncii, Legea nr. 53/2003):\n  - CIM pe durată nedeterminată (Regula generală pentru stabilitatea angajatului)\n  - Perioada de probă (Maxim 90 de zile calendaristice pentru funcții de execuție și 120 de zile pentru funcții de conducere)\n  - Înregistrarea în registrul electronic REVISAL / Reges la Inspectoratul Teritorial de Muncă (ITM)\n- Fluturașul de salariu:\n  - Salariul brut vs Salariul net primit pe card\n  - Contribuții sociale obligatorii: CAS (Pensii 25%), CASS (Sănătate 10%) și Impozit pe venit (10%)\n  - Tichete de masă (Bonuri de masă electronice pe card Edenred/Sodexo/Pluxee scutite de impozit)",
      "examples": [
        {
          "target": "Am semnat un contract individual de muncă pe durată nedeterminată cu asigurare medicală privată și tichete de masă lunare.",
          "reading": "Am sem-NAT oon kon-TRAKT een-dee-vee-doo-AL de MOON-kuh...",
          "translation": "I signed a permanent individual employment contract with private health insurance and monthly meal vouchers."
        }
      ],
      "mnemonics": [
        "CIM pe durată nedeterminată + Tichete de masă + REVISAL la ITM = Romanian employment security!"
      ],
      "culturalNotes": [
        "Meal vouchers (tichete de masă) on dedicated digital cards are an immensely popular non-taxable fringe benefit across Romanian companies."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este tipul standard de contract individual de muncă ce asigură stabilitate pe termen lung în România?",
          "options": [
            "Contract verbal fără acte",
            "Contract de o singură zi",
            "Acord neoficial",
            "CIM pe durată nedeterminată"
          ],
          "answerIndex": 3,
          "explanation": "CIM pe durată nedeterminată."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cum se numesc beneficiile extra-salariale acordate pe card electronic pentru achiziția de alimente la prânz?",
          "options": [
            "Bilete de tren",
            "Puncte de penalizare",
            "Chitanțe de amendă",
            "Tichete de masă"
          ],
          "answerIndex": 3,
          "explanation": "Tichete de masă."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este registrul electronic național oficial în care angajatorii înregistrează toate contractele de muncă la ITM?",
          "options": [
            "Cartea funciară",
            "Catalogul școlar",
            "Registrul REVISAL",
            "Jurnalul de bord"
          ],
          "answerIndex": 2,
          "explanation": "Registrul REVISAL.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"The employee signed a permanent contract with a competitive net salary and full health insurance coverage.\"",
          "options": [
            "Angajatul a fost concediat fără motiv.",
            "Angajatul a semnat un contract pe durată nedeterminată cu un salariu net competitiv și asigurare medicală completă.",
            "Salariul nu a fost plătit.",
            "Nu există asigurare medicală în contract."
          ],
          "answerIndex": 1,
          "explanation": "Accurate employment contract translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 19, Lesson 1: Piața muncii în România (eJobs"
  },
  "ro-u19-l2": {
    "id": "ro-u19-l2",
    "unit": "ro-u19",
    "level": "B1",
    "objective": "Cultura la birou în România: Pauza de cafea („la o cafea”), concediu de odihnă (minim 20-21 zile), teambuilding-uri la munte și munca hibridă.",
    "presentation": {
      "explanation": "Dinamica biroului și cultura organizațională în România:\n- Ritualul cafelei de dimineață („Hai la o cafea!”):\n  - Moment de socializare și conectare între colegi la bucătăria biroului sau la cafeneaua din apropiere, unde se discută proiectele într-o atmosferă caldă\n- Concediul de odihnă anual plătit:\n  - Minim 20 de zile lucrătoare garantate prin Codul Muncii (majoritatea companiilor multinaționale oferind între 21 și 25 de zile în funcție de vechime)\n  - Zile libere legale de sărbători naționale (Paște, Crăciun, 1 Decembrie - Ziua Națională)\n- Evenimente de companie: Teambuilding-uri de weekend la munte (pe Valea Prahovei, la Brașov sau Sibiu) cu drumeții și foc de tabără\n- Munca hibridă (2 zile de la birou, 3 zile telemuncă de acasă)",
      "examples": [
        {
          "target": "Munca în regim hibrid și teambuilding-ul anual la munte au consolidat spiritul de echipă și comunicarea deschisă.",
          "reading": "MOON-ka een re-ZHEEM HEE-breed shee teem-BEEL-deeng-ool...",
          "translation": "Hybrid working and the annual mountain teambuilding consolidated team spirit and open communication."
        }
      ],
      "mnemonics": [
        "„Hai la o cafea!” + Teambuilding la munte (Brașov/Sibiu) + Concediu minim 21 zile = Romanian office warmth!"
      ],
      "culturalNotes": [
        "Inviting a colleague \"la o cafea\" (for a coffee) is the universal Romanian gateway to building genuine office trust, mentoring, and cross-departmental collaboration."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este numărul minim legal de zile lucrătoare de concediu de odihnă anual plătit în România?",
          "options": [
            "Minim 20 de zile lucrătoare",
            "Zero zile",
            "Doar 3 zile",
            "O singură zi"
          ],
          "answerIndex": 0,
          "explanation": "Minim 20 de zile lucrătoare."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unde se organizează cel mai frecvent teambuilding-urile de companie pentru angajații din marile orașe din România?",
          "options": [
            "La munte",
            "Într-un depozit industrial",
            "Pe o navă cargo",
            "Într-un buncăr subteran"
          ],
          "answerIndex": 0,
          "explanation": "La munte (Brașov/Valea Prahovei)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este expresia colocvială zilnică folosită de colegii de birou pentru a lua o scurtă pauză de socializare?",
          "options": [
            "„Hai la judecată!”",
            "„Hai la o cafea!”",
            "„Să plecăm din țară!”",
            "„Gata cu munca pentru totdeauna!”"
          ],
          "answerIndex": 1,
          "explanation": "„Hai la o cafea!”",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Flexible hybrid work arrangements and mountain teambuildings boost workplace motivation and employee wellbeing.\"",
          "options": [
            "Programul flexibil de muncă hibridă și teambuilding-urile la munte sporesc motivația la locul de muncă și starea de bine a angajaților.",
            "Angajații nu au dreptul la concediu de odihnă.",
            "Pauza de cafea este sancționată.",
            "Telemunca a fost interzisă prin lege."
          ],
          "answerIndex": 0,
          "explanation": "Accurate workplace culture translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Cultura la birou în România"
  },
  "ro-u19-l3": {
    "id": "ro-u19-l3",
    "unit": "ro-u19",
    "level": "B1",
    "objective": "Protecția socială în România: Concediul de creștere a copilului (până la 2 ani cu 85% din venituri), indemnizația de maternitate și protecția împotriva concedierii.",
    "presentation": {
      "explanation": "Drepturile părinților și protecția socială avansată în România:\n- Concediul de Creștere a Copilului (CCC - Unul dintre cele mai generoase din Europa):\n  - Până la împlinirea vârstei de 2 ani a copilului (sau 3 ani pentru copilul cu dizabilități)\n  - Indemnizație lunară plătită de stat în cuantum de 85% din media veniturilor nete realizate în ultimele 12 luni\n  - Poate fi luat de oricare dintre părinți (mamă sau tată, cu minim 2 luni obligatorii pentru celălalt părinte - \"luna tatălui\")\n  - Stimulent de inserție (Bonus financiar acordat dacă părintele se întoarce la muncă înainte de împlinirea vârstei de 2 ani a copilului)\n- Protecția strictă a locului de muncă împotriva concedierii pe durata sarcinii, a concediului de maternitate și a concediului de creștere a copilului",
      "examples": [
        {
          "target": "România oferă până la doi ani de concediu plătit de creștere a copilului cu optzeci și cinci la sută din media veniturilor nete.",
          "reading": "Ro-MUH-nya o-FE-ruh POO-nuh la doy an de kon-CHE-dyoo...",
          "translation": "Romania offers up to two years of paid parental child-raising leave with 85 percent of average net income."
        }
      ],
      "mnemonics": [
        "CCC (2 ani de concediu plătit) + 85% din venituri + Stimulent de inserție = One of Europe's most generous parental leave systems!"
      ],
      "culturalNotes": [
        "Romania's 2-year paid parental leave system with 85% income replacement is recognized across Europe as a benchmark for early childhood bonding and maternal support."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Până la ce vârstă a copilului se poate acorda concediul plătit de creștere a copilului (CCC) în România?",
          "options": [
            "Până la 1 lună doar",
            "Până la vârsta de 2 ani",
            "Până la 18 ani",
            "Doar 3 săptămâni"
          ],
          "answerIndex": 1,
          "explanation": "Până la 2 ani."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care este procentul din media veniturilor nete plătit ca indemnizație lunară pentru creșterea copilului?",
          "options": [
            "85% din media veniturilor nete",
            "100% fix indiferent de salariu",
            "10%",
            "50%"
          ],
          "answerIndex": 0,
          "explanation": "85% din veniturile nete."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum se numește bonusul financiar lunar acordat de stat părintelui care alege să revină la serviciu mai devreme din CCC?",
          "options": [
            "Stimulentul de inserție",
            "Amenda de reîntoarcere",
            "Bursa de merit",
            "Taxa de penalizare"
          ],
          "answerIndex": 0,
          "explanation": "Stimulentul de inserție.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Statutory child-raising leave allows mothers and fathers to take up to two years of paid parental leave with job security.\"",
          "options": [
            "Concediul parental nu este remunerat.",
            "Părinții sunt concediați imediat ce au un copil.",
            "România nu acordă concediu de maternitate.",
            "Concediul legal de creștere a copilului le permite mamelor și taților să beneficieze de până la doi ani de concediu parental plătit cu siguranța locului de muncă."
          ],
          "answerIndex": 3,
          "explanation": "Accurate parental leave translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Protecția socială în România"
  },
  "ro-u19-l4": {
    "id": "ro-u19-l4",
    "unit": "ro-u19",
    "level": "B1",
    "objective": "Polul tehnologic al Europei de Est: Cluj-Napoca („Silicon Valley de România”), București, unicornul UiPath (Daniel Dines) și Bitdefender.",
    "presentation": {
      "explanation": "Revoluția IT, hub-urile tehnologice și unicornii românești:\n- Cluj-Napoca și București (Marile centre de inginerie software și inovare):\n  - Cluj-Napoca: Cunoscut internațional drept „Silicon Valley al Europei de Est” datorită ecosistemului universitar (Universitatea Tehnică din Cluj-Napoca, UBB) și zecilor de mii de dezvoltatori software\n- Unicornul global UiPath (Fondat de Daniel Dines și Marius Tîrcă la București în 2005):\n  - Liderul mondial absolut în Robotic Process Automation (RPA) și automatizare cu inteligență artificială, listat la bursa de la New York (NYSE: PATH)\n- Bitdefender (Florin și Măriuca Talpeș):\n  - Lider global în securitate cibernetică și protecție antivirus utilizat de peste 500 de milioane de utilizatori și integrat în marile sisteme de securitate din întreaga lume\n- Fintech și gaming: FintechOS, Elrond (MultiversX), Amber Studio",
      "examples": [
        {
          "target": "UiPath este primul unicorn românesc devenit lider mondial în automatizarea proceselor prin roboți software și inteligență artificială.",
          "reading": "UiPath YES-te PREEM-ool oo-nee-KORN ro-muh-NESK...",
          "translation": "UiPath is the first Romanian unicorn to become the world leader in robotic process automation and artificial intelligence."
        }
      ],
      "mnemonics": [
        "UiPath (Daniel Dines - World #1 in RPA Automation) + Bitdefender (Global Cybersecurity) + Cluj-Napoca Tech Hub = Romanian tech supremacy!"
      ],
      "culturalNotes": [
        "UiPath started in an apartment in Bucharest and grew into a multibillion-dollar NYSE-listed software powerhouse, transforming Romania into a global hub for enterprise automation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este primul unicorn tehnologic fondat în România de Daniel Dines, devenit lider mondial în Robotic Process Automation (RPA)?",
          "options": [
            "Spotify",
            "UiPath",
            "Nokia",
            "Skype"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"UiPath\". This directly applies the principle of: Polul tehnologic al Europei de Est: Cluj-Napoca („Silicon Valley de România”), București, unicornul UiPath (Daniel Dines) și Bitdefender.."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care companie românească de securitate cibernetică fondată de familia Talpeș protejează sute de milioane de computere din întreaga lume?",
          "options": [
            "Banca Transilvania",
            "Bitdefender",
            "Tarom",
            "Dacia"
          ],
          "answerIndex": 1,
          "explanation": "Bitdefender."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care oraș universitar din Transilvania este supranumit „Silicon Valley al Europei de Est” datorită industriei sale software înfloritoare?",
          "options": [
            "Constanța",
            "Craiova",
            "Galați",
            "Cluj-Napoca"
          ],
          "answerIndex": 3,
          "explanation": "Cluj-Napoca.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Romanian software engineering excellence and visionary founders transformed Bucharest and Cluj into leading European technology hubs.\"",
          "options": [
            "România nu are specialiști în IT.",
            "Nu există companii de securitate cibernetică în România.",
            "Excelența ingineriei software românești și fondatorii vizionari au transformat Bucureștiul și Clujul în centre tehnologice europene de top.",
            "UiPath a fost închisă."
          ],
          "answerIndex": 2,
          "explanation": "Accurate tech ecosystem translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Polul tehnologic al Europei de Est"
  },
  "ro-u19-l5": {
    "id": "ro-u19-l5",
    "unit": "ro-u19",
    "level": "B1",
    "objective": "Giganți industriali și campioni economici ai României: Automobile Dacia (Uzina Mioveni - Duster/Sandero), OMV Petrom, Banca Transilvania și Hidroelectrica.",
    "presentation": {
      "explanation": "Campioni industriali și forța economică a României:\n- Automobile Dacia (Uzina de la Mioveni, Argeș - Grupul Renault):\n  - Cel mai mare exportator și cel mai mare producător auto din România\n  - Modelele Dacia Duster și Sandero sunt printre cele mai vândute și apreciate mașini de familie din întreaga Europă (Dacia Sandero fiind adesea mașina numărul 1 la vânzări către persoane fizice în Europa)\n- Hidroelectrica (Cel mai mare producător de energie 100% verde și regenerabilă din România, operând barajul de la Porțile de Fier, cu o listare record la Bursa de Valori București - BVB)\n- Banca Transilvania (Cea mai mare bancă din Europa de Sud-Est, născută ca o inițiativă a antreprenorilor clujeni)\n- OMV Petrom (Liderul energetic integrat în extracție, rafinare și proiectul de gaze de mare adâncime Neptun Deep din Marea Neagră)",
      "examples": [
        {
          "target": "Uzina Dacia de la Mioveni produce modelele Duster și Sandero, care domină topul vânzărilor auto pe piața europeană.",
          "reading": "oo-ZEE-na DA-chya de la myo-VEN pro-DOO-se mo-DE-le-le...",
          "translation": "The Dacia plant in Mioveni produces the Duster and Sandero models, which dominate automotive sales charts on the European market."
        }
      ],
      "mnemonics": [
        "Dacia Mioveni (Europe's best-selling Sandero/Duster) + Hidroelectrica (Clean Green Energy Giant) + Banca Transilvania = Romanian industrial power!"
      ],
      "culturalNotes": [
        "The Dacia Sandero has repeatedly ranked as the #1 best-selling passenger car to private buyers across the entire European Union, celebrated for reliability, value, and robust engineering."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este cel mai mare producător și exportator auto din România, având uzina principală la Mioveni?",
          "options": [
            "Automobile Dacia",
            "Fiat",
            "Seat",
            "Peugeot"
          ],
          "answerIndex": 0,
          "explanation": "Automobile Dacia."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Care companie energetică de stat este cel mai mare producător de energie 100% verde și hidroelectrică din România?",
          "options": [
            "Termoelectrica",
            "CFR Călători",
            "Poșta Română",
            "Hidroelectrica"
          ],
          "answerIndex": 3,
          "explanation": "Hidroelectrica."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este cea mai mare bancă din România și din Europa de Sud-Est, fondată la Cluj-Napoca de antreprenori locali?",
          "options": [
            "Banca Japoniei",
            "Banca Mondială",
            "Banca Transilvania",
            "Banca Angliei"
          ],
          "answerIndex": 2,
          "explanation": "Banca Transilvania.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Tradu: \"Advanced automotive manufacturing and clean hydroelectric power generation drive Romania's robust industrial export competitiveness.\"",
          "options": [
            "Dacia nu mai produce mașini.",
            "Producția auto avansată și generarea de energie hidroelectrică curată susțin competitivitatea robustă a exporturilor industriale ale României.",
            "Băncile românești nu finanțează economia.",
            "Hidroelectrica produce energie poluantă din cărbune."
          ],
          "answerIndex": 1,
          "explanation": "Accurate industrial economics translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Giganți industriali și campioni economici ai României"
  },
  "ro-u20-l1": {
    "id": "ro-u20-l1",
    "unit": "ro-u20",
    "level": "C1",
    "objective": "Romanian geography, the Carpathian Mountains, Danube Delta biosphere, and virgin forest conservation (Carpații Românești, Delta Dunării - UNESCO, păduri virgine, râsul carpatin, Parcul Național Retezat).",
    "presentation": {
      "explanation": "Romania's natural geography and UNESCO World Natural Heritage:\n- **Delta Dunării (Danube Delta - UNESCO)**:\n  - Europe's best preserved and second largest river delta (over 5,000 km² of reed beds, floating islands / plaur, and canals).\n  - Home to over 300 bird species, including Europe's largest breeding colony of great white pelicans (*Pelicanul comun*) and sacred Letea ancient sand dune oak forest.\n- **Carpații Românești (The Romanian Carpathians)**:\n  - Over 50% of the Carpathian mountain range lies in Romania, harboring the largest populations of large carnivores in Europe outside Russia:\n  - **Ursul brun carpatin** (Carpathian brown bear - 6,000+ individuals), **lupul cenușiu** (grey wolf), and **râsul eurasiatic** (Eurasian lynx).\n  - **Pădurile virgine și cvasivirgine**: Primeval European beech and coniferous forests protected under national and UNESCO charters.\n  - **Parcul Național Retezat**: Alpine glacial lakes (Lacul Bucura) and biodiversity sanctuary.",
      "examples": [
        {
          "target": "Delta Dunării și pădurile seculare din Carpații Românești adăpostesc cele mai mari populații de lupi, urși bruni și râși din întreaga Uniune Europeană.",
          "reading": "Del-ta Doo-nuh-ree shee puh-doo-ree-le se-koo-la-re...",
          "translation": "The Danube Delta and secular virgin forests of the Romanian Carpathians shelter the largest populations of wolves, brown bears, and lynxes in the entire European Union."
        }
      ],
      "mnemonics": [
        "Delta Dunării (UNESCO pelican & wetland haven)! Carpații Românești (6,000+ brown bears & lynxes)! Păduri virgine!"
      ],
      "culturalNotes": [
        "Letea Forest in the Danube Delta is Europe's northernmost subtropical forest, where 700-year-old oak trees grow out of maritime sand dunes intertwined with wild Mediterranean climbing lianas."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which river delta in Romania is recognized as a UNESCO World Heritage site and is home to Europe's largest breeding pelican colonies?",
          "options": [
            "Delta Rinului",
            "Delta Volgăi",
            "Delta Tisei",
            "Delta Dunării"
          ],
          "answerIndex": 3,
          "explanation": "Delta Dunării."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which large carnivore has its largest European population outside Russia residing in the Romanian Carpathian Mountains?",
          "options": [
            "Leul african",
            "Tigrul siberian",
            "Ghepardul",
            "Ursul brun carpatin"
          ],
          "answerIndex": 3,
          "explanation": "Ursul brun carpatin."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Strict protection of virgin Carpathian beech forests safeguards ancient water filtration cycles and endangered apex predators.\"",
          "options": [
            "În România nu există păduri.",
            "Protecția strictă a pădurilor virgine de fag din Carpați garantează ciclurile naturale de filtrare a apei și prădătorii de vârf pe cale de dispariție.",
            "Delta Dunării este un deșert uscat.",
            "Ursul carpatin a dispărut complet."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Carpathian conservation translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is Romania's oldest national park, founded in 1935 in the Retezat Mountains, celebrated for its crystalline glacial lakes like Lacul Bucura?",
          "options": [
            "Parcul Național Retezat",
            "Parcul Herăstrău",
            "Parcul Cișmigiu",
            "Parcul Central Cluj"
          ],
          "answerIndex": 0,
          "explanation": "Parcul Național Retezat.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 1: Romanian geography"
  },
  "ro-u20-l2": {
    "id": "ro-u20-l2",
    "unit": "ro-u20",
    "level": "C1",
    "objective": "Renewable energy in Dobrogea, the Fântânele-Cogealac onshore wind mega-park, and Black Sea biodiversity (parcul eolian Fântânele-Cogealac, energia eoliană din Dobrogea, Marea Neagră).",
    "presentation": {
      "explanation": "Renewable energy transition and wind power leadership in Romania:\n- **Parcul Eolian Fântânele-Cogealac** (Dobrogea):\n  - One of the largest onshore wind farms in Europe (600 MW capacity with 240 wind turbines), generating enough clean electricity to power over 1 million homes.\n- Dobrogea wind corridor between the Danube River and Black Sea coast.\n- Marine and littoral conservation along the Romanian Black Sea coast (Rezervația Marină 2 Mai - Vama Veche).",
      "examples": [
        {
          "target": "Parcul eolian Fântânele-Cogealac din Dobrogea este unul dintre cele mai mari din Europa pe uscat, valorificând curenții constanți dintre Dunăre și Marea Neagră.",
          "reading": "Par-kool e-o-lyan Fuhn-tuh-ne-le...",
          "translation": "The Fântânele-Cogealac wind farm in Dobrogea is one of Europe's largest onshore parks, harnessing constant air currents between the Danube and Black Sea."
        }
      ],
      "mnemonics": [
        "Fântânele-Cogealac (600MW onshore wind giant in Dobrogea)! Dobrogea wind corridor!"
      ],
      "culturalNotes": [
        "Dobrogea has the highest average annual wind speeds in continental southeastern Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian region hosts Europe's largest onshore wind farm at Fântânele-Cogealac?",
          "options": [
            "Dobrogea",
            "Bucovina",
            "Maramureș",
            "Oltenia"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"Dobrogea\". This directly applies the principle of: Renewable energy in Dobrogea, the Fântânele-Cogealac onshore wind mega-park, and Black Sea biodiversity (parcul eolian Fântânele-Cogealac, energia eoliană din Dobrogea, Marea Neagră).."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the power capacity of the Fântânele-Cogealac onshore wind park?",
          "options": [
            "600 MW",
            "10 MW",
            "50 MW",
            "100 MW"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"600 MW\". This directly applies the principle of: Renewable energy in Dobrogea, the Fântânele-Cogealac onshore wind mega-park, and Black Sea biodiversity (parcul eolian Fântânele-Cogealac, energia eoliană din Dobrogea, Marea Neagră).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The expansion of wind and solar capacity supports Romania's statutory goal of reaching carbon neutrality by 2050.\"",
          "options": [
            "Extinderea capacităților eoliene și solare susține obiectivul statutar al României de a atinge neutralitatea climatică până în 2050.",
            "Energia regenerabilă este interzisă.",
            "Parcul eolian nu funcționează.",
            "România nu are energie eoliană."
          ],
          "answerIndex": 0,
          "explanation": "Accurate energy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sea borders Romania to the east?",
          "options": [
            "Marea Baltică",
            "Marea Mediterană",
            "Marea Nordului",
            "Marea Neagră"
          ],
          "answerIndex": 3,
          "explanation": "Marea Neagră.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 2: Renewable energy in Dobrogea"
  },
  "ro-u20-l3": {
    "id": "ro-u20-l3",
    "unit": "ro-u20",
    "level": "C1",
    "objective": "Geothermal waters, salt mine speleotherapy, and thermal spas in Romania (Apele termale de la Băile Felix, Salina Turda, speleoterapie, Parcul Natural Apuseni).",
    "presentation": {
      "explanation": "Geothermal resources, karst formations, and subterranean salt mine heritage in Romania:\n- **Salina Turda** (Cluj):\n  - Spectacular subterranean salt mine dating back to Antiquity, transformed into a subterranean wellness center for speleotherapy (halotherapy treating respiratory conditions).\n- **Băile Felix & Oradea Geothermal Aquifer**:\n  - Naturally heated mineral waters (40–49°C) sustaining the endemic thermal water lily (*Nymphaea lotus thermalis*).\n- **Munții Apuseni**: Karst caverns (Peștera Scărișoara housing a 4,000-year-old subterranean glacier, Peștera Urșilor).",
      "examples": [
        {
          "target": "Salina Turda și apele geotermale de la Băile Felix valorifică bogățiile subterane ale României pentru sănătate, turism curativ și energie regenerabilă.",
          "reading": "Sa-lee-na Toor-da shee ah-pe-le je-o-ter-ma-le...",
          "translation": "Salina Turda and the geothermal waters of Băile Felix harness Romania's subterranean wealth for health, curative wellness tourism, and renewable energy."
        }
      ],
      "mnemonics": [
        "Salina Turda (Subterranean halotherapy wonder)! Băile Felix (Natural geothermal baths)! Peștera Scărișoara (Ancient cave glacier)!"
      ],
      "culturalNotes": [
        "Scărișoara Ice Cave in the Apuseni Mountains contains the second largest subterranean ice block in southeastern Europe, scientifically studied for paleoclimatology."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which famous subterranean salt mine in Transylvania is celebrated globally for its sci-fi architecture and respiratory speleotherapy?",
          "options": [
            "Mina de cărbune Petrila",
            "Salina Turda",
            "București Metro",
            "Canalul Dunăre"
          ],
          "answerIndex": 1,
          "explanation": "Salina Turda."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What thermal resort near Oradea is famous for its natural hot springs and thermal water lilies?",
          "options": [
            "Băile Felix",
            "Sinaia",
            "Mamaia",
            "Predeal"
          ],
          "answerIndex": 0,
          "explanation": "Băile Felix."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Subterranean halotherapy in natural salt mines provides clinically proven relief for asthma and respiratory ailments.\"",
          "options": [
            "Nu există peșteri în Apuseni.",
            "Salina Turda este închisă publicului.",
            "Sarea este toxică pentru plămâni.",
            "Speleoterapia subterană în saline naturale oferă o ameliorare dovedită clinic pentru astm și afecțiuni respiratorii."
          ],
          "answerIndex": 3,
          "explanation": "Accurate speleotherapy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which ancient subterranean glacier cave is located in the Apuseni Mountains of Transylvania?",
          "options": [
            "Peștera Polovragi",
            "Peștera Dâmbovicioara",
            "Peștera Scărișoara",
            "Peștera Muierilor"
          ],
          "answerIndex": 2,
          "explanation": "Peștera Scărișoara.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 3: Geothermal waters"
  },
  "ro-u20-l4": {
    "id": "ro-u20-l4",
    "unit": "ro-u20",
    "level": "C2",
    "objective": "Bison rewilding in the Southern Carpathians and regenerative nature corridors (Zimbrul european, Măgura Zimbrilor în Munții Țarcu, coridoare ecologice, Rewilding Europe).",
    "presentation": {
      "explanation": "Bison restoration and ecosystem engineering in the Southern Carpathians:\n- **Zimbrul European (European Bison - *Bison bonasus*)**:\n  - Europe's largest terrestrial mammal, reintroduced into the wild in the Țarcu and Poiana Ruscă Mountains (Armeniș / Măgura Zimbrilor) by Rewilding Europe and WWF Romania after 200 years of extinction.\n  - A free-roaming herd of over 170 bison creating natural ecological corridors, preventing forest overgrowth, and dispersing plant seeds.\n- Regenerative rural bioeconomy in local mountain communes.",
      "examples": [
        {
          "target": "Reintroducerea zimbrului european în Munții Țarcu reface lanțul trofic natural și creează noi oportunități economice prin ecoturism pentru comunitățile locale.",
          "reading": "Re-in-tro-doo-che-rya zeem-broo-looy...",
          "translation": "The reintroduction of the European bison in the Țarcu Mountains restores the natural food chain and creates new economic opportunities through ecotourism for local communities."
        }
      ],
      "mnemonics": [
        "Zimbrul (European bison restored to Carpathians)! Măgura Zimbrilor (Armeniș wild herd)! Rewilding Romania!"
      ],
      "culturalNotes": [
        "The bison (zimbrul) has been the heraldic symbol of the historical principality of Moldavia since medieval times."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which magnificent mammal—the largest land herbivore in Europe—was successfully rewilded in the Romanian Carpathians after 200 years of extinction?",
          "options": [
            "Elanul siberian",
            "Zimbrul european",
            "Bizonul american",
            "Mamutul"
          ],
          "answerIndex": 1,
          "explanation": "Zimbrul european."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which historical Romanian principality featured the head of a bison (cap de bour/zimbru) on its royal coat of arms?",
          "options": [
            "Banat",
            "Moldova",
            "Crișana",
            "Dobrogea"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"Moldova\". This directly applies the principle of: Bison rewilding in the Southern Carpathians and regenerative nature corridors (Zimbrul european, Măgura Zimbrilor în Munții Țarcu, coridoare ecologice, Rewilding Europe).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Free-roaming bison act as natural ecosystem engineers, opening forest clearings and boosting local biodiversity.\"",
          "options": [
            "Zimbrul este un animal domestic.",
            "În România nu mai există animale sălbatice.",
            "Zimbrii care trăiesc în libertate acționează ca ingineri ai ecosistemului, deschizând luminișuri în pădure și stimulând biodiversitatea locală.",
            "Zimbrii distrug pădurile carpatine."
          ],
          "answerIndex": 2,
          "explanation": "Accurate rewilding translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which mountain range of the Southern Carpathians is the wild bison reserve of Măgura Zimbrilor located?",
          "options": [
            "Munții Ceahlău",
            "Munții Țarcu",
            "Munții Bucegi",
            "Munții Rodnei"
          ],
          "answerIndex": 1,
          "explanation": "Munții Țarcu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 4: Reintroducerea zimbrului europ"
  },
  "ro-u20-l5": {
    "id": "ro-u20-l5",
    "unit": "ro-u20",
    "level": "C2",
    "objective": "C2 synthesis on Romania's 2050 Climate Neutrality strategy, nuclear SMRs, and Black Sea offshore energy (Neutralitatea climatică 2050, reactoare nucleare modulare mici - SMR la Doicești, eolian offshore).",
    "presentation": {
      "explanation": "Nuclear innovation, offshore wind, and C2 climate policy in Romania:\n- Small Modular Nuclear Reactors (**Reactoare Modulare Mici - SMR**):\n  - Romania is pioneering the first NuScale Small Modular Reactor deployment in Europe at Doicești (Dâmbovița), providing clean baseload electricity.\n  - Expansion of units 3 and 4 at Cernavodă Nuclear Power Plant (CANDU technology).\n- Offshore Black Sea Clean Energy Legislation:\n  - National framework for offshore wind development in the Black Sea (up to 7 GW potential).\n- Net-Zero 2050 National Strategy: Decarbonizing district heating and industrial transport.",
      "examples": [
        {
          "target": "România combină energia nucleară avansată cu parcuri eoliene offshore în Marea Neagră pentru a asigura independența energetică și neutralitatea climatică până în 2050.",
          "reading": "Ro-muh-nya kom-bee-nuh e-ner-jee-ya...",
          "translation": "Romania combines advanced nuclear energy with offshore wind parks in the Black Sea to ensure energy independence and climate neutrality by 2050."
        }
      ],
      "mnemonics": [
        "SMR Doicești (First small modular reactor in Europe)! Cernavodă CANDU! Eolian offshore Marea Neagră! Net-Zero 2050!"
      ],
      "culturalNotes": [
        "Cernavodă Nuclear Power Plant uses Canadian CANDU heavy water reactors, allowing refueling without shutting down reactor operation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which innovative clean nuclear technology is Romania pioneering with the first European commercial deployment site at Doicești?",
          "options": [
            "Reactoare Modulare Mici (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Centrale pe cărbune brun (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Generatoare diesel (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Reactoare de fuziune militară (C2 synthesis on Romanias 2050 Climate Neutrality strategy)"
          ],
          "answerIndex": 0,
          "explanation": "Reactoare Modulare Mici (SMR)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is Romania's statutory target year for achieving net-zero greenhouse gas emissions under EU and national climate laws?",
          "options": [
            "2025 (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "2100 (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "2030 (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "2050 (C2 synthesis on Romanias 2050 Climate Neutrality strategy)"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"2050 (C2 synthesis on Romanias 2050 Climate Neutrality strategy)\". This directly applies the principle of: C2 synthesis on Romania's 2050 Climate Neutrality strategy, nuclear SMRs, and Black Sea offshore energy (Neutralitatea climatică 2050, reactoare nucleare modulare mici - SMR la Doicești, eolian offshore).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Deploying offshore wind in the Black Sea and advanced modular reactors guarantees clean baseload electricity for Central and Eastern Europe.\"",
          "options": [
            "Marea Neagră nu are potențial eolian. (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Dezvoltarea energiei eoliene offshore în Marea Neagră și a reactoarelor modulare avansate garantează electricitate curată în bandă pentru Europa Centrală și de Est. (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Neutralitatea climatică a fost anulată. (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Energia nucleară este interzisă în România. (C2 synthesis on Romanias 2050 Climate Neutrality strategy)"
          ],
          "answerIndex": 1,
          "explanation": "Accurate energy policy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Romanian nuclear power plant on the Danube-Black Sea Canal produces ~20% of national electricity with zero carbon emissions?",
          "options": [
            "Centrala Nucleară Cernavodă (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Centrala Porțile de Fier (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Hidrocentrala Vidraru (C2 synthesis on Romanias 2050 Climate Neutrality strategy)",
            "Termocentrala Turceni (C2 synthesis on Romanias 2050 Climate Neutrality strategy)"
          ],
          "answerIndex": 0,
          "explanation": "Centrala Nucleară Cernavodă.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 5: C2 synthesis on Romania's 2050 Climate Neutrality strategy"
  },
  "ro-u21-l1": {
    "id": "ro-u21-l1",
    "unit": "ro-u21",
    "level": "C1",
    "objective": "Romanian medical pioneers: Nicolae Paulescu (discoverer of pancreine / insulin), George Emil Palade (Nobel laureate in cell biology), and Cantacuzino Institute (Nicolae Paulescu, George Emil Palade - ribozomii, Institutul Cantacuzino, bacteriologie).",
    "presentation": {
      "explanation": "Romanian world pioneers in physiology, endocrinology, and cellular biology:\n- **Nicolae Paulescu (1869–1931)**:\n  - Discovered **pancreine** (insulin) in 1916 and patented the physiological extraction of the antidiabetic hormone from the pancreas in 1921, demonstrating that pancreine lowered blood glucose in diabetic animals.\n- **George Emil Palade (1912–2008 - 1974 Nobel Prize in Physiology or Medicine)**:\n  - The father of modern cell biology; used electron microscopy and cell fractionation to discover the **ribosome** (originally called \"Palade's granules\") and unravel the cellular secretory protein pathway.\n- **Institutul Cantacuzino** (Bucharest):\n  - Founded by bacteriologist Ioan Cantacuzino in 1921; historic institution producing serums, vaccines against cholera, typhus, and tuberculosis (BCG vaccine).",
      "examples": [
        {
          "target": "Descoperirea pancreinei de către Nicolae Paulescu și cercetările lui George Emil Palade asupra ribozomilor au redefinit fundamental endocrinologia și biologia celulară mondială.",
          "reading": "Des-ko-pe-ree-rya pan-krey-ney...",
          "translation": "The discovery of pancreine by Nicolae Paulescu and George Emil Palade's research on ribosomes fundamentally redefined global endocrinology and cell biology."
        }
      ],
      "mnemonics": [
        "Nicolae Paulescu (Pancreine / Insulin extraction pioneer 1916-1921)! George Emil Palade (1974 Nobel Prize for Ribosomes)! Institutul Cantacuzino!"
      ],
      "culturalNotes": [
        "The International Diabetes Federation (IDF) officially recognized Nicolae Paulescu's pioneering scientific priority in the extraction of insulin."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian cell biologist won the 1974 Nobel Prize in Physiology or Medicine for discovering the ribosome (Palade's granules)?",
          "options": [
            "Nicolae Paulescu",
            "Ioan Cantacuzino",
            "Victor Babeș",
            "George Emil Palade"
          ],
          "answerIndex": 3,
          "explanation": "George Emil Palade."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What antidiabetic hormone extract did Romanian physiologist Nicolae Paulescu discover and isolate in 1916–1921?",
          "options": [
            "Penicilina",
            "Adrenalina",
            "Pancreina",
            "Tiroxina"
          ],
          "answerIndex": 2,
          "explanation": "Pancreina (Insulin)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"George Emil Palade's electron microscopy research unraveled the mechanisms of protein synthesis and vesicular transport within eukaryotic cells.\"",
          "options": [
            "Cercetările de microscopie electronică ale lui George Emil Palade au descifrat mecanismele sintezei proteice și ale transportului vezicular în celulele eucariote.",
            "Palade a inventat vaccinul antirabic.",
            "Institutul Cantacuzino a fost fondat în secolul al XVIII-lea.",
            "Paulescu a studiat exclusiv geologia."
          ],
          "answerIndex": 0,
          "explanation": "Accurate cell biology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious Bucharest scientific institute was founded in 1921 for vaccine production and microbiological epidemiology?",
          "options": [
            "Palatul Parlamentului",
            "Banca Națională a României",
            "Teatrul Național",
            "Institutul Național de Cercetare-Dezvoltare Medico-Militară „Cantacuzino”"
          ],
          "answerIndex": 3,
          "explanation": "Institutul Cantacuzino.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Romanian medical pioneers"
  },
  "ro-u21-l2": {
    "id": "ro-u21-l2",
    "unit": "ro-u21",
    "level": "C1",
    "objective": "Emergency medicine revolution: SMURD, Dr. Raed Arafat, and mobile intensive care helicopters (SMURD - Serviciul Mobil de Urgență, Reanimare și Descarcerare, Dr. Raed Arafat, heli-ambulanțe, medicina de urgență prespitalicească).",
    "presentation": {
      "explanation": "Pre-hospital emergency medicine and rescue aviation in Romania:\n- **SMURD (Serviciul Mobil de Urgență, Reanimare și Descarcerare)**:\n  - Created in 1990 in Târgu Mureș by Dr. Raed Arafat; combined firefighters with emergency trauma physicians and mobile intensive care units.\n  - Integrated under the Department for Emergency Situations (**DSU - Departamentul pentru Situații de Urgență**) into a world-class integrated paramedic and physician emergency response system.\n- Helicopter Emergency Medical Service (**Heli-ambulanțe SMURD**):\n  - Fleet of Eurocopter/Airbus H135 helicopters providing rapid mountain rescue across the Carpathians and offshore Black Sea evacuations.\n- Universal 112 emergency dispatch.",
      "examples": [
        {
          "target": "Serviciul SMURD și flota de elicoptere medicale de urgență asigură intervenții de reanimare prespitalicească de nivel mondial în cele mai greu accesibile zone montane din Carpați.",
          "reading": "Ser-vee-chyool SMURD shee flo-ta de e-lee-kop-te-re...",
          "translation": "The SMURD service and fleet of emergency medical helicopters provide world-class pre-hospital resuscitation interventions in the most inaccessible mountain zones of the Carpathians."
        }
      ],
      "mnemonics": [
        "SMURD (Mobile emergency resuscitation & extrication since 1990)! Dr. Raed Arafat! Heli-ambulanțe H135! 112 integrat!"
      ],
      "culturalNotes": [
        "SMURD is widely regarded as one of the most trusted and efficient public emergency medical services in Central and Eastern Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What integrated pre-hospital emergency medical, resuscitation, and extrication service was created in Romania in 1990 by Dr. Raed Arafat?",
          "options": [
            "SMURD",
            "Tarom",
            "CFR",
            "Poșta Română"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"SMURD\". This directly applies the principle of: Emergency medicine revolution: SMURD, Dr. Raed Arafat, and mobile intensive care helicopters (SMURD - Serviciul Mobil de Urgență, Reanimare și Descarcerare, Dr. Raed Arafat, heli-ambulanțe, medicina de urgență prespitalicească).."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What single emergency phone number connects citizens in Romania to ambulance, police, and SMURD emergency services?",
          "options": [
            "112",
            "911",
            "999",
            "100"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"112\". This directly applies the principle of: Emergency medicine revolution: SMURD, Dr. Raed Arafat, and mobile intensive care helicopters (SMURD - Serviciul Mobil de Urgență, Reanimare și Descarcerare, Dr. Raed Arafat, heli-ambulanțe, medicina de urgență prespitalicească).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Mobile intensive care ambulances staffed with emergency physicians provide immediate advanced life support directly at the scene of road accidents.\"",
          "options": [
            "SMURD este un serviciu privat cu plată.",
            "În România nu există elicoptere de salvare.",
            "Medicina de urgență nu folosește medici.",
            "Ambulanțele de terapie intensivă mobilă încadrate cu medici urgentiști oferă suport avansat de viață imediat la locul accidentelor rutiere."
          ],
          "answerIndex": 3,
          "explanation": "Accurate emergency medicine translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which Transylvanian city was SMURD originally established as a voluntary emergency experiment in 1990?",
          "options": [
            "București",
            "Constanța",
            "Târgu Mureș",
            "Iași"
          ],
          "answerIndex": 2,
          "explanation": "Târgu Mureș.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Emergency medicine revolution"
  },
  "ro-u21-l3": {
    "id": "ro-u21-l3",
    "unit": "ro-u21",
    "level": "C1",
    "objective": "World medical pathology: Victor Babeș, infectious diseases, and the Babes-Bolyai legacy (Victor Babeș, bacteriologie și anatomie patologică, piroplasmoza / Babesia, tratatul de bacteriologie din 1885).",
    "presentation": {
      "explanation": "Pathology, infectious disease discovery, and the historic legacy of Victor Babeș:\n- **Dr. Victor Babeș (1854–1926)**:\n  - Co-authored with Victor André Cornil the **world's first comprehensive treatise on bacteriology (*Les Bactéries*, 1885)**.\n  - Discovered over 50 pathogenic microorganisms, including the tick-borne blood parasite genus named in his honor: ***Babesia*** (causing babesiosis / piroplasmosis).\n  - Pioneered the combination of rabies vaccination with anti-rabies antiserum at the **Institutul Victor Babeș** in Bucharest.\n- Namesake of prestigious **Universitatea Babeș-Bolyai** in Cluj-Napoca.",
      "examples": [
        {
          "target": "Victor Babeș a redactat primul tratat complet de bacteriologie din lume și a descoperit parazitul Babesia, consolidând prestigiul internațional al școlii românești de anatomie patologică.",
          "reading": "Veek-tor Ba-besh a re-dak-tat pree-mool tra-tat...",
          "translation": "Victor Babes authored the world's first complete treatise on bacteriology and discovered the parasite Babesia, consolidating the international prestige of the Romanian school of pathological anatomy."
        }
      ],
      "mnemonics": [
        "Victor Babeș (First bacteriology treatise in 1885)! Babesia (Parasite named after him)! Institutul Victor Babeș!"
      ],
      "culturalNotes": [
        "Victor Babeș worked directly in Paris and Berlin alongside Louis Pasteur, Rudolf Virchow, and Robert Koch before returning to Romania to establish modern pathology."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian medical scientist authored the world's first treatise on bacteriology in 1885 and discovered the genus Babesia?",
          "options": [
            "Victor Babeș",
            "Emil Cioran",
            "Mircea Eliade",
            "Henri Coandă"
          ],
          "answerIndex": 0,
          "explanation": "Victor Babeș."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What tick-borne protozoan parasite was named by the international scientific community in honor of Dr. Victor Babeș?",
          "options": [
            "Babesia",
            "Amoeba",
            "Plasmodium",
            "Giardia"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"Babesia\". This directly applies the principle of: World medical pathology: Victor Babeș, infectious diseases, and the Babes-Bolyai legacy (Victor Babeș, bacteriologie și anatomie patologică, piroplasmoza / Babesia, tratatul de bacteriologie din 1885).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The combined application of vaccine antigens with therapeutic antisera established by Victor Babes laid the foundations of modern serotherapy.\"",
          "options": [
            "Babesioza este o boală vegetală.",
            "Bacteriologia a fost inventată în secolul al XXI-lea.",
            "Aplicarea combinată a antigenelor vaccinale cu seruri terapeutice dezvoltată de Victor Babeș a pus bazele seroterapiei moderne.",
            "Victor Babeș a respins teoria germenilor."
          ],
          "answerIndex": 2,
          "explanation": "Accurate pathology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which European capital city did Victor Babeș establish the National Institute of Pathology and Biomedical Research in 1887?",
          "options": [
            "Budapesta",
            "București",
            "Praga",
            "Viena"
          ],
          "answerIndex": 1,
          "explanation": "București.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "World medical pathology"
  },
  "ro-u21-l4": {
    "id": "ro-u21-l4",
    "unit": "ro-u21",
    "level": "C2",
    "objective": "Gerontology pioneer Ana Aslan, Gerovital H3, and anti-aging medicine (Ana Aslan, Institutul Național de Gerontologie și Geriatrie, Gerovital H3, Aslavital, geriatrie socială).",
    "presentation": {
      "explanation": "Gerontology pioneering, Procaine therapy, and healthy longevity in Romania:\n- **Dr. Ana Aslan (1897–1988)**:\n  - Created the **world's first specialized Institute of Gerontology and Geriatrics** in Bucharest in 1952 (recognized by WHO).\n  - Formulated **Gerovital H3 (GH3)**: Procaine-based therapeutic formulation demonstrating neuroprotective, cellular regenerative, and anti-atherosclerotic effects on elderly patients.\n  - Formulated **Aslavital** for cognitive vitality and memory retention.\n- Social Geriatrics Model:\n  - Treating aging not as an incurable disease, but as a biological process that can be medically optimized and socially enriched.",
      "examples": [
        {
          "target": "Doctorul Ana Aslan a înființat primul institut de geriatrie din lume și a creat Gerovital H3, revoluționând cercetarea internațională asupra longevității active și prevenției senescenței.",
          "reading": "Dok-to-rool Ah-na As-lan a een-fee-in-tsat...",
          "translation": "Dr. Ana Aslan established the world's first geriatrics institute and created Gerovital H3, revolutionizing international research on active longevity and senescence prevention."
        }
      ],
      "mnemonics": [
        "Ana Aslan (World's first Gerontology Institute 1952)! Gerovital H3 (Procaine cellular therapy)! Longeviv activ!"
      ],
      "culturalNotes": [
        "Global figures including Charles de Gaulle, Charlie Chaplin, Salvador Dalí, and John F. Kennedy visited Bucharest to undergo Dr. Ana Aslan's Gerovital treatments."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian physician founded the world's first Institute of Gerontology and Geriatrics in 1952 and created Gerovital H3?",
          "options": [
            "Sofia Ionescu",
            "Dr. Ana Aslan",
            "Elena Ceaușescu",
            "Maria Cuțarida-Crătunescu"
          ],
          "answerIndex": 1,
          "explanation": "Dr. Ana Aslan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What procaine-based therapeutic preparation created by Ana Aslan gained worldwide fame for anti-aging and geriatric therapy?",
          "options": [
            "Cortizon",
            "Gerovital H3",
            "Insulina",
            "Aspirina simplă"
          ],
          "answerIndex": 1,
          "explanation": "Gerovital H3."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Active gerontology combines cellular anti-aging therapies with cognitive stimulation and physical exercise to extend healthy functional lifespan.\"",
          "options": [
            "Gerovital H3 este o băutură alcoolică.",
            "Gerontologia activă combină terapiile celulare anti-senescență cu stimularea cognitivă și exercițiul fizic pentru a prelungi durata de viață funcțională sănătoasă.",
            "Institutul de Geriatrie a fost închis de OMS.",
            "Ana Aslan a interzis tratarea bătrâneții."
          ],
          "answerIndex": 1,
          "explanation": "Accurate gerontology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which year was the world's first specialized National Institute of Gerontology and Geriatrics founded in Bucharest by Ana Aslan?",
          "options": [
            "1952",
            "1989",
            "2010",
            "1900"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"1952\". This directly applies the principle of: Gerontology pioneer Ana Aslan, Gerovital H3, and anti-aging medicine (Ana Aslan, Institutul Național de Gerontologie și Geriatrie, Gerovital H3, Aslavital, geriatrie socială)..",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 4: Gerontology pioneer Ana Aslan"
  },
  "ro-u21-l5": {
    "id": "ro-u21-l5",
    "unit": "ro-u21",
    "level": "C2",
    "objective": "C2 synthesis on robotic surgery, digital health interoperability, and oncological genomics in Romania (Chirurgie robotică da Vinci în centre universitare, dosarul electronic de sănătate - DES, radioterapie stereotaxică).",
    "presentation": {
      "explanation": "Minimally invasive robotic surgery and digital oncology transformation in Romania:\n- Robotic Surgery (**Chirurgie Robotică da Vinci & Versius**):\n  - University medical centers in Bucharest, Cluj-Napoca, Iași, and Timișoara perform complex urological, gynecological, and thoracic robotic surgeries with sub-millimeter precision.\n- Stereotactic Radiosurgery & Oncology:\n  - Modern linear accelerators delivering Stereotactic Body Radiation Therapy (SBRT) and TrueBeam radiosurgery for targeted tumor ablation.\n- Digital Healthcare Architecture:\n  - National Electronic Health Record (**Dosarul Electronic de Sănătate - DES**) connecting regional hospitals and family medicine clinics.\n  - Next-generation sequencing (NGS) panels for personalized oncology regimens.",
      "examples": [
        {
          "target": "Integrarea chirurgiei robotice minim invazive și a dosarului electronic de sănătate poziționează centrele universitare medicale din România la standardele excelenței europene.",
          "reading": "In-te-gra-rya kee-roor-jee-ey ro-bo-tee-che...",
          "translation": "The integration of minimally invasive robotic surgery and the electronic health record positions Romanian university medical centers at the standards of European excellence."
        }
      ],
      "mnemonics": [
        "Chirurgie robotică da Vinci (Sub-millimeter minimally invasive surgery)! Dosarul Electronic de Sănătate (DES)! SBRT radioterapie!"
      ],
      "culturalNotes": [
        "Sofia Ionescu-Ogrezeanu (1920–1997) was one of the first female neurosurgeons in the world, performing emergency brain surgeries during World War II in Bucharest."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which female neurosurgery pioneer from Romania is recognized as one of the world's first female neurosurgeons for her emergency wartime brain surgeries in 1944?",
          "options": [
            "Sofia Ionescu-Ogrezeanu (C2 synthesis on robotic surgery)",
            "Ana Aslan (C2 synthesis on robotic surgery)",
            "Florica Bagdasar (C2 synthesis on robotic surgery)",
            "Nadia Comăneci (C2 synthesis on robotic surgery)"
          ],
          "answerIndex": 0,
          "explanation": "Sofia Ionescu-Ogrezeanu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What digital health platform in Romania centralizes patient medical histories, lab results, and surgical reports for doctors?",
          "options": [
            "Cazierul judiciar (C2 synthesis on robotic surgery)",
            "Registrul Comerțului (C2 synthesis on robotic surgery)",
            "Permisul auto (C2 synthesis on robotic surgery)",
            "Dosarul Electronic de Sănătate (C2 synthesis on robotic surgery)"
          ],
          "answerIndex": 3,
          "explanation": "Dosarul Electronic de Sănătate (DES)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Minimally invasive robotic surgery significantly reduces intraoperative blood loss and accelerates post-surgical patient recovery time.\"",
          "options": [
            "Chirurgia robotică minim invazivă reduce semnificativ pierderile de sânge intraoperatorii și accelerează timpul de recuperare postoperatorie a pacientului. (C2 synthesis on robotic surgery)",
            "Chirurgia robotică nu folosește medici chirurgi. (C2 synthesis on robotic surgery)",
            "Radioterapia stereotaxică distruge organele sănătoase. (C2 synthesis on robotic surgery)",
            "DES este un dosar tipărit pe hârtie. (C2 synthesis on robotic surgery)"
          ],
          "answerIndex": 0,
          "explanation": "Accurate robotic surgery translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What advanced robotic surgical system is utilized across Romanian university clinics for complex minimally invasive operations?",
          "options": [
            "Imprimanta 3D (C2 synthesis on robotic surgery)",
            "Robotul industrial de asamblare (C2 synthesis on robotic surgery)",
            "Dronele agricole (C2 synthesis on robotic surgery)",
            "Sistemul chirurgical robotic da Vinci (C2 synthesis on robotic surgery)"
          ],
          "answerIndex": 3,
          "explanation": "Sistemul chirurgical robotic da Vinci.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 5: C2 synthesis on robotic surgery"
  },
  "ro-u22-l1": {
    "id": "ro-u22-l1",
    "unit": "ro-u22",
    "level": "C1",
    "objective": "Lucian Blaga, the Mioritic Space, and stylistic matrices (Lucian Blaga - Spațiul Mioritic, cunoașterea paradisiacă și luciferică, Trilogia culturii, Marele Anonim, corola de minuni a lumii).",
    "presentation": {
      "explanation": "Lucian Blaga (1895–1961) and Romanian cultural metaphysics:\n- **Lucian Blaga**:\n  - Poet and philosopher; author of *Trilogia culturii* (The Trilogy of Culture) and *Trilogia cunoașterii* (The Trilogy of Knowledge).\n- Core Philosophical Concepts:\n  - **Spațiul Mioritic (The Mioritic Space)**: The spatial unconscious matrix of Romanian culture, defined by the undulating landscape of \"deal-vale\" (hill and valley / alternating ascent and descent), derived from the pastoral ballad *Miorița*.\n  - **Cunoașterea Luciferică (Luciferic Knowledge)**: Trans-rational inquiry that dives into mystery and paradox to enrich human depth, contrasting with *Cunoașterea Paradisiacă* (which merely categorizes objects).\n  - The famous opening verse of *Eu nu strivesc corola de minuni a lumii*: \"I do not crush the world's corolla of wonders... but with my love I augment the world's mystery.\"",
      "examples": [
        {
          "target": "Lucian Blaga a definit «spațiul mioritic» ca matrice stilistică a sufletului românesc, ondulând între deal și vale și protejând taina Marelui Anonim.",
          "reading": "Loo-chan Bla-ga a de-fee-neet spa-tsyool mee-o-ree-teek...",
          "translation": "Lucian Blaga defined the \"Mioritic space\" as the stylistic matrix of the Romanian soul, undulating between hill and valley and safeguarding the mystery of the Great Anonymous."
        }
      ],
      "mnemonics": [
        "Lucian Blaga (Spațiul Mioritic & Deal-Vale matrix)! Cunoașterea luciferică (Protecting the world's mystery)! Trilogia culturii!"
      ],
      "culturalNotes": [
        "Blaga was nominated for the Nobel Prize in Literature in 1956, proposed by the University of Paris and the University of Basel."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian philosopher and poet coined the metaphysical cultural concept of \"Spațiul Mioritic\" in his Trilogy of Culture?",
          "options": [
            "Emil Cioran (Lucian Blaga)",
            "Mircea Eliade (Lucian Blaga)",
            "Constantin Noica (Lucian Blaga)",
            "Lucian Blaga (Lucian Blaga)"
          ],
          "answerIndex": 3,
          "explanation": "Lucian Blaga."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What undulating natural rhythm characterizes the Romanian cultural soul according to Blaga's Mioritic space?",
          "options": [
            "Câmpia plată infinită (Lucian Blaga)",
            "Vârful abrupt exclusiv (Lucian Blaga)",
            "Alternanța deal-vale (Lucian Blaga)",
            "Deșertul (Lucian Blaga)"
          ],
          "answerIndex": 2,
          "explanation": "Alternanța deal-vale."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Lucian Blaga's philosophy refuses to reduce the sacred mysteries of the cosmos to dry mechanical definitions, choosing instead to deepen ontological wonder.\"",
          "options": [
            "Trilogia culturii a fost interzisă în toată Europa. (Lucian Blaga)",
            "Blaga a fost un inginer mecanic. (Lucian Blaga)",
            "Spațiul mioritic este un tratat de astronomie. (Lucian Blaga)",
            "Filosofia lui Lucian Blaga refuză să reducă tainele sacre ale cosmosului la definiții mecanice uscate, alegând să adâncească uimirea ontologică. (Lucian Blaga)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Romanian philosophy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What form of profound metaphysical knowledge in Blaga's epistemology dives into paradox and mystery rather than eliminating it?",
          "options": [
            "Logica formală (Lucian Blaga)",
            "Cunoașterea empirică simplă (Lucian Blaga)",
            "Cunoașterea luciferică (Lucian Blaga)",
            "Matematica pură (Lucian Blaga)"
          ],
          "answerIndex": 2,
          "explanation": "Cunoașterea luciferică.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 22, Lesson 1: Lucian Blaga"
  },
  "ro-u22-l2": {
    "id": "ro-u22-l2",
    "unit": "ro-u22",
    "level": "C1",
    "objective": "Existential Despair & Lyrical Nihilism: Emil Cioran and On the Heights of Despair (Emil Cioran - Pe culmile disperării, Tratat de descompunere, insomnia metafizică, aforismele nimicului, nostalgia absolutului).",
    "presentation": {
      "explanation": "Emil Cioran (1911–1995) and the aesthetics of existential lucidity:\n- **Emil Cioran** (Rășinari, Sibiu & Paris):\n  - The master of existential aphorism and lucid despair in both Romanian and French literature.\n- Masterwork: **«Pe culmile disperării» (On the Heights of Despair - 1934)**:\n  - Written in Sibiu during bouts of chronic metaphysical insomnia (*insomnie metafizică*) at age 22; received the Royal Academy Commission Prize.\n- Core Philosophical Themes:\n  - The burden of consciousness, the absurdity of history, the blessing of music (Bach as proof of divine grace in a ruined universe), and the therapeutic catharsis of writing (*\"A book is a suicide postponed\"*).\n  - French masterpieces: *Précis de décomposition* and *De l'inconvénient d'être né*.",
      "examples": [
        {
          "target": "În «Pe culmile disperării», Emil Cioran a transformat insomnia metafizică și sfâșierea lăuntrică într-o capodoperă a lucidității și aforismului existențial.",
          "reading": "Een Pe kool-mee-le dees-pe-ra-ree, E-meel Cho-ran...",
          "translation": "In \"On the Heights of Despair,\" Emil Cioran transformed metaphysical insomnia and inner torment into a masterpiece of lucidity and existential aphorism."
        }
      ],
      "mnemonics": [
        "Emil Cioran (Pe culmile disperării 1934)! Insomnie metafizică (Lucidity born from sleeplessness)! Aforismul existențial! Muzica lui Bach!"
      ],
      "culturalNotes": [
        "Cioran lived in a modest attic room in the Latin Quarter of Paris on Rue de l'Odéon, refusing all literary prizes and public honors throughout his life."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian existentialist thinker authored the 1934 lyrical masterpiece «Pe culmile disperării» (On the Heights of Despair)?",
          "options": [
            "Emil Cioran",
            "Petre Țuțea",
            "Mircea Eliade",
            "Eugène Ionesco"
          ],
          "answerIndex": 0,
          "explanation": "Emil Cioran."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What severe physiological condition fueled Cioran's intense philosophical lucidity and aphoristic writing in his youth?",
          "options": [
            "Insomnia cronică",
            "Orbirea",
            "Surzenia",
            "Amnézia"
          ],
          "answerIndex": 0,
          "explanation": "Insomnia cronică."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Cioran's aphorisms confront the agony of existence with dazzling literary style, discovering in radical doubt a paradoxical form of liberation.\"",
          "options": [
            "Cioran a scris cărți de optimism facil.",
            "Pe culmile disperării este un roman de aventuri.",
            "Aforismele lui Cioran înfruntă agonia existenței cu un stil literar strălucitor, descoperind în îndoiala radicală o formă paradoxală de eliberare.",
            "Cioran a locuit la New York toată viața."
          ],
          "answerIndex": 2,
          "explanation": "Accurate existential analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which classical composer did Cioran famously describe as the only justification for the existence of the universe?",
          "options": [
            "Mozart",
            "Johann Sebastian Bach",
            "Wagner",
            "Beethoven"
          ],
          "answerIndex": 1,
          "explanation": "Johann Sebastian Bach.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Existential Despair & Lyrical Nihilism"
  },
  "ro-u22-l3": {
    "id": "ro-u22-l3",
    "unit": "ro-u22",
    "level": "C1",
    "objective": "The Sacred and the Profane: Mircea Eliade and the History of Religious Ideas (Mircea Eliade - Sacrul și profanul, Istoria credințelor și ideilor religioase, hierofania, mitul eternei reîntoarceri, homo religiosus).",
    "presentation": {
      "explanation": "Mircea Eliade (1907–1986) and the phenomenology of the sacred:\n- **Mircea Eliade**:\n  - World's foremost historian of religions; Professor at the University of Chicago and author of *The Myth of the Eternal Return* and *The Sacred and the Profane*.\n- Core Theoretical Concepts:\n  - **Hierofania (Hierophany)**: The breakthrough and manifestation of the sacred (*sacrul*) in a profane physical object, tree, stone, or historical moment.\n  - **Mitul Eternei Reîntoarceri (The Myth of the Eternal Return)**: Traditional human societies renewing cosmic time through cyclical ritual recreation (*in illo tempore*), escaping the terror of historical linear meaninglessness.\n  - **Homo Religiosus**: The fundamental human nature oriented toward discovering transcendent meaning and ultimate reality.",
      "examples": [
        {
          "target": "Mircea Eliade a demonstrat că «homo religiosus» trăiește experiența sacrului prin hierofanii care conferă cosmosului structură, sens și orientare ontologică.",
          "reading": "Meer-cha E-lya-de a de-mon-strat ka ho-mo re-lee-gyo-zoos...",
          "translation": "Mircea Eliade demonstrated that \"homo religiosus\" experiences the sacred through hierophanies that bestow structure, meaning, and ontological orientation upon the cosmos."
        }
      ],
      "mnemonics": [
        "Mircea Eliade (The Sacred and the Profane)! Hierofania (Manifestation of the sacred in profane reality)! Mitul eternei reîntoarceri! Homo religiosus!"
      ],
      "culturalNotes": [
        "Eliade spent 3 years in India (1928–1931) studying Sanskrit and yoga under Surendranath Dasgupta and living in the Himalayas before publishing his landmark study *Yoga: Immortality and Freedom*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian scholar founded the modern comparative history of religions and authored The Sacred and the Profane?",
          "options": [
            "Mircea Eliade",
            "Lucian Blaga",
            "Vasile Pârvan",
            "Nicolae Iorga"
          ],
          "answerIndex": 0,
          "explanation": "Mircea Eliade."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What term was coined by Eliade to describe the manifestation of the sacred within a profane object or natural phenomenon?",
          "options": [
            "Hierofanie",
            "Miracol chimic",
            "Epifanie simplă",
            "Teofanie exclusivă"
          ],
          "answerIndex": 0,
          "explanation": "Hierofanie."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The cyclical repetition of foundational cosmogonic myths allows traditional human communities to regenerate cosmic time and overcome the terror of history.\"",
          "options": [
            "Eliade a negat importanța simbolurilor.",
            "Repetarea ciclică a miturilor cosmogonice primordiale permite comunităților tradiționale să regenereze timpul cosmic și să depășească teroarea istoriei.",
            "Homo religiosus este un concept economic.",
            "Sacrul și profanul este un manual de arheologie romană."
          ],
          "answerIndex": 1,
          "explanation": "Accurate comparative religion translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which ancient Indian sacred language did Mircea Eliade conduct foundational research at the University of Calcutta in 1928–1931?",
          "options": [
            "Sanscrită",
            "Latină",
            "Persană",
            "Arabă"
          ],
          "answerIndex": 0,
          "explanation": "Sanscrită (Sanskrit).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sacred and the Profane"
  },
  "ro-u22-l4": {
    "id": "ro-u22-l4",
    "unit": "ro-u22",
    "level": "C2",
    "objective": "The School of Păltiniș & Ontological Being: Constantin Noica (Constantin Noica - Școala de la Păltiniș, Jurnalul filozofic, Devenirea întru ființă, Sentimentul românesc al ființei, rostirea filozofică românească).",
    "presentation": {
      "explanation": "Constantin Noica (1909–1987) and the philosophical sanctuary of Păltiniș:\n- **Constantin Noica**:\n  - The master metaphysician of 20th-century Romania; authored **«Devenirea întru ființă» (Becoming into Being)** and **«Sentimentul românesc al ființei»**.\n- Core Philosophical Innovations:\n  - **Ontology of Becoming into Being**: Analyzing how potentiality crystallizes into structured metaphysical essence.\n  - **The Romanian Idiom of Being (*Rostirea filozofică românească*)**: Extracting deep ontological categories directly from Romanian linguistic prepositions and verbs (*dor, rost, întru, fire, aievea*).\n- **Școala de la Păltiniș (The School of Păltiniș)**:\n  - In the remote mountain retreat of Păltiniș (Sibiu), Noica mentored a generation of elite disciples (Gabriel Liiceanu, Andrei Pleșu), preserving classical Greek, German, and European philosophy during totalitarian isolation.",
      "examples": [
        {
          "target": "La Păltiniș, Constantin Noica a cultivat semințele gândirii clasice europene și a descifrat rostirea românească a ființei prin concepte precum «întru» și «rost».",
          "reading": "La Pal-tee-neesh, Kon-stan-teen Noy-ka a kool-tee-vat...",
          "translation": "At Paltinis, Constantin Noica cultivated the seeds of classical European thought and deciphered the Romanian utterance of Being through concepts such as \"intru\" (within-toward) and \"rost\" (purpose/order)."
        }
      ],
      "mnemonics": [
        "Constantin Noica (Devenirea întru ființă & Sentimentul românesc al ființei)! Școala de la Păltiniș! Conceptele «întru» și «rost»!"
      ],
      "culturalNotes": [
        "Gabriel Liiceanu recorded the daily philosophical dialogues and intellectual resistance of the mountain sanctuary in the legendary book *Jurnalul de la Păltiniș* (1983)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian philosopher founded the philosophical seminar at the mountain retreat of Păltiniș and wrote Devenirea întru ființă?",
          "options": [
            "Mircea Vulcănescu",
            "Constantin Noica",
            "Titu Maiorescu",
            "Petre Țuțea"
          ],
          "answerIndex": 1,
          "explanation": "Constantin Noica."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What unique Romanian preposition was elevated by Noica into a foundational ontological concept of dynamic purposeful movement?",
          "options": [
            "«Peste»",
            "«Întru»",
            "«Sub»",
            "«Fără»"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"«Întru»\". This directly applies the principle of: The School of Păltiniș & Ontological Being: Constantin Noica (Constantin Noica - Școala de la Păltiniș, Jurnalul filozofic, Devenirea întru ființă, Sentimentul românesc al ființei, rostirea filozofică românească).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The School of Paltinis preserved the classical dialogue of philosophy as a spiritual fortress of intellectual freedom and cultural continuity.\"",
          "options": [
            "Școala de la Păltiniș a păstrat dialogul clasic al filosofiei ca o cetate spirituală a libertății intelectuale și a continuității culturale.",
            "Păltiniș este o stațiune balneară de pe litoral.",
            "Devenirea întru ființă este un ghid turistic.",
            "Noica a interzis citirea lui Platon."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Romanian ontology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which disciple of Constantin Noica authored the famous chronicle *Jurnalul de la Păltiniș* documenting life at the philosophical retreat?",
          "options": [
            "Andrei Pleșu",
            "Horia-Roman Patapievici",
            "Mircea Cărtărescu",
            "Gabriel Liiceanu"
          ],
          "answerIndex": 3,
          "explanation": "Gabriel Liiceanu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The School of Păltiniș & Ontological Being"
  },
  "ro-u22-l5": {
    "id": "ro-u22-l5",
    "unit": "ro-u22",
    "level": "C2",
    "objective": "C2 synthesis on the Theatre of the Absurd: Eugène Ionesco and totalitarian allegory (Eugène Ionesco - Eugen Ionescu, Cântăreața cheală, Rinocerii, teatrul absurdului, descompunerea limbajului conformist, rezistența antitotalitară).",
    "presentation": {
      "explanation": "Eugène Ionesco (Eugen Ionescu - 1909–1994) and the Theatre of the Absurd:\n- **Eugène Ionesco** (Slatina & Paris):\n  - Pioneer of the **Theatre of the Absurd (Teatrul Absurdului)** and member of the Académie Française.\n- Masterpieces:\n  - **«Cântăreața cheală» (The Bald Soprano - 1950)**: Premiered in Paris; parodies the empty cliches, automatic platitudes, and catastrophic breakdown of human communication in bourgeois dialogue.\n  - **«Rinocerii» (Rhinoceros - 1959)**:\n    - Monumental anti-totalitarian allegory following the everyday protagonist **Bérenger**, who watches his entire town succumb one by one to \"rhinoceritis\"—a contagious mass psychological epidemic of conformity, fanatical ideology, and dehumanization.\n    - The climactic moral resistance soliloquy: *«Je suis le dernier homme, je le resterai jusqu'au bout! Je ne capitule pas!»* (I am the last man, and I will stay so to the end! I will not capitulate!).",
      "examples": [
        {
          "target": "În capodopera «Rinocerii», Eugen Ionescu a creat cea mai pătrunzătoare alegorie dramatică împotriva conformismului fanatic și a molimei totalitare.",
          "reading": "Een ka-po-do-pe-ra Ree-no-che-ree, Ew-zhen Yo-nes-koo...",
          "translation": "In his masterpiece \"Rhinoceros,\" Eugene Ionesco created the most penetrating dramatic allegory against fanatical conformity and the totalitarian contagion."
        }
      ],
      "mnemonics": [
        "Eugène Ionesco (Teatrul Absurdului & Académie Française)! Cântăreața cheală (Breakdown of communication cliches)! Rinocerii (Anti-totalitarian resistance)! Bérenger!"
      ],
      "culturalNotes": [
        "The Bald Soprano holds the world record for the longest continuously running theatrical production at the Théâtre de la Huchette in Paris, performed every night since 1957."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian-French dramatist founded the Theatre of the Absurd and authored The Bald Soprano and Rhinoceros?",
          "options": [
            "Eugène Ionesco (C2 synthesis on the Theatre of the Absurd)",
            "Samuel Beckett (C2 synthesis on the Theatre of the Absurd)",
            "Albert Camus (C2 synthesis on the Theatre of the Absurd)",
            "Jean-Paul Sartre (C2 synthesis on the Theatre of the Absurd)"
          ],
          "answerIndex": 0,
          "explanation": "Eugène Ionesco."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In Ionesco's masterpiece *Rhinoceros*, what is the name of the lone protagonist who refuses to surrender his humanity to the fanatical epidemic?",
          "options": [
            "Jean (C2 synthesis on the Theatre of the Absurd)",
            "Dudard (C2 synthesis on the Theatre of the Absurd)",
            "Botard (C2 synthesis on the Theatre of the Absurd)",
            "Bérenger (C2 synthesis on the Theatre of the Absurd)"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"Bérenger (C2 synthesis on the Theatre of the Absurd)\". This directly applies the principle of: C2 synthesis on the Theatre of the Absurd: Eugène Ionesco and totalitarian allegory (Eugène Ionesco - Eugen Ionescu, Cântăreața cheală, Rinocerii, teatrul absurdului, descompunerea limbajului conformist, rezistența antitotalitară).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Rhinoceros exposes the psychological mechanisms through which civilized intellectuals gradually rationalize and embrace monstrous totalitarian conformity.\"",
          "options": [
            "Ionesco a susținut regimurile autoritare. (C2 synthesis on the Theatre of the Absurd)",
            "Cântăreața cheală este o operă muzicală clasică. (C2 synthesis on the Theatre of the Absurd)",
            "Bérenger s-a transformat în rinocer în prima scenă. (C2 synthesis on the Theatre of the Absurd)",
            "«Rinocerii» demască mecanismele psihologice prin care intelectualii civilizați raționalizează și îmbrățișează treptat monstruosul conformism totalitar. (C2 synthesis on the Theatre of the Absurd)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate dramatic analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "At which historic Parisian theatre has *The Bald Soprano* been performed continuously every single evening since 1957?",
          "options": [
            "Moulin Rouge (C2 synthesis on the Theatre of the Absurd)",
            "Comédie-Française (C2 synthesis on the Theatre of the Absurd)",
            "Théâtre de la Huchette (C2 synthesis on the Theatre of the Absurd)",
            "Opéra Garnier (C2 synthesis on the Theatre of the Absurd)"
          ],
          "answerIndex": 2,
          "explanation": "Théâtre de la Huchette.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on the Theatre of the Absurd"
  },
  "ro-u23-l1": {
    "id": "ro-u23-l1",
    "unit": "ro-u23",
    "level": "C1",
    "objective": "Father of Modern Sculpture: Constantin Brâncuși and the Târgu Jiu Monumental Ensemble (Constantin Brâncuși, Coloana Infinitului, Poarta Sărutului, Masa Tăcerii, Păsarea Măiastră, esența formei pure).",
    "presentation": {
      "explanation": "Constantin Brâncuși (1876–1957 - Hobița, Gorj & Paris) and the revolution of modern world sculpture:\n- **Constantin Brâncuși**:\n  - The Father of Modern Sculpture; famously left Auguste Rodin's studio after only one month, declaring: **«Rien ne pousse à l'ombre des grands arbres»** (Nothing grows in the shadow of great trees).\n  - Radical Philosophy: Seeking not outward realistic imitation, but the pure spiritual essence of matter (*\"Simplicity is not an objective in art, but we arrive at simplicity in spite of ourselves as we approach the real sense of things\"*).\n- Masterpieces:\n  - **The Monumental Ensemble of Târgu Jiu (1938 - UNESCO World Heritage)**:\n    - **Coloana Infinitului (The Endless Column)**: 30-meter soaring zinc-coated cast iron rhomboidal modules symbolizing unending cosmic ascension and fallen World War I heroes.\n    - **Poarta Sărutului (The Gate of the Kiss)** & **Masa Tăcerii (The Table of Silence)**.\n  - **Păsarea Măiastră / Pasărea în văzduh (Bird in Space)** & **Domnișoara Pogany**.",
      "examples": [
        {
          "target": "Coloana Infinitului a lui Constantin Brâncuși la Târgu Jiu și seria «Păsărilor în văzduh» au redefinit sculptura mondială prin căutarea esenței absolute a formei.",
          "reading": "Ko-lya-na Een-fee-nee-too-looy a looy Kon-stan-teen Bran-koosh...",
          "translation": "Constantin Brancusi's Endless Column at Targu Jiu and his \"Bird in Space\" series redefined world sculpture through the quest for the absolute essence of form."
        }
      ],
      "mnemonics": [
        "Constantin Brâncuși (Father of Modern Sculpture & Târgu Jiu UNESCO)! Coloana Infinitului! Poarta Sărutului & Masa Tăcerii! Pasărea în văzduh!"
      ],
      "culturalNotes": [
        "In 1927, the US Customs Court ruled in the landmark case *Brancusi v. United States* that Brancusi's abstract bronze *Bird in Space* was officially an authentic work of fine art rather than taxable raw metal."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian master is universally recognized as the Father of Modern Sculpture for works like The Endless Column and Bird in Space?",
          "options": [
            "Dimitrie Paciurea",
            "Ion Irimescu",
            "Corneliu Baba",
            "Constantin Brâncuși"
          ],
          "answerIndex": 3,
          "explanation": "Constantin Brâncuși."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which Romanian city did Constantin Brâncuși construct his iconic Monumental Ensemble comprising the Endless Column, Gate of the Kiss, and Table of Silence?",
          "options": [
            "București",
            "Cluj-Napoca",
            "Târgu Jiu",
            "Iași"
          ],
          "answerIndex": 2,
          "explanation": "Târgu Jiu (Gorj)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Brancusi polished bronze and carved wood to liberate the inner spiritual energy and aerodynamic flight of the form from inert matter.\"",
          "options": [
            "Coloana Infinitului a fost demolată în 1940.",
            "Brâncuși a fost un sculptor neoclasic fidel lui Rodin.",
            "Brâncuși a șlefuit bronzul și a cioplit lemnul pentru a elibera energia spirituală interioară și zborul aerodinamic al formei din materia inertă.",
            "Masa Tăcerii este o pictură în ulei pe pânză."
          ],
          "answerIndex": 2,
          "explanation": "Accurate sculpture analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What famous quote did Brâncuși utter when leaving Auguste Rodin's workshop in Paris in 1907?",
          "options": [
            "«Arta pentru artă»",
            "«Rien ne pousse à l'ombre des grands arbres»",
            "«Totul este permis»",
            "«Timpul înseamnă bani»"
          ],
          "answerIndex": 1,
          "explanation": "«Rien ne pousse à l'ombre des grands arbres».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Father of Modern Sculpture"
  },
  "ro-u23-l2": {
    "id": "ro-u23-l2",
    "unit": "ro-u23",
    "level": "C1",
    "objective": "Painted Monasteries of Bucovina: Voroneț and the Sacred Frescoes (Mănăstirile pictate din Bucovina - UNESCO, Voroneț și Albastrul de Voroneț, Judecata de Apoi, Humor, Moldovița, Sucevița, arta bizantină moldovenească).",
    "presentation": {
      "explanation": "The Painted Monasteries of Bucovina (UNESCO World Heritage) and the masterpiece of medieval fresco art:\n- **Mănăstirea Voroneț (Founded in 1488 by Stephen the Great - Ștefan cel Mare)**:\n  - The \"Sistine Chapel of the East\".\n  - Famous for **Albastrul de Voroneț (Voroneț Blue)**: A luminous, weather-resistant lapis-lazuli pigment whose exact organic secret binding formula remains an enduring mystery after 500 years of torrential rain and snow.\n  - Monumental exterior fresco of **Judecata de Apoi (The Last Judgment)** on the western exterior wall, portraying angels rolling up the starry heavens like a parchment scroll.\n- The Moldavian Painted Ensemble:\n  - **Humor, Moldovița, Arbore, and Sucevița** Monasteries combining Byzantine iconography with Gothic brick architectural arches and vibrant folk ornamentation.",
      "examples": [
        {
          "target": "Frescele exterioare de la Voroneț și misterul culorii «Albastru de Voroneț» reprezintă o capodoperă universală a artei sacre medievale recunoscută de UNESCO.",
          "reading": "Fres-che-le eks-te-ryo-a-re de la Vo-ro-nets...",
          "translation": "The exterior frescoes of Voronet and the mystery of \"Voronet Blue\" represent a universal masterpiece of medieval sacred art recognized by UNESCO."
        }
      ],
      "mnemonics": [
        "Mănăstirea Voroneț (Sistine Chapel of the East & Stephen the Great 1488)! Albastru de Voroneț (Lapis-lazuli secret blue)! Judecata de Apoi! Bucovina UNESCO!"
      ],
      "culturalNotes": [
        "The exterior frescoes of Bucovina were painted in the 15th and 16th centuries as visual biblical narratives to teach Christian theology and history to illiterate rural villagers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 15th-century UNESCO monastery in Bucovina, built by Stephen the Great, is world-famous as the \"Sistine Chapel of the East\"?",
          "options": [
            "Mănăstirea Voroneț",
            "Mănăstirea Tismana",
            "Mănăstirea Cozia",
            "Mănăstirea Curtea de Argeș"
          ],
          "answerIndex": 0,
          "explanation": "Mănăstirea Voroneț."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What unique, luminous medieval pigment used on the exterior walls of Voroneț has resisted centuries of harsh winter weathering?",
          "options": [
            "Albastrul de Voroneț",
            "Roșul de Veneția",
            "Galbenul de crom",
            "Verdele de Paris"
          ],
          "answerIndex": 0,
          "explanation": "Albastrul de Voroneț."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The exterior Last Judgment fresco on Voronet's western wall depicts Archangel Michael weighing human souls while angels roll up the cosmic scroll of the heavens.\"",
          "options": [
            "Mănăstirile din Bucovina au fost pictate în secolul al XXI-lea.",
            "Fresca exterioară a Judecății de Apoi de pe peretele vestic de la Voroneț îl înfățișează pe Arhanghelul Mihail cântărind sufletele în timp ce îngerii strâng sulul ceresc.",
            "Albastrul de Voroneț s-a șters complet.",
            "Voroneț este o cetate militară romană."
          ],
          "answerIndex": 1,
          "explanation": "Accurate sacred art analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Moldavian prince and military defender of Europe founded Voroneț Monastery in 1488 after his victory against Ottoman forces?",
          "options": [
            "Ștefan cel Mare",
            "Vlad Țepeș",
            "Alexandru cel Bun",
            "Mihai Viteazul"
          ],
          "answerIndex": 0,
          "explanation": "Ștefan cel Mare.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Painted Monasteries of Bucovina"
  },
  "ro-u23-l3": {
    "id": "ro-u23-l3",
    "unit": "ro-u23",
    "level": "C1",
    "objective": "The Master of Modern Romanian Painting: Nicolae Grigorescu and Impressionist Light (Nicolae Grigorescu - Școala de la Barbizon, Carul cu boi, Țărăncuță din Muscel, Atacul de la Smârdan, lumina plein-air).",
    "presentation": {
      "explanation": "Nicolae Grigorescu (1838–1907) and the birth of modern Romanian painting:\n- **Nicolae Grigorescu**:\n  - The founder of modern Romanian painting; studied at the École des Beaux-Arts in Paris and joined the **Barbizon School** alongside Jean-François Millet and Camille Corot.\n- Mastery of Plein-Air Light & National Soul:\n  - **Carul cu boi (Ox Cart on the Country Road)**: Iconic lyrical pastoral landscape capturing the golden afternoon dust, slow rhythmic pace, and vast horizons of the Romanian countryside.\n  - **Țărăncuță din Muscel (Peasant Girl from Muscel)**: Luminous portraits of Romanian peasant women wearing traditional embroidered blouses (*Ia românească*).\n  - Official War Painter during the 1877–1878 Romanian War of Independence: Painting the heroic masterpiece **«Atacul de la Smârdan»** (The Charge at Smardan).",
      "examples": [
        {
          "target": "Nicolae Grigorescu a integrat lumina școlii de la Barbizon în peisajele sale rurale, transformând «Carul cu boi» în simbolul picturii naționale românești.",
          "reading": "Nee-ko-la-ye Gree-go-res-koo a een-te-grat loo-mee-na...",
          "translation": "Nicolae Grigorescu integrated the plein-air light of the Barbizon School into his rural landscapes, transforming \"The Ox Cart\" into the symbol of Romanian national painting."
        }
      ],
      "mnemonics": [
        "Nicolae Grigorescu (Founder of modern Romanian painting & Barbizon School)! Carul cu boi (Golden dust of the countryside)! Atacul de la Smârdan 1877!"
      ],
      "culturalNotes": [
        "Nicolae Grigorescu painted church icons at Agapia and Căldărușani Monasteries when he was merely a teenage self-taught apprentice before traveling to Paris."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 19th-century master painter is revered as the founder of modern Romanian painting for works like Carul cu boi and Atacul de la Smârdan?",
          "options": [
            "Nicolae Grigorescu",
            "Theodor Aman",
            "Ion Andreescu",
            "Ștefan Luchian"
          ],
          "answerIndex": 0,
          "explanation": "Nicolae Grigorescu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which French plein-air landscape painting school did Nicolae Grigorescu join in the 1860s near Fontainebleau forest?",
          "options": [
            "Școala de la Barbizon",
            "Suprematismul",
            "Cubismul parizian",
            "Dadaismul"
          ],
          "answerIndex": 0,
          "explanation": "Școala de la Barbizon."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Grigorescu captured the shimmering atmospheric light and golden dust of Romanian village lanes with loose, rapid brushstrokes.\"",
          "options": [
            "Grigorescu a captat lumina atmosferică trémurătoare și praful auriu al ulițelor satului românesc prin tușe de penel libere și rapide.",
            "Carul cu boi este o sculptură din marmură.",
            "Atacul de la Smârdan celebrează o bătălie navală din secolul al XVII-lea.",
            "Grigorescu a refuzat să picteze în aer liber."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Impressionist analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional embroidered Romanian blouse worn by peasant women is celebrated in Grigorescu's iconic folk portraits?",
          "options": [
            "Poncho-ul",
            "Kimono-ul",
            "Sariul",
            "Ia românească"
          ],
          "answerIndex": 3,
          "explanation": "Ia românească.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Master of Modern Romanian Painting"
  },
  "ro-u23-l4": {
    "id": "ro-u23-l4",
    "unit": "ro-u23",
    "level": "C2",
    "objective": "Brâncovenesc Architecture & National Style: Horezu Monastery and Neo-Romanian Revival (Stilul Brâncovenesc, Constantin Brâncoveanu, Mănăstirea Horezu, Ion Mincu și arhitectura neoromânească, foișoare și coloane sculptate).",
    "presentation": {
      "explanation": "The Brâncovenesc Style (Stilul Brâncovenesc) and the Neo-Romanian architectural renaissance:\n- **Stilul Brâncovenesc (Wallachian Renaissance - Late 17th–Early 18th Century)**:\n  - Developed under Prince **Constantin Brâncoveanu** (Mogosoaia Palace, **Mănăstirea Horezu - UNESCO World Heritage**, Antim Monastery);\n  - Harmonious synthesis of Byzantine ecclesiastical architecture, Ottoman decorative stone carving, and late Italian Venetian Renaissance loggias;\n  - Iconic features: Open arcaded verandas (**foișor**), spiraled stone columns carved with acanthus leaves and grapevines, and floral stucco.\n- **The Neo-Romanian Style (Arhitectura Neoromânească - Ion Mincu)**:\n  - Late 19th-century architectural movement led by **Ion Mincu** (Școala Centrală de Fete, Casa Lahovary);\n  - Reviving Brâncovenesc wooden eaves, carved verandas, and glazed ceramic friezes into modern municipal palaces and villas.",
      "examples": [
        {
          "target": "Sinteza unică a stilului brâncovenesc de la Mănăstirea Horezu și renașterea neoromânească a lui Ion Mincu au creat identitatea arhitecturală fundamentală a României.",
          "reading": "Seen-te-za oo-nee-ka a stee-loo-looy bran-ko-ve-nesk...",
          "translation": "The unique synthesis of the Brancovenesc style at Horezu Monastery and Ion Mincu's Neo-Romanian revival created the foundational architectural identity of Romania."
        }
      ],
      "mnemonics": [
        "Stilul Brâncovenesc (Constantin Brâncoveanu & Horezu UNESCO)! Foișor arcuit (Open arcaded loggia)! Ion Mincu (Neo-Romanian revival architecture)!"
      ],
      "culturalNotes": [
        "The Bucharest University of Architecture and Urbanism is officially named *Universitatea de Arhitectură și Urbanism „Ion Mincu”* in tribute to the father of the Neo-Romanian style."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which architectural style, synthesizing Byzantine tradition with Italian Renaissance loggias under Prince Brâncoveanu, created Horezu Monastery?",
          "options": [
            "Stilul Gotic German",
            "Stilul Brâncovenesc",
            "Stilul Art Deco",
            "Stilul Baroc Vienez"
          ],
          "answerIndex": 1,
          "explanation": "Stilul Brâncovenesc."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which 19th-century master architect founded the Neo-Romanian architectural movement (Arhitectura Neoromânească)?",
          "options": [
            "Petre Antonescu",
            "Ion Mincu",
            "Duiliu Marcu",
            "Anghel Saligny"
          ],
          "answerIndex": 1,
          "explanation": "Ion Mincu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Brancovenesc style is distinguished by graceful open stone loggias, intricately carved twisted columns, and rich floral masonry.\"",
          "options": [
            "Ion Mincu a interzis folosirea elementelor tradiționale.",
            "Mănăstirea Horezu este un bloc de beton brutalist.",
            "Stilul brâncovenesc a fost creat în secolul al XXI-lea.",
            "Stilul brâncovenesc se distinge prin logii deschise grațioase din piatră, coloane răsucite sculptate cu măiestrie și o bogată zidărie florală."
          ],
          "answerIndex": 3,
          "explanation": "Accurate architectural history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What UNESCO World Heritage monastery in Vâlcea County is the supreme architectural masterpiece of the Brâncovenesc style?",
          "options": [
            "Mănăstirea Putna",
            "Mănăstirea Neamț",
            "Mănăstirea Horezu",
            "Mănăstirea Snagov"
          ],
          "answerIndex": 2,
          "explanation": "Mănăstirea Horezu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Brâncovenesc Architecture & National Style"
  },
  "ro-u23-l5": {
    "id": "ro-u23-l5",
    "unit": "ro-u23",
    "level": "C2",
    "objective": "C2 synthesis on Monumental Engineering & Modernism: Anghel Saligny and the Cernavodă Bridge (Anghel Saligny - Podul Regele Carol I / Podul Saligny peste Dunăre 1895, silozurile din beton armat din Brăila și Constanța, inovație structurală).",
    "presentation": {
      "explanation": "Anghel Saligny (1854–1925) and the golden age of monumental civil engineering:\n- **Anghel Saligny** (Engineer, academician, and Minister of Public Works):\n  - Educated in Charlottenburg (Berlin); pioneer of prestressed and reinforced concrete engineering.\n- Masterpieces of World Engineering:\n  - **Podul Regele Carol I peste Dunăre la Cernavodă (1890–1895)**:\n    - Spanning 4,088 meters across the Danube and the Borcea arm;\n    - When inaugurated in 1895, it was the **longest bridge complex in Continental Europe and the second-longest bridge in the entire world**;\n    - Built with revolutionary cantilevered Siemens-Martin mild steel trusses resting on colossal stone piers without scaffolds over deep water.\n    - At the opening ceremony, Saligny stood with his workers in a boat directly beneath the central span as 15 heavy locomotives sped across to prove his structural calculations were infallible.\n  - **The Port Silos of Brăila and Constanța (1888–1889)**: World-first application of reinforced concrete prefabricated modular hexagonal silos for grain storage.",
      "examples": [
        {
          "target": "Podul Saligny de peste Dunăre la Cernavodă a fost la inaugurarea sa din 1895 cel mai lung pod din Europa continentală, consacrând geniul ingineriei românești.",
          "reading": "Po-dool Sa-leey-nee de pes-te Doo-na-re...",
          "translation": "The Saligny Bridge across the Danube at Cernavoda was the longest bridge in continental Europe upon its 1895 inauguration, establishing the genius of Romanian engineering."
        }
      ],
      "mnemonics": [
        "Anghel Saligny (Cernavodă Bridge across the Danube 1895)! Longest bridge in Continental Europe (4,088m)! World-first reinforced concrete silos in Constanța!"
      ],
      "culturalNotes": [
        "Two colossal bronze statues of Romanian Dorobanți soldiers, sculpted in Paris by Léon Pilet, guard the entrance to the Cernavodă Bridge in memory of the 1877 War of Independence."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which visionary Romanian engineer designed the historic 1895 Danube Bridge at Cernavodă, the longest bridge in continental Europe at the time?",
          "options": [
            "Anghel Saligny (C2 synthesis on Monumental Engineering  Modernism)",
            "Henri Coandă (C2 synthesis on Monumental Engineering  Modernism)",
            "Gheorghe Țițeica (C2 synthesis on Monumental Engineering  Modernism)",
            "Traian Vuia (C2 synthesis on Monumental Engineering  Modernism)"
          ],
          "answerIndex": 0,
          "explanation": "Anghel Saligny."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What world-first industrial construction material application was engineered by Saligny for the grain silos in Constanța and Brăila in 1888?",
          "options": [
            "Lemn de stejar simplu (C2 synthesis on Monumental Engineering  Modernism)",
            "Foi de aluminiu (C2 synthesis on Monumental Engineering  Modernism)",
            "Cărămidă uscată la soare (C2 synthesis on Monumental Engineering  Modernism)",
            "Plăci prefabricate din beton armat (C2 synthesis on Monumental Engineering  Modernism)"
          ],
          "answerIndex": 3,
          "explanation": "Plăci prefabricate din beton armat."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Saligny demonstrated absolute confidence in his structural calculations by standing beneath the bridge as heavy freight locomotives tested the central span.\"",
          "options": [
            "Podul de la Cernavodă s-a prăbușit la inaugurare. (C2 synthesis on Monumental Engineering  Modernism)",
            "Podul Saligny a fost construit peste râul Sena. (C2 synthesis on Monumental Engineering  Modernism)",
            "Saligny a demonstrat o încredere absolută în calculele sale structurale stând sub pod în timp ce locomotive grele de marfă au testat deschiderea centrală. (C2 synthesis on Monumental Engineering  Modernism)",
            "Anghel Saligny a fost un pictor impresionist. (C2 synthesis on Monumental Engineering  Modernism)"
          ],
          "answerIndex": 2,
          "explanation": "Accurate engineering history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic name was given to the Cernavodă railway bridge complex upon its royal inauguration by King Carol I in 1895?",
          "options": [
            "Podul Prieteniei (C2 synthesis on Monumental Engineering  Modernism)",
            "Podul Regele Carol I (C2 synthesis on Monumental Engineering  Modernism)",
            "Podul Unirii (C2 synthesis on Monumental Engineering  Modernism)",
            "Podul Traian (C2 synthesis on Monumental Engineering  Modernism)"
          ],
          "answerIndex": 1,
          "explanation": "Podul Regele Carol I.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Monumental Engineering & Modernism"
  },
  "ro-u24-l1": {
    "id": "ro-u24-l1",
    "unit": "ro-u24",
    "level": "C1",
    "objective": "National Symphonic Titan: George Enescu and the Romanian Rhapsodies (George Enescu - Rapsodiile Române op. 11, Oedipe, lăutari și folclor autentic, Festivalul Internațional George Enescu, vioara Guarneri del Gesù).",
    "presentation": {
      "explanation": "George Enescu (1881–1955 - Liveni, Botoșani & Paris) and Romanian symphonic genius:\n- **George Enescu**:\n  - Universal musical genius; composer, violin virtuoso, pianist, conductor, and teacher to Yehudi Menuhin, Arthur Grumiaux, and Christian Ferras;\n  - Yehudi Menuhin famously declared: *\"Enescu was the greatest musician and the most extraordinary human being I have ever known.\"*\n- Masterpieces:\n  - **«Rapsodia Română nr. 1 în La major op. 11» (1901)**: The undisputed symphonic national emblem of Romania, quoting authentic *lăutari* folk tunes (*Am un leu și vreau să-l beau*, *Hora lui Dobrică*, *Ciocârlia* / The Skylark) with dazzling violin pyrotechnics and woodwind birdsong.\n  - **«Oedipe» (Tragédie lyrique op. 23 - Paris Opéra 1936)**: His monumental lifelong operatic masterpiece incorporating quartertones, wind machines, and ancient Greek tragedy.\n  - **The George Enescu International Festival & Competition** in Bucharest.",
      "examples": [
        {
          "target": "Rapsodia Română nr. 1 de George Enescu a consacrat folclorul lăutăresc pe cele mai mari scene simfonice ale lumii prin strălucirea viorii sale.",
          "reading": "Rap-so-dee-a Ro-ma-na noo-ma-rool oo-noo de Jor-je E-nes-koo...",
          "translation": "George Enescu's Romanian Rhapsody No. 1 established traditional lautar folklore on the world's greatest symphonic stages through the brilliance of his violin."
        }
      ],
      "mnemonics": [
        "George Enescu (Romanian Symphonic Titan & mentor of Yehudi Menuhin)! Rapsodia Română nr. 1 op. 11 (Ciocârlia skylark)! Opera Oedipe 1936! Festivalul Enescu!"
      ],
      "culturalNotes": [
        "Enescu played a legendary 1736 Guarneri del Gesù violin named \"The Cathedral,\" which is preserved today as a state treasure in Bucharest."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian musical genius composed the Romanian Rhapsodies Op. 11 and the monumental opera Oedipe, mentoring Yehudi Menuhin?",
          "options": [
            "Ciprian Porumbescu",
            "Dinu Lipatti",
            "Sergiu Celibidache",
            "George Enescu"
          ],
          "answerIndex": 3,
          "explanation": "George Enescu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What virtuosic Romanian folk tune imitating birdsong is quoted in the exhilarating finale of Enescu's Romanian Rhapsody No. 1?",
          "options": [
            "Balada",
            "Ciocârlia",
            "Călușul",
            "Mocirița"
          ],
          "answerIndex": 1,
          "explanation": "Ciocârlia (The Skylark)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Enescu integrated the modal microtonal inflections of Romanian village fiddle music into complex post-romantic symphonic architecture.\"",
          "options": [
            "Enescu nu a compus niciodată pentru orchestră.",
            "Enescu a integrat inflexiunile modale microtonale ale viorii țărănești românești într-o arhitectură simfonică post-romantică complexă.",
            "Oedipe este o piesă de jazz americană.",
            "Rapsodiile Române au fost interzise în Franța."
          ],
          "answerIndex": 1,
          "explanation": "Accurate musicological translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious international classical music festival and competition is held biennially in Bucharest in honor of George Enescu?",
          "options": [
            "Festivalul Internațional George Enescu",
            "Festivalul Callas",
            "Festivalul Bach",
            "Festivalul Mozart"
          ],
          "answerIndex": 0,
          "explanation": "Festivalul Internațional George Enescu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "National Symphonic Titan"
  },
  "ro-u24-l2": {
    "id": "ro-u24-l2",
    "unit": "ro-u24",
    "level": "C1",
    "objective": "The Phenomenologist of Conducting: Sergiu Celibidache (Sergiu Celibidache - Filarmonica din München, fenomenologia muzicii, refuzul înregistrărilor comerciale, tempo-uri expansive, transcendența clipei sonore).",
    "presentation": {
      "explanation": "Sergiu Celibidache (1912–1996 - Roman, Neamț & Paris/Munich) and the phenomenology of sound:\n- **Sergiu Celibidache**:\n  - Principal Conductor of the Berlin Philharmonic (1945–1952) and Music Director of the Munich Philharmonic (1979–1996);\n  - Studied musicology and Edmund Husserl's phenomenology at the University of Berlin, as well as Zen Buddhism.\n- Radical Philosophy of Musical Performance:\n  - **The Refusal of Commercial Studio Recordings**: Believed that recorded sound is a dead mechanical facsimile that strips music of acoustic space, physical presence, and spiritual transcendence (*\"Music is not sound; music is the spiritual consciousness created in the living acoustic moment\"*).\n  - **Expansive Tempos**: Slowing down tempos to allow every harmonic overtone and acoustic resonance to be fully perceived by the human ear in the specific hall architecture.\n  - Legendary performances of Anton Bruckner's symphonies.",
      "examples": [
        {
          "target": "Sergiu Celibidache a revoluționat arta dirijorală mondială prin fenomenologia muzicii, tempo-urile sale expansive și căutarea adevărului acustic pur în sala de concert.",
          "reading": "Ser-joo Che-lee-bee-da-ke a re-vo-loo-tsyo-nat...",
          "translation": "Sergiu Celibidache revolutionized world conducting through the phenomenology of music, his expansive tempos, and the quest for pure acoustic truth in the concert hall."
        }
      ],
      "mnemonics": [
        "Sergiu Celibidache (Munich Philharmonic & Berlin Phil)! Fenomenologia muzicii (Phenomenology of live sound)! Refuzul înregistrărilor (Live concert is sacred)! Bruckner titan!"
      ],
      "culturalNotes": [
        "Celibidache demanded up to 15 full orchestra rehearsals for a single symphony concert, drilling the Munich Philharmonic until every instrumental voice achieved perfect balance."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian maestro led the Munich Philharmonic and became legendary for his phenomenological philosophy of music and refusal of studio recordings?",
          "options": [
            "Sergiu Celibidache",
            "Cristian Măcelaru",
            "George Enescu",
            "Ionel Perlea"
          ],
          "answerIndex": 0,
          "explanation": "Sergiu Celibidache."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why did Sergiu Celibidache vehemently refuse to make commercial studio audio recordings throughout most of his conducting career?",
          "options": [
            "He believed recordings destroyed the living acoustic space and spiritual truth of the live concert moment",
            "He did not know how microphones worked",
            "He lost his hearing",
            "Recording contracts were illegal in Germany"
          ],
          "answerIndex": 0,
          "explanation": "He believed recordings destroyed the living acoustic space."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Celibidache's expansive conducting tempos allowed the complex acoustic reverberations and overtone structures of Bruckner's symphonies to fully blossom.\"",
          "options": [
            "Tempo-urile dirijorale expansive ale lui Celibidache au permis reverberațiilor acustice complexe și structurilor de armonice din simfoniile lui Bruckner să înflorească deplin.",
            "Filarmonica din München a refuzat să cânte cu Celibidache.",
            "Fenomenologia muzicii a fost inventată de Beethoven.",
            "Celibidache a fost un compozitor de muzică pop."
          ],
          "answerIndex": 0,
          "explanation": "Accurate conducting analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Austrian late-romantic symphonist's monumental works were regarded as the absolute peak of Celibidache's live conducting legacy?",
          "options": [
            "Johann Strauss",
            "Franz Lehár",
            "Carl Czerny",
            "Anton Bruckner"
          ],
          "answerIndex": 3,
          "explanation": "Anton Bruckner.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Phenomenologist of Conducting"
  },
  "ro-u24-l3": {
    "id": "ro-u24-l3",
    "unit": "ro-u24",
    "level": "C1",
    "objective": "The Master of the Pan Flute: Gheorghe Zamfir (Gheorghe Zamfir - Regele Naiului, naiul românesc de 30 de tuburi, The Lonely Shepherd, coloane sonore de film - Once Upon a Time in America).",
    "presentation": {
      "explanation": "Gheorghe Zamfir (1941–present - Găești, Dâmbovița) and the global renaissance of the Pan Flute:\n- **Gheorghe Zamfir (\"Regele Naiului\" / King of the Pan Flute)**:\n  - Elevated the traditional Romanian folk reed pipe (**Naiul**) into a world-renowned solo concert instrument across classical, liturgical, and cinematic music.\n- Technical & Acoustic Innovation:\n  - Expanded the traditional folk pan flute from 20 to **22, 25, 28, and 30 bamboo tubes**, multiplying the instrument's range and microtonal chromatic flexibility using embouchure pitch-bending.\n- Cinematic Masterpieces:\n  - **«The Lonely Shepherd» (Păstorul singuratic - 1977 - with James Last)**: Composed by James Last; immortalized in Quentin Tarantino's *Kill Bill*;\n  - **Ennio Morricone's «Once Upon a Time in America» (1984)**: Haunting pan flute melodies evoking childhood memory in Sergio Leone's gangster epic;\n  - *The Karate Kid* and *Picnic at Hanging Rock*.",
      "examples": [
        {
          "target": "Gheorghe Zamfir a transformat naiul românesc într-o voce acustică universală, cucerind cinematografia mondială în capodoperele lui Ennio Morricone.",
          "reading": "Jor-je Zam-feer a trans-for-mat na-yool ro-ma-nesk...",
          "translation": "Gheorghe Zamfir transformed the Romanian pan flute into a universal acoustic voice, conquering world cinema in Ennio Morricone's masterworks."
        }
      ],
      "mnemonics": [
        "Gheorghe Zamfir (Regele Naiului & 30 bamboo tubes)! The Lonely Shepherd! Ennio Morricone Once Upon a Time in America! Kill Bill soundtrack!"
      ],
      "culturalNotes": [
        "Zamfir has sold over 120 million albums worldwide, earning more than 120 gold and platinum discs across his 60-year career."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian virtuoso is universally known as the \"King of the Pan Flute\" for works like The Lonely Shepherd and Morricone soundtracks?",
          "options": [
            "Gheorghe Zamfir",
            "Fănică Luca",
            "Damian Drăghici",
            "Tudor Gheorghe"
          ],
          "answerIndex": 0,
          "explanation": "Gheorghe Zamfir."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How many bamboo tubes did Gheorghe Zamfir engineer onto his concert pan flutes to expand their chromatic range for classical symphonic music?",
          "options": [
            "Up to 30 bamboo pipes",
            "3 tuburi",
            "Doar 5 tuburi",
            "100 de tuburi"
          ],
          "answerIndex": 0,
          "explanation": "Up to 30 bamboo pipes (Până la 30 de tuburi)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Zamfir's breath control and lip embouchure allow the pan flute to bend notes microtonally, producing an evocative, haunting vocal timbre.\"",
          "options": [
            "Naiul este un instrument cu claviatură electrică.",
            "Gheorghe Zamfir a fost un pictor muralist.",
            "The Lonely Shepherd este o operă renascentistă.",
            "Controlul respirației și ambușura buzelor lui Zamfir permit naiului să moduleze notele microtonal, producând un timbru vocal evocator și tulburător."
          ],
          "answerIndex": 3,
          "explanation": "Accurate acoustic analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Italian film composer collaborated with Gheorghe Zamfir on the haunting soundtrack of Sergio Leone's *Once Upon a Time in America*?",
          "options": [
            "Nino Rota",
            "Hans Zimmer",
            "Ennio Morricone",
            "John Williams"
          ],
          "answerIndex": 2,
          "explanation": "Ennio Morricone.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Master of the Pan Flute"
  },
  "ro-u24-l4": {
    "id": "ro-u24-l4",
    "unit": "ro-u24",
    "level": "C2",
    "objective": "The Aristocrat of the Piano: Dinu Lipatti (Dinu Lipatti - recitalul de la Besançon 1950, Chopin, Bach, Mozart, perfecțiune tactilă și noblețe spirituală, moartea prematură la treizeci și trei de ani).",
    "presentation": {
      "explanation": "Dinu Lipatti (1917–1950 - Bucharest & Geneva) and supreme pianistic nobility:\n- **Dinu Lipatti**:\n  - Godson of George Enescu; studied under Alfred Cortot and Nadia Boulanger in Paris; universally revered among the greatest classical pianists in history.\n- The Historic Farewell: **The Besançon Festival Recital (September 16, 1950)**:\n  - Dying of Hodgkin's disease at age 33; against medical advice, Lipatti performed his final concert in Besançon, France;\n  - Played Bach's Partita No. 1, Mozart's A-minor Sonata K. 310, Schubert's Impromptus, and 13 of Chopin's 14 Waltzes with otherworldly lucidity, rhythmic purity, and luminous singing tone (*noblesse sans prétention*);\n  - Too exhausted to perform the final 14th waltz, he returned to play Bach's choral prelude **«Jesu, Joy of Man's Desiring»** (Jesus bleibet meine Freude) as a spiritual farewell to the world; passed away 11 weeks later.",
      "examples": [
        {
          "target": "Recitalul istoric de la Besançon din 1950 a consacrat arta pianistică a lui Dinu Lipatti ca o mărturie sublimă a purității și nobleței spirituale absolute.",
          "reading": "Re-chee-ta-lool ees-to-reek de la Be-zan-son...",
          "translation": "The historic Besançon recital of 1950 enshrined Dinu Lipatti's pianistic art as a sublime testament to absolute spiritual purity and nobility."
        }
      ],
      "mnemonics": [
        "Dinu Lipatti (Aristocrat of the Piano & godson of Enescu)! Ultimul recital de la Besançon 1950! Chopin Waltzes & Jesu Joy of Man's Desiring! Alfred Cortot student!"
      ],
      "culturalNotes": [
        "When Lipatti won only second prize at the 1933 Vienna International Piano Competition, legendary French pianist Alfred Cortot resigned from the jury in protest, declaring Lipatti the true victor."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which legendary Romanian pianist gave his heartbreaking final historic concert at the Besançon Festival in September 1950 before passing away at age 33?",
          "options": [
            "Valentin Gheorghiu",
            "Dinu Lipatti",
            "Dan Grigore",
            "Radu Lupu"
          ],
          "answerIndex": 1,
          "explanation": "Dinu Lipatti."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What J.S. Bach choral prelude did Dinu Lipatti play as his final piece at the Besançon recital when too weak to finish Chopin's Waltzes?",
          "options": [
            "Concertul Brandenburgic",
            "«Jesu, Joy of Man's Desiring»",
            "Variațiunile Goldberg",
            "Toccata și Fuga în re minor"
          ],
          "answerIndex": 1,
          "explanation": "«Jesu, Joy of Man's Desiring»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Lipatti's pianism was distinguished by translucent textural clarity, exquisite touch, and an utter absence of ego in service of the composer's intent.\"",
          "options": [
            "Recitalul de la Besançon nu a fost înregistrat niciodată.",
            "Lipatti a trăit până la vârsta de nouăzeci de ani.",
            "Pianistica lui Lipatti s-a distins printr-o claritate texturală translucidă, un tușeu rafinat și o absență totală a orgoliului în slujba intenției compozitorului.",
            "Lipatti a fost un cântăreț de operă bariton."
          ],
          "answerIndex": 2,
          "explanation": "Accurate piano analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which 20th-century Romanian pianist, winning the Leeds International Competition in 1969, was celebrated alongside Lipatti for poetic Schubert and Brahms interpretations?",
          "options": [
            "Ion Voicu",
            "Radu Lupu",
            "George Georgescu",
            "Dinu Lipatti"
          ],
          "answerIndex": 1,
          "explanation": "Radu Lupu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Aristocrat of the Piano"
  },
  "ro-u24-l5": {
    "id": "ro-u24-l5",
    "unit": "ro-u24",
    "level": "C2",
    "objective": "C2 synthesis on The Romanian Ballad & Lyrical Romanticism: Ciprian Porumbescu and Balada (Ciprian Porumbescu - Balada pentru vioară și orchestră op. 29, Crai Nou - prima operetă românească, Stupca, patriotism liric și tragedie).",
    "presentation": {
      "explanation": "Ciprian Porumbescu (1853–1883 - Șipotele Sucevei & Stupca) and Romanian romantic lyricism:\n- **Ciprian Porumbescu**:\n  - Studied under Anton Bruckner in Vienna; the soul of 19th-century Romanian patriotic and romantic music;\n  - Imprisoned in Cernăuți for patriotic student activism, where he contracted tuberculosis in cold prison cells, tragically dying at age 29.\n- Masterpieces:\n  - **«Balada pentru vioară și orchestră op. 29» (1880)**: The most beloved, poignant lyrical violin composition in Romanian history; weaving the mournful lament of the *Doina* with soaring bel canto romance and folk grief.\n  - **«Crai Nou» (New Moon - 1882)**: The **first Romanian operetta in history**;\n  - Composed the melody of **«Trei culori»** (former Romanian national anthem) and the music of Albania's national anthem (**«Himni i Flamurit»**).",
      "examples": [
        {
          "target": "«Balada» lui Ciprian Porumbescu exprimă dorul și melancolia profundă a sufletului românesc prin vibrația caldă a viorii soliste.",
          "reading": "Ba-la-da looy Chee-pree-an Po-room-bes-koo...",
          "translation": "Ciprian Porumbescu's \"Balada\" expresses the deep longing (Dor) and melancholy of the Romanian soul through the warm vibration of the solo violin."
        }
      ],
      "mnemonics": [
        "Ciprian Porumbescu (Balada op. 29 for violin & orchestra)! Crai Nou (First Romanian operetta 1882)! Anton Bruckner student in Vienna! Himni i Flamurit!"
      ],
      "culturalNotes": [
        "The village of Stupca in Suceava County where Ciprian Porumbescu lived and composed was officially renamed \"Ciprian Porumbescu\" in his honor."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 19th-century Romanian composer wrote the immortal \"Balada\" for violin and orchestra and the first Romanian operetta \"Crai Nou\"?",
          "options": [
            "Ciprian Porumbescu (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "George Enescu (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Eduard Caudella (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Ion Dumitrescu (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)"
          ],
          "answerIndex": 0,
          "explanation": "Ciprian Porumbescu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which European nation adopted Ciprian Porumbescu's patriotic melody *Pe-al nostru steag e scris Unire* as its official national anthem (Himni i Flamurit)?",
          "options": [
            "Grecia (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Bulgaria (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Moldova (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Albania (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)"
          ],
          "answerIndex": 3,
          "explanation": "Correct answer: \"Albania (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)\". This directly applies the principle of: C2 synthesis on The Romanian Ballad & Lyrical Romanticism: Ciprian Porumbescu and Balada (Ciprian Porumbescu - Balada pentru vioară și orchestră op. 29, Crai Nou - prima operetă românească, Stupca, patriotism liric și tragedie).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Porumbescu's Balada channels the profound existential longing of the Romanian Doina into an exquisite romantic violin lament.\"",
          "options": [
            "Balada este un concert de tobe africane. (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Balada lui Porumbescu canalizează dorul existențial profund al doinei românești într-un lamentou romantic de vioară de o rară frumusețe. (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Ciprian Porumbescu a fost un inginer de căi ferate. (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Crai Nou a fost compusă la New York în 1990. (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)"
          ],
          "answerIndex": 1,
          "explanation": "Accurate romantic musicology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What Romanian cultural concept representing untranslatable bittersweet longing, grief, and nostalgic love is the emotional core of Porumbescu's *Balada*?",
          "options": [
            "Dorul (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Invece (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Nostalgia doar (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)",
            "Bravura (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"Dorul (C2 synthesis on The Romanian Ballad  Lyrical Romanticism)\". This directly applies the principle of: C2 synthesis on The Romanian Ballad & Lyrical Romanticism: Ciprian Porumbescu and Balada (Ciprian Porumbescu - Balada pentru vioară și orchestră op. 29, Crai Nou - prima operetă românească, Stupca, patriotism liric și tragedie)..",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Romanian Ballad & Lyrical Romanticism"
  },
  "ro-u25-l1": {
    "id": "ro-u25-l1",
    "unit": "ro-u25",
    "level": "C1",
    "objective": "The Palme d'Or of the Romanian New Wave: Cristian Mungiu and 4 Months, 3 Weeks and 2 Days (Cristian Mungiu - 4 luni, 3 săptămâni și 2 zile, Palme d'Or la Cannes 2007, Noul Val Românesc, Anamaria Marinca, camera mobilă și realismul necruțător al comunismului târziu).",
    "presentation": {
      "explanation": "Cristian Mungiu (1968–present - Iași & Bucharest) and the Romanian New Wave (Noul Val Românesc):\n- **Cristian Mungiu**:\n  - Won the **Palme d'Or at the Cannes Film Festival (2007)** for **«4 luni, 3 săptămâni și 2 zile» (4 Months, 3 Weeks and 2 Days)**, inaugurating the golden age of modern Romanian cinema;\n  - Best Director at Cannes (2016) for *Bacalaureat* and Best Screenplay (2012) for *După dealuri*.\n- The Masterpiece & Minimalist Aesthetics:\n  - Set in 1987 in a grim provincial university dormitory under Ceaușescu's dictatorship (Decree 770 outlawing abortion);\n  - Follows university student Otilia (played with quiet ferocity by **Anamaria Marinca**) as she helps her roommate Găbița procure an illegal abortion from black-market operator Domnul Bebe in a claustrophobic hotel room;\n  - Uncompromising naturalism: **Zero non-diegetic musical score**, real-time plan-séquence long takes, natural lighting, and devastating moral examination of solidarity under state oppression.",
      "examples": [
        {
          "target": "«4 luni, 3 săptămâni și 2 zile» de Cristian Mungiu a cucerit Palme d'Or la Cannes în 2007, consacrând Noul Val Românesc în elita absolută a cinematografiei mondiale.",
          "reading": "Pa-troo loon, tray sap-ta-man...",
          "translation": "Cristian Mungiu's \"4 Months, 3 Weeks and 2 Days\" won the Palme d'Or at Cannes in 2007, establishing the Romanian New Wave in the absolute elite of world cinema."
        }
      ],
      "mnemonics": [
        "Cristian Mungiu (Palme d'Or at Cannes 2007)! 4 luni, 3 săptămâni și 2 zile (Anamaria Marinca & Decree 770)! Noul Val Românesc! Zero artificial music score!"
      ],
      "culturalNotes": [
        "Mungiu's Palme d'Or victory in 2007 remains the single highest cinematic honor ever achieved in Romanian history."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian director won the prestigious Palme d'Or at the Cannes Film Festival in 2007 for \"4 Months, 3 Weeks and 2 Days\"?",
          "options": [
            "Cristi Puiu",
            "Corneliu Porumboiu",
            "Radu Jude",
            "Cristian Mungiu"
          ],
          "answerIndex": 3,
          "explanation": "Cristian Mungiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What draconian 1966 communist decree under Nicolae Ceaușescu forms the oppressive historical background of *4 Months, 3 Weeks and 2 Days*?",
          "options": [
            "Decretul militar",
            "Decretul 770",
            "Decretul agrar",
            "Decretul monetar"
          ],
          "answerIndex": 1,
          "explanation": "Decretul 770."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Mungiu uses unbroken real-time takes and completely eschews background musical scoring to immerse the audience in raw ethical suspense.\"",
          "options": [
            "Mungiu utilizează cadre lungi neîntrerupte în timp real și renunță complet la coloana sonoră de fundal pentru a cufunda publicul într-un suspans etic crud.",
            "4 luni este un film SF american.",
            "Cristian Mungiu a refuzat premiul Palme d'Or.",
            "Anamaria Marinca a fost o campioană de șah."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Romanian New Wave translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Romanian actress delivered the universally acclaimed lead performance as Otilia in *4 Months, 3 Weeks and 2 Days*?",
          "options": [
            "Cosmina Stratan",
            "Laura Vasiliu",
            "Luminița Gheorghiu",
            "Anamaria Marinca"
          ],
          "answerIndex": 3,
          "explanation": "Anamaria Marinca.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Palme d'Or of the Romanian New Wave"
  },
  "ro-u25-l2": {
    "id": "ro-u25-l2",
    "unit": "ro-u25",
    "level": "C1",
    "objective": "Dark Odyssey of Bureaucracy & Neo-Realism: Cristi Puiu (Cristi Puiu - Moartea domnului Lăzărescu 2005 - Premiul Un Certain Regard la Cannes, Ion Fiscuteanu, Luminița Gheorghiu, odissee nocturnă în spitalele bucureștene, comedia neagră a indiferenței).",
    "presentation": {
      "explanation": "Cristi Puiu (1967–present - Bucharest) and the foundational spark of the Romanian New Wave:\n- **Cristi Puiu**:\n  - Won the **Prix Un Certain Regard at the Cannes Film Festival (2005)** for **«Moartea domnului Lăzărescu» (The Death of Mr. Lazarescu)**;\n- The Masterpiece & Tragic Realism:\n  - Follows Dante Remus Lăzărescu (played by **Ion Fiscuteanu**), an impoverished, sick 62-year-old pensioner in Bucharest suffering from a brain hematoma;\n  - Accompanied by a tireless, compassionate paramedic named Mioara (**Luminița Gheorghiu**), the ambulance travels all night from hospital to hospital across Bucharest, being repeatedly rejected by arrogant, exhausted, bureaucratic doctors preoccupied with a bus accident, until he dies unattended on a gurney at dawn;\n  - Masterpiece of tragic human indifference, dark bureaucratic black comedy, and handheld observational camera realism.",
      "examples": [
        {
          "target": "«Moartea domnului Lăzărescu» de Cristi Puiu a declanșat renașterea cinematografiei românești prin radiografia necruțătoare a sistemului sanitar și a indiferenței umane.",
          "reading": "Mwar-tya dom-noo-looy La-za-res-koo de Krees-tee Poo-yoo...",
          "translation": "Cristi Puiu's \"The Death of Mr. Lazarescu\" sparked the renaissance of Romanian cinema through its unsparing X-ray of the healthcare system and human indifference."
        }
      ],
      "mnemonics": [
        "Cristi Puiu (Moartea domnului Lăzărescu 2005 Cannes Un Certain Regard)! Ion Fiscuteanu & Luminița Gheorghiu! Night ambulance odyssey in Bucharest! Sirena (2020)!"
      ],
      "culturalNotes": [
        "The New York Times film critics named *The Death of Mr. Lazarescu* one of the Top 5 Greatest Films of the 21st Century so far in their landmark 2017 ranking."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian director made the landmark 2005 film \"Moartea domnului Lăzărescu\" (The Death of Mr. Lazarescu), winning the Un Certain Regard prize at Cannes?",
          "options": [
            "Cristi Puiu",
            "Radu Jude",
            "Cătălin Mitulescu",
            "Cristian Mungiu"
          ],
          "answerIndex": 0,
          "explanation": "Cristi Puiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which beloved Romanian actress portrayed the compassionate, determined ambulance nurse Mioara in *The Death of Mr. Lazarescu*?",
          "options": [
            "Luminița Gheorghiu",
            "Anamaria Marinca",
            "Medeea Marinescu",
            "Maia Morgenstern"
          ],
          "answerIndex": 0,
          "explanation": "Luminița Gheorghiu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Death of Mr. Lazarescu chronicles an elderly patient's agonizing nocturnal odyssey through the labyrinthine medical bureaucracy of post-communist Bucharest.\"",
          "options": [
            "Moartea domnului Lăzărescu este un film de desene animate.",
            "Cristi Puiu a fost un astronaut român.",
            "Ion Fiscuteanu a jucat rolul unui pilot militar.",
            "Moartea domnului Lăzărescu consemnează odisseea nocturnă chinuitoare a unui pacient vârstnic prin birocrația medicală labirintică a Bucureștiului post-comunist."
          ],
          "answerIndex": 3,
          "explanation": "Accurate cinema analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What 2020 historical philosophical period film set in 1900 Transylvania was directed by Cristi Puiu, winning Best Director at the Berlin Film Festival (Encounters)?",
          "options": [
            "«Sieranevada»",
            "«Marfa și banii»",
            "«Malmkrog»",
            "«Aurora»"
          ],
          "answerIndex": 2,
          "explanation": "«Malmkrog».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Dark Odyssey of Bureaucracy & Neo-Realism"
  },
  "ro-u25-l3": {
    "id": "ro-u25-l3",
    "unit": "ro-u25",
    "level": "C1",
    "objective": "Satirical Meta-Cinema & Historical Provocation: Radu Jude (Radu Jude - Babardeală cu bucluc sau porno balamuc - Ursul de Aur la Berlin 2021, «Îmi este indiferent dacă în istorie vom intra ca barbari», Aferim! - Ursul de Argint 2015, colaj critic și memorie).",
    "presentation": {
      "explanation": "Radu Jude (1977–present - Bucharest) and provocative satirical meta-cinema:\n- **Radu Jude**:\n  - The most audacious, intellectually fearless contemporary satirist in European cinema; won the **Golden Bear (Ursul de Aur) at the Berlin International Film Festival (2021)** for **«Babardeală cu bucluc sau porno balamuc» (Bad Luck Banging or Loony Porn)**;\n  - Silver Bear for Best Director (2015) for *Aferim!* (a 19th-century Wallachian western shot in 35mm black-and-white exposing Roma slavery);\n- Intellectual Aesthetic & Historical Memory:\n  - **«Îmi este indiferent dacă în istorie vom intra ca barbari» (I Do Not Care If We Go Down in History as Barbarians - 2018 - Crystal Globe at Karlovy Vary)**: Meta-theatrical confrontation with the 1941 Odessa massacre under the Antonescu regime;\n  - Fusing Brechtian distancing, street documentary footage, pop culture memes, and philosophical debates to confront national taboos and contemporary hypocrisy.",
      "examples": [
        {
          "target": "Radu Jude a cucerit Ursul de Aur la Berlin cu «Babardeală cu bucluc» și a demitizat istoria în «Aferim!», revoluționând satira cinematografică contemporană.",
          "reading": "Ra-doo Joo-de a koo-ke-reet Oor-sool de Oor...",
          "translation": "Radu Jude conquered the Golden Bear in Berlin with \"Bad Luck Banging\" and demystified history in \"Aferim!,\" revolutionizing contemporary cinematic satire."
        }
      ],
      "mnemonics": [
        "Radu Jude (Golden Bear Berlin 2021 & Silver Bear 2015)! Aferim! (Roma slavery 19th century)! «Îmi este indiferent dacă în istorie vom intra ca barbari»! Brechtian meta-cinema!"
      ],
      "culturalNotes": [
        "Radu Jude frequently incorporates real historical archival documents, military radio transcripts, and dictionary entries directly onto the screen as interactive collage elements."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian director won the Golden Bear at the Berlin International Film Festival in 2021 for \"Bad Luck Banging or Loony Porn\" and directed \"Aferim!\"?",
          "options": [
            "Radu Jude",
            "Cristian Mungiu",
            "Cristi Puiu",
            "Corneliu Porumboiu"
          ],
          "answerIndex": 0,
          "explanation": "Radu Jude."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What 19th-century Wallachian historical western by Radu Jude, shot on 35mm black-and-white, confronted the suppressed history of Roma slavery in Romania?",
          "options": [
            "«Aferim!»",
            "«Nu aștepta prea mult de la sfârșitul lumii»",
            "«Toată lumea din familia noastră»",
            "«Inimi cicatrizate»"
          ],
          "answerIndex": 0,
          "explanation": "«Aferim!» (2015)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Radu Jude integrates Brechtian theatrical alienation, documentary montages, and philosophical text cards to interrogate collective historical amnesia.\"",
          "options": [
            "Radu Jude este un cântăreț de operetă vieneză.",
            "Aferim! este o comedie romantică filmată la Paris.",
            "Radu Jude integrează distanțarea teatrală brechtiană, montajele documentare și cartonașele de text filosofic pentru a interoga amnezia istorică colectivă.",
            "Ursul de Aur de la Berlin a fost abolit în 1950."
          ],
          "answerIndex": 2,
          "explanation": "Accurate meta-cinema translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Whose infamous 1941 quote justifying ethnic atrocities in the Odessa campaign provided the title for Radu Jude's 2018 award-winning film?",
          "options": [
            "Nicolae Ceaușescu",
            "Ion Antonescu",
            "Carol al II-lea",
            "Mihai Viteazul"
          ],
          "answerIndex": 1,
          "explanation": "Ion Antonescu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Satirical Meta-Cinema & Historical Provocation"
  },
  "ro-u25-l4": {
    "id": "ro-u25-l4",
    "unit": "ro-u25",
    "level": "C2",
    "objective": "Deadpan Comedy & The Philosophy of Language: Corneliu Porumboiu (Corneliu Porumboiu - A fost sau n-a fost? - Caméra d'Or la Cannes 2006, Polițist, adjectiv 2009 - dicționarul și legea, La Gomera 2019 - limbajul fluierat El Silbo).",
    "presentation": {
      "explanation": "Corneliu Porumboiu (1975–present - Vaslui & Bucharest) and deadpan philosophical comedy:\n- **Corneliu Porumboiu**:\n  - Winner of the **Caméra d'Or at Cannes (2006)** for **«A fost sau n-a fost?» (12:08 East of Bucharest)**;\n- Masterpieces & Linguistic Epistemology:\n  - **«A fost sau n-a fost?» (2006)**: Set on the 16th anniversary of the 1989 Romanian Revolution in a dusty Vaslui TV studio; a local talk show host, an alcoholic history teacher, and a retired Santa Claus pensioner take live phone-in calls from viewers arguing over whether a real revolution occurred in their town square before or after 12:08 PM (when Ceaușescu fled by helicopter);\n  - **«Polițist, adjectiv» (Police, Adjective - 2009 - Cannes FIPRESCI Prize)**: A young detective refuses to arrest a teenager smoking marijuana out of moral conscience; climaxing in a legendary 20-minute scene where the police chief forces him to read the dictionary definitions of \"Conscience\", \"Law\", and \"Moral\" out loud to define state power;\n  - **«La Gomera» (The Whistlers - 2019)**: Gangster thriller using the indigenous whistling language *El Silbo Gomero*.",
      "examples": [
        {
          "target": "Corneliu Porumboiu a redefinit comedia filosofică în «A fost sau n-a fost?» și «Polițist, adjectiv», explorând puterea cuvintelor și a definițiilor din dicționar.",
          "reading": "Kor-ne-lyoo Po-room-bo-yoo a re-de-fee-neet ko-me-dee-a...",
          "translation": "Corneliu Porumboiu redefined philosophical comedy in \"12:08 East of Bucharest\" and \"Police, Adjective,\" exploring the power of words and dictionary definitions."
        }
      ],
      "mnemonics": [
        "Corneliu Porumboiu (Caméra d'Or Cannes 2006)! A fost sau n-a fost? (12:08 East of Bucharest)! Polițist, adjectiv (The dictionary scene)! La Gomera & El Silbo Gomero!"
      ],
      "culturalNotes": [
        "In *12:08 East of Bucharest*, Porumboiu filmed the TV studio talk show using a deliberately clumsy, static amateur TV camera operator who constantly pans too late and zooms inappropriately, creating brilliant deadpan comedy."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian director won the Caméra d'Or at Cannes for \"A fost sau n-a fost?\" (12:08 East of Bucharest) and directed \"Polițist, adjectiv\"?",
          "options": [
            "Florin Șerban",
            "Radu Muntean",
            "Corneliu Porumboiu",
            "Cristian Mungiu"
          ],
          "answerIndex": 2,
          "explanation": "Corneliu Porumboiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What indigenous Canary Island whistling language is learned by a corrupt Romanian policeman in Porumboiu's 2019 thriller *La Gomera* (The Whistlers)?",
          "options": [
            "Morse code",
            "El Silbo Gomero",
            "Gaelic",
            "Esperanto"
          ],
          "answerIndex": 1,
          "explanation": "El Silbo Gomero."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"In Police, Adjective, the climactic philosophical battle over moral conscience is fought not with guns, but with the authoritative definitions of the Romanian language dictionary.\"",
          "options": [
            "Corneliu Porumboiu a refuzat să meargă la Cannes.",
            "În Polițist, adjectiv, bătălia filosofică culminantă asupra conștiinței morale se dă nu cu arme, ci cu definițiile autoritare ale dicționarului limbii române.",
            "La Gomera este un film documentar despre pescuit.",
            "A fost sau n-a fost? este o dramă istorică despre daci și romani."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Porumboiu cinema translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What exact hour and minute marks the helicopter flight of Nicolae Ceaușescu that determines whether a revolution occurred in the title of *A fost sau n-a fost?*?",
          "options": [
            "12:08",
            "18:30",
            "00:00",
            "10:00"
          ],
          "answerIndex": 0,
          "explanation": "12:08 (Douăsprezece și opt minute).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Deadpan Comedy & The Philosophy of Language"
  },
  "ro-u25-l5": {
    "id": "ro-u25-l5",
    "unit": "ro-u25",
    "level": "C2",
    "objective": "C2 synthesis on Transylvania International Film Festival & Cinema Heritage: TIFF Cluj-Napoca (Festivalul Internațional de Film Transilvania - TIFF Cluj-Napoca, Piața Unirii, Castelul Bánffy de la Bonțida, Tudor Giurgiu, Trofeul Transilvania).",
    "presentation": {
      "explanation": "The Transylvania International Film Festival (TIFF) and Romania's premier cinema platform:\n- **TIFF (Festivalul Internațional de Film Transilvania - Founded 2002 by Tudor Giurgiu & Mihai Chirilov in Cluj-Napoca)**:\n  - The largest and most prestigious competitive international film festival in Central and Eastern Europe;\n  - Member of the FIAPF (International Federation of Film Producers Associations).\n- Iconic Festival Venues & Atmosphere:\n  - **Piața Unirii Open-Air Screenings**: 3,000 film lovers gathered beneath the Gothic towers of Saint Michael's Church (*Biserica Sfântul Mihail*) and the statue of King Matthias Corvinus under starry summer night skies;\n  - **Castelul Bánffy de la Bonțida** (\"The Versailles of Transylvania\"): Historic baroque castle hosting silent film ciné-concerts accompanied by live symphony orchestras and electronica;\n  - Award: **Trofeul Transilvania (Transilvania Trophy)** recognizing visionary first and second feature directors worldwide;\n  - Honoring legends of world cinema: Sophia Loren, Alain Delon, Catherine Deneuve, Claudia Cardinale, Armand Assante, and Nicolas Cage.",
      "examples": [
        {
          "target": "TIFF la Cluj-Napoca în Piața Unirii și la Castelul Bánffy a transformat Transilvania în capitala cinematografică a Europei de Est și a promovat talentele mondiale.",
          "reading": "TIFF la Klooj-Na-po-ka een Pya-tsa Oo-nee-ree...",
          "translation": "TIFF in Cluj-Napoca at Union Square and Banffy Castle transformed Transylvania into the cinematic capital of Eastern Europe and championed world filmmaking talents."
        }
      ],
      "mnemonics": [
        "TIFF Cluj-Napoca (Founded 2002 by Tudor Giurgiu)! Piața Unirii open-air cinema under Saint Michael Church! Castelul Bánffy de la Bonțida! Trofeul Transilvania!"
      ],
      "culturalNotes": [
        "TIFF founded the *Transilvania Pitch Point* and *10 pentru FILM* talent incubators, launching the careers of hundreds of young Romanian actors, cinematographers, and screenwriters onto the global stage."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which major international film festival, founded in 2002 in Cluj-Napoca by Tudor Giurgiu, is the premier cinema festival in Romania?",
          "options": [
            "TIFF (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Festivalul de la Mamaia (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Anonimul (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Astra Film Festival (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)"
          ],
          "answerIndex": 0,
          "explanation": "TIFF (Transilvania International Film Festival)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which historic 18th-century baroque castle near Cluj-Napoca hosts spectacular silent film live ciné-concerts during TIFF?",
          "options": [
            "Castelul Bran (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Castelul Peleș (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Castelul Corvinilor (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Castelul Bánffy de la Bonțida (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)"
          ],
          "answerIndex": 3,
          "explanation": "Castelul Bánffy de la Bonțida."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The giant open-air cinema in Union Square transforms historic Cluj-Napoca into a vibrant communal gathering celebrating independent world cinema.\"",
          "options": [
            "Cinematograful gigant în aer liber din Piața Unirii transformă orașul istoric Cluj-Napoca într-o adunare comunitară vibrantă ce celebrează cinematografia mondială independentă. (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Trofeul Transilvania se acordă exclusiv pentru filme sportive. (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "TIFF are loc într-un submarin pe Marea Neagră. (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Cluj-Napoca nu are cinematografe. (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)"
          ],
          "answerIndex": 0,
          "explanation": "Accurate festival analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What grand Gothic landmark in Cluj-Napoca's Piața Unirii overlooks the thousands of cinema lovers during TIFF open-air gala screenings?",
          "options": [
            "Turnul Croitorilor (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Bastionul Măcelarilor (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Catedrala Mitropolitană (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)",
            "Biserica Sfântul Mihail (C2 synthesis on Transylvania International Film Festival  Cinema Heritage)"
          ],
          "answerIndex": 3,
          "explanation": "Biserica Sfântul Mihail.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Transylvania International Film Festival & Cinema Heritage"
  },
  "ro-u26-l1": {
    "id": "ro-u26-l1",
    "unit": "ro-u26",
    "level": "C1",
    "objective": "The Father of the Theatre of the Absurd: Eugène Ionesco (Eugen Ionescu / Eugène Ionesco - Cântăreața cheală 1950 la Théâtre de la Huchette, Rinocerii 1959 - metamorfoza totalitară și rezistența lui Bérenger, Scaunele, Academia Franceză).",
    "presentation": {
      "explanation": "Eugène Ionesco / Eugen Ionescu (1909–1994 - Slatina & Paris) and the revolution of the Theatre of the Absurd:\n- **Eugen Ionescu (Eugène Ionesco)**:\n  - Born in Romania, elected to the Académie Française (1970); along with Samuel Beckett, founded the **Theatre of the Absurd (Teatrul Absurdului)**.\n- Monumental Masterpieces:\n  - **«Cântăreața cheală» (The Bald Soprano / La Cantatrice chauve - 1950)**: Staged continuously at the Théâtre de la Huchette in Paris for over 65 consecutive years (Guinness World Record); deconstructing bourgeois communication into nonsensical clichés and clashing English phrasebook dialogues;\n  - **«Rinocerii» (Rhinoceros - 1959)**: Devastating political and philosophical allegory of totalitarian mass hysteria (inspired by his youth witnessing friends succumbing to the fascist Iron Guard in 1930s Bucharest); citizens of a provincial town gradually turn into lumbering green horned rhinos, until only the everyday anti-hero **Bérenger** remains human on a bare stage, shouting his immortal refusal to conform: **«Nu cedez! Rămân om până la capăt! Nu voi capitula!»** (I won't capitulate! I will remain a human being to the end!);\n  - **«Scaunele» (The Chairs - 1952)** & **«Regele moare» (Exit the King - 1962)**.",
      "examples": [
        {
          "target": "Eugen Ionescu a fondat Teatrul Absurdului cu «Cântăreața cheală» și a demascat conformismul totalitar în «Rinocerii» prin refuzul eroic al lui Bérenger.",
          "reading": "E-oo-zhen Yo-nes-koo a fon-dat Te-a-trool Ab-zoor-doo-looy...",
          "translation": "Eugène Ionesco founded the Theatre of the Absurd with \"The Bald Soprano\" and unmasked totalitarian conformism in \"Rhinoceros\" through Berenger's heroic refusal."
        }
      ],
      "mnemonics": [
        "Eugen Ionescu / Eugène Ionesco (Father of Theatre of the Absurd & Académie Française)! Cântăreața cheală 1950 (Théâtre de la Huchette)! Rinocerii 1959 (Bérenger: \"Nu voi capitula!\")! Scaunele!"
      ],
      "culturalNotes": [
        "Ionesco wrote his foundational avant-garde literary criticism *Nu* (No) in Bucharest in 1934 before moving to Paris, arguing that in literary art, any dogmatic assertion can be simultaneously proven and refuted with equal brilliance."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian-born dramatist founded the Theatre of the Absurd and authored \"The Bald Soprano\" (1950) and \"Rhinoceros\" (1959)?",
          "options": [
            "Ion Luca Caragiale",
            "Matei Vișniec",
            "Mircea Eliade",
            "Eugen Ionescu"
          ],
          "answerIndex": 3,
          "explanation": "Eugen Ionescu (Eugène Ionesco)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What sole resisting human protagonist in Ionesco's *Rinocerii* refuses to surrender his humanity and turn into a beast at the play's climax?",
          "options": [
            "Jean",
            "Bérenger",
            "Dudard",
            "Botard"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"Bérenger\". This directly applies the principle of: The Father of the Theatre of the Absurd: Eugène Ionesco (Eugen Ionescu / Eugène Ionesco - Cântăreața cheală 1950 la Théâtre de la Huchette, Rinocerii 1959 - metamorfoza totalitară și rezistența lui Bérenger, Scaunele, Academia Franceză).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Rhinoceros dramatizes the terrifying epidemic of totalitarian ideological conformity, where rational individuals willingly abandon their human consciousness.\"",
          "options": [
            "Bérenger se transformă cu entuziasm într-un rinocer la începutul piesei.",
            "Cântăreața cheală este un tratat medical de dermatologie.",
            "Eugen Ionescu a fost un pictor renascentist.",
            "Rinocerii dramatizează epidemia terifiantă de conformism ideologic totalitar, în care indivizii raționali își abandonează de bunăvoie conștiința umană."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Absurdist drama translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What small Parisian Latin Quarter theatre has performed Ionesco's *The Bald Soprano* and *The Lesson* uninterrupted every single evening since 1957?",
          "options": [
            "Théâtre de l'Odéon",
            "Comédie-Française",
            "Théâtre de la Huchette",
            "Opéra Garnier"
          ],
          "answerIndex": 2,
          "explanation": "Théâtre de la Huchette.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Father of the Theatre of the Absurd"
  },
  "ro-u26-l2": {
    "id": "ro-u26-l2",
    "unit": "ro-u26",
    "level": "C1",
    "objective": "The Titan of Romanian Social Comedy: Ion Luca Caragiale (Ion Luca Caragiale - O scrisoare pierdută 1884, Tipătescu, Zoe Trahanache, Nae Cațavencu, Cetățeanul turmentat - «Eu cu cine votez?», O noapte furtunoasă, D'ale carnavalului, satira politicianismului balcanic).",
    "presentation": {
      "explanation": "Ion Luca Caragiale (1852–1912 - Haimanale & Bucharest/Berlin) and the supreme pinnacle of Romanian satirical comedy:\n- **Ion Luca Caragiale (I. L. Caragiale)**:\n  - The national dramatist of Romania; the Molière and Gogol of Romanian literature; patron of the National Theatre in Bucharest (*Teatrul Național „I. L. Caragiale”*).\n- The Masterpiece of World Comedy: **«O scrisoare pierdută» (A Lost Letter - 1884)**:\n  - Set in a provincial Romanian county capital during a parliamentary election;\n  - A compromising love letter written by the Prefect Ştefan Tipătescu to Zoe Trahanache (wife of the venerable party boss Zaharia Trahanache - *\"Neicușorule, ai puțintică răbdare\"*) is lost by the drunken postman (**Cetățeanul turmentat**) and found by blackmailing opposition journalist Nae Cațavencu;\n  - The Electoral Climax: Chaos, demagoguery, and hypocrisy resolved when central government orders both factions to elect an outside puppet idiot (**Agamemnon Dandanache** - *\"mai prost decât Cațavencu și mai canalie decât Tipătescu\"*), ending in a champagne toast to national harmony;\n  - The Immortal Catchphrase of the Drunken Voter: **«Eu pentru cine votez?»** (Whom do I vote for?);\n  - Masterpieces: **«O noapte furtunoasă»** & **«D'ale carnavalului»**.",
      "examples": [
        {
          "target": "Caragiale a radiografiat pentru eternitate demagogia politică în «O scrisoare pierdută», unde Cetățeanul turmentat întreabă neputincios: «Eu cu cine votez?».",
          "reading": "Ka-ra-zha-le a ra-dyo-gra-fyat...",
          "translation": "Caragiale perpetually X-rayed political demagoguery in \"A Lost Letter,\" where the Drunken Citizen helplessly asks: \"Whom do I vote for?\""
        }
      ],
      "mnemonics": [
        "I. L. Caragiale (National Dramatist of Romania)! O scrisoare pierdută 1884! Cetățeanul turmentat («Eu cu cine votez?»)! Zaharia Trahanache («Ai puțintică răbdare»)! Agamiță Dandanache!"
      ],
      "culturalNotes": [
        "In Romania, phrases coined by Caragiale like *«Curat murdar!»* (Cleanly dirty / Purely filthy) and *«Ai puțintică răbdare»* are embedded in everyday political commentary."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 19th-century Romanian master dramatist wrote the supreme satirical political comedy \"O scrisoare pierdută\" (1884)?",
          "options": [
            "Ion Luca Caragiale",
            "Mihail Sebastian",
            "Camil Petrescu",
            "Vasile Alecsandri"
          ],
          "answerIndex": 0,
          "explanation": "Ion Luca Caragiale."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What memorable question is repeatedly asked by the confused, honest Drunken Citizen (Cetățeanul turmentat) in Caragiale's *O scrisoare pierdută*?",
          "options": [
            "«Eu cu cine votez?»",
            "«Unde este scrisoarea?»",
            "«Cine este prefectul?»",
            "«Cât costă biletul?»"
          ],
          "answerIndex": 0,
          "explanation": "«Eu cu cine votez?»"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Caragiale's satirical comedies brilliantly unmask political opportunism, electoral demagoguery, and bureaucratic corruption with linguistic genius.\"",
          "options": [
            "O scrisoare pierdută este un roman istoric despre epoca dacică.",
            "I. L. Caragiale a refuzat să scrie piese de teatru.",
            "Comediile satirice ale lui Caragiale demască strălucit oportunismul politic, demagogia electorală și corupția birocratică printr-un geniu lingvistic desăvârșit.",
            "Zaharia Trahanache era un general spartan."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Caragiale theatrical analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What monumental Bucharest cultural institution is officially named in honor of Ion Luca Caragiale?",
          "options": [
            "Opera Națională",
            "Teatrul Național „I. L. Caragiale” din București",
            "Palatul Parlamentului",
            "Ateneul Român"
          ],
          "answerIndex": 1,
          "explanation": "Teatrul Național „I. L. Caragiale” din București.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Titan of Romanian Social Comedy"
  },
  "ro-u26-l3": {
    "id": "ro-u26-l3",
    "unit": "ro-u26",
    "level": "C1",
    "objective": "Poetic Melancholy & The Nameless Star: Mihail Sebastian (Mihail Sebastian - Steaua fără nume 1944, Mona și profesorul Miroiu, gara provincială, Jocul de-a vacanța, Jurnalul 1935-1944, moartea tragică la 37 de ani).",
    "presentation": {
      "explanation": "Mihail Sebastian (Iosif Hechter - 1907–1945 - Brăila & Bucharest) and the lyrical summit of Romanian melancholic theater:\n- **Mihail Sebastian**:\n  - Novelist, essayist, and brilliant playwright; his posthumously published *Jurnal (1935–1944)* is considered one of the greatest literary diaries of 20th-century Europe, chronicling the rise of fascism in Romania.\n- The Masterpiece: **«Steaua fără nume» (The Star Without a Name - Premiered March 1, 1944 under a pseudonym due to anti-Semitic racial laws)**:\n  - Set in a sleepy, anonymous provincial railway station on the Prahova Valley line;\n  - An aristocratic, glamorous socialite (**Mona**) is removed from a luxury train because she has no ticket; she is sheltered for one night by humble, dreaming high-school astronomy teacher **Marin Miroiu**;\n  - Miroiu reveals that he has discovered a secret star in Ursa Major that does not appear in any telescope chart, naming it in his heart after her;\n  - They share an unforgettable night of cosmic poetry and love, before her wealthy, cynical aristocratic lover Grig arrives in a luxury automobile to take her back to Bucharest;\n  - Miroiu's Tragic Astronomical Aphorism: **«Nicio stea nu se abate din drumul ei și nicio stea nu se oprește.»** (No star ever deviates from its course, and no star ever stops);\n  - Masterpieces: **«Jocul de-a vacanța» (1938)** & **«Ultima oră»**.",
      "examples": [
        {
          "target": "«Steaua fără nume» de Mihail Sebastian a fermecat generații prin iubirea efemeră dintre Mona și profesorul Miroiu: «Nicio stea nu se abate din drumul ei».",
          "reading": "Ste-a-wa fa-ra noo-me de Mee-ha-eel Se-bas-tyan...",
          "translation": "Mihail Sebastian's \"The Star Without a Name\" enchanted generations through the ephemeral love between Mona and teacher Miroiu: \"No star ever deviates from its course.\""
        }
      ],
      "mnemonics": [
        "Mihail Sebastian (Steaua fără nume 1944 & Jurnal 1935–1944)! Mona & Professor Marin Miroiu! «Nicio stea nu se abate din drumul ei»! Jocul de-a vacanța!"
      ],
      "culturalNotes": [
        "Sebastian had to register *Steaua fără nume* under the non-Jewish pseudonym *Victor Mincu* in 1944 so the National Theatre could stage the premiere without being shut down by the Antonescu censorship."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian playwright wrote the poetic theatrical masterpiece \"Steaua fără nume\" (The Star Without a Name) in 1944 and \"Jocul de-a vacanța\"?",
          "options": [
            "Mihail Sebastian",
            "Ion Luca Caragiale",
            "Camil Petrescu",
            "Lucian Blaga"
          ],
          "answerIndex": 0,
          "explanation": "Mihail Sebastian."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What academic subject is taught by the dreamer protagonist Marin Miroiu in Mihail Sebastian's *Steaua fără nume*?",
          "options": [
            "Astronomie și matematică",
            "Geologie minieră",
            "Medicină veterinară",
            "Drept constituțional"
          ],
          "answerIndex": 0,
          "explanation": "Astronomie și matematică."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Star Without a Name captures the fleeting intersection between cosmic dreaming and ordinary provincial reality, demonstrating that human destinies, like stars, cannot abandon their orbits.\"",
          "options": [
            "Steaua fără nume este un manual despre războiul submarin.",
            "Steaua fără nume surprinde intersecția efemeră dintre visarea cosmică și realitatea provincială obișnuită, demonstrând că destinele umane, asemenea stelelor, nu își pot părăsi orbitele.",
            "Mona era o astronaută pe Marte.",
            "Mihail Sebastian a trăit peste nouăzeci de ani în Elveția."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Sebastian drama translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What famous philosophical line does teacher Miroiu utter about the inexorable laws of the cosmos and human separation at the end of *Steaua fără nume*?",
          "options": [
            "«Nicio stea nu se abate din drumul ei și nicio stea nu se oprește»",
            "«Iubirea învinge legile fizicii»",
            "«Universul este un joc de noroc»",
            "«Stelele cad întotdeauna pe pământ»"
          ],
          "answerIndex": 0,
          "explanation": "«Nicio stea nu se abate din drumul ei...»",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Poetic Melancholy & The Nameless Star"
  },
  "ro-u26-l4": {
    "id": "ro-u26-l4",
    "unit": "ro-u26",
    "level": "C2",
    "objective": "Contemporary Post-Totalitarian Parables: Matei Vișniec (Matei Vișniec - Angajare de clovn 1986, Despre sexul femeii ca un câmp de luptă în războiul din Bosnia, Istoria comunismului povestită pentru bolnavii mintal, Festivalul de la Avignon, Radio France Internationale).",
    "presentation": {
      "explanation": "Matei Vișniec (1956–present - Rădăuți, Suceava & Paris) and contemporary European political parables:\n- **Matei Vișniec**:\n  - The most performed living Romanian dramatist in the world; resident playwright at the Festival d'Avignon in France and senior journalist at Radio France Internationale (RFI);\n  - Left Romania for Paris in 1987 after all his plays were banned by communist censorship.\n- Monumental Masterpieces:\n  - **«Angajare de clovn» (Old Clown Wanted - 1986 - UNITER Best Play Award)**: Three aging, destitute veteran clowns (Nicollo, Filippo, and Peppino) meet in a sterile waiting room for a single job audition, turning their desperate survival into a tragicomic, ruthless acrobatic duel of life and death;\n  - **«Istoria comunismului povestită pentru bolnavii mintal» (The History of Communism as Told to Mental Patients - 1993)**: Set inside a Moscow psychiatric asylum in 1953 as Stalin lies dying; a writer is tasked with teaching psychiatric patients the glorious history of the Soviet revolution, only for the patients to take over the asylum in full ideological fanaticism;\n  - **«Despre sexul femeii ca un câmp de luptă în războiul din Bosnia» (Body of a Woman as a Battlefield in the Bosnian War)**: Devastating exploration of wartime trauma and female solidarity.",
      "examples": [
        {
          "target": "Matei Vișniec a cucerit scenele lumii la Avignon și Paris cu parabole post-totalitare geniale precum «Angajare de clovn» și «Istoria comunismului povestită pentru bolnavii mintal».",
          "reading": "Ma-tay Veesh-nyek a koo-ke-reet she-ne-le...",
          "translation": "Matei Vișniec conquered world stages in Avignon and Paris with brilliant post-totalitarian parables like \"Old Clown Wanted\" and \"The History of Communism Told to Mental Patients.\""
        }
      ],
      "mnemonics": [
        "Matei Vișniec (Most performed living Romanian dramatist & Festival d'Avignon)! Angajare de clovn 1986 (Nicollo, Filippo, Peppino)! Istoria comunismului povestită pentru bolnavii mintal 1993! Radio France Internationale!"
      ],
      "culturalNotes": [
        "The municipal theatre in his home city of Suceava was officially renamed the *Teatrul Municipal „Matei Vișniec”* in 2015 in recognition of his global literary stature."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which internationally acclaimed living Romanian-French playwright wrote \"Angajare de clovn\" (Old Clown Wanted) and \"The History of Communism as Told to Mental Patients\"?",
          "options": [
            "Silviu Purcărete",
            "Radu Afrim",
            "Matei Vișniec",
            "Eugen Ionescu"
          ],
          "answerIndex": 2,
          "explanation": "Matei Vișniec."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How many elderly, desperate veteran clowns compete in the claustrophobic job audition duel in Matei Vișniec's *Angajare de clovn*?",
          "options": [
            "Zece clovni",
            "Trei clovni",
            "Un singur clovn",
            "Doi clovni"
          ],
          "answerIndex": 1,
          "explanation": "Trei clovni (Nicollo, Filippo și Peppino)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Vișniec's allegorical dramaturgy transforms psychiatric wards and clown auditions into grotesque laboratories examining totalitarian brainwashing and human vulnerability.\"",
          "options": [
            "Dramaturgia alegorică a lui Vișniec transformă saloanele de psihiatrie și audițiile de clovni în laboratoare grotești ce examinează spălarea pe creier totalitară și vulnerabilitatea umană.",
            "Matei Vișniec nu a părăsit niciodată România.",
            "Istoria comunismului este un manual de contabilitate bancară.",
            "Angajare de clovn este o piesă despre astronomie spațială."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Vișniec analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious French international arts festival features multiple premieres of Matei Vișniec's theatrical works every summer?",
          "options": [
            "Festivalul de la Nisa",
            "Festivalul de la Cannes",
            "Festivalul de la Lyon",
            "Festivalul de la Avignon"
          ],
          "answerIndex": 3,
          "explanation": "Festivalul de la Avignon.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Contemporary Post-Totalitarian Parables"
  },
  "ro-u26-l5": {
    "id": "ro-u26-l5",
    "unit": "ro-u26",
    "level": "C2",
    "objective": "C2 synthesis on Monumental Directorial Vision & Stage Spectacle: Silviu Purcărete and FITS Sibiu (Silviu Purcărete - Faust la Fabrica de Cultură Sibiu, Festivalul Internațional de Teatru de la Sibiu - FITS condus de Constantin Chiriac, Radu Afrim, Teatrul Național Radu Stanca, UNITER).",
    "presentation": {
      "explanation": "Silviu Purcărete, Constantin Chiriac, and the monumental spectacle of Romanian stage direction:\n- **Silviu Purcărete (1950–present - Bucharest & Paris)**:\n  - The visionary titan of European stage directing; Chevalier des Arts et des Lettres in France; Knight of the Order of the Star of Romania.\n- The Monumental Masterpiece: **«Faust» (Premiere 2007 at the Teatrul Național „Radu Stanca” in Sibiu)**:\n  - Regarded by international critics as one of the greatest theatrical productions in world history (performed for nearly 20 years to international sold-out crowds in Edinburgh, Frankfurt, Brussels, Tokyo);\n  - Staged inside the colossal industrial halls of the **Fabrica de Cultură** in Sibiu;\n  - Features **Ilie Gheorghe / Miklós Bács** as Faust and **Ofelia Popii** in a legendary, gender-defying performance as Mephistopheles;\n  - **The Walpurgisnacht (Noaptea Valpurgiei) Climax**: The auditorium back walls collapse, and the entire audience is physically invited into a giant flaming inferno alongside 120 actors, rock bands, live pigs, angels, and pyrotechnics;\n- **FITS (Festivalul Internațional de Teatru de la Sibiu - Founded by Constantin Chiriac)**:\n  - The 3rd largest performing arts festival in the world (after Edinburgh and Avignon), transforming the medieval Saxon city of Sibiu into a global theatre capital.",
      "examples": [
        {
          "target": "«Faust» de Silviu Purcărete la Sibiu cu Ofelia Popii în rolul lui Mefisto și Festivalul FITS au transformat România într-un epicentru al teatrului monumental mondial.",
          "reading": "Fowst de Seel-vyoo Poor-ka-re-te la See-byoo...",
          "translation": "Silviu Purcărete's \"Faust\" in Sibiu with Ofelia Popii as Mephisto and the FITS Festival transformed Romania into an epicenter of monumental world theatre."
        }
      ],
      "mnemonics": [
        "Silviu Purcărete (Master director of monumental spectacle)! Faust at Fabrica de Cultură Sibiu! Ofelia Popii as Mephistopheles! FITS Sibiu (Constantin Chiriac)!"
      ],
      "culturalNotes": [
        "Actress Ofelia Popii won both the UNITER Award for Best Actress and the prestigious *Herald Angel Award* at the Edinburgh International Festival for her volcanic performance as Mephistopheles in *Faust*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which visionary Romanian director staged the world-renowned monumental production of Goethe's \"Faust\" at the National Theatre in Sibiu?",
          "options": [
            "Silviu Purcărete (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Radu Afrim (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Gábor Tompa (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Andrei Șerban (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)"
          ],
          "answerIndex": 0,
          "explanation": "Silviu Purcărete."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Romanian actress delivered an internationally acclaimed, award-winning performance as Mephistopheles in Silviu Purcărete's *Faust*?",
          "options": [
            "Maia Morgenstern (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Mariana Mihuț (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Dorina Chiriac (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Ofelia Popii (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)"
          ],
          "answerIndex": 3,
          "explanation": "Ofelia Popii."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Purcărete's Faust immerses spectators directly into the fiery chaos of Walpurgis Night, breaking all spatial boundaries between audience and monumental industrial stagecraft.\"",
          "options": [
            "FITS are loc pe o insulă pustie în Pacific. (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Constantin Chiriac este un campion de patinaj. (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Faust este o piesă pentru marionete de lemn de 5 minute. (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Faust-ul lui Purcărete cufundă spectatorii direct în haosul incandescent al Nopții Valpurgiei, sfărâmând toate barierele spațiale dintre public și scenografia industrială monumentală. (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate monumental theatre analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What major international theatre festival, founded by Constantin Chiriac in the Saxon city of Sibiu, ranks among the top three largest performing arts festivals in the world?",
          "options": [
            "FNT București (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "TIFF (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "FITS (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)",
            "Festivalul Enescu (C2 synthesis on Monumental Directorial Vision  Stage Spectacle)"
          ],
          "answerIndex": 2,
          "explanation": "FITS (Festivalul Internațional de Teatru de la Sibiu).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Monumental Directorial Vision & Stage Spectacle"
  },
  "ro-u27-l1": {
    "id": "ro-u27-l1",
    "unit": "ro-u27",
    "level": "C1",
    "objective": "The Sovereign Diva of Royal Covent Garden: Angela Gheorghiu (Angela Gheorghiu - La Traviata 1994 la Covent Garden cu Georg Solti, Puccini - Tosca și La Bohème cu Roberto Alagna, Victoria de los Ángeles Award, Opera Națională București).",
    "presentation": {
      "explanation": "Angela Gheorghiu (1965–present - Adjud, Vrancea & Bucharest/London) and the golden crown of contemporary operatic divas:\n- **Angela Gheorghiu**:\n  - The most glamorous and celebrated soprano of the 21st century; studied at the Bucharest Music Academy.\n- The Historic Covent Garden Triumph (December 1994):\n  - Starred as Violetta Valéry in Verdi's **«La Traviata»** at the Royal Opera House Covent Garden, conducted by legendary maestro **Sir Georg Solti**;\n  - Solti was so moved during rehearsals that he wept, declaring: *\"She can do anything! I was in tears. I had to go out. The girl is wonderful.\"*;\n  - The BBC halted its regular scheduled television programming to broadcast the live Covent Garden performance across the United Kingdom for the first time in British broadcast history, launching her into global superstardom;\n- Masterpieces & Signature Roles:\n  - The definitive interpreter of **Giacomo Puccini**: **«Tosca»** (with Roberto Alagna and Ruggero Raimondi), **«La Bohème»** (Mimì), and **«Madama Butterfly»**;\n  - Awarded the *Chevalier des Arts et des Lettres* in France and the *Order of the Star of Romania*.",
      "examples": [
        {
          "target": "Angela Gheorghiu a cucerit lumea operei în 1994 la Covent Garden cu «La Traviata» sub bagheta lui Sir Georg Solti, devenind cea mai strălucită divă a generației sale.",
          "reading": "An-zhe-la Ge-or-gyoo a koo-ke-reet...",
          "translation": "Angela Gheorghiu conquered the opera world in 1994 at Covent Garden with \"La Traviata\" under Sir Georg Solti, becoming the most luminous diva of her generation."
        }
      ],
      "mnemonics": [
        "Angela Gheorghiu (Global Soprano Diva from Adjud)! La Traviata 1994 Covent Garden (Sir Georg Solti & BBC live broadcast)! Tosca & La Bohème! Opera Națională București!"
      ],
      "culturalNotes": [
        "When Angela Gheorghiu sang \"Vissi d'arte\" in *Tosca* at the Metropolitan Opera in New York, the audience interrupted the performance with a thunderous 5-minute ovation."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which world-renowned Romanian soprano achieved global superstardom in 1994 starring in Verdi's \"La Traviata\" at Covent Garden under Sir Georg Solti?",
          "options": [
            "Ileana Cotrubaș",
            "Viorica Cortez",
            "Mariana Nicolesco",
            "Angela Gheorghiu"
          ],
          "answerIndex": 3,
          "explanation": "Angela Gheorghiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which legendary Hungarian-British conductor wept during rehearsals of *La Traviata* in 1994 upon discovering Angela Gheorghiu's voice?",
          "options": [
            "Sir Georg Solti",
            "Herbert von Karajan",
            "Claudio Abbado",
            "Leonard Bernstein"
          ],
          "answerIndex": 0,
          "explanation": "Sir Georg Solti."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Angela Gheorghiu combines dark, velvety vocal coloration with impassioned theatrical realism, reigning across the Metropolitan Opera and Royal Covent Garden for three decades.\"",
          "options": [
            "Sir Georg Solti a fost un regizor de film mut.",
            "Angela Gheorghiu este o campioană de gimnastică artistică.",
            "Angela Gheorghiu combină o coloratură vocală catifelată și întunecată cu un realism teatral pasional, dominând scenele de la Metropolitan Opera și Royal Covent Garden timp de trei decenii.",
            "La Traviata este o piesă de teatru mut."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Gheorghiu vocal analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What famous Puccini soprano aria from *Tosca*, expressing devotion to art and love, is Angela Gheorghiu's supreme signature showpiece?",
          "options": [
            "«Casta Diva»",
            "«Vissi d'arte»",
            "«O mio babbino caro»",
            "«Un bel dì, vedremo»"
          ],
          "answerIndex": 1,
          "explanation": "«Vissi d'arte».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sovereign Diva of Royal Covent Garden"
  },
  "ro-u27-l2": {
    "id": "ro-u27-l2",
    "unit": "ro-u27",
    "level": "C1",
    "objective": "The Bel Canto Renaissance & The Great Romanian Vocal Lineage: Mariana Nicolesco and Ileana Cotrubaș (Mariana Nicolesco - Regina del Belcanto la La Scala și Salzburg, Concursul Național Hariclea Darclée la Brăila, Ileana Cotrubaș - Gilda în Rigoletto la Viena și Met, Hariclea Darclée - prima Tosca din istorie 1900).",
    "presentation": {
      "explanation": "The historic golden lineage of Romanian opera: From Hariclea Darclée to Mariana Nicolesco and Ileana Cotrubaș:\n- **Hariclea Darclée (1860–1939 - Brăila)**:\n  - One of the greatest dramatic sopranos in world history; **Giacomo Puccini personally wrote the title role of «Tosca» (Rome, 1900) specifically for her voice**, composing the immortal aria *«Vissi d'arte»* at her personal request;\n  - Staged 58 different opera roles across La Scala, Paris Opéra, and Teatro Real.\n- **Mariana Nicolesco (1948–2022 - Găujani, Giurgiu & Milan)**:\n  - Hailed in Italy as *«Regina del Belcanto»*; starred in Bellini and Donizetti world premieres at La Scala, Salzburg Festival under Karajan, and Carnegie Hall;\n  - Founded the prestigious **Hariclea Darclée International Voice Competition & Festival (Brăila - 1995)**, training over 3,000 young opera singers worldwide; UNESCO Artist for Peace.\n- **Ileana Cotrubaș (1939–present - Galați)**:\n  - Sublime lyric soprano; legendary Gilda in Verdi's *Rigoletto* and Violetta in *La Traviata* with Carlos Kleiber at the Vienna State Opera.",
      "examples": [
        {
          "target": "Linia de aur a sopranelor românești unește pe Hariclea Darclée—prima Tosca din istorie—cu Ileana Cotrubaș și Mariana Nicolesco, Regina del Belcanto.",
          "reading": "Lee-nya de owr a so-pra-ne-lor...",
          "translation": "The golden lineage of Romanian sopranos unites Hariclea Darclée—history's first Tosca—with Ileana Cotrubaș and Mariana Nicolesco, Queen of Bel Canto."
        }
      ],
      "mnemonics": [
        "Hariclea Darclée (First Tosca in world history 1900 for Puccini)! Mariana Nicolesco (Regina del Belcanto & Darclée Competition in Brăila)! Ileana Cotrubaș (Carlos Kleiber Traviata)!"
      ],
      "culturalNotes": [
        "Puccini originally did not include the aria \"Vissi d'arte\" in the score of *Tosca*, but added it during rehearsals because Hariclea Darclée insisted that Tosca needed a lyrical moment of prayer before Scarpia."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 19th-century Romanian soprano was the original creator of Puccini's \"Tosca\" at its world premiere in Rome in 1900?",
          "options": [
            "Hariclea Darclée",
            "Ileana Cotrubaș",
            "Viorica Cortez",
            "Mariana Nicolesco"
          ],
          "answerIndex": 0,
          "explanation": "Hariclea Darclée."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What prestigious international voice competition in Brăila was founded in 1995 by soprano Mariana Nicolesco to honor Hariclea Darclée?",
          "options": [
            "Concursul Internațional de Canto „Hariclea Darclée”",
            "Concursul George Enescu",
            "Concursul Dinu Lipatti",
            "Concursul Maria Callas"
          ],
          "answerIndex": 0,
          "explanation": "Concursul Internațional de Canto „Hariclea Darclée”."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Hariclea Darclée's immense three-octave dramatic agility inspired Puccini, Verdi, and Mascagni to compose iconic soprano roles specifically tailored to her voice.\"",
          "options": [
            "Hariclea Darclée a fost o violonistă de jazz americană.",
            "Agilitatea dramatică imensă de trei octave a Haricleei Darclée i-a inspirat pe Puccini, Verdi și Mascagni să compună roluri legendare de soprană special adaptate vocii sale.",
            "Ileana Cotrubaș nu a cântat niciodată la Viena.",
            "Concursul Darclée este o cursă de atletism."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Romanian opera lineage translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary conductor partnered with Ileana Cotrubaș on the celebrated 1977 Deutsche Grammophon recording of Verdi's *La Traviata*?",
          "options": [
            "Carlos Kleiber",
            "Leonard Bernstein",
            "Herbert von Karajan",
            "Claudio Abbado"
          ],
          "answerIndex": 0,
          "explanation": "Carlos Kleiber.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Bel Canto Renaissance & The Great Romanian Vocal Lineage"
  },
  "ro-u27-l3": {
    "id": "ro-u27-l3",
    "unit": "ro-u27",
    "level": "C1",
    "objective": "The National Opera Monument & Enescu's Oedipe: Opera Națională București (Opera Națională București 1921 - arhitect Octav Doicescu, capodopera lirică Oedipe de George Enescu 1936 la Palais Garnier, mitul sofoclean și sinteza folclorului românesc).",
    "presentation": {
      "explanation": "George Enescu's *Oedipe* and the monumental Opera Națională București:\n- **George Enescu (1881–1955 - Liveni & Paris)** & The Masterpiece of 20th-Century Opera:\n  - **«Oedipe» (Tragédie lyrique in 4 acts - Composed 1910–1931 - World Premiere: March 13, 1936 at the Palais Garnier / Paris Opéra)**:\n    - Libretto by French poet Edmond Fleg based on Sophocles (*Oedipus Rex* and *Oedipus at Colonus*);\n    - Enescu spent 21 years crafting this colossal score, declaring: *\"It is the work of my life\"*, synthesizing ancient Greek tragic choir, quarter-tone microtonality (*sferturi de ton*), Byzantine liturgical monody, and Romanian peasant folk laments (*Doina*);\n    - Features the Sphinx scene with Oedipe answering the cosmic riddle, and Oedipus achieving transfigured redemption in the sacred grove of Athens;\n- **Opera Națională București (ONB - Founded 1921 - Monumental building opened 1953)**:\n  - Designed by master modernist architect **Octav Doicescu**;\n  - Statues of George Enescu and the 4 Muses in the park; historic home of Romanian opera and classical ballet.",
      "examples": [
        {
          "target": "Capodopera «Oedipe» de George Enescu a triumfat la Palais Garnier din Paris în 1936, unind tragedia greacă antică cu doina românească în cel mai măreț monument liric național.",
          "reading": "Ka-po-do-pe-ra E-deep de Zhorzh E-nes-koo...",
          "translation": "George Enescu's masterpiece \"Oedipe\" triumphed at the Palais Garnier in Paris in 1936, uniting ancient Greek tragedy with the Romanian doina in the greatest national lyric monument."
        }
      ],
      "mnemonics": [
        "George Enescu (Oedipe 1936 at Paris Palais Garnier)! 21 years of composition! Microtones & Romanian Doina! Opera Națională București (Octav Doicescu 1953)!"
      ],
      "culturalNotes": [
        "The George Enescu International Festival, held biennially in Bucharest, features full-scale international stagings of *Oedipe* alongside the world's leading symphony orchestras (London Symphony, Berlin Philharmonic)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which monumental 1936 opera by George Enescu, premiered at the Paris Palais Garnier, is considered the greatest opera in Romanian music history?",
          "options": [
            "«Oedipe»",
            "«Rapsodia Română»",
            "«Poema Română»",
            "«Vox Maris»"
          ],
          "answerIndex": 0,
          "explanation": "Correct answer: \"«Oedipe»\". This directly applies the principle of: The National Opera Monument & Enescu's Oedipe: Opera Națională București (Opera Națională București 1921 - arhitect Octav Doicescu, capodopera lirică Oedipe de George Enescu 1936 la Palais Garnier, mitul sofoclean și sinteza folclorului românesc).."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Romanian modernist architect designed the grand permanent building of the Bucharest National Opera (Opera Națională București), opened in 1953?",
          "options": [
            "Octav Doicescu",
            "Marcel Janco",
            "Ion Mincu",
            "Horia Creangă"
          ],
          "answerIndex": 0,
          "explanation": "Octav Doicescu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Enescu's Oedipe incorporates quarter-tone vocal inflections and ancient pastoral flute idioms to depict Oedipus's tragic defiance against deterministic fate.\"",
          "options": [
            "Oedipe de Enescu încorporează inflexiuni vocale în sferturi de ton și idiome pastorale arhaice de fluier pentru a înfățișa sfidarea tragică a lui Oedip împotriva destinului determinist.",
            "Octav Doicescu a fost un tenor italian.",
            "Opera Națională București a fost construită în secolul al XV-lea.",
            "Oedipe este o piesă pentru pian solo compusă în 2010."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Enescu Oedipe analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which French-Jewish poet wrote the philosophical operatic libretto for George Enescu's *Oedipe* based on Sophocles?",
          "options": [
            "Jean Cocteau",
            "Paul Claudel",
            "André Gide",
            "Edmond Fleg"
          ],
          "answerIndex": 3,
          "explanation": "Edmond Fleg.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The National Opera Monument & Enescu's Oedipe"
  },
  "ro-u27-l4": {
    "id": "ro-u27-l4",
    "unit": "ro-u27",
    "level": "C2",
    "objective": "The Dramatic Baritone & Transylvanian Voice: Nicolae Herlea and Ludovic Spiess (Nicolae Herlea - Regele Baritonilor la La Scala, Met și Bolșoi, Figaro în Bărbierul din Sevilla «Largo al factotum», Ludovic Spiess - marele tenor eroic Radamès și Calaf, Opera Română din Cluj-Napoca 1919).",
    "presentation": {
      "explanation": "Nicolae Herlea, Ludovic Spiess, and the power of Romanian male operatic voices:\n- **Nicolae Herlea (1927–2014 - Bucharest)**:\n  - Hailed in Milan and New York as **«Regele Baritonilor» (The King of Baritones)**;\n  - Performed the title role of Figaro in Rossini's *Il barbiere di Siviglia* (**«Largo al factotum»**) over **500 times** worldwide with volcanic vocal resonance, effortless high A-naturals, and comedic Italianate sparkle;\n  - Reigned at the Metropolitan Opera, La Scala, Vienna State Opera, and the Bolshoi Theatre in Moscow for over three decades (Verdi's *Rigoletto*, *Don Carlo* as Posa, *La Traviata* as Germont);\n- **Ludovic Spiess (1938–2006 - Cluj-Napoca & Bucharest)**:\n  - Titanic heroic tenor (*heldentenor*); sang Radamès (*Aida*), Calaf (*Turandot*), and Canio (*Pagliacci*) opposite Birgit Nilsson and Martina Arroyo at the Salzburg Festival under Karajan and the Met;\n  - Served as Romanian Minister of Culture and General Director of the Bucharest National Opera;\n- **Opera Națională Română Cluj-Napoca (Founded 1919)**: The historic first Romanian state opera institution founded in Transylvania.",
      "examples": [
        {
          "target": "Nicolae Herlea, supranumit «Regele Baritonilor», și tenorul eroic Ludovic Spiess au purtat faima școlii românești de canto pe marile scene de la La Scala la Metropolitan.",
          "reading": "Nee-ko-la-ye Her-lya, soo-pra-noo-meet...",
          "translation": "Nicolae Herlea, dubbed \"The King of Baritones,\" and heroic tenor Ludovic Spiess carried the fame of the Romanian vocal school across the great stages from La Scala to the Met."
        }
      ],
      "mnemonics": [
        "Nicolae Herlea (Regele Baritonilor & Figaro in Largo al factotum 500+ times)! Ludovic Spiess (Heroic dramatic tenor Radamès & Calaf with Karajan)! Opera Națională Română Cluj-Napoca 1919!"
      ],
      "culturalNotes": [
        "When Nicolae Herlea sang Figaro's \"Largo al factotum\" at the Bolshoi Theatre in Moscow, the audience refused to let the opera proceed until he encored the entire aria from the beginning."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which legendary Romanian baritone was hailed as \"The King of Baritones\" at La Scala and the Met, singing Figaro's \"Largo al factotum\" over 500 times?",
          "options": [
            "Octav Enigărescu",
            "Dan Iordăchescu",
            "Nicolae Herlea",
            "Ludovic Spiess"
          ],
          "answerIndex": 2,
          "explanation": "Nicolae Herlea."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which grand opera institution in Transylvania, founded in 1919, was the first official Romanian state opera theatre established in history?",
          "options": [
            "Opera Națională Română Timișoara",
            "Opera Națională Română din Cluj-Napoca",
            "Opera Națională Română Iași",
            "Opera Națională București"
          ],
          "answerIndex": 1,
          "explanation": "Opera Națională Română din Cluj-Napoca."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Herlea's bronze baritone timbre possessed an extraordinary acoustic projection that filled the vast auditorium of the Metropolitan Opera without forcing vocal resonance.\"",
          "options": [
            "Ludovic Spiess a refuzat să cânte la Viena.",
            "Nicolae Herlea a fost un saxofonist de jazz.",
            "Opera din Cluj-Napoca s-a deschis în 2023.",
            "Timbrul de bronz de bariton al lui Herlea poseda o proiecție acustică extraordinară ce umplea vasta sală a Metropolitan Opera fără a forța rezonanța vocală."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Romanian vocal analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which heroic dramatic role in Verdi's *Aida* was one of Ludovic Spiess's greatest international triumphs at the Salzburg Festival under Herbert von Karajan?",
          "options": [
            "Manrico",
            "Don José",
            "Radamès",
            "Otello"
          ],
          "answerIndex": 2,
          "explanation": "Correct answer: \"Radamès\". This directly applies the principle of: The Dramatic Baritone & Transylvanian Voice: Nicolae Herlea and Ludovic Spiess (Nicolae Herlea - Regele Baritonilor la La Scala, Met și Bolșoi, Figaro în Bărbierul din Sevilla «Largo al factotum», Ludovic Spiess - marele tenor eroic Radamès și Calaf, Opera Română din Cluj-Napoca 1919)..",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Dramatic Baritone & Transylvanian Voice"
  },
  "ro-u27-l5": {
    "id": "ro-u27-l5",
    "unit": "ro-u27",
    "level": "C2",
    "objective": "C2 synthesis on Modern Vocal Titans of Romania: Leontina Vaduva, Ruxandra Donose and World Stages (Leontina Vaduva - laureată cu Laurence Olivier Award la Covent Garden, Ruxandra Donose - mezzosoprană la Royal Opera House și Glyndebourne, Festivalul Internațional George Enescu la Sala Palatului).",
    "presentation": {
      "explanation": "Contemporary Romanian vocal excellence on the world's premier operatic stages:\n- **Leontina Vaduva (1960–present - Roșiile, Vâlcea & Paris)**:\n  - Renowned lyric soprano; daughter of folk singer Maria Ciobanu; winner of the prestigious **Laurence Olivier Award for Outstanding Achievement in Opera** in London (1988) for her performance in Massenet's *Manon* at Covent Garden;\n  - Regular guest at Paris Opéra, Vienna State Opera, and San Francisco Opera (Micaëla in *Carmen*, Antonia in *Les Contes d'Hoffmann*, Mimì in *La Bohème*);\n- **Ruxandra Donose (1964–present - Bucharest & Vienna)**:\n  - Leading European mezzo-soprano; renowned for her dazzling Mozart, Rossini, and French roles (Charlotte in *Werther*, Dorabella in *Così fan tutte*, Carmen, Octavian in *Der Rosenkavalier*) at Glyndebourne, Royal Opera House, and Salzburg Festival;\n- **The George Enescu International Festival (Sala Palatului & Ateneul Român)**:\n  - Founded in 1958; bringing the world's top opera divas, tenors, and symphony orchestras to Bucharest every two years for monumental concert performances of Wagner and Strauss operas.",
      "examples": [
        {
          "target": "Leontina Vaduva și Ruxandra Donose continuă strălucirea internațională a vocilor românești la Covent Garden, Viena și în cadrul Festivalului George Enescu.",
          "reading": "Le-on-tee-na Va-doo-va shee Rook-san-dra...",
          "translation": "Leontina Vaduva and Ruxandra Donose continue the international brilliance of Romanian voices at Covent Garden, Vienna, and at the George Enescu Festival."
        }
      ],
      "mnemonics": [
        "Leontina Vaduva (Laurence Olivier Award winner at Covent Garden for Manon)! Ruxandra Donose (Premier European mezzo-soprano)! Festivalul Internațional George Enescu!"
      ],
      "culturalNotes": [
        "The acoustic heart of the Enescu Festival is the Romanian Athenaeum (*Ateneul Român*), renowned for its 75-meter circular historical fresco depicting 2,000 years of Romanian history."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Romanian soprano won London's prestigious Laurence Olivier Award for Outstanding Achievement in Opera for her performance in Massenet's \"Manon\" at Covent Garden?",
          "options": [
            "Leontina Vaduva (C2 synthesis on Modern Vocal Titans of Romania)",
            "Ruxandra Donose (C2 synthesis on Modern Vocal Titans of Romania)",
            "Anita Hartig (C2 synthesis on Modern Vocal Titans of Romania)",
            "Elena Moșuc (C2 synthesis on Modern Vocal Titans of Romania)"
          ],
          "answerIndex": 0,
          "explanation": "Leontina Vaduva."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which major Romanian international music festival, held biennially at Sala Palatului and the Romanian Athenaeum, is dedicated to George Enescu?",
          "options": [
            "Festivalul Darclée (C2 synthesis on Modern Vocal Titans of Romania)",
            "Festivalul Cerbul de Aur (C2 synthesis on Modern Vocal Titans of Romania)",
            "Festivalul Enescu-Lipatti (C2 synthesis on Modern Vocal Titans of Romania)",
            "Festivalul Internațional „George Enescu” (C2 synthesis on Modern Vocal Titans of Romania)"
          ],
          "answerIndex": 3,
          "explanation": "Festivalul Internațional „George Enescu”."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The George Enescu International Festival transforms Bucharest into a global classical music capital, staging complete unstaged and staged operatic masterworks with leading international philharmonics.\"",
          "options": [
            "Sala Palatului este un stadion de hochei pe gheață. (C2 synthesis on Modern Vocal Titans of Romania)",
            "Ateneul Român a fost construit în 2019. (C2 synthesis on Modern Vocal Titans of Romania)",
            "Festivalul Internațional George Enescu transformă Bucureștiul într-o capitală mondială a muzicii clasice, punând în scenă capodopere operistice complete cu mari filarmonici internaționale. (C2 synthesis on Modern Vocal Titans of Romania)",
            "Ruxandra Donose este o chitaristă de rock greu. (C2 synthesis on Modern Vocal Titans of Romania)"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Enescu Festival analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which neoclassical 1888 concert hall on Calea Victoriei in Bucharest, with its iconic circular rotunda and fresco, is the architectural symbol of Romanian high culture?",
          "options": [
            "Palatul Șuțu (C2 synthesis on Modern Vocal Titans of Romania)",
            "Ateneul Român (C2 synthesis on Modern Vocal Titans of Romania)",
            "Palatul Cantacuzino (C2 synthesis on Modern Vocal Titans of Romania)",
            "Muzeul Național de Artă (C2 synthesis on Modern Vocal Titans of Romania)"
          ],
          "answerIndex": 1,
          "explanation": "Ateneul Român (Romanian Athenaeum).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Modern Vocal Titans of Romania"
  },
  "ro-u28-l1": {
    "id": "ro-u28-l1",
    "unit": "ro-u28",
    "level": "C1",
    "objective": "The Wallachian Renaissance & Stone Flora: The Brâncovenesc Style (Stilul Brâncovenesc / Barocul românesc - domnitorul Constantin Brâncoveanu, Palatul Mogoșoaia 1702, Mănăstirea Hurezi - UNESCO, coloane torsadate din piatră sculptată cu motive vegetale, pridvorul deschis și foișorul).",
    "presentation": {
      "explanation": "The Brâncovenesc Style (Stilul Brâncovenesc / The Romanian Renaissance - late 17th to early 18th century):\n- **Historical Origins (Prince Constantin Brâncoveanu - 1688–1714)**:\n  - Created the distinct national architectural identity of Wallachia, synthesizing Byzantine imperial tradition, Ottoman oriental motifs, and Italian Venetian Renaissance/Late Baroque.\n- Monumental Masterpieces & Architectural Elements:\n  - **Palatul Mogoșoaia (Mogoșoaia Palace - 1702 - Ilfov)**:\n    - The crowning secular masterpiece; features an open monumental Venetian-style loggia (**Foișorul**) overlooking Lake Mogoșoaia;\n    - Intricately carved stone spiral columns (**coloane torsadate**), open loggias (*pridvor*), stone balustrades with openwork floral motifs (acanthus leaves, grapevines, pomegranates), and stucco ceilings;\n  - **Mănăstirea Hurezi (Horezu Monastery - 1690–1693 - Vâlcea, UNESCO World Heritage)**:\n    - The supreme monastic monument of the Brâncovenesc style; founded as the prince's family necropolis, renowned for its architectural harmony, fresco iconography, and open arcaded courtyard;\n  - **Biserica Stavropoleos (Bucharest - 1724)**: Masterpiece of miniature urban Brâncovenesc church architecture with rich arabesque stone carvings.",
      "examples": [
        {
          "target": "Stilul Brâncovenesc de la Palatul Mogoșoaia și Mănăstirea Hurezi a definit Renașterea românească prin foișoare deschise și coloane sculptate cu motive florale.",
          "reading": "Stee-lool Bran-ko-ve-nesk de la Pa-la-tool Mo-go-shway-ya...",
          "translation": "The Brancovenesc style at Mogosoaia Palace and Horezu Monastery defined the Romanian Renaissance through open loggias and stone columns carved with floral motifs."
        }
      ],
      "mnemonics": [
        "Stilul Brâncovenesc (Constantin Brâncoveanu & Romanian Renaissance)! Palatul Mogoșoaia 1702 (Venetian foișor over lake)! Mănăstirea Hurezi (UNESCO World Heritage)! Biserica Stavropoleos in Bucharest!"
      ],
      "culturalNotes": [
        "Prince Constantin Brâncoveanu and his four sons were martyred in Constantinople in August 1714 after refusing to renounce their Christian faith, canonized by the Romanian Orthodox Church in 1992."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 17th-18th century architectural style, named after a Wallachian prince, defined the Romanian Renaissance at Mogoșoaia Palace and Hurezi Monastery?",
          "options": [
            "Stilul Neoromânesc",
            "Stilul Gotic Transilvănean",
            "Stilul Baroc Vienez",
            "Stilul Brâncovenesc"
          ],
          "answerIndex": 3,
          "explanation": "Stilul Brâncovenesc."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What characteristic open-air architectural feature overlooking gardens or lakes defines Brâncovenesc residential palaces?",
          "options": [
            "Foișorul deschis / Loggia venețiană",
            "Turnul de veghe medieval",
            "Șanțul cu apă",
            "Domeniul subteran"
          ],
          "answerIndex": 0,
          "explanation": "Foișorul deschis / Loggia venețiană."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Brancovenesc style synthesizes Byzantine church layouts with Venetian Renaissance loggias and Ottoman floral stone carvings, establishing Romania's first national architectural identity.\"",
          "options": [
            "Palatul Mogoșoaia este o gară de trenuri de mare viteză.",
            "Stilul brâncovenesc sintetizează planurile bisericești bizantine cu loggiile renascentiste venețiene și sculptura florală otomană în piatră, stabilind prima identitate arhitecturală națională a României.",
            "Mănăstirea Hurezi este construită din sticlă și oțel modern.",
            "Constantin Brâncoveanu a trăit în secolul al XII-lea în Paris."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Brâncovenesc analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What monumental monastic complex in Vâlcea County, founded by Constantin Brâncoveanu, is inscribed as a UNESCO World Heritage site?",
          "options": [
            "Mănăstirea Hurezi",
            "Mănăstirea Voroneț",
            "Mănăstirea Putna",
            "Mănăstirea Curtea de Argeș"
          ],
          "answerIndex": 0,
          "explanation": "Mănăstirea Hurezi.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Wallachian Renaissance & Stone Flora"
  },
  "ro-u28-l2": {
    "id": "ro-u28-l2",
    "unit": "ro-u28",
    "level": "C1",
    "objective": "The Father of the Neo-Romanian Movement: Ion Mincu (Ion Mincu - Școala Națională de Arhitectură / UAUIM, Casa Lahovary 1886, Bufetul de la Șosea (Restaurantul Doina) pe Șoseaua Kiseleff, Școala Centrală de Fete, sinteza elementelor țărănești cu majolică și lemn sculptat).",
    "presentation": {
      "explanation": "Ion Mincu (1852–1912 - Focșani & Bucharest) and the creation of the Neo-Romanian architectural movement (Stilul Neoromânesc):\n- **Ion Mincu**:\n  - Architect, engineer, and professor; founder of the national school of architecture in Bucharest (**Universitatea de Arhitectură și Urbanism „Ion Mincu” - UAUIM**);\n  - Reclaimed Romanian architectural sovereignty against the overwhelming dominance of French Eclecticism (*Micul Paris*), creating a distinct modernist-nationalist visual language inspired by peasant vernacular architecture, fortified boyar towers (*cule*), and Brâncovenesc arches.\n- Landmark Masterpieces:\n  - **Casa Lahovary (1886 - Strada Ion Movilă, Bucharest)**:\n    - The **first building in history constructed in the Neo-Romanian style**;\n    - Incorporates an open wooden porch (*cerdac*), glazed polychrome ceramic discs (*majolică smălțuită*), and carved wooden eaves inspired by Oltenian peasant houses;\n  - **Bufetul de la Șosea / Restaurantul Doina (1892 - Șoseaua Kiseleff)**:\n    - Designed as the Romanian Pavilion for the 1889 Paris Universal Exposition; monumental wooden pillars, open arcaded loggia, and rich glazed enamel friezes with national emblems;\n  - **Școala Centrală de Fete (Central School for Girls - 1890 - Strada Icoanei)**: Inner cloistered courtyard surrounded by arcaded galleries with blue-green ceramic medallions.",
      "examples": [
        {
          "target": "Ion Mincu a fondat stilul neoromânesc la Casa Lahovary și Bufetul de la Șosea, dând numele Universității de Arhitectură și Urbanism din București.",
          "reading": "Yon Meen-koo a fon-dat stee-lool ne-o-ro-ma-nesk...",
          "translation": "Ion Mincu founded the Neo-Romanian style at Casa Lahovary and Bufetul de la Sosea, giving his name to the University of Architecture and Urbanism in Bucharest."
        }
      ],
      "mnemonics": [
        "Ion Mincu (Father of Neo-Romanian Style & UAUIM)! Casa Lahovary 1886 (First Neo-Romanian building)! Bufetul de la Șosea on Kiseleff! Școala Centrală de Fete! Glazed ceramic majolica & wood cerdac!"
      ],
      "culturalNotes": [
        "The University of Architecture and Urbanism \"Ion Mincu\" (UAUIM) in Bucharest, facing University Square, is the premier training institution for Romanian architects, celebrating Mincu's legacy."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master architect founded the Neo-Romanian architectural movement with Casa Lahovary (1886) and Bufetul de la Șosea?",
          "options": [
            "Ion Mincu",
            "Horia Creangă",
            "Duiliu Marcu",
            "Petre Antonescu"
          ],
          "answerIndex": 0,
          "explanation": "Ion Mincu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What premier Romanian university of architecture in Bucharest is named in honor of Ion Mincu?",
          "options": [
            "Universitatea de Arhitectură și Urbanism „Ion Mincu”",
            "Universitatea Politehnica",
            "UNARTE",
            "Universitatea din București"
          ],
          "answerIndex": 0,
          "explanation": "Universitatea de Arhitectură și Urbanism „Ion Mincu”."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Mincu's Neo-Romanian style integrated traditional boyar fortified tower elements and Oltenian carved timber porches into modern urban civic villas.\"",
          "options": [
            "Stilul neoromânesc al lui Mincu a integrat elemente tradiționale de culă boierească și cerdacuri oltenești din lemn sculptat în vile civice urbane moderne.",
            "Ion Mincu a proiectat exclusiv zgârie-nori de oțel în Chicago.",
            "Casa Lahovary a fost construită în secolul al XV-lea.",
            "Bufetul de la Șosea este o uzină hidroelectrică."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Ion Mincu analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic 1892 building on Șoseaua Kiseleff in Bucharest, featuring open arcaded timber loggias, was originally designed by Mincu for the Paris Exposition?",
          "options": [
            "Arcul de Triumf",
            "Muzeul Țăranului Român",
            "Palatul Victoria",
            "Bufetul de la Șosea"
          ],
          "answerIndex": 3,
          "explanation": "Bufetul de la Șosea.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Father of the Neo-Romanian Movement"
  },
  "ro-u28-l3": {
    "id": "ro-u28-l3",
    "unit": "ro-u28",
    "level": "C1",
    "objective": "The Colossus of Concrete & Marble: The Palace of the Parliament (Palatul Parlamentului / Casa Poporului din București - arhitect șef Anca Petrescu, a doua cea mai mare clădire administrativă din lume, marmură de Rușchița, cristal de Mediaș și lemn masiv de nuc și stejar, axa Bulevardului Unirii).",
    "presentation": {
      "explanation": "The Palace of the Parliament (Palatul Parlamentului / Casa Poporului - 1984–1997 - Dealul Arsenalului, Bucharest):\n- **Historical Scale & Megastructure Engineering**:\n  - Commissioned under the regime of Nicolae Ceaușescu; Chief Architect **Anca Petrescu** leading a team of 700 architects and 20,000 workers;\n  - **The 2nd Largest Administrative Building on Earth** (after the US Pentagon) and the **heaviest building in the world** ($4.10 \\times 10^9$ kilograms);\n  - Dimensions: 365,000 $m^2$ floor area, 270 meters long, 240 meters wide, 84 meters high above ground, and 92 meters deep underground across 8 subterranean levels (including an anti-atomic nuclear fallout shelter);\n- Authentic 100% Romanian Building Materials:\n  - Built exclusively using raw materials sourced entirely from Romania: **1 million $m^3$ of white and pink Rușchița marble (Marmură de Rușchița)**, 3,500 tons of Mediaș crystal chandeliers, 700,000 tons of steel and bronze, 900,000 $m^3$ of solid walnut and oak woodwork, and hand-woven silk curtains;\n- Urban Transformation: Centered on the 3.5-kilometer **Bulevardul Unirii** (originally *Bulevardul Victoria Socialismului*), designed to be 6 meters wider than the Champs-Élysées in Paris.",
      "examples": [
        {
          "target": "Palatul Parlamentului din București, proiectat de Anca Petrescu, este cea mai grea clădire din lume și a doua ca suprafață administrativă, realizată exclusiv cu materiale românești.",
          "reading": "Pa-la-tool Par-la-men-too-looy deen Boo-koo-resht...",
          "translation": "The Palace of the Parliament in Bucharest, designed by Anca Petrescu, is the heaviest building in the world and the second largest administratively, made exclusively from Romanian materials."
        }
      ],
      "mnemonics": [
        "Palatul Parlamentului / Casa Poporului 1984 (Chief Architect Anca Petrescu)! 2nd largest administrative building & Heaviest building on Earth (4.1 billion kg)! 100% Romanian Rușchița marble & Mediaș crystal! Bulevardul Unirii!"
      ],
      "culturalNotes": [
        "Over 1 million cubic meters of Rușchița marble from the Poiana Ruscă Mountains were quarried over ten years to pave the grand staircases and monumental halls of the Palace."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which monumental Bucharest structure, designed by Anca Petrescu, is the second largest administrative building in the world and the heaviest building on Earth?",
          "options": [
            "Palatul Parlamentului",
            "Palatul Regal",
            "Palatul Victoria",
            "Palatul Cotroceni"
          ],
          "answerIndex": 0,
          "explanation": "Palatul Parlamentului (Casa Poporului)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous domestic pink and white marble from Caraș-Severin County was quarried in massive volumes for the Palace of the Parliament?",
          "options": [
            "Marmura de Rușchița",
            "Granitul de Măcin",
            "Calcarul de Vrața",
            "Marmura de Carrara"
          ],
          "answerIndex": 0,
          "explanation": "Marmura de Rușchița."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Palace of the Parliament contains three hundred and sixty-five thousand square meters of floor space constructed exclusively with domestic Romanian marble, crystal, and solid hardwoods.\"",
          "options": [
            "Palatul Parlamentului este o colibă de lemn pe malul mării.",
            "Anca Petrescu a fost o pictoriță franceză renascentistă.",
            "Bulevardul Unirii este o pistă de aterizare pentru rachete spațiale.",
            "Palatul Parlamentului conține trei sute șaizeci și cinci de mii de metri pătrați de suprafață construiți exclusiv cu marmură, cristal și lemn masiv de esență tare autohton românesc."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Palace of Parliament engineering analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who served as the Chief Architect leading the team of 700 architects who designed the Palace of the Parliament in Bucharest from 1984 onward?",
          "options": [
            "Ion Mincu",
            "Horia Creangă",
            "Anca Petrescu",
            "Cezar Lăzărescu"
          ],
          "answerIndex": 2,
          "explanation": "Anca Petrescu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Colossus of Concrete & Marble"
  },
  "ro-u28-l4": {
    "id": "ro-u28-l4",
    "unit": "ro-u28",
    "level": "C2",
    "objective": "Interwar Modernism & The Master of Functionalist Purity: Horia Creangă (Horia Creangă - nepotul scriitorului Ion Creangă, pionierul modernismului românesc, Clădirea ARO / Cinema Patria 1931 pe Bulevardul Magheru - primul mare bloc modernist din București, Uzinele Malaxa, vila dr. Petru Groza).",
    "presentation": {
      "explanation": "Horia Creangă (1892–1943 - Bucharest) and the modernist revolution in interwar Romania:\n- **Horia Creangă**:\n  - The grandson of legendary storyteller Ion Creangă; studied at the École des Beaux-Arts in Paris;\n  - The undisputed pioneer of modernist functionalism in Romania, transforming Bucharest during the 1930s into the most modern architectural capital of Eastern Europe alongside Tel Aviv and Berlin.\n- Monumental Masterpieces:\n  - **Clădirea ARO (Asigurarea Românească / Later Cinema Patria - 1929–1931 - Bulevardul Magheru)**:\n    - The **first major modernist multi-story commercial and residential megastructure in Bucharest**;\n    - Strict horizontal ribbon windows (*ferestre în bandă continuă*), cantilevered balconies, smooth white unadorned surfaces, and an integrated 1,200-seat cinema auditorium;\n    - Set the architectural tone for the entire modernist corridor of Bulevardul Magheru;\n  - **Uzinele Malaxa / Uzinele 23 August (1930–1936)**: Monumental industrial campus for industrialist Nicolae Malaxa (pipe rolling mills and locomotive workshops), praised internationally for its clean glass-and-steel industrial geometry;\n  - **Vila Bunescu** & **Vila Dr. Petru Groza (Deva)**.",
      "examples": [
        {
          "target": "Horia Creangă a revoluționat Bucureștiul interbelic cu Blocul ARO de pe Bulevardul Magheru, inaugurând epoca modernismului funcționalist pur.",
          "reading": "Ho-rya Kre-an-ga a re-vo-loo-tsyo-nat...",
          "translation": "Horia Creanga revolutionized interwar Bucharest with the ARO Building on Magheru Boulevard, inaugurating the era of pure functionalist modernism."
        }
      ],
      "mnemonics": [
        "Horia Creangă (Grandson of Ion Creangă & Father of Romanian Modernism)! Clădirea ARO 1931 on Bulevardul Magheru (Cinema Patria)! Uzinele Malaxa industrial campus! Horizontal ribbon windows & pure white geometry!"
      ],
      "culturalNotes": [
        "Thanks to Horia Creangă and his modernist peers (Marcel Janco, Duiliu Marcu), Bucharest was recognized in the 1930s as having the densest concentration of modernist Art Deco and Functionalist apartment buildings in Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian architect designed the landmark modernist ARO Building (Cinema Patria) on Bulevardul Magheru in 1931?",
          "options": [
            "Marcel Janco",
            "Duiliu Marcu",
            "Horia Creangă",
            "Ion Mincu"
          ],
          "answerIndex": 2,
          "explanation": "Horia Creangă."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which famous 19th-century Romanian literary storyteller was the grandfather of architect Horia Creangă?",
          "options": [
            "Ion Luca Caragiale",
            "Ion Creangă",
            "Vasile Alecsandri",
            "Mihai Eminescu"
          ],
          "answerIndex": 1,
          "explanation": "Ion Creangă."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The ARO Building by Horia Creanga established a radical functionalist language on Magheru Boulevard, featuring continuous horizontal fenestration and clean cantilevered balconies.\"",
          "options": [
            "Blocul ARO a fost construit din chirpici și paie.",
            "Uzinele Malaxa erau mori de vânt medievale.",
            "Clădirea ARO a lui Horia Creangă a stabilit un limbaj funcționalist radical pe Bulevardul Magheru, prezentând ferestre orizontale continue și balcoane curate în consolă.",
            "Horia Creangă a fost un pictor baroc din secolul al XVII-lea."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Horia Creangă analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What grand industrial manufacturing complex in Bucharest, designed by Horia Creangă for industrialist Nicolae Malaxa, is celebrated for its modernist industrial aesthetics?",
          "options": [
            "Rafinăria Ploiești",
            "Uzinele Malaxa",
            "Uzina Dacia Pitești",
            "Combinatul Siderurgic Galați"
          ],
          "answerIndex": 1,
          "explanation": "Uzinele Malaxa.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Interwar Modernism & The Master of Functionalist Purity"
  },
  "ro-u28-l5": {
    "id": "ro-u28-l5",
    "unit": "ro-u28",
    "level": "C2",
    "objective": "C2 synthesis on Transylvanian Fortified Churches & The Wooden Cathedrals of Maramureș: UNESCO Sacred Heritage (Bisericile fortificate săsești din Transilvania - Biertan, Viscri și Sighișoara, Bisericile de lemn din Maramureș - Bârsana și Ieud cu turle ascuțite din stejar și îmbinări fără cuie de fier, patrimoniu UNESCO).",
    "presentation": {
      "explanation": "The sacred vernacular architectural masterpieces of Transylvania and Maramureș:\n- **The Saxon Fortified Churches of Transylvania (Bisericile fortificate săsești - UNESCO World Heritage)**:\n  - Built between the 13th and 16th centuries by Transylvanian Saxon communities (*Sași*) to defend against Ottoman and Tatar invasions;\n  - **Biertan Fortified Church (Biserica fortificată din Biertan)**: Triple concentric defensive walls, 6 towers, and the famous **1515 Multi-Lock Sacristy Door (Ușa sacristiei cu 19 zăvoare)** operated by a single central key, which won first prize at the 1900 Paris World's Fair;\n  - **Viscri (Biserica albă din Viscri)**: Romantic 12th-century Romanesque chapel surrounded by 16th-century bastions, championed globally by King Charles III.\n- **The Wooden Churches of Maramureș (Bisericile de lemn din Maramureș - UNESCO World Heritage)**:\n  - Soaring, needle-like wooden Gothic cathedrals built entirely of aged oak timber without a single iron nail (*îmbinări din lemn în coadă de rândunică*);\n  - **Mănăstirea Bârsana & Biserica din Ieud (1364)**: Double-eaved roofs covered in wooden shingles (*draniță* / *șiță*), rising up to 78 meters into the clouds (Mănăstirea Săpânța-Peri is the tallest wooden church in Europe).",
      "examples": [
        {
          "target": "Bisericile fortificate din Transilvania la Biertan și Viscri și bisericile de lemn din Maramureș cu turle vertiginoase fără cuie de fier reprezintă patrimoniul sacru UNESCO al României.",
          "reading": "Bee-se-ree-shee-le for-tee-fee-ka-te...",
          "translation": "The fortified churches of Transylvania at Biertan and Viscri and the wooden churches of Maramures with dizzying spires without iron nails represent Romania's sacred UNESCO heritage."
        }
      ],
      "mnemonics": [
        "Biertan (Transylvanian Saxon fortified church with 19-bolt sacristy door)! Viscri (UNESCO church supported by King Charles III)! Bisericile de lemn din Maramureș (Bârsana & Ieud)! Zero iron nails & wooden shingles! Săpânța-Peri (Tallest wooden church in Europe)!"
      ],
      "culturalNotes": [
        "The marital reconciliation room (*Închisoarea matrimonială*) inside the Biertan fortified church forced quarreling couples to share a single room, a single bed, and a single fork/spoon for two weeks before a divorce was granted; over 300 years, only one couple ever completed a divorce."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which famous Transylvanian Saxon fortified church features a 1515 sacristy door with nineteen mechanical locks that won first prize at the 1900 Paris Exposition?",
          "options": [
            "Biserica fortificată din Biertan (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica Neagră din Brașov (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica din Prejmer (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica din Viscri (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)"
          ],
          "answerIndex": 0,
          "explanation": "Biserica fortificată din Biertan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional joinery method allowed master craftsmen in Maramureș to construct soaring wooden church spires without using metal nails?",
          "options": [
            "Sudură cu laser (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Ciment armat (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Șuruburi industriale de titan (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Îmbinări din lemn în coadă de rândunică și cuie de lemn (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)"
          ],
          "answerIndex": 3,
          "explanation": "Îmbinări din lemn în coadă de rândunică."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The UNESCO wooden churches of Maramures feature double-eaved shingle roofs and soaring oak timber spires that merge gothic verticality with ancient peasant carpentry.\"",
          "options": [
            "Bisericile de lemn din Maramureș sunt vopsite cu vopsea fluorescentă. (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Bisericile de lemn UNESCO din Maramureș prezintă acoperișuri cu poală dublă din șindrilă și turle vertiginoase din stejar care unesc verticalitatea gotică cu tâmplăria țărănească arhaică. (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica din Biertan este o piramidă de sticlă modernă. (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Viscri a fost fondat în anul 2015. (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)"
          ],
          "answerIndex": 1,
          "explanation": "Accurate Transylvanian and Maramureș vernacular analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which historic 14th-century wooden church in Maramureș, constructed of dense fir and oak beams, is widely considered the oldest surviving wooden church in the region?",
          "options": [
            "Biserica de lemn din Ieud Deal (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica din Surdești (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica din Desești (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)",
            "Biserica din Plopiș (C2 synthesis on Transylvanian Fortified Churches  The Wooden Cathedrals of Maramure)"
          ],
          "answerIndex": 0,
          "explanation": "Biserica de lemn din Ieud Deal.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 28, Lesson 5: Bisericile fortificate din Tra"
  },
  "ro-u29-l1": {
    "id": "ro-u29-l1",
    "unit": "ro-u29",
    "level": "C1",
    "objective": "Lucid Despair & The Metaphysics of Insomnia: Emil Cioran (Emil Cioran - Pe culmile disperării 1934, Tratat de descompunere 1949, insomnia cronică și sfâșierea conștiinței, aforismul ca armă metafizică, de la Rășinari la mansarda din Cartierul Latin din Paris).",
    "presentation": {
      "explanation": "Emil Cioran (1911–1995 - Rășinari, Sibiu & Paris) and the philosophy of tragic lucidity and metaphysical despair:\n- **Emil Cioran**:\n  - One of the greatest stylists in the history of French and Romanian prose; lived as an ascetic recluse in a tiny attic in the Latin Quarter of Paris (Rue de l'Odéon); refused all prestigious literary awards (Prix Sainte-Beuve, Grand Prix de Littérature Paul Morand).\n- The Foundations of Existential Lucidity:\n  - **Pe culmile disperării (On the Heights of Despair - 1934 - Written at age 22 in Sibiu)**:\n    - Born from severe chronic insomnia that stripped away all comfortable social illusions;\n    - Proclaims that true philosophy is born not from abstract academic systems, but from visceral agony (*sfâșiere interioară*), fever, and existential sleeplessness;\n  - **The Aphoristic Mastery & The French Treatises**:\n    - **Trécis de décomposition (A Short History of Decay - 1949)** & **De l'inconvénient d'être né (The Trouble with Being Born - 1973)**;\n    - Transformed radical skepticism and the realization of cosmic nothingness into an invigorating, liberating celebration of human survival (*\"A book is a suicide postponed\"*).",
      "examples": [
        {
          "target": "Emil Cioran a transformat insomnia și sfâșierea metafizică într-o capodoperă a lucidității în «Pe culmile disperării» și tratatele sale pariziene.",
          "reading": "E-meel Cho-ran a trans-for-mat...",
          "translation": "Emil Cioran transformed insomnia and metaphysical torment into a masterpiece of lucidity in \"On the Heights of Despair\" and his Parisian treatises."
        }
      ],
      "mnemonics": [
        "Emil Cioran (Rășinari master & Latin Quarter recluse in Paris)! Pe culmile disperării 1934! Chronic insomnia as philosophical awakening! Tratat de descompunere 1949! Aphorisms as metaphysical weapons!"
      ],
      "culturalNotes": [
        "Cioran cycled across the entire countryside of France during the late 1930s, sleeping in haystacks and youth hostels while memorizing French dictionaries to master his second language."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian-French philosopher wrote \"On the Heights of Despair\" (1934) and \"A Short History of Decay\" (1949)?",
          "options": [
            "Mircea Eliade",
            "Constantin Noica",
            "Eugen Ionescu",
            "Emil Cioran"
          ],
          "answerIndex": 3,
          "explanation": "Emil Cioran."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What severe physiological condition, experienced by Cioran in his youth in Sibiu, triggered his profound existential lucidity and writing?",
          "options": [
            "Insomnia cronică",
            "Orbirea temporară",
            "Febra tifoidă",
            "Amnazia"
          ],
          "answerIndex": 0,
          "explanation": "Insomnia cronică (Chronic insomnia)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Cioran articulated that radical existential lucidity, born from relentless insomnia, dismantles ideological illusions and elevates the aphorism into a metaphysical scalpel.\"",
          "options": [
            "Cioran a articulat că luciditatea existențială radicală, născută din insomnia neîncetată, demontează iluziile ideologice și ridică aforismul la rangul de bisturiu metafizic.",
            "Emil Cioran a fost un astronom francez din secolul al XVIII-lea.",
            "Cioran a primit cu entuziasm toate premiile academice oficiale.",
            "Pe culmile disperării este un manual de agricultură montană."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Cioran analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which Transylvanian village near Sibiu was Emil Cioran born and raised, a landscape he remembered with intense nostalgia throughout his Parisian life?",
          "options": [
            "Biertan",
            "Sighișoara",
            "Făgăraș",
            "Rășinari"
          ],
          "answerIndex": 3,
          "explanation": "Rășinari (Județul Sibiu).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Lucid Despair & The Metaphysics of Insomnia"
  },
  "ro-u29-l2": {
    "id": "ro-u29-l2",
    "unit": "ro-u29",
    "level": "C1",
    "objective": "The Sacred, The Profane & The Myth of the Eternal Return: Mircea Eliade (Mircea Eliade - Tratat de istorie a religiilor 1949, Mitul eternei reîntoarceri, Sacrul și profanul, noțiunea de hierofanie și Homo Religiosus, Catedra Sewell Avery la Universitatea din Chicago).",
    "presentation": {
      "explanation": "Mircea Eliade (1907–1986 - Bucharest, Calcutta & Paris/Chicago) and the global revolution in the History of Religions and Philosophical Hermeneutics:\n- **Mircea Eliade**:\n  - Polymath, novelist, and philosopher of religion; studied Sanskrit and Indian philosophy in Calcutta and Rishikesh under Surendranath Dasgupta (1928–1931); held the Sewell L. Avery Distinguished Professorship at the **University of Chicago** (The Chicago School of History of Religions).\n- Monumental Metaphysical Treatises & Concepts:\n  - **The Hierophany (Hierofania)**: The central breakthrough: The Sacred (*Sacrul*) manifests itself through ordinary physical objects (*Profanul*)—a sacred stone, a sacred tree, or a sacred mountain (*Axis Mundi*)—without ceasing to be an ordinary physical object;\n  - **Mitul eternei reîntoarceri (The Myth of the Eternal Return - 1949)**:\n    - Archaic human beings (*Homo Religiosus*) reject the meaningless terror of linear historical time (*teroarea istoriei*), regularly regenerating cosmic time through periodic ritual reenactments of the primordial divine creation (*In Illo Tempore*);\n  - **Tratat de istorie a religiilor (Patterns in Comparative Religion - 1949)** & **Sacrul și profanul (1957)**;\n  - **Literary Masterpieces**: *Maitreyi* (1933), *Noaptea de Sânziene*, and *La țigănci*.",
      "examples": [
        {
          "target": "Mircea Eliade a fundamentat istoria comparată a religiilor prin conceptele de hierofanie, Homo Religiosus și Mitul eternei reîntoarceri.",
          "reading": "Meer-chya E-lya-de a foon-da-men-tat...",
          "translation": "Mircea Eliade founded comparative history of religions through the concepts of hierophany, Homo Religiosus, and The Myth of the Eternal Return."
        }
      ],
      "mnemonics": [
        "Mircea Eliade (Bucharest-Chicago Religion Titan)! Hierofania (Sacred manifesting through the profane)! Mitul eternei reîntoarceri 1949 (In Illo Tempore vs Teroarea istoriei)! Homo Religiosus! University of Chicago chair!"
      ],
      "culturalNotes": [
        "The Department of the History of Religions at the University of Chicago named its endowed chair the *Mircea Eliade Professorship of the History of Religions* in his perpetual honor."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian scholar of religions founded modern comparative religious hermeneutics at the University of Chicago, authoring \"The Myth of the Eternal Return\"?",
          "options": [
            "Mircea Eliade (The Sacred)",
            "Ioan Petru Culianu (The Sacred)",
            "Vasile Pârvan (The Sacred)",
            "Constantin Noica (The Sacred)"
          ],
          "answerIndex": 0,
          "explanation": "Mircea Eliade."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What Greek-derived term was coined and popularized by Mircea Eliade to describe any physical manifestation of the Sacred within the profane world?",
          "options": [
            "Hierofania (The Sacred)",
            "Teofania (The Sacred)",
            "Anamneza (The Sacred)",
            "Epifania (The Sacred)"
          ],
          "answerIndex": 0,
          "explanation": "Hierofania (Hierophany)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Eliade established that Homo Religiosus periodically abolishes historical anxiety by ritually reactivating the primordial sacred time of cosmic origins (In Illo Tempore).\"",
          "options": [
            "Eliade a negat importanța simbolurilor religioase. (The Sacred)",
            "Mircea Eliade a fost un explorator polar în Antarctica. (The Sacred)",
            "Mitul eternei reîntoarceri este un manual de navigație maritimă. (The Sacred)",
            "Eliade a stabilit că Homo Religiosus anulează periodic anxietatea istorică prin reactivarea ritualică a timpului sacru primordial al originilor cosmice (In Illo Tempore)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Eliade analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which Indian city did Mircea Eliade study Sanskrit philosophy and Yogic metaphysics under Professor Surendranath Dasgupta between 1928 and 1931?",
          "options": [
            "Mumbai (The Sacred)",
            "New Delhi (The Sacred)",
            "Calcutta (The Sacred)",
            "Chennai (The Sacred)"
          ],
          "answerIndex": 2,
          "explanation": "Calcutta (Kolkata).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sacred, The Profane & The Myth of the Eternal Return"
  },
  "ro-u29-l3": {
    "id": "ro-u29-l3",
    "unit": "ro-u29",
    "level": "C1",
    "objective": "Becoming into Being & The School of Păltiniș: Constantin Noica (Constantin Noica - Devenirea întru ființă 1981, Sentimentul românesc al ființei, Școala de la Păltiniș în Munții Cindrel, cele șase maladii ale spiritului contemporan: catholita, todetita, horetita).",
    "presentation": {
      "explanation": "Constantin Noica (1909–1987 - Vitănești, Teleorman & Păltiniș, Sibiu) and the creation of an original Romanian ontological system:\n- **Constantin Noica**:\n  - Philosopher, essayist, and Hellenist; endured six years of communist political imprisonment (1958–1964) and house arrest before establishing the legendary **Școala de la Păltiniș** (The Păltiniș School) in a rustic mountain cottage in the Cindrel Mountains, mentoring a brilliant generation of thinkers (Gabriel Liiceanu, Andrei Pleșu).\n- Monumental Ontological System & Masterpieces:\n  - **Devenirea întru ființă (Becoming into Being - 1981)**:\n    - Overcomes the ancient Parmenidean division between static Being and chaotic Becoming; proposes that Being is not frozen, but a structured process of *becoming into being* guided by ontological models;\n  - **Sentimentul românesc al ființei (The Romanian Sentiment of Being - 1978)**:\n    - Philosophical analysis of Romanian grammar and untranslatable folk prepositions: **«întru»** (not simply \"in\", but *oriented toward / within the horizon of*), **«dor»** (metaphysical longing), and **«rost»** (existential purpose / articulate order);\n  - **Six Maladies of the Contemporary Spirit (Șase maladii ale spiritului contemporan)**: Diagnosing modern spiritual pathology (e.g., *Catholita* - lack of universal orientation; *Todetita* - lack of individual grounding).",
      "examples": [
        {
          "target": "Constantin Noica a creat la Păltiniș o ontologie a «Devenirii întru ființă» și a descifrat rostul existenței în «Sentimentul românesc al ființei».",
          "reading": "Kon-stan-teen Noy-ka a kre-at la Pal-tee-neesh...",
          "translation": "Constantin Noica created an ontology of \"Becoming into Being\" at Paltinis and deciphered the purpose of existence in \"The Romanian Sentiment of Being.\""
        }
      ],
      "mnemonics": [
        "Constantin Noica (Titan of Păltiniș in Cindrel Mountains)! Devenirea întru ființă 1981! Sentimentul românesc al ființei (The prepositions «întru», «dor», «rost»)! Six maladies of the spirit! Mentored Liiceanu & Pleșu!"
      ],
      "culturalNotes": [
        "The rustic cottage at Păltiniș where Noica lived with his wood-burning stove and translated Plato and Hegel is today preserved as a place of philosophical pilgrimage."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian philosopher established the philosophical seminar at Păltiniș and authored \"Becoming into Being\" (1981)?",
          "options": [
            "Constantin Noica",
            "Lucian Blaga",
            "Petre Țuțea",
            "Anton Dumitriu"
          ],
          "answerIndex": 0,
          "explanation": "Constantin Noica."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What archaic Romanian preposition, meaning dynamic movement and orientation toward Being, was metaphysically analyzed by Noica in \"Sentimentul românesc al ființei\"?",
          "options": [
            "Întru",
            "Către",
            "Fără",
            "Despre"
          ],
          "answerIndex": 0,
          "explanation": "Întru (Toward / Into Being)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Noica's ontology demonstrates that Becoming is not the chaotic opposite of Being, but the structured dynamic teleological realization of Being itself (Becoming into Being).\"",
          "options": [
            "Constantin Noica a fost un pilot de aviație civilă.",
            "Școala de la Păltiniș era o bază de antrenament olimpic.",
            "Ontologia lui Noica demonstrează că Devenirea nu este opusul haotic al Ființei, ci realizarea teleologică dinamică și structurată a Ființei însăși",
            "Sentimentul românesc al ființei este o culegere de rețete culinare."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Noica analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which high-altitude mountain resort in the Cindrel Mountains near Sibiu did Constantin Noica run his famous philosophical retreat during the 1970s and 1980s?",
          "options": [
            "Sinaia",
            "Păltiniș",
            "Poiana Brașov",
            "Predeal"
          ],
          "answerIndex": 1,
          "explanation": "Correct answer: \"Păltiniș\". This directly applies the principle of: Becoming into Being & The School of Păltiniș: Constantin Noica (Constantin Noica - Devenirea întru ființă 1981, Sentimentul românesc al ființei, Școala de la Păltiniș în Munții Cindrel, cele șase maladii ale spiritului contemporan: catholita, todetita, horetita)..",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Becoming into Being & The School of Păltiniș"
  },
  "ro-u29-l4": {
    "id": "ro-u29-l4",
    "unit": "ro-u29",
    "level": "C2",
    "objective": "The Mioritic Space & Transcendent Censorship: Lucian Blaga (Lucian Blaga - Trilogia culturii 1944: Spațiul mioritic (alternanța ondulată deal-vale), Marele Anonim și cenzura transcendentă, cunoașterea paradisiacă și luciferică, stilul ca matrice stilistică a culturilor).",
    "presentation": {
      "explanation": "Lucian Blaga (1895–1961 - Lancrăm, Alba & Cluj-Napoca) and the philosophy of the Mioritic Space and Cultural Matrices:\n- **Lucian Blaga**:\n  - Poet, playwright, diplomat, and philosopher; Professor of Philosophy of Culture at the University of Cluj; nominated for the Nobel Prize in Literature (1956).\n- The Monumental Philosophical Trilogy: **Trilogia culturii (The Trilogy of Culture - 1944)**:\n  - **The Mioritic Space (Spațiul mioritic - 1936)**:\n    - The unconscious spatial matrix (*matrice stilistică*) that shapes Romanian soul and culture;\n    - Defined not as flat infinity (the Russian steppe) or monumental verticality (the Western Gothic mountain), but as an **undulating rhythm of hill and valley (alternanța ritmică deal-vale)**, reflecting the tragic serenity, gentle melancholy, and transcendent hope of the folk ballad *Miorița*;\n  - **The Great Anonymous & Transcendent Censorship (Marele Anonim și Cenzura transcendentă)**:\n    - The ultimate metaphysical mystery (*Marele Anonim*) protects cosmic equilibrium by placing a \"transcendent censorship\" on human reason, preventing direct cognitive possession of absolute mystery;\n  - **Two Modes of Knowing (Trilogia cunoașterii)**:\n    - **1. Cunoașterea paradisiacă (Paradisiac Knowing)**: Everyday rational categorization that solves problems and diminishes mystery;\n    - **2. Cunoașterea luciferică (Luciferic Knowing)**: Poetic, philosophical intuition that splits open the mystery to reveal its boundless interior depths.",
      "examples": [
        {
          "target": "Lucian Blaga a definit sufletul culturii românești în «Spațiul mioritic» prin alternanța ondulată deal-vale și misterul cunoașterii luciferice.",
          "reading": "Loo-chan Bla-ga a de-fee-neet...",
          "translation": "Lucian Blaga defined the soul of Romanian culture in \"The Mioritic Space\" through the undulating hill-valley alternation and the mystery of luciferic knowing."
        }
      ],
      "mnemonics": [
        "Lucian Blaga (Lancrăm poet-philosopher & Cluj Professor)! Trilogia culturii 1944! Spațiul mioritic (Undulating hill-valley rhythm deal-vale)! Marele Anonim & Cenzura transcendentă! Cunoașterea luciferică splitting open mystery!"
      ],
      "culturalNotes": [
        "Blaga composed the immortal poetic opening of his philosophical career: *«Eu nu strivesc corola de minuni a lumii / și nu ucid cu mintea tainele, ce le-ntâlnesc în calea mea...»* (*\"I do not crush the world's corolla of wonders / and with my mind I do not kill the mysteries I meet upon my path...\"*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian poet-philosopher formulated the concept of \"The Mioritic Space\" (Spațiul mioritic) in his Trilogy of Culture (1944)?",
          "options": [
            "Mircea Vulcănescu",
            "Emil Cioran",
            "Lucian Blaga",
            "Constantin Noica"
          ],
          "answerIndex": 2,
          "explanation": "Lucian Blaga."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What spatial topographical rhythm was identified by Lucian Blaga as the unconscious stylistic matrix of the Romanian soul in \"Spațiul mioritic\"?",
          "options": [
            "Deșertul arid",
            "Muntele vertical gotic",
            "Alternanța ritmică deal-vale",
            "Stepa nesfârșită"
          ],
          "answerIndex": 2,
          "explanation": "Alternanța ritmică deal-vale."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Blaga distinguished luciferic knowing from paradisiac knowing, asserting that poetic intuition does not extinguish the cosmic mystery, but amplifies its infinite depth.\"",
          "options": [
            "Trilogia culturii este un ghid turistic pentru Munții Carpați.",
            "Blaga a distins cunoașterea luciferică de cea paradisiacă, afirmând că intuiția poetică nu stinge misterul cosmic, ci îi amplifică adâncimea infinită.",
            "Spațiul mioritic susține că munții sunt făcuți din oțel.",
            "Lucian Blaga a fost un general roman din antichitate."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Blaga analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What ultimate metaphysical source in Blaga's metaphysics imposes \"transcendent censorship\" to preserve the generative mystery of the cosmos?",
          "options": [
            "Marele Anonim",
            "Destinul orb",
            "Vidul cuantic",
            "Marele Arhitect"
          ],
          "answerIndex": 0,
          "explanation": "Marele Anonim.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Mioritic Space & Transcendent Censorship"
  },
  "ro-u29-l5": {
    "id": "ro-u29-l5",
    "unit": "ro-u29",
    "level": "C2",
    "objective": "C2 synthesis on The Socratic Christian Resistance & The Drama of Faith: Petre Țuțea (Petre Țuțea - «Socratele român», 13 ani de temniță politică la Aiud și Ocnele Mari, Omul - tratat de antropologie creștină, Tratat de economie creștină, dialogul socratic oral și biruința credinței asupra suferinței).",
    "presentation": {
      "explanation": "Petre Țuțea (1902–1991 - Boteni, Muscel & Bucharest) and the summit of oral Christian Socratic philosophy:\n- **Petre Țuțea (Socratele Român / The Romanian Socrates)**:\n  - Jurist, economist, and Christian existentialist philosopher; Director in the Ministry of National Economy; spent **13 brutal years in communist political prisons (Aiud, Ocnele Mari)** for his unwavering Christian faith and intellectual independence;\n  - Like Socrates, wrote very little during his captivity, choosing instead the **living oral dialogue (dialogul socratic viu)** that transformed fellow prisoners and thousands of visitors into deep seekers of truth.\n- Monumental Philosophical Works & Core Principles:\n  - **«Omul - tratat de antropologie creștină» (Man: Treatise on Christian Anthropology)**:\n    - Rejects atheist materialism that reduces man to a biological animal or economic tool;\n    - **Man as an Ontological Theocentric Being**: Man is defined solely by his transcendent relationship with God (**«Fără Dumnezeu, omul rămâne un biet animal rațional și vorbitor, care vine de nicăieri și merge spre nicăieri»** / *\"Without God, man remains a poor rational, speaking animal, coming from nowhere and going nowhere\"*);\n  - **The Supremacy of Prayer over Pure Reason**: True wisdom is not cold intellectual pride, but the humble prayer that transforms suffering into spiritual victory (*biruință spirituală*).",
      "examples": [
        {
          "target": "Petre Țuțea, «Socratele român», a înfruntat 13 ani de temniță la Aiud mărturisind că omul își împlinește demnitatea doar prin relația cu Dumnezeu.",
          "reading": "Pe-tre Tsoo-tsya So-kra-te-le ro-man...",
          "translation": "Petre Tutea, the \"Romanian Socrates\", endured 13 years of prison at Aiud testifying that man fulfills his dignity only through relationship with God."
        }
      ],
      "mnemonics": [
        "Petre Țuțea (Socratele Român & Hero of Aiud Prison)! 13 years in communist gulag! Omul - tratat de antropologie creștină! «Fără Dumnezeu, omul este un biet animal...»! Living oral dialogue! Christian existential resistance!"
      ],
      "culturalNotes": [
        "In his final years in a tiny studio near Cișmigiu Park in Bucharest, Țuțea welcomed students, journalists, and priests daily, speaking for hours with dazzling Socratic wit and encyclopedic memory."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian Christian philosopher, revered as the \"Romanian Socrates\", endured thirteen years in Aiud prison and authored \"Man: Treatise on Christian Anthropology\"?",
          "options": [
            "Petre Țuțea (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Mircea Vulcănescu (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Nichifor Crainic (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Dumitru Stăniloae (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)"
          ],
          "answerIndex": 0,
          "explanation": "Petre Țuțea."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Complete Petre Țuțea's famous anthropological aphorism: «Fără ..., omul rămâne un biet animal rațional și vorbitor, care vine de nicăieri și merge spre nicăieri»?",
          "options": [
            "Știință (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Politică (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Bani (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Dumnezeu (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)"
          ],
          "answerIndex": 3,
          "explanation": "Dumnezeu (God)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Petre Tutea's Christian anthropology established that human dignity cannot be derived from autonomous secular reason, but is rooted solely in humanity's ontological relationship with the Divine.\"",
          "options": [
            "Antropologia creștină a lui Petre Țuțea a stabilit că demnitatea umană nu poate fi derivată din rațiunea seculară autonomă, ci își are rădăcinile exclusiv în relația ontologică a omului cu Divinitatea. (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Tratatul de antropologie creștină a fost publicat la Londra în secolul al XVI-lea. (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Țuțea a susținut materialismul dialectic marxist. (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Petre Țuțea a fost un atlet olimpic la Jocurile din 1920. (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)"
          ],
          "answerIndex": 0,
          "explanation": "Accurate Petre Țuțea analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which notorious maximum-security communist political penitentiary in Transylvania was Petre Țuțea imprisoned for over a decade alongside Romania's intellectual elite?",
          "options": [
            "Închisoarea Sighet (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Lagărul Periprava (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Închisoarea Jilava (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)",
            "Penitenciarul Aiud (C2 synthesis on The Socratic Christian Resistance  The Drama of Faith)"
          ],
          "answerIndex": 3,
          "explanation": "Penitenciarul Aiud.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Socratic Christian Resistance & The Drama of Faith"
  },
  "ro-u30-l1": {
    "id": "ro-u30-l1",
    "unit": "ro-u30",
    "level": "C1",
    "objective": "The Anarchic Balkan Groove & The Reconstruction: Lucian Pintilie (Lucian Pintilie 1933–2018 - Reconstituirea 1968 - interzis de regimul Ceaușescu, cel mai important film românesc din istorie; Balanța 1992 - Selecție Oficială la Cannes cu Maia Morgenstern, De ce trag clopotele, Mitică? 1981, umorul negru feroce și radiografia grotescului totalitar).",
    "presentation": {
      "explanation": "Lucian Pintilie (1933–2018 - Tarutino, Basarabia & Bucharest/Paris) and the godfather of modern Romanian auteur cinema:\n- **Lucian Pintilie**:\n  - Theater and film visionary; repeatedly banned and forced into Parisian exile by the Ceaușescu dictatorship; mentored the younger generation that founded the Romanian New Wave.\n- Landmark Masterpieces:\n  - **Reconstituirea (The Reenactment - 1968)**:\n    - Unanimously voted the **#1 Greatest Romanian Film of All Time** by the Romanian Film Critics Association;\n    - Two drunken teenagers (Vladimir Găitan and George Mihăiță) are forced by militia officers and a prosecutor to reenact their tavern brawl for an educational propaganda film on a muddy riverbank;\n    - What begins as a petty farce escalates into real accidental murder on camera, serving as a scathing allegory for the totalitarian state forcing citizens into humiliating self-indictment;\n    - Banned personally by Nicolae Ceaușescu after screening for only a few weeks;\n  - **De ce trag clopotele, Mitică? (Why Are the Bells Tolling, Mitică? - 1981)**: Adapted from Caragiale; banned for a decade until 1990;\n  - **Balanța (The Oak - 1992 - Cannes Official Selection)**: Starring **Maia Morgenstern** in an explosive, furious black comedy depicting post-communist madness.",
      "examples": [
        {
          "target": "Lucian Pintilie a creat capodopera absolută a cinematografiei românești în «Reconstituirea» (1968), demascând violența grotescă a sistemului.",
          "reading": "Loo-chan Peen-tee-lye a kre-at...",
          "translation": "Lucian Pintilie created the absolute masterpiece of Romanian cinema in The Reenactment (1968), unmasking the grotesque violence of the regime."
        }
      ],
      "mnemonics": [
        "Lucian Pintilie (Godfather of Romanian Cinema)! Reconstituirea 1968 (#1 Greatest Romanian Film)! Banned by Ceaușescu! Balanța 1992 with Maia Morgenstern at Cannes! De ce trag clopotele, Mitică?! Savage black humor!"
      ],
      "culturalNotes": [
        "Lucian Pintilie returned from France after the 1989 Revolution and created the Studio of Film Creation of the Ministry of Culture, providing financial grants that launched Cristi Puiu and Cristian Mungiu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian director created the 1968 landmark \"Reconstituirea\" (The Reenactment), voted the greatest Romanian film of all time?",
          "options": [
            "Liviu Ciulei",
            "Mircea Daneliuc",
            "Sergiu Nicolaescu",
            "Lucian Pintilie"
          ],
          "answerIndex": 3,
          "explanation": "Lucian Pintilie."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which celebrated Romanian actress delivered an internationally acclaimed performance as Nela in Pintilie's 1992 Cannes film \"Balanța\" (The Oak)?",
          "options": [
            "Maia Morgenstern",
            "Mariana Mihuț",
            "Luminita Gheorghiu",
            "Anamaria Marinca"
          ],
          "answerIndex": 0,
          "explanation": "Maia Morgenstern."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Pintilie's Reenactment transformed a coerced propaganda recreation into a devastating critique of authoritarian humiliation and moral complicity.\"",
          "options": [
            "Filmul Balanța este un ghid despre construcția caselor de lemn.",
            "Lucian Pintilie a fost un general de cavalerie în Primul Război Mondial.",
            "Reconstituirea a fost filmată în studiourile din Hollywood în 1920.",
            "«Reconstituirea» lui Pintilie a transformat o reconstituire propagandistică forțată într-o critică devastatoare a umilirii autoritare și a complicității morale."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Pintilie analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which classical 19th-century Romanian satirist's plays formed the basis for Pintilie's banned 1981 film *De ce trag clopotele, Mitică?*?",
          "options": [
            "Ion Creangă",
            "Vasile Alecsandri",
            "Ion Luca Caragiale",
            "Mihail Sebastian"
          ],
          "answerIndex": 2,
          "explanation": "Ion Luca Caragiale.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Anarchic Balkan Groove & The Reconstruction"
  },
  "ro-u30-l2": {
    "id": "ro-u30-l2",
    "unit": "ro-u30",
    "level": "C1",
    "objective": "The Palme d'Or & Real-Time Ethical Tension: Cristian Mungiu (Cristian Mungiu - 4 luni, 3 săptămâni și 2 zile 2007 - Palme d'Or la Festivalul de la Cannes și Premiul Academiei Europene de Film, După dealuri 2012 - Premiul pentru Scenariu și dublu Premiu de Interpretare Feminină la Cannes, Bacalaureat 2016 - Premiul pentru Regie la Cannes, R.M.N. 2022, etica deciziilor morale și rigoarea planurilor-secvență fără muzică adăugată).",
    "presentation": {
      "explanation": "Cristian Mungiu (1968–present - Iași & Bucharest) and the summit of contemporary world cinema:\n- **Cristian Mungiu**:\n  - The most internationally decorated director in Eastern European history; won the **Palma de Aur (Palme d'Or) at the Cannes Film Festival (2007)**, Cannes Best Director (2016), and Cannes Best Screenplay (2012).\n- Landmark Masterpieces & Aesthetic Rigor:\n  - **«4 luni, 3 săptămâni și 2 zile» (4 Months, 3 Weeks and 2 Days - 2007 - Cannes Palme d'Or)**:\n    - Set in 1987 during the final suffocating years of Ceaușescu's Decree 770 banning abortion;\n    - University student Otilia (**Anamaria Marinca**) helps her roommate Găbița obtain an illegal black-market abortion in a bleak hotel room from the predatory Mr. Bebe (**Vlad Ivanov**);\n    - **Unbroken Master Sequence Shots**: The unforgettable, agonizing 10-minute unbroken static take at a formal family birthday dinner table where Otilia sits trapped, listening to oblivious bourgeois chatter while her friend bleeds across town;\n    - Zero non-diegetic background music, letting raw environmental sound carry the terror;\n  - **După dealuri (Beyond the Hills - 2012)**: Tragic exorcism in an isolated Moldavian monastery starring Cosmina Stratan and Cristina Flutur;\n  - **Bacalaureat (Graduation - 2016 - Cannes Best Director)**: Moral compromise in provincial high school exams;\n  - **R.M.N. (2022)**: 17-minute single continuous take town hall meeting in Transylvania.",
      "examples": [
        {
          "target": "Cristian Mungiu a cucerit Palme d'Or la Cannes cu «4 luni, 3 săptămâni și 2 zile», definind rigoarea morală a Noului Val Românesc.",
          "reading": "Krees-tyan Moon-gyoo a koo-ke-reet...",
          "translation": "Cristian Mungiu conquered the Cannes Palme d'Or with \"4 Months, 3 Weeks and 2 Days,\" defining the moral rigor of the Romanian New Wave."
        }
      ],
      "mnemonics": [
        "Cristian Mungiu (Cannes Palme d'Or Winner 2007)! 4 luni, 3 săptămâni și 2 zile (Otilia & Mr. Bebe under Decree 770)! După dealuri 2012! Bacalaureat 2016 (Cannes Best Director)! Unbroken sequence shots & zero added music!"
      ],
      "culturalNotes": [
        "Mungiu founded the annual festival *Les Films de Cannes à Bucarest* in 2010, bringing the world's greatest international auteurs to Romania every autumn."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian director won the Cannes Palme d'Or for \"4 Months, 3 Weeks and 2 Days\" (2007) and Cannes Best Director for \"Graduation\" (2016)?",
          "options": [
            "Cristian Mungiu",
            "Corneliu Porumboiu",
            "Radu Jude",
            "Cristi Puiu"
          ],
          "answerIndex": 0,
          "explanation": "Cristian Mungiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which draconian 1966 communist legal decree, banning abortion and contraception in Ceaușescu's Romania, forms the historical core of *4 Months, 3 Weeks and 2 Days*?",
          "options": [
            "Decretul 770",
            "Decretul 115",
            "Legea Marțială",
            "Decretul 400"
          ],
          "answerIndex": 0,
          "explanation": "Decretul 770."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Mungiu maintained rigorous real-time sequence shots without background score to confront the audience with the suffocating moral compromises of totalitarian survival.\"",
          "options": [
            "4 luni, 3 săptămâni și 2 zile este o comedie romantică muzicală.",
            "Cristian Mungiu este un pilot de curse auto.",
            "Mungiu a menținut planuri-secvență riguroase în timp real fără muzică de fundal pentru a confrunta publicul cu compromisurile morale sufocante ale supraviețuirii totalitare.",
            "Vlad Ivanov a jucat un pirat în Marea Caraibilor."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Cristian Mungiu analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Romanian actress portrayed the fiercely loyal university student Otilia in *4 Months, 3 Weeks and 2 Days*, winning the European Film Award for Best Actress?",
          "options": [
            "Cosmina Stratan",
            "Anamaria Marinca",
            "Laura Vasiliu",
            "Rodica Tapalagă"
          ],
          "answerIndex": 1,
          "explanation": "Anamaria Marinca.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Palme d'Or & Real-Time Ethical Tension"
  },
  "ro-u30-l3": {
    "id": "ro-u30-l3",
    "unit": "ro-u30",
    "level": "C1",
    "objective": "The Medical Odyssey & The Camera as Witness: Cristi Puiu (Cristi Puiu - Moartea domnului Lăzărescu 2005 - Premiul Un Certain Regard la Cannes și filmul care a lansat Noul Val Românesc, Sieranevada 2016, Malmkrog 2020 - Premiul pentru Regie Encounters la Berlin, colaborarea cu operatorul Oleg Mutu și actrița Luminița Gheorghiu).",
    "presentation": {
      "explanation": "Cristi Puiu (1967–present - Bucharest) and the founder of the aesthetic grammar of the Romanian New Wave:\n- **Cristi Puiu**:\n  - Studied painting and cinema in Geneva; created the hyper-realist handheld aesthetic that redefined 21st-century European art cinema.\n- Landmark Masterpieces & Inventions:\n  - **«Moartea domnului Lăzărescu» (The Death of Mr. Lăzărescu - 2005 - Cannes Un Certain Regard Prize)**:\n    - Ranked #5 on *The New York Times* list of the 25 Best Films of the 21st Century;\n    - Follows dying 62-year-old pensioner Dante Remus Lăzărescu (**Ion Fiscuteanu**) and his devoted paramedic Mioara (**Luminița Gheorghiu**) as their ambulance journeys through the nocturnal inferno of Bucharest emergency rooms, rejected by four indifferent hospitals;\n    - **Cinematography of Oleg Mutu**: Handheld camera operating at eye level, pivoting naturally between characters like an attentive bystander, creating palpable documentary reality;\n  - **Sieranevada (2016 - Cannes Official Competition)**:\n    - 3-hour family memorial feast (*parastas*) inside a cramped Bucharest apartment where 15 relatives argue continuously about 9/11, communism, and infidelity;\n  - **Malmkrog (2020 - Berlin Encounters Best Director Award)**: 200-minute philosophical salon adapting Vladimir Solovyov's *War, Progress, and the End of History*.",
      "examples": [
        {
          "target": "Cristi Puiu a inaugurat Noul Val Românesc cu «Moartea domnului Lăzărescu», transformând o noapte în ambulanță într-o odisee existențială.",
          "reading": "Krees-tee Poo-yoo a een-ow-goo-rat...",
          "translation": "Cristi Puiu inaugurated the Romanian New Wave with The Death of Mr. Lazarescu, transforming a night in an ambulance into an existential odyssey."
        }
      ],
      "mnemonics": [
        "Cristi Puiu (Inaugurator of the Romanian New Wave)! Moartea domnului Lăzărescu 2005 (#5 Greatest Film of 21st Century in NYT - Cannes Prix)! Oleg Mutu camera! Sieranevada 2016 (Apartment parastas)! Malmkrog 2020!"
      ],
      "culturalNotes": [
        "The character name \"Dante Remus Lăzărescu\" was chosen deliberately: combining Dante (journey through the inferno) and Lazarus (waiting for resurrection)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian director inaugurated the Romanian New Wave with \"The Death of Mr. Lăzărescu\" (2005) and directed \"Sieranevada\" (2016)?",
          "options": [
            "Cristi Puiu",
            "Cristian Mungiu",
            "Radu Muntean",
            "Cătălin Mitulescu"
          ],
          "answerIndex": 0,
          "explanation": "Cristi Puiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which beloved Romanian actress portrayed the tireless paramedic Mioara Avram alongside Ion Fiscuteanu in \"The Death of Mr. Lăzărescu\"?",
          "options": [
            "Luminița Gheorghiu",
            "Coca Bloos",
            "Dana Dogaru",
            "Maia Morgenstern"
          ],
          "answerIndex": 0,
          "explanation": "Luminița Gheorghiu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Puiu's camera behaves like an ethical witness in room corners, capturing the slow bureaucratic indifference of hospital wards without melodrama.\"",
          "options": [
            "Cristi Puiu este un medic chirurg la Spitalul Floreasca.",
            "Camera lui Puiu se comportă ca un martor etic în colțurile camerelor, capturând lenta indiferență birocratică din spitale fără melodramă.",
            "Oleg Mutu este un pictor renascentist din secolul al XV-lea.",
            "Moartea domnului Lăzărescu este un film de acțiune cu arte marțiale."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Cristi Puiu analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What 19th-century Russian religious philosopher's texts formed the intellectual screenplay of Cristi Puiu's 2020 masterpiece *Malmkrog*?",
          "options": [
            "Vladimir Solovyov",
            "Fyodor Dostoevsky",
            "Leo Tolstoy",
            "Nikolai Berdyaev"
          ],
          "answerIndex": 0,
          "explanation": "Vladimir Solovyov.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Medical Odyssey & The Camera as Witness"
  },
  "ro-u30-l4": {
    "id": "ro-u30-l4",
    "unit": "ro-u30",
    "level": "C2",
    "objective": "Linguistic Absurdity & The Deconstruction of the Law: Corneliu Porumboiu (Corneliu Porumboiu - A fost sau n-a fost? 2006 - Caméra d'Or la Festivalul de la Cannes, Polițist, adjectiv 2009 - Premiul Juriului Un Certain Regard și Premiul FIPRESCI la Cannes, scena de antologie a dicționarului explicativ DEX pentru cuvintele «conștiință», «lege» și «morală», La Gomera 2019 cu limbajul fluierat El Silbo).",
    "presentation": {
      "explanation": "Corneliu Porumboiu (1975–present - Vaslui & Bucharest) and the deadpan philosophical mastery of language and bureaucracy:\n- **Corneliu Porumboiu**:\n  - Winner of the **Caméra d'Or at Cannes (2006)**; the most distinct comic-philosophical auteur in Eastern Europe, using static wide framing and dictionary linguistics to dissect reality.\n- Monumental Masterpieces & Cinematic Grammar:\n  - **«A fost sau n-a fost?» (12:08 East of Bucharest - 2006 - Cannes Caméra d'Or)**:\n    - Set 16 years after the fall of communism in the small town of Vaslui;\n    - A local TV talk show host and two amateur guests (a retired alcoholic teacher and an old pensioner who plays Santa Claus) debate whether a real revolution occurred in their town square before or after 12:08 PM on December 22, 1989;\n    - Dissects how historical truth is absurdly constructed and contested through TV cameras;\n  - **«Polițist, adjectiv» (Police, Adjective - 2009 - Cannes Jury Prize)**:\n    - Young undercover detective Cristi (**Dragoș Bucur**) refuses to arrest a high school kid smoking hashish, arguing it violates his moral conscience;\n    - **The Legendary Dictionary Scene**: Police Captain Anghelache (**Vlad Ivanov**) calls Cristi into his office and forces him to read aloud the exact definitions of **«CONȘTIINȚĂ» (Conscience)**, **«LEGE» (Law)**, and **«POLIȚIST» (Police)** from the DEX dictionary, demonstrating how state institutions weaponize semantics to crush moral autonomy;\n  - **La Gomera (The Whistlers - 2019 - Cannes Competition)**: Neo-noir crime thriller utilizing the ancestral whistled language *El Silbo Gomero*.",
      "examples": [
        {
          "target": "Corneliu Porumboiu a cucerit Caméra d'Or la Cannes cu «A fost sau n-a fost?» și a deconstruit puterea limbajului în «Polițist, adjectiv».",
          "reading": "Kor-ne-lyoo Po-room-boy-oo a koo-ke-reet...",
          "translation": "Corneliu Porumboiu conquered the Cannes Caméra d'Or with \"12:08 East of Bucharest\" and deconstructed the power of language in \"Police, Adjective.\""
        }
      ],
      "mnemonics": [
        "Corneliu Porumboiu (Vaslui Master & Cannes Caméra d'Or 2006)! A fost sau n-a fost? (Revolution debate at 12:08)! Polițist, adjectiv 2009 (The DEX dictionary scene on Conscience and Law)! La Gomera 2019 (El Silbo whistling language)!"
      ],
      "culturalNotes": [
        "Porumboiu's father, Adrian Porumboiu, was a famous international football referee and wealthy agricultural businessman in Vaslui, inspiring Corneliu's 2014 documentary *The Second Game*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian director won the Cannes Caméra d'Or for \"12:08 East of Bucharest\" (2006) and directed \"Police, Adjective\" (2009)?",
          "options": [
            "Adrian Sitaru",
            "Florin Șerban",
            "Corneliu Porumboiu",
            "Radu Jude"
          ],
          "answerIndex": 2,
          "explanation": "Corneliu Porumboiu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What ancestral whistled indigenous language from the Canary Islands is learned by a corrupt Romanian cop in Porumboiu's 2019 neo-noir \"La Gomera\"?",
          "options": [
            "Ladino",
            "Gaelic",
            "El Silbo Gomero",
            "Esperanto"
          ],
          "answerIndex": 2,
          "explanation": "El Silbo Gomero."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Porumboiu exposed the authoritarian mechanics of institutional power through prolonged static shots and the pedantic dictionary definitions of conscience and law.\"",
          "options": [
            "Porumboiu a expus mecanismele autoritare ale puterii instituționale prin cadre statice prelungite și definițiile pedante din dicționar ale conștiinței și legii.",
            "A fost sau n-a fost este o dramă istorică despre daci și romani.",
            "La Gomera este o emisiune de știri sportive.",
            "Corneliu Porumboiu este un arbitru de baschet american."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Porumboiu analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which eastern Romanian provincial city is the comedic television revolution debate of *12:08 East of Bucharest* set?",
          "options": [
            "Bacău",
            "Iași",
            "Galați",
            "Vaslui"
          ],
          "answerIndex": 3,
          "explanation": "Vaslui (Județul Vaslui).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Linguistic Absurdity & The Deconstruction of the Law"
  },
  "ro-u30-l5": {
    "id": "ro-u30-l5",
    "unit": "ro-u30",
    "level": "C2",
    "objective": "C2 synthesis on Historical Iconoclasm & The Golden Bear: Radu Jude (Radu Jude - Aferim! 2015 - Ursul de Argint pentru Regie la Berlin, sclavia romilor în Țara Românească a secolului XIX filmată în 35mm alb-negru; «Îmi este indiferent dacă în istorie vom intra ca barbari» 2018 - Globul de Cristal la Karlovy Vary, masacrul de la Odesa din 1941; Babardeală cu bucluc sau porno balamuc 2021 - Ursul de Aur la Berlin, tripticul pandemic și demascarea ipocriziei colective).",
    "presentation": {
      "explanation": "Radu Jude (1977–present - Bucharest) and the fearless iconoclasm of historical reckoning:\n- **Radu Jude**:\n  - The most audacious, experimental political satirist in contemporary world cinema; winner of the **Ursul de Aur (Golden Bear) at Berlin (2021)**, Berlin Silver Bear for Best Director (2015), and the Crystal Globe at Karlovy Vary (2018).\n- Monumental Masterpieces & Deconstructive Methods:\n  - **Aferim! (2015 - Berlin Silver Bear for Best Director)**:\n    - Balkan historical western shot in gorgeous 35mm black-and-white widescreen;\n    - Follows gendarme Costandin and his son hunting a runaway Roma slave (*rob*) named Carfin in 1835 Wallachia (Țara Românească);\n    - Dialogue constructed entirely from historical chronicles, folk proverbs, and church texts, exposing the 500-year history of Roma slavery in Romania;\n  - **«Îmi este indiferent dacă în istorie vom intra ca barbari» (I Do Not Care If We Go Down in History as Barbarians - 2018 - Karlovy Vary Crystal Globe)**:\n    - A theater director stages a public historical reenactment of the 1941 Odessa Massacre perpetrated by the Antonescu regime, confronting modern Romanians with Holocaust denial and xenophobia;\n  - **Babardeală cu bucluc sau porno balamuc (Bad Luck Banging or Loony Porn - 2021 - Berlin Golden Bear / Ursul de Aur)**:\n    - Three-part pandemic masterpiece dissecting a leaked sextape of a middle-school history teacher (Katia Pascariu), culminating in an absurdist Greek-chorus parent-teacher tribunal.",
      "examples": [
        {
          "target": "Radu Jude a cucerit Ursul de Aur la Berlin cu «Babardeală cu bucluc» și a confruntat istoria în «Aferim!», devenind cel mai curajos cineast român.",
          "reading": "Ra-doo Joo-de a koo-ke-reet...",
          "translation": "Radu Jude conquered the Berlin Golden Bear with \"Bad Luck Banging\" and confronted history in \"Aferim!\", becoming Romania's most courageous filmmaker."
        }
      ],
      "mnemonics": [
        "Radu Jude (Berlin Golden Bear Winner 2021)! Aferim! 2015 (Roma slavery in 1835 Wallachia - Berlin Silver Bear)! «Îmi este indiferent...» 2018 (Odessa 1941 Massacre reckoning)! Babardeală cu bucluc 2021 (Ursul de Aur)! Fearless historical deconstruction!"
      ],
      "culturalNotes": [
        "The title *«Îmi este indiferent dacă în istorie vom intra ca barbari»* is a verbatim historical quotation from dictator Ion Antonescu uttered at the Council of Ministers in summer 1941 before the Odessa offensive."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Romanian director won the Berlin Golden Bear for \"Bad Luck Banging or Loony Porn\" (2021) and the Berlin Silver Bear for \"Aferim!\" (2015)?",
          "options": [
            "Radu Jude (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Cristian Mungiu (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Corneliu Porumboiu (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Cristi Puiu (C2 synthesis on Historical Iconoclasm  The Golden Bear)"
          ],
          "answerIndex": 0,
          "explanation": "Radu Jude."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What 500-year historical injustice in 19th-century Wallachia is dramatized in Radu Jude's 35mm black-and-white western \"Aferim!\"?",
          "options": [
            "Răscoala de la 1907 (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Marea Unire de la 1918 (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Revoluția de la 1848 (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Sclavia romilor (C2 synthesis on Historical Iconoclasm  The Golden Bear)"
          ],
          "answerIndex": 3,
          "explanation": "Sclavia romilor."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Radu Jude deployed Brechtian distancing, archival documentation, and savage satire to dismantle national historical myths and contemporary moral amnesia.\"",
          "options": [
            "Radu Jude este un tenor de operă la Scala din Milano. (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Aferim este un film de animație 3D pentru preșcolari. (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Ursul de Aur de la Berlin a fost acordat unui film australian. (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Radu Jude a utilizat distanțarea brechtiană, documentarea de arhivă și satira feroce pentru a demonta miturile istorice naționale și amnezia morală contemporană. (C2 synthesis on Historical Iconoclasm  The Golden Bear)"
          ],
          "answerIndex": 3,
          "explanation": "Accurate Radu Jude analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prestigious Grand Prize was awarded to Radu Jude's *Babardeală cu bucluc sau porno balamuc* at the 71st Berlin International Film Festival in 2021?",
          "options": [
            "Leul de Aur (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Globul de Aur (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Ursul de Aur (C2 synthesis on Historical Iconoclasm  The Golden Bear)",
            "Palme d'Or (C2 synthesis on Historical Iconoclasm  The Golden Bear)"
          ],
          "answerIndex": 2,
          "explanation": "Ursul de Aur (Golden Bear).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Historical Iconoclasm & The Golden Bear"
  },
  "ro-u31-l1": {
    "id": "ro-u31-l1",
    "unit": "ro-u31",
    "level": "C1",
    "objective": "The Sacred Sarmale, Clay Pot Alchemy & Mămăligă (Sarmalele tradiționale românești în foi de varză murată și foi de viță-de-vie, fierte la foc domol în oale de lut ars cu afumătură de porc, cimbru uscat și mărar; mămăliga aurie din mălai măcinat la moară de piatră cu brânză de burduf în coajă de brad și smântână grasă).",
    "presentation": {
      "explanation": "Sarmalele and Mămăliga: The ancestral heart of Romanian culinary identity:\n- **Sarmalele Tradiționale (The King of Romanian Feasts)**:\n  - Inscribed in the culinary heritage of Romania for over five centuries;\n- The Anatomy & Chemistry of Preparation:\n  - **The Wrapper**: Fermented sour cabbage leaves (**foi de varză murată**) naturally preserved in oak barrels with sea salt, dill stalks, and thyme, or young tender vine leaves (*foi de viță*);\n  - **The Filling**: Coarsely ground pork combined with beef, translucent sautéed onions, short-grain rice, dried garden thyme (**cimbru**), sweet paprika, and black pepper;\n  - **Clay Pot Slow Cooking (Fierberea în oală de lut)**:\n    - Arranged in concentric circular tiers inside an unglazed clay pot (*oală de lut ars*);\n    - Layered with chunks of smoked pork ribs (**afumătură de porc / costiță afumată**), smoked bacon (*slănină*), and shredded sauerkraut, slow-baked in an oven for 4 to 6 hours until the cabbage melts like butter;\n  - **Mămăliga (Polenta de Aur)**:\n    - Golden cornmeal (*mălai*) stirred continuously with a wooden paddle (**făcăleț**) in a cast-iron cauldron (**ceaun de fontă**) with salted boiling water until thick and glossy;\n    - Served steaming hot, sliced traditionally with a taut sewing thread (**ață curată**) rather than a knife;\n    - Paired with cold fermented sour cream (**smântână grasă 30%**) and pickled hot chili peppers (*ardei iute*).",
      "examples": [
        {
          "target": "Sarmalele aburinde gătite lent în oală de lut cu afumătură și mămăligă caldă cu smântână sunt sufletul sărbătorilor românești.",
          "reading": "Sar-ma-le-le a-boo-reen-de...",
          "translation": "Steaming sarmale slow-cooked in a clay pot with smoked pork and warm polenta with sour cream are the soul of Romanian holidays."
        }
      ],
      "mnemonics": [
        "Sarmalele tradiționale! Sour cabbage leaves (Foi de varză murată)! Smoked pork afumătură & garden thyme (Cimbru)! Slow-baked in clay pot (Oală de lut)! Mămăliga in cast-iron ceaun cut with string! Smântână & ardei iute!"
      ],
      "culturalNotes": [
        "In Romanian folklore, sarmale are considered even more delicious on the second and third day after cooking, as the smoked pork juices and sour cabbage acids achieve complete harmonious equilibrium."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What traditional unglazed clay pot is used to slow-bake Romanian sarmale in the oven for hours until tender?",
          "options": [
            "Ceaunul de fontă",
            "Tigaia de cupru",
            "Tava de aluminiu",
            "Oala de lut ars"
          ],
          "answerIndex": 3,
          "explanation": "Oala de lut ars (Unglazed Clay Pot)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional tool is used to slice a steaming round mămăliga into portions without sticking to a knife blade?",
          "options": [
            "O ață de bumbac curată",
            "O spatulă de lemn",
            "O foarfecă",
            "O lingură de argint"
          ],
          "answerIndex": 0,
          "explanation": "O ață de bumbac curată (Clean cotton thread)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Traditional Romanian sarmale are rolled in fermented sour cabbage leaves and slow-cooked in clay pots with smoked pork, served with golden cornmeal polenta and sour cream.\"",
          "options": [
            "Ceaunul de fontă este un instrument muzical cu corzi.",
            "Sarmalele sunt biscuiți dulci cu ciocolată importați din Franța.",
            "Sarmalele tradiționale românești sunt rulate în foi de varză murată și fierte lent în oale de lut cu afumătură de porc, servite cu mămăligă aurie și smântână.",
            "Mămăliga se prepară exclusiv din făină de orez alb."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Sarmale analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What dried aromatic wild herb is an indispensable seasoning in the minced meat filling of authentic Romanian sarmale?",
          "options": [
            "Busuioc",
            "Cimbru uscat",
            "Rozmarin proaspăt",
            "Oregano grecesc"
          ],
          "answerIndex": 1,
          "explanation": "Cimbru uscat.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 31, Lesson 1: The Sacred Sarmale"
  },
  "ro-u31-l2": {
    "id": "ro-u31-l2",
    "unit": "ro-u31",
    "level": "C1",
    "objective": "The Legend of Mititei & The Charcoal Grill (Micii / Mititeii românești: legenda hanului lui Iordache Ionescu din 1901 pe strada Covaci din București; amestecul tridimensional de carne de vită, porc și oaie, zeama concentrată de oase, bicarbonatul de sodiu și mirodeniile: usturoi pisat, cimbru, anason stelat, chimion și ienibahar; grătarul cu cărbuni de fag și muștarul de Tecuci).",
    "presentation": {
      "explanation": "Micii (Mititeii) and the smoke-filled culinary mythology of Bucharest:\n- **The Birth Legend (Strada Covaci, 1901)**:\n  - Born according to beloved legend at the historic *Hanu' Iordache Ionescu* in Bucharest's Lipscani district; when the tavern ran out of sheep sausage casings late one evening, the master chef grilled seasoned minced meat sausages directly on the fiery charcoal grate, delighting patrons with **«mititei» (the little ones)**;\n- The Scientific Anatomy & Texture:\n  - **The Meat Triad**: Coarsely ground beef brisket, pork neck, and fatty mutton/lamb (*carne de oaie*) in a 4:3:3 ratio;\n  - **The Bone Broth & Kneading**: Kneaded for hours with a concentrated, gelatin-rich bone marrow broth (*supă de oase concentrată*);\n  - **Sodium Bicarbonate (Bicarbonatul de sodiu)**: Elevates the meat pH, retaining juices, creating an elastic, bouncy, succulent texture that springs back when pressed;\n  - **The Spice Bouquet**: Crushed fresh garlic, dried thyme (*cimbru*), allspice (*ienibahar*), cumin, anise, coriander, and sodium bicarbonate;\n  - **Resting & Grilling**: Chilled for 24 hours to cure, then grilled over blazing **beechwood charcoal (cărbuni de fag)**, turned constantly with tongs to form a blistered, caramelized crust enclosing a bursting, juicy pink interior;\n  - Served strictly with crusty fresh bread and sharp, tangy **Muștar de Tecuci**.",
      "examples": [
        {
          "target": "Micii suculenți rumeniți pe grătarul cu cărbuni de fag, serviți cu pâine proaspătă și muștar de Tecuci, sunt emblema grătarelor românești.",
          "reading": "Mee-cheey soo-koo-len-tseey...",
          "translation": "Juicy mici browned on the beechwood charcoal grill, served with fresh bread and Tecuci mustard, are the emblem of Romanian grilling."
        }
      ],
      "mnemonics": [
        "Micii / Mititeii! Born at Hanu' Iordache on Strada Covaci! Beef, pork & mutton triad with rich bone broth! Bicarbonate of soda for springy succulence! Beechwood charcoal grill! Muștar de Tecuci!"
      ],
      "culturalNotes": [
        "Romanians consume over 440 million mici annually, with May 1st (Labor Day) celebrated nationwide as the ultimate open-air national grilling holiday."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What chemical ingredient is traditionally added to Romanian mici meat mixture to elevate pH and create their signature springy, juicy texture?",
          "options": [
            "Bicarbonat de sodiu",
            "Drojdie uscată",
            "Oțet de mere",
            "Praf de copt"
          ],
          "answerIndex": 0,
          "explanation": "Bicarbonat de sodiu (Baking Soda)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which historic Moldavian town in Galați County is celebrated across Romania for producing the iconic traditional mustard paired with mici?",
          "options": [
            "Tecuci",
            "Focșani",
            "Roman",
            "Bârlad"
          ],
          "answerIndex": 0,
          "explanation": "Tecuci (Muștar de Tecuci)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Authentic Romanian mici combine seasoned beef, pork, and mutton kneaded with concentrated bone broth and garlic, grilled over glowing beechwood embers and paired with Tecuci mustard.\"",
          "options": [
            "Micii sunt bomboane dulci de ciocolată din Transilvania.",
            "Micii românești autentici combină carne condimentată de vită, porc și oaie frământată cu supă concentrată de oase și usturoi, fripți pe jar de cărbuni de fag și asortați cu muștar de Tecuci.",
            "Muștarul de Tecuci este o băutură răcoritoare carbogazoasă.",
            "Grătarul de mici se prepară pe plite electrice în bucătării închise."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Mititei analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "On which historic street in Bucharest's Old Town was the tavern of Iordache Ionescu located where mici were famously invented in 1901?",
          "options": [
            "Strada Covaci",
            "Calea Victoriei",
            "Bulevardul Magheru",
            "Strada Lipscani"
          ],
          "answerIndex": 0,
          "explanation": "Strada Covaci.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Legend of Mititei & The Charcoal Grill (Micii / Mititeii românești"
  },
  "ro-u31-l3": {
    "id": "ro-u31-l3",
    "unit": "ro-u31",
    "level": "C1",
    "objective": "The Terroir of Dealu Mare & Fetească Neagră: The Oenological Renaissance (Vinurile românești: Fetească Neagră «Marea Doamnă a soiurilor autohtone», terroir-ul calcaros din podgoria Dealu Mare («Patria vinurilor roșii» pe paralela 45°); Cotnari și Grasa de Cotnari din vremea lui Ștefan cel Mare, Fetească Regală și Tămâioasă Românească).",
    "presentation": {
      "explanation": "Romanian Oenology and the ancient terroir of Dealu Mare and Cotnari:\n- **6,000 Years of Winemaking Heritage**:\n  - Romania is the 6th largest wine producer in the European Union, blessed with the exact same 45th parallel latitude as Bordeaux and Piedmont;\n- Sovereign Indigenous Grape Varieties:\n  - **1. Fetească Neagră (\"The Black Maiden\")**:\n    - The undisputed flagship red grape of Romania, cultivated for over 2,000 years in the foothills of the Carpathians;\n    - Yields deep ruby-purple wines with silky tannins and complex notes of dried black plums (**prune uscate**), blackberries, black cherries, and sweet spices (cinnamon and clove);\n  - **The Terroir of Dealu Mare (Prahova & Buzău)**:\n    - Known as **«Patria Vinurilor Roșii» (The Homeland of Red Wines)**;\n    - South-facing hillsides with rich calcareous limestone and clay soils, receiving over 2,000 hours of golden sunshine annually;\n  - **2. Grasa de Cotnari (DOC Cotnari, Iași)**:\n    - Cultivated since the reign of Prince Stephen the Great (**Ștefan cel Mare** - 15th century);\n    - Indigenous white grape affected by Noble Rot (*putregaiul nobil / Botrytis cinerea*), producing golden, unctuous nectar with aromas of dried apricots, honeycomb, and walnuts;\n  - **3. Fetească Regală & Tămâioasă Românească**: Aromatic white varietals with scents of Muscat grapes, linden flowers, and wildflowers.",
      "examples": [
        {
          "target": "Fetească Neagră din podgoria Dealu Mare și Grasa de Cotnari reprezintă noblețea milenară a viticulturii românești.",
          "reading": "Fe-tyas-ka Nea-gra deen pod-go-rya...",
          "translation": "Feteasca Neagra from the Dealu Mare vineyards and Grasa de Cotnari represent the millenary nobility of Romanian viticulture."
        }
      ],
      "mnemonics": [
        "Vinurile românești! 45th parallel (same as Bordeaux)! Fetească Neagră (Flagship red with dried plum notes)! Dealu Mare (Homeland of Red Wines on limestone)! Grasa de Cotnari (Noble rot sweet wine from Stephen the Great)! Fetească Regală!"
      ],
      "culturalNotes": [
        "Legend holds that the Dacian King Burebista was advised by high priest Deceneu to burn down all vineyards to keep his warriors disciplined and prevent foreign invaders from coveting their wine."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which prestigious southern Carpathian wine region in Prahova and Buzău is celebrated as the \"Homeland of Red Wines\" for Fetească Neagră?",
          "options": [
            "Dealu Mare",
            "Murfatlar",
            "Târnave",
            "Panciu"
          ],
          "answerIndex": 0,
          "explanation": "Dealu Mare."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What indigenous Romanian red grape variety, producing notes of dried black plums and spice, is acclaimed as the \"Great Lady of Romanian Wines\"?",
          "options": [
            "Fetească Neagră",
            "Novac",
            "Negru de Drăgășani",
            "Băbească Neagră"
          ],
          "answerIndex": 0,
          "explanation": "Fetească Neagră."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Dealu Mare's south-facing limestone slopes on the 45th parallel provide the ideal terroir for Feteasca Neagra, developing deep notes of dried plum and velvety tannins.\"",
          "options": [
            "Pantele calcaroase cu expoziție sudică de pe paralela 45° din Dealu Mare oferă terroir-ul ideal pentru Fetească Neagră, dezvoltând note profunde de prune uscate și taninuri catifelate.",
            "Grasa de Cotnari este un sortiment de brânză maturată.",
            "Podgoria Dealu Mare este situată în delta Dunării sub apă.",
            "Vinurile românești se produc exclusiv din mere și pere."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Romanian oenology analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which historic Moldavian sweet white wine from Iași County has been famous since the 15th-century reign of Stephen the Great for its noble rot botrytis complexity?",
          "options": [
            "Fetească Albă",
            "Busuioacă de Bohotin",
            "Crâmpoșie Selecționată",
            "Grasa de Cotnari"
          ],
          "answerIndex": 3,
          "explanation": "Grasa de Cotnari.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Terroir of Dealu Mare & Fetească Neagră"
  },
  "ro-u31-l4": {
    "id": "ro-u31-l4",
    "unit": "ro-u31",
    "level": "C2",
    "objective": "The Sacred Holiday Breads: Cozonac, Pască & Mucenici (Cozonacul pufos de Crăciun și Paște: frământatul manual îndelungat «până asudă grinda», zeci de gălbenușuri de ou proaspăt, unt gras, umplutura generoasă de nucă măcinată, cacao neagră, rahat turcesc și stafide înmuiate în rom; Pasca pascală cu brânză de vaci dulce și cruce împletită; Sfințișorii moldovenești și mucenicii muntenești fierți cu nucă și scorțișoară).",
    "presentation": {
      "explanation": "Cozonac, Pască, and the sacred holiday baking rituals of Romania:\n- **Cozonacul Tradițional (The Sacred Festive Bread)**:\n  - The undisputed culinary centerpiece of Romanian Christmas (*Crăciun*) and Easter (*Paște*);\n- The Physics & Art of Cozonac Making:\n  - **The Kneading Ritual (Frământatul)**:\n    - Kitchen kept warm without drafts; dough kneaded by hand for hours **«până asudă grinda»** (*\"until the ceiling rafters sweat\"*);\n    - Incorporates 20 to 30 fresh farm egg yolks per kilogram of flour, high-fat butter, warm milk infused with lemon and orange zest, and vanilla sugar;\n    - Generously layered and braided (**aluat împletit**) with a decadent filling of roasted ground walnuts (**nucă măcinată**), dark cocoa, diced Turkish delight (**rahat**), and dark raisins soaked in rum;\n    - Bakes into lofty, golden-brown loaves that pull apart into feather-light, buttery, fragrant strands (**fâșii pufoase**);\n  - **Pasca Pascală (The Easter Bread)**:\n    - Sweet enriched bread encasing a rich filling of sweet farmer's cheese (*brânză dulce de vaci*), sour cream, eggs, and raisins, crowned with a braided dough cross representing the Resurrection;\n  - **Mucenici (The 40 Martyrs of Sebaste - March 9)**:\n    - **Moldavian Mucenici (Sfințișori)**: Figure-8 fluffy baked brioches glazed in blossom honey and crushed walnuts;\n    - **Muntenian Mucenici**: Small figure-8 pasta boiled in cinnamon-and-walnut spiced sweet syrup.",
      "examples": [
        {
          "target": "Cozonacul pufos împletit cu nucă și cacao și Pasca pascală cu brânză dulce sunt coroana sărbătorilor creștine românești.",
          "reading": "Ko-zo-na-kool poo-fos...",
          "translation": "The fluffy braided cozonac with walnut and cocoa and Easter Pasca with sweet cheese are the crown of Romanian Christian holidays."
        }
      ],
      "mnemonics": [
        "Cozonac (Fluffy festive brioche kneaded «până asudă grinda»)! 20+ egg yolks & butter! Braided filling of roasted walnuts (Nucă), cocoa, rahat & rum raisins! Pasca with sweet cheese cross! Sfințișori figure-8s with honey & walnuts!"
      ],
      "culturalNotes": [
        "In traditional Romanian villages, windows and doors were tightly closed during cozonac proofing, and anyone entering the kitchen had to speak in soft whispers so the delicate yeast dough wouldn't \"catch a cold\" and collapse."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which sweet festive braided bread, enriched with dozens of egg yolks and filled with walnuts, cocoa, and rahat, is the centerpiece of Romanian Christmas and Easter?",
          "options": [
            "Covrigii de Buzău",
            "Mămăliga",
            "Cozonacul",
            "Pâinea de casă"
          ],
          "answerIndex": 2,
          "explanation": "Cozonacul."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional Easter bread features a rich filling of sweet farmer's cheese, eggs, and raisins crowned by a braided dough cross?",
          "options": [
            "Plăcinta dobrogeană",
            "Cozonacul",
            "Pasca",
            "Coliva"
          ],
          "answerIndex": 2,
          "explanation": "Pasca (Pasca pascală)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The traditional Romanian cozonac requires patient manual kneading in a warm kitchen, producing buttery strands filled with cocoa, roasted walnuts, and rum-soaked raisins.\"",
          "options": [
            "Mucenicii se coc exclusiv din carne tocată de porc.",
            "Pasca este o băutură alcoolică consumată iarna.",
            "Cozonacul este o ciorbă de pește din Dobrogea.",
            "Cozonacul tradițional românesc necesită un frământat manual răbdător într-o bucătărie caldă, producând fâșii pufoase cu unt umplute cu cacao, nucă prăjită și stafide înmuiate în rom."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Cozonac and Pasca analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional figure-8 shaped baked holiday pastries, glazed in natural floral honey and ground walnuts, are celebrated across Moldova on March 9th?",
          "options": [
            "Papanașii",
            "Cornulețele cu magiun",
            "Sfințișorii moldovenești",
            "Gogoșile"
          ],
          "answerIndex": 2,
          "explanation": "Sfințișorii moldovenești (Mucenici).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sacred Holiday Breads"
  },
  "ro-u31-l5": {
    "id": "ro-u31-l5",
    "unit": "ro-u31",
    "level": "C2",
    "objective": "C2 synthesis on Pastoral Heritage & Artisanal Cheeses: Brânză de Burduf & Telemea (Brânzeturile pastorale românești: transhumanța carpatică; Brânza de burduf maturată în coajă de brad din Rucăr-Bran și Munții Bucegi - esența de rășină de brad și lapte gras de oaie; Cașul dulce, Urda fină din zer, Telemeaua de Ibănești cu Denumire de Origine Protejată în saramură naturală de la Orșova, și Cașcavalul afumat de Penteleu).",
    "presentation": {
      "explanation": "Pastoral Heritage, Transhumance and the Artisanal Cheeses of the Carpathians:\n- **The Transhumance Heritage (Transhumanța carpatică - UNESCO 2023)**:\n  - The seasonal migration of shepherds moving sheep flocks between high Alpine pastures in summer and lowland plains in winter across the Carpathian arc;\n- The Master Artisanal Cheeses:\n  - **1. Brânza de Burduf în Coajă de Brad (Fir Bark Cheese - Rucăr-Bran & Bucegi)**:\n    - The crowning jewel of Romanian pastoral gastronomy;\n    - Fresh sheep's milk curd (*caș de oaie*) is fermented, salted, kneaded by hand, and tightly encased inside cylinders of fresh aromatic **resin-rich fir tree bark (coajă de brad)**;\n    - Aged in mountain cellars where the fir resin slowly permeates the creamy, sharp, pungent sheep cheese with pine, resinous, and forest floor aromatics;\n  - **2. Telemeaua de Ibănești (PDO / Denumire de Origine Protejată)**:\n    - Authentic semi-hard white brined cheese made from the milk of cows grazing in the Gurghiu Valley (Mureș);\n    - Brined exclusively in natural saline spring water drawn from the ancient subterranean saltwater well in the village of **Orșova**;\n  - **3. Urdă**:\n    - Delicate, sweet whey protein cheese made by re-boiling leftover whey (*zer*), virtually fat-free and packed with essential proteins (akin to Italian ricotta);\n  - **4. Cașcaval de Penteleu**: Semi-hard raw sheep's milk pasta filata cheese, naturally smoked over beechwood embers in the Buzău mountains.",
      "examples": [
        {
          "target": "Brânza de burduf în coajă de brad din Carpați și Telemeaua de Ibănești protejată european sunt mărturia transhumanței milenare.",
          "reading": "Bran-za de boor-doof een koa-zhe...",
          "translation": "Fir bark burduf cheese from the Carpathians and European-protected Ibanesti telemea are testimony to millenary transhumance."
        }
      ],
      "mnemonics": [
        "Brânzeturi pastorale (Carpathian Transhumance UNESCO 2023)! Brânză de burduf în coajă de brad (Fir bark aged sheep cheese in Rucăr-Bran)! Telemea de Ibănești (PDO in Orșova natural salt spring brine)! Urdă from whey! Cașcaval de Penteleu!"
      ],
      "culturalNotes": [
        "The traditional recipe for Brânză de burduf in fir bark is documented in medieval shepherd logs from the 14th century in the Bran castle pass."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which prized Romanian artisanal mountain sheep cheese is aged inside cylinders of fresh, resinous fir tree bark in the Rucăr-Bran region?",
          "options": [
            "Brânza de burduf în coajă de brad (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Telemeaua de vacă (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Urda dulce (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Cașul proaspăt (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)"
          ],
          "answerIndex": 0,
          "explanation": "Brânza de burduf în coajă de brad."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What natural brine source from Gurghiu Valley is used to cure and age the European-protected Telemea de Ibănești (PDO)?",
          "options": [
            "Apă de mare din Marea Neagră (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Sare iodată de masă (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Oțet distilat (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Saramura naturală din fântâna de apă sărată de la Orșova (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)"
          ],
          "answerIndex": 3,
          "explanation": "Saramura naturală din fântâna de apă sărată de la Orșova."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Carpathian transhumance created unique pastoral cheeses like fir-bark Burduf, infused with pine resins, and Ibănești Telemea aged in natural mountain brine.\"",
          "options": [
            "Transhumanța este un sistem feroviar de mare viteză. (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Coaja de brad este folosită pentru a ambala ciocolată elvețiană. (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Transhumanța carpatică a creat brânzeturi pastorale unice precum Burduful în coajă de brad, infuzat cu rășini de pin, și Telemeaua de Ibănești maturată în saramură naturală de munte. (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Telemeaua de Ibănești este un tip de înghețată de vanilie. (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)"
          ],
          "answerIndex": 2,
          "explanation": "Accurate Romanian artisanal cheese analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What virtually fat-free, protein-rich traditional Romanian cheese is produced by re-boiling the sweet whey (*zer*) left over from caș cheese making?",
          "options": [
            "Burduful (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Urda (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Brânza topită (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)",
            "Cașcavalul (C2 synthesis on Pastoral Heritage  Artisanal Cheeses)"
          ],
          "answerIndex": 1,
          "explanation": "Urda (Urdă).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Pastoral Heritage & Artisanal Cheeses"
  },
  "ro-u32-l1": {
    "id": "ro-u32-l1",
    "unit": "u32",
    "level": "C1",
    "objective": "Ion Luca Caragiale & Satira comică: O scrisoare pierdută (1884), demagogia politică, Tipătescu și Cetățeanul turmentat.",
    "presentation": {
      "explanation": "Ion Luca Caragiale (1852–1912) este dramaturgul canonic absolut al literaturii române și maestrul neegalat al comediei de moravuri, de caractere și de limbaj. În capodopera sa *O scrisoare pierdută* (reprezentată în premieră în 1884 la Teatrul Național din București), Caragiale realizează o radiografie necruțătoare a vieții politice provinciale din România sfârșitului de secol XIX. Mecanismul dramatic este declanșat de pierderea unei scrisori de dragoste compromițătoare trimise de prefectul Ștefan Tipătescu amantei sale Zoe Trahanache, soția venerabilului Zaharia Trahanache («nenea Zaharia»). Șantajul politic exercitat de avocatul Nae Cațavencu, discursurile sforăitoare pline de truisme și nonsensuri («unde nu e moral, acolo e corupție»), prezența emblematică a «Cetățeanului turmentat» (care votează docil întrebând mereu: «Eu cu cine votez?») și apariția oportunistului unsuros Agamemnon Dandanache construiesc o frescă satirică universală a demagogiei electorale.",
      "examples": [
        {
          "target": "Replica celebră a lui Trahanache, «Ai puțintică răbdare», a devenit o expresie proverbială în cultura română.",
          "reading": "Replica celebră a lui Trahanache, «Ai puțintică răbdare», a devenit o expresie proverbială în cultura română.",
          "translation": "Trahanache's famous line, \"Have a little patience\", became a proverbial expression in Romanian culture."
        },
        {
          "target": "Caragiale sancționează contrastul comic dintre pretențiile patriotice și corupția morală a personajelor sale.",
          "reading": "Caragiale sancționează contrastul comic dintre pretențiile patriotice și corupția morală a personajelor sale.",
          "translation": "Caragiale sanctions the comic contrast between patriotic pretensions and the moral corruption of his characters."
        }
      ],
      "mnemonics": [
        "Comedia caragialiană: Șantajul cu scrisoarea dezvăluie demagogia politică și comicul de limbaj («Curat murdar!»)."
      ],
      "culturalNotes": [
        "Teatrul Național din București îi poartă numele oficial: Teatrul Național «I. L. Caragiale», iar statuia dramaturgului veghează în fața clădirii."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este mecanismul declanșator al intrigii în piesa O scrisoare pierdută de Ion Luca Caragiale?",
          "options": [
            "O bătălie militară la granița imperiului.",
            "Pierderea și șantajul cu o scrisoare de amor între prefectul Tipătescu și Zoe Trahanache în plină campanie electorală.",
            "Construirea unei căi ferate prin munți.",
            "O crimă misterioasă la hanul din sat."
          ],
          "answerIndex": 1,
          "explanation": "Scrisoarea de dragoste pierdută devine instrumentul de șantaj politic dintre taberele rivale."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce personaj caragialian simbolizează alegătorul naiv și derutat prin întrebarea recurentă «Eu cu cine votez?»?",
          "options": [
            "Cetățeanul turmentat",
            "Farfuridi",
            "Brânzovenescu",
            "Ghiță Pristanda"
          ],
          "answerIndex": 0,
          "explanation": "Cetățeanul turmentat este alegătorul anonim manipulat de politicieni, dar care caută mereu să fie cinstit."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum își justifică polițaiul Ghiță Pristanda micile afaceri necurate cu steaguri în fața prefectului?",
          "options": [
            "Prin sintagma «Famelie mare, renumerație mică, după buget»",
            "Spunând că a moștenit o avere fabuloasă",
            "Pretinzând că este cetățean străin",
            "Afirmând că a donat toți banii școlii"
          ],
          "answerIndex": 0,
          "explanation": "Pristanda se scuză invocând familia numeroasă și leafa mică («după buget, coane Fănică»).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cine este candidatul trimis de la «centru» care câștigă în final mandatul de deputat în ciuda rivalităților locale?",
          "options": [
            "Agamemnon",
            "Nae Cațavencu",
            "Iordache Brânzovenescu",
            "Tache Farfuridi"
          ],
          "answerIndex": 0,
          "explanation": "Agamiță Dandanache este impostorul absolut trimis de la București, care deține la rândul său o scrisoare de șantaj.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Ion Luca Caragiale & Satira comică"
  },
  "ro-u32-l2": {
    "id": "ro-u32-l2",
    "unit": "u32",
    "level": "C1",
    "objective": "Eugen Ionescu / Eugène Ionesco & Teatrul Absurdului: Cântăreața cheală (1950), Rinocerii (1959) și Academia Franceză.",
    "presentation": {
      "explanation": "Eugen Ionescu (Eugène Ionesco, 1909–1994), născut la Slatina din tată român și mamă franceză, a revoluționat dramaturgia mondială a secolului XX ca părinte fondator al Teatrului Absurdului (alături de Samuel Beckett și Arthur Adamov). Debutând la Paris în 1950 cu *Cântăreața cheală* (*La Cantatrice chauve*, numită de autor «antipiesă»), Ionescu a descompus limbajul convențional burghez, arătând cum clișeele și truismele automate trădează vidul de comunicare și alienarea ființei umane. În capodopera sa antitotalitară *Rinocerii* (*Rhinocéros*, 1959), inspirată direct de ascensiunea mișcărilor fasciste și totalitare din anii 1930 din România și Europa, Ionescu dramatizează «rinocerizarea»—contagiunea colectivă și capitularea etică a intelectualilor în fața conformismului ideologic, lăsându-l pe personajul Bérenger ca ultim om solitar care refuză să capituleze («Nu voi abdica!»). În 1970, Ionescu a fost ales membru al prestigioasei Academii Franceze.",
      "examples": [
        {
          "target": "În Rinocerii, transformarea locuitorilor în fiare grohăitoare este o metaforă cutremurătoare a fanatismului politic.",
          "reading": "În Rinocerii, transformarea locuitorilor în fiare grohăitoare este o metaforă cutremurătoare a fanatismului politic.",
          "translation": "In Rhinoceros, the inhabitants' transformation into grunting beasts is a chilling metaphor for political fanaticism."
        },
        {
          "target": "Cântăreața cheală demonstrează cum limbajul golit de sens devine un mecanism automat fără gândire.",
          "reading": "Cântăreața cheală demonstrează cum limbajul golit de sens devine un mecanism automat fără gândire.",
          "translation": "The Bald Soprano demonstrates how language emptied of meaning becomes an automatic mechanism without thought."
        }
      ],
      "mnemonics": [
        "Ionesco și Absurdul: De la disoluția limbajului (Cântăreața cheală) la rezistența morală împotriva totalitarismului (Rinocerii)."
      ],
      "culturalNotes": [
        "*Cântăreața cheală* și *Lecția* se joacă neîntrerupt la Théâtre de la Huchette din Paris din 1957, deținând recordul mondial Guinness de longevitate teatrală."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce fenomen psihologic și politic descrie termenul «rinocerizare» în dramaturgia lui Eugen Ionescu?",
          "options": [
            "O epidemie veterinară în savana africană.",
            "Adeziunea oarbă, conformistă și fanatică a maselor și a intelectualilor la o ideologie totalitară.",
            "O metodă de antrenament pentru atleții olimpici.",
            "O tehnică de pictură suprarealistă cu vopsea verde."
          ],
          "answerIndex": 1,
          "explanation": "«Rinocerizarea» este metafora capitulării conștiinței umane în fața contagiunii ideologiilor totalitare."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Cine este protagonistul din Rinocerii care rămâne singurul om lucid și refuză să se transforme în rinocer?",
          "options": [
            "Bérenger",
            "Jean",
            "Domnul Smith",
            "Profesorul"
          ],
          "answerIndex": 0,
          "explanation": "Bérenger reprezintă conștiința individuală care rezistă presiunii uniformizatoare a turmei."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Cum a subintitulat Eugen Ionescu piesa sa de debut Cântăreața cheală (1950)?",
          "options": [
            "Antipiesă",
            "Dramă istorică în versuri",
            "Tragidramă religioasă",
            "Comedie muzicală"
          ],
          "answerIndex": 0,
          "explanation": "Ionescu a definit piesa ca «antipiesă» deoarece distrugea structura clasică de acțiune și personaje.",
          "type": "multiple-choice"
        },
        {
          "prompt": "În ce an a fost ales Eugen Ionescu membru al Academiei Franceze (Fotoliul 6)?",
          "options": [
            "1970",
            "1935",
            "1999",
            "1950"
          ],
          "answerIndex": 0,
          "explanation": "Ionescu a devenit «nemuritor» al Academiei Franceze în anul 1970.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Eugen Ionescu / Eugène Ionesco & Teatrul Absurdului"
  },
  "ro-u32-l3": {
    "id": "ro-u32-l3",
    "unit": "u32",
    "level": "C1",
    "objective": "Liviu Ciulei & Lucian Pintilie: Revoluția Teatrului Bulandra, montarea Revizorul (1972) și rezistența culturală.",
    "presentation": {
      "explanation": "Teatrul românesc din a doua jumătate a secolului XX a atins culmi de prestigiu internațional prin activitatea legendară de la Teatrul Lucia Sturdza Bulandra din București, condus de marele regizor, arhitect și scenograf Liviu Ciulei (1923–2011). Ciulei a promovat «reteatralizarea teatrului»—respingerea realismului socialist tern în favoarea unei forțe vizuale excepționale, a rigoarei arhitecturale a spațiului și a profunzimii metaforice. Alături de Ciulei, regizorul Lucian Pintilie (1933–2018) a creat montări explozive de o violență satirică incendiară. Scandalul politic din septembrie 1972 provocat de montarea lui Pintilie cu *Revizorul* de Gogol la Teatrul Bulandra (care a demascat grotescul aparatului birocratic comunist) a dus la interzicerea spectacolului după doar trei reprezentații, demiterea lui Ciulei de la conducerea teatrului și exilul artistic al amândurora în Occident, unde Ciulei a condus teatrul Guthrie din Minneapolis și a regizat pe marile scene din New York și Berlin.",
      "examples": [
        {
          "target": "Liviu Ciulei concepea scenografia ca pe o structură arhitecturală vie ce dictează mișcarea actorului.",
          "reading": "Liviu Ciulei concepea scenografia ca pe o structură arhitecturală vie ce dictează mișcarea actorului.",
          "translation": "Liviu Ciulei conceived stage design as a living architectural structure that dictates the actor's movement."
        },
        {
          "target": "Spectacolul Revizorul din 1972 a demonstrat forța teatrului ca spațiu de libertate spirituală împotriva cenzurii.",
          "reading": "Spectacolul Revizorul din 1972 a demonstrat forța teatrului ca spațiu de libertate spirituală împotriva cenzurii.",
          "translation": "The 1972 staging of The Government Inspector demonstrated the power of theatre as a space of spiritual freedom against censorship."
        }
      ],
      "mnemonics": [
        "Școala Bulandra: Ciulei (arhitectura viziunii) + Pintilie (energia contestatară radicală)."
      ],
      "culturalNotes": [
        "Liviu Ciulei a fost distins cu Premiul pentru Regie la Festivalul de Film de la Cannes în 1965 pentru capodopera cinematografică *Pădurea spânzuraților*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ce concept estetic a teoretizat și aplicat Liviu Ciulei pentru a elibera scena românească de dogmele realismului socialist?",
          "options": [
            "«Reteatralizarea teatrului», redând scenei convenția ludică, forța poetică și rigoarea spațială.",
            "Eliminarea totală a decorurilor și a costumelor.",
            "Obligativitatea ca toți actorii să fie recrutați din fabrici fără studii de teatru.",
            "Lectura statică a textelor de pe foi albe."
          ],
          "answerIndex": 0,
          "explanation": "Ciulei a redefinit teatrul ca artă vizuală autonomă, refuzând copierea servilă a realității cotidiene."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce piesă clasică montată de Lucian Pintilie la Teatrul Bulandra în 1972 a fost interzisă de cenzura comunistă după trei reprezentații?",
          "options": [
            "Revizorul de Nikolai Gogol",
            "Othello de William Shakespeare",
            "Pescărușul de Anton Cehov",
            "Faust de Goethe"
          ],
          "answerIndex": 0,
          "explanation": "*Revizorul* lui Pintilie din 1972 a fost perceput de autoritățile comuniste ca un atac direct la adresa regimului ceaușist."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce prestigios teatru american din Minneapolis a fost condus de Liviu Ciulei ca director artistic între 1980 și 1986?",
          "options": [
            "Guthrie Theater",
            "Broadway Majestic",
            "Actors Studio",
            "Chicago Steppenwolf"
          ],
          "answerIndex": 0,
          "explanation": "La Guthrie Theater, Ciulei a montat producții de referință cu Shakespeare, Cehov și Brecht aplaudate în toată America.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce film românesc regizat de Liviu Ciulei a câștigat Premiul de Regie la Cannes în 1965?",
          "options": [
            "Pădurea spânzuraților",
            "Reconstituirea",
            "Balanța",
            "Moara cu noroc"
          ],
          "answerIndex": 0,
          "explanation": "*Pădurea spânzuraților* (după romanul lui Liviu Rebreanu) a adus primul mare premiu de regie la Cannes pentru cinematografia română.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Liviu Ciulei & Lucian Pintilie"
  },
  "ro-u32-l4": {
    "id": "ro-u32-l4",
    "unit": "u32",
    "level": "C1",
    "objective": "Silviu Purcărete & Grandoarea Vizuală: Capodopera Faust la Teatrul Național Radu Stanca din Sibiu și FITS.",
    "presentation": {
      "explanation": "Silviu Purcărete (n. 1950) este recunoscut la nivel mondial drept unul dintre cei mai mari creatori de spectacol monumental și imagistică teatrală halucinantă. Producția sa magistrală cu *Faust* după Johann Wolfgang von Goethe (premieră în 2007 la Teatrul Național «Radu Stanca» din Sibiu, cu actorul Ilie Gheorghe / Miklós Bács în rolul lui Faust și Ofelia Popii într-un Mefisto genial și hermafrodit) a devenit un spectacol-fenomen internațional. Montat într-o hală industrială imensă din Sibiu cu peste 100 de actori, muzicieni, animale vii, pirotehnie și decoruri mobile create de Helmut Stürmer, spectacolul transformă Noaptea Valpurgiei într-un coșmar baroc dionisiac în care publicul este invitat să pășească fizic în infern. Acest Faust a consolidat Festivalul Internațional de Teatru de la Sibiu (FITS, fondat de Constantin Chiriac) ca al treilea cel mai important festival de artele spectacolului din lume, după Edinburgh și Avignon.",
      "examples": [
        {
          "target": "Ofelia Popii a creat în Faust un Mefisto androgin de o energie carnală și o virtuozitate fizică copleșitoare.",
          "reading": "Ofelia Popii a creat în Faust un Mefisto androgin de o energie carnală și o virtuozitate fizică copleșitoare.",
          "translation": "Ofelia Popii created in Faust an androgynous Mephisto of overwhelming carnal energy and physical virtuosity."
        },
        {
          "target": "Faust-ul lui Purcărete scufundă spectatorul direct în tumultul carnavalesc al Nopții Valpurgiei.",
          "reading": "Faust-ul lui Purcărete scufundă spectatorul direct în tumultul carnavalesc al Nopții Valpurgiei.",
          "translation": "Purcărete's Faust immerses the spectator directly into the carnivalesque turmoil of Walpurgis Night."
        }
      ],
      "mnemonics": [
        "Purcărete Faust Sibiu: Peste 100 de actori, Mefisto hermafrodit (Ofelia Popii) și hală industrială transformată în univers dantesc."
      ],
      "culturalNotes": [
        "Spectacolul *Faust* a fost aclamat ca atracția de vârf a Festivalului Internațional de la Edinburgh în 2009, primind cronici elogioase în *The Guardian* și *The Times*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este inovația spațială radicală pe care o trăiește publicul în timpul spectacolului Faust regizat de Silviu Purcărete la Sibiu?",
          "options": [
            "Spectatorii rămân legați la ochi pe tot parcursul serii.",
            "După prima parte, publicul este ridicat de pe scaune și condus direct în spațiul imens al Nopții Valpurgiei printre actori, foc și demoni.",
            "Spectacolul se vizionează doar printr-un ecran de televizor mic.",
            "Publicul este așezat pe bărci gonflabile într-o piscină."
          ],
          "answerIndex": 1,
          "explanation": "Spectatorii devin participanți imersivi în călătoria faustică, trecând dintr-o sală intimă în spațiul halucinant al Nopții Valpurgiei."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce mare festival românesc de teatru, clasat printre primele trei din lume ca anvergură, are spectacolul Faust ca emblemă?",
          "options": [
            "Festivalul Internațional de Teatru de la Sibiu",
            "Festivalul Național de Teatru București",
            "Festivalul de la Sighișoara",
            "Gala Tânărului Actor HOP"
          ],
          "answerIndex": 0,
          "explanation": "FITS atrage la Sibiu anual mii de artiști și sute de mii de spectatori din peste 70 de țări."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce actriță a câștigat Premiul UNITER pentru cel mai bun rol principal feminin pentru interpretarea electrizantă a lui Mefisto în Faust?",
          "options": [
            "Ofelia Popii",
            "Maia Morgenstern",
            "Mariana Mihuț",
            "Rodica Mandache"
          ],
          "answerIndex": 0,
          "explanation": "Ofelia Popii a oferit o interpretare istorică rolului Mefisto în viziunea lui Silviu Purcărete.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cine a semnat scenografia monumentală și concepția spațiului pentru Faust la Teatrul Național din Sibiu?",
          "options": [
            "Helmut Stürmer",
            "Liviu Ciulei",
            "Ion Sava",
            "Dan Perjovschi"
          ],
          "answerIndex": 0,
          "explanation": "Helmut Stürmer a creat decorurile și universul vizual grandios al spectacolului.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Silviu Purcărete & Grandoarea Vizuală"
  },
  "ro-u32-l5": {
    "id": "ro-u32-l5",
    "unit": "u32",
    "level": "C1",
    "objective": "Teatrul Contemporan Românesc: Radu Afrim, Gianina Cărbunariu, teatrul postdramatic și Teatrul Național București.",
    "presentation": {
      "explanation": "Dramaturgia și regia contemporană din România se remarcă prin două direcții majore de forță: universul poetic-senzorial postdramatic al lui Radu Afrim (n. 1968) și teatrul politic documentar investigativ fondat de Gianina Cărbunariu (n. 1977). Radu Afrim creează spectacole hipnotice, melancolice și intens vizuale la Teatrul Național din București (TNB) și în teatrele din țară (*Pădurea spânzuraților*, *Trei surori*, *Repetiție pentru o lume mai bună*), amestecând muzică live indie, proiecții video poetice, umor bizar și vulnerabilitate umană crudă. În paralel, Gianina Cărbunariu (*Stop the Tempo*, *Kebab*, *Tipografic Majuscul*) utilizează dosarele securității, interviuri reale și documente de arhivă pentru a interoga traumele tranziției postcomuniste, exploatarea migranților și complicitățile morale colective, piesele ei fiind traduse și montate pe scene de referință din Germania, Franța și Marea Britanie.",
      "examples": [
        {
          "target": "Spectacolele lui Radu Afrim îmbină teatralitatea barocă cu sensibilitatea cinematografică contemporană.",
          "reading": "Spectacolele lui Radu Afrim îmbină teatralitatea barocă cu sensibilitatea cinematografică contemporană.",
          "translation": "Radu Afrim's productions combine baroque theatricality with contemporary cinematic sensibility."
        },
        {
          "target": "În Tipografic Majuscul, Gianina Cărbunariu reconstituie povestea elevului Mugur Călinescu din dosarele Securității.",
          "reading": "În Tipografic Majuscul, Gianina Cărbunariu reconstituie povestea elevului Mugur Călinescu din dosarele Securității.",
          "translation": "In Upper Case Print, Gianina Cărbunariu reconstructs the story of high-schooler Mugur Călinescu from Securitate files."
        }
      ],
      "mnemonics": [
        "Teatru contemporan românesc: Afrim (univers poetic și vizual hipnotic) + Cărbunariu (teatru documentar politic)."
      ],
      "culturalNotes": [
        "Clădirea Teatrului Național «I. L. Caragiale» din București a fost reconsolidată între 2011 și 2015, readucând la lumină fațada originală a anilor 1970 și adăugând un amfiteatru în aer liber pe acoperiș."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este metoda de lucru caracteristică a dramaturgului și regizorului Gianina Cărbunariu?",
          "options": [
            "Documentarea riguroasă pe bază de dosare de arhivă, interviuri pe teren și fenomene socio-politice fierbinți.",
            "Scrierea de comedii bufe medievale în versuri cu rimă împerecheată.",
            "Traducerea exclusivă a operelor lui William Shakespeare.",
            "Pantomima fără cuvinte acompaniată de orgă mecanică."
          ],
          "answerIndex": 0,
          "explanation": "Cărbunariu este pioniera teatrului documentar în România, aducând realitatea socială direct pe scenă."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce spectacol-manifest regizat de Radu Afrim la Sala Mare a TNB a reinterpretat romanul lui Liviu Rebreanu prin prisma tinerilor de azi și a războiului?",
          "options": [
            "Pădurea spânzuraților",
            "Ion",
            "Răscoala",
            "Enigma Otiliei"
          ],
          "answerIndex": 0,
          "explanation": "*Pădurea spânzuraților* în viziunea lui Afrim a devenit un spectacol-eveniment despre absurditatea conflictului și fragilitatea vieții."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Despre ce adolescent curajos din Botoșani care scria lozinci anticomuniste pe ziduri tratează piesa Tipografic Majuscul de Gianina Cărbunariu?",
          "options": [
            "Mugur Călinescu",
            "Gheorghe Ursu",
            "Doina Cornea",
            "Liviu Babeș"
          ],
          "answerIndex": 0,
          "explanation": "Mugur Călinescu a fost elevul de 16 ani persecutat necruțător de Securitate pentru că a scris mesaje de libertate cu cretă.",
          "type": "multiple-choice"
        },
        {
          "prompt": "De câte ori a câștigat regizorul Radu Afrim prestigiosul premiu UNITER pentru cea mai bună regie?",
          "options": [
            "De 3 ori",
            "Niciodată",
            "O singură dată",
            "De 15 ori"
          ],
          "answerIndex": 0,
          "explanation": "Radu Afrim a fost distins de trei ori cu Premiul UNITER pentru Regie pentru montările sale vizionare.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Teatrul Contemporan Românesc"
  },
  "ro-u33-l1": {
    "id": "ro-u33-l1",
    "unit": "u33",
    "level": "C1",
    "objective": "Bisericile de lemn din Maramureș: Patrimoniul UNESCO (Bârsana, Ieud), meșteșugul stejarului și turnurile ascuțite.",
    "presentation": {
      "explanation": "Bisericile de lemn din Maramureș (dintre care opt sunt înscrise pe lista Patrimoniului Mondial UNESCO: Bârsana, Budești Josani, Desești, Ieud Deal, Plopiș, Poienile Izei, Rogoz și Șurdești) reprezintă culmea absolută a arhitecturii vernaculare în lemn din Europa. Ridicate de meșteri populari anonimi («meșterii lemnari») fără a utiliza cuie de fier, exclusiv prin tehnica îmbinărilor măiestrite din bârne groase de stejar și molid (îmbinare în coadă de rândunică și cheotoare), aceste lăcașuri se caracterizează prin turle zvelte și extrem de înalte cu foișor și fleșă ascuțită, acoperișuri abrupte cu poale duble acoperite cu șindrilă de brad (draniță). Turnul bisericii din Șurdești (54 de metri înălțime a turnului, 72 de metri înălțime totală) a fost mult timp cea mai înaltă construcție de lemn din Europa. În interior, picturile murale pe pânză maruflată pe lemn executate de zugravi itineranți precum Alexandru Ponehalschi și Radu Munteanu transpun teme biblice în viața satului maramureșean.",
      "examples": [
        {
          "target": "Biserica din Ieud Deal este considerată una dintre cele mai vechi biserici de lemn din Maramureș.",
          "reading": "Biserica din Ieud Deal este considerată una dintre cele mai vechi biserici de lemn din Maramureș.",
          "translation": "The church in Ieud Deal is considered one of the oldest wooden churches in Maramureș."
        },
        {
          "target": "Tehnica îmbinării bârnelor de stejar fără cuie demonstrează geniul meșterilor maramureșeni.",
          "reading": "Tehnica îmbinării bârnelor de stejar fără cuie demonstrează geniul meșterilor maramureșeni.",
          "translation": "The technique of joining oak beams without nails demonstrates the genius of Maramureș carpenters."
        }
      ],
      "mnemonics": [
        "Arhitectura Maramureșului: Bârne masive de stejar + îmbinare în coadă de rândunică + turn ascuțit spre cer."
      ],
      "culturalNotes": [
        "În podul bisericii din Ieud Deal a fost descoperit în 1921 «Codicele de la Ieud», considerat de unii filologi cel mai vechi text scris în limba română (datat 1391 sau sfârșitul secolului XVI)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este materialul de construcție exclusiv și tehnica de îmbinare a bisericilor de lemn din Maramureș?",
          "options": [
            "Bârne masive de stejar îmbinate în cheotoare și coadă de rândunică, fără cuie de fier.",
            "Cărămizi arse legate cu ciment modern.",
            "Blocuri de marmură albă sculptată.",
            "Foi de tablă ondulată montate pe schelet de aluminiu."
          ],
          "answerIndex": 0,
          "explanation": "Tradiția interzicea folosirea metalului, meșterii utilizând doar cuie din lemn de tisă și îmbinări perfecte."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce element arhitectural exterior conferă siluetei bisericilor maramureșene verticalitatea spectaculoasă?",
          "options": [
            "O turlă-clopotniță extrem de ascuțită și înaltă, înălțată deasupra pronaosului, cu acoperiș dublu din șindrilă.",
            "Un dom bizantin sferic din cupru aurit.",
            "O terasă plată cu fântâni arteziene.",
            "Un turn de veghe crenelat din granit roșu."
          ],
          "answerIndex": 0,
          "explanation": "Turlele ascuțite străpung cerul și dau identitatea vizuală inconfundabilă a peisajului maramureșean."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Câte biserici de lemn din Maramureș sunt incluse în Patrimoniul Mondial UNESCO?",
          "options": [
            "8 biserici",
            "2 biserici",
            "50 de biserici",
            "12 biserici"
          ],
          "answerIndex": 0,
          "explanation": "Opt biserici de lemn maramureșene au fost selectate pe lista UNESCO pentru valoarea lor universală excepțională.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Care biserică maramureșeană de lemn din patrimoniul UNESCO atinge o înălțime totală impresionantă de 72 de metri?",
          "options": [
            "Biserica «Sfinții Arhangheli» din Șurdești",
            "Biserica din Voroneț",
            "Mănăstirea Cozia",
            "Biserica Neagră din Brașov"
          ],
          "answerIndex": 0,
          "explanation": "Turnul din Șurdești a fost timp de secole cea mai înaltă structură de lemn cu turn din Europa.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Bisericile de lemn din Maramureș"
  },
  "ro-u33-l2": {
    "id": "ro-u33-l2",
    "unit": "u33",
    "level": "C1",
    "objective": "Mănăstirile pictate din Bucovina: Albastrul de Voroneț (1488), frescele exterioare, Humor și Moldovița.",
    "presentation": {
      "explanation": "Mănăstirile cu pictură murală exterioară din Bucovina (nordul Moldovei, înscrise în Patrimoniul Mondial UNESCO: Voroneț, Humor, Moldovița, Sucevița, Arbore, Pătrăuți, Probota) reprezintă o manifestare artistică unică în arta bizantină și europeană din secolele XV–XVI. Ctitorită de domnitorul Ștefan cel Mare în 1488 în urma unei victorii împotriva otomanilor și extinsă de mitropolitul Grigorie Roșca în 1547, Mănăstirea Voroneț este supranumită «Capela Sixtină a Estului». Pereții exteriori sunt acoperiți integral cu fresce de o rigoare teologică și compozițională uimitoare, create pentru a educa poporul și armata. Pe peretele vestic de la Voroneț se desfășoară monumentalul *Judecata de Apoi*, realizat pe fundalul inegalabilului «Albastru de Voroneț»—un pigment mineral strălucitor și misterios a cărui rețetă secretă rezistă de peste 470 de ani intemperiilor.",
      "examples": [
        {
          "target": "Fresca Judecata de Apoi de la Voroneț include instrumente muzicale tradiționale românești precum buciumul.",
          "reading": "Fresca Judecata de Apoi de la Voroneț include instrumente muzicale tradiționale românești precum buciumul.",
          "translation": "The Last Judgment fresco at Voroneț includes traditional Romanian musical instruments like the bucium."
        },
        {
          "target": "Mănăstirea Sucevița impresionează prin fresca monumentală Scara Virtuților pictată pe fațada nordică.",
          "reading": "Mănăstirea Sucevița impresionează prin fresca monumentală Scara Virtuților pictată pe fațada nordică.",
          "translation": "Sucevița Monastery impresses with the monumental Ladder of Virtues fresco painted on its northern facade."
        }
      ],
      "mnemonics": [
        "Frescele din Bucovina: Voroneț (albastru azurit), Humor (roșu cărămiziu), Moldovița (galben solar), Sucevița (verde smarald)."
      ],
      "culturalNotes": [
        "Ștefan cel Mare a ridicat 44 de biserici și mănăstiri, conform tradiției câte un lăcaș de cult după fiecare bătălie purtată pentru apărarea Moldovei."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este celebra compoziție iconografică ce ocupă întregul perete vestic fără ferestre al Mănăstirii Voroneț?",
          "options": [
            "Judecata de Apoi",
            "Facerea Lumii",
            "Turnul Babel",
            "Nunta din Cana Galileii"
          ],
          "answerIndex": 0,
          "explanation": "*Judecata de Apoi* de la Voroneț este considerată o capodoperă a artei universale prin dramatismul și cromatica sa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce nuanță cromatică unică stă la baza faimei mondiale a frescelor Mănăstirii Voroneț?",
          "options": [
            "Albastrul de Voroneț",
            "Negrul de cărbune de fag",
            "Rozul fosforescent",
            "Auriul cu sclipici"
          ],
          "answerIndex": 0,
          "explanation": "Albastrul de Voroneț a rămas nealterat timp de secole în ciuda ploilor, gerului și soarelui."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce mare domnitor al Moldovei a ctitorit Mănăstirea Voroneț în anul 1488 în doar 3 luni și 3 săptămâni?",
          "options": [
            "Ștefan cel Mare",
            "Mihai Viteazul",
            "Alexandru Lăpușneanu",
            "Mircea cel Bătrân"
          ],
          "answerIndex": 0,
          "explanation": "Ștefan cel Mare a ridicat Voronețul la îndemnul duhovnicului său, Sihastrul Daniil.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cum este supranumită Mănăstirea Voroneț datorită splendidei sale fresce exterioare?",
          "options": [
            "Capela Sixtină a Estului",
            "Catedrala de Cristal",
            "Sanctuarul Munților",
            "Acro отображение Nordului"
          ],
          "answerIndex": 0,
          "explanation": "Datorită geniului compoziției și culorilor, Voronețul este numit Capela Sixtină a Estului.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Mănăstirile pictate din Bucovina"
  },
  "ro-u33-l3": {
    "id": "ro-u33-l3",
    "unit": "u33",
    "level": "C1",
    "objective": "Arhitectura Brâncovenească: Palatul Mogoșoaia (1702), Mănăstirea Horezu, foișorul și Renașterea românească.",
    "presentation": {
      "explanation": "Stilul Brâncovenesc (sau «Renașterea Românească»), dezvoltat în Țara Românească în timpul domniei voievodului martir Constantin Brâncoveanu (1688–1714), este singurul stil arhitectural autohton de sinteză majoră din istoria României. Născut la confluența dintre tradiția bizantină orientală, decorația florală otomană și elementele Renașterii italiene și Barocului venețian, stilul se remarcă prin echilibru, rafinament și armonie. Elementele sale distinctive includ: foișorul deschis cu arcade trilobate sprijinite pe coloane de piatră sculptată cu capiteluri corintice, scările exterioare monumentale, ancadramentele sculptate în piatră cu motive vegetale (frunze de acant, struguri, rodii) și utilizarea cărămizii aparente. Capodoperele acestui stil sunt Palatul Mogoșoaia (1702, reședința de vară de lângă București) și Mănăstirea Horezu (1690–1693, UNESCO), cel mai vast și reprezentativ complex monastic brâncovenesc.",
      "examples": [
        {
          "target": "Foișorul Palatului Mogoșoaia se deschide spre lac printr-o loggie venețiană din piatră fin sculptată.",
          "reading": "Foișorul Palatului Mogoșoaia se deschide spre lac printr-o loggie venețiană din piatră fin sculptată.",
          "translation": "The gazebo of Mogoșoaia Palace opens towards the lake through a finely carved Venetian stone loggia."
        },
        {
          "target": "Mănăstirea Horezu este considerată capodopera absolută a stilului brâncovenesc în arta sacră.",
          "reading": "Mănăstirea Horezu este considerată capodopera absolută a stilului brâncovenesc în arta sacră.",
          "translation": "Horezu Monastery is considered the absolute masterpiece of the Brâncovenesc style in sacred art."
        }
      ],
      "mnemonics": [
        "Stilul Brâncovenesc: Foișor cu arcade trilobate + coloane sculptate în piatră + motive florale renascentisto-orientale."
      ],
      "culturalNotes": [
        "Constantin Brâncoveanu și cei patru fii ai săi au fost martirizați la Constantinopol pe 15 august 1714 pentru refuzul de a renunța la credința creștină."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este elementul arhitectural emblematic al fațadelor în stil brâncovenesc?",
          "options": [
            "Foișorul (loggia)",
            "Un pod mobil din fier cu turnuri de apărare romane.",
            "O cupolă geodezică din sticlă modernă.",
            "Pereți opaci fără uși sau ferestre."
          ],
          "answerIndex": 0,
          "explanation": "Foișorul brâncovenesc oferă deschidere și eleganță palatelor și chiliilor mănăstirești."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce mănăstire din județul Vâlcea, ctitorită de Constantin Brâncoveanu, este inclusă în Patrimoniul Mondial UNESCO?",
          "options": [
            "Mănăstirea Horezu",
            "Mănăstirea Curtea de Argeș",
            "Mănăstirea Putna",
            "Mănăstirea Tismana"
          ],
          "answerIndex": 0,
          "explanation": "Mănăstirea Horezu este cel mai complet ansamblu de arhitectură brâncovenească păstrat."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "În ce an a fost finalizat Palatul Mogoșoaia de lângă București ca reședință pentru fiul lui Brâncoveanu, Ștefan?",
          "options": [
            "1702",
            "1850",
            "1600",
            "1920"
          ],
          "answerIndex": 0,
          "explanation": "Palatul Mogoșoaia a fost desăvârșit în anul 1702 pe malul lacului Mogoșoaia.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce mișcare arhitecturală de la începutul secolului XX (Ion Mincu, Petre Antonescu) a reinterpretat elementele stilului brâncovenesc?",
          "options": [
            "Stilul Neoromânesc",
            "Brutalismul socialist",
            "Art Deco bucureștean",
            "Cubismul funcționalist"
          ],
          "answerIndex": 0,
          "explanation": "Stilul Neoromânesc a preluat foișoarele, arcadele și sculptura în piatră brâncovenească în clădirile moderne.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Arhitectura Brâncovenească"
  },
  "ro-u33-l4": {
    "id": "ro-u33-l4",
    "unit": "u33",
    "level": "C1",
    "objective": "Ansamblul Sculptural Constantin Brâncuși de la Târgu Jiu: Coloana Infinitului, Poarta Sărutului și Masa Tăcerii.",
    "presentation": {
      "explanation": "Constantin Brâncuși (1876–1957), născut la Hobița (Gorj) și stabilit la Paris, este părintele sculpturii moderne universale. Între 1937 și 1938, Brâncuși a revenit în România pentru a realiza singurul său ansamblu monumental de for public în aer liber: Ansamblul sculptural de la Târgu Jiu, închinat memoriei eroilor căzuți în Primul Război Mondial (inclus în Patrimoniul Mondial UNESCO în 2024). Dispuse de-a lungul unei axe est-vest de 1,5 kilometri («Calea Eroilor»), cele trei capodopere marchează un itinerar simbolic al destinului uman: *Masa Tăcerii* (calcar circular înconjurat de 12 scaune în formă de clepsidră, simbolizând timpul și comuniunea înainte de bătălie), *Aleea Scaunelor*, *Poarta Sărutului* (arcul de triumf al iubirii și biruinței vieții asupra morții) și *Coloana fără Sfârșit* (*Coloana Infinitului*—un ax vertical de 29,33 metri compus din 15 moduli octaedrici din fontă alămită, reprezentând o scară a sufletelor spre infinit și înălțarea eternă a spiritului).",
      "examples": [
        {
          "target": "Coloana Infinitului a fost descrisă de Brâncuși ca un cântec etern al recunoștinței față de sacrificiul eroilor.",
          "reading": "Coloana Infinitului a fost descrisă de Brâncuși ca un cântec etern al recunoștinței față de sacrificiul eroilor.",
          "translation": "The Endless Column was described by Brâncuși as an eternal song of gratitude for the heroes' sacrifice."
        },
        {
          "target": "Motivele ochilor îmbrățișați de pe stâlpii Porții Sărutului sintetizează fuziunea a două ființe într-una singură.",
          "reading": "Motivele ochilor îmbrățișați de pe stâlpii Porții Sărutului sintetizează fuziunea a două ființe într-una singură.",
          "translation": "The motifs of embracing eyes on the Kiss Gate pillars synthesize the fusion of two beings into one."
        }
      ],
      "mnemonics": [
        "Axa Brâncuși Târgu Jiu: Masa Tăcerii (pregătire) -> Poarta Sărutului (trecere) -> Coloana Infinitului (înălțare spre cer)."
      ],
      "culturalNotes": [
        "În anii 1950, autoritățile staliniste locale au încercat să dărâme Coloana Infinitului cu un tractor legat cu lanțuri, considerând-o «artă decadentă burgheză», dar structura din oțel a rezistat intactă."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care este succesiunea pe axa urbană a celor trei monumente majore create de Constantin Brâncuși la Târgu Jiu?",
          "options": [
            "Masa Tăcerii, Poarta Sărutului și Coloana Infinitului.",
            "Coloana Infinitului, Sfinxul din Bucegi și Palatul Parlamentului.",
            "Poarta Sărutului, Castelul Bran și Cetatea Neamțului.",
            "Masa Tăcerii, Arcul de Triumf și Biserica Neagră."
          ],
          "answerIndex": 0,
          "explanation": "Ansamblul este dispus de-a lungul Căii Eroilor din parcul de pe malul Jiului până în parcul Coloanei."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ce formă geometrică modulară repetată alcătuiește trunchiul Coloanei fără Sfârșit a lui Brâncuși?",
          "options": [
            "Module octaedrice (romboidale)",
            "Sfere perfecte din sticlă transparentă.",
            "Cuburi din lemn de nuc legate cu funii.",
            "Piramide egiptene inversate din argint."
          ],
          "answerIndex": 0,
          "explanation": "Modulele romboidale de fontă creează senzația de pulsație și înălțare ritmică nesfârșită spre cer."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "În ce an a fost înscris Ansamblul monumental Constantin Brâncuși de la Târgu Jiu în Patrimoniul Mondial UNESCO?",
          "options": [
            "2024",
            "1970",
            "1900",
            "1945"
          ],
          "answerIndex": 0,
          "explanation": "În iulie 2024, UNESCO a recunoscut oficial valoarea universală excepțională a capodoperei lui Brâncuși de la Târgu Jiu.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ce simbolizează cele 12 scaune rotunde din piatră așezate în jurul Mesei Tăcerii?",
          "options": [
            "Cele 12 luni ale anului și cele 12 ore de pe cadranul timpului.",
            "12 triburi de nomazi.",
            "12 regi ai Franței.",
            "12 vagoane de tren."
          ],
          "answerIndex": 0,
          "explanation": "Scaunele-clepsidră evocă scurgerea timpului și meditația tăcută în fața destinului.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Ansamblul Sculptural Constantin Brâncuși de la Târgu Jiu"
  },
  "ro-u33-l5": {
    "id": "ro-u33-l5",
    "unit": "u33",
    "level": "C1",
    "objective": "Castelul Peleș & Pelișor: Renașterea montană a Carpaților, Regele Carol I, Schöngrün și Sinaia.",
    "presentation": {
      "explanation": "Castelul Peleș din Sinaia (construit între 1873 și 1914 la inițiativa primului rege al României, Carol I de Hohenzollern-Sigmaringen) este una dintre cele mai spectaculoase și rafinate reședințe regale din Europa, reprezentând o capodoperă a stilului Neorenaștere germană cu influențe gotice și alpine. Proiectat de arhitecții Johannes Schultz, Carol Benesch și Karel Liman, Peleșul îmbină armonios bârnele aparente (*Fachwerk*), turnurile zvelte, terasele italiene din piatră împodobite cu statui de Raffaello Romanelli și decorațiunile interioare somptuoase din lemn sculptat (Sala Armelor, Sala Florentină, Sala Maura). Peleșul a fost cel mai modern castel al epocii sale: a fost primul castel complet electrificat din Europa (cu uzină electrică proprie), dotat cu încălzire centrală, lift și plafon mobil din vitralii acționat electric. În apropiere se află Castelul Pelișor (1899–1902), decorat în stil Art Nouveau vienez de arhitectul Bernhard Ludwig pentru Regina Maria.",
      "examples": [
        {
          "target": "Castelul Peleș a fost inaugurat oficial în 1883 ca reședință regală de vară.",
          "reading": "Castelul Peleș a fost inaugurat oficial în 1883 ca reședință regală de vară.",
          "translation": "Peleș Castle was officially inaugurated in 1883 as a royal summer residence."
        },
        {
          "target": "Camera de Aur din Castelul Pelișor a fost concepută după viziunea artistică Art Nouveau a Reginei Maria.",
          "reading": "Camera de Aur din Castelul Pelișor a fost concepută după viziunea artistică Art Nouveau a Reginei Maria.",
          "translation": "The Golden Room in Pelișor Castle was designed according to Queen Marie's Art Nouveau artistic vision."
        }
      ],
      "mnemonics": [
        "Domeniul Regal Sinaia: Peleș (grandoare Neorenaștere germană) + Pelișor (intimitate Art Nouveau a Reginei Maria)."
      ],
      "culturalNotes": [
        "Colecția de arme a Castelului Peleș numără peste 4.000 de piese istorice, incluzând o armură completă de cavaler și cal unică în România."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Care rege al României a comandat construirea Castelului Peleș la Sinaia ca reședință de vară a dinastiei?",
          "options": [
            "Regele Carol I",
            "Regele Mihai I",
            "Regele Ferdinand I",
            "Regele Carol al II-lea"
          ],
          "answerIndex": 0,
          "explanation": "Carol I a fost fermecat de sălbăticia Munților Bucegi și a decis ridicarea castelului în 1873."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Prin ce inovație tehnologică revoluționară a rămas Castelul Peleș în istoria reședințelor europene de la sfârșitul secolului XIX?",
          "options": [
            "A fost primul castel din Europa complet electrificat, având propria uzină hidroelectrică.",
            "A fost construit în întregime din sticlă securizată subacvatic.",
            "A funcționat pe bază de motoare cu abur pentru deplasare pe șine.",
            "A fost luminat doar cu torțe din rășină de brad fără ferestre."
          ],
          "answerIndex": 0,
          "explanation": "Peleșul beneficia de electricitate, încălzire centralizată și plafon mobil din vitralii acționat electric."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "În ce stil arhitectural și decorativ de la 1900 este amenajat interiorul Castelului Pelișor de lângă Peleș?",
          "options": [
            "Art Nouveau",
            "Gotic pur medieval",
            "Baroc francez ca la Versailles",
            "Brutalism modern"
          ],
          "answerIndex": 0,
          "explanation": "Regina Maria și arhitectul Bernhard Ludwig au creat la Pelișor o bijuterie Art Nouveau.",
          "type": "multiple-choice"
        },
        {
          "prompt": "În ce lanț muntos spectaculos din România se află amplasat domeniul regal Peleș?",
          "options": [
            "Munții Bucegi",
            "Munții Apuseni",
            "Munții Rodnei",
            "Munții Măcin"
          ],
          "answerIndex": 0,
          "explanation": "Castelul Peleș este situat în valea râului Peleș la poalele maiestuoase ale Munților Bucegi.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Castelul Peleș & Pelișor"
  },
  "ro-u34-l1": {
    "id": "ro-u34-l1",
    "subject": "romanian",
    "unit": 34,
    "lessonNumber": 1,
    "title": "Diplomatic Credentials, State Protocol & Bilateral Treaties",
    "level": "C2",
    "objective": "Diplomatic Credentials, State Protocol & Bilateral Treaties (Scrisorile de Acreditare și Protocolul Diplomatic).",
    "presentation": {
      "explanation": "La nivelul C2 în limba română diplomatică, se aprofundează normele de protocol ale Ministerului Afacerilor Externe (Palatul Victoria și Palatul Cotroceni), prezentarea scrisorilor de acreditare (*scrisorile de acreditare*), acordarea agrementului (*agrementul diplomatic*) și redactarea notelor verbale oficiale.",
      "examples": [
        {
          "target": "Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.",
          "reading": "Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.",
          "translation": "The Ambassador Extraordinary and Plenipotentiary presented his credentials at Cotroceni Palace."
        },
        {
          "target": "Ministerul Afacerilor Externe a transmis nota verbală privind acordarea agrementului oficial.",
          "reading": "Ministerul Afacerilor Externe a transmis nota verbală privind acordarea agrementului oficial.",
          "translation": "The Ministry of Foreign Affairs transmitted the note verbale regarding the granting of official agrément."
        }
      ],
      "mnemonics": [
        "\"Acreditare\" provine din verbul latin \"accredere\" (a încredința / a conferi împuternicire oficială)."
      ],
      "culturalNotes": [
        "Palatul Cotroceni din București este reședința oficială a Președintelui României unde se desfășoară ceremoniile de primire a ambasadorilor străini."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: Diplomatic Credentials, State Protocol & Bilateral Treaties (Scrisorile de Acreditare și Protocolul Diplomatic).",
          "targetPhrase": "Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.",
          "expectedKeywords": [
            "Ambasadorul",
            "extraordinar"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: Diplomatic Credentials, State Protocol & Bilateral Treaties (Scrisorile de Acreditare și Protocolul Diplomatic).",
          "targetPhrase": "Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.",
          "expectedKeywords": [
            "Ambasadorul",
            "extraordinar"
          ],
          "explanation": "Correct answer: \"Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.\". This directly applies the principle of: Diplomatic Credentials, State Protocol & Bilateral Treaties (Scrisorile de Acreditare și Protocolul Diplomatic).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este documentul oficial prezentat de un ambasador nou numit Președintelui României?",
          "options": [
            "Adeverința de angajare provizorie",
            "Chitanța consulară",
            "Pașaportul simplu turistic",
            "Scrisorile de acreditare"
          ],
          "answerIndex": 3,
          "explanation": "Scrisorile de acreditare atestă rangul și mandatul oficial al ambasadorului.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: Diplomatic Credentials, State Protocol & Bilateral Treaties (Scrisorile de Acreditare și Protocolul Diplomatic).",
          "targetPhrase": "Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.",
          "expectedKeywords": [
            "Ambasadorul",
            "extraordinar"
          ],
          "explanation": "Correct answer: \"Ambasadorul extraordinar și plenipotențiar a prezentat scrisorile de acreditare la Palatul Cotroceni.\". This directly applies the principle of: Diplomatic Credentials, State Protocol & Bilateral Treaties (Scrisorile de Acreditare și Protocolul Diplomatic).."
        }
      ]
    }
  },
  "ro-u34-l2": {
    "id": "ro-u34-l2",
    "subject": "romanian",
    "unit": 34,
    "lessonNumber": 2,
    "title": "Multilateral Treaties, EU Acceding Protocols & Ratification",
    "level": "C2",
    "objective": "Multilateral Treaties, EU Acceding Protocols & Ratification (Tratate Multilaterale și Ratificare Parlamentară).",
    "presentation": {
      "explanation": "Analiza terminologiei juridice a dreptului tratatelor: instrumentul de ratificare (*instrumentul de ratificare*), depunerea la depozitar (*depunerea instrumentelor*), formularea de rezerve și intrarea în vigoare.",
      "examples": [
        {
          "target": "Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.",
          "reading": "Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.",
          "translation": "Parliament adopted the law of ratification of the international treaty on cybersecurity."
        },
        {
          "target": "Instrumentul oficial de ratificare a fost depus la Secretariatul General al ONU.",
          "reading": "Instrumentul oficial de ratificare a fost depus la Secretariatul General al ONU.",
          "translation": "The official instrument of ratification was deposited with the UN Secretariat General."
        }
      ],
      "mnemonics": [
        "\"Ratificare\" înseamnă confirmarea și validarea solemnă a unui tratat de către forul legislativ suprem."
      ],
      "culturalNotes": [
        "În România, tratatele internaționale ratificate de Parlament fac parte din dreptul intern conform Constituției."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: Multilateral Treaties, EU Acceding Protocols & Ratification (Tratate Multilaterale și Ratificare Parlamentară).",
          "targetPhrase": "Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.",
          "expectedKeywords": [
            "Parlamentul",
            "a"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: Multilateral Treaties, EU Acceding Protocols & Ratification (Tratate Multilaterale și Ratificare Parlamentară).",
          "targetPhrase": "Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.",
          "expectedKeywords": [
            "Parlamentul",
            "a"
          ],
          "explanation": "Correct answer: \"Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.\". This directly applies the principle of: Multilateral Treaties, EU Acceding Protocols & Ratification (Tratate Multilaterale și Ratificare Parlamentară).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce for constituțional are competența de a ratifica tratatele internaționale semnate în numele României?",
          "options": [
            "Consiliul Local Municipal",
            "Camera de Comerț Locală",
            "Parlamentul României",
            "Poliția de Frontieră"
          ],
          "answerIndex": 2,
          "explanation": "Parlamentul României adoptă legile de ratificare a tratatelor internaționale.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: Multilateral Treaties, EU Acceding Protocols & Ratification (Tratate Multilaterale și Ratificare Parlamentară).",
          "targetPhrase": "Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.",
          "expectedKeywords": [
            "Parlamentul",
            "a"
          ],
          "explanation": "Correct answer: \"Parlamentul a adoptat legea de ratificare a tratatului internațional privind securitatea cibernetică.\". This directly applies the principle of: Multilateral Treaties, EU Acceding Protocols & Ratification (Tratate Multilaterale și Ratificare Parlamentară).."
        }
      ]
    }
  },
  "ro-u34-l3": {
    "id": "ro-u34-l3",
    "subject": "romanian",
    "unit": 34,
    "lessonNumber": 3,
    "title": "NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments",
    "level": "C2",
    "objective": "NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments (Concepte Strategice NATO și Misiuni de Pace).",
    "presentation": {
      "explanation": "Terminologia securității euro-atlantice: Articolul 5 din Tratatul de la Washington (apărarea colectivă), interoperabilitatea forțelor armate, misiunile internaționale sub mandat ONU/NATO și securitatea flancului estic.",
      "examples": [
        {
          "target": "Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.",
          "reading": "Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.",
          "translation": "Allied states reaffirmed the unshakeable character of the collective defense clause of the North Atlantic Treaty."
        },
        {
          "target": "Contingentul național a participat la misiunea internațională de menținere a păcii sub egida ONU.",
          "reading": "Contingentul național a participat la misiunea internațională de menținere a păcii sub egida ONU.",
          "translation": "The national contingent participated in the international peacekeeping mission under UN auspices."
        }
      ],
      "mnemonics": [
        "\"Neclintit\" exprimă o fermitate absolută, care nu poate fi schimbată sau descurajată."
      ],
      "culturalNotes": [
        "România a găzduit summitul istoric NATO de la București din 2008 la Palatul Parlamentului."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments (Concepte Strategice NATO și Misiuni de Pace).",
          "targetPhrase": "Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.",
          "expectedKeywords": [
            "Statele",
            "aliate"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments (Concepte Strategice NATO și Misiuni de Pace).",
          "targetPhrase": "Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.",
          "expectedKeywords": [
            "Statele",
            "aliate"
          ],
          "explanation": "Correct answer: \"Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.\". This directly applies the principle of: NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments (Concepte Strategice NATO și Misiuni de Pace).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ce prevede Articolul 5 din Tratatul Atlanticului de Nord?",
          "options": [
            "Liberul schimb agricol exclusiv.",
            "Principiul apărării colective: un atac armat împotriva unui aliat este considerat un atac împotriva tuturor.",
            "Desființarea frontierelor vamale fără acord.",
            "Unificarea monedelor naționale."
          ],
          "answerIndex": 1,
          "explanation": "Articolul 5 consacră principiul apărării colective în cadrul NATO.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments (Concepte Strategice NATO și Misiuni de Pace).",
          "targetPhrase": "Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.",
          "expectedKeywords": [
            "Statele",
            "aliate"
          ],
          "explanation": "Correct answer: \"Statele aliate au reafirmat caracterul de neclintit al clauzei de apărare colectivă din Tratatul Nord-Atlantic.\". This directly applies the principle of: NATO Strategic Concepts, Collective Defense & Peacekeeping Deployments (Concepte Strategice NATO și Misiuni de Pace).."
        }
      ]
    }
  },
  "ro-u34-l4": {
    "id": "ro-u34-l4",
    "subject": "romanian",
    "unit": 34,
    "lessonNumber": 4,
    "title": "International Maritime Boundary Delimitation & ICJ Jurisprudence",
    "level": "C2",
    "objective": "International Maritime Boundary Delimitation & ICJ Jurisprudence (Delimitarea Maritimă și Jurisprudența CIJ).",
    "presentation": {
      "explanation": "Studiul dreptului mării (UNCLOS) și al hotărârilor Curții Internaționale de Justiție (v.g. cazul Delimitării Maritime în Marea Neagră din 2009): linia mediană de echidistanță, platoul continental și zona economică exclusivă (ZEE).",
      "examples": [
        {
          "target": "Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.",
          "reading": "Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.",
          "translation": "The International Court of Justice delivered a final and binding judgment regarding continental shelf delimitation."
        },
        {
          "target": "Metodologia de delimitare maritimă a aplicat principiul echidistanței și al proporționalității țărmurilor.",
          "reading": "Metodologia de delimitare maritimă a aplicat principiul echidistanței și al proporționalității țărmurilor.",
          "translation": "The maritime delimitation methodology applied the principle of equidistance and coastal proportionality."
        }
      ],
      "mnemonics": [
        "\"Echidistanță\" înseamnă măsurarea unei linii ale cărei puncte sunt egal depărtate de țărmurile celor două state."
      ],
      "culturalNotes": [
        "Victoria diplomatică și juridică a României la Haga în 2009 a adăugat 9.700 km² de platou continental și ZEE în Marea Neagră."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: International Maritime Boundary Delimitation & ICJ Jurisprudence (Delimitarea Maritimă și Jurisprudența CIJ).",
          "targetPhrase": "Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.",
          "expectedKeywords": [
            "Curtea",
            "Internațională"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: International Maritime Boundary Delimitation & ICJ Jurisprudence (Delimitarea Maritimă și Jurisprudența CIJ).",
          "targetPhrase": "Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.",
          "expectedKeywords": [
            "Curtea",
            "Internațională"
          ],
          "explanation": "Correct answer: \"Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.\". This directly applies the principle of: International Maritime Boundary Delimitation & ICJ Jurisprudence (Delimitarea Maritimă și Jurisprudența CIJ).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Unde are sediul Curtea Internațională de Justiție (CIJ)?",
          "options": [
            "La Haga",
            "La Strasbourg",
            "La Viena",
            "La Geneva"
          ],
          "answerIndex": 0,
          "explanation": "Curtea Internațională de Justiție are sediul la Palatul Păcii din Haga.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: International Maritime Boundary Delimitation & ICJ Jurisprudence (Delimitarea Maritimă și Jurisprudența CIJ).",
          "targetPhrase": "Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.",
          "expectedKeywords": [
            "Curtea",
            "Internațională"
          ],
          "explanation": "Correct answer: \"Curtea Internațională de Justiție a pronunțat o hotărâre definitivă și obligatorie privind delimitarea platoului continental.\". This directly applies the principle of: International Maritime Boundary Delimitation & ICJ Jurisprudence (Delimitarea Maritimă și Jurisprudența CIJ).."
        }
      ]
    }
  },
  "ro-u34-l5": {
    "id": "ro-u34-l5",
    "subject": "romanian",
    "unit": 34,
    "lessonNumber": 5,
    "title": "C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense",
    "level": "C2",
    "objective": "C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense (Declarația Comună de la Summit).",
    "presentation": {
      "explanation": "Exercițiul de măiestrie C2: redactarea și apărarea diplomatică a Declarației Comune a unui summit internațional, integrând clauze obligatorii de securitate, cooperare energetică și soluționare pașnică a disputelor.",
      "examples": [
        {
          "target": "Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.",
          "reading": "Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.",
          "translation": "The Heads of State and Government adopted the joint declaration emphasizing steadfast attachment to international law."
        },
        {
          "target": "Drept pentru care plenipotențiarii au semnat prezentul act solemn.",
          "reading": "Drept pentru care plenipotențiarii au semnat prezentul act solemn.",
          "translation": "In witness whereof the plenipotentiaries have signed this solemn instrument."
        }
      ],
      "mnemonics": [
        "\"Drept pentru care\" este formula tradițională românească de încheiere solemnă a tratatelor internaționale."
      ],
      "culturalNotes": [
        "Redactarea declarațiilor internaționale în limba română respectă rigoarea canoanelor diplomatice europene consacrate."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense (Declarația Comună de la Summit).",
          "targetPhrase": "Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.",
          "expectedKeywords": [
            "Șefii",
            "de"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense (Declarația Comună de la Summit).",
          "targetPhrase": "Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.",
          "expectedKeywords": [
            "Șefii",
            "de"
          ],
          "explanation": "Correct answer: \"Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.\". This directly applies the principle of: C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense (Declarația Comună de la Summit).."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Care este formula solemnă de atestare a semnăturilor într-un tratat oficial în limba română?",
          "options": [
            "\"Dacă vreți semnați pe această foaie...\" (C2 Master Capstone)",
            "\"Am semnat și noi aici repede...\" (C2 Master Capstone)",
            "\"Text informativ fără caracter juridic...\" (C2 Master Capstone)",
            "\"Drept pentru care, plenipotențiarii au semnat prezentul tratat...\" (C2 Master Capstone)"
          ],
          "answerIndex": 3,
          "explanation": "\"Drept pentru care...\" este formula canonică solemnă de încheiere a tratatelor.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in ROMANIAN concerning: C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense (Declarația Comună de la Summit).",
          "targetPhrase": "Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.",
          "expectedKeywords": [
            "Șefii",
            "de"
          ],
          "explanation": "Correct answer: \"Șefii de stat și de guvern au adoptat declarația comună subliniind atașamentul neclintit față de dreptul internațional.\". This directly applies the principle of: C2 Master Capstone: Multilateral Summit Communiqué Drafting & Defense (Declarația Comună de la Summit).."
        }
      ]
    }
  }
};
  var CURRICULUM = { id: 'romanian', name: "Romanian", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['romanian'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
