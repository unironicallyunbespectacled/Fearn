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
    "title": "ضمائرِ شخصی اور درجاتِ تخاطب (Personal Pronouns & Levels of Formality)",
    "level": "A1",
    "objective": "ضمیر متکلم (میں/ہم)، ضمیر حاضر کے درجات (تو، تم، آپ) اور ضمیر غائب (یہ/وہ) کے باوقار استعمال میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں ضمائرِ شخصی (Personal Pronouns) اور درجاتِ تخاطب کے قواعد:\n\n1. **ضمیرِ متکلم (First Person)**:\n   - «میں» — واحد کے لیے؛ «ہم» — جمع کے لیے (اردو میں باوقار افراد خود کے لیے بھی اکثر 'ہم' بولتے ہیں)۔\n\n2. **ضمیرِ حاضر اور درجاتِ تخاطب (Second Person)**:\n   - **تو** — انتہائی بے تکلفی، پیار یا بارگاہِ الٰہی میں دعا و مناجات کے لیے؛\n   - **تم** — چھوٹوں، ہم عمروں اور بے تکلف دوستوں کے لیے؛\n   - **آپ** — تمام بزرگوں، اساتذہ، معزز شخصیات اور اجنبیوں کے لیے لازمی شائستہ اور تعظیمی ضمیر۔\n\n3. **ضمیرِ غائب (Third Person)**:\n   - «یہ» — قریب کی واحد و جمع کے لیے؛\n   - «وہ» — دور کی واحد و جمع کے لیے۔*",
      "examples": [
        {
          "target": "میں روزانہ صبح سویرے جامعہ جاتا ہوں اور ہم سب مل کر کتب خانے میں مطالعہ کرتے ہیں۔",
          "reading": "Main rozaana subah sawere jaamia jaata hoon aur hum sab mil kar kutub-khaane mein mutaala'a karte hain. [mɛ̃ː roːzaːnəh sʊbəh səʋeːreː dʒaːmɪʔaː dʒaːt̪aː ɦuː̃ ɔːr həm səb mɪl kər kʊt̪ʊb-xaːneː mẽː mʊt̪aːlɪʔaː kərt̪eː hɛ̃ː] (myhn roh-ZAH-nuh SOO-buh suh-VAY-ray JAH-mee-ah JAH-tah HOON owr HOOM suhb MEEL kuhr koo-toob-khah-NAY mayn moo-tah-luh-AH KUHR-tay hyhn)",
          "translation": "I go to the university early every morning, and we all study together in the library."
        },
        {
          "target": "آپ ہمارے معزز مہمان ہیں، براہِ کرم آگے تشریف لائیے اور اپنی نشست پر تشریف رکھیے۔",
          "reading": "Aap hamaare mohtaram mehmaan hain, baraah-e-karam aage tashreef laaiye aur apni nashast par tashreef rakhiye. [aːp həm-aːreː moːɦt̪ərəm mɛɦmaːn hɛ̃ː bəraːɦ-eː-kərəm aːɡeː t̪əʃriːf laːiːjeː ɔːr əpniː nɪʃəst̪ pər t̪əʃriːf rəkʰɪjeː] (AHP huh-mah-RAY moh-tuh-RUHM muhh-MAHN hyhn, buh-RAH-hay-kuh-RUHM AH-gay tuhsh-REEF lah-EE-yay owr uhp-NEE nuh-SHUHST puhr tuhsh-REEF ruh-khee-YAY)",
          "translation": "You are our honored guest, kindly come forward and take your seat."
        },
        {
          "target": "وہ ایک انتہائی لائق اور محنتی استاد ہیں جو اپنے تمام شاگردوں سے شفقت فرماتے ہیں۔",
          "reading": "Woh ek intihaai laaiq aur mehnati ustaad hain jo apne tamaam shaagirdon se shafaqat farmaate hain. [ʋoːh eːk ɪnt̪ɪhaːiː laːɪq ɔːr mɛɦnət̪iː ʊst̪aːd̪ hɛ̃ː dʒoː əpneː t̪əmaːm ʃaːɡɪrd̪õː seː ʃəfqət̪ fərmaːt̪eː hɛ̃ː] (VOH AYK een-tee-HAH-ee LAH-eeq owr muhh-nuh-TEE oos-TAHD hyhn joh uhp-NAY tuh-MAHM shah-geer-DOHN say shuh-fuh-QUHT fuhr-mah-TAY hyhn)",
          "translation": "He is an extremely capable and diligent teacher who shows kindness to all his pupils."
        }
      ],
      "mnemonics": [
        "ضمائر تخاطب: میں (متکلم)، تو (بے تکلف)، تم (ہم عمر)، آپ (باوقار تعظیم)، وہ (غائب)!"
      ],
      "culturalNotes": [
        "اردو میں کسی بھی شخص سے پہلی بار ملتے ہوئے 'تم' کہنا انتہائی غیر شائستہ مانا جاتا ہے؛ شائستہ معاشرے میں 'آپ' بولنا لازمی تہذیبی تقاضا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو زبان میں کسی معزز اجنبی، استاد یا بزرگ کو مخاطب کرنے کے لیے سب سے باوقار ضمیر کون سی ہے؟",
          "options": [
            "آپ (Aap - Highest polite honorific second-person pronoun in Urdu)",
            "تو (بے تکلفی)",
            "تم (غیر رسمی)",
            "وہ (غائب)"
          ],
          "answerIndex": 0,
          "explanation": "بزرگوں اور معززین کے لیے تعظیمی ضمیر «آپ» استعمال ہوتی ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "اپنے ذاتی وجود اور جمع کے لیے ضمیرِ متکلم کے درست جوڑے کی شناخت کیجیے:",
          "options": [
            "میں (واحد) اور ہم (جمع) (Main [singular I] and Hum [plural We] - Core first-person pronouns)",
            "تو اور تم (حاضر ضمائر)",
            "یہ اور وہ (غائب ضمائر)",
            "اپنا اور اس کا (ملکیتی)"
          ],
          "answerIndex": 0,
          "explanation": "ضمیر متکلم میں واحد «میں» اور جمع «ہم» ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ضمائر اور درجاتِ تخاطب (Personal Pronouns & Politeness) کا مکمل فصیح جملہ پہچانیے:",
          "options": [
            "میں آپ کی رہنمائی کا دل سے شکر گزار ہوں اور ہم سب مل کر آپ کے بتائے ہوئے راستے پر چلیں گے۔ (I am grateful from the heart for your guidance, and we all together will follow the path you showed.)",
            "استاد کو تو بول کر مذاق اڑانا چاہیے تاکہ وہ خوش ہو۔",
            "ضمیر غائب صرف چھپنے والے چوروں کے لیے استعمال ہوتی ہے۔",
            "ہم کا مطلب صرف اکیلی بلی ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«میں آپ کی رہنمائی کا دل سے شکر گزار ہوں اور ہم سب مل کر آپ کے بتائے ہوئے راستے پر چلیں گے۔» ضمائر کا فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u3-l2": {
    "id": "ur-u3-l2",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 2,
    "title": "حروفِ ربط (پرسرگ) اور ان کے معانی (Postpositions in Urdu)",
    "level": "A1",
    "objective": "حروفِ ربط (نے، کو، سے، میں، پر، تک، کا/کی/کے) کے نحوی وظائف اور ان کے درست مقامات کو سمجھنا۔",
    "presentation": {
      "explanation": "اردو زبان میں حروفِ ربط یا پرسرگ (Postpositions) کے بنیادی اصول:\n\n1. **پرسرگ کی جگہ**:\n   - انگریزی کے برعکس، اردو میں تمام حروف اسم یا ضمیر کے **بعد** آتے ہیں (جیسے: «گھر میں»، «میز پر»)۔\n\n2. **بنیادی حروفِ ربط اور ان کے وظائف**:\n   - **نے** — فعل ماضی متعدی میں فاعل کے ساتھ (جیسے: «احمد نے کتاب پڑھی»)؛\n   - **کو** — مفعول یا ہدف کو ظاہر کرنے کے لیے (جیسے: «بچے کو دودھ دو»)؛\n   - **سے** — ذریعہ، آغاز یا دوری (جیسے: «قلم سے لکھو»، «شہر سے آیا»)؛\n   - **میں / پر / تک** — ظرفِ مکان و زمان (جیسے: «کمرے میں»، «چھت پر»، «شام تک»)؛\n   - **کا / کی / کے** — باہمی ملکیت و اضافت (جیسے: «علی کا بھائی»، «علی کی گاڑی»، «علی کے دوست»)۔*",
      "examples": [
        {
          "target": "احمد نے اپنے دوست کو ڈاکخانے سے ایک اہم اور ضروری خط روانہ کیا۔",
          "reading": "Ahmad ne apne dost ko daak-khaane se ek aham aur zaroori khatt rawaana kiya. [əɦməd̪ neː əpneː d̪oːst̪ koː ɖaːk-xaːneː seː eːk əɦəm ɔːr zəruːriː xət̪ː rəʋaːnəh kɪjaː] (UH-muhd nay uhp-NAY DOHST koh DAHK-khah-NAY say AYK UH-huhm owr zuh-ROO-ree KHUHTT ruh-VAH-nuh kee-YAH)",
          "translation": "Ahmad dispatched an important and urgent letter to his friend from the post office."
        },
        {
          "target": "کتابیں میز پر رکھی ہیں اور قلم کاپی کے اندر موجود ہے۔",
          "reading": "Kitaabein mez par rakhi hain aur qalam kaapi ke andar maujood hai. [kɪt̪aːbẽː meːz pər rəkʰiː hɛ̃ː ɔːr qələm kaːpiː keː ənd̪ər mɔːdʒuːd̪ hɛː] (kee-tah-BAYN MAYZ puhr ruh-KHEE hyhn owr QUH-luhm kah-PEE kay uhn-DUHR mow-JOOD hy)",
          "translation": "The books are kept on the table, and the pen is present inside the notebook."
        },
        {
          "target": "ہم صبح آٹھ بجے سے شام پانچ بجے تک اپنے دفتر میں مصروف رہتے ہیں۔",
          "reading": "Hum subah aath baje se shaam paanch baje tak apne daftar mein masroof rahte hain. [həm sʊbəh aːʈʰ bədʒeː seː ʃaːm paːntʃ bədʒeː t̪ək əpneː d̪əft̪ər mẽː məsruːf rəɦt̪eː hɛ̃ː] (HOOM SOO-buh AHTH buh-JAY say SHAHM PAHNCH buh-JAY tuhk uhp-NAY duhf-TUHR mayn muhs-ROOF ruhh-TAY hyhn)",
          "translation": "We remain busy in our office from eight o'clock in the morning until five o'clock in the evening."
        }
      ],
      "mnemonics": [
        "حروف ربط: نے (فاعل)، کو (مفعول)، سے (ذریعہ/دوری)، میں/پر (مقام)، کا/کی/کے (ملکیت)!"
      ],
      "culturalNotes": [
        "اردو نحو میں فاعل کے ساتھ 'نے' کا استعمال صرف ماضی متعدی افعال میں ہوتا ہے؛ حال اور مستقبل میں 'نے' نہیں آتا (جیسے: 'وہ خط لکھتا ہے'، 'وہ خط لکھے گا')۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "اردو جملے «احمد ... خط لکھا» میں فاعل کے بعد کون سا حرفِ ربط آئے گا؟",
          "options": [
            "نے (Ne - Ergative postposition marking subject in transitive past tense)",
            "کو (مفعولی علامت)",
            "سے (ذریعہ علامت)",
            "پر (ظرفی علامت)"
          ],
          "answerIndex": 0,
          "explanation": "ماضی متعدی میں فاعل کے ساتھ «نے» کا استعمال ہوتا ہے: «احمد نے خط لکھا»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "کسی مقام کے اندر موجودگی ظاہر کرنے کے لیے کون سا پرسرگ استعمال ہوتا ہے؟",
          "options": [
            "میں (In / Inside - Locative postposition expressing containment or location within)",
            "سے (دوری)",
            "کو (ہدف)",
            "تک (انتہا)"
          ],
          "answerIndex": 0,
          "explanation": "اندرونی مقام کے لیے «میں» بولا جاتا ہے (جیسے: کمرے میں، دل میں)۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "حروفِ ربط (Postpositions) کے درست استعمال کا مکمل جملہ پہچانیے:",
          "options": [
            "استاد نے طالب علم کو کتاب سے ایک دلچسپ کہانی پڑھ کر سنائی۔ (The teacher read out an interesting story from the book to the student.)",
            "طالب علم نے استاد سے کو کتاب میں پھینک دیا۔",
            "پر کا مطلب صرف چڑیا کے پر ہوتے ہیں اور کوئی معنی نہیں۔",
            "نے کو جملے کے شروع میں بغیر اسم کے لگانا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«استاد نے طالب علم کو کتاب سے ایک دلچسپ کہانی پڑھ کر سنائی۔» حروفِ ربط کا بالکل درست اور مربوط جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u3-l3": {
    "id": "ur-u3-l3",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 3,
    "title": "اسماء کی حالتِ مغیرہ / حالتِ مفعولی (Oblique Case of Nouns)",
    "level": "A1",
    "objective": "حرفِ ربط آنے پر الف/ہ والے مذکر اسماء کا ے میں بدلنا (لڑکے نے) اور جمع میں وں کا لاحقہ (کتابوں میں، لڑکوں کو) سمجھنا۔",
    "presentation": {
      "explanation": "اردو اسماء کی حالتِ مغیرہ (Oblique Case) کے اہم قواعد:\n\n1. **حالتِ مغیرہ کی تعریف**:\n   - جب کسی اسم کے بعد کوئی حرفِ ربط (نے، کو، سے، میں، پر، کا، تک وغیرہ) آئے تو اسم فاعلی حالت سے بدل کر حالتِ مغیرہ میں چلا جاتا ہے۔\n\n2. **مذکر الف/ہ والے اسماء (الف/ہ -> ے)**:\n   - «لڑکا» -> «لڑکے نے کہا»؛ «کمرہ» -> «کمرے میں اندھیرا ہے»؛ «راستہ» -> «راستے پر چلو»؛\n   - بغیر الف/ہ والے مذکر واحد نہیں بدلتے (جیسے: «درخت پر»، «گھر میں»، «شہر سے»)۔\n\n3. **جمع اسماء کی حالتِ مغیرہ (-> وں / -on)**:\n   - تمام مذکر اور مؤنث جمع اسماء کے بعد جب کوئی پرسرگ آئے تو آخر میں 'وں' لگایا جاتا ہے:\n     - لڑکے -> «**لڑکوں نے**»؛ لڑکیاں -> «**لڑکیوں کو**»؛ کتابیں -> «**کتابوں میں**»؛ درخت -> «**درختوں پر**»۔*",
      "examples": [
        {
          "target": "استاد نے کمرے میں موجود تمام محنتی لڑکوں اور بچیوں کو انعامات دیے۔",
          "reading": "Ustaad ne kamre mein maujood tamaam mehnati ladkon aur bachchiyon ko inaamaat diye. [ʊst̪aːd̪ neː kəmreː mẽː mɔːdʒuːd̪ t̪əmaːm mɛɦnət̪iː ləɽkõː ɔːr bətʃːɪjõː koː ɪnaːmaːt̪ d̪ɪjeː] (oos-TAHD nay kuhm-RAY mayn mow-JOOD tuh-MAHM muhh-nuh-TEE luhd-KOHN owr buhch-chee-YOHN koh ee-nah-MAHT dee-YAY)",
          "translation": "The teacher gave prizes to all the hardworking boys and girls present in the room."
        },
        {
          "target": "پرانی کتابوں کے اوراق پر نایاب تاریخی تصاویر چھپی ہوئی ہیں۔",
          "reading": "Puraani kitaabon ke auraaq par naayaab taareekhi tasaaweer chhapi hui hain. [pʊraːniː kɪt̪aːbõː keː ɔːraːq pər naːjaːb t̪aːriːxiː t̪əsaːʋiːr tʃʰəpiː ɦʊiː hɛ̃ː] (poo-RAH-nee kee-tah-BOHN kay ow-RAHQ puhr nah-YAHB tah-REE-khee tuh-sah-VEER chhuh-PEE hoo-EE hyhn)",
          "translation": "Rare historical photographs are printed upon the pages of old books."
        },
        {
          "target": "اس پُرانے درخت کی شاخوں پر پرندوں نے اپنے خوبصورت گھونسلے بنا رکھے ہیں۔",
          "reading": "Is puraane darakht ki shaakhon par parindon ne apne khoobsurat ghaunsle bana rakhay hain. [ɪs pʊraːneː d̪ərəxt̪ kiː ʃaːxõː pər pərɪnd̪õː neː əpneː xuːbsuːrət̪ ɡʱoː̃sleː bənaː rəkʰeː hɛ̃ː] (EES poo-rah-NAY duh-RUHKHT kee shah-KHOHN puhr puh-reen-DOHN nay uhp-NAY khoob-SOO-ruht ghown-SLAY buh-NAH ruh-KHAY hyhn)",
          "translation": "Upon the branches of this old tree, birds have built their beautiful nests."
        }
      ],
      "mnemonics": [
        "حالت مغیرہ: کمرہ + میں -> کمرے میں، لڑکے + نے -> لڑکوں نے، کتابیں + میں -> کتابوں میں!"
      ],
      "culturalNotes": [
        "حالتِ مغیرہ اردو اور ہندی کی سب سے بنیادی نحوی خصوصیت ہے؛ 'لڑکا نے کہا' بولنا صریح غلطی ہے، درست جملہ ہمیشہ 'لڑکے نے کہا' ہوگا۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جب لفظ «کمرہ» کے بعد حرفِ ربط «میں» آئے تو اسم کی کون سی شکل درست ہوگی؟",
          "options": [
            "کمرے میں (Kamre mein - Correct oblique singular form ending in -e)",
            "کمرہ میں (غیر مغیرہ فاش غلطی)",
            "کمروں میں (جمع مغیرہ)",
            "کمریاں میں (غلط ساخت)"
          ],
          "answerIndex": 0,
          "explanation": "الف/ہ والے مذکر اسم کے بعد پرسرگ آنے پر وہ 'ے' میں بدلتا ہے: «کمرے میں»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "جمع اسم «لڑکیاں» کے بعد حرفِ ربط «کو» لگانے پر کیا صورت بنے گی؟",
          "options": [
            "لڑکیوں کو (Ladkiyon ko - Oblique plural form ending in -on with postposition)",
            "لڑکیاں کو (غیر مغیرہ غلطی)",
            "لڑکے کو (واحد مذکر)",
            "لڑکوں کو (مذکر جمع)"
          ],
          "answerIndex": 0,
          "explanation": "مؤنث جمع اسم کے بعد پرسرگ آنے پر وہ «لڑکیوں کو» بن جاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "اسماء کی حالتِ مغیرہ (Oblique Noun Case) کا مکمل معیاری جملہ پہچانیے:",
          "options": [
            "باغ کے گھنے درختوں کی چھاؤں میں بیٹھ کر بچوں نے میٹھے پھلوں کا لطف اٹھایا۔ (Sitting in the shade of the dense trees [darakhton] of the garden, the children [bachchon] enjoyed the sweet fruits [phalon].)",
            "باغ کا درختیں میں بیٹھ کر بچہ نے پھلیں کھایا۔",
            "حالت مغیرہ صرف نیند میں بولنے والے جملوں کو کہتے ہیں۔",
            "کتابوں کو کے بعد ہمیشہ تالا لگانا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«باغ کے گھنے درختوں کی چھاؤں میں بیٹھ کر بچوں نے میٹھے پھلوں کا لطف اٹھایا۔» حالتِ مغیرہ کے تمام قواعد پر پورا اترتا ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u3-l4": {
    "id": "ur-u3-l4",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 4,
    "title": "ضمائر کی حالتِ مغیرہ اور ترکیبی اشکال (Oblique Pronouns & Dative Forms)",
    "level": "A1",
    "objective": "ضمائر کی حالت مغیرہ (مجھ، تجھ، اس، ان) اور مفعولی مختصر اشکال (مجھے، تجھے، اسے، انہیں، ہمیں) میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو ضمائر کی حالتِ مغیرہ اور مفعولی ترکیبی اشکال:\n\n1. **ضمائر کی حالتِ مغیرہ (Oblique Pronouns)**:\n   - **میں** + پرسرگ -> **مجھ** (جیسے: «مجھ سے»، «مجھ پر»، «مجھ میں»)؛\n   - **تو** + پرسرگ -> **تجھ** (جیسے: «تجھ سے»، «تجھ پر»)؛\n   - **یہ / وہ (واحد)** + پرسرگ -> **اس** (جیسے: «اس نے»، «اس سے»، «اس پر»)؛\n   - **یہ / وہ (جمع)** + پرسرگ -> **ان** یا **انہوں** (جیسے: «انہوں نے»، «ان سے»، «ان پر»)۔\n\n2. **مفعولی مختصر اشکال (Dative / Accusative Forms)**:\n   - مجھ کو = **مجھے**؛ تجھ کو = **تجھے**؛\n   - اس کو = **اسے**؛ ان کو = **انہیں / ان کو**؛\n   - ہم کو = **ہمیں**؛ آپ کو = **آپ کو**۔*",
      "examples": [
        {
          "target": "انہوں نے مجھے اپنی نجی لائبریری سے چند نایاب کتابیں مطالعے کے لیے عنایت کیں۔",
          "reading": "Unhon ne mujhe apni niji library se chand naayaab kitaabein mutaala'ay ke liye inaayat keen. [ʊnɦõː neː mʊdʒʱeː əpniː nɪdʒiː laːɪbreːriː seː tʃənd̪ naːjaːb kɪt̪aːbẽː mʊt̪aːlɪʔeː keː lɪjeː ɪnaːjət̪ kĩː] (oon-HOHN nay moo-JHAY uhp-NEE nee-JEE library say CHUHD nah-YAHB kee-tah-BAYN moo-tah-luh-AY kay lee-AY ee-nah-YUHT KEEN)",
          "translation": "They gifted me a few rare books from their private library for study."
        },
        {
          "target": "اگر آپ کو کوئی دشواری پیش آئے تو فوراً مجھ سے بلا جھجھک رابطہ فرمائیے گا۔",
          "reading": "Agar aap ko koi dushwaari pesh aaye to fauran mujh se bila-jheejhak raabita farmaaiye ga. [əɡər aːp koː koːiː d̪ʊʃʋaːriː peːʃ aːjeː t̪oː fɔːrən mʊdʒʱ seː bɪlaː-dʒʱiːdʒʱək raːbɪt̪aː fərmaːiːjeː ɡaː] (uh-GUHR AHP koh koh-EE doosh-vah-REE PAYSH ah-YAY toh FOW-ruhn MOO-JH say bee-lah-jhee-JUHK rah-bee-TAH fuhr-mah-EE-yay GAH)",
          "translation": "If you encounter any difficulty, please contact me immediately without hesitation."
        },
        {
          "target": "استاد محترم نے اسے شاباش دی اور انہیں محنت جاری رکھنے کی تلقین کی۔",
          "reading": "Ustaad-e-mohtaram ne use shaabaash dee aur unhein mehnat jaari rakhne ki talqeen kee. [ʊst̪aːd̪-eː-moːɦt̪ərəm neː ʊseː ʃaːbaːʃ d̪iː ɔːr ʊnɦẽː mɛɦnət̪ dʒaːriː rəkʰneː kiː t̪əlqiːn kiː] (oos-TAHD-ay-moh-tuh-RUHM nay oo-SAY shah-BAHSH DEE owr oon-HAYN muhh-NUHT jah-REE ruhkh-NAY kee tuhl-QEEN KEE)",
          "translation": "The respected teacher praised him and exhorted them to continue working hard."
        }
      ],
      "mnemonics": [
        "مفعولی ضمائر: مجھ کو = مجھے، اس کو = اسے، ان کو = انہیں، ہم کو = ہمیں!"
      ],
      "culturalNotes": [
        "اردو گفتگو میں 'مجھ کو' کے مقابلے میں 'مجھے' اور 'اس کو' کے مقابلے میں 'اسے' بولنا زیادہ فصیح، سبک اور رواں سمجھا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ضمیر «میں» کے ساتھ جب حرفِ ربط «سے» ملایا جائے تو درست مغیرہ شکل کیا ہوگی؟",
          "options": [
            "مجھ سے (Mujh se - Correct oblique first-person pronoun with postposition)",
            "میں سے (فاش نحوی غلطی)",
            "مرا سے (غلط شکل)",
            "ہم سے کو (بے معنی)"
          ],
          "answerIndex": 0,
          "explanation": "«میں» کی حالتِ مغیرہ «مجھ» ہے، لہٰذا درست ترکیب «مجھ سے» ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ترکیب «اس کو» کی فصیح مختصر شکل کیا ہے؟",
          "options": [
            "اسے (Use - Contracted dative/accusative third-person pronoun)",
            "اسیں (غلط لاحقہ)",
            "اسوں (بے معنی)",
            "اسکا (ملکیتی)"
          ],
          "answerIndex": 0,
          "explanation": "«اس کو» کی فصیح مختصر شکل «اسے» ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ضمائر کی حالتِ مغیرہ اور مفعولی اشکال (Oblique Pronouns) کا فصیح جملہ پہچانیے:",
          "options": [
            "انہوں نے مجھے اپنا قیمتی قلم دیا اور میں نے اسے شکریے کے ساتھ سنبھال کر رکھ لیا۔ (They gave me [mujhe] their valuable pen, and I kept it [use] safely with gratitude.)",
            "میں نے اس کو کو بولا کہ تم میں سے بھاگ جا۔",
            "انہیں کا مطلب صرف گھوڑے کی لگام ہوتا ہے۔",
            "مجھ سے کے بجائے ہمیشہ 'میں سے' کہنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«انہوں نے مجھے اپنا قیمتی قلم دیا اور میں نے اسے شکریے کے ساتھ سنبھال کر رکھ لیا۔» ضمائر کی مفعولی اشکال کا درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u3-l5": {
    "id": "ur-u3-l5",
    "subject": "urdu",
    "unit": 3,
    "lessonNumber": 5,
    "title": "ملکیتی ضمائر اور ضمیرِ مشترک 'اپنا' (Possessive Pronouns & Reflexive 'Apna')",
    "level": "A1",
    "objective": "ملکیتی ضمائر (میرا، تمہارا، آپ کا، اس کا) اور ضمیرِ مشترک «اپنا/اپنی/اپنے» کے لازمی اصولِ استعمال میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو ملکیتی ضمائر اور ضمیرِ مشترک «اپنا» کا سنہری اصول:\n\n1. **ملکیتی ضمائر (Possessive Pronouns)**:\n   - **میرا / میری / میرے** — مائی؛\n   - **ہمارا / ہماری / ہمارے** — آور؛\n   - **تمہارا / تمہاری / تمہارے** — یوور (عام)؛\n   - **آپ کا / آپ کی / آپ کے** — یوور (تعظیمی)؛\n   - **اس کا / اس کی / اس کے** — ہز / ہر (غیر فاعل کی ملکیت)۔\n\n2. **ضمیرِ مشترک «اپنا / اپنی / اپنے» کا سنہری قاعدہ**:\n   - جب جملے کے فاعل کی اپنی ہی ملکیت یا شے کا ذکر ہو تو «اس کا / میرا» کے بجائے لازماً «**اپنا / اپنی / اپنے**» استعمال ہوتا ہے:\n     - «احمد **اپنے** گھر گیا» (اگر 'احمد اس کے گھر گیا' کہیں گے تو اس کا مطلب کسی دوسرے شخص کا گھر ہوگا)؛\n     - «میں **اپنا** کام کرتا ہوں»؛ «وہ **اپنی** کتاب پڑھتی ہے»۔*",
      "examples": [
        {
          "target": "ہر محبِ وطن شہری اپنے پیارے ملک کی ترقی اور خوشحالی کے لیے دن رات محنت کرتا ہے۔",
          "reading": "Har muhibb-e-watan shehri apne pyaare mulk ki taraqqi aur khushhaali ke liye din raat mehnat karta hai. [hər mʊhɪbː-eː-ʋət̪ən ʃəɦriː əpneː pjaːreː mʊlk kiː t̪ərəqːiː ɔːr xʊʃhaːliː keː lɪjeː d̪ɪn raːt̪ mɛɦnət̪ kərt̪aː hɛː] (HUHR moo-HEEB-bay-vuh-TUHN shuh-REE uhp-NAY pyah-RAY MOOLK kee tuh-ruhq-QEE owr khoosh-hah-LEE kay lee-AY DEEN RAHT muhh-NUHT KUHR-tah hy)",
          "translation": "Every patriotic citizen works day and night for the progress and prosperity of his beloved country."
        },
        {
          "target": "میں نے اپنا تمام ضروری کام وقت پر مکمل کر لیا اور اپنی کتابیں سنبھال کر رکھ دیں۔",
          "reading": "Main ne apna tamaam zaroori kaam waqt par mukammal kar liya aur apni kitaabein sambhaal kar rakh deen. [mɛ̃ː neː əpnaː t̪əmaːm zəruːriː kaːm ʋəqt̪ pər mʊkəmːəl kər lɪjaː ɔːr əpniː kɪt̪aːbẽː səmbaːl kər rəkʰ d̪ĩː] (myhn nay uhp-NAH tuh-MAHM zuh-ROO-ree KAHM VUHKT puhr moo-kuhm-MUHL kuhr LEE-yah owr uhp-NEE kee-tah-BAYN suhm-BHAHL kuhr ruhkh DEEN)",
          "translation": "I completed all my necessary work on time and put my books safely away."
        },
        {
          "target": "طلبہ اپنے محترم اساتذہ کی رہنمائی میں اپنے تعلیمی منصوبے تیار کر رہے ہیں۔",
          "reading": "Talaba apne mohtaram asaatiza ki rahnumaai mein apne taleemi mansoobay tayyaar kar rahe hain. [t̪ələbaː əpneː moːɦt̪ərəm əsaːt̪ɪzaː kiː rəɦnʊmaːiː mẽː əpneː t̪əʔliːmiː mənsuːbeː t̪əjːaːr kər rəɦeː hɛ̃ː] (tuh-luh-BAH uhp-NAY moh-tuh-RUHM uh-sah-tee-ZAH kee ruhh-noo-mah-EE mayn uhp-NAY tuh-lee-MEE muhn-SOO-bay ty-YAHR kuhr ruh-HAY hyhn)",
          "translation": "Students are preparing their educational projects under the guidance of their respected teachers."
        }
      ],
      "mnemonics": [
        "ضمیر مشترک: فاعل کی اپنی چیز = اپنا/اپنی/اپنے (احمد اپنے گھر گیا، نہ کہ اس کے گھر)!"
      ],
      "culturalNotes": [
        "اردو ادب اور فصیح زبان میں 'اپنا' کا غلط استعمال تحریر کا حسن برباد کر دیتا ہے؛ 'وہ اس کا کام کر رہا ہے' کا مطلب ہے کہ وہ کسی دوسرے کا کام کر رہا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جملے «عائشہ نے ... گاڑی صاف کی» میں جب عائشہ اپنی ہی گاڑی صاف کر رہی ہو تو کون سا لفظ آئے گا؟",
          "options": [
            "اپنی (Apni - Reflexive possessive pronoun matching subject Aisha and feminine noun gaadi)",
            "اس کی (کسی دوسری عورت کی)",
            "تمہاری (دوسرے کی)",
            "ان کی (جمع غیر کی)"
          ],
          "answerIndex": 0,
          "explanation": "فاعل کی اپنی ملکیت کے لیے ضمیرِ مشترک «اپنی» آئے گی: «عائشہ نے اپنی گاڑی صاف کی»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مذکر واحد اسم «گھر» کے ساتھ فاعل 'میں' کے لیے ضمیرِ مشترک کیا ہوگی؟",
          "options": [
            "اپنا گھر (My own house - Reflexive pronoun 'apna' matching masculine singular noun)",
            "میری گھر (تانیث کی غلطی)",
            "اپنے گھر (جمع صیغہ)",
            "اس کا گھر (دوسرے کا گھر)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر واحد اسم کے ساتھ ضمیرِ مشترک «اپنا» (جیسے: اپنا گھر) ہوگی۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ملکیتی اور مشترک ضمائر (Possessive & Reflexive Pronouns) کا کامل فصیح جملہ پہچانیے:",
          "options": [
            "ہر انسان کو اپنے فرائض دیانتداری سے ادا کرنے چاہئیں تاکہ ہمارا معاشرہ امن اور خوشحالی کا گہوارہ بن سکے۔ (Every person ought to discharge their own [apne] duties honestly so that our [hamaara] society may become a cradle of peace and prosperity.)",
            "احمد اس کا کتاب پڑھتا ہے جب وہ خود کی پڑھائی کرتا ہے۔",
            "اپنا کا مطلب صرف بازار سے خریدا ہوا سیب ہوتا ہے۔",
            "تمام لوگ تمہارا گھر چلے گئے اپنے گھر کے بجائے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہر انسان کو اپنے فرائض دیانتداری سے ادا کرنے چاہئیں تاکہ ہمارا معاشرہ امن اور خوشحالی کا گہوارہ بن سکے۔» ملکیتی اور مشترک ضمائر کا بالکل درست استعمال ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u4-l1": {
    "id": "ur-u4-l1",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 1,
    "title": "فعل حال مطلق کی ساخت اور گردان (Present Habitual Morphology)",
    "level": "A1",
    "objective": "فعل حال مطلق کے اوزان (تا ہے، تی ہے، تے ہیں، تیں ہیں)، مادہ فعل کے ساتھ الحاق اور فاعل کے مطابق گردان میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل حال مطلق (Present Habitual Tense) کی ساخت اور گردان:\n\n1. **فعل حال مطلق کا مفہوم**:\n   - یہ فعل روزمرہ عادات، معمولات اور آفاقی حقائق کو بیان کرنے کے لیے مستعمل ہے۔\n\n2. **فعل کی عمومی ساخت**:\n   - **مادہ فعل (Verb Stem)** + **تا / تی / تے / تیں** + **ہونا کا صیغہ (ہوں / ہے / ہو / ہیں)**:\n     - مذکر واحد: «میں لکھتا ہوں»، «وہ پڑھتا ہے»؛\n     - مذکر جمع / تعظیمی: «ہم لکھتے ہیں»، «آپ پڑھتے ہیں»، «وہ پڑھتے ہیں»؛\n     - مؤنث واحد: «میں لکھتی ہوں»، «وہ پڑھتی ہے»؛\n     - مؤنث جمع: «ہم لکھتی ہیں»، «وہ پڑھتی ہیں»۔*",
      "examples": [
        {
          "target": "سورج ہمیشہ مشرق سے طلوع ہوتا ہے اور شام کو مغرب میں غروب ہوتا ہے۔",
          "reading": "Sooraj hamesha mashriq se tuloo hota hai aur shaam ko maghrib mein ghuroob hota hai. [suːrədʒ həm-eːʃaː məʃrɪq seː t̪ʊluːʔ hoːt̪aː hɛː ɔːr ʃaːm koː məɣrɪb mẽː ɣʊruːb hoːt̪aː hɛː] (SOO-ruhj huh-MAY-shah muhsh-REEK say too-LOO hoh-TAH hy owr SHAHM koh muhgh-REEB mayn ghoo-ROOB hoh-TAH hy)",
          "translation": "The sun always rises in the east and sets in the west in the evening."
        },
        {
          "target": "میں روزانہ علی الصبح بیدار ہوتا ہوں اور باقاعدگی سے تلاوت اور ورزش کرتا ہوں۔",
          "reading": "Main rozaana ala-as-subah bedaar hota hoon aur baaqaaidgi se tilaawat aur warzish karta hoon. [mɛ̃ː roːzaːnəh ʔələsːʊbəh beːd̪aːr hoːt̪aː ɦuː̃ ɔːr baː-qaːʔɪd̪ɡiː seː t̪ɪlaːʋət̪ ɔːr ʋərzɪʃ kərt̪aː ɦuː̃] (myhn roh-ZAH-nuh uh-luhs-SOO-buh bay-DAHR hoh-TAH HOON owr bah-qah-eed-GEE say tee-LAH-vuht owr vuhr-ZEESH kuhr-TAH HOON)",
          "translation": "I wake up early in the morning every day and regularly perform recitation and exercise."
        },
        {
          "target": "وہ باصلاحیت ادیب روزانہ اخبار کے لیے پرمغز اور فصیح کالم لکھتے ہیں۔",
          "reading": "Woh baa-salaahiyat adeeb rozaana akhbaar ke liye pur-maghz aur faseeh column likhte hain. [ʋoːh baː-səlaːhɪjət̪ əd̪iːb roːzaːnəh əxbaːr keː lɪjeː pʊr-məɣz ɔːr fəsiːh kɔːləm lɪkʰt̪eː hɛ̃ː] (VOH bah-suh-lah-HEE-yuht uh-DEEB roh-ZAH-nuh uhkh-BAHR kay lee-AY poor-MUHGHZ owr fuh-SEEH column leekh-TAY hyhn)",
          "translation": "That talented writer writes insightful and eloquent columns daily for the newspaper."
        }
      ],
      "mnemonics": [
        "حال مطلق کا کلیہ: مادہ فعل + تا/تی/تے + ہے/ہیں (لکھتا ہے، پڑھتی ہے، جاتے ہیں)!"
      ],
      "culturalNotes": [
        "اردو میں حال مطلق آفاقی سچائی اور ضرب الامثال میں بکثرت استعمال ہوتا ہے، جیسے: 'محنت کا پھل ہمیشہ میٹھا ہوتا ہے'۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مذکر واحد فاعل «احمد» کے ساتھ فعل «پڑھنا» کا حال مطلق کیا ہوگا؟",
          "options": [
            "پڑھتا ہے (Parhta hai - Masculine singular habitual present tense)",
            "پڑھتی ہے (تانیث صیغہ)",
            "پڑھتے ہیں (جمع صیغہ)",
            "پڑھتا تھا (ماضی صیغہ)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر واحد کے ساتھ فعل حال مطلق «پڑھتا ہے» بنتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مؤنث واحد فاعل «عائشہ» کے ساتھ فعل «لکھنا» کا درست صیغہ کیا ہے؟",
          "options": [
            "لکھتی ہے (Likhti hai - Feminine singular habitual present tense)",
            "لکھتا ہے (مذکر صیغہ)",
            "لکھتے ہیں (جمع صیغہ)",
            "لکھتیں ہیں (غیر فصیح)"
          ],
          "answerIndex": 0,
          "explanation": "مؤنث واحد کے ساتھ «لکھتی ہے» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل حال مطلق کی درست گردان (Present Habitual Morphology) کا مکمل جملہ پہچانیے:",
          "options": [
            "باغبان روزانہ صبح پودوں کو پانی دیتا ہے اور مالی خوبصورت پھول چنتا ہے۔ (The gardener waters the plants every morning [paani deta hai] and plucks beautiful flowers.)",
            "باغبان پودوں کو پانی دیتیں ہیں اور مالی پھول کھاتی ہے۔",
            "حال مطلق کا مطلب صرف سال میں ایک بار ہنسنا ہوتا ہے۔",
            "سورج مغرب سے نکلتا ہے اور رات کو دوپہر ہوتی ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«باغبان روزانہ صبح پودوں کو پانی دیتا ہے اور مالی خوبصورت پھول چنتا ہے۔» حال مطلق کی درست اور فصیح گردان ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u4-l2": {
    "id": "ur-u4-l2",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 2,
    "title": "روزمرہ معمولات اور فاعل کے مطابق تانیث و تذکیر (Daily Routines & Gender Agreement)",
    "level": "A1",
    "objective": "معمولاتِ زندگی (جاگنا، کھانا، جانا، پڑھنا) میں مذکر و مؤنث فاعل کے مطابق فعل کی کامل مطابقت قائم کرنا۔",
    "presentation": {
      "explanation": "روزمرہ معمولات اور فاعل کے مطابق تذکیر و تانیث کی مطابقت:\n\n1. **مذکر فاعل کے معمولات**:\n   - «لڑکا صبح سویرے جاگتا ہے، ناشتہ کرتا ہے اور پھر سکول جاتا ہے۔»\n\n2. **مؤنث فاعل کے معمولات**:\n   - «لڑکی صبح جلدی اٹھتی ہے، کتب بینی کرتی ہے اور اپنی والدہ کا ہاتھ بٹاتی ہے۔»\n\n3. **تعظیمی و جمع فاعل کے معمولات**:\n   - «محترم والد صاحب دفتر جاتے ہیں اور والدہ محترمہ مزیدار کھانا تیار کرتی ہیں۔»*",
      "examples": [
        {
          "target": "طالب علم صبح وقت پر بیدار ہوتا ہے اور تیاری کے بعد بس پر سوار ہو کر سکول جاتا ہے۔",
          "reading": "Taalib-e-ilm subah waqt par bedaar hota hai aur tayyaari ke baad bus par sawaar ho kar school jaata hai. [t̪aːlɪb-eː-ɪlm sʊbəh ʋəqt̪ pər beːd̪aːr hoːt̪aː hɛː ɔːr t̪əjːaːriː keː baːd̪ bəs pər səʋaːr hoː kər skuːl dʒaːt̪aː hɛː] (tah-LEEB-ay-EELM SOO-buh VUHKT puhr bay-DAHR hoh-TAH hy owr ty-yah-REE kay BAHD buhs puhr suh-VAHR hoh kuhr school JAH-tah hy)",
          "translation": "The male student wakes up on time in the morning, and after getting ready, boards the bus and goes to school."
        },
        {
          "target": "شائستہ بچی شام کے وقت اپنی بہن کے ساتھ لائبریری جاتی ہے اور وہاں کتب بینی کرتی ہے۔",
          "reading": "Shaayista bachchi shaam ke waqt apni bahan ke saath library jaati hai aur wahaan kutub-beeni karti hai. [ʃaːjɪst̪əh bətʃːiː ʃaːm keː ʋəqt̪ əpniː bəhən keː saːt̪ʰ laːɪbreːriː dʒaːt̪iː hɛː ɔːr ʋəhaː̃ kʊt̪ʊb-biːniː kərt̪iː hɛː] (shah-yees-TAH buhch-CHEE SHAHM kay VUHKT uhp-NEE buh-HUHN kay sahth library JAH-tee hy owr vuh-HAHN koo-toob-bee-NEE kuhr-TEE hy)",
          "translation": "The well-mannered young girl goes to the library in the evening with her sister and reads books there."
        },
        {
          "target": "میرے محترم دادا جان صبح کی سیر کے بعد لان میں بیٹھ کر تازہ اخبار پڑھتے ہیں۔",
          "reading": "Mere mohtaram daada jaan subah ki sair ke baad lawn mein baith kar taaza akhbaar parhte hain. [meːreː moːɦt̪ərəm d̪aːd̪aː dʒaːn sʊbəh kiː sɛːr keː baːd̪ lɔːn mẽː bɛːʈʰ kər t̪aːzəh əxbaːr pəɽʱt̪eː hɛ̃ː] (MAY-ray moh-tuh-RUHM dah-DAH JAHN SOO-buh kee SYR kay BAHD lawn mayn BYTH kuhr tah-ZUH uhkh-BAHR puhrh-TAY hyhn)",
          "translation": "My respected grandfather sits in the lawn after his morning walk and reads the fresh newspaper."
        }
      ],
      "mnemonics": [
        "معمولات کا سنہری ربط: مذکر (جاتا ہے)، مؤنث (جاتی ہے)، جمع/تعظیم (جاتے ہیں)!"
      ],
      "culturalNotes": [
        "برصغیر کے خاندانی کلچر میں بزرگوں کے صبح کے معمولات (چائے پینا، اخبار پڑھنا، پودوں کی دیکھ بھال) کو احترام اور محبت سے دیکھا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جملے «میری بہن روزانہ شام کو کتاب ...» میں درست فعل کیا آئے گا؟",
          "options": [
            "پڑھتی ہے (Parhti hai - Correct feminine singular verb matching sister)",
            "پڑھتا ہے (مذکر صیغہ)",
            "پڑھتے ہیں (مذکر جمع)",
            "پڑھا تھا (ماضی)"
          ],
          "answerIndex": 0,
          "explanation": "فاعل 'بہن' مؤنث واحد ہے، اس لیے فعل «پڑھتی ہے» آئے گا۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "تعظیمی فاعل «والد صاحب» کے ساتھ معمول کے فعل کی درست شکل کیا ہوگی؟",
          "options": [
            "تشریف لاتے ہیں (Tashreef laate hain - Respectful plural agreement for singular father)",
            "تشریف لاتا ہے (غیر مؤدب)",
            "تشریف لاتی ہے (تانیث کی غلطی)",
            "تشریف لائی تھی (ماضی)"
          ],
          "answerIndex": 0,
          "explanation": "والد صاحب کے لیے تعظیمی جمع «تشریف لاتے ہیں» بولا جاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "معمولات اور جنس کی مطابقت (Daily Routines & Agreement) کا فصیح جملہ پہچانیے:",
          "options": [
            "محنتی استاد وقت پر کلاس میں آتے ہیں اور تمام طلبہ دل لگا کر اپنا سبق پڑھتے ہیں۔ (The hardworking teacher arrives on time in class, and all students study their lesson attentively.)",
            "استاد کلاس میں آتی ہے اور سب لڑکے بھاگتا ہے۔",
            "روزمرہ معمول کا مطلب صرف جھوٹ بول کر سونا ہے۔",
            "گاڑی پانی پیتی ہے اور انسان پٹرول کھاتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«محنتی استاد وقت پر کلاس میں آتے ہیں اور تمام طلبہ دل لگا کر اپنا سبق پڑھتے ہیں۔» مطابقت کا مکمل اور درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u4-l3": {
    "id": "ur-u4-l3",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 3,
    "title": "فعل حال مطلق میں نفی کی ساخت (Negative Sentences in Present Habitual)",
    "level": "A1",
    "objective": "حال مطلق میں حرفِ نفی «نہیں» کا درست مقام اور امدادی فعل «ہے/ہیں» کے اخراج و بقا کے قواعد میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "فعل حال مطلق میں نفی (Negative Sentences) بنانے کے قواعد:\n\n1. **حرفِ نفی «نہیں» کی جگہ**:\n   - نفی بنانے کے لیے مادہ فعل اور تا/تی/تے سے ٹھیک پہلے «**نہیں**» لگایا جاتا ہے (جیسے: «وہ جھوٹ نہیں بولتا»، «میں چائے نہیں پیتی»)۔\n\n2. **امدادی فعل 'ہے / ہیں' کا اخراج (Optional Elision of 'hai/hain')**:\n   - منفی جملوں میں اکثر آخری 'ہے / ہیں' حذف کر دیا جاتا ہے اور یہ انتہائی فصیح مانا جاتا ہے:\n     - «وہ گوشت نہیں کھاتا» (بمقابلہ: 'وہ گوشت نہیں کھاتا ہے')؛\n     - «ہم دیر سے نہیں آتے» (بمقابلہ: 'ہم دیر سے نہیں آتے ہیں')۔*",
      "examples": [
        {
          "target": "ایک سچا اور دیانتدار انسان کبھی کسی دوسرے کا دل نہیں دکھاتا اور نہ جھوٹ بولتا ہے۔",
          "reading": "Ek sachcha aur diyaanatdaar insaan kabhi kisi doosre ka dil nahin dukhaata aur na jhooth bolta hai. [eːk sətʃːaː ɔːr d̪ɪjaːnət̪d̪aːr ɪnsaːn kəbʱiː kɪsiː d̪uːsreː kaː d̪ɪl nəɦĩː d̪ʊkʰaːt̪aː ɔːr nə dʒʰuːʈʰ boːlt̪aː hɛː] (AYK suhch-CHAH owr dee-yah-nuht-DAHR een-SAHN kuh-BHEE kee-SEE doos-RAY kah DEEL nuh-HEEN dooh-khah-TAH owr nuh JHOOTH bohl-TAH hy)",
          "translation": "A true and honest human being never hurts another's heart nor tells a lie."
        },
        {
          "target": "ہم رات کو دیر تک جاگنے کے بجائے وقت پر سوتے ہیں تاکہ صحت خراب نہ ہو۔",
          "reading": "Hum raat ko der tak jaagne ke bajaaye waqt par sotay hain taake sehat kharaab na ho. [həm raːt̪ koː d̪eːr t̪ək dʒaːɡneː keː bədʒaːjeː ʋəqt̪ pər soːt̪eː hɛ̃ː t̪aːkɪ sɪhət̪ xəraːb nə hoː] (HOOM RAHT koh DAYR tuhk jahg-NAY kay buh-JAH-yay VUHKT puhr soh-TAY hyhn tah-KAY seh-HUHT khuh-RAHB nuh hoh)",
          "translation": "We sleep on time instead of staying awake late at night so that our health is not harmed."
        },
        {
          "target": "شریف لوگ بلاوجہ کسی کی غیبت نہیں کرتے اور نہ بے مقصد بحث میں پڑتے ہیں۔",
          "reading": "Shareef log bila-wajah kisi ki gheebat nahin karte aur na be-maqsad behas mein padte hain. [ʃəriːf loːɡ bɪlaː-ʋədʒəh kɪsiː kiː ɣiːbət̪ nəɦĩː kərt̪eː ɔːr nə beː-məqsəd̪ bɛɦəs mẽː pəɽt̪eː hɛ̃ː] (shuh-REEF LOHG bee-lah-vuh-JUH kee-SEE kee ghee-BUHT nuh-HEEN kuhr-TAY owr nuh bay-muhq-SUHD buh-HUHS mayn puhd-TAY hyhn)",
          "translation": "Noble people do not backbite anyone without reason, nor do they engage in pointless arguments."
        }
      ],
      "mnemonics": [
        "نفی کا اصول: نہیں + تا/تی/تے (وہ جھوٹ نہیں بولتا، ہم دیر سے نہیں آتے)!"
      ],
      "culturalNotes": [
        "اردو مکالمے میں 'نہیں کھاتا' کہنا 'نہیں کھاتا ہے' کی نسبت زیادہ پرلطف اور سبک مانا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جملے «وہ سگریٹ ... پیتا» میں منفی مفہوم ادا کرنے کے لیے کیا لگایا جائے گا؟",
          "options": [
            "نہیں (Nahin - Standard negation particle placed before verb)",
            "مت (حکم میں استعمال)",
            "نہ کہ (موازنہ)",
            "کبھی (مثبت)"
          ],
          "answerIndex": 0,
          "explanation": "حال مطلق میں نفی کے لیے فعل سے پہلے «نہیں» لگایا جاتا ہے: «وہ سگریٹ نہیں پیتا»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "اردو جملے «ہم جھوٹ نہیں ...» کا فصیح اختتام کیا ہوگا؟",
          "options": [
            "بولتے (Bolte - Habitual masculine plural negative verb)",
            "بولتا (واحد مذکر)",
            "بولتی (واحد مؤنث)",
            "بولیں گے (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "فاعل 'ہم' کے ساتھ منفی فعل «بولتے» (یا 'بولتے ہیں') آئے گا۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "حال مطلق کے منفی جملے (Negative Present Habitual) کا فصیح معیار پہچانیے:",
          "options": [
            "دیانتدار تاجر کبھی ناپ تول میں کمی نہیں کرتا اور نہ خریداروں کو دھوکہ دیتا ہے۔ (An honest merchant never falls short in weights and measures [kami nahin karta], nor deceives customers.)",
            "دیانتدار تاجر مت تولتا ہے اور مت بیچتا ہے۔",
            "منفی جملے صرف برے خواب دیکھنے پر بولے جاتے ہیں۔",
            "نہیں کو ہمیشہ جملے کے آخری لفظ کے بعد لگانا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«دیانتدار تاجر کبھی ناپ تول میں کمی نہیں کرتا اور نہ خریداروں کو دھوکہ دیتا ہے۔» منفی حال مطلق کا مکمل اور درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u4-l4": {
    "id": "ur-u4-l4",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 4,
    "title": "فعل حال مطلق میں سوالیہ جملے (Interrogative Sentences: کیا، کب، کیوں، کہاں)",
    "level": "A1",
    "objective": "حال مطلق میں ہاں/نہ والے سوالات (کیا) اور معلوماتی سوالات (کب، کہاں، کیوں، کیسے) کی درست نحوی ترتیب میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں سوالیہ جملے (Interrogative Sentences) بنانے کے اصول:\n\n1. **ہاں / نہ والے سوالات (Yes/No Questions with 'کیا')**:\n   - جملے کے بالکل آغاز میں «کیا» لگا دیا جاتا ہے (جیسے: «کیا آپ روزانہ ورزش کرتے ہیں؟»)۔\n\n2. **معلوماتی سوالات (Wh- Questions with کب، کہاں، کیوں، کیسے)**:\n   - سوالیہ کلمہ عام طور پر فعل سے ٹھیک پہلے آتا ہے:\n     - **کہاں** — مقام: «آپ کہاں رہتے ہیں؟»؛\n     - **کب** — وقت: «گاڑی کب روانہ ہوتی ہے؟»؛\n     - **کیوں** — سبب: «آپ اردو کیوں سیکھتے ہیں؟»؛\n     - **کیسے / کس طرح** — کیفیت: «وہ یہ کام کیسے کرتا ہے؟»*",
      "examples": [
        {
          "target": "کیا آپ ہر اتوار کی شام اپنے اہل خانہ کے ہمراہ قریبی تفریحی پارک کی سیر کو جاتے ہیں؟",
          "reading": "Kya aap har itwaar ki shaam apne ahl-e-khaana ke humraah qareebi tafreehi park ki sair ko jaate hain? [kjaː aːp hər ɪt̪ʋaːr kiː ʃaːm əpneː əɦl-eː-xaːnəh keː hʊmraːh qəriːbiː t̪əfriːhiː paːrk kiː sɛːr koː dʒaːt̪eː hɛ̃ː] (KYAH AHP HUHR eet-VAHR kee SHAHM uhp-NAY uhhl-ay-khah-NUH kay hoom-RAHH quh-ree-BEE tuhf-ree-HEE park kee SYR koh jah-TAY hyhn)",
          "translation": "Do you go for a walk to the nearby recreation park along with your family every Sunday evening?"
        },
        {
          "target": "آپ اتنی فصیح اور شیریں اردو کس ادارے اور کن اساتذہ کی رہنمائی میں سیکھتے ہیں؟",
          "reading": "Aap itni faseeh aur sheereen Urdu kis idaare aur kin asaatiza ki rahnumaai mein seekhte hain? [aːp ɪt̪niː fəsiːh ɔːr ʃiːrĩː ʊrd̪uː kɪs ɪd̪aːreː ɔːr kɪn əsaːt̪ɪzaː kiː rəɦnʊmaːiː mẽː siːkʰt̪eː hɛ̃ː] (AHP eet-NEE fuh-SEEH owr shee-REEN OOR-doo KEES ee-dah-RAY owr KEEN uh-sah-tee-ZAH kee ruhh-noo-mah-EE mayn seekh-TAY hyhn)",
          "translation": "At which institution and under the guidance of which teachers do you learn such eloquent and sweet Urdu?"
        },
        {
          "target": "آپ کے دوست شام کے وقت کرکٹ کھیلنے کے لیے کس میدان میں جمع ہوتے ہیں؟",
          "reading": "Aap ke dost shaam ke waqt cricket khelne ke liye kis maidaan mein jama hotay hain? [aːp keː d̪oːst̪ ʃaːm keː ʋəqt̪ krɪkɪʈ kʰeːlneː keː lɪjeː kɪs mɛːd̪aːn mẽː dʒəməʔ hoːt̪eː hɛ̃ː] (AHP kay DOHST SHAHM kay VUHKT cricket khayl-NAY kay lee-AY KEES my-DAHN mayn JAH-muh hoh-TAY hyhn)",
          "translation": "In which ground do your friends gather to play cricket in the evening?"
        }
      ],
      "mnemonics": [
        "سوالیہ کلمات: کیا (شروع میں ہاں/نہ)، کب (وقت)، کہاں (جگہ)، کیوں (وجہ)، کیسے (طریقہ)!"
      ],
      "culturalNotes": [
        "اردو میں شائستہ سوال پوچھنے کے لیے جملے کے آخر میں تعظیمی صیغہ 'فرماتے ہیں' یا 'کرتے ہیں' لگانا آدابِ گفتگو کا حصہ ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "کسی سے وقت معلوم کرنے کے لیے کون سا سوالیہ کلمہ استعمال کیا جاتا ہے؟",
          "options": [
            "کب (Kab - Interrogative word for 'when' inquiring about time)",
            "کہاں (مقام)",
            "کیوں (سبب)",
            "کون (شخص)"
          ],
          "answerIndex": 0,
          "explanation": "وقت دریافت کرنے کے لیے «کب» بولا جاتا ہے (جیسے: «آپ کب آتے ہیں؟»)۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ہاں یا نہ میں جواب طلب کرنے کے لیے جملے کے آغاز میں کیا لگایا جاتا ہے؟",
          "options": [
            "کیا (Kya - Question particle placed at sentence beginning for yes/no query)",
            "کیوں (وجہ)",
            "کیسے (طریقہ)",
            "کس کا (ملکیت)"
          ],
          "answerIndex": 0,
          "explanation": "ہاں/نہ والے سوالات جملے کے شروع میں «کیا» سے بنتے ہیں۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "حال مطلق کے سوالیہ جملوں (Interrogative Sentences) کا مکمل مستند جملہ پہچانیے:",
          "options": [
            "کیا آپ روزانہ صبح لائبریری جاتے ہیں اور وہاں علمی موضوعات پر کتب کا مطالعہ کرتے ہیں؟ (Do you go to the library every morning and study books on academic subjects there?)",
            "کیوں کہاں کب آپ پانی پیتا ہے؟",
            "سوالیہ جملے کا مطلب صرف غصے میں چیخنا ہوتا ہے۔",
            "کیا کو صرف جملے کے اندر چھپا کر رکھنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«کیا آپ روزانہ صبح لائبریری جاتے ہیں اور وہاں علمی موضوعات پر کتب کا مطالعہ کرتے ہیں؟» سوالیہ حال مطلق کا مکمل جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u4-l5": {
    "id": "ur-u4-l5",
    "subject": "urdu",
    "unit": 4,
    "lessonNumber": 5,
    "title": "فعل حال مطلق کا جامع اطلاق و سمیکن (Present Habitual Grand Synthesis)",
    "level": "A1",
    "objective": "مثبت، منفی اور سوالیہ اشکال، تذکیر و تانیث، تعظیمی صیغوں اور کثیر الجملاتی پیراگراف میں حال مطلق کا مکمل انطباق کرنا۔",
    "presentation": {
      "explanation": "فعل حال مطلق کے تمام قواعد کا فصیح امتزاج اور سمیکن (Grand Synthesis):\n\n1. **مثبت اور منفی کا ربط**:\n   - «ایک بااصول شہری قانون کا احترام **کرتا ہے** اور کبھی ٹریفک کے اصول **نہیں توڑتا**۔»\n\n2. **سوالیہ اور بیانیہ کا تبادلہ**:\n   - «کیا آپ جانتے ہیں کہ محنتی انسان زندگی میں کبھی ناکام **نہیں ہوتا**؟»\n\n3. **تذکیر و تانیث اور تعظیمی مطابقت کا کمال**:\n   - «ہمارے اساتذہ وقت پر **تشریف لاتے ہیں**، طلبہ محنت **کرتے ہیں** اور طالبات انعامات **حاصل کرتی ہیں**۔»*",
      "examples": [
        {
          "target": "ہماری جامعہ کے اساتذہ وقت کی پابندی کرتے ہیں، طلبہ کو شفقت سے پڑھاتے ہیں اور علمی رہنمائی فراہم کرتے ہیں۔",
          "reading": "Hamaari jaamia ke asaatiza waqt ki paabandi karte hain, talaba ko shafaqat se parhaate hain aur ilmi rahnumaai faraaham karte hain. [həm-aːriː dʒaːmɪʔaː keː əsaːt̪ɪzaː ʋəqt̪ kiː paːbənd̪iː kərt̪eː hɛ̃ː t̪ələbaː koː ʃəfqət̪ seː pəɽʱaːt̪eː hɛ̃ː ɔːr ɪlmiː rəɦnʊmaːiː fəraːhəm kərt̪eː hɛ̃ː] (huh-mah-REE JAH-mee-ah kay uh-sah-tee-ZAH VUHKT kee pah-buhn-DEE kuhr-TAY hyhn, tuh-luh-BAH koh shuh-fuh-QUHT say puhr-hah-TAY hyhn owr EEL-mee ruhh-noo-mah-EE fuh-rah-HUHM kuhr-TAY hyhn)",
          "translation": "The professors of our university observe punctuality, teach students with affection, and provide academic guidance."
        },
        {
          "target": "محنتی کسان علی الصبح کھیتوں میں جاتا ہے، بیج بوتا ہے اور سخت محنت سے لہلہاتی فصلیں اگاتا ہے۔",
          "reading": "Mehnati kisaan ala-as-subah kheton mein jaata hai, beej bota hai aur sakht mehnat se lahlahaati faslein ugaata hai. [mɛɦnət̪iː kɪsaːn ʔələsːʊbəh kʰeːt̪õː mẽː dʒaːt̪aː hɛː biːdʒ boːt̪aː hɛː ɔːr səxt̪ mɛɦnət̪ seː ləhləhaːt̪iː fəslẽː ʊɡaːt̪aː hɛː] (muhh-nuh-TEE kee-SAHN uh-luhs-SOO-buh khay-TOHN mayn JAH-tah hy, BEEJ boh-TAH hy owr SUHKHT muhh-NUHT say luhh-luh-hah-TEE fuhs-LAYN oo-gah-TAH hy)",
          "translation": "The hardworking farmer goes to the fields at daybreak, sows seeds, and grows swaying crops through strenuous effort."
        },
        {
          "target": "کیا آپ جانتے ہیں کہ سچے انسان کی ہر محفل میں قدر کی جاتی ہے اور وہ ہمیشہ عزت پاتا ہے؟",
          "reading": "Kya aap jaante hain ke sachche insaan ki har mehfil mein qadr ki jaati hai aur woh hamesha izzat paata hai? [kjaː aːp dʒaːnt̪eː hɛ̃ː kɪ sətʃːeː ɪnsaːn kiː hər mɛɦfɪl mẽː qəd̪r kiː dʒaːt̪iː hɛː ɔːr ʋoːh həm-eːʃaː ɪzːət̪ paːt̪aː hɛː] (KYAH AHP jahn-TAY hyhn kay suhch-CHAY een-SAHN kee HUHR muhh-FEEL mayn QUH-duhr kee jah-TEE hy owr VOH huh-MAY-shah EEZ-zuht pah-TAH hy)",
          "translation": "Do you know that a truthful person is valued in every gathering and always earns honor?"
        }
      ],
      "mnemonics": [
        "جامع سمیکن: عادات (کرتا ہے)، اخراج منفی (نہیں بولتا)، تعظیم (فرماتے ہیں)، سوالیہ (کیا/کب)!"
      ],
      "culturalNotes": [
        "اردو کی ادبی نثر اور اخلاقی حکایات میں فعل حال مطلق کا کثرت سے استعمال پڑھنے والے کے دل میں مستقل اخلاقی قدریں اجاگر کرتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مختلف فاعلوں کے ساتھ حال مطلق کا کون سا مجموعہ مکمل درست ہے؟",
          "options": [
            "لڑکا کھیلتا ہے، لڑکی پڑھتی ہے، بزرگ فرماتے ہیں (Boy plays, girl studies, elder speaks - Perfect gender & honorific concord)",
            "لڑکا کھیلتی ہے، لڑکی پڑھتا ہے (الٹی جنس)",
            "بزرگ فرماتا ہے (بے ادبی)",
            "سب بھاگیں گے (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر (کھیلتا ہے)، مؤنث (پڑھتی ہے) اور تعظیم (فرماتے ہیں) کی بالکل درست مطابقت ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "شائستہ روزمرہ زندگی کے بیانیہ میں فعل حال مطلق کا بنیادی کردار کیا ہے؟",
          "options": [
            "دائمی عادات اور باقاعدہ معمولات کا فصیح اظہار (Expressing habitual routines, facts, and permanent traits)",
            "صرف ماضی کی کہانیاں سنانا",
            "صرف آنے والے کل کے خواب دیکھنا",
            "بغیر معنی کے الفاظ جوڑنا"
          ],
          "answerIndex": 0,
          "explanation": "فعل حال مطلق دائمی معمولات، عادات اور سچائیوں کے بیان کے لیے مستعمل ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل حال مطلق کے جامع سمیکن (Grand Synthesis) کا شاہکار جملہ پہچانیے:",
          "options": [
            "جو شخص علم کی قدر کرتا ہے، روزانہ محنت سے پڑھتا ہے اور اساتذہ کا احترام کرتا ہے، وہ زندگی کے ہر میدان میں کامیابی حاصل کرتا ہے۔ (He who values knowledge [qadr karta hai], studies daily with diligence [parhta hai], and respects teachers [ehtiram karta hai], achieves success [kaamyaabi haasil karta hai] in every field of life.)",
            "جو شخص علم کا قدر کرتی ہیں وہ ہمیشہ روتا ہے۔",
            "حال مطلق کو صرف فارسی میں لکھنا چاہیے اردو میں منع ہے۔",
            "تمام اساتذہ کلاس میں نہیں پڑھاتی تھیں۔"
          ],
          "answerIndex": 0,
          "explanation": "«جو شخص علم کی قدر کرتا ہے، روزانہ محنت سے پڑھتا ہے اور اساتذہ کا احترام کرتا ہے، وہ زندگی کے ہر میدان میں کامیابی حاصل کرتا ہے۔» حال مطلق کا جامع اور شاہکار جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u5-l1": {
    "id": "ur-u5-l1",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 1,
    "title": "فعل حال جاری کی ساخت اور گردان (Present Continuous Morphology)",
    "level": "A1",
    "objective": "فعل حال جاری کے اجزاء (مادہ فعل + رہا/رہی/رہے/رہیں + امدادی فعل ہونا) اور فاعل کے مطابق گردان میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل حال جاری (Present Continuous / Progressive Tense) کی ساخت:\n\n1. **فعل حال جاری کا مفہوم**:\n   - یہ فعل گفتگو کے وقت جاری عمل (Ongoing Action) کو ظاہر کرتا ہے۔\n\n2. **فعل کی بنیادی ساخت**:\n   - **مادہ فعل (Verb Stem)** + **رہا / رہی / رہے / رہیں** + **ہونا کا صیغہ (ہوں / ہے / ہیں / ہو)**:\n     - مذکر واحد: «میں خط لکھ **رہا ہوں**»، «احمد پڑھ **رہا ہے**»؛\n     - مذکر جمع / تعظیمی: «ہم مطالعہ کر **رہے ہیں**»، «آپ سن **رہے ہیں**»، «وہ تشریف لا **رہے ہیں**»؛\n     - مؤنث واحد: «میں چائے بنا **رہی ہوں**»، «فاطمہ کھانا کھا **رہی ہے**»؛\n     - مؤنث جمع: «لڑکیاں نعت پڑھ **رہی ہیں**»۔*",
      "examples": [
        {
          "target": "اس وقت باہر تیز موسلادھار بارش ہو رہی ہے اور ٹھنڈی ہوا چل رہی ہے۔",
          "reading": "Is waqt baahar tez mooslaadhaar baarish ho rahi hai aur thandi hawa chal rahi hai. [ɪs ʋəqt̪ baːɦər t̪eːz muːslaːd̪ʱaːr baːrɪʃ hoː rəɦiː hɛː ɔːr t̪ʰəɳɖiː ɦəʋaː tʃəl rəɦiː hɛː] (EES VUHKT BAH-huhr TAYZ moos-lah-DHAHR BAH-reesh hoh ruh-HEE hy owr thuhn-DEE huh-VAH chuhl ruh-HEE hy)",
          "translation": "At this moment, heavy torrential rain is falling outside and a cool breeze is blowing."
        },
        {
          "target": "طلبہ اپنے کمرۂ جماعت میں انہماک کے ساتھ استاد کا سبق سن رہے ہیں۔",
          "reading": "Talaba apne kamra-e-jama'at mein inhimaak ke saath ustaad ka sabaq sun rahe hain. [t̪ələbaː əpneː kəmraː-eː-dʒəmaːʔət̪ mẽː ɪnɦɪmaːq keː saːt̪ʰ ʊst̪aːd̪ kaː səbəq sʊn rəɦeː hɛ̃ː] (tuh-luh-BAH uhp-NAY kuhm-RAH-ay-juh-MAH-uht mayn een-hee-MAHQ kay sahth oos-TAHD kah suh-BUHQ soon ruh-HAY hyhn)",
          "translation": "The students are listening attentively to the teacher's lesson in their classroom."
        },
        {
          "target": "میں اس وقت اپنے امتحانات کی تیاری کے لیے اہم نوٹس تیار کر رہا ہوں۔",
          "reading": "Main is waqt apne imtehaanaat ki tayyaari ke liye aham notes tayyaar kar raha hoon. [mɛ̃ː ɪs ʋəqt̪ əpneː ɪmt̪ɪhaːnaːt̪ kiː t̪əjːaːriː keː lɪjeː əɦəm noːʈs t̪əjːaːr kər rəɦaː ɦuː̃] (myhn EES VUHKT uhp-NAY eem-tuh-hah-NAHT kee ty-yah-REE kay lee-AY UH-huhm notes ty-YAHR kuhr ruh-HAH HOON)",
          "translation": "I am preparing important notes right now for my examination preparation."
        }
      ],
      "mnemonics": [
        "حال جاری فارمولا: مادہ فعل + رہا/رہی/رہے + ہے/ہیں (لکھ رہا ہے، پڑھ رہی ہے، جا رہے ہیں)!"
      ],
      "culturalNotes": [
        "اردو میں حال جاری وقتی عمل کے ساتھ ساتھ قریب الوقوع مستقبل کے ارادے کے لیے بھی بولا جاتا ہے، جیسے: 'میں کل لاہور جا رہا ہوں'۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مذکر واحد فاعل «علی» کے ساتھ فعل «لکھنا» کا حال جاری کیا ہوگا؟",
          "options": [
            "لکھ رہا ہے (Likh raha hai - Masculine singular present continuous tense)",
            "لکھ رہی ہے (تانیث صیغہ)",
            "لکھ رہے ہیں (جمع صیغہ)",
            "لکھتا ہے (حال مطلق)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر واحد کے ساتھ فعل حال جاری «لکھ رہا ہے» بنتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مؤنث جمع فاعل «لڑکیاں» کے ساتھ فعل «پڑھنا» کا حال جاری کیا بنے گا؟",
          "options": [
            "پڑھ رہی ہیں (Parh rahi hain - Feminine plural present continuous tense)",
            "پڑھ رہا ہے (مذکر واحد)",
            "پڑھ رہے ہیں (مذکر جمع)",
            "پڑھا تھا (ماضی)"
          ],
          "answerIndex": 0,
          "explanation": "مؤنث جمع کے ساتھ «پڑھ رہی ہیں» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل حال جاری کی ساخت (Present Continuous Morphology) کا مکمل جملہ پہچانیے:",
          "options": [
            "اس وقت کسان کھیتوں میں ہل چلا رہا ہے اور پرندے فضا میں اڑ رہے ہیں۔ (At this time the farmer is plowing the fields [hal chala raha hai] and birds are flying in the air.)",
            "کسان ہل چلا رہی ہیں اور پرندے روتا ہے۔",
            "حال جاری کا مطلب صرف سوتے ہوئے خراٹے لینا ہے۔",
            "رہا ہے کو جملے کے شروع میں اسم سے پہلے لگانا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«اس وقت کسان کھیتوں میں ہل چلا رہا ہے اور پرندے فضا میں اڑ رہے ہیں۔» حال جاری کا بالکل درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u5-l2": {
    "id": "ur-u5-l2",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 2,
    "title": "جاری سرگرمیاں اور فاعل کے مطابق مطابقت (Ongoing Actions & Agreement)",
    "level": "A1",
    "objective": "جاری کاموں (تعمیر کرنا، علاج کرنا، تسبیح پڑھنا) میں تذکیر و تانیث اور تعظیمی جمع کی کامل مطابقت قائم کرنا۔",
    "presentation": {
      "explanation": "جاری سرگرمیوں میں فاعل کے مطابق مطابقت کے اصول:\n\n1. **مذکر فاعل کی جاری سرگرمی**:\n   - «معمار اور مزدور مل کر عمارت **تعمیر کر رہے ہیں**۔»\n\n2. **مؤنث فاعل کی جاری سرگرمی**:\n   - «ماہر ڈاکٹر صاحبہ مریض کا **معائنہ کر رہی ہیں**۔»\n\n3. **تعظیمی جمع کی مطابقت**:\n   - «ہمارے محترم دادا جان جائے نماز پر بیٹھ کر تسبیح **پڑھ رہے ہیں**۔»*",
      "examples": [
        {
          "target": "معمار اور مزدور مل کر ایک خوبصورت اور مضبوط عمارت تعمیر کر رہے ہیں۔",
          "reading": "Me'maar aur mazdoor mil kar ek khoobsurat aur mazboot imaarat ta'meer kar rahe hain. [mɪʔmaːr ɔːr məzduːr mɪl kər eːk xuːbsuːrət̪ ɔːr məzbuːt̪ ɪmaːrət̪ t̪əʔmiːr kər rəɦeː hɛ̃ː] (mee-MAHR owr muhz-DOOR MEEL kuhr AYK khoob-SOO-ruht owr muhz-BOOT ee-MAH-ruht tuh-MEER kuhr ruh-HAY hyhn)",
          "translation": "The mason and laborers together are constructing a beautiful and sturdy building."
        },
        {
          "target": "ماہر ڈاکٹر صاحبہ انتہائی توجہ اور شفقت سے ننھے بچے کا معائنہ کر رہی ہیں۔",
          "reading": "Maahir doctor saahiba intihaai tawajjuh aur shafaqat se nannhe bachche ka muaayana kar rahi hain. [maːɦɪr ɖɔːkʈər saːhɪbaː ɪnt̪ɪhaːiː t̪əʋədʒːʊh ɔːr ʃəfqət̪ seː nənːɦeː bətʃːeː kaː mʊʔaːjənaː kər rəɦiː hɛ̃ː] (MAH-heer doctor sah-hee-BAH een-tee-HAH-ee tuh-vuhj-JOOH owr shuh-fuh-QUHT say nuhn-NHAY buhch-CHAY kah moo-ah-yuh-NAH kuhr ruh-HEE hyhn)",
          "translation": "The expert female doctor is examining the little infant with utmost attention and affection."
        },
        {
          "target": "ہمارے بزرگ دادا جان جائے نماز پر بیٹھ کر تسبیح پڑھ رہے ہیں اور دعا مانگ رہے ہیں۔",
          "reading": "Hamaare buzurg daada jaan jaa-e-namaaz par baith kar tasbeeh parh rahe hain aur dua maang rahe hain. [həm-aːreː bʊzʊrɡ d̪aːd̪aː dʒaːn dʒaː-eː-nəmaːz pər bɛːʈʰ kər t̪əsbiːh pəɽʱ rəɦeː hɛ̃ː ɔːr d̪ʊʔaː maːŋɡ rəɦeː hɛ̃ː] (huh-mah-RAY boo-ZOORG dah-DAH JAHN jah-ay-nuh-MAHZ puhr BYTH kuhr tuhs-BEEH puhrh ruh-HAY hyhn owr doo-AH mahng ruh-HAY hyhn)",
          "translation": "Our elder grandfather is sitting on the prayer mat reciting the rosary and making prayer."
        }
      ],
      "mnemonics": [
        "جاری مطابقت: مزدور (کر رہے ہیں)، ڈاکٹر صاحبہ (کر رہی ہیں)، دادا جان (پڑھ رہے ہیں)!"
      ],
      "culturalNotes": [
        "اردو میں احترام کے پیشِ نظر خواتین کے نام کے ساتھ 'صاحبہ' یا 'محترمہ' لگا کر فعل جمع 'کر رہی ہیں' استعمال کیا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مؤنث فاعل «استانی صاحبہ» کے ساتھ حال جاری کا کون سا صیغہ درست ہے؟",
          "options": [
            "پڑھا رہی ہیں (Parha rahi hain - Respectful feminine plural continuous verb)",
            "پڑھا رہا ہے (مذکر واحد)",
            "پڑھا رہے ہیں (مذکر تعظیمی)",
            "پڑھایا تھا (ماضی)"
          ],
          "answerIndex": 0,
          "explanation": "محترمہ استانی صاحبہ کے لیے تعظیمی تانیث «پڑھا رہی ہیں» بولا جاتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مذکر جمع فاعل «طلبہ» کے ساتھ جاری فعل کی درست صورت کیا ہوگی؟",
          "options": [
            "کھیل رہے ہیں (Khel rahe hain - Masculine plural present continuous verb)",
            "کھیل رہا ہے (واحد مذکر)",
            "کھیل رہی ہیں (مؤنث جمع)",
            "کھیلتا ہے (حال مطلق)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر جمع فاعل کے ساتھ «کھیل رہے ہیں» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "جاری سرگرمیوں اور تذکیر و تانیث کی مطابقت (Ongoing Actions & Concord) کا فصیح جملہ پہچانیے:",
          "options": [
            "باورچی باورچی خانے میں کھانا پکا رہا ہے اور مہمان کھانے کے کمرے میں تشریف رکھ رہے ہیں۔ (The cook is cooking food [paka raha hai] in the kitchen, and the guests are taking their seats [tashreef rakh rahe hain] in the dining room.)",
            "باورچی کھانا پکا رہی تھیں اور سب مہمان بھاگ رہا ہے۔",
            "تذکیر و تانیث کا جاری فعل میں کوئی تعلق نہیں۔",
            "تشریف رکھ رہے ہیں کا مطلب تالا توڑنا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«باورچی باورچی خانے میں کھانا پکا رہا ہے اور مہمان کھانے کے کمرے میں تشریف رکھ رہے ہیں۔» جاری فعل اور مطابقت کا مکمل جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u5-l3": {
    "id": "ur-u5-l3",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 3,
    "title": "فعل حال جاری میں نفی اور استمرار (Negatives in Present Continuous)",
    "level": "A1",
    "objective": "حال جاری میں نفی کی ساخت (نہیں + مادہ فعل + رہا ہے) اور منفی استمرار کے درست اسلوب میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "فعل حال جاری میں نفی (Negative Present Continuous) کے قواعد:\n\n1. **حرفِ نفی «نہیں» کا مقام**:\n   - نفی بنانے کے لیے مادہ فعل سے ٹھیک پہلے «**نہیں**» لگایا جاتا ہے (جیسے: «وہ نہیں پڑھ رہا ہے»، «ہم نہیں جا رہے ہیں»)۔\n\n2. **امدادی فعل 'ہے / ہیں' کا برقرار رہنا**:\n   - حال مطلق کے برعکس، حال جاری میں 'ہے / ہیں' کو قائم رکھنا زیادہ فصیح اور مستند مانا جاتا ہے تاکہ جاری عمل کی نفی کا زمانہ مکمل واضح رہے (جیسے: «طالب علم وقت ضائع نہیں کر رہا ہے»)۔*",
      "examples": [
        {
          "target": "وہ اس وقت شور نہیں مچا رہے ہیں بلکہ خاموشی سے اپنی درسی کتابیں پڑھ رہے ہیں۔",
          "reading": "Woh is waqt shor nahin macha rahe hain balke khaamoshi se apni darsi kitaabein parh rahe hain. [ʋoːh ɪs ʋəqt̪ ʃoːr nəɦĩː mətʃaː rəɦeː hɛ̃ː bəl-kɪ xaːmoːʃiː seː əpniː d̪ərsiː kɪt̪aːbẽː pəɽʱ rəɦeː hɛ̃ː] (VOH EES VUHKT SHOHR nuh-HEEN muh-CHAH ruh-HAY hyhn buhl-KAY khah-moh-SHEE say uhp-NEE duhr-SEE kee-tah-BAYN puhrh ruh-HAY hyhn)",
          "translation": "They are not making noise right now, but rather reading their textbooks quietly."
        },
        {
          "target": "طالبہ وقت ضائع نہیں کر رہی ہے بلکہ امتحانات کے لیے اہم نکات نوٹ کر رہی ہے۔",
          "reading": "Taaliba waqt zaaya nahin kar rahi hai balke imtehaanaat ke liye aham nukaat note kar rahi hai. [t̪aːlɪbaː ʋəqt̪ zaːjəʔ nəɦĩː kər rəɦiː hɛː bəl-kɪ ɪmt̪ɪhaːnaːt̪ keː lɪjeː əɦəm nʊqaːt̪ noːʈ kər rəɦiː hɛː] (tah-lee-BAH VUHKT zah-YUH nuh-HEEN kuhr ruh-HEE hy buhl-KAY eem-tuh-hah-NAHT kay lee-AY UH-huhm noo-QAHT note kuhr ruh-HEE hy)",
          "translation": "The female student is not wasting time, but rather noting down key points for the examinations."
        },
        {
          "target": "ہم کسی مسافر کو پریشان نہیں کر رہے ہیں اور قواعد کی پابندی کر رہے ہیں۔",
          "reading": "Hum kisi musaafir ko pareshaan nahin kar rahe hain aur qawaaid ki paabandi kar rahe hain. [həm kɪsiː mʊsaːfɪr koː pəreːʃaːn nəɦĩː kər rəɦeː hɛ̃ː ɔːr qəʋaːʔɪd̪ kiː paːbənd̪iː kər rəɦeː hɛ̃ː] (HOOM kee-SEE moo-sah-FEER koh puh-ray-SHAHN nuh-HEEN kuhr ruh-HAY hyhn owr quh-wah-EED kee pah-buhn-DEE kuhr ruh-HAY hyhn)",
          "translation": "We are not troubling any passenger and are observing the rules."
        }
      ],
      "mnemonics": [
        "منفی حال جاری: نہیں + مادہ فعل + رہا ہے (شور نہیں مچا رہے ہیں، وقت ضائع نہیں کر رہی ہے)!"
      ],
      "culturalNotes": [
        "اردو شائستگی میں منفی جملوں میں الزام کے بجائے 'ہم ایسا نہیں کر رہے ہیں' کہہ کر وضاحت پیش کرنا مہذب انداز سمجھا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جملے «وہ کھانا ... کھا رہا ہے» میں نفی کا فصیح لفظ کیا ہوگا؟",
          "options": [
            "نہیں (Nahin - Standard negation particle placed before verb in continuous tense)",
            "مت (حکم کی نفی)",
            "نا (غیر فصیح)",
            "بغیر (حرفِ جار)"
          ],
          "answerIndex": 0,
          "explanation": "حال جاری میں نفی کے لیے فعل سے پہلے «نہیں» لگایا جاتا ہے: «وہ کھانا نہیں کھا رہا ہے»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "فاعل 'ہم' کے ساتھ منفی حال جاری کا درست جملہ منتخب کیجیے:",
          "options": [
            "ہم وقت ضائع نہیں کر رہے ہیں (We are not wasting time - Correct plural negative continuous sentence)",
            "ہم وقت ضائع مت کر رہے ہیں (غلط حرفِ نفی)",
            "ہم وقت ضائع نہیں کر رہا ہے (واحد مذکر غلطی)",
            "ہم وقت ضائع نہیں کرتا ہے (حال مطلق)"
          ],
          "answerIndex": 0,
          "explanation": "فاعل 'ہم' کے ساتھ منفی حال جاری «ہم وقت ضائع نہیں کر رہے ہیں» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل حال جاری میں منفی ساخت (Negative Present Continuous) کا مستند جملہ پہچانیے:",
          "options": [
            "ہم کسی معزز شہری کے کام میں رکاوٹ نہیں ڈال رہے ہیں بلکہ ان کی مدد کر رہے ہیں۔ (We are not causing any obstacle [rukaawat nahin daal rahe hain] in any respected citizen's work, but rather helping them.)",
            "ہم رکاوٹ مت ڈال رہے ہیں اور نہ مدد کرتا ہے۔",
            "منفی جاری فعل کا مطلب ہمیشہ کے لیے بولنا بند کرنا ہے۔",
            "نہیں کو صرف فاعل سے پہلے لگانا لازمی ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہم کسی معزز شہری کے کام میں رکاوٹ نہیں ڈال رہے ہیں بلکہ ان کی مدد کر رہے ہیں۔» منفی حال جاری کا جامع اور فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u5-l4": {
    "id": "ur-u5-l4",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 4,
    "title": "فعل حال جاری میں سوالیہ جملے (Interrogative Continuous: کیا، کہاں، کیسے)",
    "level": "A1",
    "objective": "حال جاری میں ہاں/نہ سوالات (کیا) اور تفصیلی استفسار (کہاں، کیا، کیسے، کیوں) کے نحوی اوزان میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "فعل حال جاری میں سوالیہ جملے (Interrogative Continuous Sentences) بنانے کے اصول:\n\n1. **ہاں / نہ والے سوالات (Yes/No Questions with 'کیا')**:\n   - جملے کے آغاز میں «کیا» بڑھا دیا جاتا ہے (جیسے: «کیا آپ اس وقت گھر جا رہے ہیں؟»)۔\n\n2. **معلوماتی سوالات (Wh- Questions with کہاں، کیا، کیوں، کیسے)**:\n   - سوالیہ کلمہ فعل سے ٹھیک پہلے رکھا جاتا ہے:\n     - «آپ اس وقت **کیا لکھ رہے ہیں**؟» (واٹ آر یو رائٹنگ؟)؛\n     - «وہ اتنی رات گئے **کہاں جا رہی ہے**؟» (ویئر از شی گوئنگ؟)؛\n     - «آپ یہ کام **کیسے کر رہے ہیں**؟» (ہاؤ آر یو ڈوئنگ دس؟)۔*",
      "examples": [
        {
          "target": "کیا آپ اس وقت لائبریری کے خاموش ہال میں بیٹھ کر اپنے تحقیقی مقالے کا مسودہ تیار کر رہے ہیں؟",
          "reading": "Kya aap is waqt library ke khaamosh hall mein baith kar apne tehqeeqi maqaale ka musawwada tayyaar kar rahe hain? [kjaː aːp ɪs ʋəqt̪ laːɪbreːriː keː xaːmoːʃ haːl mẽː bɛːʈʰ kər əpneː t̪əɦqiːqiː məqaːleː kaː mʊsəʋːəd̪aː t̪əjːaːr kər rəɦeː hɛ̃ː] (KYAH AHP EES VUHKT library kay khah-MOHSH hahl mayn BYTH kuhr uhp-NAY tuhh-qee-QEE muh-QAH-lay kah moo-suhv-vuh-DAH ty-YAHR kuhr ruh-HAY hyhn)",
          "translation": "Are you sitting in the quiet hall of the library right now preparing the draft of your research paper?"
        },
        {
          "target": "آپ اتنی جلدی میں کہاں جا رہے ہیں اور آپ کے ساتھ کون کون تشریف لے جا رہے ہیں؟",
          "reading": "Aap itni jaldi mein kahaan ja rahe hain aur aap ke saath kaun kaun tashreef le ja rahe hain? [aːp ɪt̪niː dʒəldiː mẽː kəhaː̃ dʒaː rəɦeː hɛ̃ː ɔːr aːp keː saːt̪ʰ kɔːn kɔːn t̪əʃriːf leː dʒaː rəɦeː hɛ̃ː] (AHP eet-NEE juhl-DEE mayn kuh-HAHN jah ruh-HAY hyhn owr AHP kay sahth KOWN KOWN tuhsh-REEF lay jah ruh-HAY hyhn)",
          "translation": "Where are you going in such a hurry, and who all are accompanying you?"
        },
        {
          "target": "کیا بچے میدان میں فٹ بال کھیل رہے ہیں یا تماشائیوں کے ساتھ بیٹھ کر تالیاں بجا رہے ہیں؟",
          "reading": "Kya bachche maidaan mein football khel rahe hain ya tamaashaa-iyon ke saath baith kar taaliyaan baja rahe hain? [kjaː bətʃːeː mɛːd̪aːn mẽː fʊʈbaːl kʰeːl rəɦeː hɛ̃ː jaː t̪əmaːʃaːʔɪjõː keː saːt̪ʰ bɛːʈʰ kər t̪aːlɪjaː̃ bədʒaː rəɦeː hɛ̃ː] (KYAH buhch-CHAY my-DAHN mayn football khayl ruh-HAY hyhn yah tuh-mah-shah-ee-YOHN kay sahth BYTH kuhr tah-lee-YAHN buh-JAH ruh-HAY hyhn)",
          "translation": "Are the children playing football in the field, or sitting with the spectators clapping?"
        }
      ],
      "mnemonics": [
        "سوالیہ حال جاری: کیا آپ جا رہے ہیں؟ (ہاں/نہ)، آپ کیا کر رہے ہیں؟ (معلوماتی)!"
      ],
      "culturalNotes": [
        "اردو میں کسی کے جاری کام میں دخل دیتے وقت معذرت کے ساتھ 'کیا میں آپ سے بات کر سکتا ہوں؟ آپ کیا کر رہے ہیں؟' پوچھنا حسنِ اخلاق کی علامت ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "کسی شخص کے جاری کام کو دریافت کرنے کے لیے کون سا سوالیہ جملہ درست ہے؟",
          "options": [
            "آپ اس وقت کیا کر رہے ہیں؟ (What are you doing right now? - Authentic standard continuous question)",
            "آپ کیوں کرتا ہے؟ (غیر معیاری)",
            "کیا آپ کھانا کھایا؟ (ماضی)",
            "کب آپ جائیں گے؟ (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "جاری کام کے بارے میں پوچھنے کے لیے «آپ اس وقت کیا کر رہے ہیں؟» بولا جاتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مقام دریافت کرنے کے لیے سوالیہ کلمہ «کہاں» کے ساتھ حال جاری کا درست جملہ کیا ہے؟",
          "options": [
            "وہ کہاں جا رہی ہے؟ (Where is she going? - Correct feminine continuous locative question)",
            "وہ کہاں جاتا ہے؟ (حال مطلق)",
            "وہ کیوں جاتی ہے؟ (سبب)",
            "وہ کہاں گئی تھی؟ (ماضی بعید)"
          ],
          "answerIndex": 0,
          "explanation": "جاری مقام کے لیے «وہ کہاں جا رہی ہے؟» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل حال جاری میں سوالیہ جملوں (Interrogative Present Continuous) کا فصیح جملہ پہچانیے:",
          "options": [
            "کیا اساتذہ کرام کانفرنس ہال میں نئے تعلیمی نصاب پر تفصیلی تبادلۂ خیال کر رہے ہیں؟ (Are the respected teachers holding a detailed discussion [tabadla-e-khayaal kar rahe hain] on the new curriculum in the conference hall?)",
            "کیوں اساتذہ رو رہا ہے؟",
            "سوالیہ حال جاری کا مطلب صرف طوفان میں چھتری کھولنا ہے۔",
            "کیا کو صرف خط کے لفافے پر لکھنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«کیا اساتذہ کرام کانفرنس ہال میں نئے تعلیمی نصاب پر تفصیلی تبادلۂ خیال کر رہے ہیں؟» سوالیہ حال جاری کا مستند جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u5-l5": {
    "id": "ur-u5-l5",
    "subject": "urdu",
    "unit": 5,
    "lessonNumber": 5,
    "title": "فعل حال جاری کا جامع سمیکن و ادبی انطباق (Present Continuous Grand Synthesis)",
    "level": "A1",
    "objective": "جاری منظر کشی (بارش، پرندے، محنت)، حال مطلق و حال جاری کا موازنہ اور کثیر الجملاتی پیراگراف میں حال جاری کا کامل انطباق کرنا۔",
    "presentation": {
      "explanation": "فعل حال جاری کا جامع سمیکن اور ادبی منظر کشی (Grand Synthesis & Imagery):\n\n1. **رواں منظر کشی (Live Scene Description)**:\n   - حال جاری کسی بھی منظر کو آنکھوں کے سامنے زندہ اور متحرک کر دیتا ہے:\n     - «صبح کے وقت باغ میں پرندے چہچہا رہے ہیں، ٹھنڈی ہوائیں چل رہی ہیں اور سورج کی سنہری کرنیں بکھر رہی ہیں۔»\n\n2. **حال مطلق اور حال جاری میں واضح فرق**:\n   - **حال مطلق (عادت / مستقل)**: «وہ روزانہ کتاب پڑھتا ہے»؛\n   - **حال جاری (وقتی عمل)**: «وہ اس وقت کتاب پڑھ رہا ہے۔»\n\n3. **ترکیبی فصاحت**:\n   - «پوری قوم محنت کر رہی ہے اور ملک ترقی کی راہ پر گامزن ہو رہا ہے۔»*",
      "examples": [
        {
          "target": "صبح کے وقت باغ میں پرندے چہچہا رہے ہیں، ٹھنڈی ہوائیں چل رہی ہیں اور سورج کی سنہری کرنیں بکھر رہی ہیں۔",
          "reading": "Subah ke waqt baagh mein parinde chahchaha rahe hain, thandi hawaaein chal rahi hain aur sooraj ki sunehri kirnein bikhar rahi hain. [sʊbəh keː ʋəqt̪ baːɣ mẽː pərɪnd̪eː tʃəɦtʃəhaː rəɦeː hɛ̃ː t̪ʰəɳɖiː ɦəʋaːẽː tʃəl rəɦiː hɛ̃ː ɔːr suːrədʒ kiː sʊnɛɦriː kɪrnẽː bɪkʰər rəɦiː hɛ̃ː] (SOO-buh kay VUHKT BAHGH mayn puh-reen-DAY chuhh-chuh-HAH ruh-HAY hyhn, thuhn-DEE huh-vah-AYN chuhl ruh-HEE hyhn owr SOO-ruhj kee soo-NYH-ree keer-NAYN bee-KHUHR ruh-HEE hyhn)",
          "translation": "In the morning, birds are chirping in the garden, cool breezes are blowing, and golden rays of the sun are scattering."
        },
        {
          "target": "ہمارے ملک کے سائنسدان اور انجینئرز ملکی ترقی کے لیے جدید ٹیکنالوجی پر شب و روز کام کر رہے ہیں۔",
          "reading": "Hamaare mulk ke scientists aur engineers mulki taraqqi ke liye jadeed technology par shab-o-roz kaam kar rahe hain. [həm-aːreː mʊlk keː saːɪnsd̪aːn ɔːr ɪndʒiːnɪjərz mʊlkiː t̪ərəqːiː keː lɪjeː dʒəd̪iːd̪ ʈɛknaːlədʒiː pər ʃəb-oː-roːz kaːm kər rəɦeː hɛ̃ː] (huh-mah-RAY MOOLK kay scientists owr engineers mool-KEE tuh-ruhq-QEE kay lee-AY juh-DEED technology puhr SHUHB-oh-ROHZ KAHM kuhr ruh-HAY hyhn)",
          "translation": "The scientists and engineers of our country are working day and night on modern technology for national progress."
        },
        {
          "target": "کیا آپ دیکھ رہے ہیں کہ پوری قوم کس جذبے اور اتحاد کے ساتھ ترقی کی منزلوں کی طرف بڑھ رہی ہے؟",
          "reading": "Kya aap dekh rahe hain ke poori qaum kis jazbe aur ittehaad ke saath taraqqi ki manzilon ki taraf barh rahi hai? [kjaː aːp d̪eːkʰ rəɦeː hɛ̃ː kɪ puːriː qɔːm kɪs dʒəzbeː ɔːr ɪt̪ːɪhaːd̪ keː saːt̪ʰ t̪ərəqːiː kiː mənzɪlõː kiː t̪ərəf bəɽʱ rəɦiː hɛː] (KYAH AHP daykh ruh-HAY hyhn kay POO-ree QOWM KEES juhz-BAY owr eet-tee-HAHD kay sahth tuh-ruhq-QEE kee muhn-zee-LOHN kee tuh-RUHF buhdh ruh-HEE hy)",
          "translation": "Do you see with what spirit and unity the entire nation is advancing toward destinations of progress?"
        }
      ],
      "mnemonics": [
        "جامع منظر کشی: پرندے چہچہا رہے ہیں، کرنیں بکھر رہی ہیں، قوم آگے بڑھ رہی ہے!"
      ],
      "culturalNotes": [
        "اردو کی صحافتی رپورٹنگ اور ادبی افسانوں میں رواں صورتحال کو زندہ پیش کرنے کے لیے فعل حال جاری بنیادی اسلوبیاتی ہتھیار ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ادبی منظر کشی کے لیے حال جاری کا کون سا جملہ سب سے فصیح اور متحرک ہے؟",
          "options": [
            "باغ میں رنگ برنگے پھول مسکرا رہے ہیں اور تتلیاں اڑ رہی ہیں (Flowers are smiling and butterflies are flying - Vivid figurative continuous syntax)",
            "پھول اڑتا ہے اور تتلی مسکراتا ہے (بے معنی)",
            "پھول کھلیں گے (مستقبل)",
            "پھول سوکھ گیا تھا (ماضی)"
          ],
          "answerIndex": 0,
          "explanation": "«باغ میں رنگ برنگے پھول مسکرا رہے ہیں اور تتلیاں اڑ رہی ہیں» حال جاری کی خوبصورت منظر کشی ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "حال مطلق اور حال جاری کے باہمی فرق کی درست وضاحت کیا ہے؟",
          "options": [
            "حال مطلق عادت کو ظاہر کرتا ہے جبکہ حال جاری اس وقت کے وقتی عمل کو (Habitual vs. currently ongoing action)",
            "دونوں میں کوئی فرق نہیں",
            "حال جاری صرف پرانے زمانے کے لیے ہے",
            "حال مطلق میں فعل نہیں ہوتا"
          ],
          "answerIndex": 0,
          "explanation": "حال مطلق عادات و معمولات کو ظاہر کرتا ہے جبکہ حال جاری لمحۂ گفتگو میں جاری عمل کو۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل حال جاری کے جامع سمیکن (Grand Synthesis & Imagery) کا شاہکار جملہ پہچانیے:",
          "options": [
            "آسمان پر کالے بادل چھا رہے ہیں، ٹھنڈی ہوائیں چل رہی ہیں اور رحمت کی بارش برس رہی ہے جس سے ہر چہرہ کھل اٹھا ہے۔ (Dark clouds are gathering across the sky [chaa rahe hain], cool breezes are blowing [chal rahi hain], and rains of mercy are falling [baras rahi hai].)",
            "آسمان پر بادل روتا تھا اور پانی بھاگتا ہے۔",
            "حال جاری صرف خواب میں لکھا جاتا ہے۔",
            "تمام بادل پانی نہیں پیتے تھے ہمیشہ۔"
          ],
          "answerIndex": 0,
          "explanation": "«آسمان پر کالے بادل چھا رہے ہیں، ٹھنڈی ہوائیں چل رہی ہیں اور رحمت کی بارش برس رہی ہے...» حال جاری کی فصیح اور مکمل منظر کشی ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u6-l1": {
    "id": "ur-u6-l1",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 1,
    "title": "فعل ماضی مطلق لازم اور متعدی کی تقسیم (Intransitive vs. Transitive Simple Past)",
    "level": "A2",
    "objective": "فعل لازم (آنا، جانا، سونا، گرنا) میں بغیر 'نے' کے ماضی مطلق کی گردان اور فاعل کے مطابق مطابقت میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل ماضی مطلق لازم (Intransitive Simple Past) کے اصول:\n\n1. **ماضی مطلق کا مفہوم**:\n   - وہ فعل جو گزشتہ زمانے میں کسی کام کے واقع ہونے کو بغیر کسی امدادی فعل کے بیان کرے (جیسے: آیا، گئی، سوئے)۔\n\n2. **فعل لازم کی گردان (بغیر 'نے')**:\n   - فعل لازم (Intransitive) وہ فعل ہے جس کو مفعول کی ضرورت نہیں ہوتی (جیسے: آنا، جانا، سونا، بیٹھنا، ہنسنا، گرنا، پہنچنا)؛\n   - **فعل لازم میں فاعل کے ساتھ کبھی 'نے' نہیں آتا** اور فعل ہمیشہ **فاعل** کے مطابق بدلتا ہے:\n     - مذکر واحد: «احمد **آیا**»، «لڑکا **سو گیا**»؛\n     - مؤنث واحد: «فاطمہ **آئی**»، «لڑکی **بیٹھ گئی**»؛\n     - مذکر جمع / تعظیمی: «مہمان **آئے**»، «والد صاحب **تشریف لائے**»؛\n     - مؤنث جمع: «لڑکیاں **آئیں**»۔*",
      "examples": [
        {
          "target": "ہمارے عزیز مہمان وقت پر ائیرپورٹ پہنچے اور اپنے ہوٹل چلے گئے۔",
          "reading": "Hamaare azeez mehmaan waqt par airport pohanchay aur apne hotel chalay gaye. [həm-aːreː əziːz mɛɦmaːn ʋəqt̪ pər eːrpɔːrʈ pɔɦʊntʃeː ɔːr əpneː hoːʈəl tʃəleː ɡəjeː] (huh-mah-RAY uh-ZEEZ muhh-MAHN VUHKT puhr airport poh-hoon-CHAY owr uhp-NAY hotel chuh-LAY guh-YAY)",
          "translation": "Our dear guests arrived at the airport on time and went to their hotel."
        },
        {
          "target": "محترمہ فاطمہ صبح سویرے اپنے دفتر گئیں اور وہاں تمام انتظامی امور نمٹائے۔",
          "reading": "Mohtarma Fatima subah sawere apne daftar gayeen aur wahaan tamaam intizaami umoor nimtaaye. [moːɦt̪ərmaː faːt̪ɪmaː sʊbəh səʋeːreː əpneː d̪əft̪ər ɡəĩː ɔːr ʋəhaː̃ t̪əmaːm ɪnt̪ɪzaːmiː ʊmuːr nɪmʈaːjeː] (moh-tuh-RUH-mah fah-tee-MAH SOO-buh suh-VAY-ray uhp-NAY duhf-TUHR guh-YEEN owr vuh-HAHN tuh-MAHM een-tee-zah-MEE oo-MOOR neem-TAH-yay)",
          "translation": "Respected Fatima went to her office early in the morning and settled all administrative matters there."
        },
        {
          "target": "ننھا بچہ پارک میں دوڑتے ہوئے پھسل کر گرا لیکن فوراً مسکرا کر اٹھ کھڑا ہوا۔",
          "reading": "Nannha bachcha park mein daurtay hue phisal kar gira lekin fauran muskura kar uth khada hua. [nənːɦaː bətʃːaː paːrk mẽː d̪ɔːɽt̪eː hʊeː pʰɪsəl kər ɡɪraː leːkɪn fɔːrən mʊskʊraː kər ʊʈʰ kʰəɽaː hʊaː] (nuhn-NHAH buhch-CHAH park mayn dowdh-TAY hoo-AY fee-SUHL kuhr GEE-rah lay-KEEN FOW-ruhn moos-koo-RAH kuhr OOTH khuh-DAH hoo-AH)",
          "translation": "The little child slipped and fell while running in the park, but immediately smiled and stood up."
        }
      ],
      "mnemonics": [
        "ماضی لازم: آنا/جانا/سونا -> نے نہیں آتا! (احمد آیا، فاطمہ گئی، مہمان آئے)!"
      ],
      "culturalNotes": [
        "اردو میں 'وہ گیا نے' یا 'احمد نے ہنسا' کہنا انتہائی نامانوس اور فاش غلطی ہے؛ فعل لازم ہمیشہ علامتِ نے سے پاک رہتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مؤنث واحد فاعل «عائشہ» کے ساتھ فعل لازم «جانا» کا ماضی مطلق کیا ہوگا؟",
          "options": [
            "گئی (Gayi - Irregular feminine singular past of intransitive verb jaana)",
            "گیا (مذکر صیغہ)",
            "گئیں (جمع صیغہ)",
            "جاتی ہے (حال مطلق)"
          ],
          "answerIndex": 0,
          "explanation": "فعل لازم 'جانا' کی مؤنث واحد ماضی شکل «گئی» ہے: «عائشہ گئی»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "فعل لازم «آنا» کے ساتھ کون سا جملہ نحوی طور پر بالکل درست ہے؟",
          "options": [
            "والد صاحب تشریف لائے (Father arrived - Respectful plural past of intransitive verb without 'ne')",
            "والد صاحب نے تشریف لائے (غلط استعمال نے)",
            "والد صاحب نے آیا (فاش نحوی غلطی)",
            "والد صاحب آتا ہے (حال)"
          ],
          "answerIndex": 0,
          "explanation": "فعل لازم میں 'نے' نہیں آتا، لہٰذا «والد صاحب تشریف لائے» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل ماضی مطلق لازم (Intransitive Past Tense) کا درست جملہ پہچانیے:",
          "options": [
            "شام ہوتے ہی تمام پرندے اپنے گھونسلوں میں واپس لوٹ آئے اور درختوں پر بیٹھ گئے۔ (As evening fell, all birds returned to their nests [waapas laut aaye] and sat upon the trees.)",
            "پرندوں نے گھونسلوں میں واپس لوٹا۔",
            "ماضی لازم میں ہمیشہ نے لگانا فرض ہے۔",
            "لوٹ آئے کا مطلب صرف پیسہ لوٹنا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«شام ہوتے ہی تمام پرندے اپنے گھونسلوں میں واپس لوٹ آئے اور درختوں پر بیٹھ گئے۔» ماضی لازم کا مکمل اور فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u6-l2": {
    "id": "ur-u6-l2",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 2,
    "title": "علامتِ فاعل 'نے' اور مفعول کے مطابق فعل کی مطابقت (Ergative 'Ne' & Object Agreement)",
    "level": "A2",
    "objective": "ماضی متعدی میں فاعل کے ساتھ 'نے' کا لازمی الحاق اور فعل کا فاعل کے بجائے مفعول کی جنس و تعداد کے مطابق بدلنا سمجھنا۔",
    "presentation": {
      "explanation": "ماضی متعدی اور علامتِ فاعل «نے» کا سنہری قاعدہ (Ergative Case Rule):\n\n1. **فاعل کے ساتھ 'نے' کا الحاق**:\n   - جب فعل متعدی (Transitive) ہو اور ماضی مطلق میں آئے تو فاعل کے بعد لازماً «**نے**» لگایا جاتا ہے۔\n\n2. **مفعول کے مطابق فعل کی مطابقت (Object-Verb Concord)**:\n   - 'نے' لگنے کے بعد **فعل فاعل کے تابع نہیں رہتا بلکہ مفعول کی جنس اور تعداد کے مطابق بدلتا ہے**:\n     - «احمد نے **کتاب** (مؤنث) **پڑھی**» (فاعل مذکر ہے لیکن کتاب مؤنث ہونے کی وجہ سے 'پڑھی' آیا)؛\n     - «فاطمہ نے **خط** (مذکر) **لکھا**» (فاعل مؤنث ہے لیکن خط مذکر ہونے کی وجہ سے 'لکھا' آیا)؛\n     - «استاد نے **کتابیں** (مؤنث جمع) **خریدیں**»؛\n     - «لڑکوں نے **سیب** (مذکر جمع) **کھائے**»۔*",
      "examples": [
        {
          "target": "احمد نے کتب خانے سے ایک انتہائی معلوماتی اور قیمتی کتاب خریدی۔",
          "reading": "Ahmad ne kutub-khaane se ek intihaai ma'loomaati aur qeemti kitaab khareedi. [əɦməd̪ neː kʊt̪ʊb-xaːneː seː eːk ɪnt̪ɪhaːiː mʌʔluːmaːt̪iː ɔːr qiːmt̪iː kɪt̪aːb xəriːd̪iː] (UH-muhd nay koo-toob-khah-NAY say AYK een-tee-HAH-ee mah-loo-MAH-tee owr QEEM-tee kee-TAHB khuh-REE-dee)",
          "translation": "Ahmad bought an extremely informative and valuable book [feminine object] from the library."
        },
        {
          "target": "فاطمہ نے اپنے والد محترم کے نام ایک طویل اور پرتاثیر خط لکھا۔",
          "reading": "Fatima ne apne waalid-e-mohtaram ke naam ek taweel aur pur-taaseer khatt likha. [faːt̪ɪmaː neː əpneː ʋaːlɪd̪-eː-moːɦt̪ərəm keː naːm eːk t̪əʋiːl ɔːr pʊr-t̪aːsiːr xət̪ː lɪkʰaː] (fah-tee-MAH nay uhp-NAY vah-LEED-ay-moh-tuh-RUHM kay NAHM AYK tuh-VEEL owr poor-tah-SEER KHUHTT leekh-KHAH)",
          "translation": "Fatima wrote a long and moving letter [masculine object] addressed to her respected father."
        },
        {
          "target": "طلبہ نے امتحانات کے تمام مشکل سوالات انتہائی خوش اسلوبی سے حل کیے۔",
          "reading": "Talaba ne imtehaanaat ke tamaam mushkil sawaalaat intihaai khush-usloobi se hal kiye. [t̪ələbaː neː ɪmt̪ɪhaːnaːt̪ keː t̪əmaːm mʊʃkɪl səʋaːlaːt̪ ɪnt̪ɪhaːiː xʊʃ-ʊsluːbiː seː həl kɪjeː] (tuh-luh-BAH nay eem-tuh-hah-NAHT kay tuh-MAHM moosh-KEEL suh-vah-LAHT een-tee-HAH-ee khoosh-oos-LOO-bee say HUHL kee-YAY)",
          "translation": "The students solved all difficult questions of the examinations with great proficiency."
        }
      ],
      "mnemonics": [
        "ماضی متعدی سنہری کلیہ: فاعل + نے -> فعل مفعول کا غلام ہے! (احمد نے کتاب پڑھی، فاطمہ نے خط لکھا)!"
      ],
      "culturalNotes": [
        "اردو اور ہندی کا یہ ارگیٹو نظام دنیا کی دیگر زبانوں کے مقابلے میں منفرد ہے؛ اس پر عبور حاصل کرنا فصیح اردو کی اولین ضمانت ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جملے «احمد نے چائے (مؤنث) ...» میں درست فعل کیا آئے گا؟",
          "options": [
            "پی (Pee - Feminine singular past verb agreeing with feminine object chaaye)",
            "پیا (مذکر صیغہ)",
            "پیے (جمع مذکر)",
            "پیتا ہے (حال)"
          ],
          "answerIndex": 0,
          "explanation": "مفعول 'چائے' مؤنث ہے، اس لیے فعل «پی» آئے گا: «احمد نے چائے پی»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "جملے «عائشہ نے سبق (مذکر) ...» میں درست فعل کیا ہوگا؟",
          "options": [
            "پڑھا (Parha - Masculine singular past verb agreeing with masculine object sabaq)",
            "پڑھی (تانیث فاعل سے مغالطہ)",
            "پڑھے (جمع صیغہ)",
            "پڑھتی ہے (حال)"
          ],
          "answerIndex": 0,
          "explanation": "مفعول 'سبق' مذکر ہے، اس لیے فعل «پڑھا» آئے گا: «عائشہ نے سبق پڑھا»۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "علامتِ فاعل 'نے' اور مفعولی مطابقت (Ergative Object Agreement) کا فصیح جملہ پہچانیے:",
          "options": [
            "ہم نے کتب میلے سے چند نایاب کتابیں خریدیں اور استاد محترم کو تحفے میں پیش کیں۔ (We bought several rare books [kitaabein - feminine plural -> khareedeen] from the book fair and presented them as gifts to the respected teacher.)",
            "ہم نے کتاب خریدا اور پیش کیا تھا۔",
            "نے کا مطلب صرف نفی کرنا ہوتا ہے۔",
            "احمد نے عائشہ نے دونوں نے خط لکھی۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہم نے کتب میلے سے چند نایاب کتابیں خریدیں اور استاد محترم کو تحفے میں پیش کیں۔» مفعولی مطابقت کا مکمل اور مستند جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u6-l3": {
    "id": "ur-u6-l3",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 3,
    "title": "بے قاعدہ ماضی افعال (Irregular Past Verb Stems: گیا، کیا، دیا، لیا)",
    "level": "A2",
    "objective": "بے قاعدہ افعال (جانا سے گیا، کرنا سے کیا، دینا سے دیا، لینا سے لیا) کے ماضی صیغوں اور ان کے 'نے' کے ساتھ استعمال میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں بے قاعدہ ماضی افعال (Irregular Past Verbs) کی ساخت:\n\n1. **فعل 'جانا' (لازم — بغیر نے)**:\n   - مذکر واحد: **گیا**؛ مذکر جمع: **گئے**؛ مؤنث واحد: **گئی**؛ مؤنث جمع: **گئیں**۔\n\n2. **افعال متعدی (کرنا، دینا، لینا، پینا — 'نے' کے ساتھ)**:\n   - **کرنا** -> مذکر: **کیا / کیے**؛ مؤنث: **کی / کیں** (جیسے: «اس نے کام **کیا**»، «اس نے بات **کی**»)؛\n   - **دینا** -> مذکر: **دیا / دیے**؛ مؤنث: **دی / دیں** (جیسے: «استاد نے انعام **دیا**»، «استاد نے شاباش **دی**»)؛\n   - **لینا** -> مذکر: **لیا / لیے**؛ مؤنث: **لی / لیں** (جیسے: «ہم نے قلم **لیا**»، «ہم نے اجازت **لی**»)؛\n   - **پینا** -> مذکر: **پیا / پیے**؛ مؤنث: **پی / پئیں**۔*",
      "examples": [
        {
          "target": "استاد محترم نے طلبہ کو امتحانات میں شاندار کامیابی پر مبارکباد دی اور انعامات دیے۔",
          "reading": "Ustaad-e-mohtaram ne talaba ko imtehaanaat mein shaandaar kaamyaabi par mubaarakbaad dee aur inaamaat diye. [ʊst̪aːd̪-eː-moːɦt̪ərəm neː t̪ələbaː koː ɪmt̪ɪhaːnaːt̪ mẽː ʃaːndaːr kaːmjaːbiː pər mʊbaːrəkbaːd̪ d̪iː ɔːr ɪnaːmaːt̪ d̪ɪjeː] (oos-TAHD-ay-moh-tuh-RUHM nay tuh-luh-BAH koh eem-tuh-hah-NAHT mayn shahn-DAHR kahm-yah-BEE puhr moo-bah-ruhk-BAHD DEE owr ee-nah-MAHT dee-YAY)",
          "translation": "The respected teacher congratulated the students on their splendid success in the exams and gave prizes [inaamaat - masculine plural -> diye]."
        },
        {
          "target": "ہم نے اپنے دوست سے علمی موضوع پر تفصیلی گفتگو کی اور اس سے مفید مشورے لیے۔",
          "reading": "Hum ne apne dost se ilmi mauzoo par tafseeli guftagoo kee aur us se mufeed mashwaray liye. [həm neː əpneː d̪oːst̪ seː ɪlmiː mɔːzuːʔ pər t̪əfsiːliː ɡʊft̪əɡuː kiː ɔːr ʊs seː mʊfiːd̪ məʃʋəreː lɪjeː] (HOOM nay uhp-NAY DOHST say EEL-mee mow-ZOO puhr tuhf-see-LEE goof-tuh-GOO KEE owr oos say moo-FEED muhsh-vuh-RAY lee-YAY)",
          "translation": "We held a detailed conversation [guftagoo - feminine -> kee] on an academic topic with our friend and took useful suggestions [mashwaray -> liye]."
        },
        {
          "target": "قافلہ شام کے وقت اپنی منزلِ مقصود پر بحفاظت اور خیریت سے پہنچ گیا۔",
          "reading": "Qaafla shaam ke waqt apni manzil-e-maqsood par ba-hifaazat aur khairiyat se pohanch gaya. [qaːfɪlaː ʃaːm keː ʋəqt̪ əpniː mənzɪl-eː-mʌqsuːd̪ pər bə-hɪfaːzət̪ ɔːr xɛːrɪjət̪ seː pɔɦʊntʃ ɡəjaː] (QAH-fee-lah SHAHM kay VUHKT uhp-NEE muhn-ZEEL-ay-muhq-SOOD puhr buh-hee-FAH-zuht owr khy-ree-YUHT say poh-HOONCH guh-YAH)",
          "translation": "The caravan reached its intended destination safely and securely in the evening."
        }
      ],
      "mnemonics": [
        "بے قاعدہ ماضی: کرنا -> کیا/کی، دینا -> دیا/دی، لینا -> لیا/لی، جانا -> گیا/گئی!"
      ],
      "culturalNotes": [
        "اردو شاعری اور ادبی داستانوں میں بے قاعدہ افعال کی خوش ترکیبی (جیسے: 'دل دیا'، 'جان لی') کلام میں بلاغت اور نغمگی پیدا کرتی ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مؤنث اسم «بات» کے ساتھ فعل «کرنا» کا ماضی مطلق کیا ہوگا؟",
          "options": [
            "کی (Kee - Feminine past of irregular verb karna agreeing with feminine object baat)",
            "کیا (مذکر صیغہ)",
            "کیے (جمع صیغہ)",
            "کرتا تھا (ماضی استمراری)"
          ],
          "answerIndex": 0,
          "explanation": "لفظ 'بات' مؤنث ہے، اس لیے فعل کی درست شکل «کی» ہے: «اس نے بات کی»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مذکر جمع اسم «پیسے» کے ساتھ فعل «دینا» کی ماضی شکل کیا بنے گی؟",
          "options": [
            "دیے (Diye - Masculine plural past of irregular verb dena)",
            "دیا (واحد مذکر)",
            "دی (واحد مؤنث)",
            "دیں (مؤنث جمع)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر جمع اسم 'پیسے' کے ساتھ فعل «دیے» آئے گا: «اس نے پیسے دیے»۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "بے قاعدہ ماضی افعال (Irregular Past Verbs) کا جامع اور درست جملہ پہچانیے:",
          "options": [
            "انہوں نے غریبوں کی دل کھول کر مالی مدد کی اور ان کے بچوں کو تعلیمی وظائف دیے۔ (They generously helped [madad kee - feminine] the poor financially and gave educational scholarships [wazaaif diye - masculine plural] to their children.)",
            "انہوں نے مدد کیا اور وظائف دیا تھا۔",
            "بے قاعدہ کا مطلب بے وقوف افعال ہوتا ہے۔",
            "گیا اور کیا کو صرف الٹا پڑھنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«انہوں نے غریبوں کی دل کھول کر مالی مدد کی اور ان کے بچوں کو تعلیمی وظائف دیے۔» بے قاعدہ ماضی افعال کا بالکل فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u6-l4": {
    "id": "ur-u6-l4",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 4,
    "title": "ماضی متعدی میں 'کو' کا استعمال اور غیر شخصی فعل (Past Transitive with 'Ko')",
    "level": "A2",
    "objective": "جب جملے میں فاعل کے ساتھ 'نے' اور مفعول کے ساتھ 'کو' دونوں آئیں تو فعل کا ہمیشہ غیر شخصی مذکر واحد (دیکھا، بلایا) رہنا سمجھنا۔",
    "presentation": {
      "explanation": "ماضی متعدی میں پرسرگ «کو» کا سنہری غیر شخصی قاعدہ (Neutral Impersonal Rule):\n\n1. **'نے' اور 'کو' کا ملاپ**:\n   - جب جملے میں فاعل کے بعد «**نے**» اور مفعول کے بعد «**کو**» دونوں موجود ہوں، تو فعل نہ فاعل کے مطابق رہتا ہے اور نہ مفعول کے مطابق!;\n   - ایسی صورت میں **فعل ہمیشہ غیر شخصی مذکر واحد (Masculine Singular - Ending in Alif)** رہتا ہے۔\n\n2. **مثالیں اور تقابل**:\n   - «احمد نے **لڑکی کو دیکھا**» (چاہے مفعول لڑکی مؤنث ہے، 'کو' کی وجہ سے فعل 'دیکھا' آئے گا، نہ کہ 'دیکھی')؛\n   - «لڑکیوں نے **استادوں کو بلایا**» (چاہے مفعول جمع ہے، فعل 'بلایا' آئے گا، نہ کہ 'بلائے')؛\n   - «پولیس نے **چوروں کو پکڑا**»۔*",
      "examples": [
        {
          "target": "احمد نے کمرے میں موجود تمام لڑکیوں کو ادب کے ساتھ سلام کیا۔",
          "reading": "Ahmad ne kamre mein maujood tamaam ladkiyon ko adab ke saath salaam kiya. [əɦməd̪ neː kəmreː mẽː mɔːdʒuːd̪ t̪əmaːm ləɽkɪjõː koː əd̪əb keː saːt̪ʰ səlaːm kɪjaː] (UH-muhd nay kuhm-RAY mayn mow-JOOD tuh-MAHM luhd-kee-YOHN koh UH-duhb kay sahth sah-LAHM kee-YAH)",
          "translation": "Ahmad greeted all the girls present in the room with polite respect [neutral masculine verb 'kiya']."
        },
        {
          "target": "عدالت نے دونوں مجرموں کو کڑی سزا سنائی اور انصاف کے تقاضے پورے کیے۔",
          "reading": "Adaalat ne donon mujrimon ko kadi saza sunaai aur insaaf ke taqaazay pooray kiye. [əd̪aːlət̪ neː d̪oːnõː mʊdʒrɪmõː koː kəɽiː səzaː sʊnaːiː ɔːr ɪnsaːf keː t̪əqaːzeː puːreː kɪjeː] (uh-dah-LUHT nay DOH-nohn mooj-ree-MOHN koh kuh-DEE suh-ZAH soo-nah-EE owr een-SAHF kay tuh-qah-ZAY poo-RAY kee-YAY)",
          "translation": "The court announced strict punishment to both criminals and fulfilled the demands of justice."
        },
        {
          "target": "ہم نے اپنے تمام معزز اساتذہ اور مہمانوں کو سالانہ تقریب میں مدعو کیا۔",
          "reading": "Hum ne apne tamaam mohtaram asaatiza aur mehmaanon ko saalaana taqreeb mein mad'oo kiya. [həm neː əpneː t̪əmaːm moːɦt̪ərəm əsaːt̪ɪzaː ɔːr mɛɦmaːnõː koː saːlaːnəh t̪əqriːb mẽː mʌd̪ʔuː kɪjaː] (HOOM nay uhp-NAY tuh-MAHM moh-tuh-RUHM uh-sah-tee-ZAH owr muhh-mah-NOHN koh sah-lah-NUH tuhq-REEB mayn muhd-OO kee-YAH)",
          "translation": "We invited all our respected teachers and guests to the annual ceremony."
        }
      ],
      "mnemonics": [
        "نے + کو کا کلیہ: فاعل نے + مفعول کو = فعل ہمیشہ مذکر واحد (دیکھا، بلایا، پکڑا)!"
      ],
      "culturalNotes": [
        "جب کسی جاندار مفعول کو خاص یا معین کرنا مقصود ہو تو 'کو' کا استعمال ناگزیر ہو جاتا ہے، جس سے فعل غیر شخصی حالت اختیار کر لیتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "جملے «علی نے فاطمہ کو ...» میں 'کو' کی موجودگی کی وجہ سے فعل «دیکھنا» کی کون سی شکل آئے گی؟",
          "options": [
            "دیکھا (Dekha - Neutral masculine singular verb form blocked by postposition 'ko')",
            "دیکھی (تانیث کی غلطی)",
            "دیکھے (جمع کی غلطی)",
            "دیکھتی تھی (ماضی استمراری)"
          ],
          "answerIndex": 0,
          "explanation": "جب مفعول کے بعد 'کو' ہو تو فعل لازماً مذکر واحد «دیکھا» ہوگا: «علی نے فاطمہ کو دیکھا»۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "جملے «ہم نے اپنے اساتذہ کو ...» میں درست غیر شخصی فعل منتخب کیجیے:",
          "options": [
            "بلایا (Bulaaya - Impersonal masculine singular verb with object marked by 'ko')",
            "بلائے (جمع کی غلطی)",
            "بلائی (تانیث غلطی)",
            "بلاتے ہیں (حال)"
          ],
          "answerIndex": 0,
          "explanation": "'کو' کی موجودگی کی وجہ سے فعل ہمیشہ مذکر واحد «بلایا» رہے گا۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ماضی متعدی میں 'کو' اور غیر شخصی فعل (Past Transitive with 'Ko') کا فصیح جملہ پہچانیے:",
          "options": [
            "صدرِ محفل نے تمام معزز مہمانوں اور مندوبین کو اسٹیج پر بلایا اور انعامات تقسیم کیے۔ (The president of the gathering called [bulaaya - neutral masculine singular] all respected guests and delegates to the stage and distributed prizes.)",
            "صدر نے تمام مہمانوں کو بلائے تھے اور روئی۔",
            "نے اور کو ایک ساتھ آنا اردو میں ممنوع ہے۔",
            "بلایا کا مطلب صرف بلی کی آواز نکالنا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«صدرِ محفل نے تمام معزز مہمانوں اور مندوبین کو اسٹیج پر بلایا اور انعامات تقسیم کیے۔» نے اور کو کے غیر شخصی قاعدے کا مکمل اور مستند جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u6-l5": {
    "id": "ur-u6-l5",
    "subject": "urdu",
    "unit": 6,
    "lessonNumber": 5,
    "title": "فعل ماضی مطلق اور 'نے' کا جامع سمیکن و ادبی انطباق (Past Ergative Grand Synthesis)",
    "level": "A2",
    "objective": "لازم و متعدی کا موازنہ، ارگیٹو 'نے'، مفعولی مطابقت اور غیر شخصی 'کو' کا کثیر الجملاتی ادبی و تاریخی داستان سرائی میں مکمل انطباق کرنا۔",
    "presentation": {
      "explanation": "فعل ماضی مطلق اور علامتِ 'نے' کا عظیم الشان سمیکن (Grand Synthesis):\n\n1. **لازم اور متعدی کی کامل تفریق**:\n   - لازم: «قائدِ اعظم تشریف **لائے**» (بغیر نے)؛\n   - متعدی: «قائدِ اعظم نے تاریخ ساز خطاب **فرمایا**» (نے کے ساتھ)۔\n\n2. **مفعولی مطابقت بمقابلہ غیر شخصی صیغہ**:\n   - بغیر کو: «ہم نے نئی **کتابیں خریدیں**»؛\n   - مع کو: «ہم نے تمام **کتابوں کو الماری میں رکھا**»۔\n\n3. **ادبی و تاریخی داستان سرائی**:\n   - اردو کی کلاسیکی تاریخ اور داستانوں کا پورا حسن ماضی مطلق کے ان متوازن قواعد پر منحصر ہے۔*",
      "examples": [
        {
          "target": "قائدِ اعظم نے شب و روز انتھک محنت کی، قوم کو بیدار کیا اور ایک آزاد و خودمختار وطن حاصل کیا۔",
          "reading": "Quaid-e-Azam ne shab-o-roz anthak mehnat kee, qaum ko bedaar kiya aur ek aazaad-o-khud-mukhtaar watan haasil kiya. [qaːʔɪd̪-eː-aːzəm neː ʃəb-oː-roːz ənt̪ʰək mɛɦnət̪ kiː qɔːm koː beːd̪aːr kɪjaː ɔːr eːk aːzaːd̪-oː-xʊd̪mʊxt̪aːr ʋət̪ən haːsɪl kɪjaː] (QAH-eed-ay-AH-zuhm nay SHUHB-oh-ROHZ uhn-THUHK muhh-NUHT KEE, QOWM koh bay-DAHR kee-YAH owr AYK ah-ZAHD-oh-khood-mookh-TAHR vuh-TUHN hah-SEEL kee-YAH)",
          "translation": "Quaid-e-Azam worked tirelessly night and day [mehnat kee], awakened the nation [qaum ko bedaar kiya], and achieved an independent and sovereign homeland [watan haasil kiya]."
        },
        {
          "target": "ہم نے صبح سویرے سفر کا آغاز کیا، راستے میں خوبصورت مناظر دیکھے اور شام کو خیریت سے منزل پر پہنچ گئے۔",
          "reading": "Hum ne subah sawere safar ka aaghaaz kiya, raaste mein khoobsurat manaazir dekhay aur shaam ko khairiyat se manzil par pohanch gaye. [həm neː sʊbəh səʋeːreː səfər kaː aːɣaːz kɪjaː raːst̪eː mẽː xuːbsuːrət̪ mənaːzɪr d̪eːkʰeː ɔːr ʃaːm koː xɛːrɪjət̪ seː mənzɪl pər pɔɦʊntʃ ɡəjeː] (HOOM nay SOO-buh suh-VAY-ray suh-FUHR kah ah-GHAHZ kee-YAH, rah-STAY mayn khoob-SOO-ruht muh-nah-ZEER day-KHAY owr SHAHM koh khy-ree-YUHT say muhn-ZEEL puhr poh-HOONCH guh-YAY)",
          "translation": "We began our journey early in the morning [aaghaaz kiya], saw beautiful landscapes along the way [manaazir dekhay], and reached the destination safely in the evening [pohanch gaye - intransitive]."
        },
        {
          "target": "اہلِ علم نے کتب خانے میں نادر مخطوطات کا مطالعہ کیا اور ان پر علمی تبصرے لکھے۔",
          "reading": "Ahl-e-ilm ne kutub-khaane mein naadir makhtootaat ka mutaala'a kiya aur un par ilmi tabsiray likhay. [əɦl-eː-ɪlm neː kʊt̪ʊb-xaːneː mẽː naːd̪ɪr məxtuːt̪aːt̪ kaː mʊt̪aːlɪʔaː kɪjaː ɔːr ʊn pər ɪlmiː t̪əbsɪreː lɪkʰeː] (uhhl-ay-EELM nay koo-toob-khah-NAY mayn NAH-deer muhkh-too-TAHT kah moo-tah-luh-AH kee-YAH owr OON puhr EEL-mee tuhb-see-RAY leekh-KHAY)",
          "translation": "Scholars studied rare manuscripts in the library [mutaala'a kiya] and wrote scholarly commentaries upon them [tabsiray likhay]."
        }
      ],
      "mnemonics": [
        "ماضی سمیکن: سفر کا آغاز کیا (متعدی)، مناظر دیکھے (مفعولی مطابقت)، منزل پر پہنچ گئے (لازم)!"
      ],
      "culturalNotes": [
        "اردو کی تاریخی تحریروں اور سوانح عمریوں میں ماضی مطلق کے یہ مربوط اسالیب تحریر کو تاریخی وقار اور ادبی دلکشی بخشتے ہیں۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "لازم اور متعدی ماضی کے ملاپ کا کون سا جملہ بالکل فصیح ہے؟",
          "options": [
            "وہ لاہور گئے اور انہوں نے تاریخی قلعہ دیکھا (He went to Lahore [intransitive] and saw the historic fort [transitive])",
            "انہوں نے لاہور گئے اور قلعہ دیکھی (فاش غلطیاں)",
            "وہ نے قلعہ دیکھے (غلط ارگیٹو)",
            "وہ قلعہ دیکھا تھا (ماضی بعید)"
          ],
          "answerIndex": 0,
          "explanation": "«وہ لاہور گئے» (لازم بغیر نے) اور «انہوں نے قلعہ دیکھا» (متعدی مع نے) کا امتزاج بالکل درست ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ماضی مطلق میں مفعولی مطابقت کا بنیادی اصول کیا ہے؟",
          "options": [
            "فاعل کے ساتھ 'نے' ہو اور مفعول کے بعد 'کو' نہ ہو تو فعل مفعول کے مطابق ہوگا (Verb agrees with unmarked object in ergative past)",
            "فعل ہمیشہ فاعل کے مطابق رہے گا",
            "فعل ہمیشہ مؤنث ہوگا",
            "کوئی اصول نہیں ہے"
          ],
          "answerIndex": 0,
          "explanation": "جب فاعل کے ساتھ 'نے' ہو اور مفعول بغیر 'کو' کے ہو تو فعل مفعول کی تذکیر و تانیث کے مطابق بدلتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل ماضی مطلق اور 'نے' کے جامع سمیکن (Past Ergative Grand Synthesis) کا شاہکار جملہ پہچانیے:",
          "options": [
            "ہماری ٹیم نے فائنل میچ میں شاندار کارکردگی دکھائی، حریف ٹیم کو شکست دی اور فتح کی سنہری ٹرافی اپنے نام کی۔ (Our team showed splendid performance [kaarkardagi dikhaai - feminine], defeated the rival team [hareef team ko shikast dee], and claimed the golden trophy of victory [trophy apne naam kee].)",
            "ہماری ٹیم نے میچ جیتا اور سب بھاگ گئی۔",
            "ماضی مطلق میں صرف گھوڑے کی سواری لکھی جاتی ہے۔",
            "شاندار کارکردگی دکھایا اور ٹرافی جیتی تھا غلط ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہماری ٹیم نے فائنل میچ میں شاندار کارکردگی دکھائی، حریف ٹیم کو شکست دی اور فتح کی سنہری ٹرافی اپنے نام کی۔» ماضی مطلق اور نے کے تمام قواعد کا شاہکار اور فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u7-l1": {
    "id": "ur-u7-l1",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 1,
    "title": "فعل ماضی استمراری کی ساخت اور گردان (Past Continuous Tense: رہا تھا / رہے تھے)",
    "level": "A2",
    "objective": "ماضی میں جاری کیفیت (مادہ فعل + رہا تھا/رہی تھی/رہے تھے/رہی تھیں) اور فاعل کے مطابق مطابقت میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل ماضی استمراری / جاری (Past Continuous Tense) کی ساخت:\n\n1. **ماضی استمراری کا مفہوم**:\n   - ماضی کے کسی معین وقت میں جاری رہنے والے عمل (In-progress past action) کو بیان کرنے کے لیے مستعمل ہے۔\n\n2. **فعل کی ساخت**:\n   - **مادہ فعل (Verb Stem)** + **رہا / رہی / رہے / رہیں** + **تھا / تھی / تھے / تھیں**:\n     - مذکر واحد: «احمد کتاب پڑھ **رہا تھا**»؛\n     - مذکر جمع / تعظیمی: «طلبہ مطالعہ کر **رہے تھے**»، «استاد صاحب پڑھا **رہے تھے**»؛\n     - مؤنث واحد: «فاطمہ کھانا پکا **رہی تھی**»؛\n     - مؤنث جمع: «لڑکیاں گیت گا **رہی تھیں**»۔*",
      "examples": [
        {
          "target": "جب میں لائبریری میں داخل ہوا، تو تمام طلبہ خاموشی سے مطالعہ کر رہے تھے۔",
          "reading": "Jab main library mein daakhil hua, to tamaam talaba khaamoshi se mutaala'a kar rahe thay. [dʒəb mɛ̃ː laːɪbreːriː mẽː d̪aːxɪl hʊaː t̪oː t̪əmaːm t̪ələbaː xaːmoːʃiː seː mʊt̪aːlɪʔaː kər rəɦeː t̪ʰeː] (JUHB myhn library mayn DAH-kheel hoo-AH, toh tuh-MAHM tuh-luh-BAH khah-moh-SHEE say moo-tah-luh-AH kuhr ruh-HAY THAY)",
          "translation": "When I entered the library, all the students were studying quietly."
        },
        {
          "target": "رات کے وقت آسمان پر ستارے چمک رہے تھے اور ہلکی ہلکی خنک ہوا چل رہی تھی۔",
          "reading": "Raat ke waqt aasmaan par sitaare chamak rahe thay aur halki halki khunak hawa chal rahi thee. [raːt̪ keː ʋəqt̪ aːsmaːn pər sɪt̪aːreː tʃəmək rəɦeː t̪ʰeː ɔːr həlkiː həlkiː xʊnək həʋaː tʃəl rəɦiː t̪ʰiː] (RAHT kay VUHKT ahs-MAHN puhr see-tah-RAY chuh-MUHK ruh-HAY THAY owr HUHL-kee HUHL-kee khoo-NUHK huh-VAH chuhl ruh-HEE THEE)",
          "translation": "At night, stars were shining in the sky and a gentle, cool breeze was blowing."
        },
        {
          "target": "ہم اپنے پرانے دوستوں کے ساتھ ماضی کے خوشگوار واقعات یاد کر رہے تھے۔",
          "reading": "Hum apne puraane doston ke saath maazi ke khushgawaar waaqi'aat yaad kar rahe thay. [həm əpneː pʊraːneː d̪oːst̪õː keː saːt̪ʰ maːziː keː xʊʃɡəʋaːr ʋaːqɪʔaːt̪ jaːd̪ kər rəɦeː t̪ʰeː] (HOOM uhp-NAY poo-rah-NAY dohs-TOHN kay sahth MAH-zee kay khoosh-guh-VAHR vah-qee-AHT YAHD kuhr ruh-HAY THAY)",
          "translation": "We were reminiscing about pleasant past events with our old friends."
        }
      ],
      "mnemonics": [
        "ماضی استمراری فارمولا: مادہ فعل + رہا/رہی/رہے + تھا/تھی/تھے (پڑھ رہا تھا، گا رہی تھیں)!"
      ],
      "culturalNotes": [
        "اردو کے کلاسیکی افسانوں اور ناولوں کے آغاز میں منظر قائم کرنے کے لیے ماضی استمراری کلیدی کردار ادا کرتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مؤنث جمع فاعل «طالبات» کے ساتھ ماضی استمراری کا درست صیغہ کیا ہوگا؟",
          "options": [
            "لکھ رہی تھیں (Likh rahi theen - Feminine plural past continuous auxiliary concord)",
            "لکھ رہا تھا (مذکر واحد)",
            "لکھ رہے تھے (مذکر جمع)",
            "لکھتی ہیں (حال)"
          ],
          "answerIndex": 0,
          "explanation": "مؤنث جمع کے لیے «لکھ رہی تھیں» فصیح ترین ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مذکر تعظیمی فاعل «استاد محترم» کے ساتھ ماضی استمراری کی صحیح شکل کیا ہے؟",
          "options": [
            "سمجھا رہے تھے (Samjha rahe thay - Respectful masculine past continuous auxiliary)",
            "سمجھا رہا تھا (بے ادبی واحد)",
            "سمجھا رہی تھی (تانیث)",
            "سمجھاتے ہیں (حال)"
          ],
          "answerIndex": 0,
          "explanation": "استاد محترم کے ادب و احترام کے لیے جمع تعظیمی «سمجھا رہے تھے» استعمال ہوتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل ماضی استمراری (Past Continuous Tense) کا مکمل جملہ پہچانیے:",
          "options": [
            "جب قافلہ وادی سے گزر رہا تھا، تو دور پہاڑوں پر سورج کی سنہری کرنیں چمک رہی تھیں۔ (While the caravan was passing through the valley [guzar raha tha], golden rays of the sun were shining [chamak rahi theen] upon the distant mountains.)",
            "قافلہ گزر رہی تھا اور کرنیں چمکتا تھا۔",
            "ماضی استمراری میں صرف ندی میں تیرنا ہوتا ہے۔",
            "رہا تھا کو لفظ کے اوپر لکھنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«جب قافلہ وادی سے گزر رہا تھا، تو دور پہاڑوں پر سورج کی سنہری کرنیں چمک رہی تھیں۔» ماضی استمراری کا جامع اور فصیح جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u7-l2": {
    "id": "ur-u7-l2",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 2,
    "title": "ماضی معطوف و استمراری کا بیانیہ (Past Habitual: کرتا تھا / کرتی تھی)",
    "level": "A2",
    "objective": "ماضی کی مستقل عادات و معمولات (مادہ فعل + تا تھا/تی تھی/تے تھے/تیں تھیں) کے نحوی اسلوب میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل ماضی معطوف / دوامی (Past Habitual Tense) کے قواعد:\n\n1. **ماضی معطوف کا مفہوم**:\n   - ماضی میں باقاعدگی سے دہرائی جانے والی پرانی عادات، معمولات یا کیفیات (Used to do / Would do) کا بیان۔\n\n2. **فعل کی ساخت**:\n   - **مادہ فعل** + **تا / تی / تے / تیں** + **تھا / تھی / تھے / تھیں**:\n     - «ہم بچپن میں شام کو باغ میں **کھیلتے تھے**»؛\n     - «دادی جان ہمیں ہر رات ایک سبق آموز کہانی **سناتی تھیں**»؛\n     - «وہ روزانہ صبح سویرے دریا کے کنارے **ٹہلتا تھا**»۔*",
      "examples": [
        {
          "target": "ہمارے بزرگ ہر شام دالان میں بیٹھ کر ملکی حالات پر سنجیدہ گفتگو کیا کرتے تھے۔",
          "reading": "Hamaare buzurg har shaam daalaan mein baith kar mulki haalaat par sanjeeda guftagoo kiya kartay thay. [həm-aːreː bʊzʊrɡ hər ʃaːm d̪aːlaːn mẽː bɛːʈʰ kər mʊlkiː haːlaːt̪ pər səndʒiːd̪aː ɡʊft̪əɡuː kɪjaː kərteː t̪ʰeː] (huh-mah-RAY boo-ZOORG HUHR SHAHM dah-LAHN mayn BYTH kuhr mool-KEE hah-LAHT puhr suhn-JEE-dah goof-tuh-GOO kee-YAH kuhr-TAY THAY)",
          "translation": "Our elders used to sit in the courtyard every evening holding serious discussions on national affairs."
        },
        {
          "target": "میری والدہ محترمہ سردیوں کی راتوں میں ہمارے لیے گرم اور لذیذ سوپ تیار کرتی تھیں۔",
          "reading": "Meri waalida-e-mohtarma sardiyon ki raaton mein hamaare liye garm aur lazeez soup tayyaar karti theen. [meːriː ʋaːlɪd̪aː-eː-moːɦt̪ərmaː sərdiːjõː kiː raːt̪õː mẽː həm-aːreː lɪjeː ɡərm ɔːr ləziːz suːp t̪əjːaːr kərtiː t̪ʰĩː] (MAY-ree vah-lee-DAH-ay-moh-tuh-RUH-mah suhr-dee-YOHN kee rah-TOHN mayn huh-mah-RAY lee-AY GUHRM owr luh-ZEEZ soup ty-YAHR kuhr-TEE THEEN)",
          "translation": "My respected mother used to prepare hot and delicious soup for us on winter nights."
        },
        {
          "target": "ہم اسکول کے زمانے میں روزانہ صبح پیدل سفر کرتے تھے اور راستے میں پرندوں کو دانہ ڈالتے تھے۔",
          "reading": "Hum school ke zamaane mein rozaana subah paidal safar kartay thay aur raaste mein parindon ko daana daaltay thay. [həm skuːl keː zəmaːneː mẽː roːzaːnəh sʊbəh pɛːd̪əl səfər kərteː t̪ʰeː ɔːr raːst̪eː mẽː pərɪnd̪õː koː d̪aːnaː ɖaːlt̪eː t̪ʰeː] (HOOM school kay zuh-mah-NAY mayn roh-ZAH-nuh SOO-buh py-DUHL suh-FUHR kuhr-TAY THAY owr rah-STAY mayn puh-reen-DOHN koh DAH-nah dahl-TAY THAY)",
          "translation": "During our school days, we used to travel on foot every morning and feed grain to the birds along the way."
        }
      ],
      "mnemonics": [
        "ماضی دوامی: کھیلتا تھا (واحد مذکر)، کھیلتی تھیں (مؤنث تعظیمی)، کھیلتے تھے (جمع)!"
      ],
      "culturalNotes": [
        "اردو آپ بیتیوں (Autobiographies) اور یادداشتوں میں پرانے دور کی یادوں کو قلمبند کرنے کے لیے 'کیا کرتے تھے' کا صیغہ بکثرت برتا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ماضی میں باقاعدہ عادت کو ظاہر کرنے کے لیے کون سا جملہ درست ہے؟",
          "options": [
            "وہ روزانہ کتب خانے جایا کرتا تھا (He used to go to the library daily - Authentic habitual past syntax)",
            "وہ کل گیا تھا (ماضی بعید وقتی)",
            "وہ جا رہا ہے (حال جاری)",
            "وہ جائے گا (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "ماضی کی مستقل عادت کے لیے «جایا کرتا تھا» یا «جاتا تھا» مستعمل ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "محترمہ دادی جان کے لیے ماضی معطوف کا درست تعظیمی صیغہ کیا ہوگا؟",
          "options": [
            "کہانیاں سناتی تھیں (Used to tell stories - Respectful feminine plural habitual past)",
            "کہانی سناتا تھا (مذکر واحد)",
            "کہانی سنائی (ماضی مطلق)",
            "کہانی سنائے گی (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "دادی جان کے لیے تعظیمی تانیث «سناتی تھیں» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ماضی معطوف و دوامی (Past Habitual Narrative) کا فصیح جملہ پہچانیے:",
          "options": [
            "ہمارے محلے کے بزرگ ہر جمعہ کو غریبوں میں کھانا تقسیم کیا کرتے تھے اور یتیموں کی کفالت کرتے تھے۔ (The elders of our neighborhood used to distribute food [taqseem kiya kartay thay] among the poor every Friday and support orphans.)",
            "بزرگ کھانا تقسیم کرتا تھا اور روتی تھیں۔",
            "ماضی معطوف کا مطلب صرف گھڑی کی سوئیاں توڑنا ہے۔",
            "کرتے تھے کو جملے کے شروع میں لکھنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہمارے محلے کے بزرگ ہر جمعہ کو غریبوں میں کھانا تقسیم کیا کرتے تھے اور یتیموں کی کفالت کرتے تھے۔» ماضی معطوف کا بہترین جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u7-l3": {
    "id": "ur-u7-l3",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 3,
    "title": "فعل ماضی بعید اور 'نے' کے ساتھ استعمال (Past Perfect with 'Ne')",
    "level": "A2",
    "objective": "ماضی بعید (ماضی مطلق شکل + تھا/تھی/تھے/تھیں) میں فاعل کے ساتھ 'نے' اور مفعول کے مطابق مطابقت کے اصولوں پر عبور حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل ماضی بعید (Past Perfect Tense) کے قواعد:\n\n1. **ماضی بعید کا مفہوم**:\n   - وہ کام جو ماضی میں بہت پہلے مکمل ہو چکا ہو (Had completed / Had happened)۔\n\n2. **ساخت اور 'نے' کے اصول**:\n   - **فعل لازم (بغیر نے)**: فاعل + ماضی مطلق شکل + **تھا / تھی / تھے / تھیں**:\n     - «وہ پچھلے سال لاہور **گیا تھا**»، «مہمان کل شام **آئے تھے**»؛\n   - **فعل متعدی (نے کے ساتھ — مفعولی مطابقت)**:\n     - «احمد نے ایک **کتاب** (مؤنث) **خریدی تھی**»؛\n     - «فاطمہ نے **خط** (مذکر) **لکھا تھا**»؛\n     - «ہم نے **مکانات** (مذکر جمع) **دیکھے تھے**»؛\n     - «استاد نے **کتابیں** (مؤنث جمع) **پڑھائی تھیں**»۔*",
      "examples": [
        {
          "target": "ہم نے گزشتہ سال کتب میلے سے یہ نایاب اور تاریخی لغت خریدی تھی۔",
          "reading": "Hum ne guzashta saal kutub meelay se yeh naayaab aur taareekhi lughat khareedi thee. [həm neː ɡʊzəʃt̪aː saːl kʊt̪ʊb meːleː seː jɛɦ naːjaːb ɔːr t̪aːriːxiː lʊɣət̪ xəriːd̪iː t̪ʰiː] (HOOM nay goo-ZUHSH-tuh SAHL koo-toob may-LAY say YEH nah-YAHB owr tah-REE-khee loo-GHUHT khuh-REE-dee THEE)",
          "translation": "We had bought this rare and historical dictionary [lughat - feminine object -> khareedi thee] from the book fair last year."
        },
        {
          "target": "احمد نے سفر پر روانہ ہونے سے پہلے اپنے تمام واجب الادا بل اور واجبات ادا کیے تھے۔",
          "reading": "Ahmad ne safar par rawaana hone se pehle apne tamaam waajib-ul-ada bill aur waajibaat ada kiye thay. [əɦməd̪ neː səfər pər rəʋaːnəh hoːneː seː pɛɦleː əpneː t̪əmaːm ʋaːdʒɪb-ʊl-əd̪aː bɪl ɔːr ʋaːdʒɪbaːt̪ əd̪aː kɪjeː t̪ʰeː] (UH-muhd nay suh-FUHR puhr ruh-vah-NUH hoh-NAY say PYH-lay uhp-NAY tuh-MAHM vah-jeeb-ool-uh-DAH bill owr vah-jee-BAHT uh-DAH kee-YAY THAY)",
          "translation": "Ahmad had paid all his due bills and obligations [waajibaat - masculine plural -> ada kiye thay] before departing on the journey."
        },
        {
          "target": "وہ خاندان پچھلی دہائی میں اس قدیم اور پُرسکون محلے میں رہائش پذیر ہوا تھا۔",
          "reading": "Woh khaandaan pichhli dehaai mein is qadeem aur pur-sukoon mohallay mein rehaa-ish-pazeer hua tha. [ʋoːh xaːnd̪aːn pɪtʃʰliː d̪ɛɦaːiː mẽː ɪs qəd̪iːm ɔːr pʊr-sʊkuːn mʊɦəlːeː mẽː rɪhaːʔɪʃ-pəziːr hʊaː t̪ʰaː] (VOH khahn-DAHN peechh-LEE duh-HAH-ee mayn EES quh-DEEM owr poor-soo-KOON moo-huhl-LAY mayn ree-hah-eesh-puh-ZEER hoo-AH THAH)",
          "translation": "That family had settled [intransitive -> hua tha] in this ancient and peaceful neighborhood in the previous decade."
        }
      ],
      "mnemonics": [
        "ماضی بعید: خریدی تھی (مؤنث مفعول)، ادا کیے تھے (مذکر جمع)، گیا تھا (لازم)!"
      ],
      "culturalNotes": [
        "اردو میں تاریخی شواہد اور ماضی کے مکمل شدہ معاہدوں کا حوالہ دیتے وقت ماضی بعید کو مستند دلیل مانا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مؤنث اسم «عمارت» کے ساتھ فعل متعدی «تعمیر کرنا» کا ماضی بعید کیا ہوگا؟",
          "options": [
            "تعمیر کی تھی (Ta'meer kee thee - Feminine singular past perfect agreeing with feminine object imaarat)",
            "تعمیر کیا تھا (مذکر صیغہ)",
            "تعمیر کیے تھے (جمع صیغہ)",
            "تعمیر کرتے ہیں (حال)"
          ],
          "answerIndex": 0,
          "explanation": "لفظ 'عمارت' مؤنث ہے، اس لیے ماضی بعید «تعمیر کی تھی» آئے گا۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مذکر جمع اسم «خطوط» کے ساتھ فعل «لکھنا» کا ماضی بعید کیا بنے گا؟",
          "options": [
            "لکھے تھے (Likhay thay - Masculine plural past perfect agreeing with masculine plural k خطوط)",
            "لکھا تھا (واحد مذکر)",
            "لکھی تھی (واحد مؤنث)",
            "لکھیں تھیں (مؤنث جمع)"
          ],
          "answerIndex": 0,
          "explanation": "مذکر جمع اسم 'خطوط' کے ساتھ «لکھے تھے» درست ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل ماضی بعید اور 'نے' کے ساتھ مطابقت (Past Perfect with 'Ne') کا فصیح جملہ پہچانیے:",
          "options": [
            "ہم نے پچھلے سال اپنے گاؤں میں ایک بڑا پودا لگایا تھا جو اب ایک تناور درخت بن چکا ہے۔ (We had planted a large sapling [pauda lagaaya tha] in our village last year, which has now become a robust tree.)",
            "ہم نے پودا لگائی تھیں اور درخت رویا تھا۔",
            "ماضی بعید میں نے لگانا سخت منع ہے۔",
            "لگایا تھا کا مطلب صرف دیوار پر تصویر لگانا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہم نے پچھلے سال اپنے گاؤں میں ایک بڑا پودا لگایا تھا جو اب ایک تناور درخت بن چکا ہے۔» ماضی بعید کا مکمل اور درست جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u7-l4": {
    "id": "ur-u7-l4",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 4,
    "title": "ماضی قریب اور ماضی بعید کا تقابل (Present Perfect vs. Past Perfect)",
    "level": "A2",
    "objective": "ماضی قریب (ہے/ہیں — حالیہ تکمیل) اور ماضی بعید (تھا/تھے — قدیم تکمیل) کے زمانی فاصلے اور نحوی فرق پر مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں ماضی قریب اور ماضی بعید کا نحوی و معنوی موازنہ:\n\n1. **ماضی قریب (Present Perfect — حالیہ تکمیل)**:\n   - ساخت: ماضی مطلق شکل + **ہے / ہیں**؛\n   - مفہوم: وہ کام جو ابھی حال ہی میں مکمل ہوا ہو اور اس کا تعلق یا اثر موجودہ لمحے میں باقی ہو (جیسے: «اس نے چائے **پی ہے**» -> اب مزید چائے نہیں چاہیے)۔\n\n2. **ماضی بعید (Past Perfect — دور کی تکمیل)**:\n   - ساخت: ماضی مطلق شکل + **تھا / تھی / تھے / تھیں**؛\n   - مفہوم: وہ کام جو ماضی میں بہت پہلے مکمل ہو کر ختم ہو چکا ہو (جیسے: «اس نے صبح چائے **پی تھی**» -> اب شام کو دوبارہ پینا چاہتا ہے)۔*",
      "examples": [
        {
          "target": "ڈاکٹر صاحب نے مریض کی نبض دیکھی ہے اور اب وہ اطمینان سے نسخہ تحریر فرما رہے ہیں۔",
          "reading": "Doctor saahib ne mareez ki nabz dekhi hai aur ab woh itmeenaan se nuskha tehreer farma rahe hain. [ɖɔːkʈər saːhɪb neː məriːz kiː nəbz d̪eːkʰiː hɛː ɔːr əb ʋoːh ɪt̪miːnaːn seː nʊsxaː t̪əhriːr fərmaː rəɦeː hɛ̃ː] (doctor SAH-heeb nay muh-REEZ kee NUBZ day-KHEE hy owr UHB voh eet-mee-NAHN say NOOS-khuh tuhh-REER fuhr-MAH ruh-HAY hyhn)",
          "translation": "The doctor has examined [present perfect: dekhi hai] the patient's pulse and is now calmly writing the prescription."
        },
        {
          "target": "ہم نے دو سال پہلے اس پرانے مکان کی مرمت کی تھی، لیکن اب دوبارہ رنگ و روغن کی ضرورت ہے۔",
          "reading": "Hum ne do saal pehle is puraane makaan ki marammat kee thee, lekin ab dobaara rang-o-raughan ki zaroorat hai. [həm neː d̪oː saːl pɛɦleː ɪs pʊraːneː məkaːn kiː mərəmːət̪ kiː t̪ʰiː leːkɪn əb d̪oːbaːraː rəŋɡ-oː-rɔːɣən kiː zəruːrət̪ hɛː] (HOOM nay DOH SAHL PYH-lay EES poo-rah-NAY muh-KAHN kee muh-ruhm-MUHT KEE THEE, lay-KEEN UHB doh-BAH-rah RUHNG-oh-ROW-ghuhn kee zuh-ROO-ruht hy)",
          "translation": "We had repaired [past perfect: kee thee] this old house two years ago, but now it needs repainting again."
        },
        {
          "target": "کیا آپ نے آج کا قومی اخبار پڑھا ہے، جس میں حکومت نے تعلیمی وظائف کا اعلان کیا ہے؟",
          "reading": "Kya aap ne aaj ka qaumi akhbaar parha hai, jis mein hukoomat ne ta'leemi wazaaif ka e'laan kiya hai? [kjaː aːp neː aːdʒ kaː qɔːmiː əxbaːr pəɽʱaː hɛː dʒɪs mẽː hʊkuːmət̪ neː t̪əʔliːmiː ʋəzaːʔɪf kaː eːʔlaːn kɪjaː hɛː] (KYAH AHP nay AHJ kah QOW-mee ukh-BAHR puhrh-HAH hy, jees mayn hoo-KOO-muht nay tuh-LEE-mee vah-ZAH-eef kah ay-LAHN kee-YAH hy)",
          "translation": "Have you read today's national newspaper [present perfect: parha hai], in which the government has announced educational scholarships?"
        }
      ],
      "mnemonics": [
        "قریب و بعید تقابل: پڑھا ہے (ابھی تازہ - Present Perfect) بمقابلہ پڑھا تھا (پرانی بات - Past Perfect)!"
      ],
      "culturalNotes": [
        "اردو گفتگو میں 'میں نے کھانا کھایا ہے' اور 'کھایا تھا' کا فرق مہمان نوازی کے دوران دوبارہ کھانے کی پیشکش کے وقت انتہائی معنی خیز ہوتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "آج صبح ہوئے عمل کے لیے جس کا تعلق حال سے ہے، کون سا صیغہ آئے گا؟",
          "options": [
            "خط لکھا ہے (Has written a letter - Present perfect indicating recent completion connected to present)",
            "خط لکھا تھا (ماضی بعید)",
            "خط لکھتا تھا (ماضی معطوف)",
            "خط لکھے گا (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "حالیہ تکمیل کے لیے ماضی قریب «خط لکھا ہے» استعمال ہوتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ماضی قریب اور ماضی بعید کے بنیادی فرق کی درست وضاحت کیا ہے؟",
          "options": [
            "ماضی قریب میں امدادی فعل 'ہے' آتا ہے اور ماضی بعید میں 'تھا' (Present auxiliary 'hai' vs. Past auxiliary 'tha')",
            "دونوں میں کوئی فرق نہیں",
            "ماضی قریب میں نے نہیں آتا",
            "ماضی بعید صرف کل کے لیے ہے"
          ],
          "answerIndex": 0,
          "explanation": "ماضی قریب میں 'ہے/ہیں' اور ماضی بعید میں 'تھا/تھی/تھے' امدادی فعل آتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ماضی قریب اور ماضی بعید کے تقابل کا مستند و بلیغ جملہ پہچانیے:",
          "options": [
            "ہم نے کل رات تمام دستاویزات تیار کر لی تھیں اور آج صبح افسرِ مجاز کے دفتر میں جمع کرا دی ہیں۔ (We had prepared all documents last night [past perfect: tayyaar kar lee theen], and have submitted them [present perfect: jama kara dee hain] in the authorized officer's office this morning.)",
            "ہم نے کل تیار کر لی ہیں اور آج جمع کرا دی تھیں۔",
            "ماضی قریب کا مطلب صرف قریبی رشتہ دار ہوتا ہے۔",
            "دستاویزات کو صرف جلانا چاہیے تھا۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہم نے کل رات تمام دستاویزات تیار کر لی تھیں اور آج صبح افسرِ مجاز کے دفتر میں جمع کرا دی ہیں۔» ماضی بعید اور ماضی قریب کے امتزاج کا شاندار جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u7-l5": {
    "id": "ur-u7-l5",
    "subject": "urdu",
    "unit": 7,
    "lessonNumber": 5,
    "title": "ماضی استمراری و بعید کا جامع سمیکن و ادبی انطباق (Past Continuous & Perfect Grand Synthesis)",
    "level": "A2",
    "objective": "ماضی کے تمام مدارج (استمراری، معطوف، بعید، قریب) کو ایک کثیر الجملاتی ادبی اور سوانحی بیانیہ میں یکجا کرنے کی کامل صلاحیت حاصل کرنا۔",
    "presentation": {
      "explanation": "ماضی استمراری، معطوف اور بعید کا عظیم الشان ادبی سمیکن (Grand Narrative Synthesis):\n\n1. **کثیر زمانی اسلوب (Multi-tense Narrative Art)**:\n   - **ماضی استمراری (جاری منظر کشی)**: «بارش ہو رہی تھی اور ہوائیں چل رہی تھیں»؛\n   - **ماضی بعید (پس منظر کا واقعہ)**: «مسافروں نے کل خیمے خریدے تھے»؛\n   - **ماضی معطوف (دائمی عادت)**: «وہ روزانہ نصیحت کیا کرتے تھے»۔\n\n2. **اردو کلاسیکی نثر کا شاہکار توازن**:\n   - ان تمام مدارج کی درست نشست تحریر میں تاریخی گہرائی اور بیانیہ روانی پیدا کرتی ہے۔*",
      "examples": [
        {
          "target": "جب بارش تھم رہی تھی اور بادل چھٹ رہے تھے، تو مسافروں نے اپنی منزل پر خیمے نصب کر لیے تھے جنہیں انہوں نے کل شام خریدا تھا۔",
          "reading": "Jab baarish tham rahi thee aur baadal chhat rahe thay, to musaafiron ne apni manzil par khaimay nasab kar liye thay jinhein unhon ne kal shaam khareeda tha. [dʒəb baːrɪʃ t̪ʰəm rəɦiː t̪ʰiː ɔːr baːd̪əl tʃʰəʈ rəɦeː t̪ʰeː t̪oː mʊsaːfɪrõː neː əpniː mənzɪl pər xɛːmeː nəsəb kər lɪjeː t̪ʰeː dʒɪnɦẽː ʊnɦõː neː kəl ʃaːm xəriːd̪aː t̪ʰaː] (JUHB BAH-reesh THUHM ruh-HEE THEE owr BAH-duhl CHHUHT ruh-HAY THAY, toh moo-sah-fee-ROHN nay uhp-NEE muhn-ZEEL puhr KHY-may NUH-suhb kuhr LEE-yay THAY jeen-HAYN oon-HOHN nay KUHL SHAHM khuh-REE-dah THAH)",
          "translation": "As the rain was subsiding and clouds were clearing, the travelers had pitched tents at their destination which they had bought yesterday evening."
        },
        {
          "target": "ہمارے اساتذہ کرام ہمیں ہمیشہ نصیحت کیا کرتے تھے کہ جو شخص وقت کی قدر کرتا ہے وہ کبھی ناکام نہیں ہوتا۔",
          "reading": "Hamaare asaatiza-e-kiraam hamein hamesha naseehat kiya kartay thay ke jo shakhs waqt ki qadr karta hai woh kabhi naakaam nahin hota. [həm-aːreː əsaːt̪ɪzaː-eː-kɪraːm həmẽː həm-eːʃaː nəsiːhət̪ kɪjaː kərteː t̪ʰeː kɪ dʒoː ʃəxs ʋəqt̪ kiː qəd̪r kərt̪aː hɛː ʋoːh kəbʱiː naːkaːm nəɦĩː hoːt̪aː] (huh-mah-RAY uh-sah-tee-ZAH-ay-kee-RAHM huh-MAYN huh-MAY-shah nuh-SEE-huht kee-YAH kuhr-TAY THAY kay JOH SHUHKHS VUHKT kee QUHDR kuhr-TAH hy VOH kuh-BHEE nah-KAHM nuh-HEEN hoh-TAH)",
          "translation": "Our respected teachers always used to advise us that he who values time never fails."
        },
        {
          "target": "ہم نے بچپن میں جن تاریخی عمارتوں کی زیارت کی تھی، وہاں آج بھی ہمارے دل کی خوبصورت یادیں بسی ہوئی ہیں۔",
          "reading": "Hum ne bachpan mein jin taareekhi imaaraaton ki ziyaarat kee thee, wahaan aaj bhi hamaare dil ki khoobsurat yaadein basee hui hain. [həm neː bətʃpən mẽː dʒɪn t̪aːriːxiː ɪmaːraːt̪õː kiː zɪjaːrət̪ kiː t̪ʰiː ʋəhaː̃ aːdʒ bʱiː həm-aːreː d̪ɪl kiː xuːbsuːrət̪ jaːd̪ẽː bəsiː hʊiː hɛ̃ː] (HOOM nay buhch-PUHN mayn JEEN tah-REE-khee ee-mah-rah-TOHN kee zee-YAH-ruht KEE THEE, vuh-HAHN AHJ bhee huh-mah-RAY DEEL kee khoob-SOO-ruht yah-DAYN buh-SEE hoo-EE hyhn)",
          "translation": "The historic buildings we had visited in childhood still hold beautiful memories residing in our hearts today."
        }
      ],
      "mnemonics": [
        "ماضی جامع سمیکن: تھم رہی تھی (استمراری)، نصیحت کیا کرتے تھے (معطوف)، زیارت کی تھی (بعید)!"
      ],
      "culturalNotes": [
        "اردو کی کلاسیکی اور جدید سوانح عمریوں کا سب سے پُرکشش حصہ ماضی کے ان تمام مدارج کا مربوط اور رواں امتزاج ہوتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ادبی سوانح میں منظر کشی اور پس منظر کے امتزاج کا فصیح ترین جملہ کون سا ہے؟",
          "options": [
            "جب وہ آ رہے تھے، ہم نے کتاب مکمل کر لی تھی (While they were coming [continuous], we had completed the book [perfect])",
            "وہ آتا تھا اور ہم نے کتاب خریدا ہے (بے جوڑ صیغے)",
            "وہ آئے گا اور ہم پڑھیں گے (مستقبل)",
            "کوئی جملہ درست نہیں"
          ],
          "answerIndex": 0,
          "explanation": "«جب وہ آ رہے تھے، ہم نے کتاب مکمل کر لی تھی» ماضی استمراری اور بعید کا بہترین مرکب جملہ ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ماضی استمراری، معطوف اور بعید کے جملوں کا باہمی ربط کیا کہلاتا ہے؟",
          "options": [
            "کثیر زمانی بیانیہ اور ماضی کا جامع سمیکن (Multi-tense narrative and past grand synthesis)",
            "صرف غلط بیانی",
            "مستقبل کی منصوبہ بندی",
            "صرف قواعد کی خرابی"
          ],
          "answerIndex": 0,
          "explanation": "یہ کثیر زمانی بیانیہ اور ماضی کے مختلف مدارج کا فصیح سمیکن کہلاتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ماضی استمراری، معطوف اور بعید کے جامع سمیکن (Grand Synthesis) کا شاہکار جملہ پہچانیے:",
          "options": [
            "جب بادل گرج رہے تھے اور بارش برس رہی تھی، تو ہم نے وہ تمام حفاظتی انتظامات مکمل کر لیے تھے جن کا ہمارے بزرگ ہمیشہ حکم دیا کرتے تھے۔ (While clouds were thundering [past continuous: garaj rahe thay] and rain was falling, we had completed all safety measures [past perfect: mukammal kar liye thay] which our elders always used to order [past habitual: hukm diya kartay thay].)",
            "بادل گرجتا تھا اور بارش روتی تھیں ہم نے حکم دیا تھا۔",
            "جامع سمیکن صرف آسمان پر ستارے گننے کو کہتے ہیں۔",
            "ماضی میں صرف پانی پینا درست مانا جاتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«جب بادل گرج رہے تھے اور بارش برس رہی تھی، تو ہم نے وہ تمام حفاظتی انتظامات مکمل کر لیے تھے جن کا ہمارے بزرگ ہمیشہ حکم دیا کرتے تھے۔» ماضی کے تمام مدارج کا شاہکار سمیکن ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u8-l1": {
    "id": "ur-u8-l1",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 1,
    "title": "فعل مستقبل کی گردان اور ساخت (Future Tense Morphology: گا / گی / گے / گیں)",
    "level": "A2",
    "objective": "فعل مستقبل کے لاحقوں (گا/گی/گے/گیں) اور تمام ضمیروں کے ساتھ درست گردان و اعراب پر مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں فعل مستقبل (Future Tense) کی ساخت:\n\n1. **مستقبل کا مفہوم**:\n   - آنے والے زمانے میں کسی کام کے واقع ہونے کا بیان۔\n\n2. **فعل کی بنیادی ساخت (مضارع صیغہ + لاحقۂ مستقبل)**:\n   - **میں**: «میں کل خط لکھوں **گا**» (مذکر) / «میں خط لکھوں **گی**» (مؤنث)؛\n   - **ہم**: «ہم محنت کریں **گے**» / «ہم محنت کریں **گیں**»؛\n   - **تو**: «تو جائے **گا**» / «تو جائے **گی**»؛\n   - **تم**: «تم آؤ **گے**» / «تم آؤ **گی**»؛\n   - **وہ / یہ (واحد)**: «وہ سبق یاد کرے **گا**» / «وہ یاد کرے **گی**»؛\n   - **آپ / وہ (جمع و تعظیمی)**: «آپ تشریف لائیں **گے**»، «وہ آئیں **گے**»؛\n   - **مؤنث جمع**: «لڑکیاں گیت گائیں **گیں**»۔*",
      "examples": [
        {
          "target": "ہم اگلے ہفتے ایک اہم قومی علمی کانفرنس میں شرکت کے لیے اسلام آباد جائیں گے۔",
          "reading": "Hum aglay hafte ek aham qaumi ilmi conference mein shirkat ke liye Islamabad jaayen gay. [həm əɡleː hʌfteː eːk əɦəm qɔːmiː ɪlmiː kaːnfrəns mẽː ʃɪrkət̪ keː lɪjeː ɪslaːmaːbaːd̪ dʒaːẽː ɡeː] (HOOM uhg-LAY HUHF-tay AYK UH-huhm QOW-mee EEL-mee conference mayn sheer-KUHT kay lee-AY ees-lahm-ah-BAHD jah-AYN GAY)",
          "translation": "We will go to Islamabad next week to participate in an important national academic conference."
        },
        {
          "target": "طالبہ محنت اور لگن سے پڑھائی کرے گی اور سالانہ امتحان میں اول پوزیشن حاصل کرے گی۔",
          "reading": "Taaliba mehnat aur lagan se parhaai karay gee aur saalaana imtehaan mein awwal position haasil karay gee. [t̪aːlɪbaː mɛɦnət̪ ɔːr ləɡən seː pəɽʱaːiː kəreː ɡiː ɔːr saːlaːnəh ɪmt̪ɪhaːn mẽː əʋːəl poːzɪʃən haːsɪl kəreː ɡiː] (tah-lee-BAH muhh-NUHT owr luh-GUHN say puhrh-ah-EE kuh-RAY GEE owr sah-lah-NUH eem-tuh-HAHN mayn UHV-vuhl position hah-SEEL kuh-RAY GEE)",
          "translation": "The female student will study with diligence and dedication and will secure the first position in the annual exam."
        },
        {
          "target": "میں کل صبح سویرے نئے تحقیقی منصوبے کے تفصیلی خدوخال آپ کی خدمت میں پیش کروں گا۔",
          "reading": "Main kal subah sawere naye tehqeeqi mansoobay ke tafseeli khadd-o-khaal aap ki khidmat mein pesh karoon ga. [mɛ̃ː kəl sʊbəh səʋeːreː nəjeː t̪əɦqiːqiː mənsuːbeː keː t̪əfsiːliː xəd̪ː-oː-xaːl aːp kiː xɪd̪mət̪ mẽː peːʃ kəruː̃ ɡaː] (myhn KUHL SOO-buh suh-VAY-ray nuh-YAY tuhh-qee-QEE muhn-soo-BAY kay tuhf-see-LEE KHUHDD-oh-KHAHL AHP kee kheed-MUHT mayn PAYSH kuh-ROON GAH)",
          "translation": "I will present the detailed outline of the new research project to you early tomorrow morning."
        }
      ],
      "mnemonics": [
        "مستقبل فارمولا: میں کروں گا، ہم کریں گے، وہ کرے گی، آپ فرمائیں گے!"
      ],
      "culturalNotes": [
        "اردو میں مستقبل کا عزم ظاہر کرتے وقت 'انشاء اللہ' (اگر اللہ نے چاہا) کا سابقہ لگانا اسلامی و مشرقی تہذیب کا مستقل حصہ ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مذکر تعظیمی فاعل «آپ» کے ساتھ فعل «آنا» کا مستقبل صیغہ کیا ہوگا؟",
          "options": [
            "آئیں گے (Aayen gay - Respectful masculine plural future verb form)",
            "آئے گا (مذکر واحد بے تکلف)",
            "آؤں گا (متکلم)",
            "آئے تھے (ماضی بعید)"
          ],
          "answerIndex": 0,
          "explanation": "تعظیمی تخاطب 'آپ' کے ساتھ مستقبل میں «آئیں گے» مستعمل ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مؤنث واحد فاعل «وہ» کے ساتھ فعل «لکھنا» کی درست مستقبل شکل کیا ہے؟",
          "options": [
            "لکھے گی (Likhay gee - Feminine singular future verb form)",
            "لکھے گا (مذکر واحد)",
            "لکھیں گے (مذکر جمع)",
            "لکھتی تھی (ماضی استمراری)"
          ],
          "answerIndex": 0,
          "explanation": "مؤنث واحد کے ساتھ فعل مستقبل «لکھے گی» بنے گا۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل مستقبل کی گردان (Future Tense Morphology) کا درست جملہ پہچانیے:",
          "options": [
            "ہم کل صبح اپنی پوری ٹیم کے ساتھ نئے پراجیکٹ کا باقاعدہ افتتاح کریں گے۔ (We will formally inaugurate [aaghaaz/iftetaah karein gay] the new project tomorrow morning with our entire team.)",
            "ہم افتتاح کرے گا اور سب بھاگ جائے گی۔",
            "مستقبل صرف گزری ہوئی کہانیوں کے لیے مخصوص ہے۔",
            "کریں گے کو جملے کے درمیان میں اسم کے اوپر لکھنا چاہیے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہم کل صبح اپنی پوری ٹیم کے ساتھ نئے پراجیکٹ کا باقاعدہ افتتاح کریں گے۔» فعل مستقبل کا فصیح اور مستند جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u8-l2": {
    "id": "ur-u8-l2",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 2,
    "title": "شائستہ احکامات اور التجا کے درجات (Polite Imperatives: کیجیے، فرمائیے)",
    "level": "A2",
    "objective": "امر و التجا کے مختلف درجات (تو کر، تم کرو، آپ کیجیے، فرمائیے، تشریف رکھیے) میں تمیز اور شائستہ انداز میں مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں احکامات اور التجا کے مدارج (Levels of Imperatives):\n\n1. **درجاتِ تخاطب کے مطابق امر کی تقسیم**:\n   - **تو (بے تکلف / غیر رسمی)**: «کر»، «سن»، «پڑھ» (صرف انتہائی بے تکلفی یا دعا میں)؛\n   - **تم (دوستانہ / چھوٹوں کے لیے)**: «کرو»، «سنو»، «پڑھو»، «جاؤ»؛\n   - **آپ (شائستہ و باوقار — معیار)**: «**کیجیے**»، «**سنیے**»، «**پڑھیے**»، «**جائیے**»، «**دیجیے**»، «**لیجیے**»؛\n   - **انتہائی تعظیمی (بزرگوں اور معززین کے لیے)**: «**فرمائیے**»، «**تشریف رکھیے**»، «**ملاحظہ فرمائیے**»۔*",
      "examples": [
        {
          "target": "برائے مہربانی تشریف رکھیے اور چائے نوش فرمائیے تاکہ ہم علمی گفتگو کا آغاز کر سکیں۔",
          "reading": "Baraah-e-mehrbaani tashreef rakhiye aur chaaye nosh farmaaiye taake hum ilmi guftagoo ka aaghaaz kar sakein. [bəraːjeː mɛːɦrbaːniː t̪əʃriːf rəkʰiːjeː ɔːr tʃaːjeː noːʃ fərmaːiːjeː t̪aːkɪ həm ɪlmiː ɡʊft̪əɡuː kaː aːɣaːz kər səkẽː] (buh-rah-yay MAY-huhr-bah-nee tuhsh-REEF ruh-KHEE-yay owr CHAH-yay NOHSH fuhr-mah-EE-yay tah-KAY HOOM EEL-mee goof-tuh-GOO kah ah-GHAHZ kuhr suh-KAYN)",
          "translation": "Please take a seat and take tea so that we may begin our scholarly conversation."
        },
        {
          "target": "آپ اس اہم اور نازک معاملے پر اطمینان اور تحمل سے ٹھنڈے دل کے ساتھ غور فرمائیے۔",
          "reading": "Aap is aham aur naazuk maamlay par itmeenaan aur tahammul se thanday dil ke saath ghaur farmaaiye. [aːp ɪs əɦəm ɔːr naːzʊk maːmleː pər ɪt̪miːnaːn ɔːr t̪əhəmːʊl seː t̪ʰəɳɖeː d̪ɪl keː saːt̪ʰ ɣɔːr fərmaːiːjeː] (AHP EES UH-huhm owr nah-ZOOK mahm-LAY puhr eet-mee-NAHN owr tuh-huhm-MOOL say thuhn-DAY DEEL kay sahth GHOWR fuhr-mah-EE-yay)",
          "translation": "Please consider this important and delicate matter with patience, composure, and a cool heart."
        },
        {
          "target": "براہِ کرم لائبریری کے تمام اصول و ضوابط کی مکمل پاسداری کیجیے اور خاموشی اختیار کیجیے۔",
          "reading": "Baraah-e-karam library ke tamaam usool-o-zawaabit ki mukammal paasdaari keejiye aur khaamoshi ikhtiyaar keejiye. [bəraːɦ-eː-kərəm laːɪbreːriː keː t̪əmaːm ʊsuːl-oː-zəʋaːbɪt̪ kiː mʊkəmːəl paːsd̪aːriː kiːdʒɪjeː ɔːr xaːmoːʃiː ɪxt̪ɪjaːr kiːdʒɪjeː] (buh-rah-hay-KUH-ruhm library kay tuh-MAHM oo-SOOL-oh-zuh-wah-BEET kee moo-kuhm-MUHL pahs-dah-REE kee-JEE-yay owr khah-moh-SHEE eekh-tee-YAHR kee-JEE-yay)",
          "translation": "Please observe all rules and regulations of the library completely and maintain silence."
        }
      ],
      "mnemonics": [
        "شائستہ احکامات: تشریف رکھیے (ادب)، غور فرمائیے (تعظیم)، کیجیے/سنیے (معیاری شائستگی)!"
      ],
      "culturalNotes": [
        "اردو تہذیب میں کسی کو 'بیٹھو' یا 'کرو' کہنا غیر مہذب سمجھا جاتا ہے؛ ہمیشہ 'تشریف رکھیے' اور 'کیجیے' ہی برتا جاتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "کسی محترم مہمان کو بیٹھنے کی التجا کے لیے شائستہ ترین جملہ کون سا ہے؟",
          "options": [
            "تشریف رکھیے (Tashreef rakhiye - Most refined high-honorific request to take a seat)",
            "بیٹھ جا (بے ادبی)",
            "بیٹھو (دوستانہ امر)",
            "بیٹھے گا (مستقبل)"
          ],
          "answerIndex": 0,
          "explanation": "مہمانِ گرامی کے احترام کے لیے «تشریف رکھیے» سب سے فصیح جملہ ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "فعل «کرنا» کا شائستہ اور باوقار امر کیا ہوگا؟",
          "options": [
            "کیجیے (Keejiye - Standard polite imperative for aap)",
            "کر (تو کے لیے)",
            "کرو (تم کے لیے)",
            "کرتا تھا (ماضی)"
          ],
          "answerIndex": 0,
          "explanation": "آپ کے ساتھ فعل 'کرنا' کا شائستہ امر «کیجیے» ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "شائستہ احکامات اور التجا (Polite Imperatives) کا فصیح جملہ پہچانیے:",
          "options": [
            "براہِ کرم اس اہم تعلیمی دستاویز کا بغور مطالعہ فرمائیے اور اپنی قیمتی تجاویز تحریر کیجیے۔ (Please study this important educational document carefully [mutaala'a farmaaiye] and write your valuable recommendations [tajaweez tehreer keejiye].)",
            "دستاویز پڑھ اور جلدی لکھ۔",
            "شائستہ احکامات صرف غصے میں بولے جاتے ہیں۔",
            "فرمائیے کا مطلب کھانا چھیننا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«براہِ کرم اس اہم تعلیمی دستاویز کا بغور مطالعہ فرمائیے اور اپنی قیمتی تجاویز تحریر کیجیے۔» شائستہ التجا اور امر کا مکمل جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u8-l3": {
    "id": "ur-u8-l3",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 3,
    "title": "مستقبل کے شائستہ احکامات (Future Polite Imperatives: کیجیے گا / آئیے گا)",
    "level": "A2",
    "objective": "آنے والے وقت میں کسی کام کی شائستہ درخواست (مادہ فعل + یے گا: آئیے گا، دیجیے گا، لکھیے گا) کے نحوی اوزان پر مہارت حاصل کرنا۔",
    "presentation": {
      "explanation": "اردو زبان میں مستقبل کے شائستہ احکامات (Future Polite Imperatives):\n\n1. **مستقبل کے شائستہ امر کا مفہوم**:\n   - گفتگو کے فوری لمحے کے بجائے آئندہ وقت یا بعد میں کسی کام کی یاد دہانی اور التجا کے لیے مستعمل ہے۔\n\n2. **ساخت (لاحقہ «یے گا»)**:\n   - مادہ فعل + **یے گا**:\n     - «کل شام وقت پر تشریف **لائیے گا**»؛\n     - «جب خط ملے تو جواب **لکھیے گا**»؛\n     - «پہنچ کر اطلاع **دیجیے گا**»۔\n\n3. **لہجے کی نزاکت**:\n   - 'کیجیے گا' میں قطعی حکم کے بجائے انتہائی دوستانہ محبت اور باوقار التجا کا رنگ غالب ہوتا ہے۔*",
      "examples": [
        {
          "target": "جب آپ کل شام کو لاہور پہنچیں، تو برائے مہربانی مجھے اپنی خیریت کی فوری اطلاع دیجیے گا۔",
          "reading": "Jab aap kal shaam ko Lahore pohanchein, to baraah-e-mehrbaani mujhe apni khairiyat ki fauri ittila deejiye ga. [dʒəb aːp kəl ʃaːm koː laːɦɔːr pɔɦʊntʃẽː t̪oː bəraːjeː mɛːɦrbaːniː mʊdʒʰeː əpniː xɛːrɪjət̪ kiː fɔːriː ɪt̪ːɪlaːʔ d̪iːdʒɪjeː ɡaː] (JUHB AHP KUHL SHAHM koh lah-HOHR poh-hoon-CHAYN, toh buh-rah-yay MAY-huhr-bah-nee MOOJ-hay uhp-NEE khy-ree-YUHT kee FOW-ree eet-tee-LAH dee-JEE-yay GAH)",
          "translation": "When you reach Lahore tomorrow evening, please give me immediate news of your well-being."
        },
        {
          "target": "سفر پر روانہ ہونے سے پہلے اپنے تمام ضروری سفری دستاویزات اور ٹکٹ ضرور چیک کر لیجیے گا۔",
          "reading": "Safar par rawaana hone se pehle apne tamaam zaroori safari dastaaweezat aur ticket zaroor check kar leejiye ga. [səfər pər rəʋaːnəh hoːneː seː pɛɦleː əpneː t̪əmaːm zəruːriː səfəriː d̪əst̪aːʋeːzaːt̪ ɔːr ʈɪkəʈ zəruːr tʃɛk kər liːdʒɪjeː ɡaː] (suh-FUHR puhr ruh-vah-NUH hoh-NAY say PYH-lay uhp-NAY tuh-MAHM zuh-ROO-ree suh-fuh-REE duhs-tah-way-ZAHT owr ticket zuh-ROOR check kuhr lee-JEE-yay GAH)",
          "translation": "Please make sure to check all your essential travel documents and tickets before departing on the journey."
        },
        {
          "target": "ہمارے بزرگوں کی ان قیمتی اور سنہری نصیحتوں کو ہمیشہ اپنی زندگی کا رہنما اصول بنائے رکھیے گا۔",
          "reading": "Hamaare buzurgon ki in qeemti aur sunehri naseehaton ko hamesha apni zindagi ka rehnuma usool banaaye rakhiye ga. [həm-aːreː bʊzʊrɡõː kiː ɪn qiːmt̪iː ɔːr sʊnɛɦriː nəsiːhət̪õː koː həm-eːʃaː əpniː zɪnd̪əɡiː kaː rɛɦnʊmaː ʊsuːl bənaːjeː rəkʰiːjeː ɡaː] (huh-mah-RAY boo-zoor-GOHN kee EEN QEEM-tee owr soo-NYH-ree nuh-see-huh-TOHN koh huh-MAY-shah uhp-NEE zeen-duh-GEE kah ryh-noo-MAH oo-SOOL buh-nah-YAY ruh-KHEE-yay GAH)",
          "translation": "Always keep these valuable and golden counsels of our elders as the guiding principles of your life."
        }
      ],
      "mnemonics": [
        "مستقبل امر فارمولا: لائیے گا، دیجیے گا، کیجیے گا، یاد رکھیے گا!"
      ],
      "culturalNotes": [
        "اردو خطوط اور رخصت کے لمحات میں 'ہمیں اپنی دعاؤں میں یاد رکھیے گا' کہنا الفت اور احترام کا لازوال فقرہ ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "آئندہ وقت میں تشریف لانے کی شائستہ التجا کے لیے کون سا لفظ آئے گا؟",
          "options": [
            "تشریف لائیے گا (Tashreef laaiye ga - Future polite imperative requesting attendance later)",
            "آ (غیر رسمی)",
            "آئے تھے (ماضی)",
            "آ رہا ہے (حال)"
          ],
          "answerIndex": 0,
          "explanation": "مستقبل میں آنے کی شائستہ التجا کے لیے «تشریف لائیے گا» بولا جاتا ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "مستقبل کے شائستہ امر «دیجیے گا» کا درست نحوی استعمال کس جملے میں ہے؟",
          "options": [
            "پہنچ کر اطلاع دیجیے گا (Please give information after reaching - Correct future polite imperative)",
            "کل اطلاع دی تھی (ماضی)",
            "اطلاع دیتا ہے (حال)",
            "کوئی نہیں"
          ],
          "answerIndex": 0,
          "explanation": "«پہنچ کر اطلاع دیجیے گا» مستقبل کے شائستہ امر کا بہترین نمونہ ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "مستقبل کے شائستہ احکامات (Future Polite Imperatives) کا فصیح جملہ پہچانیے:",
          "options": [
            "جب آپ اگلے ماہ تقریب میں تشریف لائیں تو اپنے ہمراہ اپنے قیمتی تحقیقی مقالے کا مسودہ ضرور لائیے گا۔ (When you attend the ceremony next month, please do bring along the draft of your valuable research paper [zaroor laaiye ga].)",
            "کل مسودہ مت لایا تھا اور روئی۔",
            "لائیے گا صرف گانے میں استعمال ہوتا ہے۔",
            "مستقبل کے امر میں ہمیشہ نفی کرنا لازمی ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«جب آپ اگلے ماہ تقریب میں تشریف لائیں تو اپنے ہمراہ اپنے قیمتی تحقیقی مقالے کا مسودہ ضرور لائیے گا۔» مستقبل کے شائستہ امر کا شاہکار جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u8-l4": {
    "id": "ur-u8-l4",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 4,
    "title": "منفی احکامات: 'مت' اور 'نہ' کا شائستہ استعمال (Negative Commands: نہ کیجیے / مت جائیے)",
    "level": "A2",
    "objective": "احکامات کی نفی میں 'نہ' اور 'مت' کے شائستہ اور فصیح استعمال پر عبور حاصل کرنا اور 'نہیں' کے غیر فصیح استعمال سے بچنا۔",
    "presentation": {
      "explanation": "اردو زبان میں منفی احکامات اور نہی (Prohibition & Negative Imperatives) کے اصول:\n\n1. **حروفِ نہی («نہ» اور «مت»)**:\n   - احکامات اور التجا کی نفی کے لیے صرف «**نہ**» یا «**مت**» استعمال ہوتا ہے؛\n   - امر کے ساتھ 'نہیں' لگانا فاش نحوی غلطی ہے (جیسے 'نہیں کرو' کے بجائے 'مت کرو' یا 'نہ کیجیے')۔\n\n2. **شائستگی کا فرق**:\n   - **نہ + کیجیے (انتہائی شائستہ و مہذب)**: «پریشان **نہ ہوئیے**»، «وقت ضائع **نہ کیجیے**»؛\n   - **مت + کرو (روک ٹوک و حکم)**: «شور **مت مچاؤ**»، «جھوٹ **مت بولو**»۔*",
      "examples": [
        {
          "target": "کسی بھی ناخوشگوار صورتحال میں اپنا صبر اور حوصلہ ہرگز نہ چھوڑیے اور غصے سے پرہیز کیجیے۔",
          "reading": "Kisi bhi na-khushgawaar soorathal mein apna sabr aur hausla hargiz na chhoriye aur gussay se parhez keejiye. [kɪsiː bʱiː naː-xʊʃɡəʋaːr suːrət̪-eː-haːl mẽː əpnaː səbr ɔːr hɔːsləh hərɡɪz nə tʃʰoːɽiːjeː ɔːr ɡʊsːeː seː pərheːz kiːdʒɪjeː] (kee-SEE bhee nah-khoosh-guh-VAHR soo-ruht-ay-HAHL mayn uhp-NAH SUHBR owr HOWS-lah HUHR-geez nuh chhoh-dEE-yay owr GOOS-say say puhr-HAYZ kee-JEE-yay)",
          "translation": "In any unpleasant situation, do not lose your patience and fortitude at all, and refrain from anger."
        },
        {
          "target": "امتحانی ہال کے اندر موبائل فون اور غیر متعلقہ کاغذات ساتھ لانے کی غلطی ہرگز مت کیجیے۔",
          "reading": "Imtehaani hall ke andar mobile phone aur ghair-muta'alliqa kaaghazaat saath laane ki ghalti hargiz mat keejiye. [ɪmt̪ɪhaːniː haːl keː ənd̪ər moːbaːɪl foːn ɔːr ɣɛːr-mʊt̪əʔəlːɪqaː kaːɣzaːt̪ saːt̪ʰ laːneː kiː ɣəlt̪iː hərɡɪz mət̪ kiːdʒɪjeː] (eem-tuh-hah-NEE hahl kay uhn-DUHR mobile phone owr ghyr-moo-tuh-uhl-lee-QAH kah-ghuh-ZAHT sahth lah-NAY kee ghuhl-TEE HUHR-geez muht kee-JEE-yay)",
          "translation": "Do not make the mistake of bringing mobile phones and irrelevant papers inside the examination hall."
        },
        {
          "target": "کسی بھی بے بنیاد افواہ پر بغیر تحقیق اور تصدیق کے یقین نہ کیجیے اور امن و امان قائم رکھیے۔",
          "reading": "Kisi bhi bay-bunyaad afwah par baghair tehqeeq aur tasdeeq ke yaqeen na keejiye aur amn-o-amaan qaaim rakhiye. [kɪsiː bʱiː beː-bʊnjaːd̪ əfʋaːh pər bəɣɛːr t̪əɦqiːq ɔːr t̪əsdiːq keː jəqiːn nə kiːdʒɪjeː ɔːr əmn-oː-əmaːn qaːʔɪm rəkʰiːjeː] (kee-SEE bhee bay-boon-YAHD uhf-VAHH puhr buh-GHYR tuhh-QEEQ owr tuhs-DEEQ kay yuh-QEEN nuh kee-JEE-yay owr UHM-noh-uh-MAHN QAH-eem ruh-KHEE-yay)",
          "translation": "Do not believe any baseless rumor without investigation and verification, and maintain peace and order."
        }
      ],
      "mnemonics": [
        "منفی امر: نہ کیجیے (شائستہ التجا)، مت کیجیے (روک ٹوک)، نہیں کیجیے کہنا غلط ہے!"
      ],
      "culturalNotes": [
        "اردو کے مہذب گھرانوں میں بچوں کو تنبیہ کرتے وقت بھی 'ایسا نہ کیجیے' جیسے نرم اور اثر انگیز الفاظ برتے جاتے ہیں۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "شائستہ انداز میں وقت ضائع نہ کرنے کی التجا کے لیے کون سا جملہ سب سے فصیح ہے؟",
          "options": [
            "وقت ضائع نہ کیجیے (Please do not waste time - Most elegant polite negative imperative)",
            "وقت ضائع نہیں کیجیے (نحوی غلطی)",
            "وقت ضائع نہ کیا تھا (ماضی)",
            "وقت ضائع کرو (مثبت امر)"
          ],
          "answerIndex": 0,
          "explanation": "شائستہ منفی امر کے لیے «نہ کیجیے» بالکل درست ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "احکامات کی نفی میں کون سا لفظ لگانا غیر فصیح مانا جاتا ہے؟",
          "options": [
            "نہیں (Nahin - Negation particle inappropriate for imperative prohibition)",
            "نہ (درست حرفِ نہی)",
            "مت (درست حرفِ نہی)",
            "ہرگز نہ (تاکیدی نہی)"
          ],
          "answerIndex": 0,
          "explanation": "امر کی نفی میں 'نہیں' کے بجائے صرف 'نہ' یا 'مت' آنا چاہیے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "منفی احکامات اور شائستہ نہی (Negative Commands) کا مستند جملہ پہچانیے:",
          "options": [
            "مشکلات سے گھبرا کر کبھی مایوس نہ ہوئیے بلکہ مستقل مزاجی کے ساتھ اپنی منزل کی جانب پیش قدمی جاری رکھیے۔ (Never become despondent [mayoos na hooiye] in fear of hardships, but keep advancing toward your destination with perseverance.)",
            "مشکلات سے نہیں گھبرائیے اور بھاگ جائیے۔",
            "منفی احکامات صرف جنگ کے میدان میں دیے جاتے ہیں۔",
            "مت کا مطلب ہمیشہ تالی بجانا ہوتا ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«مشکلات سے گھبرا کر کبھی مایوس نہ ہوئیے بلکہ مستقل مزاجی کے ساتھ اپنی منزل کی جانب پیش قدمی جاری رکھیے۔» شائستہ منفی امر کا بہترین اور بلیغ جملہ ہے۔"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "ur-u8-l5": {
    "id": "ur-u8-l5",
    "subject": "urdu",
    "unit": 8,
    "lessonNumber": 5,
    "title": "فعل مستقبل اور شائستہ احکامات کا جامع سمیکن (Future & Polite Imperatives Grand Synthesis)",
    "level": "A2",
    "objective": "مستقبل کے پُرعزم بیانیے اور شائستہ احکامات (مثبت، منفی، مستقبل امر) کو کثیر الجملاتی قائدانہ اسلوب میں یکجا کرنا۔",
    "presentation": {
      "explanation": "فعل مستقبل اور شائستہ احکامات کا عظیم الشان سمیکن (Grand Synthesis):\n\n1. **قائدانہ اور باوقار اسلوب**:\n   - مستقبل کے قومی و انفرادی منصوبوں کے ساتھ ساتھ شائستہ احکامات اور التجا کا امتزاج:\n     - «ہم ملکی ترقی کے لیے کام **کریں گے** (مستقبل)؛ آپ خلوص سے ساتھ **دیجیے** (شائستہ امر)؛ اور مایوس **نہ ہوئیے گا** (مستقبل نہی)»۔\n\n2. **تہذیبی و ادبی حسن**:\n   - یہ متوازن زبان تحریر و تقریر کو فصاحت، متانت اور پرکشش وقار بخشتی ہے۔*",
      "examples": [
        {
          "target": "ہم سب مل کر وطنِ عزیز کو ترقی کی نئی بلندیوں تک پہنچائیں گے؛ آپ خلوصِ دل سے محنت کیجیے اور باہمی اتحاد کو برقرار رکھیے گا۔",
          "reading": "Hum sab mil kar watan-e-azeez ko taraqqi ki nayi bulandiyon tak pohanchaayen gay; aap khuloos-e-dil se mehnat keejiye aur baahami ittehaad ko barqaraar rakhiye ga. [həm səb mɪl kər ʋət̪ən-eː-əziːz koː t̪ərəqːiː kiː nəjiː bʊlənd̪ɪjõː t̪ək pɔɦʊntʃaːẽː ɡeː aːp xʊluːs-eː-d̪ɪl seː mɛɦnət̪ kiːdʒɪjeː ɔːr baːɦəmiː ɪt̪ːɪhaːd̪ koː bərqəraːr rəkʰiːjeː ɡaː] (HOOM SUHB MEEL kuhr vuh-TUHN-ay-uh-ZEEZ koh tuh-ruhq-QEE kee nuh-YEE boo-luhn-dee-YOHN tuhk poh-hoon-chah-AYN GAY, AHP khoo-LOOS-ay-DEEL say muhh-NUHT kee-JEE-yay owr bah-huh-MEE eet-tee-HAHD koh buhr-quh-RAHR ruh-KHEE-yay GAH)",
          "translation": "Together we will take our beloved homeland to new heights of progress; please work with sincerity of heart and maintain mutual unity."
        },
        {
          "target": "انشاء اللہ ہم کل ایک نئے تعلیمی منصوبے کا آغاز کریں گے، آپ برائے مہربانی وقت پر تشریف لائیے گا اور اپنی قیمتی آراء پیش فرمائیے گا۔",
          "reading": "Insha Allah hum kal ek naye ta'leemi mansoobay ka aaghaaz karein gay, aap baraah-e-mehrbaani waqt par tashreef laaiye ga aur apni qeemti aaraa pesh farmaaiye ga. [ɪnʃaːʔəlːaːh həm kəl eːk nəjeː t̪əʔliːmiː mənsuːbeː kaː aːɣaːz kərẽː ɡeː aːp bəraːjeː mɛːɦrbaːniː ʋəqt̪ pər t̪əʃriːf laːiːjeː ɡaː ɔːr əpniː qiːmt̪iː aːraːʔ peːʃ fərmaːiːjeː ɡaː] (een-shah-ALLAH HOOM KUHL AYK nuh-YAY tuh-LEE-mee muhn-soo-BAY kah ah-GHAHZ kuh-RAYN GAY, AHP buh-rah-yay MAY-huhr-bah-nee VUHKT puhr tuhsh-REEF lah-EE-yay GAH owr uhp-NEE QEEM-tee ah-RAH PAYSH fuhr-mah-EE-yay GAH)",
          "translation": "God willing, we will begin a new educational project tomorrow; please arrive on time and present your valuable opinions."
        },
        {
          "target": "ہم اپنے آبا و اجداد کی روشن روایات کی پاسداری کریں گے اور آپ بھی نوجوان نسل کی اخلاقی تربیت پر خصوصی توجہ دیجیے گا۔",
          "reading": "Hum apne aaba-o-ajdaad ki raushan riwaayaat ki paasdaari karein gay aur aap bhi naujawaan nasal ki akhlaaqi tarbiyat par khusoosi tawajjuh deejiye ga. [həm əpneː aːbaː-oː-ədʒd̪aːd̪ kiː rɔːʃən rɪʋaːjaːt̪ kiː paːsd̪aːriː kərẽː ɡeː ɔːr aːp bʱiː nɔːdʒəʋaːn nəsl kiː əxlaːqiː t̪ərbiːjət̪ pər xʊsuːsiː t̪əʋədʒːʊh d̪iːdʒɪjeː ɡaː] (HOOM uhp-NAY ah-bah-oh-uhj-DAHD kee row-SHUHN ree-wah-YAHT kee pahs-dah-REE kuh-RAYN GAY owr AHP bhee now-juh-VAHN NUH-suhl kee ukh-lah-QEE tuhr-bee-YUHT puhr khoo-SOO-see tuh-vuhj-JOOH dee-JEE-yay GAH)",
          "translation": "We will uphold the luminous traditions of our ancestors, and you too please pay special attention to the moral training of the young generation."
        }
      ],
      "mnemonics": [
        "جامع مستقبل و امر: پہنچائیں گے (مستقبل)، محنت کیجیے (امر)، برقرار رکھیے گا (مستقبل امر)!"
      ],
      "culturalNotes": [
        "اردو کی سیاسی، سماجی اور قومی خطابت میں یہ متوازن اسلوب عوام کے دلوں میں اعتماد، جوش اور احترام کا سحر انگیز جذبہ بیدار کرتا ہے۔"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "مستقبل کے عزم اور شائستہ التجا کے امتزاج کا فصیح ترین جملہ منتخب کیجیے:",
          "options": [
            "ہم محنت کریں گے، آپ رہنمائی فرمائیے (We will work hard, please guide us - Harmonious combination of future pledge and polite imperative)",
            "ہم محنت کرے گا اور تم سکھاؤ (غیر فصیح)",
            "ہم نے محنت کی تھی (ماضی بعید)",
            "کوئی نہیں"
          ],
          "answerIndex": 0,
          "explanation": "«ہم محنت کریں گے، آپ رہنمائی فرمائیے» مستقبل کے عزم اور التجا کا پروقار جملہ ہے۔"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "شائستہ مستقبل امر «کیجیے گا» اور مستقبل فعل کا باہمی تعلق کیا ظاہر کرتا ہے؟",
          "options": [
            "آئندہ کے مربوط لائحۂ عمل اور باہمی تعاون کا باوقار اظہار (Coordinated future plan and mutual cooperation)",
            "صرف غصہ اور جھگڑا",
            "صرف پرانی یادیں",
            "بے معنی الفاظ"
          ],
          "answerIndex": 0,
          "explanation": "یہ آئندہ کے لائحۂ عمل اور باہمی احترام و تعاون کو ظاہر کرتا ہے۔"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "فعل مستقبل اور شائستہ احکامات کے جامع سمیکن (Grand Synthesis) کا شاہکار جملہ پہچانیے:",
          "options": [
            "ہم سب مل کر علم و حکمت کے چراغ روشن کریں گے؛ آپ اس تعلیمی مشن میں ہمارا ساتھ دیجیے اور کبھی مایوس نہ ہوئیے گا۔ (Together we will light the lamps of knowledge and wisdom [roshan karein gay]; please support us [saath deejiye] in this mission and never become despondent [mayoos na hooiye ga].)",
            "ہم چراغ جلائے گا اور سب بھاگ جائے گی۔",
            "جامع سمیکن صرف اندھیرے میں بیٹھنے کو کہتے ہیں۔",
            "مستقبل اور امر ایک ساتھ آنا ممنوع ہے۔"
          ],
          "answerIndex": 0,
          "explanation": "«ہم سب مل کر علم و حکمت کے چراغ روشن کریں گے؛ آپ اس تعلیمی مشن میں ہمارا ساتھ دیجیے اور کبھی مایوس نہ ہوئیے گا۔» مستقبل اور شائستہ احکامات کا کامل سمیکن ہے۔"
        }
      ],
      "passThreshold": 0.8
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
