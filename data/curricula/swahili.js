// swahili curriculum
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "sw-u1",
    "unit": 1,
    "title": "Matamshi ya Kiswahili na Salamu (Phonetics & Greetings)",
    "level": "A1",
    "goal": "Mastery of Salamu na Maamkizi (Greetings & Etiquette).",
    "lessonIds": [
      "sw-u1-l1",
      "sw-u1-l2",
      "sw-u1-l3",
      "sw-u1-l4",
      "sw-u1-l5"
    ]
  },
  {
    "id": "sw-u2",
    "unit": 2,
    "title": "Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA)",
    "level": "A1",
    "goal": "Mastery of Ngeli ya 1/2 A-WA (Noun Classes 1/2).",
    "lessonIds": [
      "sw-u2-l1",
      "sw-u2-l2",
      "sw-u2-l3",
      "sw-u2-l4",
      "sw-u2-l5"
    ]
  },
  {
    "id": "sw-u3",
    "unit": 3,
    "title": "Wakati Uliopo: Kiambishi -na- (Present Continuous Tense)",
    "level": "A1",
    "goal": "Mastery of Wakati Uliopo -na- (Present Continuous Tense).",
    "lessonIds": [
      "sw-u3-l1",
      "sw-u3-l2",
      "sw-u3-l3",
      "sw-u3-l4",
      "sw-u3-l5"
    ]
  },
  {
    "id": "sw-u4",
    "unit": 4,
    "title": "Wakati Uliopita: Kiambishi -li- (Simple Past Tense)",
    "level": "A1",
    "goal": "Mastery of Wakati Uliopita -li- (Past Tense with -li-).",
    "lessonIds": [
      "sw-u4-l1",
      "sw-u4-l2",
      "sw-u4-l3",
      "sw-u4-l4",
      "sw-u4-l5"
    ]
  },
  {
    "id": "sw-u5",
    "unit": 5,
    "title": "Wakati Ujao: Kiambishi -ta- (Future Tense)",
    "level": "A1",
    "goal": "Mastery of Wakati Ujao -ta- (Future Tense with -ta-).",
    "lessonIds": [
      "sw-u5-l1",
      "sw-u5-l2",
      "sw-u5-l3",
      "sw-u5-l4",
      "sw-u5-l5"
    ]
  },
  {
    "id": "sw-u6",
    "unit": 6,
    "title": "Wakati Timilifu: Kiambishi -me- (Perfective Aspect)",
    "level": "A2",
    "goal": "Mastery of Wakati Timilifu -me- (Perfective Aspect with -me-).",
    "lessonIds": [
      "sw-u6-l1",
      "sw-u6-l2",
      "sw-u6-l3",
      "sw-u6-l4",
      "sw-u6-l5"
    ]
  },
  {
    "id": "sw-u7",
    "unit": 7,
    "title": "Ukanushaji wa Vitenzi (Verb Negation Across Tenses)",
    "level": "A2",
    "goal": "Mastery of Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-).",
    "lessonIds": [
      "sw-u7-l1",
      "sw-u7-l2",
      "sw-u7-l3",
      "sw-u7-l4",
      "sw-u7-l5"
    ]
  },
  {
    "id": "sw-u8",
    "unit": 8,
    "title": "Virejeshi vya Watendwa (Object Infixes in Verbs)",
    "level": "A2",
    "goal": "Mastery of Viambishi vya Watendwa (Object Infixes in Verbs).",
    "lessonIds": [
      "sw-u8-l1",
      "sw-u8-l2",
      "sw-u8-l3",
      "sw-u8-l4",
      "sw-u8-l5"
    ]
  },
  {
    "id": "sw-u9",
    "unit": 9,
    "title": "Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns)",
    "level": "A2",
    "goal": "Mastery of Vimilikishi na Upatanisho (Possessive Pronouns).",
    "lessonIds": [
      "sw-u9-l1",
      "sw-u9-l2",
      "sw-u9-l3",
      "sw-u9-l4",
      "sw-u9-l5"
    ]
  },
  {
    "id": "sw-u10",
    "unit": 10,
    "title": "Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI)",
    "level": "A2",
    "goal": "Mastery of Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI).",
    "lessonIds": [
      "sw-u10-l1",
      "sw-u10-l2",
      "sw-u10-l3",
      "sw-u10-l4",
      "sw-u10-l5"
    ]
  },
  {
    "id": "sw-u11",
    "unit": 11,
    "title": "Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA)",
    "level": "B1",
    "goal": "Mastery of Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA).",
    "lessonIds": [
      "sw-u11-l1",
      "sw-u11-l2",
      "sw-u11-l3",
      "sw-u11-l4",
      "sw-u11-l5"
    ]
  },
  {
    "id": "sw-u12",
    "unit": 12,
    "title": "Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI)",
    "level": "B1",
    "goal": "Mastery of Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI).",
    "lessonIds": [
      "sw-u12-l1",
      "sw-u12-l2",
      "sw-u12-l3",
      "sw-u12-l4",
      "sw-u12-l5"
    ]
  },
  {
    "id": "sw-u13",
    "unit": 13,
    "title": "Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10)",
    "level": "B1",
    "goal": "Mastery of Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N).",
    "lessonIds": [
      "sw-u13-l1",
      "sw-u13-l2",
      "sw-u13-l3",
      "sw-u13-l4",
      "sw-u13-l5"
    ]
  },
  {
    "id": "sw-u14",
    "unit": 14,
    "title": "Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U)",
    "level": "B1",
    "goal": "Mastery of Ngeli ya 11/14 U (Noun Classes 11/14 U).",
    "lessonIds": [
      "sw-u14-l1",
      "sw-u14-l2",
      "sw-u14-l3",
      "sw-u14-l4",
      "sw-u14-l5"
    ]
  },
  {
    "id": "sw-u15",
    "unit": 15,
    "title": "Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18)",
    "level": "B1",
    "goal": "Mastery of Ngeli za Mahali PA, KU, MU (Locative Classes).",
    "lessonIds": [
      "sw-u15-l1",
      "sw-u15-l2",
      "sw-u15-l3",
      "sw-u15-l4",
      "sw-u15-l5"
    ]
  },
  {
    "id": "sw-u16",
    "unit": 16,
    "title": "Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers)",
    "level": "B1",
    "goal": "Mastery of O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-).",
    "lessonIds": [
      "sw-u16-l1",
      "sw-u16-l2",
      "sw-u16-l3",
      "sw-u16-l4",
      "sw-u16-l5"
    ]
  },
  {
    "id": "sw-u17",
    "unit": 17,
    "title": "Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems)",
    "level": "B2",
    "goal": "Mastery of Kauli ya Kutendwa -wa (Passive Verb Forms).",
    "lessonIds": [
      "sw-u17-l1",
      "sw-u17-l2",
      "sw-u17-l3",
      "sw-u17-l4",
      "sw-u17-l5"
    ]
  },
  {
    "id": "sw-u18",
    "unit": 18,
    "title": "Kauli ya Kutendea (-ia/-ea) (Applicative Verbs)",
    "level": "B2",
    "goal": "Mastery of Kauli ya Kutendea -ia/-ea (Applicative / Prepositional).",
    "lessonIds": [
      "sw-u18-l1",
      "sw-u18-l2",
      "sw-u18-l3",
      "sw-u18-l4",
      "sw-u18-l5"
    ]
  },
  {
    "id": "sw-u19",
    "unit": 19,
    "title": "Kauli ya Kutendesha (-isha/-esha) (Causative Verbs)",
    "level": "B2",
    "goal": "Mastery of Kauli ya Kutendesha -isha/-esha (Causative Verb Stems).",
    "lessonIds": [
      "sw-u19-l1",
      "sw-u19-l2",
      "sw-u19-l3",
      "sw-u19-l4",
      "sw-u19-l5"
    ]
  },
  {
    "id": "sw-u20",
    "unit": 20,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verbs)",
    "level": "B2",
    "goal": "Mastery of Kauli ya Kutendana -ana (Reciprocal Verb Stems).",
    "lessonIds": [
      "sw-u20-l1",
      "sw-u20-l2",
      "sw-u20-l3",
      "sw-u20-l4",
      "sw-u20-l5"
    ]
  },
  {
    "id": "sw-u21",
    "unit": 21,
    "title": "Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals)",
    "level": "B2",
    "goal": "Mastery of Masharti -ki- na -nge-/-ngali- (Conditional Clauses).",
    "lessonIds": [
      "sw-u21-l1",
      "sw-u21-l2",
      "sw-u21-l3",
      "sw-u21-l4",
      "sw-u21-l5"
    ]
  },
  {
    "id": "sw-u22",
    "unit": 22,
    "title": "Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs)",
    "level": "B2",
    "goal": "Mastery of Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation).",
    "lessonIds": [
      "sw-u22-l1",
      "sw-u22-l2",
      "sw-u22-l3",
      "sw-u22-l4",
      "sw-u22-l5"
    ]
  },
  {
    "id": "sw-u23",
    "unit": 23,
    "title": "Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature)",
    "level": "B2",
    "goal": "Mastery of Methali na Fasihi Simulizi (Swahili Proverbs & Folklore).",
    "lessonIds": [
      "sw-u23-l1",
      "sw-u23-l2",
      "sw-u23-l3",
      "sw-u23-l4",
      "sw-u23-l5"
    ]
  },
  {
    "id": "sw-u24",
    "unit": 24,
    "title": "Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture)",
    "level": "B2",
    "goal": "Mastery of Utamaduni wa Waswahili (Swahili Coastal Culture).",
    "lessonIds": [
      "sw-u24-l1",
      "sw-u24-l2",
      "sw-u24-l3",
      "sw-u24-l4",
      "sw-u24-l5"
    ]
  },
  {
    "id": "sw-u25",
    "unit": 25,
    "title": "Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa)",
    "level": "C1",
    "goal": "Mastery of Biashara na Fedha za Kidijitali (Commerce & M-Pesa).",
    "lessonIds": [
      "sw-u25-l1",
      "sw-u25-l2",
      "sw-u25-l3",
      "sw-u25-l4",
      "sw-u25-l5"
    ]
  },
  {
    "id": "sw-u26",
    "unit": 26,
    "title": "Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife)",
    "level": "C1",
    "goal": "Mastery of Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife).",
    "lessonIds": [
      "sw-u26-l1",
      "sw-u26-l2",
      "sw-u26-l3",
      "sw-u26-l4",
      "sw-u26-l5"
    ]
  },
  {
    "id": "sw-u27",
    "unit": 27,
    "title": "Afya ya Jamii, Tiba na Epidemiolojia (Public Health)",
    "level": "C1",
    "goal": "Mastery of Afya ya Jamii na Tiba (Public Health & Clinical Care).",
    "lessonIds": [
      "sw-u27-l1",
      "sw-u27-l2",
      "sw-u27-l3",
      "sw-u27-l4",
      "sw-u27-l5"
    ]
  },
  {
    "id": "sw-u28",
    "unit": 28,
    "title": "Uandishi wa Habari, Tahariri na Utangazaji (Journalism)",
    "level": "C1",
    "goal": "Mastery of Uandishi wa Habari na Utangazaji (Journalism & Media).",
    "lessonIds": [
      "sw-u28-l1",
      "sw-u28-l2",
      "sw-u28-l3",
      "sw-u28-l4",
      "sw-u28-l5"
    ]
  },
  {
    "id": "sw-u29",
    "unit": 29,
    "title": "Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence)",
    "level": "C1",
    "goal": "Mastery of Sheria na Haki za Kisheria (Law & Constitutional Rights).",
    "lessonIds": [
      "sw-u29-l1",
      "sw-u29-l2",
      "sw-u29-l3",
      "sw-u29-l4",
      "sw-u29-l5"
    ]
  },
  {
    "id": "sw-u30",
    "unit": 30,
    "title": "Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody)",
    "level": "C1",
    "goal": "Mastery of Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody).",
    "lessonIds": [
      "sw-u30-l1",
      "sw-u30-l2",
      "sw-u30-l3",
      "sw-u30-l4",
      "sw-u30-l5"
    ]
  },
  {
    "id": "sw-u31",
    "unit": 31,
    "title": "Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance)",
    "level": "C2",
    "goal": "Mastery of Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance).",
    "lessonIds": [
      "sw-u31-l1",
      "sw-u31-l2",
      "sw-u31-l3",
      "sw-u31-l4",
      "sw-u31-l5"
    ]
  },
  {
    "id": "sw-u32",
    "unit": 32,
    "title": "Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics)",
    "level": "C2",
    "goal": "Mastery of Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics).",
    "lessonIds": [
      "sw-u32-l1",
      "sw-u32-l2",
      "sw-u32-l3",
      "sw-u32-l4",
      "sw-u32-l5"
    ]
  },
  {
    "id": "sw-u33",
    "unit": 33,
    "title": "Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy)",
    "level": "C2",
    "goal": "Mastery of Diplomasia na Mikataba ya Kimataifa (International Diplomacy).",
    "lessonIds": [
      "sw-u33-l1",
      "sw-u33-l2",
      "sw-u33-l3",
      "sw-u33-l4",
      "sw-u33-l5"
    ]
  },
  {
    "id": "sw-u34",
    "unit": 34,
    "title": "Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone)",
    "level": "C2",
    "goal": "Mastery of Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft).",
    "lessonIds": [
      "sw-u34-l1",
      "sw-u34-l2",
      "sw-u34-l3",
      "sw-u34-l4",
      "sw-u34-l5"
    ]
  }
];
  var LESSONS = {
  "sw-u1-l1": {
    "id": "sw-u1-l1",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 1,
    "title": "Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) (Part 1)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Salamu na Heshima za Kwanza with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Habari za asubuhi, bwana mwalimu!",
          "reading": "[hɑˈbɑri zɑ ɑsuˈbuhi, ˈbwɑnɑ mwɑˈlimu] (hah-BAH-ree zah ah-soo-BOO-hee)",
          "translation": "Good morning, teacher!"
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 1-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Hujambo\":",
          "options": [
            "Habari za asubuhi, bwana mwalimu!",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Habari»",
            "Mpangilio usio sahihi wa viambishi katika «Asante»",
            "Matumizi yasiyo sanifu ya muktadha wa «Tafadhali»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Hujambo\":",
          "options": [
            "Habari za asubuhi, bwana mwalimu!",
            "Mpangilio usio sahihi wa viambishi katika «Asante»",
            "Matumizi yasiyo sanifu ya muktadha wa «Tafadhali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Habari»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Hujambo\": Which sentence is completely correct?",
          "options": [
            "Habari za asubuhi, bwana mwalimu!",
            "Matumizi yasiyo sanifu ya muktadha wa «Tafadhali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Habari»",
            "Mpangilio usio sahihi wa viambishi katika «Asante»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u1-l2": {
    "id": "sw-u1-l2",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 2,
    "title": "Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) (Part 2)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Kujitambulisha na Majina with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Jina langu ni Juma, ninafurahi kukufahamu.",
          "reading": "[ˈʤinɑ ˈlɑŋɡu ni ˈʤumɑ, ninɑfuˈrɑhi kukufɑˈhɑmu] (JEE-nah LAHN-goo)",
          "translation": "My name is Juma, I am glad to know you."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 1-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Habari\":",
          "options": [
            "Jina langu ni Juma, ninafurahi kukufahamu.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Asante»",
            "Mpangilio usio sahihi wa viambishi katika «Tafadhali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kwaheri»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Habari\":",
          "options": [
            "Jina langu ni Juma, ninafurahi kukufahamu.",
            "Mpangilio usio sahihi wa viambishi katika «Tafadhali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kwaheri»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Asante»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Habari\": Which sentence is completely correct?",
          "options": [
            "Jina langu ni Juma, ninafurahi kukufahamu.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kwaheri»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Asante»",
            "Mpangilio usio sahihi wa viambishi katika «Tafadhali»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u1-l3": {
    "id": "sw-u1-l3",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 3,
    "title": "Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) (Part 3)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Shukrani na Adabu za Kijamii with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Asante sana kwa msaada wako na ukarimu.",
          "reading": "[ɑˈsɑntɛ ˈsɑnɑ kwɑ msɑˈɑdɑ ˈwɑkɔ] (ah-SAHN-teh SAH-nah)",
          "translation": "Thank you very much for your help and generosity."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 1-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Asante\":",
          "options": [
            "Asante sana kwa msaada wako na ukarimu.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Tafadhali»",
            "Mpangilio usio sahihi wa viambishi katika «Kwaheri»",
            "Matumizi yasiyo sanifu ya muktadha wa «Samahani»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Asante\":",
          "options": [
            "Asante sana kwa msaada wako na ukarimu.",
            "Mpangilio usio sahihi wa viambishi katika «Kwaheri»",
            "Matumizi yasiyo sanifu ya muktadha wa «Samahani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Tafadhali»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Asante\": Which sentence is completely correct?",
          "options": [
            "Asante sana kwa msaada wako na ukarimu.",
            "Matumizi yasiyo sanifu ya muktadha wa «Samahani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Tafadhali»",
            "Mpangilio usio sahihi wa viambishi katika «Kwaheri»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u1-l4": {
    "id": "sw-u1-l4",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 4,
    "title": "Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) (Part 4)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Kuomba Radhi na Heshima with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Samahani, naomba unielekeze njia ya kwenda sokoni.",
          "reading": "[sɑmɑˈhɑni, nɑˈɔmbɑ uniɛlɛˈkɛzɛ ˈnʤiɑ] (sah-mah-HAH-nee)",
          "translation": "Excuse me, please direct me on the way to the market."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 1-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Tafadhali\":",
          "options": [
            "Samahani, naomba unielekeze njia ya kwenda sokoni.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kwaheri»",
            "Mpangilio usio sahihi wa viambishi katika «Samahani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Karibu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Tafadhali\":",
          "options": [
            "Samahani, naomba unielekeze njia ya kwenda sokoni.",
            "Mpangilio usio sahihi wa viambishi katika «Samahani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Karibu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kwaheri»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Tafadhali\": Which sentence is completely correct?",
          "options": [
            "Samahani, naomba unielekeze njia ya kwenda sokoni.",
            "Matumizi yasiyo sanifu ya muktadha wa «Karibu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kwaheri»",
            "Mpangilio usio sahihi wa viambishi katika «Samahani»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u1-l5": {
    "id": "sw-u1-l5",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 5,
    "title": "Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) (Part 5)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Kuagana na Matakwa Mema with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Kwaheri ya kuonana, nakutakia siku njema!",
          "reading": "[kwɑˈhɛri jɑ kuɔˈnɑnɑ, nɑkutɑˈkiɑ ˈsiku ˈnʤɛmɑ] (kwah-HEH-ree)",
          "translation": "Goodbye until we meet again, I wish you a good day!"
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 1-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kwaheri\":",
          "options": [
            "Kwaheri ya kuonana, nakutakia siku njema!",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Samahani»",
            "Mpangilio usio sahihi wa viambishi katika «Karibu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha asubuhi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kwaheri\":",
          "options": [
            "Kwaheri ya kuonana, nakutakia siku njema!",
            "Mpangilio usio sahihi wa viambishi katika «Karibu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha asubuhi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Samahani»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kwaheri\": Which sentence is completely correct?",
          "options": [
            "Kwaheri ya kuonana, nakutakia siku njema!",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha asubuhi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Samahani»",
            "Mpangilio usio sahihi wa viambishi katika «Karibu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u2-l1": {
    "id": "sw-u2-l1",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 1,
    "title": "Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) (Part 1)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 2.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 2."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 2-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Samahani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Karibu»",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha asubuhi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha mchana»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Samahani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.1.",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha asubuhi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha mchana»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Karibu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Samahani\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha mchana»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Karibu»",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha asubuhi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u2-l2": {
    "id": "sw-u2-l2",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 2,
    "title": "Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) (Part 2)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 2.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 2."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 2-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Karibu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha asubuhi»",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha mchana»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha jioni»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Karibu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.2.",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha mchana»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha jioni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha asubuhi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Karibu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Chakula cha jioni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha asubuhi»",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha mchana»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u2-l3": {
    "id": "sw-u2-l3",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 3,
    "title": "Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) (Part 3)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 2.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 2."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 2-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Chakula cha asubuhi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha mchana»",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha jioni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maji»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Chakula cha asubuhi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.3.",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha jioni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha mchana»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Chakula cha asubuhi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Maji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha mchana»",
            "Mpangilio usio sahihi wa viambishi katika «Chakula cha jioni»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u2-l4": {
    "id": "sw-u2-l4",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 4,
    "title": "Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) (Part 4)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 2.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 2."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 2-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Chakula cha mchana\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha jioni»",
            "Mpangilio usio sahihi wa viambishi katika «Maji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maziwa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Chakula cha mchana\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.4.",
            "Mpangilio usio sahihi wa viambishi katika «Maji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maziwa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha jioni»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Chakula cha mchana\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Maziwa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chakula cha jioni»",
            "Mpangilio usio sahihi wa viambishi katika «Maji»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u2-l5": {
    "id": "sw-u2-l5",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 5,
    "title": "Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) (Part 5)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 2.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 2."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 2-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Chakula cha jioni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maji»",
            "Mpangilio usio sahihi wa viambishi katika «Maziwa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chai»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Chakula cha jioni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.5.",
            "Mpangilio usio sahihi wa viambishi katika «Maziwa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chai»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maji»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Chakula cha jioni\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 2.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Chai»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maji»",
            "Mpangilio usio sahihi wa viambishi katika «Maziwa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u3-l1": {
    "id": "sw-u3-l1",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 1,
    "title": "Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) (Part 1)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 3.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 3."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 3-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Maji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maziwa»",
            "Mpangilio usio sahihi wa viambishi katika «Chai»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkate»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Maji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.1.",
            "Mpangilio usio sahihi wa viambishi katika «Chai»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkate»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maziwa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Maji\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkate»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maziwa»",
            "Mpangilio usio sahihi wa viambishi katika «Chai»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u3-l2": {
    "id": "sw-u3-l2",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 2,
    "title": "Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) (Part 2)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 3.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 3."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 3-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Maziwa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chai»",
            "Mpangilio usio sahihi wa viambishi katika «Mkate»",
            "Matumizi yasiyo sanifu ya muktadha wa «Wali»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Maziwa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.2.",
            "Mpangilio usio sahihi wa viambishi katika «Mkate»",
            "Matumizi yasiyo sanifu ya muktadha wa «Wali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chai»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Maziwa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Wali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chai»",
            "Mpangilio usio sahihi wa viambishi katika «Mkate»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u3-l3": {
    "id": "sw-u3-l3",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 3,
    "title": "Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) (Part 3)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 3.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 3."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 3-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Chai\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkate»",
            "Mpangilio usio sahihi wa viambishi katika «Wali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maharagwe»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Chai\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.3.",
            "Mpangilio usio sahihi wa viambishi katika «Wali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maharagwe»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkate»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Chai\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Maharagwe»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkate»",
            "Mpangilio usio sahihi wa viambishi katika «Wali»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u3-l4": {
    "id": "sw-u3-l4",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 4,
    "title": "Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) (Part 4)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 3.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 3."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 3-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mkate\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wali»",
            "Mpangilio usio sahihi wa viambishi katika «Maharagwe»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mboga»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mkate\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.4.",
            "Mpangilio usio sahihi wa viambishi katika «Maharagwe»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mboga»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wali»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mkate\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mboga»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wali»",
            "Mpangilio usio sahihi wa viambishi katika «Maharagwe»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u3-l5": {
    "id": "sw-u3-l5",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 5,
    "title": "Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) (Part 5)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 3.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 3."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 3-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Wali\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maharagwe»",
            "Mpangilio usio sahihi wa viambishi katika «Mboga»",
            "Matumizi yasiyo sanifu ya muktadha wa «Matunda»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Wali\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.5.",
            "Mpangilio usio sahihi wa viambishi katika «Mboga»",
            "Matumizi yasiyo sanifu ya muktadha wa «Matunda»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maharagwe»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Wali\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 3.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Matunda»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maharagwe»",
            "Mpangilio usio sahihi wa viambishi katika «Mboga»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u4-l1": {
    "id": "sw-u4-l1",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 1,
    "title": "Wakati Uliopita: Kiambishi -li- (Simple Past Tense) (Part 1)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 4.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 4."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 4-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Maharagwe\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mboga»",
            "Mpangilio usio sahihi wa viambishi katika «Matunda»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyama»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Maharagwe\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.1.",
            "Mpangilio usio sahihi wa viambishi katika «Matunda»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyama»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mboga»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Maharagwe\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyama»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mboga»",
            "Mpangilio usio sahihi wa viambishi katika «Matunda»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u4-l2": {
    "id": "sw-u4-l2",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 2,
    "title": "Wakati Uliopita: Kiambishi -li- (Simple Past Tense) (Part 2)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 4.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 4."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 4-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mboga\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matunda»",
            "Mpangilio usio sahihi wa viambishi katika «Nyama»",
            "Matumizi yasiyo sanifu ya muktadha wa «Samaki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mboga\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.2.",
            "Mpangilio usio sahihi wa viambishi katika «Nyama»",
            "Matumizi yasiyo sanifu ya muktadha wa «Samaki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matunda»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mboga\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Samaki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matunda»",
            "Mpangilio usio sahihi wa viambishi katika «Nyama»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u4-l3": {
    "id": "sw-u4-l3",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 3,
    "title": "Wakati Uliopita: Kiambishi -li- (Simple Past Tense) (Part 3)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 4.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 4."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 4-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Matunda\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyama»",
            "Mpangilio usio sahihi wa viambishi katika «Samaki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Gari»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Matunda\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.3.",
            "Mpangilio usio sahihi wa viambishi katika «Samaki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Gari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyama»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Matunda\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Gari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyama»",
            "Mpangilio usio sahihi wa viambishi katika «Samaki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u4-l4": {
    "id": "sw-u4-l4",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 4,
    "title": "Wakati Uliopita: Kiambishi -li- (Simple Past Tense) (Part 4)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 4.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 4."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 4-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nyama\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Samaki»",
            "Mpangilio usio sahihi wa viambishi katika «Gari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Basi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nyama\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.4.",
            "Mpangilio usio sahihi wa viambishi katika «Gari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Basi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Samaki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nyama\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Basi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Samaki»",
            "Mpangilio usio sahihi wa viambishi katika «Gari»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u4-l5": {
    "id": "sw-u4-l5",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 5,
    "title": "Wakati Uliopita: Kiambishi -li- (Simple Past Tense) (Part 5)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 4.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 4."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 4-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Samaki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Gari»",
            "Mpangilio usio sahihi wa viambishi katika «Basi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Treni»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Samaki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.5.",
            "Mpangilio usio sahihi wa viambishi katika «Basi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Treni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Gari»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Samaki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 4.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Treni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Gari»",
            "Mpangilio usio sahihi wa viambishi katika «Basi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u5-l1": {
    "id": "sw-u5-l1",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 1,
    "title": "Wakati Ujao: Kiambishi -ta- (Future Tense) (Part 1)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 5.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 5."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 5-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Gari\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Basi»",
            "Mpangilio usio sahihi wa viambishi katika «Treni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndege»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Gari\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.1.",
            "Mpangilio usio sahihi wa viambishi katika «Treni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndege»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Basi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Gari\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndege»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Basi»",
            "Mpangilio usio sahihi wa viambishi katika «Treni»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u5-l2": {
    "id": "sw-u5-l2",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 2,
    "title": "Wakati Ujao: Kiambishi -ta- (Future Tense) (Part 2)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 5.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 5."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 5-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Basi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Treni»",
            "Mpangilio usio sahihi wa viambishi katika «Ndege»",
            "Matumizi yasiyo sanifu ya muktadha wa «Pikipiki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Basi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.2.",
            "Mpangilio usio sahihi wa viambishi katika «Ndege»",
            "Matumizi yasiyo sanifu ya muktadha wa «Pikipiki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Treni»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Basi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Pikipiki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Treni»",
            "Mpangilio usio sahihi wa viambishi katika «Ndege»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u5-l3": {
    "id": "sw-u5-l3",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 3,
    "title": "Wakati Ujao: Kiambishi -ta- (Future Tense) (Part 3)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 5.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 5."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 5-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Treni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndege»",
            "Mpangilio usio sahihi wa viambishi katika «Pikipiki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Tiketi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Treni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.3.",
            "Mpangilio usio sahihi wa viambishi katika «Pikipiki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Tiketi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndege»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Treni\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Tiketi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndege»",
            "Mpangilio usio sahihi wa viambishi katika «Pikipiki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u5-l4": {
    "id": "sw-u5-l4",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 4,
    "title": "Wakati Ujao: Kiambishi -ta- (Future Tense) (Part 4)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 5.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 5."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 5-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ndege\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pikipiki»",
            "Mpangilio usio sahihi wa viambishi katika «Tiketi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kituo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ndege\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.4.",
            "Mpangilio usio sahihi wa viambishi katika «Tiketi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kituo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pikipiki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ndege\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kituo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pikipiki»",
            "Mpangilio usio sahihi wa viambishi katika «Tiketi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u5-l5": {
    "id": "sw-u5-l5",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 5,
    "title": "Wakati Ujao: Kiambishi -ta- (Future Tense) (Part 5)",
    "level": "A1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 5.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 5."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 5-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Pikipiki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Tiketi»",
            "Mpangilio usio sahihi wa viambishi katika «Kituo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uwanja wa ndege»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Pikipiki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.5.",
            "Mpangilio usio sahihi wa viambishi katika «Kituo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uwanja wa ndege»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Tiketi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Pikipiki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 5.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Uwanja wa ndege»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Tiketi»",
            "Mpangilio usio sahihi wa viambishi katika «Kituo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u6-l1": {
    "id": "sw-u6-l1",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 1,
    "title": "Wakati Timilifu: Kiambishi -me- (Perfective Aspect) (Part 1)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 6.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 6."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 6-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Tiketi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kituo»",
            "Mpangilio usio sahihi wa viambishi katika «Uwanja wa ndege»",
            "Matumizi yasiyo sanifu ya muktadha wa «Barabara»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Tiketi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.1.",
            "Mpangilio usio sahihi wa viambishi katika «Uwanja wa ndege»",
            "Matumizi yasiyo sanifu ya muktadha wa «Barabara»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kituo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Tiketi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Barabara»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kituo»",
            "Mpangilio usio sahihi wa viambishi katika «Uwanja wa ndege»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u6-l2": {
    "id": "sw-u6-l2",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 2,
    "title": "Wakati Timilifu: Kiambishi -me- (Perfective Aspect) (Part 2)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 6.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 6."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 6-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kituo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uwanja wa ndege»",
            "Mpangilio usio sahihi wa viambishi katika «Barabara»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mji»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kituo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.2.",
            "Mpangilio usio sahihi wa viambishi katika «Barabara»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uwanja wa ndege»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kituo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uwanja wa ndege»",
            "Mpangilio usio sahihi wa viambishi katika «Barabara»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u6-l3": {
    "id": "sw-u6-l3",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 3,
    "title": "Wakati Timilifu: Kiambishi -me- (Perfective Aspect) (Part 3)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 6.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 6."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 6-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Uwanja wa ndege\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Barabara»",
            "Mpangilio usio sahihi wa viambishi katika «Mji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Duka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Uwanja wa ndege\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Duka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Barabara»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Uwanja wa ndege\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Duka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Barabara»",
            "Mpangilio usio sahihi wa viambishi katika «Mji»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u6-l4": {
    "id": "sw-u6-l4",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 4,
    "title": "Wakati Timilifu: Kiambishi -me- (Perfective Aspect) (Part 4)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 6.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 6."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 6-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Barabara\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mji»",
            "Mpangilio usio sahihi wa viambishi katika «Duka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Pesa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Barabara\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.4.",
            "Mpangilio usio sahihi wa viambishi katika «Duka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Pesa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mji»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Barabara\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Pesa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mji»",
            "Mpangilio usio sahihi wa viambishi katika «Duka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u6-l5": {
    "id": "sw-u6-l5",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 5,
    "title": "Wakati Timilifu: Kiambishi -me- (Perfective Aspect) (Part 5)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 6.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 6."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 6-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Duka»",
            "Mpangilio usio sahihi wa viambishi katika «Pesa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bei»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.5.",
            "Mpangilio usio sahihi wa viambishi katika «Pesa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bei»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Duka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mji\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 6.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Bei»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Duka»",
            "Mpangilio usio sahihi wa viambishi katika «Pesa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u7-l1": {
    "id": "sw-u7-l1",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 1,
    "title": "Ukanushaji wa Vitenzi (Verb Negation Across Tenses) (Part 1)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 7.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 7."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 7-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Duka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pesa»",
            "Mpangilio usio sahihi wa viambishi katika «Bei»",
            "Matumizi yasiyo sanifu ya muktadha wa «Punguzo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Duka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.1.",
            "Mpangilio usio sahihi wa viambishi katika «Bei»",
            "Matumizi yasiyo sanifu ya muktadha wa «Punguzo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pesa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Duka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Punguzo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pesa»",
            "Mpangilio usio sahihi wa viambishi katika «Bei»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u7-l2": {
    "id": "sw-u7-l2",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 2,
    "title": "Ukanushaji wa Vitenzi (Verb Negation Across Tenses) (Part 2)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 7.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 7."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 7-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Pesa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bei»",
            "Mpangilio usio sahihi wa viambishi katika «Punguzo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Risiti»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Pesa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.2.",
            "Mpangilio usio sahihi wa viambishi katika «Punguzo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Risiti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bei»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Pesa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Risiti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bei»",
            "Mpangilio usio sahihi wa viambishi katika «Punguzo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u7-l3": {
    "id": "sw-u7-l3",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 3,
    "title": "Ukanushaji wa Vitenzi (Verb Negation Across Tenses) (Part 3)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 7.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 7."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 7-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Bei\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Punguzo»",
            "Mpangilio usio sahihi wa viambishi katika «Risiti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bili»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Bei\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.3.",
            "Mpangilio usio sahihi wa viambishi katika «Risiti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bili»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Punguzo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Bei\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Bili»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Punguzo»",
            "Mpangilio usio sahihi wa viambishi katika «Risiti»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u7-l4": {
    "id": "sw-u7-l4",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 4,
    "title": "Ukanushaji wa Vitenzi (Verb Negation Across Tenses) (Part 4)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 7.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 7."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 7-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Punguzo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Risiti»",
            "Mpangilio usio sahihi wa viambishi katika «Bili»",
            "Matumizi yasiyo sanifu ya muktadha wa «Soko»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Punguzo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.4.",
            "Mpangilio usio sahihi wa viambishi katika «Bili»",
            "Matumizi yasiyo sanifu ya muktadha wa «Soko»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Risiti»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Punguzo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Soko»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Risiti»",
            "Mpangilio usio sahihi wa viambishi katika «Bili»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u7-l5": {
    "id": "sw-u7-l5",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 5,
    "title": "Ukanushaji wa Vitenzi (Verb Negation Across Tenses) (Part 5)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 7.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 7."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 7-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Risiti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bili»",
            "Mpangilio usio sahihi wa viambishi katika «Soko»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ununuzi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Risiti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.5.",
            "Mpangilio usio sahihi wa viambishi katika «Soko»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ununuzi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bili»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Risiti\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 7.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ununuzi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bili»",
            "Mpangilio usio sahihi wa viambishi katika «Soko»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u8-l1": {
    "id": "sw-u8-l1",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 1,
    "title": "Virejeshi vya Watendwa (Object Infixes in Verbs) (Part 1)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 8.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 8."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 8-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Bili\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Soko»",
            "Mpangilio usio sahihi wa viambishi katika «Ununuzi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kadi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Bili\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.1.",
            "Mpangilio usio sahihi wa viambishi katika «Ununuzi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kadi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Soko»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Bili\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kadi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Soko»",
            "Mpangilio usio sahihi wa viambishi katika «Ununuzi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u8-l2": {
    "id": "sw-u8-l2",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 2,
    "title": "Virejeshi vya Watendwa (Object Infixes in Verbs) (Part 2)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 8.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 8."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 8-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Soko\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ununuzi»",
            "Mpangilio usio sahihi wa viambishi katika «Kadi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Pesa taslimu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Soko\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kadi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Pesa taslimu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ununuzi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Soko\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Pesa taslimu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ununuzi»",
            "Mpangilio usio sahihi wa viambishi katika «Kadi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u8-l3": {
    "id": "sw-u8-l3",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 3,
    "title": "Virejeshi vya Watendwa (Object Infixes in Verbs) (Part 3)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 8.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 8."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 8-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ununuzi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kadi»",
            "Mpangilio usio sahihi wa viambishi katika «Pesa taslimu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyumba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ununuzi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.3.",
            "Mpangilio usio sahihi wa viambishi katika «Pesa taslimu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyumba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kadi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ununuzi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyumba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kadi»",
            "Mpangilio usio sahihi wa viambishi katika «Pesa taslimu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u8-l4": {
    "id": "sw-u8-l4",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 4,
    "title": "Virejeshi vya Watendwa (Object Infixes in Verbs) (Part 4)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 8.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 8."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 8-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kadi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pesa taslimu»",
            "Mpangilio usio sahihi wa viambishi katika «Nyumba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chumba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kadi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.4.",
            "Mpangilio usio sahihi wa viambishi katika «Nyumba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chumba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pesa taslimu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kadi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Chumba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Pesa taslimu»",
            "Mpangilio usio sahihi wa viambishi katika «Nyumba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u8-l5": {
    "id": "sw-u8-l5",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 5,
    "title": "Virejeshi vya Watendwa (Object Infixes in Verbs) (Part 5)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 8.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 8."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 8-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Pesa taslimu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyumba»",
            "Mpangilio usio sahihi wa viambishi katika «Chumba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jiko»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Pesa taslimu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.5.",
            "Mpangilio usio sahihi wa viambishi katika «Chumba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jiko»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyumba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Pesa taslimu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 8.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Jiko»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyumba»",
            "Mpangilio usio sahihi wa viambishi katika «Chumba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u9-l1": {
    "id": "sw-u9-l1",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 1,
    "title": "Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) (Part 1)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 9.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 9."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 9-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nyumba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chumba»",
            "Mpangilio usio sahihi wa viambishi katika «Jiko»",
            "Matumizi yasiyo sanifu ya muktadha wa «Dirisha»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nyumba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.1.",
            "Mpangilio usio sahihi wa viambishi katika «Jiko»",
            "Matumizi yasiyo sanifu ya muktadha wa «Dirisha»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chumba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nyumba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Dirisha»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chumba»",
            "Mpangilio usio sahihi wa viambishi katika «Jiko»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u9-l2": {
    "id": "sw-u9-l2",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 2,
    "title": "Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) (Part 2)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 9.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 9."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 9-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Chumba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jiko»",
            "Mpangilio usio sahihi wa viambishi katika «Dirisha»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mlango»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Chumba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.2.",
            "Mpangilio usio sahihi wa viambishi katika «Dirisha»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mlango»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jiko»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Chumba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mlango»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jiko»",
            "Mpangilio usio sahihi wa viambishi katika «Dirisha»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u9-l3": {
    "id": "sw-u9-l3",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 3,
    "title": "Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) (Part 3)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 9.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 9."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 9-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Jiko\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dirisha»",
            "Mpangilio usio sahihi wa viambishi katika «Mlango»",
            "Matumizi yasiyo sanifu ya muktadha wa «Meza»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Jiko\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mlango»",
            "Matumizi yasiyo sanifu ya muktadha wa «Meza»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dirisha»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Jiko\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Meza»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dirisha»",
            "Mpangilio usio sahihi wa viambishi katika «Mlango»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u9-l4": {
    "id": "sw-u9-l4",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 4,
    "title": "Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) (Part 4)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 9.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 9."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 9-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Dirisha\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mlango»",
            "Mpangilio usio sahihi wa viambishi katika «Meza»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kiti»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Dirisha\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.4.",
            "Mpangilio usio sahihi wa viambishi katika «Meza»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kiti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mlango»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Dirisha\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kiti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mlango»",
            "Mpangilio usio sahihi wa viambishi katika «Meza»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u9-l5": {
    "id": "sw-u9-l5",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 5,
    "title": "Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) (Part 5)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 9.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 9."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 9-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mlango\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Meza»",
            "Mpangilio usio sahihi wa viambishi katika «Kiti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kitanda»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mlango\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.5.",
            "Mpangilio usio sahihi wa viambishi katika «Kiti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kitanda»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Meza»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mlango\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 9.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kitanda»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Meza»",
            "Mpangilio usio sahihi wa viambishi katika «Kiti»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u10-l1": {
    "id": "sw-u10-l1",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 1,
    "title": "Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) (Part 1)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 10.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 10."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 10-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Meza\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kiti»",
            "Mpangilio usio sahihi wa viambishi katika «Kitanda»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ukuta»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Meza\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.1.",
            "Mpangilio usio sahihi wa viambishi katika «Kitanda»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ukuta»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kiti»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Meza\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ukuta»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kiti»",
            "Mpangilio usio sahihi wa viambishi katika «Kitanda»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u10-l2": {
    "id": "sw-u10-l2",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 2,
    "title": "Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) (Part 2)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 10.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 10."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 10-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kiti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kitanda»",
            "Mpangilio usio sahihi wa viambishi katika «Ukuta»",
            "Matumizi yasiyo sanifu ya muktadha wa «Paa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kiti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.2.",
            "Mpangilio usio sahihi wa viambishi katika «Ukuta»",
            "Matumizi yasiyo sanifu ya muktadha wa «Paa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kitanda»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kiti\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Paa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kitanda»",
            "Mpangilio usio sahihi wa viambishi katika «Ukuta»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u10-l3": {
    "id": "sw-u10-l3",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 3,
    "title": "Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) (Part 3)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 10.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 10."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 10-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kitanda\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ukuta»",
            "Mpangilio usio sahihi wa viambishi katika «Paa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kazi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kitanda\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.3.",
            "Mpangilio usio sahihi wa viambishi katika «Paa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kazi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ukuta»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kitanda\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kazi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ukuta»",
            "Mpangilio usio sahihi wa viambishi katika «Paa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u10-l4": {
    "id": "sw-u10-l4",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 4,
    "title": "Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) (Part 4)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 10.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 10."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 10-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ukuta\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Paa»",
            "Mpangilio usio sahihi wa viambishi katika «Kazi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ofisi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ukuta\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.4.",
            "Mpangilio usio sahihi wa viambishi katika «Kazi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ofisi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Paa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ukuta\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ofisi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Paa»",
            "Mpangilio usio sahihi wa viambishi katika «Kazi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u10-l5": {
    "id": "sw-u10-l5",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 5,
    "title": "Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) (Part 5)",
    "level": "A2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 10.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 10."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 10-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Paa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kazi»",
            "Mpangilio usio sahihi wa viambishi katika «Ofisi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mfanyakazi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Paa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.5.",
            "Mpangilio usio sahihi wa viambishi katika «Ofisi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mfanyakazi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kazi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Paa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 10.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mfanyakazi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kazi»",
            "Mpangilio usio sahihi wa viambishi katika «Ofisi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u11-l1": {
    "id": "sw-u11-l1",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 1,
    "title": "Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) (Part 1)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 11.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 11."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 11-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kazi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ofisi»",
            "Mpangilio usio sahihi wa viambishi katika «Mfanyakazi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bosi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kazi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mfanyakazi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bosi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ofisi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kazi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Bosi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ofisi»",
            "Mpangilio usio sahihi wa viambishi katika «Mfanyakazi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u11-l2": {
    "id": "sw-u11-l2",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 2,
    "title": "Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) (Part 2)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 11.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 11."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 11-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ofisi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mfanyakazi»",
            "Mpangilio usio sahihi wa viambishi katika «Bosi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mshahara»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ofisi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.2.",
            "Mpangilio usio sahihi wa viambishi katika «Bosi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mshahara»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mfanyakazi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ofisi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mshahara»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mfanyakazi»",
            "Mpangilio usio sahihi wa viambishi katika «Bosi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u11-l3": {
    "id": "sw-u11-l3",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 3,
    "title": "Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) (Part 3)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 11.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 11."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 11-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mfanyakazi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bosi»",
            "Mpangilio usio sahihi wa viambishi katika «Mshahara»",
            "Matumizi yasiyo sanifu ya muktadha wa «Likizo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mfanyakazi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mshahara»",
            "Matumizi yasiyo sanifu ya muktadha wa «Likizo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bosi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mfanyakazi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Likizo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bosi»",
            "Mpangilio usio sahihi wa viambishi katika «Mshahara»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u11-l4": {
    "id": "sw-u11-l4",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 4,
    "title": "Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) (Part 4)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 11.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 11."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 11-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Bosi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mshahara»",
            "Mpangilio usio sahihi wa viambishi katika «Likizo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkutano»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Bosi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.4.",
            "Mpangilio usio sahihi wa viambishi katika «Likizo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkutano»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mshahara»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Bosi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkutano»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mshahara»",
            "Mpangilio usio sahihi wa viambishi katika «Likizo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u11-l5": {
    "id": "sw-u11-l5",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 5,
    "title": "Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) (Part 5)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 11.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 11."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 11-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mshahara\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Likizo»",
            "Mpangilio usio sahihi wa viambishi katika «Mkutano»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mradi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mshahara\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.5.",
            "Mpangilio usio sahihi wa viambishi katika «Mkutano»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mradi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Likizo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mshahara\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 11.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mradi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Likizo»",
            "Mpangilio usio sahihi wa viambishi katika «Mkutano»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u12-l1": {
    "id": "sw-u12-l1",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 1,
    "title": "Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) (Part 1)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 12.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 12."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 12-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Likizo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkutano»",
            "Mpangilio usio sahihi wa viambishi katika «Mradi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkataba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Likizo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mradi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkataba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkutano»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Likizo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkataba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkutano»",
            "Mpangilio usio sahihi wa viambishi katika «Mradi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u12-l2": {
    "id": "sw-u12-l2",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 2,
    "title": "Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) (Part 2)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 12.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 12."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 12-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mkutano\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mradi»",
            "Mpangilio usio sahihi wa viambishi katika «Mkataba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Biashara»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mkutano\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.2.",
            "Mpangilio usio sahihi wa viambishi katika «Mkataba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Biashara»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mradi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mkutano\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Biashara»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mradi»",
            "Mpangilio usio sahihi wa viambishi katika «Mkataba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u12-l3": {
    "id": "sw-u12-l3",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 3,
    "title": "Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) (Part 3)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 12.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 12."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 12-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mradi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkataba»",
            "Mpangilio usio sahihi wa viambishi katika «Biashara»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kitabu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mradi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.3.",
            "Mpangilio usio sahihi wa viambishi katika «Biashara»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kitabu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkataba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mradi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kitabu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkataba»",
            "Mpangilio usio sahihi wa viambishi katika «Biashara»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u12-l4": {
    "id": "sw-u12-l4",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 4,
    "title": "Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) (Part 4)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 12.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 12."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 12-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mkataba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Biashara»",
            "Mpangilio usio sahihi wa viambishi katika «Kitabu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Muziki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mkataba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.4.",
            "Mpangilio usio sahihi wa viambishi katika «Kitabu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Muziki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Biashara»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mkataba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Muziki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Biashara»",
            "Mpangilio usio sahihi wa viambishi katika «Kitabu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u12-l5": {
    "id": "sw-u12-l5",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 5,
    "title": "Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) (Part 5)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 12.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 12."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 12-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Biashara\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kitabu»",
            "Mpangilio usio sahihi wa viambishi katika «Muziki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Filamu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Biashara\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.5.",
            "Mpangilio usio sahihi wa viambishi katika «Muziki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Filamu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kitabu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Biashara\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 12.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Filamu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kitabu»",
            "Mpangilio usio sahihi wa viambishi katika «Muziki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u13-l1": {
    "id": "sw-u13-l1",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 1,
    "title": "Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) (Part 1)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 13.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 13."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 13-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kitabu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Muziki»",
            "Mpangilio usio sahihi wa viambishi katika «Filamu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Michezo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kitabu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.1.",
            "Mpangilio usio sahihi wa viambishi katika «Filamu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Michezo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Muziki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kitabu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Michezo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Muziki»",
            "Mpangilio usio sahihi wa viambishi katika «Filamu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u13-l2": {
    "id": "sw-u13-l2",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 2,
    "title": "Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) (Part 2)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 13.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 13."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 13-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Muziki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Filamu»",
            "Mpangilio usio sahihi wa viambishi katika «Michezo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mpira wa miguu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Muziki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.2.",
            "Mpangilio usio sahihi wa viambishi katika «Michezo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mpira wa miguu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Filamu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Muziki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mpira wa miguu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Filamu»",
            "Mpangilio usio sahihi wa viambishi katika «Michezo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u13-l3": {
    "id": "sw-u13-l3",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 3,
    "title": "Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) (Part 3)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 13.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 13."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 13-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Filamu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Michezo»",
            "Mpangilio usio sahihi wa viambishi katika «Mpira wa miguu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Safari»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Filamu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mpira wa miguu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Safari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Michezo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Filamu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Safari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Michezo»",
            "Mpangilio usio sahihi wa viambishi katika «Mpira wa miguu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u13-l4": {
    "id": "sw-u13-l4",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 4,
    "title": "Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) (Part 4)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 13.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 13."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 13-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Michezo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mpira wa miguu»",
            "Mpangilio usio sahihi wa viambishi katika «Safari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Sanaa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Michezo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.4.",
            "Mpangilio usio sahihi wa viambishi katika «Safari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Sanaa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mpira wa miguu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Michezo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Sanaa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mpira wa miguu»",
            "Mpangilio usio sahihi wa viambishi katika «Safari»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u13-l5": {
    "id": "sw-u13-l5",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 5,
    "title": "Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) (Part 5)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 13.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 13."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 13-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mpira wa miguu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Safari»",
            "Mpangilio usio sahihi wa viambishi katika «Sanaa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mashairi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mpira wa miguu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.5.",
            "Mpangilio usio sahihi wa viambishi katika «Sanaa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mashairi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Safari»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mpira wa miguu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 13.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mashairi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Safari»",
            "Mpangilio usio sahihi wa viambishi katika «Sanaa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u14-l1": {
    "id": "sw-u14-l1",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 1,
    "title": "Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) (Part 1)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 14.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 14."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 14-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Safari\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sanaa»",
            "Mpangilio usio sahihi wa viambishi katika «Mashairi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ngoma»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Safari\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mashairi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ngoma»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sanaa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Safari\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ngoma»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sanaa»",
            "Mpangilio usio sahihi wa viambishi katika «Mashairi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u14-l2": {
    "id": "sw-u14-l2",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 2,
    "title": "Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) (Part 2)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 14.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 14."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 14-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Sanaa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mashairi»",
            "Mpangilio usio sahihi wa viambishi katika «Ngoma»",
            "Matumizi yasiyo sanifu ya muktadha wa «Utamaduni»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Sanaa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.2.",
            "Mpangilio usio sahihi wa viambishi katika «Ngoma»",
            "Matumizi yasiyo sanifu ya muktadha wa «Utamaduni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mashairi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Sanaa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Utamaduni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mashairi»",
            "Mpangilio usio sahihi wa viambishi katika «Ngoma»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u14-l3": {
    "id": "sw-u14-l3",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 3,
    "title": "Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) (Part 3)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 14.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 14."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 14-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mashairi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ngoma»",
            "Mpangilio usio sahihi wa viambishi katika «Utamaduni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hali ya hewa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mashairi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.3.",
            "Mpangilio usio sahihi wa viambishi katika «Utamaduni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hali ya hewa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ngoma»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mashairi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Hali ya hewa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ngoma»",
            "Mpangilio usio sahihi wa viambishi katika «Utamaduni»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u14-l4": {
    "id": "sw-u14-l4",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 4,
    "title": "Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) (Part 4)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 14.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 14."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 14-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ngoma\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Utamaduni»",
            "Mpangilio usio sahihi wa viambishi katika «Hali ya hewa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jua»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ngoma\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.4.",
            "Mpangilio usio sahihi wa viambishi katika «Hali ya hewa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jua»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Utamaduni»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ngoma\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Jua»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Utamaduni»",
            "Mpangilio usio sahihi wa viambishi katika «Hali ya hewa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u14-l5": {
    "id": "sw-u14-l5",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 5,
    "title": "Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) (Part 5)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 14.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 14."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 14-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Utamaduni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hali ya hewa»",
            "Mpangilio usio sahihi wa viambishi katika «Jua»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mvua»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Utamaduni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.5.",
            "Mpangilio usio sahihi wa viambishi katika «Jua»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mvua»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hali ya hewa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Utamaduni\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 14.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mvua»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hali ya hewa»",
            "Mpangilio usio sahihi wa viambishi katika «Jua»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u15-l1": {
    "id": "sw-u15-l1",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 1,
    "title": "Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) (Part 1)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 15.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 15."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 15-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Hali ya hewa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jua»",
            "Mpangilio usio sahihi wa viambishi katika «Mvua»",
            "Matumizi yasiyo sanifu ya muktadha wa «Upepo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Hali ya hewa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mvua»",
            "Matumizi yasiyo sanifu ya muktadha wa «Upepo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jua»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Hali ya hewa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Upepo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jua»",
            "Mpangilio usio sahihi wa viambishi katika «Mvua»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u15-l2": {
    "id": "sw-u15-l2",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 2,
    "title": "Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) (Part 2)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 15.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 15."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 15-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Jua\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mvua»",
            "Mpangilio usio sahihi wa viambishi katika «Upepo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mawingu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Jua\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.2.",
            "Mpangilio usio sahihi wa viambishi katika «Upepo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mawingu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mvua»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Jua\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mawingu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mvua»",
            "Mpangilio usio sahihi wa viambishi katika «Upepo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u15-l3": {
    "id": "sw-u15-l3",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 3,
    "title": "Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) (Part 3)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 15.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 15."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 15-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mvua\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Upepo»",
            "Mpangilio usio sahihi wa viambishi katika «Mawingu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Joto»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mvua\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mawingu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Joto»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Upepo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mvua\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Joto»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Upepo»",
            "Mpangilio usio sahihi wa viambishi katika «Mawingu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u15-l4": {
    "id": "sw-u15-l4",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 4,
    "title": "Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) (Part 4)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 15.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 15."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 15-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Upepo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mawingu»",
            "Mpangilio usio sahihi wa viambishi katika «Joto»",
            "Matumizi yasiyo sanifu ya muktadha wa «Baridi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Upepo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.4.",
            "Mpangilio usio sahihi wa viambishi katika «Joto»",
            "Matumizi yasiyo sanifu ya muktadha wa «Baridi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mawingu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Upepo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Baridi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mawingu»",
            "Mpangilio usio sahihi wa viambishi katika «Joto»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u15-l5": {
    "id": "sw-u15-l5",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 5,
    "title": "Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) (Part 5)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 15.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 15."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 15-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mawingu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Joto»",
            "Mpangilio usio sahihi wa viambishi katika «Baridi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Masika»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mawingu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.5.",
            "Mpangilio usio sahihi wa viambishi katika «Baridi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Masika»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Joto»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mawingu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 15.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Masika»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Joto»",
            "Mpangilio usio sahihi wa viambishi katika «Baridi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u16-l1": {
    "id": "sw-u16-l1",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 1,
    "title": "Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) (Part 1)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 16.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 16."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 16-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Joto\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Baridi»",
            "Mpangilio usio sahihi wa viambishi katika «Masika»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kipupwe»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Joto\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.1.",
            "Mpangilio usio sahihi wa viambishi katika «Masika»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kipupwe»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Baridi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Joto\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kipupwe»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Baridi»",
            "Mpangilio usio sahihi wa viambishi katika «Masika»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u16-l2": {
    "id": "sw-u16-l2",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 2,
    "title": "Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) (Part 2)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 16.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 16."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 16-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Baridi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Masika»",
            "Mpangilio usio sahihi wa viambishi katika «Kipupwe»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kiwango cha joto»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Baridi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kipupwe»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kiwango cha joto»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Masika»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Baridi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kiwango cha joto»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Masika»",
            "Mpangilio usio sahihi wa viambishi katika «Kipupwe»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u16-l3": {
    "id": "sw-u16-l3",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 3,
    "title": "Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) (Part 3)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 16.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 16."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 16-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Masika\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kipupwe»",
            "Mpangilio usio sahihi wa viambishi katika «Kiwango cha joto»",
            "Matumizi yasiyo sanifu ya muktadha wa «Daktari»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Masika\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.3.",
            "Mpangilio usio sahihi wa viambishi katika «Kiwango cha joto»",
            "Matumizi yasiyo sanifu ya muktadha wa «Daktari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kipupwe»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Masika\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Daktari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kipupwe»",
            "Mpangilio usio sahihi wa viambishi katika «Kiwango cha joto»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u16-l4": {
    "id": "sw-u16-l4",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 4,
    "title": "Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) (Part 4)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 16.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 16."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 16-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kipupwe\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kiwango cha joto»",
            "Mpangilio usio sahihi wa viambishi katika «Daktari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Dawa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kipupwe\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.4.",
            "Mpangilio usio sahihi wa viambishi katika «Daktari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Dawa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kiwango cha joto»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kipupwe\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Dawa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kiwango cha joto»",
            "Mpangilio usio sahihi wa viambishi katika «Daktari»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u16-l5": {
    "id": "sw-u16-l5",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 5,
    "title": "Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) (Part 5)",
    "level": "B1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 16.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 16."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 16-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kiwango cha joto\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Daktari»",
            "Mpangilio usio sahihi wa viambishi katika «Dawa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hospitali»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kiwango cha joto\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.5.",
            "Mpangilio usio sahihi wa viambishi katika «Dawa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hospitali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Daktari»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kiwango cha joto\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 16.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Hospitali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Daktari»",
            "Mpangilio usio sahihi wa viambishi katika «Dawa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u17-l1": {
    "id": "sw-u17-l1",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 17.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 17."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 17-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Daktari\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dawa»",
            "Mpangilio usio sahihi wa viambishi katika «Hospitali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Afya»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Daktari\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.1.",
            "Mpangilio usio sahihi wa viambishi katika «Hospitali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Afya»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dawa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Daktari\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Afya»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dawa»",
            "Mpangilio usio sahihi wa viambishi katika «Hospitali»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u17-l2": {
    "id": "sw-u17-l2",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 17.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 17."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 17-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Dawa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hospitali»",
            "Mpangilio usio sahihi wa viambishi katika «Afya»",
            "Matumizi yasiyo sanifu ya muktadha wa «Matibabu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Dawa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.2.",
            "Mpangilio usio sahihi wa viambishi katika «Afya»",
            "Matumizi yasiyo sanifu ya muktadha wa «Matibabu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hospitali»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Dawa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Matibabu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hospitali»",
            "Mpangilio usio sahihi wa viambishi katika «Afya»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u17-l3": {
    "id": "sw-u17-l3",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 17.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 17."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 17-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Hospitali\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Afya»",
            "Mpangilio usio sahihi wa viambishi katika «Matibabu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Homa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Hospitali\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.3.",
            "Mpangilio usio sahihi wa viambishi katika «Matibabu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Homa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Afya»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Hospitali\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Homa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Afya»",
            "Mpangilio usio sahihi wa viambishi katika «Matibabu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u17-l4": {
    "id": "sw-u17-l4",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 4,
    "title": "Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 17.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 17."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 17-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Afya\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matibabu»",
            "Mpangilio usio sahihi wa viambishi katika «Homa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maumivu ya kichwa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Afya\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.4.",
            "Mpangilio usio sahihi wa viambishi katika «Homa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maumivu ya kichwa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matibabu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Afya\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Maumivu ya kichwa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matibabu»",
            "Mpangilio usio sahihi wa viambishi katika «Homa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u17-l5": {
    "id": "sw-u17-l5",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 5,
    "title": "Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 17.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 17."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 17-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Matibabu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Homa»",
            "Mpangilio usio sahihi wa viambishi katika «Maumivu ya kichwa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Macho»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Matibabu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.5.",
            "Mpangilio usio sahihi wa viambishi katika «Maumivu ya kichwa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Macho»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Homa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Matibabu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 17.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Macho»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Homa»",
            "Mpangilio usio sahihi wa viambishi katika «Maumivu ya kichwa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u18-l1": {
    "id": "sw-u18-l1",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 18.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 18."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 18-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Homa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maumivu ya kichwa»",
            "Mpangilio usio sahihi wa viambishi katika «Macho»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mikono»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Homa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.1.",
            "Mpangilio usio sahihi wa viambishi katika «Macho»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mikono»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maumivu ya kichwa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Homa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mikono»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maumivu ya kichwa»",
            "Mpangilio usio sahihi wa viambishi katika «Macho»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u18-l2": {
    "id": "sw-u18-l2",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 18.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 18."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 18-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Maumivu ya kichwa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Macho»",
            "Mpangilio usio sahihi wa viambishi katika «Mikono»",
            "Matumizi yasiyo sanifu ya muktadha wa «Moyo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Maumivu ya kichwa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.2.",
            "Mpangilio usio sahihi wa viambishi katika «Mikono»",
            "Matumizi yasiyo sanifu ya muktadha wa «Moyo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Macho»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Maumivu ya kichwa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Moyo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Macho»",
            "Mpangilio usio sahihi wa viambishi katika «Mikono»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u18-l3": {
    "id": "sw-u18-l3",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 18.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 18."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 18-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Macho\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mikono»",
            "Mpangilio usio sahihi wa viambishi katika «Moyo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Familia»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Macho\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.3.",
            "Mpangilio usio sahihi wa viambishi katika «Moyo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Familia»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mikono»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Macho\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Familia»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mikono»",
            "Mpangilio usio sahihi wa viambishi katika «Moyo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u18-l4": {
    "id": "sw-u18-l4",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 4,
    "title": "Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 18.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 18."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 18-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mikono\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Moyo»",
            "Mpangilio usio sahihi wa viambishi katika «Familia»",
            "Matumizi yasiyo sanifu ya muktadha wa «Baba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mikono\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.4.",
            "Mpangilio usio sahihi wa viambishi katika «Familia»",
            "Matumizi yasiyo sanifu ya muktadha wa «Baba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Moyo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mikono\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Baba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Moyo»",
            "Mpangilio usio sahihi wa viambishi katika «Familia»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u18-l5": {
    "id": "sw-u18-l5",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 5,
    "title": "Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 18.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 18."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 18-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Moyo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Familia»",
            "Mpangilio usio sahihi wa viambishi katika «Baba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mama»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Moyo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.5.",
            "Mpangilio usio sahihi wa viambishi katika «Baba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mama»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Familia»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Moyo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 18.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mama»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Familia»",
            "Mpangilio usio sahihi wa viambishi katika «Baba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u19-l1": {
    "id": "sw-u19-l1",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 19.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 19."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 19-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Familia\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Baba»",
            "Mpangilio usio sahihi wa viambishi katika «Mama»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kaka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Familia\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mama»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kaka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Baba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Familia\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kaka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Baba»",
            "Mpangilio usio sahihi wa viambishi katika «Mama»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u19-l2": {
    "id": "sw-u19-l2",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 19.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 19."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 19-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Baba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mama»",
            "Mpangilio usio sahihi wa viambishi katika «Kaka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Dada»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Baba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kaka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Dada»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mama»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Baba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Dada»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mama»",
            "Mpangilio usio sahihi wa viambishi katika «Kaka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u19-l3": {
    "id": "sw-u19-l3",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 19.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 19."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 19-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mama\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kaka»",
            "Mpangilio usio sahihi wa viambishi katika «Dada»",
            "Matumizi yasiyo sanifu ya muktadha wa «Babu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mama\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.3.",
            "Mpangilio usio sahihi wa viambishi katika «Dada»",
            "Matumizi yasiyo sanifu ya muktadha wa «Babu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kaka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mama\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Babu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kaka»",
            "Mpangilio usio sahihi wa viambishi katika «Dada»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u19-l4": {
    "id": "sw-u19-l4",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 4,
    "title": "Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 19.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 19."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 19-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kaka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dada»",
            "Mpangilio usio sahihi wa viambishi katika «Babu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bibi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kaka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.4.",
            "Mpangilio usio sahihi wa viambishi katika «Babu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bibi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dada»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kaka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Bibi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Dada»",
            "Mpangilio usio sahihi wa viambishi katika «Babu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u19-l5": {
    "id": "sw-u19-l5",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 5,
    "title": "Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 19.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 19."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 19-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Dada\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Babu»",
            "Mpangilio usio sahihi wa viambishi katika «Bibi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mtoto»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Dada\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.5.",
            "Mpangilio usio sahihi wa viambishi katika «Bibi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mtoto»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Babu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Dada\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 19.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mtoto»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Babu»",
            "Mpangilio usio sahihi wa viambishi katika «Bibi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u20-l1": {
    "id": "sw-u20-l1",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verbs) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 20.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 20."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 20-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Babu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bibi»",
            "Mpangilio usio sahihi wa viambishi katika «Mtoto»",
            "Matumizi yasiyo sanifu ya muktadha wa «Binti»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Babu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mtoto»",
            "Matumizi yasiyo sanifu ya muktadha wa «Binti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bibi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Babu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Binti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bibi»",
            "Mpangilio usio sahihi wa viambishi katika «Mtoto»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u20-l2": {
    "id": "sw-u20-l2",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verbs) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 20.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 20."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 20-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Bibi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mtoto»",
            "Mpangilio usio sahihi wa viambishi katika «Binti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Rafiki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Bibi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.2.",
            "Mpangilio usio sahihi wa viambishi katika «Binti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Rafiki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mtoto»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Bibi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Rafiki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mtoto»",
            "Mpangilio usio sahihi wa viambishi katika «Binti»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u20-l3": {
    "id": "sw-u20-l3",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verbs) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 20.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 20."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 20-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mtoto\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Binti»",
            "Mpangilio usio sahihi wa viambishi katika «Rafiki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Leo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mtoto\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.3.",
            "Mpangilio usio sahihi wa viambishi katika «Rafiki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Leo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Binti»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mtoto\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Leo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Binti»",
            "Mpangilio usio sahihi wa viambishi katika «Rafiki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u20-l4": {
    "id": "sw-u20-l4",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 4,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verbs) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 20.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 20."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 20-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Binti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Rafiki»",
            "Mpangilio usio sahihi wa viambishi katika «Leo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jana»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Binti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.4.",
            "Mpangilio usio sahihi wa viambishi katika «Leo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jana»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Rafiki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Binti\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Jana»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Rafiki»",
            "Mpangilio usio sahihi wa viambishi katika «Leo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u20-l5": {
    "id": "sw-u20-l5",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 5,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verbs) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 20.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 20."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 20-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Rafiki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Leo»",
            "Mpangilio usio sahihi wa viambishi katika «Jana»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kesho»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Rafiki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.5.",
            "Mpangilio usio sahihi wa viambishi katika «Jana»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kesho»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Leo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Rafiki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 20.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kesho»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Leo»",
            "Mpangilio usio sahihi wa viambishi katika «Jana»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u21-l1": {
    "id": "sw-u21-l1",
    "subject": "swahili",
    "unit": 21,
    "lessonNumber": 1,
    "title": "Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 21.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 21."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 21-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Leo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jana»",
            "Mpangilio usio sahihi wa viambishi katika «Kesho»",
            "Matumizi yasiyo sanifu ya muktadha wa «Asubuhi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Leo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.1.",
            "Mpangilio usio sahihi wa viambishi katika «Kesho»",
            "Matumizi yasiyo sanifu ya muktadha wa «Asubuhi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jana»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Leo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Asubuhi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jana»",
            "Mpangilio usio sahihi wa viambishi katika «Kesho»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u21-l2": {
    "id": "sw-u21-l2",
    "subject": "swahili",
    "unit": 21,
    "lessonNumber": 2,
    "title": "Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 21.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 21."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 21-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Jana\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kesho»",
            "Mpangilio usio sahihi wa viambishi katika «Asubuhi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mchana»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Jana\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.2.",
            "Mpangilio usio sahihi wa viambishi katika «Asubuhi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mchana»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kesho»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Jana\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mchana»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kesho»",
            "Mpangilio usio sahihi wa viambishi katika «Asubuhi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u21-l3": {
    "id": "sw-u21-l3",
    "subject": "swahili",
    "unit": 21,
    "lessonNumber": 3,
    "title": "Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 21.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 21."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 21-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kesho\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Asubuhi»",
            "Mpangilio usio sahihi wa viambishi katika «Mchana»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jioni»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kesho\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mchana»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jioni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Asubuhi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kesho\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Jioni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Asubuhi»",
            "Mpangilio usio sahihi wa viambishi katika «Mchana»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u21-l4": {
    "id": "sw-u21-l4",
    "subject": "swahili",
    "unit": 21,
    "lessonNumber": 4,
    "title": "Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 21.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 21."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 21-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Asubuhi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mchana»",
            "Mpangilio usio sahihi wa viambishi katika «Jioni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Usiku»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Asubuhi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.4.",
            "Mpangilio usio sahihi wa viambishi katika «Jioni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Usiku»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mchana»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Asubuhi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Usiku»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mchana»",
            "Mpangilio usio sahihi wa viambishi katika «Jioni»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u21-l5": {
    "id": "sw-u21-l5",
    "subject": "swahili",
    "unit": 21,
    "lessonNumber": 5,
    "title": "Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 21.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 21."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 21-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mchana\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jioni»",
            "Mpangilio usio sahihi wa viambishi katika «Usiku»",
            "Matumizi yasiyo sanifu ya muktadha wa «Wiki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mchana\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.5.",
            "Mpangilio usio sahihi wa viambishi katika «Usiku»",
            "Matumizi yasiyo sanifu ya muktadha wa «Wiki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jioni»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mchana\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 21.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Wiki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jioni»",
            "Mpangilio usio sahihi wa viambishi katika «Usiku»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u22-l1": {
    "id": "sw-u22-l1",
    "subject": "swahili",
    "unit": 22,
    "lessonNumber": 1,
    "title": "Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 22.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 22."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 22-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Jioni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Usiku»",
            "Mpangilio usio sahihi wa viambishi katika «Wiki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwezi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Jioni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.1.",
            "Mpangilio usio sahihi wa viambishi katika «Wiki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwezi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Usiku»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Jioni\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwezi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Usiku»",
            "Mpangilio usio sahihi wa viambishi katika «Wiki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u22-l2": {
    "id": "sw-u22-l2",
    "subject": "swahili",
    "unit": 22,
    "lessonNumber": 2,
    "title": "Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 22.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 22."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 22-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Usiku\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wiki»",
            "Mpangilio usio sahihi wa viambishi katika «Mwezi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwaka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Usiku\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.2.",
            "Mpangilio usio sahihi wa viambishi katika «Mwezi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwaka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wiki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Usiku\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwaka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wiki»",
            "Mpangilio usio sahihi wa viambishi katika «Mwezi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u22-l3": {
    "id": "sw-u22-l3",
    "subject": "swahili",
    "unit": 22,
    "lessonNumber": 3,
    "title": "Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 22.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 22."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 22-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Wiki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwezi»",
            "Mpangilio usio sahihi wa viambishi katika «Mwaka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyekundu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Wiki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.3.",
            "Mpangilio usio sahihi wa viambishi katika «Mwaka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyekundu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwezi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Wiki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyekundu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwezi»",
            "Mpangilio usio sahihi wa viambishi katika «Mwaka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u22-l4": {
    "id": "sw-u22-l4",
    "subject": "swahili",
    "unit": 22,
    "lessonNumber": 4,
    "title": "Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 22.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 22."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 22-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mwezi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwaka»",
            "Mpangilio usio sahihi wa viambishi katika «Nyekundu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Buluu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mwezi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.4.",
            "Mpangilio usio sahihi wa viambishi katika «Nyekundu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Buluu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwaka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mwezi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Buluu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwaka»",
            "Mpangilio usio sahihi wa viambishi katika «Nyekundu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u22-l5": {
    "id": "sw-u22-l5",
    "subject": "swahili",
    "unit": 22,
    "lessonNumber": 5,
    "title": "Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 22.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 22."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 22-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mwaka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyekundu»",
            "Mpangilio usio sahihi wa viambishi katika «Buluu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Manjano»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mwaka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.5.",
            "Mpangilio usio sahihi wa viambishi katika «Buluu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Manjano»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyekundu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mwaka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 22.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Manjano»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyekundu»",
            "Mpangilio usio sahihi wa viambishi katika «Buluu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u23-l1": {
    "id": "sw-u23-l1",
    "subject": "swahili",
    "unit": 23,
    "lessonNumber": 1,
    "title": "Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 23.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 23."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 23-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nyekundu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Buluu»",
            "Mpangilio usio sahihi wa viambishi katika «Manjano»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kijani»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nyekundu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.1.",
            "Mpangilio usio sahihi wa viambishi katika «Manjano»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kijani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Buluu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nyekundu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kijani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Buluu»",
            "Mpangilio usio sahihi wa viambishi katika «Manjano»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u23-l2": {
    "id": "sw-u23-l2",
    "subject": "swahili",
    "unit": 23,
    "lessonNumber": 2,
    "title": "Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 23.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 23."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 23-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Buluu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Manjano»",
            "Mpangilio usio sahihi wa viambishi katika «Kijani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyeupe»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Buluu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kijani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyeupe»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Manjano»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Buluu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyeupe»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Manjano»",
            "Mpangilio usio sahihi wa viambishi katika «Kijani»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u23-l3": {
    "id": "sw-u23-l3",
    "subject": "swahili",
    "unit": 23,
    "lessonNumber": 3,
    "title": "Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 23.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 23."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 23-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Manjano\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kijani»",
            "Mpangilio usio sahihi wa viambishi katika «Nyeupe»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyeusi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Manjano\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.3.",
            "Mpangilio usio sahihi wa viambishi katika «Nyeupe»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyeusi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kijani»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Manjano\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyeusi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kijani»",
            "Mpangilio usio sahihi wa viambishi katika «Nyeupe»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u23-l4": {
    "id": "sw-u23-l4",
    "subject": "swahili",
    "unit": 23,
    "lessonNumber": 4,
    "title": "Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 23.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 23."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 23-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kijani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyeupe»",
            "Mpangilio usio sahihi wa viambishi katika «Nyeusi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kijivu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kijani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.4.",
            "Mpangilio usio sahihi wa viambishi katika «Nyeusi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kijivu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyeupe»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kijani\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kijivu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyeupe»",
            "Mpangilio usio sahihi wa viambishi katika «Nyeusi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u23-l5": {
    "id": "sw-u23-l5",
    "subject": "swahili",
    "unit": 23,
    "lessonNumber": 5,
    "title": "Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 23.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 23."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 23-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nyeupe\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyeusi»",
            "Mpangilio usio sahihi wa viambishi katika «Kijivu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hudhurungi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nyeupe\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.5.",
            "Mpangilio usio sahihi wa viambishi katika «Kijivu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hudhurungi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyeusi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nyeupe\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 23.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Hudhurungi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyeusi»",
            "Mpangilio usio sahihi wa viambishi katika «Kijivu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u24-l1": {
    "id": "sw-u24-l1",
    "subject": "swahili",
    "unit": 24,
    "lessonNumber": 1,
    "title": "Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) (Part 1)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 24.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 24."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 24-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nyeusi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kijivu»",
            "Mpangilio usio sahihi wa viambishi katika «Hudhurungi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Waridi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nyeusi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.1.",
            "Mpangilio usio sahihi wa viambishi katika «Hudhurungi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Waridi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kijivu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nyeusi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Waridi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kijivu»",
            "Mpangilio usio sahihi wa viambishi katika «Hudhurungi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u24-l2": {
    "id": "sw-u24-l2",
    "subject": "swahili",
    "unit": 24,
    "lessonNumber": 2,
    "title": "Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) (Part 2)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 24.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 24."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 24-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kijivu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hudhurungi»",
            "Mpangilio usio sahihi wa viambishi katika «Waridi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Urujuani»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kijivu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.2.",
            "Mpangilio usio sahihi wa viambishi katika «Waridi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Urujuani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hudhurungi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kijivu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Urujuani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hudhurungi»",
            "Mpangilio usio sahihi wa viambishi katika «Waridi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u24-l3": {
    "id": "sw-u24-l3",
    "subject": "swahili",
    "unit": 24,
    "lessonNumber": 3,
    "title": "Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) (Part 3)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 24.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 24."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 24-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Hudhurungi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Waridi»",
            "Mpangilio usio sahihi wa viambishi katika «Urujuani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kubwa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Hudhurungi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.3.",
            "Mpangilio usio sahihi wa viambishi katika «Urujuani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kubwa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Waridi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Hudhurungi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kubwa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Waridi»",
            "Mpangilio usio sahihi wa viambishi katika «Urujuani»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u24-l4": {
    "id": "sw-u24-l4",
    "subject": "swahili",
    "unit": 24,
    "lessonNumber": 4,
    "title": "Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) (Part 4)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 24.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 24."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 24-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Waridi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Urujuani»",
            "Mpangilio usio sahihi wa viambishi katika «Kubwa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndogo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Waridi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.4.",
            "Mpangilio usio sahihi wa viambishi katika «Kubwa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndogo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Urujuani»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Waridi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndogo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Urujuani»",
            "Mpangilio usio sahihi wa viambishi katika «Kubwa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u24-l5": {
    "id": "sw-u24-l5",
    "subject": "swahili",
    "unit": 24,
    "lessonNumber": 5,
    "title": "Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) (Part 5)",
    "level": "B2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 24.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 24."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 24-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Urujuani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kubwa»",
            "Mpangilio usio sahihi wa viambishi katika «Ndogo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndefu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Urujuani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.5.",
            "Mpangilio usio sahihi wa viambishi katika «Ndogo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndefu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kubwa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Urujuani\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 24.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Ndefu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kubwa»",
            "Mpangilio usio sahihi wa viambishi katika «Ndogo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u25-l1": {
    "id": "sw-u25-l1",
    "subject": "swahili",
    "unit": 25,
    "lessonNumber": 1,
    "title": "Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) (Part 1)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 25.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 25."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 25-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kubwa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndogo»",
            "Mpangilio usio sahihi wa viambishi katika «Ndefu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Fupi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kubwa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.1.",
            "Mpangilio usio sahihi wa viambishi katika «Ndefu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Fupi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndogo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kubwa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Fupi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndogo»",
            "Mpangilio usio sahihi wa viambishi katika «Ndefu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u25-l2": {
    "id": "sw-u25-l2",
    "subject": "swahili",
    "unit": 25,
    "lessonNumber": 2,
    "title": "Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) (Part 2)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 25.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 25."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 25-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ndogo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndefu»",
            "Mpangilio usio sahihi wa viambishi katika «Fupi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Haraka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ndogo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.2.",
            "Mpangilio usio sahihi wa viambishi katika «Fupi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Haraka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndefu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ndogo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Haraka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Ndefu»",
            "Mpangilio usio sahihi wa viambishi katika «Fupi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u25-l3": {
    "id": "sw-u25-l3",
    "subject": "swahili",
    "unit": 25,
    "lessonNumber": 3,
    "title": "Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) (Part 3)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 25.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 25."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 25-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ndefu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Fupi»",
            "Mpangilio usio sahihi wa viambishi katika «Haraka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Polepole»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ndefu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.3.",
            "Mpangilio usio sahihi wa viambishi katika «Haraka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Polepole»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Fupi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ndefu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Polepole»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Fupi»",
            "Mpangilio usio sahihi wa viambishi katika «Haraka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u25-l4": {
    "id": "sw-u25-l4",
    "subject": "swahili",
    "unit": 25,
    "lessonNumber": 4,
    "title": "Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) (Part 4)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 25.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 25."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 25-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Fupi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Haraka»",
            "Mpangilio usio sahihi wa viambishi katika «Polepole»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mpya»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Fupi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.4.",
            "Mpangilio usio sahihi wa viambishi katika «Polepole»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mpya»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Haraka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Fupi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mpya»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Haraka»",
            "Mpangilio usio sahihi wa viambishi katika «Polepole»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u25-l5": {
    "id": "sw-u25-l5",
    "subject": "swahili",
    "unit": 25,
    "lessonNumber": 5,
    "title": "Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) (Part 5)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 25.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 25."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 25-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Haraka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Polepole»",
            "Mpangilio usio sahihi wa viambishi katika «Mpya»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nzee»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Haraka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.5.",
            "Mpangilio usio sahihi wa viambishi katika «Mpya»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nzee»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Polepole»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Haraka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 25.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nzee»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Polepole»",
            "Mpangilio usio sahihi wa viambishi katika «Mpya»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u26-l1": {
    "id": "sw-u26-l1",
    "subject": "swahili",
    "unit": 26,
    "lessonNumber": 1,
    "title": "Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) (Part 1)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 26.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 26."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 26-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Polepole\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mpya»",
            "Mpangilio usio sahihi wa viambishi katika «Nzee»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nzuri»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Polepole\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.1.",
            "Mpangilio usio sahihi wa viambishi katika «Nzee»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nzuri»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mpya»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Polepole\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nzuri»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mpya»",
            "Mpangilio usio sahihi wa viambishi katika «Nzee»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u26-l2": {
    "id": "sw-u26-l2",
    "subject": "swahili",
    "unit": 26,
    "lessonNumber": 2,
    "title": "Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) (Part 2)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 26.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 26."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 26-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mpya\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nzee»",
            "Mpangilio usio sahihi wa viambishi katika «Nzuri»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bora»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mpya\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.2.",
            "Mpangilio usio sahihi wa viambishi katika «Nzuri»",
            "Matumizi yasiyo sanifu ya muktadha wa «Bora»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nzee»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mpya\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Bora»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nzee»",
            "Mpangilio usio sahihi wa viambishi katika «Nzuri»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u26-l3": {
    "id": "sw-u26-l3",
    "subject": "swahili",
    "unit": 26,
    "lessonNumber": 3,
    "title": "Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) (Part 3)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 26.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 26."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 26-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nzee\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nzuri»",
            "Mpangilio usio sahihi wa viambishi katika «Bora»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuelewa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nzee\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.3.",
            "Mpangilio usio sahihi wa viambishi katika «Bora»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuelewa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nzuri»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nzee\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuelewa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nzuri»",
            "Mpangilio usio sahihi wa viambishi katika «Bora»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u26-l4": {
    "id": "sw-u26-l4",
    "subject": "swahili",
    "unit": 26,
    "lessonNumber": 4,
    "title": "Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) (Part 4)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 26.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 26."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 26-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nzuri\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bora»",
            "Mpangilio usio sahihi wa viambishi katika «Kuelewa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kujua»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nzuri\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.4.",
            "Mpangilio usio sahihi wa viambishi katika «Kuelewa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kujua»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bora»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nzuri\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kujua»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Bora»",
            "Mpangilio usio sahihi wa viambishi katika «Kuelewa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u26-l5": {
    "id": "sw-u26-l5",
    "subject": "swahili",
    "unit": 26,
    "lessonNumber": 5,
    "title": "Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) (Part 5)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 26.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 26."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 26-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Bora\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuelewa»",
            "Mpangilio usio sahihi wa viambishi katika «Kujua»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kufikiri»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Bora\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.5.",
            "Mpangilio usio sahihi wa viambishi katika «Kujua»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kufikiri»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuelewa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Bora\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 26.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kufikiri»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuelewa»",
            "Mpangilio usio sahihi wa viambishi katika «Kujua»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u27-l1": {
    "id": "sw-u27-l1",
    "subject": "swahili",
    "unit": 27,
    "lessonNumber": 1,
    "title": "Afya ya Jamii, Tiba na Epidemiolojia (Public Health) (Part 1)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 27.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 27."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 27-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kuelewa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kujua»",
            "Mpangilio usio sahihi wa viambishi katika «Kufikiri»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kukumbuka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kuelewa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.1.",
            "Mpangilio usio sahihi wa viambishi katika «Kufikiri»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kukumbuka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kujua»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kuelewa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kukumbuka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kujua»",
            "Mpangilio usio sahihi wa viambishi katika «Kufikiri»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u27-l2": {
    "id": "sw-u27-l2",
    "subject": "swahili",
    "unit": 27,
    "lessonNumber": 2,
    "title": "Afya ya Jamii, Tiba na Epidemiolojia (Public Health) (Part 2)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 27.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 27."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 27-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kujua\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kufikiri»",
            "Mpangilio usio sahihi wa viambishi katika «Kukumbuka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusema»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kujua\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kukumbuka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusema»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kufikiri»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kujua\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusema»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kufikiri»",
            "Mpangilio usio sahihi wa viambishi katika «Kukumbuka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u27-l3": {
    "id": "sw-u27-l3",
    "subject": "swahili",
    "unit": 27,
    "lessonNumber": 3,
    "title": "Afya ya Jamii, Tiba na Epidemiolojia (Public Health) (Part 3)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 27.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 27."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 27-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kufikiri\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kukumbuka»",
            "Mpangilio usio sahihi wa viambishi katika «Kusema»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusoma»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kufikiri\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.3.",
            "Mpangilio usio sahihi wa viambishi katika «Kusema»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusoma»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kukumbuka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kufikiri\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusoma»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kukumbuka»",
            "Mpangilio usio sahihi wa viambishi katika «Kusema»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u27-l4": {
    "id": "sw-u27-l4",
    "subject": "swahili",
    "unit": 27,
    "lessonNumber": 4,
    "title": "Afya ya Jamii, Tiba na Epidemiolojia (Public Health) (Part 4)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 27.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 27."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 27-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kukumbuka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusema»",
            "Mpangilio usio sahihi wa viambishi katika «Kusoma»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuandika»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kukumbuka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.4.",
            "Mpangilio usio sahihi wa viambishi katika «Kusoma»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuandika»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusema»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kukumbuka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuandika»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusema»",
            "Mpangilio usio sahihi wa viambishi katika «Kusoma»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u27-l5": {
    "id": "sw-u27-l5",
    "subject": "swahili",
    "unit": 27,
    "lessonNumber": 5,
    "title": "Afya ya Jamii, Tiba na Epidemiolojia (Public Health) (Part 5)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 27.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 27."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 27-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kusema\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusoma»",
            "Mpangilio usio sahihi wa viambishi katika «Kuandika»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusikiliza»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kusema\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.5.",
            "Mpangilio usio sahihi wa viambishi katika «Kuandika»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusikiliza»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusoma»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kusema\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 27.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kusikiliza»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusoma»",
            "Mpangilio usio sahihi wa viambishi katika «Kuandika»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u28-l1": {
    "id": "sw-u28-l1",
    "subject": "swahili",
    "unit": 28,
    "lessonNumber": 1,
    "title": "Uandishi wa Habari, Tahariri na Utangazaji (Journalism) (Part 1)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 28.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 28."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 28-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kusoma\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuandika»",
            "Mpangilio usio sahihi wa viambishi katika «Kusikiliza»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuona»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kusoma\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.1.",
            "Mpangilio usio sahihi wa viambishi katika «Kusikiliza»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuona»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuandika»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kusoma\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kuona»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuandika»",
            "Mpangilio usio sahihi wa viambishi katika «Kusikiliza»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u28-l2": {
    "id": "sw-u28-l2",
    "subject": "swahili",
    "unit": 28,
    "lessonNumber": 2,
    "title": "Uandishi wa Habari, Tahariri na Utangazaji (Journalism) (Part 2)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 28.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 28."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 28-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kuandika\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusikiliza»",
            "Mpangilio usio sahihi wa viambishi katika «Kuona»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kutaka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kuandika\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kuona»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kutaka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusikiliza»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kuandika\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kutaka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kusikiliza»",
            "Mpangilio usio sahihi wa viambishi katika «Kuona»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u28-l3": {
    "id": "sw-u28-l3",
    "subject": "swahili",
    "unit": 28,
    "lessonNumber": 3,
    "title": "Uandishi wa Habari, Tahariri na Utangazaji (Journalism) (Part 3)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 28.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 28."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 28-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kusikiliza\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuona»",
            "Mpangilio usio sahihi wa viambishi katika «Kutaka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Shule»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kusikiliza\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.3.",
            "Mpangilio usio sahihi wa viambishi katika «Kutaka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Shule»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuona»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kusikiliza\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Shule»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kuona»",
            "Mpangilio usio sahihi wa viambishi katika «Kutaka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u28-l4": {
    "id": "sw-u28-l4",
    "subject": "swahili",
    "unit": 28,
    "lessonNumber": 4,
    "title": "Uandishi wa Habari, Tahariri na Utangazaji (Journalism) (Part 4)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 28.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 28."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 28-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kuona\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kutaka»",
            "Mpangilio usio sahihi wa viambishi katika «Shule»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chuo kikuu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kuona\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.4.",
            "Mpangilio usio sahihi wa viambishi katika «Shule»",
            "Matumizi yasiyo sanifu ya muktadha wa «Chuo kikuu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kutaka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kuona\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Chuo kikuu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kutaka»",
            "Mpangilio usio sahihi wa viambishi katika «Shule»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u28-l5": {
    "id": "sw-u28-l5",
    "subject": "swahili",
    "unit": 28,
    "lessonNumber": 5,
    "title": "Uandishi wa Habari, Tahariri na Utangazaji (Journalism) (Part 5)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 28.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 28."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 28-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kutaka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shule»",
            "Mpangilio usio sahihi wa viambishi katika «Chuo kikuu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwalimu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kutaka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.5.",
            "Mpangilio usio sahihi wa viambishi katika «Chuo kikuu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwalimu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shule»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kutaka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 28.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwalimu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shule»",
            "Mpangilio usio sahihi wa viambishi katika «Chuo kikuu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u29-l1": {
    "id": "sw-u29-l1",
    "subject": "swahili",
    "unit": 29,
    "lessonNumber": 1,
    "title": "Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) (Part 1)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 29.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 29."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 29-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Shule\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chuo kikuu»",
            "Mpangilio usio sahihi wa viambishi katika «Mwalimu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwanafunzi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Shule\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mwalimu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwanafunzi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chuo kikuu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Shule\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mwanafunzi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Chuo kikuu»",
            "Mpangilio usio sahihi wa viambishi katika «Mwalimu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u29-l2": {
    "id": "sw-u29-l2",
    "subject": "swahili",
    "unit": 29,
    "lessonNumber": 2,
    "title": "Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) (Part 2)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 29.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 29."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 29-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Chuo kikuu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwalimu»",
            "Mpangilio usio sahihi wa viambishi katika «Mwanafunzi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Somo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Chuo kikuu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.2.",
            "Mpangilio usio sahihi wa viambishi katika «Mwanafunzi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Somo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwalimu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Chuo kikuu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Somo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwalimu»",
            "Mpangilio usio sahihi wa viambishi katika «Mwanafunzi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u29-l3": {
    "id": "sw-u29-l3",
    "subject": "swahili",
    "unit": 29,
    "lessonNumber": 3,
    "title": "Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) (Part 3)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 29.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 29."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 29-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mwalimu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwanafunzi»",
            "Mpangilio usio sahihi wa viambishi katika «Somo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mtihani»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mwalimu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.3.",
            "Mpangilio usio sahihi wa viambishi katika «Somo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mtihani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwanafunzi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mwalimu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mtihani»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mwanafunzi»",
            "Mpangilio usio sahihi wa viambishi katika «Somo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u29-l4": {
    "id": "sw-u29-l4",
    "subject": "swahili",
    "unit": 29,
    "lessonNumber": 4,
    "title": "Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) (Part 4)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 29.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 29."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 29-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mwanafunzi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Somo»",
            "Mpangilio usio sahihi wa viambishi katika «Mtihani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Matokeo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mwanafunzi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.4.",
            "Mpangilio usio sahihi wa viambishi katika «Mtihani»",
            "Matumizi yasiyo sanifu ya muktadha wa «Matokeo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Somo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mwanafunzi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Matokeo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Somo»",
            "Mpangilio usio sahihi wa viambishi katika «Mtihani»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u29-l5": {
    "id": "sw-u29-l5",
    "subject": "swahili",
    "unit": 29,
    "lessonNumber": 5,
    "title": "Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) (Part 5)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 29.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 29."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 29-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Somo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mtihani»",
            "Mpangilio usio sahihi wa viambishi katika «Matokeo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maktaba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Somo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.5.",
            "Mpangilio usio sahihi wa viambishi katika «Matokeo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Maktaba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mtihani»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Somo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 29.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Maktaba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mtihani»",
            "Mpangilio usio sahihi wa viambishi katika «Matokeo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u30-l1": {
    "id": "sw-u30-l1",
    "subject": "swahili",
    "unit": 30,
    "lessonNumber": 1,
    "title": "Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) (Part 1)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 30.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 30."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 30-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mtihani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matokeo»",
            "Mpangilio usio sahihi wa viambishi katika «Maktaba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Shahada»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mtihani\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.1.",
            "Mpangilio usio sahihi wa viambishi katika «Maktaba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Shahada»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matokeo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mtihani\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Shahada»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Matokeo»",
            "Mpangilio usio sahihi wa viambishi katika «Maktaba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u30-l2": {
    "id": "sw-u30-l2",
    "subject": "swahili",
    "unit": 30,
    "lessonNumber": 2,
    "title": "Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) (Part 2)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 30.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 30."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 30-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Matokeo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maktaba»",
            "Mpangilio usio sahihi wa viambishi katika «Shahada»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kalamu»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Matokeo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.2.",
            "Mpangilio usio sahihi wa viambishi katika «Shahada»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kalamu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maktaba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Matokeo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kalamu»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Maktaba»",
            "Mpangilio usio sahihi wa viambishi katika «Shahada»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u30-l3": {
    "id": "sw-u30-l3",
    "subject": "swahili",
    "unit": 30,
    "lessonNumber": 3,
    "title": "Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) (Part 3)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 30.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 30."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 30-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Maktaba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shahada»",
            "Mpangilio usio sahihi wa viambishi katika «Kalamu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Benki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Maktaba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.3.",
            "Mpangilio usio sahihi wa viambishi katika «Kalamu»",
            "Matumizi yasiyo sanifu ya muktadha wa «Benki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shahada»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Maktaba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Benki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shahada»",
            "Mpangilio usio sahihi wa viambishi katika «Kalamu»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u30-l4": {
    "id": "sw-u30-l4",
    "subject": "swahili",
    "unit": 30,
    "lessonNumber": 4,
    "title": "Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) (Part 4)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 30.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 30."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 30-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Shahada\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kalamu»",
            "Mpangilio usio sahihi wa viambishi katika «Benki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Akaunti»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Shahada\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.4.",
            "Mpangilio usio sahihi wa viambishi katika «Benki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Akaunti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kalamu»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Shahada\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Akaunti»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kalamu»",
            "Mpangilio usio sahihi wa viambishi katika «Benki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u30-l5": {
    "id": "sw-u30-l5",
    "subject": "swahili",
    "unit": 30,
    "lessonNumber": 5,
    "title": "Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) (Part 5)",
    "level": "C1",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 30.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 30."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 30-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kalamu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Benki»",
            "Mpangilio usio sahihi wa viambishi katika «Akaunti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkopo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kalamu\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.5.",
            "Mpangilio usio sahihi wa viambishi katika «Akaunti»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkopo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Benki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kalamu\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 30.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mkopo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Benki»",
            "Mpangilio usio sahihi wa viambishi katika «Akaunti»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u31-l1": {
    "id": "sw-u31-l1",
    "subject": "swahili",
    "unit": 31,
    "lessonNumber": 1,
    "title": "Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) (Part 1)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 31.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 31."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 31-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Benki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Akaunti»",
            "Mpangilio usio sahihi wa viambishi katika «Mkopo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Riba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Benki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.1.",
            "Mpangilio usio sahihi wa viambishi katika «Mkopo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Riba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Akaunti»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Benki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Riba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Akaunti»",
            "Mpangilio usio sahihi wa viambishi katika «Mkopo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u31-l2": {
    "id": "sw-u31-l2",
    "subject": "swahili",
    "unit": 31,
    "lessonNumber": 2,
    "title": "Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) (Part 2)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 31.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 31."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 31-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Akaunti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkopo»",
            "Mpangilio usio sahihi wa viambishi katika «Riba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kodi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Akaunti\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.2.",
            "Mpangilio usio sahihi wa viambishi katika «Riba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kodi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkopo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Akaunti\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kodi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mkopo»",
            "Mpangilio usio sahihi wa viambishi katika «Riba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u31-l3": {
    "id": "sw-u31-l3",
    "subject": "swahili",
    "unit": 31,
    "lessonNumber": 3,
    "title": "Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) (Part 3)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 31.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 31."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 31-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mkopo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Riba»",
            "Mpangilio usio sahihi wa viambishi katika «Kodi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uwekezaji»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mkopo\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.3.",
            "Mpangilio usio sahihi wa viambishi katika «Kodi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uwekezaji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Riba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mkopo\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Uwekezaji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Riba»",
            "Mpangilio usio sahihi wa viambishi katika «Kodi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u31-l4": {
    "id": "sw-u31-l4",
    "subject": "swahili",
    "unit": 31,
    "lessonNumber": 4,
    "title": "Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) (Part 4)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 31.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 31."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 31-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Riba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kodi»",
            "Mpangilio usio sahihi wa viambishi katika «Uwekezaji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyaraka»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Riba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.4.",
            "Mpangilio usio sahihi wa viambishi katika «Uwekezaji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyaraka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kodi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Riba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Nyaraka»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kodi»",
            "Mpangilio usio sahihi wa viambishi katika «Uwekezaji»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u31-l5": {
    "id": "sw-u31-l5",
    "subject": "swahili",
    "unit": 31,
    "lessonNumber": 5,
    "title": "Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) (Part 5)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 31.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 31."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 31-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kodi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uwekezaji»",
            "Mpangilio usio sahihi wa viambishi katika «Nyaraka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Sahihi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kodi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.5.",
            "Mpangilio usio sahihi wa viambishi katika «Nyaraka»",
            "Matumizi yasiyo sanifu ya muktadha wa «Sahihi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uwekezaji»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kodi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 31.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Sahihi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uwekezaji»",
            "Mpangilio usio sahihi wa viambishi katika «Nyaraka»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u32-l1": {
    "id": "sw-u32-l1",
    "subject": "swahili",
    "unit": 32,
    "lessonNumber": 1,
    "title": "Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) (Part 1)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 32.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 32."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 32-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Uwekezaji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyaraka»",
            "Mpangilio usio sahihi wa viambishi katika «Sahihi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kanuni»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Uwekezaji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.1.",
            "Mpangilio usio sahihi wa viambishi katika «Sahihi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Kanuni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyaraka»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Uwekezaji\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Kanuni»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Nyaraka»",
            "Mpangilio usio sahihi wa viambishi katika «Sahihi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u32-l2": {
    "id": "sw-u32-l2",
    "subject": "swahili",
    "unit": 32,
    "lessonNumber": 2,
    "title": "Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) (Part 2)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 32.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 32."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 32-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Nyaraka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sahihi»",
            "Mpangilio usio sahihi wa viambishi katika «Kanuni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Sheria»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Nyaraka\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.2.",
            "Mpangilio usio sahihi wa viambishi katika «Kanuni»",
            "Matumizi yasiyo sanifu ya muktadha wa «Sheria»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sahihi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Nyaraka\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Sheria»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sahihi»",
            "Mpangilio usio sahihi wa viambishi katika «Kanuni»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u32-l3": {
    "id": "sw-u32-l3",
    "subject": "swahili",
    "unit": 32,
    "lessonNumber": 3,
    "title": "Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) (Part 3)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 32.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 32."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 32-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Sahihi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kanuni»",
            "Mpangilio usio sahihi wa viambishi katika «Sheria»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mahakama»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Sahihi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.3.",
            "Mpangilio usio sahihi wa viambishi katika «Sheria»",
            "Matumizi yasiyo sanifu ya muktadha wa «Mahakama»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kanuni»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Sahihi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Mahakama»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Kanuni»",
            "Mpangilio usio sahihi wa viambishi katika «Sheria»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u32-l4": {
    "id": "sw-u32-l4",
    "subject": "swahili",
    "unit": 32,
    "lessonNumber": 4,
    "title": "Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) (Part 4)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 32.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 32."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 32-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Kanuni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sheria»",
            "Mpangilio usio sahihi wa viambishi katika «Mahakama»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jaji»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Kanuni\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.4.",
            "Mpangilio usio sahihi wa viambishi katika «Mahakama»",
            "Matumizi yasiyo sanifu ya muktadha wa «Jaji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sheria»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Kanuni\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Jaji»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Sheria»",
            "Mpangilio usio sahihi wa viambishi katika «Mahakama»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u32-l5": {
    "id": "sw-u32-l5",
    "subject": "swahili",
    "unit": 32,
    "lessonNumber": 5,
    "title": "Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) (Part 5)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 32.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 32."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 32-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Sheria\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mahakama»",
            "Mpangilio usio sahihi wa viambishi katika «Jaji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Wakili»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Sheria\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.5.",
            "Mpangilio usio sahihi wa viambishi katika «Jaji»",
            "Matumizi yasiyo sanifu ya muktadha wa «Wakili»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mahakama»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Sheria\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 32.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Wakili»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Mahakama»",
            "Mpangilio usio sahihi wa viambishi katika «Jaji»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u33-l1": {
    "id": "sw-u33-l1",
    "subject": "swahili",
    "unit": 33,
    "lessonNumber": 1,
    "title": "Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) (Part 1)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 33.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 33."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 33-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Mahakama\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jaji»",
            "Mpangilio usio sahihi wa viambishi katika «Wakili»",
            "Matumizi yasiyo sanifu ya muktadha wa «Haki»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Mahakama\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.1.",
            "Mpangilio usio sahihi wa viambishi katika «Wakili»",
            "Matumizi yasiyo sanifu ya muktadha wa «Haki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jaji»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Mahakama\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Haki»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Jaji»",
            "Mpangilio usio sahihi wa viambishi katika «Wakili»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u33-l2": {
    "id": "sw-u33-l2",
    "subject": "swahili",
    "unit": 33,
    "lessonNumber": 2,
    "title": "Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) (Part 2)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 33.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 33."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 33-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Jaji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wakili»",
            "Mpangilio usio sahihi wa viambishi katika «Haki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Usawa»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Jaji\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.2.",
            "Mpangilio usio sahihi wa viambishi katika «Haki»",
            "Matumizi yasiyo sanifu ya muktadha wa «Usawa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wakili»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Jaji\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Usawa»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Wakili»",
            "Mpangilio usio sahihi wa viambishi katika «Haki»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u33-l3": {
    "id": "sw-u33-l3",
    "subject": "swahili",
    "unit": 33,
    "lessonNumber": 3,
    "title": "Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) (Part 3)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 33.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 33."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 33-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Wakili\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Haki»",
            "Mpangilio usio sahihi wa viambishi katika «Usawa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Shahidi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Wakili\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.3.",
            "Mpangilio usio sahihi wa viambishi katika «Usawa»",
            "Matumizi yasiyo sanifu ya muktadha wa «Shahidi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Haki»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Wakili\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Shahidi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Haki»",
            "Mpangilio usio sahihi wa viambishi katika «Usawa»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u33-l4": {
    "id": "sw-u33-l4",
    "subject": "swahili",
    "unit": 33,
    "lessonNumber": 4,
    "title": "Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) (Part 4)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 33.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 33."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 33-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Haki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Usawa»",
            "Mpangilio usio sahihi wa viambishi katika «Shahidi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uamuzi»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Haki\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.4.",
            "Mpangilio usio sahihi wa viambishi katika «Shahidi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uamuzi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Usawa»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Haki\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Uamuzi»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Usawa»",
            "Mpangilio usio sahihi wa viambishi katika «Shahidi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u33-l5": {
    "id": "sw-u33-l5",
    "subject": "swahili",
    "unit": 33,
    "lessonNumber": 5,
    "title": "Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) (Part 5)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 33.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 33."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 33-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Usawa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shahidi»",
            "Mpangilio usio sahihi wa viambishi katika «Uamuzi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Katiba»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Usawa\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.5.",
            "Mpangilio usio sahihi wa viambishi katika «Uamuzi»",
            "Matumizi yasiyo sanifu ya muktadha wa «Katiba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shahidi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Usawa\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 33.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Katiba»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Shahidi»",
            "Mpangilio usio sahihi wa viambishi katika «Uamuzi»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u34-l1": {
    "id": "sw-u34-l1",
    "subject": "swahili",
    "unit": 34,
    "lessonNumber": 1,
    "title": "Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) (Part 1)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 34.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.1.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 34."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 34-1).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Shahidi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.1.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uamuzi»",
            "Mpangilio usio sahihi wa viambishi katika «Katiba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Serikali»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Shahidi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.1.",
            "Mpangilio usio sahihi wa viambishi katika «Katiba»",
            "Matumizi yasiyo sanifu ya muktadha wa «Serikali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uamuzi»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Shahidi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.1.",
            "Matumizi yasiyo sanifu ya muktadha wa «Serikali»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uamuzi»",
            "Mpangilio usio sahihi wa viambishi katika «Katiba»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u34-l2": {
    "id": "sw-u34-l2",
    "subject": "swahili",
    "unit": 34,
    "lessonNumber": 2,
    "title": "Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) (Part 2)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 34.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.2.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 34."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 34-2).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Uamuzi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.2.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Katiba»",
            "Mpangilio usio sahihi wa viambishi katika «Serikali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uhuru»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Uamuzi\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.2.",
            "Mpangilio usio sahihi wa viambishi katika «Serikali»",
            "Matumizi yasiyo sanifu ya muktadha wa «Uhuru»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Katiba»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Uamuzi\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.2.",
            "Matumizi yasiyo sanifu ya muktadha wa «Uhuru»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Katiba»",
            "Mpangilio usio sahihi wa viambishi katika «Serikali»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u34-l3": {
    "id": "sw-u34-l3",
    "subject": "swahili",
    "unit": 34,
    "lessonNumber": 3,
    "title": "Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) (Part 3)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 34.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.3.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 34."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 34-3).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Katiba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.3.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Serikali»",
            "Mpangilio usio sahihi wa viambishi katika «Uhuru»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hujambo»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Katiba\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.3.",
            "Mpangilio usio sahihi wa viambishi katika «Uhuru»",
            "Matumizi yasiyo sanifu ya muktadha wa «Hujambo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Serikali»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Katiba\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.3.",
            "Matumizi yasiyo sanifu ya muktadha wa «Hujambo»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Serikali»",
            "Mpangilio usio sahihi wa viambishi katika «Uhuru»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u34-l4": {
    "id": "sw-u34-l4",
    "subject": "swahili",
    "unit": 34,
    "lessonNumber": 4,
    "title": "Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) (Part 4)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 34.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.4.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 34."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 34-4).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Serikali\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.4.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uhuru»",
            "Mpangilio usio sahihi wa viambishi katika «Hujambo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Habari»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Serikali\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.4.",
            "Mpangilio usio sahihi wa viambishi katika «Hujambo»",
            "Matumizi yasiyo sanifu ya muktadha wa «Habari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uhuru»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Serikali\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.4.",
            "Matumizi yasiyo sanifu ya muktadha wa «Habari»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Uhuru»",
            "Mpangilio usio sahihi wa viambishi katika «Hujambo»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "sw-u34-l5": {
    "id": "sw-u34-l5",
    "subject": "swahili",
    "unit": 34,
    "lessonNumber": 5,
    "title": "Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) (Part 5)",
    "level": "C2",
    "objective": "Master Swahili grammar and Bantu noun-class concord for Sarufi ya Kiswahili na Muundo wa Ngeli (Somo 34.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.5.",
          "reading": "[tunɑʤiˈfunzɑ sɑˈrufi sɑˈnifu jɑ kiswɑˈhili] (too-nah-jee-FOON-zah sah-ROO-fee)",
          "translation": "We learn standard Swahili grammar and noun class agreement in Unit 34."
        },
        {
          "target": "Tazama jinsi viambishi vinavyopatana vizuri katika sentensi hii (Somo 34-5).",
          "reading": "[tɑˈzɑmɑ ˈjinsi viɑmˈbiʃi vinɑvjɔpɑˈtɑnɑ] (tah-ZAH-mah YEEN-see)",
          "translation": "Observe how prefixes agree harmoniously in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Uhuru\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.5.",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hujambo»",
            "Mpangilio usio sahihi wa viambishi katika «Habari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Asante»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Uhuru\":",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.5.",
            "Mpangilio usio sahihi wa viambishi katika «Habari»",
            "Matumizi yasiyo sanifu ya muktadha wa «Asante»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hujambo»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Uhuru\": Which sentence is completely correct?",
          "options": [
            "Tunajifunza sarufi sanifu ya Kiswahili na upatanisho wa ngeli katika somo la 34.5.",
            "Matumizi yasiyo sanifu ya muktadha wa «Asante»",
            "Dosari ya upatanisho wa ngeli kuhusu neno «Hujambo»",
            "Mpangilio usio sahihi wa viambishi katika «Habari»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  }
};
  var CURRICULUM = {
    subject: 'swahili',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['swahili'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
