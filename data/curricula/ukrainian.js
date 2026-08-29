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
        "objective": "Comprehensive mastery of Абетка та щоденні вітання (Alphabet & Basic Greetings).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Частина 1) та практичне застосування Абетка та щоденні вітання (Alphabet & Basic Greetings). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (1.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (1.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (1.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Абетка та щоденні вітання (Alphabet & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Абетка та щоденні вітання (Alphabet & Basic Greetings) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (1.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (1.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (1.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (1.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (1.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (1.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Абетка та щоденні вітання (Alphabet & Basic Greetings) » (Контрольне завдання 1-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (1.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (1.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (1.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («добрий_день»):",
                    "acceptedAnswers": [
                        "добрий_день"
                    ],
                    "explanation": "The target keyword was: 【добрий_день】"
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
        "objective": "Comprehensive mastery of Абетка та щоденні вітання (Alphabet & Basic Greetings).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Частина 2) та практичне застосування Абетка та щоденні вітання (Alphabet & Basic Greetings). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (1.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (1.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (1.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Абетка та щоденні вітання (Alphabet & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Абетка та щоденні вітання (Alphabet & Basic Greetings) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (1.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (1.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (1.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (1.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (1.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (1.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Абетка та щоденні вітання (Alphabet & Basic Greetings) » (Контрольне завдання 1-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (1.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (1.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (1.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («дякую»):",
                    "acceptedAnswers": [
                        "дякую"
                    ],
                    "explanation": "The target keyword was: 【дякую】"
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
        "objective": "Comprehensive mastery of Абетка та щоденні вітання (Alphabet & Basic Greetings).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Частина 3) та практичне застосування Абетка та щоденні вітання (Alphabet & Basic Greetings). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (1.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (1.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (1.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Абетка та щоденні вітання (Alphabet & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Абетка та щоденні вітання (Alphabet & Basic Greetings) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (1.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (1.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (1.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (1.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (1.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (1.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Абетка та щоденні вітання (Alphabet & Basic Greetings) » (Контрольне завдання 1-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (1.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (1.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (1.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («до_побачення»):",
                    "acceptedAnswers": [
                        "до_побачення"
                    ],
                    "explanation": "The target keyword was: 【до_побачення】"
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
        "objective": "Comprehensive mastery of Абетка та щоденні вітання (Alphabet & Basic Greetings).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Частина 4) та практичне застосування Абетка та щоденні вітання (Alphabet & Basic Greetings). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (1.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (1.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (1.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Абетка та щоденні вітання (Alphabet & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Абетка та щоденні вітання (Alphabet & Basic Greetings) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (1.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (1.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (1.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (1.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (1.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (1.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Абетка та щоденні вітання (Alphabet & Basic Greetings) » (Контрольне завдання 1-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (1.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (1.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (1.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («привіт»):",
                    "acceptedAnswers": [
                        "привіт"
                    ],
                    "explanation": "The target keyword was: 【привіт】"
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
        "objective": "Comprehensive mastery of Абетка та щоденні вітання (Alphabet & Basic Greetings).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Частина 5) та практичне застосування Абетка та щоденні вітання (Alphabet & Basic Greetings). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (1.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (1.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (1.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Абетка та щоденні вітання (Alphabet & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Абетка та щоденні вітання (Alphabet & Basic Greetings) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (1.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (1.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (1.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська абетка, фонетика та вітання (Alphabet & Greetings) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (1.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (1.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (1.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Абетка та щоденні вітання (Alphabet & Basic Greetings) » (Контрольне завдання 1-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (1.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (1.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (1.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («будь_ласка»):",
                    "acceptedAnswers": [
                        "будь_ласка"
                    ],
                    "explanation": "The target keyword was: 【будь_ласка】"
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
        "objective": "Comprehensive mastery of Рід та множина іменників (Noun Gender & Plural Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Рід та число іменників (Noun Gender & Plurals) » (Частина 1) та практичне застосування Рід та множина іменників (Noun Gender & Plural Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (2.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (2.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (2.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Рід та множина іменників (Noun Gender & Plural Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Рід та множина іменників (Noun Gender & Plural Forms) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (2.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (2.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (2.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Рід та число іменників (Noun Gender & Plurals) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (2.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (2.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (2.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Рід та множина іменників (Noun Gender & Plural Forms) » (Контрольне завдання 2-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (2.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (2.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (2.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («книжка»):",
                    "acceptedAnswers": [
                        "книжка"
                    ],
                    "explanation": "The target keyword was: 【книжка】"
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
        "objective": "Comprehensive mastery of Рід та множина іменників (Noun Gender & Plural Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Рід та число іменників (Noun Gender & Plurals) » (Частина 2) та практичне застосування Рід та множина іменників (Noun Gender & Plural Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (2.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (2.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (2.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Рід та множина іменників (Noun Gender & Plural Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Рід та множина іменників (Noun Gender & Plural Forms) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (2.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (2.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (2.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Рід та число іменників (Noun Gender & Plurals) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (2.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (2.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (2.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Рід та множина іменників (Noun Gender & Plural Forms) » (Контрольне завдання 2-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (2.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (2.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (2.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («стіл»):",
                    "acceptedAnswers": [
                        "стіл"
                    ],
                    "explanation": "The target keyword was: 【стіл】"
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
        "objective": "Comprehensive mastery of Рід та множина іменників (Noun Gender & Plural Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Рід та число іменників (Noun Gender & Plurals) » (Частина 3) та практичне застосування Рід та множина іменників (Noun Gender & Plural Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (2.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (2.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (2.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Рід та множина іменників (Noun Gender & Plural Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Рід та множина іменників (Noun Gender & Plural Forms) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (2.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (2.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (2.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Рід та число іменників (Noun Gender & Plurals) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (2.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (2.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (2.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Рід та множина іменників (Noun Gender & Plural Forms) » (Контрольне завдання 2-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (2.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (2.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (2.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («вікно»):",
                    "acceptedAnswers": [
                        "вікно"
                    ],
                    "explanation": "The target keyword was: 【вікно】"
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
        "objective": "Comprehensive mastery of Рід та множина іменників (Noun Gender & Plural Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Рід та число іменників (Noun Gender & Plurals) » (Частина 4) та практичне застосування Рід та множина іменників (Noun Gender & Plural Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (2.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (2.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (2.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Рід та множина іменників (Noun Gender & Plural Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Рід та множина іменників (Noun Gender & Plural Forms) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (2.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (2.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (2.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Рід та число іменників (Noun Gender & Plurals) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (2.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (2.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (2.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Рід та множина іменників (Noun Gender & Plural Forms) » (Контрольне завдання 2-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (2.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (2.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (2.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («друзі»):",
                    "acceptedAnswers": [
                        "друзі"
                    ],
                    "explanation": "The target keyword was: 【друзі】"
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
        "objective": "Comprehensive mastery of Рід та множина іменників (Noun Gender & Plural Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Рід та число іменників (Noun Gender & Plurals) » (Частина 5) та практичне застосування Рід та множина іменників (Noun Gender & Plural Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (2.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (2.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (2.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Рід та множина іменників (Noun Gender & Plural Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Рід та множина іменників (Noun Gender & Plural Forms) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (2.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (2.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (2.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Рід та число іменників (Noun Gender & Plurals) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (2.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (2.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (2.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Рід та множина іменників (Noun Gender & Plural Forms) » (Контрольне завдання 2-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (2.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (2.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (2.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («міста»):",
                    "acceptedAnswers": [
                        "міста"
                    ],
                    "explanation": "The target keyword was: 【міста】"
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
        "objective": "Comprehensive mastery of Називний і кличний відмінки (Nominative & Vocative Syntax).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Частина 1) та практичне застосування Називний і кличний відмінки (Nominative & Vocative Syntax). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (3.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (3.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (3.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Називний і кличний відмінки (Nominative & Vocative Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Називний і кличний відмінки (Nominative & Vocative Syntax) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (3.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (3.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (3.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (3.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (3.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (3.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Називний і кличний відмінки (Nominative & Vocative Syntax) » (Контрольне завдання 3-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (3.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (3.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (3.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («мене»):",
                    "acceptedAnswers": [
                        "мене"
                    ],
                    "explanation": "The target keyword was: 【мене】"
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
        "objective": "Comprehensive mastery of Називний і кличний відмінки (Nominative & Vocative Syntax).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Частина 2) та практичне застосування Називний і кличний відмінки (Nominative & Vocative Syntax). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (3.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (3.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (3.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Називний і кличний відмінки (Nominative & Vocative Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Називний і кличний відмінки (Nominative & Vocative Syntax) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (3.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (3.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (3.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (3.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (3.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (3.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Називний і кличний відмінки (Nominative & Vocative Syntax) » (Контрольне завдання 3-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (3.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (3.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (3.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («його»):",
                    "acceptedAnswers": [
                        "його"
                    ],
                    "explanation": "The target keyword was: 【його】"
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
        "objective": "Comprehensive mastery of Називний і кличний відмінки (Nominative & Vocative Syntax).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Частина 3) та практичне застосування Називний і кличний відмінки (Nominative & Vocative Syntax). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (3.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (3.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (3.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Називний і кличний відмінки (Nominative & Vocative Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Називний і кличний відмінки (Nominative & Vocative Syntax) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (3.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (3.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (3.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (3.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (3.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (3.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Називний і кличний відмінки (Nominative & Vocative Syntax) » (Контрольне завдання 3-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (3.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (3.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (3.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («її»):",
                    "acceptedAnswers": [
                        "її"
                    ],
                    "explanation": "The target keyword was: 【її】"
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
        "objective": "Comprehensive mastery of Називний і кличний відмінки (Nominative & Vocative Syntax).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Частина 4) та практичне застосування Називний і кличний відмінки (Nominative & Vocative Syntax). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (3.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (3.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (3.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Називний і кличний відмінки (Nominative & Vocative Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Називний і кличний відмінки (Nominative & Vocative Syntax) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (3.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (3.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (3.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (3.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (3.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (3.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Називний і кличний відмінки (Nominative & Vocative Syntax) » (Контрольне завдання 3-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (3.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (3.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (3.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («нас»):",
                    "acceptedAnswers": [
                        "нас"
                    ],
                    "explanation": "The target keyword was: 【нас】"
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
        "objective": "Comprehensive mastery of Називний і кличний відмінки (Nominative & Vocative Syntax).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Частина 5) та практичне застосування Називний і кличний відмінки (Nominative & Vocative Syntax). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (3.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (3.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (3.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Називний і кличний відмінки (Nominative & Vocative Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Називний і кличний відмінки (Nominative & Vocative Syntax) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (3.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (3.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (3.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Називний та Кличний відмінки (Nominative & Vocative Cases) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (3.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (3.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (3.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Називний і кличний відмінки (Nominative & Vocative Syntax) » (Контрольне завдання 3-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (3.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (3.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (3.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («вас»):",
                    "acceptedAnswers": [
                        "вас"
                    ],
                    "explanation": "The target keyword was: 【вас】"
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
        "objective": "Comprehensive mastery of Теперішній час дієслів (Present Tense Conjugations).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Частина 1) та практичне застосування Теперішній час дієслів (Present Tense Conjugations). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (4.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (4.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (4.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Теперішній час дієслів (Present Tense Conjugations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Теперішній час дієслів (Present Tense Conjugations) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (4.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (4.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (4.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (4.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (4.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (4.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Теперішній час дієслів (Present Tense Conjugations) » (Контрольне завдання 4-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (4.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (4.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (4.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («читаю»):",
                    "acceptedAnswers": [
                        "читаю"
                    ],
                    "explanation": "The target keyword was: 【читаю】"
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
        "objective": "Comprehensive mastery of Теперішній час дієслів (Present Tense Conjugations).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Частина 2) та практичне застосування Теперішній час дієслів (Present Tense Conjugations). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (4.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (4.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (4.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Теперішній час дієслів (Present Tense Conjugations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Теперішній час дієслів (Present Tense Conjugations) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (4.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (4.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (4.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (4.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (4.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (4.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Теперішній час дієслів (Present Tense Conjugations) » (Контрольне завдання 4-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (4.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (4.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (4.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («пише»):",
                    "acceptedAnswers": [
                        "пише"
                    ],
                    "explanation": "The target keyword was: 【пише】"
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
        "objective": "Comprehensive mastery of Теперішній час дієслів (Present Tense Conjugations).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Частина 3) та практичне застосування Теперішній час дієслів (Present Tense Conjugations). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (4.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (4.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (4.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Теперішній час дієслів (Present Tense Conjugations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Теперішній час дієслів (Present Tense Conjugations) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (4.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (4.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (4.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (4.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (4.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (4.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Теперішній час дієслів (Present Tense Conjugations) » (Контрольне завдання 4-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (4.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (4.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (4.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («робимо»):",
                    "acceptedAnswers": [
                        "робимо"
                    ],
                    "explanation": "The target keyword was: 【робимо】"
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
        "objective": "Comprehensive mastery of Теперішній час дієслів (Present Tense Conjugations).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Частина 4) та практичне застосування Теперішній час дієслів (Present Tense Conjugations). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (4.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (4.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (4.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Теперішній час дієслів (Present Tense Conjugations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Теперішній час дієслів (Present Tense Conjugations) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (4.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (4.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (4.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (4.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (4.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (4.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Теперішній час дієслів (Present Tense Conjugations) » (Контрольне завдання 4-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (4.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (4.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (4.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («знають»):",
                    "acceptedAnswers": [
                        "знають"
                    ],
                    "explanation": "The target keyword was: 【знають】"
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
        "objective": "Comprehensive mastery of Теперішній час дієслів (Present Tense Conjugations).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Частина 5) та практичне застосування Теперішній час дієслів (Present Tense Conjugations). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (4.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (4.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (4.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Теперішній час дієслів (Present Tense Conjugations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Теперішній час дієслів (Present Tense Conjugations) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (4.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (4.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (4.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Теперішній час дієслів: 1 та 2 дієвідміни (Present Tense) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (4.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (4.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (4.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Теперішній час дієслів (Present Tense Conjugations) » (Контрольне завдання 4-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (4.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (4.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (4.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («говорите»):",
                    "acceptedAnswers": [
                        "говорите"
                    ],
                    "explanation": "The target keyword was: 【говорите】"
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
        "objective": "Comprehensive mastery of Знахідний відмінок іменників (Accusative Case Usage).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Знахідний відмінок неістот та істот (Accusative Case) » (Частина 1) та практичне застосування Знахідний відмінок іменників (Accusative Case Usage). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (5.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (5.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (5.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Знахідний відмінок іменників (Accusative Case Usage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Знахідний відмінок іменників (Accusative Case Usage) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (5.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (5.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (5.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Знахідний відмінок неістот та істот (Accusative Case) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (5.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (5.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (5.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Знахідний відмінок іменників (Accusative Case Usage) » (Контрольне завдання 5-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (5.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (5.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (5.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («читав»):",
                    "acceptedAnswers": [
                        "читав"
                    ],
                    "explanation": "The target keyword was: 【читав】"
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
        "objective": "Comprehensive mastery of Знахідний відмінок іменників (Accusative Case Usage).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Знахідний відмінок неістот та істот (Accusative Case) » (Частина 2) та практичне застосування Знахідний відмінок іменників (Accusative Case Usage). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (5.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (5.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (5.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Знахідний відмінок іменників (Accusative Case Usage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Знахідний відмінок іменників (Accusative Case Usage) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (5.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (5.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (5.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Знахідний відмінок неістот та істот (Accusative Case) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (5.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (5.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (5.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Знахідний відмінок іменників (Accusative Case Usage) » (Контрольне завдання 5-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (5.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (5.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (5.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («писала»):",
                    "acceptedAnswers": [
                        "писала"
                    ],
                    "explanation": "The target keyword was: 【писала】"
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
        "objective": "Comprehensive mastery of Знахідний відмінок іменників (Accusative Case Usage).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Знахідний відмінок неістот та істот (Accusative Case) » (Частина 3) та практичне застосування Знахідний відмінок іменників (Accusative Case Usage). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (5.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (5.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (5.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Знахідний відмінок іменників (Accusative Case Usage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Знахідний відмінок іменників (Accusative Case Usage) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (5.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (5.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (5.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Знахідний відмінок неістот та істот (Accusative Case) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (5.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (5.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (5.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Знахідний відмінок іменників (Accusative Case Usage) » (Контрольне завдання 5-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (5.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (5.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (5.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («робили»):",
                    "acceptedAnswers": [
                        "робили"
                    ],
                    "explanation": "The target keyword was: 【робили】"
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
        "objective": "Comprehensive mastery of Знахідний відмінок іменників (Accusative Case Usage).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Знахідний відмінок неістот та істот (Accusative Case) » (Частина 4) та практичне застосування Знахідний відмінок іменників (Accusative Case Usage). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (5.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (5.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (5.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Знахідний відмінок іменників (Accusative Case Usage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Знахідний відмінок іменників (Accusative Case Usage) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (5.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (5.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (5.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Знахідний відмінок неістот та істот (Accusative Case) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (5.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (5.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (5.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Знахідний відмінок іменників (Accusative Case Usage) » (Контрольне завдання 5-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (5.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (5.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (5.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («знали»):",
                    "acceptedAnswers": [
                        "знали"
                    ],
                    "explanation": "The target keyword was: 【знали】"
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
        "objective": "Comprehensive mastery of Знахідний відмінок іменників (Accusative Case Usage).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Знахідний відмінок неістот та істот (Accusative Case) » (Частина 5) та практичне застосування Знахідний відмінок іменників (Accusative Case Usage). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (5.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (5.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (5.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Знахідний відмінок іменників (Accusative Case Usage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Знахідний відмінок іменників (Accusative Case Usage) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (5.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (5.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (5.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Знахідний відмінок неістот та істот (Accusative Case) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (5.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (5.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (5.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Знахідний відмінок іменників (Accusative Case Usage) » (Контрольне завдання 5-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (5.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (5.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (5.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («говорив»):",
                    "acceptedAnswers": [
                        "говорив"
                    ],
                    "explanation": "The target keyword was: 【говорив】"
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
        "objective": "Comprehensive mastery of Родовий відмінок і заперечення (Genitive Case & Negation).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Частина 1) та практичне застосування Родовий відмінок і заперечення (Genitive Case & Negation). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (6.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (6.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (6.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Родовий відмінок і заперечення (Genitive Case & Negation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Родовий відмінок і заперечення (Genitive Case & Negation) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (6.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (6.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (6.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (6.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (6.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (6.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Родовий відмінок і заперечення (Genitive Case & Negation) » (Контрольне завдання 6-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (6.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (6.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (6.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («буду_читати»):",
                    "acceptedAnswers": [
                        "буду_читати"
                    ],
                    "explanation": "The target keyword was: 【буду_читати】"
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
        "objective": "Comprehensive mastery of Родовий відмінок і заперечення (Genitive Case & Negation).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Частина 2) та практичне застосування Родовий відмінок і заперечення (Genitive Case & Negation). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (6.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (6.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (6.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Родовий відмінок і заперечення (Genitive Case & Negation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Родовий відмінок і заперечення (Genitive Case & Negation) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (6.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (6.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (6.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (6.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (6.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (6.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Родовий відмінок і заперечення (Genitive Case & Negation) » (Контрольне завдання 6-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (6.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (6.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (6.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («напишу»):",
                    "acceptedAnswers": [
                        "напишу"
                    ],
                    "explanation": "The target keyword was: 【напишу】"
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
        "objective": "Comprehensive mastery of Родовий відмінок і заперечення (Genitive Case & Negation).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Частина 3) та практичне застосування Родовий відмінок і заперечення (Genitive Case & Negation). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (6.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (6.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (6.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Родовий відмінок і заперечення (Genitive Case & Negation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Родовий відмінок і заперечення (Genitive Case & Negation) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (6.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (6.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (6.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (6.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (6.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (6.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Родовий відмінок і заперечення (Genitive Case & Negation) » (Контрольне завдання 6-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (6.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (6.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (6.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («зробимо»):",
                    "acceptedAnswers": [
                        "зробимо"
                    ],
                    "explanation": "The target keyword was: 【зробимо】"
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
        "objective": "Comprehensive mastery of Родовий відмінок і заперечення (Genitive Case & Negation).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Частина 4) та практичне застосування Родовий відмінок і заперечення (Genitive Case & Negation). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (6.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (6.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (6.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Родовий відмінок і заперечення (Genitive Case & Negation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Родовий відмінок і заперечення (Genitive Case & Negation) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (6.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (6.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (6.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (6.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (6.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (6.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Родовий відмінок і заперечення (Genitive Case & Negation) » (Контрольне завдання 6-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (6.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (6.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (6.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («прочитають»):",
                    "acceptedAnswers": [
                        "прочитають"
                    ],
                    "explanation": "The target keyword was: 【прочитають】"
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
        "objective": "Comprehensive mastery of Родовий відмінок і заперечення (Genitive Case & Negation).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Частина 5) та практичне застосування Родовий відмінок і заперечення (Genitive Case & Negation). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (6.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (6.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (6.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Родовий відмінок і заперечення (Genitive Case & Negation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Родовий відмінок і заперечення (Genitive Case & Negation) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (6.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (6.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (6.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Родовий відмінок: приналежність та заперечення (Genitive Case) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (6.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (6.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (6.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Родовий відмінок і заперечення (Genitive Case & Negation) » (Контрольне завдання 6-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (6.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (6.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (6.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («скаже»):",
                    "acceptedAnswers": [
                        "скаже"
                    ],
                    "explanation": "The target keyword was: 【скаже】"
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
        "objective": "Comprehensive mastery of Орудний відмінок супроводу (Instrumental Case of Companion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Частина 1) та практичне застосування Орудний відмінок супроводу (Instrumental Case of Companion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (7.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (7.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (7.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Орудний відмінок супроводу (Instrumental Case of Companion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Орудний відмінок супроводу (Instrumental Case of Companion) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (7.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (7.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (7.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (7.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (7.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (7.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Орудний відмінок супроводу (Instrumental Case of Companion) » (Контрольне завдання 7-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (7.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (7.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (7.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («книжці»):",
                    "acceptedAnswers": [
                        "книжці"
                    ],
                    "explanation": "The target keyword was: 【книжці】"
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
        "objective": "Comprehensive mastery of Орудний відмінок супроводу (Instrumental Case of Companion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Частина 2) та практичне застосування Орудний відмінок супроводу (Instrumental Case of Companion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (7.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (7.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (7.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Орудний відмінок супроводу (Instrumental Case of Companion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Орудний відмінок супроводу (Instrumental Case of Companion) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (7.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (7.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (7.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (7.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (7.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (7.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Орудний відмінок супроводу (Instrumental Case of Companion) » (Контрольне завдання 7-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (7.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (7.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (7.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («столі»):",
                    "acceptedAnswers": [
                        "столі"
                    ],
                    "explanation": "The target keyword was: 【столі】"
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
        "objective": "Comprehensive mastery of Орудний відмінок супроводу (Instrumental Case of Companion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Частина 3) та практичне застосування Орудний відмінок супроводу (Instrumental Case of Companion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (7.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (7.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (7.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Орудний відмінок супроводу (Instrumental Case of Companion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Орудний відмінок супроводу (Instrumental Case of Companion) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (7.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (7.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (7.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (7.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (7.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (7.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Орудний відмінок супроводу (Instrumental Case of Companion) » (Контрольне завдання 7-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (7.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (7.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (7.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («місті»):",
                    "acceptedAnswers": [
                        "місті"
                    ],
                    "explanation": "The target keyword was: 【місті】"
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
        "objective": "Comprehensive mastery of Орудний відмінок супроводу (Instrumental Case of Companion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Частина 4) та практичне застосування Орудний відмінок супроводу (Instrumental Case of Companion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (7.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (7.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (7.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Орудний відмінок супроводу (Instrumental Case of Companion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Орудний відмінок супроводу (Instrumental Case of Companion) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (7.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (7.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (7.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (7.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (7.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (7.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Орудний відмінок супроводу (Instrumental Case of Companion) » (Контрольне завдання 7-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (7.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (7.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (7.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («кімнаті»):",
                    "acceptedAnswers": [
                        "кімнаті"
                    ],
                    "explanation": "The target keyword was: 【кімнаті】"
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
        "objective": "Comprehensive mastery of Орудний відмінок супроводу (Instrumental Case of Companion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Частина 5) та практичне застосування Орудний відмінок супроводу (Instrumental Case of Companion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (7.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (7.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (7.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Орудний відмінок супроводу (Instrumental Case of Companion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Орудний відмінок супроводу (Instrumental Case of Companion) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (7.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (7.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (7.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Орудний відмінок: знаряддя та супровід (Instrumental Case) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (7.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (7.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (7.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Орудний відмінок супроводу (Instrumental Case of Companion) » (Контрольне завдання 7-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (7.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (7.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (7.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («школі»):",
                    "acceptedAnswers": [
                        "школі"
                    ],
                    "explanation": "The target keyword was: 【школі】"
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
        "objective": "Comprehensive mastery of Місцевий відмінок із прийменниками (Locative Case with in/on).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Частина 1) та практичне застосування Місцевий відмінок із прийменниками (Locative Case with in/on). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (8.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (8.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (8.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Місцевий відмінок із прийменниками (Locative Case with in/on)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Місцевий відмінок із прийменниками (Locative Case with in/on) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (8.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (8.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (8.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (8.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (8.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (8.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Місцевий відмінок із прийменниками (Locative Case with in/on) » (Контрольне завдання 8-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (8.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (8.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (8.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («книжку»):",
                    "acceptedAnswers": [
                        "книжку"
                    ],
                    "explanation": "The target keyword was: 【книжку】"
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
        "objective": "Comprehensive mastery of Місцевий відмінок із прийменниками (Locative Case with in/on).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Частина 2) та практичне застосування Місцевий відмінок із прийменниками (Locative Case with in/on). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (8.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (8.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (8.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Місцевий відмінок із прийменниками (Locative Case with in/on)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Місцевий відмінок із прийменниками (Locative Case with in/on) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (8.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (8.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (8.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (8.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (8.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (8.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Місцевий відмінок із прийменниками (Locative Case with in/on) » (Контрольне завдання 8-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (8.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (8.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (8.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («брата»):",
                    "acceptedAnswers": [
                        "брата"
                    ],
                    "explanation": "The target keyword was: 【брата】"
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
        "objective": "Comprehensive mastery of Місцевий відмінок із прийменниками (Locative Case with in/on).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Частина 3) та практичне застосування Місцевий відмінок із прийменниками (Locative Case with in/on). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (8.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (8.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (8.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Місцевий відмінок із прийменниками (Locative Case with in/on)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Місцевий відмінок із прийменниками (Locative Case with in/on) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (8.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (8.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (8.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (8.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (8.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (8.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Місцевий відмінок із прийменниками (Locative Case with in/on) » (Контрольне завдання 8-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (8.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (8.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (8.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («сестру»):",
                    "acceptedAnswers": [
                        "сестру"
                    ],
                    "explanation": "The target keyword was: 【сестру】"
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
        "objective": "Comprehensive mastery of Місцевий відмінок із прийменниками (Locative Case with in/on).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Частина 4) та практичне застосування Місцевий відмінок із прийменниками (Locative Case with in/on). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (8.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (8.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (8.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Місцевий відмінок із прийменниками (Locative Case with in/on)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Місцевий відмінок із прийменниками (Locative Case with in/on) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (8.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (8.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (8.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (8.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (8.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (8.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Місцевий відмінок із прийменниками (Locative Case with in/on) » (Контрольне завдання 8-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (8.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (8.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (8.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («друга»):",
                    "acceptedAnswers": [
                        "друга"
                    ],
                    "explanation": "The target keyword was: 【друга】"
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
        "objective": "Comprehensive mastery of Місцевий відмінок із прийменниками (Locative Case with in/on).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Частина 5) та практичне застосування Місцевий відмінок із прийменниками (Locative Case with in/on). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (8.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (8.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (8.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Місцевий відмінок із прийменниками (Locative Case with in/on)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Місцевий відмінок із прийменниками (Locative Case with in/on) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (8.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (8.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (8.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Місцевий відмінок та прийменники в/на/по (Locative Case) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (8.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (8.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (8.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Місцевий відмінок із прийменниками (Locative Case with in/on) » (Контрольне завдання 8-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (8.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (8.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (8.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («воду»):",
                    "acceptedAnswers": [
                        "воду"
                    ],
                    "explanation": "The target keyword was: 【воду】"
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
        "objective": "Comprehensive mastery of Давальний відмінок адресата (Dative Case of Addressee).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Давальний відмінок: непрямий додаток (Dative Case) » (Частина 1) та практичне застосування Давальний відмінок адресата (Dative Case of Addressee). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (9.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (9.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (9.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Давальний відмінок адресата (Dative Case of Addressee)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Давальний відмінок адресата (Dative Case of Addressee) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (9.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (9.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (9.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Давальний відмінок: непрямий додаток (Dative Case) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (9.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (9.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (9.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Давальний відмінок адресата (Dative Case of Addressee) » (Контрольне завдання 9-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (9.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (9.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (9.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ручкою»):",
                    "acceptedAnswers": [
                        "ручкою"
                    ],
                    "explanation": "The target keyword was: 【ручкою】"
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
        "objective": "Comprehensive mastery of Давальний відмінок адресата (Dative Case of Addressee).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Давальний відмінок: непрямий додаток (Dative Case) » (Частина 2) та практичне застосування Давальний відмінок адресата (Dative Case of Addressee). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (9.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (9.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (9.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Давальний відмінок адресата (Dative Case of Addressee)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Давальний відмінок адресата (Dative Case of Addressee) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (9.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (9.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (9.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Давальний відмінок: непрямий додаток (Dative Case) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (9.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (9.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (9.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Давальний відмінок адресата (Dative Case of Addressee) » (Контрольне завдання 9-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (9.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (9.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (9.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («олівцем»):",
                    "acceptedAnswers": [
                        "олівцем"
                    ],
                    "explanation": "The target keyword was: 【олівцем】"
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
        "objective": "Comprehensive mastery of Давальний відмінок адресата (Dative Case of Addressee).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Давальний відмінок: непрямий додаток (Dative Case) » (Частина 3) та практичне застосування Давальний відмінок адресата (Dative Case of Addressee). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (9.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (9.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (9.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Давальний відмінок адресата (Dative Case of Addressee)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Давальний відмінок адресата (Dative Case of Addressee) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (9.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (9.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (9.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Давальний відмінок: непрямий додаток (Dative Case) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (9.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (9.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (9.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Давальний відмінок адресата (Dative Case of Addressee) » (Контрольне завдання 9-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (9.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (9.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (9.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («другом»):",
                    "acceptedAnswers": [
                        "другом"
                    ],
                    "explanation": "The target keyword was: 【другом】"
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
        "objective": "Comprehensive mastery of Давальний відмінок адресата (Dative Case of Addressee).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Давальний відмінок: непрямий додаток (Dative Case) » (Частина 4) та практичне застосування Давальний відмінок адресата (Dative Case of Addressee). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (9.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (9.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (9.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Давальний відмінок адресата (Dative Case of Addressee)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Давальний відмінок адресата (Dative Case of Addressee) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (9.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (9.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (9.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Давальний відмінок: непрямий додаток (Dative Case) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (9.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (9.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (9.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Давальний відмінок адресата (Dative Case of Addressee) » (Контрольне завдання 9-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (9.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (9.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (9.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («сестрою»):",
                    "acceptedAnswers": [
                        "сестрою"
                    ],
                    "explanation": "The target keyword was: 【сестрою】"
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
        "objective": "Comprehensive mastery of Давальний відмінок адресата (Dative Case of Addressee).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Давальний відмінок: непрямий додаток (Dative Case) » (Частина 5) та практичне застосування Давальний відмінок адресата (Dative Case of Addressee). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (9.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (9.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (9.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Давальний відмінок адресата (Dative Case of Addressee)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Давальний відмінок адресата (Dative Case of Addressee) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (9.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (9.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (9.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Давальний відмінок: непрямий додаток (Dative Case) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (9.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (9.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (9.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Давальний відмінок адресата (Dative Case of Addressee) » (Контрольне завдання 9-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (9.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (9.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (9.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («містом»):",
                    "acceptedAnswers": [
                        "містом"
                    ],
                    "explanation": "The target keyword was: 【містом】"
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
        "objective": "Comprehensive mastery of Минулий час дієслів (Past Tense & Gender Agreement).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Минулий час дієслів та узгодження в роді (Past Tense) » (Частина 1) та практичне застосування Минулий час дієслів (Past Tense & Gender Agreement). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (10.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (10.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (10.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Минулий час дієслів (Past Tense & Gender Agreement)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Минулий час дієслів (Past Tense & Gender Agreement) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (10.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (10.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (10.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Минулий час дієслів та узгодження в роді (Past Tense) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (10.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (10.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (10.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Минулий час дієслів (Past Tense & Gender Agreement) » (Контрольне завдання 10-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (10.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (10.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (10.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («книжкового»):",
                    "acceptedAnswers": [
                        "книжкового"
                    ],
                    "explanation": "The target keyword was: 【книжкового】"
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
        "objective": "Comprehensive mastery of Минулий час дієслів (Past Tense & Gender Agreement).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Минулий час дієслів та узгодження в роді (Past Tense) » (Частина 2) та практичне застосування Минулий час дієслів (Past Tense & Gender Agreement). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (10.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (10.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (10.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Минулий час дієслів (Past Tense & Gender Agreement)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Минулий час дієслів (Past Tense & Gender Agreement) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (10.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (10.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (10.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Минулий час дієслів та узгодження в роді (Past Tense) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (10.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (10.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (10.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Минулий час дієслів (Past Tense & Gender Agreement) » (Контрольне завдання 10-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (10.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (10.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (10.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («письмового»):",
                    "acceptedAnswers": [
                        "письмового"
                    ],
                    "explanation": "The target keyword was: 【письмового】"
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
        "objective": "Comprehensive mastery of Минулий час дієслів (Past Tense & Gender Agreement).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Минулий час дієслів та узгодження в роді (Past Tense) » (Частина 3) та практичне застосування Минулий час дієслів (Past Tense & Gender Agreement). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (10.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (10.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (10.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Минулий час дієслів (Past Tense & Gender Agreement)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Минулий час дієслів (Past Tense & Gender Agreement) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (10.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (10.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (10.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Минулий час дієслів та узгодження в роді (Past Tense) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (10.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (10.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (10.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Минулий час дієслів (Past Tense & Gender Agreement) » (Контрольне завдання 10-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (10.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (10.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (10.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («міського»):",
                    "acceptedAnswers": [
                        "міського"
                    ],
                    "explanation": "The target keyword was: 【міського】"
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
        "objective": "Comprehensive mastery of Минулий час дієслів (Past Tense & Gender Agreement).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Минулий час дієслів та узгодження в роді (Past Tense) » (Частина 4) та практичне застосування Минулий час дієслів (Past Tense & Gender Agreement). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (10.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (10.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (10.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Минулий час дієслів (Past Tense & Gender Agreement)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Минулий час дієслів (Past Tense & Gender Agreement) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (10.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (10.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (10.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Минулий час дієслів та узгодження в роді (Past Tense) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (10.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (10.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (10.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Минулий час дієслів (Past Tense & Gender Agreement) » (Контрольне завдання 10-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (10.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (10.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (10.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («товариша»):",
                    "acceptedAnswers": [
                        "товариша"
                    ],
                    "explanation": "The target keyword was: 【товариша】"
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
        "objective": "Comprehensive mastery of Минулий час дієслів (Past Tense & Gender Agreement).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Минулий час дієслів та узгодження в роді (Past Tense) » (Частина 5) та практичне застосування Минулий час дієслів (Past Tense & Gender Agreement). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (10.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (10.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (10.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Минулий час дієслів (Past Tense & Gender Agreement)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Минулий час дієслів (Past Tense & Gender Agreement) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (10.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (10.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (10.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Минулий час дієслів та узгодження в роді (Past Tense) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (10.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (10.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (10.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Минулий час дієслів (Past Tense & Gender Agreement) » (Контрольне завдання 10-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (10.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (10.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (10.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («джерела»):",
                    "acceptedAnswers": [
                        "джерела"
                    ],
                    "explanation": "The target keyword was: 【джерела】"
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
        "objective": "Comprehensive mastery of Форми майбутнього часу (Future Tense Simple & Compound).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Майбутній час: проста і складена форми (Future Tense) » (Частина 1) та практичне застосування Форми майбутнього часу (Future Tense Simple & Compound). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (11.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (11.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (11.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Форми майбутнього часу (Future Tense Simple & Compound)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Форми майбутнього часу (Future Tense Simple & Compound) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (11.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (11.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (11.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Майбутній час: проста і складена форми (Future Tense) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (11.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (11.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (11.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Форми майбутнього часу (Future Tense Simple & Compound) » (Контрольне завдання 11-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (11.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (11.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (11.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («друже»):",
                    "acceptedAnswers": [
                        "друже"
                    ],
                    "explanation": "The target keyword was: 【друже】"
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
        "objective": "Comprehensive mastery of Форми майбутнього часу (Future Tense Simple & Compound).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Майбутній час: проста і складена форми (Future Tense) » (Частина 2) та практичне застосування Форми майбутнього часу (Future Tense Simple & Compound). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (11.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (11.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (11.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Форми майбутнього часу (Future Tense Simple & Compound)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Форми майбутнього часу (Future Tense Simple & Compound) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (11.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (11.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (11.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Майбутній час: проста і складена форми (Future Tense) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (11.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (11.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (11.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Форми майбутнього часу (Future Tense Simple & Compound) » (Контрольне завдання 11-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (11.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (11.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (11.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («сестро»):",
                    "acceptedAnswers": [
                        "сестро"
                    ],
                    "explanation": "The target keyword was: 【сестро】"
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
        "objective": "Comprehensive mastery of Форми майбутнього часу (Future Tense Simple & Compound).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Майбутній час: проста і складена форми (Future Tense) » (Частина 3) та практичне застосування Форми майбутнього часу (Future Tense Simple & Compound). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (11.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (11.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (11.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Форми майбутнього часу (Future Tense Simple & Compound)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Форми майбутнього часу (Future Tense Simple & Compound) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (11.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (11.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (11.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Майбутній час: проста і складена форми (Future Tense) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (11.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (11.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (11.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Форми майбутнього часу (Future Tense Simple & Compound) » (Контрольне завдання 11-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (11.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (11.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (11.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («мамо»):",
                    "acceptedAnswers": [
                        "мамо"
                    ],
                    "explanation": "The target keyword was: 【мамо】"
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
        "objective": "Comprehensive mastery of Форми майбутнього часу (Future Tense Simple & Compound).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Майбутній час: проста і складена форми (Future Tense) » (Частина 4) та практичне застосування Форми майбутнього часу (Future Tense Simple & Compound). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (11.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (11.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (11.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Форми майбутнього часу (Future Tense Simple & Compound)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Форми майбутнього часу (Future Tense Simple & Compound) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (11.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (11.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (11.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Майбутній час: проста і складена форми (Future Tense) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (11.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (11.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (11.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Форми майбутнього часу (Future Tense Simple & Compound) » (Контрольне завдання 11-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (11.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (11.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (11.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («пане»):",
                    "acceptedAnswers": [
                        "пане"
                    ],
                    "explanation": "The target keyword was: 【пане】"
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
        "objective": "Comprehensive mastery of Форми майбутнього часу (Future Tense Simple & Compound).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Майбутній час: проста і складена форми (Future Tense) » (Частина 5) та практичне застосування Форми майбутнього часу (Future Tense Simple & Compound). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (11.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (11.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (11.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Форми майбутнього часу (Future Tense Simple & Compound)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Форми майбутнього часу (Future Tense Simple & Compound) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (11.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (11.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (11.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Майбутній час: проста і складена форми (Future Tense) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (11.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (11.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (11.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Форми майбутнього часу (Future Tense Simple & Compound) » (Контрольне завдання 11-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (11.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (11.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (11.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («пані»):",
                    "acceptedAnswers": [
                        "пані"
                    ],
                    "explanation": "The target keyword was: 【пані】"
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
        "objective": "Comprehensive mastery of Доконаний і недоконаний вид (Verbal Aspect Pairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Частина 1) та практичне застосування Доконаний і недоконаний вид (Verbal Aspect Pairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (12.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (12.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (12.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Доконаний і недоконаний вид (Verbal Aspect Pairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Доконаний і недоконаний вид (Verbal Aspect Pairs) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (12.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (12.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (12.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (12.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (12.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (12.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Доконаний і недоконаний вид (Verbal Aspect Pairs) » (Контрольне завдання 12-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (12.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (12.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (12.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («читай»):",
                    "acceptedAnswers": [
                        "читай"
                    ],
                    "explanation": "The target keyword was: 【читай】"
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
        "objective": "Comprehensive mastery of Доконаний і недоконаний вид (Verbal Aspect Pairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Частина 2) та практичне застосування Доконаний і недоконаний вид (Verbal Aspect Pairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (12.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (12.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (12.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Доконаний і недоконаний вид (Verbal Aspect Pairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Доконаний і недоконаний вид (Verbal Aspect Pairs) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (12.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (12.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (12.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (12.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (12.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (12.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Доконаний і недоконаний вид (Verbal Aspect Pairs) » (Контрольне завдання 12-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (12.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (12.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (12.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («пишіть»):",
                    "acceptedAnswers": [
                        "пишіть"
                    ],
                    "explanation": "The target keyword was: 【пишіть】"
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
        "objective": "Comprehensive mastery of Доконаний і недоконаний вид (Verbal Aspect Pairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Частина 3) та практичне застосування Доконаний і недоконаний вид (Verbal Aspect Pairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (12.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (12.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (12.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Доконаний і недоконаний вид (Verbal Aspect Pairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Доконаний і недоконаний вид (Verbal Aspect Pairs) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (12.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (12.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (12.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (12.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (12.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (12.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Доконаний і недоконаний вид (Verbal Aspect Pairs) » (Контрольне завдання 12-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (12.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (12.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (12.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («робіть»):",
                    "acceptedAnswers": [
                        "робіть"
                    ],
                    "explanation": "The target keyword was: 【робіть】"
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
        "objective": "Comprehensive mastery of Доконаний і недоконаний вид (Verbal Aspect Pairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Частина 4) та практичне застосування Доконаний і недоконаний вид (Verbal Aspect Pairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (12.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (12.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (12.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Доконаний і недоконаний вид (Verbal Aspect Pairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Доконаний і недоконаний вид (Verbal Aspect Pairs) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (12.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (12.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (12.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (12.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (12.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (12.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Доконаний і недоконаний вид (Verbal Aspect Pairs) » (Контрольне завдання 12-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (12.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (12.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (12.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («давайте»):",
                    "acceptedAnswers": [
                        "давайте"
                    ],
                    "explanation": "The target keyword was: 【давайте】"
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
        "objective": "Comprehensive mastery of Доконаний і недоконаний вид (Verbal Aspect Pairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Частина 5) та практичне застосування Доконаний і недоконаний вид (Verbal Aspect Pairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (12.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (12.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (12.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Доконаний і недоконаний вид (Verbal Aspect Pairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Доконаний і недоконаний вид (Verbal Aspect Pairs) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (12.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (12.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (12.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Вид дієслова: доконаний та недоконаний (Verbal Aspect Pairs) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (12.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (12.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (12.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Доконаний і недоконаний вид (Verbal Aspect Pairs) » (Контрольне завдання 12-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (12.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (12.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (12.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («будьмо»):",
                    "acceptedAnswers": [
                        "будьмо"
                    ],
                    "explanation": "The target keyword was: 【будьмо】"
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
        "objective": "Comprehensive mastery of Дієслова руху й префікси (Verbs of Motion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Частина 1) та практичне застосування Дієслова руху й префікси (Verbs of Motion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (13.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (13.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (13.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієслова руху й префікси (Verbs of Motion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієслова руху й префікси (Verbs of Motion) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (13.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (13.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (13.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (13.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (13.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (13.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієслова руху й префікси (Verbs of Motion) » (Контрольне завдання 13-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (13.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (13.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (13.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («якби»):",
                    "acceptedAnswers": [
                        "якби"
                    ],
                    "explanation": "The target keyword was: 【якби】"
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
        "objective": "Comprehensive mastery of Дієслова руху й префікси (Verbs of Motion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Частина 2) та практичне застосування Дієслова руху й префікси (Verbs of Motion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (13.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (13.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (13.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієслова руху й префікси (Verbs of Motion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієслова руху й префікси (Verbs of Motion) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (13.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (13.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (13.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (13.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (13.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (13.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієслова руху й префікси (Verbs of Motion) » (Контрольне завдання 13-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (13.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (13.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (13.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («хотів_би»):",
                    "acceptedAnswers": [
                        "хотів_би"
                    ],
                    "explanation": "The target keyword was: 【хотів_би】"
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
        "objective": "Comprehensive mastery of Дієслова руху й префікси (Verbs of Motion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Частина 3) та практичне застосування Дієслова руху й префікси (Verbs of Motion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (13.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (13.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (13.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієслова руху й префікси (Verbs of Motion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієслова руху й префікси (Verbs of Motion) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (13.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (13.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (13.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (13.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (13.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (13.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієслова руху й префікси (Verbs of Motion) » (Контрольне завдання 13-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (13.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (13.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (13.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («зробив_би»):",
                    "acceptedAnswers": [
                        "зробив_би"
                    ],
                    "explanation": "The target keyword was: 【зробив_би】"
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
        "objective": "Comprehensive mastery of Дієслова руху й префікси (Verbs of Motion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Частина 4) та практичне застосування Дієслова руху й префікси (Verbs of Motion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (13.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (13.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (13.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієслова руху й префікси (Verbs of Motion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієслова руху й префікси (Verbs of Motion) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (13.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (13.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (13.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (13.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (13.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (13.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієслова руху й префікси (Verbs of Motion) » (Контрольне завдання 13-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (13.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (13.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (13.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («могла_б»):",
                    "acceptedAnswers": [
                        "могла_б"
                    ],
                    "explanation": "The target keyword was: 【могла_б】"
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
        "objective": "Comprehensive mastery of Дієслова руху й префікси (Verbs of Motion).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Частина 5) та практичне застосування Дієслова руху й префікси (Verbs of Motion). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (13.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (13.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (13.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієслова руху й префікси (Verbs of Motion)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієслова руху й префікси (Verbs of Motion) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (13.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (13.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (13.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієслова руху: односпрямовані та неодноспрямовані (Motion Verbs) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (13.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (13.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (13.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієслова руху й префікси (Verbs of Motion) » (Контрольне завдання 13-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (13.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (13.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (13.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («було_б»):",
                    "acceptedAnswers": [
                        "було_б"
                    ],
                    "explanation": "The target keyword was: 【було_б】"
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
        "objective": "Comprehensive mastery of Відмінювання прикметників (Adjective Declension & Concord).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Частина 1) та практичне застосування Відмінювання прикметників (Adjective Declension & Concord). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (14.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (14.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (14.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Відмінювання прикметників (Adjective Declension & Concord)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Відмінювання прикметників (Adjective Declension & Concord) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (14.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (14.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (14.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (14.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (14.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (14.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Відмінювання прикметників (Adjective Declension & Concord) » (Контрольне завдання 14-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (14.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (14.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (14.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («прочитавши»):",
                    "acceptedAnswers": [
                        "прочитавши"
                    ],
                    "explanation": "The target keyword was: 【прочитавши】"
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
        "objective": "Comprehensive mastery of Відмінювання прикметників (Adjective Declension & Concord).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Частина 2) та практичне застосування Відмінювання прикметників (Adjective Declension & Concord). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (14.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (14.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (14.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Відмінювання прикметників (Adjective Declension & Concord)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Відмінювання прикметників (Adjective Declension & Concord) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (14.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (14.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (14.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (14.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (14.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (14.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Відмінювання прикметників (Adjective Declension & Concord) » (Контрольне завдання 14-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (14.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (14.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (14.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («написавши»):",
                    "acceptedAnswers": [
                        "написавши"
                    ],
                    "explanation": "The target keyword was: 【написавши】"
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
        "objective": "Comprehensive mastery of Відмінювання прикметників (Adjective Declension & Concord).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Частина 3) та практичне застосування Відмінювання прикметників (Adjective Declension & Concord). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (14.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (14.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (14.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Відмінювання прикметників (Adjective Declension & Concord)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Відмінювання прикметників (Adjective Declension & Concord) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (14.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (14.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (14.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (14.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (14.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (14.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Відмінювання прикметників (Adjective Declension & Concord) » (Контрольне завдання 14-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (14.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (14.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (14.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («зробивши»):",
                    "acceptedAnswers": [
                        "зробивши"
                    ],
                    "explanation": "The target keyword was: 【зробивши】"
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
        "objective": "Comprehensive mastery of Відмінювання прикметників (Adjective Declension & Concord).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Частина 4) та практичне застосування Відмінювання прикметників (Adjective Declension & Concord). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (14.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (14.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (14.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Відмінювання прикметників (Adjective Declension & Concord)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Відмінювання прикметників (Adjective Declension & Concord) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (14.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (14.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (14.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (14.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (14.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (14.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Відмінювання прикметників (Adjective Declension & Concord) » (Контрольне завдання 14-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (14.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (14.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (14.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («побачивши»):",
                    "acceptedAnswers": [
                        "побачивши"
                    ],
                    "explanation": "The target keyword was: 【побачивши】"
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
        "objective": "Comprehensive mastery of Відмінювання прикметників (Adjective Declension & Concord).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Частина 5) та практичне застосування Відмінювання прикметників (Adjective Declension & Concord). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (14.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (14.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (14.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Відмінювання прикметників (Adjective Declension & Concord)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Відмінювання прикметників (Adjective Declension & Concord) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (14.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (14.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (14.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Прикметники: тверда та м'яка групи, узгодження (Adjectives) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (14.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (14.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (14.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Відмінювання прикметників (Adjective Declension & Concord) » (Контрольне завдання 14-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (14.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (14.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (14.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («сказавши»):",
                    "acceptedAnswers": [
                        "сказавши"
                    ],
                    "explanation": "The target keyword was: 【сказавши】"
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
        "objective": "Comprehensive mastery of Ступені порівняння прикметників (Comparative & Superlative).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ступені порівняння прикметників та прислівників (Comparatives) » (Частина 1) та практичне застосування Ступені порівняння прикметників (Comparative & Superlative). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (15.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (15.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (15.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ступені порівняння прикметників (Comparative & Superlative)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ступені порівняння прикметників (Comparative & Superlative) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (15.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (15.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (15.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ступені порівняння прикметників та прислівників (Comparatives) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (15.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (15.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (15.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ступені порівняння прикметників (Comparative & Superlative) » (Контрольне завдання 15-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (15.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (15.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (15.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («читаючи»):",
                    "acceptedAnswers": [
                        "читаючи"
                    ],
                    "explanation": "The target keyword was: 【читаючи】"
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
        "objective": "Comprehensive mastery of Ступені порівняння прикметників (Comparative & Superlative).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ступені порівняння прикметників та прислівників (Comparatives) » (Частина 2) та практичне застосування Ступені порівняння прикметників (Comparative & Superlative). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (15.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (15.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (15.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ступені порівняння прикметників (Comparative & Superlative)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ступені порівняння прикметників (Comparative & Superlative) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (15.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (15.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (15.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ступені порівняння прикметників та прислівників (Comparatives) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (15.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (15.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (15.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ступені порівняння прикметників (Comparative & Superlative) » (Контрольне завдання 15-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (15.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (15.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (15.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («пишучи»):",
                    "acceptedAnswers": [
                        "пишучи"
                    ],
                    "explanation": "The target keyword was: 【пишучи】"
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
        "objective": "Comprehensive mastery of Ступені порівняння прикметників (Comparative & Superlative).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ступені порівняння прикметників та прислівників (Comparatives) » (Частина 3) та практичне застосування Ступені порівняння прикметників (Comparative & Superlative). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (15.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (15.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (15.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ступені порівняння прикметників (Comparative & Superlative)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ступені порівняння прикметників (Comparative & Superlative) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (15.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (15.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (15.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ступені порівняння прикметників та прислівників (Comparatives) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (15.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (15.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (15.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ступені порівняння прикметників (Comparative & Superlative) » (Контрольне завдання 15-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (15.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (15.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (15.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («роблячи»):",
                    "acceptedAnswers": [
                        "роблячи"
                    ],
                    "explanation": "The target keyword was: 【роблячи】"
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
        "objective": "Comprehensive mastery of Ступені порівняння прикметників (Comparative & Superlative).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ступені порівняння прикметників та прислівників (Comparatives) » (Частина 4) та практичне застосування Ступені порівняння прикметників (Comparative & Superlative). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (15.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (15.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (15.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ступені порівняння прикметників (Comparative & Superlative)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ступені порівняння прикметників (Comparative & Superlative) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (15.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (15.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (15.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ступені порівняння прикметників та прислівників (Comparatives) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (15.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (15.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (15.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ступені порівняння прикметників (Comparative & Superlative) » (Контрольне завдання 15-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (15.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (15.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (15.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («знаючи»):",
                    "acceptedAnswers": [
                        "знаючи"
                    ],
                    "explanation": "The target keyword was: 【знаючи】"
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
        "objective": "Comprehensive mastery of Ступені порівняння прикметників (Comparative & Superlative).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ступені порівняння прикметників та прислівників (Comparatives) » (Частина 5) та практичне застосування Ступені порівняння прикметників (Comparative & Superlative). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (15.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (15.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (15.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ступені порівняння прикметників (Comparative & Superlative)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ступені порівняння прикметників (Comparative & Superlative) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (15.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (15.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (15.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ступені порівняння прикметників та прислівників (Comparatives) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (15.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (15.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (15.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ступені порівняння прикметників (Comparative & Superlative) » (Контрольне завдання 15-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (15.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (15.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (15.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («говорячи»):",
                    "acceptedAnswers": [
                        "говорячи"
                    ],
                    "explanation": "The target keyword was: 【говорячи】"
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
        "objective": "Comprehensive mastery of Зворотні дієслова на -ся (Reflexive Verbs with -ся).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Частина 1) та практичне застосування Зворотні дієслова на -ся (Reflexive Verbs with -ся). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (16.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (16.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (16.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Зворотні дієслова на -ся (Reflexive Verbs with -ся)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (16.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (16.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (16.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (16.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (16.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (16.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » (Контрольне завдання 16-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (16.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (16.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (16.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («написаний»):",
                    "acceptedAnswers": [
                        "написаний"
                    ],
                    "explanation": "The target keyword was: 【написаний】"
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
        "objective": "Comprehensive mastery of Зворотні дієслова на -ся (Reflexive Verbs with -ся).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Частина 2) та практичне застосування Зворотні дієслова на -ся (Reflexive Verbs with -ся). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (16.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (16.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (16.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Зворотні дієслова на -ся (Reflexive Verbs with -ся)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (16.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (16.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (16.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (16.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (16.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (16.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » (Контрольне завдання 16-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (16.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (16.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (16.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («зроблений»):",
                    "acceptedAnswers": [
                        "зроблений"
                    ],
                    "explanation": "The target keyword was: 【зроблений】"
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
        "objective": "Comprehensive mastery of Зворотні дієслова на -ся (Reflexive Verbs with -ся).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Частина 3) та практичне застосування Зворотні дієслова на -ся (Reflexive Verbs with -ся). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (16.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (16.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (16.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Зворотні дієслова на -ся (Reflexive Verbs with -ся)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (16.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (16.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (16.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (16.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (16.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (16.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » (Контрольне завдання 16-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (16.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (16.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (16.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («прочитаний»):",
                    "acceptedAnswers": [
                        "прочитаний"
                    ],
                    "explanation": "The target keyword was: 【прочитаний】"
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
        "objective": "Comprehensive mastery of Зворотні дієслова на -ся (Reflexive Verbs with -ся).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Частина 4) та практичне застосування Зворотні дієслова на -ся (Reflexive Verbs with -ся). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (16.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (16.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (16.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Зворотні дієслова на -ся (Reflexive Verbs with -ся)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (16.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (16.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (16.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (16.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (16.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (16.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » (Контрольне завдання 16-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (16.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (16.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (16.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («відкритий»):",
                    "acceptedAnswers": [
                        "відкритий"
                    ],
                    "explanation": "The target keyword was: 【відкритий】"
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
        "objective": "Comprehensive mastery of Зворотні дієслова на -ся (Reflexive Verbs with -ся).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Частина 5) та практичне застосування Зворотні дієслова на -ся (Reflexive Verbs with -ся). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (16.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (16.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (16.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Зворотні дієслова на -ся (Reflexive Verbs with -ся)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (16.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (16.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (16.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Зворотні дієслова з часткою -ся/-сь (Reflexive Verbs) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (16.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (16.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (16.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Зворотні дієслова на -ся (Reflexive Verbs with -ся) » (Контрольне завдання 16-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (16.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (16.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (16.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («закритий»):",
                    "acceptedAnswers": [
                        "закритий"
                    ],
                    "explanation": "The target keyword was: 【закритий】"
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
        "objective": "Comprehensive mastery of Умовний спосіб дієслів (Subjunctive Mood with би/б).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Частина 1) та практичне застосування Умовний спосіб дієслів (Subjunctive Mood with би/б). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (17.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (17.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (17.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Умовний спосіб дієслів (Subjunctive Mood with би/б)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Умовний спосіб дієслів (Subjunctive Mood with би/б) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (17.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (17.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (17.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (17.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (17.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (17.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Умовний спосіб дієслів (Subjunctive Mood with би/б) » (Контрольне завдання 17-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (17.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (17.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (17.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («який»):",
                    "acceptedAnswers": [
                        "який"
                    ],
                    "explanation": "The target keyword was: 【який】"
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
        "objective": "Comprehensive mastery of Умовний спосіб дієслів (Subjunctive Mood with би/б).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Частина 2) та практичне застосування Умовний спосіб дієслів (Subjunctive Mood with би/б). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (17.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (17.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (17.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Умовний спосіб дієслів (Subjunctive Mood with би/б)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Умовний спосіб дієслів (Subjunctive Mood with би/б) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (17.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (17.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (17.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (17.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (17.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (17.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Умовний спосіб дієслів (Subjunctive Mood with би/б) » (Контрольне завдання 17-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (17.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (17.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (17.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («яка»):",
                    "acceptedAnswers": [
                        "яка"
                    ],
                    "explanation": "The target keyword was: 【яка】"
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
        "objective": "Comprehensive mastery of Умовний спосіб дієслів (Subjunctive Mood with би/б).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Частина 3) та практичне застосування Умовний спосіб дієслів (Subjunctive Mood with би/б). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (17.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (17.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (17.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Умовний спосіб дієслів (Subjunctive Mood with би/б)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Умовний спосіб дієслів (Subjunctive Mood with би/б) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (17.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (17.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (17.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (17.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (17.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (17.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Умовний спосіб дієслів (Subjunctive Mood with би/б) » (Контрольне завдання 17-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (17.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (17.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (17.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («яке»):",
                    "acceptedAnswers": [
                        "яке"
                    ],
                    "explanation": "The target keyword was: 【яке】"
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
        "objective": "Comprehensive mastery of Умовний спосіб дієслів (Subjunctive Mood with би/б).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Частина 4) та практичне застосування Умовний спосіб дієслів (Subjunctive Mood with би/б). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (17.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (17.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (17.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Умовний спосіб дієслів (Subjunctive Mood with би/б)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Умовний спосіб дієслів (Subjunctive Mood with би/б) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (17.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (17.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (17.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (17.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (17.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (17.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Умовний спосіб дієслів (Subjunctive Mood with би/б) » (Контрольне завдання 17-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (17.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (17.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (17.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («які»):",
                    "acceptedAnswers": [
                        "які"
                    ],
                    "explanation": "The target keyword was: 【які】"
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
        "objective": "Comprehensive mastery of Умовний спосіб дієслів (Subjunctive Mood with би/б).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Частина 5) та практичне застосування Умовний спосіб дієслів (Subjunctive Mood with би/б). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (17.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (17.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (17.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Умовний спосіб дієслів (Subjunctive Mood with би/б)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Умовний спосіб дієслів (Subjunctive Mood with би/б) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (17.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (17.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (17.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Умовний спосіб дієслів із часткою би/б (Subjunctive) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (17.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (17.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (17.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Умовний спосіб дієслів (Subjunctive Mood with би/б) » (Контрольне завдання 17-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (17.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (17.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (17.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («чий»):",
                    "acceptedAnswers": [
                        "чий"
                    ],
                    "explanation": "The target keyword was: 【чий】"
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
        "objective": "Comprehensive mastery of Наказовий спосіб дієслів (Imperative Mood & Polite Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Частина 1) та практичне застосування Наказовий спосіб дієслів (Imperative Mood & Polite Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (18.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (18.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (18.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Наказовий спосіб дієслів (Imperative Mood & Polite Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (18.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (18.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (18.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (18.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (18.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (18.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » (Контрольне завдання 18-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (18.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (18.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (18.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («тому_що»):",
                    "acceptedAnswers": [
                        "тому_що"
                    ],
                    "explanation": "The target keyword was: 【тому_що】"
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
        "objective": "Comprehensive mastery of Наказовий спосіб дієслів (Imperative Mood & Polite Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Частина 2) та практичне застосування Наказовий спосіб дієслів (Imperative Mood & Polite Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (18.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (18.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (18.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Наказовий спосіб дієслів (Imperative Mood & Polite Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (18.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (18.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (18.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (18.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (18.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (18.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » (Контрольне завдання 18-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (18.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (18.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (18.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («якщо»):",
                    "acceptedAnswers": [
                        "якщо"
                    ],
                    "explanation": "The target keyword was: 【якщо】"
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
        "objective": "Comprehensive mastery of Наказовий спосіб дієслів (Imperative Mood & Polite Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Частина 3) та практичне застосування Наказовий спосіб дієслів (Imperative Mood & Polite Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (18.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (18.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (18.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Наказовий спосіб дієслів (Imperative Mood & Polite Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (18.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (18.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (18.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (18.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (18.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (18.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » (Контрольне завдання 18-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (18.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (18.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (18.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («хоча»):",
                    "acceptedAnswers": [
                        "хоча"
                    ],
                    "explanation": "The target keyword was: 【хоча】"
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
        "objective": "Comprehensive mastery of Наказовий спосіб дієслів (Imperative Mood & Polite Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Частина 4) та практичне застосування Наказовий спосіб дієслів (Imperative Mood & Polite Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (18.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (18.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (18.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Наказовий спосіб дієслів (Imperative Mood & Polite Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (18.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (18.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (18.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (18.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (18.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (18.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » (Контрольне завдання 18-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (18.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (18.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (18.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («щоб»):",
                    "acceptedAnswers": [
                        "щоб"
                    ],
                    "explanation": "The target keyword was: 【щоб】"
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
        "objective": "Comprehensive mastery of Наказовий спосіб дієслів (Imperative Mood & Polite Forms).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Частина 5) та практичне застосування Наказовий спосіб дієслів (Imperative Mood & Polite Forms). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (18.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (18.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (18.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Наказовий спосіб дієслів (Imperative Mood & Polite Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (18.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (18.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (18.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Наказовий спосіб та форми ввічливості (Imperative Mood) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (18.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (18.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (18.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Наказовий спосіб дієслів (Imperative Mood & Polite Forms) » (Контрольне завдання 18-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (18.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (18.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (18.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («через_те_що»):",
                    "acceptedAnswers": [
                        "через_те_що"
                    ],
                    "explanation": "The target keyword was: 【через_те_що】"
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
        "objective": "Comprehensive mastery of Дієприкметники та дієприслівники (Participles & Adverbial Participles).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієприкметники та дієприслівники (Participles & Gerunds) » (Частина 1) та практичне застосування Дієприкметники та дієприслівники (Participles & Adverbial Participles). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (19.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (19.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (19.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієприкметники та дієприслівники (Participles & Adverbial Participles)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (19.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (19.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (19.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієприкметники та дієприслівники (Participles & Gerunds) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (19.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (19.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (19.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » (Контрольне завдання 19-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (19.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (19.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (19.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («більший»):",
                    "acceptedAnswers": [
                        "більший"
                    ],
                    "explanation": "The target keyword was: 【більший】"
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
        "objective": "Comprehensive mastery of Дієприкметники та дієприслівники (Participles & Adverbial Participles).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієприкметники та дієприслівники (Participles & Gerunds) » (Частина 2) та практичне застосування Дієприкметники та дієприслівники (Participles & Adverbial Participles). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (19.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (19.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (19.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієприкметники та дієприслівники (Participles & Adverbial Participles)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (19.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (19.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (19.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієприкметники та дієприслівники (Participles & Gerunds) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (19.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (19.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (19.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » (Контрольне завдання 19-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (19.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (19.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (19.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («кращий»):",
                    "acceptedAnswers": [
                        "кращий"
                    ],
                    "explanation": "The target keyword was: 【кращий】"
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
        "objective": "Comprehensive mastery of Дієприкметники та дієприслівники (Participles & Adverbial Participles).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієприкметники та дієприслівники (Participles & Gerunds) » (Частина 3) та практичне застосування Дієприкметники та дієприслівники (Participles & Adverbial Participles). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (19.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (19.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (19.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієприкметники та дієприслівники (Participles & Adverbial Participles)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (19.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (19.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (19.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієприкметники та дієприслівники (Participles & Gerunds) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (19.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (19.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (19.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » (Контрольне завдання 19-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (19.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (19.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (19.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («найкращий»):",
                    "acceptedAnswers": [
                        "найкращий"
                    ],
                    "explanation": "The target keyword was: 【найкращий】"
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
        "objective": "Comprehensive mastery of Дієприкметники та дієприслівники (Participles & Adverbial Participles).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієприкметники та дієприслівники (Participles & Gerunds) » (Частина 4) та практичне застосування Дієприкметники та дієприслівники (Participles & Adverbial Participles). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (19.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (19.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (19.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієприкметники та дієприслівники (Participles & Adverbial Participles)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (19.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (19.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (19.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієприкметники та дієприслівники (Participles & Gerunds) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (19.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (19.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (19.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » (Контрольне завдання 19-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (19.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (19.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (19.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («найважливіший»):",
                    "acceptedAnswers": [
                        "найважливіший"
                    ],
                    "explanation": "The target keyword was: 【найважливіший】"
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
        "objective": "Comprehensive mastery of Дієприкметники та дієприслівники (Participles & Adverbial Participles).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Дієприкметники та дієприслівники (Participles & Gerunds) » (Частина 5) та практичне застосування Дієприкметники та дієприслівники (Participles & Adverbial Participles). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (19.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (19.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (19.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дієприкметники та дієприслівники (Participles & Adverbial Participles)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (19.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (19.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (19.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Дієприкметники та дієприслівники (Participles & Gerunds) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (19.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (19.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (19.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дієприкметники та дієприслівники (Participles & Adverbial Participles) » (Контрольне завдання 19-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (19.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (19.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (19.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («швидший»):",
                    "acceptedAnswers": [
                        "швидший"
                    ],
                    "explanation": "The target keyword was: 【швидший】"
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
        "objective": "Comprehensive mastery of Складнопідрядні речення (Complex Clauses of Cause & Purpose).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Складнопідрядні речення причини, мети та наслідку (Complex) » (Частина 1) та практичне застосування Складнопідрядні речення (Complex Clauses of Cause & Purpose). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (20.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (20.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (20.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Складнопідрядні речення (Complex Clauses of Cause & Purpose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (20.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (20.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (20.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Складнопідрядні речення причини, мети та наслідку (Complex) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (20.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (20.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (20.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » (Контрольне завдання 20-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (20.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (20.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (20.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («компанія»):",
                    "acceptedAnswers": [
                        "компанія"
                    ],
                    "explanation": "The target keyword was: 【компанія】"
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
        "objective": "Comprehensive mastery of Складнопідрядні речення (Complex Clauses of Cause & Purpose).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Складнопідрядні речення причини, мети та наслідку (Complex) » (Частина 2) та практичне застосування Складнопідрядні речення (Complex Clauses of Cause & Purpose). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (20.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (20.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (20.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Складнопідрядні речення (Complex Clauses of Cause & Purpose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (20.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (20.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (20.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Складнопідрядні речення причини, мети та наслідку (Complex) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (20.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (20.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (20.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » (Контрольне завдання 20-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (20.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (20.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (20.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («зустріч»):",
                    "acceptedAnswers": [
                        "зустріч"
                    ],
                    "explanation": "The target keyword was: 【зустріч】"
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
        "objective": "Comprehensive mastery of Складнопідрядні речення (Complex Clauses of Cause & Purpose).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Складнопідрядні речення причини, мети та наслідку (Complex) » (Частина 3) та практичне застосування Складнопідрядні речення (Complex Clauses of Cause & Purpose). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (20.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (20.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (20.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Складнопідрядні речення (Complex Clauses of Cause & Purpose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (20.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (20.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (20.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Складнопідрядні речення причини, мети та наслідку (Complex) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (20.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (20.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (20.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » (Контрольне завдання 20-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (20.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (20.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (20.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («проєкт»):",
                    "acceptedAnswers": [
                        "проєкт"
                    ],
                    "explanation": "The target keyword was: 【проєкт】"
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
        "objective": "Comprehensive mastery of Складнопідрядні речення (Complex Clauses of Cause & Purpose).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Складнопідрядні речення причини, мети та наслідку (Complex) » (Частина 4) та практичне застосування Складнопідрядні речення (Complex Clauses of Cause & Purpose). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (20.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (20.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (20.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Складнопідрядні речення (Complex Clauses of Cause & Purpose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (20.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (20.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (20.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Складнопідрядні речення причини, мети та наслідку (Complex) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (20.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (20.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (20.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » (Контрольне завдання 20-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (20.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (20.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (20.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («договір»):",
                    "acceptedAnswers": [
                        "договір"
                    ],
                    "explanation": "The target keyword was: 【договір】"
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
        "objective": "Comprehensive mastery of Складнопідрядні речення (Complex Clauses of Cause & Purpose).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Складнопідрядні речення причини, мети та наслідку (Complex) » (Частина 5) та практичне застосування Складнопідрядні речення (Complex Clauses of Cause & Purpose). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (20.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (20.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (20.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Складнопідрядні речення (Complex Clauses of Cause & Purpose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (20.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (20.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (20.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Складнопідрядні речення причини, мети та наслідку (Complex) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (20.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (20.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (20.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Складнопідрядні речення (Complex Clauses of Cause & Purpose) » (Контрольне завдання 20-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (20.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (20.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (20.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («звіт»):",
                    "acceptedAnswers": [
                        "звіт"
                    ],
                    "explanation": "The target keyword was: 【звіт】"
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
        "objective": "Comprehensive mastery of Допустові підрядні речення (Concessive Clauses).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Частина 1) та практичне застосування Допустові підрядні речення (Concessive Clauses). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (21.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (21.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (21.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Допустові підрядні речення (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Допустові підрядні речення (Concessive Clauses) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (21.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (21.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (21.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (21.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (21.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (21.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Допустові підрядні речення (Concessive Clauses) » (Контрольне завдання 21-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (21.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (21.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (21.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («лікарня»):",
                    "acceptedAnswers": [
                        "лікарня"
                    ],
                    "explanation": "The target keyword was: 【лікарня】"
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
        "objective": "Comprehensive mastery of Допустові підрядні речення (Concessive Clauses).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Частина 2) та практичне застосування Допустові підрядні речення (Concessive Clauses). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (21.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (21.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (21.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Допустові підрядні речення (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Допустові підрядні речення (Concessive Clauses) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (21.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (21.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (21.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (21.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (21.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (21.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Допустові підрядні речення (Concessive Clauses) » (Контрольне завдання 21-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (21.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (21.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (21.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («лікар»):",
                    "acceptedAnswers": [
                        "лікар"
                    ],
                    "explanation": "The target keyword was: 【лікар】"
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
        "objective": "Comprehensive mastery of Допустові підрядні речення (Concessive Clauses).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Частина 3) та практичне застосування Допустові підрядні речення (Concessive Clauses). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (21.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (21.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (21.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Допустові підрядні речення (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Допустові підрядні речення (Concessive Clauses) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (21.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (21.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (21.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (21.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (21.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (21.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Допустові підрядні речення (Concessive Clauses) » (Контрольне завдання 21-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (21.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (21.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (21.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ліки»):",
                    "acceptedAnswers": [
                        "ліки"
                    ],
                    "explanation": "The target keyword was: 【ліки】"
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
        "objective": "Comprehensive mastery of Допустові підрядні речення (Concessive Clauses).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Частина 4) та практичне застосування Допустові підрядні речення (Concessive Clauses). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (21.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (21.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (21.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Допустові підрядні речення (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Допустові підрядні речення (Concessive Clauses) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (21.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (21.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (21.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (21.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (21.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (21.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Допустові підрядні речення (Concessive Clauses) » (Контрольне завдання 21-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (21.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (21.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (21.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («здоров'я»):",
                    "acceptedAnswers": [
                        "здоров'я"
                    ],
                    "explanation": "The target keyword was: 【здоров'я】"
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
        "objective": "Comprehensive mastery of Допустові підрядні речення (Concessive Clauses).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Частина 5) та практичне застосування Допустові підрядні речення (Concessive Clauses). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (21.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (21.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (21.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Допустові підрядні речення (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Допустові підрядні речення (Concessive Clauses) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (21.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (21.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (21.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Допустові речення: хоча, дарма що, незважаючи на (Concessives) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (21.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (21.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (21.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Допустові підрядні речення (Concessive Clauses) » (Контрольне завдання 21-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (21.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (21.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (21.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («лікування»):",
                    "acceptedAnswers": [
                        "лікування"
                    ],
                    "explanation": "The target keyword was: 【лікування】"
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
        "objective": "Comprehensive mastery of Непряма мова й цитування (Indirect Reported Speech).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Непряма мова та трансформація часових форм (Reported Speech) » (Частина 1) та практичне застосування Непряма мова й цитування (Indirect Reported Speech). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (22.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (22.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (22.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Непряма мова й цитування (Indirect Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Непряма мова й цитування (Indirect Reported Speech) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (22.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (22.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (22.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Непряма мова та трансформація часових форм (Reported Speech) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (22.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (22.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (22.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Непряма мова й цитування (Indirect Reported Speech) » (Контрольне завдання 22-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (22.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (22.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (22.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («борщ»):",
                    "acceptedAnswers": [
                        "борщ"
                    ],
                    "explanation": "The target keyword was: 【борщ】"
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
        "objective": "Comprehensive mastery of Непряма мова й цитування (Indirect Reported Speech).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Непряма мова та трансформація часових форм (Reported Speech) » (Частина 2) та практичне застосування Непряма мова й цитування (Indirect Reported Speech). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (22.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (22.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (22.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Непряма мова й цитування (Indirect Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Непряма мова й цитування (Indirect Reported Speech) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (22.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (22.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (22.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Непряма мова та трансформація часових форм (Reported Speech) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (22.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (22.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (22.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Непряма мова й цитування (Indirect Reported Speech) » (Контрольне завдання 22-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (22.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (22.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (22.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («вареники»):",
                    "acceptedAnswers": [
                        "вареники"
                    ],
                    "explanation": "The target keyword was: 【вареники】"
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
        "objective": "Comprehensive mastery of Непряма мова й цитування (Indirect Reported Speech).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Непряма мова та трансформація часових форм (Reported Speech) » (Частина 3) та практичне застосування Непряма мова й цитування (Indirect Reported Speech). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (22.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (22.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (22.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Непряма мова й цитування (Indirect Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Непряма мова й цитування (Indirect Reported Speech) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (22.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (22.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (22.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Непряма мова та трансформація часових форм (Reported Speech) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (22.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (22.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (22.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Непряма мова й цитування (Indirect Reported Speech) » (Контрольне завдання 22-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (22.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (22.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (22.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («кулінарія»):",
                    "acceptedAnswers": [
                        "кулінарія"
                    ],
                    "explanation": "The target keyword was: 【кулінарія】"
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
        "objective": "Comprehensive mastery of Непряма мова й цитування (Indirect Reported Speech).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Непряма мова та трансформація часових форм (Reported Speech) » (Частина 4) та практичне застосування Непряма мова й цитування (Indirect Reported Speech). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (22.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (22.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (22.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Непряма мова й цитування (Indirect Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Непряма мова й цитування (Indirect Reported Speech) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (22.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (22.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (22.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Непряма мова та трансформація часових форм (Reported Speech) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (22.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (22.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (22.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Непряма мова й цитування (Indirect Reported Speech) » (Контрольне завдання 22-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (22.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (22.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (22.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («гостинність»):",
                    "acceptedAnswers": [
                        "гостинність"
                    ],
                    "explanation": "The target keyword was: 【гостинність】"
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
        "objective": "Comprehensive mastery of Непряма мова й цитування (Indirect Reported Speech).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Непряма мова та трансформація часових форм (Reported Speech) » (Частина 5) та практичне застосування Непряма мова й цитування (Indirect Reported Speech). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (22.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (22.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (22.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Непряма мова й цитування (Indirect Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Непряма мова й цитування (Indirect Reported Speech) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (22.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (22.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (22.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Непряма мова та трансформація часових форм (Reported Speech) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (22.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (22.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (22.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Непряма мова й цитування (Indirect Reported Speech) » (Контрольне завдання 22-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (22.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (22.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (22.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («трапеза»):",
                    "acceptedAnswers": [
                        "трапеза"
                    ],
                    "explanation": "The target keyword was: 【трапеза】"
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
        "objective": "Comprehensive mastery of Ділове листування та етикет (Business Communication).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ділове листування, резюме та діловий етикет (Business) » (Частина 1) та практичне застосування Ділове листування та етикет (Business Communication). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (23.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (23.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (23.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ділове листування та етикет (Business Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ділове листування та етикет (Business Communication) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (23.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (23.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (23.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ділове листування, резюме та діловий етикет (Business) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (23.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (23.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (23.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ділове листування та етикет (Business Communication) » (Контрольне завдання 23-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (23.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (23.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (23.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («театр»):",
                    "acceptedAnswers": [
                        "театр"
                    ],
                    "explanation": "The target keyword was: 【театр】"
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
        "objective": "Comprehensive mastery of Ділове листування та етикет (Business Communication).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ділове листування, резюме та діловий етикет (Business) » (Частина 2) та практичне застосування Ділове листування та етикет (Business Communication). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (23.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (23.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (23.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ділове листування та етикет (Business Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ділове листування та етикет (Business Communication) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (23.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (23.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (23.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ділове листування, резюме та діловий етикет (Business) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (23.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (23.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (23.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ділове листування та етикет (Business Communication) » (Контрольне завдання 23-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (23.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (23.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (23.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («музика»):",
                    "acceptedAnswers": [
                        "музика"
                    ],
                    "explanation": "The target keyword was: 【музика】"
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
        "objective": "Comprehensive mastery of Ділове листування та етикет (Business Communication).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ділове листування, резюме та діловий етикет (Business) » (Частина 3) та практичне застосування Ділове листування та етикет (Business Communication). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (23.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (23.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (23.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ділове листування та етикет (Business Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ділове листування та етикет (Business Communication) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (23.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (23.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (23.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ділове листування, резюме та діловий етикет (Business) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (23.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (23.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (23.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ділове листування та етикет (Business Communication) » (Контрольне завдання 23-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (23.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (23.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (23.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («живопис»):",
                    "acceptedAnswers": [
                        "живопис"
                    ],
                    "explanation": "The target keyword was: 【живопис】"
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
        "objective": "Comprehensive mastery of Ділове листування та етикет (Business Communication).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ділове листування, резюме та діловий етикет (Business) » (Частина 4) та практичне застосування Ділове листування та етикет (Business Communication). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (23.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (23.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (23.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ділове листування та етикет (Business Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ділове листування та етикет (Business Communication) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (23.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (23.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (23.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ділове листування, резюме та діловий етикет (Business) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (23.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (23.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (23.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ділове листування та етикет (Business Communication) » (Контрольне завдання 23-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (23.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (23.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (23.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («кіно»):",
                    "acceptedAnswers": [
                        "кіно"
                    ],
                    "explanation": "The target keyword was: 【кіно】"
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
        "objective": "Comprehensive mastery of Ділове листування та етикет (Business Communication).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Ділове листування, резюме та діловий етикет (Business) » (Частина 5) та практичне застосування Ділове листування та етикет (Business Communication). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (23.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (23.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (23.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Ділове листування та етикет (Business Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Ділове листування та етикет (Business Communication) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (23.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (23.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (23.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Ділове листування, резюме та діловий етикет (Business) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (23.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (23.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (23.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Ділове листування та етикет (Business Communication) » (Контрольне завдання 23-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (23.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (23.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (23.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («мистецтво»):",
                    "acceptedAnswers": [
                        "мистецтво"
                    ],
                    "explanation": "The target keyword was: 【мистецтво】"
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
        "objective": "Comprehensive mastery of Медична термінологія та здоров'я (Medical Discourse).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Медична термінологія та консультації (Healthcare) » (Частина 1) та практичне застосування Медична термінологія та здоров'я (Medical Discourse). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (24.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (24.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (24.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Медична термінологія та здоров'я (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Медична термінологія та здоров'я (Medical Discourse) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (24.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (24.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (24.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Медична термінологія та консультації (Healthcare) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (24.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (24.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (24.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Медична термінологія та здоров'я (Medical Discourse) » (Контрольне завдання 24-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (24.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (24.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (24.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («банк»):",
                    "acceptedAnswers": [
                        "банк"
                    ],
                    "explanation": "The target keyword was: 【банк】"
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
        "objective": "Comprehensive mastery of Медична термінологія та здоров'я (Medical Discourse).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Медична термінологія та консультації (Healthcare) » (Частина 2) та практичне застосування Медична термінологія та здоров'я (Medical Discourse). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (24.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (24.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (24.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Медична термінологія та здоров'я (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Медична термінологія та здоров'я (Medical Discourse) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (24.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (24.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (24.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Медична термінологія та консультації (Healthcare) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (24.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (24.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (24.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Медична термінологія та здоров'я (Medical Discourse) » (Контрольне завдання 24-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (24.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (24.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (24.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («рахунок»):",
                    "acceptedAnswers": [
                        "рахунок"
                    ],
                    "explanation": "The target keyword was: 【рахунок】"
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
        "objective": "Comprehensive mastery of Медична термінологія та здоров'я (Medical Discourse).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Медична термінологія та консультації (Healthcare) » (Частина 3) та практичне застосування Медична термінологія та здоров'я (Medical Discourse). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (24.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (24.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (24.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Медична термінологія та здоров'я (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Медична термінологія та здоров'я (Medical Discourse) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (24.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (24.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (24.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Медична термінологія та консультації (Healthcare) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (24.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (24.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (24.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Медична термінологія та здоров'я (Medical Discourse) » (Контрольне завдання 24-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (24.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (24.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (24.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («кредит»):",
                    "acceptedAnswers": [
                        "кредит"
                    ],
                    "explanation": "The target keyword was: 【кредит】"
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
        "objective": "Comprehensive mastery of Медична термінологія та здоров'я (Medical Discourse).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Медична термінологія та консультації (Healthcare) » (Частина 4) та практичне застосування Медична термінологія та здоров'я (Medical Discourse). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (24.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (24.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (24.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Медична термінологія та здоров'я (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Медична термінологія та здоров'я (Medical Discourse) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (24.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (24.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (24.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Медична термінологія та консультації (Healthcare) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (24.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (24.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (24.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Медична термінологія та здоров'я (Medical Discourse) » (Контрольне завдання 24-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (24.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (24.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (24.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («інвестиції»):",
                    "acceptedAnswers": [
                        "інвестиції"
                    ],
                    "explanation": "The target keyword was: 【інвестиції】"
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
        "objective": "Comprehensive mastery of Медична термінологія та здоров'я (Medical Discourse).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Медична термінологія та консультації (Healthcare) » (Частина 5) та практичне застосування Медична термінологія та здоров'я (Medical Discourse). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (24.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (24.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (24.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Медична термінологія та здоров'я (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Медична термінологія та здоров'я (Medical Discourse) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (24.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (24.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (24.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Медична термінологія та консультації (Healthcare) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (24.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (24.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (24.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Медична термінологія та здоров'я (Medical Discourse) » (Контрольне завдання 24-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (24.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (24.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (24.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («фінанси»):",
                    "acceptedAnswers": [
                        "фінанси"
                    ],
                    "explanation": "The target keyword was: 【фінанси】"
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
        "objective": "Comprehensive mastery of Правова термінологія та закони (Legal Terminology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Цивільне та кримінальне право, договори (Legal) » (Частина 1) та практичне застосування Правова термінологія та закони (Legal Terminology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (25.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (25.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (25.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Правова термінологія та закони (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Правова термінологія та закони (Legal Terminology) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (25.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (25.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (25.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Цивільне та кримінальне право, договори (Legal) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (25.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (25.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (25.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Правова термінологія та закони (Legal Terminology) » (Контрольне завдання 25-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (25.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (25.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (25.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («довкілля»):",
                    "acceptedAnswers": [
                        "довкілля"
                    ],
                    "explanation": "The target keyword was: 【довкілля】"
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
        "objective": "Comprehensive mastery of Правова термінологія та закони (Legal Terminology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Цивільне та кримінальне право, договори (Legal) » (Частина 2) та практичне застосування Правова термінологія та закони (Legal Terminology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (25.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (25.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (25.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Правова термінологія та закони (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Правова термінологія та закони (Legal Terminology) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (25.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (25.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (25.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Цивільне та кримінальне право, договори (Legal) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (25.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (25.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (25.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Правова термінологія та закони (Legal Terminology) » (Контрольне завдання 25-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (25.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (25.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (25.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («екологія»):",
                    "acceptedAnswers": [
                        "екологія"
                    ],
                    "explanation": "The target keyword was: 【екологія】"
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
        "objective": "Comprehensive mastery of Правова термінологія та закони (Legal Terminology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Цивільне та кримінальне право, договори (Legal) » (Частина 3) та практичне застосування Правова термінологія та закони (Legal Terminology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (25.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (25.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (25.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Правова термінологія та закони (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Правова термінологія та закони (Legal Terminology) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (25.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (25.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (25.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Цивільне та кримінальне право, договори (Legal) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (25.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (25.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (25.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Правова термінологія та закони (Legal Terminology) » (Контрольне завдання 25-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (25.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (25.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (25.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («клімат»):",
                    "acceptedAnswers": [
                        "клімат"
                    ],
                    "explanation": "The target keyword was: 【клімат】"
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
        "objective": "Comprehensive mastery of Правова термінологія та закони (Legal Terminology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Цивільне та кримінальне право, договори (Legal) » (Частина 4) та практичне застосування Правова термінологія та закони (Legal Terminology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (25.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (25.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (25.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Правова термінологія та закони (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Правова термінологія та закони (Legal Terminology) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (25.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (25.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (25.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Цивільне та кримінальне право, договори (Legal) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (25.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (25.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (25.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Правова термінологія та закони (Legal Terminology) » (Контрольне завдання 25-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (25.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (25.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (25.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («природа»):",
                    "acceptedAnswers": [
                        "природа"
                    ],
                    "explanation": "The target keyword was: 【природа】"
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
        "objective": "Comprehensive mastery of Правова термінологія та закони (Legal Terminology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Цивільне та кримінальне право, договори (Legal) » (Частина 5) та практичне застосування Правова термінологія та закони (Legal Terminology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (25.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (25.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (25.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Правова термінологія та закони (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Правова термінологія та закони (Legal Terminology) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (25.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (25.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (25.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Цивільне та кримінальне право, договори (Legal) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (25.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (25.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (25.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Правова термінологія та закони (Legal Terminology) » (Контрольне завдання 25-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (25.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (25.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (25.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («захист»):",
                    "acceptedAnswers": [
                        "захист"
                    ],
                    "explanation": "The target keyword was: 【захист】"
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
        "objective": "Comprehensive mastery of Банківська справа та фінанси (Banking & Financial Markets).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Банківська справа, інвестиції та макроекономіка (Finance) » (Частина 1) та практичне застосування Банківська справа та фінанси (Banking & Financial Markets). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (26.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (26.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (26.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Банківська справа та фінанси (Banking & Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Банківська справа та фінанси (Banking & Financial Markets) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (26.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (26.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (26.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Банківська справа, інвестиції та макроекономіка (Finance) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (26.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (26.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (26.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Банківська справа та фінанси (Banking & Financial Markets) » (Контрольне завдання 26-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (26.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (26.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (26.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («конституція»):",
                    "acceptedAnswers": [
                        "конституція"
                    ],
                    "explanation": "The target keyword was: 【конституція】"
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
        "objective": "Comprehensive mastery of Банківська справа та фінанси (Banking & Financial Markets).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Банківська справа, інвестиції та макроекономіка (Finance) » (Частина 2) та практичне застосування Банківська справа та фінанси (Banking & Financial Markets). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (26.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (26.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (26.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Банківська справа та фінанси (Banking & Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Банківська справа та фінанси (Banking & Financial Markets) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (26.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (26.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (26.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Банківська справа, інвестиції та макроекономіка (Finance) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (26.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (26.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (26.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Банківська справа та фінанси (Banking & Financial Markets) » (Контрольне завдання 26-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (26.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (26.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (26.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («суд»):",
                    "acceptedAnswers": [
                        "суд"
                    ],
                    "explanation": "The target keyword was: 【суд】"
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
        "objective": "Comprehensive mastery of Банківська справа та фінанси (Banking & Financial Markets).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Банківська справа, інвестиції та макроекономіка (Finance) » (Частина 3) та практичне застосування Банківська справа та фінанси (Banking & Financial Markets). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (26.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (26.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (26.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Банківська справа та фінанси (Banking & Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Банківська справа та фінанси (Banking & Financial Markets) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (26.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (26.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (26.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Банківська справа, інвестиції та макроекономіка (Finance) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (26.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (26.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (26.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Банківська справа та фінанси (Banking & Financial Markets) » (Контрольне завдання 26-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (26.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (26.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (26.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («закон»):",
                    "acceptedAnswers": [
                        "закон"
                    ],
                    "explanation": "The target keyword was: 【закон】"
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
        "objective": "Comprehensive mastery of Банківська справа та фінанси (Banking & Financial Markets).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Банківська справа, інвестиції та макроекономіка (Finance) » (Частина 4) та практичне застосування Банківська справа та фінанси (Banking & Financial Markets). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (26.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (26.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (26.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Банківська справа та фінанси (Banking & Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Банківська справа та фінанси (Banking & Financial Markets) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (26.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (26.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (26.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Банківська справа, інвестиції та макроекономіка (Finance) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (26.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (26.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (26.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Банківська справа та фінанси (Banking & Financial Markets) » (Контрольне завдання 26-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (26.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (26.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (26.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («право»):",
                    "acceptedAnswers": [
                        "право"
                    ],
                    "explanation": "The target keyword was: 【право】"
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
        "objective": "Comprehensive mastery of Банківська справа та фінанси (Banking & Financial Markets).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Банківська справа, інвестиції та макроекономіка (Finance) » (Частина 5) та практичне застосування Банківська справа та фінанси (Banking & Financial Markets). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (26.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (26.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (26.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Банківська справа та фінанси (Banking & Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Банківська справа та фінанси (Banking & Financial Markets) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (26.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (26.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (26.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Банківська справа, інвестиції та макроекономіка (Finance) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (26.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (26.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (26.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Банківська справа та фінанси (Banking & Financial Markets) » (Контрольне завдання 26-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (26.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (26.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (26.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («справедливість»):",
                    "acceptedAnswers": [
                        "справедливість"
                    ],
                    "explanation": "The target keyword was: 【справедливість】"
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
        "objective": "Comprehensive mastery of Класична література та поезія (Ukrainian Literature & Poetics).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська класична література та поетика (Literature) » (Частина 1) та практичне застосування Класична література та поезія (Ukrainian Literature & Poetics). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (27.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (27.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (27.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Класична література та поезія (Ukrainian Literature & Poetics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Класична література та поезія (Ukrainian Literature & Poetics) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (27.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (27.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (27.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська класична література та поетика (Literature) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (27.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (27.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (27.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Класична література та поезія (Ukrainian Literature & Poetics) » (Контрольне завдання 27-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (27.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (27.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (27.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («література»):",
                    "acceptedAnswers": [
                        "література"
                    ],
                    "explanation": "The target keyword was: 【література】"
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
        "objective": "Comprehensive mastery of Класична література та поезія (Ukrainian Literature & Poetics).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська класична література та поетика (Literature) » (Частина 2) та практичне застосування Класична література та поезія (Ukrainian Literature & Poetics). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (27.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (27.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (27.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Класична література та поезія (Ukrainian Literature & Poetics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Класична література та поезія (Ukrainian Literature & Poetics) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (27.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (27.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (27.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська класична література та поетика (Literature) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (27.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (27.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (27.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Класична література та поезія (Ukrainian Literature & Poetics) » (Контрольне завдання 27-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (27.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (27.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (27.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («поезія»):",
                    "acceptedAnswers": [
                        "поезія"
                    ],
                    "explanation": "The target keyword was: 【поезія】"
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
        "objective": "Comprehensive mastery of Класична література та поезія (Ukrainian Literature & Poetics).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська класична література та поетика (Literature) » (Частина 3) та практичне застосування Класична література та поезія (Ukrainian Literature & Poetics). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (27.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (27.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (27.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Класична література та поезія (Ukrainian Literature & Poetics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Класична література та поезія (Ukrainian Literature & Poetics) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (27.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (27.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (27.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська класична література та поетика (Literature) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (27.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (27.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (27.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Класична література та поезія (Ukrainian Literature & Poetics) » (Контрольне завдання 27-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (27.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (27.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (27.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («роман»):",
                    "acceptedAnswers": [
                        "роман"
                    ],
                    "explanation": "The target keyword was: 【роман】"
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
        "objective": "Comprehensive mastery of Класична література та поезія (Ukrainian Literature & Poetics).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська класична література та поетика (Literature) » (Частина 4) та практичне застосування Класична література та поезія (Ukrainian Literature & Poetics). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (27.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (27.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (27.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Класична література та поезія (Ukrainian Literature & Poetics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Класична література та поезія (Ukrainian Literature & Poetics) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (27.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (27.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (27.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська класична література та поетика (Literature) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (27.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (27.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (27.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Класична література та поезія (Ukrainian Literature & Poetics) » (Контрольне завдання 27-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (27.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (27.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (27.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («поет»):",
                    "acceptedAnswers": [
                        "поет"
                    ],
                    "explanation": "The target keyword was: 【поет】"
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
        "objective": "Comprehensive mastery of Класична література та поезія (Ukrainian Literature & Poetics).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Українська класична література та поетика (Literature) » (Частина 5) та практичне застосування Класична література та поезія (Ukrainian Literature & Poetics). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (27.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (27.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (27.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Класична література та поезія (Ukrainian Literature & Poetics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Класична література та поезія (Ukrainian Literature & Poetics) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (27.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (27.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (27.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Українська класична література та поетика (Literature) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (27.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (27.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (27.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Класична література та поезія (Ukrainian Literature & Poetics) » (Контрольне завдання 27-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (27.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (27.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (27.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («класика»):",
                    "acceptedAnswers": [
                        "класика"
                    ],
                    "explanation": "The target keyword was: 【класика】"
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
        "objective": "Comprehensive mastery of Захист довкілля та екологія (Ecology & Sustainable Energy).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Екологія, захист довкілля та енергетика (Ecology) » (Частина 1) та практичне застосування Захист довкілля та екологія (Ecology & Sustainable Energy). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (28.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (28.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (28.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Захист довкілля та екологія (Ecology & Sustainable Energy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Захист довкілля та екологія (Ecology & Sustainable Energy) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (28.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (28.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (28.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Екологія, захист довкілля та енергетика (Ecology) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (28.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (28.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (28.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Захист довкілля та екологія (Ecology & Sustainable Energy) » (Контрольне завдання 28-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (28.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (28.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (28.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («новини»):",
                    "acceptedAnswers": [
                        "новини"
                    ],
                    "explanation": "The target keyword was: 【новини】"
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
        "objective": "Comprehensive mastery of Захист довкілля та екологія (Ecology & Sustainable Energy).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Екологія, захист довкілля та енергетика (Ecology) » (Частина 2) та практичне застосування Захист довкілля та екологія (Ecology & Sustainable Energy). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (28.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (28.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (28.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Захист довкілля та екологія (Ecology & Sustainable Energy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Захист довкілля та екологія (Ecology & Sustainable Energy) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (28.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (28.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (28.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Екологія, захист довкілля та енергетика (Ecology) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (28.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (28.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (28.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Захист довкілля та екологія (Ecology & Sustainable Energy) » (Контрольне завдання 28-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (28.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (28.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (28.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («журналістика»):",
                    "acceptedAnswers": [
                        "журналістика"
                    ],
                    "explanation": "The target keyword was: 【журналістика】"
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
        "objective": "Comprehensive mastery of Захист довкілля та екологія (Ecology & Sustainable Energy).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Екологія, захист довкілля та енергетика (Ecology) » (Частина 3) та практичне застосування Захист довкілля та екологія (Ecology & Sustainable Energy). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (28.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (28.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (28.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Захист довкілля та екологія (Ecology & Sustainable Energy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Захист довкілля та екологія (Ecology & Sustainable Energy) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (28.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (28.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (28.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Екологія, захист довкілля та енергетика (Ecology) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (28.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (28.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (28.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Захист довкілля та екологія (Ecology & Sustainable Energy) » (Контрольне завдання 28-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (28.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (28.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (28.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («редактор»):",
                    "acceptedAnswers": [
                        "редактор"
                    ],
                    "explanation": "The target keyword was: 【редактор】"
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
        "objective": "Comprehensive mastery of Захист довкілля та екологія (Ecology & Sustainable Energy).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Екологія, захист довкілля та енергетика (Ecology) » (Частина 4) та практичне застосування Захист довкілля та екологія (Ecology & Sustainable Energy). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (28.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (28.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (28.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Захист довкілля та екологія (Ecology & Sustainable Energy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Захист довкілля та екологія (Ecology & Sustainable Energy) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (28.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (28.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (28.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Екологія, захист довкілля та енергетика (Ecology) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (28.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (28.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (28.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Захист довкілля та екологія (Ecology & Sustainable Energy) » (Контрольне завдання 28-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (28.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (28.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (28.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («медіа»):",
                    "acceptedAnswers": [
                        "медіа"
                    ],
                    "explanation": "The target keyword was: 【медіа】"
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
        "objective": "Comprehensive mastery of Захист довкілля та екологія (Ecology & Sustainable Energy).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Екологія, захист довкілля та енергетика (Ecology) » (Частина 5) та практичне застосування Захист довкілля та екологія (Ecology & Sustainable Energy). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (28.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (28.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (28.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Захист довкілля та екологія (Ecology & Sustainable Energy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Захист довкілля та екологія (Ecology & Sustainable Energy) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (28.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (28.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (28.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Екологія, захист довкілля та енергетика (Ecology) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (28.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (28.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (28.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Захист довкілля та екологія (Ecology & Sustainable Energy) » (Контрольне завдання 28-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (28.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (28.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (28.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («публікація»):",
                    "acceptedAnswers": [
                        "публікація"
                    ],
                    "explanation": "The target keyword was: 【публікація】"
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
        "objective": "Comprehensive mastery of Парламентаризм і державотворення (Governance & Parliament).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Парламентаризм та конституційне право (Governance) » (Частина 1) та практичне застосування Парламентаризм і державотворення (Governance & Parliament). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (29.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (29.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (29.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Парламентаризм і державотворення (Governance & Parliament)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Парламентаризм і державотворення (Governance & Parliament) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (29.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (29.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (29.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Парламентаризм та конституційне право (Governance) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (29.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (29.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (29.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Парламентаризм і державотворення (Governance & Parliament) » (Контрольне завдання 29-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (29.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (29.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (29.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («філософія»):",
                    "acceptedAnswers": [
                        "філософія"
                    ],
                    "explanation": "The target keyword was: 【філософія】"
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
        "objective": "Comprehensive mastery of Парламентаризм і державотворення (Governance & Parliament).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Парламентаризм та конституційне право (Governance) » (Частина 2) та практичне застосування Парламентаризм і державотворення (Governance & Parliament). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (29.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (29.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (29.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Парламентаризм і державотворення (Governance & Parliament)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Парламентаризм і державотворення (Governance & Parliament) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (29.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (29.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (29.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Парламентаризм та конституційне право (Governance) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (29.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (29.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (29.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Парламентаризм і державотворення (Governance & Parliament) » (Контрольне завдання 29-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (29.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (29.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (29.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («етика»):",
                    "acceptedAnswers": [
                        "етика"
                    ],
                    "explanation": "The target keyword was: 【етика】"
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
        "objective": "Comprehensive mastery of Парламентаризм і державотворення (Governance & Parliament).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Парламентаризм та конституційне право (Governance) » (Частина 3) та практичне застосування Парламентаризм і державотворення (Governance & Parliament). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (29.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (29.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (29.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Парламентаризм і державотворення (Governance & Parliament)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Парламентаризм і державотворення (Governance & Parliament) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (29.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (29.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (29.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Парламентаризм та конституційне право (Governance) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (29.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (29.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (29.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Парламентаризм і державотворення (Governance & Parliament) » (Контрольне завдання 29-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (29.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (29.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (29.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («мораль»):",
                    "acceptedAnswers": [
                        "мораль"
                    ],
                    "explanation": "The target keyword was: 【мораль】"
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
        "objective": "Comprehensive mastery of Парламентаризм і державотворення (Governance & Parliament).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Парламентаризм та конституційне право (Governance) » (Частина 4) та практичне застосування Парламентаризм і державотворення (Governance & Parliament). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (29.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (29.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (29.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Парламентаризм і державотворення (Governance & Parliament)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Парламентаризм і державотворення (Governance & Parliament) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (29.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (29.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (29.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Парламентаризм та конституційне право (Governance) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (29.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (29.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (29.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Парламентаризм і державотворення (Governance & Parliament) » (Контрольне завдання 29-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (29.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (29.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (29.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («свідомість»):",
                    "acceptedAnswers": [
                        "свідомість"
                    ],
                    "explanation": "The target keyword was: 【свідомість】"
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
        "objective": "Comprehensive mastery of Парламентаризм і державотворення (Governance & Parliament).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Парламентаризм та конституційне право (Governance) » (Частина 5) та практичне застосування Парламентаризм і державотворення (Governance & Parliament). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (29.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (29.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (29.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Парламентаризм і державотворення (Governance & Parliament)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Парламентаризм і державотворення (Governance & Parliament) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (29.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (29.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (29.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Парламентаризм та конституційне право (Governance) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (29.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (29.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (29.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Парламентаризм і державотворення (Governance & Parliament) » (Контрольне завдання 29-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (29.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (29.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (29.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («істина»):",
                    "acceptedAnswers": [
                        "істина"
                    ],
                    "explanation": "The target keyword was: 【істина】"
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
        "objective": "Comprehensive mastery of Філософська думка та етика (Philosophy & Intellectual History).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Філософська думка та інтелектуальна історія (Philosophy) » (Частина 1) та практичне застосування Філософська думка та етика (Philosophy & Intellectual History). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (30.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (30.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (30.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Філософська думка та етика (Philosophy & Intellectual History)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Філософська думка та етика (Philosophy & Intellectual History) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (30.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (30.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (30.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Філософська думка та інтелектуальна історія (Philosophy) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (30.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (30.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (30.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Філософська думка та етика (Philosophy & Intellectual History) » (Контрольне завдання 30-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (30.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (30.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (30.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («наука»):",
                    "acceptedAnswers": [
                        "наука"
                    ],
                    "explanation": "The target keyword was: 【наука】"
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
        "objective": "Comprehensive mastery of Філософська думка та етика (Philosophy & Intellectual History).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Філософська думка та інтелектуальна історія (Philosophy) » (Частина 2) та практичне застосування Філософська думка та етика (Philosophy & Intellectual History). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (30.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (30.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (30.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Філософська думка та етика (Philosophy & Intellectual History)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Філософська думка та етика (Philosophy & Intellectual History) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (30.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (30.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (30.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Філософська думка та інтелектуальна історія (Philosophy) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (30.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (30.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (30.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Філософська думка та етика (Philosophy & Intellectual History) » (Контрольне завдання 30-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (30.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (30.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (30.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («технології»):",
                    "acceptedAnswers": [
                        "технології"
                    ],
                    "explanation": "The target keyword was: 【технології】"
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
        "objective": "Comprehensive mastery of Філософська думка та етика (Philosophy & Intellectual History).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Філософська думка та інтелектуальна історія (Philosophy) » (Частина 3) та практичне застосування Філософська думка та етика (Philosophy & Intellectual History). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (30.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (30.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (30.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Філософська думка та етика (Philosophy & Intellectual History)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Філософська думка та етика (Philosophy & Intellectual History) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (30.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (30.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (30.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Філософська думка та інтелектуальна історія (Philosophy) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (30.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (30.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (30.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Філософська думка та етика (Philosophy & Intellectual History) » (Контрольне завдання 30-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (30.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (30.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (30.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («дослідження»):",
                    "acceptedAnswers": [
                        "дослідження"
                    ],
                    "explanation": "The target keyword was: 【дослідження】"
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
        "objective": "Comprehensive mastery of Філософська думка та етика (Philosophy & Intellectual History).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Філософська думка та інтелектуальна історія (Philosophy) » (Частина 4) та практичне застосування Філософська думка та етика (Philosophy & Intellectual History). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (30.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (30.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (30.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Філософська думка та етика (Philosophy & Intellectual History)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Філософська думка та етика (Philosophy & Intellectual History) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (30.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (30.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (30.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Філософська думка та інтелектуальна історія (Philosophy) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (30.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (30.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (30.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Філософська думка та етика (Philosophy & Intellectual History) » (Контрольне завдання 30-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (30.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (30.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (30.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («відкриття»):",
                    "acceptedAnswers": [
                        "відкриття"
                    ],
                    "explanation": "The target keyword was: 【відкриття】"
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
        "objective": "Comprehensive mastery of Філософська думка та етика (Philosophy & Intellectual History).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Філософська думка та інтелектуальна історія (Philosophy) » (Частина 5) та практичне застосування Філософська думка та етика (Philosophy & Intellectual History). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (30.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (30.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (30.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Філософська думка та етика (Philosophy & Intellectual History)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Філософська думка та етика (Philosophy & Intellectual History) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (30.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (30.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (30.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Філософська думка та інтелектуальна історія (Philosophy) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (30.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (30.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (30.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Філософська думка та етика (Philosophy & Intellectual History) » (Контрольне завдання 30-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (30.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (30.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (30.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («інновації»):",
                    "acceptedAnswers": [
                        "інновації"
                    ],
                    "explanation": "The target keyword was: 【інновації】"
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
        "objective": "Comprehensive mastery of Академічний дискурс і дослідження (Academic Research & Methodology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Академічний дискурс, наукова термінологія (Academic Research) » (Частина 1) та практичне застосування Академічний дискурс і дослідження (Academic Research & Methodology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (31.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (31.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (31.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Академічний дискурс і дослідження (Academic Research & Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Академічний дискурс і дослідження (Academic Research & Methodology) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (31.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (31.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (31.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Академічний дискурс, наукова термінологія (Academic Research) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (31.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (31.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (31.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Академічний дискурс і дослідження (Academic Research & Methodology) » (Контрольне завдання 31-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (31.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (31.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (31.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («геополітика»):",
                    "acceptedAnswers": [
                        "геополітика"
                    ],
                    "explanation": "The target keyword was: 【геополітика】"
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
        "objective": "Comprehensive mastery of Академічний дискурс і дослідження (Academic Research & Methodology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Академічний дискурс, наукова термінологія (Academic Research) » (Частина 2) та практичне застосування Академічний дискурс і дослідження (Academic Research & Methodology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (31.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (31.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (31.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Академічний дискурс і дослідження (Academic Research & Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Академічний дискурс і дослідження (Academic Research & Methodology) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (31.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (31.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (31.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Академічний дискурс, наукова термінологія (Academic Research) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (31.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (31.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (31.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Академічний дискурс і дослідження (Academic Research & Methodology) » (Контрольне завдання 31-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (31.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (31.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (31.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («дипломатія»):",
                    "acceptedAnswers": [
                        "дипломатія"
                    ],
                    "explanation": "The target keyword was: 【дипломатія】"
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
        "objective": "Comprehensive mastery of Академічний дискурс і дослідження (Academic Research & Methodology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Академічний дискурс, наукова термінологія (Academic Research) » (Частина 3) та практичне застосування Академічний дискурс і дослідження (Academic Research & Methodology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (31.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (31.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (31.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Академічний дискурс і дослідження (Academic Research & Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Академічний дискурс і дослідження (Academic Research & Methodology) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (31.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (31.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (31.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Академічний дискурс, наукова термінологія (Academic Research) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (31.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (31.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (31.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Академічний дискурс і дослідження (Academic Research & Methodology) » (Контрольне завдання 31-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (31.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (31.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (31.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («безпека»):",
                    "acceptedAnswers": [
                        "безпека"
                    ],
                    "explanation": "The target keyword was: 【безпека】"
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
        "objective": "Comprehensive mastery of Академічний дискурс і дослідження (Academic Research & Methodology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Академічний дискурс, наукова термінологія (Academic Research) » (Частина 4) та практичне застосування Академічний дискурс і дослідження (Academic Research & Methodology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (31.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (31.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (31.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Академічний дискурс і дослідження (Academic Research & Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Академічний дискурс і дослідження (Academic Research & Methodology) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (31.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (31.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (31.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Академічний дискурс, наукова термінологія (Academic Research) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (31.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (31.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (31.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Академічний дискурс і дослідження (Academic Research & Methodology) » (Контрольне завдання 31-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (31.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (31.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (31.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («партнерство»):",
                    "acceptedAnswers": [
                        "партнерство"
                    ],
                    "explanation": "The target keyword was: 【партнерство】"
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
        "objective": "Comprehensive mastery of Академічний дискурс і дослідження (Academic Research & Methodology).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Академічний дискурс, наукова термінологія (Academic Research) » (Частина 5) та практичне застосування Академічний дискурс і дослідження (Academic Research & Methodology). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (31.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (31.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (31.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Академічний дискурс і дослідження (Academic Research & Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Академічний дискурс і дослідження (Academic Research & Methodology) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (31.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (31.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (31.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Академічний дискурс, наукова термінологія (Academic Research) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (31.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (31.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (31.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Академічний дискурс і дослідження (Academic Research & Methodology) » (Контрольне завдання 31-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (31.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (31.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (31.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («суверенітет»):",
                    "acceptedAnswers": [
                        "суверенітет"
                    ],
                    "explanation": "The target keyword was: 【суверенітет】"
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
        "objective": "Comprehensive mastery of Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Частина 1) та практичне застосування Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (32.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (32.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (32.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (32.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (32.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (32.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (32.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (32.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (32.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » (Контрольне завдання 32-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (32.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (32.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (32.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («посол»):",
                    "acceptedAnswers": [
                        "посол"
                    ],
                    "explanation": "The target keyword was: 【посол】"
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
        "objective": "Comprehensive mastery of Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Частина 2) та практичне застосування Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (32.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (32.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (32.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (32.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (32.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (32.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (32.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (32.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (32.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » (Контрольне завдання 32-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (32.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (32.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (32.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («посольство»):",
                    "acceptedAnswers": [
                        "посольство"
                    ],
                    "explanation": "The target keyword was: 【посольство】"
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
        "objective": "Comprehensive mastery of Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Частина 3) та практичне застосування Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (32.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (32.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (32.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (32.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (32.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (32.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (32.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (32.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (32.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » (Контрольне завдання 32-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (32.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (32.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (32.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («переговори»):",
                    "acceptedAnswers": [
                        "переговори"
                    ],
                    "explanation": "The target keyword was: 【переговори】"
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
        "objective": "Comprehensive mastery of Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Частина 4) та практичне застосування Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (32.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (32.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (32.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (32.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (32.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (32.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (32.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (32.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (32.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » (Контрольне завдання 32-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (32.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (32.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (32.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («угода»):",
                    "acceptedAnswers": [
                        "угода"
                    ],
                    "explanation": "The target keyword was: 【угода】"
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
        "objective": "Comprehensive mastery of Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Частина 5) та практичне застосування Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (32.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (32.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (32.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (32.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (32.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (32.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Міжнародна дипломатія та багатосторонні договори (Diplomacy) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (32.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (32.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (32.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Дипломатія та міжнародні відносини (Diplomacy & Foreign Affairs) » (Контрольне завдання 32-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (32.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (32.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (32.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («декларація»):",
                    "acceptedAnswers": [
                        "декларація"
                    ],
                    "explanation": "The target keyword was: 【декларація】"
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
        "objective": "Comprehensive mastery of Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Частина 1) та практичне застосування Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (33.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (33.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (33.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (33.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (33.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (33.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (33.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (33.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (33.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » (Контрольне завдання 33-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (33.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (33.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (33.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («фразеологізм»):",
                    "acceptedAnswers": [
                        "фразеологізм"
                    ],
                    "explanation": "The target keyword was: 【фразеологізм】"
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
        "objective": "Comprehensive mastery of Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Частина 2) та практичне застосування Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (33.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (33.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (33.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (33.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (33.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (33.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (33.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (33.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (33.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » (Контрольне завдання 33-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (33.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (33.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (33.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («прислів'я»):",
                    "acceptedAnswers": [
                        "прислів'я"
                    ],
                    "explanation": "The target keyword was: 【прислів'я】"
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
        "objective": "Comprehensive mastery of Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Частина 3) та практичне застосування Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (33.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (33.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (33.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (33.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (33.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (33.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (33.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (33.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (33.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » (Контрольне завдання 33-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (33.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (33.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (33.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («метафора»):",
                    "acceptedAnswers": [
                        "метафора"
                    ],
                    "explanation": "The target keyword was: 【метафора】"
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
        "objective": "Comprehensive mastery of Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Частина 4) та практичне застосування Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (33.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (33.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (33.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (33.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (33.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (33.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (33.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (33.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (33.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » (Контрольне завдання 33-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (33.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (33.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (33.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («значення»):",
                    "acceptedAnswers": [
                        "значення"
                    ],
                    "explanation": "The target keyword was: 【значення】"
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
        "objective": "Comprehensive mastery of Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Частина 5) та практичне застосування Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (33.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (33.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (33.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (33.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (33.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (33.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Високий публіцистичний та ораторський стиль (Advanced Rhetoric) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (33.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (33.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (33.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Публіцистичний стиль та риторика (Advanced Rhetoric & Public Address) » (Контрольне завдання 33-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (33.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (33.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (33.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («контекст»):",
                    "acceptedAnswers": [
                        "контекст"
                    ],
                    "explanation": "The target keyword was: 【контекст】"
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
        "objective": "Comprehensive mastery of Міжнародні саміти та державне право (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Частина 1) та практичне застосування Міжнародні саміти та державне право (C2 Capstone Statecraft). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (34.1.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (34.1.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (34.1.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Міжнародні саміти та державне право (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Міжнародні саміти та державне право (C2 Capstone Statecraft) » у частині 1?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (34.1.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (34.1.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (34.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Вправа 1):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (34.1.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (34.1.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (34.1.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Міжнародні саміти та державне право (C2 Capstone Statecraft) » (Контрольне завдання 34-1)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (34.1.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (34.1.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (34.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («саміт»):",
                    "acceptedAnswers": [
                        "саміт"
                    ],
                    "explanation": "The target keyword was: 【саміт】"
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
        "objective": "Comprehensive mastery of Міжнародні саміти та державне право (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Частина 2) та практичне застосування Міжнародні саміти та державне право (C2 Capstone Statecraft). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (34.2.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (34.2.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (34.2.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Міжнародні саміти та державне право (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Міжнародні саміти та державне право (C2 Capstone Statecraft) » у частині 2?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (34.2.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (34.2.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (34.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Вправа 2):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (34.2.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (34.2.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (34.2.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Міжнародні саміти та державне право (C2 Capstone Statecraft) » (Контрольне завдання 34-2)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (34.2.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (34.2.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (34.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («держава»):",
                    "acceptedAnswers": [
                        "держава"
                    ],
                    "explanation": "The target keyword was: 【держава】"
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
        "objective": "Comprehensive mastery of Міжнародні саміти та державне право (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Частина 3) та практичне застосування Міжнародні саміти та державне право (C2 Capstone Statecraft). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (34.3.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (34.3.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (34.3.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Міжнародні саміти та державне право (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Міжнародні саміти та державне право (C2 Capstone Statecraft) » у частині 3?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (34.3.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (34.3.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (34.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Вправа 3):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (34.3.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (34.3.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (34.3.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Міжнародні саміти та державне право (C2 Capstone Statecraft) » (Контрольне завдання 34-3)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (34.3.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (34.3.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (34.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («стратегія»):",
                    "acceptedAnswers": [
                        "стратегія"
                    ],
                    "explanation": "The target keyword was: 【стратегія】"
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
        "objective": "Comprehensive mastery of Міжнародні саміти та державне право (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Частина 4) та практичне застосування Міжнародні саміти та державне право (C2 Capstone Statecraft). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (34.4.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (34.4.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (34.4.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Міжнародні саміти та державне право (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Міжнародні саміти та державне право (C2 Capstone Statecraft) » у частині 4?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (34.4.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (34.4.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (34.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Вправа 4):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (34.4.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (34.4.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (34.4.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Міжнародні саміти та державне право (C2 Capstone Statecraft) » (Контрольне завдання 34-4)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (34.4.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (34.4.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (34.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («майбутнє»):",
                    "acceptedAnswers": [
                        "майбутнє"
                    ],
                    "explanation": "The target keyword was: 【майбутнє】"
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
        "objective": "Comprehensive mastery of Міжнародні саміти та державне право (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "У цьому уроці розглядаються фундаментальні особливості теми « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Частина 5) та практичне застосування Міжнародні саміти та державне право (C2 Capstone Statecraft). Багата система словозміни, синтаксичного зв'язку та відмінкових закінчень в українській мові забезпечує точність думки, емоційну виразність і відповідність нормам сучасної літературної мови.\n\nГраматичний аналіз та англійські глоси (Grammar Analysis & English Glosses):\nПрактичне засвоєння синтаксичних моделей сприяє вільному й упевненому володінню мовним матеріалом.",
            "examples": [
                {
                    "target": "Викладач уважно пояснює студентам ключові аспекти синтаксичної системи та словотвору (34.5.1).",
                    "reading": "Vykladach uvazhno poyasnyuye studentam klyuchovi aspekty syntaksychnoyi systemy ta slovotvoru.",
                    "translation": "The lecturer attentively explains key aspects of the syntactic system and word formation to students."
                },
                {
                    "target": "Ми щоранку ходимо до університетської бібліотеки для опрацювання важливих наукових праць (34.5.2).",
                    "reading": "My shchoranku khodymo do universytetskoyi biblioteky dlya opratsyuvannya vazhlyvykh naukovykh prats.",
                    "translation": "We go to the university library every morning to study essential scholarly works."
                },
                {
                    "target": "У старовинному центрі міста гармонійно поєднуються архітектурні пам'ятки та затишні нові парки (34.5.3).",
                    "reading": "U starovynnomu tsentri mista harmoniyno poyednuyutsya arkhitekturni pam'yatky ta zatyshni novi parky.",
                    "translation": "Architectural monuments and cozy new parks harmonize in the ancient city center."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Міжнародні саміти та державне право (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Ukrainian."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Яке речення бездоганно відповідає граматичним нормам « Міжнародні саміти та державне право (C2 Capstone Statecraft) » у частині 5?",
                    "options": [
                        "Студентка успішно підготувала змістовну доповідь для участі в щорічному науковому семінарі (34.5.1).",
                        "Учора ввечері ми дивилися надзвичайно цікавий документальний фільм про історію культури (34.5.2).",
                        "Студенти регулярно збираються в університетській бібліотеці для якісної підготовки до іспитів (34.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Виберіть варіант, який належно ілюструє концепцію « Державні саміти та міжнародне право (C2 Capstone Statecraft) » (Вправа 5):",
                    "options": [
                        "Архітектор представив новий екологічний проєкт комплексної реновації центральної паркової зони (34.5.1).",
                        "Поїзд зі Львова прибуде на центральний залізничний вокзал столиці точно за встановленим розкладом (34.5.2).",
                        "У міському ботанічному саду навесні розквітає безліч чудових квітів та рідкісних екзотичних дерев (34.5.3)."
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
                    "prompt": "Яке висловлювання повністю відповідає літературній нормі для « Міжнародні саміти та державне право (C2 Capstone Statecraft) » (Контрольне завдання 34-5)?",
                    "options": [
                        "Урядова делегація підписала важливу двосторонню угоду про довгострокову співпрацю в галузі освіти (34.5.1).",
                        "Нова лінія метрополітену з'єднає спальні житлові райони з діловим центром міста вже наступного року (34.5.2).",
                        "Провідні науковці з різних країн світу беруть найактивнішу участь у засіданнях міжнародного конгресу (34.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («лідерство»):",
                    "acceptedAnswers": [
                        "лідерство"
                    ],
                    "explanation": "The target keyword was: 【лідерство】"
                }
            ]
        }
    }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['ukrainian'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
