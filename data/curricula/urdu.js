// urdu curriculum
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "ur-u1",
    "unit": 1,
    "title": "نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings)",
    "level": "A1",
    "goal": "Mastery of نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings).",
    "lessonIds": [
      "ur-u1-l1",
      "ur-u1-l2",
      "ur-u1-l3",
      "ur-u1-l4",
      "ur-u1-l5"
    ]
  },
  {
    "id": "ur-u2",
    "unit": 2,
    "title": "اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals)",
    "level": "A1",
    "goal": "Mastery of اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals).",
    "lessonIds": [
      "ur-u2-l1",
      "ur-u2-l2",
      "ur-u2-l3",
      "ur-u2-l4",
      "ur-u2-l5"
    ]
  },
  {
    "id": "ur-u3",
    "unit": 3,
    "title": "ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case)",
    "level": "A1",
    "goal": "Mastery of ضمائر اور حالت مفعولی (Pronouns & Oblique Forms).",
    "lessonIds": [
      "ur-u3-l1",
      "ur-u3-l2",
      "ur-u3-l3",
      "ur-u3-l4",
      "ur-u3-l5"
    ]
  },
  {
    "id": "ur-u4",
    "unit": 4,
    "title": "فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense)",
    "level": "A1",
    "goal": "Mastery of فعل حال مطلق (Present Habitual Tense: تا/تی/تے).",
    "lessonIds": [
      "ur-u4-l1",
      "ur-u4-l2",
      "ur-u4-l3",
      "ur-u4-l4",
      "ur-u4-l5"
    ]
  },
  {
    "id": "ur-u5",
    "unit": 5,
    "title": "فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense)",
    "level": "A1",
    "goal": "Mastery of فعل حال جاری (Present Continuous: رہا/رہی ہے).",
    "lessonIds": [
      "ur-u5-l1",
      "ur-u5-l2",
      "ur-u5-l3",
      "ur-u5-l4",
      "ur-u5-l5"
    ]
  },
  {
    "id": "ur-u6",
    "unit": 6,
    "title": "فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے)",
    "level": "A2",
    "goal": "Mastery of فعل ماضی اور علامت فاعل نے (Simple Past with نے).",
    "lessonIds": [
      "ur-u6-l1",
      "ur-u6-l2",
      "ur-u6-l3",
      "ur-u6-l4",
      "ur-u6-l5"
    ]
  },
  {
    "id": "ur-u7",
    "unit": 7,
    "title": "فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect)",
    "level": "A2",
    "goal": "Mastery of ماضی استمراری اور ماضی بعید (Past Continuous & Perfect).",
    "lessonIds": [
      "ur-u7-l1",
      "ur-u7-l2",
      "ur-u7-l3",
      "ur-u7-l4",
      "ur-u7-l5"
    ]
  },
  {
    "id": "ur-u8",
    "unit": 8,
    "title": "فعل مستقبل اور شائستہ احکامات (Future Tense & Polite)",
    "level": "A2",
    "goal": "Mastery of فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders).",
    "lessonIds": [
      "ur-u8-l1",
      "ur-u8-l2",
      "ur-u8-l3",
      "ur-u8-l4",
      "ur-u8-l5"
    ]
  },
  {
    "id": "ur-u9",
    "unit": 9,
    "title": "ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے)",
    "level": "A2",
    "goal": "Mastery of وجوب اور چاہیے کا استعمال (Obligation with چاہیے).",
    "lessonIds": [
      "ur-u9-l1",
      "ur-u9-l2",
      "ur-u9-l3",
      "ur-u9-l4",
      "ur-u9-l5"
    ]
  },
  {
    "id": "ur-u10",
    "unit": 10,
    "title": "مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا)",
    "level": "A2",
    "goal": "Mastery of مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا).",
    "lessonIds": [
      "ur-u10-l1",
      "ur-u10-l2",
      "ur-u10-l3",
      "ur-u10-l4",
      "ur-u10-l5"
    ]
  },
  {
    "id": "ur-u11",
    "unit": 11,
    "title": "ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession)",
    "level": "B1",
    "goal": "Mastery of ملکیت کا/کے/کی اور کے پاس (Possession Structures).",
    "lessonIds": [
      "ur-u11-l1",
      "ur-u11-l2",
      "ur-u11-l3",
      "ur-u11-l4",
      "ur-u11-l5"
    ]
  },
  {
    "id": "ur-u12",
    "unit": 12,
    "title": "امدادی افعال اور مرکب افعال (Compound Verbs with Vectors)",
    "level": "B1",
    "goal": "Mastery of مرکب افعال اور امدادی افعال (Compound Verbs & Vectors).",
    "lessonIds": [
      "ur-u12-l1",
      "ur-u12-l2",
      "ur-u12-l3",
      "ur-u12-l4",
      "ur-u12-l5"
    ]
  },
  {
    "id": "ur-u13",
    "unit": 13,
    "title": "فعل مضارع اور احتمالی صورتیں (Subjunctive Mood)",
    "level": "B1",
    "goal": "Mastery of فعل مضارع اور امکان (Subjunctive Mood & Possibility).",
    "lessonIds": [
      "ur-u13-l1",
      "ur-u13-l2",
      "ur-u13-l3",
      "ur-u13-l4",
      "ur-u13-l5"
    ]
  },
  {
    "id": "ur-u14",
    "unit": 14,
    "title": "معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles)",
    "level": "B1",
    "goal": "Mastery of معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر).",
    "lessonIds": [
      "ur-u14-l1",
      "ur-u14-l2",
      "ur-u14-l3",
      "ur-u14-l4",
      "ur-u14-l5"
    ]
  },
  {
    "id": "ur-u15",
    "unit": 15,
    "title": "موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives)",
    "level": "B1",
    "goal": "Mastery of موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ).",
    "lessonIds": [
      "ur-u15-l1",
      "ur-u15-l2",
      "ur-u15-l3",
      "ur-u15-l4",
      "ur-u15-l5"
    ]
  },
  {
    "id": "ur-u16",
    "unit": 16,
    "title": "مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا)",
    "level": "B1",
    "goal": "Mastery of فعل مجہول کی ساختیں (Passive Voice with جانا).",
    "lessonIds": [
      "ur-u16-l1",
      "ur-u16-l2",
      "ur-u16-l3",
      "ur-u16-l4",
      "ur-u16-l5"
    ]
  },
  {
    "id": "ur-u17",
    "unit": 17,
    "title": "متعدی اور متعدی المتعدی افعال (Causative Verb Morphology)",
    "level": "B2",
    "goal": "Mastery of متعدی اور متعدی المتعدی افعال (Causative Morphology).",
    "lessonIds": [
      "ur-u17-l1",
      "ur-u17-l2",
      "ur-u17-l3",
      "ur-u17-l4",
      "ur-u17-l5"
    ]
  },
  {
    "id": "ur-u18",
    "unit": 18,
    "title": "شرطیہ اور امتناعی جملے (Conditional & Counterfactuals)",
    "level": "B2",
    "goal": "Mastery of اگر...تو شرطیہ جملے (Conditionals: اگر...تو).",
    "lessonIds": [
      "ur-u18-l1",
      "ur-u18-l2",
      "ur-u18-l3",
      "ur-u18-l4",
      "ur-u18-l5"
    ]
  },
  {
    "id": "ur-u19",
    "unit": 19,
    "title": "بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ)",
    "level": "B2",
    "goal": "Mastery of کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ).",
    "lessonIds": [
      "ur-u19-l1",
      "ur-u19-l2",
      "ur-u19-l3",
      "ur-u19-l4",
      "ur-u19-l5"
    ]
  },
  {
    "id": "ur-u20",
    "unit": 20,
    "title": "دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu)",
    "level": "B2",
    "goal": "Mastery of دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu).",
    "lessonIds": [
      "ur-u20-l1",
      "ur-u20-l2",
      "ur-u20-l3",
      "ur-u20-l4",
      "ur-u20-l5"
    ]
  },
  {
    "id": "ur-u21",
    "unit": 21,
    "title": "طبی مشاورت، امراض اور علاج (Medical Discourse)",
    "level": "B2",
    "goal": "Mastery of طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu).",
    "lessonIds": [
      "ur-u21-l1",
      "ur-u21-l2",
      "ur-u21-l3",
      "ur-u21-l4",
      "ur-u21-l5"
    ]
  },
  {
    "id": "ur-u22",
    "unit": 22,
    "title": "پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality)",
    "level": "B2",
    "goal": "Mastery of روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality).",
    "lessonIds": [
      "ur-u22-l1",
      "ur-u22-l2",
      "ur-u22-l3",
      "ur-u22-l4",
      "ur-u22-l5"
    ]
  },
  {
    "id": "ur-u23",
    "unit": 23,
    "title": "اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics)",
    "level": "B2",
    "goal": "Mastery of اردو غزل اور شعری روایات (Ghazal Poetics & Literature).",
    "lessonIds": [
      "ur-u23-l1",
      "ur-u23-l2",
      "ur-u23-l3",
      "ur-u23-l4",
      "ur-u23-l5"
    ]
  },
  {
    "id": "ur-u24",
    "unit": 24,
    "title": "بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance)",
    "level": "B2",
    "goal": "Mastery of بینکاری اور معاشی اصطلاحات (Banking & Digital Finance).",
    "lessonIds": [
      "ur-u24-l1",
      "ur-u24-l2",
      "ur-u24-l3",
      "ur-u24-l4",
      "ur-u24-l5"
    ]
  },
  {
    "id": "ur-u25",
    "unit": 25,
    "title": "ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology)",
    "level": "C1",
    "goal": "Mastery of زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture).",
    "lessonIds": [
      "ur-u25-l1",
      "ur-u25-l2",
      "ur-u25-l3",
      "ur-u25-l4",
      "ur-u25-l5"
    ]
  },
  {
    "id": "ur-u26",
    "unit": 26,
    "title": "آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law)",
    "level": "C1",
    "goal": "Mastery of آئین اور عدالتی اصطلاحات (Constitutional Law & Courts).",
    "lessonIds": [
      "ur-u26-l1",
      "ur-u26-l2",
      "ur-u26-l3",
      "ur-u26-l4",
      "ur-u26-l5"
    ]
  },
  {
    "id": "ur-u27",
    "unit": 27,
    "title": "کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose)",
    "level": "C1",
    "goal": "Mastery of کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature).",
    "lessonIds": [
      "ur-u27-l1",
      "ur-u27-l2",
      "ur-u27-l3",
      "ur-u27-l4",
      "ur-u27-l5"
    ]
  },
  {
    "id": "ur-u28",
    "unit": 28,
    "title": "صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism)",
    "level": "C1",
    "goal": "Mastery of صحافت اور ادارتی تحریریں (Journalism & Broadcasting).",
    "lessonIds": [
      "ur-u28-l1",
      "ur-u28-l2",
      "ur-u28-l3",
      "ur-u28-l4",
      "ur-u28-l5"
    ]
  },
  {
    "id": "ur-u29",
    "unit": 29,
    "title": "فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism)",
    "level": "C1",
    "goal": "Mastery of فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism).",
    "lessonIds": [
      "ur-u29-l1",
      "ur-u29-l2",
      "ur-u29-l3",
      "ur-u29-l4",
      "ur-u29-l5"
    ]
  },
  {
    "id": "ur-u30",
    "unit": 30,
    "title": "سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research)",
    "level": "C1",
    "goal": "Mastery of سائنسی تحقیق اور جدید ایجادات (Scientific Research).",
    "lessonIds": [
      "ur-u30-l1",
      "ur-u30-l2",
      "ur-u30-l3",
      "ur-u30-l4",
      "ur-u30-l5"
    ]
  },
  {
    "id": "ur-u31",
    "unit": 31,
    "title": "جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics)",
    "level": "C2",
    "goal": "Mastery of خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy).",
    "lessonIds": [
      "ur-u31-l1",
      "ur-u31-l2",
      "ur-u31-l3",
      "ur-u31-l4",
      "ur-u31-l5"
    ]
  },
  {
    "id": "ur-u32",
    "unit": 32,
    "title": "سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties)",
    "level": "C2",
    "goal": "Mastery of سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol).",
    "lessonIds": [
      "ur-u32-l1",
      "ur-u32-l2",
      "ur-u32-l3",
      "ur-u32-l4",
      "ur-u32-l5"
    ]
  },
  {
    "id": "ur-u33",
    "unit": 33,
    "title": "اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms)",
    "level": "C2",
    "goal": "Mastery of محاورات اور ضرب الامثال (Advanced Idioms & Proverbs).",
    "lessonIds": [
      "ur-u33-l1",
      "ur-u33-l2",
      "ur-u33-l3",
      "ur-u33-l4",
      "ur-u33-l5"
    ]
  },
  {
    "id": "ur-u34",
    "unit": 34,
    "title": "سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft)",
    "level": "C2",
    "goal": "Mastery of سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft).",
    "lessonIds": [
      "ur-u34-l1",
      "ur-u34-l2",
      "ur-u34-l3",
      "ur-u34-l4",
      "ur-u34-l5"
    ]
  }
];
  var LESSONS = {
  "ur-u1-l1": {
    "id": "ur-u1-l1",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 1,
    "title": "نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) (Part 1)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for نستعلیق رسم الخط اور بنیادی آداب with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "السلام علیکم، آپ کا مزاج کیسا ہے؟",
          "reading": "assalam-o-alaikum, aap ka mizaj kaisa hai? [əsːəlaːmʊ ʔəlɛːkʊm, aːp kaː mɪzaːdʒ kɛːsaː hɛː] (uh-suh-LAHM-oh-ah-LY-koom)",
          "translation": "Peace be upon you, how is your health/mood?"
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 1-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"السلام علیکم\":",
          "options": [
            "السلام علیکم، آپ کا مزاج کیسا ہے؟",
            "قواعد اور تذکیر و تانیث کی غلطی («شکریہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («برائے مہربانی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خدا حافظ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"السلام علیکم\":",
          "options": [
            "السلام علیکم، آپ کا مزاج کیسا ہے؟",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («برائے مہربانی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خدا حافظ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شکریہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"السلام علیکم\": Which sentence is completely correct?",
          "options": [
            "السلام علیکم، آپ کا مزاج کیسا ہے؟",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خدا حافظ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شکریہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («برائے مہربانی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u1-l2": {
    "id": "ur-u1-l2",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 2,
    "title": "نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) (Part 2)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for تعارف اور شائستہ گفتگو with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "میرا نام احمد ہے، آپ سے مل کر دلی مسرت ہوئی۔",
          "reading": "mera naam ahmad hai, aap se mil kar dili musarrat hui [meːraː naːm ʔəɦməd̪ hɛː] (MAY-rah NAHM)",
          "translation": "My name is Ahmad, hearty pleasure to meet you."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 1-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"شکریہ\":",
          "options": [
            "میرا نام احمد ہے، آپ سے مل کر دلی مسرت ہوئی۔",
            "قواعد اور تذکیر و تانیث کی غلطی («برائے مہربانی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خدا حافظ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («معاف کیجیے» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"شکریہ\":",
          "options": [
            "میرا نام احمد ہے، آپ سے مل کر دلی مسرت ہوئی۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خدا حافظ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («معاف کیجیے» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («برائے مہربانی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"شکریہ\": Which sentence is completely correct?",
          "options": [
            "میرا نام احمد ہے، آپ سے مل کر دلی مسرت ہوئی۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («معاف کیجیے» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («برائے مہربانی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خدا حافظ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u1-l3": {
    "id": "ur-u1-l3",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 3,
    "title": "نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) (Part 3)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for شکریہ اور احسان شناسی کے آداب with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "آپ کے اس پرخلوص تعاون کا بہت بہت شکریہ۔",
          "reading": "aap ke is pur-khuloos taawun ka bahut bahut shukriya [aːp keː ɪs pʊr xʊluːs təʔaːwʊn kaː ʃʊkrɪjaː] (SHUK-ree-yah)",
          "translation": "Thank you very much for this sincere cooperation."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 1-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"برائے مہربانی\":",
          "options": [
            "آپ کے اس پرخلوص تعاون کا بہت بہت شکریہ۔",
            "قواعد اور تذکیر و تانیث کی غلطی («خدا حافظ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («معاف کیجیے» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خوش آمدید» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"برائے مہربانی\":",
          "options": [
            "آپ کے اس پرخلوص تعاون کا بہت بہت شکریہ۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («معاف کیجیے» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خوش آمدید» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خدا حافظ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"برائے مہربانی\": Which sentence is completely correct?",
          "options": [
            "آپ کے اس پرخلوص تعاون کا بہت بہت شکریہ۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خوش آمدید» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خدا حافظ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («معاف کیجیے» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u1-l4": {
    "id": "ur-u1-l4",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 4,
    "title": "نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) (Part 4)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for معذرت اور باوقار انداز تخاطب with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "معاف کیجیے گا، کیا آپ مجھے لائبریری کا راستہ بتا سکتے ہیں؟",
          "reading": "maaf kijiye ga, kya aap mujhe library ka raasta bata sakte hain? [maːf kiːdʒɪjeː gaː] (MAHF KEE-jee-yay GAH)",
          "translation": "Excuse me, could you tell me the way to the library?"
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 1-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"خدا حافظ\":",
          "options": [
            "معاف کیجیے گا، کیا آپ مجھے لائبریری کا راستہ بتا سکتے ہیں؟",
            "قواعد اور تذکیر و تانیث کی غلطی («معاف کیجیے» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خوش آمدید» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مبارک» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"خدا حافظ\":",
          "options": [
            "معاف کیجیے گا، کیا آپ مجھے لائبریری کا راستہ بتا سکتے ہیں؟",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خوش آمدید» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مبارک» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («معاف کیجیے» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"خدا حافظ\": Which sentence is completely correct?",
          "options": [
            "معاف کیجیے گا، کیا آپ مجھے لائبریری کا راستہ بتا سکتے ہیں؟",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مبارک» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («معاف کیجیے» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خوش آمدید» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u1-l5": {
    "id": "ur-u1-l5",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 5,
    "title": "نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) (Part 5)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for رخصت اور الوداعی کلمات with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "خدا حافظ، انشاء اللہ کل صبح دفتر میں ملاقات ہوگی۔",
          "reading": "khuda hafiz, insha Allah kal subah daftar mein mulaqat hogi [xʊd̪aː haːfɪz] (khoo-DAH HAH-fiz)",
          "translation": "Goodbye (God protect you), God willing see you at the office tomorrow."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 1-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"معاف کیجیے\":",
          "options": [
            "خدا حافظ، انشاء اللہ کل صبح دفتر میں ملاقات ہوگی۔",
            "قواعد اور تذکیر و تانیث کی غلطی («خوش آمدید» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مبارک» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ناشتہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"معاف کیجیے\":",
          "options": [
            "خدا حافظ، انشاء اللہ کل صبح دفتر میں ملاقات ہوگی۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مبارک» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ناشتہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خوش آمدید» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"معاف کیجیے\": Which sentence is completely correct?",
          "options": [
            "خدا حافظ، انشاء اللہ کل صبح دفتر میں ملاقات ہوگی۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ناشتہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خوش آمدید» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مبارک» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u2-l1": {
    "id": "ur-u2-l1",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 1,
    "title": "اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) (Part 1)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 2.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 2-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"خوش آمدید\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («مبارک» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ناشتہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوپہر کا کھانا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"خوش آمدید\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ناشتہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوپہر کا کھانا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مبارک» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"خوش آمدید\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوپہر کا کھانا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مبارک» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ناشتہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u2-l2": {
    "id": "ur-u2-l2",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 2,
    "title": "اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) (Part 2)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 2.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 2-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"مبارک\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ناشتہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوپہر کا کھانا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رات کا کھانا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"مبارک\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوپہر کا کھانا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رات کا کھانا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ناشتہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"مبارک\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رات کا کھانا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ناشتہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوپہر کا کھانا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u2-l3": {
    "id": "ur-u2-l3",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 3,
    "title": "اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) (Part 3)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 2.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 2-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ناشتہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دوپہر کا کھانا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رات کا کھانا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پانی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ناشتہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رات کا کھانا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پانی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوپہر کا کھانا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ناشتہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پانی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوپہر کا کھانا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رات کا کھانا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u2-l4": {
    "id": "ur-u2-l4",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 4,
    "title": "اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) (Part 4)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 2.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 2-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دوپہر کا کھانا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («رات کا کھانا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پانی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دودھ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دوپہر کا کھانا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پانی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دودھ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («رات کا کھانا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دوپہر کا کھانا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دودھ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («رات کا کھانا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پانی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u2-l5": {
    "id": "ur-u2-l5",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 5,
    "title": "اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) (Part 5)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 2.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 2-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"رات کا کھانا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پانی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دودھ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چائے» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"رات کا کھانا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دودھ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چائے» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پانی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"رات کا کھانا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چائے» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پانی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دودھ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u3-l1": {
    "id": "ur-u3-l1",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 1,
    "title": "ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) (Part 1)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 3.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 3-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پانی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دودھ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چائے» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («روٹی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پانی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چائے» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («روٹی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دودھ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پانی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («روٹی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دودھ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چائے» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u3-l2": {
    "id": "ur-u3-l2",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 2,
    "title": "ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) (Part 2)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 3.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 3-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دودھ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («چائے» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («روٹی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چاول» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دودھ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («روٹی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چاول» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چائے» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دودھ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چاول» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چائے» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («روٹی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u3-l3": {
    "id": "ur-u3-l3",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 3,
    "title": "ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) (Part 3)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 3.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 3-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"چائے\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («روٹی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چاول» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سالن» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"چائے\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چاول» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سالن» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («روٹی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"چائے\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سالن» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («روٹی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چاول» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u3-l4": {
    "id": "ur-u3-l4",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 4,
    "title": "ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) (Part 4)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 3.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 3-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"روٹی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («چاول» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سالن» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبزی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"روٹی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سالن» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبزی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چاول» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"روٹی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبزی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چاول» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سالن» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u3-l5": {
    "id": "ur-u3-l5",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 5,
    "title": "ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) (Part 5)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 3.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 3-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"چاول\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سالن» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبزی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پھل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"چاول\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبزی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پھل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سالن» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"چاول\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پھل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سالن» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبزی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u4-l1": {
    "id": "ur-u4-l1",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 1,
    "title": "فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) (Part 1)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 4.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 4-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سالن\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سبزی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پھل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مٹھائی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سالن\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پھل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مٹھائی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سبزی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سالن\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مٹھائی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سبزی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پھل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u4-l2": {
    "id": "ur-u4-l2",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 2,
    "title": "فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) (Part 2)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 4.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 4-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سبزی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پھل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مٹھائی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بریانی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سبزی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مٹھائی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بریانی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پھل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سبزی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بریانی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پھل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مٹھائی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u4-l3": {
    "id": "ur-u4-l3",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 3,
    "title": "فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) (Part 3)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 4.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 4-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پھل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («مٹھائی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بریانی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گاڑی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پھل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بریانی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گاڑی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مٹھائی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پھل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گاڑی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مٹھائی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بریانی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u4-l4": {
    "id": "ur-u4-l4",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 4,
    "title": "فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) (Part 4)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 4.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 4-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"مٹھائی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بریانی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گاڑی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بس» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"مٹھائی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گاڑی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بس» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بریانی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"مٹھائی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بس» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بریانی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گاڑی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u4-l5": {
    "id": "ur-u4-l5",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 5,
    "title": "فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) (Part 5)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 4.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 4-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بریانی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («گاڑی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بس» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ریل گاڑی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بریانی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بس» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ریل گاڑی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گاڑی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بریانی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ریل گاڑی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گاڑی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بس» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u5-l1": {
    "id": "ur-u5-l1",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 1,
    "title": "فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) (Part 1)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 5.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 5-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"گاڑی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بس» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ریل گاڑی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («طیارہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"گاڑی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ریل گاڑی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («طیارہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بس» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"گاڑی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («طیارہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بس» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ریل گاڑی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u5-l2": {
    "id": "ur-u5-l2",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 2,
    "title": "فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) (Part 2)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 5.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 5-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بس\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ریل گاڑی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («طیارہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («میٹرو» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بس\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («طیارہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («میٹرو» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ریل گاڑی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بس\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («میٹرو» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ریل گاڑی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («طیارہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u5-l3": {
    "id": "ur-u5-l3",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 3,
    "title": "فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) (Part 3)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 5.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 5-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ریل گاڑی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («طیارہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («میٹرو» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ٹکٹ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ریل گاڑی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («میٹرو» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ٹکٹ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («طیارہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ریل گاڑی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ٹکٹ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («طیارہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («میٹرو» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u5-l4": {
    "id": "ur-u5-l4",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 4,
    "title": "فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) (Part 4)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 5.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 5-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"طیارہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («میٹرو» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ٹکٹ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اسٹیشن» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"طیارہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ٹکٹ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اسٹیشن» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («میٹرو» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"طیارہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اسٹیشن» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («میٹرو» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ٹکٹ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u5-l5": {
    "id": "ur-u5-l5",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 5,
    "title": "فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) (Part 5)",
    "level": "A1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 5.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 5-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"میٹرو\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ٹکٹ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اسٹیشن» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہوائی اڈہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"میٹرو\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اسٹیشن» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہوائی اڈہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ٹکٹ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"میٹرو\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہوائی اڈہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ٹکٹ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اسٹیشن» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u6-l1": {
    "id": "ur-u6-l1",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 1,
    "title": "فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) (Part 1)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 6.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 6-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ٹکٹ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («اسٹیشن» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہوائی اڈہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سڑک» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ٹکٹ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہوائی اڈہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سڑک» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اسٹیشن» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ٹکٹ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سڑک» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اسٹیشن» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہوائی اڈہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u6-l2": {
    "id": "ur-u6-l2",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 2,
    "title": "فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) (Part 2)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 6.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 6-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"اسٹیشن\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ہوائی اڈہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سڑک» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شہر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"اسٹیشن\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سڑک» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شہر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہوائی اڈہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"اسٹیشن\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شہر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہوائی اڈہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سڑک» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u6-l3": {
    "id": "ur-u6-l3",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 3,
    "title": "فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) (Part 3)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 6.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 6-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ہوائی اڈہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سڑک» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شہر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دکان» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ہوائی اڈہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شہر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دکان» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سڑک» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ہوائی اڈہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دکان» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سڑک» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شہر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u6-l4": {
    "id": "ur-u6-l4",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 4,
    "title": "فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) (Part 4)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 6.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 6-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سڑک\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («شہر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دکان» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («روپیہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سڑک\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دکان» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («روپیہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شہر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سڑک\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («روپیہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شہر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دکان» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u6-l5": {
    "id": "ur-u6-l5",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 5,
    "title": "فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) (Part 5)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 6.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 6-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"شہر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دکان» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («روپیہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پیسہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"شہر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («روپیہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پیسہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دکان» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"شہر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پیسہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دکان» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («روپیہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u7-l1": {
    "id": "ur-u7-l1",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 1,
    "title": "فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) (Part 1)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 7.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 7-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دکان\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («روپیہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پیسہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قیمت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دکان\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پیسہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قیمت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («روپیہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دکان\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قیمت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («روپیہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پیسہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u7-l2": {
    "id": "ur-u7-l2",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 2,
    "title": "فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) (Part 2)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 7.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 7-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"روپیہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پیسہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قیمت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رعایت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"روپیہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قیمت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رعایت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پیسہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"روپیہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رعایت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پیسہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قیمت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u7-l3": {
    "id": "ur-u7-l3",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 3,
    "title": "فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) (Part 3)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 7.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 7-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پیسہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («قیمت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رعایت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پیسہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رعایت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قیمت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پیسہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قیمت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رعایت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u7-l4": {
    "id": "ur-u7-l4",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 4,
    "title": "فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) (Part 4)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 7.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 7-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"قیمت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («رعایت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بازار» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"قیمت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بازار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («رعایت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"قیمت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بازار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («رعایت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u7-l5": {
    "id": "ur-u7-l5",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 5,
    "title": "فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) (Part 5)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 7.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 7-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"رعایت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بازار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خریداری» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"رعایت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بازار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خریداری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"رعایت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خریداری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بازار» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u8-l1": {
    "id": "ur-u8-l1",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 1,
    "title": "فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) (Part 1)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 8.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 8-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بازار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خریداری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کارڈ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خریداری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کارڈ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بازار» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کارڈ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بازار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خریداری» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u8-l2": {
    "id": "ur-u8-l2",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 2,
    "title": "فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) (Part 2)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 8.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 8-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بازار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («خریداری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کارڈ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نقد» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بازار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کارڈ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نقد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خریداری» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بازار\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نقد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خریداری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کارڈ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u8-l3": {
    "id": "ur-u8-l3",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 3,
    "title": "فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) (Part 3)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 8.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 8-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"خریداری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کارڈ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نقد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گھر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"خریداری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نقد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گھر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کارڈ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"خریداری\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گھر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کارڈ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نقد» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u8-l4": {
    "id": "ur-u8-l4",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 4,
    "title": "فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) (Part 4)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 8.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 8-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کارڈ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («نقد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گھر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کمرہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کارڈ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گھر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کمرہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نقد» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کارڈ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کمرہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نقد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گھر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u8-l5": {
    "id": "ur-u8-l5",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 5,
    "title": "فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) (Part 5)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 8.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 8-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"نقد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («گھر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کمرہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («باورچی خانہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"نقد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کمرہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («باورچی خانہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گھر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"نقد\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («باورچی خانہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گھر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کمرہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u9-l1": {
    "id": "ur-u9-l1",
    "subject": "urdu",
    "unit": 9,
    "lessonNumber": 1,
    "title": "ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) (Part 1)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 9.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 9-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"گھر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کمرہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («باورچی خانہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھڑکی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"گھر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («باورچی خانہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھڑکی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کمرہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"گھر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھڑکی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کمرہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («باورچی خانہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u9-l2": {
    "id": "ur-u9-l2",
    "subject": "urdu",
    "unit": 9,
    "lessonNumber": 2,
    "title": "ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) (Part 2)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 9.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 9-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کمرہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («باورچی خانہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھڑکی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دروازہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کمرہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھڑکی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دروازہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («باورچی خانہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کمرہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دروازہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («باورچی خانہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھڑکی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u9-l3": {
    "id": "ur-u9-l3",
    "subject": "urdu",
    "unit": 9,
    "lessonNumber": 3,
    "title": "ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) (Part 3)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 9.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 9-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"باورچی خانہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کھڑکی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دروازہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («میز» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"باورچی خانہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دروازہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («میز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کھڑکی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"باورچی خانہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («میز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کھڑکی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دروازہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u9-l4": {
    "id": "ur-u9-l4",
    "subject": "urdu",
    "unit": 9,
    "lessonNumber": 4,
    "title": "ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) (Part 4)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 9.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 9-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کھڑکی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دروازہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («میز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کرسی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کھڑکی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («میز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کرسی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دروازہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کھڑکی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کرسی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دروازہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («میز» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u9-l5": {
    "id": "ur-u9-l5",
    "subject": "urdu",
    "unit": 9,
    "lessonNumber": 5,
    "title": "ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) (Part 5)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 9.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 9-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دروازہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («میز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کرسی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بستر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دروازہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کرسی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بستر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («میز» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دروازہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بستر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («میز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کرسی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u10-l1": {
    "id": "ur-u10-l1",
    "subject": "urdu",
    "unit": 10,
    "lessonNumber": 1,
    "title": "مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) (Part 1)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 10.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 10-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"میز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کرسی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بستر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دیوار» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"میز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بستر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دیوار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کرسی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"میز\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دیوار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کرسی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بستر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u10-l2": {
    "id": "ur-u10-l2",
    "subject": "urdu",
    "unit": 10,
    "lessonNumber": 2,
    "title": "مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) (Part 2)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 10.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 10-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کرسی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بستر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دیوار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کرسی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دیوار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بستر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کرسی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بستر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دیوار» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u10-l3": {
    "id": "ur-u10-l3",
    "subject": "urdu",
    "unit": 10,
    "lessonNumber": 3,
    "title": "مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) (Part 3)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 10.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 10-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بستر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دیوار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کام» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بستر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کام» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دیوار» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بستر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کام» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دیوار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u10-l4": {
    "id": "ur-u10-l4",
    "subject": "urdu",
    "unit": 10,
    "lessonNumber": 4,
    "title": "مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) (Part 4)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 10.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 10-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دیوار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («چھت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کام» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دفتر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دیوار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کام» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دفتر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چھت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دیوار\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دفتر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چھت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کام» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u10-l5": {
    "id": "ur-u10-l5",
    "subject": "urdu",
    "unit": 10,
    "lessonNumber": 5,
    "title": "مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) (Part 5)",
    "level": "A2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 10.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 10-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"چھت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کام» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دفتر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ساتھی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"چھت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دفتر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ساتھی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کام» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"چھت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ساتھی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کام» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دفتر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u11-l1": {
    "id": "ur-u11-l1",
    "subject": "urdu",
    "unit": 11,
    "lessonNumber": 1,
    "title": "ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) (Part 1)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 11.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 11-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کام\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دفتر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ساتھی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («افسر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کام\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ساتھی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («افسر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دفتر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کام\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («افسر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دفتر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ساتھی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u11-l2": {
    "id": "ur-u11-l2",
    "subject": "urdu",
    "unit": 11,
    "lessonNumber": 2,
    "title": "ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) (Part 2)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 11.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 11-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دفتر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ساتھی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («افسر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تنخواہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دفتر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («افسر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تنخواہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ساتھی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دفتر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تنخواہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ساتھی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («افسر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u11-l3": {
    "id": "ur-u11-l3",
    "subject": "urdu",
    "unit": 11,
    "lessonNumber": 3,
    "title": "ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) (Part 3)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 11.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 11-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ساتھی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («افسر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تنخواہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھٹی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ساتھی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تنخواہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھٹی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («افسر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ساتھی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھٹی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («افسر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تنخواہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u11-l4": {
    "id": "ur-u11-l4",
    "subject": "urdu",
    "unit": 11,
    "lessonNumber": 4,
    "title": "ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) (Part 4)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 11.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 11-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"افسر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («تنخواہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھٹی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اجلاس» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"افسر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھٹی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اجلاس» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («تنخواہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"افسر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اجلاس» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («تنخواہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھٹی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u11-l5": {
    "id": "ur-u11-l5",
    "subject": "urdu",
    "unit": 11,
    "lessonNumber": 5,
    "title": "ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) (Part 5)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 11.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 11-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"تنخواہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («چھٹی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اجلاس» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («منصوبہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"تنخواہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اجلاس» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («منصوبہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چھٹی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"تنخواہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («منصوبہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چھٹی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اجلاس» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u12-l1": {
    "id": "ur-u12-l1",
    "subject": "urdu",
    "unit": 12,
    "lessonNumber": 1,
    "title": "امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) (Part 1)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 12.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 12-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"چھٹی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («اجلاس» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («منصوبہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («معاہدہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"چھٹی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («منصوبہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («معاہدہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اجلاس» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"چھٹی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («معاہدہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اجلاس» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («منصوبہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u12-l2": {
    "id": "ur-u12-l2",
    "subject": "urdu",
    "unit": 12,
    "lessonNumber": 2,
    "title": "امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) (Part 2)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 12.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 12-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"اجلاس\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («منصوبہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («معاہدہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کاروبار» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"اجلاس\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («معاہدہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کاروبار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («منصوبہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"اجلاس\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کاروبار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («منصوبہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («معاہدہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u12-l3": {
    "id": "ur-u12-l3",
    "subject": "urdu",
    "unit": 12,
    "lessonNumber": 3,
    "title": "امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) (Part 3)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 12.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 12-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"منصوبہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («معاہدہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کاروبار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کتاب» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"منصوبہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کاروبار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کتاب» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («معاہدہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"منصوبہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کتاب» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («معاہدہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کاروبار» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u12-l4": {
    "id": "ur-u12-l4",
    "subject": "urdu",
    "unit": 12,
    "lessonNumber": 4,
    "title": "امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) (Part 4)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 12.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 12-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"معاہدہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کاروبار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کتاب» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («موسیقی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"معاہدہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کتاب» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («موسیقی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کاروبار» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"معاہدہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («موسیقی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کاروبار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کتاب» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u12-l5": {
    "id": "ur-u12-l5",
    "subject": "urdu",
    "unit": 12,
    "lessonNumber": 5,
    "title": "امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) (Part 5)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 12.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 12-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کاروبار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کتاب» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («موسیقی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («فلم» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کاروبار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («موسیقی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («فلم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کتاب» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کاروبار\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («فلم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کتاب» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («موسیقی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u13-l1": {
    "id": "ur-u13-l1",
    "subject": "urdu",
    "unit": 13,
    "lessonNumber": 1,
    "title": "فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) (Part 1)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 13.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 13-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کتاب\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («موسیقی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («فلم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھیل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کتاب\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («فلم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھیل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («موسیقی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کتاب\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھیل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («موسیقی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («فلم» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u13-l2": {
    "id": "ur-u13-l2",
    "subject": "urdu",
    "unit": 13,
    "lessonNumber": 2,
    "title": "فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) (Part 2)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 13.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 13-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"موسیقی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («فلم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھیل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کرکٹ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"موسیقی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھیل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کرکٹ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («فلم» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"موسیقی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کرکٹ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («فلم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھیل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u13-l3": {
    "id": "ur-u13-l3",
    "subject": "urdu",
    "unit": 13,
    "lessonNumber": 3,
    "title": "فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) (Part 3)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 13.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 13-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"فلم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کھیل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کرکٹ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سفر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"فلم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کرکٹ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سفر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کھیل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"فلم\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سفر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کھیل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کرکٹ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u13-l4": {
    "id": "ur-u13-l4",
    "subject": "urdu",
    "unit": 13,
    "lessonNumber": 4,
    "title": "فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) (Part 4)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 13.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 13-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کھیل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کرکٹ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سفر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شاعری» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کھیل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سفر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شاعری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کرکٹ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کھیل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شاعری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کرکٹ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سفر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u13-l5": {
    "id": "ur-u13-l5",
    "subject": "urdu",
    "unit": 13,
    "lessonNumber": 5,
    "title": "فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) (Part 5)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 13.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 13-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کرکٹ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سفر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شاعری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مشاعرہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کرکٹ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شاعری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مشاعرہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سفر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کرکٹ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مشاعرہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سفر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شاعری» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u14-l1": {
    "id": "ur-u14-l1",
    "subject": "urdu",
    "unit": 14,
    "lessonNumber": 1,
    "title": "معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) (Part 1)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 14.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 14-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سفر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («شاعری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مشاعرہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ادب» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سفر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مشاعرہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ادب» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شاعری» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سفر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ادب» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شاعری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مشاعرہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u14-l2": {
    "id": "ur-u14-l2",
    "subject": "urdu",
    "unit": 14,
    "lessonNumber": 2,
    "title": "معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) (Part 2)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 14.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 14-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"شاعری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («مشاعرہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ادب» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («غزل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"شاعری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ادب» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («غزل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مشاعرہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"شاعری\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («غزل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مشاعرہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ادب» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u14-l3": {
    "id": "ur-u14-l3",
    "subject": "urdu",
    "unit": 14,
    "lessonNumber": 3,
    "title": "معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) (Part 3)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 14.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 14-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"مشاعرہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ادب» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («غزل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («موسم» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"مشاعرہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («غزل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («موسم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ادب» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"مشاعرہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («موسم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ادب» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («غزل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u14-l4": {
    "id": "ur-u14-l4",
    "subject": "urdu",
    "unit": 14,
    "lessonNumber": 4,
    "title": "معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) (Part 4)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 14.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 14-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ادب\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («غزل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («موسم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سورج» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ادب\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («موسم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سورج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («غزل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ادب\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سورج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («غزل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («موسم» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u14-l5": {
    "id": "ur-u14-l5",
    "subject": "urdu",
    "unit": 14,
    "lessonNumber": 5,
    "title": "معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) (Part 5)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 14.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 14-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"غزل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («موسم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سورج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بارش» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"غزل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سورج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بارش» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («موسم» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"غزل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بارش» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («موسم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سورج» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u15-l1": {
    "id": "ur-u15-l1",
    "subject": "urdu",
    "unit": 15,
    "lessonNumber": 1,
    "title": "موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) (Part 1)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 15.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 15-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"موسم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سورج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بارش» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہوا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"موسم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بارش» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہوا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سورج» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"موسم\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہوا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سورج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بارش» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u15-l2": {
    "id": "ur-u15-l2",
    "subject": "urdu",
    "unit": 15,
    "lessonNumber": 2,
    "title": "موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) (Part 2)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 15.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 15-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سورج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بارش» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہوا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بادل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سورج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہوا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بادل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بارش» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سورج\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بادل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بارش» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہوا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u15-l3": {
    "id": "ur-u15-l3",
    "subject": "urdu",
    "unit": 15,
    "lessonNumber": 3,
    "title": "موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) (Part 3)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 15.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 15-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بارش\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ہوا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بادل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گرمی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بارش\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بادل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گرمی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہوا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بارش\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گرمی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہوا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بادل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u15-l4": {
    "id": "ur-u15-l4",
    "subject": "urdu",
    "unit": 15,
    "lessonNumber": 4,
    "title": "موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) (Part 4)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 15.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 15-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ہوا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بادل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گرمی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سردی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ہوا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گرمی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سردی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بادل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ہوا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سردی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بادل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گرمی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u15-l5": {
    "id": "ur-u15-l5",
    "subject": "urdu",
    "unit": 15,
    "lessonNumber": 5,
    "title": "موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) (Part 5)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 15.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 15-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بادل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («گرمی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سردی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بہار» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بادل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سردی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بہار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گرمی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بادل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بہار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گرمی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سردی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u16-l1": {
    "id": "ur-u16-l1",
    "subject": "urdu",
    "unit": 16,
    "lessonNumber": 1,
    "title": "مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) (Part 1)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 16.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 16-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"گرمی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سردی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بہار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خزاں» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"گرمی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بہار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خزاں» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سردی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"گرمی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خزاں» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سردی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بہار» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u16-l2": {
    "id": "ur-u16-l2",
    "subject": "urdu",
    "unit": 16,
    "lessonNumber": 2,
    "title": "مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) (Part 2)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 16.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 16-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سردی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بہار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خزاں» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («درجہ حرارت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سردی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خزاں» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («درجہ حرارت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بہار» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سردی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («درجہ حرارت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بہار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خزاں» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u16-l3": {
    "id": "ur-u16-l3",
    "subject": "urdu",
    "unit": 16,
    "lessonNumber": 3,
    "title": "مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) (Part 3)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 16.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 16-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بہار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («خزاں» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («درجہ حرارت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ڈاکٹر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بہار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («درجہ حرارت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ڈاکٹر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خزاں» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بہار\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ڈاکٹر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خزاں» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («درجہ حرارت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u16-l4": {
    "id": "ur-u16-l4",
    "subject": "urdu",
    "unit": 16,
    "lessonNumber": 4,
    "title": "مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) (Part 4)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 16.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 16-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"خزاں\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («درجہ حرارت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ڈاکٹر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"خزاں\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ڈاکٹر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («درجہ حرارت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"خزاں\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («درجہ حرارت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ڈاکٹر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u16-l5": {
    "id": "ur-u16-l5",
    "subject": "urdu",
    "unit": 16,
    "lessonNumber": 5,
    "title": "مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) (Part 5)",
    "level": "B1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 16.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 16-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"درجہ حرارت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ڈاکٹر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہسپتال» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"درجہ حرارت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہسپتال» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ڈاکٹر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"درجہ حرارت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہسپتال» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ڈاکٹر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u17-l1": {
    "id": "ur-u17-l1",
    "subject": "urdu",
    "unit": 17,
    "lessonNumber": 1,
    "title": "متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 17.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 17-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ڈاکٹر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دوا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہسپتال» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («صحت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ڈاکٹر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہسپتال» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («صحت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ڈاکٹر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («صحت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہسپتال» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u17-l2": {
    "id": "ur-u17-l2",
    "subject": "urdu",
    "unit": 17,
    "lessonNumber": 2,
    "title": "متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 17.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 17-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دوا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ہسپتال» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («صحت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («علاج» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دوا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («صحت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («علاج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہسپتال» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دوا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («علاج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہسپتال» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («صحت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u17-l3": {
    "id": "ur-u17-l3",
    "subject": "urdu",
    "unit": 17,
    "lessonNumber": 3,
    "title": "متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 17.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 17-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ہسپتال\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («صحت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («علاج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بخار» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ہسپتال\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («علاج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بخار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («صحت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ہسپتال\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بخار» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («صحت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («علاج» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u17-l4": {
    "id": "ur-u17-l4",
    "subject": "urdu",
    "unit": 17,
    "lessonNumber": 4,
    "title": "متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 17.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 17-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"صحت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («علاج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بخار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سر درد» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"صحت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بخار» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سر درد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («علاج» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"صحت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سر درد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («علاج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بخار» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u17-l5": {
    "id": "ur-u17-l5",
    "subject": "urdu",
    "unit": 17,
    "lessonNumber": 5,
    "title": "متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 17.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 17-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"علاج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بخار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سر درد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آنکھیں» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"علاج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سر درد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آنکھیں» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بخار» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"علاج\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آنکھیں» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بخار» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سر درد» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u18-l1": {
    "id": "ur-u18-l1",
    "subject": "urdu",
    "unit": 18,
    "lessonNumber": 1,
    "title": "شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 18.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 18-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بخار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سر درد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آنکھیں» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہاتھ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بخار\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آنکھیں» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہاتھ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سر درد» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بخار\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہاتھ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سر درد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آنکھیں» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u18-l2": {
    "id": "ur-u18-l2",
    "subject": "urdu",
    "unit": 18,
    "lessonNumber": 2,
    "title": "شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 18.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 18-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سر درد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («آنکھیں» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہاتھ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سر درد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہاتھ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آنکھیں» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سر درد\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آنکھیں» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہاتھ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u18-l3": {
    "id": "ur-u18-l3",
    "subject": "urdu",
    "unit": 18,
    "lessonNumber": 3,
    "title": "شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 18.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 18-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"آنکھیں\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ہاتھ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خاندان» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"آنکھیں\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خاندان» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہاتھ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"آنکھیں\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خاندان» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہاتھ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u18-l4": {
    "id": "ur-u18-l4",
    "subject": "urdu",
    "unit": 18,
    "lessonNumber": 4,
    "title": "شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 18.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 18-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ہاتھ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خاندان» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («والد» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ہاتھ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خاندان» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («والد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ہاتھ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («والد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خاندان» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u18-l5": {
    "id": "ur-u18-l5",
    "subject": "urdu",
    "unit": 18,
    "lessonNumber": 5,
    "title": "شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 18.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 18-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («خاندان» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («والد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («والدہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («والد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («والدہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خاندان» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («والدہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خاندان» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («والد» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u19-l1": {
    "id": "ur-u19-l1",
    "subject": "urdu",
    "unit": 19,
    "lessonNumber": 1,
    "title": "بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 19.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 19-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"خاندان\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («والد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («والدہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بھائی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"خاندان\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («والدہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بھائی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («والد» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"خاندان\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بھائی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («والد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («والدہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u19-l2": {
    "id": "ur-u19-l2",
    "subject": "urdu",
    "unit": 19,
    "lessonNumber": 2,
    "title": "بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 19.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 19-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"والد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («والدہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بھائی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بہن» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"والد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بھائی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بہن» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («والدہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"والد\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بہن» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («والدہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بھائی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u19-l3": {
    "id": "ur-u19-l3",
    "subject": "urdu",
    "unit": 19,
    "lessonNumber": 3,
    "title": "بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 19.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 19-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"والدہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بھائی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بہن» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دادا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"والدہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بہن» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دادا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بھائی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"والدہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دادا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بھائی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بہن» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u19-l4": {
    "id": "ur-u19-l4",
    "subject": "urdu",
    "unit": 19,
    "lessonNumber": 4,
    "title": "بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 19.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 19-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بھائی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بہن» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دادا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دادی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بھائی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دادا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دادی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بہن» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بھائی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دادی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بہن» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دادا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u19-l5": {
    "id": "ur-u19-l5",
    "subject": "urdu",
    "unit": 19,
    "lessonNumber": 5,
    "title": "بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 19.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 19-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بہن\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دادا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دادی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بیٹا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بہن\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دادی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بیٹا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دادا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بہن\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بیٹا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دادا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دادی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u20-l1": {
    "id": "ur-u20-l1",
    "subject": "urdu",
    "unit": 20,
    "lessonNumber": 1,
    "title": "دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 20.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 20-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دادا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دادی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بیٹا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بیٹی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دادا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بیٹا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بیٹی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دادی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دادا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بیٹی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دادی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بیٹا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u20-l2": {
    "id": "ur-u20-l2",
    "subject": "urdu",
    "unit": 20,
    "lessonNumber": 2,
    "title": "دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 20.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 20-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دادی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بیٹا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بیٹی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوست» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دادی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بیٹی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوست» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بیٹا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دادی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوست» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بیٹا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بیٹی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u20-l3": {
    "id": "ur-u20-l3",
    "subject": "urdu",
    "unit": 20,
    "lessonNumber": 3,
    "title": "دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 20.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 20-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بیٹا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بیٹی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوست» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آج» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بیٹا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوست» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بیٹی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بیٹا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بیٹی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوست» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u20-l4": {
    "id": "ur-u20-l4",
    "subject": "urdu",
    "unit": 20,
    "lessonNumber": 4,
    "title": "دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 20.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 20-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بیٹی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دوست» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بیٹی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوست» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بیٹی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوست» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آج» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u20-l5": {
    "id": "ur-u20-l5",
    "subject": "urdu",
    "unit": 20,
    "lessonNumber": 5,
    "title": "دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 20.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 20-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دوست\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («آج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پرسوں» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دوست\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پرسوں» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آج» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دوست\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پرسوں» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u21-l1": {
    "id": "ur-u21-l1",
    "subject": "urdu",
    "unit": 21,
    "lessonNumber": 1,
    "title": "طبی مشاورت، امراض اور علاج (Medical Discourse) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 21.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 21-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"آج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پرسوں» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («صبح» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"آج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پرسوں» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («صبح» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"آج\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («صبح» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پرسوں» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u21-l2": {
    "id": "ur-u21-l2",
    "subject": "urdu",
    "unit": 21,
    "lessonNumber": 2,
    "title": "طبی مشاورت، امراض اور علاج (Medical Discourse) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 21.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 21-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پرسوں» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («صبح» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوپہر» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («صبح» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوپہر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پرسوں» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دوپہر» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پرسوں» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («صبح» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u21-l3": {
    "id": "ur-u21-l3",
    "subject": "urdu",
    "unit": 21,
    "lessonNumber": 3,
    "title": "طبی مشاورت، امراض اور علاج (Medical Discourse) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 21.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 21-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پرسوں\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («صبح» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوپہر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شام» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پرسوں\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوپہر» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شام» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («صبح» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پرسوں\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شام» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («صبح» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دوپہر» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u21-l4": {
    "id": "ur-u21-l4",
    "subject": "urdu",
    "unit": 21,
    "lessonNumber": 4,
    "title": "طبی مشاورت، امراض اور علاج (Medical Discourse) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 21.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 21-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"صبح\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دوپہر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شام» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رات» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"صبح\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شام» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رات» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوپہر» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"صبح\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («رات» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دوپہر» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شام» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u21-l5": {
    "id": "ur-u21-l5",
    "subject": "urdu",
    "unit": 21,
    "lessonNumber": 5,
    "title": "طبی مشاورت، امراض اور علاج (Medical Discourse) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 21.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 21-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دوپہر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («شام» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رات» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہفتہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دوپہر\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رات» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہفتہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شام» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دوپہر\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ہفتہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («شام» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («رات» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u22-l1": {
    "id": "ur-u22-l1",
    "subject": "urdu",
    "unit": 22,
    "lessonNumber": 1,
    "title": "پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 22.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 22-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"شام\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («رات» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہفتہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مہینہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"شام\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہفتہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مہینہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («رات» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"شام\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («مہینہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («رات» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ہفتہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u22-l2": {
    "id": "ur-u22-l2",
    "subject": "urdu",
    "unit": 22,
    "lessonNumber": 2,
    "title": "پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 22.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 22-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"رات\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ہفتہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مہینہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سال» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"رات\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مہینہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سال» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہفتہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"رات\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سال» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ہفتہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («مہینہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u22-l3": {
    "id": "ur-u22-l3",
    "subject": "urdu",
    "unit": 22,
    "lessonNumber": 3,
    "title": "پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 22.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 22-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ہفتہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («مہینہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سال» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سرخ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ہفتہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سال» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سرخ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مہینہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ہفتہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سرخ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («مہینہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سال» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u22-l4": {
    "id": "ur-u22-l4",
    "subject": "urdu",
    "unit": 22,
    "lessonNumber": 4,
    "title": "پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 22.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 22-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"مہینہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سال» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سرخ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نیلا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"مہینہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سرخ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نیلا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سال» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"مہینہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نیلا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سال» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سرخ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u22-l5": {
    "id": "ur-u22-l5",
    "subject": "urdu",
    "unit": 22,
    "lessonNumber": 5,
    "title": "پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 22.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 22-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سال\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سرخ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نیلا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پیلا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سال\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نیلا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پیلا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سرخ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سال\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پیلا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سرخ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نیلا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u23-l1": {
    "id": "ur-u23-l1",
    "subject": "urdu",
    "unit": 23,
    "lessonNumber": 1,
    "title": "اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 23.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 23-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سرخ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («نیلا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پیلا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبز» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سرخ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پیلا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نیلا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سرخ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نیلا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پیلا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u23-l2": {
    "id": "ur-u23-l2",
    "subject": "urdu",
    "unit": 23,
    "lessonNumber": 2,
    "title": "اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 23.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 23-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"نیلا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پیلا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سفید» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"نیلا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سفید» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پیلا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"نیلا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سفید» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پیلا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبز» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u23-l3": {
    "id": "ur-u23-l3",
    "subject": "urdu",
    "unit": 23,
    "lessonNumber": 3,
    "title": "اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 23.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 23-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پیلا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سبز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سفید» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سیاہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پیلا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سفید» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سیاہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سبز» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پیلا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سیاہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سبز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سفید» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u23-l4": {
    "id": "ur-u23-l4",
    "subject": "urdu",
    "unit": 23,
    "lessonNumber": 4,
    "title": "اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 23.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 23-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سبز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سفید» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سیاہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بھورا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سبز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سیاہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بھورا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سفید» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سبز\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بھورا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سفید» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سیاہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u23-l5": {
    "id": "ur-u23-l5",
    "subject": "urdu",
    "unit": 23,
    "lessonNumber": 5,
    "title": "اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 23.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 23-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سفید\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سیاہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بھورا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گلابی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سفید\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بھورا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گلابی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سیاہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سفید\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گلابی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سیاہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بھورا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u24-l1": {
    "id": "ur-u24-l1",
    "subject": "urdu",
    "unit": 24,
    "lessonNumber": 1,
    "title": "بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) (Part 1)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 24.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 24-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سیاہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بھورا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گلابی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جامنی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سیاہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گلابی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جامنی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بھورا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سیاہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جامنی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بھورا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گلابی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u24-l2": {
    "id": "ur-u24-l2",
    "subject": "urdu",
    "unit": 24,
    "lessonNumber": 2,
    "title": "بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) (Part 2)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 24.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 24-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بھورا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («گلابی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جامنی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نارنجی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بھورا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جامنی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نارنجی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گلابی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بھورا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نارنجی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گلابی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جامنی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u24-l3": {
    "id": "ur-u24-l3",
    "subject": "urdu",
    "unit": 24,
    "lessonNumber": 3,
    "title": "بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) (Part 3)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 24.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 24-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"گلابی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («جامنی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نارنجی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بڑا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"گلابی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نارنجی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بڑا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («جامنی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"گلابی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بڑا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («جامنی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نارنجی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u24-l4": {
    "id": "ur-u24-l4",
    "subject": "urdu",
    "unit": 24,
    "lessonNumber": 4,
    "title": "بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) (Part 4)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 24.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 24-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"جامنی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («نارنجی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بڑا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھوٹا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"جامنی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بڑا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھوٹا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نارنجی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"جامنی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چھوٹا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نارنجی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بڑا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u24-l5": {
    "id": "ur-u24-l5",
    "subject": "urdu",
    "unit": 24,
    "lessonNumber": 5,
    "title": "بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) (Part 5)",
    "level": "B2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 24.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 24-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"نارنجی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بڑا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھوٹا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لمبا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"نارنجی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھوٹا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لمبا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بڑا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"نارنجی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لمبا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بڑا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چھوٹا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u25-l1": {
    "id": "ur-u25-l1",
    "subject": "urdu",
    "unit": 25,
    "lessonNumber": 1,
    "title": "ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) (Part 1)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 25.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 25-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بڑا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («چھوٹا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لمبا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پستہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بڑا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لمبا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پستہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چھوٹا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بڑا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پستہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چھوٹا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لمبا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u25-l2": {
    "id": "ur-u25-l2",
    "subject": "urdu",
    "unit": 25,
    "lessonNumber": 2,
    "title": "ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) (Part 2)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 25.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 25-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"چھوٹا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («لمبا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پستہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تیز» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"چھوٹا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پستہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تیز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («لمبا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"چھوٹا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تیز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («لمبا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پستہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u25-l3": {
    "id": "ur-u25-l3",
    "subject": "urdu",
    "unit": 25,
    "lessonNumber": 3,
    "title": "ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) (Part 3)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 25.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 25-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"لمبا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پستہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تیز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آہستہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"لمبا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تیز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آہستہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پستہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"لمبا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آہستہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پستہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تیز» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u25-l4": {
    "id": "ur-u25-l4",
    "subject": "urdu",
    "unit": 25,
    "lessonNumber": 4,
    "title": "ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) (Part 4)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 25.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 25-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پستہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («تیز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آہستہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نیا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پستہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آہستہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نیا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («تیز» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پستہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نیا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («تیز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آہستہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u25-l5": {
    "id": "ur-u25-l5",
    "subject": "urdu",
    "unit": 25,
    "lessonNumber": 5,
    "title": "ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) (Part 5)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 25.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 25-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"تیز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («آہستہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نیا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پرانا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"تیز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نیا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پرانا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آہستہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"تیز\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پرانا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آہستہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نیا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u26-l1": {
    "id": "ur-u26-l1",
    "subject": "urdu",
    "unit": 26,
    "lessonNumber": 1,
    "title": "آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) (Part 1)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 26.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 26-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"آہستہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («نیا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پرانا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اچھا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"آہستہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پرانا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اچھا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نیا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"آہستہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اچھا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نیا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پرانا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u26-l2": {
    "id": "ur-u26-l2",
    "subject": "urdu",
    "unit": 26,
    "lessonNumber": 2,
    "title": "آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) (Part 2)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 26.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 26-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"نیا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پرانا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اچھا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خوبصورت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"نیا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اچھا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خوبصورت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پرانا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"نیا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («خوبصورت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پرانا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اچھا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u26-l3": {
    "id": "ur-u26-l3",
    "subject": "urdu",
    "unit": 26,
    "lessonNumber": 3,
    "title": "آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) (Part 3)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 26.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 26-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پرانا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («اچھا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خوبصورت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سمجھنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پرانا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خوبصورت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سمجھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اچھا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پرانا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سمجھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اچھا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («خوبصورت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u26-l4": {
    "id": "ur-u26-l4",
    "subject": "urdu",
    "unit": 26,
    "lessonNumber": 4,
    "title": "آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) (Part 4)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 26.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 26-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"اچھا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («خوبصورت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سمجھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جاننا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"اچھا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سمجھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جاننا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خوبصورت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"اچھا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جاننا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («خوبصورت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سمجھنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u26-l5": {
    "id": "ur-u26-l5",
    "subject": "urdu",
    "unit": 26,
    "lessonNumber": 5,
    "title": "آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) (Part 5)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 26.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 26-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"خوبصورت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سمجھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جاننا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سوچنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"خوبصورت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جاننا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سوچنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سمجھنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"خوبصورت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سوچنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سمجھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جاننا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u27-l1": {
    "id": "ur-u27-l1",
    "subject": "urdu",
    "unit": 27,
    "lessonNumber": 1,
    "title": "کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) (Part 1)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 27.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 27-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سمجھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («جاننا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سوچنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («یاد رکھنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سمجھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سوچنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («یاد رکھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («جاننا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سمجھنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («یاد رکھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («جاننا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سوچنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u27-l2": {
    "id": "ur-u27-l2",
    "subject": "urdu",
    "unit": 27,
    "lessonNumber": 2,
    "title": "کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) (Part 2)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 27.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 27-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"جاننا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سوچنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («یاد رکھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بولنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"جاننا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («یاد رکھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بولنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سوچنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"جاننا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بولنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سوچنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («یاد رکھنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u27-l3": {
    "id": "ur-u27-l3",
    "subject": "urdu",
    "unit": 27,
    "lessonNumber": 3,
    "title": "کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) (Part 3)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 27.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 27-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سوچنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («یاد رکھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بولنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پڑھنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سوچنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بولنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پڑھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («یاد رکھنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سوچنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («پڑھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («یاد رکھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بولنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u27-l4": {
    "id": "ur-u27-l4",
    "subject": "urdu",
    "unit": 27,
    "lessonNumber": 4,
    "title": "کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) (Part 4)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 27.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 27-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"یاد رکھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بولنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پڑھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لکھنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"یاد رکھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پڑھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لکھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بولنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"یاد رکھنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لکھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بولنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («پڑھنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u27-l5": {
    "id": "ur-u27-l5",
    "subject": "urdu",
    "unit": 27,
    "lessonNumber": 5,
    "title": "کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) (Part 5)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 27.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 27-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بولنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («پڑھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لکھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سننا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بولنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لکھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سننا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پڑھنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بولنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سننا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («پڑھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لکھنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u28-l1": {
    "id": "ur-u28-l1",
    "subject": "urdu",
    "unit": 28,
    "lessonNumber": 1,
    "title": "صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) (Part 1)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 28.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 28-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"پڑھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («لکھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سننا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دیکھنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"پڑھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سننا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دیکھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («لکھنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"پڑھنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دیکھنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («لکھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سننا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u28-l2": {
    "id": "ur-u28-l2",
    "subject": "urdu",
    "unit": 28,
    "lessonNumber": 2,
    "title": "صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) (Part 2)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 28.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 28-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"لکھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سننا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دیکھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چاہنا» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"لکھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دیکھنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چاہنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سننا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"لکھنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («چاہنا» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سننا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دیکھنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u28-l3": {
    "id": "ur-u28-l3",
    "subject": "urdu",
    "unit": 28,
    "lessonNumber": 3,
    "title": "صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) (Part 3)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 28.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 28-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سننا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دیکھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چاہنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اسکول» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سننا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چاہنا» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اسکول» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دیکھنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سننا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اسکول» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دیکھنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («چاہنا» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u28-l4": {
    "id": "ur-u28-l4",
    "subject": "urdu",
    "unit": 28,
    "lessonNumber": 4,
    "title": "صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) (Part 4)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 28.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 28-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دیکھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («چاہنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اسکول» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کالج» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دیکھنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اسکول» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کالج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چاہنا» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دیکھنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کالج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («چاہنا» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اسکول» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u28-l5": {
    "id": "ur-u28-l5",
    "subject": "urdu",
    "unit": 28,
    "lessonNumber": 5,
    "title": "صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) (Part 5)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 28.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 28-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"چاہنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («اسکول» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کالج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («استاد» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"چاہنا\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کالج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («استاد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اسکول» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"چاہنا\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («استاد» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اسکول» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کالج» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u29-l1": {
    "id": "ur-u29-l1",
    "subject": "urdu",
    "unit": 29,
    "lessonNumber": 1,
    "title": "فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) (Part 1)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 29.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 29-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"اسکول\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کالج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («استاد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («طالب علم» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"اسکول\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («استاد» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («طالب علم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کالج» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"اسکول\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («طالب علم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کالج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («استاد» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u29-l2": {
    "id": "ur-u29-l2",
    "subject": "urdu",
    "unit": 29,
    "lessonNumber": 2,
    "title": "فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) (Part 2)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 29.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 29-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کالج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («استاد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («طالب علم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبق» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کالج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («طالب علم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبق» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («استاد» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کالج\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سبق» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («استاد» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («طالب علم» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u29-l3": {
    "id": "ur-u29-l3",
    "subject": "urdu",
    "unit": 29,
    "lessonNumber": 3,
    "title": "فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) (Part 3)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 29.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 29-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"استاد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («طالب علم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبق» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («امتحان» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"استاد\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبق» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («امتحان» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («طالب علم» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"استاد\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («امتحان» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («طالب علم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سبق» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u29-l4": {
    "id": "ur-u29-l4",
    "subject": "urdu",
    "unit": 29,
    "lessonNumber": 4,
    "title": "فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) (Part 4)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 29.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 29-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"طالب علم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سبق» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («امتحان» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نتیجہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"طالب علم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («امتحان» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نتیجہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سبق» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"طالب علم\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («نتیجہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سبق» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («امتحان» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u29-l5": {
    "id": "ur-u29-l5",
    "subject": "urdu",
    "unit": 29,
    "lessonNumber": 5,
    "title": "فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) (Part 5)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 29.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 29-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سبق\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («امتحان» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نتیجہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لائبریری» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سبق\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نتیجہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لائبریری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («امتحان» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سبق\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («لائبریری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («امتحان» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («نتیجہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u30-l1": {
    "id": "ur-u30-l1",
    "subject": "urdu",
    "unit": 30,
    "lessonNumber": 1,
    "title": "سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) (Part 1)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 30.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 30-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"امتحان\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («نتیجہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لائبریری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ڈگری» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"امتحان\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لائبریری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ڈگری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نتیجہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"امتحان\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ڈگری» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («نتیجہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («لائبریری» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u30-l2": {
    "id": "ur-u30-l2",
    "subject": "urdu",
    "unit": 30,
    "lessonNumber": 2,
    "title": "سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) (Part 2)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 30.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 30-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"نتیجہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («لائبریری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ڈگری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قلم» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"نتیجہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ڈگری» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قلم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («لائبریری» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"نتیجہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قلم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («لائبریری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ڈگری» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u30-l3": {
    "id": "ur-u30-l3",
    "subject": "urdu",
    "unit": 30,
    "lessonNumber": 3,
    "title": "سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) (Part 3)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 30.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 30-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"لائبریری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ڈگری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قلم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بینک» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"لائبریری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قلم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بینک» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ڈگری» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"لائبریری\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («بینک» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ڈگری» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قلم» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u30-l4": {
    "id": "ur-u30-l4",
    "subject": "urdu",
    "unit": 30,
    "lessonNumber": 4,
    "title": "سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) (Part 4)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 30.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 30-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ڈگری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («قلم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بینک» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھاتہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ڈگری\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بینک» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھاتہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قلم» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ڈگری\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («کھاتہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قلم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («بینک» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u30-l5": {
    "id": "ur-u30-l5",
    "subject": "urdu",
    "unit": 30,
    "lessonNumber": 5,
    "title": "سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) (Part 5)",
    "level": "C1",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 30.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 30-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"قلم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («بینک» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھاتہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قرض» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"قلم\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھاتہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قرض» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بینک» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"قلم\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قرض» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («بینک» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («کھاتہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u31-l1": {
    "id": "ur-u31-l1",
    "subject": "urdu",
    "unit": 31,
    "lessonNumber": 1,
    "title": "جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) (Part 1)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 31.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 31-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"بینک\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («کھاتہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قرض» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سود» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"بینک\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قرض» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سود» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کھاتہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"بینک\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («سود» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («کھاتہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قرض» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u31-l2": {
    "id": "ur-u31-l2",
    "subject": "urdu",
    "unit": 31,
    "lessonNumber": 2,
    "title": "جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) (Part 2)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 31.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 31-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"کھاتہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («قرض» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سود» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ٹیکس» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"کھاتہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سود» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ٹیکس» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قرض» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"کھاتہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («ٹیکس» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قرض» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («سود» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u31-l3": {
    "id": "ur-u31-l3",
    "subject": "urdu",
    "unit": 31,
    "lessonNumber": 3,
    "title": "جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) (Part 3)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 31.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 31-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"قرض\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («سود» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ٹیکس» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تجارت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"قرض\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ٹیکس» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تجارت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سود» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"قرض\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («تجارت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («سود» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («ٹیکس» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u31-l4": {
    "id": "ur-u31-l4",
    "subject": "urdu",
    "unit": 31,
    "lessonNumber": 4,
    "title": "جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) (Part 4)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 31.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 31-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"سود\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («ٹیکس» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تجارت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دستاویز» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"سود\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تجارت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دستاویز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ٹیکس» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"سود\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دستاویز» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («ٹیکس» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («تجارت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u31-l5": {
    "id": "ur-u31-l5",
    "subject": "urdu",
    "unit": 31,
    "lessonNumber": 5,
    "title": "جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) (Part 5)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 31.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 31-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ٹیکس\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («تجارت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دستاویز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دستخط» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ٹیکس\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دستاویز» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دستخط» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («تجارت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ٹیکس\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («دستخط» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («تجارت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دستاویز» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u32-l1": {
    "id": "ur-u32-l1",
    "subject": "urdu",
    "unit": 32,
    "lessonNumber": 1,
    "title": "سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) (Part 1)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 32.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 32-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"تجارت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دستاویز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دستخط» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اصول» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"تجارت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دستخط» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اصول» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دستاویز» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"تجارت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («اصول» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دستاویز» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («دستخط» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u32-l2": {
    "id": "ur-u32-l2",
    "subject": "urdu",
    "unit": 32,
    "lessonNumber": 2,
    "title": "سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) (Part 2)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 32.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 32-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دستاویز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («دستخط» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اصول» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قانون» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دستاویز\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اصول» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قانون» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دستخط» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دستاویز\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («قانون» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («دستخط» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («اصول» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u32-l3": {
    "id": "ur-u32-l3",
    "subject": "urdu",
    "unit": 32,
    "lessonNumber": 3,
    "title": "سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) (Part 3)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 32.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 32-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"دستخط\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («اصول» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قانون» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («عدالت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"دستخط\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قانون» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («عدالت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اصول» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"دستخط\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («عدالت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («اصول» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («قانون» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u32-l4": {
    "id": "ur-u32-l4",
    "subject": "urdu",
    "unit": 32,
    "lessonNumber": 4,
    "title": "سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) (Part 4)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 32.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 32-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"اصول\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («قانون» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («عدالت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جج» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"اصول\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («عدالت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قانون» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"اصول\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («جج» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («قانون» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («عدالت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u32-l5": {
    "id": "ur-u32-l5",
    "subject": "urdu",
    "unit": 32,
    "lessonNumber": 5,
    "title": "سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) (Part 5)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 32.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 32-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"قانون\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («عدالت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («وکیل» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"قانون\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جج» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («وکیل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («عدالت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"قانون\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («وکیل» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («عدالت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («جج» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u33-l1": {
    "id": "ur-u33-l1",
    "subject": "urdu",
    "unit": 33,
    "lessonNumber": 1,
    "title": "اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) (Part 1)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 33.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 33-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"عدالت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («جج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («وکیل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («حقوق» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"عدالت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («وکیل» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («حقوق» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («جج» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"عدالت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («حقوق» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («جج» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («وکیل» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u33-l2": {
    "id": "ur-u33-l2",
    "subject": "urdu",
    "unit": 33,
    "lessonNumber": 2,
    "title": "اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) (Part 2)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 33.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 33-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"جج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («وکیل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («حقوق» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («انصاف» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"جج\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («حقوق» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («انصاف» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («وکیل» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"جج\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («انصاف» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («وکیل» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («حقوق» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u33-l3": {
    "id": "ur-u33-l3",
    "subject": "urdu",
    "unit": 33,
    "lessonNumber": 3,
    "title": "اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) (Part 3)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 33.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 33-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"وکیل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («حقوق» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («انصاف» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گواہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"وکیل\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («انصاف» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گواہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («حقوق» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"وکیل\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («گواہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («حقوق» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («انصاف» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u33-l4": {
    "id": "ur-u33-l4",
    "subject": "urdu",
    "unit": 33,
    "lessonNumber": 4,
    "title": "اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) (Part 4)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 33.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 33-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"حقوق\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («انصاف» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گواہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («فیصلہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"حقوق\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گواہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («فیصلہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («انصاف» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"حقوق\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («فیصلہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («انصاف» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («گواہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u33-l5": {
    "id": "ur-u33-l5",
    "subject": "urdu",
    "unit": 33,
    "lessonNumber": 5,
    "title": "اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) (Part 5)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 33.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 33-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"انصاف\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («گواہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («فیصلہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آئین» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"انصاف\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («فیصلہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آئین» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گواہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"انصاف\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آئین» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («گواہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («فیصلہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u34-l1": {
    "id": "ur-u34-l1",
    "subject": "urdu",
    "unit": 34,
    "lessonNumber": 1,
    "title": "سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) (Part 1)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 34.1) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 34-1)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"گواہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («فیصلہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آئین» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («حکومت» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"گواہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آئین» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («حکومت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («فیصلہ» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"گواہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («حکومت» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («فیصلہ» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آئین» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u34-l2": {
    "id": "ur-u34-l2",
    "subject": "urdu",
    "unit": 34,
    "lessonNumber": 2,
    "title": "سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) (Part 2)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 34.2) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 34-2)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"فیصلہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («آئین» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («حکومت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آزادی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"فیصلہ\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («حکومت» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آزادی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آئین» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"فیصلہ\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («آزادی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آئین» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («حکومت» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u34-l3": {
    "id": "ur-u34-l3",
    "subject": "urdu",
    "unit": 34,
    "lessonNumber": 3,
    "title": "سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) (Part 3)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 34.3) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 34-3)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"آئین\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («حکومت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آزادی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («السلام علیکم» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"آئین\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آزادی» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («السلام علیکم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («حکومت» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"آئین\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («السلام علیکم» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («حکومت» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («آزادی» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u34-l4": {
    "id": "ur-u34-l4",
    "subject": "urdu",
    "unit": 34,
    "lessonNumber": 4,
    "title": "سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) (Part 4)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 34.4) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 34-4)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"حکومت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («آزادی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («السلام علیکم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شکریہ» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"حکومت\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («السلام علیکم» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شکریہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آزادی» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"حکومت\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («شکریہ» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («آزادی» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («السلام علیکم» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "ur-u34-l5": {
    "id": "ur-u34-l5",
    "subject": "urdu",
    "unit": 34,
    "lessonNumber": 5,
    "title": "سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) (Part 5)",
    "level": "C2",
    "objective": "Master Urdu linguistics and Nastaliq syntax for اردو قواعد و فصاحت و بلاغت (سبق 34.5) with authentic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
          "reading": "[həm ɪs səbəq mẽː ʊrd̪uː zəbaːn kiː nʌhwiː saːxt kaː mʊt̪aːlɪʔaː kərteː hɛ̃ː] (hum is suh-buq mayn)",
          "translation": "We study the polite syntactic structure and literary style of Urdu in this lesson."
        },
        {
          "target": "برائے مہربانی اس جملے میں الفاظ کی باہمی نشست اور اضافت پر غور فرمائیے (سبق 34-5)۔",
          "reading": "[bəraːjeː mɛːɦrbaːniː ɪs dʒʊmleː mẽː ɣɔːr fərmaːiːjeː] (buh-rah-yay MAY-huhr-bah-nee)",
          "translation": "Please observe the word arrangement and izafat in this sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"آزادی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "قواعد اور تذکیر و تانیث کی غلطی («السلام علیکم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شکریہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («برائے مہربانی» کی خرابی)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"آزادی\":",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شکریہ» سے متعلق)",
            "غیر فصیح اور غیر معیاری اندازِ بیان («برائے مہربانی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («السلام علیکم» کا غیر درست استعمال)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"آزادی\": Which sentence is completely correct?",
          "options": [
            "ہم اس سبق میں اردو زبان کی شائستہ نحوی ساخت اور ادبی اسلوب کا مطالعہ کرتے ہیں۔",
            "غیر فصیح اور غیر معیاری اندازِ بیان («برائے مہربانی» کی خرابی)",
            "قواعد اور تذکیر و تانیث کی غلطی («السلام علیکم» کا غیر درست استعمال)",
            "نامناسب نشستِ الفاظ اور لاحقے کی خامی («شکریہ» سے متعلق)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  }
};
  var CURRICULUM = {
    subject: 'urdu',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['urdu'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
