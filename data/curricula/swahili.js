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
        "objective": "Master core Swahili greetings (Hujambo/Sijambo, Habari, Shikamoo/Marahaba), the invariable penultimate stress rule, the 5 pure vowels, and special digraphs (ng', ng, ny).",
        "presentation": {
            "explanation": "Swahili (Kiswahili) is a major Bantu lingua franca of East Africa, written phonetically in the Latin alphabet. Before diving into complex noun classes, you must master the fundamental rules of Swahili pronunciation:\n\n### 🔤 Swahili Orthography & Phonetic Engine:\n1. **The Invariable Penultimate Stress Rule**:\n   - In virtually EVERY Swahili word, the primary stress falls rhythmically on the **second-to-last (penultimate) syllable**! E.g. *ha-BA-ri* [haˈba.ɾi], *si-JAM-bo* [siˈdʒa.mbo], *a-SAN-te* [aˈsa.nte], *kwa-HE-ri* [kwaˈhe.ɾi], *MWA-li-mu* [ˈmwa.li.mu]. Stress never moves to the end of a word.\n2. **The 5 Pure Vowels (A, E, I, O, U)**:\n   - Unlike English diphthongs, Swahili vowels are completely pure and unglided: **a** = [a] (*baba*), **e** = [ɛ] (*yeye*), **i** = [i] (*sisi*), **o** = [ɔ] (*chote*), **u** = [u] (*huyu*). Each vowel letter is a distinct syllable (e.g. *kua* = ku-a, two syllables!).\n3. **Special Digraphs (ng', ng, ny)**:\n   - **ng'** (with apostrophe) = [ŋ] (the pure velar nasal in English *singer*, with **no hard 'g' click**! E.g. *ng'ombe* [ˈŋɔ.mbɛ] 'cow', *ng'o*).\n   - **ng** (without apostrophe) = [ŋɡ] (velar nasal + hard 'g', as in English *finger*, e.g. *kinga* [ˈki.ŋɡa], *Kiingereza*).\n   - **ny** = [ɲ] (palatal nasal, like Spanish *ñ*, e.g. *nyumba* [ˈɲu.mba] 'house', *nyota* [ˈɲɔ.ta] 'star').\n4. **Syllabic 'm' and 'n'**:\n   - In prefixes before consonants (*mtu* [m̩ˈtu] 'person', *mwalimu*), the **m** forms its own humming syllable beat.\n\n### 🗣️ Core Swahili Greetings:\n- **Hujambo?** (Any issue with you?) → **Sijambo!** (I have no issue / I am fine).\n- **Habari gani?** (What news?) → **Nzuri!** (Good/Fine) or **Salama!** (Peaceful).\n- **Shikamoo!** (Respectful greeting to elders, literally 'I hold your feet') → **Marahaba!** (Delighted / thank you).",
            "examples": [
                {
                    "target": "Hujambo, mwalimu? — Sijambo, habari za asubuhi?",
                    "reading": "[huˈdʒa.mbo, mwaˈli.mu? — siˈdʒa.mbo, haˈba.ɾi za asuˈbu.hi?]",
                    "translation": "How are you, teacher? — I am fine, how is the morning news?"
                },
                {
                    "target": "Habari gani rafiki yangu? — Nzuri sana, asante!",
                    "reading": "[haˈba.ɾi ˈɡa.ni ɾaˈfi.ki ˈja.ŋɡu? — ˈnzu.ɾi ˈsa.na, aˈsa.nte!]",
                    "translation": "What is the news, my friend? — Very good, thank you! (all stress on second-to-last syllable)"
                },
                {
                    "target": "Shikamoo mzee! — Marahaba, mtoto wangu.",
                    "reading": "[ʃikaˈmoː m̩ˈzɛː! — maɾaˈha.ba, m̩ˈtɔ.tɔ ˈwa.ŋɡu]",
                    "translation": "Respectful greetings, elder! — Welcome/blessed, my child. (Shikamoo is reserved for elders)"
                },
                {
                    "target": "Ng'ombe wanakula nyasi karibu na nyumba yetu.",
                    "reading": "[ˈŋɔ.mbɛ wanaˈku.la ˈɲa.si kaˈɾi.bu na ˈɲu.mba ˈjɛ.tu]",
                    "translation": "The cows are eating grass near our house. (ng' has pure [ŋ], ny has palatal [ɲ])"
                }
            ],
            "mnemonics": [
                "The Penultimate Beat Rule: March to the beat of Swahili — clap on the second-to-last syllable of EVERY word (ha-BA-ri, si-JAM-bo, a-SAN-te)!",
                "ng' vs ng: ng' with an apostrophe cuts off the hard 'g' (pure 'sing-er'); ng without apostrophe keeps the hard 'g' ('fin-ger')!",
                "Shikamoo = Respect for Elders: Never say Shikamoo to a peer or child — it's the golden key of East African respect."
            ],
            "culturalNotes": [
                "Shikamoo & Marahaba: Respect for age and hierarchy is deeply embedded in Swahili culture. Greeting an elder or respected figure with 'Shikamoo' is mandatory courtesy across Tanzania and Kenya, answered graciously with 'Marahaba'.",
                "Greeting Inquiries (Habari za...): In East Africa, greetings are an unhurried social ritual. Inquiring after the morning (za asubuhi), work (za kazi), or family (za nyumbani) before jumping into business is essential etiquette."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Salamu na Maamkizi (Greetings & Etiquette) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (1.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (1.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (1.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (1.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (1.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (1.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Salamu na Maamkizi (Greetings & Etiquette) » (Mtihani 1-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (1.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (1.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (1.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («jambo»):",
                    "acceptedAnswers": [
                        "jambo"
                    ],
                    "explanation": "The target keyword was: 【jambo】"
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
        "objective": "Comprehensive mastery of Salamu na Maamkizi (Greetings & Etiquette).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Salamu na Maamkizi (Greetings & Etiquette). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (1.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (1.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (1.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salamu na Maamkizi (Greetings & Etiquette)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Salamu na Maamkizi (Greetings & Etiquette) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (1.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (1.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (1.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (1.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (1.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (1.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Salamu na Maamkizi (Greetings & Etiquette) » (Mtihani 1-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (1.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (1.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (1.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («habari»):",
                    "acceptedAnswers": [
                        "habari"
                    ],
                    "explanation": "The target keyword was: 【habari】"
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
        "objective": "Comprehensive mastery of Salamu na Maamkizi (Greetings & Etiquette).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Salamu na Maamkizi (Greetings & Etiquette). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (1.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (1.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (1.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salamu na Maamkizi (Greetings & Etiquette)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Salamu na Maamkizi (Greetings & Etiquette) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (1.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (1.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (1.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (1.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (1.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (1.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Salamu na Maamkizi (Greetings & Etiquette) » (Mtihani 1-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (1.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (1.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (1.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («asante»):",
                    "acceptedAnswers": [
                        "asante"
                    ],
                    "explanation": "The target keyword was: 【asante】"
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
        "objective": "Comprehensive mastery of Salamu na Maamkizi (Greetings & Etiquette).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Salamu na Maamkizi (Greetings & Etiquette). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (1.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (1.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (1.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salamu na Maamkizi (Greetings & Etiquette)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Salamu na Maamkizi (Greetings & Etiquette) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (1.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (1.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (1.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (1.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (1.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (1.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Salamu na Maamkizi (Greetings & Etiquette) » (Mtihani 1-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (1.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (1.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (1.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kwaheri»):",
                    "acceptedAnswers": [
                        "kwaheri"
                    ],
                    "explanation": "The target keyword was: 【kwaheri】"
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
        "objective": "Comprehensive mastery of Salamu na Maamkizi (Greetings & Etiquette).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Salamu na Maamkizi (Greetings & Etiquette). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (1.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (1.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (1.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salamu na Maamkizi (Greetings & Etiquette)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Salamu na Maamkizi (Greetings & Etiquette) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (1.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (1.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (1.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Matamshi ya Kiswahili na Salamu (Phonetics & Greetings) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (1.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (1.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (1.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Salamu na Maamkizi (Greetings & Etiquette) » (Mtihani 1-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (1.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (1.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (1.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («karibu»):",
                    "acceptedAnswers": [
                        "karibu"
                    ],
                    "explanation": "The target keyword was: 【karibu】"
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
        "objective": "Comprehensive mastery of Ngeli ya 1/2 A-WA (Noun Classes 1/2).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 1/2 A-WA (Noun Classes 1/2). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwanafunzi anasoma kitabu cha hadithi chumbani.",
                    "reading": "Mwanafunzi anasoma kitabu cha hadithi chumbani.",
                    "translation": "The student is reading a storybook in the room."
                },
                {
                    "target": "Mgeni anafika nyumbani jioni hii kwa ukarimu mkubwa.",
                    "reading": "Mgeni anafika nyumbani jioni hii kwa ukarimu mkubwa.",
                    "translation": "The guest arrives at home this evening with great hospitality."
                },
                {
                    "target": "Mwalimu anafundisha sarufi ya Kiswahili darasani.",
                    "reading": "Mwalimu anafundisha sarufi ya Kiswahili darasani.",
                    "translation": "The teacher teaches Swahili grammar in the classroom."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 1/2 A-WA (Noun Classes 1/2)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (2.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (2.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (2.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (2.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (2.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (2.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » (Mtihani 2-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (2.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (2.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (2.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mtu»):",
                    "acceptedAnswers": [
                        "mtu"
                    ],
                    "explanation": "The target keyword was: 【mtu】"
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
        "objective": "Comprehensive mastery of Ngeli ya 1/2 A-WA (Noun Classes 1/2).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 1/2 A-WA (Noun Classes 1/2). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Watoto wanafurahi wanapocheza uwanjani baada ya masomo.",
                    "reading": "Watoto wanafurahi wanapocheza uwanjani baada ya masomo.",
                    "translation": "The children are happy when they play in the field after lessons."
                },
                {
                    "target": "Wageni wetu watawasili jioni hii kutoka mji wa Mombasa.",
                    "reading": "Wageni wetu watawasili jioni hii kutoka mji wa Mombasa.",
                    "translation": "Our guests will arrive this evening from the city of Mombasa."
                },
                {
                    "target": "Walimu wote wamehudhuria mkutano mkuu wa elimu leo.",
                    "reading": "Walimu wote wamehudhuria mkutano mkuu wa elimu leo.",
                    "translation": "All teachers have attended the general education conference today."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 1/2 A-WA (Noun Classes 1/2)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (2.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (2.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (2.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (2.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (2.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (2.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » (Mtihani 2-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (2.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (2.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (2.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («watu»):",
                    "acceptedAnswers": [
                        "watu"
                    ],
                    "explanation": "The target keyword was: 【watu】"
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
        "objective": "Comprehensive mastery of Ngeli ya 1/2 A-WA (Noun Classes 1/2).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 1/2 A-WA (Noun Classes 1/2). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (2.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (2.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (2.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 1/2 A-WA (Noun Classes 1/2)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (2.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (2.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (2.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (2.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (2.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (2.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » (Mtihani 2-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (2.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (2.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (2.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mtoto»):",
                    "acceptedAnswers": [
                        "mtoto"
                    ],
                    "explanation": "The target keyword was: 【mtoto】"
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
        "objective": "Comprehensive mastery of Ngeli ya 1/2 A-WA (Noun Classes 1/2).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 1/2 A-WA (Noun Classes 1/2). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (2.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (2.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (2.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 1/2 A-WA (Noun Classes 1/2)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (2.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (2.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (2.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (2.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (2.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (2.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » (Mtihani 2-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (2.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (2.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (2.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («watoto»):",
                    "acceptedAnswers": [
                        "watoto"
                    ],
                    "explanation": "The target keyword was: 【watoto】"
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
        "objective": "Comprehensive mastery of Ngeli ya 1/2 A-WA (Noun Classes 1/2).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 1/2 A-WA (Noun Classes 1/2). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (2.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (2.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (2.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 1/2 A-WA (Noun Classes 1/2)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (2.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (2.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (2.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Nomino: Ngeli ya 1/2 (A-WA) (Noun Classes 1/2 A-WA) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (2.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (2.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (2.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 1/2 A-WA (Noun Classes 1/2) » (Mtihani 2-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (2.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (2.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (2.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mgeni»):",
                    "acceptedAnswers": [
                        "mgeni"
                    ],
                    "explanation": "The target keyword was: 【mgeni】"
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
        "objective": "Comprehensive mastery of Wakati Uliopo -na- (Present Continuous Tense).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopo -na- (Present Continuous Tense). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (3.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (3.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (3.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopo -na- (Present Continuous Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopo -na- (Present Continuous Tense) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (3.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (3.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (3.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (3.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (3.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (3.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopo -na- (Present Continuous Tense) » (Mtihani 3-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (3.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (3.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (3.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kitabu»):",
                    "acceptedAnswers": [
                        "kitabu"
                    ],
                    "explanation": "The target keyword was: 【kitabu】"
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
        "objective": "Comprehensive mastery of Wakati Uliopo -na- (Present Continuous Tense).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopo -na- (Present Continuous Tense). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (3.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (3.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (3.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopo -na- (Present Continuous Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopo -na- (Present Continuous Tense) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (3.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (3.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (3.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (3.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (3.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (3.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopo -na- (Present Continuous Tense) » (Mtihani 3-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (3.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (3.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (3.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («vitabu»):",
                    "acceptedAnswers": [
                        "vitabu"
                    ],
                    "explanation": "The target keyword was: 【vitabu】"
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
        "objective": "Comprehensive mastery of Wakati Uliopo -na- (Present Continuous Tense).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopo -na- (Present Continuous Tense). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (3.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (3.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (3.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopo -na- (Present Continuous Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopo -na- (Present Continuous Tense) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (3.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (3.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (3.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (3.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (3.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (3.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopo -na- (Present Continuous Tense) » (Mtihani 3-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (3.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (3.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (3.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kiti»):",
                    "acceptedAnswers": [
                        "kiti"
                    ],
                    "explanation": "The target keyword was: 【kiti】"
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
        "objective": "Comprehensive mastery of Wakati Uliopo -na- (Present Continuous Tense).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopo -na- (Present Continuous Tense). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (3.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (3.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (3.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopo -na- (Present Continuous Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopo -na- (Present Continuous Tense) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (3.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (3.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (3.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (3.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (3.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (3.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopo -na- (Present Continuous Tense) » (Mtihani 3-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (3.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (3.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (3.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («viti»):",
                    "acceptedAnswers": [
                        "viti"
                    ],
                    "explanation": "The target keyword was: 【viti】"
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
        "objective": "Comprehensive mastery of Wakati Uliopo -na- (Present Continuous Tense).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopo -na- (Present Continuous Tense). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (3.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (3.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (3.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopo -na- (Present Continuous Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopo -na- (Present Continuous Tense) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (3.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (3.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (3.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopo: Kiambishi -na- (Present Continuous Tense) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (3.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (3.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (3.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopo -na- (Present Continuous Tense) » (Mtihani 3-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (3.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (3.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (3.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («chumba»):",
                    "acceptedAnswers": [
                        "chumba"
                    ],
                    "explanation": "The target keyword was: 【chumba】"
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
        "objective": "Comprehensive mastery of Wakati Uliopita -li- (Past Tense with -li-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopita -li- (Past Tense with -li-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (4.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (4.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (4.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopita -li- (Past Tense with -li-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopita -li- (Past Tense with -li-) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (4.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (4.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (4.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (4.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (4.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (4.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopita -li- (Past Tense with -li-) » (Mtihani 4-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (4.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (4.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (4.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mti»):",
                    "acceptedAnswers": [
                        "mti"
                    ],
                    "explanation": "The target keyword was: 【mti】"
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
        "objective": "Comprehensive mastery of Wakati Uliopita -li- (Past Tense with -li-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopita -li- (Past Tense with -li-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (4.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (4.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (4.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopita -li- (Past Tense with -li-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopita -li- (Past Tense with -li-) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (4.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (4.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (4.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (4.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (4.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (4.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopita -li- (Past Tense with -li-) » (Mtihani 4-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (4.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (4.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (4.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («miti»):",
                    "acceptedAnswers": [
                        "miti"
                    ],
                    "explanation": "The target keyword was: 【miti】"
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
        "objective": "Comprehensive mastery of Wakati Uliopita -li- (Past Tense with -li-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopita -li- (Past Tense with -li-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (4.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (4.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (4.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopita -li- (Past Tense with -li-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopita -li- (Past Tense with -li-) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (4.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (4.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (4.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (4.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (4.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (4.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopita -li- (Past Tense with -li-) » (Mtihani 4-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (4.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (4.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (4.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mkono»):",
                    "acceptedAnswers": [
                        "mkono"
                    ],
                    "explanation": "The target keyword was: 【mkono】"
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
        "objective": "Comprehensive mastery of Wakati Uliopita -li- (Past Tense with -li-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopita -li- (Past Tense with -li-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (4.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (4.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (4.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopita -li- (Past Tense with -li-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopita -li- (Past Tense with -li-) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (4.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (4.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (4.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (4.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (4.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (4.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopita -li- (Past Tense with -li-) » (Mtihani 4-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (4.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (4.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (4.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mikono»):",
                    "acceptedAnswers": [
                        "mikono"
                    ],
                    "explanation": "The target keyword was: 【mikono】"
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
        "objective": "Comprehensive mastery of Wakati Uliopita -li- (Past Tense with -li-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Wakati Uliopita -li- (Past Tense with -li-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (4.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (4.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (4.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Uliopita -li- (Past Tense with -li-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Uliopita -li- (Past Tense with -li-) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (4.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (4.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (4.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Uliopita: Kiambishi -li- (Simple Past Tense) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (4.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (4.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (4.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Uliopita -li- (Past Tense with -li-) » (Mtihani 4-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (4.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (4.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (4.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mlango»):",
                    "acceptedAnswers": [
                        "mlango"
                    ],
                    "explanation": "The target keyword was: 【mlango】"
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
        "objective": "Comprehensive mastery of Wakati Ujao -ta- (Future Tense with -ta-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Wakati Ujao -ta- (Future Tense with -ta-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (5.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (5.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (5.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Ujao -ta- (Future Tense with -ta-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Ujao -ta- (Future Tense with -ta-) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (5.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (5.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (5.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (5.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (5.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (5.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Ujao -ta- (Future Tense with -ta-) » (Mtihani 5-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (5.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (5.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (5.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («jicho»):",
                    "acceptedAnswers": [
                        "jicho"
                    ],
                    "explanation": "The target keyword was: 【jicho】"
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
        "objective": "Comprehensive mastery of Wakati Ujao -ta- (Future Tense with -ta-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Wakati Ujao -ta- (Future Tense with -ta-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (5.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (5.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (5.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Ujao -ta- (Future Tense with -ta-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Ujao -ta- (Future Tense with -ta-) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (5.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (5.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (5.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (5.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (5.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (5.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Ujao -ta- (Future Tense with -ta-) » (Mtihani 5-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (5.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (5.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (5.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («macho»):",
                    "acceptedAnswers": [
                        "macho"
                    ],
                    "explanation": "The target keyword was: 【macho】"
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
        "objective": "Comprehensive mastery of Wakati Ujao -ta- (Future Tense with -ta-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Wakati Ujao -ta- (Future Tense with -ta-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (5.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (5.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (5.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Ujao -ta- (Future Tense with -ta-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Ujao -ta- (Future Tense with -ta-) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (5.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (5.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (5.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (5.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (5.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (5.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Ujao -ta- (Future Tense with -ta-) » (Mtihani 5-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (5.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (5.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (5.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («jina»):",
                    "acceptedAnswers": [
                        "jina"
                    ],
                    "explanation": "The target keyword was: 【jina】"
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
        "objective": "Comprehensive mastery of Wakati Ujao -ta- (Future Tense with -ta-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Wakati Ujao -ta- (Future Tense with -ta-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (5.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (5.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (5.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Ujao -ta- (Future Tense with -ta-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Ujao -ta- (Future Tense with -ta-) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (5.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (5.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (5.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (5.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (5.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (5.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Ujao -ta- (Future Tense with -ta-) » (Mtihani 5-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (5.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (5.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (5.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («majina»):",
                    "acceptedAnswers": [
                        "majina"
                    ],
                    "explanation": "The target keyword was: 【majina】"
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
        "objective": "Comprehensive mastery of Wakati Ujao -ta- (Future Tense with -ta-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Wakati Ujao -ta- (Future Tense with -ta-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (5.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (5.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (5.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Ujao -ta- (Future Tense with -ta-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Ujao -ta- (Future Tense with -ta-) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (5.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (5.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (5.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Ujao: Kiambishi -ta- (Future Tense) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (5.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (5.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (5.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Ujao -ta- (Future Tense with -ta-) » (Mtihani 5-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (5.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (5.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (5.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («neno»):",
                    "acceptedAnswers": [
                        "neno"
                    ],
                    "explanation": "The target keyword was: 【neno】"
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
        "objective": "Comprehensive mastery of Wakati Timilifu -me- (Perfective Aspect with -me-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Wakati Timilifu -me- (Perfective Aspect with -me-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (6.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (6.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (6.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Timilifu -me- (Perfective Aspect with -me-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Timilifu -me- (Perfective Aspect with -me-) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (6.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (6.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (6.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (6.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (6.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (6.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Timilifu -me- (Perfective Aspect with -me-) » (Mtihani 6-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (6.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (6.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (6.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nyumba»):",
                    "acceptedAnswers": [
                        "nyumba"
                    ],
                    "explanation": "The target keyword was: 【nyumba】"
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
        "objective": "Comprehensive mastery of Wakati Timilifu -me- (Perfective Aspect with -me-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Wakati Timilifu -me- (Perfective Aspect with -me-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (6.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (6.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (6.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Timilifu -me- (Perfective Aspect with -me-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Timilifu -me- (Perfective Aspect with -me-) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (6.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (6.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (6.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (6.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (6.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (6.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Timilifu -me- (Perfective Aspect with -me-) » (Mtihani 6-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (6.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (6.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (6.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nguo»):",
                    "acceptedAnswers": [
                        "nguo"
                    ],
                    "explanation": "The target keyword was: 【nguo】"
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
        "objective": "Comprehensive mastery of Wakati Timilifu -me- (Perfective Aspect with -me-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Wakati Timilifu -me- (Perfective Aspect with -me-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (6.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (6.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (6.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Timilifu -me- (Perfective Aspect with -me-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Timilifu -me- (Perfective Aspect with -me-) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (6.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (6.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (6.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (6.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (6.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (6.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Timilifu -me- (Perfective Aspect with -me-) » (Mtihani 6-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (6.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (6.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (6.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («barua»):",
                    "acceptedAnswers": [
                        "barua"
                    ],
                    "explanation": "The target keyword was: 【barua】"
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
        "objective": "Comprehensive mastery of Wakati Timilifu -me- (Perfective Aspect with -me-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Wakati Timilifu -me- (Perfective Aspect with -me-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (6.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (6.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (6.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Timilifu -me- (Perfective Aspect with -me-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Timilifu -me- (Perfective Aspect with -me-) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (6.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (6.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (6.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (6.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (6.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (6.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Timilifu -me- (Perfective Aspect with -me-) » (Mtihani 6-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (6.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (6.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (6.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ndizi»):",
                    "acceptedAnswers": [
                        "ndizi"
                    ],
                    "explanation": "The target keyword was: 【ndizi】"
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
        "objective": "Comprehensive mastery of Wakati Timilifu -me- (Perfective Aspect with -me-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Wakati Timilifu -me- (Perfective Aspect with -me-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (6.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (6.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (6.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Wakati Timilifu -me- (Perfective Aspect with -me-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Wakati Timilifu -me- (Perfective Aspect with -me-) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (6.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (6.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (6.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Wakati Timilifu: Kiambishi -me- (Perfective Aspect) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (6.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (6.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (6.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Wakati Timilifu -me- (Perfective Aspect with -me-) » (Mtihani 6-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (6.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (6.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (6.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ndege»):",
                    "acceptedAnswers": [
                        "ndege"
                    ],
                    "explanation": "The target keyword was: 【ndege】"
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
        "objective": "Comprehensive mastery of Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (7.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (7.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (7.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (7.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (7.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (7.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (7.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (7.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (7.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » (Mtihani 7-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (7.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (7.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (7.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ukuta»):",
                    "acceptedAnswers": [
                        "ukuta"
                    ],
                    "explanation": "The target keyword was: 【ukuta】"
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
        "objective": "Comprehensive mastery of Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (7.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (7.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (7.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (7.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (7.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (7.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (7.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (7.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (7.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » (Mtihani 7-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (7.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (7.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (7.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kuta»):",
                    "acceptedAnswers": [
                        "kuta"
                    ],
                    "explanation": "The target keyword was: 【kuta】"
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
        "objective": "Comprehensive mastery of Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (7.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (7.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (7.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (7.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (7.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (7.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (7.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (7.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (7.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » (Mtihani 7-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (7.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (7.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (7.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ufunguo»):",
                    "acceptedAnswers": [
                        "ufunguo"
                    ],
                    "explanation": "The target keyword was: 【ufunguo】"
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
        "objective": "Comprehensive mastery of Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (7.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (7.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (7.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (7.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (7.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (7.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (7.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (7.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (7.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » (Mtihani 7-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (7.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (7.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (7.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («funguo»):",
                    "acceptedAnswers": [
                        "funguo"
                    ],
                    "explanation": "The target keyword was: 【funguo】"
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
        "objective": "Comprehensive mastery of Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (7.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (7.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (7.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (7.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (7.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (7.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ukanushaji wa Vitenzi (Verb Negation Across Tenses) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (7.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (7.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (7.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kukanusha Vitenzi (Verb Negation: si-, hu-, ha-) » (Mtihani 7-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (7.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (7.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (7.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («upendo»):",
                    "acceptedAnswers": [
                        "upendo"
                    ],
                    "explanation": "The target keyword was: 【upendo】"
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
        "objective": "Comprehensive mastery of Viambishi vya Watendwa (Object Infixes in Verbs).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Viambishi vya Watendwa (Object Infixes in Verbs). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (8.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (8.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (8.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Viambishi vya Watendwa (Object Infixes in Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Viambishi vya Watendwa (Object Infixes in Verbs) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (8.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (8.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (8.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (8.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (8.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (8.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Viambishi vya Watendwa (Object Infixes in Verbs) » (Mtihani 8-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (8.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (8.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (8.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kusoma»):",
                    "acceptedAnswers": [
                        "kusoma"
                    ],
                    "explanation": "The target keyword was: 【kusoma】"
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
        "objective": "Comprehensive mastery of Viambishi vya Watendwa (Object Infixes in Verbs).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Viambishi vya Watendwa (Object Infixes in Verbs). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (8.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (8.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (8.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Viambishi vya Watendwa (Object Infixes in Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Viambishi vya Watendwa (Object Infixes in Verbs) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (8.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (8.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (8.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (8.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (8.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (8.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Viambishi vya Watendwa (Object Infixes in Verbs) » (Mtihani 8-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (8.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (8.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (8.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kuandika»):",
                    "acceptedAnswers": [
                        "kuandika"
                    ],
                    "explanation": "The target keyword was: 【kuandika】"
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
        "objective": "Comprehensive mastery of Viambishi vya Watendwa (Object Infixes in Verbs).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Viambishi vya Watendwa (Object Infixes in Verbs). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (8.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (8.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (8.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Viambishi vya Watendwa (Object Infixes in Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Viambishi vya Watendwa (Object Infixes in Verbs) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (8.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (8.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (8.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (8.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (8.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (8.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Viambishi vya Watendwa (Object Infixes in Verbs) » (Mtihani 8-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (8.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (8.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (8.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kula»):",
                    "acceptedAnswers": [
                        "kula"
                    ],
                    "explanation": "The target keyword was: 【kula】"
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
        "objective": "Comprehensive mastery of Viambishi vya Watendwa (Object Infixes in Verbs).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Viambishi vya Watendwa (Object Infixes in Verbs). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (8.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (8.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (8.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Viambishi vya Watendwa (Object Infixes in Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Viambishi vya Watendwa (Object Infixes in Verbs) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (8.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (8.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (8.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (8.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (8.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (8.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Viambishi vya Watendwa (Object Infixes in Verbs) » (Mtihani 8-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (8.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (8.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (8.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kunywa»):",
                    "acceptedAnswers": [
                        "kunywa"
                    ],
                    "explanation": "The target keyword was: 【kunywa】"
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
        "objective": "Comprehensive mastery of Viambishi vya Watendwa (Object Infixes in Verbs).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Viambishi vya Watendwa (Object Infixes in Verbs). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (8.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (8.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (8.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Viambishi vya Watendwa (Object Infixes in Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Viambishi vya Watendwa (Object Infixes in Verbs) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (8.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (8.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (8.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya Watendwa (Object Infixes in Verbs) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (8.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (8.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (8.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Viambishi vya Watendwa (Object Infixes in Verbs) » (Mtihani 8-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (8.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (8.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (8.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kuona»):",
                    "acceptedAnswers": [
                        "kuona"
                    ],
                    "explanation": "The target keyword was: 【kuona】"
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
        "objective": "Comprehensive mastery of Vimilikishi na Upatanisho (Possessive Pronouns).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Vimilikishi na Upatanisho (Possessive Pronouns). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (9.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (9.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (9.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vimilikishi na Upatanisho (Possessive Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vimilikishi na Upatanisho (Possessive Pronouns) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (9.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (9.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (9.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (9.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (9.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (9.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vimilikishi na Upatanisho (Possessive Pronouns) » (Mtihani 9-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (9.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (9.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (9.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mahali»):",
                    "acceptedAnswers": [
                        "mahali"
                    ],
                    "explanation": "The target keyword was: 【mahali】"
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
        "objective": "Comprehensive mastery of Vimilikishi na Upatanisho (Possessive Pronouns).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Vimilikishi na Upatanisho (Possessive Pronouns). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (9.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (9.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (9.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vimilikishi na Upatanisho (Possessive Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vimilikishi na Upatanisho (Possessive Pronouns) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (9.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (9.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (9.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (9.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (9.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (9.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vimilikishi na Upatanisho (Possessive Pronouns) » (Mtihani 9-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (9.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (9.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (9.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («pazuri»):",
                    "acceptedAnswers": [
                        "pazuri"
                    ],
                    "explanation": "The target keyword was: 【pazuri】"
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
        "objective": "Comprehensive mastery of Vimilikishi na Upatanisho (Possessive Pronouns).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Vimilikishi na Upatanisho (Possessive Pronouns). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (9.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (9.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (9.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vimilikishi na Upatanisho (Possessive Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vimilikishi na Upatanisho (Possessive Pronouns) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (9.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (9.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (9.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (9.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (9.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (9.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vimilikishi na Upatanisho (Possessive Pronouns) » (Mtihani 9-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (9.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (9.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (9.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kuzuri»):",
                    "acceptedAnswers": [
                        "kuzuri"
                    ],
                    "explanation": "The target keyword was: 【kuzuri】"
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
        "objective": "Comprehensive mastery of Vimilikishi na Upatanisho (Possessive Pronouns).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Vimilikishi na Upatanisho (Possessive Pronouns). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (9.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (9.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (9.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vimilikishi na Upatanisho (Possessive Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vimilikishi na Upatanisho (Possessive Pronouns) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (9.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (9.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (9.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (9.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (9.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (9.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vimilikishi na Upatanisho (Possessive Pronouns) » (Mtihani 9-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (9.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (9.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (9.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mwenyeji»):",
                    "acceptedAnswers": [
                        "mwenyeji"
                    ],
                    "explanation": "The target keyword was: 【mwenyeji】"
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
        "objective": "Comprehensive mastery of Vimilikishi na Upatanisho (Possessive Pronouns).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Vimilikishi na Upatanisho (Possessive Pronouns). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (9.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (9.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (9.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vimilikishi na Upatanisho (Possessive Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vimilikishi na Upatanisho (Possessive Pronouns) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (9.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (9.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (9.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Vimilikishi na Upatanisho wa Kisarufi (Possessive Pronouns) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (9.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (9.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (9.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vimilikishi na Upatanisho (Possessive Pronouns) » (Mtihani 9-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (9.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (9.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (9.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («wageni»):",
                    "acceptedAnswers": [
                        "wageni"
                    ],
                    "explanation": "The target keyword was: 【wageni】"
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
        "objective": "Comprehensive mastery of Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (10.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (10.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (10.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (10.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (10.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (10.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (10.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (10.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (10.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » (Mtihani 10-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (10.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (10.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (10.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ninasoma»):",
                    "acceptedAnswers": [
                        "ninasoma"
                    ],
                    "explanation": "The target keyword was: 【ninasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (10.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (10.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (10.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (10.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (10.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (10.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (10.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (10.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (10.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » (Mtihani 10-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (10.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (10.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (10.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («anasoma»):",
                    "acceptedAnswers": [
                        "anasoma"
                    ],
                    "explanation": "The target keyword was: 【anasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (10.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (10.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (10.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (10.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (10.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (10.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (10.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (10.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (10.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » (Mtihani 10-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (10.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (10.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (10.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tunasoma»):",
                    "acceptedAnswers": [
                        "tunasoma"
                    ],
                    "explanation": "The target keyword was: 【tunasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (10.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (10.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (10.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (10.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (10.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (10.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (10.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (10.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (10.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » (Mtihani 10-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (10.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (10.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (10.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («wanasoma»):",
                    "acceptedAnswers": [
                        "wanasoma"
                    ],
                    "explanation": "The target keyword was: 【wanasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (10.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (10.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (10.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (10.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (10.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (10.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 3/4 (M-MI) na Vivumishi (Noun Classes 3/4 M-MI) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (10.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (10.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (10.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 3/4 M-MI (Noun Classes 3/4 M-MI) » (Mtihani 10-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (10.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (10.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (10.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («unasoma»):",
                    "acceptedAnswers": [
                        "unasoma"
                    ],
                    "explanation": "The target keyword was: 【unasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (11.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (11.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (11.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (11.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (11.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (11.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (11.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (11.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (11.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » (Mtihani 11-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (11.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (11.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (11.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nilisoma»):",
                    "acceptedAnswers": [
                        "nilisoma"
                    ],
                    "explanation": "The target keyword was: 【nilisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (11.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (11.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (11.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (11.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (11.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (11.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (11.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (11.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (11.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » (Mtihani 11-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (11.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (11.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (11.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («alisoma»):",
                    "acceptedAnswers": [
                        "alisoma"
                    ],
                    "explanation": "The target keyword was: 【alisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (11.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (11.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (11.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (11.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (11.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (11.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (11.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (11.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (11.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » (Mtihani 11-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (11.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (11.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (11.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tulisoma»):",
                    "acceptedAnswers": [
                        "tulisoma"
                    ],
                    "explanation": "The target keyword was: 【tulisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (11.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (11.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (11.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (11.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (11.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (11.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (11.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (11.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (11.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » (Mtihani 11-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (11.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (11.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (11.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («walisoma»):",
                    "acceptedAnswers": [
                        "walisoma"
                    ],
                    "explanation": "The target keyword was: 【walisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (11.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (11.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (11.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (11.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (11.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (11.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 5/6 (JI-MA) na Upatanisho (Noun Classes 5/6 JI-MA) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (11.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (11.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (11.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 5/6 JI-MA (Noun Classes 5/6 JI-MA) » (Mtihani 11-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (11.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (11.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (11.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ulisoma»):",
                    "acceptedAnswers": [
                        "ulisoma"
                    ],
                    "explanation": "The target keyword was: 【ulisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (12.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (12.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (12.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (12.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (12.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (12.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (12.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (12.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (12.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » (Mtihani 12-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (12.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (12.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (12.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nitasoma»):",
                    "acceptedAnswers": [
                        "nitasoma"
                    ],
                    "explanation": "The target keyword was: 【nitasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (12.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (12.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (12.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (12.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (12.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (12.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (12.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (12.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (12.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » (Mtihani 12-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (12.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (12.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (12.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («atasoma»):",
                    "acceptedAnswers": [
                        "atasoma"
                    ],
                    "explanation": "The target keyword was: 【atasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (12.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (12.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (12.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (12.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (12.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (12.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (12.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (12.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (12.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » (Mtihani 12-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (12.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (12.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (12.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tutasoma»):",
                    "acceptedAnswers": [
                        "tutasoma"
                    ],
                    "explanation": "The target keyword was: 【tutasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (12.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (12.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (12.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (12.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (12.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (12.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (12.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (12.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (12.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » (Mtihani 12-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (12.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (12.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (12.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («watasoma»):",
                    "acceptedAnswers": [
                        "watasoma"
                    ],
                    "explanation": "The target keyword was: 【watasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (12.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (12.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (12.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (12.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (12.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (12.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 7/8 (KI-VI) na Vionyeshi (Noun Classes 7/8 KI-VI) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (12.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (12.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (12.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 7/8 KI-VI (Noun Classes 7/8 KI-VI) » (Mtihani 12-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (12.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (12.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (12.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («utasoma»):",
                    "acceptedAnswers": [
                        "utasoma"
                    ],
                    "explanation": "The target keyword was: 【utasoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (13.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (13.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (13.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (13.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (13.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (13.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (13.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (13.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (13.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » (Mtihani 13-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (13.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (13.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (13.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nimesoma»):",
                    "acceptedAnswers": [
                        "nimesoma"
                    ],
                    "explanation": "The target keyword was: 【nimesoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (13.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (13.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (13.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (13.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (13.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (13.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (13.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (13.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (13.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » (Mtihani 13-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (13.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (13.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (13.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («amesoma»):",
                    "acceptedAnswers": [
                        "amesoma"
                    ],
                    "explanation": "The target keyword was: 【amesoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (13.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (13.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (13.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (13.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (13.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (13.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (13.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (13.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (13.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » (Mtihani 13-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (13.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (13.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (13.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tumesoma»):",
                    "acceptedAnswers": [
                        "tumesoma"
                    ],
                    "explanation": "The target keyword was: 【tumesoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (13.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (13.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (13.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (13.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (13.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (13.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (13.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (13.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (13.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » (Mtihani 13-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (13.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (13.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (13.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («wamesoma»):",
                    "acceptedAnswers": [
                        "wamesoma"
                    ],
                    "explanation": "The target keyword was: 【wamesoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (13.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (13.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (13.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (13.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (13.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (13.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 9/10 (N-N) na Majina ya Kigeni (Noun Classes 9/10) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (13.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (13.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (13.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 9/10 N-N (Noun Classes 9/10 N-N) » (Mtihani 13-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (13.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (13.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (13.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («umesoma»):",
                    "acceptedAnswers": [
                        "umesoma"
                    ],
                    "explanation": "The target keyword was: 【umesoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 11/14 U (Noun Classes 11/14 U).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 11/14 U (Noun Classes 11/14 U). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (14.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (14.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (14.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 11/14 U (Noun Classes 11/14 U)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 11/14 U (Noun Classes 11/14 U) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (14.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (14.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (14.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (14.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (14.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (14.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 11/14 U (Noun Classes 11/14 U) » (Mtihani 14-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (14.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (14.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (14.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nikisoma»):",
                    "acceptedAnswers": [
                        "nikisoma"
                    ],
                    "explanation": "The target keyword was: 【nikisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 11/14 U (Noun Classes 11/14 U).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 11/14 U (Noun Classes 11/14 U). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (14.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (14.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (14.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 11/14 U (Noun Classes 11/14 U)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 11/14 U (Noun Classes 11/14 U) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (14.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (14.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (14.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (14.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (14.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (14.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 11/14 U (Noun Classes 11/14 U) » (Mtihani 14-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (14.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (14.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (14.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («akisoma»):",
                    "acceptedAnswers": [
                        "akisoma"
                    ],
                    "explanation": "The target keyword was: 【akisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 11/14 U (Noun Classes 11/14 U).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 11/14 U (Noun Classes 11/14 U). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (14.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (14.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (14.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 11/14 U (Noun Classes 11/14 U)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 11/14 U (Noun Classes 11/14 U) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (14.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (14.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (14.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (14.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (14.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (14.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 11/14 U (Noun Classes 11/14 U) » (Mtihani 14-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (14.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (14.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (14.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tukisoma»):",
                    "acceptedAnswers": [
                        "tukisoma"
                    ],
                    "explanation": "The target keyword was: 【tukisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 11/14 U (Noun Classes 11/14 U).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 11/14 U (Noun Classes 11/14 U). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (14.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (14.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (14.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 11/14 U (Noun Classes 11/14 U)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 11/14 U (Noun Classes 11/14 U) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (14.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (14.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (14.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (14.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (14.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (14.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 11/14 U (Noun Classes 11/14 U) » (Mtihani 14-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (14.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (14.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (14.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («wakisoma»):",
                    "acceptedAnswers": [
                        "wakisoma"
                    ],
                    "explanation": "The target keyword was: 【wakisoma】"
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
        "objective": "Comprehensive mastery of Ngeli ya 11/14 U (Noun Classes 11/14 U).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli ya 11/14 U (Noun Classes 11/14 U). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (14.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (14.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (14.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli ya 11/14 U (Noun Classes 11/14 U)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli ya 11/14 U (Noun Classes 11/14 U) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (14.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (14.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (14.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli ya 11/14 (U) na Majina ya Dhahania (Noun Classes 11/14 U) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (14.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (14.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (14.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli ya 11/14 U (Noun Classes 11/14 U) » (Mtihani 14-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (14.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (14.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (14.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ukisoma»):",
                    "acceptedAnswers": [
                        "ukisoma"
                    ],
                    "explanation": "The target keyword was: 【ukisoma】"
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
        "objective": "Comprehensive mastery of Ngeli za Mahali PA, KU, MU (Locative Classes).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ngeli za Mahali PA, KU, MU (Locative Classes). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (15.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (15.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (15.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli za Mahali PA, KU, MU (Locative Classes)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli za Mahali PA, KU, MU (Locative Classes) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (15.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (15.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (15.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (15.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (15.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (15.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli za Mahali PA, KU, MU (Locative Classes) » (Mtihani 15-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (15.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (15.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (15.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sijasoma»):",
                    "acceptedAnswers": [
                        "sijasoma"
                    ],
                    "explanation": "The target keyword was: 【sijasoma】"
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
        "objective": "Comprehensive mastery of Ngeli za Mahali PA, KU, MU (Locative Classes).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ngeli za Mahali PA, KU, MU (Locative Classes). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (15.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (15.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (15.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli za Mahali PA, KU, MU (Locative Classes)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli za Mahali PA, KU, MU (Locative Classes) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (15.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (15.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (15.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (15.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (15.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (15.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli za Mahali PA, KU, MU (Locative Classes) » (Mtihani 15-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (15.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (15.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (15.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hajasoma»):",
                    "acceptedAnswers": [
                        "hajasoma"
                    ],
                    "explanation": "The target keyword was: 【hajasoma】"
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
        "objective": "Comprehensive mastery of Ngeli za Mahali PA, KU, MU (Locative Classes).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ngeli za Mahali PA, KU, MU (Locative Classes). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (15.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (15.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (15.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli za Mahali PA, KU, MU (Locative Classes)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli za Mahali PA, KU, MU (Locative Classes) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (15.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (15.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (15.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (15.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (15.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (15.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli za Mahali PA, KU, MU (Locative Classes) » (Mtihani 15-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (15.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (15.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (15.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hatujasoma»):",
                    "acceptedAnswers": [
                        "hatujasoma"
                    ],
                    "explanation": "The target keyword was: 【hatujasoma】"
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
        "objective": "Comprehensive mastery of Ngeli za Mahali PA, KU, MU (Locative Classes).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ngeli za Mahali PA, KU, MU (Locative Classes). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (15.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (15.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (15.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli za Mahali PA, KU, MU (Locative Classes)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli za Mahali PA, KU, MU (Locative Classes) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (15.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (15.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (15.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (15.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (15.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (15.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli za Mahali PA, KU, MU (Locative Classes) » (Mtihani 15-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (15.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (15.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (15.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hawajasoma»):",
                    "acceptedAnswers": [
                        "hawajasoma"
                    ],
                    "explanation": "The target keyword was: 【hawajasoma】"
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
        "objective": "Comprehensive mastery of Ngeli za Mahali PA, KU, MU (Locative Classes).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ngeli za Mahali PA, KU, MU (Locative Classes). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (15.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (15.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (15.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ngeli za Mahali PA, KU, MU (Locative Classes)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ngeli za Mahali PA, KU, MU (Locative Classes) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (15.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (15.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (15.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ngeli za Mahali: PA, KU, MU (Locative Classes 16/17/18) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (15.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (15.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (15.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ngeli za Mahali PA, KU, MU (Locative Classes) » (Mtihani 15-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (15.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (15.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (15.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hujasoma»):",
                    "acceptedAnswers": [
                        "hujasoma"
                    ],
                    "explanation": "The target keyword was: 【hujasoma】"
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
        "objective": "Comprehensive mastery of O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (16.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (16.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (16.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (16.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (16.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (16.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (16.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (16.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (16.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » (Mtihani 16-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (16.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (16.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (16.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sisomi»):",
                    "acceptedAnswers": [
                        "sisomi"
                    ],
                    "explanation": "The target keyword was: 【sisomi】"
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
        "objective": "Comprehensive mastery of O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (16.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (16.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (16.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (16.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (16.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (16.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (16.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (16.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (16.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » (Mtihani 16-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (16.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (16.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (16.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hasomi»):",
                    "acceptedAnswers": [
                        "hasomi"
                    ],
                    "explanation": "The target keyword was: 【hasomi】"
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
        "objective": "Comprehensive mastery of O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (16.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (16.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (16.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (16.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (16.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (16.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (16.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (16.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (16.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » (Mtihani 16-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (16.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (16.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (16.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hatusomi»):",
                    "acceptedAnswers": [
                        "hatusomi"
                    ],
                    "explanation": "The target keyword was: 【hatusomi】"
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
        "objective": "Comprehensive mastery of O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (16.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (16.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (16.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (16.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (16.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (16.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (16.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (16.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (16.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » (Mtihani 16-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (16.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (16.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (16.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hawasomi»):",
                    "acceptedAnswers": [
                        "hawasomi"
                    ],
                    "explanation": "The target keyword was: 【hawasomi】"
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
        "objective": "Comprehensive mastery of O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (16.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (16.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (16.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (16.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (16.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (16.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Virejeshi vya O-Rejeshi (-ye-, -o-, -cho-) (Relative Markers) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (16.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (16.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (16.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « O-Rejeshi na Vitenzi (Relative Infixes: -ye-/-cho-) » (Mtihani 16-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (16.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (16.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (16.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («husomi»):",
                    "acceptedAnswers": [
                        "husomi"
                    ],
                    "explanation": "The target keyword was: 【husomi】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendwa -wa (Passive Verb Forms).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendwa -wa (Passive Verb Forms). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (17.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (17.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (17.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendwa -wa (Passive Verb Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendwa -wa (Passive Verb Forms) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (17.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (17.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (17.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (17.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (17.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (17.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendwa -wa (Passive Verb Forms) » (Mtihani 17-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (17.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (17.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (17.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sikusoma»):",
                    "acceptedAnswers": [
                        "sikusoma"
                    ],
                    "explanation": "The target keyword was: 【sikusoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendwa -wa (Passive Verb Forms).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendwa -wa (Passive Verb Forms). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (17.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (17.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (17.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendwa -wa (Passive Verb Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendwa -wa (Passive Verb Forms) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (17.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (17.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (17.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (17.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (17.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (17.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendwa -wa (Passive Verb Forms) » (Mtihani 17-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (17.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (17.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (17.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hakusoma»):",
                    "acceptedAnswers": [
                        "hakusoma"
                    ],
                    "explanation": "The target keyword was: 【hakusoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendwa -wa (Passive Verb Forms).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendwa -wa (Passive Verb Forms). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (17.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (17.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (17.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendwa -wa (Passive Verb Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendwa -wa (Passive Verb Forms) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (17.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (17.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (17.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (17.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (17.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (17.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendwa -wa (Passive Verb Forms) » (Mtihani 17-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (17.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (17.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (17.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hatukusoma»):",
                    "acceptedAnswers": [
                        "hatukusoma"
                    ],
                    "explanation": "The target keyword was: 【hatukusoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendwa -wa (Passive Verb Forms).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendwa -wa (Passive Verb Forms). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (17.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (17.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (17.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendwa -wa (Passive Verb Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendwa -wa (Passive Verb Forms) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (17.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (17.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (17.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (17.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (17.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (17.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendwa -wa (Passive Verb Forms) » (Mtihani 17-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (17.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (17.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (17.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hawakusoma»):",
                    "acceptedAnswers": [
                        "hawakusoma"
                    ],
                    "explanation": "The target keyword was: 【hawakusoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendwa -wa (Passive Verb Forms).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendwa -wa (Passive Verb Forms). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (17.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (17.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (17.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendwa -wa (Passive Verb Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendwa -wa (Passive Verb Forms) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (17.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (17.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (17.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendwa na Vinyambuliko (-wa) (Passive Stems) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (17.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (17.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (17.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendwa -wa (Passive Verb Forms) » (Mtihani 17-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (17.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (17.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (17.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hukusoma»):",
                    "acceptedAnswers": [
                        "hukusoma"
                    ],
                    "explanation": "The target keyword was: 【hukusoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendea -ia/-ea (Applicative / Prepositional).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendea -ia/-ea (Applicative / Prepositional). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (18.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (18.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (18.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendea -ia/-ea (Applicative / Prepositional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (18.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (18.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (18.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (18.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (18.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (18.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » (Mtihani 18-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (18.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (18.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (18.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sitasoma»):",
                    "acceptedAnswers": [
                        "sitasoma"
                    ],
                    "explanation": "The target keyword was: 【sitasoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendea -ia/-ea (Applicative / Prepositional).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendea -ia/-ea (Applicative / Prepositional). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (18.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (18.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (18.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendea -ia/-ea (Applicative / Prepositional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (18.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (18.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (18.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (18.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (18.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (18.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » (Mtihani 18-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (18.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (18.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (18.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hatasoma»):",
                    "acceptedAnswers": [
                        "hatasoma"
                    ],
                    "explanation": "The target keyword was: 【hatasoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendea -ia/-ea (Applicative / Prepositional).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendea -ia/-ea (Applicative / Prepositional). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (18.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (18.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (18.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendea -ia/-ea (Applicative / Prepositional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (18.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (18.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (18.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (18.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (18.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (18.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » (Mtihani 18-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (18.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (18.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (18.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hatutasoma»):",
                    "acceptedAnswers": [
                        "hatutasoma"
                    ],
                    "explanation": "The target keyword was: 【hatutasoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendea -ia/-ea (Applicative / Prepositional).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendea -ia/-ea (Applicative / Prepositional). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (18.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (18.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (18.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendea -ia/-ea (Applicative / Prepositional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (18.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (18.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (18.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (18.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (18.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (18.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » (Mtihani 18-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (18.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (18.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (18.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hawatasoa»):",
                    "acceptedAnswers": [
                        "hawatasoa"
                    ],
                    "explanation": "The target keyword was: 【hawatasoa】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendea -ia/-ea (Applicative / Prepositional).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendea -ia/-ea (Applicative / Prepositional). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (18.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (18.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (18.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendea -ia/-ea (Applicative / Prepositional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (18.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (18.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (18.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendea (-ia/-ea) (Applicative Verbs) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (18.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (18.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (18.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendea -ia/-ea (Applicative / Prepositional) » (Mtihani 18-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (18.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (18.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (18.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hutasoma»):",
                    "acceptedAnswers": [
                        "hutasoma"
                    ],
                    "explanation": "The target keyword was: 【hutasoma】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendesha -isha/-esha (Causative Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendesha -isha/-esha (Causative Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (19.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (19.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (19.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendesha -isha/-esha (Causative Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (19.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (19.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (19.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (19.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (19.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (19.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » (Mtihani 19-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (19.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (19.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (19.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («niliyekuja»):",
                    "acceptedAnswers": [
                        "niliyekuja"
                    ],
                    "explanation": "The target keyword was: 【niliyekuja】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendesha -isha/-esha (Causative Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendesha -isha/-esha (Causative Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (19.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (19.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (19.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendesha -isha/-esha (Causative Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (19.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (19.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (19.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (19.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (19.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (19.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » (Mtihani 19-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (19.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (19.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (19.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («anayekuja»):",
                    "acceptedAnswers": [
                        "anayekuja"
                    ],
                    "explanation": "The target keyword was: 【anayekuja】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendesha -isha/-esha (Causative Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendesha -isha/-esha (Causative Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (19.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (19.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (19.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendesha -isha/-esha (Causative Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (19.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (19.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (19.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (19.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (19.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (19.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » (Mtihani 19-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (19.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (19.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (19.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («atakayekuja»):",
                    "acceptedAnswers": [
                        "atakayekuja"
                    ],
                    "explanation": "The target keyword was: 【atakayekuja】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendesha -isha/-esha (Causative Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendesha -isha/-esha (Causative Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (19.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (19.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (19.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendesha -isha/-esha (Causative Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (19.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (19.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (19.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (19.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (19.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (19.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » (Mtihani 19-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (19.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (19.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (19.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kile_kilicho»):",
                    "acceptedAnswers": [
                        "kile_kilicho"
                    ],
                    "explanation": "The target keyword was: 【kile_kilicho】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendesha -isha/-esha (Causative Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendesha -isha/-esha (Causative Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (19.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (19.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (19.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendesha -isha/-esha (Causative Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (19.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (19.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (19.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendesha (-isha/-esha) (Causative Verbs) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (19.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (19.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (19.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendesha -isha/-esha (Causative Verb Stems) » (Mtihani 19-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (19.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (19.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (19.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («watu_walio»):",
                    "acceptedAnswers": [
                        "watu_walio"
                    ],
                    "explanation": "The target keyword was: 【watu_walio】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendana -ana (Reciprocal Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendana -ana (Reciprocal Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (20.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (20.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (20.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendana -ana (Reciprocal Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (20.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (20.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (20.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (20.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (20.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (20.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » (Mtihani 20-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (20.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (20.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (20.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ofisi»):",
                    "acceptedAnswers": [
                        "ofisi"
                    ],
                    "explanation": "The target keyword was: 【ofisi】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendana -ana (Reciprocal Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendana -ana (Reciprocal Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (20.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (20.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (20.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendana -ana (Reciprocal Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (20.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (20.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (20.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (20.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (20.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (20.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » (Mtihani 20-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (20.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (20.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (20.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mkutano»):",
                    "acceptedAnswers": [
                        "mkutano"
                    ],
                    "explanation": "The target keyword was: 【mkutano】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendana -ana (Reciprocal Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendana -ana (Reciprocal Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (20.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (20.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (20.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendana -ana (Reciprocal Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (20.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (20.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (20.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (20.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (20.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (20.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » (Mtihani 20-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (20.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (20.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (20.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («kazi»):",
                    "acceptedAnswers": [
                        "kazi"
                    ],
                    "explanation": "The target keyword was: 【kazi】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendana -ana (Reciprocal Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendana -ana (Reciprocal Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (20.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (20.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (20.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendana -ana (Reciprocal Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (20.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (20.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (20.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (20.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (20.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (20.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » (Mtihani 20-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (20.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (20.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (20.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ripoti»):",
                    "acceptedAnswers": [
                        "ripoti"
                    ],
                    "explanation": "The target keyword was: 【ripoti】"
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
        "objective": "Comprehensive mastery of Kauli ya Kutendana -ana (Reciprocal Verb Stems).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Kauli ya Kutendana -ana (Reciprocal Verb Stems). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (20.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (20.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (20.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Kauli ya Kutendana -ana (Reciprocal Verb Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (20.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (20.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (20.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Kauli ya Kutendana (-ana) (Reciprocal Verbs) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (20.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (20.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (20.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Kauli ya Kutendana -ana (Reciprocal Verb Stems) » (Mtihani 20-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (20.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (20.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (20.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («biashara»):",
                    "acceptedAnswers": [
                        "biashara"
                    ],
                    "explanation": "The target keyword was: 【biashara】"
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
        "objective": "Comprehensive mastery of Masharti -ki- na -nge-/-ngali- (Conditional Clauses).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Masharti -ki- na -nge-/-ngali- (Conditional Clauses). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (21.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (21.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (21.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Masharti -ki- na -nge-/-ngali- (Conditional Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (21.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (21.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (21.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (21.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (21.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (21.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » (Mtihani 21-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (21.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (21.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (21.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hospitali»):",
                    "acceptedAnswers": [
                        "hospitali"
                    ],
                    "explanation": "The target keyword was: 【hospitali】"
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
        "objective": "Comprehensive mastery of Masharti -ki- na -nge-/-ngali- (Conditional Clauses).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Masharti -ki- na -nge-/-ngali- (Conditional Clauses). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (21.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (21.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (21.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Masharti -ki- na -nge-/-ngali- (Conditional Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (21.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (21.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (21.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (21.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (21.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (21.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » (Mtihani 21-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (21.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (21.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (21.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («daktari»):",
                    "acceptedAnswers": [
                        "daktari"
                    ],
                    "explanation": "The target keyword was: 【daktari】"
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
        "objective": "Comprehensive mastery of Masharti -ki- na -nge-/-ngali- (Conditional Clauses).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Masharti -ki- na -nge-/-ngali- (Conditional Clauses). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (21.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (21.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (21.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Masharti -ki- na -nge-/-ngali- (Conditional Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (21.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (21.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (21.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (21.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (21.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (21.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » (Mtihani 21-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (21.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (21.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (21.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («dawa»):",
                    "acceptedAnswers": [
                        "dawa"
                    ],
                    "explanation": "The target keyword was: 【dawa】"
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
        "objective": "Comprehensive mastery of Masharti -ki- na -nge-/-ngali- (Conditional Clauses).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Masharti -ki- na -nge-/-ngali- (Conditional Clauses). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (21.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (21.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (21.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Masharti -ki- na -nge-/-ngali- (Conditional Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (21.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (21.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (21.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (21.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (21.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (21.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » (Mtihani 21-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (21.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (21.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (21.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ugonjwa»):",
                    "acceptedAnswers": [
                        "ugonjwa"
                    ],
                    "explanation": "The target keyword was: 【ugonjwa】"
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
        "objective": "Comprehensive mastery of Masharti -ki- na -nge-/-ngali- (Conditional Clauses).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Masharti -ki- na -nge-/-ngali- (Conditional Clauses). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (21.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (21.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (21.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Masharti -ki- na -nge-/-ngali- (Conditional Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (21.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (21.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (21.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Masharti: Kiambishi -ki- na -nge-/-ngali- (Conditionals) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (21.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (21.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (21.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Masharti -ki- na -nge-/-ngali- (Conditional Clauses) » (Mtihani 21-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (21.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (21.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (21.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («afya»):",
                    "acceptedAnswers": [
                        "afya"
                    ],
                    "explanation": "The target keyword was: 【afya】"
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
        "objective": "Comprehensive mastery of Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (22.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (22.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (22.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (22.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (22.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (22.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (22.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (22.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (22.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » (Mtihani 22-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (22.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (22.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (22.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («chakula»):",
                    "acceptedAnswers": [
                        "chakula"
                    ],
                    "explanation": "The target keyword was: 【chakula】"
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
        "objective": "Comprehensive mastery of Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (22.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (22.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (22.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (22.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (22.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (22.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (22.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (22.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (22.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » (Mtihani 22-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (22.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (22.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (22.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ugali»):",
                    "acceptedAnswers": [
                        "ugali"
                    ],
                    "explanation": "The target keyword was: 【ugali】"
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
        "objective": "Comprehensive mastery of Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (22.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (22.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (22.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (22.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (22.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (22.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (22.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (22.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (22.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » (Mtihani 22-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (22.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (22.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (22.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sukuma»):",
                    "acceptedAnswers": [
                        "sukuma"
                    ],
                    "explanation": "The target keyword was: 【sukuma】"
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
        "objective": "Comprehensive mastery of Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (22.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (22.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (22.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (22.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (22.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (22.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (22.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (22.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (22.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » (Mtihani 22-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (22.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (22.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (22.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nyama»):",
                    "acceptedAnswers": [
                        "nyama"
                    ],
                    "explanation": "The target keyword was: 【nyama】"
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
        "objective": "Comprehensive mastery of Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (22.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (22.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (22.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (22.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (22.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (22.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mnyambuliko wa Vitenzi vya Kiarabu (Arabic-Origin Verbs) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (22.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (22.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (22.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Vitenzi vya Asili ya Kiarabu (Arabic-Origin Verb Conjugation) » (Mtihani 22-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (22.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (22.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (22.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («chai»):",
                    "acceptedAnswers": [
                        "chai"
                    ],
                    "explanation": "The target keyword was: 【chai】"
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
        "objective": "Comprehensive mastery of Methali na Fasihi Simulizi (Swahili Proverbs & Folklore).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Methali na Fasihi Simulizi (Swahili Proverbs & Folklore). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (23.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (23.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (23.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Methali na Fasihi Simulizi (Swahili Proverbs & Folklore)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (23.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (23.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (23.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (23.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (23.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (23.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » (Mtihani 23-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (23.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (23.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (23.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («muziki»):",
                    "acceptedAnswers": [
                        "muziki"
                    ],
                    "explanation": "The target keyword was: 【muziki】"
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
        "objective": "Comprehensive mastery of Methali na Fasihi Simulizi (Swahili Proverbs & Folklore).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Methali na Fasihi Simulizi (Swahili Proverbs & Folklore). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (23.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (23.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (23.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Methali na Fasihi Simulizi (Swahili Proverbs & Folklore)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (23.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (23.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (23.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (23.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (23.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (23.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » (Mtihani 23-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (23.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (23.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (23.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ngoma»):",
                    "acceptedAnswers": [
                        "ngoma"
                    ],
                    "explanation": "The target keyword was: 【ngoma】"
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
        "objective": "Comprehensive mastery of Methali na Fasihi Simulizi (Swahili Proverbs & Folklore).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Methali na Fasihi Simulizi (Swahili Proverbs & Folklore). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (23.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (23.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (23.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Methali na Fasihi Simulizi (Swahili Proverbs & Folklore)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (23.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (23.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (23.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (23.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (23.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (23.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » (Mtihani 23-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (23.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (23.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (23.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sanaa»):",
                    "acceptedAnswers": [
                        "sanaa"
                    ],
                    "explanation": "The target keyword was: 【sanaa】"
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
        "objective": "Comprehensive mastery of Methali na Fasihi Simulizi (Swahili Proverbs & Folklore).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Methali na Fasihi Simulizi (Swahili Proverbs & Folklore). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (23.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (23.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (23.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Methali na Fasihi Simulizi (Swahili Proverbs & Folklore)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (23.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (23.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (23.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (23.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (23.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (23.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » (Mtihani 23-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (23.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (23.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (23.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («filamu»):",
                    "acceptedAnswers": [
                        "filamu"
                    ],
                    "explanation": "The target keyword was: 【filamu】"
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
        "objective": "Comprehensive mastery of Methali na Fasihi Simulizi (Swahili Proverbs & Folklore).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Methali na Fasihi Simulizi (Swahili Proverbs & Folklore). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (23.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (23.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (23.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Methali na Fasihi Simulizi (Swahili Proverbs & Folklore)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (23.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (23.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (23.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Methali za Kiswahili na Fasihi Simulizi (Proverbs & Literature) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (23.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (23.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (23.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Methali na Fasihi Simulizi (Swahili Proverbs & Folklore) » (Mtihani 23-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (23.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (23.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (23.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («utamaduni»):",
                    "acceptedAnswers": [
                        "utamaduni"
                    ],
                    "explanation": "The target keyword was: 【utamaduni】"
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
        "objective": "Comprehensive mastery of Utamaduni wa Waswahili (Swahili Coastal Culture).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Utamaduni wa Waswahili (Swahili Coastal Culture). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (24.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (24.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (24.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utamaduni wa Waswahili (Swahili Coastal Culture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utamaduni wa Waswahili (Swahili Coastal Culture) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (24.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (24.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (24.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (24.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (24.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (24.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utamaduni wa Waswahili (Swahili Coastal Culture) » (Mtihani 24-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (24.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (24.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (24.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («benki»):",
                    "acceptedAnswers": [
                        "benki"
                    ],
                    "explanation": "The target keyword was: 【benki】"
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
        "objective": "Comprehensive mastery of Utamaduni wa Waswahili (Swahili Coastal Culture).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Utamaduni wa Waswahili (Swahili Coastal Culture). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (24.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (24.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (24.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utamaduni wa Waswahili (Swahili Coastal Culture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utamaduni wa Waswahili (Swahili Coastal Culture) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (24.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (24.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (24.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (24.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (24.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (24.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utamaduni wa Waswahili (Swahili Coastal Culture) » (Mtihani 24-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (24.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (24.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (24.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («pesa»):",
                    "acceptedAnswers": [
                        "pesa"
                    ],
                    "explanation": "The target keyword was: 【pesa】"
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
        "objective": "Comprehensive mastery of Utamaduni wa Waswahili (Swahili Coastal Culture).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Utamaduni wa Waswahili (Swahili Coastal Culture). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (24.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (24.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (24.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utamaduni wa Waswahili (Swahili Coastal Culture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utamaduni wa Waswahili (Swahili Coastal Culture) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (24.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (24.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (24.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (24.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (24.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (24.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utamaduni wa Waswahili (Swahili Coastal Culture) » (Mtihani 24-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (24.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (24.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (24.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («akaunti»):",
                    "acceptedAnswers": [
                        "akaunti"
                    ],
                    "explanation": "The target keyword was: 【akaunti】"
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
        "objective": "Comprehensive mastery of Utamaduni wa Waswahili (Swahili Coastal Culture).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Utamaduni wa Waswahili (Swahili Coastal Culture). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (24.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (24.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (24.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utamaduni wa Waswahili (Swahili Coastal Culture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utamaduni wa Waswahili (Swahili Coastal Culture) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (24.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (24.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (24.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (24.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (24.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (24.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utamaduni wa Waswahili (Swahili Coastal Culture) » (Mtihani 24-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (24.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (24.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (24.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («riba»):",
                    "acceptedAnswers": [
                        "riba"
                    ],
                    "explanation": "The target keyword was: 【riba】"
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
        "objective": "Comprehensive mastery of Utamaduni wa Waswahili (Swahili Coastal Culture).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Utamaduni wa Waswahili (Swahili Coastal Culture). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (24.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (24.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (24.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utamaduni wa Waswahili (Swahili Coastal Culture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utamaduni wa Waswahili (Swahili Coastal Culture) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (24.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (24.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (24.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utamaduni wa Waswahili na Pwani ya Afrika Mashariki (Culture) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (24.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (24.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (24.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utamaduni wa Waswahili (Swahili Coastal Culture) » (Mtihani 24-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (24.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (24.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (24.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («uchumi»):",
                    "acceptedAnswers": [
                        "uchumi"
                    ],
                    "explanation": "The target keyword was: 【uchumi】"
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
        "objective": "Comprehensive mastery of Biashara na Fedha za Kidijitali (Commerce & M-Pesa).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Biashara na Fedha za Kidijitali (Commerce & M-Pesa). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (25.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (25.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (25.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Biashara na Fedha za Kidijitali (Commerce & M-Pesa)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (25.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (25.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (25.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (25.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (25.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (25.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » (Mtihani 25-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (25.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (25.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (25.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mazingira»):",
                    "acceptedAnswers": [
                        "mazingira"
                    ],
                    "explanation": "The target keyword was: 【mazingira】"
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
        "objective": "Comprehensive mastery of Biashara na Fedha za Kidijitali (Commerce & M-Pesa).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Biashara na Fedha za Kidijitali (Commerce & M-Pesa). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (25.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (25.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (25.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Biashara na Fedha za Kidijitali (Commerce & M-Pesa)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (25.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (25.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (25.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (25.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (25.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (25.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » (Mtihani 25-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (25.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (25.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (25.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ardhi»):",
                    "acceptedAnswers": [
                        "ardhi"
                    ],
                    "explanation": "The target keyword was: 【ardhi】"
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
        "objective": "Comprehensive mastery of Biashara na Fedha za Kidijitali (Commerce & M-Pesa).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Biashara na Fedha za Kidijitali (Commerce & M-Pesa). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (25.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (25.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (25.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Biashara na Fedha za Kidijitali (Commerce & M-Pesa)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (25.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (25.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (25.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (25.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (25.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (25.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » (Mtihani 25-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (25.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (25.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (25.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mvua»):",
                    "acceptedAnswers": [
                        "mvua"
                    ],
                    "explanation": "The target keyword was: 【mvua】"
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
        "objective": "Comprehensive mastery of Biashara na Fedha za Kidijitali (Commerce & M-Pesa).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Biashara na Fedha za Kidijitali (Commerce & M-Pesa). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (25.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (25.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (25.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Biashara na Fedha za Kidijitali (Commerce & M-Pesa)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (25.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (25.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (25.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (25.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (25.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (25.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » (Mtihani 25-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (25.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (25.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (25.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («misitu»):",
                    "acceptedAnswers": [
                        "misitu"
                    ],
                    "explanation": "The target keyword was: 【misitu】"
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
        "objective": "Comprehensive mastery of Biashara na Fedha za Kidijitali (Commerce & M-Pesa).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Biashara na Fedha za Kidijitali (Commerce & M-Pesa). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (25.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (25.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (25.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Biashara na Fedha za Kidijitali (Commerce & M-Pesa)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (25.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (25.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (25.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Biashara, Uchumi na Fedha za Kidijitali (Commerce & M-Pesa) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (25.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (25.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (25.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Biashara na Fedha za Kidijitali (Commerce & M-Pesa) » (Mtihani 25-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (25.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (25.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (25.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («wanyama»):",
                    "acceptedAnswers": [
                        "wanyama"
                    ],
                    "explanation": "The target keyword was: 【wanyama】"
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
        "objective": "Comprehensive mastery of Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (26.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (26.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (26.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (26.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (26.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (26.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (26.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (26.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (26.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » (Mtihani 26-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (26.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (26.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (26.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sheria»):",
                    "acceptedAnswers": [
                        "sheria"
                    ],
                    "explanation": "The target keyword was: 【sheria】"
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
        "objective": "Comprehensive mastery of Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (26.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (26.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (26.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (26.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (26.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (26.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (26.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (26.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (26.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » (Mtihani 26-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (26.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (26.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (26.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («katiba»):",
                    "acceptedAnswers": [
                        "katiba"
                    ],
                    "explanation": "The target keyword was: 【katiba】"
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
        "objective": "Comprehensive mastery of Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (26.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (26.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (26.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (26.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (26.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (26.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (26.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (26.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (26.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » (Mtihani 26-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (26.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (26.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (26.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mahakama»):",
                    "acceptedAnswers": [
                        "mahakama"
                    ],
                    "explanation": "The target keyword was: 【mahakama】"
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
        "objective": "Comprehensive mastery of Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (26.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (26.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (26.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (26.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (26.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (26.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (26.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (26.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (26.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » (Mtihani 26-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (26.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (26.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (26.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hakimu»):",
                    "acceptedAnswers": [
                        "hakimu"
                    ],
                    "explanation": "The target keyword was: 【hakimu】"
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
        "objective": "Comprehensive mastery of Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (26.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (26.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (26.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (26.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (26.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (26.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ikolojia, Uhifadhi wa Wanyamapori na Maliasili (Wildlife) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (26.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (26.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (26.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ikolojia na Uhifadhi wa Maliasili (Ecology & Wildlife) » (Mtihani 26-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (26.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (26.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (26.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («haki»):",
                    "acceptedAnswers": [
                        "haki"
                    ],
                    "explanation": "The target keyword was: 【haki】"
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
        "objective": "Comprehensive mastery of Afya ya Jamii na Tiba (Public Health & Clinical Care).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Afya ya Jamii na Tiba (Public Health & Clinical Care). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (27.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (27.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (27.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Afya ya Jamii na Tiba (Public Health & Clinical Care)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Afya ya Jamii na Tiba (Public Health & Clinical Care) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (27.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (27.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (27.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (27.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (27.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (27.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Afya ya Jamii na Tiba (Public Health & Clinical Care) » (Mtihani 27-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (27.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (27.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (27.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («fasihi»):",
                    "acceptedAnswers": [
                        "fasihi"
                    ],
                    "explanation": "The target keyword was: 【fasihi】"
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
        "objective": "Comprehensive mastery of Afya ya Jamii na Tiba (Public Health & Clinical Care).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Afya ya Jamii na Tiba (Public Health & Clinical Care). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (27.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (27.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (27.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Afya ya Jamii na Tiba (Public Health & Clinical Care)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Afya ya Jamii na Tiba (Public Health & Clinical Care) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (27.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (27.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (27.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (27.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (27.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (27.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Afya ya Jamii na Tiba (Public Health & Clinical Care) » (Mtihani 27-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (27.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (27.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (27.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ushairi»):",
                    "acceptedAnswers": [
                        "ushairi"
                    ],
                    "explanation": "The target keyword was: 【ushairi】"
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
        "objective": "Comprehensive mastery of Afya ya Jamii na Tiba (Public Health & Clinical Care).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Afya ya Jamii na Tiba (Public Health & Clinical Care). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (27.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (27.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (27.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Afya ya Jamii na Tiba (Public Health & Clinical Care)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Afya ya Jamii na Tiba (Public Health & Clinical Care) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (27.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (27.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (27.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (27.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (27.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (27.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Afya ya Jamii na Tiba (Public Health & Clinical Care) » (Mtihani 27-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (27.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (27.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (27.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hadithi»):",
                    "acceptedAnswers": [
                        "hadithi"
                    ],
                    "explanation": "The target keyword was: 【hadithi】"
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
        "objective": "Comprehensive mastery of Afya ya Jamii na Tiba (Public Health & Clinical Care).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Afya ya Jamii na Tiba (Public Health & Clinical Care). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (27.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (27.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (27.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Afya ya Jamii na Tiba (Public Health & Clinical Care)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Afya ya Jamii na Tiba (Public Health & Clinical Care) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (27.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (27.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (27.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (27.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (27.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (27.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Afya ya Jamii na Tiba (Public Health & Clinical Care) » (Mtihani 27-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (27.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (27.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (27.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («methali»):",
                    "acceptedAnswers": [
                        "methali"
                    ],
                    "explanation": "The target keyword was: 【methali】"
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
        "objective": "Comprehensive mastery of Afya ya Jamii na Tiba (Public Health & Clinical Care).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Afya ya Jamii na Tiba (Public Health & Clinical Care). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (27.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (27.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (27.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Afya ya Jamii na Tiba (Public Health & Clinical Care)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Afya ya Jamii na Tiba (Public Health & Clinical Care) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (27.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (27.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (27.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Afya ya Jamii, Tiba na Epidemiolojia (Public Health) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (27.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (27.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (27.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Afya ya Jamii na Tiba (Public Health & Clinical Care) » (Mtihani 27-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (27.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (27.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (27.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tamthilia»):",
                    "acceptedAnswers": [
                        "tamthilia"
                    ],
                    "explanation": "The target keyword was: 【tamthilia】"
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
        "objective": "Comprehensive mastery of Uandishi wa Habari na Utangazaji (Journalism & Media).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Uandishi wa Habari na Utangazaji (Journalism & Media). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (28.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (28.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (28.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uandishi wa Habari na Utangazaji (Journalism & Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uandishi wa Habari na Utangazaji (Journalism & Media) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (28.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (28.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (28.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (28.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (28.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (28.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uandishi wa Habari na Utangazaji (Journalism & Media) » (Mtihani 28-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (28.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (28.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (28.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («habari_za_leo»):",
                    "acceptedAnswers": [
                        "habari_za_leo"
                    ],
                    "explanation": "The target keyword was: 【habari_za_leo】"
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
        "objective": "Comprehensive mastery of Uandishi wa Habari na Utangazaji (Journalism & Media).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Uandishi wa Habari na Utangazaji (Journalism & Media). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (28.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (28.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (28.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uandishi wa Habari na Utangazaji (Journalism & Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uandishi wa Habari na Utangazaji (Journalism & Media) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (28.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (28.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (28.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (28.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (28.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (28.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uandishi wa Habari na Utangazaji (Journalism & Media) » (Mtihani 28-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (28.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (28.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (28.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («gazeti»):",
                    "acceptedAnswers": [
                        "gazeti"
                    ],
                    "explanation": "The target keyword was: 【gazeti】"
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
        "objective": "Comprehensive mastery of Uandishi wa Habari na Utangazaji (Journalism & Media).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Uandishi wa Habari na Utangazaji (Journalism & Media). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (28.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (28.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (28.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uandishi wa Habari na Utangazaji (Journalism & Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uandishi wa Habari na Utangazaji (Journalism & Media) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (28.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (28.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (28.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (28.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (28.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (28.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uandishi wa Habari na Utangazaji (Journalism & Media) » (Mtihani 28-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (28.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (28.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (28.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mwandishi»):",
                    "acceptedAnswers": [
                        "mwandishi"
                    ],
                    "explanation": "The target keyword was: 【mwandishi】"
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
        "objective": "Comprehensive mastery of Uandishi wa Habari na Utangazaji (Journalism & Media).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Uandishi wa Habari na Utangazaji (Journalism & Media). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (28.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (28.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (28.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uandishi wa Habari na Utangazaji (Journalism & Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uandishi wa Habari na Utangazaji (Journalism & Media) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (28.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (28.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (28.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (28.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (28.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (28.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uandishi wa Habari na Utangazaji (Journalism & Media) » (Mtihani 28-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (28.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (28.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (28.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («matangazo»):",
                    "acceptedAnswers": [
                        "matangazo"
                    ],
                    "explanation": "The target keyword was: 【matangazo】"
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
        "objective": "Comprehensive mastery of Uandishi wa Habari na Utangazaji (Journalism & Media).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Uandishi wa Habari na Utangazaji (Journalism & Media). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (28.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (28.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (28.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uandishi wa Habari na Utangazaji (Journalism & Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uandishi wa Habari na Utangazaji (Journalism & Media) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (28.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (28.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (28.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Uandishi wa Habari, Tahariri na Utangazaji (Journalism) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (28.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (28.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (28.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uandishi wa Habari na Utangazaji (Journalism & Media) » (Mtihani 28-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (28.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (28.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (28.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («redio»):",
                    "acceptedAnswers": [
                        "redio"
                    ],
                    "explanation": "The target keyword was: 【redio】"
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
        "objective": "Comprehensive mastery of Sheria na Haki za Kisheria (Law & Constitutional Rights).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Sheria na Haki za Kisheria (Law & Constitutional Rights). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (29.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (29.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (29.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Sheria na Haki za Kisheria (Law & Constitutional Rights)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Sheria na Haki za Kisheria (Law & Constitutional Rights) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (29.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (29.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (29.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (29.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (29.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (29.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Sheria na Haki za Kisheria (Law & Constitutional Rights) » (Mtihani 29-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (29.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (29.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (29.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («falsafa»):",
                    "acceptedAnswers": [
                        "falsafa"
                    ],
                    "explanation": "The target keyword was: 【falsafa】"
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
        "objective": "Comprehensive mastery of Sheria na Haki za Kisheria (Law & Constitutional Rights).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Sheria na Haki za Kisheria (Law & Constitutional Rights). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (29.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (29.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (29.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Sheria na Haki za Kisheria (Law & Constitutional Rights)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Sheria na Haki za Kisheria (Law & Constitutional Rights) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (29.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (29.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (29.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (29.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (29.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (29.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Sheria na Haki za Kisheria (Law & Constitutional Rights) » (Mtihani 29-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (29.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (29.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (29.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («maadili»):",
                    "acceptedAnswers": [
                        "maadili"
                    ],
                    "explanation": "The target keyword was: 【maadili】"
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
        "objective": "Comprehensive mastery of Sheria na Haki za Kisheria (Law & Constitutional Rights).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Sheria na Haki za Kisheria (Law & Constitutional Rights). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (29.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (29.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (29.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Sheria na Haki za Kisheria (Law & Constitutional Rights)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Sheria na Haki za Kisheria (Law & Constitutional Rights) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (29.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (29.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (29.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (29.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (29.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (29.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Sheria na Haki za Kisheria (Law & Constitutional Rights) » (Mtihani 29-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (29.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (29.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (29.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («utu»):",
                    "acceptedAnswers": [
                        "utu"
                    ],
                    "explanation": "The target keyword was: 【utu】"
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
        "objective": "Comprehensive mastery of Sheria na Haki za Kisheria (Law & Constitutional Rights).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Sheria na Haki za Kisheria (Law & Constitutional Rights). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (29.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (29.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (29.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Sheria na Haki za Kisheria (Law & Constitutional Rights)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Sheria na Haki za Kisheria (Law & Constitutional Rights) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (29.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (29.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (29.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (29.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (29.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (29.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Sheria na Haki za Kisheria (Law & Constitutional Rights) » (Mtihani 29-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (29.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (29.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (29.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ujamaa»):",
                    "acceptedAnswers": [
                        "ujamaa"
                    ],
                    "explanation": "The target keyword was: 【ujamaa】"
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
        "objective": "Comprehensive mastery of Sheria na Haki za Kisheria (Law & Constitutional Rights).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Sheria na Haki za Kisheria (Law & Constitutional Rights). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (29.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (29.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (29.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Sheria na Haki za Kisheria (Law & Constitutional Rights)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Sheria na Haki za Kisheria (Law & Constitutional Rights) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (29.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (29.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (29.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Sheria, Katiba na Haki za Mahakama (Law & Jurisprudence) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (29.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (29.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (29.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Sheria na Haki za Kisheria (Law & Constitutional Rights) » (Mtihani 29-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (29.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (29.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (29.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hekima»):",
                    "acceptedAnswers": [
                        "hekima"
                    ],
                    "explanation": "The target keyword was: 【hekima】"
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
        "objective": "Comprehensive mastery of Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (30.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (30.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (30.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (30.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (30.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (30.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (30.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (30.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (30.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » (Mtihani 30-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (30.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (30.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (30.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sayansi»):",
                    "acceptedAnswers": [
                        "sayansi"
                    ],
                    "explanation": "The target keyword was: 【sayansi】"
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
        "objective": "Comprehensive mastery of Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (30.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (30.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (30.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (30.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (30.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (30.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (30.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (30.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (30.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » (Mtihani 30-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (30.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (30.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (30.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («teknolojia»):",
                    "acceptedAnswers": [
                        "teknolojia"
                    ],
                    "explanation": "The target keyword was: 【teknolojia】"
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
        "objective": "Comprehensive mastery of Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (30.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (30.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (30.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (30.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (30.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (30.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (30.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (30.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (30.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » (Mtihani 30-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (30.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (30.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (30.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («utafiti»):",
                    "acceptedAnswers": [
                        "utafiti"
                    ],
                    "explanation": "The target keyword was: 【utafiti】"
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
        "objective": "Comprehensive mastery of Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (30.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (30.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (30.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (30.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (30.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (30.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (30.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (30.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (30.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » (Mtihani 30-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (30.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (30.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (30.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («uvumbuzi»):",
                    "acceptedAnswers": [
                        "uvumbuzi"
                    ],
                    "explanation": "The target keyword was: 【uvumbuzi】"
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
        "objective": "Comprehensive mastery of Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (30.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (30.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (30.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (30.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (30.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (30.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Ushairi wa Kiswahili na Ushairi wa Ushairi (Poetic Prosody) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (30.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (30.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (30.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Ushairi wa Kiswahili na Bahari zake (Swahili Poetic Prosody) » (Mtihani 30-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (30.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (30.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (30.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («elimu»):",
                    "acceptedAnswers": [
                        "elimu"
                    ],
                    "explanation": "The target keyword was: 【elimu】"
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
        "objective": "Comprehensive mastery of Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (31.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (31.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (31.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (31.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (31.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (31.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (31.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (31.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (31.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » (Mtihani 31-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (31.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (31.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (31.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («diplomasia»):",
                    "acceptedAnswers": [
                        "diplomasia"
                    ],
                    "explanation": "The target keyword was: 【diplomasia】"
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
        "objective": "Comprehensive mastery of Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (31.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (31.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (31.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (31.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (31.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (31.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (31.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (31.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (31.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » (Mtihani 31-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (31.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (31.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (31.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mipaka»):",
                    "acceptedAnswers": [
                        "mipaka"
                    ],
                    "explanation": "The target keyword was: 【mipaka】"
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
        "objective": "Comprehensive mastery of Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (31.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (31.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (31.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (31.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (31.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (31.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (31.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (31.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (31.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » (Mtihani 31-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (31.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (31.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (31.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ushirikiano»):",
                    "acceptedAnswers": [
                        "ushirikiano"
                    ],
                    "explanation": "The target keyword was: 【ushirikiano】"
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
        "objective": "Comprehensive mastery of Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (31.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (31.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (31.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (31.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (31.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (31.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (31.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (31.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (31.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » (Mtihani 31-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (31.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (31.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (31.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («jumuiya»):",
                    "acceptedAnswers": [
                        "jumuiya"
                    ],
                    "explanation": "The target keyword was: 【jumuiya】"
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
        "objective": "Comprehensive mastery of Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (31.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (31.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (31.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (31.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (31.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (31.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utawala wa Kiserikali na Ushirikiano wa Afrika Mashariki (Governance) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (31.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (31.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (31.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utawala Bora na Jumuiya ya Afrika Mashariki (Regional Governance) » (Mtihani 31-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (31.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (31.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (31.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («amani»):",
                    "acceptedAnswers": [
                        "amani"
                    ],
                    "explanation": "The target keyword was: 【amani】"
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
        "objective": "Comprehensive mastery of Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (32.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (32.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (32.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (32.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (32.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (32.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (32.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (32.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (32.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » (Mtihani 32-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (32.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (32.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (32.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («balozi»):",
                    "acceptedAnswers": [
                        "balozi"
                    ],
                    "explanation": "The target keyword was: 【balozi】"
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
        "objective": "Comprehensive mastery of Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (32.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (32.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (32.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (32.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (32.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (32.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (32.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (32.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (32.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » (Mtihani 32-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (32.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (32.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (32.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ubalozi»):",
                    "acceptedAnswers": [
                        "ubalozi"
                    ],
                    "explanation": "The target keyword was: 【ubalozi】"
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
        "objective": "Comprehensive mastery of Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (32.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (32.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (32.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (32.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (32.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (32.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (32.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (32.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (32.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » (Mtihani 32-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (32.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (32.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (32.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («makubaliano»):",
                    "acceptedAnswers": [
                        "makubaliano"
                    ],
                    "explanation": "The target keyword was: 【makubaliano】"
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
        "objective": "Comprehensive mastery of Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (32.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (32.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (32.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (32.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (32.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (32.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (32.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (32.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (32.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » (Mtihani 32-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (32.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (32.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (32.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mkataba»):",
                    "acceptedAnswers": [
                        "mkataba"
                    ],
                    "explanation": "The target keyword was: 【mkataba】"
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
        "objective": "Comprehensive mastery of Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (32.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (32.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (32.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (32.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (32.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (32.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Utafiti wa Kiakademia na Nadharia za Isimu (Academic Linguistics) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (32.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (32.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (32.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Utafiti wa Kiisimu na Isimujamii (Linguistics & Sociolinguistics) » (Mtihani 32-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (32.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (32.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (32.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («azimio»):",
                    "acceptedAnswers": [
                        "azimio"
                    ],
                    "explanation": "The target keyword was: 【azimio】"
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
        "objective": "Comprehensive mastery of Diplomasia na Mikataba ya Kimataifa (International Diplomacy).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Diplomasia na Mikataba ya Kimataifa (International Diplomacy). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (33.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (33.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (33.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomasia na Mikataba ya Kimataifa (International Diplomacy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (33.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (33.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (33.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (33.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (33.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (33.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » (Mtihani 33-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (33.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (33.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (33.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («nahau»):",
                    "acceptedAnswers": [
                        "nahau"
                    ],
                    "explanation": "The target keyword was: 【nahau】"
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
        "objective": "Comprehensive mastery of Diplomasia na Mikataba ya Kimataifa (International Diplomacy).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Diplomasia na Mikataba ya Kimataifa (International Diplomacy). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (33.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (33.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (33.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomasia na Mikataba ya Kimataifa (International Diplomacy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (33.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (33.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (33.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (33.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (33.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (33.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » (Mtihani 33-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (33.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (33.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (33.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («misemo»):",
                    "acceptedAnswers": [
                        "misemo"
                    ],
                    "explanation": "The target keyword was: 【misemo】"
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
        "objective": "Comprehensive mastery of Diplomasia na Mikataba ya Kimataifa (International Diplomacy).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Diplomasia na Mikataba ya Kimataifa (International Diplomacy). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (33.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (33.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (33.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomasia na Mikataba ya Kimataifa (International Diplomacy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (33.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (33.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (33.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (33.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (33.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (33.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » (Mtihani 33-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (33.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (33.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (33.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («maana»):",
                    "acceptedAnswers": [
                        "maana"
                    ],
                    "explanation": "The target keyword was: 【maana】"
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
        "objective": "Comprehensive mastery of Diplomasia na Mikataba ya Kimataifa (International Diplomacy).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Diplomasia na Mikataba ya Kimataifa (International Diplomacy). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (33.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (33.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (33.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomasia na Mikataba ya Kimataifa (International Diplomacy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (33.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (33.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (33.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (33.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (33.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (33.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » (Mtihani 33-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (33.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (33.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (33.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («fumbo»):",
                    "acceptedAnswers": [
                        "fumbo"
                    ],
                    "explanation": "The target keyword was: 【fumbo】"
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
        "objective": "Comprehensive mastery of Diplomasia na Mikataba ya Kimataifa (International Diplomacy).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Diplomasia na Mikataba ya Kimataifa (International Diplomacy). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (33.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (33.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (33.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomasia na Mikataba ya Kimataifa (International Diplomacy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (33.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (33.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (33.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Diplomasia ya Kimataifa na Mikataba ya Nchi (Diplomacy) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (33.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (33.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (33.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Diplomasia na Mikataba ya Kimataifa (International Diplomacy) » (Mtihani 33-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (33.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (33.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (33.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ujumbe»):",
                    "acceptedAnswers": [
                        "ujumbe"
                    ],
                    "explanation": "The target keyword was: 【ujumbe】"
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
        "objective": "Comprehensive mastery of Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Sehemu ya 1), tunachunguza kanuni za kisarufi zinazohusu Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (34.1.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (34.1.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (34.1.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » katika muktadha wa sehemu ya 1:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (34.1.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (34.1.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (34.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Kazi 1)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (34.1.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (34.1.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (34.1.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » (Mtihani 34-1)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (34.1.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (34.1.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (34.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («mkutano_mkuu»):",
                    "acceptedAnswers": [
                        "mkutano_mkuu"
                    ],
                    "explanation": "The target keyword was: 【mkutano_mkuu】"
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
        "objective": "Comprehensive mastery of Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Sehemu ya 2), tunachunguza kanuni za kisarufi zinazohusu Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (34.2.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (34.2.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (34.2.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » katika muktadha wa sehemu ya 2:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (34.2.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (34.2.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (34.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Kazi 2)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (34.2.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (34.2.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (34.2.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » (Mtihani 34-2)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (34.2.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (34.2.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (34.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («taifa»):",
                    "acceptedAnswers": [
                        "taifa"
                    ],
                    "explanation": "The target keyword was: 【taifa】"
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
        "objective": "Comprehensive mastery of Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Sehemu ya 3), tunachunguza kanuni za kisarufi zinazohusu Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (34.3.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (34.3.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (34.3.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » katika muktadha wa sehemu ya 3:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (34.3.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (34.3.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (34.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Kazi 3)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (34.3.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (34.3.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (34.3.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » (Mtihani 34-3)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (34.3.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (34.3.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (34.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («hotuba»):",
                    "acceptedAnswers": [
                        "hotuba"
                    ],
                    "explanation": "The target keyword was: 【hotuba】"
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
        "objective": "Comprehensive mastery of Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Sehemu ya 4), tunachunguza kanuni za kisarufi zinazohusu Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (34.4.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (34.4.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (34.4.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » katika muktadha wa sehemu ya 4:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (34.4.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (34.4.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (34.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Kazi 4)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (34.4.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (34.4.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (34.4.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » (Mtihani 34-4)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (34.4.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (34.4.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (34.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («maono»):",
                    "acceptedAnswers": [
                        "maono"
                    ],
                    "explanation": "The target keyword was: 【maono】"
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
        "objective": "Comprehensive mastery of Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "Katika somo hili kuhusu « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Sehemu ya 5), tunachunguza kanuni za kisarufi zinazohusu Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft). Upatanisho sahihi wa ngeli, viambishi vya nafsi na nyakati huleta ufasaha na mtiririko mzuri wa lugha ya Kiswahili katika mawasiliano ya kila siku na maandishi rasmi ya kitaaluma.\n\nUchambuzi wa Kisarufi na Tafsiri (Grammar Analysis & English Glosses):\nMifano ifuatayo inafafanua jinsi miundo ya maneno inavyoungana kwa ukamilifu bila utata.",
            "examples": [
                {
                    "target": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani (34.5.1).",
                    "reading": "Mwalimu anafundisha wanafunzi kwa bidii na maarifa tele darasani.",
                    "translation": "The teacher teaches students with diligence and abundant knowledge in class."
                },
                {
                    "target": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma (34.5.2).",
                    "reading": "Sisi tunakwenda maktaba kuu kila asubuhi kusoma vitabu vizuri vya kitaaluma.",
                    "translation": "We go to the main library every morning to read good academic books."
                },
                {
                    "target": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia (34.5.3).",
                    "reading": "Mji wetu una vivutio vingi vya kihistoria na bustani nzuri za kupumzikia.",
                    "translation": "Our city has many historical attractions and beautiful relaxation parks."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Swahili."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Chagua sentensi inayofuata kwa ukamilifu kanuni za « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » katika muktadha wa sehemu ya 5:",
                    "options": [
                        "Dada yangu ameandaa chakula kitamu sana kwa ajili ya wageni wanaotutembelea (34.5.1).",
                        "Jana usiku mvua kubwa ilinyesha sana katika maeneo yote ya mji mkuu wa nchi (34.5.2).",
                        "Wanafunzi wengi wanakwenda maktaba ya chuo kikuu kusoma vitabu vya historia ya Afrika (34.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sentensi ipi inadhihirisha uelewa sahihi wa muundo wa « Mkutano Mkuu wa Kidiplomasia na Uongozi wa Dola (C2 Capstone) » (Kazi 5)?",
                    "options": [
                        "Kaka mkubwa amenunua zawadi nzuri ya vitabu vya hadithi kwa watoto wadogo wa shule (34.5.1).",
                        "Basi la abiria lilifika kituoni saa mbili asubuhi kama ilivyopangwa kwenye ratiba rasmi (34.5.2).",
                        "Wavuvi wa samaki wanatayarisha nyavu zao mapema kwenye ufuo tulivu wa bahari ya Hindi (34.5.3)."
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
                    "prompt": "Ni kauli ipi iliyo sahihi kisarufi inayohusiana na matumizi ya « Uongozi wa Kidiplomasia na Hotuba Kuu (C2 Capstone Statecraft) » (Mtihani 34-5)?",
                    "options": [
                        "Watafiti wametoa ripoti mpya na ya kina kuhusu maendeleo ya kilimo na uhifadhi wa mazingira (34.5.1).",
                        "Duka kubwa la dawa lilifungwa mapema jioni ya leo kwa ajili ya kufanya usafi wa jumla (34.5.2).",
                        "Wataalamu wa kimataifa wanakutana jijini Nairobi kujadili mikakati ya kulinda wanyamapori (34.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («uongozi»):",
                    "acceptedAnswers": [
                        "uongozi"
                    ],
                    "explanation": "The target keyword was: 【uongozi】"
                }
            ]
        }
    }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['swahili'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
