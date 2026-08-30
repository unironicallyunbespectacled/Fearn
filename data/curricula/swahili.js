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
