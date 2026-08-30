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
    "title": "اسلامی و تہذیبی آداب اور خیریت دریافت کرنا (Greetings & Inquiring Wellbeing)",
    "level": "A1",
    "objective": "اردو میں السلام علیکم، وعلیکم السلام، آداب اور خیریت دریافت کرنے کے شائستہ جملوں میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو میں سلام اور خیریت دریافت کرنے کے فصیح و تہذیبی اصول:\n\n1. **السلام علیکم اور وعلیکم السلام**:\n   - اردو معاشرے میں ملاقات کے وقت کا سب سے بنیادی اور باوقار سلام «السلام علیکم» (آپ پر سلامتی ہو) ہے؛\n   - اس کے جواب میں لازماً «وعلیکم السلام» (اور آپ پر بھی سلامتی ہو) کہا جاتا ہے۔\n\n2. **آداب عرض ہے اور مزاج پرسی**:\n   - ادبی، باوقار یا غیر مذہبی محفلوں میں «آداب» یا «آداب عرض ہے» بولا جاتا ہے؛\n   - کسی محترم بزرگ یا دوست سے خیریت پوچھنے کے لیے «آپ کا مزاج کیسا ہے؟»، «آپ کیسے ہیں؟» یا «سب خیریت ہے؟» کہا جاتا ہے۔\n\n3. **جوابی کلمات اور تشکر**:\n   - خیروعافیت بتاتے وقت «الحمد للہ، میں بالکل ٹھیک ہوں» یا «اللہ کا شکر ہے، آپ سنائیے» کہنا شائستہ روایت ہے۔*",
      "examples": [
        {
          "target": "السلام علیکم! آپ کا مزاج کیسا ہے؟",
          "reading": "Assalamu alaikum! Aap ka mizaj kaisa hai? [əsːəlaːmʊ ʔəlɛːkʊm aːp kaː mɪzaːdʒ kɛːsaː hɛː] (uhs-suh-LAH-moo uh-LY-koom, AHP kah mee-ZAHJ KY-sah hy)",
          "translation": "Peace be upon you! How is your health/mood?"
        },
        {
          "target": "وعلیکم السلام! اللہ کا فضل ہے، میں بالکل خیریت سے ہوں۔",
          "reading": "Walaikum assalam! Allah ka fazl hai, main bilkul khairiyat se hoon. [ʋəʔəlɛːkʊmʊsːəlaːm əlːaːʱ kaː fəzl hɛː mɛ̃ː bɪlkʊl xɛːrɪjət̪ seː ɦuː̃] (wuh-uh-LY-koom-oos-suh-LAHM, uhl-LAH kah FUHZL hy, myhn beel-KOOL khy-ree-YUHT say HOON)",
          "translation": "And upon you be peace! By God's grace, I am completely well."
        },
        {
          "target": "آداب عرض ہے، محترم استاد صاحب، کیا سب خیریت ہے؟",
          "reading": "Aadaab arz hai, mohtaram ustaad sahab, kya sab khairiyat hai? [aːd̪aːb ərz hɛː moːɦt̪ərəm ʊst̪aːd̪ saːhəb kjaː səb xɛːrɪjət̪ hɛː] (ah-DAHB UHRZ hy, moh-tuh-RUHM oos-TAHD SAH-huhb, kyah SUHB khy-ree-YUHT hy)",
          "translation": "Greetings of respect, respected teacher, is everything well?"
        }
      ],
      "mnemonics": [
        "سلام و آداب: السلام علیکم (سلامتی)، وعلیکم السلام (جواب)، آداب عرض ہے (تہذیب)، الحمد للہ (شکر)!"
      ],
      "culturalNotes": [
        "برصغیر کی اردو تہذیب میں چھوٹا ہمیشہ بڑے کو پہلے سلام کرتا ہے، اور ہاتھ سینے پر رکھ کر ہلکا سا جھک کر 'آداب' کہنے کی روایت دہلی اور لکھنؤ کی تہذیب کا شاہکار سمجھی جاتی ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو زبان میں کسی سے ملاقات کے وقت سب سے عام اور باوقار سلام کون سا ہے؟",
          "options": [
            "السلام علیکم (Assalamu Alaikum - Peace be upon you, standard dignified Urdu greeting)",
            "صبح بخیر (Good morning)",
            "شب بخیر (Good night)",
            "خوش آمدید (Welcome)"
          ],
          "answerIndex": 0,
          "explanation": "ملاقات کے وقت سب سے مستند اور عام سلام «السلام علیکم» ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "«السلام علیکم» کا درست اور مکمل روایتی جواب کیا ہے؟",
          "options": [
            "وعلیکم السلام (Walaikum Assalam - And upon you be peace, authentic response to greeting)",
            "اللہ حافظ (خدا کی پناہ)",
            "شکریہ جناب (مہربانی)",
            "معاف کیجیے (معذرت)"
          ],
          "answerIndex": 0,
          "explanation": "«السلام علیکم» کا فصیح اور مستند جواب «وعلیکم السلام» ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "اردو میں سلام اور مزاج پرسی (Greetings & Politeness) کا مکمل اور فصیح جملہ پہچانیے:",
          "options": [
            "السلام علیکم! آپ کا مزاج کیسا ہے، اور گھر میں سب خیریت سے ہیں؟ (Peace be upon you! How is your health, and is everyone well at home?)",
            "سلام کا جواب صرف غصے میں منہ بنا کر دینا چاہیے۔",
            "وعلیکم السلام کا مطلب ہوتا ہے کہ جلدی سے یہاں سے بھاگ جاؤ۔",
            "آداب کا مطلب جوتے پالش کرنا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«السلام علیکم! آپ کا مزاج کیسا ہے، اور گھر میں سب خیریت سے ہیں؟» مکمل اور شائستہ جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u1-l2": {
    "id": "ur-u1-l2",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 2,
    "title": "تعارف، اسم اور شائستہ اندازِ تخاطب (Introductions & Polite Forms of Address)",
    "level": "A1",
    "objective": "اردو میں شائستہ انداز میں اپنا نام بتانا، دوسرے کا اسمِ گرامی پوچھنا اور ملاقات پر مسرت کا اظہار کرنا۔",
    "presentation": {
      "explanation": "اردو میں تعارف اور شائستہ اندازِ تخاطب کے بنیادی اصول:\n\n1. **اپنا نام بتانا**:\n   - سادہ انداز — «میرا نام [نام] ہے»؛\n   - عاجزانہ ادبی انداز — «خاکسار کو [نام] کہتے ہیں» یا «بندہ کا نام [نام] ہے»۔\n\n2. **دوسرے کا نام دریافت کرنا**:\n   - شائستہ و باوقار سوال — «آپ کا اسمِ گرامی کیا ہے؟» یا «آپ کا مبارک نام کیا ہے؟»؛\n   - عام بول چال — «آپ کا نام کیا ہے؟»۔\n\n3. **ملاقات پر مسرت کا اظہار**:\n   - «آپ سے مل کر بہت خوشی ہوئی» یا «آپ سے شرفِ ملاقات حاصل کر کے دلی مسرت ہوئی۔»*",
      "examples": [
        {
          "target": "میرا نام طارق محمود ہے، اور میں جامعہ کراچی میں اردو ادب کا طالب علم ہوں۔",
          "reading": "Mera naam Tariq Mahmood hai, aur main Jamia Karachi mein Urdu adab ka taalib-e-ilm hoon. [meːraː naːm t̪aːrɪq məɦmuːd̪ hɛː ɔːr mɛ̃ː dʒaːmɪʔaː kəraːtʃiː mẽː ʊrd̪uː əd̪əb kaː t̪aːlɪb-eː-ɪlm ɦuː̃] (MAY-rah NAHM TAH-reek muh-MOOD hy, owr myhn JAH-mee-ah kuh-RAH-chee mayn OOR-doo uh-DUHB kah TAH-leeb-ay-EELM HOON)",
          "translation": "My name is Tariq Mahmood, and I am a student of Urdu literature at the University of Karachi."
        },
        {
          "target": "معاف کیجیے گا، کیا میں آپ کا اسمِ گرامی جان سکتا ہوں؟",
          "reading": "Maaf kijiye ga, kya main aap ka ism-e-giraami jaan sakta hoon? [maːf kiːdʒɪjeː ɡaː kjaː mɛ̃ː aːp kaː ɪsm-eː-ɡɪraːmiː dʒaːn səktaː ɦuː̃] (MAHF KEE-jee-yay GAH, kyah myhn AHP kah EESM-ay-gee-RAH-mee JAHN suhk-TAH HOON)",
          "translation": "Excuse me, may I know your honored name?"
        },
        {
          "target": "آپ سے مل کر بڑی خوشی ہوئی، تشریف رکھیے اور چائے نوش فرمائیے۔",
          "reading": "Aap se mil kar badi khushi hui, tashreef rakhiye aur chaaye nosh farmaaiye. [aːp seː mɪl kər bəɽiː xʊʃiː ɦʊiː t̪əʃriːf rəkʰɪjeː ɔːr tʃaːjeː noːʃ fərmaːiːjeː] (AHP say MEEL kuhr buh-DEE KHOO-shee hoo-EE, tuhsh-REEF ruh-khee-YAY owr CHAH-yay NOHSH fuhr-mah-EE-yay)",
          "translation": "It is a great pleasure to meet you, please be seated and have some tea."
        }
      ],
      "mnemonics": [
        "شائستہ تعارف: میرا نام (میرا تعارف)، اسمِ گرامی (آپ کا معزز نام)، تشریف رکھیے (بیٹھیے)!"
      ],
      "culturalNotes": [
        "اردو میں احترام کے درجات بہت واضح ہیں؛ اپنے نام کے ساتھ کبھی 'صاحب' یا 'جناب' نہیں لگایا جاتا، جبکہ دوسرے کے لیے ہمیشہ 'اسمِ گرامی' یا 'صاحب' استعمال کیا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "کسی معزز شخص سے اس کا نام انتہائی شائستہ اور باوقار انداز میں پوچھنے کے لیے کون سا جملہ بولا جاتا ہے؟",
          "options": [
            "آپ کا اسمِ گرامی کیا ہے؟ (What is your honored name? - Highly respectful inquiry of identity)",
            "تم کون ہو جلدی بولو (غیر شائستہ انداز)",
            "اپنا شناختی کارڈ دکھاؤ (پولیس طرز)",
            "کیا تم کوئی اجنبی ہو؟ (حیرت)"
          ],
          "answerIndex": 0,
          "explanation": "احتراماً نام دریافت کرنے کا فصیح جملہ «آپ کا اسمِ گرامی کیا ہے؟» ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "تعارف کے بعد ملاقات پر خوشی اور مسرت کا اظہار کرنے کے لیے کون سا جملہ بولا جاتا ہے؟",
          "options": [
            "آپ سے مل کر بہت خوشی ہوئی (Pleased to meet you - Courteous expression of delight upon meeting)",
            "آپ سے مل کر مجھے تکلیف ہوئی (ناشائستہ)",
            "اب آپ یہاں سے چلے جائیے (غیر اخلاقی)",
            "میرا وقت ضائع مت کیجیے (روکھا پن)"
          ],
          "answerIndex": 0,
          "explanation": "ملاقات پر مسرت کے لیے «آپ سے مل کر بہت خوشی ہوئی» کہا جاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "اردو تعارف اور شائستہ گفتگو (Introductions & Etiquette) کا مکمل معیاری جملہ پہچانیے:",
          "options": [
            "میرا نام عدنان ہے، آپ سے شرفِ ملاقات حاصل کر کے مجھے دلی مسرت ہوئی۔ (My name is Adnan, and it gave me heartfelt pleasure to have the honor of meeting you.)",
            "اپنے نام کے ساتھ ہمیشہ 'جناب صاحب بہادر' لکھنا چاہیے۔",
            "تعارف کرواتے وقت دوسروں پر چیخنا لازمی ہے۔",
            "اسم گرامی کا مطلب گھر کا پتا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«میرا نام عدنان ہے، آپ سے شرفِ ملاقات حاصل کر کے مجھے دلی مسرت ہوئی۔» تعارف کا فصیح اور مکمل جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u1-l3": {
    "id": "ur-u1-l3",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 3,
    "title": "شکریہ، احسان شناسی اور نوازش کے کلمات (Gratitude & Expressions of Politeness)",
    "level": "A1",
    "objective": "اردو میں شکریہ ادا کرنے، احسان ماننے اور خیر سگالی کے شائستہ کلمات کا درست استعمال سیکھنا۔",
    "presentation": {
      "explanation": "اردو میں شکریہ اور اظہارِ تشکر کے فصیح و مستند اصول:\n\n1. **شکریہ اور بہت شکریہ**:\n   - کسی کی مدد، تحفے یا عنایت پر «شکریہ»، «بہت بہت شکریہ» یا «آپ کا بے حد شکریہ» کہا جاتا ہے۔\n\n2. **نوازش اور ذرہ نوازی**:\n   - جب کوئی آپ کی تعریف فرمائے یا غیر معمولی عنایت کرے تو عاجزی سے «یہ آپ کی نوازش ہے» یا «یہ تو آپ کی ذرہ نوازی ہے» کہا جاتا ہے۔\n\n3. **دعائیہ شکرگزاری (جزاک اللہ)**:\n   - دینی اور ثقافتی دائرے میں کسی کی نیکی کے بدلے میں «جزاک اللہ خیر» (اللہ آپ کو بہترین جزا دے) کا کلمہ دعائیہ تشکر کے طور پر مستعمل ہے۔*",
      "examples": [
        {
          "target": "آپ کی اس پُرتکلف ضیافت اور بے پناہ محبت کا بے حد شکریہ۔",
          "reading": "Aap ki is pur-takalluf ziyaafat aur be-panaah mohabbat ka be-hadd shukriya. [aːp kiː ɪs pʊr-t̪əkəlːʊf zɪjaːfət̪ ɔːr beː-pənaːɦ moːɦəbːət̪ kaː beː-həd̪ː ʃʊkrɪjaː] (AHP kee ees poor-tuh-kuhl-LOOF zee-YAH-fuht owr bay-puh-NAHH moh-HUHB-buht kah bay-HUHDD shook-REE-yah)",
          "translation": "Thank you immensely for this lavish hospitality and boundless affection."
        },
        {
          "target": "یہ تو آپ کی ذرہ نوازی ہے کہ آپ نے خاکسار کو اس لائق سمجھا۔",
          "reading": "Yeh to aap ki zarra-nawaazi hai ke aap ne khaaksaar ko is laaiq samjha. [jɛh t̪oː aːp kiː zərːə-nəʋaːziː hɛː kɪ aːp neː xaːksaːr koː ɪs laːɪq səmədʒʱaː] (YEH toh AHP kee zuhr-ruh-nuh-VAH-zee hy kay AHP nay khahk-SAHR koh ees LAH-eeq suhm-JHAH)",
          "translation": "It is merely your humble graciousness that you considered this humble self worthy of this."
        },
        {
          "target": "میری مشکل گھڑی میں رہنمائی فرمانے پر جزاک اللہ خیر، جناب!",
          "reading": "Meri mushkil ghadi mein rahnumaai farmaane par jazaak Allah khair, janaab! [meːriː mʊʃkɪl ɡʱəɽiː mẽː rəɦnʊmaːiː fərmaːneː pər dʒəzaːk əlːaːʱ xɛːr dʒənaːb] (MAY-ree moosh-KEEL ghuh-DEE mayn ruhh-noo-MAH-ee fuhr-mah-NAY puhr juh-ZAHK uhl-LAH khyr, juh-NAHB)",
          "translation": "May God reward you with goodness, sir, for guiding me in my hour of difficulty!"
        }
      ],
      "mnemonics": [
        "اظہار تشکر: شکریہ (عام شکر)، ذرہ نوازی (عاجزی)، جزاک اللہ (دعائیہ شکر)!"
      ],
      "culturalNotes": [
        "لکھنوی اردو میں تعریف کے جواب میں خود فخر کرنے کے بجائے 'یہ تو آپ کا حسنِ نظر ہے' (یہ آپ کی آنکھوں کی اچھائی ہے) یا 'ذرہ نوازی ہے' بولنا کمال تہذیب سمجھا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "کسی کی مہربانی، عنایت یا تعاون پر شکر ادا کرنے کے لیے بنیادی اردو کلمہ کون سا ہے؟",
          "options": [
            "بہت بہت شکریہ (Thank you very much - Core authentic expression of gratitude in Urdu)",
            "معاف کیجیے (معذرت)",
            "خدا حافظ (الوداع)",
            "خبردار (تنبیہ)"
          ],
          "answerIndex": 0,
          "explanation": "شکر ادا کرنے کا بنیادی کلمہ «شکریہ» یا «بہت بہت شکریہ» ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "جب کوئی آپ کے کام کی تعریف کرے تو انکساری اور عاجزی ظاہر کرنے کے لیے کیا کہنا فصیح ہے؟",
          "options": [
            "یہ آپ کی ذرہ نوازی ہے (It is your kind graciousness - Classic humble reply to compliments)",
            "میں واقعی دنیا کا سب سے بڑا آدمی ہوں (تکبر)",
            "تمہیں اب سمجھ میں آیا (غرور)",
            "چلو خاموش رہو (بدتمیزی)"
          ],
          "answerIndex": 0,
          "explanation": "تعریف کے جواب میں انکساری سے «یہ آپ کی ذرہ نوازی ہے» کہا جاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "اردو میں شکریہ اور احسان شناسی (Gratitude & Politeness) کا مکمل معیاری جملہ پہچانیے:",
          "options": [
            "آپ کے خلوص اور پرخلوص تعاون کا تہہِ دل سے بہت بہت شکریہ، اللہ آپ کو جزائے خیر عطا فرمائے۔ (Heartfelt thank you for your sincerity and genuine cooperation; may God grant you a noble reward.)",
            "شکریہ ادا کرنے سے انسان چھوٹا ہو جاتا ہے اس لیے شکریہ کبھی مت کہو۔",
            "جزاک اللہ کا مطلب راستہ صاف کرنا ہوتا ہے۔",
            "ذرہ نوازی کا مطلب فرش پر جھاڑو لگانا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«آپ کے خلوص اور پرخلوص تعاون کا تہہِ دل سے بہت بہت شکریہ...» تشکر کا مکمل اور فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u1-l4": {
    "id": "ur-u1-l4",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 4,
    "title": "التجا، معذرت اور رخصت کے کلمات (Requests, Apologies & Farewell)",
    "level": "A1",
    "objective": "التجا (برائے مہربانی)، معذرت (معاف کیجیے گا) اور الوداع (خدا حافظ، اللہ نگہبان) کے شائستہ کلمات میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "درخواست، معذرت اور رخصتی کے شائستہ تہذیبی اصول:\n\n1. **شائستہ درخواست (التجا)**:\n   - کسی سے کچھ مانگنے یا گزارش کرنے کے لیے جملے کے آغاز میں «برائے مہربانی» یا «براہِ کرم» استعمال کیا جاتا ہے (جیسے: براہِ کرم تشریف لائیے)۔\n\n2. **معذرت و معافی (Apology)**:\n   - توجہ مبذول کرانے یا کسی لغزش پر «معاف کیجیے گا» یا «میں معذرت خواہ ہوں» بولا جاتا ہے۔\n\n3. **الوداعی و رخصتی کلمات**:\n   - محفل سے رخصت ہوتے وقت «خدا حافظ»، «اللہ حافظ» یا «فی امان اللہ» (اللہ کی امان میں) کہا جاتا ہے۔*",
      "examples": [
        {
          "target": "براہِ کرم لائبریری کے اندر مکمل خاموشی اختیار فرمائیے۔",
          "reading": "Baraah-e-karam library ke andar mukammal khaamoshi ikhtiyaar farmaaiye. [bəraːɦ-eː-kərəm laːɪbreːriː keː ənd̪ər mʊkəmːəl xaːmoːʃiː ɪxt̪ɪjaːr fərmaːiːjeː] (buh-RAH-hay-kuh-RUHM library kay uhn-DUHR moo-kuhm-MUHL khah-moh-SHEE eekh-tee-YAHR fuhr-mah-EE-yay)",
          "translation": "Please observe complete silence inside the library."
        },
        {
          "target": "معاف کیجیے گا، مجھے تاخیر ہو گئی کیونکہ راستے میں ٹریفک کا شدید دباؤ تھا۔",
          "reading": "Maaf kijiye ga, mujhe taakheer ho gayi kyonke raaste mein traffic ka shadeed dabaao tha. [maːf kiːdʒɪjeː ɡaː mʊdʒʱeː t̪aːxiːr hoː ɡəiː kjoː̃kɪ raːst̪eː mẽː ʈrɛːfɪk kaː ʃəd̪iːd̪ d̪əbaːoː t̪ʰaː] (MAHF KEE-jee-yay GAH, moo-JHAY tah-KHEER hoh guh-YEE KYOHN-kay rah-STAY mayn traffic kah shuh-DEED duh-BAH-oh thah)",
          "translation": "Excuse me, I got delayed because there was heavy traffic on the way."
        },
        {
          "target": "اب مجھے اجازت دیجیے، خدا حافظ اور فی امان اللہ!",
          "reading": "Ab mujhe ijaazat deejiye, Khuda hafiz aur fee amaan Allah! [əb mʊdʒʱeː ɪdʒaːzət̪ d̪iːdʒɪjeː xʊd̪aː haːfɪz ɔːr fiː əmaːn əlːaːʱ] (UHB moo-JHAY ee-jah-ZUHT DEE-jee-yay, khoo-DAH HAH-feez owr FEE uh-MAHN uhl-LAH)",
          "translation": "Now please grant me leave, goodbye and may you be under God's protection!"
        }
      ],
      "mnemonics": [
        "درخواست و رخصت: براہِ کرم (درخواست)، معاف کیجیے (معذرت)، فی امان اللہ (الوداعی دعا)!"
      ],
      "culturalNotes": [
        "اردو میں رخصت ہوتے وقت 'اب میں چلتا ہوں' کے بجائے 'اب مجھے اجازت دیجیے' یا 'اب رخصت کا وقت ہے' کہنا آدابِ محفل کا لازمی حصہ ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو میں کسی سے شائستہ انداز میں گزارش یا درخواست کرنے کے لیے کون سا سابقہ لفظ استعمال ہوتا ہے؟",
          "options": [
            "براہِ کرم / برائے مہربانی (Please / Kindly - Polite preface for making requests in Urdu)",
            "خبردار ہو جاؤ (وارننگ)",
            "جلدی کرو بھاگو (حکم)",
            "چپ چاپ سنو (سختی)"
          ],
          "answerIndex": 0,
          "explanation": "شائستہ درخواست کے لیے «براہِ کرم» یا «برائے مہربانی» کا استعمال کیا جاتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ملاقات کے اختتام پر محفل سے رخصت ہوتے وقت دعائیہ الوداعی کلمہ کون سا ہے؟",
          "options": [
            "خدا حافظ / فی امان اللہ (Khuda Hafiz / Fee Amaan Allah - May God protect you, traditional Urdu farewell)",
            "السلام علیکم (ملاقات کا سلام)",
            "خوش آمدید (آمد پر خیر مقدم)",
            "صبح بخیر (صبح کی دعا)"
          ],
          "answerIndex": 0,
          "explanation": "رخصتی کے وقت «خدا حافظ» یا «فی امان اللہ» کہا جاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "درخواست اور الوداع (Requests & Farewells) کا مکمل اور شائستہ جملہ پہچانیے:",
          "options": [
            "براہِ کرم میری یہ درخواست قبول فرمائیے، اب مجھے اجازت دیجیے، اللہ نگہبان۔ (Kindly accept this request of mine, now please grant me leave, God protect you.)",
            "معاف کیجیے کا مطلب ہے کہ فورا پولیس کو بلا لو۔",
            "رخصت ہوتے وقت دروازہ زور سے توڑ کر بھاگ جانا چاہیے۔",
            "براہِ کرم کا استعمال صرف جھگڑے میں کیا جاتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«براہِ کرم میری یہ درخواست قبول فرمائیے، اب مجھے اجازت دیجیے، اللہ نگہبان۔» مکمل اور معیاری جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u1-l5": {
    "id": "ur-u1-l5",
    "subject": "urdu",
    "unit": 1,
    "lessonNumber": 5,
    "title": "نستعلیق رسم الخط، اعراب اور صوتیات (Nastaliq Script, Phonetics & Diacritics)",
    "level": "A1",
    "objective": "نستعلیق حروفِ تہجی کی اشکال، اعراب (زبر، زیر، پیش، جزم، تشدید) اور مخلوط صوتیات (ھ والے حروف) کو سمجھنا۔",
    "presentation": {
      "explanation": "اردو رسم الخط (Nastaliq) اور صوتیاتی نظام کے بنیادی قواعد:\n\n1. **خطِ نستعلیق اور حروفِ تہجی**:\n   - اردو دائیں سے بائیں (Right-to-Left) لکھی جاتی ہے؛\n   - اس میں 39 بنیادی حروف ہیں، جن میں عربی، فارسی اور ہندی الاصل حروف (ٹ، ڈ، ڑ) اور 14 مخلوط/ہکاری آوازیں (بھ، پھ، تھ، ٹھ، جھ، چھ، دھ، ڈھ، رھ، ڑھ، کھ، گھ، لھ، مھ، نھ) شامل ہیں۔\n\n2. **اعراب (حرکات و سکنات)**:\n   - **زبر (َ / Fatha)** — چھوٹی 'اَ' کی آواز (جیسے: سَب، گَھر)؛\n   - **زیر (ِ / Kasra)** — چھوٹی 'اِ' کی آواز (جیسے: دِل، کِتاب)؛\n   - **پیش (ُ / Damma)** — چھوٹی 'اُ' کی آواز (جیسے: پُل، گُل)؛\n   - **جزم (ْ / Sukun)** — حرف کے ساکن ہونے کی علامت؛\n   - **تشدید (ّ / Tashdeed)** — حرف کے دو بار مشدد ادا ہونے کی علامت (جیسے: ابّا، امّی)۔\n\n3. **اضافت (Izafat)**:\n   - *دو الفاظ کے باہمی تعلق کے لیے پہلے لفظ کے نیچے زیر لگائی جاتی ہے (جیسے: طالبِ علم، شانِ اردو)*۔*",
      "examples": [
        {
          "target": "اردو خطِ نستعلیق میں دائیں سے بائیں لکھی جاتی ہے اور اس میں فارسی و عربی کے تمام خوبصورت اصول شامل ہیں۔",
          "reading": "Urdu khatt-e-nastaliq mein daayein se baayein likhi jaati hai aur is mein Faarsi va Arabi ke tamaam khoobsurat usool shaamil hain. [ʊrd̪uː xət̪ː-eː-nəst̪əʔliːq mẽː d̪aːjẽː seː baːjẽː lɪkʰiː dʒaːt̪iː hɛː ɔːr ɪs mẽː faːrsiː ʋaː ərbɪiː keː t̪əmaːm xuːbsuːrət̪ ʊsuːl ʃaːmɪl hɛ̃ː] (OOR-doo khuhtt-ay-nuhs-tuh-LEEQ mayn DAH-yayn say BAH-yayn leek-HEE JAH-tee hy owr ees mayn FAHR-see vah uh-ruh-BEE kay tuh-MAHM khoob-SOO-ruht oo-SOOL SHAH-meel hyhn)",
          "translation": "Urdu is written from right to left in the Nastaliq script, incorporating all the elegant principles of Persian and Arabic."
        },
        {
          "target": "زبر، زیر اور پیش کو اردو زبان میں 'اعراب' کہتے ہیں جو حروف کو درست تلفظ اور روانی عطا کرتے ہیں۔",
          "reading": "Zabar, zer aur pesh ko Urdu zabaan mein 'aeraab' kahte hain jo huroof ko durust talaffuz aur rawaani ata karte hain. [zəbər zeːr ɔːr peːʃ koː ʊrd̪uː zəbaːn mẽː ɛːraːb kəɦt̪eː hɛ̃ː dʒoː ɦʊruːf koː d̪ʊrʊst̪ t̪ələfːʊz ɔːr rəʋaːniː ət̪aː kərt̪eː hɛ̃ː] (zuh-BUHR, ZAYR owr PAYSH koh OOR-doo zuh-BAHN mayn ay-RAHB kuhh-TAY hyhn joh hoo-ROOF koh doo-ROOST tuh-luhf-FOOZ owr ruh-vah-NEE uh-TAH KUHR-tay hyhn)",
          "translation": "Zabar, zer, and pesh are called 'aeraab' (diacritics) in Urdu, which grant accurate pronunciation and flow to letters."
        },
        {
          "target": "لفظ 'طالبِ علم' میں حرف 'ب' کے نیچے زیر اضافت کا کام کر رہی ہے جس کا مطلب 'علم کا طلبگار' ہے۔",
          "reading": "Lafz 'taalib-e-ilm' mein harf 'bay' ke neeche zer izafat ka kaam kar rahi hai jis ka matlab 'ilm ka talabgaar' hai. [ləfz t̪aːlɪb-eː-ɪlm mẽː hərwf beː keː niːtʃeː zeːr ɪzaːfət̪ kaː kaːm kər rəɦiː hɛː dʒɪs kaː mət̪ləb ɪlm kaː t̪ələbɡaːr hɛː] (LUHFZ TAH-leeb-ay-EELM mayn HUHRF BAY kay NEE-chay ZAYR ee-ZAH-fuht kah KAHM kuhr ruh-HEE hy jees kah muht-LUHB EELM kah tuh-luhb-GAHR hy)",
          "translation": "In the phrase 'taalib-e-ilm' (student), the zer beneath the letter 'b' functions as izafat, meaning 'seeker of knowledge.'"
        }
      ],
      "mnemonics": [
        "اعراب و نستعلیق: زبر (اَ)، زیر (اِ)، پیش (اُ)، تشدید (دوہرا)، اضافت (تعلق زیر)!"
      ],
      "culturalNotes": [
        "خطِ نستعلیق کا آغاز چودہویں صدی میں ایرانی خطاط میر علی تبریزی نے کیا تھا، جس نے اردو شاعری اور ادب کو غیر معمولی بصری حسن عطا کیا۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو زبان میں حرف کو دو بار سختی سے ادا کرنے کے لیے اس پر کون سی علامت لگائی جاتی ہے؟",
          "options": [
            "تشدید (ّ / Tashdeed - Diacritic mark indicating gemination or doubling of consonant)",
            "زبر (َ / Fatha)",
            "زیر (ِ / Kasra)",
            "پیش (ُ / Damma)"
          ],
          "answerIndex": 0,
          "explanation": "حرف کو دو بار ادا کرنے کی علامت کو «تشدید» (ّ) کہتے ہیں۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "اردو رسم الخط کس سمت میں لکھا جاتا ہے؟",
          "options": [
            "دائیں سے بائیں (Right to Left - Traditional orientation of Nastaliq Perso-Arabic script)",
            "بائیں سے دائیں (Left to right)",
            "اوپر سے نیچے (Top to bottom)",
            "نیچے سے اوپر (Bottom to top)"
          ],
          "answerIndex": 0,
          "explanation": "اردو رسم الخط خطِ نستعلیق میں «دائیں سے بائیں» لکھا جاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "نستعلیق رسم الخط اور اعراب (Nastaliq Script & Diacritics) کا جامع مستند جملہ پہچانیے:",
          "options": [
            "نستعلیق رسم الخط، اعراب (زبر، زیر، پیش، تشدید) اور ہکاری صوتیات ہی اردو زبان کی فصاحت اور صوتی حسن کی بنیاد ہیں۔ (Nastaliq script, diacritics [zabar, zer, pesh, tashdeed], and aspirated phonetics are the very foundation of Urdu's eloquence and phonetic beauty.)",
            "اردو میں اعراب لگانا سخت منع ہے اور صرف لکیریں کھینچی جاتی ہیں۔",
            "نستعلیق رسم الخط صرف الٹے ہاتھ سے لکھا جا سکتا ہے۔",
            "تشدید کا مطلب ہے کہ حرف کو مٹا کر پھینک دو۔"
          ],
          "answerIndex": 0,
          "explanation": "«نستعلیق رسم الخط، اعراب (زبر، زیر، پیش، تشدید) اور ہکاری صوتیات ہی اردو زبان کی فصاحت... بنیاد ہیں۔» صوتیات اور رسم الخط کا مستند جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u2-l1": {
    "id": "ur-u2-l1",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 1,
    "title": "اسم کی اقسام اور تذکیر و تانیث کی بنیادی تقسیم (Nouns & Grammatical Gender)",
    "level": "A1",
    "objective": "اردو اسماء کی بنیادی تقسیم (اسم خاص و عام)، جنسِ حقیقی و غیر حقیقی، اور مذکر و مؤنث کی بنیادی علامات کو سمجھنا۔",
    "presentation": {
      "explanation": "اردو زبان میں اسم اور تذکیر و تانیث (Gender) کے بنیادی قواعد:\n\n1. **جنسِ حقیقی اور جنسِ غیر حقیقی**:\n   - **جنسِ حقیقی** — جاندار اشیاء کی قدرتی جنس (جیسے: مرد / عورت، بیٹا / بیٹی، شیر / شیرنی)؛\n   - **جنسِ غیر حقیقی** — بے جان اشیاء کی نحوی جنس جو کلامِ اہل زبان کے مطابق مقرر ہوتی ہے (جیسے: قلم مذکر ہے، کتاب مؤنث ہے)۔\n\n2. **مذکر اسماء کی عمومی علامات**:\n   - جن اسماء کے آخر میں الف (ا) یا ہائے مختفی (ہ) آئے، وہ عموماً مذکر ہوتے ہیں (جیسے: لڑکا، کمرہ، دروازہ، پردہ، راستہ)۔\n\n3. **مؤنث اسماء کی عمومی علامات**:\n   - جن اسماء کے آخر میں چھوٹی یے (ی) آئے، وہ عموماً مؤنث ہوتے ہیں (جیسے: لڑکی، گاڑی، کاپی، کھڑکی، روٹی)۔*",
      "examples": [
        {
          "target": "یہ بڑا کمرہ اور لمبا راستہ دونوں مذکر اسماء ہیں جن کے آخر میں الف یا ہ آتا ہے۔",
          "reading": "Yeh bada kamrah aur lamba raasta donon muzakkar asmaa hain jin ke aakhir mein alif ya he aata hai. [jɛh bəɽaː kəmraː ɔːr ləmbaː raːst̪aː d̪oːnõː mʊzəkːər əsmaː hɛ̃ː dʒɪn keː aːxɪr mẽː əlɪf jaː ɦeː aːt̪aː hɛː] (YEH buh-DAH kuhm-RAH owr luhm-BAH rah-STAH DOH-nohn moo-ZUK-kuhr uhs-MAH hyhn jeen kay ah-KHEER mayn uh-LEEF yah HAY ah-TAH hy)",
          "translation": "This large room and long path are both masculine nouns ending in alif or he."
        },
        {
          "target": "میری چھوٹی گاڑی اور نئی کتاب دونوں مؤنث اسماء ہیں اور ان کے ساتھ مؤنث صفت آتی ہے۔",
          "reading": "Meri chhoti gaadi aur nayi kitaab donon muannas asmaa hain aur in ke saath muannas sifat aati hai. [meːriː tʃʰoːʈiː ɡaːɽiː ɔːr nəiː kɪt̪aːb d̪oːnõː mʊʔənːəs əsmaː hɛ̃ː ɔːr ɪn keː saːt̪ʰ mʊʔənːəs sɪfət̪ aːt̪iː hɛː] (MAY-ree choh-TEE gah-DEE owr nuh-YEE kee-TAHB DOH-nohn moo-UHN-nuhs uhs-MAH hyhn owr ees kay sahth moo-UHN-nuhs see-FUHT ah-TEE hy)",
          "translation": "My small car and new book are both feminine nouns and take feminine adjectives with them."
        },
        {
          "target": "اردو میں ہر بے جان شے کی تذکیر و تانیث اہلِ زبان کے روزمرہ اور فصحاء کے استعمال پر منحصر ہے۔",
          "reading": "Urdu mein har be-jaan shai ki tazkeer-o-taanees ahl-e-zabaan ke rozmarrah aur fusahaa ke istemaal par munhasir hai. [ʊrd̪uː mẽː hər beː-dʒaːn ʃɛː kiː t̪əzkiːr-oː-t̪aːniːs əɦl-eː-zəbaːn keː roːzmərːəh ɔːr fʊsəhaː keː ɪst̪eːmaːl pər mʊnɦəsɪr hɛː] (OOR-doo mayn HUHR bay-JAHN SHY kee tuhz-KEER-oh-tah-NEES uhhl-ay-zuh-BAHN kay rohz-muhr-RUH owr foo-suh-HAH kay ees-tay-MAHL puhr moon-huh-SEER hy)",
          "translation": "In Urdu, the grammatical gender of every inanimate object depends upon the daily usage and idioms of native speakers."
        }
      ],
      "mnemonics": [
        "اسم جنس: الف/ہ مذکر (لڑکا، کمرہ)، ی مؤنث (لڑکی، گاڑی)، تذکیر و تانیث مطابقت!"
      ],
      "culturalNotes": [
        "اردو میں بے جان اشیاء کی تذکیر و تانیث کا تعین شعراء اور اہلِ لکھنؤ و دہلی کے کلام سے کیا جاتا ہے، جہاں زبان کی لطافت اور صوتی توازن کو اولین ترجیح حاصل ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "عمومی قواعد کے تحت الف (ا) یا ہائے مختفی (ہ) پر ختم ہونے والے اردو اسماء عام طور پر کیا ہوتے ہیں؟",
          "options": [
            "مذکر اسماء (Masculine Nouns - Typically ending in alif or he, e.g., kamra, rasta)",
            "مؤنث اسماء (Feminine nouns)",
            "غیر جنس اسماء (Neutral nouns)",
            "فعل کے اوزان (Verb measures)"
          ],
          "answerIndex": 0,
          "explanation": "الف یا ہ پر ختم ہونے والے اسماء عموماً «مذکر» ہوتے ہیں (جیسے: کمرہ، پردہ، راستہ)۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مندرجہ ذیل میں سے خالص مؤنث اسم کی درست مثال کون سی ہے؟",
          "options": [
            "گاڑی / کتاب (Vehicle / Book - Authentic feminine inanimate nouns in Urdu)",
            "کمرہ / دروازہ (مذکر اسماء)",
            "پنکھا / پردہ (مذکر اسماء)",
            "راستہ / میدان (مذکر اسماء)"
          ],
          "answerIndex": 0,
          "explanation": "«گاڑی» اور «کتاب» دونوں اردو میں مؤنث بولے جاتے ہیں۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "اسم کی جنس اور تذکیر و تانیث (Noun Gender) کا مکمل اور درست جملہ پہچانیے:",
          "options": [
            "یہ کشادہ کمرہ اور روشن چراغ مذکر ہیں جبکہ وہ خوبصورت کھڑکی اور لمبی سڑک مؤنث ہیں۔ (This spacious room and bright lamp are masculine, while that beautiful window and long road are feminine.)",
            "اردو میں تمام جاندار اور بے جان اشیاء صرف مؤنث ہوتی ہیں۔",
            "کمرہ مؤنث ہے اس لیے 'بڑی کمرہ' کہنا چاہیے۔",
            "تذکیر و تانیث کا مطلب الٹا لکھنا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«یہ کشادہ کمرہ اور روشن چراغ مذکر ہیں جبکہ وہ خوبصورت کھڑکی اور لمبی سڑک مؤنث ہیں۔» جنس کا درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u2-l2": {
    "id": "ur-u2-l2",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 2,
    "title": "تذکیر و تانیث کے قواعد اور استثناء (Gender Rules, Markers & Exceptions)",
    "level": "A1",
    "objective": "پانی، دہی، گھی، موتی جیسے استثنائی مذکر اور ہوا، دوا، دعا جیسی استثنائی مؤنث کے درست لسانی استعمال میں مہارت پانا۔",
    "presentation": {
      "explanation": "اردو تذکیر و تانیث کے اہم استثناء (Exceptions) اور صفت-فعل کا ربط:\n\n1. **چھوٹی یے (ی) والے استثنائی مذکر اسماء**:\n   - اکثر 'ی' والے الفاظ مؤنث ہوتے ہیں، مگر درج ذیل الفاظ ہمیشہ **مذکر** بولے جاتے ہیں:\n     - پانی، گھی، دہی، موتی، ہاتھی، قاضی، جی، درزی (جیسے: «پانی ٹھنڈا ہے»، «دہی کھٹا ہے»)۔\n\n2. **الف پر ختم ہونے والے استثنائی مؤنث اسماء**:\n   - اکثر الف والے الفاظ مذکر ہوتے ہیں، مگر درج ذیل الفاظ ہمیشہ **مؤنث** بولے جاتے ہیں:\n     - ہوا، دعا، دوا، قضا، التجا، فضا، سزا، شفا (جیسے: «ٹھنڈی ہوا چلی»، «میری دعا قبول ہوئی»)۔\n\n3. **فعل اور صفت پر اثر**:\n   - مذکر اسم کے ساتھ: «تازہ دہی خریدا گیا»؛ مؤنث اسم کے ساتھ: «کڑوی دوا پی لی گئی۔»*",
      "examples": [
        {
          "target": "پانی، دہی اور گھی آخر میں 'ی' رکھنے کے باوجود اردو قواعد میں مذکر بولے جاتے ہیں۔",
          "reading": "Paani, dahi aur ghee aakhir mein 'ye' rakhne ke baawujood Urdu qawaaid mein muzakkar bole jaate hain. [paːniː d̪əɦiː ɔːr ɡʱiː aːxɪr mẽː jeː rəkʰneː keː baːʋʊdʒuːd̪ ʊrd̪uː qəʋaːʔɪd̪ mẽː mʊzəkːər boːleː dʒaːt̪eː hɛ̃ː] (PAH-nee, DUH-hee owr GHEE ah-KHEER mayn YAY ruhkh-NAY kay bah-voo-JOOD OOR-doo quh-wah-EED mayn moo-ZUK-kuhr boh-LAY jah-TAY hyhn)",
          "translation": "Water, yogurt, and clarified butter are treated as masculine in Urdu grammar despite ending in the letter 'ye.'"
        },
        {
          "target": "سردیوں میں صبح کے وقت ٹھنڈی اور خوشگوار ہوا چلتی ہے جو طبیعت کو تازگی بخشتی ہے۔",
          "reading": "Sardiyon mein subah ke waqt thandi aur khushgawaar hawa chalti hai jo tabeeyat ko taazgi bakhshti hai. [sərd̪ɪjõː mẽː sʊbəh keː ʋəqt̪ t̪ʰəɳɖiː ɔːr xʊʃɡəʋaːr ɦəʋaː tʃəlt̪iː hɛː dʒoː t̪əbiːʔət̪ koː t̪aːzɡiː bəxʃt̪iː hɛː] (suhr-dee-YOHN mayn SOO-buh kay VUHKT thuhn-DEE owr khoosh-guh-VAHR huh-VAH chuhl-TEE hy joh tuh-bee-YUHT koh tahz-GEE buhkhsh-TEE hy)",
          "translation": "In winter mornings, a cold and pleasant breeze blows, bestowing freshness upon the disposition."
        },
        {
          "target": "مریض کے لیے ڈاکٹر نے مفید دوا تجویز کی اور اس کی جلد صحتیابی کی مخلصانہ دعا کی۔",
          "reading": "Mareez ke liye doctor ne mufeed dawa tajweez kee aur us ki jald sehtyaabi ki mukhlisaana dua kee. [məriːz keː lɪjeː ɖɔːkʈər neː mʊfiːd̪ d̪əʋaː t̪ədʒʋiːz kiː ɔːr ʊs kiː dʒəld̪ sɪhət̪jaːbiː kiː mʊxlɪsaːnəh d̪ʊʔaː kiː] (muh-REEZ kay lee-AY doctor nay moo-FEED duh-VAH tuhj-VEEZ KEE owr oos kee JUHLD seh-tuh-yah-BEE kee mookh-lee-sah-NUH doo-AH KEE)",
          "translation": "The doctor prescribed beneficial medicine for the patient and made a sincere prayer for his speedy recovery."
        }
      ],
      "mnemonics": [
        "استثناء: پانی، دہی، گھی، موتی (مذکر ہیں!)، ہوا، دوا، دعا، سزا (مؤنث ہیں!)"
      ],
      "culturalNotes": [
        "اردو امتحانات اور ادبی مباحثوں میں 'دہی کھٹی ہے' بولنا فاش غلطی مانا جاتا ہے؛ فصیح اہل زبان ہمیشہ 'دہی کھٹا ہے' اور 'پانی ٹھنڈا ہے' بولتے ہیں۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو زبان میں لفظ «پانی» اور «دہی» کی درست تذکیر و تانیث کیا ہے؟",
          "options": [
            "مذکر اسماء (Masculine - 'Paani' and 'Dahi' are standard masculine exceptions ending in 'ye')",
            "مؤنث اسماء (Feminine nouns)",
            "دونوں مستعمل ہیں (Both equally used)",
            "کوئی جنس نہیں (No gender)"
          ],
          "answerIndex": 0,
          "explanation": "«پانی» اور «دہی» اردو کے مسلمہ استثنائی «مذکر» اسماء ہیں (جیسے: پانی ٹھنڈا ہے، دہی کھٹا ہے)۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "لفظ «ہوا» اور «دوا» کے ساتھ صفت کا درست استعمال کیا ہوگا؟",
          "options": [
            "ٹھنڈی ہوا / کڑوی دوا (Cold breeze / Bitter medicine - Correct feminine adjective agreement)",
            "ٹھنڈا ہوا / کڑوا دوا (مذکر صفت کی غلطی)",
            "ٹھنڈے ہوا / کڑوے دوا (جمع کی غلطی)",
            "ٹھنڈوں ہوا / کڑووں دوا (غیر معیاری)"
          ],
          "answerIndex": 0,
          "explanation": "«ہوا» اور «دوا» مؤنث ہیں، لہٰذا ان کے ساتھ «ٹھنڈی ہوا» اور «کڑوی دوا» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "تذکیر و تانیث کے استثناء (Gender Exceptions & Concord) کا فصیح جملہ پہچانیے:",
          "options": [
            "گلاس میں ٹھنڈا پانی بھرا ہے اور مریض نے ڈاکٹر کی دی ہوئی مفید دوا پی لی ہے۔ (The glass is filled with cold water [masculine], and the patient drank the beneficial medicine [feminine] given by the doctor.)",
            "پانی بہت میٹھی ہے اور ہوا بہت تیز چلتا ہے۔",
            "دہی کھٹی ہو گئی ہے اس لیے پھینک دو۔",
            "دوا اچھا تھا لیکن گھی خراب تھی۔"
          ],
          "answerIndex": 0,
          "explanation": "«گلاس میں ٹھنڈا پانی بھرا ہے اور مریض نے... مفید دوا پی لی ہے۔» پانی (مذکر) اور دوا (مؤنث) کا بالکل درست استعمال ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u2-l3": {
    "id": "ur-u2-l3",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 3,
    "title": "واحد سے جمع بنانے کے بنیادی اردو اصول (Regular Urdu Pluralization)",
    "level": "A1",
    "objective": "مذکر اسماء (لڑکا سے لڑکے)، مؤنث یے والے (لڑکی سے لڑکیاں) اور صامت والے (کتاب سے کتابیں) کی جمع بنانے کے اصولوں میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں واحد سے جمع (Singular to Plural) بنانے کے بنیادی باقاعدہ اصول:\n\n1. **مذکر اسماء کی جمع (الف / ہ -> ے)**:\n   - جن مذکر اسماء کے آخر میں الف (ا) یا ہائے مختفی (ہ) ہو، ان کی جمع الف/ہ کو بڑی ے میں بدل کر بنتی ہے (جیسے: لڑکا -> لڑکے، کمرہ -> کمرے، پردہ -> پردے، دروازہ -> دروازے)؛\n   - بغیر الف/ہ والے مذکر اسماء کی فاعلی حالت میں جمع نہیں بدلتی (جیسے: ایک درخت -> دس درخت، ایک شہر -> کئی شہر)۔\n\n2. **مؤنث اسماء جن کے آخر میں 'ی' ہو (ی -> یاں)**:\n   - چھوٹی یے پر ختم ہونے والے مؤنث اسماء کی جمع آخر میں الف اور نون غنہ لگا کر بنتی ہے (جیسے: لڑکی -> لڑکیاں، کھڑکی -> کھڑکیاں، گاڑی -> گاڑیاں، کاپی -> کاپیاں)۔\n\n3. **مؤنث اسماء جن کے آخر میں صامت (Consonant) ہو (-> یں)**:\n   - حرفِ صحیح (صامت) پر ختم ہونے والے مؤنث اسماء کے آخر میں 'یں' (یے نون غنہ) بڑھایا جاتا ہے (جیسے: کتاب -> کتابیں، رات -> راتیں، آنکھ -> آنکھیں، میز -> میزیں)۔*",
      "examples": [
        {
          "target": "باغ میں اونچے درختوں کے سائے تلے ننھے لڑکے اور بچیاں کھیل رہے ہیں۔",
          "reading": "Baagh mein oonche darakhton ke saaye talay nannhe ladke aur bachchiyaan khel rahe hain. [baːɣ mẽː uːntʃeː d̪ərəxt̪õː keː saːjeː t̪əleː nənːɦeː ləɽkeː ɔːr bətʃːɪjaː̃ kʰeːl rəɦeː hɛ̃ː] (BAHGH mayn OON-chay duh-ruhkh-TOHN kay SAH-yay tuh-LAY nuhn-NHAY LUHD-kay owr buhch-chee-YAHN khayl ruh-HAY hyhn)",
          "translation": "In the garden beneath the shade of tall trees, little boys and girls are playing."
        },
        {
          "target": "لائبریری کی الماریوں میں پرانی اور نایاب کتابیں انتہائی سلیقے سے سجی ہوئی ہیں۔",
          "reading": "Library ki almaariyon mein puraani aur naayaab kitaabein intihaai saleeqay se saji hui hain. [laːɪbreːriː kiː əlmaːrɪjõː mẽː pʊraːniː ɔːr naːjaːb kɪt̪aːbẽː ɪnt̪ɪhaːiː səliːqeː seː sədʒiː ɦʊiː hɛ̃ː] (library kee uhl-mah-ree-YOHN mayn poo-RAH-nee owr nah-YAHB kee-tah-BAYN een-tee-HAH-ee suh-LEE-kay say suh-JEE hoo-EE hyhn)",
          "translation": "In the library cupboards, old and rare books are arranged with great neatness."
        },
        {
          "target": "کمرے کے تمام دروازے اور کھڑکیاں کھول دیجیے تاکہ تازہ ہوا اور دھوپ اندر آ سکے۔",
          "reading": "Kamre ke tamaam darwaaze aur khidkiyaan khol deejiye taake taazah hawa aur dhoop andar aa sakay. [kəmreː keː t̪əmaːm d̪ərʋaːzeː ɔːr xɪɽkɪjaː̃ kʰoːl d̪iːdʒɪjeː t̪aːkɪ t̪aːzəh ɦəʋaː ɔːr d̪ʱuːp ənd̪ər aː səkeː] (kuhm-RAY kay tuh-MAHM duhr-VAH-zay owr kheed-kee-YAHN khohl DEE-jee-yay tah-KAY tah-ZUH huh-VAH owr DHOOP uhn-DUHR ah SUH-kay)",
          "translation": "Open all the doors and windows of the room so that fresh air and sunshine can come inside."
        }
      ],
      "mnemonics": [
        "جمع کے اصول: لڑکا -> لڑکے (الف سے ے)، لڑکی -> لڑکیاں (ی سے یاں)، کتاب -> کتابیں (صامت سے یں)!"
      ],
      "culturalNotes": [
        "اردو میں جمع کے ساتھ فعل کی ہم آہنگی لازمی ہے؛ مذکر جمع کے ساتھ 'ہیں/تھے' اور مؤنث جمع کے ساتھ 'تھیں/رہیں' بولا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو لفظ «کتاب» (مؤنث اسم) کی درست جمع کیا ہے؟",
          "options": [
            "کتابیں (Kitaabein - Correct plural of consonant-ending feminine noun)",
            "کتابوں (حالت مغیرہ)",
            "کتابات (غیر فصیح)",
            "کتابیاں (غلط لاحقہ)"
          ],
          "answerIndex": 0,
          "explanation": "صامت پر ختم ہونے والے مؤنث اسم کی جمع «یں» لگا کر بنتی ہے: کتاب -> «کتابیں»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "اردو لفظ «کھڑکی» (مؤنث اسم) کی درست جمع کیا ہوگی؟",
          "options": [
            "کھڑکیاں (Khidkiyaan - Plural of feminine noun ending in 'ye')",
            "کھڑکے (مذکر لاحقہ)",
            "کھڑکیں (صامت لاحقہ)",
            "کھڑکیوں (مغیرہ جمع)"
          ],
          "answerIndex": 0,
          "explanation": "چھوٹی یے پر ختم ہونے والے مؤنث اسم کی جمع «یاں» کے ساتھ «کھڑکیاں» ہوتی ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "واحد اور جمع کے درست امتزاج (Pluralization Syntax) کا مکمل معیاری جملہ پہچانیے:",
          "options": [
            "سکول کے تمام کمرے صاف ہیں، اور میزوں پر نئی کاپیاں اور کتابیں رکھی ہوئی ہیں۔ (All rooms [kamray] of the school are clean, and new notebooks [kaapiyaan] and books [kitaabein] are placed on the desks.)",
            "ایک لڑکا کھیل رہے ہیں اور بہت سی لڑکیاں بھاگتا ہے۔",
            "کتاب کی جمع کتابا ہوتی ہے اور دروازہ کی جمع دروازیاں ہے۔",
            "تمام کمرہ کو تالا لگا دیجیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«سکول کے تمام کمرے صاف ہیں، اور میزوں پر نئی کاپیاں اور کتابیں رکھی ہوئی ہیں۔» تمام جمع اشکال کا درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u2-l4": {
    "id": "ur-u2-l4",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 4,
    "title": "عربی و فارسی طرز کی باقاعدہ و بے قاعدہ جمع (Arabic & Persian Plural Formations in Urdu)",
    "level": "A1",
    "objective": "عربی لاحقہ -ات (معلومات)، فارسی لاحقہ -ان (صاحبان) اور عربی جمع مکسر (کتب، مساجد، ممالک) کی پہچان اور فصیح استعمال میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو میں مستعمل عربی اور فارسی اوزان کی جمع کے اصول:\n\n1. **عربی لاحقہ '-ات' (-aat)**:\n   - بہت سے عربی و فارسی الاصل اسماء کے آخر میں '-ات' لگا کر جمع بنائی جاتی ہے (جیسے: کاغذ -> کاغذات، مکان -> مکانات، جذبہ -> جذبات، تفصیل -> تفصیلات، معلومات، احکامات)۔\n\n2. **فارسی لاحقہ '-ان' (-aan)**:\n   - جاندار اور معزز اسماء کے ساتھ فارسی لاحقہ '-ان' مستعمل ہے (جیسے: صاحب -> صاحبان، دوست -> دوستاں، استاد -> استادان)۔\n\n3. **عربی جمع مکسر (Broken Plurals)**:\n   - وہ جمع جس میں واحد لفظ کے اندرونی حروف کی ترتیب اور اعراب بدل جاتے ہیں:\n     - مسجد -> **مساجد**؛ ملک -> **ممالک**؛ کتاب -> **کتب**؛ دور -> **ادوار**؛ شخص -> **اشخاص**؛ سبب -> **اسباب**۔*",
      "examples": [
        {
          "target": "وزارتِ خارجہ نے تمام ممالک کے سفیروں کے نام اہم سرکاری پیغامات اور بیانات جاری کیے۔",
          "reading": "Wazaarat-e-khaarija ne tamaam mamaalik ke safeeron ke naam aham sarkaari paighaamaat aur bayaanaat jaari kiye. [ʋəzaːrət̪-eː-xaːrɪdʒaː neː t̪əmaːm məmaːlɪk keː səfiːrõː keː naːm əɦəm sərkaːriː pɛːɣaːmaːt̪ ɔːr bəjaːnaːt̪ dʒaːriː kɪjeː] (vuh-zah-RUHT-ay-khah-ree-JAH nay tuh-MAHM muh-MAH-leek kay suh-fee-ROHN kay NAHM UH-huhm suhr-kah-REE py-ghah-MAHT owr buh-yah-NAHT jah-REE kee-YAY)",
          "translation": "The Ministry of Foreign Affairs issued important official messages and statements addressed to ambassadors of all nations."
        },
        {
          "target": "قدیم کتب خانوں میں نادر مسودات اور اہم تاریخی دستاویزات محفوظ رکھی گئی ہیں۔",
          "reading": "Qadeem kutub-khaanon mein naadir musawwadaat aur aham taareekhi dastaawezaat mehfooz rakhi gayi hain. [qəd̪iːm kʊt̪ʊb-xaːnõː mẽː naːd̪ɪr mʊsəʋːəd̪aːt̪ ɔːr əɦəm t̪aːriːxiː d̪əst̪aːʋeːzaːt̪ mɛɦfuːz rəkʰiː ɡəiː hɛ̃ː] (quh-DEEM koo-toob-khah-NOHN mayn NAH-deer moo-suhv-vuh-DAHT owr UH-huhm tah-REE-khee duhs-tah-vay-ZAHT muhh-FOOZ ruh-KHEE guh-YEE hyhn)",
          "translation": "In ancient libraries, rare manuscripts and significant historical documents are safely preserved."
        },
        {
          "target": "تمام حاضرین اور معزز صاحبانِ محفل نے شاعر کے پرتاثیر کلام پر دل کھول کر داد دی۔",
          "reading": "Tamaam haazireen aur mohtaram saahibaan-e-mehfil ne shaa'ir ke pur-taaseer kalaam par dil khol kar daad dee. [t̪əmaːm ɦaːzɪriːn ɔːr moːɦt̪ərəm saːhɪbaːn-eː-mɛɦfɪl neː ʃaːʔɪr keː pʊr-t̪aːsiːr kəlaːm pər d̪ɪl kʰoːl kər d̪aːd̪ d̪iː] (tuh-MAHM hah-zee-REEN owr moh-tuh-RUHM sah-hee-BAHN-ay-muhh-FEEL nay shah-EER kay poor-tah-SEER kuh-LAHM puhr DEEL khohl kuhr DAHD DEE)",
          "translation": "All attendees and respected members of the gathering generously applauded the poet's deeply moving verses."
        }
      ],
      "mnemonics": [
        "عربی و فارسی جمع: -ات (کاغذات/معلومات)، -ان (صاحبان)، جمع مکسر (ملک سے ممالک، کتاب سے کتب)!"
      ],
      "culturalNotes": [
        "اردو کی علمی اور ادبی زبان میں عربی جمع مکسر اور لاحقہ -ات کا استعمال تحریر کو بے پناہ وقار، فصاحت اور کلاسیکی متانت بخشتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "عربی قاعدے کے تحت لفظ «ملک» (Country) کی باوقار جمع مکسر کیا ہے؟",
          "options": [
            "ممالک (Mamaalik - Arabic broken plural of 'mulk')",
            "ملکوں (اردو عام جمع)",
            "ملکات (غلط لاحقہ)",
            "ملکان (فارسی لاحقہ)"
          ],
          "answerIndex": 0,
          "explanation": "لفظ ملک کی عربی جمع مکسر «ممالک» ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "عربی لاحقہ «-ات» (-aat) کے ذریعے بننے والی جمع کی درست مثال پہچانیے:",
          "options": [
            "معلومات / دستاویزات (Information / Documents - Authentic plural forms with Arabic suffix -aat)",
            "لڑکیات / کرسیات (غلط ساخت)",
            "شہرات / گاؤںات (غیر مانوس)",
            "درختات / پودات (غلط ساخت)"
          ],
          "answerIndex": 0,
          "explanation": "«معلومات» اور «دستاویزات» لاحقہ -ات کے ساتھ فصیح جمع کی مثالیں ہیں۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "عربی و فارسی جمع کے اوزان (Arabic & Persian Plural Usage) کا مکمل فصیح جملہ پہچانیے:",
          "options": [
            "اس علمی سیمینار میں مختلف ممالک سے آئے ہوئے مندوبین نے اپنے تحقیقی مقالات اور اہم نظریات پیش کیے۔ (In this academic seminar, delegates arriving from various countries [mamaalik] presented their research papers [maqaalaat] and key theories [nazriyaat].)",
            "ممالک کی جمع ممالکات ہوتی ہے اور یہ دونوں غلط ہیں۔",
            "کاغذات کو صرف آگ میں جلانے کے لیے جمع کہا جاتا ہے۔",
            "صاحبان کا مطلب اکیلا فقیر آدمی ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«اس علمی سیمینار میں مختلف ممالک سے آئے ہوئے مندوبین نے اپنے تحقیقی مقالات اور اہم نظریات پیش کیے۔» عربی جمع کا فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u2-l5": {
    "id": "ur-u2-l5",
    "subject": "urdu",
    "unit": 2,
    "lessonNumber": 5,
    "title": "اسم، جنس، صفت اور جمع کا ہم آہنگ ترکیب و استعمال (Noun-Gender-Adjective-Plural Grand Agreement)",
    "level": "A1",
    "objective": "صفت و موصوف (اچھا لڑکا / اچھے لڑکے / اچھی لڑکیاں)، فعل کی فاعل سے مطابقت اور تعظیمی جمع کے تمام اصولوں کا مکمل فصیح انطباق کرنا۔",
    "presentation": {
      "explanation": "اسم، جنس، صفت اور جمع کی باہمی مطابقت (Concord & Agreement) کے جامع اصول:\n\n1. **صفت اور موصوف کی مطابقت**:\n   - مذکر واحد — «اچھا لڑکا»، «بڑا کمرہ»؛\n   - مذکر جمع — «اچھے لڑکے»، «بڑے کمرے»؛\n   - مؤنث واحد — «اچھی لڑکی»، «بڑی کھڑکی»؛\n   - مؤنث جمع — «اچھی لڑکیاں»، «بڑی کھڑکیاں» (صفت کی مؤنث شکل جمع میں بھی 'ی' پر ہی رہتی ہے)۔\n\n2. **فعل کی فاعل سے مطابقت**:\n   - فاعل مذکر واحد -> فعل مذکر واحد («طالب علم پڑھتا ہے»)؛\n   - فاعل مذکر جمع -> فعل مذکر جمع («طلبہ پڑھتے ہیں»)؛\n   - فاعل مؤنث واحد -> فعل مؤنث واحد («طالبہ پڑھتی ہے»)؛\n   - فاعل مؤنث جمع -> فعل مؤنث جمع («طالبات پڑھتی ہیں»)۔\n\n3. **تعظیمی جمع (Honorific Plural)**:\n   - *کسی ایک محترم بزرگ، والد یا استاد کے لیے واحد ہونے کے باوجود احتراماً جمع کا صیغہ استعمال ہوتا ہے (جیسے: «والد صاحب تشریف لائے ہیں»)*۔*",
      "examples": [
        {
          "target": "ہونہار طلبہ اور محنتی طالبات نے سالانہ امتحانات میں شاندار کامیابی حاصل کی۔",
          "reading": "Honhaar talaba aur mehnati taalibaat ne saalaana imtehaanaat mein shaandaar kaamyaabi haasil kee. [ɦoːnɦaːr t̪ələbaː ɔːr mɛɦnət̪iː t̪aːlɪbaːt̪ neː saːlaːnəh ɪmt̪ɪhaːnaːt̪ mẽː ʃaːndaːr kaːmjaːbiː haːsɪl kiː] (hohn-HAHR tuh-luh-BAH owr muhh-nuh-TEE tah-lee-BAHT nay sah-lah-NUH eem-tuh-hah-NAHT mayn shahn-DAHR kahm-yah-BEE hah-SEEL KEE)",
          "translation": "Talented male students and hardworking female students achieved splendid success in the annual examinations."
        },
        {
          "target": "محترم والد صاحب دفتر سے گھر تشریف لائے اور انہوں نے بچوں کے لیے میٹھے پھل خریدے۔",
          "reading": "Mohtaram waalid sahab daftar se ghar tashreef laaye aur unhon ne bachchon ke liye meethe phal khareeday. [moːɦt̪ərəm ʋaːlɪd̪ saːhəb d̪əft̪ər seː ɡʱər t̪əʃriːf laːjeː ɔːr ʊnɦõː neː bətʃːõː keː lɪjeː miːtʰeː pʰəl xəriːd̪eː] (moh-tuh-RUHM vah-LEED sah-huhb duhf-TUHR say GHUHR tuhsh-REEF lah-YAY owr oon-HOHN nay buhch-CHOHN kay lee-AY mee-THAY FUHL khuh-REE-day)",
          "translation": "Respected father arrived home from the office, and he bought sweet fruits for the children."
        },
        {
          "target": "خوبصورت اور سرسبز باغات میں رنگ برنگے پھول کھلے ہیں اور ٹھنڈی ہوائیں چل رہی ہیں۔",
          "reading": "Khoobsurat aur sarsabz baaghaat mein rang-bi-range phool khilay hain aur thandi hawaaein chal rahi hain. [xuːbsuːrət̪ ɔːr sərsəbz baːɣaːt̪ mẽː rəŋɡ-bɪ-rəŋɡeː pʰuːl kʰɪleː hɛ̃ː ɔːr t̪ʰəɳɖiː ɦəʋaːẽː tʃəl rəɦiː hɛ̃ː] (khoob-SOO-ruht owr suhr-SUHBZ bah-ghah-AHT mayn ruhng-bee-ruhn-GAY PHOOL khee-LAY hyhn owr thuhn-DEE huh-vah-AYN chuhl ruh-HEE hyhn)",
          "translation": "In the beautiful and lush green gardens, colorful flowers have blossomed and cool breezes are blowing."
        }
      ],
      "mnemonics": [
        "مطابقت کلیہ: اچھا لڑکا -> اچھے لڑکے، اچھی لڑکی -> اچھی لڑکیاں، تعظیمی جمع (والد صاحب آئے)!"
      ],
      "culturalNotes": [
        "اردو زبان میں تہذیب کا تقاضا ہے کہ والدین، اساتذہ اور بزرگوں کے لیے ہمیشہ جمع کا صیغہ (جیسے: 'آپ فرماتے ہیں'، 'وہ تشریف لائے') استعمال کیا جائے، جسے تعظیمی صیغہ کہا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مؤنث جمع اسم «لڑکیاں» کے ساتھ صفت «اچھا» کی درست شکل کیا ہوگی؟",
          "options": [
            "اچھی لڑکیاں (Good girls - Feminine adjective form remains 'achhi' for both singular and plural)",
            "اچھیاں لڑکیاں (غلط تانیث جمع)",
            "اچھے لڑکیاں (مذکر جمع کی غلطی)",
            "اچھوں لڑکیاں (مغیرہ غلطی)"
          ],
          "answerIndex": 0,
          "explanation": "اردو میں مؤنث کی صفت واحد اور جمع دونوں کے ساتھ «اچھی» ہی رہتی ہے (جیسے: اچھی لڑکی، اچھی لڑکیاں)۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "کسی محترم بزرگ یا استاد کے لیے واحد ہوتے ہوئے بھی کون سا صیغہ بولنا شائستہ اور لازمی ہے؟",
          "options": [
            "تعظیمی جمع کا صیغہ (Honorific Plural - Using plural verb and pronoun 'aap/unhon' for singular elders)",
            "واحد حقارت کا صیغہ (تو/وہ)",
            "صرف اشارے کا صیغہ (یہ/وہ)",
            "مجہول صیغہ (بے نام)"
          ],
          "answerIndex": 0,
          "explanation": "بزرگوں کے احترام کے لیے واحد کے بجائے «تعظیمی جمع» (Honorific Plural) استعمال کی جاتی ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "اسم، جنس، صفت اور جمع کی کامل مطابقت (Grand Concord & Agreement) کا جامع جملہ پہچانیے:",
          "options": [
            "ہمارے محترم اساتذہ کرام تشریف لائے ہیں اور انہوں نے ہونہار طلبہ اور محنتی طالبات کو شاندار انعامات عطا کیے۔ (Our respected teachers arrived [honorific plural], and they awarded splendid prizes to talented male students and hardworking female students.)",
            "استاد آیا اور اس نے بولا کہ سب چپ بیٹھ جا۔",
            "اچھیاں لڑکے اور اچھے لڑکیاں سب مل کر شور مچاتی ہے۔",
            "تمام باغات میں پرانی کتاب کھل گئی ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہمارے محترم اساتذہ کرام تشریف لائے ہیں اور انہوں نے ہونہار طلبہ اور محنتی طالبات کو شاندار انعامات عطا کیے۔» مطابقت اور تعظیم کا مکمل اور فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
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
