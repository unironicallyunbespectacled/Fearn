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
        "objective": "Comprehensive mastery of نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings).",
        "presentation": {
            "explanation": "اس سبق میں ہم « نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » (حصہ 1) اور نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (1.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (1.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (1.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (1.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (1.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (1.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (1.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (1.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (1.1.3)۔"
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
                    "prompt": "کون سا بیان « نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 1-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (1.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (1.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (1.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («السلام_علیکم»):",
                    "acceptedAnswers": [
                        "السلام_علیکم"
                    ],
                    "explanation": "The target keyword was: 【السلام_علیکم】"
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
        "objective": "Comprehensive mastery of نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings).",
        "presentation": {
            "explanation": "اس سبق میں ہم « نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » (حصہ 2) اور نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (1.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (1.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (1.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (1.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (1.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (1.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (1.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (1.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (1.2.3)۔"
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
                    "prompt": "کون سا بیان « نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 1-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (1.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (1.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (1.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («شکریہ»):",
                    "acceptedAnswers": [
                        "شکریہ"
                    ],
                    "explanation": "The target keyword was: 【شکریہ】"
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
        "objective": "Comprehensive mastery of نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings).",
        "presentation": {
            "explanation": "اس سبق میں ہم « نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » (حصہ 3) اور نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (1.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (1.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (1.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (1.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (1.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (1.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (1.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (1.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (1.3.3)۔"
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
                    "prompt": "کون سا بیان « نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 1-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (1.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (1.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (1.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («خدا_حافظ»):",
                    "acceptedAnswers": [
                        "خدا_حافظ"
                    ],
                    "explanation": "The target keyword was: 【خدا_حافظ】"
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
        "objective": "Comprehensive mastery of نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings).",
        "presentation": {
            "explanation": "اس سبق میں ہم « نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » (حصہ 4) اور نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (1.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (1.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (1.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (1.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (1.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (1.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (1.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (1.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (1.4.3)۔"
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
                    "prompt": "کون سا بیان « نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 1-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (1.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (1.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (1.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («خوش_آمدید»):",
                    "acceptedAnswers": [
                        "خوش_آمدید"
                    ],
                    "explanation": "The target keyword was: 【خوش_آمدید】"
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
        "objective": "Comprehensive mastery of نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings).",
        "presentation": {
            "explanation": "اس سبق میں ہم « نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » (حصہ 5) اور نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (1.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (1.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (1.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (1.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (1.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (1.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« نستعلیق رسم الخط، صوتیات اور بنیادی آداب (Script & Greetings) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (1.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (1.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (1.5.3)۔"
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
                    "prompt": "کون سا بیان « نستعلیق رسم الخط اور بنیادی آداب (Script & Greetings) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 1-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (1.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (1.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (1.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («معاف_کیجئے»):",
                    "acceptedAnswers": [
                        "معاف_کیجئے"
                    ],
                    "explanation": "The target keyword was: 【معاف_کیجئے】"
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
        "objective": "Comprehensive mastery of اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » (حصہ 1) اور اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (2.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (2.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (2.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (2.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (2.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (2.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (2.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (2.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (2.1.3)۔"
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
                    "prompt": "کون سا بیان « اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 2-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (2.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (2.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (2.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کتاب»):",
                    "acceptedAnswers": [
                        "کتاب"
                    ],
                    "explanation": "The target keyword was: 【کتاب】"
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
        "objective": "Comprehensive mastery of اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » (حصہ 2) اور اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (2.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (2.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (2.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (2.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (2.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (2.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (2.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (2.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (2.2.3)۔"
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
                    "prompt": "کون سا بیان « اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 2-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (2.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (2.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (2.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («گھر»):",
                    "acceptedAnswers": [
                        "گھر"
                    ],
                    "explanation": "The target keyword was: 【گھر】"
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
        "objective": "Comprehensive mastery of اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » (حصہ 3) اور اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (2.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (2.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (2.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (2.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (2.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (2.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (2.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (2.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (2.3.3)۔"
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
                    "prompt": "کون سا بیان « اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 2-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (2.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (2.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (2.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («لڑکا»):",
                    "acceptedAnswers": [
                        "لڑکا"
                    ],
                    "explanation": "The target keyword was: 【لڑکا】"
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
        "objective": "Comprehensive mastery of اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » (حصہ 4) اور اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (2.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (2.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (2.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (2.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (2.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (2.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (2.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (2.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (2.4.3)۔"
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
                    "prompt": "کون سا بیان « اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 2-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (2.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (2.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (2.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («لڑکی»):",
                    "acceptedAnswers": [
                        "لڑکی"
                    ],
                    "explanation": "The target keyword was: 【لڑکی】"
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
        "objective": "Comprehensive mastery of اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » (حصہ 5) اور اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (2.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (2.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (2.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (2.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (2.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (2.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اسم، جنس اور جمع کے اصول (Nouns, Gender & Plurals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (2.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (2.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (2.5.3)۔"
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
                    "prompt": "کون سا بیان « اسم کی جنس اور جمع کے اصول (Noun Gender & Plurals) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 2-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (2.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (2.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (2.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کمرے»):",
                    "acceptedAnswers": [
                        "کمرے"
                    ],
                    "explanation": "The target keyword was: 【کمرے】"
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
        "objective": "Comprehensive mastery of ضمائر اور حالت مفعولی (Pronouns & Oblique Forms).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » (حصہ 1) اور ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (3.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (3.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (3.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ضمائر اور حالت مفعولی (Pronouns & Oblique Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (3.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (3.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (3.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (3.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (3.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (3.1.3)۔"
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
                    "prompt": "کون سا بیان « ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 3-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (3.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (3.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (3.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («میرا»):",
                    "acceptedAnswers": [
                        "میرا"
                    ],
                    "explanation": "The target keyword was: 【میرا】"
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
        "objective": "Comprehensive mastery of ضمائر اور حالت مفعولی (Pronouns & Oblique Forms).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » (حصہ 2) اور ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (3.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (3.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (3.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ضمائر اور حالت مفعولی (Pronouns & Oblique Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (3.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (3.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (3.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (3.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (3.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (3.2.3)۔"
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
                    "prompt": "کون سا بیان « ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 3-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (3.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (3.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (3.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («آپ_کا»):",
                    "acceptedAnswers": [
                        "آپ_کا"
                    ],
                    "explanation": "The target keyword was: 【آپ_کا】"
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
        "objective": "Comprehensive mastery of ضمائر اور حالت مفعولی (Pronouns & Oblique Forms).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » (حصہ 3) اور ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (3.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (3.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (3.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ضمائر اور حالت مفعولی (Pronouns & Oblique Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (3.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (3.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (3.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (3.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (3.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (3.3.3)۔"
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
                    "prompt": "کون سا بیان « ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 3-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (3.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (3.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (3.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اندر»):",
                    "acceptedAnswers": [
                        "اندر"
                    ],
                    "explanation": "The target keyword was: 【اندر】"
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
        "objective": "Comprehensive mastery of ضمائر اور حالت مفعولی (Pronouns & Oblique Forms).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » (حصہ 4) اور ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (3.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (3.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (3.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ضمائر اور حالت مفعولی (Pronouns & Oblique Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (3.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (3.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (3.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (3.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (3.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (3.4.3)۔"
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
                    "prompt": "کون سا بیان « ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 3-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (3.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (3.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (3.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سامنے»):",
                    "acceptedAnswers": [
                        "سامنے"
                    ],
                    "explanation": "The target keyword was: 【سامنے】"
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
        "objective": "Comprehensive mastery of ضمائر اور حالت مفعولی (Pronouns & Oblique Forms).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » (حصہ 5) اور ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (3.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (3.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (3.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ضمائر اور حالت مفعولی (Pronouns & Oblique Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (3.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (3.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (3.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضمائر اور حالت مفعولی کے پرسرگ (Pronouns & Oblique Case) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (3.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (3.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (3.5.3)۔"
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
                    "prompt": "کون سا بیان « ضمائر اور حالت مفعولی (Pronouns & Oblique Forms) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 3-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (3.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (3.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (3.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تمہارا»):",
                    "acceptedAnswers": [
                        "تمہارا"
                    ],
                    "explanation": "The target keyword was: 【تمہارا】"
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
        "objective": "Comprehensive mastery of فعل حال مطلق (Present Habitual Tense: تا/تی/تے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » (حصہ 1) اور فعل حال مطلق (Present Habitual Tense: تا/تی/تے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (4.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (4.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (4.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال مطلق (Present Habitual Tense: تا/تی/تے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (4.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (4.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (4.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (4.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (4.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (4.1.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 4-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (4.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (4.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (4.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پڑھتا_ہے»):",
                    "acceptedAnswers": [
                        "پڑھتا_ہے"
                    ],
                    "explanation": "The target keyword was: 【پڑھتا_ہے】"
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
        "objective": "Comprehensive mastery of فعل حال مطلق (Present Habitual Tense: تا/تی/تے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » (حصہ 2) اور فعل حال مطلق (Present Habitual Tense: تا/تی/تے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (4.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (4.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (4.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال مطلق (Present Habitual Tense: تا/تی/تے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (4.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (4.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (4.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (4.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (4.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (4.2.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 4-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (4.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (4.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (4.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («لکھتی_ہے»):",
                    "acceptedAnswers": [
                        "لکھتی_ہے"
                    ],
                    "explanation": "The target keyword was: 【لکھتی_ہے】"
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
        "objective": "Comprehensive mastery of فعل حال مطلق (Present Habitual Tense: تا/تی/تے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » (حصہ 3) اور فعل حال مطلق (Present Habitual Tense: تا/تی/تے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (4.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (4.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (4.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال مطلق (Present Habitual Tense: تا/تی/تے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (4.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (4.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (4.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (4.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (4.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (4.3.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 4-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (4.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (4.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (4.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کھیلتے_ہیں»):",
                    "acceptedAnswers": [
                        "کھیلتے_ہیں"
                    ],
                    "explanation": "The target keyword was: 【کھیلتے_ہیں】"
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
        "objective": "Comprehensive mastery of فعل حال مطلق (Present Habitual Tense: تا/تی/تے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » (حصہ 4) اور فعل حال مطلق (Present Habitual Tense: تا/تی/تے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (4.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (4.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (4.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال مطلق (Present Habitual Tense: تا/تی/تے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (4.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (4.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (4.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (4.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (4.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (4.4.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 4-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (4.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (4.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (4.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بولتا_ہے»):",
                    "acceptedAnswers": [
                        "بولتا_ہے"
                    ],
                    "explanation": "The target keyword was: 【بولتا_ہے】"
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
        "objective": "Comprehensive mastery of فعل حال مطلق (Present Habitual Tense: تا/تی/تے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » (حصہ 5) اور فعل حال مطلق (Present Habitual Tense: تا/تی/تے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (4.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (4.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (4.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال مطلق (Present Habitual Tense: تا/تی/تے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (4.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (4.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (4.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال مطلق: تا/تی/تے ہیں (Present Habitual Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (4.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (4.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (4.5.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال مطلق (Present Habitual Tense: تا/تی/تے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 4-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (4.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (4.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (4.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سیکھتے_ہیں»):",
                    "acceptedAnswers": [
                        "سیکھتے_ہیں"
                    ],
                    "explanation": "The target keyword was: 【سیکھتے_ہیں】"
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
        "objective": "Comprehensive mastery of فعل حال جاری (Present Continuous: رہا/رہی ہے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » (حصہ 1) اور فعل حال جاری (Present Continuous: رہا/رہی ہے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (5.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (5.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (5.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال جاری (Present Continuous: رہا/رہی ہے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (5.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (5.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (5.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (5.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (5.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (5.1.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 5-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (5.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (5.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (5.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پڑھ_رہا_ہے»):",
                    "acceptedAnswers": [
                        "پڑھ_رہا_ہے"
                    ],
                    "explanation": "The target keyword was: 【پڑھ_رہا_ہے】"
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
        "objective": "Comprehensive mastery of فعل حال جاری (Present Continuous: رہا/رہی ہے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » (حصہ 2) اور فعل حال جاری (Present Continuous: رہا/رہی ہے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (5.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (5.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (5.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال جاری (Present Continuous: رہا/رہی ہے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (5.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (5.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (5.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (5.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (5.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (5.2.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 5-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (5.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (5.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (5.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کھا_رہی_ہے»):",
                    "acceptedAnswers": [
                        "کھا_رہی_ہے"
                    ],
                    "explanation": "The target keyword was: 【کھا_رہی_ہے】"
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
        "objective": "Comprehensive mastery of فعل حال جاری (Present Continuous: رہا/رہی ہے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » (حصہ 3) اور فعل حال جاری (Present Continuous: رہا/رہی ہے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (5.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (5.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (5.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال جاری (Present Continuous: رہا/رہی ہے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (5.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (5.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (5.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (5.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (5.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (5.3.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 5-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (5.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (5.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (5.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جا_رہے_ہیں»):",
                    "acceptedAnswers": [
                        "جا_رہے_ہیں"
                    ],
                    "explanation": "The target keyword was: 【جا_رہے_ہیں】"
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
        "objective": "Comprehensive mastery of فعل حال جاری (Present Continuous: رہا/رہی ہے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » (حصہ 4) اور فعل حال جاری (Present Continuous: رہا/رہی ہے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (5.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (5.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (5.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال جاری (Present Continuous: رہا/رہی ہے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (5.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (5.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (5.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (5.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (5.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (5.4.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 5-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (5.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (5.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (5.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سوچ_رہا_ہے»):",
                    "acceptedAnswers": [
                        "سوچ_رہا_ہے"
                    ],
                    "explanation": "The target keyword was: 【سوچ_رہا_ہے】"
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
        "objective": "Comprehensive mastery of فعل حال جاری (Present Continuous: رہا/رہی ہے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » (حصہ 5) اور فعل حال جاری (Present Continuous: رہا/رہی ہے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (5.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (5.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (5.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل حال جاری (Present Continuous: رہا/رہی ہے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (5.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (5.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (5.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل حال جاری: رہا/رہی/رہے ہیں (Present Continuous Tense) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (5.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (5.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (5.5.3)۔"
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
                    "prompt": "کون سا بیان « فعل حال جاری (Present Continuous: رہا/رہی ہے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 5-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (5.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (5.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (5.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («دیکھ_رہے_ہیں»):",
                    "acceptedAnswers": [
                        "دیکھ_رہے_ہیں"
                    ],
                    "explanation": "The target keyword was: 【دیکھ_رہے_ہیں】"
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
        "objective": "Comprehensive mastery of فعل ماضی اور علامت فاعل نے (Simple Past with نے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » (حصہ 1) اور فعل ماضی اور علامت فاعل نے (Simple Past with نے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (6.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (6.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (6.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل ماضی اور علامت فاعل نے (Simple Past with نے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (6.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (6.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (6.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (6.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (6.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (6.1.3)۔"
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
                    "prompt": "کون سا بیان « فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 6-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (6.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (6.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (6.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کہا»):",
                    "acceptedAnswers": [
                        "کہا"
                    ],
                    "explanation": "The target keyword was: 【کہا】"
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
        "objective": "Comprehensive mastery of فعل ماضی اور علامت فاعل نے (Simple Past with نے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » (حصہ 2) اور فعل ماضی اور علامت فاعل نے (Simple Past with نے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (6.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (6.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (6.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل ماضی اور علامت فاعل نے (Simple Past with نے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (6.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (6.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (6.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (6.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (6.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (6.2.3)۔"
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
                    "prompt": "کون سا بیان « فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 6-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (6.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (6.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (6.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سنا»):",
                    "acceptedAnswers": [
                        "سنا"
                    ],
                    "explanation": "The target keyword was: 【سنا】"
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
        "objective": "Comprehensive mastery of فعل ماضی اور علامت فاعل نے (Simple Past with نے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » (حصہ 3) اور فعل ماضی اور علامت فاعل نے (Simple Past with نے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (6.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (6.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (6.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل ماضی اور علامت فاعل نے (Simple Past with نے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (6.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (6.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (6.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (6.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (6.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (6.3.3)۔"
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
                    "prompt": "کون سا بیان « فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 6-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (6.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (6.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (6.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («خریدا»):",
                    "acceptedAnswers": [
                        "خریدا"
                    ],
                    "explanation": "The target keyword was: 【خریدا】"
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
        "objective": "Comprehensive mastery of فعل ماضی اور علامت فاعل نے (Simple Past with نے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » (حصہ 4) اور فعل ماضی اور علامت فاعل نے (Simple Past with نے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (6.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (6.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (6.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل ماضی اور علامت فاعل نے (Simple Past with نے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (6.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (6.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (6.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (6.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (6.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (6.4.3)۔"
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
                    "prompt": "کون سا بیان « فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 6-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (6.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (6.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (6.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بھیجا»):",
                    "acceptedAnswers": [
                        "بھیجا"
                    ],
                    "explanation": "The target keyword was: 【بھیجا】"
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
        "objective": "Comprehensive mastery of فعل ماضی اور علامت فاعل نے (Simple Past with نے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » (حصہ 5) اور فعل ماضی اور علامت فاعل نے (Simple Past with نے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (6.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (6.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (6.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل ماضی اور علامت فاعل نے (Simple Past with نے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (6.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (6.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (6.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی مطلق اور نے کا استعمال (Simple Past & Ergative نے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (6.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (6.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (6.5.3)۔"
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
                    "prompt": "کون سا بیان « فعل ماضی اور علامت فاعل نے (Simple Past with نے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 6-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (6.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (6.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (6.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پہنچا»):",
                    "acceptedAnswers": [
                        "پہنچا"
                    ],
                    "explanation": "The target keyword was: 【پہنچا】"
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
        "objective": "Comprehensive mastery of ماضی استمراری اور ماضی بعید (Past Continuous & Perfect).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » (حصہ 1) اور ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (7.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (7.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (7.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ماضی استمراری اور ماضی بعید (Past Continuous & Perfect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (7.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (7.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (7.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (7.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (7.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (7.1.3)۔"
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
                    "prompt": "کون سا بیان « ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 7-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (7.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (7.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (7.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تھا»):",
                    "acceptedAnswers": [
                        "تھا"
                    ],
                    "explanation": "The target keyword was: 【تھا】"
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
        "objective": "Comprehensive mastery of ماضی استمراری اور ماضی بعید (Past Continuous & Perfect).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » (حصہ 2) اور ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (7.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (7.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (7.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ماضی استمراری اور ماضی بعید (Past Continuous & Perfect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (7.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (7.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (7.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (7.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (7.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (7.2.3)۔"
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
                    "prompt": "کون سا بیان « ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 7-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (7.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (7.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (7.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تھی»):",
                    "acceptedAnswers": [
                        "تھی"
                    ],
                    "explanation": "The target keyword was: 【تھی】"
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
        "objective": "Comprehensive mastery of ماضی استمراری اور ماضی بعید (Past Continuous & Perfect).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » (حصہ 3) اور ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (7.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (7.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (7.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ماضی استمراری اور ماضی بعید (Past Continuous & Perfect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (7.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (7.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (7.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (7.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (7.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (7.3.3)۔"
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
                    "prompt": "کون سا بیان « ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 7-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (7.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (7.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (7.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («چکا_تھا»):",
                    "acceptedAnswers": [
                        "چکا_تھا"
                    ],
                    "explanation": "The target keyword was: 【چکا_تھا】"
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
        "objective": "Comprehensive mastery of ماضی استمراری اور ماضی بعید (Past Continuous & Perfect).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » (حصہ 4) اور ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (7.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (7.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (7.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ماضی استمراری اور ماضی بعید (Past Continuous & Perfect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (7.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (7.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (7.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (7.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (7.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (7.4.3)۔"
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
                    "prompt": "کون سا بیان « ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 7-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (7.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (7.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (7.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («گئے_تھے»):",
                    "acceptedAnswers": [
                        "گئے_تھے"
                    ],
                    "explanation": "The target keyword was: 【گئے_تھے】"
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
        "objective": "Comprehensive mastery of ماضی استمراری اور ماضی بعید (Past Continuous & Perfect).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » (حصہ 5) اور ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (7.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (7.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (7.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ماضی استمراری اور ماضی بعید (Past Continuous & Perfect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (7.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (7.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (7.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (7.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (7.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (7.5.3)۔"
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
                    "prompt": "کون سا بیان « ماضی استمراری اور ماضی بعید (Past Continuous & Perfect) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 7-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (7.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (7.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (7.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («رہا_تھا»):",
                    "acceptedAnswers": [
                        "رہا_تھا"
                    ],
                    "explanation": "The target keyword was: 【رہا_تھا】"
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
        "objective": "Comprehensive mastery of فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » (حصہ 1) اور فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (8.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (8.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (8.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (8.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (8.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (8.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (8.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (8.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (8.1.3)۔"
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
                    "prompt": "کون سا بیان « فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 8-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (8.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (8.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (8.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جاؤں_گا»):",
                    "acceptedAnswers": [
                        "جاؤں_گا"
                    ],
                    "explanation": "The target keyword was: 【جاؤں_گا】"
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
        "objective": "Comprehensive mastery of فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » (حصہ 2) اور فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (8.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (8.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (8.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (8.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (8.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (8.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (8.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (8.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (8.2.3)۔"
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
                    "prompt": "کون سا بیان « فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 8-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (8.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (8.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (8.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («آئیں_گے»):",
                    "acceptedAnswers": [
                        "آئیں_گے"
                    ],
                    "explanation": "The target keyword was: 【آئیں_گے】"
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
        "objective": "Comprehensive mastery of فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » (حصہ 3) اور فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (8.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (8.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (8.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (8.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (8.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (8.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (8.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (8.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (8.3.3)۔"
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
                    "prompt": "کون سا بیان « فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 8-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (8.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (8.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (8.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کیجئے»):",
                    "acceptedAnswers": [
                        "کیجئے"
                    ],
                    "explanation": "The target keyword was: 【کیجئے】"
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
        "objective": "Comprehensive mastery of فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » (حصہ 4) اور فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (8.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (8.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (8.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (8.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (8.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (8.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (8.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (8.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (8.4.3)۔"
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
                    "prompt": "کون سا بیان « فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 8-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (8.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (8.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (8.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تشریف_رکھیئے»):",
                    "acceptedAnswers": [
                        "تشریف_رکھیئے"
                    ],
                    "explanation": "The target keyword was: 【تشریف_رکھیئے】"
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
        "objective": "Comprehensive mastery of فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » (حصہ 5) اور فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (8.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (8.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (8.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (8.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (8.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (8.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مستقبل اور شائستہ احکامات (Future Tense & Polite) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (8.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (8.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (8.5.3)۔"
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
                    "prompt": "کون سا بیان « فعل مستقبل اور تعظیمی صیغے (Future Tense & Polite Orders) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 8-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (8.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (8.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (8.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بتائیے»):",
                    "acceptedAnswers": [
                        "بتائیے"
                    ],
                    "explanation": "The target keyword was: 【بتائیے】"
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
        "objective": "Comprehensive mastery of وجوب اور چاہیے کا استعمال (Obligation with چاہیے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » (حصہ 1) اور وجوب اور چاہیے کا استعمال (Obligation with چاہیے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (9.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (9.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (9.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for وجوب اور چاہیے کا استعمال (Obligation with چاہیے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (9.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (9.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (9.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (9.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (9.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (9.1.3)۔"
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
                    "prompt": "کون سا بیان « وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 9-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (9.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (9.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (9.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («چاہئے»):",
                    "acceptedAnswers": [
                        "چاہئے"
                    ],
                    "explanation": "The target keyword was: 【چاہئے】"
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
        "objective": "Comprehensive mastery of وجوب اور چاہیے کا استعمال (Obligation with چاہیے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » (حصہ 2) اور وجوب اور چاہیے کا استعمال (Obligation with چاہیے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (9.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (9.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (9.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for وجوب اور چاہیے کا استعمال (Obligation with چاہیے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (9.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (9.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (9.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (9.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (9.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (9.2.3)۔"
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
                    "prompt": "کون سا بیان « وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 9-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (9.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (9.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (9.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («فرض»):",
                    "acceptedAnswers": [
                        "فرض"
                    ],
                    "explanation": "The target keyword was: 【فرض】"
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
        "objective": "Comprehensive mastery of وجوب اور چاہیے کا استعمال (Obligation with چاہیے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » (حصہ 3) اور وجوب اور چاہیے کا استعمال (Obligation with چاہیے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (9.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (9.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (9.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for وجوب اور چاہیے کا استعمال (Obligation with چاہیے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (9.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (9.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (9.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (9.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (9.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (9.3.3)۔"
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
                    "prompt": "کون سا بیان « وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 9-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (9.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (9.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (9.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اصول»):",
                    "acceptedAnswers": [
                        "اصول"
                    ],
                    "explanation": "The target keyword was: 【اصول】"
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
        "objective": "Comprehensive mastery of وجوب اور چاہیے کا استعمال (Obligation with چاہیے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » (حصہ 4) اور وجوب اور چاہیے کا استعمال (Obligation with چاہیے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (9.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (9.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (9.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for وجوب اور چاہیے کا استعمال (Obligation with چاہیے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (9.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (9.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (9.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (9.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (9.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (9.4.3)۔"
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
                    "prompt": "کون سا بیان « وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 9-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (9.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (9.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (9.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ضرورت»):",
                    "acceptedAnswers": [
                        "ضرورت"
                    ],
                    "explanation": "The target keyword was: 【ضرورت】"
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
        "objective": "Comprehensive mastery of وجوب اور چاہیے کا استعمال (Obligation with چاہیے).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » (حصہ 5) اور وجوب اور چاہیے کا استعمال (Obligation with چاہیے) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (9.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (9.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (9.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for وجوب اور چاہیے کا استعمال (Obligation with چاہیے)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (9.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (9.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (9.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ضرورت اور وجوب: چاہیے کی ساختیں (Obligation with چاہیے) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (9.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (9.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (9.5.3)۔"
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
                    "prompt": "کون سا بیان « وجوب اور چاہیے کا استعمال (Obligation with چاہیے) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 9-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (9.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (9.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (9.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مناسب»):",
                    "acceptedAnswers": [
                        "مناسب"
                    ],
                    "explanation": "The target keyword was: 【مناسب】"
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
        "objective": "Comprehensive mastery of مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » (حصہ 1) اور مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (10.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (10.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (10.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (10.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (10.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (10.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (10.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (10.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (10.1.3)۔"
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
                    "prompt": "کون سا بیان « مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 10-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (10.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (10.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (10.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پڑا»):",
                    "acceptedAnswers": [
                        "پڑا"
                    ],
                    "explanation": "The target keyword was: 【پڑا】"
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
        "objective": "Comprehensive mastery of مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » (حصہ 2) اور مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (10.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (10.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (10.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (10.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (10.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (10.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (10.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (10.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (10.2.3)۔"
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
                    "prompt": "کون سا بیان « مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 10-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (10.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (10.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (10.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پڑے_گا»):",
                    "acceptedAnswers": [
                        "پڑے_گا"
                    ],
                    "explanation": "The target keyword was: 【پڑے_گا】"
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
        "objective": "Comprehensive mastery of مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » (حصہ 3) اور مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (10.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (10.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (10.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (10.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (10.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (10.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (10.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (10.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (10.3.3)۔"
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
                    "prompt": "کون سا بیان « مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 10-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (10.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (10.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (10.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مجبوری»):",
                    "acceptedAnswers": [
                        "مجبوری"
                    ],
                    "explanation": "The target keyword was: 【مجبوری】"
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
        "objective": "Comprehensive mastery of مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » (حصہ 4) اور مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (10.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (10.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (10.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (10.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (10.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (10.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (10.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (10.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (10.4.3)۔"
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
                    "prompt": "کون سا بیان « مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 10-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (10.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (10.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (10.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («روکنا»):",
                    "acceptedAnswers": [
                        "روکنا"
                    ],
                    "explanation": "The target keyword was: 【روکنا】"
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
        "objective": "Comprehensive mastery of مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » (حصہ 5) اور مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (10.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (10.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (10.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (10.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (10.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (10.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجبوری اور لاچاری: پڑنا اور ہونا (Compulsion with پڑنا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (10.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (10.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (10.5.3)۔"
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
                    "prompt": "کون سا بیان « مجبوری اور پڑنا کی ساختیں (Compulsion with پڑنا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 10-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (10.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (10.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (10.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («برداشت»):",
                    "acceptedAnswers": [
                        "برداشت"
                    ],
                    "explanation": "The target keyword was: 【برداشت】"
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
        "objective": "Comprehensive mastery of ملکیت کا/کے/کی اور کے پاس (Possession Structures).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » (حصہ 1) اور ملکیت کا/کے/کی اور کے پاس (Possession Structures) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (11.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (11.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (11.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ملکیت کا/کے/کی اور کے پاس (Possession Structures)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (11.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (11.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (11.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (11.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (11.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (11.1.3)۔"
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
                    "prompt": "کون سا بیان « ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 11-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (11.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (11.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (11.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پاس»):",
                    "acceptedAnswers": [
                        "پاس"
                    ],
                    "explanation": "The target keyword was: 【پاس】"
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
        "objective": "Comprehensive mastery of ملکیت کا/کے/کی اور کے پاس (Possession Structures).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » (حصہ 2) اور ملکیت کا/کے/کی اور کے پاس (Possession Structures) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (11.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (11.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (11.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ملکیت کا/کے/کی اور کے پاس (Possession Structures)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (11.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (11.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (11.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (11.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (11.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (11.2.3)۔"
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
                    "prompt": "کون سا بیان « ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 11-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (11.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (11.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (11.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ملکیت»):",
                    "acceptedAnswers": [
                        "ملکیت"
                    ],
                    "explanation": "The target keyword was: 【ملکیت】"
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
        "objective": "Comprehensive mastery of ملکیت کا/کے/کی اور کے پاس (Possession Structures).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » (حصہ 3) اور ملکیت کا/کے/کی اور کے پاس (Possession Structures) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (11.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (11.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (11.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ملکیت کا/کے/کی اور کے پاس (Possession Structures)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (11.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (11.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (11.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (11.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (11.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (11.3.3)۔"
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
                    "prompt": "کون سا بیان « ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 11-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (11.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (11.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (11.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («حق»):",
                    "acceptedAnswers": [
                        "حق"
                    ],
                    "explanation": "The target keyword was: 【حق】"
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
        "objective": "Comprehensive mastery of ملکیت کا/کے/کی اور کے پاس (Possession Structures).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » (حصہ 4) اور ملکیت کا/کے/کی اور کے پاس (Possession Structures) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (11.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (11.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (11.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ملکیت کا/کے/کی اور کے پاس (Possession Structures)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (11.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (11.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (11.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (11.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (11.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (11.4.3)۔"
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
                    "prompt": "کون سا بیان « ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 11-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (11.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (11.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (11.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جائیداد»):",
                    "acceptedAnswers": [
                        "جائیداد"
                    ],
                    "explanation": "The target keyword was: 【جائیداد】"
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
        "objective": "Comprehensive mastery of ملکیت کا/کے/کی اور کے پاس (Possession Structures).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » (حصہ 5) اور ملکیت کا/کے/کی اور کے پاس (Possession Structures) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (11.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (11.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (11.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ملکیت کا/کے/کی اور کے پاس (Possession Structures)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (11.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (11.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (11.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ملکیت کی ساختیں: کا/کے/کی اور کے پاس (Possession) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (11.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (11.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (11.5.3)۔"
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
                    "prompt": "کون سا بیان « ملکیت کا/کے/کی اور کے پاس (Possession Structures) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 11-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (11.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (11.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (11.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («آبائی»):",
                    "acceptedAnswers": [
                        "آبائی"
                    ],
                    "explanation": "The target keyword was: 【آبائی】"
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
        "objective": "Comprehensive mastery of مرکب افعال اور امدادی افعال (Compound Verbs & Vectors).",
        "presentation": {
            "explanation": "اس سبق میں ہم « امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » (حصہ 1) اور مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (12.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (12.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (12.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مرکب افعال اور امدادی افعال (Compound Verbs & Vectors)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (12.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (12.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (12.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (12.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (12.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (12.1.3)۔"
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
                    "prompt": "کون سا بیان « مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 12-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (12.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (12.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (12.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ڈالنا»):",
                    "acceptedAnswers": [
                        "ڈالنا"
                    ],
                    "explanation": "The target keyword was: 【ڈالنا】"
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
        "objective": "Comprehensive mastery of مرکب افعال اور امدادی افعال (Compound Verbs & Vectors).",
        "presentation": {
            "explanation": "اس سبق میں ہم « امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » (حصہ 2) اور مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (12.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (12.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (12.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مرکب افعال اور امدادی افعال (Compound Verbs & Vectors)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (12.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (12.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (12.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (12.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (12.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (12.2.3)۔"
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
                    "prompt": "کون سا بیان « مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 12-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (12.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (12.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (12.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بیٹھنا»):",
                    "acceptedAnswers": [
                        "بیٹھنا"
                    ],
                    "explanation": "The target keyword was: 【بیٹھنا】"
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
        "objective": "Comprehensive mastery of مرکب افعال اور امدادی افعال (Compound Verbs & Vectors).",
        "presentation": {
            "explanation": "اس سبق میں ہم « امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » (حصہ 3) اور مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (12.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (12.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (12.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مرکب افعال اور امدادی افعال (Compound Verbs & Vectors)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (12.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (12.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (12.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (12.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (12.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (12.3.3)۔"
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
                    "prompt": "کون سا بیان « مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 12-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (12.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (12.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (12.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اٹھنا»):",
                    "acceptedAnswers": [
                        "اٹھنا"
                    ],
                    "explanation": "The target keyword was: 【اٹھنا】"
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
        "objective": "Comprehensive mastery of مرکب افعال اور امدادی افعال (Compound Verbs & Vectors).",
        "presentation": {
            "explanation": "اس سبق میں ہم « امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » (حصہ 4) اور مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (12.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (12.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (12.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مرکب افعال اور امدادی افعال (Compound Verbs & Vectors)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (12.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (12.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (12.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (12.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (12.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (12.4.3)۔"
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
                    "prompt": "کون سا بیان « مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 12-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (12.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (12.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (12.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پڑنا»):",
                    "acceptedAnswers": [
                        "پڑنا"
                    ],
                    "explanation": "The target keyword was: 【پڑنا】"
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
        "objective": "Comprehensive mastery of مرکب افعال اور امدادی افعال (Compound Verbs & Vectors).",
        "presentation": {
            "explanation": "اس سبق میں ہم « امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » (حصہ 5) اور مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (12.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (12.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (12.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for مرکب افعال اور امدادی افعال (Compound Verbs & Vectors)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (12.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (12.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (12.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« امدادی افعال اور مرکب افعال (Compound Verbs with Vectors) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (12.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (12.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (12.5.3)۔"
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
                    "prompt": "کون سا بیان « مرکب افعال اور امدادی افعال (Compound Verbs & Vectors) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 12-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (12.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (12.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (12.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («لینا»):",
                    "acceptedAnswers": [
                        "لینا"
                    ],
                    "explanation": "The target keyword was: 【لینا】"
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
        "objective": "Comprehensive mastery of فعل مضارع اور امکان (Subjunctive Mood & Possibility).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » (حصہ 1) اور فعل مضارع اور امکان (Subjunctive Mood & Possibility) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (13.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (13.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (13.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مضارع اور امکان (Subjunctive Mood & Possibility)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (13.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (13.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (13.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (13.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (13.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (13.1.3)۔"
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
                    "prompt": "کون سا بیان « فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 13-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (13.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (13.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (13.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («شاید»):",
                    "acceptedAnswers": [
                        "شاید"
                    ],
                    "explanation": "The target keyword was: 【شاید】"
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
        "objective": "Comprehensive mastery of فعل مضارع اور امکان (Subjunctive Mood & Possibility).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » (حصہ 2) اور فعل مضارع اور امکان (Subjunctive Mood & Possibility) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (13.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (13.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (13.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مضارع اور امکان (Subjunctive Mood & Possibility)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (13.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (13.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (13.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (13.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (13.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (13.2.3)۔"
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
                    "prompt": "کون سا بیان « فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 13-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (13.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (13.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (13.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ممکن_ہے»):",
                    "acceptedAnswers": [
                        "ممکن_ہے"
                    ],
                    "explanation": "The target keyword was: 【ممکن_ہے】"
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
        "objective": "Comprehensive mastery of فعل مضارع اور امکان (Subjunctive Mood & Possibility).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » (حصہ 3) اور فعل مضارع اور امکان (Subjunctive Mood & Possibility) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (13.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (13.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (13.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مضارع اور امکان (Subjunctive Mood & Possibility)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (13.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (13.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (13.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (13.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (13.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (13.3.3)۔"
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
                    "prompt": "کون سا بیان « فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 13-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (13.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (13.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (13.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کاش»):",
                    "acceptedAnswers": [
                        "کاش"
                    ],
                    "explanation": "The target keyword was: 【کاش】"
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
        "objective": "Comprehensive mastery of فعل مضارع اور امکان (Subjunctive Mood & Possibility).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » (حصہ 4) اور فعل مضارع اور امکان (Subjunctive Mood & Possibility) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (13.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (13.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (13.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مضارع اور امکان (Subjunctive Mood & Possibility)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (13.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (13.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (13.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (13.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (13.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (13.4.3)۔"
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
                    "prompt": "کون سا بیان « فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 13-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (13.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (13.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (13.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («خواہش»):",
                    "acceptedAnswers": [
                        "خواہش"
                    ],
                    "explanation": "The target keyword was: 【خواہش】"
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
        "objective": "Comprehensive mastery of فعل مضارع اور امکان (Subjunctive Mood & Possibility).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » (حصہ 5) اور فعل مضارع اور امکان (Subjunctive Mood & Possibility) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (13.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (13.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (13.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مضارع اور امکان (Subjunctive Mood & Possibility)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (13.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (13.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (13.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فعل مضارع اور احتمالی صورتیں (Subjunctive Mood) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (13.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (13.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (13.5.3)۔"
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
                    "prompt": "کون سا بیان « فعل مضارع اور امکان (Subjunctive Mood & Possibility) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 13-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (13.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (13.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (13.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اجازت»):",
                    "acceptedAnswers": [
                        "اجازت"
                    ],
                    "explanation": "The target keyword was: 【اجازت】"
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
        "objective": "Comprehensive mastery of معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر).",
        "presentation": {
            "explanation": "اس سبق میں ہم « معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » (حصہ 1) اور معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (14.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (14.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (14.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (14.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (14.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (14.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (14.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (14.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (14.1.3)۔"
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
                    "prompt": "کون سا بیان « معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 14-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (14.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (14.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (14.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جا_کر»):",
                    "acceptedAnswers": [
                        "جا_کر"
                    ],
                    "explanation": "The target keyword was: 【جا_کر】"
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
        "objective": "Comprehensive mastery of معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر).",
        "presentation": {
            "explanation": "اس سبق میں ہم « معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » (حصہ 2) اور معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (14.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (14.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (14.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (14.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (14.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (14.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (14.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (14.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (14.2.3)۔"
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
                    "prompt": "کون سا بیان « معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 14-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (14.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (14.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (14.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کھا_کر»):",
                    "acceptedAnswers": [
                        "کھا_کر"
                    ],
                    "explanation": "The target keyword was: 【کھا_کر】"
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
        "objective": "Comprehensive mastery of معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر).",
        "presentation": {
            "explanation": "اس سبق میں ہم « معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » (حصہ 3) اور معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (14.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (14.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (14.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (14.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (14.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (14.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (14.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (14.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (14.3.3)۔"
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
                    "prompt": "کون سا بیان « معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 14-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (14.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (14.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (14.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سوچ_کر»):",
                    "acceptedAnswers": [
                        "سوچ_کر"
                    ],
                    "explanation": "The target keyword was: 【سوچ_کر】"
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
        "objective": "Comprehensive mastery of معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر).",
        "presentation": {
            "explanation": "اس سبق میں ہم « معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » (حصہ 4) اور معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (14.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (14.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (14.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (14.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (14.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (14.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (14.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (14.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (14.4.3)۔"
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
                    "prompt": "کون سا بیان « معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 14-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (14.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (14.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (14.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مل_کر»):",
                    "acceptedAnswers": [
                        "مل_کر"
                    ],
                    "explanation": "The target keyword was: 【مل_کر】"
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
        "objective": "Comprehensive mastery of معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر).",
        "presentation": {
            "explanation": "اس سبق میں ہم « معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » (حصہ 5) اور معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (14.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (14.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (14.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (14.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (14.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (14.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« معطوفہ افعال: کر کا لاحقہ (Conjunctive Participles) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (14.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (14.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (14.5.3)۔"
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
                    "prompt": "کون سا بیان « معطوفہ افعال کر کا لاحقہ (Conjunctive Participles with کر) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 14-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (14.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (14.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (14.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («دیکھ_کر»):",
                    "acceptedAnswers": [
                        "دیکھ_کر"
                    ],
                    "explanation": "The target keyword was: 【دیکھ_کر】"
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
        "objective": "Comprehensive mastery of موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » (حصہ 1) اور موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (15.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (15.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (15.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (15.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (15.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (15.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (15.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (15.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (15.1.3)۔"
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
                    "prompt": "کون سا بیان « موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 15-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (15.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (15.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (15.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جو»):",
                    "acceptedAnswers": [
                        "جو"
                    ],
                    "explanation": "The target keyword was: 【جو】"
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
        "objective": "Comprehensive mastery of موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » (حصہ 2) اور موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (15.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (15.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (15.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (15.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (15.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (15.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (15.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (15.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (15.2.3)۔"
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
                    "prompt": "کون سا بیان « موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 15-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (15.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (15.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (15.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سو»):",
                    "acceptedAnswers": [
                        "سو"
                    ],
                    "explanation": "The target keyword was: 【سو】"
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
        "objective": "Comprehensive mastery of موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » (حصہ 3) اور موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (15.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (15.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (15.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (15.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (15.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (15.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (15.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (15.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (15.3.3)۔"
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
                    "prompt": "کون سا بیان « موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 15-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (15.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (15.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (15.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جیسا»):",
                    "acceptedAnswers": [
                        "جیسا"
                    ],
                    "explanation": "The target keyword was: 【جیسا】"
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
        "objective": "Comprehensive mastery of موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » (حصہ 4) اور موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (15.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (15.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (15.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (15.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (15.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (15.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (15.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (15.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (15.4.3)۔"
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
                    "prompt": "کون سا بیان « موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 15-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (15.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (15.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (15.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ویسا»):",
                    "acceptedAnswers": [
                        "ویسا"
                    ],
                    "explanation": "The target keyword was: 【ویسا】"
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
        "objective": "Comprehensive mastery of موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » (حصہ 5) اور موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (15.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (15.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (15.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (15.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (15.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (15.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« موصولہ اور جواب موصولہ جملے: جو...وہ (Correlatives) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (15.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (15.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (15.5.3)۔"
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
                    "prompt": "کون سا بیان « موصولہ اور جواب موصولہ جملے (Relative Correlatives: جو...وہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 15-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (15.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (15.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (15.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جتنا»):",
                    "acceptedAnswers": [
                        "جتنا"
                    ],
                    "explanation": "The target keyword was: 【جتنا】"
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
        "objective": "Comprehensive mastery of فعل مجہول کی ساختیں (Passive Voice with جانا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » (حصہ 1) اور فعل مجہول کی ساختیں (Passive Voice with جانا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (16.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (16.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (16.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مجہول کی ساختیں (Passive Voice with جانا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مجہول کی ساختیں (Passive Voice with جانا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (16.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (16.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (16.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (16.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (16.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (16.1.3)۔"
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
                    "prompt": "کون سا بیان « فعل مجہول کی ساختیں (Passive Voice with جانا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 16-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (16.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (16.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (16.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بنایا_گیا»):",
                    "acceptedAnswers": [
                        "بنایا_گیا"
                    ],
                    "explanation": "The target keyword was: 【بنایا_گیا】"
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
        "objective": "Comprehensive mastery of فعل مجہول کی ساختیں (Passive Voice with جانا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » (حصہ 2) اور فعل مجہول کی ساختیں (Passive Voice with جانا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (16.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (16.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (16.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مجہول کی ساختیں (Passive Voice with جانا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مجہول کی ساختیں (Passive Voice with جانا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (16.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (16.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (16.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (16.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (16.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (16.2.3)۔"
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
                    "prompt": "کون سا بیان « فعل مجہول کی ساختیں (Passive Voice with جانا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 16-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (16.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (16.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (16.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («لکھا_گیا»):",
                    "acceptedAnswers": [
                        "لکھا_گیا"
                    ],
                    "explanation": "The target keyword was: 【لکھا_گیا】"
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
        "objective": "Comprehensive mastery of فعل مجہول کی ساختیں (Passive Voice with جانا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » (حصہ 3) اور فعل مجہول کی ساختیں (Passive Voice with جانا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (16.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (16.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (16.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مجہول کی ساختیں (Passive Voice with جانا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مجہول کی ساختیں (Passive Voice with جانا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (16.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (16.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (16.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (16.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (16.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (16.3.3)۔"
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
                    "prompt": "کون سا بیان « فعل مجہول کی ساختیں (Passive Voice with جانا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 16-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (16.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (16.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (16.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پڑھا_گیا»):",
                    "acceptedAnswers": [
                        "پڑھا_گیا"
                    ],
                    "explanation": "The target keyword was: 【پڑھا_گیا】"
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
        "objective": "Comprehensive mastery of فعل مجہول کی ساختیں (Passive Voice with جانا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » (حصہ 4) اور فعل مجہول کی ساختیں (Passive Voice with جانا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (16.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (16.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (16.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مجہول کی ساختیں (Passive Voice with جانا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مجہول کی ساختیں (Passive Voice with جانا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (16.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (16.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (16.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (16.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (16.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (16.4.3)۔"
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
                    "prompt": "کون سا بیان « فعل مجہول کی ساختیں (Passive Voice with جانا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 16-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (16.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (16.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (16.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اعلان_ہوا»):",
                    "acceptedAnswers": [
                        "اعلان_ہوا"
                    ],
                    "explanation": "The target keyword was: 【اعلان_ہوا】"
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
        "objective": "Comprehensive mastery of فعل مجہول کی ساختیں (Passive Voice with جانا).",
        "presentation": {
            "explanation": "اس سبق میں ہم « مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » (حصہ 5) اور فعل مجہول کی ساختیں (Passive Voice with جانا) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (16.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (16.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (16.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فعل مجہول کی ساختیں (Passive Voice with جانا)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فعل مجہول کی ساختیں (Passive Voice with جانا) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (16.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (16.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (16.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« مجہول ساختیں: جانا کی مدد سے (Passive Voice with جانا) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (16.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (16.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (16.5.3)۔"
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
                    "prompt": "کون سا بیان « فعل مجہول کی ساختیں (Passive Voice with جانا) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 16-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (16.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (16.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (16.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («منعقد_ہوا»):",
                    "acceptedAnswers": [
                        "منعقد_ہوا"
                    ],
                    "explanation": "The target keyword was: 【منعقد_ہوا】"
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
        "objective": "Comprehensive mastery of متعدی اور متعدی المتعدی افعال (Causative Morphology).",
        "presentation": {
            "explanation": "اس سبق میں ہم « متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » (حصہ 1) اور متعدی اور متعدی المتعدی افعال (Causative Morphology) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (17.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (17.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (17.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for متعدی اور متعدی المتعدی افعال (Causative Morphology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (17.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (17.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (17.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (17.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (17.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (17.1.3)۔"
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
                    "prompt": "کون سا بیان « متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 17-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (17.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (17.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (17.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پلانا»):",
                    "acceptedAnswers": [
                        "پلانا"
                    ],
                    "explanation": "The target keyword was: 【پلانا】"
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
        "objective": "Comprehensive mastery of متعدی اور متعدی المتعدی افعال (Causative Morphology).",
        "presentation": {
            "explanation": "اس سبق میں ہم « متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » (حصہ 2) اور متعدی اور متعدی المتعدی افعال (Causative Morphology) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (17.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (17.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (17.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for متعدی اور متعدی المتعدی افعال (Causative Morphology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (17.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (17.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (17.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (17.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (17.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (17.2.3)۔"
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
                    "prompt": "کون سا بیان « متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 17-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (17.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (17.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (17.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سکھانا»):",
                    "acceptedAnswers": [
                        "سکھانا"
                    ],
                    "explanation": "The target keyword was: 【سکھانا】"
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
        "objective": "Comprehensive mastery of متعدی اور متعدی المتعدی افعال (Causative Morphology).",
        "presentation": {
            "explanation": "اس سبق میں ہم « متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » (حصہ 3) اور متعدی اور متعدی المتعدی افعال (Causative Morphology) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (17.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (17.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (17.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for متعدی اور متعدی المتعدی افعال (Causative Morphology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (17.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (17.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (17.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (17.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (17.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (17.3.3)۔"
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
                    "prompt": "کون سا بیان « متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 17-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (17.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (17.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (17.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کروانا»):",
                    "acceptedAnswers": [
                        "کروانا"
                    ],
                    "explanation": "The target keyword was: 【کروانا】"
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
        "objective": "Comprehensive mastery of متعدی اور متعدی المتعدی افعال (Causative Morphology).",
        "presentation": {
            "explanation": "اس سبق میں ہم « متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » (حصہ 4) اور متعدی اور متعدی المتعدی افعال (Causative Morphology) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (17.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (17.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (17.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for متعدی اور متعدی المتعدی افعال (Causative Morphology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (17.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (17.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (17.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (17.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (17.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (17.4.3)۔"
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
                    "prompt": "کون سا بیان « متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 17-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (17.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (17.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (17.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («دکھانا»):",
                    "acceptedAnswers": [
                        "دکھانا"
                    ],
                    "explanation": "The target keyword was: 【دکھانا】"
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
        "objective": "Comprehensive mastery of متعدی اور متعدی المتعدی افعال (Causative Morphology).",
        "presentation": {
            "explanation": "اس سبق میں ہم « متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » (حصہ 5) اور متعدی اور متعدی المتعدی افعال (Causative Morphology) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (17.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (17.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (17.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for متعدی اور متعدی المتعدی افعال (Causative Morphology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (17.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (17.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (17.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« متعدی اور متعدی المتعدی افعال (Causative Verb Morphology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (17.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (17.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (17.5.3)۔"
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
                    "prompt": "کون سا بیان « متعدی اور متعدی المتعدی افعال (Causative Morphology) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 17-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (17.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (17.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (17.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سلانا»):",
                    "acceptedAnswers": [
                        "سلانا"
                    ],
                    "explanation": "The target keyword was: 【سلانا】"
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
        "objective": "Comprehensive mastery of اگر...تو شرطیہ جملے (Conditionals: اگر...تو).",
        "presentation": {
            "explanation": "اس سبق میں ہم « شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » (حصہ 1) اور اگر...تو شرطیہ جملے (Conditionals: اگر...تو) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (18.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (18.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (18.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اگر...تو شرطیہ جملے (Conditionals: اگر...تو)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (18.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (18.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (18.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (18.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (18.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (18.1.3)۔"
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
                    "prompt": "کون سا بیان « اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 18-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (18.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (18.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (18.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اگر»):",
                    "acceptedAnswers": [
                        "اگر"
                    ],
                    "explanation": "The target keyword was: 【اگر】"
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
        "objective": "Comprehensive mastery of اگر...تو شرطیہ جملے (Conditionals: اگر...تو).",
        "presentation": {
            "explanation": "اس سبق میں ہم « شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » (حصہ 2) اور اگر...تو شرطیہ جملے (Conditionals: اگر...تو) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (18.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (18.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (18.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اگر...تو شرطیہ جملے (Conditionals: اگر...تو)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (18.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (18.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (18.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (18.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (18.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (18.2.3)۔"
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
                    "prompt": "کون سا بیان « اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 18-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (18.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (18.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (18.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تو»):",
                    "acceptedAnswers": [
                        "تو"
                    ],
                    "explanation": "The target keyword was: 【تو】"
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
        "objective": "Comprehensive mastery of اگر...تو شرطیہ جملے (Conditionals: اگر...تو).",
        "presentation": {
            "explanation": "اس سبق میں ہم « شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » (حصہ 3) اور اگر...تو شرطیہ جملے (Conditionals: اگر...تو) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (18.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (18.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (18.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اگر...تو شرطیہ جملے (Conditionals: اگر...تو)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (18.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (18.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (18.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (18.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (18.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (18.3.3)۔"
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
                    "prompt": "کون سا بیان « اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 18-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (18.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (18.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (18.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ورنہ»):",
                    "acceptedAnswers": [
                        "ورنہ"
                    ],
                    "explanation": "The target keyword was: 【ورنہ】"
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
        "objective": "Comprehensive mastery of اگر...تو شرطیہ جملے (Conditionals: اگر...تو).",
        "presentation": {
            "explanation": "اس سبق میں ہم « شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » (حصہ 4) اور اگر...تو شرطیہ جملے (Conditionals: اگر...تو) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (18.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (18.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (18.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اگر...تو شرطیہ جملے (Conditionals: اگر...تو)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (18.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (18.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (18.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (18.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (18.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (18.4.3)۔"
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
                    "prompt": "کون سا بیان « اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 18-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (18.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (18.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (18.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بشرطیکہ»):",
                    "acceptedAnswers": [
                        "بشرطیکہ"
                    ],
                    "explanation": "The target keyword was: 【بشرطیکہ】"
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
        "objective": "Comprehensive mastery of اگر...تو شرطیہ جملے (Conditionals: اگر...تو).",
        "presentation": {
            "explanation": "اس سبق میں ہم « شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » (حصہ 5) اور اگر...تو شرطیہ جملے (Conditionals: اگر...تو) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (18.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (18.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (18.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اگر...تو شرطیہ جملے (Conditionals: اگر...تو)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (18.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (18.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (18.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« شرطیہ اور امتناعی جملے (Conditional & Counterfactuals) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (18.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (18.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (18.5.3)۔"
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
                    "prompt": "کون سا بیان « اگر...تو شرطیہ جملے (Conditionals: اگر...تو) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 18-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (18.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (18.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (18.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اگرچہ»):",
                    "acceptedAnswers": [
                        "اگرچہ"
                    ],
                    "explanation": "The target keyword was: 【اگرچہ】"
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
        "objective": "Comprehensive mastery of کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » (حصہ 1) اور کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (19.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (19.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (19.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (19.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (19.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (19.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (19.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (19.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (19.1.3)۔"
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
                    "prompt": "کون سا بیان « کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 19-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (19.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (19.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (19.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کہاوت»):",
                    "acceptedAnswers": [
                        "کہاوت"
                    ],
                    "explanation": "The target keyword was: 【کہاوت】"
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
        "objective": "Comprehensive mastery of کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » (حصہ 2) اور کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (19.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (19.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (19.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (19.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (19.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (19.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (19.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (19.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (19.2.3)۔"
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
                    "prompt": "کون سا بیان « کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 19-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (19.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (19.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (19.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تذکرہ»):",
                    "acceptedAnswers": [
                        "تذکرہ"
                    ],
                    "explanation": "The target keyword was: 【تذکرہ】"
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
        "objective": "Comprehensive mastery of کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » (حصہ 3) اور کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (19.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (19.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (19.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (19.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (19.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (19.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (19.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (19.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (19.3.3)۔"
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
                    "prompt": "کون سا بیان « کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 19-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (19.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (19.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (19.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مکالمہ»):",
                    "acceptedAnswers": [
                        "مکالمہ"
                    ],
                    "explanation": "The target keyword was: 【مکالمہ】"
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
        "objective": "Comprehensive mastery of کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » (حصہ 4) اور کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (19.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (19.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (19.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (19.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (19.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (19.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (19.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (19.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (19.4.3)۔"
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
                    "prompt": "کون سا بیان « کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 19-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (19.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (19.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (19.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («قبول»):",
                    "acceptedAnswers": [
                        "قبول"
                    ],
                    "explanation": "The target keyword was: 【قبول】"
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
        "objective": "Comprehensive mastery of کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » (حصہ 5) اور کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (19.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (19.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (19.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (19.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (19.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (19.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بلاواسطہ اور بالواسطہ کلام (Reported Speech with کہ) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (19.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (19.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (19.5.3)۔"
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
                    "prompt": "کون سا بیان « کہ کے ساتھ بالواسطہ کلام (Reported Speech with کہ) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 19-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (19.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (19.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (19.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («انکار»):",
                    "acceptedAnswers": [
                        "انکار"
                    ],
                    "explanation": "The target keyword was: 【انکار】"
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
        "objective": "Comprehensive mastery of دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » (حصہ 1) اور دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (20.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (20.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (20.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (20.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (20.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (20.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (20.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (20.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (20.1.3)۔"
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
                    "prompt": "کون سا بیان « دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 20-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (20.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (20.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (20.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («انتظام»):",
                    "acceptedAnswers": [
                        "انتظام"
                    ],
                    "explanation": "The target keyword was: 【انتظام】"
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
        "objective": "Comprehensive mastery of دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » (حصہ 2) اور دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (20.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (20.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (20.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (20.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (20.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (20.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (20.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (20.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (20.2.3)۔"
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
                    "prompt": "کون سا بیان « دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 20-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (20.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (20.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (20.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سالانہ»):",
                    "acceptedAnswers": [
                        "سالانہ"
                    ],
                    "explanation": "The target keyword was: 【سالانہ】"
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
        "objective": "Comprehensive mastery of دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » (حصہ 3) اور دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (20.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (20.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (20.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (20.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (20.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (20.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (20.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (20.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (20.3.3)۔"
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
                    "prompt": "کون سا بیان « دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 20-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (20.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (20.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (20.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («معاہدہ»):",
                    "acceptedAnswers": [
                        "معاہدہ"
                    ],
                    "explanation": "The target keyword was: 【معاہدہ】"
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
        "objective": "Comprehensive mastery of دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » (حصہ 4) اور دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (20.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (20.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (20.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (20.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (20.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (20.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (20.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (20.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (20.4.3)۔"
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
                    "prompt": "کون سا بیان « دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 20-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (20.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (20.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (20.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («منصوبہ»):",
                    "acceptedAnswers": [
                        "منصوبہ"
                    ],
                    "explanation": "The target keyword was: 【منصوبہ】"
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
        "objective": "Comprehensive mastery of دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » (حصہ 5) اور دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (20.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (20.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (20.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (20.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (20.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (20.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« دفتری اردو اور کاروباری خط و کتابت (Corporate Urdu) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (20.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (20.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (20.5.3)۔"
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
                    "prompt": "کون سا بیان « دفتری مراسلت اور کاروبار (Workplace & Corporate Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 20-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (20.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (20.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (20.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کاروبار»):",
                    "acceptedAnswers": [
                        "کاروبار"
                    ],
                    "explanation": "The target keyword was: 【کاروبار】"
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
        "objective": "Comprehensive mastery of طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « طبی مشاورت، امراض اور علاج (Medical Discourse) » (حصہ 1) اور طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (21.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (21.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (21.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (21.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (21.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (21.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت، امراض اور علاج (Medical Discourse) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (21.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (21.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (21.1.3)۔"
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
                    "prompt": "کون سا بیان « طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 21-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (21.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (21.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (21.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («دوا»):",
                    "acceptedAnswers": [
                        "دوا"
                    ],
                    "explanation": "The target keyword was: 【دوا】"
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
        "objective": "Comprehensive mastery of طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « طبی مشاورت، امراض اور علاج (Medical Discourse) » (حصہ 2) اور طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (21.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (21.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (21.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (21.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (21.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (21.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت، امراض اور علاج (Medical Discourse) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (21.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (21.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (21.2.3)۔"
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
                    "prompt": "کون سا بیان « طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 21-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (21.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (21.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (21.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («علاج»):",
                    "acceptedAnswers": [
                        "علاج"
                    ],
                    "explanation": "The target keyword was: 【علاج】"
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
        "objective": "Comprehensive mastery of طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « طبی مشاورت، امراض اور علاج (Medical Discourse) » (حصہ 3) اور طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (21.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (21.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (21.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (21.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (21.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (21.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت، امراض اور علاج (Medical Discourse) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (21.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (21.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (21.3.3)۔"
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
                    "prompt": "کون سا بیان « طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 21-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (21.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (21.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (21.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بیماری»):",
                    "acceptedAnswers": [
                        "بیماری"
                    ],
                    "explanation": "The target keyword was: 【بیماری】"
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
        "objective": "Comprehensive mastery of طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « طبی مشاورت، امراض اور علاج (Medical Discourse) » (حصہ 4) اور طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (21.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (21.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (21.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (21.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (21.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (21.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت، امراض اور علاج (Medical Discourse) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (21.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (21.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (21.4.3)۔"
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
                    "prompt": "کون سا بیان « طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 21-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (21.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (21.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (21.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («علامات»):",
                    "acceptedAnswers": [
                        "علامات"
                    ],
                    "explanation": "The target keyword was: 【علامات】"
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
        "objective": "Comprehensive mastery of طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu).",
        "presentation": {
            "explanation": "اس سبق میں ہم « طبی مشاورت، امراض اور علاج (Medical Discourse) » (حصہ 5) اور طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (21.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (21.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (21.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (21.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (21.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (21.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« طبی مشاورت، امراض اور علاج (Medical Discourse) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (21.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (21.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (21.5.3)۔"
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
                    "prompt": "کون سا بیان « طبی مشاورت اور حفظان صحت (Clinical & Healthcare Urdu) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 21-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (21.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (21.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (21.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («صحت»):",
                    "acceptedAnswers": [
                        "صحت"
                    ],
                    "explanation": "The target keyword was: 【صحت】"
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
        "objective": "Comprehensive mastery of روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "اس سبق میں ہم « پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » (حصہ 1) اور روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (22.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (22.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (22.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (22.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (22.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (22.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (22.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (22.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (22.1.3)۔"
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
                    "prompt": "کون سا بیان « روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 22-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (22.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (22.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (22.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کھانا»):",
                    "acceptedAnswers": [
                        "کھانا"
                    ],
                    "explanation": "The target keyword was: 【کھانا】"
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
        "objective": "Comprehensive mastery of روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "اس سبق میں ہم « پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » (حصہ 2) اور روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (22.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (22.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (22.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (22.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (22.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (22.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (22.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (22.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (22.2.3)۔"
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
                    "prompt": "کون سا بیان « روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 22-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (22.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (22.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (22.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مصالحے»):",
                    "acceptedAnswers": [
                        "مصالحے"
                    ],
                    "explanation": "The target keyword was: 【مصالحے】"
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
        "objective": "Comprehensive mastery of روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "اس سبق میں ہم « پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » (حصہ 3) اور روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (22.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (22.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (22.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (22.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (22.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (22.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (22.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (22.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (22.3.3)۔"
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
                    "prompt": "کون سا بیان « روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 22-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (22.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (22.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (22.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ذائقہ»):",
                    "acceptedAnswers": [
                        "ذائقہ"
                    ],
                    "explanation": "The target keyword was: 【ذائقہ】"
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
        "objective": "Comprehensive mastery of روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "اس سبق میں ہم « پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » (حصہ 4) اور روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (22.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (22.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (22.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (22.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (22.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (22.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (22.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (22.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (22.4.3)۔"
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
                    "prompt": "کون سا بیان « روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 22-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (22.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (22.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (22.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مہمان_نوازی»):",
                    "acceptedAnswers": [
                        "مہمان_نوازی"
                    ],
                    "explanation": "The target keyword was: 【مہمان_نوازی】"
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
        "objective": "Comprehensive mastery of روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "اس سبق میں ہم « پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » (حصہ 5) اور روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (22.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (22.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (22.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (22.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (22.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (22.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« پاکستانی اور مغلائی روایتی پکوان (Cuisine & Hospitality) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (22.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (22.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (22.5.3)۔"
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
                    "prompt": "کون سا بیان « روایتی پکوان اور مہمان نوازی (Cuisine & Hospitality) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 22-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (22.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (22.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (22.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پکوان»):",
                    "acceptedAnswers": [
                        "پکوان"
                    ],
                    "explanation": "The target keyword was: 【پکوان】"
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
        "objective": "Comprehensive mastery of اردو غزل اور شعری روایات (Ghazal Poetics & Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » (حصہ 1) اور اردو غزل اور شعری روایات (Ghazal Poetics & Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (23.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (23.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (23.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اردو غزل اور شعری روایات (Ghazal Poetics & Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (23.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (23.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (23.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (23.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (23.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (23.1.3)۔"
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
                    "prompt": "کون سا بیان « اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 23-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (23.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (23.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (23.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («فنکار»):",
                    "acceptedAnswers": [
                        "فنکار"
                    ],
                    "explanation": "The target keyword was: 【فنکار】"
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
        "objective": "Comprehensive mastery of اردو غزل اور شعری روایات (Ghazal Poetics & Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » (حصہ 2) اور اردو غزل اور شعری روایات (Ghazal Poetics & Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (23.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (23.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (23.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اردو غزل اور شعری روایات (Ghazal Poetics & Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (23.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (23.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (23.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (23.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (23.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (23.2.3)۔"
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
                    "prompt": "کون سا بیان « اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 23-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (23.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (23.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (23.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («موسیقار»):",
                    "acceptedAnswers": [
                        "موسیقار"
                    ],
                    "explanation": "The target keyword was: 【موسیقار】"
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
        "objective": "Comprehensive mastery of اردو غزل اور شعری روایات (Ghazal Poetics & Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » (حصہ 3) اور اردو غزل اور شعری روایات (Ghazal Poetics & Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (23.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (23.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (23.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اردو غزل اور شعری روایات (Ghazal Poetics & Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (23.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (23.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (23.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (23.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (23.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (23.3.3)۔"
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
                    "prompt": "کون سا بیان « اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 23-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (23.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (23.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (23.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اداکاری»):",
                    "acceptedAnswers": [
                        "اداکاری"
                    ],
                    "explanation": "The target keyword was: 【اداکاری】"
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
        "objective": "Comprehensive mastery of اردو غزل اور شعری روایات (Ghazal Poetics & Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » (حصہ 4) اور اردو غزل اور شعری روایات (Ghazal Poetics & Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (23.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (23.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (23.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اردو غزل اور شعری روایات (Ghazal Poetics & Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (23.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (23.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (23.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (23.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (23.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (23.4.3)۔"
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
                    "prompt": "کون سا بیان « اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 23-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (23.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (23.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (23.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ہدایت_کار»):",
                    "acceptedAnswers": [
                        "ہدایت_کار"
                    ],
                    "explanation": "The target keyword was: 【ہدایت_کار】"
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
        "objective": "Comprehensive mastery of اردو غزل اور شعری روایات (Ghazal Poetics & Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » (حصہ 5) اور اردو غزل اور شعری روایات (Ghazal Poetics & Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (23.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (23.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (23.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for اردو غزل اور شعری روایات (Ghazal Poetics & Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (23.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (23.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (23.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اردو غزل، شاعری اور ادبی تنقید (Ghazal & Poetics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (23.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (23.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (23.5.3)۔"
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
                    "prompt": "کون سا بیان « اردو غزل اور شعری روایات (Ghazal Poetics & Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 23-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (23.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (23.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (23.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تھیٹر»):",
                    "acceptedAnswers": [
                        "تھیٹر"
                    ],
                    "explanation": "The target keyword was: 【تھیٹر】"
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
        "objective": "Comprehensive mastery of بینکاری اور معاشی اصطلاحات (Banking & Digital Finance).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » (حصہ 1) اور بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (24.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (24.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (24.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for بینکاری اور معاشی اصطلاحات (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (24.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (24.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (24.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (24.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (24.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (24.1.3)۔"
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
                    "prompt": "کون سا بیان « بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 24-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (24.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (24.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (24.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بینک»):",
                    "acceptedAnswers": [
                        "بینک"
                    ],
                    "explanation": "The target keyword was: 【بینک】"
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
        "objective": "Comprehensive mastery of بینکاری اور معاشی اصطلاحات (Banking & Digital Finance).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » (حصہ 2) اور بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (24.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (24.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (24.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for بینکاری اور معاشی اصطلاحات (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (24.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (24.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (24.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (24.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (24.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (24.2.3)۔"
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
                    "prompt": "کون سا بیان « بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 24-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (24.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (24.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (24.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («کھاتہ»):",
                    "acceptedAnswers": [
                        "کھاتہ"
                    ],
                    "explanation": "The target keyword was: 【کھاتہ】"
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
        "objective": "Comprehensive mastery of بینکاری اور معاشی اصطلاحات (Banking & Digital Finance).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » (حصہ 3) اور بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (24.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (24.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (24.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for بینکاری اور معاشی اصطلاحات (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (24.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (24.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (24.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (24.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (24.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (24.3.3)۔"
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
                    "prompt": "کون سا بیان « بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 24-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (24.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (24.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (24.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («قرض»):",
                    "acceptedAnswers": [
                        "قرض"
                    ],
                    "explanation": "The target keyword was: 【قرض】"
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
        "objective": "Comprehensive mastery of بینکاری اور معاشی اصطلاحات (Banking & Digital Finance).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » (حصہ 4) اور بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (24.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (24.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (24.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for بینکاری اور معاشی اصطلاحات (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (24.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (24.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (24.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (24.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (24.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (24.4.3)۔"
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
                    "prompt": "کون سا بیان « بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 24-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (24.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (24.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (24.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سود»):",
                    "acceptedAnswers": [
                        "سود"
                    ],
                    "explanation": "The target keyword was: 【سود】"
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
        "objective": "Comprehensive mastery of بینکاری اور معاشی اصطلاحات (Banking & Digital Finance).",
        "presentation": {
            "explanation": "اس سبق میں ہم « بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » (حصہ 5) اور بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (24.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (24.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (24.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for بینکاری اور معاشی اصطلاحات (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (24.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (24.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (24.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« بینکنگ، ترسیلات زر اور ڈیجیٹل معیشت (Banking & Finance) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (24.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (24.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (24.5.3)۔"
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
                    "prompt": "کون سا بیان « بینکاری اور معاشی اصطلاحات (Banking & Digital Finance) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 24-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (24.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (24.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (24.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سرمایہ_کاری»):",
                    "acceptedAnswers": [
                        "سرمایہ_کاری"
                    ],
                    "explanation": "The target keyword was: 【سرمایہ_کاری】"
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
        "objective": "Comprehensive mastery of زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » (حصہ 1) اور زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (25.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (25.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (25.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (25.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (25.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (25.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (25.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (25.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (25.1.3)۔"
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
                    "prompt": "کون سا بیان « زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 25-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (25.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (25.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (25.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ماحولیات»):",
                    "acceptedAnswers": [
                        "ماحولیات"
                    ],
                    "explanation": "The target keyword was: 【ماحولیات】"
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
        "objective": "Comprehensive mastery of زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » (حصہ 2) اور زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (25.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (25.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (25.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (25.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (25.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (25.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (25.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (25.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (25.2.3)۔"
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
                    "prompt": "کون سا بیان « زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 25-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (25.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (25.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (25.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («زراعت»):",
                    "acceptedAnswers": [
                        "زراعت"
                    ],
                    "explanation": "The target keyword was: 【زراعت】"
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
        "objective": "Comprehensive mastery of زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » (حصہ 3) اور زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (25.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (25.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (25.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (25.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (25.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (25.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (25.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (25.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (25.3.3)۔"
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
                    "prompt": "کون سا بیان « زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 25-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (25.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (25.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (25.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («آبپاشی»):",
                    "acceptedAnswers": [
                        "آبپاشی"
                    ],
                    "explanation": "The target keyword was: 【آبپاشی】"
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
        "objective": "Comprehensive mastery of زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » (حصہ 4) اور زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (25.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (25.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (25.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (25.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (25.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (25.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (25.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (25.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (25.4.3)۔"
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
                    "prompt": "کون سا بیان « زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 25-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (25.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (25.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (25.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مون_سون»):",
                    "acceptedAnswers": [
                        "مون_سون"
                    ],
                    "explanation": "The target keyword was: 【مون_سون】"
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
        "objective": "Comprehensive mastery of زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture).",
        "presentation": {
            "explanation": "اس سبق میں ہم « ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » (حصہ 5) اور زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (25.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (25.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (25.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (25.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (25.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (25.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« ماحولیات، وادی سندھ کی زراعت اور آبی وسائل (Ecology) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (25.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (25.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (25.5.3)۔"
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
                    "prompt": "کون سا بیان « زراعت، ماحولیات اور آبی وسائل (Ecology & Agriculture) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 25-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (25.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (25.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (25.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تحفظ»):",
                    "acceptedAnswers": [
                        "تحفظ"
                    ],
                    "explanation": "The target keyword was: 【تحفظ】"
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
        "objective": "Comprehensive mastery of آئین اور عدالتی اصطلاحات (Constitutional Law & Courts).",
        "presentation": {
            "explanation": "اس سبق میں ہم « آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » (حصہ 1) اور آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (26.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (26.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (26.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for آئین اور عدالتی اصطلاحات (Constitutional Law & Courts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (26.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (26.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (26.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (26.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (26.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (26.1.3)۔"
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
                    "prompt": "کون سا بیان « آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 26-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (26.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (26.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (26.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («آئین»):",
                    "acceptedAnswers": [
                        "آئین"
                    ],
                    "explanation": "The target keyword was: 【آئین】"
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
        "objective": "Comprehensive mastery of آئین اور عدالتی اصطلاحات (Constitutional Law & Courts).",
        "presentation": {
            "explanation": "اس سبق میں ہم « آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » (حصہ 2) اور آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (26.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (26.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (26.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for آئین اور عدالتی اصطلاحات (Constitutional Law & Courts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (26.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (26.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (26.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (26.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (26.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (26.2.3)۔"
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
                    "prompt": "کون سا بیان « آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 26-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (26.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (26.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (26.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («عدالت»):",
                    "acceptedAnswers": [
                        "عدالت"
                    ],
                    "explanation": "The target keyword was: 【عدالت】"
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
        "objective": "Comprehensive mastery of آئین اور عدالتی اصطلاحات (Constitutional Law & Courts).",
        "presentation": {
            "explanation": "اس سبق میں ہم « آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » (حصہ 3) اور آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (26.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (26.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (26.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for آئین اور عدالتی اصطلاحات (Constitutional Law & Courts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (26.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (26.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (26.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (26.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (26.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (26.3.3)۔"
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
                    "prompt": "کون سا بیان « آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 26-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (26.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (26.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (26.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («جج»):",
                    "acceptedAnswers": [
                        "جج"
                    ],
                    "explanation": "The target keyword was: 【جج】"
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
        "objective": "Comprehensive mastery of آئین اور عدالتی اصطلاحات (Constitutional Law & Courts).",
        "presentation": {
            "explanation": "اس سبق میں ہم « آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » (حصہ 4) اور آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (26.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (26.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (26.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for آئین اور عدالتی اصطلاحات (Constitutional Law & Courts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (26.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (26.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (26.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (26.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (26.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (26.4.3)۔"
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
                    "prompt": "کون سا بیان « آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 26-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (26.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (26.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (26.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («پارلیمنٹ»):",
                    "acceptedAnswers": [
                        "پارلیمنٹ"
                    ],
                    "explanation": "The target keyword was: 【پارلیمنٹ】"
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
        "objective": "Comprehensive mastery of آئین اور عدالتی اصطلاحات (Constitutional Law & Courts).",
        "presentation": {
            "explanation": "اس سبق میں ہم « آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » (حصہ 5) اور آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (26.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (26.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (26.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for آئین اور عدالتی اصطلاحات (Constitutional Law & Courts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (26.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (26.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (26.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« آئینی حکمرانی، پارلیمان اور عدالتی اصطلاحات (Law) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (26.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (26.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (26.5.3)۔"
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
                    "prompt": "کون سا بیان « آئین اور عدالتی اصطلاحات (Constitutional Law & Courts) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 26-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (26.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (26.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (26.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («قانون»):",
                    "acceptedAnswers": [
                        "قانون"
                    ],
                    "explanation": "The target keyword was: 【قانون】"
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
        "objective": "Comprehensive mastery of کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » (حصہ 1) اور کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (27.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (27.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (27.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (27.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (27.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (27.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (27.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (27.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (27.1.3)۔"
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
                    "prompt": "کون سا بیان « کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 27-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (27.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (27.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (27.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («شاعری»):",
                    "acceptedAnswers": [
                        "شاعری"
                    ],
                    "explanation": "The target keyword was: 【شاعری】"
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
        "objective": "Comprehensive mastery of کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » (حصہ 2) اور کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (27.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (27.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (27.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (27.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (27.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (27.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (27.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (27.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (27.2.3)۔"
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
                    "prompt": "کون سا بیان « کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 27-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (27.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (27.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (27.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ناول»):",
                    "acceptedAnswers": [
                        "ناول"
                    ],
                    "explanation": "The target keyword was: 【ناول】"
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
        "objective": "Comprehensive mastery of کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » (حصہ 3) اور کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (27.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (27.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (27.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (27.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (27.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (27.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (27.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (27.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (27.3.3)۔"
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
                    "prompt": "کون سا بیان « کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 27-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (27.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (27.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (27.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («شاعر»):",
                    "acceptedAnswers": [
                        "شاعر"
                    ],
                    "explanation": "The target keyword was: 【شاعر】"
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
        "objective": "Comprehensive mastery of کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » (حصہ 4) اور کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (27.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (27.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (27.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (27.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (27.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (27.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (27.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (27.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (27.4.3)۔"
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
                    "prompt": "کون سا بیان « کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 27-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (27.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (27.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (27.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («غزل»):",
                    "acceptedAnswers": [
                        "غزل"
                    ],
                    "explanation": "The target keyword was: 【غزل】"
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
        "objective": "Comprehensive mastery of کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature).",
        "presentation": {
            "explanation": "اس سبق میں ہم « کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » (حصہ 5) اور کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (27.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (27.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (27.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (27.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (27.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (27.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« کلاسیکی اردو نثر اور داستان گوئی (Classical Urdu Prose) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (27.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (27.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (27.5.3)۔"
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
                    "prompt": "کون سا بیان « کلاسیکی نثر اور داستان گوئی (Classical Urdu Literature) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 27-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (27.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (27.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (27.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («نظم»):",
                    "acceptedAnswers": [
                        "نظم"
                    ],
                    "explanation": "The target keyword was: 【نظم】"
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
        "objective": "Comprehensive mastery of صحافت اور ادارتی تحریریں (Journalism & Broadcasting).",
        "presentation": {
            "explanation": "اس سبق میں ہم « صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » (حصہ 1) اور صحافت اور ادارتی تحریریں (Journalism & Broadcasting) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (28.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (28.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (28.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for صحافت اور ادارتی تحریریں (Journalism & Broadcasting)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (28.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (28.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (28.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (28.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (28.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (28.1.3)۔"
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
                    "prompt": "کون سا بیان « صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 28-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (28.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (28.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (28.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («خبریں»):",
                    "acceptedAnswers": [
                        "خبریں"
                    ],
                    "explanation": "The target keyword was: 【خبریں】"
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
        "objective": "Comprehensive mastery of صحافت اور ادارتی تحریریں (Journalism & Broadcasting).",
        "presentation": {
            "explanation": "اس سبق میں ہم « صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » (حصہ 2) اور صحافت اور ادارتی تحریریں (Journalism & Broadcasting) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (28.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (28.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (28.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for صحافت اور ادارتی تحریریں (Journalism & Broadcasting)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (28.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (28.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (28.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (28.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (28.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (28.2.3)۔"
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
                    "prompt": "کون سا بیان « صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 28-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (28.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (28.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (28.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مدیر»):",
                    "acceptedAnswers": [
                        "مدیر"
                    ],
                    "explanation": "The target keyword was: 【مدیر】"
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
        "objective": "Comprehensive mastery of صحافت اور ادارتی تحریریں (Journalism & Broadcasting).",
        "presentation": {
            "explanation": "اس سبق میں ہم « صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » (حصہ 3) اور صحافت اور ادارتی تحریریں (Journalism & Broadcasting) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (28.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (28.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (28.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for صحافت اور ادارتی تحریریں (Journalism & Broadcasting)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (28.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (28.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (28.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (28.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (28.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (28.3.3)۔"
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
                    "prompt": "کون سا بیان « صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 28-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (28.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (28.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (28.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («صحافت»):",
                    "acceptedAnswers": [
                        "صحافت"
                    ],
                    "explanation": "The target keyword was: 【صحافت】"
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
        "objective": "Comprehensive mastery of صحافت اور ادارتی تحریریں (Journalism & Broadcasting).",
        "presentation": {
            "explanation": "اس سبق میں ہم « صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » (حصہ 4) اور صحافت اور ادارتی تحریریں (Journalism & Broadcasting) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (28.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (28.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (28.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for صحافت اور ادارتی تحریریں (Journalism & Broadcasting)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (28.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (28.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (28.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (28.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (28.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (28.4.3)۔"
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
                    "prompt": "کون سا بیان « صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 28-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (28.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (28.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (28.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مذاکرہ»):",
                    "acceptedAnswers": [
                        "مذاکرہ"
                    ],
                    "explanation": "The target keyword was: 【مذاکرہ】"
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
        "objective": "Comprehensive mastery of صحافت اور ادارتی تحریریں (Journalism & Broadcasting).",
        "presentation": {
            "explanation": "اس سبق میں ہم « صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » (حصہ 5) اور صحافت اور ادارتی تحریریں (Journalism & Broadcasting) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (28.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (28.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (28.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for صحافت اور ادارتی تحریریں (Journalism & Broadcasting)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (28.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (28.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (28.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« صحافت، ادارتی تحریر اور نشریاتی میڈیا (Journalism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (28.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (28.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (28.5.3)۔"
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
                    "prompt": "کون سا بیان « صحافت اور ادارتی تحریریں (Journalism & Broadcasting) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 28-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (28.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (28.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (28.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («نشریات»):",
                    "acceptedAnswers": [
                        "نشریات"
                    ],
                    "explanation": "The target keyword was: 【نشریات】"
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
        "objective": "Comprehensive mastery of فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » (حصہ 1) اور فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (29.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (29.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (29.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (29.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (29.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (29.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (29.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (29.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (29.1.3)۔"
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
                    "prompt": "کون سا بیان « فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 29-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (29.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (29.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (29.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («فلسفہ»):",
                    "acceptedAnswers": [
                        "فلسفہ"
                    ],
                    "explanation": "The target keyword was: 【فلسفہ】"
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
        "objective": "Comprehensive mastery of فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » (حصہ 2) اور فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (29.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (29.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (29.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (29.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (29.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (29.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (29.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (29.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (29.2.3)۔"
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
                    "prompt": "کون سا بیان « فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 29-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (29.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (29.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (29.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («شعور»):",
                    "acceptedAnswers": [
                        "شعور"
                    ],
                    "explanation": "The target keyword was: 【شعور】"
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
        "objective": "Comprehensive mastery of فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » (حصہ 3) اور فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (29.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (29.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (29.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (29.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (29.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (29.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (29.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (29.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (29.3.3)۔"
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
                    "prompt": "کون سا بیان « فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 29-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (29.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (29.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (29.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سچائی»):",
                    "acceptedAnswers": [
                        "سچائی"
                    ],
                    "explanation": "The target keyword was: 【سچائی】"
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
        "objective": "Comprehensive mastery of فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » (حصہ 4) اور فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (29.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (29.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (29.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (29.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (29.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (29.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (29.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (29.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (29.4.3)۔"
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
                    "prompt": "کون سا بیان « فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 29-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (29.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (29.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (29.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اخلاقیات»):",
                    "acceptedAnswers": [
                        "اخلاقیات"
                    ],
                    "explanation": "The target keyword was: 【اخلاقیات】"
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
        "objective": "Comprehensive mastery of فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism).",
        "presentation": {
            "explanation": "اس سبق میں ہم « فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » (حصہ 5) اور فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (29.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (29.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (29.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (29.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (29.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (29.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« فلسفہ، تصوف اور اخلاقیات (Philosophy & Sufism) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (29.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (29.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (29.5.3)۔"
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
                    "prompt": "کون سا بیان « فلسفہ، تصوف اور اخلاقی اقدار (Philosophy & Sufism) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 29-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (29.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (29.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (29.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («حکمت»):",
                    "acceptedAnswers": [
                        "حکمت"
                    ],
                    "explanation": "The target keyword was: 【حکمت】"
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
        "objective": "Comprehensive mastery of سائنسی تحقیق اور جدید ایجادات (Scientific Research).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » (حصہ 1) اور سائنسی تحقیق اور جدید ایجادات (Scientific Research) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (30.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (30.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (30.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سائنسی تحقیق اور جدید ایجادات (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (30.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (30.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (30.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (30.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (30.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (30.1.3)۔"
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
                    "prompt": "کون سا بیان « سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 30-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (30.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (30.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (30.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سائنس»):",
                    "acceptedAnswers": [
                        "سائنس"
                    ],
                    "explanation": "The target keyword was: 【سائنس】"
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
        "objective": "Comprehensive mastery of سائنسی تحقیق اور جدید ایجادات (Scientific Research).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » (حصہ 2) اور سائنسی تحقیق اور جدید ایجادات (Scientific Research) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (30.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (30.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (30.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سائنسی تحقیق اور جدید ایجادات (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (30.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (30.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (30.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (30.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (30.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (30.2.3)۔"
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
                    "prompt": "کون سا بیان « سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 30-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (30.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (30.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (30.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تحقیق»):",
                    "acceptedAnswers": [
                        "تحقیق"
                    ],
                    "explanation": "The target keyword was: 【تحقیق】"
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
        "objective": "Comprehensive mastery of سائنسی تحقیق اور جدید ایجادات (Scientific Research).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » (حصہ 3) اور سائنسی تحقیق اور جدید ایجادات (Scientific Research) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (30.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (30.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (30.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سائنسی تحقیق اور جدید ایجادات (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (30.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (30.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (30.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (30.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (30.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (30.3.3)۔"
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
                    "prompt": "کون سا بیان « سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 30-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (30.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (30.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (30.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ٹیکنالوجی»):",
                    "acceptedAnswers": [
                        "ٹیکنالوجی"
                    ],
                    "explanation": "The target keyword was: 【ٹیکنالوجی】"
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
        "objective": "Comprehensive mastery of سائنسی تحقیق اور جدید ایجادات (Scientific Research).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » (حصہ 4) اور سائنسی تحقیق اور جدید ایجادات (Scientific Research) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (30.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (30.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (30.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سائنسی تحقیق اور جدید ایجادات (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (30.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (30.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (30.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (30.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (30.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (30.4.3)۔"
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
                    "prompt": "کون سا بیان « سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 30-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (30.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (30.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (30.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («نظریہ»):",
                    "acceptedAnswers": [
                        "نظریہ"
                    ],
                    "explanation": "The target keyword was: 【نظریہ】"
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
        "objective": "Comprehensive mastery of سائنسی تحقیق اور جدید ایجادات (Scientific Research).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » (حصہ 5) اور سائنسی تحقیق اور جدید ایجادات (Scientific Research) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (30.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (30.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (30.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سائنسی تحقیق اور جدید ایجادات (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (30.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (30.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (30.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سائنسی تحقیق اور سائنسی اصطلاحات (Scientific Research) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (30.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (30.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (30.5.3)۔"
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
                    "prompt": "کون سا بیان « سائنسی تحقیق اور جدید ایجادات (Scientific Research) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 30-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (30.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (30.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (30.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تجربہ»):",
                    "acceptedAnswers": [
                        "تجربہ"
                    ],
                    "explanation": "The target keyword was: 【تجربہ】"
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
        "objective": "Comprehensive mastery of خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy).",
        "presentation": {
            "explanation": "اس سبق میں ہم « جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » (حصہ 1) اور خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (31.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (31.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (31.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (31.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (31.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (31.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (31.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (31.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (31.1.3)۔"
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
                    "prompt": "کون سا بیان « خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 31-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (31.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (31.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (31.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سفارت_کاری»):",
                    "acceptedAnswers": [
                        "سفارت_کاری"
                    ],
                    "explanation": "The target keyword was: 【سفارت_کاری】"
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
        "objective": "Comprehensive mastery of خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy).",
        "presentation": {
            "explanation": "اس سبق میں ہم « جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » (حصہ 2) اور خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (31.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (31.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (31.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (31.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (31.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (31.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (31.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (31.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (31.2.3)۔"
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
                    "prompt": "کون سا بیان « خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 31-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (31.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (31.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (31.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سرحد»):",
                    "acceptedAnswers": [
                        "سرحد"
                    ],
                    "explanation": "The target keyword was: 【سرحد】"
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
        "objective": "Comprehensive mastery of خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy).",
        "presentation": {
            "explanation": "اس سبق میں ہم « جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » (حصہ 3) اور خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (31.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (31.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (31.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (31.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (31.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (31.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (31.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (31.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (31.3.3)۔"
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
                    "prompt": "کون سا بیان « خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 31-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (31.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (31.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (31.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («معاہدہ_امن»):",
                    "acceptedAnswers": [
                        "معاہدہ_امن"
                    ],
                    "explanation": "The target keyword was: 【معاہدہ_امن】"
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
        "objective": "Comprehensive mastery of خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy).",
        "presentation": {
            "explanation": "اس سبق میں ہم « جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » (حصہ 4) اور خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (31.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (31.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (31.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (31.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (31.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (31.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (31.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (31.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (31.4.3)۔"
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
                    "prompt": "کون سا بیان « خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 31-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (31.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (31.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (31.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («خود_مختاری»):",
                    "acceptedAnswers": [
                        "خود_مختاری"
                    ],
                    "explanation": "The target keyword was: 【خود_مختاری】"
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
        "objective": "Comprehensive mastery of خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy).",
        "presentation": {
            "explanation": "اس سبق میں ہم « جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » (حصہ 5) اور خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (31.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (31.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (31.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (31.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (31.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (31.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« جنوبی ایشیائی جغرافیائی سیاست اور خارجہ پالیسی (Geopolitics) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (31.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (31.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (31.5.3)۔"
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
                    "prompt": "کون سا بیان « خارجہ پالیسی اور علاقائی تعلقات (Geopolitics & Foreign Policy) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 31-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (31.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (31.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (31.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تعاون»):",
                    "acceptedAnswers": [
                        "تعاون"
                    ],
                    "explanation": "The target keyword was: 【تعاون】"
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
        "objective": "Comprehensive mastery of سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » (حصہ 1) اور سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (32.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (32.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (32.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (32.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (32.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (32.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (32.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (32.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (32.1.3)۔"
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
                    "prompt": "کون سا بیان « سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 32-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (32.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (32.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (32.1.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سفیر»):",
                    "acceptedAnswers": [
                        "سفیر"
                    ],
                    "explanation": "The target keyword was: 【سفیر】"
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
        "objective": "Comprehensive mastery of سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » (حصہ 2) اور سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (32.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (32.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (32.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (32.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (32.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (32.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (32.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (32.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (32.2.3)۔"
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
                    "prompt": "کون سا بیان « سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 32-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (32.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (32.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (32.2.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سفارت_خانہ»):",
                    "acceptedAnswers": [
                        "سفارت_خانہ"
                    ],
                    "explanation": "The target keyword was: 【سفارت_خانہ】"
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
        "objective": "Comprehensive mastery of سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » (حصہ 3) اور سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (32.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (32.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (32.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (32.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (32.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (32.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (32.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (32.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (32.3.3)۔"
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
                    "prompt": "کون سا بیان « سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 32-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (32.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (32.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (32.3.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اتفاق_رائے»):",
                    "acceptedAnswers": [
                        "اتفاق_رائے"
                    ],
                    "explanation": "The target keyword was: 【اتفاق_رائے】"
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
        "objective": "Comprehensive mastery of سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » (حصہ 4) اور سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (32.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (32.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (32.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (32.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (32.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (32.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (32.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (32.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (32.4.3)۔"
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
                    "prompt": "کون سا بیان « سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 32-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (32.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (32.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (32.4.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («تجویز»):",
                    "acceptedAnswers": [
                        "تجویز"
                    ],
                    "explanation": "The target keyword was: 【تجویز】"
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
        "objective": "Comprehensive mastery of سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » (حصہ 5) اور سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (32.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (32.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (32.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (32.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (32.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (32.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سفارتی آداب اور دوطرفہ معاہدات (Diplomacy & Treaties) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (32.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (32.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (32.5.3)۔"
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
                    "prompt": "کون سا بیان « سفارتی آداب اور معاہدات (Diplomatic Treaties & Protocol) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 32-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (32.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (32.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (32.5.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («دو_طرفہ»):",
                    "acceptedAnswers": [
                        "دو_طرفہ"
                    ],
                    "explanation": "The target keyword was: 【دو_طرفہ】"
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
        "objective": "Comprehensive mastery of محاورات اور ضرب الامثال (Advanced Idioms & Proverbs).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » (حصہ 1) اور محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (33.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (33.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (33.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for محاورات اور ضرب الامثال (Advanced Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (33.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (33.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (33.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (33.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (33.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (33.1.3)۔"
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
                    "prompt": "کون سا بیان « محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 33-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (33.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (33.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (33.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («محاورہ»):",
                    "acceptedAnswers": [
                        "محاورہ"
                    ],
                    "explanation": "The target keyword was: 【محاورہ】"
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
        "objective": "Comprehensive mastery of محاورات اور ضرب الامثال (Advanced Idioms & Proverbs).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » (حصہ 2) اور محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (33.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (33.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (33.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for محاورات اور ضرب الامثال (Advanced Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (33.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (33.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (33.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (33.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (33.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (33.2.3)۔"
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
                    "prompt": "کون سا بیان « محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 33-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (33.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (33.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (33.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ضرب_المثل»):",
                    "acceptedAnswers": [
                        "ضرب_المثل"
                    ],
                    "explanation": "The target keyword was: 【ضرب_المثل】"
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
        "objective": "Comprehensive mastery of محاورات اور ضرب الامثال (Advanced Idioms & Proverbs).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » (حصہ 3) اور محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (33.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (33.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (33.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for محاورات اور ضرب الامثال (Advanced Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (33.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (33.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (33.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (33.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (33.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (33.3.3)۔"
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
                    "prompt": "کون سا بیان « محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 33-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (33.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (33.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (33.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («مفہوم»):",
                    "acceptedAnswers": [
                        "مفہوم"
                    ],
                    "explanation": "The target keyword was: 【مفہوم】"
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
        "objective": "Comprehensive mastery of محاورات اور ضرب الامثال (Advanced Idioms & Proverbs).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » (حصہ 4) اور محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (33.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (33.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (33.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for محاورات اور ضرب الامثال (Advanced Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (33.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (33.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (33.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (33.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (33.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (33.4.3)۔"
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
                    "prompt": "کون سا بیان « محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 33-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (33.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (33.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (33.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («معنی»):",
                    "acceptedAnswers": [
                        "معنی"
                    ],
                    "explanation": "The target keyword was: 【معنی】"
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
        "objective": "Comprehensive mastery of محاورات اور ضرب الامثال (Advanced Idioms & Proverbs).",
        "presentation": {
            "explanation": "اس سبق میں ہم « اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » (حصہ 5) اور محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (33.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (33.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (33.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for محاورات اور ضرب الامثال (Advanced Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (33.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (33.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (33.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« اعلیٰ ادبی محاورات اور ضرب الامثال (Advanced Idioms) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (33.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (33.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (33.5.3)۔"
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
                    "prompt": "کون سا بیان « محاورات اور ضرب الامثال (Advanced Idioms & Proverbs) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 33-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (33.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (33.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (33.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («استعمال»):",
                    "acceptedAnswers": [
                        "استعمال"
                    ],
                    "explanation": "The target keyword was: 【استعمال】"
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
        "objective": "Comprehensive mastery of سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » (حصہ 1) اور سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (34.1.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (34.1.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (34.1.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 1)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (34.1.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (34.1.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (34.1.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 1):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (34.1.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (34.1.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (34.1.3)۔"
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
                    "prompt": "کون سا بیان « سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 34-1)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (34.1.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (34.1.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (34.1.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («سربراہی_اجلاس»):",
                    "acceptedAnswers": [
                        "سربراہی_اجلاس"
                    ],
                    "explanation": "The target keyword was: 【سربراہی_اجلاس】"
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
        "objective": "Comprehensive mastery of سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » (حصہ 2) اور سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (34.2.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (34.2.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (34.2.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 2)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (34.2.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (34.2.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (34.2.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 2):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (34.2.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (34.2.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (34.2.3)۔"
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
                    "prompt": "کون سا بیان « سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 34-2)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (34.2.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (34.2.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (34.2.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («قوم»):",
                    "acceptedAnswers": [
                        "قوم"
                    ],
                    "explanation": "The target keyword was: 【قوم】"
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
        "objective": "Comprehensive mastery of سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » (حصہ 3) اور سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (34.3.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (34.3.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (34.3.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 3)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (34.3.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (34.3.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (34.3.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 3):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (34.3.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (34.3.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (34.3.3)۔"
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
                    "prompt": "کون سا بیان « سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 34-3)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (34.3.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (34.3.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (34.3.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («بیان»):",
                    "acceptedAnswers": [
                        "بیان"
                    ],
                    "explanation": "The target keyword was: 【بیان】"
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
        "objective": "Comprehensive mastery of سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » (حصہ 4) اور سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (34.4.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (34.4.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (34.4.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 4)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (34.4.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (34.4.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (34.4.3)۔"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 4):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (34.4.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (34.4.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (34.4.3)۔"
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
                    "prompt": "کون سا بیان « سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 34-4)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (34.4.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (34.4.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (34.4.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («اعلامیہ»):",
                    "acceptedAnswers": [
                        "اعلامیہ"
                    ],
                    "explanation": "The target keyword was: 【اعلامیہ】"
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
        "objective": "Comprehensive mastery of سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "اس سبق میں ہم « سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » (حصہ 5) اور سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول اور فعل کی درست ترتیب (SOV) اور مناسب پرسرگوں کا برمحل استعمال گفتگو میں روانی، سلاست اور تہذیبی شائستگی پیدا کرتا ہے۔ روزمرہ گفتگو اور تحریری اسلوب دونوں میں قواعد کی پابندی فصاحت کی علامت ہے۔\n\nنحوی تجزیہ اور انگریزی مفہوم (Grammar Analysis & English Glosses):\nمعیاری قواعد کی مسلسل مشق سے انسان شستہ اور پراعتماد انداز میں اردو زبان بول اور لکھ سکتا ہے۔",
            "examples": [
                {
                    "target": "استاد محترم کلاس روم میں تمام طلبہ کو اردو کے بنیادی اور عمیق قواعد تفصیل سے سمجھا رہے ہیں (34.5.1)۔",
                    "reading": "Ustad-e-muhtaram classroom mein tamam tulba ko Urdu ke bunyadi aur ameeq qawaid tafseel se samjha rahe hain.",
                    "translation": "The respected teacher is explaining foundational and profound rules of Urdu grammar in detail to students in class."
                },
                {
                    "target": "ہم ہر روز صبح لائبریری جا کر علمی کتب اور مستند تحقیقی مقالات کا باریک بینی سے مطالعہ کرتے ہیں (34.5.2)۔",
                    "reading": "Hum har roz subah library ja kar ilmi kutub aur mustanad tehqeeqi maqalat ka bareek-beeni se mutala karte hain.",
                    "translation": "We go to the library every morning to study scholarly books and authentic research papers thoroughly."
                },
                {
                    "target": "شہر کے تاریخی مرکز میں قدیم عمارات اور سرسبز شاداب باغات دیکھنے والوں کو مسحور کر دیتے ہیں (34.5.3)۔",
                    "reading": "Shahar ke tareekhi markaz mein qadeem imarat aur sar-sabz shadab baghat dekhne walon ko mashoor kar dete hain.",
                    "translation": "Ancient buildings and lush gardens in the city's historic center enchant visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Urdu."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے اصولوں کے مطابق کون سا جملہ بالکل درست اور فصیح ہے (مشق 5)؟",
                    "options": [
                        "میری چھوٹی بہن نے آج صبح ناشتے کے لیے گرم گرم چائے اور لذیذ پراٹھا تیار کیا (34.5.1)۔",
                        "کل شام لائبریری میں بہت سے طلبہ خاموشی کے ساتھ اپنی نصابی کتب کا مطالعہ کر رہے تھے (34.5.2)۔",
                        "یہ ریستوران اپنے لذیذ اور روایتی مغلائی پکوانوں کی وجہ سے پورے شہر میں مشہور ہے (34.5.3)۔"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« سربراہی اجلاس اور ریاستی بیانات (C2 Capstone Statecraft) » کے درست نحوی تال میل کو ظاہر کرنے والے جملے کا انتخاب کریں (سوال 5):",
                    "options": [
                        "والد صاحب نے دفتر سے واپسی پر بچوں کے لیے خوبصورت کہانیاں اور معلوماتی کتب خریدیں (34.5.1)۔",
                        "کل صبح آٹھ بجے تمام مسافر وقت کی پابندی کرتے ہوئے ریلوے اسٹیشن پہنچ گئے تھے (34.5.2)۔",
                        "باغ میں کھلے ہوئے رنگ برنگے پھول صبح کی ٹھنڈی ہوا میں خوشبو بکھیر رہے ہیں (34.5.3)۔"
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
                    "prompt": "کون سا بیان « سربراہی اجلاس اور ریاستی اعلامیہ (C2 Capstone Statecraft) » کے مستند اور شستہ اصولوں کی پاسداری کرتا ہے (امتحان 34-5)؟",
                    "options": [
                        "سائنسدانوں نے خلائی مشن کے نئے مرحلے کی کامیاب تکمیل کا پریس کانفرنس میں باقاعدہ اعلان کیا (34.5.1)۔",
                        "شہر میں نئی تیز رفتار میٹرو لائن کا تعمیری کام آئندہ سال کے وسط تک مکمل کر لیا جائے گا (34.5.2)۔",
                        "بین الاقوامی سائنسی سیمینار میں دنیا بھر کے نامور محققین اور ماہرین نے شرکت کی (34.5.3)۔"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («عالمی»):",
                    "acceptedAnswers": [
                        "عالمی"
                    ],
                    "explanation": "The target keyword was: 【عالمی】"
                }
            ]
        }
    }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['urdu'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
