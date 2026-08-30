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
    "title": "Проста форма майбутнього часу доконаного виду (Simple Future of Perfective Verbs)",
    "level": "B1",
    "objective": "Опанувати творення та вживання простої форми майбутнього часу дієслів доконаного виду (напишу, зробиш, прочитає) для вираження результативної дії в майбутньому.",
    "presentation": {
      "explanation": "В українській мові категорія майбутнього часу тісно пов'язана з видом дієслова. Дієслова доконаного виду (perfective aspect), які відповідають на питання «що зробити?», мають лише одну форму майбутнього часу — просту (синтетичну). Вона утворюється додаванням особових закінчень теперішнього часу до основи дієслова доконаного виду:\n\n1. Закінчення I дієвідміни (-у/-ю, -еш/-єш, -е/-є, -емо/-ємо, -ете/-єте, -уть/-ють):\n   - Написати (основа напиш-): напишу, напишеш, напише, напишемо, напишете, напишуть.\n   - Прочитати (основа прочита-): прочитаю, прочитаєш, прочитає, прочитаємо, прочитаєте, прочитають.\n\n2. Закінчення II дієвідміни (-у/-ю, -иш/-їш, -ить/-їть, -имо/-їмо, -ите/-їте, -ать/-ять):\n   - Зробити (основа зроб-): зроблю, зробиш, зробить, зробимо, зробите, зроблять (з чергуванням б/бл у 1-й особі однини та 3-й множини).\n   - Побачити: побачу, побачиш, побачить, побачимо, побачите, побачать.\n\nСемантика простого майбутнього часу: виражає цілісну, обмежену в часі дію, яка обов'язково досягне результату в майбутньому, або одноразовий акт.",
      "examples": [
        {
          "target": "Завтра я неодмінно напишу докладного листа нашому партнерові.",
          "reading": "[ˈzɑwtrɐ jɑ nɛɔdʲˈmʲinːɔ nɐpɪˈʃu dɔkˈlɑdnɔɦɔ lɪsˈtɑ ˈnɑʃɔmu pɐrtˈnʲɛrɔwʲi] (ZAHV-trah yah neh-ohd-MEEN-noh nah-py-SHOO dohk-LAHD-noh-hoh lys-TAH NAH-shoh-moo pahrt-NEH-roh-vee)",
          "translation": "Tomorrow I will definitely write a detailed letter to our partner."
        },
        {
          "target": "Ми швидко перевіримо всі звіти й надішлемо результати до вечора.",
          "reading": "[mɪ ˈʃwɪdkɔ pɛrɛˈwʲirɪmɔ wʲsʲi ˈzwʲitɪ j nɐdʲiʃˈlɛmɔ rɛzulʲˈtɑtɪ dɔ ˈwɛtʃɛrɐ] (my SHVYD-koh peh-reh-VEE-ry-moh vsee ZVEE-ty ee nah-deesh-LEH-moh reh-zool'-TAH-ty doh VEH-cheh-rah)",
          "translation": "We will quickly check all the reports and send the results by evening."
        },
        {
          "target": "Коли ти повернешся з відрядження, ми разом розв'яжемо це завдання.",
          "reading": "[kɔˈlɪ tɪ pɔwɛrˈnɛʃsʲɑ z wʲidˈrʲɑdʒɛnʲːɑ, mɪ ˈrɑzɔm rɔzˈwjazɛmɔ t͡sɛ zɐwˈdɑnʲːɑ] (koh-LY ty poh-vehr-NESH-syah z veed-RYAHD-zhen-nyah, my RAH-zohm roz-V'YAH-zheh-moh tseh zahv-DAHN-nyah)",
          "translation": "When you return from the business trip, we will solve this task together."
        }
      ],
      "mnemonics": [
        "Доконаний вид — дія готова й завершена: «зроблю», «напишу», «відкрию» без жодних додаткових допоміжних слів!"
      ],
      "culturalNotes": [
        "В українській мовній традиції вживання форми простого майбутнього часу (наприклад, «допоможу», «зроблю») сприймається як тверда, надійна особиста обіцянка виконання справи."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму 1-ї особи однини майбутнього часу від дієслова доконаного виду «зробити»:",
          "options": [
            "Зроблю (First person singular with labial mutation b -> bl)",
            "Зробю",
            "Буду зробити",
            "Зробитимуть"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «зробити» має чергування губного звука: [б] -> [бл], утворюючи форму «я зроблю»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке речення містить просту форму майбутнього часу доконаного виду?",
          "options": [
            "Студенти успішно складуть підсумковий іспит наступного тижня.",
            "Студенти будуть складати іспит цілий день.",
            "Студенти складатимуть тести щосуботи.",
            "Студенти складали іспит учора."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «складуть» є простою формою майбутнього часу доконаного виду від «скласти»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому правильно вжито просту форму майбутнього часу дієслова II дієвідміни «побачити»:",
          "options": [
            "Ми обов'язково побачимо новий випуск наукового журналу.",
            "Ми обов'язково побачемо новий випуск наукового журналу.",
            "Ми обов'язково будемо побачити новий випуск.",
            "Ми обов'язково побачитимемо новий випуск журналу."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «побачити» належить до II дієвідміни, тому форма 1-ї особи множини має закінчення -имо: «побачимо»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u11-l2": {
    "id": "uk-u11-l2",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 2,
    "title": "Складна (синтетична) форма майбутнього часу (Synthetic Imperfective Future)",
    "level": "B1",
    "objective": "Опанувати творення та стилістичне вживання унікальної української складної синтетичної форми недоконаного виду із суфіксами -му, -меш, -ме, -мемо, -мете, -муть.",
    "presentation": {
      "explanation": "Українська мова має унікальну рису серед слов'янських мов — синтетичну (складну) форму майбутнього часу для дієслів недоконаного виду (imperfective aspect). Вона утворюється шляхом злиття інфінітива з давніми формами дієслова «яти/няти» (мати):\n\nІнфінітив + особові суфікси-закінчення:\n- Я: читати + му = читатиму (I will read/be reading)\n- Ти: читати + меш = читатимеш (you will read)\n- Він/вона/воно: читати + ме = читатиме (he/she/it will read)\n- Ми: читати + мемо (або -мем) = читатимемо (we will read)\n- Ви: читати + мете = читатимете (you [pl./polite] will read)\n- Вони: читати + муть = читатимуть (they will read)\n\nФонетичні та структурні правила:\n1. Форма утворюється від повного інфінітива: писатиму, працюватимеш, малюватиме, житимемо, дивитиметесь.\n2. Наголос у складній формі падає на суфікс інфінітива або особовий суфікс залежно від дієслова (чита́тиму, писа́тимеш, робити́мемо).\n3. У зворотних дієсловах частка -ся/-сь приєднується після особового закінчення: вчитимусь / вчитимуся, сміятимешся, сподіватиметься, пишатимемося.",
      "examples": [
        {
          "target": "Я пам'ятатиму цю теплу зустріч у Києві все своє життя.",
          "reading": "[jɑ pɐmjɐˈtɑtɪmu t͡sʲu ˈtɛplu ˈzustrʲitʃ u ˈkɪjɛwʲi wsɛ swɔˈjɛ ʒɪtʲˈtʲɑ] (yah pahm-yah-TAH-ty-moo tsyoo TEP-loo ZOOST-veech oo KY-yeh-vee vseh svoh-YEH zhyt-TYAH)",
          "translation": "I will remember this warm meeting in Kyiv all my life."
        },
        {
          "target": "Ми працюватимемо над цим науковим дослідженням протягом року.",
          "reading": "[mɪ prɐt͡sʲuˈwɑtɪmɛmɔ nɑd t͡sɪm nɐuˈkɔwɪm dɔsʲˈlʲidʒɛnʲːɐm prɔˈtʲɑɦɔm ˈrɔku] (my praht-syoo-VAH-ty-meh-moh nahd tsym nah-oo-KOH-wym dohs-LEED-zhen-nyahm proh-TYAH-hohm ROH-koo)",
          "translation": "We will work on this scientific research throughout the year."
        },
        {
          "target": "Вони щовечора гулятимуть старовинними вуличками Львова.",
          "reading": "[wɔˈnʲi ʃtʃɔˈwɛtʃɔrɐ ɦuˈlʲɑtɪmutʲ stɐrɔˈwɪnːɪmɪ ˈwulɪtʃkɐmɪ lʲˈwɔwɐ] (woh-NEE shchoh-VEH-choh-rah hoo-LYAH-ty-moot' stah-roh-VYN-ny-my VOO-lych-kah-my L'VOH-vah)",
          "translation": "They will walk every evening along the ancient streets of Lviv."
        }
      ],
      "mnemonics": [
        "Інфінітив + «-му, -меш, -ме, -мемо, -мете, -муть» = суто українська синтетична краса: «писатиму», «любитиму», «житимемо»!"
      ],
      "culturalNotes": [
        "Синтетична форма на -тиму є перлиною української літературної та поетичної мови (Шевченко, Леся Українка, Франко) і надзвичайно поширена в сучасній публіцистиці та щоденному спілкуванні."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть форму 2-ї особи множини синтетичного майбутнього часу від дієслова «працювати»:",
          "options": [
            "Працюватимете (Infinitive працювати + 2nd person plural ending -мете)",
            "Працюватимуть",
            "Працюватимемо",
            "Працюватимеш"
          ],
          "answerIndex": 0,
          "explanation": "2-га особа множини (ви) утворюється додаванням суфікса-закінчення -мете: «працюватимете»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно утворити зворотну форму 3-ї особи однини від «сподіватися» у синтетичному майбутньому часі?",
          "options": [
            "Сподіватиметься (Infinitive сподівати + -ме + -ться)",
            "Сподіватимеся",
            "Сподіватисьме",
            "Буде сподіватисься"
          ],
          "answerIndex": 0,
          "explanation": "Частка -ся ставиться в кінці слова після особового закінчення -ме: «сподіватиметься»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено помилку в утворенні складної форми майбутнього часу:",
          "options": [
            "Вони роблятимуть цю важливу справу разом.",
            "Вони робитимуть цю важливу справу разом.",
            "Ми захищатимемо нашу спільну позицію.",
            "Ти малюватимеш нову картину цілий вечір."
          ],
          "answerIndex": 0,
          "explanation": "Форма «роблятимуть» є грубою помилкою. Синтетична форма утворюється від повного інфінітива «робити» + -муть: «робитимуть»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u11-l3": {
    "id": "uk-u11-l3",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 3,
    "title": "Складена (аналітична) форма майбутнього часу (Analytical Future Tense)",
    "level": "B1",
    "objective": "Опанувати творення та синтаксичні особливості складеної аналітичної форми майбутнього часу (буду, будеш + інфінітив) та її стилістичну взаємозамінність із синтетичною формою.",
    "presentation": {
      "explanation": "Складена (аналітична) форма майбутнього часу в українській мові властива лише дієсловам недоконаного виду (imperfective aspect). Вона складається з двох слів:\n\nОсобова форма допоміжного дієслова «бути» у майбутньому часі + незмінний інфінітив основного дієслова:\n\n1. Парадигма відмінювання:\n   - Я буду читати / слухати / працювати\n   - Ти будеш читати / слухати / працювати\n   - Він / вона / воно буде читати / слухати / працювати\n   - Ми будемо (будем) читати / слухати / працювати\n   - Ви будете читати / слухати / працювати\n   - Вони будуть читати / слухати / працювати\n\n2. Стилістична паралельність:\nВ українській мові аналітична форма («буду писати») та синтетична форма («писатиму») є абсолютно граматично рівноправними синонімами:\n   - «Я буду працювати» = «Я працюватиму»\n   - «Ми будемо обговорювати» = «Ми обговорюватимемо»\n\n3. Стилістичні рекомендації:\n- Чергування обох форм допомагає уникнути тавтології та монотонності у висловлюванні.\n- Якщо в реченні вже є складна конструкція або модальне слово, часто віддають перевагу аналітичній або синтетичній формі заради милозвучності (евфонії).",
      "examples": [
        {
          "target": "Ми будемо уважно слухати кожну доповідь на міжнародній конференції.",
          "reading": "[mɪ ˈbudɛmɔ uˈwɑʒnɔ ˈsluxɐtɪ ˈkɔʒnu dɔpɔˈwʲidʲ nɑ mʲiʒnɐˈrɔdnʲij kɔnfɛˈrɛnt͡sʲiji] (my BOO-deh-moh oo-VAHZH-noh SLOO-khah-ty KOHZH-noo doh-poh-VEED' nah meezh-nah-ROHD-neey kohn-feh-REN-tsee-yee)",
          "translation": "We will listen attentively to every report at the international conference."
        },
        {
          "target": "Чи будеш ти брати участь у відкритих змаганнях з плавання?",
          "reading": "[tʃɪ ˈbudɛʃ tɪ ˈbrɑtɪ ˈutʃɐsʲtʲ u wʲidˈkrɪtɪx zmɐˈɦɑnʲːɐx z ˈplɑwɐnʲːɑ] (chy BOO-desh ty BRAH-ty OO-chahst' oo veed-KRY-tykh zmah-HAHN-nyakh z PLAH-vahn-nyah)",
          "translation": "Will you take part in the open swimming competitions?"
        },
        {
          "target": "Влітку вони будуть подорожувати мальовничими Карпатами.",
          "reading": "[ˈwlʲitku wɔˈnʲi ˈbudutʲ pɔdɔrɔʒuˈwɑtɪ mɐlʲɔwˈnɪtʃɪmɪ kɐrˈpɑtɐmɪ] (VLEET-koo woh-NEE BOO-doot' poh-doh-roh-zhoo-VAH-ty mahl'-ohv-NY-chy-my kahr-PAH-tah-my)",
          "translation": "In summer they will travel through the picturesque Carpathians."
        }
      ],
      "mnemonics": [
        "«Буду», «будеш», «буде» + інфінітив — аналітична паралель до «-тиму», обидві форми правильні й рідні!"
      ],
      "culturalNotes": [
        "У повсякденній українській розмовній практиці мовці вільно чергують: «Що будеш робити?» та «Що робитимеш?», обидва варіанти звучать абсолютно природно."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть синонімічний еквівалент до синтетичної форми «ми читатимемо»:",
          "options": [
            "Ми будемо читати (Analytical imperfective future with 1st person plural будемо)",
            "Ми прочитаємо",
            "Ми будемо прочитати",
            "Ми читали"
          ],
          "answerIndex": 0,
          "explanation": "Форма «читатимемо» (недоконаний вид) повністю тотожна за значенням складеній формі «будемо читати»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Чому конструкція «я буду написати» є грубою граматичною помилкою?",
          "options": [
            "Тому що форма «буду» поєднується виключно з інфінітивом недоконаного виду (писати, а не написати).",
            "Тому що з дієсловом «буду» не можна вживати 1-шу особу.",
            "Тому що дієслово «бути» не має майбутнього часу.",
            "Тому що інфінітив завжди повинен стояти перед «буду»."
          ],
          "answerIndex": 0,
          "explanation": "Складена форма майбутнього часу твориться ТІЛЬКИ від дієслів недоконаного виду. З дієсловами доконаного виду вживається проста форма («напишу»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть граматично бездоганне речення зі складеною формою майбутнього часу:",
          "options": [
            "Завтра вранці ми будемо зустрічати гостей на вокзалі.",
            "Завтра вранці ми будемо зустріти гостей на вокзалі.",
            "Завтра вранці ми будемо зустріли гостей на вокзалі.",
            "Завтра вранці ми будемо зустрінуть гостей на вокзалі."
          ],
          "answerIndex": 0,
          "explanation": "Правильна конструкція вимагає форми допоміжного дієслова «будемо» та інфінітива недоконаного виду «зустрічати»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u11-l4": {
    "id": "uk-u11-l4",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 4,
    "title": "Видові протиставлення у майбутньому часі (Aspect Opposition in Future)",
    "level": "B1",
    "objective": "Опанувати семантичні та комунікативні відмінності між доконаним (результат, разова дія) і недоконаним (процес, тривалість, повторюваність) видами у майбутньому часі.",
    "presentation": {
      "explanation": "Вибір форми майбутнього часу в українській мові залежить від того, який комунікативний аспект повідомлення є головним:\n\n1. Недоконаний вид (писатиму / буду писати):\n   - Процес або діяльність у розвитку: «О сьомій вечора я вечерятиму» (I will be having dinner at 7 PM).\n   - Тривалість або повторюваність дії: «Я щодня вчитиму нові слова» (I will learn/study new words every day).\n   - Фокус на самій дії як факті без акценту на її фіналі: «Він увесь день читатиме книжку».\n\n2. Доконаний вид (напишу / прочитаю / зроблю):\n   - Одноразова дія з досягненням кінцевого результату: «Я прочитаю цю книжку до п'ятниці» (I will finish reading this book by Friday).\n   - Послідовність дій у майбутньому: «Я прийду додому, приготую вечерю і зателефоную тобі».\n   - Раптовий початок або завершення дії: «Раптом піде дощ», «Ми швидко збудуємо дім».\n\n3. Заперечення у майбутньому часі:\n   - «Не буду робити» / «Не робитиму» — відмова від процесу, небажання виконувати дію взагалі.\n   - «Не зроблю» — неможливість досягти конкретного результату.",
      "examples": [
        {
          "target": "Я вивчатиму іспанську мову щодня і за рік вивчу всі базові правила.",
          "reading": "[jɑ wɪwtʃɐˈtɪmu isˈpɑnsʲku ˈmɔwu ʃtʃɔdʲˈnʲɑ i zɑ rʲik ˈwɪwtʃu wsʲi bɐˈzɔwʲi ˈprɑwɪlɐ] (yah vyv-chah-TY-moo ees-PAHN-s'koo MOH-voo shchohd-NYAH ee zah reek VYV-choo vsee bah-ZOH-vee PRAH-vy-lah)",
          "translation": "I will study Spanish every day and in a year I will master all the basic rules."
        },
        {
          "target": "Будівельники будуватимуть міст пів року і збудують його до осені.",
          "reading": "[budʲiˈwɛlʲnɪkɪ buduˈwɑtɪmutʲ mʲist pʲiw ˈrɔku i zbuˈdujutʲ jɔˈɦɔ dɔ ˈɔsɛnʲi] (boo-dee-VEL'-ny-ky boo-doo-VAH-ty-moot' meest peev ROH-koo ee zboo-DOO-yoot' yoh-HOH doh OH-seh-nee)",
          "translation": "The builders will be building the bridge for half a year and will finish building it by autumn."
        },
        {
          "target": "Ми довго обговорюватимемо проєкт і нарешті приймемо зважене рішення.",
          "reading": "[mɪ ˈdɔwɦɔ ɔbɦɔwɔrʲuˈwɑtɪmɛmɔ prɔˈjɛkt i nɐˈrɛʃtʲi prɪjˈmɛmɔ ˈzwɑʒɛnɛ ˈrʲiʃɛnʲːɑ] (my DOHV-hoh ohb-hoh-voh-ryoo-VAH-ty-meh-moh proh-YEKT ee nah-RESH-tee preey-MEH-moh ZVAH-zheh-neh REE-shen-nyah)",
          "translation": "We will discuss the project for a long time and finally make a balanced decision."
        }
      ],
      "mnemonics": [
        "Процес і тривалість — недоконаний («будуватиму»), фінал і результат — доконаний («збудую»)!"
      ],
      "culturalNotes": [
        "У діловому листуванні та контрактах чітке розрізнення виду критично важливе: «надаватимемо послуги» (тривалий процес) проти «надамо звіт» (фіксований кінцевий результат)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Яку форму слід обрати для вираження дії, що відбуватиметься регулярно щоранку: «Щоранку я ... пробіжку»?",
          "options": [
            "Робитиму (Imperfective synthetic future for repeated/habitual action)",
            "Зроблю",
            "Був зробив",
            "Зробив би"
          ],
          "answerIndex": 0,
          "explanation": "Регулярні, повторювані дії вимагають дієслова недоконаного виду: «робитиму» або «буду робити»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, де дієслово виражає гарантований результат у конкретний момент часу:",
          "options": [
            "До п'ятої години вечора ми повністю вирішимо цю проблему.",
            "О п'ятій годині вечора ми будемо вирішувати цю проблему.",
            "Цілий вечір ми вирішуватимемо складні питання.",
            "Ми постійно вирішуємо виробничі проблеми."
          ],
          "answerIndex": 0,
          "explanation": "Форма доконаного виду «вирішимо» вказує на досягнення результату до зазначеного дедлайну."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому доконаний та недоконаний види вжито згідно з логікою процесу й результату:",
          "options": [
            "Я довго писатиму статтю і обов'язково напишу її до кінця тижня.",
            "Я довго напишу статтю і обов'язково писатиму її до кінця тижня.",
            "Я щодня напишу статтю і завтра напишу її знову.",
            "Я буду написати статтю і напишу її швидко."
          ],
          "answerIndex": 0,
          "explanation": "Слово «довго» вимагає форми недоконаного виду процесу («писатиму»), а «до кінця тижня» вимагає результату доконаного виду («напишу»)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u11-l5": {
    "id": "uk-u11-l5",
    "subject": "ukrainian",
    "unit": 11,
    "lessonNumber": 5,
    "title": "Синтаксис майбутнього часу в підрядних реченнях (Future in Condition & Time Clauses)",
    "level": "B1",
    "objective": "Опанувати правила вживання майбутнього часу в складнопідрядних реченнях умови й часу зі сполучниками якщо, коли, як тільки, після того як.",
    "presentation": {
      "explanation": "В українській мові синтаксичні правила вживання часів у підрядних обставинних реченнях умови та часу відрізняються від багатьох германських та романських мов:\n\n1. Правило вживання майбутнього часу:\nЯкщо дія підрядного речення стосується майбутнього, в українській мові ОБОВ'ЯЗКОВО вживається дієслово у формі майбутнього часу (а не теперішнього, як в англійському «if it rains»):\n   - «Якщо завтра піде дощ, ми залишимося вдома» (If it rains tomorrow, we will stay at home).\n   - «Коли ти закінчиш роботу, ми підемо на прогулянку» (When you finish work, we will go for a walk).\n   - «Як тільки прибуде потяг, я тобі зателефоную» (As soon as the train arrives, I will call you).\n\n2. Сполучники умови й часу:\n   - Умова: якщо (if), якби (if counterfactual), коли (if/when), раз (if once).\n   - Час: коли (when), як тільки / щойно (as soon as), після того як (after), перед тим як / доки (until/before).\n\n3. Узгодження часових форм:\nУ складнопідрядних реченнях обидві частини (головна і підрядна) зазвичай мають майбутній час:\n   - «Після того як ми підпишемо договір, компанія розпочне фінансування».\n   - «Доки ви не погодите кошторис, ми не зможемо розпочати будівельні роботи».",
      "examples": [
        {
          "target": "Якщо завтра погода буде сприятливою, ми вирушимо в туристичний похід.",
          "reading": "[jɑkˈʃtʃɔ ˈzɑwtrɐ pɔˈɦɔdɐ ˈbudɛ sprɪjˈlɪwɔju, mɪ wɪˈruʃɪmɔ w turɪsˈtɪtʃnɪj pɔˈxʲid] (yahk-SHCHOH ZAHV-trah poh-HOH-dah BOO-deh spryy-LY-voh-yoo, my vy-ROO-shy-moh v too-rys-TYCH-neey poh-KHEED)",
          "translation": "If the weather is favorable tomorrow, we will set off on a hiking trip."
        },
        {
          "target": "Як тільки доповідач завершить виступ, слухачі зможуть поставити запитання.",
          "reading": "[jɑk ˈtʲilʲkɪ dɔpɔwʲiˈdɑtʃ zɐwɛrˈʃɪtʲ ˈwɪstup, sluxɐˈtʃi ˈzmɔʒutʲ pɔsˈtɑwɪtɪ zɐpɪˈtɑnʲːɑ] (yahk TEEL'-ky doh-poh-vee-DAHCH zah-vehr-SHYT' VYS-toop, sloo-khah-CHEE ZMOH-zhoot' pohs-TAH-vy-ty zah-py-TAHN-nyah)",
          "translation": "As soon as the speaker finishes the presentation, the listeners will be able to ask questions."
        },
        {
          "target": "Коли ти приїдеш до Києва, ми обов'язково зустрінемося біля Золотих воріт.",
          "reading": "[kɔˈlɪ tɪ prɪˈjijidɛʃ dɔ ˈkɪjɛwɐ, mɪ ɔbɔˈwjɑzkɔwɔ zusʲˈtrʲinɛmɔsʲɑ ˈbʲilʲɑ zɔlɔˈtɪx wɔˈrʲit] (koh-LY ty pry-YEE-desh doh KY-yeh-vah, my oh-boh-V'YAHZ-koh-voh zoos-TREE-neh-mohs'-yah BEE-lyah zoh-loh-TYKH voh-REET)",
          "translation": "When you arrive in Kyiv, we will definitely meet near the Golden Gate."
        }
      ],
      "mnemonics": [
        "В українській мові майбутнє чесне: «якщо піде дощ» і «коли прийдеш» — завжди у майбутньому часі!"
      ],
      "culturalNotes": [
        "Золоті ворота в Києві — видатна пам'ятка фортифікаційної архітектури Київської Русі (XI ст.), популярне й символічне місце зустрічей у серці столиці."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення з правильним граматичним часом у підрядній частині умови для майбутньої дії:",
          "options": [
            "Якщо завтра піде сильний сніг, ми відкладемо поїздку за місто. (Subordinate clause accurately uses future tense піде)",
            "Якщо завтра йде сильний сніг, ми відкладемо поїздку за місто.",
            "Якщо завтра йшов сильний сніг, ми відкладемо поїздку за місто.",
            "Якщо завтра буде йтиму сильний сніг, ми відкладемо поїздку за місто."
          ],
          "answerIndex": 0,
          "explanation": "В українській мові підрядна частина умови для майбутньої дії вимагає форми майбутнього часу: «якщо піде сніг»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який сполучник найкраще підходить для позначення негайної дії в майбутньому: «... літак приземлиться, ми зателефонуємо батькам»?",
          "options": [
            "Як тільки (As soon as - indicates immediate sequential action in future)",
            "Доки",
            "Перед тим як",
            "Хоча"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник «як тільки» виражає безпосереднє настання наступної дії відразу після завершення попередньої."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть складнопідрядне речення часу з правильно вжитими часовими формами в обох частинах:",
          "options": [
            "Коли ми підпишемо меморандум, сторони розпочнуть спільну роботу над проєктом.",
            "Коли ми підписуємо меморандум, сторони розпочнуть спільну роботу над проєктом.",
            "Коли ми підписали меморандум, сторони будуть розпочати спільну роботу над проєктом.",
            "Коли ми підписатимемо меморандум, сторони розпочали спільну роботу."
          ],
          "answerIndex": 0,
          "explanation": "Обидві частини виражають майбутню послідовну дію, тому в обох частинах вжито форми майбутнього часу доконаного виду: «підпишемо» і «розпочнуть»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u12-l1": {
    "id": "uk-u12-l1",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 1,
    "title": "Префіксальний спосіб творення видових пар (Aspectual Prefixation)",
    "level": "B1",
    "objective": "Опанувати творення видових пар за допомогою суто видових префіксів (писати -> написати, робити -> зробити) без зміни лексичного значення.",
    "presentation": {
      "explanation": "Вид (aspect) — фундаментальна граматична категорія українського дієслова, яка вказує на перебіг дії в часі: її обмеженість/необмеженість внутрішньою межею або результатом. Більшість дієслів утворюють співвідносні видові пари (aspect pairs: недоконаний — доконаний).\n\nПрефіксація — один із найпоширеніших способів творення дієслів доконаного виду від безпрефіксних дієслів недоконаного виду:\n\n1. Чистовидові префікси (не змінюють значення слова, а лише додають значення результативності/завершеності):\n   - Префікс «на-»: писати -> написати, малювати -> намалювати, рити -> нарити.\n   - Префікс «з- / с- / зі-»: робити -> зробити, формувати -> сформувати, фотографувати -> сфотографувати, псувати -> зіпсувати.\n   - Префікс «про-»: читати -> прочитати, слухати -> прослухати, аналізувати -> проаналізувати.\n   - Префікс «по-»: будувати -> побудувати, вечеряти -> повечеряти, дякувати -> подякувати.\n   - Префікс «ви-»: пити -> випити, прати -> випрати, лікувати -> вилікувати.\n   - Префікс «за-»: гинути -> загинути, соромитися -> засоромитися.\n\n2. Відмінність від словотвірних префіксів:\nЯкщо префікс змінює лексичне значення дієслова (наприклад: писати -> переписати, підписати, описати), виникає нове слово, яке саме потребує суфіксальної форми для творення своєї видової пари (переписати -> переписувати).",
      "examples": [
        {
          "target": "Художник довго малював пейзаж і нарешті намалював справжній шедевр.",
          "reading": "[xuˈdɔʒnɪk ˈdɔwɦɔ mɐlʲuˈwɑw pɛjˈzɑʒ i nɐˈrɛʃtʲi nɐmɐlʲuˈwɑw sprɐwˈʒnʲij ʃɛˈdɛwr] (khoo-DOHZH-nyk DOHV-hoh mah-lyoo-VAHV pehy-ZAHZH ee nah-RESH-tee nah-mah-lyoo-VAHV sprahv-ZHNEEY sheh-DEHVR)",
          "translation": "The artist was painting the landscape for a long time and finally finished painting a real masterpiece."
        },
        {
          "target": "Він уважно прочитав кожен розділ нового підручника з історії України.",
          "reading": "[wʲin uˈwɑʒnɔ prɔtʃɪˈtɑw ˈkɔʒɛn rɔzʲˈdʲil ˈnɔwɔɦɔ pʲidˈrutʃnɪkɐ z isˈtɔrʲiji ukrɐˈjinɪ] (veen oo-VAHZH-noh proh-chy-TAHV KOH-zhen roz-DEEL NOH-voh-hoh peed-ROOTCH-ny-kah z ees-TOH-ry-yee oo-krah-YEE-ny)",
          "translation": "He carefully read through every chapter of the new textbook on Ukrainian history."
        },
        {
          "target": "Ми щиро подякували лікареві за своєчасну та якісну медичну допомогу.",
          "reading": "[mɪ ˈʃtʃɪrɔ pɔˈdʲɑkuwɐlɪ ˈlʲikɐrɛwʲi zɑ swɔjɛˈtʃɑsnu tɑ ˈjɑkʲisnu mɛˈdɪtʃnu dɔpɔˈmɔɦu] (my SHCHY-roh poh-DYAH-koo-wah-ly LEE-kah-reh-vee zah svoh-yeh-CHAH-snoo tah YAH-kees-noo meh-DYCH-noo doh-poh-MOH-hoo)",
          "translation": "We sincerely thanked the doctor for the timely and high-quality medical assistance."
        }
      ],
      "mnemonics": [
        "«Написати», «зробити», «прочитати» — префікс додався, результат з'явився!"
      ],
      "culturalNotes": [
        "В українській філологічній традиції чистовидові пари вважаються лексичною одиницею з двома граматичними формами, що фіксується в академічних словниках."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть дієслово доконаного виду, утворене чистовидовою префіксацією від дієслова «будувати»:",
          "options": [
            "Побудувати (Purely aspectual prefix po- creates perfective pair)",
            "Перебудувати",
            "Розбудувати",
            "Вибудувати"
          ],
          "answerIndex": 0,
          "explanation": "Префікс «по-» у слові «побудувати» виступає чистовидовим, не змінюючи лексичного ядра дієслова «будувати»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово утворює видову пару за допомогою префікса «с-» за правилами української орфографії перед [к], [п], [т], [ф], [х]?",
          "options": [
            "Сформувати (Prefix s- before labial f in формувати -> сформувати)",
            "Зформувати",
            "Зіформувати",
            "Розформувати"
          ],
          "answerIndex": 0,
          "explanation": "Перед глухими приголосними кафе «Птах» [к, п, т, ф, х] пишеться префікс «с-»: «сформувати»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому пару дієслів «робити — зробити» вжито у правильних видових формах:",
          "options": [
            "Я робив це креслення кілька годин і нарешті зробив його без жодної помилки.",
            "Я зробив це креслення кілька годин і нарешті робив його.",
            "Я робив це креслення кілька годин і нарешті робив його без помилки.",
            "Я зробив це креслення кілька годин і зробив його довго."
          ],
          "answerIndex": 0,
          "explanation": "Тривалість «кілька годин» вимагає недоконаного виду «робив», а результат «нарешті» вимагає доконаного виду «зробив»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u12-l2": {
    "id": "uk-u12-l2",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 2,
    "title": "Суфіксальний спосіб творення видових пар (Aspectual Suffixation)",
    "level": "B1",
    "objective": "Опанувати творення видових пар суфіксальним способом: вторинну імперфективацію (-ува-/-юва-, -ва-, -а-/-я-) та миттєво-одноразові дієслова з суфіксом -ну-.",
    "presentation": {
      "explanation": "Суфіксація — один із найпродуктивніших способів творення видових пар в українській мові. Вона діє у двох протилежних напрямках:\n\n1. Вторинна імперфективація (творення недоконаного виду від префіксального доконаного):\n   - Суфікси «-ува- / -юва-»: підписати (док.) -> підписувати (недок.), записати -> записувати, розказати -> розказувати.\n   - Суфікс «-ва-»: відкрити -> відкривати, забути -> забувати, налити -> наливати, зігріти -> зігрівати.\n   - Суфікси «-а- / -я-»: перевірити -> перевіряти, розв'язати -> розв'язувати, пустити -> пускати.\n   - Суфікси «-овува- / -ьовува-»: зупинити -> зупиняти / зупинювати.\n\n2. Творення доконаного виду суфіксом «-ну-» (семельфактив — одноразова, миттєва дія):\n   - Кликати (тривало) -> кликнути (один раз миттєво)\n   - Стукати -> стукнути\n   - Кричати -> крикнути\n   - Стрибати -> стрибнути\n   - Блискати -> блиснути (зі спрощенням [скн] -> [сн]).",
      "examples": [
        {
          "target": "Директор ретельно перевіряє кожен документ перед тим, як підписати його.",
          "reading": "[dɪˈrɛktɔr ˈrɛtɛlʲnɔ pɛrɛwʲiˈrʲɑjɛ ˈkɔʒɛn dɔkuˈmɛnt ˈpɛrɛd tɪm jɑk pʲidpɪˈsɑtɪ jɔˈɦɔ] (dy-REK-tohr REH-tel'-noh peh-reh-vee-RYAH-yeh KOH-zhen doh-koo-MENT PEH-red tym yahk peed-py-SAH-ty yoh-HOH)",
          "translation": "The director thoroughly checks every document before signing it."
        },
        {
          "target": "Несподівано в темному небі яскраво блиснула нічна блискавка.",
          "reading": "[nɛspɔˈdʲiwɐnɔ w ˈtɛmnɔmu ˈnɛbʲi jɑsˈkrɑwɔ ˈblɪsnulɐ nʲitʃˈnɑ ˈblɪskɐwkɐ] (neh-spoh-DEE-vah-noh v TEM-noh-moo NEH-bee yahs-KRAH-woh BLYS-noo-lah neetch-NAH BLYS-kahv-kah)",
          "translation": "Suddenly in the dark sky a night lightning bolt flashed brightly."
        },
        {
          "target": "Ми щотижня відкриваємо нові можливості для молодих науковців.",
          "reading": "[mɪ ʃtʃɔˈtɪʒnʲɑ wʲidkrɪˈwɑjɛmɔ nɔˈwʲi mɔʒˈlɪwɔsʲtʲi dlʲɑ mɔlɔˈdɪx nɐuˈkɔwt͡sʲiw] (my shchoh-TYZH-nyah veed-kry-VAH-yeh-moh noh-VEE mohzh-LY-vohs-tee dlyah moh-loh-DYKH nah-oo-KOV-tseev)",
          "translation": "Every week we open up new opportunities for young scientists."
        }
      ],
      "mnemonics": [
        "Суфікс «-ва- / -ува-» подовжує дію в процес, а суфікс «-ну-» робить її миттєвою, мов постріл!"
      ],
      "culturalNotes": [
        "Дієслова на -нути надзвичайно характерні для українського динамічного фольклору та казок: «глянув», «шарахнув», «гукнув», створюючи живу образність."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть дієслово недоконаного виду способом вторинної імперфективації від «переписати»:",
          "options": [
            "Переписувати (Secondary imperfective formed with suffix -ува-)",
            "Переписавати",
            "Переписування",
            "Переписатиму"
          ],
          "answerIndex": 0,
          "explanation": "За допомогою суфікса -ува- від доконаного «переписати» утворюється недоконана форма процесу «переписувати»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово позначає одноразову миттєву дію (семельфактив), утворену суфіксом «-ну-»?",
          "options": [
            "Смикнути (Instantaneous single act formed with suffix -ну- from смикати)",
            "Смикати",
            "Пересмикувати",
            "Висмикувати"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «смикнути» виражає одноразовий швидкий рух завдяки суфіксу -ну-."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому суфіксальну видову пару вжито бездоганно:",
          "options": [
            "Студенти щодня записують лекції і вчора записали найважливіші тези.",
            "Студенти щодня записали лекції і вчора записують найважливіші тези.",
            "Студенти щодня записуватимуть лекції і вчора записувати лекцію.",
            "Студенти вчора записати лекцію і щодня записали тези."
          ],
          "answerIndex": 0,
          "explanation": "Прислівник «щодня» вимагає регулярної недоконаної форми «записують», а «вчора» з конкретним результатом — доконаної «записали»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u12-l3": {
    "id": "uk-u12-l3",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 3,
    "title": "Чергування звуків у корені видових пар (Stem Alternations in Aspect Pairs)",
    "level": "B1",
    "objective": "Опанувати історичні чергування голосних ([о]/[а], [е]/[і], [е]/[и]) та приголосних в основах дієслівних видових пар (допомогти — допомагати, зібрати — збирати).",
    "presentation": {
      "explanation": "При творенні видових пар в українській мові суфіксація дуже часто супроводжується закономірними історичними чергуваннями голосних і приголосних фонем у корені дієслова:\n\n1. Чергування голосних [о] / [а] (найпродуктивніше правило):\nКорневий звук [о] в дієсловах доконаного виду закономірно переходить в [а] у дієсловах недоконаного виду перед суфіксами «-а-» або «-ва-»:\n   - Допомогти (док.) -> допомагати (недок.)\n   - Перемогти -> перемагати\n   - Схопити -> хапати / схоплювати\n   - Виростити -> вирощувати / виростати\n   - Простити -> прощати\n   - Ломати -> ламати\n\n2. Чергування голосних [е] / [і] та [е] / [и]:\n   - Заплести -> заплітати, вимести -> вимітати, злетіти -> злітати.\n   - Померти -> помирати, витерти -> витирати, зібрати -> збирати, підстелити -> підстилати.\n\n3. Чергування приголосних звуків:\n   - [д] / [дж] / [ж]: посадити -> саджати, народити -> народжувати.\n   - [ст] / [щ]: простити -> прощати, пустити -> пускати.\n   - [к], [г], [х] перед суфіксами: торкнутися -> торкатися, лягти -> лягати.",
      "examples": [
        {
          "target": "Волонтери невтомно допомагають літнім людям і вже допомогли сотням родин.",
          "reading": "[wɔlɔnˈtɛrɪ nɛwˈtɔmnɔ dɔpɔmɐˈɦɑjutʲ ˈlʲitnʲim ˈlʲudʲɐm i wʒɛ dɔpɔmɔɦˈlɪ ˈsɔtnʲɐm rɔˈdɪn] (woh-lohn-TEH-ry new-TOHM-noh doh-poh-mah-HAH-yoot' LEET-neem LYOO-dyahm ee vzheh doh-poh-moh-HLY SOHT-nyahm roh-DYN)",
          "translation": "Volunteers tirelessly help elderly people and have already helped hundreds of families."
        },
        {
          "target": "Команда наполегливо перемагає в кожному матчі сезону.",
          "reading": "[kɔˈmɑndɐ nɐpɔˈlɛɦlɪwɔ pɛrɛmɐˈɦɑjɛ w ˈkɔʒnɔmu ˈmɑttʃʲi sɛˈzɔnu] (koh-MAHN-dah nah-poh-LEH-hly-woh peh-reh-mah-HAH-yeh v KOHZH-noh-moo MAHT-chee seh-ZOH-noo)",
          "translation": "The team persistently wins in every match of the season."
        },
        {
          "target": "Ми щоосені збираємо врожай яблук, який посадили наші дідусі.",
          "reading": "[mɪ ʃtʃɔˈɔsɛnʲi zbɪˈrɑjɛmɔ wrɔˈʒɑj ˈjɑbluk jɑˈkɪj pɔsɐˈdɪlɪ ˈnɑʃi dʲiduˈsʲi] (my shchoh-OH-seh-nee zby-RAH-yeh-moh vroh-ZHAHY YAHB-look yah-KYY poh-sah-DY-ly NAH-shee dee-doo-SEE)",
          "translation": "Every autumn we gather the apple harvest which our grandfathers planted."
        }
      ],
      "mnemonics": [
        "Доконаний [о] покликав [а] — і процес триває без кінця: «допомогти — допомагати», «перемогти — перемагати»!"
      ],
      "culturalNotes": [
        "Чергування [о]/[а] в коренях дієслів — давня загальнослов'янська риса, яка в українській мові збереглася в найчистішому та найбільш системному вигляді."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть форму недоконаного виду з правильним кореневим чергуванням [о]/[а] від дієслова «допомогти»:",
          "options": [
            "Допомагати (Stem vowel o shifts to a before suffix -а-)",
            "Допомогати",
            "Допоможувати",
            "Допомогтимути"
          ],
          "answerIndex": 0,
          "explanation": "Перед суфіксом -а- кореневий звук [о] обов'язково чергується з [а]: «допомагати» (написання «допомогати» є орфографічною помилкою)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово демонструє чергування [е]/[и] в корені у видовій парі «зібрати — ...»?",
          "options": [
            "Збирати (Root vowel e/zero shifts to y in imperfective zbyraty)",
            "Зберати",
            "Зборяти",
            "Зібрання"
          ],
          "answerIndex": 0,
          "explanation": "У дієслові «збирати» перед суфіксом -а- виступає кореневий голосний [и]: «зібрати — збирати»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому не допущено орфографічних помилок у дієсловах із чергуванням голосних:",
          "options": [
            "Українські захисники мужньо перемагають ворога на всіх напрямках.",
            "Українські захисники мужньо перемогують ворога на всіх напрямках.",
            "Українські захисники мужньо перемоговають ворога.",
            "Українські захисники мужньо перемогнуть ворога щодня."
          ],
          "answerIndex": 0,
          "explanation": "Форма теперішнього часу недоконаного виду від «перемогти» пишеться з буквою «а»: «перемагають»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u12-l4": {
    "id": "uk-u12-l4",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 4,
    "title": "Суплетивні видові пари та зміна наголосу (Suppletion & Stress Shift Pairs)",
    "level": "B1",
    "objective": "Опанувати суплетивні видові пари (брати — взяти, ловити — піймати, говорити — сказати) та розрізнення виду за допомогою зміни місця наголосу.",
    "presentation": {
      "explanation": "Не всі видові пари в українській мові творяться стандартними афіксами. Існують дві особливі граматичні групи:\n\n1. Суплетивні видові пари (утворюються від різних коренів/основ):\n   - Брати (недок., процес) — взяти (док., результат)\n   - Говорити (недок.) — сказати (док.)\n   - Ловити (недок.) — піймати / впіймати (док.)\n   - Класти (недок.) — покласти (док., префіксально-кореневий зсув) / положити\n   - Шукати (недок.) — знайти (док., семантична суплетивність)\n\n2. Акцентуаційні видові пари (розрізняються виключно місцем наголосу):\nЗміна місця наголосу змінює видову належність дієслова без зміни жодної літери:\n   - Розсипа́ти (недок., що робити?) — розси́пати (док., що зробити?)\n   - Вимі́рювати (недок.) — ви́міряти (док.)\n   - Склика́ти (недок., тривало збирати людей) — скли́кати (док., одноразово зібрати збори)\n   - Розріза́ти (недок.) — розрі́зати (док.)\n   - Насипа́ти (недок.) — наси́пати (док.)\n   - Відклика́ти (недок.) — відкли́кати (док.).",
      "examples": [
        {
          "target": "Я щодня беру книги в бібліотеці і сьогодні взяв найновіший науковий збірник.",
          "reading": "[jɑ ʃtʃɔdʲˈnʲɑ bɛˈru ˈknɪɦɪ w bʲiblʲiɔˈtɛt͡sʲi i sʲɔˈɦɔdnʲi wzʲɑw nɐjnɔˈwʲiʃɪj nɐuˈkɔwɪj ˈzbʲirnɪk] (yah shchohd-NYAH beh-ROO KNY-hy v beeb-lee-oh-TEH-tsee ee syoh-HOHD-nee vzyahv nahy-noh-VEE-shyy nah-oo-KOH-wyy ZBEER-nyk)",
          "translation": "I take books from the library every day and today I took the newest scientific collection."
        },
        {
          "target": "Необхідно терміново скли́кати позачергове засідання вченої ради університету.",
          "reading": "[nɛɔbˈxʲidnɔ tɛrˈmʲinɔwɔ ˈsklɪkɐtɪ pɔzɐtʃɛrɦɔˈwɛ zɐˈsʲidɐnʲːɑ ˈwtʃɛnɔji ˈrɑdɪ unʲiwɛrsɪˈtɛtu] (neh-ohb-KHEED-noh tehr-MEE-noh-woh SKLY-kah-ty poh-zah-chehr-hoh-WEH zah-SEE-dahn-nyah VCHEH-noh-yee RAH-dy oo-nee-vehr-sy-TEH-too)",
          "translation": "It is necessary to urgently convene an extraordinary meeting of the university academic council."
        },
        {
          "target": "Він довго говорив про плани на майбутнє і врешті сказав найголовніше.",
          "reading": "[wʲin ˈdɔwɦɔ ɦɔwɔˈrɪw prɔ ˈplɑnɪ nɑ mɐjˈbutnʲɛ i ˈwrɛʃtʲi skɐˈzɑw nɐjɦɔlɔwˈnʲiʃɛ] (veen DOHV-hoh hoh-woh-RYV proh PLAH-ny nah mahy-BOOT-nyeh ee VRESH-tee skah-ZAHV nahy-hoh-lov-NEE-sheh)",
          "translation": "He was speaking for a long time about plans for the future and finally said the most important thing."
        }
      ],
      "mnemonics": [
        "«Брати — взяти», «говорити — сказати» — різні корені, але одна нерозлучна видова родина!"
      ],
      "culturalNotes": [
        "Правильний наголос у парах на кшталт «склика́ти / скли́кати» є критерієм високої культури мовлення на телебаченні, радіо та в університетському викладанні."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть суплетивну доконану пару до дієслова недоконаного виду «брати»:",
          "options": [
            "Взяти (Suppletive perfective aspect counterpart to imperfective брати)",
            "Бранути",
            "Побирати",
            "Братиму"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «брати» утворює доконаний вид суплетивно: «взяти»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово є доконаним видом завдяки наголосу на префіксальному складі кореня?",
          "options": [
            "Скли́кати (Perfective aspect distinguished by stress on first syllable)",
            "Склика́ти",
            "Скликавати",
            "Скликуючи"
          ],
          "answerIndex": 0,
          "explanation": "«Скли́кати» (наголос на першому складі) відповідає на питання «що зробити?» і є дієсловом доконаного виду."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому суплетивні видові форми вжито граматично й лексично правильно:",
          "options": [
            "Викладач довго говорив про історію мови і нарешті сказав дату іспиту.",
            "Викладач довго сказав про історію мови і нарешті говорив дату іспиту.",
            "Викладач щойно говорив дату іспиту на один раз.",
            "Викладач цілий день сказав студентам про граматику."
          ],
          "answerIndex": 0,
          "explanation": "Тривале висловлювання позначається недоконаним «говорив», а короткий підсумок — суплетивним доконаним «сказав»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u12-l5": {
    "id": "uk-u12-l5",
    "subject": "ukrainian",
    "unit": 12,
    "lessonNumber": 5,
    "title": "Одновидові та двовидові дієслова (Imperfectiva & Perfectiva Tantum)",
    "level": "B1",
    "objective": "Опанувати розрізнення одновидових дієслів (imperfectiva tantum: сподіватися; perfectiva tantum: схаменутися) та запозичених двовидових дієслів (організувати, гарантувати).",
    "presentation": {
      "explanation": "Не всі дієслова в українській мові мають парну видову форму. Існують групи дієслів із дефектними парадигмами або особливим статусом:\n\n1. Одновидові дієслова недоконаного виду (Imperfectiva tantum):\nДієслова, які позначають стан, властивість, тривале неперервне відношення і не мають форми доконаного виду:\n   - Сподіватися, потребувати, прагнути, належати, розмовляти, марити, ворогувати, спостерігати.\n\n2. Одновидові дієслова доконаного виду (Perfectiva tantum):\nДієслова, які позначають раптову, вичерпану або надмірну дію і не мають форми недоконаного виду:\n   - Схаменутися, розговоритися, насидітися, прогриміти, отямитися, розбагатіти, натерпітися.\n\n3. Двовидові дієслова (Biaspectual verbs):\nДієслова (переважно іншомовного походження з суфіксами «-ува- / -ізува-»), одна й та сама форма яких залежно від контексту може означати як доконаний, так і недоконаний вид:\n   - Організувати: «Ми зараз організуємо конференцію» (недок., процес) vs «Ми вже організували все необхідне» (док., результат).\n   - Гарантувати, телефонувати, ліквідувати, депортувати, атакувати, анулювати, реформувати.",
      "examples": [
        {
          "target": "Кожна людина щиро прагне щастя і потребує підтримки близьких людей.",
          "reading": "[ˈkɔʒnɐ lʲuˈdɪnɐ ˈʃtʃɪrɔ ˈprɑɦnɛ ˈʃtʃɑsʲtʲɑ i pɔtrɛˈbujɛ pʲidˈtrɪmkɪ ˈblɪzʲkɪx ˈlʲudɛj] (KOHZH-nah lyoo-DY-nah SHCHY-roh PRAH-hneh SHCHAHS-tyah ee poh-treh-BOO-yeh peed-TRYM-ky BLYZ'-kykh lyoo-DEHY)",
          "translation": "Every person sincerely strives for happiness and needs the support of close people."
        },
        {
          "target": "Наш університет щорічно організовує / організує престижний науковий форум.",
          "reading": "[nɑʃ unʲiwɛrsɪˈtɛt ʃtʃɔˈrʲitʃnɔ ɔrɦɐnʲiˈzɔwujɛ / ɔrɦɐnʲiˈzujɛ prɛsˈtɪʒnɪj nɐuˈkɔwɪj ˈfɔrum] (nahsh oo-nee-vehr-sy-TET shchoh-REECH-noh ohr-hah-nee-ZOH-voo-yeh / ohr-hah-nee-ZOO-yeh pres-TYZH-nyy nah-oo-KOH-wyy FOH-room)",
          "translation": "Our university annually organizes a prestigious scientific forum."
        },
        {
          "target": "Після важкої розмови він нарешті схаменувся і визнав свою неправоту.",
          "reading": "[ˈpʲisʲlʲɑ wɐʒˈkɔji rɔzˈmɔwɪ wʲin nɐˈrɛʃtʲi sxɐmɛˈnuwsʲɑ i ˈwɪznɑw swɔˈju nɛprɐwɔˈtu] (PEES-lyah vahzh-KOH-yee roz-MOH-vy veen nah-RESH-tee skhah-meh-NOOV-syah ee VYZ-nahv svoh-YOO neh-prah-woh-TOO)",
          "translation": "After a hard conversation he finally came to his senses and admitted his error."
        }
      ],
      "mnemonics": [
        "«Потребувати» завжди триває (недок.), «схаменутися» стається вмить (док.), а «організувати» грає за обидва боки!"
      ],
      "culturalNotes": [
        "В українській публіцистичній та правничій термінології двовидові дієслова («гарантувати», «ратифікувати») набувають чіткого виду завдяки часовим маркерам та обставинам."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть одновидове дієслово недоконаного виду (imperfectivum tantum), що не має доконаної пари:",
          "options": [
            "Потребувати (Imperfectivum tantum denoting continuous state/need)",
            "Написати",
            "Зробити",
            "Випити"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «потребувати» виражає стан потреби і не має граматичної пари доконаного виду."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як визначається видовий статус двовидового дієслова «анулювати» у реченні «Банк учора повністю анулював угоду»?",
          "options": [
            "Доконаний вид (Context marker учора повністю indicates completed perfective action with result)",
            "Недоконаний вид",
            "Минулий незавершений вид",
            "Безособовий вид"
          ],
          "answerIndex": 0,
          "explanation": "Контекстуальні маркери «учора повністю» вказують на досягнутий кінцевий результат, тому дієслово функціонує як доконаний вид."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому всі дієслова належать до групи одновидових доконаного виду (perfectiva tantum):",
          "options": [
            "Схаменутися, розговоритися, насидітися.",
            "Писати, читати, говорити.",
            "Потребувати, сподіватися, належати.",
            "Організувати, ліквідувати, гарантувати."
          ],
          "answerIndex": 0,
          "explanation": "Дієслова «схаменутися, розговоритися, насидітися» мають значення вичерпаності/надмірності дії і не утворюють недоконаних форм."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u13-l1": {
    "id": "uk-u13-l1",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 1,
    "title": "Безпрефіксні дієслова руху (Unprefixed Motion Verbs)",
    "level": "B1",
    "objective": "Опанувати розрізнення односпрямованого (іти, їхати, бігти, летіти) та неодноспрямованого/повторюваного (ходити, їздити, бігати, літати) руху в теперішньому та минулому часах.",
    "presentation": {
      "explanation": "В українській мові безпрефіксні дієслова руху утворюють унікальну систему пар, де обидва дієслова належать до недоконаного виду, але розрізняються спрямованістю та характером переміщення:\n\n1. Односпрямовані дієслова (Unidirectional) — позначають рух в одному конкретному напрямку, що відбувається в певний момент мовлення:\n   - Іти (пішки): «Я зараз іду до бібліотеки» (I am walking to the library right now).\n   - Їхати (транспортом): «Потяг їде до Львова».\n   - Бігти: «Спортсмен біжить до фінішу».\n   - Летіти: «Птах летить на південь».\n   - Плисти: «Човен пливе до острова».\n\n2. Неодноспрямовані дієслова (Multidirectional / Habitual) — позначають рух у різних напрямках, регулярне/повторюване переміщення, рух туди й назад (round trip) або здатність рухатися:\n   - Ходити: «Я щодня ходжу до університету» (регулярність), «Вчора я ходив у театр» (туди й назад).\n   - Їздити: «Ми часто їздимо в Карпати».\n   - Бігати: «Діти весело бігають у парку».\n   - Літати: «Літаки літають щодня».\n   - Плавати: «Він уміє добре плавати».\n\n3. Минулий час: «Я вчора йшов парком, коли зустрів друга» (процес у момент) vs «Я вчора ходив у парк» (завершений похід туди й назад).",
      "examples": [
        {
          "target": "Зараз я швидко йду на важливу зустріч, тому що поспішаю.",
          "reading": "[ˈzɑrɐz jɑ ˈʃwɪdkɔ jdu nɑ wɑʒˈlɪwu ˈzustrʲitʃ, ˈtɔmu ʃtʃɔ pɔsʲpʲiˈʃɑju] (ZAH-rahz yah SHVYD-koh YDOO nah vahzh-LY-voo ZOOST-veech, TOH-moo shchoh poh-spee-SHAH-yoo)",
          "translation": "Right now I am walking quickly to an important meeting because I am in a hurry."
        },
        {
          "target": "Ми щонеділі ходимо на вистави до Національного академічного театру.",
          "reading": "[mɪ ʃtʃɔnɛˈdʲilʲi ˈxɔdɪmɔ nɑ wɪsˈtɑwɪ dɔ nɐt͡sʲiɔˈnɑlʲnɔɦɔ ɐkɐdɛˈmʲitʃnɔɦɔ tɛˈɑtru] (my shchoh-neh-DEE-lee KHOH-dy-moh nah vys-TAH-wy doh nah-tsee-oh-NAHL'-noh-hoh ah-kah-deh-MEECH-noh-hoh teh-AH-troo)",
          "translation": "Every Sunday we go to performances at the National Academic Theater."
        },
        {
          "target": "Поїзд «Інтерсіті» плавно їде мальовничим маршрутом Київ — Харків.",
          "reading": "[ˈpɔjizd intɛrˈsʲitʲi ˈplɑwnɔ ˈjijidɛ mɐlʲɔwˈnɪtʃɪm mɐrʃˈrutɔm ˈkɪjiw ˈxɑrkiw] (POH-yeezd een-tehr-SEE-tee PLAHV-noh YEE-deh mahl'-ohv-NY-chym mahrsh-ROO-tohm KY-yeev KHAHR-keev)",
          "translation": "The Intercity train travels smoothly along the picturesque Kyiv–Kharkiv route."
        }
      ],
      "mnemonics": [
        "«Іду» — один шлях прямо зараз; «ходжу» — туди й назад щодня!"
      ],
      "culturalNotes": [
        "Поїзд «Київ — Львів» чи «Київ — Харків» є класичним прикладом для дієслова «їхати», оскільки залізничний транспорт в Україні є ключовою артерією пасажирських перевезень."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильне дієслово руху для речення, що виражає регулярну повторювану дію: «Щоранку студенти ... пішки до корпусу»:",
          "options": [
            "Ходять (Multidirectional/habitual verb for repeated action щоранку)",
            "Ідуть",
            "Йшли",
            "Підуть"
          ],
          "answerIndex": 0,
          "explanation": "Прислівник «щоранку» вказує на регулярний повторюваний рух, що вимагає неодноспрямованого дієслова «ходять»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке речення описує процес руху в одному напрямку безпосередньо в момент мовлення?",
          "options": [
            "Поглянь, куди так стрімко біжить той спортсмен?",
            "Він щодня бігає вранці навколо озера.",
            "Діти часто бігають коридорами школи.",
            "Птахи вміють літати високо в небі."
          ],
          "answerIndex": 0,
          "explanation": "Слово «поглянь» та питальне «куди» вказують на конкретний односпрямований рух у момент мовлення: «біжить»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому безпрефіксні дієслова руху вжито згідно з логікою спрямованості:",
          "options": [
            "Коли я йшов додому, я зустрів сусіда, який щодня ходить цим шляхом.",
            "Коли я ходив додому в той момент, я зустрів сусіда, який щодня йде.",
            "Я щодня йду до школи, а зараз ходив туди.",
            "Потяг щодня їде до Одеси в усі боки одночасно."
          ],
          "answerIndex": 0,
          "explanation": "У моментній дії («коли йшов») вжито односпрямоване «йшов», а для регулярності («щодня») — неодноспрямоване «ходить»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u13-l2": {
    "id": "uk-u13-l2",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 2,
    "title": "Транзитивні дієслова переміщення предметів (Transitive Motion Verbs)",
    "level": "B1",
    "objective": "Опанувати вживання транзитивних дієслів переміщення об'єктів (нести/носити, вести/водити, везти/возити) та розрізнення пішого перенесення, супроводу та перевезення транспортом.",
    "presentation": {
      "explanation": "Транзитивні дієслова руху поєднуються з прямим додатком у знахідному відмінку (кого? що?) і також поділяються на односпрямовані та неодноспрямовані:\n\n1. Три пари транзитивних дієслів переміщення:\n   - Нести (односпр.) / Носити (неодноспр.) — переміщати предмет у руках або на собі пішки:\n     * «Я зараз несу важкий рюкзак» vs «Я завжди ношу окуляри» / «Він носить книжки до бібліотеки щотижня».\n   - Вести (односпр.) / Водити (неодноспр.) — супроводжувати живу істоту або керувати рухомим засобом:\n     * «Мати веде дитину за руку до дитсадка» vs «Він уміє впевнено водити автомобіль».\n   - Везти (односпр.) / Возити (неодноспр.) — переміщати об'єкт за допомогою транспортного засобу:\n     * «Водій везе пасажирів до аеропорту» vs «Вантажівка щодня возить будматеріали».\n\n2. Фонетичні та граматичні чергування:\n   - Нести: несу, несеш, несе, несемо, несете, несуть; минулий час: ніс, несла, несло, несли.\n   - Вести: веду, ведеш...; минулий час: вів, вела, вело, вели.\n   - Везти: везу, везеш...; минулий час: віз, везла, везло, везли.",
      "examples": [
        {
          "target": "Кур'єр обережно несе свіжі квіти та подарунок для іменинниці.",
          "reading": "[kurˈjɛr ɔbɛˈrɛʒnɔ nɛˈsɛ swʲiˈʒi ˈkwʲitɪ tɑ pɔˈdɑrunɔk dlʲɑ imɛˈnɪnːɪt͡sʲi] (koor-YEHR oh-beh-REHZH-noh neh-SEH svee-ZHEE KVEE-ty tah poh-DAH-roo-nohk dlyah ee-meh-NYN-ny-tsee)",
          "translation": "The courier is carefully carrying fresh flowers and a gift for the birthday girl."
        },
        {
          "target": "Мій батько вже понад двадцять років професійно водить великі автобуси.",
          "reading": "[mʲij ˈbɑtʲkɔ wʒɛ ˈpɔnɐd ˈdwɑd͡zʲɑtʲ ˈrɔkʲiw prɔfɛˈsʲijnɔ ˈwɔdɪtʲ wɛˈlɪkʲi ɐwtɔˈbusɪ] (meey BAHT'-koh vzheh POH-nahd DVAHD-tsyat' ROH-keew proh-feh-SEEY-noh VOH-dyt' veh-LY-kee ahv-toh-BOO-sy)",
          "translation": "My father has been professionally driving large buses for over twenty years."
        },
        {
          "target": "Спеціальний потяг везе гуманітарну допомогу до постраждалих районів.",
          "reading": "[spɛt͡sʲiˈɑlʲnɪj ˈpɔtʲɑɦ wɛˈzɛ ɦumɐnʲiˈtɑrnu dɔpɔˈmɔɦu dɔ pɔstrɐʒˈdɑlɪx rɐˈjɔnʲiw] (speh-tsee-AHL'-nyy POH-tyahk veh-ZEH hoo-mah-nee-TAHR-noo doh-poh-MOH-hoo doh poh-strahzh-DAH-lykh rah-YOH-neew)",
          "translation": "A special train is transporting humanitarian aid to the affected regions."
        }
      ],
      "mnemonics": [
        "У руках пішки — «несу», за руку чи за кермом — «веду», у кузові чи вагоні — «везу»!"
      ],
      "culturalNotes": [
        "Форми минулого часу «ніс», «вів», «віз» демонструють класичне чергування кореневого [е] з [і] в закритому складі."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильне дієслово для перевезення вантажу автомобілем у момент мовлення: «Вантажівка зараз ... зерно на елеватор»:",
          "options": [
            "Везе (Unidirectional transport by vehicle in present moment)",
            "Несе",
            "Веде",
            "Возить"
          ],
          "answerIndex": 0,
          "explanation": "Переміщення транспортом у даний момент позначається дієсловом «везе»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку форму минулого часу чоловічого роду має дієслово «вести» в українській мові?",
          "options": [
            "Вів (Historical masculine past with alternation e -> i in closed syllable)",
            "Веснув",
            "Вестив",
            "Водивний"
          ],
          "answerIndex": 0,
          "explanation": "Форма минулого часу чоловічого роду від «вести» — «він вів»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому транзитивні дієслова переміщення вжито граматично точно:",
          "options": [
            "Бабуся веде онука до парку, а дідусь везе покупки у візку.",
            "Бабуся везе онука за руку пішки, а дідусь носить автобус.",
            "Бабуся несе автомобіль на дорозі, а дідусь водить валізу в руках.",
            "Бабуся веде валізу в кишені, а дідусь ніс потяг."
          ],
          "answerIndex": 0,
          "explanation": "«Веде онука за руку» (супровід живої істоти) та «везе у візку» (транспортування засобом) є абсолютно точним слововживанням."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u13-l3": {
    "id": "uk-u13-l3",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 3,
    "title": "Просторові префікси з дієсловами руху (Spatial Prefixes on Motion Verbs)",
    "level": "B1",
    "objective": "Опанувати творення префіксальних дієслів руху доконаного виду та їх синтаксичне керування просторовими прийменниками (вийти з, зайти в, підійти до, перейти через).",
    "presentation": {
      "explanation": "Додавання просторових префіксів до односпрямованих дієслів руху перетворює їх на дієслова доконаного виду, які позначають завершене переміщення за чіткою просторовою траєкторією:\n\n1. Основні просторові префікси та прийменникове керування:\n   - «При-» (наближення, прибуття в кінцевий пункт): прийти, приїхати, прилетіти, принести -> керує «до + Родовий» або «в/на + Знахідний» («прийти додому», «приїхати в Київ»).\n   - «Ви-» (рух зсередини назовні): вийти, виїхати, вибігти -> керує «з/із + Родовий» («вийти з аудиторії»).\n   - «В- / У- / За-» (рух усередину або короткий візит): увійти, зайти, заїхати -> керує «в/до + Знахідний/Родовий» («зайти в кав'ярню»).\n   - «Під-» (наближення впритул): підійти, під'їхати -> керує «до + Родовий» («підійти до викладача»).\n   - «Від-» (віддалення на коротку відстань): відійти, від'їхати -> керує «від + Родовий» («відійти від краю платформи»).\n   - «Пере-» (рух через перешкоду або з місця на місце): перейти, переїхати -> керує «через + Знахідний» («перейти через міст»).\n   - «До-» (рух до певної просторової межі): дійти, доїхати -> керує «до + Родовий» («дійти до перехрестя»).",
      "examples": [
        {
          "target": "Студенти вчасно прийшли на лекцію і зайшли до просторої аудиторії.",
          "reading": "[stuˈdɛntɪ ˈwtʃɑsnɔ prɪjʃˈlɪ nɑ ˈlɛkt͡sʲiju i zɐjʃˈlɪ dɔ prɔsˈtɔrɔji ɐwdɪˈtɔrʲiji] (stoo-DEN-ty VCHAH-snoh preey-SHLY nah LEK-tsee-yoo ee zahy-SHLY doh prohs-TOH-roh-yee ah-oo-dy-TOH-ry-yee)",
          "translation": "The students arrived on time for the lecture and entered the spacious classroom."
        },
        {
          "target": "Будь ласка, обережно перейдіть вулицю через регульований пішохідний перехід.",
          "reading": "[budʲ ˈlɑskɐ, ɔbɛˈrɛʒnɔ pɛrɛjʲˈdʲitʲ ˈwulɪt͡sʲu ˈtʃɛrɛz rɛɦuˈlʲɔwɐnɪj pʲiʃɔˈxʲidnɪj pɛrɛˈxʲid] (bood' LAHS-kah, oh-beh-REHZH-noh peh-rehy-DEET' VOO-ly-tsoo CHEH-rez reh-hoo-LYOH-vah-nyy pee-shoh-KHEED-nyy peh-reh-KHEED)",
          "translation": "Please cross the street carefully via the regulated pedestrian crossing."
        },
        {
          "target": "Пасажири вийшли з вагонів поїзда і підійшли до виходу в місто.",
          "reading": "[pɐsɐˈʒɪrɪ ˈwɪjʃlɪ z wɐˈɦɔnʲiw ˈpɔjizdɐ i pʲidʲijʃˈlɪ dɔ ˈwɪxɔdu w ˈmʲistɔ] (pah-sah-ZHY-ry VY YSH-ly z vah-HOH-neew POH-yeez-dah ee peed-eey-SHLY doh VY-khoh-doo v MEES-toh)",
          "translation": "The passengers exited the train cars and approached the exit to the city."
        }
      ],
      "mnemonics": [
        "«При-» — прибули, «ви-» — вискочили, «під-» — підійшли до цілі!"
      ],
      "culturalNotes": [
        "Апостроф після префіксів на приголосний перед я, ю, є, ї є важливим правилом орфографії: «під'їхати», «об'їхати», «роз'їхатися»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть префіксальне дієслово доконаного виду зі значенням «рух через перешкоду з одного боку на інший»:",
          "options": [
            "Перейти (Prefix пере- indicates crossing across a space or obstacle)",
            "Підійти",
            "Вийти",
            "Зайти"
          ],
          "answerIndex": 0,
          "explanation": "Префікс «пере-» у дієслові «перейти» позначає перетин вулиці, мосту чи перешкоди."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який прийменник вимагає дієслово «підійти» для позначення наближення до об'єкта?",
          "options": [
            "До + Родовий відмінок (підійти до вікна)",
            "З + Орудний відмінок",
            "Через + Знахідний відмінок",
            "На + Місцевий відмінок"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «підійти» стандартно керує конструкцією «до + Родовий відмінок»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з правильним орфографічним написанням дієслова руху з апострофом після префікса:",
          "options": [
            "Автомобіль швидко під'їхав до центрального входу готелю.",
            "Автомобіль швидко підїхав до центрального входу готелю.",
            "Автомобіль швидко подіхав до центрального входу готелю.",
            "Автомобіль швидко підьїхав до центрального входу готелю."
          ],
          "answerIndex": 0,
          "explanation": "Після префікса на твердий приголосний «під-» перед буквою «ї» обов'язково пишеться апостроф: «під'їхав»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u13-l4": {
    "id": "uk-u13-l4",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 4,
    "title": "Префіксальні видові пари дієслів руху (Prefixed Aspect Pairs of Motion)",
    "level": "B1",
    "objective": "Опанувати співвідношення та творення повноцінних видових пар префіксальних дієслів руху (прийти — приходити, виїхати — виїжджати, принести — приносити).",
    "presentation": {
      "explanation": "Коли до неодноспрямованих дієслів руху додаються префікси, утворюються префіксальні дієслова недоконаного виду, які складають системні видові пари з префіксальними дієсловами доконаного виду:\n\n1. Модель творення видових пар дієслів руху:\n   - Доконаний вид (Префікс + односпрямоване дієслово):\n     * прийти, вийти, зайти, підійти, перейти, виїхати, принести, відвезти.\n   - Недоконаний вид (Префікс + неодноспрямоване дієслово):\n     * приходити, виходити, заходити, підходити, переходити, виїжджати (їздити -> їжджати з чергуванням зд/ждж), приносити, відвозити.\n\n2. Регулярні видові пари руху:\n   - Прийти (що зробити?, результат) — приходити (що робити?, процес/регулярність)\n   - Виїхати (док.) — виїжджати (недок.)\n   - Забігти (док.) — забігати (недок.)\n   - Прилетіти (док.) — прилітати (недок.)\n   - Переплисти (док.) — перепливати (недок.)\n   - Принести (док.) — приносити (недок.)\n   - Відвезти (док.) — відвозити (недок.)\n   - Підвести (док.) — підводити (недок.).",
      "examples": [
        {
          "target": "Він щодня приходить о восьмій, але вчора прийшов трохи раніше.",
          "reading": "[wʲin ʃtʃɔdʲˈnʲɑ prɪˈxɔdɪtʲ ɔ ˈwɔsʲmʲij, ˈɑlɛ uˈtʃɔrɐ prɪjˈʃɔw ˈtrɔxɪ ˈrɑnʲiʃɛ] (veen shchohd-NYAH pry-KHOH-dyt' oh VOHS-meey, AH-leh oo-CHOH-rah preey-SHOHV TROH-khy RAH-nyee-sheh)",
          "translation": "He comes every day at eight, but yesterday he arrived a bit earlier."
        },
        {
          "target": "Поїзди міжнародного сполучення регулярно приїжджають на центральний вокзал.",
          "reading": "[pɔjizˈdɪ mʲiʒnɐˈrɔdnɔɦɔ spɔˈlutʃɛnʲːɑ rɛɦuˈlʲɑrnɔ prɪjiʒˈdʒɑjutʲ nɑ t͡sɛntˈrɑlʲnɪj wɔkˈzɑl] (poh-yeez-DY meezh-nah-ROHD-noh-hoh spoh-LOO-chen-nyah reh-hoo-LYAHR-noh pry-yeezh-DZHAH-yoot' nah tsen-TRAHL'-nyy vohk-ZAHL)",
          "translation": "International trains regularly arrive at the central railway station."
        },
        {
          "target": "Листоноша щоранку приносить свіжу пресу та кореспонденцію.",
          "reading": "[lɪstɔˈnɔʃɐ ʃtʃɔˈrɑnku prɪˈnɔsɪtʲ ˈswʲiʒu ˈprɛsu tɑ kɔrɛspɔnˈdɛnt͡sʲiju] (lys-toh-NOH-shah shchoh-RAHN-koo pry-NOH-syt' SVEE-zhoo PREH-soo tah koh-res-pohn-DEN-tsee-yoo)",
          "translation": "The postman brings fresh newspapers and correspondence every morning."
        }
      ],
      "mnemonics": [
        "«Прийти» — результат разовий, «приходити» — звичка щоденна!"
      ],
      "culturalNotes": [
        "Чергування звуків [зд] -> [ждж] у дієслові «приїжджати» є яскравою фонетичною ознакою української літературної норми."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть форму недоконаного виду, що утворює видову пару з доконаним дієсловом «приїхати»:",
          "options": [
            "Приїжджати (Imperfective counterpart derived from multidirectional base with alternation zd -> zhdzh)",
            "Приїхавати",
            "Приїждження",
            "Приїхатимучий"
          ],
          "answerIndex": 0,
          "explanation": "Видовою парою до «приїхати» є дієслово недоконаного виду «приїжджати»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово недоконаного виду позначає регулярне перенесення предметів у руках:",
          "options": [
            "Приносити (Imperfective process of bringing items on foot)",
            "Принести",
            "Приніс",
            "Принесу"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово недоконаного виду «приносити» виражає повторюваний процес перенесення предметів."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому видову пару дієслів руху вжито абсолютно правильно за контекстом часу й результату:",
          "options": [
            "Потяг завжди відходить о десятій, і сьогодні він відійшов точно за графіком.",
            "Потяг завжди відійшов о десятій, і сьогодні він відходить точно за графіком.",
            "Потяг щодня відійшов і завтра відходитиме на один раз.",
            "Потяг щойно відходити за графіком."
          ],
          "answerIndex": 0,
          "explanation": "Регулярний графік («завжди») вимагає недоконаного «відходить», а разовий факт за сьогодні — доконаного «відійшов»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u13-l5": {
    "id": "uk-u13-l5",
    "subject": "ukrainian",
    "unit": 13,
    "lessonNumber": 5,
    "title": "Метафоричні та фразеологічні значення дієслів руху (Metaphorical Motion Idioms)",
    "level": "B1",
    "objective": "Опанувати вживання дієслів руху в переносному, метафоричному та фразеологічному значеннях (час летить, дощ іде, мова йде про, доходити згоди, нести відповідальність).",
    "presentation": {
      "explanation": "Дієслова руху в українській мові мають надзвичайно розвинену систему вторинних переносних значень і входять до складу сталих фразеологізмів:\n\n1. Природні явища та плин часу:\n   - «Іде дощ / іде сніг / іде град» — опади (а не «падає дощ» як калька).\n   - «Час іде / біжить / летить / пливе» — невпинний перебіг часу.\n   - «Сонце заходить / сходить» — астрономічний рух світила.\n\n2. Інтелектуальна та комунікативна діяльність:\n   - «Мова йде про... / Ідеться про...» — предметом обговорення є щось.\n   - «Доходити висновку / доходити згоди» — підсумовувати або досягати консенсусу.\n   - «Спасти на думку / спадати на думку» — раптово згадати або придумати ідею.\n\n3. Абстрактні стани, обов'язки та процеси:\n   - «Нести відповідальність / нести покарання» — відповідати за наслідки дій.\n   - «Вести переговори / вести наукові дослідження» — здійснювати тривалий процес.\n   - «Виходити з ладу» — ламатися, припиняти роботу (про техніку).\n   - «Підходити» — пасувати (про одяг) або бути зручним за часом.",
      "examples": [
        {
          "target": "На міжнародних переговорах дипломати нарешті дійшли спільної згоди.",
          "reading": "[nɑ mʲiʒnɐˈrɔdnɪx pɛrɛɦɔˈwɔrɐx dɪplɔˈmɑtɪ nɐˈrɛʃtʲi dʲijʃˈlɪ ˈspʲilʲnɔji ˈzɦɔdɪ] (nah meezh-nah-ROHD-nykh peh-reh-hoh-VOH-rahkh dyp-loh-MAH-ty nah-RESH-tee deey-SHLY SPEEL'-noh-yee ZHOH-dy)",
          "translation": "At the international negotiations the diplomats finally reached a common agreement."
        },
        {
          "target": "У цій фундаментальній науковій статті йдеться про збереження біорізноманіття.",
          "reading": "[u t͡sʲij fundɐmɛnˈtɑlʲnʲij nɐuˈkɔwʲij stɐtʲˈtʲi jˈdɛtʲsʲɑ prɔ zbɛrɛˈʒɛnʲːɑ bʲiɔrʲiznɔmɐˈnʲitʲːɑ] (oo tseey foon-dah-men-TAHL'-neey nah-oo-KOH-veey staht-TY YDET'-syah proh zbeh-reh-ZHEN-nyah bee-oh-reez-noh-mah-NEET-tyah)",
          "translation": "This fundamental scientific article deals with biodiversity conservation."
        },
        {
          "target": "Керівник проєкту несе повну особисту відповідальність за безпеку робітників.",
          "reading": "[kɛrʲiwˈnɪk prɔˈjɛktu nɛˈsɛ ˈpɔwnu ɔsɔˈbɪstu wʲidpɔwʲiˈdɑlʲnʲisʲtʲ zɑ bɛzˈpɛku rɔbʲitnɪˈkʲiw] (keh-reev-NYK proh-YEK-too neh-SEH POHV-noo oh-soh-BYS-too veed-poh-vee-DAHL'-neest' zah bez-PEH-koo roh-beet-ny-KEEW)",
          "translation": "The project manager bears full personal responsibility for the safety of the workers."
        }
      ],
      "mnemonics": [
        "Дощ «іде», час «летить», дипломати «доходять згоди» — жива метафора руху збагачує мову!"
      ],
      "culturalNotes": [
        "Конструкція «йдеться про...» є окрасою офіційно-ділового та наукового стилів української мови, замінюючи важкі описові фрази."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативне українське словосполучення на позначення атмосферних опадів:",
          "options": [
            "Іде густий дощ (Standard idiomatic construction for precipitation)",
            "Падає густий дощ",
            "Біжить густий дощ",
            "Несеться густий дощ"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною українською конструкцією для опадів є «іде дощ» / «іде сніг»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово руху вживається у сталому виразі «... повну відповідальність за результати»?",
          "options": [
            "Нести (нести відповідальність - to bear responsibility)",
            "Вести",
            "Возити",
            "Ходити"
          ],
          "answerIndex": 0,
          "explanation": "Стійка ділова сполука — «нести відповідальність»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому метафоричний вираз із дієсловом руху вжито стилістично бездоганно:",
          "options": [
            "У сьогоднішній доповіді йдеться про стратегічний розвиток відновлюваної енергетики.",
            "У сьогоднішній доповіді біжиться про розвиток енергетики.",
            "У доповіді несеться про стратегічні плани компанії.",
            "У доповіді водиться про важливі справи."
          ],
          "answerIndex": 0,
          "explanation": "Вислів «йдеться про...» є бездоганною академічною та публіцистичною нормою."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u14-l1": {
    "id": "uk-u14-l1",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 1,
    "title": "Тверда група прикметників: відмінювання (Hard Group Adjective Declension)",
    "level": "B1",
    "objective": "Опанувати систему відмінювання прикметників твердої групи (новий, високий, добра, гарне) у всіх родах та відмінках однини й множини.",
    "presentation": {
      "explanation": "Прикметники в українській мові узгоджуються з іменниками в роді, числі та відмінку. За характером кінцевого приголосного основи всі якісні та відносні прикметники поділяються на дві групи: тверду та м'яку.\n\nТверда група — основа закінчується на твердий приголосний (зокрема й на г, к, х): новий, добрий, широкий, високий, світлий, український.\n\n1. Парадигма відмінювання в однині:\n   - Чоловічий рід: Н. новий / високий; Р. нового / високого; Д. новому / високому; Зн. = Н. (неістота) / = Р. (істота); Ор. новим / високим; М. (на) новому / новім; Кл. = Н.\n   - Жіночий рід: Н. нова / висока; Р. нової / високої; Д. новій / високій; Зн. нову / високу; Ор. новою / високою (-ою!); М. (на) новій / високій; Кл. = Н.\n   - Середній рід: Н. нове / високе; Р. нового / високого; Д. новому / високому; Зн. нове / високе; Ор. новим / високим; М. (на) новому / новім; Кл. = Н.\n\n2. Парадигма відмінювання в множині (спільна для всіх родів):\n   - Н. нові / високі; Р. нових / високих; Д. новим / високим; Зн. = Н. / = Р.; Ор. новими / високими; М. (на) нових / високих.\n\n3. Зверніть увагу: орудний відмінок жіночого роду твердої групи ЗАВЖДИ має закінчення «-ою» (красивою, щирою, високою).",
      "examples": [
        {
          "target": "Ми захоплюємося прекрасною архітектурою та багатим історичним спадком нашої столиці.",
          "reading": "[mɪ zɐxɔpˈlʲujɛmɔsʲɑ prɛˈkrɑsnɔju ɐrxʲitɛkˈturɔju tɑ bɐˈɦɑtɪm isˈtɔrɪtʃnɪm ˈspɑdkɔm ˈnɑʃɔji stɔˈlɪt͡sʲi] (my zah-khohp-LYOO-yeh-mohs'-yah preh-KRAHS-noh-yoo ahr-khee-tek-TOO-roh-yoo tah bah-HAH-tym ees-TOH-rych-nym SPAHD-kohm NAH-shoh-yee stoh-LY-tsee)",
          "translation": "We admire the wonderful architecture and rich historical heritage of our capital."
        },
        {
          "target": "Новому науковому проєкту потрібна всебічна підтримка провідних експертів.",
          "reading": "[nɔˈwɔmu nɐuˈkɔwɔmu prɔˈjɛktu pɔtʲˈrʲibnɐ wsɛˈbʲitʃnɐ pʲidˈtrɪmkɐ prɔwʲidˈnɪx ɛksˈpɛrtʲiw] (noh-VOH-moo nah-oo-KOH-woh-moo proh-YEK-too poht-REEB-nah vseh-BEECH-nah peed-TRYM-kah proh-veed-NYKH eks-PEHR-teew)",
          "translation": "The new scientific project needs comprehensive support from leading experts."
        },
        {
          "target": "Студенти працювали над складними практичними завданнями протягом двох місяців.",
          "reading": "[stuˈdɛntɪ prɐt͡sʲuˈwɑlɪ nɑd sklɐdˈnɪmɪ prɐkˈtɪtʃnɪmɪ zɐwˈdɑnʲːɐmɪ prɔˈtʲɑɦɔm dwɔx ˈmʲisʲɐt͡sʲiw] (stoo-DEN-ty praht-syoo-VAH-ly nahd sklahd-NY-my prahk-TYCH-ny-my zahv-DAHN-nyah-my proh-TYAH-hohm dvokh MEE-syah-tseev)",
          "translation": "The students worked on complex practical tasks for two months."
        }
      ],
      "mnemonics": [
        "Тверда основа — тверде закінчення: «новий», «нового», «новому», а в орудному жіночому — лише «-ою»!"
      ],
      "culturalNotes": [
        "Форма місцевого відмінка чоловічого роду на «-ім» («у новім домі», «на білім світі») є поетичним архаїзмом, характерним для українських народних пісень."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму орудного відмінка однини жіночого роду від прикметника «широкий»:",
          "options": [
            "Широкою (Feminine singular instrumental of hard group ends in -ою)",
            "Широкой",
            "Широкую",
            "Широкею"
          ],
          "answerIndex": 0,
          "explanation": "В українській мові орудний відмінок однини жіночого роду прикметників твердої групи має виключно закінчення -ою: «широкою»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке закінчення має прикметник твердої групи «глибокий» у родовому відмінку множини?",
          "options": [
            "-их (глибоких озер)",
            "-іх",
            "-ох",
            "-им"
          ],
          "answerIndex": 0,
          "explanation": "Прикметники твердої групи в родовому відмінку множини мають закінчення -их: «глибоких»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому всі форми прикметників твердої групи узгоджено правильно:",
          "options": [
            "Ми пишаємося рідною українською мовою та славною історією.",
            "Ми пишаємося рідной українськой мовой та славной історієй.",
            "Ми пишаємося рідну українську мову та славну історію.",
            "Ми пишаємося рідної української мови."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «пишатися» керує орудним відмінком, тому прикметники жіночого роду мають нормативне закінчення -ою: «рідною українською мовою», «славною історією»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u14-l2": {
    "id": "uk-u14-l2",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 2,
    "title": "М'яка група прикметників: відмінювання (Soft Group Adjective Declension)",
    "level": "B1",
    "objective": "Опанувати парадигму відмінювання прикметників м'якої групи (синій, літній, вечірня, осіннє, безкраї) з м'яким знаком та йотованими голосними.",
    "presentation": {
      "explanation": "До м'якої групи належать прикметники, основа яких закінчується на м'який приголосний [н'] або [й]:\n- Прикметники на «-ній»: синій, літній, вечірній, осінній, зимовий, ранній, давній, середній, крайній, майбутній, сусідній, останній, торішній, художній.\n- Прикметник на «-їй»: безкраїй (основа на [й]).\n\n1. Парадигма відмінювання в однині:\n   - Чоловічий рід: Н. синій; Р. синього (з м'яким знаком!); Д. синьому; Зн. = Н. / = Р.; Ор. синім; М. (на) синьому / синім.\n   - Жіночий рід: Н. синя (буква я); Р. синьої; Д. синій; Зн. синю (буква ю); Ор. синьою (закінчення -ьою!); М. (на) синій.\n   - Середній рід: Н. синє (буква є); Р. синього; Д. синьому; Зн. синє; Ор. синім; М. (на) синьому / синім.\n\n2. Множина (спільна для всіх родів):\n   - Н. сині; Р. синіх; Д. синім; Зн. = Н. / = Р.; Ор. синіми; М. (на) синіх.\n\n3. Головні відмінності від твердої групи:\n- Наявність м'якого знака перед голосними [о]: синього, синьому, синьою.\n- Букви «я, є, ю» у закінченнях називного та знахідного відмінків: синя, синє, синю.",
      "examples": [
        {
          "target": "Теплою літньою порою ми часто милувалися тихою вечірньою загравою.",
          "reading": "[ˈtɛplɔju ˈlʲitnʲɔju pɔˈrɔju mɪ ˈtʃɑstɔ mɪluˈwɑlɪsʲɑ ˈtɪxɔju wɛˈtʃirnʲɔju zɐɦˈrɑwɔju] (TEP-loh-yoo LEET-nyoh-yoo poh-ROH-yoo my CHAH-stoh my-loo-VAH-lyhs'-yah TY-khoh-yoo veh-CHEER-nyoh-yoo zah-HRAH-woh-yoo)",
          "translation": "In the warm summer season we often admired the quiet evening twilight."
        },
        {
          "target": "У синьому небі повільно пропливали легкі пухнасті хмаринки.",
          "reading": "[u ˈsɪnʲɔmu ˈnɛbʲi pɔˈwʲilʲnɔ prɔplɪˈwɑlɪ lɛɦˈkʲi puxˈnɑsʲtʲi xmɐˈrɪnkɪ] (oo SY-nyoh-moo NEH-bee poh-VEEL'-noh proh-ply-VAH-ly leh-KEE pookh-NAHS-tee khmah-RYN-ky)",
          "translation": "In the blue sky light fluffy clouds were slowly floating by."
        },
        {
          "target": "Ми зустрілися біля сусіднього будинку, щоб обговорити наші майбутні плани.",
          "reading": "[mɪ zusʲˈtrʲilɪsʲɑ ˈbʲilʲɑ suˈsʲidnʲɔɦɔ buˈdɪnku ʃtʃɔb ɔbɦɔwɔˈrɪtɪ ˈnɑʃi mɐjˈbutnʲi ˈplɑnɪ] (my zoos-TREE-lyhs'-yah BEE-lyah soo-SEED-nyoh-hoh boo-DYN-koo shchohb ohb-hoh-woh-RY-ty NAH-shee mahy-BOOT-nee PLAH-ny)",
          "translation": "We met near the neighboring building to discuss our future plans."
        }
      ],
      "mnemonics": [
        "М'яка основа — м'який знак і м'які закінчення: «синього», «літньому», а в орудному жіночому — тільки «-ьою»!"
      ],
      "culturalNotes": [
        "Прикметник «синій» є одним із найпоетичніших символів в українській ліриці («сині гори», «синій Дніпро», «сині очі»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму орудного відмінка жіночого роду від прикметника м'якої групи «вечірній»:",
          "options": [
            "Вечірньою (Feminine singular instrumental of soft group ends in -ьою)",
            "Вечірнею",
            "Вечірньой",
            "Вечірній"
          ],
          "answerIndex": 0,
          "explanation": "Прикметники м'якої групи в орудному відмінку жіночого роду мають закінчення -ьою: «вечірньою»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який прикметник належить до м'якої групи?",
          "options": [
            "Осінній (Soft group ending in -ній with stem ending in palatalized n')",
            "Зелений",
            "Холодний",
            "Прекрасний"
          ],
          "answerIndex": 0,
          "explanation": "Прикметник «осінній» має основу на м'який приголосний [н'] і належить до м'якої групи."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено помилку у відмінюванні прикметника м'якої групи:",
          "options": [
            "Ми прогулювалися по літнему парку біля озера.",
            "Ми прогулювалися по літньому парку біля озера.",
            "Він милувався синьою водою глибокого озера.",
            "Студенти чекають на майбутні результати іспиту."
          ],
          "answerIndex": 0,
          "explanation": "Форма «по літнему» містить орфографічну помилку. Прикметники м'якої групи у місцевому/давальному відмінках пишуться з м'яким знаком: «літньому»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u14-l3": {
    "id": "uk-u14-l3",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 3,
    "title": "Присвійні прикметники (Possessive Adjectives: -ів, -ин)",
    "level": "B1",
    "objective": "Опанувати правила словотворення присвійних прикметників за допомогою суфіксів -ів/-ев та -ин/-їн, історичні чергування (Ольга -> Ольжин) та особливості правопису з великої літери.",
    "presentation": {
      "explanation": "Присвійні прикметники вказують на належність предмета конкретній людині чи тварині та відповідають на питання «чий? чия? чиє? чиї?»:\n\n1. Творення від іменників I відміни (суфікси «-ин / -їн»):\n   - Від іменників жіночого (та деяких чоловічих) роду:\n     * Сестра -> сестрин; мама -> мамин; Галя -> Галин; Софія -> Софіїн; Марія -> Маріїн.\n   - Чергування приголосних перед суфіксом «-ин»:\n     * [г] -> [ж]: Ольга -> Ольжин\n     * [к] -> [ч]: дочка -> доччин (з подвоєнням чч!), тітка -> тітчин\n     * [х] -> [ш]: Солоха -> Солошин.\n\n2. Творення від іменників II відміни (суфікси «-ів / -ев / -єв / -ов»):\n   - Тверда група: батько -> батьків (батькова, батькове, батькові); брат -> братів; Петро -> Петрів; Шевченко -> Шевченків.\n   - М'яка та мішана групи: коваль -> ковалів / ковалев; Андрій -> Андріїв; лікар -> лікарів; Сергій -> Сергіїв; водій -> водіїв.\n\n3. Правопис великої та малої літери (важливе правило):\n   - З ВЕЛИКОЇ літери пишуться присвійні прикметники на -ів, -ин, утворені від власних назв людей: «Шевченків вірш», «Франкова поезія», «Оксанина книга».\n   - З МАЛОЇ літери пишуться відносні прикметники з суфіксами «-ськ-, -івськ-»: «шевченківський стиль», «франківські читання», «київські вулиці».",
      "examples": [
        {
          "target": "Шевченків «Кобзар» став духовною святинею для кожного свідомого українця.",
          "reading": "[ʃɛwˈtʃɛnkʲiw kɔbˈzɑr stɑw duˈxɔwnɔju swjɐˈtɪnɛju dlʲɑ ˈkɔʒnɔɦɔ swʲiˈdɔmɔɦɔ ukrɐˈjinʲt͡sʲɑ] (shehv-CHEN-keew kohb-ZAHR stahv doo-KHOHV-noh-yoo svyah-TY-neh-yoo dlyah KOHZH-noh-hoh svee-DOH-moh-hoh oo-krah-YEEN-tsyah)",
          "translation": "Shevchenko's 'Kobzar' became a spiritual sanctuary for every conscious Ukrainian."
        },
        {
          "target": "Ольжина доповідь викликала жваву дискусію серед провідних науковців.",
          "reading": "[ˈɔlʲʒɪnɐ dɔpɔˈwʲidʲ wɪkˈlɪkɐlɐ ˈʒwɑwu dɪsˈkusʲiju ˈsɛrɛd prɔwʲidˈnɪx nɐuˈkɔwt͡sʲiw] (OHL'-zhy-nah doh-poh-VEED' vyk-LY-kah-lah ZHVAH-voo dys-KOO-siy-yoo SEH-red proh-veed-NYKH nah-oo-KOV-tseew)",
          "translation": "Olha's report sparked a lively discussion among leading scientists."
        },
        {
          "target": "Ми відвідали традиційні франківські читання у Львівському національному університеті.",
          "reading": "[mɪ wʲidˈwʲidɐlɪ trɐdɪt͡sʲijˈnʲi frɐnˈkʲiwsʲkʲi tʃɪˈtɑnʲːɑ u lʲˈwʲiwsʲkɔmu nɐt͡sʲiɔˈnɑlʲnɔmu unʲiwɛrsɪˈtɛtʲi] (my veed-VEE-dah-ly trah-dy-tseey-NEE frahn-KEEV-s'kee chy-TAHN-nyah oo L'VEEV-s'koh-moo nah-tsee-oh-NAHL'-noh-moo oo-nee-vehr-sy-TEH-tyee)",
          "translation": "We attended the traditional Franko readings at Lviv National University."
        }
      ],
      "mnemonics": [
        "Чий? Батьків, Ольжин, Шевченків — з суфіксами «-ів/-ин» і з великої літери!"
      ],
      "culturalNotes": [
        "Суфікс -ин у жіночих іменах із чергуванням (Ольжин, Маріїн, Лесин) віддзеркалює прадавні слов'янські моделі вшанування роду."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть присвійний прикметник від імені «Ольга» з урахуванням історичного чергування приголосних:",
          "options": [
            "Ольжин (Stem consonant alternation g -> zh before suffix -ин)",
            "Ольгин",
            "Ольгін",
            "Ольгіїв"
          ],
          "answerIndex": 0,
          "explanation": "Перед суфіксом -ин приголосний [г] закономірно чергується з [ж]: «Ольга -> Ольжин»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Згідно з нормами правопису, яке словосполучення пишеться з ВЕЛИКОЇ літери?",
          "options": [
            "Шевченкова поезія (Possessive adjective with -ов/-ів from proper noun)",
            "шевченківські лауреати",
            "київські каштани",
            "франківський стиль"
          ],
          "answerIndex": 0,
          "explanation": "Присвійні прикметники на -ів/-ов, утворені від власних назв (Шевченко -> Шевченкова), пишуться з великої літери."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому правильно утворено та написано присвійний прикметник від імені «Марія»:",
          "options": [
            "Маріїна нова наукова праця здобула міжнародне визнання.",
            "Марієва нова наукова праця здобула визнання.",
            "Маринина нова наукова праця здобула визнання.",
            "маріїнська нова праця визнана вченими."
          ],
          "answerIndex": 0,
          "explanation": "Від жіночого імені на -ія присвійний прикметник твориться суфіксом -їн: «Марія -> Маріїн (Маріїна)» і пишеться з великої літери."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u14-l4": {
    "id": "uk-u14-l4",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 4,
    "title": "Синтаксичне узгодження прикметників з іменниками (Adjective-Noun Agreement)",
    "level": "B1",
    "objective": "Опанувати складні випадки синтаксичного узгодження прикметників: з невідмінюваними іменниками, складноскороченими словами (абревіатурами), назвами професій та однорідними членами.",
    "presentation": {
      "explanation": "Прикметник завжди підпорядковується іменнику, але в складних синтаксичних випадках діють спеціальні правила:\n\n1. Узгодження з невідмінюваними іншомовними іменниками:\n   - Неістоти мають середній рід: гаряче капучино, смачне рагу, швидке таксі, яскраве кімоно, свіже авокадо, нове метро.\n   - Назви тварин/птахів — чоловічого роду: кумедний поні, сірий кенгуру, балакучий какаду, маленьке колібрі (або жін. за контекстом).\n   - Назви осіб — за біологічною статтю: елегантна мадам, шановний мосьє, молодий аташе.\n   - Географічні назви — за родом узагальнюючого родового поняття: сонячне Тбілісі (місто -> с.р.), повноводна Міссісіпі (річка -> ж.р.), високий Еверест (гора/пік -> ч.р.).\n\n2. Узгодження з абревіатурами:\nРід абревіатури визначається за родом опорного стрижневого слова в розшифровці:\n   - ООН (Організація -> ж.р.): впливова ООН.\n   - НАТО (Альянс -> ч.р. або Організація -> ж.р.): Північноатлантичний альянс (ч.р.).\n   - СТО (Станція -> ж.р.): сучасна СТО.\n   - НБУ (Банк -> ч.р.): Національний банк України повідомив.\n\n3. Узгодження з однорідними іменниками різного роду:\n   - Якщо прикметник стоїть перед однорідними іменниками, він може мати форму множини або узгоджуватися з найближчим іменником: «Нові стіл і шафа» або «Новий стіл і шафа».",
      "examples": [
        {
          "target": "Вранці ми замовили свіже запашне капучино та гарячі круасани в затишному кафе.",
          "reading": "[ˈwrɑnt͡sʲi mɪ zɐˈmɔwɪlɪ ˈswʲiʒɛ zɐpɐʃˈnɛ kɐpuˈtʃinɔ tɑ ɦɐˈrʲɑtʃi kruɐˈsɑnɪ w zɐˈtɪʃnɔmu kɐˈfɛ] (VRAHN-tsee my zah-MOH-vy-ly SVEE-zheh zah-pahsh-NEH kah-poo-CHEE-noh tah hah-RYAH-chee kroo-ah-SAH-ny v zah-TYSH-noh-moo kah-FEH)",
          "translation": "In the morning we ordered fresh fragrant cappuccino and hot croissants in a cozy cafe."
        },
        {
          "target": "Впливова ООН ухвалила важливу резолюцію на підтримку територіальної цілісності України.",
          "reading": "[wplɪˈwɔwɐ ɔˈɔn uxˈwɑlɪlɐ wɑʒˈlɪwu rɛzɔˈlʲut͡sʲiju nɑ pʲidˈtrɪmku tɛrɪtɔrʲiˈɑlʲnɔji t͡sʲiˈlʲisnɔsʲtʲi ukrɐˈjinɪ] (vply-VOH-wah oh-OHN ookh-VAH-ly-lah vahzh-LY-voo reh-zoh-LYOO-tsee-yoo nah peed-TRYM-koo teh-ry-toh-ry-AHL'-noh-yee tsee-LEES-nohs-tee oo-krah-YEE-ny)",
          "translation": "The influential UN adopted an important resolution in support of the territorial integrity of Ukraine."
        },
        {
          "target": "Швидкісне столичне метро перевозить сотні тисяч пасажирів щодня.",
          "reading": "[ʃwɪdˈkʲisnɛ stɔˈlɪtʃnɛ mɛtˈrɔ pɛrɛˈwɔzɪtʲ ˈsɔtnʲi ˈtɪsʲɐtʃ pɐsɐˈʒɪrʲiw ʃtʃɔdʲˈnʲɑ] (shvyd-KEES-neh stoh-LYCH-neh met-ROH peh-reh-VOH-zyt' SOHT-nee TY-syahch pah-sah-ZHY-reew shchohd-NYAH)",
          "translation": "The high-speed capital subway transports hundreds of thousands of passengers every day."
        }
      ],
      "mnemonics": [
        "Невідмінювані неістоти — середній рід («смачне капучино»); абревіатури — за головним словом («впливова ООН» — організація)!"
      ],
      "culturalNotes": [
        "Українська мова чітко дотримується середнього роду для слів іншомовного походження на -о, -е, -і, -у (рагу, желе, журі, метро, пальто [відмінюється за новим правописом: пальта, пальтом])."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму узгодження прикметника з невідмінюваним іменником «капучино»:",
          "options": [
            "Гаряче капучино (Indeclinable inanimate loan noun takes neuter gender)",
            "Гарячий капучино",
            "Гаряча капучино",
            "Гарячі капучино"
          ],
          "answerIndex": 0,
          "explanation": "Невідмінювані неживі іменники іншомовного походження в українській мові мають середній рід: «гаряче капучино»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який рід має абревіатура СТО (станція технічного обслуговування) для узгодження з прикметником?",
          "options": [
            "Жіночий рід (Base noun станція is feminine -> нова СТО)",
            "Чоловічий рід",
            "Середній рід",
            "Множинний рід"
          ],
          "answerIndex": 0,
          "explanation": "Опорним словом абревіатури є іменник жіночого роду «станція», тому: «сучасна/нова СТО»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому правильно узгоджено рід прикметника з невідмінюваною географічною назвою:",
          "options": [
            "Сонячне Тбілісі гостинно зустрічає туристів з усього світу.",
            "Сонячний Тбілісі гостинно зустрічає туристів.",
            "Сонячна Тбілісі гостинно зустрічає туристів.",
            "Сонячні Тбілісі гостинно зустрічають туристів."
          ],
          "answerIndex": 0,
          "explanation": "Тбілісі — це місто (середній рід), тому прикметник узгоджується в середньому роді: «сонячне Тбілісі»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u14-l5": {
    "id": "uk-u14-l5",
    "subject": "ukrainian",
    "unit": 14,
    "lessonNumber": 5,
    "title": "Стягнені, нестягнені та короткі форми прикметників (Adjectival Forms & Stylistics)",
    "level": "B1",
    "objective": "Опанувати розрізнення повних стягнених форм (зелена), повних нестягнених форм у фольклорі та поезії (зеленая, синії) та коротких форм (радий -> рад, повен, ясен, певен).",
    "presentation": {
      "explanation": "В українській мові прикметники функціонують у трьох формах залежно від стилю мовлення та історичної традиції:\n\n1. Повні стягнені форми (Standard contracted full forms):\nЦе загальновживана нейтральна норма сучасної літературної мови для всіх стилів:\n   - Зелений, зелена, зелене, зелені; добра, добре, добрі.\n\n2. Повні нестягнені форми (Uncontracted full forms):\nЗберігають давні закінчення «-ая, -еє, -ії» без стягнення голосних. Вони вживаються виключно в поетичній мові та народнопісенному фольклорі для надання тексту урочистості, мелодійності та співучості:\n   - Жіночий рід: «зеленая діброва», «ясная зоря», «святая правда».\n   - Середній рід: «синєє море», «ніжнеє серце».\n   - Множина: «зеленії свята», «дрібнії сльози», «чужії люди».\n\n3. Короткі форми (Short / Truncated forms):\nНечисленна група якісних прикметників чоловічого роду без закінчення, які виступають у ролі іменного присудка або у сталих фразеологізмах:\n   - Рад (радий): «Я щиро рад вас бачити».\n   - Певен (певний): «Я певен у нашій спільній перемозі».\n   - Повен (повний): «Місяць ясен, повен сили».\n   - Винен (винний): «Він нікому нічого не винен».\n   - Годен (гідний/здатний): «Хто годен це виконати?»\n   - Красен, ясен, срібен, злотен (у поезії та фольклорі).",
      "examples": [
        {
          "target": "Я щиро певен у тому, що наша спільна праця принесе вагомі наукові плоди.",
          "reading": "[jɑ ˈʃtʃɪrɔ ˈpɛwɛn u ˈtɔmu, ʃtʃɔ ˈnɑʃɐ ˈspʲilʲnɐ ˈprɑt͡sʲɑ prɪnɛˈsɛ wɐˈɦɔmʲi nɐuˈkɔwʲi plɔˈdɪ] (yah SHCHY-roh PEH-wen oo TOH-moo, shchoh NAH-shah SPEEL'-nah PRAH-tsyah pry-neh-SEH vah-HOH-mee nah-oo-KOH-vee ploh-DY)",
          "translation": "I am sincerely confident that our joint work will bring significant scientific fruits."
        },
        {
          "target": "«Пливе човен по синьому морю, пливе, поринає...» — співається в народній пісні.",
          "reading": "[plɪˈwɛ ˈtʃɔwɛn pɔ ˈsɪnʲɔmu ˈmɔrʲu, plɪˈwɛ, pɔrɪˈnɑjɛ spʲiˈwɑjɛtʲsʲɑ w nɐˈrɔdnʲij ˈpʲisʲnʲi] (ply-WEH CHOH-wen poh SY-nyoh-moo MOH-ryoo, ply-WEH, poh-ry-NAH-yeh spee-VAH-yet'-syah v nah-ROHD-neey PEES-nee)",
          "translation": "'A boat floats upon the blue sea, floats and dives...' — so goes the folk song."
        },
        {
          "target": "Він був щиро рад вітати шановних гостей у стінах нашого університету.",
          "reading": "[wʲin buw ˈʃtʃɪrɔ rɑd wʲiˈtɑtɪ ʃɐˈnɔwnɪx ɦɔsˈtɛj u sʲˈtʲinɐx ˈnɑʃɔɦɔ unʲiwɛrsɪˈtɛtu] (veen boov SHCHY-roh rahd vee-TAH-ty shah-NOV-nykh hohs-TEHY oo STY-nahkh NAH-shoh-hoh oo-nee-vehr-sy-TEH-too)",
          "translation": "He was sincerely glad to welcome the esteemed guests within the walls of our university."
        }
      ],
      "mnemonics": [
        "«Зелена» — сучасна норма, «зеленая» — пісенна душа, а «певен і рад» — стислість і сила присудка!"
      ],
      "culturalNotes": [
        "Нестягнені форми на -ая, -еє, -ії лежать в основі унікального ритмомелодійного ладу українських дум, колядок та щедрівок."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть коротку форму прикметника, що виступає в ролі присудка в реченні «Я цілком ... у правильності свого вибору»:",
          "options": [
            "Певен (Short predicate adjective form expressing certainty)",
            "Певний",
            "Певная",
            "Певному"
          ],
          "answerIndex": 0,
          "explanation": "Коротка форма «певен» виконує роль предиката у виразі впевненості: «я певен»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "У якому стилі мовлення нормативно вживаються нестягнені форми прикметників («ясная», «дрібнії»)?",
          "options": [
            "У фольклорному та художньо-поетичному стилях (Folkloric and poetic uncontracted forms)",
            "В офіційно-діловому стилі",
            "У наукових статтях",
            "У військових статутах"
          ],
          "answerIndex": 0,
          "explanation": "Нестягнені форми («ясная», «зеленая») є стилістичним засобом народнопоетичного та художнього мовлення."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому коротку предикативну форму прикметника вжито відповідно до літературної норми:",
          "options": [
            "Кожен науковець винен сумлінно дотримуватися академічної доброчесності.",
            "Кожен науковець винний був сумлінний дотримуватися.",
            "Кожен науковець винная людина.",
            "Кожен науковець виннії обов'язки."
          ],
          "answerIndex": 0,
          "explanation": "Коротка форма «винен» функціонує як нормативний предикатив із модальним значенням обов'язку."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u15-l1": {
    "id": "uk-u15-l1",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 1,
    "title": "Вищий ступінь порівняння прикметників (Comparative Degree: Simple & Compound)",
    "level": "B1",
    "objective": "Опанувати творення простої синтетичної (суфікси -іш-, -ш-) та складеної аналітичної (більш, менш) форм вищого ступеня порівняння якісних прикметників.",
    "presentation": {
      "explanation": "В українській мові ступені порівняння мають виключно якісні прикметники (що позначають ознаку, яка може виявлятися більшою чи меншою мірою).\n\nВищий ступінь показує, що в одному предметі ознака виражена сильніше, ніж в іншому, і твориться двома способами:\n\n1. Проста (синтетична) форма:\n   - За допомогою суфікса «-іш-» (найпродуктивніша модель від повної основи):\n     * новий -> новіший; теплий -> тепліший; світлий -> світліший; молодий -> молодіший.\n   - За допомогою суфікса «-ш-» (при цьому суфікси «-к-, -ок-, -ек-» основи випадають):\n     * короткий -> коротший; широкий -> ширший; глибокий -> глибший; далекий -> дальший.\n\n2. Складена (аналітична) форма:\n   - Утворюється додаванням слів «більш» або «менш» до початкової форми прикметника:\n     * більш зручний, менш доступний, більш ефективний, менш яскравий.\n\n3. СУВОРЕ ПРАВИЛО: Категорично заборонено поєднувати обидві форми! Конструкції на кшталт «більш тепліший» чи «менш зручніший» є грубою граматичною помилкою (подвійний ступінь). Правильно: «тепліший» АБО «більш теплий».",
      "examples": [
        {
          "target": "Новий маршрут виявився значно коротшим і безпечнішим для пішоходів.",
          "reading": "[nɔˈwɪj mɐrʃˈrut wɪˈjɑwɪwsʲɑ ˈznɑtʃnɔ kɔˈrɔtʃɪm i bɛzˈpɛtʃnʲiʃɪm dlʲɑ pʲiʃɔˈxɔdʲiw] (noh-VYY mahrsh-ROOT vy-YAH-vyv-syah ZNAHCH-noh koh-ROH-tchym ee bez-PECH-neey-sheem dlyah pee-shoh-KHOH-deew)",
          "translation": "The new route turned out to be significantly shorter and safer for pedestrians."
        },
        {
          "target": "Цей сучасний підхід є більш гнучким та адаптивним до змін ринку.",
          "reading": "[t͡sɛj sut͡ʃɐsˈnɪj pʲidˈxʲid jɛ bʲilʲʃ ɦnut͡ʃˈkɪm tɑ ɐdɐpˈtɪwnɪm dɔ zmʲin ˈrɪnku] (tsey soo-chahs-NYY peed-KHEED yeh beel'sh hnooch-KYM tah ah-dahp-TYV-nym doh zmeen RYN-koo)",
          "translation": "This modern approach is more flexible and adaptive to market changes."
        },
        {
          "target": "З кожним весняним днем повітря ставало все теплішим і свіжішим.",
          "reading": "[z ˈkɔʒnɪm wɛsʲˈnʲɑnɪm dnɛm pɔˈwʲitrʲɑ stɐˈwɑlɔ wsɛ tɛpˈlʲiʃɪm i swʲiˈʒiʃɪm] (z KOHZH-nym ves-NYAH-nym dnehm poh-VEET-ryah stah-VAH-loh vseh tep-LEE-sheem ee svee-ZHEE-sheem)",
          "translation": "With every spring day the air became warmer and fresher."
        }
      ],
      "mnemonics": [
        "Обирай або суфікс «-іш- / -ш-» (тепліший), або слово «більш» (більш теплий), але ніколи не змішуй їх разом!"
      ],
      "culturalNotes": [
        "Уникнення тавтологічних помилок на кшталт «більш кращий» є головним маркером культури мови в українському публічному просторі."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть граматично правильну форму вищого ступеня порівняння прикметника:",
          "options": [
            "Тепліший (Correct simple comparative form with suffix -іш-)",
            "Більш тепліший",
            "Самий теплий",
            "Більш найтепліший"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною є проста форма «тепліший» або складена «більш теплий» (але без поєднання слів)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка форма вищого ступеня утворюється від прикметника «широкий» з випаданням суфікса -ок-?",
          "options": [
            "Ширший (Truncation of suffix -ок- + suffix -ш-)",
            "Широкіший",
            "Більш ширший",
            "Широчайший"
          ],
          "answerIndex": 0,
          "explanation": "При творенні форми на -ш- суфікс -ок- випадає: «широкий -> ширший»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому НЕМАЄ граматичної помилки у вживанні ступеня порівняння:",
          "options": [
            "Сьогоднішній день був значно теплішим за вчорашній.",
            "Сьогоднішній день був більш теплішим за вчорашній.",
            "Сьогоднішній день був самий теплий за вчорашній.",
            "Сьогоднішній день був більш найкращий за вчорашній."
          ],
          "answerIndex": 0,
          "explanation": "Форма «значно теплішим» утворена бездоганно без надлишкових слів «більш/самий»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u15-l2": {
    "id": "uk-u15-l2",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 2,
    "title": "Чергування приголосних та суплетивні форми вищого ступеня (Consonant Alternations & Suppletion)",
    "level": "B1",
    "objective": "Опанувати фонетичні зміни кінцевих приголосних основи ([г, ж, з] + ш -> жч; [к, с] + ш -> щ) та суплетивні форми ступенів порівняння (великий -> більший, добрий -> кращий/ліпший, поганий -> гірший).",
    "presentation": {
      "explanation": "При творенні простої форми вищого ступеня за допомогою суфікса «-ш-» відбуваються закономірні фонетичні зміни:\n\n1. Історичні чергування звуків основи перед суфіксом «-ш-»:\n   - [г], [ж], [з] + [ш] зливаються в [жч]:\n     * дорогий -> дорожчий;\n     * дужий -> дужчий;\n     * низький -> нижчий (суфікс -к- випадає, з + ш -> жч);\n     * вузький -> вужчий;\n     * близький -> ближчий.\n   - [к], [с] + [ш] зливаються в [щ] ([шч]):\n     * високий -> вищий (випадає -ок-, с + ш -> щ);\n     * товстий -> товщий (або товстіший);\n     * красивий -> кращий (або красивіший).\n\n2. Суплетивні форми (утворені від іншої кореневої основи):\nДеякі найважливіші якісні прикметники мають форми вищого ступеня з іншим коренем:\n   - Великий -> більший\n   - Малий -> менший\n   - Хороший / добрий -> кращий / ліпший\n   - Поганий -> гірший.",
      "examples": [
        {
          "target": "Цей варіант проєкту виявився значно кращим і вищим за якістю виконання.",
          "reading": "[t͡sɛj wɐrʲiˈɑnt prɔˈjɛktu wɪˈjɑwɪwsʲɑ ˈznɑtʃnɔ ˈkrɐʃtʃɪm i ˈwɪʃtʃɪm zɑ ˈjɑkʲisʲtʲu wɪkɔˈnɑnʲːɑ] (tsey vah-ree-AHNT proh-YEK-too vy-YAH-vyv-syah ZNAHCH-noh KRAHSH-chym ee VYSH-chym zah YAH-keest'-yoo vy-koh-NAHN-nyah)",
          "translation": "This project option turned out to be significantly better and higher in execution quality."
        },
        {
          "target": "Вужчий прохід у старій фортеці веде до найвищої спостережної вежі.",
          "reading": "[ˈwuʒtʃɪj prɔˈxʲid u stɐˈrʲij fɔrˈtɛt͡sʲi wɛˈdɛ dɔ nɐjˈwɪʃtʃɔji spɔstɛrɛʒˈnɔji ˈwɛʒʲi] (VOOZH-chyy proh-KHEED oo stah-REEY fohr-TET-see veh-DEH doh nahy-VYSH-choh-yee spoh-steh-rehzh-NOH-yee VEH-zhee)",
          "translation": "The narrower passageway in the old fortress leads to the highest observation tower."
        },
        {
          "target": "У нових економічних умовах прибуток підприємства став значно меншим.",
          "reading": "[u nɔˈwɪx ɛkɔnɔˈmʲitʃnɪx uˈmɔwɐx prɪˈbutɔk pʲidprɪˈjɛmstwɐ stɑw ˈznɑtʃnɔ ˈmɛnʃɪm] (oo noh-VYKH eh-koh-noh-MEECH-nykh oo-MOH-vahkh pry-BOO-tohk peed-pry-YEM-stvah stahv ZNAHCH-noh MEN-sheem)",
          "translation": "Under the new economic conditions the enterprise's profit became significantly smaller."
        }
      ],
      "mnemonics": [
        "[г, ж, з] + ш дає «жч» (дорожчий, нижчий), а [с, к] + ш дає «щ» (вищий, кращий)!"
      ],
      "culturalNotes": [
        "Синонімічна пара «кращий / ліпший» демонструє лексичне багатство української мови: слово «ліпший» є питомим і широко вживаним у літературній традиції."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Утворіть форму вищого ступеня від прикметника «дорогий» з урахуванням чергування г + ш -> жч:",
          "options": [
            "Дорожчий (Alternation g + sh -> zhch)",
            "Дорогіший",
            "Дорогший",
            "Дорожший"
          ],
          "answerIndex": 0,
          "explanation": "Звук [г] перед суфіксом -ш- чергується, утворюючи буквосполучення жч: «дорогий -> дорожчий»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка форма є суплетивним вищим ступенем до прикметника «поганий»?",
          "options": [
            "Гірший (Suppletive comparative from base root гір-)",
            "Поганіший",
            "Поганший",
            "Зліший"
          ],
          "answerIndex": 0,
          "explanation": "Вищий ступінь від «поганий» утворюється від іншого кореня: «гірший»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому всі форми вищого ступеня утворені правильно з урахуванням фонетичних змін:",
          "options": [
            "Вищий, дорожчий, нижчий, вужчий, кращий.",
            "Високіший, дорогший, низший, вузший, добріший.",
            "Вижчий, дорожший, низькіший, вузькіший, гарніший.",
            "Висший, дорогіший, нижший, вужший, кращійший."
          ],
          "answerIndex": 0,
          "explanation": "Усі форми «вищий, дорожчий, нижчий, вужчий, кращий» відображають нормативні звукові зміни та суплетивізм."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u15-l3": {
    "id": "uk-u15-l3",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 3,
    "title": "Найвищий ступінь порівняння прикметників (Superlative Degree: Simple & Compound)",
    "level": "B1",
    "objective": "Опанувати творення простої (префікс най-), посиленої (якнай-, щонай-) та складеної (найбільш, найменш) форм найвищого ступеня порівняння прикметників та уникати калькованих конструкцій.",
    "presentation": {
      "explanation": "Найвищий ступінь показує, що предмет має ознаку в найвищому (або найнижчому) прояві порівняно з усіма іншими предметами:\n\n1. Проста (синтетична) форма:\n   - Твориться додаванням префікса «най-» до простої форми вищого ступеня:\n     * найновіший, найтепліший, найкращий, найвищий, найдорожчий, найбільший.\n\n2. Посилена синтетична форма:\n   - Твориться додаванням часток-префіксів «як-» або «що-» до форми найвищого ступеня для вираження граничної міри якості:\n     * якнайкращий, якнайшвидший, якнайбільший, щонайкращий, щонайдорожчий.\n\n3. Складена (аналітична) форма:\n   - Утворюється додаванням слів «найбільш» або «найменш» до початкової форми якісного прикметника:\n     * найбільш авторитетний, найменш шкідливий, найбільш вагомий.\n\n4. ГРАМАТИЧНА ЗАБОРОНА НА КАЛЬКИ:\nВ українській мові категорично не вживається слово «самий» для творення ступенів порівняння! Конструкції «самий красивий», «самий кращий», «самий головний» є грубим суржиком. Правильно: «найкрасивіший», «найкращий», «найголовніший».",
      "examples": [
        {
          "target": "Тарас Шевченко залишається найвидатнішим поетом та пророком українського народу.",
          "reading": "[tɐˈrɑs ʃɛwˈtʃɛnkɔ zɐlɪˈʃɑjɛtʲsʲɑ nɐjwɪdɐtʲˈnʲiʃɪm pɔˈɛtɔm tɑ prɔˈrɔkɔm ukrɐˈjinʲskɔɦɔ nɐˈrɔdu] (tah-RAHS shehv-CHEN-koh zah-ly-SHAH-yet'-syah nahy-vy-daht-NEEY-sheem poh-EH-tohm tah proh-ROH-kohm oo-krah-YEEN-skoh-hoh nah-ROH-doo)",
          "translation": "Taras Shevchenko remains the most prominent poet and prophet of the Ukrainian people."
        },
        {
          "target": "Ми докладемо всіх зусиль, щоб знайти якнайкраще розв'язання цієї проблеми.",
          "reading": "[mɪ dɔklɐˈdɛmɔ wsʲix zuˈsɪlʲ, ʃtʃɔb znɐjˈtɪ jɐknɐjˈkrɑʃtʃɛ rɔzˈwjɑzɐnʲːɑ t͡sʲiˈjɛji prɔbˈlɛmɪ] (my doh-klah-DEH-moh vseekh zoo-SYL', shchohb znahy-TY yahk-nahy-KRAHSH-cheh roz-VYAH-zahn-nyah tsee-YEH-yee prohb-LEH-my)",
          "translation": "We will make every effort to find the very best solution to this problem."
        },
        {
          "target": "Цей науковий журнал є найбільш авторитетним виданням у галузі біотехнологій.",
          "reading": "[t͡sɛj nɐuˈkɔwɪj ʒurˈnɑl jɛ nɐjˈbʲilʲʃ ɐwtɔrɪˈtɛtnɪm wɪˈdɑnʲːɐm u ɦɑˈluzʲi bʲiɔtɛxnɔˈlɔɦʲij] (tsey nah-oo-KOH-vyy zhoor-NAHL yeh nahy-BEEL'SH ahv-toh-ry-TET-nym vy-DAHN-nyah-moo hah-LOO-zee bee-oh-tehkh-noh-LOH-heey)",
          "translation": "This scientific journal is the most authoritative publication in the field of biotechnology."
        }
      ],
      "mnemonics": [
        "Префікс «най-» (найкращий) або посилений «якнай-» (якнайшвидший), а слово «самий» залиш іншим мовам!"
      ],
      "culturalNotes": [
        "Найвища вершина України — гора Говерла (2061 м) у Чорногорі — є класичним географічним прикладом для прикметника «найвища»."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативну форму найвищого ступеня порівняння прикметника:",
          "options": [
            "Найважливіший (Normative simple superlative with prefix най-)",
            "Самий важливий",
            "Самий найважливіший",
            "Більш важливіший"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною формою в українській мові є «найважливіший» (або «найбільш важливий»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке значення надає префікс «якнай-» (наприклад, у слові «якнайкращий»)?",
          "options": [
            "Граничного посилення найвищого ступеня (Emphatic superlative: the absolute best possible)",
            "Неповної міри якості",
            "Зменшувально-пестливого значення",
            "Зневажливого значення"
          ],
          "answerIndex": 0,
          "explanation": "Префікс «якнай-» виражає гранично високу міру якості (якомога кращий)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено суржикову помилку у творенні найвищого ступеня порівняння:",
          "options": [
            "Це самий найкращий день у моєму житті.",
            "Це найкращий день у моєму житті.",
            "Це якнайкращий варіант для нашої команди.",
            "Це найбільш вдалий день для презентації проєкту."
          ],
          "answerIndex": 0,
          "explanation": "Вживання «самий найкращий» є грубою помилкою суржикового походження. Правильно: «найкращий»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u15-l4": {
    "id": "uk-u15-l4",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 4,
    "title": "Ступені порівняння прислівників на -о, -е (Comparison of Adverbs)",
    "level": "B1",
    "objective": "Опанувати творення вищого та найвищого ступенів порівняння якісних прислівників на -о, -е (швидко -> швидше, найшвидше; добре -> краще/ліпше, якнайкраще).",
    "presentation": {
      "explanation": "Прислівники, утворені від якісних прикметників на «-о», «-е», мають такі самі ступені порівняння, як і прикметники:\n\n1. Вищий ступінь прислівників:\n   - Проста форма (суфікси «-ше», «-іше»):\n     * тепло -> тепліше; яскраво -> яскравіше; чисто -> чистіше;\n     * швидко -> швидше; високо -> вище; дорого -> дорожче; низько -> нижче;\n     * добре/хорошо -> краще / ліпше; погано -> гірше; багато -> більше; мало -> менше.\n   - Складена форма (слова «більш / менш» + прислівник):\n     * більш виразно, менш помітно, більш оперативно.\n\n2. Найвищий ступінь прислівників:\n   - Проста форма (префікс «най-» + проста форма вищого ступеня):\n     * найтепліше, найшвидше, найвище, найкраще, найменше.\n   - Посилена форма (префікси «якнай-», «щонай-»):\n     * якнайшвидше (якнайскоріше), якнайкраще, щонайдовше.\n   - Складена форма (слова «найбільш / найменш» + прислівник):\n     * найбільш детально, найменш ризиковано.",
      "examples": [
        {
          "target": "Він виконав складний математичний розрахунок набагато швидше і точніше за інших.",
          "reading": "[wʲin wɪˈkɔnɐw sklɐdˈnɪj mɐtɛmɐˈtɪtʃnɪj rɔzˈrɐxunɔk nɐbɐˈɦɑtɔ ˈʃwɪdʃɛ i tɔtʃˈnʲiʃɛ zɑ ˈinʃɪx] (veen vy-KOH-nahv sklahd-NYY mah-teh-mah-TYCH-nyy roz-RAH-khoo-nohk nah-bah-HAH-toh SHVYD-sheh ee toch-NEE-sheh zah EEN-shykh)",
          "translation": "He performed the complex mathematical calculation much faster and more accurately than the others."
        },
        {
          "target": "Просимо вас якнайшвидше надіслати підтвердження участі у міжнародній конференції.",
          "reading": "[prɔˈsɪmɔ wɑs jɐknɐjˈʃwɪdʃɛ nɐdʲisˈlɑtɪ pʲidtwɛrˈdʒɛnʲːɑ uˈtʃɑsʲtʲi u mʲiʒnɐˈrɔdnʲij kɔnfɛˈrɛnt͡sʲiji] (proh-SY-moh vahs yahk-nahy-SHVYD-sheh nah-dees-LAH-ty peed-twehr-DZHEN-nyah oo-CHAHS-tyee oo meezh-nah-ROHD-neey kohn-feh-REN-tsee-yee)",
          "translation": "We ask you to send confirmation of participation in the international conference as quickly as possible."
        },
        {
          "target": "Нові технології дозволяють працювати значно більш продуктивно та безпечно.",
          "reading": "[nɔˈwʲi tɛxnɔˈlɔɦʲiji dɔzwɔˈlʲɑjutʲ prɐt͡sʲuˈwɑtɪ ˈznɑtʃnɔ bʲilʲʃ prɔdukˈtɪwnɔ tɑ bɛzˈpɛtʃnɔ] (noh-VEE tehkh-noh-LOH-heeyee dohz-voh-LYAH-yoot' praht-syoo-VAH-ty ZNAHCH-noh beel'sh proh-dook-TYV-noh tah bez-PECH-noh)",
          "translation": "New technologies allow working much more productively and safely."
        }
      ],
      "mnemonics": [
        "Прислівник закінчується на «-е / -ше» (швидше, найтепліше), а прикметник — на закінчення роду (швидший, найтепліший)!"
      ],
      "culturalNotes": [
        "Формула ввічливості «якнайшвидше» є еталоном ділового листування в українському електронному та дипломатичному етикеті."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть форму вищого ступеня прислівника для заповнення пропуску: «Цього разу команда зіграла набагато ...»:",
          "options": [
            "Краще (Comparative adverb form from добре)",
            "Кращий",
            "Більш краще",
            "Саме краще"
          ],
          "answerIndex": 0,
          "explanation": "Прислівник способу дії у формі вищого ступеня — «краще»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка форма є посиленим найвищим ступенем прислівника «швидко»?",
          "options": [
            "Якнайшвидше (Emphatic superlative adverb: as fast as possible)",
            "Саме скоріше",
            "Більш швидше",
            "Швидкісінько"
          ],
          "answerIndex": 0,
          "explanation": "Посилена форма прислівника найвищого ступеня — «якнайшвидше»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ступінь порівняння прислівника вжито синтаксично правильно:",
          "options": [
            "Він говорив набагато виразніше і переконливіше, ніж раніше.",
            "Він говорив більш виразніше і переконливіше.",
            "Він говорив самий виразно з усіх доповідачів.",
            "Він говорив виразніший за всіх."
          ],
          "answerIndex": 0,
          "explanation": "Форми прислівників «виразніше і переконливіше» утворені бездоганно."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u15-l5": {
    "id": "uk-u15-l5",
    "subject": "ukrainian",
    "unit": 15,
    "lessonNumber": 5,
    "title": "Синтаксичні порівняльні конструкції (Comparative Syntax & Government)",
    "level": "B1",
    "objective": "Опанувати автентичні українські синтаксичні конструкції порівняння (за + Знахідний, від + Родовий, ніж/як + Називний, утричі більший за) та позбутися калькованого безприйменникового вживання.",
    "presentation": {
      "explanation": "В українській мові при порівнянні предметів чи дій обов'язково використовуються спеціальні прийменникові та сполучникові конструкції:\n\n1. Нормативні моделі порівняння в українській мові:\n   - Модель 1: «Прикметник/прислівник вищого ступеня + ЗА + Знахідний відмінок»:\n     * «Брат старший за сестру» (а не *старше сестри*);\n     * «Київ давніший за багато європейських столиць».\n   - Модель 2: «Прикметник/прислівник вищого ступеня + ВІД + Родовий відмінок»:\n     * «Ця книга цікавіша від попередньої»;\n     * «Він працює швидше від мене».\n   - Модель 3: «Прикметник/прислівник вищого ступеня + НІЖ / ЯК + паралельна форма»:\n     * «Сьогодні тепліше, ніж учора»;\n     * «Цей будинок вищий, як той».\n\n2. Кількісне порівняння (міра різниці):\n   - «НА + скільки»: «На п'ять років старший за...», «На два метри вищий».\n   - «У / В + скільки разів»: «Удвічі дорожчий від...», «Утричі швидше за...».\n\n3. ГРАМАТИЧНА ПОМИЛКА (Безприйменниковий родовий відмінок):\nКонструкції на кшталт «він старше мене», «краще того варіанту» є прямою калькою з російської мови. В українській мові порівняльний зворот ЗАВЖДИ має прийменник («старший за мене», «кращий від того варіанту») або сполучник («старший, ніж я»).",
      "examples": [
        {
          "target": "Андрій на три роки старший за свого молодшого брата.",
          "reading": "[ɐnˈdrʲij nɑ trɪ ˈrɔkɪ ˈstɑrʃɪj zɑ swɔˈjɔɦɔ mɔˈlɔdʃɔɦɔ ˈbrɑtɐ] (ahn-DREEY nah try ROH-ky STAHR-sheey zah swoh-YOH-hoh moh-LOHD-shoh-hoh BRAH-tah)",
          "translation": "Andriy is three years older than his younger brother."
        },
        {
          "target": "Нова будівля виявилася значно вищою від навколишніх старовинних споруд.",
          "reading": "[nɔˈwɑ buˈdʲiwlʲɑ wɪˈjɑwɪlɐsʲɑ ˈznɑtʃnɔ ˈwɪʃtʃɔju wʲid nɐwkoˈlɪʃnʲix stɐrɔˈwɪnːɪx spɔˈrud] (noh-VAH boo-DEEV-lyah vy-YAH-vy-lahs'-yah ZNAHCH-noh VYSH-choh-yoo veed nahv-koh-LYSH-neekh stah-roh-VYN-nykh spoh-ROOD)",
          "translation": "The new building turned out to be significantly taller than the surrounding ancient structures."
        },
        {
          "target": "Цей сучасний комп'ютер працює втричі швидше, ніж попередня модель.",
          "reading": "[t͡sɛj sut͡ʃɐsˈnɪj kɔmˈpjutɛr prɐt͡sʲuˈjɛ ˈwtrɪtʃi ˈʃwɪdʃɛ, nʲiʒ pɔpɛˈrɛdnʲɑ mɔˈdɛlʲ] (tsey soo-chahs-NYY kohm-PYOO-tehr praht-syoo-YEH VTRY-chee SHVYD-sheh, neezh poh-peh-RED-nyah moh-DEL')",
          "translation": "This modern computer operates three times faster than the previous model."
        }
      ],
      "mnemonics": [
        "Порівнюй по-українськи: «старший за мене», «кращий від тебе» або «розумніший, ніж він»!"
      ],
      "culturalNotes": [
        "Конструкція «старший за» з прийменником «за» є найпоширенішою і найорганічнішою в живій розмовній та літературній мові України."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну граматичну конструкцію порівняння віку:",
          "options": [
            "Оксана старша за Марію (Correct Ukrainian comparative with prep за + Acc)",
            "Оксана старше Марії",
            "Оксана більш старша Марії",
            "Оксана сама старша від Марії"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна українська синтаксична модель — «старша за Марію»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Які прийменники стандартно використовуються в українській мові при ступенях порівняння?",
          "options": [
            "За (+ Зн. в.) та Від (+ Род. в.) (старший за нього / кращий від цього)",
            "Без прийменника з родовим відмінком",
            "Через (+ Зн. в.)",
            "Крізь (+ Зн. в.)"
          ],
          "answerIndex": 0,
          "explanation": "Стандартними порівняльними прийменниками є «за» (зі знахідним відмінком) та «від» (із родовим відмінком)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому порівняльну синтаксичну конструкцію побудовано абсолютно правильно:",
          "options": [
            "Наш університет значно давніший за багато сучасних європейських закладів вищої освіти.",
            "Наш університет значно давніше багатьох сучасних закладів.",
            "Наш університет більш давніший багатьох сучасних закладів.",
            "Наш університет самий давніший серед усіх закладів."
          ],
          "answerIndex": 0,
          "explanation": "Конструкція «давніший за багато закладів» є бездоганною літературною нормою."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u16-l1": {
    "id": "uk-u16-l1",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 1,
    "title": "Власне-зворотні та взаємно-зворотні дієслова (Proper & Reciprocal Reflexives)",
    "level": "B1",
    "objective": "Опанувати розрізнення власне-зворотних (дія на себе: умиватися) та взаємно-зворотних (взаємна дія: зустрічатися, листуватися) дієслів та правила евфонії постфікса -ся/-сь.",
    "presentation": {
      "explanation": "Зворотні дієслова в українській мові мають постфікс «-ся» (або його евфонічний варіант «-сь»), який історично походить від короткої форми зворотного займенника «себе».\n\n1. Власне-зворотні дієслова (Proper reflexive):\nПозначають дію, яку суб'єкт спрямовує безпосередньо на самого себе (суб'єкт і об'єкт дії збігаються):\n   - Умиватися (умивати себе), одягатися, розчісуватися, голитися, загартовуватися.\n   - Приклад: «Вранці спортсмен швидко вмивається холодною водою та готується до тренування».\n\n2. Взаємно-зворотні дієслова (Reciprocal reflexive):\nПозначають спільну дію двох або більше суб'єктів, спрямовану один на одного (кожен суб'єкт є водночас об'єктом):\n   - Зустрічатися, листуватися, обійматися, вітатися, радитися, прощатися, змагатися.\n   - Приклад: «Давні друзі радісно зустрілися на вокзалі й тепло обійнялися».\n\n3. Евфонічні правила вживання «-ся» та «-сь»:\n   - Після приголосних пишеться виключно «-ся»: умиваєшся, одягаються, зустрівся, сміються.\n   - Після голосних у поезії та розмовній мові постфікс може скорочуватися до «-сь» для милозвучності: сподіваюся / сподіваюсь, умилися / умились, схилилася / схилилась.",
      "examples": [
        {
          "target": "Щоранку я ретельно вмиваюся прохолодною водою і швидко одягаюся.",
          "reading": "[ʃtʃɔˈrɑnku jɑ ˈrɛtɛlʲnɔ wmɪˈwɑjusʲɑ prɔxɔˈlɔdnɔju wɔˈdɔju i ˈʃwɪdkɔ ɔdʲɑˈɦɑjusʲɑ] (shchoh-RAHN-koo yah REH-tel'-noh vmy-VAH-yoos'-yah proh-khoh-LOHD-noh-yoo voh-DOH-yoo ee SHVYD-koh oh-dyah-HAH-yoos'-yah)",
          "translation": "Every morning I wash thoroughly with cool water and get dressed quickly."
        },
        {
          "target": "Колеги щотижня зустрічаються в лабораторії та радяться щодо нових експериментів.",
          "reading": "[kɔˈlɛɦɪ ʃtʃɔtɪʒˈnʲɑ zustrʲiˈtʃɑjutʲsʲɑ w lɐbɔrɐˈtɔrʲiji tɑ ˈrɑdʲɐtʲsʲɑ ʃtʃɔˈdɔ nɔˈwɪx ɛkspɛrɪˈmɛntʲiw] (koh-LEH-hy shchoh-tyzh-NYAH zoos-tree-CHAH-yoot'-syah v lah-boh-rah-TOH-ry-yee tah RAH-dyat'-syah shchoh-DOH noh-VYKH eks-peh-ry-MEN-teew)",
          "translation": "Colleagues meet weekly in the laboratory and consult on new experiments."
        },
        {
          "target": "Ми вже понад п'ять років регулярно листуємося електронною поштою.",
          "reading": "[mɪ wʒɛ ˈpɔnɐd pjɑtʲ ˈrɔkʲiw rɛɦuˈlʲɑrnɔ lɪsˈtujɛmɔsʲɑ ɛlɛktˈrɔnnɔju ˈpɔʃtɔju] (my vzheh POH-nahd pyat' ROH-keew reh-hoo-LYAHR-noh lys-TOO-yeh-mohs'-yah eh-lehk-TROHN-noh-yoo POHSH-toh-yoo)",
          "translation": "We have been corresponding regularly via email for over five years."
        }
      ],
      "mnemonics": [
        "«Вмиватися» — діяти на себе; «листуватися й обійматися» — діяти разом один з одним!"
      ],
      "culturalNotes": [
        "Фонетична вимова сполучень «-ться» як [ц':а] та «-шся» як [с':а] є фундаментальним законом української орфоепії (пишеться «вчиться», звучить [вч́иц':а])."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "До якої семантичної групи належить дієслово «листуватися» у реченні «Учені постійно листуються між собою»?",
          "options": [
            "Взаємно-зворотні дієслова (Reciprocal reflexive action directed at each other)",
            "Власне-зворотні дієслова",
            "Безособові дієслова",
            "Пасивні дієслова"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «листуватися» позначає взаємну спільну дію кількох осіб, тому є взаємно-зворотним."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як згідно з законами орфоепії вимовляється буквосполучення «-ться» у дієслові «сміється»?",
          "options": [
            "Як м'який подовжений звук [ц':а] (сміє[ц':а])",
            "Як [т-с-я]",
            "Як твердий [ца]",
            "Як [ч':а]"
          ],
          "answerIndex": 0,
          "explanation": "В українській літературній вимові буквосполучення «-ться» уподібнюється до подовженого м'якого [ц':а]."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому всі дієслова належать до групи власне-зворотних (дія на самого себе):",
          "options": [
            "Умиватися, одягатися, голитися, загартовуватися.",
            "Зустрічатися, листуватися, обійматися, змагатися.",
            "Сміятися, боятися, сподіватися, пишатися.",
            "Смеркатися, не спиться, світатися, здаватися."
          ],
          "answerIndex": 0,
          "explanation": "Дієслова «умиватися, одягатися, голитися, загартовуватися» виражають дію суб'єкта, спрямовану на самого себе."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u16-l2": {
    "id": "uk-u16-l2",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 2,
    "title": "Загальнозворотні дієслова та дієслова внутрішнього стану (General Reflexives & State)",
    "level": "B1",
    "objective": "Опанувати використання загальнозворотних дієслів емоційного та фізичного стану (хвилюватися, радіти -> тішитися, дивуватися, злитися, заспокоюватися) та активних властивостей предмета.",
    "presentation": {
      "explanation": "Загальнозворотні дієслова позначають внутрішній психоемоційний або фізичний стан людини, зміни в організмі чи вияв постійних властивостей об'єкта:\n\n1. Дієслова психоемоційного та душевного стану:\nПозначають зміни в настрої, почуттях та переживаннях суб'єкта:\n   - Хвилюватися, турбуватися, журитися, печалитися;\n   - Радіти / тішитися (тішитися успіхами);\n   - Дивуватися (дивуватися відкриттю);\n   - Злитися, гніватися, сердитися, ображатися;\n   - Заспокоюватися, миритися, сумніватися.\n\n2. Дієслова змін фізичного стану та руху в просторі:\n   - Прокидатися, зупинятися, підводитися, нахилятися, ховатися, просуватися.\n\n3. Дієслова постійної активної властивості предмета:\nПоказують здатність предмета чи істоти проявляти дію щодо будь-кого:\n   - Собака кусається (має властивість кусати);\n   - Кропива жалиться (пече);\n   - Тканина легко мнеться;\n   - Двері погано зачиняються.",
      "examples": [
        {
          "target": "Студенти щиро тішаться своїми першими науковими досягненнями та успіхами.",
          "reading": "[stuˈdɛntɪ ˈʃtʃɪrɔ ˈtʲiʃɐtʲsʲɑ swɔˈjɪmɪ ˈpɛrʃɪmɪ nɐuˈkɔwɪmɪ dɔsʲˈtʲɑɦnɛnʲːɐmɪ tɑ usʲˈpʲixɐmɪ] (stoo-DEN-ty SHCHY-roh TEE-shaht'-syah swoh-YEE-my PEHR-shym-y nah-oo-KOH-wy-my dohs-TYAHH-nen-nyah-my tah oos-PEE-khah-my)",
          "translation": "The students are sincerely delighted with their first scientific achievements and successes."
        },
        {
          "target": "Перед важливим публічним виступом оратор трохи хвилювався, але швидко заспокоївся.",
          "reading": "[pɛrɛd wɑʒˈlɪwɪm pubˈlʲitʃnɪm ˈwɪstupɔm ɔˈrɑtɔr ˈtrɔxɪ xwɪlʲuˈwɑwsʲɑ, ˈɑlɛ ˈʃwɪdkɔ zɐspɔˈkɔjɪwsʲɑ] (PEH-red vahzh-LY-wym poob-LEECH-nym VYS-too-pohm oh-RAH-tor TROH-khy khwy-lyoo-VAHV-syah, AH-leh SHVYD-koh zahs-poh-KOH-yeev-syah)",
          "translation": "Before the important public speech the orator was a bit anxious, but calmed down quickly."
        },
        {
          "target": "Будьте обережні біля саду: молода кропива дуже сильно жалиться.",
          "reading": "[ˈbudʲtɛ ɔbɛˈrɛʒnʲi ˈbʲilʲɑ ˈsɑdu mɔlɔˈdɑ krɔpɪˈwɑ ˈduʒɛ ˈsʲilʲnɔ ˈʒɑlɪtʲsʲɑ] (BOOD'-teh oh-beh-REHZH-nee BEE-lyah SAH-doo moh-loh-DAH kroh-py-VAH DOO-zheh SEEL'-noh ZHAH-lyt'-syah)",
          "translation": "Be careful near the garden: young nettle stings very severely."
        }
      ],
      "mnemonics": [
        "«Тішитися й хвилюватися» — стан душі; «кропива жалиться» — природна властивість!"
      ],
      "culturalNotes": [
        "Дієслово «тішитися» (радіти, насолоджуватися) є питомим українським словом, що передає глибоку радість і задоволення результатами праці."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Яке значення має зворотне дієслово в реченні «Цей новий матеріал зовсім не мнеться»?",
          "options": [
            "Постійна властивість або якість предмета (Characteristic property of the object)",
            "Взаємна дія двох осіб",
            "Власне-зворотна дія на самого себе",
            "Безособовий стан погоди"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «мнеться» описує якісну фізичну властивість матеріалу під час використання."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть дієслово психоемоційного стану, що керує орудним відмінком («... успіхами»):",
          "options": [
            "Тішитися (тішитися успіхами - to rejoice in successes)",
            "Дивуватися",
            "Сумніватися",
            "Боятися"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «тішитися» в українській мові керує орудним відмінком: «тішитися успіхами»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому вжито дієслово внутрішнього психоемоційного стану суб'єкта:",
          "options": [
            "Ми щиро тішилися кожній перемозі наших талановитих випускників.",
            "Автомобіль швидко наблизився до перехрестя.",
            "Хлопець ретельно вмивається холодною водою.",
            "Діти гралися і змагалися на спортивному майданчику."
          ],
          "answerIndex": 0,
          "explanation": "«Тішилися» позначає внутрішній емоційний стан радості суб'єктів."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u16-l3": {
    "id": "uk-u16-l3",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 3,
    "title": "Безособово-зворотні конструкції (Impersonal Reflexive Syntax: -ться, -лося)",
    "level": "B1",
    "objective": "Опанувати синтаксичну структуру безособових речень зі зворотними дієсловами (мені не спиться, хочеться, здається, дихається легко) та давальним відмінком суб'єкта.",
    "presentation": {
      "explanation": "Безособово-зворотні дієслова позначають дію або стан, що протікають незалежно від волі дійової особи, яка сприймає цей стан пасивно:\n\n1. Синтаксична модель безособових речень зі зворотними дієсловами:\n   - «Суб'єкт у ДАВАЛЬНОМУ відмінку (кому?) + Дієслово в 3-й особі однини (або с.р. минулого часу на -лося)»:\n     * Мені не спиться (I cannot sleep);\n     * Йому не сидиться на місці;\n     * Нам легко дихається у сосновому лісі;\n     * Їй хотілося вірити у диво;\n     * Студентам пощастило на іспиті.\n\n2. Модальні та перцептивні значення:\n   - Внутрішнє бажання/потяг: «Мені хочеться випити кави», «Тобі не здається?»\n   - Фізичне самопочуття: «Хворому не лежиться», «У горах легко дихається».\n   - Успіх та фатальність: «Команді пощастило здобути перемогу».\n   - Природні явища та час: «Надворі вже смеркається», «Взимку швидко темніє / темніється».\n\n3. Відсутність граматичного підмета:\nУ таких реченнях підмета в називному відмінку НЕ МОЖЕ бути. Суб'єкт переживання завжди стоїть у давальному відмінку (мені, тобі, йому, їй, нам, вам, їм).",
      "examples": [
        {
          "target": "Після виснажливого робочого дня мені зовсім не спалося через тривожні думки.",
          "reading": "[ˈpʲisʲlʲɑ wɪsnɐʒˈlɪwɔɦɔ rɔˈbɔtʃɔɦɔ dnʲɑ mɛˈnʲi ˈzɔwsʲim nɛ spɐˈlɔsʲɑ ˈtʃɛrɛz trɪˈwɔʒnʲi ˈdumkɪ] (PEES-lyah vys-nahzh-LY-woh-hoh roh-BOH-choh-hoh dnyah meh-NYEE ZOHV-seem neh spah-LOHS'-yah CHEH-rez try-VOHZH-nee DOOM-ky)",
          "translation": "After an exhausting workday I could not sleep at all because of anxious thoughts."
        },
        {
          "target": "У чистішому карпатському повітрі дихається надзвичайно легко та вільно.",
          "reading": "[u t͡ʃɪsʲˈtʲiʃɔmu kɐrˈpɑt͡sʲkɔmu pɔˈwʲitrʲi ˈdɪxɐjɛtʲsʲɑ nɐdzwɪˈtʃɑjnɔ ˈlɛxkɔ tɑ ˈwʲilʲnɔ] (oo chys-TEE-shoh-moo kahr-PAHT-s'koh-moo poh-VEET-ryee DY-khah-yet'-syah nahd-zvy-CHAHY-noh LEHKH-koh tah VEEL'-noh)",
          "translation": "In the purer Carpathian air breathing is extraordinarily easy and free."
        },
        {
          "target": "Науковцям щиро хотілося якнайшвидше завершити підготовку фундаментального звіту.",
          "reading": "[nɐuˈkɔwt͡sʲɐm ˈʃtʃɪrɔ xɔˈtʲilɔsʲɑ jɐknɐjˈʃwɪdʃɛ zɐwɛrˈʃɪtɪ pʲidɦɔˈtɔwku fundɐmɛnˈtɑlʲnɔɦɔ ˈzwʲitu] (nah-oo-KOV-tsyahm SHCHY-roh khoh-TEE-lohs'-yah yahk-nahy-SHVYD-sheh zah-vehr-SHY-ty peed-hoh-TOHV-koo foon-dah-men-TAHL'-noh-hoh ZVEE-too)",
          "translation": "The scientists sincerely wished to complete the preparation of the fundamental report as quickly as possible."
        }
      ],
      "mnemonics": [
        "Немає підмета — стан у давальному: «мені не спиться», «йому хочеться», «нам дихається»!"
      ],
      "culturalNotes": [
        "Безособові конструкції є яскравою типологічною рисою синтаксису української мови, яка надає мовленню надзвичайної делікатності та психологічної глибини."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "У якому відмінку стоїть логічний суб'єкт у реченні «... не сиділося на одному місці»?",
          "options": [
            "У давальному відмінку (Дітям не сиділося - logical subject in Dative)",
            "У називному відмінку",
            "В орудному відмінку",
            "У місцевому відмінку"
          ],
          "answerIndex": 0,
          "explanation": "У безособових реченнях зі зворотними дієсловами суб'єкт позначається давальним відмінком: «дітям / мені / йому»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке речення є безособовим зі зворотним дієсловом стану?",
          "options": [
            "У лісі дихається напрочуд легко.",
            "Спортсмен дихає глибоко.",
            "Студенти вчаться старанно.",
            "Місто прокидається від сну."
          ],
          "answerIndex": 0,
          "explanation": "Речення «У лісі дихається напрочуд легко» не має підмета і містить безособово-зворотне дієслово «дихається»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому безособову конструкцію побудовано абсолютно правильно:",
          "options": [
            "Мені сьогодні зовсім не працювалося через сильний головний біль.",
            "Я сьогодні зовсім не працювалося через біль.",
            "Мене сьогодні не працювалося через біль.",
            "Мною сьогодні не працювалося через біль."
          ],
          "answerIndex": 0,
          "explanation": "Правильна модель вимагає давального відмінка суб'єкта: «мені не працювалося»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u16-l4": {
    "id": "uk-u16-l4",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 4,
    "title": "Дієслова Reflexiva Tantum (тільки з постфіксом -ся)",
    "level": "B1",
    "objective": "Опанувати список дієслів групи Reflexiva Tantum (що існують тільки з постфіксом -ся) та їх відмінкове керування (боятися темряви, пишатися мовою, сподіватися на успіх).",
    "presentation": {
      "explanation": "Reflexiva Tantum — це категорія дієслів, які в українській мові взагалі не вживаються без постфікса «-ся» (не мають незворотної пари):\n\n1. Основний реєстр дієслів Reflexiva Tantum:\n   - Психологічні реакції та почуття: сміятися, боятися, сподіватися, надіятися, пишатися, гордитися, каятися, журитися, лінуватися, лютувати, хизуватися.\n   - Поведінка та мовні дії: знущатися, кпити (глузувати), козирятися, пручатися, намагатися, наважитися, схаменутися.\n   - Природні процеси та рух: лисніти (лиснітися), звиватися, плентатися, торопитися.\n\n2. Специфіка синтаксичного керування:\n   - Боятися, лякатися -> керують РОДОВИМ відмінком без прийменника: боятися труднощів, боятися темряви (а не *боятися за темряву*).\n   - Пишатися, гордитися -> керують ОРУДНИМ відмінком: пишатися Батьківщиною, пишатися досягненнями.\n   - Сподіватися, надіятися -> керують прийменником НА + Знахідний відмінок: сподіватися на перемогу, надіятися на краще.\n   - Знущатися, глузувати -> керують прийменником З / НАД + Родовий/Орудний: глузувати з ворога, знущатися над полоненими.",
      "examples": [
        {
          "target": "Ми щиро пишаємося нашими мужніми захисниками та незламним українським народом.",
          "reading": "[mɪ ˈʃtʃɪrɔ pɪˈʃɑjɛmɔsʲɑ ˈnɑʃɪmɪ ˈmuʒnʲimɪ zɐxɪsnɪˈkɑmɪ tɑ nɛzˈlɑmnɪm ukrɐˈjinʲskɪm nɐˈrɔdɔm] (my SHCHY-roh py-SHAH-yeh-mohs'-yah NAH-shy-my MOOZH-nee-my zah-khys-ny-KAH-my tah nez-LAHM-nym oo-krah-YEEN-skym nah-ROH-dohm)",
          "translation": "We are sincerely proud of our courageous defenders and the unconquerable Ukrainian people."
        },
        {
          "target": "Справжній дослідник ніколи не боїться складних завдань і наполегливо намагається досягти мети.",
          "reading": "[ˈsprɑwʒnʲij dɔsʲˈlʲidnɪk ˈnʲikɔlɪ nɛ bɔˈjitʲsʲɑ sklɐdˈnɪx zɐwˈdɑnʲ i nɐpɔˈlɛɦlɪwɔ nɐˈmɑɦɐjɛtʲsʲɑ dɔsʲˈtʲɑxtɪ mɛˈtɪ] (SPRAHVZH-neey dohs-LEED-nyk NEE-koh-ly neh boh-YEET'-syah sklahd-NYKH zahv-DAHN' ee nah-poh-LEHH-ly-woh nah-MAH-hah-yet'-syah dohs-TYAHKH-ty meh-TY)",
          "translation": "A true researcher is never afraid of difficult tasks and persistently attempts to achieve the goal."
        },
        {
          "target": "Українці твердо сподіваються на відновлення справедливого миру та процвітання країни.",
          "reading": "[ukrɐˈjinʲt͡sʲi ˈtwɛrdɔ spɔdʲiˈwɑjutʲsʲɑ nɑ wʲidnɔwˈlɛnʲːɑ sprɐwɛdˈlɪwɔɦɔ ˈmɪru tɑ prɔt͡swʲiˈtɑnʲːɑ krɐˈjinɪ] (oo-krah-YEEN-tsee TVEHR-doh spoh-dee-VAH-yoot'-syah nah veed-nohv-LEN-nyah sprah-vehd-LY-woh-hoh MY-roo tah proh-tsvee-TAHN-nyah krah-YEE-ny)",
          "translation": "Ukrainians firmly hope for the restoration of a just peace and the prosperity of the country."
        }
      ],
      "mnemonics": [
        "Слова-близнюки з «-ся»: «боятися» (чого?), «пишатися» (чим?), «сподіватися» (на що?) — без «-ся» їх у природі немає!"
      ],
      "culturalNotes": [
        "Дієслово «пишатися» є ключовим компонентом патріотичного та урочистого дискурсу в сучасній Україні."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний відмінок залежного слова при дієслові «боятися» у реченні «Він ніколи не боявся ...»:",
          "options": [
            "Труднощів (Родовий відмінок без прийменника)",
            "Труднощами",
            "На труднощі",
            "Про труднощі"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «боятися» стандартно керує родовим відмінком без прийменника: «боятися труднощів»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово належить до категорії Reflexiva Tantum (не існує без частки -ся)?",
          "options": [
            "Сподіватися (Reflexivum tantum - no non-reflexive base сподівати in standard use)",
            "Читати",
            "Писати",
            "Одягати"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «сподіватися» функціонує виключно з постфіксом -ся."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому синтаксичне керування дієслова Reflexivum Tantum виконано абсолютно правильно:",
          "options": [
            "Ми щиро пишаємося високими досягненнями наших молодих винахідників.",
            "Ми щиро пишаємося про високі досягнення наших винахідників.",
            "Ми щиро пишаємося за високі досягнення винахідників.",
            "Ми щиро пишаємося високих досягнень винахідників."
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «пишатися» вимагає орудного відмінка без прийменника: «пишаємося досягненнями»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u16-l5": {
    "id": "uk-u16-l5",
    "subject": "ukrainian",
    "unit": 16,
    "lessonNumber": 5,
    "title": "Зворотність та пасивний стан: культура мови (Reflexive vs Passive Calques)",
    "level": "B1",
    "objective": "Опанувати фундаментальні правила української стилістики щодо усунення штучних пасивних конструкцій на -ся (закон приймається радою -> Рада ухвалює закон / закон ухвалено).",
    "presentation": {
      "explanation": "В українській мові вживання дієслів на «-ся» у значенні пасивного стану при наявності суб'єкта дії є неприпустимою калькою з російської мови:\n\n1. Стилістична заборона (калькований пасив на «-ся»):\n   - Неправильно (суржиковий пасив): «Закон приймається Верховною Радою», «Книга пишеться автором», «Будинок будується робітниками».\n\n2. Нормативні способи вираження дії в українській мові:\n   - Спосіб 1: Активна конструкція (Дійова особа в називному відмінку + дієслово + прямий додаток):\n     * «Верховна Рада ухвалює закон».\n     * «Автор пише цікаву книгу».\n     * «Будівельники зводять сучасний будинок».\n   - Спосіб 2: Безособові предикативні форми на «-но», «-то» (найхарактерніша риса українського ділового стилю):\n     * «Закон ухвалено Верховною Радою».\n     * «Книгу написано талановитим автором».\n     * «Будинок побудовано вчасно».\n   - Спосіб 3: Неозначено-особові речення (дія у 3-й особі множини):\n     * «У місті будують новий міст».\n     * «На зборах обговорюють важливі питання».\n\n3. Коли «-ся» є природним:\nДієслово на «-ся» вживається лише тоді, коли процес мислиться як природний стан або саморозвиток без зазначення зовнішнього агента:\n   - «Пшениця колоситься в полі»;\n   - «Двері відчиняються автоматично»;\n   - «Крига тане на сонці».",
      "examples": [
        {
          "target": "Верховна Рада України одноголосно ухвалила важливий євроінтеграційний закон.",
          "reading": "[wɛrˈxɔwnɐ ˈrɑdɐ ukrɐˈjinɪ ɔdnɔɦɔˈlɔsnɔ uxˈwɑlɪlɐ wɑʒˈlɪwɪj jɛwrɔintɛɦrɐt͡sʲijˈnɪj zɐˈkɔn] (vehr-KHOHV-nah RAH-dah oo-krah-YEE-ny ohd-noh-hoh-LOHS-noh ookh-VAH-ly-lah vahzh-LY-vyy yehv-roh-een-teh-hrah-tseey-NYY zah-KOHN)",
          "translation": "The Verkhovna Rada of Ukraine unanimously passed an important European integration law."
        },
        {
          "target": "Усі необхідні фінансові документи вже перевірено та затверджено керівництвом.",
          "reading": "[uˈsʲi nɛɔbˈxʲidnʲi fʲinɐnˈsɔwʲi dɔkuˈmɛntɪ wʒɛ pɛrɛˈwʲirɛnɔ tɑ zɐtwɛrˈdʒɛnɔ kɛrʲiwˈnɪt͡stwɔm] (oo-SEE neh-ohb-KHEED-nee fee-nahn-SOH-vee doh-koo-MEN-ty vzheh peh-reh-VEE-reh-noh tah zah-twehr-DZHEN-noh keh-reev-NYTS-tvohm)",
          "translation": "All necessary financial documents have already been verified and approved by the management."
        },
        {
          "target": "На весняному теплому сонці швидко тане останній зимовий сніг.",
          "reading": "[nɑ wɛsʲˈnʲɑnɔmu ˈtɛplɔmu ˈsɔnt͡sʲi ˈʃwɪdkɔ ˈtɑnɛ ɔsˈtɑnʲːij zɪˈmɔwɪj sʲnʲix] (nah ves-NYAH-noh-moo TEP-loh-moo SOHN-tsee SHVYD-koh TAH-neh ohs-TAHN-nyay zy-MOH-vyy sneekh)",
          "translation": "Under the warm spring sun the last winter snow is quickly melting."
        }
      ],
      "mnemonics": [
        "Не кажи «закон приймається радою» — скажи «Рада ухвалює закон» або «закон ухвалено»!"
      ],
      "culturalNotes": [
        "Використання дієслівних форм на -но, -то замість пасивів на -ся є золотим стандартом юридичного та ділового мовлення незалежної України."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно відредагувати речення зі штучним пасивом «Звіт готується комісією»?",
          "options": [
            "Комісія готує звіт / Звіт підготовлено комісією (Active voice or impersonal -но form)",
            "Звіт робиться комісією",
            "Звіт є готуємий комісією",
            "Звітом готується комісія"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною заміною є активна конструкція «Комісія готує звіт» або предикативна на -но «Звіт підготовлено»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка конструкція є найбільш органічною для офіційно-ділового стилю української мови?",
          "options": [
            "Рішення ухвалено одноголосно (Impersonal predicative form in -но)",
            "Рішення ухвалюється одноголосно всіма",
            "Рішення є ухвалене",
            "Рішення прийнялося"
          ],
          "answerIndex": 0,
          "explanation": "Форми на -но/-то («ухвалено», «виконано») є нормативним стандартом українського ділового стилю."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому НЕМАЄ штучного пасивного вживання дієслова на -ся:",
          "options": [
            "Провідні науковці університету ретельно досліджують цю актуальну тему.",
            "Ця актуальна тема ретельно досліджується науковцями університету.",
            "Нова книга зараз пишеться відомим українським автором.",
            "План розвитку затверджується міською радою щороку."
          ],
          "answerIndex": 0,
          "explanation": "Речення «Провідні науковці досліджують...» побудовано в природному активному стані без штучного пасиву на -ся."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u17-l1": {
    "id": "uk-u17-l1",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 1,
    "title": "Умовний спосіб дієслів: творення та евфонія часток б/би (Subjunctive Mood & Euphony)",
    "level": "B2",
    "objective": "Опанувати творення форм умовного способу дієслів (минулий час + частка б/би), правила евфонічного чергування б/би після голосних і приголосних та позицію частки в реченні.",
    "presentation": {
      "explanation": "Умовний спосіб (Subjunctive / Conditional mood) виражає дію не як реальний факт, а як бажану, можливу за певних умов або гіпотетичну:\n\n1. Граматична модель творення:\nУмовний спосіб утворюється поєднанням форми минулого часу дієслова (-в, -ла, -ло, -ли) з модальною часткою «б» або «би»:\n   - Чоловічий рід: читав би, зробив би, знав би, допоміг би;\n   - Жіночий рід: читала б, зробила б, знала б, допомогла б;\n   - Середній рід: читало б, зробило б, знало б, допомогло б;\n   - Множина: читали б, зробили б, знали б, допомогли б.\n\n2. Закон евфонії (милозвучності) для часток «б» та «би»:\n   - Частка «Б» вживається після слів, що закінчуються на ГОЛОСНИЙ звук: я хотіла б, ми пішли б, ви допомогли б, вона порадила б, я б зробив.\n   - Частка «БИ» вживається після слів, що закінчуються на ПРИГОЛОСНИЙ звук: він знав би, я сказав би, він міг би, літак злетів би, він би зробив.\n\n3. Позиція частки в реченні:\nЧастка «б / би» не має фіксованого місця і може стояти як після дієслова, так і перед ним (тяжіючи до логічно наголошеного слова або займенника): «Я обов'язково допоміг би вам» або «Я б вам обов'язково допоміг».",
      "examples": [
        {
          "target": "Я з великим задоволенням відвідала б цю міжнародну наукову конференцію в Києві.",
          "reading": "[jɑ z wɛˈlɪkɪm zɐdɔˈwɔlɛnʲːɐm wʲidˈwʲidɐlɐ b t͡sʲu mʲiʒnɐˈrɔdnu nɐuˈkɔwu kɔnfɛˈrɛnt͡sʲiju w ˈkɪjɛwʲi] (yah z veh-LY-kym zah-doh-VOH-len-nyah-m veed-VEE-dah-lah b tsee-OO meezh-nah-ROHD-noo nah-oo-KOH-voo kohn-feh-REN-tsee-yoo v KY-yeh-vee)",
          "translation": "I would attend this international scientific conference in Kyiv with great pleasure."
        },
        {
          "target": "Він обов'язково підтримав би цей перспективний інноваційний стартап.",
          "reading": "[wʲin ɔbɔˈwjɑzkɔwɔ pʲidˈtrɪmɐw bɪ t͡sɛj pɛrspɛkˈtɪwnɪj innɔwɐt͡sʲijˈnɪj stɐrˈtɑp] (veen oh-bohv-YAHZ-koh-woh peed-TRY-mahv by tsey pehr-spehk-TYV-nyy een-noh-vah-tseey-NYY stahr-TAHP)",
          "translation": "He would definitely support this promising innovative startup."
        },
        {
          "target": "Ми охоче взяли б участь у спільних європейських академічних дослідженнях.",
          "reading": "[mɪ ɔˈxɔtʃɛ ˈwzʲɑlɪ b ˈutʃɑsʲtʲ u ˈspʲilʲnɪx jɛwrɔˈpɛjsʲkɪx ɐkɐdɛˈmʲitʃnɪx dɔsʲˈlʲidʒɛnʲːɐx] (my oh-KHOH-cheh VZYAHL-y b OO-chahst' oo SPEEL'-nykh yehv-roh-PEY-s'kykh ah-kah-deh-MEECH-nykh dohs-LEED-zhen-nyahkh)",
          "translation": "We would gladly take part in joint European academic research."
        }
      ],
      "mnemonics": [
        "Після голосного — коротке «б» (вона б, пішли б); після приголосного — повне «би» (він би, сказав би)!"
      ],
      "culturalNotes": [
        "Суворе дотримання законів евфонії щодо часток б/би є обов'язковою рисою української літературної та сценічної мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну евфонічну форму частки для речення «Вона обов'язково прийшла ... на зустріч»:",
          "options": [
            "Б (Particle б is used after vowel ending in прийшла)",
            "Би",
            "Бис",
            "Бись"
          ],
          "answerIndex": 0,
          "explanation": "Слово «прийшла» закінчується на голосний звук [а], тому за правилами евфонії вживається частка «б»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка частка умовного способу має стояти після дієслова «допоміг» (він допоміг ...)?",
          "options": [
            "Би (Particle би is used after consonant ending in допоміг)",
            "Б",
            "Бо",
            "Бить"
          ],
          "answerIndex": 0,
          "explanation": "Дієслово «допоміг» закінчується на приголосний [г], тому використовується частка «би»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому частки умовного способу вжито з бездоганним дотриманням законів милозвучності:",
          "options": [
            "Ми з радістю поїхали б до Львова, якби ви нас запросили.",
            "Ми з радістю поїхали би до Львова, якби ви нас запросили.",
            "Він би прийшла б вчасно на лекцію.",
            "Я сказав б вам усю правду."
          ],
          "answerIndex": 0,
          "explanation": "Після голосного в слові «поїхали» стоїть частка «б», що є абсолютно правильним."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u17-l2": {
    "id": "uk-u17-l2",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 2,
    "title": "Реальна та нереальна умова: синтаксис «якби / коли б» (Hypothetical Conditionals)",
    "level": "B2",
    "objective": "Опанувати розрізнення реальної умови з дійсним способом (якщо + теперішній/майбутній час) та нереальної гіпотетичної умови з умовним способом (якби / коли б + минулий час).",
    "presentation": {
      "explanation": "В українському синтаксисі складнопідрядні речення умови поділяються на два принципові типи:\n\n1. Реальна (можлива) умова (Real Condition):\nВиражає дію, здійснення якої цілком імовірне за певних обставин у теперішньому або майбутньому. В обох частинах вживається дійсний спосіб зі сполучником «якщо / коли»:\n   - «Якщо завтра буде гарна погода, ми вирушимо в гори» (If the weather is good tomorrow, we will set out into the mountains).\n   - «Якщо ви уважно слухатимете лекцію, ви зрозумієте весь матеріал».\n\n2. Нереальна (гіпотетична або контрфактична) умова (Unreal / Counterfactual Condition):\nВиражає бажану, припущену, але нездійснену або неможливу дію. В обох частинах речення вживається виключно УМОВНИЙ спосіб зі сполучниками «якби / коли б / аби»:\n   - «Якби в мене був вільний час, я б неодмінно прочитав цю книгу» (If I had free time, I would certainly read this book).\n   - «Коли б ми знали про це раніше, ми ухвалили б зовсім інше рішення».\n\n3. Орфографічне застереження:\nСполучник умови «якби» пишеться РАЗОМ (якби = коли б). Займенник із часткою «як би» пишеться ОКРЕМО: «Як би важко не було, ми переможемо» (No matter how hard it might be).",
      "examples": [
        {
          "target": "Якби ми мали додаткове фінансування, ми вже цього року відкрили б сучасний науковий центр.",
          "reading": "[jɐkˈbɪ mɪ ˈmɑlɪ dɔdɐtˈkɔwɛ fʲinɐnsuˈwɑnʲːɑ, mɪ wʒɛ ˈt͡sʲɔɦɔ ˈrɔku wʲidˈkrɪlɪ b sut͡ʃɐsˈnɪj nɐuˈkɔwɪj t͡sɛntr] (yahk-BY my MAH-ly doh-daht-KOH-weh fee-nahn-soo-VAHN-nyah, my vzheh TS'OH-hoh ROH-koo veed-KRY-ly b soo-chahs-NYY nah-oo-KOH-vyy tsehntr)",
          "translation": "If we had additional funding, we would open a modern scientific center this very year."
        },
        {
          "target": "Коли б ти знав, як щиро цінують твою безкорисливу допомогу колеги!",
          "reading": "[kɔˈlɪ b tɪ znɑw, jɐk ˈʃtʃɪrɔ t͡sʲiˈnujutʲ twɔˈju bɛzkɔˈrɪslɪwu dɔpɔˈmɔɦu kɔˈlɛɦɪ] (koh-LY b ty znahv, yahk SHCHY-roh tsee-NOO-yoot' tvoh-YOO bez-koh-RYS-ly-voo doh-poh-MOH-hoo koh-LEH-hy)",
          "translation": "If only you knew how sincerely your colleagues value your selfless help!"
        },
        {
          "target": "Якщо завтра прибуде міжнародна делегація, ректор особисто проведе екскурсію.",
          "reading": "[jɐkˈʃtʃɔ ˈzɑwtrɐ prɪˈbudɛ mʲiʒnɐˈrɔdnɐ dɛlɛˈɦɑt͡sʲijɑ, ˈrɛktɔr ɔsɔˈbɪstɔ prɔwɛˈdɛ ɛksˈkursʲiju] (yahk-SHCHOH ZAHV-trah pry-BOO-deh meezh-nah-ROHD-nah deh-leh-HAH-tsee-yah, REHK-tohr oh-soh-BYS-toh proh-veh-DEH eks-KOOR-see-yoo)",
          "translation": "If the international delegation arrives tomorrow, the rector will personally lead the excursion."
        }
      ],
      "mnemonics": [
        "«Якщо» — це реальний план на завтра; «якби» — це мрія з дієсловом минулого часу та часткою «б»!"
      ],
      "culturalNotes": [
        "Поетичний зворот «Коли б я знав...» часто слугує заспівом в українських ліричних піснях та романсах на слова класичних поетів."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть сполучник для побудови нереального гіпотетичного підрядного речення умови: «... я мав крила, я б облетів усю землю»:",
          "options": [
            "Якби (Subjunctive unreal conditional conjunction written as one word)",
            "Якщо",
            "Ніби",
            "Мов"
          ],
          "answerIndex": 0,
          "explanation": "Для вираження нереальної умови з дієсловом в умовному способі («я б облетів») вживається сполучник «якби»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як пишеться слово «якби» у значенні сполучника умови (якби ми знали)?",
          "options": [
            "Разом (якби = коли б)",
            "Окремо (як би)",
            "Через дефіс (як-би)",
            "З апострофом (як'би)"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник умови «якби» пишеться разом."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому правильно поєднано часові та способовi форми нереальної умови:",
          "options": [
            "Якби ми вчасно підготувалися, ми обов'язково перемогли б у турнірі.",
            "Якби ми вчасно підготуємося, ми переможемо в турнірі.",
            "Якщо ми підготувалися б, ми перемогли б.",
            "Якби ми підготувалися, ми перемагаємо в турнірі."
          ],
          "answerIndex": 0,
          "explanation": "В обох частинах речення нереальної умови має бути умовний спосіб: «якби підготувалися, перемогли б»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u17-l3": {
    "id": "uk-u17-l3",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 3,
    "title": "Цільові та з'ясувальні підрядні зі сполучником «щоб / аби» (Subjunctive in Purpose & Complements)",
    "level": "B2",
    "objective": "Опанувати вживання умовного способу в підрядних мети зі сполучниками щоб/аби та в з'ясувальних реченнях після дієслів волевиявлення (хотіти, прагнути, вимагати, радити).",
    "presentation": {
      "explanation": "Умовний спосіб широко застосовується в підрядних частинах складнопідрядних речень мети та з'ясування:\n\n1. Підрядні речення мети (Purpose Clauses):\nВідповідають на питання «з якою метою? для чого?» і приєднуються сполучниками «щоб / аби / для того щоб» + дієслово минулого часу:\n   - «Ми наполегливо вчимося, щоб стати висококласними фахівцями» (один суб'єкт -> інфінітив);\n   - «Викладач пояснив правило ще раз, щоб усі студенти зрозуміли складну тему» (різні суб'єкти -> минулий час).\n\n2. З'ясувальні речення після дієслів волевиявлення та бажання (Complements of Desiderative/Imperative Verbs):\nПісля дієслів «хотіти, бажати, прагнути, вимагати, просити, наполягати, радити, наказувати» підрядна частина приєднується сполучником «щоб» із дієсловом минулого часу:\n   - «Я щиро хочу, щоб ми перемогли» (I sincerely want us to win);\n   - «Керівник наполягає, щоб звіт подали сьогодні» (The supervisor insists that the report be submitted today);\n   - «Лікар порадив, щоб пацієнт більше відпочивав».\n\n3. Орфографія: «щоб» (сполучник мети) пишеться РАЗОМ. Займенник із часткою «що б» пишеться ОКРЕМО: «Що б ви не запитали, я відповім чесно».",
      "examples": [
        {
          "target": "Науковці об'єднали свої зусилля, щоб якнайшвидше завершити важливий експеримент.",
          "reading": "[nɐuˈkɔwt͡sʲi ɔbʲjɛdˈnɑlɪ swɔˈji zuˈsɪlʲːɑ, ʃtʃɔb jɐknɐjˈʃwɪdʃɛ zɐwɛrˈʃɪtɪ wɑʒˈlɪwɪj ɛkspɛrɪˈmɛnt] (nah-oo-KOV-tsee ohb-yehd-NAH-ly swoh-YEE zoo-SYL-lyah, shchohb yahk-nahy-SHVYD-sheh zah-vehr-SHY-ty vahzh-LY-vyy eks-peh-ry-MENT)",
          "translation": "Scientists united their efforts in order to finish the important experiment as quickly as possible."
        },
        {
          "target": "Ми дуже хочемо, щоб кожен українець почувався безпечно й захищено у своїй державі.",
          "reading": "[mɪ ˈduʒɛ ˈxɔtʃɛmɔ, ʃtʃɔb ˈkɔʒɛn ukrɐˈjinɛt͡sʲ pɔtʃuˈwɑwsʲɑ bɛzˈpɛtʃnɔ j zɐˈxɪʃtʃɛnɔ u swɔˈjij dɛrˈʒɑwʲi] (my DOO-zheh KHOH-cheh-moh, shchohb KOH-zhen oo-krah-YEE-nehts' poh-choo-VAHV-syah bez-PECH-noh y zah-KHYSHTS-ehy-noh oo swoh-YEEY dehr-ZHAH-vee)",
          "translation": "We strongly wish that every Ukrainian would feel safe and protected in their own state."
        },
        {
          "target": "Керівник наукової групи вимагає, щоб усі учасники суворо дотримувалися техніки безпеки.",
          "reading": "[kɛrʲiwˈnɪk nɐuˈkɔwɔji ˈhrupɪ wɪmɐˈɦɑjɛ, ʃtʃɔb uˈsʲi uˈtʃɑsnɪkɪ suˈwɔrɔ dɔtrɪˈmuwɐlɪsʲɑ ˈtɛxnʲikɪ bɛzˈpɛkɪ] (keh-reev-NYK nah-oo-KOH-woh-yee HROO-py vy-mah-HAH-yeh, shchohb oo-SEE oo-CHAHS-ny-ky soo-VOH-roh doh-try-MOO-vah-lys'-yah TEHKH-ny-ky bez-PEH-ky)",
          "translation": "The leader of the research group demands that all participants strictly adhere to safety procedures."
        }
      ],
      "mnemonics": [
        "Мета або бажання — завжди «щоб» разом і дієслово минулого часу: «хочу, щоб ви знали»!"
      ],
      "culturalNotes": [
        "Стилістичний варіант «аби» замість «щоб» додає мовленню вишуканого колориту української інтелектуальної прози."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний сполучник мети в реченні «Ми приїхали до Києва, ... відвідати Софійський собор»:",
          "options": [
            "Щоб (Purpose conjunction written as one word)",
            "Що б",
            "Як би",
            "Ніби"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник мети «щоб» пишеться разом: «щоб відвідати»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку форму має дієслово в підрядній частині після фрази волевиявлення «Я вимагаю, щоб ти ...»?",
          "options": [
            "Форму минулого часу (щоб ти прийшов / щоб ти зробив)",
            "Форму майбутнього часу",
            "Форму наказового способу",
            "Дієприслівник"
          ],
          "answerIndex": 0,
          "explanation": "У з'ясувальних реченнях після сполучника «щоб» дієслово стоїть у формі минулого часу: «щоб ти прийшов»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допущено орфографічну помилку в написанні сполучника «щоб»:",
          "options": [
            "Ми зібралися разом, що б обговорити результати нашої наукової роботи.",
            "Ми зібралися разом, щоб обговорити результати нашої наукової роботи.",
            "Що б ви порадили почитати з сучасної української літератури?",
            "Я прагну, щоб в Україні запанував міцний і справедливий мир."
          ],
          "answerIndex": 0,
          "explanation": "У першому варіанті «що б» є сполучником мети («для того щоб»), тому має писатися разом: «щоб»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u17-l4": {
    "id": "uk-u17-l4",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 4,
    "title": "Модальні значення умовного способу: ввічливість, порада, побажання (Polite Subjunctive)",
    "level": "B2",
    "objective": "Опанувати використання умовного способу для пом'якшення мовленнєвих актів: формулювання ввічливих прохань (чи не могли б ви), ненав'язливих порад (я радив би), побажань та оцінних суджень.",
    "presentation": {
      "explanation": "У прагматиці українського мовлення умовний спосіб є ключовим інструментом мовного етикету та ввічливості:\n\n1. Ввічливе прохання та звернення (Polite Request):\nЗамість прямого наказу використовується питальна конструкція з умовним способом:\n   - «Чи не могли б ви повторити останню тезу?» (Could you please repeat the last point?);\n   - «Я просив би вас звернути увагу на цей пункт»;\n   - «Чи не допомогли б ви мені розібратися з цим питанням?».\n\n2. Ненав'язлива порада та пропозиція (Gentle Advice & Suggestion):\nПом'якшує категоричність висловлювання експерта або співрозмовника:\n   - «Я радив би вам переглянути розрахунки ще раз»;\n   - «Варто було б уточнити ці статистичні дані»;\n   - «Ми могли б зустрітися завтра о десятій годині».\n\n3. Побажання та емоційне припущення (Desiderative & Hypothetical Wish):\n   - «Хотілося б вірити, що все складеться якнайкраще»;\n   - «О, якби ж то скоріше закінчилася ця війна!»;\n   - «Краще було б усе спланувати заздалегідь».",
      "examples": [
        {
          "target": "Чи не могли б ви надіслати фінальний текст презентації до кінця робочого дня?",
          "reading": "[tʃɪ nɛ mɔɦˈlɪ b wɪ nɐdʲisˈlɑtɪ fʲinɐlʲnɪj tɛkst prɛzɛnˈtɑt͡sʲiji dɔ kʲinʲˈt͡sʲɑ rɔˈbɔtʃɔɦɔ dnʲɑ] (chy neh moh-LY b vy nah-dees-LAH-ty fee-NAHL'-nyy tekst preh-zen-TAH-tsee-yee doh keen-TSYAH roh-BOH-choh-hoh dnyah)",
          "translation": "Could you please send the final text of the presentation by the end of the workday?"
        },
        {
          "target": "Я щиро радив би вам проконсультуватися з провідними юридичними експертами.",
          "reading": "[jɑ ˈʃtʃɪrɔ ˈrɑdɪw bɪ wɑm prɔkɔnsulʲtuˈwɑtɪsʲɑ z prɔwʲidˈnɪmɪ jurɪˈdɪtʃnɪmɪ ɛksˈpɛrtɐmɪ] (yah SHCHY-roh RAH-dyv by vahm proh-kohn-sool'-too-VAH-tys'-yah z proh-veed-NY-my yoo-ry-DYCH-ny-my eks-PEHR-tah-my)",
          "translation": "I would sincerely advise you to consult with leading legal experts."
        },
        {
          "target": "Хотілося б щиро подякувати всім колегам за плідну та злагоджену командну працю.",
          "reading": "[xɔˈtʲilɔsʲɑ b ˈʃtʃɪrɔ pɔˈdʲɑkuwɐtɪ wsʲim kɔˈlɛɦɐm zɑ ˈplʲidnu tɑ zlɑˈɦɔdʒɛnu kɔˈmɑndnu ˈprɑt͡sʲu] (khoh-TEE-lohs'-yah b SHCHY-roh poh-DYAH-koo-vah-ty vseem koh-LEH-hahm zah PLEED-noo tah zlah-HOH-dzheh-noo koh-MAHND-noo PRAH-tsyoo)",
          "translation": "I would like to sincerely thank all colleagues for their fruitful and harmonious teamwork."
        }
      ],
      "mnemonics": [
        "Хочеш бути ввічливим — додай частку «б/би»: «чи не могли б ви», «я радив би», «хотілося б»!"
      ],
      "culturalNotes": [
        "Формули ввічливості з часткою «б/би» є стандартом українського дипломатичного та академічного етикету."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть найбільш етикетну та ввічливу форму прохання до колеги:",
          "options": [
            "Чи не могли б ви допомогти мені з цим звітом? (Polite request with subjunctive particle б)",
            "Допоможіть мені негайно зі звітом!",
            "Ти повинен допомогти мені зі звітом.",
            "Зроби мені звіт зараз же."
          ],
          "answerIndex": 0,
          "explanation": "Конструкція «Чи не могли б ви...» є еталоном ввічливого ділового прохання."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке модальне значення має вислів «Я радив би вам звернути увагу на деталі»?",
          "options": [
            "Пом'якшена ненав'язлива порада (Gentle polite advice)",
            "Суворий військовий наказ",
            "Реальний факт минулого часу",
            "Фізична дія переміщення"
          ],
          "answerIndex": 0,
          "explanation": "Умовний спосіб у виразі «я радив би» виражає тактовну ненав'язливу пораду."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому модальну форму ввічливої вдячності виражено бездоганно:",
          "options": [
            "Хотілося б щиро подякувати всім організаторам за чудово проведену конференцію.",
            "Хотілося би щиро подякувати всім.",
            "Хотілось б подякувати всім.",
            "Я хотів би подякувати вам негайно."
          ],
          "answerIndex": 0,
          "explanation": "Після голосного [а] в слові «хотілося» за правилами евфонії стоїть частка «б»: «хотілося б подякувати»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u17-l5": {
    "id": "uk-u17-l5",
    "subject": "ukrainian",
    "unit": 17,
    "lessonNumber": 5,
    "title": "Правопис сполучників «якби», «щоб», «аби» vs «як би», «що б» (Orthography & Nuances)",
    "level": "B2",
    "objective": "Опанувати чітке розрізнення та правопис складних сполучників (якби, щоб, аби, немовби, начебто) та однозвучних займенників/прислівників із частками (як би, що б, а би).",
    "presentation": {
      "explanation": "Розрізнення написання сполучників разом та співзвучних самостійних слів із частками окремо є одним із найважливіших орфографічних правил української мови:\n\n1. «Якби» (разом) vs «Як би» (окремо):\n   - «Якби» — сполучник умови, який можна замінити на «коли б / якщо б»:\n     * «Якби я знав, я б сказав» (= Коли б я знав).\n   - «Як би» — прислівник «як» + частка «би», де частку можна переставити або вилучити, а до слова «як» поставити питання:\n     * «Як би краще виконати цю роботу?» (частку можна вилучити: «Як краще виконати?»);\n     * «Як би важко не було, ми не здамося».\n\n2. «Щоб» (разом) vs «Що б» (окремо):\n   - «Щоб» — сполучник мети, який можна замінити на «аби / для того щоб»:\n     * «Ми прийшли, щоб допомогти» (= аби допомогти).\n   - «Що б» — займенник «що» (виступає членом речення) + частка «б»:\n     * «Що б ви нам порадили?» («що» є додатком, частку можна переставити: «Що ви б нам порадили?»);\n     * «Що б не трапилося, зберігайте спокій».\n\n3. Сполучники «аби», «немовби», «начебто»:\n   - Завжди пишуться РАЗОМ: аби тільки, немовби спочиває, начебто почув.",
      "examples": [
        {
          "target": "Якби ми не розпочали реформи вчасно, ми б не досягли таких вагомих результатів.",
          "reading": "[jɐkˈbɪ mɪ nɛ rɔzpɔˈtʃɑlɪ rɛˈfɔrmɪ ˈwtʃɑsnɔ, mɪ b nɛ dɔsʲˈtʲɑɦlɪ ˈtɑkʲix wɐˈɦɔmɪx rɛzulʲˈtɑtʲiw] (yahk-BY my neh roz-poh-CHAH-ly reh-FOHR-my VCHAH-snoh, my b neh dohs-TYAHH-ly TAH-keekh vah-HOH-mykh reh-zool'-TAH-teew)",
          "translation": "If we had not started the reforms on time, we would not have achieved such significant results."
        },
        {
          "target": "Що б не трапилося в майбутньому, ми збережемо нашу національну єдність і гідність.",
          "reading": "[ʃtʃɔ b nɛ trɐˈpɪlɔsʲɑ w mɐjˈbutnʲɔmu, mɪ zbɛrɛˈʒɛmɔ ˈnɑʃu nɐt͡sʲiɔˈnɑlʲnu ˈjɛdnʲisʲtʲ i ˈɦʲidnʲisʲtʲ] (shchoh b neh trah-PY-lohs'-yah v mahy-BOOT-nyoh-moo, my zbeh-reh-ZHEH-moh NAH-shoo nah-tsee-oh-NAHL'-noo YED-neest' ee HEED-neest')",
          "translation": "Whatever happens in the future, we will preserve our national unity and dignity."
        },
        {
          "target": "Треба працювати злагоджено, аби наша спільна справа увінчалася цілковитим успіхом.",
          "reading": "[ˈtrɛbɐ prɐt͡sʲuˈwɑtɪ ˈzlɑɦɔdʒɛnɔ, ˈɑbɪ ˈnɑʃɐ ˈspʲilʲnɐ ˈsprɑwɐ uwʲinˈtʃɑlɐsʲɑ t͡sʲilkɔˈwɪtɪm ˈusʲpʲixɔm] (TREH-bah praht-syoo-VAH-ty ZLAH-hoh-dzheh-noh, AH-by NAH-shah SPEEL'-nah SPRAH-wah oo-veen-CHAH-lahs'-yah tsee-lkoh-VY-tym OOS-pee-khohm)",
          "translation": "We need to work harmoniously so that our common cause is crowned with total success."
        }
      ],
      "mnemonics": [
        "Можна вилучити частку без втрати змісту («Що ви порадили б?») — пиши ОКРЕМО «що б»! Замінюється на «аби/коли б» — пиши РАЗОМ «щоб/якби»!"
      ],
      "culturalNotes": [
        "Правильний правопис «якби / як би» та «щоб / що б» є обов'язковим критерієм оцінювання на Національному мультипредметному тесті (НМТ) з української мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний варіант написання у реченні «... не було важко, ми обов'язково подолаємо всі перешкоди»:",
          "options": [
            "Як би (Pronoun/adverb + particle: no matter how hard it might be)",
            "Якби",
            "Як-би",
            "Якиби"
          ],
          "answerIndex": 0,
          "explanation": "У значенні «якою б мірою не було важко» пишеться окремо: «Як би не було важко» (частку «би» можна переставити: «Як не було б важко»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "У якому реченні виділене слово «щоб / що б» пишеться ОКРЕМО?",
          "options": [
            "Що б ви хотіли змінити в цьому проєкті? (Pronoun що + particle б)",
            "Ми вчимося, щоб знати більше.",
            "Треба поспішати, щоб не запізнитися.",
            "Він зробив усе, щоб допомогти другові."
          ],
          "answerIndex": 0,
          "explanation": "У питанні «Що б ви хотіли змінити?» слово «що» є займенником (додатком), тому пишеться окремо з часткою «б»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ сполучники та частки написано орфографічно правильно:",
          "options": [
            "Якби ми знали про труднощі заздалегідь, ми б усе одно діяли так, щоб перемогти.",
            "Як би ми знали про труднощі заздалегідь, ми б усе одно діяли так, що б перемогти.",
            "Якби ми знали, ми б діяли так, що б перемогти.",
            "Як би ми знали, ми би діяли так, щоб перемогти."
          ],
          "answerIndex": 0,
          "explanation": "Сполучник умови «Якби» та сполучник мети «щоб» у цьому контексті пишуться разом."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u18-l1": {
    "id": "uk-u18-l1",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 1,
    "title": "Прості синтетичні форми наказового способу: 2-га особа (-и/-іть vs ∅/-те)",
    "level": "B2",
    "objective": "Опанувати творення простих синтетичних форм наказового способу 2-ї особи однини й множини (-и / -іть, нульове закінчення ∅ / -те, -й / -йте) та правила чергування звуків у корені.",
    "presentation": {
      "explanation": "Наказовий спосіб (Imperative Mood) виражає спонукання до дії, прохання, наказ, пораду, заборону чи дозвіл:\n\n1. 2-га особа однини (наказ одній особі на «ти»):\n   - Закінчення «-И» мають дієслова:\n     * з наголосом на закінченні: пиши́, неси́, роби́, кажі́, іди́, печи́;\n     * з основою на збіг двох і більше приголосних: підкре́сли, розка́жи, переві́р (переві́ри).\n   - Чисту основу (нульове закінчення «-∅» зі знаком м'якшення або без нього) мають дієслова з ненаголошеним закінченням:\n     * на м'який приголосний: сядь, стань, глянь, кинь, вір, мір, готуй (готу́й-те);\n     * на губний або шиплячий (без знака м'якшення): ріж, сип, економ, насип.\n\n2. 2-га особа множини (наказ групі осіб або ввічливе на «ви»):\n   - До форми на «-и» додається закінчення «-ІТЬ»: пишіть, несіть, робіть, кажіть, ідіть, допоможіть.\n   - До форми на чисту основу додається закінчення «-ТЕ»: сядьте, станьте, гляньте, читайте, працюйте, економте.\n\n3. Чергування звуків у корені дієслів:\n   - Чергування голосних [о], [е] з [і]: ходити -> ходи́ / ході́ть, робити -> роби́ / робі́ть, допомогти -> допоможи́ / допоможі́ть.\n   - Чергування приголосних: пекти -> печи́ / печі́ть, берегти -> бережи́ / бережі́ть.",
      "examples": [
        {
          "target": "Шановні студенти, уважно прочитайте інструкцію та запишіть результати досліду.",
          "reading": "[ʃɐˈnɔwnʲi stuˈdɛntɪ, uˈwɑʒnɔ prɔtʃɪˈtɑjtɛ instˈrukt͡sʲiju tɑ zɐpɪˈʃitʲ rɛzulʲˈtɑtɪ ˈdɔsʲlʲidu] (shah-NOHV-nee stoo-DEN-ty, oo-VAHZH-noh proh-chy-TAHY-teh eens-TROOK-tsee-yoo tah zah-py-SHEET' reh-zool'-TAH-ty DOHS-ly-doo)",
          "translation": "Dear students, read the instruction carefully and write down the results of the experiment."
        },
        {
          "target": "Сядьте зручніше та уважно послухайте повідомлення головного архітектора.",
          "reading": "[ˈsʲɑdʲtɛ zrutʃˈnʲiʃɛ tɑ uˈwɑʒnɔ pɔsˈluxɐjtɛ pɔwʲiˈdɔmlɛnʲːɑ ɦɔlɔwˈnɔɦɔ ɐrxʲiˈtɛktɔrɐ] (SYAHD'-teh zrooch-NEE-sheh tah oo-VAHZH-noh pohs-LOO-khahy-teh poh-vee-DOHM-len-nyah hoh-lohv-NOH-hoh ahr-khee-TEHK-toh-rah)",
          "translation": "Sit comfortably and listen attentively to the report of the chief architect."
        },
        {
          "target": "Бережіть рідну мову, збагачуйте свій словниковий запас і щодня говоріть українською!",
          "reading": "[bɛrɛˈʒitʲ ˈrʲidnu ˈmɔwu, zbɐˈɦɑtʃujtɛ swʲij slɔwnɪkɔˈwɪj zɑˈpɑs i ʃtʃɔdʲˈnʲɑ ɦɔwɔˈrʲitʲ ukrɐˈjinʲsʲkɔju] (beh-reh-ZHEET' REED-noo MOH-voo, zbah-HAH-chooy-teh sveey slohv-ny-koh-VYY zah-PAHS ee shchohd-NYAH hoh-voh-REET' oo-krah-YEEN-s'koh-yoo)",
          "translation": "Cherish your native language, enrich your vocabulary, and speak Ukrainian every day!"
        }
      ],
      "mnemonics": [
        "Наголос на кінці — «пиши́ / пиші́ть»; наголос на основі — «чи́тай / чита́йте»!"
      ],
      "culturalNotes": [
        "Звертання на «ви» з формою 2-ї особи множини (на «-іть / -те») є наріжним каменем української ввічливої культури спілкування."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму 2-ї особи множини наказового способу від дієслова «написати»:",
          "options": [
            "Напишіть (Correct imperative suffix -іть with stem alternation)",
            "Напишете",
            "Напишіте",
            "Написайте"
          ],
          "answerIndex": 0,
          "explanation": "Форма 2-ї особи множини наказового способу — «напишіть» (форма «напишете» є дійсним способом майбутнього часу)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка форма наказового способу дієслова «сісти» (2-га особа однини) є правильною?",
          "options": [
            "Сядь (Bare soft root with soft sign ь in imperative)",
            "Сяди",
            "Сідайся",
            "Сідь"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна форма 2-ї особи однини — «сядь» (множина — «сядьте»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ дієслова стоять у формі наказового способу:",
          "options": [
            "Бережіть, працюйте, допоможи, збагачуй.",
            "Бережете, працюєте, допоміг, збагачує.",
            "Берегти, працювати, допомога, збагачення.",
            "Бережіте, працювайти, поможіть, давай пиши."
          ],
          "answerIndex": 0,
          "explanation": "Всі дієслова першого рядка мають нормативні закінчення наказового способу: «-іть», «-те», «-и», «-й»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u18-l2": {
    "id": "uk-u18-l2",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 2,
    "title": "Інклюзивний наказ: 1-ша особа множини (-мо/-імо) та заборона «давайте»",
    "level": "B2",
    "objective": "Опанувати творення форми спільної дії 1-ї особи множини наказового способу (-мо / -імо: ходімо, робімо, працюймо) та категорично викорінити суржикове калькування з «давайте...».",
    "presentation": {
      "explanation": "В українській мові заклик до спільної дії (разом зі співрозмовником — Inclusive Imperative) виражається спеціальними синтетичними формами 1-ї особи множини:\n\n1. Творення форм 1-ї особи множини:\n   - Закінчення «-ІМО» (під наголосом): ході́мо, пиші́мо, робі́мо, бері́мо, несі́мо, кажі́мо, станьмо (стані́мо).\n   - Закінчення «-МО» (після голосних та чистих основ): працю́ймо, чита́ймо, зва́жмо, бу́дьмо, слу́хаймо, захища́ймо.\n\n2. КАТЕГОРИЧНА СТИЛІСТИЧНА ЗАБОРОНА (Суржикове «давайте...»):\nКонструкції на кшталт «давайте підемо», «давайте робити», «давайте поговоримо» є грубим калькуванням з російської мови та паразитизмом!\n   - Неправильно (калька): *Давайте почнемо збори*, *Давайте заспіваємо*, *Давайте будемо друзями*.\n   - Правильно (автентична українська норма):\n     * «Розпочнімо збори!» / «Почнімо збори!»\n     * «Заспіваймо пісню!»\n     * «Будьмо друзями!»\n     * «Ходімо на прогулянку!»\n     * «Поговорімо про важливі справи!»\n\n3. Значення та урочистість:\nФорма на «-імо / -мо» звучить енергійно, гідно та піднесено (традиційний заклик: «Будьмо!», «Борімося — поборемо!»).",
      "examples": [
        {
          "target": "Колеги, об'єднаймо наші зусилля та якнайшвидше завершімо цей масштабний проєкт!",
          "reading": "[kɔˈlɛɦɪ, ɔbʲjɛdˈnɑjmɔ ˈnɑʃʲi zuˈsɪlʲːɑ tɑ jɐknɐjˈʃwɪdʃɛ zɐwɛrˈʃimɔ t͡sɛj mɐʃˈtɑbnɪj prɔˈjɛkt] (koh-LEH-hy, ohb-yed-NAHY-moh NAH-shee zoo-SYL-lyah tah yahk-nahy-SHVYD-sheh zah-vehr-SHEE-moh tsey mahsh-TAHB-nyy proh-YEHKT)",
          "translation": "Colleagues, let us unite our efforts and finish this large-scale project as quickly as possible!"
        },
        {
          "target": "Ходімо разом на головну площу міста підтримати нашу талановиту молодь.",
          "reading": "[xɔˈdʲimɔ ˈrɑzɔm nɑ ɦɔlɔwˈnu ˈplɔʃtʃu ˈmʲistɐ pʲidˈtrɪmɐtɪ ˈnɑʃu tɐlɐnɔˈwɪtu ˈmɔlɔdʲ] (khoh-DEE-moh RAH-zohm nah hoh-lohv-NOO PLOHSH-choo MEES-tah peed-TRY-mah-ty NAH-shoo tah-lah-noh-VY-too MOH-lohd')",
          "translation": "Let us go together to the main square of the city to support our talented youth."
        },
        {
          "target": "Шануймо нашу славетну історію, бережімо культуру та пишаймося рідною землею!",
          "reading": "[ʃɐˈnujmɔ ˈnɑʃu slɐˈwɛtnu isˈtɔrʲiju, bɛrɛˈʒimɔ kulʲˈturu tɑ pɪˈʃɑjmɔsʲɑ ˈrʲidnɔju zɛmˈlɛju] (shah-NOOY-moh NAH-shoo slah-VET-noo ees-TOH-ry-yoo, beh-reh-ZHEE-moh kool'-TOO-roo tah py-SHAHY-mohs'-yah REED-noh-yoo zem-LEH-yoo)",
          "translation": "Let us respect our illustrious history, cherish our culture, and be proud of our native land!"
        }
      ],
      "mnemonics": [
        "Забудь суржикове «давайте зробимо» — кажи по-українськи гордо: «Зробімо!», «Ходімо!», «Будьмо!»"
      ],
      "culturalNotes": [
        "Шевченкове геніальне гасло «Борітеся — поборете!» та заклик «Борімося!» є символами української національної незламності."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно висловити заклик до початку роботи без калькованого «давайте»?",
          "options": [
            "Почнімо працювати! / Розпочинаймо! (Correct 1st person plural imperative with -імо/-мо)",
            "Давайте почнемо працювати",
            "Давайте будемо працювати",
            "Давай починати"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною формою спільної дії є синтетична форма «Почнімо!» або «Розпочинаймо!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну форму 1-ї особи множини наказового способу від дієслова «піти / іти»:",
          "options": [
            "Ходімо! / Ідімо! (Inclusive imperative ending in -імо)",
            "Давайте підемо!",
            "Давайте йти!",
            "Ідемоте!"
          ],
          "answerIndex": 0,
          "explanation": "В українській літературній мові заклик до руху виражається словом «Ходімо!» або «Ідімо!»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому заклик до спільної дії сформульовано з бездоганним дотриманням культури українського мовлення:",
          "options": [
            "Поговорімо відверто про всі труднощі та спільно знайдімо найкраще рішення.",
            "Давайте поговоримо відверто про всі труднощі та знайдемо рішення.",
            "Давайте будемо говорити відверто про проблеми.",
            "Давай поговорити відверто про всі справи."
          ],
          "answerIndex": 0,
          "explanation": "«Поговорімо» та «знайдімо» — це чисті синтетичні форми наказового способу без чужорідного «давайте»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u18-l3": {
    "id": "uk-u18-l3",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 3,
    "title": "Описові форми 3-ї особи з частками «хай / нехай» (3rd Person Imperatives)",
    "level": "B2",
    "objective": "Опанувати творення та стилістику аналітичних форм наказового способу 3-ї особи однини і множини за допомогою часток хай/нехай + форми теперішнього або майбутнього часу.",
    "presentation": {
      "explanation": "Для вираження спонукання, наказу, дозволу, побажання або благословення, спрямованого на третю особу чи групу осіб (він, вона, воно, вони), вживаються описові аналітичні конструкції:\n\n1. Граматична модель:\n   - «Частка ХАЙ або НЕХАЙ + Дієслово 3-ї особи теперішнього або простого майбутнього часу»:\n     * Хай живе Україна! (Long live Ukraine!)\n     * Нехай вони розкажуть про свої досягнення.\n     * Хай щастить тобі на життєвому шляху!\n     * Нехай кожен студент напише відгук.\n\n2. Стилістична диференціація часток «хай» та «нехай»:\n   - «Нехай» — більш урочиста, офіційна, монументальна частка, властива публіцистичному, офіційно-діловому та поетичному стилям («Нехай буде проклята війна!», «Нехай комісія ухвалить рішення»).\n   - «Хай» — динамічніша, більш емоційна, лаконічна, широко вживана в розмовній мові та ліриці («Хай сонечко світить», «Хай щастить!»).\n\n3. Орфографія:\nЧастки «хай» і «нехай» пишуться з дієсловами ЗАВЖДИ ОКРЕМО.",
      "examples": [
        {
          "target": "Хай живе, міцніє та вічно процвітає наша вільна й незалежна Україна!",
          "reading": "[xɑj ʒɪˈwɛ, mʲit͡sʲˈnʲijɛ tɑ ˈwʲitʃnɔ prɔt͡swʲiˈtɑjɛ ˈnɑʃɐ ˈwʲilʲnɐ j nɛzɐˈlɛʒnɐ ukrɐˈjinɐ] (khahy zhy-VEH, meets-NEE-yeh tah VEETCH-noh proh-tsvee-TAH-yeh NAH-shah VEEL'-nah y neh-zah-LEHZH-nah oo-krah-YEE-nah)",
          "translation": "May our free and independent Ukraine live, grow stronger, and flourish forever!"
        },
        {
          "target": "Нехай юні науковці самостійно оберуть тему для свого дипломного дослідження.",
          "reading": "[nɛˈxɑj ˈjunʲi nɐuˈkɔwt͡sʲi sɐmɔsʲˈtʲijnɔ ɔbɛˈrutʲ ˈtɛmu dlʲɑ swɔˈjɔɦɔ dɪpˈlɔmnɔɦɔ dɔsʲˈlʲidʒɛnʲːɑ] (neh-KHAHY YOO-nee nah-oo-KOV-tsee sah-mohs-TEEY-noh oh-beh-ROOT' TEH-moo dlyah swoh-YOH-hoh dyp-LOHM-noh-hoh dohs-LEED-zhen-nyah)",
          "translation": "Let the young researchers choose the topic for their diploma thesis independently."
        },
        {
          "target": "Хай у вашому домі завжди панують мир, достаток, взаєморозуміння та щира любов!",
          "reading": "[xɑj u ˈwɑʃɔmu ˈdɔmʲi zɐwʒˈdɪ pɐˈnujutʲ mɪr, dɔsˈtɑtɔk, wzɐjɛmɔrɔzuˈmʲinʲːɑ tɑ ˈʃtʃɪrɐ lʲuˈbɔw] (khahy oo VAH-shoh-moo DOH-mee zahvz-HDY pah-NOO-yoot' myr, dohs-TAH-tohk, vzah-yeh-moh-roh-zoo-MEEN-nyah tah SHCHY-rah lyoo-BOHV)",
          "translation": "May peace, prosperity, mutual understanding, and sincere love always reign in your home!"
        }
      ],
      "mnemonics": [
        "Наказ або побажання для «він/вона/вони» — додай «хай / нехай» окремо: «Хай живе!», «Нехай скажуть!»"
      ],
      "culturalNotes": [
        "Традиційне українське побажання успіху «Хай щастить!» є одним із найпопулярніших доброзичливих виразів у щоденній комунікації."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як утворюється форма наказового способу для 3-ї особи однини від дієслова «працювати»?",
          "options": [
            "Хай працює / Нехай працює (Analytic imperative with particle хай/нехай)",
            "Працюй",
            "Працюйте",
            "Працюймо"
          ],
          "answerIndex": 0,
          "explanation": "Наказовий спосіб 3-ї особи утворюється аналітично за допомогою часток хай/нехай + дієслово: «хай працює»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як пишеться частка «нехай» із дієсловом (нехай прийде)?",
          "options": [
            "Окремо (нехай прийде)",
            "Разом (нехайприйде)",
            "Через дефіс (нехай-прийде)",
            "З апострофом (нехай'прийде)"
          ],
          "answerIndex": 0,
          "explanation": "Частки «хай» і «нехай» пишуться з дієсловами окремо."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з правильно утвореною та стилістично бездоганною формою 3-ї особи наказового способу:",
          "options": [
            "Нехай кожен громадянин сумлінно виконує свої професійні обов'язки.",
            "Давай кожен громадянин виконує обов'язки.",
            "Хай громадянин виконуй обов'язки.",
            "Нехай би громадянин виконав би обов'язки."
          ],
          "answerIndex": 0,
          "explanation": "Конструкція «Нехай + виконує» (3-тя особа) є абсолютно нормативною."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u18-l4": {
    "id": "uk-u18-l4",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 4,
    "title": "Заперечний наказ та аспектологічні нюанси (Negative Imperatives & Aspect)",
    "level": "B2",
    "objective": "Опанувати вираження заборони та застереження в наказовому способі за допомогою частки НЕ та диференціацію видів дієслова (недоконаний вид — заборона; доконаний вид — застереження від випадкової помилки).",
    "presentation": {
      "explanation": "Заперечний наказ в українській мові утворюється додаванням заперечної частки «НЕ» до дієслова в наказовому способі. При цьому вибір виду дієслова кардинально змінює зміст мовленнєвого акту:\n\n1. Заборона або прохання не здійснювати дію -> НЕДОКОНАНИЙ вид:\nВиражає категоричну заборону, прохання не робити чогось узагалі або припинити дію, що вже розпочалася:\n   - «Не відчиняйте вікно!» (категорична заборона);\n   - «Не хвилюйтеся, все буде гаразд» (прохання заспокоїтися);\n   - «Не запізнюйтеся на ранкові заняття»;\n   - «Не перебивайте співрозмовника».\n\n2. Застереження від випадкової шкоди чи небажаного наслідку -> ДОКОНАНИЙ вид:\nВиражає пересторогу, попередження про можливу небезпеку або випадкову неприємність:\n   - «Гляди не впади на слизькій дорозі!» (пересторога, warning);\n   - «Дивись не загуби важливі документи!»;\n   - «Не розбий коштовну вазу!»;\n   - «Не забудьте паспорт перед виходом».\n\n3. Ввічливе формулювання прохання:\nДля максимальної тактовності використовуються форми «Будь ласка, не...», «Просимо не...» («Просимо не користуватися телефонами під час вистави»).",
      "examples": [
        {
          "target": "Будь ласка, не турбуйтеся завчасно і спокійно дочекайтеся офіційних результатів.",
          "reading": "[budʲ ˈlɑskɐ, nɛ turbujˈtɛsʲɑ zɑwtʃɐsˈnɔ i spɔˈkijnɔ dɔtʃɛˈkɑjtɛsʲɑ ɔfʲit͡sʲijˈnɪx rɛzulʲˈtɑtʲiw] (bood' LAHS-kah, neh toor-booy-TEHS'-yah zahv-chahs-NOH ee spoh-KEEY-noh doh-cheh-KAHY-tehs'-yah oh-fee-tseey-NYKH reh-zool'-TAH-teew)",
          "translation": "Please do not worry prematurely and calmly wait for the official results."
        },
        {
          "target": "Будьте надзвичайно уважні на крутому схилі: дивіться не послизніться на мокрому камінні!",
          "reading": "[ˈbudʲtɛ nɐdzwɪˈtʃɑjnɔ uˈwɑʒnʲi nɑ kruˈtɔmu ˈsxɪlʲi: dɪˈwʲitʲsʲɑ nɛ pɔslɪzˈnʲitʲsʲɑ nɑ ˈmɔkrɔmu kɐˈmʲinʲːi] (BOOD'-teh nahd-zvy-CHAHY-noh oo-VAHZH-nee nah kroo-TOH-moo SKHY-lee: dy-VEET'-syah neh poh-slyz-NEET'-syah nah MOHK-roh-moo kah-MEEN-nyee)",
          "translation": "Be extraordinarily careful on the steep slope: take care not to slip on wet stones!"
        },
        {
          "target": "Шановні відвідувачі, просимо не торкатися музейних експонатів руками.",
          "reading": "[ʃɐˈnɔwnʲi wʲidˈwʲiduwɐtʃʲi, prɔˈsɪmɔ nɛ tɔrˈkɑtɪsʲɑ muˈzɛjnɪx ɛkspɔˈnɑtʲiw ruˈkɑmɪ] (shah-NOHV-nee veed-VEE-doo-vah-chee, proh-SY-moh neh tohr-KAH-tys'-yah moo-ZEY-nykh eks-poh-NAH-teew roo-KAH-my)",
          "translation": "Dear visitors, we request you not to touch the museum exhibits with your hands."
        }
      ],
      "mnemonics": [
        "Категорична заборона — «не робіть» (недоконаний вид); застереження від біди — «дивись не впади» (доконаний вид)!"
      ],
      "culturalNotes": [
        "Етикетне словосполучення «Будь ласка» в українській мові завжди пишеться ОКРЕМО (на відміну від калькованого російського «пожалуйста») і виділяється комами."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Який вид дієслова використовується у застереженні від випадкової прикрої події «Обережно, не ... ключі!»?",
          "options": [
            "Доконаний вид (Не загуби! - Warning against accidental loss)",
            "Недоконаний вид (Не губи)",
            "Умовний спосіб",
            "Інфінітив пасивного стану"
          ],
          "answerIndex": 0,
          "explanation": "Для застереження від випадкової небажаної дії використовується доконаний вид: «не загуби»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно пишеться етикетний вираз «будь ласка»?",
          "options": [
            "Окремо (будь ласка)",
            "Через дефіс (будь-ласка)",
            "Разом (будьласка)",
            "З апострофом (будь'ласка)"
          ],
          "answerIndex": 0,
          "explanation": "За чинним українським правописом вираз «будь ласка» пишеться виключно окремо у два слова."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, де заперечний наказ виражає загальну заборону дії в недоконаному виді:",
          "options": [
            "Не запізнюйтеся на міжнародні переговори, цінуйте час партнерів.",
            "Дивись не запізнися на потяг!",
            "Гляди не впусти телефон у воду!",
            "Не забудь вимкнути світло перед виходом."
          ],
          "answerIndex": 0,
          "explanation": "«Не запізнюйтеся» — це форма недоконаного виду, що позначає загальну заборону регулярної дії."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u18-l5": {
    "id": "uk-u18-l5",
    "subject": "ukrainian",
    "unit": 18,
    "lessonNumber": 5,
    "title": "Прагматика етикету: кличний відмінок та спонукання (Vocative + Imperative)",
    "level": "B2",
    "objective": "Опанувати гармонійне поєднання наказового способу з кличним відмінком у різних регістрах спілкування (офіційному, академічному, дружньому) та етикетні формули ввічливого звертання.",
    "presentation": {
      "explanation": "Справжня культура українського мовлення вимагає нерозривної єдності між спонукальною формою дієслова (наказовим способом) та адресатом мовлення у КЛИЧНОМУ відмінку:\n\n1. Синтаксичне узгодження звертання та наказового способу:\n   - Офіційно-діловий та шанобливий регістр (Кличний відмінок + 2-га особа множини на «-іть / -те»):\n     * «Пане професоре, дозвольте поставити запитання!»;\n     * «Оксано Петрівно, підпишіть, будь ласка, цей наказ»;\n     * «Шановні колеги, погляньте на екран».\n   - Дружній та неформальний регістр (Кличний відмінок + 2-га особа однини на «-и / -∅»):\n     * «Андрію, допоможи мені розібратися!»;\n     * «Маріє, розкажи про свою поїздку»;\n     * «Друже, тримайся міцніше!».\n\n2. Формули мовного етикету при спонуканні:\n   - Вибачення перед проханням: «Перепрошую, чи не могли б ви...», «Даруйте на слові, зверніть увагу...»;\n   - Прохання дозволу: «Дозвольте зайти», «Дозвольте висловити думку»;\n   - Ввічлива згода: «Будь ласка», «З приємністю», «Радо допоможу»;\n   - Тактовна відмова: «На жаль, зараз не маю можливості», «Перепрошую, але змушений відмовити».\n\n3. Пунктуація: Звертання в кличному відмінку завжди виділяється комами (або знаком оклику на початку речення).",
      "examples": [
        {
          "target": "Пане ректоре, дозвольте представити вам почесних гостей нашого університету.",
          "reading": "[ˈpɑnɛ ˈrɛktɔrɛ, dɔzˈwɔlʲtɛ prɛdstɐˈwɪtɪ wɑm pɔˈtʃɛsnɪx ɦɔsˈtɛj ˈnɑʃɔɦɔ unʲiwɛrsɪˈtɛtu] (PAH-neh REHK-toh-reh, dohz-VOHL'-teh pred-stah-VY-ty vahm poh-CHEHS-nykh hohs-TEY NAH-shoh-hoh oo-nee-vehr-sy-TEH-too)",
          "translation": "Mr. Rector, allow me to introduce the guests of honor of our university to you."
        },
        {
          "target": "Оксано Миколаївно, перевірте, будь ласка, фінансові звіти за минулий квартал.",
          "reading": "[ɔkˈsɑnɔ mɪkɔˈlɑjiwnɔ, pɛrɛˈwʲirtɛ, budʲ ˈlɑskɐ, fʲinɐnˈsɔwʲi ˈzwʲitɪ zɑ mɪˈnulɪj kwɐrˈtɑl] (ohk-SAH-noh my-koh-LAH-yeev-noh, peh-reh-VEER-teh, bood' LAHS-kah, fee-nahn-SOH-vee ZVEE-ty zah my-NOO-lyy kvahr-TAHL)",
          "translation": "Oksana Mykolayivna, please check the financial reports for the past quarter."
        },
        {
          "target": "Друже мій, ніколи не сумнівайся у власних силах і сміливо йди вперед!",
          "reading": "[ˈdruʒɛ mʲij, ˈnʲikɔlɪ nɛ sumnʲiˈwɑjsʲɑ u ˈwlɑsnɪx ˈsɪlɐx i smʲiˈlɪwɔ jdɪ wpɛˈrɛd] (DROO-zheh meey, NEE-koh-ly neh soom-nee-VAHY-syah oo VLAHS-nykh SY-lahkh ee smee-LY-voh ydy vpeh-RED)",
          "translation": "My friend, never doubt your own strength and boldly go forward!"
        }
      ],
      "mnemonics": [
        "Звертаєшся з наказом — обов'язково став ім'я в кличний відмінок: «Оксано, допоможи!», «Пане директоре, розгляньте!»"
      ],
      "culturalNotes": [
        "Поєднання кличного відмінка з дієсловами ввічливості («перепрошую», «будь ласка», «дозвольте») є візитною карткою шляхетного українського міського мовлення."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть речення, в якому звертання та наказ граматично узгоджено з бездоганною точністю:",
          "options": [
            "Пані Олено, передайте, будь ласка, протокол засідання. (Vocative case + polite imperative)",
            "Пані Олена, передайте, будь ласка, протокол.",
            "Пані Олено, передай, будь ласка, протокол.",
            "Пані Олену, передайте протокол."
          ],
          "answerIndex": 0,
          "explanation": "«Пані Олено» (кличний відмінок) гармонійно поєднується з ввічливою формою 2-ї особи множини «передайте»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка етикетна формула ввічливого звернення є питомо українською для привернення уваги?",
          "options": [
            "Перепрошую, дозвольте запитати... (Authentic Ukrainian polite phrase)",
            "Вибачаюсь, можна спитати",
            "Я вибачаюся",
            "Слухайте сюди"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною етикетною формулою є «Перепрошую, дозвольте...» (зворот «вибачаюся» є стилістично некоректним)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ норми кличного відмінка, правопису та наказового способу дотримано бездоганно:",
          "options": [
            "Шановний пане професоре, будь ласка, висловіть свою експертну думку.",
            "Шановний пан професор, будь ласка, висловіть свою думку.",
            "Шановний пане професоре, будь-ласка, висловіть свою думку.",
            "Шановний пане професор, будь ласка, вислови свою думку."
          ],
          "answerIndex": 0,
          "explanation": "У першому варіанті кличний відмінок «пане професоре», правопис «будь ласка» (окремо без дефіса) та форма «висловіть» є бездоганними."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u19-l1": {
    "id": "uk-u19-l1",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 1,
    "title": "Пасивні дієприкметники минулого часу (-ний/-тий) та правопис однієї «н»",
    "level": "B2",
    "objective": "Опанувати творення пасивних дієприкметників минулого часу за допомогою суфіксів -н-, -ен-, -єн-, -т- та засвоїти фундаментальне правило написання однієї букви «н» в українських дієприкметниках.",
    "presentation": {
      "explanation": "Пасивні дієприкметники минулого часу позначають ознаку предмета за дією, яку над ним здійснив інший суб'єкт:\n\n1. Способи творення пасивних дієприкметників:\n   - Суфікс «-Н-» (від основ на -а-/-я-): прочитати -> прочитаний, написати -> написаний, збудувати -> збудований.\n   - Суфікс «-ЕН- / -ЄН-» (від основ на приголосний або на -и-/-і- з чергуванням): зробити -> зроблений, вивчити -> вивчений, загоїти -> загоєний, зберегти -> збережений.\n   - Суфікс «-Т-» (від односкладових основ або основ на -ер-, -у-, -и-): розбити -> розбитий, здобути -> здобутий, зшити -> зшитий, терти -> тертий, закрити -> закритий.\n\n2. ФУНДАМЕНТАЛЬНЕ ПРАВИЛО ПРАВОПИСУ (Одна буква «н»):\nВ українських пасивних дієприкметниках суфікс «-н-» ЗАВЖДИ пишеться з ОДНІЄЮ буквою «н»:\n   - Написаний, прочитаний, зроблений, створений, вихований, організований (на відміну від російської мови, де пишеться «нн»).\n\n3. Розрізнення дієприкметників та прикметників із подвоєнням «-нн-»:\n   - Дієприкметник (ознака за дією, одна «н»): здійснений план, нездоланий ворог (якого не здолали), незлічений натовп.\n   - Прикметник (висока якість / неможливість дії, подвоєння «-нн-» і наголошений суфікс): нездола́нний (непереможний), незліче́нний (незліченна кількість), неоціне́нний, незрівня́нний.",
      "examples": [
        {
          "target": "Наукова стаття, написана молодим київським дослідником, отримала високу оцінку експертів.",
          "reading": "[nɐuˈkɔwɐ stɐtʲˈtʲɑ, nɐˈpɪsɐnɐ mɔlɔˈdɪm ˈkɪjiwsʲkɪm dɔsʲˈlʲidnɪkɔm, ɔtrɪˈmɑlɐ wɪˈsɔku ɔˈt͡sʲinku ɛksˈpɛrtʲiw] (nah-oo-KOH-vah staht-TYAH, nah-PY-sah-nah moh-loh-DYM KY-yeew-s'kym dohs-LEED-ny-kohm, oh-try-MAH-lah vy-SOH-koo oh-TSEEN-koo eks-PEHR-teew)",
          "translation": "The scientific article written by the young Kyiv researcher received a high evaluation from experts."
        },
        {
          "target": "Вчасно відкритий інноваційний центр відкриває безмежні перспективи для української молоді.",
          "reading": "[ˈwtʃɑsnɔ wʲidˈkrɪtɪj innɔwɐt͡sʲijˈnɪj t͡sɛntr wʲidkrɪˈwɑjɛ bɛzˈmɛʒnʲi pɛrspɛkˈtɪwɪ dlʲɑ ukrɐˈjinʲsʲkɔji ˈmɔlɔdʲi] (VCHAH-snoh veed-KRY-tyy een-noh-vah-tseey-NYY tsehntr veed-kry-VAH-yeh bez-MEHZH-nee pehr-spehk-TY-vy dlyah oo-krah-YEEN-s'koh-yee MOH-loh-dee)",
          "translation": "The timely opened innovation center opens boundless prospects for Ukrainian youth."
        },
        {
          "target": "Усі заплановані реформи були успішно реалізовані урядовою командою.",
          "reading": "[uˈsʲi zɐplɐˈnɔwɐnʲi rɛˈfɔrmɪ buˈlɪ usʲˈpʲiʃnɔ rɛɐlʲizɔˈwɑnʲi urʲɑˈdɔwɔju kɔˈmɑndɔju] (oo-SEE zah-plah-NOH-vah-nee reh-FOHR-my boo-LY oos-PEESH-noh reh-ah-lee-zoh-VAH-nee oo-ryah-DOH-woh-yoo koh-MAHN-doh-yoo)",
          "translation": "All planned reforms were successfully implemented by the governmental team."
        }
      ],
      "mnemonics": [
        "В українському дієприкметнику — завжди одна «н»: «написаний», «зроблений», «прочитаний»! Подвоєння «нн» — тільки в особливих прикметниках з наголосом на «-енний/-анний»!"
      ],
      "culturalNotes": [
        "Написання однієї літери «н» у суфіксах дієприкметників є фундаментальною відмінністю української графічної системи від інших слов'янських мов."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний варіант орфографічного запису пасивного дієприкметника «створе(н/нн)ий»:",
          "options": [
            "Створений (Always single letter н in Ukrainian passive participles)",
            "Створенний",
            "Створенийй",
            "Створний"
          ],
          "answerIndex": 0,
          "explanation": "В українських дієприкметниках суфікс пишеться тільки з однією буквою «н»: «створений»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке слово є пасивним дієприкметником із суфіксом -т-?",
          "options": [
            "Здобутий (Passive participle with suffix -т-)",
            "Здобуток",
            "Здобувати",
            "Здобувши"
          ],
          "answerIndex": 0,
          "explanation": "«Здобутий» — це пасивний дієприкметник минулого часу із суфіксом «-т-»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому пасивний дієприкметник написано орфографічно правильно:",
          "options": [
            "Проєкт, розроблений нашими інженерами, здобув головний приз на конкурсі.",
            "Проєкт, розробленний нашими інженерами, здобув головний приз.",
            "Проєкт, зробленийй інженерами, здобув приз.",
            "Проєкт, розроблетий інженерами, здобув приз."
          ],
          "answerIndex": 0,
          "explanation": "Слово «розроблений» пишеться з однією буквою «н»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u19-l2": {
    "id": "uk-u19-l2",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 2,
    "title": "Активні дієприкметники: нормативні форми на -лий та заміни суржикових кальок",
    "level": "B2",
    "objective": "Опанувати творення нормативних активних дієприкметників на -лий (дозрілий, зів'ялий, пожовклий) та засвоїти культуру усунення невластивих активних дієприкметників на -учий/-ячий.",
    "presentation": {
      "explanation": "В українській літературній мові система активних дієприкметників має чіткі межі та стилістичні закономірності:\n\n1. Нормативні активні дієприкметники минулого часу на «-ЛИЙ»:\nУтворюються від неперехідних дієслів доконаного виду, що позначають перехід суб'єкта в новий якісний стан (є повністю питомими та нормативними):\n   - Дозріти -> дозрілий (дозрілі яблука);\n   - Зів'янути -> зів'ялий (зів'яле листя);\n   - Пожовкнути -> пожовклий;\n   - Посивіти -> посивілий;\n   - Заснути -> заснулий;\n   - Ожилий, розквітлий, зголоднілий, потьмянілий.\n\n2. СТИЛІСТИЧНЕ ОБМЕЖЕННЯ (Форми на «-учий / -ючий / -ачий / -ячий»):\nАктивні дієприкметники теперішнього часу на «-учий/-ячий» є неприродними для українського синтаксису при керуванні залежними словами. Їх слід замінювати нормативними мовними засобами:\n   - Калька: *працюючий персонал* -> Норма: «персонал, що працює» / «працівники»;\n   - Калька: *головуючий на зборах* -> Норма: «голова зборів»;\n   - Калька: *відпочиваючі на пляжі* -> Норма: «відпочивальники»;\n   - Калька: *палаючий вогонь* -> Норма: «палкий вогонь» / «вогонь, що палає»;\n   - Калька: *оточуюче середовище* -> Норма: «довкілля» / «навколишнє середовище»;\n   - Калька: *пануюча думка* -> Норма: «панівна думка».\n\n3. Коли «-учий/-ячий» зберігаються:\nТільки тоді, коли вони перейшли в чисті прикметники або іменники зі значенням постійної властивості: «дрімучий ліс», «лежачий камінь», «летюча миша», «квітучий сад».",
      "examples": [
        {
          "target": "В осінньому парку повільно кружляло золотисте пожовкле листя кленів.",
          "reading": "[w ɔˈsʲinʲːɔmu ˈpɑrku pɔˈwʲilʲnɔ kruʒˈlʲɑlɔ zɔlɔˈtɪstɛ pɔˈʒɔwklɛ ˈlɪsʲtʲɑ ˈklɛnʲiw] (v oh-SEEN-nyoh-moo PAHR-koo poh-VEEL'-noh kroozh-LYAH-loh zoh-loh-TYS-teh poh-ZHOHV-kleh LYS-tyah KLEH-neew)",
          "translation": "Golden yellowed maple leaves slowly swirled in the autumn park."
        },
        {
          "target": "Голова засідання надав слово провідному експертові з питань екології довкілля.",
          "reading": "[ɦɔlɔˈwɑ zɐˈsʲidɐnʲːɑ nɐˈdɑw ˈslɔwɔ prɔwʲidˈnɔmu ɛksˈpɛrtɔwʲi z pɪˈtɑnʲ ɛkɔˈlɔɦʲiji dɔwˈkʲilʲːɑ] (hoh-loh-VAH zah-SEE-dahn-nyah nah-DAHV SLOH-woh proh-veed-NOH-moo eks-PEHR-toh-vee z py-TAHN' eh-koh-LOH-hee-yee dov-KEEL-lyah)",
          "translation": "The chairman of the meeting gave the floor to a leading expert on environmental protection of the surrounding nature."
        },
        {
          "target": "Студенти, які успішно склали всі іспити, отримають підвищену академічну стипендію.",
          "reading": "[stuˈdɛntɪ, jɑˈkʲi usʲˈpʲiʃnɔ ˈsklɑlɪ wˈsʲi ˈispɪtɪ, ɔtrɪˈmɑjutʲ pʲidˈwɪʃtʃɛnu ɐkɐdɛˈmʲitʃnu stɪˈpɛndʲiju] (stoo-DEN-ty, yah-KEE oos-PEESH-noh SKLAH-ly VSEE EES-py-ty, oh-try-MAH-yoot' peed-VYSH-cheh-noo ah-kah-deh-MEECH-noo sty-PEN-dee-yoo)",
          "translation": "Students who successfully passed all exams will receive an increased academic scholarship."
        }
      ],
      "mnemonics": [
        "Забудь кальковане «працюючі люди» — кажи красиво: «люди, що працюють» або «працівники»! А від переходу стану кажи «-лий»: «пожовклий», «дозрілий»!"
      ],
      "culturalNotes": [
        "Очищення української мови від неорганічних дієприкметників на -учий/-ячий було однією з головних засад мовознавчої школи Олекси Синявського та Юрія Шевельова."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно відредагувати канцеляризм «всі бажаючі взяти участь»?",
          "options": [
            "Усі охочі / усі, хто бажає взяти участь (Authentic replacement of active participle in -ючий)",
            "Всі бажающі",
            "Всі хотячі",
            "Всі бажаючі особи"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною заміною суржикового «бажаючі» є слово «охочі» або підрядне речення «усі, хто бажає»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який активний дієприкметник на -лий є повністю нормативним в українській мові?",
          "options": [
            "Дозрілий (Normative active past participle from intransitive verb дозріти)",
            "Дозріваючий",
            "Зріючий",
            "Дозрівавший"
          ],
          "answerIndex": 0,
          "explanation": "Форма на -лий («дозрілий») від неперехідного дієслова доконаного виду є абсолютно нормативною."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому НЕМАЄ штучних калькованих дієприкметників на -учий/-ячий:",
          "options": [
            "Науковці провели ґрунтовний аналіз стану навколишнього довкілля.",
            "Науковці провели аналіз оточуючого середовища.",
            "Всі відпочиваючі на березі насолоджувалися сонцем.",
            "Головуючий на конференції відкрив пленарне засідання."
          ],
          "answerIndex": 0,
          "explanation": "У першому реченні використано питоме слово «довкілля» замість кальки «оточуюче середовище»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u19-l3": {
    "id": "uk-u19-l3",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 3,
    "title": "Дієприслівники теперішнього (-учи/-ючи) та минулого часу (-ши/-вши)",
    "level": "B2",
    "objective": "Опанувати творення дієприслівників теперішнього часу (недоконаний вид: -учи/-ючи, -ачи/-ячи) та минулого часу (доконаний вид: -ши/-вши) та їх семантичну роль додаткової дії.",
    "presentation": {
      "explanation": "Дієприслівник (Adverbial Participle / Gerund) — незмінювана дієслівна форма, що виражає додаткову дію, яка супроводжує головну дію, названу присудком:\n\n1. Дієприслівники теперішнього часу (недоконаний вид):\nПозначають додаткову дію, що відбувається одночасно з головною. Утворюються від основи теперішнього часу за допомогою суфіксів:\n   - «-УЧИ / -ЮЧИ» (I дієвідміна): читати (чита-ють) -> читаючи; писати (пиш-уть) -> пишучи; знати -> знаючи; іти -> ідучи.\n   - «-АЧИ / -ЯЧИ» (II дієвідміна): сидіти (сид-ять) -> сидячи; бачити (бач-ать) -> бачачи; стояти -> стоячи; летіти -> летячи.\n\n2. Дієприслівники минулого часу (переважно доконаний вид):\nПозначають додаткову дію, яка передувала головній дії. Утворюються від основи інфінітива за допомогою суфіксів:\n   - «-ВШИ» (після основ на голосний): прочитати -> прочитавши; зробити -> зробивши; написати -> написавши; закінчити -> закінчивши.\n   - «-ШИ» (після основ на приголосний): принести (приніс) -> принісши; зберегти -> зберігши; спікти -> спікши; допомогти -> допомігши.\n\n3. Дієприслівники зі зворотним постфіксом:\nПостфікс «-сь / -ся» зберігається наприкінці: вмиваючись, зустрівшись, посміхаючись, повернувшись.",
      "examples": [
        {
          "target": "Уважно аналізуючи первинні архівні джерела, історик відкрив невідомі факти про козацьку добу.",
          "reading": "[uˈwɑʒnɔ ɐnɐlʲiˈzujut͡ʃɪ pɛrˈwɪnʲnʲi ɐrˈxiwnʲi dʒɛrɛˈlɑ, isˈtɔrɪk wʲidˈkrɪw nɛwʲiˈdɔmʲi ˈfɑktɪ prɔ kɔˈzɑt͡sʲku ˈdɔbu] (oo-VAHZH-noh ah-nah-lee-ZOO-yoo-chy pehr-VYN-nee ahr-KHEEV-nee dzheh-reh-LAH, ees-TOH-ryk veed-KRYV neh-vee-DOH-mee FAHK-ty proh koh-ZAHT-s'koo DOH-boo)",
          "translation": "Carefully analyzing primary archival sources, the historian discovered unknown facts about the Cossack era."
        },
        {
          "target": "Завершивши попередні досліди, наукова група підготувала детальний звіт для міжнародної публікації.",
          "reading": "[zɐwɛrˈʃɪwʃɪ pɔpɛˈrɛdnʲi ˈdɔsʲlʲidɪ, nɐuˈkɔwɐ ˈhrupɐ pʲidɦɔtuˈwɑlɐ dɛˈtɑlʲnɪj zwʲit dlʲɑ mʲiʒnɐˈrɔdnɔji publʲiˈkɑt͡sʲiji] (zah-vehr-SHYV-shy poh-peh-RED-nee DOHS-ly-dy, nah-oo-KOH-vah HROO-pah peed-hoh-too-VAH-lah deh-TAHL'-nyy zveet dlyah meezh-nah-ROHD-noh-yee poob-lee-KAH-tsee-yee)",
          "translation": "Having finished preliminary experiments, the research group prepared a detailed report for international publication."
        },
        {
          "target": "Щиро посміхаючись друзям, мандрівник розповів про свої захопливі подорожі Карпатами.",
          "reading": "[ˈʃtʃɪrɔ pɔsmʲiˈxɑjutʃɪsʲ ˈdruzʲɐm, mɐnˈdrʲiwnɪk rɔzpɔˈwʲiw prɔ swɔˈji zɐxɔpˈlɪwʲi pɔdɔˈrɔʒʲi kɐrˈpɑtɐmɪ] (SHCHY-roh pohs-mee-KHAH-yoo-chys' DROOZ-yahm, mahn-DREEV-nyk roz-poh-VEEV proh swoh-YEE zah-khohp-LY-vee poh-doh-ROH-zhee kahr-PAH-tah-my)",
          "translation": "Smiling sincerely at friends, the traveler talked about his fascinating travels through the Carpathians."
        }
      ],
      "mnemonics": [
        "Теперішній час — що роблячи? «читаючи», «пишучи»; минулий час — що зробивши? «зробивши», «принісши»!"
      ],
      "culturalNotes": [
        "Дієприслівникові форми надають українській художній та науковій мові динамізму, лаконічності та високого стилістичного ритму."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний дієприслівник минулого часу від дієслова «принести» (основа на приголосний):",
          "options": [
            "Принісши (Suffix -ши after consonant stem)",
            "Принісвши",
            "Принесячи",
            "Принесучи"
          ],
          "answerIndex": 0,
          "explanation": "Після основ на приголосний додається суфікс «-ши»: «принісши»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який суфікс використовується для творення дієприслівника теперішнього часу від дієслова I дієвідміни «співати» (співають)?",
          "options": [
            "-ючи (співаючи - from 1st conjugation verb)",
            "-ячи",
            "-вши",
            "-тий"
          ],
          "answerIndex": 0,
          "explanation": "Від дієслова I дієвідміни утворюється дієприслівник із суфіксом «-ючи»: «співаючи»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть рядок, у якому ВСІ слова є дієприслівниками:",
          "options": [
            "Зробивши, працюючи, принісши, усміхаючись.",
            "Зроблений, працюючий, принесений, усміхнений.",
            "Зробити, праця, приніс, усмішка.",
            "Зробивши, зроблений, праця, працювати."
          ],
          "answerIndex": 0,
          "explanation": "Всі слова першого рядка відповідають на питання «що роблячи? що зробивши?» і мають характерні суфікси -вши, -ючи, -ши, -ючись."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u19-l4": {
    "id": "uk-u19-l4",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 4,
    "title": "Дієприслівниковий зворот: єдність суб'єкта дії та синтаксична гігієна",
    "level": "B2",
    "objective": "Опанувати непорушний закон українського синтаксису про єдність суб'єкта дії в реченнях із дієприслівниковим зворотом та усунення граматичних помилок типу Dangling Participle.",
    "presentation": {
      "explanation": "Синтаксичні правила вживання дієприслівникового звороту в українській мові мають суворі нормативні обмеження:\n\n1. НЕПОРУШНИЙ ЗАКОН СПІЛЬНОГО СУБ'ЄКТА:\nДія, виражена дієприслівником (додаткова дія), і дія, виражена присудком (основна дія), МУСЯТЬ обов'язково виконуватися ОДНІЄЮ Й ТІЄЮ Ж особою чи предметом (граматичним підметом):\n   - Правильно: «Повертаючись додому, я зустрів свого шкільного вчителя» (Я повертався і я зустрів).\n\n2. СИНТАКСИЧНІ ПОМИЛКИ (Dangling Participle):\n   - Помилка 1 (Дію дієприслівника виконує не підмет):\n     * Неправильно: «Під'їжджаючи до Києва, у мене злетів капелюх» (Виходить, що капелюх сам під'їжджав до Києва!).\n     * Нормативна заміна: «Під'їжджаючи до Києва, я загубив свій капелюх» АБО «Коли я під'їжджав до Києва, з мене злетів капелюх».\n   - Помилка 2 (Вживання у безособових реченнях із суб'єктом у непрямому відмінку):\n     * Неправильно: «Читаючи роман, мені стало сумно».\n     * Нормативна заміна: «Читаючи роман, я відчув сум» АБО «Коли я читав роман, мені стало сумно».\n\n3. Коли дієприслівниковий зворот дозволений у безособовому реченні:\nТільки тоді, коли головний присудок виражений інфінітивом зі значенням загальної настанови чи правила:\n   - «Переходячи вулицю, слід уважно дивитися по сторонах» (нормативно!).",
      "examples": [
        {
          "target": "Ретельно перевіривши всі розрахунки, головний інженер особисто підписав технічний проєкт.",
          "reading": "[ˈrɛtɛlʲnɔ pɛrɛˈwʲirɪwʃɪ wˈsʲi rɔzrɐˈxunkɪ, ɦɔlɔwˈnɪj inʒɛˈnɛr ɔsɔˈbɪstɔ pʲidpɪˈsɑw tɛxˈnʲitʃnɪj prɔˈjɛkt] (REH-tel'-noh peh-reh-VEER-yv-shy VSEE roz-rah-KHOON-ky, hoh-lohv-NYY een-zheh-NEHR oh-soh-BYS-toh peed-py-SAHV tekh-NEECH-nyy proh-YEHKT)",
          "translation": "Having thoroughly checked all calculations, the chief engineer personally signed the technical project."
        },
        {
          "target": "Подорожуючи мальовничим Поділлям, ми дізналися багато захопливих легенд про стародавні фортеці.",
          "reading": "[pɔdɔrɔˈʒujutʃɪ mɐˈlʲɔwnɪtʃɪm pɔˈdʲilʲːɐm, mɪ dʲizˈnɑlɪsʲɑ bɐˈɦɑtɔ zɐxɔpˈlɪwɪx lɛˈɦɛnd prɔ stɐrɔˈdɑwnʲi fɔrˈtɛt͡sʲi] (poh-doh-roh-ZHOO-yoo-chy mah-LYOHV-ny-chym poh-DEEL-lyahm, my deez-NAH-lys'-yah bah-HAH-toh zah-khohp-LY-vykh leh-HEND proh stah-roh-DAHV-nee fohr-TET-see)",
          "translation": "Traveling through picturesque Podillia, we learned many fascinating legends about ancient fortresses."
        },
        {
          "target": "Коли я слухав цю зворушливу українську пісню, на мої очі навернулися сльози.",
          "reading": "[kɔˈlɪ jɑ ˈsluxɐw t͡sʲu zwɔˈruʃlɪwu ukrɐˈjinʲsʲku ˈpʲisʲnʲu, nɑ mɔˈji ˈɔtʃʲi nɐwɛrˈnulɪsʲɑ ˈsʲlʲɔzɪ] (koh-LY yah SLOO-khahv TSYOO zwoh-ROOSH-ly-voo oo-krah-YEEN-s'koo PEES-nyoo, nah moh-YEE OH-chee nah-vehr-NOO-lys'-yah SLYOH-zy)",
          "translation": "When I was listening to this moving Ukrainian song, tears came to my eyes."
        }
      ],
      "mnemonics": [
        "Підмет речення повинен робити ОБИДВІ дії: і головну (присудок), і додаткову (дієприслівник)!"
      ],
      "culturalNotes": [
        "Завдання на виявлення помилок у вживанні дієприслівникових зворотів є незмінною складовою тестування з української мови на НМТ / ЗНО."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть граматично правильне продовження речення «Повертаючись увечері додому, ...»:",
          "options": [
            "Ми зустріли давніх шкільних друзів. (Correct shared subject: ми поверталися і ми зустріли)",
            "У мене розрядився мобільний телефон.",
            "Пішов сильний дощ.",
            "Нам стало дуже весело."
          ],
          "answerIndex": 0,
          "explanation": "Суб'єкт «ми» одночасно виконує і дію дієприслівника («повертаючись»), і присудка («зустріли»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Чому речення «Переглядаючи старі фотографії, мені згадалося дитинство» є помилковим?",
          "options": [
            "У безособовому реченні дію дієприслівника не виконує підмет (Dangling participle syntax error)",
            "Немає коми після звороту",
            "Слово фотографії написано неправильно",
            "Використано недоконаний вид"
          ],
          "answerIndex": 0,
          "explanation": "У цьому реченні граматичним підметом є «дитинство», але дитинство не могло переглядати фотографії (діяч позначений давальним відмінком «мені»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому дієприслівниковий зворот побудовано з абсолютною граматичною правильністю:",
          "options": [
            "Працюючи над дисертацією, аспірант опрацював понад сто наукових джерел.",
            "Працюючи над дисертацією, аспірантові знадобилося багато часу.",
            "Піднявшись на вершину Говерли, перед нами відкрився дивовижний краєвид.",
            "Виступаючи на сцені, актору здалося все казковим."
          ],
          "answerIndex": 0,
          "explanation": "У першому варіанті підмет «аспірант» виконує обидві дії: «працював» і «опрацював»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u19-l5": {
    "id": "uk-u19-l5",
    "subject": "ukrainian",
    "unit": 19,
    "lessonNumber": 5,
    "title": "Пунктуація та стилістика відокремлених дієприкметникових і дієприслівникових зворотів",
    "level": "B2",
    "objective": "Опанувати пунктуаційні правила виділення дієприкметникових і дієприслівникових зворотів та стилістичну майстерність їх використання у текстах.",
    "presentation": {
      "explanation": "Відокремлення дієприкметникових та дієприслівникових зворотів на письмі регулюється чіткими синтаксичними правилами:\n\n1. Пунктуація дієприкметникових зворотів (Participle clauses):\n   - Виділяється комами, якщо стоїть ПІСЛЯ означуваного іменника:\n     * «Книжка, прочитана за один вечір, справила на мене сильне враження».\n   - НЕ виділяється комами, якщо стоїть ПЕРЕД означуваним іменником і не має додаткових відтінків значення:\n     * «Прочитана за один вечір книжка справила на мене сильне враження».\n   - ОБОВ'ЯЗКОВО виділяється комами ПЕРЕД іменником, якщо має додаткове обставинне значення (причини чи поступки):\n     * «Виснажені тривалим переходом, туристи швидко заснули» (= тому що були виснажені).\n   - ЗАВЖДИ виділяється комами, якщо стосується особового займенника (я, ти, він, вона, воно, ми, ви, вони):\n     * «Осяяний сонцем, він стояв на вершині гори».\n\n2. Пунктуація дієприслівникових зворотів (Adverbial participle clauses):\n   - Дієприслівниковий зворот ЗАВЖДИ виділяється комами, незалежно від його місця на початку, всередині чи в кінці речення:\n     * «Зробивши уроки, хлопець пішов на прогулянку»;\n     * «Хлопець, зробивши уроки, пішов на прогулянку»;\n     * «Хлопець пішов на прогулянку, зробивши уроки».\n   - Одиничний дієприслівник НЕ виділяється комами лише тоді, коли стоїть безпосередньо після присудка і набуває значення способу дії (відповідає на питання «як?»):\n     * «Він сидів замислившись» (сидів мовчки, нерухомо).",
      "examples": [
        {
          "target": "Хліб, випечений у традиційній печі на дровах, мав неповторний духмяний аромат.",
          "reading": "[xlʲib, ˈwɪpɛtʃɛnɪj u trɐdɪt͡sʲijˈnʲij ˈpɛtʃʲi nɑ drɔˈwɑx, mɑw nɛpɔwtɔrˈnɪj duxˈmjɑnɪj ɐrɔˈmɑt] (khleeb, VY-peh-cheh-nyy oo trah-dy-tseey-NEEY PEH-chee nah droh-VAHKH, mahv neh-pohv-tohr-NYY dookh-MYAH-nyy ah-roh-MAHT)",
          "translation": "The bread baked in a traditional wood-fired oven had an incomparable fragrant aroma."
        },
        {
          "target": "Здобувши блискучу перемогу у фіналі, українські гімнастки зі сльозами на очах піднялися на п'єдестал.",
          "reading": "[zdɔˈbuwʃɪ blɪsˈkutʃu pɛrɛˈmɔɦu u fʲiˈnɑlʲi, ukrɐˈjinʲsʲkʲi ɦʲimˈnɑstkɪ zʲi ˈsʲlʲɔzɐmɪ nɑ ɔˈtʃɑx pʲidnʲɑˈlɪsʲɑ nɑ pjɛdɛsˈtɑl] (zdoh-BOOV-shy blys-KOO-choo peh-reh-MOH-hoo oo fee-NAH-lee, oo-krah-YEEN-s'kee heem-NAHST-ky zee SLYOH-zah-my nah oh-CHAHKH peed-nyah-LYS'-yah nah pyeh-des-TAHL)",
          "translation": "Having won a brilliant victory in the final, the Ukrainian gymnasts mounted the podium with tears in their eyes."
        },
        {
          "target": "Сповнений рішучості та оптимізму, він впевнено попрямував назустріч новим викликам.",
          "reading": "[ˈspɔwnɛnɪj rʲiʃuˈtʃɔsʲtʲi tɑ ɔptɪˈmʲizmu, wʲin ˈwpɛwnɛnɔ pɔprʲɑmuˈwɑw nɐˈzustrʲitʃ nɔˈwɪm ˈwɪklɪkɐm] (SPOHV-neh-nyy ree-shoo-CHOHS-tee tah ohp-ty-MEEZ-moo, veen VPEHV-neh-noh poh-pryah-moo-VAHV nah-ZOO-streech noh-VYM VY-kly-kahm)",
          "translation": "Filled with determination and optimism, he headed confidently toward new challenges."
        }
      ],
      "mnemonics": [
        "Дієприкметник після іменника — комою виділяй; дієприслівниковий зворот — комою завжди обгортай!"
      ],
      "culturalNotes": [
        "Майстерне використання відокремлених зворотів є ознакою високої культури мови в українській публіцистиці та художньому перекладі."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "У якому випадку дієприкметниковий зворот НЕ відокремлюється комами?",
          "options": [
            "Коли стоїть перед означуваним іменником і не має обставинного відтінку (Написана вченим книга вийшла друком)",
            "Коли стоїть після означуваного іменника",
            "Коли стосується особового займенника (він, вона)",
            "Коли має додатковий відтінок причини"
          ],
          "answerIndex": 0,
          "explanation": "Дієприкметниковий зворот, розташований перед означуваним іменником, комами не відокремлюється."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як правильно розставити розділові знаки в реченні «Побачивши друзів я щиро зрадів»?",
          "options": [
            "Побачивши друзів, я щиро зрадів. (Adverbial participle clause must be set off by comma)",
            "Побачивши, друзів я щиро зрадів.",
            "Побачивши друзів я, щиро зрадів.",
            "Побачивши друзів я щиро, зрадів."
          ],
          "answerIndex": 0,
          "explanation": "Дієприслівниковий зворот «Побачивши друзів» відокремлюється комою."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ розділові знаки при відокремлених зворотах розставлено бездоганно:",
          "options": [
            "Картина, створена відомим українським художником, вразила глядачів своєю колористикою.",
            "Картина створена відомим українським художником, вразила глядачів.",
            "Створена художником картина, вразила глядачів.",
            "Картина створена художником вразила глядачів."
          ],
          "answerIndex": 0,
          "explanation": "Дієприкметниковий зворот «створена відомим українським художником» стоїть після іменника «картина» і правильно виділений комами з обох боків."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u20-l1": {
    "id": "uk-u20-l1",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 1,
    "title": "Складнопідрядні речення причини: бо, тому що, оскільки, через те що",
    "level": "B2",
    "objective": "Опанувати багатство сполучників причини в українській мові (бо, тому що, оскільки, через те що, завдяки тому що), їх синтаксичну позицію та правила розчленування складених сполучників.",
    "presentation": {
      "explanation": "Складнопідрядні речення причини вказують на причину, підставу чи мотив дії головної частини та відповідають на питання «чому? з якої причини? через що?»:\n\n1. Реєстр та стилістика причинних сполучників:\n   - «БО» — найуживаніший розмовний та художній сполучник; підрядна частина з «бо» ЗАВЖДИ стоїть ПІСЛЯ головної (не може починати речення):\n     * «Ми зупинилися, бо почалася сильна злива».\n   - «ТОМУ ЩО» — універсальний нейтральний сполучник:\n     * «Студент успішно здав іспит, тому що сумлінно готувався».\n   - «ОСКІЛЬКИ» — книжний, науковий та діловий сполучник; підрядна частина з «оскільки» може стояти як після, так і ПЕРЕД головною частиною:\n     * «Оскільки результати експерименту підтвердилися, ми розпочали публікацію статті».\n   - «ЧЕРЕЗ ТЕ ЩО / З ОГЛЯДУ НА ТЕ ЩО» — офіційно-діловий стиль для позначення несприятливих або нейтральних обставин:\n     * «Рейс затримали через те, що на летовищі густий туман».\n   - «ЗАВДЯКИ ТОМУ ЩО» — вживається ВИКЛЮЧНО для позначення позитивних, сприятливих факторів («Завдяки тому що ми вчасно втрутилися, пацієнт одужав»). Вживання *«завдяки»* при негативних подіях (*завдяки хворобі*) є грубою лексичною помилкою!\n\n2. Пунктуація складених сполучників (Розчленування):\nЗалежно від логічного наголосу кома може ставитися перед усім сполучником або всередині нього:\n   - «Ми запізнилися, через те що зламався автобус» (акцент на факті причини).\n   - «Ми запізнилися через те, що зламався автобус» (акцент на слові «через те»).",
      "examples": [
        {
          "target": "Оскільки українська економіка демонструє стійкість, міжнародні інвестори нарощують капіталовкладення.",
          "reading": "[ɔsˈkʲilʲkɪ ukrɐˈjinʲsʲkɐ ɛkɔˈnɔmʲikɐ dɛmɔnstˈrujɛ ˈsʲtʲijkʲisʲtʲ, mʲiʒnɐˈrɔdnʲi inwɛsˈtɔrɪ nɐˈrɔʃtʃujutʲ kɐpʲitɐlɔwˈklɑdɛnʲːɑ] (ohs-KEEL'-ky oo-krah-YEEN-s'kah eh-koh-NOH-mee-kah deh-mohns-TROO-yeh STEEL'-keest', meezh-nah-ROHD-nee een-vehs-TOH-ry nah-ROHSH-choo-yoot' kah-pee-tah-lohv-KLAH-den-nyah)",
          "translation": "Since the Ukrainian economy demonstrates resilience, international investors are increasing capital investments."
        },
        {
          "target": "Завдяки тому що команда працювала злагоджено та самовіддано, проєкт реалізували достроково.",
          "reading": "[zɐwˈdʲɑkɪ ˈtɔmu ʃtʃɔ kɔˈmɑndɐ prɐt͡sʲuˈwɑlɐ zlɑˈɦɔdʒɛnɔ tɑ sɐmɔwʲidˈdɑnɔ, prɔˈjɛkt rɛɐlʲizɔˈwɑlɪ dɔstˈrɔkɔwɔ] (zahv-DYAH-ky TOH-moo shchoh koh-MAHN-dah praht-syoo-VAH-lah zlah-HOH-dzheh-noh tah sah-moh-veed-DAH-noh, proh-YEHKT reh-ah-lee-zoh-VAH-ly dohs-TROH-koh-woh)",
          "translation": "Thanks to the team working harmoniously and selflessly, the project was implemented ahead of schedule."
        },
        {
          "target": "Ми вирушили в дорогу на світанку, бо хотіли встигнути до заходу сонця.",
          "reading": "[mɪ ˈwɪruʃɪlɪ w dɔˈrɔɦu nɑ swʲiˈtɑnku, bɔ xɔˈtʲilɪ ˈwstɪɦnutɪ dɔ ˈzɑxɔdu ˈsɔnt͡sʲi] (my VY-roo-shy-ly v doh-ROH-hoo nah swee-TAHN-koo, boh khoh-TEE-ly VSTYH-noo-ty doh ZAH-khoh-doo SOHN-tsyah)",
          "translation": "We set out at dawn because we wanted to make it before sunset."
        }
      ],
      "mnemonics": [
        "Позитивна причина — тільки «завдяки тому що»; сполучник «бо» — ніколи не починає речення; «оскільки» — окраса ділового стилю!"
      ],
      "culturalNotes": [
        "Культура розрізнення «завдяки» (для добра) та «через / внаслідок» (для лиха чи нейтральних подій) є мірилом освіченості сучасного українця."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний сполучник для речення про позитивний результат: «... лікарі діяли професійно, життя пацієнта було врятовано»:",
          "options": [
            "Завдяки тому що (Positive favorable causality conjunction)",
            "Через те що",
            "Бо",
            "Так що"
          ],
          "answerIndex": 0,
          "explanation": "Для вираження сприятливої позитивної причини використовується сполучник «завдяки тому що»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який сполучник причини НЕ МОЖЕ стояти на самому початку складного речення?",
          "options": [
            "Бо (Conjunction бо always follows the main clause)",
            "Оскільки",
            "Через те що",
            "Зважаючи на те що"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник «бо» в українській мові приєднує підрядну частину виключно після головної частини."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому причинний зв'язок та вибір сполучника оформлено абсолютно грамотно:",
          "options": [
            "Оскільки всі підготовчі роботи завершено вчасно, ми можемо переходити до тестування системи.",
            "Бо всі роботи завершено вчасно, ми можемо переходити до тестування.",
            "Завдяки тому що сталася серйозна аварія, рух поїздів зупинили.",
            "Ми перемогли, через те ми старалися."
          ],
          "answerIndex": 0,
          "explanation": "«Оскільки» правильно розпочинає підрядну частину на початку речення; вживання «завдяки» при аварії є помилковим."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u20-l2": {
    "id": "uk-u20-l2",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 2,
    "title": "Складнопідрядні речення мети: щоб, аби, для того щоб, з тим щоб",
    "level": "B2",
    "objective": "Опанувати синтаксис підрядних речень мети зі сполучниками щоб, аби, для того щоб, з тим щоб, їх пунктуацію та часові узгодження присудків.",
    "presentation": {
      "explanation": "Складнопідрядні речення мети виражають мету або призначення дії головної частини та відповідають на питання «з якою метою? для чого? навіщо?»:\n\n1. Реєстр цільових сполучників:\n   - «ЩОБ» — основний універсальний сполучник мети:\n     * «Ми прийшли сюди, щоб навчитися нового».\n   - «АБИ» — питомий стилістичний синонім сполучника «щоб», що надає мовленню виразності та прагматичної енергії:\n     * «Він працював день і ніч, аби забезпечити родину всім необхідним».\n   - «ДЛЯ ТОГО ЩОБ / З ТИМ ЩОБ / З ТІЄЮ МЕТОЮ ЩОБ» — складені сполучники офіційного, наукового та публіцистичного стилів:\n     * «Для того щоб досягти значних успіхів у науці, потрібні наполегливість і терпіння».\n\n2. Граматична координація дієслів:\n   - Якщо суб'єкт головної та підрядної частин спільний -> у підрядній частині вживається ІНФІНІТИВ:\n     * «Я приїхав до Києва, щоб вступити до університету» (Я приїхав і я вступлю).\n   - Якщо суб'єкти різні -> у підрядній частині обов'язково вживається форма МИНУЛОГО часу (умовний спосіб):\n     * «Я пояснив тему ще раз, щоб усі студенти добре її зрозуміли» (Я пояснив, а студенти зрозуміли).\n\n3. Пунктуація складених сполучників:\nКома може ставитися перед усім сполучником («..., для того щоб...») або всередині («Для того, щоб...»).",
      "examples": [
        {
          "target": "Для того щоб здобути якісну вищу освіту, сучасний студент повинен володіти критичним мисленням.",
          "reading": "[dlʲɑ ˈtɔɦɔ ʃtʃɔb zdɔˈbutɪ ˈjɑkʲisnu ˈwɪʃtʃu ɔsˈwʲitu, sut͡ʃɐsˈnɪj stuˈdɛnt pɔˈwɪnɛn wɔlɔˈdʲitɪ krɪˈtɪtʃnɪm ˈmɪslɛnʲːɐm] (dlyah TOH-hoh shchohb zdoh-BOO-ty YAH-kees-noo VYSH-choo ohs-VEE-too, soo-chahs-NYY stoo-DEN-teh poh-VY-nen voh-loh-DEE-ty kry-TYCH-nym MYS-len-nyahm)",
          "translation": "In order to obtain a quality higher education, a modern student must possess critical thinking."
        },
        {
          "target": "Уряд ухвалив нові податкові пільги, аби підтримати малий та середній український бізнес.",
          "reading": "[ˈurʲɑd uxˈwɑlɪw nɔˈwʲi pɔdɐtˈkɔwʲi ˈpʲilʲɦɪ, ˈɑbɪ pʲidˈtrɪmɐtɪ mɐˈlɪj tɑ sɛˈrɛdnʲij ukrɐˈjinʲsʲkɪj ˈbʲiznɛs] (OO-ryahd ookh-VAH-lyv noh-VEE poh-daht-KOH-vee PEEL'-hy, AH-by peed-TRY-mah-ty mah-LYY tah seh-RED-neey oo-krah-YEEN-s'kyy BEEZ-nehs)",
          "translation": "The government approved new tax incentives in order to support small and medium Ukrainian businesses."
        },
        {
          "target": "Викладач запропонував додаткові консультації, щоб студенти впевнено склали кваліфікаційний іспит.",
          "reading": "[wɪklɐˈdɑt͡ʃ zɐprɔpɔnuˈwɑw dɔdɐtˈkɔwʲi kɔnsulʲˈtɑt͡sʲiji, ʃtʃɔb stuˈdɛntɪ ˈwpɛwnɛnɔ ˈsklɑlɪ kwɐlʲifʲikɐt͡sʲijˈnɪj ˈispɪt] (vy-klah-DAHCH zah-proh-poh-noo-VAHV doh-daht-KOH-vee kohn-sool'-TAH-tsee-yee, shchohb stoo-DEN-ty VPEHV-neh-noh SKLAH-ly kvah-lee-fee-kah-tseey-NYY EES-pyt)",
          "translation": "The instructor offered additional consultations so that the students would pass the qualification exam confidently."
        }
      ],
      "mnemonics": [
        "Один діяч — «щоб зробити» (інфінітив); різні діячі — «щоб вони зробили» (минулий час)!"
      ],
      "culturalNotes": [
        "Сполучник «аби» в класичній та сучасній українській літературі підкреслює рішучість і цілеспрямованість героїв."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну граматичну форму дієслова в реченні з різними суб'єктами «Мати відчинила вікно, щоб у кімнату ... свіже повітря»:",
          "options": [
            "Зайшло (Past tense form for different subjects with purpose conjunction щоб)",
            "Зайти",
            "Зайде",
            "Заходити"
          ],
          "answerIndex": 0,
          "explanation": "Оскільки суб'єкти різні (мати і повітря), у підрядній частині мети вживається форма минулого часу: «щоб зайшло»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який сполучник є цільовим (виражає мету дії)?",
          "options": [
            "Для того щоб (Purpose conjunction)",
            "Через те що",
            "Так що",
            "Немовби"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник «для того щоб» приєднує підрядні речення мети."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому цільове складнопідрядне речення побудовано бездоганно:",
          "options": [
            "Ми об'єднали свої зусилля, аби наша рідна країна стала квітучою та сильною.",
            "Ми об'єднали свої зусилля, що б країна стане сильною.",
            "Ми об'єднали свої зусилля, бо країна стати сильною.",
            "Ми об'єднали зусилля так що країна стала сильною."
          ],
          "answerIndex": 0,
          "explanation": "«Аби» — нормативний сполучник мети з дієсловом минулого часу «стала»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u20-l3": {
    "id": "uk-u20-l3",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 3,
    "title": "Складнопідрядні речення наслідку: розрізнення «так що» vs «так, що»",
    "level": "B2",
    "objective": "Опанувати синтаксис та пунктуацію підрядних речень наслідку зі сполучником «так що» та навчитися безпомилково розрізняти їх зі складнопідрядними способу дії «так, що».",
    "presentation": {
      "explanation": "Складнопідрядні речення наслідку виражають висновок, наслідок чи результат, який випливає зі змісту всієї головної частини:\n\n1. Складнопідрядні речення наслідку (Result Clause):\n   - Приєднуються неподільним сполучником «ТАК ЩО».\n   - До підрядної частини можна поставити питання «і який наслідок цього? і що з цього вийшло?».\n   - ПУНКТУАЦІЯ: Кома ставиться виключно ПЕРЕД усім сполучником «так що» (всередині сполучника коми бути не може!):\n     * «Пішов густий лапатий сніг, так що дорогу засипало за лічені хвилини».\n     * «Експеримент завершився повним тріумфом, так що всі сумніви остаточно розвіялися».\n\n2. КРИТИЧНЕ РОЗРІЗНЕННЯ: «так що» (наслідок) vs «так, що» (спосіб дії та ступінь):\n   - Наслідок (кома перед «так що»): «Ми прийшли вчасно, так що зустріч розпочалася без запізнення» (висновок зі всієї ситуації).\n   - Спосіб дії / міра і ступінь (вказівне слово «так» у головній частині + сполучник «що» в підрядній; кома МІЖ ними):\n     * «Він говорив ТАК переконливо, ЩО всі присутні повірили кожному його слову» (говорив як? у якій мірі? — так переконливо);\n     * «Студент втомився ТАК сильно, ЩО ледве дійшов додому».",
      "examples": [
        {
          "target": "Вночі вдарив сильний мороз, так що вся поверхня річки вкрилася міцною прозорою кригою.",
          "reading": "[wnɔˈtʃʲi ˈwdɑrɪw ˈsʲilʲnɪj mɔˈrɔz, tɑk ʃtʃɔ wˈsʲɑ pɔˈwɛrxnʲɑ ˈrʲitʃkɪ ˈwkrɪlɐsʲɑ ˈmʲit͡snɔju prɔˈzɔrɔju ˈkrɪɦɔju] (vnoh-CHEE VDAH-ryv SEEL'-nyy moh-ROHZ, tahk shchoh VSYAH poh-VEHRKH-nyah REECH-ky VKRY-lahs'-yah MEETS-noh-yoo proh-ZOH-roh-yoo KRY-hoh-yoo)",
          "translation": "A severe frost struck during the night, so that the entire surface of the river became covered with thick transparent ice."
        },
        {
          "target": "Актор декламував поезію Тараса Шевченка так натхненно, що в залі запанувала цілковита тиша.",
          "reading": "[ɐkˈtɔr dɛklɐmuˈwɑw pɔˈɛzʲiju tɐˈrɑsɐ ʃɛwˈtʃɛnkɐ tɑk nɐtxˈnɛnnɔ, ʃtʃɔ w ˈzɑlʲi zɐpɐnuˈwɑlɐ t͡sʲilkɔˈwɪtɐ ˈtɪʃɐ] (ahk-TOHR deh-klah-moo-VAHV poh-eh-ZEE-yoo tah-RAH-sah shehv-CHEN-kah tahk naht-KHNEN-noh, shchoh v ZAH-lee zah-pah-noo-VAH-lah tsee-lkoh-VY-tah TY-shah)",
          "translation": "The actor recited Taras Shevchenko's poetry so inspirationally that complete silence fell in the hall."
        },
        {
          "target": "Усі наукові доповіді підготували завчасно, так що засідання секції пройшло напрочуд плідно.",
          "reading": "[uˈsʲi nɐuˈkɔwʲi dɔpɔˈwʲidʲi pʲidɦɔtuˈwɑlɪ zɐwˈtʃɑsnɔ, tɑk ʃtʃɔ zɐˈsʲidɐnʲːɑ ˈsɛkt͡sʲiji prɔjˈʃlɔ nɐprɔˈtʃud ˈplʲidnɔ] (oo-SEE nah-oo-KOH-vee doh-poh-VEE-dee peed-hoh-too-VAH-ly zahv-CHAH-snoh, tahk shchoh zah-SEE-dahn-nyah SEHK-tsee-yee prohy-SHLOH nah-proh-CHOOD PLEED-noh)",
          "translation": "All scientific presentations were prepared in advance, so that the section session proceeded remarkably fruitfully."
        }
      ],
      "mnemonics": [
        "Кома перед «так що» — це наслідок усього речення! Кома між «так» і «що» — це відповідь на питання «як саме?»!"
      ],
      "culturalNotes": [
        "Пунктуаційний аналіз пари «так що» / «так, що» є класичною тестовою пасткою на іспитах з синтаксису української мови."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "У якому реченні сполучник «так що» виражає наслідок і потребує коми тільки перед словом «так»?",
          "options": [
            "Злива розмила ґрунтову дорогу, так що проїхати автомобілем було неможливо. (Result clause with monolithic conjunction так що)",
            "Він кричав так що, голос зірвав.",
            "Він біг так, що втомився.",
            "Співали так, що чути було скрізь."
          ],
          "answerIndex": 0,
          "explanation": "У першому реченні «так що» є цілісним сполучником наслідку, тому кома ставиться перед ним."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке питання ставиться до підрядної частини речення наслідку («..., так що...»)?",
          "options": [
            "І який наслідок цього? (And what is the consequence of this?)",
            "З якою метою?",
            "Яким способом?",
            "За якої умови?"
          ],
          "answerIndex": 0,
          "explanation": "Речення наслідку відповідають на питання «і який наслідок цього?»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення способу дії та ступеня, в якому кому поставлено МІЖ словами «так» і «що»:",
          "options": [
            "Оратор говорив так палко й переконливо, що переконав навіть найзапекліших опонентів.",
            "Оратор говорив палко, так що переконав усіх опонентів.",
            "Оратор говорив, так що всі повірили.",
            "Оратор говорив так що, переконав усіх."
          ],
          "answerIndex": 0,
          "explanation": "У варіанті «говорив так палко, що...» слово «так» є прислівником міри і ступеня, а «що» — сполучником способу дії."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u20-l4": {
    "id": "uk-u20-l4",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 4,
    "title": "Складнопідрядні речення порівняльні та способу дії: як, мов, немов, наче, ніби",
    "level": "B2",
    "objective": "Опанувати синтаксис порівняльних складнопідрядних речень та речень способу дії, реєстр порівняльних сполучників (як, мов, немов, наче, неначе, ніби, мовбито) та їх образну стилістику.",
    "presentation": {
      "explanation": "Складнопідрядні порівняльні речення пояснюють зміст головної частини шляхом образного порівняння з іншою дією, станом або явищем:\n\n1. Багатство українських порівняльних сполучників:\n   - «ЯК» — нейтральний, найпоширеніший порівняльний сполучник:\n     * «Він виконав завдання саме так, як радив досвідчений професор».\n   - «МОВ / НЕMOB / МОВБИТО» — поетичні, художні сполучники:\n     * «Дніпро шумить, мов старий богатир розмовляє з вітром».\n   - «НАЧЕ / НЕНАЧЕ / НАЧЕБТО» — сполучники з відтінком удаваної чи уявної дії:\n     * «Хмари пливли так низько, наче торкалися верхівок смерек».\n   - «НІБИ / НІБИТО» — сполучники припущення та образного порівняння:\n     * «У лісі запанувала тиша, ніби вся природа затамувала подих».\n\n2. Порівняльне підрядне речення vs Порівняльний зворот:\n   - Порівняльне РЕЧЕННЯ має свій граматичний присудок (або пропущений присудок, що відновлюється з контексту):\n     * «Дівчина співала так дзвінко, як дзвенить чистий кришталевий струмок».\n   - Порівняльний ЗВОРОТ не має присудка і виступає другорядним членом речення:\n     * «Голос дівчини дзвенів, як кришталевий струмок».\n\n3. Пунктуація: Порівняльні підрядні частини завжди виділяються комами.",
      "examples": [
        {
          "target": "Золоті пшеничні ниви хвилювалися під теплим вітром, наче безкрає золотаве море.",
          "reading": "[zɔlɔˈtʲi pʃɛˈnɪtʃnʲi ˈnɪwɪ xwʲilʲuˈwɑlɪsʲɑ pʲid ˈtɛplɪm ˈwʲitrɔm, ˈnɑtʃɛ bɛzˈkrɑjɛ zɔlɔˈtɑwɛ ˈmɔrɛ] (zoh-loh-TEE psheh-NYCH-nee NY-vy khwy-lyoo-VAH-lys'-yah peed TEP-lym VEET-rohm, NAH-cheh bez-KRAH-yeh zoh-loh-TAH-weh MOH-reh)",
          "translation": "Golden wheat fields were undulating under the warm wind, like a boundless golden sea."
        },
        {
          "target": "Студенти виконали науковий проєкт саме так, як вимагали міжнародні академічні стандарти.",
          "reading": "[stuˈdɛntɪ wɪˈkɔnɐlɪ nɐuˈkɔwɪj prɔˈjɛkt ˈsɑmɛ tɑk, jɐk wɪmɐˈɦɑlɪ mʲiʒnɐˈrɔdnʲi ɐkɐdɛˈmʲitʃnʲi stɐnˈdɑrtɪ] (stoo-DEN-ty vy-KOH-nah-ly nah-oo-KOH-vyy proh-YEHKT SAH-meh tahk, yahk vy-mah-HAH-ly meezh-nah-ROHD-nee ah-kah-deh-MEECH-nee stahn-DAHR-ty)",
          "translation": "The students completed the scientific project precisely as international academic standards required."
        },
        {
          "target": "Старий дуб стояв непохитно й величаво, немов охороняв вічний спокій прадавнього лісу.",
          "reading": "[stɐˈrɪj dub stɔˈjɑw nɛpɔˈxɪtnɔ j wɛlɪˈtʃɑwɔ, nɛˈmɔw ɔxrɔnʲɑw ˈwʲitʃnɪj spɔˈkʲij prɐˈdɑwnʲɔɦɔ ˈlʲisu] (stah-RYY doob stoh-YAHV neh-poh-KHYT-noh y veh-ly-CHAH-woh, neh-MOHV oh-khroh-NYAHV VEETCH-nyy spoh-KEEY prah-DAHV-nyoh-hoh LEE-soo)",
          "translation": "The ancient oak stood unshakably and majestically, as though guarding the eternal peace of the ancient forest."
        }
      ],
      "mnemonics": [
        "Порівнюєш образно — обирай найбагатшу палітру: «як, мов, немов, наче, ніби» — і завжди став кому!"
      ],
      "culturalNotes": [
        "Система порівняльних сполучників в українській мові є однією з найбагатших у Європі, увічнюючи фольклорну поетичність народного світогляду."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть поетичний порівняльний сполучник для речення «Шумлять смереки, ... розмовляють давні легенди»:",
          "options": [
            "Немов (Poetic comparative conjunction expressing simile)",
            "Через те що",
            "Так що",
            "Для того щоб"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник «немов» є виразним поетичним засобом для порівняльних речень."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке значення має сполучник «наче» у складнопідрядному реченні?",
          "options": [
            "Порівняння та припущення (Comparative and hypothetical simile)",
            "Пряма причина",
            "Час дії",
            "Категоричний наслідок"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник «наче» вказує на образне порівняння або припущення."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з правильно оформленим порівняльним складнопідрядним зв'язком:",
          "options": [
            "Сонце світило так яскраво, наче літо знову повернулося до нашого міста.",
            "Сонце світило яскраво наче, літо повернулося.",
            "Сонце світило, через те наче літо повернулося.",
            "Сонце світило так що наче повернулося."
          ],
          "answerIndex": 0,
          "explanation": "Підрядна частина зі сполучником «наче» відокремлена комою від головної частини."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u20-l5": {
    "id": "uk-u20-l5",
    "subject": "ukrainian",
    "unit": 20,
    "lessonNumber": 5,
    "title": "Складні речення з кількома підрядними: послідовна, однорідна та неоднорідна підпорядкованість",
    "level": "B2",
    "objective": "Опанувати синтаксичну архітектуру та пунктуацію складних речень із кількома підрядними (послідовна, однорідна паралельна та неоднорідна супідрядність, збіг сполучників що коли / що якби).",
    "presentation": {
      "explanation": "Складнопідрядні речення можуть містити дві або більше підрядних частин, які поєднуються за трьома основними типами підпорядкування:\n\n1. Послідовна підпорядкованість (Sequential Subordination):\nПерша підрядна частина залежить від головної, друга підрядна — від першої підрядної і так далі за ланцюжком (Головна -> Підрядна 1 -> Підрядна 2):\n   - «Ми знаємо [Головна], що наука розвивається настільки стрімко [Підрядна 1 з'ясувальна], що майбутнє наближається щодня [Підрядна 2 міри й ступеня]».\n   - Збіг двох сполучників (що коли, що якби, що хоч): кома МІЖ ними ставиться, якщо в другій частині немає співвідносного слова «то / так» («Я знав, що, якби ми не поспішили, ми б запізнилися»).\n\n2. Однорідна підпорядкованість (Homogeneous Subordination):\nКілька підрядних частин однакового типу відповідають на те саме питання і залежать від одного й того самого слова в головній частині:\n   - «Ми твердо віримо [Головна], що правда обов'язково переможе [Підрядна 1] і що справедливість запанує на нашій землі [Підрядна 2]».\n   - ПРАВИЛО ПУНКТУАЦІЇ: Якщо дві однорідні підрядні частини з'єднані неповторюваним єднальним сполучником «І / ТА», кома між ними НЕ ставиться (як при однорідних членах речення!).\n\n3. Неоднорідна (паралельна) підпорядкованість (Heterogeneous Subordination):\nКілька підрядних частин різного типу відповідають на різні питання або залежать від різних слів головної частини:\n   - «Коли закінчився дощ [Підрядна часу], ми вийшли на подвір'я [Головна], щоб подихати свіжим повітрям [Підрядна мети]».",
      "examples": [
        {
          "target": "Коли над містом зійшло сонце, дослідники вирушили в гори, щоб зібрати рідкісні альпійські рослини.",
          "reading": "[kɔˈlɪ nɐd ˈmʲistɔm ˈzijʃlɔ ˈsɔnt͡sɛ, dɔsʲˈlʲidnɪkɪ ˈwɪruʃɪlɪ w ˈɦɔrɪ, ʃtʃɔb zʲiˈbrɑtɪ ˈrʲidkʲisnʲi ɐlʲˈpʲijsʲkʲi rɔsˈlɪnɪ] (koh-LY nahd MEES-tohm ZEEY-shloh SOHN-tseh, dohs-LEED-ny-ky VY-roo-shy-ly v HOH-ry, shchohb zee-BRAH-ty REED-kees-nee ahl'-PEEY-s'kee rohs-LY-ny)",
          "translation": "When the sun rose over the city, the researchers set out into the mountains to collect rare alpine plants."
        },
        {
          "target": "Ми глибоко переконані, що українська культура є самобутньою і що вона збагачує скарбницю людства.",
          "reading": "[mɪ ɦlɪbɔˈkɔ pɛrɛˈkɔnɐnʲi, ʃtʃɔ ukrɐˈjinʲsʲkɐ kulʲˈturɐ jɛ sɐmɔˈbutnʲɔju i ʃtʃɔ wɔˈnɑ zbɐˈɦɑtʃujɛ skɑrbˈnɪt͡sʲu ˈlʲudstwɐ] (my hly-boh-KOH peh-reh-KOH-nah-nee, shchoh oo-krah-YEEN-s'kah kool'-TOO-rah yeh sah-moh-BOOT-nyoh-yoo ee shchoh voh-NAH zbah-HAH-choo-yeh skahrb-NYTS-yoo LYUDS-tvah)",
          "translation": "We are deeply convinced that Ukrainian culture is original and that it enriches the treasury of humanity."
        },
        {
          "target": "Я переконаний, що, якби ми не підтримували один одного щодня, ми не змогли б подолати ці важкі випробування.",
          "reading": "[jɑ pɛrɛˈkɔnɐnɪj, ʃtʃɔ, jɐkˈbɪ mɪ nɛ pʲidˈtrɪmuwɐlɪ ˈɔdɪn ˈɔdnɔɦɔ ʃtʃɔdʲˈnʲɑ, mɪ nɛ ˈzmɔɦlɪ b pɔdɔˈlɑtɪ t͡sʲi wɑʒˈkʲi wɪprɔbuˈwɑnʲːɑ] (yah peh-reh-KOH-nah-nyy, shchoh, yahk-BY my neh peed-TRY-moo-vah-ly OH-dyn OHD-noh-hoh shchohd-NYAH, my neh ZMOHH-ly b poh-doh-LAH-ty TSEE vahzh-KEE vy-proh-boo-VAHN-nyah)",
          "translation": "I am convinced that if we had not supported one another every day, we would not have been able to overcome these hard trials."
        }
      ],
      "mnemonics": [
        "Однорідні підрядні з «і» — кому не ставимо («віримо, що... і що...»); на збігу «що, якби...» — ставимо кому, якщо далі немає «то»!"
      ],
      "culturalNotes": [
        "Синтаксичні періоди з кількома типами підрядності притаманні стилю видатних українських філософів та ораторів: Григорія Сковороди, Івана Франка, Дмитра Донцова."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Чи ставиться кома перед сполучником «і» між двома однорідними підрядними в реченні «Я знаю, що день настане і що світло переможе»?",
          "options": [
            "Ні, кома не ставиться (No comma between homogeneous subordinate clauses joined by single conjunction і)",
            "Так, кома обов'язкова перед і",
            "Ставиться тире",
            "Ставиться двокрапка"
          ],
          "answerIndex": 0,
          "explanation": "Між двома однорідними підрядними частинами, з'єднаними неповторюваним сполучником «і», кома не ставиться."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який тип підпорядкування представлено в реченні «Коли прийшла весна, птахи повернулися до рідного краю, щоб звити нові гнізда»?",
          "options": [
            "Неоднорідна (паралельна) підпорядкованість (Heterogeneous subordination: time and purpose clauses)",
            "Послідовна підпорядкованість",
            "Однорідна підпорядкованість",
            "Безсполучниковий зв'язок"
          ],
          "answerIndex": 0,
          "explanation": "Обидві підрядні частини (часу «Коли...» та мети «щоб...») залежать від однієї головної частини, але відповідають на різні питання."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ розділові знаки при кількох підрядних частинах розставлено бездоганно:",
          "options": [
            "Ми знаємо, що, коли настане слушний час, наші зусилля принесуть очікувані плоди.",
            "Ми знаємо що коли настане час наші зусилля принесуть плоди.",
            "Ми знаємо, що коли настане час, наші зусилля принесуть плоди.",
            "Ми знаємо, що, коли настане час то наші зусилля принесуть плоди."
          ],
          "answerIndex": 0,
          "explanation": "На збігу сполучників «що, коли» кома ставиться, оскільки в головній частині немає другої частини «то»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u21-l1": {
    "id": "uk-u21-l1",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 1,
    "title": "Складнопідрядні допустові речення: хоча, хоч, дарма що",
    "level": "B2",
    "objective": "Опанувати семантику та синтаксис складнопідрядних допустових речень з питомими сполучниками хоч, хоча та дарма що, їх пунктуацію та взаємозв'язок із сурядними сполучниками але, проте, однак.",
    "presentation": {
      "explanation": "Складнопідрядні допустові речення виражають обставину або умову, всупереч якій відбувається дія головної частини, і відповідають на питання «незважаючи на що? всупереч чому?»:\n\n1. Основні допустові сполучники:\n   - «ХОЧ / ХОЧА» — універсальні допустові сполучники, вживані в усіх стилях:\n     * «Хоча надворі лютував лютий мороз, у хаті панував затишок і тепло».\n   - «ДАРМА ЩО» — надзвичайно колоритний, питомий український допустовий сполучник, синонімічний до «хоч і, незважаючи на те що»:\n     * «Дарма що сонце вже сховалося за обрій, вечірнє небо ще палахкотіло багрянцем».\n     * «Дарма що дорога була складною, мандрівники не втрачали бадьорості духу».\n\n2. Співвідносні сполучники в головній частині (Корелятивні пари):\nКоли допустова підрядна частина стоїть ПЕРЕД головною, головна частина нерідко починається протиставними сполучниками «але, проте, однак, зате, все ж»:\n   - «Хоч праця була важкою, АЛЕ результат перевершив усі наші сподівання».\n\n3. Пунктуація: Підрядна допустова частина завжди виділяється комою або комами (на початку, всередині чи в кінці речення).",
      "examples": [
        {
          "target": "Дарма що осінній вітер був пронизливим і холодним, прогулянка старовинними вуличками Львова принесла нам море задоволення.",
          "reading": "[dɐrˈmɑ ʃtʃɔ ɔˈsʲinʲːij ˈwʲitɛr buw prɔnɪzˈlɪwɪm i xɔˈlɔdnɪm, prɔˈɦulʲkɐ stɐrɔˈwɪnnɪmɪ ˈwulɪtʃkɐmɪ ˈlʲwɔwɐ prɪnɛsˈlɑ nɑm ˈmɔrɛ zɐdɔˈwɔlʲɛnʲːɑ] (dahr-MAH shchoh oh-SEEN-neey VEET-ehr boov proh-nyz-LY-wym ee khoh-LOHD-nym, proh-HOOL'-kah stah-roh-VYN-ny-my VOO-lych-kah-my L'VOH-vah pry-nehs-LAH nahm MOH-reh zah-doh-VOH-len-nyah)",
          "translation": "Even though the autumn wind was piercing and cold, the walk through the ancient streets of Lviv brought us plenty of pleasure."
        },
        {
          "target": "Хоча завдання здавалося неймовірно складним, інженери зуміли знайти елегантне технічне рішення.",
          "reading": "[xɔˈtʃɑ zɐwˈdɑnʲːɑ zdɐˈwɑlɔsʲɑ nɛjmɔˈwʲirnɔ ˈsklɑdnɪm, inʒɛˈnɛrɪ zuˈmʲilɪ znɑjˈtɪ ɛlɛˈɦɑntnɛ tɛxˈnʲitʃnɛ rʲiˈʃɛnʲːɑ] (khoh-CHAH zahv-DAHN-nyah zdah-VAH-lohs'-yah ney-moh-VEER-noh SKLAHD-nym, een-zheh-NEH-ry zoo-MEE-ly znahy-TY eh-leh-HAHNT-neh tekh-NEECH-neh ree-SHEN-nyah)",
          "translation": "Although the task seemed incredibly difficult, the engineers managed to find an elegant technical solution."
        },
        {
          "target": "Українські воїни вистояли в запеклому бою, дарма що сили противника значно переважали.",
          "reading": "[ukrɐˈjinʲsʲkʲi ˈwɔjinɪ wɪsˈtɔjɐlɪ w zɐˈpɛklɔmu bɔˈju, dɐrˈmɑ ʃtʃɔ ˈsɪlɪ prɔˈtɪwnɪkɐ ˈznɑtʃnɔ pɛrɛwɐˈʒɑlɪ] (oo-krah-YEEN-s'kee VOH-yee-ny vys-TOH-yah-ly v zah-PEHK-loh-moo boh-YOO, dahr-MAH shchoh SY-ly proh-TYV-ny-kah ZNAHCH-noh peh-reh-vah-ZHAH-ly)",
          "translation": "The Ukrainian warriors held out in fierce battle, even though the enemy's forces were considerably superior."
        }
      ],
      "mnemonics": [
        "«Дарма що» — питома українська окраса допустового зв'язку! Означає «хоч і», «незважаючи на те що»!"
      ],
      "culturalNotes": [
        "Сполучник «дарма що» є яскравою рисою живої української народної мови, збереженої у класичній прозі Михайла Коцюбинського та Григора Тютюнника."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть питомий український допустовий сполучник, синонімічний до «хоча»:",
          "options": [
            "Дарма що (Authentic Ukrainian concessive conjunction synonymous with although)",
            "Через те що",
            "Для того щоб",
            "Так що"
          ],
          "answerIndex": 0,
          "explanation": "Сполучник «дарма що» є питомим українським допустовим сполучником зі значенням «незважаючи на те що / хоча»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке смислове питання ставиться до підрядної допустової частини («Хоча йшов дощ, ми вирушили в дорогу»)?",
          "options": [
            "Незважаючи на що? Всупереч чому? (In spite of what?)",
            "З якою метою?",
            "Через що?",
            "У який спосіб?"
          ],
          "answerIndex": 0,
          "explanation": "До підрядних допустових частин ставляться питання «всупереч чому? незважаючи на що?»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть складнопідрядне допустове речення:",
          "options": [
            "Дарма що літа пливуть невпинно, серце поета залишається вічно молодим.",
            "Коли літа пливуть невпинно, людина набуває життєвого досвіду.",
            "Літа пливуть так швидко, що ми не помічаємо плину часу.",
            "Якщо літа пливуть, треба цінувати кожну мить."
          ],
          "answerIndex": 0,
          "explanation": "Перше речення містить підрядну допустову частину зі сполучником «дарма що»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u21-l2": {
    "id": "uk-u21-l2",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 2,
    "title": "Офіційно-ділові допустові сполучники: незважаючи на те що, попри те що",
    "level": "B2",
    "objective": "Опанувати офіційно-ділові та наукові допустові сполучники (незважаючи на те що, попри те що, всупереч тому що), розрізнення прийменникових конструкцій та підрядних частин і правила їх пунктуації.",
    "presentation": {
      "explanation": "В офіційно-діловому, публіцистичному та науковому стилях допустовий зв'язок виражається за допомогою складених сполучників та прийменникових оборотів:\n\n1. Складені допустові сполучники (приєднують підрядні речення з граматичною основою):\n   - «НЕЗВАЖАЮЧИ НА ТЕ ЩО» — офіційний допустовий сполучник (пишеться окремо в 4 слова; «незважаючи» разом із «не»!):\n     * «Незважаючи на те що бюджет був обмеженим, програму виконали в повному обсязі».\n   - «ПОПРИ ТЕ ЩО» — сучасний книжний та публіцистичний сполучник:\n     * «Попри те що переговори були напруженими, сторони підписали взаємовигідну угоду».\n   - «ВСУПЕРЕЧ ТОМУ ЩО» — підкреслює пряму протидію чи конфлікт обставин:\n     * «Всупереч тому що прогнози були песимістичними, врожай виявився рекордним».\n\n2. Розрізнення: Сполучник vs Прийменниковий оборот:\n   - Сполучник + підрядне речення (є підмет і присудок): «Попри те, що йшов сніг, ми вийшли на прогулянку».\n   - Прийменник + іменник (без дієслова): «Попри сніг, ми вирушили в дорогу» / «Незважаючи на мороз, матч відбувся» (відокремлюється комами як обставина допусту).\n\n3. Правопис слова «незважаючи»:\nПрийменник та сполучник «незважаючи на» пишеться разом («незважаючи»). Якщо ж це дієприслівник від дієслова «зважати» (дивитися) з прямим запереченням — пишеться окремо: «Він ішов уперед, не зважаючи на знаки перехожих» (= не звертаючи уваги).",
      "examples": [
        {
          "target": "Незважаючи на те що геополітична ситуація залишається складною, Україна впевнено прямує до членства в Європейському Союзі.",
          "reading": "[nɛzwɐˈʒɑjutʃɪ nɑ tɛ ʃtʃɔ ɦɛɔpɔˈlʲitɪtʃnɐ sɪtuˈɑt͡sʲijɑ zɐlɪˈʃɑjɛtʲsʲɑ ˈsklɑdnɔju, ukrɐˈjinɐ ˈwpɛwnɛnɔ prʲɑˈmujɛ dɔ ˈtʃlɛnstxɐ w jɛwrɔpɛjˈsʲkɔmu sɔˈjuzʲi] (nez-vah-ZHAH-yoo-chy nah teh shchoh heh-oh-poh-LEE-ty-chnah sy-too-AH-tsee-yah zah-ly-SHAH-yeht'-syah SKLAHD-noh-yoo, oo-krah-YEE-nah VPEHV-neh-noh pryah-MOO-yeh doh CHLEN-stvah v yev-roh-PEY-s'koh-moo soh-YOO-zee)",
          "translation": "Despite the fact that the geopolitical situation remains complex, Ukraine is moving forward confidently toward European Union membership."
        },
        {
          "target": "Попри те що науковий експеримент тривав кілька місяців, учені зуміли повністю перевірити робочу гіпотезу.",
          "reading": "[ˈpɔprɪ tɛ ʃtʃɔ nɐuˈkɔwɪj ɛkspɛrɪˈmɛnt trɪˈwɑw ˈkʲilʲkɐ ˈmʲisʲɑt͡sʲiw, uˈtʃɛnʲi zuˈmʲilɪ ˈpɔwnʲisʲtʲu pɛrɛˈwʲirɪtɪ rɔˈbɔtʃu ɦʲiˈpɔtɛzu] (POH-pry teh shchoh nah-oo-KOH-vyy eks-peh-ry-MEHNT try-VAHV KEEL'-kah MEE-syah-tseew, oo-CHEH-nee zoo-MEE-ly POHV-nees-tyoo peh-reh-VEER-y-ty roh-BOH-choo hee-POH-teh-zoo)",
          "translation": "Despite the fact that the scientific experiment lasted several months, the scientists managed to completely verify the working hypothesis."
        },
        {
          "target": "Всупереч усім несприятливим прогнозам погоди, святковий концерт просто неба зібрав тисячі глядачів.",
          "reading": "[wsuˈpɛrɛtʃ uˈsʲim nɛsprɪˈjɑtlɪwɪm prɔɦˈnɔzɐm pɔˈɦɔdɪ, swʲɑtˈkɔwɪj kɔnˈt͡sɛrt ˈprɔstɔ ˈnɛbɐ zʲiˈbrɑw ˈtɪsʲɑtʃʲi ɦlʲɑdɐˈtʃʲiw] (vsoo-PEH-rehch oo-SEEM neh-spry-YAHT-ly-wym prohh-NOH-zahm poh-HOH-dy, svyaht-KOH-vyy kohn-TSEHRT PROHS-toh NEH-bah zee-BRAHV TY-syah-chee hlyah-dah-CHEEW)",
          "translation": "In spite of all unfavorable weather forecasts, the open-air festive concert gathered thousands of spectators."
        }
      ],
      "mnemonics": [
        "Допустовий сполучник «незважаючи на те що» — «незважаючи» пишеться РАЗОМ; окремо — тільки дієприслівник: «не зважаючи на крики»!"
      ],
      "culturalNotes": [
        "Конструкції з «попри те що» та «незважаючи на те що» становлять основу сучасної української дипломатичної та правничої термінології."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно написати допустовий сполучник «(не)зважаючи на те що»?",
          "options": [
            "Незважаючи на те що (Together as a single concessive prepositional unit)",
            "Не зважаючи на те що",
            "Незважаючинатещо",
            "Не зважаючі на те що"
          ],
          "answerIndex": 0,
          "explanation": "Слово «незважаючи» у ролі прийменника чи компонента сполучника пишеться разом з часткою «не»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Чим відрізняється конструкція «Попри труднощі» від «Попри те, що виникли труднощі»?",
          "options": [
            "Перша — прийменниковий зворот з іменником, друга — підрядне речення з основою (Prepositional phrase vs subordinate clause)",
            "Не мають жодної різниці",
            "Перша виражає причину, друга мету",
            "Обидві є простими реченнями"
          ],
          "answerIndex": 0,
          "explanation": "«Попри труднощі» — це відокремлена обставина, виражена прийменником з іменником, а «Попри те, що...» — повноцінне складнопідрядне речення з підметом і присудком."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допустову конструкцію оформлено бездоганно:",
          "options": [
            "Попри те що графік був надзвичайно щільним, делегація провела всі заплановані зустрічі.",
            "Не зважаючи на те що графік був щільним делегація провела зустрічі.",
            "По при те що графік був щільним, зустрічі відбулися.",
            "Незважаючи що графік був щільним зустрічі відбулися."
          ],
          "answerIndex": 0,
          "explanation": "У першому варіанті сполучник «попри те що» та розділові знаки вжито абсолютно правильно."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u21-l3": {
    "id": "uk-u21-l3",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 3,
    "title": "Узагальнено-допустові речення: хто б не, що б не, як не, скільки б не",
    "level": "B2",
    "objective": "Опанувати синтаксис та правопис узагальнено-допустових підрядних речень із займенниково-сполучними словами та частками не / б (хто б не, що б не, як не, скільки б не, де б не).",
    "presentation": {
      "explanation": "Узагальнено-допустові речення виражають безумовність здійснення дії за будь-яких можливих обставин:\n\n1. Структура узагальнено-допустових конструкцій:\nУтворюються поєднанням відносних або питальних слів (*хто, що, який, чий, котрий, де, куди, звідки, як, скільки*) з часткою «НЕ» (часто в поєднанні з часткою «Б / БИ»):\n   - «ХТО Б НЕ» — хто б не звернувся по допомогу, двері завжди відчинені;\n   - «ЩО Б НЕ» — що б не трапилося в житті, зберігайте гідність і спокій;\n   - «ДЕ Б НЕ» — де б не був українець у світі, серцем він лине до рідної землі;\n   - «СКІЛЬКИ Б НЕ» — скільки б не минуло століть, спадщина Тараса Шевченка житиме вічно;\n   - «ЯК НЕ» — як не намагалися вороги зламати нашу волю, народ вистояв.\n\n2. ОРФОГРАФІЧНИЙ ПРИНЦИП РОЗРІЗНЕННЯ «що б не» vs «щоб не»:\n   - Узагальнено-допустова конструкція: «ЩО Б НЕ» пишеться ОКРЕМО у три слова (займенник «що» + модальна частка «б» + заперечна частка «не»): «Що б не казали недоброзичливці, правда переможе».\n   - Сполучник мети із запереченням: «ЩОБ НЕ» пишеться у два слова («щоб» разом): «Ми поспішали, щоб не запізнитися на поїзд».\n\n3. Вживання частки «НЕ»:\nЗверніть увагу: в українській літературній мові у таких конструкціях вживається частка «НЕ» (не «ні»): *«Хто б не прийшов...»*, *«Де б не шукали...»*.",
      "examples": [
        {
          "target": "Де б не перебував свідомий українець, він завжди плекає рідну мову та національні традиції.",
          "reading": "[dɛ b nɛ pɛrɛbuˈwɑw swʲiˈdɔmɪj ukrɐˈjinɛt͡sʲ, wʲin zɐwˈʒdɪ plɛˈkɑjɛ ˈrʲidnu ˈmɔwu tɑ nɐt͡sʲiɔˈnɑlʲnʲi trɐˈdɪt͡sʲiji] (deh b neh peh-reh-boo-VAHV swee-DOH-myy oo-krah-YEE-nehts', veen zahv-ZHDY pleh-KAH-yeh REED-noo MOH-voo tah nah-tsee-oh-NAHL'-nee trah-DY-tsee-yee)",
          "translation": "Wherever a conscious Ukrainian may be, he always cherishes the native language and national traditions."
        },
        {
          "target": "Що б не говорили скептики, українська наука має колосальний інтелектуальний потенціал.",
          "reading": "[ʃtʃɔ b nɛ ɦɔwɔˈrɪlɪ ˈskɛptɪkɪ, ukrɐˈjinʲsʲkɐ nɐˈukɐ ˈmɑjɛ kɔlɔˈsɑlʲnɪj intɛlɛktuˈɑlʲnɪj pɔtɛnt͡sʲiˈɑl] (shchoh b neh hoh-woh-RY-ly SKEHP-ty-ky, oo-krah-YEEN-s'kah nah-OO-kah MAH-yeh koh-loh-SAHL'-nyy een-teh-lehk-too-AHL'-nyy poh-ten-tsee-AHL)",
          "translation": "Whatever skeptics might say, Ukrainian science possesses colossal intellectual potential."
        },
        {
          "target": "Скільки б перешкод не виникало на нашому шляху, ми непохитно рухатимемося до поставленої мети.",
          "reading": "[ˈsʲkʲilʲkɪ b pɛrɛʃˈkɔd nɛ wɪnɪˈkɑlɔ nɑ ˈnɑʃɔmu ʃlʲɑˈxu, mɪ nɛpɔˈxɪtnɔ ruˈxɑtɪmɛmɔsʲɑ dɔ pɔsˈtɑwlɛnɔji mɛˈtɪ] (SKEEL'-ky b peh-rehsh-KOHD neh vy-ny-KAH-loh nah NAH-shoh-moo shlyah-KHOO, my neh-poh-KHYT-noh roo-KHAH-ty-meh-mohs'-yah doh pohs-TAHV-leh-noh-yee meh-TY)",
          "translation": "However many obstacles may arise on our path, we will move forward unshakably toward our set goal."
        }
      ],
      "mnemonics": [
        "«Що б не сталося» — пиши у 3 слова (що + б + не)! А «щоб не запізнитися» — пиши у 2 слова (щоб + не)!"
      ],
      "culturalNotes": [
        "Формули типу «Де б не був...», «Хто б не питав...» є класичними засобами утвердження незламності духу в українських патріотичних творах."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний правопис займенниково-допустової фрази «(що/б/не) сталося, ми збережемо єдність»:",
          "options": [
            "Що б не (Three separate words: relative pronoun що + particle б + negative particle не)",
            "Щоб не",
            "Щобне",
            "Що б ні"
          ],
          "answerIndex": 0,
          "explanation": "В узагальнено-допустових реченнях пишеться окремо у три слова: «Що б не»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка частка (не чи ні) нормативно вживається в українських узагальнено-допустових реченнях («Хто б ... прийшов, двері відчинені»)?",
          "options": [
            "Частка «не» (хто б не прийшов - standard Ukrainian norm)",
            "Частка «ні» (хто б ні прийшов)",
            "Частка «ані»",
            "Частка «чи»"
          ],
          "answerIndex": 0,
          "explanation": "В українській літературній мові у таких конструкціях вживається частка «не»: «хто б не прийшов»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому узагальнено-допустову конструкцію записано абсолютно правильно:",
          "options": [
            "Як би важко не було під час сходження на вершину, альпіністи не зупинялися ні на хвилину.",
            "Якби важко не було альпіністи не зупинялися.",
            "Як би важко ні було, альпіністи не зупинялися.",
            "Якби важко ні було альпіністи не зупинялися."
          ],
          "answerIndex": 0,
          "explanation": "«Як би важко не було» пишеться окремо з часткою «не» та відокремлюється комою."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u21-l4": {
    "id": "uk-u21-l4",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 4,
    "title": "Аналітично-допустові речення з частками хай, нехай",
    "level": "B2",
    "objective": "Опанувати допустові конструкції з модальними частками хай / нехай, їх синтаксичну функцію, зв'язок із сурядними протиставними сполучниками та високий стилістичний регістр.",
    "presentation": {
      "explanation": "Аналітично-допустові речення з частками «хай / нехай» виражають готовність суб'єкта змиритися з перешкодами або допустити будь-який перебіг подій заради головної мети:\n\n1. Структура конструкцій з «хай / нехай»:\nПідрядна частина починається модальною часткою «хай / нехай» + дієслово дійсного або умовного способу. Головна частина приєднується протиставними сполучниками «але, та (= але), проте, однак, все ж»:\n   - «Хай лютує мороз і вітер [допустова частина], АЛЕ наше вогнище не згасне ніколи [головна частина]»;\n   - «Нехай шлях буде довгим і тернистим, МИ обов'язково дійдемо до заповітної мети».\n\n2. Стилістичний реєстр:\nКонструкції з «хай / нехай» належать до піднесеного публіцистичного, ораторського та поетичного стилів. Вони надають висловленню експресивної динаміки та урочистості:\n   - «Хай що кажуть вороги, сонце правди зійде над нашою рідною землею».\n\n3. Пунктуація:\nМіж допустовою частиною з «хай / нехай» та головною частиною ОБОВ'ЯЗКОВО ставиться кома (зокрема перед протиставними сполучниками але, проте, однак).",
      "examples": [
        {
          "target": "Хай буде важкою наша праця, проте її плоди принесуть користь багатьом прийдешнім поколінням.",
          "reading": "[xɑj ˈbudɛ wɑʒˈkɔju ˈnɑʃɐ ˈprɑt͡sʲɑ, prɔˈtɛ jiji plɔˈdɪ prɪnɛˈsutʲ kɔˈrɪsʲtʲ bɐˈɦɑtʲɔm prɪjˈdɛʃnʲim pɔkɔˈlʲinʲːɑm] (khahy BOO-deh vahzh-KOH-yoo NAH-shah PRAH-tsyah, proh-TEH yee-YEE phloh-DY pry-neh-SOOT' koh-RYST' bah-HAHT-yohm pryy-DESH-neem poh-koh-LEEN-nyahm)",
          "translation": "Let our labor be hard, yet its fruits will bring benefit to many future generations."
        },
        {
          "target": "Нехай за вікном вирує несамовита заметіль, у нашій затишній оселі завжди горить теплий родинний вогник.",
          "reading": "[nɛˈxɑj zɑ wʲikˈnɔm wɪˈrujɛ nɛsɐmɔˈwɪtɐ zɐmɛˈtʲilʲ, u ˈnɑʃʲij ˈzɑtɪʃnʲij ɔˈsɛlʲi zɐwˈʒdɪ ɦɔˈrɪtʲ ˈtɛplɪj rɔˈdɪnnɪj ˈwɔɦnɪk] (neh-KHAHY zah veek-NOHM vy-ROO-yeh neh-sah-moh-VY-tah zah-meh-TEEL', oo NAH-sheey ZAH-tysh-neey oh-SEH-lee zahv-ZHDY hoh-RYT' TEP-lyy roh-DYN-nyy VOHH-nyk)",
          "translation": "Even though a frantic blizzard rages outside the window, a warm family light always burns in our cozy home."
        },
        {
          "target": "Хай вороги плетуть підступні інтриги, український народ надійно захищає свою свободу та незалежність.",
          "reading": "[xɑj wɔrɔˈɦɪ plɛˈtutʲ pʲidˈstupnʲi inˈtrɪɦɪ, ukrɐˈjinʲsʲkɪj nɐˈrɔd nɐˈdʲijnɔ zɐxɪˈʃtʃɑjɛ swɔˈju swɔˈbɔdu tɑ nɛzɐˈlɛʒnʲisʲtʲ] (khahy woh-roh-HY pleh-TOOT' peed-STOOP-nee een-TRY-hy, oo-krah-YEEN-s'kyy nah-ROHD nah-DEEY-noh zah-khysh-CHAH-yeh swoh-YOO swoh-BOH-doo tah neh-zah-LEHZH-neest')",
          "translation": "Though enemies spin insidious intrigues, the Ukrainian people reliably protect their freedom and independence."
        }
      ],
      "mnemonics": [
        "«Хай... але...», «Нехай... проте...» — це пафос мужності та допустової сили в українській мові!"
      ],
      "culturalNotes": [
        "Конструкції з «хай / нехай» звучать у культових творах Івана Франка («Нехай впаде ще один із нас...») та Лесі Українки («Хай лютує злий мороз...»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний протиставний сполучник для завершення допустового періоду «Хай шлях наш буде важким, ... ми дійдемо до вершини»:",
          "options": [
            "Але / проте (Adversative conjunction completing concessive period with хай)",
            "Бо",
            "Щоб",
            "Немов"
          ],
          "answerIndex": 0,
          "explanation": "Конструкція з «хай» у підрядній частині гармонійно поєднується з протиставними сполучниками «але / проте / однак» у головній частині."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "До якого стилю мовлення насамперед належать речення типу «Хай лютує буря, ми не схилимо прапорів»?",
          "options": [
            "Публіцистичний, ораторський та поетичний стиль (Elevated rhetorical, journalistic, and poetic style)",
            "Розмовно-побутовий",
            "Офіційно-діловий протокол",
            "Виробничо-технічний"
          ],
          "answerIndex": 0,
          "explanation": "Допустові речення з частками «хай / нехай» виражають високий пафос, притаманний поезії та публіцистиці."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому допустову конструкцію з часткою «нехай» пунктуаційно оформлено правильно:",
          "options": [
            "Нехай ніч буде темною й холодною, проте ранкове сонце обов'язково осяє весь світ.",
            "Нехай ніч буде темною проте сонце осяє світ.",
            "Нехай ніч темна бо сонце осяє світ.",
            "Нехай ніч буде темною так що сонце осяє світ."
          ],
          "answerIndex": 0,
          "explanation": "Між підрядною частиною з «нехай» та головною частиною зі сполучником «проте» поставлено кому."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u21-l5": {
    "id": "uk-u21-l5",
    "subject": "ukrainian",
    "unit": 21,
    "lessonNumber": 5,
    "title": "Пунктуаційна та синтаксична майстерність допустових конструкцій",
    "level": "B2",
    "objective": "Опанувати досконалу пунктуацію всіх типів допустових речень, взаємодію підрядності та сурядності, вживання вставних допустових слів (щоправда, правда) та запобігання синтаксичним збоям.",
    "presentation": {
      "explanation": "Пунктуаційна та синтаксична культура вживання допустових конструкцій вимагає знання кількох важливих тонкощів:\n\n1. Пунктуація при подвійних (корелятивних) сполучниках:\n   - У парах «Хоч..., але / проте / однак...», «Дарма що..., все ж...» кома ставиться ТІЛЬКИ ОДИН РАЗ — між підрядною та головною частинами (перед але/проте):\n     * «Хоч мороз щипав щоки, [кома] проте діти весело каталися на санчатах».\n\n2. Розрізнення підрядного речення та вставних допустових слів:\n   - «ЩОПРАВДА / ПРАВДА» (вставні слова зі значенням допусту/поступки) — завжди виділяються комами, але НЕ мають підрядної структури:\n     * «Ми виконали план, щоправда, з невеликим запізненням».\n   - «ХОЧА Б» (частка з обмежувально-видільним значенням) — комами НЕ виділяється:\n     * «Дайте мені хоча б один день на роздуми».\n\n3. Стилістична гігієна (Усунення тавтології):\nУникайте одночасного нагромадження кількох однакових допустових елементів (*Незважаючи на те що хоча йшов дощ...* -> ГРУБА ПОМИЛКА!). Обирайте один точний сполучник: «Хоча йшов дощ...» або «Незважаючи на те що йшов дощ...».",
      "examples": [
        {
          "target": "Хоч шлях до високої мети був сповнений небезпек і труднощів, однак команда впевнено досягла своєї вершини.",
          "reading": "[xɔtʃ ʃlʲɑx dɔ wɪˈsɔkɔji mɛˈtɪ buw ˈspɔwnɛnɪj nɛbɛzˈpɛk i ˈtrudnɔʃtʃʲiw, ɔdˈnɑk kɔˈmɑndɐ ˈwpɛwnɛnɔ dɔsʲˈtʲɑɦlɐ swɔˈjɛji wɛrˈʃɪnɪ] (khohch shlyahkh doh vy-SOH-koh-yee meh-TY boov SPOHV-neh-nyy neh-bez-PEHK ee TROOD-nohsh-cheew, ohd-NAHK koh-MAHN-dah VPEHV-neh-noh dohs-TYAHH-lah swoh-YEH-yee vehr-SHY-ny)",
          "translation": "Although the path to the high goal was filled with dangers and difficulties, nevertheless the team confidently reached its summit."
        },
        {
          "target": "Проєкт завершили вчасно, щоправда, команді довелося працювати понаднормово впродовж останніх вихідних.",
          "reading": "[prɔˈjɛkt zɐwɛrˈʃɪlɪ ˈwtʃɑsnɔ, ʃtʃɔˈprɑwdɐ, kɔˈmɑndʲi dɔwɛˈlɔsʲɑ prɐt͡sʲuˈwɑtɪ pɔnɐdnɔrˈmɔwɔ wprɔˈdɔwʒ ɔsˈtɑnʲnʲix wɪxʲidˈnɪx] (proh-YEHKT zah-vehr-SHY-ly VCHAH-snoh, shchoh-PRAHV-dah, koh-MAHN-dee doh-veh-LOHS'-yah praht-syoo-VAH-ty poh-nahd-nohr-MOH-woh vproh-DOVZH ohs-TAHN'-neekh vy-kheed-NEEKH)",
          "translation": "The project was completed on time, though indeed, the team had to work overtime throughout the last weekend."
        },
        {
          "target": "Дарма що обставини склалися несприятливо, ми все ж зуміли знайти вірний шлях до перемоги.",
          "reading": "[dɐrˈmɑ ʃtʃɔ ɔbstɐˈwɪnɪ ˈsklɑlɪsʲɑ nɛsprɪˈjɑtlɪwɔ, mɪ wsɛ ʒ zuˈmʲilɪ znɑjˈtɪ ˈwʲirnɪj ʃlʲɑx dɔ pɛrɛˈmɔɦɪ] (dahr-MAH shchoh ohb-stah-VY-ny SKLAH-lys'-yah neh-spry-YAHT-ly-woh, my vse zh zoo-MEE-ly znahy-TY VEER-nyy shlyahkh doh peh-reh-MOH-hy)",
          "translation": "Even though circumstances turned out unfavorably, we nonetheless managed to find the right path to victory."
        }
      ],
      "mnemonics": [
        "«Хоч..., але...» — одна кома між частинами! «Щоправда» — вставне слово в комах! Не дублюй «незважаючи на те що хоч»!"
      ],
      "culturalNotes": [
        "Баланс допустових сполучників та вставних слів забезпечує гнучкість, стриману інтелігентність та точність формулювань у сучасній українській есеїстиці."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно розставити коми при вставному слові «щоправда» в реченні «Ми приїхали вчасно щоправда поїзд запізнився»?",
          "options": [
            "Ми приїхали вчасно, щоправда, поїзд запізнився. (Parenthetical concessive word щоправда set off by commas)",
            "Ми приїхали, вчасно щоправда поїзд запізнився.",
            "Ми приїхали вчасно щоправда, поїзд запізнився.",
            "Ми приїхали вчасно щоправда поїзд, запізнився."
          ],
          "answerIndex": 0,
          "explanation": "Вставне слово «щоправда» виділяється комами з обох боків."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка стилістична помилка допущена в реченні «Незважаючи на те що хоч і був мороз, ми вийшли на вулицю»?",
          "options": [
            "Плеоназм / надлишкове дублювання допустових сполучників (Pleonasm / double concessive conjunctions)",
            "Неправильний відмінок іменника",
            "Помилка в роді дієслова",
            "Порушення правопису прислівника"
          ],
          "answerIndex": 0,
          "explanation": "Вживання «незважаючи на те що» одночасно з «хоч» є надлишковим дублюванням (тавтологією)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому корелятивну допустову конструкцію оформлено без жодної синтаксичної чи пунктуаційної помилки:",
          "options": [
            "Хоч завдання вимагало надзвичайних зусиль, проте всі учасники успішно впоралися з викликом.",
            "Хоч, завдання вимагало зусиль проте учасники впоралися.",
            "Незважаючи на те що хоч завдання вимагало зусиль проте впоралися.",
            "Хоч завдання вимагало зусиль, але проте всі впоралися."
          ],
          "answerIndex": 0,
          "explanation": "У першому реченні немає зайвих сполучників, а кому поставлено між підрядною та головною частиною перед «проте»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u22-l1": {
    "id": "uk-u22-l1",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 1,
    "title": "Трансформація прямої мови в непряму: розповідні речення",
    "level": "B2",
    "objective": "Опанувати правила заміни прямої мови на непряму в розповідних висловленнях, використання з'ясувальних сполучників що, ніби, мовляв, зміну особових займенників та особливості часової координації в українській мові.",
    "presentation": {
      "explanation": "Непряма мова — це спосіб передачі чужого висловлення не дослівно, а лише зі збереженням його основного змісту у формі складнопідрядного з'ясувального речення:\n\n1. Синтаксична перебудова розповідного висловлення:\n   - Слова автора стають головною частиною, а пряма мова — підрядною з'ясувальною частиною.\n   - Сполучники приєднання:\n     * «ЩО» — для нейтральної, достовірної передачі інформації: *Оксана сказала: «Я вже підготувала звіт» -> Оксана сказала, що вона вже підготувала звіт*.\n     * «НІБИ / НІБИТО / МОВЛЯВ» — якщо мовець хоче передати чужі слова з відтінком сумніву, дистанціювання або недовіри: *Сусід стверджував, нібито він нічого не знав про цю подію*.\n\n2. Зміна особових форм займенників та дієслів:\n   - 1-ша та 2-га особи прямої мови змінюються на 3-тю особу (або узгоджуються з особою оповідача):\n     * «Ми приїдемо завтра» -> вони повідомили, що приїдуть завтра.\n   - Вказівні займенники та прислівники змінюються відповідно до позиції оповідача: *цей -> той, тут -> там, сьогодні -> того дня*.\n\n3. Відсутність суворого узгодження часів (на відміну від англійської/французької):\nВ українській мові час дієслова непрямої мови визначається відносно моменту первинного висловлення:\n   - «Він сказав: \"Я пишу нову книгу\"» -> «Він сказав, що пише (теперішній час!) нову книгу».",
      "examples": [
        {
          "target": "Президент наголосив, що Україна неухильно дотримується всіх міжнародних демократичних стандартів.",
          "reading": "[prɛzɪˈdɛnt nɐɦɔˈlɔsɪw, ʃtʃɔ ukrɐˈjinɐ nɛˈuxʲilʲnɔ dɔˈtrɪmujɛtʲsʲɑ wˈsʲix mʲiʒnɐˈrɔdnɪx dɛmɔkrɐˈtɪtʃnɪx stɐnˈdɑrtʲiw] (preh-zy-DEHNT nah-hoh-LOH-syv, shchoh oo-krah-YEE-nah neh-oo-KHYL'-noh doh-TRY-moo-yeht'-syah VSEEKH meezh-nah-ROHD-nykh deh-moh-krah-TYCH-nykh stahn-DAHR-teew)",
          "translation": "The President emphasized that Ukraine steadfastly adheres to all international democratic standards."
        },
        {
          "target": "Директор повідомив колективу, що компанія відкриває новий філіал у Львові наступного місяця.",
          "reading": "[dɪˈrɛktɔr pɔwʲiˈdɔmɪw kɔlɛkˈtɪwu, ʃtʃɔ kɔmˈpɑnʲijɑ wʲidkrɪˈwɑjɛ ˈnɔwɪj fʲilʲiˈɑl u ˈlʲwɔwʲi nɐsˈtupnɔɦɔ ˈmʲisʲɑt͡sʲɑ] (dy-REHK-tohr poh-vee-DOH-myv koh-lehk-TY-voo, shchoh kohm-PAH-nee-yah veed-kry-VAH-yeh NOH-vyy fee-lee-AHL oo L'VOH-vee nahs-TOOP-noh-hoh MEE-syah-tsyah)",
          "translation": "The director informed the team that the company is opening a new branch in Lviv next month."
        },
        {
          "target": "Опонент заявив на дебатах, нібито наша програма реформ містить суттєві фінансові ризики.",
          "reading": "[ɔpɔˈnɛnt zɐjɑˈwɪw nɑ dɛˈbɑtɐx, ˈnʲibɪtɔ ˈnɑʃɐ prɔɦˈrɑmɐ rɛˈfɔrm ˈmʲisʲtɪtʲ sutʲˈtʲɛwʲi fʲinɐnˈsɔwʲi ˈrɪzɪkɪ] (oh-poh-NEHNT zah-yah-VYV nah deh-BAH-tahkh, NEE-by-toh NAH-shah prohh-RAH-mah reh-FOHRM MEES-teet' soot-TYEH-vee fee-nahn-SOH-vee RY-zy-ky)",
          "translation": "The opponent stated at the debates as if our reform program contained significant financial risks."
        }
      ],
      "mnemonics": [
        "Пряма мова розповідна -> непряма мова з «що» (достовірно) або «нібито» (із сумнівом); час залишається природним!"
      ],
      "culturalNotes": [
        "Точна та стилістично коректна непряма мова є основою сучасної якісної української журналістики та академічного цитування."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно трансформувати в непряму мову висловлення Андрія: «Я завтра обов'язково прийду»?",
          "options": [
            "Андрій сказав, що він завтра обов'язково прийде. (Correct person shift from я to він/прийде)",
            "Андрій сказав, що я завтра обов'язково прийду.",
            "Андрій сказав: що він завтра прийде.",
            "Андрій сказав, ніби я прийду."
          ],
          "answerIndex": 0,
          "explanation": "Займенник 1-ї особи «я» та дієслово «прийду» замінюються на 3-тю особу «він прийде» у підрядній з'ясувальній частині зі сполучником «що»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який сполучник слід обрати для непрямої мови, щоб висловити сумнів оповідача щодо правдивості почутого?",
          "options": [
            "Нібито / мовляв (Subjunctive distance / doubt conjunction in reported speech)",
            "Що",
            "Аби",
            "Через те що"
          ],
          "answerIndex": 0,
          "explanation": "Сполучники «нібито / мовляв» передають інформацію з відтінком дистанціювання чи сумніву."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому непряму мову побудовано бездоганно:",
          "options": [
            "Професор пояснив студентам, що вони мають опрацювати першоджерела самостійно.",
            "Професор пояснив студентам, що ви маєте опрацювати першоджерела.",
            "Професор пояснив студентам: що треба опрацювати першоджерела.",
            "Професор пояснив студентам, що я маю опрацювати першоджерела."
          ],
          "answerIndex": 0,
          "explanation": "Форма 2-ї особи «ви» правильно трансформована у 3-тю особу множини «вони мають»."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u22-l2": {
    "id": "uk-u22-l2",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 2,
    "title": "Трансформація питальних речень: непряме питання",
    "level": "B2",
    "objective": "Опанувати синтаксис непрямих запитань за допомогою сполучної частки «чи» (загальні питання) та питально-відносних слів (хто, що, де, коли, чому), їх інтонаційні та пунктуаційні особливості.",
    "presentation": {
      "explanation": "При трансформації прямого запитання в непряму мову утворюється складнопідрядне з'ясувальне речення з непрямим питанням:\n\n1. Загальні питання (без питального слова -> так/ні):\nПриєднуються за допомогою сполучної частки «ЧИ», яка ставиться після слова, на яке падає логічний наголос:\n   - Пряме питання: *Вчитель запитав: «Ви готові до контрольної роботи?»*.\n   - Непряме питання: *Вчитель запитав, чи ми готові до контрольної роботи*.\n   - *Перехожий поцікавився: «Цей автобус їде до центру?»* -> *Перехожий поцікавився, чи цей автобус їде до центру*.\n\n2. Спеціальні питання (з питальним словом):\nПитальні займенники та прислівники (*хто, що, який, де, куди, коли, чому, як, скільки*) стають сполучними словами у підрядній частині:\n   - Пряме питання: *Студент спитав: «Коли почнеться лекція з історії?»*.\n   - Непряме питання: *Студент спитав, коли почнеться лекція з історії*.\n   - *Турист запитав: «Де розташована Національна опера?»* -> *Турист запитав, де розташована Національна опера*.\n\n3. ВАЖЛИВЕ ПРАВИЛО ПУНКТУАЦІЇ:\nУ кінці розповідного речення з непрямим питанням ставиться КРАПКА (знак питання НЕ ставиться!):\n   - Правильно: *Ми спитали, коли прибуде потяг.* (Крапка!).\n   - Знак питання ставиться лише тоді, коли все головне речення саме є питальним: *Чи не підкажете ви, коли прибуде потяг?*.",
      "examples": [
        {
          "target": "Іноземні гості запитали екскурсовода, скільки століть налічує славетний собор Святої Софії в Києві.",
          "reading": "[inɔˈzɛmnʲi ˈɦɔsʲtʲi zɐpɪˈtɑlɪ ɛkskursɔˈwɔdɐ, ˈsʲkʲilʲkɪ stɔˈlʲitʲ nɐˈlʲitʃujɛ slɐˈwɛtnɪj sɔˈbɔr swʲɑˈtɔji sɔˈfʲiji w ˈkɪjɛwʲi] (ee-noh-ZEM-nee HOHS-tee zah-py-TAH-ly eks-koor-soh-VOH-dah, SKEEL'-ky stoh-LEET' nah-LEE-choo-yeh slah-VEHT-nyy soh-BOHR svyah-TOH-yee soh-FEE-yee v KY-yeh-vee)",
          "translation": "The foreign guests asked the tour guide how many centuries the famous Saint Sophia Cathedral in Kyiv spans."
        },
        {
          "target": "Менеджер поцікавився в клієнта, чи задоволений він якістю наданих банківських послуг.",
          "reading": "[mɛnɛˈdʒɛr pɔt͡sʲiˈkɑwɪwsʲɑ w klʲiˈjɛntɐ, tʃɪ zɐdɔˈwɔlɛnɪj wʲin ˈjɑkʲisʲtʲu nɑˈdɑnɪx ˈbɑnkʲiwsʲkɪx pɔsˈluɦ] (meh-neh-DZHEHR poh-tsee-KAH-vyvs'-yah v klee-YEHN-tah, chy zah-doh-VOH-leh-nyy veen YAH-kees-tyoo nah-DAH-nykh BAHN-keew-s'kykh pohs-LOOH)",
          "translation": "The manager inquired with the client whether he was satisfied with the quality of the banking services provided."
        },
        {
          "target": "Журналісти спитали міністра, які пріоритетні проєкти будуть реалізовані в новому бюджетному році.",
          "reading": "[ʒurnɐˈlʲistɪ spɪˈtɑlɪ mʲiˈnʲistrɐ, jɑˈkʲi prʲiɔrɪˈtɛtnʲi prɔˈjɛktɪ ˈbudutʲ rɛɐlʲizɔˈwɑnʲi w nɔˈwɔmu bʲudˈʒɛtnɔmu ˈrɔt͡sʲi] (zhoor-nah-LEES-ty spy-TAH-ly mee-NEES-trah, yah-KEE pree-oh-ry-TEHT-nee proh-YEHK-ty BOO-doot' reh-ah-lee-zoh-VAH-nee v noh-VOH-moo byood-ZHEHT-noh-moo ROH-tsee)",
          "translation": "The journalists asked the minister which priority projects would be implemented in the new budget year."
        }
      ],
      "mnemonics": [
        "Питання «так/ні» перетворюй з часткою «чи»! Питальне слово залишай на початку підрядної! У кінці розповіді став крапку!"
      ],
      "culturalNotes": [
        "Використання частки «чи» у непрямих запитаннях є витонченою рисою українського інтелігентного мовного етикету."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно оформити непряме запитання від прямого «Він спитав: \"Ти любиш класичну музику?\"»?",
          "options": [
            "Він спитав, чи люблю я класичну музику. (Indirect question with particle чи and dot at the end)",
            "Він спитав, чи любиш ти класичну музику?",
            "Він спитав що люблю я музику.",
            "Він спитав чи я люблю музику?"
          ],
          "answerIndex": 0,
          "explanation": "Загальне питання трансформується за допомогою сполучної частки «чи», займенник узгоджується, а в кінці розповідного речення ставиться крапка."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який розділовий знак слід поставити наприкінці речення «Ми запитали перехожого, як дістатися до вокзалу»?",
          "options": [
            "Крапку (Period - since the overarching sentence is declarative)",
            "Знак питання",
            "Знак оклику",
            "Трикрапку"
          ],
          "answerIndex": 0,
          "explanation": "Оскільки головне речення є розповідним («Ми запитали...»), наприкінці речення з непрямим питанням ставиться крапка."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому непряме запитання та пунктуацію оформлено абсолютно правильно:",
          "options": [
            "Екскурсовод розповів туристам, коли саме було засновано давнє місто Чернігів.",
            "Екскурсовод розповів туристам, коли саме було засновано давнє місто Чернігів?",
            "Екскурсовод розповів туристам: коли було засновано Чернігів.",
            "Екскурсовод розповів туристам чи коли було засновано Чернігів."
          ],
          "answerIndex": 0,
          "explanation": "Сполучне слово «коли» приєднує підрядну частину, в кінці речення правильно стоїть крапка."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u22-l3": {
    "id": "uk-u22-l3",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 3,
    "title": "Трансформація спонукальних речень: накази та прохання",
    "level": "B2",
    "objective": "Опанувати трансформацію спонукальних висловлень (наказів, прохань, закликів) у непряму мову за допомогою сполучника «щоб», трансформацію кличного відмінка у додаток та інфінітивні конструкції.",
    "presentation": {
      "explanation": "При трансформації спонукальних речень (наказовий спосіб) пряма мова перетворюється на підрядну з'ясувально-спонукальну частину:\n\n1. Основний сполучник трансформації — «ЩОБ»:\nДієслово наказового способу замінюється формою минулого часу умовного способу або інфінітивом:\n   - Пряма мова: *Мати попросила сина: «Купи свіжого хліба»*.\n   - Непряма мова 1 (з особовою формою): *Мати попросила сина, щоб він купив свіжого хліба*.\n   - Непряма мова 2 (з інфінітивом): *Мати попросила сина купити свіжого хліба*.\n\n2. Трансформація звертань (Кличного відмінка):\nЗвертання прямої мови перетворюється на непрямий додаток у головній частині (найчастіше в родовому, знахідному або давальному відмінку):\n   - Пряма мова: *«Оксано, зачини вікно», — сказав батько*.\n   - Непряма мова: *Батько сказав Оксані (Дав. в.), щоб вона зачинила вікно*.\n\n3. Дієслова введення спонукання:\nЗалежно від інтонації та значення прямої мови в словах автора використовуються точні дієслова: *наказати, попросити, порадити, закликати, вимагати, благати, доручити*:\n   - *Офіцер скомандував солдатам шикуватися*.",
      "examples": [
        {
          "target": "Командир суворо наказав підлеглим, щоб вони негайно перевірили стан захисних споруд.",
          "reading": "[kɔmɐnˈdɪr ˈsurɔwɔ nɐkɐˈzɑw pʲidˈlɛɦlɪm, ʃtʃɔb wɔˈnʲi nɛˈɦɑjnɔ pɛrɛˈwʲirɪlɪ stɑn zɐxɪsˈnɪx spɔˈrud] (koh-mahn-DYR SOO-roh-woh nah-kah-ZAHV peed-LEHH-lym, shchohb voh-NEE neh-HAHY-noh peh-reh-VEER-y-ly stahn zah-khys-NYKH spoh-ROOD)",
          "translation": "The commander strictly ordered his subordinates to immediately inspect the condition of the defensive structures."
        },
        {
          "target": "Лікар порадив пацієнтові щодня гуляти на свіжому повітрі та уникати стресових ситуацій.",
          "reading": "[ˈlʲikɐr pɔrɐˈdʲiw pɐt͡sʲiˈjɛntɔwʲi ʃtʃɔdʲˈnʲɑ ɦuˈlʲɑtɪ nɑ swʲiˈʒɔmu pɔˈwʲitrʲi tɑ unɪˈkɑtɪ strɛˈsɔwɪx sɪtuˈɑt͡sʲij] (LEE-kahr poh-rah-DYV pah-tsee-YEHN-toh-vee shchohd-NYAH hoo-LYAH-ty nah swee-ZHOH-moo poh-VEET-ree tah oo-ny-KAH-ty streh-SOH-wykh sy-too-AH-tseey)",
          "translation": "The doctor advised the patient to walk in the fresh air daily and avoid stressful situations."
        },
        {
          "target": "Викладач звернувся до студентів з проханням, щоб вони здали письмові роботи до кінця тижня.",
          "reading": "[wɪklɐˈdɑt͡ʃ zwɛrˈnuwsʲɑ dɔ stuˈdɛntʲiw z prɔˈxɑnʲːɐm, ʃtʃɔb wɔˈnʲi zdɑˈlɪ pɪsʲmɔˈwʲi rɔˈbɔtɪ dɔ kʲinʲˈt͡sʲɑ ˈtɪʒnʲɑ] (vy-klah-DAHCH zwehr-NOOV-syah doh stoo-DEN-teew z proh-KHAHN-nyahm, shchohb voh-NEE zdah-LY pees'-moh-VEE roh-BOH-ty doh keen-TSYAH TYZH-nyah)",
          "translation": "The instructor addressed the students with a request that they submit their written assignments before the end of the week."
        }
      ],
      "mnemonics": [
        "Наказ чи прохання передавай через «щоб + минулий час» або через інфінітив («попросив зробити»); звертання перетворюй на додаток!"
      ],
      "culturalNotes": [
        "Культура передачі спонукань в українській діловій мові надає перевагу ввічливим модальним конструкціям («попросив», «запропонував», «порадив»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно трансформувати в непряму мову наказ «Учитель сказав: \"Тарасе, відкрий підручник\"»?",
          "options": [
            "Учитель сказав Тарасові, щоб він відкрив підручник. (Vocative Тарасе converted into dative complement Тарасові + щоб)",
            "Учитель сказав, Тарасе відкрий підручник.",
            "Учитель сказав щоб Тарас відкрив підручник.",
            "Учитель сказав Тарасе, щоб він відкрив."
          ],
          "answerIndex": 0,
          "explanation": "Звертання «Тарасе» стає додатком у давальному відмінку «Тарасові», а наказ приєднується сполучником «щоб»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку дієслівну форму можна вжити для лаконічної передачі прохання («Він попросив мене, щоб я зачекав»)?",
          "options": [
            "Інфінітив: Він попросив мене зачекати. (Infinitive construction)",
            "Дієприкметник: Він попросив мене зачеканий.",
            "Дієприслівник: Він попросив мене зачекавши.",
            "Наказовий спосіб: Він попросив мене зачекай."
          ],
          "answerIndex": 0,
          "explanation": "Спонукання можна природно передати інфінітивом: «попросив мене зачекати»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення з бездоганною трансформацією спонукального висловлення в непряму мову:",
          "options": [
            "Тренер порадив спортсменам зосередитися на техніці виконання вправи.",
            "Тренер порадив спортсменам, зосередьтеся на техніці.",
            "Тренер порадив спортсменам щоб вони зосередитися.",
            "Тренер порадив, спортсмени зосередьтеся."
          ],
          "answerIndex": 0,
          "explanation": "Інфінітивна конструкція «порадив спортсменам зосередитися» є лаконічною і граматично бездоганною."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u22-l4": {
    "id": "uk-u22-l4",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 4,
    "title": "Пунктуація прямої мови та слів автора",
    "level": "B2",
    "objective": "Опанувати всі чотири основні пунктуаційні схеми розташування прямої мови та слів автора (перед прямою мовою, після неї, всередині прямої мови та пряма мова всередині слів автора).",
    "presentation": {
      "explanation": "Пряма мова — це точне, дослівне відтворення чужого мовлення зі збереженням усіх лексичних, граматичних та інтонаційних особливостей. На письмі пряма мова береться в українські лапки «...» («лапки-ялинки»):\n\n1. Слова автора стоять ПЕРЕД прямою мовою: **А: «П». / А: «П!» / А: «П?»**\n   - Після слів автора ставиться двокрапка, перше слово прямої мови пишеться з великої літери:\n     * *Учитель промовив: «Знання — це головна зброя вільної людини».*\n     * *Юнак вигукнув: «Яка краса навколо!»*\n\n2. Слова автора стоять ПІСЛЯ прямої мови: **«П», — а. / «П!» — а. / «П?» — а.**\n   - Після прямої мови ставиться кома (або ! / ?), за лапками — тире, а слова автора пишуться з малої літери:\n     * *«Ми готові вирушати в похід», — повідомив провідник.*\n     * *«Коли розпочнеться вистава?» — поцікавився глядач.*\n\n3. Слова автора стоять ВСЕРЕДИНІ прямої мови:\n   - Схема 1 (Слова автора розривають ОДНЕ речення): **«П, — а, — п».**\n     * *«Сьогодні, — тихо сказав батько, — ми маємо ухвалити важливе рішення».*\n   - Схема 2 (Слова автора стоять між ДВОМА окремими реченнями): **«П, — а. — П».**\n     * *«Ходімо швидше, — мовив друг. — Дощ уже починається».*\n   - Схема 3 (У словах автора є дієслова на позначення наступної думки): **«П, — а: — П».**\n     * *«Я згоден, — відповів він і додав: — Але за однієї важливої умови».*",
      "examples": [
        {
          "target": "«Мова — це генетичний код нації», — підкреслив видатний український мовознавець у своїй промові.",
          "reading": "[ˈmɔwɐ t͡sɛ ɦɛnɛˈtɪtʃnɪj kɔd ˈnɑt͡sʲiji, pʲidkrɛsˈlɪw wɪdɐtˈnɪj ukrɐˈjinʲsʲkɪj mɔwɔzˈnɑwɛt͡sʲ u swɔˈjij prɔˈmɔwʲi] (MOH-vah tseh heh-neh-TYCH-nyy kohd NAH-tsee-yee, peed-krehs-LYV vy-daht-NYY oo-krah-YEEN-s'kyy moh-wohz-NAH-vehts' oo swoh-YEEY proh-MOH-vee)",
          "translation": "\"Language is the genetic code of the nation,\" emphasized the prominent Ukrainian linguist in his speech."
        },
        {
          "target": "Капітан рішуче скомандував: «Підняти вітрила й тримати курс прямо на схід!»",
          "reading": "[kɐpʲiˈtɑn rʲiˈʃutʃɛ skɔmɐnˈduwɑw: pʲidˈnʲɑtɪ wʲitˈrɪlɐ j trɪˈmɑtɪ kurs ˈprʲɑmɔ nɑ sxʲid] (kah-pee-TAHN ree-SHOO-cheh skoh-mahn-DOO-wahv: peed-NYAH-ty veet-RY-lah y try-MAH-ty koors PRYAH-moh nah skheed)",
          "translation": "The captain decisively commanded: \"Raise the sails and hold course directly east!\""
        },
        {
          "target": "«Правда завжди перемагає, — переконано мовив дідусь. — Запам'ятай це правило на все життя».",
          "reading": "[ˈprɑwdɐ zɐwˈʒdɪ pɛrɛmɐˈɦɑjɛ, pɛrɛˈkɔnɐnɔ ˈmɔwɪw dʲiˈdusʲ. zɐpɐmjɐˈtɑj t͡sɛ ˈprɑwɪlɔ nɑ wsɛ ʒɪtʲˈtʲɑ] (PRAHV-dah zahv-ZHDY peh-reh-mah-HAH-yeh, peh-reh-KOH-nah-noh MOH-wyv dee-DOOS'. zah-pahm-yah-TAHY tseh PRAH-wy-loh nah vse zhyht-TYAH)",
          "translation": "\"The truth always triumphs,\" grandfather said convincingly. \"Remember this rule for your whole life.\""
        }
      ],
      "mnemonics": [
        "Слова автора перед прямою — став двокрапку А: «П»; слова автора всередині одного речення — «П, — а, — п»!"
      ],
      "culturalNotes": [
        "В українській видавничій традиції нормативними є лапки-ялинки «...», а всередині цитат вживаються лапки-лапки „...“."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть правильну пунктуаційну схему для речення, де слова автора стоять перед прямою мовою:",
          "options": [
            "А: «П». (Author words colon quotes Direct speech period)",
            "А — «П».",
            "А, «П».",
            "А. «П»."
          ],
          "answerIndex": 0,
          "explanation": "Коли слова автора стоять перед прямою мовою, після них ставиться двокрапка, а пряма мова береться в лапки: А: «П»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як оформити пунктуацію, якщо слова автора стоять між двома самостійними реченнями прямої мови?",
          "options": [
            "«П, — а. — П». (Period after author words and capital letter for next direct sentence)",
            "«П, — а, — п».",
            "«П! — а, — п».",
            "«П. — а. — п»."
          ],
          "answerIndex": 0,
          "explanation": "Якщо слова автора стоять між двома окремими реченнями прямої мови, після слів автора ставиться крапка й тире, а друге речення починається з великої літери: «П, — а. — П»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому пунктуацію прямої мови оформлено бездоганно:",
          "options": [
            "«Ми обов'язково захистимо свою землю, — сказав воїн. — У нас немає іншого вибору».",
            "«Ми захистимо свою землю, — сказав воїн, — У нас немає вибору».",
            "«Ми захистимо свою землю — сказав воїн. — у нас немає вибору».",
            "«Ми захистимо свою землю» — сказав воїн: «У нас немає вибору»."
          ],
          "answerIndex": 0,
          "explanation": "Слова автора стоять між двома реченнями прямої мови: після першого речення кома й тире, після слів автора крапка й тире, друге речення з великої літери."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u22-l5": {
    "id": "uk-u22-l5",
    "subject": "ukrainian",
    "unit": 22,
    "lessonNumber": 5,
    "title": "Пунктуація діалогу, цитування та оформлення епіграфів",
    "level": "B2",
    "objective": "Опанувати правила пунктуаційного оформлення діалогів (тире без лапок), правила цитування у наукових та публіцистичних текстах і графічне оформлення епіграфів.",
    "presentation": {
      "explanation": "Оформлення діалогічного мовлення, цитат та епіграфів має чіткі поліграфічні та граматичні стандарти в українській мові:\n\n1. Пунктуація діалогу (Dialogue formatting):\n   - Кожна репліка діалогу починається з нового рядка з великої літери.\n   - Перед реплікою ставиться ТИРЕ (лапки НЕ вживаються!):\n     * *— Доброго дня, пане професоре! — привітався студент.*\n     * *— Вітаю! Які питання виникли під час підготовки до семінару? — запитав викладач.*\n     * *— Мене цікавить тема про походження української мови.*\n\n2. Правила цитування (Quotations in academic text):\n   - Пряма цитата береться в лапки і супроводжується розділовими знаками прямої мови: *Тарас Шевченко закликав: «І чужому научайтесь, й свого не цурайтесь»*.\n   - Вбудована цитата (частина підрядного речення) пишеться з малої літери: *Поет наголошував, що «в своїй хаті своя й правда, і сила, і воля»*.\n   - Пропуск слів у цитаті позначається трикрапкою в кутових або квадратних дужках: *«Україна [...] впевнено прямує до майбутнього»*.\n\n3. Оформлення епіграфа (Epigraphs):\n   - Епіграф пишеться у верхньому правому кутку сторінки.\n   - Лапки НЕ ставляться; крапка в кінці тексту епіграфа ставиться (якщо немає ! чи ?).\n   - Прізвище автора пишеться з нового рядка нижче без дужок.",
      "examples": [
        {
          "target": "— Чи вдалося вам знайти стародавні рукописи в архіві? — поцікавився дослідник. — Так, ми виявили унікальні документи XVII століття, — з гордістю відповів архіваріус.",
          "reading": "[tʃɪ wdɐˈlɔsʲɑ wɑm znɑjˈtɪ stɐrɔˈdɑwnʲi ˈrukɔpɪsɪ w ɐrˈxʲiwʲi? pɔt͡sʲiˈkɑwɪwsʲɑ dɔsʲˈlʲidnɪk. tɑk, mɪ wɪˈjɑwɪlɪ unʲiˈkɑlʲnʲi dɔkuˈmɛntɪ sʲimdɛsʲɑˈtɔɦɔ stɔˈlʲitʲːɑ, z ˈɦɔrdʲisʲtʲu wʲidpɔˈwʲiw ɐrxʲiˈwɑrʲijus] (chy vdah-LOHS'-yah vahm znahy-TY stah-roh-DAHV-nee ROO-koh-py-sy v ahr-KHEE-vee? poh-tsee-KAH-vyvs'-yah dohs-LEED-nyk. tahk, my vy-YAH-wy-ly oo-nee-KAHL'-nee doh-koo-MEHN-ty seem-deh-syah-TOH-hoh stoh-LEET-tyah, z HOHR-dees-tyoo veed-poh-VEEV ahr-khee-VAH-ry-yoos)",
          "translation": "— Did you manage to find ancient manuscripts in the archive? the researcher inquired. — Yes, we discovered unique documents of the 17th century, the archivist replied with pride."
        },
        {
          "target": "Іван Франко справедливо зазначав, що «книги — морська глибина, хто в них пірне аж до дна, той хоч і труду мав досить, дивнії перли виносить».",
          "reading": "[iˈwɑn frɐnˈkɔ sprɐwɛdˈlɪwɔ zɐznɐˈtʃɑw, ʃtʃɔ ˈknɪɦɪ mɔrʲˈsʲkɑ ɦlɪbɪˈnɑ, xtɔ w nɪx pʲirˈnɛ ɑʒ dɔ dnɑ, tɔj xɔtʃ i ˈtrudu mɑw ˈdɔsɪtʲ, dɪwˈnʲiji ˈpɛrlɪ wɪˈnɔsɪtʲ] (ee-VAHN frahn-KOH sprah-vehd-LY-woh zah-znah-CHAHV, shchoh KNY-hy mohr-s'KAH hly-by-NAH, khtoh v nykh peer-NEH ahzh doh dnah, toy khohch ee TROO-doo mahv DOH-syt', dyv-NEE-yee PEHR-ly vy-NOH-syt')",
          "translation": "Ivan Franko justly noted that \"books are the sea depth; whoever dives into them to the very bottom, though having toil enough, brings out marvelous pearls.\""
        },
        {
          "target": "Кожна репліка в українській драматургії майстерно відтворює живий характер та емоційний стан дійових осіб.",
          "reading": "[ˈkɔʒnɐ ˈrɛplʲikɐ w ukrɐˈjinʲsʲkʲij drɐmɐˈturɦʲiji mɐjsˈtɛrnɔ wʲidtwɔˈrʲujɛ ʒɪˈwɪj xɐˈrɑktɛr tɑ ɛmɔt͡sʲijˈnɪj stɑn dʲijɔˈwɪx ɔˈsʲib] (KOHZH-nah REHP-lee-kah v oo-krah-YEEN-s'keey drah-mah-TOOR-hee-yee mahys-TEHR-noh veed-twoh-RYOO-yeh zhy-VYY khah-RAHK-tehr tah eh-moh-tseey-NYY stahn dee-yoh-VYKH oh-SEEB)",
          "translation": "Each line in Ukrainian dramaturgy skillfully reproduces the living character and emotional state of the protagonists."
        }
      ],
      "mnemonics": [
        "Діалог — тире на початку репліки без лапок! Епіграф — праворуч угорі без лапок, автор унизу без дужок!"
      ],
      "culturalNotes": [
        "Оформлення епіграфів до класичних поем («Кавказ», «І мертвим, і живим...») заклало високий канон українського книжкового мистецтва."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як оформлюються репліки діалогу на письмі?",
          "options": [
            "З нового рядка через тире без лапок (Dialogue dash at line start without quotation marks)",
            "У лапках у рядок",
            "У дужках через кому",
            "З двокрапкою на початку кожного слова"
          ],
          "answerIndex": 0,
          "explanation": "Репліки діалогу починаються з нового рядка з великої літери через тире без вживання лапок."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Чи беруться в лапки слова епіграфа до твору?",
          "options": [
            "Ні, епіграф пишеться без лапок праворуч (No quotation marks for epigraphs)",
            "Так, завжди беруться в лапки",
            "Тільки якщо це віршований текст",
            "Тільки якщо вказано джерело"
          ],
          "answerIndex": 0,
          "explanation": "Текст епіграфа в українській видавничій традиції пишеться без лапок у правому верхньому кутку."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому цитату як частину підрядного речення оформлено правильно:",
          "options": [
            "Леся Українка стверджувала, що «щоб не плакать, я сміялась».",
            "Леся Українка стверджувала, що: «Щоб не плакать, я сміялась».",
            "Леся Українка стверджувала, що «Щоб не плакать, я сміялась»!",
            "Леся Українка стверджувала що, «щоб не плакать я сміялась»."
          ],
          "answerIndex": 0,
          "explanation": "Цитата, що є частиною підрядного речення, починається з малої літери, береться в лапки і не відокремлюється двокрапкою."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u23-l1": {
    "id": "uk-u23-l1",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 1,
    "title": "Реквізити та архітектура офіційного ділового листа",
    "level": "B2",
    "objective": "Опанувати композицію та мовні норми українського офіційного ділового листа: етикетні звертання у кличному відмінку, вступні формули, стандарти прийменникового керування та правопис ввічливого «Ви».",
    "presentation": {
      "explanation": "Офіційний діловий лист є основним інструментом міжвідомчої та комерційної комунікації в Україні, де кожен реквізит має суворо регламентоване мовне оформлення:\n\n1. Етикетні формули звертання (обов'язково Кличний відмінок):\n   - *«Шановний пане директоре!» / «Шановна пані професорко!» / «Високоповажний пане Міністре!»*\n   - До колективу: *«Шановні колеги!» / «Шановні панове!»*\n   - Ввічливе звертання «Ви, Ваш» пишеться з великої літери лише при особистому індивідуальному зверненні до однієї особи (*«Щиро дякуємо за Вашу пропозицію»*); при зверненні до колективу — з малої.\n\n2. Стандартні вступні формули:\n   - *«У відповідь на Ваш запит від 12 травня 2026 року повідомляємо...»*\n   - *«Звертаємося до Вас із проханням розглянути можливість...»*\n   - *«На виконання розпорядження Кабінету Міністрів України надсилаємо...»*\n\n3. Нормативне прийменникове керування в діловому стилі:\n   - Правильно: *«відповідно до закону» / «згідно із законом»* (НЕ *згідно закону*!);\n   - Правильно: *«надіслати на адресу»* (НЕ *за адресом*!);\n   - Правильно: *«за наказом» / «на прохання»* (НЕ *по наказу / по проханню*).\n\n4. Прикінцеві формули ввічливості:\n   - *«З повагою» / «З щирою повагою» / «Сподіваємося на плідну та взаємовигідну співпрацю»* (після формули «З повагою» зазвичай ставиться кома або підпис із нового рядка).",
      "examples": [
        {
          "target": "Шановний пане директоре, надсилаємо на Ваш розгляд оновлений проєкт двостороннього інвестиційного меморандуму.",
          "reading": "[ʃɐˈnɔwnɪj ˈpɑnɛ dɪˈrɛktɔrɛ, nɐdsɪˈlɑjɛmɔ nɑ wɑʃ rɔzˈɦlʲɑd ɔnɔwˈlɛnɪj prɔˈjɛkt dwɔstɔrɔnʲˈnʲɔɦɔ inwɛstɪt͡sʲijˈnɔɦɔ mɛmɔˈrɑndumu] (shah-NOHV-nyy PAH-neh dy-REHK-toh-reh, nahd-sy-LAH-yeh-moh nah VAHSH roz-HLYAHD oh-nohv-LEH-nyy proh-YEHKT dvoh-stoh-rohn-NYOH-hoh een-vehs-ty-tseey-NOH-hoh meh-moh-RAHN-doo-moo)",
          "translation": "Dear Mr. Director, we are sending for Your consideration the updated draft of the bilateral investment memorandum."
        },
        {
          "target": "Відповідно до укладеної генеральної угоди, усі платіжні зобов'язання мають бути виконані впродовж п'яти банківських днів.",
          "reading": "[wʲidpɔˈwʲidnɔ dɔ uˈklɑdɛnɔji ɦɛnɛˈrɑlʲnɔji uˈɦɔdɪ, uˈsʲi plɐˈtʲiʒnʲi zɔbɔwˈjɑzɐnʲːɑ ˈmɑjutʲ ˈbutɪ wɪˈkɔnɐnʲi wprɔˈdɔwʒ pjɑˈtɪ ˈbɑnkʲiwsʲkɪx dnʲiw] (veed-poh-VEED-noh doh oo-KLAH-deh-noh-yee heh-neh-RAHL'-noh-yee oo-HOH-dy, oo-SEE plah-TEEZH-nee zoh-boh-VYAH-zahn-nyah MAH-yoot' BOO-ty vy-KOH-nah-nee vproh-DOVZH pyah-TY BAHN-keew-s'kykh DNEEW)",
          "translation": "According to the concluded general agreement, all payment obligations must be fulfilled within five banking days."
        },
        {
          "target": "Щиро дякуємо за оперативну відповідь і сподіваємося на подальший розвиток партнерських взаємин.",
          "reading": "[ˈʃtʃɪrɔ ˈdʲɑkujɛmɔ zɑ ɔpɛrɐˈtɪwnu wʲidpɔˈwʲidʲ i spɔdʲiˈwɑjɛmɔsʲɑ nɑ pɔˈdɑlʲʃɪj rɔzˈwɪtɔk pɐrtˈnɛrsʲkɪx wzɐˈjɛmɪn] (SHCHY-roh DYAH-koo-yeh-moh zah oh-peh-rah-TYV-noo veed-poh-VEED' ee spoh-dee-VAH-yeh-mohs'-yah nah poh-DAHL'-shyy roz-VY-tohk pahrt-NEHR-s'kykh vzah-YEH-myn)",
          "translation": "We sincerely thank you for the prompt response and look forward to the further development of partner relations."
        }
      ],
      "mnemonics": [
        "Звернення — тільки у кличному: «Шановний пане професоре!»; прийменники — «відповідно до», «згідно з»!"
      ],
      "culturalNotes": [
        "Офіційне діловодство в сучасній Україні регулюється національним стандартом ДСТУ 4163:2020 («Уніфікована система організаційно-розпорядчої документації»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативну форму звертання до міністра в офіційному листі:",
          "options": [
            "Шановний пане Міністре! (Vocative case for both title and position with formal polite capitalization)",
            "Шановний пан Міністр!",
            "Шановний міністр!",
            "Шановний пана міністра!"
          ],
          "answerIndex": 0,
          "explanation": "В українському діловому мовленні використовується кличний відмінок обох слів: «Шановний пане Міністре!»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка синтаксична сполука прийменника є нормативною в офіційно-діловому стилі?",
          "options": [
            "Відповідно до наказу (Normative prepositional government відповідно до + Genitive)",
            "Згідно наказу",
            "У відповідності з наказом",
            "По наказу"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною є конструкція «відповідно до наказу» (або «згідно з наказом»). Конструкція «згідно наказу» є помилковою."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ норми офіційно-ділового листування дотримано бездоганно:",
          "options": [
            "У відповідь на Ваш лист надсилаємо завірені копії статутних документів на зазначену адресу.",
            "У відповідь на Ваш лист висилаємо копії документів по зазначеному адресу.",
            "Згідно закону надсилаємо копії документів за адресом.",
            "У відповідності з листом надсилаємо копії документів."
          ],
          "answerIndex": 0,
          "explanation": "У першому варіанті «на зазначену адресу» та ділові формули вжито абсолютно бездоганно."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u23-l2": {
    "id": "uk-u23-l2",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 2,
    "title": "Мовні кліше договорів, угод та юридичних актів",
    "level": "B2",
    "objective": "Опанувати правничу фразеологію, термінологічні стандарти договорів та угод (укладати договір, набувати чинності, брати до відома) та усунення калькованих штампів.",
    "presentation": {
      "explanation": "Правничий підстиль офіційно-ділового мовлення ґрунтується на винятковій семантичній однозначності та стандартизованих формулах:\n\n1. Нормативні дієслівні колокації в договорах та актах:\n   - *«Укладати договір / договір укладено»* (НЕ *заключати / складати договір*);\n   - *«Договір набуває чинності»* (НЕ *вступає в силу*);\n   - *«Брати до уваги / до відома»* (НЕ *приймати до уваги*);\n   - *«Вживати заходів»* (НЕ *приймати міри*);\n   - *«Заходи щодо запобігання...»* (НЕ *міроприємства по...*);\n   - *«Визнати таким, що втратив чинність»* (НЕ *втратив силу*);\n   - *«Розривати договір»* (припинення дії) / *«Скасовувати рішення»*.\n\n2. Спеціалізовані термінологічні категорії:\n   - *«Форс-мажорні обставини (обставини непереборної сили)»*;\n   - *«Штрафні санкції, неустойка, пеня»*;\n   - *«Юридичні адреси та банківські реквізити сторін»*.\n\n3. Граматичні ознаки тексту договору:\n   - Використання дієслів 3-ї особи теперішнього часу зі значенням обов'язку: *«Виконавець зобов'язується...», «Замовник гарантує...»*;\n   - Переважання віддієслівних іменників на -ння: *«виконання, забезпечення, надання, розірвання, підписання»*.",
      "examples": [
        {
          "target": "Цей договір укладено в двох автентичних примірниках, які мають однакову юридичну силу для обох Сторін.",
          "reading": "[t͡sɛj dɔˈɦɔwʲir uˈklɑdɛnɔ w dwɔx ɐwtɛnˈtɪtʃnɪx prɪˈmʲirnɪkɐx, jɑˈkʲi ˈmɑjutʲ ɔdnɐˈkɔwu jurɪˈdɪtʃnu ˈsɪlu dlʲɑ ɔˈbɔx stɔˈrʲin] (tseh-y doh-HOH-veer oo-KLAH-deh-noh v dvohkh ahv-ten-TYCH-nykh pry-MEER-ny-kahkh, yah-KEE MAH-yoot' ohd-nah-KOH-voo yoo-ry-DYCH-noo SY-loo dlyah oh-BOHKH stoh-REEN)",
          "translation": "This contract is concluded in two authentic counterparts having equal legal force for both Parties."
        },
        {
          "target": "Угода набуває чинності з моменту її підписання уповноваженими представниками контрагентів.",
          "reading": "[uˈɦɔdɐ nɐbuˈwɑjɛ ˈtʃɪnnɔsʲtʲi z mɔˈmɛntu ˈjiji pʲidpɪˈsɑnʲːɑ upɔwnɔˈwɑʒɛnɪmɪ prɛdstɐwnɪˈkɑmɪ kɔntrɐˈɦɛntʲiw] (oo-HOH-dah nah-boo-VAH-yeh CHYN-nohs-tee z moh-MEHN-too yee-YEE peed-py-SAHN-nyah oo-pohv-noh-VAH-zheh-ny-my prehd-stahv-ny-KAH-my kohn-trah-HEHN-teew)",
          "translation": "The agreement enters into force from the moment of its signing by authorized representatives of the contracting parties."
        },
        {
          "target": "У разі невиконання взятих зобов'язань винна Сторона відшкодовує завдані збитки в повному обсязі.",
          "reading": "[u ˈrɑzʲi nɛwɪkɔˈnɑnʲːɑ ˈwzʲɑtɪx zɔbɔwˈjɑzɐnʲ ˈwɪnnɐ stɔrɔˈnɑ wʲidʃkɔˈdɔwujɛ ˈzɑwdɐnʲi ˈzbɪtkɪ w ˈpɔwnɔmu ɔbˈsʲɑzʲi] (oo RAH-zee neh-vy-koh-NAHN-nyah VZYAH-tykh zoh-boh-VYAH-zahn' VYN-nah stoh-roh-NAH veed-shkoh-DOH-voo-yeh ZAHV-dah-nee ZBYT-ky v POHV-noh-moo ohb-SYAH-zee)",
          "translation": "In case of non-fulfillment of undertaken obligations, the defaulting Party compensates for incurred damages in full."
        }
      ],
      "mnemonics": [
        "Договір — «укладають» (не заключають!); чинності він — «набуває» (не вступає в силу!); заходів — «вживають» (не приймають міри!)"
      ],
      "culturalNotes": [
        "Викорінення радянських канцеляризмів з українського цивільного та господарського права є важливим кроком гармонізації законодавства з нормами ЄС."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно сказати про дату початку дії закону чи договору?",
          "options": [
            "Набуває чинності (Normative Ukrainian legal collocation for entering into legal force)",
            "Вступає в силу",
            "Входить у дію",
            "Стає дійсним"
          ],
          "answerIndex": 0,
          "explanation": "Нормативним юридичним висловом в українській мові є «набувати чинності»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативне дієслово для створення двосторонньої угоди:",
          "options": [
            "Укладати договір (To conclude a contract - correct term)",
            "Заключати договір",
            "Складати договір",
            "Чинити договір"
          ],
          "answerIndex": 0,
          "explanation": "Нормативне юридичне словосполучення — «укладати договір»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть пункт договору, в якому ВСІ правничі мовні кліше вжито нормативно:",
          "options": [
            "Сторони вживають усіх необхідних заходів щодо належного виконання умов цього договору.",
            "Сторони приймають усі міри по належному виконанню умов договору.",
            "Сторони заключають договір і приймають його до уваги.",
            "Цей договір вступає в силу з моменту заключення."
          ],
          "answerIndex": 0,
          "explanation": "У першому варіанті конструкції «вживають заходів щодо виконання» є повністю нормативними."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u23-l3": {
    "id": "uk-u23-l3",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 3,
    "title": "Складання професійного резюме (CV), супровідного листа та біографії",
    "level": "B2",
    "objective": "Опанувати лексичні та композиційні стандарти створення сучасного резюме (CV), мотиваційного супровідного листа та автобіографії українською мовою.",
    "presentation": {
      "explanation": "Резюме та супровідний лист — це візитна картка фахівця на сучасному ринку праці:\n\n1. Структура професійного резюме (CV):\n   - *«Особисті та контактні дані»* (Прізвище, ім'я, телефон, електронна адреса, профіль LinkedIn);\n   - *«Мета / Посада, на яку претендує кандидат»* (наприклад: *«Менеджер IT-проєктів»*);\n   - *«Досвід роботи»* (у зворотно-хронологічному порядку із зазначенням обов'язків та конкретних досягнень);\n   - *«Освіта та підвищення кваліфікації»* (ВНЗ, спеціальність, сертифікати);\n   - *«Професійні навички та компетенції»* (Hard & Soft Skills);\n   - *«Володіння іноземними мовами»* (рівні за шкалою CEFR: вільно, B2, C1).\n\n2. Дієслова досягнень (Action Verbs) для опису досвіду:\nЗамість пасивних процесів використовуйте дієслова доконаного виду та активні форми:\n   - *«Розробив та впровадив...»* (не *займався розробкою*);\n   - *«Оптимізував робочі процеси на 25%»*;\n   - *«Керував командою з десяти аналітиків»*;\n   - *«Забезпечив ріст продажів та розширив клієнтську базу»*.\n\n3. Супровідний лист (Cover Letter):\n   - *«Пропоную свою кандидатуру на відкриту вакансію...»*;\n   - *«Маю успішний досвід роботи у сфері...»*;\n   - *«Буду щиро вдячний за можливість презентувати свій досвід під час особистої співбесіди»*.",
      "examples": [
        {
          "target": "Маю понад п'ять років успішного досвіду в управлінні інноваційними фінтех-проєктами в провідних банках.",
          "reading": "[ˈmɑju ˈpɔnɐd pjɑtʲ ˈrɔkʲiw usʲˈpʲiʃnɔɦɔ ˈdɔswʲidu w uprɐwˈlʲinʲːi innɔwɐt͡sʲijˈnɪmɪ fʲinˈtɛx prɔˈjɛktɐmɪ w prɔwʲidˈnɪx ˈbɑnkɐx] (MAH-yoo POH-nahd pyat' ROH-keew oos-PEESH-noh-hoh DOHS-vee-doo v oo-prahv-LEEN-nyee een-noh-vah-tseey-NY-my feen-TEHKH proh-YEHK-tah-my v proh-veed-NYKH BAHN-kahkh)",
          "translation": "I have over five years of successful experience in managing innovative fintech projects in leading banks."
        },
        {
          "target": "Успішно розробив і масштабував хмарну інфраструктуру, зменшивши витрати компанії на обслуговування серверів на тридцять відсотків.",
          "reading": "[usʲˈpʲiʃnɔ rɔzrɔˈbɪw i mɐʃtɐbuˈwɑw ˈxmɑrnu infrɐstruktˈuru, zmɛnʲˈʃɪwʃɪ wɪtˈrɑtɪ kɔmˈpɑnʲiji nɑ ɔbsluˈɦɔwuwɐnʲːɑ sɛrwɛˈrʲiw nɑ ˈtrɪdt͡sʲɑtʲ wʲidˈsɔtkʲiw] (oos-PEESH-noh roz-roh-BYV ee mahsh-tah-boo-VAHV KHMAHR-noo een-frah-strook-TOO-roo, zmen'-SHYV-shy vy-TRAH-ty kohm-PAH-nee-yee nah ohb-sloo-HOH-voo-vahn-nyah sehr-veh-REEW nah TRYD-tsyat' veed-SOHT-keew)",
          "translation": "I successfully developed and scaled cloud infrastructure, reducing company server maintenance costs by thirty percent."
        },
        {
          "target": "Буду вдячний за розгляд моєї кандидатури та запрошення на співбесіду в зручний для Вас час.",
          "reading": "[ˈbudu ˈwdʲɑtʃnɪj zɑ ˈrɔzɦlʲɑd mɔˈjɛji kɐndɪdɐˈturɪ tɑ zɐprɔˈʃɛnʲːɑ nɑ spʲiwˈbɛsʲidu w zrutʃˈnɪj dlʲɑ wɑs t͡ʃɑs] (BOO-doo VDYAHCH-nyy zah ROZ-hlyahd moh-YEH-yee kahn-dy-dah-TOO-ry tah zah-proh-SHEN-nyah nah speew-BEH-see-doo v zrooch-NYY dlyah Vahs chahs)",
          "translation": "I will be grateful for the consideration of my candidacy and an invitation to an interview at a time convenient for You."
        }
      ],
      "mnemonics": [
        "У резюме пиши активно: «розробив, оптимізував, керував» замість пасивного «брав участь»!"
      ],
      "culturalNotes": [
        "В українській практиці написання автобіографії використовується розповідна форма від 1-ї особи однини без надмірної експресії."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Яке формулювання найкраще демонструє професійне досягнення у резюме?",
          "options": [
            "Оптимізував логістичні ланцюги, скоротивши час доставки на 20% (Active achievement-oriented phrasing)",
            "Займався питаннями логістики",
            "Приймав участь у логістичній роботі",
            "Був задіяний на складі"
          ],
          "answerIndex": 0,
          "explanation": "Активне дієслово доконаного виду з конкретною метрикою («оптимізував... скоротивши на 20%») відповідає найвищому професійному стандарту."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як ввічливо завершити супровідний лист до резюме?",
          "options": [
            "Буду вдячний за можливість обговорити мою кандидатуру на співбесіді. (Polite professional closing formula)",
            "Чекаю дзвінка негайно.",
            "Передзвоніть мені завтра.",
            "Надіюся, ви мене візьмете."
          ],
          "answerIndex": 0,
          "explanation": "Формула «Буду вдячний за можливість обговорити мою кандидатуру...» є зразком ділової коректності."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть фрагмент резюме, складений із дотриманням усіх норм офіційного стилю:",
          "options": [
            "Керував відділом продажів, розширив клієнтську мережу та підвищив обсяг річного прибутку компанії на 15%.",
            "Керував відділом, займався розширенням бази і робив прибуток.",
            "Приймав участь у продажах і був відповідальним по клієнтам.",
            "Був задіяний на керівній посаді по продажам."
          ],
          "answerIndex": 0,
          "explanation": "Використано активні дієслова «керував, розширив, підвищив» та бездоганну ділову лексику."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u23-l4": {
    "id": "uk-u23-l4",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 4,
    "title": "Протокол, витяг із протоколу та офіційний звіт",
    "level": "B2",
    "objective": "Опанувати композиційну схему протоколу зборів чи засідань (СЛУХАЛИ — ВИСТУПИЛИ — УХВАЛИЛИ), оформлення витягів із протоколів та лексику ділових звітів.",
    "presentation": {
      "explanation": "Протокол — документ, у якому фіксується перебіг обговорення питань і рішення, ухвалені на зборах, нарадах або засіданнях колегіальних органів:\n\n1. Реквізити заголовної частини протоколу:\n   - Назва організації / установи;\n   - Назва виду документа (ПРОТОКОЛ №...);\n   - Дата проведення та місце складання;\n   - *«Голова»* та *«Секретар»*;\n   - *«Присутні»* (список учасників із зазначенням посад або кількості присутніх);\n   - *«ПОРЯДОК ДЕННИЙ»* (нумерований перелік питань у називному відмінку з прийменником «Про...»: *1. Про підсумки роботи за I квартал. 2. Про затвердження плану...*).\n\n2. Триадна композиційна структура кожного питання:\n   - **СЛУХАЛИ:** Прізвище та ініціали доповідача (у родовому відмінку: *Іванченка О. М.*) — стислий зміст виступу або посилання на доданий текст доповіді.\n   - **ВИСТУПИЛИ:** Прізвища учасників обговорення та тези їхніх виступів.\n   - **УХВАЛИЛИ (ПОСТАНОВИЛИ):** Чіткі пункти рішень, сформульовані в неозначеній формі дієслова (*1. Затвердити звіт. 2. Створити робочу комісію. 3. Покласти контроль на...*).\n\n3. Витяг із протоколу (Extract of Minutes):\nВідтворює лише частину протоколу за конкретним пунктом порядку денного, що стосується відповідного виконавця.",
      "examples": [
        {
          "target": "ПОРЯДОК ДЕННИЙ: 1. Про затвердження річного фінансового плану. 2. Про обрання нового складу наглядової ради товариства.",
          "reading": "[pɔˈrʲɑdɔk ˈdɛnnɪj: ˈpɛrʃɛ. prɔ zɐtwɛrˈdʒɛnʲːɑ ˈrʲitʃnɔɦɔ fʲinɐnˈsɔwɔɦɔ ˈplɑnu. ˈdruɦɛ. prɔ ɔbˈrɑnʲːɑ ˈnɔwɔɦɔ ˈsklɑdu nɐɦlʲɑˈdɔwɔji ˈrɑdɪ tɔwɐˈrɪstxɐ] (poh-RYAH-dohk DEHN-nyy: PEHR-sheh. proh zah-twehr-DZHEN-nyah REECH-noh-hoh fee-nahn-SOH-woh-hoh PLAH-noo. DROO-heh. proh ohb-RAHN-nyah NOH-woh-hoh SKLAH-doo nah-hlyah-DOH-woh-yee RAH-dy toh-vah-RYST-wah)",
          "translation": "AGENDA: 1. On the approval of the annual financial plan. 2. On the election of the new composition of the company's supervisory board."
        },
        {
          "target": "УХВАЛИЛИ: 1. Роботу науково-дослідної лабораторії за звітний період визнати задовільною. 2. Опублікувати результати досліджень у фаховому виданні.",
          "reading": "[uxwɐˈlɪlɪ: ˈpɛrʃɛ. ˈrɔbɔtu nɐuˈkɔwɔ dɔsʲˈlʲidnɔji lɐbɔrɐˈtɔrʲiji zɑ ˈzwʲitnɪj pɛˈrʲiɔd wɪzˈnɑtɪ zɐdɔˈwʲilʲnɔju. ˈdruɦɛ. ɔpublʲikuˈwɑtɪ rɛzulʲˈtɑtɪ dɔsʲˈlʲidʒɛnʲ u fɐxɔˈwɔmu wɪˈdɑnʲnʲi] (ookh-vah-LY-ly: PEHR-sheh. ROH-boh-too nah-oo-KOH-woh dohs-LEED-noh-yee lah-boh-rah-TOH-ry-yee zah ZVEET-nyy peh-REE-ohd vyz-NAH-ty zah-doh-VEEL'-noh-yoo. DROO-heh. oh-poob-lee-koo-VAH-ty reh-zool'-TAH-ty dohs-LEE-dzhen' oo fah-khoh-VOH-moo vy-DAHN-nyee)",
          "translation": "RESOLVED: 1. To recognize the work of the research laboratory for the reporting period as satisfactory. 2. To publish research results in a specialized journal."
        },
        {
          "target": "Контроль за виконанням цієї постанови покласти на заступника голови вченої ради.",
          "reading": "[kɔntˈrɔlʲ zɑ wɪkɔˈnɑnʲːɐm t͡sʲiˈjɛji pɔstɐˈnɔwɪ pɔklɑsˈtɪ nɑ zɐsˈtupnɪkɐ ɦɔlɔˈwɪ ˈwtʃɛnɔji ˈrɑdɪ] (kohn-TROHL' zah vy-koh-NAHN-nyahm tsee-YEH-yee pohs-tah-NOH-wy poh-klahs-TY nah zahs-TOOP-ny-kah hoh-loh-VY VCHEH-noh-yee RAH-dy)",
          "translation": "The control over the implementation of this resolution shall be assigned to the deputy chairman of the academic council."
        }
      ],
      "mnemonics": [
        "Тріада протоколу незмінна: СЛУХАЛИ — ВИСТУПИЛИ — УХВАЛИЛИ; рішення завжди в інфінітиві: «Затвердити, створити, покласти»!"
      ],
      "culturalNotes": [
        "Грамотне протоколювання засідань є гарантом юридичної чинності рішень органів самоврядування та бізнес-структур."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Яка тріада ключових слів становить основу фіксації кожного питання в протоколі?",
          "options": [
            "СЛУХАЛИ — ВИСТУПИЛИ — УХВАЛИЛИ (Standard tripartite sequence in Ukrainian meeting minutes)",
            "ГОВОРИЛИ — ДУМАЛИ — ЗРОБИЛИ",
            "ПИТАННЯ — ВІДПОВІДЬ — РІШЕННЯ",
            "ЧИТАЛИ — ПИСАЛИ — ПІДПИСАЛИ"
          ],
          "answerIndex": 0,
          "explanation": "Офіційний стандарт протоколювання вимагає тріади: СЛУХАЛИ — ВИСТУПИЛИ — УХВАЛИЛИ (або ПОСТАНОВИЛИ)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "У якій граматичній формі формулюються рішення в частині «УХВАЛИЛИ» протоколу?",
          "options": [
            "У формі інфінітива: Затвердити звіт, покласти контроль (Infinitive mood)",
            "У минулому часі: Затвердили звіт",
            "У наказовому способі: Затвердіть звіт",
            "У майбутньому часі: Будемо затверджувати"
          ],
          "answerIndex": 0,
          "explanation": "Рішення в протоколі формулюються інфінітивом: «Затвердити...», «Схвалити...», «Покласти контроль...»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть правильний запис пункту порядку денного в протоколі:",
          "options": [
            "ПОРЯДОК ДЕННИЙ: 1. Про підсумки приймальної кампанії 2026 року.",
            "ПОРЯДОК ДЕННИЙ: 1. Підсумки по приймальній кампанії.",
            "ПОРЯДОК ДЕННИЙ: 1. Як пройшла кампанія.",
            "ПОРЯДОК ДЕННИЙ: 1. Щодо проведення по кампанії."
          ],
          "answerIndex": 0,
          "explanation": "Пункти порядку денного починаються прийменником «Про...» у називному / місцевому відмінку."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u23-l5": {
    "id": "uk-u23-l5",
    "subject": "ukrainian",
    "unit": 23,
    "lessonNumber": 5,
    "title": "Етикет електронного листування та ділових переговорів",
    "level": "B2",
    "objective": "Опанувати стандарти цифрового ділового листування (тема листа, вкладення, етикет відповідей) та лексику дипломатичних і бізнес-переговорів.",
    "presentation": {
      "explanation": "Сучасний діловий етикет в електронному листуванні (Netiquette) та телефонних переговорах вимагає лаконічності, ввічливості та поваги до часу адресата:\n\n1. Тема електронного листа (Subject Line):\n   - Тема має бути чіткою та інформативною: *«Комерційна пропозиція щодо постачання обладнання | ТОВ \"Альфа\"»*, *«Резюме на посаду UX/UI дизайнера — Іван Петренко»* (уникайте порожніх або загальних тем типу *«Питання» / «Важливо»*).\n\n2. Робота з вкладеннями (Attachments):\n   - Правильно: *«Додаю до листа оновлений файл проєкту»* / *«Надсилаю у додатку розрахунки»* (НЕ *прикріпляю файл*);\n   - Формат вкладень має бути загальнодоступним (PDF для документів).\n\n3. Дипломатичні формули ділових переговорів:\n   - Уточнення позиції: *«Дозвольте уточнити деякі деталі...»*;\n   - Пропозиція компромісу: *«Ми готові піти назустріч за умови...»*;\n   - Ввічлива незгода: *«На жаль, наразі ми не маємо змоги прийняти ці умови, проте пропонуємо альтернативний варіант...»*;\n   - Завершення комунікації: *«Дякуємо за плідну розмову, надішлемо підсумковий протокол зустрічі (Follow-up) до кінця робочого дня»*.",
      "examples": [
        {
          "target": "Додаю до листа фінансовий звіт за попередній квартал та проєкт кошторису на наступний фінансовий рік.",
          "reading": "[dɔˈdɑju dɔ ˈlɪstɐ fʲinɐnˈsɔwɪj zwʲit zɑ pɔpɛˈrɛdnʲij ˈkwɑrtɐl tɑ prɔˈjɛkt kɔʃˈtɔrɪsu nɑ nɐsˈtupnɪj fʲinɐnˈsɔwɪj rʲik] (doh-DAH-yoo doh LYS-tah fee-nahn-SOH-vyy zveet zah poh-peh-RED-neey KVAHR-tahl tah proh-YEHKT kosh-TOH-ry-soo nah nahs-TOOP-nyy fee-nahn-SOH-vyy reek)",
          "translation": "I attach to the letter the financial report for the previous quarter and the budget draft for the next financial year."
        },
        {
          "target": "Будемо щиро вдячні за надання зворотного зв'язку до кінця поточного робочого тижня.",
          "reading": "[ˈbudɛmɔ ˈʃtʃɪrɔ ˈwdʲɑtʃnʲi zɑ nɐˈdɑnʲːɑ zwɔˈrɔtnɔɦɔ zwjɑzˈku dɔ kʲinʲˈt͡sʲɑ pɔˈtɔtʃnɔɦɔ rɔˈbɔtʃɔɦɔ ˈtɪʒnʲɑ] (BOO-deh-moh SHCHY-roh VDYAHCH-nee zah nah-DAHN-nyah zwoh-ROHT-noh-hoh zvyahz-KOO doh keen-TSYAH poh-TOHCH-noh-hoh roh-BOH-choh-hoh TYZH-nyah)",
          "translation": "We will be sincerely grateful for providing feedback before the end of the current working week."
        },
        {
          "target": "Ми високо цінуємо наше партнерство та готові запропонувати взаємовигідні умови довгострокової співпраці.",
          "reading": "[mɪ wɪsɔˈkɔ t͡sʲiˈnujɛmɔ ˈnɑʃɛ pɐrtˈnɛrstwɔ tɑ ɦɔˈtɔwʲi zɐprɔpɔnuˈwɑtɪ wzɐjɛmɔwɪˈɦʲidnʲi uˈmɔwɪ dɔwɦɔstrɔˈkɔwɔji spʲiwˈprɑt͡sʲi] (my vy-soh-KOH tsee-NOO-yeh-moh NAH-sheh pahrt-NEHR-stvah tah hoh-TOH-vee zah-proh-poh-noo-VAH-ty vzah-yeh-moh-vy-HEED-nee oo-MOH-vy dov-hoh-stroh-KOH-woh-yee speew-PRAH-tsee)",
          "translation": "We highly value our partnership and are ready to propose mutually beneficial terms for long-term cooperation."
        }
      ],
      "mnemonics": [
        "Не «прикріпляю», а «додаю до листа»! Тема листа — чітка і конкретна! Follow-up — закріплює всі домовленості!"
      ],
      "culturalNotes": [
        "Українська цифрова ділова комунікація спирається на принципи взаємоповаги, чіткості дедлайнів та обов'язкового фідбеку."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно повідомити співрозмовника про додані файли в електронному листі?",
          "options": [
            "Додаю до листа презентацію / надсилаю у додатку (Normative digital correspondence phrasing)",
            "Я прикріпив файл",
            "Дивіться у скріпці",
            "Файл вісить у листі"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною фразою в українському діловому листуванні є «Додаю до листа...» або «Надсилаю у додатку...»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка тема електронного листа є правильно сформульованою за стандартами ділового етикету?",
          "options": [
            "Запит цінової пропозиції на серверне обладнання | ТОВ «Технолоджі» (Clear, specific, and attributed subject line)",
            "Питання",
            "Терміново гляньте!!",
            "Без теми"
          ],
          "answerIndex": 0,
          "explanation": "Тема ділового листа має містити точну суть повідомлення та назву компанії/відправника."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення ділового листування з абсолютно бездоганною стилістикою:",
          "options": [
            "Додаємо до листа проєкт комерційної пропозиції та будемо вдячні за зворотний зв'язок.",
            "Прикріпляємо файл з пропозицією і чекаємо обратний зв'язок.",
            "Висилаємо пропозицію у скріпці, дайте швидку відповідь.",
            "Шлемо файл, гляньте будь ласка."
          ],
          "answerIndex": 0,
          "explanation": "«Додаємо до листа... зворотний зв'язок» — бездоганні норми українського ділового мовлення."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u24-l1": {
    "id": "uk-u24-l1",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 1,
    "title": "Анатомічна номенклатура та фізіологія людини",
    "level": "B2",
    "objective": "Опанувати питому українську анатомічну термінологію (органи, системи тіла), правопис складних медичних прикметників через дефіс та усунення русизмів в анатомії.",
    "presentation": {
      "explanation": "Українська медична термінологія має багату наукову традицію, де анатомічні назви ґрунтуються на питомих коренях та міжнародних латинських стандартах:\n\n1. Основні органи та анатомічні структури:\n   - Внутрішні органи: *серце, легені, печінка, нирки, селезінка, підшлункова залоза, шлунок, кишечник (тонкий і товстий кишечник / кишка), стравохід, сечовий міхур*;\n   - Питомі терміни (усунення русизмів):\n     * *«стравохід»* (НЕ *пищевод*);\n     * *«судини / кровообіг»* (НЕ *сосуди / циркуляція крові*);\n     * *«піднебіння»* (НЕ *ньобо*);\n     * *«хребет та суглоби»* (НЕ *позвоночник і сустави*);\n     * *«потилиця, скроні, щелепа»*.\n\n2. Назви фізіологічних систем:\n   - *серцево-судинна система, дихальна система, нервова система, травна система (шлунково-кишковий тракт), опорно-руховий апарат, ендокринна та імунна системи*.\n\n3. Правопис складних медичних прикметників:\n   - Пишуться через ДЕФІС, якщо утворені від незалежних понять або мають відтінок складної взаємодії: *серцево-судинний, шлунково-кишковий, кістково-м'язовий, нервово-психічний*.",
      "examples": [
        {
          "target": "Серцево-судинна система забезпечує безперервний кровообіг та доставку кисню й поживних речовин до всіх органів і тканин.",
          "reading": "[sɛrt͡sɛwɔ suˈdɪnnɐ sɪsˈtɛmɐ zɐbɛzˈpɛtʃujɛ bɛzpɛˈrɛrnɪj krɔwɔˈɔbʲiɦ tɑ dɔsˈtɑwku ˈkɪsʲnʲu j pɔˈʒɪwnɪx rɛt͡ʃɔˈwɪn dɔ wʲsʲix ɔrˈɦɑnʲiw i tkɐˈnɪn] (sehr-tseh-VOH soo-DYN-nah sys-TEH-mah zah-bez-PEH-choo-yeh bez-peh-REHR-nyy kroh-woh-OH-beeh tah dohs-TAHV-koo KYS-nyoo y poh-ZHYV-nykh reh-choh-VYN doh VSEEKH ohr-HAH-neew ee tkah-NYN)",
          "translation": "The cardiovascular system ensures continuous blood circulation and delivery of oxygen and nutrients to all organs and tissues."
        },
        {
          "target": "Печінка та підшлункова залоза відіграють вирішальну роль у процесах метаболізму та нейтралізації токсичних сполук.",
          "reading": "[pɛˈtʃʲinkɐ tɑ pʲidʃlunˈkɔwɐ ˈzɑlɔzɐ wʲidʲiˈɦrɑjutʲ wɪrʲiˈʃɑlʲnu rɔlʲ u prɔˈt͡sɛsɐx mɛtɐbɔˈlʲizmu tɑ nɛjtrɐlʲizɑˈt͡sʲiji tɔkˈsɪtʃnɪx spɔˈluk] (peh-CHEEN-kah tah peed-shloon-KOH-wah ZAH-loh-zah vee-dee-HRAH-yoot' vy-ree-SHAHL'-noo rohl' oo proh-TSEH-sahkh meh-tah-boh-LEEZ-moo tah nehy-trah-lee-ZAH-tsee-yee tohk-SYCH-nykh spoh-LOOK)",
          "translation": "The liver and pancreas play a crucial role in the processes of metabolism and neutralization of toxic compounds."
        },
        {
          "target": "Здорова постава та зміцнення м'язів спини запобігають дегенеративним змінам у шийному та поперековому відділах хребта.",
          "reading": "[zdɔˈrɔwɐ pɔsˈtɑwɐ tɑ zmʲit͡sˈnɛnʲːɑ ˈmjɑzʲiw spɪˈnɪ zɐpɔbʲiˈɦɑjutʲ dɛɦɛnɛrɐˈtɪwnɪm ˈzmʲinɐm u ˈʃɪjnɔmu tɑ pɔpɛrɛˈkɔwɔmu ˈwʲidʲːilɐx xrɛbˈtɑ] (zdoh-ROH-wah pohs-TAH-wah tah zmeests-NEN-nyah MYAH-zeew spy-NY zah-poh-bee-HAH-yoot' deh-heh-neh-rah-TYV-nym ZMEE-nahm oo SHYHY-noh-moo tah poh-peh-reh-KOH-woh-moo VEED-dee-lahkh khrehb-TAH)",
          "translation": "Healthy posture and strengthening back muscles prevent degenerative changes in the cervical and lumbar sections of the spine."
        }
      ],
      "mnemonics": [
        "Не «пищевод», а «стравохід»! Не «позвоночник», а «хребет»! Складні системи через дефіс: «серцево-судинний, шлунково-кишковий»!"
      ],
      "culturalNotes": [
        "Українські медичні словники 1920-х років (Інститут української наукової мови) створили самобутню та бездоганну термінологічну систему, відновлену в сучасній медицині."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно українською мовою називається орган, що з'єднує глотку зі шлунком?",
          "options": [
            "Стравохід (Authentic Ukrainian anatomical term for esophagus)",
            "Пищевод",
            "Їдопровід",
            "Травник"
          ],
          "answerIndex": 0,
          "explanation": "Нормативним науковим анатомічним терміном в українській мові є «стравохід»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть правильний правопис медичного терміна:",
          "options": [
            "Серцево-судинний (Written with hyphen as a compound coordinate medical adjective)",
            "Серцевосудинний",
            "Серцево судинний",
            "Серцевий-судинний"
          ],
          "answerIndex": 0,
          "explanation": "Складні прикметники на позначення взаємопов'язаних медичних систем пишуться через дефіс: «серцево-судинний»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому ВСІ анатомічні терміни вжито без жодної лексичної чи орфографічної помилки:",
          "options": [
            "Магнітно-резонансна томографія дозволяє детально дослідити міжхребцеві диски та суглоби хребта.",
            "Томографія дозволяє дослідити диски і сустави позвоночника.",
            "МРТ досліджує суглоби пополам з хребтом.",
            "Обстеження виявило патологію міжпозвоночних дисків."
          ],
          "answerIndex": 0,
          "explanation": "Терміни «міжхребцеві диски», «суглоби», «хребет» є бездоганними науковими формами."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u24-l2": {
    "id": "uk-u24-l2",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 2,
    "title": "Опис симптомів, характеру болю та скарг пацієнта",
    "level": "B2",
    "objective": "Опанувати синтаксис та лексику опису фізичного стану й симптомів: безособові конструкції відчуттів (паморочиться, нудить, лихоманить), диференціацію видів болю та клінічні скарги.",
    "presentation": {
      "explanation": "В українській мові опис самопочуття та клінічних симптомів має специфічні синтаксичні моделі:\n\n1. Безособові предикативні конструкції відчуттів:\n   - *«Мені паморочиться в голові»* (НЕ *я відчуваю головокружіння*);\n   - *«Мене нудить / мене занудило»* (НЕ *мене тошнить*);\n   - *«Хворого лихоманить / морозить»* (підвищення температури, озноб);\n   - *«Мені бракує повітря / перехоплює подих»* (задишка — ядуха);\n   - *«У мене заклало ніс» / «Першить у горлі»*.\n\n2. Градація та характер больових відчуттів:\n   - *гострий біль* (acute), *тупий біль* (dull), *ниючий біль* (aching);\n   - *пекучий біль* (burning), *колючий біль* (stabbing / lancinating);\n   - *пульсуючий біль* (throbbing), *переймоподібний біль* (cramping / colicky);\n   - *біль, що іррадіює (віддає) у ліве плече або лопатку*.\n\n3. Синтаксис дієслова «боліти»:\n   - *«У мене болить (що? — Наз. в.) голова / спина / горло»*;\n   - *«У пацієнта болять (мн.) очі / суглоби»*.",
      "examples": [
        {
          "target": "Пацієнт поскаржився на різкий колючий біль за грудиною, що віддає в ліву руку та посилюється під час фізичного навантаження.",
          "reading": "[pɐt͡sʲiˈjɛnt pɔskɐrˈʒɪwsʲɑ nɑ ˈrʲizkɪj kɔˈlʲutʃɪj bʲilʲ zɑ ɦruˈdɪnɔju, ʃtʃɔ wʲidˈdɑjɛ w ˈlʲiwu ˈruku tɑ pɔsɪˈlʲujɛtʲsʲɑ pʲid t͡ʃɑs fʲiˈzɪtʃnɔɦɔ nɐwɑntɐˈʒɛnʲːɑ] (pah-tsee-YEHNT poh-skahr-ZHYV-syah nah REEZ-kyy koh-LYOO-chyy beel' zah hroo-DY-noh-yoo, shchoh veed-DAH-yeh v LEE-voo ROO-koo tah poh-sy-LYOO-yeht'-syah peed chahs fee-ZYCH-noh-hoh nah-vahn-tah-ZHEN-nyah)",
          "translation": "The patient complained of a sharp stabbing pain behind the sternum that radiates to the left arm and intensifies during physical exertion."
        },
        {
          "target": "Зранку мені сильно паморочиться в голові, з'явилася нудота та загальна слабкість у всьому тілі.",
          "reading": "[ˈzrɑnku mɛˈnʲi ˈsʲilʲnɔ pɐmɔrɔˈtʃɪtʲsʲɑ w ɦɔlɔˈwʲi, zjɑwɪˈlɑsʲɑ nuˈdɔtɐ tɑ zɐˈɦɑlʲnɐ ˈslɑbkʲisʲtʲ u wˈsʲɔmu ˈtʲilʲi] (ZRAHN-koo meh-NEE SEEL'-noh pah-moh-roh-CHY-tsyah v hoh-loh-VEE, zyah-vy-LAH-syah noo-DOH-tah tah zah-HAHL'-nah SLAHB-keest' oo VSYOH-moo TEE-lee)",
          "translation": "Since morning I have been feeling very dizzy; nausea and general weakness in the entire body have appeared."
        },
        {
          "target": "При переохолодженні виникає постійний ниючий біль у попереку, який обмежує рухливість суглобів.",
          "reading": "[prɪ pɛrɛɔxɔˈlɔdʒɛnʲːi wɪnɪˈkɑjɛ pɔsʲˈtʲijnɪj ˈnɪjutʃɪj bʲilʲ u pɔpɛˈrɛku, jɑˈkɪj ɔbmɛˈʒujɛ ruxˈlɪwʲisʲtʲ suɦˈlɔbʲiw] (pry peh-reh-oh-khoh-LOH-dzhen-nyee vy-ny-KAH-yeh pohs-TEEY-nyy NY-yoo-chyy beel' oo poh-peh-REH-koo, yah-KYY ohb-meh-ZHOO-yeh rookh-LY-veest' sooh-LOH-beew)",
          "translation": "During hypothermia, a persistent aching pain occurs in the lower back, restricting joint mobility."
        }
      ],
      "mnemonics": [
        "Запаморочення описуй безособово: «паморочиться в голові, мене нудить, лихоманить, бракує подиху»!"
      ],
      "culturalNotes": [
        "В українському фольклорі та класичній літературі багатство описів душевного та тілесного болю виробило надзвичайно точну дескриптивну мову симптомів."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно описати відчуття втрати рівноваги та кружіння голови?",
          "options": [
            "Мені паморочиться в голові (Authentic impersonal construction for dizziness)",
            "Я маю головокружіння",
            "У мене голова кружиться",
            "Я кручуся головою"
          ],
          "answerIndex": 0,
          "explanation": "Нормативною українською фразою для вираження запаморочення є «мені паморочиться в голові»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яким прикметником позначають нападоподібний біль у животі?",
          "options": [
            "Переймоподібний біль (Colicky / cramping pain term)",
            "Схоплений біль",
            "Переривний біль",
            "Кривий біль"
          ],
          "answerIndex": 0,
          "explanation": "Клінічний термін для болю у вигляді нападів (перейм) — «переймоподібний біль»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому скарги пацієнта описано граматично й стилістично бездоганно:",
          "options": [
            "Хворого турбує пекучий біль за грудиною, задишка та сухий кашель.",
            "Хворого турбує палюча біль за грудьми, одишка і кашель.",
            "Хворий жаліється на біль у грудях і його тошнить.",
            "У пацієнта головокружіння і пече у грудях."
          ],
          "answerIndex": 0,
          "explanation": "«Пекучий біль» (чоловічий рід), «задишка» — точні й нормативні медичні формулювання."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u24-l3": {
    "id": "uk-u24-l3",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 3,
    "title": "Діагностичні процедури, лабораторні аналізи та обстеження",
    "level": "B2",
    "objective": "Опанувати термінологію медичної діагностики, види лабораторних досліджень (аналізи натщесерце, показники крові) та інструментальні методи обстеження.",
    "presentation": {
      "explanation": "Медична діагностика включає лабораторні, функціональні та апаратні методи дослідження організму:\n\n1. Лабораторні аналізи та підготовка до них:\n   - *«Загальний клінічний аналіз крові / сечі»*;\n   - *«Біохімічний аналіз крові»* (рівень глюкози, білірубіну, холестерину, печінкові проби);\n   - *«Здавати кров натщесерце»* (НЕ *натощак / на голодний шлунок*);\n   - *«Забір біологічного матеріалу»*;\n   - *«Показники в межах норми / відхилення від референтних значень»*.\n\n2. Апаратні та інструментальні дослідження:\n   - *«Ультразвукове дослідження (УЗД) органів черевної порожнини»*;\n   - *«Електрокардіографія (ЕКГ) / добове моніторування серцевого ритму»*;\n   - *«Комп'ютерна томографія (КТ) / магнітно-резонансна томографія (МРТ)»*;\n   - *«Рентгенографія грудної клітки»*;\n   - *«Ендоскопічне обстеження (гастроскопія, колоноскопія)»*.\n\n3. Дієслівне керування в діагностиці:\n   - *«Вимірювати артеріальний тиск»* (НЕ *міряти давлєніє*);\n   - *«Призначати додаткове обстеження»*;\n   - *«Встановлювати попередній / клінічний діагноз»*.",
      "examples": [
        {
          "target": "Для точного встановлення діагнозу лікар скерував пацієнта на ультразвукове дослідження нирок та біохімічний аналіз крові.",
          "reading": "[dlʲɑ ˈtɔtʃnɔɦɔ wstɐnɔwˈlɛnʲːɑ dʲiˈɑɦnɔzu ˈlʲikɐr skɛruˈwɑw pɐt͡sʲiˈjɛntɐ nɑ ulʲtrɐzwuˈkɔwɛ dɔsʲˈlʲidʒɛnʲːɑ ˈnɪrɔk tɑ bʲiɔxʲiˈmʲitʃnɪj ɐˈnɑlʲiz krɔˈwʲi] (dlyah TOHCH-noh-hoh vstah-nohv-LEN-nyah dee-AHH-noh-zoo LEE-kahr skeh-roo-VAHV pah-tsee-YEHN-tah nah ool'-trah-zwoo-KOH-weh dohs-LEED-zhen-nyah NY-rohk tah bee-oh-khee-MEE-chnyy ah-NAH-leez kroh-VEE)",
          "translation": "To establish an accurate diagnosis, the doctor referred the patient for an ultrasound examination of the kidneys and a biochemical blood test."
        },
        {
          "target": "Зверніть увагу: забір венозної крові для визначення рівня цукру слід проводити суворо натщесерце.",
          "reading": "[zwɛrˈnʲitʲ uˈwɑɦu: zɐˈbʲir wɛˈnɔznɔji krɔˈwʲi dlʲɑ wɪznɐˈtʃɛnʲːɑ ˈrʲiwnʲɑ ˈt͡sukru sʲlʲid prɔwɔˈdɪtɪ ˈsurɔwɔ nɐtʃt͡ʃɛˈsɛrt͡sɛ] (zvehr-NEET oo-VAH-hoo: zah-BEER veh-NOHZ-noh-yee kroh-VEE dlyah vyz-nah-CHEN-nyah REEV-nyah TSOO-kroo sleed proh-woh-DY-ty SOO-roh-woh naht-shcheh-SEHR-tseh)",
          "translation": "Please note: venous blood sampling to determine blood sugar levels must be performed strictly on an empty stomach."
        },
        {
          "target": "Терапевт виміряв артеріальний тиск і призначив електрокардіограму для оцінки роботи серця.",
          "reading": "[tɛrɐˈpɛwt wɪˈmʲirʲɑw ɐrtɛrʲiˈɑlʲnɪj tɪsk i prɪzˈnɑtʃɪw ɛlɛktrɔkɐrdʲiɔˈɦrɑmu dlʲɑ ɔˈt͡sʲinkɪ rɔˈbɔtɪ ˈsɛrt͡sɑ] (teh-rah-PEHVT vy-MEE-ryahv ahr-teh-ree-AHL'-nyy TYSK ee pryz-NAH-chyv eh-lehk-troh-kahr-dee-oh-HRAH-moo dlyah oh-TSEEN-ky roh-BOH-ty SEHR-tsah)",
          "translation": "The therapist measured blood pressure and ordered an electrocardiogram to evaluate cardiac performance."
        }
      ],
      "mnemonics": [
        "Кров здають «натщесерце» (не натощак!); тиск «вимірюють» (не міряють давлєніє!); УЗД — це ультразвукове дослідження!"
      ],
      "culturalNotes": [
        "Сучасна електронна система охорони здоров'я України (eHealth) повністю стандартизована українською медичною термінологією за міжнародною класифікацією ICPC-2."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно українською мовою сказати про здачу аналізів до прийому їжі?",
          "options": [
            "Здавати аналізи натщесерце (Standard adverb for fasting / on an empty stomach)",
            "Здавати аналізи натощак",
            "Здавати на порожній живіт",
            "Здавати без їди"
          ],
          "answerIndex": 0,
          "explanation": "Нормативне літературне та медичне слово в українській мові — «натщесерце»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативне медичне словосполучення для перевірки показників тиску:",
          "options": [
            "Вимірювати артеріальний тиск (To measure arterial pressure - correct collocation)",
            "Міряти кров'яне давлєніє",
            "Знімати тиск",
            "Перевіряти напір крові"
          ],
          "answerIndex": 0,
          "explanation": "Нормативне клінічне словосполучення — «вимірювати артеріальний тиск»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому діагностичне направлення сформульовано грамотно:",
          "options": [
            "Пацієнтові рекомендовано пройти комплексне ультразвукове дослідження та здати кров натщесерце.",
            "Пацієнту треба пройти УЗД і здати аналізи натощак.",
            "Лікар призначив поміряти давлєніє і зробити знімок на голодний шлунок.",
            "Рекомендовано перевірку тиску та аналізи натощак."
          ],
          "answerIndex": 0,
          "explanation": "«Комплексне ультразвукове дослідження» та «здати кров натщесерце» відповідають усім медичним нормам."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u24-l4": {
    "id": "uk-u24-l4",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 4,
    "title": "Фармацевтична термінологія, лікарські форми та правила дозування",
    "level": "B2",
    "objective": "Опанувати фармацевтичну лексику (форми ліків, спосіб застосування, дозування), термінологію побічних дій та синтаксис інструкцій до медичних препаратів.",
    "presentation": {
      "explanation": "Фармацевтична термінологія вимагає абсолютної точності у позначенні лікарських форм, дозування та способів застосування:\n\n1. Основні лікарські форми:\n   - Тверді: *таблетки (вкриті оболонкою, шипучі), капсули, драже, порошки*;\n   - Рідкі: *розчин для ін'єкцій / інфузій, сироп, суспензія, краплі (очні, вушні, назальні), настоянка, екстракт*;\n   - М'які: *мазь, гель, крем, лінімент, супозиторії (свічки)*;\n   - Аерозольні: *спрей, аерозоль для інгаляцій*.\n\n2. Способи застосування та прийменникові конструкції:\n   - *«Приймати всередину (перорально) по одній таблетці тричі на добу»*;\n   - *«Приймати за тридцять хвилин до їди / через годину після їди»* (НЕ *під час їди* як універсал);\n   - *«Запивати достатньою кількістю питної води»*;\n   - *«Наносити тонким шаром на уражену поверхню шкіри двічі на день»*;\n   - *«Препарат призначений для внутрішньовенного або внутрішньом'язового введення»*.\n\n3. Застереження та фармакодинамічні терміни:\n   - *«Протипоказання, побічні реакції, індивідуальна підвищена чутливість (гіперчутливість), взаємодія з іншими лікарськими засобами, передозування, термін придатності»*.",
      "examples": [
        {
          "target": "Препарат слід приймати перорально по одній капсулі двічі на добу після їди, запиваючи склянкою води.",
          "reading": "[prɛpɐˈrɑt sʲlʲid prɪjˈmɑtɪ pɛrɔˈrɑlʲnɔ pɔ ɔdʲˈnʲij kɑpˈsulʲi ˈdwʲit͡ʃʲi nɑ ˈdɔbu ˈpʲisʲlʲɑ ˈjijidɪ, zɐpɪˈwɑjutʃɪ sklʲɑnˈkɔju wɔˈdɪ] (preh-pah-RAHT sleed pryy-MAH-ty peh-roh-RAHL'-noh poh ohd-NEEY kahp-SOO-lee DWEE-chee nah DOH-boo PEES-lyah YEE-dy, zah-py-VAH-yoo-chy sklyahn-KOH-yoo woh-DY)",
          "translation": "The drug should be taken orally, one capsule twice a day after meals, with a glass of water."
        },
        {
          "target": "Мазь наносять тонким шаром на уражені ділянки шкіри, уникаючи потрапляння препарату на слизові оболонки.",
          "reading": "[mɑzʲ nɐˈnɔsʲɑtʲ ˈtɔnkɪm ˈʃɑrɔm nɑ urɑˈʒɛnʲi dʲiˈlʲɑnkɪ ʃkʲiˈrɪ, unɪˈkɑjutʃɪ pɔtrɐpˈlʲɑnʲːɑ prɛpɐˈrɑtu nɑ slɪzɔˈwʲi ɔbɔˈlɔnkɪ] (MAHZ' nah-NOH-syat' TOHN-kym SHAH-rohm nah oo-rah-ZHEH-nee dee-LYAHN-ky shkee-RY, oo-ny-KAH-yoo-chy poh-trahp-LYAHN-nyah preh-pah-RAH-too nah sly-zoh-VEE oh-boh-LOHN-ky)",
          "translation": "The ointment is applied in a thin layer to the affected areas of the skin, avoiding contact with mucous membranes."
        },
        {
          "target": "Перед застосуванням антибіотиків обов'язково ознайомтеся з переліком можливих протипоказань та побічних ефектів.",
          "reading": "[ˈpɛrɛd zɐstɔsuˈwɑnʲːɐm ɐntɪbʲiˈɔtɪkʲiw ɔbɔwˈjɑzkɔwɔ ɔznɐˈjɔmtɛsʲɑ z pɛrɛˈlʲikɔm mɔʒˈlɪwɪx prɔtɪpɔˈkɑzɐnʲ tɑ pɔˈbʲitʃnɪx ɛˈfɛktʲiw] (PEH-red zahs-toh-soo-VAHN-nyahm ahn-ty-bee-OH-ty-keew oh-bov-YAHZ-koh-woh ohz-nah-YOHM-tehs'-yah z peh-reh-LEE-kohm mohzh-LY-wykh proh-ty-poh-KAH-zahn' tah poh-BEECH-nykh eh-FEHK-teew)",
          "translation": "Before using antibiotics, be sure to familiarize yourself with the list of possible contraindications and side effects."
        }
      ],
      "mnemonics": [
        "Приймай ліки «двічі на добу», «до/після їди», запивай водою; перевіряй «протипоказання та термін придатності»!"
      ],
      "culturalNotes": [
        "В українських аптеках усі офіційні інструкції до ліків складаються виключно державною мовою відповідно до закону про лікарські засоби."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно українською мовою вказати періодичність прийому препарату (два рази на день)?",
          "options": [
            "Двічі на добу (Normative medical dosage frequency in Ukrainian)",
            "Два рази в сутки",
            "Дважди на день",
            "Двічі в сутках"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна фраза в інструкціях до ліків — «двічі на добу» (або «двічі на день»)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається розділ медичної інструкції, що забороняє прийом препарату певним категоріям хворих?",
          "options": [
            "Протипоказання (Contraindications - standard pharmaceutical term)",
            "Заборони",
            "Недопуски",
            "Відхилення"
          ],
          "answerIndex": 0,
          "explanation": "Офіційний фармацевтичний термін — «протипоказання»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть фрагмент фармацевтичної інструкції, укладений бездоганно:",
          "options": [
            "Приймати по одній таблетці двічі на добу після їди. Зберігати в сухому, недоступному для дітей місці.",
            "Пити по одній таблетці два рази в сутки після їди. Тримати де діти не дістануть.",
            "Приймати капсули дважди на день при їді.",
            "Вживати ліки по разу в сутки на голодний шлунок."
          ],
          "answerIndex": 0,
          "explanation": "«По одній таблетці двічі на добу після їди... в сухому, недоступному для дітей місці» — бездоганний стандарт фармації."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u24-l5": {
    "id": "uk-u24-l5",
    "subject": "ukrainian",
    "unit": 24,
    "lessonNumber": 5,
    "title": "Діалог лікаря та пацієнта: збір анамнезу та рекомендації",
    "level": "B2",
    "objective": "Опанувати мовний етикет медичної консультації: опитування хворого (збір анамнезу), постановка уточнювальних запитань, надання рекомендацій та дотримання медичної деонтології.",
    "presentation": {
      "explanation": "Консультація лікаря ґрунтується на поєднанні високого професіоналізму, емпатії та чітких алгоритмів збору інформації (анамнезу):\n\n1. Формули початку прийому та збору скарг:\n   - *«Добрий день! Проходьте, сідайте, будь ласка. На що скаржитеся?»*;\n   - *«Розкажіть детальніше, що саме вас турбує?»*;\n   - *«Коли саме ви вперше відчули ці симптоми?»*;\n   - *«Чи пов'язуєте ви погіршення стану зі стресом, переохолодженням або їжею?»*.\n\n2. Уточнення анамнезу життя та алергологічного статусу:\n   - *«Чи є у вас алергія на будь-які медикаменти або харчові продукти?»*;\n   - *«Чи маєте ви хронічні захворювання серця, шлунка або нирок?»*;\n   - *«Які лікарські препарати ви приймаєте на постійній основі?»*.\n\n3. Формулювання лікарських рекомендацій та призначення:\n   - *«Вам призначено постільний режим на три дні та рясне тепле пиття»*;\n   - *«Рекомендую дотримуватися щадної дієти та виключити гостру їжу»*;\n   - *«У разі підвищення температури понад 38,5 °C прийміть жарознижувальний засіб»*;\n   - *«Прийдіть на повторний огляд через п'ять днів із результатами аналізів»*.",
      "examples": [
        {
          "target": "— На що саме ви скаржитеся? — Мене вже три дні турбує сухий кашель, підвищена температура та біль у м'язах.",
          "reading": "[nɑ ʃtʃɔ ˈsɑmɛ wɪ skɐrˈʒɪtɛsʲɑ? ˈmɛnɛ wʒɛ trɪ dnʲi turˈbujɛ suˈxɪj ˈkɑʃɛlʲ, pʲidˈwɪʃtʃɛnɐ tɛmpɛrɐˈturɐ tɑ bʲilʲ u ˈmjɑzɐx] (nah shchoh SAH-meh vy skahr-ZHY-tehs'-yah? MEH-neh vzheh try dnee toor-BOO-yeh soo-KHYY KAH-shel', peed-VYSH-cheh-nah tehm-peh-rah-TOO-rah tah beel' oo MYAH-zahkh)",
          "translation": "— What exactly are your complaints? — For three days I have been troubled by a dry cough, elevated temperature, and muscle pain."
        },
        {
          "target": "Лікар уважно вислухав легені пацієнта фонендоскопом, виміряв сатурацію та призначив курс інгаляційної терапії.",
          "reading": "[ˈlʲikɐr uˈwɑʒnɔ ˈwɪsluxɐw lɛˈɦɛnʲi pɐt͡sʲiˈjɛntɐ fɔnɛndɔsˈkɔpɔm, wɪˈmʲirʲɑw sɐturɐˈt͡sʲiju tɑ prɪzˈnɑtʃɪw kurs inɦɐlʲɑt͡sʲijˈnɔji tɛrɐˈpʲiji] (LEE-kahr oo-VAHZH-noh VY-sloo-khahv leh-HEH-nee pah-tsee-YEHN-tah foh-nehn-dohs-KOH-pohm, vy-MEE-ryahv sah-too-rah-TSEE-yoo tah pryz-NAH-chyv koors een-hah-lyah-tseey-NOH-yee teh-rah-PEE-yee)",
          "translation": "The doctor listened carefully to the patient's lungs with a phonendoscope, measured saturation, and prescribed a course of inhalation therapy."
        },
        {
          "target": "Не хвилюйтеся, своєчасно розпочате лікування дозволить уникнути ускладнень та швидко відновити сили.",
          "reading": "[nɛ xwʲiˈlʲujtɛsʲɑ, swɔjɛˈt͡ʃɑsnɔ rɔzpɔˈtʃɑtɛ lʲikuˈwɑnʲːɑ dɔzˈwɔlʲitʲ unɪkˈnutɪ usklɐdˈnɛnʲ tɑ ˈʃwɪdkɔ wʲidnɔˈwɪtɪ ˈsɪlɪ] (neh khwee-LYOOY-tehs'-yah, swoh-yeh-CHAHS-noh roz-poh-CHAH-teh lee-koo-VAHN-nyah dohz-VOH-leet' oo-nyk-NOO-ty oos-klahd-NEN' tah SHVYD-koh veed-noh-VY-ty SY-ly)",
          "translation": "Do not worry, timely started treatment will help avoid complications and quickly restore your strength."
        }
      ],
      "mnemonics": [
        "Скарги — «На що скаржитеся?»; алергія — «Чи є алергія на ліки?»; фінал — чіткий план лікування та дата повторного огляду!"
      ],
      "culturalNotes": [
        "Медична деонтологія в Україні спирається на партнерську модель відносин «лікар — пацієнт», засновану на інформованій згоді та взаємній довірі."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як лікар стандартно і ввічливо запитує пацієнта про причину візиту?",
          "options": [
            "На що скаржитеся? / Що вас турбує? (Standard polite medical anamnesis question)",
            "Чого прийшли?",
            "Що у вас зламалося?",
            "Хто вас сюди відправив?"
          ],
          "answerIndex": 0,
          "explanation": "Нормативні формули медичного етикету лікаря: «На що скаржитеся?» або «Що вас турбує?»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке запитання обов'язково ставить лікар перед призначенням ін'єкцій чи антибіотиків?",
          "options": [
            "Чи маєте ви алергію на медичні препарати? (Crucial allergy anamnesis inquiry)",
            "Чи любите ви уколи?",
            "Чи дорогі ліки ви купуєте?",
            "Чи є у вас вдома шприци?"
          ],
          "answerIndex": 0,
          "explanation": "Збір алергологічного анамнезу («Чи маєте алергію на препарати?») є обов'язковим стандартом безпеки пацієнта."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть діалогічну репліку лікаря, яка відповідає всім стандартам медичної деонтології та етикету:",
          "options": [
            "Дотримуйтеся призначеного лікування, а в разі погіршення самопочуття негайно зверніться до чергового лікаря.",
            "Пийте що хочете, як стане гірше — прийдете.",
            "Самі вирішуйте коли пити ліки, я не знаю.",
            "Якщо не поможе, то вже нічого не зробиш."
          ],
          "answerIndex": 0,
          "explanation": "Репліка витримана у професійному, турботливому та деонтологічно бездоганному стилі."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u25-l1": {
    "id": "uk-u25-l1",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 1,
    "title": "Конституційне право, верховенство права та основоположні свободи",
    "level": "C1",
    "objective": "Опанувати фундаментальну термінологію конституційного права (верховенство права, презумпція невинуватості, чинне законодавство) та правничий синтаксис нормативно-правових актів.",
    "presentation": {
      "explanation": "Конституційне право визначає засади державного ладу, правовий статус особи та функціонування публічної влади в Україні:\n\n1. Фундаментальні конституційні категорії:\n   - *«Верховенство права (Rule of Law)»* — держава підпорядковується праву, а Конституція України має найвищу юридичну силу;\n   - *«Правова держава, розподіл влади (законодавча, виконавча, судова)»*;\n   - *«Презумпція невинуватості»* — особа вважається невинуватою у вчиненні правопорушення, доки її вину не буде доведено в законному порядку і встановлено обвинувальним вироком суду;\n   - *«Недоторканність особи, житла, таємниця листування та телефонних розмов»*.\n\n2. Усунення системних термінологічних помилок:\n   - Вживайте *«чинне законодавство / чинний закон»* (НЕ *діюче законодавство* — в українській мові активні дієприкметники на -чий є ненормативними!);\n   - Вживайте *«позбавлення волі»* (НЕ *лішеніє волі*);\n   - Вживайте *«захист прав»* (НЕ *защищення*);\n   - Вживайте *«на підставі закону»* (НЕ *на основанії закону*).\n\n3. Синтаксис обов'язку та заборони в конституційних нормах:\n   - *«Кожен має право на...»*, *«Громадяни зобов'язані...»*, *«Ніхто не може бути підданий...»*.",
      "examples": [
        {
          "target": "Конституція України гарантує кожному громадянину право на судовий захист його прав, свобод та законних інтересів.",
          "reading": "[kɔnstɪˈtut͡sʲijɑ ukrɐˈjinɪ ɦɐrɐnˈtujɛ ˈkɔʒnɔmu ɦrɔmɐˈdʲɑnɪnu ˈprɑwɔ nɑ suˈdɔwɪj zɐˈxɪst jɔˈɦɔ prɑw, swɔˈbɔd tɑ zɐˈkɔnnɪx intɛˈrɛsʲiw] (kohn-sty-TOO-tsee-yah oo-krah-YEE-ny hah-rahn-TOO-yeh KOHZH-noh-moo hroh-mah-DYAH-ny-noo PRAH-woh nah soo-DOH-vyy zah-KHYST yoh-HOH prahv, swoh-BOHD tah zah-KOHN-nykh een-teh-REH-seew)",
          "translation": "The Constitution of Ukraine guarantees to every citizen the right to judicial protection of their rights, freedoms, and lawful interests."
        },
        {
          "target": "Відповідно до чинного законодавства, людина, її життя і здоров'я, честь і гідність визнаються в Україні найвищою соціальною цінністю.",
          "reading": "[wʲidpɔˈwʲidnɔ dɔ ˈtʃɪnnɔɦɔ zɐkɔnɔˈdɑwstxɐ, lʲuˈdɪnɐ, ˈjiji ʒɪtʲˈtʲɑ i zdɔˈrɔwjjɑ, tʃɛsʲtʲ i ˈɦʲidnʲisʲtʲ wɪzˈnɑjutʲsʲɑ w ukrɐˈjinʲi nɐjˈwɪʃtʃɔju sɔt͡sʲiˈɑlʲnɔju ˈt͡sʲinnʲisʲtʲu] (veed-poh-VEED-noh doh CHYN-noh-hoh zah-koh-noh-DAHV-stvah, lyoo-DY-nah, yee-YEE zhyht-TYAH ee zdoh-ROHV-yah, chest' ee HEED-neest' vyz-NAH-yoot'-syah v oo-krah-YEE-nee nahy-VYSH-choh-yoo soh-tsee-AHL'-noh-yoo TSEEN-nees-tyoo)",
          "translation": "According to the legislation in force, human life and health, honor and dignity are recognized in Ukraine as the highest social value."
        },
        {
          "target": "Принцип презумпції невинуватості виключає можливість притягнення особи до відповідальності без беззаперечних доказів її вини.",
          "reading": "[ˈprɪnt͡sɪp prɛzumpˈt͡sʲiji nɛwɪnuˈwɑtɔsʲtʲi wɪklʲuˈtʃɑjɛ mɔʒˈlɪwʲisʲtʲ prɪtʲɑɦˈnɛnʲːɑ ɔˈsɔbɪ dɔ wʲidpɔwʲiˈdɑlʲnɔsʲtʲi bɛz bɛzzɐpɛˈrɛtʃnɪx dɔˈkɑzʲiw ˈjiji wɪˈnɪ] (PRYN-tsyp preh-zoomp-TSEE-yee neh-vy-noo-VAH-tohs-tee vy-klyoo-CHAH-yeh mohzh-LY-veest' pry-tyah-HNEN-nyah oh-SOH-by doh veed-poh-vee-DAHL'-nohs-tee bez behz-zah-peh-REHCH-nykh doh-KAH-zeew yee-YEE vy-NY)",
          "translation": "The principle of the presumption of innocence precludes the possibility of holding a person liable without indisputable evidence of their guilt."
        }
      ],
      "mnemonics": [
        "Законодавство — «чинне» (не діюче!); право — «верховенство права»; людина — «найвища цінність»!"
      ],
      "culturalNotes": [
        "Конституція Пилипа Орлика (1710 р.) вважається однією з перших писаних конституцій Європи, що заклала традицію українського правового парламентаризму."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно в українській юридичній мові позначати закон або законодавство, яке діє зараз?",
          "options": [
            "Чинне законодавство / чинний закон (Legislation / statute in force - correct non-calqued term)",
            "Діюче законодавство",
            "Працюючий закон",
            "Теперішнє законодавство"
          ],
          "answerIndex": 0,
          "explanation": "Нормативним правничим терміном в українській мові є «чинне законодавство» (активний дієприкметник «діючий» є калькою)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається правовий принцип, згідно з яким ніхто не може бути засуджений без вироку суду?",
          "options": [
            "Презумпція невинуватості (Presumption of innocence)",
            "Презумпція правомірності",
            "Принцип амністії",
            "Судовий імунітет"
          ],
          "answerIndex": 0,
          "explanation": "Фундаментальний правовий принцип — «презумпція невинуватості»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому конституційну норму сформульовано з бездоганною юридичною термінологією:",
          "options": [
            "Відповідно до чинного законодавства України, усі сумніви щодо доведеності вини особи тлумачаться на її користь.",
            "Згідно діючого законодавства, всі сумніви по вині людини трактуються в її пользу.",
            "По діючому закону сумніви щодо вини ідуть на користь обвинуваченого.",
            "У відповідності з діючими нормами сумніви рішаються в пользу особи."
          ],
          "answerIndex": 0,
          "explanation": "«Відповідно до чинного законодавства... сумніви тлумачаться на користь» — еталон правничої мови."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u25-l2": {
    "id": "uk-u25-l2",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 2,
    "title": "Судова система, інстанції та процесуальний порядок розгляду справ",
    "level": "C1",
    "objective": "Опанувати термінологію судочинства (судові інстанції, учасники процесу, позовне провадження), мовні формули судових рішень та процесуальне керування дієслів.",
    "presentation": {
      "explanation": "Судочинство в Україні здійснюється Конституційним Судом України та судами загальної юрисдикції відповідно до процесуальних кодексів:\n\n1. Ієрархія судових інстанцій:\n   - *«Місцевий суд (суд першої інстанції)»* — розглядає справу по суті;\n   - *«Апеляційний суд (суд апеляційної інстанції)»* — переглядає судові рішення, що не набрали законної сили;\n   - *«Верховний Суд (суд касаційної інстанції)»* — найвищий судовий орган у системі судоустрою;\n   - *«Конституційний Суд України»* — здійснює конституційний контроль законів.\n\n2. Учасники судового процесу:\n   - У цивільному / господарському процесі: *«Позивач»* (подає позов) та *«Відповідач»* (до якого пред'явлено вимоги), *«Треті особи»*;\n   - Представники: *«Адвокат, законний представник, прокурор»*.\n\n3. Нормативні дієслівні процесуальні кліше:\n   - *«Подавати позов до суду»* (НЕ *подавати в суд*);\n   - *«Відкривати провадження у справі»*;\n   - *«Задовольнити позовні вимоги у повному обсязі / частково»*;\n   - *«Відмовити в задоволенні позову»*;\n   - *«Оскаржити рішення суду в апеляційному / касаційному порядку»*;\n   - *«Рішення суду набирає законної сили»*.",
      "examples": [
        {
          "target": "Позивач подав позовну заяву до місцевого суду з вимогою стягнення матеріальної шкоди та відшкодування моральних збитків.",
          "reading": "[pɔzɪˈwɑt͡ʃ pɔˈdɑw pɔˈzɔwnu ˈzɑjɑwu dɔ mʲisʲˈt͡sɛwɔɦɔ ˈsudu z ˈwɪmɔɦɔju sʲtʲɑɦˈnɛnʲːɑ mɐtɛrʲiˈɑlʲnɔji ˈʃkɔdɪ tɑ wʲidʃkɔduˈwɑnʲːɑ mɔˈrɑlʲnɪx ˈzbɪtkʲiw] (poh-zy-VAHCH poh-DAHV poh-ZOHV-noo ZAH-yah-woo doh mees-tseh-VOH-hoh SOO-doo z VY-moh-hoh-yoo styah-HNEN-nyah mah-teh-ree-AHL'-noh-yee SHKOH-dy tah veed-shkoh-doo-VAHN-nyah moh-RAHL'-nykh ZBYT-keew)",
          "translation": "The plaintiff filed a statement of claim with the local court demanding the recovery of material damage and compensation for non-pecuniary losses."
        },
        {
          "target": "Верховний Суд залишив касаційну скаргу без задоволення, а постанову апеляційного суду — без змін.",
          "reading": "[wɛrˈxɔwnɪj sud zɐlɪˈʃɪw kɐsɐt͡sʲijˈnu ˈskɑrɦu bɛz zɐdɔwɔˈlɛnʲːɑ, ɐ pɔstɐˈnɔwu ɐpɛlʲɑt͡sʲijˈnɔɦɔ ˈsudu bɛz zmʲin] (wehr-KHOHV-nyy SOOD zah-ly-SHYV kah-sah-tseey-NOO SKAHR-hoo bez zah-doh-woh-LEN-nyah, ah pohs-tah-NOH-woo ah-peh-lyah-tseey-NOH-hoh SOO-doo bez ZMEEN)",
          "translation": "The Supreme Court dismissed the cassation appeal and left the ruling of the appellate court unchanged."
        },
        {
          "target": "Суддя ухвалив закрити судове засідання для забезпечення захисту конфіденційної інформації та персональних даних свідків.",
          "reading": "[sudʲˈdʲɑ uxwɐˈlɪw zɐkˈrɪtɪ suˈdɔwɛ zɐsʲiˈdɑnʲːɑ dlʲɑ zɐbɛzˈpɛtʃɛnʲːɑ zɐˈxɪstu kɔnfʲidɛnt͡sʲijˈnɔji infɔrmɐˈt͡sʲiji tɑ pɛrsɔˈnɑlʲnɪx ˈdɑnɪx ˈswʲidkʲiw] (sood-DYAH ookh-vah-LYV zah-KRY-ty soo-DOH-weh zah-see-DAHN-nyah dlyah zah-bez-PEH-chen-nyah zah-KHYST-oo kohn-fee-dehn-tseey-NOH-yee een-fohr-mah-TSEE-yee tah pehr-soh-NAHL'-nykh DAH-nykh SVEED-keew)",
          "translation": "The judge ruled to hold the court session in camera to ensure the protection of confidential information and personal data of witnesses."
        }
      ],
      "mnemonics": [
        "Позов подають «до суду» (не в суд!); скаргу залишають «без задоволення»; рішення суду «набирає законної сили»!"
      ],
      "culturalNotes": [
        "В Україні судова реформа запровадила відкритий Єдиний державний реєстр судових рішень, де всі вердикти публікуються державною мовою."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно сказати про звернення з позовом до органу правосуддя?",
          "options": [
            "Подати позов до суду (Normative prepositional usage до суду + Genitive)",
            "Подати позов в суд",
            "Звернутися позовом на суд",
            "Занести заяву у суд"
          ],
          "answerIndex": 0,
          "explanation": "Нормативне юридичне формулювання — «подати позов до суду»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка сторона в цивільному процесі ініціює судовий розгляд та пред'являє вимоги?",
          "options": [
            "Позивач (Plaintiff - initiating party in civil proceedings)",
            "Відповідач",
            "Прокурор",
            "Третя особа"
          ],
          "answerIndex": 0,
          "explanation": "Сторона, яка звертається до суду за захистом порушених прав, називається «позивачем»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому процесуальний вердикт оформлено без жодної юридичної чи мовної помилки:",
          "options": [
            "Суд вирішив задовольнити позовні вимоги позивача в повному обсязі та стягнути судовий збір з відповідача.",
            "Суд рішив задовольнити вимоги в повному об'ємі і стягнути кошти з відповідача.",
            "Суд постановив прийняти позов позивача повністю з виплатою по суду.",
            "Суддя рішив спор в пользу позивача за рахунок відповідача."
          ],
          "answerIndex": 0,
          "explanation": "«Задовольнити позовні вимоги... в повному обсязі... стягнути судовий збір» — досконала процесуальна мова."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u25-l3": {
    "id": "uk-u25-l3",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 3,
    "title": "Цивільне, сімейне та майнове право: правочини та зобов'язання",
    "level": "C1",
    "objective": "Опанувати цивільно-правову термінологію (правочини, правоздатність, право власності, спадкування, аліментні зобов'язання) та норми укладання цивільних договорів.",
    "presentation": {
      "explanation": "Цивільне право регулює майнові та особисті немайнові відносини суб'єктів на засадах юридичної рівності та свободи договору:\n\n1. Суб'єкти та правосуб'єктність:\n   - *«Цивільна правоздатність»* (здатність мати права — виникає в момент народження);\n   - *«Цивільна дієздатність»* (здатність своїми діями набувати прав — повна настає з 18 років);\n   - *«Фізична особа»* (індивід) та *«Юридична особа»* (підприємство, організація);\n   - *«Правочин (договір, односторонній правочин)»* (НЕ *сдєлка* / *чинна угода*);\n   - *«Нікчемний правочин»* (недійсний у силу закону) / *«Оспорюваний правочин»*.\n\n2. Право власності та речові права:\n   - Тріада права власності: *«володіння, користування, розпорядження майном»*;\n   - *«Рухоме та нерухоме майно»*, *«Спільна сумісна / спільна часткова власність»*.\n\n3. Спадкове та сімейне право:\n   - *«Спадкодавець»* (той, хто залишає спадщину) та *«Спадкоємець»* (той, хто приймає);\n   - *«Спадкування за законом»* (за чергами) та *«Спадкування за заповітом»* (НЕ *по заповіту*);\n   - *«Шлюбний договір»*, *«Аліментні зобов'язання щодо утримання неповнолітніх дітей»*.",
      "examples": [
        {
          "target": "Правочин, здійснений під впливом обману, насильства або тяжкої обставини, може бути визнаний судом недійсним.",
          "reading": "[prɐˈwɔt͡ʃɪn, zdʲijsˈnɛnɪj pʲid wplɪˈwɔm ɔbˈmɑnu, nɐˈsɪlʲstxɐ ɐˈbɔ ˈtʲɑʒkɔji ɔbˈstɑwɪnɪ, ˈmɔʒɛ ˈbutɪ wɪzˈnɑnɪj ˈsudɔm nɛˈdʲijsnɪm] (prah-VOH-chyn, zdeey-SNEH-nyy peed vply-VOHM ohb-MAH-noo, nah-SYL'-stvah ah-BOH TYAHZH-koh-yee ohb-STAH-wy-ny, MOH-zheh BOO-ty vyz-NAH-nyy SOO-dohm neh-DEEY-snym)",
          "translation": "A legal transaction entered into under the influence of fraud, violence, or severe circumstances may be declared invalid by the court."
        },
        {
          "target": "Спадкоємець має право прийняти спадщину або відмовитися від її прийняття впродовж шести місяців з дня відкриття спадщини.",
          "reading": "[spɐdˈkɔjɛmɛt͡sʲ ˈmɑjɛ ˈprɑwɔ prɪjˈnʲɑtɪ ˈspɑdt͡ʃɪnu ɐˈbɔ wʲidmɔˈwɪtɪsʲɑ wʲid ˈjiji prɪjˈnʲɑtʲːɑ wprɔˈdɔwʒ ʃɛsˈtɪ ˈmʲisʲɑt͡sʲiw z dnʲɑ wʲidkˈrɪtʲːɑ ˈspɑdt͡ʃɪnɪ] (spahd-KOH-yeh-mehts' MAH-yeh PRAH-woh pryy-NYAH-ty SPAHD-chy-noo ah-BOH veed-moh-VY-tys'-yah veed yee-YEE pryy-NYAHT-tyah vproh-DOVZH shehs-TY MEE-syah-tseew z DNYAH veed-KRYT-tyah SPAHD-chy-ny)",
          "translation": "The heir has the right to accept the inheritance or waive its acceptance within six months from the day of the opening of the succession."
        },
        {
          "target": "Шлюбний договір регулює виключно майнові відносини між подружжям і не може обмежувати особисті немайнові права людини.",
          "reading": "[ˈʃlʲubnɪj dɔˈɦɔwʲir rɛɦuˈlʲujɛ wɪkˈlʲutʃnɔ mɐjˈnɔwʲi wʲidnɔˈsɪnɪ mʲiʒ pɔdˈrudʒːɐm i nɛ ˈmɔʒɛ ɔbmɛˈʒuwɑtɪ ɔsɔˈbɪsʲtʲi nɛmɐjˈnɔwʲi prɐˈwɑ lʲuˈdɪnɪ] (SHLYOOB-nyy doh-HOH-veer reh-hoo-LYOO-yeh vy-KLYOOCH-noh mahy-NOH-vee veed-noh-SY-ny meezh pohd-ROO-dzhyahm ee neh MOH-zheh ohb-meh-ZHOO-vah-ty oh-soh-BYS-tee neh-mahy-NOH-vee prah-VAH lyoo-DY-ny)",
          "translation": "A marriage contract exclusively regulates property relations between spouses and cannot restrict personal non-property human rights."
        }
      ],
      "mnemonics": [
        "Не «сдєлка», а «правочин»! Не «наслідство», а «спадщина»! Спадкування — «за законом» або «за заповітом»!"
      ],
      "culturalNotes": [
        "Цивільний кодекс України базується на романо-германській правовій традиції з глибокою адаптацією до стандартів приватного права ЄС."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається дія особи, спрямована на набуття, зміну або припинення цивільних прав та обов'язків?",
          "options": [
            "Правочин (Legal transaction - core civil law term in Ukrainian)",
            "Сдєлка",
            "Угодочин",
            "Діловий акт"
          ],
          "answerIndex": 0,
          "explanation": "Нормативним фундаментальним поняттям українського цивільного права є «правочин»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Оберіть нормативне прийменникове сполучення для спадкування:",
          "options": [
            "Спадкування за заповітом (Succession by will - normative prepositional phrase)",
            "Спадкування по заповіту",
            "Спадкування згідно заповіту",
            "Спадкування від заповіту"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна юридична конструкція — «спадкування за законом / за заповітом»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому цивільно-правові поняття вжито абсолютно грамотно:",
          "options": [
            "Договір купівлі-продажу нерухомості є двостороннім правочином, що підлягає обов'язковому нотаріальному посвідченню.",
            "Договір купівлі квартири являється сдєлкою, яку треба завірити у нотаріуса.",
            "Ця угода по нерухомості підлягає нотаріальному посвідченню по закону.",
            "Сдєлка купівлі-продажу має бути зареєстрована у нотаріуса."
          ],
          "answerIndex": 0,
          "explanation": "Терміни «двосторонній правочин», «нотаріальне посвідчення» є нормативними стандартами Цивільного кодексу України."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u25-l4": {
    "id": "uk-u25-l4",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 4,
    "title": "Кримінальне право, кваліфікація правопорушень та запобіжні заходи",
    "level": "C1",
    "objective": "Опанувати термінологію кримінального права (склад злочину, суб'єкт, умисел, види покарань), процесуальні статуси та заходи забезпечення кримінального провадження.",
    "presentation": {
      "explanation": "Кримінальне право України визначає, які суспільно небезпечні діяння є кримінальними правопорушеннями та які покарання застосовуються до винних:\n\n1. Елементи складу кримінального правопорушення (злочину):\n   - *«Об'єкт правопорушення»* (суспільні відносини, які охороняються законом);\n   - *«Об'єктивна сторона»* (діяння, суспільно небезпечні наслідки, причинно-наслідковий зв'язок);\n   - *«Суб'єкт правопорушення»* (осудна фізична особа, яка досягла віку кримінальної відповідальності);\n   - *«Суб'єктивна сторона»* (вина у формі прямого / непрямого умислу або необережності — самовпевненості чи недбалості).\n\n2. Процесуальний статус особи в кримінальному провадженні:\n   - *«Підозрюваний»* (щодо якого складено повідомлення про підозру);\n   - *«Обвинувачений»* (обвинувальний акт передано до суду);\n   - *«Підсудний»* (під час судового розгляду);\n   - *«Засуджений»* (щодо якого набрав чинності обвинувальний вирок суду);\n   - *«Виправданий»* (щодо якого ухвалено виправдувальний вирок).\n\n3. Запобіжні заходи (Measures of Restraint):\n   - *«Особисте зобов'язання, особиста порука, застава, домашній арешт, тримання під вартою (найсуворіший запобіжний захід)»*.",
      "examples": [
        {
          "target": "Слідчий суддя задовольнив клопотання прокурора та обрав підозрюваному запобіжний захід у вигляді тримання під вартою строком на шістдесят діб.",
          "reading": "[sʲlʲidnɪj sudʲˈdʲɑ zɐdɔˈwɔlʲnɪw klɔpɔˈtɑnʲːɑ prɔkuˈrɔrɐ tɑ ɔbˈrɑw pʲidɔzˈrʲuwɐnɔmu zɐpɔˈbʲiʒnɪj ˈzɑxʲid u wɪɦˈlʲɑdʲi trɪˈmɑnʲːɑ pʲid ˈwɑrtɔju ˈstrɔkɔm nɑ ˈʃʲisdɛsʲɑt dʲib] (SLEED-nyy sood-DYAH zah-doh-VOHL'-nyv kloh-poh-TAHN-nyah proh-koo-ROH-rah tah ohb-RAHV pee-dohz-RYOO-wah-noh-moo zah-poh-BEEZH-nyy ZAH-kheed oo vyh-LYAH-dee try-MAHN-nyah peed VAHR-toh-yoo STROH-kohm nah SHEES-deh-syat DEEB)",
          "translation": "The investigating judge granted the prosecutor's motion and chose a measure of restraint for the suspect in the form of custody for a period of sixty days."
        },
        {
          "target": "Кваліфікація діяння залежить від наявності прямого умислу, корисливого мотиву та розміру заподіяних матеріальних збитків.",
          "reading": "[kwɐlʲifʲiˈkɑt͡sʲijɑ dʲiˈjɑnʲːɑ zɐˈlɛʒɪtʲ wʲid nɐˈjɑwnɔsʲtʲi prʲɑˈmɔɦɔ ˈumɪslu, kɔrɪsˈlɪwɔɦɔ mɔˈtɪwu tɑ rɔzˈmʲiru zɐpɔˈdʲijɑnɪx mɐtɛrʲiˈɑlʲnɪx ˈzbɪtkʲiw] (kvah-lee-fee-KAH-tsee-yah dee-YAHN-nyah zah-LEH-zheet' veed nah-YAHV-nohs-tee pryah-MOH-hoh OO-my-sloo, koh-rys-LY-woh-hoh moh-TY-woo tah roz-MEE-roo zah-poh-dee-YAH-nykh mah-teh-ree-AHL'-nykh ZBYT-keew)",
          "translation": "The qualification of the act depends on the presence of direct intent, mercenary motive, and the amount of material damage caused."
        },
        {
          "target": "Сторона захисту наполягала на зміні запобіжного заходу на цілодобовий домашній арешт з носінням електронного засобу контролю.",
          "reading": "[stɔrɔˈnɑ zɐˈxɪstu nɐpɔlʲɑˈɦɑlɐ nɑ ˈzmʲinʲi zɐpɔˈbʲiʒnɔɦɔ ˈzɑxɔdu nɑ t͡sʲilɔdɔˈbɔwɪj dɔˈmɑʃnʲij ɐˈrɛʃt z nɔˈsʲinʲːɐm ɛlɛktˈrɔnnɔɦɔ ˈzɑsɔbu kɔntˈrɔlʲu] (stoh-roh-NAH zah-KHYS-too nah-poh-lyah-HAH-lah nah ZMEE-nee zah-poh-BEEZH-noh-hoh ZAH-khoh-doo nah tsee-loh-doh-BOH-vyy doh-MAHSH-neey ah-REHSHT z noh-SEEN-nyahm eh-lehk-TROHN-noh-hoh ZAH-soh-boo kohn-TROH-lyoo)",
          "translation": "The defense insisted on changing the measure of restraint to round-the-clock house arrest with wearing an electronic monitoring device."
        }
      ],
      "mnemonics": [
        "Не «мєра пресєчєнія», а «запобіжний захід»! Не «содержаніє під стражей», а «тримання під вартою»! Статуси: підозрюваний -> обвинувачений -> підсудний -> засуджений!"
      ],
      "culturalNotes": [
        "Кримінальний процесуальний кодекс України закріпив інститут слідчого судді та суду присяжних як ключові гарантії захисту прав людини."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно українською юридичною мовою називається запобіжний захід позбавлення волі до вироку суду?",
          "options": [
            "Тримання під вартою (Custody / pre-trial detention - normative legal term)",
            "Утримання під стражею",
            "Знаходження в СІЗО",
            "Арешт під охороною"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний процесуальний термін у КПК України — «тримання під вартою»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається особа в кримінальному процесі після того, як обвинувальний акт скеровано до суду?",
          "options": [
            "Обвинувачений / підсудний (Accused / defendant during court proceedings)",
            "Підозрюваний",
            "Засуджений",
            "Свідок"
          ],
          "answerIndex": 0,
          "explanation": "Після направлення обвинувального акта до суду особа набуває статусу «обвинуваченого» (під час судового розгляду — «підсудного»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому процесуальний захід описано бездоганно:",
          "options": [
            "Слідчий суддя обрав підозрюваному запобіжний захід у вигляді тримання під вартою із визначенням розміру застави.",
            "Суддя вибрав підозрюваному мєру пресєчєнія у вигляді арешту під стражу.",
            "Суд встановив запобіжний захід сидіти під вартою з виплатою залога.",
            "Слідчий призначив мєру пресєчєнія утримання під охороною."
          ],
          "answerIndex": 0,
          "explanation": "«Запобіжний захід у вигляді тримання під вартою із визначенням розміру застави» — точна процесуальна термінологія."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u25-l5": {
    "id": "uk-u25-l5",
    "subject": "ukrainian",
    "unit": 25,
    "lessonNumber": 5,
    "title": "Міжнародне кримінальне право, Римський статут та воєнні злочини",
    "level": "C1",
    "objective": "Опанувати термінологію міжнародного гуманітарного та міжнародного кримінального права (Римський статут МКС, воєнні злочини, геноцид, репарації) та формули міжнародного правосуддя.",
    "presentation": {
      "explanation": "Міжнародне кримінальне право регулює відповідальність фізичних осіб за найтяжчі злочини проти миру та безпеки людства:\n\n1. Основні міжнародні судові інституції:\n   - *«Міжнародний кримінальний суд (МКС, Гаага)»* — діє на основі Римського статуту;\n   - *«Міжнародний суд ООН (ICJ)»* — вирішує спори між державами;\n   - *«Європейський суд з прав людини (ЄСПЛ, Страсбург)»*;\n   - *«Спеціальний трибунал щодо злочину агресії»*.\n\n2. Чотири ключові категорії міжнародних злочинів (Римський статут):\n   - *«Злочин агресії (Crime of Aggression)»* — планування, підготовка та ведення агресивної війни;\n   - *«Геноцид (Genocide)»* — діяння з наміром знищити повністю або частково національну, етнічну, расову чи релігійну групу;\n   - *«Злочини проти людяності (Crimes against Humanity)»* — широкомасштабні або систематичні напади на цивільне населення (вбивства, депортації, катування);\n   - *«Воєнні злочини (War Crimes)»* — серйозні порушення Женевських конвенцій та законів і звичаїв війни (атаки на цивільні об'єкти, мародерство, примусова депортація дітей).\n\n3. Правові формули невідворотності покарання:\n   - *«Видача міжнародного ордера на арешт»*;\n   - *«Принцип універсальної юрисдикції»*;\n   - *«Невідворотність покарання за воєнні злочини (без строку давності)»*;\n   - *«Стягнення репарацій та компенсацій за завдані державою-агресором збитки»*.",
      "examples": [
        {
          "target": "Міжнародний кримінальний суд видав ордери на арешт вищих посадових осіб держави-агресора за вчинення воєнних злочинів проти людяності.",
          "reading": "[mʲiʒnɐˈrɔdnɪj krɪmʲiˈnɑlʲnɪj sud wɪˈdɑw ˈɔrdɛrɪ nɑ ɐˈrɛʃt ˈwɪʃtʃɪx pɔsɐˈdɔwɪx ɔˈsʲib dɛrˈʒɑwɪ ɐɦˈrɛsɔrɐ zɑ wtʃɪˈnɛnʲːɑ wɔˈjɛnnɪx ˈzlɔtʃɪnʲiw ˈprɔtɪ lʲuˈdʲɑnɔsʲtʲi] (meezh-nah-ROHD-nyy kry-mee-NAHL'-nyy SOOD vy-DAHV OHR-deh-ry nah ah-REHSHT VYSH-chykh poh-sah-DOH-wykh oh-SEEB dehr-ZHAH-wy ahh-REH-soh-rah zah vchy-NEN-nyah woh-YEHN-nykh ZLOH-chy-neew PROH-ty lyoo-DYAH-nohs-tee)",
          "translation": "The International Criminal Court issued arrest warrants for top officials of the aggressor state for committing war crimes against humanity."
        },
        {
          "target": "Воєнні злочини та злочин геноциду не мають строків давності згідно з нормами міжнародного звичаєвого права.",
          "reading": "[wɔˈjɛnnʲi ˈzlɔtʃɪnɪ tɑ ˈzlɔtʃɪn ɦɛnɔˈt͡sɪdu nɛ ˈmɑjutʲ ˈstrɔkʲiw dɑwˈnɔsʲtʲi ˈzɦʲidnɔ z ˈnɔrmɐmɪ mʲiʒnɐˈrɔdnɔɦɔ zwɪt͡ʃɐˈjɛwɔɦɔ ˈprɑwɐ] (woh-YEHN-nee ZLOH-chy-ny tah ZLOH-chyn heh-noh-TSY-doo neh MAH-yoot' STROH-keew dahv-NOHS-tee ZHEED-noh z NOHR-mah-my meezh-nah-ROHD-noh-hoh zwy-chah-YEH-woh-hoh PRAH-wah)",
          "translation": "War crimes and the crime of genocide have no statute of limitations under the norms of customary international law."
        },
        {
          "target": "Створення міжнародного реєстру збитків є першим кроком до забезпечення повної виплати репарацій усім постраждалим.",
          "reading": "[stwɔˈrɛnʲːɑ mʲiʒnɐˈrɔdnɔɦɔ rɛˈjɛstru ˈzbɪtkʲiw jɛ ˈpɛrʃɪm ˈkrɔkɔm dɔ zɐbɛzˈpɛtʃɛnʲːɑ ˈpɔwnɔji ˈwɪplɐtɪ rɛpɐˈrɑt͡sʲij uˈsʲim pɔstˈrɑʒdɑlɪm] (stwoh-REN-nyah meezh-nah-ROHD-noh-hoh reh-YEHS-troo ZBYT-keew yeh PEHR-shym KROH-kohm doh zah-bez-PEH-chen-nyah POHV-noh-yee VY-plah-ty reh-pah-RAH-tseey oo-SEEM pohst-RAHZH-dah-lym)",
          "translation": "The establishment of an international register of damage is the first step towards ensuring full payment of reparations to all victims."
        }
      ],
      "mnemonics": [
        "Злочини за Римським статутом: «агресія, геноцид, злочини проти людяності, воєнні злочини»; немає строків давності; репарації — відшкодування збитків агресором!"
      ],
      "culturalNotes": [
        "Ратифікація Україною Римського статуту МКС у 2024 році стала історичною віхою утвердження верховенства міжнародного правопорядку та невідворотності правосуддя."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно називається категорія злочинів, пов'язаних із грубим порушенням законів та звичаїв війни?",
          "options": [
            "Воєнні злочини (War crimes - correct adjective воєнний referring to war acts)",
            "Військові злочини",
            "Армійські злочини",
            "Бойові злочини"
          ],
          "answerIndex": 0,
          "explanation": "В українській мові розрізняють: «воєнні злочини» (порушення законів війни під час збройного конфлікту) та «військові злочини» (правопорушення військовослужбовців проти порядку несення служби)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку назву має міжнародний договір, що є установчим документом Міжнародного кримінального суду?",
          "options": [
            "Римський статут (Rome Statute of the International Criminal Court)",
            "Женевська конвенція",
            "Гаазька хартія",
            "Страсбурзький регламент"
          ],
          "answerIndex": 0,
          "explanation": "Установчим документом МКС є «Римський статут» (Rome Statute)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому норми міжнародного правосуддя сформульовано з бездоганною термінологічною точністю:",
          "options": [
            "Міжнародне право гарантує невідворотність покарання за воєнні злочини та стягнення компенсацій за завдані державою-агресором збитки.",
            "Міжнародне право гарантує покарання за військові злочини і репарації від агресора без суда.",
            "Закони війни карають за воєнні гріхи та вимагають виплат по агресії.",
            "Римський статут передбачає суд над агресором по всім військовим злочинам."
          ],
          "answerIndex": 0,
          "explanation": "«Невідворотність покарання за воєнні злочини та стягнення компенсацій за завдані державою-агресором збитки» — ідеальна міжнародно-правова норма."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u26-l1": {
    "id": "uk-u26-l1",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 1,
    "title": "Банківська система, монетарна політика та регулювання НБУ",
    "level": "C1",
    "objective": "Опанувати термінологію банківської діяльності, інструменти монетарної політики Національного банку України (облікова ставка, рефінансування) та безготівкових розрахунків.",
    "presentation": {
      "explanation": "Банківська система України має дворівневу структуру: Національний банк України (центральний банк) та комерційні банки різних форм власності:\n\n1. Інструменти монетарної політики НБУ:\n   - *«Облікова ставка (Key Policy Rate)»* — відсоткова ставка, за якою НБУ надає кредити комерційним банкам (інструмент стримування інфляції);\n   - *«Таргування інфляції»* — політика забезпечення стабільності цін;\n   - *«Нормативи обов'язкового резервування»*;\n   - *«Валютні інтервенції на міжбанківському ринку»* (купівля/продаж іноземної валюти для згладжування курсових коливань);\n   - *«Міжнародні золотовалютні резерви (ЗВР)»*.\n\n2. Банківські операції та рахунки:\n   - *«Поточний (розрахунковий) рахунок»* / *«Депозитний (вкладний) рахунок»*;\n   - *«Безготівковий розрахунок»* (НЕ *безналічний розрахунок*);\n   - *«Касове обслуговування»*;\n   - *«Кредитна лінія, овердрафт, відсоткова маржа»*.\n\n3. Нормативна фінансова лексика:\n   - Вживайте *«відсоткова ставка»* (або *процентна ставка*);\n   - Вживайте *«знецінення / зміцнення національної валюти»*;\n   - Вживайте *«платіжна спроможність / ліквідність банку»*.",
      "examples": [
        {
          "target": "Національний банк України ухвалив рішення знизити облікову ставку з метою відновлення кредитування реального сектора економіки.",
          "reading": "[nɐt͡sʲiɔˈnɑlʲnɪj bɑnk ukrɐˈjinɪ uxwɐˈlɪw ˈrʲiʃɛnʲːɑ znɪˈzɪtɪ ɔbˈlʲikɔwu ˈstɑwku z ˈmɛtɔju wʲidnɔwˈlɛnʲːɑ krɛdɪtuˈwɑnʲːɑ rɛˈɑlʲnɔɦɔ ˈsɛktɔrɐ ɛkɔˈnɔmʲikɪ] (nah-tsee-oh-NAHL'-nyy BAHN-k oo-krah-YEE-ny ookh-vah-LYV REE-shen-nyah zny-ZY-ty ohb-LEE-koh-woo STAHV-koo z MEH-toh-yoo veed-nohv-LEN-nyah kreh-dy-too-VAHN-nyah reh-AHL'-noh-hoh SEHK-toh-rah eh-koh-NOH-mee-ky)",
          "translation": "The National Bank of Ukraine made the decision to lower the key policy rate in order to revive lending to the real sector of the economy."
        },
        {
          "target": "Завдяки регулярній підтримці міжнародних партнерів золотовалютні резерви України сягнули історичного максимуму.",
          "reading": "[zɐwˈdʲɑkɪ rɛɦuˈlʲɑrnʲij pʲidˈtrɪmt͡sʲi mʲiʒnɐˈrɔdnɪx pɐrtˈnɛrʲiw zɔlɔtɔwɐˈlʲutnʲi rɛˈzɛrwɪ ukrɐˈjinɪ sʲɑɦˈnulɪ istɔˈrɪtʃnɔɦɔ ˈmɑksɪmumu] (zahv-DYAH-ky reh-hoo-LYAHR-neey peed-TRYM-tsee meezh-nah-ROHD-nykh pahrt-NEH-reew zoh-loh-toh-vah-LYOOT-nee reh-ZEHR-wy oo-krah-YEE-ny syah-HNOO-ly ees-toh-RYCH-noh-hoh MAHK-sy-moo-moo)",
          "translation": "Thanks to regular support from international partners, Ukraine's foreign exchange reserves have reached an all-time high."
        },
        {
          "target": "Перехід на безготівкові розрахунки та сучасні системи цифрового банкінгу значно підвищив прозорість фінансових операцій.",
          "reading": "[pɛrɛˈxʲid nɑ bɛzɦɔtʲiwˈkɔwʲi rɔzrɐˈxunkɪ tɑ sut͡ʃɑsˈnʲi sɪsˈtɛmɪ t͡sɪfrɔˈwɔɦɔ ˈbɑnkʲinɦu ˈznɑtʃnɔ pʲidˈwɪʃɪw prɔˈzɔrʲisʲtʲ fʲinɐnˈsɔwɪx ɔpɛˈrɑt͡sʲij] (peh-reh-KHEED nah bez-hoh-teew-KOH-vee roz-rah-KHOON-ky tah soo-chahs-NEE sys-TEH-my tsyf-roh-VOH-hoh BAHN-keen-hoo ZNAHCH-noh peed-VY-shyv proh-ZOH-reest' fee-nahn-SOH-wykh oh-peh-RAH-tseey)",
          "translation": "The transition to cashless payments and modern digital banking systems significantly increased the transparency of financial transactions."
        }
      ],
      "mnemonics": [
        "Ставка — «облікова» (не ключова у нормативних актах НБУ!); розрахунки — «безготівкові» (не безналічні!); гроші — «знецінюються або зміцнюються»!"
      ],
      "culturalNotes": [
        "Гривня є спадкоємицею грошової одиниці Русі та Української Народної Республіки, а монетарна стабільність захищена статтею 99 Конституції України."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно українською фінансовою мовою називається форма розрахунків платіжними картками та переказами?",
          "options": [
            "Безготівковий розрахунок (Cashless settlement - correct standard financial term)",
            "Безналічний розрахунок",
            "Безгрошовий платіж",
            "Неготівковий оборот"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний фінансово-банківський термін в українській мові — «безготівковий розрахунок»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка базова відсоткова ставка Національного банку України є основним орієнтиром ціни грошей?",
          "options": [
            "Облікова ставка (Key policy / discount rate of the NBU)",
            "Кредитна ставка",
            "Депозитний процент",
            "Міжбанківський коефіцієнт"
          ],
          "answerIndex": 0,
          "explanation": "Базовим монетарним інструментом НБУ є «облікова ставка»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому банківську термінологію використано без жодної помилки:",
          "options": [
            "Комерційний банк розширив обсяги кредитування бізнесу за зниженою відсотковою ставкою та запровадив нові безготівкові сервіси.",
            "Банк збільшив видачу кредитів під низький безналічний процент для підприємств.",
            "НБУ поміняв облікову ставку і ввів нові правила по безналу.",
            "Банківська установа надає кредити під проценти по безготівці."
          ],
          "answerIndex": 0,
          "explanation": "«За зниженою відсотковою ставкою... безготівкові сервіси» — повна термінологічна відповідність стандартам НБУ."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u26-l2": {
    "id": "uk-u26-l2",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 2,
    "title": "Інвестиційна діяльність, цінні папери та фондовий ринок",
    "level": "C1",
    "objective": "Опанувати термінологію ринків капіталу (ОВДП, акції, дивіденди, капіталізація), методи залучення прямих іноземних інвестицій та хеджування фінансових ризиків.",
    "presentation": {
      "explanation": "Інвестиційна діяльність та ринки капіталу функціонують на основі обігу фінансових інструментів та оцінки прибутковості активів:\n\n1. Основні види цінних паперів:\n   - *«Акція (проста, привілейована)»* — частковий цінний папір, що дає право на участь в управлінні акціонерним товариством та отримання *дивідендів*;\n   - *«Облігації внутрішньої державної позики (ОВДП)»* / *«Військові облігації»* — боргові цінні папери, випущені Міністерством фінансів України;\n   - *«Корпоративні облігації, векселі, деривативи (ф'ючерси, опціони)»*.\n\n2. Ключові фінансові показники ринку:\n   - *«Ринкова капіталізація підприємства»*;\n   - *«Прибутковість інвестицій (ROI, Return on Investment)»*;\n   - *«Дохідність до погашення (Yield to Maturity)»*;\n   - *«Волатильність біржових котирувань»*.\n\n3. Інвестиційні стратегії та термінологічні вислови:\n   - *«Залучати прямі іноземні інвестиції (ПІІ)»* (НЕ *приваблювати інвестиції*);\n   - *«Диверсифікувати інвестиційний портфель»* (розподіл активів для зниження ризиків);\n   - *«Хеджування фінансових ризиків»* (страхування від курсових або цінових коливань);\n   - *«Венчурний капітал та стартап-екосистеми»*.",
      "examples": [
        {
          "target": "Військові облігації внутрішньої державної позики стали надійним інструментом підтримки державного бюджету та залучення внутрішніх інвестицій.",
          "reading": "[wʲijʲsʲˈkɔwʲi ɔblʲiˈɦɑt͡sʲiji wnutˈrʲiʃnʲɔji dɛrˈʒɑwnɔji ˈpɔzɪkɪ ˈstɑlɪ nɐˈdʲijnɪm instruˈmɛntɔm pʲidˈtrɪmkɪ dɛrˈʒɑwnɔɦɔ bʲudˈʒɛtu tɑ zɐlʲuˈtʃɛnʲːɑ wnutˈrʲiʃnʲix inwɛsˈtɪt͡sʲij] (veey-s'KOH-vee oh-blee-HAH-tsee-yee vnoot-REESH-nyoh-yee dehr-ZHAHV-noh-yee POH-zy-ky STAH-ly nah-DEEY-nym een-stroo-MEHN-tohm peed-TRYM-ky dehr-ZHAHV-noh-hoh byood-ZHEH-too tah zah-lyoo-CHEN-nyah vnoot-REESH-neekh een-vehs-TY-tseey)",
          "translation": "Military domestic government bonds have become a reliable instrument for supporting the state budget and attracting domestic investments."
        },
        {
          "target": "Інституційні інвестори прагнуть диверсифікувати свої активи, комбінуючи акції технологічних гігантів та надійні суверенні облігації.",
          "reading": "[instɪtut͡sʲijˈnʲi inwɛsˈtɔrɪ ˈprɑɦnutʲ dɪwɛrsɪfʲikuˈwɑtɪ swɔˈji ɐkˈtɪwɪ, kɔmbʲiˈnujutʃɪ ˈɑkt͡sʲiji tɛxnɔlɔˈɦʲitʃnɪx ɦʲiˈɦɑntʲiw tɑ nɐˈdʲijnʲi suwɛˈrɛnnʲi ɔblʲiˈɦɑt͡sʲiji] (een-sty-too-tseey-NEE een-vehs-TOH-ry PRAH-hnoot' dy-vehr-sy-fee-koo-VAH-ty swoh-YEE ahk-TY-wy, kohm-bee-NOO-yoo-chy AHK-tsee-yee tekh-noh-loh-HEE-chnykh hee-HAHN-teew tah nah-DEEY-nee soo-weh-REHN-nee oh-blee-HAH-tsee-yee)",
          "translation": "Institutional investors seek to diversify their assets by combining shares of tech giants with reliable sovereign bonds."
        },
        {
          "target": "Хеджування валютних ризиків дозволяє експортерам зафіксувати ціну контракту та убезпечити бізнес від неочікуваних курсових коливань.",
          "reading": "[xɛdʒuˈwɑnʲːɑ wɐˈlʲutnɪx ˈrɪzɪkʲiw dɔzˈwɔlʲɑjɛ ɛkspɔrˈtɛrɐm zɐfʲiksɔˈwɑtɪ ˈt͡sʲinu kɔntˈrɑktu tɑ ubɛzˈpɛtʃɪtɪ ˈbʲiznɛs wʲid nɛɔtʃʲiˈkɔwɐnɪx kurˈsɔwɪx kɔlɪˈwɑnʲ] (kheh-dzhoo-VAHN-nyah vah-LYOOT-nykh RY-zy-keew dohz-VOH-lyah-yeh eks-pohr-TEH-rahm zah-feek-soh-VAH-ty TSEEN-oo kohn-TRAHK-too tah oo-bez-PEH-chy-ty BEEZ-nehs veed neh-oh-chee-KOH-wah-nykh koor-SOH-wykh koh-ly-VAHN')",
          "translation": "Hedging currency risks allows exporters to lock in contract prices and protect business from unexpected exchange rate fluctuations."
        }
      ],
      "mnemonics": [
        "ОВДП — облігації внутрішньої державної позики! Акції приносять «дивіденди»; інвестиції «залучають»; ризики «диверсифікують та деджують»!"
      ],
      "culturalNotes": [
        "Під час повномасштабного вторгнення цифрові військові облігації через застосунок «Дія» стали масовим національним інвестиційним феноменом."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається частина чистого прибутку компанії, що виплачується акціонерам пропорційно до їхніх часток?",
          "options": [
            "Дивіденди (Dividends - share of profit paid to stockholders)",
            "Роялті",
            "Кешбек",
            "Преміальні"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний фінансовий термін для виплат акціонерам — «дивіденди»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яке дієслово є нормативним для процесу отримання коштів від міжнародних інвесторів?",
          "options": [
            "Залучати інвестиції (To attract / raise investments - correct economic collocation)",
            "Приваблювати інвестиції",
            "Затягувати інвестиції",
            "Заводити капітали"
          ],
          "answerIndex": 0,
          "explanation": "Нормативне словосполучення в економічному стилі — «залучати інвестиції»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому інвестиційні та фінансові процеси описано грамотно:",
          "options": [
            "Підприємство залучило прямі іноземні інвестиції шляхом розміщення додаткового випуску простих іменних акцій на фондовому ринку.",
            "Підприємство привабило іноземні капітали через продаж акцій на біржовому базарі.",
            "Компанія завела інвестиції випуском цінних бумаг на біржі.",
            "Залучення інвестицій пройшло через роздачу акцій по інвесторам."
          ],
          "answerIndex": 0,
          "explanation": "«Залучило прямі іноземні інвестиції... випуску простих іменних акцій на фондовому ринку» — бездоганна фінансова термінологія."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u26-l3": {
    "id": "uk-u26-l3",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 3,
    "title": "Податкова система, фіскальне адміністрування та мито",
    "level": "C1",
    "objective": "Опанувати податкову та митну термінологію України (ПДВ, ПДФО, ЄСВ, акциз, митні платежі), процедури декларування доходів та адміністрування податків.",
    "presentation": {
      "explanation": "Податкова система України регулюється Податковим та Митним кодексами і забезпечує наповнення державного та місцевих бюджетів:\n\n1. Основні види податків та зборів:\n   - *«Податок на додану вартість (ПДВ)»* (непрямий податок, що входить у ціну товару);\n   - *«Податок на доходи фізичних осіб (ПДФО)»*;\n   - *«Податок на прибуток підприємств»*;\n   - *«Єдиний соціальний внесок (ЄСВ)»* — консолідований страховий внесок;\n   - *«Військовий збір, акцизний податок (акциз), екологічний податок, податок на нерухоме майно»*;\n   - *«Мито (ввізне, вивізне, сезонне) та митні збори»*.\n\n2. Процедури податкового контролю:\n   - *«Подання податкової декларації»*;\n   - *«База оподаткування / ставка оподаткування»*;\n   - *«Податковий кредит та бюджетне відшкодування ПДВ»*;\n   - *«Камеральна, документальна (планова / позапланова) податкова перевірка»*;\n   - *«Податкове повідомлення-рішення (ППР)»*.\n\n3. Нормативна лексика фіскального стилю:\n   - Вживайте *«платник податків»* (НЕ *налогоплатєльщик*);\n   - Вживайте *«сплата податків»* (НЕ *уплата податків*);\n   - Вживайте *«податкові пільги»*;\n   - Вживайте *«Державна податкова служба (ДПС)»* та *«Державна митна служба»*.",
      "examples": [
        {
          "target": "Своєчасна сплата податків та зборів є конституційним обов'язком кожного свідомого громадянина та запорукою фінансової стійкості держави.",
          "reading": "[swɔjɛˈt͡ʃɑsnɐ ˈsplɑtɐ pɔˈdɑtkʲiw tɑ ˈzbɔrʲiw jɛ kɔnstɪtuˈt͡sʲijnɪm ɔbɔwˈjɑzkɔm ˈkɔʒnɔɦɔ swʲiˈdɔmɔɦɔ ɦrɔmɐˈdʲɑnɪnɐ tɑ zɐpɔˈrukɔju fʲinɐnˈsɔwɔji sʲtʲijˈkɔsʲtʲi dɛrˈʒɑwɪ] (swoh-yeh-CHAHS-nah SPLAH-tah poh-DAHT-keew tah ZBOH-reew yeh kohn-sty-too-TSEEY-nym oh-bov-YAHZ-kohm KOHZH-noh-hoh swee-DOH-moh-hoh hroh-mah-DYAH-ny-nah tah zah-poh-ROO-koh-yoo fee-nahn-SOH-woh-yee steey-KOHS-tee dehr-ZHAH-wy)",
          "translation": "Timely payment of taxes and fees is a constitutional duty of every conscious citizen and the guarantee of the state's financial resilience."
        },
        {
          "target": "Експортери сільськогосподарської продукції мають право на автоматичне бюджетне відшкодування податку на додану вартість.",
          "reading": "[ɛkspɔrˈtɛrɪ sʲilʲsʲkɔɦɔspɔˈdɑrsʲkɔji prɔˈdukt͡sʲiji ˈmɑjutʲ ˈprɑwɔ nɑ ɐwtɔmɐˈtɪtʃnɛ bʲudˈʒɛtnɛ wʲidʃkɔduˈwɑnʲːɑ pɔˈdɑtku nɑ dɔˈdɑnu ˈwɑrtʲisʲtʲ] (eks-pohr-TEH-ry seel's'koh-hohs-poh-DAHR-s'koh-yee proh-DOOK-tsee-yee MAH-yoot' PRAH-woh nah ahv-toh-mah-TYCH-neh byood-ZHEHT-neh veed-shkoh-doo-VAHN-nyah poh-DAHT-koo nah doh-DAH-noo VAHR-teest')",
          "translation": "Exporters of agricultural products have the right to automatic budgetary refund of value-added tax."
        },
        {
          "target": "Державна податкова служба провела камеральну перевірку поданої звітності та не виявила порушень податкового законодавства.",
          "reading": "[dɛrˈʒɑwnɐ pɔdɐtˈkɔwɐ ˈsluʒbɐ prɔwɛˈlɑ kɐmɛˈrɑlʲnu pɛrɛˈwʲirku ˈpɔdɑnɔji ˈzwʲitnɔsʲtʲi tɑ nɛ wɪˈjɑwɪlɐ pɔruˈʃɛnʲ pɔdɐtˈkɔwɔɦɔ zɐkɔnɔˈdɑwstxɐ] (dehr-ZHAHV-nah poh-daht-KOH-wah SLOOZH-bah proh-weh-LAH kah-meh-RAHL'-noo peh-reh-VEER-koo POH-dah-noh-yee ZVEET-nohs-tee tah neh vy-YAH-wy-lah poh-roo-SHEN' poh-daht-KOH-woh-hoh zah-koh-noh-DAHV-stvah)",
          "translation": "The State Tax Service conducted a desk audit of the submitted reporting and found no violations of tax legislation."
        }
      ],
      "mnemonics": [
        "Не «уплата», а «сплата податків»! Не «налоги», а «податки і збори»! Податки: ПДВ, ПДФО, ЄСВ, акциз, мито!"
      ],
      "culturalNotes": [
        "Впровадження цифрового кабінету платника податків та програмних РРО суттєво спростило податкове адміністрування для малого та середнього бізнесу в Україні."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як правильно українською мовою називається особа або компанія, що сплачує податки?",
          "options": [
            "Платник податків (Taxpayer - standard Ukrainian legal term)",
            "Налогоплатєльщик",
            "Податкодавець",
            "Податковий платник"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний правничий та податковий термін — «платник податків»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яка назва обов'язкового платежу, що стягується митними органами при ввезенні або вивезенні товарів?",
          "options": [
            "Мито (Customs duty - standard term)",
            "Пошліна",
            "Митна плата",
            "Кордонний збір"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний термін в українському митному праві — «мито»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому фіскальні процедури описано бездоганно:",
          "options": [
            "Платник податків подав річну податкову декларацію про доходи та в повному обсязі здійснив сплату єдиного соціального внеску.",
            "Налогоплатєльщик здав декларацію і зробив уплату єдиного соціального збору.",
            "Платник податку перерахував пошліну та здав звіт по налогам.",
            "Податкодавець здійснив уплату ПДВ і ЄСВ без затримки."
          ],
          "answerIndex": 0,
          "explanation": "«Платник податків... податкову декларацію... сплату єдиного соціального внеску» — бездоганна фіскальна термінологія."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u26-l4": {
    "id": "uk-u26-l4",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 4,
    "title": "Корпоративні фінанси, аудит, бухгалтерський баланс та реструктуризація",
    "level": "C1",
    "objective": "Опанувати бухгалтерську та аудиторську термінологію (активи, пасиви, дебіторська/кредиторська заборгованість, ліквідність), аналіз фінансової звітності та процедури санації.",
    "presentation": {
      "explanation": "Корпоративні фінанси та бухгалтерський облік спираються на міжнародні стандарти фінансової звітності (МСФЗ):\n\n1. Структура бухгалтерського балансу підприємства:\n   - *«Активи (оборотні та необоротні активи)»* — ресурси, що контролюються підприємством;\n   - *«Пасиви (власний капітал та зобов'язання)»*;\n   - *«Дебіторська заборгованість»* (борги контрагентів перед компанією);\n   - *«Кредиторська заборгованість»* (борги компанії перед постачальниками або банками);\n   - *«Нерозподілений прибуток, статутний капітал, амортизація»*.\n\n2. Показники звіту про фінансові результати:\n   - *«Чистий дохід (виручка) від реалізації продукції»*;\n   - *«Собівартість реалізованої продукції»*;\n   - *«Валовий прибуток / Операційний прибуток (EBITDA)»*;\n   - *«Чистий прибуток (збиток)»*.\n\n3. Аудит, неплатоспроможність та реструктуризація:\n   - *«Незалежний аудиторський висновок (безумовно позитивний, модифікований)»*;\n   - *«Реструктуризація боргових зобов'язань»*;\n   - *«Санація (фінансове оздоровлення боржника)»*;\n   - *«Неплатоспроможність, процедура банкрутства та ліквідаційний баланс»*.",
      "examples": [
        {
          "target": "За результатами щорічного аудиту міжнародна аудиторська компанія надала безумовно позитивний висновок щодо фінансової звітності холдингу.",
          "reading": "[zɑ rɛzulʲˈtɑtɐmɪ ʃtʃɔˈrʲitʃnɔɦɔ ɐuˈdɪtu mʲiʒnɐˈrɔdnɐ ɐudɪˈtɔrsʲkɐ kɔmˈpɑnʲijɑ nɐˈdɑlɐ bɛzuˈmɔwnɔ pɔzɪˈtɪwnɪj ˈwɪsnɔwɔk ʃtʃɔˈdɔ fʲinɐnˈsɔwɔji ˈzwʲitnɔsʲtʲi ˈxɔldɪnɦu] (zah reh-zool'-TAH-tah-my shchoh-REECH-noh-hoh ah-oo-DY-too meezh-nah-ROHD-nah ah-oo-dy-TOHR-s'kah kohm-PAH-nee-yah nah-DAH-lah bez-oo-MOHV-noh poh-zy-TYV-nyy VYS-noh-wohk shchoh-DOH fee-nahn-SOH-woh-yee ZVEET-nohs-tee KHOHL-dyn-hoo)",
          "translation": "Based on the results of the annual audit, the international auditing firm issued an unqualified (clean) opinion on the holding's financial statements."
        },
        {
          "target": "Оптимізація структури активів та скорочення дебіторської заборгованості дозволили підприємству відновити платоспроможність.",
          "reading": "[ɔptɪmʲizɑˈt͡sʲijɑ struktˈurɪ ɐkˈtɪwʲiw tɑ skrɔˈtʃɛnʲːɑ dɛbʲiˈtɔrsʲkɔji zɐbɔrˈɦɔwɑnɔsʲtʲi dɔzˈwɔlɪlɪ pʲidˈprɪjɛmstwu wʲidnɔˈwɪtɪ plɐtɔsprɔˈmɔʒnʲisʲtʲ] (ohp-ty-mee-ZAH-tsee-yah strook-TOO-ry ahk-TY-weew tah skroh-CHEN-nyah deh-bee-TOHR-s'koh-yee zah-bohr-HOH-wah-nohs-tee dohz-VOH-ly-ly peed-PRY-yehm-stvoo veed-noh-VY-ty plah-toh-sproh-MOHZH-neest')",
          "translation": "Optimization of the asset structure and reduction of accounts receivable allowed the enterprise to restore its solvency."
        },
        {
          "target": "Кредитори погодили план досудової санації боржника, який передбачає реструктуризацію тіла кредиту та відстрочення виплати відсотків.",
          "reading": "[krɛdɪˈtɔrɪ pɔɦɔˈdɪlɪ plɑn dɔsuˈdɔwɔji sɐˈnɑt͡sʲiji bɔrʒnɪˈkɑ, jɑˈkɪj pɛrɛdbɐˈtʃɑjɛ rɛstrukturɪˈzɑt͡sʲiju ˈtʲilɐ ˈkrɛdɪtu tɑ wʲidstrɔˈtʃɛnʲːɑ ˈwɪplɐtɪ wʲidˈsɔtkʲiw] (kreh-dy-TOH-ry poh-hoh-DY-ly plahn doh-soo-DOH-woh-yee sah-NAH-tsee-yee bohrzh-ny-KAH, yah-KYY peh-rehd-bah-CHAH-yeh reh-strook-too-ry-ZAH-tsee-yoo TEE-lah KREH-dy-too tah veed-stroh-CHEN-nyah VY-plah-ty veed-SOHT-keew)",
          "translation": "The creditors approved the pre-trial rehabilitation plan for the debtor, providing for the restructuring of the loan principal and deferral of interest payments."
        }
      ],
      "mnemonics": [
        "Баланс: «активи = власний капітал + зобов'язання»; борги: нам винні — «дебіторська», ми винні — «кредиторська заборгованість»!"
      ],
      "culturalNotes": [
        "Український бізнес масово інтегрує системи автоматизованого аудиту та прозору звітність за стандартами ESG (довкілля, соціальна сфера, врядування)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається заборгованість інших підприємств або покупців перед нашою компанією?",
          "options": [
            "Дебіторська заборгованість (Accounts receivable - debts owed to the company)",
            "Кредиторська заборгованість",
            "Пасивна заборгованість",
            "Статутна заборгованість"
          ],
          "answerIndex": 0,
          "explanation": "Борги інших суб'єктів перед підприємством є «дебіторською заборгованістю» (наші борги — кредиторською)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається система фінансово-економічних заходів для запобігання банкрутству підприємства?",
          "options": [
            "Санація (Corporate rehabilitation / turnaround)",
            "Ліквідація",
            "Емісія",
            "Інкасація"
          ],
          "answerIndex": 0,
          "explanation": "Фінансове оздоровлення підприємства-боржника називається «санацією»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть фрагмент фінансового звіту з абсолютно коректною економічною термінологією:",
          "options": [
            "Завдяки зниженню собівартості продукції компанія збільшила операційний прибуток та скоротила кредиторську заборгованість.",
            "Через зниження собістоімості фірма підняла прибуток і закрила долги по кредиторам.",
            "Підприємство підняло виручку і розрахувалося по пасивам.",
            "Компанія зменшила расход на продукцію і вийшла в плюс по балансу."
          ],
          "answerIndex": 0,
          "explanation": "«Собівартість продукції... операційний прибуток... кредиторська заборгованість» — бездоганні норми фінансового аналізу."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u26-l5": {
    "id": "uk-u26-l5",
    "subject": "ukrainian",
    "unit": 26,
    "lessonNumber": 5,
    "title": "Макроекономічний аналіз, ВВП, інфляція та міжнародна торгівля",
    "level": "C1",
    "objective": "Опанувати макроекономічні індикатори (ВВП, рівень інфляції, платіжний баланс), термінологію зовнішньоекономічної діяльності (ЗЕД, ЗВТ) та інтеграції у світову економіку.",
    "presentation": {
      "explanation": "Макроекономіка досліджує функціонування економіки як єдиного цілого на національному та глобальному рівнях:\n\n1. Основні макроекономічні агрегати та індекси:\n   - *«Валовий внутрішній продукт (ВВП / GDP)»* — номінальний та реальний ВВП;\n   - *«Валовий національний дохід (ВНД)»*;\n   - *«Паритет купівельної спроможності (ПКС)»*;\n   - *«Індекс споживчих цін (ІСЦ / CPI)»* — показник рівня інфляції;\n   - *«Рівень безробіття (за методологією МОП)»*;\n   - *«Платіжний баланс та сальдо торговельного балансу (профіцит / дефіцит)»*.\n\n2. Зовнішньоекономічна діяльність (ЗЕД) та торговельна політика:\n   - *«Експорт та імпорт товарів і послуг»*;\n   - *«Глибока та всеохоплююча зона вільної торгівлі (DCFTA / ЗВТ) з Європейським Союзом»*;\n   - *«Торговельні бар'єри, квоти, митно-тарифне регулювання»*;\n   - *«Диверсифікація експортних ринків збуту»*.\n\n3. Співпраця з міжнародними фінансовими організаціями (МФО):\n   - *«Міжнародний валютний фонд (МВФ)»*, *«Світовий банк»*, *«Європейський банк реконструкції та розвитку (ЄБРР)»*;\n   - *«Програма розширеного фінансування (EFF)»*, *«Макрофінансова допомога»*.",
      "examples": [
        {
          "target": "Реальне зростання валового внутрішнього продукту України перевищило прогнозні показники завдяки розширенню морського експортного коридору.",
          "reading": "[rɛˈɑlʲnɛ zrɔsˈtɑnʲːɑ wɐlɔˈwɔɦɔ wnutˈrʲiʃnʲɔɦɔ prɔˈduktu ukrɐˈjinɪ pɛrɛwɪˈʃɪlɔ prɔɦˈnɔznʲi pɔkɑzˈnɪkɪ zɐwˈdʲɑkɪ rɔzˈʃɪrɛnʲːu mɔrʲsʲˈkɔɦɔ ɛkspɔrtˈnɔɦɔ kɔrɪˈdɔru] (reh-AHL'-neh zrohs-TAHN-nyah vah-loh-VOH-hoh vnoot-REESH-nyoh-hoh proh-DOOK-too oo-krah-YEE-ny peh-reh-vy-SHY-loh prohh-NOHZ-nee poh-kahz-NY-ky zahv-DYAH-ky roz-SHY-ren-nyoo mohr-s'KOH-hoh eks-pohrt-NOH-hoh koh-ry-DOH-roo)",
          "translation": "The real growth of Ukraine's gross domestic product exceeded forecasts thanks to the expansion of the maritime export corridor."
        },
        {
          "target": "Успішна реалізація структурних маяків програми МВФ сприяє збереженню макрофінансової стабільності та довіри іноземних кредиторів.",
          "reading": "[usʲˈpʲiʃnɐ rɛɐlʲizɑˈt͡sʲijɑ struktˈurnɪx mɐjɑˈkʲiw prɔɦˈrɑmɪ ɛm wɛ ˈɛf sprɪˈjɑjɛ zbɛrɛˈʒɛnʲːu mɐkrɔfʲinɐnˈsɔwɔji stɐˈbʲilʲnɔsʲtʲi tɑ dɔˈwʲirɪ inɔˈzɛmnɪx krɛdɪˈtɔrʲiw] (oos-PEESH-nah reh-ah-lee-ZAH-tsee-yah strook-TOOR-nykh mah-yah-KEEW proh-HRAH-my ehm veh ehf spry-YAH-yeh zbeh-reh-ZHEN-nyoo mah-kroh-fee-nahn-SOH-woh-yee stah-BEEL'-nohs-tee tah doh-VEE-ry ee-noh-ZEHM-nykh kreh-dy-TOH-reew)",
          "translation": "Successful implementation of structural benchmarks of the IMF program contributes to maintaining macro-financial stability and the confidence of foreign creditors."
        },
        {
          "target": "Позитивне сальдо торгівлі послугами частково компенсує дефіцит торговельного балансу товарів в умовах воєнного стану.",
          "reading": "[pɔzɪˈtɪwnɛ ˈsɑlʲdɔ tɔrˈɦʲiwlʲi pɔsˈluɦɐmɪ t͡ʃɑstˈkɔwɔ kɔmpɛnˈsujɛ dɛfʲiˈt͡sɪt tɔrɦɔˈwɛlʲnɔɦɔ bɐˈlɑnsu tɔwɐˈrʲiw w uˈmɔwɐx wɔˈjɛnnɔɦɔ ˈstɑnu] (poh-zy-TYV-neh SAHL'-doh tohr-HEEV-lee pohs-LOO-hah-my chahst-KOH-woh kohm-pehn-SOO-yeh deh-fee-TSYT tohr-hoh-VEHL'-noh-hoh bah-LAHN-soo toh-wah-REEW v oo-MOH-wahkh woh-YEHN-noh-hoh STAH-noo)",
          "translation": "The positive balance of trade in services partially compensates for the deficit of the trade balance in goods under martial law."
        }
      ],
      "mnemonics": [
        "ВВП — «валовий внутрішній продукт»; баланс: перевищення експорту — «профіцит», імпорту — «дефіцит»; ціни міряє «індекс споживчих цін»!"
      ],
      "culturalNotes": [
        "Інтеграція України до єдиного європейського ринку відкриває безмитний доступ українських виробників до ринку з понад 450 мільйонами споживачів."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як розшифровується абревіатура ВВП в українській макроекономічній термінології?",
          "options": [
            "Валовий внутрішній продукт (Gross Domestic Product - GDP in Ukrainian)",
            "Внутрішній валовий прибуток",
            "Виробничий валовий потенціал",
            "Всеукраїнський валютний показник"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна розшифровка ВВП — «валовий внутрішній продукт»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається стан торговельного балансу, коли експорт перевищує імпорт?",
          "options": [
            "Профіцит / позитивне сальдо (Trade surplus / positive balance)",
            "Дефіцит",
            "Інфляція",
            "Дисбаланс"
          ],
          "answerIndex": 0,
          "explanation": "Перевищення доходів від експорту над витратами на імпорт називається «профіцитом» або «позитивним сальдо»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення макроекономічного аналізу, в якому ВСІ терміни та показники вжито бездоганно:",
          "options": [
            "Уповільнення споживчої інфляції та зростання реального ВВП свідчать про поступове відновлення макроекономічної рівноваги.",
            "Падіння інфляції і підняття ВВП показують що економіка прийшла в порядок.",
            "Ріст валового продукту і зменшення індексів цін стабілізували гроші.",
            "Макроекономіка показала плюсовий ВВП і нормальні проценти інфляції."
          ],
          "answerIndex": 0,
          "explanation": "«Уповільнення споживчої інфляції та зростання реального ВВП... макроекономічної рівноваги» — високий академічний та аналітичний стандарт."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u27-l1": {
    "id": "uk-u27-l1",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 1,
    "title": "Давня література, козацьке бароко та кордоцентризм Сковороди",
    "level": "C1",
    "objective": "Опанувати термінологію давньої української літератури, стилістику козацького бароко, філософські концепції Григорія Сковороди («сродна праця», кордоцентризм) та алегоричні жанри.",
    "presentation": {
      "explanation": "Давня українська література (XI–XVIII ст.) поєднує монументальний літописний епос княжої доби, полемічну літературу та пишну культуру козацького бароко:\n\n1. Давньоруський та козацький літописний канон:\n   - *«Повість минулих літ»* Нестора Літописця — літописний монументалізм;\n   - *«Слово о полку Ігоревім»* — ритмізований героїчний епос, багатий на фольклорні символи (плач Ярославни, затемнення сонця);\n   - Козацькі літописи (Самовидця, Грабянки, Самійла Величка) — козацьке бароко, героїзація визвольних змагань доби Гетьманщини.\n\n2. Філософсько-поетична спадщина Григорія Сковороди:\n   - *«Кордоцентризм («філософія серця»)»* — пізнання істини через внутрішній духовний світ людини;\n   - *«Концепція «сродної праці»»* — діяльність за покликанням душі як запорука особистого щастя та гармонії в суспільстві;\n   - Збірка поезій *«Сад божественних пісень»* (відомий гімн свободі *«De Libertate»*);\n   - *«Байки Харківські»* (жанр алегоричної байки з повчальною частиною — *«силою»*);\n   - Знаменитий автоепітафій: *«Світ ловив мене, та не спіймав»*.\n\n3. Барокові поетичні форми:\n   - *«Курйозні вірші (акровірші, раки літеральні, хронограми)»*, *«Емблематика та алегорія»*.",
      "examples": [
        {
          "target": "Концепція «сродної праці» Григорія Сковороди стверджує, що щастя людини полягає в житті за покликанням власної душі та природними здібностями.",
          "reading": "[kɔnt͡sɛpˈt͡sʲijɑ ˈsrɔdnɔji ˈprɑt͡sʲi ɦrɪˈɦɔrʲijɑ skɔwɔrɔˈdɪ stwɛrˈdʒujɛ, ʃtʃɔ ˈʃtʃɑsʲtʲɑ lʲuˈdɪnɪ pɔlʲɑˈɦɑjɛ w ʒɪtʲˈtʲi zɑ pɔkˈlɪkɐnʲːɐm ˈwlɑsnɔji duˈʃi tɑ prɪˈrɔdnɪmɪ zdʲibˈnɔsʲtʲɐmɪ] (kohn-tseh-PTSEE-yah SROHD-noh-yee PRAH-tsee hry-HOH-ree-yah skoh-woh-roh-DY stwehr-DZHOO-yeh, shchoh SHCHAHS-tyah lyoo-DY-ny poh-lyah-HAH-yeh v zhyht-TEE zah pohk-LY-kahn-nyahm VLAHS-noh-yee doo-SHEE tah pry-ROHD-ny-my zdeeb-NOHS-tyah-my)",
          "translation": "Hryhorii Skovoroda's concept of 'congenial labor' asserts that human happiness lies in living according to one's soul's calling and natural abilities."
        },
        {
          "target": "Козацькі літописи XVII–XVIII століть поєднують документальну точність хроніки з високим художнім пафосом барокової естетики.",
          "reading": "[kɔˈzɑt͡sʲkʲi lʲitɔˈpɪsɪ sʲimnɐd͡zʲɑˈtɔɦɔ wʲisʲimnɐd͡zʲɑˈtɔɦɔ stɔˈlʲitʲ pɔjɛdˈnujutʲ dɔkumɛnˈtɑlʲnu ˈtɔtʃnʲisʲtʲ ˈxrɔnʲikɪ z wɪˈsɔkɪm xuˈdɔʒnʲim ˈpɑfɔsɔm bɐrɔˈkɔwɔji ɛsˈtɛtɪkɪ] (koh-ZAHTS'-kee lee-toh-PY-sy seem-nah-DZYAHT-oh-hoh vee-seem-nah-DZYAHT-oh-hoh stoh-LEET' poh-yehd-NOO-yoot' doh-koo-mehn-TAHL'-noo TOHCH-neest' KHROH-nyee-ky z vy-SOH-kym khoo-DOHZH-neem PAH-foh-sohm bah-roh-KOH-woh-yee ehs-TEH-ty-ky)",
          "translation": "Cossack chronicles of the 17th–18th centuries combine the documentary precision of a chronicle with the high artistic pathos of Baroque aesthetics."
        },
        {
          "target": "У знаменитій поезії «De Libertate» Сковорода підносить свободу як найбільше багатство людини, порівнюючи її з подвигом Богдана Хмельницького.",
          "reading": "[u znɐmɛˈnʲitʲij pɔˈɛzʲiji dɛ lʲibɛrˈtɑtɛ skɔwɔrɔˈdɑ pʲidˈnɔsɪtʲ swɔˈbɔdu jɑk nɐjˈbʲilʲʃɛ bɐˈɦɑtstxɔ lʲuˈdɪnɪ, pɔrʲiwˈnʲujutʃɪ ˈjiji z ˈpɔdwɪɦɔm bɔɦˈdɑnɐ xmɛlʲˈnɪt͡sʲkɔɦɔ] (oo znah-meh-NEE-teey poh-eh-ZEE-yee deh lee-behr-TAH-teh skoh-woh-roh-DAH peed-NOH-seet' swoh-BOH-doo yahk nahy-BEEL'-sheh bah-HAHT-stvah lyoo-DY-ny, poh-reev-NYOO-yoo-chy yee-YEE z POHD-vy-hohm boh-HDAH-nah khmehl'-NYTS'-koh-hoh)",
          "translation": "In the celebrated poem 'De Libertate', Skovoroda extols freedom as humanity's greatest wealth, comparing it to the feat of Bohdan Khmelnytsky."
        }
      ],
      "mnemonics": [
        "Сковорода: «кордоцентризм» (філософія серця), «сродна праця» (покликання), мораль байки — «сила», епітафія — «Світ ловив мене, та не спіймав»!"
      ],
      "culturalNotes": [
        "Григорій Сковорода — mandrivny filosof (мандрівний філософ), чий портрет прикрашає купюру номіналом 500 гривень, став символом українського вільнодумства."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як Григорій Сковорода називав філософську концепцію праці за покликанням і природним нахилом?",
          "options": [
            "Сродна праця (Congenial / affinity labor - core philosophical concept of Skovoroda)",
            "Трудова повинність",
            "Суспільна діяльність",
            "Духовна професія"
          ],
          "answerIndex": 0,
          "explanation": "Філософське вчення Сковороди про працю за покликанням називається «сродна праця»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається повчальний висновок у байках Григорія Сковороди («Байки Харківські»)?",
          "options": [
            "Сила (Moral / moral deduction in Skovoroda's fables)",
            "Мораль",
            "Епілог",
            "Повчання"
          ],
          "answerIndex": 0,
          "explanation": "У байках Сковороди повчальна частина традиційно має авторську назву «сила»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть твердження, яке літературознавчо бездоганно характеризує творчість Григорія Сковороди:",
          "options": [
            "Григорій Сковорода поєднав барокову емблематику з філософією кордоцентризму, проголосивши самопізнання та «сродну працю» головними умовами щастя.",
            "Сковорода писав романтичні поеми про козаків і закликав до збройного повстання проти панів.",
            "Григорій Сковорода є автором першого урбаністичного роману в українській класичній літературі.",
            "Сковорода започаткував реалістичний побутовий театр і створив новий правопис."
          ],
          "answerIndex": 0,
          "explanation": "«Барокова емблематика, кордоцентризм, самопізнання та «сродна праця»» — точний науковий аналіз філософської поезії Сковороди."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u27-l2": {
    "id": "uk-u27-l2",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 2,
    "title": "Зачинателі модерної літератури: «Енеїда» Котляревського та романтизм Шевченка",
    "level": "C1",
    "objective": "Опанувати літературознавчий аналіз «Енеїди» Котляревського (бурлеск, травестія) та націєтворчої поетики Тараса Шевченка («Кобзар», романтизм, жанр послання).",
    "presentation": {
      "explanation": "Кінець XVIII – середина XIX століття ознаменували народження нової української літератури на живій народній основі:\n\n1. «Енеїда» Івана Котляревського (1798 р.) — епохальний поворот:\n   - Перший твір нової української літератури, написаний живою розмовною народною мовою;\n   - Жанр: *«бурлескно-травестійна поема»* (античний сюжет Вергілія перелицьовано на український козацький побут);\n   - *Травестія* (перевдягання героїв у козацькі строї) та *бурлеск* (зниження пафосу, народний сміх, колоритна соковита фразеологія);\n   - Драматургія: п'єса *«Наталка Полтавка»* — «праматір українського національного театру».\n\n2. Тарас Шевченко — духовний будівничий нації:\n   - Вихід *«Кобзаря»* (1840 р.) як точка неповернення в утвердженні української національної ідентичності;\n   - Романтичні балади (*«Причинна»*, *«Тополя»*), історичні поеми (*«Гайдамаки»*), філософські поеми періоду «Трьох літ» (*«Сон»*, *«Кавказ»*, *«І мертвим, і живим...»*);\n   - Поетичний синтаксис Шевченка: *риторичні звертання (апострофа), пристрасна інвектива, біблійний пророчий пафос, коломийковий віршовий розмір*.",
      "examples": [
        {
          "target": "«Енеїда» Івана Котляревського започаткувала нову українську літературну мову, увічнивши козацьку ментальність через бурлескно-травестійну форму.",
          "reading": "[ɛnɛˈjidɐ iˈwɑnɐ kɔtlʲɑˈrɛwsʲkɔɦɔ zɐpɔtʃɐtkɔˈwɑlɐ ˈnɔwu ukrɐˈjinsʲku lʲitɛrɐˈturnu ˈmɔwu, uwʲitʃˈnɪwʃɪ kɔˈzɑt͡sʲku mɛntɐlʲˈnʲisʲtʲ ˈtʃɛrɛz burˈlɛsknɔ trɐwɛsˈtʲijnu ˈfɔrmu] (eh-neh-YEE-dah ee-VAH-nah koht-lyah-REHV-s'koh-hoh zah-poh-chaht-koh-VAH-lah NOH-woo oo-krah-YEEN-s'koo lee-teh-rah-TOOR-noo MOH-woo, oo-veech-NYV-shy koh-ZAHTS'-koo mehn-tahl'-NEEST' CHEH-rez boor-LEHSK-noh trah-wehs-TEEY-noo FOHR-moo)",
          "translation": "Ivan Kotlyarevsky's 'Eneida' initiated the modern Ukrainian literary language, immortalizing the Cossack mentality through a burlesque-travesty form."
        },
        {
          "target": "Послання Шевченка «І мертвим, і живим, і ненарожденним...» закликає до національного порозуміння та відновлення історичної гідності.",
          "reading": "[pɔsˈlɑnʲːɑ ʃɛwˈtʃɛnkɐ i ˈmɛrtwɪm, i ʒɪˈwɪm, i nɛnɐrɔʒˈdɛnnɪm zɐklɪˈkɑjɛ dɔ nɐt͡sʲiɔˈnɑlʲnɔɦɔ pɔrɔzuˈmʲinʲːɑ tɑ wʲidnɔwˈlɛnʲːɑ istɔˈrɪtʃnɔji ˈɦʲidnɔsʲtʲi] (pohs-LAHN-nyah shehv-CHEHN-kah ee MEHR-twym, ee zhy-VYM, ee neh-nah-rohzh-DEHN-nym zah-kly-KAH-yeh doh nah-tsee-oh-NAHL'-noh-hoh poh-roh-zoo-MEEN-nyah tah veed-nohv-LEN-nyah ees-toh-RYCH-noh-yee HEED-nohs-tee)",
          "translation": "Shevchenko's epistle 'To the dead, the living, and the unborn...' calls for national reconciliation and the restoration of historical dignity."
        },
        {
          "target": "Шевченківська інвектива в поемі «Кавказ» («Борітеся — поборете, вам Бог помагає!») стала вічним гаслом визвольної боротьби українського народу.",
          "reading": "[ʃɛwtʃɛnˈkʲiwsʲkɐ inwɛkˈtɪwɐ w pɔˈɛmʲi kɐwˈkɑz bɔˈrʲitɛsʲɑ pɔbɔˈrɛtɛ, wɑm bɔx pɔmɐˈɦɑjɛ ˈstɑlɐ ˈwʲitʃnɪm ˈɦɑslɔm wɪzwɔlʲˈnɔji bɔrɔtʲˈbɪ ukrɐˈjinsʲkɔɦɔ nɐˈrɔdu] (shehv-chen-KEEV-s'kah een-wehk-TY-wah v poh-EH-mee kahv-KAHZ boh-REE-tehs'-yah poh-boh-REH-teh, vahm bohkh poh-mah-HAH-yeh STAH-lah VEECH-nym HAH-slohm vyz-vohl'-NOH-yee boh-roht'-BY oo-krah-YEEN-s'koh-hoh nah-ROH-doo)",
          "translation": "Shevchenko's invective in the poem 'Caucasus' ('Fight on — and you will prevail, God helps you!') became an eternal slogan of the Ukrainian people's liberation struggle."
        }
      ],
      "mnemonics": [
        "1798 рік — «Енеїда» Котляревського (бурлеск і травестія); 1840 рік — «Кобзар» Тараса Шевченка; гасло — «Борітеся — поборете!»"
      ],
      "culturalNotes": [
        "Тарас Шевченко перетворив українську мову з етнографічного наріччя на потужний інструмент високої європейської поезії, філософії та державотворення."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як літературознавчо визначається жанр поеми «Енеїда» Івана Котляревського?",
          "options": [
            "Бурлескно-травестійна поема (Burlesque-travesty epic poem - canonical genre)",
            "Героїчна романтична поема",
            "Історична балада",
            "Побутова сатирична повість"
          ],
          "answerIndex": 0,
          "explanation": "Жанр «Енеїди» Котляревського — бурлескно-травестійна поема."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який твір Тараса Шевченка за жанром є посланням-пересторогою до тогочасної української еліти?",
          "options": [
            "«І мертвим, і живим, і ненарожденним...» (Epistle-admonition to the elite)",
            "«Гайдамаки»",
            "«Катерина»",
            "«Причинна»"
          ],
          "answerIndex": 0,
          "explanation": "Жанром послання є класичний твір «І мертвим, і живим, і ненарожденним землякам моїм в Украйні і не в Украйні моє дружнєє посланіє»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому націєтворчу роль класиків української літератури визначено з повною науковою точністю:",
          "options": [
            "«Енеїда» Котляревського утвердила народну мовну основу літератури, а поезія Шевченка кристалізувала національну ідею та прагнення свободи.",
            "Котляревський скопіював римську поему, а Шевченко перекладав кавказькі пісні російською мовою.",
            "«Кобзар» був першою збіркою прози, що описувала сільське господарство Полтавщини.",
            "Шевченко і Котляревський заснували футуризм і відмовилися від класичної рими."
          ],
          "answerIndex": 0,
          "explanation": "«Енеїда... мовну основу... поезія Шевченка кристалізувала національну ідею» — академічно точне формулювання."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u27-l3": {
    "id": "uk-u27-l3",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 3,
    "title": "Реалізм, психологічна проза та соціально-побутова повість",
    "level": "C1",
    "objective": "Опанувати аналіз реалістичної прози XIX століття (Нечуй-Левицький, Панас Мирний, Франко), психологізм характерів, колорит побутового діалогу та соціальний конфлікт.",
    "presentation": {
      "explanation": "Український реалізм другої половини XIX століття збагатив літературу глибоким психологічним аналізом суспільних процесів:\n\n1. Іван Нечуй-Левицький — майстер пластичного опису та гумору:\n   - Соціально-побутова повість *«Кайдашева сім'я»* (1879 р.) — енциклопедія українського сільського побуту періоду пореформеної доби;\n   - Специфіка: *комізм ситуацій та характерів, діалектизми Наддніпрянщини, психологічний конфлікт індивідуалізму та родинної роз'єднаності*;\n   - Іван Франко назвав автора «всеобіймаючим оком Правобережної України».\n\n2. Панас Мирний — творець соціально-психологічного роману:\n   - *«Хіба ревуть воли, як ясла повні?»* (співавтор Іван Білик, 1880 р.) — перший соціально-психологічний роман в українській літературі;\n   - Трагедія Чіпки Варениченка: *переродження правдошукача на розбійника («пропаща сила»), соціальний детермінізм учинків*.\n\n3. Іван Франко — титан праці та інтелекту:\n   - Повість *«Захар Беркут»* (історичний патріотизм та народовладдя);\n   - Філософська поема *«Мойсей»* (трагедія вождя та народу, пророче покликання нації);\n   - Психологічна новела *«Сойчине крило»* (модерний психологізм жіночої долі).",
      "examples": [
        {
          "target": "У повісті «Кайдашева сім'я» Нечуй-Левицький через іронію та сатиру викриває руйнування людської душі під тиском дріб'язкового егоїзму.",
          "reading": "[u ˈpɔwʲisʲtʲi kɐjdɐˈʃɛwɐ sʲimˈjɑ nɛˈtʃuj lɛˈwɪt͡sʲkɪj ˈtʃɛrɛz irɔˈnʲiju tɑ sɐˈtɪru wɪkˈrɪwɑjɛ rujnuˈwɑnʲːɑ lʲudʲˈsʲkɔji duˈʃi pʲid ˈtɪskɔm drʲibˈjɑzkɔwɔɦɔ ɛɦɔˈjizmu] (oo POH-wees-tee kahy-dah-SHEH-wah seem-YAH neh-CHOOY leh-WYTS'-kyy CHEH-rez ee-roh-NEE-yoo tah sah-TY-roo vy-kry-VAH-yeh rooy-noo-VAHN-nyah lyood-s'KOH-yee doo-SHEE peed TYS-kohm dreeb-YAHZ-koh-woh-hoh eh-hoh-EEZ-moo)",
          "translation": "In the novella 'The Kaidash Family', Nechuy-Levytsky exposes through irony and satire the destruction of the human soul under the pressure of petty egoism."
        },
        {
          "target": "Роман Панаса Мирного «Хіба ревуть воли, як ясла повні?» досліджує складну еволюцію бунтарської особистості в умовах кріпацтва та безправ'я.",
          "reading": "[rɔˈmɑn pɐˈnɑsɐ ˈmɪrnɔɦɔ ˈxʲibɐ rɛˈwutʲ wɔˈlɪ jɑk ˈjɑslɐ ˈpɔwnʲi dɔsʲˈlʲidʒujɛ ˈsklɑdnu ɛwɔˈlʲut͡sʲiju buntɐrʲsʲˈkɔji ɔsɔˈbɪstɔsʲtʲi w uˈmɔwɐx krʲiˈpɑt͡stxɐ tɑ bɛzpˈrɑwjjɑ] (roh-MAHN pah-NAH-sah MYR-noh-hoh KHEE-bah reh-VOOT' voh-LY yahk YAH-slah POHV-nee dohs-LEE-dzhoo-yeh SKLAHD-noo eh-woh-LYOO-tsee-yoo boon-tahr-s'KOH-yee oh-soh-BYS-tohs-tee v oo-MOH-wahkh kree-PAHT-stvah tah bez-PRAHV-yah)",
          "translation": "Panas Myrny's novel 'Do Oxen Bellow When Cribs Are Full?' examines the complex evolution of a rebellious personality under serfdom and lawlessness."
        },
        {
          "target": "У філософській поемі «Мойсей» Іван Франко утверджує непохитну віру в історичне воскресіння та вільний розвиток українського народу.",
          "reading": "[u fʲilɔˈsɔfsʲkʲij pɔˈɛmʲi mɔjˈsɛj iˈwɑn frɐnˈkɔ utwɛrˈdʒujɛ nɛpɔˈxɪtnu ˈwʲiru w istɔˈrɪtʃnɛ wɔskrɛˈsʲinʲːɑ tɑ ˈwʲilʲnɪj rɔzˈwɪtɔk ukrɐˈjinsʲkɔɦɔ nɐˈrɔdu] (oo fee-loh-SOHF-s'keey poh-EH-mee moy-SEHY ee-VAHN frahn-KOH oot-wehr-DZHOO-yeh neh-poh-KHYT-noo VEE-roo v ees-toh-RYCH-neh vohs-kreh-SEEN-nyah tah VEEL'-nyy roz-VY-tohk oo-krah-YEEN-s'koh-hoh nah-ROH-doo)",
          "translation": "In the philosophical poem 'Moses', Ivan Franko establishes an unwavering faith in the historical resurrection and free development of the Ukrainian nation."
        }
      ],
      "mnemonics": [
        "Нечуй-Левицький — «Кайдашева сім'я» (соціально-побутова повість); Панас Мирний — «Хіба ревуть воли...» (соціально-психологічний роман); Франко — «Мойсей»!"
      ],
      "culturalNotes": [
        "«Кайдашева сім'я» залишається найпопулярнішим текстом для театральних постановок та сучасних кіноадаптацій (серіал «Спіймати Кайдаша»)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Хто є автором першого в українській літературі соціально-психологічного роману «Хіба ревуть воли, як ясла повні?»?",
          "options": [
            "Панас Мирний та Іван Білик (Authors of the classic socio-psychological novel)",
            "Іван Нечуй-Левицький",
            "Іван Франко",
            "Михайло Коцюбинський"
          ],
          "answerIndex": 0,
          "explanation": "Авторами роману «Хіба ревуть воли, як ясла повні?» є Панас Мирний (Панас Рудченко) та його брат Іван Білик."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "У якому творі Івана Франка алегорично осмислено проблему провідника нації та шляху народу до свободи?",
          "options": [
            "Поема «Мойсей» (Philosophical poem on spiritual leadership and nationhood)",
            "«Захар Беркут»",
            "«Борислав сміється»",
            "«Украдене щастя»"
          ],
          "answerIndex": 0,
          "explanation": "Вершиною філософської поезії Франка є поема «Мойсей»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому особливості українського реалізму проаналізовано бездоганно:",
          "options": [
            "Український реалізм поєднав етнографічну яскравість побутописання з глибоким аналізом соціальної детермінації людської долі.",
            "Реалісти повністю відкинули народну мову і писали тільки латиною для шляхти.",
            "Усі реалістичні повісті описували фантастичні космічні подорожі в минуле.",
            "Реалізм в Україні тривав лише три роки і не залишив жодного видатного роману."
          ],
          "answerIndex": 0,
          "explanation": "«Український реалізм поєднав етнографічну яскравість... з глибоким аналізом соціальної детермінації» — точна літературознавча оцінка."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u27-l4": {
    "id": "uk-u27-l4",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 4,
    "title": "Модернізм, Розстріляне відродження та урбаністичний роман",
    "level": "C1",
    "objective": "Опанувати естетику українського модернізму (Коцюбинський, Леся Українка, Стефаник) та трагічний спадок доби Розстріляного відродження (Хвильовий, Підмогильний, неокласики).",
    "presentation": {
      "explanation": "Перші десятиліття XX століття ознаменувалися вибухом українського модернізму та трагічним розквітом генерації Розстріляного відродження (1920-ті рр.):\n\n1. Напрями раннього модернізму:\n   - *Імпресіонізм*: Михайло Коцюбинський (*«Intermezzo»*, *«Тіні забутих предків»*) — фіксація миттєвих вражень, світлотінь, психологізм настрою;\n   - *Неоромантизм*: Леся Українка (*«Лісова пісня»*, *«Кассандра»*, *«Бояриня»*) — культ сильної вольової особистості, конфлікт високої мрії та буденності;\n   - *Експресіонізм*: Василь Стефаник (*«Камінний хрест»*) — граничний трагізм, лаконізм, біль еміграції покутського селянства.\n\n2. Розстріляне відродження (1920–1930-ті роки) — культурний ренесанс і терор:\n   - Микола Хвильовий (*«Я (Романтика)»*) — психологічна новела про роздвоєність чекіста між революційним фанатизмом і синівською любов'ю; гасло *«Геть від Москви! Даєш психологічну Європу!»*;\n   - Валер'ян Підмогильний (*«Місто»*) — перший модерний український урбаністичний роман (підкорення Києва Степаном Радченком, екзистенціалізм);\n   - Київські неокласики (Микола Зеров, Максим Рильський, Павло Филипович) — культ античної гармонії, сонетна віртуозність, естетизм;\n   - Театр «Березіль» Леся Курбаса та драматургія Миколи Куліша (*«Мина Мазайло»*).",
      "examples": [
        {
          "target": "Новела Миколи Хвильового «Я (Романтика)» розкриває страшну трагедію дегуманізації людини, засліпленої фанатичною більшовицькою ідеологією.",
          "reading": "[nɔˈwɛlɐ mɪˈkɔlɪ xwɪlʲɔˈwɔɦɔ jɑ rɔˈmɑntɪkɐ rɔzkrɪˈwɑjɛ ˈstrɑʃnu trɐˈɦɛdʲiju dɛɦumɐnʲizɑˈt͡sʲiji lʲuˈdɪnɪ, zɐsʲˈlʲipɫɛnɔji fɐnɐˈtɪtʃnɔju bʲilʲʃɔwɪt͡sʲˈkɔju idɛɔˈlɔɦʲijɛju] (noh-WEH-lah my-KOH-ly khwy-lyoh-VOH-hoh YAH roh-MAHN-ty-kah roz-kry-VAH-yeh STRAHSH-noo trah-HEH-dee-yoo deh-hoo-mah-nee-ZAH-tsee-yee lyoo-DY-ny, zahs-LEEP-leh-noh-yee fah-nah-TYCH-noh-yoo beel'-shoh-wyts'-KOH-yoo ee-deh-oh-LOH-hee-yeh-yoo)",
          "translation": "Mykola Khvylovy's novella 'I (Romance)' reveals the terrible tragedy of the dehumanization of a person blinded by fanatical Bolshevik ideology."
        },
        {
          "target": "Роман «Місто» Валер'яна Підмогильного став визначним зразком урбаністичної прози, що порушує екзистенційні питання пошуку свого «я».",
          "reading": "[rɔˈmɑn ˈmʲistɔ wɐlɛrʲiˈjɑnɐ pʲidmɔˈɦɪlʲnɔɦɔ ˈstɑw wɪznɐt͡ʃˈnɪm ˈzrɑzkɔm urbɐnʲisˈtɪtʃnɔji ˈprɔzɪ, ʃtʃɔ pɔˈruʃujɛ ɛkzɪstɛnt͡sʲijˈnʲi pɪˈtɑnʲːɑ pɔˈʃuku swɔˈjɔɦɔ jɑ] (roh-MAHN MEES-toh vah-leh-ree-YAH-nah peed-moh-HYL'-noh-hoh STAHV vyz-nahch-NYM ZRAHZ-kohm oor-bah-nees-TYCH-noh-yee PROH-zy, shchoh poh-ROO-shoo-yeh ehk-zys-tehn-tseey-NEE py-TAHN-nyah poh-SHOO-koo swoh-YOH-hoh YAH)",
          "translation": "Valeryan Pidmohylny's novel 'The City' became a prominent example of urban prose addressing existential questions of the search for one's self."
        },
        {
          "target": "Драма-феєрія Лесі Українки «Лісова пісня» символізує вічний потяг людини до краси, первозданної природи та духовної свободи.",
          "reading": "[ˈdrɑmɐ fɛjɛˈrʲijɑ ˈlɛsʲi ukrɐˈjinkɪ lʲiˈsɔwɐ ˈpʲisʲnʲɑ sɪmwɔˈlʲizujɛ ˈwʲitʃnɪj ˈpɔtʲɑɦ lʲuˈdɪnɪ dɔ krɐˈsɪ, pɛrwɔzˈdɑnnɔji prɪˈrɔdɪ tɑ duˈxɔwnɔji swɔˈbɔdɪ] (DRAH-mah feh-yeh-REE-yah LEH-see oo-krah-YEEN-ky lee-SOH-wah PEES-nyah sym-woh-LEE-zoo-yeh VEECH-nyy POH-tyahk lyoo-DY-ny doh krah-SY, pehr-wohz-DAHN-noh-yee pry-ROH-dy tah doo-KHOHV-noh-yee swoh-BOH-dy)",
          "translation": "Lesya Ukrainka's drama-extravaganza 'The Forest Song' symbolizes humanity's eternal yearning for beauty, pristine nature, and spiritual freedom."
        }
      ],
      "mnemonics": [
        "Модернізм: Коцюбинський (імпресіонізм), Леся Українка (неоромантизм), Стефаник (експресіонізм); 1920-ті — Розстріляне відродження: Хвильовий, Підмогильний («Місто»), Зеров!"
      ],
      "culturalNotes": [
        "Майже всі діячі «Розстріляного відродження» були репресовані радянським тоталітарним режимом у Сандармоху та таборах ГУЛАГу у 1937–1938 роках."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається перший в українській модерній літературі урбаністичний роман Валер'яна Підмогильного?",
          "options": [
            "«Місто» (The City - iconic urban existentialist novel by Valeryan Pidmohylny)",
            "«Київські вечори»",
            "«Хмари»",
            "«Майстер корабля»"
          ],
          "answerIndex": 0,
          "explanation": "Першим модерним урбаністичним романом є «Місто» Валер'яна Підмогильного (1928 р.)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Хто очолював літературне угруповання ВАПЛІТЕ та висунув гасло «Геть від Москви! Даєш психологічну Європу!»?",
          "options": [
            "Микола Хвильовий (Leader of VAPLITE and literary discussion of 1925-1928)",
            "Микола Зеров",
            "Михайло Семенко",
            "Валер'ян Підмогильний"
          ],
          "answerIndex": 0,
          "explanation": "Лідером ВАПЛІТЕ та ініціатором літературної дискусії 1925–1928 рр. був Микола Хвильовий."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть характеристику, яка вичерпно розкриває значення покоління «Розстріляного відродження»:",
          "options": [
            "Покоління Розстріляного відродження створило надпотужний авангардний європейський модернізм в Україні, який був жорстоко знищений сталінським терором.",
            "Це група авторів, які писали виключно дитячі казки для радянських шкіл.",
            "Письменники 1920-х років повністю відмовилися від української мови на користь есперанто.",
            "Розстріляне відродження обмежувалося лише перекладами середньовічних текстів."
          ],
          "answerIndex": 0,
          "explanation": "«Створило надпотужний авангардний європейський модернізм... жорстоко знищений сталінським терором» — історично і літературознавчо бездоганно."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u27-l5": {
    "id": "uk-u27-l5",
    "subject": "ukrainian",
    "unit": 27,
    "lessonNumber": 5,
    "title": "Поетика, метрика, віршування та літературознавчий аналіз тексту",
    "level": "C1",
    "objective": "Опанувати систему силабо-тонічного віршування (ямб, хорей, дактиль, амфібрахій, анапест), строфічні форми (сонет, верлібр), художні тропи та інструментарій критичного аналізу.",
    "presentation": {
      "explanation": "Поетика та теорія літератури досліджують закони художньої організації тексту, метрику вірша та систему образних засобів (тропів):\n\n1. Силабо-тонічна система віршування:\n   - *Двоскладові стопи*:\n     * «Ямб» (наголос на другому складі: U —);\n     * «Хорей» (наголос на першому складі: — U);\n   - *Трискладові стопи*:\n     * «Дактиль» (наголос на першому складі: — U U);\n     * «Амфібрахій» (наголос на другому складі: U — U);\n     * «Анапест» (наголос на третьому складі: U U —);\n   - Допоміжні стопи: *«Пірихій»* (пропуск наголосу: U U) та *«Спондей»* (надхмарний наголос: — —);\n   - Паузи: *«Цезура»* (ритмічна пауза всередині віршового рядка) та *«Клаузула»* (закінчення рядка).\n\n2. Строфічні форми:\n   - *«Сонет»* — 14 рядків (два катрени і два терцети: abba abba cdc dcd);\n   - *«Верлібр»* — вільний вірш без рими та чіткого метру, що тримається на інтонаційній єдності;\n   - *«Білий вірш»* — неримований вірш із збереженням метричної стопи;\n   - *«Октава, терцина, рондо, рубаї»*.\n\n3. Система поетичних тропів та фігур:\n   - *Тропи*: *метафора, метонімія, синекдоха, оксиморон, гіпербола, літота, персоніфікація*;\n   - *Синтаксичні та звукові фігури*: *алітерація, асонанс, анафора (єдинопочаток), епіфора, градація, антитеза, інверсія, риторичний оклик/питання*.",
      "examples": [
        {
          "target": "Класичний сонет вимагає канонічної форми з чотирнадцяти рядків та вишуканого розвитку поетичної думки від тези до синтезу.",
          "reading": "[klɐˈsɪtʃnɪj sɔˈnɛt wɪˈmɑɦɑjɛ kɐnɔˈnʲitʃnɔji ˈfɔrmɪ z tʃɔtɪrˈnɑd͡zʲɑtɪ rʲɑdˈkʲiw tɑ wɪˈʃukɐnɔɦɔ rɔzˈwɪtku pɔɛˈtɪtʃnɔji ˈdumkɪ wʲid ˈtɛzɪ dɔ ˈsɪntɛzu] (klah-SYCH-nyy soh-NEHT vy-mah-HAH-yeh kah-noh-NEECH-noh-yee FOHR-my z choh-tyr-NAH-dzyaht-ty ryahd-KEEW tah vy-SHOO-kah-noh-hoh roz-VYT-koo poh-eh-TYCH-noh-yee DOOM-ky veed TEH-zy doh SYN-teh-zoo)",
          "translation": "The classical sonnet requires a canonical form of fourteen lines and an exquisite development of poetic thought from thesis to synthesis."
        },
        {
          "target": "Алітерація на глухі шиплячі та свистячі приголосні посилює тривожний драматизм поетичного опису бурі.",
          "reading": "[ɐlʲitɛrɑˈt͡sʲijɑ nɑ ɦluˈxʲi ʃɪpˈlʲɑtʃʲi tɑ swɪsʲˈtʲɑtʃʲi prɪɦɔˈlɔsnʲi pɔˈsɪlʲujɛ trɪˈwɔʒnɪj drɐmɐˈtɪzm pɔɛˈtɪtʃnɔɦɔ ˈɔpɪsu ˈburʲi] (ah-lee-teh-rah-TSEE-yah nah hloo-KHEE shy-PLYAH-chee tah swys-TYAH-chee pry-hoh-LOHS-nee poh-SYL'-yoo-yeh try-VOHZH-nyy drah-mah-TYZM poh-eh-TYCH-noh-hoh OH-py-soo BOO-ree)",
          "translation": "Alliteration on voiceless sibilants and hissing consonants intensifies the anxious drama of the poetic storm description."
        },
        {
          "target": "Сучасна українська поезія майстерно послуговується верлібром, створюючи поліфонічні смислові структури через вільну асоціативну ритміку.",
          "reading": "[sut͡ʃɑsˈnɐ ukrɐˈjinsʲkɐ pɔˈɛzʲijɑ mɐjsʲˈtɛrnɔ pɔsˈluɦɔwujɛtʲsʲɑ wɛrˈlʲibrɔm, stwɔˈrʲujutʃɪ pɔlʲifɔˈnʲitʃnʲi smɪsɫɔˈwʲi struktˈurɪ ˈtʃɛrɛz ˈwʲilʲnu ɐsɔt͡sʲiɐˈtɪwnu rɪtˈmʲiku] (soo-chahs-NAH oo-krah-YEEN-s'kah poh-EH-zee-yah mahys-TEHR-noh pohs-LOO-hoh-woo-yeht'-syah wehr-LEE-brohm, stwoh-RYOO-yoo-chy poh-lee-foh-NEECH-nee smys-loh-VEE strook-TOO-ry CHEH-rez VEEL'-noo ah-soh-tsee-ah-TYV-noo ryt-MEE-koo)",
          "translation": "Contemporary Ukrainian poetry masterfully employs vers libre (free verse), creating polyphonic semantic structures through free associative rhythm."
        }
      ],
      "mnemonics": [
        "Стопи: Ямб (2-й склад), Хорей (1-й склад); Дактиль (1-й), Амфібрахій (2-й), Анапест (3-й); Сонет — рівно 14 рядків!"
      ],
      "culturalNotes": [
        "Українська поетична школа дала світові шедеври вільного вірша (Василь Голобородько, Ігор Калинець) та неперевершених майстрів силабо-тоніки (Ліна Костенко, Василь Стус)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Яка віршова стопа є трискладовою з наголосом на другому складі (U — U)?",
          "options": [
            "Амфібрахій (Amphibrach - three-syllable meter with stress on the middle syllable)",
            "Дактиль",
            "Анапест",
            "Ямб"
          ],
          "answerIndex": 0,
          "explanation": "Трискладова стопа з наголосом на середньому (другому) складі — це «амфібрахій»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається повторення однакових або співзвучних приголосних звуків у віршовому рядку для підсилення виразності?",
          "options": [
            "Алітерація (Alliteration - repetition of consonant sounds)",
            "Асонанс",
            "Анафора",
            "Оксиморон"
          ],
          "answerIndex": 0,
          "explanation": "Повторення приголосних називається «алітерацією» (повторення голосних — «асонансом»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому літературознавчий та поетикальний аналіз виконано бездоганно:",
          "options": [
            "Використання перехресного римування, ямбічного розміру та експресивної метафори підкреслює філософську напругу поетичного роздуму.",
            "Цей вірш написаний прозою з випадковими голосними буквами без тропів.",
            "Поет використав сонет на тридцять рядків з римами по колу.",
            "Хорей завжди має наголос на останньому четвертому складі рядка."
          ],
          "answerIndex": 0,
          "explanation": "«Використання перехресного римування, ямбічного розміру та експресивної метафори...» — бездоганний науковий літературознавчий стиль."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u28-l1": {
    "id": "uk-u28-l1",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 1,
    "title": "Екосистеми, біорізноманіття та природно-заповідний фонд",
    "level": "C1",
    "objective": "Опанувати екологічну термінологію (біорізноманіття, біосферні заповідники, Червона книга України, ендемічні види) та норми захисту природного середовища від антропогенного навантаження.",
    "presentation": {
      "explanation": "Екологія досліджує взаємодію живих організмів із навколишнім середовищем та функціонування біосфери:\n\n1. Природно-заповідний фонд України (ПЗФ):\n   - *«Біосферні заповідники»* (Асканія-Нова, Карпатський, Чорноморський, Дунайський);\n   - *«Національні природні парки (НПП)»* (Синевир, Шацькі озера, Голосіївський);\n   - *«Заказники, пам'ятки природи, регіональні ландшафтні парки»*;\n   - *«Червона книга України»* (види рослин і тварин під загрозою зникнення) та *«Зелена книга України»* (рідкісні рослинні угруповання).\n\n2. Екологічні поняття та біологічний баланс:\n   - *«Збереження біорізноманіття (Biodiversity conservation)»*;\n   - *«Ендемічні та реліктові види»*;\n   - *«Антропогенний вплив / антропогенне навантаження»* (вплив людської діяльності);\n   - *«Фрагментація природних біотопів та міграційні екологічні коридори»*.\n\n3. Нормативна природоохоронна лексика:\n   - Вживайте *«охорона навколишнього природного середовища / охорона довкілля»* (НЕ *охорона окружаючої среди*);\n   - Вживайте *«забруднення довкілля»*;\n   - Вживайте *«сталий розвиток (Sustainable development)»*.",
      "examples": [
        {
          "target": "Розширення територій природно-заповідного фонду є критично важливим для збереження унікального біорізноманіття та відновлення популяцій рідкісних видів.",
          "reading": "[rɔzˈʃɪrɛnʲːɑ tɛrɪˈtɔrʲij prɪˈrɔdnɔ zɐpɔˈwʲidnɔɦɔ ˈfɔndu jɛ krɪˈtɪtʃnɔ wɐʒˈlɪwɪm dlʲɑ zbɛrɛˈʒɛnʲːɑ unʲiˈkɑlʲnɔɦɔ bʲiɔrʲizmɐnɔˈmʲitʲːɑ tɑ wʲidnɔwˈlɛnʲːɑ pɔpuˈlʲɑt͡sʲij ˈrʲidkʲisnɪx ˈwɪdʲiw] (roz-SHY-ren-nyah teh-ry-TOH-reey pry-ROHD-noh zah-poh-VEED-noh-hoh FOHN-doo yeh kry-TYCH-noh vahzh-LY-wym dlyah zbeh-reh-ZHEN-nyah oo-nee-KAHL'-noh-hoh bee-oh-reez-noh-MAHYT-tyah tah veed-nohv-LEN-nyah poh-poo-LYAH-tseey REED-kees-nykh VY-deew)",
          "translation": "Expanding the territories of the nature reserve fund is critically important for preserving unique biodiversity and restoring populations of rare species."
        },
        {
          "target": "Біосферний заповідник «Асканія-Нова» оберігає останній у Європі незайманий ділянковий масив типчаково-ковилового степу.",
          "reading": "[bʲiɔsˈfɛrnɪj zɐpɔˈwʲidnɪk ɐsˈkɑnʲijɑ ˈnɔwɐ ɔbɛrʲiˈɦɑjɛ ɔsˈtɑnnʲij u jɛwˈrɔpʲi nɛˈzɑjmɐnɪj dʲiˈlʲɑnkɔwɪj mɐˈsɪw tɪptʃɐˈkɔwɔ kɔˈwɪlɔwɔɦɔ ˈstɛpu] (bee-ohs-FEHR-nyy zah-poh-VEED-nyk ahs-KAH-nee-yah NOH-wah oh-beh-ree-HAH-yeh ohs-TAHN-neey oo yehv-ROH-pee neh-ZAHY-mah-nyy dee-LYAHN-koh-vyy mah-SYV typ-chah-KOH-woh koh-WY-loh-woh-hoh STEH-poo)",
          "translation": "The 'Askania-Nova' Biosphere Reserve protects Europe's last virgin plot massif of fescue-feather grass steppe."
        },
        {
          "target": "Державна стратегія охорони довкілля спрямована на мінімізацію шкідливого антропогенного впливу на водні та лісові ресурси України.",
          "reading": "[dɛrˈʒɑwnɐ strɐˈtɛɦʲijɑ ɔxɔˈrɔnɪ dɔwˈkʲilʲːɑ sprʲɑmɔˈwɑnɐ nɑ mʲinʲimʲizɑˈt͡sʲiju ʃkʲidˈlɪwɔɦɔ ɐntrɔpɔˈɦɛnnɔɦɔ ˈwplɪwu nɑ ˈwɔdnʲi tɑ lʲiˈsɔwʲi rɛˈsursɪ ukrɐˈjinɪ] (dehr-ZHAHV-nah strah-TEH-hee-yah oh-khoh-ROH-ny dov-KEEL-lyah spryah-moh-VAH-nah nah mee-nee-mee-ZAH-tsee-yoo shkeed-LY-woh-hoh ahn-troh-poh-HEHN-noh-hoh VPLY-woo nah VOHD-nee tah lee-SOH-vee reh-SOOR-sy oo-krah-YEE-ny)",
          "translation": "The state environmental protection strategy is aimed at minimizing harmful anthropogenic impact on water and forest resources of Ukraine."
        }
      ],
      "mnemonics": [
        "Не «окружаюча среда», а «довкілля / навколишнє середовище»! Природа — «біорізноманіття», вплив людини — «антропогенний»!"
      ],
      "culturalNotes": [
        "Заповідник «Асканія-Нова», заснований Фрідріхом Фальц-Фейном у 1898 році, є найстарішим степовим резерватом планети під егідою ЮНЕСКО."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як нормативно в українській мові позначати навколишнє середовище?",
          "options": [
            "Довкілля / навколишнє природне середовище (Environment - correct Ukrainian term)",
            "Окружаюча среда",
            "Оточуюче середовище",
            "Природний округ"
          ],
          "answerIndex": 0,
          "explanation": "Нормативними термінами в українській мові є «довкілля» або «навколишнє природне середовище»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається офіційний державний документ, що містить перелік рідкісних і таких, що перебувають під загрозою зникнення, видів рослинного і тваринного світу?",
          "options": [
            "Червона книга України (Red Book of Ukraine - endangered species list)",
            "Зелений кадастр",
            "Біологічний реєстр",
            "Екологічний паспорт"
          ],
          "answerIndex": 0,
          "explanation": "Офіційний перелік видів під загрозою зникнення — це «Червона книга України»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому принципи захисту природи сформульовано літературно та термінологічно правильно:",
          "options": [
            "Створення нових національних природних парків сприяє збереженню біорізноманіття та зниженню антропогенного навантаження на довкілля.",
            "Охорона оточуючого середовища вимагає нових парків для флори і фауни.",
            "Захист окружаючої среди знижує вред від людей по всій країні.",
            "Створення заповідників спасає червонокнижних звірів від антропогену."
          ],
          "answerIndex": 0,
          "explanation": "«Збереження біорізноманіття... антропогенного навантаження на довкілля» — бездоганний науковий екологічний синтаксис."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u28-l2": {
    "id": "uk-u28-l2",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 2,
    "title": "Зміна клімату, вуглецевий слід та політика декарбонізації",
    "level": "C1",
    "objective": "Опанувати термінологію кліматичної політики (глобальне потепління, парникові гази, вуглецевий слід, CBAM), кліматичної адаптації та декарбонізації економіки.",
    "presentation": {
      "explanation": "Кліматична криза вимагає глобальної трансформації енергетичних та виробничих моделей для досягнення кліматичної нейтральності:\n\n1. Основні поняття фізики клімату:\n   - *«Глобальне потепління та зміна клімату»*;\n   - *«Парникові гази (вуглекислий газ CO₂, метан CH₄, закис азоту N₂O)»*;\n   - *«Парниковий ефект (Greenhouse effect)»*;\n   - *«Вуглецевий слід (Carbon footprint)»* — сукупність викидів парникових газів, спричинених діяльністю людини, підприємства чи продукту;\n   - *«Кліматична нейтральність (Net-Zero emissions)»*.\n\n2. Міжнародні механізми та регулювання:\n   - *«Паризька кліматична угода»* (обмеження зростання глобальної середньої температури до 1,5 °C);\n   - *«Система торгівлі квотами на викиди (ETS)»*;\n   - *«Механізм транскордонного вуглецевого коригування (CBAM)»*;\n   - *«Декарбонізація важкої промисловості та енергетики»*.\n\n3. Наслідки та кліматична адаптація:\n   - *«Екстремальні погодні явища (аномальна спека, паводки, буревії)»*;\n   - *«Опустелювання родючих ґрунтів та дефіцит питної води»*;\n   - *«Адаптаційні стратегії міської інфраструктури»*.",
      "examples": [
        {
          "target": "Досягнення кліматичної нейтральності вимагає системної декарбонізації металургійної галузі та скорочення промислового вуглецевого сліду.",
          "reading": "[dɔsʲɑɦˈnɛnʲːɑ klʲimɐˈtɪtʃnɔji nɛwtrɐlʲˈnɔsʲtʲi wɪˈmɑɦɑjɛ sɪsˈtɛmnɔji dɛkɐrbɔnʲizɑˈt͡sʲiji mɛtɐlurˈɦʲijtʃnɔji ˈɦɑluzʲi tɑ skrɔˈtʃɛnʲːɑ prɔmɪsˈlɔwɔɦɔ wuɦlɛˈt͡sɛwɔɦɔ ˈsʲlʲidu] (doh-syahh-NEN-nyah klee-mah-TYCH-noh-yee nehv-trahl'-NOHS-tee vy-mah-HAH-yeh sys-TEHM-noh-yee deh-kahr-boh-nee-ZAH-tsee-yee meh-tah-loor-HEEY-choh-yee HAH-loo-zee tah skroh-CHEN-nyah proh-mys-LOH-woh-hoh vooh-leh-TSEH-woh-hoh SLEE-doo)",
          "translation": "Achieving climate neutrality requires systemic decarbonization of the metallurgical industry and reduction of the industrial carbon footprint."
        },
        {
          "target": "Впровадження європейського вуглецевого мита (CBAM) спонукає українських експортерів інвестувати в екологічно чисті технології виробництва.",
          "reading": "[wprɔwɐdˈʒɛnʲːɑ jɛwrɔˈpɛjsʲkɔɦɔ wuɦlɛˈt͡sɛwɔɦɔ ˈmɪtɐ t͡sɛ bɛ ɐ ɛm spɔnuˈkɑjɛ ukrɐˈjinsʲkɪx ɛkspɔrˈtɛrʲiw inwɛstɪˈwɑtɪ w ɛkɔlɔˈɦʲitʃnɔ ˈt͡ʃɪsʲtʲi tɛxnɔˈlɔɦʲiji wɪrɔbˈnɪt͡stxɐ] (vproh-vahd-ZHEN-nyah yehv-roh-PEHY-s'koh-hoh vooh-leh-TSEH-woh-hoh MY-tah tseh beh ah ehm spoh-noo-KAH-yeh oo-krah-YEEN-s'kykh eks-pohr-TEH-reew een-vehs-ty-VAH-ty v eh-koh-loh-HEECH-noh CHEES-tee tekh-noh-LOH-hee-yee vy-rohb-NYT-stvah)",
          "translation": "The implementation of the European Carbon Border Adjustment Mechanism (CBAM) encourages Ukrainian exporters to invest in environmentally clean production technologies."
        },
        {
          "target": "Аномальна посуха на півдні України спричиняє деградацію ґрунтів і вимагає термінового впровадження систем крапельного зрошення.",
          "reading": "[ɐnɔˈmɑlʲnɐ pɔˈsuxɐ nɑ ˈpʲiwnʲi ukrɐˈjinɪ sprɪtʃɪˈnʲɑjɛ dɛɦrɐˈdɑt͡sʲiju ˈgruntʲiw i wɪˈmɑɦɑjɛ tɛrˈmʲinɔwɔɦɔ wprɔwɐdˈʒɛnʲːɑ sɪsˈtɛm ˈkrɑpɛlʲnɔɦɔ zrɔˈʃɛnʲːɑ] (ah-noh-MAHL'-nah poh-SOO-khah nah PEEV-nee oo-krah-YEE-ny spry-chy-NYAH-yeh deh-hrah-DAH-tsee-yoo HROON-teew ee vy-mah-HAH-yeh tehr-MEE-noh-woh-hoh vproh-vahd-ZHEN-nyah sys-TEHM KRAH-pehl'-noh-hoh zroh-SHEN-nyah)",
          "translation": "Abnormal drought in southern Ukraine causes soil degradation and requires urgent implementation of drip irrigation systems."
        }
      ],
      "mnemonics": [
        "CO₂ та метан — «парникові гази»; викиди на одиницю продукції — «вуглецевий слід»; мета — «кліматична нейтральність»!"
      ],
      "culturalNotes": [
        "Україна однією з перших у Європі ратифікувала Паризьку кліматичну угоду та взяла зобов'язання скоротити викиди парникових газів на 65% до 2030 року."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається показник загального обсягу викидів парникових газів від діяльності особи чи підприємства?",
          "options": [
            "Вуглецевий слід (Carbon footprint - standard ecological metric)",
            "Вугільний залишок",
            "Димовий коефіцієнт",
            "Газовий відбиток"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний термін в екології та кліматології — «вуглецевий слід» (carbon footprint)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Яку мету переслідує глобальна політика «Net-Zero» (кліматична нейтральність)?",
          "options": [
            "Досягнення нульового балансу викидів парникових газів (Net-Zero emissions balance)",
            "Повна заборона промислового виробництва",
            "Відмова від споживання електроенергії",
            "Закриття всіх заводів у світі"
          ],
          "answerIndex": 0,
          "explanation": "Кліматична нейтральність означає скорочення викидів до мінімуму та поглинання залишків екосистемами або технологіями уловлювання."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому кліматичні заходи описано бездоганно:",
          "options": [
            "Зменшення вуглецевого сліду продукції та перехід на низьковуглецеві технології є необхідною умовою інтеграції до Європейського зеленого курсу.",
            "Зменшення вугільного сліду помагає від клімату по європейським законам.",
            "Парникові ефекти треба зняти через зменшення вихлопів по підприємствам.",
            "Декарбонізація означає заборону використання води у важкій промисловості."
          ],
          "answerIndex": 0,
          "explanation": "«Зменшення вуглецевого сліду... низьковуглецеві технології... Європейського зеленого курсу» — досконала наукова та юридична мова."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u28-l3": {
    "id": "uk-u28-l3",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 3,
    "title": "Відновлювана енергетика, розумні мережі та зелений перехід",
    "level": "C1",
    "objective": "Опанувати термінологію зеленої енергетики (СЕС, ВЕС, біоенергетика, зелений водень, Smart Grid), механізми розподіленої генерації та енергонезалежності.",
    "presentation": {
      "explanation": "Зелений енергетичний перехід (Green Transition) передбачає заміщення викопного палива відновлюваними джерелами та побудову децентралізованої стійкої енергосистеми:\n\n1. Джерела та об'єкти відновлюваної енергетики (ВДЕ):\n   - *«Сонячні електростанції (СЕС)»* — фотоелектричні модулі та інвертори;\n   - *«Вітрові електростанції (ВЕС)»* — вітротурбіни наземного та морського базування;\n   - *«Гідроакумулюючі електростанції (ГАЕС) та мала гідроенергетика»*;\n   - *«Біоенергетика (біогаз, біометан, пелети)»*;\n   - *«Зелений водень (Green hydrogen)»* — виробництво водню шляхом електролізу води з використанням ВДЕ.\n\n2. Мережева інфраструктура та децентралізація:\n   - *«Розподілена генерація (Distributed generation)»* — розміщення малих джерел енергії поруч зі споживачем;\n   - *«Розумні мережі (Smart Grids)»* — цифровізовані енергомережі з автоматичним балансуванням;\n   - *«Системи накопичення енергії (BESS / Energy storage systems)»* — промислові акумулятори;\n   - *«Об'єднана енергетична система (ОЕС) України та синхронізація з ENTSO-E»*.\n\n3. Енергоефективність та регуляторні стимули:\n   - *«Термомодернізація будівель, енергоаудит, клас енергоефективності»*;\n   - *«Зелений тариф (Feed-in tariff) та аукціони на розподіл квот підтримки»*.",
      "examples": [
        {
          "target": "Розвиток розподіленої генерації на основі сонячних та вітрових станцій підвищує енергетичну стійкість країни до ворожих обстрілів.",
          "reading": "[rɔzˈwɪtɔk rɔzpɔˈdʲilɛnɔji ɦɛnɛˈrɑt͡sʲiji nɑ ɔsˈnɔwʲi sɔˈnʲɑtʃnɪx tɑ wʲitrɔˈwɪx ˈstɑnt͡sʲij pʲidˈwɪʃtʃujɛ ɛnɛrɦɛˈtɪtʃnu sʲtʲijˈkʲisʲtʲ krɐˈjinɪ dɔ ˈwɔrɔʒɪx ɔbˈstrʲilʲiw] (roz-VY-tohk roz-poh-DEE-leh-noh-yee heh-neh-RAH-tsee-yee nah ohs-NOH-vee soh-NYAHCH-nykh tah vee-troh-WYKH STAHN-tseey peed-VYSH-choo-yeh eh-nehr-heh-TYCH-noo steey-KEEST' krah-YEE-ny doh VOH-roh-zhykh ohb-STREE-leew)",
          "translation": "The development of distributed generation based on solar and wind plants enhances the country's energy resilience against enemy strikes."
        },
        {
          "target": "Синхронізація енергосистеми України з європейською мережею ENTSO-E відкрила можливості для масштабного експорту чистої електроенергії.",
          "reading": "[sɪnxrɔnʲizɑˈt͡sʲijɑ ɛnɛrɦɔsɪsˈtɛmɪ ukrɐˈjinɪ z jɛwrɔˈpɛjsʲkɔju mɛˈrɛʒɛju ɛn tɛ ɛs ɔ jɛ wʲidkˈrɪlɐ mɔʒˈlɪwɔsʲtʲi dlʲɑ mɐsʃˈtɑbnɔɦɔ ˈɛkspɔrtu ˈt͡ʃɪstɔji ɛlɛktrɔɛˈnɛrɦʲiji] (syn-khroh-nee-ZAH-tsee-yah eh-nehr-hoh-sys-TEH-my oo-krah-YEE-ny z yehv-roh-PEHY-s'koh-yoo meh-REH-zheh-yoo ehn teh ehs oh yeh veed-KRY-lah mohzh-LY-wohs-tee dlyah mahs-SHTAHB-noh-hoh EHK-spohr-too CHEES-toh-yee eh-lehk-troh-eh-NEHR-hee-yee)",
          "translation": "The synchronization of Ukraine's power system with the European ENTSO-E grid opened opportunities for large-scale export of clean electricity."
        },
        {
          "target": "Встановлення промислових накопичувачів енергії дозволяє згладжувати пікові навантаження та гарантує надійність постачання споживачам.",
          "reading": "[wstɐnɔwˈlɛnʲːɑ prɔmɪsˈlɔwɪx nɐkɔpɪˈtʃuwɐtʃʲiw ɛˈnɛrɦʲiji dɔzˈwɔlʲɑjɛ zɦlɑdʒuˈwɑtɪ pʲiˈkɔwʲi nɐwɐntɐˈʒɛnʲːɑ tɑ ɦɐrɐnˈtujɛ nɐˈdʲijnʲisʲtʲ pɔstɐˈtʃɑnʲːɑ spɔʒɪwɐˈtʃɑm] (vstah-nohv-LEN-nyah proh-mys-LOH-wykh nah-koh-py-CHOO-wah-cheew eh-NEHR-hee-yee dohz-VOH-lyah-yeh zhlah-dzhoo-VAH-ty pee-KOH-vee nah-wahn-tah-ZHEN-nyah tah hah-rahn-TOO-yeh nah-DEEY-neest' pohs-tah-CHAN-nyah spoh-zhy-wah-CHAHM)",
          "translation": "Installation of industrial energy storage systems enables smoothing out peak loads and guarantees supply reliability to consumers."
        }
      ],
      "mnemonics": [
        "СЕС — сонце, ВЕС — вітер; модель — «розподілена генерація»; цифрові мережі — «Smart Grids»; накопичувачі енергії — акумулятори!"
      ],
      "culturalNotes": [
        "Українські енергетики здійснили історичну синхронізацію з енергомережею ЄС (ENTSO-E) у березні 2022 року в перші тижні повномасштабної війни."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як розшифровується абревіатура СЕС у відновлюваній енергетиці?",
          "options": [
            "Сонячна електростанція (Solar power plant - renewable energy term)",
            "Світлова електрична система",
            "Спеціальна енергостанція",
            "Сучасна енергетична споруда"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна розшифровка абревіатури СЕС — «сонячна електростанція»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається концепція розташування невеликих генеруючих установок безпосередньо біля кінцевих споживачів?",
          "options": [
            "Розподілена генерація (Distributed generation)",
            "Централізована генерація",
            "Магістральна мережа",
            "Резервний контур"
          ],
          "answerIndex": 0,
          "explanation": "Концепція наближення джерел енергії до споживачів називається «розподіленою генерацією» (distributed generation)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому розвиток відновлюваної енергетики описано абсолютно грамотно:",
          "options": [
            "Інтеграція відновлюваних джерел енергії та впровадження промислових систем накопичення підвищують гнучкість об'єднаної енергосистеми.",
            "Будівництво сонячних панелей підняло кіловати в общій електромережі.",
            "Зелені вітряки дають ток без палива прямо в розетки споживачів.",
            "Альтернативна електрика повністю замінила всі турбіни за один місяць."
          ],
          "answerIndex": 0,
          "explanation": "«Інтеграція відновлюваних джерел енергії... систем накопичення... об'єднаної енергосистеми» — еталонна фахова термінологія."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u28-l4": {
    "id": "uk-u28-l4",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 4,
    "title": "Циркулярна економіка, поводження з відходами та ресайклінг",
    "level": "C1",
    "objective": "Опанувати термінологію циклічної економіки (поводження з відходами, вторинна сировина, сортування, ресайклінг) та принципи розширеної відповідальності виробника (РВВ).",
    "presentation": {
      "explanation": "Циркулярна (циклічна) економіка базується на принципах відновлення ресурсів, мінімізації відходів та повторного використання матеріалів:\n\n1. Ієрархія управління відходами (Waste Hierarchy):\n   - *«Запобігання утворенню відходів (Prevention)»*;\n   - *«Підготовка до повторного використання (Reuse)»*;\n   - *«Вторинна переробка (Recycling / ресайклінг)»*;\n   - *«Відновлення (енергетична утилізація)»*;\n   - *«Видалення (захоронення на полігонах)»* — найменш бажаний варіант.\n\n2. Організація поводження з відходами:\n   - *«Тверді побутові відходи (ТПВ)»*;\n   - *«Роздільний збір сміття (папір, скло, пластик, метал, органіка)»*;\n   - *«Сортувальні лінії та сміттєпереробні заводи»*;\n   - *«Компостування органічних відходів»*;\n   - *«Небезпечні відходи (ртутні лампи, акумулятори, медичні відходи)»*.\n\n3. Економічні механізми циркулярності:\n   - *«Розширена відповідальність виробника (РВВ)»* — обов'язок виробника забезпечити утилізацію упаковки після використання;\n   - *«Вторинна сировина (Upcycling / вторинний пластик)»*;\n   - *«Біорозкладні полімери та екодизайн продукції»*.",
      "examples": [
        {
          "target": "Запровадження розширеної відповідальності виробника зобов'язує бізнес фінансувати збір та вторинну переробку пакувальних матеріалів.",
          "reading": "[zɐprɔwɐˈdʒɛnʲːɑ rɔzˈʃɪrɛnɔji wʲidpɔwʲiˈdɑlʲnɔsʲtʲi wɪrɔbˈnɪkɐ zɔbɔwˈjɑzujɛ ˈbʲiznɛs fʲinɐnsuˈwɑtɪ ˈzbʲir tɑ wtɔˈrɪnnu pɛrɛˈrɔbku pɐkuˈwɑlʲnɪx mɐtɛrʲiˈɑlʲiw] (zah-proh-vahd-ZHEN-nyah roz-SHY-reh-noh-yee veed-poh-vee-DAHL'-nohs-tee vy-rohb-NY-kah zoh-bov-YAH-zoo-yeh BEEZ-nehs fee-nahn-soo-VAH-ty ZBEER tah vtoh-RYN-noo peh-reh-ROHB-koo pah-koo-VAHL'-nykh mah-teh-ree-AH-leew)",
          "translation": "The introduction of extended producer responsibility obliges business to finance the collection and recycling of packaging materials."
        },
        {
          "target": "Перехід до циркулярної економіки передбачає максимальне повернення вторинної сировини у виробничий цикл без захоронення на полігонах.",
          "reading": "[pɛrɛˈxʲid dɔ t͡sɪrkulʲɑrˈnɔji ɛkɔˈnɔmʲikɪ pɛrɛdbɐˈtʃɑjɛ mɐksɪˈmɑlʲnɛ pɔwɛrˈnɛnʲːɑ wtɔˈrɪnnɔji sɪrɔˈwɪnɪ u wɪrɔbˈnɪtʃɪj ˈt͡sɪkl bɛz zɐxɔrɔˈnɛnʲːɑ nɑ pɔlʲiˈɦɔnɐx] (peh-reh-KHEED doh tsyr-koo-LYAHR-noh-yee eh-koh-NOH-mee-ky peh-rehd-bah-CHAH-yeh mahk-sy-MAHL'-neh poh-wehr-NEN-nyah vtoh-RYN-noh-yee sy-roh-WY-ny oo vy-rohb-NY-chy TSYKL bez zah-khoh-roh-NEN-nyah nah poh-lee-HOH-nahkh)",
          "translation": "The transition to a circular economy involves maximum return of secondary raw materials into the production cycle without landfill disposal."
        },
        {
          "target": "Будівництво сучасного сміттєпереробного заводу з глибоким сортуванням відходів дозволить вирішити проблему переповнених сміттєзвалищ.",
          "reading": "[buˈdʲiwnɪt͡stxɔ sut͡ʃɑsˈnɔɦɔ sʲmʲitʲːɛpɛrɛˈrɔbnɔɦɔ zɐˈwɔdu z ɦlɪˈbɔkɪm sɔrtuˈwɑnʲːɐm wʲidˈxɔdʲiw dɔzˈwɔlʲitʲ wɪˈrʲiʃɪtɪ prɔbˈlɛmu pɛrɛˈpɔwnɛnɪx sʲmʲitʲːɛzˈwɑlɪʃtʃ] (boo-DEEV-nyt-stvah soo-chahs-NOH-hoh smee-tyeh-peh-reh-ROHB-noh-hoh zah-VOH-doo z hly-BOH-kym sohr-too-VAHN-nyahm veed-KHOH-deew dohz-VOH-leet' vy-REE-shy-ty prohb-LEH-moo peh-reh-POHV-neh-nykh smee-tyez-VAH-lyshch)",
          "translation": "Construction of a modern waste recycling plant with deep waste sorting will solve the problem of overcrowded landfills."
        }
      ],
      "mnemonics": [
        "Не «мусор», а «відходи»; не «свалка», а «полігон ТПВ»; процес — «роздільний збір, сортування, ресайклінг, вторинна сировина»!"
      ],
      "culturalNotes": [
        "Новий Закон України «Про управління відходами» гармонізував національне законодавство з Рамковою директивою ЄС про відходи."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як в офіційній українській термінології називається процес використання відсортованих матеріалів для виготовлення нової продукції?",
          "options": [
            "Вторинна переробка / ресайклінг (Recycling / reprocessing of secondary resources)",
            "Утилізаційне спалювання",
            "Мусорне очищення",
            "Захоронення відходів"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний термін для повторної переробки матеріалів — «вторинна переробка» або «ресайклінг»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається економічний принцип, за яким виробник продукції несе фінансову відповідальність за її утилізацію після споживання?",
          "options": [
            "Розширена відповідальність виробника (Extended Producer Responsibility - EPR)",
            "Податок на сміття",
            "Штраф за упаковку",
            "Екологічна акцизна ставка"
          ],
          "answerIndex": 0,
          "explanation": "Цей фундаментальний принцип циклічної економіки називається «розширеною відповідальністю виробника» (РВВ)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому процеси управління відходами сформульовано з бездоганною точністю:",
          "options": [
            "Впровадження роздільного збору твердих побутових відходів суттєво збільшує частку вторинної сировини, що спрямовується на переробку.",
            "Розділення мусору допомагає звозити менше відходів на міські свалки.",
            "Сортировка битового сміття підняла ресайклінг по всій області.",
            "Викидання непотребу в різні баки зменшує кількість свалок."
          ],
          "answerIndex": 0,
          "explanation": "«Роздільного збору твердих побутових відходів... частку вторинної сировини» — бездоганний стандарт державного екологічного управління."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u28-l5": {
    "id": "uk-u28-l5",
    "subject": "ukrainian",
    "unit": 28,
    "lessonNumber": 5,
    "title": "Екологічні наслідки війни, екоцид та повоєнна «зелена відбудова»",
    "level": "C1",
    "objective": "Опанувати термінологію фіксації екологічних воєнних злочинів (екоцид, деградація ґрунтів, хімічне забруднення), гуманітарного розмінування та повоєнної відбудови за принципом Build Back Greener.",
    "presentation": {
      "explanation": "Повномасштабна війна завдала катастрофічних збитків екосистемам України, що кваліфікується як екоцид та вимагає масштабного повоєнного відновлення:\n\n1. Екологічні воєнні злочини та катастрофи:\n   - *«Екоцид»* — масове знищення рослинного або тваринного світу, отруєння атмосфери чи водних ресурсів, що призвело до екологічної катастрофи (ст. 441 КК України);\n   - *«Підрив греблі Каховської ГЕС»* — найбільша техногенна та екологічна катастрофа в Європі за останні десятиліття (затоплення біотопів, опріснення Чорного моря, втрата систем зрошення);\n   - *«Забруднення ґрунтів та підземних вод важкими металами, залишками вибухівки та нафтопродуктами»*;\n   - *«Лісові пожежі в зоні бойових дій та деградація заповідних територій»*.\n\n2. Гуманітарне розмінування та рекультивація:\n   - *«Нерозірвані боєприпаси та мінне забруднення сільськогосподарських угідь»*;\n   - *«Гуманітарне розмінування з використанням дронів та штучного інтелекту»*;\n   - *«Фітосанація та рекультивація родючого шару ґрунту»*.\n\n3. Стратегія «Зеленої відбудови» (Build Back Greener):\n   - *«Фіксація екологічних збитків за міжнародними методиками для репараційного позову»*;\n   - *«Відновлення інфраструктури за принципами кругової економіки та енергоефективності»*;\n   - *«Створення нових природоохоронних територій на місці зруйнованих об'єктів»*.",
      "examples": [
        {
          "target": "Підрив греблі Каховської ГЕС визнано актом екоциду, що призвів до незворотного руйнування унікальних заплавних екосистем пониззя Дніпра.",
          "reading": "[pʲidˈrɪw ˈhrɛblʲi kɐˈxɔwsʲkɔji ɦɛ ɛs wɪzˈnɑnɔ ˈɑktɔm ɛkɔˈt͡sɪdu, ʃtʃɔ prɪzˈwʲil dɔ nɛzwɔˈrɔtnɔɦɔ rujnuˈwɑnʲːɑ unʲiˈkɑlʲnɪx zɐpˈlɑwnɪx ɛkɔsɪsˈtɛm pɔˈnɪzʲːɑ ˈdnʲiprɐ] (peed-RYV HREH-blyah kah-KHOHV-s'koh-yee heh eh ehs vyz-NAH-noh AHK-tohm eh-koh-TSY-doo, shchoh pryz-VEEL doh neh-zwoh-ROHT-noh-hoh rooy-noo-VAHN-nyah oo-nee-KAHL'-nykh zah-PLAHV-nykh eh-koh-sys-TEHM poh-NYZ-zyah DNEE-prah)",
          "translation": "The blowing up of the Kakhovka HPP dam was recognized as an act of ecocide leading to the irreversible destruction of unique floodplain ecosystems of the Lower Dnipro."
        },
        {
          "target": "Гуманітарне розмінування українських чорноземів є першочерговим завданням для гарантування світової продовольчої безпеки.",
          "reading": "[ɦumɐnʲiˈtɑrnɛ rɔzmʲiˈnuwɑnʲːɑ ukrɐˈjinsʲkɪx tʃɔrnɔˈzɛmʲiw jɛ pɛrʃɔt͡ʃɛrɦɔˈwɪm zɐwˈdɑnʲːɐm dlʲɑ ɦɐrɐntuˈwɑnʲːɑ swʲitɔˈwɔji prɔdɔˈwɔlʲtʃɔji bɛzˈpɛkɪ] (hoo-mah-nee-TAHR-neh roz-mee-NOO-vahn-nyah oo-krah-YEEN-s'kykh chohr-noh-ZEH-meew yeh pehr-shoh-chehr-HOH-wym zahv-DAHN-nyahm dlyah hah-rahn-too-VAHN-nyah swee-toh-VOH-yee proh-doh-VOHL'-choh-yee bez-PEH-ky)",
          "translation": "Humanitarian demining of Ukrainian black soils is a primary task for guaranteeing global food security."
        },
        {
          "target": "Повоєнна відбудова України спирається на концепцію «Build Back Greener», поєднуючи енергонезалежність, кліматичну нейтральність та інновації.",
          "reading": "[pɔwɔˈjɛnnɐ wʲidbuˈdɔwɐ ukrɐˈjinɪ spɪˈrɑjɛtʲsʲɑ nɑ kɔnt͡sɛpˈt͡sʲiju bʲild bɛk ˈɦrʲinɛr, pɔjɛdˈnujutʃɪ ɛnɛrɦɔnɛzɐˈlɛʒnʲisʲtʲ, klʲimɐˈtɪtʃnu nɛwtrɐlʲˈnʲisʲtʲ tɑ innɔˈwɑt͡sʲiji] (poh-woh-YEHN-nah veed-boo-DOH-wah oo-krah-YEE-ny spy-RAH-yeht'-syah nah kohn-tseh-PTSEE-yoo beeld behk HREE-nehr, poh-yehd-NOO-yoo-chy eh-nehr-hoh-neh-zah-LEHZH-neest', klee-mah-TYCH-noo nehv-trahl'-NEEST' tah een-noh-VAH-tsee-yee)",
          "translation": "Post-war reconstruction of Ukraine relies on the 'Build Back Greener' concept, combining energy independence, climate neutrality, and innovation."
        }
      ],
      "mnemonics": [
        "Злочин проти природи — «екоцид» (ст. 441 КК України); очищення землі — «гуманітарне розмінування та рекультивація»; принцип — «Build Back Greener»!"
      ],
      "culturalNotes": [
        "Україна активно лобіює закріплення терміна «екоцид» у Римському статуті Міжнародного кримінального суду для притягнення агресора до відповідальності за знищення довкілля."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як у кримінальному праві називається масове знищення рослинного або тваринного світу та отруєння водних ресурсів під час війни?",
          "options": [
            "Екоцид (Ecocide - crime against the environment)",
            "Геоцид",
            "Біоцид",
            "Техноцид"
          ],
          "answerIndex": 0,
          "explanation": "Нормативний юридичний термін для масового навмисного знищення довкілля — «екоцид»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Який міжнародний принцип визначає повоєнне відновлення інфраструктури на основі екологічних та зелених технологій?",
          "options": [
            "Build Back Greener / Відбудувати краще та зеленіше (Post-war green recovery principle)",
            "Status Quo",
            "Fast Rebuild",
            "Cost Minimum"
          ],
          "answerIndex": 0,
          "explanation": "Міжнародний принцип сталого повоєнного відновлення відомий як «Build Back Greener» (Відбудувати краще та зеленіше)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому екологічні наслідки війни та повоєнні завдання сформульовано з бездоганною точністю:",
          "options": [
            "Фіксація збитків від екоциду, проведення гуманітарного розмінування та рекультивація ґрунтів є ключовими пріоритетами повоєнної зеленої відбудови.",
            "Війна зробила вред природі і треба почистити землю від мін по швидкій програмі.",
            "Підрив дамби наніс ущерб екології та потребує ремонту без міжнародних правил.",
            "Екоцидні наслідки лікують посадкою дерев на нерозмінованих територіях."
          ],
          "answerIndex": 0,
          "explanation": "«Фіксація збитків від екоциду... гуманітарного розмінування та рекультивація ґрунтів... повоєнної зеленої відбудови» — професійний державний та міжнародний дискурс."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u29-l1": {
    "id": "uk-u29-l1",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 1,
    "title": "Парламентаризм, законодавчий процес та регламент Верховної Ради",
    "level": "C1",
    "objective": "Опанувати парламентську термінологію (законодавча ініціатива, читання законопроєктів, регламентні процедури, вето Президента) та синтаксис законодавчих актів.",
    "presentation": {
      "explanation": "Верховна Рада України є єдиним органом законодавчої влади в Україні, що діє на засадах багатопартійності, представництва народу та колегіальності:\n\n1. Суб'єкти права законодавчої ініціативи (ст. 93 Конституції України):\n   - *«Президент України, народні депутати України, Кабінет Міністрів України»*.\n\n2. Стадії проходження законопроєкту у парламенті:\n   - *«Реєстрація проєкту закону та розгляд у профільному комітеті»*;\n   - *«Перше читання»* (обговорення концепції та прийняття за основу);\n   - *«Друге читання»* (постатейний розгляд поправок та пропозицій);\n   - *«Третє читання»* (ухвалення закону в цілому);\n   - *«Підписання Головою Верховної Ради та направлення на підпис Президентові»*;\n   - *«Президентське вето із поверненням на повторний розгляд»* (для подолання вето потрібно не менше 300 голосів — конституційна більшість);\n   - *«Офіційне оприлюднення у газеті «Голос України» та набрання чинності»*.\n\n3. Парламентські процедурні кліше:\n   - *«Ухвалити за основу / прийняти в цілому»*;\n   - *«Поіменне електронне голосування»*;\n   - *«Порядок денний пленарного засідання»*;\n   - *«Парламентський контроль та запити народних депутатів»*.",
      "examples": [
        {
          "target": "Верховна Рада України конституційною більшістю ухвалила євроінтеграційний законопроєкт у другому читанні та в цілому.",
          "reading": "[wɛrˈxɔwnɐ ˈrɑdɐ ukrɐˈjinɪ kɔnstɪtuˈt͡sʲijnɔju bʲilʲˈʃʲisʲtʲu uxwɐˈlɪlɐ jɛwrɔintɛɦrɐt͡sʲijˈnɪj zɐkɔnɔprɔˈjɛkt u ˈdruɦɔmu tʃɪˈtɑnnʲi tɑ w ˈt͡sʲilɔmu] (wehr-KHOHV-nah RAH-dah oo-krah-YEE-ny kohn-sty-too-TSEEY-noh-yoo beel'-SHEES-tyoo ookh-vah-LY-lah yehv-roh-een-teh-hrah-tseey-NYY zah-koh-noh-proh-YEHKT oo DROO-hoh-moo chy-TAHN-nee tah v TSEE-loh-moo)",
          "translation": "The Verkhovna Rada of Ukraine passed the European integration draft law by a constitutional majority in the second reading and as a whole."
        },
        {
          "target": "Профільний парламентський комітет рекомендував включити законопроєкт до порядку денного сесії та скоротити строки подання поправок.",
          "reading": "[prɔˈfʲilʲnɪj pɐrlɐˈmɛntsʲkɪj kɔmʲiˈtɛt rɛkɔmɛnduˈwɑw wklʲuˈtʃɪtɪ zɐkɔnɔprɔˈjɛkt dɔ pɔˈrʲɑdku ˈdɛnnɔɦɔ ˈsɛsʲiji tɑ skrɔˈtɪtɪ ˈstrɔkɪ pɔˈdɑnʲːɑ pɔpˈrɑwɔk] (proh-FEEL'-nyy pahr-lah-MEHNTS'-kyy koh-mee-TEHT reh-koh-mehn-doo-VAHV vklyoo-CHY-ty zah-koh-noh-proh-YEHKT doh poh-RYAHD-koo DEHN-noh-hoh SEH-see-yee tah skroh-TY-ty STROH-ky poh-DAHN-nyah pohp-RAH-wohk)",
          "translation": "The specialized parliamentary committee recommended including the bill on the session agenda and shortening the deadline for submitting amendments."
        },
        {
          "target": "Право законодавчої ініціативи належить виключно Президентові, народним депутатам та Кабінету Міністрів України.",
          "reading": "[ˈprɑwɔ zɐkɔnɔdɑwtʃɔji inʲit͡sʲiɐˈtɪwɪ nɐlɛˈʒɪtʲ wɪkˈlʲutʃnɔ prɛzɪˈdɛntɔwʲi, nɐˈrɔdnɪm dɛpuˈtɑtɐm tɑ kɐbʲiˈnɛtu mʲiˈnʲistrʲiw ukrɐˈjinɪ] (PRAH-woh zah-koh-noh-dahv-CHOH-yee ee-nee-tsee-ah-TY-wy nah-leh-ZHYT' vy-KLYOOCH-noh preh-zy-DEHN-toh-wee, nah-ROHD-nym deh-poo-TAH-tahm tah kah-bee-NEH-too mee-NEEST-reew oo-krah-YEE-ny)",
          "translation": "The right of legislative initiative belongs exclusively to the President, People's Deputies, and the Cabinet of Ministers of Ukraine."
        }
      ],
      "mnemonics": [
        "Читання: 1-ше — за основу, 2-ге — поправки, 3-тє / в цілому — закон; вето долають 300 голосами!"
      ],
      "culturalNotes": [
        "Традиція українського парламентаризму веде початок від козацьких генеральних рад Запорозької Січі та Української Центральної Ради 1917–1918 років."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається стадія парламентського розгляду, на якій законопроєкт остаточно ухвалюється як закон?",
          "options": [
            "Прийняття в цілому / третє читання (Final passage as a whole - standard legislative stage)",
            "Прийняття за основу",
            "Комітетське слухання",
            "Реєстрація проєкту"
          ],
          "answerIndex": 0,
          "explanation": "Остаточне ухвалення закону відбувається шляхом голосування «в цілому» (після проходження читань)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Скільки голосів народних депутатів (конституційна більшість) необхідно для подолання вето Президента України?",
          "options": [
            "Не менше 300 голосів (At least 300 votes - two-thirds constitutional majority)",
            "226 голосів",
            "150 голосів",
            "350 голосів"
          ],
          "answerIndex": 0,
          "explanation": "Для подолання президентського вето згідно зі статтею 94 Конституції України необхідно щонайменше 300 голосів (дві третини від конституційного складу)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому норми законодавчого процесу описано бездоганно:",
          "options": [
            "Після врахування поправок профільний комітет рекомендував парламенту ухвалити законопроєкт у другому читанні та в цілому.",
            "Комітет рішив прийняти закон за основу і зразу відправити Президенту.",
            "Депутати проголосували бумагу по поправкам без регламентних правил.",
            "Парламент прийняв законопроєкт по першому читанню як готовий закон."
          ],
          "answerIndex": 0,
          "explanation": "«Врахування поправок... ухвалити законопроєкт у другому читанні та в цілому» — еталонна парламентська мова."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u29-l2": {
    "id": "uk-u29-l2",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 2,
    "title": "Виконавча влада, урядові акти та реформа державної служби",
    "level": "C1",
    "objective": "Опанувати термінологію системи органів виконавчої влади (КМУ, міністерства, ЦОВВ), нормотворчості (постанови, розпорядження), державної служби та антикорупційного моніторингу.",
    "presentation": {
      "explanation": "Виконавча влада в Україні організована за принципом функціональної підпорядкованості та колегіальності на чолі з Кабінетом Міністрів України:\n\n1. Система органів виконавчої влади:\n   - *«Кабінет Міністрів України (КМУ)»* — вищий орган у системі органів виконавчої влади;\n   - *«Міністерства та центральні органи виконавчої влади (ЦОВВ: служби, агентства, інспекції)»*;\n   - *«Місцеві державні адміністрації (обласні та районні — ОДА/РДА, під час війни — ОВА/РВА)»*.\n\n2. Акти уряду та правові форми рішень:\n   - *«Постанова КМУ»* — нормативно-правовий акт вищої юридичної сили уряду (має загальний характер);\n   - *«Розпорядження КМУ»* — акт індивідуального або оперативного характеру;\n   - *«Накази міністерств»* (підлягають державній реєстрації в Міністерстві юстиції України).\n\n3. Державна служба та доброчесність:\n   - *«Категорії посад державної служби («А» — вищий корпус, «Б» — керівники підрозділів, «В» — спеціалісти)»*;\n   - *«Відкритий конкурсний відбір, присяга державного службовця»*;\n   - *«Електронне декларування доходів та моніторинг способу життя (НАЗК)»*;\n   - *«Антикорупційна інфраструктура: НАБУ, САП, ВАКС»*.",
      "examples": [
        {
          "target": "Кабінет Міністрів України ухвалив постанову про запровадження цифрових сервісів для оптимізації роботи державної служби.",
          "reading": "[kɐbʲiˈnɛt mʲiˈnʲistrʲiw ukrɐˈjinɪ uxwɐˈlɪw pɔstɐˈnɔwu prɔ zɐprɔwɐˈdʒɛnʲːɑ t͡sɪfrɔˈwɪx sɛrˈwʲisʲiw dlʲɑ ɔptɪmʲizɑˈt͡sʲiji rɔˈbɔtɪ dɛrˈʒɑwnɔji ˈsluʒbɪ] (kah-bee-NEHT mee-NEEST-reew oo-krah-YEE-ny ookh-vah-LYV pohs-tah-NOH-woo proh zah-proh-vahd-ZHEN-nyah tsyf-roh-WYKH sehr-VEE-seew dlyah ohp-ty-mee-ZAH-tsee-yee roh-BOH-ty dehr-ZHAHV-noh-yee SLOOZH-by)",
          "translation": "The Cabinet of Ministers of Ukraine adopted a resolution on the implementation of digital services to optimize the work of the civil service."
        },
        {
          "target": "Національне агентство з питань запобігання корупції проводить повну перевірку електронних декларацій високопосадовців.",
          "reading": "[nɐt͡sʲiɔˈnɑlʲnɛ ɐˈɦɛntstxɔ z pɪˈtɑnʲ zɐpɔbʲiˈɦɑnʲːɑ kɔˈrupt͡sʲiji prɔˈwɔdɪtʲ ˈpɔwnu pɛrɛˈwʲirku ɛlɛktˈrɔnnɪx dɛklɐˈrɑt͡sʲij wɪsɔkɔpɔsɐˈdɔwt͡sʲiw] (nah-tsee-oh-NAHL'-neh ah-HEHNT-stvah z py-TAHN' zah-poh-bee-HAHN-nyah koh-ROOP-tsee-yee proh-VOH-deet' POHV-noo peh-reh-VEER-koo eh-lehk-TROHN-nykh deh-klah-RAH-tseey vy-soh-koh-poh-sah-DOHV-tseew)",
          "translation": "The National Agency on Corruption Prevention conducts a comprehensive audit of electronic asset declarations of senior officials."
        },
        {
          "target": "Конкурсний відбір на посади категорії «А» здійснюється Комісією з питань вищого корпусу державної служби за принципами меритократії.",
          "reading": "[kɔnˈkursnɪj wʲidˈbʲir nɑ pɔˈsɑdɪ kɐtɛˈɦɔrʲiji ɑ zdʲijsʲˈnʲujɛtʲsʲɑ kɔˈmʲisʲijɛju z pɪˈtɑnʲ ˈwɪʃtʃɔɦɔ ˈkɔrpusu dɛrˈʒɑwnɔji ˈsluʒbɪ zɑ ˈprɪnt͡sɪpɐmɪ mɛrɪtɔkˈrɑtʲiji] (kohn-KOORS-nyy veed-BEER nah poh-SAH-dy kah-teh-HOH-ree-yee AH zdeey-SNYOO-yeht'-syah koh-MEE-see-yeh-yoo z py-TAHN' VYSH-choh-hoh KOHR-poo-soo dehr-ZHAHV-noh-yee SLOOZH-by zah PRYN-tsy-pah-my meh-ry-tohk-RAH-tee-yee)",
          "translation": "Competitive selection for Category 'A' positions is conducted by the Senior Civil Service Commission based on meritocracy principles."
        }
      ],
      "mnemonics": [
        "Уряд видає «постанови» (нормативні) та «розпорядження» (оперативні); держслужба — категорії «А», «Б», «В»; декларації перевіряє НАЗК!"
      ],
      "culturalNotes": [
        "Реформа державної служби в Україні базується на стандартах SIGMA/OECD з орієнтацією на цифровізацію та людиноцентричність публічних послуг."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Який нормативно-правовий акт загального характеру ухвалює Кабінет Міністрів України?",
          "options": [
            "Постанова (Resolution - standard regulatory act of the Cabinet of Ministers)",
            "Указ",
            "Закон",
            "Декрет"
          ],
          "answerIndex": 0,
          "explanation": "Нормативні акти Кабінету Міністрів України ухвалюються у формі «постанов» (розпорядження мають індивідуальний характер)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "До якої категорії посад державної служби в Україні належать державні секретарі міністерств та керівники ЦОВВ?",
          "options": [
            "Категорія «А» (вищий корпус державної служби) (Category A - senior civil service)",
            "Категорія «Б»",
            "Категорія «В»",
            "Категорія «Г»"
          ],
          "answerIndex": 0,
          "explanation": "Вищі керівні посади державної служби в Україні належать до категорії «А»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому норми державного управління та антикорупційного контролю описано грамотно:",
          "options": [
            "Уряд затвердив розпорядження про призначення державного секретаря за результатами відкритого конкурсу та успішного проходження спецперевірки.",
            "КМУ видав указ про прийом на роботу начальника міністерства без екзаменів.",
            "Кабінет Міністрів постановив розпорядитися призначенням чиновника по знайомству.",
            "Міністр підписав закон про зміну держслужбовців у своєму апараті."
          ],
          "answerIndex": 0,
          "explanation": "«Затвердив розпорядження про призначення... за результатами відкритого конкурсу та успішного проходження спецперевірки» — ідеальна службова мова."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u29-l3": {
    "id": "uk-u29-l3",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 3,
    "title": "Децентралізація, місцеве самоврядування та територіальні громади",
    "level": "C1",
    "objective": "Опанувати термінологію реформи децентралізації (територіальні громади, старостинські округи, фіскальна автономія, міжбюджетні трансферти) та місцевого самоврядування.",
    "presentation": {
      "explanation": "Реформа децентралізації влади в Україні передала фінансові ресурси та повноваження на базовий рівень — до спроможних територіальних громад:\n\n1. Адміністративно-територіальний устрій та органи:\n   - *«Територіальна громада (міська, селищна, сільська)»* — первинний суб'єкт місцевого самоврядування;\n   - *«Сільський, селищний, міський голова»*;\n   - *«Місцева рада (депутатський корпус) та її виконавчий комітет (виконком)»*;\n   - *«Староста та старостинський округ»* — представник інтересів жителів сіл у громаді;\n   - *«Обласні та районні ради»* — представляють спільні інтереси територіальних громад.\n\n2. Фінансова децентралізація та муніципальне майно:\n   - *«Власні доходи місцевих бюджетів (частка ПДФО, єдиний податок, плата за землю)»*;\n   - *«Міжбюджетні трансферти (базова / реверсна дотація, освітня та медична субвенції)»*;\n   - *«Комунальна власність та управління муніципальними підприємствами»*;\n   - *«Просторово-планувальна документація та генеральний план забудови»*.\n\n3. Європейський принцип субсидіарності:\n   - Усі публічні послуги надаються на максимально наближеному до громадянина рівні (ЦНАП — Центр надання адміністративних послуг).",
      "examples": [
        {
          "target": "Реформа децентралізації забезпечила фінансову самодостатність територіальних громад завдяки закріпленню частини загальнодержавних податків за місцевими бюджетами.",
          "reading": "[rɛˈfɔrmɐ dɛt͡sɛntrɐlʲizɑˈt͡sʲiji zɐbɛzˈpɛtʃɪlɐ fʲinɐnˈsɔwu sɐmɔdɔsˈtɑtnʲisʲtʲ tɛrɪtɔrʲiˈɑlʲnɪx ɦrɔˈmɑd zɐwˈdʲɑkɪ zɐkrʲipˈlɛnʲːu ˈt͡ʃɑstkɪ zɐɦɑlʲnɔdɛrˈʒɑwnɪx pɔˈdɑtkʲiw zɑ mʲisʲt͡sɛˈwɪmɪ bʲudˈʒɛtɐmɪ] (reh-FOHR-mah deh-tsehn-trah-lee-ZAH-tsee-yee zah-bez-PEH-chy-lah fee-nahn-SOH-woo sah-moh-dohs-TAHT-neest' teh-ry-toh-ree-AHL'-nykh hroh-MAHD zahv-DYAH-ky zah-kreep-LEN-nyoo CHAHS-tky zah-hahl'-noh-dehr-ZHAHV-nykh poh-DAHT-keew zah mees-tseh-WY-my byood-ZHEH-tah-my)",
          "translation": "The decentralization reform ensured the financial self-sufficiency of territorial hromadas by allocating a share of national taxes to local budgets."
        },
        {
          "target": "Центри надання адміністративних послуг (ЦНАП) стали взірцем прозорого та безбар'єрного обслуговування мешканців громади.",
          "reading": "[ˈt͡sɛntrɪ nɐˈdɑnʲːɑ ɐdmʲinʲistrɐˈtɪwnɪx pɔsˈluɦ t͡sɛ n ɑ pɛ ˈstɑlɪ ˈwzʲirtsɛm prɔˈzɔrɔɦɔ tɑ bɛzbɐrˈjɛrnɔɦɔ ɔbsluˈɦɔwuwɑnʲːɑ ˈmɛʃkɐnt͡sʲiw ɦrɔˈmɑdɪ] (TSEHN-try nah-DAHN-nyah ahd-mee-nees-trah-TYV-nykh pohs-LOOH tseh ehn ah peh STAH-ly VZEER-tsehm proh-ZOH-roh-hoh tah bez-bahr-YEHR-noh-hoh ohb-sloo-HOH-woo-vahn-nyah MEHSH-kahn-tseew hroh-MAH-dy)",
          "translation": "Administrative Service Centers (TsNAP) have become a model of transparent and barrier-free service for community residents."
        },
        {
          "target": "Староста старостинського округу здійснює щоденний прийом громадян та представляє інтереси жителів у виконавчому комітеті ради.",
          "reading": "[stɐˈrɔstɐ stɐrɔsˈtɪnsʲkɔɦɔ ˈɔkruɦu zdʲijsʲˈnʲujɛ ʃtʃɔˈdɛnnɪj prɪˈjɔm ɦrɔmɐˈdʲɑn tɑ prɛdstɐwˈlʲɑjɛ intɛˈrɛsɪ ʒɪˈtɛlʲiw u wɪkɔˈnɑwtʃɔmu kɔmʲiˈtɛtʲi ˈrɑdɪ] (stah-ROHS-tah stah-rohs-TYN-s'koh-hoh OHK-roo-hoo zdeey-SNYOO-yeh shchoh-DEHN-nyy pry-YOHM hroh-mah-DYAHN tah prehd-stahv-LYAH-yeh een-teh-REH-sy zhy-TEH-leew oo vy-koh-NAHV-choh-moo koh-mee-TEH-tyee RAH-dy)",
          "translation": "The starosta of the starosta district conducts daily public receptions and represents the interests of residents in the executive committee of the council."
        }
      ],
      "mnemonics": [
        "Громада — «територіальна громада»; центр послуг — «ЦНАП»; представник села — «староста»; принцип наближення послуг — «субсидіарність»!"
      ],
      "culturalNotes": [
        "Децентралізація визнана міжнародними партнерами однією з найуспішніших реформ України, що довела надзвичайну стійкість громад під час війни."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як називається первинний базовий суб'єкт місцевого самоврядування в Україні після реформи децентралізації?",
          "options": [
            "Територіальна громада (Territorial hromada - basic local self-government unit)",
            "Сільрада",
            "Районна управа",
            "Муніципальний округ"
          ],
          "answerIndex": 0,
          "explanation": "Базовою одиницею місцевого самоврядування в Україні є «територіальна громада»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як розшифровується абревіатура ЦНАП?",
          "options": [
            "Центр надання адміністративних послуг (Administrative Service Center)",
            "Центральний наглядовий адміністративний пункт",
            "Цифровий національний архів послуг",
            "Центр народної адвокації прав"
          ],
          "answerIndex": 0,
          "explanation": "Нормативна назва — «Центр надання адміністративних послуг» (ЦНАП)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому терміни місцевого самоврядування вжито абсолютно грамотно:",
          "options": [
            "Міська рада затвердила бюджет територіальної громади на наступний рік, виділивши субвенцію на термомодернізацію закладів освіти.",
            "Сільрада прийняла план по грошам з розсилкою субвенцій по селам.",
            "Громада скинулася в спільний котел для ремонту муніципалітету.",
            "Районний совет розподілив трансферти по міським урядам."
          ],
          "answerIndex": 0,
          "explanation": "«Міська рада затвердила бюджет територіальної громади... виділивши субвенцію...» — точна фінансово-муніципальна термінологія."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u29-l4": {
    "id": "uk-u29-l4",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 4,
    "title": "Виборче право, виборчі системи та інструменти електронної демократії",
    "level": "C1",
    "objective": "Опанувати виборчу термінологію (Виборчий кодекс, відкриті списки, ЦВК, виборчий ценз) та сучасні механізми прямого народовладдя й електронної демократії (е-петиції, «Дія»).",
    "presentation": {
      "explanation": "Виборче право та електронне народовладдя забезпечують безпосередню реалізацію суверенітету українського народу:\n\n1. Принципи виборчого права в Україні:\n   - *«Загальне, рівне, пряме виборче право при таємному голосуванні»*;\n   - *«Активне виборче право»* (право голосувати з 18 років);\n   - *«Пасивне виборче право»* (право бути обраним: Президент — від 35 років, народний депутат — від 21 року, мер/депутат ради — від 18 років);\n   - *«Виборчий ценз (віковий, осілості, громадянства)»*.\n\n2. Виборча система за Виборчим кодексом України:\n   - *«Пропорційна виборча система з відкритими регіональними списками кандидатів»*;\n   - *«Виборчий бар'єр (прохідний бар'єр 5% для партій)»*;\n   - *«Центральна виборча комісія (ЦВК) — постійно діючий державний орган»*;\n   - *«Окружні та дільничні виборчі комісії (ОВК/ДВК)»*;\n   - *«Протокол підрахунку голосів виборців на виборчій дільниці»*.\n\n3. Інструменти електронної демократії (E-Democracy):\n   - *«Електронні петиції до Президента, Верховної Ради та органів місцевого самоврядування»*;\n   - *«Громадський бюджет (бюджет участі)»* — пряме голосування жителів за проєкти розвитку;\n   - *«Опитування в застосунку «Дія»»* як інструмент консультацій з громадськістю.",
      "examples": [
        {
          "target": "Виборчий кодекс України закріпив пропорційну систему з відкритими списками, що дозволяє виборцям впливати на персоніфікований рейтинг кандидатів від партії.",
          "reading": "[wɪbɔrtʃɪj ˈkɔdɛks ukrɐˈjinɪ zɐkrʲiˈpʲiw prɔpɔrˈt͡sʲijnu sɪsˈtɛmu z wʲidkˈrɪtɪmɪ ˈspɪskɐmɪ, ʃtʃɔ dɔzˈwɔlʲɑjɛ wɪbɔrˈt͡sʲɑm wplɪˈwɑtɪ nɑ pɛrsɔnʲifʲikɔˈwɑnɪj ˈrɛjtɪnɦ kɐndɪˈdɑtʲiw wʲid ˈpɑrtʲiji] (vy-bohr-CHYY KOH-dehks oo-krah-YEE-ny zah-kree-PEEV proh-pohr-TSEEY-noo sys-TEH-moo z veed-KRY-ty-my SPYS-kah-my, shchoh dohz-VOH-lyah-yeh vy-bohr-TSYAHM vply-VAH-ty nah pehr-soh-nee-fee-koh-VAH-nyy REHY-tynh kahn-dy-DAH-teew veed PAHR-tee-yee)",
          "translation": "The Electoral Code of Ukraine established a proportional system with open lists, allowing voters to influence the personalized ranking of party candidates."
        },
        {
          "target": "Електронна петиція набрала необхідні двадцять п'ять тисяч голосів громадян і передана на обов'язковий розгляд Президентові.",
          "reading": "[ɛlɛktˈrɔnnɐ pɛˈtɪt͡sʲijɑ nɐbˈrɑlɐ nɛɔbˈxʲidnʲi ˈdwɑd͡zʲɑtʲ pʲɑtʲ ˈtɪsʲɑtʃ ɦɔlɔˈsʲiw ɦrɔmɐˈdʲɑn i pɛrɛˈdɑnɐ nɑ ɔbɔwˈjɑzkɔwɪj ˈrɔzɦlʲɑd prɛzɪˈdɛntɔwʲi] (eh-lehk-TROHN-nah peh-TY-tsee-yah nahb-RAH-lah neh-ohb-KHEED-nee DWAH-dzyaht' pyat' TY-syach hoh-loh-SEEW hroh-mah-DYAHN ee peh-reh-DAH-nah nah oh-bov-YAHZ-koh-vyy ROZH-lyahd preh-zy-DEHN-toh-wee)",
          "translation": "The electronic petition gathered the required twenty-five thousand citizen votes and was submitted for mandatory consideration to the President."
        },
        {
          "target": "Офіційні результати виборів встановлюються Центральною виборчою комісією на підставі оригіналів протоколів окружних комісій.",
          "reading": "[ɔfʲit͡sʲijˈnʲi rɛzulʲˈtɑtɪ ˈwɪbɔrʲiw wstɐnɔwˈlʲɑjutʲsʲɑ t͡sɛntˈrɑlʲnɔju wɪbɔrˈtʃɔju kɔˈmʲisʲijɛju nɑ pʲidˈstɑwʲi ɔrɪɦʲiˈnɑlʲiw prɔtɔˈkɔlʲiw ɔkruʒˈnɪx kɔˈmʲisʲij] (oh-fee-tseey-NEE reh-zool'-TAH-ty VY-boh-reew vstah-nohv-LYAH-yoot'-syah tsehn-TRAHL'-noh-yoo vy-bohr-CHOH-yoo koh-MEE-see-yeh-yoo nah peed-STAH-wee oh-ry-hee-NAH-leew proh-toh-KOH-leew oh-kroozh-NYKH koh-MEE-seey)",
          "translation": "Official election results are established by the Central Election Commission on the basis of original protocols of district commissions."
        }
      ],
      "mnemonics": [
        "Списки — «відкриті регіональні списки»; орган — «ЦВК»; інструмент е-демократії — «електронні петиції (25 000 підписів)»!"
      ],
      "culturalNotes": [
        "Україна є світовим лідером цифрового народовладдя, де державний застосунок «Дія» використовується десятками мільйонів громадян для голосування в опитуваннях."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Скільки підписів громадян має зібрати електронна петиція до Президента України для обов'язкового розгляду?",
          "options": [
            "Не менше 25 000 підписів (At least 25,000 signatures within 3 months)",
            "10 000 підписів",
            "50 000 підписів",
            "100 000 підписів"
          ],
          "answerIndex": 0,
          "explanation": "Згідно із Законом України «Про звернення громадян» поріг для петиції Президентові становить не менше 25 000 підписів."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називається право громадянина особисто обирати представників до органів влади на виборах?",
          "options": [
            "Активне виборче право (Active suffrage / right to vote)",
            "Пасивне виборче право",
            "Делеговане право",
            "Електоральний імунітет"
          ],
          "answerIndex": 0,
          "explanation": "Право голосувати називається «активним виборчим правом» (право бути обраним — «пасивним»)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому виборчі процедури та е-демократію описано бездоганно:",
          "options": [
            "Впровадження відкритих виборчих списків та електронних петицій розширює можливості громадянського контролю над політичними процесами.",
            "Вибори по закритим спискам і петиції на бумазі найкраще підходять для народу.",
            "ЦВК підрахувала голоси без протоколів за допомогою приватних сайтів.",
            "Активне право голосу дозволяє балотуватися в мери з десяти років."
          ],
          "answerIndex": 0,
          "explanation": "«Впровадження відкритих виборчих списків та електронних петицій...» — бездоганна політологічна та правова термінологія."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "uk-u29-l5": {
    "id": "uk-u29-l5",
    "subject": "ukrainian",
    "unit": 29,
    "lessonNumber": 5,
    "title": "Публічна дипломатія, вступ до ЄС та євроатлантична інтеграція",
    "level": "C1",
    "objective": "Опанувати термінологію вступу України до ЄС (переговорні кластери, Acquis communautaire, скринінг), інтеграції в НАТО (стандарти STANAG) та публічної дипломатії.",
    "presentation": {
      "explanation": "Європейська та євроатлантична інтеграція закріплені у преамбулі та статтях 85, 102, 116 Конституції України як стратегічний цивілізаційний курс держави:\n\n1. Процедура вступу до Європейського Союзу (EU Accession Process):\n   - *«Переговорні рамки та офіційне відкриття переговорів про вступ»*;\n   - *«Скринінг національного законодавства на відповідність праву ЄС (Acquis communautaire)»*;\n   - *«Шість переговорних кластерів (Fundamentals, Internal Market, Green Agenda тощо)»*;\n   - *«Кластер «Основи (Fundamentals)»* — верховенство права, судова реформа, антикорупція (відкривається першим і закривається останнім);\n   - *«Договір про приєднання до ЄС та ратифікація всіма державами-членами»*.\n\n2. Євроатлантична інтеграція та стандарти НАТО:\n   - *«Взаємосумісність сил оборони зі збройними силами Альянсу»*;\n   - *«Впровадження стандартів НАТО (угоди зі стандартизації STANAG)»*;\n   - *«Цивільний демократичний контроль над сектором безпеки і оборони»*.\n\n3. Публічна та цифрова дипломатія:\n   - *«Просування національних інтересів, культурна дипломатія (Український інститут)»*;\n   - *«Стратегічні комунікації та протидія дезінформаційним наративам»*.",
      "examples": [
        {
          "target": "Офіційне відкриття передвступних переговорів з Європейським Союзом знаменує початок гармонізації українського законодавства з правом ЄС.",
          "reading": "[ɔfʲit͡sʲijˈnɛ wʲidkˈrɪtʲːɑ pɛrɛdwstupˈnɪx pɛrɛɦɔˈwɔrʲiw z jɛwrɔˈpɛjsʲkɪm sɔˈjuzɔm znɐmɛnuˈjɛ pɔˈtʃɑtɔk ɦɐrmɔnʲizɑˈt͡sʲiji ukrɐˈjinsʲkɔɦɔ zɐkɔnɔˈdɑwstxɐ z ˈprɑwɔm jɛ ɛs] (oh-fee-tseey-NEH veed-KRYT-tyah peh-rehd-wstoop-NYKH peh-reh-hoh-VOH-reew z yehv-roh-PEHY-s'kym soh-YOO-zohm znah-meh-NOO-yeh poh-CHAH-tohk hahr-moh-nee-ZAH-tsee-yee oo-krah-YEEN-s'koh-hoh zah-koh-noh-DAHV-stvah z PRAH-wohm yeh ehs)",
          "translation": "The official opening of accession negotiations with the European Union marks the beginning of the harmonization of Ukrainian legislation with EU law."
        },
        {
          "target": "Успішне проходження офіційного скринінгу за кластером «Основи» є головною передумовою динамічного поступу до членства в Євросоюзі.",
          "reading": "[usʲˈpʲiʃnɛ prɔxɔdˈʒɛnʲːɑ ɔfʲit͡sʲijˈnɔɦɔ skˈrɪnʲinɦu zɑ ˈklɑstɛrɔm ˈɔsnɔwɪ jɛ ˈɦɔlɔwnɔju pɛrɛduˈmɔwɔju dɪnɐˈmʲitʃnɔɦɔ ˈpɔstupu dɔ ˈt͡ʃlɛnstxɐ w jɛwrɔsɔˈjuzʲi] (oos-PEESH-neh proh-khohd-ZHEN-nyah oh-fee-tseey-NOH-hoh SKREE-neen-hoo zah KLAH-steh-rohm OHS-noh-wy yeh HOH-lohv-noh-yoo peh-rehd-oo-MOH-woh-yoo dy-nah-MEECH-noh-hoh POHS-too-poo doh CHLEHN-stvah v yehv-roh-soh-YOO-zee)",
          "translation": "Successful completion of the official screening on the 'Fundamentals' cluster is the main prerequisite for dynamic progress towards EU membership."
        },
        {
          "target": "Впровадження військових стандартів STANAG забезпечує повну операційну сумісність Збройних Сил України з арміями держав-членів НАТО.",
          "reading": "[wprɔwɐdˈʒɛnʲːɑ wʲijʲsʲkɔˈwɪx stɐnˈdɑrtʲiw stɐˈnɑɦ zɐbɛzˈpɛtʃujɛ ˈpɔwnu ɔpɛrɐt͡sʲijˈnu suˈmʲisnʲisʲtʲ ˈzbrɔjnɪx sɪl ukrɐˈjinɪ z ˈɑrmʲijɐmɪ dɛrˈʒɑw ˈt͡ʃlɛnʲiw ˈnɑtɔ] (vproh-vahd-ZHEN-nyah veey-s'koh-WYKH stahn-DAHR-teew stah-NAHH zah-bez-PEH-choo-yeh POHV-noo oh-peh-rah-tseey-NOO soo-MEES-neest' ZBROHY-nykh SYL oo-krah-YEE-ny z AHR-mee-yah-my dehr-ZHAHV CHLEH-neew NAH-toh)",
          "translation": "The implementation of STANAG military standards ensures full operational interoperability of the Armed Forces of Ukraine with the armies of NATO member states."
        }
      ],
      "mnemonics": [
        "ЄС: «Acquis communautaire» (право ЄС), «скринінг законодавства», кластер «Основи»; НАТО: «взаємосумісність» та стандарти «STANAG»!"
      ],
      "culturalNotes": [
        "Курс на повноправне набуття членства України в Європейському Союзі та Організації Північноатлантичного договору незворотно закріплений у Конституції України."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Як у праві Європейського Союзу називається сукупність усього законодавства та судової практики ЄС, яку країна-кандидат зобов'язана імплементувати?",
          "options": [
            "Acquis communautaire / право ЄС (Total body of EU law)",
            "Кодекс Європи",
            "Брюссельський регламент",
            "Єдиний європейський кодекс"
          ],
          "answerIndex": 0,
          "explanation": "Сукупність усього зводу права ЄС офіційно називається «Acquis communautaire» (або право ЄС)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Як називаються стандарти НАТО для забезпечення оперативної та технічної взаємосумісності між арміями союзників?",
          "options": [
            "STANAG (Standardization Agreements of NATO)",
            "ISO 9001",
            "MIL-SPEC",
            "DEF-STAN"
          ],
          "answerIndex": 0,
          "explanation": "Угоди НАТО зі стандартизації мають назву «STANAG» (Standardization Agreement)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Оберіть речення, в якому процеси європейської та євроатлантичної інтеграції описано з абсолютною науковою точністю:",
          "options": [
            "Адаптація національного законодавства до Acquis communautaire та впровадження стандартів STANAG наближають повноправне членство України в ЄС і НАТО.",
            "Україна вступила в ЄС за один день без скринінгу і переговорів.",
            "Стандарти НАТО вимагають перекладу всіх законів на англійську мову без реформ.",
            "Кластери євроінтеграції закриваються автоматично після підписання заяви."
          ],
          "answerIndex": 0,
          "explanation": "«Адаптація національного законодавства до Acquis communautaire та впровадження стандартів STANAG...» — досконалий міжнародно-правовий рівень C1."
        }
      ],
      "passThreshold": 0.8
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
