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
    "title": "Українська абетка, унікальні літери (І, Ї, Є, Ґ) та базові вітання (Alphabet & Greetings)",
    "level": "A1",
    "objective": "Опанувати 33 літери української абетки, вимову унікальних фонем (і, ї, є, ґ проти г) та базові мовленнєві формули вітання (Доброго ранку, Добрий день, Привіт).",
    "presentation": {
      "explanation": "Українська абетка побудована на основі кирилиці та налічує 33 літери. Вона має особливі літери, які вирізняють її з-поміж інших слов'янських мов:\n\n1. Унікальні голосні та йотовані:\n- «І і» [i] — чистий передній голосний (наприклад, «ліс», «стіл»).\n- «Ї ї» [ji] — завжди позначає два звуки [й + і] (наприклад, «Київ», «їжа»).\n- «Є є» [jɛ] — позначає [й + е] на початку слова або після голосного, та м'якість попереднього приголосного (наприклад, «Європа», «моє»).\n- «И и» [ɪ] — відкритий ненапружений голосний середньо-переднього ряду (наприклад, «син», «вода»).\n\n2. Приголосні «Г г» та «Ґ ґ»:\n- «Г г» [ɦ] — гортанний щілинний дзвінкий звук (наприклад, «голова», «гарний»).\n- «Ґ ґ» [ɡ] — задньоязиковий проривний дзвінкий звук (наприклад, «ґанок», «ґрунт»).\n\n3. Базові вітання:\n- «Доброго ранку!» — традиційно вживається у формі родового відмінка.\n- «Добрий день!» / «Добрий вечір!» — вживаються у формі називного відмінка.\n- «Привіт!» — неформальне вітання серед друзів та молоді.",
      "examples": [
        {
          "target": "Доброго ранку! Вітаю вас у нашому рідному місті Києві.",
          "reading": "[ˈdɔbrɔɦɔ ˈrɑŋku! wʲiˈtɑju wɑs u ˈnɑʃɔmu ˈrʲidnɔmu ˈmʲisʲtʲi ˈkɪjɛwʲi] (DOH-broh-hoh RAHN-koo! Vee-TAH-yoo vahs oo NAH-shoh-moo REED-noh-moo MEES-tee KIH-yeh-vee)",
          "translation": "Good morning! Welcome to our native city of Kyiv."
        },
        {
          "target": "Добрий день, шановні колеги та дорогі друзі!",
          "reading": "[ˈdɔbrɪj dɛnʲ, ʃɐˈnɔwnʲi kɔˈlɛɦɪ tɑ dɔrɔˈɦi ˈdruzʲi] (DOH-bryi dehn, shah-NOV-nee koh-LEH-hy tah doh-roh-HEE DROO-zee)",
          "translation": "Good day, esteemed colleagues and dear friends!"
        },
        {
          "target": "Привіт, Андрію! Як твої справи та як настрій?",
          "reading": "[prɪˈwʲit, ɐnˈdrʲiju! jɑk twɔˈji ˈsprɑwɪ tɑ jɑk ˈnɑstrʲij] (Pry-VEET, Ahn-DREE-yoo! Yahk tvoh-YEE SPRAH-vy tah yahk NAHS-tree-ee)",
          "translation": "Hi, Andriy! How are things and how is your mood?"
        }
      ],
      "mnemonics": [
        "«Ї» завжди подвійна [йі], як дві крапочки над буквою; «І» тонка й дзвінка, як стеблинка колоска!"
      ],
      "culturalNotes": [
        "В українській мові традиційні формули вітання мають чітке відмінкове розмежування: вранці заведено бажати «Доброго ранку!» (родовий відмінок побажання), а вдень та ввечері — констатувати «Добрий день!» та «Добрий вечір!» (називний відмінок)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть граматично правильну нормативну форму ранкового привітання в українській мові:",
          "options": [
            "Доброго ранку! (Good morning / Rohdovy vidminok)",
            "Добрий ранок!",
            "Доброї доби!",
            "Привітного дня!"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною традиційною формою ранкового вітання в українській мові є саме родовий відмінок «Доброго ранку!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка українська літера завжди позначає сполучення двох звуків [й + і] на письмі?",
          "options": [
            "Літера «Ї ї» (Letter Yi)",
            "Літера «І і»",
            "Літера «И и»",
            "Літера «Е е»"
          ],
          "answerIndex": 0,
          "explanation": "Літера «Ї» в українській мові завжди передає два звуки: м'який приголосний [й] та голосний [і]."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому правильно використано літеру «Ґ» (проривний дзвінкий звук [g]):",
          "options": [
            "На ґанку будинку сидить гарний птах.",
            "На ганку будинку сидить ґарний птах.",
            "На ханку будинку сидить карний птах.",
            "На занку будинку сидить варний птах."
          ],
          "answerIndex": 0,
          "explanation": "Слово «ґанок» пишеться з літерою «ґ» (проривний [ɡ]), а прикметник «гарний» — з літерою «г» (гортанний [ɦ])."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u1-l2": {
    "id": "uk-u1-l2",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 2,
    "title": "Ввічливі форми знайомства, особові займенники та представлення (Introductions & Pronouns)",
    "level": "A1",
    "objective": "Опанувати особові займенники (я, ти, він, вона, ми, ви, вони), структури знайомства (Мене звати..., Як вас звати?) та форми чемного звертання (пане, пані).",
    "presentation": {
      "explanation": "Ввічливе знайомство та коректне звертання є основою українського мовленнєвого етикету:\n\n1. Особові займенники (Personal Pronouns):\n- Я (I), Ти (you - неформальне однини)\n- Він (he), Вона (she), Воно (it)\n- Ми (we), Ви (you - множина або ввічлива форма до однієї особи)\n- Вони (they)\n\n2. Моделі знайомства:\n- «Мене звати [Ім'я]» — конструкція зі знахідним відмінком (дослівно: кличуть мене).\n- «Як вас звати?» (офіційно) / «Як тебе звати?» (дружньо).\n- «Моє ім'я — [Ім'я]», «Моє прізвище — [Прізвище]».\n\n3. Етикетні відповіді:\n- «Дуже приємно!» / «Приємно познайомитися!» (Pleased to meet you).\n- «Взаємно!» (Likewise).\n\n4. Форми ввічливого звертання у кличному відмінку:\n- «Пане Олександре!» (до чоловіка), «Пані Оксано!» (до жінки).",
      "examples": [
        {
          "target": "Доброго дня! Мене звати Богдан, а як вас звати?",
          "reading": "[ˈdɔbrɔɦɔ dnʲɑ! mɛˈnɛ ˈzwɑtɪ bɔɦˈdɑn, ɑ jɑk wɑs ˈzwɑtɪ] (DOH-broh-hoh DNYAH! Meh-NEH ZVAH-ty Boh-DAHN, ah yahk vahs ZVAH-ty?)",
          "translation": "Good day! My name is Bohdan, and what is your name?"
        },
        {
          "target": "Дуже приємно познайомитися з вами, пане професоре.",
          "reading": "[ˈduʒɛ prɪˈjɛmnɔ pɔznɐˈjɔmɪtɪsʲɑ z ˈwɑmɪ, ˈpɑnɛ prɔˈfɛsɔrɛ] (DOO-zheh pry-YEM-noh poz-nah-YOH-my-ty-syah z VAH-my, PAH-neh proh-FEH-soh-reh)",
          "translation": "Very pleased to meet you, Professor."
        },
        {
          "target": "Вона — студентка університету, а він — викладач української мови.",
          "reading": "[wɔˈnɑ — stuˈdɛntkɐ unʲiwɛrsɪˈtɛtu, ɑ wʲin — wɪklɐˈdɑtʃ ukrɐˈjinʲsʲkɔjɪ ˈmɔwɪ] (Voh-NAH — stoo-DENT-kah oo-nee-ver-sy-TEH-too, ah VEEN — vy-klah-DAHCH oo-krah-YIN-s'koh-yee MOH-vy)",
          "translation": "She is a university student, and he is a lecturer of the Ukrainian language."
        }
      ],
      "mnemonics": [
        "«Мене звати» — так звучить моє ім'я; «Пане» й «Пані» у пошані вимовляю я!"
      ],
      "culturalNotes": [
        "В українській традиції звертання «пан» (пане) та «пані» є питомими, шляхетними та загальноприйнятими формами вираження поваги як в офіційному спілкуванні, так і в повсякденному побуті."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як ввічливо запитати ім'я у незнайомої дорослої людини або викладача українською мовою?",
          "options": [
            "Як вас звати? (What is your name? - Formal)",
            "Хто ти такий?",
            "Скажи ім'я негайно!",
            "Як тебе кличуть, гей?"
          ],
          "answerIndex": 0,
          "explanation": "«Як вас звати?» — це нормативна та чемна формула запитання про ім'я співрозмовника."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму звертання до пана Михайла у кличному відмінку:",
          "options": [
            "Пане Михайле! (Vocative address)",
            "Пан Михайло!",
            "Пана Михайла!",
            "Пану Михайлу!"
          ],
          "answerIndex": 0,
          "explanation": "При безпосередньому звертанні в українській мові обов'язково вживається кличний відмінок: «Пане Михайле!»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з правильною граматичною структурою представлення свого імені:",
          "options": [
            "Мене звати Катерина, я з міста Львова.",
            "Мій звати Катерина, я з міста Львова.",
            "Мною звати Катерина, я з міста Львова.",
            "Мені звати Катерина, я з міста Львова."
          ],
          "answerIndex": 0,
          "explanation": "Правильна стала формула представлення вимагає займенника у знахідному відмінку: «Мене звати...»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u1-l3": {
    "id": "uk-u1-l3",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 3,
    "title": "Етикет подяки, вибачення та ввічливих прохань: «Дякую», «Будь ласка», «Перепрошую» (Politeness Etiquette)",
    "level": "A1",
    "objective": "Опанувати мовні кліше висловлення вдячності (Дякую, Щиро дякую), відповіді на подяку (Будь ласка, Прошу), вибачення (Вибачте, Перепрошую) та реагування на вибачення.",
    "presentation": {
      "explanation": "Культура ввічливості в українській мові має багатий арсенал виразних формул етикету:\n\n1. Висловлення подяки (Expressing Gratitude):\n- «Дякую!» — універсальне та найуживаніше слово подяки.\n- «Щиро дякую!» / «Дуже дякую!» — підсилена, сердечна подяка.\n- «Красно дякую!» — вишуканий традиційний вираз подяки.\n- «Дякую за допомогу / за пораду / за увагу» (із прийменником «за» + знахідний відмінок).\n\n2. Відповідь на подяку (Responding to Gratitude):\n- «Будь ласка!» (You're welcome / Please).\n- «Прошу!» / «Нема за що!» (Not at all / Don't mention it).\n\n3. Вибачення та привернення уваги (Apologizing & Excusing):\n- «Вибачте!» / «Пробачте!» — офіційне прохання про вибачення.\n- «Перепрошую!» — вишукане звертання для привернення уваги або легкого вибачення.\n- Відповідь на вибачення: «Нічого страшного!» / «Все гаразд!» (That's all right).",
      "examples": [
        {
          "target": "Щиро дякую вам за чудову екскурсію та теплий прийом!",
          "reading": "[ˈʃtʃirɔ ˈdʲɑkuju wɑm zɑ tʃuˈdɔwu ɛksˈkursʲiju tɑ ˈtɛplɪj prɪˈjɔm] (SHCHEE-roh DYAH-koo-yoo vahm zah choo-DOH-voo eks-KOOR-see-yoo tah TEP-lyi pry-YOM!)",
          "translation": "Thank you sincerely for the wonderful excursion and warm reception!"
        },
        {
          "target": "Перепрошую, чи не підкажете ви, де знаходиться центральна бібліотека?",
          "reading": "[pɛrɛˈprɔʃuju, tʃɪ nɛ pidˈkɑʒɛtɛ wɪ, dɛ znɐˈxɔdɪtsʲɑ tsɛnˈtrɑlʲnɐ bʲiblʲiɔˈtɛkɐ] (peh-reh-PROH-shoo-yoo, chy neh peed-KAH-zheh-teh vy, deh znah-HOH-dyt-syah tsen-TRAHL-nah beeb-lee-oh-TEH-kah?)",
          "translation": "Excuse me, could you please tell me where the central library is located?"
        },
        {
          "target": "Вибачте за спізнення! — Нічого страшного, проходьте, будь ласка.",
          "reading": "[ˈwɪbɐtʃtɛ zɑ ˈspʲiznɛnʲːɑ! — ˈnʲitʃɔɦɔ ˈstrɑʃnɔɦɔ, prɔˈxɔdʲtɛ, budʲ ˈlɑskɐ] (VY-bahch-teh zah SPEEZ-nen-nyah! — NEE-choh-hoh STRAHSH-noh-hoh, proh-HOD-teh, bood' LAH-skah)",
          "translation": "Excuse me for being late! — No problem at all, please come in."
        }
      ],
      "mnemonics": [
        "«Дякую» кажи щодня — буде вдячна вся рідня; «Будь ласка» й «Перепрошую» роблять душу хорошою!"
      ],
      "culturalNotes": [
        "Слово «Перепрошую» є надзвичайно популярним у західних та центральних регіонах України як витончений спосіб ввічливо звернутися до незнайомця на вулиці або в транспорті."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як коректно та ввічливо відповісти людині, яка щиро подякувала вам за послугу?",
          "options": [
            "Будь ласка! / Прошу! (You're welcome / Please)",
            "Та відстань від мене!",
            "Мені все одно!",
            "Замовкни нарешті!"
          ],
          "answerIndex": 0,
          "explanation": "Нормативними та ввічливими відповідями на подяку в українській мові є слова «Будь ласка!» або «Прошу!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке слово найкраще підходить для ввічливого привернення уваги перехожого на вулиці?",
          "options": [
            "Перепрошую! (Excuse me / Pardon me)",
            "Гей, ти!",
            "Стій там!",
            "Агов, слухай!"
          ],
          "answerIndex": 0,
          "explanation": "Слово «Перепрошую!» — це еталонне та шляхетне українське мовленнєве кліше для ввічливого звертання."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому граматично правильно побудовано фразу подяки з прийменником:",
          "options": [
            "Щиро дякую вам за корисну пораду.",
            "Щиро дякую вас на корисну пораду.",
            "Щиро дякую вами про корисну пораду.",
            "Щиро дякую від вас за корисній пораді."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «дякувати» вимагає давального відмінка адресата («вам») та прийменника «за» зі знахідним відмінком причини («за пораду»)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u1-l4": {
    "id": "uk-u1-l4",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 4,
    "title": "Прощання та побажання: «До побачення», «На все добре», «До зустрічі», «Гарного дня» (Farewells & Wishes)",
    "level": "A1",
    "objective": "Опанувати формули прощання (До побачення, Бувай, На добраніч), структури побажань у родовому відмінку (Гарного дня, На все добре, Щасливої дороги).",
    "presentation": {
      "explanation": "В українській мові прощання нерозривно пов'язане з висловленням теплих побажань співрозмовникові:\n\n1. Основні форми прощання (Formulas of Parting):\n- «До побачення!» — нейтральне, загальноприйняте офіційне прощання.\n- «До зустрічі!» / «До скорого побачення!» — коли планують незабаром побачитися.\n- «Бувай!» (до одного друга) / «Бувайте!» (до групи людей або старшої особи).\n- «На добраніч!» / «Добраніч!» — прощання перед сном або пізно ввечері.\n\n2. Формули побажань у родовому відмінку (Wishes in the Genitive Case):\nВ українській мові побажання традиційно вживаються у формі родового відмінка (бажаю чого?):\n- «Гарного дня!» / «Вдалого дня!» (Have a good day!)\n- «На все добре!» / «Всього найкращого!» (All the best!)\n- «Щасливої дороги!» (Safe travels!)\n- «Успіхів!» / «Хай щастить!» (Good luck!).",
      "examples": [
        {
          "target": "До побачення, колеги! Бажаю вам гарного вечора та приємного відпочинку.",
          "reading": "[dɔ pɔˈbɑtʃɛnʲːɑ, kɔˈlɛɦɪ! bɐˈʒɑju wɑm ˈɦɑrnɔɦɔ ˈwɛtʃɔrɐ tɑ prɪˈjɛmnɔɦɔ wʲidpɔˈtʃɪŋku] (doh poh-BAH-chen-nyah, koh-LEH-hy! Bah-ZHAH-yoo vahm HAHR-noh-hoh VEH-choh-rah tah pry-YEM-noh-hoh veed-poh-CHYN-koo)",
          "translation": "Goodbye, colleagues! I wish you a nice evening and pleasant rest."
        },
        {
          "target": "Щасливої дороги та на все добре! Обов'язково телефонуй, як доїдеш.",
          "reading": "[ʃtʃɐsˈlɪwɔjɪ dɔˈrɔɦɪ tɑ nɑ wsɛ ˈdɔbrɛ! ɔbɔwˈjɑzkɔwɔ tɛlɛfɔˈnuj, jɑk dɔˈjidɛʃ] (shchahs-LY-voh-yee doh-ROH-hy tah nah vseh DOH-breh! Oh-bov-YAHZ-koh-voh teh-leh-foh-NOOY, yahk doh-YEE-desh)",
          "translation": "Have a safe trip and all the best! Be sure to call when you arrive."
        },
        {
          "target": "Бувай, друже! До завтрашньої зустрічі на семінарі.",
          "reading": "[buˈwɑj, ˈdruʒɛ! dɔ ˈzɑwtrɐʃnʲɔjɪ ˈzustrʲitʃi nɑ sɛmʲiˈnɑrʲi] (boo-VYE, DROO-zheh! Doh ZAHV-trahsh-n'oh-yee ZOO-stree-chee nah seh-mee-NAH-ree)",
          "translation": "Bye, friend! See you tomorrow at the seminar."
        }
      ],
      "mnemonics": [
        "«До побачення» — надію зберігаю; «Гарного дня» у родовому відмінку бажаю!"
      ],
      "culturalNotes": [
        "Традиційне українське побажання «Хай щастить!» виражає глибоке побажання долі, успіху та благословення в усіх починаннях людини."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "У якій граматичній формі традиційно вживаються формули побажання (дня, вечора, дороги) в українській мові?",
          "options": [
            "У родовому відмінку (Genitive Case: Гарного дня, Щасливої дороги)",
            "У місцевому відмінку",
            "У кличному відмінку",
            "У називному відмінку без закінчень"
          ],
          "answerIndex": 0,
          "explanation": "Побажання в українській мові граматично походять від еліптичної конструкції «Бажаю (чого?)» і стоять у родовому відмінку: «Гарного дня!», «Щасливої дороги!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, яке є найбільш відповідним для дружнього неформального прощання з однолітком:",
          "options": [
            "Бувай! До зустрічі ввечері! (Bye! See you tonight!)",
            "Дозвольте відкланятися, вельмишановний пане.",
            "Прощавайте назавжди без слів.",
            "Я вимагаю розірвання бесіди."
          ],
          "answerIndex": 0,
          "explanation": "«Бувай! До зустрічі!» — це невимушена, природна та тепла формула дружнього прощання."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть нормативно правильну форму вечірнього прощання перед відходом до сну:",
          "options": [
            "На добраніч! (Good night!)",
            "У доброму ночі!",
            "Доброї ночі день!",
            "Спи швидко вже!"
          ],
          "answerIndex": 0,
          "explanation": "«На добраніч!» є усталеною та найпоширенішою формою побажання доброго нічного сну в українській мові."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u1-l5": {
    "id": "uk-u1-l5",
    "subject": "ukrainian",
    "unit": 1,
    "lessonNumber": 5,
    "title": "Закони милозвучності (евфонія): чергування У/В, І/Й та сполучники «та/і/й» (Euphony Rules: U/V & I/Y)",
    "level": "A1",
    "objective": "Опанувати закони милозвучності української мови (уникнення збігу приголосних та голосних), правила чергування прийменників та префіксів у/в, сполучників і/й/та.",
    "presentation": {
      "explanation": "Українська мова вирізняється особливою мелодійністю та евфонією (милозвучністю). Для уникнення важкого для вимови збігу приголосних або голосних діють обов'язкові правила чергування:\n\n1. Чергування «У» та «В» (Prepositions & Prefixes U/V):\n- «У» вживається між приголосними для уникнення збігу (наприклад: «був у лісі», «наш учитель»).\n- «У» вживається на початку речення перед приголосним (наприклад: «У Києві цвітуть каштани»).\n- «В» вживається між голосними або після голосного перед приголосним (наприклад: «живе в Одесі», «вона в кімнаті»).\n- «В» вживається перед голосними звуками (наприклад: «зайшов в аудиторію»).\n\n2. Чергування сполучників «І», «Й», «ТА» (Conjunctions I/Y/TA):\n- «І» вживається між приголосними, на початку речення перед приголосним або перед звуками [й, я, ю, є, ї] (наприклад: «день і ніч», «Іван і Петро»).\n- «Й» вживається між голосними (наприклад: «Олена й Оксана»).\n- «Та» є повноправним синонімом сполучника «і» у значенні єднання (наприклад: «батько та мати»).",
      "examples": [
        {
          "target": "Вона живе в Одесі, а її брат навчається у Львові.",
          "reading": "[wɔˈnɑ ʒɪˈwɛ w ɔˈdɛsʲi, ɑ jɪˈji brɑt nɐwˈtʃɑjɛtsʲɑ u ˈlʲwɔwʲi] (Voh-NAH zhy-VEH v Oh-DEH-see, ah yee-YEE braht nav-CHAH-yet-syah oo L'VOH-vee)",
          "translation": "She lives in Odesa, and her brother studies in Lviv."
        },
        {
          "target": "Учитель зайшов у світлий клас і привітав учнів.",
          "reading": "[uˈtʃɪtɛlʲ zɐjˈʃɔw u ˈsʲwʲitlɪj klɑs i prɪwʲiˈtɑw ˈutʃnʲiw] (Oo-CHY-tel' zay-SHOV oo SVEET-lyi klahs ee pry-vee-TAHV OOCH-neev)",
          "translation": "The teacher walked into the bright classroom and greeted the pupils."
        },
        {
          "target": "Сонце світить яскраво, і птахи співають у саду.",
          "reading": "[ˈsɔntsɛ ˈsʲwʲitɪtʲ jɐsˈkrɑwɔ, i ptɐˈxɪ spʲiˈwɑjutʲ u sɑˈdu] (SOHN-tseh SVEE-tyt' yahs-KRAH-voh, ee ptah-HY spee-VAH-yoot' oo sah-DOO)",
          "translation": "The sun shines brightly, and birds sing in the garden."
        }
      ],
      "mnemonics": [
        "Голосний після голосного — «В» і «Й» стають чудово; Приголосний біля приголосного — «У» та «І» звучать медово!"
      ],
      "culturalNotes": [
        "Милозвучність української мови закріплена на орфографічному та фонетичному рівнях. Завдяки чергуванню голосних і приголосних українська поезія та пісенна творчість мають унікальну пісенну плавність."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний варіант заповнення пропуску відповідно до законів милозвучності: «Він працює ... великій компанії».",
          "options": [
            "у (між приголосними «працює» [йе] та «великій» [в])",
            "в (створює небажаний збіг «в великій»)",
            "ізсередини",
            "крізь"
          ],
          "answerIndex": 0,
          "explanation": "Перед словом, що починається на букву «в» або сполучення приголосних («великій»), вживається прийменник «у» для уникнення збігу однакових звуків."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть варіант із правильним чергуванням сполучника між двома голосними звуками: «Оксана ... Андрій пішли до парку».",
          "options": [
            "й (Оксана й Андрій — між голосними [а] та [а])",
            "і (менш милозвучно між голосними)",
            "алеж",
            "проте"
          ],
          "answerIndex": 0,
          "explanation": "Між голосними звуками (після «Оксана» перед «Андрій») за законами евфонії наймилозвучнішим є сполучник «й»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому бездоганно дотримано всі правила чергування У/В та І/Й:",
          "options": [
            "У місті відкрили новий театр, і вистава розпочалася вчасно.",
            "В місті відкрили новий театр, й вистава розпочалася увчасно.",
            "У місті відкрили новий театр, й вистава розпочалася вчасно.",
            "В місті відкрили новий театр, і вистава розпочалася увчасно."
          ],
          "answerIndex": 0,
          "explanation": "На початку речення перед приголосним вживаємо «У місті», між приголосним [р] та [в] сполучник «і», прислівник «вчасно» після голосного."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u2-l1": {
    "id": "uk-u2-l1",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 1,
    "title": "Чоловічий рід іменників: приголосні закінчення, закінчення на -о та займенники (Masculine Nouns)",
    "level": "A1",
    "objective": "Опанувати ознаки чоловічого роду іменників (нульове закінчення на твердий/м'який приголосний, закінчення -о для істот), вказівні та присвійні займенники (цей, мій, наш).",
    "presentation": {
      "explanation": "В українській мові категорія граматичного роду охоплює всі іменники. Чоловічий рід (masculine gender) визначається за типовими закінченнями початкової форми (називний відмінок однини):\n\n1. Основні морфологічні ознаки чоловічого роду:\n- Нульове закінчення на твердий приголосний: «стіл», «брат», «студент», «парк», «ліс».\n- Нульове закінчення на м'який приголосний або «й»: «учитель», «кінь», «хлопець», «трамвай», «гай».\n- Закінчення на «-о» (назви осіб чоловічої статі та пестливі форми): «батько», «дядько», «дідусь», «Дмитро», «Петро».\n\n2. Питальні та вказівні конструкції:\n- «Хто це?» — «Це мій рідний брат.» (займенник «він / цей / мій»).\n- «Що це?» — «Це новий сучасний комп'ютер.» (неістота чоловічого роду).",
      "examples": [
        {
          "target": "Мій старший брат працює програмістом у місті Львові.",
          "reading": "[mʲij ˈstɑrʃɪj brɑt prɐt͡sʲuˈjɛ prɔɦrɐˈmʲistɔm u ˈmʲisʲtʲi ˈlʲwɔwʲi] (MEEY STAHR-shyi braht praht-SYOO-yeh proh-hrah-MEES-tohm oo MEES-tee L'VOH-vee)",
          "translation": "My older brother works as a programmer in the city of Lviv."
        },
        {
          "target": "Цей великий дерев'яний стіл стоїть у центрі кімнати.",
          "reading": "[tsɛj wɛˈlɪkɪj dɛrɛˈwjɑnɪj sʲtʲil stɔˈjitʲ u ˈtsɛntrʲi kʲimˈnɑtɪ] (TSEY veh-LY-kyi deh-reh-VYAH-nyi steel stoh-YEET' oo TSEN-tree keem-NAH-ty)",
          "translation": "This large wooden table stands in the center of the room."
        },
        {
          "target": "Дядько Петро зустрів нас біля залізничного вокзалу.",
          "reading": "[ˈdʲɑdʲkɔ pɛˈtrɔ zusʲˈtrʲiw nɑs ˈbʲilʲɑ zɐlʲizˈnɪtʃnɔɦɔ wɔkˈzɑlu] (DYAHDK-oh peh-TROH zoo-STREEV nahs BEE-lyah zah-leez-NYCH-noh-hoh vok-ZAH-loo)",
          "translation": "Uncle Petro met us near the railway station."
        }
      ],
      "mnemonics": [
        "Твердий чи м'який приголосний у кінці слова стоїть — чоловічий рід «Він» упевнено звучить!"
      ],
      "culturalNotes": [
        "В українській мові імена та родинні терміни чоловічого роду на «-о» (батько, дядько, Тарас, Дмитро) мають давнє питоме походження та у кличному відмінку набувають форми «батьку», «дядьку», «Дмитре»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть рядок, у якому всі подані іменники належать виключно до чоловічого роду:",
          "options": [
            "Студент, будинок, учитель, батько (Masculine nouns)",
            "Книга, ручка, мама, сестра",
            "Вікно, місто, сонце, море",
            "Життя, дівчина, яблуко, вода"
          ],
          "answerIndex": 0,
          "explanation": "Слова «студент», «будинок», «учитель» (закінчення на приголосний) та «батько» (назва особи ч. р. на -о) є іменниками чоловічого роду."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який присвійний займенник слід ужити зі словом «стілець» у називному відмінку?",
          "options": [
            "Мій стілець (My chair - Masculine)",
            "Моя стілець",
            "Моє стілець",
            "Мої стілець"
          ],
          "answerIndex": 0,
          "explanation": "Іменник «стілець» є чоловічого роду, тому узгоджується із займенником чоловічого роду «мій»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому займенник та прикметник граматично правильно узгоджені з іменником чоловічого роду:",
          "options": [
            "Цей новий підручник лежить на парті.",
            "Ця новий підручник лежить на парті.",
            "Це нова підручник лежить на парті.",
            "Ці нове підручник лежить на парті."
          ],
          "answerIndex": 0,
          "explanation": "«Підручник» — іменник чоловічого роду, тому потребує форм «цей» та «новий»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u2-l2": {
    "id": "uk-u2-l2",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 2,
    "title": "Жіночий рід іменників: закінчення -а, -я та нульове закінчення на м'який приголосний (Feminine Nouns)",
    "level": "A1",
    "objective": "Опанувати закінчення жіночого роду (-а, -я, нульове закінчення на шиплячий/м'який приголосний), узгодження займенників (вона, ця, моя, наша) та прикметників.",
    "presentation": {
      "explanation": "Іменники жіночого роду (feminine gender) в українській мові мають виразні граматичні ознаки:\n\n1. Основні закінчення жіночого роду:\n- Закінчення на «-а» (після твердих приголосних): «мама», «книга», «школа», «сестра», «країна».\n- Закінчення на «-я» (після м'яких приголосних або голосних): «земля», «пісня», «вулиця», «надія», «родина».\n- Нульове закінчення на м'який приголосний, шиплячий або губний (III відміна): «ніч», «тінь», «радість», «любов», «осінь», «сіль».\n\n2. Узгодження займенників та прикметників:\n- «Хто це?» — «Це моя найкраща подруга.» (займенник «вона / ця / моя»).\n- «Яка ця вулиця?» — «Ця старовинна вулиця дуже красива.»",
      "examples": [
        {
          "target": "Моя рідна сестра навчається у київській музичній академії.",
          "reading": "[mɔˈjɑ ˈrʲidnɐ sɛsʲˈtrɑ nɐwˈtʃɑjɛtsʲɑ u ˈkɪjiwsʲkʲij muzɪtʃˈnʲij ɐkɐˈdɛmʲijɪ] (Moh-YAH REED-nah ses-TRAH nav-CHAH-yet-syah oo KY-yeev-s'keey moo-ZYCH-neey ah-kah-DEH-mee-yee)",
          "translation": "My sister studies at the Kyiv Music Academy."
        },
        {
          "target": "Темна осіння ніч тихо опустилася на старе місто.",
          "reading": "[ˈtɛmnɐ ɔˈsʲinʲːɐ nʲitʃ ˈtɪxɔ ɔpusˈtɪlɐsʲɑ nɑ stɐˈrɛ ˈmʲistɔ] (TEM-nah oh-SEEN-nyah neech TY-hoh oh-poos-TY-lah-syah nah stah-REH MEES-toh)",
          "translation": "A dark autumn night quietly descended upon the old town."
        },
        {
          "target": "Ця цікава книга розповідає про історію та культуру України.",
          "reading": "[tsʲɑ t͡sʲiˈkɑwɐ ˈknɪɦɐ rɔzpɔwʲiˈdɑjɛ prɔ isˈtɔrʲiju tɑ kulʲˈturu ukrɐˈjinɪ] (TSYAH tsee-KAH-vah KNY-hah roz-poh-vee-DAH-yeh proh ees-TOH-ree-yoo tah kool'-TOO-roo oo-krah-YEE-ny)",
          "translation": "This interesting book tells about the history and culture of Ukraine."
        }
      ],
      "mnemonics": [
        "Закінчення «-а» чи «-я», або ніч і радість без кінця — жіночий рід «Вона» упізнаю щомиті я!"
      ],
      "culturalNotes": [
        "Слова «мати», «земля», «мова», «пісня» та «доля» в українській культурі мають глибокий архетиповий зміст і всі належать до жіночого роду."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть іменник жіночого роду з нульовим закінченням на м'який приголосний (III відміна):",
          "options": [
            "Радість (Joy - Feminine III declension)",
            "Хлопець",
            "Місто",
            "Стілець"
          ],
          "answerIndex": 0,
          "explanation": "Іменник «радість» (як і «любов», «ніч», «осінь») закінчується на м'який приголосний і належить до жіночого роду."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму вказівного займенника для сполучення зі словом «пісня»:",
          "options": [
            "Ця чудова пісня (This wonderful song - Feminine)",
            "Цей чудова пісня",
            "Це чудова пісня",
            "Ці чудова пісня"
          ],
          "answerIndex": 0,
          "explanation": "Іменник «пісня» належить до жіночого роду, тому вимагає форми «ця»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому всі іменники належать до жіночого роду:",
          "options": [
            "Країна, вулиця, пісня, ніч",
            "День, вечір, ранок, стіл",
            "Вікно, серце, море, знання",
            "Брат, тато, дідусь, козак"
          ],
          "answerIndex": 0,
          "explanation": "«Країна» (-а), «вулиця» (-я), «пісня» (-я) та «ніч» (III відміна) — усі є іменниками жіночого роду."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u2-l3": {
    "id": "uk-u2-l3",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 3,
    "title": "Середній рід іменників: закінчення -о, -е, віддієслівні іменники на -я та назви малят (Neuter Nouns)",
    "level": "A1",
    "objective": "Опанувати закінчення середнього роду (-о, -е, подовжені на -я, назви дитинчат на -а/-я), узгодження займенників (воно, це, моє) та прикметників.",
    "presentation": {
      "explanation": "Іменники середнього роду (neuter gender) позначають предмети, явища, абстрактні поняття та назви малят:\n\n1. Закінчення середнього роду:\n- Закінчення на «-о»: «вікно», «місто», «село», «слово», «яблуко».\n- Закінчення на «-е»: «поле», «море», «серце», «сонце», «плече».\n- Закінчення на «-я» з подовженням приголосного (віддієслівні іменники): «життя», «знання», «завдання», «мовлення», «питання».\n- Закінчення на «-а / -я» (назви молодих істот і малят): «теля», «кошеня», «хлоп'я», «курча» (при відмінюванні з'являються суфікси -ат-/-ят-).\n\n2. Узгодження:\n- «Що це?» — «Це наше рідне місто.» (займенник «воно / це / моє»).\n- «Яке це завдання?» — «Це складне домашнє завдання.»",
      "examples": [
        {
          "target": "Яскраве ранкове сонце освічує синє безкрає море.",
          "reading": "[jɐsˈkrɑwɛ rɑŋˈkɔwɛ ˈsɔntsɛ ɔsʲwʲiˈtʃujɛ ˈsɪnʲɛ bɛzˈkrɑjɛ ˈmɔrɛ] (yahs-KRAH-veh rahn-KOH-veh SOHN-tseh ohs-vee-CHOO-yeh SY-nyeh bez-KRAH-yeh MOH-reh)",
          "translation": "The bright morning sun illuminates the vast blue sea."
        },
        {
          "target": "Глибокі знання та щоденне навчання відкривають шлях до успіху.",
          "reading": "[ɦlɪˈbɔkʲi znɐnʲːɑ tɑ ʃtʃɔˈdɛnːɛ nɐwˈtʃɑnʲːɑ wʲidkrɪˈwɑjutʲ ʃlʲɑx dɔ ˈuspʲixu] (hly-BOH-kee znahn-NYAH tah shchoh-DEN-neh nav-CHAHN-nyah veed-kry-VAH-yoot' shlyakh doh OOS-pee-khoo)",
          "translation": "Deep knowledge and daily learning open the path to success."
        },
        {
          "target": "Маленьке пухнасте кошеня солодко спить на теплому килимі.",
          "reading": "[mɐˈlɛnʲkɛ puxˈnɑstɛ kɔʃɛˈnʲɑ ˈsɔlɔdkɔ spɪtʲ nɑ ˈtɛplɔmu ˈkɪlɪmʲi] (mah-LEN'-keh pookh-NAHS-teh koh-sheh-NYAH SOH-lod-koh speet' nah TEP-loh-moo KY-ly-mee)",
          "translation": "The little fluffy kitten sleeps sweetly on the warm carpet."
        }
      ],
      "mnemonics": [
        "На «-о», на «-е» або життя й знання — середній рід «Воно» всміхається щодня!"
      ],
      "culturalNotes": [
        "В українській мові віддієслівні іменники середнього роду на «-ння», «-ття» мають подвоєння м'яких подовжених приголосних (читання, знання, буття, багаття), що є унікальною фонетичною рисою мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть іменник середнього роду, утворений із подовженням приголосного перед закінченням «-я»:",
          "options": [
            "Завдання (Task / Assignment - Neuter)",
            "Земля",
            "Пісня",
            "Надія"
          ],
          "answerIndex": 0,
          "explanation": "Слово «завдання» (як і «знання», «життя») належить до середнього роду та має характерне подовження [н':а]."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний рядок узгодження для іменника середнього роду «вікно»:",
          "options": [
            "Це велике вікно (This big window - Neuter)",
            "Цей великий вікно",
            "Ця велика вікно",
            "Ці великі вікно"
          ],
          "answerIndex": 0,
          "explanation": "Іменник «вікно» — середнього роду, тому вимагає займенника «це» та прикметника «велике»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому всі іменники належать виключно до середнього роду:",
          "options": [
            "Сонце зігріває море, поле та зелене листя.",
            "Брат читає цікаву книгу біля вікна.",
            "Учитель зайшов у світлий клас школи.",
            "Студентка пише лист своїй сестрі."
          ],
          "answerIndex": 0,
          "explanation": "Слова «сонце», «море», «поле», «листя» є іменниками середнього роду."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u2-l4": {
    "id": "uk-u2-l4",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 4,
    "title": "Множина іменників: регулярні моделі творення (-и, -і, -ї, -а/-я) (Plural Formations)",
    "level": "A1",
    "objective": "Опанувати правила творення множини іменників трьох родів (тверда група на -и, м'яка на -і, після голосних на -ї, середній рід на -а/-я), узгодження займенників (вони, ці, мої).",
    "presentation": {
      "explanation": "Творення множини (plural forms) в українській мові залежить від граматичного роду та кінцевого звука основи:\n\n1. Чоловічий та жіночий рід:\n- Тверда група (після твердих приголосних) -> закінчення «-и»: «стіл -> столи», «студент -> студенти», «книга -> книги», «мапа -> мапи».\n- М'яка та мішана групи (після м'яких приголосних і шиплячих [ж, ч, ш, щ]) -> закінчення «-і»: «учитель -> учителі», «вулиця -> вулиці», «ніч -> ночі», «товариш -> товариші».\n- Після голосних та апострофа -> закінчення «-ї»: «край -> краї», «надія -> надії», «соловей -> солов'ї».\n\n2. Середній рід:\n- Закінчення «-о» змінюється на «-а»: «вікно -> вікна», «місто -> міста», «село -> села».\n- Закінчення «-е» змінюється на «-я»: «поле -> поля», «море -> моря».\n- Іменники на «-я» з подовженням залишають закінчення «-я»: «завдання -> завдання», «питання -> питання».\n\n3. Займенники множини:\n- «Вони», «ці», «мої», «наші», «нові».",
      "examples": [
        {
          "target": "Українські студенти та студентки активно відвідують лекції.",
          "reading": "[ukrɐˈjinʲsʲkʲi stuˈdɛntɪ tɑ stuˈdɛntkɪ ɐkˈtɪwnɔ wʲidwʲiˈdujutʲ ˈlɛktsʲijɪ] (oo-krah-YEEN-s'kee stoo-DEN-ty tah stoo-DENT-ky ahk-TYV-noh veed-vee-DOO-yoot' LEK-tsee-yee)",
          "translation": "Ukrainian male and female students actively attend lectures."
        },
        {
          "target": "У центрі міста світяться великі вікна нових сучасних будинків.",
          "reading": "[u ˈtsɛntrʲi ˈmʲistɐ sʲwʲiˈtʲɑtsʲɑ wɛˈlɪkʲi ˈwʲiknɐ nɔˈwɪx suˈtʃɑsnɪx buˈdɪnkʲiw] (oo TSEN-tree MEES-tah SVEET-yat-syah veh-LY-kee VEEK-nah noh-VYKH soo-CHAHS-nykh boo-DYN-keev)",
          "translation": "In the city center, the large windows of new modern buildings are lit."
        },
        {
          "target": "Широкі зелені поля простяглися аж до самого горизонту.",
          "reading": "[ʃɪˈrɔkʲi zɛˈlɛnʲi pɔˈlʲɑ prɔsʲtʲɐɦˈlɪsʲɑ ɐʒ dɔ sɐˈmɔɦɔ ɦɔrɪˈzɔntu] (shy-ROH-kee zeh-LEH-nee poh-LYAH prohs-tyah-HLY-syah ahzh doh sah-MOH-hoh hoh-ry-ZOHN-too)",
          "translation": "Wide green fields stretched all the way to the horizon."
        }
      ],
      "mnemonics": [
        "Тверда основа — «-и» постав, м'яка основа — «-і» обрав; А вікно на «-а» змінить, щоб у множині зажить!"
      ],
      "culturalNotes": [
        "В українській мові при чергуванні в основі звуків [о], [е] з [і] у закритому складі часто спостерігається чергування при творенні множини: «стіл — столи», «ніч — ночі», «кіт — коти»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть правильну форму множини від іменника середнього роду «місто»:",
          "options": [
            "Міста (Cities - Neuter Plural)",
            "Місти",
            "Місті",
            "Містове"
          ],
          "answerIndex": 0,
          "explanation": "Іменники середнього роду на «-о» у множині набувають закінчення «-а»: однина «місто» -> множина «міста»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть рядок, у якому всі іменники правильно подані у формі множини:",
          "options": [
            "Столи, книги, вулиці, моря (Plural forms)",
            "Стола, книгі, вулици, мори",
            "Столе, книго, вулицо, моро",
            "Столу, книгу, вулицу, мору"
          ],
          "answerIndex": 0,
          "explanation": "«Столи» (ч. р.), «книги» (ж. р.), «вулиці» (ж. р. м'яка), «моря» (с. р.) — правильні літературні форми множини."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено граматичну помилку у творенні форми множини:",
          "options": [
            "На столі лежать нові олівци та зошити.",
            "На столі лежать нові олівці та зошити.",
            "У саду ростуть високі дерева та яблуні.",
            "Студенти читають цікаві підручники."
          ],
          "answerIndex": 0,
          "explanation": "Слово «олівець» має м'яку основу, тому правильною формою множини є «олівці» (з літерою «і»), а не «олівци»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u2-l5": {
    "id": "uk-u2-l5",
    "subject": "ukrainian",
    "unit": 2,
    "lessonNumber": 5,
    "title": "Особливі випадки числа: суплетивні множини (люди, діти, друзі) та іменники Singularia/Pluralia Tantum",
    "level": "A1",
    "objective": "Опанувати нерегулярні форми множини (людина -> люди, дитина -> діти, друг -> друзі), іменники, що вживаються лише в однині або лише в множині.",
    "presentation": {
      "explanation": "В українській мові є важлива група іменників із нерегулярними або обмеженими формами числа:\n\n1. Суплетивні та нерегулярні форми множини:\n- «Людина -> люди» (суплетивна основа).\n- «Дитина -> діти» (суплетивна основа).\n- «Друг -> друзі» (суфіксальна зміна та чергування г/з).\n- «Брат -> брати», «Син -> сини».\n\n2. Іменники, що вживаються лише в множині (Pluralia Tantum):\n- Парні або складені предмети: «ножиці», «окуляри», «штани», «двері», «ворота».\n- Речовини та матеріали: «гроші», «дріжджі», «парфуми».\n- Події, часові проміжки та ігри: «канікули», «шахи», «іменини».\n\n3. Іменники, що вживаються лише в однині (Singularia Tantum):\n- Речовинні: «молоко», «цукор», «золото», «нафта».\n- Збірні: «студентство», «молодь», «листя», «посуд».\n- Абстрактні: «любов», «радість», «доброта», «чесність».",
      "examples": [
        {
          "target": "Щасливі діти весело граються на новому дитячому майданчику.",
          "reading": "[ʃtʃɐsˈlɪwʲi ˈdʲitɪ ˈwɛsɛlɔ ˈɦrɑjutsʲɑ nɑ nɔˈwɔmu dɪˈtʲɑtʃɔmu mɐjˈdɑntʃɪku] (shchahs-LY-vee DEE-ty VEH-seh-loh HRAH-yoot-syah nah noh-VOH-moo dy-TYAH-choh-moo may-DAHN-chy-koo)",
          "translation": "Happy children are playing cheerfully in the new playground."
        },
        {
          "target": "Мої найкращі друзі приїхали до мене в гості на літні канікули.",
          "reading": "[mɔˈji nɐjˈkrɑʃtʃʲi ˈdruzʲi prɪˈjixɐlɪ dɔ ˈmɛnɛ w ˈɦɔsʲtʲi nɑ ˈlʲitnʲi kɐˈnʲikulɪ] (moh-YEE nay-KRAHSH-chee DROO-zee pry-YEE-khah-ly doh MEH-neh v HOHS-tee nah LEET-nee kah-NEE-koo-ly)",
          "translation": "My best friends came to visit me for summer holidays."
        },
        {
          "target": "Він поклав гроші та окуляри у кишеню куртки.",
          "reading": "[wʲin pɔkˈlɑw ˈɦrɔʃʲi tɑ ɔkuˈlʲɑrɪ u kɪˈʃɛnʲu ˈkurtkɪ] (VEEN pohk-LAHV HROH-shee tah oh-koo-LYAH-ry oo ky-SHEH-n'oo KOORT-ky)",
          "translation": "He put the money and glasses into the jacket pocket."
        }
      ],
      "mnemonics": [
        "Людина одна — а навколо люди; Дитина росте — і дітьми всі будуть! Окуляри та гроші — у множині завжди хороші!"
      ],
      "culturalNotes": [
        "Іменники «канікули» та «гроші» в українській мові завжди вживаються у множині й узгоджуються з дієсловами та прикметниками множини: «великі гроші», «веселі канікули розпочалися»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть правильну форму множини від іменника «людина»:",
          "options": [
            "Люди (People - Suppletive Plural)",
            "Людини",
            "Людинове",
            "Людинці"
          ],
          "answerIndex": 0,
          "explanation": "Іменник «людина» утворює форму множини від іншого кореня (суплетивно): «люди»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть іменник, який в українській мові вживається ВИКЛЮЧНО у формі множини (Pluralia Tantum):",
          "options": [
            "Ножиці (Scissors - Pluralia Tantum)",
            "Книга",
            "Стіл",
            "Учень"
          ],
          "answerIndex": 0,
          "explanation": "Слово «ножиці» позначає парний предмет і вживається лише у множині."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з правильно утвореною множиною слова «друг»:",
          "options": [
            "Мої вірні друзі завжди готові прийти на допомогу.",
            "Мої вірні други завжди готові прийти на допомогу.",
            "Мої вірні другі завжди готові прийти на допомогу.",
            "Мої вірні дружа завжди готові прийти на допомогу."
          ],
          "answerIndex": 0,
          "explanation": "Форма множини від «друг» — «друзі» (з суфіксальним чергуванням [г] на [з'] перед [і])."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u3-l1": {
    "id": "uk-u3-l1",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 1,
    "title": "Називний відмінок: синтаксична роль підмета та конструкції з нульовою зв'язкою (Nominative Case & Zero Copula)",
    "level": "A1",
    "objective": "Опанувати функції називного відмінка (питання хто? що?), побудову простого непоширеного й поширеного речення, конструкції з тире при нульовій дієслівній зв'язці.",
    "presentation": {
      "explanation": "Називний відмінок (Nominative Case / хто? що?) — це єдиний прямий і початковий відмінок в українській мові, що слугує базою для словникових форм іменників:\n\n1. Основні синтаксичні функції називного відмінка:\n- Граматичний підмет (Subject) — виконавець дії або носій стану в реченні (наприклад: «Сонце світить», «Студент читає»).\n- Іменна частина складеного присудка при нульовій зв'язці теперішнього часу (коли дієслово «бути / є» опускається).\n\n2. Пунктуаційне правило вживання тире:\n- Якщо і підмет, і присудок виражені іменниками у називному відмінку, між ними ставиться тире (наприклад: «Київ — столиця України», «Тарас Шевченко — великий український поет»).\n\n3. Питальні речення зі словами «Хто?» та «Що?»:\n- «Хто це?» — «Це наша нова викладачка.»\n- «Що це?» — «Це старовинний львівський університет.»",
      "examples": [
        {
          "target": "Київ — велична давня столиця незалежної української держави.",
          "reading": "[ˈkɪjiw — wɛˈlɪtʃnɐ ˈdɑwnʲɑ stɔˈlɪtsʲɑ nɛzɐˈlɛʒnɔjɪ ukrɐˈjinʲsʲkɔjɪ dɛrˈʒɑwɪ] (KY-yeev — veh-LYCH-nah DAHV-nyah stoh-LY-tsyah neh-zah-LEZH-noh-yee oo-krah-YEEN-s'koh-yee der-ZHAH-vy)",
          "translation": "Kyiv is the majestic ancient capital of the independent Ukrainian state."
        },
        {
          "target": "Талановитий молодий студент старанно вивчає сучасні інформаційні технології.",
          "reading": "[tɐlɐnɔˈwɪtɪj mɔlɔˈdɪj stuˈdɛnt stɐˈrɑnːɔ wɪwˈtʃɑjɛ sutʃɐsʲˈnʲi infɔrmɐt͡sʲijʲˈnʲi tɛxnɔˈlɔɦijɪ] (tah-lah-noh-VY-tyi moh-loh-DYI stoo-DENT stah-RAHN-noh vyv-CHAH-yeh soo-chahs-NEE een-for-mah-TSEE-ynee tekh-noh-LOH-hee-yee)",
          "translation": "The talented young student diligently studies modern information technologies."
        },
        {
          "target": "Українська мова — одна з найбагатших та наймилозвучніших мов світу.",
          "reading": "[ukrɐˈjinʲsʲkɐ ˈmɔwɐ — ɔdˈnɑ z nɐjbɐˈɦɑtʃɪx tɑ nɐjmɪlɔzˈwutʃnʲiʃɪx mɔw ˈsʲwʲitu] (oo-krah-YEEN-s'kah MOH-vah — ohd-NAH z nay-bah-HAH-tshykh tah nay-my-loh-ZVOOCH-nee-shykh mov SVEE-too)",
          "translation": "The Ukrainian language is one of the richest and most melodious languages in the world."
        }
      ],
      "mnemonics": [
        "«Хто?» та «Що?» — називний стоїть сповна, підметом у реченні керує він щодня!"
      ],
      "culturalNotes": [
        "Конструкція «Іменник — іменник» із тире є золотим стандартом класичних українських дефініцій, афоризмів та поетичних рядків."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому між підметом і присудком правильно вжито тире при нульовій дієслівній зв'язці:",
          "options": [
            "Дніпро — найдовша та наймогутніша річка України. (Noun — Noun in Nominative)",
            "Дніпро тому річка України.",
            "Дніпро хіба що річка України.",
            "Дніпро нехай річка України."
          ],
          "answerIndex": 0,
          "explanation": "Оскільки підмет «Дніпро» та присудок «річка» виражені іменниками у називному відмінку, між ними ставиться тире."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "На які граматичні питання відповідає іменник у формі називного відмінка?",
          "options": [
            "Хто? Що? (Who? What? - Nominative)",
            "Кого? Чого?",
            "Кому? Чому?",
            "Ким? Чим?"
          ],
          "answerIndex": 0,
          "explanation": "Називний відмінок є прямим відмінком і відповідає на питання «Хто?» (для істот) та «Що?» (для неістот)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де іменник виступає граматичним підметом у називному відмінку:",
          "options": [
            "Весняний теплий дощ рясно поливає квітучий сад.",
            "Весняним теплим дощем полило квітучий сад.",
            "Від весняного теплого дощу розквітнув сад.",
            "У весняному теплому дощі купається сад."
          ],
          "answerIndex": 0,
          "explanation": "У реченні «Весняний теплий дощ рясно поливає квітучий сад» слово «дощ» є граматичним підметом у називному відмінку."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u3-l2": {
    "id": "uk-u3-l2",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 2,
    "title": "Кличний відмінок іменників чоловічого роду: закінчення -е, -у, -ю (Vocative Case: Masculine Nouns)",
    "level": "A1",
    "objective": "Опанувати творення кличного відмінка іменників чоловічого роду (тверда основа на -е з чергуванням, основа на г/к/х та суфікси -ик/-ок на -у, м'яка основа на -ю).",
    "presentation": {
      "explanation": "Українська мова має унікальний сьомий відмінок — Кличний (Vocative Case), який обов'язково використовується при прямому звертанні до людини або персоніфікованого предмета:\n\n1. Закінчення «-е» (іменники чоловічого роду твердої групи):\n- При цьому кінцеві приголосні основи часто зазнають історичного чергування:\n  • [г] -> [ж]: «друг -> друже!», «ворог -> вороже!»\n  • [к] -> [ч]: «чоловік -> чоловіче!», «козак -> козаче!»\n  • [х] -> [ш]: «пастух -> пастуше!»\n- Звичайні тверді приголосні: «брат -> брате!», «Іван -> Іване!», «Петро -> Петре!», «Богдан -> Богдане!».\n\n2. Закінчення «-у»:\n- Іменники на задньоязикові [г, к, х] без чергування: «Олег -> Олегу! / Олеже!», «дід -> діду!».\n- Іменники зі зменшувально-пестливими суфіксами «-ик», «-ок», «-к»: «хлопчик -> хлопчику!», «синок -> синку!», «батько -> батьку!».\n\n3. Закінчення «-ю» (м'яка група):\n- «Учитель -> учителю!», «дідусь -> дідусю!», «Сергій -> Сергію!», «Андрій -> Андрію!», «водій -> водію!».\n\n4. Пунктуаційне правило:\n- Звертання у кличному відмінку завжди виділяється комами або знаком оклику на письмі!",
      "examples": [
        {
          "target": "Дорогий брате, щиро вітаю тебе з днем народження та бажаю щастя!",
          "reading": "[dɔrɔˈɦɪj ˈbrɑtɛ, ˈʃtʃirɔ wʲiˈtɑju tɛˈbɛ z dnɛm nɐˈrɔdʒɛnʲːɑ tɑ bɐˈʒɑju ˈʃtʃɑsʲtʲɑ] (doh-roh-HYI BRAH-teh, SHCHEE-roh vee-TAH-yoo teh-BEH z dnem nah-ROD-zhen-nyah tah bah-ZHAH-yoo SHCHAHS-tyah!)",
          "translation": "Dear brother, I sincerely congratulate you on your birthday and wish you happiness!"
        },
        {
          "target": "Мій вірний друже, дякую тобі за щиру підтримку та мудру пораду.",
          "reading": "[mʲij ˈwʲirnɪj ˈdruʒɛ, ˈdʲɑkuju tɔˈbʲi zɑ ˈʃtʃiru pidˈtrɪmku tɑ ˈmudru pɔˈrɑdu] (MEEY VEER-nyi DROO-zheh, DYAH-koo-yoo toh-BEE zah SHCHEE-roo peed-TRYM-koo tah MOO-droo poh-RAH-doo)",
          "translation": "My faithful friend, thank you for your sincere support and wise advice."
        },
        {
          "target": "Шановний учителю, дозвольте поставити вам запитання щодо уроку.",
          "reading": "[ʃɐˈnɔwnɪj uˈtʃɪtɛlʲu, dɔzˈwɔlʲtɛ pɔsˈtɑwɪtɪ wɑm zɐpɪˈtɑnʲːɑ ʃtʃɔˈdɔ uˈrɔku] (shah-NOV-nyi oo-CHY-teh-lyoo, doz-VOL'-teh pohs-TAH-vy-ty vahm zah-py-TAHN-nyah shchoh-DOH oo-ROH-koo)",
          "translation": "Esteemed teacher, allow me to ask you a question regarding the lesson."
        }
      ],
      "mnemonics": [
        "«Друг» на «друже» перетвори, «брат» на «брате» поклич з гори; М'який «учитель» стане «учителю» в розмові щомиті!"
      ],
      "culturalNotes": [
        "Вживання називного відмінка замість кличного при звертанні (наприклад, «Іван, іди сюди») є грубим порушенням літературної норми української мови. Правильно казати виключно: «Іване, ходи сюди!»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму кличного відмінка для звертання до друга на ім'я Богдан:",
          "options": [
            "Богдане! (Vocative case - Hard stem ending in -e)",
            "Богдан!",
            "Богдану!",
            "Богдана!"
          ],
          "answerIndex": 0,
          "explanation": "Іменники чоловічого роду твердої групи з основою на приголосний [н] у кличному відмінку мають закінчення «-е»: «Богдане!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке історичне чергування звуків відбувається при творенні кличного відмінка від слова «чоловік»?",
          "options": [
            "[к] чергується з [ч]: Чоловіче! (Consonant mutation k -> ch)",
            "[к] чергується з [ц]: Чоловіце!",
            "[к] чергується з [с]: Чоловісе!",
            "Звуки не чергуються: Чоловіке!"
          ],
          "answerIndex": 0,
          "explanation": "При творенні кличного відмінка звук [к] перед голосним [е] за першою перехідною палаталізацією чергується з [ч]: «чоловік -> чоловіче!»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому форма звертання утворена граматично бездоганно:",
          "options": [
            "Андрію, допоможи мені розв'язати це складне завдання!",
            "Андрій, допоможи мені розв'язати це складне завдання!",
            "Андріє, допоможи мені розв'язати це складне завдання!",
            "Андрія, допоможи мені розв'язати це складне завдання!"
          ],
          "answerIndex": 0,
          "explanation": "Ім'я «Андрій» належить до м'якої групи чоловічого роду, тому у кличному відмінку має закінчення «-ю»: «Андрію!»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u3-l3": {
    "id": "uk-u3-l3",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 3,
    "title": "Кличний відмінок іменників жіночого та середнього роду: закінчення -о, -е, -є, -ю (Vocative Case: Feminine & Neuter)",
    "level": "A1",
    "objective": "Опанувати творення кличного відмінка жіночого роду (тверда основа на -о, м'яка на -е/-є, пестливі форми на -ю, III відміна на -е) та особливості середнього роду.",
    "presentation": {
      "explanation": "Іменники жіночого роду утворюють форми кличного відмінка за такими нормативними правилами:\n\n1. Тверда група (іменники на «-а») -> закінчення «-о»:\n- «Мама -> мамо!», «сестра -> сестро!», «Оксана -> Оксано!», «Олена -> Олено!», «країна -> країно!».\n\n2. М'яка та мішана групи (іменники на «-я», «-а» після шиплячих) -> закінчення «-е» / «-є»:\n- Після м'яких приголосних: «земля -> земле!», «пісня -> пісне!», «душа -> душе!», «круча -> круче!».\n- Після голосних та апострофа: «Марія -> Маріє!», «Софія -> Софіє!», «Юлія -> Юліє!», «надія -> надіє!».\n\n3. Зменшувально-пестливі форми на «-я» -> закінчення «-ю»:\n- «Матуся -> матусю!», «бабуся -> бабусю!», «доня -> доню!», «Галя -> Галю!», «Олюся -> Олюсю!».\n\n4. Іменники III відміни (на приголосний) -> закінчення «-е»:\n- «Радість -> радосте!», «ніч -> ноче!», «любов -> любове!».\n\n5. Середній рід:\n- Збігається з формою називного відмінка: «сонце!», «серце!», «поле!».",
      "examples": [
        {
          "target": "Рідна мамо, дякую тобі за твою безмежну турботу, любов та тепло!",
          "reading": "[ˈrʲidnɐ ˈmɑmɔ, ˈdʲɑkuju tɔˈbʲi zɑ twɔˈju bɛzˈmɛʒnu turˈbɔtu, lʲuˈbɔw tɑ tɛpˈlɔ] (REED-nah MAH-moh, DYAH-koo-yoo toh-BEE zah tvoh-YOO bez-MEZH-noo toor-BOH-too, lyoo-BOV tah tep-LOH!)",
          "translation": "Dear mother, thank you for your boundless care, love, and warmth!"
        },
        {
          "target": "Оксано, чи підеш ти сьогодні ввечері на концерт класичної музики?",
          "reading": "[ɔkˈsɑnɔ, tʃɪ pʲiˈdɛʃ tɪ sʲɔˈɦɔdnʲi ˈwːɛtʃɛrʲi nɑ kɔnˈtsɛrt klɐˈsɪtʃnɔjɪ ˈmuzɪkɪ] (ohk-SAH-noh, chy pee-DESH ty syoh-HOHD-nee VVEH-cheh-ree nah kohn-TSERT klah-SYCH-noh-yee MOO-zy-ky?)",
          "translation": "Oksana, will you go to the classical music concert tonight?"
        },
        {
          "target": "Дорога матусю, вітаємо тебе зі святом весни!",
          "reading": "[dɔrɔˈɦɑ mɐˈtusʲu, wʲiˈtɑjɛmɔ tɛˈbɛ zʲi ˈsʲwʲɑtɔm wɛsˈnɪ] (doh-roh-HAH mah-TOO-syoo, vee-TAH-yeh-moh teh-BEH z'yee SVYAH-tohm ves-NY!)",
          "translation": "Dear mommy, we congratulate you on the spring holiday!"
        }
      ],
      "mnemonics": [
        "Мама стане «мамо», Оксана — «Оксано»; А пестлива доня «доню» скаже радо!"
      ],
      "culturalNotes": [
        "Звертання «Мамо!» та «Матусю!» у кличному відмінку є найсвятішими й найемоційнішими мовними формулами в українському родинному спілкуванні."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму кличного відмінка для звертання до жінки на ім'я Марія:",
          "options": [
            "Маріє! (Vocative of feminine soft nouns on -ia)",
            "Марія!",
            "Марію!",
            "Марійо!"
          ],
          "answerIndex": 0,
          "explanation": "Імена на «-ія» у кличному відмінку набувають закінчення «-є»: «Маріє!», «Софіє!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення матиме пестливе слово «бабуся» у кличному відмінку?",
          "options": [
            "Бабусю! (Diminutive feminine in -ia takes -iu)",
            "Бабусе!",
            "Бабусо!",
            "Бабуся!"
          ],
          "answerIndex": 0,
          "explanation": "Пестливі іменники жіночого роду на «-ся», «-ля», «-ня» у кличному відмінку набувають закінчення «-ю»: «бабусю!», «матусю!», «доню!»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому кличний відмінок жіночого роду вжито з граматичною помилкою:",
          "options": [
            "Олена, передай мені, будь ласка, підручник з мови.",
            "Олено, передай мені, будь ласка, підручник з мови.",
            "Сестро, ходімо разом до бібліотеки.",
            "Мамо, я вже повернувся додому."
          ],
          "answerIndex": 0,
          "explanation": "Форма «Олена» стоїть у називному відмінку. Правильною формою кличного відмінка є «Олено!»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u3-l4": {
    "id": "uk-u3-l4",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 4,
    "title": "Офіційні та шляхетні звертання: узгодження титулів «пане / пані» з посадами та іменами (Formal Vocative Address)",
    "level": "A1",
    "objective": "Опанувати правила подвійного кличного відмінка при поєднанні слів пане/пані з іменами, посадами та званнями (пане професоре, пані посол/послице, пане міністре).",
    "presentation": {
      "explanation": "В українському офіційному, дипломатичному та академічному мовленнєвому етикеті діє суворе правило подвійного кличного відмінка:\n\n1. Правило подвійного кличного відмінка (Double Vocative):\n- Якщо звертання складається з двох іменників (титул/пан + ім'я або посада), ОБИДВА слова ставляться у форму кличного відмінка:\n  • «Пан + Петро» -> «Пане Петре!»\n  • «Пані + Оксана» -> «Пані Оксано!»\n  • «Пан + професор» -> «Пане професоре!»\n  • «Пан + міністр» -> «Пане міністре!»\n  • «Пан + директор» -> «Пане директоре!»\n  • «Пан + капітан» -> «Пане капітане!»\n\n2. Звертання до жінок з невідмінюваними посадами:\n- Титул «пані» залишається у кличному відмінку, а невідмінювані форми професій або прізвищ зберігають свою форму:\n  • «Пані професор!» / «Пані професорко!»\n  • «Пані Коваленко!»\n\n3. Сполучення з прикметниками:\n- Прикметник узгоджується у кличному/називному відмінку: «Високоповажний пане міністре!», «Вельмишановна пані голово!»",
      "examples": [
        {
          "target": "Пане професоре, щиро дякуємо вам за надзвичайно цікаву та змістовну лекцію!",
          "reading": "[ˈpɑnɛ prɔˈfɛsɔrɛ, ˈʃtʃirɔ ˈdʲɑkujɛmɔ wɑm zɑ nɐdzwɪˈtʃɑjnɔ t͡sʲiˈkɑwu tɑ zʲmʲisˈtɔwnu ˈlɛktsʲiju] (PAH-neh proh-FEH-soh-reh, SHCHEE-roh DYAH-koo-yeh-moh vahm zah nahd-zvy-CHAY-noh tsee-KAH-voo tah zmees-TOHV-noo LEK-tsee-yoo!)",
          "translation": "Professor, thank you sincerely for an extraordinarily interesting and meaningful lecture!"
        },
        {
          "target": "Пані Оксано, дозвольте передати вам офіційні документи конференції.",
          "reading": "[ˈpɑnʲi ɔkˈsɑnɔ, dɔzˈwɔlʲtɛ pɛrɛˈdɑtɪ wɑm ɔfʲit͡sʲijʲˈnʲi dɔkuˈmɛntɪ kɔnfɛˈrɛntsʲijɪ] (PAH-nee ohk-SAH-noh, doz-VOL'-teh peh-reh-DAH-ty vahm oh-fee-TSEE-ynee doh-koo-MEN-ty kohn-feh-REN-tsee-yee)",
          "translation": "Madam Oksana, allow me to hand you the official conference documents."
        },
        {
          "target": "Шановний пане голово, прошу надати слово для виступу делегації.",
          "reading": "[ʃɐˈnɔwnɪj ˈpɑnɛ ɦɔlɔˈwɔ, ˈprɔʃu nɐˈdɑtɪ ˈslɔwɔ dlʲɑ ˈwɪstupu dɛlɛˈɦɑtsʲijɪ] (shah-NOV-nyi PAH-neh hoh-loh-VOH, PROH-shoo nah-DAH-ty SLOH-voh dlyah VY-stoo-poo deh-leh-HAH-tsee-yee)",
          "translation": "Esteemed Mr. Chairman, I request the floor for the delegation's address."
        }
      ],
      "mnemonics": [
        "«Пане» з «професоре» удвох ставай, український етикет шануй і пам'ятай!"
      ],
      "culturalNotes": [
        "Формули «Пане Президенте!», «Пане Прем'єр-міністре!», «Пане Послу!» є офіційним протокольним дипломатичним звертанням найвищого державного рівня в Україні."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативно правильну форму офіційного звертання до ректора університету:",
          "options": [
            "Пане ректоре! (Both words in Vocative case)",
            "Пан ректор!",
            "Пане ректор!",
            "Пан ректоре!"
          ],
          "answerIndex": 0,
          "explanation": "За правилом подвійного кличного відмінка обидва іменники набувають форми кличного: «Пане ректоре!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно звернутися до міністра закордонних справ на офіційній зустрічі?",
          "options": [
            "Пане міністре! (Double vocative address)",
            "Пан міністр!",
            "Пане міністр!",
            "Пану міністру!"
          ],
          "answerIndex": 0,
          "explanation": "І слово «пан», і посада «міністр» ставляться у кличний відмінок: «Пане міністре!»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому дотримано правил подвійного кличного відмінка при звертанні до пана Андрія:",
          "options": [
            "Пане Андрію, раді вітати вас на нашій міжнародній зустрічі!",
            "Пан Андрій, раді вітати вас на нашій міжнародній зустрічі!",
            "Пане Андрій, раді вітати вас на нашій міжнародній зустрічі!",
            "Пан Андрію, раді вітати вас на нашій міжнародній зустрічі!"
          ],
          "answerIndex": 0,
          "explanation": "Обидва компоненти повинні стояти у кличному відмінку: «Пане Андрію!»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u3-l5": {
    "id": "uk-u3-l5",
    "subject": "ukrainian",
    "unit": 3,
    "lessonNumber": 5,
    "title": "Поетичні, патріотичні та фольклорні форми кличного відмінка: «Україно», «козаче», «земле моя» (Poetic Vocatives)",
    "level": "A1",
    "objective": "Опанувати виражальні можливості кличного відмінка в художньому стилі, поезії, козацьких думах, патріотичних гаслах та персоніфікаціях (Україно, Дніпре, козаче, земле).",
    "presentation": {
      "explanation": "Кличний відмінок є потужним стилістичним і поетичним засобом української літератури та фольклору, через який виражається сильне почуття, персоніфікація та патріотизм:\n\n1. Патріотичні та географічні персоніфікації:\n- «Україна -> Україно!» («О Україно! О люба ненько!»)\n- «Дніпро -> Дніпре!» («Реве та стогне Дніпр широкий» / «Ой Дніпре, мій брате!»)\n- «Київ -> Києве!» («Києве мій, цвітуть каштани»)\n- «Батьківщина -> Батьківщино!»\n\n2. Фольклорні та історичні звертання:\n- «Козак -> козаче!» («Гей, козаче, козаченьку!»)\n- «Сокіл -> соколе!»\n- «Орел -> орле!»\n- «Кінь -> коню!»\n\n3. Поетичні персоніфікації природи та почуттів:\n- «Земля -> земле моя рідна!»\n- «Вітер -> вітре буйний!»\n- «Сонце -> сонце ясне!»\n- «Доля -> доле моя!»",
      "examples": [
        {
          "target": "Україно, земле моя рідна, цвіти та процвітай у мирі й славі!",
          "reading": "[ukrɐˈjinɔ, ˈzɛmlɛ mɔˈjɑ ˈrʲidnɐ, t͡sʲwʲiˈtɪ tɑ prɔt͡sʲwʲiˈtɑj u ˈmɪrʲi j ˈslɑwʲi] (oo-krah-YEE-noh, ZEM-leh moh-YAH REED-nah, tsvee-TY tah proh-tsvee-TIE oo MEE-ree y SLAH-vee!)",
          "translation": "Ukraine, my native land, blossom and prosper in peace and glory!"
        },
        {
          "target": "Гей, козаче, сідлай коня та вирушай на захист рідного краю!",
          "reading": "[ɦɛj, kɔˈzɑtʃɛ, sʲidˈlɑj kɔˈnʲɑ tɑ wɪruˈʃɑj nɑ ˈzɑxɪst ˈrʲidnɔɦɔ ˈkrɑju] (hey, koh-ZAH-cheh, seed-LIE koh-NYAH tah vy-roo-SHY nah ZAH-hyst REED-noh-hoh KRAH-yoo!)",
          "translation": "Hey, Cossack, saddle your horse and set out to defend your native land!"
        },
        {
          "target": "Дніпре широкий, неси свої могутні води крізь віки до Чорного моря!",
          "reading": "[ˈdnʲiprɛ ʃɪˈrɔkɪj, nɛˈsɪ swɔˈji mɔˈɦutʲnʲi ˈwɔdɪ krʲizʲ wʲiˈkɪ dɔ ˈtʃɔrnɔɦɔ ˈmɔrʲɑ] (DNEE-preh shy-ROH-kyi, neh-SY svoh-YEE moh-HOOT-nee VOH-dy kreez' vee-KY doh CHOR-noh-hoh MOHR-yah!)",
          "translation": "Mighty Dnipro, carry your powerful waters through the centuries to the Black Sea!"
        }
      ],
      "mnemonics": [
        "«Україно!» гордо лине понад світом; «Козаче!» кличе пісня сонцесяйним цвітом!"
      ],
      "culturalNotes": [
        "Тарас Шевченко у своїх творах геніально застосовував кличний відмінок для одухотворення України: «Ой діброво — темний гаю!», «Україно, Україно! Серце моє, ненько!»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть поетичну форму кличного відмінка для назви нашої держави України:",
          "options": [
            "Україно! (Poetic vocative of Ukraine)",
            "Україна!",
            "Україну!",
            "Україні!"
          ],
          "answerIndex": 0,
          "explanation": "Іменник твердої групи «Україна» у кличному відмінку має закінчення «-о»: «Україно!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка форма кличного відмінка від слова «козак» уживається у козацьких піснях та думах?",
          "options": [
            "Козаче! (Cossack vocative with k -> ch mutation)",
            "Козаку!",
            "Козак!",
            "Козаке!"
          ],
          "answerIndex": 0,
          "explanation": "Слово «козак» зазнає історичного чергування [к] на [ч] перед закінченням «-е»: «козаче!»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть поетичний рядок, в якому всі звертання граматично правильно вжиті у кличному відмінку:",
          "options": [
            "Земле рідна, сонце ясне, благословіть нашу дорогу!",
            "Земля рідна, сонце ясне, благословіть нашу дорогу!",
            "Землю рідна, сонцю ясне, благословіть нашу дорогу!",
            "Землі рідна, сонця ясне, благословіть нашу дорогу!"
          ],
          "answerIndex": 0,
          "explanation": "«Земле» (кличний відмінок від «земля») та «сонце» (кличний відмінок середнього роду) утворені бездоганно."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u4-l1": {
    "id": "uk-u4-l1",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 1,
    "title": "Перша дієвідміна дієслів: особові закінчення (-у/-ю, -еш/-єш, -е/-є, -емо/-ємо, -ете/-єте, -уть/-ють) (1st Conjugation)",
    "level": "A1",
    "objective": "Опанувати дієвідмінювання дієслів першої дієвідміни у теперішньому часі (визначення за формою 3-ї особи множини на -уть/-ють, тематичні голосні -е-/-є-).",
    "presentation": {
      "explanation": "В українській мові дієслова у теперішньому часі поділяються на дві дієвідміни залежно від особових закінчень:\n\n1. Ознака 1-ї дієвідміни:\n- У формі 3-ї особи множини (вони) мають закінчення «-уть» або «-ють» (наприклад: «чита-ють», «пиш-уть», «зна-ють», «працю-ють»).\n- В особових закінченнях 2-ї та 3-ї особи однини і 1-ї та 2-ї особи множини виступають тематичні голосні «-е-» (після приголосних) або «-є-» (після голосних).\n\n2. Парадигма відмінювання дієслова «читати» (після голосного):\n- Я чита-ю\n- Ти чита-єш\n- Він / Вона / Воно чита-є\n- Ми чита-ємо\n- Ви чита-єте\n- Вони чита-ють\n\n3. Парадигма відмінювання дієслова «писати» (після приголосного з чергуванням с/ш):\n- Я пиш-у\n- Ти пиш-еш\n- Він / Вона / Воно пиш-е\n- Ми пиш-емо\n- Ви пиш-ете\n- Вони пиш-уть",
      "examples": [
        {
          "target": "Щодня ми уважно читаємо нові статті та пишемо наукові тези.",
          "reading": "[ʃtʃɔdʲˈnʲɑ mɪ uˈwɑʒnɔ tʃɪˈtɑjɛmɔ nɔˈwʲi stɐtʲˈtʲi tɑ ˈpɪʃɛmɔ nɐuˈkɔwʲi ˈtɛzɪ] (shchohd-NYAH my oo-VAHZH-noh chy-TAH-yeh-moh noh-VEE staht-TEE tah PY-sheh-moh nah-oo-KOH-vee TEH-zy)",
          "translation": "Every day we attentively read new articles and write scientific theses."
        },
        {
          "target": "Ти вільно розмовляєш і добре знаєш українську мову?",
          "reading": "[tɪ ˈwʲilʲnɔ rɔzmɔwˈlʲɑjɛʃ i ˈdɔbrɛ znɑˈjɛʃ ukrɐˈjinʲsʲku ˈmɔwu] (TY VEEL'-noh roz-mov-LYAH-yesh ee DOH-breh znah-YESH oo-krah-YEEN-s'koo MOH-voo?)",
          "translation": "Do you speak fluently and know the Ukrainian language well?"
        },
        {
          "target": "Вони старанно працюють у сучасній науковій лабораторії.",
          "reading": "[wɔˈnɪ stɐˈrɑnːɔ prɐt͡sʲuˈjutʲ u suˈtʃɑsnʲij nɐuˈkɔwʲij lɐbɔrɐˈtɔrʲijɪ] (voh-NY stah-RAHN-noh praht-SYOO-yoot' oo soo-CHAHS-neey nah-oo-KOH-veey lah-boh-rah-TOH-ree-yee)",
          "translation": "They work diligently in a modern scientific laboratory."
        }
      ],
      "mnemonics": [
        "Вони чита-ють і пиш-уть сповна — перша дієвідміна звучить як весна: з «-є-» та з «-е-» усе пізнай!"
      ],
      "culturalNotes": [
        "Слово «працювати» є питомим українським дієсловом 1-ї дієвідміни, яке втілює прадавню українську культуру землеробської та інтелектуальної праці."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму дієслова 1-ї дієвідміни «знати» для займенника «ми»:",
          "options": [
            "Знаємо (We know - 1st conjugation)",
            "Знаїмо",
            "Знають",
            "Знаєш"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «знати» належить до 1-ї дієвідміни (вони зна-ють), тому для форми «ми» має закінчення «-ємо»: «ми знаємо»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "До якої дієвідміни належить дієслово «писати», якщо в 3-й особі множини воно має форму «пишуть»?",
          "options": [
            "До 1-ї дієвідміни (1st Conjugation: закінчення -уть/-ють)",
            "До 2-ї дієвідміни",
            "До невідмінюваних дієслів",
            "До безособових форм"
          ],
          "answerIndex": 0,
          "explanation": "Закінчення 3-ї особи множини «-уть / -ють» є безпомилковою ознакою 1-ї дієвідміни."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому всі дієслова 1-ї дієвідміни узгоджені граматично правильно:",
          "options": [
            "Студенти читають текст, перекладають слова та пишуть вправи.",
            "Студенти читаїть текст, перекладаять слова та пишать вправи.",
            "Студенти читаять текст, перекладаїть слова та пишуть вправи.",
            "Студенти читаєм текст, перекладаєм слова та пишем вправи."
          ],
          "answerIndex": 0,
          "explanation": "У 3-й особі множини дієслова 1-ї дієвідміни мають закінчення «-ють» та «-уть»: «читають», «перекладають», «пишуть»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u4-l2": {
    "id": "uk-u4-l2",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 2,
    "title": "Друга дієвідміна дієслів: особові закінчення (-у/-ю, -иш/-їш, -ить/-їть, -имо/-їмо, -ите/-їте, -ать/-ять) (2nd Conjugation)",
    "level": "A1",
    "objective": "Опанувати дієвідмінювання дієслів другої дієвідміни у теперішньому часі (визначення за формою 3-ї особи множини на -ать/-ять, тематичні голосні -и-/-ї-).",
    "presentation": {
      "explanation": "Друга дієвідміна (2nd Conjugation) об'єднує дієслова з тематичними голосними «-и-» або «-ї-» в особових закінченнях:\n\n1. Головна розпізнавальна ознака 2-ї дієвідміни:\n- У формі 3-ї особи множини (вони) дієслова закінчуються на «-ать» (після шиплячих) або «-ять» (наприклад: «говор-ять», «бач-ать», «сто-ять», «уч-ать»).\n\n2. Парадигма відмінювання дієслова «говорити»:\n- Я говор-ю\n- Ти говор-иш\n- Він / Вона / Воно говор-ить\n- Ми говор-имо\n- Ви говор-ите\n- Вони говор-ять\n\n3. Парадигма відмінювання дієслова «бачити» (після шиплячого [ч]):\n- Я бач-у\n- Ти бач-иш\n- Він / Вона / Воно бач-ить\n- Ми бач-имо\n- Ви бач-ите\n- Вони бач-ать",
      "examples": [
        {
          "target": "Ми завжди говоримо правду та щиро цінуємо справжню дружбу.",
          "reading": "[mɪ zɐwˈʒdɪ ɦɔwɔˈrɪmɔ ˈprɑwdu tɑ ˈʃtʃirɔ t͡sʲiˈnujɛmɔ sprɐwʒˈnʲu ˈdruʒbu] (my zahv-ZHDY hoh-voh-RY-moh PRAHV-doo tah SHCHEE-roh tsee-NOO-yeh-moh sprav-ZHNYOO DROOZH-boo)",
          "translation": "We always speak the truth and sincerely value genuine friendship."
        },
        {
          "target": "Він чудово бачить усі деталі на великій географічній карті.",
          "reading": "[wʲin tʃuˈdɔwɔ ˈbɑtʃɪtʲ uˈsʲi dɛˈtɑlʲi nɑ wɛˈlɪkʲij ɦɛɔɦrɐˈfʲitʃnʲij ˈkɑrtʲi] (VEEN choo-DOH-voh BAH-chyt' oo-SEE deh-TAH-lee nah veh-LY-keey heh-oh-hrah-FEECH-neey KAHR-tee)",
          "translation": "He sees all the details on the large geographical map wonderfully."
        },
        {
          "target": "Викладачі та студенти вільно говорять кількома іноземними мовами.",
          "reading": "[wɪklɐdɐˈtʃi tɑ stuˈdɛntɪ ˈwʲilʲnɔ ɦɔwɔˈrʲɑtʲ kʲilʲkɔˈmɑ inɔˈzɛmnɪmɪ ˈmɔwɐmɪ] (vy-klah-dah-CHEE tah stoo-DEN-ty VEEL'-noh hoh-vohr-YAHT' keel'-koh-MAH ee-noh-ZEM-ny-my MOH-vah-my)",
          "translation": "Lecturers and students speak several foreign languages fluently."
        }
      ],
      "mnemonics": [
        "Вони говор-ять, вони бач-ать — друга дієвідміна це значить: з буквою «-и-» і «-ї-» завжди іди!"
      ],
      "culturalNotes": [
        "Дієслово «бачити» в українській мові має глибоке світоглядне значення, пов'язане не лише з фізичним зором, але й із розумінням та усвідомленням суті речей («бачити правду»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму 2-ї особи однини (ти) від дієслова 2-ї дієвідміни «говорити»:",
          "options": [
            "Говориш (You speak - 2nd conjugation)",
            "Говореш",
            "Говорять",
            "Говорити"
          ],
          "answerIndex": 0,
          "explanation": "Дієслова 2-ї дієвідміни у 2-й особі однини мають закінчення «-иш»: «ти говориш»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення мають дієслова 2-ї дієвідміни у формі 3-ї особи множини (вони)?",
          "options": [
            "-ать / -ять (3rd person plural endings of 2nd conjugation)",
            "-уть / -ють",
            "-емо / -ємо",
            "-ете / -єте"
          ],
          "answerIndex": 0,
          "explanation": "Закінчення «-ать / -ять» є маркерною ознакою 2-ї дієвідміни дієслів."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ дієслова належать виключно до 2-ї дієвідміни:",
          "options": [
            "Говорити (говорять), бачити (бачать), любити (люблять)",
            "Читати (читають), знати (знають), писати (пишуть)",
            "Працювати (працюють), малювати (малюють), жити (живуть)",
            "Нести (несуть), вести (ведуть), пливти (пливуть)"
          ],
          "answerIndex": 0,
          "explanation": "Дієслова «говорити», «бачити», «любити» у формі 3-ї особи множини мають закінчення «-ять / -ать», тому належать до 2-ї дієвідміни."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u4-l3": {
    "id": "uk-u4-l3",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 3,
    "title": "Історичні чергування приголосних в основах дієслів теперішнього часу (Consonant Mutations in Verbs)",
    "level": "A1",
    "objective": "Опанувати чергування приголосних у дієсловах 1-ї дієвідміни в усіх особах (с/ш, з/ж, к/ч) та у 2-й дієвідміні в 1-й особі однини (д/дж, т/ч, з/ж, губні + л).",
    "presentation": {
      "explanation": "При дієвідмінюванні в українській мові відбуваються закономірні фонетичні чергування приголосних звуків:\n\n1. Чергування в 1-й дієвідміні (відбувається в УСІХ особах теперішнього часу):\n- [с] -> [ш]: «писати -> пишу, пишеш, пише, пишемо, пишете, пишуть».\n- [з] -> [ж]: «казати -> кажу, кажеш, каже, кажемо, кажете, кажуть».\n- [к] -> [ч]: «пекти -> печу, печеш, пече, печемо, печете, печуть».\n- [х] -> [ш]: «кохати -> кохаю / колихати -> колишу, колишеш».\n\n2. Чергування у 2-й дієвідміні (відбувається ЛИШЕ в 1-й особі однини «я»):\n- [д] -> [дж]: «ходити -> ходжу» (але: ходиш, ходить, ходимо, ходите, ходять).\n- [т] -> [ч]: «летіти -> лечу» (але: летиш, летить, летимо, летите, летять).\n- [з] -> [ж]: «возити -> вожу» (але: возиш, возить, возимо, возите, возять).\n- [с] -> [ш]: «просити -> прошу» (але: просиш, просить, просимо, просите, просять).\n- Губні [б, п, в, м, ф] + [л'] (епентетичний «л» у 1-й особі однини та 3-й множини):\n  • «Любити -> люблю, люблять» (але: любиш, любить, любимо, любите).\n  • «Спати -> сплю, сплять» (але: спиш, спить, спимо, спите).",
      "examples": [
        {
          "target": "Я пишу листа рідним, а мій друг каже цікаву історію.",
          "reading": "[jɑ pɪˈʃu lɪsˈtɑ ˈrʲidnɪm, ɑ mʲij druh ˈkɑʒɛ t͡sʲiˈkɑwu isˈtɔrʲiju] (YAH py-SHOO lys-TAH REED-nym, ah meey drooh KAH-zheh tsee-KAH-voo ees-TOH-ree-yoo)",
          "translation": "I write a letter to my relatives, and my friend tells an interesting story."
        },
        {
          "target": "Щоранку я ходжу пішки до університету та дихаю свіжим повітрям.",
          "reading": "[ʃtʃɔˈrɑŋku jɑ xɔˈdʒu ˈpʲiʃkɪ dɔ unʲiwɛrsɪˈtɛtu tɑ ˈdɪxɑju ˈsʲwʲiʒɪm pɔˈwʲitrʲɑm] (shchoh-RAHN-koo yah khoh-DZHOO PEESH-ky doh oo-nee-ver-sy-TEH-too tah DY-khah-yoo SVEE-zhym poh-VEET-ryahm)",
          "translation": "Every morning I walk to the university on foot and breathe fresh air."
        },
        {
          "target": "Я щиро люблю українську пісню та рідну мелодійну мову.",
          "reading": "[jɑ ˈʃtʃirɔ lʲubˈlʲu ukrɐˈjinʲsʲku ˈpʲisʲnʲu tɑ ˈrʲidnu mɛlɔˈdʲijnɔ ˈmɔwu] (yah SHCHEE-roh lyoo-BLYOO oo-krah-YEEN-s'koo PEES-n'oo tah REED-noo meh-loh-DEEY-noo MOH-voo)",
          "translation": "I sincerely love Ukrainian song and my native melodious language."
        }
      ],
      "mnemonics": [
        "«Ходити» — я ходжу, «любити» — я люблю; В 1-й особі звук новий я з радістю ловлю!"
      ],
      "culturalNotes": [
        "Поява вставного [л] у дієсловах з губними коренями («люблю», «сплю», «купую -> куплю») є найдавнішою праслов'янською фонетичною ознакою, що збереглася в живій українській мові."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть правильну форму 1-ї особи однини (я) від дієслова «ходити» з урахуванням чергування д/дж:",
          "options": [
            "Ходжу (I walk - Consonant mutation d -> dzh)",
            "Ходю",
            "Ходити",
            "Ходиш"
          ],
          "answerIndex": 0,
          "explanation": "У 2-й дієвідміні в 1-й особі однини звук [д] закономірно чергується з [дж]: «я ходжу»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка літера з'являється між губним приголосним [б] та закінченням у формі «я люблю»?",
          "options": [
            "Вставний звук «л» (Epenthetic l: люб-л-ю)",
            "Вставний звук «н»",
            "Вставний звук «в»",
            "Жодних звуків не з'являється"
          ],
          "answerIndex": 0,
          "explanation": "Після губних [б, п, в, м, ф] перед голосними [у], [а] виникає епентетичний (вставний) звук [л']: «любити -> люблю, люблять»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено граматичну помилку у формі дієслова з чергуванням:",
          "options": [
            "Я сидю на зручному стільці біля відчиненого вікна.",
            "Я сиджу на зручному стільці біля відчиненого вікна.",
            "Я пишу цікаву статтю про сучасну культуру.",
            "Я люблю прогулюватися вечірнім парком."
          ],
          "answerIndex": 0,
          "explanation": "Форма «сидю» є грубою помилкою. Правильна літературна форма з чергуванням [д] на [дж] — «я сиджу»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u4-l4": {
    "id": "uk-u4-l4",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 4,
    "title": "Зворотні дієслова на -ся / -сь у теперішньому часі та фонетика сполук -ться, -шся (Reflexive Verbs)",
    "level": "A1",
    "objective": "Опанувати творення та дієвідмінювання зворотних дієслів на -ся / -сь, чергування постфіксів за законами евфонії та орфоепічні норми вимови (-ться [ц':а], -шся [с':а]).",
    "presentation": {
      "explanation": "Зворотні дієслова (Reflexive Verbs) в українській мові позначають дію, спрямовану на самого виконавця, взаємну дію або постійний стан:\n\n1. Постфікси «-ся» та «-сь»:\n- Постфікс «-ся» вживається після приголосних (наприклад: «вчу-ся», «вчить-ся»).\n- Постфікс «-сь» за законами евфонії може вживатися після голосних звуків (наприклад: «вчите-ся» або «вчите-сь», «вчимо-ся» або «вчимо-сь»).\n\n2. Парадигма відмінювання дієслова «вчитися» (2-га дієвідміна):\n- Я вчу-ся\n- Ти вчиш-ся (вимовляється [вчѝс':а])\n- Він / Вона / Воно вчить-ся (вимовляється [вчѝц':а])\n- Ми вчимо-ся / вчимо-сь\n- Ви вчите-ся / вчите-сь\n- Вони вчать-ся (вимовляється [вчàц':а])\n\n3. Орфоепічні закони вимови:\n- На письмі пишемо «-ться», а вимовляємо м'який подовжений африкат: [ц':а] («сміється -> [сʲмʲijɛ́t͡sʲːɑ]»).\n- На письмі пишемо «-шся», а вимовляємо подовжений [с':а]: («смієшся -> [sʲmʲijɛ́sʲːɑ]»).",
      "examples": [
        {
          "target": "Студенти наполегливо вчаться та щодня зустрічаються в бібліотеці.",
          "reading": "[stuˈdɛntɪ nɐpɔˈlɛɦlɪwɔ ˈwtʃɑt͡sʲːɑ tɑ ʃtʃɔdʲˈnʲɑ zustrʲiˈtʃɑjutsʲɑ w bʲiblʲiɔˈtɛt͡sʲi] (stoo-DEN-ty nah-poh-LEH-hly-voh VCHAHT-syah tah shchohd-NYAH zoo-stree-CHAH-yoot-syah v beeb-lee-oh-TEH-tsee)",
          "translation": "Students study persistently and meet in the library every day."
        },
        {
          "target": "Ти завжди радісно посміхаєшся, коли бачиш своїх старих друзів.",
          "reading": "[tɪ zɐwˈʒdɪ ˈrɑdʲisnɔ pɔsʲmʲiˈxɑjɛsʲːɑ, kɔˈlɪ ˈbɑtʃɪʃ swɔˈjix stɐˈrɪx ˈdruzʲiw] (TY zahv-ZHDY RAH-dees-noh pos-mee-KHAH-yes-syah, koh-LY BAH-chysh svoh-YEEKH stah-RYKH DROO-zeev)",
          "translation": "You always smile joyfully when you see your old friends."
        },
        {
          "target": "Вранці сонце піднімається над Дніпром і місто прокидається від сну.",
          "reading": "[ˈwrɑnt͡sʲi ˈsɔntsɛ pʲidnʲiˈmɑjɛt͡sʲːɑ nɑd dnʲiˈprɔm i ˈmʲistɔ prɔkɪˈdɑjɛt͡sʲːɑ wʲid snu] (VRAHN-tsee SOHN-tseh peed-nee-MAH-yet-syah nahd dnee-PROHM ee MEES-toh proh-ky-DAH-yet-syah veed snoo)",
          "translation": "In the morning the sun rises over the Dnipro and the city wakes up from sleep."
        }
      ],
      "mnemonics": [
        "Пишемо «-ться» — вимовляємо [ц':а], пишемо «-шся» — вимовляємо [с':а]; Зворотне дієслово радісно ллється!"
      ],
      "culturalNotes": [
        "Орфоепічне правило вимови сполуки «-ться» як [ц':а] є однією з найхарактерніших ознак красивого та чистого українського літературного мовлення."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно вимовляється за нормами української орфоепії сполука літер «-ться» у слові «вчиться»?",
          "options": [
            "Як м'який подовжений звук [ц':а] ([вчѝц':а])",
            "Як роздільні звуки [т-с-я]",
            "Як твердий звук [тса]",
            "Як глухий звук [ша]"
          ],
          "answerIndex": 0,
          "explanation": "В українській літературній мові буквосполучення «-ться» завжди асимілюється та вимовляється як м'який подовжений африкат [ц':а]."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму зворотного дієслова «зустрічатися» для підмета «вони»:",
          "options": [
            "Зустрічаються (They meet - 3rd person plural)",
            "Зустрічається",
            "Зустрічаєшся",
            "Зустрічаємося"
          ],
          "answerIndex": 0,
          "explanation": "Для займенника «вони» дієслово 1-ї дієвідміни набуває форми «зустрічаються»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з граматично та орфографічно правильно побудованим зворотним дієсловом:",
          "options": [
            "Маленька дитина щиро сміється і тішиться новою іграшкою.",
            "Маленька дитина щиро смієця і тішиця новою іграшкою.",
            "Маленька дитина щиро смієтьсяться і тішитьсяться новою іграшкою.",
            "Маленька дитина щиро смієся і тішися новою іграшкою."
          ],
          "answerIndex": 0,
          "explanation": "На письмі зворотні форми 3-ї особи однини пишуться з «-ться»: «сміється», «тішиться»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u4-l5": {
    "id": "uk-u4-l5",
    "subject": "ukrainian",
    "unit": 4,
    "lessonNumber": 5,
    "title": "Нерегулярні та атематичні дієслова теперішнього часу: «бути», «їсти», «дати», «хотіти», «могти» (Irregular Verbs)",
    "level": "A1",
    "objective": "Опанувати парадигми атематичних дієслів (їсти, дати), дієслова бути у теперішньому часі та модальних дієслів (хотіти, могти).",
    "presentation": {
      "explanation": "В українській мові збереглася невелика, але фундаментальна група дієслів архаїчного (атематичного) та нерегулярного відмінювання:\n\n1. Дієслово «бути» (To be):\n- У сучасній літературній мові в теперішньому часі має одну універсальну незмінну форму «є» для всіх осіб і чисел (наприклад: «Він є лікарем», «Вони є студентами»).\n\n2. Атематичне дієслово «їсти» (To eat):\n- Я їм\n- Ти їси\n- Він / Вона / Воно їсть\n- Ми їмо\n- Ви їсте\n- Вони їдять\n\n3. Атематичне дієслово «дати» (To give):\n- Я дам (значення майбутнього) / даю (теперішній від давати)\n- Ти даси / даєш\n- Він / Вона дасть / дає\n- Ми дамо / даємо\n- Ви дасте / даєте\n- Вони дадуть / дають\n\n4. Дієслово «хотіти» (To want — мішане відмінювання):\n- Я хочу, Ти хочеш, Він хоче, Ми хочемо, Ви хочете, Вони хочуть.\n\n5. Дієслово «могти» (To be able/can):\n- Я можу, Ти можеш, Він може, Ми можемо, Ви можете, Вони можуть.",
      "examples": [
        {
          "target": "Вранці ми із задоволенням їмо смачний сніданок і п'ємо запашну каву.",
          "reading": "[ˈwrɑnt͡sʲi mɪ iz zɐdɔˈwɔlɛnʲːɐm jiˈmɔ smɐtʃˈnɪj sʲnʲiˈdɑnɔk i pʲjɛˈmɔ zɐpɐʃˈnu ˈkɑwu] (VRAHN-tsee my eez zah-doh-VOH-len-nyahm yee-MOH smahch-NYI snee-DAH-nohk ee p'yeh-MOH zah-pahsh-NOO KAH-voo)",
          "translation": "In the morning we gladly eat a delicious breakfast and drink aromatic coffee."
        },
        {
          "target": "Чи хочете ви піти з нами на виставку сучасного українського живопису?",
          "reading": "[tʃɪ ˈxɔtʃɛtɛ wɪ pʲiˈtɪ z ˈnɑmɪ nɑ ˈwɪstɐwku suˈtʃɑsnɔɦɔ ukrɐˈjinʲsʲkɔɦɔ ʒɪwɔˈpɪsu] (chy KHOH-cheh-teh vy pee-TY z NAH-my nah VYS-tahv-koo soo-CHAHS-noh-hoh oo-krah-YEEN-s'koh-hoh zhy-voh-PY-soo?)",
          "translation": "Do you want to go with us to the exhibition of contemporary Ukrainian painting?"
        },
        {
          "target": "Я можу вільно читати наукові статті та художні твори українською мовою.",
          "reading": "[jɑ ˈmɔʒu ˈwʲilʲnɔ tʃɪˈtɑtɪ nɐuˈkɔwʲi stɐtʲˈtʲi tɑ xuˈdɔʒnʲi ˈtwɔrɪ ukrɐˈjinʲsʲkɔju ˈmɔwɔju] (yah MOH-zhoo VEEL'-noh chy-TAH-ty nah-oo-KOH-vee staht-TEE tah khoo-DOZH-nee TVOH-ry oo-krah-YEEN-s'koh-yoo MOH-voh-yoo)",
          "translation": "I can freely read scientific articles and literary works in the Ukrainian language."
        }
      ],
      "mnemonics": [
        "Я їм, ти їси, а вони їдять смачненько; Я хочу, я можу — і все зроблю гарненько!"
      ],
      "culturalNotes": [
        "Традиційні формули гостинності «Їжте на здоров'я!» та «Просимо до столу!» є невіддільною частиною української кулінарної культури."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму атематичного дієслова «їсти» для займенника «ти»:",
          "options": [
            "Їси (You eat - Athematic verb)",
            "Їсиш",
            "Їсити",
            "Їсеш"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «їсти» є архаїчним атематичним дієсловом і в 2-й особі однини має унікальну форму «ти їси»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму дієслова «хотіти» для займенника «вони»:",
          "options": [
            "Хочуть (They want - 3rd person plural)",
            "Хотять",
            "Хотять-ся",
            "Хотіють"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «хотіти» у 3-й особі множини має нормативну форму «вони хочуть»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому всі форми дієслів «їсти», «хотіти» та «могти» вжито правильно:",
          "options": [
            "Ми їмо смачні вареники, бо дуже хочемо їсти і можемо добре відпочити.",
            "Ми їдемо смачні вареники, бо дуже хотять їсти і можем добре відпочити.",
            "Ми їсте смачні вареники, бо дуже хоче їсти і можуть добре відпочити.",
            "Ми їдять смачні вареники, бо дуже хочеш їсти і можеш добре відпочити."
          ],
          "answerIndex": 0,
          "explanation": "«Ми їмо», «ми хочемо», «ми можемо» — бездоганні граматичні форми для 1-ї особи множини."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u5-l1": {
    "id": "uk-u5-l1",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 1,
    "title": "Знахідний відмінок неістот чоловічого та середнього роду: прямий додаток та збіг із називним відмінком (Accusative Inanimate)",
    "level": "A1",
    "objective": "Опанувати синтаксичну функцію знахідного відмінка неістот (кого? що?) як прямого додатка після перехідних дієслів та правило збігу з формою називного відмінка.",
    "presentation": {
      "explanation": "Знахідний відмінок (Accusative Case / кого? що?) означає об'єкт, на який безпосередньо спрямована дія (прямий додаток / Direct Object):\n\n1. Основне граматичне правило для неістот (Inanimate Nouns):\n- Для всіх іменників неістот чоловічого та середнього роду форма знахідного відмінка повністю ЗБІГАЄТЬСЯ з формою називного відмінка (Accusative = Nominative).\n\n2. Чоловічий рід (неістоти):\n- «Називний: стіл / підручник / поїзд» -> «Знахідний: Я бачу стіл / підручник / поїзд».\n- «Я купую свіжий хліб і запашний чай».\n\n3. Середній рід (усі іменники):\n- «Називний: вікно / місто / море / завдання» -> «Знахідний: Ми любимо рідне місто, бачимо синє море та виконуємо домашнє завдання».\n\n4. Перехідні дієслова, що вимагають знахідного відмінка без прийменника:\n- «Бачити», «читати», «писати», «купувати», «слухати», «любити», «розуміти», «знати».",
      "examples": [
        {
          "target": "Щоранку я купую свіжий хліб, смачне масло та запашну каву.",
          "reading": "[ʃtʃɔˈrɑŋku jɑ kuˈpuju ˈsʲwʲiʒɪj xlʲib, smɐtʃˈnɛ ˈmɑslɔ tɑ zɐpɐʃˈnu ˈkɑwu] (shchoh-RAHN-koo yah koo-POO-yoo SVEE-zhyi khleeb, smahch-NEH MAHS-loh tah zah-pahsh-NOO KAH-voo)",
          "translation": "Every morning I buy fresh bread, delicious butter, and aromatic coffee."
        },
        {
          "target": "Туристи із захопленням оглядають старовинний львівський замок і величний собор.",
          "reading": "[tuˈrɪstɪ iz zɐxɔpˈlɛnʲːɐm ɔɦlʲɑˈdɑjutʲ stɐrɔˈwɪnːɪj ˈlʲwʲiwskɪj ˈzɑmɔk i wɛˈlɪtʃnɪj sɔˈbɔr] (too-RYS-ty eez zah-khohp-LEN-nyahm oh-hlyah-DAH-yoot' stah-roh-VYN-nyi LVEEV-s'kyi ZAH-mohk ee veh-LYCH-nyi soh-BOHR)",
          "translation": "Tourists admire the ancient Lviv castle and majestic cathedral with delight."
        },
        {
          "target": "Ми уважно слухаємо цікаве радіо та дивимося новий документальний фільм.",
          "reading": "[mɪ uˈwɑʒnɔ ˈsluxɑjɛmɔ t͡sʲiˈkɑwɛ ˈrɑdʲiɔ tɑ ˈdɪwɪmɔsʲɑ nɔˈwɪj dɔkumɛnˈtɑlʲnɪj fʲilʲm] (my oo-VAHZH-noh SLOO-khah-yeh-moh tsee-KAH-veh RAH-dee-oh tah DY-vy-mohs-yah noh-VYI doh-koo-men-TAHL'-nyi feel'm)",
          "translation": "We attentively listen to interesting radio and watch a new documentary film."
        }
      ],
      "mnemonics": [
        "Стіл і замок, місто й море — у знахіднім без змін стоять у розмові!"
      ],
      "culturalNotes": [
        "В українській мові прямий додаток без прийменника при перехідних дієсловах завжди маркує конкретність об'єкта, на відміну від родового відмінка при запереченні або частковості."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому іменник середнього роду вжито у формі знахідного відмінка без зміни форми:",
          "options": [
            "Я щовечора відчиняю вікно, щоб провітрити кімнату. (Accusative neuter inanimate)",
            "Я щовечора відчиняю вікна для протягу.",
            "Я щовечора біля вікна сиджу.",
            "Я щовечора у вікні бачу місяць."
          ],
          "answerIndex": 0,
          "explanation": "Іменник середнього роду «вікно» виступає прямим додатком після перехідного дієслова «відчиняю» і збігається з називним відмінком."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як змінюється форма іменника чоловічого роду неістоти «комп'ютер» у знахідному відмінку однини?",
          "options": [
            "Залишається незмінною: Я вмикаю комп'ютер (Accusative = Nominative for inanimate masculine)",
            "Набуває закінчення -а: комп'ютера",
            "Набуває закінчення -у: комп'ютеру",
            "Набуває закінчення -ом: комп'ютером"
          ],
          "answerIndex": 0,
          "explanation": "Для неістот чоловічого роду знахідний відмінок збігається з називним: «купую комп'ютер»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де всі прямі додатки є неістотами у знахідному відмінку:",
          "options": [
            "Учень читає підручник, пише конспект та малює плакат.",
            "Учень читає студента, пише викладача та малює друга.",
            "Учень від підручника пише конспектом для плаката.",
            "Учень підручнику пише конспекту на плакаті."
          ],
          "answerIndex": 0,
          "explanation": "Слова «підручник», «конспект», «плакат» — неістоти чоловічого роду у знахідному відмінку (збігаються з називним)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u5-l2": {
    "id": "uk-u5-l2",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 2,
    "title": "Знахідний відмінок іменників жіночого роду: закінчення -у / -ю та нульове закінчення III відміни (Accusative Feminine)",
    "level": "A1",
    "objective": "Опанувати творення знахідного відмінка жіночого роду (тверда основа на -у, м'яка основа на -ю, незмінні форми III відміни на приголосний).",
    "presentation": {
      "explanation": "Іменники жіночого роду в знахідному відмінку завжди чітко змінюють своє закінчення (за винятком III відміни):\n\n1. Тверда група (іменники на «-а») -> закінчення «-у»:\n- «Книга -> читаю книгу»\n- «Кава -> п'ю каву»\n- «Вода -> п'ю воду»\n- «Україна -> люблю Україну»\n- «Мова -> вивчаю українську мову»\n- «Мама -> цілую маму»\n\n2. М'яка та мішана групи (іменники на «-я») -> закінчення «-ю»:\n- «Пісня -> співаю пісню»\n- «Земля -> обробляю землю»\n- «Стаття -> пишу наукову статтю»\n- «Надія -> маю щиру надію»\n- «Бабуся -> обіймаю бабусю»\n\n3. Іменники III відміни (жіночий рід з основою на приголосний):\n- Збігаються з називним відмінком: «ніч -> люблю тиху ніч», «радість -> відчуваю радість», «любов -> дарую любов».\n\n4. Узгодження прикметників жіночого роду:\n- Прикметники жіночого роду набувають закінчення «-у» (тверда група) або «-ю» (м'яка група): «смачн-у каву», «нов-у сукню», «син-ю хустку».",
      "examples": [
        {
          "target": "Я щиро люблю свою рідну Україну та її багату співучу мову.",
          "reading": "[jɑ ˈʃtʃirɔ lʲubˈlʲu swɔˈju ˈrʲidnu ukrɐˈjinu tɑ jiji bɐˈɦɑtu sʲpʲiˈwutʃu ˈmɔwu] (yah SHCHEE-roh lyoo-BLYOO svoh-YOO REED-noo oo-krah-YEE-noo tah yee-YEE bah-HAH-too spee-VOO-choo MOH-voo)",
          "translation": "I sincerely love my native Ukraine and its rich, melodic language."
        },
        {
          "target": "Оксана читає нову наукову статтю та уважно аналізує кожну сторінку.",
          "reading": "[ɔkˈsɑnɐ tʃɪˈtɑjɛ nɔˈwu nɐuˈkɔwu stɐtʲˈtʲu tɑ uˈwɑʒnɔ ɐnɐlʲiˈzujɛ ˈkɔʒnu stɔˈrʲinku] (ohk-SAH-nah chy-TAH-yeh noh-VOO nah-oo-KOH-voo staht-TYOO tah oo-VAHZH-noh ah-nah-lee-ZOO-yeh KOHZH-noo stoh-REEN-koo)",
          "translation": "Oksana reads a new scientific article and attentively analyzes every page."
        },
        {
          "target": "Ми відчуваємо безмежну радість і щиру любов у родинному колі.",
          "reading": "[mɪ wʲidtʃuˈwɑjɛmɔ bɛzˈmɛʒnu ˈrɑdʲisʲtʲ i ˈʃtʃiru lʲuˈbɔw u rɔˈdɪnːɔmu ˈkɔlʲi] (my veed-choo-VAH-yeh-moh bez-MEZH-noo RAH-deest' ee SHCHEE-roo lyoo-BOV oo roh-DYN-noh-moo KOH-lee)",
          "translation": "We feel boundless joy and sincere love in the family circle."
        }
      ],
      "mnemonics": [
        "Буква «-а» на «-у» збігає, буква «-я» на «-ю» лунає: бачу пісню, пий кавусю — все у знахіднім я пізнаю!"
      ],
      "culturalNotes": [
        "Фраза «Я люблю Україну!» зі знахідним відмінком слова «Україна» є найважливішим виявом національної гідності та патріотизму для кожного українця."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Поставте слово «книга» у форму знахідного відмінка однини в реченні «Я читаю цікаву ...»:",
          "options": [
            "Книгу (Accusative feminine in -u)",
            "Книги",
            "Книзі",
            "Книгою"
          ],
          "answerIndex": 0,
          "explanation": "Іменник жіночого роду твердої групи «книга» у знахідному відмінку набуває закінчення «-у»: «читаю цікаву книгу»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення матиме іменник «пісня» у знахідному відмінку однини?",
          "options": [
            "Закінчення -ю: співаю пісню (Feminine soft stem in -ia takes -iu)",
            "Закінчення -у: співаю пісну",
            "Закінчення -і: співаю пісні",
            "Закінчення -е: співаю пісне"
          ],
          "answerIndex": 0,
          "explanation": "Іменники жіночого роду м'якої групи на «-я» у знахідному відмінку мають закінчення «-ю»: «пісню»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому всі іменники та прикметники жіночого роду правильно вжиті у знахідному відмінку:",
          "options": [
            "Вранці ми п'ємо гарячу запашну каву та слухаємо гарну українську пісню.",
            "Вранці ми п'ємо гаряча запашна кава та слухаємо гарна українська пісня.",
            "Вранці ми п'ємо гарячої запашної кави та слухаємо гарній українській пісні.",
            "Вранці ми п'ємо гарячим запашним кавом та слухаємо гарним українським піснем."
          ],
          "answerIndex": 0,
          "explanation": "«Гарячу запашну каву» та «гарну українську пісню» — бездоганні форми знахідного відмінка жіночого роду з узгодженими прикметниками."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u5-l3": {
    "id": "uk-u5-l3",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 3,
    "title": "Знахідний відмінок істот чоловічого роду: категорія істоти та збіг із родовим відмінком (-а / -я) (Accusative Animate Masculine)",
    "level": "A1",
    "objective": "Опанувати граматичну категорію істот чоловічого роду в знахідному відмінку та правило збігу з родовим відмінком (Accusative = Genitive).",
    "presentation": {
      "explanation": "В українській мові діє фундаментальна граматична опозиція між істотами (люди, тварини) та неістотами (предмети, явища):\n\n1. Правило для істот чоловічого роду (Animate Masculine Nouns):\n- Форма знахідного відмінка іменників-істот чоловічого роду повністю ЗБІГАЄТЬСЯ з формою родового відмінка (Accusative = Genitive):\n  • Тверда основа -> закінчення «-а»: «брат -> бачу брата», «студент -> запитую студента», «друг -> зустрічаю друга», «кіт -> годую кота», «пес -> кличу пса».\n  • М'яка основа -> закінчення «-я»: «вчитель -> слухаю вчителя», «лікар -> відвідую лікаря», «Андрій -> знаю Андрія», «хлопець -> бачу хлопця».\n\n2. Контрастне порівняння істота vs неістота:\n- Неістота (Accusative = Nominative): «Я бачу новий стіл / тролейбус / телефон».\n- Істота (Accusative = Genitive): «Я бачу нового студента / викладача / лікаря».\n\n3. Узгодження прикметників для істот:\n- Прикметники чоловічого роду при іменниках-істотах також набувають форми родового відмінка: «-ого» / «-ього» («бачу добр-ого друга», «знаю син-ього птаха»).",
      "examples": [
        {
          "target": "В університеті я зустрів свого давнього друга та мудрого викладача.",
          "reading": "[w unʲiwɛrsɪˈtɛtʲi jɑ zusˈtrʲiw swɔˈjɔɦɔ ˈdɑwnʲɔɦɔ ˈdruɦɑ tɑ ˈmudrɔɦɔ wɪklɐdɐˈtʃɑ] (v oo-nee-ver-sy-TEH-tee yah zoo-STREEV svoh-YOH-hoh DAHV-n'oh-hoh DROO-hah tah MOO-droh-hoh vy-klah-dah-CHAH)",
          "translation": "At the university I met my old friend and a wise lecturer."
        },
        {
          "target": "Маленький хлопчик лагідно гладить пухнастого кота та вірного собаку.",
          "reading": "[mɐˈlɛnʲkɪj ˈxlɔptʃɪk ˈlɑɦʲidnɔ ˈɦlɑdʲitʲ puxˈnɑstɔɦɔ kɔˈtɑ tɑ ˈwʲirnɔɦɔ sɔˈbɑku] (mah-LEN'-kyi KLOHP-chyk LAH-heed-noh HLAH-deet' pookh-NAHS-toh-hoh koh-TAH tah VEER-noh-hoh soh-BAH-koo)",
          "translation": "The little boy gently pets the fluffy cat and faithful dog."
        },
        {
          "target": "Ми щодня бачимо талановитого лікаря в сучасній міській лікарні.",
          "reading": "[mɪ ʃtʃɔdʲˈnʲɑ ˈbɑtʃɪmɔ tɐlɐnɔˈwɪtɔɦɔ ˈlʲikɐrʲɑ w suˈtʃɑsnʲij mʲisʲˈkʲij ˈlʲikɐrnʲi] (my shchohd-NYAH BAH-chy-moh tah-lah-noh-VY-toh-hoh LEE-kahr-yah v soo-CHAHS-neey mees'-KEEY lee-KAHR-nee)",
          "translation": "Every day we see the talented doctor in the modern municipal hospital."
        }
      ],
      "mnemonics": [
        "Якщо істота — звук «-а» чи «-я» додай, форму родового для знахідного відкривай!"
      ],
      "culturalNotes": [
        "Розрізнення істот і неістот у знахідному відмінку є прадавньою категорією слов'янської мовної картини світу, що ставить людину і живу природу в особливий граматичний статус."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому іменник-істота чоловічого роду правильно вжитий у знахідному відмінку:",
          "options": [
            "Я бачу свого рідного брата біля входу в театр. (Animate masculine Accusative = Genitive)",
            "Я бачу свій рідний брат біля входу в театр.",
            "Я бачу своєму рідному брату біля входу в театр.",
            "Я бачу своїм рідним братом біля входу в театр."
          ],
          "answerIndex": 0,
          "explanation": "Слово «брат» є істотою, тому в знахідному відмінку має форму родового відмінка: «бачу брата»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "У якому варіанті правильно протиставлено неістоту та істоту в знахідному відмінку?",
          "options": [
            "Купую журнал (неістота) — чекаю журналіста (істота) (Inanimate = Nom, Animate = Gen)",
            "Купую журнала — чекаю журналіст",
            "Купую журналом — чекаю журналістом",
            "Купую журналі — чекаю журналісті"
          ],
          "answerIndex": 0,
          "explanation": "Неістота збігається з називним («журнал»), а істота має закінчення -а («журналіста»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де допущено помилку у формі знахідного відмінка іменника-істоти:",
          "options": [
            "Студенти поважають свій викладач за високий професіоналізм.",
            "Студенти поважають свого викладача за високий професіоналізм.",
            "Ми запрошуємо відомого письменника на творчу зустріч.",
            "Діти годують маленького кошеня і песика."
          ],
          "answerIndex": 0,
          "explanation": "Іменник «викладач» є істотою чоловічого роду, тому у знахідному відмінку вимагає форми «свого викладача» замість «свій викладач»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u5-l4": {
    "id": "uk-u5-l4",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 4,
    "title": "Знахідний відмінок особових займенників: безприйменникові форми та форми з початковим «н-» (Accusative Pronouns)",
    "level": "A1",
    "objective": "Опанувати відмінювання особових займенників у знахідному відмінку (мене, тебе, його/нього, її/неї, нас, вас, їх/них) та появу приставного звука [н] після прийменників.",
    "presentation": {
      "explanation": "Особові займенники у знахідному відмінку виступають прямими додатками або об'єктами прийменникового керування:\n\n1. Парадигма особових займенників у знахідному відмінку:\n- Я -> мене («Ти чуєш мене?»)\n- Ти -> тебе («Я люблю тебе!»)\n- Він -> його / після прийменника: на нього, про нього, через нього\n- Вона -> її / після прийменника: на неї, про неї, крізь неї\n- Воно -> його / після прийменника: на нього\n- Ми -> нас («Вони запрошують нас у гості»)\n- Ви -> вас («Ми щиро вітаємо вас!»)\n- Вони -> їх / після прийменника: на них, про них, крізь них\n\n2. Фонетичне правило появи приставного «н-»:\n- Після будь-якого просторового чи граматичного прийменника (в, на, за, про, через) форми 3-ї особи (він, вона, воно, вони) ОБОВ'ЯЗКОВО отримують початковий приголосний [н]: «на нього», «про неї», «крізь них».",
      "examples": [
        {
          "target": "Я щиро дякую вам за допомогу і з нетерпінням чекаю на вас.",
          "reading": "[jɑ ˈʃtʃirɔ ˈdʲɑkuju wɑm zɑ dɔpɔˈmɔɦu i z nɛtɛrˈpʲinʲːɐm tʃɛˈkɑju nɑ wɑs] (yah SHCHEE-roh DYAH-koo-yoo vahm zah doh-poh-MOH-hoo ee z neh-ter-PEEN-nyahm cheh-KAH-yoo nah vahs)",
          "translation": "I sincerely thank you for the help and eagerly look forward to seeing you."
        },
        {
          "target": "Він уважно дивиться на неї та слухає кожне її слово.",
          "reading": "[wʲin uˈwɑʒnɔ ˈdɪwɪt͡sʲːɑ nɑ ˈnɛji tɑ ˈsluxɑjɛ ˈkɔʒnɛ jiji ˈslɔwɔ] (VEEN oo-VAHZH-noh DY-vyt-syah nah NEH-yee tah SLOO-khah-yeh KOHZH-neh yee-YEE SLOH-voh)",
          "translation": "He looks at her attentively and listens to her every word."
        },
        {
          "target": "Ми добре знаємо їх і часто запрошуємо на наші родинні свята.",
          "reading": "[mɪ ˈdɔbrɛ znɑˈjɛmɔ jix i ˈtʃɑstɔ zɐprɔˈʃujɛmɔ nɑ ˈnɑʃi rɔˈdɪnːi ˈsʲwʲɑtɐ] (my DOH-breh znah-YEH-moh yeekh ee CHAHS-toh zah-proh-SHOO-yeh-moh nah NAH-shee roh-DYN-nee SVYAH-tah)",
          "translation": "We know them well and often invite them to our family celebrations."
        }
      ],
      "mnemonics": [
        "Мене й тебе, нас і вас — знахідний кличе повсякчас; З прийменником приставне «н-» не забувай: на нього й на неї поглядай!"
      ],
      "culturalNotes": [
        "Вживання форм із приставним [н] («на нього», «через неї») є найважливішою рисою правильної української мовної культури, що запобігає калькуванню."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму займенника 3-ї особи чоловічого роду з прийменником «на» у знахідному відмінку:",
          "options": [
            "Дивлюся на нього (Accusative 3rd person with prepositional n-)",
            "Дивлюся на його",
            "Дивлюся на йому",
            "Дивлюся на нім"
          ],
          "answerIndex": 0,
          "explanation": "Після прийменника займенник 3-ї особи обов'язково набуває початкового приставного «н»: «на нього»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте займенник «ти» у форму знахідного відмінка у виразі «Я чудово розумію ...»:",
          "options": [
            "Тебе (I understand you - Accusative)",
            "Тобі",
            "Тобою",
            "Ти"
          ],
          "answerIndex": 0,
          "explanation": "Займенник «ти» у знахідному відмінку має форму «тебе»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де особові займенники у знахідному відмінку вжиті граматично правильно:",
          "options": [
            "Викладач запитує мене, а я уважно слухаю його та дивлюся на нього.",
            "Викладач запитує мені, а я уважно слухаю його та дивлюся на його.",
            "Викладач запитує мною, а я уважно слухаю йому та дивлюся на ньому.",
            "Викладач запитує я, а я уважно слухаю він та дивлюся на він."
          ],
          "answerIndex": 0,
          "explanation": "«Запитує мене» (прямий додаток), «слухаю його» (без прийменника), «дивлюся на нього» (з прийменником і приставним н-) — бездоганні форми."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u5-l5": {
    "id": "uk-u5-l5",
    "subject": "ukrainian",
    "unit": 5,
    "lessonNumber": 5,
    "title": "Знахідний відмінок із просторовими прийменниками напрямку та руху: «в/у», «на», «за», «крізь», «через» (Accusative of Motion)",
    "level": "A1",
    "objective": "Опанувати вживання знахідного відмінка з прийменниками в/у, на, за, крізь, через для позначення мети й напрямку руху (Куди?) на противагу місцевому відмінку (Де?).",
    "presentation": {
      "explanation": "Знахідний відмінок відповідає на питання «Куди?» (Direction / Destination) при дієсловах руху (йти, їхати, бігти, летіти, прямувати):\n\n1. Прийменники «в / у» та «на» з питанням «Куди?» (Знахідний відмінок):\n- «У місто / в університет / у Львів / в Україну» (напрямок усередину).\n- «На виставку / на концерт / на вокзал / на площу» (напрямок на відкриту площину або захід).\n\n2. Диференціація «Куди? (Знахідний)» vs «Де? (Місцевий)»:\n- Знахідний (рух, динаміка): «Я йду в парк / на пошту».\n- Місцевий (знаходження, статика): «Я гуляю в парку / на пошті».\n\n3. Прийменники «через» та «крізь»:\n- «Через»: подолання перешкоди чи простору («переходити через вулицю», «їхати через міст»).\n- «Крізь»: рух крізь товщу («пробиватися крізь туман», «дивитися крізь вікно»).\n\n4. Прийменник «за» (рух за межі або по щось):\n- «Сонце сідає за обрій», «іти за хлібом (Орудний)» vs «зайти за ріг (Знахідний)».\n\n5. Закони евфонії прийменників «в / у»:\n- «Їдемо в Одесу» (після голосного перед голосним) vs «Ідемо у Львів» (між приголосними).",
      "examples": [
        {
          "target": "Завтра вранці ми вирушаємо в Київ на всеукраїнську наукову конференцію.",
          "reading": "[ˈzɑwtrɐ ˈwrɑnt͡sʲi mɪ wɪruˈʃɑjɛmɔ w ˈkɪjiw nɑ wsɛukrɐˈjinʲsʲku nɐuˈkɔwu kɔnfɛˈrɛntsʲiju] (ZAHV-trah VRAHN-tsee my vy-roo-SHAH-yeh-moh v KY-yeev nah vseh-oo-krah-YEEN-s'koo nah-oo-KOH-voo kohn-feh-REN-tsee-yoo)",
          "translation": "Tomorrow morning we set out to Kyiv for the all-Ukrainian scientific conference."
        },
        {
          "target": "Пішоходи безпечно переходять через широку вулицю по зеленому переходу.",
          "reading": "[pʲiʃɔˈxɔdɪ bɛzˈpɛtʃnɔ pɛrɛˈxɔdʲɑtʲ ˈtʃɛrɛz ʃɪˈrɔku ˈwulɪt͡sʲu pɔ zɛˈlɛnɔmu pɛrɛˈxɔdu] (pee-shoh-KHOH-dy bez-PEHCH-noh peh-reh-KHOHD-yaht' CHEH-rez shy-ROH-koo VOO-ly-tsoo poh zeh-LEH-noh-moo peh-reh-KHOH-doo)",
          "translation": "Pedestrians safely cross the wide street at the green crosswalk."
        },
        {
          "target": "Яскраве сонячне проміння пробивається крізь густі хмари.",
          "reading": "[jɐsˈkrɑwɛ ˈsɔnʲɑtʃnɛ prɔˈmʲinʲːɑ prɔbɪˈwɑjɛt͡sʲːɑ krʲizʲ husʲˈtʲi ˈxmɑrɪ] (yahs-KRAH-veh SOH-nyahch-neh proh-MEEN-nyah proh-by-VAH-yet-syah kreez' hoos-TEE KHMAH-ry)",
          "translation": "Bright sunlight breaks through the dense clouds."
        }
      ],
      "mnemonics": [
        "«Куди?» — у місто, на вокзал, через річку і місток; Знахідний напрямку покаже кожен крок!"
      ],
      "culturalNotes": [
        "Вживання конструкції «в Україну» (замість застарілої та ідеологічно маркованої колоніальної конструкції з «на») є суворою державною та академічною нормою сучасної української мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, де прийменник зі знахідним відмінком позначає напрямок руху (питання «Куди?»):",
          "options": [
            "Ми поспішаємо на цікаву лекцію в головний корпус університету. (Motion towards: Accusative)",
            "Ми сидимо на цікавій лекції в головному корпусі.",
            "Ми говорили про цікаву лекцію вчора.",
            "Ми задоволені цікавою лекцією сьогодні."
          ],
          "answerIndex": 0,
          "explanation": "Конструкція «поспішаємо на лекцію в корпус» відповідає на питання «Куди?» і вимагає знахідного відмінка."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який прийменник найкраще підходить для позначення подолання перешкоди в реченні «Ми їдемо ... міст через Дніпро»?",
          "options": [
            "Через (Through/across + Accusative)",
            "У",
            "На",
            "При"
          ],
          "answerIndex": 0,
          "explanation": "Прийменник «через» зі знахідним відмінком позначає рух крізь простір або подолання мосту / річки: «через міст»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому дотримано правил української мови щодо позначення напрямку поїздки до суверенної держави:",
          "options": [
            "Міжнародна делегація з офіційним візитом прибуває в Україну.",
            "Міжнародна делегація з офіційним візитом прибуває на Україну.",
            "Міжнародна делегація з офіційним візитом прибуває до Україні.",
            "Міжнародна делегація з офіційним візитом прибуває у Україною."
          ],
          "answerIndex": 0,
          "explanation": "Нормативною формою для позначення напрямку руху до суверенної держави Україна є «в Україну» (знахідний відмінок з прийменником в)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u6-l1": {
    "id": "uk-u6-l1",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 1,
    "title": "Родовий відмінок: вираження присвійності та синтаксис конструкцій приналежності (Genitive Possession)",
    "level": "A2",
    "objective": "Опанувати вираження посесивності та приналежності за допомогою родового відмінка (кого? чого?), питання чий/чия/чиє/чиї та синтаксичні моделі означення.",
    "presentation": {
      "explanation": "Родовий відмінок (Genitive Case / кого? чого?) є одним із найуживаніших непрямих відмінків і слугує основним засобом вираження присвійності:\n\n1. Вираження приналежності (Possession / чий? чия? чиє? чиї?):\n- В українській мові приналежність виражається конструкцією «Іменник (об'єкт) + Іменник у родовому відмінку (власник)»:\n  • «Книга (чия?) викладача»\n  • «Будинок (чий?) мого рідного брата»\n  • «Столиця (чого?) незалежної України»\n  • «Історія (чого?) українського народу»\n  • «Голос (кого?) відомої співачки»\n\n2. Питальні речення для з'ясування власника:\n- «Чий це підручник?» — «Це підручник нашого професора.»\n- «Чия це аудиторія?» — «Це аудиторія першого курсу.»\n- «Чиє це пальто?» — «Це пальто мого друга.»\n\n3. Співвідношення з присвійними прикметниками:\n- Конструкція з родовим відмінком («кабінет директора») є універсальною та стилістично нейтральною порівняно з присвійними прикметниками («директорів кабінет»).",
      "examples": [
        {
          "target": "Київ — серце української культури та історичний центр нашої держави.",
          "reading": "[ˈkɪjiw — ˈsɛrt͡sɛ ukrɐˈjinʲsʲkɔjɪ kulʲˈturɪ tɑ istɔˈrɪtʃnɪj t͡sɛntr ˈnɑʃɔjɪ dɛrˈʒɑwɪ] (KY-yeev — SER-tseh oo-krah-YEEN-s'koh-yee kool'-TOO-ry tah ees-toh-RYCH-nyi TSENTR NAH-shoh-yee der-ZHAH-vy)",
          "translation": "Kyiv is the heart of Ukrainian culture and the historical center of our state."
        },
        {
          "target": "Ми уважно вивчаємо наукові праці видатного українського вченого.",
          "reading": "[mɪ uˈwɑʒnɔ wɪwˈtʃɑjɛmɔ nɐuˈkɔwʲi ˈprɑt͡sʲi wɪdɐtˈnɔɦɔ ukrɐˈjinʲsʲkɔɦɔ ˈwtʃɛnɔɦɔ] (my oo-VAHZH-noh vyv-CHAH-yeh-moh nah-oo-KOH-vee PRAH-tsee vy-daht-NOH-hoh oo-krah-YEEN-s'koh-hoh VCHEH-noh-hoh)",
          "translation": "We attentively study the scientific works of the prominent Ukrainian scholar."
        },
        {
          "target": "Це затишний кабінет нашого нового декана факультету філології.",
          "reading": "[t͡sɛ ˈzɑtɪʃnɪj kɐbʲiˈnɛt ˈnɑʃɔɦɔ nɔˈwɔɦɔ dɛˈkɑnɑ fɐkulʲˈtɛtu fʲilɔˈlɔɦijɪ] (tseh ZAH-tysh-nyi kah-bee-NET NAH-shoh-hoh noh-VOH-hoh deh-KAH-nah fah-kool'-TEH-too fee-loh-LOH-hee-yee)",
          "translation": "This is the cozy office of our new dean of the faculty of philology."
        }
      ],
      "mnemonics": [
        "«Кого?» і «Чого?» — чия річ, покажи; Родовий відмінок володаря надійно збережи!"
      ],
      "culturalNotes": [
        "Формули шанобливого ставлення до предків та родової пам'яті («пам'ять роду», «земля батьків») традиційно оформлюються в українській мові саме конструкціями родового відмінка."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому правильно виражено значення приналежності за допомогою родового відмінка:",
          "options": [
            "Це новий автомобіль мого старшого брата. (Genitive of possession: чий?)",
            "Це новий автомобіль моєму старшому брату.",
            "Це новий автомобіль моїм старшим братом.",
            "Це новий автомобіль на моєму старшому братові."
          ],
          "answerIndex": 0,
          "explanation": "Конструкція «автомобіль мого старшого брата» відповідає на питання «Чий?» і граматично бездоганно вжита у родовому відмінку."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно запитати українською мовою, кому належить ця книга?",
          "options": [
            "Чия це книга? (Whose book is this?)",
            "Хто це книга?",
            "Кому це книга?",
            "Ким це книга?"
          ],
          "answerIndex": 0,
          "explanation": "Питальний займенник «Чия?» узгоджується з іменником жіночого роду «книга» у називному відмінку для з'ясування посесивності."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть варіант, де всі залежні іменники виражають приналежність у родовому відмінку:",
          "options": [
            "Лекція професора, кабінет директора, відповідь студента",
            "Лекція професором, кабінет директором, відповідь студентом",
            "Лекція професорові, кабінет директору, відповідь студенту",
            "Лекція професорі, кабінет директорі, відповідь студенті"
          ],
          "answerIndex": 0,
          "explanation": "Слова «професора», «директора», «студента» стоять у формі родового відмінка однини і позначають власників дій або об'єктів."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u6-l2": {
    "id": "uk-u6-l2",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 2,
    "title": "Родовий відмінок при запереченні: частка «не» та безособові конструкції з «немає / нема» (Genitive of Negation)",
    "level": "A2",
    "objective": "Опанувати обов'язкове вживання родового відмінка при заперечних дієсловах (замість знахідного) та в безособових реченнях зі словом «немає/нема».",
    "presentation": {
      "explanation": "В українській мові діє залізне граматичне правило заперечного керування:\n\n1. Заперечення прямого додатка (частка «не» + дієслово):\n- Якщо перехідне дієслово вживається із заперечною часткою «не», прямий додаток майже завжди переходить зі знахідного у родовий відмінок:\n  • Ствердження (Знахідний): «Я читаю статтю / маю час / бачу результат».\n  • Заперечення (Родовий): «Я не читаю статті / не маю часу / не бачу результату».\n\n2. Безособові конструкції зі словом «немає / нема» (There is no...):\n- На позначення відсутності особи, предмета чи явища вживається слово «немає» (скорочено «нема»), а іменник обов'язково ставиться в родовий відмінок:\n  • «У мене немає вільного часу».\n  • «Сьогодні немає занять в університеті».\n  • «У селі немає швидкісного метро».\n  • «Тут немає жодного сумніву».\n\n3. Минулий та майбутній час заперечного буття:\n- Минулий час: «Не було (чого?) часу / занять».\n- Майбутній час: «Не буде (чого?) дощу / проблем».",
      "examples": [
        {
          "target": "Сьогодні в мене зовсім немає вільного часу для тривалого відпочинку.",
          "reading": "[sʲɔˈɦɔdnʲi w ˈmɛnɛ ˈzɔwsʲim nɛˈmɑjɛ ˈwʲilʲnɔɦɔ ˈt͡ʃɑsu dlʲɑ trɪˈwɑlɔɦɔ wʲidpɔˈtʃɪnku] (syoh-HOHD-nee v MEH-neh ZOV-seem neh-MAH-yeh VEEL'-noh-hoh CHAH-soo dlyah try-VAH-loh-hoh veed-poh-CHYN-koo)",
          "translation": "Today I have absolutely no free time for a long rest."
        },
        {
          "target": "Студент не зрозумів цього складного правила та не виконав домашнього завдання.",
          "reading": "[stuˈdɛnt nɛ zrɔzuˈmʲiw ˈt͡sʲɔɦɔ sklɐdˈnɔɦɔ ˈprɑwɪlɑ tɑ nɛ ˈwɪkɔnɐw dɔˈmɑʃnʲɔɦɔ zɐwˈdɑnʲːɑ] (stoo-DENT neh zroh-zoo-MEEV TS'OH-hoh sklahd-NOH-hoh PRAH-vy-lah tah neh VY-koh-nahv doh-MAHSH-n'oh-hoh zahv-DAHN-nyah)",
          "translation": "The student did not understand this complex rule and did not complete the homework."
        },
        {
          "target": "У нас немає жодних сумнівів щодо світлого майбутнього нашої країни.",
          "reading": "[u nɑs nɛˈmɑjɛ ˈʒɔdnɪx sumˈnʲiwʲiw ʃtʃɔˈdɔ ˈsʲwʲitlɔɦɔ mɐjˈbutnʲɔɦɔ ˈnɑʃɔjɪ krɐˈjinɪ] (oo NAHS neh-MAH-yeh ZHOHD-nykh soom-NEE-veev shchoh-DOH SVEET-loh-hoh my-BOOT-n'oh-hoh NAH-shoh-yee krah-YEE-ny)",
          "translation": "We have no doubts regarding the bright future of our country."
        }
      ],
      "mnemonics": [
        "«Не» стоїть перед дієсловом, «немає» лунає щомиті — у родовому відмінку всі речі розкриті!"
      ],
      "culturalNotes": [
        "Збереження родового відмінка при запереченні є важливою ознакою автентичного українського синтаксису, що протистоїть впливу мов з аналітичним запереченням."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення з правильним граматичним оформленням заперечної конструкції:",
          "options": [
            "У нас сьогодні немає жодного важливого уроку. (Genitive after немає)",
            "У нас сьогодні немає жодний важливий урок.",
            "У нас сьогодні немає жодному важливому уроку.",
            "У нас сьогодні немає жодним важливим уроком."
          ],
          "answerIndex": 0,
          "explanation": "Після безособового слова «немає» іменники та прикметники обов'язково ставляться у формі родового відмінка: «немає жодного уроку»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно трансформувати ствердне речення «Я знаю відповідь» у заперечне?",
          "options": [
            "Я не знаю відповіді (Genitive with negative verb)",
            "Я не знаю відповідь",
            "Я не знаю відповіддю",
            "Я не знаю відповідістю"
          ],
          "answerIndex": 0,
          "explanation": "При запереченні прямий додаток вимагає родового відмінка: «не знаю відповіді»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де допущено синтаксичну помилку при запереченні:",
          "options": [
            "Я не бачу цей цікавий фільм сьогодні ввечері.",
            "Я не бачу цього цікавого фільму сьогодні ввечері.",
            "У бібліотеці немає потрібного підручника.",
            "Ми не чуємо твого голосу крізь шум."
          ],
          "answerIndex": 0,
          "explanation": "Речення «Я не бачу цей цікавий фільм» містить помилку (вжито знахідний замість родового). Правильно: «Я не бачу цього цікавого фільму»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u6-l3": {
    "id": "uk-u6-l3",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 3,
    "title": "Закінчення родового відмінка іменників чоловічого роду: диференціація -а/-я та -у/-ю (Genitive -a/-ya vs -u/-yu)",
    "level": "A2",
    "objective": "Опанувати правила розмежування закінчень -а/-я (істоти, конкретні предмети, міста, міри) та -у/-ю (речовини, збірні, абстрактні поняття, країни) у чоловічому роді родового відмінка.",
    "presentation": {
      "explanation": "В українській мові іменники чоловічого роду II відміни у родовому відмінку мають два типи закінчень: «-а / -я» або «-у / -ю»:\n\n1. Закінчення «-а / -я» мають:\n- Назви істот: «брата», «студента», «кота», «вчителя».\n- Чітко окреслені конкретні предмети: «стола», «ножа», «олівця», «автомобіля», «паперу -> папірця».\n- Назви міст та населених пунктів: «Києва», «Львова», «Харкова», «Парижа», «Лондона».\n- Точні часові відрізки, дні, місяці: «дня», «тижня», «січня», «травня», «вересня».\n- Грошові одиниці та міри: «долара», «євра», «метра», «кілограма».\n\n2. Закінчення «-у / -ю» мають:\n- Речовини, матеріали, продукти: «цукру», «чаю», «меду», «піску», «кисню».\n- Збірні поняття: «народу», «лісу», «гайку», «колективу», «парку».\n- Абстрактні поняття, явища природи, почуття, процеси: «миру», «болю», «руху», «успіху», «розвитку», «морозу», «вітру».\n- Назви країн, континентів, регіонів: «Китаю», «Єгипту», «Кавказу», «Донбасу» (але: назви з суфіксами -ськ: «Сибіру»).\n- Установи, організації, будівлі взагалі: «університету», «інституту», «заводу», «вокзалу».",
      "examples": [
        {
          "target": "Ми вирушаємо з Києва до Львова наприкінці травня для наукового розвитку.",
          "reading": "[mɪ wɪruˈʃɑjɛmɔ z ˈkɪjɛwɑ dɔ ˈlʲwɔwɑ nɐprɪˈkʲint͡sʲi ˈtrɑwnʲɑ dlʲɑ nɐuˈkɔwɔɦɔ rɔzˈwɪtku] (my vy-roo-SHAH-yeh-moh z KY-yeh-vah doh LVOH-vah nah-pry-KEEN-tsee TRAHV-n'ah dlyah nah-oo-KOH-voh-hoh roz-VYT-koo)",
          "translation": "We set out from Kyiv to Lviv at the end of May for scientific development."
        },
        {
          "target": "Він випив чашку запашного гарячого чаю з ложкою свіжого меду.",
          "reading": "[wʲin ˈwɪpɪw ˈtʃɑʃku zɐpɐʃˈnɔɦɔ ɦɐˈrʲɑtʃɔɦɔ ˈtʃɑju z ˈlɔʒkɔju ˈsʲwʲiʒɔɦɔ ˈmɛdu] (VEEN VY-pyv CHAHSH-koo zah-pahsh-NOH-hoh hah-RYAH-choh-hoh CHAH-yoo z LOHZH-koh-yoo SVEE-zhoh-hoh MEH-doo)",
          "translation": "He drank a cup of aromatic hot tea with a spoonful of fresh honey."
        },
        {
          "target": "Біля нового вокзалу немає жодного вільного автомобіля.",
          "reading": "[ˈbʲilʲɑ nɔˈwɔɦɔ wɔkˈzɑlu nɛˈmɑjɛ ˈʒɔdnɔɦɔ ˈwʲilʲnɔɦɔ ɐwtɔmɔˈbʲilʲɑ] (BEE-lyah noh-VOH-hoh vohk-ZAH-loo neh-MAH-yeh ZHOHD-noh-hoh VEEL'-noh-hoh ahv-toh-moh-BEE-lyah)",
          "translation": "Near the new station there is not a single available automobile."
        }
      ],
      "mnemonics": [
        "Місто, місяць і предмет — «-а» напише нам поет; А речовина, почуття і рух — «-у» потішить серце й слух!"
      ],
      "culturalNotes": [
        "Розмежування закінчень -а/-у в родовому відмінку чоловічого роду є тонким барометром мовного чуття та високої культури українського мовлення."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну пару закінчень родового відмінка для міста Київ та речовини цукор:",
          "options": [
            "Києва (місто: -а) та цукру (речовина: -у)",
            "Києву та цукра",
            "Києва та цукра",
            "Києву та цукру"
          ],
          "answerIndex": 0,
          "explanation": "Назви міст мають закінчення «-а» («Києва»), а речовини — «-у» («цукру»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення матиме абстрактне слово «розвиток» у родовому відмінку однини?",
          "options": [
            "Закінчення -у: розвитку (Abstract concept takes -u)",
            "Закінчення -а: розвитка",
            "Закінчення -ом: розвитком",
            "Закінчення -е: розвитке"
          ],
          "answerIndex": 0,
          "explanation": "Абстрактні поняття та процеси у родовому відмінку чоловічого роду мають закінчення «-у»: «розвитку»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ іменники чоловічого роду в родовому відмінку мають закінчення «-а / -я»:",
          "options": [
            "Студента, стола, Харкова, січня, долара",
            "Чайку, миру, болю, народу, лісу",
            "Цукру, вітру, заводу, університету, руху",
            "Китаю, вокзалу, кисню, піску, меду"
          ],
          "answerIndex": 0,
          "explanation": "Істота («студента»), конкретний предмет («стола»), місто («Харкова»), місяць («січня»), валюта («долара») мають закінчення «-а»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u6-l4": {
    "id": "uk-u6-l4",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 4,
    "title": "Родовий відмінок іменників жіночого та середнього роду: парадигми відмінювання (Genitive Feminine & Neuter)",
    "level": "A2",
    "objective": "Опанувати творення родового відмінка жіночого роду (тверда основа на -и, м'яка на -і/-ї, III відміна на -і/-и) та середнього роду (на -а/-я).",
    "presentation": {
      "explanation": "Іменники жіночого та середнього роду у родовому відмінку однини мають такі чіткі регулярні парадигми:\n\n1. Жіночий рід (I відміна):\n- Тверда група (на «-а») -> закінчення «-и»:\n  • «Вода -> склянка води»\n  • «Мама -> порада мами»\n  • «Україна -> прапор України»\n  • «Книга -> сторінка книги»\n- М'яка та мішана групи (на «-я», «-а» після шиплячих) -> закінчення «-і» / «-ї»:\n  • «Пісня -> мелодія пісні»\n  • «Земля -> краса землі»\n  • «Мрія -> досягнення мрії»\n  • «Круча -> берег кручі»\n\n2. Жіночий рід (III відміна — на приголосний):\n- Закінчення «-і» (або паралельне нормативне закінчення «-и» за чинним правописом):\n  • «Ніч -> тиша ночі (ночи)»\n  • «Радість -> сльози радості (радости)»\n  • «Любов -> світло любові (любови)»\n\n3. Середній рід (II та IV відміни):\n- Закінчення «-а» (після твердих приголосних на -о):\n  • «Місто -> жителі міста», «село -> околиця села», «вікно -> скло вікна».\n- Закінчення «-я» (після м'яких та подовжених):\n  • «Море -> глибина моря», «життя -> сенс життя», «завдання -> умови завдання».",
      "examples": [
        {
          "target": "Студенти із захопленням слухають чарівну мелодію української народної пісні.",
          "reading": "[stuˈdɛntɪ iz zɐxɔpˈlɛnʲːɐm ˈsluxɑjutʲ tʃɐrʲiwˈnu mɛˈlɔdʲiju ukrɐˈjinʲsʲkɔjɪ nɐˈrɔdnɔjɪ ˈpʲisʲnʲi] (stoo-DEN-ty eez zah-khohp-LEN-nyahm SLOO-khah-yoot' chah-reev-NOO meh-LOH-dee-yoo oo-krah-YEEN-s'koh-yee nah-ROHD-noh-yee PEES-nee)",
          "translation": "Students listen with delight to the enchanting melody of a Ukrainian folk song."
        },
        {
          "target": "Жителі великого міста прагнуть до спокійного та гармонійного життя.",
          "reading": "[ˈʒɪtɛlʲi wɛˈlɪkɔɦɔ ˈmʲistɑ ˈprɑɦnutʲ dɔ spɔˈkʲijnɔɦɔ tɑ ɦɐrmɔˈnʲijnɔɦɔ ʒɪtʲˈtʲɑ] (ZHY-teh-lee veh-LY-koh-hoh MEES-tah PRAH-hnoot' doh spoh-KEEY-noh-hoh tah har-moh-NEEY-noh-hoh zhyt-TYAH)",
          "translation": "Residents of the large city strive for a peaceful and harmonious life."
        },
        {
          "target": "Немає нічого дорожчого за щире світло материнської любові.",
          "reading": "[nɛˈmɑjɛ nʲiˈtʃɔɦɔ dɔˈrɔʒtʃɔɦɔ zɑ ˈʃtʃirɛ ˈsʲwʲitlɔ mɐtɛˈrɪnsʲkɔjɪ lʲuˈbɔwʲi] (neh-MAH-yeh nee-CHOH-hoh doh-ROHZH-choh-hoh zah SHCHEE-reh SVEET-loh mah-teh-RYN-s'koh-yee lyoo-BOH-vee)",
          "translation": "There is nothing more precious than the sincere light of a mother's love."
        }
      ],
      "mnemonics": [
        "Вода — води, а пісня — пісні; Село — села, завдання — завдання: родовий відмінок лунає в пісні щодня!"
      ],
      "culturalNotes": [
        "Варіантні форми родового відмінка іменників III відміни на «-и» («радости», «любови», «незалежности») повертають українській мові її питомий історичний колорит згідно з правописом 2019 року."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму родового відмінка для жіночого слова «Україна»:",
          "options": [
            "України (Feminine hard stem Genitive ending in -y)",
            "Україні",
            "Україну",
            "Україною"
          ],
          "answerIndex": 0,
          "explanation": "Іменник твердої групи «Україна» у родовому відмінку має закінчення «-и»: «України»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення матиме іменник середнього роду «море» у родовому відмінку однини?",
          "options": [
            "Закінчення -я: моря (Neuter soft stem Genitive in -ya)",
            "Закінчення -а: мора",
            "Закінчення -у: мору",
            "Закінчення -і: морі"
          ],
          "answerIndex": 0,
          "explanation": "Іменники середнього роду з м'якою основою на «-е» у родовому відмінку мають закінчення «-я»: «моря»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де всі іменники жіночого та середнього роду правильно узгоджені у родовому відмінку:",
          "options": [
            "Біля мальовничого села немає великого озера та глибокої річки.",
            "Біля мальовничого селі немає великого озеру та глибокої річку.",
            "Біля мальовничого селом немає великого озером та глибокої річкою.",
            "Біля мальовничого село немає великого озеро та глибокої річка."
          ],
          "answerIndex": 0,
          "explanation": "«Села» (сер. рід, -а), «озера» (сер. рід, -а), «річки» (жін. рід, -и) — всі форми родового відмінка бездоганні."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u6-l5": {
    "id": "uk-u6-l5",
    "subject": "ukrainian",
    "unit": 6,
    "lessonNumber": 5,
    "title": "Родовий відмінок із фундаментальними прийменниками: «без», «до», «від», «для», «біля», «після», «з/із» (Genitive Prepositions)",
    "level": "A2",
    "objective": "Опанувати прийменникове керування родового відмінка з прийменниками простору, часу, мети та супроводу (без, до, від, для, біля, після, з/із/зі).",
    "presentation": {
      "explanation": "Родовий відмінок має найбільшу кількість специфічних прийменників в українській граматиці:\n\n1. Прийменники виключення та призначення:\n- «Без» (Without): «Кава без цукру», «жити без страху та тривоги».\n- «Для» (For): «Подарунок для сестри», «підручник для нового курсу».\n\n2. Прийменники напрямку, початкового та кінцевого пунктів руху:\n- «До» (To / Towards / Until): «Їхати до Києва», «працювати до вечора».\n- «Від» (From): «Лист від брата», «далеко від рідного дому».\n- «З / Із / Зі» (From / Out of): «Вийти з аудиторії», «приїхати з України», «зі школи».\n\n3. Прийменники розташування та часу:\n- «Біля / коло / поруч з» (Near): «Зустрінемося біля метро», «біля старого театру».\n- «Після» (After): «Після цікавого уроку», «після смачного обіду».\n- «Проти» (Against / Opposite): «Будинок стоїть проти парку», «голосувати проти рішення».",
      "examples": [
        {
          "target": "Після важкого робочого дня ми із задоволенням п'ємо чай без цукру біля затишного вікна.",
          "reading": "[ˈpʲisʲlʲɑ wɑʒˈkɔɦɔ rɔˈbɔtʃɔɦɔ dnʲɑ mɪ iz zɐdɔˈwɔlɛnʲːɐm pjɛmɔ tʃɑj bɛz ˈt͡sukru ˈbʲilʲɑ ˈzɑtɪʃnɔɦɔ wʲikˈnɑ] (PEES-lyah vahzh-KOH-hoh roh-BOH-choh-hoh dnyah my eez zah-doh-VOH-len-nyahm p'yeh-moh chy bez TSOO-kroo BEE-lyah ZAH-tysh-noh-hoh veek-NAH)",
          "translation": "After a hard workday we gladly drink tea without sugar near the cozy window."
        },
        {
          "target": "Потяг вирушає від центрального вокзалу Харкова до Києва о сьомій ранку.",
          "reading": "[ˈpɔtʲɑɦ wɪruˈʃɑjɛ wʲid t͡sɛntˈrɑlʲnɔɦɔ wɔkˈzɑlu ˈxɑrkɔwɑ dɔ ˈkɪjɛwɑ ɔ ˈsʲɔmʲij ˈrɑŋku] (POH-tyahk vy-roo-SHAH-yeh veed tsen-TRAHL'-noh-hoh vohk-ZAH-loo KHAHR-koh-vah doh KY-yeh-vah oh SYOH-meey RAHN-koo)",
          "translation": "The train departs from the central station of Kharkiv to Kyiv at seven in the morning."
        },
        {
          "target": "Це чудовий корисний посібник для старанного вивчення української мови.",
          "reading": "[t͡sɛ tʃuˈdɔwɪj kɔˈrɪsnɪj pɔˈsʲibnɪk dlʲɑ stɐˈrɑnːɔɦɔ ˈwɪwtʃɛnʲːɑ ukrɐˈjinʲsʲkɔjɪ ˈmɔwɪ] (tseh choo-DOH-vyi koh-RYS-nyi poh-SEEB-nyk dlyah stah-RAHN-noh-hoh VYV-chen-nyah oo-krah-YEEN-s'koh-yee MOH-vy)",
          "translation": "This is a wonderful useful manual for the diligent study of the Ukrainian language."
        }
      ],
      "mnemonics": [
        "Без, до, від, для, біля й після — у родовому відмінку лунає пісня!"
      ],
      "culturalNotes": [
        "Прийменник «до» в українській мові використовується для позначення руху до осіб і населених пунктів («іду до лікаря», «їду до Києва»), де в інших мовах можуть вживатися інші відмінки."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, де всі іменники після прийменників вжиті у правильній формі родового відмінка:",
          "options": [
            "Ми дісталися від вокзалу до університету без жодних перешкод. (Prepositions of Genitive: від, до, без)",
            "Ми дісталися від вокзалом до університетом без жодних перешкод.",
            "Ми дісталися від вокзалі до університеті без жодних перешкод.",
            "Ми дісталися від вокзалу до університету без жодними перешкодами."
          ],
          "answerIndex": 0,
          "explanation": "Прийменники «від», «до», «без» вимагають виключно родового відмінка: «від вокзалу», «до університету», «без перешкод»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який відмінок вимагає прийменник «для» у виразі «подарунок для ... (сестра)»?",
          "options": [
            "Родовий відмінок: для сестри (Preposition dlya requires Genitive)",
            "Давальний відмінок: для сестрі",
            "Знахідний відмінок: для сестру",
            "Орудний відмінок: для сестрою"
          ],
          "answerIndex": 0,
          "explanation": "Прийменник «для» в українській мові керує виключно родовим відмінком: «для сестри»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено помилку у прийменниковому керуванні родового відмінка:",
          "options": [
            "Після уроці ми пішли до бібліотеці за книгою.",
            "Після уроку ми пішли до бібліотеки за книгою.",
            "Біля театру ми зустріли давнього друга.",
            "Він п'є каву без цукру та молока."
          ],
          "answerIndex": 0,
          "explanation": "У реченні «Після уроці ми пішли до бібліотеці» помилково вжито місцевий/давальний відмінок. Прийменники «після» та «до» вимагають родового відмінка: «після уроку до бібліотеки»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u7-l1": {
    "id": "uk-u7-l1",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 1,
    "title": "Орудний відмінок без прийменника: знаряддя дії та засоби пересування (Instrumental of Means & Transport)",
    "level": "A2",
    "objective": "Опанувати безприйменниковий орудний відмінок (ким? чим?) на позначення знаряддя праці, інструмента дії та засобу транспорту.",
    "presentation": {
      "explanation": "Орудний відмінок (Instrumental Case / ким? чим?) позначає засіб, знаряддя або інструмент, за допомогою якого виконується дія:\n\n1. Знаряддя праці та інструменти (без прийменника):\n- «Писати (чим?) кульковою ручкою / простим олівцем»\n- «Різати свіжий хліб гострим ножем»\n- «Їсти гарячий суп столовою ложкою, а другу страву — виделкою»\n- «Малювати мальовничий краєвид олійними фарбами»\n\n2. Засоби пересування та транспорту:\n- «Подорожувати Україною швидкісним поїздом»\n- «Летіти до Європи сучасним літаком»\n- «Їхати на роботу міським автобусом або метрополітеном»\n\n3. Синтаксична роль:\n- У реченні безприйменниковий орудний виступає непрямим додатком зі значенням знаряддя або обставиною способу дії (наприклад: «співати тихим голосом», «йти швидким кроком»).",
      "examples": [
        {
          "target": "Студенти старанно пишуть конспекти лекцій синьою ручкою у великих зошитах.",
          "reading": "[stuˈdɛntɪ stɐˈrɑnːɔ ˈpɪʃutʲ kɔnˈspɛktɪ ˈlɛktsʲij ˈsɪnʲɔju ˈrutʃkɔju u wɛˈlɪkɪx ˈzɔʃɪtɐx] (stoo-DEN-ty stah-RAHN-noh PY-shoot' kohn-SPEK-ty LEK-tseey SY-n'oh-yoo ROOCH-koh-yoo oo veh-LY-kykh ZOH-shy-tahkh)",
          "translation": "Students diligently write lecture notes with a blue pen in large notebooks."
        },
        {
          "target": "Ми щоліта подорожуємо старовинними містами України зручним потягом.",
          "reading": "[mɪ ʃtʃɔˈlʲitɐ pɔdɔrɔˈʒujɛmɔ stɐrɔˈwɪnːɪmɪ mʲisˈtɑmɪ ukrɐˈjinɪ zrutʃˈnɪm ˈpɔtʲɑɦɔm] (my shchoh-LEE-tah poh-doh-roh-ZHOO-yeh-moh stah-roh-VYN-ny-my mees-TAH-my oo-krah-YEE-ny zrooch-NYM POH-tyah-hohm)",
          "translation": "Every summer we travel around the ancient cities of Ukraine by convenient train."
        },
        {
          "target": "Художник майстерно малює краєвид Карпат пензлем і яскравими фарбами.",
          "reading": "[xuˈdɔʒnɪk mɐjsʲˈtɛrnɔ mɐˈlʲujɛ krɐjɛˈwɪd kɐrˈpɑt ˈpɛnzlɛm i jɐsˈkrɑwɪmɪ ˈfɑrbɐmɪ] (khoo-DOZH-nyk my-STER-noh mah-LYOO-yeh krah-yeh-VYD kahr-PAHT PENZ-lem ee yahs-KRAH-vy-my FAHR-bah-my)",
          "translation": "The artist skillfully paints a Carpathian landscape with a brush and bright paints."
        }
      ],
      "mnemonics": [
        "«Ким?» і «Чим?» орудуй сміло — ручкою, ножем та пензлем роби діло!"
      ],
      "culturalNotes": [
        "Конструкція «їхати поїздом / автобусом» (в орудному відмінку без прийменника) є найбільш питомою та стилістично бездоганною нормою української мови, на відміну від калькованих прийменникових виразів."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому засіб пересування правильно вжито у формі орудного відмінка без прийменника:",
          "options": [
            "Ми щоранку добираємося до університету міським автобусом. (Instrumental of transport)",
            "Ми щоранку добираємося до університету міському автобусу.",
            "Ми щоранку добираємося до університету міським автобусі.",
            "Ми щоранку добираємося до університету на міським автобусом."
          ],
          "answerIndex": 0,
          "explanation": "В українській мові засіб пересування вживається в орудному відмінку без прийменника: «автобусом»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте слово «ручка» у форму орудного відмінка в реченні «Я пишу важливий лист ...»:",
          "options": [
            "Ручкою (Feminine Instrumental ending in -oju)",
            "Ручку",
            "Ручці",
            "Ручки"
          ],
          "answerIndex": 0,
          "explanation": "Іменник жіночого роду твердої групи «ручка» в орудному відмінку набуває закінчення «-ою»: «ручкою»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де всі знаряддя дії граматично правильно оформлені в орудному відмінку:",
          "options": [
            "Учень креслить креслення олівцем і лінійкою, а пише ручкою.",
            "Учень креслить креслення олівця і лінійку, а пише ручку.",
            "Учень креслить креслення олівцю і лінійці, а пише ручці.",
            "Учень креслить креслення олівцем і лінійком, а пише ручкем."
          ],
          "answerIndex": 0,
          "explanation": "«Олівцем» (чол. рід, -ем), «лінійкою» (жін. рід, -ою), «ручкою» (жін. рід, -ою) — бездоганні форми орудного відмінка."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u7-l2": {
    "id": "uk-u7-l2",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 2,
    "title": "Орудний відмінок із прийменником «з / зі / із»: супровід, спільна дія та закони евфонії (Accompaniment with Z/ZI)",
    "level": "A2",
    "objective": "Опанувати вживання орудного відмінка з прийменником з/зі/із на позначення супроводу (з ким? з чим?), сумісної дії, гастрономічних сполук та закони чергування з/зі/із.",
    "presentation": {
      "explanation": "Орудний відмінок із прийменником «з» (зі, із) виражає спільність, взаємодію або наявність додаткового компонента:\n\n1. Супровід та спільна дія (з ким?):\n- «Спілкуватися з викладачем / з рідним братом / з найкращою подругою»\n- «Йти в кіно з новими друзями»\n- «Працювати разом з колегами над проєктом»\n\n2. Гастрономічні сполуки та наявність складових (з чим?):\n- «Пити запашну каву з молоком / гарячий чай з лимоном та медом»\n- «Їсти свіжі українські вареники зі сметаною та вишнями»\n- «Бутерброд із сиром та ковбасою»\n\n3. Закони евфонії для прийменників «з / зі / із»:\n- «З»: перед голосними та більшістю приголосних («з батьком», «з мамою», «з олівцем»).\n- «Зі»: перед сполуками приголосних, що починаються на [з, с, ш, щ] та займенником «мною» («зі мною», «зі школи», «зі столу», «зі смаком»).\n- «Із»: між приголосними на межі слів для уникнення збігу приголосних («лист із Харкова», «бутерброд із сиром»).",
      "examples": [
        {
          "target": "Сьогодні ввечері ми з друзями п'ємо запашний чай із м'ятою та свіжим медом.",
          "reading": "[sʲɔˈɦɔdnʲi ˈwːɛtʃɛrʲi mɪ z ˈdruzʲɑmɪ pjɛmɔ zɐpɐʃˈnɪj tʃɑj iz ˈmjɑtɔju tɑ ˈsʲwʲiʒɪm ˈmɛdɔm] (syoh-HOHD-nee VVEH-cheh-ree my z DROOZ-yah-my p'yeh-moh zah-pahsh-NYI CHAHY eez MYAH-toh-yoo tah SVEE-zhym MEH-dohm)",
          "translation": "Tonight my friends and I drink aromatic tea with mint and fresh honey."
        },
        {
          "target": "Професор детально обговорює результати нового дослідження зі студентами.",
          "reading": "[prɔˈfɛsɔr dɛˈtɑlʲnɔ ɔbɦɔwɔˈrʲujɛ rɛzulʲˈtɑtɪ nɔˈwɔɦɔ dɔsʲˈlʲidʒɛnʲːɑ zʲi stuˈdɛntɐmɪ] (proh-FEH-sohr deh-TAHL'-noh ohb-hoh-vohr-YOO-yeh reh-zool'-TAH-ty noh-VOH-hoh doh-SLEED-zhen-nyah zee stoo-DEN-tah-my)",
          "translation": "The professor discusses the results of the new research in detail with the students."
        },
        {
          "target": "Марія з великим задоволенням гуляє мальовничим парком зі своєю сестрою.",
          "reading": "[mɐˈrʲijɑ z wɛˈlɪkɪm zɐdɔˈwɔlɛnʲːɐm ɦuˈlʲɑjɛ mɐlʲɔwˈnɪtʃɪm ˈpɑrkɔm zʲi swɔˈjɛju sɛsˈtrɔju] (mah-REE-yah z veh-LY-kym zah-doh-VOH-len-nyahm hoo-LYAH-yeh mah-lyov-NY-chym PAHR-kohm zee svoh-YEH-yoo ses-TROH-yoo)",
          "translation": "Maria walks through the picturesque park with her sister with great pleasure."
        }
      ],
      "mnemonics": [
        "З другом і подругою, з чаєм і сметаною; Зі мною та зі школи — з прийменником ми єдині!"
      ],
      "culturalNotes": [
        "Українська формула «Ми з тобою / ми з братом» означає «Я і ти / я і брат» і є питомою синтаксичною ідіомою для вираження тісного союзу та партнерства."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний евфонічний варіант прийменника з орудним відмінком у виразі «... мною розмовляли»:",
          "options": [
            "Зі мною (Euphonic zi before mn-)",
            "З мною",
            "Із мною",
            "С мною"
          ],
          "answerIndex": 0,
          "explanation": "Перед займенником «мною» за законами української евфонії вживається форма «зі»: «зі мною»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте слово «молоко» у форму орудного відмінка в гастрономічній сполуці «Кава з ...»:",
          "options": [
            "Молоком (Neuter Instrumental ending in -om)",
            "Молока",
            "Молоці",
            "Молоку"
          ],
          "answerIndex": 0,
          "explanation": "Іменник середнього роду «молоко» в орудному відмінку має закінчення «-ом»: «кава з молоком»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому дотримано правил евфонії та граматики орудного відмінка з прийменниками:",
          "options": [
            "Оксана смакує гарячі вареники зі сметаною та п'є чай із запашним лимоном.",
            "Оксана смакує гарячі вареники з сметаною та п'є чай з запашним лимоном.",
            "Оксана смакує гарячі вареники зі сметани та п'є чай із запашного лимона.",
            "Оксана смакує гарячі вареники с сметаною та п'є чай с запашним лимоном."
          ],
          "answerIndex": 0,
          "explanation": "«Зі сметаною» (перед с-), «із запашним лимоном» (між приголосними в орудному відмінку) — бездоганні форми."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u7-l3": {
    "id": "uk-u7-l3",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 3,
    "title": "Орудний відмінок у ролі іменної частини присудка: професії, посади, покликання та зміни стану (Predicate Instrumental)",
    "level": "A2",
    "objective": "Опанувати вживання орудного відмінка в ролі предиката після зв'язкових дієслів (бути, стати, працювати, називатися, вважатися) на позначення професій та соціального статусу.",
    "presentation": {
      "explanation": "В українській літературній мові орудний відмінок є головним засобом оформлення іменної частини складеного присудка при дієсловах стану та діяльності:\n\n1. Дієслово «бути» у минулому та майбутньому часі:\n- «Він був досвідченим інженером / талановитим лікарем»\n- «Вона буде успішною вченою / відомою перекладачкою»\n- (У теперішньому часі з нульовою зв'язкою вживається називний: «Він — інженер»).\n\n2. Дієслова зміни стану («стати», «зробитися»):\n- «Мій брат хоче стати дипломатом»\n- «Вона стала директоркою великої наукової бібліотеки»\n- «Київ став справжнім центром європейської інтеграції»\n\n3. Дієслова професійної діяльності та оцінки («працювати», «служити», «вважатися»):\n- «Оксана працює вчителькою української мови»\n- «Він вважається найкращим фахівцем у сфері комп'ютерних технологій»\n- «Це місто називається Києвом».",
      "examples": [
        {
          "target": "Після закінчення університету Тарас працює провідним інженером у міжнародній компанії.",
          "reading": "[ˈpʲisʲlʲɑ zɐkʲinˈtʃɛnʲːɑ unʲiwɛrsɪˈtɛtu tɐˈrɑs prɐt͡sʲuˈjɛ prɔwʲidˈnɪm inʒɛˈnɛrɔm u mʲiʒnɐˈrɔdnʲij kɔmˈpɑnʲijɪ] (PEES-lyah zah-keen-CHEN-nyah oo-nee-ver-sy-TEH-too tah-RAHS praht-SYOO-yeh proh-veed-NYM een-zheh-NEH-rohm oo meezh-nah-ROHD-neey kohm-PAH-nee-yee)",
          "translation": "After graduating from university, Taras works as a leading engineer in an international company."
        },
        {
          "target": "Моя старша сестра мріє стати професійною перекладачкою художньої літератури.",
          "reading": "[mɔˈjɑ ˈstɑrʃɐ sɛsˈtrɑ ˈmrʲijɛ ˈstɑtɪ prɔfɛˈsʲijnɔju pɛrɛklɐˈdɑtʃkɔju xuˈdɔʒnʲɔjɪ lʲitɛrɐˈturɪ] (moh-YAH STAHR-shah ses-TRAH MREE-yeh STAH-ty proh-feh-SEEY-noh-yoo peh-reh-klah-DAHCH-koh-yoo khoo-DOZH-n'oh-yee lee-teh-rah-TOO-ry)",
          "translation": "My older sister dreams of becoming a professional translator of literary works."
        },
        {
          "target": "Він був видатним науковцем і завжди залишався щирою та доброю людиною.",
          "reading": "[wʲin buw wɪdɐtˈnɪm nɐuˈkɔwtsɛm i zɐwˈʒdɪ zɐlɪˈʃɑwsʲɑ ˈʃtʃirɔju tɑ ˈdɔbrɔju lʲuˈdɪnɔju] (VEEN boov vy-daht-NYM nah-oo-KOV-tsem ee zahv-ZHDY zah-ly-SHAHV-syah SHCHEE-roh-yoo tah DOH-broh-yoo lyoo-DY-noh-yoo)",
          "translation": "He was a prominent scholar and always remained a sincere and kind person."
        }
      ],
      "mnemonics": [
        "Бути лікарем, стати вченим, працювати директором — орудний предикат веде професію завжди!"
      ],
      "culturalNotes": [
        "Вживання орудного відмінка з дієсловом «працювати» («працювати вчителем», а не «працювати як вчитель») є непорушним синтаксичним правилом нормативної української мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому посада та професія правильно оформлена предикативним орудним відмінком:",
          "options": [
            "Моя мама вже багато років працює головною лікаркою в міській лікарні. (Predicate Instrumental with працювати)",
            "Моя мама вже багато років працює головна лікарка в міській лікарні.",
            "Моя мама вже багато років працює як головна лікарка в міській лікарні.",
            "Моя мама вже багато років працює головній лікарці в міській лікарні."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «працювати» вимагає форми орудного відмінка без прийменника: «працює головною лікаркою»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте вираз «відомий вчений» у форму орудного відмінка після дієслова «хоче стати ...»:",
          "options": [
            "Відомим вченим (To become a prominent scholar - Instrumental)",
            "Відомий вчений",
            "Відомого вченого",
            "Відомому вченому"
          ],
          "answerIndex": 0,
          "explanation": "Після дієслова «стати» іменна частина присудка вживається в орудному відмінку: «стати відомим вченим»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з граматично правильно побудованим складеним присудком у минулому часі:",
          "options": [
            "Його дід був хоробрим козаком і мудрим отаманом.",
            "Його дід був хоробрий козак і мудрий отаман.",
            "Його дід був хороброго козака і мудрого отамана.",
            "Його дід був хороброму козаку і мудрому отаману."
          ],
          "answerIndex": 0,
          "explanation": "При дієслові «бути» у минулому часі предикат стоїть в орудному відмінку: «був хоробрим козаком і мудрим отаманом»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u7-l4": {
    "id": "uk-u7-l4",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 4,
    "title": "Морфологічні парадигми орудного відмінка: закінчення -ом/-ем/-єм, -ою/-ею/-єю та подвоєння у III відміні (Instrumental Morphology)",
    "level": "A2",
    "objective": "Опанувати повну систему закінчень орудного відмінка однини іменників I, II, III відмін (зокрема явище подовження/апострофа в III відміні: ніччю, сіллю, любов'ю).",
    "presentation": {
      "explanation": "Творення форм орудного відмінка однини в українській мові регулюється розподілом за групами основ та відмінами:\n\n1. Іменники II відміни (чоловічий та середній рід):\n- Тверда група -> закінчення «-ом»:\n  • «Брат -> братом», «стіл -> столом», «місто -> містом», «село -> селом».\n- М'яка група -> закінчення «-ем»:\n  • «Вчитель -> вчителем», «лікар -> лікарем», «море -> морем», «поле -> полем».\n- Основи на [й] -> закінчення «-єм»:\n  • «Гай -> гаєм», «край -> краєм», «життя -> життям», «завдання -> завданням».\n\n2. Іменники I відміни (жіночий та чоловічий рід на -а/-я):\n- Тверда група -> закінчення «-ою»:\n  • «Вода -> водою», «книга -> книгою», «мама -> мамою», «староста -> старостою».\n- М'яка та мішана групи -> закінчення «-ею»:\n  • «Земля -> землею», «пісня -> піснею», «душа -> душею», «круча -> кручею».\n- Основи на [й] -> закінчення «-єю»:\n  • «Мрія -> мрією», «надія -> надією», «стаття -> статтею».\n\n3. Іменники III відміни (жіночий рід на приголосний):\n- Якщо основа між двома голосними закінчується на один м'який приголосний -> ПОДВОЄННЯ (подовження):\n  • «Ніч -> ніччю», «сіль -> сіллю», «мідь -> міддю», «тінь -> тінню».\n- Якщо основа закінчується на збіг приголосних або губний [б, п, в, м, ф], «р» -> без подвоєння (з апострофом):\n  • «Радість -> радістю», «молодість -> молодістю», «любов -> любов'ю», «матір -> матір'ю».",
      "examples": [
        {
          "target": "Студенти з щирою радістю та безмежною гордістю вітають переможця олімпіади.",
          "reading": "[stuˈdɛntɪ z ˈʃtʃirɔju ˈrɑdʲisʲtʲu tɑ bɛzˈmɛʒnɔju ˈɦɔrdʲisʲtʲu wʲiˈtɑjutʲ pɛrɛˈmɔʒtsʲɑ ɔlʲimˈpʲiɑdɪ] (stoo-DEN-ty z SHCHEE-roh-yoo RAH-deest'-yoo tah bez-MEZH-noh-yoo HOR-deest'-yoo vee-TAH-yoot' peh-reh-MOHZH-tsyah oh-leem-PEE-ah-dy)",
          "translation": "Students congratulate the olympiad winner with sincere joy and boundless pride."
        },
        {
          "target": "Тихою темною ніччю над древнім містом яскраво сяють мільйони зірок.",
          "reading": "[ˈtɪxɔju ˈtɛmnɔju ˈnʲitʃːu nɑd ˈdrɛwnʲim ˈmʲistɔm jɐsˈkrɑwɔ ˈsʲɑjutʲ mʲilʲˈjɔnɪ zʲiˈrɔk] (TY-khoh-yoo TEM-noh-yoo NEECH-chyoo nahd DREV-neem MEES-tohm yahs-KRAH-voh SYAH-yoot' meel'-YOH-ny zee-ROHK)",
          "translation": "On a quiet dark night, millions of stars shine brightly over the ancient city."
        },
        {
          "target": "Він захищає рідну землю зі щирою синівською любов'ю в серці.",
          "reading": "[wʲin zɐxɪˈʃtʃɑjɛ ˈrʲidnu ˈzɛmlʲu zʲi ˈʃtʃirɔju sɪˈnʲiwsʲkɔju lʲuˈbɔwju w ˈsɛrt͡sʲi] (VEEN zah-khy-SHCHAH-yeh REED-noo ZEM-lyoo zee SHCHEE-roh-yoo sy-NEEV-s'koh-yoo lyoo-BOV-yoo v SER-tsee)",
          "translation": "He defends his native land with sincere filial love in his heart."
        }
      ],
      "mnemonics": [
        "Твердий — -ом та -ою враз; М'який — -ем та -ею в добрий час; Ніччю, сіллю — з подвоєнням лунає, любов'ю — апостроф не забуває!"
      ],
      "culturalNotes": [
        "Подовження приголосних в орудному відмінку III відміни («ніччю», «тінню», «пам'яттю») є однією з найвиразніших фонетичних перлин української мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть правильну форму орудного відмінка від іменника III відміни «ніч»:",
          "options": [
            "Ніччю (III declension doubling: ніч -> ніччю)",
            "Ніччу",
            "Ніччюю",
            "Ноччю"
          ],
          "answerIndex": 0,
          "explanation": "Іменник III відміни «ніч» в орудному відмінку однини має подовження шиплячого приголосного: «ніччю»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно пишеться форма орудного відмінка від слова «любов»?",
          "options": [
            "Любов'ю (Apostrophe after labial v before iu)",
            "Любоввю",
            "Любовю",
            "Любовою"
          ],
          "answerIndex": 0,
          "explanation": "Після губного [в] перед [ю] за правилами української орфографії пишеться апостроф: «любов'ю»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ іменники III відміни в орудному відмінку мають подвоєння (подовження) приголосного:",
          "options": [
            "Ніччю, сіллю, тінню, міддю, подорожжю",
            "Радістю, любов'ю, матір'ю, кров'ю, молодістю",
            "Братом, столом, селом, містом, вікном",
            "Землею, піснею, водою, книгою, мрією"
          ],
          "answerIndex": 0,
          "explanation": "«Ніччю», «сіллю», «тінню», «міддю», «подорожжю» мають одиночний м'який приголосний між голосними, що зазнає регулярного подовження."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u7-l5": {
    "id": "uk-u7-l5",
    "subject": "ukrainian",
    "unit": 7,
    "lessonNumber": 5,
    "title": "Орудний відмінок із просторовими прийменниками статичного розташування: «під», «над», «перед», «за», «між» (Spatial Instrumental)",
    "level": "A2",
    "objective": "Опанувати прийменникове керування орудного відмінка з просторовими прийменниками розташування (під, над, перед, за, між) на позначення місця (Де?).",
    "presentation": {
      "explanation": "Орудний відмінок відповідає на питання «Де?» (Location / Place) у поєднанні з просторовими прийменниками:\n\n1. Прийменники просторової орієнтації:\n- «Під» (Under / Below): «Під високим зеленим деревом», «під старим мостом».\n- «Над» (Above / Over): «Над могутнім Дніпром», «над золотими куполами Києва», «прапор майорить над будівлею».\n- «Перед» (In front of / Before): «Перед головним корпусом університету», «перед входом у театр».\n- «За» (Behind / Beyond): «За високим будинком», «за широкою річкою», «за містом на природі».\n- «Між» (Between / Among): «Між цими двома старовинними будинками», «між щирими друзями».\n\n2. Диференціація «Де? (Орудний)» vs «Куди? (Знахідний)»:\n- Орудний (статика, де?): «Птах літає над полем / сонце стоїть за хмарою».\n- Знахідний (динаміка, куди?): «Сонце сідає за хмару / птах злетів над поле».",
      "examples": [
        {
          "target": "Перед величним університетом цвітуть яскраві квіти, а над куполом майорить державний прапор.",
          "reading": "[ˈpɛrɛd wɛˈlɪtʃnɪm unʲiwɛrsɪˈtɛtɔm t͡sʲwʲiˈtutʲ jɐsˈkrɑwʲi ˈkwʲitɪ, ɑ nɑd ˈkupolɔm mɐjɔˈrɪtʲ dɛrˈʒɑwnɪj ˈprɑpɔr] (PEH-red veh-LYCH-nym oo-nee-ver-sy-TEH-tohm tsvee-TOOT' yahs-KRAH-vee KVEE-ty, ah nahd KOO-poh-lohm mah-yoh-RYT' der-ZHAHV-nyi PRAH-por)",
          "translation": "In front of the majestic university bright flowers blossom, and above the dome the national flag flies."
        },
        {
          "target": "За широкою річкою розкинувся густий ліс із віковими дубами.",
          "reading": "[zɑ ʃɪˈrɔkɔju ˈrʲitʃkɔju rɔzˈkɪnuwsʲɑ husˈtɪj lʲis iz wʲikɔˈwɪmɪ duˈbɑmɪ] (zah shy-ROH-koh-yoo REECH-koh-yoo roz-KY-noov-syah hoos-TYI LEES eez vee-koh-VY-my doo-BAH-my)",
          "translation": "Beyond the wide river stretches a dense forest with ancient oaks."
        },
        {
          "target": "Між нашими двома університетами існує тісна та плідна наукова співпраця.",
          "reading": "[mʲiʒ ˈnɑʃɪmɪ dwɔˈmɑ unʲiwɛrsɪˈtɛtɐmɪ isˈnujɛ tʲisˈnɑ tɑ ˈplʲidnɐ nɐuˈkɔwɐ sʲwʲipˈprɑt͡sʲɑ] (meezh NAH-shy-my dvoh-MAH oo-nee-ver-sy-TEH-tah-my ees-NOO-yeh tees-NAH tah PLEED-nah nah-oo-KOH-vah sveep-PRAH-tsyah)",
          "translation": "Between our two universities there exists close and fruitful scientific cooperation."
        }
      ],
      "mnemonics": [
        "Під, над, перед, за і між — де ти є, усім розкажи; В орудному відмінку простір опиши!"
      ],
      "culturalNotes": [
        "Образи «сонце над Дніпром», «зорі над степом», «хата під лісом» є класичними архетипами українського поетичного простору."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, де прийменник «перед» правильно керує орудним відмінком на позначення місця:",
          "options": [
            "Ми зустрілися перед центральним входом до театру. (Location: перед + Instrumental)",
            "Ми зустрілися перед центральний вхід до театру.",
            "Ми зустрілися перед центрального входу до театру.",
            "Ми зустрілися перед центральному входові до театру."
          ],
          "answerIndex": 0,
          "explanation": "Прийменник «перед» у значенні просторового розташування (Де?) керує орудним відмінком: «перед входом»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте слово «річка» у форму орудного відмінка після прийменника «за» у значенні «Де знаходиться село?»:",
          "options": [
            "За річкою (Beyond the river - Location in Instrumental)",
            "За річку",
            "За річки",
            "За річці"
          ],
          "answerIndex": 0,
          "explanation": "На питання «Де?» прийменник «за» вимагає орудного відмінка: «за річкою»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому всі просторові прийменники правильно вжиті з орудним відмінком:",
          "options": [
            "Під розлогим дубом і над тихою водою приємно відпочивати після довгої подорожі.",
            "Під розлогий дуб і над тиху воду приємно відпочивати після довгої подорожі.",
            "Під розлогому дубу і над тихій воді приємно відпочивати після довгої подорожі.",
            "Під розлогого дуба і над тихої води приємно відпочивати після довгої подорожі."
          ],
          "answerIndex": 0,
          "explanation": "«Під розлогим дубом» та «над тихою водою» відповідають на питання «Де?» і стоять в орудному відмінку."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u8-l1": {
    "id": "uk-u8-l1",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 1,
    "title": "Місцевий відмінок: статична локалізація та вибір прийменників «в / у» та «на» (Locative with V/U and NA)",
    "level": "A2",
    "objective": "Опанувати вживання місцевого відмінка (на кому? на чому? де?) для статичної просторової локалізації з диференціацією прийменників «в/у» та «на».",
    "presentation": {
      "explanation": "Місцевий відмінок (Locative Case / на кому? на чому? у кому? у чому?) є єдиним суто прийменниковим відмінком в українській мові й ніколи не вживається без прийменника:\n\n1. Прийменник «в / у» (всередині простору або території):\n- Країни, міста, регіони: «в Україні», «у Києві», «у Харкові», «у Львові».\n- Закриті приміщення та будівлі: «в аудиторії», «у великій кімнаті», «у театрі», «у бібліотеці», «в університеті».\n- Організації та сфери: «у школі», «в інституті», «у міністерстві».\n\n2. Прийменник «на» (на поверхні, на відкритому просторі або на подіях):\n- Поверхні предметів: «на столі», «на полиці», «на стіні», «на дошці».\n- Відкриті міські та природні простори: «на вулиці», «на широкому майдані», «на вокзалі», «на стадіоні», «на острові Хортиця».\n- Події, заходи, лекції: «на цікавій лекції», «на концерті», «на науковій конференції», «на іспиті».\n\n3. Питання «Де?»:\n- «Де ти зараз перебуваєш?» — «Я перебуваю в сучасній лабораторії на п'ятому поверсі університету.»",
      "examples": [
        {
          "target": "Студенти зараз уважно слухають лекцію з історії в головній аудиторії університету.",
          "reading": "[stuˈdɛntɪ ˈzɑrɐs uˈwɑʒnɔ ˈsluxɑjutʲ ˈlɛktsʲiju z isˈtɔrʲijɪ w ɦɔlɔwˈnʲij ɐudɪˈtɔrʲijɪ unʲiwɛrsɪˈtɛtu] (stoo-DEN-ty ZAH-rahs oo-VAHZH-noh SLOO-khah-yoot' LEK-tseeyoo z ees-TOH-ree-yee v hoh-lov-NEEY ow-dy-TOH-ree-yee oo-nee-ver-sy-TEH-too)",
          "translation": "The students are now attentively listening to a history lecture in the university's main auditorium."
        },
        {
          "target": "На центральному майдані нашого рідного міста завжди вирує активне життя.",
          "reading": "[nɑ t͡sɛntˈrɑlʲnɔmu mɐjˈdɑnʲi ˈnɑʃɔɦɔ ˈrʲidnɔɦɔ ˈmʲistɑ zɐwˈʒdɪ wɪˈrujɛ ɐkˈtɪwnɛ ʒɪtʲˈtʲɑ] (nah tsen-TRAHL'-noh-moo my-DAH-nee NAH-shoh-hoh REED-noh-hoh MEES-tah zahv-ZHDY vy-ROO-yeh ahk-TYV-neh zhyt-TYAH)",
          "translation": "Active life is always buzzing on the central square of our native city."
        },
        {
          "target": "У Києві на високих мальовничих пагорбах височіють золоті куполи святих храмів.",
          "reading": "[u ˈkɪjɛwʲi nɑ wɪˈsɔkɪx mɐlʲɔwˈnɪtʃɪx ˈpɑɦɔrbɐx wɪsɔˈtʃijutʲ zɔlɔˈtʲi ˈkupɔlɪ sʲwʲɑˈtɪx ˈxrɑmʲiw] (oo KY-yeh-vee nah vy-SOH-kykh mah-lyov-NY-chykh PAH-hor-bahkh vy-soh-CHEE-yoot' zoh-loh-TEE KOO-poh-ly svyah-TYKH KHRAH-meev)",
          "translation": "In Kyiv, on the high picturesque hills, the golden domes of holy temples rise high."
        }
      ],
      "mnemonics": [
        "«Де?» спитай — і прийменник шукай: У приміщенні «в/у» обирай, на поверхні та події «на» став без вагань!"
      ],
      "culturalNotes": [
        "Норма «в Україні» є фундаментальним маркером українського державного суверенітету, підкреслюючи статус країни як незалежної держави з чіткими кордонами."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому правильно вжито прийменник «на» з місцевим відмінком на позначення події:",
          "options": [
            "Ми зустріли старих друзів на цікавому концерті класичної музики. (Event location with NA: на концерті)",
            "Ми зустріли старих друзів в цікавому концерті класичної музики.",
            "Ми зустріли старих друзів до цікавого концерту класичної музики.",
            "Ми зустріли старих друзів з цікавим концертом класичної музики."
          ],
          "answerIndex": 0,
          "explanation": "Для позначення присутності на заходах та подіях (концерт, лекція, вистава) вживається прийменник «на» з місцевим відмінком: «на концерті»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте слово «стіл» у форму місцевого відмінка з прийменником «на»:",
          "options": [
            "На столі (On the table - Locative ending in -i)",
            "На столу",
            "На столом",
            "На стола"
          ],
          "answerIndex": 0,
          "explanation": "Іменник чоловічого роду «стіл» у місцевому відмінку на позначення поверхні має закінчення «-і»: «на столі»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ іменники правильно вжиті у формі місцевого відмінка з відповідними прийменниками:",
          "options": [
            "В аудиторії, на лекції, у Києві, на вокзалі, у театрі",
            "На аудиторії, в лекції, на Києві, в вокзалі, на театрі",
            "В аудиторію, на лекцію, у Київ, на вокзал, у театр",
            "В аудиторією, на лекцією, у Києвом, на вокзалом, у театром"
          ],
          "answerIndex": 0,
          "explanation": "Усі форми («в аудиторії», «на лекції», «у Києві», «на вокзалі», «у театрі») ідеально відповідають просторовим нормам місцевого відмінка."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u8-l2": {
    "id": "uk-u8-l2",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 2,
    "title": "Історичні чергування приголосних у місцевому відмінку: г->з, к->ц, х->с (Consonant Mutations in Locative)",
    "level": "A2",
    "objective": "Опанувати обов'язкові чергування приголосних другого перехідного пом'якшення (г -> з, к -> ц, х -> с) перед голосним закінченням -і у місцевому відмінку.",
    "presentation": {
      "explanation": "В українській мові перед закінченням місцевого відмінка «-і» приголосні основи обов'язково зазнають другого історичного чергування:\n\n1. Чергування [г] -> [з']:\n- «Книга -> у книзі»\n- «Дорога -> на дорозі»\n- «Нога -> на нозі»\n- «Берег -> на березі»\n- «Ольга -> на Ользі»\n\n2. Чергування [к] -> [ц']:\n- «Рука -> у руці»\n- «Річка -> на річці»\n- «Аптека -> в аптеці»\n- «Бібліотека -> у бібліотеці»\n- «Сторінка -> на сторінці»\n\n3. Чергування [х] -> [с']:\n- «Поверх -> на п'ятому поверсі»\n- «Рух -> у безперервному русі»\n- «Муха -> на мусі»\n- «Вухо -> у вусі»\n- «Стріха -> на стрісі»\n\n4. Важливість правила:\n- Порушення цього чергування (наприклад, вимова типу *в аптекі чи *на дорогі) є грубою орфоепічною та граматичною помилкою.",
      "examples": [
        {
          "target": "На кожній сторінці нової книги автор розмістив цінні наукові коментарі.",
          "reading": "[nɑ ˈkɔʒnʲij stɔˈrʲint͡sʲi nɔˈwɔjɪ ˈknɪɦɪ ˈɑwtɔr rɔzmʲisˈtɪw ˈt͡sʲinːʲi nɐuˈkɔwʲi kɔmɛnˈtɑrʲi] (nah KOZH-neey stoh-REEN-tsee noh-VOH-yee KNY-hy AHV-tohr roz-mees-TYV TSEEN-nee nah-oo-KOH-vee koh-men-TAH-ree)",
          "translation": "On each page of the new book the author placed valuable scientific commentaries."
        },
        {
          "target": "Студенти щодня працюють у затишній бібліотеці на третьому поверсі.",
          "reading": "[stuˈdɛntɪ ʃtʃɔdʲˈnʲɑ prɐt͡sʲuˈjutʲ u ˈzɑtɪʃnʲij bʲiblʲiɔˈtɛt͡sʲi nɑ ˈtrɛtʲɔmu ˈpɔwɛrsʲi] (stoo-DEN-ty shchohd-NYAH praht-SYOO-yoot' oo ZAH-tysh-neey beeb-lee-oh-TEH-tsee nah TRET'-oh-moo POH-ver-see)",
          "translation": "Students work every day in the cozy library on the third floor."
        },
        {
          "target": "На широкій асфальтованій дорозі завжди безпечно їхати з досвідченим водієм.",
          "reading": "[nɑ ʃɪˈrɔkʲij ɐsfɐlʲtɔˈwɑnʲij dɔˈrɔzʲi zɐwˈʒdɪ bɛzˈpɛtʃnɔ ˈjixɐtɪ z dɔsʲˈwʲidtʃɛnɪm wɔˈdʲijɛm] (nah shy-ROH-keey ahs-fahl'-toh-VAH-neey doh-ROH-zee zahv-ZHDY bez-PECH-noh YEE-khah-ty z dos-VEED-cheh-nym voh-DEE-yem)",
          "translation": "On a wide asphalt road it is always safe to drive with an experienced driver."
        }
      ],
      "mnemonics": [
        "Г — на З, К — на Ц, Х — на С: перед «-і» в місцевім відмінку твориться граматичний прогрес!"
      ],
      "culturalNotes": [
        "Чергування г/з, к/ц, х/с є прямим спадком праслов'янської мови, дбайливо збереженим у системі українського відмінювання як жива норма."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Поставте іменник «аптека» у правильну форму місцевого відмінка з прийменником «в»:",
          "options": [
            "В аптеці (k -> c mutation before -i)",
            "В аптекі",
            "В аптеку",
            "В аптеціє"
          ],
          "answerIndex": 0,
          "explanation": "Перед закінченням «-і» кінцевий приголосний основи [к] чергується з [ц']: «в аптеці»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку форму матиме вираз «на п'ятий поверх» при статичній локалізації (Де?):",
          "options": [
            "На п'ятому поверсі (x -> s mutation: поверх -> поверсі)",
            "На п'ятому поверху",
            "На п'ятому поверхові",
            "На п'ятому поверхі"
          ],
          "answerIndex": 0,
          "explanation": "Приголосний [х] перед «-і» чергується з [с']: «на п'ятому поверсі»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ чергування приголосних у місцевому відмінку виконано правильно:",
          "options": [
            "У книзі на сторінці надруковано фотографію замку на річці.",
            "У книгі на сторінкі надруковано фотографію замку на річкі.",
            "У книзі на сторінкі надруковано фотографію замку на річці.",
            "У книгі на сторінці надруковано фотографію замку на річкі."
          ],
          "answerIndex": 0,
          "explanation": "«Книзі» (г->з), «сторінці» (к->ц), «річці» (к->ц) — усі чергування реалізовано бездоганно."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u8-l3": {
    "id": "uk-u8-l3",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 3,
    "title": "Морфологічні закінчення місцевого відмінка: -і, -у/-ю та паралельні форми на -ові/-еві (Locative Endings -i, -u, -ovi)",
    "level": "A2",
    "objective": "Опанувати систему варіантних закінчень місцевого відмінка іменників чоловічого та середнього роду (-і, -у/-ю, -ові/-еві) з акцентом на назви істот.",
    "presentation": {
      "explanation": "Іменники чоловічого та середнього роду у місцевому відмінку однини мають три типи закінчень залежно від основи та лексичного значення:\n\n1. Закінчення «-і» (основне закінчення для неістот із твердою основою):\n- «Стіл -> на столі», «місто -> у місті», «село -> у селі», «вікно -> на вікні», «кабінет -> у кабінеті».\n\n2. Закінчення «-у / -ю»:\n- Іменники з основами на задньоязикові [г, к, х] та шиплячі (якщо не чергуються на -і): «у парку», «у ліску», «на шляху», «у степу», «у гаю», «у краю».\n- Іменники з суфіксами «-к-», «-ак-», «-ик-», «-ок-»: «у будинку», «на столику», «у садочку».\n- Іменники середнього роду на «-я» (подовження): «у житті», «у завданні», «у навчанні» (закінчення -і).\n\n3. Закінчення «-ові / -еві / -єві» (пріоритетне для назв істот):\n- Для назв істот чоловічого роду закінчення «-ові/-еві» є стилістично рекомендованим:\n  • «На моєму рідному братові (браті)»\n  • «На шановному професорові»\n  • «На головному лікареві»\n  • «На молодому кобзареві».",
      "examples": [
        {
          "target": "У новому затишному будинку на першому поверсі відкрили сучасну аптеку.",
          "reading": "[u nɔˈwɔmu ˈzɑtɪʃnɔmu buˈdɪnku nɑ ˈpɛrʃɔmu ˈpɔwɛrsʲi wʲidˈkrɪlɪ sutʃɐsˈnu ɐpˈtɛku] (oo noh-VOH-moo ZAH-tysh-noh-moo boo-DYN-koo nah PER-shoh-moo POH-ver-see veed-KRY-ly soo-chahs-NOO ahp-TEH-koo)",
          "translation": "In the new cozy building on the first floor a modern pharmacy was opened."
        },
        {
          "target": "На нашому викладачеві завжди бездоганно випрасуваний діловий костюм.",
          "reading": "[nɑ ˈnɑʃɔmu wɪklɐdɐˈtʃɛwʲi zɐwˈʒdɪ bɛzdɔˈɦɑnnɔ wɪˈprɑsuwɐnɪj dʲilɔˈwɪj kɔsʲˈtʲum] (nah NAH-shoh-moo vy-klah-dah-CHEH-vee zahv-ZHDY bez-doh-HAHN-noh vy-PRAH-soo-vah-nyi dee-loh-VYI kohs-TYOOM)",
          "translation": "On our lecturer there is always an impeccably ironed business suit."
        },
        {
          "target": "Ми гуляємо в зеленому парку та насолоджуємося тишею в духмяному лісі.",
          "reading": "[mɪ ɦuˈlʲɑjɛmɔ w zɛˈlɛnɔmu ˈpɑrku tɑ nɐsɔˈlɔdʒujɛmɔsʲɑ ˈtɪʃɛju w duxˈmjɑnɔmu ˈlʲisʲi] (my hoo-LYAH-yeh-moh v zeh-LEH-noh-moo PAHR-koo tah nah-soh-LOH-zhoo-yeh-moh-syah TY-sheh-yoo v dookh-MYAH-noh-moo LEE-see)",
          "translation": "We walk in the green park and enjoy the tranquility in the fragrant forest."
        }
      ],
      "mnemonics": [
        "Неістота на твердий — «-і» тримай; Задньоязиковий чи суфікс -к- — «-у» приймай; А людині «-ові / -еві» щиро віддавай!"
      ],
      "culturalNotes": [
        "Закінчення «-ові/-еві» у місцевому та давальному відмінках є найдавнішою питомою рисою української мови, яка збереглася від праслов'янських основ на *u."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть найбільш нормативну форму місцевого відмінка для назви особи «професор»:",
          "options": [
            "На професорові (Preferred animate Locative ending -ovi)",
            "На професору",
            "На професором",
            "На професоріє"
          ],
          "answerIndex": 0,
          "explanation": "Для назв істот чоловічого роду найбільш характерним і нормативним є закінчення «-ові»: «на професорові»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення матиме іменник «будинок» у місцевому відмінку однини («у ...»)?",
          "options": [
            "Закінчення -у: у будинку (Noun with suffix -ok takes -u)",
            "Закінчення -і: у будинкі",
            "Закінчення -ові: у будинкові",
            "Закінчення -ом: у будинком"
          ],
          "answerIndex": 0,
          "explanation": "Іменники на «-ок» / «-ик» у місцевому відмінку приймають закінчення «-у»: «у будинку»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому всі іменники чоловічого роду мають правильні закінчення місцевого відмінка:",
          "options": [
            "У будинку, у парку, на столі, на батькові, у кабінеті",
            "У будинкі, у паркі, на столу, на батьку, у кабінету",
            "У будинком, у парком, на столом, на батьком, у кабінетом",
            "У будинка, у парка, на стола, на батька, у кабінета"
          ],
          "answerIndex": 0,
          "explanation": "«У будинку» (-у), «у парку» (-у), «на столі» (-і), «на батькові» (-ові), «у кабінеті» (-і) — нормативні закінчення."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u8-l4": {
    "id": "uk-u8-l4",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 4,
    "title": "Місцевий відмінок із прийменником «по»: рух простором, засоби комунікації та розклад (Locative with PO)",
    "level": "A2",
    "objective": "Опанувати автентичне українське вживання прийменника «по» з місцевим відмінком на позначення руху поверхнею, каналів зв'язку та часового порядку.",
    "presentation": {
      "explanation": "Прийменник «по» з місцевим відмінком має чітко окреслену сферу нормативного вживання в українській мові:\n\n1. Рух поверхнею або простором (рух у межах певної території):\n- «Гуляти по парку / по старовинному місту / по широких вулицях»\n- «Пливти по Дніпру / по спокійній річці»\n- «Ходити по траві / по свіжому снігу»\n\n2. Канали зв'язку та передачі інформації:\n- «Розмовляти по мобільному телефону»\n- «Дивитися виставу по телебаченню»\n- «Слухати новини по радіо»\n\n3. Розподіл обов'язків та часова послідовність:\n- «Черговий по університету / по поверху»\n- «По прибутті до Києва ми одразу зателефонували рідним»\n\n4. Уникнення калькування:\n- В українській мові НЕ кажуть *іспит по мові чи *підручник по фізиці (правильно: «іспит з мови», «підручник з фізики»). Прийменник «по» не вживається для позначення галузі знань.",
      "examples": [
        {
          "target": "Ми із задоволенням гуляємо вечірнім містом по затишних старовинних вулицях.",
          "reading": "[mɪ iz zɐdɔˈwɔlɛnʲːɐm ɦuˈlʲɑjɛmɔ wɛˈtʃirnʲim ˈmʲistɔm pɔ ˈzɑtɪʃnɪx stɐrɔˈwɪnːɪx ˈwulɪt͡sʲɐx] (my eez zah-doh-VOH-len-nyahm hoo-LYAH-yeh-moh veh-CHEER-neem MEES-tohm poh ZAH-tysh-nykh stah-roh-VYN-nykh VOO-ly-tsyahkh)",
          "translation": "We walk through the evening city along the cozy ancient streets with pleasure."
        },
        {
          "target": "Він щодня довго спілкується з колегами по роботі по відеозв'язку.",
          "reading": "[wʲin ʃtʃɔdʲˈnʲɑ ˈdɔwɦɔ sʲpʲilˈkujɛtʲsʲɑ z kɔˈlɛɦɐmɪ pɔ rɔˈbɔtʲi pɔ wʲidɛɔzˈwjɑzku] (VEEN shchohd-NYAH DOHV-hoh speel-KOO-yet'-syah z koh-LEH-hah-my poh roh-BOH-tee poh vee-deh-oh-zV'YAZ-koo)",
          "translation": "Every day he talks with colleagues at work via video connection for a long time."
        },
        {
          "target": "Теплий літній дощ тихо барабанить по зеленому листю дерев у саду.",
          "reading": "[ˈtɛplɪj ˈlʲitnʲij dɔʃtʃ ˈtɪxɔ bɐrɐˈbɑnɪtʲ pɔ zɛˈlɛnɔmu ˈlɪsʲtʲu dɛˈrɛw u sɐˈdu] (TEP-lyi LEET-neey dohshch TY-khoh bah-rah-BAH-nyt' poh zeh-LEH-noh-moo LYS-t'yoo deh-REV oo sah-DOO)",
          "translation": "Warm summer rain quietly taps on the green leaves of the trees in the garden."
        }
      ],
      "mnemonics": [
        "По місту, по річці, по телефону — рухайся й зв'язуйся вільно за українським законом!"
      ],
      "culturalNotes": [
        "Культура мовлення вимагає розрізняти питоме просторове «по місту / по радіо» та уникати калькованого канцеляризму «по питанню» (правильно: «щодо питання»).",
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому прийменник «по» вжито абсолютно нормативно:",
          "options": [
            "Дідусь щовечора слухає цікаву музичну передачу по радіо. (Communication medium with PO)",
            "Студенти успішно склали іспит по українській мові.",
            "Ми обговорили всі деталі по цьому важливому питанню.",
            "Він є відомим фахівцем по комп'ютерних технологіях."
          ],
          "answerIndex": 0,
          "explanation": "Сполука «по радіо» є літературною нормою для позначення каналу зв'язку. У решті випадків слід вживати «з мови», «щодо питання», «у сфері технологій»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте вираз «широке поле» у місцевий відмінок після прийменника руху «йти по ...»:",
          "options": [
            "По широкому полю (Moving across the field - Locative)",
            "По широкому полі",
            "По широкому полем",
            "По широкого поля"
          ],
          "answerIndex": 0,
          "explanation": "Іменник середнього роду «поле» з прийменником «по» має форму місцевого відмінка «по полю»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де допущено помилку у вживанні прийменника «по»:",
          "options": [
            "У нас завтра відбудеться консультація по вищій математиці.",
            "Ми довго гуляли по затишному парку біля університету.",
            "Він зателефонував мені по мобільному телефону вчора ввечері.",
            "Краплі дощу стікають по прозорому склу вікна."
          ],
          "answerIndex": 0,
          "explanation": "Вираз «консультація по вищій математиці» є калькою. Нормативна українська конструкція — «консультація з вищої математики»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u8-l5": {
    "id": "uk-u8-l5",
    "subject": "ukrainian",
    "unit": 8,
    "lessonNumber": 5,
    "title": "Місцевий відмінок із прийменниками «при» та часовими «о / об» (Locative with PRY and O/OB)",
    "level": "A2",
    "objective": "Опанувати функції прийменника «при» (близькість, наявність умов) та часового прийменника «о/об» (о котрій годині? о сьомій, об одинадцятій) у місцевому відмінку.",
    "presentation": {
      "explanation": "Прийменники «при» та «о / об» виконують специфічні синтаксичні ролі з місцевим відмінком:\n\n1. Прийменник «при» (близькість, належність, супутні обставини):\n- Безпосередня просторова близькість або організаційна приналежність:\n  • «При університеті успішно діє науково-дослідний інститут»\n  • «Затишний готель розташований при дорозі»\n  • «Служити при дворі»\n- Супутні умови, стан чи обставини:\n  • «Читати старовинний рукопис при світлі настільної лампи»\n  • «Зберігати спокій і бути при повній тямі»\n  • «Присутній при всіх важливих переговорах»\n\n2. Прийменники «о / об» (позначення точного часу — о котрій годині?):\n- Відповідають на питання «О котрій годині?» (At what time?):\n  • «О сьомій годині ранку ми вирушаємо в подорож»\n  • «Лекція розпочинається рівно о десятій годині»\n- Евфонічний розподіл «о» / «об»:\n  • «О»: перед приголосними («о другій», «о п'ятій», «о шостій»).\n  • «Об»: перед голосними, зокрема перед числівником «одинадцять» («об одинадцятій годині вечора»).",
      "examples": [
        {
          "target": "Рівно о восьмій годині ранку при нашому університеті відкривається читальний зал бібліотеки.",
          "reading": "[ˈrʲiwnɔ ɔ wɔsʲˈmʲij ɦɔˈdɪnʲi ˈrɑŋku prɪ ˈnɑʃɔmu unʲiwɛrsɪˈtɛtʲi wʲidkrɪˈwɑjɛtʲsʲɑ tʃɪˈtɑlʲnɪj zɑl bʲiblʲiɔˈtɛkɪ] (REEV-noh oh vos-MEEY hoh-DY-nee RAHN-koo pry NAH-shoh-moo oo-nee-ver-sy-TEH-tee veed-kry-VAH-yet'-syah chy-TAHL'-nyi ZAHL beeb-lee-oh-TEH-ky)",
          "translation": "Exactly at eight in the morning the library's reading room opens at our university."
        },
        {
          "target": "Об одинадцятій годині ночі над сплячим містом запанувала цілковита тиша.",
          "reading": "[ɔb ɔdɪˈnɑdt͡sʲɑtʲij ɦɔˈdɪnʲi ˈnɔtʃʲi nɑd ˈsʲplʲɑtʃɪm ˈmʲistɔm zɐpɐnuˈwɑlɑ t͡sʲilkɔˈwɪtɑ ˈtɪʃɐ] (ohb oh-dyn-NAHD-tsyah-teey hoh-DY-nee NOH-chee nahd SPLYAHT-chym MEES-tohm zah-pah-noo-VAH-lah tseel-koh-VY-tah TY-shah)",
          "translation": "At eleven at night complete silence fell over the sleeping city."
        },
        {
          "target": "Вчений працював над відкриттям при тьмяному світлі свічки до самого світанку.",
          "reading": "[ˈwtʃɛnɪj prɐt͡sʲuˈwɑw nɑd wʲidkrɪtʲˈtʲɑm prɪ tʲˈmjɑnɔmu ˈsʲwʲitlʲi ˈsʲwʲitʃkɪ dɔ sɐˈmɔɦɔ sʲwʲiˈtɑŋku] (VCHEH-nyi praht-syoo-VAHV nahd veed-kryt-TYAHM pry T'MYAH-noh-moo SVEET-lee SVEETCH-ky doh sah-MOH-hoh svee-TAHN-koo)",
          "translation": "The scholar worked on the discovery by the dim light of a candle until dawn itself."
        }
      ],
      "mnemonics": [
        "О восьмій — перед приголосним, об одинадцятій — перед голосним; При університеті та при світлі — час і місце знайдемо ми!"
      ],
      "culturalNotes": [
        "Конструкція «о котрій годині?» (на відміну від кальки «в скільки годин?») є еталонним взірцем бездоганної української мовленнєвої культури."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть граматично правильний часовий вираз для позначення 11:00:",
          "options": [
            "Об одинадцятій годині (Euphonic ob before vowel o-)",
            "О одинадцятій годині",
            "В одинадцять годин",
            "У одинадцятій годині"
          ],
          "answerIndex": 0,
          "explanation": "Перед голосним [о] числівника «одинадцять» за законами евфонії вживається форма «об»: «об одинадцятій годині»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно запитати українською мовою про точний час події?",
          "options": [
            "О котрій годині розпочнеться зустріч? (At what time?)",
            "В скільки годин розпочнеться зустріч?",
            "У скількох годинах розпочнеться зустріч?",
            "О скільки годин розпочнеться зустріч?"
          ],
          "answerIndex": 0,
          "explanation": "Літературною нормативною формулою в українській мові є питання «О котрій годині?»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому дотримано правил вживання прийменників «при» та «о / об»:",
          "options": [
            "Потяг прибуває рівно о сьомій ранку, а автобус — об одинадцятій годині.",
            "Потяг прибуває рівно в сім годин ранку, а автобус — у одинадцять годин.",
            "Потяг прибуває рівно об сьомій ранку, а автобус — о одинадцятій годині.",
            "Потяг прибуває рівно до сьомої ранку, а автобус — к одинадцятій годині."
          ],
          "answerIndex": 0,
          "explanation": "«О сьомій» (перед приголосним [с]) та «об одинадцятій» (перед голосним [о]) — бездоганні норми місцевого відмінка часу."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u9-l1": {
    "id": "uk-u9-l1",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 1,
    "title": "Давальний відмінок: непрямий додаток, адресат дії та специфіка дієслівного керування (Dative Indirect Object)",
    "level": "A2",
    "objective": "Опанувати вживання давального відмінка (кому? чому?) на позначення адресата дії та специфічне керування українських дієслів (дякувати, допомагати, радити, бажати).",
    "presentation": {
      "explanation": "Давальний відмінок (Dative Case / кому? чому?) позначає особу, істоту чи предмет, на користь або на адресу яких спрямована дія:\n\n1. Адресат дії (кому?):\n- «Дарувати квіти мамі та сестрі»\n- «Писати важливого листа шановному викладачеві»\n- «Телефонувати найкращому другові щовечора»\n- «Пояснювати нову граматичну тему іноземним студентам»\n\n2. Специфічне дієслівне керування в українській мові (вимагає ДАВАЛЬНОГО відмінка):\n- «Дякувати (кому?) захисникам та захисницям України» (в українській мові дієслово «дякувати» керує ВИКЛЮЧНО давальним відмінком, на відміну від англійського або інших конструкцій!)\n- «Допомагати (кому?) літнім людям та сусідам»\n- «Бажати (кому? чого?) другові міцного здоров'я та успіху»\n- «Радити (кому?) колезі цікаву наукову книгу»\n- «Пробачати (кому?) другові прикрі помилки».",
      "examples": [
        {
          "target": "Ми щиро дякуємо мужнім захисникам за мирне небо та свободу рідної України.",
          "reading": "[mɪ ˈʃtʃirɔ dʲɑˈkujɛmɔ ˈmuʒnʲim zɐxɪsnɪˈkɑm zɑ ˈmɪrnɛ ˈnɛbɔ tɑ swɔˈbɔdu ˈrʲidnɔjɪ ukrɐˈjinɪ] (my SHCHEE-roh dyah-KOO-yeh-moh MOOZH-neem zah-khys-ny-KAHM zah MYR-neh NEH-boh tah svoh-BOH-doo REED-noh-yee oo-krah-YEE-ny)",
          "translation": "We sincerely thank the brave defenders for the peaceful sky and the freedom of native Ukraine."
        },
        {
          "target": "Студентка щодня допомагає своїй молодшій сестрі вивчати складні уроки.",
          "reading": "[stuˈdɛntkɐ ʃtʃɔdʲˈnʲɑ dɔpɔmɐˈɦɑjɛ swɔˈjij mɔˈlɔdʃij sɛsˈtrʲi wɪwˈtʃɑtɪ sklɐdˈnʲi uˈrɔkɪ] (stoo-DENT-kah shchohd-NYAH doh-poh-mah-HAH-yeh svoh-YEEY moh-LOHD-sheey ses-TREE vyv-CHAH-ty sklahd-NEE oo-ROH-ky)",
          "translation": "The student helps her younger sister study difficult lessons every day."
        },
        {
          "target": "Професор терпляче пояснює новий матеріал кожному старанному студентові.",
          "reading": "[prɔˈfɛsɔr tɛrpˈlʲɑtʃɛ pɔjɐsʲˈnʲujɛ nɔˈwɪj mɐtɛrʲiˈɑl ˈkɔʒnɔmu stɐˈrɑnnɔmu stuˈdɛntɔwʲi] (proh-FEH-sohr terp-LYAH-cheh poh-yahs-NYOO-yeh noh-VYI mah-teh-ree-AHL KOZH-noh-moo stah-RAHN-noh-moo stoo-DEN-toh-vee)",
          "translation": "The professor patiently explains the new material to every diligent student."
        }
      ],
      "mnemonics": [
        "«Кому?» і «Чому?» даруй тепло — другові допоможи, захиснику подякуй щиро й від душі!"
      ],
      "culturalNotes": [
        "Норма «дякую (кому?) другові / батькам» є найважливішим маркером автентичної української мовної самобутності, де калькування зі знахідним відмінком суворо неприпустиме."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення з правильним граматичним керуванням дієслова «дякувати»:",
          "options": [
            "Ми від щирого серця дякуємо шановному викладачеві за мудрі поради. (Dative after дякувати)",
            "Ми від щирого серця дякуємо шановного викладача за мудрі поради.",
            "Ми від щирого серця дякуємо шановним викладачем за мудрі поради.",
            "Ми від щирого серця дякуємо для шановного викладача за мудрі поради."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «дякувати» в українській мові вимагає давального відмінка: «дякуємо (кому?) викладачеві»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте слово «друг» у форму давального відмінка однини в реченні «Я телефоную ...»:",
          "options": [
            "Другові (Preferred masculine Dative ending -ovi)",
            "Друга",
            "Другом",
            "Друзі"
          ],
          "answerIndex": 0,
          "explanation": "Іменник чоловічого роду «друг» у давальному відмінку має нормативне закінчення «-ові»: «другові»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ іменники у ролі адресата дії стоять у правильній формі давального відмінка:",
          "options": [
            "Оксана подарувала цікаву книгу братові, а квіти — улюбленій мамі.",
            "Оксана подарувала цікаву книгу брата, а квіти — улюблену маму.",
            "Оксана подарувала цікаву книгу братом, а квіти — улюбленою мамою.",
            "Оксана подарувала цікаву книгу на браті, а квіти — на улюбленій мамі."
          ],
          "answerIndex": 0,
          "explanation": "«Братові» (чол. рід, -ові) та «мамі» (жін. рід, -і) — бездоганні форми адресата дії в давальному відмінку."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u9-l2": {
    "id": "uk-u9-l2",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 2,
    "title": "Безособові конструкції суб'єкта стану: вік, самопочуття, модальність та дієслова на -ся (Impersonal Dative)",
    "level": "A2",
    "objective": "Опанувати вживання давального відмінка для позначення логічного суб'єкта у безособових реченнях (вік, психофізичний стан, модальні слова та предикативи).",
    "presentation": {
      "explanation": "В українській мові особа, яка відчуває стан або якій належить модальна дія, виражається формою ДАВАЛЬНОГО відмінка:\n\n1. Позначення віку (кому? скільки років?):\n- «Мені двадцять років»\n- «Моєму старшому братові виповнилося тридцять років»\n- «Скільки років вашій доньці?»\n\n2. Психофізичний стан та почуття (предикативи на «-о»):\n- «Мені дуже холодно / тепло / затишно в цій кімнаті»\n- «Студентам радісно та цікаво на уроці»\n- «Йому стало сумно від цих спогадів»\n\n3. Модальні предикативні слова (треба, потрібно, можна, варто, слід, личить):\n- «Нам треба старанно вчитися»\n- «Студентові слід вчасно здавати завдання»\n- «Тобі варто відвідати старовинний Львів»\n- «Вам можна зайти до кабінету»\n\n4. Безособові зворотні дієслова (здається, сниться, хочеться, подобається):\n- «Мені здається, що ми все зробили правильно»\n- «Їй дуже подобається вивчати українську культуру».",
      "examples": [
        {
          "target": "Мені дуже подобається читати класичні поезії Тараса Шевченка вечорами.",
          "reading": "[mɛˈnʲi ˈduʒɛ pɔˈdɔbɐjɛtʲsʲɑ tʃɪˈtɑtɪ klɐˈsɪtʃnʲi pɔˈɛzʲijɪ tɐˈrɑsɑ ʃɛwˈtʃɛnkɑ wɛtʃɔˈrɑmɪ] (meh-NEE DOO-zheh poh-DOH-bah-yet'-syah chy-TAH-ty klah-SYCH-nee poh-EH-zee-yee tah-RAH-sah shev-CHEN-kah veh-choh-RAH-my)",
          "translation": "I like reading the classic poems of Taras Shevchenko in the evenings very much."
        },
        {
          "target": "Моєму молодшому братові нещодавно виповнилося двадцять років.",
          "reading": "[mɔˈjɛmu mɔˈlɔdʃɔmu ˈbrɑtɔwʲi nɛʃtʃɔˈdɑwnɔ wɪˈpɔwnɪlɔsʲɑ ˈdwɑdt͡sʲɑtʲ ˈrɔkʲiw] (moh-YEH-moo moh-LOHD-shoh-moo BRAH-toh-vee neh-shchoh-DAHV-noh vy-POHV-ny-lohs'-yah DVAHD-tsyaht' roh-KEEV)",
          "translation": "My younger brother recently turned twenty years old."
        },
        {
          "target": "Усім студентам варто уважно слухати цінні поради досвідченого викладача.",
          "reading": "[uˈsʲim stuˈdɛntɐm ˈwɑrtɔ uˈwɑʒnɔ ˈsluxɑtɪ ˈt͡sʲinːʲi pɔˈrɑdɪ dɔsʲˈwʲidtʃɛnɔɦɔ wɪklɐdɐˈtʃɑ] (oo-SEEM stoo-DEN-tahm VAHR-toh oo-VAHZH-noh SLOO-khah-ty TSEEN-nee poh-RAH-dy dos-VEED-cheh-noh-hoh vy-klah-dah-CHAH)",
          "translation": "All students should attentively listen to the valuable advice of the experienced teacher."
        }
      ],
      "mnemonics": [
        "Мені холодно, мені двадцять, мені треба знати — давальний суб'єкт стану вміє відчувати!"
      ],
      "culturalNotes": [
        "Безособові конструкції з давальним суб'єктом («мені хочеться», «йому вдалося») надають українському мовленню особливої м'якості, витонченості та щирої емоційності."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому вік людини виражено граматично правильно:",
          "options": [
            "Моїй сестрі виповнилося вісімнадцять років. (Dative for age: моїй сестрі)",
            "Моя сестра виповнилося вісімнадцять років.",
            "Мою сестру виповнилося вісімнадцять років.",
            "Моєю сестрою виповнилося вісімнадцять років."
          ],
          "answerIndex": 0,
          "explanation": "Суб'єкт віку в українській мові завжди вживається у давальному відмінку: «моїй сестрі»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте особовий займенник «ми» у давальний відмінок у модальному реченні «... треба поспішати»:",
          "options": [
            "Нам (Dative of ми)",
            "Ми",
            "Нас",
            "Нами"
          ],
          "answerIndex": 0,
          "explanation": "Займенник «ми» у давальному відмінку має форму «нам»: «нам треба»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де суб'єкт стану або модальності оформлено з помилкою:",
          "options": [
            "Я дуже холодно в цій просторій кімнаті.",
            "Мені дуже холодно в цій просторій кімнаті.",
            "Студентам цікаво слухати нову лекцію.",
            "Тобі варто більше відпочивати на свіжому повітрі."
          ],
          "answerIndex": 0,
          "explanation": "Речення «Я дуже холодно» містить грубу помилку. Правильно вжити давальний відмінок: «Мені дуже холодно»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u9-l3": {
    "id": "uk-u9-l3",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 3,
    "title": "Морфологія давального відмінка чоловічого роду: першість питомих закінчень -ові / -еві / -єві (Dative Endings -ovi/-evi)",
    "level": "A2",
    "objective": "Опанувати домінантні питомі закінчення давального відмінка чоловічого роду (-ові, -еві, -єві), запобігання одноманітності закінчень при сполученні кількох іменників.",
    "presentation": {
      "explanation": "В українській мові іменники чоловічого роду II відміни у давальному відмінку мають паралельні закінчення «-ові / -еві / -єві» та «-у / -ю»:\n\n1. Закінчення «-ові / -еві / -єві» є ПРІОРИТЕТНИМИ та стилістично виразними:\n- Тверда основа -> «-ові»:\n  • «Брат -> братові», «батько -> батькові», «студент -> студентові», «директор -> директорові».\n- М'яка та мішана групи -> «-еві»:\n  • «Вчитель -> вчителеві», «лікар -> лікареві», «товариш -> товаришеві», «хлопець -> хлопцеві».\n- Основи на [й] -> «-єві»:\n  • «Герой -> героєві», «Сергій -> Сергієві», «край -> краєві».\n\n2. Закінчення «-у / -ю»:\n- Є вторинним варіантом для чоловічого роду: «брату», «вчителю», «герою».\n\n3. Правило чергування при збігу двох іменників поруч (уникнення тавтології):\n- Якщо поруч стоять два іменники чоловічого роду в давальному відмінку, їхні закінчення варіюють:\n  • «Панові директору» (або «пану директорові»)\n  • «Нашому другові Тарасу» (або «нашому другу Тарасові»)\n  • «Професорові Івану Іваненку».",
      "examples": [
        {
          "target": "Ми щиро бажаємо шановному панові ректору міцного здоров'я та нових звершень.",
          "reading": "[mɪ ˈʃtʃirɔ bɐˈʒɑjɛmɔ ʃɐˈnɔwnɔmu ˈpɑnɔwʲi ˈrɛktɔru mʲit͡sˈnɔɦɔ zdɔˈrɔwjɑ tɑ nɔˈwɪx zwɛrˈʃɛnʲ] (my SHCHEE-roh bah-ZHAH-yeh-moh shah-NOHV-noh-moo PAH-noh-vee REK-toh-roo meets-NOH-hoh zdoh-ROHV-yah tah noh-VYKH zver-SHEN')",
          "translation": "We sincerely wish the esteemed mister rector strong health and new accomplishments."
        },
        {
          "target": "Він передав важливий науковий звіт провідному лікареві нашої лікарні.",
          "reading": "[wʲin pɛrɛˈdɑw wɑʒˈlɪwɪj nɐuˈkɔwɪj zwʲit prɔwʲidˈnɔmu ˈlʲikɐrɛwʲi ˈnɑʃɔjɪ lʲiˈkɑrnʲi] (VEEN peh-reh-DAHV vahzh-LY-vyi nah-oo-KOH-vyi ZVEET proh-veed-NOH-moo LEE-kah-reh-vee NAH-shoh-yee lee-KAHR-nee)",
          "translation": "He handed over the important scientific report to the leading physician of our hospital."
        },
        {
          "target": "Усі щиро аплодують молодому героєві за його мужній та сміливий вчинок.",
          "reading": "[uˈsʲi ˈʃtʃirɔ ɐplɔˈdujutʲ mɔlɔˈdɔmu ɦɛˈrɔjɛwʲi zɑ jɔˈɦɔ ˈmuʒnʲij tɑ sʲmʲiˈlɪwɪj ˈwtʃɪnɔk] (oo-SEE SHCHEE-roh ah-ploh-DOO-yoot' moh-loh-DOH-moo heh-ROH-yeh-vee zah yoh-HOH MOOZH-neey tah smee-LY-vyi VCHY-nohk)",
          "translation": "Everyone sincerely applauds the young hero for his brave and courageous deed."
        }
      ],
      "mnemonics": [
        "Братові, лікареві, героєві пиши — солов'їне «-ові / -еві» у серці збережи!"
      ],
      "culturalNotes": [
        "Форми на «-ові/-еві» є однією з головних граматичних відмінностей української мови серед слов'янських мов, яка зберігає живу давньоруську традицію."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть пару слів із правильним чергуванням закінчень для виразу «пан професор» у давальному відмінку:",
          "options": [
            "Панові професору (Alternating -ovi and -u endings)",
            "Панові професорові",
            "Пану професору",
            "Паном професором"
          ],
          "answerIndex": 0,
          "explanation": "Щоб уникнути одноманітності закінчень (-ові...-ові або -у...-у), перше слово ставлять на «-ові», а друге — на «-у»: «панові професору»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке нормативне закінчення матиме м'який іменник «лікар» у давальному відмінку однини?",
          "options": [
            "Закінчення -еві: лікареві (Soft stem masculine Dative takes -evi)",
            "Закінчення -ові: лікарові",
            "Закінчення -ом: лікарем",
            "Закінчення -і: лікарі"
          ],
          "answerIndex": 0,
          "explanation": "Іменники м'якої групи чоловічого роду у давальному відмінку приймають закінчення «-еві»: «лікареві»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ іменники чоловічого роду мають бездоганні закінчення давального відмінка:",
          "options": [
            "Братові, вчителеві, героєві, панові, деканові",
            "Братом, учителем, героєм, паном, деканом",
            "Браті, вчителі, герої, пані, декані",
            "Брата, вчителя, героя, пана, декана"
          ],
          "answerIndex": 0,
          "explanation": "«Братові» (-ові), «вчителеві» (-еві), «героєві» (-єві), «панові» (-ові), «деканові» (-ові) — еталонні давальні закінчення."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u9-l4": {
    "id": "uk-u9-l4",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 4,
    "title": "Давальний відмінок іменників жіночого та середнього роду: закінчення -і (з чергуванням г/з, к/ц, х/с) та -у/-ю (Dative Feminine & Neuter)",
    "level": "A2",
    "objective": "Опанувати творення давального відмінка жіночого роду (закінчення -і з обов'язковими чергуваннями приголосних) та середнього роду (закінчення -у/-ю).",
    "presentation": {
      "explanation": "Іменники жіночого та середнього роду у давальному відмінку однини мають такі чіткі правила творення:\n\n1. Жіночий рід (I та III відміни):\n- Закінчення «-і»:\n  • «Мама -> мамі», «сестра -> сестрі», «пісня -> пісні», «земля -> землі», «мрія -> мрії».\n- ОБОВ'ЯЗКОВІ чергування приголосних перед «-і»:\n  • [г] -> [з']: «Ольга -> Ользі», «книга -> книзі», «дорога -> дорозі».\n  • [к] -> [ц']: «дочка -> дочці», «сестричка -> сестричці», «рука -> руці», «аптека -> аптеці».\n  • [х] -> [с']: «муха -> мусі», «невістка -> невістці».\n- Іменники III відміни на приголосний: закінчення «-і» («ночі», «радості», «матері»).\n\n2. Середній рід (II та IV відміни):\n- Закінчення «-у / -ю»:\n  • «Місто -> місту», «село -> селу», «вікно -> вікну».\n  • «Море -> морю», «поле -> полю», «життя -> життю», «серце -> серцю».\n  • (Рідше для персоніфікованих істот середнього роду: «дитяті / дитяткові»).",
      "examples": [
        {
          "target": "Батько ніжно посміхнувся своїй малій дочці та подарував їй яскраву іграшку.",
          "reading": "[ˈbɑtʲkɔ ˈnʲiʒnɔ pɔsʲmʲixˈnuwsʲɑ swɔˈjij mɐˈlʲij dɔtʃˈt͡sʲi tɑ pɔdɐruˈwɑw jij jɐsˈkrɑwu iɦˈrɑʃku] (BAHT'-koh NEEZH-noh pohs-meekh-NOOV-syah svoh-YEEY mah-LEEY dohch-TSEE tah poh-dah-roo-VAHV yeey yahs-KRAH-voo eeh-RAHSH-koo)",
          "translation": "The father smiled tenderly at his little daughter and gave her a bright toy."
        },
        {
          "target": "Ми завдячуємо рідному місту за незабутні роки щасливого студентського життя.",
          "reading": "[mɪ zɐwˈdʲɑtʃujɛmɔ ˈrʲidnɔmu ˈmʲistu zɑ nɛzɐˈbutnʲi ˈrɔkɪ ʃtʃɐsˈlɪwɔɦɔ stuˈdɛnt͡sʲkɔɦɔ ʒɪtʲˈtʲɑ] (my zahv-DYAH-choo-yeh-moh REED-noh-moo MEES-too zah neh-zah-BOOT-nee ROH-ky shchahs-LY-voh-hoh stoo-DENT-s'koh-hoh zhyt-TYAH)",
          "translation": "We are obliged to our native city for unforgettable years of happy student life."
        },
        {
          "target": "Студенти передали щирі вітання викладачці Ользі з нагоди ювілею.",
          "reading": "[stuˈdɛntɪ pɛrɛdɐˈlɪ ˈʃtʃirʲi wʲiˈtɑnʲːɑ wɪklɐˈdɑt͡ʃt͡sʲi ˈɔlʲzʲi z nɐˈɦɔdɪ juwʲiˈlɛju] (stoo-DEN-ty peh-reh-dah-LY SHCHEE-ree vee-TAHN-nyah vy-klah-DAHCH-tsee OHL'-zee z nah-HOH-dy yoo-vee-LEH-yoo)",
          "translation": "The students passed sincere congratulations to teacher Olha on the occasion of the anniversary."
        }
      ],
      "mnemonics": [
        "Дочка — дочці, Ольга — Ользі, рука — руці: чергуй приголосні в давальнім жіночім вінці!"
      ],
      "culturalNotes": [
        "Чергування в іменах на -га та -ка («Ольга -> Ользі», «Оксана -> Оксанці») є строгою граматичною нормою чемного звертання та присвяти."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Поставте жіноче ім'я «Ольга» у правильну форму давального відмінка:",
          "options": [
            "Ользі (g -> z consonant mutation before -i)",
            "Ольгі",
            "Ольгу",
            "Ольгою"
          ],
          "answerIndex": 0,
          "explanation": "Перед закінченням «-і» кінцевий приголосний основи [г] чергується з [з']: «Ользі»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення матиме іменник середнього роду «сонце» у давальному відмінку однини?",
          "options": [
            "Закінчення -ю: сонцю (Neuter soft stem Dative takes -yu)",
            "Закінчення -і: сонці",
            "Закінчення -ем: сонцем",
            "Закінчення -а: сонця"
          ],
          "answerIndex": 0,
          "explanation": "Іменники середнього роду з м'якою основою у давальному відмінку набувають закінчення «-ю»: «сонцю»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому правильно реалізовано всі чергування та закінчення давального відмінка:",
          "options": [
            "Брат допоміг малій сестричці та написав листа подрузі Ользі.",
            "Брат допоміг малій сестричкі та написав листа подругі Ольгі.",
            "Брат допоміг малій сестричку та написав листа подругу Ольгу.",
            "Брат допоміг малій сестричкою та написав листа подругою Ольгою."
          ],
          "answerIndex": 0,
          "explanation": "«Сестричці» (к->ц) та «подрузі Ользі» (г->з) — абсолютно точні нормативні форми."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u9-l5": {
    "id": "uk-u9-l5",
    "subject": "ukrainian",
    "unit": 9,
    "lessonNumber": 5,
    "title": "Давальний відмінок із питомими прийменниками: «завдяки», «всупереч», «назустріч», «наперекір» (Dative Prepositions)",
    "level": "A2",
    "objective": "Опанувати прийменникове керування давального відмінка з прийменниками причини, протидії та зустрічного напрямку (завдяки, всупереч, назустріч, наперекір).",
    "presentation": {
      "explanation": "Давальний відмінок поєднується з особливою групою похідних прийменників:\n\n1. Прийменник «завдяки» (Thanks to / Due to — позитивна причина чи сприяння):\n- «Завдяки наполегливій праці студент досяг успіху»\n- «Завдяки допомозі вірних друзів ми подолали всі труднощі»\n- «Завдяки сучасним технологіям навчання стало доступнішим»\n\n2. Прийменники протидії «всупереч» та «наперекір» (In spite of / Despite / Contrary to):\n- «Всупереч складним погодним умовам літак приземлився вчасно»\n- «Всупереч усім сумнівам ми віримо в нашу спільну перемогу»\n- «Наперекір штормовому вітру корабель впевнено йшов уперед»\n\n3. Прийменник зустрічного руху «назустріч» (Towards):\n- «Йти назустріч сонцю та вітру»\n- «Маленька дитина радісно біжить назустріч мамі»\n- «Ми впевнено крокуємо назустріч світлому майбутньому».",
      "examples": [
        {
          "target": "Завдяки щоденній наполегливій праці студенти блискуче склали всі іспити.",
          "reading": "[zɐwˈdʲɑkɪ ʃtʃɔˈdɛnnʲij nɐpɔˈlɛɦlɪwʲij ˈprɑt͡sʲi stuˈdɛntɪ ˈblɪsʲkutʃɛ sklɑˈlɪ wsʲi isˈpɪtɪ] (zahv-DYAH-ky shchoh-DEN-neey nah-poh-LEH-hly-veey PRAH-tsee stoo-DEN-ty BLYS'-koo-cheh sklah-LY VSEE ees-PY-ty)",
          "translation": "Thanks to daily diligent work the students passed all exams brilliantly."
        },
        {
          "target": "Всупереч усім суворим перешкодам український народ відстояв свою незалежність.",
          "reading": "[wsuˈpɛrɛtʃ uˈsʲim suˈwɔrɪm pɛrɛʃˈkɔdɐm ukrɐˈjinʲsʲkɪj nɐˈrɔd wʲidstɔˈjɑw swɔˈju nɛzɐˈlɛʒnʲisʲtʲ] (vsoo-PEH-rech oo-SEEM soo-VOH-rym peh-rehsh-KOH-dahm oo-krah-YEEN-s'kyi nah-ROHD veed-stoh-YAHV svoh-YOO neh-zah-LEHZH-neest')",
          "translation": "Despite all severe obstacles the Ukrainian people defended their independence."
        },
        {
          "target": "Маленька дівчинка з радісною посмішкою біжить назустріч рідному батькові.",
          "reading": "[mɐˈlɛnʲkɐ ˈdʲiwtʃɪnkɐ z ˈrɑdʲisnɔju pɔsʲˈmʲiʃkɔju bʲiˈʒɪtʲ nɐˈzustrʲitʃ ˈrʲidnɔmu ˈbɑtʲkɔwʲi] (mah-LEN'-kah DEEV-chyn-kah z RAH-dees-noh-yoo pohs-MEESH-koh-yoo bee-ZHYT' nah-ZOOST-reech REED-noh-moo BAHT'-koh-vee)",
          "translation": "The little girl runs towards her dear father with a joyful smile."
        }
      ],
      "mnemonics": [
        "Завдяки й назустріч, всупереч й наперекір — давальний відмінок руйнує бар'єр з давніх пір!"
      ],
      "culturalNotes": [
        "Прийменник «завдяки» вживається лише тоді, коли причина сприяла позитивному наслідку (не можна казати *завдяки хворобі, слід: «через хворобу»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому прийменник «завдяки» правильно вжито з давальним відмінком:",
          "options": [
            "Завдяки підтримці друзів ми завершили цей великий проєкт. (Thanks to support - Dative after завдяки)",
            "Завдяки підтримку друзів ми завершили цей великий проєкт.",
            "Завдяки підтримкою друзів ми завершили цей великий проєкт.",
            "Завдяки підтримки друзів ми завершили цей великий проєкт."
          ],
          "answerIndex": 0,
          "explanation": "Прийменник «завдяки» вимагає виключно давального відмінка: «завдяки підтримці»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте слово «вітер» у форму давального відмінка після прийменника напрямку «йти назустріч ...»:",
          "options": [
            "Вітрові (Towards the wind - Dative after назустріч)",
            "Вітру",
            "Вітром",
            "Вітра"
          ],
          "answerIndex": 0,
          "explanation": "Після прийменника «назустріч» іменник чоловічого роду приймає давальне закінчення «-ові»: «назустріч вітрові»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ іменники після давальних прийменників стоять у правильній формі:",
          "options": [
            "Всупереч труднощам і завдяки мудрому керівникові команда здобула блискучу перемогу.",
            "Всупереч труднощами і завдяки мудрим керівником команда здобула блискучу перемогу.",
            "Всупереч труднощів і завдяки мудрого керівника команда здобула блискучу перемогу.",
            "Всупереч труднощі і завдяки мудрий керівник команда здобула блискучу перемогу."
          ],
          "answerIndex": 0,
          "explanation": "«Всупереч труднощам» та «завдяки керівникові» стоять у формі давального відмінка (множини та однини)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u10-l1": {
    "id": "uk-u10-l1",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 1,
    "title": "Минулий час дієслів: творення від основи інфінітива та узгодження в роді й числі (Past Tense Formation)",
    "level": "A2",
    "objective": "Опанувати творення минулого часу дієслів від основи інфінітива за допомогою суфіксів -в, -ла, -ло, -ли та нульового закінчення.",
    "presentation": {
      "explanation": "Минулий час в українській мові виражає дію, яка відбулася до моменту мовлення, і змінюється за родами (в однині) та числами (в минулому часі немає особових закінчень!):\n\n1. Дієслова з основою інфінітива на голосний:\n- До основи інфінітива (без суфікса -ти) додаються родові суфікси:\n  • Чоловічий рід: суфікс «-в» (читати -> чита-в, писати -> писа-в, робити -> роби-в)\n  • Жіночий рід: закінчення «-ла» (чита-ла, писа-ла, роби-ла)\n  • Середній рід: закінчення «-ло» (чита-ло, писа-ло, роби-ло)\n  • Множина (для всіх родів): закінчення «-ли» (чита-ли, писа-ли, роби-ли)\n\n2. Дієслова з основою інфінітива на приголосний:\n- У чоловічому роді суфікс «-в» відсутній (нульовий суфікс):\n  • «Нести -> ніс» (він ніс, але: вона несла, воно несло, вони несли)\n  • «Везти -> віз» (він віз, але: вона везла, воно везло, вони везли)\n  • «Пекти -> пік» (він пік, але: вона пекла, воно пекло, вони пекли)\n\n3. Особове узгодження:\n- Форма минулого часу визначається родом мовця або особи:\n  • Чоловік: «Я вчора довго працював»\n  • Жінка: «Я вчора довго працювала».",
      "examples": [
        {
          "target": "Учора ввечері студентка старанно читала новий підручник з української літератури.",
          "reading": "[uˈtʃɔrɐ ˈwːɛtʃɛrʲi stuˈdɛntkɐ stɐˈrɑnnɔ tʃɪˈtɑlɑ nɔˈwɪj pʲidˈrutʃnɪk z ukrɐˈjinʲsʲkɔjɪ lʲitɛrɐˈturɪ] (oo-CHOH-rah VVEH-cheh-ree stoo-DENT-kah stah-RAHN-noh chy-TAH-lah noh-VYI peed-ROOCH-nyk z oo-krah-YEEN-s'koh-yee lee-teh-rah-TOO-ry)",
          "translation": "Yesterday evening the female student diligently read the new textbook of Ukrainian literature."
        },
        {
          "target": "Мій дідусь багато років працював інженером на великому заводі в Харкові.",
          "reading": "[mʲij dʲiˈdusʲ bɐˈɦɑtɔ ˈrɔkʲiw prɐt͡sʲuˈwɑw inʒɛˈnɛrɔm nɑ wɛˈlɪkɔmu zɐˈwɔdʲi w ˈxɑrkɔwʲi] (MEEY dee-DOOS' bah-HAH-toh roh-KEEV praht-syoo-VAHV een-zheh-NEH-rohm nah veh-LY-koh-moo zah-VOH-dee v KHAHR-koh-vee)",
          "translation": "My grandfather worked for many years as an engineer at a large factory in Kharkiv."
        },
        {
          "target": "Сонце яскраво сяяло над спокійним морем цілий день.",
          "reading": "[ˈsɔnt͡sɛ jɐsˈkrɑwɔ ˈsʲɑjɐlɔ nɑd spɔˈkʲijnɪm ˈmɔrɛm ˈt͡sʲilɪj dɛnʲ] (SOHN-tseh yahs-KRAH-voh SYAH-yah-loh nahd spoh-KEEY-nym MOH-rem TSEE-lyi DEN')",
          "translation": "The sun shone brightly over the calm sea all day long."
        }
      ],
      "mnemonics": [
        "Він читав, вона читала, сонце в небі засіяло (-ло), а студенти дружно вчили (-ли) — минулий час опанували!"
      ],
      "culturalNotes": [
        "Родові закінчення минулого часу в українській мові походять від давнього перфекта з дієприкметником на -лъ, що зберігся у всіх слов'янських мовах."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму минулого часу для підмета жіночого роду (Оксана):",
          "options": [
            "Оксана написала чудовий лист своїй подрузі. (Feminine past tense ending in -la)",
            "Оксана написав чудовий лист своїй подрузі.",
            "Оксана написало чудовий лист своїй подрузі.",
            "Оксана написали чудовий лист своїй подрузі."
          ],
          "answerIndex": 0,
          "explanation": "Для жіночого роду дієслово минулого часу має закінчення «-ла»: «написала»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте дієслово «робити» у форму минулого часу множини (Вони):",
          "options": [
            "Робили (Plural past tense ending in -ly)",
            "Робив",
            "Робила",
            "Робило"
          ],
          "answerIndex": 0,
          "explanation": "Форма множини минулого часу для всіх осіб і родів має закінчення «-ли»: «робили»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ дієслова минулого часу правильно узгоджені у роді та числі:",
          "options": [
            "Брат працював, сестра вчилася, сонце гріло, а птахи співали.",
            "Брат працювала, сестра вчився, сонце гріли, а птахи співав.",
            "Брат працювало, сестра вчило, сонце грів, а птахи співала.",
            "Брат працювали, сестра вчили, сонце гріла, а птахи співало."
          ],
          "answerIndex": 0,
          "explanation": "«Працював» (чол. рід), «вчилася» (жін. рід), «гріло» (сер. рід), «співали» (множина) — ідеальне узгодження."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u10-l2": {
    "id": "uk-u10-l2",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 2,
    "title": "Історичні чергування голосних [о], [е] з [і] в закритих складах минулого часу (o/e -> i Mutations)",
    "level": "A2",
    "objective": "Опанувати закони чергування голосних [о], [е] з [і] у закритому складі чоловічого роду минулого часу (ніс / несла, віз / везла, беріг / берегла).",
    "presentation": {
      "explanation": "В українській мові діє фундаментальний фонетичний закон: голосні [о] та [е] у відкритому складі переходять в [і] у закритому складі:\n\n1. Прояв у формах чоловічого роду минулого часу (де склад стає закритим):\n- «Нести -> він ніс» (закритий склад на -с), але «вона не-сла, воно не-сло, вони не-сли» (відкриті склади з [е]).\n- «Везти -> він віз» (закритий склад на -з), але «вона ве-зла, вони ве-зли».\n- «Пекти -> він пік», але «вона пе-кла, вони пе-кли».\n- «Берегти -> він беріг», але «вона бе-ре-гла, вони бе-ре-гли».\n- «Стерегти -> він стеріг», але «вона сте-ре-гла, вони сте-ре-гли».\n- «Плести -> він плів», але «вона пле-ла, вони пле-ли».\n\n2. Дієслова з кореневим [о]:\n- «Могти -> він міг», але «вона мо-гла, воно мо-гло, вони мо-гли».\n- «Рости -> він ріс», але «вона ро-сла, вони ро-сли».\n- «Помогти -> він поміг», але «вона по-мо-гла».\n\n3. Орфоепічна норма:\n- Вживання [о] чи [е] у закритому складі чоловічого роду (*нес замість «ніс», *мог замість «міг») є неприпустимою помилкою.",
      "examples": [
        {
          "target": "Він дбайливо беріг старовинну сімейну реліквію від будь-яких пошкоджень.",
          "reading": "[wʲin dbɐjˈlɪwɔ bɛˈrʲiɦ stɐrɔˈwɪnnu sʲiˈmɛjnu rɛˈlʲikwʲiju wʲid budʲ-jɑˈkɪx pɔʃˈkɔdʒɛnʲ] (VEEN dbahj-LY-voh beh-REEK stah-roh-VYN-noo see-MEY-noo reh-LEEK-vee-yoo veed bood'-yah-KYKH pohsh-KOHD-zhen')",
          "translation": "He carefully guarded the ancient family heirloom from any damage."
        },
        {
          "target": "Тарас ніс важкий рюкзак із книгами, а Оксана несла зручну сумку.",
          "reading": "[tɐˈrɑs nʲis wɑʒˈkɪj rʲukˈzɑk iz ˈknɪɦɐmɪ, ɑ ɔkˈsɑnɐ nɛsˈlɑ zrutʃˈnu ˈsumku] (tah-RAHS NEES vahzh-KYI ryook-ZAHK eez KNY-hah-my, ah ohk-SAH-nah nes-LAH zrooch-NOO SOOM-koo)",
          "translation": "Taras carried a heavy backpack with books, and Oksana carried a comfortable bag."
        },
        {
          "target": "Хлопець довго не міг знайти потрібної адреси в незнайомому місті.",
          "reading": "[ˈxlɔpɛt͡sʲ ˈdɔwɦɔ nɛ mʲiɦ znɐjˈtɪ pɔˈtrʲibnɔjɪ ɐdˈrɛsɪ w nɛznɐˈjɔmɔmu ˈmʲisʲtʲi] (KHLOH-pets' DOHV-hoh neh MEEK znahy-TEE poh-TREEB-noh-yee ahd-REH-sy v neh-znah-YOH-moh-moo MEES-tee)",
          "translation": "The young man could not find the required address in the unfamiliar city for a long time."
        }
      ],
      "mnemonics": [
        "Він ніс, він віз, він беріг і ріс — у закритому складі звук [і] світиться крізь!"
      ],
      "culturalNotes": [
        "Чергування о/е з і є найяскравішою унікальною візитівкою української фонетичної системи серед усіх мов світу."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну пару форм минулого часу дієслова «могти» для він і вона:",
          "options": [
            "Він міг, а вона могла (Closed syllable i vs open syllable o)",
            "Він мог, а вона могла",
            "Він міг, а вона мігла",
            "Він мог, а вона мігла"
          ],
          "answerIndex": 0,
          "explanation": "У закритому складі чоловічого роду голосний чергується на [і] («міг»), а у відкритому складі жіночого роду зберігається [о] («могла»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Поставте дієслово «нести» у форму минулого часу чоловічого роду (Він):",
          "options": [
            "Ніс (Vowel mutation e -> i in closed syllable)",
            "Нес",
            "Несив",
            "Нісив"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «нести» у формі чоловічого роду минулого часу має чергування [е] -> [і]: «він ніс»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ форми чоловічого роду минулого часу утворено фонетично правильно:",
          "options": [
            "Ніс, віз, пік, беріг, міг, ріс",
            "Нес, вез, пек, берег, мог, рос",
            "Нісив, візив, пікав, берігав, могав",
            "Несив, везив, пекав, бережав, мігав"
          ],
          "answerIndex": 0,
          "explanation": "Усі форми («ніс», «віз», «пік», «беріг», «міг», «ріс») бездоганно демонструють історичне чергування о/е -> і."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u10-l3": {
    "id": "uk-u10-l3",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 3,
    "title": "Дієслова із суфіксом -ну- в інфінітиві: випадання суфікса в минулому часі (Verbs with -nu- Suffix)",
    "level": "A2",
    "objective": "Опанувати закономірності збереження або випадання суфікса -ну- у минулому часі залежно від семантики (процесні дієслова проти однократних дій).",
    "presentation": {
      "explanation": "В українській мові дієслова із суфіксом «-ну-» в інфінітиві діляться на дві чіткі групи щодо творення минулого часу:\n\n1. Дієслова стану, тривалого процесу або поступової зміни (суфікс «-ну-» ВИПАДАЄ):\n- Суфікс «-ну-» повністю випадає в усіх формах минулого часу:\n  • «Змерзнути -> він змерз, вона змерзла, воно змерзло, вони змерзли»\n  • «Сохнути -> він сох, вона сохла, вони сохли»\n  • «Гаснути -> він гас, вона гасла, воно гасло, вони гасли»\n  • «Зникнути -> він зник, вона зникла, вони зникли»\n  • «Звикнути -> він звик, вона звикла, вони звикли»\n  • «Охолонути -> він охолов, вона охолола, вони охололи»\n\n2. Дієслова миттєвої, однократної дії (суфікс «-ну-» ЗБЕРІГАЄТЬСЯ):\n- Суфікс «-ну-» обов'язково зберігається:\n  • «Крикнути -> він крикнув, вона крикнула, вони крикнули»\n  • «Глянути -> він глянув, вона глянула, вони глянули»\n  • «Стрибнути -> він стрибнув, вона стрибнула, вони стрибнули»\n  • «Махнути -> він махнув, вона махнула, вони махнули».",
      "examples": [
        {
          "target": "Вогонь у старій печі поступово згас, і в кімнаті стало прохолодно.",
          "reading": "[wɔˈɦɔnʲ u stɐˈrʲij pɛˈtʃi pɔstuˈpɔwɔ zɦɑs, i w kʲimˈnɑtʲi ˈstɑlɔ prɔxɔˈlɔdnɔ] (voh-HOHN' oo stah-REEY peh-CHEE pohs-too-POH-voh ZHAHS, ee v keem-NAH-tee STAH-loh proh-khoh-LOHD-noh)",
          "translation": "The fire in the old stove gradually went out, and it became cool in the room."
        },
        {
          "target": "Мандрівник дуже змерз під час тривалого походу засніженими горами.",
          "reading": "[mɐnˈdrʲiwnɪk ˈduʒɛ zmɛrz pʲid t͡ʃɑs trɪˈwɑlɔɦɔ pɔˈxɔdu zɐsʲˈnʲiʒɛnɪmɪ ɦɔˈrɑmɪ] (mahn-DREEV-nyk DOO-zheh ZMERZ peed CHAHS try-VAH-loh-hoh poh-KHOH-doo zahs-NEE-zheh-ny-my hoh-RAH-my)",
          "translation": "The traveler got very cold during the long hike through the snow-covered mountains."
        },
        {
          "target": "Хлопець радісно усміхнувся та привітно махнув рукою на прощання.",
          "reading": "[ˈxlɔpɛt͡sʲ ˈrɑdʲisnɔ usʲmʲixˈnuwsʲɑ tɑ prɪˈwʲitnɔ mɐxˈnuw ruˈkɔju nɑ prɔʃˈtʃɑnʲːɑ] (KHLOH-pets' RAH-dees-noh oos-meekh-NOOV-syah tah pry-VEET-noh mahkh-NOOV roo-KOH-yoo nah prohsh-CHAHN-nyah)",
          "translation": "The young man smiled joyfully and waved his hand warmly in farewell."
        }
      ],
      "mnemonics": [
        "Змерзнути — змерз, зникнути — зник (суфікс зник!); А стрибнути — стрибнув у мить, бо однократна дія дзвенить!"
      ],
      "culturalNotes": [
        "Уникнення штучних форм типу *змерзнув чи *сохнув є ознакою витонченого природного смаку в українській літературній мові."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну літературну форму минулого часу для процесного дієслова «змерзнути» (Він):",
          "options": [
            "Він змерз (Suffix -nu- dropped for state verb)",
            "Він змерзнув",
            "Він змерзнував",
            "Він змерзен"
          ],
          "answerIndex": 0,
          "explanation": "У дієсловах стану суфікс «-ну-» у минулому часі випадає: «він змерз»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку форму минулого часу має однократне дієслово «глянути» для підмета «вона»?",
          "options": [
            "Глянула (Single-action verb retains suffix -nu-)",
            "Гляла",
            "Глягла",
            "Глясла"
          ],
          "answerIndex": 0,
          "explanation": "Дієслова миттєвої однократної дії зберігають суфікс «-ну-»: «глянула»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ дієслова на -нути правильно вжиті у формі минулого часу:",
          "options": [
            "Туман повністю зник, вогонь згас, а хлопець швидко стрибнув через потічок.",
            "Туман повністю зникнув, вогонь згаснув, а хлопець швидко стриб через потічок.",
            "Туман повністю зникнув, вогонь згас, а хлопець швидко стрибнув через потічок.",
            "Туман повністю зник, вогонь згаснув, а хлопець швидко стриб через потічок."
          ],
          "answerIndex": 0,
          "explanation": "«Зник» (випадає), «згас» (випадає), «стрибнув» (зберігається в однократній дії) — бездоганна граматика."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u10-l4": {
    "id": "uk-u10-l4",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 4,
    "title": "Суплетивні та нерегулярні моделі минулого часу: «іти / піти», «знайти», «їсти», «бути» (Irregular Past Paradigms)",
    "level": "A2",
    "objective": "Опанувати особливі та суплетивні парадигми минулого часу високочастотних дієслів руху та буття (ішов/йшов, пішов, знайшов, їв/їла, був/була).",
    "presentation": {
      "explanation": "Найуживаніші дієслова української мови мають історичні нерегулярні або суплетивні форми минулого часу:\n\n1. Дієслово «іти / йти» та його префіксальні похідні (корінь іш- / йш-):\n- «Іти -> він ішов (йшов), вона ішла (йшла), воно ішло (йшло), вони ішли (йшли)»\n- «Піти -> він пішов, вона пішла, вони пішли»\n- «Прийти -> він прийшов, вона прийшла, вони прийшли»\n- «Знайти -> він знайшов, вона знайшла, вони знайшли»\n- «Вийти -> він вийшов, вона вийшла, вони вийшли»\n\n2. Дієслово «їсти»:\n- «Він їв, вона їла, воно їло, вони їли»\n\n3. Дієслово «бути»:\n- «Він був, вона була, воно було, вони були»\n\n4. Дієслово «лягти»:\n- «Він ліг, вона лягла, вони лягли» (чергування я -> і в закритому складі).\n\n5. Дієслово «сісти»:\n- «Він сів, вона сіла, вони сіли».",
      "examples": [
        {
          "target": "Ми пізно ввечері повернулися додому і з великим апетитом їли смачну вечерю.",
          "reading": "[mɪ ˈpʲiznɔ ˈwːɛtʃɛrʲi pɔwɛrˈnulɪsʲɑ dɔˈdɔmu i z wɛˈlɪkɪm ɐpɛˈtɪtɔm ˈjilɪ smɐtʃˈnu wɛˈtʃɛrʲu] (my PEEZ-noh VVEH-cheh-ree poh-ver-NOO-lys'-yah doh-DOH-moo ee z veh-LY-kym ah-peh-TY-tohm YEE-ly smahch-NOO veh-CHEH-ryoo)",
          "translation": "Late in the evening we returned home and ate a delicious supper with great appetite."
        },
        {
          "target": "Вона швидко пішла до бібліотеки і знайшла рідкісний старовинний словник.",
          "reading": "[wɔˈnɑ ˈʃwɪdkɔ pʲiʃˈlɑ dɔ bʲiblʲiɔˈtɛkɪ i znɐjʃˈlɑ ˈrʲidkʲisnɪj stɐrɔˈwɪnnɪj slɔwˈnɪk] (voh-NAH SHVYD-koh peesh-LAH doh beeb-lee-oh-TEH-ky ee znahy-SHLAH REED-kees-nyi stah-roh-VYN-nyi slov-NYK)",
          "translation": "She quickly went to the library and found a rare antique dictionary."
        },
        {
          "target": "Усі друзі вчасно прийшли на цікаву зустріч із відомим українським письменником.",
          "reading": "[uˈsʲi ˈdruzʲi ˈwtʃɑsnɔ prɪjʃˈlɪ nɑ t͡sʲiˈkɑwu ˈzustrʲitʃ iz wʲiˈdɔmɪm ukrɐˈjinʲsʲkɪm pɪsʲˈmɛnnɪkɔm] (oo-SEE DROOZ-yah VCHAH-snoh preey-SHLY nah tsee-KAH-voo ZOOST-reech eez vee-DOH-mym oo-krah-YEEN-s'kym pys'-MEN-ny-kohm)",
          "translation": "All friends arrived on time for the interesting meeting with the prominent Ukrainian writer."
        }
      ],
      "mnemonics": [
        "Ішов, пішов, знайшов і ліг — минулий час здолав поріг; Їв і був, прийшов і сів — не знає мова зайвих слів!"
      ],
      "culturalNotes": [
        "Форми «йшов / ішов» взаємозамінні за законами української евфонії: після голосного пишемо «йшов» («вона йшла»), після приголосного чи на початку фрази — «ішов» («він ішов», «ішов дощ»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму минулого часу для дієслова «знайти» з підметом жіночого роду (Вона):",
          "options": [
            "Вона знайшла (Irregular past tense of знайти: знайшла)",
            "Вона знайтила",
            "Вона знайнула",
            "Вона знайдена"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «знайти» у минулому часі жіночого роду має суплетивну форму «знайшла»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку форму минулого часу чоловічого роду має дієслово «їсти»?",
          "options": [
            "Їв (Past tense of їсти: їв)",
            "Їстив",
            "Їдав",
            "Їд"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «їсти» у формі чоловічого роду минулого часу має вигляд «він їв»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ нерегулярні форми минулого часу вжиті правильно:",
          "options": [
            "Тарас пішов у парк, Оксана прийшла додому, а діти з апетитом їли яблука.",
            "Тарас пійтинув у парк, Оксана прийтила додому, а діти їстили яблука.",
            "Тарас пішла у парк, Оксана прийшов додому, а діти їв яблука.",
            "Тарас пійшов у парк, Оксана прийшла додому, а діти їдали яблука."
          ],
          "answerIndex": 0,
          "explanation": "«Пішов» (чол. рід), «прийшла» (жін. рід), «їли» (множина) — зразкові нормативні форми."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u10-l5": {
    "id": "uk-u10-l5",
    "subject": "ukrainian",
    "unit": 10,
    "lessonNumber": 5,
    "title": "Синтаксис та узгодження минулого часу: займенники «хто/що», збірні підмети та фразеологічні конструкції (Past Tense Syntax)",
    "level": "A2",
    "objective": "Опанувати правила синтаксичного узгодження дієслів минулого часу зі словами хто/що, неозначеними/заперечними займенниками та збірними іменниками.",
    "presentation": {
      "explanation": "Узгодження присудка у формі минулого часу з різними типами підметів підпорядковується суворим граматичним законам:\n\n1. Займенники «хто», «ніхто», «дехто», «хтось», «кожен»:\n- Дієслово-присудок у минулому часі ЗАВЖДИ ставиться у формі ЧОЛОВІЧОГО роду однини (незалежно від реальної статі осіб):\n  • «Хто прийшов на заняття?»\n  • «Ніхто не знав правильної відповіді»\n  • «Хтось залишив парасольку в коридорі»\n  • «Кожен із нас виконав своє завдання»\n\n2. Займенники «що», «ніщо», «дещо», «щось»:\n- Присудок у минулому часі ЗАВЖДИ ставиться у формі СЕРЕДНЬОГО роду однини:\n  • «Що трапилося (сталося)?»\n  • «Щось упало на підлогу»\n  • «Ніщо не завадило нашим планам»\n\n3. Збірні іменники («молодь», «студентство», «більшість»):\n- Присудок узгоджується в граматичному роді та числі з підметом:\n  • «Студентська молодь брала (жін. рід) активну участь у житті країни»\n  • «Українське студентство підтримало (сер. рід) нову ініціативу».",
      "examples": [
        {
          "target": "Ніхто не знав відповіді на це складне запитання, поки викладач не пояснив правило.",
          "reading": "[nʲixˈtɔ nɛ znɑw wʲidpɔˈwʲidʲi nɑ t͡sɛ sklɐdˈnɛ zɐpɪˈtɑnʲːɑ, ˈpɔkɪ wɪklɐˈdɑtʃ nɛ pɔjɐsʲˈnʲiw ˈprɑwɪlɔ] (neekh-TOH neh ZNAHV veed-poh-VEE-dee nah tseh sklahd-NEH zah-py-TAHN-nyah, POH-ky vy-klah-DAHCH neh poh-yahs-NEEV PRAH-vy-loh)",
          "translation": "Nobody knew the answer to this difficult question until the teacher explained the rule."
        },
        {
          "target": "Що сталося вчора ввечері на центральній площі нашого міста?",
          "reading": "[ʃtʃɔ ˈstɑlɔsʲɑ uˈtʃɔrɐ ˈwːɛtʃɛrʲi nɑ t͡sɛntˈrɑlʲnʲij ˈplɔʃtʃʲi ˈnɑʃɔɦɔ ˈmʲistɑ] (shchoh STAH-lohs'-yah oo-CHOH-rah VVEH-cheh-ree nah tsen-TRAHL'-neey PLOHSHCH-ee NAH-shoh-hoh MEES-tah)",
          "translation": "What happened yesterday evening in the central square of our city?"
        },
        {
          "target": "Українське студентство одностайно підтримало важливий благодійний проєкт.",
          "reading": "[ukrɐˈjinʲsʲkɛ stuˈdɛntstwɔ ɔdnɔˈstɑjnɔ pʲidˈtrɪmɐlɔ wɑʒˈlɪwɪj blɐɦɔˈdʲijnɪj prɔˈjɛkt] (oo-krah-YEEN-s'keh stoo-DENT-stvoh ohd-noh-STAHY-noh peed-TRY-mah-loh vahzh-LY-vyi blah-hoh-DEEY-nyi proh-YEKT)",
          "translation": "Ukrainian students unanimously supported the important charitable project."
        }
      ],
      "mnemonics": [
        "Хто прийшов — на -в (чоловічий рід), що упало — на -ло (середній рід); Узгоджуй підмет і присудок правильно завжди!"
      ],
      "culturalNotes": [
        "Норма «хто сказав» (чоловічий рід незалежно від контексту) є фундаментальним правилом українського синтаксису, що забезпечує логічну точність висловлювання."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення з правильним граматичним узгодженням присудка з підметом «хто»:",
          "options": [
            "Хто з дівчат перший виконав це складне завдання? (Subject хто takes masculine singular: виконав)",
            "Хто з дівчат перша виконала це складне завдання?",
            "Хто з дівчат перше виконало це складне завдання?",
            "Хто з дівчат перші виконали це складне завдання?"
          ],
          "answerIndex": 0,
          "explanation": "Займенник «хто» вимагає форми дієслова чоловічого роду однини: «хто виконав»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку форму минулого часу має присудок при підметі «щось» у реченні «У кімнаті щось ...»?",
          "options": [
            "Упало (Subject що/щось takes neuter singular ending -lo)",
            "Упав",
            "Упала",
            "Упали"
          ],
          "answerIndex": 0,
          "explanation": "Займенник «щось» вимагає форми середнього роду минулого часу: «щось упало»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено синтаксичну помилку в узгодженні минулого часу:",
          "options": [
            "Ніхто з жінок не знала правильної відповіді.",
            "Ніхто з жінок не знав правильної відповіді.",
            "Щось дивне сталося вчора вночі.",
            "Кожен із студентів вчасно склав іспит."
          ],
          "answerIndex": 0,
          "explanation": "Речення «Ніхто з жінок не знала» містить помилку. Зі словом «ніхто» присудок завжди ставиться у формі чоловічого роду однини: «ніхто не знав»."
        }
      ],
      "passThreshold": 0.8
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
