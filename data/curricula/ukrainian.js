// ukrainian curriculum
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "uk-u1",
    "unit": 1,
    "title": "Українська абетка, фонетика та вітання (Alphabet & Greetings)",
    "level": "A1",
    "goal": "Mastery of Абетка та щоденні вітання (Alphabet & Basic Greetings).",
    "lessonIds": [
      "uk-u1-l1",
      "uk-u1-l2",
      "uk-u1-l3",
      "uk-u1-l4",
      "uk-u1-l5"
    ]
  },
  {
    "id": "uk-u2",
    "unit": 2,
    "title": "Рід та число іменників (Noun Gender & Plurals)",
    "level": "A1",
    "goal": "Mastery of Рід та множина іменників (Noun Gender & Plural Forms).",
    "lessonIds": [
      "uk-u2-l1",
      "uk-u2-l2",
      "uk-u2-l3",
      "uk-u2-l4",
      "uk-u2-l5"
    ]
  },
  {
    "id": "uk-u3",
    "unit": 3,
    "title": "Називний та Кличний відмінки (Nominative & Vocative Cases)",
    "level": "A1",
    "goal": "Mastery of Називний і кличний відмінки (Nominative & Vocative Syntax).",
    "lessonIds": [
      "uk-u3-l1",
      "uk-u3-l2",
      "uk-u3-l3",
      "uk-u3-l4",
      "uk-u3-l5"
    ]
  },
  {
    "id": "uk-u4",
    "unit": 4,
    "title": "Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense)",
    "level": "A1",
    "goal": "Mastery of Теперішній час дієслів (Present Tense Conjugations).",
    "lessonIds": [
      "uk-u4-l1",
      "uk-u4-l2",
      "uk-u4-l3",
      "uk-u4-l4",
      "uk-u4-l5"
    ]
  },
  {
    "id": "uk-u5",
    "unit": 5,
    "title": "Знахідний відмінок неістот та істот (Accusative Case)",
    "level": "A1",
    "goal": "Mastery of Знахідний відмінок іменників (Accusative Case Usage).",
    "lessonIds": [
      "uk-u5-l1",
      "uk-u5-l2",
      "uk-u5-l3",
      "uk-u5-l4",
      "uk-u5-l5"
    ]
  },
  {
    "id": "uk-u6",
    "unit": 6,
    "title": "Родовий відмінок: приналежність та заперечення (Genitive Case)",
    "level": "A2",
    "goal": "Mastery of Родовий відмінок і заперечення (Genitive Case & Negation).",
    "lessonIds": [
      "uk-u6-l1",
      "uk-u6-l2",
      "uk-u6-l3",
      "uk-u6-l4",
      "uk-u6-l5"
    ]
  },
  {
    "id": "uk-u7",
    "unit": 7,
    "title": "Орудний відмінок: знаряддя та супровід (Instrumental Case)",
    "level": "A2",
    "goal": "Mastery of Орудний відмінок супроводу (Instrumental Case of Companion).",
    "lessonIds": [
      "uk-u7-l1",
      "uk-u7-l2",
      "uk-u7-l3",
      "uk-u7-l4",
      "uk-u7-l5"
    ]
  },
  {
    "id": "uk-u8",
    "unit": 8,
    "title": "Місцевий відмінок та прийменники в/на/по (Locative Case)",
    "level": "A2",
    "goal": "Mastery of Місцевий відмінок із прийменниками (Locative Case with in/on).",
    "lessonIds": [
      "uk-u8-l1",
      "uk-u8-l2",
      "uk-u8-l3",
      "uk-u8-l4",
      "uk-u8-l5"
    ]
  },
  {
    "id": "uk-u9",
    "unit": 9,
    "title": "Давальний відмінок: непрямий додаток (Dative Case)",
    "level": "A2",
    "goal": "Mastery of Давальний відмінок адресата (Dative Case of Addressee).",
    "lessonIds": [
      "uk-u9-l1",
      "uk-u9-l2",
      "uk-u9-l3",
      "uk-u9-l4",
      "uk-u9-l5"
    ]
  },
  {
    "id": "uk-u10",
    "unit": 10,
    "title": "Минулий час дієслів та узгодження в роді (Past Tense)",
    "level": "A2",
    "goal": "Mastery of Минулий час дієслів (Past Tense & Gender Agreement).",
    "lessonIds": [
      "uk-u10-l1",
      "uk-u10-l2",
      "uk-u10-l3",
      "uk-u10-l4",
      "uk-u10-l5"
    ]
  },
  {
    "id": "uk-u11",
    "unit": 11,
    "title": "Майбутній час: проста і складена форми (Future Tense)",
    "level": "B1",
    "goal": "Mastery of Форми майбутнього часу (Future Tense Simple & Compound).",
    "lessonIds": [
      "uk-u11-l1",
      "uk-u11-l2",
      "uk-u11-l3",
      "uk-u11-l4",
      "uk-u11-l5"
    ]
  },
  {
    "id": "uk-u12",
    "unit": 12,
    "title": "Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs)",
    "level": "B1",
    "goal": "Mastery of Доконаний і недоконаний вид (Verbal Aspect Pairs).",
    "lessonIds": [
      "uk-u12-l1",
      "uk-u12-l2",
      "uk-u12-l3",
      "uk-u12-l4",
      "uk-u12-l5"
    ]
  },
  {
    "id": "uk-u13",
    "unit": 13,
    "title": "Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs)",
    "level": "B1",
    "goal": "Mastery of Дієслова руху й префікси (Verbs of Motion).",
    "lessonIds": [
      "uk-u13-l1",
      "uk-u13-l2",
      "uk-u13-l3",
      "uk-u13-l4",
      "uk-u13-l5"
    ]
  },
  {
    "id": "uk-u14",
    "unit": 14,
    "title": "Прикметники: тверда та м'яка групи, узгодження (Adjectives)",
    "level": "B1",
    "goal": "Mastery of Відмінювання прикметників (Adjective Declension & Concord).",
    "lessonIds": [
      "uk-u14-l1",
      "uk-u14-l2",
      "uk-u14-l3",
      "uk-u14-l4",
      "uk-u14-l5"
    ]
  },
  {
    "id": "uk-u15",
    "unit": 15,
    "title": "Ступені порівняння прикметників та прислівників (Comparatives)",
    "level": "B1",
    "goal": "Mastery of Ступені порівняння прикметників (Comparative & Superlative).",
    "lessonIds": [
      "uk-u15-l1",
      "uk-u15-l2",
      "uk-u15-l3",
      "uk-u15-l4",
      "uk-u15-l5"
    ]
  },
  {
    "id": "uk-u16",
    "unit": 16,
    "title": "Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs)",
    "level": "B1",
    "goal": "Mastery of Зворотні дієслова на -ся (Reflexive Verbs with -ся).",
    "lessonIds": [
      "uk-u16-l1",
      "uk-u16-l2",
      "uk-u16-l3",
      "uk-u16-l4",
      "uk-u16-l5"
    ]
  },
  {
    "id": "uk-u17",
    "unit": 17,
    "title": "Умовний спосіб дієслів із часткою би/б (Subjunctive)",
    "level": "B2",
    "goal": "Mastery of Умовний спосіб дієслів (Subjunctive Mood with би/б).",
    "lessonIds": [
      "uk-u17-l1",
      "uk-u17-l2",
      "uk-u17-l3",
      "uk-u17-l4",
      "uk-u17-l5"
    ]
  },
  {
    "id": "uk-u18",
    "unit": 18,
    "title": "Наказовий спосіб та форми ввічливості (Imperative Mood)",
    "level": "B2",
    "goal": "Mastery of Наказовий спосіб дієслів (Imperative Mood & Polite Forms).",
    "lessonIds": [
      "uk-u18-l1",
      "uk-u18-l2",
      "uk-u18-l3",
      "uk-u18-l4",
      "uk-u18-l5"
    ]
  },
  {
    "id": "uk-u19",
    "unit": 19,
    "title": "Дієприкметники та дієприслівники (Participles & Gerunds)",
    "level": "B2",
    "goal": "Mastery of Дієприкметники та дієприслівники (Participles & Adverbial Participles).",
    "lessonIds": [
      "uk-u19-l1",
      "uk-u19-l2",
      "uk-u19-l3",
      "uk-u19-l4",
      "uk-u19-l5"
    ]
  },
  {
    "id": "uk-u20",
    "unit": 20,
    "title": "Складнопідрядні речення причини, мети та наслідку (Complex)",
    "level": "B2",
    "goal": "Mastery of Складнопідрядні речення (Complex Clauses of Cause & Purpose).",
    "lessonIds": [
      "uk-u20-l1",
      "uk-u20-l2",
      "uk-u20-l3",
      "uk-u20-l4",
      "uk-u20-l5"
    ]
  },
  {
    "id": "uk-u21",
    "unit": 21,
    "title": "Допустові речення: хоча, дарма що, незважаючи на (Concessives)",
    "level": "B2",
    "goal": "Mastery of Допустові підрядні речення (Concessive Clauses).",
    "lessonIds": [
      "uk-u21-l1",
      "uk-u21-l2",
      "uk-u21-l3",
      "uk-u21-l4",
      "uk-u21-l5"
    ]
  },
  {
    "id": "uk-u22",
    "unit": 22,
    "title": "Непряма мова та трансформація часових форм (Reported Speech)",
    "level": "B2",
    "goal": "Mastery of Непряма мова й цитування (Indirect Reported Speech).",
    "lessonIds": [
      "uk-u22-l1",
      "uk-u22-l2",
      "uk-u22-l3",
      "uk-u22-l4",
      "uk-u22-l5"
    ]
  },
  {
    "id": "uk-u23",
    "unit": 23,
    "title": "Ділове листування, резюме та діловий етикет (Business)",
    "level": "B2",
    "goal": "Mastery of Ділове листування та етикет (Business Communication).",
    "lessonIds": [
      "uk-u23-l1",
      "uk-u23-l2",
      "uk-u23-l3",
      "uk-u23-l4",
      "uk-u23-l5"
    ]
  },
  {
    "id": "uk-u24",
    "unit": 24,
    "title": "Медична термінологія та консультації (Healthcare)",
    "level": "B2",
    "goal": "Mastery of Медична термінологія та здоров'я (Medical Discourse).",
    "lessonIds": [
      "uk-u24-l1",
      "uk-u24-l2",
      "uk-u24-l3",
      "uk-u24-l4",
      "uk-u24-l5"
    ]
  },
  {
    "id": "uk-u25",
    "unit": 25,
    "title": "Цивільне та кримінальне право, договори (Legal)",
    "level": "C1",
    "goal": "Mastery of Правова термінологія та закони (Legal Terminology).",
    "lessonIds": [
      "uk-u25-l1",
      "uk-u25-l2",
      "uk-u25-l3",
      "uk-u25-l4",
      "uk-u25-l5"
    ]
  },
  {
    "id": "uk-u26",
    "unit": 26,
    "title": "Банківська справа, інвестиції та макроекономіка (Finance)",
    "level": "C1",
    "goal": "Mastery of Банківська справа та фінанси (Banking & Financial Markets).",
    "lessonIds": [
      "uk-u26-l1",
      "uk-u26-l2",
      "uk-u26-l3",
      "uk-u26-l4",
      "uk-u26-l5"
    ]
  },
  {
    "id": "uk-u27",
    "unit": 27,
    "title": "Українська класична література та поетика (Literature)",
    "level": "C1",
    "goal": "Mastery of Класична література та поезія (Ukrainian Literature & Poetics).",
    "lessonIds": [
      "uk-u27-l1",
      "uk-u27-l2",
      "uk-u27-l3",
      "uk-u27-l4",
      "uk-u27-l5"
    ]
  },
  {
    "id": "uk-u28",
    "unit": 28,
    "title": "Екологія, захист довкілля та енергетика (Ecology)",
    "level": "C1",
    "goal": "Mastery of Захист довкілля та екологія (Ecology & Sustainable Energy).",
    "lessonIds": [
      "uk-u28-l1",
      "uk-u28-l2",
      "uk-u28-l3",
      "uk-u28-l4",
      "uk-u28-l5"
    ]
  },
  {
    "id": "uk-u29",
    "unit": 29,
    "title": "Парламентаризм та конституційне право (Governance)",
    "level": "C1",
    "goal": "Mastery of Парламентаризм і державотворення (Governance & Parliament).",
    "lessonIds": [
      "uk-u29-l1",
      "uk-u29-l2",
      "uk-u29-l3",
      "uk-u29-l4",
      "uk-u29-l5"
    ]
  },
  {
    "id": "uk-u30",
    "unit": 30,
    "title": "Філософська думка та інтелектуальна історія (Philosophy)",
    "level": "C1",
    "goal": "Mastery of Філософська думка та етика (Philosophy & Intellectual History).",
    "lessonIds": [
      "uk-u30-l1",
      "uk-u30-l2",
      "uk-u30-l3",
      "uk-u30-l4",
      "uk-u30-l5"
    ]
  },
  {
    "id": "uk-u31",
    "unit": 31,
    "title": "Академічний дискурс, наукова термінологія (Academic Research)",
    "level": "C2",
    "goal": "Mastery of Академічний дискурс і дослідження (Academic Research & Methodology).",
    "lessonIds": [
      "uk-u31-l1",
      "uk-u31-l2",
      "uk-u31-l3",
      "uk-u31-l4",
      "uk-u31-l5"
    ]
  },
  {
    "id": "uk-u32",
    "unit": 32,
    "title": "Міжнародна дипломатія та багатосторонні договори (Diplomacy)",
    "level": "C2",
    "goal": "Mastery of Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs).",
    "lessonIds": [
      "uk-u32-l1",
      "uk-u32-l2",
      "uk-u32-l3",
      "uk-u32-l4",
      "uk-u32-l5"
    ]
  },
  {
    "id": "uk-u33",
    "unit": 33,
    "title": "Високий публіцистичний та ораторський стиль (Advanced Rhetoric)",
    "level": "C2",
    "goal": "Mastery of Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address).",
    "lessonIds": [
      "uk-u33-l1",
      "uk-u33-l2",
      "uk-u33-l3",
      "uk-u33-l4",
      "uk-u33-l5"
    ]
  },
  {
    "id": "uk-u34",
    "unit": 34,
    "title": "Державні саміти та міжнародне право (C2 Capstone Statecraft)",
    "level": "C2",
    "goal": "Mastery of Міжнародні саміти та державне право (C2 Capstone Statecraft).",
    "lessonIds": [
      "uk-u34-l1",
      "uk-u34-l2",
      "uk-u34-l3",
      "uk-u34-l4",
      "uk-u34-l5"
    ]
  }
];
  var LESSONS = {
  "uk-u1-l1": {
    "id": "uk-u1-l1",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 1,
    "title": "Українська абетка, фонетика та вітання (Alphabet & Greetings) (Part 1)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Українська кирилиця та привітання with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Доброго ранку, шановний пане професоре!",
          "reading": "[ˈdɔbrɔɦɔ ˈrɑŋku, ʃɐˈnɔwnɪj ˈpɑnɛ prɔˈfɛsɔrɛ] (DOH-broh-hoh RAHN-koo)",
          "translation": "Good morning, esteemed professor!"
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 1-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Привіт\":",
          "options": [
            "Доброго ранку, шановний пане професоре!",
            "Неправильне відмінкове узгодження зі словом «Добрий день»",
            "Порушення законів евфонії та словотворення для «Дякую»",
            "Стилістично некоректна синтаксична конструкція з «Будь ласка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Привіт\":",
          "options": [
            "Доброго ранку, шановний пане професоре!",
            "Порушення законів евфонії та словотворення для «Дякую»",
            "Стилістично некоректна синтаксична конструкція з «Будь ласка»",
            "Неправильне відмінкове узгодження зі словом «Добрий день»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Привіт\": Which sentence is completely correct?",
          "options": [
            "Доброго ранку, шановний пане професоре!",
            "Стилістично некоректна синтаксична конструкція з «Будь ласка»",
            "Неправильне відмінкове узгодження зі словом «Добрий день»",
            "Порушення законів евфонії та словотворення для «Дякую»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u1-l2": {
    "id": "uk-u1-l2",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 2,
    "title": "Українська абетка, фонетика та вітання (Alphabet & Greetings) (Part 2)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Знайомство та ввічливі форми with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Мене звати Олена, дуже приємно з вами познайомитися.",
          "reading": "[mɛˈnɛ ˈzwɑtɪ ɔˈlɛnɐ, ˈduʒɛ prɪˈjɛmnɔ z ˈwɑmɪ pɔznɐˈjɔmɪtɪsʲɐ] (meh-NEH ZVAH-ty)",
          "translation": "My name is Olena, very pleased to meet you."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 1-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Добрий день\":",
          "options": [
            "Мене звати Олена, дуже приємно з вами познайомитися.",
            "Неправильне відмінкове узгодження зі словом «Дякую»",
            "Порушення законів евфонії та словотворення для «Будь ласка»",
            "Стилістично некоректна синтаксична конструкція з «До побачення»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Добрий день\":",
          "options": [
            "Мене звати Олена, дуже приємно з вами познайомитися.",
            "Порушення законів евфонії та словотворення для «Будь ласка»",
            "Стилістично некоректна синтаксична конструкція з «До побачення»",
            "Неправильне відмінкове узгодження зі словом «Дякую»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Добрий день\": Which sentence is completely correct?",
          "options": [
            "Мене звати Олена, дуже приємно з вами познайомитися.",
            "Стилістично некоректна синтаксична конструкція з «До побачення»",
            "Неправильне відмінкове узгодження зі словом «Дякую»",
            "Порушення законів евфонії та словотворення для «Будь ласка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u1-l3": {
    "id": "uk-u1-l3",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 3,
    "title": "Українська абетка, фонетика та вітання (Alphabet & Greetings) (Part 3)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Подяка та вибачення в етикеті with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Щиро дякую вам за допомогу та підтримку.",
          "reading": "[ˈʃtʃɪrɔ ˈdʲɑkuju wɑm zɑ dɔpɔˈmɔɦu tɑ piˈdtrɪmku] (SHCHY-roh DYAH-koo-yoo)",
          "translation": "Thank you sincerely for your help and support."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 1-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Дякую\":",
          "options": [
            "Щиро дякую вам за допомогу та підтримку.",
            "Неправильне відмінкове узгодження зі словом «Будь ласка»",
            "Порушення законів евфонії та словотворення для «До побачення»",
            "Стилістично некоректна синтаксична конструкція з «Вибачте»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Дякую\":",
          "options": [
            "Щиро дякую вам за допомогу та підтримку.",
            "Порушення законів евфонії та словотворення для «До побачення»",
            "Стилістично некоректна синтаксична конструкція з «Вибачте»",
            "Неправильне відмінкове узгодження зі словом «Будь ласка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Дякую\": Which sentence is completely correct?",
          "options": [
            "Щиро дякую вам за допомогу та підтримку.",
            "Стилістично некоректна синтаксична конструкція з «Вибачте»",
            "Неправильне відмінкове узгодження зі словом «Будь ласка»",
            "Порушення законів евфонії та словотворення для «До побачення»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u1-l4": {
    "id": "uk-u1-l4",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 4,
    "title": "Українська абетка, фонетика та вітання (Alphabet & Greetings) (Part 4)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Прощання та побажання успіху with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "До побачення, гарного вам дня та на все добре!",
          "reading": "[dɔ pɔˈbɑtʃɛnʲːɐ, ˈɦɑrnɔɦɔ wɑm dnʲɑ tɑ nɑ wsɛ ˈdɔbrɛ] (doh poh-BAH-chen-nyah)",
          "translation": "Goodbye, have a nice day and all the best!"
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 1-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Будь ласка\":",
          "options": [
            "До побачення, гарного вам дня та на все добре!",
            "Неправильне відмінкове узгодження зі словом «До побачення»",
            "Порушення законів евфонії та словотворення для «Вибачте»",
            "Стилістично некоректна синтаксична конструкція з «Смачного»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Будь ласка\":",
          "options": [
            "До побачення, гарного вам дня та на все добре!",
            "Порушення законів евфонії та словотворення для «Вибачте»",
            "Стилістично некоректна синтаксична конструкція з «Смачного»",
            "Неправильне відмінкове узгодження зі словом «До побачення»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Будь ласка\": Which sentence is completely correct?",
          "options": [
            "До побачення, гарного вам дня та на все добре!",
            "Стилістично некоректна синтаксична конструкція з «Смачного»",
            "Неправильне відмінкове узгодження зі словом «До побачення»",
            "Порушення законів евфонії та словотворення для «Вибачте»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u1-l5": {
    "id": "uk-u1-l5",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 5,
    "title": "Українська абетка, фонетика та вітання (Alphabet & Greetings) (Part 5)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Фонетичні норми та милозвучність (у/в, і/й) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Учитель увійшов у клас, а він зайшов до кімнати.",
          "reading": "[uˈtʃɪtɛlʲ uwijˈʃɔw u klɑs] (oo-CHY-tel)",
          "translation": "The teacher entered the classroom, and he came into the room."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 1-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"До побачення\":",
          "options": [
            "Учитель увійшов у клас, а він зайшов до кімнати.",
            "Неправильне відмінкове узгодження зі словом «Вибачте»",
            "Порушення законів евфонії та словотворення для «Смачного»",
            "Стилістично некоректна синтаксична конструкція з «Сніданок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"До побачення\":",
          "options": [
            "Учитель увійшов у клас, а він зайшов до кімнати.",
            "Порушення законів евфонії та словотворення для «Смачного»",
            "Стилістично некоректна синтаксична конструкція з «Сніданок»",
            "Неправильне відмінкове узгодження зі словом «Вибачте»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"До побачення\": Which sentence is completely correct?",
          "options": [
            "Учитель увійшов у клас, а він зайшов до кімнати.",
            "Стилістично некоректна синтаксична конструкція з «Сніданок»",
            "Неправильне відмінкове узгодження зі словом «Вибачте»",
            "Порушення законів евфонії та словотворення для «Смачного»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u2-l1": {
    "id": "uk-u2-l1",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 1,
    "title": "Рід та число іменників (Noun Gender & Plurals) (Part 1)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 2.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 2-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вибачте\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.1.",
            "Неправильне відмінкове узгодження зі словом «Смачного»",
            "Порушення законів евфонії та словотворення для «Сніданок»",
            "Стилістично некоректна синтаксична конструкція з «Обід»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вибачте\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.1.",
            "Порушення законів евфонії та словотворення для «Сніданок»",
            "Стилістично некоректна синтаксична конструкція з «Обід»",
            "Неправильне відмінкове узгодження зі словом «Смачного»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вибачте\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.1.",
            "Стилістично некоректна синтаксична конструкція з «Обід»",
            "Неправильне відмінкове узгодження зі словом «Смачного»",
            "Порушення законів евфонії та словотворення для «Сніданок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u2-l2": {
    "id": "uk-u2-l2",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 2,
    "title": "Рід та число іменників (Noun Gender & Plurals) (Part 2)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 2.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 2-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Смачного\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.2.",
            "Неправильне відмінкове узгодження зі словом «Сніданок»",
            "Порушення законів евфонії та словотворення для «Обід»",
            "Стилістично некоректна синтаксична конструкція з «Вечеря»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Смачного\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.2.",
            "Порушення законів евфонії та словотворення для «Обід»",
            "Стилістично некоректна синтаксична конструкція з «Вечеря»",
            "Неправильне відмінкове узгодження зі словом «Сніданок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Смачного\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.2.",
            "Стилістично некоректна синтаксична конструкція з «Вечеря»",
            "Неправильне відмінкове узгодження зі словом «Сніданок»",
            "Порушення законів евфонії та словотворення для «Обід»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u2-l3": {
    "id": "uk-u2-l3",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 3,
    "title": "Рід та число іменників (Noun Gender & Plurals) (Part 3)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 2.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 2-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сніданок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.3.",
            "Неправильне відмінкове узгодження зі словом «Обід»",
            "Порушення законів евфонії та словотворення для «Вечеря»",
            "Стилістично некоректна синтаксична конструкція з «Хліб»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сніданок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.3.",
            "Порушення законів евфонії та словотворення для «Вечеря»",
            "Стилістично некоректна синтаксична конструкція з «Хліб»",
            "Неправильне відмінкове узгодження зі словом «Обід»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сніданок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.3.",
            "Стилістично некоректна синтаксична конструкція з «Хліб»",
            "Неправильне відмінкове узгодження зі словом «Обід»",
            "Порушення законів евфонії та словотворення для «Вечеря»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u2-l4": {
    "id": "uk-u2-l4",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 4,
    "title": "Рід та число іменників (Noun Gender & Plurals) (Part 4)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 2.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 2-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Обід\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.4.",
            "Неправильне відмінкове узгодження зі словом «Вечеря»",
            "Порушення законів евфонії та словотворення для «Хліб»",
            "Стилістично некоректна синтаксична конструкція з «Вода»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Обід\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.4.",
            "Порушення законів евфонії та словотворення для «Хліб»",
            "Стилістично некоректна синтаксична конструкція з «Вода»",
            "Неправильне відмінкове узгодження зі словом «Вечеря»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Обід\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.4.",
            "Стилістично некоректна синтаксична конструкція з «Вода»",
            "Неправильне відмінкове узгодження зі словом «Вечеря»",
            "Порушення законів евфонії та словотворення для «Хліб»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u2-l5": {
    "id": "uk-u2-l5",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 5,
    "title": "Рід та число іменників (Noun Gender & Plurals) (Part 5)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 2.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 2-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вечеря\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.5.",
            "Неправильне відмінкове узгодження зі словом «Хліб»",
            "Порушення законів евфонії та словотворення для «Вода»",
            "Стилістично некоректна синтаксична конструкція з «Молоко»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вечеря\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.5.",
            "Порушення законів евфонії та словотворення для «Вода»",
            "Стилістично некоректна синтаксична конструкція з «Молоко»",
            "Неправильне відмінкове узгодження зі словом «Хліб»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вечеря\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 2.5.",
            "Стилістично некоректна синтаксична конструкція з «Молоко»",
            "Неправильне відмінкове узгодження зі словом «Хліб»",
            "Порушення законів евфонії та словотворення для «Вода»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u3-l1": {
    "id": "uk-u3-l1",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 1,
    "title": "Називний та Кличний відмінки (Nominative & Vocative Cases) (Part 1)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 3.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 3-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Хліб\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.1.",
            "Неправильне відмінкове узгодження зі словом «Вода»",
            "Порушення законів евфонії та словотворення для «Молоко»",
            "Стилістично некоректна синтаксична конструкція з «Кава»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Хліб\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.1.",
            "Порушення законів евфонії та словотворення для «Молоко»",
            "Стилістично некоректна синтаксична конструкція з «Кава»",
            "Неправильне відмінкове узгодження зі словом «Вода»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Хліб\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.1.",
            "Стилістично некоректна синтаксична конструкція з «Кава»",
            "Неправильне відмінкове узгодження зі словом «Вода»",
            "Порушення законів евфонії та словотворення для «Молоко»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u3-l2": {
    "id": "uk-u3-l2",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 2,
    "title": "Називний та Кличний відмінки (Nominative & Vocative Cases) (Part 2)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 3.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 3-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.2.",
            "Неправильне відмінкове узгодження зі словом «Молоко»",
            "Порушення законів евфонії та словотворення для «Кава»",
            "Стилістично некоректна синтаксична конструкція з «Чай»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.2.",
            "Порушення законів евфонії та словотворення для «Кава»",
            "Стилістично некоректна синтаксична конструкція з «Чай»",
            "Неправильне відмінкове узгодження зі словом «Молоко»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вода\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.2.",
            "Стилістично некоректна синтаксична конструкція з «Чай»",
            "Неправильне відмінкове узгодження зі словом «Молоко»",
            "Порушення законів евфонії та словотворення для «Кава»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u3-l3": {
    "id": "uk-u3-l3",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 3,
    "title": "Називний та Кличний відмінки (Nominative & Vocative Cases) (Part 3)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 3.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 3-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Молоко\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.3.",
            "Неправильне відмінкове узгодження зі словом «Кава»",
            "Порушення законів евфонії та словотворення для «Чай»",
            "Стилістично некоректна синтаксична конструкція з «Яблуко»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Молоко\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.3.",
            "Порушення законів евфонії та словотворення для «Чай»",
            "Стилістично некоректна синтаксична конструкція з «Яблуко»",
            "Неправильне відмінкове узгодження зі словом «Кава»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Молоко\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.3.",
            "Стилістично некоректна синтаксична конструкція з «Яблуко»",
            "Неправильне відмінкове узгодження зі словом «Кава»",
            "Порушення законів евфонії та словотворення для «Чай»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u3-l4": {
    "id": "uk-u3-l4",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 4,
    "title": "Називний та Кличний відмінки (Nominative & Vocative Cases) (Part 4)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 3.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 3-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Кава\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.4.",
            "Неправильне відмінкове узгодження зі словом «Чай»",
            "Порушення законів евфонії та словотворення для «Яблуко»",
            "Стилістично некоректна синтаксична конструкція з «Борщ»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Кава\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.4.",
            "Порушення законів евфонії та словотворення для «Яблуко»",
            "Стилістично некоректна синтаксична конструкція з «Борщ»",
            "Неправильне відмінкове узгодження зі словом «Чай»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Кава\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.4.",
            "Стилістично некоректна синтаксична конструкція з «Борщ»",
            "Неправильне відмінкове узгодження зі словом «Чай»",
            "Порушення законів евфонії та словотворення для «Яблуко»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u3-l5": {
    "id": "uk-u3-l5",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 5,
    "title": "Називний та Кличний відмінки (Nominative & Vocative Cases) (Part 5)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 3.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 3-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Чай\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.5.",
            "Неправильне відмінкове узгодження зі словом «Яблуко»",
            "Порушення законів евфонії та словотворення для «Борщ»",
            "Стилістично некоректна синтаксична конструкція з «Вареники»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Чай\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.5.",
            "Порушення законів евфонії та словотворення для «Борщ»",
            "Стилістично некоректна синтаксична конструкція з «Вареники»",
            "Неправильне відмінкове узгодження зі словом «Яблуко»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Чай\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 3.5.",
            "Стилістично некоректна синтаксична конструкція з «Вареники»",
            "Неправильне відмінкове узгодження зі словом «Яблуко»",
            "Порушення законів евфонії та словотворення для «Борщ»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u4-l1": {
    "id": "uk-u4-l1",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 1,
    "title": "Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) (Part 1)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 4.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 4-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Яблуко\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.1.",
            "Неправильне відмінкове узгодження зі словом «Борщ»",
            "Порушення законів евфонії та словотворення для «Вареники»",
            "Стилістично некоректна синтаксична конструкція з «Сало»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Яблуко\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.1.",
            "Порушення законів евфонії та словотворення для «Вареники»",
            "Стилістично некоректна синтаксична конструкція з «Сало»",
            "Неправильне відмінкове узгодження зі словом «Борщ»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Яблуко\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.1.",
            "Стилістично некоректна синтаксична конструкція з «Сало»",
            "Неправильне відмінкове узгодження зі словом «Борщ»",
            "Порушення законів евфонії та словотворення для «Вареники»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u4-l2": {
    "id": "uk-u4-l2",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 2,
    "title": "Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) (Part 2)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 4.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 4-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Борщ\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.2.",
            "Неправильне відмінкове узгодження зі словом «Вареники»",
            "Порушення законів евфонії та словотворення для «Сало»",
            "Стилістично некоректна синтаксична конструкція з «Мед»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Борщ\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.2.",
            "Порушення законів евфонії та словотворення для «Сало»",
            "Стилістично некоректна синтаксична конструкція з «Мед»",
            "Неправильне відмінкове узгодження зі словом «Вареники»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Борщ\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.2.",
            "Стилістично некоректна синтаксична конструкція з «Мед»",
            "Неправильне відмінкове узгодження зі словом «Вареники»",
            "Порушення законів евфонії та словотворення для «Сало»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u4-l3": {
    "id": "uk-u4-l3",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 3,
    "title": "Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) (Part 3)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 4.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 4-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вареники\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.3.",
            "Неправильне відмінкове узгодження зі словом «Сало»",
            "Порушення законів евфонії та словотворення для «Мед»",
            "Стилістично некоректна синтаксична конструкція з «Автобус»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вареники\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.3.",
            "Порушення законів евфонії та словотворення для «Мед»",
            "Стилістично некоректна синтаксична конструкція з «Автобус»",
            "Неправильне відмінкове узгодження зі словом «Сало»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вареники\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.3.",
            "Стилістично некоректна синтаксична конструкція з «Автобус»",
            "Неправильне відмінкове узгодження зі словом «Сало»",
            "Порушення законів евфонії та словотворення для «Мед»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u4-l4": {
    "id": "uk-u4-l4",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 4,
    "title": "Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) (Part 4)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 4.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 4-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сало\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.4.",
            "Неправильне відмінкове узгодження зі словом «Мед»",
            "Порушення законів евфонії та словотворення для «Автобус»",
            "Стилістично некоректна синтаксична конструкція з «Поїзд»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сало\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.4.",
            "Порушення законів евфонії та словотворення для «Автобус»",
            "Стилістично некоректна синтаксична конструкція з «Поїзд»",
            "Неправильне відмінкове узгодження зі словом «Мед»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сало\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.4.",
            "Стилістично некоректна синтаксична конструкція з «Поїзд»",
            "Неправильне відмінкове узгодження зі словом «Мед»",
            "Порушення законів евфонії та словотворення для «Автобус»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u4-l5": {
    "id": "uk-u4-l5",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 5,
    "title": "Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) (Part 5)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 4.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 4-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Мед\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.5.",
            "Неправильне відмінкове узгодження зі словом «Автобус»",
            "Порушення законів евфонії та словотворення для «Поїзд»",
            "Стилістично некоректна синтаксична конструкція з «Літак»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Мед\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.5.",
            "Порушення законів евфонії та словотворення для «Поїзд»",
            "Стилістично некоректна синтаксична конструкція з «Літак»",
            "Неправильне відмінкове узгодження зі словом «Автобус»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Мед\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 4.5.",
            "Стилістично некоректна синтаксична конструкція з «Літак»",
            "Неправильне відмінкове узгодження зі словом «Автобус»",
            "Порушення законів евфонії та словотворення для «Поїзд»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u5-l1": {
    "id": "uk-u5-l1",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 1,
    "title": "Знахідний відмінок неістот та істот (Accusative Case) (Part 1)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 5.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 5-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Автобус\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.1.",
            "Неправильне відмінкове узгодження зі словом «Поїзд»",
            "Порушення законів евфонії та словотворення для «Літак»",
            "Стилістично некоректна синтаксична конструкція з «Метро»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Автобус\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.1.",
            "Порушення законів евфонії та словотворення для «Літак»",
            "Стилістично некоректна синтаксична конструкція з «Метро»",
            "Неправильне відмінкове узгодження зі словом «Поїзд»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Автобус\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.1.",
            "Стилістично некоректна синтаксична конструкція з «Метро»",
            "Неправильне відмінкове узгодження зі словом «Поїзд»",
            "Порушення законів евфонії та словотворення для «Літак»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u5-l2": {
    "id": "uk-u5-l2",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 2,
    "title": "Знахідний відмінок неістот та істот (Accusative Case) (Part 2)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 5.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 5-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Поїзд\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.2.",
            "Неправильне відмінкове узгодження зі словом «Літак»",
            "Порушення законів евфонії та словотворення для «Метро»",
            "Стилістично некоректна синтаксична конструкція з «Квиток»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Поїзд\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.2.",
            "Порушення законів евфонії та словотворення для «Метро»",
            "Стилістично некоректна синтаксична конструкція з «Квиток»",
            "Неправильне відмінкове узгодження зі словом «Літак»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Поїзд\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.2.",
            "Стилістично некоректна синтаксична конструкція з «Квиток»",
            "Неправильне відмінкове узгодження зі словом «Літак»",
            "Порушення законів евфонії та словотворення для «Метро»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u5-l3": {
    "id": "uk-u5-l3",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 3,
    "title": "Знахідний відмінок неістот та істот (Accusative Case) (Part 3)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 5.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 5-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Літак\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.3.",
            "Неправильне відмінкове узгодження зі словом «Метро»",
            "Порушення законів евфонії та словотворення для «Квиток»",
            "Стилістично некоректна синтаксична конструкція з «Вокзал»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Літак\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.3.",
            "Порушення законів евфонії та словотворення для «Квиток»",
            "Стилістично некоректна синтаксична конструкція з «Вокзал»",
            "Неправильне відмінкове узгодження зі словом «Метро»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Літак\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.3.",
            "Стилістично некоректна синтаксична конструкція з «Вокзал»",
            "Неправильне відмінкове узгодження зі словом «Метро»",
            "Порушення законів евфонії та словотворення для «Квиток»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u5-l4": {
    "id": "uk-u5-l4",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 4,
    "title": "Знахідний відмінок неістот та істот (Accusative Case) (Part 4)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 5.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 5-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Метро\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.4.",
            "Неправильне відмінкове узгодження зі словом «Квиток»",
            "Порушення законів евфонії та словотворення для «Вокзал»",
            "Стилістично некоректна синтаксична конструкція з «Аеропорт»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Метро\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.4.",
            "Порушення законів евфонії та словотворення для «Вокзал»",
            "Стилістично некоректна синтаксична конструкція з «Аеропорт»",
            "Неправильне відмінкове узгодження зі словом «Квиток»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Метро\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.4.",
            "Стилістично некоректна синтаксична конструкція з «Аеропорт»",
            "Неправильне відмінкове узгодження зі словом «Квиток»",
            "Порушення законів евфонії та словотворення для «Вокзал»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u5-l5": {
    "id": "uk-u5-l5",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 5,
    "title": "Знахідний відмінок неістот та істот (Accusative Case) (Part 5)",
    "level": "A1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 5.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 5-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Квиток\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.5.",
            "Неправильне відмінкове узгодження зі словом «Вокзал»",
            "Порушення законів евфонії та словотворення для «Аеропорт»",
            "Стилістично некоректна синтаксична конструкція з «Вулиця»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Квиток\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.5.",
            "Порушення законів евфонії та словотворення для «Аеропорт»",
            "Стилістично некоректна синтаксична конструкція з «Вулиця»",
            "Неправильне відмінкове узгодження зі словом «Вокзал»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Квиток\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 5.5.",
            "Стилістично некоректна синтаксична конструкція з «Вулиця»",
            "Неправильне відмінкове узгодження зі словом «Вокзал»",
            "Порушення законів евфонії та словотворення для «Аеропорт»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u6-l1": {
    "id": "uk-u6-l1",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 1,
    "title": "Родовий відмінок: приналежність та заперечення (Genitive Case) (Part 1)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 6.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 6-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вокзал\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.1.",
            "Неправильне відмінкове узгодження зі словом «Аеропорт»",
            "Порушення законів евфонії та словотворення для «Вулиця»",
            "Стилістично некоректна синтаксична конструкція з «Місто»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вокзал\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.1.",
            "Порушення законів евфонії та словотворення для «Вулиця»",
            "Стилістично некоректна синтаксична конструкція з «Місто»",
            "Неправильне відмінкове узгодження зі словом «Аеропорт»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вокзал\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.1.",
            "Стилістично некоректна синтаксична конструкція з «Місто»",
            "Неправильне відмінкове узгодження зі словом «Аеропорт»",
            "Порушення законів евфонії та словотворення для «Вулиця»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u6-l2": {
    "id": "uk-u6-l2",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 2,
    "title": "Родовий відмінок: приналежність та заперечення (Genitive Case) (Part 2)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 6.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 6-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Аеропорт\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.2.",
            "Неправильне відмінкове узгодження зі словом «Вулиця»",
            "Порушення законів евфонії та словотворення для «Місто»",
            "Стилістично некоректна синтаксична конструкція з «Село»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Аеропорт\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.2.",
            "Порушення законів евфонії та словотворення для «Місто»",
            "Стилістично некоректна синтаксична конструкція з «Село»",
            "Неправильне відмінкове узгодження зі словом «Вулиця»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Аеропорт\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.2.",
            "Стилістично некоректна синтаксична конструкція з «Село»",
            "Неправильне відмінкове узгодження зі словом «Вулиця»",
            "Порушення законів евфонії та словотворення для «Місто»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u6-l3": {
    "id": "uk-u6-l3",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 3,
    "title": "Родовий відмінок: приналежність та заперечення (Genitive Case) (Part 3)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 6.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 6-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вулиця\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.3.",
            "Неправильне відмінкове узгодження зі словом «Місто»",
            "Порушення законів евфонії та словотворення для «Село»",
            "Стилістично некоректна синтаксична конструкція з «Магазин»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вулиця\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.3.",
            "Порушення законів евфонії та словотворення для «Село»",
            "Стилістично некоректна синтаксична конструкція з «Магазин»",
            "Неправильне відмінкове узгодження зі словом «Місто»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вулиця\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.3.",
            "Стилістично некоректна синтаксична конструкція з «Магазин»",
            "Неправильне відмінкове узгодження зі словом «Місто»",
            "Порушення законів евфонії та словотворення для «Село»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u6-l4": {
    "id": "uk-u6-l4",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 4,
    "title": "Родовий відмінок: приналежність та заперечення (Genitive Case) (Part 4)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 6.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 6-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Місто\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.4.",
            "Неправильне відмінкове узгодження зі словом «Село»",
            "Порушення законів евфонії та словотворення для «Магазин»",
            "Стилістично некоректна синтаксична конструкція з «Гроші»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Місто\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.4.",
            "Порушення законів евфонії та словотворення для «Магазин»",
            "Стилістично некоректна синтаксична конструкція з «Гроші»",
            "Неправильне відмінкове узгодження зі словом «Село»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Місто\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.4.",
            "Стилістично некоректна синтаксична конструкція з «Гроші»",
            "Неправильне відмінкове узгодження зі словом «Село»",
            "Порушення законів евфонії та словотворення для «Магазин»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u6-l5": {
    "id": "uk-u6-l5",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 5,
    "title": "Родовий відмінок: приналежність та заперечення (Genitive Case) (Part 5)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 6.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 6-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Село\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.5.",
            "Неправильне відмінкове узгодження зі словом «Магазин»",
            "Порушення законів евфонії та словотворення для «Гроші»",
            "Стилістично некоректна синтаксична конструкція з «Ціна»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Село\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.5.",
            "Порушення законів евфонії та словотворення для «Гроші»",
            "Стилістично некоректна синтаксична конструкція з «Ціна»",
            "Неправильне відмінкове узгодження зі словом «Магазин»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Село\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 6.5.",
            "Стилістично некоректна синтаксична конструкція з «Ціна»",
            "Неправильне відмінкове узгодження зі словом «Магазин»",
            "Порушення законів евфонії та словотворення для «Гроші»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u7-l1": {
    "id": "uk-u7-l1",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 1,
    "title": "Орудний відмінок: знаряддя та супровід (Instrumental Case) (Part 1)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 7.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 7-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Магазин\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.1.",
            "Неправильне відмінкове узгодження зі словом «Гроші»",
            "Порушення законів евфонії та словотворення для «Ціна»",
            "Стилістично некоректна синтаксична конструкція з «Знижка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Магазин\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.1.",
            "Порушення законів евфонії та словотворення для «Ціна»",
            "Стилістично некоректна синтаксична конструкція з «Знижка»",
            "Неправильне відмінкове узгодження зі словом «Гроші»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Магазин\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.1.",
            "Стилістично некоректна синтаксична конструкція з «Знижка»",
            "Неправильне відмінкове узгодження зі словом «Гроші»",
            "Порушення законів евфонії та словотворення для «Ціна»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u7-l2": {
    "id": "uk-u7-l2",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 2,
    "title": "Орудний відмінок: знаряддя та супровід (Instrumental Case) (Part 2)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 7.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 7-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Гроші\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.2.",
            "Неправильне відмінкове узгодження зі словом «Ціна»",
            "Порушення законів евфонії та словотворення для «Знижка»",
            "Стилістично некоректна синтаксична конструкція з «Каса»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Гроші\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.2.",
            "Порушення законів евфонії та словотворення для «Знижка»",
            "Стилістично некоректна синтаксична конструкція з «Каса»",
            "Неправильне відмінкове узгодження зі словом «Ціна»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Гроші\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.2.",
            "Стилістично некоректна синтаксична конструкція з «Каса»",
            "Неправильне відмінкове узгодження зі словом «Ціна»",
            "Порушення законів евфонії та словотворення для «Знижка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u7-l3": {
    "id": "uk-u7-l3",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 3,
    "title": "Орудний відмінок: знаряддя та супровід (Instrumental Case) (Part 3)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 7.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 7-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ціна\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.3.",
            "Неправильне відмінкове узгодження зі словом «Знижка»",
            "Порушення законів евфонії та словотворення для «Каса»",
            "Стилістично некоректна синтаксична конструкція з «Рахунок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ціна\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.3.",
            "Порушення законів евфонії та словотворення для «Каса»",
            "Стилістично некоректна синтаксична конструкція з «Рахунок»",
            "Неправильне відмінкове узгодження зі словом «Знижка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ціна\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.3.",
            "Стилістично некоректна синтаксична конструкція з «Рахунок»",
            "Неправильне відмінкове узгодження зі словом «Знижка»",
            "Порушення законів евфонії та словотворення для «Каса»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u7-l4": {
    "id": "uk-u7-l4",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 4,
    "title": "Орудний відмінок: знаряддя та супровід (Instrumental Case) (Part 4)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 7.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 7-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Знижка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.4.",
            "Неправильне відмінкове узгодження зі словом «Каса»",
            "Порушення законів евфонії та словотворення для «Рахунок»",
            "Стилістично некоректна синтаксична конструкція з «Гривня»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Знижка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.4.",
            "Порушення законів евфонії та словотворення для «Рахунок»",
            "Стилістично некоректна синтаксична конструкція з «Гривня»",
            "Неправильне відмінкове узгодження зі словом «Каса»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Знижка\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.4.",
            "Стилістично некоректна синтаксична конструкція з «Гривня»",
            "Неправильне відмінкове узгодження зі словом «Каса»",
            "Порушення законів евфонії та словотворення для «Рахунок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u7-l5": {
    "id": "uk-u7-l5",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 5,
    "title": "Орудний відмінок: знаряддя та супровід (Instrumental Case) (Part 5)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 7.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 7-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Каса\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.5.",
            "Неправильне відмінкове узгодження зі словом «Рахунок»",
            "Порушення законів евфонії та словотворення для «Гривня»",
            "Стилістично некоректна синтаксична конструкція з «Картка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Каса\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.5.",
            "Порушення законів евфонії та словотворення для «Гривня»",
            "Стилістично некоректна синтаксична конструкція з «Картка»",
            "Неправильне відмінкове узгодження зі словом «Рахунок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Каса\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 7.5.",
            "Стилістично некоректна синтаксична конструкція з «Картка»",
            "Неправильне відмінкове узгодження зі словом «Рахунок»",
            "Порушення законів евфонії та словотворення для «Гривня»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u8-l1": {
    "id": "uk-u8-l1",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 1,
    "title": "Місцевий відмінок та прийменники в/на/по (Locative Case) (Part 1)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 8.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 8-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Рахунок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.1.",
            "Неправильне відмінкове узгодження зі словом «Гривня»",
            "Порушення законів евфонії та словотворення для «Картка»",
            "Стилістично некоректна синтаксична конструкція з «Покупка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Рахунок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.1.",
            "Порушення законів евфонії та словотворення для «Картка»",
            "Стилістично некоректна синтаксична конструкція з «Покупка»",
            "Неправильне відмінкове узгодження зі словом «Гривня»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Рахунок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.1.",
            "Стилістично некоректна синтаксична конструкція з «Покупка»",
            "Неправильне відмінкове узгодження зі словом «Гривня»",
            "Порушення законів евфонії та словотворення для «Картка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u8-l2": {
    "id": "uk-u8-l2",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 2,
    "title": "Місцевий відмінок та прийменники в/на/по (Locative Case) (Part 2)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 8.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 8-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Гривня\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.2.",
            "Неправильне відмінкове узгодження зі словом «Картка»",
            "Порушення законів евфонії та словотворення для «Покупка»",
            "Стилістично некоректна синтаксична конструкція з «Ринок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Гривня\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.2.",
            "Порушення законів евфонії та словотворення для «Покупка»",
            "Стилістично некоректна синтаксична конструкція з «Ринок»",
            "Неправильне відмінкове узгодження зі словом «Картка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Гривня\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.2.",
            "Стилістично некоректна синтаксична конструкція з «Ринок»",
            "Неправильне відмінкове узгодження зі словом «Картка»",
            "Порушення законів евфонії та словотворення для «Покупка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u8-l3": {
    "id": "uk-u8-l3",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 3,
    "title": "Місцевий відмінок та прийменники в/на/по (Locative Case) (Part 3)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 8.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 8-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Картка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.3.",
            "Неправильне відмінкове узгодження зі словом «Покупка»",
            "Порушення законів евфонії та словотворення для «Ринок»",
            "Стилістично некоректна синтаксична конструкція з «Будинок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Картка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.3.",
            "Порушення законів евфонії та словотворення для «Ринок»",
            "Стилістично некоректна синтаксична конструкція з «Будинок»",
            "Неправильне відмінкове узгодження зі словом «Покупка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Картка\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.3.",
            "Стилістично некоректна синтаксична конструкція з «Будинок»",
            "Неправильне відмінкове узгодження зі словом «Покупка»",
            "Порушення законів евфонії та словотворення для «Ринок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u8-l4": {
    "id": "uk-u8-l4",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 4,
    "title": "Місцевий відмінок та прийменники в/на/по (Locative Case) (Part 4)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 8.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 8-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Покупка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.4.",
            "Неправильне відмінкове узгодження зі словом «Ринок»",
            "Порушення законів евфонії та словотворення для «Будинок»",
            "Стилістично некоректна синтаксична конструкція з «Квартира»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Покупка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.4.",
            "Порушення законів евфонії та словотворення для «Будинок»",
            "Стилістично некоректна синтаксична конструкція з «Квартира»",
            "Неправильне відмінкове узгодження зі словом «Ринок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Покупка\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.4.",
            "Стилістично некоректна синтаксична конструкція з «Квартира»",
            "Неправильне відмінкове узгодження зі словом «Ринок»",
            "Порушення законів евфонії та словотворення для «Будинок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u8-l5": {
    "id": "uk-u8-l5",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 5,
    "title": "Місцевий відмінок та прийменники в/на/по (Locative Case) (Part 5)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 8.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 8-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ринок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.5.",
            "Неправильне відмінкове узгодження зі словом «Будинок»",
            "Порушення законів евфонії та словотворення для «Квартира»",
            "Стилістично некоректна синтаксична конструкція з «Кімната»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ринок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.5.",
            "Порушення законів евфонії та словотворення для «Квартира»",
            "Стилістично некоректна синтаксична конструкція з «Кімната»",
            "Неправильне відмінкове узгодження зі словом «Будинок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ринок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 8.5.",
            "Стилістично некоректна синтаксична конструкція з «Кімната»",
            "Неправильне відмінкове узгодження зі словом «Будинок»",
            "Порушення законів евфонії та словотворення для «Квартира»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u9-l1": {
    "id": "uk-u9-l1",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 1,
    "title": "Давальний відмінок: непрямий додаток (Dative Case) (Part 1)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 9.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 9-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Будинок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.1.",
            "Неправильне відмінкове узгодження зі словом «Квартира»",
            "Порушення законів евфонії та словотворення для «Кімната»",
            "Стилістично некоректна синтаксична конструкція з «Кухня»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Будинок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.1.",
            "Порушення законів евфонії та словотворення для «Кімната»",
            "Стилістично некоректна синтаксична конструкція з «Кухня»",
            "Неправильне відмінкове узгодження зі словом «Квартира»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Будинок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.1.",
            "Стилістично некоректна синтаксична конструкція з «Кухня»",
            "Неправильне відмінкове узгодження зі словом «Квартира»",
            "Порушення законів евфонії та словотворення для «Кімната»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u9-l2": {
    "id": "uk-u9-l2",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 2,
    "title": "Давальний відмінок: непрямий додаток (Dative Case) (Part 2)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 9.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 9-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Квартира\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.2.",
            "Неправильне відмінкове узгодження зі словом «Кімната»",
            "Порушення законів евфонії та словотворення для «Кухня»",
            "Стилістично некоректна синтаксична конструкція з «Вікно»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Квартира\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.2.",
            "Порушення законів евфонії та словотворення для «Кухня»",
            "Стилістично некоректна синтаксична конструкція з «Вікно»",
            "Неправильне відмінкове узгодження зі словом «Кімната»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Квартира\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.2.",
            "Стилістично некоректна синтаксична конструкція з «Вікно»",
            "Неправильне відмінкове узгодження зі словом «Кімната»",
            "Порушення законів евфонії та словотворення для «Кухня»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u9-l3": {
    "id": "uk-u9-l3",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 3,
    "title": "Давальний відмінок: непрямий додаток (Dative Case) (Part 3)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 9.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 9-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Кімната\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.3.",
            "Неправильне відмінкове узгодження зі словом «Кухня»",
            "Порушення законів евфонії та словотворення для «Вікно»",
            "Стилістично некоректна синтаксична конструкція з «Двері»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Кімната\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.3.",
            "Порушення законів евфонії та словотворення для «Вікно»",
            "Стилістично некоректна синтаксична конструкція з «Двері»",
            "Неправильне відмінкове узгодження зі словом «Кухня»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Кімната\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.3.",
            "Стилістично некоректна синтаксична конструкція з «Двері»",
            "Неправильне відмінкове узгодження зі словом «Кухня»",
            "Порушення законів евфонії та словотворення для «Вікно»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u9-l4": {
    "id": "uk-u9-l4",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 4,
    "title": "Давальний відмінок: непрямий додаток (Dative Case) (Part 4)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 9.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 9-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Кухня\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.4.",
            "Неправильне відмінкове узгодження зі словом «Вікно»",
            "Порушення законів евфонії та словотворення для «Двері»",
            "Стилістично некоректна синтаксична конструкція з «Стіл»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Кухня\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.4.",
            "Порушення законів евфонії та словотворення для «Двері»",
            "Стилістично некоректна синтаксична конструкція з «Стіл»",
            "Неправильне відмінкове узгодження зі словом «Вікно»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Кухня\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.4.",
            "Стилістично некоректна синтаксична конструкція з «Стіл»",
            "Неправильне відмінкове узгодження зі словом «Вікно»",
            "Порушення законів евфонії та словотворення для «Двері»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u9-l5": {
    "id": "uk-u9-l5",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 5,
    "title": "Давальний відмінок: непрямий додаток (Dative Case) (Part 5)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 9.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 9-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вікно\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.5.",
            "Неправильне відмінкове узгодження зі словом «Двері»",
            "Порушення законів евфонії та словотворення для «Стіл»",
            "Стилістично некоректна синтаксична конструкція з «Стілець»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вікно\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.5.",
            "Порушення законів евфонії та словотворення для «Стіл»",
            "Стилістично некоректна синтаксична конструкція з «Стілець»",
            "Неправильне відмінкове узгодження зі словом «Двері»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вікно\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 9.5.",
            "Стилістично некоректна синтаксична конструкція з «Стілець»",
            "Неправильне відмінкове узгодження зі словом «Двері»",
            "Порушення законів евфонії та словотворення для «Стіл»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u10-l1": {
    "id": "uk-u10-l1",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 1,
    "title": "Минулий час дієслів та узгодження в роді (Past Tense) (Part 1)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 10.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 10-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Двері\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.1.",
            "Неправильне відмінкове узгодження зі словом «Стіл»",
            "Порушення законів евфонії та словотворення для «Стілець»",
            "Стилістично некоректна синтаксична конструкція з «Ліжко»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Двері\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.1.",
            "Порушення законів евфонії та словотворення для «Стілець»",
            "Стилістично некоректна синтаксична конструкція з «Ліжко»",
            "Неправильне відмінкове узгодження зі словом «Стіл»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Двері\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.1.",
            "Стилістично некоректна синтаксична конструкція з «Ліжко»",
            "Неправильне відмінкове узгодження зі словом «Стіл»",
            "Порушення законів евфонії та словотворення для «Стілець»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u10-l2": {
    "id": "uk-u10-l2",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 2,
    "title": "Минулий час дієслів та узгодження в роді (Past Tense) (Part 2)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 10.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 10-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Стіл\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.2.",
            "Неправильне відмінкове узгодження зі словом «Стілець»",
            "Порушення законів евфонії та словотворення для «Ліжко»",
            "Стилістично некоректна синтаксична конструкція з «Шафа»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Стіл\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.2.",
            "Порушення законів евфонії та словотворення для «Ліжко»",
            "Стилістично некоректна синтаксична конструкція з «Шафа»",
            "Неправильне відмінкове узгодження зі словом «Стілець»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Стіл\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.2.",
            "Стилістично некоректна синтаксична конструкція з «Шафа»",
            "Неправильне відмінкове узгодження зі словом «Стілець»",
            "Порушення законів евфонії та словотворення для «Ліжко»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u10-l3": {
    "id": "uk-u10-l3",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 3,
    "title": "Минулий час дієслів та узгодження в роді (Past Tense) (Part 3)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 10.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 10-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Стілець\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.3.",
            "Неправильне відмінкове узгодження зі словом «Ліжко»",
            "Порушення законів евфонії та словотворення для «Шафа»",
            "Стилістично некоректна синтаксична конструкція з «Робота»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Стілець\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.3.",
            "Порушення законів евфонії та словотворення для «Шафа»",
            "Стилістично некоректна синтаксична конструкція з «Робота»",
            "Неправильне відмінкове узгодження зі словом «Ліжко»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Стілець\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.3.",
            "Стилістично некоректна синтаксична конструкція з «Робота»",
            "Неправильне відмінкове узгодження зі словом «Ліжко»",
            "Порушення законів евфонії та словотворення для «Шафа»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u10-l4": {
    "id": "uk-u10-l4",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 4,
    "title": "Минулий час дієслів та узгодження в роді (Past Tense) (Part 4)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 10.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 10-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ліжко\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.4.",
            "Неправильне відмінкове узгодження зі словом «Шафа»",
            "Порушення законів евфонії та словотворення для «Робота»",
            "Стилістично некоректна синтаксична конструкція з «Офіс»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ліжко\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.4.",
            "Порушення законів евфонії та словотворення для «Робота»",
            "Стилістично некоректна синтаксична конструкція з «Офіс»",
            "Неправильне відмінкове узгодження зі словом «Шафа»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ліжко\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.4.",
            "Стилістично некоректна синтаксична конструкція з «Офіс»",
            "Неправильне відмінкове узгодження зі словом «Шафа»",
            "Порушення законів евфонії та словотворення для «Робота»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u10-l5": {
    "id": "uk-u10-l5",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 5,
    "title": "Минулий час дієслів та узгодження в роді (Past Tense) (Part 5)",
    "level": "A2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 10.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 10-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Шафа\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.5.",
            "Неправильне відмінкове узгодження зі словом «Робота»",
            "Порушення законів евфонії та словотворення для «Офіс»",
            "Стилістично некоректна синтаксична конструкція з «Колега»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Шафа\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.5.",
            "Порушення законів евфонії та словотворення для «Офіс»",
            "Стилістично некоректна синтаксична конструкція з «Колега»",
            "Неправильне відмінкове узгодження зі словом «Робота»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Шафа\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 10.5.",
            "Стилістично некоректна синтаксична конструкція з «Колега»",
            "Неправильне відмінкове узгодження зі словом «Робота»",
            "Порушення законів евфонії та словотворення для «Офіс»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u11-l1": {
    "id": "uk-u11-l1",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 1,
    "title": "Майбутній час: проста і складена форми (Future Tense) (Part 1)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 11.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 11-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Робота\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.1.",
            "Неправильне відмінкове узгодження зі словом «Офіс»",
            "Порушення законів евфонії та словотворення для «Колега»",
            "Стилістично некоректна синтаксична конструкція з «Директор»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Робота\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.1.",
            "Порушення законів евфонії та словотворення для «Колега»",
            "Стилістично некоректна синтаксична конструкція з «Директор»",
            "Неправильне відмінкове узгодження зі словом «Офіс»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Робота\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.1.",
            "Стилістично некоректна синтаксична конструкція з «Директор»",
            "Неправильне відмінкове узгодження зі словом «Офіс»",
            "Порушення законів евфонії та словотворення для «Колега»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u11-l2": {
    "id": "uk-u11-l2",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 2,
    "title": "Майбутній час: проста і складена форми (Future Tense) (Part 2)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 11.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 11-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Офіс\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.2.",
            "Неправильне відмінкове узгодження зі словом «Колега»",
            "Порушення законів евфонії та словотворення для «Директор»",
            "Стилістично некоректна синтаксична конструкція з «Зарплата»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Офіс\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.2.",
            "Порушення законів евфонії та словотворення для «Директор»",
            "Стилістично некоректна синтаксична конструкція з «Зарплата»",
            "Неправильне відмінкове узгодження зі словом «Колега»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Офіс\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.2.",
            "Стилістично некоректна синтаксична конструкція з «Зарплата»",
            "Неправильне відмінкове узгодження зі словом «Колега»",
            "Порушення законів евфонії та словотворення для «Директор»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u11-l3": {
    "id": "uk-u11-l3",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 3,
    "title": "Майбутній час: проста і складена форми (Future Tense) (Part 3)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 11.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 11-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Колега\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.3.",
            "Неправильне відмінкове узгодження зі словом «Директор»",
            "Порушення законів евфонії та словотворення для «Зарплата»",
            "Стилістично некоректна синтаксична конструкція з «Відпустка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Колега\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.3.",
            "Порушення законів евфонії та словотворення для «Зарплата»",
            "Стилістично некоректна синтаксична конструкція з «Відпустка»",
            "Неправильне відмінкове узгодження зі словом «Директор»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Колега\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.3.",
            "Стилістично некоректна синтаксична конструкція з «Відпустка»",
            "Неправильне відмінкове узгодження зі словом «Директор»",
            "Порушення законів евфонії та словотворення для «Зарплата»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u11-l4": {
    "id": "uk-u11-l4",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 4,
    "title": "Майбутній час: проста і складена форми (Future Tense) (Part 4)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 11.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 11-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Директор\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.4.",
            "Неправильне відмінкове узгодження зі словом «Зарплата»",
            "Порушення законів евфонії та словотворення для «Відпустка»",
            "Стилістично некоректна синтаксична конструкція з «Зустріч»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Директор\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.4.",
            "Порушення законів евфонії та словотворення для «Відпустка»",
            "Стилістично некоректна синтаксична конструкція з «Зустріч»",
            "Неправильне відмінкове узгодження зі словом «Зарплата»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Директор\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.4.",
            "Стилістично некоректна синтаксична конструкція з «Зустріч»",
            "Неправильне відмінкове узгодження зі словом «Зарплата»",
            "Порушення законів евфонії та словотворення для «Відпустка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u11-l5": {
    "id": "uk-u11-l5",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 5,
    "title": "Майбутній час: проста і складена форми (Future Tense) (Part 5)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 11.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 11-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Зарплата\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.5.",
            "Неправильне відмінкове узгодження зі словом «Відпустка»",
            "Порушення законів евфонії та словотворення для «Зустріч»",
            "Стилістично некоректна синтаксична конструкція з «Проєкт»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Зарплата\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.5.",
            "Порушення законів евфонії та словотворення для «Зустріч»",
            "Стилістично некоректна синтаксична конструкція з «Проєкт»",
            "Неправильне відмінкове узгодження зі словом «Відпустка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Зарплата\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 11.5.",
            "Стилістично некоректна синтаксична конструкція з «Проєкт»",
            "Неправильне відмінкове узгодження зі словом «Відпустка»",
            "Порушення законів евфонії та словотворення для «Зустріч»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u12-l1": {
    "id": "uk-u12-l1",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 1,
    "title": "Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) (Part 1)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 12.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 12-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Відпустка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.1.",
            "Неправильне відмінкове узгодження зі словом «Зустріч»",
            "Порушення законів евфонії та словотворення для «Проєкт»",
            "Стилістично некоректна синтаксична конструкція з «Угода»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Відпустка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.1.",
            "Порушення законів евфонії та словотворення для «Проєкт»",
            "Стилістично некоректна синтаксична конструкція з «Угода»",
            "Неправильне відмінкове узгодження зі словом «Зустріч»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Відпустка\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.1.",
            "Стилістично некоректна синтаксична конструкція з «Угода»",
            "Неправильне відмінкове узгодження зі словом «Зустріч»",
            "Порушення законів евфонії та словотворення для «Проєкт»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u12-l2": {
    "id": "uk-u12-l2",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 2,
    "title": "Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) (Part 2)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 12.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 12-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Зустріч\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.2.",
            "Неправильне відмінкове узгодження зі словом «Проєкт»",
            "Порушення законів евфонії та словотворення для «Угода»",
            "Стилістично некоректна синтаксична конструкція з «Кар'єра»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Зустріч\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.2.",
            "Порушення законів евфонії та словотворення для «Угода»",
            "Стилістично некоректна синтаксична конструкція з «Кар'єра»",
            "Неправильне відмінкове узгодження зі словом «Проєкт»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Зустріч\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.2.",
            "Стилістично некоректна синтаксична конструкція з «Кар'єра»",
            "Неправильне відмінкове узгодження зі словом «Проєкт»",
            "Порушення законів евфонії та словотворення для «Угода»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u12-l3": {
    "id": "uk-u12-l3",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 3,
    "title": "Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) (Part 3)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 12.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 12-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Проєкт\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.3.",
            "Неправильне відмінкове узгодження зі словом «Угода»",
            "Порушення законів евфонії та словотворення для «Кар'єра»",
            "Стилістично некоректна синтаксична конструкція з «Книга»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Проєкт\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.3.",
            "Порушення законів евфонії та словотворення для «Кар'єра»",
            "Стилістично некоректна синтаксична конструкція з «Книга»",
            "Неправильне відмінкове узгодження зі словом «Угода»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Проєкт\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.3.",
            "Стилістично некоректна синтаксична конструкція з «Книга»",
            "Неправильне відмінкове узгодження зі словом «Угода»",
            "Порушення законів евфонії та словотворення для «Кар'єра»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u12-l4": {
    "id": "uk-u12-l4",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 4,
    "title": "Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) (Part 4)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 12.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 12-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Угода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.4.",
            "Неправильне відмінкове узгодження зі словом «Кар'єра»",
            "Порушення законів евфонії та словотворення для «Книга»",
            "Стилістично некоректна синтаксична конструкція з «Музика»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Угода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.4.",
            "Порушення законів евфонії та словотворення для «Книга»",
            "Стилістично некоректна синтаксична конструкція з «Музика»",
            "Неправильне відмінкове узгодження зі словом «Кар'єра»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Угода\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.4.",
            "Стилістично некоректна синтаксична конструкція з «Музика»",
            "Неправильне відмінкове узгодження зі словом «Кар'єра»",
            "Порушення законів евфонії та словотворення для «Книга»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u12-l5": {
    "id": "uk-u12-l5",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 5,
    "title": "Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) (Part 5)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 12.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 12-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Кар'єра\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.5.",
            "Неправильне відмінкове узгодження зі словом «Книга»",
            "Порушення законів евфонії та словотворення для «Музика»",
            "Стилістично некоректна синтаксична конструкція з «Фільм»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Кар'єра\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.5.",
            "Порушення законів евфонії та словотворення для «Музика»",
            "Стилістично некоректна синтаксична конструкція з «Фільм»",
            "Неправильне відмінкове узгодження зі словом «Книга»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Кар'єра\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 12.5.",
            "Стилістично некоректна синтаксична конструкція з «Фільм»",
            "Неправильне відмінкове узгодження зі словом «Книга»",
            "Порушення законів евфонії та словотворення для «Музика»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u13-l1": {
    "id": "uk-u13-l1",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 1,
    "title": "Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) (Part 1)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 13.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 13-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Книга\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.1.",
            "Неправильне відмінкове узгодження зі словом «Музика»",
            "Порушення законів евфонії та словотворення для «Фільм»",
            "Стилістично некоректна синтаксична конструкція з «Спорт»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Книга\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.1.",
            "Порушення законів евфонії та словотворення для «Фільм»",
            "Стилістично некоректна синтаксична конструкція з «Спорт»",
            "Неправильне відмінкове узгодження зі словом «Музика»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Книга\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.1.",
            "Стилістично некоректна синтаксична конструкція з «Спорт»",
            "Неправильне відмінкове узгодження зі словом «Музика»",
            "Порушення законів евфонії та словотворення для «Фільм»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u13-l2": {
    "id": "uk-u13-l2",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 2,
    "title": "Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) (Part 2)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 13.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 13-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Музика\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.2.",
            "Неправильне відмінкове узгодження зі словом «Фільм»",
            "Порушення законів евфонії та словотворення для «Спорт»",
            "Стилістично некоректна синтаксична конструкція з «Футбол»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Музика\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.2.",
            "Порушення законів евфонії та словотворення для «Спорт»",
            "Стилістично некоректна синтаксична конструкція з «Футбол»",
            "Неправильне відмінкове узгодження зі словом «Фільм»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Музика\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.2.",
            "Стилістично некоректна синтаксична конструкція з «Футбол»",
            "Неправильне відмінкове узгодження зі словом «Фільм»",
            "Порушення законів евфонії та словотворення для «Спорт»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u13-l3": {
    "id": "uk-u13-l3",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 3,
    "title": "Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) (Part 3)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 13.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 13-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Фільм\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.3.",
            "Неправильне відмінкове узгодження зі словом «Спорт»",
            "Порушення законів евфонії та словотворення для «Футбол»",
            "Стилістично некоректна синтаксична конструкція з «Плавання»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Фільм\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.3.",
            "Порушення законів евфонії та словотворення для «Футбол»",
            "Стилістично некоректна синтаксична конструкція з «Плавання»",
            "Неправильне відмінкове узгодження зі словом «Спорт»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Фільм\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.3.",
            "Стилістично некоректна синтаксична конструкція з «Плавання»",
            "Неправильне відмінкове узгодження зі словом «Спорт»",
            "Порушення законів евфонії та словотворення для «Футбол»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u13-l4": {
    "id": "uk-u13-l4",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 4,
    "title": "Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) (Part 4)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 13.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 13-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Спорт\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.4.",
            "Неправильне відмінкове узгодження зі словом «Футбол»",
            "Порушення законів евфонії та словотворення для «Плавання»",
            "Стилістично некоректна синтаксична конструкція з «Подорож»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Спорт\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.4.",
            "Порушення законів евфонії та словотворення для «Плавання»",
            "Стилістично некоректна синтаксична конструкція з «Подорож»",
            "Неправильне відмінкове узгодження зі словом «Футбол»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Спорт\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.4.",
            "Стилістично некоректна синтаксична конструкція з «Подорож»",
            "Неправильне відмінкове узгодження зі словом «Футбол»",
            "Порушення законів евфонії та словотворення для «Плавання»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u13-l5": {
    "id": "uk-u13-l5",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 5,
    "title": "Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) (Part 5)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 13.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 13-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Футбол\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.5.",
            "Неправильне відмінкове узгодження зі словом «Плавання»",
            "Порушення законів евфонії та словотворення для «Подорож»",
            "Стилістично некоректна синтаксична конструкція з «Театр»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Футбол\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.5.",
            "Порушення законів евфонії та словотворення для «Подорож»",
            "Стилістично некоректна синтаксична конструкція з «Театр»",
            "Неправильне відмінкове узгодження зі словом «Плавання»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Футбол\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 13.5.",
            "Стилістично некоректна синтаксична конструкція з «Театр»",
            "Неправильне відмінкове узгодження зі словом «Плавання»",
            "Порушення законів евфонії та словотворення для «Подорож»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u14-l1": {
    "id": "uk-u14-l1",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 1,
    "title": "Прикметники: тверда та м'яка групи, узгодження (Adjectives) (Part 1)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 14.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 14-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Плавання\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.1.",
            "Неправильне відмінкове узгодження зі словом «Подорож»",
            "Порушення законів евфонії та словотворення для «Театр»",
            "Стилістично некоректна синтаксична конструкція з «Музей»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Плавання\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.1.",
            "Порушення законів евфонії та словотворення для «Театр»",
            "Стилістично некоректна синтаксична конструкція з «Музей»",
            "Неправильне відмінкове узгодження зі словом «Подорож»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Плавання\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.1.",
            "Стилістично некоректна синтаксична конструкція з «Музей»",
            "Неправильне відмінкове узгодження зі словом «Подорож»",
            "Порушення законів евфонії та словотворення для «Театр»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u14-l2": {
    "id": "uk-u14-l2",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 2,
    "title": "Прикметники: тверда та м'яка групи, узгодження (Adjectives) (Part 2)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 14.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 14-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Подорож\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.2.",
            "Неправильне відмінкове узгодження зі словом «Театр»",
            "Порушення законів евфонії та словотворення для «Музей»",
            "Стилістично некоректна синтаксична конструкція з «Картина»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Подорож\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.2.",
            "Порушення законів евфонії та словотворення для «Музей»",
            "Стилістично некоректна синтаксична конструкція з «Картина»",
            "Неправильне відмінкове узгодження зі словом «Театр»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Подорож\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.2.",
            "Стилістично некоректна синтаксична конструкція з «Картина»",
            "Неправильне відмінкове узгодження зі словом «Театр»",
            "Порушення законів евфонії та словотворення для «Музей»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u14-l3": {
    "id": "uk-u14-l3",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 3,
    "title": "Прикметники: тверда та м'яка групи, узгодження (Adjectives) (Part 3)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 14.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 14-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Театр\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.3.",
            "Неправильне відмінкове узгодження зі словом «Музей»",
            "Порушення законів евфонії та словотворення для «Картина»",
            "Стилістично некоректна синтаксична конструкція з «Погода»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Театр\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.3.",
            "Порушення законів евфонії та словотворення для «Картина»",
            "Стилістично некоректна синтаксична конструкція з «Погода»",
            "Неправильне відмінкове узгодження зі словом «Музей»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Театр\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.3.",
            "Стилістично некоректна синтаксична конструкція з «Погода»",
            "Неправильне відмінкове узгодження зі словом «Музей»",
            "Порушення законів евфонії та словотворення для «Картина»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u14-l4": {
    "id": "uk-u14-l4",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 4,
    "title": "Прикметники: тверда та м'яка групи, узгодження (Adjectives) (Part 4)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 14.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 14-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Музей\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.4.",
            "Неправильне відмінкове узгодження зі словом «Картина»",
            "Порушення законів евфонії та словотворення для «Погода»",
            "Стилістично некоректна синтаксична конструкція з «Сонце»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Музей\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.4.",
            "Порушення законів евфонії та словотворення для «Погода»",
            "Стилістично некоректна синтаксична конструкція з «Сонце»",
            "Неправильне відмінкове узгодження зі словом «Картина»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Музей\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.4.",
            "Стилістично некоректна синтаксична конструкція з «Сонце»",
            "Неправильне відмінкове узгодження зі словом «Картина»",
            "Порушення законів евфонії та словотворення для «Погода»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u14-l5": {
    "id": "uk-u14-l5",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 5,
    "title": "Прикметники: тверда та м'яка групи, узгодження (Adjectives) (Part 5)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 14.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 14-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Картина\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.5.",
            "Неправильне відмінкове узгодження зі словом «Погода»",
            "Порушення законів евфонії та словотворення для «Сонце»",
            "Стилістично некоректна синтаксична конструкція з «Дощ»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Картина\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.5.",
            "Порушення законів евфонії та словотворення для «Сонце»",
            "Стилістично некоректна синтаксична конструкція з «Дощ»",
            "Неправильне відмінкове узгодження зі словом «Погода»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Картина\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 14.5.",
            "Стилістично некоректна синтаксична конструкція з «Дощ»",
            "Неправильне відмінкове узгодження зі словом «Погода»",
            "Порушення законів евфонії та словотворення для «Сонце»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u15-l1": {
    "id": "uk-u15-l1",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 1,
    "title": "Ступені порівняння прикметників та прислівників (Comparatives) (Part 1)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 15.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 15-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Погода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.1.",
            "Неправильне відмінкове узгодження зі словом «Сонце»",
            "Порушення законів евфонії та словотворення для «Дощ»",
            "Стилістично некоректна синтаксична конструкція з «Сніг»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Погода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.1.",
            "Порушення законів евфонії та словотворення для «Дощ»",
            "Стилістично некоректна синтаксична конструкція з «Сніг»",
            "Неправильне відмінкове узгодження зі словом «Сонце»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Погода\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.1.",
            "Стилістично некоректна синтаксична конструкція з «Сніг»",
            "Неправильне відмінкове узгодження зі словом «Сонце»",
            "Порушення законів евфонії та словотворення для «Дощ»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u15-l2": {
    "id": "uk-u15-l2",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 2,
    "title": "Ступені порівняння прикметників та прислівників (Comparatives) (Part 2)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 15.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 15-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сонце\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.2.",
            "Неправильне відмінкове узгодження зі словом «Дощ»",
            "Порушення законів евфонії та словотворення для «Сніг»",
            "Стилістично некоректна синтаксична конструкція з «Вітер»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сонце\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.2.",
            "Порушення законів евфонії та словотворення для «Сніг»",
            "Стилістично некоректна синтаксична конструкція з «Вітер»",
            "Неправильне відмінкове узгодження зі словом «Дощ»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сонце\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.2.",
            "Стилістично некоректна синтаксична конструкція з «Вітер»",
            "Неправильне відмінкове узгодження зі словом «Дощ»",
            "Порушення законів евфонії та словотворення для «Сніг»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u15-l3": {
    "id": "uk-u15-l3",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 3,
    "title": "Ступені порівняння прикметників та прислівників (Comparatives) (Part 3)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 15.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 15-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Дощ\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.3.",
            "Неправильне відмінкове узгодження зі словом «Сніг»",
            "Порушення законів евфонії та словотворення для «Вітер»",
            "Стилістично некоректна синтаксична конструкція з «Хмара»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Дощ\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.3.",
            "Порушення законів евфонії та словотворення для «Вітер»",
            "Стилістично некоректна синтаксична конструкція з «Хмара»",
            "Неправильне відмінкове узгодження зі словом «Сніг»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Дощ\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.3.",
            "Стилістично некоректна синтаксична конструкція з «Хмара»",
            "Неправильне відмінкове узгодження зі словом «Сніг»",
            "Порушення законів евфонії та словотворення для «Вітер»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u15-l4": {
    "id": "uk-u15-l4",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 4,
    "title": "Ступені порівняння прикметників та прислівників (Comparatives) (Part 4)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 15.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 15-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сніг\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.4.",
            "Неправильне відмінкове узгодження зі словом «Вітер»",
            "Порушення законів евфонії та словотворення для «Хмара»",
            "Стилістично некоректна синтаксична конструкція з «Тепло»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сніг\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.4.",
            "Порушення законів евфонії та словотворення для «Хмара»",
            "Стилістично некоректна синтаксична конструкція з «Тепло»",
            "Неправильне відмінкове узгодження зі словом «Вітер»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сніг\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.4.",
            "Стилістично некоректна синтаксична конструкція з «Тепло»",
            "Неправильне відмінкове узгодження зі словом «Вітер»",
            "Порушення законів евфонії та словотворення для «Хмара»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u15-l5": {
    "id": "uk-u15-l5",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 5,
    "title": "Ступені порівняння прикметників та прислівників (Comparatives) (Part 5)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 15.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 15-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вітер\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.5.",
            "Неправильне відмінкове узгодження зі словом «Хмара»",
            "Порушення законів евфонії та словотворення для «Тепло»",
            "Стилістично некоректна синтаксична конструкція з «Холодно»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вітер\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.5.",
            "Порушення законів евфонії та словотворення для «Тепло»",
            "Стилістично некоректна синтаксична конструкція з «Холодно»",
            "Неправильне відмінкове узгодження зі словом «Хмара»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вітер\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 15.5.",
            "Стилістично некоректна синтаксична конструкція з «Холодно»",
            "Неправильне відмінкове узгодження зі словом «Хмара»",
            "Порушення законів евфонії та словотворення для «Тепло»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u16-l1": {
    "id": "uk-u16-l1",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 1,
    "title": "Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) (Part 1)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 16.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 16-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Хмара\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.1.",
            "Неправильне відмінкове узгодження зі словом «Тепло»",
            "Порушення законів евфонії та словотворення для «Холодно»",
            "Стилістично некоректна синтаксична конструкція з «Весна»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Хмара\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.1.",
            "Порушення законів евфонії та словотворення для «Холодно»",
            "Стилістично некоректна синтаксична конструкція з «Весна»",
            "Неправильне відмінкове узгодження зі словом «Тепло»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Хмара\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.1.",
            "Стилістично некоректна синтаксична конструкція з «Весна»",
            "Неправильне відмінкове узгодження зі словом «Тепло»",
            "Порушення законів евфонії та словотворення для «Холодно»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u16-l2": {
    "id": "uk-u16-l2",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 2,
    "title": "Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) (Part 2)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 16.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 16-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Тепло\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.2.",
            "Неправильне відмінкове узгодження зі словом «Холодно»",
            "Порушення законів евфонії та словотворення для «Весна»",
            "Стилістично некоректна синтаксична конструкція з «Осінь»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Тепло\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.2.",
            "Порушення законів евфонії та словотворення для «Весна»",
            "Стилістично некоректна синтаксична конструкція з «Осінь»",
            "Неправильне відмінкове узгодження зі словом «Холодно»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Тепло\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.2.",
            "Стилістично некоректна синтаксична конструкція з «Осінь»",
            "Неправильне відмінкове узгодження зі словом «Холодно»",
            "Порушення законів евфонії та словотворення для «Весна»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u16-l3": {
    "id": "uk-u16-l3",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 3,
    "title": "Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) (Part 3)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 16.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 16-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Холодно\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.3.",
            "Неправильне відмінкове узгодження зі словом «Весна»",
            "Порушення законів евфонії та словотворення для «Осінь»",
            "Стилістично некоректна синтаксична конструкція з «Лікар»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Холодно\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.3.",
            "Порушення законів евфонії та словотворення для «Осінь»",
            "Стилістично некоректна синтаксична конструкція з «Лікар»",
            "Неправильне відмінкове узгодження зі словом «Весна»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Холодно\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.3.",
            "Стилістично некоректна синтаксична конструкція з «Лікар»",
            "Неправильне відмінкове узгодження зі словом «Весна»",
            "Порушення законів евфонії та словотворення для «Осінь»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u16-l4": {
    "id": "uk-u16-l4",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 4,
    "title": "Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) (Part 4)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 16.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 16-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Весна\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.4.",
            "Неправильне відмінкове узгодження зі словом «Осінь»",
            "Порушення законів евфонії та словотворення для «Лікар»",
            "Стилістично некоректна синтаксична конструкція з «Аптека»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Весна\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.4.",
            "Порушення законів евфонії та словотворення для «Лікар»",
            "Стилістично некоректна синтаксична конструкція з «Аптека»",
            "Неправильне відмінкове узгодження зі словом «Осінь»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Весна\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.4.",
            "Стилістично некоректна синтаксична конструкція з «Аптека»",
            "Неправильне відмінкове узгодження зі словом «Осінь»",
            "Порушення законів евфонії та словотворення для «Лікар»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u16-l5": {
    "id": "uk-u16-l5",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 5,
    "title": "Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) (Part 5)",
    "level": "B1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 16.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 16-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Осінь\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.5.",
            "Неправильне відмінкове узгодження зі словом «Лікар»",
            "Порушення законів евфонії та словотворення для «Аптека»",
            "Стилістично некоректна синтаксична конструкція з «Ліки»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Осінь\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.5.",
            "Порушення законів евфонії та словотворення для «Аптека»",
            "Стилістично некоректна синтаксична конструкція з «Ліки»",
            "Неправильне відмінкове узгодження зі словом «Лікар»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Осінь\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 16.5.",
            "Стилістично некоректна синтаксична конструкція з «Ліки»",
            "Неправильне відмінкове узгодження зі словом «Лікар»",
            "Порушення законів евфонії та словотворення для «Аптека»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u17-l1": {
    "id": "uk-u17-l1",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 1,
    "title": "Умовний спосіб дієслів із часткою би/б (Subjunctive) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 17.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 17-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Лікар\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.1.",
            "Неправильне відмінкове узгодження зі словом «Аптека»",
            "Порушення законів евфонії та словотворення для «Ліки»",
            "Стилістично некоректна синтаксична конструкція з «Здоров'я»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Лікар\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.1.",
            "Порушення законів евфонії та словотворення для «Ліки»",
            "Стилістично некоректна синтаксична конструкція з «Здоров'я»",
            "Неправильне відмінкове узгодження зі словом «Аптека»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Лікар\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.1.",
            "Стилістично некоректна синтаксична конструкція з «Здоров'я»",
            "Неправильне відмінкове узгодження зі словом «Аптека»",
            "Порушення законів евфонії та словотворення для «Ліки»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u17-l2": {
    "id": "uk-u17-l2",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 2,
    "title": "Умовний спосіб дієслів із часткою би/б (Subjunctive) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 17.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 17-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Аптека\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.2.",
            "Неправильне відмінкове узгодження зі словом «Ліки»",
            "Порушення законів евфонії та словотворення для «Здоров'я»",
            "Стилістично некоректна синтаксична конструкція з «Лікарня»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Аптека\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.2.",
            "Порушення законів евфонії та словотворення для «Здоров'я»",
            "Стилістично некоректна синтаксична конструкція з «Лікарня»",
            "Неправильне відмінкове узгодження зі словом «Ліки»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Аптека\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.2.",
            "Стилістично некоректна синтаксична конструкція з «Лікарня»",
            "Неправильне відмінкове узгодження зі словом «Ліки»",
            "Порушення законів евфонії та словотворення для «Здоров'я»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u17-l3": {
    "id": "uk-u17-l3",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 3,
    "title": "Умовний спосіб дієслів із часткою би/б (Subjunctive) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 17.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 17-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ліки\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.3.",
            "Неправильне відмінкове узгодження зі словом «Здоров'я»",
            "Порушення законів евфонії та словотворення для «Лікарня»",
            "Стилістично некоректна синтаксична конструкція з «Температура»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ліки\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.3.",
            "Порушення законів евфонії та словотворення для «Лікарня»",
            "Стилістично некоректна синтаксична конструкція з «Температура»",
            "Неправильне відмінкове узгодження зі словом «Здоров'я»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ліки\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.3.",
            "Стилістично некоректна синтаксична конструкція з «Температура»",
            "Неправильне відмінкове узгодження зі словом «Здоров'я»",
            "Порушення законів евфонії та словотворення для «Лікарня»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u17-l4": {
    "id": "uk-u17-l4",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 4,
    "title": "Умовний спосіб дієслів із часткою би/б (Subjunctive) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 17.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 17-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Здоров'я\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.4.",
            "Неправильне відмінкове узгодження зі словом «Лікарня»",
            "Порушення законів евфонії та словотворення для «Температура»",
            "Стилістично некоректна синтаксична конструкція з «Голова»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Здоров'я\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.4.",
            "Порушення законів евфонії та словотворення для «Температура»",
            "Стилістично некоректна синтаксична конструкція з «Голова»",
            "Неправильне відмінкове узгодження зі словом «Лікарня»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Здоров'я\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.4.",
            "Стилістично некоректна синтаксична конструкція з «Голова»",
            "Неправильне відмінкове узгодження зі словом «Лікарня»",
            "Порушення законів евфонії та словотворення для «Температура»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u17-l5": {
    "id": "uk-u17-l5",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 5,
    "title": "Умовний спосіб дієслів із часткою би/б (Subjunctive) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 17.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 17-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Лікарня\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.5.",
            "Неправильне відмінкове узгодження зі словом «Температура»",
            "Порушення законів евфонії та словотворення для «Голова»",
            "Стилістично некоректна синтаксична конструкція з «Серце»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Лікарня\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.5.",
            "Порушення законів евфонії та словотворення для «Голова»",
            "Стилістично некоректна синтаксична конструкція з «Серце»",
            "Неправильне відмінкове узгодження зі словом «Температура»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Лікарня\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 17.5.",
            "Стилістично некоректна синтаксична конструкція з «Серце»",
            "Неправильне відмінкове узгодження зі словом «Температура»",
            "Порушення законів евфонії та словотворення для «Голова»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u18-l1": {
    "id": "uk-u18-l1",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 1,
    "title": "Наказовий спосіб та форми ввічливості (Imperative Mood) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 18.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 18-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Температура\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.1.",
            "Неправильне відмінкове узгодження зі словом «Голова»",
            "Порушення законів евфонії та словотворення для «Серце»",
            "Стилістично некоректна синтаксична конструкція з «Очі»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Температура\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.1.",
            "Порушення законів евфонії та словотворення для «Серце»",
            "Стилістично некоректна синтаксична конструкція з «Очі»",
            "Неправильне відмінкове узгодження зі словом «Голова»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Температура\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.1.",
            "Стилістично некоректна синтаксична конструкція з «Очі»",
            "Неправильне відмінкове узгодження зі словом «Голова»",
            "Порушення законів евфонії та словотворення для «Серце»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u18-l2": {
    "id": "uk-u18-l2",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 2,
    "title": "Наказовий спосіб та форми ввічливості (Imperative Mood) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 18.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 18-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Голова\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.2.",
            "Неправильне відмінкове узгодження зі словом «Серце»",
            "Порушення законів евфонії та словотворення для «Очі»",
            "Стилістично некоректна синтаксична конструкція з «Руки»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Голова\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.2.",
            "Порушення законів евфонії та словотворення для «Очі»",
            "Стилістично некоректна синтаксична конструкція з «Руки»",
            "Неправильне відмінкове узгодження зі словом «Серце»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Голова\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.2.",
            "Стилістично некоректна синтаксична конструкція з «Руки»",
            "Неправильне відмінкове узгодження зі словом «Серце»",
            "Порушення законів евфонії та словотворення для «Очі»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u18-l3": {
    "id": "uk-u18-l3",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 3,
    "title": "Наказовий спосіб та форми ввічливості (Imperative Mood) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 18.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 18-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Серце\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.3.",
            "Неправильне відмінкове узгодження зі словом «Очі»",
            "Порушення законів евфонії та словотворення для «Руки»",
            "Стилістично некоректна синтаксична конструкція з «Родина»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Серце\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.3.",
            "Порушення законів евфонії та словотворення для «Руки»",
            "Стилістично некоректна синтаксична конструкція з «Родина»",
            "Неправильне відмінкове узгодження зі словом «Очі»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Серце\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.3.",
            "Стилістично некоректна синтаксична конструкція з «Родина»",
            "Неправильне відмінкове узгодження зі словом «Очі»",
            "Порушення законів евфонії та словотворення для «Руки»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u18-l4": {
    "id": "uk-u18-l4",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 4,
    "title": "Наказовий спосіб та форми ввічливості (Imperative Mood) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 18.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 18-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Очі\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.4.",
            "Неправильне відмінкове узгодження зі словом «Руки»",
            "Порушення законів евфонії та словотворення для «Родина»",
            "Стилістично некоректна синтаксична конструкція з «Батько»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Очі\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.4.",
            "Порушення законів евфонії та словотворення для «Родина»",
            "Стилістично некоректна синтаксична конструкція з «Батько»",
            "Неправильне відмінкове узгодження зі словом «Руки»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Очі\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.4.",
            "Стилістично некоректна синтаксична конструкція з «Батько»",
            "Неправильне відмінкове узгодження зі словом «Руки»",
            "Порушення законів евфонії та словотворення для «Родина»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u18-l5": {
    "id": "uk-u18-l5",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 5,
    "title": "Наказовий спосіб та форми ввічливості (Imperative Mood) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 18.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 18-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Руки\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.5.",
            "Неправильне відмінкове узгодження зі словом «Родина»",
            "Порушення законів евфонії та словотворення для «Батько»",
            "Стилістично некоректна синтаксична конструкція з «Мати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Руки\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.5.",
            "Порушення законів евфонії та словотворення для «Батько»",
            "Стилістично некоректна синтаксична конструкція з «Мати»",
            "Неправильне відмінкове узгодження зі словом «Родина»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Руки\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 18.5.",
            "Стилістично некоректна синтаксична конструкція з «Мати»",
            "Неправильне відмінкове узгодження зі словом «Родина»",
            "Порушення законів евфонії та словотворення для «Батько»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u19-l1": {
    "id": "uk-u19-l1",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 1,
    "title": "Дієприкметники та дієприслівники (Participles & Gerunds) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 19.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 19-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Родина\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.1.",
            "Неправильне відмінкове узгодження зі словом «Батько»",
            "Порушення законів евфонії та словотворення для «Мати»",
            "Стилістично некоректна синтаксична конструкція з «Брат»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Родина\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.1.",
            "Порушення законів евфонії та словотворення для «Мати»",
            "Стилістично некоректна синтаксична конструкція з «Брат»",
            "Неправильне відмінкове узгодження зі словом «Батько»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Родина\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.1.",
            "Стилістично некоректна синтаксична конструкція з «Брат»",
            "Неправильне відмінкове узгодження зі словом «Батько»",
            "Порушення законів евфонії та словотворення для «Мати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u19-l2": {
    "id": "uk-u19-l2",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 2,
    "title": "Дієприкметники та дієприслівники (Participles & Gerunds) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 19.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 19-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Батько\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.2.",
            "Неправильне відмінкове узгодження зі словом «Мати»",
            "Порушення законів евфонії та словотворення для «Брат»",
            "Стилістично некоректна синтаксична конструкція з «Сестра»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Батько\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.2.",
            "Порушення законів евфонії та словотворення для «Брат»",
            "Стилістично некоректна синтаксична конструкція з «Сестра»",
            "Неправильне відмінкове узгодження зі словом «Мати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Батько\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.2.",
            "Стилістично некоректна синтаксична конструкція з «Сестра»",
            "Неправильне відмінкове узгодження зі словом «Мати»",
            "Порушення законів евфонії та словотворення для «Брат»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u19-l3": {
    "id": "uk-u19-l3",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 3,
    "title": "Дієприкметники та дієприслівники (Participles & Gerunds) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 19.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 19-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Мати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.3.",
            "Неправильне відмінкове узгодження зі словом «Брат»",
            "Порушення законів евфонії та словотворення для «Сестра»",
            "Стилістично некоректна синтаксична конструкція з «Дідусь»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Мати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.3.",
            "Порушення законів евфонії та словотворення для «Сестра»",
            "Стилістично некоректна синтаксична конструкція з «Дідусь»",
            "Неправильне відмінкове узгодження зі словом «Брат»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Мати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.3.",
            "Стилістично некоректна синтаксична конструкція з «Дідусь»",
            "Неправильне відмінкове узгодження зі словом «Брат»",
            "Порушення законів евфонії та словотворення для «Сестра»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u19-l4": {
    "id": "uk-u19-l4",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 4,
    "title": "Дієприкметники та дієприслівники (Participles & Gerunds) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 19.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 19-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Брат\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.4.",
            "Неправильне відмінкове узгодження зі словом «Сестра»",
            "Порушення законів евфонії та словотворення для «Дідусь»",
            "Стилістично некоректна синтаксична конструкція з «Бабуся»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Брат\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.4.",
            "Порушення законів евфонії та словотворення для «Дідусь»",
            "Стилістично некоректна синтаксична конструкція з «Бабуся»",
            "Неправильне відмінкове узгодження зі словом «Сестра»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Брат\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.4.",
            "Стилістично некоректна синтаксична конструкція з «Бабуся»",
            "Неправильне відмінкове узгодження зі словом «Сестра»",
            "Порушення законів евфонії та словотворення для «Дідусь»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u19-l5": {
    "id": "uk-u19-l5",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 5,
    "title": "Дієприкметники та дієприслівники (Participles & Gerunds) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 19.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 19-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сестра\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.5.",
            "Неправильне відмінкове узгодження зі словом «Дідусь»",
            "Порушення законів евфонії та словотворення для «Бабуся»",
            "Стилістично некоректна синтаксична конструкція з «Син»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сестра\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.5.",
            "Порушення законів евфонії та словотворення для «Бабуся»",
            "Стилістично некоректна синтаксична конструкція з «Син»",
            "Неправильне відмінкове узгодження зі словом «Дідусь»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сестра\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 19.5.",
            "Стилістично некоректна синтаксична конструкція з «Син»",
            "Неправильне відмінкове узгодження зі словом «Дідусь»",
            "Порушення законів евфонії та словотворення для «Бабуся»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u20-l1": {
    "id": "uk-u20-l1",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 1,
    "title": "Складнопідрядні речення причини, мети та наслідку (Complex) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 20.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 20-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Дідусь\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.1.",
            "Неправильне відмінкове узгодження зі словом «Бабуся»",
            "Порушення законів евфонії та словотворення для «Син»",
            "Стилістично некоректна синтаксична конструкція з «Донька»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Дідусь\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.1.",
            "Порушення законів евфонії та словотворення для «Син»",
            "Стилістично некоректна синтаксична конструкція з «Донька»",
            "Неправильне відмінкове узгодження зі словом «Бабуся»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Дідусь\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.1.",
            "Стилістично некоректна синтаксична конструкція з «Донька»",
            "Неправильне відмінкове узгодження зі словом «Бабуся»",
            "Порушення законів евфонії та словотворення для «Син»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u20-l2": {
    "id": "uk-u20-l2",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 2,
    "title": "Складнопідрядні речення причини, мети та наслідку (Complex) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 20.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 20-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Бабуся\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.2.",
            "Неправильне відмінкове узгодження зі словом «Син»",
            "Порушення законів евфонії та словотворення для «Донька»",
            "Стилістично некоректна синтаксична конструкція з «Друг»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Бабуся\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.2.",
            "Порушення законів евфонії та словотворення для «Донька»",
            "Стилістично некоректна синтаксична конструкція з «Друг»",
            "Неправильне відмінкове узгодження зі словом «Син»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Бабуся\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.2.",
            "Стилістично некоректна синтаксична конструкція з «Друг»",
            "Неправильне відмінкове узгодження зі словом «Син»",
            "Порушення законів евфонії та словотворення для «Донька»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u20-l3": {
    "id": "uk-u20-l3",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 3,
    "title": "Складнопідрядні речення причини, мети та наслідку (Complex) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 20.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 20-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Син\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.3.",
            "Неправильне відмінкове узгодження зі словом «Донька»",
            "Порушення законів евфонії та словотворення для «Друг»",
            "Стилістично некоректна синтаксична конструкція з «Сьогодні»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Син\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.3.",
            "Порушення законів евфонії та словотворення для «Друг»",
            "Стилістично некоректна синтаксична конструкція з «Сьогодні»",
            "Неправильне відмінкове узгодження зі словом «Донька»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Син\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.3.",
            "Стилістично некоректна синтаксична конструкція з «Сьогодні»",
            "Неправильне відмінкове узгодження зі словом «Донька»",
            "Порушення законів евфонії та словотворення для «Друг»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u20-l4": {
    "id": "uk-u20-l4",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 4,
    "title": "Складнопідрядні речення причини, мети та наслідку (Complex) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 20.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 20-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Донька\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.4.",
            "Неправильне відмінкове узгодження зі словом «Друг»",
            "Порушення законів евфонії та словотворення для «Сьогодні»",
            "Стилістично некоректна синтаксична конструкція з «Вчора»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Донька\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.4.",
            "Порушення законів евфонії та словотворення для «Сьогодні»",
            "Стилістично некоректна синтаксична конструкція з «Вчора»",
            "Неправильне відмінкове узгодження зі словом «Друг»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Донька\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.4.",
            "Стилістично некоректна синтаксична конструкція з «Вчора»",
            "Неправильне відмінкове узгодження зі словом «Друг»",
            "Порушення законів евфонії та словотворення для «Сьогодні»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u20-l5": {
    "id": "uk-u20-l5",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 5,
    "title": "Складнопідрядні речення причини, мети та наслідку (Complex) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 20.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 20-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Друг\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.5.",
            "Неправильне відмінкове узгодження зі словом «Сьогодні»",
            "Порушення законів евфонії та словотворення для «Вчора»",
            "Стилістично некоректна синтаксична конструкція з «Завтра»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Друг\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.5.",
            "Порушення законів евфонії та словотворення для «Вчора»",
            "Стилістично некоректна синтаксична конструкція з «Завтра»",
            "Неправильне відмінкове узгодження зі словом «Сьогодні»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Друг\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 20.5.",
            "Стилістично некоректна синтаксична конструкція з «Завтра»",
            "Неправильне відмінкове узгодження зі словом «Сьогодні»",
            "Порушення законів евфонії та словотворення для «Вчора»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u21-l1": {
    "id": "uk-u21-l1",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 1,
    "title": "Допустові речення: хоча, дарма що, незважаючи на (Concessives) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 21.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 21-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сьогодні\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.1.",
            "Неправильне відмінкове узгодження зі словом «Вчора»",
            "Порушення законів евфонії та словотворення для «Завтра»",
            "Стилістично некоректна синтаксична конструкція з «Ранок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сьогодні\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.1.",
            "Порушення законів евфонії та словотворення для «Завтра»",
            "Стилістично некоректна синтаксична конструкція з «Ранок»",
            "Неправильне відмінкове узгодження зі словом «Вчора»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сьогодні\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.1.",
            "Стилістично некоректна синтаксична конструкція з «Ранок»",
            "Неправильне відмінкове узгодження зі словом «Вчора»",
            "Порушення законів евфонії та словотворення для «Завтра»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u21-l2": {
    "id": "uk-u21-l2",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 2,
    "title": "Допустові речення: хоча, дарма що, незважаючи на (Concessives) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 21.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 21-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вчора\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.2.",
            "Неправильне відмінкове узгодження зі словом «Завтра»",
            "Порушення законів евфонії та словотворення для «Ранок»",
            "Стилістично некоректна синтаксична конструкція з «День»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вчора\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.2.",
            "Порушення законів евфонії та словотворення для «Ранок»",
            "Стилістично некоректна синтаксична конструкція з «День»",
            "Неправильне відмінкове узгодження зі словом «Завтра»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вчора\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.2.",
            "Стилістично некоректна синтаксична конструкція з «День»",
            "Неправильне відмінкове узгодження зі словом «Завтра»",
            "Порушення законів евфонії та словотворення для «Ранок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u21-l3": {
    "id": "uk-u21-l3",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 3,
    "title": "Допустові речення: хоча, дарма що, незважаючи на (Concessives) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 21.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 21-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Завтра\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.3.",
            "Неправильне відмінкове узгодження зі словом «Ранок»",
            "Порушення законів евфонії та словотворення для «День»",
            "Стилістично некоректна синтаксична конструкція з «Вечір»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Завтра\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.3.",
            "Порушення законів евфонії та словотворення для «День»",
            "Стилістично некоректна синтаксична конструкція з «Вечір»",
            "Неправильне відмінкове узгодження зі словом «Ранок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Завтра\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.3.",
            "Стилістично некоректна синтаксична конструкція з «Вечір»",
            "Неправильне відмінкове узгодження зі словом «Ранок»",
            "Порушення законів евфонії та словотворення для «День»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u21-l4": {
    "id": "uk-u21-l4",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 4,
    "title": "Допустові речення: хоча, дарма що, незважаючи на (Concessives) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 21.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 21-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ранок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.4.",
            "Неправильне відмінкове узгодження зі словом «День»",
            "Порушення законів евфонії та словотворення для «Вечір»",
            "Стилістично некоректна синтаксична конструкція з «Ніч»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ранок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.4.",
            "Порушення законів евфонії та словотворення для «Вечір»",
            "Стилістично некоректна синтаксична конструкція з «Ніч»",
            "Неправильне відмінкове узгодження зі словом «День»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ранок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.4.",
            "Стилістично некоректна синтаксична конструкція з «Ніч»",
            "Неправильне відмінкове узгодження зі словом «День»",
            "Порушення законів евфонії та словотворення для «Вечір»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u21-l5": {
    "id": "uk-u21-l5",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 5,
    "title": "Допустові речення: хоча, дарма що, незважаючи на (Concessives) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 21.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 21-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"День\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.5.",
            "Неправильне відмінкове узгодження зі словом «Вечір»",
            "Порушення законів евфонії та словотворення для «Ніч»",
            "Стилістично некоректна синтаксична конструкція з «Тиждень»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"День\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.5.",
            "Порушення законів евфонії та словотворення для «Ніч»",
            "Стилістично некоректна синтаксична конструкція з «Тиждень»",
            "Неправильне відмінкове узгодження зі словом «Вечір»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"День\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 21.5.",
            "Стилістично некоректна синтаксична конструкція з «Тиждень»",
            "Неправильне відмінкове узгодження зі словом «Вечір»",
            "Порушення законів евфонії та словотворення для «Ніч»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u22-l1": {
    "id": "uk-u22-l1",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 1,
    "title": "Непряма мова та трансформація часових форм (Reported Speech) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 22.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 22-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вечір\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.1.",
            "Неправильне відмінкове узгодження зі словом «Ніч»",
            "Порушення законів евфонії та словотворення для «Тиждень»",
            "Стилістично некоректна синтаксична конструкція з «Місяць»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вечір\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.1.",
            "Порушення законів евфонії та словотворення для «Тиждень»",
            "Стилістично некоректна синтаксична конструкція з «Місяць»",
            "Неправильне відмінкове узгодження зі словом «Ніч»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вечір\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.1.",
            "Стилістично некоректна синтаксична конструкція з «Місяць»",
            "Неправильне відмінкове узгодження зі словом «Ніч»",
            "Порушення законів евфонії та словотворення для «Тиждень»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u22-l2": {
    "id": "uk-u22-l2",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 2,
    "title": "Непряма мова та трансформація часових форм (Reported Speech) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 22.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 22-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ніч\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.2.",
            "Неправильне відмінкове узгодження зі словом «Тиждень»",
            "Порушення законів евфонії та словотворення для «Місяць»",
            "Стилістично некоректна синтаксична конструкція з «Рік»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ніч\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.2.",
            "Порушення законів евфонії та словотворення для «Місяць»",
            "Стилістично некоректна синтаксична конструкція з «Рік»",
            "Неправильне відмінкове узгодження зі словом «Тиждень»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ніч\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.2.",
            "Стилістично некоректна синтаксична конструкція з «Рік»",
            "Неправильне відмінкове узгодження зі словом «Тиждень»",
            "Порушення законів евфонії та словотворення для «Місяць»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u22-l3": {
    "id": "uk-u22-l3",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 3,
    "title": "Непряма мова та трансформація часових форм (Reported Speech) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 22.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 22-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Тиждень\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.3.",
            "Неправильне відмінкове узгодження зі словом «Місяць»",
            "Порушення законів евфонії та словотворення для «Рік»",
            "Стилістично некоректна синтаксична конструкція з «Червоний»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Тиждень\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.3.",
            "Порушення законів евфонії та словотворення для «Рік»",
            "Стилістично некоректна синтаксична конструкція з «Червоний»",
            "Неправильне відмінкове узгодження зі словом «Місяць»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Тиждень\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.3.",
            "Стилістично некоректна синтаксична конструкція з «Червоний»",
            "Неправильне відмінкове узгодження зі словом «Місяць»",
            "Порушення законів евфонії та словотворення для «Рік»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u22-l4": {
    "id": "uk-u22-l4",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 4,
    "title": "Непряма мова та трансформація часових форм (Reported Speech) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 22.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 22-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Місяць\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.4.",
            "Неправильне відмінкове узгодження зі словом «Рік»",
            "Порушення законів евфонії та словотворення для «Червоний»",
            "Стилістично некоректна синтаксична конструкція з «Синій»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Місяць\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.4.",
            "Порушення законів евфонії та словотворення для «Червоний»",
            "Стилістично некоректна синтаксична конструкція з «Синій»",
            "Неправильне відмінкове узгодження зі словом «Рік»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Місяць\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.4.",
            "Стилістично некоректна синтаксична конструкція з «Синій»",
            "Неправильне відмінкове узгодження зі словом «Рік»",
            "Порушення законів евфонії та словотворення для «Червоний»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u22-l5": {
    "id": "uk-u22-l5",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 5,
    "title": "Непряма мова та трансформація часових форм (Reported Speech) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 22.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 22-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Рік\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.5.",
            "Неправильне відмінкове узгодження зі словом «Червоний»",
            "Порушення законів евфонії та словотворення для «Синій»",
            "Стилістично некоректна синтаксична конструкція з «Жовтий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Рік\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.5.",
            "Порушення законів евфонії та словотворення для «Синій»",
            "Стилістично некоректна синтаксична конструкція з «Жовтий»",
            "Неправильне відмінкове узгодження зі словом «Червоний»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Рік\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 22.5.",
            "Стилістично некоректна синтаксична конструкція з «Жовтий»",
            "Неправильне відмінкове узгодження зі словом «Червоний»",
            "Порушення законів евфонії та словотворення для «Синій»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u23-l1": {
    "id": "uk-u23-l1",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 1,
    "title": "Ділове листування, резюме та діловий етикет (Business) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 23.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 23-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Червоний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.1.",
            "Неправильне відмінкове узгодження зі словом «Синій»",
            "Порушення законів евфонії та словотворення для «Жовтий»",
            "Стилістично некоректна синтаксична конструкція з «Зелений»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Червоний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.1.",
            "Порушення законів евфонії та словотворення для «Жовтий»",
            "Стилістично некоректна синтаксична конструкція з «Зелений»",
            "Неправильне відмінкове узгодження зі словом «Синій»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Червоний\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.1.",
            "Стилістично некоректна синтаксична конструкція з «Зелений»",
            "Неправильне відмінкове узгодження зі словом «Синій»",
            "Порушення законів евфонії та словотворення для «Жовтий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u23-l2": {
    "id": "uk-u23-l2",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 2,
    "title": "Ділове листування, резюме та діловий етикет (Business) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 23.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 23-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Синій\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.2.",
            "Неправильне відмінкове узгодження зі словом «Жовтий»",
            "Порушення законів евфонії та словотворення для «Зелений»",
            "Стилістично некоректна синтаксична конструкція з «Білий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Синій\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.2.",
            "Порушення законів евфонії та словотворення для «Зелений»",
            "Стилістично некоректна синтаксична конструкція з «Білий»",
            "Неправильне відмінкове узгодження зі словом «Жовтий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Синій\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.2.",
            "Стилістично некоректна синтаксична конструкція з «Білий»",
            "Неправильне відмінкове узгодження зі словом «Жовтий»",
            "Порушення законів евфонії та словотворення для «Зелений»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u23-l3": {
    "id": "uk-u23-l3",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 3,
    "title": "Ділове листування, резюме та діловий етикет (Business) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 23.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 23-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Жовтий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.3.",
            "Неправильне відмінкове узгодження зі словом «Зелений»",
            "Порушення законів евфонії та словотворення для «Білий»",
            "Стилістично некоректна синтаксична конструкція з «Чорний»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Жовтий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.3.",
            "Порушення законів евфонії та словотворення для «Білий»",
            "Стилістично некоректна синтаксична конструкція з «Чорний»",
            "Неправильне відмінкове узгодження зі словом «Зелений»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Жовтий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.3.",
            "Стилістично некоректна синтаксична конструкція з «Чорний»",
            "Неправильне відмінкове узгодження зі словом «Зелений»",
            "Порушення законів евфонії та словотворення для «Білий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u23-l4": {
    "id": "uk-u23-l4",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 4,
    "title": "Ділове листування, резюме та діловий етикет (Business) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 23.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 23-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Зелений\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.4.",
            "Неправильне відмінкове узгодження зі словом «Білий»",
            "Порушення законів евфонії та словотворення для «Чорний»",
            "Стилістично некоректна синтаксична конструкція з «Сірий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Зелений\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.4.",
            "Порушення законів евфонії та словотворення для «Чорний»",
            "Стилістично некоректна синтаксична конструкція з «Сірий»",
            "Неправильне відмінкове узгодження зі словом «Білий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Зелений\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.4.",
            "Стилістично некоректна синтаксична конструкція з «Сірий»",
            "Неправильне відмінкове узгодження зі словом «Білий»",
            "Порушення законів евфонії та словотворення для «Чорний»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u23-l5": {
    "id": "uk-u23-l5",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 5,
    "title": "Ділове листування, резюме та діловий етикет (Business) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 23.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 23-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Білий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.5.",
            "Неправильне відмінкове узгодження зі словом «Чорний»",
            "Порушення законів евфонії та словотворення для «Сірий»",
            "Стилістично некоректна синтаксична конструкція з «Коричневий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Білий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.5.",
            "Порушення законів евфонії та словотворення для «Сірий»",
            "Стилістично некоректна синтаксична конструкція з «Коричневий»",
            "Неправильне відмінкове узгодження зі словом «Чорний»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Білий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 23.5.",
            "Стилістично некоректна синтаксична конструкція з «Коричневий»",
            "Неправильне відмінкове узгодження зі словом «Чорний»",
            "Порушення законів евфонії та словотворення для «Сірий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u24-l1": {
    "id": "uk-u24-l1",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 1,
    "title": "Медична термінологія та консультації (Healthcare) (Part 1)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 24.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 24-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Чорний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.1.",
            "Неправильне відмінкове узгодження зі словом «Сірий»",
            "Порушення законів евфонії та словотворення для «Коричневий»",
            "Стилістично некоректна синтаксична конструкція з «Рожевий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Чорний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.1.",
            "Порушення законів евфонії та словотворення для «Коричневий»",
            "Стилістично некоректна синтаксична конструкція з «Рожевий»",
            "Неправильне відмінкове узгодження зі словом «Сірий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Чорний\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.1.",
            "Стилістично некоректна синтаксична конструкція з «Рожевий»",
            "Неправильне відмінкове узгодження зі словом «Сірий»",
            "Порушення законів евфонії та словотворення для «Коричневий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u24-l2": {
    "id": "uk-u24-l2",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 2,
    "title": "Медична термінологія та консультації (Healthcare) (Part 2)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 24.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 24-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Сірий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.2.",
            "Неправильне відмінкове узгодження зі словом «Коричневий»",
            "Порушення законів евфонії та словотворення для «Рожевий»",
            "Стилістично некоректна синтаксична конструкція з «Фіолетовий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Сірий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.2.",
            "Порушення законів евфонії та словотворення для «Рожевий»",
            "Стилістично некоректна синтаксична конструкція з «Фіолетовий»",
            "Неправильне відмінкове узгодження зі словом «Коричневий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Сірий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.2.",
            "Стилістично некоректна синтаксична конструкція з «Фіолетовий»",
            "Неправильне відмінкове узгодження зі словом «Коричневий»",
            "Порушення законів евфонії та словотворення для «Рожевий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u24-l3": {
    "id": "uk-u24-l3",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 3,
    "title": "Медична термінологія та консультації (Healthcare) (Part 3)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 24.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 24-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Коричневий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.3.",
            "Неправильне відмінкове узгодження зі словом «Рожевий»",
            "Порушення законів евфонії та словотворення для «Фіолетовий»",
            "Стилістично некоректна синтаксична конструкція з «Великий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Коричневий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.3.",
            "Порушення законів евфонії та словотворення для «Фіолетовий»",
            "Стилістично некоректна синтаксична конструкція з «Великий»",
            "Неправильне відмінкове узгодження зі словом «Рожевий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Коричневий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.3.",
            "Стилістично некоректна синтаксична конструкція з «Великий»",
            "Неправильне відмінкове узгодження зі словом «Рожевий»",
            "Порушення законів евфонії та словотворення для «Фіолетовий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u24-l4": {
    "id": "uk-u24-l4",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 4,
    "title": "Медична термінологія та консультації (Healthcare) (Part 4)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 24.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 24-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Рожевий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.4.",
            "Неправильне відмінкове узгодження зі словом «Фіолетовий»",
            "Порушення законів евфонії та словотворення для «Великий»",
            "Стилістично некоректна синтаксична конструкція з «Малий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Рожевий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.4.",
            "Порушення законів евфонії та словотворення для «Великий»",
            "Стилістично некоректна синтаксична конструкція з «Малий»",
            "Неправильне відмінкове узгодження зі словом «Фіолетовий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Рожевий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.4.",
            "Стилістично некоректна синтаксична конструкція з «Малий»",
            "Неправильне відмінкове узгодження зі словом «Фіолетовий»",
            "Порушення законів евфонії та словотворення для «Великий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u24-l5": {
    "id": "uk-u24-l5",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 5,
    "title": "Медична термінологія та консультації (Healthcare) (Part 5)",
    "level": "B2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 24.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 24-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Фіолетовий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.5.",
            "Неправильне відмінкове узгодження зі словом «Великий»",
            "Порушення законів евфонії та словотворення для «Малий»",
            "Стилістично некоректна синтаксична конструкція з «Високий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Фіолетовий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.5.",
            "Порушення законів евфонії та словотворення для «Малий»",
            "Стилістично некоректна синтаксична конструкція з «Високий»",
            "Неправильне відмінкове узгодження зі словом «Великий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Фіолетовий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 24.5.",
            "Стилістично некоректна синтаксична конструкція з «Високий»",
            "Неправильне відмінкове узгодження зі словом «Великий»",
            "Порушення законів евфонії та словотворення для «Малий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u25-l1": {
    "id": "uk-u25-l1",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 1,
    "title": "Цивільне та кримінальне право, договори (Legal) (Part 1)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 25.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 25-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Великий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.1.",
            "Неправильне відмінкове узгодження зі словом «Малий»",
            "Порушення законів евфонії та словотворення для «Високий»",
            "Стилістично некоректна синтаксична конструкція з «Низький»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Великий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.1.",
            "Порушення законів евфонії та словотворення для «Високий»",
            "Стилістично некоректна синтаксична конструкція з «Низький»",
            "Неправильне відмінкове узгодження зі словом «Малий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Великий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.1.",
            "Стилістично некоректна синтаксична конструкція з «Низький»",
            "Неправильне відмінкове узгодження зі словом «Малий»",
            "Порушення законів евфонії та словотворення для «Високий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u25-l2": {
    "id": "uk-u25-l2",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 2,
    "title": "Цивільне та кримінальне право, договори (Legal) (Part 2)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 25.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 25-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Малий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.2.",
            "Неправильне відмінкове узгодження зі словом «Високий»",
            "Порушення законів евфонії та словотворення для «Низький»",
            "Стилістично некоректна синтаксична конструкція з «Швидкий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Малий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.2.",
            "Порушення законів евфонії та словотворення для «Низький»",
            "Стилістично некоректна синтаксична конструкція з «Швидкий»",
            "Неправильне відмінкове узгодження зі словом «Високий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Малий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.2.",
            "Стилістично некоректна синтаксична конструкція з «Швидкий»",
            "Неправильне відмінкове узгодження зі словом «Високий»",
            "Порушення законів евфонії та словотворення для «Низький»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u25-l3": {
    "id": "uk-u25-l3",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 3,
    "title": "Цивільне та кримінальне право, договори (Legal) (Part 3)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 25.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 25-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Високий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.3.",
            "Неправильне відмінкове узгодження зі словом «Низький»",
            "Порушення законів евфонії та словотворення для «Швидкий»",
            "Стилістично некоректна синтаксична конструкція з «Повільний»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Високий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.3.",
            "Порушення законів евфонії та словотворення для «Швидкий»",
            "Стилістично некоректна синтаксична конструкція з «Повільний»",
            "Неправильне відмінкове узгодження зі словом «Низький»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Високий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.3.",
            "Стилістично некоректна синтаксична конструкція з «Повільний»",
            "Неправильне відмінкове узгодження зі словом «Низький»",
            "Порушення законів евфонії та словотворення для «Швидкий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u25-l4": {
    "id": "uk-u25-l4",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 4,
    "title": "Цивільне та кримінальне право, договори (Legal) (Part 4)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 25.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 25-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Низький\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.4.",
            "Неправильне відмінкове узгодження зі словом «Швидкий»",
            "Порушення законів евфонії та словотворення для «Повільний»",
            "Стилістично некоректна синтаксична конструкція з «Новий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Низький\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.4.",
            "Порушення законів евфонії та словотворення для «Повільний»",
            "Стилістично некоректна синтаксична конструкція з «Новий»",
            "Неправильне відмінкове узгодження зі словом «Швидкий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Низький\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.4.",
            "Стилістично некоректна синтаксична конструкція з «Новий»",
            "Неправильне відмінкове узгодження зі словом «Швидкий»",
            "Порушення законів евфонії та словотворення для «Повільний»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u25-l5": {
    "id": "uk-u25-l5",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 5,
    "title": "Цивільне та кримінальне право, договори (Legal) (Part 5)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 25.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 25-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Швидкий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.5.",
            "Неправильне відмінкове узгодження зі словом «Повільний»",
            "Порушення законів евфонії та словотворення для «Новий»",
            "Стилістично некоректна синтаксична конструкція з «Старий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Швидкий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.5.",
            "Порушення законів евфонії та словотворення для «Новий»",
            "Стилістично некоректна синтаксична конструкція з «Старий»",
            "Неправильне відмінкове узгодження зі словом «Повільний»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Швидкий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 25.5.",
            "Стилістично некоректна синтаксична конструкція з «Старий»",
            "Неправильне відмінкове узгодження зі словом «Повільний»",
            "Порушення законів евфонії та словотворення для «Новий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u26-l1": {
    "id": "uk-u26-l1",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 1,
    "title": "Банківська справа, інвестиції та макроекономіка (Finance) (Part 1)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 26.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 26-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Повільний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.1.",
            "Неправильне відмінкове узгодження зі словом «Новий»",
            "Порушення законів евфонії та словотворення для «Старий»",
            "Стилістично некоректна синтаксична конструкція з «Гарний»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Повільний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.1.",
            "Порушення законів евфонії та словотворення для «Старий»",
            "Стилістично некоректна синтаксична конструкція з «Гарний»",
            "Неправильне відмінкове узгодження зі словом «Новий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Повільний\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.1.",
            "Стилістично некоректна синтаксична конструкція з «Гарний»",
            "Неправильне відмінкове узгодження зі словом «Новий»",
            "Порушення законів евфонії та словотворення для «Старий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u26-l2": {
    "id": "uk-u26-l2",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 2,
    "title": "Банківська справа, інвестиції та макроекономіка (Finance) (Part 2)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 26.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 26-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Новий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.2.",
            "Неправильне відмінкове узгодження зі словом «Старий»",
            "Порушення законів евфонії та словотворення для «Гарний»",
            "Стилістично некоректна синтаксична конструкція з «Добрий»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Новий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.2.",
            "Порушення законів евфонії та словотворення для «Гарний»",
            "Стилістично некоректна синтаксична конструкція з «Добрий»",
            "Неправильне відмінкове узгодження зі словом «Старий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Новий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.2.",
            "Стилістично некоректна синтаксична конструкція з «Добрий»",
            "Неправильне відмінкове узгодження зі словом «Старий»",
            "Порушення законів евфонії та словотворення для «Гарний»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u26-l3": {
    "id": "uk-u26-l3",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 3,
    "title": "Банківська справа, інвестиції та макроекономіка (Finance) (Part 3)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 26.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 26-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Старий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.3.",
            "Неправильне відмінкове узгодження зі словом «Гарний»",
            "Порушення законів евфонії та словотворення для «Добрий»",
            "Стилістично некоректна синтаксична конструкція з «Розуміти»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Старий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.3.",
            "Порушення законів евфонії та словотворення для «Добрий»",
            "Стилістично некоректна синтаксична конструкція з «Розуміти»",
            "Неправильне відмінкове узгодження зі словом «Гарний»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Старий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.3.",
            "Стилістично некоректна синтаксична конструкція з «Розуміти»",
            "Неправильне відмінкове узгодження зі словом «Гарний»",
            "Порушення законів евфонії та словотворення для «Добрий»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u26-l4": {
    "id": "uk-u26-l4",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 4,
    "title": "Банківська справа, інвестиції та макроекономіка (Finance) (Part 4)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 26.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 26-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Гарний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.4.",
            "Неправильне відмінкове узгодження зі словом «Добрий»",
            "Порушення законів евфонії та словотворення для «Розуміти»",
            "Стилістично некоректна синтаксична конструкція з «Знати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Гарний\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.4.",
            "Порушення законів евфонії та словотворення для «Розуміти»",
            "Стилістично некоректна синтаксична конструкція з «Знати»",
            "Неправильне відмінкове узгодження зі словом «Добрий»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Гарний\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.4.",
            "Стилістично некоректна синтаксична конструкція з «Знати»",
            "Неправильне відмінкове узгодження зі словом «Добрий»",
            "Порушення законів евфонії та словотворення для «Розуміти»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u26-l5": {
    "id": "uk-u26-l5",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 5,
    "title": "Банківська справа, інвестиції та макроекономіка (Finance) (Part 5)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 26.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 26-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Добрий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.5.",
            "Неправильне відмінкове узгодження зі словом «Розуміти»",
            "Порушення законів евфонії та словотворення для «Знати»",
            "Стилістично некоректна синтаксична конструкція з «Думати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Добрий\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.5.",
            "Порушення законів евфонії та словотворення для «Знати»",
            "Стилістично некоректна синтаксична конструкція з «Думати»",
            "Неправильне відмінкове узгодження зі словом «Розуміти»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Добрий\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 26.5.",
            "Стилістично некоректна синтаксична конструкція з «Думати»",
            "Неправильне відмінкове узгодження зі словом «Розуміти»",
            "Порушення законів евфонії та словотворення для «Знати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u27-l1": {
    "id": "uk-u27-l1",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 1,
    "title": "Українська класична література та поетика (Literature) (Part 1)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 27.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 27-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Розуміти\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.1.",
            "Неправильне відмінкове узгодження зі словом «Знати»",
            "Порушення законів евфонії та словотворення для «Думати»",
            "Стилістично некоректна синтаксична конструкція з «Пам'ятати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Розуміти\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.1.",
            "Порушення законів евфонії та словотворення для «Думати»",
            "Стилістично некоректна синтаксична конструкція з «Пам'ятати»",
            "Неправильне відмінкове узгодження зі словом «Знати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Розуміти\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.1.",
            "Стилістично некоректна синтаксична конструкція з «Пам'ятати»",
            "Неправильне відмінкове узгодження зі словом «Знати»",
            "Порушення законів евфонії та словотворення для «Думати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u27-l2": {
    "id": "uk-u27-l2",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 2,
    "title": "Українська класична література та поетика (Literature) (Part 2)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 27.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 27-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Знати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.2.",
            "Неправильне відмінкове узгодження зі словом «Думати»",
            "Порушення законів евфонії та словотворення для «Пам'ятати»",
            "Стилістично некоректна синтаксична конструкція з «Говорити»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Знати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.2.",
            "Порушення законів евфонії та словотворення для «Пам'ятати»",
            "Стилістично некоректна синтаксична конструкція з «Говорити»",
            "Неправильне відмінкове узгодження зі словом «Думати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Знати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.2.",
            "Стилістично некоректна синтаксична конструкція з «Говорити»",
            "Неправильне відмінкове узгодження зі словом «Думати»",
            "Порушення законів евфонії та словотворення для «Пам'ятати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u27-l3": {
    "id": "uk-u27-l3",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 3,
    "title": "Українська класична література та поетика (Literature) (Part 3)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 27.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 27-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Думати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.3.",
            "Неправильне відмінкове узгодження зі словом «Пам'ятати»",
            "Порушення законів евфонії та словотворення для «Говорити»",
            "Стилістично некоректна синтаксична конструкція з «Читати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Думати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.3.",
            "Порушення законів евфонії та словотворення для «Говорити»",
            "Стилістично некоректна синтаксична конструкція з «Читати»",
            "Неправильне відмінкове узгодження зі словом «Пам'ятати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Думати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.3.",
            "Стилістично некоректна синтаксична конструкція з «Читати»",
            "Неправильне відмінкове узгодження зі словом «Пам'ятати»",
            "Порушення законів евфонії та словотворення для «Говорити»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u27-l4": {
    "id": "uk-u27-l4",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 4,
    "title": "Українська класична література та поетика (Literature) (Part 4)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 27.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 27-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Пам'ятати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.4.",
            "Неправильне відмінкове узгодження зі словом «Говорити»",
            "Порушення законів евфонії та словотворення для «Читати»",
            "Стилістично некоректна синтаксична конструкція з «Писати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Пам'ятати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.4.",
            "Порушення законів евфонії та словотворення для «Читати»",
            "Стилістично некоректна синтаксична конструкція з «Писати»",
            "Неправильне відмінкове узгодження зі словом «Говорити»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Пам'ятати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.4.",
            "Стилістично некоректна синтаксична конструкція з «Писати»",
            "Неправильне відмінкове узгодження зі словом «Говорити»",
            "Порушення законів евфонії та словотворення для «Читати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u27-l5": {
    "id": "uk-u27-l5",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 5,
    "title": "Українська класична література та поетика (Literature) (Part 5)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 27.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 27-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Говорити\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.5.",
            "Неправильне відмінкове узгодження зі словом «Читати»",
            "Порушення законів евфонії та словотворення для «Писати»",
            "Стилістично некоректна синтаксична конструкція з «Слухати»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Говорити\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.5.",
            "Порушення законів евфонії та словотворення для «Писати»",
            "Стилістично некоректна синтаксична конструкція з «Слухати»",
            "Неправильне відмінкове узгодження зі словом «Читати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Говорити\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 27.5.",
            "Стилістично некоректна синтаксична конструкція з «Слухати»",
            "Неправильне відмінкове узгодження зі словом «Читати»",
            "Порушення законів евфонії та словотворення для «Писати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u28-l1": {
    "id": "uk-u28-l1",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 1,
    "title": "Екологія, захист довкілля та енергетика (Ecology) (Part 1)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 28.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 28-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Читати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.1.",
            "Неправильне відмінкове узгодження зі словом «Писати»",
            "Порушення законів евфонії та словотворення для «Слухати»",
            "Стилістично некоректна синтаксична конструкція з «Бачити»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Читати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.1.",
            "Порушення законів евфонії та словотворення для «Слухати»",
            "Стилістично некоректна синтаксична конструкція з «Бачити»",
            "Неправильне відмінкове узгодження зі словом «Писати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Читати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.1.",
            "Стилістично некоректна синтаксична конструкція з «Бачити»",
            "Неправильне відмінкове узгодження зі словом «Писати»",
            "Порушення законів евфонії та словотворення для «Слухати»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u28-l2": {
    "id": "uk-u28-l2",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 2,
    "title": "Екологія, захист довкілля та енергетика (Ecology) (Part 2)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 28.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 28-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Писати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.2.",
            "Неправильне відмінкове узгодження зі словом «Слухати»",
            "Порушення законів евфонії та словотворення для «Бачити»",
            "Стилістично некоректна синтаксична конструкція з «Хотіти»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Писати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.2.",
            "Порушення законів евфонії та словотворення для «Бачити»",
            "Стилістично некоректна синтаксична конструкція з «Хотіти»",
            "Неправильне відмінкове узгодження зі словом «Слухати»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Писати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.2.",
            "Стилістично некоректна синтаксична конструкція з «Хотіти»",
            "Неправильне відмінкове узгодження зі словом «Слухати»",
            "Порушення законів евфонії та словотворення для «Бачити»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u28-l3": {
    "id": "uk-u28-l3",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 3,
    "title": "Екологія, захист довкілля та енергетика (Ecology) (Part 3)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 28.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 28-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Слухати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.3.",
            "Неправильне відмінкове узгодження зі словом «Бачити»",
            "Порушення законів евфонії та словотворення для «Хотіти»",
            "Стилістично некоректна синтаксична конструкція з «Школа»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Слухати\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.3.",
            "Порушення законів евфонії та словотворення для «Хотіти»",
            "Стилістично некоректна синтаксична конструкція з «Школа»",
            "Неправильне відмінкове узгодження зі словом «Бачити»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Слухати\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.3.",
            "Стилістично некоректна синтаксична конструкція з «Школа»",
            "Неправильне відмінкове узгодження зі словом «Бачити»",
            "Порушення законів евфонії та словотворення для «Хотіти»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u28-l4": {
    "id": "uk-u28-l4",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 4,
    "title": "Екологія, захист довкілля та енергетика (Ecology) (Part 4)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 28.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 28-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Бачити\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.4.",
            "Неправильне відмінкове узгодження зі словом «Хотіти»",
            "Порушення законів евфонії та словотворення для «Школа»",
            "Стилістично некоректна синтаксична конструкція з «Університет»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Бачити\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.4.",
            "Порушення законів евфонії та словотворення для «Школа»",
            "Стилістично некоректна синтаксична конструкція з «Університет»",
            "Неправильне відмінкове узгодження зі словом «Хотіти»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Бачити\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.4.",
            "Стилістично некоректна синтаксична конструкція з «Університет»",
            "Неправильне відмінкове узгодження зі словом «Хотіти»",
            "Порушення законів евфонії та словотворення для «Школа»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u28-l5": {
    "id": "uk-u28-l5",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 5,
    "title": "Екологія, захист довкілля та енергетика (Ecology) (Part 5)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 28.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 28-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Хотіти\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.5.",
            "Неправильне відмінкове узгодження зі словом «Школа»",
            "Порушення законів евфонії та словотворення для «Університет»",
            "Стилістично некоректна синтаксична конструкція з «Вчитель»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Хотіти\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.5.",
            "Порушення законів евфонії та словотворення для «Університет»",
            "Стилістично некоректна синтаксична конструкція з «Вчитель»",
            "Неправильне відмінкове узгодження зі словом «Школа»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Хотіти\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 28.5.",
            "Стилістично некоректна синтаксична конструкція з «Вчитель»",
            "Неправильне відмінкове узгодження зі словом «Школа»",
            "Порушення законів евфонії та словотворення для «Університет»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u29-l1": {
    "id": "uk-u29-l1",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 1,
    "title": "Парламентаризм та конституційне право (Governance) (Part 1)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 29.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 29-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Школа\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.1.",
            "Неправильне відмінкове узгодження зі словом «Університет»",
            "Порушення законів евфонії та словотворення для «Вчитель»",
            "Стилістично некоректна синтаксична конструкція з «Студент»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Школа\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.1.",
            "Порушення законів евфонії та словотворення для «Вчитель»",
            "Стилістично некоректна синтаксична конструкція з «Студент»",
            "Неправильне відмінкове узгодження зі словом «Університет»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Школа\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.1.",
            "Стилістично некоректна синтаксична конструкція з «Студент»",
            "Неправильне відмінкове узгодження зі словом «Університет»",
            "Порушення законів евфонії та словотворення для «Вчитель»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u29-l2": {
    "id": "uk-u29-l2",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 2,
    "title": "Парламентаризм та конституційне право (Governance) (Part 2)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 29.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 29-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Університет\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.2.",
            "Неправильне відмінкове узгодження зі словом «Вчитель»",
            "Порушення законів евфонії та словотворення для «Студент»",
            "Стилістично некоректна синтаксична конструкція з «Урок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Університет\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.2.",
            "Порушення законів евфонії та словотворення для «Студент»",
            "Стилістично некоректна синтаксична конструкція з «Урок»",
            "Неправильне відмінкове узгодження зі словом «Вчитель»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Університет\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.2.",
            "Стилістично некоректна синтаксична конструкція з «Урок»",
            "Неправильне відмінкове узгодження зі словом «Вчитель»",
            "Порушення законів евфонії та словотворення для «Студент»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u29-l3": {
    "id": "uk-u29-l3",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 3,
    "title": "Парламентаризм та конституційне право (Governance) (Part 3)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 29.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 29-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вчитель\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.3.",
            "Неправильне відмінкове узгодження зі словом «Студент»",
            "Порушення законів евфонії та словотворення для «Урок»",
            "Стилістично некоректна синтаксична конструкція з «Іспит»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вчитель\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.3.",
            "Порушення законів евфонії та словотворення для «Урок»",
            "Стилістично некоректна синтаксична конструкція з «Іспит»",
            "Неправильне відмінкове узгодження зі словом «Студент»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вчитель\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.3.",
            "Стилістично некоректна синтаксична конструкція з «Іспит»",
            "Неправильне відмінкове узгодження зі словом «Студент»",
            "Порушення законів евфонії та словотворення для «Урок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u29-l4": {
    "id": "uk-u29-l4",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 4,
    "title": "Парламентаризм та конституційне право (Governance) (Part 4)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 29.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 29-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Студент\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.4.",
            "Неправильне відмінкове узгодження зі словом «Урок»",
            "Порушення законів евфонії та словотворення для «Іспит»",
            "Стилістично некоректна синтаксична конструкція з «Оцінка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Студент\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.4.",
            "Порушення законів евфонії та словотворення для «Іспит»",
            "Стилістично некоректна синтаксична конструкція з «Оцінка»",
            "Неправильне відмінкове узгодження зі словом «Урок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Студент\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.4.",
            "Стилістично некоректна синтаксична конструкція з «Оцінка»",
            "Неправильне відмінкове узгодження зі словом «Урок»",
            "Порушення законів евфонії та словотворення для «Іспит»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u29-l5": {
    "id": "uk-u29-l5",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 5,
    "title": "Парламентаризм та конституційне право (Governance) (Part 5)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 29.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 29-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Урок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.5.",
            "Неправильне відмінкове узгодження зі словом «Іспит»",
            "Порушення законів евфонії та словотворення для «Оцінка»",
            "Стилістично некоректна синтаксична конструкція з «Диплом»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Урок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.5.",
            "Порушення законів евфонії та словотворення для «Оцінка»",
            "Стилістично некоректна синтаксична конструкція з «Диплом»",
            "Неправильне відмінкове узгодження зі словом «Іспит»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Урок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 29.5.",
            "Стилістично некоректна синтаксична конструкція з «Диплом»",
            "Неправильне відмінкове узгодження зі словом «Іспит»",
            "Порушення законів евфонії та словотворення для «Оцінка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u30-l1": {
    "id": "uk-u30-l1",
    "subject": "ukrainian",
    "unit": 30,
    "lessonNumber": 1,
    "title": "Філософська думка та інтелектуальна історія (Philosophy) (Part 1)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 30.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 30-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Іспит\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.1.",
            "Неправильне відмінкове узгодження зі словом «Оцінка»",
            "Порушення законів евфонії та словотворення для «Диплом»",
            "Стилістично некоректна синтаксична конструкція з «Зошит»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Іспит\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.1.",
            "Порушення законів евфонії та словотворення для «Диплом»",
            "Стилістично некоректна синтаксична конструкція з «Зошит»",
            "Неправильне відмінкове узгодження зі словом «Оцінка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Іспит\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.1.",
            "Стилістично некоректна синтаксична конструкція з «Зошит»",
            "Неправильне відмінкове узгодження зі словом «Оцінка»",
            "Порушення законів евфонії та словотворення для «Диплом»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u30-l2": {
    "id": "uk-u30-l2",
    "subject": "ukrainian",
    "unit": 30,
    "lessonNumber": 2,
    "title": "Філософська думка та інтелектуальна історія (Philosophy) (Part 2)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 30.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 30-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Оцінка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.2.",
            "Неправильне відмінкове узгодження зі словом «Диплом»",
            "Порушення законів евфонії та словотворення для «Зошит»",
            "Стилістично некоректна синтаксична конструкція з «Ручка»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Оцінка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.2.",
            "Порушення законів евфонії та словотворення для «Зошит»",
            "Стилістично некоректна синтаксична конструкція з «Ручка»",
            "Неправильне відмінкове узгодження зі словом «Диплом»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Оцінка\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.2.",
            "Стилістично некоректна синтаксична конструкція з «Ручка»",
            "Неправильне відмінкове узгодження зі словом «Диплом»",
            "Порушення законів евфонії та словотворення для «Зошит»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u30-l3": {
    "id": "uk-u30-l3",
    "subject": "ukrainian",
    "unit": 30,
    "lessonNumber": 3,
    "title": "Філософська думка та інтелектуальна історія (Philosophy) (Part 3)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 30.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 30-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Диплом\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.3.",
            "Неправильне відмінкове узгодження зі словом «Зошит»",
            "Порушення законів евфонії та словотворення для «Ручка»",
            "Стилістично некоректна синтаксична конструкція з «Банк»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Диплом\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.3.",
            "Порушення законів евфонії та словотворення для «Ручка»",
            "Стилістично некоректна синтаксична конструкція з «Банк»",
            "Неправильне відмінкове узгодження зі словом «Зошит»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Диплом\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.3.",
            "Стилістично некоректна синтаксична конструкція з «Банк»",
            "Неправильне відмінкове узгодження зі словом «Зошит»",
            "Порушення законів евфонії та словотворення для «Ручка»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u30-l4": {
    "id": "uk-u30-l4",
    "subject": "ukrainian",
    "unit": 30,
    "lessonNumber": 4,
    "title": "Філософська думка та інтелектуальна історія (Philosophy) (Part 4)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 30.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 30-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Зошит\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.4.",
            "Неправильне відмінкове узгодження зі словом «Ручка»",
            "Порушення законів евфонії та словотворення для «Банк»",
            "Стилістично некоректна синтаксична конструкція з «Вклад»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Зошит\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.4.",
            "Порушення законів евфонії та словотворення для «Банк»",
            "Стилістично некоректна синтаксична конструкція з «Вклад»",
            "Неправильне відмінкове узгодження зі словом «Ручка»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Зошит\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.4.",
            "Стилістично некоректна синтаксична конструкція з «Вклад»",
            "Неправильне відмінкове узгодження зі словом «Ручка»",
            "Порушення законів евфонії та словотворення для «Банк»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u30-l5": {
    "id": "uk-u30-l5",
    "subject": "ukrainian",
    "unit": 30,
    "lessonNumber": 5,
    "title": "Філософська думка та інтелектуальна історія (Philosophy) (Part 5)",
    "level": "C1",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 30.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 30-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Ручка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.5.",
            "Неправильне відмінкове узгодження зі словом «Банк»",
            "Порушення законів евфонії та словотворення для «Вклад»",
            "Стилістично некоректна синтаксична конструкція з «Кредит»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Ручка\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.5.",
            "Порушення законів евфонії та словотворення для «Вклад»",
            "Стилістично некоректна синтаксична конструкція з «Кредит»",
            "Неправильне відмінкове узгодження зі словом «Банк»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Ручка\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 30.5.",
            "Стилістично некоректна синтаксична конструкція з «Кредит»",
            "Неправильне відмінкове узгодження зі словом «Банк»",
            "Порушення законів евфонії та словотворення для «Вклад»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u31-l1": {
    "id": "uk-u31-l1",
    "subject": "ukrainian",
    "unit": 31,
    "lessonNumber": 1,
    "title": "Академічний дискурс, наукова термінологія (Academic Research) (Part 1)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 31.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 31-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Банк\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.1.",
            "Неправильне відмінкове узгодження зі словом «Вклад»",
            "Порушення законів евфонії та словотворення для «Кредит»",
            "Стилістично некоректна синтаксична конструкція з «Відсоток»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Банк\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.1.",
            "Порушення законів евфонії та словотворення для «Кредит»",
            "Стилістично некоректна синтаксична конструкція з «Відсоток»",
            "Неправильне відмінкове узгодження зі словом «Вклад»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Банк\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.1.",
            "Стилістично некоректна синтаксична конструкція з «Відсоток»",
            "Неправильне відмінкове узгодження зі словом «Вклад»",
            "Порушення законів евфонії та словотворення для «Кредит»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u31-l2": {
    "id": "uk-u31-l2",
    "subject": "ukrainian",
    "unit": 31,
    "lessonNumber": 2,
    "title": "Академічний дискурс, наукова термінологія (Academic Research) (Part 2)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 31.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 31-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вклад\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.2.",
            "Неправильне відмінкове узгодження зі словом «Кредит»",
            "Порушення законів евфонії та словотворення для «Відсоток»",
            "Стилістично некоректна синтаксична конструкція з «Податок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вклад\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.2.",
            "Порушення законів евфонії та словотворення для «Відсоток»",
            "Стилістично некоректна синтаксична конструкція з «Податок»",
            "Неправильне відмінкове узгодження зі словом «Кредит»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вклад\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.2.",
            "Стилістично некоректна синтаксична конструкція з «Податок»",
            "Неправильне відмінкове узгодження зі словом «Кредит»",
            "Порушення законів евфонії та словотворення для «Відсоток»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u31-l3": {
    "id": "uk-u31-l3",
    "subject": "ukrainian",
    "unit": 31,
    "lessonNumber": 3,
    "title": "Академічний дискурс, наукова термінологія (Academic Research) (Part 3)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 31.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 31-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Кредит\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.3.",
            "Неправильне відмінкове узгодження зі словом «Відсоток»",
            "Порушення законів евфонії та словотворення для «Податок»",
            "Стилістично некоректна синтаксична конструкція з «Бізнес»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Кредит\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.3.",
            "Порушення законів евфонії та словотворення для «Податок»",
            "Стилістично некоректна синтаксична конструкція з «Бізнес»",
            "Неправильне відмінкове узгодження зі словом «Відсоток»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Кредит\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.3.",
            "Стилістично некоректна синтаксична конструкція з «Бізнес»",
            "Неправильне відмінкове узгодження зі словом «Відсоток»",
            "Порушення законів евфонії та словотворення для «Податок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u31-l4": {
    "id": "uk-u31-l4",
    "subject": "ukrainian",
    "unit": 31,
    "lessonNumber": 4,
    "title": "Академічний дискурс, наукова термінологія (Academic Research) (Part 4)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 31.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 31-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Відсоток\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.4.",
            "Неправильне відмінкове узгодження зі словом «Податок»",
            "Порушення законів евфонії та словотворення для «Бізнес»",
            "Стилістично некоректна синтаксична конструкція з «Договір»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Відсоток\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.4.",
            "Порушення законів евфонії та словотворення для «Бізнес»",
            "Стилістично некоректна синтаксична конструкція з «Договір»",
            "Неправильне відмінкове узгодження зі словом «Податок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Відсоток\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.4.",
            "Стилістично некоректна синтаксична конструкція з «Договір»",
            "Неправильне відмінкове узгодження зі словом «Податок»",
            "Порушення законів евфонії та словотворення для «Бізнес»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u31-l5": {
    "id": "uk-u31-l5",
    "subject": "ukrainian",
    "unit": 31,
    "lessonNumber": 5,
    "title": "Академічний дискурс, наукова термінологія (Academic Research) (Part 5)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 31.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 31-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Податок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.5.",
            "Неправильне відмінкове узгодження зі словом «Бізнес»",
            "Порушення законів евфонії та словотворення для «Договір»",
            "Стилістично некоректна синтаксична конструкція з «Підпис»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Податок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.5.",
            "Порушення законів евфонії та словотворення для «Договір»",
            "Стилістично некоректна синтаксична конструкція з «Підпис»",
            "Неправильне відмінкове узгодження зі словом «Бізнес»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Податок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 31.5.",
            "Стилістично некоректна синтаксична конструкція з «Підпис»",
            "Неправильне відмінкове узгодження зі словом «Бізнес»",
            "Порушення законів евфонії та словотворення для «Договір»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u32-l1": {
    "id": "uk-u32-l1",
    "subject": "ukrainian",
    "unit": 32,
    "lessonNumber": 1,
    "title": "Міжнародна дипломатія та багатосторонні договори (Diplomacy) (Part 1)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 32.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 32-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Бізнес\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.1.",
            "Неправильне відмінкове узгодження зі словом «Договір»",
            "Порушення законів евфонії та словотворення для «Підпис»",
            "Стилістично некоректна синтаксична конструкція з «Документ»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Бізнес\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.1.",
            "Порушення законів евфонії та словотворення для «Підпис»",
            "Стилістично некоректна синтаксична конструкція з «Документ»",
            "Неправильне відмінкове узгодження зі словом «Договір»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Бізнес\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.1.",
            "Стилістично некоректна синтаксична конструкція з «Документ»",
            "Неправильне відмінкове узгодження зі словом «Договір»",
            "Порушення законів евфонії та словотворення для «Підпис»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u32-l2": {
    "id": "uk-u32-l2",
    "subject": "ukrainian",
    "unit": 32,
    "lessonNumber": 2,
    "title": "Міжнародна дипломатія та багатосторонні договори (Diplomacy) (Part 2)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 32.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 32-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Договір\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.2.",
            "Неправильне відмінкове узгодження зі словом «Підпис»",
            "Порушення законів евфонії та словотворення для «Документ»",
            "Стилістично некоректна синтаксична конструкція з «Закон»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Договір\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.2.",
            "Порушення законів евфонії та словотворення для «Документ»",
            "Стилістично некоректна синтаксична конструкція з «Закон»",
            "Неправильне відмінкове узгодження зі словом «Підпис»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Договір\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.2.",
            "Стилістично некоректна синтаксична конструкція з «Закон»",
            "Неправильне відмінкове узгодження зі словом «Підпис»",
            "Порушення законів евфонії та словотворення для «Документ»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u32-l3": {
    "id": "uk-u32-l3",
    "subject": "ukrainian",
    "unit": 32,
    "lessonNumber": 3,
    "title": "Міжнародна дипломатія та багатосторонні договори (Diplomacy) (Part 3)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 32.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 32-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Підпис\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.3.",
            "Неправильне відмінкове узгодження зі словом «Документ»",
            "Порушення законів евфонії та словотворення для «Закон»",
            "Стилістично некоректна синтаксична конструкція з «Суд»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Підпис\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.3.",
            "Порушення законів евфонії та словотворення для «Закон»",
            "Стилістично некоректна синтаксична конструкція з «Суд»",
            "Неправильне відмінкове узгодження зі словом «Документ»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Підпис\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.3.",
            "Стилістично некоректна синтаксична конструкція з «Суд»",
            "Неправильне відмінкове узгодження зі словом «Документ»",
            "Порушення законів евфонії та словотворення для «Закон»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u32-l4": {
    "id": "uk-u32-l4",
    "subject": "ukrainian",
    "unit": 32,
    "lessonNumber": 4,
    "title": "Міжнародна дипломатія та багатосторонні договори (Diplomacy) (Part 4)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 32.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 32-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Документ\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.4.",
            "Неправильне відмінкове узгодження зі словом «Закон»",
            "Порушення законів евфонії та словотворення для «Суд»",
            "Стилістично некоректна синтаксична конструкція з «Суддя»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Документ\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.4.",
            "Порушення законів евфонії та словотворення для «Суд»",
            "Стилістично некоректна синтаксична конструкція з «Суддя»",
            "Неправильне відмінкове узгодження зі словом «Закон»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Документ\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.4.",
            "Стилістично некоректна синтаксична конструкція з «Суддя»",
            "Неправильне відмінкове узгодження зі словом «Закон»",
            "Порушення законів евфонії та словотворення для «Суд»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u32-l5": {
    "id": "uk-u32-l5",
    "subject": "ukrainian",
    "unit": 32,
    "lessonNumber": 5,
    "title": "Міжнародна дипломатія та багатосторонні договори (Diplomacy) (Part 5)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 32.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 32-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Закон\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.5.",
            "Неправильне відмінкове узгодження зі словом «Суд»",
            "Порушення законів евфонії та словотворення для «Суддя»",
            "Стилістично некоректна синтаксична конструкція з «Адвокат»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Закон\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.5.",
            "Порушення законів евфонії та словотворення для «Суддя»",
            "Стилістично некоректна синтаксична конструкція з «Адвокат»",
            "Неправильне відмінкове узгодження зі словом «Суд»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Закон\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 32.5.",
            "Стилістично некоректна синтаксична конструкція з «Адвокат»",
            "Неправильне відмінкове узгодження зі словом «Суд»",
            "Порушення законів евфонії та словотворення для «Суддя»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u33-l1": {
    "id": "uk-u33-l1",
    "subject": "ukrainian",
    "unit": 33,
    "lessonNumber": 1,
    "title": "Високий публіцистичний та ораторський стиль (Advanced Rhetoric) (Part 1)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 33.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 33-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Суд\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.1.",
            "Неправильне відмінкове узгодження зі словом «Суддя»",
            "Порушення законів евфонії та словотворення для «Адвокат»",
            "Стилістично некоректна синтаксична конструкція з «Право»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Суд\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.1.",
            "Порушення законів евфонії та словотворення для «Адвокат»",
            "Стилістично некоректна синтаксична конструкція з «Право»",
            "Неправильне відмінкове узгодження зі словом «Суддя»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Суд\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.1.",
            "Стилістично некоректна синтаксична конструкція з «Право»",
            "Неправильне відмінкове узгодження зі словом «Суддя»",
            "Порушення законів евфонії та словотворення для «Адвокат»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u33-l2": {
    "id": "uk-u33-l2",
    "subject": "ukrainian",
    "unit": 33,
    "lessonNumber": 2,
    "title": "Високий публіцистичний та ораторський стиль (Advanced Rhetoric) (Part 2)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 33.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 33-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Суддя\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.2.",
            "Неправильне відмінкове узгодження зі словом «Адвокат»",
            "Порушення законів евфонії та словотворення для «Право»",
            "Стилістично некоректна синтаксична конструкція з «Справедливість»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Суддя\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.2.",
            "Порушення законів евфонії та словотворення для «Право»",
            "Стилістично некоректна синтаксична конструкція з «Справедливість»",
            "Неправильне відмінкове узгодження зі словом «Адвокат»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Суддя\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.2.",
            "Стилістично некоректна синтаксична конструкція з «Справедливість»",
            "Неправильне відмінкове узгодження зі словом «Адвокат»",
            "Порушення законів евфонії та словотворення для «Право»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u33-l3": {
    "id": "uk-u33-l3",
    "subject": "ukrainian",
    "unit": 33,
    "lessonNumber": 3,
    "title": "Високий публіцистичний та ораторський стиль (Advanced Rhetoric) (Part 3)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 33.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 33-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Адвокат\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.3.",
            "Неправильне відмінкове узгодження зі словом «Право»",
            "Порушення законів евфонії та словотворення для «Справедливість»",
            "Стилістично некоректна синтаксична конструкція з «Свідок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Адвокат\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.3.",
            "Порушення законів евфонії та словотворення для «Справедливість»",
            "Стилістично некоректна синтаксична конструкція з «Свідок»",
            "Неправильне відмінкове узгодження зі словом «Право»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Адвокат\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.3.",
            "Стилістично некоректна синтаксична конструкція з «Свідок»",
            "Неправильне відмінкове узгодження зі словом «Право»",
            "Порушення законів евфонії та словотворення для «Справедливість»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u33-l4": {
    "id": "uk-u33-l4",
    "subject": "ukrainian",
    "unit": 33,
    "lessonNumber": 4,
    "title": "Високий публіцистичний та ораторський стиль (Advanced Rhetoric) (Part 4)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 33.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 33-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Право\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.4.",
            "Неправильне відмінкове узгодження зі словом «Справедливість»",
            "Порушення законів евфонії та словотворення для «Свідок»",
            "Стилістично некоректна синтаксична конструкція з «Вирок»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Право\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.4.",
            "Порушення законів евфонії та словотворення для «Свідок»",
            "Стилістично некоректна синтаксична конструкція з «Вирок»",
            "Неправильне відмінкове узгодження зі словом «Справедливість»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Право\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.4.",
            "Стилістично некоректна синтаксична конструкція з «Вирок»",
            "Неправильне відмінкове узгодження зі словом «Справедливість»",
            "Порушення законів евфонії та словотворення для «Свідок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u33-l5": {
    "id": "uk-u33-l5",
    "subject": "ukrainian",
    "unit": 33,
    "lessonNumber": 5,
    "title": "Високий публіцистичний та ораторський стиль (Advanced Rhetoric) (Part 5)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 33.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 33-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Справедливість\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.5.",
            "Неправильне відмінкове узгодження зі словом «Свідок»",
            "Порушення законів евфонії та словотворення для «Вирок»",
            "Стилістично некоректна синтаксична конструкція з «Конституція»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Справедливість\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.5.",
            "Порушення законів евфонії та словотворення для «Вирок»",
            "Стилістично некоректна синтаксична конструкція з «Конституція»",
            "Неправильне відмінкове узгодження зі словом «Свідок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Справедливість\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 33.5.",
            "Стилістично некоректна синтаксична конструкція з «Конституція»",
            "Неправильне відмінкове узгодження зі словом «Свідок»",
            "Порушення законів евфонії та словотворення для «Вирок»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u34-l1": {
    "id": "uk-u34-l1",
    "subject": "ukrainian",
    "unit": 34,
    "lessonNumber": 1,
    "title": "Державні саміти та міжнародне право (C2 Capstone Statecraft) (Part 1)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 34.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.1.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 34-1).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Свідок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.1.",
            "Неправильне відмінкове узгодження зі словом «Вирок»",
            "Порушення законів евфонії та словотворення для «Конституція»",
            "Стилістично некоректна синтаксична конструкція з «Держава»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Свідок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.1.",
            "Порушення законів евфонії та словотворення для «Конституція»",
            "Стилістично некоректна синтаксична конструкція з «Держава»",
            "Неправильне відмінкове узгодження зі словом «Вирок»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Свідок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.1.",
            "Стилістично некоректна синтаксична конструкція з «Держава»",
            "Неправильне відмінкове узгодження зі словом «Вирок»",
            "Порушення законів евфонії та словотворення для «Конституція»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u34-l2": {
    "id": "uk-u34-l2",
    "subject": "ukrainian",
    "unit": 34,
    "lessonNumber": 2,
    "title": "Державні саміти та міжнародне право (C2 Capstone Statecraft) (Part 2)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 34.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.2.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 34-2).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Вирок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.2.",
            "Неправильне відмінкове узгодження зі словом «Конституція»",
            "Порушення законів евфонії та словотворення для «Держава»",
            "Стилістично некоректна синтаксична конструкція з «Свобода»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Вирок\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.2.",
            "Порушення законів евфонії та словотворення для «Держава»",
            "Стилістично некоректна синтаксична конструкція з «Свобода»",
            "Неправильне відмінкове узгодження зі словом «Конституція»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Вирок\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.2.",
            "Стилістично некоректна синтаксична конструкція з «Свобода»",
            "Неправильне відмінкове узгодження зі словом «Конституція»",
            "Порушення законів евфонії та словотворення для «Держава»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u34-l3": {
    "id": "uk-u34-l3",
    "subject": "ukrainian",
    "unit": 34,
    "lessonNumber": 3,
    "title": "Державні саміти та міжнародне право (C2 Capstone Statecraft) (Part 3)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 34.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.3.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 34-3).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Конституція\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.3.",
            "Неправильне відмінкове узгодження зі словом «Держава»",
            "Порушення законів евфонії та словотворення для «Свобода»",
            "Стилістично некоректна синтаксична конструкція з «Привіт»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Конституція\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.3.",
            "Порушення законів евфонії та словотворення для «Свобода»",
            "Стилістично некоректна синтаксична конструкція з «Привіт»",
            "Неправильне відмінкове узгодження зі словом «Держава»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Конституція\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.3.",
            "Стилістично некоректна синтаксична конструкція з «Привіт»",
            "Неправильне відмінкове узгодження зі словом «Держава»",
            "Порушення законів евфонії та словотворення для «Свобода»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u34-l4": {
    "id": "uk-u34-l4",
    "subject": "ukrainian",
    "unit": 34,
    "lessonNumber": 4,
    "title": "Державні саміти та міжнародне право (C2 Capstone Statecraft) (Part 4)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 34.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.4.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 34-4).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Держава\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.4.",
            "Неправильне відмінкове узгодження зі словом «Свобода»",
            "Порушення законів евфонії та словотворення для «Привіт»",
            "Стилістично некоректна синтаксична конструкція з «Добрий день»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Держава\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.4.",
            "Порушення законів евфонії та словотворення для «Привіт»",
            "Стилістично некоректна синтаксична конструкція з «Добрий день»",
            "Неправильне відмінкове узгодження зі словом «Свобода»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Держава\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.4.",
            "Стилістично некоректна синтаксична конструкція з «Добрий день»",
            "Неправильне відмінкове узгодження зі словом «Свобода»",
            "Порушення законів евфонії та словотворення для «Привіт»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "uk-u34-l5": {
    "id": "uk-u34-l5",
    "subject": "ukrainian",
    "unit": 34,
    "lessonNumber": 5,
    "title": "Державні саміти та міжнародне право (C2 Capstone Statecraft) (Part 5)",
    "level": "C2",
    "objective": "Master Ukrainian grammar and syntax for Граматична система та стилістика (Тема 34.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.5.",
          "reading": "[mɪ wɪwˈtʃɑjɛmɔ ɦrɐmɐˈtɪtʃnʲi ˈnɔrmɪ] (my vyv-CHAH-ye-mo)",
          "translation": "We study the grammatical norms and rules of Ukrainian speech."
        },
        {
          "target": "Зверніть увагу на правильну інтонацію та наголос у цьому прикладі (Урок 34-5).",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu nɑ ˈprɑwɪlʲnu intɔˈnɑtsʲiju] (zver-NEET oo-VAH-hoo)",
          "translation": "Pay attention to correct intonation and stress in this example."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"Свобода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.5.",
            "Неправильне відмінкове узгодження зі словом «Привіт»",
            "Порушення законів евфонії та словотворення для «Добрий день»",
            "Стилістично некоректна синтаксична конструкція з «Дякую»"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"Свобода\":",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.5.",
            "Порушення законів евфонії та словотворення для «Добрий день»",
            "Стилістично некоректна синтаксична конструкція з «Дякую»",
            "Неправильне відмінкове узгодження зі словом «Привіт»"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"Свобода\": Which sentence is completely correct?",
          "options": [
            "Ми вивчаємо граматичні норми та правила українського мовлення на уроці 34.5.",
            "Стилістично некоректна синтаксична конструкція з «Дякую»",
            "Неправильне відмінкове узгодження зі словом «Привіт»",
            "Порушення законів евфонії та словотворення для «Добрий день»"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  }
};
  var CURRICULUM = {
    subject: 'ukrainian',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['ukrainian'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
