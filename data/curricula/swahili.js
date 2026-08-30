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
    "title": "Matamshi ya Kiswahili, Irabu na Silabi (Phonetics, Vowels & Open Syllables)",
    "level": "A1",
    "objective": "Kuelewa mfumo wa kifonolojia wa Kiswahili sanifu, irabu tano safi (a, e, i, o, u), kanuni ya mkazo kwenye silabi ya pili kutoka mwisho (penultimate stress), na salamu za msingi za hali (Hujambo / Sijambo).",
    "presentation": {
      "explanation": "Mfumo wa Kifonolojia na Matamshi ya Kiswahili Sanifu (Swahili Phonology & Greetings):\n\n1. **Irabu Tano Safi (Five Pure Vowels)**:\n   - Kiswahili kina irabu tano zisizobadilika: **a** [a], **e** [ɛ], **i** [i], **o** [ɔ], **u** [u].\n   - Hakuna difthongi changamano kama za Kiingereza; kila irabu hutamkwa waziwazi.\n\n2. **Kanuni ya Mkazo wa Maneno (Penultimate Word Stress)**:\n   - Karibu maneno yote ya Kiswahili hubeba mkazo kwenye **silabi ya pili kutoka mwisho** (penultimate syllable):\n     - *ki-TA-bu* (kitabu / book), *m-wa-LI-mu* (mwalimu / teacher), *ha-BA-ri* (habari / news).\n\n3. **Muundo wa Silabi Wazi (Open Syllables - CV)**:\n   - Silabi za asili ya Kibantu huishia na irabu (Consonant + Vowel):\n     - *ba-ba*, *ma-ma*, *sa-la-ma*.\n\n4. **Salamu ya Hali ya Msingi (Basic State Greetings)**:\n   - *Hujambo?* (Je, huna jambo/tatizo? / How are you? - kwa mtu mmoja) -> *Sijambo!* (Sina jambo / I am fine!)\n   - *Hamjambo?* (Je, hamna jambo? / How are you all?) -> *Hatujambo!* (Hatuna jambo / We are fine!)",
      "examples": [
        {
          "target": "Hujambo bwana, habari za asubuhi? - Sijambo, nzuri sana!",
          "reading": "[huˈʤɑmbɔ ˈbwɑnɑ hɑˈbɑri zɑ ɑsuˈbuhi - siˈʤɑmbɔ ˈnzuri ˈsɑnɑ] (hoo-JAHM-boh BWAH-nah, hah-BAH-ree zah ah-soo-BOO-hee? - see-JAHM-boh, N-ZOO-ree SAH-nah!)",
          "translation": "How are you [greeting singular: hujambo] sir, how is the morning news? - I am well [response: sijambo], very good!"
        },
        {
          "target": "Katika lugha ya Kiswahili, mkazo wa neno daima huangukia kwenye silabi ya pili kutoka mwisho.",
          "reading": "[kɑˈtikɑ ˈluɣɑ jɑ kiswɑˈhili ˈmkɑzɔ wɑ ˈnɛnɔ ˈdɑimɑ huɑŋɡuˈkiɑ ˈkwɛnjɛ siˈlɑbi jɑ ˈpili kuˈtɔkɑ ˈmwiʃɔ] (kah-TEE-kah LOO-ghah yah kee-swah-HEE-lee, M-KAH-zoh wah NAY-noh DAH-ee-mah hoo-ahn-goo-KEE-ah KWAY-nyay see-LAH-bee yah PEE-lee koo-TOH-kah MWEE-shoh)",
          "translation": "In the Swahili language, word stress [phonetic rule: mkazo wa neno] always falls upon the second syllable from the end (penultimate)."
        },
        {
          "target": "Irabu za Kiswahili ni tano safi: a, e, i, o, u, bila mivutano tata.",
          "reading": "[iˈrɑbu zɑ kiswɑˈhili ni ˈtɑnɔ ˈsɑfi: ɑ, ɛ, i, ɔ, u, ˈbilɑ mivuˈtɑnɔ ˈtɑtɑ] (ee-RAH-boo zah kee-swah-HEE-lee nee TAH-noh SAH-fee: ah, eh, ee, oh, oo, BEE-lah mee-voo-TAH-noh TAH-tah)",
          "translation": "Swahili vowels [five pure vowels: irabu tano] are five pure sounds: a, e, i, o, u, without complex diphthongs."
        }
      ],
      "mnemonics": [
        "Kumbuka mkazo: Sikiliza silabi ya pili kutoka mwisho: ki-SWA-hi-li, ha-BA-ri, si-JAM-bo!"
      ],
      "culturalNotes": [
        "Katika utamaduni wa Waswahili, kusalimiana ni wajibu wa kijamii unaojenga heshima, urafiki na mshikamano kabla ya kuanza mazungumzo yoyote."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mtu anapokuuliza \"Hujambo?\", jibu sahihi na sanifu la Kiswahili ni lipi?",
          "options": [
            "Sijambo! (I am fine / I have no problems - Standard first-person singular response)",
            "Hatujambo (Majibu ya wingi badala ya umoja)",
            "Kwaheri (Kauli ya kuagana)",
            "Marahaba (Jibu la salamu ya Shikamoo pekee)"
          ],
          "answerIndex": 0,
          "explanation": "Salamu ya umoja «Hujambo?» (You have no problem?) hujibiwa kwa «Sijambo!» (I have no problem)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika matamshi ya maneno ya Kiswahili kama 'mwalimu' na 'kitabu', mkazo wa sauti huwekwa wapi?",
          "options": [
            "Kwenye silabi ya pili kutoka mwisho (Penultimate syllable stress: mwa-LI-mu, ki-TA-bu)",
            "Kwenye silabi ya mwisho kabisa kila mara",
            "Kwenye herufi ya kwanza bila kujali silabi",
            "Hakuna mkazo wowote katika matamshi"
          ],
          "answerIndex": 0,
          "explanation": "Kanuni kuu ya kifonolojia ya Kiswahili ni mkazo kuangukia kwenye silabi ya pili kutoka mwisho."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi sahihi inayoelezea matamshi na salamu ya msingi ya Kiswahili:",
          "options": [
            "Kiswahili kina irabu tano safi na mkazo kwenye silabi ya pili kutoka mwisho, na salamu ya 'Hujambo' hujibiwa kwa 'Sijambo'. (Swahili has five pure vowels with penultimate stress, and Hujambo is answered with Sijambo.)",
            "Mkazo wa Kiswahili huwekwa kwenye neno la mwisho la sentensi nzima kila mara.",
            "Irabu za Kiswahili hutamkwa kwa mtindo wa kumeza sauti zote za mwisho.",
            "Neno 'Hujambo' halina jibu lolote katika mazungumzo sanifu."
          ],
          "answerIndex": 0,
          "explanation": "«Kiswahili kina irabu tano safi na mkazo kwenye silabi ya pili kutoka mwisho, na salamu ya 'Hujambo' hujibiwa kwa 'Sijambo'.» ndiyo kauli fasaha na sahihi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u1-l2": {
    "id": "sw-u1-l2",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 2,
    "title": "Salamu za Heshima na Maamkizi ya Wazee (Respectful Greetings: Shikamoo & Marahaba)",
    "level": "A1",
    "objective": "Kutambua na kutumia salamu za heshima kwa wazee na wakubwa (Shikamoo na Marahaba) pamoja na salamu za vipindi vya siku (asubuhi, mchana, jioni, usiku).",
    "presentation": {
      "explanation": "Adabu ya Salamu za Heshima katika Jamii ya Waswahili (Respectful Greetings & Time-of-Day):\n\n1. **Salamu ya Heshima kwa Wazee na Wakubwa (Shikamoo na Marahaba)**:\n   - Mdogo humwamkia mkubwa au mzazi: **Shikamoo** (kutoka chimbuko la kihistoria: *Nashika miguu yako* kwa staha na heshima).\n   - Mkubwa hujibu kwa upole na baraka: **Marahaba** (kutoka Kiarabu: *Nimeikubali heshima yako kwa furaha na upendo*).\n   - Ni kosa kubwa la kiadabu kutomwamkia mzee 'Shikamoo' katika jamii ya Afrika Mashariki.\n\n2. **Salamu za Vipindi vya Siku (Time-Based Inquiries with 'Habari za...')**:\n   - *Habari za asubuhi?* (Good morning / How is the morning?)\n   - *Habari za mchana?* (Good afternoon / How is the afternoon?)\n   - *Habari za jioni?* (Good evening / How is the evening?)\n   - *Habari za usiku?* (Good night / How is the night?)\n\n3. **Majibu ya Kawaida ya 'Habari za...'**:\n   - **Nzuri** (Good / fine)\n   - **Salama** (Peaceful / peaceful news)\n   - **Safi** (Clean / great)\n   - **Njema** (Well / pleasant)",
      "examples": [
        {
          "target": "Shikamoo bibi yangu mpendwa! - Marahaba mjukuu wangu, habari za shule?",
          "reading": "[ʃikɑˈmɔː ˈbibi ˈjɑŋɡu mˈpɛndwɑ - mɑrɑˈhɑbɑ mˈʤukuː ˈwɑŋɡu hɑˈbɑri zɑ ˈʃulɛ] (shee-kah-MOH BEE-bee YAHN-goo M-pen-DWAH! - mah-rah-HAH-bah M-joo-KOO WAHN-goo, hah-BAH-ree zah SHOO-lay?)",
          "translation": "My respects [respectful elder greeting: shikamoo] beloved grandmother! - My blessing [elder response: marahaba] my grandchild, how is school?"
        },
        {
          "target": "Kutoa salamu ya 'Shikamoo' ni ishara kuu ya staha na adabu kwa mtu mwenye umri mkubwa.",
          "reading": "Ku-to-a sa-la-mu ya Shi-ka-mo-o ni i-sha-ra ku-u ya sta-ha na a-da-bu kwa m-tu mwe-nye u-m-ri m-ku-bwa. [kuˈtɔɑ sɑˈlɑmu jɑ ʃikɑˈmɔː ni iˈʃɑrɑ ˈkuː jɑ ˈstɑhɑ nɑ ɑˈdɑbu kwɑ ˈmtu ˈmwɛnjɛ ˈumri mˈkubwɑ] (koo-TOH-ah sah-LAH-moo yah shee-kah-MOH nee ee-SHAH-rah KOO yah STAH-hah nah ah-DAH-boo kwah M-too MWEN-yay OOM-ree M-KOO-bwah)",
          "translation": "Offering the greeting 'Shikamoo' [social etiquette: kutoa heshima] is a paramount sign of modesty and respect for an elder person."
        },
        {
          "target": "Habari za mchana mwalimu mwema? - Nzuri sana, asante kwa heshima.",
          "reading": "Ha-ba-ri za m-cha-na mwa-li-mu mwe-ma? - Nzu-ri sa-na, a-san-te kwa he-shi-ma. [hɑˈbɑri zɑ mˈtʃɑnɑ mwɑˈlimu ˈmwɛmɑ - ˈnzuri ˈsɑnɑ ɑˈsɑntɛ kwɑ hɛˈʃimɑ] (hah-BAH-ree zah M-CHAH-nah mwah-LEE-moo MWAY-mah? - N-ZOO-ree SAH-nah, ah-SAHN-tay kwah hay-SHEE-mah)",
          "translation": "Good afternoon [afternoon greeting: habari za mchana] good teacher? - Very good, thank you for the respect."
        }
      ],
      "mnemonics": [
        "Shikamoo -> Marahaba: Mdogo hutoa heshima (Shikamoo), mkubwa hurudisha baraka (Marahaba)!"
      ],
      "culturalNotes": [
        "Kwenye mwambao wa Afrika Mashariki, hata mtu mzima akikutana na mzee mwenye umri wa kumzaa, bado anawajibika kumsalimia kwa 'Shikamoo'."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mwanafunzi anapokutana na mwalimu wake asubuhi, anapaswa kutumia salamu gani ya heshima?",
          "options": [
            "Shikamoo mwalimu! (Respectful greeting for elders/teachers - responded to with Marahaba)",
            "Hujambo mtoto wangu (Salamu ya mkubwa kwa mdogo)",
            "Kwaheri ya kuonana (Kauli ya kuondoka)",
            "Samahani tu (Kauli ya kuomba radhi bila salamu)"
          ],
          "answerIndex": 0,
          "explanation": "Mwanafunzi humheshimu mwalimu au mzee kwa kumsalimia «Shikamoo»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mtu mzima akiamkiwa 'Shikamoo', jibu lake fasaha na lenye staha ni gani?",
          "options": [
            "Marahaba! (I accept your respect with pleasure - Standard response from elder to younger)",
            "Sijambo tu (Jibu la Hujambo badala ya Shikamoo)",
            "Nzuri sana (Jibu la Habari za...)",
            "Karibu chai (Mwaliko wa chakula badala ya jibu la salamu)"
          ],
          "answerIndex": 0,
          "explanation": "Salamu ya «Shikamoo» daima hujibiwa kwa neno «Marahaba»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Tambua jozi sahihi ya salamu ya heshima na jibu lake katika utamaduni wa Kiswahili:",
          "options": [
            "Salamu: Shikamoo! -> Jibu: Marahaba! (Greeting: Shikamoo! -> Response: Marahaba!)",
            "Salamu: Shikamoo! -> Jibu: Kwaheri!",
            "Salamu: Habari za asubuhi? -> Jibu: Shikamoo!",
            "Salamu: Hujambo? -> Jibu: Marahaba!"
          ],
          "answerIndex": 0,
          "explanation": "«Salamu: Shikamoo! -> Jibu: Marahaba!» ndiyo jozi pekee iliyo sahihi na sanifu kijamii."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u1-l3": {
    "id": "sw-u1-l3",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 3,
    "title": "Kujitambulisha, Majina na Ukoo (Self-Introduction & Origin)",
    "level": "A1",
    "objective": "Kujifunza jinsi ya kujitambulisha kwa ufasaha, kutaja majina (Jina langu ni / Naitwa), kuuliza majina ya wengine, na kueleza asili na utaifa.",
    "presentation": {
      "explanation": "Kujitambulisha na Kueleza Asili kwa Kiswahili (Self-Introduction, Names & Nationality):\n\n1. **Kutaja Jina Lako (Stating Your Name)**:\n   - **Jina langu ni [Jina]** (My name is [Name]).\n   - **Naitwa [Jina]** (I am called [Name]).\n   - **Mimi ni [Jina]** (I am [Name]).\n\n2. **Kuuliza Jina la Mtu Mwingine (Asking Someone's Name)**:\n   - *Wewe unaitwa nani?* (What is your name? / Who are you called?)\n   - *Jina lako nani?* au *Jina lako ni nani?* (What is your name?)\n\n3. **Kueleza Asili, Nchi na Makazi (Origin & Country of Residence)**:\n   - *Ninatoka nchi ya Kenya / Tanzania / Uganda.* (I come from Kenya / Tanzania / Uganda.)\n   - *Mimi ni Mtanzania / Mkenya / Mwafrika.* (I am a Tanzanian / Kenyan / African.)\n   - *Ninakaa / Ninaishi katika mji wa Nairobi / Mombasa / Arusha.* (I live in the city of...)\n\n4. **Maneno ya Kufurahia Ufahamiano**:\n   - *Ninafurahi kukufahamu.* (I am glad to know you / Pleased to meet you.)\n   - *Nafurahi kukuona.* (Glad to see you.)",
      "examples": [
        {
          "target": "Jina langu ni Amina, mimi ni mwanafunzi ninayetoka mji wa Dar es Salaam.",
          "reading": "Ji-na la-ngu ni A-mi-na, mi-mi ni mwa-na-fu-nzi ni-na-ye-to-ka m-ji wa Dar es Sa-laam. [ˈʤinɑ ˈlɑŋɡu ni ɑˈminɑ ˈmimi ni mwɑnɑˈfunzi ninɑjɛˈtɔkɑ ˈmʤi wɑ dɑːr ɛs sɑˈlɑːm] (JEE-nah LAHN-goo nee ah-MEE-nah, MEE-mee nee mwah-nah-FOON-zee nee-nah-yay-TOH-kah M-jee wah dahr ays sah-LAHM)",
          "translation": "My name is Amina [self-introduction: jina langu ni], I am a student coming from the city of Dar es Salaam."
        },
        {
          "target": "Wewe unaitwa nani na unatoka nchi gani ya Afrika Mashariki?",
          "reading": "We-we u-na-i-twa na-ni na u-na-to-ka n-chi ga-ni ya A-fri-ka Ma-sha-ri-ki? [ˈwɛwɛ unɑˈitwɑ ˈnɑni nɑ unɑˈtɔkɑ ˈntʃi ˈɡɑni jɑ ɑˈfrikɑ mɑʃɑˈriki] (WAY-way oo-nah-EE-twah NAH-nee nah oo-nah-TOH-kah N-chee GAH-nee yah ah-FREE-kah mah-shah-REE-kee)",
          "translation": "What is your name [interrogative: unaitwa nani] and what country of East Africa do you come from?"
        },
        {
          "target": "Mimi naitwa Juma, ninafurahi sana kukufahamu na kufanya urafiki nawe.",
          "reading": "Mi-mi na-i-twa Ju-ma, ni-na-fu-ra-hi sa-na ku-ku-fa-ha-mu na ku-fa-nya u-ra-fi-ki na-we. [ˈmimi nɑˈitwɑ ˈʤumɑ ninɑfuˈrɑhi ˈsɑnɑ kukufɑˈhɑmu nɑ kuˈfɑɲɑ urɑˈfiki ˈnɑwɛ] (MEE-mee nah-EE-twah JOO-mah, nee-nah-foo-RAH-hee SAH-nah koo-koo-fah-HAH-moo nah koo-FAH-nyah oo-rah-FEE-kee NAH-way)",
          "translation": "I am called Juma, I am very glad to know you [pleased to meet you: ninafurahi kukufahamu] and build a friendship with you."
        }
      ],
      "mnemonics": [
        "Kujitambulisha: Jina langu ni... + Ninatoka... + Ninafurahi kukufahamu!"
      ],
      "culturalNotes": [
        "Watu wa Afrika Mashariki hupenda kutambua asili ya mtu na ukoo wake kwa wema, kwani ukarimu na ujirani mwema huanza na kufahamiana majina."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapotaka kumwambia rafiki mpya jina lako kwa lugha ya heshima, utasema nini?",
          "options": [
            "Jina langu ni Juma, ninafurahi kukufahamu. (My name is Juma, pleased to meet you - Authentic introduction)",
            "Wewe nenda zako haraka (Kauli isiyo na adabu)",
            "Sina jina lolote duniani (Kauli isiyo na mantiki)",
            "Kwaheri ya usiku (Kuagana badala ya kujitambulisha)"
          ],
          "answerIndex": 0,
          "explanation": "Kauli sahihi ya kujitambulisha ni «Jina langu ni...» ikifuatiwa na «ninafurahi kukufahamu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi gani inauliza kwa usahihi nchi anayotoka mgeni?",
          "options": [
            "Wewe unatoka nchi gani? (What country do you come from? - Grammatically precise inquiry)",
            "Wewe unakula nchi gani sasa? (Kitenzi kisicho sahihi)",
            "Nchi yako inalala wapi usiku? (Matumizi mabaya ya maana)",
            "Jina lako linakimbia wapi? (Kauli isiyo na maana)"
          ],
          "answerIndex": 0,
          "explanation": "Swali sahihi la kijiografia na kiuraia ni «Wewe unatoka nchi gani?»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya utambulisho iliyo kamili na fasaha kulingana na kanuni za Kiswahili:",
          "options": [
            "Naitwa Baraka, ninatoka Tanzania na ninafurahi sana kukufahamu. (My name is Baraka, I come from Tanzania and I am very pleased to meet you.)",
            "Mimi kitabu kiko mezani ninatoka asubuhi sana.",
            "Jina langu anaitwa kula chakula cha jioni.",
            "Wewe ni nani kwanini unatembea bila jina?"
          ],
          "answerIndex": 0,
          "explanation": "«Naitwa Baraka, ninatoka Tanzania na ninafurahi sana kukufahamu.» ndiyo sentensi kamili ya kujitambulisha."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u1-l4": {
    "id": "sw-u1-l4",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 4,
    "title": "Shukrani, Radhi, na Maombi (Gratitude, Apologies & Politeness)",
    "level": "A1",
    "objective": "Kuelewa na kutumia maneno ya staha ya Kiswahili: kutoa shukrani (Asante / Asanteni), kuomba radhi (Samahani / Niwie radhi), na kuomba msaada (Tafadhali / Naomba).",
    "presentation": {
      "explanation": "Lugha ya Staha, Shukrani na Kuomba Radhi (Swahili Politeness & Etiquette):\n\n1. **Kutoa Shukrani (Expressing Gratitude)**:\n   - **Asante** (Thank you - kwa mtu mmoja).\n   - **Asante sana** (Thank you very much).\n   - **Asanteni** / **Asanteni sana** (Thank you all - kwa watu wengi).\n   - Majibu ya shukrani: *Karibu* (You are welcome - umoja) / *Karibuni* (wingi), au *Bila samaha* / *Si kitu* (Don't mention it / It is nothing).\n\n2. **Kuomba Radhi na Msamaha (Apologizing)**:\n   - **Samahani** (Excuse me / Sorry - neno la kawaida la adabu).\n   - **Niwie radhi** (Pardon me / Forgive me - kauli rasmi ya heshima kubwa).\n   - *Samahani kwa kuchelewa.* (Sorry for being late.)\n\n3. **Kuomba Kitu o Msaada kwa Upole (Polite Requests)**:\n   - **Tafadhali** (Please).\n   - **Naomba...** (I request / May I have...):\n     - *Naomba maji ya kunywa tafadhali.* (May I have drinking water please.)\n     - *Naomba unisaidie.* (Please assist me.)",
      "examples": [
        {
          "target": "Asante sana kwa ukarimu wako na chakula kitamu ulichotuandalia.",
          "reading": "A-san-te sa-na kwa u-ka-ri-mu wa-ko na cha-ku-la ki-ta-mu u-li-cho-twa-nda-li-a. [ɑˈsɑntɛ ˈsɑnɑ kwɑ ukɑˈrimu ˈwɑkɔ nɑ tʃɑˈkulɑ kiˈtɑmu ulitʃɔtwɑndɑˈliɑ] (ah-SAHN-tay SAH-nah kwah oo-kah-REE-moo WAH-koh nah chah-KOO-lah kee-TAH-moo oo-lee-choh-twahn-dah-LEE-ah)",
          "translation": "Thank you very much [gratitude: asante sana] for your hospitality and the delicious food you prepared for us."
        },
        {
          "target": "Samahani kaka, naomba unielekeze njia fupi ya kufika kituo cha basi.",
          "reading": "Sa-ma-ha-ni ka-ka, na-o-mba u-ni-e-le-ke-ze nji-a fu-pi ya ku-fi-ka ki-tu-o cha ba-si. [sɑmɑˈhɑni ˈkɑkɑ nɑˈɔmbɑ uniɛlɛˈkɛzɛ ˈnʤiɑ ˈfupi jɑ kuˈfikɑ kiˈtuɔ tʃɑ ˈbɑsi] (sah-mah-HAH-nee KAH-kah, nah-OHM-bah oo-nee-ay-lay-KAY-zay N-JEE-ah FOO-pee yah koo-FEE-kah kee-TOO-oh chah BAH-see)",
          "translation": "Excuse me brother [apology/attention: samahani], I request [polite request: naomba] that you direct me on the shortest path to reach the bus station."
        },
        {
          "target": "Tafadhali karibu ndani ya nyumba yetu, jisikie uko nyumbani kwako.",
          "reading": "Ta-fa-dha-li ka-ri-bu nda-ni ya nyu-mba ye-tu, ji-si-ki-e u-ko nyu-mba-ni kwa-ko. [tɑfɑˈðɑli kɑˈribu ˈndɑni jɑ ˈɲumbɑ ˈjɛtu ʤisiˈkiɛ ˈukɔ ɲumbɑˈni ˈkwɑkɔ] (tah-fah-THAH-lee kah-REE-boo N-DAH-nee yah NYOOM-bah YAY-too, jee-see-KEE-ay OO-koh nyoom-bah-NEE KWAH-koh)",
          "translation": "Please [politeness: tafadhali] welcome inside our home [hospitality: karibu ndani], feel as though you are at your own home."
        }
      ],
      "mnemonics": [
        "Staha ya Waswahili: Asante (Shukrani) + Samahani (Radhi) + Tafadhali / Naomba (Ombi)!"
      ],
      "culturalNotes": [
        "Neno 'Karibu' ni nembo ya ukarimu wa watu wa Afrika Mashariki; mtu husema 'Karibu' hata anapokula chakula ili kumwalika mpitanjia ashiriki naye."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mtu anapokusaidia kubeba mzigo mzito, neno gani la staha unapaswa kumwambia?",
          "options": [
            "Asante sana kwa msaada wako! (Thank you very much for your help - Authentic expression of gratitude)",
            "Ondoka haraka sitaki kukuona (Kauli ya ukali na dharau)",
            "Nenda kalale sasa (Kauli isiyofaa)",
            "Hujambo bibi (Salamu isiyoendana na tendo lililofanyika)"
          ],
          "answerIndex": 0,
          "explanation": "Kushukuru kwa msaada uliotendewa hufanywa kwa kusema «Asante sana»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapotaka kumwomba mtu akupishe njia kwa heshima, unatumia neno gani la kwanza?",
          "options": [
            "Samahani, naomba njia tafadhali. (Excuse me, may I pass please - Polite attention-getter)",
            "Wewe toka mbele yangu! (Kauli isiyo na adabu)",
            "Kwaheri ya kuonana (Kuagana badala ya kuomba njia)",
            "Chakula kiko wapi? (Swali lisilohusika na njia)"
          ],
          "answerIndex": 0,
          "explanation": "Neno «Samahani» au «Naomba njia tafadhali» hutumika kuomba nafasi kwa heshima."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha matumizi bora ya shukrani na adabu za lugha ya Kiswahili:",
          "options": [
            "Samahani kaka, naomba msaada wa kuelekezwa njia, na asante sana kwa ukarimu wako. (Excuse me brother, I request help with directions, and thank you very much for your hospitality.)",
            "Mimi nataka kila kitu sasa hivi bila kusema tafadhali au asante.",
            "Asante inasemwa tu wakati mtu anapopoteza vitu vyake vyote.",
            "Samahani inamaanisha kukataa kuongea na mtu yeyote yule."
          ],
          "answerIndex": 0,
          "explanation": "«Samahani kaka, naomba msaada wa kuelekezwa njia, na asante sana kwa ukarimu wako.» inajumuisha maneno yote makuu ya adabu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u1-l5": {
    "id": "sw-u1-l5",
    "subject": "swahili",
    "unit": 1,
    "lessonNumber": 5,
    "title": "Kuagana na Matashi Mema (Farewells, Well Wishes & Unit 1 Synthesis)",
    "level": "A1",
    "objective": "Kuunganisha mada zote za Unit 1: Matamshi na irabu, Shikamoo na Marahaba, Kujitambulisha, Shukrani na Staha, pamoja na kauli za kuagana (Kwaheri / Kwaherini) na matashi mema ya safari na usingizi.",
    "presentation": {
      "explanation": "Kuagana, Matashi Mema na Muhtasari Mkuu wa Unit 1 (Farewells, Well Wishes & Synthesis):\n\n1. **Kauli za Kuagana (Farewell Expressions)**:\n   - **Kwaheri** (Goodbye - kwa mtu mmoja / singular).\n   - **Kwaherini** (Goodbye - kwa watu wengi / plural).\n   - **Kwaheri ya kuonana** (Goodbye until we meet again).\n   - **Tutaonana baadaye** (See you later) / **Tutaonana kesho** (See you tomorrow).\n\n2. **Matashi Mema ya Safari na Mapumziko (Well Wishes)**:\n   - **Safari njema!** (Safe journey! / Have a good trip!) -> Jibu: *Asante, tuombee!* au *Asante sana!*\n   - **Usiku mwema!** (Good night!) -> Jibu: *Usiku mwema, nawe pia!*\n   - **Ndoto njema!** (Sweet dreams!) / **Ulale salama!** (Sleep peacefully!)\n   - **Kazi njema!** (Have a good workday!)\n\n3. **Muhtasari wa Unit 1 (Unit 1 Synthesis)**:\n   - Mkazo kwenye silabi ya pili kutoka mwisho (*ki-SWA-hi-li*).\n   - Salamu za wazee (*Shikamoo -> Marahaba*).\n   - Utambulisho (*Jina langu ni... / Naitwa... / Ninatoka...*).\n   - Adabu (*Asante, Samahani, Tafadhali, Karibu*).\n   - Kuagana (*Kwaheri, Safari njema, Tutaonana*).",
      "examples": [
        {
          "target": "Kwaherini marafiki zangu wote, tutaonana kesho asubuhi darasani kwa amani.",
          "reading": "Kwa-he-ri-ni ma-ra-fi-ki za-ngu wo-te, tu-ta-o-na-na ke-sho a-su-bu-hi da-ra-sa-ni kwa a-ma-ni. [kwɑhɛˈrini mɑrɑˈfiki ˈzɑŋɡu ˈwɔtɛ tutɑɔˈnɑnɑ ˈkɛʃɔ ɑsuˈbuhi dɑrɑˈsɑni kwɑ ɑˈmɑni] (kwah-hay-REE-nee mah-rah-FEE-kee ZAHN-goo WOH-tay, too-tah-oh-NAH-nah KAY-shoh ah-soo-BOO-hee dah-rah-SAH-nee kwah ah-MAH-nee)",
          "translation": "Goodbye all [farewell plural: kwaherini] my friends, we will see each other tomorrow morning [see you tomorrow: tutaonana kesho] in class peacefully."
        },
        {
          "target": "Safari njema unaposafiri kuelekea kisiwa cha Unguja kule Zanzibar.",
          "reading": "Sa-fa-ri nje-ma u-na-po-sa-fi-ri ku-e-le-ke-a ki-si-wa cha U-ngu-ja ku-le Za-nzi-bar. [sɑˈfɑri ˈnʤɛmɑ unɑpɔsɑˈfiri kuɛlɛˈkɛɑ kiˈsiwɑ tʃɑ uˈŋɡuʤɑ ˈkulɛ zɑnziˈbɑr] (sah-FAH-ree N-JAY-mah oo-nah-poh-sah-FEE-ree koo-ay-lay-KAY-ah kee-SEE-wah chah oon-GOO-jah KOO-lay zahn-zee-BAHR)",
          "translation": "Safe journey [well wishes for travel: safari njema] as you travel towards the island of Unguja over there in Zanzibar."
        },
        {
          "target": "Usiku mwema na ulale salama uwe na ndoto njema hadi mapambazuko.",
          "reading": "U-si-ku mwe-ma na u-la-le sa-la-ma u-we na ndo-to nje-ma ha-di ma-pa-mba-zu-ko. [uˈsiku ˈmwɛmɑ nɑ uˈlɑlɛ sɑˈlɑmɑ ˈuwɛ nɑ ˈndɔtɔ ˈnʤɛmɑ ˈhɑdi mɑpɑmbɑˈzukɔ] (oo-SEE-koo MWAY-mah nah oo-LAH-lay sah-LAH-mah OO-way nah N-DOH-toh N-JAY-mah HAH-dee mah-pahm-bah-ZOO-koh)",
          "translation": "Good night [night well wish: usiku mwema] and sleep peacefully, may you have sweet dreams [sweet dreams: ndoto njema] until dawn."
        }
      ],
      "mnemonics": [
        "Mzunguko kamili wa salamu: Salamu (Hujambo/Shikamoo) -> Utambulisho (Jina) -> Adabu (Asante) -> Kuagana (Kwaheri/Safari njema)!"
      ],
      "culturalNotes": [
        "Kuagana kwa matashi mema kama 'Safari njema' au 'Usiku mwema' huambatana na dua na nia ya amani, inayoonyesha upendo wa dhati wa jamii za Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapoagana na kundi la watu wengi jioni baada ya mkutano, kauli gani sahihi ya wingi inatumika?",
          "options": [
            "Kwaherini nyote, na usiku mwema! (Goodbye to all of you, and good night - Plural farewell and evening wish)",
            "Kwaheri wewe peke yako (Kauli ya umoja badala ya wingi)",
            "Shikamoo wote (Salamu ya kuanza badala ya kuagana)",
            "Habari za asubuhi (Salamu ya asubuhi badala ya jioni)"
          ],
          "answerIndex": 0,
          "explanation": "Kwa watu wengi (wingi), hutumika «Kwaherini» ikiambatana na matashi ya «usiku mwema»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mgeni anapopanda ndege au basi kuanza safari ndefu, unamtakia nini kwa Kiswahili fasaha?",
          "options": [
            "Safari njema na ufike salama! (Safe journey and arrive peacefully - Authentic travel wish)",
            "Kazi mbaya huko unakokwenda (Kauli hasi isiyofaa)",
            "Lala hapa kitandani sasa (Kauli isiyoendana na safari)",
            "Samahani sina chakula (Kauli isiyohusika)"
          ],
          "answerIndex": 0,
          "explanation": "Matashi mema ya msafiri ni «Safari njema» au «Ufike salama»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua muhtasari sahihi unaojumuisha kanuni zote kuu za salamu na adabu za Unit 1 ya Kiswahili:",
          "options": [
            "Unit 1 inajumuisha mkazo wa silabi ya pili, salamu za heshima (Shikamoo/Marahaba), kujitambulisha kwa jina na nchi, maneno ya staha (Asante/Samahani), na kuagana kwa matashi mema (Kwaheri/Safari njema). (Unit 1 synthesizes penultimate stress, respect greetings, self-introduction, politeness, and farewells.)",
            "Unit 1 inafundisha tu maneno magumu ya kisayansi bila salamu wala heshima yoyote.",
            "Katika Kiswahili hakuna tofauti kati ya kuamkia mtoto mdogo na kumwamkia mzee.",
            "Kuagana na mtu hufanywa kwa kusema Shikamoo kila wakati bila kutumia Kwaheri."
          ],
          "answerIndex": 0,
          "explanation": "«Unit 1 inajumuisha mkazo wa silabi ya pili, salamu za heshima (Shikamoo/Marahaba), kujitambulisha kwa jina na nchi, maneno ya staha (Asante/Samahani), na kuagana kwa matashi mema (Kwaheri/Safari njema).» ndio muhtasari kamili wa Unit 1."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u2-l1": {
    "id": "sw-u2-l1",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 1,
    "title": "Muundo wa Ngeli ya 1/2 (M-WA) na Nomino za Watu (Noun Class 1/2: Singular M- / Plural WA-)",
    "level": "A1",
    "objective": "Kuelewa mfumo wa Ngeli ya 1/2 (M-WA / A-WA), viambishi vya nomino (m-/mu-/mw- kwa umoja, wa- kwa wingi), na mabadiliko ya maumbo ya nomino za watu.",
    "presentation": {
      "explanation": "Muundo wa Ngeli ya 1/2 (M-WA) katika Lugha ya Kiswahili (Noun Class 1/2 Structure):\n\n1. **Dhana ya Ngeli za Nomino (Noun Classes in Bantu Languages)**:\n   - Kiswahili hakina mfumo wa jinsia ya kiume/kike (Grammatical Gender) kama lugha za Ulaya.\n   - Badala yake, nomino zimegawanywa katika **ngeli** (noun classes) kulingana na viambishi vyake na upatanisho wa kisarufi.\n\n2. **Ngeli ya 1/2 (A-WA / M-WA)**:\n   - Huu ni mfumo unaojumuisha hasa **binadamu** (watu):\n     - **Umoja (Class 1)**: Kiambishi cha nomino ni **m-**, **mw-** (kabla ya irabu), au **mu-**.\n     - **Wingi (Class 2)**: Kiambishi cha nomino ni **wa-** au **w-**.\n\n3. **Mifano ya Mabadiliko ya Nomino (M- -> WA-)**:\n   - *m-tu* (person) -> *wa-tu* (people)\n   - *m-toto* (child) -> *wa-toto* (children)\n   - *m-walimu* (teacher) -> *wa-limu* (teachers)\n   - *m-wanafunzi* (student) -> *wa-nafunzi* (students)\n   - *mw-alimu* -> *wa-alimu* / *wa-limu*\n   - *mw-anachama* (member) -> *wa-nachama* (members)",
      "examples": [
        {
          "target": "Mwalimu anafundisha wanafunzi darasani kwa bidii na hekima.",
          "reading": "Mwa-li-mu a-na-fu-ndi-sha wa-na-fu-nzi da-ra-sa-ni kwa bi-di-i na he-ki-ma. [mwɑˈlimu ɑnɑfunˈdiʃɑ wɑnɑˈfunzi dɑrɑˈsɑni kwɑ biˈdiː nɑ hɛˈkimɑ] (mwah-LEE-moo ah-nah-foon-DEE-shah wah-nah-FOON-zee dah-rah-SAH-nee kwah bee-DEE nah hay-KEE-mah)",
          "translation": "The teacher [class 1 singular noun: mwalimu] teaches students [class 2 plural noun: wanafunzi] in the classroom with diligence and wisdom."
        },
        {
          "target": "Mtoto mmoja anacheza uwanjani lakini watoto wengi wanasoma vitabu.",
          "reading": "Mto-to mmo-ja a-na-che-za u-wa-nja-ni la-ki-ni wa-to-to we-ngi wa-na-so-ma vi-ta-bu. [ˈmtɔtɔ ˈmːɔʤɑ ɑnɑˈtʃɛzɑ uwɑˈnʤɑni lɑˈkini wɑˈtɔtɔ ˈwɛŋɡi wɑnɑˈsɔmɑ viˈtɑbu] (M-TOH-toh MMOH-jah ah-nah-CHAY-zah oo-wahn-JAH-nee lah-KEE-nee wah-TOH-toh WAYN-gee wah-nah-SOH-mah vee-TAH-boo)",
          "translation": "One child [class 1 singular: mtoto mmoja] is playing on the field, but many children [class 2 plural: watoto wengi] are reading books."
        },
        {
          "target": "Wageni wakarimu wamefika nyumbani kwetu na wamepokelewa kwa furaha kubwa.",
          "reading": "Wa-ge-ni wa-ka-ri-mu wa-me-fi-ka nyu-mba-ni kwe-tu na wa-me-po-ke-le-wa kwa fu-ra-ha ku-bwa. [wɑˈɡɛni wɑkɑˈrimu wɑmɛˈfikɑ ɲumbɑˈni ˈkwɛtu nɑ wɑmɛpɔkɛˈlɛwɑ kwɑ fuˈrɑhɑ ˈkubwɑ] (wah-GAY-nee wah-kah-REE-moo wah-may-FEE-kah nyoom-bah-NEE KWAY-too nah wah-may-poh-kay-LAY-wah kwah foo-RAH-hah KOO-bwah)",
          "translation": "Generous guests [class 2 plural: wageni wakarimu] have arrived at our home and have been received with great joy."
        }
      ],
      "mnemonics": [
        "Kanuni ya M-WA: Mtu mmoja (M-) -> Watu wengi (WA-)!"
      ],
      "culturalNotes": [
        "Katika utamaduni wa Kiafrika, mtoto halelewi na mzazi wake pekee bali hulelewa na jamii nzima ya 'watu' na 'majirani'."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Neno 'mtoto' katika umoja linapobadilishwa kuwa wingi katika Ngeli ya 1/2 huwa nini?",
          "options": [
            "watoto (Children - Regular plural transformation of class 1 m- to class 2 wa-)",
            "mitoto (Wingi usio sahihi wa ngeli ya M-MI)",
            "vitoto (Kupunguza ukubwa badala ya wingi wa kawaida)",
            "matoto (Wingi wa dharau badala ya ule sanifu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «mtoto» (umoja) hubadilika kuwa «watoto» (wingi) katika Ngeli ya 1/2 (M-WA)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kwa usahihi nomino za Ngeli ya 1/2 katika umoja na wingi?",
          "options": [
            "Mwanafunzi anasoma kitabu na wanafunzi wengine wanaandika. (The student reads a book and other students write - Correct singular/plural pairing)",
            "Wanafunzi moja anasoma kitabu mezani (Mchanganyiko wa wingi na nambari ya umoja)",
            "Mtu wote wanalala usingizi usiku (Kosa la upatanisho)",
            "Mwalimu wengi wanafika darasani asubuhi (Mchanganyiko wa umoja na kivumishi cha wingi)"
          ],
          "answerIndex": 0,
          "explanation": "«Mwanafunzi anasoma kitabu na wanafunzi wengine wanaandika.» inaoanisha umoja (mwanafunzi) na wingi (wanafunzi) kwa usahihi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi inayofafanua mabadiliko ya nomino za Ngeli ya 1/2 (M-WA):",
          "options": [
            "Ngeli ya 1/2 inahusu binadamu, ambapo kiambishi cha umoja ni 'm-/mw-' na kiambishi cha wingi ni 'wa-'. (Class 1/2 denotes humans, taking prefix m-/mw- in singular and wa- in plural.)",
            "Ngeli ya 1/2 inahusu miti na mimea yote pekee.",
            "Katika Ngeli ya 1/2 maneno yote hubakia bila kubadilika kutoka umoja hadi wingi.",
            "Kiambishi cha umoja ni 'ki-' na kiambishi cha wingi ni 'vi-' katika ngeli hii."
          ],
          "answerIndex": 0,
          "explanation": "«Ngeli ya 1/2 inahusu binadamu, ambapo kiambishi cha umoja ni 'm-/mw-' na kiambishi cha wingi ni 'wa-'.» ndiyo kanuni kuu ya kimsingi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u2-l2": {
    "id": "sw-u2-l2",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 2,
    "title": "Upatanisho wa Kisarufi: Viambishi Nafsi na Vivumishi vya A-WA (Subject Prefixes a-/wa- & Adjective Concord)",
    "level": "A1",
    "objective": "Kutambua upatanisho wa kisarufi (Grammatical Concord) wa Ngeli ya A-WA: kiambishi nafsi cha kitenzi (a- / wa-) na upatanisho wa vivumishi (m- / wa-).",
    "presentation": {
      "explanation": "Upatanisho wa Kisarufi katika Ngeli ya A-WA (Subject Prefixes & Adjective Concord):\n\n1. **Kiambishi Awali cha Kitenzi (Subject Prefix - SP)**:\n   - **Umoja (Class 1)**: Kitenzi huchukua kiambishi **a-**:\n     - *Mtu **a**nasoma.* (The person reads.)\n     - *Mwalimu **a**nafundisha.* (The teacher teaches.)\n   - **Wingi (Class 2)**: Kitenzi huchukua kiambishi **wa-**:\n     - *Watu **wa**nasoma.* (The people read.)\n     - *Walimu **wa**nafundisha.* (The teachers teach.)\n\n2. **Upatanisho wa Vivumishi (Adjective Concord)**:\n   - Vivumishi huchukua viambishi vinavyofanana na nomino:\n     - *m-refu* (tall - umoja) -> *wa-refu* (tall - wingi)\n     - *m-zuri* (good/beautiful) -> *wa-zuri*\n     - *m-dogo* (small/young) -> *wa-dogo*\n     - *m-kubwa* (big/elder) -> *wa-kubwa*\n     - *mw-erevu* (clever) -> *wa-erevu*\n\n3. **Muundo Kamili wa Sentensi (Sentence Synthesis)**:\n   - [Nomino] + [Kivumishi] + [Kitenzi]:\n     - *Mtoto mdogo **a**nalala.* (The small child is sleeping.)\n     - *Watoto wadogo **wa**nalala.* (The small children are sleeping.)",
      "examples": [
        {
          "target": "Mwanafunzi mwerevu anasoma kwa makini, na wanafunzi waerevu watafaulu vizuri.",
          "reading": "Mwa-na-fu-nzi mwe-re-vu a-na-so-ma kwa ma-ki-ni, na wa-na-fu-nzi wa-e-re-vu wa-ta-fa-u-lu vi-zu-ri. [mwɑnɑˈfunzi mwɛˈrɛvu ɑnɑˈsɔmɑ kwɑ mɑˈkini nɑ wɑnɑˈfunzi wɑɛˈrɛvu wɑtɑfɑˈulu viˈzuri] (mwah-nah-FOON-zee mway-RAY-voo ah-nah-SOH-mah kwah mah-KEE-nee, nah wah-nah-FOON-zee wah-ay-RAY-voo wah-tah-fah-OO-loo vee-ZOO-ree)",
          "translation": "The clever student [adjective concord singular: mwerevu, SP: anasoma] reads attentively, and clever students [adjective concord plural: waerevu, SP: watafaulu] will pass well."
        },
        {
          "target": "Mzee mzuri anasaidia watoto wadogo kuvuka barabara salama.",
          "reading": "Mze-e mzu-ri a-na-sa-i-di-a wa-to-to wa-do-go ku-vu-ka ba-ra-ba-ra sa-la-ma. [mˈzɛː ˈmzuri ɑnɑsɑiˈdiɑ wɑˈtɔtɔ wɑˈdɔɡɔ kuˈvukɑ bɑrɑˈbɑrɑ sɑˈlɑmɑ] (M-ZAY M-ZOO-ree ah-nah-sah-ee-DEE-ah wah-TOH-toh wah-DOH-goh koo-VOO-kah bah-rah-BAH-rah sah-LAH-mah)",
          "translation": "The good elder [singular: mzee mzuri anasaidia] helps the little children [plural: watoto wadogo] cross the road safely."
        },
        {
          "target": "Wafanyakazi hodari wanafanya kazi kwa umoja ili kuleta maendeleo ya jamii.",
          "reading": "Wa-fa-nya-ka-zi ho-da-ri wa-na-fa-nya ka-zi kwa u-mo-ja i-li ku-le-ta ma-e-nde-le-o ya ja-mi-i. [wɑfɑɲɑˈkɑzi hɔˈdɑri wɑnɑˈfɑɲɑ ˈkɑzi kwɑ uˈmɔʤɑ ˈili kuˈlɛtɑ mɑɛndɛˈlɛɔ jɑ ʤɑˈmiː] (wah-fah-nyah-KAH-zee hoh-DAH-ree wah-nah-FAH-nyah KAH-zee kwah oo-MOH-jah EE-lee koo-LAY-tah mah-ayn-day-LAY-oh yah jah-MEE-ee)",
          "translation": "Skilled workers [plural agreement: wafanyakazi wanafanya] work together in unity in order to bring community development."
        }
      ],
      "mnemonics": [
        "Upatanisho wa A-WA: Mtu m-moja a-naimba -> Watu wa-ngi wa-naimba!"
      ],
      "culturalNotes": [
        "Kuelewa upatanisho wa ngeli ndiyo siri kuu ya kuzungumza Kiswahili chenye utamu na mnato unaovutia wasikilizaji."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kamilisha sentensi ifuatayo kwa upatanisho sahihi wa Ngeli ya 1 (Umoja): \"Mgeni mrefu _____fika jana jioni.\"",
          "options": [
            "a- (a-nafika / a-lifika - Correct Class 1 subject prefix 'a-')",
            "wa- (Kiambishi cha wingi badala ya umoja)",
            "ki- (Kiambishi cha Ngeli ya 7 KI-VI)",
            "li- (Kiambishi cha Ngeli ya 5 JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya umoja katika Ngeli ya A-WA (kama mgeni) huchukua kiambishi awali cha kitenzi «a-»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina upatanisho kamili na sanifu wa vivumishi na vitenzi vya Ngeli ya 2 (Wingi)?",
          "options": [
            "Walimu wazuri wanafundisha watoto werevu. (Good teachers teach clever children - Flawless plural concord)",
            "Walimu mzuri anafundisha watoto werevu (Kosa la kuchanganya umoja na wingi)",
            "Walimu wazuri inafundisha watoto mdogo (Kosa kubwa la viambishi)",
            "Mwalimu wazuri wanafundisha watoto moja (Kosa la upatanisho wa nomino na nambari)"
          ],
          "answerIndex": 0,
          "explanation": "«Walimu wazuri wanafundisha watoto werevu.» inafuata upatanisho wa wingi wa A-WA (wa-limu, wa-zuri, wa-nafundisha, wa-toto, w-erevu)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi ya sentensi inayoonyesha upatanisho sahihi wa umoja na wingi katika Ngeli ya A-WA:",
          "options": [
            "Umoja: Mvulana mdogo anacheza. -> Wingi: Wavulana wadogo wanacheza. (Singular: Mvulana mdogo anacheza. -> Plural: Wavulana wadogo wanacheza.)",
            "Umoja: Mvulana mdogo anacheza. -> Wingi: Mvulana wadogo anacheza.",
            "Umoja: Mvulana wadogo wanacheza. -> Wingi: Wavulana mdogo anacheza.",
            "Umoja: Wavulana wanacheza. -> Wingi: Mvulana inacheza."
          ],
          "answerIndex": 0,
          "explanation": "«Umoja: Mvulana mdogo anacheza. -> Wingi: Wavulana wadogo wanacheza.» inaoanisha kwa ukamilifu viambishi vyote vya kisarufi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u2-l3": {
    "id": "sw-u2-l3",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 3,
    "title": "Nomino Zisizoanza na M-/WA- lakini Zimo Ngeli ya A-WA (Living Beings in Class 1/2: Animals & Kinship)",
    "level": "A1",
    "objective": "Kuelewa kanuni kwamba viumbe wote wenye uhai (majina ya ukoo, vyeo, wanyama, ndege na wadudu) hufuata upatanisho wa Ngeli ya A-WA hata kama maumbo ya majina hayo hayaanzi na m-/wa-.",
    "presentation": {
      "explanation": "Viumbe Wenye Uhai katika Ngeli ya A-WA (Animate Nouns: Kinship & Animals):\n\n1. **Kanuni Kuu ya Uhai (The Animacy Principle in Swahili)**:\n   - Katika Kiswahili, **kiumbe chochote chenye uhai** hufuata upatanisho wa kisarufi wa **Ngeli ya A-WA** (kitenzi huchukua *a-* umoja, *wa-* wingi) bila kujali umbo la nje la neno.\n\n2. **Majina ya Ukoo na Vyeo (Kinship & Titles without m-/wa-)**:\n   - *baba* (father) -> *Baba **a**nasema.* (Father says.) / Wingi: *kinababa **wa**nasema.*\n   - *mama* (mother) -> *Mama **a**napika.* / Wingi: *kinamama **wa**napika.*\n   - *dada* (sister), *kaka* (brother), *shangazi* (aunt), *babu* (grandfather), *rafiki* (friend), *daktari* (doctor), *rais* (president).\n   - Vivumishi na vitenzi vyao huchukua *m-/wa-* na *a-/wa-*:\n     - *Daktari **m**zuri **a**natibu wagonjwa.* (The good doctor treats patients.)\n     - *Madaktari **wa**zuri **wa**natibu wagonjwa.* (Good doctors treat patients.)\n\n3. **Wanyama, Ndege na Wadudu (Animals, Birds & Insects)**:\n   - *simba* (lion) -> *Simba **m**kali **a**nawinda.* (The fierce lion hunts.) / Wingi: *Simba **wa**kali **wa**nawinda.*\n   - *tembo* (elephant) -> *Tembo **m**kubwa **a**natembea.* / Wingi: *Tembo **wa**kubwa **wa**natembea.*\n   - *ndege* (bird), *paka* (cat), *mbwa* (dog), *ng'ombe* (cow), *samaki* (fish).",
      "examples": [
        {
          "target": "Mama yangu anapika chakula kitamu na dada zangu wanamsaidia jikoni.",
          "reading": "Ma-ma ya-ngu a-na-pi-ka cha-ku-la ki-ta-mu na da-da za-ngu wa-na-msa-i-di-a ji-ko-ni. [ˈmɑmɑ ˈjɑŋɡu ɑnɑˈpikɑ tʃɑˈkulɑ kiˈtɑmu nɑ ˈdɑdɑ ˈzɑŋɡu wɑnɑmsɑiˈdiɑ ʤiˈkɔni] (MAH-mah YAHN-goo ah-nah-PEE-kah chah-KOO-lah kee-TAH-moo nah DAH-dah ZAHN-goo wah-nah-m-sah-ee-DEE-ah jee-KOH-nee)",
          "translation": "My mother [animate kinship: mama anapika] cooks delicious food and my sisters [plural kinship: dada wanamsaidia] help her in the kitchen."
        },
        {
          "target": "Simba mkali anawinda porini wakati ndege wadogo wanaruka angani.",
          "reading": "Si-mba mka-li a-na-wi-nda po-ri-ni wa-ka-ti nde-ge wa-do-go wa-na-ru-ka a-nga-ni. [ˈsimbɑ mˈkɑli ɑnɑˈwindɑ pɔˈrini wɑˈkɑti ˈndɛɡɛ wɑˈdɔɡɔ wɑnɑˈrukɑ ɑŋˈɡɑni] (SEEM-bah M-KAH-lee ah-nah-WEEN-dah poh-REE-nee wah-KAH-tee N-DAY-gay wah-DOH-goh wah-nah-ROO-kah ahn-GAH-nee)",
          "translation": "The fierce lion [animate animal concord: simba mkali anawinda] hunts in the bush while little birds [animate plural: ndege wadogo wanaruka] fly in the sky."
        },
        {
          "target": "Rafiki mwema anamsaidia ndugu yake wakati wa shida na dhiki.",
          "reading": "Ra-fi-ki mwe-ma a-na-msa-i-di-a ndu-gu ya-ke wa-ka-ti wa shi-da na dhi-ki. [rɑˈfiki ˈmwɛmɑ ɑnɑmsɑiˈdiɑ ˈnduɡu ˈjɑkɛ wɑˈkɑti wɑ ˈʃidɑ nɑ ˈðiki] (rah-FEE-kee MWAY-mah ah-nah-m-sah-ee-DEE-ah N-DOO-goo YAH-kay wah-KAH-tee wah SHEE-dah nah THEE-kee)",
          "translation": "A good friend [animate concord: rafiki mwema anamsaidia] assists his sibling during times of hardship and adversity."
        }
      ],
      "mnemonics": [
        "Uhai = A-WA: Iwe ni simba, tembo, mama au rafiki — wakitenda, kiambishi ni a- (umoja) na wa- (wingi)!"
      ],
      "culturalNotes": [
        "Katika hekima za Waswahili, wanyama hupewa nafasi kubwa katika methali na hadithi simulizi kama mifano hai ya tabia za binadamu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayoelezea tendo la 'simba' kuwinda ni ipi?",
          "options": [
            "Simba mkali anawinda porini. (The fierce lion hunts in the wilderness - Correct animate concord 'a-')",
            "Simba mkali linawinda porini (Kosa la kutumia kiambishi cha JI-MA)",
            "Simba mkali kinawinda porini (Kosa la kutumia kiambishi cha KI-VI)",
            "Simba mkali inawinda porini (Kosa la kutumia kiambishi cha N-N kwa kiumbe chenye uhai)"
          ],
          "answerIndex": 0,
          "explanation": "Kwa sababu simba ni kiumbe hai, huchukua upatanisho wa A-WA: «Simba mkali anawinda»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia madaktari wengi hospitalini, sentensi ipi inafuata upatanisho sahihi wa kisarufi?",
          "options": [
            "Madaktari hodari wanatibu wagonjwa wengi. (Skillful doctors treat many patients - Correct animate plural agreement)",
            "Madaktari hodari yanatibu wagonjwa wengi (Kosa la kuchukulia daktari kama kitu kisicho hai)",
            "Madaktari mzuri anatibu wagonjwa wengi (Kosa la kuchanganya umoja na wingi)",
            "Daktari wote inatibu wagonjwa wengi (Kosa la upatanisho)"
          ],
          "answerIndex": 0,
          "explanation": "Madaktari ni binadamu, hivyo huchukua upatanisho wa wingi wa A-WA: «Madaktari hodari wanatibu»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua maelezo sahihi kuhusu kanuni ya uhai (animacy) katika ngeli za Kiswahili:",
          "options": [
            "Majina yote ya viumbe hai (kama wanyama, ndege, na majina ya ukoo) huchukua upatanisho wa Ngeli ya A-WA bila kujali herufi zake za mwanzo. (All animate nouns take Class A-WA agreement regardless of their initial prefixes.)",
            "Wanyama wote huchukua upatanisho wa ngeli ya vitu visivyo na uhai kila wakati.",
            "Majina ya ukoo kama 'mama' na 'baba' hayana upatanisho wowote katika Kiswahili.",
            "Wadudu na ndege pekee ndio wasioweza kuingia katika Ngeli ya A-WA."
          ],
          "answerIndex": 0,
          "explanation": "«Majina yote ya viumbe hai (kama wanyama, ndege, na majina ya ukoo) huchukua upatanisho wa Ngeli ya A-WA bila kujali herufi zake za mwanzo.» ndiyo kanuni kuu ya sarufi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u2-l4": {
    "id": "sw-u2-l4",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 4,
    "title": "Vionyeshi vya Ngeli ya A-WA (Demonstratives: Huyu, Yule, Hawa, Wale)",
    "level": "A1",
    "objective": "Kutambua na kutumia vionyeshi vya Ngeli ya A-WA: ukaribu (huyu / hawa), umbali (yule / wale), na urejeshi (huyo / hao).",
    "presentation": {
      "explanation": "Vionyeshi vya Ngeli ya A-WA (Demonstratives in Class 1/2):\n\n1. **Vionyeshi vya Ukaribu (Near Demonstratives - This / These)**:\n   - **Umoja**: **Huyu** (This person near the speaker):\n     - *Mtu huyu* (This person)\n     - *Mtoto huyu* (This child)\n   - **Wingi**: **Hawa** (These people near the speaker):\n     - *Watu hawa* (These people)\n     - *Watoto hawa* (These children)\n\n2. **Vionyeshi vya Umbali (Far Demonstratives - That / Those)**:\n   - **Umoja**: **Yule** (That person far from both speaker & listener):\n     - *Mwalimu yule* (That teacher over there)\n     - *Mgeni yule* (That guest over there)\n   - **Wingi**: **Wale** (Those people far away):\n     - *Walimu wale* (Those teachers over there)\n     - *Wageni wale* (Those guests over there)\n\n3. **Vionyeshi vya Urejeshi (Referential Demonstratives - That / Those mentioned before)**:\n   - **Umoja**: **Huyo** (That person previously mentioned / near listener)\n   - **Wingi**: **Hao** (Those people previously mentioned / near listener)\n\n4. **Nafasi ya Kionyeshi katika Sentensi**:\n   - Kionyeshi kinaweza kufuata nomino (*mtu huyu*) au kutangulia nomino (*huyu mtu*) kutilia mkazo.",
      "examples": [
        {
          "target": "Mvulana huyu ni mwanafunzi bora, na wasichana wale ni wanamichezo mahiri.",
          "reading": "Mvu-la-na hu-yu ni mwa-na-fu-nzi bo-ra, na wa-si-cha-na wa-le ni wa-na-mi-che-zo ma-hi-ri. [mvuˈlɑnɑ ˈhuju ni mwɑnɑˈfunzi ˈbɔrɑ nɑ wɑsiˈtʃɑnɑ ˈwɑlɛ ni wɑnɑmiˈtʃɛzɔ mɑˈhiri] (mvoo-LAH-nah HOO-yoo nee mwah-nah-FOON-zee BOH-rah, nah wah-see-CHAH-nah WAH-lay nee wah-nah-mee-CHAY-zoh mah-HEE-ree)",
          "translation": "This boy [near demonstrative singular: mvulana huyu] is an excellent student, and those girls [far demonstrative plural: wasichana wale] are skilled athletes."
        },
        {
          "target": "Watu hawa wote wanatoka mji mmoja lakini yule daktari anatoka mbali sana.",
          "reading": "Wa-tu ha-wa wo-te wa-na-to-ka m-ji mmo-ja la-ki-ni yu-le da-kta-ri a-na-to-ka mba-li sa-na. [ˈwɑtu ˈhɑwɑ ˈwɔtɛ wɑnɑˈtɔkɑ ˈmʤi ˈmːɔʤɑ lɑˈkini ˈjulɛ dɑkˈtɑri ɑnɑˈtɔkɑ ˈmbɑli ˈsɑnɑ] (WAH-too HAH-wah WOH-tay wah-nah-TOH-kah M-jee MMOH-jah lah-KEE-nee YOO-lay dahk-TAH-ree ah-nah-TOH-kah M-BAH-lee SAH-nah)",
          "translation": "All these people [near demonstrative plural: watu hawa] come from one town, but that doctor over there [far demonstrative singular: yule daktari] comes from very far away."
        },
        {
          "target": "Kaka huyu anapenda kusoma vitabu, na wale wazazi wanafurahia maendeleo yake.",
          "reading": "Ka-ka hu-yu a-na-pe-nda ku-so-ma vi-ta-bu, na wa-le wa-za-zi wa-na-fu-ra-hi-a ma-e-nde-le-o ya-ke. [ˈkɑkɑ ˈhuju ɑnɑˈpɛndɑ kuˈsɔmɑ viˈtɑbu nɑ ˈwɑlɛ wɑˈzɑzi wɑnɑfurɑˈhiɑ mɑɛndɛˈlɛɔ ˈjɑkɛ] (KAH-kah HOO-yoo ah-nah-PAYN-dah koo-SOH-mah vee-TAH-boo, nah WAH-lay wah-ZAH-zee wah-nah-foo-rah-HEE-ah mah-ayn-day-LAY-oh YAH-kay)",
          "translation": "This brother [demonstrative: kaka huyu] loves reading books, and those parents [demonstrative: wale wazazi] rejoice in his progress."
        }
      ],
      "mnemonics": [
        "Vionyeshi vya A-WA: Karibu = Huyu / Hawa, Mbali = Yule / Wale, Rejea = Huyo / Hao!"
      ],
      "culturalNotes": [
        "Kutaja mtu kwa kionyeshi cha 'Yule' huambatana na kutotikisa kidole cha shahada moja kwa moja usoni pa mtu, kwani kufanya hivyo huhesabiwa kuwa ukosefu wa adabu kwenye jamii ya Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapotaka kumwonyesha mtu aliye karibu nawe katika Ngeli ya 1 (Umoja), unatumia neno gani?",
          "options": [
            "Huyu (This person - Near demonstrative for Class 1 singular)",
            "Yule (Kionyeshi cha umbali badala ya ukaribu)",
            "Hiki (Kionyeshi cha Ngeli ya 7 KI-VI)",
            "Hawa (Kionyeshi cha wingi badala ya umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Kionyeshi cha ukaribu cha umoja katika Ngeli ya A-WA ni «Huyu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi gani inatumia kionyeshi cha umbali wa wingi (wale) kwa usahihi?",
          "options": [
            "Wanafunzi wale wanasoma chini ya mti kule mbali. (Those students over there are studying under the tree - Accurate far plural demonstrative)",
            "Mwanafunzi wale anasoma chini ya mti kule (Mchanganyiko wa nomino ya umoja na kionyeshi cha wingi)",
            "Wanafunzi yule wanacheza mpira (Mchanganyiko wa nomino ya wingi na kionyeshi cha umoja)",
            "Kitabu wale kiko mezani (Kosa la ngeli)"
          ],
          "answerIndex": 0,
          "explanation": "«Wanafunzi wale wanasoma chini ya mti kule mbali.» inatumia kionyeshi cha umbali wa wingi «wale» kwa usahihi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jedwali sahihi la vionyeshi vya Ngeli ya A-WA (Umoja na Wingi):",
          "options": [
            "Ukaribu: Huyu / Hawa | Umbali: Yule / Wale | Urejelezi: Huyo / Hao (Near: Huyu/Hawa | Far: Yule/Wale | Referential: Huyo/Hao)",
            "Ukaribu: Hiki / Hivi | Umbali: Kile / Vile | Urejelezi: Hicho / Hivyo",
            "Ukaribu: Hili / Haya | Umbali: Lile / Yale | Urejelezi: Hilo / Hayo",
            "Ukaribu: Huu / Hii | Umbali: Ule / Ile | Urejelezi: Huo / Hiyo"
          ],
          "answerIndex": 0,
          "explanation": "«Ukaribu: Huyu / Hawa | Umbali: Yule / Wale | Urejelezi: Huyo / Hao» ndilo jedwali sahihi la Ngeli ya A-WA."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u2-l5": {
    "id": "sw-u2-l5",
    "subject": "swahili",
    "unit": 2,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli ya 1/2 (A-WA) (Noun Class 1/2 Grand Synthesis)",
    "level": "A1",
    "objective": "Kuunganisha kikamilifu vipengele vyote vya Ngeli ya 1/2 (A-WA): nomino za m-/wa-, kanuni ya uhai ya wanyama na ukoo, upatanisho wa vivumishi na vitenzi, na vionyeshi vya ukaribu na umbali katika sentensi changamano.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli ya 1/2 (A-WA) (Noun Class 1/2 Grand Synthesis):\n\n1. **Muhtasari wa Ngeli ya A-WA**:\n   - **Nomino za Kawaida**: *m-tu* -> *wa-tu*, *m-toto* -> *wa-toto*, *mw-alimu* -> *wa-limu*.\n   - **Viumbe Hai Bila Viambishi vya M-**: *baba*, *mama*, *dada*, *simba*, *tembo*, *daktari* (wote huchukua upatanisho wa A-WA).\n\n2. **Mfumo wa Upatanisho wa Kisarufi (Concord Paradigm)**:\n   - **Kiambishi cha Kitenzi (SP)**: Umoja = **a-** (*mtu anasoma*) | Wingi = **wa-** (*watu wanasoma*).\n   - **Vivumishi (Adjectives)**: Umoja = **m-/mw-** (*mzuri, mwerevu*) | Wingi = **wa-** (*wazuri, waerevu*).\n   - **Vionyeshi (Demonstratives)**: Umoja = **huyu / yule / huyo** | Wingi = **hawa / wale / hao**.\n\n3. **Utunzi wa Sentensi Changamano (Sentence Construction)**:\n   - *Mwalimu huyu mwema anawafundisha watoto wale werevu.* (This good teacher teaches those clever children.)\n   - *Wageni hawa wakarimu wanazungumza na wazee wale wenye hekima.* (These generous guests speak with those wise elders.)",
      "examples": [
        {
          "target": "Mwalimu huyu mwema anawafundisha wanafunzi wale werevu jinsi ya kuandika insha nzuri.",
          "reading": "Mwa-li-mu hu-yu mwe-ma a-na-wa-fu-ndi-sha wa-na-fu-nzi wa-le we-re-vu ji-nsi ya ku-a-ndi-ka i-nsha nzu-ri. [mwɑˈlimu ˈhuju ˈmwɛmɑ ɑnɑwɑfunˈdiʃɑ wɑnɑˈfunzi ˈwɑlɛ wɛˈrɛvu ˈʤinsi jɑ kuɑnˈdikɑ ˈinʃɑ ˈnzuri] (mwah-LEE-moo HOO-yoo MWAY-mah ah-nah-wah-foon-DEE-shah wah-nah-FOON-zee WAH-lay way-RAY-voo JEEN-see yah koo-ahn-DEE-kah EEN-shah N-ZOO-ree)",
          "translation": "This good teacher [class 1 complete concord: mwalimu huyu mwema anawafundisha] teaches those clever students [class 2 complete concord: wanafunzi wale werevu] how to write good essays."
        },
        {
          "target": "Watoto hawa watiifu wanawasikiliza wazazi wao wakarimu kwa heshima na upendo.",
          "reading": "Wa-to-to ha-wa wa-ti-i-fu wa-na-wa-si-ki-li-za wa-za-zi wa-o wa-ka-ri-mu kwa he-shi-ma na u-pe-ndo. [wɑˈtɔtɔ ˈhɑwɑ wɑtiˈifu wɑnɑwɑsikiˈlizɑ wɑˈzɑzi ˈwɑɔ wɑkɑˈrimu kwɑ hɛˈʃimɑ nɑ uˈpɛndɔ] (wah-TOH-toh HAH-wah wah-tee-EE-foo wah-nah-wah-see-kee-LEE-zah wah-ZAH-zee WAH-oh wah-kah-REE-moo kwah hay-SHEE-mah nah oo-PAYN-doh)",
          "translation": "These obedient children [class 2 concord: watoto hawa watiifu wanawasikiliza] listen to their generous parents with respect and love."
        },
        {
          "target": "Ngeli ya A-WA inajumuisha viumbe wote wenye uhai, ambapo nomino, vivumishi, vionyeshi na vitenzi hupatana kikamilifu.",
          "reading": "Nge-li ya A-WA i-na-ju-mu-i-sha viu-mbe wo-te we-nye u-ha-i, a-mba-po no-mi-no, vi-vu-mi-shi, vio-nye-shi na vi-te-nzi hu-pa-ta-na ki-ka-mi-li-fu. [ˈŋɡɛli jɑ ɑ-wɑ inɑʤumuˈiʃɑ viˈumbɛ ˈwɔtɛ ˈwɛnjɛ uˈhɑi ɑmˈbɑpɔ nɔˈminɔ vivuˈmiʃi viɔˈɲɛʃi nɑ viˈtɛnzi hupɑˈtɑnɑ kikɑmiˈlifu] (N-GAY-lee yah AH-WAH ee-nah-joo-moo-EE-shah vee-OOM-bay WOH-tay WAYN-yay oo-HAH-ee, ahm-BAH-poh noh-MEE-noh, vee-voo-MEE-shee, vee-ohn-YAY-shee nah vee-TAYN-zee hoo-pah-TAH-nah kee-kah-mee-LEE-foo)",
          "translation": "Class A-WA encompasses all living entities [synthesis definition: viumbe wenye uhai], where nouns, adjectives, demonstratives, and verbs harmonize completely."
        }
      ],
      "mnemonics": [
        "Muhtasari wa A-WA: Mtu huyu mzuri anasoma (Umoja) -> Watu hawa wazuri wanasoma (Wingi)!"
      ],
      "culturalNotes": [
        "Kuelewa Ngeli ya A-WA kunamwezesha mwanafunzi kuingia katika ulimwengu mpana wa jamii za Waswahili na kufahamu mahusiano ya kijamii na kiutamaduni."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha upatanisho kamili wa Ngeli ya A-WA (Nomino + Kionyeshi + Kivumishi + Kitenzi)?",
          "options": [
            "Wageni hawa wema wanafika nyumbani kwetu salama. (These good guests arrive at our home safely - Complete harmonious Class 2 concord)",
            "Wageni huyu mzuri anafika nyumbani kwetu salama (Mchanganyiko potofu wa umoja na wingi)",
            "Mgeni hawa wazuri wanafika nyumbani (Kosa la upatanisho wa nomino)",
            "Wageni wale kizuri kinafika nyumbani (Kosa la kuchanganya ngeli tofauti)"
          ],
          "answerIndex": 0,
          "explanation": "«Wageni hawa wema wanafika nyumbani kwetu salama.» inaoanisha nomino (wageni), kionyeshi (hawa), kivumishi (wema) na kitenzi (wanafika)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 2, ni kanuni ipi ya jumla inayotawala Ngeli ya A-WA?",
          "options": [
            "Viumbe wote wenye uhai huchukua kiambishi cha kitenzi 'a-' kwa umoja na 'wa-' kwa wingi. (All living beings take verbal prefix a- in singular and wa- in plural)",
            "Vitu vyote vya chuma huingia katika Ngeli ya A-WA pekee",
            "Ngeli ya A-WA haina vivumishi wala vionyeshi",
            "Maneno yote ya Ngeli ya A-WA lazima yaanze na herufi 'z'"
          ],
          "answerIndex": 0,
          "explanation": "Kanuni kuu ni kwamba viumbe wote wenye uhai huchukua «a-» kwa umoja na «wa-» kwa wingi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya muhtasari mkuu inayowakilisha umahiri wa juu wa Ngeli ya 1/2 (A-WA):",
          "options": [
            "Mwalimu yule hodari anawalea wanafunzi hawa wadogo kwa upendo, na wazazi wote wanafurahia malezi yake. (That skilled teacher nurtures these young students with love, and all parents rejoice in his care.)",
            "Mwalimu wale wazuri inalea wanafunzi huyu mdogo kwa upendo.",
            "Wanafunzi yule mzuri anasoma kitabu kimoja kila siku usiku.",
            "Ngeli ya A-WA inakataza matumizi ya vionyeshi na vivumishi katika sentensi."
          ],
          "answerIndex": 0,
          "explanation": "«Mwalimu yule hodari anawalea wanafunzi hawa wadogo kwa upendo, na wazazi wote wanafurahia malezi yake.» inajumuisha upatanisho wote wa A-WA kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
"sw-u3-l1": {
    "id": "sw-u3-l1",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 1,
    "title": "Muundo wa Kitenzi na Kiambishi cha Wakati Uliopo (-na-) (Verb Structure & Present Tense -na-)",
    "level": "A1",
    "objective": "Kuelewa muundo wa kitenzi cha Kiswahili: Kiambishi Nafsi (SP) + Kiambishi cha Wakati Uliopo (-na-) + Shina la Kitenzi kwa nafsi zote sita (Mimi, Wewe, Yeye, Sisi, Ninyi, Wao).",
    "presentation": {
      "explanation": "Muundo wa Kitenzi na Wakati Uliopo katika Kiswahili (Swahili Verb Structure & Present Tense -na-):\n\n1. **Muundo wa Kitenzi Sanifu (Canonical Verb Morphology)**:\n   - Kitenzi cha Kiswahili hujengwa kwa kuunganisha viambishi:\n     `[Kiambishi Nafsi / Subject Prefix] + [Kiambishi cha Wakati / Tense Marker] + [Shina la Kitenzi / Verb Root]`\n\n2. **Kiambishi cha Wakati Uliopo Unaondelea (-na-)**:\n   - Kiambishi **-na-** kinaonyesha tendo linalofanyika hivi sasa au tendo la kawaida (Present Continuous / Simple Present).\n\n3. **Mnyambuliko wa Nafsi Zote Sita (Conjugation across 6 Persons)**:\n   - *Mimi* (I): **ni-** + **na-** + **soma** -> **ninasoma** (I am reading / I read)\n   - *Wewe* (You sg): **u-** + **na-** + **soma** -> **unasoma** (You are reading)\n   - *Yeye* (He/She): **a-** + **na-** + **soma** -> **anasoma** (He/She is reading)\n   - *Sisi* (We): **tu-** + **na-** + **soma** -> **tunasoma** (We are reading)\n   - *Ninyi* (You pl): **m-** + **na-** + **soma** -> **mnasoma** (You all are reading)\n   - *Wao* (They): **wa-** + **na-** + **soma** -> **wanasoma** (They are reading)",
      "examples": [
        {
          "target": "Mimi ninasoma kitabu cha hadithi na wenzangu wanaandika insha nzuri.",
          "reading": "Mi-mi ni-na-so-ma ki-ta-bu cha ha-di-thi na we-nza-ngu wa-na-a-ndi-ka i-nsha nzu-ri. [ˈmimi ninɑˈsɔmɑ kiˈtɑbu tʃɑ hɑˈdiθi nɑ wɛˈnzɑŋɡu wɑnɑɑnˈdikɑ ˈinʃɑ ˈnzuri] (MEE-mee nee-nah-SOH-mah kee-TAH-boo chah hah-DEE-thee nah wayn-ZAHN-goo wah-nah-ahn-DEE-kah EEN-shah N-ZOO-ree)",
          "translation": "I am reading [present tense 1st person: ninasoma] a storybook and my companions are writing [present tense 3rd person plural: wanaandika] good essays."
        },
        {
          "target": "Mwalimu anafundisha kwa makini huku wanafunzi wote wakimsikiliza kwa utulivu.",
          "reading": "Mwa-li-mu a-na-fu-ndi-sha kwa ma-ki-ni hu-ku wa-na-fu-nzi wo-te wa-ki-msi-ki-li-za kwa u-tu-li-vu. [mwɑˈlimu ɑnɑfunˈdiʃɑ kwɑ mɑˈkini ˈhuku wɑnɑˈfunzi ˈwɔtɛ wɑkimsikiˈlizɑ kwɑ utuˈlivu] (mwah-LEE-moo ah-nah-foon-DEE-shah kwah mah-KEE-nee HOO-koo wah-nah-FOON-zee WOH-tay wah-keem-see-kee-LEE-zah kwah oo-too-LEE-voo)",
          "translation": "The teacher is teaching [present tense 3rd person singular: anafundisha] attentively while all students listen to him calmly."
        },
        {
          "target": "Sisi tunajifunza lugha ya Kiswahili kila siku ili kuwasiliana kwa ufasaha.",
          "reading": "Si-si tu-na-ji-fu-nza lu-gha ya Ki-swa-hi-li ki-la si-ku i-li ku-wa-si-li-a-na kwa u-fa-sa-ha. [ˈsisi tunɑʤiˈfunzɑ ˈluɣɑ jɑ kiswɑˈhili ˈkilɑ ˈsiku ˈili kuwɑsiliˈɑnɑ kwɑ ufɑˈsɑhɑ] (SEE-see too-nah-jee-FOON-zah LOO-ghah yah kee-swah-HEE-lee KEE-lah SEE-koo EE-lee koo-wah-see-lee-AH-nah kwah oo-fah-SAH-hah)",
          "translation": "We are learning [present tense 1st person plural: tunajifunza] the Swahili language every day to communicate fluently."
        }
      ],
      "mnemonics": [
        "Wakati Uliopo: Kiambishi cha Sasa ni -NA- (ni-NA-soma, u-NA-soma, a-NA-soma, tu-NA-soma, m-NA-soma, wa-NA-soma)!"
      ],
      "culturalNotes": [
        "Lugha ya Kiswahili hutumia kiambishi cha wakati mmoja (-na-) kueleza vitendo vinavyoendelea sasa (Continuous) na tabia za kila siku (Habitual)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayoelezea nafsi ya kwanza wingi (Sisi) katika wakati uliopo wa kitenzi 'cheza' ni ipi?",
          "options": [
            "Sisi tunacheza mpira uwanjani. (We are playing ball on the field - Correct 1st person plural 'tu-na-cheza')",
            "Sisi ninacheza mpira uwanjani (Mchanganyiko wa nafsi ya kwanza umoja na wingi)",
            "Sisi wanacheza mpira uwanjani (Matumizi ya nafsi ya tatu wingi)",
            "Sisi anacheza mpira uwanjani (Matumizi ya nafsi ya tatu umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi nafsi cha «Sisi» ni «tu-», hivyo kitenzi huwa «tunacheza»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapomwambia rafiki yako unayezungumza naye (Wewe) anachofanya sasa hivi, unatumia neno gani?",
          "options": [
            "Wewe unaandika barua nzuri. (You are writing a good letter - Correct 2nd person singular 'u-na-andika')",
            "Wewe ninaandika barua nzuri (Kosa la kiambishi nafsi)",
            "Wewe wanaandika barua nzuri (Kosa la wingi)",
            "Wewe tunaandika barua nzuri (Kosa la nafsi ya kwanza)"
          ],
          "answerIndex": 0,
          "explanation": "Kwa nafsi ya pili umoja (Wewe), kiambishi nafsi ni «u-», kikiungana na «-na-» kupata «unasoma» au «unaandika»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi inayofafanua muundo wa wakati uliopo katika Kiswahili:",
          "options": [
            "Kitenzi cha wakati uliopo kinajengwa kwa kiambishi nafsi (ni-, u-, a-, tu-, m-, wa-) kikifuatiwa na kiambishi cha wakati '-na-' na shina la kitenzi. (Present tense is formed by subject prefix + tense marker -na- + verb root.)",
            "Wakati uliopo hauna kiambishi chochote bali unatumia neno 'sasa' pekee.",
            "Kila kitenzi cha Kiswahili kina herufi moja tu ya kiambishi nafsi bila wakati.",
            "Kiambishi '-na-' kinatumika tu kwa wanyama na si kwa binadamu."
          ],
          "answerIndex": 0,
          "explanation": "«Kitenzi cha wakati uliopo kinajengwa kwa kiambishi nafsi (ni-, u-, a-, tu-, m-, wa-) kikifuatiwa na kiambishi cha wakati '-na-' na shina la kitenzi.» ndiyo kanuni kuu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u3-l2": {
    "id": "sw-u3-l2",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 2,
    "title": "Vitenzi vya Silabi Moja katika Wakati Uliopo (Monosyllabic Verbs: Kula, Kunywa, Kuja, Kwenda)",
    "level": "A1",
    "objective": "Kutambua tabia maalum ya vitenzi vya silabi moja (Monosyllabic verbs) ambavyo huhifadhi kiambishi 'ku-' katika wakati uliopo (-na-) ili kulinda mkazo wa kifonolojia.",
    "presentation": {
      "explanation": "Vitenzi vya Silabi Moja katika Wakati Uliopo (Monosyllabic Verbs in -na-):\n\n1. **Dhana ya Vitenzi vya Silabi Moja (Monosyllabic Stems)**:\n   - Vitenzi vingi vya Kiswahili vina mashina ya silabi mbili au zaidi (*-soma*, *-andika*, *-cheza*).\n   - Hata hivyo, kuna vitenzi vyenye shina la **silabi moja tu**:\n     - *-la* (eat) -> *kula*\n     - *-nywa* (drink) -> *kunywa*\n     - *-ja* (come) -> *kuja*\n     - *-enda* (go) -> *kwenda*\n     - *-fa* (die) -> *kufa*\n     - *-wa* (be/become) -> *kuwa*\n\n2. **Kuhifadhi Kiambishi 'ku-' (Retention of the Infinitive Prefix 'ku-')**:\n   - Katika wakati uliopo (**-na-**), vitenzi hivi **huvumilia na kubakiza 'ku-'** ili neno liwe na silabi za kutosha kubeba mkazo wa sauti kwenye silabi ya pili kutoka mwisho:\n     - *Mimi **nina-ku-la*** (I am eating) [siyo *ninala*]\n     - *Yeye **ana-ku-nywa*** (He is drinking) [siyo *ananywa*]\n     - *Wao **wana-ku-ja*** (They are coming)\n     - *Sisi **tuna-kwe-nda*** (We are going)\n\n3. **Muktadha wa Matumizi**:\n   - *Mtoto anakula chakula.* (The child is eating food.)\n   - *Wageni wanakuja sasa.* (Guests are coming now.)",
      "examples": [
        {
          "target": "Mtoto mdogo anakula ugali na mboga wakati baba yake anakunywa maji safi.",
          "reading": "Mto-to mdo-go a-na-ku-la u-ga-li na mbo-ga wa-ka-ti ba-ba ya-ke a-na-ku-nywa ma-ji sa-fi. [ˈmtɔtɔ mˈdɔɡɔ ɑnɑˈkulɑ uˈɡɑli nɑ ˈmbɔɡɑ wɑˈkɑti ˈbɑbɑ ˈjɑkɛ ɑnɑˈkuɲwɑ ˈmɑʤi ˈsɑfi] (M-TOH-toh M-DOH-goh ah-nah-KOO-lah oo-GAH-lee nah M-BOH-gah wah-KAH-tee BAH-bah YAH-kay ah-nah-KOO-nywah MAH-jee SAH-fee)",
          "translation": "The little child is eating [monosyllabic verb -la: anakula] ugali and greens while his father is drinking [monosyllabic verb -nywa: anakunywa] clean water."
        },
        {
          "target": "Wageni wengi wanakuja kututembelea kijijini kwetu mchana huu.",
          "reading": "Wa-ge-ni we-ngi wa-na-ku-ja ku-tu-te-mbe-le-a ki-ji-ji-ni kwe-tu mcha-na hu-u. [wɑˈɡɛni ˈwɛŋɡi wɑnɑˈkuʤɑ kututɛmbɛˈlɛɑ kiʤiˈʤini ˈkwɛtu mˈtʃɑnɑ ˈhuː] (wah-GAY-nee WAYN-gee wah-nah-KOO-jah koo-too-tahm-bay-LAY-ah kee-jee-JEE-nee KWAY-too M-CHAH-nah HOO-oo)",
          "translation": "Many guests are coming [monosyllabic verb -ja: wanakuja] to visit us at our village this afternoon."
        },
        {
          "target": "Sisi tunakwenda sokoni sasa kununua matunda mabichi na samaki watamu.",
          "reading": "Si-si tu-na-kwe-nda so-ko-ni sa-sa ku-nu-nua ma-tu-nda ma-bi-chi na sa-ma-ki wa-ta-mu. [ˈsisi tunɑˈkwɛndɑ sɔˈkɔni ˈsɑsɑ kunuˈnuɑ mɑˈtundɑ mɑˈbitʃi nɑ sɑˈmɑki wɑˈtɑmu] (SEE-see too-nah-KWAYN-dah soh-KOH-nee SAH-sah koo-noo-NOO-ah mah-TOON-dah mah-BEE-chee nah sah-MAH-kee wah-TAH-moo)",
          "translation": "We are going [monosyllabic verb -enda: tunakwenda] to the market now to buy fresh fruits and delicious fish."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Silabi Moja: Katika -na-, 'ku-' haitoki: ninakula, anakunywa, wanakuja, tunakwenda!"
      ],
      "culturalNotes": [
        "Chakula cha 'Ugali' kinachotajwa hapa ni chakula kikuu cha jadi cha mamilioni ya watu nchini Tanzania, Kenya na Uganda."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Chagua kitenzi sahihi cha wakati uliopo kinachomaanisha \"Yeye anakula chakula\":",
          "options": [
            "anakula (He/She is eating - Correct retention of 'ku-' for monosyllabic stem -la)",
            "anala (Kosa la kuangusha kiambishi 'ku-')",
            "analia (Hiki ni kitenzi tofauti: kulia / to cry)",
            "anacheza (Kitenzi kingine: kucheza / to play)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «-la» ni cha silabi moja, hivyo huhifadhi «ku-» katika wakati uliopo: «anakula»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia vitenzi vya silabi moja 'kunywa' na 'kuja' kwa usahihi?",
          "options": [
            "Wageni wanakuja nyumbani na wanakunywa chai moto. (Guests are coming home and drinking hot tea - Accurate monosyllabic forms)",
            "Wageni wanaja nyumbani na wananywa chai moto (Kosa la kuondoa 'ku-')",
            "Wageni wanakula chai moto (Matumizi mabaya ya kitenzi kula badala ya kunywa)",
            "Wageni alikuja jana jioni (Kosa la wakati uliopita na upatanisho)"
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi sahihi vyenye kuhifadhi «ku-» ni «wanakuja» na «wanakunywa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Kwanini vitenzi kama 'kula', 'kunywa', na 'kuja' huhifadhi kiambishi 'ku-' katika wakati uliopo (-na-)?",
          "options": [
            "Kwa sababu ni vitenzi vya silabi moja na vinahitaji 'ku-' ili kubeba mkazo wa sauti kwenye silabi ya pili kutoka mwisho. (Because they are monosyllabic verbs needing 'ku-' to carry penultimate stress.)",
            "Kwa sababu vinatumika tu wakati wa usiku bila mchana.",
            "Kwa sababu havina viambishi nafsi kama vitenzi vingine.",
            "Ni kosa la kisarufi na havipaswi kuhifadhi 'ku-' kabisa."
          ],
          "answerIndex": 0,
          "explanation": "«Kwa sababu ni vitenzi vya silabi moja na vinahitaji 'ku-' ili kubeba mkazo wa sauti kwenye silabi ya pili kutoka mwisho.» ndiyo sababu ya kifonolojia."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u3-l3": {
    "id": "sw-u3-l3",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 3,
    "title": "Shughuli za Kila Siku na Maswali ya Wakati Uliopo (Daily Activities & Present Tense Questions)",
    "level": "A1",
    "objective": "Kutumia wakati uliopo (-na-) kuuliza na kujibu maswali kuhusu shughuli za kila siku (Unafanya nini? Unakwenda wapi?) na kueleza vitendo mbalimbali vya maisha ya nyumbani na kazini.",
    "presentation": {
      "explanation": "Shughuli za Kila Siku na Miundo ya Maswali (Daily Routines & Inquiries in Present Tense):\n\n1. **Kuuliza Maswali ya Wakati Uliopo (Question Patterns)**:\n   - *Unafanya nini?* (What are you doing?) -> *Ninafanya kazi / Ninasoma.*\n   - *Unakwenda wapi?* (Where are you going?) -> *Ninakwenda shuleni / sokoni.*\n   - *Anapika nini?* (What is he/she cooking?) -> *Anapika wali na maharagwe.*\n   - *Mnazungumza nini?* (What are you all talking about?) -> *Tunazungumza kuhusu masomo.*\n\n2. **Vitenzi vya Shughuli za Kila Siku (Daily Routine Verbs)**:\n   - **pika** (cook): *Ninapika chakula.*\n   - **fua** (wash clothes): *Mama anafua nguo.*\n   - **safisha** (clean): *Kaka anasafisha nyumba.*\n   - **fanya kazi** (work): *Baba anafanya kazi ofisini.*\n   - **zungumza** (converse / talk): *Marafiki wanazungumza kwa furaha.*\n   - **tembea** (walk): *Watoto wanatembea kwenda shule.*",
      "examples": [
        {
          "target": "Je, unafanya nini sasa hivi? - Ninapika chakula cha jioni jikoni.",
          "reading": "Je, u-na-fa-nya ni-ni sa-sa hi-vi? - Ni-na-pi-ka cha-ku-la cha ji-o-ni ji-ko-ni. [ʤɛ unɑˈfɑɲɑ ˈnini ˈsɑsɑ ˈhivi - ninɑˈpikɑ tʃɑˈkulɑ tʃɑ ʤiˈɔni ʤiˈkɔni] (JAY, oo-nah-FAH-nyah NEE-nee SAH-sah HEE-vee? - nee-nah-PEE-kah chah-KOO-lah chah jee-OH-nee jee-KOH-nee)",
          "translation": "What are you doing [inquiry: unafanya nini] right now? - I am cooking [daily routine: ninapika] dinner in the kitchen."
        },
        {
          "target": "Mama anafua nguo na kaka anasafisha uwanja wa nyumba kwa usafi mkubwa.",
          "reading": "Ma-ma a-na-fua nguo na ka-ka a-na-sa-fi-sha u-wa-nja wa nyu-mba kwa u-sa-fi mku-bwa. [ˈmɑmɑ ɑnɑˈfuɑ ˈŋɡuɔ nɑ ˈkɑkɑ ɑnɑsɑˈfiʃɑ uwɑˈnʤɑ wɑ ˈɲumbɑ kwɑ usɑˈfi mˈkubwɑ] (MAH-mah ah-nah-FOO-ah N-GOO-oh nah KAH-kah ah-nah-sah-FEE-shah oo-wahn-JAH wah NYOOM-bah kwah oo-SAH-fee M-KOO-bwah)",
          "translation": "Mother is washing clothes [routine action: anafua nguo] and brother is cleaning the compound of the house with great neatness."
        },
        {
          "target": "Wafanyabiashara wanazungumza na wateja sokoni na wanauza bidhaa mbalimbali.",
          "reading": "Wa-fa-nya-bi-a-sha-ra wa-na-zu-ngu-mza na wa-te-ja so-ko-ni na wa-na-u-za bi-dha-a mba-li-mba-li. [wɑfɑɲɑbiɑˈʃɑrɑ wɑnɑzuˈŋɡumzɑ nɑ wɑˈtɛʤɑ sɔˈkɔni nɑ wɑnɑˈuzɑ biˈðɑː mbɑlimbɑˈli] (wah-fah-nyah-bee-ah-SHAH-rah wah-nah-zoon-GOOM-zah nah wah-TAY-jah soh-KOH-nee nah wah-nah-OO-zah bee-THAH-ah M-bah-lee-M-bah-lee)",
          "translation": "Merchants are conversing [social action: wanazungumza] with customers at the market and selling various goods."
        }
      ],
      "mnemonics": [
        "Swali na Jibu: Unafanya nini? -> Ninafanya... | Unakwenda wapi? -> Ninakwenda...!"
      ],
      "culturalNotes": [
        "Kazi za pamoja (kama vile 'Ujamaa' na 'Harambee') hufanywa na jamii nzima huku watu wakiimba na kuzungumza kwa furaha wakati wa kazi."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mtu anapokuuliza \"Unakwenda wapi sasa hivi?\", jibu sahihi na kamili ni lipi?",
          "options": [
            "Ninakwenda sokoni kununua mboga. (I am going to the market to buy greens - Logical present tense answer)",
            "Jina langu ni Juma mwalimu (Jibu lisilohusika na swali la mahali)",
            "Sijambo sana asante (Jibu la salamu badala ya swali la mahali)",
            "Chakula kiliiva jana usiku (Kauli isiyo na uhusiano)"
          ],
          "answerIndex": 0,
          "explanation": "Swali «Unakwenda wapi?» linauliza eneo unaloelekea, hivyo hujibiwa kwa «Ninakwenda...»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaeleza shughuli za usafi wa nyumbani katika wakati uliopo kwa usahihi?",
          "options": [
            "Watoto wanasafisha vyumba na mama anapika chakula. (Children are cleaning the rooms and mother is cooking food - Flawless daily routine description)",
            "Watoto kitabu anasoma jana asubuhi (Mvurugiko wa maneno)",
            "Mama inasafisha watoto wote uwanjani (Kosa la upatanisho wa kitenzi)",
            "Vyumba vinapika chakula jikoni sasa (Maana isiyo na mantiki)"
          ],
          "answerIndex": 0,
          "explanation": "«Watoto wanasafisha vyumba na mama anapika chakula.» inatumia vitenzi sahihi vya shughuli za kila siku."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua swali na jibu lililo sahihi na sanifu kuhusu shughuli za kila siku katika Kiswahili:",
          "options": [
            "Swali: Je, unafanya nini sasa hivi? -> Jibu: Ninaandika barua kwa rafiki yangu. (Question: What are you doing right now? -> Answer: I am writing a letter to my friend.)",
            "Swali: Je, unakwenda wapi? -> Jibu: Ninakula ndizi tatu.",
            "Swali: Je, unafanya nini? -> Jibu: Marahaba bibi yangu.",
            "Swali: Je, jina lako nani? -> Jibu: Ninakwenda Nairobi."
          ],
          "answerIndex": 0,
          "explanation": "«Swali: Je, unafanya nini sasa hivi? -> Jibu: Ninaandika barua kwa rafiki yangu.» ndiyo jozi sahihi na yenye mantiki."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u3-l4": {
    "id": "sw-u3-l4",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 4,
    "title": "Upatanisho wa Ngeli Mbalimbali katika Wakati Uliopo (Noun Class Concord with Present Tense -na-)",
    "level": "A1",
    "objective": "Kutambua jinsi ngeli nyingine za nomino (KI-VI, M-MI, JI-MA, N-N) zinavyotumia viambishi vyake vya upatanisho wa kisarufi pamoja na kiambishi cha wakati uliopo (-na-).",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli Tofauti katika Wakati Uliopo (Concord across Noun Classes with -na-):\n\n1. **Ngeli ya KI-VI (Classes 7/8 - Things & Objects)**:\n   - Umoja (**ki-**): *Kiti **ki**naanguka.* (The chair is falling.)\n   - Wingi (**vi-**): *Viti **vi**naanguka.* (The chairs are falling.)\n   - *Kitabu **ki**nasomwa.* / *Vitabu **vi**nasomwa.*\n\n2. **Ngeli ya M-MI (Classes 3/4 - Trees & Plants)**:\n   - Umoja (**u-**): *Mti **u**nakua.* (The tree is growing.)\n   - Wingi (**i-**): *Miti **i**nakua.* (Trees are growing.)\n   - *Mto **u**napita.* (The river is flowing.) / *Mito **i**napita.*\n\n3. **Ngeli ya JI-MA (Classes 5/6 - Bulk Nouns & Fruit)**:\n   - Umoja (**li-**): *Gari **li**napita.* (The car is passing.)\n   - Wingi (**ya-**): *Magari **ya**napita.* (Cars are passing.)\n   - *Tunda **li**naanguka.* / *Matunda **ya**naanguka.*\n\n4. **Ngeli ya N-N (Classes 9/10 - Animals & Inanimates)**:\n   - Umoja (**i-**): *Nyumba **i**najengwa.* (The house is being built.)\n   - Wingi (**zi-**): *Nyumba **zi**najengwa.* (Houses are being built.)",
      "examples": [
        {
          "target": "Gari jipya linapita barabarani wakati miti mikubwa inatoa kivuli kizuri.",
          "reading": "Ga-ri ji-pya li-na-pi-ta ba-ra-ba-ra-ni wa-ka-ti mi-ti mi-kbu-wa i-na-to-a ki-vu-li ki-zu-ri. [ˈɡɑri ˈʤipjɑ linɑˈpitɑ bɑrɑˈbɑrɑni wɑˈkɑti ˈmiti miˈkubwɑ inɑˈtɔɑ kiˈvuli kiˈzuri] (GAH-ree JEE-pyah lee-nah-PEE-tah bah-rah-BAH-rah-nee wah-KAH-tee MEE-tee mee-KOO-bwah ee-nah-TOH-ah kee-VOO-lee kee-ZOO-ree)",
          "translation": "The new car is passing [class 5 JI-MA singular: linapita] on the road while big trees are providing [class 4 M-MI plural: inatoa] good shade."
        },
        {
          "target": "Kitabu hiki kinawafundisha wasomaji mambo mengi na nyumba hizi zinapambwa vizuri.",
          "reading": "Ki-ta-bu hi-ki ki-na-wa-fu-ndi-sha wa-so-ma-ji ma-mbo me-ngi na nyu-mba hi-zi zi-na-pa-mbwa vi-zu-ri. [kiˈtɑbu ˈhiki kinɑwɑfunˈdiʃɑ wɑsɔˈmɑʤi ˈmɑmbɔ ˈmɛŋɡi nɑ ˈɲumbɑ ˈhizi zinɑˈpɑmbwɑ viˈzuri] (kee-TAH-boo HEE-kee kee-nah-wah-foon-DEE-shah wah-soh-MAH-jee MAHM-boh MAYN-gee nah NYOOM-bah HEE-zee zee-nah-PAHM-bwah vee-ZOO-ree)",
          "translation": "This book is teaching [class 7 KI-VI singular: kinawafundisha] readers many things and these houses are being decorated [class 10 N-N plural: zinapambwa] beautifully."
        },
        {
          "target": "Simba mkali ananguruma mbugani huku watalii wakipiga picha kwa furaha.",
          "reading": "Si-mba mka-li a-na-ngu-ru-ma mbu-ga-ni hu-ku wa-ta-li-i wa-ki-pi-ga pi-cha kwa fu-ra-ha. [ˈsimbɑ mˈkɑli ɑnɑŋɡuˈrumɑ mbuˈɡɑni ˈhuku wɑtɑˈliː wɑkipiˈɡɑ ˈpitʃɑ kwɑ fuˈrɑhɑ] (SEEM-bah M-KAH-lee ah-nahn-goo-ROO-mah m-boo-GAH-nee HOO-koo wah-tah-LEE-ee wah-kee-pee-GAH PEE-chah kwah foo-RAH-hah)",
          "translation": "The fierce lion is roaring [animate concord: ananguruma] in the park while tourists take photographs joyfully."
        }
      ],
      "mnemonics": [
        "Viambishi vya Ngeli na -NA-: KI->kina-, VI->vina-, M/MI->unao/ina-, JI/MA->lina/yana-, N/N->ina/zina-!"
      ],
      "culturalNotes": [
        "Mbuga za wanyama za Serengeti na Ngorongoro (Tanzania) pamoja na Maasai Mara (Kenya) ni vyanzo vikuu vya urithi wa asili wa Kiswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina upatanisho sahihi wa kitenzi cha wakati uliopo kwa nomino ya Ngeli ya 7 (Kiti)?",
          "options": [
            "Kiti kizuri kinavunjika polepole. (The good chair is breaking slowly - Correct Class 7 prefix 'ki-na-')",
            "Kiti kizuri linavunjika polepole (Kosa la kutumia kiambishi cha JI-MA)",
            "Kiti kizuri yanavunjika polepole (Kosa la kutumia wingi wa JI-MA)",
            "Kiti kizuri wanavunjika polepole (Kosa la kutumia kiambishi cha watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Kiti» (Ngeli ya 7 KI-VI) huchukua kiambishi cha kitenzi «ki-», hivyo huwa «kinavunjika»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia magari mengi (Ngeli ya 6 JI-MA wingi) yanayopita barabarani, kitenzi kipi ni sahihi?",
          "options": [
            "Magari mengi yanapita barabarani kwa kasi. (Many cars are passing on the road at speed - Correct Class 6 prefix 'ya-na-')",
            "Magari mengi linapita barabarani (Kosa la kutumia umoja 'li-')",
            "Magari mengi kinapita barabarani (Kosa la kiambishi cha KI-VI)",
            "Magari mengi wanapita barabarani (Kosa la kuchukulia magari kama watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi «Magari» huchukua kiambishi cha kitenzi «ya-», hivyo husemwa «yanapita»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa wakati uliopo katika ngeli zote zilizotajwa:",
          "options": [
            "Mti mrefu unakua, gari jipya linapita, na kitabu kizuri kinasomwa na wanafunzi. (The tall tree grows [u-], the new car passes [li-], and the good book is read [ki-] by students.)",
            "Mti mrefu linakua, gari jipya kinapita, na kitabu kizuri unakua darasani.",
            "Miti yote linakua na vitabu vyote linasomwa na watu wote.",
            "Magari yote kinapita wakati nyumba zote linajengwa mjini."
          ],
          "answerIndex": 0,
          "explanation": "«Mti mrefu unakua, gari jipya linapita, na kitabu kizuri kinasomwa na wanafunzi.» inafuata upatanisho kamili wa ngeli za M-MI (u-), JI-MA (li-), na KI-VI (ki-)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u3-l5": {
    "id": "sw-u3-l5",
    "subject": "swahili",
    "unit": 3,
    "lessonNumber": 5,
    "title": "Muhtasari wa Wakati Uliopo (-na-) (Present Continuous Tense Grand Synthesis)",
    "level": "A1",
    "objective": "Kuunganisha mada zote za Unit 3: mnyambuliko wa nafsi zote 6 katika wakati uliopo (-na-), vitenzi vya silabi moja (kula, kunywa, kuja, kwenda), miundo ya maswali ya shughuli za kila siku, na upatanisho wa ngeli zote katika sentensi changamano.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Wakati Uliopo (-na-) (Present Continuous Tense Grand Synthesis):\n\n1. **Kanuni Kuu ya Wakati Uliopo**:\n   - Kiambishi **-na-** kinaashiria vitendo vinavyoendelea sasa au vitendo vya mazoea.\n   - Muundo: `Kiambishi Nafsi + -na- + Shina la Kitenzi` (*ninasoma, unasoma, anasoma, tunasoma, mnasoma, wanasoma*).\n\n2. **Vitenzi vya Silabi Moja**:\n   - Huhifadhi kiambishi 'ku-': *ninakula, anakunywa, wanakuja, tunakwenda*.\n\n3. **Maswali na Shughuli za Kila Siku**:\n   - *Unafanya nini?* -> *Ninapika chakula, ninafua nguo, ninasafisha nyumba.*\n\n4. **Upatanisho wa Ngeli Mbalimbali**:\n   - A-WA (*anasoma / wanasoma*), KI-VI (*kinasomwa / vinasomwa*), M-MI (*unakua / inakua*), JI-MA (*linapita / yanapita*), N-N (*inajengwa / zinajengwa*).",
      "examples": [
        {
          "target": "Mimi ninajifunza Kiswahili, marafiki zangu wanakunywa chai, na treni ya kisasa inasafiri haraka.",
          "reading": "Mi-mi ni-na-ji-fu-nza Ki-swa-hi-li, ma-ra-fi-ki za-ngu wa-na-ku-nywa cha-i, na tre-ni ya ki-sa-sa i-na-sa-fi-ri ha-ra-ka. [ˈmimi ninɑʤiˈfunzɑ kiswɑˈhili mɑrɑˈfiki ˈzɑŋɡu wɑnɑˈkuɲwɑ ˈtʃɑi nɑ ˈtrɛni jɑ kiˈsɑsɑ inɑsɑˈfiri hɑˈrɑkɑ] (MEE-mee nee-nah-jee-FOON-zah kee-swah-HEE-lee, mah-rah-FEE-kee ZAHN-goo wah-nah-KOO-nywah CHAH-ee, nah TRAY-nee yah kee-SAH-sah ee-nah-sah-FEE-ree hah-RAH-kah)",
          "translation": "I am learning Swahili [1st person: ninajifunza], my friends are drinking tea [monosyllabic: wanakunywa], and the modern train travels fast [class 9: inasafiri]."
        },
        {
          "target": "Wanafunzi wote wanasoma darasani kwa furaha na walimu wao wanawaongoza kwa hekima.",
          "reading": "Wa-na-fu-nzi wo-te wa-na-so-ma da-ra-sa-ni kwa fu-ra-ha na wa-li-mu wa-o wa-na-wa-o-ngo-za kwa he-ki-ma. [wɑnɑˈfunzi ˈwɔtɛ wɑnɑˈsɔmɑ dɑrɑˈsɑni kwɑ fuˈrɑhɑ nɑ wɑˈlimu ˈwɑɔ wɑnɑwɑɔŋˈɡɔzɑ kwɑ hɛˈkimɑ] (wah-nah-FOON-zee WOH-tay wah-nah-SOH-mah dah-rah-SAH-nee kwah foo-RAH-hah nah wah-LEE-moo WAH-oh wah-nah-wah-ohn-GOH-zah kwah hay-KEE-mah)",
          "translation": "All students are studying [class 2 plural: wanasoma] in the classroom joyfully and their teachers are guiding them [plural: wanawaongoza] with wisdom."
        },
        {
          "target": "Wakati uliopo wenye kiambishi '-na-' unaonyesha wazi vitendo vinavyoendelea kufanyika sasa hivi katika nyanja zote za maisha.",
          "reading": "Wa-ka-ti u-li-o-po we-nye ki-a-mbi-shi '-na-' u-na-o-nye-sha wa-zi vi-te-ndo vi-na-vyo-e-nde-le-a ku-fa-nyi-ka sa-sa hi-vi ka-ti-ka nya-nja zo-te za ma-i-sha. [wɑˈkɑti uliˈɔpɔ ˈwɛnjɛ kiɑmˈbiʃi -nɑ- unɑɔˈɲɛʃɑ ˈwɑzi viˈtɛndɔ vinɑvjɔɛndɛˈlɛɑ kufɑˈɲikɑ ˈsɑsɑ ˈhivi kɑˈtikɑ ˈɲɑnʤɑ ˈzɔtɛ zɑ mɑˈiʃɑ] (wah-KAH-tee oo-lee-OH-poh WAYN-yay kee-ahm-BEE-shee '-na-' oo-nah-ohn-YAY-shah WAH-zee vee-TAYN-doh vee-nah-vyohn-day-LAY-ah koo-fah-NYEE-kah SAH-sah HEE-vee kah-TEE-kah NYAHN-jah ZOH-tay zah mah-EE-shah)",
          "translation": "The present continuous tense with prefix '-na-' [present tense synthesis: wakati uliopo] clearly demonstrates actions currently unfolding in all spheres of life."
        }
      ],
      "mnemonics": [
        "Muhtasari wa -NA-: Sasa hivi ninajifunza, ninakula ugali, ninasafisha nyumba, na kila kitu kinakwenda vizuri!"
      ],
      "culturalNotes": [
        "Kuelewa wakati uliopo kunamwezesha mwanafunzi kueleza shughuli zake zote za sasa na kushiriki katika mazungumzo ya kijamii popote anapokwenda Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa wakati uliopo (-na-) kwa vitenzi vya kawaida na vitenzi vya silabi moja?",
          "options": [
            "Wanafunzi wanasoma vitabu na sasa wanakula chakula cha mchana. (Students are reading books and now eating lunch - Perfect synthesis of regular and monosyllabic verbs in -na-)",
            "Wanafunzi alisoma vitabu na jana alikula chakula (Kosa la kutumia wakati uliopita)",
            "Wanafunzi anasoma vitabu na sasa anala chakula (Mchanganyiko potofu wa umoja na kuangusha 'ku-')",
            "Vitabu vyote wanasoma wanafunzi wote (Mpangilio usio sahihi wa maneno)"
          ],
          "answerIndex": 0,
          "explanation": "«Wanafunzi wanasoma vitabu na sasa wanakula chakula cha mchana.» inatumia kitenzi cha kawaida «wanasoma» na kitenzi cha silabi moja «wanakula» kwa usahihi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari mkuu wa Unit 3, kwanini kiambishi '-na-' ni nguzo muhimu ya mawasiliano ya Kiswahili?",
          "options": [
            "Kwa sababu huwezesha kueleza vitendo vinavyotendeka sasa hivi na kuunganisha upatanisho wa ngeli zote kwa uwazi. (Because it enables expressing ongoing actions and harmonizes all noun class concords clearly)",
            "Kwa sababu kinatumika tu kuhesabu nambari za pesa",
            "Kwa sababu kinakataza matumizi ya majina ya watu",
            "Hakina kazi yoyote katika sentensi za Kiswahili"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi «-na-» huwezesha kueleza vitendo vinavyoendelea hivi sasa kwa upatanisho wa ngeli zote."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 3 ya Wakati Uliopo katika Kiswahili:",
          "options": [
            "Mimi ninasoma Kiswahili kwa makini, familia yangu inakunywa chai mezani, na watoto wote wanacheza uwanjani kwa furaha. (I am studying Swahili attentively, my family is drinking tea at the table, and all children are playing in the field joyfully.)",
            "Mimi atasoma Kiswahili kesho na watoto wote alicheza jana.",
            "Familia yangu linakunywa chai wakati mimi wanacheza uwanjani.",
            "Wakati uliopo unatumia neno moja tu bila viambishi nafsi."
          ],
          "answerIndex": 0,
          "explanation": "«Mimi ninasoma Kiswahili kwa makini, familia yangu inakunywa chai mezani, na watoto wote wanacheza uwanjani kwa furaha.» inajumuisha kwa ukamilifu mnyambuliko wa nafsi, vitenzi vya silabi moja na upatanisho wa ngeli katika wakati uliopo."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u4-l1": {
    "id": "sw-u4-l1",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 1,
    "title": "Muundo wa Kitenzi katika Wakati Uliopita (-li-) (Verb Morphology of the Past Tense -li-)",
    "level": "A1",
    "objective": "Kuelewa muundo wa kitenzi cha wakati uliopita katika Kiswahili: Kiambishi Nafsi (SP) + Kiambishi cha Wakati Uliopita (-li-) + Shina la Kitenzi kwa nafsi zote sita.",
    "presentation": {
      "explanation": "Muundo wa Kitenzi katika Wakati Uliopita (Past Tense -li- Morphology):\n\n1. **Kiambishi cha Wakati Uliopita (-li-)**:\n   - Katika Kiswahili, matendo yaliyokamilika au yaliyotendeka hapo awali (Simple Past Tense) huwakilishwa na kiambishi **-li-**.\n\n2. **Mnyambuliko wa Nafsi Zote Sita (Conjugation Paradigm)**:\n   - *Mimi* (I): **ni-** + **li-** + **soma** -> **nilisoma** (I read / I studied)\n   - *Wewe* (You sg): **u-** + **li-** + **soma** -> **ulisoma** (You read)\n   - *Yeye* (He/She): **a-** + **li-** + **soma** -> **alisoma** (He/She read)\n   - *Sisi* (We): **tu-** + **li-** + **soma** -> **tulisoma** (We read)\n   - *Ninyi* (You pl): **m-** + **li-** + **soma** -> **mlisoma** (You all read)\n   - *Wao* (They): **wa-** + **li-** + **soma** -> **walisoma** (They read)\n\n3. **Vitenzi vya Kawaida (Regular Verbs)**:\n   - *andika* (write) -> *aliandika* (he wrote)\n   - *fika* (arrive) -> *walifika* (they arrived)\n   - *anza* (begin) -> *tulianza* (we began)\n   - *safiri* (travel) -> *nilisafiri* (I traveled)",
      "examples": [
        {
          "target": "Jana asubuhi nilisoma kitabu cha historia na rafiki yangu aliandika barua ndefu.",
          "reading": "Ja-na a-su-bu-hi ni-li-so-ma ki-ta-bu cha hi-sto-ri-a na ra-fi-ki ya-ngu a-li-a-ndi-ka ba-ru-a nde-fu. [ˈʤɑnɑ ɑsuˈbuhi niliˈsɔmɑ kiˈtɑbu tʃɑ histɔˈriɑ nɑ rɑˈfiki ˈjɑŋɡu ɑliɑnˈdikɑ bɑˈruɑ ˈndɛfu] (JAH-nah ah-soo-BOO-hee nee-lee-SOH-mah kee-TAH-boo chah hees-toh-REE-ah nah rah-FEE-kee YAHN-goo ah-lee-ahn-DEE-kah bah-ROO-ah N-DAY-foo)",
          "translation": "Yesterday morning I read [past tense 1st person: nilisoma] a history book and my friend wrote [past tense 3rd person: aliandika] a long letter."
        },
        {
          "target": "Walimu wote walifika shuleni mapema na walianza masomo kwa wakati.",
          "reading": "Wa-li-mu wo-te wa-li-fi-ka shu-le-ni ma-pe-ma na wa-li-a-nza ma-so-mo kwa wa-ka-ti. [wɑˈlimu ˈwɔtɛ wɑliˈfikɑ ʃuˈlɛni mɑˈpɛmɑ nɑ wɑliˈɑnzɑ mɑˈsɔmɔ kwɑ wɑˈkɑti] (wah-LEE-moo WOH-tay wah-lee-FEE-kah shoo-LAY-nee mah-PAY-mah nah wah-lee-AHN-zah mah-SOH-moh kwah wah-KAH-tee)",
          "translation": "All teachers arrived [past tense 3rd person plural: walifika] at school early and began [past tense: walianza] lessons on time."
        },
        {
          "target": "Sisi tulitembelea mji mkuu wa Dar es Salaam na tulifurahi sana kuona bahari.",
          "reading": "Si-si tu-li-te-mbe-le-a m-ji mku-u wa Dar es Sa-laam na tu-li-fu-ra-hi sa-na ku-o-na ba-ha-ri. [ˈsisi tulitɛmbɛˈlɛɑ ˈmʤi mˈkuː wɑ dɑr ɛs sɑˈlɑːm nɑ tulifuˈrɑhi ˈsɑnɑ kuˈɔnɑ bɑˈhɑri] (SEE-see too-lee-tahm-bay-LAY-ah M-jee M-KOO wah dahr ays sah-LAHM nah too-lee-foo-RAH-hee SAH-nah koo-OH-nah bah-HAH-ree)",
          "translation": "We visited [past tense 1st person plural: tulitembelea] the principal city of Dar es Salaam and rejoiced [past tense: tulifurahi] very much to see the sea."
        }
      ],
      "mnemonics": [
        "Wakati Uliopita: Kiambishi cha Jana ni -LI- (ni-LI-soma, u-LI-soma, a-LI-soma, tu-LI-soma, m-LI-soma, wa-LI-soma)!"
      ],
      "culturalNotes": [
        "Jiji la Dar es Salaam (lenye maana ya 'Bandari ya Amani' kwa Kiarabu) ni kitovu kikuu cha biashara na utamaduni wa pwani ya Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayoelezea nafsi ya kwanza umoja (Mimi) katika wakati uliopita wa kitenzi 'safiri' ni ipi?",
          "options": [
            "Mimi nilisafiri kwenda Arusha jana. (I traveled to Arusha yesterday - Correct 1st person singular past 'ni-li-safiri')",
            "Mimi ninasafiri kwenda Arusha jana (Mchanganyiko wa wakati uliopo na neno 'jana')",
            "Mimi walisafiri kwenda Arusha jana (Kosa la kiambishi cha wingi)",
            "Mimi alilisafiri kwenda Arusha jana (Kiambishi cha ziada kisicho sahihi)"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi nafsi cha «Mimi» ni «ni-» na kiambishi cha wakati uliopita ni «-li-», hivyo kitenzi huwa «nilisafiri»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapoelezea jinsi wanafunzi (Wao) walivyofanya kazi nzuri darasani jana, unatumia kauli ipi?",
          "options": [
            "Wanafunzi walifanya kazi kwa bidii na walifaulu. (Students worked hard and passed - Correct 3rd person plural past tense)",
            "Wanafunzi anafanya kazi kwa bidii jana (Kosa la wakati na idadi)",
            "Wanafunzi tulifanya kazi kwa bidii jana (Kosa la nafsi)",
            "Wanafunzi mlifanya kazi kwa bidii jana (Kosa la nafsi ya pili)"
          ],
          "answerIndex": 0,
          "explanation": "Kwa nafsi ya tatu wingi (Wanafunzi/Wao), viambishi sahihi vya wakati uliopita ni «walifanya» na «walifaulu»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi inayofafanua muundo wa wakati uliopita katika Kiswahili:",
          "options": [
            "Kitenzi cha wakati uliopita kinatumia kiambishi cha wakati '-li-' kati ya kiambishi nafsi na shina la kitenzi (mfano: ni-li-soma). (Past tense verb uses tense marker -li- between subject prefix and verb root.)",
            "Wakati uliopita unatumia kiambishi '-ta-' pekee.",
            "Kiswahili hakina kiambishi cha wakati uliopita bali kinatumia neno 'zamani' pekee.",
            "Wakati uliopita huondoa herufi zote za mwanzo za kitenzi."
          ],
          "answerIndex": 0,
          "explanation": "«Kitenzi cha wakati uliopita kinatumia kiambishi cha wakati '-li-' kati ya kiambishi nafsi na shina la kitenzi (mfano: ni-li-soma).» ndiyo kanuni sahihi ya sarufi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u4-l2": {
    "id": "sw-u4-l2",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 2,
    "title": "Vitenzi vya Silabi Moja katika Wakati Uliopita (Monosyllabic Verbs in Past Tense: Kula, Kunywa, Kuja, Kwenda)",
    "level": "A1",
    "objective": "Kutambua na kutumia vitenzi vya silabi moja (kula, kunywa, kuja, kwenda) katika wakati uliopita (-li-), ambavyo huhifadhi kiambishi 'ku-' kwa ajili ya mkazo wa sauti.",
    "presentation": {
      "explanation": "Vitenzi vya Silabi Moja katika Wakati Uliopita (Monosyllabic Verbs with -li-):\n\n1. **Kuhifadhi Kiambishi 'ku-' (Infinitive Prefix Retention)**:\n   - Kama ilivyo katika wakati uliopo (*-na-*), vitenzi vya silabi moja **huvumilia na kubakiza kiambishi 'ku-'** katika wakati uliopita (**-li-**):\n     - *-la* (eat) -> *ni-li-**ku**-la* -> **nilikula** (I ate)\n     - *-nywa* (drink) -> *a-li-**ku**-nywa* -> **alikunywa** (he drank)\n     - *-ja* (come) -> *wa-li-**ku**-ja* -> **walikuja** (they came)\n     - *-enda* (go) -> *tu-li-**kwe**-nda* -> **tulikwenda** (we went)\n     - *-fa* (die) -> *a-li-**ku**-fa* -> **alikufa** (he died)\n     - *-wa* (be) -> *wa-li-**ku**-wa* -> **walikuwa** (they were)\n\n2. **Mifano Katika Sentensi Kamili**:\n   - *Mimi nilikula wali jana.* (I ate rice yesterday.)\n   - *Wageni walikuja mapema.* (Guests came early.)\n   - *Sisi tulikwenda shambani.* (We went to the farm.)",
      "examples": [
        {
          "target": "Mgeni wetu alikula wali wa biriani na alikunywa juisi baridi ya embe.",
          "reading": "Mge-ni we-tu a-li-ku-la wa-li wa bi-ri-a-ni na a-li-ku-nywa ju-i-si ba-ri-di ya e-mbe. [mˈɡɛni ˈwɛtu ɑliˈkulɑ ˈwɑli wɑ biriˈɑni nɑ ɑliˈkuɲwɑ ʤuˈisi bɑˈridi jɑ ˈɛmbɛ] (M-GAY-nee WAY-too ah-lee-KOO-lah WAH-lee wah bee-ree-AH-nee nah ah-lee-KOO-nywah joo-EE-see bah-REE-dee yah AYM-bay)",
          "translation": "Our guest ate [past monosyllabic -la: alikula] biryani rice and drank [past monosyllabic -nywa: alikunywa] cold mango juice."
        },
        {
          "target": "Watalii wengi walikuja nchini mwetu na walikwenda kutazama mlima Kilimanjaro.",
          "reading": "Wa-ta-li-i we-ngi wa-li-ku-ja nchi-ni mwe-tu na wa-li-kwe-nda ku-ta-za-ma mli-ma Ki-li-ma-nja-ro. [wɑtɑˈliː ˈwɛŋɡi wɑliˈkuʤɑ ˈntʃini ˈmwɛtu nɑ wɑliˈkwɛndɑ kutɑˈzɑmɑ ˈmlimɑ kilimɑˈnʤɑrɔ] (wah-tah-LEE-ee WAYN-gee wah-lee-KOO-jah N-CHEE-nee MWAY-too nah wah-lee-KWAYN-dah koo-tah-ZAH-mah M-LEE-mah kee-lee-mahn-JAH-roh)",
          "translation": "Many tourists came [past monosyllabic -ja: walikuja] to our country and went [past monosyllabic -enda: walikwenda] to see Mount Kilimanjaro."
        },
        {
          "target": "Jana mchana watoto walikula matunda matamu na walikunywa maziwa safi.",
          "reading": "Ja-na mcha-na wa-to-to wa-li-ku-la ma-tu-nda ma-ta-mu na wa-li-ku-nywa ma-zi-wa sa-fi. [ˈʤɑnɑ mˈtʃɑnɑ wɑˈtɔtɔ wɑliˈkulɑ mɑˈtundɑ mɑˈtɑmu nɑ wɑliˈkuɲwɑ mɑˈziwɑ ˈsɑfi] (JAH-nah M-CHAH-nah wah-TOH-toh wah-lee-KOO-lah mah-TOON-dah mah-TAH-moo nah wah-lee-KOO-nywah mah-ZEE-wah SAH-fee)",
          "translation": "Yesterday afternoon the children ate [past monosyllabic: walikula] sweet fruits and drank [past monosyllabic: walikunywa] fresh milk."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Silabi Moja na -LI-: 'Ku-' haitoki: nilikula, alikunywa, walikuja, tulikwenda!"
      ],
      "culturalNotes": [
        "Mlima Kilimanjaro (ulio nchini Tanzania) ndio mlima mrefu zaidi barani Afrika na kivutio kikubwa cha utalii duniani kote."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Chagua kitenzi sahihi cha wakati uliopita kinachomaanisha \"Sisi tulikula chakula jana\":",
          "options": [
            "tulikula (We ate - Correct retention of 'ku-' in past tense for monosyllabic stem -la)",
            "tulila (Kosa la kuangusha kiambishi 'ku-')",
            "tulilia (Kitenzi kingine: kulia / to weep/cry)",
            "tulilala (Kitenzi kingine: kulala / to sleep)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «-la» kikiwa katika wakati uliopita huhifadhi «ku-», hivyo husemwa «tulikula»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia vitenzi vya silabi moja katika wakati uliopita kwa usahihi kabisa?",
          "options": [
            "Wageni walikuja asubuhi na walikunywa kahawa moto. (Guests came in the morning and drank hot coffee - Accurate past monosyllabic usage)",
            "Wageni walija asubuhi na walinywa kahawa moto (Kosa la kuondoa kiambishi 'ku-')",
            "Wageni walikula kahawa moto (Matumizi yasiyo sahihi ya kula badala ya kunywa)",
            "Wageni watakuja kesho asubuhi (Wakati ujao badala ya wakati uliopita)"
          ],
          "answerIndex": 0,
          "explanation": "Muundo sanifu wa vitenzi vya silabi moja katika wakati uliopita ni «walikuja» na «walikunywa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi kuhusu vitenzi vya silabi moja katika wakati uliopita (-li-):",
          "options": [
            "Vitenzi vyenye shina la silabi moja kama 'kula', 'kunywa', na 'kuja' huhifadhi kiambishi 'ku-' katika wakati uliopita (nilikula, alikunywa, walikuja). (Monosyllabic verbs retain 'ku-' in simple past tense.)",
            "Vitenzi vyote vya Kiswahili hufuta herufi zake za mwisho katika wakati uliopita.",
            "Kiambishi 'ku-' hutumika tu katika wakati ujao na hakipatikani kamwe katika wakati uliopita.",
            "Vitenzi vya silabi moja havina wakati uliopita katika lugha ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Vitenzi vyenye shina la silabi moja kama 'kula', 'kunywa', na 'kuja' huhifadhi kiambishi 'ku-' katika wakati uliopita (nilikula, alikunywa, walikuja).» ndiyo kanuni kuu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u4-l3": {
    "id": "sw-u4-l3",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 3,
    "title": "Viashiria vya Nyakati Zilizopita na Masimulizi (Past Time Adverbials & Storytelling)",
    "level": "A1",
    "objective": "Kutumia vielezi vya wakati uliopita (jana, juzi, zamani, mwaka jana, wiki iliyopita) na kujenga masimulizi ya hadithi na matukio ya kihistoria kwa mtiririko wa kimantiki.",
    "presentation": {
      "explanation": "Vielezi vya Wakati Uliopita na Masimulizi (Past Time Adverbials & Narrative Flow):\n\n1. **Msamiati wa Vielezi vya Wakati Uliopita (Past Time Markers)**:\n   - **jana** (yesterday): *Jana nilisoma kitabu.*\n   - **juzi** (day before yesterday): *Juzi tulikwenda mjini.*\n   - **juzi juzi** (recently / few days ago): *Walifika juzi juzi.*\n   - **zamani / kale** (long ago / in the past): *Hapo zamani za kale...*\n   - **wiki iliyopita** (last week): *Wiki iliyopita tulianza mtihani.*\n   - **mwezi uliopita** (last month): *Mwezi uliopita alinunua gari.*\n   - **mwaka jana** (last year): *Mwaka jana tulitembelea Zanzibar.*\n\n2. **Kujenga Masimulizi ya Matukio (Narrative Sequencing)**:\n   - *Kwanza* (First) -> *Halafu / Kisha* (Then / Afterward) -> *Mwishowe* (Finally):\n     - *Kwanza tulifika kituoni, halafu tulipanda basi, na mwishowe tulifika salama nyumbani.*",
      "examples": [
        {
          "target": "Juzi jioni tulikwenda ufukweni mwa bahari na jana tulitembelea soko kuu la samaki.",
          "reading": "Ju-zi ji-o-ni tu-li-kwe-nda u-fu-kwe-ni mwa ba-ha-ri na ja-na tu-li-te-mbe-le-a so-ko ku-u la sa-ma-ki. [ˈʤuzi ʤiˈɔni tulikwɛˈndɑ ufuˈkwɛni mwɑ bɑˈhɑri nɑ ˈʤɑnɑ tulitɛmbɛˈlɛɑ ˈsɔkɔ ˈkuː lɑ sɑˈmɑki] (JOO-zee jee-OH-nee too-lee-KWAYN-dah oo-foo-KWAY-nee mwah bah-HAH-ree nah JAH-nah too-lee-tahm-bay-LAY-ah soh-KOH KOO lah sah-MAH-kee)",
          "translation": "The day before yesterday evening we went [past adverbial: juzi jioni] to the sea beach and yesterday we visited [past adverbial: jana] the main fish market."
        },
        {
          "target": "Mwaka jana wakulima walivuna mahindi mengi sana na waliuza mazao yao kwa bei nzuri.",
          "reading": "Mwa-ka ja-na wa-ku-li-ma wa-li-vu-na ma-hi-ndi me-ngi sa-na na wa-li-u-za ma-za-o ya-o kwa be-i nzu-ri. [ˈmwɑkɑ ˈʤɑnɑ wɑkuˈlimɑ wɑliˈvunɑ mɑˈhindi ˈmɛŋɡi ˈsɑnɑ nɑ wɑliˈuzɑ mɑˈzɑɔ ˈjɑɔ kwɑ ˈbɛi ˈnzuri] (MWAH-kah JAH-nah wah-koo-LEE-mah wah-lee-VOO-nah mah-HEEN-dee MAYN-gee SAH-nah nah wah-lee-OO-zah mah-ZAH-oh YAH-oh kwah BAY-ee N-ZOO-ree)",
          "translation": "Last year [past adverbial: mwaka jana] farmers harvested a lot of corn and sold their crops at a good price."
        },
        {
          "target": "Hapo zamani wazee wetu walisimulia hadithi nzuri za kusisimua chini ya mwezi mwangavu.",
          "reading": "Ha-po za-ma-ni wa-ze-e we-tu wa-li-si-mu-li-a ha-di-thi nzu-ri za ku-si-si-mu-a chi-ni ya mwe-zi mwa-nga-vu. [ˈhɑpɔ zɑˈmɑni wɑˈzɛː ˈwɛtu wɑlisimuˈliɑ hɑˈdiθi ˈnzuri zɑ kusisiˈmuɑ ˈtʃini jɑ ˈmwɛzi mwɑˈŋɡɑvu] (HAH-poh zah-MAH-nee wah-ZAY WAY-too wah-lee-see-moo-LEE-ah hah-DEE-thee N-ZOO-ree zah koo-see-see-MOO-ah CHEE-nee yah MWAY-zee mwahn-GAH-voo)",
          "translation": "Long ago [folklore past marker: hapo zamani] our elders narrated wonderful exciting stories under the bright moon."
        }
      ],
      "mnemonics": [
        "Vipindi vya Kale: Jana (1 day ago), Juzi (2 days ago), Wiki iliyopita (last week), Zamani (long ago)!"
      ],
      "culturalNotes": [
        "Hadithi simulizi za usiku chini ya mwezi ('Hadithi za Kunguru na Sungura Mjanja') zilikuwa njia kuu ya wazee kurithisha maadili, lugha na historia kwa vizazi vipya."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kielezi kipi cha wakati kinamaanisha siku iliyotangulia jana (Two days ago)?",
          "options": [
            "Juzi (Day before yesterday - Accurate past time adverbial)",
            "Kesho (Siku inayofuata leo)",
            "Sasa hivi (Wakati uliopo)",
            "Keshokutwa (Siku mbili zijazo)"
          ],
          "answerIndex": 0,
          "explanation": "Neno «Juzi» linamaanisha siku iliyotangulia jana (the day before yesterday)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina mtiririko sahihi wa masimulizi ya wakati uliopita?",
          "options": [
            "Kwanza tulifika kijijini, halafu tulisalimia wazee, na mwishowe tulikula chakula cha jioni. (First we arrived at the village, then greeted elders, and finally ate dinner - Perfect narrative sequencing)",
            "Kwanza tulifika kijijini, kesho tutasalimia wazee, na jana tulikula chakula (Mvurugiko mkubwa wa nyakati)",
            "Halafu tulifika kijijini kwanza kabla ya kuanza safari (Mlolongo usio na mantiki)",
            "Zamani tulikula chakula kesho asubuhi (Kutatanisha wakati uliopita na ujao)"
          ],
          "answerIndex": 0,
          "explanation": "«Kwanza tulifika kijijini, halafu tulisalimia wazee, na mwishowe tulikula chakula cha jioni.» inafuata mtiririko mzuri wa hadithi katika wakati uliopita."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha sahihi ya vielezi vinavyotumika pekee kuelezea wakati uliopita katika Kiswahili:",
          "options": [
            "Jana, juzi, mwaka jana, wiki iliyopita, hapo zamani. (Yesterday, day before yesterday, last year, last week, long ago.)",
            "Kesho, keshokutwa, mwaka ujao, sasa hivi.",
            "Daima, mara kwa mara, kamwe, kila siku.",
            "Badae, usiku wa kesho, mapema kesho kutwa."
          ],
          "answerIndex": 0,
          "explanation": "«Jana, juzi, mwaka jana, wiki iliyopita, hapo zamani.» ndivyo vielezi halisi vya wakati uliopita."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u4-l4": {
    "id": "sw-u4-l4",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 4,
    "title": "Upatanisho wa Ngeli Mbalimbali katika Wakati Uliopita (Noun Class Concord with Past Tense -li-)",
    "level": "A1",
    "objective": "Kutambua upatanisho wa kisarufi wa ngeli nyingine (KI-VI, M-MI, JI-MA, N-N) katika wakati uliopita (-li-) na jinsi viambishi ngeli vinavyoungana na kitenzi.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli Tofauti katika Wakati Uliopita (Concord across Noun Classes with -li-):\n\n1. **Ngeli ya KI-VI (Classes 7/8)**:\n   - Umoja (**ki-**): *Kiti **ki**livunjika.* (The chair broke.)\n   - Wingi (**vi-**): *Viti **vi**livunjika.* (The chairs broke.)\n   - *Chakula **ki**liiva.* (Food got cooked.) / *Vyakula **vi**liiva.*\n\n2. **Ngeli ya M-MI (Classes 3/4)**:\n   - Umoja (**u-**): *Mti **u**lianguka.* (The tree fell.)\n   - Wingi (**i-**): *Miti **i**lianguka.* (Trees fell.)\n   - *Mto **u**lifurika.* (The river flooded.) / *Mito **i**lifurika.*\n\n3. **Ngeli ya JI-MA (Classes 5/6)**:\n   - Umoja (**li-**): *Gari **li**lifika.* (The car arrived.)\n   - Wingi (**ya-**): *Magari **ya**lifika.* (Cars arrived.)\n   - *Neno **li**lisemwa.* / *Maneno **ya**lisemwa.*\n\n4. **Ngeli ya N-N (Classes 9/10)**:\n   - Umoja (**i-**): *Mvua **i**linyesha.* (Rain fell.)\n   - Wingi (**zi-**): *Nyumba **zi**lijengwa.* (Houses were built.)\n   - *Ndege **i**litua.* / *Ndege **zi**litua.*",
      "examples": [
        {
          "target": "Mvua kubwa ilinyesha usiku kucha na mito yote ilifurika maji mengi.",
          "reading": "Mvu-a ku-bwa i-li-nye-sha u-si-ku ku-cha na mi-to yo-te i-li-fu-ri-ka ma-ji me-ngi. [ˈmvuɑ ˈkubwɑ ilinˈjɛʃɑ uˈsiku ˈkutʃɑ nɑ ˈmitɔ ˈjɔtɛ ilifuˈrikɑ ˈmɑʤi ˈmɛŋɡi] (MVOO-ah KOO-bwah ee-lee-NYAY-shah oo-SEE-koo KOO-chah nah MEE-toh YOH-tay ee-lee-foo-REE-kah MAH-jee MAYN-gee)",
          "translation": "Heavy rain fell [class 9 N-N singular: ilinyesha] all night and all rivers flooded [class 4 M-MI plural: ilifurika] with plenty of water."
        },
        {
          "target": "Gari la abiria lilifika stendi salama na magari mengine yalisimama kando ya barabara.",
          "reading": "Ga-ri la a-bi-ri-a li-li-fi-ka ste-ndi sa-la-ma na ma-ga-ri me-ngi-ne ya-li-si-ma-ma ka-ndo ya ba-ra-ba-ra. [ˈɡɑri lɑ ɑbiˈriɑ liliˈfikɑ ˈstɛndi sɑˈlɑmɑ nɑ mɑˈɡɑri mɛˈŋɡinɛ jɑlisiˈmɑmɑ ˈkɑndɔ jɑ bɑrɑˈbɑrɑ] (GAH-ree lah ah-bee-REE-ah lee-lee-FEE-kah STAYN-dee sah-LAH-mah nah mah-GAH-ree mayn-GEE-nay yah-lee-see-MAH-mah KAHN-doh yah bah-rah-BAH-rah)",
          "translation": "The passenger vehicle arrived [class 5 JI-MA singular: lilifika] at the stand safely and other cars stopped [class 6 JI-MA plural: yalisimama] beside the road."
        },
        {
          "target": "Miti mikubwa ilianguka msituni baada ya upepo mkali kuvuma jana usiku.",
          "reading": "Mi-ti mi-kbu-wa i-li-a-ngu-ka msi-tu-ni ba-a-da ya u-pe-po mka-li ku-vu-ma ja-na u-si-ku. [ˈmiti miˈkubwɑ iliɑŋˈɡukɑ msiˈtuni bɑˈɑdɑ jɑ uˈpɛpɔ mˈkɑli kuˈvumɑ ˈʤɑnɑ uˈsiku] (MEE-tee mee-KOO-bwah ee-lee-ahn-GOO-kah m-see-TOO-nee bah-AH-dah yah oo-PAY-poh M-KAH-lee koo-VOO-mah JAH-nah oo-SEE-koo)",
          "translation": "Big trees fell [class 4 M-MI plural: ilianguka] in the forest after a fierce wind blew yesterday night."
        }
      ],
      "mnemonics": [
        "Upatanisho na -LI-: KI->kilifika, VI->vilifika, M/MI->ulifika/ilifika, JI/MA->lilifika/yalifika, N/N->ilifika/zilifika!"
      ],
      "culturalNotes": [
        "Mvua za masika katika ukanda wa Afrika Mashariki huleta rutuba na baraka za kilimo kwa jamii zote za wakulima."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina upatanisho sahihi wa wakati uliopita kwa nomino ya Ngeli ya 5 (Gari)?",
          "options": [
            "Gari jipya lilinunuliwa mjini jana. (The new car was bought in town yesterday - Correct Class 5 past prefix 'li-li-')",
            "Gari jipya kilinunuliwa mjini jana (Kosa la kutumia kiambishi cha KI-VI)",
            "Gari jipya yalinunuliwa mjini jana (Kosa la kutumia wingi kwa gari moja)",
            "Gari jipya zilinunuliwa mjini jana (Kosa la kiambishi cha N-N wingi)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Gari» (umoja katika Ngeli ya JI-MA) huchukua kiambishi cha kitenzi «li-», hivyo katika wakati uliopita huwa «lilinunuliwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia miti mingi iliyoanguka (Ngeli ya 4 M-MI wingi), kitenzi sahihi cha wakati uliopita ni kipi?",
          "options": [
            "Miti mikubwa ilianguka barabarani. (Big trees fell on the road - Correct Class 4 prefix 'i-li-')",
            "Miti mikubwa ulianguka barabarani (Kosa la kutumia umoja 'u-')",
            "Miti mikubwa yalianguka barabarani (Kosa la kuchanganya na JI-MA)",
            "Miti mikubwa walianguka barabarani (Kosa la kuchukulia miti kama watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi «Miti» (Ngeli ya M-MI) huchukua kiambishi cha kitenzi «i-», hivyo huwa «ilianguka»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sanifu na kamilifu wa wakati uliopita katika ngeli mbalimbali:",
          "options": [
            "Chakula kitamu kiliiva jikoni, gari zuri lilifika langoni, na nyumba mpya zilijengwa haraka. (Delicious food cooked [ki-], good car arrived [li-], and new houses were built [zi-].)",
            "Chakula kitamu lilifika jikoni na magari yote kilinunuliwa.",
            "Miti yote zilianguka wakati gari jipya walifika nyumbani.",
            "Nyumba zote ilijengwa na vitabu vyote lilifunguliwa jana."
          ],
          "answerIndex": 0,
          "explanation": "«Chakula kitamu kiliiva jikoni, gari zuri lilifika langoni, na nyumba mpya zilijengwa haraka.» inafuata upatanisho sahihi wa KI-VI (ki-), JI-MA (li-), na N-N (zi-)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u4-l5": {
    "id": "sw-u4-l5",
    "subject": "swahili",
    "unit": 4,
    "lessonNumber": 5,
    "title": "Muhtasari wa Wakati Uliopita (-li-) (Simple Past Tense Grand Synthesis)",
    "level": "A1",
    "objective": "Kuunganisha mada zote za Unit 4: mnyambuliko wa nafsi zote katika wakati uliopita (-li-), vitenzi vya silabi moja (kula, kunywa, kuja, kwenda), vielezi vya nyakati za kale (jana, juzi, zamani), na upatanisho wa ngeli zote katika sentensi changamano.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Wakati Uliopita (-li-) (Simple Past Tense Grand Synthesis):\n\n1. **Kanuni Kuu ya Wakati Uliopita**:\n   - Kiambishi **-li-** kinaashiria vitendo vyote vilivyotendeka na kukamilika hapo awali.\n   - Muundo: `Kiambishi Nafsi + -li- + Shina la Kitenzi` (*nilisoma, ulisoma, alisoma, tulisoma, mlisoma, walisoma*).\n\n2. **Vitenzi vya Silabi Moja**:\n   - Huhifadhi kiambishi 'ku-': *nilikula, alikunywa, walikuja, tulikwenda*.\n\n3. **Vielezi vya Wakati na Hadithi**:\n   - *Jana, juzi, mwaka jana, hapo zamani, wiki iliyopita*.\n\n4. **Upatanisho wa Ngeli Zote**:\n   - A-WA (*alisoma / walisoma*), KI-VI (*kilianguka / vilianguka*), M-MI (*ulianguka / ilianguka*), JI-MA (*lilifika / yalifika*), N-N (*ilinyesha / zilijengwa*).",
      "examples": [
        {
          "target": "Jana sisi tulijifunza Kiswahili, tulikula chakula kizuri, na wageni wetu walisafiri kurejea kwao.",
          "reading": "Ja-na si-si tu-li-ji-fu-nza Ki-swa-hi-li, tu-li-ku-la cha-ku-la ki-zu-ri, na wa-ge-ni we-tu wa-li-sa-fi-ri ku-re-je-a kwa-o. [ˈʤɑnɑ ˈsisi tuliʤiˈfunzɑ kiswɑˈhili tulikuˈlɑ tʃɑˈkulɑ kiˈzuri nɑ wɑˈɡɛni ˈwɛtu wɑlisɑˈfiri kurɛˈʤɛɑ ˈkwɑɔ] (JAH-nah SEE-see too-lee-jee-FOON-zah kee-swah-HEE-lee, too-lee-KOO-lah chah-KOO-lah kee-ZOO-ree, nah wah-GAY-nee WAY-too wah-lee-sah-FEE-ree koo-ray-JAY-ah KWAH-oh)",
          "translation": "Yesterday we learned Swahili [past 1st pl: tulijifunza], ate good food [past monosyllabic: tulikula], and our guests traveled [past 3rd pl: walisafiri] back home."
        },
        {
          "target": "Wanafunzi wote walifaulu mtihani wao mkubwa kwa sababu walisoma kwa bidii mwaka mzima.",
          "reading": "Wa-na-fu-nzi wo-te wa-li-fa-u-lu mti-ha-ni wa-o mku-bwa kwa sa-ba-bu wa-li-so-ma kwa bi-di-i mwa-ka mzi-ma. [wɑnɑˈfunzi ˈwɔtɛ wɑlifɑˈulu mtiˈhɑni ˈwɑɔ mˈkubwɑ kwɑ sɑˈbɑbu wɑliˈsɔmɑ kwɑ biˈdiː ˈmwɑkɑ ˈmzimɑ] (wah-nah-FOON-zee WOH-tay wah-lee-fah-OO-loo m-tee-HAH-nee WAH-oh M-KOO-bwah kwah sah-BAH-boo wah-lee-SOH-mah kwah bee-DEE MWAH-kah M-ZEE-mah)",
          "translation": "All students passed [past plural: walifaulu] their major exam because they studied [past plural: walisoma] diligently the entire year."
        },
        {
          "target": "Wakati uliopita wenye kiambishi '-li-' huwezesha kueleza matukio yote yaliyokamilika zamani au hivi karibuni kwa mtiririko fasaha.",
          "reading": "Wa-ka-ti u-li-o-pi-ta we-nye ki-a-mbi-shi '-li-' hu-we-ze-sha ku-e-le-za ma-tu-ki-o yo-te ya-li-yo-ka-mi-li-ka za-ma-ni au hi-vi ka-ri-bu-ni kwa mti-ri-ri-ko fa-sa-ha. [wɑˈkɑti uliɔˈpitɑ ˈwɛnjɛ kiɑmˈbiʃi -li- huwɛˈzɛʃɑ kuɛˈlɛzɑ mɑtuˈkiɔ ˈjɔtɛ jɑlijɔkɑmiˈlikɑ zɑˈmɑni ˈɑu ˈhivi kɑriˈbuni kwɑ mtiriˈrikɔ fɑˈsɑhɑ] (wah-KAH-tee oo-lee-oh-PEE-tah WAYN-yay kee-ahm-BEE-shee '-li-' hoo-way-ZAY-shah koo-ay-LAY-zah mah-too-KEE-oh YOH-tay yah-lee-yoh-kah-mee-LEE-kah zah-MAH-nee AH-oo HEE-vee kah-ree-BOO-nee kwah m-tee-ree-REE-koh fah-SAH-hah)",
          "translation": "The simple past tense with prefix '-li-' [past tense synthesis: wakati uliopita] facilitates articulating all completed historical or recent events with fluent cohesion."
        }
      ],
      "mnemonics": [
        "Muhtasari wa -LI-: Jana nilisoma, tulikula ugali, treni ilifika, na watu wote walifurahi!"
      ],
      "culturalNotes": [
        "Kuelewa wakati uliopita kunamfungulia mwanafunzi hazina kubwa ya fasihi simulizi, historia ya Waswahili, na utamaduni wa kale wa pwani ya Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa wakati uliopita (-li-) kwa vitenzi vya kawaida na vya silabi moja?",
          "options": [
            "Wanafunzi walisoma kwa bidii na jana walikula chakula cha mchana pamoja. (Students studied diligently and yesterday ate lunch together - Harmonious past tense synthesis)",
            "Wanafunzi wanasoma kwa bidii na kesho walikula chakula (Mchanganyiko wa wakati uliopo, ujao na uliopita)",
            "Wanafunzi walila chakula jana jioni (Kosa la kuangusha kiambishi 'ku-')",
            "Wanafunzi watasoma vitabu jana asubuhi (Kosa la kutumia wakati ujao kwa neno 'jana')"
          ],
          "answerIndex": 0,
          "explanation": "«Wanafunzi walisoma kwa bidii na jana walikula chakula cha mchana pamoja.» inatumia kiambishi «-li-» na kuhifadhi «ku-» kwa usahihi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 4, ni jambo gani la msingi kuhusu kiambishi '-li-' katika vitenzi vya Kiswahili?",
          "options": [
            "Kiambishi '-li-' kinaeleza tendo lililofanyika na kukamilika hapo awali, kikiungana na viambishi vyote vya ngeli. (Prefix -li- expresses completed past actions, agreeing with all noun class prefixes)",
            "Kiambishi '-li-' kinatumika tu kwa vitendo vitakavyofanyika kesho kutwa",
            "Kiambishi '-li-' hakiwezi kutumiwa na majina ya watu",
            "Hakuna tofauti ya kisarufi kati ya '-li-' na '-na-'"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi «-li-» kinaonyesha vitendo vilivyotendeka na kukamilika wakati uliopita."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 4 ya Wakati Uliopita katika Kiswahili:",
          "options": [
            "Jana jioni wageni wote walifika nyumbani kwetu, tulikunywa chai ya tangawizi pamoja, na wazee walitusimulia hadithi za kale za kusisimua. (Yesterday evening all guests arrived at our home, we drank ginger tea together, and elders narrated exciting ancient stories to us.)",
            "Jana jioni wageni wote atafika nyumbani na kesho tulikunywa chai.",
            "Wageni wote linakunywa chai wakati wazee watasoma hadithi jana.",
            "Wakati uliopita unakataza matumizi ya neno 'jana' na 'juzi'."
          ],
          "answerIndex": 0,
          "explanation": "«Jana jioni wageni wote walifika nyumbani kwetu, tulikunywa chai ya tangawizi pamoja, na wazee walitusimulia hadithi za kale za kusisimua.» inajumuisha mada zote za Unit 4 kwa ufasaha mkubwa."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u5-l1": {
    "id": "sw-u5-l1",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 1,
    "title": "Muundo wa Kitenzi katika Wakati Ujao (-ta-) (Verb Morphology of the Future Tense -ta-)",
    "level": "A1",
    "objective": "Kuelewa muundo wa kitenzi cha wakati ujao katika Kiswahili: Kiambishi Nafsi (SP) + Kiambishi cha Wakati Ujao (-ta-) + Shina la Kitenzi kwa nafsi zote sita (Mimi, Wewe, Yeye, Sisi, Ninyi, Wao).",
    "presentation": {
      "explanation": "Muundo wa Kitenzi katika Wakati Ujao (Simple Future Tense -ta- Morphology):\n\n1. **Kiambishi cha Wakati Ujao (-ta-)**:\n   - Matendo yatakayotendeka mbeleni (Simple Future Tense) huwakilishwa na kiambishi **-ta-**.\n\n2. **Mnyambuliko wa Nafsi Zote Sita (Conjugation Paradigm)**:\n   - *Mimi* (I): **ni-** + **ta-** + **soma** -> **nitasoma** (I will read / I will study)\n   - *Wewe* (You sg): **u-** + **ta-** + **soma** -> **utasoma** (You will read)\n   - *Yeye* (He/She): **a-** + **ta-** + **soma** -> **atasoma** (He/She will read)\n   - *Sisi* (We): **tu-** + **ta-** + **soma** -> **tutasoma** (We will read)\n   - *Ninyi* (You pl): **m-** + **ta-** + **soma** -> **mtasoma** (You all will read)\n   - *Wao* (They): **wa-** + **ta-** + **soma** -> **watasoma** (They will read)\n\n3. **Vitenzi vya Kawaida (Regular Verbs)**:\n   - *safiri* (travel) -> *nitasafiri* (I will travel)\n   - *jenga* (build) -> *watajenga* (they will build)\n   - *shinda* (win/succeed) -> *tutashinda* (we will win)\n   - *saidia* (help) -> *atasaidia* (he will help)",
      "examples": [
        {
          "target": "Kesho asubuhi nitasoma makala mpya na kaka yangu ataandika ripoti ya kazi.",
          "reading": "Ke-sho a-su-bu-hi ni-ta-so-ma ma-ka-la mpy-a na ka-ka ya-ngu a-ta-a-ndi-ka ri-po-ti ya ka-zi. [ˈkɛʃɔ ɑsuˈbuhi nitɑˈsɔmɑ mɑˈkɑlɑ ˈmpjɑ nɑ ˈkɑkɑ ˈjɑŋɡu ɑtɑɑnˈdikɑ riˈpɔti jɑ ˈkɑzi] (KAY-shoh ah-soo-BOO-hee nee-tah-SOH-mah mah-KAH-lah M-PYAH nah KAH-kah YAHN-goo ah-tah-ahn-DEE-kah ree-POH-tee yah KAH-zee)",
          "translation": "Tomorrow morning I will read [future 1st person: nitasoma] a new article and my brother will write [future 3rd person: ataandika] a work report."
        },
        {
          "target": "Wanafunzi wote watafanya mtihani wao na watashinda kwa alama za juu.",
          "reading": "Wa-na-fu-nzi wo-te wa-ta-fa-nya mti-ha-ni wa-o na wa-ta-shi-nda kwa a-la-ma za ju-u. [wɑnɑˈfunzi ˈwɔtɛ wɑtɑˈfɑɲɑ mtiˈhɑni ˈwɑɔ nɑ wɑtɑˈʃindɑ kwɑ ɑˈlɑmɑ zɑ ˈʤuː] (wah-nah-FOON-zee WOH-tay wah-tah-FAH-nyah m-tee-HAH-nee WAH-oh nah wah-tah-SHEEN-dah kwah ah-LAH-mah zah JOO-oo)",
          "translation": "All students will take [future 3rd plural: watafanya] their exam and will succeed [future 3rd plural: watashinda] with high marks."
        },
        {
          "target": "Sisi tutasafiri kwenda mji wa Dodoma wiki ijayo ili kuhudhuria mkutano.",
          "reading": "Si-si tu-ta-sa-fi-ri kwe-nda m-ji wa Do-do-ma wi-ki i-ja-yo i-li ku-hu-dhu-ri-a mku-ta-no. [ˈsisi tutɑsɑˈfiri ˈkwɛndɑ ˈmʤi wɑ dɔˈdɔmɑ ˈwiki iˈʤɑjɔ ˈili kuhuðuˈriɑ mkuˈtɑnɔ] (SEE-see too-tah-sah-FEE-ree KWAYN-dah M-jee wah doh-DOH-mah WEE-kee ee-JAH-yoh EE-lee koo-hoo-thoo-REE-ah m-koo-TAH-noh)",
          "translation": "We will travel [future 1st plural: tutasafiri] to the city of Dodoma next week in order to attend a conference."
        }
      ],
      "mnemonics": [
        "Wakati Ujao: Kiambishi cha Kesho ni -TA- (ni-TA-soma, u-TA-soma, a-TA-soma, tu-TA-soma, m-TA-soma, wa-TA-soma)!"
      ],
      "culturalNotes": [
        "Jiji la Dodoma ni makao makuu ya serikali ya Jamhuri ya Muungano wa Tanzania, likiwa katikati ya nchi na kitovu cha bunge la taifa."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayoelezea tendo litakalofanyika kesho na nafsi ya pili umoja (Wewe) ni ipi?",
          "options": [
            "Wewe utasoma kitabu hiki kesho asubuhi. (You will read this book tomorrow morning - Correct 2nd person singular future 'u-ta-soma')",
            "Wewe ulisoma kitabu hiki kesho asubuhi (Kosa la kutumia wakati uliopita kwa neno 'kesho')",
            "Wewe wanasoma kitabu hiki kesho (Kosa la upatanisho wa nafsi)",
            "Wewe titasoma kitabu hiki kesho (Kiambishi kisicho sahihi)"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi nafsi cha «Wewe» ni «u-» kikiungana na kiambishi cha wakati ujao «-ta-» kupata «utasoma»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapoelezea mpango wa wanafunzi (Wao) kusafiri wiki ijayo, sentensi ipi ni sanifu?",
          "options": [
            "Wanafunzi watasafiri kwenda mbugani wiki ijayo. (Students will travel to the park next week - Correct 3rd person plural future tense)",
            "Wanafunzi alisafiri kwenda mbugani wiki ijayo (Kosa la wakati na umoja)",
            "Wanafunzi ninatesafiri wiki ijayo (Kosa la muundo wa kitenzi)",
            "Wanafunzi walisafiri kesho asubuhi (Kutatanisha 'walisafiri' na 'kesho')"
          ],
          "answerIndex": 0,
          "explanation": "Kwa nafsi ya tatu wingi (Wao/Wanafunzi), kitenzi sahihi cha wakati ujao ni «watasafiri»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi inayofafanua muundo wa wakati ujao katika Kiswahili:",
          "options": [
            "Kitenzi cha wakati ujao kinatumia kiambishi cha wakati '-ta-' kati ya kiambishi nafsi na shina la kitenzi (mfano: ni-ta-soma). (Future tense verb uses tense marker -ta- between subject prefix and verb root.)",
            "Wakati ujao unatumia kiambishi '-li-' pekee.",
            "Wakati ujao hauwezi kutumika na vitenzi vinavyoanza na herufi 's'.",
            "Kiambishi cha wakati ujao huwekwa mwishoni kabisa mwa sentensi."
          ],
          "answerIndex": 0,
          "explanation": "«Kitenzi cha wakati ujao kinatumia kiambishi cha wakati '-ta-' kati ya kiambishi nafsi na shina la kitenzi (mfano: ni-ta-soma).» ndiyo kanuni ya sarufi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u5-l2": {
    "id": "sw-u5-l2",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 2,
    "title": "Vitenzi vya Silabi Moja katika Wakati Ujao (Monosyllabic Verbs in Future Tense: Kula, Kunywa, Kuja, Kwenda)",
    "level": "A1",
    "objective": "Kutambua na kutumia vitenzi vyenye shina la silabi moja (kula, kunywa, kuja, kwenda) katika wakati ujao (-ta-), ambavyo huhifadhi kiambishi 'ku-' kwa sababu za kifonolojia.",
    "presentation": {
      "explanation": "Vitenzi vya Silabi Moja katika Wakati Ujao (Monosyllabic Verbs with -ta-):\n\n1. **Kuhifadhi Kiambishi 'ku-' (Retention of 'ku-' in Future Tense)**:\n   - Vitenzi vyenye shina la silabi moja **huvumilia na kubakiza kiambishi 'ku-'** katika wakati ujao (**-ta-**):\n     - *-la* (eat) -> *ni-ta-**ku**-la* -> **nitakula** (I will eat)\n     - *-nywa* (drink) -> *a-ta-**ku**-nywa* -> **atakunywa** (he will drink)\n     - *-ja* (come) -> *wa-ta-**ku**-ja* -> **watakuja** (they will come)\n     - *-enda* (go) -> *tu-ta-**kwe**-nda* -> **tutakwenda** (we will go)\n     - *-fa* (die) -> *a-ta-**ku**-fa* -> **atakufa** (he will die)\n     - *-wa* (be/become) -> *i-ta-**ku**-wa* -> **itakuwa** (it will be)\n\n2. **Mifano ya Sentensi za Kila Siku**:\n   - *Mchana tutakula chakula kitamu.* (In the afternoon we will eat delicious food.)\n   - *Wageni watakuja kesho.* (Guests will come tomorrow.)",
      "examples": [
        {
          "target": "Mchana wa leo wageni watakula pilau ya kuku na watakunywa juisi baridi.",
          "reading": "Mcha-na wa le-o wa-ge-ni wa-ta-ku-la pi-la-u ya ku-ku na wa-ta-ku-nywa ju-i-si ba-ri-di. [mˈtʃɑnɑ wɑ ˈlɛɔ wɑˈɡɛni wɑtɑˈkulɑ piˈlɑu jɑ ˈkuku nɑ wɑtɑˈkuɲwɑ ʤuˈisi bɑˈridi] (M-CHAH-nah wah LAY-oh wah-GAY-nee wah-tah-KOO-lah pee-LAH-oo yah KOO-koo nah wah-tah-KOO-nywah joo-EE-see bah-REE-dee)",
          "translation": "This afternoon guests will eat [future monosyllabic -la: watakula] chicken pilau and will drink [future monosyllabic -nywa: watakunywa] cold juice."
        },
        {
          "target": "Mwalimu wetu atakuja darasani saa tatu asubuhi na atakwenda maktaba baadaye.",
          "reading": "Mwa-li-mu we-tu a-ta-ku-ja da-ra-sa-ni sa-a ta-tu a-su-bu-hi na a-ta-kwe-nda ma-kta-ba ba-a-da-ye. [mwɑˈlimu ˈwɛtu ɑtɑˈkuʤɑ dɑrɑˈsɑni ˈsɑː ˈtɑtu ɑsuˈbuhi nɑ ɑtɑˈkwɛndɑ mɑkˈtɑbɑ bɑɑˈdɑjɛ] (mwah-LEE-moo WAY-too ah-tah-KOO-jah dah-rah-SAH-nee SAH-ah TAH-too ah-soo-BOO-hee nah ah-tah-KWAYN-dah mahk-TAH-bah bah-ah-DAH-yay)",
          "translation": "Our teacher will come [future monosyllabic -ja: atakuja] to class at 9:00 AM and will go [future monosyllabic -enda: atakwenda] to the library afterward."
        },
        {
          "target": "Sisi tutakula chakula cha jioni pamoja na tutakunywa chai yenye viungo.",
          "reading": "Si-si tu-ta-ku-la cha-ku-la cha ji-o-ni pa-mo-ja na tu-ta-ku-nywa cha-i ye-nye viu-ngo. [ˈsisi tutɑˈkulɑ tʃɑˈkulɑ tʃɑ ʤiˈɔni pɑˈmɔʤɑ nɑ tutɑˈkuɲwɑ ˈtʃɑi ˈjɛnjɛ viˈuŋɡɔ] (SEE-see too-tah-KOO-lah chah-KOO-lah chah jee-OH-nee pah-MOH-jah nah too-tah-KOO-nywah CHAH-ee YAYN-yay vee-OON-goh)",
          "translation": "We will eat [future monosyllabic: tutakula] dinner together and will drink [future monosyllabic: tutakunywa] spiced tea."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Silabi Moja na -TA-: 'Ku-' inabaki: nitakula, atakunywa, watakuja, tutakwenda!"
      ],
      "culturalNotes": [
        "Pilau ya viungo vya Zanzibar (karafuu, mdalasini, iliki na bizari) ni chakula kikuu cha heshima katika sherehe na sikukuu za Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Chagua kitenzi sahihi cha wakati ujao kinachomaanisha \"Mimi nitakunywa maji safi\":",
          "options": [
            "nitakunywa (I will drink - Correct retention of 'ku-' in future tense for monosyllabic stem -nywa)",
            "nitanywa (Kosa la kuondoa kiambishi 'ku-')",
            "nitalikunywa (Mchanganyiko potofu wa viambishi viwili vya wakati)",
            "niliyakunywa (Wakati uliopita badala ya ujao)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «-nywa» ni cha silabi moja, hivyo huhifadhi «ku-» katika wakati ujao: «nitakunywa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia vitenzi vya silabi moja katika wakati ujao kwa usahihi wa kisarufi?",
          "options": [
            "Wageni watakuja kesho mchana na watakula chakula chetu kitamu. (Guests will come tomorrow afternoon and eat our delicious food - Flawless future monosyllabic usage)",
            "Wageni wataja kesho na watala chakula chetu (Kosa la kufuta 'ku-')",
            "Wageni walikuja kesho asubuhi (Kutatanisha 'walikuja' na 'kesho')",
            "Wageni wanakula chakula jana mchana (Mchanganyiko wa wakati uliopo na 'jana')"
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi sanifu vyenye kuhifadhi «ku-» katika wakati ujao ni «watakuja» na «watakula»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Kwanini vitenzi kama 'kula', 'kunywa', na 'kuja' huhifadhi kiambishi 'ku-' katika wakati ujao (-ta-)?",
          "options": [
            "Kwa sababu ni vitenzi vya silabi moja vinavyohitaji silabi ya ziada ili mkazo wa sauti utue kwenye silabi ya pili kutoka mwisho. (Because they are monosyllabic verbs requiring 'ku-' for penultimate syllable stress.)",
            "Kwa sababu herufi 'k' ni herufi ya bahati katika Kiswahili.",
            "Kwa sababu havina mashina ya vitenzi.",
            "Ni kosa la kimazungumzo lisilo na maelezo ya kisarufi."
          ],
          "answerIndex": 0,
          "explanation": "«Kwa sababu ni vitenzi vya silabi moja vinavyohitaji silabi ya ziada ili mkazo wa sauti utue kwenye silabi ya pili kutoka mwisho.» ndiyo kanuni kuu ya kifonolojia."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u5-l3": {
    "id": "sw-u5-l3",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 3,
    "title": "Viashiria vya Nyakati Zijazo na Mipango (Future Time Adverbials & Planning)",
    "level": "A1",
    "objective": "Kutumia vielezi vya wakati ujao (kesho, keshokutwa, wiki ijayo, mwezi ujao, baadaye) na kupanga mipango ya baadaye katika sentensi zilizopangwa vizuri.",
    "presentation": {
      "explanation": "Vielezi vya Wakati Ujao na Mipango ya Baadaye (Future Time Adverbials & Strategic Planning):\n\n1. **Msamiati wa Vielezi vya Wakati Ujao (Future Markers)**:\n   - **kesho** (tomorrow): *Kesho nitakwenda ofisini.*\n   - **keshokutwa** (day after tomorrow): *Keshokutwa tutamaliza kazi.*\n   - **mtondo** (three days from now / day after keshokutwa)\n   - **wiki ijayo** (next week): *Wiki ijayo tutaanza semina.*\n   - **mwezi ujao** (next month): *Mwezi ujao watasafiri.*\n   - **mwaka ujao / mwakani** (next year): *Mwaka ujao tutajenga nyumba.*\n   - **baadaye / bado kidogo** (later / in a little while): *Baadaye tutazungumza.*\n\n2. **Kueleza Mipango na Malengo (Expressing Plans)**:\n   - *Nina mpango wa...* (I have a plan to...)\n   - *Tunanuia kufanya...* (We intend to do...)\n   - *Tutaanza mapema ili tukamilishe kwa wakati.* (We will start early so we finish on time.)",
      "examples": [
        {
          "target": "Kesho kutwa tutaanza ujenzi wa kituo kipya cha afya katika kijiji chetu.",
          "reading": "Ke-sho ku-twa tu-ta-a-nza u-je-nzi wa ki-tu-o kpy-a cha a-fya ka-ti-ka ki-ji-ji che-tu. [ˈkɛʃɔ ˈkutwɑ tutɑˈɑnzɑ uˈʤɛnzi wɑ kiˈtuɔ ˈmpjɑ tʃɑ ˈɑfjɑ kɑˈtikɑ kiˈʤiʤi ˈtʃɛtu] (KAY-shoh KOO-twah too-tah-AHN-zah oo-JAYN-zee wah kee-TOO-oh M-PYAH chah AH-fyah kah-TEE-kah kee-jee-JEE CHAY-too)",
          "translation": "The day after tomorrow [future adverbial: keshokutwa] we will start construction of a new health center in our village."
        },
        {
          "target": "Mwezi ujao familia yetu itasafiri kwenda Zanzibar kwa mapumziko ya likizo.",
          "reading": "Mwe-zi u-ja-o fa-mi-li-a ye-tu i-ta-sa-fi-ri kwe-nda Za-nzi-bar kwa ma-pu-mzi-ko ya li-ki-zo. [ˈmwɛzi uˈʤɑɔ fɑmiˈliɑ ˈjɛtu itɑsɑˈfiri ˈkwɛndɑ zɑnziˈbɑr kwɑ mɑpumˈzikɔ jɑ liˈkizɔ] (MWAY-zee oo-JAH-oh fah-mee-LEE-ah YAY-too ee-tah-sah-FEE-ree KWAYN-dah zahn-zee-BAHR kwah mah-poom-ZEE-koh yah lee-KEE-zoh)",
          "translation": "Next month [future adverbial: mwezi ujao] our family will travel to Zanzibar for holiday relaxation."
        },
        {
          "target": "Baadaye jioni marafiki zangu watakuja nyumbani kwetu ili kujadili mipango ya biashara.",
          "reading": "Ba-a-da-ye ji-o-ni ma-ra-fi-ki za-ngu wa-ta-ku-ja nyu-mba-ni kwe-tu i-li ku-ja-di-li mi-pa-ngo ya bi-a-sha-ra. [bɑɑˈdɑjɛ ʤiˈɔni mɑrɑˈfiki ˈzɑŋɡu wɑtɑˈkuʤɑ ɲumbɑˈni ˈkwɛtu ˈili kuʤɑˈdili miˈpɑŋɡɔ jɑ biɑˈʃɑrɑ] (bah-ah-DAH-yay jee-OH-nee mah-rah-FEE-kee ZAHN-goo wah-tah-KOO-jah nyoom-bah-NEE KWAY-too EE-lee koo-jah-DEE-lee mee-PAHN-goh yah bee-ah-SHAH-rah)",
          "translation": "Later this evening [future adverbial: baadaye jioni] my friends will come to our house in order to discuss business plans."
        }
      ],
      "mnemonics": [
        "Vipindi vya Mbeleni: Kesho (tomorrow), Keshokutwa (day after tomorrow), Wiki ijayo (next week), Mwakani (next year)!"
      ],
      "culturalNotes": [
        "Kisiwa cha Unguja na Pemba (Zanzibar) kinajulikana kimataifa kama 'Visiwa vya Viungo' kutokana na kilimo chake kikubwa cha karafuu na vanila."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kielezi kipi cha wakati kinamaanisha siku inayofuata baada ya kesho (Day after tomorrow)?",
          "options": [
            "Keshokutwa (Day after tomorrow - Accurate future time marker)",
            "Jana (Siku iliyopita kabla ya leo)",
            "Juzi (Siku mbili zilizopita)",
            "Zamani (Wakati wa kale)"
          ],
          "answerIndex": 0,
          "explanation": "Neno «Keshokutwa» linamaanisha siku inayofuata baada ya kesho (the day after tomorrow)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaonyesha mpango madhubuti wa wakati ujao kwa mtiririko sahihi wa kisarufi?",
          "options": [
            "Mwezi ujao tutajenga darasa jipya na mwalimu mpya atawasili. (Next month we will build a new classroom and a new teacher will arrive - Consistent future plan)",
            "Mwezi ujao tulijenga darasa jipya jana asubuhi (Kosa kubwa la kuchanganya ujao na uliopita)",
            "Kesho asubuhi mwalimu alifika darasani mapema (Kutatanisha 'kesho' na 'alifika')",
            "Mwakani ninasoma darasa hili jana usiku (Mvurugiko wa nyakati)"
          ],
          "answerIndex": 0,
          "explanation": "«Mwezi ujao tutajenga darasa jipya na mwalimu mpya atawasili.» inaoanisha vielezi vya wakati ujao na vitenzi vya «-ta-» kwa usahihi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua vielezi vinavyotumika kueleza wakati ujao pekee katika lugha ya Kiswahili:",
          "options": [
            "Kesho, keshokutwa, wiki ijayo, mwezi ujao, mwakani, baadaye. (Tomorrow, day after tomorrow, next week, next month, next year, later.)",
            "Jana, juzi, juzi juzi, mwaka jana, zamani za kale.",
            "Sasa hivi, hivi punde, papo hapo, wakati huu.",
            "Zamani, kale, wakati ule wa wazee wa zamani."
          ],
          "answerIndex": 0,
          "explanation": "«Kesho, keshokutwa, wiki ijayo, mwezi ujao, mwakani, baadaye.» ndivyo vielezi halisi vya wakati ujao."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u5-l4": {
    "id": "sw-u5-l4",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 4,
    "title": "Upatanisho wa Ngeli Mbalimbali katika Wakati Ujao (Noun Class Concord with Future Tense -ta-)",
    "level": "A1",
    "objective": "Kutambua upatanisho wa kisarufi wa ngeli nyingine (KI-VI, M-MI, JI-MA, N-N) katika wakati ujao (-ta-) na jinsi viambishi ngeli vinavyoungana na kitenzi.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli Tofauti katika Wakati Ujao (Concord across Noun Classes with -ta-):\n\n1. **Ngeli ya KI-VI (Classes 7/8)**:\n   - Umoja (**ki-**): *Kiti **ki**tatengenezwa.* (The chair will be repaired.)\n   - Wingi (**vi-**): *Viti **vi**tatengenezwa.* (The chairs will be repaired.)\n   - *Kitabu **ki**tachapishwa.* / *Vitabu **vi**tachapishwa.*\n\n2. **Ngeli ya M-MI (Classes 3/4)**:\n   - Umoja (**u-**): *Mti **u**tamea.* (The tree will sprout.)\n   - Wingi (**i-**): *Miti **i**tamea.* (Trees will sprout.)\n   - *Mto **u**tapungua.* / *Mito **i**tapungua.*\n\n3. **Ngeli ya JI-MA (Classes 5/6)**:\n   - Umoja (**li-**): *Gari **li**tafika.* (The car will arrive.)\n   - Wingi (**ya-**): *Magari **ya**tafika.* (Cars will arrive.)\n   - *Tunda **li**taiva.* / *Matunda **ya**taiva.*\n\n4. **Ngeli ya N-N (Classes 9/10)**:\n   - Umoja (**i-**): *Ndege **i**tatua.* (The airplane will land.)\n   - Wingi (**zi-**): *Ndege **zi**tatua.* (Airplanes will land.)\n   - *Nyumba **i**tajengwa.* / *Nyumba **zi**tajengwa.*",
      "examples": [
        {
          "target": "Gari jipya litawasili bandarini kesho na treni ya umeme itaanza safari zake.",
          "reading": "Ga-ri ji-pya li-ta-wa-si-li ba-nda-ri-ni ke-sho na tre-ni ya u-me-me i-ta-a-nza sa-fa-ri za-ke. [ˈɡɑri ˈʤipjɑ litɑwɑˈsili bɑndɑˈrini ˈkɛʃɔ nɑ ˈtrɛni jɑ uˈmɛmɛ itɑˈɑnzɑ sɑˈfɑri ˈzɑkɛ] (GAH-ree JEE-pyah lee-tah-wah-SEE-lee bahn-dah-REE-nee KAY-shoh nah TRAY-nee yah oo-MAY-may ee-tah-AHN-zah sah-FAH-ree ZAH-kay)",
          "translation": "The new car will arrive [class 5 JI-MA: litawasili] at the port tomorrow and the electric train will begin [class 9 N-N: itaanza] its trips."
        },
        {
          "target": "Miti ya matunda itazaa matunda mengi msimu ujao na wakulima watafurahi.",
          "reading": "Mi-ti ya ma-tu-nda i-ta-za-a ma-tu-nda me-ngi msi-mu u-ja-o na wa-ku-li-ma wa-ta-fu-ra-hi. [ˈmiti jɑ mɑˈtundɑ itɑˈzɑː mɑˈtundɑ ˈmɛŋɡi msiˈmu uˈʤɑɔ nɑ wɑkuˈlimɑ wɑtɑfuˈrɑhi] (MEE-tee yah mah-TOON-dah ee-tah-ZAH-ah mah-TOON-dah MAYN-gee msee-MOO oo-JAH-oh nah wah-koo-LEE-mah wah-tah-foo-RAH-hee)",
          "translation": "Fruit trees will produce [class 4 M-MI: itazaa] plenty of fruits next season and farmers will rejoice [class 2 A-WA: watafurahi]."
        },
        {
          "target": "Nyumba zote zitapambwa kwa taa za rangi wakati wa sikukuu ya mwaka mpya.",
          "reading": "Nyu-mba zo-te zi-ta-pa-mbwa kwa ta-a za ra-ngi wa-ka-ti wa si-ku-ku-u ya mwa-ka mpy-a. [ˈɲumbɑ ˈzɔtɛ zitɑˈpɑmbwɑ kwɑ ˈtɑː zɑ ˈrɑŋɡi wɑˈkɑti wɑ sikukuˈu jɑ ˈmwɑkɑ ˈmpjɑ] (NYOOM-bah ZOH-tay zee-tah-PAHM-bwah kwah TAH-ah zah RAHN-gee wah-KAH-tee wah see-koo-KOO-oo yah MWAH-kah M-PYAH)",
          "translation": "All houses will be decorated [class 10 N-N plural: zitapambwa] with colored lights during the new year holiday."
        }
      ],
      "mnemonics": [
        "Upatanisho na -TA-: KI->kitafika, VI->vitafika, M/MI->utafika/itafika, JI/MA->litafika/yatafika, N/N->itafika/zitafika!"
      ],
      "culturalNotes": [
        "Reli ya kisasa ya mwendo kasi (SGR - Standard Gauge Railway) nchini Tanzania na Kenya imebadilisha usafiri wa Afrika Mashariki na kuunganisha miji mikuu kwa kasi ya juu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina upatanisho sahihi wa wakati ujao kwa nomino ya Ngeli ya 7 (Kitabu)?",
          "options": [
            "Kitabu kizuri kitachapishwa wiki ijayo. (The good book will be published next week - Correct Class 7 future prefix 'ki-ta-')",
            "Kitabu kizuri litachapishwa wiki ijayo (Kosa la kutumia kiambishi cha JI-MA)",
            "Kitabu kizuri yatachapishwa wiki ijayo (Kosa la kutumia wingi wa JI-MA)",
            "Kitabu kizuri watachapishwa wiki ijayo (Kosa la kutumia kiambishi cha watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Kitabu» (umoja katika Ngeli ya KI-VI) huchukua kiambishi cha kitenzi «ki-», hivyo katika wakati ujao huwa «kitachapishwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia magari mengi yatakayofika (Ngeli ya 6 JI-MA wingi), kitenzi sahihi cha wakati ujao ni kipi?",
          "options": [
            "Magari mengi yatawasili mjini kesho. (Many cars will arrive in town tomorrow - Correct Class 6 future prefix 'ya-ta-')",
            "Magari mengi litawasili mjini kesho (Kosa la kutumia umoja 'li-')",
            "Magari mengi zitawasili mjini kesho (Kosa la kutumia kiambishi cha N-N)",
            "Magari mengi watawasili mjini kesho (Kosa la kuchukulia magari kama watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi «Magari» (Ngeli ya JI-MA) huchukua kiambishi cha kitenzi «ya-», hivyo katika wakati ujao huwa «yatawasili»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi na sanifu wa wakati ujao katika ngeli mbalimbali:",
          "options": [
            "Chakula kitamu kitaandaliwa mezani, gari jipya litafika, na nyumba mpya zitajengwa mjini. (Delicious food will be prepared [ki-], new car will arrive [li-], and new houses will be built [zi-].)",
            "Chakula kitamu litafika mezani na magari yote kitanunuliwa.",
            "Miti yote zitaanguka wakati gari jipya watafika nyumbani.",
            "Nyumba zote itajengwa na vitabu vyote litafunguliwa kesho."
          ],
          "answerIndex": 0,
          "explanation": "«Chakula kitamu kitaandaliwa mezani, gari jipya litafika, na nyumba mpya zitajengwa mjini.» inafuata upatanisho kamili wa ngeli za KI-VI (ki-), JI-MA (li-), na N-N (zi-) katika wakati ujao."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u5-l5": {
    "id": "sw-u5-l5",
    "subject": "swahili",
    "unit": 5,
    "lessonNumber": 5,
    "title": "Muhtasari wa Wakati Ujao (-ta-) (Simple Future Tense Grand Synthesis)",
    "level": "A1",
    "objective": "Kuunganisha mada zote za Unit 5: mnyambuliko wa nafsi zote katika wakati ujao (-ta-), vitenzi vya silabi moja (kula, kunywa, kuja, kwenda), vielezi vya siku zijazo (kesho, keshokutwa, mwezi ujao), na upatanisho wa ngeli zote katika sentensi changamano.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Wakati Ujao (-ta-) (Simple Future Tense Grand Synthesis):\n\n1. **Kanuni Kuu ya Wakati Ujao**:\n   - Kiambishi **-ta-** kinaashiria vitendo vyote vitakavyotendeka mbeleni.\n   - Muundo: `Kiambishi Nafsi + -ta- + Shina la Kitenzi` (*nitasoma, utasoma, atasoma, tutasoma, mtasoma, watasoma*).\n\n2. **Vitenzi vya Silabi Moja**:\n   - Huhifadhi kiambishi 'ku-': *nitakula, atakunywa, watakuja, tutakwenda*.\n\n3. **Vielezi vya Siku Zijazo**:\n   - *Kesho, keshokutwa, wiki ijayo, mwezi ujao, mwakani, baadaye*.\n\n4. **Upatanisho wa Ngeli Zote**:\n   - A-WA (*atasoma / watasoma*), KI-VI (*kitajengwa / vitajengwa*), M-MI (*utamea / itamea*), JI-MA (*litafika / yatafika*), N-N (*itakamilika / zitakamilika*).",
      "examples": [
        {
          "target": "Kesho sisi tutajifunza mada mpya ya Kiswahili, tutakula matunda, na tutapanga safari yetu.",
          "reading": "Ke-sho si-si tu-ta-ji-fu-nza ma-da mpy-a ya Ki-swa-hi-li, tu-ta-ku-la ma-tu-nda, na tu-ta-pa-nga sa-fa-ri ye-tu. [ˈkɛʃɔ ˈsisi tutɑʤiˈfunzɑ ˈmɑdɑ ˈmpjɑ jɑ kiswɑˈhili tutɑˈkulɑ mɑˈtundɑ nɑ tutɑˈpɑŋɡɑ sɑˈfɑri ˈjɛtu] (KAY-shoh SEE-see too-tah-jee-FOON-zah MAH-dah M-PYAH yah kee-swah-HEE-lee, too-tah-KOO-lah mah-TOON-dah, nah too-tah-PAHN-gah sah-FAH-ree YAY-too)",
          "translation": "Tomorrow we will learn a new Swahili topic [future 1st pl: tutajifunza], will eat fruits [future monosyllabic: tutakula], and will plan our journey [future: tutapanga]."
        },
        {
          "target": "Wanafunzi wote watamaliza masomo yao kwa mafanikio na watachangia maendeleo ya taifa.",
          "reading": "Wa-na-fu-nzi wo-te wa-ta-ma-li-za ma-so-mo ya-o kwa ma-fa-ni-ki-o na wa-ta-cha-ngi-a ma-e-nde-le-o ya ta-i-fa. [wɑnɑˈfunzi ˈwɔtɛ wɑtɑmɑˈlizɑ mɑˈsɔmɔ ˈjɑɔ kwɑ mɑfɑniˈkiɔ nɑ wɑtɑtʃɑˈŋɡiɑ mɑɛndɛˈlɛɔ jɑ tɑˈifɑ] (wah-nah-FOON-zee WOH-tay wah-tah-mah-LEE-zah mah-SOH-moh YAH-oh kwah mah-fah-nee-KEE-oh nah wah-tah-chahn-GEE-ah mah-ayn-day-LAY-oh yah tah-EE-fah)",
          "translation": "All students will complete [future 3rd pl: watamaliza] their studies successfully and will contribute [future 3rd pl: watachangia] to national development."
        },
        {
          "target": "Wakati ujao wenye kiambishi '-ta-' unaweka matumaini na mikakati ya maisha katika lugha ya Kiswahili kwa mtazamo chanya.",
          "reading": "Wa-ka-ti u-ja-o we-nye ki-a-mbi-shi '-ta-' u-na-we-ka ma-tu-ma-i-ni na mi-ka-ka-ti ya ma-i-sha ka-ti-ka lu-gha ya Ki-swa-hi-li kwa mta-za-mo cha-nya. [wɑˈkɑti uˈʤɑɔ ˈwɛnjɛ kiɑmˈbiʃi -tɑ- unɑˈwɛkɑ mɑtumɑˈini nɑ mikɑˈkɑti jɑ mɑˈiʃɑ kɑˈtikɑ ˈluɣɑ jɑ kiswɑˈhili kwɑ mtɑˈzɑmɔ ˈtʃɑɲɑ] (wah-KAH-tee oo-JAH-oh WAYN-yay kee-ahm-BEE-shee '-ta-' oo-nah-WAY-kah mah-too-mah-EE-nee nah mee-kah-KAH-tee yah mah-EE-shah kah-TEE-kah LOO-ghah yah kee-swah-HEE-lee kwah m-tah-ZAH-moh CHAH-nyah)",
          "translation": "The simple future tense with prefix '-ta-' [future tense synthesis: wakati ujao] articulates hopes and life strategies in the Swahili language with a positive outlook."
        }
      ],
      "mnemonics": [
        "Muhtasari wa -TA-: Kesho nitasoma, tutakula pilau, treni itafika, na maisha yatasonga mbele!"
      ],
      "culturalNotes": [
        "Kuelewa wakati ujao kunamjengea mwanafunzi uwezo wa kupanga shughuli za kibiashara, usafiri, na maendeleo katika ukanda mzima wa Afrika Mashariki na Kati."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa wakati ujao (-ta-) kwa vitenzi vya kawaida na vitenzi vya silabi moja?",
          "options": [
            "Wanafunzi watasoma kwa bidii na kesho watakula chakula cha mchana pamoja. (Students will study diligently and tomorrow eat lunch together - Harmonious future tense synthesis)",
            "Wanafunzi walisoma kwa bidii na kesho watala chakula (Kosa la kuangusha kiambishi 'ku-' na kuchanganya wakati)",
            "Wanafunzi watasoma jana asubuhi (Kutatanisha wakati ujao na neno 'jana')",
            "Vitabu vyote watasoma wanafunzi wote kesho (Mpangilio usiofaa)"
          ],
          "answerIndex": 0,
          "explanation": "«Wanafunzi watasoma kwa bidii na kesho watakula chakula cha mchana pamoja.» inatumia kitenzi cha kawaida «watasoma» na kitenzi cha silabi moja «watakula» kwa usahihi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 5, ni jambo gani la msingi kuhusu kiambishi '-ta-' katika vitenzi vya Kiswahili?",
          "options": [
            "Kiambishi '-ta-' kinaeleza tendo litakalofanyika mbeleni, kikiungana na viambishi vyote vya ngeli na kuhifadhi 'ku-' kwa vitenzi vya silabi moja. (Prefix -ta- expresses future actions across all noun classes, retaining 'ku-' for monosyllabic verbs)",
            "Kiambishi '-ta-' kinatumika tu kueleza hadithi za kale za vizazi vilivyopita",
            "Kiambishi '-ta-' kinakataza matumizi ya maneno kama 'kesho'",
            "Hakuna tofauti ya kisarufi kati ya '-ta-' na '-li-'"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi «-ta-» kinaeleza vitendo vitakavyotendeka siku zijazo na huhifadhi «ku-» kwa vitenzi vya silabi moja."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 5 ya Wakati Ujao katika Kiswahili:",
          "options": [
            "Kesho asubuhi wageni wote watakuja nyumbani kwetu, tutakunywa chai ya viungo pamoja, na tutapanga safari ya kutembelea mji wa Zanzibar. (Tomorrow morning all guests will come to our home, we will drink spiced tea together, and we will plan a trip to visit Zanzibar city.)",
            "Kesho asubuhi wageni wote alikuja nyumbani na jana tutakunywa chai.",
            "Wageni wote litakunywa chai wakati wazee walisoma hadithi kesho.",
            "Wakati ujao unakataza matumizi ya neno 'kesho' na 'keshokutwa'."
          ],
          "answerIndex": 0,
          "explanation": "«Kesho asubuhi wageni wote watakuja nyumbani kwetu, tutakunywa chai ya viungo pamoja, na tutapanga safari ya kutembelea mji wa Zanzibar.» inajumuisha mada zote za Unit 5 kwa ufasaha wa hali ya juu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u6-l1": {
    "id": "sw-u6-l1",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 1,
    "title": "Muundo wa Wakati Timilifu (-me-) na Maana Yake (Morphology & Semantics of the -me- Perfective)",
    "level": "A2",
    "objective": "Kuelewa muundo na maana ya Wakati Timilifu (Perfective Aspect) wenye kiambishi '-me-': kuonyesha tendo lililokamilika hivi karibuni na ambalo matokeo au athari zake zinadumu hadi wakati wa sasa.",
    "presentation": {
      "explanation": "Muundo na Maana ya Wakati Timilifu katika Kiswahili (The -me- Perfective Aspect):\n\n1. **Dhana ya Wakati Timilifu (The Perfective Aspect -me-)**:\n   - Kiambishi **-me-** kinaonyesha kuwa tendo **limekwishatendeka na kukamilika** (Completed Action), lakini matokeo yake bado yapo wazi na yanaathiri wakati uliopo (Present Relevance / Resultative State).\n   - Tofauti na *-li-* (iliyopita na kusahaulika), *-me-* inasisitiza **hali ya sasa iliyotokana na tendo hilo**.\n\n2. **Mnyambuliko wa Nafsi Zote Sita (Conjugation Paradigm)**:\n   - *Mimi* (I): **ni-** + **me-** + **soma** -> **nimesoma** (I have read / I have studied)\n   - *Wewe* (You sg): **u-** + **me-** + **fika** -> **umefika** (You have arrived)\n   - *Yeye* (He/She): **a-** + **me-** + **ondoka** -> **ameondoka** (He/She has departed)\n   - *Sisi* (We): **tu-** + **me-** + **faulu** -> **tumefaulu** (We have succeeded/passed)\n   - *Ninyi* (You pl): **m-** + **me-** + **kamilisha** -> **mmekamilisha** (You all have completed)\n   - *Wao* (They): **wa-** + **me-** + **anza** -> **wameanza** (They have begun)",
      "examples": [
        {
          "target": "Mimi nimesoma kitabu chote na sasa ninaelewa maudhui yake vizuri.",
          "reading": "Mi-mi ni-me-so-ma ki-ta-bu cho-te na sa-sa ni-na-e-le-wa ma-u-dhu-i ya-ke vi-zu-ri. [ˈmimi nimɛˈsɔmɑ kiˈtɑbu ˈtʃɔtɛ nɑ ˈsɑsɑ ninɑɛlɛˈwɑ mɑuˈðui ˈjɑkɛ viˈzuri] (MEE-mee nee-may-SOH-mah kee-TAH-boo CHOH-tay nah SAH-sah nee-nah-ay-lay-WAH mah-oo-THOO-ee YAH-kay vee-ZOO-ree)",
          "translation": "I have read [perfective 1st person: nimesoma] the entire book and now I understand [present state: ninaelewa] its theme well."
        },
        {
          "target": "Wageni wamefika nyumbani salama na wamekaribishwa sebuleni.",
          "reading": "Wa-ge-ni wa-me-fi-ka nyu-mba-ni sa-la-ma na wa-me-ka-ri-bi-shwa se-bu-le-ni. [wɑˈɡɛni wɑmɛˈfikɑ ɲumbɑˈni sɑˈlɑmɑ nɑ wɑmɛkɑribiˈʃwɑ sɛbuˈlɛni] (wah-GAY-nee wah-may-FEE-kah nyoom-bah-NEE sah-LAH-mah nah wah-may-kah-ree-BEE-shwah say-boo-LAY-nee)",
          "translation": "Guests have arrived [perfective 3rd plural: wamefika] home safely and have been welcomed [perfective passive: wamekaribishwa] into the living room."
        },
        {
          "target": "Sisi tumekamilisha kazi zetu zote za leo na tuko tayari kupumzika.",
          "reading": "Si-si tu-me-ka-mi-li-sha ka-zi ze-tu zo-te za le-o na tu-ko ta-ya-ri ku-pu-mzi-ka. [ˈsisi tumɛkɑmiˈliʃɑ ˈkɑzi ˈzɛtu ˈzɔtɛ zɑ ˈlɛɔ nɑ ˈtukɔ tɑˈjɑri kupumˈzikɑ] (SEE-see too-may-kah-mee-LEE-shah KAH-zee ZAY-too ZOH-tay zah LAY-oh nah TOO-koh tah-YAH-ree koo-poom-ZEE-kah)",
          "translation": "We have completed [perfective 1st plural: tumekamilisha] all our work for today and are ready to rest."
        }
      ],
      "mnemonics": [
        "Wakati Timilifu: Kiambishi cha Tayari ni -ME- (ni-ME-fanya, u-ME-fika, a-ME-ondoka, tu-ME-kamilisha, m-ME-ona, wa-ME-anza)!"
      ],
      "culturalNotes": [
        "Wakati timilifu hutumika mara kwa mara katika utamaduni wa ukarimu wa Kiswahili kupokea wageni: 'Karibuni, chakula kimeiva!' (Welcome, food is cooked/ready!)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayoelezea nafsi ya kwanza wingi (Sisi) katika wakati timilifu wa kitenzi 'faulu' ni ipi?",
          "options": [
            "Sisi tumefaulu mtihani wetu vizuri. (We have passed our exam well - Correct 1st person plural perfective 'tu-me-faulu')",
            "Sisi ninamefaulu mtihani wetu vizuri (Mchanganyiko usio sahihi wa viambishi)",
            "Sisi wamefaulu mtihani wetu vizuri (Kosa la nafsi ya tatu)",
            "Sisi amefaulu mtihani wetu vizuri (Kosa la umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi nafsi cha «Sisi» ni «tu-» kikiungana na kiambishi cha wakati timilifu «-me-» kupata «tumefaulu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mgeni anapobisha hodi na kuingia ndani ya nyumba sasa hivi, unamtaarifu mwenye nyumba kwa kauli ipi?",
          "options": [
            "Mgeni amefika sasa hivi na yuko mlangoni. (The guest has arrived just now and is at the door - Accurate perfective announcement)",
            "Mgeni atafika jana jioni (Mchanganyiko wa wakati ujao na 'jana')",
            "Mgeni walifika kesho asubuhi (Kosa la upatanisho na wakati)",
            "Mgeni nimefika nyumbani kwako (Kosa la kiambishi nafsi)"
          ],
          "answerIndex": 0,
          "explanation": "Kwa tendo lililokamilika sasa lenye matokeo ya moja kwa moja, hutumika wakati timilifu: «Mgeni amefika»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni inayotofautisha Wakati Timilifu (-me-) na Wakati Uliopita (-li-) katika Kiswahili:",
          "options": [
            "Kiambishi '-me-' kinaonyesha tendo lililokamilika lakini athari au matokeo yake yapo wazi wakati wa sasa, wakati '-li-' linaeleza tendo la zamani lililopita. (Prefix -me- indicates a completed action with present relevance/state, while -li- expresses simple past.)",
            "Kiambishi '-me-' kinatumika tu kwa chakula na si kwa binadamu.",
            "Wakati timilifu unakataza matumizi ya viambishi nafsi.",
            "Hakuna tofauti yoyote ya maana kati ya '-me-' na '-li-'."
          ],
          "answerIndex": 0,
          "explanation": "«Kiambishi '-me-' kinaonyesha tendo lililokamilika lakini athari au matokeo yake yapo wazi wakati wa sasa, wakati '-li-' linaeleza tendo la zamani lililopita.» ndiyo kanuni kuu ya kisemantiki."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u6-l2": {
    "id": "sw-u6-l2",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 2,
    "title": "Vitenzi vya Hali na Matokeo katika Wakati Timilifu (Stative Verbs with -me-: Kuchoka, Kushiba, Kulala, Kulewa)",
    "level": "A2",
    "objective": "Kutambua tabia ya kipekee ya vitenzi vya hali (Stative / Inchoative Verbs: kuchoka, kushiba, kulala, kuvaa, kufurahi) ambavyo katika wakati timilifu (-me-) hueleza hali iliyopo sasa badala ya wakati uliopita pekee.",
    "presentation": {
      "explanation": "Vitenzi vya Hali katika Wakati Timilifu (Stative & Inchoative Verbs in -me-):\n\n1. **Dhana ya Vitenzi vya Hali (Inchoative / State Verbs)**:\n   - Katika Kiswahili, baadhi ya vitenzi vinavyoelezea **mchakato wa kuingia katika hali fulani** vinapotumiwa na **-me-**, vinatafsiriwa kama **hali ya sasa hivi** (Present State):\n     - *choka* (become tired) -> **nimechoka** (I am currently tired) [siyo *ninachoka* ambayo humaanisha mchakato unaoendelea]\n     - *shiba* (become full with food) -> **nimeshiba** (I am full / satisfied)\n     - *lala* (fall asleep) -> **amelala** (he is asleep / sleeping)\n     - *simama* (stand up) -> **amesimama** (she is standing)\n     - *keti / kaa* (sit down) -> **amekaa** (he is seated / sitting)\n     - *vaa* (put on clothes) -> **amevaa** (she is wearing / dressed in)\n     - *furahi* (become happy) -> **tumefurahi** (we are happy / delighted)\n     - *elewa* (comprehend) -> **nimeelewa** (I understand)",
      "examples": [
        {
          "target": "Nimeshiba sana baada ya kula chakula kitamu cha mchana na sasa ninataka maji.",
          "reading": "Ni-me-shi-ba sa-na ba-a-da ya ku-la cha-ku-la ki-ta-mu cha mcha-na na sa-sa ni-na-ta-ka ma-ji. [nimɛˈʃibɑ ˈsɑnɑ bɑˈɑdɑ jɑ ˈkulɑ tʃɑˈkulɑ kiˈtɑmu tʃɑ mˈtʃɑnɑ nɑ ˈsɑsɑ ninɑˈtɑkɑ ˈmɑʤi] (nee-may-SHEE-bah SAH-nah bah-AH-dah yah KOO-lah chah-KOO-lah kee-TAH-moo chah M-CHAH-nah nah SAH-sah nee-nah-TAH-kah MAH-jee)",
          "translation": "I am full [stative present state: nimeshiba] after eating a delicious lunch and now I want water."
        },
        {
          "target": "Mzee amechoka baada ya kutembea mwendo mrefu na amelala kitandani kupumzika.",
          "reading": "Mze-e a-me-cho-ka ba-a-da ya ku-te-mbe-a mwe-ndo mre-fu na a-me-la-la ki-ta-nda-ni ku-pu-mzi-ka. [mˈzɛː ɑmɛˈtʃɔkɑ bɑˈɑdɑ jɑ kutɛmbɛˈlɛɑ ˈmwɛndɔ mˈrɛfu nɑ ɑmɛˈlɑlɑ kitɑndɑˈni kupumˈzikɑ] (M-ZAY ah-may-CHOH-kah bah-AH-dah yah koo-tahm-bay-LAY-ah MWAYN-doh M-RAY-foo nah ah-may-LAH-lah kee-tahn-dah-NEE koo-poom-ZEE-kah)",
          "translation": "The elder is tired [stative state: amechoka] after walking a long distance and is asleep [stative state: amelala] in bed resting."
        },
        {
          "target": "Mwalimu amevaa mavazi nadhifu ya kitamaduni na amefurahi kuwaona wanafunzi wake.",
          "reading": "Mwa-li-mu a-me-va-a ma-va-zi na-dhi-fu ya ki-ta-ma-du-ni na a-me-fu-ra-hi ku-wa-o-na wa-na-fu-nzi wa-ke. [mwɑˈlimu ɑmɛˈvɑː mɑˈvɑzi nɑˈðifu jɑ kitɑmɑˈduni nɑ ɑmɛfuˈrɑhi kuwɑˈɔnɑ wɑnɑˈfunzi ˈwɑkɛ] (mwah-LEE-moo ah-may-VAH-ah mah-VAH-zee nah-THEE-foo yah kee-tah-mah-DOO-nee nah ah-may-foo-RAH-hee koo-wah-OH-nah wah-nah-FOON-zee WAH-kay)",
          "translation": "The teacher is wearing [stative state: amevaa] neat traditional clothes and is glad [stative state: amefurahi] to see his students."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Hali na -ME-: Hali ya sasa: Nimeshiba (I am full), Nimechoka (I am tired), Amelala (He is asleep), Amekaa (He is seated)!"
      ],
      "culturalNotes": [
        "Mgeni anapokaribishwa chakula zaidi ya uwezo wake, usemi wa adabu ni: 'Asante sana, nimeshiba Alhamdulillah' (Thank you very much, I am completely full)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapotaka kusema kwa Kiswahili fasaha kwamba \"Umeshiba na huwezi kula tena sasa hivi\", unatumia kauli gani?",
          "options": [
            "Nimeshiba sana asante. (I am very full, thank you - Correct stative perfective expression of being sated)",
            "Ninashiba sasa hivi (Inaonyesha mchakato unaoendelea wa kula badala ya hali ya kushiba)",
            "Nalishiba jana usiku (Kauli isiyo sanifu)",
            "Nitashiba kesho asubuhi (Wakati ujao)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «shiba» katika wakati timilifu «nimeshiba» kinamaanisha kuwa uko katika hali ya kushiba hivi sasa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaeleza kwa usahihi hali ya mtu aliyelala kitandani sasa hivi?",
          "options": [
            "Mtoto amelala usingizi mnono kitandani. (The child is asleep in deep slumber in bed - Accurate stative use of -lala)",
            "Mtoto analala jana usiku (Kosa la wakati)",
            "Mtoto alilala kesho mchana (Mchanganyiko usio na mantiki)",
            "Mtoto kitalala kitandani sasa (Kosa la upatanisho wa ngeli)"
          ],
          "answerIndex": 0,
          "explanation": "Usemi «amelala» unaeleza hali ya mtoto kuwa usingizini wakati huu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha ya vitenzi vya hali (stative verbs) vinavyotafsiriwa kama hali ya sasa vinapochukua kiambishi '-me-':",
          "options": [
            "kuchoka (nimechoka = I am tired), kushiba (nimeshiba = I am full), kulala (amelala = he is asleep), kuvaa (amevaa = she is wearing).",
            "kukimbia, kuruka, kuandika, kusoma vitabu.",
            "kuimba, kupiga picha, kuhesabu, kuchora picha.",
            "kufungua, kufunga, kupanda, kushuka."
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi vya kuingia katika hali kama kuchoka, kushiba, kulala na kuvaa ndivyo vinavyotoa maana ya hali ya sasa vikiwa na «-me-»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u6-l3": {
    "id": "sw-u6-l3",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 3,
    "title": "Vitenzi vya Silabi Moja katika Wakati Timilifu (Monosyllabic Verbs with -me-: Kula, Kunywa, Kuja, Kwenda)",
    "level": "A2",
    "objective": "Kutambua jinsi vitenzi vyenye shina la silabi moja (kula, kunywa, kuja, kwenda) vinavyohifadhi kiambishi cha 'ku-' katika wakati timilifu (-me-) ili kulinda muundo wa kifonolojia wa neno.",
    "presentation": {
      "explanation": "Vitenzi vya Silabi Moja katika Wakati Timilifu (Monosyllabic Verbs in -me-):\n\n1. **Kuhifadhi Kiambishi 'ku-' katika Wakati Timilifu**:\n   - Vitenzi vya silabi moja **huvumilia na kubakiza kiambishi 'ku-'** vikiambatana na **-me-**:\n     - *-la* (eat) -> *ni-me-**ku**-la* -> **nimekula** (I have eaten)\n     - *-nywa* (drink) -> *a-me-**ku**-nywa* -> **amekunywa** (he has drunk)\n     - *-ja* (come) -> *wa-me-**ku**-ja* -> **wamekuja** (they have come)\n     - *-enda* (go) -> *tu-me-**kwe**-nda* -> **tumekwenda** (we have gone)\n     - *-fa* (die) -> *a-me-**ku**-fa* -> **amekufa** (he has died / passed away)\n     - *-wa* (be/become) -> *wa-me-**ku**-wa* -> **wamekuwa** (they have become)\n\n2. **Mifano Katika Mawasiliano ya Kila Siku**:\n   - *Je, umekula chakula? - Ndiyo, nimekula tayari.* (Have you eaten food? - Yes, I have already eaten.)\n   - *Wageni wamekuja kutoka Nairobi.* (Guests have come from Nairobi.)",
      "examples": [
        {
          "target": "Sisi tumekula ugali wa sembe na wageni wamekunywa chai ya maziwa.",
          "reading": "Si-si tu-me-ku-la u-ga-li wa se-mbe na wa-ge-ni wa-me-ku-nywa cha-i ya ma-zi-wa. [ˈsisi tumɛˈkulɑ uˈɡɑli wɑ ˈsɛmbɛ nɑ wɑˈɡɛni wɑmɛˈkuɲwɑ ˈtʃɑi jɑ mɑˈziwɑ] (SEE-see too-may-KOO-lah oo-GAH-lee wah SAYM-bay nah wah-GAY-nee wah-may-KOO-nywah CHAH-ee yah mah-ZEE-wah)",
          "translation": "We have eaten [perfective monosyllabic: tumekula] corn ugali and guests have drunk [perfective monosyllabic: wamekunywa] milk tea."
        },
        {
          "target": "Marafiki zangu wamekuja mjini na wamekwenda kutembelea makumbusho ya taifa.",
          "reading": "Ma-ra-fi-ki za-ngu wa-me-ku-ja mji-ni na wa-me-kwe-nda ku-te-mbe-le-a ma-ku-mbu-sho ya ta-i-fa. [mɑrɑˈfiki ˈzɑŋɡu wɑmɛˈkuʤɑ ˈmʤini nɑ wɑmɛˈkwɛndɑ kutɛmbɛˈlɛɑ mɑkumbuˈʃɔ jɑ tɑˈifɑ] (mah-rah-FEE-kee ZAHN-goo wah-may-KOO-jah M-jee-nee nah wah-may-KWAYN-dah koo-tahm-bay-LAY-ah mah-koom-BOO-shoh yah tah-EE-fah)",
          "translation": "My friends have come [perfective monosyllabic: wamekuja] to town and have gone [perfective monosyllabic: wamekwenda] to visit the national museum."
        },
        {
          "target": "Mtoto mdogo amekula ndizi mbivu na amekunywa maziwa yote glisini.",
          "reading": "Mto-to mdo-go a-me-ku-la ndi-zi mbi-vu na a-me-ku-nywa ma-zi-wa yo-te gli-si-ni. [ˈmtɔtɔ mˈdɔɡɔ ɑmɛˈkulɑ ˈndizi ˈmbivu nɑ ɑmɛˈkuɲwɑ mɑˈziwɑ ˈjɔtɛ ɡliˈsini] (M-TOH-toh M-DOH-goh ah-may-KOO-lah N-DEE-zee M-BEE-voo nah ah-may-KOO-nywah mah-ZEE-wah YOH-tay glee-SEE-nee)",
          "translation": "The small child has eaten [perfective monosyllabic: amekula] a ripe banana and has drunk [perfective monosyllabic: amekunywa] all the milk in the glass."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Silabi Moja na -ME-: 'Ku-' haifutiki kamwe: nimekula, amekunywa, wamekuja, tumekwenda!"
      ],
      "culturalNotes": [
        "Makumbusho ya Taifa ya Dar es Salaam na kijiji cha Makumbusho (Village Museum) yanahifadhi historia ya asili ya binadamu (Olduvai Gorge) na tamaduni za makabila zaidi ya 120 ya Tanzania."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Chagua kitenzi sahihi cha wakati timilifu kinachomaanisha \"Yeye amekula chakula\":",
          "options": [
            "amekula (He/She has eaten - Correct retention of 'ku-' in perfective aspect for stem -la)",
            "amela (Kosa la kuangusha kiambishi 'ku-')",
            "amelia (Kitenzi cha kulia machozi badala ya kula)",
            "ametoka (Kitenzi cha kutoka nje)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «-la» katika wakati timilifu hubakiza «ku-», hivyo huwa «amekula»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia vitenzi vya silabi moja katika wakati timilifu kwa usahihi kabisa?",
          "options": [
            "Wageni wamekuja nyumbani kwetu na wamekunywa juisi baridi. (Guests have come to our home and drunk cold juice - Flawless perfective monosyllabic syntax)",
            "Wageni wameja nyumbani na wamenywa juisi (Kosa la kuondoa 'ku-')",
            "Wageni wamekuja jana badala ya leo (Kosa la kutumia wakati timilifu kwa tukio la jana)",
            "Wageni watakuja jana jioni (Kosa kubwa la wakati)"
          ],
          "answerIndex": 0,
          "explanation": "Muundo sanifu wa vitenzi vya silabi moja katika wakati timilifu ni «wamekuja» na «wamekunywa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi kuhusu vitenzi vya silabi moja katika wakati timilifu (-me-):",
          "options": [
            "Vitenzi vyenye shina la silabi moja kama 'kula', 'kunywa', na 'kuja' huhifadhi kiambishi 'ku-' katika wakati timilifu (nimekula, amekunywa, wamekuja, tumekwenda). (Monosyllabic verbs retain 'ku-' in the -me- perfective aspect.)",
            "Kiambishi 'ku-' hufutwa kila wakati katika wakati timilifu.",
            "Vitenzi vya silabi moja havina wakati timilifu.",
            "Kiambishi 'ku-' hubadilika kuwa 'ki-' katika wakati timilifu."
          ],
          "answerIndex": 0,
          "explanation": "«Vitenzi vyenye shina la silabi moja kama 'kula', 'kunywa', na 'kuja' huhifadhi kiambishi 'ku-' katika wakati timilifu (nimekula, amekunywa, wamekuja, tumekwenda).» ndiyo kanuni sahihi ya sarufi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u6-l4": {
    "id": "sw-u6-l4",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 4,
    "title": "Upatanisho wa Ngeli Mbalimbali katika Wakati Timilifu (Noun Class Concord with -me-)",
    "level": "A2",
    "objective": "Kutambua upatanisho wa kisarufi wa ngeli mbalimbali za nomino (KI-VI, M-MI, JI-MA, N-N) katika wakati timilifu (-me-) na jinsi viambishi ngeli vinavyounda sentensi zenye utangamano.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli Tofauti katika Wakati Timilifu (Concord across Noun Classes with -me-):\n\n1. **Ngeli ya KI-VI (Classes 7/8)**:\n   - Umoja (**ki-**): *Chakula **ki**meiva.* (The food is cooked/ready.)\n   - Wingi (**vi-**): *Viti **vi**mevunjika.* (The chairs are broken.)\n   - *Kikombe **ki**meanguka.* / *Vikombe **vi**meanguka.*\n\n2. **Ngeli ya M-MI (Classes 3/4)**:\n   - Umoja (**u-**): *Mti **u**meanguka.* (The tree has fallen.)\n   - Wingi (**i-**): *Miti **i**mekua.* (Trees have grown.)\n   - *Mto **u**mefurika.* (The river has flooded.) / *Mito **i**mefurika.*\n\n3. **Ngeli ya JI-MA (Classes 5/6)**:\n   - Umoja (**li-**): *Gari **li**meharibika.* (The car has broken down.)\n   - Wingi (**ya-**): *Matunda **ya**meiva.* (Fruits are ripe.)\n   - *Jiko **li**mezimika.* / *Majiko **ya**mezimika.*\n\n4. **Ngeli ya N-N (Classes 9/10)**:\n   - Umoja (**i-**): *Nyumba **i**mekamilika.* (The house is completed.)\n   - Wingi (**zi-**): *Ndege **zi**metua.* (Airplanes have landed.)\n   - *Barua **i**mefika.* / *Barua **zi**mefika.*",
      "examples": [
        {
          "target": "Chakula cha jioni kimeiva jikoni na matunda yote yameiva mtini.",
          "reading": "Cha-ku-la cha ji-o-ni ki-me-i-va ji-ko-ni na ma-tu-nda yo-te ya-me-i-va mti-ni. [tʃɑˈkulɑ tʃɑ ʤiˈɔni kimɛˈivɑ ʤiˈkɔni nɑ mɑˈtundɑ ˈjɔtɛ jɑmɛˈivɑ mtiˈni] (chah-KOO-lah chah jee-OH-nee kee-may-EE-vah jee-KOH-nee nah mah-TOON-dah YOH-tay yah-may-EE-vah m-tee-NEE)",
          "translation": "Dinner has cooked [class 7 KI-VI: kimeiva] in the kitchen and all fruits are ripe [class 6 JI-MA: yameiva] on the tree."
        },
        {
          "target": "Gari letu limeharibika njiani lakini basi la abiria limewasili kwa wakati.",
          "reading": "Ga-ri le-tu li-me-ha-ri-bi-ka njia-ni la-ki-ni ba-si la a-bi-ri-a li-me-wa-si-li kwa wa-ka-ti. [ˈɡɑri ˈlɛtu limɛhɑriˈbikɑ ˈnʤiɑni lɑˈkini ˈbɑsi lɑ ɑbiˈriɑ limɛwɑˈsili kwɑ wɑˈkɑti] (GAH-ree LAY-too lee-may-hah-ree-BEE-kah n-jee-AH-nee lah-KEE-nee BAH-see lah ah-bee-REE-ah lee-may-wah-SEE-lee kwah wah-KAH-tee)",
          "translation": "Our car has broken down [class 5 JI-MA: limeharibika] on the way, but the passenger bus has arrived [class 5 JI-MA: limewasili] on time."
        },
        {
          "target": "Nyumba mpya zimekamilika kujengwa na mito mikubwa imefurika maji.",
          "reading": "Nyu-mba mpy-a zi-me-ka-mi-li-ka ku-je-ngwa na mi-to mi-kbu-wa i-me-fu-ri-ka ma-ji. [ˈɲumbɑ ˈmpjɑ zimɛkɑmiˈlikɑ kuˈʤɛŋɡwɑ nɑ ˈmitɔ miˈkubwɑ imɛfuˈrikɑ ˈmɑʤi] (NYOOM-bah M-PYAH zee-may-kah-mee-LEE-kah koo-JAYN-gwah nah MEE-toh mee-KOO-bwah ee-may-foo-REE-kah MAH-jee)",
          "translation": "New houses have finished [class 10 N-N plural: zimekamilika] being built and big rivers have flooded [class 4 M-MI plural: imefurika] with water."
        }
      ],
      "mnemonics": [
        "Upatanisho na -ME-: KI->kimeiva, VI->vimeiva, M/MI->umekua/imekua, JI/MA->limefika/yamefika, N/N->imefika/zimefika!"
      ],
      "culturalNotes": [
        "Usemi maarufu wa Kiswahili unasema: 'Mchele mmoja mapishi mbalimbali' — kuonyesha jinsi viambishi tofauti vya ngeli vinavyopatanisha maneno mbalimbali kwa upatano mzuri."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina upatanisho sahihi wa wakati timilifu kwa nomino ya Ngeli ya 7 (Chakula)?",
          "options": [
            "Chakula kitamu kimeiva jikoni. (The delicious food is cooked/ready in the kitchen - Correct Class 7 perfective prefix 'ki-me-')",
            "Chakula kitamu limeiva jikoni (Kosa la kutumia kiambishi cha JI-MA)",
            "Chakula kitamu zimeiva jikoni (Kosa la kutumia kiambishi cha N-N wingi)",
            "Chakula kitamu wameiva jikoni (Kosa la kutumia kiambishi cha watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Chakula» (umoja katika Ngeli ya KI-VI) huchukua kiambishi cha kitenzi «ki-», hivyo katika wakati timilifu huwa «kimeiva»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia matunda mengi yaliyoiva mtini (Ngeli ya 6 JI-MA wingi), kitenzi sahihi cha wakati timilifu ni kipi?",
          "options": [
            "Matunda yote yameiva mtini. (All fruits are ripe on the tree - Correct Class 6 perfective prefix 'ya-me-')",
            "Matunda yote limeiva mtini (Kosa la kutumia umoja 'li-')",
            "Matunda yote zimeiva mtini (Kosa la kutumia kiambishi cha N-N)",
            "Matunda yote wameiva mtini (Kosa la kuchukulia matunda kama watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi «Matunda» (Ngeli ya JI-MA) huchukua kiambishi cha kitenzi «ya-», hivyo katika wakati timilifu huwa «yameiva»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi na kamilifu wa wakati timilifu katika ngeli mbalimbali:",
          "options": [
            "Chakula kimeiva mezani, gari jipya limewasili, na nyumba mpya zimekamilika mjini. (Food is cooked [ki-], new car has arrived [li-], and new houses are completed [zi-].)",
            "Chakula limeiva mezani na magari yote kimenunuliwa.",
            "Miti yote zimeanguka wakati gari jipya wamefika nyumbani.",
            "Nyumba zote imekamilika na vitabu vyote limefunguliwa mezani."
          ],
          "answerIndex": 0,
          "explanation": "«Chakula kimeiva mezani, gari jipya limewasili, na nyumba mpya zimekamilika mjini.» inafuata upatanisho kamili wa KI-VI (ki-), JI-MA (li-), na N-N (zi-) katika wakati timilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u6-l5": {
    "id": "sw-u6-l5",
    "subject": "swahili",
    "unit": 6,
    "lessonNumber": 5,
    "title": "Muhtasari wa Wakati Timilifu (-me-) (Perfective Aspect Grand Synthesis)",
    "level": "A2",
    "objective": "Kuunganisha mada zote za Unit 6: mnyambuliko wa nafsi zote katika wakati timilifu (-me-), vitenzi vya hali na matokeo (kuchoka, kushiba, kulala, kuvaa), vitenzi vya silabi moja (kula, kunywa, kuja, kwenda), na upatanisho wa ngeli zote katika sentensi changamano.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Wakati Timilifu (-me-) (Perfective Aspect Grand Synthesis):\n\n1. **Kanuni Kuu ya Wakati Timilifu**:\n   - Kiambishi **-me-** kinaonyesha tendo lililokamilika na ambalo matokeo au athari zake ziko hai sasa hivi.\n   - Muundo: `Kiambishi Nafsi + -me- + Shina la Kitenzi` (*nimesoma, umesoma, amesoma, tumesoma, mmesoma, wamesoma*).\n\n2. **Vitenzi vya Hali (Stative Verbs)**:\n   - Hutoa maana ya hali ya sasa: *nimeshiba* (I am full), *nimechoka* (I am tired), *amelala* (he is asleep), *amevaa* (she is wearing), *nimeelewa* (I understand).\n\n3. **Vitenzi vya Silabi Moja**:\n   - Huhifadhi kiambishi 'ku-': *nimekula, amekunywa, wamekuja, tumekwenda*.\n\n4. **Upatanisho wa Ngeli Zote**:\n   - A-WA (*amefika / wamefika*), KI-VI (*kimeiva / vimeiva*), M-MI (*umekua / imekua*), JI-MA (*limeharibika / yameiva*), N-N (*imekamilika / zimetua*).",
      "examples": [
        {
          "target": "Sisi tumeshiba vizuri, wageni wamefika salama, na kazi yote imekamilika kwa ufanisi.",
          "reading": "Si-si tu-me-shi-ba vi-zu-ri, wa-ge-ni wa-me-fi-ka sa-la-ma, na ka-zi yo-te i-me-ka-mi-li-ka kwa u-fa-ni-si. [ˈsisi tumɛˈʃibɑ viˈzuri wɑˈɡɛni wɑmɛˈfikɑ sɑˈlɑmɑ nɑ ˈkɑzi ˈjɔtɛ imɛkɑmiˈlikɑ kwɑ ufɑˈnisi] (SEE-see too-may-SHEE-bah vee-ZOO-ree, wah-GAY-nee wah-may-FEE-kah sah-LAH-mah, nah KAH-zee YOH-tay ee-may-kah-mee-LEE-kah kwah oo-fah-NEE-see)",
          "translation": "We are well full [stative: tumeshiba], guests have arrived safely [perfective: wamefika], and all work has completed [class 9: imekamilika] efficiently."
        },
        {
          "target": "Wanafunzi wote wameelewa somo hili gumu na wamefurahia mafunzo ya leo.",
          "reading": "Wa-na-fu-nzi wo-te wa-me-e-le-wa so-mo hi-li gu-mu na wa-me-fu-ra-hi-a ma-fu-nzo ya le-o. [wɑnɑˈfunzi ˈwɔtɛ wɑmɛɛlɛˈwɑ ˈsɔmɔ ˈhili ˈɡumu nɑ wɑmɛfurɑˈhiɑ mɑˈfunzɔ jɑ ˈlɛɔ] (wah-nah-FOON-zee WOH-tay wah-may-ay-lay-WAH SOH-moh HEE-lee GOO-moo nah wah-may-foo-rah-HEE-ah mah-FOON-zoh yah LAY-oh)",
          "translation": "All students have understood [stative: wameelewa] this difficult lesson and have rejoiced [stative: wamefurahia] in today's instruction."
        },
        {
          "target": "Wakati timilifu wenye kiambishi '-me-' unaunganisha tendo lililokamilika na hali ya sasa kwa usahihi wa hali ya juu.",
          "reading": "Wa-ka-ti ti-mi-li-fu we-nye ki-a-mbi-shi '-me-' u-na-u-nga-ni-sha te-ndo li-li-lo-ka-mi-li-ka na ha-li ya sa-sa kwa u-sa-hi-hi wa ha-li ya ju-u. [wɑˈkɑti timiˈlifu ˈwɛnjɛ kiɑmˈbiʃi -mɛ- unɑuŋɡɑˈniʃɑ ˈtɛndɔ lililɔkɑmiˈlikɑ nɑ ˈhɑli jɑ ˈsɑsɑ kwɑ usɑˈhihi wɑ ˈhɑli jɑ ˈʤuː] (wah-KAH-tee tee-mee-LEE-foo WAYN-yay kee-ahm-BEE-shee '-me-' oo-nah-oon-gah-NEE-shah TAYN-doh lee-lee-loh-kah-mee-LEE-kah nah HAH-lee yah SAH-sah kwah oo-sah-HEE-hee wah HAH-lee yah JOO-oo)",
          "translation": "The perfective aspect with prefix '-me-' [perfective synthesis: wakati timilifu] links completed actions to present states with supreme linguistic accuracy."
        }
      ],
      "mnemonics": [
        "Muhtasari wa -ME-: Nimeshiba (I am full), nimekula (I have eaten), wamefika (they have arrived), na kila kitu kimekamilika!"
      ],
      "culturalNotes": [
        "Umahiri wa kutumia wakati timilifu humwezesha msemaji wa Kiswahili kueleza hisia zake za sasa (furaha, uchovu, kushiba) na matukio yaliyokamilika kwa staha na ufasaha mkubwa."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa wakati timilifu (-me-) kwa vitenzi vya hali, vitenzi vya kawaida na vitenzi vya silabi moja?",
          "options": [
            "Wanafunzi wamechoka kidogo lakini wamekula chakula kitamu na wameelewa somo lote. (Students are slightly tired, but have eaten delicious food and understood the whole lesson - Harmonious perfective synthesis)",
            "Wanafunzi walichoka jana na kesho wamela chakula (Kosa la kuondoa 'ku-' na kuchanganya nyakati)",
            "Wanafunzi wanachoka jana usiku na wamefika kesho (Mvurugiko mkubwa wa nyakati)",
            "Chakula chote wamechoka wanafunzi mezani (Muundo usio na maana)"
          ],
          "answerIndex": 0,
          "explanation": "«Wanafunzi wamechoka kidogo lakini wamekula chakula kitamu na wameelewa somo lote.» inajumuisha vitenzi vya hali (wamechoka, wameelewa) na silabi moja (wamekula) kwa usahihi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 6, ni sifa gani kuu inayofanya kiambishi '-me-' kuwa cha pekee katika Kiswahili?",
          "options": [
            "Huwezesha kueleza tendo lililokamilika na wakati huo huo kueleza hali iliyopo sasa (stative state) kama 'nimeshiba' au 'nimechoka'. (It expresses completed actions while denoting current stative states like 'I am full' or 'I am tired')",
            "Kinatumika tu wakati wa usiku pekee",
            "Hakiwezi kutumiwa na vitenzi vya kawaida",
            "Kinabadilisha maneno yote kuwa lugha ya kigeni"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi «-me-» kinaunganisha tendo lililokamilika na hali iliyopo sasa (stative state)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 6 ya Wakati Timilifu katika Kiswahili:",
          "options": [
            "Wageni wote wamefika nyumbani kwetu salama, wamekunywa chai moto ya tangawizi, wameshiba chakula kitamu, na wamefurahia sana ukarimu wetu. (All guests have arrived at our home safely, have drunk hot ginger tea, are full with delicious food, and have rejoiced in our hospitality.)",
            "Wageni wote alifika nyumbani na kesho wamekunywa chai.",
            "Wageni wote linashiba chakula wakati wazee watasoma hadithi jana.",
            "Wakati timilifu unakataza matumizi ya neno 'nimeshiba' na 'nimechoka'."
          ],
          "answerIndex": 0,
          "explanation": "«Wageni wote wamefika nyumbani kwetu salama, wamekunywa chai moto ya tangawizi, wameshiba chakula kitamu, na wamefurahia sana ukarimu wetu.» inajumuisha mada zote za Unit 6 kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u7-l1": {
    "id": "sw-u7-l1",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 1,
    "title": "Ukanushaji wa Wakati Uliopo (Present Tense Negation: ha-...-i, si-)",
    "level": "A2",
    "objective": "Kuelewa kanuni za ukanushaji katika Wakati Uliopo: kubadilisha viambishi nafsi kuwa viambishi hasi (si-, hu-, ha-, hatu-, ham-, hawa-), kuondoa kiambishi cha wakati '-na-', na kubadili irabu ya mwisho '-a' kuwa '-i' kwa vitenzi vya asili ya Kibantu.",
    "presentation": {
      "explanation": "Ukanushaji wa Wakati Uliopo katika Kiswahili (Present Tense Negation: ha-...-i / si-):\n\n1. **Kanuni Kuu Tatu za Ukanushaji wa Wakati Uliopo**:\n   - **Hatua ya 1 (Viambishi Hasi vya Nafsi)**: *ni-* -> **si-**, *u-* -> **hu-**, *a-* -> **ha-**, *tu-* -> **hatu-**, *m-* -> **ham-**, *wa-* -> **hawa-**.\n   - **Hatua ya 2 (Kuondoa Kiambishi cha Wakati)**: Kiambishi **-na- hufutwa kabisa** (hakuna kiambishi cha wakati kinachobaki).\n   - **Hatua ya 3 (Mabadiliko ya Irabu ya Mwisho)**: Irabu ya mwisho ya shina la Kibantu **-a hubadilika kuwa -i** (*soma* -> *somi*, *pika* -> *piki*).\n   - *Kumbuka*: Vitenzi vya asili ya kigeni/Kiarabu vinavyoishia na *-e, -i, -u* **havibadiliki irabu zake za mwisho** (*safiri* -> *sisafiri*, *fahamu* -> *hafahamu*, *jibu* -> *hajibu*).\n\n2. **Mnyambuliko Kamili wa Nafsi Zote (Present Negation Paradigm)**:\n   - *ninasoma* -> **sisomi** (I am not reading)\n   - *unasoma* -> **husomi** (you are not reading)\n   - *anasoma* -> **hasomi** (he/she is not reading)\n   - *tunasoma* -> **hatusomi** (we are not reading)\n   - *mnasoma* -> **hamsomi** (you all are not reading)\n   - *wanasoma* -> **hawasomi** (they are not reading)\n\n3. **Vitenzi vya Silabi Moja (Monosyllabic Verbs)**:\n   - Hupoteza kiambishi 'ku-': *kula* -> **sili**, *kunywa* -> **hunywi**, *kuja* -> **haji**, *kwenda* -> **haendi**.",
      "examples": [
        {
          "target": "Mimi sisomi gazeti sasa hivi kwa sababu ninaandika barua pepe ya dharura.",
          "reading": "Mi-mi si-so-mi ga-ze-ti sa-sa hi-vi kwa sa-ba-bu ni-na-a-ndi-ka ba-ru-a pe-pe ya dha-ru-ra. [ˈmimi siˈsɔmi ɡɑˈzɛti ˈsɑsɑ ˈhivi kwɑ sɑˈbɑbu ninɑɑnˈdikɑ bɑˈruɑ ˈpɛpɛ jɑ ðɑˈrurɑ] (MEE-mee see-SOH-mee gah-ZAY-tee SAH-sah HEE-vee kwah sah-BAH-boo nee-nah-ahn-DEE-kah bah-ROO-ah PAY-pay yah thah-ROO-rah)",
          "translation": "I am not reading [negated present 1st person: sisomi] the newspaper right now because I am writing an urgent email."
        },
        {
          "target": "Wanafunzi hawa hawali chakula darasani na hawanywi maji wakati wa mtihani.",
          "reading": "Wa-na-fu-nzi ha-wa ha-wa-li cha-ku-la da-ra-sa-ni na ha-wa-nywi ma-ji wa-ka-ti wa mti-ha-ni. [wɑnɑˈfunzi ˈhɑwɑ hɑˈwɑli tʃɑˈkulɑ dɑrɑˈsɑni nɑ hɑˈwɑɲwi ˈmɑʤi wɑˈkɑti wɑ mtiˈhɑni] (wah-nah-FOON-zee HAH-wah hah-WAH-lee chah-KOO-lah dah-rah-SAH-nee nah hah-WAH-nywee MAH-jee wah-KAH-tee wah m-tee-HAH-nee)",
          "translation": "These students do not eat [negated present monosyllabic -la: hawali] food in class and do not drink [negated present monosyllabic -nywa: hawanywi] water during the exam."
        },
        {
          "target": "Yeye hasafiri leo kwa sababu anafanya kazi ofisini hadi jioni.",
          "reading": "Ye-ye ha-sa-fi-ri le-o kwa sa-ba-bu a-na-fa-nya ka-zi o-fi-si-ni ha-di ji-o-ni. [ˈjɛjɛ hɑsɑˈfiri ˈlɛɔ kwɑ sɑˈbɑbu ɑnɑˈfɑɲɑ ˈkɑzi ɔfiˈsini ˈhɑdi ʤiˈɔni] (YAY-yay hah-sah-FEE-ree LAY-oh kwah sah-BAH-boo ah-nah-FAH-nyah KAH-zee oh-fee-SEE-nee HAH-dee jee-OH-nee)",
          "translation": "He is not traveling [negated present Arabic loan verb ending in -i: hasafiri] today because he is working in the office until evening."
        }
      ],
      "mnemonics": [
        "Ukanushaji Wakati Uliopo: Si- / Hu- / Ha- / Hatu- / Ham- / Hawa-, tupa -NA-, badili -A kuwa -I (sisomi, husomi, hasomi)!"
      ],
      "culturalNotes": [
        "Katika lugha ya heshima ya Kiswahili, kukataa au kukanusha jambo huanza na kauli ya staha kama 'Samahani, sifahamu' (Excuse me, I do not understand) au 'La asante, sili sasa' (No thank you, I am not eating now)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapokanusha sentensi \"Mimi ninasoma kitabu\" katika wakati uliopo, muundo sahihi ni upi?",
          "options": [
            "Mimi sisomi kitabu. (I am not reading a book - Correct present tense negation with 'si-...-i')",
            "Mimi sinasoma kitabu (Kosa la kubakiza kiambishi '-na-')",
            "Mimi nisomi kitabu (Kosa la kutobadili kiambishi nafsi kuwa hasi)",
            "Mimi hasomi kitabu (Kosa la kutumia kiambishi cha nafsi ya tatu)"
          ],
          "answerIndex": 0,
          "explanation": "Katika ukanushaji wa wakati uliopo kwa nafsi ya kwanza (Mimi), «ni-» inakuwa «si-», «-na-» inafutwa, na «-a» inakuwa «-i»: «sisomi»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inakanusha tendo la kula (kitenzi cha silabi moja) katika wakati uliopo kwa usahihi?",
          "options": [
            "Mtoto hali chakula kwa sababu anajisikia vibaya. (The child is not eating food because he feels unwell - Correct monosyllabic negation 'hali')",
            "Mtoto hakula chakula sasa hivi (Wakati uliopita badala ya uliopo)",
            "Mtoto hanakula chakula mezani (Kosa la kuweka -na- na -ku-)",
            "Mtoto hasomi chakula leo (Kitenzi kisicho na maana katika muktadha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kula» katika ukanushaji wa wakati uliopo kinapoteza «ku-» na kubadili «-a» kuwa «-i»: «hali»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua kanuni sahihi inayotawala ukanushaji wa wakati uliopo katika lugha ya Kiswahili:",
          "options": [
            "Kiambishi cha wakati '-na-' hufutwa kabisa, viambishi nafsi hasi hutumika (si-, hu-, ha-, hatu-, ham-, hawa-), na irabu ya mwisho '-a' hubadilika kuwa '-i' kwa vitenzi vya Kibantu. (Tense marker -na- is dropped, negative subject prefixes are used, and final -a becomes -i for Bantu verbs.)",
            "Kiambishi '-na-' hubadilishwa kuwa '-li-'.",
            "Vitenzi vyote huongezewa herufi 'z' mwishoni.",
            "Ukanushaji wa wakati uliopo unaweka neno 'hapana' katikati ya kitenzi."
          ],
          "answerIndex": 0,
          "explanation": "«Kiambishi cha wakati '-na-' hufutwa kabisa, viambishi nafsi hasi hutumika (si-, hu-, ha-, hatu-, ham-, hawa-), na irabu ya mwisho '-a' hubadilika kuwa '-i' kwa vitenzi vya Kibantu.» ndiyo kanuni kuu ya sarufi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u7-l2": {
    "id": "sw-u7-l2",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 2,
    "title": "Ukanushaji wa Wakati Uliopita (Past Tense Negation: ha-...-ku-)",
    "level": "A2",
    "objective": "Kutambua na kutumia muundo wa ukanushaji wa Wakati Uliopita: kubadilisha kiambishi cha wakati '-li-' kuwa '-ku-', kutumia viambishi hasi vya nafsi (si-, hu-, ha-, hatu-, ham-, hawa-), na kuhifadhi irabu ya asili ya kitenzi bila kuibadilisha.",
    "presentation": {
      "explanation": "Ukanushaji wa Wakati Uliopita katika Kiswahili (Past Tense Negation: ha-...-ku- / si-...-ku-):\n\n1. **Kanuni Kuu za Ukanushaji wa Wakati Uliopita**:\n   - **Hatua ya 1 (Viambishi Hasi vya Nafsi)**: *ni-* -> **si-**, *u-* -> **hu-**, *a-* -> **ha-**, *tu-* -> **hatu-**, *m-* -> **ham-**, *wa-* -> **hawa-**.\n   - **Hatua ya 2 (Kiambishi cha Ukanusho wa Wakati Uliopita)**: Kiambishi **-li- hubadilishwa na kuwa -ku-**.\n   - **Hatua ya 3 (Irabu ya Mwisho)**: Irabu ya mwisho ya shina la kitenzi **haibadiliki kamwe (inabaki -a)** (*soma* -> *sikusoma*).\n\n2. **Mnyambuliko Kamili wa Nafsi Zote (Past Negation Paradigm)**:\n   - *nilisoma* -> **sikusoma** (I did not read)\n   - *ulisoma* -> **hukusoma** (you did not read)\n   - *alisoma* -> **hakusoma** (he/she did not read)\n   - *tulisoma* -> **hatukusoma** (we did not read)\n   - *mlisoma* -> **hamkusoma** (you all did not read)\n   - *walisoma* -> **hawakusoma** (they did not read)\n\n3. **Vitenzi vya Silabi Moja (Monosyllabic Verbs)**:\n   - Hupoteza kiambishi 'ku-' cha infinitive kwa sababu kiambishi cha ukanusho '-ku-' kinachukua nafasi yake: *kula* -> **sikula**, *kunywa* -> **hakunywa**, *kuja* -> **hawakuja**, *kwenda* -> **hatukwenda**.",
      "examples": [
        {
          "target": "Jana mimi sikwenda sokoni na sikununua matunda kwa sababu mvua kubwa ilinyesha.",
          "reading": "Ja-na mi-mi si-kwe-nda so-ko-ni na si-ku-nu-nua ma-tu-nda kwa sa-ba-bu mvu-a mku-bwa i-li-nye-sha. [ˈʤɑnɑ ˈmimi siˈkwɛndɑ sɔˈkɔni nɑ sikunuˈnuɑ mɑˈtundɑ kwɑ sɑˈbɑbu ˈmvuɑ mˈkubwɑ ilinɲɛˈʃɑ] (JAH-nah MEE-mee see-KWAYN-dah soh-KOH-nee nah see-koo-NOO-noo-ah mah-TOON-dah kwah sah-BAH-boo MVOO-ah M-KOO-bwah ee-lee-NYAY-shah)",
          "translation": "Yesterday I did not go [negated past monosyllabic: sikwenda] to the market and did not buy [negated past 1st person: sikununua] fruits because heavy rain fell."
        },
        {
          "target": "Wageni hawakuja jana jioni wala hawakula chakula tulichowaandalia.",
          "reading": "Wa-ge-ni ha-wa-ku-ja ja-na ji-o-ni wa-la ha-wa-ku-la cha-ku-la tu-li-cho-wa-a-nda-li-a. [wɑˈɡɛni hɑwɑˈkuʤɑ ˈʤɑnɑ ʤiˈɔni ˈwɑlɑ hɑwɑˈkulɑ tʃɑˈkulɑ tulitʃɔwɑɑndɑˈliɑ] (wah-GAY-nee hah-wah-KOO-jah JAH-nah jee-OH-nee WAH-lah hah-wah-KOO-lah chah-KOO-lah too-lee-choh-wah-ahn-dah-LEE-ah)",
          "translation": "The guests did not come [negated past monosyllabic: hawakuja] yesterday evening nor did they eat [negated past monosyllabic: hawakula] the food we prepared for them."
        },
        {
          "target": "Sisi hatukusahau ahadi yetu na hatukufika kwa kuchelewa mkutanoni.",
          "reading": "Si-si ha-tu-ku-sa-hau a-ha-di ye-tu na ha-tu-ku-fi-ka kwa ku-che-le-wa mku-ta-no-ni. [ˈsisi hɑtukuˈsɑhɑu ɑˈhɑdi ˈjɛtu nɑ hɑtukuˈfikɑ kwɑ kutʃɛˈlɛwɑ mkutɑˈnɔni] (SEE-see hah-too-koo-SAH-hah-oo ah-HAH-dee YAY-too nah hah-too-koo-FEE-kah kwah koo-chay-LAY-wah m-koo-tah-noh-NEE)",
          "translation": "We did not forget [negated past 1st plural: hatukusahau] our promise and did not arrive [negated past 1st plural: hatukufika] late to the meeting."
        }
      ],
      "mnemonics": [
        "Ukanushaji Wakati Uliopita: Badili -LI- kuwa -KU-, acha irabu ya mwisho kama ilivyo (sikusoma, hukusoma, hakusoma, hatukusoma)!"
      ],
      "culturalNotes": [
        "Ukanushaji wa wakati uliopita hutumiwa sana katika masimulizi ya kihistoria na shuhuda za kimahakama na kiserikali katika nchi za Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapokanusha kauli \"Sisi tulisoma makala ile jana\", muundo sahihi wa wakati uliopita ni upi?",
          "options": [
            "Sisi hatukusoma makala ile jana. (We did not read that article yesterday - Correct past tense negation with 'hatu-ku-soma')",
            "Sisi hatulisoma makala ile jana (Kosa la kubakiza kiambishi '-li-')",
            "Sisi hatukusomi makala ile jana (Kosa la kubadili irabu kuwa '-i' katika wakati uliopita)",
            "Sisi sikusoma makala ile jana (Kosa la upatanisho wa nafsi ya kwanza umoja badala ya wingi)"
          ],
          "answerIndex": 0,
          "explanation": "Katika wakati uliopita, «tuli-» inabadilika kuwa «hatuku-» na shina linabaki «soma»: «hatukusoma»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mtu anapoulizwa kama alikunywa chai jana asubuhi na akajibu hapana, anasema nini kwa Kiswahili fasaha?",
          "options": [
            "Sikunywa chai jana asubuhi. (I did not drink tea yesterday morning - Correct past monosyllabic negation 'si-ku-nywa')",
            "Sikukunywa chai jana asubuhi (Kosa la kurudia kiambishi cha 'ku')",
            "Sinakunywa chai jana asubuhi (Kosa la wakati uliopo)",
            "Sitakunywa chai jana asubuhi (Kosa la wakati ujao na 'jana')"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kunywa» katika ukanusho wa wakati uliopita kinakuwa «sikunywa» (hakirudii 'ku' mara mbili)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha kanuni kamili na sahihi ya ukanushaji wa wakati uliopita katika Kiswahili:",
          "options": [
            "Katika wakati uliopita, kiambishi '-li-' hubadilishwa na kuwa kiambishi '-ku-', viambishi hasi vya nafsi hutumika, na irabu ya mwisho ya kitenzi haibadiliki kamwe. (In past tense negation, -li- becomes -ku-, negative subject prefixes are prefixed, and the final vowel never changes.)",
            "Katika wakati uliopita, kitenzi hupoteza silabi zote.",
            "Wakati uliopita unakataza matumizi ya kiambishi '-ku-'.",
            "Kitenzi cha wakati uliopita hubadilika kuwa nomino kinapokanushwa."
          ],
          "answerIndex": 0,
          "explanation": "«Katika wakati uliopita, kiambishi '-li-' hubadilishwa na kuwa kiambishi '-ku-', viambishi hasi vya nafsi hutumika, na irabu ya mwisho ya kitenzi haibadiliki kamwe.» ndiyo kanuni halisi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u7-l3": {
    "id": "sw-u7-l3",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 3,
    "title": "Ukanushaji wa Wakati Ujao (Future Tense Negation: ha-...-ta-)",
    "level": "A2",
    "objective": "Kutambua na kutumia muundo wa ukanushaji wa Wakati Ujao: kiambishi cha wakati '-ta-' hubakia bila mabadiliko, viambishi hasi vya nafsi hutumika mwanzoni, na vitenzi vya silabi moja huhifadhi kiambishi cha 'ku-'.",
    "presentation": {
      "explanation": "Ukanushaji wa Wakati Ujao katika Kiswahili (Future Tense Negation: ha-...-ta- / si-...-ta-):\n\n1. **Kanuni Kuu za Ukanushaji wa Wakati Ujao**:\n   - **Hatua ya 1 (Viambishi Hasi vya Nafsi)**: *ni-* -> **si-**, *u-* -> **hu-**, *a-* -> **ha-**, *tu-* -> **hatu-**, *m-* -> **ham-**, *wa-* -> **hawa-**.\n   - **Hatua ya 2 (Kiambishi cha Wakati Ujao)**: Kiambishi **-ta- kinabaki vile vile bila kubadilika wala kufutwa**!\n   - **Hatua ya 3 (Irabu ya Mwisho)**: Irabu ya mwisho ya shina la kitenzi **haibadiliki (inabaki -a)** (*soma* -> *sitasoma*).\n\n2. **Mnyambuliko Kamili wa Nafsi Zote (Future Negation Paradigm)**:\n   - *nitasoma* -> **sitasoma** (I will not read)\n   - *utasoma* -> **hutasoma** (you will not read)\n   - *atasoma* -> **hatasoma** (he/she will not read)\n   - *tutasoma* -> **hatutasoma** (we will not read)\n   - *mtasoma* -> **hamtasoma** (you all will not read)\n   - *watasoma* -> **hawatasooma -> hawatasoma** (they will not read)\n\n3. **Vitenzi vya Silabi Moja (Monosyllabic Verbs in Future Negation)**:\n   - **Huhifadhi kiambishi 'ku-'**: *kula* -> **sitakula**, *kunywa* -> **hatakunywa**, *kuja* -> **hawatakuja**, *kwenda* -> **hatutakwenda**.",
      "examples": [
        {
          "target": "Kesho mimi sitasafiri kwenda mbali na sitakula chakula cha mkahawani.",
          "reading": "Ke-sho mi-mi si-ta-sa-fi-ri kwe-nda mba-li na si-ta-ku-la cha-ku-la cha mka-ha-wa-ni. [ˈkɛʃɔ ˈmimi sitɑsɑˈfiri ˈkwɛndɑ ˈmbɑli nɑ sitɑˈkulɑ tʃɑˈkulɑ tʃɑ mkɑhɑˈwɑni] (KAY-shoh MEE-mee see-tah-sah-FEE-ree KWAYN-dah M-BAH-lee nah see-tah-KOO-lah chah-KOO-lah chah m-kah-hah-wah-NEE)",
          "translation": "Tomorrow I will not travel [negated future 1st person: sitasafiri] far and will not eat [negated future monosyllabic: sitakula] restaurant food."
        },
        {
          "target": "Wanafunzi hawatachelewa kufika shuleni na hawatakosa kipindi cha kwanza.",
          "reading": "Wa-na-fu-nzi ha-wa-ta-che-le-wa ku-fi-ka shu-le-ni na ha-wa-ta-ko-sa ki-pi-ndi cha kwa-nza. [wɑnɑˈfunzi hɑwɑtɑtʃɛˈlɛwɑ kuˈfikɑ ʃuˈlɛni nɑ hɑwɑtɑˈkɔsɑ kiˈpindi tʃɑ ˈkwɑnzɑ] (wah-nah-FOON-zee hah-wah-tah-chay-LAY-wah koo-FEE-kah shoo-LAY-nee nah hah-wah-tah-KOH-sah kee-PEEN-dee chah KWAHN-zah)",
          "translation": "Students will not be late [negated future 3rd plural: hawatachelewa] arriving at school and will not miss [negated future 3rd plural: hawatakosa] the first period."
        },
        {
          "target": "Sisi hatutavunja kanuni za usalama na hatutakwenda kule usiku.",
          "reading": "Si-si ha-tu-ta-vu-nja ka-nu-ni za u-sa-la-ma na ha-tu-ta-kwe-nda ku-le u-si-ku. [ˈsisi hɑtutɑˈvunʤɑ kɑˈnuni zɑ usɑˈlɑmɑ nɑ hɑtutɑˈkwɛndɑ ˈkulɛ uˈsiku] (SEE-see hah-too-tah-VOON-jah kah-NOO-nee zah oo-sah-LAH-mah nah hah-too-tah-KWAYN-dah KOO-lay oo-SEE-koo)",
          "translation": "We will not break [negated future 1st plural: hatutavunja] safety regulations and will not go [negated future monosyllabic: hatutakwenda] there at night."
        }
      ],
      "mnemonics": [
        "Ukanushaji Wakati Ujao: -TA- inabaki! Si- / Hu- / Ha- + -ta- + kitenzi (sitasoma, hutasoma, hatasoma, hatutasoma)!"
      ],
      "culturalNotes": [
        "Katika mipango ya kazi na mikataba ya kijamii, kukanusha wakati ujao kwa kutumia 'hatutasahau' (we will not forget) huonyesha dhamira thabiti ya uaminifu na uwajibikaji."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapokanusha mpango wa kusafiri kesho kwa nafsi ya pili umoja (Wewe), sentensi sahihi ni ipi?",
          "options": [
            "Wewe hutasafiri kesho asubuhi. (You will not travel tomorrow morning - Correct 2nd person singular future negation 'hu-ta-safiri')",
            "Wewe husafiri kesho asubuhi (Wakati uliopo badala ya wakati ujao)",
            "Wewe hukusafiri kesho asubuhi (Wakati uliopita uliotatanishwa na 'kesho')",
            "Wewe sitasafiri kesho asubuhi (Kosa la nafsi ya kwanza badala ya ya pili)"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi hasi cha «Wewe» ni «hu-» kikiungana na kiambishi cha wakati ujao «-ta-» kupata «hutasafiri»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inakanusha vitenzi vya silabi moja katika wakati ujao kwa usahihi kabisa?",
          "options": [
            "Wageni hawatakuja kesho kutwa na hawatakula chakula cha usiku. (Guests will not come the day after tomorrow and will not eat dinner - Flawless future monosyllabic negation)",
            "Wageni hawataja kesho na hawatala chakula (Kosa la kufuta kiambishi 'ku-')",
            "Wageni hawajaja jana jioni (Wakati timilifu uliotatanishwa)",
            "Wageni hawanywi maji jana asubuhi (Mchanganyiko potofu wa nyakati)"
          ],
          "answerIndex": 0,
          "explanation": "Katika ukanushaji wa wakati ujao, vitenzi vya silabi moja huhifadhi «ku-»: «hawatakuja» na «hawatakula»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Ni jambo gani la kipekee kuhusu kiambishi '-ta-' katika ukanushaji wa wakati ujao tofauti na wakati uliopo (-na-)?",
          "options": [
            "Kiambishi '-ta-' hakifutwi kamwe bali kinabakia kwenye kitenzi kikiambatanishwa na viambishi hasi vya nafsi (sitasoma, hutasoma, hatasoma). (Prefix -ta- is never dropped, but remains in the verb prefixed with negative subject markers.)",
            "Kiambishi '-ta-' hubadilika kuwa '-ka-'.",
            "Kiambishi '-ta-' hufutwa kila wakati.",
            "Wakati ujao hauwezi kukanushwa katika Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Kiambishi '-ta-' hakifutwi kamwe bali kinabakia kwenye kitenzi kikiambatanishwa na viambishi hasi vya nafsi (sitasoma, hutasoma, hatasoma).» ndiyo sifa ya pekee ya wakati ujao."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u7-l4": {
    "id": "sw-u7-l4",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 4,
    "title": "Ukanushaji wa Wakati Timilifu (Perfective Negation: ha-...-ja- / Bado)",
    "level": "A2",
    "objective": "Kuelewa na kutumia ukanushaji wa Wakati Timilifu: kubadilisha kiambishi '-me-' kuwa '-ja-' (kinachomaanisha 'not yet' / bado), kutumia viambishi hasi vya nafsi, na kuondoa 'ku-' katika vitenzi vya silabi moja.",
    "presentation": {
      "explanation": "Ukanushaji wa Wakati Timilifu katika Kiswahili (Perfective Negation: ha-...-ja- / Not Yet):\n\n1. **Kanuni Kuu za Ukanushaji wa Wakati Timilifu**:\n   - **Hatua ya 1 (Viambishi Hasi vya Nafsi)**: *ni-* -> **si-**, *u-* -> **hu-**, *a-* -> **ha-**, *tu-* -> **hatu-**, *m-* -> **ham-**, *wa-* -> **hawa-**.\n   - **Hatua ya 2 (Kiambishi cha Ukanusho wa Wakati Timilifu)**: Kiambishi **-me- hubadilishwa na kuwa -ja-**.\n   - **Maana ya Kisemantiki**: Kiambishi **-ja-** kinamaanisha kuwa tendo **halijatendeka bado** (Not Yet), likiwa na matarajio ya kufanyika baadaye.\n   - **Hatua ya 3 (Irabu ya Mwisho)**: Irabu ya mwisho ya shina la kitenzi **haibadiliki (inabaki -a)** (*soma* -> *sijasoma*).\n\n2. **Mnyambuliko Kamili wa Nafsi Zote (Perfective Negation Paradigm)**:\n   - *nimesoma* -> **sijasoma** (I have not yet read)\n   - *umefika* -> **hujafika** (you have not yet arrived)\n   - *ameondoka* -> **hajaondoka** (he/she has not yet left)\n   - *tumekamilisha* -> **hatujakamilisha** (we have not yet completed)\n   - *mmemaliza* -> **hamjamaliza** (you all have not yet finished)\n   - *wameanza* -> **hawajaanza** (they have not yet started)\n\n3. **Vitenzi vya Silabi Moja (Monosyllabic Verbs in -ja-)**:\n   - **Hupoteza kiambishi 'ku-'**: *kula* -> **sijala** (I haven't eaten yet), *kunywa* -> **hajanywa**, *kuja* -> **hawajaja**, *kwenda* -> **hatujaenda**.",
      "examples": [
        {
          "target": "Mimi sijala chakula cha mchana kwa sababu mpishi hajamaliza kupika.",
          "reading": "Mi-mi si-ja-la cha-ku-la cha mcha-na kwa sa-ba-bu mpi-shi ha-ja-ma-li-za ku-pi-ka. [ˈmimi siˈʤɑlɑ tʃɑˈkulɑ tʃɑ mˈtʃɑnɑ kwɑ sɑˈbɑbu ˈmpiʃi hɑʤɑmɑˈlizɑ kuˈpikɑ] (MEE-mee see-JAH-lah chah-KOO-lah chah M-CHAH-nah kwah sah-BAH-boo M-PEE-shee hah-jah-mah-LEE-zah koo-PEE-kah)",
          "translation": "I have not yet eaten [negated perfective monosyllabic: sijala] lunch because the cook has not yet finished [negated perfective 3rd person: hajamaliza] cooking."
        },
        {
          "target": "Wageni kutoka mbali hawajafika hotelini na mabasi yao hayajatua kituoni.",
          "reading": "Wa-ge-ni ku-to-ka mba-li ha-wa-ja-fi-ka ho-te-li-ni na ma-ba-si ya-o ha-ya-ja-tu-a ki-tu-o-ni. [wɑˈɡɛni kuˈtɔkɑ ˈmbɑli hɑwɑʤɑˈfikɑ hɔtɛˈlini nɑ mɑˈbɑsi ˈjɑɔ hɑjɑʤɑˈtuɑ kituˈɔni] (wah-GAY-nee koo-TOH-kah M-BAH-lee hah-wah-jah-FEE-kah hoh-tay-LEE-nee nah mah-BAH-see YAH-oh hah-yah-jah-TOO-ah kee-too-oh-NEE)",
          "translation": "Guests from afar have not yet arrived [negated perfective 3rd plural: hawajafika] at the hotel and their buses have not yet arrived [negated class 6: hayajatua] at the station."
        },
        {
          "target": "Sisi hatujasoma kitabu kile kipya lakini mwalimu hajaanika matokeo bado.",
          "reading": "Si-si ha-tu-ja-so-ma ki-ta-bu ki-le kpy-a la-ki-ni mwa-li-mu ha-ja-a-ni-ka ma-to-ke-o ba-do. [ˈsisi hɑtuʤɑˈsɔmɑ kiˈtɑbu ˈkilɛ ˈmpjɑ lɑˈkini mwɑˈlimu hɑʤɑɑˈnikɑ mɑtɔˈkɛɔ ˈbɑdɔ] (SEE-see hah-too-jah-SOH-mah kee-TAH-boo KEE-lay M-PYAH lah-KEE-nee mwah-LEE-moo hah-jah-ah-NEE-kah mah-toh-KAY-oh BAH-doh)",
          "translation": "We have not yet read [negated perfective 1st plural: hatujasoma] that new book, but the teacher has not yet posted [negated perfective: hajaanika] results yet."
        }
      ],
      "mnemonics": [
        "Ukanushaji Wakati Timilifu: Badili -ME- kuwa -JA- (sijasoma = I haven't read yet, hawajaja = they haven't come yet, sijala = I haven't eaten yet)!"
      ],
      "culturalNotes": [
        "Neno 'bado' (still / not yet) mara nyingi huongezwa mwishoni mwa sentensi yenye kiambishi cha '-ja-' ili kusisitiza: 'Sijala bado' (I haven't eaten yet)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayokanusha \"Wageni wamefika nyumbani\" katika wakati timilifu ni ipi?",
          "options": [
            "Wageni hawajafika nyumbani bado. (Guests have not yet arrived home - Correct perfective negation 'hawaja-fika')",
            "Wageni hawamefika nyumbani (Kosa la kuweka kiambishi 'hawa-' juu ya '-me-')",
            "Wageni hawafiki jana asubuhi (Mchanganyiko wa wakati uliopo na 'jana')",
            "Wageni wasifike nyumbani kesho (Muundo wa utegemezi)"
          ],
          "answerIndex": 0,
          "explanation": "Ukanushaji wa «wamefika» ni «hawajafika» (kiambishi «-me-» hubadilika kuwa «-ja-»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapomjulisha mtu kuwa \"Hujala chakula bado lakini unajiandaa kula\", unatumia kauli gani fasaha?",
          "options": [
            "Mimi sijala chakula bado. (I have not yet eaten food - Correct monosyllabic perfective negation 'sijala')",
            "Mimi sijakula chakula bado (Kosa la kubakiza 'ku' katika kiambishi cha -ja-)",
            "Mimi simeli chakula bado (Muundo usio wa kisarufi)",
            "Mimi sikula chakula kesho kutwa (Kutatanisha uliopita na siku zijazo)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kula» katika ukanusho wa wakati timilifu kinapoteza «ku-» na kuwa «sijala»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Kiambishi '-ja-' katika vitenzi vya Kiswahili hufanya kazi gani ya kisarufi na kisemantiki?",
          "options": [
            "Hukanusha wakati timilifu (-me-) na kutoa maana ya tendo ambalo halijatendeka bado (not yet) lakini linatarajiwa kutendeka. (Negates perfective aspect -me- meaning 'not yet' with expectation of future completion.)",
            "Hueleza amri ya moja kwa moja ya kufanya kazi haraka.",
            "Hutumika kueleza hadithi za kale za vizazi vilivyopita pekee.",
            "Huonyesha kuwa tendo lilifanyika zamani za kale sana."
          ],
          "answerIndex": 0,
          "explanation": "«Hukanusha wakati timilifu (-me-) na kutoa maana ya tendo ambalo halijatendeka bado (not yet) lakini linatarajiwa kutendeka.» ndiyo kazi rasmi ya kiambishi «-ja-»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u7-l5": {
    "id": "sw-u7-l5",
    "subject": "swahili",
    "unit": 7,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ukanushaji wa Nyakati Zote (Grand Synthesis of Swahili Verb Negation)",
    "level": "A2",
    "objective": "Kuunganisha mifumo yote minne ya ukanushaji katika Kiswahili: Wakati Uliopo (-na- -> ha-...-i), Wakati Uliopita (-li- -> ha-...-ku-), Wakati Ujao (-ta- -> ha-...-ta-), na Wakati Timilifu (-me- -> ha-...-ja-) katika ulinganifu na ufasaha kamili.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ukanushaji wa Nyakati Zote (Grand Synthesis of Swahili Verb Negation):\n\n1. **Jedwali la Ulinganifu wa Ukanushaji (Comprehensive Negation Matrix)**:\n   - **Wakati Uliopo (-na-)**: *ninasoma* -> **sisomi** | *anakula* -> **hali** (tupa *-na-*, badili *-a* kuwa *-i*, ondoa *ku-*).\n   - **Wakati Uliopita (-li-)**: *nilisoma* -> **sikusoma** | *alikula* -> **hakula** (badili *-li-* kuwa *-ku-*, irabu ya mwisho inabaki *-a*, ondoa *ku-* ya pili).\n   - **Wakati Ujao (-ta-)**: *nitasoma* -> **sitasoma** | *atakula* -> **hatakula** (*-ta-* inabaki, hifadhi *ku-* kwa silabi moja).\n   - **Wakati Timilifu (-me-)**: *nimesoma* -> **sijasoma** | *amekula* -> **hajala** (badili *-me-* kuwa *-ja-*, ondoa *ku-*).\n\n2. **Upatanisho wa Ngeli katika Ukanushaji**:\n   - KI-VI: *hakifiki / havifiki* (uliopo), *hakikufika / havikufika* (uliopita), *hakitafika / havitafika* (ujao), *hakijafika / havijafika* (timilifu).\n   - JI-MA: *halifiki / hayafiki*, *halikufika / hayakufika*, *halitafika / hayatafika*, *halijafika / hayajafika*.\n   - N-N: *haifiki / hazifiki*, *haikufika / hazikufika*, *haitafika / hazitafika*, *haijafika / hazijafika*.",
      "examples": [
        {
          "target": "Mimi sisomi sasa, sikusoma jana, sitasoma kesho, na sijamaliza kazi zangu.",
          "reading": "Mi-mi si-so-mi sa-sa, si-ku-so-ma ja-na, si-ta-so-ma ke-sho, na si-ja-ma-li-za ka-zi za-ngu. [ˈmimi siˈsɔmi ˈsɑsɑ sikuˈsɔmɑ ˈʤɑnɑ sitɑˈsɔmɑ ˈkɛʃɔ nɑ siʤɑmɑˈlizɑ ˈkɑzi ˈzɑŋɡu] (MEE-mee see-SOH-mee SAH-sah, see-koo-SOH-mah JAH-nah, see-tah-SOH-mah KAY-shoh, nah see-jah-mah-LEE-zah KAH-zee ZAHN-goo)",
          "translation": "I am not reading now [present neg: sisomi], did not read yesterday [past neg: sikusoma], will not read tomorrow [future neg: sitasoma], and have not yet finished [perfective neg: sijamaliza] my tasks."
        },
        {
          "target": "Wanafunzi hawakuchelewa jana, hawachelewi leo, na hawatachelewa kesho asubuhi.",
          "reading": "Wa-na-fu-nzi ha-wa-ku-che-le-wa ja-na, ha-wa-che-le-wi le-o, na ha-wa-ta-che-le-wa ke-sho a-su-bu-hi. [wɑnɑˈfunzi hɑwɑkutʃɛˈlɛwɑ ˈʤɑnɑ hɑwɑtʃɛˈlɛwi ˈlɛɔ nɑ hɑwɑtɑtʃɛˈlɛwɑ ˈkɛʃɔ ɑsuˈbuhi] (wah-nah-FOON-zee hah-wah-koo-chay-LAY-wah JAH-nah, hah-wah-chay-LAY-wee LAY-oh, nah hah-wah-tah-chay-LAY-wah KAY-shoh ah-soo-BOO-hee)",
          "translation": "Students were not late yesterday [past neg: hawakuchelewa], are not late today [present neg: hawachelewi], and will not be late [future neg: hawatachelewa] tomorrow morning."
        },
        {
          "target": "Umahiri wa kukanusha nyakati zote katika Kiswahili unajenga msingi imara wa mawasiliano bayana na fasaha katika nyanja zote.",
          "reading": "U-ma-hi-ri wa ku-ka-nu-sha nya-ka-ti zo-te ka-ti-ka Ki-swa-hi-li u-na-je-nga msi-ngi i-ma-ra wa ma-wa-si-li-a-no ba-ya-na na fa-sa-ha ka-ti-ka nya-nja zo-te. [umɑˈhiri wɑ kukɑˈnuʃɑ ɲɑˈkɑti ˈzɔtɛ kɑˈtikɑ kiswɑˈhili unɑˈʤɛŋɡɑ ˈmsiŋɡi iˈmɑrɑ wɑ mɑwɑsiliˈɑnɔ bɑˈjɑnɑ nɑ fɑˈsɑhɑ kɑˈtikɑ ˈɲɑnʤɑ ˈzɔtɛ] (oo-mah-HEE-ree wah koo-kah-NOO-shah nyah-KAH-tee ZOH-tay kah-TEE-kah kee-swah-HEE-lee oo-nah-JAYN-gah m-SEEN-gee ee-MAH-rah wah mah-wah-see-lee-AH-noh bah-YAH-nah nah fah-SAH-hah kah-TEE-kah NYAHN-jah ZOH-tay)",
          "translation": "Mastery of negating all tenses in Swahili [negation grand synthesis: ukanushaji wa nyakati] builds a solid foundation for clear and eloquent communication across all disciplines."
        }
      ],
      "mnemonics": [
        "Muhtasari wa Ukanushaji: Uliopo = Si-...-i, Uliopita = Si-...-ku-...-a, Ujao = Si-...-ta-...-a, Timilifu = Si-...-ja-...-a!"
      ],
      "culturalNotes": [
        "Ufasaha wa kutofautisha kati ya 'sikufanya' (sikutenda wakati uliopita) na 'sijafanya' (sijatenda bado lakini ninatarajia kutenda) ni kigezo kikuu cha uzungumzaji wa kiwango cha juu katika jamii ya Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha ulinganifu sahihi wa ukanushaji katika nyakati zote nne kuu za Kiswahili?",
          "options": [
            "Jana sikula, leo sili, kesho sitakula, na chakula cha jioni sijala bado. (Yesterday I didn't eat, today I am not eating, tomorrow I won't eat, and dinner I haven't eaten yet - Flawless multi-tense negation synthesis)",
            "Jana silikula, leo sinakula, kesho sitakula, na bado sijakula (Mchanganyiko wa makosa mengi ya ukanushaji)",
            "Jana sikusoma kesho na leo sitasoma jana (Mvurugiko usio na mantiki wa vielezi vya nyakati)",
            "Chakula chote hakikula wanafunzi jana (Upotoshaji wa upatanisho wa ngeli)"
          ],
          "answerIndex": 0,
          "explanation": "«Jana sikula, leo sili, kesho sitakula, na chakula cha jioni sijala bado.» inatumia miundo sahihi ya ukanusho: uliopita (sikula), uliopo (sili), ujao (sitakula), na timilifu (sijala)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 7, ni tofauti gani muhimu ya kimaana iliyopo kati ya 'Hakufanya kazi' na 'Hajafanya kazi'?",
          "options": [
            "'Hakufanya kazi' inamaanisha tendo halikutendeka wakati uliopita, wakati 'Hajafanya kazi' inamaanisha hajatenda bado lakini anaweza kutenda baadaye. ('Hakufanya kazi' denotes past non-occurrence, while 'Hajafanya kazi' indicates not yet done with future expectation)",
            "'Hakufanya' inatumika tu kwa wanawake na 'Hajafanya' kwa wanaume",
            "Hakuna tofauti yoyote ya kimaana kati ya misemo hiyo miwili",
            "'Hajafanya kazi' inamaanisha kazi ilikamilika zamani za kale"
          ],
          "answerIndex": 0,
          "explanation": "«Hakufanya» ni wakati uliopita (past negation), wakati «Hajafanya» ni wakati timilifu (perfective 'not yet')."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 7 ya Ukanushaji wa Vitenzi katika Kiswahili:",
          "options": [
            "Wageni hawakufika jana, hawafiki leo, hawatatutembelea kesho, na barua zao rasmi hazijawasili ofisini bado. (Guests did not arrive yesterday, are not arriving today, will not visit us tomorrow, and their official letters have not yet arrived at the office.)",
            "Wageni hakufika jana na leo hawanafika nyumbani.",
            "Mabasi yote hawatatua kituo wakati chakula halikuli mezani.",
            "Ukanushaji unakataza matumizi ya maneno 'jana', 'leo', na 'kesho'."
          ],
          "answerIndex": 0,
          "explanation": "«Wageni hawakufika jana, hawafiki leo, hawatatutembelea kesho, na barua zao rasmi hazijawasili ofisini bado.» inajumuisha ukanusho wa nyakati zote nne kwa ufasaha na upatanisho kamilifu wa ngeli."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u8-l1": {
    "id": "sw-u8-l1",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 1,
    "title": "Virejeshi vya Watendwa kwa Nafsi za Watu (Object Infixes for Human Persons: -ni-, -ku-, -m-, -tu-, -wa-)",
    "level": "A2",
    "objective": "Kutambua na kutumia virejeshi vya watendwa (Object Infixes / OP) kwa nafsi zote za kibinadamu: -ni- (me), -ku- (you sg), -m-/-mw- (him/her), -tu- (us), na -wa- (them/you pl) vilivyopachikwa ndani ya kitenzi kati ya kiambishi cha wakati na shina.",
    "presentation": {
      "explanation": "Virejeshi vya Watendwa kwa Nafsi za Watu (Object Infixes for Persons):\n\n1. **Dhana ya Kirejeshi cha Mtendwa (Object Infix / OP)**:\n   - Katika Kiswahili, kiwakilishi cha mtendwa (direct/indirect object pronoun) huingizwa **moja kwa moja ndani ya kitenzi** kama kiambishi cha kati.\n   - **Muundo wa Kitenzi chenye Kirejeshi cha Mtendwa**:\n     `Kiambishi Nafsi (SP) + Kiambishi Wakati (TM) + Kiambishi Mtendwa (OP) + Shina la Kitenzi`\n\n2. **Orodha ya Virejeshi vya Watu (Human Object Infixes)**:\n   - *Mimi* (me): **-ni-** (*a-na-**ni**-ona* -> **ananiona** = he sees me, *a-li-**ni**-saidia* -> **alinisaidia** = he helped me)\n   - *Wewe* (you sg): **-ku-** (*ni-na-**ku**-penda* -> **ninakupenda** = I love you, *tu-ta-**ku**-saidia* -> **tutakusaidia** = we will help you)\n   - *Yeye* (him/her): **-m-** kabla ya konsonanti, **-mw-** kabla ya irabu (*ni-na-**m**-fahamu* -> **ninamfahamu** = I know him, *ni-me-**mw**-ona* -> **nimemwona** = I have seen him/her)\n   - *Sisi* (us): **-tu-** (*wa-na-**tu**-ita* -> **wanatuita** = they are calling us, *a-li-**tu**-fundisha* -> **alitufundisha** = he taught us)\n   - *Wao* (them): **-wa-** (*ni-na-**wa**-penda* -> **ninawapenda** = I love them, *tu-ta-**wa**-tembelea* -> **tutawatembelea** = we will visit them)\n\n3. **Umuhimu wa Kisarufi**:\n   - Kirejeshi cha mtendwa ni **lazima kitumike** wakati mtendwa ni binadamu aliyetajwa wazi katika sentensi: *Ninamwona Juma* (I see Juma).",
      "examples": [
        {
          "target": "Mwalimu wetu ananifundisha lugha ya Kiswahili na anatusaidia kufanya mazoezi.",
          "reading": "Mwa-li-mu we-tu a-na-ni-fu-ndi-sha lu-gha ya Ki-swa-hi-li na a-na-tu-sa-i-dia ku-fa-nya ma-zo-e-zi. [mwɑˈlimu ˈwɛtu ɑnɑnifunˈdiʃɑ ˈluɣɑ jɑ kiswɑˈhili nɑ ɑnɑtusɑˈidiɑ kuˈfɑɲɑ mɑzɔˈɛzi] (mwah-LEE-moo WAY-too ah-nah-nee-foon-DEE-shah LOO-ghah yah kee-swah-HEE-lee nah ah-nah-too-sah-EE-dee-ah koo-FAH-nyah mah-zoh-AY-zee)",
          "translation": "Our teacher is teaching me [OP -ni-: ananifundisha] the Swahili language and helping us [OP -tu-: anatusaidia] do exercises."
        },
        {
          "target": "Mimi ninamfahamu daktari yule vizuri na jana nilimwona hospitalini.",
          "reading": "Mi-mi ni-na-mfa-ha-mu da-kta-ri yu-le vi-zu-ri na ja-na ni-li-mwo-na ho-spi-ta-li-ni. [ˈmimi ninɑmfɑˈhɑmu dɑkˈtɑri ˈjulɛ viˈzuri nɑ ˈʤɑnɑ nilimˈwɔnɑ hɔspitɑˈlini] (MEE-mee nee-nahm-fah-HAH-moo dahk-TAH-ree YOO-lay vee-ZOO-ree nah JAH-nah nee-leem-WOH-nah hoh-spee-tah-LEE-nee)",
          "translation": "I know that doctor [OP -m-: ninamfahamu] well and yesterday I saw him [OP -mw- before vowel: nilimwona] at the hospital."
        },
        {
          "target": "Wazazi wangu wanawapenda watoto wote na watawatembelea shuleni mwishoni mwa juma.",
          "reading": "Wa-za-zi wa-ngu wa-na-wa-pe-nda wa-to-to wo-te na wa-ta-wa-te-mbe-le-a shu-le-ni mwi-sho-ni mwa ju-ma. [wɑˈzɑzi ˈwɑŋɡu wɑnɑwɑˈpɛndɑ wɑˈtɔtɔ ˈwɔtɛ nɑ wɑtɑwɑtɛmbɛˈlɛɑ ʃuˈlɛni mwiˈʃɔni mwɑ ˈʤumɑ] (wah-ZAH-zee WAHN-goo wah-nah-wah-PAYN-dah wah-TOH-toh WOH-tay nah wah-tah-wah-tahm-bay-LAY-ah shoo-LAY-nee mwee-SHOH-nee mwah JOO-mah)",
          "translation": "My parents love all the children [OP -wa-: wanawapenda] and will visit them [OP -wa-: watawatembelea] at school this weekend."
        }
      ],
      "mnemonics": [
        "Virejeshi vya Watu: Mimi=-NI-, Wewe=-KU-, Yeye=-M-/-MW-, Sisi=-TU-, Wao=-WA- (ananiona, ninakusaidia, ninampenda, wanatuita, ninawatembelea)!"
      ],
      "culturalNotes": [
        "Matumizi ya virejeshi vya watendwa kwa watu ni alama ya lugha sanifu na heshima, yakionyesha utambuzi wa utu katika mawasiliano ya kila siku ya Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina kirejeshi sahihi cha mtendwa kinachomaanisha \"Yeye alitusaidia sisi jana\"?",
          "options": [
            "Yeye alitusaidia jana jioni. (He helped us yesterday evening - Correct 1st person plural object infix '-tu-')",
            "Yeye alinisaidia sisi jana (Kosa la kutumia '-ni-' ya umoja kwa 'sisi')",
            "Yeye alikusaidia sisi jana (Kosa la kutumia '-ku-' ya wewe)",
            "Yeye aliwasaidia sisi jana (Kosa la kutumia '-wa-' ya wao)"
          ],
          "answerIndex": 0,
          "explanation": "Kirejeshi cha mtendwa cha nafsi ya kwanza wingi (Sisi) ni «-tu-», hivyo kitenzi huwa «alitusaidia»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapotaka kusema \"Mimi ninamwona mwalimu yule\", kirejeshi kipi cha mtendwa kimetumika kabla ya shina '-ona'?",
          "options": [
            "-mw- (Kirejeshi cha nafsi ya tatu umoja kabla ya irabu: ninamwona)",
            "-wa- (Kirejeshi cha wingi)",
            "-ki- (Kirejeshi cha vitu)",
            "-ku- (Kirejeshi cha nafsi ya pili)"
          ],
          "answerIndex": 0,
          "explanation": "Kabla ya shina linaloanza na irabu kama «-ona», kirejeshi cha nafsi ya tatu umoja «-m-» hubadilika kuwa «-mw-»: «ninamwona»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua nafasi sahihi ya kirejeshi cha mtendwa (object infix) katika muundo wa kitenzi cha Kiswahili:",
          "options": [
            "Kirejeshi cha mtendwa huingizwa moja kwa moja kati ya kiambishi cha wakati na shina la kitenzi (mfano: a-na-m-penda). (Object infix is inserted directly between the tense marker and the verb root.)",
            "Kirejeshi cha mtendwa huwekwa mwanzoni kabisa mwa kitenzi.",
            "Kirejeshi cha mtendwa huwekwa mwishoni kabisa baada ya irabu ya mwisho.",
            "Kirejeshi cha mtendwa hutenganishwa kama neno tofauti linalojitegemea."
          ],
          "answerIndex": 0,
          "explanation": "«Kirejeshi cha mtendwa huingizwa moja kwa moja kati ya kiambishi cha wakati na shina la kitenzi (mfano: a-na-m-penda).» ndiyo kanuni sahihi ya kimofolojia."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u8-l2": {
    "id": "sw-u8-l2",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 2,
    "title": "Virejeshi vya Watendwa kwa Ngeli za Nomino (Object Infixes for Noun Classes: KI-VI, M-MI, JI-MA, N-N)",
    "level": "A2",
    "objective": "Kutambua na kutumia virejeshi vya watendwa vya ngeli mbalimbali za vitu: KI-VI (-ki-/-vi-), M-MI (-u-/-i-), JI-MA (-li-/-ya-), na N-N (-i-/-zi-) kurejelea nomino zilizotajwa.",
    "presentation": {
      "explanation": "Virejeshi vya Watendwa kwa Ngeli za Vitu (Object Infixes for Noun Classes):\n\n1. **Ulinganifu wa Virejeshi vya Ngeli (Noun Class Object Infixes)**:\n   - **Ngeli ya KI-VI (Classes 7/8)**:\n     - Umoja: **-ki-** (*Kitabu hiki ninakisoma* = I am reading this book)\n     - Wingi: **-vi-** (*Vitabu hivi ninavisoma* = I am reading these books)\n   - **Ngeli ya M-MI (Classes 3/4)**:\n     - Umoja: **-u-** (*Mti huu ninaukata* = I am cutting this tree)\n     - Wingi: **-i-** (*Miti hii ninaikata* = I am cutting these trees)\n   - **Ngeli ya JI-MA (Classes 5/6)**:\n     - Umoja: **-li-** (*Gari hili ninalipenda* = I like this car)\n     - Wingi: **-ya-** (*Magari haya ninayapenda* = I like these cars)\n   - **Ngeli ya N-N (Classes 9/10)**:\n     - Umoja: **-i-** (*Barua hii ninaipokea* = I receive this letter)\n     - Wingi: **-zi-** (*Barua hizi ninazipokea* = I receive these letters)\n\n2. **Kazi ya Kirejeshi cha Ngeli**:\n   - Kirejeshi hutumika kusisitiza nomino mahususi ('the specific one') au kubadilisha nomino kuwa kiwakilishi: *Umekiona kitabu? - Ndiyo, nimekiona!* (Have you seen the book? - Yes, I've seen it!).",
      "examples": [
        {
          "target": "Kitabu hiki ni kizuri sana; mimi ninakisoma sasa na kaka yangu amekisoma tayari.",
          "reading": "Ki-ta-bu hi-ki ni ki-zu-ri sa-na; mi-mi ni-na-ki-so-ma sa-sa na ka-ka ya-ngu a-me-ki-so-ma ta-ya-ri. [kiˈtɑbu ˈhiki ni kiˈzuri ˈsɑnɑ ˈmimi ninɑkiˈsɔmɑ ˈsɑsɑ nɑ ˈkɑkɑ ˈjɑŋɡu ɑmɛkiˈsɔmɑ tɑˈjɑri] (kee-TAH-boo HEE-kee nee kee-ZOO-ree SAH-nah; MEE-mee nee-nah-kee-SOH-mah SAH-sah nah KAH-kah YAHN-goo ah-may-kee-SOH-mah tah-YAH-ree)",
          "translation": "This book is very good; I am reading it [class 7 OP -ki-: ninakisoma] now and my brother has already read it [OP -ki-: amekisoma]."
        },
        {
          "target": "Gari letu jipya liliharibika lakini fundi amelitengeneza vizuri.",
          "reading": "Ga-ri le-tu ji-pya li-li-ha-ri-bi-ka la-ki-ni fu-ndi a-me-li-te-nge-ne-za vi-zu-ri. [ˈɡɑri ˈlɛtu ˈʤipjɑ lilihɑriˈbikɑ lɑˈkini ˈfundi ɑmɛlitɛŋɡɛˈnɛzɑ viˈzuri] (GAH-ree LAY-too JEE-pyah lee-lee-hah-ree-BEE-kah lah-KEE-nee FOON-dee ah-may-lee-tayn-gay-NAY-zah vee-ZOO-ree)",
          "translation": "Our new car broke down, but the mechanic has repaired it [class 5 OP -li-: amelitengeneza] well."
        },
        {
          "target": "Nyumba zote za kijijini zilipambwa na wanakijiji wanazitunza kwa usafi.",
          "reading": "Nyu-mba zo-te za ki-ji-ji-ni zi-li-pa-mbwa na wa-na-ki-ji-ji wa-na-zi-tu-nza kwa u-sa-fi. [ˈɲumbɑ ˈzɔtɛ zɑ kiʤiˈʤini zilipɑmˈbwɑ nɑ wɑnɑkiˈʤiʤi wɑnɑziˈtunzɑ kwɑ usɑˈfi] (NYOOM-bah ZOH-tay zah kee-jee-jee-NEE zee-lee-PAHM-bwah nah wah-nah-kee-jee-JEE wah-nah-zee-TOON-zah kwah oo-SAH-fee)",
          "translation": "All village houses were decorated and villagers maintain them [class 10 OP -zi-: wanazitunza] with cleanliness."
        }
      ],
      "mnemonics": [
        "Virejeshi vya Vitu: KI-VI=-ki-/-vi-, JI-MA=-li-/-ya-, M-MI=-u-/-i-, N-N=-i-/-zi- (ninakisoma, ninalipenda, wanazitunza)!"
      ],
      "culturalNotes": [
        "Upatanisho wa virejeshi vya ngeli humwezesha msemaji kufanya mazungumzo marefu bila kurudia-rudia majina ya vitu kila mara, jambo linalofanya usemi uwe fasaha na mtamu kusikiliza."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kirejeshi sahihi cha mtendwa kurejelea nomino ya wingi \"Magari\" (Ngeli ya JI-MA)?",
          "options": [
            "Fundi anayatengeneza magari yote gereji. (The mechanic is repairing them [cars] at the garage - Correct Class 6 object infix '-ya-')",
            "Fundi analitengeneza magari yote gereji (Kosa la kutumia umoja '-li-')",
            "Fundi anazitengeneza magari yote gereji (Kosa la kutumia kiambishi cha N-N)",
            "Fundi anawatengeneza magari yote gereji (Kosa la kutumia kiambishi cha watu)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Magari» (wingi katika Ngeli ya JI-MA) huchukua kirejeshi cha mtendwa «-ya-»: «anayatengeneza»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapotaka kusema \"Niliziona nyumba zote nzuri\", kirejeshi kipi cha mtendwa kimetumika katika kitenzi?",
          "options": [
            "-zi- (Kirejeshi cha mtendwa cha Ngeli ya 10 N-N wingi: niliziona)",
            "-ki- (Kirejeshi cha Ngeli ya 7)",
            "-ya- (Kirejeshi cha Ngeli ya 6)",
            "-li- (Kirejeshi cha Ngeli ya 5)"
          ],
          "answerIndex": 0,
          "explanation": "Kirejeshi cha mtendwa cha wingi wa Ngeli ya N-N (Nyumba) ni «-zi-», hivyo kitenzi kinakuwa «niliziona»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua uoanishaji sahihi wa nomino na kirejeshi chake cha mtendwa katika sentensi:",
          "options": [
            "Chakula -> ninakila (-ki-), Magari -> ninayanunua (-ya-), Barua -> ninazisoma (-zi-), Mti -> ninaukata (-u-).",
            "Chakula -> ninamla, Magari -> ninawala, Barua -> ninamwona.",
            "Chakula -> ninalikula, Magari -> ninazisoma, Barua -> ninakiona.",
            "Ngeli zote za vitu hutumia kirejeshi kimoja tu cha '-m-'."
          ],
          "answerIndex": 0,
          "explanation": "Upatanisho sahihi wa ngeli kwa virejeshi vya watendwa ni: Chakula (-ki-), Magari (-ya-), Barua wingi (-zi-), na Mti (-u-)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u8-l3": {
    "id": "sw-u8-l3",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 3,
    "title": "Kirejeshi cha Mtenda Mwenyewe: Kiambishi -ji- (Reflexive Infix -ji-)",
    "level": "A2",
    "objective": "Kuelewa na kutumia kirejeshi cha mtenda mwenyewe (Reflexive Infix) '-ji-' ambacho hutumika kwa nafsi zote na ngeli zote kumaanisha kuwa mtenda anajitendea tendo yeye mwenyewe.",
    "presentation": {
      "explanation": "Kirejeshi cha Mtenda Mwenyewe (The Reflexive Infix -ji-):\n\n1. **Dhana ya Kirejeshi -ji- (Reflexive Marker)**:\n   - Kiambishi **-ji-** hutumika kama kirejeshi cha mtendwa pale ambapo **mtendaji na mtendwa ni mtu yule yule** (self / reflexive action).\n   - Tofauti na virejeshi vingine vinavyobadilika kulingana na nafsi au ngeli, kiambishi **-ji- ni thabiti na hakibadiliki kamwe** kwa nafsi yoyote (Mimi, Wewe, Yeye, Sisi, Ninyi, Wao) au ngeli yoyote!\n\n2. **Mifano ya Vitenzi vya Kirejeshi (Reflexive Verbs)**:\n   - *jifunza* (teach oneself -> learn / study): *ninajifunza Kiswahili*\n   - *jilinda* (protect oneself / defend oneself): *tunajilinda*\n   - *jionea* (see for oneself / witness directly): *watajionea*\n   - *jipikia* (cook for oneself): *anajipikia*\n   - *jiheshimu* (respect oneself): *jiheshimu ili uheshimiwe*\n   - *jiumiza* (hurt/injure oneself): *alijiumiza mguu*\n   - *jitahidi* (make an effort / strive): *tunajitahidi*",
      "examples": [
        {
          "target": "Wanafunzi wanajifunza sarufi ya Kiswahili kwa bidii ili wajiendeleze kimasomo.",
          "reading": "Wa-na-fu-nzi wa-na-ji-fu-nza sa-ru-fi ya Ki-swa-hi-li kwa bi-di-i i-li wa-ji-e-nde-le-ze ki-ma-so-mo. [wɑnɑˈfunzi wɑnɑʤiˈfunzɑ sɑˈrufi jɑ kiswɑˈhili kwɑ biˈdiː ˈili wɑʤiɛndɛˈlɛzɛ kimɑˈsɔmɔ] (wah-nah-FOON-zee wah-nah-jee-FOON-zah sah-ROO-fee yah kee-swah-HEE-lee kwah bee-DEE EE-lee wah-jee-ayn-day-LAY-zay kee-mah-SOH-moh)",
          "translation": "Students are learning [reflexive -ji-: wanajifunza] Swahili grammar diligently so that they may advance themselves [reflexive -ji-: wajiendeleze] academically."
        },
        {
          "target": "Mimi ninajilinda dhidi ya magonjwa kwa kula chakula bora na kufanya mazoezi.",
          "reading": "Mi-mi ni-na-ji-li-nda dhi-di ya ma-go-njwa kwa ku-la cha-ku-la bo-ra na ku-fa-nya ma-zo-e-zi. [ˈmimi ninɑʤiˈlindɑ ˈðidi jɑ mɑˈɡɔɲwɑ kwɑ ˈkulɑ tʃɑˈkulɑ ˈbɔrɑ nɑ kuˈfɑɲɑ mɑzɔˈɛzi] (MEE-mee nee-nah-jee-LEEN-dah THEE-dee yah mah-GOHN-jwah kwah KOO-lah chah-KOO-lah BOH-rah nah koo-FAH-nyah mah-zoh-AY-zee)",
          "translation": "I protect myself [reflexive -ji-: ninajilinda] against diseases by eating wholesome food and exercising."
        },
        {
          "target": "Msichana huyu anajipikia chakula kitamu cha jioni nyumbani kwake kila siku.",
          "reading": "Msi-cha-na hu-yu a-na-ji-pi-ki-a cha-ku-la ki-ta-mu cha ji-o-ni nyu-mba-ni kwa-ke ki-la si-ku. [msiˈtʃɑnɑ ˈhuju ɑnɑʤipiˈkiɑ tʃɑˈkulɑ kiˈtɑmu tʃɑ ʤiˈɔni ɲumbɑˈni ˈkwɑkɛ ˈkilɑ ˈsiku] (m-see-CHAH-nah HOO-yoo ah-nah-jee-pee-KEE-ah chah-KOO-lah kee-TAH-moo chah jee-OH-nee nyoom-bah-NEE KWAH-kay KEE-lah SEE-koo)",
          "translation": "This girl cooks delicious dinner for herself [reflexive applicative -ji-...-ia: anajipikia] at her home every day."
        }
      ],
      "mnemonics": [
        "Kirejeshi -JI-: 'Mimi mwenyewe' = -JI-! Ninajifunza, ninajilinda, anajipikia, wanajiheshimu!"
      ],
      "culturalNotes": [
        "Methali maarufu ya Kiswahili inasema: 'Mcheza kwao hutunzwa, na ajitumeaye haanguki' — ikisisitiza umuhimu wa kujiheshimu na kujitegemea maishani."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaonyesha mtenda akijitendea tendo mwenyewe kwa kutumia kirejeshi '-ji-'?",
          "options": [
            "Mwanafunzi anajiandaa kwa ajili ya mtihani wake wa kesho. (The student is preparing himself for his exam tomorrow - Correct reflexive infix '-ji-')",
            "Mwanafunzi anamuandaa kwa ajili ya mtihani (Kirejeshi cha kumwandaa mtu mwingine)",
            "Mwanafunzi anatuandaa kwa mtihani (Kirejeshi cha kutuandaa sisi)",
            "Mwanafunzi anawaandaa wengine (Kirejeshi cha kuwaandaa wao)"
          ],
          "answerIndex": 0,
          "explanation": "Kirejeshi «-ji-» katika «anajiandaa» kinaonyesha kwamba mwanafunzi anajiandaa yeye mwenyewe."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kwanini kirejeshi '-ji-' ni cha pekee ikilinganishwa na virejeshi vingine vya watendwa?",
          "options": [
            "Kwa sababu kinatumika kwa nafsi zote sita na ngeli zote bila kubadilika umbo lake kamwe. (Because it is used invariantly across all six persons and all noun classes without changing shape.)",
            "Kwa sababu kinatumika tu kwa wanyama wa porini pekee",
            "Kwa sababu kinabadilika kuwa '-jo-' katika wakati uliopita",
            "Kwa sababu kinatumika tu asubuhi na mapema"
          ],
          "answerIndex": 0,
          "explanation": "Kirejeshi «-ji-» hakibadiliki kamwe kulingana na nafsi au ngeli; kinabaki «-ji-» daima."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi zenye vitenzi vinavyotumia kirejeshi cha mtenda mwenyewe (-ji-) kwa usahihi kabisa:",
          "options": [
            "Sisi tunajifunza Kiswahili, mzee anajilinda kwa fimbo, na watoto wanajiheshimu shuleni. (We are learning [reflexive], the elder protects himself [reflexive], and children respect themselves [reflexive].)",
            "Sisi tunamfunza Kiswahili wakati wazee wanatutunza.",
            "Watoto wanawapenda walimu na wanawasikiliza.",
            "Kirejeshi '-ji-' kinakataza vitenzi kuwa na viambishi vya wakati."
          ],
          "answerIndex": 0,
          "explanation": "«Sisi tunajifunza Kiswahili, mzee anajilinda kwa fimbo, na watoto wanajiheshimu shuleni.» inatumia kirejeshi «-ji-» kuonyesha matendo ya kujirejelea yenyewe."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u8-l4": {
    "id": "sw-u8-l4",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 4,
    "title": "Mwingiliano wa Virejeshi vya Watendwa na Vitenzi vya Silabi Moja na Ukanushaji (Object Infixes with Monosyllabics & Negation)",
    "level": "A2",
    "objective": "Kuelewa tabia ya kifonolojia ya vitenzi vya silabi moja vinapopokea kirejeshi cha mtendwa (hupoteza kiambishi 'ku-') na jinsi virejeshi vya watendwa vinavyoingizwa katika vitenzi vilivyokanushwa.",
    "presentation": {
      "explanation": "Virejeshi vya Watendwa katika Vitenzi vya Silabi Moja na Ukanushaji:\n\n1. **Vitenzi vya Silabi Moja na Kirejeshi cha Mtendwa (OP with Monosyllabics)**:\n   - Kitenzi cha silabi moja kinapopata kirejeshi cha mtendwa (OP), **hupoteza kiambishi cha 'ku-' katika hali zote** (kwa sababu kirejeshi cha mtendwa hutoa silabi ya ziada inayowezesha mkazo kutua kwenye silabi ya pili kutoka mwisho):\n     - *kula* -> *a-na-**ki**-la* -> **anakila** (he is eating it [food]) [siyo *anakikula*]\n     - *kunywa* -> *a-li-**ya**-nywa* -> **aliyanywa** (he drank it [water]) [siyo *aliyukunywa*]\n     - *kuwa* -> *a-na-**m**-wia* -> **anamwia** (he is being towards him)\n\n2. **Virejeshi vya Watendwa katika Ukanushaji (OP in Negated Verbs)**:\n   - Kirejeshi cha mtendwa kinabaki ndani ya kitenzi hata kinapokanushwa:\n     - Wakati Uliopo: *si-**mw**-on-i* -> **simwoni** (I do not see him)\n     - Wakati Uliopita: *si-ku-**ki**-on-a* -> **sikukiona** (I did not see it)\n     - Wakati Ujao: *si-ta-**ku**-sahau* -> **sitakusahau** (I will not forget you)\n     - Wakati Timilifu: *ha-ja-**m**-wambi-a* -> **hajamwambia** (he has not told him yet)",
      "examples": [
        {
          "target": "Chakula kile kimeiva na watoto wanakila chote kwa furaha.",
          "reading": "Cha-ku-la ki-le ki-me-i-va na wa-to-to wa-na-ki-la cho-te kwa fu-ra-ha. [tʃɑˈkulɑ ˈkilɛ kimɛˈivɑ nɑ wɑˈtɔtɔ wɑnɑˈkilɑ ˈtʃɔtɛ kwɑ fuˈrɑhɑ] (chah-KOO-lah KEE-lay kee-may-EE-vah nah wah-TOH-toh wah-nah-KEE-lah CHOH-tay kwah foo-RAH-hah)",
          "translation": "That food is cooked and children are eating it [OP -ki- drops 'ku-': wanakila] all with joy."
        },
        {
          "target": "Mimi sitakusahau rafiki yangu na daima nitakukumbuka maishani.",
          "reading": "Mi-mi si-ta-ku-sa-hau ra-fi-ki ya-ngu na da-i-ma ni-ta-ku-ku-mbu-ka ma-i-sha-ni. [ˈmimi sitɑkuˈsɑhɑu rɑˈfiki ˈjɑŋɡu nɑ dɑˈimɑ nitɑkukumˈbukɑ mɑiˈʃɑni] (MEE-mee see-tah-koo-SAH-hah-oo rah-FEE-kee YAHN-goo nah dah-EE-mah nee-tah-koo-koom-BOO-kah mah-ee-SHAH-nee)",
          "translation": "I will not forget you [negated future OP -ku-: sitakusahau] my friend and will always remember you [OP -ku-: nitakukumbuka] in life."
        },
        {
          "target": "Mwalimu hajamwona mwanafunzi yule darasani asubuhi ya leo.",
          "reading": "Mwa-li-mu ha-ja-mwo-na mwa-na-fu-nzi yu-le da-ra-sa-ni a-su-bu-hi ya le-o. [mwɑˈlimu hɑʤɑmˈwɔnɑ mwɑnɑˈfunzi ˈjulɛ dɑrɑˈsɑni ɑsuˈbuhi jɑ ˈlɛɔ] (mwah-LEE-moo hah-jah-m-WOH-nah mwah-nah-FOON-zee YOO-lay dah-rah-SAH-nee ah-soo-BOO-hee yah LAY-oh)",
          "translation": "The teacher has not yet seen [negated perfective OP -mw-: hajamwona] that student in class this morning."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Silabi Moja na OP: Kirejeshi kinaondoa 'ku-': ananila, anakila, aliyanywa; katika ukanusho: simwoni, sitakusahau!"
      ],
      "culturalNotes": [
        "Kauli ya 'Sitakusahau' (I will not forget you) hutumiwa sana katika nyimbo za mapenzi na tenzi za kuagana za Waswahili kama ishara ya kumbukumbu ya dhati."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Unapoweka kirejeshi cha mtendwa '-ki-' (chakula) katika kitenzi cha silabi moja 'kula' katika wakati uliopo, umbo sahihi ni lipi?",
          "options": [
            "anakila (He/She is eating it - Correct dropping of 'ku-' when object infix '-ki-' is present)",
            "anakikula (Kosa la kubakiza 'ku-' lisilohitajika)",
            "anakula kitabu (Kutotambua maana ya kirejeshi)",
            "analikula (Kosa la upatanisho wa ngeli ya JI-MA badala ya KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Kirejeshi cha mtendwa kinapoingia kwenye kitenzi cha silabi moja, kiambishi «ku-» hufutwa: «anakila»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inachanganya ukanushaji wa wakati ujao na kirejeshi cha mtendwa kwa usahihi kabisa?",
          "options": [
            "Mimi sitakusahau kamwe maishani mwangu. (I will never forget you in my life - Flawless negated future with object infix '-ku-')",
            "Mimi sitokusahau kamwe (Mabadiliko yasiyo sanifu ya kiambishi cha wakati)",
            "Mimi sikukusahau kesho kutwa (Kutatanisha uliopita na siku zijazo)",
            "Mimi sinakusahau sasa (Muundo usio sahihi wa ukanushaji)"
          ],
          "answerIndex": 0,
          "explanation": "Ukanushaji wa wakati ujao wenye kirejeshi cha mtendwa «-ku-» (wewe) ni «sitakusahau»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Ni kanuni gani inayotokea pale kitenzi cha silabi moja kinapopata kirejeshi cha mtendwa (object infix)?",
          "options": [
            "Hupoteza kiambishi 'ku-' katika nyakati zote kwa sababu kirejeshi cha mtendwa hutoa silabi ya ziada kwa ajili ya mkazo wa sauti (mfano: anakila, aliyanywa). (It drops 'ku-' across all tenses because the object infix provides the extra penultimate syllable for stress.)",
            "Huhifadhi 'ku-' na kuongeza 'ku-' ya pili.",
            "Kitenzi hubadilika kuwa nomino.",
            "Hakuna mabadiliko yoyote yanayotokea."
          ],
          "answerIndex": 0,
          "explanation": "«Hupoteza kiambishi 'ku-' katika nyakati zote kwa sababu kirejeshi cha mtendwa hutoa silabi ya ziada kwa ajili ya mkazo wa sauti (mfano: anakila, aliyanywa).» ndiyo kanuni kuu ya kifonolojia."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u8-l5": {
    "id": "sw-u8-l5",
    "subject": "swahili",
    "unit": 8,
    "lessonNumber": 5,
    "title": "Muhtasari wa Virejeshi vya Watendwa (Grand Synthesis of Object Infixes)",
    "level": "A2",
    "objective": "Kuunganisha mada zote za Unit 8: virejeshi vya watendwa kwa watu (-ni-, -ku-, -m-, -tu-, -wa-), ngeli za vitu (-ki-/-vi-, -u-/-i-, -li-/-ya-, -i-/-zi-), kirejeshi cha nafsi -ji-, na kanuni zake katika ukanushaji na vitenzi vya silabi moja.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Virejeshi vya Watendwa (Grand Synthesis of Object Infixes):\n\n1. **Muundo Mkuu wa Kitenzi chenye Kirejeshi**:\n   `Kiambishi Nafsi (SP) + Kiambishi Wakati (TM) + Kiambishi Mtendwa (OP) + Shina`\n\n2. **Jedwali la Virejeshi vya Watendwa (Comprehensive OP Matrix)**:\n   - **Watu**: *-ni-* (mimi), *-ku-* (wewe), *-m-/-mw-* (yeye), *-tu-* (sisi), *-wa-* (wao/ninyi).\n   - **Ngeli za Vitu**: KI-VI (*-ki-/-vi-*), M-MI (*-u-/-i-*), JI-MA (*-li-/-ya-*), N-N (*-i-/-zi-*).\n   - **Kirejeshi cha Kujirejelea**: *-ji-* (myself/yourself/himself/ourselves/themselves - hakibadiliki kamwe!).\n\n3. **Kanuni za Kipekee**:\n   - Vitenzi vya silabi moja hupoteza *ku-*: *anakila, aliyanywa*.\n   - Katika ukanushaji, kirejeshi kinabaki ndani ya kitenzi: *simwoni, sikukiona, sitakusahau, hajamwambia*.",
      "examples": [
        {
          "target": "Kitabu nilichokinunua jana, nimekileta darasani ili mwalimu akisome na anieleze maoni yake.",
          "reading": "Ki-ta-bu ni-li-cho-ki-nu-nua ja-na, ni-me-ki-le-ta da-ra-sa-ni i-li mwa-li-mu a-ki-so-me na a-ni-e-le-ze ma-o-ni ya-ke. [kiˈtɑbu nilitʃɔkinuˈnuɑ ˈʤɑnɑ nimɛkiˈlɛtɑ dɑrɑˈsɑni ˈili mwɑˈlimu ɑkiˈsɔmɛ nɑ ɑniɛˈlɛzɛ mɑˈɔni ˈjɑkɛ] (kee-TAH-boo nee-lee-choh-kee-NOO-noo-ah JAH-nah, nee-may-kee-LAY-tah dah-rah-SAH-nee EE-lee mwah-LEE-moo ah-kee-SOH-may nah ah-nee-ay-LAY-zay mah-OH-nee YAH-kay)",
          "translation": "The book I bought [OP -ki-: nilichokinunua] yesterday, I have brought it [OP -ki-: nimekileta] to class so the teacher may read it [OP -ki-: akisome] and explain his opinions to me [OP -ni-: anieleze]."
        },
        {
          "target": "Sisi tunajiheshimu, tunawapenda majirani zetu, na tunalilinda taifa letu kwa uaminifu.",
          "reading": "Si-si tu-na-ji-he-shi-mu, tu-na-wa-pe-nda ma-ji-ra-ni ze-tu, na tu-na-li-li-nda ta-i-fa le-tu kwa u-a-mi-ni-fu. [ˈsisi tunɑʤihɛˈʃimu tunɑwɑˈpɛndɑ mɑʤiˈrɑni ˈzɛtu nɑ tunɑliˈlindɑ tɑˈifɑ ˈlɛtu kwɑ uɑmiˈnifu] (SEE-see too-nah-jee-hay-SHEE-moo, too-nah-wah-PAYN-dah mah-jee-RAH-nee ZAY-too, nah too-nah-lee-LEEN-dah tah-EE-fah LAY-too kwah oo-ah-mee-NEE-foo)",
          "translation": "We respect ourselves [reflexive: tunajiheshimu], love our neighbors [OP -wa-: tunawapenda], and protect our nation [OP -li-: tunalilinda] with loyalty."
        },
        {
          "target": "Virejeshi vya watendwa huunganisha nomino na vitenzi kwa ufupi na uzuri usio na kifani katika muundo wa Kiswahili sanifu.",
          "reading": "Vi-re-je-shi vya wa-te-ndwa hu-u-nga-ni-sha no-mi-no na vi-te-nzi kwa u-fu-pi na u-zu-ri u-si-o na ki-fa-ni ka-ti-ka mu-u-ndo wa Ki-swa-hi-li sa-ni-fu. [virɛˈʤɛʃi vjɑ wɑˈtɛndwɑ huuŋɡɑˈniʃɑ nɔˈminɔ nɑ viˈtɛnzi kwɑ uˈfupi nɑ uˈzuri usiˈɔ nɑ kiˈfɑni kɑˈtikɑ muˈundɔ wɑ kiswɑˈhili sɑˈnifu] (vee-ray-JAY-shee vyah wah-TAYN-dwah hoo-oon-gah-NEE-shah noh-MEE-noh nah vee-TAYN-zee kwah oo-FOO-pee nah oo-ZOO-ree oo-see-OH nah kee-FAH-nee kah-TEE-kah moo-OON-doh wah kee-swah-HEE-lee sah-NEE-foo)",
          "translation": "Object infixes [object infixes synthesis: virejeshi vya watendwa] seamlessly connect nouns and verbs with unparalleled conciseness and beauty in standard Swahili syntax."
        }
      ],
      "mnemonics": [
        "Muhtasari wa Virejeshi: Watu (-ni-, -ku-, -m-, -tu-, -wa-), Ngeli (-ki-/-vi-, -li-/-ya-, -u-/-i-, -i-/-zi-), Mtenda Mwenyewe (-ji-)!"
      ],
      "culturalNotes": [
        "Umahiri wa kutumia virejeshi vya watendwa unampa mzungumzaji wa Kiswahili uwezo wa kutunga mashairi, hadithi, na hotuba zenye mvuto mkubwa na uchumi wa maneno."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa virejeshi vya watendwa kwa watu, vitu, na kirejeshi cha nafsi -ji-?",
          "options": [
            "Mimi ninamheshimu mwalimu, ninakisoma kitabu chake, na ninajifunza kwa bidii. (I respect the teacher [OP -m-], read his book [OP -ki-], and learn [reflexive -ji-] diligently - Harmonious object infix synthesis)",
            "Mimi ninawajua kitabu na ninakisoma mwalimu (Upotoshaji wa virejeshi kati ya watu na vitu)",
            "Mimi ninakikula chakula na sitomsahau yeye (Makosa ya kubakiza 'ku' na kiambishi kisicho sanifu)",
            "Kitabu chote alituona jana usiku (Muundo usio na maana)"
          ],
          "answerIndex": 0,
          "explanation": "«Mimi ninamheshimu mwalimu, ninakisoma kitabu chake, na ninajifunza kwa bidii.» inatumia kirejeshi cha mtu (-m-), cha kitu (-ki-), na cha nafsi (-ji-) kwa usahihi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 8, ni jukumu gani kuu la virejeshi vya watendwa katika lugha ya Kiswahili?",
          "options": [
            "Hurejelea mtendwa moja kwa moja ndani ya kitenzi ili kuepuka kurudia majina mara kwa mara na kuleta mtiririko fasaha wa sentensi. (They reference the object directly inside the verb to avoid repetitive naming and create fluent sentential flow)",
            "Hufuta vitenzi na kubakiza nomino pekee",
            "Hutumika tu katika nyakati za kale za karne ya kumi na sita",
            "Huzuia matumizi ya viambishi nafsi vya watendaji"
          ],
          "answerIndex": 0,
          "explanation": "Virejeshi vya watendwa huwakilisha au kusisitiza watendwa ndani ya kitenzi kwa mtiririko fasaha wa kisarufi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 8 ya Virejeshi vya Watendwa katika Kiswahili:",
          "options": [
            "Kitabu nilichokiazima maktaba nimekileta darasani, mwalimu amekisoma, amenieleza umuhimu wake, na wanafunzi wote wanajifunza maudhui yake. (The book I borrowed from library I have brought it [ki-], teacher has read it [ki-], explained its value to me [ni-], and all students are learning [ji-] its content.)",
            "Kitabu nilichomwazima nimekikula darasani na mwalimu anawatenda jana.",
            "Wanafunzi wote wanayajua mwalimu na linakisoma kitabu chake kesho.",
            "Virejeshi vya watendwa vinakataza matumizi ya kirejeshi cha nafsi '-ji-'."
          ],
          "answerIndex": 0,
          "explanation": "«Kitabu nilichokiazima maktaba nimekileta darasani, mwalimu amekisoma, amenieleza umuhimu wake, na wanafunzi wote wanajifunza maudhui yake.» inajumuisha virejeshi vya ngeli (-ki-), mtu (-ni-), na nafsi (-ji-) kwa ufasaha mkubwa."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u9-l1": {
    "id": "sw-u9-l1",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 1,
    "title": "Mashina ya Vimilikishi kwa Nafsi Zote Sita (Possessive Stems: -angu, -ako, -ake, -etu, -enu, -ao)",
    "level": "A2",
    "objective": "Kutambua na kutumia mashina sita ya vimilikishi katika Kiswahili (-angu, -ako, -ake, -etu, -enu, -ao) na upatanisho wake wa awali katika Ngeli ya Watu (A-WA / Majina ya Watu na Ukoo).",
    "presentation": {
      "explanation": "Mashina ya Vimilikishi na Upatanisho wa Ngeli (Possessive Stems & Concord):\n\n1. **Mashina Sita ya Vimilikishi (Possessive Stems)**:\n   - *Mimi* (my / mine): **-angu**\n   - *Wewe* (your / yours sg): **-ako**\n   - *Yeye* (his / her / its): **-ake**\n   - *Sisi* (our / ours): **-etu**\n   - *Ninyi* (your / yours pl): **-enu**\n   - *Wao* (their / theirs): **-ao**\n\n2. **Upatanisho katika Ngeli ya Watu (A-WA & Kinship Nouns)**:\n   - **Umoja (w- / y- kwa majina ya ukoo)**:\n     - *mtoto wangu* (my child), *mtoto wako* (your child), *mtoto wake* (his/her child), *mtoto wetu* (our child), *mtoto wenu* (your pl child), *mtoto wao* (their child)\n     - *mama yangu* (my mother), *baba yangu* (my father), *kaka yangu* (my brother), *dada yangu* (my sister), *rafiki yangu* (my friend)\n   - **Wingi (w- / z- kwa ukoo)**:\n     - *watoto wangu* (my children), *watoto wako*, *watoto wake*, *watoto wetu*, *watoto wenu*, *watoto wao*\n     - *marafiki zangu / marafiki wangu* (my friends), *kaka zangu* (my brothers)\n\n3. **Mpangilio wa Maneno (Syntax)**:\n   - Kimilikishi **hufuata nomino kila wakati**: *rafiki yangu* (siyo *yangu rafiki*).",
      "examples": [
        {
          "target": "Kaka yangu na rafiki yangu wanatembelea familia yetu kijijini.",
          "reading": "Ka-ka ya-ngu na ra-fi-ki ya-ngu wa-na-te-mbe-le-a fa-mi-li-a ye-tu ki-ji-ji-ni. [ˈkɑkɑ ˈjɑŋɡu nɑ rɑˈfiki ˈjɑŋɡu wɑnɑtɛmbɛˈlɛɑ fɑmiˈliɑ ˈjɛtu kiʤiˈʤini] (KAH-kah YAHN-goo nah rah-FEE-kee YAHN-goo wah-nah-tahm-bay-LAY-ah fah-mee-LEE-ah YAY-too kee-jee-jee-NEE)",
          "translation": "My brother [possessive: kaka yangu] and my friend [possessive: rafiki yangu] are visiting our family [possessive: familia yetu] in the village."
        },
        {
          "target": "Mtoto wako anasoma vizuri na mwalimu wake anamsifu kila siku.",
          "reading": "Mto-to wa-ko a-na-so-ma vi-zu-ri na mwa-li-mu wa-ke a-na-msi-fu ki-la si-ku. [ˈmtɔtɔ ˈwɑkɔ ɑnɑˈsɔmɑ viˈzuri nɑ mwɑˈlimu ˈwɑkɛ ɑnɑmˈsifu ˈkilɑ ˈsiku] (M-TOH-toh WAH-koh ah-nah-SOH-mah vee-ZOO-ree nah mwah-LEE-moo WAH-kay ah-nahm-SEE-foo KEE-lah SEE-koo)",
          "translation": "Your child [possessive: mtoto wako] studies well and his teacher [possessive: mwalimu wake] praises him [OP -m-] every day."
        },
        {
          "target": "Wazazi wao wanajivunia mafanikio makubwa ya watoto wao chuoni.",
          "reading": "Wa-za-zi wa-o wa-na-ji-vu-nia ma-fa-ni-ki-o ma-kbu-wa ya wa-to-to wa-o chu-o-ni. [wɑˈzɑzi ˈwɑɔ wɑnɑʤivuˈniɑ mɑfɑniˈkiɔ mɑˈkubwɑ jɑ wɑˈtɔtɔ ˈwɑɔ tʃuˈɔni] (wah-ZAH-zee WAH-oh wah-nah-jee-voo-NEE-ah mah-fah-nee-KEE-oh mah-KOO-bwah yah wah-TOH-toh WAH-oh choo-OH-nee)",
          "translation": "Their parents [possessive: wazazi wao] take pride [reflexive: wanajivunia] in the great success of their children [possessive: watoto wao] at college."
        }
      ],
      "mnemonics": [
        "Mashina ya Vimilikishi: -ANGU (my), -AKO (your sg), -AKE (his/her), -ETU (our), -ENU (your pl), -AO (their)!"
      ],
      "culturalNotes": [
        "Katika utamaduni wa Kiafrika, nomino za ukoo kama 'mama yangu', 'kaka yangu', na 'baba mdogo' huonyesha heshima na mshikamano mpana wa familia ya kiukoo (extended family)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi sahihi inayomaanisha \"Mtoto wetu anasoma shule ya msingi\" ni ipi?",
          "options": [
            "Mtoto wetu anasoma shule ya msingi. (Our child studies at primary school - Correct 1st person plural possessive 'w-etu')",
            "Mtoto zetu anasoma shule ya msingi (Kosa la kiambishi cha N-N wingi)",
            "Mtoto chetu anasoma shule ya msingi (Kosa la kiambishi cha KI-VI)",
            "Mtoto letu anasoma shule ya msingi (Kosa la kiambishi cha JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Mtoto» (umoja katika Ngeli ya A-WA) huchukua kiambishi cha kimilikishi «w-» kikiungana na «-etu» kupata «wetu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapotaka kusema \"Marafiki zangu wote wamefika nyumbani\", shina gani la kimilikishi limetumika?",
          "options": [
            "-angu (Shina la kimilikishi cha nafsi ya kwanza umoja 'my': z-angu)",
            "-ako (Shina la 'your')",
            "-ake (Shina la 'his/her')",
            "-ao (Shina la 'their')"
          ],
          "answerIndex": 0,
          "explanation": "Neno «zangu» linaundwa na kiambishi «z-» na shina la nafsi ya kwanza umoja «-angu»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha kamili ya mashina sita ya vimilikishi katika lugha ya Kiswahili:",
          "options": [
            "-angu (my), -ako (your sg), -ake (his/her), -etu (our), -enu (your pl), -ao (their).",
            "-mimi, -wewe, -yeye, -sisi, -ninyi, -wao.",
            "-huyu, -hawa, -yule, -wale, -hiki, -hivi.",
            "-gani, -wapi, -lini, -vipi, -ngapi, -nani."
          ],
          "answerIndex": 0,
          "explanation": "Mashina halisi ya vimilikishi ni sita: «-angu, -ako, -ake, -etu, -enu, -ao»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u9-l2": {
    "id": "sw-u9-l2",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 2,
    "title": "Vimilikishi katika Ngeli za KI-VI na M-MI (Possessives in Classes 7/8 & 3/4)",
    "level": "A2",
    "objective": "Kutambua na kutumia upatanisho wa vimilikishi katika Ngeli ya KI-VI (changu/vyangu, chako/vyako, chake/vyake, chetu/vyetu, chenu/vyenu, chao/vyao) na Ngeli ya M-MI (wangu/yangu, wako/yako, wake/yake, wetu/yetu, wenu/yenu, wao/yao).",
    "presentation": {
      "explanation": "Vimilikishi katika Ngeli za KI-VI na M-MI (Possessive Concord for Classes 7/8 & 3/4):\n\n1. **Ngeli ya KI-VI (Classes 7/8: Kiambishi ch- / vy-)**:\n   - Kiambishi cha ngeli *ki-* kikiungana na irabu ya shina hubadilika kuwa **ch-** (umoja) na *vi-* hubadilika kuwa **vy-** (wingi):\n     - *Mimi*: **changu** (my) / **vyangu** (*kitabu changu / vitabu vyangu*)\n     - *Wewe*: **chako** / **vyako** (*kiti chako / viti vyako*)\n     - *Yeye*: **chake** / **vyake** (*chakula chake / vyakula vyake*)\n     - *Sisi*: **chetu** (*ki-etu* -> **chetu**) / **vyetu** (*chumba chetu / vyumba vyetu*)\n     - *Ninyi*: **chenu** / **vyenu** (*chuo chenu / vyuo vyenu*)\n     - *Wao*: **chao** / **vyao** (*kisiwa chao / visiwa vyao*)\n\n2. **Ngeli ya M-MI (Classes 3/4: Kiambishi w- / y-)**:\n   - Umoja huchukua **w-**, wingi huchukua **y-**:\n     - *Mimi*: **wangu** / **yangu** (*mti wangu / miti yangu*, *mji wangu / miji yangu*)\n     - *Wewe*: **wako** / **yako** (*mkono wako / mikono yako*)\n     - *Yeye*: **wake** / **yake** (*mshahara wake / mishahara yake*)\n     - *Sisi*: **wetu** / **yetu** (*mto wetu / mito yetu*)\n     - *Ninyi*: **wenu** / **yenu** (*mradi wenu / miradi yenu*)\n     - *Wao*: **wao** / **yao** (*mpango wao / mipango yao*)",
      "examples": [
        {
          "target": "Kitabu changu kipya kiko mezani lakini vitabu vyenu vyote viko kabatini.",
          "reading": "Ki-ta-bu cha-ngu kpy-a ki-ko me-za-ni la-ki-ni vi-ta-bu vye-nu vyo-te vi-ko ka-ba-ti-ni. [kiˈtɑbu ˈtʃɑŋɡu ˈmpjɑ ˈkikɔ mɛˈzɑni lɑˈkini viˈtɑbu ˈvjɛnu ˈvjɔtɛ ˈvikɔ kɑbɑˈtini] (kee-TAH-boo CHAHN-goo M-PYAH KEE-koh may-ZAH-nee lah-KEE-nee vee-TAH-boo VYAY-noo VYOH-tay VEE-koh kah-bah-TEE-nee)",
          "translation": "My new book [class 7: kitabu changu] is on the table, but all your books [class 8: vitabu vyenu] are in the cupboard."
        },
        {
          "target": "Mji wetu una mitaa mizuri na miti yake yote inachanua maua.",
          "reading": "M-ji we-tu u-na mi-ta-a mi-zu-ri na mi-ti ya-ke yo-te i-na-cha-nua ma-u-a. [ˈmʤi ˈwɛtu ˈunɑ miˈtɑː miˈzuri nɑ ˈmiti ˈjɑkɛ ˈjɔtɛ inɑtʃɑˈnuɑ mɑˈuɑ] (M-jee WAY-too oo-nah mee-TAH-ah mee-ZOO-ree nah MEE-tee YAH-kay YOH-tay ee-nah-chah-NOO-ah mah-OO-ah)",
          "translation": "Our town [class 3: mji wetu] has fine streets and all its trees [class 4: miti yake] are blooming flowers."
        },
        {
          "target": "Chakula chetu cha asubuhi kimeandaliwa na vikombe vyake vimesafishwa.",
          "reading": "Cha-ku-la che-tu cha a-su-bu-hi ki-me-a-nda-li-wa na vi-ko-mbe vya-ke vi-me-sa-fi-shwa. [tʃɑˈkulɑ ˈtʃɛtu tʃɑ ɑsuˈbuhi kimɛɑndɑˈliwɑ nɑ viˈkɔmbɛ ˈvjɑkɛ vimɛsɑˈfiʃwɑ] (chah-KOO-lah CHAY-too chah ah-soo-BOO-hee kee-may-ahn-dah-LEE-wah nah vee-KOHM-bay VYAH-kay vee-may-sah-FEE-shwah)",
          "translation": "Our breakfast [class 7: chakula chetu] is prepared and its cups [class 8: vikombe vyake] are cleaned."
        }
      ],
      "mnemonics": [
        "Vimilikishi KI-VI na M-MI: KI->changu/chetu, VI->vyangu/vyetu; M->wangu/wetu, MI->yangu/yetu!"
      ],
      "culturalNotes": [
        "Viti vya kiasili vya mbao za mikoko na viti vya enzi vya pwani ya Waswahili vinasifika kwa nakshi nzuri za kitamaduni."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kimilikishi sahihi cha Ngeli ya 7 (KI-VI umoja) kwa nafsi ya kwanza wingi (Sisi)?",
          "options": [
            "Chumba chetu kimesafishwa vizuri. (Our room has been cleaned well - Correct Class 7 possessive 'ch-etu')",
            "Chumba yetu kimesafishwa vizuri (Kosa la kutumia kiambishi cha N-N)",
            "Chumba letu kimesafishwa vizuri (Kosa la kutumia kiambishi cha JI-MA)",
            "Chumba wetu kimesafishwa vizuri (Kosa la kutumia kiambishi cha A-WA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Chumba» (umoja katika Ngeli ya KI-VI) huchukua kimilikishi chenye kiambishi «ch-» kikiungana na «-etu» kupata «chetu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia miti ya mtu mwingine (Ngeli ya 4 M-MI wingi wa Yeye), kirai sahihi cha kimilikishi ni kipi?",
          "options": [
            "Miti yake inastawi vizuri. (His/Her trees are thriving well - Correct Class 4 possessive 'y-ake')",
            "Miti wake inastawi vizuri (Kosa la kutumia umoja 'w-')",
            "Miti vyake inastawi vizuri (Kosa la kutumia KI-VI)",
            "Miti zake inastawi vizuri (Kosa la kutumia N-N)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Miti» (wingi katika Ngeli ya M-MI) huchukua kiambishi cha kimilikishi «y-», hivyo huwa «miti yake»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vimilikishi katika ngeli za KI-VI na M-MI:",
          "options": [
            "Kiti changu kiko chumbani, viti vyetu viko sebuleni, mti wangu umemea, na miti yetu inazaa matunda. (My chair [ch-], our chairs [vy-], my tree [w-], and our trees [y-].)",
            "Kiti yangu kiko chumbani na viti zetu ziko sebuleni.",
            "Mti changu umemea wakati miti vyangu inazaa matunda.",
            "Vimilikishi vya KI-VI na M-MI havina tofauti ya kisarufi."
          ],
          "answerIndex": 0,
          "explanation": "«Kiti changu kiko chumbani, viti vyetu viko sebuleni, mti wangu umemea, na miti yetu inazaa matunda.» inafuata kanuni kamili za KI-VI (ch-/vy-) na M-MI (w-/y-)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u9-l3": {
    "id": "sw-u9-l3",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 3,
    "title": "Vimilikishi katika Ngeli za JI-MA na N-N (Possessives in Classes 5/6 & 9/10)",
    "level": "A2",
    "objective": "Kutambua na kutumia upatanisho wa vimilikishi katika Ngeli ya JI-MA (langu/yangu, lako/yako, lake/yake, letu/yetu, lenu/yenu, lao/yao) na Ngeli ya N-N (yangu/zangu, yako/zako, yake/zake, yetu/zetu, yenu/zenu, yao/zao).",
    "presentation": {
      "explanation": "Vimilikishi katika Ngeli za JI-MA na N-N (Possessive Concord for Classes 5/6 & 9/10):\n\n1. **Ngeli ya JI-MA (Classes 5/6: Kiambishi l- / y-)**:\n   - Umoja huchukua **l-** (*li- + a -> la*), Wingi huchukua **y-** (*ya- + a -> ya*):\n     - *Mimi*: **langu** / **yangu** (*jina langu / majina yangu*, *gari langu / magari yangu*)\n     - *Wewe*: **lako** / **yako** (*shamba lako / mashamba yako*)\n     - *Yeye*: **lake** / **yake** (*tunda lake / matunda yake*)\n     - *Sisi*: **letu** (*li-etu* -> **letu**) / **yetu** (*darasa letu / madarasa yetu*)\n     - *Ninyi*: **lenu** / **yenu** (*neno lenu / maneno yenu*)\n     - *Wao*: **lao** / **yao** (*soko lao / masoko yao*)\n\n2. **Ngeli ya N-N (Classes 9/10: Kiambishi y- / z-)**:\n   - Umoja huchukua **y-** (*i- + a -> ya*), Wingi huchukua **z-** (*zi- + a -> za*):\n     - *Mimi*: **yangu** / **zangu** (*nyumba yangu / nyumba zangu*, *barua yangu / barua zangu*)\n     - *Wewe*: **yako** / **zako** (*nguo yako / nguo zako*)\n     - *Yeye*: **yake** / **zake** (*safari yake / safari zake*)\n     - *Sisi*: **yetu** / **zetu** (*shule yetu / shule zetu*)\n     - *Ninyi*: **yenu** / **zenu** (*kazi yenu / kazi zenu*)\n     - *Wao*: **yao** / **zao** (*biashara yao / biashara zao*)",
      "examples": [
        {
          "target": "Jina langu ni Baraka na gari langu jipya limefika leo asubuhi.",
          "reading": "Ji-na la-ngu ni Ba-ra-ka na ga-ri la-ngu ji-pya li-me-fi-ka le-o a-su-bu-hi. [ˈʤinɑ ˈlɑŋɡu ni bɑˈrɑkɑ nɑ ˈɡɑri ˈlɑŋɡu ˈʤipjɑ limɛˈfikɑ ˈlɛɔ ɑsuˈbuhi] (JEE-nah LAHN-goo nee bah-RAH-kah nah GAH-ree LAHN-goo JEE-pyah lee-may-FEE-kah LAY-oh ah-soo-BOO-hee)",
          "translation": "My name [class 5: jina langu] is Baraka and my new car [class 5: gari langu] has arrived this morning."
        },
        {
          "target": "Nyumba yetu ina madirisha makubwa na bustani yake ina maua mazuri.",
          "reading": "Nyu-mba ye-tu i-na ma-di-ri-sha ma-kbu-wa na bu-sta-ni ya-ke i-na ma-u-a ma-zu-ri. [ˈɲumbɑ ˈjɛtu ˈinɑ mɑdiˈriʃɑ mɑˈkubwɑ nɑ busˈtɑni ˈjɑkɛ ˈinɑ mɑˈuɑ mɑˈzuri] (NYOOM-bah YAY-too ee-nah mah-dee-REE-shah mah-KOO-bwah nah boo-STAH-nee YAH-kay ee-nah mah-OO-ah mah-ZOO-ree)",
          "translation": "Our house [class 9: nyumba yetu] has big windows and its garden [class 9: bustani yake] has fine flowers."
        },
        {
          "target": "Magari yao yameegeshwa nje na nguo zao zote zimefuliwa vizuri.",
          "reading": "Ma-ga-ri ya-o ya-me-e-ge-shwa nje na nguo za-o zo-te zi-me-fu-li-wa vi-zu-ri. [mɑˈɡɑri ˈjɑɔ jɑmɛɛɡɛˈʃwɑ ˈnʤɛ nɑ ˈŋɡuɔ ˈzɑɔ ˈzɔtɛ zimɛfuˈliwɑ viˈzuri] (mah-GAH-ree YAH-oh yah-may-ay-gay-SHWAH N-JAY nah N-GOO-oh ZAH-oh ZOH-tay zee-may-foo-LEE-wah vee-ZOO-ree)",
          "translation": "Their cars [class 6: magari yao] are parked outside and all their clothes [class 10: nguo zao] are washed well."
        }
      ],
      "mnemonics": [
        "Vimilikishi JI-MA na N-N: JI->langu/letu, MA->yangu/yetu; N(sg)->yangu/yetu, N(pl)->zangu/zetu!"
      ],
      "culturalNotes": [
        "Majina ya heshima kama 'Nchi yetu', 'Lugha yetu', na 'Nyumba yetu' huakisi uzalendo na fahari ya kijamii katika jamii ya Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kimilikishi sahihi cha Ngeli ya 5 (JI-MA umoja) kwa nafsi ya kwanza umoja (Mimi)?",
          "options": [
            "Shamba langu lina mazao mengi ya mahindi. (My farm has plenty of corn crops - Correct Class 5 possessive 'l-angu')",
            "Shamba yangu lina mazao mengi (Kosa la kutumia kiambishi cha N-N)",
            "Shamba changu lina mazao mengi (Kosa la kutumia kiambishi cha KI-VI)",
            "Shamba wangu lina mazao mengi (Kosa la kutumia kiambishi cha M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Shamba» (umoja katika Ngeli ya JI-MA) huchukua kiambishi cha kimilikishi «l-», hivyo huwa «shamba langu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia nyumba nyingi za wazazi (Ngeli ya 10 N-N wingi wa Wao), kirai sahihi cha kimilikishi ni kipi?",
          "options": [
            "Nyumba zao zimejengwa kwa mawe imara. (Their houses are built of strong stones - Correct Class 10 possessive 'z-ao')",
            "Nyumba yao zimejengwa (Kosa la kutumia umoja 'y-')",
            "Nyumba vyao zimejengwa (Kosa la kutumia KI-VI)",
            "Nyumba yao limejengwa (Mvurugiko wa upatanisho)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Nyumba» (wingi katika Ngeli ya N-N) huchukua kiambishi cha kimilikishi «z-», hivyo huwa «nyumba zao»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vimilikishi katika ngeli za JI-MA na N-N:",
          "options": [
            "Gari langu lina kasi, magari yetu yanafika, nyumba yangu ni safi, na nguo zetu zimekauka. (My car [l-], our cars [y-], my house [y-], and our clothes [z-].)",
            "Gari yangu lina kasi na magari zetu zinafika.",
            "Nyumba langu ni safi na nguo yetu zimekauka.",
            "Ngeli za JI-MA na N-N zinakataza matumizi ya vimilikishi vya wingi."
          ],
          "answerIndex": 0,
          "explanation": "«Gari langu lina kasi, magari yetu yanafika, nyumba yangu ni safi, na nguo zetu zimekauka.» inafuata upatanisho kamili wa JI-MA (l-/y-) na N-N (y-/z-)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u9-l4": {
    "id": "sw-u9-l4",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 4,
    "title": "Vimilikishi katika Ngeli ya U-ZI, Mahali (PA-KU-MU), na Uhusiano (-a) (U-ZI, Locatives & Associative -a)",
    "level": "A2",
    "objective": "Kuelewa upatanisho wa vimilikishi katika Ngeli ya U-ZI (wangu/zangu), ngeli za Mahali (PA-pangu, KU-kwangu, MU-mwangu), na 'a' ya uhusiano (cha, la, ya, za, wa, mwa, kwa).",
    "presentation": {
      "explanation": "Vimilikishi vya U-ZI, Mahali, na Kiunganishi '-a' cha Uhusiano:\n\n1. **Ngeli ya U-ZI (Classes 11/10: Kiambishi w- / z-)**:\n   - Umoja (**w-**): *ufunguo **wangu*** (my key), *ukuta **wetu*** (our wall), *upendo **wako*** (your love)\n   - Wingi (**z-**): *funguo **zangu*** (my keys), *kuta **zetu*** (our walls), *nyembe **zake*** (his razor blades)\n\n2. **Ngeli za Mahali (Locative Classes 16/17/18)**:\n   - **Mahali Dhahiri (PA - Class 16 -> p-)**: *mahali **pangu**, **pako**, **pake**, **petu**, **penu**, **pao*** (*mahali petu pa kazi* = our workplace)\n   - **Mahali kwa Ujumla / Upande (KU - Class 17 -> kw-)**: *nyumbani **kwangu**, **kwako**, **kwake**, **kwetu**, **kwenu**, **kwao*** (*nyumbani kwetu* = at our home)\n   - **Mahali Ndani (MU - Class 18 -> mw-)**: *ndani **mwangu**, **mwako**, **mwake**, **mwetu**, **mwenu**, **mwao*** (*chumbani mwake* = inside his room)\n\n3. **Kiunganishi '-a' cha Uhusiano (The Associative '-a')**:\n   - *mtoto **wa** mwalimu* (teacher's child), *kitabu **cha** mwanafunzi* (student's book), *gari **la** daktari* (doctor's car), *nyumba **za** kijiji* (village houses).",
      "examples": [
        {
          "target": "Nyumbani kwetu kuna ukarimu mkubwa na mahali petu pa kazi ni pazuri.",
          "reading": "Nyu-mba-ni kwe-tu ku-na u-ka-ri-mu mku-bwa na ma-ha-li pe-tu pa ka-zi ni pa-zu-ri. [ɲumbɑˈni ˈkwɛtu ˈkunɑ ukɑˈrimu mˈkubwɑ nɑ mɑˈhɑli ˈpɛtu pɑ ˈkɑzi ni pɑˈzuri] (nyoom-bah-NEE KWAY-too koo-nah oo-kah-REE-moo M-KOO-bwah nah mah-HAH-lee PAY-too pah KAH-zee nee pah-ZOO-ree)",
          "translation": "At our home [locative KU: nyumbani kwetu] there is great hospitality and our workplace [locative PA: mahali petu pa kazi] is pleasant."
        },
        {
          "target": "Ufunguo wangu wa chumba umepotea lakini funguo zote za ofisini zipo mezani.",
          "reading": "U-fu-nguo wa-ngu wa chu-mba u-me-po-te-a la-ki-ni fu-nguo zo-te za o-fi-si-ni zi-po me-za-ni. [ufuˈŋɡuɔ ˈwɑŋɡu wɑ ˈtʃumbɑ umɛpɔˈtɛɑ lɑˈkini fuˈŋɡuɔ ˈzɔtɛ zɑ ɔfiˈsini ˈzipɔ mɛˈzɑni] (oo-foon-GOO-oh WAHN-goo wah CHOO-m-bah oo-may-poh-TAY-ah lah-KEE-nee foon-GOO-oh ZOH-tay zah oh-fee-SEE-nee ZEE-poh may-ZAH-nee)",
          "translation": "My room key [class 11 U: ufunguo wangu] is lost, but all office keys [class 10 ZI: funguo zote] are on the table."
        },
        {
          "target": "Moyo wangu umejaa furaha ninapoona maendeleo ya nchi yetu pendwa.",
          "reading": "Mo-yo wa-ngu u-me-ja-a fu-ra-ha ni-na-po-o-na ma-e-nde-le-o ya nchi ye-tu pe-ndwa. [ˈmɔjɔ ˈwɑŋɡu umɛˈʤɑː fuˈrɑhɑ ninɑpɔˈɔnɑ mɑɛndɛˈlɛɔ jɑ ˈntʃi ˈjɛtu ˈpɛndwɑ] (MOH-yoh WAHN-goo oo-may-JAH-ah foo-RAH-hah nee-nah-poh-OH-nah mah-ayn-day-LAY-oh yah N-chee YAY-too PAYN-dwah)",
          "translation": "My heart [class 3: moyo wangu] is full of joy when I see the progress of our beloved country [class 9: nchi yetu]."
        }
      ],
      "mnemonics": [
        "Vimilikishi vya Mahali na U-ZI: Ufunguo wangu / funguo zangu; Nyumbani kwetu (kw-), Mahali petu (p-), Chumbani mwetu (mw-)!"
      ],
      "culturalNotes": [
        "Msemo 'Nyumbani ni nyumbani, hata kukiwa na mashaka' unaonyesha mapenzi makubwa ya mtu kwa asili yake na makazi ya familia yake."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaeleza \"Nyumbani kwetu\" kwa upatanisho sahihi wa kimilikishi cha mahali (Ngeli ya 17 KU)?",
          "options": [
            "Karibuni sana nyumbani kwetu tule chakula pamoja. (Welcome warmly to our home so we eat together - Correct Class 17 locative possessive 'kw-etu')",
            "Karibuni sana nyumbani petu tule chakula (Kosa la kutumia kiambishi cha mahali dhahiri 'p-')",
            "Karibuni sana nyumbani mwetu tule chakula (Inaonyesha ndani kabisa badala ya nyumbani kwa ujumla)",
            "Karibuni sana nyumbani zetu tule chakula (Kosa la kutumia kiambishi cha N-N)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino yenye kiambishi tamati cha mahali «nyumbani» kwa maana ya eneo la nyumbani huchukua «kwetu»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia funguo nyingi ulizo nazo (Ngeli ya 10 U-ZI wingi wa Mimi), kirai sahihi ni kipi?",
          "options": [
            "Funguo zangu ziko mfukoni. (My keys are in the pocket - Correct Class 10 plural possessive 'z-angu')",
            "Funguo yangu ziko mfukoni (Kosa la kutumia umoja 'y-')",
            "Funguo wangu ziko mfukoni (Kosa la kutumia kiambishi cha umoja wa U-ZI)",
            "Funguo vyangu ziko mfukoni (Kosa la kutumia KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi «Funguo» (Ngeli ya U-ZI) huchukua kiambishi cha kimilikishi «z-», hivyo huwa «funguo zangu»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoeleza kwa usahihi upatanisho wa vimilikishi vya ngeli za Mahali (PA, KU, MU):",
          "options": [
            "Mahali petu pa kazi ni pazuri (PA), nyumbani kwetu kuna amani (KU), na chumbani mwake kuna utulivu (MU). (Locative concord: PA -> petu/pa, KU -> kwetu, MU -> mwake.)",
            "Mahali kwetu ni pazuri na nyumbani petu kuna amani.",
            "Chumbani zetu kuna utulivu wakati mahali vyetu panapendeza.",
            "Ngeli za mahali hazina vimilikishi katika Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Mahali petu pa kazi ni pazuri (PA), nyumbani kwetu kuna amani (KU), na chumbani mwake kuna utulivu (MU).» inatekeleza upatanisho sahihi wa ngeli tatu za mahali."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u9-l5": {
    "id": "sw-u9-l5",
    "subject": "swahili",
    "unit": 9,
    "lessonNumber": 5,
    "title": "Muhtasari wa Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns Grand Synthesis)",
    "level": "A2",
    "objective": "Kuunganisha mada zote za Unit 9: mashina sita ya vimilikishi (-angu, -ako, -ake, -etu, -enu, -ao), upatanisho wa ngeli zote (A-WA, KI-VI, M-MI, JI-MA, N-N, U-ZI, PA-KU-MU), na matumizi yake katika sentensi changamano za kimawasiliano.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns Grand Synthesis):\n\n1. **Mashina Sita ya Vimilikishi**:\n   - *-angu* (my), *-ako* (your sg), *-ake* (his/her/its), *-etu* (our), *-enu* (your pl), *-ao* (their).\n\n2. **Jedwali Kamili la Upatanisho wa Vimilikishi (Master Possessive Matrix)**:\n   - **A-WA (1/2)**: *mtoto wangu / watoto wangu*, *rafiki yangu / marafiki zangu*.\n   - **KI-VI (7/8)**: *kitabu changu / vitabu vyangu*, *chumba chetu / vyumba vyetu*.\n   - **M-MI (3/4)**: *mti wangu / miti yangu*, *mji wetu / miji yetu*.\n   - **JI-MA (5/6)**: *gari langu / magari yangu*, *jina letu / majina yetu*.\n   - **N-N (9/10)**: *nyumba yangu / nyumba zangu*, *shule yetu / shule zetu*.\n   - **U-ZI (11/10)**: *ufunguo wangu / funguo zangu*, *ukuta wetu / kuta zetu*.\n   - **Mahali (16/17/18)**: *mahali petu* (PA), *nyumbani kwetu* (KU), *ndani mwetu* (MU).",
      "examples": [
        {
          "target": "Nyumbani kwetu, kitabu changu kiko mezani, gari letu liko gereji, na marafiki zangu wote wamefika.",
          "reading": "Nyu-mba-ni kwe-tu, ki-ta-bu cha-ngu ki-ko me-za-ni, ga-ri le-tu li-ko ge-re-ji, na ma-ra-fi-ki za-ngu wo-te wa-me-fi-ka. [ɲumbɑˈni ˈkwɛtu kiˈtɑbu ˈtʃɑŋɡu ˈkikɔ mɛˈzɑni ˈɡɑri ˈlɛtu ˈlikɔ ɡɛˈrɛʤi nɑ mɑrɑˈfiki ˈzɑŋɡu ˈwɔtɛ wɑmɛˈfikɑ] (nyoom-bah-NEE KWAY-too, kee-TAH-boo CHAHN-goo KEE-koh may-ZAH-nee, GAH-ree LAY-too LEE-koh gay-RAY-jee, nah mah-rah-FEE-kee ZAHN-goo WOH-tay wah-may-FEE-kah)",
          "translation": "At our home [KU: kwetu], my book [KI: changu] is on the table, our car [JI: letu] is at the garage, and all my friends [N-N/A-WA: zangu] have arrived."
        },
        {
          "target": "Kila mtu anapaswa kutunza haki zake, kulinda nchi yake, na kuwaheshimu wazazi wake.",
          "reading": "Ki-la m-tu a-na-pa-swa ku-tu-nza ha-ki za-ke, ku-li-nda nchi ya-ke, na ku-wa-he-shi-mu wa-za-zi wa-ke. [ˈkilɑ ˈmtu ɑnɑˈpɑswɑ kuˈtunzɑ ˈhɑki ˈzɑkɛ kuˈlindɑ ˈntʃi ˈjɑkɛ nɑ kuwɑhɛˈʃimu wɑˈzɑzi ˈwɑkɛ] (KEE-lah M-too ah-nah-PAH-swah koo-TOON-zah HAH-kee ZAH-kay, koo-LEEN-dah N-chee YAH-kay, nah koo-wah-hay-SHEE-moo wah-ZAH-zee WAH-kay)",
          "translation": "Everyone ought to preserve their rights [class 10: haki zake], protect their country [class 9: nchi yake], and respect their parents [class 2: wazazi wake]."
        },
        {
          "target": "Upatanisho sahihi wa vimilikishi ni nguzo kuu ya usanifu na mvuto wa kipekee wa lugha ya Kiswahili.",
          "reading": "U-pa-ta-ni-sho sa-hi-hi wa vi-mi-li-ki-shi ni ngu-zo ku-u ya u-sa-ni-fu na mvu-to wa ki-pe-ke-e wa lu-gha ya Ki-swa-hi-li. [upɑtɑˈniʃɔ sɑˈhihi wɑ vimiliˈkiʃi ni ˈŋɡuzɔ ˈkuː jɑ usɑˈnifu nɑ ˈmvutɔ wɑ kipɛˈkɛː wɑ ˈluɣɑ jɑ kiswɑˈhili] (oo-pah-tah-NEE-shoh sah-HEE-hee wah vee-mee-lee-KEE-shee nee N-GOO-zoh KOO-oo yah oo-sah-NEE-foo nah M-VOO-toh wah kee-pay-KAY-ay wah LOO-ghah yah kee-swah-HEE-lee)",
          "translation": "Accurate possessive concord [possessive grand synthesis: upatanisho wa vimilikishi] is the chief pillar of standard elegance and unique beauty in the Swahili language."
        }
      ],
      "mnemonics": [
        "Muhtasari wa Vimilikishi: Mashina 6 (-angu, -ako, -ake, -etu, -enu, -ao) + Viambishi vya ngeli (w-, y-, ch-, vy-, l-, z-, p-, kw-, mw-)!"
      ],
      "culturalNotes": [
        "Kutumia vimilikishi vya pamoja kama 'nyumbani kwetu', 'mji wetu', na 'lugha yetu' huonyesha utamaduni thabiti wa 'Ujamaa' na mshikamano wa kijamii uliopo katika jamii ya Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa vimilikishi katika ngeli mbalimbali (KI-VI, JI-MA, N-N, na Mahali)?",
          "options": [
            "Nyumbani kwetu, kitabu changu kiko mezani, gari letu limefika, na familia yangu inafurahi. (At our home [kw-], my book [ch-], our car [l-], and my family [y-] rejoices - Harmonious possessive synthesis)",
            "Nyumbani petu, kitabu yangu kiko mezani na gari zetu limefika (Mchanganyiko wa makosa ya upatanisho)",
            "Kitabu chake kiko nyumbani zetu wakati magari langu linakimbia (Mvurugiko mkubwa wa ngeli)",
            "Familia changu inasoma kitabu letu mezani (Upotoshaji wa upatanisho)"
          ],
          "answerIndex": 0,
          "explanation": "«Nyumbani kwetu, kitabu changu kiko mezani, gari letu limefika, na familia yangu inafurahi.» inatumia upatanisho sahihi wa KU (kwetu), KI (changu), JI (letu), na N (yangu)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 9, ni sheria gani ya msingi inayotawala muundo wa vimilikishi katika Kiswahili?",
          "options": [
            "Kimilikishi kinaundwa na kiambishi cha upatanisho cha ngeli husika kikiungana na mojawapo ya mashina sita ya kimilikishi, na hufuata nomino kila wakati. (Possessive is formed by noun class concord prefix + one of six possessive stems, always following the noun)",
            "Kimilikishi hutangulia nomino kama ilivyo katika Kiingereza",
            "Vimilikishi vyote huishia na herufi 'z' katika Kiswahili",
            "Ngeli zote hutumia umbo moja tu la 'yangu'"
          ],
          "answerIndex": 0,
          "explanation": "Kimilikishi huundwa kwa kiambishi ngeli + shina (-angu, -ako, -ake, -etu, -enu, -ao) na hufuata nomino inayomilikiwa."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 9 ya Vimilikishi na Upatanisho wa Kisarufi:",
          "options": [
            "Nyumbani kwetu, kitabu changu kiko mezani, gari letu jipya limeegeshwa nje, bustani yetu ina maua mazuri, na marafiki zangu wote wanajivunia ushirikiano wetu. (At our home [kw-], my book [ch-], our car [l-], our garden [y-], and all my friends [z-] take pride in our cooperation.)",
            "Nyumbani zetu kitabu yangu kiko mezani na gari changu limeegeshwa nje.",
            "Bustani letu ina maua mazuri na marafiki vyangu wanajivunia ushirikiano letu.",
            "Vimilikishi vinakataza matumizi ya maneno 'kwetu', 'changu', na 'letu'."
          ],
          "answerIndex": 0,
          "explanation": "«Nyumbani kwetu, kitabu changu kiko mezani, gari letu jipya limeegeshwa nje, bustani yetu ina maua mazuri, na marafiki zangu wote wanajivunia ushirikiano wetu.» inajumuisha upatanisho wa ngeli zote kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u10-l1": {
    "id": "sw-u10-l1",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 1,
    "title": "Ngeli ya 3/4 (M-MI): Nomino za Miti, Viungo, na Vitu Asilia (Noun Class 3/4 Vocabulary & Prefixes)",
    "level": "A2",
    "objective": "Kutambua na kutumia nomino za Ngeli ya 3/4 (M-MI) katika umoja (m-/mw-) na wingi (mi-) zinazojumuisha miti, mimea, viungo vya mwili, na vitu vya asili.",
    "presentation": {
      "explanation": "Ngeli ya 3/4 (M-MI): Muundo wa Nomino na Msamiati:\n\n1. **Dhana ya Ngeli ya 3/4 (M-MI Noun Class)**:\n   - Ngeli hii inajumuisha nomino nyingi za miti, mimea, viungo vya mwili, majira, na maumbile ya asili yasiyo ya kibinadamu.\n   - **Kanuni ya Viambishi vya Nomino**:\n     - **Umoja (Class 3)**: Huanza na **m-** kabla ya konsonanti au **mw-** kabla ya irabu.\n     - **Wingi (Class 4)**: Huanza na **mi-** (au **my-** kabla ya baadhi ya irabu).\n\n2. **Orodha ya Msamiati Muhimu wa M-MI**:\n   - **Miti na Mimea**:\n     - *mti* (tree) -> *miti* (trees)\n     - *mwembe* (mango tree) -> *miembe* (mango trees)\n     - *mnazi* (coconut tree) -> *minazi* (coconut trees)\n     - *mchungwa* (orange tree) -> *michungwa* (orange trees)\n     - *mchele* (uncooked rice grain)\n   - **Viungo vya Mwili**:\n     - *mkono* (arm / hand) -> *mikono* (arms / hands)\n     - *mguu* (leg / foot) -> *miguu* (legs / feet)\n     - *mdomo* (mouth / lip) -> *midomo* (mouths / lips)\n     - *moyo* (heart) -> *mioyo* (hearts)\n     - *mgongo* (back) -> *migongo* (backs)\n   - **Vitu vya Asili na Mazingira**:\n     - *mto* (river) -> *mito* (rivers)\n     - *mlima* (mountain) -> *milima* (mountains)\n     - *mji* (city / town) -> *miji* (cities / towns)\n     - *mwezi* (month / moon) -> *miezi* (months / moons)\n     - *mwaka* (year) -> *miaka* (years)\n     - *moto* (fire) -> *mioto* (fires)",
      "examples": [
        {
          "target": "Mti huu mrefu unazaa matunda mazuri na miti hii yote inaleta kivuli.",
          "reading": "M-ti hu-u mre-fu u-na-za-a ma-tu-nda ma-zu-ri na mi-ti hi-i yo-te i-na-le-ta ki-vu-li. [ˈmti ˈhuː mˈrɛfu unɑˈzɑː mɑˈtundɑ mɑˈzuri nɑ ˈmiti ˈhiː ˈjɔtɛ inɑˈlɛtɑ kiˈvuli] (M-tee HOO-oo m-RAY-foo oo-nah-ZAH-ah mah-TOON-dah mah-ZOO-ree nah MEE-tee HEE-ee YOH-tay ee-nah-LAY-tah kee-VOO-lee)",
          "translation": "This tall tree [class 3: mti huu] bears good fruit and all these trees [class 4: miti hii] bring shade."
        },
        {
          "target": "Mto mkubwa unapita karibu na mji wetu na mito yote inamwaga maji baharini.",
          "reading": "M-to mku-bwa u-na-pi-ta ka-ri-bu na m-ji we-tu na mi-to yo-te i-na-mwa-ga ma-ji ba-ha-ri-ni. [ˈmtɔ mˈkubwɑ unɑˈpitɑ kɑˈribu nɑ ˈmʤi ˈwɛtu nɑ ˈmitɔ ˈjɔtɛ inɑmˈwɑɡɑ ˈmɑʤi bɑhɑˈrini] (M-toh M-KOO-bwah oo-nah-PEE-tah kah-REE-boo nah M-jee WAY-too nah MEE-toh YOH-tay ee-nah-MWAH-gah MAH-jee bah-hah-REE-nee)",
          "translation": "A big river [class 3: mto mkubwa] passes near our town and all rivers [class 4: mito yote] pour water into the ocean."
        },
        {
          "target": "Mwaka mpya umeanza kwa furaha na miezi yote itakuwa na amani tele.",
          "reading": "Mwa-ka mpy-a u-me-a-nza kwa fu-ra-ha na mi-e-zi yo-te i-ta-ku-wa na a-ma-ni te-le. [ˈmwɑkɑ ˈmpjɑ umɛˈɑnzɑ kwɑ fuˈrɑhɑ nɑ miˈɛzi ˈjɔtɛ itɑˈkuwɑ nɑ ɑˈmɑni ˈtɛlɛ] (MWAH-kah M-PYAH oo-may-AHN-zah kwah foo-RAH-hah nah mee-AY-zee YOH-tay ee-tah-KOO-wah nah ah-MAH-nee TAY-lay)",
          "translation": "The new year [class 3: mwaka mpya] has started with joy and all months [class 4: miezi yote] will have plentiful peace."
        }
      ],
      "mnemonics": [
        "Ngeli ya M-MI: Umoja huanza na M-/MW- (mti, mto, mwaka), Wingi huanza na MI- (miti, mito, miaka)!"
      ],
      "culturalNotes": [
        "Mti wa Mnazi unaitwa 'mti wa uzima' katika pwani ya Waswahili kwa sababu kila sehemu yake (nazi, makuti, mbao, madumu) hutumika katika maisha ya kila siku."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Wingi sahihi wa nomino \"Mwembe\" (mango tree) katika Ngeli ya M-MI ni upi?",
          "options": [
            "miembe (Mango trees - Correct Class 4 plural prefix 'mi-')",
            "maembe (Huu ni wingi wa tunda 'embe' katika ngeli ya JI-MA badala ya mti)",
            "viembe (Kosa la kutumia kiambishi cha KI-VI)",
            "wembe (Hili ni neno tofauti kabisa lenye maana ya razor)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya mti «Mwembe» katika Ngeli ya M-MI hubadilika kuwa «miembe» katika wingi. Tofautisha na tunda lenyewe: «embe» -> «maembe» (JI-MA)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ipi kati ya zifuatazo ni kiungo cha mwili kinachopatikana katika Ngeli ya 3/4 (M-MI)?",
          "options": [
            "mkono (Arm/hand - Class 3 noun with plural 'mikono')",
            "jicho (Kiungo cha Ngeli ya 5/6 JI-MA)",
            "kichwa (Kiungo cha Ngeli ya 7/8 KI-VI)",
            "sikio (Kiungo cha Ngeli ya 5/6 JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "«Mkono» (wingi: «mikono») ni nomino ya Ngeli ya 3/4 (M-MI)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi ya umoja na wingi ya nomino zote zilizo sahihi katika Ngeli ya M-MI:",
          "options": [
            "Mti -> miti, Mlima -> milima, Mto -> mito, Mwaka -> miaka, Mguu -> miguu.",
            "Mtu -> watu, Mtoto -> watoto, Mwalimu -> walimu.",
            "Kitabu -> vitabu, Kiti -> viti, Chumba -> vyumba.",
            "Gari -> magari, Jina -> majina, Neno -> maneno."
          ],
          "answerIndex": 0,
          "explanation": "Mti/miti, mlima/milima, mto/mito, mwaka/miaka, na mguu/miguu ni nomino halisi za Ngeli ya 3/4 (M-MI)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u10-l2": {
    "id": "sw-u10-l2",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 2,
    "title": "Upatanisho wa Ngeli ya 3/4 (M-MI) katika Vitenzi na Viashiria (Verbal Concord & Demonstratives in M-MI)",
    "level": "A2",
    "objective": "Kutambua na kutumia viambishi vya upatanisho wa kitenzi (u- kwa umoja, i- kwa wingi) na viashiria vyote vitatu (huu/hii, huo/hiyo, ule/ile) katika Ngeli ya M-MI.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli ya 3/4 katika Vitenzi na Viashiria:\n\n1. **Upatanisho wa Kitenzi (Verbal Concord)**:\n   - **Umoja (Class 3)**: Kiambishi cha mtendaji ni **u-**, kiambishi cha mtendwa ni **-u-**:\n     - *Mti **u**lianguka* (The tree fell)\n     - *Mto **u**natiririka* (The river is flowing)\n     - *Mimi nina**u**kata mti* (I am cutting the tree)\n   - **Wingi (Class 4)**: Kiambishi cha mtendaji ni **i-**, kiambishi cha mtendwa ni **-i-**:\n     - *Miti **i**lianguka* (The trees fell)\n     - *Mito **i**natiririka* (The rivers are flowing)\n     - *Mimi nina**i**kata miti* (I am cutting the trees)\n\n2. **Viashiria / Vionyeshi katika Ngeli ya M-MI (Demonstratives)**:\n   - **Karibu (Near: This / These)**:\n     - Umoja: **huu** (*mti huu* = this tree)\n     - Wingi: **hii** (*miti hii* = these trees)\n   - **Mbali Kidogo / Rejelewa (Reference: That / Those)**:\n     - Umoja: **huo** (*mti huo* = that tree mentioned)\n     - Wingi: **hiyo** (*miti hiyo* = those trees mentioned)\n   - **Mbali Zaidi (Far: That / Those over there)**:\n     - Umoja: **ule** (*mti ule* = that tree yonder)\n     - Wingi: **ile** (*miti ile* = those trees yonder)",
      "examples": [
        {
          "target": "Mti huu ulianguka jana usiku lakini miti ile mingine bado imesimama imara.",
          "reading": "M-ti hu-u u-li-a-ngu-ka ja-na u-si-ku la-ki-ni mi-ti i-le mi-ngi-ne ba-do i-me-si-ma-ma i-ma-ra. [ˈmti ˈhuː uliɑˈŋɡukɑ ˈʤɑnɑ uˈsiku lɑˈkini ˈmiti ˈilɛ ˈmiŋɡinɛ ˈbɑdɔ imɛsiˈmɑmɑ iˈmɑrɑ] (M-tee HOO-oo oo-lee-ahn-GOO-kah JAH-nah oo-SEE-koo lah-KEE-nee MEE-tee EE-lay MEEN-gee-nay BAH-doh ee-may-see-MAH-mah ee-MAH-rah)",
          "translation": "This tree [huu] fell [u-li-anguka] last night, but those other trees [ile] still stand firmly [i-me-simama]."
        },
        {
          "target": "Mji huo ulikua haraka sana na sasa miji hii yote imeunganishwa kwa barabara.",
          "reading": "M-ji hu-o u-li-ku-a ha-ra-ka sa-na na sa-sa mi-ji hi-i yo-te i-me-u-nga-ni-shwa kwa ba-ra-ba-ra. [ˈmʤi ˈhuɔ uliˈkuɑ hɑˈrɑkɑ ˈsɑnɑ nɑ ˈsɑsɑ ˈmiʤi ˈhiː ˈjɔtɛ imɛuŋɡɑˈniʃwɑ kwɑ bɑrɑˈbɑrɑ] (M-jee HOO-oh oo-lee-KOO-ah hah-RAH-kah SAH-nah nah SAH-sah MEE-jee HEE-ee YOH-tay ee-may-oon-gah-NEE-shwah kwah bah-rah-BAH-rah)",
          "translation": "That town [huo] grew [u-li-kua] very fast and now all these cities [hii] are connected [i-me-unganishwa] by roads."
        },
        {
          "target": "Mlima ule mrefu una theluji kileleni na milima hiyo inapendwa na watalii.",
          "reading": "M-li-ma u-le mre-fu u-na the-lu-ji ki-le-le-ni na mi-li-ma hi-yo i-na-pe-ndwa na wa-ta-li-i. [mˈlimɑ ˈulɛ mˈrɛfu ˈunɑ θɛˈluʤi kilɛˈlɛni nɑ miˈlimɑ ˈhijɔ inɑˈpɛndwɑ nɑ wɑtɑˈliː] (m-LEE-mah OO-lay m-RAY-foo oo-nah thay-LOO-jee kee-lay-lay-NEE nah mee-LEE-mah HEE-yoh ee-nah-PAYN-dwah nah wah-tah-LEE-ee)",
          "translation": "That tall mountain yonder [ule] has snow on top and those mountains [hiyo] are loved [i-na-pendwa] by tourists."
        }
      ],
      "mnemonics": [
        "Vitenzi na Viashiria vya M-MI: Umoja = U- / huu / huo / ule; Wingi = I- / hii / hiyo / ile!"
      ],
      "culturalNotes": [
        "Mlima Kilimanjaro (mlima mrefu zaidi barani Afrika) unaheshimika sana kama kielelezo cha utukufu wa kijiografia katika ukanda wa Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kiashiria sahihi cha \"karibu\" na kiambishi cha kitenzi cha wingi katika Ngeli ya M-MI?",
          "options": [
            "Miti hii inazaa matunda mengi kila mwaka. (These trees bear plenty of fruit every year - Correct Class 4 demonstrative 'hii' and subject prefix 'i-')",
            "Miti huu inazaa matunda mengi (Kosa la kutumia kiashiria cha umoja 'huu')",
            "Miti hii unazaa matunda mengi (Kosa la kutumia kiambishi cha kitenzi cha umoja 'u-')",
            "Miti yale yanazaa matunda mengi (Kosa la kutumia upatanisho wa JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Katika wingi wa Ngeli ya M-MI, kiashiria cha karibu ni «hii» na kiambishi cha kitenzi ni «i-»: «Miti hii inazaa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapotaka kusema \"Mto ule mrefu ulikauka wakati wa kiangazi\", kiambishi kipi cha kitenzi kimetumika katika \"ulikauka\"?",
          "options": [
            "u- (Kiambishi cha mtendaji cha Ngeli ya 3 M-MI umoja: u-li-kauka)",
            "i- (Kiambishi cha wingi)",
            "ki- (Kiambishi cha KI-VI)",
            "li- (Kiambishi cha JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi cha mtendaji cha umoja katika Ngeli ya M-MI ni «u-», hivyo kitenzi huwa «ulikauka»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha sahihi ya viashiria vitatu katika Ngeli ya M-MI kwa umoja na wingi:",
          "options": [
            "Umoja: huu (this), huo (that), ule (that yonder); Wingi: hii (these), hiyo (those), ile (those yonder).",
            "Umoja: huyu, huyo, yule; Wingi: hawa, hao, wale.",
            "Umoja: hiki, hicho, kile; Wingi: hivi, hivyo, vile.",
            "Umoja: hili, hilo, lile; Wingi: haya, hayo, yale."
          ],
          "answerIndex": 0,
          "explanation": "Viashiria vya Ngeli ya M-MI ni «huu, huo, ule» (umoja) na «hii, hiyo, ile» (wingi)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u10-l3": {
    "id": "sw-u10-l3",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 3,
    "title": "Upatanisho wa Vivumishi vya Sifa katika Ngeli ya 3/4 (Adjective Concord in M-MI)",
    "level": "A2",
    "objective": "Kutambua na kutumia upatanisho wa vivumishi vya sifa vinavyopokea viambishi m-/mw- katika umoja na mi- katika wingi kulingana na sheria za kifonolojia za Ngeli ya M-MI.",
    "presentation": {
      "explanation": "Vivumishi vya Sifa katika Ngeli ya 3/4 (Adjective Concord for M-MI):\n\n1. **Upatanisho wa Vivumishi Vyenye Asili ya Kibantu**:\n   - Vivumishi vya sifa huchukua viambishi vinavyofanana sana na viambishi vya nomino:\n   - **Umoja (Class 3)**:\n     - Kabla ya Konsonanti: **m-** (*mti **mzuri***, *mti **mrefu***, *mji **mkubwa***, *mto **mpana***, *mwezi **mgumu***)\n     - Kabla ya Irabu: **mw-** (*mti **mweusi***, *mti **mweupe***, *mji **mwembamba***, *mwaka **mwingine***)\n   - **Wingi (Class 4)**:\n     - Kabla ya Konsonanti: **mi-** (*miti **mizuri***, *miti **mirefu***, *miji **mikubwa***, *mito **mipana***)\n     - Kabla ya Irabu: **mi-** / **my-** (*miti **myeusi*** / *mieupe*, *miji **miembamba***, *miaka **mingi***)\n\n2. **Vivumishi Visivyobadilika (Invariable Adjectives - Asili ya Kiarabu n.k.)**:\n   - Vivumishi hivi havipokei kiambishi chochote katika umoja au wingi:\n     - *mti **bora*** / *miti **bora*** (superb)\n     - *mji **safi*** / *miji **safi*** (clean)\n     - *mradi **ghali*** / *miradi **ghali*** (expensive)\n     - *mshahara **halali*** / *mishahara **halali*** (legitimate)",
      "examples": [
        {
          "target": "Mto mpana na safi unatiririka kando ya msitu mnene wenye miti mikubwa.",
          "reading": "M-to mpa-na na sa-fi u-na-ti-ri-ri-ka ka-ndo ya msi-tu mne-ne we-nye mi-ti mi-kbu-wa. [ˈmtɔ mˈpɑnɑ nɑ ˈsɑfi unɑtiririˈkɑ ˈkɑndɔ jɑ ˈmsitu mˈnɛnɛ ˈwɛɲɛ ˈmiti miˈkubwɑ] (M-toh m-PAH-nah nah SAH-fee oo-nah-tee-ree-REE-kah KAHN-doh yah m-SEE-too m-NAY-nay WAY-nyay MEE-tee mee-KOO-bwah)",
          "translation": "A wide [m-pana] and clean [safi] river flows beside a dense forest [msitu mnene] with large trees [miti mikubwa]."
        },
        {
          "target": "Mji mkuu una majengo marefu na mitaa mizuri yenye taa za kisasa.",
          "reading": "M-ji mku-u u-na ma-je-ngo ma-re-fu na mi-ta-a mi-zu-ri ye-nye ta-a za ki-sa-sa. [ˈmʤi mˈkuː ˈunɑ mɑˈʤɛŋɡɔ mɑˈrɛfu nɑ miˈtɑː miˈzuri ˈjɛɲɛ ˈtɑː zɑ kisɑˈsɑ] (M-jee m-KOO-oo oo-nah mah-JAYN-goh mah-RAY-foo nah mee-TAH-ah mee-ZOO-ree YAY-nyay TAH-ah zah kee-sah-SAH)",
          "translation": "The capital city [mji mkuu] has tall buildings and fine streets [mitaa mizuri] with modern lights."
        },
        {
          "target": "Mwalimu alieleza mtihani mgumu na wanafunzi walisoma kwa miaka mingi.",
          "reading": "Mwa-li-mu a-li-e-le-za mti-ha-ni mgu-mu na wa-na-fu-nzi wa-li-so-ma kwa mi-a-ka mi-ngi. [mwɑˈlimu ɑliɛˈlɛzɑ mtiˈhɑni mˈɡumu nɑ wɑnɑˈfunzi wɑliˈsɔmɑ kwɑ miˈɑkɑ ˈmiŋɡi] (mwah-LEE-moo ah-lee-ay-LAY-zah m-tee-HAH-nee m-GOO-moo nah wah-nah-FOON-zee wah-lee-SOH-mah kwah mee-AH-kah MEEN-gee)",
          "translation": "The teacher explained a difficult exam [mtihani mgumu] and students studied for many years [miaka mingi]."
        }
      ],
      "mnemonics": [
        "Vivumishi vya M-MI: Umoja = M- / MW- (mti mzuri, mti mweusi); Wingi = MI- (miti mizuri, miaka mingi)!"
      ],
      "culturalNotes": [
        "Misitu ya mikoko (mangrove forests) kando ya fukwe za Bahari ya Hindi inalinda mazingira ya pwani na kutoa makazi kwa viumbe vingi vya baharini."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina upatanisho sahihi wa kivumishi cha sifa kinachoanza na irabu katika umoja wa Ngeli ya M-MI?",
          "options": [
            "Mti mweusi ulianguka kando ya barabara. (The black tree fell beside the road - Correct Class 3 adjective prefix 'mw-' before vowel '-eusi')",
            "Mti meusi ulianguka kando ya barabara (Kosa la kukosa 'w')",
            "Mti mweusi zilianguka barabarani (Mvurugiko wa kiambishi cha kitenzi)",
            "Mti nyeusi ulianguka barabarani (Kosa la kutumia kiambishi cha N-N)"
          ],
          "answerIndex": 0,
          "explanation": "Kivumishi kinachoanza na irabu «-eusi» kinapopatana na nomino ya umoja wa M-MI (mti) huchukua «mw-» kupata «mweusi»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapovumisha nomino ya wingi \"Miji\" kwa kutumia neno \"-kubwa\", kirai sahihi ni kipi?",
          "options": [
            "miji mikubwa (Big cities - Correct Class 4 plural adjective 'mi-kubwa')",
            "miji makubwa (Kosa la kutumia kiambishi cha JI-MA)",
            "miji vikubwa (Kosa la kutumia kiambishi cha KI-VI)",
            "miji mkubwa (Kosa la kutumia umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Miji» (wingi katika Ngeli ya M-MI) huchukua kivumishi chenye kiambishi «mi-»: «miji mikubwa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vivumishi vya sifa katika Ngeli ya M-MI:",
          "options": [
            "Mto mpana una maji mengi na mito mirefu inapita katika misitu minene yenye miti mizuri. (Wide river [m-], long rivers [mi-], dense forests [mi-], and fine trees [mi-].)",
            "Mto vipana una maji mengi na mito marefu inapita.",
            "Misitu manene ina miti zizuri kando ya mto.",
            "Vivumishi vya sifa haviruhusiwi kutumika na nomino za M-MI."
          ],
          "answerIndex": 0,
          "explanation": "«Mto mpana una maji mengi na mito mirefu inapita katika misitu minene yenye miti mizuri.» inafuata kanuni sahihi zote za vivumishi katika ngeli ya M-MI."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u10-l4": {
    "id": "sw-u10-l4",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 4,
    "title": "Vivumishi vya Idadi, Vionyeshi, na Vimilikishi katika Ngeli ya M-MI (Numbers & Multi-Adjective Strings in M-MI)",
    "level": "A2",
    "objective": "Kutumia vivumishi vya idadi (mmoja, miwili, mitatu, minne, mitano, minane) na kupanga misururu ya vivumishi vingi (sifa, idadi, kimilikishi, kionyeshi) katika Ngeli ya M-MI.",
    "presentation": {
      "explanation": "Vivumishi vya Idadi na Mfuatano wa Vivumishi katika Ngeli ya M-MI:\n\n1. **Vivumishi vya Idadi (Numerals in M-MI)**:\n   - Idadi zinazochukua viambishi vya ngeli (1, 2, 3, 4, 5, 8):\n     - 1: *mti **mmoja*** (one tree)\n     - 2: *miti **miwili*** (two trees)\n     - 3: *miti **mitatu*** (three trees)\n     - 4: *miti **minne*** (four trees)\n     - 5: *miti **mitano*** (five trees)\n     - 8: *miti **minane*** (eight trees)\n   - Idadi zisizobadilika (6, 7, 9, 10, nk.):\n     - *miti sita* (6), *miti saba* (7), *miti tisa* (9), *miti kumi* (10), *miti ishirini* (20)\n\n2. **Mfuatano wa Vivumishi Vingi (Multi-Adjective Order)**:\n   - Katika sentensi yenye vivumishi vingi vinavyoielezea nomino moja ya M-MI, mpangilio wa kawaida ni:\n     `Nomino + Kivumishi cha Sifa + Kivumishi cha Idadi + Kimilikishi + Kionyeshi`\n     - *mti mkubwa wangu huu* (this big tree of mine)\n     - *miti mirefu mitatu yetu hii* (these three tall trees of ours)\n     - *mji mzuri wenu ule* (that beautiful town of yours yonder)",
      "examples": [
        {
          "target": "Miti mikubwa mitatu ilianguka barabarani baada ya upepo mkali kuvuma.",
          "reading": "Mi-ti mi-kbu-wa mi-ta-tu i-li-a-ngu-ka ba-ra-ba-ra-ni ba-a-da ya u-pe-po mka-li ku-vu-ma. [ˈmiti miˈkubwɑ miˈtɑtu iliɑˈŋɡukɑ bɑrɑbɑˈrɑni bɑˈɑdɑ jɑ uˈpɛpɔ mˈkɑli kuˈvumɑ] (MEE-tee mee-KOO-bwah mee-TAH-too ee-lee-ahn-GOO-kah bah-rah-bah-RAH-nee bah-AH-dah yah oo-PAY-poh m-KAH-lee koo-VOO-mah)",
          "translation": "Three large trees [miti mikubwa mitatu] fell on the road after a fierce wind blew."
        },
        {
          "target": "Mji wetu mdogo una mitaa minne mikubwa na miradi kumi ya maendeleo.",
          "reading": "M-ji we-tu mdo-go u-na mi-ta-a mi-nne mi-kbu-wa na mi-ra-di ku-mi ya ma-e-nde-le-o. [ˈmʤi ˈwɛtu mˈdɔɡɔ ˈunɑ miˈtɑː ˈminːɛ miˈkubwɑ nɑ miˈrɑdi ˈkumi jɑ mɑɛndɛˈlɛɔ] (M-jee WAY-too m-DOH-goh oo-nah mee-TAH-ah MEEN-nay mee-KOO-bwah nah mee-RAH-dee KOO-mee yah mah-ayn-day-LAY-oh)",
          "translation": "Our small town [mji wetu mdogo] has four large streets [mitaa minne mikubwa] and ten development projects [miradi kumi]."
        },
        {
          "target": "Mti mmoja tu unatosha kutoa matunda mengi kwa familia yetu nzima.",
          "reading": "M-ti mmo-ja tu u-na-to-sha ku-to-a ma-tu-nda me-ngi kwa fa-mi-li-a ye-tu nzi-ma. [ˈmti ˈmmɔʤɑ tu unɑˈtɔʃɑ kuˈtɔɑ mɑˈtundɑ ˈmɛŋɡi kwɑ fɑmiˈliɑ ˈjɛtu ˈnzimɑ] (M-tee M-MOH-jah too oo-nah-TOH-shah koo-TOH-ah mah-TOON-dah MAYN-gee kwah fah-mee-LEE-ah YAY-too N-ZEE-mah)",
          "translation": "Just one tree [mti mmoja] is enough to provide plenty of fruit for our entire family."
        }
      ],
      "mnemonics": [
        "Idadi za M-MI: mti mmoja, miti miwili, mitatu, minne, mitano, minane; Mpangilio: Nomino + Sifa + Idadi + Kimilikishi + Kionyeshi!"
      ],
      "culturalNotes": [
        "Katika masoko ya Afrika Mashariki, kuhesabu bidhaa kama miti ya ujenzi, magogo, na miwa hufanyika kwa nambari sanifu za Kiswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia nambari mbili (2) kwa upatanisho sahihi wa Ngeli ya M-MI?",
          "options": [
            "Miti miwili iliangushwa na mvua kubwa. (Two trees were felled by heavy rain - Correct Class 4 numeral 'miwili')",
            "Miti wawili iliangushwa na mvua (Kosa la kutumia kiambishi cha watu A-WA)",
            "Miti viwili iliangushwa na mvua (Kosa la kutumia KI-VI)",
            "Miti mawili iliangushwa na mvua (Kosa la kutumia JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Nambari mbili (2) inapopatana na nomino ya wingi wa Ngeli ya M-MI (miti) huwa «miwili»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Chagua mpangilio fasaha zaidi wa maneno katika Kiswahili sanifu kwa nomino \"Miti\":",
          "options": [
            "Miti mirefu mitatu yangu hii (These three tall trees of mine - Correct order: Noun + Adjective + Number + Possessive + Demonstrative)",
            "Hii yangu mitatu mirefu miti (Mvurugiko wa mpangilio wa Kiswahili)",
            "Mitatu miti mirefu hii yangu (Mpangilio usiofuata kanuni)",
            "Miti yangu hii mitatu mirefu (Mpangilio usio wa kawaida wa kimsingi)"
          ],
          "answerIndex": 0,
          "explanation": "Mpangilio sanifu wa maneno ni: Nomino (miti) + Sifa (mirefu) + Idadi (mitatu) + Kimilikishi (yangu) + Kionyeshi (hii)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya idadi na vivumishi katika Ngeli ya M-MI kwa ufasaha kabisa:",
          "options": [
            "Mti mmoja mkubwa na miti minne midogo ilipandwa bustanini na wanakijiji wote. (One big tree [mti mmoja mkubwa] and four small trees [miti minne midogo] were planted in the garden.)",
            "Mti mmoja mkubwa na miti manne midogo yalipandwa bustanini.",
            "Miti wawili wakubwa walipandwa kando ya mto mmoja.",
            "Vivumishi vya idadi havipatani na nomino katika Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Mti mmoja mkubwa na miti minne midogo ilipandwa bustanini na wanakijiji wote.» inatumia upatanisho sahihi wa umoja (mmoja mkubwa) na wingi (minne midogo)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u10-l5": {
    "id": "sw-u10-l5",
    "subject": "swahili",
    "unit": 10,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli ya 3/4 (M-MI) na Vivumishi (Grand Synthesis of M-MI Class)",
    "level": "A2",
    "objective": "Kuunganisha mada zote za Unit 10: msamiati wa M-MI, viambishi vya nomino (m-/mi-), upatanisho wa vitenzi (u-/i-), virejeshi vya watendwa (-u-/-i-), viashiria (huu/hii, huo/hiyo, ule/ile), vimilikishi (wangu/yangu), na vivumishi vya sifa na idadi.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli ya 3/4 (M-MI Grand Synthesis):\n\n1. **Muundo Kamili wa Ngeli ya 3/4 (Master M-MI Matrix)**:\n   - **Nomino**: *mti / miti*, *mto / mito*, *mji / miji*, *mwezi / miezi*, *mwaka / miaka*.\n   - **Kiambishi Kitenzi (SP)**: *u-* (umoja: *mti umeanguka*) / *i-* (wingi: *miti imeanguka*).\n   - **Kirejeshi Mtendwa (OP)**: *-u-* (umoja: *ninaukata*) / *-i-* (wingi: *ninaikata*).\n   - **Viashiria**: *huu / hii* (karibu), *huo / hiyo* (hapo), *ule / ile* (mbali).\n   - **Vimilikishi**: *wangu/wetu* (umoja) / *yangu/yetu* (wingi).\n   - **Vivumishi vya Sifa**: *m-/mw-* (umoja: *mti mzuri / mweusi*) / *mi-* (wingi: *miti mizuri / myeusi*).\n   - **Vivumishi vya Idadi**: *mmoja* (1) / *miwili* (2), *mitatu* (3), *minne* (4), *mitano* (5), *minane* (8).",
      "examples": [
        {
          "target": "Mti huu mrefu ulipandwa mwaka uliopita, na sasa miti hii mitano mizuri inastawi vizuri.",
          "reading": "M-ti hu-u mre-fu u-li-pa-ndwa mwa-ka u-li-o-pi-ta, na sa-sa mi-ti hi-i mi-ta-no mi-zu-ri i-na-sta-wi vi-zu-ri. [ˈmti ˈhuː mˈrɛfu ulipɑmˈbwɑ ˈmwɑkɑ uliɔˈpitɑ nɑ ˈsɑsɑ ˈmiti ˈhiː miˈtɑnɔ miˈzuri inɑsˈtɑwi viˈzuri] (M-tee HOO-oo m-RAY-foo oo-lee-PAHM-bwah MWAH-kah oo-lee-oh-PEE-tah, nah SAH-sah MEE-tee HEE-ee mee-TAH-noh mee-ZOO-ree ee-nah-STAH-wee vee-ZOO-ree)",
          "translation": "This tall tree [mti huu mrefu] was planted last year [mwaka uliopita], and now these five fine trees [miti hii mitano mizuri] are thriving [inastawi] well."
        },
        {
          "target": "Mito yote mikubwa ya nchi yetu inatiririsha maji safi kuelekea maziwa makuu na bahari.",
          "reading": "Mi-to yo-te mi-kbu-wa ya nchi ye-tu i-na-ti-ri-ri-sha ma-ji sa-fi ku-e-le-ke-a ma-zi-wa ma-ku-u na ba-ha-ri. [ˈmitɔ ˈjɔtɛ miˈkubwɑ jɑ ˈntʃi ˈjɛtu inɑtiririˈʃɑ ˈmɑʤi ˈsɑfi kuɛlɛˈkɛɑ mɑˈziwɑ mɑˈkuː nɑ bɑhɑˈrini] (MEE-toh YOH-tay mee-KOO-bwah yah N-chee YAY-too ee-nah-tee-ree-REE-shah MAH-jee SAH-fee koo-ay-lay-KAY-ah mah-ZEE-wah mah-KOO-oo nah bah-hah-REE)",
          "translation": "All large rivers [mito yote mikubwa] of our country flow [inatiririsha] clean water towards the great lakes and sea."
        },
        {
          "target": "Kujua ngeli ya M-MI kunaimarisha msingi thabiti wa lugha ya Kiswahili kwa mwanafunzi yeyote yule.",
          "reading": "Ku-ju-a nge-li ya M-MI ku-na-i-ma-ri-sha msi-ngi tha-bi-ti wa lu-gha ya Ki-swa-hi-li kwa mwa-na-fu-nzi ye-yo-te yu-le. [kuˈʤuɑ ˈŋɡɛli jɑ mˈmi kunɑimɑˈriʃɑ ˈmsiŋɡi θɑˈbiti wɑ ˈluɣɑ jɑ kiswɑˈhili kwɑ mwɑnɑˈfunzi ˈjɛjɔtɛ ˈjulɛ] (koo-JOO-ah N-GAY-lee yah M-MEE koo-nah-ee-mah-REE-shah m-SEEN-gee thah-BEE-tee wah LOO-ghah yah kee-swah-HEE-lee kwah mwah-nah-FOON-zee yay-YOH-tay YOO-lay)",
          "translation": "Knowing the M-MI noun class [M-MI grand synthesis: ngeli ya M-MI] strengthens a firm foundation of the Swahili language for any student."
        }
      ],
      "mnemonics": [
        "Muhtasari wa M-MI: Nomino (m-/mi-), Kitenzi (u-/i-), OP (-u-/-i-), Viashiria (huu/hii, huo/hiyo, ule/ile), Vimilikishi (wangu/yangu)!"
      ],
      "culturalNotes": [
        "Miji ya kihistoria kama Mombasa, Zanzibar, Bagamoyo, na Kilwa inaakisi ustawi mkubwa wa usanifu wa majengo na mitaa ya kale ya Waswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa ngeli ya 3/4 (M-MI) ikijumuisha nomino, vivumishi vya sifa, idadi, na kitenzi?",
          "options": [
            "Miti mirefu mitatu ya msituni ilianguka wakati wa dhoruba kali. (Three tall trees of the forest fell during the fierce storm - Harmonious M-MI class synthesis)",
            "Miti marefu matatu ya msituni yalianguka wakati wa dhoruba (Kosa la kutumia upatanisho wa JI-MA)",
            "Miti virefu vitatu vya msituni vilianguka wakati wa dhoruba (Kosa la kutumia upatanisho wa KI-VI)",
            "Mti mirefu mitatu ulianguka jana (Mvurugiko wa umoja na wingi)"
          ],
          "answerIndex": 0,
          "explanation": "«Miti mirefu mitatu ya msituni ilianguka wakati wa dhoruba kali.» inatekeleza upatanisho sahihi wa nomino (miti), sifa (mirefu), idadi (mitatu), uhusiano (ya), na kitenzi (ilianguka)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 10, ni upatanisho gani sahihi wa kiashiria na kitenzi kwa nomino \"Mto\" (umoja)?",
          "options": [
            "Mto huu unamwaga maji mengi ziwani. (This river pours plenty of water into the lake - Correct Class 3 demonstrative 'huu' and verbal prefix 'u-')",
            "Mto hii inamwaga maji ziwani (Kosa la kutumia upatanisho wa wingi)",
            "Mto hili linamwaga maji ziwani (Kosa la kutumia JI-MA)",
            "Mto hiki kinamwaga maji ziwani (Kosa la kutumia KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya umoja «Mto» huchukua kiashiria «huu» na kiambishi cha kitenzi «u-»: «Mto huu unamwaga»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 10 ya Ngeli ya 3/4 (M-MI) na Vivumishi katika Kiswahili:",
          "options": [
            "Mti huu mrefu ulipandwa mwaka uliopita, mto wetu unatiririka vizuri, na miti hii mitano mizuri inazaa matunda mengi kila msimu. (This tall tree was planted last year, our river flows well, and these five fine trees bear plenty of fruit every season.)",
            "Mti hii mirefu ilipandwa mwaka uliopita na mto wetu inatiririka vizuri.",
            "Miti hii mitano mizuri yanazaa matunda mengi wakati mto hili linatiririka.",
            "Ngeli ya M-MI haitofautishi kati ya umoja na wingi katika vivumishi."
          ],
          "answerIndex": 0,
          "explanation": "«Mti huu mrefu ulipandwa mwaka uliopita, mto wetu unatiririka vizuri, na miti hii mitano mizuri inazaa matunda mengi kila msimu.» inajumuisha upatanisho wa M-MI katika nyanja zote kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u11-l1": {
    "id": "sw-u11-l1",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 1,
    "title": "Ngeli ya 5/6 (JI-MA): Nomino za Matunda, Vitu, na Majimaji (Noun Class 5/6 Vocabulary & Prefixes: Ø-/ji- -> ma-)",
    "level": "B1",
    "objective": "Kutambua na kutumia nomino za Ngeli ya 5/6 (JI-MA) katika umoja (Ø- / ji- / j-) na wingi (ma-) zinazojumuisha matunda, vitu vya kawaida, viungo vya mwili, na nomino za majimaji zisizohesabika.",
    "presentation": {
      "explanation": "Ngeli ya 5/6 (JI-MA): Muundo wa Nomino na Msamiati:\n\n1. **Muundo wa Nomino za Umoja (Class 5)**:\n   - Nomino nyingi za umoja katika Ngeli ya JI-MA **hazina kiambishi chochote mwanzoni (Ø-prefix)**:\n     - *tunda* (fruit), *gari* (car), *duka* (shop), *darasa* (classroom), *shamba* (farm), *neno* (word), *somo* (lesson), *gazeti* (newspaper), *sanduku* (box / suitcase), *jiko* (stove / kitchen).\n   - Baadhi ya nomino fupi za silabi moja au mbili huchukua kiambishi **ji-** au **j-** katika umoja:\n     - *jina* (name), *jicho* (eye), *jino* (tooth), *jiwe* (stone), *jibu* (answer), *jengo* (building), *jambo* (matter / thing).\n\n2. **Muundo wa Nomino za Wingi (Class 6: Kiambishi ma-)**:\n   - Karibu nomino zote huchukua kiambishi **ma-** katika wingi (isipokuwa mabadiliko ya sauti kama *jicho* -> *macho*, *jino* -> *meno*):\n     - *tunda* -> **matunda**, *gari* -> **magari**, *duka* -> **maduka**, *darasa* -> **madarasa**, *shamba* -> **mashamba**, *jina* -> **majina**, *jiwe* -> **mawe**, *jengo* -> **majengo**.\n\n3. **Nomino za Majimaji (Mass Nouns in Class 6)**:\n   - Nomino za majimaji zipo katika wingi pekee wa Ngeli ya 6 bila kuwa na umbo la umoja:\n     - *maji* (water), *maziwa* (milk), *mafuta* (oil / fuel), *mate* (saliva), *machozi* (tears), *marashi* (perfume).",
      "examples": [
        {
          "target": "Jina langu ni Baraka na ninalipenda darasa letu jipya.",
          "reading": "Ji-na la-ngu ni Ba-ra-ka na ni-na-li-pe-nda da-ra-sa le-tu ji-pya. [ˈʤinɑ ˈlɑŋɡu ni bɑˈrɑkɑ nɑ ninɑliˈpɛndɑ dɑˈrɑsɑ ˈlɛtu ˈʤipjɑ] (JEE-nah LAHN-goo nee bah-RAH-kah nah nee-nah-lee-PAYN-dah dah-RAH-sah LAY-too JEE-pyah)",
          "translation": "My name [class 5: jina langu] is Baraka and I like our new classroom [class 5: darasa letu jipya]."
        },
        {
          "target": "Tunda hili tamu limeiva na matunda haya yote yameuzwa sokoni.",
          "reading": "Tu-nda hi-li ta-mu li-me-i-va na ma-tu-nda ha-ya yo-te ya-me-u-zwa so-ko-ni. [ˈtundɑ ˈhili ˈtɑmu limɛˈivɑ nɑ mɑˈtundɑ ˈhɑjɑ ˈjɔtɛ jɑmɛˈuzwɑ sɔˈkɔni] (TOON-dah HEE-lee TAH-moo lee-may-EE-vah nah mah-TOON-dah HAH-yah YOH-tay yah-may-OOZ-wah soh-koh-NEE)",
          "translation": "This sweet fruit [tunda hili] is ripe and all these fruits [matunda haya] have been sold at the market."
        },
        {
          "target": "Maji safi ya kunywa na maziwa baridi yapo mezani kwa wageni.",
          "reading": "Ma-ji sa-fi ya ku-nywa na ma-zi-wa ba-ri-di ya-po me-za-ni kwa wa-ge-ni. [ˈmɑʤi ˈsɑfi jɑ ˈkuɲwɑ nɑ mɑˈziwɑ bɑˈridi ˈjɑpɔ mɛˈzɑni kwɑ wɑˈɡɛni] (MAH-jee SAH-fee yah KOO-nywah nah mah-ZEE-wah bah-REE-dee YAH-poh may-ZAH-nee kwah wah-GAY-nee)",
          "translation": "Clean drinking water [class 6: maji safi] and cold milk [class 6: maziwa baridi] are on the table for guests."
        }
      ],
      "mnemonics": [
        "Ngeli ya JI-MA: Umoja = Ø- au JI- (jina, gari, tunda); Wingi = MA- (majina, magari, matunda, maji)!"
      ],
      "culturalNotes": [
        "Katika miji ya pwani, kunywa maji ya dafu (maji ya nazi mbichi) ni utamaduni maarufu wa kukaribisha wageni na kupunguza kiu ya mchana wa joto."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Wingi sahihi wa nomino \"Jicho\" (eye) katika Ngeli ya JI-MA ni upi?",
          "options": [
            "macho (Eyes - Correct Class 6 irregular plural of 'jicho')",
            "majicho (Umbo lisilo sanifu katika Kiswahili)",
            "vijicho (Hii ina maana ya wivu au kijicho badala ya viungo vya kuona)",
            "machoni (Hili ni jina lenye kiambishi cha mahali)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Jicho» hubadilika kuwa «macho» katika wingi wa Ngeli ya JI-MA."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ipi kati ya zifuatazo ni nomino ya majimaji iliyo katika Ngeli ya 6 (MA-) isiyo na umbo la umoja?",
          "options": [
            "maji (Water - Class 6 mass noun without singular form)",
            "mti (Nomino ya umoja ya Ngeli ya M-MI)",
            "kitabu (Nomino ya umoja ya Ngeli ya KI-VI)",
            "nyumba (Nomino ya Ngeli ya N-N)"
          ],
          "answerIndex": 0,
          "explanation": "«Maji» ni nomino ya majimaji ya Ngeli ya 6 (MA-) inayojitegemea katika umbo la wingi pekee."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zilizo sahihi za umoja na wingi katika Ngeli ya 5/6 (JI-MA):",
          "options": [
            "Gari -> magari, Jina -> majina, Darasa -> madarasa, Tunda -> matunda, Jiwe -> mawe.",
            "Kiti -> viti, Kitabu -> vitabu, Chumba -> vyumba.",
            "Mto -> mito, Mti -> miti, Mkono -> mikono.",
            "Mtu -> watu, Mtoto -> watoto, Mwalimu -> walimu."
          ],
          "answerIndex": 0,
          "explanation": "Gari/magari, jina/majina, darasa/madarasa, tunda/matunda, na jiwe/mawe ni nomino halisi za Ngeli ya JI-MA."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u11-l2": {
    "id": "sw-u11-l2",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 2,
    "title": "Upatanisho wa Ngeli ya 5/6 (JI-MA) katika Vitenzi na Viashiria (Verbal Concord & Demonstratives in JI-MA)",
    "level": "B1",
    "objective": "Kutambua na kutumia viambishi vya kitenzi (li- kwa umoja, ya- kwa wingi) na viashiria vyote vitatu (hili/haya, hilo/hayo, lile/yale) katika Ngeli ya JI-MA.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli ya 5/6 katika Vitenzi na Viashiria:\n\n1. **Upatanisho wa Kitenzi (Verbal Concord)**:\n   - **Umoja (Class 5)**: Kiambishi cha mtendaji ni **li-**, kiambishi cha mtendwa ni **-li-**:\n     - *Gari **li**meharibika* (The car has broken down)\n     - *Neno hili **li**likuwa gumu* (This word was difficult)\n     - *Mimi nina**li**penda darasa letu* (I like our classroom)\n   - **Wingi (Class 6)**: Kiambishi cha mtendaji ni **ya-**, kiambishi cha mtendwa ni **-ya-**:\n     - *Magari **ya**meharibika* (The cars have broken down)\n     - *Maji **ya**natiririka* (Water is flowing)\n     - *Mimi nina**ya**penda matunda haya* (I like these fruits)\n\n2. **Viashiria / Vionyeshi katika Ngeli ya JI-MA (Demonstratives)**:\n   - **Karibu (Near: This / These)**:\n     - Umoja: **hili** (*gari hili* = this car, *jina hili* = this name)\n     - Wingi: **haya** (*magari haya* = these cars, *maji haya* = this water)\n   - **Mbali Kidogo / Rejelewa (Reference: That / Those)**:\n     - Umoja: **hilo** (*gari hilo* = that car mentioned)\n     - Wingi: **hayo** (*magari hayo* = those cars mentioned)\n   - **Mbali Zaidi (Far: That / Those over there)**:\n     - Umoja: **lile** (*gari lile* = that car yonder)\n     - Wingi: **yale** (*magari yale* = those cars yonder)",
      "examples": [
        {
          "target": "Gari hili liliharibika jana lakini fundi amelitengeneza vizuri sana.",
          "reading": "Ga-ri hi-li li-li-ha-ri-bi-ka ja-na la-ki-ni fu-ndi a-me-li-te-nge-ne-za vi-zu-ri sa-na. [ˈɡɑri ˈhili lilihɑriˈbikɑ ˈʤɑnɑ lɑˈkini ˈfundi ɑmɛlitɛŋɡɛˈnɛzɑ viˈzuri ˈsɑnɑ] (GAH-ree HEE-lee lee-lee-hah-ree-BEE-kah JAH-nah lah-KEE-nee FOON-dee ah-may-lee-tayn-gay-NAY-zah vee-ZOO-ree SAH-nah)",
          "translation": "This car [gari hili] broke down [liliharibika] yesterday, but the mechanic repaired it [amelitengeneza] very well."
        },
        {
          "target": "Darasa lile lina wanafunzi wengi na madarasa haya yote yamepambwa kwa picha.",
          "reading": "Da-ra-sa li-le li-na wa-na-fu-nzi we-ngi na ma-da-ra-sa ha-ya yo-te ya-me-pa-mbwa kwa pi-cha. [dɑˈrɑsɑ ˈlilɛ ˈlinɑ wɑnɑˈfunzi ˈwɛŋɡi nɑ mɑdɑˈrɑsɑ ˈhɑjɑ ˈjɔtɛ jɑmɛpɑmˈbwɑ kwɑ ˈpitʃɑ] (dah-RAH-sah LEE-lay LEE-nah wah-nah-FOON-zee WAYN-gee nah mah-dah-RAH-sah HAH-yah YOH-tay yah-may-PAHM-bwah kwah PEE-chah)",
          "translation": "That classroom yonder [darasa lile] has many students and all these classrooms [madarasa haya] are decorated [yamepambwa] with pictures."
        },
        {
          "target": "Maji haya safi yanatoka mlimani na yatamwagiliwa mashambani kote.",
          "reading": "Ma-ji ha-ya sa-fi ya-na-to-ka mli-ma-ni na ya-ta-mwa-gi-li-wa ma-sha-mba-ni ko-te. [ˈmɑʤi ˈhɑjɑ ˈsɑfi jɑnɑˈtɔkɑ mlimɑˈni nɑ jɑtɑmwɑɡiˈliwɑ mɑʃɑmbɑˈni ˈkɔtɛ] (MAH-jee HAH-yah SAH-fee yah-nah-TOH-kah m-lee-mah-NEE nah yah-tah-mwah-gee-LEE-wah mah-shahm-bah-NEE KOH-tay)",
          "translation": "This clean water [maji haya] comes [yanatoka] from the mountain and will be irrigated [yatamwagiliwa] across the farms."
        }
      ],
      "mnemonics": [
        "Vitenzi na Viashiria vya JI-MA: Umoja = Li- / hili / hilo / lile; Wingi = Ya- / haya / hayo / yale!"
      ],
      "culturalNotes": [
        "Neno 'Jambo' (wingi: 'Mambo') liko katika ngeli ya JI-MA, ndiyo maana jibu la salamu 'Mambo?' huwa 'Mambo ni mazuri!' au 'Mambo safi!'"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kiashiria sahihi wa \"mbali kidogo\" (hilo) na kitenzi cha umoja katika Ngeli ya JI-MA?",
          "options": [
            "Darasa hilo lilifungwa kwa ajili ya likizo fupi. (That classroom was closed for a short vacation - Correct Class 5 demonstrative 'hilo' and verbal prefix 'li-')",
            "Darasa hiyo ilifungwa kwa likizo (Kosa la kutumia kiashiria cha N-N)",
            "Darasa hilo yalifungwa kwa likizo (Kosa la kutumia kiambishi cha kitenzi cha wingi)",
            "Darasa hicho kilifungwa kwa likizo (Kosa la kutumia KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya umoja ya JI-MA «Darasa» huchukua kiashiria «hilo» na kiambishi cha kitenzi «li-»: «Darasa hilo lilifungwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia maji (Ngeli ya 6 MA-), sentensi ipi ina upatanisho sahihi wa kitenzi?",
          "options": [
            "Maji yanachemka jikoni. (Water is boiling in the kitchen - Correct Class 6 subject prefix 'ya-')",
            "Maji linachemka jikoni (Kosa la kutumia kiambishi cha umoja 'li-')",
            "Maji inachemka jikoni (Kosa la kutumia kiambishi cha N-N)",
            "Maji unachemka jikoni (Kosa la kutumia kiambishi cha M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Maji» iko katika Ngeli ya 6 (MA-) na huchukua kiambishi cha kitenzi cha wingi «ya-»: «Maji yanachemka»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha sahihi ya viashiria vitatu katika Ngeli ya JI-MA kwa umoja na wingi:",
          "options": [
            "Umoja: hili (this), hilo (that), lile (that yonder); Wingi: haya (these), hayo (those), yale (those yonder).",
            "Umoja: huu, huo, ule; Wingi: hii, hiyo, ile.",
            "Umoja: hiki, hicho, kile; Wingi: hivi, hivyo, vile.",
            "Umoja: huyu, huyo, yule; Wingi: hawa, hao, wale."
          ],
          "answerIndex": 0,
          "explanation": "Viashiria vya Ngeli ya JI-MA ni «hili, hilo, lile» (umoja) na «haya, hayo, yale» (wingi)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u11-l3": {
    "id": "sw-u11-l3",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 3,
    "title": "Upatanisho wa Vivumishi vya Sifa katika Ngeli ya 5/6 (Adjective Concord in JI-MA)",
    "level": "B1",
    "objective": "Kutambua na kutumia upatanisho wa vivumishi vya sifa katika Ngeli ya JI-MA ambapo umoja hauchukui kiambishi (Ø-) kabla ya konsonanti lakini huchukua j-/ji- kabla ya irabu au '-pya', na wingi huchukua ma-/m-.",
    "presentation": {
      "explanation": "Vivumishi vya Sifa katika Ngeli ya 5/6 (Adjective Concord in JI-MA):\n\n1. **Vivumishi vya Sifa katika Umoja (Class 5)**:\n   - Kabla ya konsonanti nyingi, vivumishi vya sifa **havichukui kiambishi chochote (Ø-prefix)**:\n     - *gari **zuri*** (a fine car) [siyo *mzuri* wala *lizuri*]\n     - *darasa **kubwa*** (a big classroom)\n     - *tunda **tamu*** (a sweet fruit)\n     - *shamba **pana*** (a wide farm)\n     - *neno **zito*** (a heavy/profound word)\n   - Mzizi wa *-pya* huchukua **ji-**: *gari **jipya***, *darasa **jipya***.\n   - Kabla ya Irabu, huchukua **j-**:\n     - *shati **jeusi*** (*j-eusi*), *gari **jeupe*** (*j-eupe*), *jina **jingine*** (*j-ingine*), *tunda **jema*** (*j-ema*).\n\n2. **Vivumishi vya Sifa katika Wingi (Class 6: Kiambishi ma-)**:\n   - Kabla ya Konsonanti: **ma-**:\n     - *magari **mazuri***, *madarasa **makubwa***, *matunda **matamu***, *magari **mapya***.\n   - Kabla ya Irabu: **ma-** huungana na irabu:\n     - *mashati **meusi*** (*ma-eusi*), *magari **meupe*** (*ma-eupe*), *majina **mengine*** (*ma-ingine*), *matunda **mema*** (*ma-ema*).",
      "examples": [
        {
          "target": "Gari jipya na zuri limeegeshwa mbele ya jengo kubwa la ofisi.",
          "reading": "Ga-ri ji-pya na zu-ri li-me-e-ge-shwa mbe-le ya je-ngo mku-bwa la o-fi-si. [ˈɡɑri ˈʤipjɑ nɑ ˈzuri limɛɛɡɛˈʃwɑ ˈmbɛlɛ jɑ ˈʤɛŋɡɔ mˈkubwɑ lɑ ɔfiˈsini] (GAH-ree JEE-pyah nah ZOO-ree lee-may-ay-gay-SHWAH m-BAY-lay yah JAYN-goh m-KOO-bwah lah oh-fee-SEE)",
          "translation": "A new [jipya] and fine [zuri] car is parked in front of a big office building [jengo kubwa]."
        },
        {
          "target": "Tunda tamu jipya limenunuliwa sokoni na matunda mazuri yote yameiva.",
          "reading": "Tu-nda ta-mu ji-pya li-me-nu-nu-li-wa so-ko-ni na ma-tu-nda ma-zu-ri yo-te ya-me-i-va. [ˈtundɑ ˈtɑmu ˈʤipjɑ limɛnunuliˈwɑ sɔˈkɔni nɑ mɑˈtundɑ mɑˈzuri ˈjɔtɛ jɑmɛˈivɑ] (TOON-dah TAH-moo JEE-pyah lee-may-noo-noo-LEE-wah soh-koh-NEE nah mah-TOON-dah mah-ZOO-ree YOH-tay yah-may-EE-vah)",
          "translation": "A sweet and new fruit [tunda tamu jipya] was bought at the market and all fine fruits [matunda mazuri] are ripe."
        },
        {
          "target": "Madarasa mapya yana madirisha makubwa na wanafunzi wanasoma maneno mengi.",
          "reading": "Ma-da-ra-sa ma-pya ya-na ma-di-ri-sha ma-kbu-wa na wa-na-fu-nzi wa-na-so-ma ma-ne-no me-ngi. [mɑdɑˈrɑsɑ ˈmɑpjɑ ˈjɑnɑ mɑdiˈriʃɑ mɑˈkubwɑ nɑ wɑnɑˈfunzi wɑnɑˈsɔmɑ mɑˈnɛnɔ ˈmɛŋɡi] (mah-dah-RAH-sah MAH-pyah YAH-nah mah-dee-REE-shah mah-KOO-bwah nah wah-nah-FOON-zee wah-nah-SOH-mah mah-NAY-noh MAYN-gee)",
          "translation": "New classrooms [madarasa mapya] have big windows [madirisha makubwa] and students read many words [maneno mengi]."
        }
      ],
      "mnemonics": [
        "Vivumishi vya JI-MA: Umoja = Ø-/j-/ji- (gari zuri, gari jipya, shati jeusi); Wingi = ma-/m- (magari mazuri, mashati meusi)!"
      ],
      "culturalNotes": [
        "Vito vya thamani kama Tanzanite vinaelezewa kwa majina ya JI-MA: 'Jiwe zuri la thamani kubwa' (A beautiful gemstone of great value)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina kivumishi chenye upatanisho sahihi kwa nomino ya umoja \"Gari\" (JI-MA)?",
          "options": [
            "Gari zuri limefika kutoka bandarini. (A fine car has arrived from the port - Correct Class 5 zero-prefix adjective 'zuri')",
            "Gari mzuri limefika (Kosa la kutumia kiambishi cha A-WA au M-MI)",
            "Gari kizuri limefika (Kosa la kutumia kiambishi cha KI-VI)",
            "Gari lizuri limefika (Umbo lisilokuwepo katika sarufi sanifu)"
          ],
          "answerIndex": 0,
          "explanation": "Katika umoja wa JI-MA, kivumishi «-zuri» hakichukui kiambishi chochote: «gari zuri»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapovumisha nomino ya wingi \"Mashati\" kwa kutumia kivumishi kinachoanza na irabu \"-eusi\" (black), umbo sahihi ni lipi?",
          "options": [
            "mashati meusi (Black shirts - Correct Class 6 merged prefix 'ma-eusi' -> 'meusi')",
            "mashati maeusi (Kosa la kutounganisha irabu)",
            "mashati myeusi (Huu ni upatanisho wa Ngeli ya 4 M-MI)",
            "mashati vyeusi (Huu ni upatanisho wa Ngeli ya 8 KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Katika Ngeli ya 6 (MA-), «ma-» + «-eusi» huungana na kutoa «meusi»: «mashati meusi»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vivumishi vya sifa katika Ngeli ya JI-MA:",
          "options": [
            "Darasa kubwa jipya limefunguliwa na madarasa mapya yote yana madirisha mazuri meusi. (Big new classroom [kubwa jipya], new classrooms [mapya], and fine black windows [mazuri meusi].)",
            "Darasa likubwa lizuri limefunguliwa na madarasa vipya vina madirisha vizuri.",
            "Darasa mkubwa mpya limefunguliwa na madarasa zote zina madirisha.",
            "Vivumishi vya sifa havibadiliki kamwe katika lugha ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Darasa kubwa jipya limefunguliwa na madarasa mapya yote yana madirisha mazuri meusi.» inafuata sheria zote za upatanisho wa vivumishi katika ngeli ya JI-MA."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u11-l4": {
    "id": "sw-u11-l4",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 4,
    "title": "Vivumishi vya Idadi, Vimilikishi, na Ukubwa wa Nomino katika JI-MA (Numbers, Possessives & Augmentatives in JI-MA)",
    "level": "B1",
    "objective": "Kutumia vivumishi vya idadi (moja, mawili, matatu, manne, matano, manane), vimilikishi (langu/yangu), na kuelewa dhana ya ukubwa (Augmentatives) inayoundwa kwa kuhamisha nomino katika ngeli ya JI-MA.",
    "presentation": {
      "explanation": "Vivumishi vya Idadi, Vimilikishi, na Ukubwa katika Ngeli ya JI-MA:\n\n1. **Vivumishi vya Idadi (Numerals in JI-MA)**:\n   - Idadi ya 1 (Umoja): **moja** (*gari moja* = one car, *tunda moja* = one fruit) [haina kiambishi cha ziada]\n   - Idadi zinazochukua **ma-** (2, 3, 4, 5, 8):\n     - 2: *magari **mawili*** (two cars)\n     - 3: *magari **matatu*** (three cars)\n     - 4: *magari **manne*** (four cars)\n     - 5: *magari **matano*** (five cars)\n     - 8: *magari **manane*** (eight cars)\n   - Idadi zisizobadilika (6, 7, 9, 10, nk.): *magari sita, saba, tisa, kumi*.\n\n2. **Dhana ya Ukubwa wa Nomino (Augmentative Construction)**:\n   - Nomino ya ngeli yoyote inapohamishiwa katika Ngeli ya 5/6 (JI-MA), hupata maana ya **ukubwa uliopitiliza au uzito mkubwa** (Augmentative):\n     - *mtu* (person) -> **jitu** (giant) / **majitu** (giants)\n     - *nyumba* (house) -> **jumba** (mansion / huge building) / **majumba**\n     - *mlango* (door) -> **lango** (grand gate) / **malango**\n     - *mbwa* (dog) -> **jibwa** (huge dog) / **majibwa**\n     - *mji* (town) -> **jiji** (great metropolis / city) / **majiji**\n     - *chombo* (vessel) -> **jombo** (huge ship/vessel) / **majombo**",
      "examples": [
        {
          "target": "Magari makubwa matano ya safari yalisimama kando ya shamba letu.",
          "reading": "Ma-ga-ri ma-kbu-wa ma-ta-no ya sa-fa-ri ya-li-si-ma-ma ka-ndo ya sha-mba le-tu. [mɑˈɡɑri mɑˈkubwɑ mɑˈtɑnɔ jɑ sɑˈfɑri jɑlisiˈmɑmɑ ˈkɑndɔ jɑ ˈʃɑmbɑ ˈlɛtu] (mah-GAH-ree mah-KOO-bwah mah-TAH-noh yah sah-FAH-ree yah-lee-see-MAH-mah KAHN-doh yah SHAHM-bah LAY-too)",
          "translation": "Five large safari cars [magari makubwa matano] stopped beside our farm [shamba letu]."
        },
        {
          "target": "Jumba lile kuu lina milango mikubwa na bustani nzuri ya maua.",
          "reading": "Ju-mba li-le ku-u li-na mi-la-ngo mi-kbu-wa na bu-sta-ni nzu-ri ya ma-u-a. [ˈʤumbɑ ˈlilɛ ˈkuː ˈlinɑ miˈlɑŋɡɔ miˈkubwɑ nɑ busˈtɑni ˈnzuri jɑ mɑˈuɑ] (JOOM-bah LEE-lay KOO-oo LEE-nah mee-LAHN-goh mee-KOO-bwah nah boo-STAH-nee N-ZOO-ree yah mah-OO-ah)",
          "translation": "That grand mansion [augmentative: jumba lile] has big doors and a fine flower garden."
        },
        {
          "target": "Lango kuu la jiji lilifunguliwa asubuhi na wageni wote walikaribishwa.",
          "reading": "La-ngo ku-u la ji-ji li-li-fu-ngu-li-wa a-su-bu-hi na wa-ge-ni wo-te wa-li-ka-ri-bi-shwa. [ˈlɑŋɡɔ ˈkuː lɑ ˈʤiʤi lilifuŋɡuˈliwɑ ɑsuˈbuhi nɑ wɑˈɡɛni ˈwɔtɛ wɑlikɑriˈbiʃwɑ] (LAHN-goh KOO-oo lah JEE-jee lee-lee-foon-goo-LEE-wah ah-soo-BOO-hee nah wah-GAY-nee WOH-tay wah-lee-kah-ree-BEE-shwah)",
          "translation": "The main city gate [augmentative: lango kuu] was opened in the morning and all guests were welcomed."
        }
      ],
      "mnemonics": [
        "Idadi na Ukubwa katika JI-MA: Gari moja, magari mawili/matatu; Mtu -> Jitu, Nyumba -> Jumba, Mlango -> Lango!"
      ],
      "culturalNotes": [
        "Milango ya kuchongwa ya Zanzibar (Zanzibar doors) huitwa 'Malango makuu' yanayoashiria utajiri, ukarimu, na hadhi ya kijamii ya mwenye nyumba."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia nambari mbili (2) kwa upatanisho sahihi wa Ngeli ya JI-MA?",
          "options": [
            "Magari mawili yalisimama mbele ya lango kuu. (Two cars stopped in front of the main gate - Correct Class 6 numeral 'mawili')",
            "Magari miwili yalisimama (Kosa la kutumia kiambishi cha M-MI)",
            "Magari viwili yalisimama (Kosa la kutumia KI-VI)",
            "Magari wawili yalisimama (Kosa la kutumia A-WA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Magari» (wingi wa JI-MA) huchukua kivumishi cha idadi «mawili»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ya kawaida \"Nyumba\" inapohamishwa katika Ngeli ya JI-MA kuonyesha ukubwa uliopitiliza (augmentative), huwa neno gani?",
          "options": [
            "jumba (Mansion / huge building - Augmentative form in Class 5)",
            "kijumba (Huu ni udogo katika ngeli ya KI-VI)",
            "unyumba (Hali ya ndoa)",
            "manyumba (Huu ni wingi tu bila sheria ya umoja wa jumba)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Nyumba» inapopata ukubwa katika Ngeli ya JI-MA hubadilika kuwa «jumba» (wingi: «majumba»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya idadi na dhana ya ukubwa katika Ngeli ya JI-MA kwa ukamilifu:",
          "options": [
            "Majitu matatu yalisimama mbele ya majumba makubwa mawili ya jiji kuu. (Three giants [majitu matatu] stood in front of two big mansions [majumba makubwa mawili] of the great metropolis [jiji].)",
            "Majitu mitatu yalisimama mbele ya majumba viwili vya jiji.",
            "Watu matatu walisimama mbele ya nyumba mawili.",
            "Ukubwa wa nomino hautumiki katika lugha ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Majitu matatu yalisimama mbele ya majumba makubwa mawili ya jiji kuu.» inatumia miundo sahihi ya ukubwa (majitu, majumba, jiji) na idadi (matatu, mawili)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u11-l5": {
    "id": "sw-u11-l5",
    "subject": "swahili",
    "unit": 11,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli ya 5/6 (JI-MA) na Upatanisho (Grand Synthesis of JI-MA Class)",
    "level": "B1",
    "objective": "Kuunganisha mada zote za Unit 11: msamiati wa JI-MA, nomino za majimaji, upatanisho wa vitenzi (li-/ya-), virejeshi vya watendwa (-li-/-ya-), viashiria (hili/haya, hilo/hayo, lile/yale), vimilikishi (langu/yangu), vivumishi vya sifa, idadi, na ukubwa wa nomino.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli ya 5/6 (Grand Synthesis of JI-MA Class):\n\n1. **Muundo Kamili wa Ngeli ya 5/6 (Master JI-MA Matrix)**:\n   - **Nomino**: *gari / magari*, *jina / majina*, *darasa / madarasa*, *tunda / matunda*, *jiwe / mawe*, *maji*, *maziwa*.\n   - **Kiambishi Kitenzi (SP)**: *li-* (umoja: *gari limefika*) / *ya-* (wingi: *magari yamefika*, *maji yanachemka*).\n   - **Kirejeshi Mtendwa (OP)**: *-li-* (umoja: *ninalipenda*) / *-ya-* (wingi: *ninayapenda*).\n   - **Viashiria**: *hili / haya* (karibu), *hilo / hayo* (hapo), *lile / yale* (mbali).\n   - **Vimilikishi**: *langu/letu* (umoja) / *yangu/yetu* (wingi).\n   - **Vivumishi vya Sifa**: *Ø-/j-/ji-* (umoja: *gari zuri, jipya, jeusi*) / *ma-/m-* (wingi: *magari mazuri, mapya, meusi*).\n   - **Vivumishi vya Idadi**: *moja* (1) / *mawili* (2), *matatu* (3), *manne* (4), *matano* (5), *manane* (8).\n   - **Ukubwa wa Nomino (Augmentative)**: *mtu -> jitu*, *nyumba -> jumba*, *mlango -> lango*, *mji -> jiji*.",
      "examples": [
        {
          "target": "Gari letu jipya liliwasili jana, na maduka yote matano yamefunguliwa mjini.",
          "reading": "Ga-ri le-tu ji-pya li-li-wa-si-li ja-na, na ma-du-ka yo-te ma-ta-no ya-me-fu-ngu-li-wa mji-ni. [ˈɡɑri ˈlɛtu ˈʤipjɑ liliwɑˈsili ˈʤɑnɑ nɑ mɑˈdukɑ ˈjɔtɛ mɑˈtɑnɔ jɑmɛfuŋɡuˈliwɑ mʤiˈni] (GAH-ree LAY-too JEE-pyah lee-lee-wah-SEE-lee JAH-nah, nah mah-DOO-kah YOH-tay mah-TAH-noh yah-may-foon-goo-LEE-wah m-jee-NEE)",
          "translation": "Our new car [gari letu jipya] arrived yesterday, and all five shops [maduka yote matano] have opened in town."
        },
        {
          "target": "Jina lake linafahamika kote na maneno yake yenye hekima yaliwasaidia watu wengi.",
          "reading": "Ji-na la-ke li-na-fa-ha-mi-ka ko-te na ma-ne-no ya-ke ye-nye he-ki-ma ya-li-wa-sa-i-dia wa-tu we-ngi. [ˈʤinɑ ˈlɑkɛ linɑfɑhɑˈmikɑ ˈkɔtɛ nɑ mɑˈnɛnɔ ˈjɑkɛ ˈjɛɲɛ hɛˈkimɑ jɑliwɑsɑˈidiɑ ˈwɑtu ˈwɛŋɡi] (JEE-nah LAH-kay lee-nah-fah-hah-MEE-kah KOH-tay nah mah-NAY-noh YAH-kay YAY-nyay hay-KEE-mah yah-lee-wah-sah-EE-dee-ah WAH-too WAYN-gee)",
          "translation": "His name [jina lake] is known everywhere and his wise words [maneno yake] helped many people."
        },
        {
          "target": "Kujifunza upatanisho wa ngeli ya JI-MA kunamwezesha mzungumzaji kueleza sifa, idadi, na ukubwa wa vitu kwa usahihi kamili wa lugha ya Kiswahili.",
          "reading": "Ku-ji-fu-nza u-pa-ta-ni-sho wa nge-li ya JI-MA ku-na-mwe-ze-sha mzu-ngu-mza-ji ku-e-le-za si-fa, i-da-di, na u-kbu-wa wa vi-tu kwa u-sa-hi-hi ka-mi-li wa lu-gha ya Ki-swa-hi-li. [kuʤiˈfunzɑ upɑtɑˈniʃɔ wɑ ˈŋɡɛli jɑ ˈʤimɑ kunɑmwɛˈzɛʃɑ mzuŋɡumˈzɑʤi kuɛˈlɛzɑ ˈsifɑ iˈdɑdi nɑ mˈkubwɑ wɑ ˈvitu kwɑ usɑˈhihi kɑˈmili wɑ ˈluɣɑ jɑ kiswɑˈhili] (koo-jee-FOON-zah oo-pah-tah-NEE-shoh wah N-GAY-lee yah JEE-MAH koo-nah-mway-ZAY-shah m-zoon-goom-ZAH-jee koo-ay-LAY-zah SEE-fah, ee-DAH-dee, nah oo-KOO-bwah wah VEE-too kwah oo-sah-HEE-hee kah-MEE-lee wah LOO-ghah yah kee-swah-HEE-lee)",
          "translation": "Mastering the JI-MA noun class concord [JI-MA grand synthesis: upatanisho wa JI-MA] enables the speaker to express qualities, quantities, and augmentatives with complete linguistic accuracy in Swahili."
        }
      ],
      "mnemonics": [
        "Muhtasari wa JI-MA: Umoja (li-, hili/hilo/lile, langu, zuri, jipya); Wingi (ya-, haya/hayo/yale, yangu, mazuri, mapya)!"
      ],
      "culturalNotes": [
        "Semi za hekima za Kiswahili kama 'Neno jema hulainisha jiwe gumu' huakisi umaridadi wa upatanisho wa ngeli ya JI-MA katika fasihi simulizi."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa ngeli ya 5/6 (JI-MA) ikijumuisha nomino, sifa, idadi, na kitenzi?",
          "options": [
            "Madarasa mapya matatu yalijengwa na wananchi wote kijijini. (Three new classrooms were built by all citizens in the village - Harmonious JI-MA class synthesis)",
            "Madarasa vipya vitatu vilijengwa kijijini (Kosa la kutumia upatanisho wa KI-VI)",
            "Madarasa mirefu mitatu ilijengwa kijijini (Kosa la kutumia upatanisho wa M-MI)",
            "Darasa mapya matatu yalijengwa jana (Mvurugiko wa umoja na wingi)"
          ],
          "answerIndex": 0,
          "explanation": "«Madarasa mapya matatu yalijengwa na wananchi wote kijijini.» inatekeleza upatanisho sahihi wa nomino (madarasa), sifa (mapya), idadi (matatu), na kitenzi (yalijengwa)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 11, ni upatanisho gani sahihi wa kiashiria, kivumishi cha sifa, na kitenzi kwa nomino \"Gari\" (umoja)?",
          "options": [
            "Gari hili zuri liliendeshwa kwa umakini mkubwa. (This fine car was driven with great care - Correct Class 5 demonstrative 'hili', zero-prefix adjective 'zuri', and verbal prefix 'li-')",
            "Gari hii nzuri iliendeshwa kwa umakini (Kosa la kutumia upatanisho wa N-N)",
            "Gari hiki kizuri kiliendeshwa kwa umakini (Kosa la kutumia KI-VI)",
            "Gari huu mzuri uliendeshwa kwa umakini (Kosa la kutumia M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Gari» (umoja katika JI-MA) huchukua kiashiria «hili», sifa «zuri», na kitenzi «liliendeshwa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 11 ya Ngeli ya 5/6 (JI-MA) na Upatanisho katika Kiswahili:",
          "options": [
            "Gari letu jipya liliwasili jana, jumba lile kuu limepambwa kwa mawe mazuri, na maduka yote matano yamefunguliwa mjini. (Our new car [l-], that grand mansion [l-], fine stones [ma-], and all five shops [ma-].)",
            "Gari yetu mpya iliwasili jana na jumba kile kimepambwa kwa mawe vizuri.",
            "Maduka yote mitano yamefunguliwa mjini wakati gari yetu inafika.",
            "Ngeli ya JI-MA hairuhusu matumizi ya vivumishi vya idadi."
          ],
          "answerIndex": 0,
          "explanation": "«Gari letu jipya liliwasili jana, jumba lile kuu limepambwa kwa mawe mazuri, na maduka yote matano yamefunguliwa mjini.» inajumuisha upatanisho wa JI-MA katika nyanja zote kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u12-l1": {
    "id": "sw-u12-l1",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 1,
    "title": "Ngeli ya 7/8 (KI-VI): Nomino za Vitu, Lugha, na Miundo ya Umoja na Wingi (Class 7/8 Vocabulary: ki-/ch- -> vi-/vy-)",
    "level": "B1",
    "objective": "Kutambua na kutumia nomino za Ngeli ya 7/8 (KI-VI) katika umoja (ki- / ch-) na wingi (vi- / vy-) zinazojumuisha vifaa, lugha za mataifa, na vyakula.",
    "presentation": {
      "explanation": "Ngeli ya 7/8 (KI-VI): Muundo wa Nomino na Msamiati:\n\n1. **Muundo wa Umoja (Class 7: Kiambishi ki- / ch-)**:\n   - Kabla ya konsonanti, nomino huanza na **ki-**:\n     - *kitabu* (book), *kiti* (chair), *kikombe* (cup), *kisu* (knife), *kioo* (mirror / glass), *kisima* (well), *kisiwa* (island), *kitanda* (bed), *kichwa* (head), *kifua* (chest).\n   - Kabla ya irabu, kiambishi hubadilika kuwa **ch-** (*ki- + irabu -> ch-*):\n     - *chumba* (room) [ki-umba],\n     - *chuo* (college / university) [ki-uo],\n     - *chakula* (food) [ki-akula],\n     - *chombo* (vessel / tool / container) [ki-ombo],\n     - *choo* (toilet / latrine) [ki-oo].\n   - **Majina ya Lugha** huingia katika ngeli hii kwa kiambishi **Ki-**:\n     - *Kiswahili, Kiingereza, Kifaransa, Kiarabu, Kireno, Kijerumani, Kichina*.\n\n2. **Muundo wa Wingi (Class 8: Kiambishi vi- / vy-)**:\n   - Kabla ya konsonanti, nomino huanza na **vi-**:\n     - *vitabu, viti, vikombe, visu, vioo, visima, visiwa, vitanda, vichwa, vifua*.\n   - Kabla ya irabu, kiambishi hubadilika kuwa **vy-** (*vi- + irabu -> vy-*):\n     - *vyumba, vyuo, vyakula, vyombo, vyoo*.",
      "examples": [
        {
          "target": "Kitabu hiki cha Kiswahili kina mafunzo bora na vitabu hivi vyote viko maktabani.",
          "reading": "Ki-ta-bu hi-ki cha Ki-swa-hi-li ki-na ma-fu-nzo bo-ra na vi-ta-bu hi-vi vyo-te vi-ko ma-kta-ba-ni. [kiˈtɑbu ˈhiki tʃɑ kiswɑˈhili ˈkinɑ mɑˈfunzɔ ˈbɔrɑ nɑ viˈtɑbu ˈhivi ˈvjɔtɛ ˈvikɔ mɑktɑˈbɑni] (kee-TAH-boo HEE-kee chah kee-swah-HEE-lee KEE-nah mah-FOON-zoh BOH-rah nah vee-TAH-boo HEE-vee VYOH-tay VEE-koh mahk-tah-BAH-nee)",
          "translation": "This Swahili book [kitabu hiki cha Kiswahili] has excellent lessons and all these books [vitabu hivi] are in the library."
        },
        {
          "target": "Chumba chetu kimesafishwa vizuri na vyumba vyote vya wageni vimeandaliwa.",
          "reading": "Chu-mba che-tu ki-me-sa-fi-shwa vi-zu-ri na vyu-mba vyo-te vya wa-ge-ni vi-me-a-nda-li-wa. [ˈtʃumbɑ ˈtʃɛtu kimɛsɑˈfiʃwɑ viˈzuri nɑ ˈvjumbɑ ˈvjɔtɛ vjɑ wɑˈɡɛni vimɛɑndɑˈliwɑ] (CHOO-m-bah CHAY-too kee-may-sah-FEE-shwah vee-ZOO-ree nah VYOO-m-bah VYOH-tay vyah wah-GAY-nee vee-may-ahn-dah-LEE-wah)",
          "translation": "Our room [chumba chetu] has been cleaned well and all guest rooms [vyumba vyote] are prepared."
        },
        {
          "target": "Chakula kitamu cha jioni kimeliwa chote na vyakula vya asili vinapendwa sana.",
          "reading": "Cha-ku-la ki-ta-mu cha ji-o-ni ki-me-li-wa cho-te na vya-ku-la vya a-si-li vi-na-pe-ndwa sa-na. [tʃɑˈkulɑ kiˈtɑmu tʃɑ ʤiˈɔni kimɛˈliwɑ ˈtʃɔtɛ nɑ vjɑˈkulɑ vjɑ ɑˈsili vinɑˈpɛndwɑ ˈsɑnɑ] (chah-KOO-lah kee-TAH-moo chah jee-OH-nee kee-may-LEE-wah CHOH-tay nah vyah-KOO-lah vyah ah-SEE-lee vee-nah-PAYN-dwah SAH-nah)",
          "translation": "The delicious dinner [chakula kitamu] was all eaten and traditional foods [vyakula vya asili] are loved very much."
        }
      ],
      "mnemonics": [
        "Ngeli ya KI-VI: Umoja = KI- / CH- (kitabu, chumba, chakula); Wingi = VI- / VY- (vitabu, vyumba, vyakula)!"
      ],
      "culturalNotes": [
        "Lugha ya Kiswahili inachukua kiambishi cha ngeli ya KI-VI ('Ki-') kumaanisha 'namna/utamaduni au lugha ya Waswahili'."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Wingi sahihi wa nomino \"Chuo\" (college / university) katika Ngeli ya KI-VI ni upi?",
          "options": [
            "vyuo (Colleges / universities - Correct Class 8 plural prefix 'vy-' before vowel)",
            "machuo (Kosa la kutumia kiambishi cha JI-MA)",
            "vichuo (Kosa la kutounganisha 'vi-' na irabu 'u')",
            "mavyuo (Mchanganyiko usio sahihi wa viambishi viwili)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Chuo» (ambayo asili yake ni *ki-uo*) hubadilika kuwa «vyuo» (*vi-uo*) katika wingi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ipi kati ya zifuatazo ni nomino ya Ngeli ya 7 (KI-VI umoja) inayoanza na 'ch-' kabla ya irabu?",
          "options": [
            "chumba (Room - Class 7 noun from ki-umba)",
            "chui (Leopard - N-N noun / Class 9 animal)",
            "chai (Tea - N-N noun / Class 9 mass noun)",
            "chapa (Brand/print - N-N noun)"
          ],
          "answerIndex": 0,
          "explanation": "«Chumba» (wingi: «vyumba») ni nomino halisi ya Ngeli ya KI-VI."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zilizo sahihi za umoja na wingi katika Ngeli ya 7/8 (KI-VI):",
          "options": [
            "Kitabu -> vitabu, Chumba -> vyumba, Chakula -> vyakula, Kiti -> viti, Chombo -> vyombo.",
            "Gari -> magari, Jina -> majina, Neno -> maneno.",
            "Mti -> miti, Mto -> mito, Mkono -> mikono.",
            "Mtoto -> watoto, Mtu -> watu, Mwalimu -> walimu."
          ],
          "answerIndex": 0,
          "explanation": "Kitabu/vitabu, chumba/vyumba, chakula/vyakula, kiti/viti, na chombo/vyombo ni mifano halisi ya Ngeli ya KI-VI."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u12-l2": {
    "id": "sw-u12-l2",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 2,
    "title": "Upatanisho wa Ngeli ya 7/8 (KI-VI) katika Vitenzi na Viashiria (Verbal Concord & Demonstratives in KI-VI)",
    "level": "B1",
    "objective": "Kutambua na kutumia viambishi vya upatanisho wa kitenzi (ki- kwa umoja, vi- kwa wingi) na viashiria vyote vitatu (hiki/hivi, hicho/hivyo, kile/vile) katika Ngeli ya KI-VI.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli ya 7/8 katika Vitenzi na Viashiria:\n\n1. **Upatanisho wa Kitenzi (Verbal Concord)**:\n   - **Umoja (Class 7)**: Kiambishi cha mtendaji ni **ki-**, kiambishi cha mtendwa ni **-ki-**:\n     - *Kiti **ki**mevunjika* (The chair has broken)\n     - *Chumba **ki**mesafishwa* (The room has been cleaned)\n     - *Mimi nina**ki**soma kitabu hiki* (I am reading this book)\n   - **Wingi (Class 8)**: Kiambishi cha mtendaji ni **vi-**, kiambishi cha mtendwa ni **-vi-**:\n     - *Viti **vi**mevunjika* (The chairs have broken)\n     - *Vyumba **vi**mesafishwa* (The rooms have been cleaned)\n     - *Mimi nina**vi**soma vitabu hivi* (I am reading these books)\n\n2. **Viashiria / Vionyeshi katika Ngeli ya KI-VI (Demonstratives)**:\n   - **Karibu (Near: This / These)**:\n     - Umoja: **hiki** (*kitabu hiki* = this book, *chumba hiki* = this room)\n     - Wingi: **hivi** (*vitabu hivi* = these books, *vyumba hivi* = these rooms)\n   - **Mbali Kidogo / Rejelewa (Reference: That / Those)**:\n     - Umoja: **hicho** (*kitabu hicho* = that book mentioned)\n     - Wingi: **hivyo** (*vitabu hivyo* = those books mentioned)\n   - **Mbali Zaidi (Far: That / Those over there)**:\n     - Umoja: **kile** (*kitabu kile* = that book yonder)\n     - Wingi: **vile** (*vitabu vile* = those books yonder)",
      "examples": [
        {
          "target": "Kiti hiki kilivunjika jana lakini fundi amekitengeneza vizuri.",
          "reading": "Ki-ti hi-ki ki-li-vu-nji-ka ja-na la-ki-ni fu-ndi a-me-ki-te-nge-ne-za vi-zu-ri. [ˈkiti ˈhiki kilivunˈʤikɑ ˈʤɑnɑ lɑˈkini ˈfundi ɑmɛkitɛŋɡɛˈnɛzɑ viˈzuri] (KEE-tee HEE-kee kee-lee-voon-JEE-kah JAH-nah lah-KEE-nee FOON-dee ah-may-kee-tayn-gay-NAY-zah vee-ZOO-ree)",
          "translation": "This chair [kiti hiki] broke [kilivunjika] yesterday, but the artisan repaired it [OP -ki-: amekitengeneza] well."
        },
        {
          "target": "Chombo kile kilitua bandarini na vyombo hivi vyote vinasafirisha abiria salama.",
          "reading": "Cho-mbo ki-le ki-li-tua ba-nda-ri-ni na vyo-mbo hi-vi vyo-te vi-na-sa-fi-ri-sha a-bi-ria sa-la-ma. [ˈtʃɔmbɔ ˈkilɛ kiliˈtuɑ bɑndɑˈrini nɑ ˈvjɔmbɔ ˈhivi ˈvjɔtɛ vinɑsɑfiriˈʃɑ ɑbiˈriɑ sɑˈlɑmɑ] (CHOH-m-boh KEE-lay kee-lee-TOO-ah bahn-dah-REE-nee nah VYOH-m-boh HEE-vee VYOH-tay vee-nah-sah-fee-REE-shah ah-bee-REE-ah sah-LAH-mah)",
          "translation": "That vessel yonder [chombo kile] docked [kilitua] at the port and all these vessels [vyombo hivi] transport passengers safely."
        },
        {
          "target": "Kikombe hicho kilianguka sakafuni lakini hakikuvunjika kamwe.",
          "reading": "Ki-ko-mbe hi-cho ki-li-a-ngu-ka sa-ka-fu-ni la-ki-ni ha-ki-ku-vu-nji-ka ka-mwe. [kiˈkɔmbɛ ˈhitʃɔ kiliɑˈŋɡukɑ sɑkɑˈfuni lɑˈkini hɑkikuvunˈʤikɑ ˈkɑmwɛ] (kee-KOHM-bay HEE-choh kee-lee-ahn-GOO-kah sah-kah-FOO-nee lah-KEE-nee hah-kee-koo-voon-JEE-kah KAH-mway)",
          "translation": "That cup [kikombe hicho] fell [kilianguka] onto the floor, but it did not break [negated past: hakikuvunjika] at all."
        }
      ],
      "mnemonics": [
        "Vitenzi na Viashiria vya KI-VI: Umoja = Ki- / hiki / hicho / kile; Wingi = Vi- / hivi / hivyo / vile!"
      ],
      "culturalNotes": [
        "Vyombo vya asili vya baharini kama dau, ngalawa, na mashua vinawakilisha urithi mkubwa wa ubaharia wa Waswahili katika Bahari ya Hindi."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kiashiria sahihi cha \"mbali kidogo\" (hicho) na kitenzi cha umoja katika Ngeli ya KI-VI?",
          "options": [
            "Kitabu hicho kilisomwa na wanafunzi wote darasani. (That book was read by all students in class - Correct Class 7 demonstrative 'hicho' and verbal prefix 'ki-')",
            "Kitabu hilo lilisomwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Kitabu huo ulisomwa (Kosa la kutumia upatanisho wa M-MI)",
            "Kitabu hiyo ilisomwa (Kosa la kutumia upatanisho wa N-N)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya umoja ya KI-VI «Kitabu» huchukua kiashiria «hicho» na kiambishi cha kitenzi «ki-»: «Kitabu hicho kilisomwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia vyumba vingi vilivyo mbali zaidi (yonder), kirai sahihi cha kionyeshi ni kipi?",
          "options": [
            "vyumba vile (Those rooms over there - Correct Class 8 far demonstrative 'vile')",
            "vyumba yale (Kosa la kutumia kiashiria cha JI-MA)",
            "vyumba ile (Kosa la kutumia kiashiria cha M-MI / N-N)",
            "vyumba kile (Kosa la kutumia umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Katika wingi wa Ngeli ya KI-VI, kiashiria cha mbali zaidi ni «vile»: «vyumba vile»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha sahihi ya viashiria vitatu katika Ngeli ya KI-VI kwa umoja na wingi:",
          "options": [
            "Umoja: hiki (this), hicho (that), kile (that yonder); Wingi: hivi (these), hivyo (those), vile (those yonder).",
            "Umoja: hili, hilo, lile; Wingi: haya, hayo, yale.",
            "Umoja: huu, huo, ule; Wingi: hii, hiyo, ile.",
            "Umoja: huyu, huyo, yule; Wingi: hawa, hao, wale."
          ],
          "answerIndex": 0,
          "explanation": "Viashiria vya Ngeli ya KI-VI ni «hiki, hicho, kile» (umoja) na «hivi, hivyo, vile» (wingi)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u12-l3": {
    "id": "sw-u12-l3",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 3,
    "title": "Upatanisho wa Vivumishi vya Sifa katika Ngeli ya 7/8 (Adjective Concord in KI-VI)",
    "level": "B1",
    "objective": "Kutambua na kutumia upatanisho wa vivumishi vya sifa katika Ngeli ya KI-VI (ki-/ch- katika umoja na vi-/vy- katika wingi kulingana na muundo wa konsonanti na irabu).",
    "presentation": {
      "explanation": "Vivumishi vya Sifa katika Ngeli ya 7/8 (Adjective Concord in KI-VI):\n\n1. **Vivumishi vya Sifa katika Umoja (Class 7: Kiambishi ki- / ch-)**:\n   - Kabla ya Konsonanti: **ki-**:\n     - *kitabu **kizuri*** (a fine book), *kiti **kikubwa*** (a big chair), *chumba **kirefu*** (a long room), *kisu **kikali*** (a sharp knife), *chakula **kitamu*** (delicious food), *chombo **kizito*** (a heavy vessel).\n   - Kabla ya Irabu: **ch-** (*ki- + irabu -> ch-*):\n     - *kitabu **cheusi*** (*ki-eusi*), *chumba **cheupe*** (*ki-eupe*), *chombo **chepesi*** (*ki-epesi*), *kitanda **chembamba*** (*ki-embamba*), *kitabu **chingine*** (*ki-ingine*).\n\n2. **Vivumishi vya Sifa katika Wingi (Class 8: Kiambishi vi- / vy-)**:\n   - Kabla ya Konsonanti: **vi-**:\n     - *vitabu **vizuri***, *viti **vikubwa***, *vyumba **virefu***, *visu **vikali***, *vyakula **vitamu***.\n   - Kabla ya Irabu: **vy-** (*vi- + irabu -> vy-*):\n     - *vitabu **vyeusi*** (*vi-eusi*), *vyumba **vyeupe*** (*vi-eupe*), *vyombo **vyepesi*** (*vi-epesi*), *vitanda **vyembamba*** (*vi-embamba*), *vitabu **vingine*** (*vi-ingine*).",
      "examples": [
        {
          "target": "Chumba cheupe na kikubwa kina madirisha mazuri na hewa safi.",
          "reading": "Chu-mba che-u-pe na ki-kbu-wa ki-na ma-di-ri-sha ma-zu-ri na he-wa sa-fi. [ˈtʃumbɑ ˈtʃɛupɛ nɑ kiˈkubwɑ ˈkinɑ mɑdiˈriʃɑ mɑˈzuri nɑ ˈhɛwɑ ˈsɑfi] (CHOO-m-bah CHAY-oo-pay nah kee-KOO-bwah KEE-nah mah-dee-REE-shah mah-ZOO-ree nah HAY-wah SAH-fee)",
          "translation": "A white [cheupe] and large [kikubwa] room has fine windows and fresh air."
        },
        {
          "target": "Kisu kikali kipya kinatumika jikoni kukata mboga na matunda.",
          "reading": "Ki-su ki-ka-li kpy-a ki-na-tu-mi-ka ji-ko-ni ku-ka-ta mbo-ga na ma-tu-nda. [ˈkisu kiˈkɑli ˈmpjɑ kinɑtuˈmikɑ ʤiˈkɔni kuˈkɑtɑ ˈmbɔɡɑ nɑ mɑˈtundɑ] (KEE-soo kee-KAH-lee M-PYAH kee-nah-too-MEE-kah jee-KOH-nee koo-KAH-tah M-BOH-gah nah mah-TOON-dah)",
          "translation": "A sharp [kikali] and new [kipya] knife is used in the kitchen to cut vegetables and fruits."
        },
        {
          "target": "Vyombo vyepesi vya udongo vimepangwa kabatini na vinatunzwa kwa uangalifu.",
          "reading": "Vyo-mbo vye-pe-si vya u-do-ngo vi-me-pa-ngwa ka-ba-ti-ni na vi-na-tu-nzwa kwa u-a-nga-li-fu. [ˈvjɔmbɔ ˈvjɛpɛsi vjɑ uˈdɔŋɡɔ vimɛpɑmˈbwɑ kɑbɑˈtini nɑ vinɑˈtunzwɑ kwɑ uɑŋɡɑˈlifu] (VYOH-m-boh VYAY-pay-see vyah oo-DOHN-goh vee-may-PAHM-bwah kah-bah-TEE-nee nah vee-nah-TOON-zwah kwah oo-ahn-gah-LEE-foo)",
          "translation": "Light earthenware vessels [vyombo vyepesi] are arranged in the cupboard and maintained carefully."
        }
      ],
      "mnemonics": [
        "Vivumishi vya KI-VI: Umoja = ki- / ch- (kizuri, cheusi); Wingi = vi- / vy- (vizuri, vyeusi)!"
      ],
      "culturalNotes": [
        "Vyombo vya udongo vya kupikia kama chungu cha mfinyanzi (clay cooking pot) vinasifika kwa kupika chakula kitamu chenye ladha ya asili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina kivumishi chenye upatanisho sahihi kinachoanza na irabu katika umoja wa Ngeli ya KI-VI?",
          "options": [
            "Kiti cheusi kiliwekwa sebuleni. (The black chair was placed in the living room - Correct Class 7 adjective 'ch-eusi')",
            "Kiti kizuri kyeusi kiliwekwa (Kosa la kutumia umbo lisilo sanifu)",
            "Kiti jeusi kiliwekwa sebuleni (Huu ni upatanisho wa JI-MA)",
            "Kiti mweusi kiliwekwa sebuleni (Huu ni upatanisho wa M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Kivumishi kinachoanza na irabu «-eusi» kinapopatana na nomino ya umoja wa KI-VI (kiti) huchukua «ch-» kupata «cheusi»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapovumisha nomino ya wingi \"Vyakula\" kwa kutumia kivumishi \"-tamu\" (delicious), kirai sahihi ni kipi?",
          "options": [
            "vyakula vitamu (Delicious foods - Correct Class 8 adjective 'vi-tamu')",
            "vyakula matamu (Kosa la kutumia kiambishi cha JI-MA)",
            "vyakula mitamu (Kosa la kutumia kiambishi cha M-MI)",
            "vyakula kitamu (Kosa la kutumia umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Vyakula» (wingi katika Ngeli ya KI-VI) huchukua kivumishi chenye kiambishi «vi-»: «vyakula vitamu»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vivumishi vya sifa katika Ngeli ya KI-VI:",
          "options": [
            "Chumba kikubwa cheupe kimesafishwa na vyombo vyote vizuri vyepesi vimehifadhiwa kabatini. (Big white room [kikubwa cheupe], fine light vessels [vizuri vyepesi].)",
            "Chumba mkubwa mweupe kimesafishwa na vyombo vizuri mepesi vimehifadhiwa.",
            "Chumba likubwa jeupe limehifadhiwa na vyombo vyote zuri zepesi.",
            "Vivumishi vya KI-VI havitofautishi kati ya konsonanti na irabu."
          ],
          "answerIndex": 0,
          "explanation": "«Chumba kikubwa cheupe kimesafishwa na vyombo vyote vizuri vyepesi vimehifadhiwa kabatini.» inafuata kanuni sahihi zote za vivumishi vya KI-VI."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u12-l4": {
    "id": "sw-u12-l4",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 4,
    "title": "Vivumishi vya Idadi, Vimilikishi, na Udogo wa Nomino katika KI-VI (Numbers, Possessives & Diminutives in KI-VI)",
    "level": "B1",
    "objective": "Kutumia vivumishi vya idadi (kimoja, viwili, vitatu, vinne, vitano, vinane), vimilikishi (changu/vyangu), na kuelewa dhana ya udogo wa nomino (Diminutives) inayoundwa kwa kuhamisha nomino katika ngeli ya KI-VI.",
    "presentation": {
      "explanation": "Vivumishi vya Idadi, Vimilikishi, na Udogo katika Ngeli ya KI-VI:\n\n1. **Vivumishi vya Idadi (Numerals in KI-VI)**:\n   - Idadi ya 1 (Umoja): **kimoja** (*kitabu kimoja* = one book, *chumba kimoja* = one room)\n   - Idadi zinazochukua **vi-** (2, 3, 4, 5, 8):\n     - 2: *vitabu **viwili*** (two books)\n     - 3: *vitabu **vitatu*** (three books)\n     - 4: *vitabu **vinne*** (four books)\n     - 5: *vitabu **vitano*** (five books)\n     - 8: *vitabu **vinane*** (eight books)\n   - Idadi zisizobadilika (6, 7, 9, 10, nk.): *vitabu sita, saba, tisa, kumi*.\n\n2. **Dhana ya Udogo wa Nomino (Diminutive Construction)**:\n   - Nomino ya ngeli yoyote inapohamishiwa katika Ngeli ya 7/8 (KI-VI), hupata maana ya **udogo (Diminutive)**:\n     - *mtoto* (child) -> **kitoto** (tiny infant / toddler) / **vitoto**\n     - *nyumba* (house) -> **kijumba** (cottage / small hut) / **vijumba**\n     - *mto* (river) -> **kijito** (brook / stream) / **vijito**\n     - *mji* (town) -> **kijiji** (village) / **vijiji**\n     - *mlima* (mountain) -> **kilima** (hill) / **vilima**\n     - *ndege* (bird) -> **kidege** (tiny bird) / **videge**\n     - *mtu* (person) -> **kimtu** (little/insignificant person) / **vimtu**",
      "examples": [
        {
          "target": "Kijiji chetu kina vijito vitatu vya maji safi na vilima vidogo vinne.",
          "reading": "Ki-ji-ji che-tu ki-na vi-ji-to vi-ta-tu vya ma-ji sa-fi na vi-li-ma vi-do-go vi-nne. [kiˈʤiʤi ˈtʃɛtu ˈkinɑ viˈʤitɔ viˈtɑtu vjɑ ˈmɑʤi ˈsɑfi nɑ viˈlimɑ viˈdɔɡɔ ˈvinːɛ] (kee-JEE-jee CHAY-too KEE-nah vee-JEE-toh vee-TAH-too vyah MAH-jee SAH-fee nah vee-LEE-mah vee-DOH-goh VEEN-nay)",
          "translation": "Our village [diminutive: kijiji chetu] has three streams [vijito vitatu] of clean water and four small hills [vilima vidogo vinne]."
        },
        {
          "target": "Kitoto kile kidogo kinacheza chumbani na mama yake anakitunza kwa upendo.",
          "reading": "Ki-to-to ki-le ki-do-go ki-na-che-za chu-mba-ni na ma-ma ya-ke a-na-ki-tu-nza kwa u-pe-ndo. [kiˈtɔtɔ ˈkilɛ kiˈdɔɡɔ kinɑˈtʃɛzɑ tʃumbɑˈni nɑ ˈmɑmɑ ˈjɑkɛ ɑnɑkiˈtunzɑ kwɑ uˈpɛndɔ] (kee-TOH-toh KEE-lay kee-DOH-goh kee-nah-CHAY-zah choom-bah-NEE nah MAH-mah YAH-kay ah-nah-kee-TOON-zah kwah oo-PAYN-doh)",
          "translation": "That tiny infant [diminutive: kitoto kile] is playing in the room and its mother cares for it [OP -ki-] with love."
        },
        {
          "target": "Kijumba hiki kizuri kilijengwa kando ya ziwa kwa ajili ya mapumziko.",
          "reading": "Ki-ju-mba hi-ki ki-zu-ri ki-li-je-ngwa ka-ndo ya zi-wa kwa a-ji-li ya ma-pu-mzi-ko. [kiˈʤumbɑ ˈhiki kiˈzuri kiliˈʤɛŋɡwɑ ˈkɑndɔ jɑ ˈziwɑ kwɑ ɑˈʤili jɑ mɑpumˈzikɔ] (kee-JOOM-bah HEE-kee kee-ZOO-ree kee-lee-JAYN-gwah KAHN-doh yah ZEE-wah kwah ah-JEE-lee yah mah-poom-ZEE-koh)",
          "translation": "This fine small cottage [diminutive: kijumba hiki] was built beside the lake for relaxation."
        }
      ],
      "mnemonics": [
        "Idadi na Udogo katika KI-VI: Kitabu kimoja, vitabu viwili/vitatu; Mji -> Kijiji, Mto -> Kijito, Mlima -> Kilima, Mtoto -> Kitoto!"
      ],
      "culturalNotes": [
        "Dhana ya 'Kijiji' (kutoka 'Mji') inasisitiza umoja wa kijamii, ambapo methali ya Kiafrika inasema: 'Inahitaji kijiji kizima kulea kitoto kimoja' (It takes a whole village to raise a child)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia nambari mbili (2) kwa upatanisho sahihi wa Ngeli ya KI-VI?",
          "options": [
            "Vitabu viwili vizuri vilinunuliwa maktabani. (Two fine books were bought at the library - Correct Class 8 numeral 'viwili')",
            "Vitabu mawili vizuri vilinunuliwa (Kosa la kutumia kiambishi cha JI-MA)",
            "Vitabu miwili vizuri vilinunuliwa (Kosa la kutumia kiambishi cha M-MI)",
            "Vitabu wawili vizuri vilinunuliwa (Kosa la kutumia kiambishi cha A-WA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi ya KI-VI «Vitabu» huchukua kivumishi cha idadi «viwili»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ya kawaida \"Mto\" inapohamishwa katika Ngeli ya KI-VI kuonyesha udogo (diminutive), huwa neno gani?",
          "options": [
            "kijito (Brook / stream - Diminutive form in Class 7)",
            "kito (Hili linamaanisha jiwe la thamani / gem)",
            "uchito (Umbo lisilopo)",
            "jito (Huu ni ukubwa katika JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Mto» inapopata udogo katika Ngeli ya KI-VI hubadilika kuwa «kijito» (wingi: «vijito»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya idadi na dhana ya udogo katika Ngeli ya KI-VI kwa ukamilifu:",
          "options": [
            "Kijiji chetu kina vijito vitatu na vijumba vidogo vinne vilivyojengwa kando ya kilima. (Our village [kijiji] has three streams [vijito vitatu] and four small cottages [vijumba vidogo vinne] built beside the hill [kilima].)",
            "Kijiji yetu ina vijito matatu na vijumba manne vilivyojengwa kando ya kilima.",
            "Kijiji wetu una vijito mitatu na vijumba vinne vya kilima.",
            "Udogo wa nomino hautumiki katika lugha ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Kijiji chetu kina vijito vitatu na vijumba vidogo vinne vilivyojengwa kando ya kilima.» inatumia miundo sahihi ya udogo (kijiji, vijito, vijumba, kilima) na idadi (vitatu, vinne)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u12-l5": {
    "id": "sw-u12-l5",
    "subject": "swahili",
    "unit": 12,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli ya 7/8 (KI-VI) na Vionyeshi (Grand Synthesis of KI-VI Class)",
    "level": "B1",
    "objective": "Kuunganisha mada zote za Unit 12: msamiati wa KI-VI, majina ya lugha, upatanisho wa vitenzi (ki-/vi-), virejeshi vya watendwa (-ki-/-vi-), viashiria (hiki/hivi, hicho/hivyo, kile/vile), vimilikishi (changu/vyangu), vivumishi vya sifa, idadi, na udogo wa nomino.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli ya 7/8 (Grand Synthesis of KI-VI Class):\n\n1. **Muundo Kamili wa Ngeli ya 7/8 (Master KI-VI Matrix)**:\n   - **Nomino**: *kitabu / vitabu*, *chumba / vyumba*, *chakula / vyakula*, *kiti / viti*, *chombo / vyombo*, *Kiswahili*.\n   - **Kiambishi Kitenzi (SP)**: *ki-* (umoja: *kitabu kimesomwa*) / *vi-* (wingi: *vitabu vimesomwa*).\n   - **Kirejeshi Mtendwa (OP)**: *-ki-* (umoja: *ninakisoma*) / *-vi-* (wingi: *ninavisoma*).\n   - **Viashiria**: *hiki / hivi* (karibu), *hicho / hivyo* (hapo), *kile / vile* (mbali).\n   - **Vimilikishi**: *changu/chetu* (umoja) / *vyangu/vyetu* (wingi).\n   - **Vivumishi vya Sifa**: *ki-/ch-* (umoja: *kizuri, cheusi, kikubwa*) / *vi-/vy-* (wingi: *vizuri, vyeusi, vikubwa*).\n   - **Vivumishi vya Idadi**: *kimoja* (1) / *viwili* (2), *vitatu* (3), *vinne* (4), *vitano* (5), *vinane* (8).\n   - **Udogo wa Nomino (Diminutive)**: *mji -> kijiji*, *mto -> kijito*, *mlima -> kilima*, *mtoto -> kitoto*, *nyumba -> kijumba*.",
      "examples": [
        {
          "target": "Kitabu hiki kizuri kina mafunzo bora, na vyumba vyote vitano vya chuo vimefunguliwa.",
          "reading": "Ki-ta-bu hi-ki ki-zu-ri ki-na ma-fu-nzo bo-ra, na vyu-mba vyo-te vi-ta-no vya chu-o vi-me-fu-ngu-li-wa. [kiˈtɑbu ˈhiki kiˈzuri ˈkinɑ mɑˈfunzɔ ˈbɔrɑ nɑ ˈvjumbɑ ˈvjɔtɛ viˈtɑnɔ vjɑ ˈtʃuɔ vimɛfuŋɡuˈliwɑ] (kee-TAH-boo HEE-kee kee-ZOO-ree KEE-nah mah-FOON-zoh BOH-rah, nah VYOO-m-bah VYOH-tay vee-TAH-noh vyah CHOO-oh vee-may-foon-goo-LEE-wah)",
          "translation": "This fine book [kitabu hiki kizuri] has great lessons, and all five college rooms [vyumba vyote vitano] have opened."
        },
        {
          "target": "Kijito kile kidogo kinapita kando ya kijiji chetu na maji yake ni safi na baridi.",
          "reading": "Ki-ji-to ki-le ki-do-go ki-na-pi-ta ka-ndo ya ki-ji-ji che-tu na ma-ji ya-ke ni sa-fi na ba-ri-di. [kiˈʤitɔ ˈkilɛ kiˈdɔɡɔ kinɑˈpitɑ ˈkɑndɔ jɑ kiˈʤiʤi ˈtʃɛtu nɑ ˈmɑʤi ˈjɑkɛ ni ˈsɑfi nɑ bɑˈridi] (kee-JEE-toh KEE-lay kee-DOH-goh kee-nah-PEE-tah KAHN-doh yah kee-JEE-jee CHAY-too nah MAH-jee YAH-kay nee SAH-fee nah bah-REE-dee)",
          "translation": "That small stream [kijito kile] flows beside our village [kijiji chetu] and its water is clean and cool."
        },
        {
          "target": "Umahiri wa kutumia ngeli ya KI-VI unadhihirisha ufasaha wa hali ya juu katika kuakisi udogo, lugha, na vitu mbalimbali katika jamii ya Waswahili.",
          "reading": "U-ma-hi-ri wa ku-tu-mia nge-li ya KI-VI u-na-dhi-hi-ri-sha u-fa-sa-ha wa ha-li ya ju-u ka-ti-ka ku-a-ki-si u-do-go, lu-gha, na vi-tu mba-li-mba-li ka-ti-ka ja-mi-i ya Wa-swa-hi-li. [umɑˈhiri wɑ kutuˈmiɑ ˈŋɡɛli jɑ ˈkivi unɑðihiˈriʃɑ ufɑˈsɑhɑ wɑ ˈhɑli jɑ ˈʤuː kɑˈtikɑ kuɑˈkisi uˈdɔɡɔ ˈluɣɑ nɑ ˈvitu mbɑlimbɑˈli kɑˈtikɑ ʤɑˈmiː jɑ wɑswɑˈhili] (oo-mah-HEE-ree wah koo-too-MEE-ah N-GAY-lee yah KEE-VEE oo-nah-thee-hee-REE-shah oo-fah-SAH-hah wah HAH-lee yah JOO-oo kah-TEE-kah koo-ah-KEE-see oo-DOH-goh, LOO-ghah, nah VEE-too M-bah-lee-m-BAH-lee kah-TEE-kah jah-MEE-ee yah wah-swah-HEE-lee)",
          "translation": "Mastery of using the KI-VI noun class [KI-VI grand synthesis: ngeli ya KI-VI] demonstrates high-level eloquence in reflecting diminutives, languages, and various artifacts in Swahili society."
        }
      ],
      "mnemonics": [
        "Muhtasari wa KI-VI: Umoja (ki-/ch-, hiki/hicho/kile, changu, kizuri, kimoja); Wingi (vi-/vy-, hivi/hivyo/vile, vyangu, vizuri, viwili)!"
      ],
      "culturalNotes": [
        "Umahiri wa kutofautisha ukubwa (JI-MA: jiji, jumba), hali ya kawaida (M-MI/N-N: mji, nyumba), na udogo (KI-VI: kijiji, kijumba) ni kilele cha uzuri wa kimofolojia wa lugha za Kibantu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa ngeli ya 7/8 (KI-VI) ikijumuisha nomino, sifa, idadi, na kitenzi?",
          "options": [
            "Vitabu vizuri vinne vya Kiswahili vilinunuliwa kwa ajili ya wanafunzi wote. (Four fine Swahili books were bought for all students - Harmonious KI-VI class synthesis)",
            "Vitabu mazuri manne ya Kiswahili yalinunuliwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Vitabu mizuri minne ya Kiswahili ilinunuliwa (Kosa la kutumia upatanisho wa M-MI)",
            "Kitabu vizuri vinne vilinunuliwa jana (Mvurugiko wa umoja na wingi)"
          ],
          "answerIndex": 0,
          "explanation": "«Vitabu vizuri vinne vya Kiswahili vilinunuliwa kwa ajili ya wanafunzi wote.» inatekeleza upatanisho sahihi wa nomino (vitabu), sifa (vizuri), idadi (vinne), na kitenzi (vilinunuliwa)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 12, ni upatanisho gani sahihi wa kiashiria, kivumishi cha sifa, na kitenzi kwa nomino \"Chumba\" (umoja)?",
          "options": [
            "Chumba hiki kikubwa kilisafishwa asubuhi na mapema. (This large room was cleaned early in the morning - Correct Class 7 demonstrative 'hiki', adjective 'kikubwa', and verbal prefix 'ki-')",
            "Chumba hii kubwa ilisafishwa (Kosa la kutumia upatanisho wa N-N)",
            "Chumba hili kubwa lilisafishwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Chumba huu mkubwa ulisafishwa (Kosa la kutumia upatanisho wa M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Chumba» (umoja katika KI-VI) huchukua kiashiria «hiki», sifa «kikubwa», na kitenzi «kilisafishwa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 12 ya Ngeli ya 7/8 (KI-VI) na Vionyeshi katika Kiswahili:",
          "options": [
            "Kitabu hiki kizuri kina mafunzo bora, kijiji chetu kina vilima vidogo vitatu, na vyumba vyote vitano vya chuo vimefunguliwa. (This fine book [ki-], our village [ch-], three small hills [vi-], and all five college rooms [vy-].)",
            "Kitabu hii nzuri ina mafunzo bora na kijiji yetu ina vilima mitatu.",
            "Vyumba vyote matano vya chuo yamefunguliwa wakati kitabu kile inasomwa.",
            "Ngeli ya KI-VI haihusiani na dhana ya udogo wa nomino."
          ],
          "answerIndex": 0,
          "explanation": "«Kitabu hiki kizuri kina mafunzo bora, kijiji chetu kina vilima vidogo vitatu, na vyumba vyote vitano vya chuo vimefunguliwa.» inajumuisha upatanisho wa KI-VI katika nyanja zote kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u13-l1": {
    "id": "sw-u13-l1",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 1,
    "title": "Ngeli ya 9/10 (N-N): Nomino za Asili, Wanyama, na Maneno ya Kigeni (Class 9/10 Invariable Forms & Loanwords)",
    "level": "B1",
    "objective": "Kutambua na kutumia nomino za Ngeli ya 9/10 (N-N) zenye umbo moja katika umoja na wingi, zikijumuisha vifaa vya kila siku, majina ya wanyama, na maneno ya kigeni (Loanwords).",
    "presentation": {
      "explanation": "Ngeli ya 9/10 (N-N): Muundo wa Nomino na Msamiati:\n\n1. **Umbo Moja katika Umoja na Wingi (Invariable Noun Form)**:\n   - Nomino za Ngeli ya N-N hazibadiliki kimaumbo mwanzoni kati ya umoja na wingi:\n     - *nyumba* (house / houses), *nguo* (cloth / clothes), *taa* (lamp / lamps), *njia* (road / roads), *barua* (letter / letters), *chupa* (bottle / bottles), *meza* (table / tables), *safari* (journey / journeys), *shule* (school / schools), *saa* (clock / hour / clocks).\n\n2. **Maneno ya Kigeni (Loanwords in N-N)**:\n   - Karibu maneno yote yaliyokopwa kutoka Kiarabu, Kiingereza, Kireno, na Kihindi huingia katika ngeli ya N-N:\n     - *simu* (phone), *kalamu* (pen), *sabuni* (soap), *benki* (bank), *motokaa* (motorcar), *tiketi* (ticket), *hoteli* (hotel / restaurant), *redio* (radio), *televisheni* (television), *serikali* (government), *ripoti* (report), *kompyuta* (computer).\n\n3. **Majina ya Wanyama katika N-N (Animals)**:\n   - Nomino za wanyama kimaumbo zipo katika ngeli ya N-N (*simba, ndovu/tembo, twiga, ng'ombe, mbuzi, kuku, mbwa, paka, samaki, ndege*), lakini **zinapopatana na vitenzi na vivumishi hufuata ngeli ya viumbe hai (Ngeli ya 1/2 A-WA)**!",
      "examples": [
        {
          "target": "Nyumba hii mpya imejengwa vizuri na nyumba hizi zote zimepangishwa.",
          "reading": "Nyu-mba hi-i mpy-a i-me-je-ngwa vi-zu-ri na nyu-mba hi-zi zo-te zi-me-pa-ngi-shwa. [ˈɲumbɑ ˈhiː ˈmpjɑ imɛˈʤɛŋɡwɑ viˈzuri nɑ ˈɲumbɑ ˈhizi ˈzɔtɛ zimɛpɑˈŋɡiʃwɑ] (NYOOM-bah HEE-ee M-PYAH ee-may-JAYN-gwah vee-ZOO-ree nah NYOOM-bah HEE-zee ZOH-tay zee-may-pahn-GEE-shwah)",
          "translation": "This new house [class 9: nyumba hii] is built well and all these houses [class 10: nyumba hizi] are rented out."
        },
        {
          "target": "Kalamu yangu imepotea lakini kalamu zako zote zipo juu ya meza.",
          "reading": "Ka-la-mu ya-ngu i-me-po-te-a la-ki-ni ka-la-mu za-ko zo-te zi-po ju-u ya me-za. [kɑˈlɑmu ˈjɑŋɡu imɛpɔˈtɛɑ lɑˈkini kɑˈlɑmu ˈzɑkɔ ˈzɔtɛ ˈzipɔ ˈʤuː jɑ ˈmɛzɑ] (kah-LAH-moo YAHN-goo ee-may-poh-TAY-ah lah-KEE-nee kah-LAH-moo ZAH-koh ZOH-tay ZEE-poh JOO-oo yah MAY-zah)",
          "translation": "My pen [class 9: kalamu yangu] is lost but all your pens [class 10: kalamu zako] are on the table."
        },
        {
          "target": "Simba mkali amelala chini ya mti wakati nguo zetu zote zikikauka kamba.",
          "reading": "Si-mba mka-li a-me-la-la chi-ni ya mti wa-ka-ti nguo ze-tu zo-te zi-ki-ka-u-ka ka-mba. [ˈsimbɑ mˈkɑli ɑmɛˈlɑlɑ ˈtʃini jɑ ˈmti wɑˈkɑti ˈŋɡuɔ ˈzɛtu ˈzɔtɛ zikikɑˈukɑ ˈkɑmbɑ] (SEEM-bah m-KAH-lee ah-may-LAH-lah CHEE-nee yah M-TEE wah-KAH-tee N-GOO-oh ZAY-too ZOH-tay zee-kee-kah-OO-kah KAHM-bah)",
          "translation": "A fierce lion [animate A-WA: simba mkali amelala] is sleeping under a tree while all our clothes [inanimate N-N: nguo zetu zote zikikauka] dry on the line."
        }
      ],
      "mnemonics": [
        "Ngeli ya N-N: Nomino haibadiliki (nyumba/nyumba); Upatanisho: Umoja = I- / hii; Wingi = ZI- / hizi!"
      ],
      "culturalNotes": [
        "Nomino ya 'Safari' inatoka katika neno la Kiarabu 'safar' na iliingia katika Kiingereza duniani kote kupitia lugha ya Kiswahili."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ni upi mabadiliko ya umbo la nomino \"Barua\" (letter) inapobadilika kutoka umoja kwenda wingi katika Ngeli ya N-N?",
          "options": [
            "barua (Invariable - Class 9/10 nouns maintain the exact same shape in singular and plural)",
            "mabarua (Kosa la kuingiza kiambishi cha JI-MA)",
            "vibarua (Hili lina maana ya vibarua/casual laborers badala ya barua za kawaida)",
            "mibarua (Kosa la kutumia kiambishi cha M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino za Ngeli ya N-N kama «barua» hazibadiliki umbo lake kati ya umoja na wingi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ipi kati ya zifuatazo ni neno la kigeni (Loanword) lililoingia katika Ngeli ya N-N?",
          "options": [
            "simu (Telephone / phone - Loanword in N-N noun class)",
            "mtu (Nomino ya asili ya Kibantu katika Ngeli ya 1/2 A-WA)",
            "kitabu (Nomino iliyokopwa iliyopewa muundo wa Ngeli ya KI-VI)",
            "mti (Nomino ya asili katika Ngeli ya M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "«Simu» (kutoka Kiarabu au lugha za kigeni) ni nomino ya Ngeli ya 9/10 (N-N)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha ya nomino zote zilizo katika Ngeli ya 9/10 (N-N):",
          "options": [
            "Nyumba, nguo, taa, njia, barua, chupa, meza, simu, kalamu, sabuni, safari, shule.",
            "Kiti, kitabu, chumba, chakula, chombo, chuo.",
            "Mtu, mtoto, mwalimu, mwanafunzi, mpishi, mgeni.",
            "Mti, mto, mlima, mkono, mguu, mwili."
          ],
          "answerIndex": 0,
          "explanation": "Nyumba, nguo, taa, njia, barua, chupa, meza, simu, kalamu, sabuni, safari, na shule zote ni nomino halisi za Ngeli ya N-N."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u13-l2": {
    "id": "sw-u13-l2",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 2,
    "title": "Upatanisho wa Ngeli ya 9/10 (N-N) katika Vitenzi na Viashiria (Verbal Concord & Demonstratives in N-N)",
    "level": "B1",
    "objective": "Kutambua na kutumia viambishi vya upatanisho wa kitenzi (i- kwa umoja, zi- kwa wingi) na viashiria vyote vitatu (hii/hizi, hiyo/hizo, ile/zile) katika Ngeli ya N-N.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli ya 9/10 katika Vitenzi na Viashiria:\n\n1. **Upatanisho wa Kitenzi (Verbal Concord)**:\n   - **Umoja (Class 9)**: Kiambishi cha mtendaji ni **i-**, kiambishi cha mtendwa ni **-i-**:\n     - *Nyumba **i**mejengwa* (The house has been built)\n     - *Simu **i**nalia* (The phone is ringing)\n     - *Mimi nina**i**soma barua hii* (I am reading this letter)\n   - **Wingi (Class 10)**: Kiambishi cha mtendaji ni **zi-**, kiambishi cha mtendwa ni **-zi-**:\n     - *Nyumba **zi**mejengwa* (The houses have been built)\n     - *Simu **zi**nalia* (The phones are ringing)\n     - *Mimi nina**zi**soma barua hizi* (I am reading these letters)\n\n2. **Viashiria / Vionyeshi katika Ngeli ya N-N (Demonstratives)**:\n   - **Karibu (Near: This / These)**:\n     - Umoja: **hii** (*nyumba hii*, *kalamu hii*)\n     - Wingi: **hizi** (*nyumba hizi*, *kalamu hizi*)\n   - **Mbali Kidogo / Rejelewa (Reference: That / Those)**:\n     - Umoja: **hiyo** (*nyumba hiyo*, *kalamu hiyo*)\n     - Wingi: **hizo** (*nyumba hizo*, *kalamu hizo*)\n   - **Mbali Zaidi (Far: That / Those over there)**:\n     - Umoja: **ile** (*nyumba ile*, *kalamu ile*)\n     - Wingi: **zile** (*nyumba zile*, *kalamu zile*)",
      "examples": [
        {
          "target": "Simu hii iliita mara tatu lakini hakuna mtu aliyeipokea.",
          "reading": "Si-mu hi-i i-li-i-ta ma-ra ta-tu la-ki-ni ha-ku-na m-tu a-li-ye-i-po-ke-a. [ˈsimu ˈhiː iliˈitɑ ˈmɑrɑ ˈtɑtu lɑˈkini hɑˈkunɑ ˈmtu ɑlijɛipɔˈkɛɑ] (SEE-moo HEE-ee ee-lee-EE-tah MAH-rah TAH-too lah-KEE-nee hah-KOO-nah M-TOO ah-lee-yay-ee-poh-KAY-ah)",
          "translation": "This phone [simu hii] rang [iliita] three times, but nobody received it [OP -i-: aliyeipokea]."
        },
        {
          "target": "Njia ile inaelekea mjini na njia hizi zote zimetengenezwa kwa lami.",
          "reading": "Nji-a i-le i-na-e-le-ke-a mji-ni na nji-a hi-zi zo-te zi-me-te-nge-ne-zwa kwa la-mi. [ˈɲʤiɑ ˈilɛ inɑɛlɛˈkɛɑ mʤiˈni nɑ ˈɲʤiɑ ˈhizi ˈzɔtɛ zimɛtɛŋɡɛˈnɛzwɑ kwɑ ˈlɑmi] (NYJEE-ah EE-lay ee-nah-ay-lay-KAY-ah m-jee-NEE nah NYJEE-ah HEE-zee ZOH-tay zee-may-tayn-gay-NAY-zwah kwah LAH-mee)",
          "translation": "That road yonder [njia ile] leads [inaelekea] to town and all these roads [njia hizi] are paved [zimetengenezwa] with tarmac."
        },
        {
          "target": "Barua hizo ziliwasili jana na zilisomwa na wakurugenzi wote wa kampuni.",
          "reading": "Ba-ru-a hi-zo zi-li-wa-si-li ja-na na zi-li-so-mwa na wa-ku-ru-ge-nzi wo-te wa ka-mpu-ni. [bɑˈruɑ ˈhizɔ ziliwɑˈsili ˈʤɑnɑ nɑ zilisɔmˈbwɑ nɑ wɑkuruˈɡɛnzi ˈwɔtɛ wɑ kɑmˈpuni] (bah-ROO-ah HEE-zoh zee-lee-wah-SEE-lee JAH-nah nah zee-lee-SOHM-wah nah wah-koo-roo-GAYN-zee WOH-tay wah kahm-POO-nee)",
          "translation": "Those letters [barua hizo] arrived [ziliwasili] yesterday and were read [zilisomwa] by all company directors."
        }
      ],
      "mnemonics": [
        "Vitenzi na Viashiria vya N-N: Umoja = I- / hii / hiyo / ile; Wingi = ZI- / hizi / hizo / zile!"
      ],
      "culturalNotes": [
        "Msemo wa Kiswahili unasema: 'Njia ya mwongo ni fupi' (The path of a liar is short), ukidhihirisha upatanisho wa ngeli ya N-N katika mafunzo ya maisha."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kiashiria sahihi cha \"mbali kidogo\" (hizo) na kitenzi cha wingi katika Ngeli ya N-N?",
          "options": [
            "Barua hizo ziliandikwa na mwalimu mkuu. (Those letters were written by the headmaster - Correct Class 10 demonstrative 'hizo' and verbal prefix 'zi-')",
            "Barua hayo yaliandikwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Barua hiyo iliandikwa (Huu ni umoja badala ya wingi)",
            "Barua hivyo viliandikwa (Kosa la kutumia upatanisho wa KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi ya N-N «Barua» huchukua kiashiria «hizo» na kiambishi cha kitenzi «zi-»: «Barua hizo ziliandikwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia njia moja iliyo mbali zaidi (yonder), kirai sahihi cha kionyeshi ni kipi?",
          "options": [
            "njia ile (That road over there - Correct Class 9 far demonstrative 'ile')",
            "njia lile (Kosa la kutumia kiashiria cha JI-MA)",
            "njia ule (Kosa la kutumia kiashiria cha M-MI)",
            "njia kile (Kosa la kutumia kiashiria cha KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Katika umoja wa Ngeli ya N-N, kiashiria cha mbali zaidi ni «ile»: «njia ile»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha sahihi ya viashiria vitatu katika Ngeli ya N-N kwa umoja na wingi:",
          "options": [
            "Umoja: hii (this), hiyo (that), ile (that yonder); Wingi: hizi (these), hizo (those), zile (those yonder).",
            "Umoja: hiki, hicho, kile; Wingi: hivi, hivyo, vile.",
            "Umoja: hili, hilo, lile; Wingi: haya, hayo, yale.",
            "Umoja: huu, huo, ule; Wingi: hii, hiyo, ile."
          ],
          "answerIndex": 0,
          "explanation": "Viashiria vya Ngeli ya N-N ni «hii, hiyo, ile» (umoja) na «hizi, hizo, zile» (wingi)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u13-l3": {
    "id": "sw-u13-l3",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 3,
    "title": "Upatanisho wa Vivumishi vya Sifa na Sheria za Sauti (Nasal Sound Rules in N-N)",
    "level": "B1",
    "objective": "Kutambua na kutumia upatanisho wa vivumishi vya sifa katika Ngeli ya N-N, ikiwa ni pamoja na kanuni za mabadiliko ya sauti ya pua (n- + b -> mb, n- + d -> nd, n- + r -> nd, n- + irabu -> ny-) na vivumishi vya asili ya Kiarabu visivyobadilika.",
    "presentation": {
      "explanation": "Vivumishi vya Sifa katika Ngeli ya 9/10 (N-N Adjective Rules):\n\n1. **Sheria za Mabadiliko ya Sauti za Pua (Nasal Rules)**:\n   - Kiambishi cha sifa katika N-N ni **n- / m-** kinachoambatana na shina la kivumishi cha Kibantu:\n     - *n + -baya -> **mbaya*** (*nyumba mbaya* = bad house / houses)\n     - *n + -dogo -> **ndogo*** (*nyumba ndogo* = small house / houses)\n     - *n + -zuri -> **nzuri*** (*nyumba nzuri* = fine house / houses)\n     - *n + -zito -> **nzito*** (*barua nzito* = heavy letter)\n     - *n + -pya -> **mpya*** (*nguo mpya* = new cloth / clothes)\n     - *n + -refu -> **ndefu*** (*njia ndefu* = long road / roads) [*r -> d baada ya n*]\n     - *n + -pana -> **pana*** (*njia pana* = wide road)\n     - *n + -kubwa -> **kubwa*** (*nyumba kubwa* = big house)\n   - **Kabla ya Irabu: huchukua ny-**:\n     - *n + -eusi -> **nyeusi*** (*nguo nyeusi* = black clothes)\n     - *n + -eupe -> **nyeupe*** (*nguo nyeupe* = white clothes)\n     - *n + -epesi -> **nyepesi*** (*nguo nyepesi* = light clothes)\n     - *n + -ingine -> **nyingine*** (*nyumba nyingine* = another house / other houses)\n\n2. **Vivumishi vya Asili ya Kigeni (Invariable Adjectives)**:\n   - Vivumishi vilivyokopwa kutoka Kiarabu havibadiliki kamwe: *safi, bora, ghali, rahisi, hodari, imara, tayari, lazima*:\n     - *nyumba safi*, *barabara imara*, *tiketi ghali*, *kazi rahisi*.",
      "examples": [
        {
          "target": "Nguo nyeusi nzuri zilinunuliwa dukani kwa bei nafuu sana.",
          "reading": "Nguo nye-u-si nzu-ri zi-li-nu-nu-li-wa du-ka-ni kwa be-i na-fu-u sa-na. [ˈŋɡuɔ ˈɲɛusi ˈnzuri zilinunuliˈwɑ dukɑˈni kwɑ ˈbɛi ˈnɑfuː ˈsɑnɑ] (N-GOO-oh NYAY-oo-see N-ZOO-ree zee-lee-noo-noo-LEE-wah doo-kah-NEE kwah BAY-ee nah-FOO-oo SAH-nah)",
          "translation": "Fine black clothes [nguo nyeusi nzuri] were bought at the shop at a very affordable price."
        },
        {
          "target": "Njia ndefu na nyembamba inapita msituni kuelekea kijijini.",
          "reading": "Nji-a nde-fu na nye-mba-mba i-na-pi-ta msi-tu-ni ku-e-le-ke-a ki-ji-ji-ni. [ˈɲʤiɑ ˈndɛfu nɑ ɲɛmˈbɑmbɑ inɑˈpitɑ msiˈtuni kuɛlɛˈkɛɑ kiʤiˈʤini] (NYJEE-ah N-DAY-foo nah nyay-m-BAHM-bah ee-nah-PEE-tah m-see-too-NEE koo-ay-lay-KAY-ah kee-jee-jee-NEE)",
          "translation": "A long and narrow road [njia ndefu na nyembamba] passes through the forest towards the village."
        },
        {
          "target": "Nyumba imara mpya ina milango mikubwa na kuta nyeupe safi.",
          "reading": "Nyu-mba i-ma-ra mpy-a i-na mi-la-ngo mi-kbu-wa na ku-ta nye-u-pe sa-fi. [ˈɲumbɑ iˈmɑrɑ ˈmpjɑ ˈinɑ miˈlɑŋɡɔ miˈkubwɑ nɑ ˈkutɑ ˈɲɛupɛ ˈsɑfi] (NYOOM-bah ee-MAH-rah M-PYAH EE-nah mee-LAHN-goh mee-KOO-bwah nah KOO-tah NYAY-oo-pay SAH-fee)",
          "translation": "A strong new house [nyumba imara mpya] has big doors and clean white walls [kuta nyeupe safi]."
        }
      ],
      "mnemonics": [
        "Vivumishi vya N-N: n- + b->mb (mbaya), n- + r->nd (ndefu), n- + irabu->ny- (nyeusi, nyeupe); Kiarabu: safi, imara, ghali havibadiliki!"
      ],
      "culturalNotes": [
        "Neno 'Imara' (strong/firm) lina heshima kubwa katika utamaduni wa ujenzi wa Waswahili, kama unavyoonekana katika kuta za mawe za miji ya kihistoria kama Kilwa Kisiwani na Lamu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Shina la kivumishi \"-refu\" (long) linapopatana na nomino \"Njia\" (N-N), umbo sahihi huwa lipi kufuatia sheria za sauti za Kibantu?",
          "options": [
            "njia ndefu (Long road - Correct nasal shift 'n + refu' -> 'ndefu')",
            "njia nrefu (Kosa la kutobadili 'r' kuwa 'd' baada ya kiambishi cha pua)",
            "njia refu (Kosa la kuacha kiambishi cha pua)",
            "njia mirefu (Huu ni upatanisho wa Ngeli ya 4 M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Katika ngeli ya N-N, «n-» + «-refu» hubadilika na kutoa «ndefu» (*r hubadilika kuwa d*)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapovumisha nomino \"Nguo\" (clothes) kwa kutumia kivumishi kinachoanza na irabu \"-eupe\" (white), umbo sahihi ni lipi?",
          "options": [
            "nguo nyeupe (White clothes - Correct nasal prefix 'ny-' before vowel in N-N class)",
            "nguo meupe (Huu ni upatanisho wa JI-MA)",
            "nguo vyeupe (Huu ni upatanisho wa KI-VI)",
            "nguo neupe (Kosa la kutotumia 'ny-')"
          ],
          "answerIndex": 0,
          "explanation": "Kabla ya irabu, kiambishi cha N-N huwa «ny-»: «nguo nyeupe»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vivumishi vya sifa vya Kibantu na vya Kiarabu katika Ngeli ya N-N:",
          "options": [
            "Nyumba mpya imara ina njia ndefu na nguo nyeusi nzuri zimeanikwa kamba. (New strong house [mpya imara], long road [ndefu], and fine black clothes [nyeusi nzuri].)",
            "Nyumba ripya limara ina njia nrefu na nguo meusi mazuri zimeanikwa.",
            "Nyumba kipya kizuri ina njia mirefu na nguo vyeusi vizuri zimeanikwa.",
            "Vivumishi vya N-N havina tofauti yoyote na vivumishi vya ngeli ya A-WA."
          ],
          "answerIndex": 0,
          "explanation": "«Nyumba mpya imara ina njia ndefu na nguo nyeusi nzuri zimeanikwa kamba.» inatekeleza sheria zote za pua (mpya, ndefu, nyeusi, nzuri) na sifa ya Kiarabu (imara)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u13-l4": {
    "id": "sw-u13-l4",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 4,
    "title": "Vivumishi vya Idadi, Vimilikishi, na Kanuni ya Uhai katika N-N (Numbers, Possessives & Animate Agreement)",
    "level": "B1",
    "objective": "Kutumia vivumishi vya idadi (moja, mbili, tatu, nne, tano, nane), vimilikishi (yangu/zangu), na kuelewa kanuni kuu ya viumbe hai (Animate Concord Rule) ambapo wanyama katika ngeli ya N-N hufuata upatanisho wa A-WA.",
    "presentation": {
      "explanation": "Vivumishi vya Idadi, Vimilikishi, na Kanuni ya Uhai katika N-N:\n\n1. **Vivumishi vya Idadi kwa Vitu Visivyo na Uhai (Inanimate Numbers)**:\n   - *nyumba **moja*** (1 house)\n   - *nyumba **mbili*** (2 houses) [*n + bili -> mbili*]\n   - *nyumba **tatu*** (3 houses)\n   - *nyumba **nne*** (4 houses) [*n + ne -> nne*]\n   - *nyumba **tano*** (5 houses)\n   - *nyumba **nane*** (8 houses)\n   - Idadi zisizobadilika: *nyumba sita, saba, tisa, kumi*.\n\n2. **Vimilikishi vya N-N (Possessives)**:\n   - Umoja: **yangu, yako, yake, yetu, yenu, yao** (*nyumba yangu* = my house)\n   - Wingi: **zangu, zako, zake, zetu, zenu, zao** (*nyumba zangu* = my houses)\n\n3. **Kanuni Kuu ya Viumbe Hai (The Animate Concord Rule)**:\n   - Wanyama, ndege, wadudu, na samaki wamo katika ngeli ya N-N kimaumbo, lakini **kisarufi wanapopatana na vitenzi, viashiria, na vivumishi hufuata ngeli ya viumbe hai (1/2 A-WA)**:\n     - *Simba **mmoja** mkubwa **a**melala* (One big lion is asleep) [SIYO *simba moja ndogo imelala*!]\n     - *Simba **wawili** wakubwa **wa**melala* (Two big lions are asleep) [SIYO *simba mbili zamelala*!]\n     - *Ndege **huyu** mzuri **a**naimba* (This beautiful bird is singing)\n     - *Mbuzi **wetu** watatu **wa**mekimbia* (Our three goats have run away).",
      "examples": [
        {
          "target": "Nyumba zetu mbili mpya zilikamilika mwezi uliopita.",
          "reading": "Nyu-mba ze-tu mbi-li mpy-a zi-li-ka-mi-li-ka mwe-zi u-li-o-pi-ta. [ˈɲumbɑ ˈzɛtu ˈmbili ˈmpjɑ zilikɑmiˈlikɑ ˈmwɛzi uliɔˈpitɑ] (NYOOM-bah ZAY-too M-BEE-lee M-PYAH zee-lee-kah-mee-LEE-kah MWAY-zee oo-lee-oh-PEE-tah)",
          "translation": "Our two new houses [nyumba zetu mbili mpya] were completed last month."
        },
        {
          "target": "Mbuzi watatu wakubwa wanazurura shambani wakati ng'ombe wetu watano wanakula majani.",
          "reading": "Mbu-zi wa-ta-tu wa-kbu-wa wa-na-zu-ru-ra sha-mba-ni wa-ka-ti ng'o-mbe we-tu wa-ta-no wa-na-ku-la ma-ja-ni. [ˈmbuzi wɑˈtɑtu wɑˈkubwɑ wɑnɑzuruˈrɑ ʃɑmbɑˈni wɑˈkɑti ˈŋɔmbɛ ˈwɛtu wɑˈtɑnɔ wɑnɑˈkulɑ mɑˈʤɑni] (M-BOO-zee wah-TAH-too wah-KOO-bwah wah-nah-zoo-roo-RAH shahm-bah-NEE wah-KAH-tee N-GOH-m-bay WAY-too wah-TAH-noh wah-nah-KOO-lah mah-JAH-nee)",
          "translation": "Three big goats [animate: mbuzi watatu wakubwa wanazurura] roam the farm while our five cows [ng'ombe wetu watano wanakula] eat grass."
        },
        {
          "target": "Baiskeli yangu ina magurudumu mawili imara na taa moja nzuri.",
          "reading": "Ba-i-ske-li ya-ngu i-na ma-gu-ru-du-mu ma-wi-li i-ma-ra na ta-a mo-ja nzu-ri. [bɑisˈkɛli ˈjɑŋɡu ˈinɑ mɑɡuruˈdumu mɑˈwili iˈmɑrɑ nɑ ˈtɑː ˈmɔʤɑ ˈnzuri] (bah-ee-SKAY-lee YAHN-goo EE-nah mah-goo-roo-DOO-moo mah-WEE-lee ee-MAH-rah nah TAH-ah MOH-jah N-ZOO-ree)",
          "translation": "My bicycle [baiskeli yangu] has two strong wheels and one fine lamp [taa moja nzuri]."
        }
      ],
      "mnemonics": [
        "Vitu visivyo na uhai: nyumba mbili, nyumba zangu; Viumbe hai (wanyama): simba wawili, simba wetu wanatembea!"
      ],
      "culturalNotes": [
        "Katika mbuga za wanyama za Serengeti na Ngorongoro, waongozaji wa utalii hutumia upatanisho wa uhai kueleza wanyama: 'Tazama ndovu yule mkubwa anavyotembea kwa utulivu!'"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia idadi ya mbili (2) kwa usahihi kwa nomino isiyo na uhai katika Ngeli ya N-N?",
          "options": [
            "Kalamu mbili zilianguka chini ya meza. (Two pens fell under the table - Correct Class 10 numeral 'mbili')",
            "Kalamu mawili zilianguka (Kosa la kutumia JI-MA)",
            "Kalamu viwili zilianguka (Kosa la kutumia KI-VI)",
            "Kalamu wawili walianguka (Kosa la kutumia A-WA kwa kitu kisicho na uhai)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino isiyo na uhai ya N-N «Kalamu» huchukua kivumishi cha idadi «mbili» na kitenzi «zilianguka»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia wanyama watatu (ng'ombe 3), sentensi ipi inafuata kanuni sahihi ya upatanisho wa viumbe hai (Animate Concord)?",
          "options": [
            "Ng'ombe watatu wanakunywa maji mtoni. (Three cows are drinking water at the river - Correct animate concord with A-WA prefix 'wa-')",
            "Ng'ombe tatu zinakunywa maji mtoni (Kosa la kutumia upatanisho usio na uhai kwa wanyama)",
            "Ng'ombe matatu yanakunywa maji (Kosa la kutumia JI-MA)",
            "Ng'ombe vitatu vinakunywa maji (Kosa la kutumia KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Wanyama wote katika Kiswahili hufuata upatanisho wa viumbe hai (Ngeli ya 1/2 A-WA): «Ng'ombe watatu wanakunywa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya upatanisho wa vitu visivyo na uhai na viumbe hai katika Ngeli ya N-N kwa ukamilifu:",
          "options": [
            "Nyumba zetu mbili ziko kando ya bustani ambapo mbuzi watatu wakubwa wanakula majani. (Our two houses [nyumba zetu mbili ziko] are beside the garden where three big goats [mbuzi watatu wakubwa wanakula] are eating grass.)",
            "Nyumba zetu mbili ziko kando ya bustani ambapo mbuzi tatu kubwa zinakula majani.",
            "Nyumba yetu mawili yako kando ya bustani wakati mbuzi tatu zinakula.",
            "Wanyama na vitu visivyo na uhai hutumia viambishi vinavyofanana kabisa."
          ],
          "answerIndex": 0,
          "explanation": "«Nyumba zetu mbili ziko kando ya bustani ambapo mbuzi watatu wakubwa wanakula majani.» inatofautisha vizuri upatanisho wa vitu (nyumba zetu mbili ziko) na wanyama (mbuzi watatu wakubwa wanakula)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u13-l5": {
    "id": "sw-u13-l5",
    "subject": "swahili",
    "unit": 13,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli ya 9/10 (N-N) na Upatanisho (Grand Synthesis of N-N Class)",
    "level": "B1",
    "objective": "Kuunganisha mada zote za Unit 13: msamiati wa N-N, maneno ya kigeni, upatanisho wa vitenzi (i-/zi-), virejeshi vya watendwa (-i-/-zi-), viashiria (hii/hizi, hiyo/hizo, ile/zile), vimilikishi (yangu/zangu), vivumishi vya sifa na sheria za pua, idadi, na kanuni ya uhai kwa wanyama.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli ya 9/10 (Grand Synthesis of N-N Class):\n\n1. **Muundo Kamili wa Ngeli ya 9/10 (Master N-N Matrix)**:\n   - **Nomino**: *nyumba, kalamu, simu, nguo, barabara, meza, safari, shule, baiskeli, taa*.\n   - **Kiambishi Kitenzi (SP)**: *i-* (umoja: *nyumba imejengwa*) / *zi-* (wingi: *nyumba zimejengwa*).\n   - **Kirejeshi Mtendwa (OP)**: *-i-* (umoja: *ninaipenda*) / *-zi-* (wingi: *ninazipenda*).\n   - **Viashiria**: *hii / hizi* (karibu), *hiyo / hizo* (hapo), *ile / zile* (mbali).\n   - **Vimilikishi**: *yangu/yetu* (umoja) / *zangu/zetu* (wingi).\n   - **Vivumishi vya Sifa**: Sheria za pua (*nzuri, ndogo, mbaya, ndefu, mpya, nyeusi, nyeupe*) na maneno ya kigeni (*safi, imara, ghali*).\n   - **Vivumishi vya Idadi**: *moja* (1) / *mbili* (2), *tatu* (3), *nne* (4), *tano* (5), *nane* (8).\n   - **Kanuni ya Uhai (Animate Concord)**: Wanyama wote hufuata A-WA (*simba mmoja mkubwa amelala* / *simba wawili wakubwa wamelala*).",
      "examples": [
        {
          "target": "Nyumba zetu mpya zimejengwa kando ya barabara kuu, na barua hizi zote zimetumwa posta.",
          "reading": "Nyu-mba ze-tu mpy-a zi-me-je-ngwa ka-ndo ya ba-ra-ba-ra ku-u, na ba-ru-a hi-zi zo-te zi-me-tu-mwa po-sta. [ˈɲumbɑ ˈzɛtu ˈmpjɑ zimɛˈʤɛŋɡwɑ ˈkɑndɔ jɑ bɑrɑˈbɑrɑ ˈkuː nɑ bɑˈruɑ ˈhizi ˈzɔtɛ zimɛˈtumwɑ ˈpɔstɑ] (NYOOM-bah ZAY-too M-PYAH zee-may-JAYN-gwah KAHN-doh yah bah-rah-BAH-rah KOO-oo, nah bah-ROO-ah HEE-zee ZOH-tay zee-may-TOOM-wah POH-stah)",
          "translation": "Our new houses [nyumba zetu mpya] are built beside the highway, and all these letters [barua hizi zote] have been mailed."
        },
        {
          "target": "Simba wawili na twiga watatu wanaonekana mbugani, wakati gari zetu mbili zikisafiri kwa amani.",
          "reading": "Si-mba wa-wi-li na twi-ga wa-ta-tu wa-na-o-ne-ka-na mbu-ga-ni, wa-ka-ti ga-ri ze-tu mbi-li zi-ki-sa-fi-ri kwa a-ma-ni. [ˈsimbɑ wɑˈwili nɑ ˈtwiɡɑ wɑˈtɑtu wɑnɑɔnɛˈkɑnɑ mbuˈɡɑni wɑˈkɑti ˈɡɑri ˈzɛtu ˈmbili zikisɑˈfiri kwɑ ɑˈmɑni] (SEEM-bah wah-WEE-lee nah TWEE-gah wah-TAH-too wah-nah-oh-nay-KAH-nah m-boo-GAH-nee, wah-KAH-tee GAH-ree ZAY-too M-BEE-lee zee-kee-sah-FEE-ree kwah ah-MAH-nee)",
          "translation": "Two lions and three giraffes [animate A-WA] are visible in the park, while our two cars [inanimate N-N] travel peacefully."
        },
        {
          "target": "Umahiri wa Ngeli ya N-N ni nguzo kuu ya lugha ya Kiswahili inayowawezesha wazungumzaji kueleza maelfu ya maneno ya kigeni na vitu vya kila siku kwa muundo thabiti na sanifu.",
          "reading": "U-ma-hi-ri wa Nge-li ya N-N ni ngu-zo ku-u ya lu-gha ya Ki-swa-hi-li i-na-yo-wa-we-ze-sha wa-zu-ngu-mza-ji ku-e-le-za ma-e-lfu ya ma-ne-no ya ki-ge-ni na vi-tu vya ki-la si-ku kwa mui-ndo tha-bi-ti na sa-ni-fu. [umɑˈhiri wɑ ˈŋɡɛli jɑ ɛnˈɛn ni ˈŋɡuzɔ ˈkuː jɑ ˈluɣɑ jɑ kiswɑˈhili inɑjɔwɑwɛˈzɛʃɑ wɑzuŋɡumˈzɑʤi kuɛˈlɛzɑ mɑˈɛlfu jɑ mɑˈnɛnɔ jɑ kiˈɡɛni nɑ ˈvitu vjɑ ˈkilɑ ˈsiku kwɑ ˈmuindɔ θɑˈbiti nɑ sɑˈnifu] (oo-mah-HEE-ree wah N-GAY-lee yah EN-EN nee N-GOO-zoh KOO-oo yah LOO-ghah yah kee-swah-HEE-lee ee-nah-yoh-wah-way-ZAY-shah wah-zoon-goom-ZAH-jee koo-ay-LAY-zah mah-AYL-foo yah mah-NAY-noh yah kee-GAY-nee nah VEE-too vyah KEE-lah SEE-koo kwah moo-EEN-doh thah-BEE-tee nah sah-NEE-foo)",
          "translation": "Mastery of the N-N noun class [N-N grand synthesis: Ngeli ya N-N] is a pillar of Swahili, empowering speakers to articulate thousands of loanwords and everyday items with stable and standard syntax."
        }
      ],
      "mnemonics": [
        "Muhtasari wa N-N: Umoja (i-, hii/hiyo/ile, yangu, nzuri, moja); Wingi (zi-, hizi/hizo/zile, zangu, nzuri, mbili); Wanyama = A-WA!"
      ],
      "culturalNotes": [
        "Ujumuishaji mkubwa wa maneno ya kimataifa katika Ngeli ya N-N unathibitisha hadhi ya Kiswahili kama lugha inayokua na kubadilika kukidhi mahitaji ya kidijitali na kibiashara."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa ngeli ya 9/10 (N-N) ikijumuisha nomino, sifa, idadi, na kitenzi kwa vitu visivyo na uhai?",
          "options": [
            "Nguo nzuri tatu ziliuzwa dukani kwa bei nafuu. (Three fine garments were sold at the shop at an affordable price - Harmonious N-N class synthesis)",
            "Nguo mazuri matatu yaliuzwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Nguo vizuri vitatu viliuzwa (Kosa la kutumia upatanisho wa KI-VI)",
            "Nguo mizuri mitatu iliuzwa (Kosa la kutumia upatanisho wa M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "«Nguo nzuri tatu ziliuzwa dukani kwa bei nafuu.» inatekeleza upatanisho sahihi wa nomino (nguo), sifa (nzuri), idadi (tatu), na kitenzi (ziliuzwa)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 13, ni upatanisho gani sahihi wa kiashiria, kivumishi cha sifa, na kitenzi kwa nomino \"Simu\" (umoja)?",
          "options": [
            "Simu hii mpya iliwasilishwa ofisini mapema. (This new phone was delivered to the office early - Correct Class 9 demonstrative 'hii', adjective 'mpya', and verbal prefix 'i-')",
            "Simu hili jipya liliwasilishwa (Kosa la kutumia JI-MA)",
            "Simu hiki kipya kiliwasilishwa (Kosa la kutumia KI-VI)",
            "Simu huu mpya uliwasilishwa (Kosa la kutumia M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Simu» (umoja katika N-N) huchukua kiashiria «hii», sifa «mpya», na kitenzi «iliwasilishwa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 13 ya Ngeli ya 9/10 (N-N) na Vivumishi katika Kiswahili:",
          "options": [
            "Nyumba zetu mbili mpya zimejengwa vizuri kando ya barabara kuu, wakati simba wawili wakubwa wamelala chini ya mti. (Our two new houses [z-], beside the highway [N-N], while two big lions [animate A-WA] sleep under a tree.)",
            "Nyumba yetu mawili mapya yamejengwa vizuri wakati simba mbili zamelala.",
            "Nyumba zetu vipya vilijengwa vizuri wakati simba wawili inalala.",
            "Ngeli ya N-N haitumiki kwa maneno ya kigeni."
          ],
          "answerIndex": 0,
          "explanation": "«Nyumba zetu mbili mpya zimejengwa vizuri kando ya barabara kuu, wakati simba wawili wakubwa wamelala chini ya mti.» inajumuisha upatanisho wa N-N katika nyanja zote pamoja na kanuni ya uhai kwa wanyama kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u14-l1": {
    "id": "sw-u14-l1",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 1,
    "title": "Ngeli ya 11/14 (U): Nomino Zinazohesabika (U-ZI) na Nomino za Dhahania (U bila Wingi)",
    "level": "B1",
    "objective": "Kutofautisha na kutumia makundi mawili ya Ngeli ya U: nomino zinazohesabika zenye wingi katika Ngeli ya 10 (u- -> n-/ny-/kuta/funguo) na nomino za dhahania, hali, vitu vya unga/majimaji, na majina ya nchi yasiyo na wingi.",
    "presentation": {
      "explanation": "Ngeli ya 11/14 (U): Miundo ya Nomino na Makundi:\n\n1. **Kundi la 1: Nomino Zinazohesabika (Class 11 -> Class 10: U-ZI)**:\n   - Nomino za vitu virefu, vyembamba, au vinavyoshikika vinavyochukua wingi wa Ngeli ya 10 (N-N):\n     - *ufunguo* (key) -> **funguo** (keys)\n     - *ukuta* (wall) -> **kuta** (walls)\n     - *upanga* (sword) -> **panga** (swords)\n     - *ubao* (board / plank) -> **mbao** (boards) [*u-b- -> mb-*]\n     - *ubavu* (rib / side) -> **mbavu** (ribs)\n     - *wembe* (razor blade) [*u-embe*] -> **nyembe** (razors) [*ny-* kabla ya irabu]\n     - *wakati* (time / era) [*u-akati*] -> **nyakati** (times / eras)\n     - *waya* (wire) -> **nyaya** (wires)\n     - *ua* (courtyard / fence) -> **nyua** (fences)\n     - *ulimi* (tongue) -> **ndimi** (tongues) [*u-l- -> nd-*]\n     - *uzi* (thread) -> **nyuzi** (threads)\n     - *unywele* (a strand of hair) -> **nywele** (hair)\n\n2. **Kundi la 2: Nomino za Dhahania na Zisizohesabika (Class 14: U bila wingi)**:\n   - **Dhahania & Hisia**: *uhuru* (freedom / independence), *upendo* (love), *uzuri* (beauty), *wema* (goodness / kindness), *ubaya* (badness), *umri* (age), *utamaduni* (culture), *utajiri* (wealth), *ujana* (youth), *uzee* (old age), *usingizi* (sleep), *urafiki* (friendship).\n   - **Chakula cha Unga & Asili**: *ugali* (stiff maize porridge), *uji* (porridge), *unga* (flour), *umeme* (electricity).\n   - **Majina ya Nchi**: *Uganda, Ufaransa, Uingereza, Ujerumani, Urusi, Ureno, Uswisi*.",
      "examples": [
        {
          "target": "Ufunguo huu mdogo unafungua mlango wa chumba chetu.",
          "reading": "U-fu-nguo hu-u mdo-go u-na-fu-ngua mla-ngo wa chu-mba che-tu. [ufuˈŋɡuɔ ˈhuː mˈdɔɡɔ unɑfuˈŋɡuɑ ˈmlɑŋɡɔ wɑ ˈtʃumbɑ ˈtʃɛtu] (oo-foon-GOO-oh HOO-oo m-DOH-goh oo-nah-foon-GOO-ah m-LAHN-goh wah CHOO-m-bah CHAY-too)",
          "translation": "This small key [class 11: ufunguo huu mdogo] opens the door of our room."
        },
        {
          "target": "Funguo hizi zote zimepotea lakini kuta zetu zote ni imara.",
          "reading": "Fu-nguo hi-zi zo-te zi-me-po-te-a la-ki-ni ku-ta ze-tu zo-te ni i-ma-ra. [ˈfuŋɡuɔ ˈhizi ˈzɔtɛ zimɛpɔˈtɛɑ lɑˈkini ˈkutɑ ˈzɛtu ˈzɔtɛ ni iˈmɑrɑ] (FOON-goo-oh HEE-zee ZOH-tay zee-may-poh-TAY-ah lah-KEE-nee KOO-tah ZAY-too ZOH-tay nee ee-MAH-rah)",
          "translation": "All these keys [class 10: funguo hizi] are lost, but all our walls [class 10: kuta zetu zote] are strong."
        },
        {
          "target": "Upendo na wema huleta amani na utulivu katika jamii.",
          "reading": "U-pe-ndo na we-ma hu-le-ta a-ma-ni na u-tu-li-vu ka-ti-ka ja-mi-i. [uˈpɛndɔ nɑ ˈwɛmɑ hulɛˈtɑ ɑˈmɑni nɑ utuˈlivu kɑˈtikɑ ʤɑˈmiː] (oo-PAYN-doh nah WAY-mah hoo-lay-TAH ah-MAH-nee nah oo-too-LEE-voo kah-TEE-kah jah-MEE-ee)",
          "translation": "Love and kindness [abstract class 14: upendo na wema] bring peace and tranquility to society."
        }
      ],
      "mnemonics": [
        "Ngeli ya U: Vitu vinavyohesabika (ufunguo/funguo, ukuta/kuta); Dhahania/nchi hazina wingi (upendo, uhuru, ugali, Ufaransa)!"
      ],
      "culturalNotes": [
        "Neno 'Uhuru' (kutoka ngeli ya U) ni ishara kuu ya ukombozi wa mataifa ya Afrika Mashariki, kama unavyoonekana katika Mlima Kilimanjaro (Kilele cha Uhuru)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Wingi sahihi wa nomino \"Ukuta\" (wall) katika Ngeli ya U-ZI ni upi?",
          "options": [
            "kuta (Walls - Correct Class 10 plural of 'ukuta')",
            "miukuta (Kosa la kutumia kiambishi cha M-MI)",
            "makuta (Kosa la kutumia JI-MA)",
            "vikuta (Huu ni udogo katika KI-VI badala ya wingi wa kawaida)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Ukuta» hupoteza «u-» na kuwa «kuta» katika wingi wa Ngeli ya 10."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ipi kati ya zifuatazo ni nomino ya dhahania (Abstract Noun) katika Ngeli ya 14 (U) isiyo na umbo la wingi?",
          "options": [
            "upendo (Love - Class 14 abstract noun without plural)",
            "ufunguo (Nomino inayohesabika yenye wingi: funguo)",
            "wembe (Nomino inayohesabika yenye wingi: nyembe)",
            "ubao (Nomino inayohesabika yenye wingi: mbao)"
          ],
          "answerIndex": 0,
          "explanation": "«Upendo» ni nomino ya kidhahania ya Ngeli ya 14 isiyohesabika na isiyo na wingi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zilizo sahihi kabisa za umoja na wingi katika Ngeli ya U-ZI:",
          "options": [
            "Ufunguo -> funguo, Ukuta -> kuta, Ubao -> mbao, Wembe -> nyembe, Ulimi -> ndimi, Uzi -> nyuzi.",
            "Kitabu -> vitabu, Kiti -> viti, Chumba -> vyumba.",
            "Gari -> magari, Tunda -> matunda, Jina -> majina.",
            "Mti -> miti, Mto -> mito, Mkono -> mikono."
          ],
          "answerIndex": 0,
          "explanation": "Ufunguo/funguo, ukuta/kuta, ubao/mbao, wembe/nyembe, ulimi/ndimi, na uzi/nyuzi ni mifano sahihi ya mabadiliko ya U-ZI."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u14-l2": {
    "id": "sw-u14-l2",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 2,
    "title": "Upatanisho wa Vitenzi na Viashiria katika Ngeli ya 11/14 (Verbal Concord & Demonstratives in U Class)",
    "level": "B1",
    "objective": "Kutambua na kutumia viambishi vya kitenzi (u- kwa umoja, zi- kwa wingi wa vitu vinavyohesabika) na viashiria vyote vitatu (huu/hizi, huo/hizo, ule/zile) katika Ngeli ya U.",
    "presentation": {
      "explanation": "Upatanisho wa Ngeli ya U katika Vitenzi na Viashiria:\n\n1. **Upatanisho wa Kitenzi (Verbal Concord)**:\n   - **Umoja (Class 11/14: u- / w-)**: Kiambishi cha mtendaji ni **u-**, kiambishi cha mtendwa ni **-u-**:\n     - *Ukuta **u**meanguka* (The wall has fallen)\n     - *Upendo **u**naleta furaha* (Love brings joy)\n     - *Umeme **u**mekatika* (Electricity is disconnected)\n     - *Fundi ame**u**jenga ukuta* (The mason built the wall)\n   - **Wingi (Class 10: zi-) kwa nomino zinazohesabika**:\n     - *Kuta **zi**meanguka* (The walls have fallen)\n     - *Funguo **zi**mepatikana* (The keys have been found)\n     - *Fundi ame**zi**jenga kuta* (The mason built the walls)\n\n2. **Viashiria / Vionyeshi katika Ngeli ya U (Demonstratives)**:\n   - **Karibu (Near: This / These)**:\n     - Umoja: **huu** (*ufunguo huu*, *ukuta huu*, *upendo huu*)\n     - Wingi: **hizi** (*funguo hizi*, *kuta hizi*)\n   - **Mbali Kidogo / Rejelewa (Reference: That / Those)**:\n     - Umoja: **huo** (*ufunguo huo*, *ukuta huo*, *upendo huo*)\n     - Wingi: **hizo** (*funguo hizo*, *kuta hizo*)\n   - **Mbali Zaidi (Far: That / Those over there)**:\n     - Umoja: **ule** (*ufunguo ule*, *ukuta ule*)\n     - Wingi: **zile** (*funguo zile*, *kuta zile*)",
      "examples": [
        {
          "target": "Ukuta huu ulijengwa mwaka uliopita lakini kuta zile zilibomolewa na mvua kali.",
          "reading": "U-ku-ta hu-u u-li-je-ngwa mwa-ka u-li-o-pi-ta la-ki-ni ku-ta zi-le zi-li-bo-mo-le-wa na mvu-a ka-li. [uˈkutɑ ˈhuː uliˈʤɛŋɡwɑ ˈmwɑkɑ uliɔˈpitɑ lɑˈkini ˈkutɑ ˈzilɛ zilibɔmɔˈlɛwɑ nɑ ˈmvuɑ ˈkɑli] (oo-KOO-tah HOO-oo oo-lee-JAYN-gwah MWAH-kah oo-lee-oh-PEE-tah lah-KEE-nee KOO-tah ZEE-lay zee-lee-boh-moh-LAY-wah nah MVOO-ah KAH-lee)",
          "translation": "This wall [ukuta huu] was built [ulijengwa] last year, but those walls yonder [kuta zile] were demolished [zilibomolewa] by heavy rain."
        },
        {
          "target": "Umeme ulikatika ghafla mjini lakini sasa unawaka vizuri kila mahali.",
          "reading": "U-me-me u-li-ka-ti-ka gha-fla mji-ni la-ki-ni sa-sa u-na-wa-ka vi-zu-ri ki-la ma-ha-li. [uˈmɛmɛ ulikɑˈtikɑ ˈɣɑflɑ mʤiˈni lɑˈkini ˈsɑsɑ unɑˈwɑkɑ viˈzuri ˈkilɑ mɑˈhɑli] (oo-MAY-may oo-lee-kah-TEE-kah GHAH-flah m-jee-NEE lah-KEE-nee SAH-sah oo-nah-WAH-kah vee-ZOO-ree KEE-lah mah-HAH-lee)",
          "translation": "Electricity [umeme] was cut off [ulikatika] suddenly in town, but now it is on [unawaka] well everywhere."
        },
        {
          "target": "Ufunguo huo ulipotea jana lakini kaka yangu ameupata asubuhi hii.",
          "reading": "U-fu-nguo hu-o u-li-po-te-a ja-na la-ki-ni ka-ka ya-ngu a-me-u-pa-ta a-su-bu-hi hi-i. [ufuˈŋɡuɔ ˈhuɔ ulipɔˈtɛɑ ˈʤɑnɑ lɑˈkini ˈkɑkɑ ˈjɑŋɡu ɑmɛuˈpɑtɑ ɑsuˈbuhi ˈhiː] (oo-foon-GOO-oh HOO-oh oo-lee-poh-TAY-ah JAH-nah lah-KEE-nee KAH-kah YAHN-goo ah-may-oo-PAH-tah ah-soo-BOO-hee HEE-ee)",
          "translation": "That key [ufunguo huo] was lost yesterday, but my brother found it [OP -u-: ameupata] this morning."
        }
      ],
      "mnemonics": [
        "Vitenzi na Viashiria vya U: Umoja = U- / huu / huo / ule; Wingi = ZI- / hizi / hizo / zile!"
      ],
      "culturalNotes": [
        "Nyumba za kitamaduni za Waswahili hujengwa kwa kuta za matumbawe (coral rag walls) zilizounganishwa kwa chokaa, zinazojulikana kwa uimara wao."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kiashiria sahihi cha \"mbali kidogo\" (huo) na kitenzi cha umoja katika Ngeli ya U?",
          "options": [
            "Ubao huo ulianguka wakati wa dhoruba kali. (That board fell during the fierce storm - Correct Class 11 demonstrative 'huo' and verbal prefix 'u-')",
            "Ubao hilo lilianguka (Kosa la kutumia JI-MA)",
            "Ubao hicho kilianguka (Kosa la kutumia KI-VI)",
            "Ubao hiyo ilianguka (Kosa la kutumia N-N)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya umoja ya Ngeli ya U «Ubao» huchukua kiashiria «huo» na kiambishi cha kitenzi «u-»: «Ubao huo ulianguka»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia kuta nyingi za mbali zaidi (yonder), kirai sahihi cha kionyeshi ni kipi?",
          "options": [
            "kuta zile (Those walls over there - Correct Class 10 far demonstrative 'zile')",
            "kuta yale (Kosa la kutumia JI-MA)",
            "kuta vile (Kosa la kutumia KI-VI)",
            "kuta ule (Kosa la kutumia umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Katika wingi wa Ngeli ya U-ZI, kiashiria cha mbali zaidi ni «zile»: «kuta zile»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha sahihi ya viashiria vitatu katika Ngeli ya U kwa umoja na wingi:",
          "options": [
            "Umoja: huu (this), huo (that), ule (that yonder); Wingi: hizi (these), hizo (those), zile (those yonder).",
            "Umoja: hiki, hicho, kile; Wingi: hivi, hivyo, vile.",
            "Umoja: hili, hilo, lile; Wingi: haya, hayo, yale.",
            "Umoja: hii, hiyo, ile; Wingi: hizi, hizo, zile."
          ],
          "answerIndex": 0,
          "explanation": "Viashiria vya Ngeli ya U ni «huu, huo, ule» (umoja) na «hizi, hizo, zile» (wingi wa U-ZI)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u14-l3": {
    "id": "sw-u14-l3",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 3,
    "title": "Upatanisho wa Vivumishi vya Sifa katika Ngeli ya 11/14 (Adjective Concord in U Class)",
    "level": "B1",
    "objective": "Kutambua na kutumia upatanisho wa vivumishi vya sifa katika Ngeli ya U (m-/mw- katika umoja, na n-/ny- katika wingi kufuata sheria za pua).",
    "presentation": {
      "explanation": "Vivumishi vya Sifa katika Ngeli ya 11/14 (U-Class Adjectives):\n\n1. **Vivumishi vya Sifa katika Umoja (Class 11/14: Kiambishi m- / mw-)**:\n   - Kabla ya Konsonanti: **m-**:\n     - *ukuta **mrefu*** (a tall wall), *ufunguo **mdogo*** (a small key), *upanga **mkali*** (a sharp sword), *upendo **mkubwa*** (great love), *ugali **mzuri*** (fine ugali), *ubao **mpana*** (a wide board).\n   - Kabla ya Irabu: **mw-**:\n     - *ukuta **mweusi*** (*m-eusi*), *ubao **mweupe*** (*m-eupe*), *upendo **mwingine*** (*m-ingine*), *ugonjwa **mwingi*** (*m-ingi*).\n\n2. **Vivumishi vya Sifa katika Wingi (Class 10: Kiambishi n- / ny-)**:\n   - Wingi wa nomino zinazohesabika huchukua viambishi vya Ngeli ya 10 (N-N):\n     - *kuta **ndefu*** (*n + refu -> ndefu*), *funguo **ndogo***, *panga **kali***, *kuta **nyeusi***, *mbao **nyeupe***, *nyuzi **nyembamba***.\n\n3. **Vivumishi Visivyobadilika (Loanword Adjectives)**:\n   - *ukuta imara / kuta imara*, *ubao safi / mbao safi*, *upendo bora*, *umeme ghali*.",
      "examples": [
        {
          "target": "Ukuta mrefu mweusi ulijengwa kuzunguka jengo la serikali.",
          "reading": "U-ku-ta mre-fu mwe-u-si u-li-je-ngwa ku-zu-ngu-ka je-ngo la se-ri-ka-li. [uˈkutɑ mˈrɛfu ˈmwɛusi uliˈʤɛŋɡwɑ kuzuˈŋɡukɑ ˈʤɛŋɡɔ lɑ sɛrikɑˈli] (oo-KOO-tah m-RAY-foo MWAY-oo-see oo-lee-JAYN-gwah koo-zoon-GOO-kah JAYN-goh lah say-ree-kah-LEE)",
          "translation": "A tall [mrefu] black [mweusi] wall was built around the government building."
        },
        {
          "target": "Kuta ndefu nyeupe zimesafishwa vizuri na kupakwa rangi mpya.",
          "reading": "Ku-ta nde-fu nye-u-pe zi-me-sa-fi-shwa vi-zu-ri na ku-pa-kwa ra-ngi mpy-a. [ˈkutɑ ˈndɛfu ˈɲɛupɛ zimɛsɑˈfiʃwɑ viˈzuri nɑ kuˈpɑkwɑ ˈrɑŋɡi ˈmpjɑ] (KOO-tah N-DAY-foo NYAY-oo-pay zee-may-sah-FEE-shwah vee-ZOO-ree nah koo-PAH-kwah RAHN-gee M-PYAH)",
          "translation": "Tall [ndefu] white [nyeupe] walls have been cleaned well and painted with new paint."
        },
        {
          "target": "Ugali moto mzuri na unga safi viliandaliwa kwa chakula cha mchana.",
          "reading": "U-ga-li mo-to mzu-ri na u-nga sa-fi vi-li-a-nda-li-wa kwa cha-ku-la cha mcha-na. [uˈɡɑli ˈmɔtɔ mˈzuri nɑ ˈuŋɡɑ ˈsɑfi viliɑndɑˈliwɑ kwɑ tʃɑˈkulɑ tʃɑ mˈtʃɑnɑ] (oo-GAH-lee MOH-toh m-ZOO-ree nah OON-gah SAH-fee vee-lee-ahn-dah-LEE-wah kwah chah-KOO-lah chah m-CHAH-nah)",
          "translation": "Hot fine ugali [ugali mzuri] and clean flour [unga safi] were prepared for lunch."
        }
      ],
      "mnemonics": [
        "Vivumishi vya U: Umoja = m- / mw- (ukuta mrefu, ubao mweupe); Wingi = n- / ny- (kuta ndefu, mbao nyeupe)!"
      ],
      "culturalNotes": [
        "Ugali wa sembe (unga mweupe) au dona (unga wa nafaka nzima) ni chakula kikuu cha kila siku katika nchi zote za Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi ina kivumishi chenye upatanisho sahihi kinachoanza na irabu katika umoja wa Ngeli ya U?",
          "options": [
            "Ubao mweupe uliwekwa mbele ya darasa. (The white board was placed at the front of the classroom - Correct Class 11 adjective 'mw-eupe')",
            "Ubao cheupe uliwekwa (Kosa la kutumia upatanisho wa KI-VI)",
            "Ubao jeupe uliwekwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Ubao nyeupe uliwekwa (Kosa la kutumia upatanisho wa wingi wa N-N)"
          ],
          "answerIndex": 0,
          "explanation": "Kivumishi kinachoanza na irabu «-eupe» kinapopatana na nomino ya umoja wa U (ubao) huchukua «mw-» kupata «mweupe»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapovumisha nomino ya wingi \"Kuta\" (walls) kwa kutumia kivumishi \"-refu\" (tall/long), kirai sahihi ni kipi?",
          "options": [
            "kuta ndefu (Tall walls - Correct Class 10 nasal shift 'n + refu' -> 'ndefu')",
            "kuta mirefu (Kosa la kutumia upatanisho wa M-MI)",
            "kuta marefu (Kosa la kutumia upatanisho wa JI-MA)",
            "kuta mrefu (Kosa la kutumia umoja)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya wingi «Kuta» (Ngeli ya 10) huchukua kivumishi chenye muundo wa pua: «kuta ndefu»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa vivumishi vya sifa katika Ngeli ya U kwa umoja na wingi:",
          "options": [
            "Ukuta mrefu mweupe ulijengwa jana na kuta ndefu nyeusi zilibomolewa na fundi. (Tall white wall [mrefu mweupe], tall black walls [ndefu nyeusi].)",
            "Ukuta ndefu nyeupe ulijengwa jana na kuta mirefu myeusi zilibomolewa.",
            "Ukuta kirefu cheupe kilijengwa na kuta marefu meusi yalibomolewa.",
            "Vivumishi vya Ngeli ya U havibadiliki kamwe katika umoja na wingi."
          ],
          "answerIndex": 0,
          "explanation": "«Ukuta mrefu mweupe ulijengwa jana na kuta ndefu nyeusi zilibomolewa na fundi.» inafuata sheria zote za vivumishi vya Ngeli ya U."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u14-l4": {
    "id": "sw-u14-l4",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 4,
    "title": "Vivumishi vya Idadi, Vimilikishi, na Uundaji wa Dhahania (Numbers, Possessives & Abstract Derivation)",
    "level": "B1",
    "objective": "Kutumia vivumishi vya idadi (mmoja, mbili, tatu, nne, tano, nane), vimilikishi (wangu/zangu), na kuelewa uundaji wa majina ya dhahania (Abstract Noun Formation kwa kiambishi u-).",
    "presentation": {
      "explanation": "Vivumishi vya Idadi, Vimilikishi, na Uundaji wa Majina ya Dhahania:\n\n1. **Vivumishi vya Idadi katika Ngeli ya U**:\n   - Umoja: *ufunguo **mmoja*** (1 key - *mmoja* kwa sababu ya upatanisho wa m-)\n   - Wingi (Class 10 N-N): *funguo **mbili*** (2), *funguo **tatu*** (3), *kuta **nne*** (4), *kuta **tano*** (5), *panga **nane*** (8).\n   - Idadi zisizobadilika: *funguo sita, saba, tisa, kumi*.\n\n2. **Vimilikishi vya Ngeli ya U**:\n   - Umoja: **wangu, wako, wake, wetu, wenu, wao** (*ukuta wangu* = my wall, *upendo wetu* = our love, *uhuru wetu* = our freedom)\n   - Wingi: **zangu, zako, zake, zetu, zenu, zao** (*kuta zangu* = my walls, *funguo zetu* = our keys)\n\n3. **Uundaji wa Majina ya Dhahania (Abstract Derivation: Kiambishi U-)**:\n   - Kiambishi **u-** (au **w-**) kikitangulizwa mbele ya kivumishi au nomino huunda jina la dhahania/sifa:\n     - *-zuri* (good/beautiful) -> **uzuri** (beauty)\n     - *-baya* (bad) -> **ubaya** (badness / malice)\n     - *-kubwa* (big) -> **ukubwa** (seniority / greatness)\n     - *-dogo* (small) -> **udogo** (infancy / smallness)\n     - *-refu* (long/tall) -> **urefu** (height / length)\n     - *mtoto* (child) -> **utoto** (childhood)\n     - *kijana* (youth) -> **ujana** (youthhood)\n     - *mzee* (elder) -> **uzee** (old age)\n     - *rafiki* (friend) -> **urafiki** (friendship)\n     - *mwalimu* (teacher) -> **ualimu** (teaching profession)\n     - *daktari* (doctor) -> **udaktari** (medical profession)",
      "examples": [
        {
          "target": "Uhuru wetu na upendo wetu ndizo nguzo kuu za umoja wa kitaifa.",
          "reading": "U-hu-ru we-tu na u-pe-ndo we-tu ndi-zo ngu-zo ku-u za u-mo-ja wa ki-ta-i-fa. [uˈhuru ˈwɛtu nɑ uˈpɛndɔ ˈwɛtu ˈndizɔ ˈŋɡuzɔ ˈkuː zɑ uˈmɔʤɑ wɑ kitɑˈifɑ] (oo-HOO-roo WAY-too nah oo-PAYN-doh WAY-too N-DEE-zoh N-GOO-zoh KOO-oo zah oo-MOH-jah wah kee-tah-EE-fah)",
          "translation": "Our freedom [uhuru wetu] and our love [upendo wetu] are the main pillars of national unity [umoja]."
        },
        {
          "target": "Funguo zetu mbili mpya ziliwekwa kabatini pamoja na nyaraka zote.",
          "reading": "Fu-nguo ze-tu mbi-li mpy-a zi-li-we-kwa ka-ba-ti-ni pa-mo-ja na nya-ra-ka zo-te. [ˈfuŋɡuɔ ˈzɛtu ˈmbili ˈmpjɑ ziliˈwɛkwɑ kɑbɑˈtini pɑˈmɔʤɑ nɑ ɲɑˈrɑkɑ ˈzɔtɛ] (FOON-goo-oh ZAY-too M-BEE-lee M-PYAH zee-lee-WAY-kwah kah-bah-TEE-nee pah-MOH-jah nah nyah-RAH-kah ZOH-tay)",
          "translation": "Our two new keys [funguo zetu mbili mpya] were placed in the cupboard along with all documents."
        },
        {
          "target": "Urafiki wao wa dhati ulianza wakati wa utoto wao kijijini.",
          "reading": "U-ra-fi-ki wa-o wa dha-ti u-li-a-nza wa-ka-ti wa u-to-to wa-o ki-ji-ji-ni. [urɑˈfiki ˈwɑɔ wɑ ˈðɑti uliˈɑnzɑ wɑˈkɑti wɑ uˈtɔtɔ ˈwɑɔ kiʤiˈʤini] (oo-rah-FEE-kee WAH-oh wah THAH-tee oo-lee-AHN-zah wah-KAH-tee wah oo-TOH-toh WAH-oh kee-jee-jee-NEE)",
          "translation": "Their sincere friendship [abstract: urafiki wao] began during their childhood [abstract: utoto wao] in the village."
        }
      ],
      "mnemonics": [
        "U- Derivation: -zuri -> uzuri, rafiki -> urafiki, mtoto -> utoto; Idadi: ufunguo mmoja, funguo mbili/tatu; Vimilikishi: ukuta wangu / kuta zangu!"
      ],
      "culturalNotes": [
        "Falsafa ya 'Ujamaa' (kutoka jina 'jamaa' -> udada na ukaka wa jamii) iliyoasisiwa na Mwalimu Julius Nyerere inatokana na uundaji wa nomino za dhahania za Ngeli ya U."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia nambari moja (1) kwa upatanisho sahihi wa umoja katika Ngeli ya U?",
          "options": [
            "Ufunguo mmoja ulipatikana chini ya kiti. (One key was found under the chair - Correct Class 11 numeral 'mmoja')",
            "Ufunguo moja ulipatikana (Kosa la kuacha kiambishi cha upatanisho 'm-')",
            "Ufunguo kimoja ulipatikana (Kosa la kutumia upatanisho wa KI-VI)",
            "Ufunguo limo uliopatikana (Kosa la kutumia upatanisho wa JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Katika umoja wa Ngeli ya U, kivumishi cha idadi «-moja» huchukua «m-»: «ufunguo mmoja»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kivumishi \"-refu\" (tall/long) kinapobadilishwa kuwa jina la dhahania (abstract noun) linalomaanisha \"height / length\", neno sahihi huwa lipi?",
          "options": [
            "urefu (Height / length - Correct abstract derivation with prefix 'u-')",
            "kirefu (Hii ni sifa ya ngeli ya KI-VI au lugha ndefu)",
            "marefu (Huu ni wingi wa JI-MA)",
            "mrefu (Hii ni sifa ya A-WA au M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "Kivumishi «-refu» huchukua kiambishi cha dhahania «u-» kupata «urefu» (height / length)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya idadi, vimilikishi, na majina ya dhahania katika Ngeli ya U kwa ukamilifu:",
          "options": [
            "Urafiki wetu ulianza wakati wa utoto wetu, na funguo zetu mbili mpya zimefungua milango ya mafanikio. (Our friendship [urafiki wetu], our childhood [utoto wetu], and our two new keys [funguo zetu mbili mpya].)",
            "Urafiki yetu ilianza wakati wa utoto yetu na funguo yetu mawili mapya.",
            "Urafiki kitoto ulianza wakati wa funguo mbili.",
            "Ngeli ya U haitumiki kuunda majina ya dhahania katika Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Urafiki wetu ulianza wakati wa utoto wetu, na funguo zetu mbili mpya zimefungua milango ya mafanikio.» inajumuisha miundo ya dhahania (urafiki, utoto), vimilikishi (wetu, zetu), na idadi (mbili)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u14-l5": {
    "id": "sw-u14-l5",
    "subject": "swahili",
    "unit": 14,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli ya 11/14 (U) na Majina ya Dhahania (Grand Synthesis of U Class)",
    "level": "B1",
    "objective": "Kuunganisha mada zote za Unit 14: nomino zinazohesabika za U-ZI, nomino za dhahania na nchi zisizo na wingi, upatanisho wa vitenzi (u-/zi-), virejeshi vya watendwa (-u-/-zi-), viashiria (huu/hizi, huo/hizo, ule/zile), vimilikishi (wangu/zangu), vivumishi vya sifa (m-/n-), idadi, na mifumo ya uundaji wa maneno ya dhahania.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli ya 11/14 (Grand Synthesis of U Class):\n\n1. **Muundo Kamili wa Ngeli ya 11/14 (Master U Matrix)**:\n   - **Nomino Zinazohesabika (11->10)**: *ufunguo / funguo*, *ukuta / kuta*, *ubao / mbao*, *wembe / nyembe*, *ulimi / ndimi*, *uzi / nyuzi*.\n   - **Nomino za Dhahania na Nchi (14)**: *uhuru, upendo, uzuri, urafiki, ugali, unga, umeme, Uganda, Ufaransa*.\n   - **Kiambishi Kitenzi (SP)**: *u-* (umoja: *ukuta umeanguka, upendo unaleta amani*) / *zi-* (wingi: *kuta zimeanguka*).\n   - **Kirejeshi Mtendwa (OP)**: *-u-* (umoja: *ninaupenda*) / *-zi-* (wingi: *ninazipenda*).\n   - **Viashiria**: *huu / hizi* (karibu), *huo / hizo* (hapo), *ule / zile* (mbali).\n   - **Vimilikishi**: *wangu/wetu* (umoja) / *zangu/zetu* (wingi).\n   - **Vivumishi vya Sifa**: *m-/mw-* (umoja: *ukuta mrefu, ubao mweupe*) / *n-/ny-* (wingi: *kuta ndefu, mbao nyeupe*).\n   - **Vivumishi vya Idadi**: *mmoja* (1) / *mbili* (2), *tatu* (3), *nne* (4), *tano* (5), *nane* (8).\n   - **Uundaji wa Dhahania (U-)**: *-zuri -> uzuri*, *rafiki -> urafiki*, *mtoto -> utoto*, *mwalimu -> ualimu*.",
      "examples": [
        {
          "target": "Ufunguo wetu mmoja umefungua milango yote, na kuta zetu zote nne ni imara.",
          "reading": "U-fu-nguo we-tu mmo-ja u-me-fu-ngua mi-la-ngo yo-te, na ku-ta ze-tu zo-te nne ni i-ma-ra. [ufuˈŋɡuɔ ˈwɛtu ˈmːɔʤɑ umɛfuˈŋɡuɑ miˈlɑŋɡɔ ˈjɔtɛ nɑ ˈkutɑ ˈzɛtu ˈzɔtɛ ˈnːɛ ni iˈmɑrɑ] (oo-foon-GOO-oh WAY-too M-MOH-jah oo-may-foon-GOO-ah mee-LAHN-goh YOH-tay, nah KOO-tah ZAY-too ZOH-tay N-NAY nee ee-MAH-rah)",
          "translation": "Our one key [ufunguo wetu mmoja] opened all doors, and all our four walls [kuta zetu zote nne] are firm."
        },
        {
          "target": "Uhuru wetu, umoja wetu, na upendo wetu vinaleta maendeleo makubwa nchini.",
          "reading": "U-hu-ru we-tu, u-mo-ja we-tu, na u-pe-ndo we-tu vi-na-le-ta ma-e-nde-le-o ma-kbu-wa nchi-ni. [uˈhuru ˈwɛtu uˈmɔʤɑ ˈwɛtu nɑ uˈpɛndɔ ˈwɛtu vinɑlɛˈtɑ mɑɛndɛˈlɛɔ mɑˈkubwɑ ˈntʃini] (oo-HOO-roo WAY-too, oo-MOH-jah WAY-too, nah oo-PAYN-doh WAY-too vee-nah-lay-TAH mah-ayn-day-LAY-oh mah-KOO-bwah n-chee-NEE)",
          "translation": "Our freedom [uhuru wetu], our unity [umoja wetu], and our love [upendo wetu] bring great progress to the nation."
        },
        {
          "target": "Kujifunza Ngeli ya U kunakamilisha uelewa wa falsafa ya lugha ya Kiswahili katika kueleza dhana za kiroho, kimaadili, na ufundi wa kimofolojia.",
          "reading": "Ku-ji-fu-nza Nge-li ya U ku-na-ka-mi-li-sha u-e-le-wa wa fa-lsa-fa ya lu-gha ya Ki-swa-hi-li ka-ti-ka ku-e-le-za dha-na za ki-ro-ho, ki-ma-a-di-li, na u-fu-ndi wa ki-mo-fo-lo-jia. [kuʤiˈfunzɑ ˈŋɡɛli jɑ ˈu kunɑkɑmiˈliʃɑ uɛˈlɛwɑ wɑ fɑlˈsɑfɑ jɑ ˈluɣɑ jɑ kiswɑˈhili kɑˈtikɑ kuɛˈlɛzɑ ˈðɑnɑ zɑ kiˈrɔhɔ kimɑɑˈdili nɑ uˈfundi wɑ kimɔfɔlɔˈʤiɑ] (koo-jee-FOON-zah N-GAY-lee yah OO koo-nah-kah-mee-LEE-shah oo-ay-LAY-wah wah fahl-SAH-fah yah LOO-ghah yah kee-swah-HEE-lee kah-TEE-kah koo-ay-LAY-zah THAH-nah zah kee-ROH-hoh, kee-mah-ah-DEE-lee, nah oo-FOON-dee wah kee-moh-foh-loh-JEE-ah)",
          "translation": "Mastering the U noun class [U class grand synthesis: Ngeli ya U] completes the comprehension of Swahili linguistic philosophy in expressing spiritual, moral, and morphological nuances."
        }
      ],
      "mnemonics": [
        "Muhtasari wa Ngeli ya U: Umoja (u-, huu/huo/ule, wangu, mrefu, mmoja); Wingi (zi-, hizi/hizo/zile, zangu, ndefu, mbili); Dhahania = U- bila wingi!"
      ],
      "culturalNotes": [
        "Nyimbo nyingi za taarabu na mashairi ya kijadi ya pwani husifu 'Uzuri', 'Upendo', na 'Ukarimu' wa jamii ya Waswahili kupitia ngeli ya U."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa ngeli ya U-ZI ikijumuisha nomino, sifa, idadi, na kitenzi katika wingi?",
          "options": [
            "Funguo ndogo tatu zilinunuliwa kwa ajili ya madirisha yote. (Three small keys were bought for all windows - Harmonious U-ZI class synthesis)",
            "Funguo madogo matatu yalinunuliwa (Kosa la kutumia upatanisho wa JI-MA)",
            "Funguo vidogo vitatu vilinunuliwa (Kosa la kutumia upatanisho wa KI-VI)",
            "Funguo midogo mitatu ilinunuliwa (Kosa la kutumia upatanisho wa M-MI)"
          ],
          "answerIndex": 0,
          "explanation": "«Funguo ndogo tatu zilinunuliwa kwa ajili ya madirisha yote.» inatekeleza upatanisho sahihi wa wingi wa U-ZI: nomino (funguo), sifa ya pua (ndogo), idadi (tatu), na kitenzi (zilinunuliwa)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 14, ni upatanisho gani sahihi wa kiashiria, kivumishi cha sifa, na kitenzi kwa nomino \"Ukuta\" (umoja)?",
          "options": [
            "Ukuta huu mrefu ulijengwa na mafundi stadi. (This tall wall was built by skilled masons - Correct Class 11 demonstrative 'huu', adjective 'mrefu', and verbal prefix 'u-')",
            "Ukuta hii ndefu ilijengwa (Kosa la kutumia upatanisho wa N-N)",
            "Ukuta hili refu lilijengwa (Kosa la kutumia JI-MA)",
            "Ukuta hiki kirefu kilijengwa (Kosa la kutumia KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Ukuta» (umoja katika Ngeli ya U) huchukua kiashiria «huu», sifa «mrefu», na kitenzi «ulijengwa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 14 ya Ngeli ya 11/14 (U) na Majina ya Dhahania katika Kiswahili:",
          "options": [
            "Ukuta wetu mrefu ulijengwa jana, uhuru wetu na upendo wetu vinaleta amani, na funguo zetu zote tatu ziko mezani. (Our tall wall [u-], our freedom and love [class 14], and all our three keys [z-].)",
            "Ukuta yetu ndefu ilijengwa jana na uhuru yetu inaleta amani.",
            "Funguo zetu zote matatu yako mezani wakati ukuta hili linajengwa.",
            "Ngeli ya U haitofautishi kati ya vitu vinavyohesabika na dhahania."
          ],
          "answerIndex": 0,
          "explanation": "«Ukuta wetu mrefu ulijengwa jana, uhuru wetu na upendo wetu vinaleta amani, na funguo zetu zote tatu ziko mezani.» inajumuisha upatanisho wa U-ZI na dhahania katika nyanja zote kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u15-l1": {
    "id": "sw-u15-l1",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 1,
    "title": "Ngeli za Mahali (PA-KU-MU): Dhana za Mahali Mahususi (PA), Eneo/Mwelekeo (KU), na Ndani (MU)",
    "level": "B1",
    "objective": "Kutambua na kutofautisha maana za ngeli tatu za mahali: Ngeli ya 16 (PA- kwa mahali mahususi/panapogusika), Ngeli ya 17 (KU- kwa eneo pana/mwelekeo/popote), na Ngeli ya 18 (MU- kwa mahali ndani).",
    "presentation": {
      "explanation": "Ngeli za Mahali katika Kiswahili (Locative Classes 16, 17, 18):\n\nKatika lugha ya Kiswahili, dhana ya mahali (Locative) imegawanyika katika ngeli tatu za kipekee kulingana na aina ya eneo:\n\n1. **Ngeli ya 16 (PA- / Mahali Mahususi - Specific Location)**:\n   - Hutumika kuashiria eneo dogo, mahususi, lililo wazi, au linalogusika moja kwa moja:\n     - Neno la msingi: *mahali / pahali* (place / spot).\n     - Viambishi: **pa-** (*Hapa ni pazuri* = Here is beautiful / *Mahali hapa panapendeza*).\n\n2. **Ngeli ya 17 (KU- / Eneo Pana au Mwelekeo - Indefinite / General Area / Direction)**:\n   - Hutumika kuashiria eneo pana lisilo na mipaka kamili, upande au mwelekeo, au popote kwa jumla:\n     - Viambishi: **ku-** (*Huku kuna amani* = Around here there is peace / *Kule mlimani kuna baridi* = Over there on the mountain it is cold).\n\n3. **Ngeli ya 18 (MU- / Mahali Ndani - Interior / Inside Location)**:\n   - Hutumika kuashiria ndani ya chumba, sanduku, jengo, au mazingira yaliyofungwa:\n     - Viambishi: **mu- / m-** (*Humu chumbani mna hewa safi* = In here inside the room there is fresh air / *Mle sandukuni mna nguo* = Inside that box there are clothes).",
      "examples": [
        {
          "target": "Mahali hapa ni pazuri na panavutia watalii wengi kutoka nchi za mbali.",
          "reading": "Ma-ha-li ha-pa ni pa-zu-ri na pa-na-vu-tia wa-ta-li-i we-ngi ku-to-ka nchi za mba-li. [mɑˈhɑli ˈhɑpɑ ni pɑˈzuri nɑ pɑnɑvuˈtiɑ wɑtɑˈliː ˈwɛŋɡi kutɔˈkɑ ˈntʃi zɑ ˈmbɑli] (mah-HAH-lee HAH-pah nee pah-ZOO-ree nah pah-nah-voo-TEE-ah wah-tah-LEE-ee WAYN-gee koo-TOH-kah N-CHEE zah M-BAH-lee)",
          "translation": "This specific place [class 16: mahali hapa] is beautiful [pazuri] and attracts [panavutia] many tourists from distant countries."
        },
        {
          "target": "Kule mlimani kuna hewa baridi na mashamba ya chai yanastawi vizuri.",
          "reading": "Ku-le mli-ma-ni ku-na he-wa ba-ri-di na ma-sha-mba ya cha-i ya-na-sta-wi vi-zu-ri. [ˈkulɛ mlimɑˈni ˈkunɑ ˈhɛwɑ bɑˈridi nɑ mɑˈʃɑmbɑ jɑ ˈtʃɑi jɑnɑstɑˈwi viˈzuri] (KOO-lay m-lee-mah-NEE KOO-nah HAY-wah bah-REE-dee nah mah-SHAHM-bah yah CHAH-ee yah-nah-stah-WEE vee-ZOO-ree)",
          "translation": "Over there on the mountain [class 17: kule mlimani] has cold air [kuna] and tea farms flourish."
        },
        {
          "target": "Humu chumbani mna utulivu mkubwa na wanafunzi wanajisomea vitabu.",
          "reading": "Hu-mu chu-mba-ni mna u-tu-li-vu mku-bwa na wa-na-fu-nzi wa-na-ji-so-me-a vi-ta-bu. [ˈhumu tʃumbɑˈni ˈmnɑ utuˈlivu mˈkubwɑ nɑ wɑnɑˈfunzi wɑnɑʤisɔˈmɛɑ viˈtɑbu] (HOO-moo choom-bah-NEE M-NAH oo-too-LEE-voo m-KOO-bwah nah wah-nah-FOON-zee wah-nah-jee-soh-MAY-ah vee-TAH-boo)",
          "translation": "In here inside the room [class 18: humu chumbani] there is great serenity [mna utulivu] and students are studying books."
        }
      ],
      "mnemonics": [
        "PA-KU-MU: PA = Mahali mahususi/hapa (pazuri); KU = Eneo pana/kule (kuna); MU = Mahali ndani/humu (mna)!"
      ],
      "culturalNotes": [
        "Neno 'Kwetu' (kutoka ngeli ya 17 KU-) lina maana pana ya 'nyumbani kwetu / nchi yetu / asili yetu', likiashiria mshikamano wa kijamii na kijiografia."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia Ngeli ya 16 (PA-) kwa ufasaha kueleza mahali mahususi?",
          "options": [
            "Mahali hapa panafaa kwa ajili ya mkutano wetu. (This specific place is suitable for our meeting - Correct Class 16 specific locative prefix 'pa-')",
            "Mahali huku kunafaa kwa mkutano (Huu ni mwelekeo wa Ngeli ya 17 KU-)",
            "Mahali humu mnafaa kwa mkutano (Huu ni ndani wa Ngeli ya 18 MU-)",
            "Mahali hili linafaa kwa mkutano (Kosa la kutumia upatanisho wa JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Mahali» inapotajwa mahususi huchukua kiashiria «hapa» na kitenzi «panafaa» katika Ngeli ya 16 (PA-)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapotaka kueleza hali ya hewa ya eneo pana la mbali (over there on the mountain), kiambishi gani cha mahali kinatumika?",
          "options": [
            "kule (Over there / general direction - Class 17 locative demonstrative)",
            "pale (Hii inaonyesha eneo dogo mahususi)",
            "mle (Hii inaonyesha ndani ya kitu)",
            "yale (Huu ni upatanisho wa JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "«Kule» ni kiashiria cha Ngeli ya 17 (KU-) kinachoeleza mwelekeo au eneo pana lililo mbali."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayofafanua tofauti sahihi kati ya ngeli tatu za mahali (PA, KU, MU) katika Kiswahili:",
          "options": [
            "Hapa (PA) ni mahali mahususi, huku/kule (KU) ni eneo pana au mwelekeo, na humu/mle (MU) ni mahali ndani ya kitu. (Specific [PA], General/Directional [KU], Interior [MU].)",
            "PA ni wingi wa KU, na MU ni wingi wa PA.",
            "Kiswahili hakina ngeli za mahali bali kinatumia vihusishi pekee.",
            "PA, KU, na MU hutumika kwa kubadilishana bila tofauti yoyote ya kimaana."
          ],
          "answerIndex": 0,
          "explanation": "Ngeli ya 16 (PA) ni mahali mahususi, Ngeli ya 17 (KU) ni eneo pana/mwelekeo, na Ngeli ya 18 (MU) ni mahali ndani."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u15-l2": {
    "id": "sw-u15-l2",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 2,
    "title": "Kiambishi cha Mahali cha Mwisho (-ni Enclitic) na Mabadiliko ya Upatanisho (Locative Enclitic -ni)",
    "level": "B1",
    "objective": "Kuelewa jinsi kiambishi tamati cha mahali (-ni) kinavyobadilisha nomino yoyote ya kawaida kuwa nomino ya mahali (inayoingia katika PA, KU, au MU) na kubadilisha upatanisho wa kisarufi wa sentensi nzima.",
    "presentation": {
      "explanation": "Kiambishi cha Mahali cha Mwisho (-ni Locative Enclitic):\n\n1. **Uundaji wa Nomino za Mahali kwa -ni**:\n   - Nomino ya kawaida ikiongezwa kiambishi **-ni** mwishoni, hubadilika kuwa nomino ya mahali (Locative Noun):\n     - *nyumba* (house) -> **nyumbani** (at/in the house)\n     - *shule* (school) -> **shuleni** (at/in the school)\n     - *chumba* (room) -> **chumbani** (in the room)\n     - *meza* (table) -> **mezani** (on the table)\n     - *mji* (town) -> **mjini** (in town / to town)\n     - *bahari* (sea) -> **baharini** (in/at the sea)\n     - *msitu* (forest) -> **msituni** (in the forest)\n     - *uwanja* (field/stadium) -> **uwanjani** (at the stadium)\n   - **Kumbuka**: Majina ya watu (*kwa Ali*) na majina ya miji/nchi (*Nairobi, Dar es Salaam, Tanzania*) **hayachukui -ni**!\n\n2. **Mabadiliko ya Upatanisho wa Kisarufi (Grammatical Shift)**:\n   - Nomino ikishapokea **-ni**, inapoteza ngeli yake ya awali na kuanza kupatana na ngeli za mahali (PA, KU, au MU):\n     - *Nyumba **i**mejengwa* (Ngeli ya 9: The house is built)\n     - *Nyumba**ni** **pa**na wageni* (Ngeli ya 16: At the house there are guests)\n     - *Nyumba**ni** **ku**na amani* (Ngeli ya 17: At home there is peace)\n     - *Nyumba**ni** **m**na watu* (Ngeli ya 18: Inside the house there are people).",
      "examples": [
        {
          "target": "Shuleni kuna wanafunzi wengi wanaosoma kwa bidii kila siku.",
          "reading": "Shu-le-ni ku-na wa-na-fu-nzi we-ngi wa-na-o-so-ma kwa bi-di-i ki-la si-ku. [ʃulɛˈni ˈkunɑ wɑnɑˈfunzi ˈwɛŋɡi wɑnɑɔˈsɔmɑ kwɑ biˈdiː ˈkilɑ ˈsiku] (shoo-lay-NEE KOO-nah wah-nah-FOON-zee WAYN-gee wah-nah-oh-SOH-mah kwah bee-DEE-ee KEE-lah SEE-koo)",
          "translation": "At school [locative KU-: shuleni kuna] there are many students studying hard every day."
        },
        {
          "target": "Mezani pana vitabu vitatu na kalamu mbili zilizopangwa vizuri.",
          "reading": "Me-za-ni pa-na vi-ta-bu vi-ta-tu na ka-la-mu mbi-li zi-li-zo-pa-ngwa vi-zu-ri. [mɛzɑˈni ˈpɑnɑ viˈtɑbu viˈtɑtu nɑ kɑˈlɑmu ˈmbili zilizɔpɑmˈbwɑ viˈzuri] (may-zah-NEE PAH-nah vee-TAH-boo vee-TAH-too nah kah-LAH-moo M-BEE-lee zee-lee-zoh-PAHM-bwah vee-ZOO-ree)",
          "translation": "On the table [specific locative PA-: mezani pana] there are three books and two pens neatly arranged."
        },
        {
          "target": "Chumbani mle mna giza kidogo lakini taa inawashwa sasa hivi.",
          "reading": "Chu-mba-ni mle mna gi-za ki-do-go la-ki-ni ta-a i-na-wa-shwa sa-sa hi-vi. [tʃumbɑˈni ˈmlɛ ˈmnɑ ˈɡizɑ kiˈdɔɡɔ lɑˈkini ˈtɑː inɑˈwɑʃwɑ ˈsɑsɑ ˈhivi] (choom-bah-NEE M-LAY M-NAH GEE-zah kee-DOH-goh lah-KEE-nee TAH-ah ee-nah-WAH-shwah SAH-sah HEE-vee)",
          "translation": "Inside that room [interior locative MU-: chumbani mle mna] it is slightly dark, but the lamp is being switched on now."
        }
      ],
      "mnemonics": [
        "Nomino + -ni = Nomino ya Mahali (shule -> shuleni); Upatanisho unabadilika kutoka ngeli ya asili hadi PA/KU/MU!"
      ],
      "culturalNotes": [
        "Waswahili husema 'Mgeni njoo, mwenyeji apone' na kualika wageni 'karibuni nyumbani kwetu' kuonyesha ukarimu wa dhati wa eneo lao."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaonyesha upatanisho sahihi baada ya nomino \"Meza\" kuongezwa kiambishi cha mahali \"-ni\" (mezani) kwa eneo mahususi?",
          "options": [
            "Mezani pana chakula kitamu cha wageni. (On the table there is delicious food for guests - Correct locative concord 'mezani pana')",
            "Mezani ina chakula kitamu (Kosa la kubaki na upatanisho wa Ngeli ya 9 N-N)",
            "Mezani lina chakula kitamu (Kosa la kutumia upatanisho wa JI-MA)",
            "Mezani kina chakula kitamu (Kosa la kutumia upatanisho wa KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino «Meza» ikiongezwa «-ni» kuwa «mezani» inakuwa nomino ya mahali na huchukua upatanisho wa mahali: «Mezani pana chakula»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Nomino ipi kati ya zifuatazo HAIWEZI kuongezwa kiambishi cha mahali \"-ni\" katika Kiswahili sanifu?",
          "options": [
            "Tanzania (Country / proper geographical name does not take '-ni')",
            "shule (Inachukua -ni -> shuleni)",
            "chumba (Inachukua -ni -> chumbani)",
            "msitu (Inachukua -ni -> msituni)"
          ],
          "answerIndex": 0,
          "explanation": "Majina ya nchi na miji halisi (kama Tanzania, Mombasa, Nairobi) hayachukui kiambishi cha mahali «-ni»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoeleza kanuni sahihi ya kiambishi \"-ni\" cha mahali katika Kiswahili:",
          "options": [
            "Kiambishi «-ni» hubadilisha nomino za vitu kuwa nomino za mahali (nyumba -> nyumbani) na kulazimisha upatanisho wa PA, KU, au MU badala ya ngeli ya asili.",
            "Kiambishi «-ni» kinatumika tu kuonyesha wingi wa vitenzi.",
            "Majina yote ya nchi lazima yaongezwe «-ni» mwishoni.",
            "Kiambishi «-ni» hakibadilishi upatanisho wa kisarufi wa nomino."
          ],
          "answerIndex": 0,
          "explanation": "«-ni» hubadilisha nomino kuwa ya mahali na kulazimisha upatanisho wa PA, KU, au MU."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u15-l3": {
    "id": "sw-u15-l3",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 3,
    "title": "Upatanisho wa Vitenzi, Viashiria, na Vivumishi katika PA-KU-MU (Concord in Locative Classes)",
    "level": "B1",
    "objective": "Kutambua na kutumia upatanisho kamili wa vitenzi, viashiria (hapa/huku/humu, nk.), na vivumishi vya sifa katika Ngeli za PA, KU, na MU.",
    "presentation": {
      "explanation": "Upatanisho wa Kisarufi katika PA, KU, na MU (Locative Concord System):\n\n1. **Upatanisho wa Ngeli ya 16 (PA - Mahali Mahususi)**:\n   - Kitenzi: **pa-** (*panapendeza, palikuwa, panastawi*)\n   - Viashiria: **hapa** (here), **hapo** (there near), **pale** (yonder)\n   - Vivumishi vya sifa: **pa-** (*mahali pazuri, pafupi, pakubwa*)\n   - Vimilikishi: **pangu, pako, pake, petu, penu, pao** (*mahali petu*)\n   - Kitenzi 'Kuwa na': **pana** (there is) / **hapana** (there is not)\n\n2. **Upatanisho wa Ngeli ya 17 (KU - Eneo Pana / Mwelekeo)**:\n   - Kitenzi: **ku-** (*kunanyesha, kulikuwa, kunatulia*)\n   - Viashiria: **huku** (around here), **huko** (around there), **kule** (over there)\n   - Vivumishi vya sifa: **ku-** (*mahali kuzuri, kukubwa*)\n   - Vimilikishi: **kwangu, kwako, kwake, kwetu, kwenu, kwao** (*kwetu*)\n   - Kitenzi 'Kuwa na': **kuna** (there is generally) / **hakuna** (there is not / no problem)\n\n3. **Upatanisho wa Ngeli ya 18 (MU - Mahali Ndani)**:\n   - Kitenzi: **mu- / m-** (*mnang'aa, mlikuwa, mnatulia*)\n   - Viashiria: **humu** (in here), **humo** (in there), **mle** (in yonder)\n   - Vivumishi vya sifa: **m- / mu-** (*chumbani mzuri*)\n   - Vimilikishi: **mwangu, mwako, mwake, mwetu, mwenu, mwao** (*nyumbani mwetu*)\n   - Kitenzi 'Kuwa na': **mna** (there is inside) / **hamna** (there is not inside).",
      "examples": [
        {
          "target": "Hapa petu pana amani na bustani nzuri ya maua inastawi vizuri.",
          "reading": "Ha-pa pe-tu pa-na a-ma-ni na bu-sta-ni nzu-ri ya ma-u-a i-na-sta-wi vi-zu-ri. [ˈhɑpɑ ˈpɛtu ˈpɑnɑ ɑˈmɑni nɑ busˈtɑni ˈnzuri jɑ mɑˈuɑ inɑstɑˈwi viˈzuri] (HAH-pah PAY-too PAH-nah ah-MAH-nee nah boo-STAH-nee N-ZOO-ree yah mah-OO-ah ee-nah-stah-WEE vee-ZOO-ree)",
          "translation": "Here at our specific spot [class 16: hapa petu] there is peace [pana] and a fine flower garden flourishes."
        },
        {
          "target": "Huko mjini kuna magari mengi na maduka yote yamefunguliwa.",
          "reading": "Hu-ko mji-ni ku-na ma-ga-ri me-ngi na ma-du-ka yo-te ya-me-fu-ngu-li-wa. [ˈhukɔ mʤiˈni ˈkunɑ mɑˈɡɑri ˈmɛŋɡi nɑ mɑˈdukɑ ˈjɔtɛ jɑmɛfuŋɡuˈliwɑ] (HOO-koh m-jee-NEE KOO-nah mah-GAH-ree MAYN-gee nah mah-DOO-kah YOH-tay yah-may-foon-goo-LEE-wah)",
          "translation": "Over there in town [class 17: huko mjini] there are many cars [kuna] and all shops are open."
        },
        {
          "target": "Humu nyumbani mwetu mna furaha tele na wageni wote wanakaribishwa.",
          "reading": "Hu-mu nyu-mba-ni mwe-tu mna fu-ra-ha te-le na wa-ge-ni wo-te wa-na-ka-ri-bi-shwa. [ˈhumu ɲumbɑˈni ˈmwɛtu ˈmnɑ fuˈrɑhɑ ˈtɛlɛ nɑ wɑˈɡɛni ˈwɔtɛ wɑnɑkɑriˈbiʃwɑ] (HOO-moo nyoom-bah-NEE MWAY-too M-NAH foo-RAH-hah TAY-lay nah wah-GAY-nee WOH-tay wah-nah-kah-ree-BEE-shwah)",
          "translation": "In here inside our home [class 18: humu nyumbani mwetu] there is abundant joy [mna] and all guests are welcomed."
        }
      ],
      "mnemonics": [
        "Viashiria na Vimilikishi vya Mahali: PA = hapa/hapo/pale/petu; KU = huku/huko/kule/kwetu; MU = humu/humo/mle/mwetu!"
      ],
      "culturalNotes": [
        "Jibu maarufu la Kiswahili 'Hakuna matata' (No worries/troubles) linatumia kitenzi cha kukanusha cha Ngeli ya 17 KU- ('Ha-ku-na')."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inaonyesha upatanisho sahihi wa kiashiria na kitenzi cha 'kuwa na' kwa mahali ndani (Ngeli ya 18 MU-)?",
          "options": [
            "Humu sandukuni mna nguo safi za watoto. (Inside this box there are clean clothes for children - Correct Class 18 locative demonstrative 'humu' and verb 'mna')",
            "Humu sandukuni pana nguo safi (Kosa la kutumia upatanisho wa PA-)",
            "Humu sandukuni kuna nguo safi (Kosa la kutumia upatanisho wa KU-)",
            "Huku sandukuni mna nguo safi (Mchanganyiko usio sahihi wa KU na MU)"
          ],
          "answerIndex": 0,
          "explanation": "Kwa mahali ndani (Ngeli ya 18), kiashiria ni «humu» na kitenzi cha uwepo ni «mna»: «Humu sandukuni mna nguo»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia kijiji chenu kwa mtazamo wa eneo la asili (our homeland / place), kirai sahihi cha kimilikishi ni kipi?",
          "options": [
            "kwetu (Our place/homeland - Correct Class 17 locative possessive)",
            "petu (Mahali petu mahususi)",
            "mwetu (Ndani ya nyumba yetu)",
            "yetu (Ngeli ya N-N)"
          ],
          "answerIndex": 0,
          "explanation": "«Kwetu» (kutoka Ngeli ya 17 KU-) hutumika kwa asili ya kijiji, nchi, au eneo la nyumbani kwa jumla."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha upatanisho sahihi wa viashiria na vitenzi katika ngeli zote tatu za mahali (PA, KU, MU):",
          "options": [
            "Hapa pana amani, huku kuna mashamba mazuri, na humu chumbani mna utulivu mkubwa. (Specific [hapa pana], General [huku kuna], Inside [humu mna].)",
            "Hapa kuna amani, huku mna mashamba mazuri, na humu pana utulivu mkubwa.",
            "Hapa lina amani, huku zina mashamba mazuri, na humu kina utulivu.",
            "Ngeli za mahali hazitumii viashiria vya karibu."
          ],
          "answerIndex": 0,
          "explanation": "«Hapa pana amani, huku kuna mashamba mazuri, na humu chumbani mna utulivu mkubwa.» inatekeleza upatanisho mahususi wa PA, KU, na MU kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u15-l4": {
    "id": "sw-u15-l4",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 4,
    "title": "Vihusishi vya Mahali na Miundo ya Kielezi (Prepositions of Place & Spatial Expressions)",
    "level": "B1",
    "objective": "Kutambua na kutumia vihusishi vya mahali vinavyoeleza mahusiano ya anga: juu ya, chini ya, ndani ya, nje ya, mbele ya, nyuma ya, kando ya, katikati ya, karibu na, na mbali na.",
    "presentation": {
      "explanation": "Vihusishi vya Mahali katika Kiswahili (Spatial Prepositions):\n\n1. **Muundo wa Vihusishi vya Mahali (Prepositional Phrases)**:\n   - Vihusishi vingi vya mahali huundwa kwa neno la mwelekeo likifuatiwa na kiunganishi cha **ya** (au **na**):\n     - **juu ya** (on top of / above / over) -> *juu ya meza* (on top of the table)\n     - **chini ya** (under / beneath / below) -> *chini ya mti* (under the tree)\n     - **ndani ya** (inside of / within) -> *ndani ya nyumba* (inside the house)\n     - **nje ya** (outside of) -> *nje ya darasa* (outside the classroom)\n     - **mbele ya** (in front of / ahead of) -> *mbele ya jengo* (in front of the building)\n     - **nyuma ya** (behind / at the back of) -> *nyuma ya lango* (behind the gate)\n     - **kando ya** (beside / next to / along) -> *kando ya barabara* (beside the road)\n     - **katikati ya** (in the middle of / between) -> *katikati ya jiji* (in the middle of the city)\n\n2. **Vihusishi Vinavyotumia 'na'**:\n   - **karibu na** (near / close to) -> *karibu na kituo cha basi* (near the bus stop)\n   - **mbali na** (far from) -> *mbali na kelele za mjini* (far from city noise).",
      "examples": [
        {
          "target": "Paka amelala chini ya meza wakati kitabu kikiwa juu ya kiti.",
          "reading": "Pa-ka a-me-la-la chi-ni ya me-za wa-ka-ti ki-ta-bu ki-ki-wa ju-u ya ki-ti. [ˈpɑkɑ ɑmɛˈlɑlɑ ˈtʃini jɑ ˈmɛzɑ wɑˈkɑti kiˈtɑbu kikiˈwɑ ˈʤuː jɑ ˈkiti] (PAH-kah ah-may-LAH-lah CHEE-nee yah MAY-zah wah-KAH-tee kee-TAH-boo kee-kee-WAH JOO-oo yah KEE-tee)",
          "translation": "The cat is sleeping under the table [chini ya meza] while the book is on the chair [juu ya kiti]."
        },
        {
          "target": "Gari jipya limeegeshwa mbele ya nyumba na watoto wanacheza nje ya uwanja.",
          "reading": "Ga-ri ji-pya li-me-e-ge-shwa mbe-le ya nyu-mba na wa-to-to wa-na-che-za nje ya u-wa-nja. [ˈɡɑri ˈʤipjɑ limɛɛɡɛˈʃwɑ ˈmbɛlɛ jɑ ˈɲumbɑ nɑ wɑˈtɔtɔ wɑnɑˈtʃɛzɑ ˈnʤɛ jɑ uˈwɑnʤɑ] (GAH-ree JEE-pyah lee-may-ay-gay-SHWAH m-BAY-lay yah NYOOM-bah nah wah-TOH-toh wah-nah-CHAY-zah N-JAY yah oo-WAHN-jah)",
          "translation": "The new car is parked in front of the house [mbele ya nyumba] and children are playing outside the yard [nje ya uwanja]."
        },
        {
          "target": "Kijiji chetu kiko kando ya ziwa kubwa na mbali na msongamano wa magari.",
          "reading": "Ki-ji-ji che-tu ki-ko ka-ndo ya zi-wa mku-bwa na mba-li na mso-nga-ma-no wa ma-ga-ri. [kiˈʤiʤi ˈtʃɛtu ˈkikɔ ˈkɑndɔ jɑ ˈziwɑ mˈkubwɑ nɑ ˈmbɑli nɑ msoŋɡɑˈmɑnɔ wɑ mɑˈɡɑri] (kee-JEE-jee CHAY-too KEE-koh KAHN-doh yah ZEE-wah m-KOO-bwah nah M-BAH-lee nah m-sohn-gah-MAH-noh wah mah-GAH-ree)",
          "translation": "Our village is beside the big lake [kando ya ziwa] and far from vehicle traffic [mbali na msongamano]."
        }
      ],
      "mnemonics": [
        "Vihusishi vya Mahali: juu ya (on), chini ya (under), ndani ya (inside), nje ya (outside), mbele ya (in front), nyuma ya (behind), kando ya (beside), karibu na (near), mbali na (far)!"
      ],
      "culturalNotes": [
        "Katika miji ya kale ya Waswahili, nyumba zilijengwa 'karibu na' misikiti na masoko, lakini 'kando ya' fukwe za bahari kwa ajili ya upepo mwanana."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kihusishi kipi kinamaanisha \"under / beneath\" katika Kiswahili?",
          "options": [
            "chini ya (Under / beneath - Correct preposition of place)",
            "juu ya (On top of / above)",
            "mbele ya (In front of)",
            "kando ya (Beside / next to)"
          ],
          "answerIndex": 0,
          "explanation": "«Chini ya» linamaanisha chini ya kitu au chini ya kivuli."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kihusishi sahihi cha \"karibu na\" (near / close to)?",
          "options": [
            "Hoteli yetu iko karibu na ufukwe wa bahari. (Our hotel is located near the sea beach - Correct preposition 'karibu na')",
            "Hoteli yetu iko karibu ya ufukwe (Kosa la kutumia 'ya' badala ya 'na')",
            "Hoteli yetu iko mbali ya ufukwe (Kosa la kutumia 'ya')",
            "Hoteli yetu iko ndani na ufukwe (Mchanganyiko usio sahihi)"
          ],
          "answerIndex": 0,
          "explanation": "Kihusishi «karibu» kila mara huunganishwa na «na»: «karibu na kituo / ufukwe»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya vihusishi vya mahali vya anga kwa usahihi kamili:",
          "options": [
            "Gari liliegeshwa mbele ya nyumba, watoto walikaa chini ya mti, na duka liko karibu na soko kuu. (In front of the house [mbele ya], under the tree [chini ya], and near the main market [karibu na].)",
            "Gari liliegeshwa mbele na nyumba na watoto walikaa chini za mti.",
            "Gari liliegeshwa juu kwa nyumba na duka liko karibu ya soko.",
            "Vihusishi vya mahali havihitaji maneno ya kuunganisha katika Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "«Gari liliegeshwa mbele ya nyumba, watoto walikaa chini ya mti, na duka liko karibu na soko kuu.» inatekeleza miundo sahihi ya vihusishi vyote."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u15-l5": {
    "id": "sw-u15-l5",
    "subject": "swahili",
    "unit": 15,
    "lessonNumber": 5,
    "title": "Muhtasari wa Ngeli za Mahali (PA-KU-MU) na Vihusishi (Grand Synthesis of Locatives)",
    "level": "B1",
    "objective": "Kuunganisha mada zote za Unit 15: ngeli tatu za mahali (16 PA, 17 KU, 18 MU), matumizi ya kiambishi -ni cha mahali, upatanisho wa vitenzi na viashiria vya mahali, na vihusishi vyote vya anga.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Ngeli za Mahali (Grand Synthesis of Locative System):\n\n1. **Muundo Kamili wa Ngeli za Mahali (Master Locative Matrix)**:\n   - **Ngeli ya 16 (PA - Mahali Mahususi)**: *hapa / hapo / pale*, *pangu / petu*, *panapendeza*, *pana / hapana*.\n   - **Ngeli ya 17 (KU - Eneo Pana / Mwelekeo)**: *huku / huko / kule*, *kwangu / kwetu*, *kunanyesha*, *kuna / hakuna*.\n   - **Ngeli ya 18 (MU - Mahali Ndani)**: *humu / humo / mle*, *mwangu / mwetu*, *mnang'aa*, *mna / hamna*.\n   - **Kiambishi cha Mahali (-ni)**: *shule -> shuleni, nyumba -> nyumbani, chumba -> chumbani, meza -> mezani* (inabadilisha upatanisho kuwa PA, KU, au MU).\n   - **Vihusishi vya Mahali**: *juu ya, chini ya, ndani ya, nje ya, mbele ya, nyuma ya, kando ya, katikati ya, karibu na, mbali na*.",
      "examples": [
        {
          "target": "Hapa petu pazuri pana utulivu mkubwa, huko mjini kuna biashara nyingi, na humu chumbani mna hewa safi.",
          "reading": "Ha-pa pe-tu pa-zu-ri pa-na u-tu-li-vu mku-bwa, hu-ko mji-ni ku-na bi-a-sha-ra nye-ngi, na hu-mu chu-mba-ni mna he-wa sa-fi. [ˈhɑpɑ ˈpɛtu pɑˈzuri ˈpɑnɑ utuˈlivu mˈkubwɑ ˈhukɔ mʤiˈni ˈkunɑ biɑˈʃɑrɑ ˈɲɛŋɡi nɑ ˈhumu tʃumbɑˈni ˈmnɑ ˈhɛwɑ ˈsɑfi] (HAH-pah PAY-too pah-ZOO-ree PAH-nah oo-too-LEE-voo m-KOO-bwah, HOO-koh m-jee-NEE KOO-nah bee-ah-SHAH-rah NYAYN-gee, nah HOO-moo choom-bah-NEE M-NAH HAY-wah SAH-fee)",
          "translation": "Here at our fine spot [PA-] has great calm, over there in town [KU-] has much commerce, and in here inside the room [MU-] has fresh air."
        },
        {
          "target": "Kitabu kiliwekwa juu ya meza kando ya dirisha, na nje ya nyumba watoto wanacheza.",
          "reading": "Ki-ta-bu ki-li-we-kwa ju-u ya me-za ka-ndo ya di-ri-sha, na nje ya nyu-mba wa-to-to wa-na-che-za. [kiˈtɑbu kiliˈwɛkwɑ ˈʤuː jɑ ˈmɛzɑ ˈkɑndɔ jɑ diˈriʃɑ nɑ ˈnʤɛ jɑ ˈɲumbɑ wɑˈtɔtɔ wɑnɑˈtʃɛzɑ] (kee-TAH-boo kee-lee-WAY-kwah JOO-oo yah MAY-zah KAHN-doh yah dee-REE-shah, nah N-JAY yah NYOOM-bah wah-TOH-toh wah-nah-CHAY-zah)",
          "translation": "The book was placed on the table [juu ya meza] beside the window [kando ya dirisha], and outside the house [nje ya nyumba] children are playing."
        },
        {
          "target": "Umahiri wa Ngeli za Mahali za PA-KU-MU na vihusishi vya anga unamwezesha mwanafunzi kuwasilisha maelekezo ya kijiografia na kimaeneo kwa ustadi usio na kifani.",
          "reading": "U-ma-hi-ri wa Nge-li za Ma-ha-li za PA-KU-MU na vi-hu-si-shi vya a-nga u-na-mwe-ze-sha mwa-na-fu-nzi ku-wa-si-li-sha ma-e-le-ke-zo ya ki-ji-o-gra-fia na ki-ma-e-ne-o kwa u-sta-di u-si-o na ki-fa-ni. [umɑˈhiri wɑ ˈŋɡɛli zɑ mɑˈhɑli zɑ pɑkuˈmu nɑ vihusiˈʃi vjɑ ˈɑŋɡɑ unɑmwɛˈzɛʃɑ mwɑnɑˈfunzi kuwɑsiliˈʃɑ mɑɛlɛˈkɛzɔ jɑ kiʤiɔɡrɑˈfiɑ nɑ kimɑɛnɛˈɔ kwɑ usˈtɑdi usiˈɔ nɑ kiˈfɑni] (oo-mah-HEE-ree wah N-GAY-lee zah mah-HAH-lee zah PAH-KOO-MOO nah vee-hoo-SEE-shee vyah AHN-gah oo-nah-mway-ZAY-shah mwah-nah-FOON-zee koo-wah-see-LEE-shah mah-ay-lay-KAY-zoh yah kee-jee-oh-grah-FEE-ah nah kee-mah-ay-nay-OH kwah oo-STAH-dee oo-see-OH nah kee-FAH-nee)",
          "translation": "Mastery of the PA-KU-MU locative classes [locatives grand synthesis: ngeli za mahali] and spatial prepositions equips the learner to convey geographic and positional directions with unmatched skill."
        }
      ],
      "mnemonics": [
        "Muhtasari wa Mahali: PA = mahususi (hapa pana), KU = eneo pana (huku kuna), MU = ndani (humu mna); Vihusishi: juu ya, chini ya, kando ya, karibu na!"
      ],
      "culturalNotes": [
        "Dhana ya 'Kupatana kwa mahali' inaonyesha umakini wa lugha ya Kiswahili katika kubainisha mipaka ya anga na uhusiano wa binadamu na mazingira yake."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa ngeli za mahali ikijumuisha kiashiria, nomino yenye '-ni', na kitenzi kwa eneo pana?",
          "options": [
            "Huko shambani kuna mimea mizuri inayostawi vizuri. (Over there on the farm there are fine crops flourishing - Harmonious locative KU- synthesis)",
            "Huko shambani pana mimea mizuri (Mvurugiko wa KU na PA)",
            "Huko shambani mna mimea mizuri (Mvurugiko wa KU na MU)",
            "Huko shamba lina mimea (Kosa la kutotumia kiambishi cha mahali)"
          ],
          "answerIndex": 0,
          "explanation": "«Huko shambani kuna mimea mizuri inayostawi vizuri.» inatekeleza upatanisho sahihi wa eneo pana (huko shambani kuna)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 15, ni sentensi gani inayoonyesha uhusiano sahihi wa kijiografia kwa kutumia vihusishi vya mahali?",
          "options": [
            "Shule yetu iko kando ya barabara kuu na karibu na kituo cha afya. (Our school is beside the highway and near the health center - Correct prepositional syntax)",
            "Shule yetu iko kando na barabara kuu (Kosa la kutumia 'na' kwa kando)",
            "Shule yetu iko karibu ya kituo cha afya (Kosa la kutumia 'ya' kwa karibu)",
            "Shule yetu iko ndani kwa barabara kuu (Muundo usio sahihi)"
          ],
          "answerIndex": 0,
          "explanation": "«kando ya barabara kuu» na «karibu na kituo cha afya» inafuata sheria sanifu za vihusishi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 15 ya Ngeli za Mahali (PA-KU-MU) na Vihusishi katika Kiswahili:",
          "options": [
            "Hapa petu pazuri pana amani, huko mjini kuna maduka mengi kando ya barabara, na humu chumbani mna utulivu mkubwa. (Specific [PA], General [KU], and Inside [MU] with spatial preposition [kando ya].)",
            "Hapa petu pazuri kuna amani na huko mjini mna maduka mengi.",
            "Shuleni yetu ina amani na mezani lina vitabu.",
            "Kiswahili hakitofautishi kati ya mahali ndani na mahali pa nje."
          ],
          "answerIndex": 0,
          "explanation": "«Hapa petu pazuri pana amani, huko mjini kuna maduka mengi kando ya barabara, na humu chumbani mna utulivu mkubwa.» inajumuisha nyanja zote za ngeli za mahali na vihusishi kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u16-l1": {
    "id": "sw-u16-l1",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 1,
    "title": "Dhana ya O-Rejeshi, Mzizi wa Amba-, na Ngeli ya 1/2 A-WA (-ye- / -o-)",
    "level": "B1",
    "objective": "Kutambua na kutumia dhana ya O-Rejeshi (Relative Markers - who/which/that), mzizi tegemezi wa 'Amba-' (ambaye/ambao), na uwekaji wa kirejeshi ndani ya vitenzi vyenye viambishi vya nyakati (a-na-ye-soma / wa-na-o-soma).",
    "presentation": {
      "explanation": "Dhana ya O-Rejeshi katika Kiswahili (The Swahili Relative Pronoun System):\n\nO-Rejeshi ni mfumo wa kisarufi unaorejelea nomino katika kishazi tegemezi (Relative Clause: *who, whom, which, that*). Kuna njia kuu mbili za kutumia O-Rejeshi:\n\n1. **Mzizi wa 'Amba-' (Independent Relative Root)**:\n   - Mzizi wa *amba-* hupokea kirejeshi cha ngeli mwishoni kama neno linalojitegemea:\n     - Ngeli ya 1/2 (A-WA): **ambaye** (who - umoja) / **ambao** (who - wingi)\n     - *Mwalimu **ambaye** anafundisha vizuri anapendwa na wanafunzi.*\n     - *Wageni **ambao** wamewasili wanapumzika hotelini.*\n\n2. **Kirejeshi cha Ndani ya Kitenzi (Infixed Relative Marker)**:\n   - Kirejeshi huwekwa moja kwa moja ndani ya kitenzi baada ya kiambishi cha wakati (Muundo: **SP + Kiambishi cha Wakati + Kirejeshi + Mzizi wa Kitenzi**):\n     - **Wakati Uliopo (-na-)**: *a-na-**ye**-soma* (who is reading) / *wa-na-**o**-soma* (who are reading)\n     - **Wakati Uliopita (-li-)**: *a-li-**ye**-soma* (who read) / *wa-li-**o**-soma* (who read)\n     - **Wakati Ujao (-taka- badala ya -ta-)**: *a-taka-**ye**-soma* (who will read) / *wa-taka-**o**-soma* (who will read)\n     - **Wakati Uliopo Hali Isiyo na Wakati (General Present)**: *a-som-**aye*** (he who reads) / *wa-som-**ao*** (they who read).",
      "examples": [
        {
          "target": "Mwalimu ambaye anafundisha darasani anawajali wanafunzi wote kwa upendo.",
          "reading": "Mwa-li-mu a-mba-ye a-na-fu-ndi-sha da-ra-sa-ni a-na-wa-ja-li wa-na-fu-nzi wo-te kwa u-pe-ndo. [mwɑˈlimu ɑˈmbɑjɛ ɑnɑfundiˈʃɑ dɑrɑˈsɑni ɑnɑwɑˈʤɑli wɑnɑˈfunzi ˈwɔtɛ kwɑ uˈpɛndɔ] (mwah-LEE-moo ahm-BAH-yay ah-nah-foon-DEE-shah dah-rah-SAH-nee ah-nah-wah-JAH-lee wah-nah-FOON-zee WOH-tay kwah oo-PAYN-doh)",
          "translation": "The teacher who [ambaye] teaches in class cares for all students with love."
        },
        {
          "target": "Wageni waliofika jana jioni wamefurahia mapokezi mazuri na chakula kitamu cha pwani.",
          "reading": "Wa-ge-ni wa-li-o-fi-ka ja-na ji-o-ni wa-me-fu-ra-hi-a ma-po-ke-zi ma-zu-ri na cha-ku-la ki-ta-mu cha pwa-ni. [wɑˈɡɛni wɑliɔˈfikɑ ˈʤɑnɑ ʤiˈɔni wɑmɛfurɑˈhiɑ mɑpɔˈkɛzi mɑˈzuri nɑ tʃɑˈkulɑ kiˈtɑmu tʃɑ ˈpwɑni] (wah-GAY-nee wah-lee-oh-FEE-kah JAH-nah jee-OH-nee wah-may-foo-rah-HEE-ah mah-poh-KAY-zee mah-ZOO-ree nah chah-KOO-lah kee-TAH-moo chah PWAH-nee)",
          "translation": "The guests who arrived [waliofika: wa-li-o-fika] yesterday evening enjoyed the fine reception and delicious coastal food."
        },
        {
          "target": "Mwanariadha atakayeshinda mbio ndefu atapokea zawadi ya heshima na medali ya dhahabu.",
          "reading": "Mwa-na-ri-a-dha a-ta-ka-ye-shi-nda mbi-o nde-fu a-ta-po-ke-a za-wa-di ya he-shi-ma na me-da-li ya dha-ha-bu. [mwɑnɑriˈɑðɑ ɑtɑkɑjɛˈʃindɑ ˈmbiɔ ˈndɛfu ɑtɑpɔˈkɛɑ zɑˈwɑdi jɑ hɛˈʃimɑ nɑ mɛˈdɑli jɑ ðɑˈhɑbu] (mwah-nah-ree-AH-thah ah-tah-kah-yay-SHEEN-dah M-BEE-oh N-DAY-foo ah-tah-poh-KAY-ah zah-WAH-dee yah hay-SHEE-mah nah may-DAH-lee yah thah-HAH-boo)",
          "translation": "The athlete who will win [atakayeshinda: a-taka-ye-shinda] the marathon will receive an honor award and gold medal."
        }
      ],
      "mnemonics": [
        "O-Rejeshi katika A-WA: Mtu ambaye / anaye- / aliye- / atakaye-; Watu ambao / wanao- / walio- / watakao-!"
      ],
      "culturalNotes": [
        "Methali za Kiswahili hutumia sana O-Rejeshi: 'Mpanda ngazi hushuka' au 'Asiyesikia la mkuu huvunjika guu' kutoa mawaidha ya hekima."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia O-Rejeshi sahihi ya wakati ujao kwa nomino ya umoja wa Ngeli ya 1 (A-WA)?",
          "options": [
            "Mwanafunzi atakayesoma kwa bidii atafaulu mtihani. (The student who will study hard will pass the exam - Correct future relative marker '-taka-ye-')",
            "Mwanafunzi atayesoma kwa bidii (Kosa la kutotumia shina la wakati ujao '-taka-')",
            "Mwanafunzi anayesoma kwa bidii atafaulu (Huu ni wakati uliopo badala ya ujao)",
            "Mwanafunzi aliyesoma kwa bidii atafaulu (Huu ni wakati uliopita)"
          ],
          "answerIndex": 0,
          "explanation": "Katika wakati ujao, O-Rejeshi hubadilisha kiambishi cha wakati «-ta-» kuwa «-taka-» kisha kufuatiwa na «-ye-»: «atakayesoma»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapounganisha kishazi tegemezi cha wingi (A-WA) kwa kutumia neno \"Amba-\", neno sahihi ni lipi?",
          "options": [
            "ambao (Who [plural] - Correct relative root for Class 2 WA)",
            "ambaye (Who [singular] - Class 1)",
            "ambacho (Which - Class 7 KI)",
            "ambalo (Which - Class 5 JI)"
          ],
          "answerIndex": 0,
          "explanation": "Nomino za wingi za watu (Ngeli ya 2 WA) huchukua kirejeshi «-o-» kwenye mzizi «amba-» kupata «ambao»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha matumizi sahihi ya O-Rejeshi katika nyakati tatu tofauti (uliopo, uliopita, na ujao) katika Ngeli ya A-WA:",
          "options": [
            "Mtu anayefanya kazi, watu waliofika jana, na kiongozi atakayechaguliwa kesho wote watahudhuria mkutano. (Present [-naye-], Past [-lio-], and Future [-takaye-].)",
            "Mtu aliyefanya kazi jana atayechaguliwa kesho.",
            "Watu ambao walifika jana watayechaguliwa.",
            "Kiswahili hakiruhusu kuweka O-rejeshi ndani ya vitenzi vya wakati ujao."
          ],
          "answerIndex": 0,
          "explanation": "«Mtu anayefanya kazi, watu waliofika jana, na kiongozi atakayechaguliwa kesho wote watahudhuria mkutano.» inatekeleza mifumo yote mitatu ya nyakati kwa usahihi."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u16-l2": {
    "id": "sw-u16-l2",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 2,
    "title": "O-Rejeshi katika Ngeli Zisizo na Uhai: M-MI (-o-/-yo-), JI-MA (-lo-/-yo-), na KI-VI (-cho-/-vyo-)",
    "level": "B1",
    "objective": "Kutambua na kutumia virejeshi vya O-Rejeshi katika Ngeli za vitu visivyo na uhai: Ngeli ya 3/4 M-MI (-o-/-yo-), Ngeli ya 5/6 JI-MA (-lo-/-yo-), na Ngeli ya 7/8 KI-VI (-cho-/-vyo-).",
    "presentation": {
      "explanation": "O-Rejeshi katika Ngeli za 3/4, 5/6, na 7/8 (Inanimate Relative Markers):\n\n1. **Ngeli ya 3/4 (M-MI: Virejeshi -o- / -yo-)**:\n   - Umoja: **-o-** (*ambao* / *mti u-na-**o**-kua* = the tree which is growing / *mti u-li-**o**-anguka*)\n   - Wingi: **-yo-** (*ambayo* / *miti i-na-**yo**-kua* = trees which are growing / *miti i-li-**yo**-anguka*)\n\n2. **Ngeli ya 5/6 (JI-MA: Virejeshi -lo- / -yo-)**:\n   - Umoja: **-lo-** (*ambalo* / *gari li-na-**lo**-endeshwa* = the car which is being driven / *neno li-li-**lo**-semwa*)\n   - Wingi: **-yo-** (*ambayo* / *magari ya-na-**yo**-endeshwa* = cars which are being driven / *maneno ya-li-**yo**-semwa*)\n\n3. **Ngeli ya 7/8 (KI-VI: Virejeshi -cho- / -vyo-)**:\n   - Umoja: **-cho-** (*ambacho* / *kitabu ki-na-**cho**-somwa* = the book which is being read / *chumba ki-li-**cho**-funguliwa*)\n   - Wingi: **-vyo-** (*ambavyo* / *vitabu vi-na-**vyo**-somwa* = books which are being read / *vyumba vi-li-**vyo**-funguliwa*).",
      "examples": [
        {
          "target": "Mti uliopandwa bustanini unazaa matunda mazuri, na miti iliyokauka imekatwa.",
          "reading": "Mti u-li-o-pa-ndwa bu-sta-ni-ni u-na-za-a ma-tu-nda ma-zu-ri, na mi-ti i-li-yo-ka-u-ka i-me-ka-twa. [ˈmti uliɔˈpɑndwɑ busˈtɑnini unɑˈzɑɑ mɑˈtundɑ mɑˈzuri nɑ ˈmiti ilijɔkɑˈukɑ imɛˈkɑtwɑ] (M-TEE oo-lee-oh-PAHN-dwah boo-stah-NEE-nee oo-nah-ZAH-ah mah-TOON-dah mah-ZOO-ree, nah MEE-tee ee-lee-yoh-kah-OO-kah ee-may-KAH-twah)",
          "translation": "The tree which was planted [uliopandwa: u-li-o-] in the garden bears good fruit, and the trees which withered [iliyokauka: i-li-yo-] were cut down."
        },
        {
          "target": "Gari linalotumiwa na mkurugenzi ni jipya, na magari yaliyoharibika yanatengenezwa karakana.",
          "reading": "Ga-ri li-na-lo-tu-mi-wa na mku-ru-ge-nzi ni ji-pya, na ma-ga-ri ya-li-yo-ha-ri-bi-ka ya-na-te-nge-ne-zwa ka-ra-ka-na. [ˈɡɑri linɑlɔtuˈmiwɑ nɑ mkurʊˈɡɛnzi ni ˈʤipjɑ nɑ mɑˈɡɑri jɑlijɔhɑriˈbikɑ jɑnɑtɛŋɡɛˈnɛzwɑ kɑrɑˈkɑnɑ] (GAH-ree lee-nah-loh-too-MEE-wah nah m-koo-roo-GAYN-zee nee JEE-pyah, nah mah-GAH-ree yah-lee-yoh-hah-ree-BEE-kah yah-nah-tayn-gay-NAY-zwah kah-rah-KAH-nah)",
          "translation": "The car which is used [linalotumiwa: li-na-lo-] by the director is new, and the cars which broke down [yaliyoharibika: ya-li-yo-] are being repaired at the workshop."
        },
        {
          "target": "Kitabu nilichokinunua jana kina maarifa mengi, na vitabu tulivyovisoma vilitusaidia sana.",
          "reading": "Ki-ta-bu ni-li-cho-ki-nu-nua ja-na ki-na ma-a-ri-fa me-ngi, na vi-ta-bu tu-li-vyo-vi-so-ma vi-li-tu-sa-i-dia sa-na. [kiˈtɑbu nilitʃɔkinuˈnuɑ ˈʤɑnɑ ˈkinɑ mɑɑˈrifɑ ˈmɛŋɡi nɑ viˈtɑbu tulivjɔviˈsɔmɑ vilitusɑˈidiɑ ˈsɑnɑ] (kee-TAH-boo nee-lee-choh-kee-NOO-noo-ah JAH-nah KEE-nah mah-ah-REE-fah MAYN-gee, nah vee-TAH-boo too-lee-vyoh-vee-SOH-mah vee-lee-too-sah-EE-dee-ah SAH-nah)",
          "translation": "The book which I bought [nilichokinunua: ni-li-cho-ki-] yesterday has much knowledge, and the books which we read [tulivyovisoma: tu-li-vyo-vi-] helped us greatly."
        }
      ],
      "mnemonics": [
        "O-Rejeshi ya Vitu: M-MI (-o-/-yo-); JI-MA (-lo-/-yo-); KI-VI (-cho-/-vyo-) -> kitabu nilichonunua / vitabu nilivyosoma!"
      ],
      "culturalNotes": [
        "Katika ushairi wa Kiswahili, mishororo hutumia O-Rejeshi kusuka vina na mizani: 'Kitu kilicho kitamu ndicho chenye madhara kikitumiwa vibaya.'"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia O-Rejeshi sahihi ya Ngeli ya KI-VI (7/8) kwa nomino \"Kitabu\" katika wakati uliopita?",
          "options": [
            "Kitabu kilichoandikwa na mwandishi maarufu kimeshinda tuzo. (The book which was written by a famous author won an award - Correct Class 7 relative 'ki-li-cho-')",
            "Kitabu kililoandikwa na mwandishi (Kosa la kutumia kirejeshi cha JI-MA '-lo-')",
            "Kitabu kilioandikwa na mwandishi (Kosa la kutumia kirejeshi cha M-MI '-o-')",
            "Kitabu kilizoandikwa na mwandishi (Kosa la kutumia kirejeshi cha N-N '-zo-')"
          ],
          "answerIndex": 0,
          "explanation": "Nomino ya umoja ya KI-VI «Kitabu» huchukua kirejeshi «-cho-» katika kitenzi: «kilichoandikwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapounganisha nomino ya wingi ya JI-MA \"Magari\" (cars) na kitenzi \"-safiri\" (travel) katika wakati uliopo kwa kutumia O-Rejeshi, neno sahihi huwa lipi?",
          "options": [
            "yanayosafiri (Which are traveling - Correct Class 6 MA relative 'ya-na-yo-')",
            "yanazosafiri (Kosa la kutumia kirejeshi cha N-N '-zo-')",
            "yanavosafiri (Kosa la kutumia kirejeshi cha KI-VI '-vyo-')",
            "yanalosafiri (Kosa la kutumia umoja '-lo-')"
          ],
          "answerIndex": 0,
          "explanation": "Wingi wa JI-MA «Magari» huchukua kirejeshi «-yo-» katika kitenzi cha wakati uliopo: «yanayosafiri»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha inayoonyesha virejeshi sahihi vya O-Rejeshi kwa umoja na wingi katika ngeli za M-MI, JI-MA, na KI-VI:",
          "options": [
            "M-MI (-o- / -yo-); JI-MA (-lo- / -yo-); KI-VI (-cho- / -vyo-).",
            "M-MI (-cho- / -vyo-); JI-MA (-yo- / -zo-); KI-VI (-lo- / -yo-).",
            "M-MI (-ye- / -o-); JI-MA (-cho- / -vyo-); KI-VI (-lo- / -yo-).",
            "Ngeli zote za vitu visivyo na uhai hutumia kirejeshi kimoja tu cha '-cho-'."
          ],
          "answerIndex": 0,
          "explanation": "Virejeshi vya kulinganisha ni M-MI (-o-/-yo-), JI-MA (-lo-/-yo-), na KI-VI (-cho-/-vyo-)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u16-l3": {
    "id": "sw-u16-l3",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 3,
    "title": "O-Rejeshi katika Ngeli ya 9/10 (N-N: -yo-/-zo-) na Ngeli ya 11/14 (U: -o-/-zo-)",
    "level": "B1",
    "objective": "Kutambua na kutumia virejeshi vya O-Rejeshi katika Ngeli ya 9/10 N-N (-yo-/-zo-) na Ngeli ya 11/14 U (-o-/-zo-) pamoja na kirejeshi cha watendwa na kanuni ya wanyama.",
    "presentation": {
      "explanation": "O-Rejeshi katika Ngeli za N-N na U (Classes 9/10 and 11/14 Relatives):\n\n1. **Ngeli ya 9/10 (N-N: Virejeshi -yo- / -zo-)**:\n   - Umoja: **-yo-** (*ambayo* / *nyumba i-na-**yo**-jengwa* = the house which is being built / *barua i-li-**yo**-tumwa*)\n   - Wingi: **-zo-** (*ambazo* / *nyumba zi-na-**zo**-jengwa* = the houses which are being built / *barua zi-li-**zo**-tumwa*)\n   - Pamoja na Kirejeshi Mtendwa (OP): *Barua a-li-**yo**-**i**-andika* (The letter which he wrote it) / *Barua a-li-**zo**-**zi**-andika* (The letters which he wrote them).\n\n2. **Ngeli ya 11/14 (U: Virejeshi -o- / -zo-)**:\n   - Umoja: **-o-** (*ambao* / *ukuta u-na-**o**-jengwa* = the wall which is being built / *upendo u-na-**o**-dumu* = love which endures / *ufunguo u-li-**o**-potea*)\n   - Wingi (U-ZI): **-zo-** (*ambazo* / *kuta zi-na-**zo**-jengwa* = walls which are being built / *funguo zi-li-**zo**-potea*)\n\n3. **Kanuni ya Uhai kwa Wanyama (Animate Concord)**:\n   - Nomino za wanyama hata zikiwa katika umbo la N-N au U, **huchukua O-rejeshi ya A-WA (-ye- / -o-)**:\n     - *Simba a-na-**ye**-goma* (The lion who roars - Class 1 -ye-)\n     - *Simba wa-na-**o**-goma* (The lions who roar - Class 2 -o-).",
      "examples": [
        {
          "target": "Nyumba iliyojengwa bondeni ni imara, na nyumba zilizoezekwa kwa bati zinang'aa juani.",
          "reading": "Nyu-mba i-li-yo-je-ngwa bo-nde-ni ni i-ma-ra, na nyu-mba zi-li-zo-e-ze-kwa kwa ba-ti zi-na-ng'a-a ju-a-ni. [ˈɲumbɑ ilijɔˈʤɛŋɡwɑ bɔndɛˈni ni iˈmɑrɑ nɑ ˈɲumbɑ zilizɔɛˈzɛkwɑ kwɑ ˈbɑti zinɑˈŋɑɑ ʤuˈɑni] (NYOOM-bah ee-lee-yoh-JAYN-gwah bohn-day-NEE nee ee-MAH-rah, nah NYOOM-bah zee-lee-zoh-ay-ZAY-kwah kwah BAH-tee zee-nah-NGAH-ah joo-ah-NEE)",
          "translation": "The house which was built [iliyojengwa: i-li-yo-] in the valley is strong, and the houses which were roofed [zilizoezekwa: zi-li-zo-] with iron sheets shine in the sun."
        },
        {
          "target": "Ufunguo uliopotea umepatikana, na funguo zilizotengenezwa jana ziko salama mezani.",
          "reading": "U-fu-nguo u-li-o-po-te-a u-me-pa-ti-ka-na, na fu-nguo zi-li-zo-te-nge-ne-zwa ja-na zi-ko sa-la-ma me-za-ni. [ufuˈŋɡuɔ uliɔpɔˈtɛɑ umɛpɑtiˈkɑnɑ nɑ ˈfuŋɡuɔ zilizɔtɛŋɡɛˈnɛzwɑ ˈʤɑnɑ ˈzikɔ sɑˈlɑmɑ mɛzɑˈni] (oo-foon-GOO-oh oo-lee-oh-poh-TAY-ah oo-may-pah-tee-KAH-nah, nah FOON-goo-oh zee-lee-zoh-tayn-gay-NAY-zwah JAH-nah ZEE-koh sah-LAH-mah may-zah-NEE)",
          "translation": "The key which was lost [uliopotea: u-li-o-] has been found, and the keys which were made [zilizotengenezwa: zi-li-zo-] yesterday are safe on the table."
        },
        {
          "target": "Simba anayelala chini ya kivuli anawinda swala wanaokimbia mbugani.",
          "reading": "Si-mba a-na-ye-la-la chi-ni ya ki-vu-li a-na-wi-nda swa-la wa-na-o-ki-mbi-a mbu-ga-ni. [ˈsimbɑ ɑnɑjɛˈlɑlɑ ˈtʃini jɑ kiˈvuli ɑnɑˈwindɑ ˈswɑlɑ wɑnɑɔkiˈmbiɑ mbuˈɡɑni] (SEEM-bah ah-nah-yay-LAH-lah CHEE-nee yah kee-VOO-lee ah-nah-WEEN-dah SWAH-lah wah-nah-oh-keem-BEE-ah m-boo-GAH-nee)",
          "translation": "The lion who is sleeping [anayelala: animate -ye-] under the shade hunts antelopes who are running [wanaokimbia: animate -o-] in the savanna."
        }
      ],
      "mnemonics": [
        "O-Rejeshi: N-N = -yo- (umoja) / -zo- (wingi); U = -o- (umoja) / -zo- (wingi); Wanyama = A-WA (-ye- / -o-) kila mara!"
      ],
      "culturalNotes": [
        "Hadithi za mapokeo ya Waswahili huanza na 'Hapo zamani za kale palikuwa na mnyama aliyekuwa...' zikitekeleza kanuni ya O-rejeshi ya uhai."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia O-Rejeshi sahihi ya wingi wa Ngeli ya 9/10 (N-N) kwa nomino \"Nguo\"?",
          "options": [
            "Nguo zilizotengenezwa kwa pamba safi zinapendeza. (The clothes which were made from pure cotton look appealing - Correct Class 10 relative 'zi-li-zo-')",
            "Nguo ziliyotengenezwa kwa pamba (Kosa la kutumia umoja '-yo-')",
            "Nguo vilivyotengenezwa kwa pamba (Kosa la kutumia KI-VI)",
            "Nguo yaliyotengenezwa kwa pamba (Kosa la kutumia JI-MA)"
          ],
          "answerIndex": 0,
          "explanation": "Wingi wa Ngeli ya N-N «Nguo» huchukua kirejeshi «-zo-»: «zilizotengenezwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Unapozungumzia wanyama kama \"Ndovu\" (elephants) wanaoogelea mtoni, O-Rejeshi sahihi ni ipi?",
          "options": [
            "wanaoogelea (Who are swimming - Correct animate A-WA plural relative 'wa-na-o-')",
            "zinazoogelea (Kosa la kutumia upatanisho usio na uhai kwa wanyama)",
            "yanayoogelea (Kosa la kutumia JI-MA)",
            "vinavyoogelea (Kosa la kutumia KI-VI)"
          ],
          "answerIndex": 0,
          "explanation": "Wanyama wote hufuata O-Rejeshi ya viumbe hai (Ngeli ya 1/2 A-WA): «Ndovu wanaoogelea»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya O-Rejeshi ya N-N, U, na kanuni ya uhai kwa usahihi kamili:",
          "options": [
            "Barua iliyotufikia ilieleza kuhusu ukuta uliobomoka, wakati mbwa waliopotea wamerudi nyumbani. (Letter which [iliyotufikia], wall which [uliobomoka], dogs who [waliopotea].)",
            "Barua ilizotufikia ilieleza kuhusu ukuta ulizobomoka na mbwa zilizopotea.",
            "Barua kilichotufikia kilihusu ukuta lililobomoka.",
            "Wanyama katika Kiswahili hufuata O-Rejeshi ya N-N badala ya A-WA."
          ],
          "answerIndex": 0,
          "explanation": "«Barua iliyotufikia ilieleza kuhusu ukuta uliobomoka, wakati mbwa waliopotea wamerudi nyumbani.» inatekeleza mifumo yote mitatu kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u16-l4": {
    "id": "sw-u16-l4",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 4,
    "title": "O-Rejeshi katika Ngeli za Mahali (PA: -po-, KU: -ko-, MU: -mo-) na O-Rejeshi Tamati (End-Relative)",
    "level": "B1",
    "objective": "Kutambua na kutumia O-Rejeshi katika ngeli za mahali (-po- mahali mahususi/wakati, -ko- mwelekeo, -mo- ndani) na mfumo wa O-Rejeshi Tamati (General Present Relative Suffix: asomaye / wasomao / uangukao).",
    "presentation": {
      "explanation": "O-Rejeshi ya Mahali na O-Rejeshi Tamati (Locative & End-Relatives):\n\n1. **O-Rejeshi katika Ngeli za Mahali (PA-KU-MU)**:\n   - **Ngeli ya 16 (PA: -po-)**: Mahali mahususi au Wakati (*where / when*):\n     - *Mahali a-na-**po**-kaa* (The place where he lives)\n     - *A-li-**po**-fika nyumbani* (When he arrived at home - temporal relative)\n     - *ambapo* (where / whereas)\n   - **Ngeli ya 17 (KU: -ko-)**: Eneo pana au Mwelekeo (*whither / where generally*):\n     - *Kijiji a-na-**ko**-enda* (The village where he is going)\n     - *ambako* (where / to which place)\n   - **Ngeli ya 18 (MU: -mo-)**: Ndani ya kitu (*wherein / inside where*):\n     - *Chumba a-na-**mo**-lala* (The room in which he sleeps)\n     - *Sanduku a-li-**mo**-weka fedha* (The box inside which he put money)\n     - *ambamo* (wherein / inside which)\n\n2. **O-Rejeshi Tamati (General Present End-Relative)**:\n   - Katika wakati usio na kiambishi cha wakati (General Present / Habitual Truth), kirejeshi huwekwa mwishoni kabisa mwa kitenzi (Muundo: **SP + Shina la Kitenzi + Kirejeshi**):\n     - *mtu a-som-**aye*** (a person who reads / whoever reads)\n     - *watu wa-som-**ao*** (people who read)\n     - *mti u-anguk-a-**o*** (a tree that falls)\n     - *kitu ki-fa-**cho*** (a thing that dies / anything that dies)\n     - *chumba a-lal-**amo*** (the room in which he sleeps).",
      "examples": [
        {
          "target": "Mahali anapofanyia kazi ni pazuri, na chumba anamolala kina madirisha makubwa.",
          "reading": "Ma-ha-li a-na-po-fa-nyi-a ka-zi ni pa-zu-ri, na chu-mba a-na-mo-la-la ki-na ma-di-ri-sha ma-kbu-wa. [mɑˈhɑli ɑnɑpɔfɑˈnjiɑ ˈkɑzi ni pɑˈzuri nɑ ˈtʃumbɑ ɑnɑmɔˈlɑlɑ ˈkinɑ mɑdiriˈʃɑ mɑˈkubwɑ] (mah-HAH-lee ah-nah-poh-fahn-YEE-ah KAH-zee nee pah-ZOO-ree, nah CHOO-m-bah ah-nah-moh-LAH-lah KEE-nah mah-dee-REE-shah mah-KOO-bwah)",
          "translation": "The place where he works [anapofanyia: -po-] is pleasant, and the room wherein he sleeps [anamolala: -mo-] has big windows."
        },
        {
          "target": "Alipofika mjini alitembelea kijiji anakoishi babu yake.",
          "reading": "A-li-po-fi-ka mji-ni a-li-te-mbe-le-a ki-ji-ji a-na-ko-i-shi ba-bu ya-ke. [ɑlipɔˈfikɑ mʤiˈni ɑlitɛmbɛˈlɛɑ kiˈʤiʤi ɑnɑkɔˈiʃi ˈbɑbu ˈjɑkɛ] (ah-lee-poh-FEE-kah m-jee-NEE ah-lee-tay-m-bay-LAY-ah kee-JEE-jee ah-nah-koh-EE-shee BAH-boo YAH-kay)",
          "translation": "When he arrived [alipofika: temporal -po-] in town, he visited the village where his grandfather lives [anakoishi: directional -ko-]."
        },
        {
          "target": "Mti uangukao msituni hutoa kishindo kikuu, na asomaye vitabu hupata hekima.",
          "reading": "Mti u-a-ngu-ka-o msi-tu-ni hu-to-a ki-shi-ndo ki-ku-u, na a-so-ma-ye vi-ta-bu hu-pa-ta he-ki-ma. [ˈmti uɑŋɡuˈkɑɔ msiˈtuni hutɔˈɑ kiˈʃindɔ kiˈkuː nɑ ɑsɔˈmɑjɛ viˈtɑbu hupɑˈtɑ hɛˈkimɑ] (M-TEE oo-ahn-goo-KAH-oh m-see-too-NEE hoo-TOH-ah kee-SHEEN-doh kee-KOO-oo, nah ah-soh-MAH-yay vee-TAH-boo hoo-PAH-tah hay-KEE-mah)",
          "translation": "A tree which falls [uangukao: end-relative] in the forest makes a loud noise, and he who reads [asomaye: end-relative] books gains wisdom."
        }
      ],
      "mnemonics": [
        "Mahali O-Rejeshi: -po- (mahali/wakati), -ko- (mwelekeo/popote), -mo- (ndani); O-Rejeshi Tamati: asomaye / wasomao / mti uangukao!"
      ],
      "culturalNotes": [
        "Methali 'Asiyekuwepo na lake halipo' inajumuisha O-Rejeshi ya hali (-po-) kueleza umuhimu wa uwepo wa mtu katika maamuzi ya kijamii."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia O-Rejeshi ya mahali ndani (-mo-) kwa usahihi?",
          "options": [
            "Chumba anamolala mgeni kina kitanda kizuri na hewa safi. (The room wherein the guest sleeps has a fine bed and clean air - Correct interior locative relative '-mo-')",
            "Chumba anapolala mgeni (Hii inaashiria eneo mahususi badala ya ndani)",
            "Chumba anakolala mgeni (Hii inaashiria mwelekeo)",
            "Chumba anacholala mgeni (Kosa la kutumia upatanisho wa kitu badala ya mahali)"
          ],
          "answerIndex": 0,
          "explanation": "Ndani ya chumba (Ngeli ya 18) huchukua kirejeshi cha ndani «-mo-»: «anamolala»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"asomaye\" (he who reads) ni mfano wa muundo gani wa O-Rejeshi katika Kiswahili?",
          "options": [
            "O-Rejeshi Tamati (End-Relative / General Present Relative Suffix)",
            "O-Rejeshi ya Wakati Uliopita",
            "O-Rejeshi ya Wakati Ujao",
            "Mzizi wa Amba-"
          ],
          "answerIndex": 0,
          "explanation": "«Asomaye» ni O-Rejeshi Tamati (End-Relative) ambapo kirejeshi «-ye» kimewekwa mwishoni mwa shina la kitenzi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha matumizi sahihi ya O-Rejeshi ya mahali (-po-, -ko-, -mo-) na O-Rejeshi tamati:",
          "options": [
            "Alipofika kijijini anakoishi mjomba wake, aliingia chumbani anamolala, kwani mgeni afikaye hupokelewa kwa ukarimu. (When he arrived [-po-], where he lives [-ko-], wherein he sleeps [-mo-], and guest who arrives [afikaye].)",
            "Alikofika kijijini anamolala mjomba aliingia chumbani anapofanya kazi.",
            "Alipofika anayofika kijijini anakolala.",
            "O-rejeshi ya mahali haiwezi kutumika kueleza wakati."
          ],
          "answerIndex": 0,
          "explanation": "«Alipofika kijijini anakoishi mjomba wake, aliingia chumbani anamolala, kwani mgeni afikaye hupokelewa kwa ukarimu.» inatekeleza nyanja zote za O-rejeshi ya mahali na tamati kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u16-l5": {
    "id": "sw-u16-l5",
    "subject": "swahili",
    "unit": 16,
    "lessonNumber": 5,
    "title": "Muhtasari wa Virejeshi vya O-Rejeshi na Ukanushaji kwa -si- (Grand Synthesis of Relative Markers)",
    "level": "B1",
    "objective": "Kuunganisha mada zote za Unit 16: O-Rejeshi katika ngeli zote (A-WA, M-MI, JI-MA, KI-VI, N-N, U, PA-KU-MU), mzizi wa Amba-, O-Rejeshi tamati, na ukanushaji wa vishazi tegemezi kwa kiambishi '-si-'.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa O-Rejeshi na Ukanushaji kwa -si- (Grand Synthesis of Relative System):\n\n1. **Ukanushaji wa O-Rejeshi (Negative Relatives with -si-)**:\n   - Tofauti na vitenzi vikuu vinavyotumia *si-, hu-, ha-*, **vitenzi vyenye O-rejeshi hukanushwa kwa kiambishi cha ndani cha -si-** (Muundo: **SP + -si- + Kirejeshi + Mzizi wa Kitenzi**):\n     - *a-na-ye-soma* -> *a-**si-ye**-soma* (he who does not read / who did not read / who will not read)\n     - *wa-na-o-jua* -> *wa-**si-o**-jua* (those who do not know)\n     - *ki-na-cho-faa* -> *ki-**si-cho**-faa* (that which is not useful)\n     - *zi-na-zo-onekana* -> *zi-**si-zo**-onekana* (those which are not visible)\n     - *pa-na-po-faa* -> *pa-**si-po**-faa* (where it is not appropriate / inappropriate place)\n   - Ukanushaji wa Amba-: *ambaye hasomi, ambao hawasomi, ambacho hakifai*.\n\n2. **Jedwali Kuu la O-Rejeshi katika Ngeli Zote (Master Relative Concord Matrix)**:\n   - **A-WA (1/2)**: *-ye- / -o-* (*ambaye / ambao*)\n   - **M-MI (3/4)**: *-o- / -yo-* (*ambao / ambayo*)\n   - **JI-MA (5/6)**: *-lo- / -yo-* (*ambalo / ambayo*)\n   - **KI-VI (7/8)**: *-cho- / -vyo-* (*ambacho / ambavyo*)\n   - **N-N (9/10)**: *-yo- / -zo-* (*ambayo / ambazo*)\n   - **U (11/14)**: *-o- / -zo-* (*ambao / ambazo*)\n   - **PA-KU-MU (16/17/18)**: *-po- / -ko- / -mo-* (*ambapo / ambako / ambamo*).",
      "examples": [
        {
          "target": "Wanafunzi wanaosoma kwa bidii watafaulu, lakini wasiohudhuria masomo watapata ugumu mkubwa.",
          "reading": "Wa-na-fu-nzi wa-na-o-so-ma kwa bi-di-i wa-ta-fa-u-lu, la-ki-ni wa-si-o-hu-dhu-ria ma-so-mo wa-ta-pa-ta u-gu-mu mku-bwa. [wɑnɑˈfunzi wɑnɑɔˈsɔmɑ kwɑ biˈdiː wɑtɑfɑˈulu lɑˈkini wɑsiɔhudʱuˈriɑ mɑˈsɔmɔ wɑtɑˈpɑtɑ uˈɡumu mˈkubwɑ] (wah-nah-FOON-zee wah-nah-oh-SOH-mah kwah bee-DEE-ee wah-tah-fah-OO-loo, lah-KEE-nee wah-see-oh-hoo-thoo-REE-ah mah-SOH-moh wah-tah-PAH-tah oo-GOO-moo m-KOO-bwah)",
          "translation": "Students who study [wanaosoma] hard will pass, but those who do not attend [wasiohudhuria: wa-si-o-] classes will encounter great difficulty."
        },
        {
          "target": "Kitabu nilichokinunua kinavutia sana, lakini kile kisichofaa kimerudishwa dukani leo.",
          "reading": "Ki-ta-bu ni-li-cho-ki-nu-nua ki-na-vu-tia sa-na, la-ki-ni ki-le ki-si-cho-fa-a ki-me-ru-di-shwa du-ka-ni le-o. [kiˈtɑbu nilitʃɔkinuˈnuɑ kinɑvuˈtiɑ ˈsɑnɑ lɑˈkini ˈkilɛ kisitʃɔˈfɑɑ kimɛrudiˈʃwɑ dukɑˈni ˈlɛɔ] (kee-TAH-boo nee-lee-choh-kee-NOO-noo-ah kee-nah-voo-TEE-ah SAH-nah, lah-KEE-nee KEE-lay kee-see-choh-FAH-ah kee-may-roo-DEE-shwah doo-kah-NEE LAY-oh)",
          "translation": "The book which I bought [nilichokinunua] is very interesting, but the one which is not suitable [kisichofaa: ki-si-cho-] was returned to the shop today."
        },
        {
          "target": "Umahiri wa virejeshi vya O-Rejeshi na mizizi ya Amba- ni kilele cha sintaksia changamano ya Kiswahili kinachomwezesha msemaji kuunda sentensi zilizosheheni vishazi tegemezi kwa ufasaha mkubwa.",
          "reading": "U-ma-hi-ri wa vi-re-je-shi vya O-Re-je-shi na mi-zi-zi ya A-mba- ni ki-le-le cha si-nta-ksi-a cha-nga-ma-no ya Ki-swa-hi-li ki-na-cho-mwe-ze-sha mse-ma-ji ku-u-nda se-nte-nsi zi-li-zo-she-he-ni vi-sha-zi te-ge-me-zi kwa u-fa-sa-ha mku-bwa. [umɑˈhiri wɑ virɛˈʤɛʃi vjɑ ɔrɛˈʤɛʃi nɑ miˈzizi jɑ ɑˈmbɑ ni kiˈlɛlɛ tʃɑ sintɑkˈsiɑ tʃɑŋɡɑˈmɑnɔ jɑ kiswɑˈhili kinɑtʃɔmwɛˈzɛʃɑ msɛˈmɑʤi kuˈundɑ sɛnˈtɛnsi zilizɔʃɛˈhɛni viˈʃɑzi tɛɡɛˈmɛzi kwɑ ufɑˈsɑhɑ mˈkubwɑ] (oo-mah-HEE-ree wah vee-ray-JAY-shee vyah OH-ray-JAY-shee nah mee-ZEE-zee yah ahm-BAH- nee kee-LAY-lay chah seen-tahk-SEE-ah chahn-gah-MAH-noh yah kee-swah-HEE-lee kee-nah-choh-mway-ZAY-shah m-say-MAH-jee koo-OON-dah sayn-TAYN-see zee-lee-zoh-shay-HAY-nee vee-SHAH-zee tay-gay-MAY-zee kwah oo-fah-SAH-hah m-KOO-bwah)",
          "translation": "Mastery of O-relative infixes and Amba- roots [relatives grand synthesis: virejeshi vya O-rejeshi] is the summit of complex Swahili syntax, empowering the speaker to construct sentences rich with relative clauses with supreme fluency."
        }
      ],
      "mnemonics": [
        "Ukanushaji wa O-Rejeshi: Tumia -si- (asiyefanya, wasiojua, kisichofaa, pasipofaa); Amba- hutumia ha- (ambaye hafanyi, ambacho hakifai)!"
      ],
      "culturalNotes": [
        "Fasihi simulizi ya Kiswahili inasifika kwa matumizi ya vishazi vingi vya O-rejeshi kuelezea sifa za mashujaa kama Fumo Liyongo kwa kina na mapambo ya lugha."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inakanusha kishazi cha O-Rejeshi kwa usahihi kwa kutumia kiambishi cha ndani cha \"-si-\"?",
          "options": [
            "Watu wasiojua kusoma wanapaswa kusaidiwa kwa upendo. (People who do not know how to read should be helped with love - Correct negative relative '-si-o-')",
            "Watu hawajuao kusoma wanapaswa kusaidiwa (Kosa la kutumia 'ha-' ndani ya kirejeshi)",
            "Watu wasiojua kusoma hawapaswi (Sentensi hii ina muundo mzuri lakini chaguo la kwanza ndilo lengwa)",
            "Watu wasiojua hawana vitabu (Muktadha tofauti)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi chenye O-rejeshi hukanushwa kwa «-si-»: «wasiojua» (those who do not know)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 16, kanuni ipi ya ukanushaji inatofautisha O-Rejeshi ya kitenzi kikuu na ile ya neno \"Amba-\"?",
          "options": [
            "Kitenzi cha O-Rejeshi hukanushwa kwa '-si-' (asiyesoma), lakini mzizi wa 'Amba-' hufuatiwa na kitenzi kilichokanushwa kwa kawaida (ambaye hasomi).",
            "Vyote viwili hukanushwa kwa njia moja tu bila tofauti.",
            "Mzizi wa Amba- hauwezi kukanushwa kamwe katika Kiswahili.",
            "O-rejeshi hukanushwa kwa kutumia neno 'hapana' pekee."
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi cha ndani hutumia «-si-» (asiyesoma), wakati «amba-» huchukua kitenzi cha kawaida cha kukanusha (ambaye hasomi)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 16 ya Virejeshi vya O-Rejeshi na Ukanushaji katika Kiswahili:",
          "options": [
            "Mwalimu anayefundisha vizuri anasifiwa, kitabu tulichokisoma kilikuwa na manufaa, na watu wasiofanya kazi hawapati mafanikio wanayoyatarajia. (Affirmative present relative [anayefundisha], past relative with OP [tulichokisoma], negative relative [-sio-], and relative with OP [wanayoyatarajia].)",
            "Mwalimu hawafundishi vizuri na kitabu kililosomwa hakifai.",
            "Watu hawajui kusoma na nyumba zilizobomoka ziko mbali.",
            "Kiswahili hakina mfumo wa virejeshi ndani ya vitenzi."
          ],
          "answerIndex": 0,
          "explanation": "«Mwalimu anayefundisha vizuri anasifiwa, kitabu tulichokisoma kilikuwa na manufaa, na watu wasiofanya kazi hawapati mafanikio wanayoyatarajia.» inajumuisha nyanja zote za O-rejeshi na ukanushaji wake kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u17-l1": {
    "id": "sw-u17-l1",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendwa: Mashina ya Kawaida ya Konsonanti (-wa) na Kiashiria cha Mtenda 'na'",
    "level": "B2",
    "objective": "Kuelewa dhana ya Kauli ya Kutendwa (Passive Voice) na kutunga sentensi sahihi kwa kutumia mashina ya kawaida yanayoishia na konsonanti (+wa) na kiunganishi cha mtenda 'na' (by).",
    "presentation": {
      "explanation": "Kauli ya Kutendwa katika Kiswahili (The Passive Voice - Consonant Stems):\n\nKauli ya kutendwa huonyesha kuwa kiima cha sentensi ndiye mtendwa wa kitendo (The subject receives the action instead of performing it):\n\n1. **Mashina ya Kawaida Yanayoishia na Konsonanti + a**:\n   - Kiambishi cha kutendwa ni **-w-** kinachoingizwa kabla ya irabu ya mwisho **-a** (au **-wa**):\n     - *soma* (read) -> **somwa** (be read)\n     - *andika* (write) -> **andikwa** (be written)\n     - *penda* (love) -> **pendwa** (be loved)\n     - *piga* (strike / hit) -> **pigwa** (be struck / hit)\n     - *jenga* (build) -> **jengwa** (be built)\n     - *kata* (cut) -> **katwa** (be cut)\n     - *lima* (cultivate) -> **limwa** (be cultivated)\n     - *funga* (close / lock) -> **fungwa** (be closed / locked)\n     - *pika* (cook) -> **pikwa** (be cooked)\n     - *ona* (see) -> **onwa** (be seen)\n     - *tengeneza* (make / repair) -> **tengenezwa** (be repaired / manufactured).\n\n2. **Kiashiria cha Mtenda (Agent Marker 'na')**:\n   - Mtendaji wa kitendo (Agent / Doer) katika kauli ya kutendwa huonyeshwa kwa kiunganishi **na** (*by*):\n     - *Kitabu kimesomwa **na** wanafunzi wote.* (The book was read by all students.)\n     - *Nyumba ilijengwa **na** mafundi stadi.* (The house was built by skilled masons.)",
      "examples": [
        {
          "target": "Barua hii iliandikwa na mkurugenzi na ikasomwa mbele ya mkutano wote.",
          "reading": "Ba-ru-a hi-i i-li-a-ndi-kwa na mku-ru-ge-nzi na i-ka-so-mwa mbe-le ya mku-ta-no wo-te. [bɑˈruɑ ˈhiː iliɑnˈdikwɑ nɑ mkurʊˈɡɛnzi nɑ ikɑˈsɔmwɑ ˈmbɛlɛ jɑ mkuˈtɑnɔ ˈwɔtɛ] (bah-ROO-ah HEE-ee ee-lee-ahn-DEE-kwah nah m-koo-roo-GAYN-zee nah ee-kah-SOH-mwah m-BAY-lay yah m-koo-TAH-noh WOH-tay)",
          "translation": "This letter was written [iliandikwa] by the director and was read [ikasomwa] before the whole assembly."
        },
        {
          "target": "Shamba letu lililimwa na trekta na mbegu bora zikapandwa jana asubuhi.",
          "reading": "Sha-mba le-tu li-li-li-mwa na tre-kta na mbe-gu bo-ra zik-a-pa-ndwa ja-na a-su-bu-hi. [ˈʃɑmbɑ ˈlɛtu lililiˈmwɑ nɑ ˈtrɛktɑ nɑ ˈmbɛɡu ˈbɔrɑ zikɑˈpɑndwɑ ˈʤɑnɑ ɑsuˈbuhi] (SHAHM-bah LAY-too lee-lee-LEE-mwah nah TRAYK-tah nah M-BAY-goo BOH-rah zee-kah-PAHN-dwah JAH-nah ah-soo-BOO-hee)",
          "translation": "Our farm was cultivated [lililimwa] by tractor and fine seeds were planted [zikapandwa] yesterday morning."
        },
        {
          "target": "Madirisha yote yamefungwa na milango imefungwa kwa usalama wa jengo lote.",
          "reading": "Ma-di-ri-sha yo-te ya-me-fu-ngwa na mi-la-ngo i-me-fu-ngwa kwa u-sa-la-ma wa je-ngo lo-te. [mɑdiriˈʃɑ ˈjɔtɛ jɑmɛˈfuŋɡwɑ nɑ miˈlɑŋɡɔ imɛˈfuŋɡwɑ kwɑ usɑˈlɑmɑ wɑ ˈʤɛŋɡɔ ˈlɔtɛ] (mah-dee-REE-shah YOH-tay yah-may-FOON-gwah nah mee-LAHN-goh ee-may-FOON-gwah kwah oo-sah-LAH-mah wah JAYN-goh LOH-tay)",
          "translation": "All windows have been closed [yamefungwa] and doors have been locked [imefungwa] for the security of the whole building."
        }
      ],
      "mnemonics": [
        "Kauli ya Kutendwa ya Kawaida: Mzizi + -wa (andika -> andikwa, soma -> somwa, lima -> limwa); Mtenda huletwa na 'na'!"
      ],
      "culturalNotes": [
        "Katika utamaduni wa usimulizi wa Kiswahili, kauli ya kutendwa hutumika sana kuweka msisitizo kwenye tukio au matokeo badala ya anayefanya."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendwa (Passive Voice) ya kitenzi \"pika\" (cook) ni ipi?",
          "options": [
            "pikwa (Be cooked - Correct passive formation with '-wa')",
            "pikiwa (Hii ni kauli ya kutendea)",
            "pikisha (Hii ni kauli ya kutendesha)",
            "pikana (Hii ni kauli ya kutendana)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «pika» huchukua «-wa» kupata kauli ya kutendwa «pikwa» (be cooked)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kiunganishi sahihi cha mtenda (by) katika kauli ya kutendwa?",
          "options": [
            "Chakula kilitayarishwa na mpishi hodari. (The food was prepared by a skilled cook - Correct agent marker 'na')",
            "Chakula kilitayarishwa kwa mpishi hodari (Kosa la kutumia 'kwa' badala ya 'na')",
            "Chakula kilitayarishwa ya mpishi hodari (Kosa la kutumia 'ya')",
            "Chakula kilitayarishwa katika mpishi hodari (Kosa la kutumia 'katika')"
          ],
          "answerIndex": 0,
          "explanation": "Katika Kiswahili, mtenda wa kauli ya kutendwa hutanguliwa na kiunganishi «na» (by): «kilitayarishwa na mpishi»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayoonyesha ubadilishaji sahihi wa kauli ya kutenda (Active) kuwa kauli ya kutendwa (Passive):",
          "options": [
            "Kutenda: «Mafundi wamejenga nyumba.» -> Kutendwa: «Nyumba imejengwa na mafundi.» (Correct active-to-passive transformation.)",
            "Kutenda: «Mafundi wamejenga nyumba.» -> Kutendwa: «Nyumba wameijenga mafundi.»",
            "Kutenda: «Mafundi wamejenga nyumba.» -> Kutendwa: «Mafundi wamejengwa na nyumba.»",
            "Kauli ya kutendwa haibadilishi nafasi ya nomino katika sentensi."
          ],
          "answerIndex": 0,
          "explanation": "«Nyumba imejengwa na mafundi.» inabadilisha mtendwa (nyumba) kuwa kiima na mtenda (mafundi) kufuatiwa na «na»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u17-l2": {
    "id": "sw-u17-l2",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendwa kwa Mashina ya Irabu Mbili (-liwa / -lewa: Kanuni ya Upatanisho wa Irabu)",
    "level": "B2",
    "objective": "Kutambua na kutumia kanuni ya upatanisho wa irabu (Vowel Harmony) katika kuunda kauli ya kutendwa kwa mashina yanayoishia na irabu mbili: a, i, u -> -liwa na e, o -> -lewa.",
    "presentation": {
      "explanation": "Kanuni ya Upatanisho wa Irabu katika Kauli ya Kutendwa (-liwa vs. -lewa):\n\nMashina ya vitenzi yanapoishia na irabu mbili mfululizo (Double Vowels), kauli ya kutendwa huongeza **-liwa** au **-lewa** kulingana na irabu ya shina:\n\n1. **Irabu a, i, u huchukua -liwa**:\n   - *zaa* (give birth / bear) -> **zaliwa** (be born)\n   - *kaa* (sit / live) -> **kaliwa** (be inhabited / sat on)\n   - *tia* (put in) -> **tiliwa** (be put in)\n   - *sikia* (hear) -> **sikiliwa** (be heard / attended to)\n   - *nunua* (buy) -> **nunuliwa** (be bought)\n   - *fungua* (open) -> **funguliwa** (be opened)\n   - *chagua* (choose / elect) -> **chaguliwa** (be elected / chosen)\n   - *chua* (massage) -> **chuliwa** (be massaged).\n\n2. **Irabu e, o huchukua -lewa**:\n   - *pokea* (receive) -> **pokelewa** (be received / welcomed)\n   - *ondoa* (remove) -> **ondolewa** (be removed / dismissed)\n   - *toa* (issue / give / remove) -> **tolewa** (be issued / released)\n   - *ng'oa* (uproot) -> **ng'olewa** (be uprooted)\n   - *kosea* (err / wrong) -> **koselewa** (be wronged)\n   - *chochea* (provoke) -> **chochelewa** (be incited).",
      "examples": [
        {
          "target": "Mtoto alizaliwa hospitalini na akapokelewa kwa furaha tele na familia yake yote.",
          "reading": "Mto-to a-li-za-li-wa ho-spi-ta-li-ni na a-ka-po-ke-le-wa kwa fu-ra-ha te-le na fa-mi-li-a ya-ke yo-te. [mˈtɔtɔ ɑlizɑˈliwɑ hɔspitɑˈlini nɑ ɑkɑpɔkɛˈlɛwɑ kwɑ fuˈrɑhɑ ˈtɛlɛ nɑ fɑmiˈliɑ ˈjɑkɛ ˈjɔtɛ] (m-TOH-toh ah-lee-zah-LEE-wah hoh-spee-tah-LEE-nee nah ah-kah-poh-kay-LAY-wah kwah foo-RAH-hah TAY-lay nah fah-mee-LEE-ah YAH-kay YOH-tay)",
          "translation": "The child was born [alizaliwa: zaa -> -liwa] at the hospital and received [akapokelewa: pokea -> -lewa] with great joy by his entire family."
        },
        {
          "target": "Gari jipya lilinunuliwa na mzigo mzito ukaondolewa uwanjani bila kuchelewa.",
          "reading": "Ga-ri ji-pya li-li-nu-nu-li-wa na mzi-go mzi-to u-ka-o-ndo-le-wa u-wa-nja-ni bi-la ku-che-le-wa. [ˈɡɑri ˈʤipjɑ lilinunuˈliwɑ nɑ ˈmziɡɔ ˈmzitɔ ukɑɔndɔˈlɛwɑ uwɑˈnʤɑni ˈbilɑ kutʃɛˈlɛwɑ] (GAH-ree JEE-pyah lee-lee-noo-noo-LEE-wah nah m-ZEE-goh m-ZEE-toh oo-kah-ohn-doh-LAY-wah oo-WAHN-jah-nee BEE-lah koo-chay-LAY-wah)",
          "translation": "A new car was bought [lilinunuliwa: nunua -> -liwa] and the heavy load was removed [ukaondolewa: ondoa -> -lewa] from the yard without delay."
        },
        {
          "target": "Viongozi bora walichaguliwa na wananchi na ripoti mpya ikatolewa jana asubuhi.",
          "reading": "Vi-o-ngo-zi bo-ra wa-li-cha-gu-li-wa na wa-na-nchi na ri-po-ti mpy-a i-ka-to-le-wa ja-na a-su-bu-hi. [viɔˈŋɡɔzi ˈbɔrɑ wɑlitʃɑɡuˈliwɑ nɑ wɑnɑˈntʃi nɑ riˈpɔti ˈmpjɑ ikɑtɔˈlɛwɑ ˈʤɑnɑ ɑsuˈbuhi] (vee-ohn-GOH-zee BOH-rah wah-lee-chah-goo-LEE-wah nah wah-nahn-CHEE nah ree-POH-tee M-PYAH ee-kah-toh-LAY-wah JAH-nah ah-soo-BOO-hee)",
          "translation": "Fine leaders were elected [walichaguliwa: chagua -> -liwa] by citizens and a new report was issued [ikatolewa: toa -> -lewa] yesterday morning."
        }
      ],
      "mnemonics": [
        "Vowel Harmony ya Kutendwa: a/i/u -> -liwa (zaa -> zaliwa, nunua -> nunuliwa); e/o -> -lewa (pokea -> pokelewa, toa -> tolewa)!"
      ],
      "culturalNotes": [
        "Neno 'Kuzaliwa' (kutoka shina 'zaa' -> 'zaliwa') ndio msingi wa sherehe za kila mwaka za 'Siku ya Kuzaliwa' (Birthday) kote Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendwa ya kitenzi \"chagua\" (choose / elect) inayofuata kanuni ya irabu \"u\" ni ipi?",
          "options": [
            "chaguliwa (Be chosen / elected - Correct vowel harmony with '-liwa')",
            "chagulewa (Kosa la kutumia '-lewa' badala ya '-liwa')",
            "chaguwa (Kosa la kuacha herufi 'l')",
            "chaguzwa (Hii ni kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Shina «chagua» lina irabu «u» na linaishia na irabu mbili, kwa hivyo huchukua «-liwa» kupata «chaguliwa»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"ondoa\" (remove) kinapobadilishwa kuwa kauli ya kutendwa kwa kufuata irabu \"o\", neno sahihi huwa lipi?",
          "options": [
            "ondolewa (Be removed - Correct vowel harmony with '-lewa')",
            "ondoliwa (Kosa la kutumia '-liwa' badala ya '-lewa')",
            "ondowa (Umbo lisilo sahihi)",
            "ondozwa (Kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Shina «ondoa» lina irabu «o», hivyo kulingana na sheria ya upatanisho wa irabu huchukua «-lewa» kupata «ondolewa»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zilizo sahihi za vitenzi na vinyambuliko vyao vya kutendwa kwa kanuni ya -liwa / -lewa:",
          "options": [
            "zaa -> zaliwa, nunua -> nunuliwa, fungua -> funguliwa, pokea -> pokelewa, toa -> tolewa, ondoa -> ondolewa.",
            "zaa -> zalewa, nunua -> nunulewa, fungua -> fungulewa.",
            "pokea -> pokeliwa, toa -> toliwa, ondoa -> ondoliwa.",
            "Vitenzi vyenye irabu mbili havifuati sheria yoyote ya upatanisho wa irabu."
          ],
          "answerIndex": 0,
          "explanation": "«a, i, u» huchukua «-liwa» (zaliwa, nunuliwa, funguliwa) na «e, o» huchukua «-lewa» (pokelewa, tolewa, ondolewa)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u17-l3": {
    "id": "sw-u17-l3",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendwa kwa Vitenzi vya Kigeni / Kiarabu (-iwa, -ewa, -wa: Mashina Yasiyoishia na -a)",
    "level": "B2",
    "objective": "Kutambua na kutumia kauli ya kutendwa kwa vitenzi vyenye asili ya kigeni (hasa Kiarabu) vinavyoishia na irabu -i, -u, au -e (-iwa / -ewa / -wa).",
    "presentation": {
      "explanation": "Kauli ya Kutendwa kwa Vitenzi vya Kigeni (Loanword Passive Forms):\n\nVitenzi vingi vilivyokopwa kutoka Kiarabu havimaliziki na irabu **-a**. Vitenzi hivi hufuata kanuni maalum za unyambulishaji katika kauli ya kutendwa:\n\n1. **Vitenzi Vinavyoishia na -i (Huchukua -iwa au -wa)**:\n   - *jibu* -> *jibiwa* (kutoka *jibu*)\n   - *badili* (change) -> **badiliwa** / **badilishwa** (be changed)\n   - *rudi* (punish / revise) -> **rudiwa** (be punished / revised)\n   - *fikiri* (think) -> **fikiriwa** (be considered)\n   - *kabili* (confront) -> **kabiliwa** (be faced / confronted)\n   - *kiri* (confess) -> **kiriwa** (be admitted / acknowledged)\n   - *hesabu* (count) -> **hesabiwa** (be counted).\n\n2. **Vitenzi Vinavyoishia na -u (Huchukua -iwa)**:\n   - *jibu* (answer) -> **jibiwa** (be answered)\n   - *jaribu* (test / try) -> **jaribiwa** (be tested / tried)\n   - *hukumu* (judge / sentence) -> **hukumiwa** (be judged / sentenced)\n   - *haribu* (destroy / spoil) -> **haribiwa** (be destroyed / spoiled)\n   - *laumu* (blame) -> **laumiwa** (be blamed)\n   - *heshimu* (respect) -> **heshimiwa** (be respected).\n\n3. **Vitenzi Vinavyoishia na -e (Huchukua -ewa)**:\n   - *samehe* (forgive) -> **samehewa** (be forgiven).",
      "examples": [
        {
          "target": "Maswali yote magumu yalijibiwa kwa ufasaha na mtahiniwa aliyefaulu mtihani.",
          "reading": "Ma-swa-li yo-te ma-gu-mu ya-li-ji-bi-wa kwa u-fa-sa-ha na mta-hi-ni-wa a-li-ye-fa-u-lu mti-ha-ni. [mɑswɑˈli ˈjɔtɛ mɑˈɡumu jɑliʤiˈbiwɑ kwɑ ufɑˈsɑhɑ nɑ mtɑhiˈniwɑ ɑlijɛfɑˈulu mtiˈhɑni] (mah-SWAH-lee YOH-tay mah-GOO-moo yah-lee-jee-BEE-wah kwah oo-fah-SAH-hah nah m-tah-hee-NEE-wah ah-lee-yay-fah-OO-loo m-tee-HAH-nee)",
          "translation": "All difficult questions were answered [yalijibiwa: jibu -> jibiwa] fluently by the candidate who passed the exam."
        },
        {
          "target": "Kosa lake lilisamehewa na uamuzi wa haki ukatolewa na jaji mahakamani.",
          "reading": "Ko-sa la-ke li-li-sa-me-he-wa na u-a-mu-zi wa ha-ki u-ka-to-le-wa na ja-ji ma-ha-ka-ma-ni. [ˈkɔsɑ ˈlɑkɛ lilisɑmɛˈhɛwɑ nɑ uɑˈmuzi wɑ ˈhɑki ukɑtɔˈlɛwɑ nɑ ˈʤɑʤi mɑhɑkɑˈmɑni] (KOH-sah LAH-kay lee-lee-sah-may-HAY-wah nah oo-ah-MOO-zee wah HAH-kee oo-kah-toh-LAY-wah nah JAH-jee mah-hah-kah-mah-NEE)",
          "translation": "His mistake was forgiven [lilisamehewa: samehe -> samehewa] and a fair ruling was delivered by the judge in court."
        },
        {
          "target": "Kiongozi anayeheshimiwa na wananchi alihutubia mkutano mkuu wa hadhara.",
          "reading": "Ki-o-ngo-zi a-na-ye-he-shi-mi-wa na wa-na-nchi a-li-hu-tu-bi-a mku-ta-no mku-u wa ha-dha-ra. [kiɔˈŋɡɔzi ɑnɑjɛhɛʃiˈmiwɑ nɑ wɑnɑˈntʃi ɑlihutuˈbiɑ mkuˈtɑnɔ ˈmkuː wɑ ˈhɑðɑrɑ] (kee-ohn-GOH-zee ah-nah-yay-hay-shee-MEE-wah nah wah-nahn-CHEE ah-lee-hoo-too-BEE-ah m-koo-TAH-noh m-KOO-oo wah HAH-thah-rah)",
          "translation": "The leader who is respected [anayeheshimiwa: heshimu -> heshimiwa] by citizens addressed the grand public assembly."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Kigeni: -u/-i -> -iwa (jibu -> jibiwa, heshimu -> heshimiwa, fikiri -> fikiriwa); -e -> -ewa (samehe -> samehewa)!"
      ],
      "culturalNotes": [
        "Mheshimiwa (kutoka kitenzi 'heshimu' -> 'heshimiwa') ni neno la heshima kuu linalotumika kuwaita wabunge na viongozi wa serikali katika mataifa ya Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendwa ya kitenzi cha Kiarabu \"jibu\" (answer) ni ipi?",
          "options": [
            "jibiwa (Be answered - Correct loanword passive formation with '-iwa')",
            "jibuwa (Kosa la kuacha kubadilisha irabu ya mwisho)",
            "jibwa (Umbo lililofupishwa isivyo sanifu)",
            "jibulewa (Kosa la kutumia '-lewa')"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «jibu» hubadilisha «-u» kuwa «-iwa» kupata «jibiwa» (be answered)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"samehe\" (forgive) kinapobadilishwa kuwa kauli ya kutendwa (be forgiven), neno sahihi huwa lipi?",
          "options": [
            "samehewa (Be forgiven - Correct passive suffix '-ewa' after final 'e')",
            "samehiwa (Kosa la kubadilisha 'e' kuwa 'i')",
            "samehwa (Kosa la kutoingiza irabu ya kiunganishi)",
            "samehelewa (Kosa la kuongeza silabi isiyo ya lazima)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi kinachoishia na «-e» kama «samehe» hupokea «-wa» kuwa «samehewa» (be forgiven)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha ya vitenzi vya kigeni vilivyonyambulishwa katika kauli ya kutendwa kwa usahihi:",
          "options": [
            "jibu -> jibiwa, heshimu -> heshimiwa, hukumu -> hukumiwa, jaribu -> jaribiwa, samehe -> samehewa, fikiri -> fikiriwa.",
            "jibu -> jibuwa, heshimu -> heshimuwa, hukumu -> hukumuwa.",
            "jibu -> jibwa, heshimu -> heshimwa, samehe -> samehwa.",
            "Vitenzi vilivyokopwa kutoka Kiarabu havina kauli ya kutendwa."
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi vya Kiarabu vyenye -u/-i hupokea -iwa (jibiwa, heshimiwa, hukumiwa, jaribiwa, fikiriwa) na -e hupokea -ewa (samehewa)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u17-l4": {
    "id": "sw-u17-l4",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 4,
    "title": "Kauli ya Kutendwa kwa Vitenzi vya Silabi Moja na Mashina Maalum (Monosyllabic & Irregular Passives)",
    "level": "B2",
    "objective": "Kutambua na kutumia kauli ya kutendwa kwa vitenzi vyenye silabi moja (kula -> liwa, kunywa -> nywewa, kupa -> pewa) na mashina maalum (kuua -> uawa, kuvaa -> valiwa).",
    "presentation": {
      "explanation": "Kauli ya Kutendwa kwa Vitenzi vya Silabi Moja na Miundo Maalum:\n\n1. **Vitenzi vya Silabi Moja (Monosyllabic Passives)**:\n   - Vitenzi vya silabi moja hupoteza kiambishi nafsi cha *ku-* kinapounganishwa na viambishi vya nyakati katika kauli ya kutendwa:\n     - *kula* (eat) -> **liwa** (be eaten) -> *Chakula kina**liwa*** (Food is being eaten) / *Kili**liwa*** (Was eaten)\n     - *kunywa* (drink) -> **nywewa** (be drunk) -> *Maji yana**nywewa*** (Water is being drunk) / *Yali**nywewa***\n     - *kupa* (give) -> **pewa** (be given / receive) -> *Nili**pewa** kitabu* (I was given a book) / *Ata**pewa***\n     - *kufa* (die) -> **fiwa** (be bereaved) -> *Mzee ali**fiwa** na mtoto* (The elder was bereaved of a child).\n\n2. **Mashina Maalum ya Kutendwa (Irregular Passive Stems)**:\n   - *kuua* (kill) -> **uawa** (be killed) -> *Mhalifu aliuawa* (The criminal was killed)\n   - *kuvaa* (wear) -> **valiwa** (be worn) -> *Nguo zimevaliwa* (Garments have been worn)\n   - *kujua* (know) -> **julikana** (be known) / **juliwa**\n   - *kufua* (wash clothes) -> **fuliwa** (be laundered) -> *Nguo zifuliwe*.",
      "examples": [
        {
          "target": "Chakula kitamu kinaliwa na wageni wakati juisi baridi ikinywewa kwa furaha.",
          "reading": "Cha-ku-la ki-ta-mu ki-na-li-wa na wa-ge-ni wa-ka-ti jui-si ba-ri-di i-ki-nywe-wa kwa fu-ra-ha. [tʃɑˈkulɑ kiˈtɑmu kinɑˈliwɑ nɑ wɑˈɡɛni wɑˈkɑti ˈʤuisi bɑˈridi ikiˈɲwɛwɑ kwɑ fuˈrɑhɑ] (chah-KOO-lah kee-TAH-moo kee-nah-LEE-wah nah wah-GAY-nee wah-KAH-tee JOO-ee-see bah-REE-dee ee-kee-NYWAY-wah kwah foo-RAH-hah)",
          "translation": "Delicious food is being eaten [kinaliwa: kula -> liwa] by guests while cold juice is being drunk [ikinywewa: kunywa -> nywewa] with delight."
        },
        {
          "target": "Mwanafunzi bora alipewa tuzo ya heshima na zawadi ya kompyuta mpya.",
          "reading": "Mwa-na-fu-nzi bo-ra a-li-pe-wa tu-zo ya he-shi-ma na za-wa-di ya ko-mpyu-ta mpy-a. [mwɑnɑˈfunzi ˈbɔrɑ ɑliˈpɛwɑ ˈtuzɔ jɑ hɛˈʃimɑ nɑ zɑˈwɑdi jɑ kɔmˈpjutɑ ˈmpjɑ] (mwah-nah-FOON-zee BOH-rah ah-lee-PAY-wah TOO-zoh yah hay-SHEE-mah nah zah-WAH-dee yah kohm-PYOO-tah M-PYAH)",
          "translation": "The best student was given [alipewa: kupa -> pewa] an honor award and a new computer prize."
        },
        {
          "target": "Nguo zote safi ziliandaliwa na zikafuliwa asubuhi kabla ya kuvaliwa.",
          "reading": "Nguo zo-te sa-fi zi-li-a-nda-li-wa na zi-ka-fu-li-wa a-su-bu-hi ka-bla ya ku-va-li-wa. [ˈŋɡuɔ ˈzɔtɛ ˈsɑfi ziliɑndɑˈliwɑ nɑ zikɑfuˈliwɑ ɑsuˈbuhi ˈkɑblɑ jɑ kuvɑˈliwɑ] (N-GOO-oh ZOH-tay SAH-fee zee-lee-ahn-dah-LEE-wah nah zee-kah-foo-LEE-wah ah-soo-BOO-hee KAH-blah yah koo-vah-LEE-wah)",
          "translation": "All clean clothes were prepared, laundered [zikafuliwa: kufua -> fuliwa] in the morning before being worn [kuvaliwa: kuvaa -> valiwa]."
        }
      ],
      "mnemonics": [
        "Vitenzi Maalum vya Kutendwa: kula -> liwa; kunywa -> nywewa; kupa -> pewa; kuua -> uawa; kuvaa -> valiwa; kufua -> fuliwa!"
      ],
      "culturalNotes": [
        "Msemo 'Kupewa si kuomba' hutumika kusisitiza staha ya kupokea zawadi au heshima bila kudhalilika."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendwa ya kitenzi cha silabi moja \"kunywa\" (drink) ni ipi?",
          "options": [
            "nywewa (Be drunk - Correct passive form of monosyllabic 'kunywa')",
            "kunywiwa (Kosa la kubakiza 'ku-' na kutumia '-iwa')",
            "nywiwa (Kosa la kutumia '-iwa' badala ya '-ewa')",
            "kunyweshwa (Hii ni kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kunywa» huwa «nywewa» katika kauli ya kutendwa (mfano: *Maji yananywewa*)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kauli ya kutendwa ya kitenzi \"kupa\" (give) kwa usahihi?",
          "options": [
            "Mshindi alipewa kombe la dhahabu. (The winner was given a gold trophy - Correct passive 'pewa')",
            "Mshindi alipiwa kombe (Kosa la kutumia upatanisho usio sahihi)",
            "Mshindi alipawa kombe (Umbo lisilo sanifu)",
            "Mshindi alikupiwa kombe (Kosa la kubakiza 'ku-')"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kupa» huwa «pewa» katika kauli ya kutendwa: «alipewa kombe» (he was given a trophy)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zilizo sahihi za vitenzi vya silabi moja na mashina maalum katika kauli ya kutendwa:",
          "options": [
            "kula -> liwa, kunywa -> nywewa, kupa -> pewa, kufa -> fiwa, kuua -> uawa, kuvaa -> valiwa, kufua -> fuliwa.",
            "kula -> kulwa, kunywa -> kunywawa, kupa -> kupwa.",
            "kula -> lewa, kunywa -> nywiwa, kupa -> piwa.",
            "Vitenzi vya silabi moja haviwezi kubadilishwa kuwa kauli ya kutendwa."
          ],
          "answerIndex": 0,
          "explanation": "Miundo sahihi ni kula/liwa, kunywa/nywewa, kupa/pewa, kufa/fiwa, kuua/uawa, kuvaa/valiwa, na kufua/fuliwa."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u17-l5": {
    "id": "sw-u17-l5",
    "subject": "swahili",
    "unit": 17,
    "lessonNumber": 5,
    "title": "Muhtasari wa Kauli ya Kutendwa na Vinyambuliko Vyake (Grand Synthesis of Passive Voice)",
    "level": "B2",
    "objective": "Kuunganisha mada zote za Unit 17: mashina ya kawaida ya konsonanti (-wa), mashina ya irabu mbili (-liwa / -lewa), vitenzi vya kigeni (-iwa / -ewa / -wa), vitenzi vya silabi moja na mashina maalum, na matumizi ya kiunganishi cha mtenda 'na'.",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Kauli ya Kutendwa (Grand Synthesis of Passive Verb Forms):\n\n1. **Muundo Kamili wa Kauli ya Kutendwa (Master Passive Matrix)**:\n   - **Konsonanti Kawaida**: *soma -> somwa, andika -> andikwa, jenga -> jengwa, lima -> limwa, pika -> pikwa*.\n   - **Irabu Mbili (a, i, u -> -liwa)**: *zaa -> zaliwa, nunua -> nunuliwa, fungua -> funguliwa, chagua -> chaguliwa*.\n   - **Irabu Mbili (e, o -> -lewa)**: *pokea -> pokelewa, toa -> tolewa, ondoa -> ondolewa, ng'oa -> ng'olewa*.\n   - **Vitenzi vya Kigeni (-u, -i -> -iwa)**: *jibu -> jibiwa, heshimu -> heshimiwa, hukumu -> hukumiwa, jaribu -> jaribiwa, fikiri -> fikiriwa*.\n   - **Vitenzi vya Kigeni (-e -> -ewa)**: *samehe -> samehewa*.\n   - **Silabi Moja & Maalum**: *kula -> liwa, kunywa -> nywewa, kupa -> pewa, kuua -> uawa, kuvaa -> valiwa, kufua -> fuliwa*.\n   - **Kiashiria cha Mtenda**: Hutanguliwa na kiunganishi **na** (*kazi ilifanywa **na** fundi*).",
      "examples": [
        {
          "target": "Nyumba zote zilijengwa na mafundi, vitabu vikasomwa na wanafunzi, na chakula kitamu kikaliwa mezani.",
          "reading": "Nyu-mba zo-te zi-li-je-ngwa na ma-fu-ndi, vi-ta-bu vi-ka-so-mwa na wa-na-fu-nzi, na cha-ku-la ki-ta-mu ki-ka-li-wa me-za-ni. [ˈɲumbɑ ˈzɔtɛ ziliˈʤɛŋɡwɑ nɑ mɑˈfundi viˈtɑbu vikɑˈsɔmwɑ nɑ wɑnɑˈfunzi nɑ tʃɑˈkulɑ kiˈtɑmu kikɑˈliwɑ mɛzɑˈni] (NYOOM-bah ZOH-tay zee-lee-JAYN-gwah nah mah-FOON-dee, vee-TAH-boo vee-kah-SOH-mwah nah wah-nah-FOON-zee, nah chah-KOO-lah kee-TAH-moo kee-kah-LEE-wah may-zah-NEE)",
          "translation": "All houses were built [zilijengwa] by masons, books were read [vikasomwa] by students, and delicious food was eaten [kikaliwa] at the table."
        },
        {
          "target": "Zawadi zote zilizotolewa zikapewa washindi, na barua mpya zikapokelewa ofisini.",
          "reading": "Za-wa-di zo-te zi-li-zo-to-le-wa zi-ka-pe-wa wa-shi-ndi, na ba-ru-a mpy-a zi-ka-po-ke-le-wa o-fi-si-ni. [zɑˈwɑdi ˈzɔtɛ zilizɔtɔˈlɛwɑ zikɑˈpɛwɑ wɑˈʃindi nɑ bɑˈruɑ ˈmpjɑ zikɑpɔkɛˈlɛwɑ ɔfiˈsini] (zah-WAH-dee ZOH-tay zee-lee-zoh-toh-LAY-wah zee-kah-PAY-wah wah-SHEEN-dee, nah bah-ROO-ah M-PYAH zee-kah-poh-kay-LAY-wah oh-fee-see-NEE)",
          "translation": "All gifts which were issued [zilizotolewa] were given [zikapewa] to the winners, and new letters were received [zikapokelewa] at the office."
        },
        {
          "target": "Umahiri wa kauli ya kutendwa na upatanisho wa kisarufi unamwezesha msemaji kuunda sentensi zilizosawazishwa kimantiki bila kuhitaji kutaja mtendaji mara moja pale ambapo kitendo chenyewe ndicho lengo kuu.",
          "reading": "U-ma-hi-ri wa ka-u-li ya ku-te-ndwa na u-pa-ta-ni-sho wa ki-sa-ru-fi u-na-mwe-ze-sha mse-ma-ji ku-u-nda se-nte-nsi zi-li-zo-sa-wa-zi-shwa ki-ma-nti-ki bi-la ku-hi-ta-ji ku-ta-ja mte-nda-ji ma-ra mo-ja pa-le a-mba-po ki-te-ndo che-nye-we ndi-cho le-ngo ku-u. [umɑˈhiri wɑ kɑˈuli jɑ kuˈtɛndwɑ nɑ upɑtɑˈniʃɔ wɑ kisɑˈrufi unɑmwɛˈzɛʃɑ msɛˈmɑʤi kuˈundɑ sɛnˈtɛnsi zilizɔsɑwɑˈziʃwɑ kimɑnˈtiki ˈbilɑ kuhitɑˈʤi kuˈtɑʤɑ mtɛnˈdɑʤi ˈmɑrɑ ˈmɔʤɑ ˈpɑlɛ ɑˈmbɑpɔ kiˈtɛndɔ tʃɛˈɲɛwɛ ˈnditʃɔ ˈlɛŋɡɔ ˈkuː] (oo-mah-HEE-ree wah kah-OO-lee yah koo-TAYN-dwah nah oo-pah-tah-NEE-shoh wah kee-sah-ROO-fee oo-nah-mway-ZAY-shah m-say-MAH-jee koo-OON-dah sayn-TAYN-see zee-lee-zoh-sah-wah-ZEE-shwah kee-mahn-TEE-kee BEE-lah koo-hee-tah-JEE koo-TAH-jah m-tayn-DAH-jee MAH-rah MOH-jah PAH-lay ahm-BAH-poh kee-TAYN-doh chayn-YAY-way N-DEE-choh LAYN-goh KOO-oo)",
          "translation": "Mastery of the passive voice [passive grand synthesis: kauli ya kutendwa] and grammatical agreement empowers the speaker to formulate logically balanced expressions, focusing on the action itself."
        }
      ],
      "mnemonics": [
        "Muhtasari wa Kutendwa: Konsonanti = -wa (andikwa); Irabu mbili = -liwa (nunuliwa) / -lewa (tolewa); Kigeni = -iwa (jibiwa) / -ewa (samehewa); Silabi moja = liwa, nywewa, pewa!"
      ],
      "culturalNotes": [
        "Katika muktadha rasmi wa kisheria na kiserikali wa Kiswahili, maamuzi hutangazwa kwa kauli ya kutendwa: 'Imetangazwa kwamba...', 'Imeamuliwa kuwa...' kuonyesha mamlaka na uhalali."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inajumuisha muhtasari sahihi wa kauli ya kutendwa ikichanganya shina la kawaida, shina la irabu mbili, na kiashiria cha mtenda?",
          "options": [
            "Chakula kilitayarishwa na mpishi na vinywaji vikanunuliwa na mkurugenzi. (Food was prepared by the cook and drinks were bought by the director - Harmonious passive synthesis)",
            "Chakula kilitayarisha kwa mpishi na vinywaji vikanunua.",
            "Chakula kilitayarishwa ya mpishi na vinywaji vikanunuliwa kwa mkurugenzi.",
            "Kauli ya kutendwa haitumiki kwa chakula na vinywaji."
          ],
          "answerIndex": 0,
          "explanation": "«Chakula kilitayarishwa na mpishi na vinywaji vikanunuliwa na mkurugenzi.» inatekeleza mifumo yote miwili ya kutendwa na mtenda «na»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 17, kitenzi kipi kimebadilishwa kwa usahihi kutoka kauli ya kutenda kwenda kauli ya kutendwa?",
          "options": [
            "toa -> tolewa, pokea -> pokelewa, jibu -> jibiwa, kupa -> pewa. (Correct comprehensive passive conversions.)",
            "toa -> toliwa, pokea -> pokeliwa, jibu -> jibuwa.",
            "toa -> towa, pokea -> pokewa, kupa -> kupwa.",
            "Vitenzi vyote hubadilika kwa kuongeza '-wa' pekee bila sheria nyingine."
          ],
          "answerIndex": 0,
          "explanation": "«toa -> tolewa», «pokea -> pokelewa», «jibu -> jibiwa», na «kupa -> pewa» vinafuata sheria zote za unyambulishaji."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 17 ya Kauli ya Kutendwa katika Kiswahili:",
          "options": [
            "Barua iliandikwa na mkuu, maswali magumu yakajibiwa kwa hekima, na zawadi zote zikapewa washindi waliostahili. (Consonant passive [iliandikwa], loanword passive [yakajibiwa], and monosyllabic passive [zikapewa] with agent [na].)",
            "Barua iliandika na mkuu na maswali yakajibu.",
            "Barua kiliandikwa kwa mkuu na zawadi zikapewa kwa washindi.",
            "Kauli ya kutendwa haitumiki kwa wakati uliopita."
          ],
          "answerIndex": 0,
          "explanation": "«Barua iliandikwa na mkuu, maswali magumu yakajibiwa kwa hekima, na zawadi zote zikapewa washindi waliostahili.» inajumuisha nyanja zote za kauli ya kutendwa kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u18-l1": {
    "id": "sw-u18-l1",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendea: Kanuni ya Upatanisho wa Irabu kwa Mashina ya Konsonanti (-ia / -ea)",
    "level": "B2",
    "objective": "Kuelewa dhana ya Kauli ya Kutendea (Applicative / Prepositional Voice) na kutumia kanuni ya upatanisho wa irabu kwa mashina ya kawaida ya konsonanti: a, i, u -> -ia na e, o -> -ea.",
    "presentation": {
      "explanation": "Kauli ya Kutendea katika Kiswahili (The Applicative / Prepositional Extension):\n\nKauli ya kutendea huongeza maana ya kufanya tendo **kwa ajili ya mtu** (*for / on behalf of*), **kwa kutumia kifaa** (*with / by means of*), au **kuelekea mahali** (*at / towards*):\n\n1. **Kanuni ya Upatanisho wa Irabu (Vowel Harmony for Consonant Stems)**:\n   - Ikiwa irabu ya mwisho ya shina kabla ya konsonanti ni **a, i, u**, shina hupokea **-ia**:\n     - *pika* (cook) -> **pikia** (cook for / with / at)\n     - *andika* (write) -> **andikia** (write to / for)\n     - *fanya* (do / make) -> **fanyia** (do for / at)\n     - *lima* (cultivate) -> **limia** (cultivate for / with)\n     - *vunja* (break) -> **vunjia** (break for / on)\n     - *funga* (lock / tie) -> **fungia** (lock in / tie for)\n     - *linda* (protect) -> **lindia** (protect for).\n\n   - Ikiwa irabu ya mwisho ya shina ni **e, o**, shina hupokea **-ea**:\n     - *soma* (read) -> **somea** (read to / for)\n     - *tenda* (act / treat) -> **tendea** (treat / do good or bad to)\n     - *shona* (sew) -> **shonea** (sew for)\n     - *choma* (roast / burn) -> **chomea** (roast for / at)\n     - *leta* (bring) -> **letea** (bring to / for)\n     - *osha* (wash) -> **oshea** (wash for / with).",
      "examples": [
        {
          "target": "Mama anampikia mwanaye chakula kitamu jikoni kila jioni.",
          "reading": "Ma-ma a-na-mpi-ki-a mwa-na-ye cha-ku-la ki-ta-mu ji-ko-ni ki-la ji-o-ni. [ˈmɑmɑ ɑnɑmpiˈkiɑ mwɑˈnɑjɛ tʃɑˈkulɑ kiˈtɑmu ʤiˈkɔni ˈkilɑ ʤiˈɔni] (MAH-mah ah-nah-mpee-KEE-ah mwah-NAH-yay chah-KOO-lah kee-TAH-moo jee-KOH-nee KEE-lah jee-OH-nee)",
          "translation": "Mother is cooking [anampikia: pika -> pikia] delicious food for her child in the kitchen every evening."
        },
        {
          "target": "Mwalimu anawasomea wanafunzi hadithi ya kusisimua darasani.",
          "reading": "Mwa-li-mu a-na-wa-so-me-a wa-na-fu-nzi ha-di-thi ya ku-si-si-mu-a da-ra-sa-ni. [mwɑˈlimu ɑnɑwɑsɔˈmɛɑ wɑnɑˈfunzi hɑˈdiθi jɑ kusisiˈmuɑ dɑrɑˈsɑni] (mwah-LEE-moo ah-nah-wah-soh-MAY-ah wah-nah-FOON-zee hah-DEE-thee yah koo-see-see-MOO-ah dah-rah-SAH-nee)",
          "translation": "The teacher is reading [anawasomea: soma -> somea] an exciting story to the students in the classroom."
        },
        {
          "target": "Fundi stadi ananishonea shati zuri kwa kutumia cherehani yake mpya.",
          "reading": "Fu-ndi sta-di a-na-ni-sho-ne-a sha-ti zu-ri kwa ku-tu-mia che-re-ha-ni ya-ke mpy-a. [ˈfundi ˈstɑdi ɑnɑniʃɔˈnɛɑ ˈʃɑti ˈzuri kwɑ kutuˈmiɑ tʃɛrɛˈhɑni ˈjɑkɛ ˈmpjɑ] (FOON-dee STAH-dee ah-nah-nee-shoh-NAY-ah SHAH-tee ZOO-ree kwah koo-too-MEE-ah chay-ray-HAH-nee YAH-kay M-PYAH)",
          "translation": "The skilled tailor is sewing [ananishonea: shona -> shonea] a nice shirt for me using his new sewing machine."
        }
      ],
      "mnemonics": [
        "Vowel Harmony ya Kutendea: a, i, u -> -ia (pika -> pikia, lima -> limia); e, o -> -ea (soma -> somea, shona -> shonea)!"
      ],
      "culturalNotes": [
        "Kauli ya kutendea hutumika sana katika jamii za Kiswahili kuonyesha ukarimu na upendo wa kutenda mambo kwa niaba ya wengine."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendea ya kitenzi \"leta\" (bring) inayofuata kanuni ya irabu \"e\" ni ipi?",
          "options": [
            "letea (Bring to/for - Correct applicative form with '-ea')",
            "letia (Kosa la kutumia '-ia' baada ya irabu 'e')",
            "leteshwa (Hii ni kauli ya kutendesha/kutendwa)",
            "letana (Hii ni kauli ya kutendana)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «leta» kina irabu «e», hivyo huchukua «-ea» kupata «letea» (bring to/for)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kauli ya kutendea ya kitenzi \"andika\" kwa usahihi kwa ajili ya mtu?",
          "options": [
            "Ali alimwandikia rafiki yake barua ya pongezi. (Ali wrote a congratulatory letter to/for his friend - Correct applicative 'alimwandikia')",
            "Ali alimwandika rafiki yake barua (Kosa la kutotumia kauli ya kutendea)",
            "Ali alimwandekea rafiki yake barua (Kosa la upatanisho wa irabu)",
            "Ali aliandikia rafiki bila upatanisho wa mtendewa"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «andika» huwa «andikia», na kinapotumika kwa mtendewa (rafiki) huchukua kiambishi kiwakilishi cha mtendewa: «alimwandikia»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zilizo sahihi za vitenzi vya konsonanti na vinyambuliko vyao vya kutendea:",
          "options": [
            "pika -> pikia, andika -> andikia, lima -> limia, soma -> somea, shona -> shonea, leta -> letea, osha -> oshea.",
            "pika -> pikea, andika -> andikea, lima -> limea.",
            "soma -> somia, shona -> shonia, leta -> letia.",
            "Mashina ya konsonanti hayafuati upatanisho wa irabu katika kauli ya kutendea."
          ],
          "answerIndex": 0,
          "explanation": "«a, i, u» huchukua «-ia» (pikia, andikia, limia) na «e, o» huchukua «-ea» (somea, shonea, letea, oshea)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u18-l2": {
    "id": "sw-u18-l2",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendea kwa Mashina ya Irabu Mbili (-lia / -lea)",
    "level": "B2",
    "objective": "Kutambua na kutumia kauli ya kutendea kwa vitenzi vinavyoishia na irabu mbili mfululizo kwa kuongeza herufi ya kiunganishi 'l' (-lia / -lea).",
    "presentation": {
      "explanation": "Kauli ya Kutendea kwa Mashina ya Irabu Mbili (-lia vs. -lea):\n\nMashina ya vitenzi yanapoishia na irabu mbili kabla ya herufi ya mwisho **-a**, herufi **l** huingizwa kati ya irabu kuzuia mgongano wa sauti za irabu tatu (Epenthetic 'l'):\n\n1. **Irabu a, i, u huchukua -lia**:\n   - *nunua* (buy) -> **nunulia** (buy for / at)\n   - *zaa* (bear fruit / give birth) -> **zalia** (bear for / give birth at)\n   - *chagua* (choose) -> **chagulia** (choose for)\n   - *fungua* (open / unlock) -> **fungulia** (open for / unlock for)\n   - *vaa* (wear / dress) -> **valia** (dress up in / wear for)\n   - *fua* (wash clothes) -> **fulia** (wash clothes for / with)\n   - *sikia* (hear) -> **sikilia** (hear for / hold onto).\n\n2. **Irabu e, o huchukua -lea**:\n   - *pokea* (receive) -> **pokelea** (receive for / on behalf of)\n   - *toa* (issue / give / remove) -> **tolea** (give to / issue for / publish for)\n   - *ondoa* (remove) -> **ondolea** (remove for / forgive / excuse)\n   - *kosea* (err) -> **koselea** (wrong / err against)\n   - *zoea* (get used to) -> **zoelea** (get used to for / adapt to)\n   - *tembea* (walk) -> **tembelea** (visit / walk to).",
      "examples": [
        {
          "target": "Baba alimnunulia binti yake vitabu vipya vya hadithi na kamusi ya Kiswahili.",
          "reading": "Ba-ba a-li-mnu-nu-li-a bi-nti ya-ke vi-ta-bu vi-pya vya ha-di-thi na ka-mu-si ya Ki-swa-hi-li. [ˈbɑbɑ ɑlimnunuˈliɑ ˈbinti ˈjɑkɛ viˈtɑbu ˈvipjɑ vjɑ hɑˈdiθi nɑ kɑˈmusi jɑ kiswɑˈhili] (BAH-bah ah-leem-noo-noo-LEE-ah BEEN-tee YAH-kay vee-TAH-boo VEE-pyah vyah hah-DEE-thee nah kah-MOO-see yah kee-swah-HEE-lee)",
          "translation": "Father bought [alimnunulia: nunua -> nunulia] new storybooks and a Swahili dictionary for his daughter."
        },
        {
          "target": "Mlinzi alimfungulia mgeni mlango mkuu wa kuingilia kwenye jumba hilo.",
          "reading": "Mli-nzi a-li-mfu-ngu-li-a mge-ni mla-ngo mku-u wa ku-i-ngi-li-a kwe-nye ju-mba hi-lo. [ˈmlinzi ɑlimfuŋɡuˈliɑ mˈɡɛni ˈmlɑŋɡɔ ˈmkuː wɑ kuiŋɡiˈliɑ ˈkwɛɲɛ ˈʤumbɑ ˈhilɔ] (m-LEEN-zee ah-leem-foon-goo-LEE-ah m-GAY-nee m-LAHN-goh m-KOO-oo wah koo-een-gee-LEE-ah KWAY-nyay JOOM-bah HEE-loh)",
          "translation": "The guard opened [alimfungulia: fungua -> fungulia] the main entrance door for the visitor into that mansion."
        },
        {
          "target": "Mwenyeji mkarimu alituondolea wasiwasi wote na akatutolea msaada mkubwa.",
          "reading": "Mwe-nye-ji mka-ri-mu a-li-tu-o-ndo-le-a wa-si-wa-si wo-te na a-ka-tu-to-le-a msa-a-da mku-bwa. [mwɛˈɲɛʤi mkɑˈrimu ɑlituɔndɔˈlɛɑ wɑsiˈwɑsi ˈwɔtɛ nɑ ɑkɑtutɔˈlɛɑ msɑˈɑdɑ mˈkubwɑ] (mway-NYAY-jee m-kah-REE-moo ah-lee-too-ohn-doh-LAY-ah wah-see-WAH-see WOH-tay nah ah-kah-too-toh-LAY-ah m-sah-AH-dah m-KOO-bwah)",
          "translation": "The hospitable host relieved [alituondolea: ondoa -> ondolea] all our anxieties and offered [akatutolea: toa -> tolea] us great assistance."
        }
      ],
      "mnemonics": [
        "Irabu Mbili za Kutendea: a, i, u -> -lia (nunua -> nunulia, fungua -> fungulia); e, o -> -lea (toa -> tolea, ondoa -> ondolea, tembea -> tembelea)!"
      ],
      "culturalNotes": [
        "Kitenzi 'tembelea' (kutoka 'tembea' + -lea) ni kitenzi muhimu sana katika mila za Kiswahili za kudumisha ujirani mwema na udugu kwa kutembeleana."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendea ya kitenzi \"nunua\" (buy) inayotumia herufi 'l' ni ipi?",
          "options": [
            "nunulia (Buy for - Correct double vowel applicative with '-lia')",
            "nunulea (Kosa la upatanisho wa irabu ya 'u')",
            "nunua (Hili ni umbo la msingi)",
            "nunulisha (Hii ni kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «nunua» kina irabu «u», hivyo huchukua «-lia» kupata «nunulia» (buy for)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"toa\" (give / issue) kinapobadilishwa kuwa kauli ya kutendea (give to / issue for), neno sahihi huwa lipi?",
          "options": [
            "tolea (Give to / issue for - Correct applicative with '-lea' after 'o')",
            "toliwa (Hii ni kauli ya kutendwa)",
            "toea (Kosa la kuacha herufi 'l')",
            "tolesha (Kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Shina «toa» lina irabu «o», hivyo kulingana na sheria ya upatanisho wa irabu huchukua «-lea» kupata «tolea»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha iliyo sahihi kabisa ya vitenzi vyenye irabu mbili vilivyonyambulishwa katika kauli ya kutendea:",
          "options": [
            "nunua -> nunulia, fungua -> fungulia, zaa -> zalia, vaa -> valia, toa -> tolea, ondoa -> ondolewa/ondolea, tembea -> tembelea.",
            "nunua -> nunulea, fungua -> fungulea, zaa -> zalea.",
            "toa -> tolia, ondoa -> ondolia, tembea -> tembelia.",
            "Vitenzi vyenye irabu mbili havihitaji herufi 'l' katika kauli ya kutendea."
          ],
          "answerIndex": 0,
          "explanation": "Irabu a/i/u huchukua -lia (nunulia, fungulia, zalia, valia) na irabu e/o huchukua -lea (tolea, ondolea, tembelea)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u18-l3": {
    "id": "sw-u18-l3",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendea kwa Vitenzi vya Silabi Moja na Vitenzi vya Kigeni",
    "level": "B2",
    "objective": "Kutambua na kutumia kauli ya kutendea kwa vitenzi vyenye silabi moja (kula -> lia, kunywa -> nywea, kuja -> jia, kufa -> fia) na vitenzi vya kigeni vya Kiarabu (-ia / -ea).",
    "presentation": {
      "explanation": "Kauli ya Kutendea kwa Vitenzi vya Silabi Moja na Vitenzi vya Kigeni:\n\n1. **Vitenzi vya Silabi Moja (Monosyllabic Applicatives)**:\n   - Vitenzi hivi hupoteza kiambishi nafsi cha *ku-* kinapounganishwa na viambishi vya nyakati au viambishi ngeli, vikichukua *-ia* au *-ea*:\n     - *kula* (eat) -> **lia** (eat with / eat at / eat for) -> *kijiko cha ku**lia*** (spoon to eat with)\n     - *kunywa* (drink) -> **nywea** (drink from / with) -> *bilauri ya ku**nywea*** (glass to drink from)\n     - *kufa* (die) -> **fia** (die for / die at) -> *alifi**a** nchi yake* (he died for his country)\n     - *kuja* (come) -> **jia** (come to / come for) -> *alini**jia** nyumbani* (he came to me at home)\n     - *kupa* (give) -> **patia** / **pia** (provide to / give for).\n\n2. **Vitenzi vya Kigeni (Kiarabu)**:\n   - Vitenzi vinavyoishia na **-i, -u** huchukua **-ia**:\n     - *jibu* (answer) -> **jibia** (answer for / on behalf of)\n     - *rudi* (return) -> **rudia** (repeat / return to)\n     - *fikiri* (think) -> **fikiria** (think about / consider)\n     - *hesabu* (count) -> **hesabia** (count for / credit to)\n     - *shukuru* (thank) -> **shukuria** (thank for).\n   - Vitenzi vinavyoishia na **-e** huchukua **-ea**:\n     - *samehe* (forgive) -> **samehea** (forgive for / let off for).",
      "examples": [
        {
          "target": "Kijana alimjia mwalimu ili amfikirie katika maombi yake ya kujiunga na chuo.",
          "reading": "Ki-ja-na a-li-mji-a mwa-li-mu i-li a-mfi-ki-ri-e kwe-nye ma-o-mbi ya-ke ya ku-ji-u-nga na cho-o. [kiˈʤɑnɑ ɑlimˈʤiɑ mwɑˈlimu ˈili ɑmfikiriˈɛ ˈkwɛɲɛ mɑˈɔmbi ˈjɑkɛ jɑ kuʤiˈuŋɡɑ nɑ ˈtʃɔː] (kee-JAH-nah ah-leem-JEE-ah mwah-LEE-moo EE-lee ahm-fee-kee-ree-AY KWAY-nyay mah-OHM-bee YAH-kay yah koo-jee-OON-gah nah CHOH-oh)",
          "translation": "The youth came to [alimjia: kuja -> jia] the teacher so he would consider [amfikirie: fikiri -> fikiria] his application to join college."
        },
        {
          "target": "Familia ilitumia vyombo safi: vijiko vya kulia chakula na glasi za kunywea maji.",
          "reading": "Fa-mi-li-a i-li-tu-mia vyo-mbo sa-fi: vi-ji-ko vya ku-li-a cha-ku-la na gla-si za ku-nywe-a ma-ji. [fɑmiˈliɑ ilituˈmiɑ ˈvjɔmbɔ ˈsɑfi viˈʤikɔ vjɑ kuˈliɑ tʃɑˈkulɑ nɑ ˈɡlɑsi zɑ kuˈɲwɛɑ ˈmɑʤi] (fah-mee-LEE-ah ee-lee-too-MEE-ah VYOHM-boh SAH-fee: vee-JEE-koh vyah koo-LEE-ah chah-KOO-lah nah GLAH-see zah koo-NYWAY-ah MAH-jee)",
          "translation": "The family used clean utensils: spoons to eat [vya kulia: kula -> lia] food with and glasses to drink [za kunywea: kunywa -> nywea] water from."
        },
        {
          "target": "Wananchi walimrudia kiongozi wao ili awajibie maswali magumu kuhusu maendeleo.",
          "reading": "Wa-na-nchi wa-li-mru-di-a ki-o-ngo-zi wa-o i-li a-wa-ji-bi-e ma-swa-li ma-gu-mu ku-hu-su ma-e-nde-le-o. [wɑnɑˈntʃi wɑlimruˈdiɑ kiɔˈŋɡɔzi ˈwɑɔ ˈili ɑwɑʤiˈbiɛ mɑswɑˈli mɑˈɡumu kuˈhusu mɑɛndɛˈlɛɔ] (wah-nahn-CHEE wah-leem-roo-DEE-ah kee-ohn-GOH-zee WAH-oh EE-lee ah-wah-jee-bee-AY mah-SWAH-lee mah-GOO-moo koo-HOO-soo mah-ayn-day-LAY-oh)",
          "translation": "Citizens went back to [walimrudia: rudi -> rudia] their leader so he would answer [awajibie: jibu -> jibia] difficult questions on their behalf regarding development."
        }
      ],
      "mnemonics": [
        "Silabi Moja & Kigeni: kula -> lia (vya kulia); kunywa -> nywea (vya kunywea); kuja -> jia; jibu -> jibia; rudi -> rudia; samehe -> samehea!"
      ],
      "culturalNotes": [
        "Usemi 'Kufia nchi' (kutoka 'kufa' + -ia) unamaanisha uzalendo uliotukuka wa kujitolea maisha kwa ajili ya taifa na wananchi wenzako."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendea ya kitenzi cha silabi moja \"kunywa\" (drink) inayotumika kueleza kifaa (k.m. glasi ya...) ni ipi?",
          "options": [
            "nywea (Drink from/with - Correct applicative form 'glasi ya kunywea')",
            "nywia (Kosa la upatanisho wa irabu ya 'o/u')",
            "kunywewa (Hii ni kauli ya kutendwa)",
            "kunywesha (Hii ni kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kunywa» kina umbo la kutendea «nywea» (kama katika *kikombe cha kunywea chai*)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi cha Kiarabu \"jibu\" (answer) kinapobadilishwa kuwa kauli ya kutendea (answer for / on behalf of), neno sahihi huwa lipi?",
          "options": [
            "jibia (Answer for / on behalf of - Correct loanword applicative suffix '-ia')",
            "jibea (Kosa la kutumia '-ea' badala ya '-ia')",
            "jibiwa (Hii ni kauli ya kutendwa)",
            "jibulisha (Kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi vya Kiarabu vinavyoishia na -u huchukua «-ia» katika kauli ya kutendea: «jibu -> jibia»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zilizo sahihi za vitenzi vya silabi moja na vya kigeni katika kauli ya kutendea:",
          "options": [
            "kula -> lia, kunywa -> nywea, kuja -> jia, kufa -> fia, jibu -> jibia, rudi -> rudia, fikiri -> fikiria, samehe -> samehea.",
            "kula -> lea, kunywa -> nywia, kuja -> jea, kufa -> fea.",
            "jibu -> jibea, rudi -> rudea, samehe -> samehia.",
            "Vitenzi vya silabi moja haviwezi kunyambulishwa katika kauli ya kutendea."
          ],
          "answerIndex": 0,
          "explanation": "Miundo sahihi ni kula/lia, kunywa/nywea, kuja/jia, kufa/fia, jibu/jibia, rudi/rudia, na samehe/samehea."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u18-l4": {
    "id": "sw-u18-l4",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 4,
    "title": "Majukumu Mbalimbali ya Kauli ya Kutendea: Manufaa, Vifaa, Mahali, na Dhamira",
    "level": "B2",
    "objective": "Kuelewa na kutofautisha maana 4 kuu za kisintaksia za kauli ya kutendea katika Kiswahili: Mtendewa/Manufaa (Benefactive), Kifaa (Instrumental), Mahali (Locative/Directional), na Sababu/Dhamira (Motive).",
    "presentation": {
      "explanation": "Majukumu 4 ya Kisintaksia ya Kauli ya Kutendea (Functional Roles of Applicative):\n\nKauli ya kutendea hubeba maana tofauti kulingana na muundo wa sentensi:\n\n1. **Kufanyia Mtu / Manufaa (Benefactive / Malefactive)**:\n   - *Nilimwandikia kaka yangu barua.* (I wrote a letter for/to my brother.)\n   - *Alinivunjia kikombe changu.* (He broke my cup on me - malefactive).\n\n2. **Kifaa cha Kutendea (Instrumental Role)**:\n   - Hutumika kueleza kifaa au chombo kinachofanya kazi hiyo:\n     - *Kisu cha ku**katia** nyama.* (A knife for cutting meat.)\n     - *Kalamu ya ku**andikia** insha.* (A pen for writing essays.)\n     - *Sabuni ya ku**oshea** vyombo.* (Soap for washing dishes.)\n\n3. **Mahali au Mwelekeo (Locative / Directional Role)**:\n   - Hutumika kueleza mahali ambapo kitendo kinafanyika au kinaelekea:\n     - *Uwanja wa ku**chezea** mpira.* (A pitch for playing football on.)\n     - *Chumba cha ku**lalia** wageni.* (A room for guests to sleep in.)\n     - *Maji yali**angukia** sakafuni.* (Water fell onto the floor.)\n\n4. **Sababu au Dhamira (Motive / Reason Role)**:\n   - Hutumika kuuliza au kueleza sababu ya kitendo:\n     - *Unani**lilia** nini?* (What are you crying to me for? / Why are you crying?)\n     - *Alini**kasirikia** bila sababu yoyote.* (He became angry with me without any reason.)",
      "examples": [
        {
          "target": "Mwanafunzi anatumia kalamu ya wino ya kuandikia notisi za darasa kila siku.",
          "reading": "Mwa-na-fu-nzi a-na-tu-mia ka-la-mu ya wi-no ya ku-a-ndi-ki-a no-ti-si za da-ra-sa ki-la si-ku. [mwɑnɑˈfunzi ɑnɑtuˈmiɑ kɑˈlɑmu jɑ ˈwinɔ jɑ kuɑndiˈkiɑ ˈnɔtisi zɑ dɑˈrɑsɑ ˈkilɑ ˈsiku] (mwah-nah-FOON-zee ah-nah-too-MEE-ah kah-LAH-moo yah WEE-noh yah koo-ahn-dee-KEE-ah NOH-tee-see zah dah-RAH-sah KEE-lah SEE-koo)",
          "translation": "The student uses an ink pen to write [ya kuandikia: instrumental role] class notes every day."
        },
        {
          "target": "Watoto wote wanakusanyika katika uwanja mpana wa kuchezea michezo ya jioni.",
          "reading": "Wa-to-to wo-te wa-na-ku-sa-nyi-ka kwe-nye u-wa-nja mpa-na wa ku-che-ze-a mi-che-zo ya ji-o-ni. [wɑˈtɔtɔ ˈwɔtɛ wɑnɑkusɑˈɲikɑ ˈkwɛɲɛ uwɑˈnʤɑ ˈmpɑnɑ wɑ kutʃɛˈzɛɑ miˈtʃɛzɔ jɑ ʤiˈɔni] (wah-TOH-toh WOH-tay wah-nah-koo-sah-NYEE-kah KWAY-nyay oo-WAHN-jah M-PAH-nah wah koo-chay-ZAY-ah mee-CHAY-zoh yah jee-OH-nee)",
          "translation": "All children gather on the wide playground to play [wa kuchezea: locative role] evening games."
        },
        {
          "target": "Mbona unamkasirikia ndugu yako wakati alikutendea wema mwingi maishani?",
          "reading": "Mbo-na u-na-mka-si-ri-ki-a ndu-gu ya-ko wa-ka-ti a-li-ku-te-nde-a we-ma mwi-ngi ma-i-sha-ni? [ˈmbɔnɑ unɑmkɑsiriˈkiɑ ˈnduɡu ˈjɑkɔ wɑˈkɑti ɑlikutɛˈndɛɑ ˈwɛmɑ ˈmwiŋɡi mɑiˈʃɑni] (M-BOH-nah oo-nahm-kah-see-ree-KEE-ah N-DOO-goo YAH-koh wah-KAH-tee ah-lee-koo-tayn-DAY-ah WAY-mah M-WEEN-gee mah-ee-SHAH-nee)",
          "translation": "Why are you angry with [unamkasirikia: motive role] your brother when he did [alikutendea: benefactive role] you much goodness in life?"
        }
      ],
      "mnemonics": [
        "Kutendea ina maana 4: 1) Kumfanyia mtu (alimwandikia), 2) Kifaa (cha kuandikia), 3) Mahali (chumba cha kulalia), 4) Sababu (unanililia nini)!"
      ],
      "culturalNotes": [
        "Katika misemo na mashairi ya Kiswahili, kuuliza 'Wanililia nini?' au 'Wanichekea nini?' ni njia ya kishairi ya kudadisi nia na nia ya ndani ya mtu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Katika sentensi «Kisu hiki ni cha kukatia nyama», kauli ya kutendea inatekeleza jukumu gani?",
          "options": [
            "Kifaa cha kutendea kitendo (Instrumental Role - Knife for cutting meat)",
            "Kutendewa kwa mtu (Benefactive)",
            "Mahali pa kulala (Locative)",
            "Sababu ya kukasirika (Motive)"
          ],
          "answerIndex": 0,
          "explanation": "«cha kukatia nyama» inaeleza kifaa (kisu) kinachotumiwa kufanya tendo la kukata."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kauli ya kutendea kueleza mahali (Locative/Directional Role)?",
          "options": [
            "Hiki ndicho chumba chetu cha kulalia wageni. (This is our room for sleeping in for guests - Correct locative applicative)",
            "Nilimwandikia baba barua ndefu (Hii ni benefactive)",
            "Unanikazia macho kwa nini? (Hii ni motive)",
            "Kijiko cha kulia chakula kiko mezani (Hii ni instrumental)"
          ],
          "answerIndex": 0,
          "explanation": "«chumba cha kulalia» kinaonyesha mahali (chumba) ambapo tendo la kulala linafanyika."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi inayochanganya jukumu la Manufaa (Benefactive) na jukumu la Kifaa (Instrumental) kwa usahihi:",
          "options": [
            "Fundi alimshonea mteja suti nzuri kwa kutumia uzi wa kushonea nguo za harusi. (Tailor sewed for the client [alimshonea: benefactive] using thread for sewing [wa kushonea: instrumental].)",
            "Fundi alishona suti bila kutumia uzi wowote.",
            "Mteja alishonea fundi suti shambani.",
            "Kauli ya kutendea haiwezi kutumika zaidi ya mara moja katika sentensi moja."
          ],
          "answerIndex": 0,
          "explanation": "«alimshonea mteja» (manufaa kwa mteja) na «uzi wa kushonea» (kifaa cha kushona) inachanganya majukumu yote mawili kwa ufasaha."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u18-l5": {
    "id": "sw-u18-l5",
    "subject": "swahili",
    "unit": 18,
    "lessonNumber": 5,
    "title": "Muhtasari wa Kauli ya Kutendea na Kauli ya Kutendewa (-ewa / -iwa)",
    "level": "B2",
    "objective": "Kuunganisha mada zote za Unit 18: upatanisho wa irabu kwa mashina ya kawaida na ya irabu mbili, vitenzi vya silabi moja na vya kigeni, na kuunda kauli mseto ya Kutendewa (Applicative Passive: -iwa / -ewa).",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Kauli ya Kutendea na Kauli ya Kutendewa (Grand Synthesis):\n\n1. **Muundo Kamili wa Kauli ya Kutendea (Applicative Master Matrix)**:\n   - **Konsonanti Kawaida**: *a, i, u -> -ia* (*pikia, andikia, limia*); *e, o -> -ea* (*somea, shonea, letea, oshea*).\n   - **Irabu Mbili**: *a, i, u -> -lia* (*nunulia, fungulia, zalia, valia*); *e, o -> -lea* (*tolea, ondolea, tembelea*).\n   - **Silabi Moja**: *kula -> lia, kunywa -> nywea, kuja -> jia, kufa -> fia*.\n   - **Kigeni**: *-u, -i -> -ia* (*jibia, rudia, fikiria*); *-e -> -ea* (*samehea*).\n\n2. **Kauli Mseto ya Kutendewa (Applicative Passive Voice: -iwa / -ewa)**:\n   - Wakati kitenzi cha kutendea kinapounganishwa na kauli ya kutendwa, kinakuwa **Kauli ya Kutendewa** (Kutendewa kitendo kwa niaba yako):\n     - *pika* -> *pikia* -> **pikiwa** (*Mtoto alipikiwa chakula.* = The child had food cooked for him.)\n     - *andika* -> *andikia* -> **andikiwa** (*Ali aliandikiwa barua.* = Ali was written a letter.)\n     - *soma* -> *somea* -> **somewa** (*Wanafunzi walisomewa taarifa.* = Students had the announcement read to them.)\n     - *leta* -> *letea* -> **letewa** (*Mgeni aliletewa zawadi.* = The guest was brought gifts.)\n     - *tengeneza* -> *tengenezea* -> **tengenezewa** (*Gari lilitengenezewa gereji.*).",
      "examples": [
        {
          "target": "Mtoto mgonjwa alipikiwa supu moto na akasomewa hadithi ya kuburudisha na mama yake.",
          "reading": "Mto-to mgo-njwa a-li-pi-ki-wa su-pu mo-to na a-ka-so-me-wa ha-di-thi ya ku-bu-ru-di-sha na ma-ma ya-ke. [mˈtɔtɔ mˈɡɔnʤwɑ ɑlipiˈkiwɑ ˈsupu ˈmɔtɔ nɑ ɑkɑsɔˈmɛwɑ hɑˈdiθi jɑ kuburuˈdiʃɑ nɑ ˈmɑmɑ ˈjɑkɛ] (m-TOH-toh m-GOHN-jwah ah-lee-pee-KEE-wah SOO-poo MOH-toh nah ah-kah-soh-MAY-wah hah-DEE-thee yah koo-boo-roo-DEE-shah nah MAH-mah YAH-kay)",
          "translation": "The sick child was cooked [alipikiwa: pika -> pikia -> pikiwa] hot soup for and had an entertaining story read to him [akasomewa: soma -> somea -> somewa] by his mother."
        },
        {
          "target": "Mzee wa kijiji aliletewa habari njema na akatengenezewa kiti chake cha kupumzikia.",
          "reading": "Mze-e wa ki-ji-ji a-li-le-te-wa ha-ba-ri nje-ma na a-ka-te-nge-ne-ze-wa ki-ti cha-ke cha ku-pu-mzi-ki-a. [mˈzɛː wɑ kiˈʤiʤi ɑlilɛˈtɛwɑ hɑˈbɑri ˈnʤɛmɑ nɑ ɑkɑtɛŋɡɛnɛˈzɛwɑ ˈkiti ˈtʃɑkɛ tʃɑ kupumziˈkiɑ] (m-ZAY-ay wah kee-JEE-jee ah-lee-lay-TAY-wah hah-BAH-ree N-JAY-mah nah ah-kah-tayn-gay-nay-ZAY-wah KEE-tee CHAH-kay chah koo-poom-zee-KEE-ah)",
          "translation": "The village elder was brought [aliletewa: leta -> letea -> letewa] good news and had his resting chair [cha kupumzikia: locative] repaired for him [akatengenezewa]."
        },
        {
          "target": "Umahiri wa kauli ya kutendea na vinyambuliko vyake vya kutendewa ni kielelezo kikuu cha unyumbufu wa kisintaksia wa lugha ya Kiswahili katika kubainisha manufaa, vifaa, mahali na dhamira ya mtenda.",
          "reading": "U-ma-hi-ri wa ka-u-li ya ku-te-nde-a na vi-nya-mbu-li-ko vya-ke vya ku-te-nde-wa ni ki-e-le-le-zo ki-ku-u cha u-nyu-mbu-fu wa ki-si-nta-ksi-a wa lu-gha ya Ki-swa-hi-li ka-ti-ka ku-ba-i-ni-sha ma-nu-fa-a, vi-fa-a, ma-ha-li na dha-mi-ra ya mte-nda. [umɑˈhiri wɑ kɑˈuli jɑ kutɛˈndɛɑ nɑ viɲɑmbuˈlikɔ ˈvjɑkɛ vjɑ kutɛˈndɛwɑ ni kiɛlɛˈlɛzɔ kiˈkuː tʃɑ uɲumbuˈfu wɑ kisintɑkˈsiɑ wɑ ˈluɡɑ jɑ kiswɑˈhili ˈkɑtikɑ kubɑiˈniʃɑ mɑnuˈfɑɑ viˈfɑɑ mɑˈhɑli nɑ ðɑˈmirɑ jɑ ˈmtɛndɑ] (oo-mah-HEE-ree wah kah-OO-lee yah koo-tayn-DAY-ah nah vee-nyahm-boo-LEE-koh VYAH-kay vyah koo-tayn-DAY-wah nee kee-ay-lay-LAY-zoh kee-KOO-oo chah oo-nyoom-BOO-foo wah kee-seen-tahk-SEE-ah wah LOO-gah yah kee-swah-HEE-lee KAH-tee-kah koo-bah-ee-NEE-shah mah-noo-FAH-ah, vee-FAH-ah, mah-HAH-lee nah thah-MEE-rah yah m-TAYN-dah)",
          "translation": "Mastery of the applicative verb form [applicative grand synthesis: kauli ya kutendea] and its passive derivations (kutendewa) showcases the syntactic versatility of the Swahili language in specifying beneficiaries, instruments, places, and motives."
        }
      ],
      "mnemonics": [
        "Kutendea + Kutendwa = Kutendewa! pika -> pikia -> pikiwa (alipikiwa chakula); soma -> somea -> somewa (alisomewa barua); leta -> letea -> letewa (aliletewa zawadi)!"
      ],
      "culturalNotes": [
        "Katika fasihi na utamaduni wa usuluhishi, sentensi zenye kauli ya kutendewa hutumika kuweka heshima na kueleza masaibu au fadhila alizotendewa mtu bila lawama ya moja kwa moja."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendewa (Applicative Passive) ya kitenzi \"soma\" (kuwa mtu amesomewa kitu) ni ipi?",
          "options": [
            "somewa (Be read to/for - Correct applicative passive formation)",
            "somwa (Hii ni kauli ya kutendwa ya kawaida pekee)",
            "someka (Hii ni kauli ya kutendeka)",
            "somesha (Hii ni kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «soma» kinapitia hatua mbili: soma -> somea (kutendea) -> somewa (kutendewa: be read to/for)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Katika muhtasari wa Unit 18, sentensi ipi inatumia kauli mseto ya kutendewa (Applicative Passive) kwa usahihi?",
          "options": [
            "Mgonjwa aliletewa dawa na akapikiwa chakula chepesi. (The patient was brought medicine for and was cooked light food for - Correct applicative passive usage)",
            "Mgonjwa alileta dawa na akapika chakula chepesi (Hizi ni kauli za kutenda)",
            "Mgonjwa aliletwa na dawa na akapikwa chakula (Matumizi yasiyo sahihi ya kutendwa ya kawaida)",
            "Mgonjwa alilitea dawa na kupikia chakula"
          ],
          "answerIndex": 0,
          "explanation": "«aliletewa dawa» na «akapikiwa chakula» inatekeleza kauli ya kutendewa (mtu akifanyiwa kitu kwa niaba yake katika hali ya kutendwa)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 18 ya Kauli ya Kutendea na Kutendewa katika Kiswahili:",
          "options": [
            "Mwalimu aliwanunulia wanafunzi kalamu za kuandikia, akawasomea hadithi nzuri, na wao wakafurahi kutendewa wema huo wote. (Applicative benefactive [aliwanunulia], instrumental [za kuandikia], directional [akawasomea], and applicative passive [kutendewa].)",
            "Mwalimu alinunua kalamu na akasoma hadithi bila kutumia viambishi vya kutendea.",
            "Wanafunzi walimnunua mwalimu kalamu za kuandika.",
            "Kauli ya kutendea haihusiani na uundaji wa nomino au vifaa."
          ],
          "answerIndex": 0,
          "explanation": "«Mwalimu aliwanunulia wanafunzi kalamu za kuandikia, akawasomea hadithi nzuri, na wao wakafurahi kutendewa wema huo wote.» inajumuisha nyanja zote za kauli ya kutendea na kutendewa kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
"sw-u19-l1": {
    "id": "sw-u19-l1",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendesha: Kanuni ya Upatanisho wa Irabu kwa Mashina ya Kawaida (-isha / -esha)",
    "level": "B2",
    "objective": "Kuelewa dhana ya Kauli ya Kutendesha (Causative Voice) na kutumia kanuni ya upatanisho wa irabu kwa mashina ya kawaida ya konsonanti: a, i, u -> -isha na e, o -> -esha.",
    "presentation": {
      "explanation": "Kauli ya Kutendesha katika Kiswahili (The Causative Extension):\n\nKauli ya kutendesha huonyesha **kusababisha, kushawishi, au kumfanya mtu au kitu kutenda jambo fulani** (*to make, cause, or enable someone to do something*):\n\n1. **Kanuni ya Upatanisho wa Irabu (Vowel Harmony for Causative -isha vs. -esha)**:\n   - Ikiwa irabu ya shina kabla ya konsonanti ni **a, i, u**, shina hupokea **-isha**:\n     - *fika* (arrive) -> **fikisha** (deliver / make arrive / escort to)\n     - *rudi* (return) -> **rudisha** (return sth / refund / cause to go back)\n     - *simama* (stand / stop) -> **simamisha** (stop sb or sth / suspend / erect)\n     - *safisha* (clean / purify - already causative from root *safi*)\n     - *fundisha* (teach / instruct: cause to know skills)\n     - *linda* (guard) -> **lindisha** (cause to guard).\n\n   - Ikiwa irabu ya shina ni **e, o**, shina hupokea **-esha**:\n     - *soma* (read / study) -> **somesha** (educate / sponsor education / cause to read)\n     - *ona* (see) -> **onesha** / **onyesha** (show / display / point out)\n     - *kopa* (borrow money) -> **kopesha** (lend money / credit)\n     - *chelewa* (be late) -> **chelewesha** (delay / postpone)\n     - *penda* (love) -> **pendesha** / *pendeza* (make pleasing / cause to be loved)\n     - *shuka* (descend) -> **shusha** (lower / drop off).",
      "examples": [
        {
          "target": "Mwalimu anawasomesha wanafunzi kwa bidii ili wafikie viwango vya juu vya elimu.",
          "reading": "Mwa-li-mu a-na-wa-so-me-sha wa-na-fu-nzi kwa bi-di-i i-li wa-fi-ki-e vi-wa-ngo vya ju-u vya e-li-mu. [mwɑˈlimu ɑnɑwɑsɔˈmɛʃɑ wɑnɑˈfunzi kwɑ biˈdiː ˈili wɑfiˈkiɛ viˈwɑŋɡɔ vjɑ ˈʤuː vjɑ ɛˈlimu] (mwah-LEE-moo ah-nah-wah-soh-MAY-shah wah-nah-FOON-zee kwah bee-DEE-ee EE-lee wah-fee-KEE-ay vee-WAHN-goh vyah JOO-oo vyah ay-LEE-moo)",
          "translation": "The teacher is educating [anawasomesha: soma -> somesha] the students diligently so they reach high educational standards."
        },
        {
          "target": "Dereva alisimamisha basi kituo kikuu na akawashusha abiria wote salama.",
          "reading": "De-re-va a-li-si-ma-mi-sha ba-si ki-tu-o ki-ku-u na a-ka-wa-shu-sha a-bi-ri-a wo-te sa-la-ma. [dɛˈrɛvɑ ɑlisimɑˈmiʃɑ ˈbɑsi kiˈtuɔ kiˈkuː nɑ ɑkɑwɑˈʃuʃɑ ɑbiˈriɑ ˈwɔtɛ sɑˈlɑmɑ] (day-RAY-vah ah-lee-see-mah-MEE-shah BAH-see kee-TOO-oh kee-KOO-oo nah ah-kah-wah-SHOO-shah ah-bee-REE-ah WOH-tay sah-LAH-mah)",
          "translation": "The driver stopped [alisimamisha: simama -> simamisha] the bus at the main stop and dropped off [akawashusha: shuka -> shusha] all passengers safely."
        },
        {
          "target": "Mfanyabiashara anawakopesha wakulima pembejeo za kilimo kwa masharti nafuu.",
          "reading": "Mfa-nya-bi-a-sha-ra a-na-wa-ko-pe-sha wa-ku-li-ma pe-mbe-je-o za ki-li-mo kwa ma-sha-rti na-fu-u. [mfɑɲɑbiɑˈʃɑrɑ ɑnɑwɑkɔˈpɛʃɑ wɑkuˈlimɑ pɛmbɛˈʤɛɔ zɑ kiˈlimɔ kwɑ mɑˈʃɑrti nɑˈfuː] (m-fah-nyah-bee-ah-SHAH-rah ah-nah-wah-koh-PAY-shah wah-koo-LEE-mah paym-bay-JAY-oh zah kee-LEE-moh kwah mah-SHAHR-tee nah-FOO-oo)",
          "translation": "The merchant lends [anawakopesha: kopa -> kopesha] agricultural inputs to farmers under affordable terms."
        }
      ],
      "mnemonics": [
        "Vowel Harmony ya Kutendesha: a, i, u -> -isha (fika -> fikisha, simama -> simamisha); e, o -> -esha (soma -> somesha, kopa -> kopesha, chelewa -> chelewesha)!"
      ],
      "culturalNotes": [
        "Katika jamii za Waswahili, msemo 'Kusomesha si kazi ndogo' unasisitiza heshima kubwa wanayopewa wazazi na walezi wanaogharamia elimu ya watoto wao."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendesha ya kitenzi \"soma\" (study/read) inayomaanisha kufundisha au kugharamia masomo ya mtu ni ipi?",
          "options": [
            "somesha (Educate / cause to learn - Correct causative form with '-esha')",
            "somisha (Kosa la upatanisho wa irabu ya 'o')",
            "somea (Hii ni kauli ya kutendea)",
            "somwa (Hii ni kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «soma» kina irabu «o», hivyo kulingana na kanuni ya upatanisho wa irabu huchukua «-esha» kupata «somesha» (educate / sponsor education)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"kopa\" (borrow) kinapobadilishwa kuwa kauli ya kutendesha (lend money / credit), neno sahihi huwa lipi?",
          "options": [
            "kopesha (Lend / cause to borrow - Correct causative with '-esha')",
            "kopisha (Kosa la kutumia '-isha' badala ya '-esha')",
            "kopea (Kauli ya kutendea)",
            "kopezwa (Umbo lisilo sanifu)"
          ],
          "answerIndex": 0,
          "explanation": "Shina «kopa» lina irabu «o», hivyo huchukua «-esha» kupata «kopesha» (lend money)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zilizo sahihi za vitenzi vya kawaida na vinyambuliko vyao vya kutendesha:",
          "options": [
            "fika -> fikisha, simama -> simamisha, rudi -> rudisha, soma -> somesha, kopa -> kopesha, chelewa -> chelewesha.",
            "fika -> fikesha, simama -> simamesha, rudi -> rudesha.",
            "soma -> somisha, kopa -> kopisha, chelewa -> chelewisha.",
            "Vitenzi vyote vya Kiswahili huchukua kiambishi '-isha' pekee bila kujali irabu."
          ],
          "answerIndex": 0,
          "explanation": "«a, i, u» huchukua «-isha» (fikisha, simamisha, rudisha) na «e, o» huchukua «-esha» (somesha, kopesha, chelewesha)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u19-l2": {
    "id": "sw-u19-l2",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendesha kwa Mashina ya Irabu Mbili (-lisha / -lesha) na Vitenzi vya Silabi Moja",
    "level": "B2",
    "objective": "Kutambua na kutumia kauli ya kutendesha kwa vitenzi vya irabu mbili (-lisha / -lesha) na vitenzi vyenye silabi moja (kula -> lisha, kunywa -> nywesha, kujua -> julisha).",
    "presentation": {
      "explanation": "Kauli ya Kutendesha kwa Mashina ya Irabu Mbili na Silabi Moja:\n\n1. **Mashina ya Irabu Mbili (-lisha vs. -lesha)**:\n   - Mashina yanayoishia na irabu mbili kabla ya *-a* huingiza herufi ya kiunganishi **l** kabla ya kiambishi cha kusababisha:\n     - *nunua* (buy) -> **nunulisha** (cause to buy / entice into buying)\n     - *zaa* (bear fruit / breed) -> **zalisha** (breed / generate / produce / assist in childbirth)\n     - *ondoa* (remove) -> **ondosha** / **ondolesha** (dismiss / banish / cause to be removed)\n     - *kosea* (err) -> **koselesha** / **kosesha** (cause to miss or err)\n     - *chagua* (choose) -> **chagulisha** (cause to select / assist in choosing).\n\n2. **Vitenzi vya Silabi Moja na Miundo Maalum (Monosyllabic Causatives)**:\n   - Vitenzi hivi hupoteza kiambishi nafsi cha *ku-* kinapounganishwa na viambishi vya nyakati, vikichukua *-lisha*, *-nywesha*, au *-fisha*:\n     - *kula* (eat) -> **lisha** (feed / nourish / cause to eat)\n     - *kunywa* (drink) -> **nywesha** (water / irrigate / give drink to)\n     - *kufa* (die) -> **fisha** (cause to die / mortify / execute)\n     - *kujua* (know) -> **julisha** (inform / notify / introduce)\n     - *kuona* -> **onyesha** / **onesha** (show / display).",
      "examples": [
        {
          "target": "Mama anawalisha watoto wadogo uji wenye virutubisho na kuwanywesha maji safi.",
          "reading": "Ma-ma a-na-wa-li-sha wa-to-to wa-do-go u-ji we-nye vi-ru-tu-bi-sho na ku-wa-nywe-sha ma-ji sa-fi. [ˈmɑmɑ ɑnɑwɑˈliʃɑ wɑˈtɔtɔ wɑˈdɔɡɔ ˈuʤi ˈwɛɲɛ virutuˈbiʃɔ nɑ kuwɑˈɲwɛʃɑ ˈmɑʤi ˈsɑfi] (MAH-mah ah-nah-wah-LEE-shah wah-TOH-toh wah-DOH-goh OO-jee WAY-nyay vee-roo-too-BEE-shoh nah koo-wah-NYWAY-shah MAH-jee SAH-fee)",
          "translation": "Mother is feeding [anawalisha: kula -> lisha] young children nutritious porridge and giving them clean water to drink [kuwanywesha: kunywa -> nywesha]."
        },
        {
          "target": "Mkurugenzi alitujulisha kuhusu sera mpya za uzalishaji viwandani mapema leo.",
          "reading": "Mku-ru-ge-nzi a-li-tu-ju-li-sha ku-hu-su se-ra mpy-a za u-za-li-sha-ji vi-wa-nda-ni ma-pe-ma le-o. [mkurʊˈɡɛnzi ɑlituʤuˈliʃɑ kuˈhusu ˈsɛrɑ ˈmpjɑ zɑ uzɑliˈʃɑʤi viwɑˈndɑni mɑˈpɛmɑ ˈlɛɔ] (m-koo-roo-GAYN-zee ah-lee-too-joo-LEE-shah koo-HOO-soo SAY-rah M-PYAH zah oo-zah-lee-SHAH-jee vee-wahn-DAH-nee mah-PAY-mah LAY-oh)",
          "translation": "The director notified [alitujulisha: kujua -> julisha] us about new manufacturing policies [uzalishaji: zaa -> zalisha] in factories early today."
        },
        {
          "target": "Mkulima anazalisha mazao mengi ya nafaka na anawanywesha ng'ombe wake maji.",
          "reading": "Mku-li-ma a-na-za-li-sha ma-za-o me-ngi ya na-fa-ka na a-na-wa-nywe-sha ngo-mbe wa-ke ma-ji. [mkuˈlimɑ ɑnɑzɑˈliʃɑ mɑˈzɑɔ ˈmɛŋɡi jɑ nɑˈfɑkɑ nɑ ɑnɑwɑˈɲwɛʃɑ ˈŋɔmbɛ ˈwɑkɛ ˈmɑʤi] (m-koo-LEE-mah ah-nah-zah-LEE-shah mah-ZAH-oh MAYN-gee yah nah-FAH-kah nah ah-nah-wah-NYWAY-shah NG-OHM-bay WAH-kay MAH-jee)",
          "translation": "The farmer produces [anazalisha: zaa -> zalisha] plenty of cereal crops and gives water to [anawanywesha: kunywa -> nywesha] his cattle."
        }
      ],
      "mnemonics": [
        "Silabi Moja & Irabu Mbili: kula -> lisha (kulisha watoto); kunywa -> nywesha (kunywesha mimea); kujua -> julisha (kujulisha taarifa); zaa -> zalisha (kuzalisha umeme/mazao)!"
      ],
      "culturalNotes": [
        "Neno 'Mzalendo' na 'Uzalishaji' (kutoka 'zaa' -> 'zalisha') ni dhana kuu za kiuchumi na kijamii nchini Tanzania na Kenya zinazosisitiza uchumi wa viwanda na uzalishaji wa ndani."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendesha ya kitenzi cha silabi moja \"kula\" (eat) inayomaanisha kumlisha mtu chakula ni ipi?",
          "options": [
            "lisha (Feed / cause to eat - Correct causative form of 'kula')",
            "kulisha (Umbo lenye 'ku-' wakati linapotumika bila viambishi vya wakati)",
            "lia (Hii ni kauli ya kutendea)",
            "liwa (Hii ni kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kula» kina umbo la kutendesha «lisha» (mfano: *Mwalimu anawalisha wanafunzi chakula*)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"kujua\" (know) kinapobadilishwa kuwa kauli ya kutendesha yenye maana ya 'kufahamisha / kutangaza kwa mtu', neno sahihi huwa lipi?",
          "options": [
            "julisha (Inform / notify / make known - Correct causative formation)",
            "juaisha (Kosa la uundaji wa maneno)",
            "juliwa (Kauli ya kutendwa)",
            "julikana (Kauli ya kutendeka)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kujua» hubadilika kuwa «julisha» katika kauli ya kutendesha: *alitujulisha* (he informed us)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha iliyo sahihi kabisa ya vitenzi vya silabi moja na vya irabu mbili vilivyonyambulishwa katika kauli ya kutendesha:",
          "options": [
            "kula -> lisha, kunywa -> nywesha, kufa -> fisha, kujua -> julisha, zaa -> zalisha, nunua -> nunulisha.",
            "kula -> lesha, kunywa -> nywisha, kufa -> fesha.",
            "kujua -> juisha, zaa -> zaisha, nunua -> nunuisha.",
            "Vitenzi vyenye silabi moja havina kauli ya kutendesha katika lugha ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "Miundo sahihi ya kutendesha ni kula/lisha, kunywa/nywesha, kufa/fisha, kujua/julisha, zaa/zalisha, na nunua/nunulisha."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u19-l3": {
    "id": "sw-u19-l3",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 3,
    "title": "Kauli ya Kutendesha kwa Mabadiliko ya Sauti za Konsonanti (-za, -sha: Sound Alternations)",
    "level": "B2",
    "objective": "Kutambua na kutumia mabadiliko ya kifonolojia katika kauli ya kutendesha ambapo konsonanti za mwisho za mzizi hubadilika moja kwa moja kuwa -sha au -za (-ka -> -sha, -ta -> -za/-sha, -la -> -za).",
    "presentation": {
      "explanation": "Mabadiliko ya Sauti katika Kauli ya Kutendesha (Morphophonological Causatives):\n\nKatika Kiswahili, vitenzi vingi haviongezi silabi nzima ya *-isha/-esha*, bali konsonanti ya mwisho ya shina hubadilika moja kwa moja kupitia mchakato wa kifonolojia (Consonant Mutation):\n\n1. **Konsonanti -ka hubadilika kuwa -sha**:\n   - *anguka* (fall) -> **angusha** (drop / cause to fall / fell a tree)\n   - *amka* (wake up - intr.) -> **amsha** (awaken sb - tr.)\n   - *chemka* (boil - intr.) -> **chemsha** (boil - tr.)\n   - *kauka* (dry - intr.) -> **kausha** (dry sth - tr.)\n   - *kumbuka* (remember) -> **kumbusha** (remind)\n   - *geuka* (turn around - intr.) -> **geuza** / **geusha** (turn sth / convert - tr.)\n   - *shuka* (descend / disembark) -> **shusha** (lower / drop off).\n\n2. **Konsonanti -ta / -la / -nda / -pa hubadilika kuwa -za au -nya**:\n   - *lala* (sleep / lie down) -> **laza** (lay down / hospitalize)\n   - *penda* (love / like) -> **pendeza** (please / charm / look attractive)\n   - *kimbia* (run) -> **kimbiza** (chase / hurry)\n   - *potea* (get lost) -> **poteza** (lose / misplace / waste)\n   - *ona* (see) -> **onya** (warn / reprimand) / **onyesha** (show)\n   - *lea* (raise / nurse) -> **lelewa** / **leza**.",
      "examples": [
        {
          "target": "Mwalimu anawakumbusha wanafunzi wote kufanya marudio kabla ya mtihani kuanza.",
          "reading": "Mwa-li-mu a-na-wa-ku-mbu-sha wa-na-fu-nzi wo-te ku-fa-nya ma-ru-di-o ka-bla ya mti-ha-ni ku-a-nza. [mwɑˈlimu ɑnɑwɑkumbuˈʃɑ wɑnɑˈfunzi ˈwɔtɛ kuˈfɑɲɑ mɑruˈdiɔ ˈkɑblɑ jɑ mtiˈhɑni kuˈɑnzɑ] (mwah-LEE-moo ah-nah-wah-koom-BOO-shah wah-nah-FOON-zee WOH-tay koo-FAH-nyah mah-roo-DEE-oh KAH-blah yah m-tee-HAH-nee koo-AHN-zah)",
          "translation": "The teacher is reminding [anawakumbusha: kumbuka -> kumbusha] all students to do revision before the exam begins."
        },
        {
          "target": "Mpishi anachemsha maji safi ya kunywa na kukausha vyombo vilivyooshwa jikoni.",
          "reading": "Mpi-shi a-na-che-msha ma-ji sa-fi ya ku-nywa na ku-ka-u-sha vyo-mbo vi-li-vyo-o-shwa ji-ko-ni. [mpiˈʃi ɑnɑtʃɛˈmʃɑ ˈmɑʤi ˈsɑfi jɑ ˈkuɲwɑ nɑ kukɑˈuʃɑ ˈvjɔmbɔ vilivjɔˈɔʃwɑ ʤiˈkɔni] (m-PEE-shee ah-nah-chaym-SHAH MAH-jee SAH-fee yah koo-NYWAH nah koo-kah-OO-shah VYOHM-boh vee-lee-vyoh-OH-shwah jee-KOH-nee)",
          "translation": "The cook is boiling [anachemsha: chemka -> chemsha] clean drinking water and drying [kukausha: kauka -> kausha] washed utensils in the kitchen."
        },
        {
          "target": "Hotuba nzuri ya mgeni rasmi iliwapendeza wananchi na akawahimiza kufanya kazi.",
          "reading": "Ho-tu-ba nzu-ri ya mge-ni ra-smi i-li-wa-pe-nde-za wa-na-nchi na a-ka-wa-hi-mi-za ku-fa-nya ka-zi. [hɔˈtubɑ ˈnzuri jɑ mˈɡɛni ˈrɑsmi iliwɑpɛˈndɛzɑ wɑnɑˈntʃi nɑ ɑkɑwɑhimiˈzɑ kuˈfɑɲɑ ˈkɑzi] (hoh-TOO-bah N-ZOO-ree yah m-GAY-nee RAH-smee ee-lee-wah-payn-DAY-zah wah-nahn-CHEE nah ah-kah-wah-hee-MEE-zah koo-FAH-nyah KAH-zee)",
          "translation": "The guest of honor's fine speech pleased [iliwapendeza: penda -> pendeza] the citizens and he urged [akawahimiza] them to work hard."
        }
      ],
      "mnemonics": [
        "Mabadiliko ya Sauti: kumbuka -> kumbusha; chemka -> chemsha; kauka -> kausha; lala -> laza; penda -> pendeza; potea -> poteza!"
      ],
      "culturalNotes": [
        "Neno 'Kupendeza' (kutoka shina 'penda' -> 'pendeza') ndio msingi wa neno la pongezi 'Umependeza sana!' (You look very smart/attractive!) linalotumika kote Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendesha ya kitenzi \"kumbuka\" (remember) inayomaanisha 'kumfanya mtu akumbuke' ni ipi?",
          "options": [
            "kumbusha (Remind / cause to remember - Correct '-ka' to '-sha' mutation)",
            "kumbukisha (Kosa la kutotumia mabadiliko ya sauti ya '-ka -> -sha')",
            "kumbukia (Hii ni kauli ya kutendea)",
            "kumbukwa (Hii ni kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «kumbuka» hubadilisha konsonanti ya mwisho «-ka» kuwa «-sha» kupata «kumbusha» (remind)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"lala\" (sleep / lie down) kinapobadilishwa kuwa kauli ya kutendesha (lay down / hospitalize), neno sahihi huwa lipi?",
          "options": [
            "laza (Lay down / put to bed / admit to hospital - Correct '-la -> -za' shift)",
            "lalisha (Umbo lisilo la kawaida katika Kiswahili sanifu)",
            "lalia (Kauli ya kutendea)",
            "lalwa (Kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «lala» hubadilika kuwa «laza» (mfano: *daktari alimlaza mgonjwa hospitalini*)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zinazoonyesha mabadiliko sahihi ya sauti za konsonanti katika kauli ya kutendesha:",
          "options": [
            "chemka -> chemsha, kauka -> kausha, amka -> amsha, kumbuka -> kumbusha, lala -> laza, penda -> pendeza, potea -> poteza.",
            "chemka -> chemkisha, kauka -> kaukisha, amka -> amkisha.",
            "lala -> lalisha, penda -> pendisha, potea -> potesha.",
            "Konsonanti za mwisho za vitenzi haziwezi kubadilika katika sarufi ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "Mabadiliko ya fonolojia hutoa chemsha, kausha, amsha, kumbusha, laza, pendeza, na poteza."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u19-l4": {
    "id": "sw-u19-l4",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 4,
    "title": "Kauli ya Kutendesha kwa Vitenzi vya Kigeni / Kiarabu (-isha / -esha / -zisha)",
    "level": "B2",
    "objective": "Kutambua na kutumia kauli ya kutendesha kwa vitenzi vya asili ya kigeni (hasa Kiarabu) vinavyoishia na irabu -i, -u, au -e (-isha / -esha / -zisha).",
    "presentation": {
      "explanation": "Kauli ya Kutendesha kwa Vitenzi vya Kigeni (Loanword Causatives):\n\nVitenzi vyenye asili ya Kiarabu vinavyoishia na irabu **-i, -u, au -e** hunyambulishwa kuwa kauli ya kutendesha kwa kufuata kanuni maalum:\n\n1. **Vitenzi Vinavyoishia na -i (Huchukua -isha au -zisha)**:\n   - *safiri* (travel) -> **safirisha** (transport / freight / make travel)\n   - *rudi* (return) -> **rudisha** (return sth / refund / send back)\n   - *hakiki* (verify) -> **hakikisha** (ensure / make sure / certify)\n   - *kiri* (confess) -> **kirisha** (cause to admit)\n   - *badili* (change) -> **badilisha** (exchange / alter / transform)\n   - *fikiri* (think) -> **fikirisha** (provoke thought / make sb think).\n\n2. **Vitenzi Vinavyoishia na -u (Huchukua -isha)**:\n   - *jibu* (answer) -> **jibisha** (challenge to answer / provoke a reply)\n   - *jaribu* (try / test) -> **jaribisha** (put to the test / sample)\n   - *hukumu* (judge) -> **hukumisha** (cause to be judged / sentence).\n\n3. **Vitenzi Vinavyoishia na -e (Huchukua -esha / -zisha)**:\n   - *starehe* (relax / be comfortable) -> **starehesha** (entertain / comfort / amuse)\n   - *samehe* (forgive) -> **samehesha** (cause forgiveness / mediate).",
      "examples": [
        {
          "target": "Tafadhali hakikisha kwamba umerejesha na kurudisha vitabu vyote vya maktaba kwa wakati.",
          "reading": "Ta-fa-dha-li ha-ki-ki-sha kwa-mba u-me-re-je-sha na ku-ru-di-sha vi-ta-bu vyo-te vya ma-kta-ba kwa wa-ka-ti. [tɑfɑˈðɑli hɑkikiˈʃɑ ˈkwɑmbɑ umɛrɛˈʤɛʃɑ nɑ kuruˈdiʃɑ viˈtɑbu ˈvjɔtɛ vjɑ mɑkˈtɑbɑ kwɑ wɑˈkɑti] (tah-fah-THAH-lee hah-kee-KEE-shah KWAHM-bah oo-may-ray-JAY-shah nah koo-roo-DEE-shah vee-TAH-boo VYOH-tay vyah mahk-TAH-bah kwah wah-KAH-tee)",
          "translation": "Please make sure [hakikisha: hakiki -> hakikisha] that you have returned [kurudisha: rudi -> rudisha] all library books on time."
        },
        {
          "target": "Kampuni yetu inasafirisha shehena kubwa ya mizigo kwenda mikoa mbalimbali nchini.",
          "reading": "Ka-mpu-ni ye-tu i-na-sa-fi-ri-sha she-he-na kbu-bwa ya mzi-go kwe-nda mi-ko-a mba-li-mba-li nchi-ni. [kɑmˈpuni ˈjɛtu inɑsɑfiriˈʃɑ ʃɛˈhɛnɑ ˈkubwɑ jɑ ˈmziɡɔ ˈkwɛndɑ miˈkɔɑ mbɑlimbɑˈli ˈntʃini] (kahm-POO-nee YAY-too ee-nah-sah-fee-REE-shah shay-HAY-nah KOO-bwah yah m-ZEE-goh KWAYN-dah mee-KOH-ah M-BAH-lee-m-BAH-lee n-CHEE-nee)",
          "translation": "Our company is transporting [inasafirisha: safiri -> safirisha] a large consignment of cargo to various regions in the country."
        },
        {
          "target": "Wanamuziki walitumbuiza kwa nyimbo tamu na kuwastarehesha wageni wote ukumbini.",
          "reading": "Wa-na-mu-zi-ki wa-li-tu-mbu-i-za kwa nyi-mbo ta-mu na ku-wa-sta-re-he-sha wa-ge-ni wo-te u-ku-mbi-ni. [wɑnɑmuˈziki wɑlitumbuiˈzɑ kwɑ ˈɲimbɔ ˈtɑmu nɑ kuwɑstɑrɛhɛˈʃɑ wɑˈɡɛni ˈwɔtɛ ukumbiˈni] (wah-nah-moo-ZEE-kee wah-lee-toom-boo-EE-zah kwah NYEEM-boh TAH-moo nah koo-wah-stah-ray-hay-SHAH wah-GAY-nee WOH-tay oo-koom-bee-NEE)",
          "translation": "The musicians performed sweet songs and entertained [kuwastarehesha: starehe -> starehesha] all guests in the hall."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Kigeni vya Kutendesha: safiri -> safirisha; rudi -> rudisha; hakiki -> hakikisha; badili -> badilisha; starehe -> starehesha!"
      ],
      "culturalNotes": [
        "Neno 'Kuhakikisha' (kutoka 'hakiki') hutumika kila siku kama msemo wa kawaida wa usalama: 'Hakikisha unafunga mlango kabla ya kuondoka.'"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendesha ya kitenzi cha Kiarabu \"safiri\" (travel) inayomaanisha kusafirisha mizigo au watu ni ipi?",
          "options": [
            "safirisha (Transport / cause to travel - Correct loanword causative suffix '-isha')",
            "safiresha (Kosa la kutumia '-esha' badala ya '-isha' baada ya 'i')",
            "safiria (Hii ni kauli ya kutendea)",
            "safiriwa (Hii ni kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «safiri» kinaishia na «-i», hivyo huchukua «-isha» kupata «safirisha» (transport / cause to travel)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"badili\" (change / alter) kinapobadilishwa kuwa kauli ya kutendesha (exchange / transform sth), neno sahihi huwa lipi?",
          "options": [
            "badilisha (Exchange / transform / cause to change - Correct causative form)",
            "badilesha (Kosa la upatanisho wa irabu ya 'i')",
            "badilia (Kauli ya kutendea)",
            "badilika (Kauli ya kutendeka)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «badili» huchukua «-isha» kupata «badilisha» (exchange / alter / change something)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha iliyo sahihi kabisa ya vitenzi vya kigeni katika kauli ya kutendesha:",
          "options": [
            "safiri -> safirisha, rudi -> rudisha, hakiki -> hakikisha, badili -> badilisha, jaribu -> jaribisha, starehe -> starehesha.",
            "safiri -> safiresha, rudi -> rudesha, hakiki -> hakikesha.",
            "safiri -> safiriza, rudi -> rudiza, badili -> badiliza.",
            "Vitenzi vyenye asili ya Kiarabu haviwezi kunyambulishwa katika kauli ya kutendesha."
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi vya Kiarabu vyenye irabu -i/-u huchukua -isha (safirisha, rudisha, hakikisha, badilisha, jaribisha) na -e huchukua -esha (starehesha)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u19-l5": {
    "id": "sw-u19-l5",
    "subject": "swahili",
    "unit": 19,
    "lessonNumber": 5,
    "title": "Muhtasari wa Kauli ya Kutendesha na Mseto wa Vinyambuliko (Causative Grand Synthesis & Stacked Extensions)",
    "level": "B2",
    "objective": "Kuunganisha mada zote za Unit 19: mashina ya kawaida ya konsonanti (-isha / -esha), mashina ya irabu mbili na silabi moja (lisha, nywesha, zalisha), mabadiliko ya sauti (chemsha, kumbusha, laza), vitenzi vya kigeni, na kuunda miundo mseto ya vinyambuliko vilivyopangwa (Kutendeshwa, Kutendeshea).",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Kauli ya Kutendesha na Vinyambuliko Mseto (Stacked Extensions):\n\n1. **Muundo Kamili wa Kauli ya Kutendesha (Causative Master Matrix)**:\n   - **Konsonanti Kawaida**: *a, i, u -> -isha* (*fikisha, simamisha, safisha*); *e, o -> -esha* (*somesha, kopesha, chelewesha*).\n   - **Silabi Moja & Irabu Mbili**: *kula -> lisha, kunywa -> nywesha, kujua -> julisha, zaa -> zalisha, nunua -> nunulisha*.\n   - **Mabadiliko ya Sauti (-ka -> -sha, -la -> -za)**: *chemka -> chemsha, kauka -> kausha, kumbuka -> kumbusha, lala -> laza, penda -> pendeza*.\n   - **Vitenzi vya Kigeni**: *safirisha, rudisha, hakikisha, badilisha, starehesha*.\n\n2. **Vinyambuliko Mseto Vilivyopangwa (Stacked Extensions)**:\n   - **Kutendesha + Kutendwa = Kutendeshwa** (*To be caused/made to do*):\n     - *soma -> somesha -> **someshwa*** (*Mwanafunzi alisomeshwa chuo kikuu.*)\n     - *safiri -> safirisha -> **safirishwa*** (*Mzigo ulisafirishwa jana.*)\n     - *anguka -> angusha -> **angushwa*** (*Mti uliangushwa na upepo.*)\n   - **Kutendesha + Kutendea = Kutendeshea** (*To cause on behalf of / for*):\n     - *soma -> somesha -> **someshea*** (*Alinisomeshea mwanangu.*)\n     - *rudi -> rudisha -> **rudishia*** (*Alinirudishia fedha zangu.*).",
      "examples": [
        {
          "target": "Mwanafunzi yatima alisomeshwa na mfadhili hadi akamaliza masomo yake ya udaktari.",
          "reading": "Mwa-na-fu-nzi ya-ti-ma a-li-so-me-shwa na mfa-dhi-li ha-di a-ka-ma-li-za ma-so-mo ya-ke ya u-da-kta-ri. [mwɑnɑˈfunzi jɑˈtimɑ ɑlisɔˈmɛʃwɑ nɑ mfɑˈðili ˈhɑdi ɑkɑmɑˈlizɑ mɑˈsɔmɔ ˈjɑkɛ jɑ udɑkˈtɑri] (mwah-nah-FOON-zee yah-TEE-mah ah-lee-soh-MAY-shwah nah m-fah-THEE-lee HAH-dee ah-kah-mah-LEE-zah mah-SOH-moh YAH-kay yah oo-dahk-TAH-ree)",
          "translation": "The orphaned student was educated/sponsored [alisomeshwa: soma -> somesha -> someshwa] by a benefactor until finishing medical studies."
        },
        {
          "target": "Meneja alituhakikishia kwamba mizigo yote itasafirishwa salama na kurudishiwa wenyewe.",
          "reading": "Me-ne-ja a-li-tu-ha-ki-ki-shi-a kwa-mba mzi-go yo-te i-ta-sa-fi-ri-shwa sa-la-ma na ku-ru-di-shi-wa wye-nye-we. [mɛˈnɛʤɑ ɑlituhɑkikiˈʃiɑ ˈkwɑmbɑ ˈmziɡɔ ˈjɔtɛ itɑsɑfiriˈʃwɑ sɑˈlɑmɑ nɑ kurudiˈʃiwɑ wɛˈɲɛwɛ] (may-NAY-jah ah-lee-too-hah-kee-kee-SHEE-ah KWAHM-bah m-ZEE-goh YOH-tay ee-tah-sah-fee-REE-shwah sah-LAH-mah nah koo-roo-dee-SHEE-wah way-NYAY-way)",
          "translation": "The manager assured us [alituhakikishia: hakiki -> hakikisha -> hakikishia] that all cargo will be transported [itasafirishwa] safely and returned to [kurudishiwa] the owners."
        },
        {
          "target": "Umahiri wa kauli ya kutendesha na uwezo wa kuunganisha viambishi nyambulishi ni uthibitisho wa nguvu kubwa ya kisarufi ya lugha ya Kiswahili katika kujenga dhana changamano za visababishi na uhusika kwa kutumia neno moja pekee.",
          "reading": "U-ma-hi-ri wa ka-u-li ya ku-te-nde-sha na u-we-zo wa ku-u-nga-ni-sha vi-a-mbi-shi nya-mbu-li-shi ni u-thi-bi-ti-sho wa ngu-vu kbu-bwa ya ki-sa-ru-fi ya lu-gha ya Ki-swa-hi-li ka-ti-ka ku-je-nga dha-na cha-nga-ma-no za vi-sa-ba-bi-shi na u-hu-si-ka kwa ku-tu-mia ne-no mo-ja pe-ke-e. [umɑˈhiri wɑ kɑˈuli jɑ kutɛndɛˈʃɑ nɑ uˈwɛzɔ wɑ kuiŋɡɑˈniʃɑ viɑmˈbiʃi ɲɑmbuˈliʃi ni uθibiˈtiʃɔ wɑ ˈŋɡuvu ˈkubwɑ jɑ kisɑˈrufi jɑ ˈluɡɑ jɑ kiswɑˈhili ˈkɑtikɑ kuˈʤɛŋɡɑ ˈðɑnɑ tʃɑŋɡɑˈmɑnɔ zɑ visɑbɑˈbiʃi nɑ uhuˈsikɑ kwɑ kutuˈmiɑ ˈnɛnɔ ˈmɔʤɑ pɛˈkɛː] (oo-mah-HEE-ree wah kah-OO-lee yah koo-tayn-day-SHAH nah oo-WAY-zoh wah koo-oon-gah-NEE-shah vee-ahm-BEE-shee nyahm-boo-LEE-shee nee oo-thee-bee-TEE-shoh wah N-GOO-voo KOO-bwah yah kee-sah-ROO-fee yah LOO-gah yah kee-swah-HEE-lee KAH-tee-kah koo-JAYN-gah THAH-nah chahn-gah-MAH-noh zah vee-sah-bah-BEE-shee nah oo-hoo-SEE-kah kwah koo-too-MEE-ah NAY-noh MOH-jah pay-KAY-ay)",
          "translation": "Mastery of the causative voice [causative grand synthesis: kauli ya kutendesha] and morphological stacking proves the immense grammar capacity of Swahili in constructing nuanced concepts of causation and agency within a single word."
        }
      ],
      "mnemonics": [
        "Kutendesha Grand Synthesis: soma -> somesha -> someshwa (kuwa mtu anasomeshwa na mtu mwingine); rudi -> rudisha -> rudishia (kumrudishia mtu kitu)!"
      ],
      "culturalNotes": [
        "Mifumo ya ushirikiano wa kijamii (Harambee nchini Kenya na Ujamaa nchini Tanzania) inajengwa juu ya dhana ya 'kusomeshana' na 'kusaidiana' kufanikisha maendeleo ya jamii."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Katika sentensi «Mwanafunzi alisomeshwa na mjomba wake», mnyambuliko wa kitenzi unachanganya kauli zipi?",
          "options": [
            "Kauli ya Kutendesha na Kauli ya Kutendwa (Causative Passive: soma -> somesha -> someshwa)",
            "Kauli ya Kutenda na Kauli ya Kutendea",
            "Kauli ya Kutendeka pekee",
            "Kauli ya Kutendana na Kutendea"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «alisomeshwa» kimetokana na: soma -> somesha (kutendesha) -> someshwa (kutendeshwa: causative passive)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia mseto wa kauli ya kutendesha na kauli ya kutendea (Kutendeshea: cause for/to someone) kwa usahihi?",
          "options": [
            "Mfanyabiashara alimrudishia mteja chenji yake yote. (The merchant returned/refunded to the customer all his change - Correct causative applicative 'alimrudishia')",
            "Mfanyabiashara alirudisha mteja bila kumpa chenji",
            "Mfanyabiashara alirudiwa na mteja",
            "Mfanyabiashara alimrudisha mteja chenji"
          ],
          "answerIndex": 0,
          "explanation": "«alimrudishia mteja chenji» inatumia kauli ya kutendeshea (rudi -> rudisha -> rudishia: return/refund to someone)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 19 ya Kauli ya Kutendesha na Vinyambuliko Mseto katika Kiswahili:",
          "options": [
            "Mwalimu aliwasomesha wanafunzi kwa maarifa mapya, akawahakikishia ushindi katika mitihani, na wale waliohitaji msaada wakasomeshwa kwa ukarimu wote. (Causative active [aliwasomesha], loanword causative [akawahakikishia], and causative passive [wakasomeshwa].)",
            "Mwalimu alisoma na wanafunzi bila kusababisha chochote.",
            "Wanafunzi walimfundisha mwalimu jikoni.",
            "Kauli ya kutendesha haiwezi kuunganishwa na kauli ya kutendwa."
          ],
          "answerIndex": 0,
          "explanation": "«Mwalimu aliwasomesha wanafunzi kwa maarifa mapya, akawahakikishia ushindi katika mitihani, na wale waliohitaji msaada wakasomeshwa kwa ukarimu wote.» inajumuisha nyanja zote za kauli ya kutendesha na vinyambuliko vyake mseto kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u20-l1": {
    "id": "sw-u20-l1",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 1,
    "title": "Kauli ya Kutendana (-ana) (Reciprocal Verb Extensions)",
    "level": "B2",
    "objective": "Kuelewa na kutumia Kauli ya Kutendana (Reciprocal Voice: -ana) kueleza matendo yanayofanywa na watendaji wawili au zaidi kwa pamoja au kwa kubadilishana (mutual/reciprocal actions).",
    "presentation": {
      "explanation": "Kauli ya Kutendana katika Kiswahili (The Reciprocal Extension: -ana):\n\nKauli ya kutendana huonyesha kuwa watendaji wawili au zaidi wanatendeana tendo lile lile kwa pamoja au kwa kubadilishana (*mutual or reciprocal action: each other / one another*):\n\n1. **Muundo wa Kiambishi -ana**:\n   - Kiambishi cha kutendana ni **-ana** ambacho huongezwa moja kwa moja kwenye shina la kitenzi baada ya kuondoa irabu ya mwisho *-a*:\n     - *penda* (love) -> **pendana** (love one another)\n     - *saidia* (help) -> **saidiana** (help each other)\n     - *ona* (see) -> **onana** (see / meet each other)\n     - *piga* (hit) -> **pigana** (fight each other)\n     - *jua* (know) -> **juana** (know each other)\n     - *shauri* (advise) -> **shauriana** (consult each other)\n     - *elewa* (understand) -> **elewana** (understand each other / get along)\n     - *kubali* (agree) -> **kubaliana** (agree with each other).\n\n2. **Upatanisho wa Kisintaksia (Syntactic Agreement)**:\n   - Wakati mtendaji ni **wingi** (wa-, tu-, m-), kitenzi hutumika moja kwa moja:\n     - *Wanafunzi wanasaidiana masomoni.* (Students help each other in studies.)\n   - Wakati mtendaji ni **mmoja**, kiambishi cha kiunganishi **na** hutumika kumuunganisha mtendaji wa pili:\n     - *Ali anapendana na Fatma.* (Ali and Fatma love each other.)\n     - *Nilikutana na rafiki yangu sokoni.* (I met with my friend at the market.)",
      "examples": [
        {
          "target": "Majirani wema wanapendana na kusaidiana kwa dhati wakati wa shida na raha.",
          "reading": "Ma-ji-ra-ni we-ma wa-na-pe-nda-na na ku-sa-i-dia-na kwa dha-ti wa-ka-ti wa shi-da na ra-ha. [mɑʤiˈrɑni ˈwɛmɑ wɑnɑpɛˈndɑnɑ nɑ kusɑiˈdiɑnɑ kwɑ ˈðɑti wɑˈkɑti wɑ ˈʃidɑ nɑ ˈrɑhɑ] (mah-jee-RAH-nee WAY-mah wah-nah-payn-DAH-nah nah koo-sah-ee-dee-AH-nah kwah THAH-tee wah-KAH-tee wah SHEE-dah nah RAH-hah)",
          "translation": "Good neighbors love one another [wanapendana: penda -> pendana] and help each other [kusaidiana: saidia -> saidiana] sincerely in hardship and joy."
        },
        {
          "target": "Viongozi wa pande zote mbili walikutana na wakakubaliana kuhusu mpango wa amani.",
          "reading": "Vi-o-ngo-zi wa pa-nde zo-te mbi-li wa-li-ku-ta-na na wa-ka-ku-ba-lia-na ku-hu-su mpa-ngo wa a-ma-ni. [viɔˈŋɡɔzi wɑ ˈpɑndɛ ˈzɔtɛ ˈmbili wɑlikuˈtɑnɑ nɑ wɑkɑkubɑˈliɑnɑ kuˈhusu ˈmpɑŋɡɔ wɑ ɑˈmɑni] (vee-ohn-GOH-zee wah PAHN-day ZOH-tay M-BEE-lee wah-lee-koo-TAH-nah nah wah-kah-koo-bah-lee-AH-nah koo-HOO-soo M-PAHN-goh wah ah-MAH-nee)",
          "translation": "Leaders of both sides met [walikutana: kuta -> kutana] and agreed with each other [wakakubaliana: kubali -> kubaliana] regarding the peace plan."
        },
        {
          "target": "Vijana hao wanaheshimiana sana na wanashauriana mara kwa mara kuhusu biashara zao.",
          "reading": "Vi-ja-na ha-o wa-na-he-shi-mia-na sa-na na wa-na-sha-u-ria-na ma-ra kwa ma-ra ku-hu-su bi-a-sha-ra za-o. [viˈʤɑnɑ ˈhɑɔ wɑnɑhɛʃiˈmiɑnɑ ˈsɑnɑ nɑ wɑnɑʃɑuˈriɑnɑ ˈmɑrɑ kwɑ ˈmɑrɑ kuˈhusu biɑˈʃɑrɑ ˈzɑɔ] (vee-JAH-nah HAH-oh wah-nah-hay-shee-mee-AH-nah SAH-nah nah wah-nah-shah-oo-ree-AH-nah MAH-rah kwah MAH-rah koo-HOO-soo bee-ah-SHAH-rah ZAH-oh)",
          "translation": "Those youths respect each other [wanaheshimiana: heshimu -> heshimiana] deeply and consult each other [wanashauriana: shauri -> shauriana] regularly about their businesses."
        }
      ],
      "mnemonics": [
        "Kauli ya Kutendana = -ana: penda -> pendana; saidia -> saidiana; kuta -> kutana; kubali -> kubaliana; heshimu -> heshimiana!"
      ],
      "culturalNotes": [
        "Utamaduni wa 'Ujirani Mwema' katika jamii za Afrika Mashariki unasisitiza 'kusaidiana' na 'kusalimiana' kila asubuhi kama wajibu wa kijamii."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendana (Reciprocal Voice) ya kitenzi \"saidia\" (help) inayomaanisha kusaidiana pande zote mbili ni ipi?",
          "options": [
            "saidiana (Help each other / one another - Correct reciprocal suffix '-ana')",
            "saidika (Hii ni kauli ya kutendeka)",
            "saidisha (Hii ni kauli ya kutendesha)",
            "saidiwa (Hii ni kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «saidia» hupokea kiambishi «-ana» kupata «saidiana» (help one another)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inatumia kauli ya kutendana kwa mtendaji wa umoja aliyeunganishwa na neno \"na\" kwa usahihi?",
          "options": [
            "Juma anashauriana na kaka yake kuhusu masuala ya shamba. (Juma is consulting with his brother - Correct singular reciprocal with 'na')",
            "Juma anashauriwa kaka yake kuhusu masuala ya shamba",
            "Juma na kaka yake anashauri",
            "Juma anashauria kaka yake"
          ],
          "answerIndex": 0,
          "explanation": "«Juma anashauriana na kaka yake» inatumia kauli ya kutendana ya umoja sahihi ikifuatiwa na kiunganishi «na»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha iliyo sahihi kabisa ya vitenzi vilivyonyambulishwa katika kauli ya kutendana (-ana):",
          "options": [
            "penda -> pendana, saidia -> saidiana, ona -> onana, elewa -> elewana, heshimu -> heshimiana, kubali -> kubaliana.",
            "penda -> pendeka, saidia -> saidika, ona -> oneka.",
            "penda -> pendesha, saidia -> saidisha, ona -> onesha.",
            "Kauli ya kutendana inatumika tu kwa wanyama na si binadamu."
          ],
          "answerIndex": 0,
          "explanation": "Kiambishi -ana huunda vitenzi vya kutendana kama pendana, saidiana, onana, elewana, heshimiana, na kubaliana."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u20-l2": {
    "id": "sw-u20-l2",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 2,
    "title": "Kauli ya Kutendeka (-ika / -eka) (Stative / Neuter-Passive Verbs)",
    "level": "B2",
    "objective": "Kuelewa na kutumia Kauli ya Kutendeka (Stative Voice: -ika / -eka) kueleza hali ya kitu kutendeka bila mtendaji au uwezekano wa kutendeka (-able/-ible / get done).",
    "presentation": {
      "explanation": "Kauli ya Kutendeka katika Kiswahili (The Stative Extension: -ika / -eka):\n\nKauli ya kutendeka huonyesha kuwa **tendo limetendeka na limefikia hali fulani bila kumtaja mtendaji (agentless result)**, au huonyesha **uwezekano wa jambo kufanyika (*-able / -ible / feasible*)**:\n\n1. **Tofauti kati ya Kutendwa na Kutendeka**:\n   - **Kutendwa (Passive)**: Inahusisha mtendaji aliyefanya tendo (*Kikombe kilivunjwa na mtoto.* = The cup was broken by the child).\n   - **Kutendeka (Stative)**: Inaangazia hali iliyojitokeza yenyewe bila mtendaji (*Kikombe kilivunjika.* = The cup broke / is broken).\n\n2. **Kanuni ya Upatanisho wa Irabu (-ika vs. -eka)**:\n   - Ikiwa irabu ya shina ni **a, i, u**, shina hupokea **-ika**:\n     - *vunja* (break) -> **vunjika** (be broken / breakable)\n     - *pika* (cook) -> **pikika** (be cooked / cookable)\n     - *andika* (write) -> **andikika** (be writable / legible)\n     - *fanya* (do) -> **fanyika** (take place / be done / feasible)\n     - *fahamu* (understand) -> **fahamika** (be understood / famous)\n     - *haribu* (ruin) -> **haribika** (be ruined / damaged).\n\n   - Ikiwa irabu ya shina ni **e, o**, shina hupokea **-eka**:\n     - *soma* (read) -> **someka** (be readable / legible)\n     - *elewa* (understand) -> **eleweka** (be comprehensible / clear)\n     - *tenda* (act) -> **tendeka** (be feasible / take place)\n     - *kosa* (err / miss) -> **koseka** (be missable / errable)\n     - *chora* (draw) -> **choreka** (be drawable).",
      "examples": [
        {
          "target": "Kikombe cha udongo kilidondoka sakafuni na kikavunjika vipande vipande.",
          "reading": "Ki-ko-mbe cha u-do-ngo ki-li-do-ndo-ka sa-ka-fu-ni na ki-ka-vu-nji-ka vi-pa-nde vi-pa-nde. [kiˈkɔmbɛ tʃɑ uˈdɔŋɡɔ kilidɔˈndɔkɑ sɑkɑˈfuni nɑ kikɑvuˈnʤikɑ viˈpɑndɛ viˈpɑndɛ] (kee-KOHM-bay chah oo-DOHN-goh kee-lee-dohn-DOH-kah sah-kah-FOO-nee nah kee-kah-voon-JEE-kah vee-PAHN-day vee-PAHN-day)",
          "translation": "The clay cup fell to the floor and got broken [kikavunjika: vunja -> vunjika] into pieces."
        },
        {
          "target": "Mwandiko wa daktari hausomeki kwa urahisi lakini maelezo yake yanaeleweka vizuri.",
          "reading": "Mwa-ndi-ko wa da-kta-ri ha-u-so-me-ki kwa u-ra-hi-si la-ki-ni ma-e-le-zo ya-ke ya-na-e-le-we-ka vi-zu-ri. [mwɑˈndikɔ wɑ dɑkˈtɑri hɑusɔˈmɛki kwɑ urɑˈhisi lɑˈkini mɑɛlɛˈzɔ ˈjɑkɛ jɑnɑɛlɛˈwɛkɑ viˈzuri] (mwahn-DEE-koh wah dahk-TAH-ree hah-oo-soh-MAY-kee kwah oo-rah-HEE-see lah-KEE-nee mah-ay-lay-ZOH YAH-kay yah-nah-ay-lay-WAY-kah vee-ZOO-ree)",
          "translation": "The doctor's handwriting is not readable [hausomeki: soma -> someka] easily, but his explanations are well understood [yanaeleweka: elewa -> eleweka]."
        },
        {
          "target": "Mkutano mkuu utafanyika kesho ukumbini kwa sababu mambo yote yametendeka kama ilivyopangwa.",
          "reading": "Mku-ta-no mku-u u-ta-fa-nyi-ka ke-sho u-ku-mbi-ni kwa sa-ba-bu ma-mbo yo-te ya-me-te-nde-ka ka-ma i-li-vyo-pa-ngwa. [mkuˈtɑnɔ mkuˈu utɑfɑˈɲikɑ ˈkɛʃɔ ukumbiˈni kwɑ sɑˈbɑbu ˈmɑmbɔ ˈjɔtɛ jɑmɛtɛˈndɛkɑ ˈkɑmɑ ilivjɔˈpɑŋɡwɑ] (m-koo-TAH-noh m-koo-oo oo-tah-fah-NYEE-kah KAY-shoh oo-koom-bee-NEE kwah sah-BAH-boo MAHM-boh YOH-tay yah-may-tayn-DAY-kah KAH-mah ee-lee-vyoh-PAHN-gwah)",
          "translation": "The general meeting will take place [utafanyika: fanya -> fanyika] tomorrow in the hall because all matters have been accomplished [yametendeka: tenda -> tendeka] as planned."
        }
      ],
      "mnemonics": [
        "Kutendeka (-ika/-eka): vunja -> vunjika (break); fanya -> fanyika (happen); soma -> someka (readable); elewa -> eleweka (understandable)!"
      ],
      "culturalNotes": [
        "Katika mazungumzo ya heshima, kutumia kauli ya kutendeka kama 'Gari limeharibika' huondoa lawama ya kibinafsi kuliko kusema 'Nimeharibu gari'."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendeka ya kitenzi \"vunja\" (break) inayoeleza kuwa kitu kimevunjika bila kutaja mtendaji ni ipi?",
          "options": [
            "vunjika (Get broken / be breakable - Correct stative suffix '-ika')",
            "vunjwa (Hii ni kauli ya kutendwa yenye mtendaji)",
            "vunjia (Hii ni kauli ya kutendea)",
            "vunjisha (Hii ni kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «vunja» kina irabu «u», hivyo huchukua «-ika» kupata «vunjika» (be broken / breakable)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"soma\" (read) kinapobadilishwa kuwa kauli ya kutendeka yenye maana ya 'kusomeka / kuwa wazi kusoma', neno sahihi huwa lipi?",
          "options": [
            "someka (Be readable / legible - Correct stative with '-eka')",
            "somika (Kosa la upatanisho wa irabu ya 'o')",
            "somwa (Kauli ya kutendwa)",
            "somesha (Kauli ya kutendesha)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «soma» kina irabu «o», hivyo kulingana na upatanisho wa irabu huchukua «-eka» kupata «someka» (be readable / legible)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua jozi zote zilizo sahihi za vitenzi na vinyambuliko vyao vya kutendeka (-ika / -eka):",
          "options": [
            "vunja -> vunjika, fanya -> fanyika, andika -> andikika, soma -> someka, elewa -> eleweka, tenda -> tendeka, haribu -> haribika.",
            "vunja -> vunjeka, fanya -> fanyeka, andika -> andikeka.",
            "soma -> somika, elewa -> elewika, tenda -> tendika.",
            "Kauli ya kutendeka ni sawa kabisa na kauli ya kutendwa bila tofauti yoyote ya maana."
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi vya «a, i, u» huchukua «-ika» (vunjika, fanyika, andikika, haribika) na «e, o» huchukua «-eka» (someka, eleweka, tendeka)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u20-l3": {
    "id": "sw-u20-l3",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 3,
    "title": "Upanuzi wa Kauli ya Kutendekana (-ikana / -ekana: Generalized Stative & Potentiality)",
    "level": "B2",
    "objective": "Kutambua na kutumia umbo lililopanuliwa la kutendekana (-ikana / -ekana) kueleza upatikanaji, kuonekana, kujulikana, na uwezekano wa jumla (general accessibility and potentiality).",
    "presentation": {
      "explanation": "Upanuzi wa Kauli ya Kutendekana katika Kiswahili (-ikana / -ekana):\n\nVitenzi kadhaa vya Kiswahili huchukua muundo mseto wa **-ikana / -ekana** (mchanganyiko wa kiambishi cha kutendeka *-ika/-eka* na kutendana *-ana*) kueleza **hali au uwezekano mpana na wa kudumu (broad potentiality, accessibility, or general state)**:\n\n1. **Vitenzi Vikuu vya Kutendekana**:\n   - *pata* (get) -> *patika* -> **patikana** (be available / accessible / obtainable / caught)\n   - *ona* (see) -> *oneka* -> **onekana** (be visible / appear / seem / be apparent)\n   - *jua* (know) -> *julika* -> **julikana** (be well known / renowned / famous)\n   - *weza* (be able) -> **wezekana** (be possible / feasible)\n   - *kula* (eat) -> *lika* -> **likana** (be edible)\n   - *kunywa* (drink) -> **nyweka** / **nywekana** (be drinkable / potable)\n   - *shinda* (win/overcome) -> **shindikana** (be impossible / unconquerable).\n\n2. **Upatanisho wa Ngeli na Sentensi za Hali (Stative Concord)**:\n   - Vitenzi hivi mara nyingi huchukua upatanisho wa ngeli ya I-ZI (*dawa zinapatikana*), YA (*mambo yanawezekana*), au kiambishi cha hali ya jumla *i-* (*inawezekana*, *inaonekana*):\n     - *Inaonekana mvua itanyesha leo.* (It seems rain will fall today.)\n     - *Jambo hili haliwezekani kamwe.* (This matter is completely impossible.)",
      "examples": [
        {
          "target": "Dawa za kisasa zinapatikana kwa urahisi katika maduka yote ya dawa mjini.",
          "reading": "Da-wa za ki-sa-sa zi-na-pa-ti-ka-na kwa u-ra-hi-si ka-ti-ka ma-du-ka yo-te ya da-wa mji-ni. [ˈdɑwɑ zɑ kiˈsɑsɑ zinɑpɑtiˈkɑnɑ kwɑ urɑˈhisi ˈkɑtikɑ mɑˈdukɑ ˈjɔtɛ jɑ ˈdɑwɑ mʤiˈni] (DAH-wah zah kee-SAH-sah zee-nah-pah-tee-KAH-nah kwah oo-rah-HEE-see KAH-tee-kah mah-DOO-kah YOH-tay yah DAH-wah m-jee-NEE)",
          "translation": "Modern medicines are available [zinapatikana: pata -> patikana] easily in all pharmacies in town."
        },
        {
          "target": "Mwanasayansi huyo anajulikana kote barani Afrika kwa uvumbuzi wake mkubwa wa nishati.",
          "reading": "Mwa-na-sa-ya-nsi hu-yo a-na-ju-li-ka-na ko-te ba-ra-ni A-fri-ka kwa u-vu-mbu-zi wa-ke mku-bwa wa ni-sha-ti. [mwɑnɑsɑˈjɑnsi ˈhujɔ ɑnɑʤuliˈkɑnɑ ˈkɔtɛ bɑˈrɑni ˈɑfrikɑ kwɑ uvumbuˈzi ˈwɑkɛ ˈmkubwɑ wɑ niˈʃɑti] (mwah-nah-sah-YAHN-see HOO-yoh ah-nah-joo-lee-KAH-nah KOH-tay bah-RAH-nee AHF-ree-kah kwah oo-voom-BOO-zee WAH-kay M-KOO-bwah wah nee-SHAH-tee)",
          "translation": "That scientist is well known [anajulikana: jua -> julikana] across the African continent for his great energy innovation."
        },
        {
          "target": "Je, inawezekana kukamilisha ujenzi wa daraja hili kabla ya msimu wa mvua kuanza?",
          "reading": "Je, i-na-we-ze-ka-na ku-ka-mi-li-sha u-je-nzi wa da-ra-ja hi-li ka-bla ya msi-mu wa mvu-a ku-a-nza? [ʤɛ inɑwɛzɛˈkɑnɑ kukɑmiˈliʃɑ uˈʤɛnzi wɑ dɑˈrɑʤɑ ˈhili ˈkɑblɑ jɑ msiˈmu wɑ ˈmvuɑ kuˈɑnzɑ] (JAY, ee-nah-way-zay-KAH-nah koo-kah-mee-LEE-shah oo-JAYN-zee wah dah-RAH-jah HEE-lee KAH-blah yah m-SEE-moo wah MVOO-ah koo-AHN-zah)",
          "translation": "Is it possible [inawezekana: weza -> wezekana] to complete the construction of this bridge before the rainy season starts?"
        }
      ],
      "mnemonics": [
        "Kutendekana Matrix: pata -> patikana (available); ona -> onekana (visible/seem); jua -> julikana (famous); weza -> wezekana (possible); shinda -> shindikana (impossible)!"
      ],
      "culturalNotes": [
        "Kauli 'Inawezekana, timiza wajibu wako' ni kaulimbiu maarufu ya uhamasishaji wa kijamii inayotumika katika kampeni za maendeleo Afrika Mashariki."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Umbo la kutendekana la kitenzi \"pata\" linalomaanisha 'kuwa rahisi kupatikana au kuwepo' ni lipi?",
          "options": [
            "patikana (Be available / obtainable - Correct extended stative formation)",
            "patana (Hii ni kauli ya kutendana: agree/make peace)",
            "patika (Umbo fupi la kutendeka)",
            "patiwa (Hii ni kauli ya kutendewa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «pata» huunda «patikana» kueleza upatikanaji wa kitu: *huduma zinapatikana* (services are available)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi \"jua\" (know) kinapobadilishwa kuwa kauli ya kutendekana kueleza 'mtu kuwa maarufu / anayejulikana na watu wengi', neno sahihi huwa lipi?",
          "options": [
            "julikana (Be well known / famous / renowned - Correct stative extension)",
            "juana (Kuwa watu wanafahamiana)",
            "julisha (Kufahamisha taarifa - kutendesha)",
            "juliwa (Kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «jua» hubadilika kuwa «julikana» katika kauli ya kutendekana: *kiongozi anajulikana sana*."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha iliyo sahihi kabisa ya vitenzi vya kutendekana (-ikana / -ekana):",
          "options": [
            "pata -> patikana, ona -> onekana, jua -> julikana, weza -> wezekana, shinda -> shindikana.",
            "pata -> patikisha, ona -> onekisha, jua -> julikisha.",
            "pata -> patikana, ona -> onana, jua -> juana (mchanganyiko usio na mpangilio).",
            "Viambishi vya -ikana na -ekana havipo katika lugha sanifu ya Kiswahili."
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi sahihi vya kutendekana ni patikana, onekana, julikana, wezekana, na shindikana."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u20-l4": {
    "id": "sw-u20-l4",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 4,
    "title": "Vitenzi vya Kigeni katika Kauli ya Kutendana na Kutendeka (-iana, -ika / -eka)",
    "level": "B2",
    "objective": "Kutambua na kutumia unyambulishaji wa vitenzi vya asili ya Kiarabu na kigeni katika kauli ya kutendana (-iana) na kauli ya kutendeka (-ika / -eka).",
    "presentation": {
      "explanation": "Vitenzi vya Kigeni katika Kauli ya Kutendana na Kutendeka:\n\nVitenzi vyenye asili ya kigeni (hasa Kiarabu) vinavyoishia na irabu *-i, -u, au -e* hunyambulishwa kwa kufuata miongozo ifuatayo:\n\n1. **Kauli ya Kutendana kwa Vitenzi vya Kigeni (-iana / -ana)**:\n   - *heshimu* (respect) -> **heshimiana** (respect each other)\n   - *shukuru* (thank) -> **shukuriana** (thank one another)\n   - *samehe* (forgive) -> **sameheana** (forgive each other)\n   - *jadili* (discuss) -> **jadiliana** (deliberate / debate together)\n   - *wasili* (arrive) -> **wasiliana** (communicate with each other)\n   - *ahidi* (promise) -> **ahidiana** (promise one another).\n\n2. **Kauli ya Kutendeka kwa Vitenzi vya Kigeni (-ika / -eka)**:\n   - *badili* (change / alter) -> **badilika** (change / be altered / transform)\n   - *jaribu* (test / try) -> **jaribika** (be testable / feasible to try)\n   - *kabili* (face / confront) -> **kabilika** (be manageable / addressable)\n   - *thibiti* (be firm) -> **thibitika** (be confirmed / verified)\n   - *starehe* (relax) -> **stareheka** (be relaxed / comfortable)\n   - *safiri* (travel) -> **safirika** (be navigable / travel-friendly).",
      "examples": [
        {
          "target": "Wajumbe wamejadiliana kwa kina na wamesameheana tofauti zao zote za kisiasa.",
          "reading": "Wa-ju-mbe wa-me-ja-di-lia-na kwa ki-na na wa-me-sa-me-he-a-na to-fa-u-ti za-o zo-te za ki-si-a-sa. [wɑˈʤumbɛ wɑmɛʤɑdiˈliɑnɑ kwɑ ˈkinɑ nɑ wɑmɛsɑmɛhɛˈɑnɑ tɔfɑˈuti ˈzɑɔ ˈzɔtɛ zɑ kisiˈɑsɑ] (wah-JOOM-bay wah-may-jah-dee-lee-AH-nah kwah KEE-nah nah wah-may-sah-may-hay-AH-nah toh-fah-OO-tee ZAH-oh ZOH-tay zah kee-see-AH-sah)",
          "translation": "The delegates debated with each other [wamejadiliana: jadili -> jadiliana] deeply and forgave each other [wamesameheana: samehe -> sameheana] all their political differences."
        },
        {
          "target": "Hali ya hewa inabadilika kwa kasi lakini changamoto hizi zinakabilika kwa mipango thabiti.",
          "reading": "Ha-li ya he-wa i-na-ba-di-li-ka kwa ka-si la-ki-ni cha-nga-mo-to hi-zi zi-na-ka-bi-li-ka kwa mpa-ngo tha-bi-ti. [ˈhɑli jɑ ˈhɛwɑ inɑbɑdiˈlikɑ kwɑ ˈkɑsi lɑˈkini tʃɑŋɡɑˈmɔtɔ ˈhizi zinɑkɑbiˈlikɑ kwɑ ˈmpɑŋɡɔ θɑˈbiti] (HAH-lee yah HAY-wah ee-nah-bah-dee-LEE-kah kwah KAH-see lah-KEE-nee chahn-gah-MOH-toh HEE-zee zee-nah-kah-bee-LEE-kah kwah M-PAHN-goh thah-BEE-tee)",
          "translation": "The weather is changing [inabadilika: badili -> badilika] rapidly, but these challenges are manageable [zinakabilika: kabili -> kabilika] through firm plans."
        },
        {
          "target": "Tunawasiliana mara kwa mara kupitia barua pepe na njia za kidijitali za kisasa.",
          "reading": "Tu-na-wa-si-lia-na ma-ra kwa ma-ra ku-pi-tia ba-ru-a pe-pe na njia za ki-di-ji-ta-li za ki-sa-sa. [tunɑwɑsiˈliɑnɑ ˈmɑrɑ kwɑ ˈmɑrɑ kupiˈtiɑ bɑˈruɑ ˈpɛpɛ nɑ ˈnʤiɑ zɑ kidiʤiˈtɑli zɑ kiˈsɑsɑ] (too-nah-wah-see-lee-AH-nah MAH-rah kwah MAH-rah koo-pee-TEE-ah bah-ROO-ah PAY-pay nah N-JEE-ah zah kee-dee-jee-TAH-lee zah kee-SAH-sah)",
          "translation": "We communicate with each other [tunawasiliana: wasili -> wasiliana] regularly via email and modern digital means."
        }
      ],
      "mnemonics": [
        "Vitenzi vya Kigeni: jadili -> jadiliana (kutendana); samehe -> sameheana (kutendana); badili -> badilika (kutendeka); kabili -> kabilika (kutendeka)!"
      ],
      "culturalNotes": [
        "Neno 'Kusameheana' ni sehemu muhimu ya taratibu za kimila za usuluhishi (Baraza la Wazee) katika jamii za mwambao wa Bahari ya Hindi."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kauli ya kutendana ya kitenzi cha Kiarabu \"jadili\" (discuss / debate) inayomaanisha kubadilishana mawazo kwa pamoja ni ipi?",
          "options": [
            "jadiliana (Discuss / debate with each other - Correct reciprocal derivation)",
            "jadilika (Kauli ya kutendeka)",
            "jadilisha (Kauli ya kutendesha)",
            "jadiliwa (Kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «jadili» hubadilika kuwa «jadiliana» katika kauli ya kutendana (discuss/debate together)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kitenzi cha Kiarabu \"badili\" (change / alter) kinapobadilishwa kuwa kauli ya kutendeka yenye maana ya 'kubadilika kwenyewe bila mtendaji', neno sahihi huwa lipi?",
          "options": [
            "badilika (Change / transform / be altered - Correct stative loanword form)",
            "badilisha (Kauli ya kutendesha)",
            "badiliana (Kauli ya kutendana: exchange with each other)",
            "badiliwa (Kauli ya kutendwa)"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «badili» huchukua «-ika» kupata «badilika» (change / be altered)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua orodha iliyo sahihi kabisa ya vitenzi vya kigeni katika kauli ya kutendana na kutendeka:",
          "options": [
            "Kutendana: heshimiana, shukuriana, sameheana, jadiliana, wasiliana. Kutendeka: badilika, jaribika, kabilika, thibitika.",
            "Kutendana: heshimika, shukurika, sameheka. Kutendeka: badiliana, jaribiana.",
            "Vitenzi vya Kiarabu havina kauli ya kutendana wala kutendeka katika sarufi ya Kiswahili.",
            "Kutendana: heshimisha, shukurisha. Kutendeka: badilishwa, jaribiwa."
          ],
          "answerIndex": 0,
          "explanation": "Vitenzi vya kigeni hunyambulishwa kwa ufasaha kuwa heshimiana/sameheana (kutendana) na badilika/kabilika (kutendeka)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "sw-u20-l5": {
    "id": "sw-u20-l5",
    "subject": "swahili",
    "unit": 20,
    "lessonNumber": 5,
    "title": "Muhtasari wa Kauli ya Kutendana na Kutendeka na Mseto wa Vinyambuliko (Reciprocal & Stative Grand Synthesis)",
    "level": "B2",
    "objective": "Kuunganisha mada zote za Unit 20: kauli ya kutendana (-ana), kauli ya kutendeka (-ika / -eka), upanuzi wa kutendekana (-ikana / -ekana), vinyambuliko vya kigeni, na kuunda miundo mseto ya vinyambuliko vyote vikuu vya vitenzi vya Kiswahili (Kutendeana, Kutendeshena, Kutendekana).",
    "presentation": {
      "explanation": "Muhtasari Mkuu wa Kauli ya Kutendana na Kutendeka (Grand Synthesis):\n\n1. **Muundo Kamili wa Vinyambuliko Vikuu vya Kiswahili (Master Verb Extension Matrix)**:\n   - **Kutenda (Base Active)**: *penda, soma, vunja, andika, badili*\n   - **Kutendwa (Passive: -wa / -liwa / -lewa)**: *pendwa, somwa, vunjwa, andikwa, badiliwa*\n   - **Kutendea (Applicative: -ia / -ea / -lia / -lea)**: *pendea, somea, vunjia, andikia, badilia*\n   - **Kutendesha (Causative: -isha / -esha / -za / -sha)**: *pendeza, somesha, vunjisha, andikisha, badilisha*\n   - **Kutendana (Reciprocal: -ana)**: *pendana, saidiana, onana, jadiliana, wasiliana*\n   - **Kutendeka (Stative: -ika / -eka)**: *pendeka, someka, vunjika, andikika, badilika*\n   - **Kutendekana (Broad Stative: -ikana / -ekana)**: *patikana, onekana, julikana, wezekana, shindikana*.\n\n2. **Vinyambuliko Mseto Vilivyopangwa (Stacked Multi-Extension Forms)**:\n   - **Kutendea + Kutendana = Kutendeana** (*Reciprocal Applicative: do for one another*):\n     - *andika -> andikia -> **andikiana*** (*Wanafunzi wanaandikiana barua.*)\n     - *piga -> pigia -> **pigiana*** (*Wanapigiana simu.*)\n     - *saidia -> saidia -> **saidiana***.\n   - **Kutendesha + Kutendana = Kutendeshana** (*Reciprocal Causative: cause one another*):\n     - *soma -> somesha -> **someshana*** (*Wanafunzi wanasomeshana.*)\n     - *ona -> onyesha -> **onyeshana*** (*Wanaonyeshana mifano.*).",
      "examples": [
        {
          "target": "Wanafunzi wanaelewana vizuri, wanasaidiana masomoni, na matokeo mazuri yanaonekana wazi katika mitihani yao.",
          "reading": "Wa-na-fu-nzi wa-na-e-le-wa-na vi-zu-ri, wa-na-sa-i-dia-na ma-so-mo-ni, na ma-to-ke-o ma-zu-ri ya-na-o-ne-ka-na wa-zi ka-ti-ka mti-ha-ni ya-o. [wɑnɑˈfunzi wɑnɑɛlɛˈwɑnɑ viˈzuri wɑnɑsɑiˈdiɑnɑ mɑsɔˈmɔni nɑ mɑtɔkɛˈɔ mɑˈzuri jɑnɑɔnɛˈkɑnɑ ˈwɑzi ˈkɑtikɑ mtiˈhɑni ˈjɑɔ] (wah-nah-FOON-zee wah-nah-ay-lay-WAH-nah vee-ZOO-ree, wah-nah-sah-ee-dee-AH-nah mah-soh-MOH-nee, nah mah-toh-KAY-oh mah-ZOO-ree yah-nah-oh-nay-KAH-nah WAH-zee KAH-tee-kah m-tee-HAH-nee YAH-oh)",
          "translation": "Students get along well [wanaelewana: elewa -> elewana], help each other [wanasaidiana: saidia -> saidiana] in studies, and good results are clearly visible [yanaonekana: ona -> onekana] in their exams."
        },
        {
          "target": "Mipango ya maendeleo inafanyika kwa ufanisi mkubwa pale wananchi wanapowasiliana na kukubaliana kuhusu vipaumbele vya jamii.",
          "reading": "Mpa-ngo ya ma-e-nde-le-o i-na-fa-nyi-ka kwa u-fa-ni-si mku-bwa pa-le wa-na-nchi wa-na-po-wa-si-lia-na na ku-ku-ba-lia-na ku-hu-su vi-pa-u-mbe-le vya ja-mi-i. [ˈmpɑŋɡɔ jɑ mɑɛndɛˈlɛɔ inɑfɑˈɲikɑ kwɑ ufɑˈnisi ˈmkubwɑ ˈpɑlɛ wɑnɑˈntʃi wɑnɑpɔwɑsiˈliɑnɑ nɑ kukubɑˈliɑnɑ kuˈhusu vipɑuˈmbɛlɛ vjɑ ʤɑˈmiː] (M-PAHN-goh yah mah-ayn-day-LAY-oh ee-nah-fah-NYEE-kah kwah oo-fah-NEE-see M-KOO-bwah PAH-lay wah-nahn-CHEE wah-nah-poh-wah-see-lee-AH-nah nah koo-koo-bah-lee-AH-nah koo-HOO-soo vee-pah-oom-BAY-lay vyah jah-MEE-ee)",
          "translation": "Development plans are accomplished [inafanyika: fanya -> fanyika] with great efficiency when citizens communicate with each other [wanapowasiliana: wasili -> wasiliana] and agree [kukubaliana] on community priorities."
        },
        {
          "target": "Umahiri wa kauli ya kutendana na kauli ya kutendeka unakamilisha mzunguko wa vinyambuliko vikuu vya vitenzi katika sarufi ya Kiswahili, ukimwezesha msemaji kueleza vitendo shirikishi, hali za kimaumbile na uwezekano wa matukio kwa usahihi usio na shaka.",
          "reading": "U-ma-hi-ri wa ka-u-li ya ku-te-nda-na na ka-u-li ya ku-te-nde-ka u-na-ka-mi-li-sha mzu-ngu-ko wa vi-nya-mbu-li-ko vi-ku-u vya vi-te-nzi ka-ti-ka sa-ru-fi ya Ki-swa-hi-li, u-ki-mwe-ze-sha mse-ma-ji ku-e-le-za vi-te-ndo shi-ri-ki-shi, ha-li za ki-ma-u-mbi-le na u-we-ze-ka-no wa ma-tu-ki-o kwa u-sa-hi-hi u-si-o na sha-ka. [umɑˈhiri wɑ kɑˈuli jɑ kutɛˈndɑnɑ nɑ kɑˈuli jɑ kutɛˈndɛkɑ unɑkɑmiˈliʃɑ mzuˈŋɡukɔ wɑ viɲɑmbuˈlikɔ viˈkuː vjɑ viˈtɛnzi ˈkɑtikɑ sɑˈrufi jɑ kiswɑˈhili ukimwɛzɛˈʃɑ msɛˈmɑʤi kuɛˈlɛzɑ viˈtɛndɔ ʃiriˈkiʃi ˈhɑli zɑ kimɑuˈmbilɛ nɑ uwɛzɛˈkɑnɔ wɑ mɑtuˈkiɔ kwɑ usɑˈhihi ˈusiɔ nɑ ˈʃɑkɑ] (oo-mah-HEE-ree wah kah-OO-lee yah koo-tayn-DAH-nah nah kah-OO-lee yah koo-tayn-DAY-kah oo-nah-kah-mee-LEE-shah m-zoon-GOO-koh wah vee-nyahm-boo-LEE-koh vee-KOO-oo vyah vee-TAYN-zee KAH-tee-kah sah-ROO-fee yah kee-swah-HEE-lee, oo-keem-way-ZAY-shah m-say-MAH-jee koo-ay-LAY-zah vee-TAYN-doh shee-ree-KEE-shee, HAH-lee zah kee-mah-oom-BEE-lay nah oo-way-zay-KAH-noh wah mah-too-KEE-oh kwah oo-sah-HEE-hee OO-see-oh nah SHAH-kah)",
          "translation": "Mastery of reciprocal and stative forms [reciprocal & stative grand synthesis: kauli ya kutendana na kutendeka] completes the primary verb extension system in Swahili grammar, enabling unambiguous expression of mutual actions, resulting states, and potentiality."
        }
      ],
      "mnemonics": [
        "Vinyambuliko Grand Synthesis: andikia -> andikiana (pigiana simu); somesha -> someshana (fundishana); fanya -> fanyika (onekana, patikana, wezekana)!"
      ],
      "culturalNotes": [
        "Falsafa ya Ubuntu / Utu katika jamii za Kibantu inajengwa juu ya maneno ya kutendana: 'Mtu ni mtu kwa sababu ya watu wengine' (I am because we are)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Katika sentensi «Marafiki wanapigiana simu kila jioni», mnyambuliko wa kitenzi unajumuisha kauli zipi?",
          "options": [
            "Kauli ya Kutendea na Kauli ya Kutendana (Applicative Reciprocal: piga -> pigia -> pigiana)",
            "Kauli ya Kutendesha na Kauli ya Kutendwa",
            "Kauli ya Kutendeka pekee",
            "Kauli ya Kutenda ya kawaida"
          ],
          "answerIndex": 0,
          "explanation": "Kitenzi «wanapigiana» kimetokana na: piga -> pigia (kutendea: call to/for) -> pigiana (kutendana: call one another)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sentensi ipi inachanganya kauli ya kutendana (reciprocal), kutendeka (stative), na kutendekana (broad potentiality) kwa ufasaha?",
          "options": [
            "Wafanyakazi wanashauriana kwa heshima, kazi zote zinafanyika kwa wakati, na mafanikio yanaonekana wazi. (Employees consult each other [wanashauriana], all tasks get done [zinafanyika], and success is clearly visible [yanaonekana].)",
            "Wafanyakazi walifanya kazi bila kusemeshana au kufanya chochote.",
            "Kazi zote zilifanywa na mkurugenzi pekee yake.",
            "Kauli ya kutendana haiwezi kutumika pamoja na kauli ya kutendeka katika muktadha mmoja."
          ],
          "answerIndex": 0,
          "explanation": "«wanashauriana» (kutendana), «zinafanyika» (kutendeka), na «yanaonekana» (kutendekana) zinakusanya kauli zote tatu kwa usahihi wa kisarufi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Chagua sentensi ya kilele inayowakilisha umahiri kamili wa Unit 20 ya Kauli ya Kutendana na Kutendeka katika lugha ya Kiswahili:",
          "options": [
            "Wanajamii wanasaidiana katika miradi ya pamoja, changamoto zinakabilika kwa umoja wao, na inathibitika kwamba maendeleo ya kweli yanawezekana pale watu wanapopendana. (Reciprocal active [wanasaidiana, wanapopendana], loanword stative [zinakabilika, inathibitika], and broad stative [yanawezekana].)",
            "Wanajamii hawasaidiani na hakuna jambo linalowezekana.",
            "Watu wote walikaa kimya bila kufanya jambo lolote la maendeleo.",
            "Vinyambuliko vya vitenzi havina umuhimu wowote katika mawasiliano ya kila siku."
          ],
          "answerIndex": 0,
          "explanation": "«Wanajamii wanasaidiana katika miradi ya pamoja, changamoto zinakabilika kwa umoja wao, na inathibitika kwamba maendeleo ya kweli yanawezekana pale watu wanapopendana.» inajumuisha nyanja zote za kauli ya kutendana na kutendeka kwa ukamilifu."
        }
      ],
      "passThreshold": 0.8
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
